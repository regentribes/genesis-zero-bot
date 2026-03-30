use chrono::{DateTime, Duration, Utc};

/// 30-day time-lock mechanism to prevent viral manipulation of affinity scores
pub struct TimeLock {
    pub duration: Duration,
}

impl TimeLock {
    pub fn new() -> Self {
        Self {
            duration: Duration::days(30),
        }
    }

    /// Check if a score change is within the lock period
    pub fn is_locked(&self, locked_until: Option<DateTime<Utc>>) -> bool {
        match locked_until {
            Some(until) => Utc::now() < until,
            None => false,
        }
    }

    /// Compute the lock expiry for a new score
    pub fn lock_expiry(&self) -> DateTime<Utc> {
        Utc::now() + self.duration
    }
}

impl Default for TimeLock {
    fn default() -> Self {
        Self::new()
    }
}
