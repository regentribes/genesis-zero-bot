use chrono::{DateTime, Duration, Utc};
use std::collections::HashMap;
use uuid::Uuid;

use crate::models::TrustDimension;

/// Error types for time-lock violations
#[derive(Debug, Clone, PartialEq)]
pub enum TimeLockError {
    /// Score change is within the lock period
    ScoreLocked {
        locked_until: DateTime<Utc>,
        remaining_seconds: i64,
    },
    /// Too many score changes within the rate window
    RateLimitExceeded {
        changes_in_window: usize,
        max_allowed: usize,
        window_resets_at: DateTime<Utc>,
    },
    /// Member is too new to receive large trust changes
    NewMemberProtection {
        member_age_days: f64,
        min_age_days: f64,
    },
}

impl std::fmt::Display for TimeLockError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            TimeLockError::ScoreLocked {
                remaining_seconds, ..
            } => write!(f, "score locked for {} more seconds", remaining_seconds),
            TimeLockError::RateLimitExceeded {
                changes_in_window,
                max_allowed,
                ..
            } => write!(
                f,
                "rate limit exceeded: {} changes in window (max {})",
                changes_in_window, max_allowed
            ),
            TimeLockError::NewMemberProtection {
                member_age_days,
                min_age_days,
            } => write!(
                f,
                "new member protection: member is {:.1} days old (min {:.1})",
                member_age_days, min_age_days
            ),
        }
    }
}

impl std::error::Error for TimeLockError {}

/// Configuration for the time-lock mechanism
#[derive(Debug, Clone)]
pub struct TimeLockConfig {
    /// Duration a score is locked after a significant change
    pub lock_duration: Duration,
    /// Maximum number of score changes per member-pair within the rate window
    pub max_changes_per_window: usize,
    /// Rolling window for rate limiting
    pub rate_window: Duration,
    /// Minimum magnitude to trigger a lock (small changes pass through)
    pub lock_threshold: f64,
    /// Minimum member age (days) before they can receive large trust events
    pub new_member_protection_days: f64,
    /// Magnitude threshold that triggers new-member protection
    pub new_member_magnitude_threshold: f64,
}

impl Default for TimeLockConfig {
    fn default() -> Self {
        Self {
            lock_duration: Duration::days(30),
            max_changes_per_window: 10,
            rate_window: Duration::days(30),
            lock_threshold: 5.0,
            new_member_protection_days: 7.0,
            new_member_magnitude_threshold: 7.0,
        }
    }
}

/// Key for tracking locks between a pair of members on a specific dimension
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct LockKey {
    /// Smaller UUID first for canonical ordering
    pub member_a: Uuid,
    pub member_b: Uuid,
    pub dimension: TrustDimension,
}

impl LockKey {
    pub fn new(a: Uuid, b: Uuid, dimension: TrustDimension) -> Self {
        // Canonical ordering ensures (a,b) == (b,a)
        let (member_a, member_b) = if a <= b { (a, b) } else { (b, a) };
        Self {
            member_a,
            member_b,
            dimension,
        }
    }
}

/// Record of a score change event for rate limiting
#[derive(Debug, Clone)]
pub struct ChangeRecord {
    pub timestamp: DateTime<Utc>,
    pub magnitude: f64,
}

/// State for a single lock: when it expires and its change history
#[derive(Debug, Clone)]
pub struct LockState {
    /// When the current lock expires (None if unlocked)
    pub locked_until: Option<DateTime<Utc>>,
    /// History of changes within the rate window
    pub change_history: Vec<ChangeRecord>,
}

impl LockState {
    pub fn new() -> Self {
        Self {
            locked_until: None,
            change_history: Vec::new(),
        }
    }
}

impl Default for LockState {
    fn default() -> Self {
        Self::new()
    }
}

/// 30-day time-lock mechanism to prevent viral manipulation of affinity scores.
///
/// The time-lock enforces three layers of protection:
/// 1. **Score locking**: After a significant score change, the pair is locked
///    for the configured duration (default 30 days), preventing further changes.
/// 2. **Rate limiting**: Even for sub-threshold changes, a maximum number of
///    changes per rolling window is enforced.
/// 3. **New member protection**: New members cannot receive large trust events
///    until they have been in the community for a minimum period.
pub struct TimeLock {
    pub config: TimeLockConfig,
    locks: HashMap<LockKey, LockState>,
}

impl TimeLock {
    pub fn new() -> Self {
        Self {
            config: TimeLockConfig::default(),
            locks: HashMap::new(),
        }
    }

    pub fn with_config(config: TimeLockConfig) -> Self {
        Self {
            config,
            locks: HashMap::new(),
        }
    }

    /// Check if a score change is allowed between two members on a dimension.
    ///
    /// Returns Ok(()) if the change is permitted, or an appropriate error if blocked.
    pub fn check_allowed(
        &self,
        from: Uuid,
        to: Uuid,
        dimension: TrustDimension,
        magnitude: f64,
        now: DateTime<Utc>,
    ) -> Result<(), TimeLockError> {
        let key = LockKey::new(from, to, dimension);

        if let Some(state) = self.locks.get(&key) {
            // Check hard lock
            if let Some(until) = state.locked_until {
                if now < until {
                    return Err(TimeLockError::ScoreLocked {
                        locked_until: until,
                        remaining_seconds: (until - now).num_seconds(),
                    });
                }
            }

            // Check rate limit (count changes within window)
            let window_start = now - self.config.rate_window;
            let changes_in_window = state
                .change_history
                .iter()
                .filter(|r| r.timestamp >= window_start)
                .count();

            if changes_in_window >= self.config.max_changes_per_window {
                // Find when the oldest in-window change will expire
                let oldest_in_window = state
                    .change_history
                    .iter()
                    .filter(|r| r.timestamp >= window_start)
                    .min_by_key(|r| r.timestamp)
                    .map(|r| r.timestamp + self.config.rate_window)
                    .unwrap_or(now);

                return Err(TimeLockError::RateLimitExceeded {
                    changes_in_window,
                    max_allowed: self.config.max_changes_per_window,
                    window_resets_at: oldest_in_window,
                });
            }
        }

        // Magnitude-based checks don't need existing state
        let _ = magnitude; // magnitude checked via lock_threshold in record_change

        Ok(())
    }

    /// Check if a new member should be protected from large trust changes.
    pub fn check_new_member_protection(
        &self,
        member_created_at: DateTime<Utc>,
        magnitude: f64,
        now: DateTime<Utc>,
    ) -> Result<(), TimeLockError> {
        let age_days = (now - member_created_at).num_hours() as f64 / 24.0;

        if age_days < self.config.new_member_protection_days
            && magnitude.abs() >= self.config.new_member_magnitude_threshold
        {
            return Err(TimeLockError::NewMemberProtection {
                member_age_days: age_days,
                min_age_days: self.config.new_member_protection_days,
            });
        }

        Ok(())
    }

    /// Record a score change and apply a lock if the magnitude exceeds the threshold.
    ///
    /// Call this AFTER the change has been applied and validated.
    pub fn record_change(
        &mut self,
        from: Uuid,
        to: Uuid,
        dimension: TrustDimension,
        magnitude: f64,
        now: DateTime<Utc>,
    ) {
        let key = LockKey::new(from, to, dimension);
        let state = self.locks.entry(key).or_insert_with(LockState::new);

        // Prune old history outside the rate window
        let window_start = now - self.config.rate_window;
        state
            .change_history
            .retain(|r| r.timestamp >= window_start);

        // Record this change
        state.change_history.push(ChangeRecord {
            timestamp: now,
            magnitude,
        });

        // Apply lock if magnitude exceeds threshold
        if magnitude.abs() >= self.config.lock_threshold {
            state.locked_until = Some(now + self.config.lock_duration);
        }
    }

    /// Check if a specific pair+dimension is currently locked.
    pub fn is_locked(
        &self,
        from: Uuid,
        to: Uuid,
        dimension: TrustDimension,
        now: DateTime<Utc>,
    ) -> bool {
        let key = LockKey::new(from, to, dimension);
        match self.locks.get(&key) {
            Some(state) => match state.locked_until {
                Some(until) => now < until,
                None => false,
            },
            None => false,
        }
    }

    /// Get the lock expiry time for a pair+dimension, if locked.
    pub fn lock_expiry(
        &self,
        from: Uuid,
        to: Uuid,
        dimension: TrustDimension,
    ) -> Option<DateTime<Utc>> {
        let key = LockKey::new(from, to, dimension);
        self.locks
            .get(&key)
            .and_then(|state| state.locked_until)
    }

    /// Get the number of changes in the current rate window for a pair+dimension.
    pub fn changes_in_window(
        &self,
        from: Uuid,
        to: Uuid,
        dimension: TrustDimension,
        now: DateTime<Utc>,
    ) -> usize {
        let key = LockKey::new(from, to, dimension);
        match self.locks.get(&key) {
            Some(state) => {
                let window_start = now - self.config.rate_window;
                state
                    .change_history
                    .iter()
                    .filter(|r| r.timestamp >= window_start)
                    .count()
            }
            None => 0,
        }
    }

    /// Clear an expired lock (useful for batch cleanup).
    pub fn clear_expired(&mut self, now: DateTime<Utc>) {
        for state in self.locks.values_mut() {
            if let Some(until) = state.locked_until {
                if now >= until {
                    state.locked_until = None;
                }
            }
            // Also prune old history
            let window_start = now - self.config.rate_window;
            state
                .change_history
                .retain(|r| r.timestamp >= window_start);
        }
    }

    /// Full validation: check all time-lock constraints for a trust event.
    ///
    /// Combines lock check, rate limit check, and new member protection into
    /// a single call. Returns Ok(()) if all checks pass.
    pub fn validate_event(
        &self,
        from: Uuid,
        to: Uuid,
        dimension: TrustDimension,
        magnitude: f64,
        target_member_created_at: DateTime<Utc>,
        now: DateTime<Utc>,
    ) -> Result<(), TimeLockError> {
        self.check_new_member_protection(target_member_created_at, magnitude, now)?;
        self.check_allowed(from, to, dimension, magnitude, now)?;
        Ok(())
    }
}

impl Default for TimeLock {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn pair() -> (Uuid, Uuid) {
        (Uuid::new_v4(), Uuid::new_v4())
    }

    #[test]
    fn no_lock_initially() {
        let tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();
        assert!(!tl.is_locked(a, b, TrustDimension::Competence, now));
        assert!(tl
            .check_allowed(a, b, TrustDimension::Competence, 5.0, now)
            .is_ok());
    }

    #[test]
    fn large_change_triggers_lock() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        // Below threshold — no lock
        tl.record_change(a, b, TrustDimension::Competence, 3.0, now);
        assert!(!tl.is_locked(a, b, TrustDimension::Competence, now));

        // At threshold — triggers lock
        tl.record_change(a, b, TrustDimension::Competence, 5.0, now);
        assert!(tl.is_locked(a, b, TrustDimension::Competence, now));
    }

    #[test]
    fn locked_pair_rejected() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        tl.record_change(a, b, TrustDimension::Integrity, 8.0, now);
        let result = tl.check_allowed(a, b, TrustDimension::Integrity, 3.0, now);
        assert!(matches!(result, Err(TimeLockError::ScoreLocked { .. })));
    }

    #[test]
    fn lock_expires_after_duration() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        tl.record_change(a, b, TrustDimension::Competence, 10.0, now);
        assert!(tl.is_locked(a, b, TrustDimension::Competence, now));

        // 31 days later — lock expired
        let future = now + Duration::days(31);
        assert!(!tl.is_locked(a, b, TrustDimension::Competence, future));
        assert!(tl
            .check_allowed(a, b, TrustDimension::Competence, 5.0, future)
            .is_ok());
    }

    #[test]
    fn lock_is_dimension_specific() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        tl.record_change(a, b, TrustDimension::Competence, 8.0, now);
        assert!(tl.is_locked(a, b, TrustDimension::Competence, now));
        // Other dimensions remain unlocked
        assert!(!tl.is_locked(a, b, TrustDimension::Integrity, now));
        assert!(!tl.is_locked(a, b, TrustDimension::Openness, now));
    }

    #[test]
    fn canonical_key_order() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        // Record with (a, b), check with (b, a) — should be the same lock
        tl.record_change(a, b, TrustDimension::Reliability, 8.0, now);
        assert!(tl.is_locked(b, a, TrustDimension::Reliability, now));
    }

    #[test]
    fn rate_limit_enforced() {
        let config = TimeLockConfig {
            max_changes_per_window: 3,
            lock_threshold: 100.0, // high threshold so locks don't interfere
            rate_window: Duration::days(30),
            ..TimeLockConfig::default()
        };
        let mut tl = TimeLock::with_config(config);
        let (a, b) = pair();
        let now = Utc::now();

        // 3 changes should be fine
        for i in 0..3 {
            let t = now + Duration::minutes(i);
            assert!(tl
                .check_allowed(a, b, TrustDimension::Competence, 2.0, t)
                .is_ok());
            tl.record_change(a, b, TrustDimension::Competence, 2.0, t);
        }

        // 4th should be rejected
        let t4 = now + Duration::minutes(3);
        let result = tl.check_allowed(a, b, TrustDimension::Competence, 2.0, t4);
        assert!(matches!(
            result,
            Err(TimeLockError::RateLimitExceeded { .. })
        ));
    }

    #[test]
    fn rate_limit_resets_after_window() {
        let config = TimeLockConfig {
            max_changes_per_window: 2,
            lock_threshold: 100.0,
            rate_window: Duration::days(7),
            ..TimeLockConfig::default()
        };
        let mut tl = TimeLock::with_config(config);
        let (a, b) = pair();
        let now = Utc::now();

        tl.record_change(a, b, TrustDimension::Competence, 2.0, now);
        tl.record_change(
            a,
            b,
            TrustDimension::Competence,
            2.0,
            now + Duration::minutes(1),
        );

        // After 8 days, window should have reset
        let future = now + Duration::days(8);
        assert!(tl
            .check_allowed(a, b, TrustDimension::Competence, 2.0, future)
            .is_ok());
        assert_eq!(
            tl.changes_in_window(a, b, TrustDimension::Competence, future),
            0
        );
    }

    #[test]
    fn new_member_protection_blocks_large_events() {
        let tl = TimeLock::new();
        let now = Utc::now();
        // Member created 2 days ago (within 7-day protection period)
        let created = now - Duration::days(2);

        let result = tl.check_new_member_protection(created, 8.0, now);
        assert!(matches!(
            result,
            Err(TimeLockError::NewMemberProtection { .. })
        ));
    }

    #[test]
    fn new_member_protection_allows_small_events() {
        let tl = TimeLock::new();
        let now = Utc::now();
        let created = now - Duration::days(2);

        // Below magnitude threshold — allowed
        let result = tl.check_new_member_protection(created, 3.0, now);
        assert!(result.is_ok());
    }

    #[test]
    fn new_member_protection_expires() {
        let tl = TimeLock::new();
        let now = Utc::now();
        // Member created 10 days ago (past 7-day protection)
        let created = now - Duration::days(10);

        let result = tl.check_new_member_protection(created, 8.0, now);
        assert!(result.is_ok());
    }

    #[test]
    fn validate_event_combines_all_checks() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();
        let old_member = now - Duration::days(60);

        // First event should pass all checks
        assert!(tl
            .validate_event(a, b, TrustDimension::Competence, 8.0, old_member, now)
            .is_ok());

        // Record the change to trigger lock
        tl.record_change(a, b, TrustDimension::Competence, 8.0, now);

        // Second event on same dimension should be blocked by lock
        let result = tl.validate_event(a, b, TrustDimension::Competence, 3.0, old_member, now);
        assert!(matches!(result, Err(TimeLockError::ScoreLocked { .. })));
    }

    #[test]
    fn validate_event_new_member_takes_priority() {
        let tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();
        let new_member = now - Duration::days(1);

        // New member check should fail first (before lock check)
        let result = tl.validate_event(
            a,
            b,
            TrustDimension::Integrity,
            9.0,
            new_member,
            now,
        );
        assert!(matches!(
            result,
            Err(TimeLockError::NewMemberProtection { .. })
        ));
    }

    #[test]
    fn lock_expiry_returns_correct_time() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        assert!(tl
            .lock_expiry(a, b, TrustDimension::Competence)
            .is_none());

        tl.record_change(a, b, TrustDimension::Competence, 8.0, now);

        let expiry = tl.lock_expiry(a, b, TrustDimension::Competence);
        assert!(expiry.is_some());
        let expected = now + Duration::days(30);
        assert!((expiry.unwrap() - expected).num_seconds().abs() < 2);
    }

    #[test]
    fn clear_expired_removes_old_locks() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        tl.record_change(a, b, TrustDimension::Competence, 8.0, now);
        assert!(tl.is_locked(a, b, TrustDimension::Competence, now));

        // Clear after lock duration
        let future = now + Duration::days(31);
        tl.clear_expired(future);
        assert!(tl
            .lock_expiry(a, b, TrustDimension::Competence)
            .is_none());
    }

    #[test]
    fn changes_in_window_count() {
        let config = TimeLockConfig {
            lock_threshold: 100.0,
            ..TimeLockConfig::default()
        };
        let mut tl = TimeLock::with_config(config);
        let (a, b) = pair();
        let now = Utc::now();

        assert_eq!(
            tl.changes_in_window(a, b, TrustDimension::Competence, now),
            0
        );

        tl.record_change(a, b, TrustDimension::Competence, 2.0, now);
        tl.record_change(
            a,
            b,
            TrustDimension::Competence,
            3.0,
            now + Duration::hours(1),
        );

        assert_eq!(
            tl.changes_in_window(a, b, TrustDimension::Competence, now + Duration::hours(2)),
            2
        );
    }

    #[test]
    fn negative_magnitude_triggers_lock() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        // Large negative magnitude should also trigger lock
        tl.record_change(a, b, TrustDimension::Benevolence, -7.0, now);
        assert!(tl.is_locked(a, b, TrustDimension::Benevolence, now));
    }

    #[test]
    fn sub_threshold_changes_do_not_lock() {
        let mut tl = TimeLock::new();
        let (a, b) = pair();
        let now = Utc::now();

        // Multiple small changes — no lock
        for i in 0..5 {
            tl.record_change(
                a,
                b,
                TrustDimension::Openness,
                4.9,
                now + Duration::minutes(i),
            );
        }
        assert!(!tl.is_locked(a, b, TrustDimension::Openness, now + Duration::minutes(5)));
    }
}
