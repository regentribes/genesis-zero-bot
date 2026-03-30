use chrono::{DateTime, Duration, Utc};
use std::collections::HashMap;
use uuid::Uuid;

use crate::models::{FieldOfTrust, TrustDimension, TrustEvent};

/// Error types for trust processing
#[derive(Debug, Clone, PartialEq)]
pub enum TrustError {
    /// Member cannot issue trust events to themselves
    SelfTrust,
    /// Magnitude must be in [-10.0, 10.0]
    MagnitudeOutOfRange(f64),
    /// Event timestamp is in the future
    FutureTimestamp,
}

impl std::fmt::Display for TrustError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            TrustError::SelfTrust => write!(f, "cannot issue trust event to self"),
            TrustError::MagnitudeOutOfRange(m) => {
                write!(f, "magnitude {} out of range [-10.0, 10.0]", m)
            }
            TrustError::FutureTimestamp => write!(f, "event timestamp is in the future"),
        }
    }
}

impl std::error::Error for TrustError {}

/// Configuration for trust processing behavior
#[derive(Debug, Clone)]
pub struct TrustConfig {
    /// Maximum allowed magnitude per event (absolute value)
    pub max_magnitude: f64,
    /// Diminishing returns curve steepness (higher = stronger diminishing)
    pub diminishing_factor: f64,
    /// Daily decay rate as fraction (e.g. 0.01 = 1% per day)
    pub daily_decay_rate: f64,
    /// Minimum trust floor (trust won't decay below this)
    pub decay_floor: f64,
}

impl Default for TrustConfig {
    fn default() -> Self {
        Self {
            max_magnitude: 10.0,
            diminishing_factor: 0.02,
            daily_decay_rate: 0.005,
            decay_floor: 0.0,
        }
    }
}

/// Processes trust events and updates field of trust indicators.
///
/// Applies diminishing returns so trust becomes harder to increase
/// at higher levels. Supports trust decay over time and aggregate scoring.
pub struct TrustProcessor {
    pub config: TrustConfig,
}

impl TrustProcessor {
    pub fn new() -> Self {
        Self {
            config: TrustConfig::default(),
        }
    }

    pub fn with_config(config: TrustConfig) -> Self {
        Self { config }
    }

    /// Validate a trust event before processing.
    pub fn validate_event(&self, event: &TrustEvent) -> Result<(), TrustError> {
        if event.from_member == event.to_member {
            return Err(TrustError::SelfTrust);
        }
        if event.magnitude.abs() > self.config.max_magnitude {
            return Err(TrustError::MagnitudeOutOfRange(event.magnitude));
        }
        if event.timestamp > Utc::now() + Duration::seconds(60) {
            return Err(TrustError::FutureTimestamp);
        }
        Ok(())
    }

    /// Process a trust event, updating the member's field of trust.
    ///
    /// Applies diminishing returns: as trust in a dimension increases,
    /// each additional positive event has less impact. This prevents
    /// rapid trust inflation. Negative events apply at full magnitude
    /// to allow fast recovery from misplaced trust.
    pub fn process_event(
        &self,
        field: &mut FieldOfTrust,
        event: &TrustEvent,
    ) -> Result<f64, TrustError> {
        self.validate_event(event)?;

        let current = field.get(event.dimension);
        let delta = self.compute_delta(current, event.magnitude);
        field.increment(event.dimension, delta);

        Ok(field.get(event.dimension))
    }

    /// Compute the effective delta after applying diminishing returns.
    ///
    /// For positive magnitudes: delta = magnitude * (1 - current/100)^diminishing_factor_scaled
    /// This means trust near 0 grows quickly but trust near 100 grows slowly.
    ///
    /// For negative magnitudes: applied at full strength (trust can be lost fast).
    fn compute_delta(&self, current: f64, magnitude: f64) -> f64 {
        if magnitude >= 0.0 {
            // Diminishing returns: harder to increase trust at higher levels
            let headroom = 1.0 - (current / 100.0);
            let factor = headroom.powf(self.config.diminishing_factor * current.max(1.0) / 10.0);
            magnitude * factor
        } else {
            // Negative trust applies at full magnitude (fast trust loss)
            magnitude
        }
    }

    /// Apply time-based trust decay across all dimensions.
    ///
    /// Trust decays at a configurable daily rate, representing the idea
    /// that trust must be actively maintained through ongoing interaction.
    pub fn apply_decay(
        &self,
        field: &mut FieldOfTrust,
        last_interaction: DateTime<Utc>,
        now: DateTime<Utc>,
    ) {
        let days_elapsed = (now - last_interaction).num_hours() as f64 / 24.0;
        if days_elapsed <= 0.0 {
            return;
        }

        let retention = (1.0 - self.config.daily_decay_rate).powf(days_elapsed);

        for dim in TrustDimension::all() {
            let current = field.get(*dim);
            if current > self.config.decay_floor {
                let decayed = (current * retention).max(self.config.decay_floor);
                // Use increment with negative delta to set new value
                let delta = decayed - current;
                field.increment(*dim, delta);
            }
        }
    }

    /// Compute an aggregate trust score across all five dimensions.
    /// Returns a value in [0.0, 100.0].
    ///
    /// Dimensions are weighted: integrity and reliability carry more weight
    /// than competence alone, reflecting that character-based trust matters
    /// more in community contexts.
    pub fn aggregate_trust(field: &FieldOfTrust) -> f64 {
        let weights: [(TrustDimension, f64); 5] = [
            (TrustDimension::Competence, 1.0),
            (TrustDimension::Reliability, 1.5),
            (TrustDimension::Integrity, 2.0),
            (TrustDimension::Benevolence, 1.5),
            (TrustDimension::Openness, 1.0),
        ];

        let (weighted_sum, total_weight) = weights.iter().fold((0.0, 0.0), |(sum, tw), (dim, w)| {
            (sum + field.get(*dim) * w, tw + w)
        });

        if total_weight > 0.0 {
            weighted_sum / total_weight
        } else {
            0.0
        }
    }

    /// Process a batch of trust events for a single member.
    /// Events should be sorted by timestamp. Returns the final field state.
    pub fn process_batch(
        &self,
        field: &mut FieldOfTrust,
        events: &[TrustEvent],
    ) -> Vec<Result<f64, TrustError>> {
        events
            .iter()
            .map(|event| self.process_event(field, event))
            .collect()
    }

    /// Compute pairwise trust between two members given their event histories.
    /// Returns (a_trusts_b, b_trusts_a) as separate FieldOfTrust instances.
    pub fn compute_bidirectional_trust(
        &self,
        events: &[TrustEvent],
        member_a: Uuid,
        member_b: Uuid,
    ) -> (FieldOfTrust, FieldOfTrust) {
        let mut a_trusts_b = FieldOfTrust::new();
        let mut b_trusts_a = FieldOfTrust::new();

        for event in events {
            if event.from_member == member_a && event.to_member == member_b {
                let _ = self.process_event(&mut a_trusts_b, event);
            } else if event.from_member == member_b && event.to_member == member_a {
                let _ = self.process_event(&mut b_trusts_a, event);
            }
        }

        (a_trusts_b, b_trusts_a)
    }

    /// Compute trust levels for a member from all their incoming trust events.
    /// Returns a map of (from_member_id -> FieldOfTrust they grant).
    pub fn compute_trust_map(
        &self,
        events: &[TrustEvent],
        target_member: Uuid,
    ) -> HashMap<Uuid, FieldOfTrust> {
        let mut trust_map: HashMap<Uuid, FieldOfTrust> = HashMap::new();

        for event in events {
            if event.to_member == target_member {
                let field = trust_map
                    .entry(event.from_member)
                    .or_insert_with(FieldOfTrust::new);
                let _ = self.process_event(field, event);
            }
        }

        trust_map
    }
}

impl Default for TrustProcessor {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn make_event(
        from: Uuid,
        to: Uuid,
        dim: TrustDimension,
        magnitude: f64,
    ) -> TrustEvent {
        TrustEvent {
            id: Uuid::new_v4(),
            from_member: from,
            to_member: to,
            dimension: dim,
            magnitude,
            timestamp: Utc::now(),
            context: "test".into(),
        }
    }

    #[test]
    fn process_single_positive_event() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();
        let event = make_event(from, to, TrustDimension::Competence, 5.0);

        let result = proc.process_event(&mut field, &event);
        assert!(result.is_ok());
        let new_val = result.unwrap();
        assert!(new_val > 0.0, "trust should increase");
        assert!(new_val <= 5.0, "first event should apply near-full magnitude");
    }

    #[test]
    fn process_negative_event_decreases_trust() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();

        // Build up some trust first
        for _ in 0..5 {
            let event = make_event(from, to, TrustDimension::Integrity, 5.0);
            proc.process_event(&mut field, &event).unwrap();
        }
        let before = field.get(TrustDimension::Integrity);
        assert!(before > 0.0);

        // Negative event
        let neg = make_event(from, to, TrustDimension::Integrity, -3.0);
        proc.process_event(&mut field, &neg).unwrap();
        let after = field.get(TrustDimension::Integrity);
        assert!(after < before, "negative event should decrease trust");
    }

    #[test]
    fn self_trust_rejected() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let me = Uuid::new_v4();
        let event = make_event(me, me, TrustDimension::Competence, 5.0);
        assert_eq!(
            proc.process_event(&mut field, &event),
            Err(TrustError::SelfTrust)
        );
    }

    #[test]
    fn magnitude_out_of_range_rejected() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();
        let event = make_event(from, to, TrustDimension::Competence, 15.0);
        assert!(matches!(
            proc.process_event(&mut field, &event),
            Err(TrustError::MagnitudeOutOfRange(_))
        ));
    }

    #[test]
    fn diminishing_returns_at_high_trust() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();

        // Apply many events to build trust
        let mut deltas = Vec::new();
        for _ in 0..20 {
            let before = field.get(TrustDimension::Reliability);
            let event = make_event(from, to, TrustDimension::Reliability, 5.0);
            proc.process_event(&mut field, &event).unwrap();
            let after = field.get(TrustDimension::Reliability);
            deltas.push(after - before);
        }

        // Later deltas should be smaller than earlier ones (diminishing returns)
        let first_five_avg: f64 = deltas[..5].iter().sum::<f64>() / 5.0;
        let last_five_avg: f64 = deltas[15..].iter().sum::<f64>() / 5.0;
        assert!(
            last_five_avg < first_five_avg,
            "later deltas ({}) should be smaller than earlier ones ({})",
            last_five_avg,
            first_five_avg
        );
    }

    #[test]
    fn trust_never_exceeds_100() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();

        for _ in 0..200 {
            let event = make_event(from, to, TrustDimension::Benevolence, 10.0);
            proc.process_event(&mut field, &event).unwrap();
        }
        assert!(
            field.get(TrustDimension::Benevolence) <= 100.0,
            "trust should never exceed 100"
        );
    }

    #[test]
    fn trust_never_below_zero() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();

        for _ in 0..50 {
            let event = make_event(from, to, TrustDimension::Openness, -10.0);
            proc.process_event(&mut field, &event).unwrap();
        }
        assert!(
            field.get(TrustDimension::Openness) >= 0.0,
            "trust should never go below 0"
        );
    }

    #[test]
    fn decay_reduces_trust_over_time() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        // Manually set trust high
        field.increment(TrustDimension::Competence, 50.0);
        field.increment(TrustDimension::Reliability, 30.0);

        let last_interaction = Utc::now() - Duration::days(30);
        proc.apply_decay(&mut field, last_interaction, Utc::now());

        assert!(
            field.get(TrustDimension::Competence) < 50.0,
            "trust should decay after 30 days"
        );
        assert!(
            field.get(TrustDimension::Reliability) < 30.0,
            "reliability should also decay"
        );
    }

    #[test]
    fn decay_respects_floor() {
        let config = TrustConfig {
            decay_floor: 5.0,
            daily_decay_rate: 0.5, // aggressive decay for testing
            ..TrustConfig::default()
        };
        let proc = TrustProcessor::with_config(config);
        let mut field = FieldOfTrust::new();
        field.increment(TrustDimension::Integrity, 10.0);

        let last_interaction = Utc::now() - Duration::days(365);
        proc.apply_decay(&mut field, last_interaction, Utc::now());

        assert!(
            field.get(TrustDimension::Integrity) >= 5.0,
            "trust should not decay below floor, got {}",
            field.get(TrustDimension::Integrity)
        );
    }

    #[test]
    fn no_decay_for_recent_interaction() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        field.increment(TrustDimension::Competence, 50.0);

        let last_interaction = Utc::now();
        proc.apply_decay(&mut field, last_interaction, Utc::now());

        // Trust should remain at 50 (or very close, given floating point)
        assert!(
            (field.get(TrustDimension::Competence) - 50.0).abs() < 0.01,
            "no decay expected for recent interaction"
        );
    }

    #[test]
    fn aggregate_trust_weighted_correctly() {
        let mut field = FieldOfTrust::new();
        // Set all dimensions to same value
        for dim in TrustDimension::all() {
            field.increment(*dim, 50.0);
        }
        let agg = TrustProcessor::aggregate_trust(&field);
        assert!(
            (agg - 50.0).abs() < 0.01,
            "uniform trust should give uniform aggregate, got {}",
            agg
        );
    }

    #[test]
    fn aggregate_integrity_weighted_higher() {
        let mut field = FieldOfTrust::new();
        // Only integrity has trust
        field.increment(TrustDimension::Integrity, 100.0);
        let integrity_only = TrustProcessor::aggregate_trust(&field);

        let mut field2 = FieldOfTrust::new();
        // Only competence has trust
        field2.increment(TrustDimension::Competence, 100.0);
        let competence_only = TrustProcessor::aggregate_trust(&field2);

        assert!(
            integrity_only > competence_only,
            "integrity ({}) should contribute more than competence ({})",
            integrity_only,
            competence_only
        );
    }

    #[test]
    fn aggregate_zero_trust() {
        let field = FieldOfTrust::new();
        assert_eq!(TrustProcessor::aggregate_trust(&field), 0.0);
    }

    #[test]
    fn bidirectional_trust_independent() {
        let proc = TrustProcessor::new();
        let alice = Uuid::new_v4();
        let bob = Uuid::new_v4();

        let events = vec![
            make_event(alice, bob, TrustDimension::Competence, 8.0),
            make_event(alice, bob, TrustDimension::Competence, 5.0),
            make_event(bob, alice, TrustDimension::Competence, 2.0),
        ];

        let (a_trusts_b, b_trusts_a) = proc.compute_bidirectional_trust(&events, alice, bob);
        assert!(
            a_trusts_b.get(TrustDimension::Competence)
                > b_trusts_a.get(TrustDimension::Competence),
            "Alice gave more trust to Bob than vice versa"
        );
    }

    #[test]
    fn trust_map_groups_by_source() {
        let proc = TrustProcessor::new();
        let alice = Uuid::new_v4();
        let bob = Uuid::new_v4();
        let charlie = Uuid::new_v4();
        let target = Uuid::new_v4();

        let events = vec![
            make_event(alice, target, TrustDimension::Integrity, 5.0),
            make_event(bob, target, TrustDimension::Reliability, 3.0),
            make_event(charlie, target, TrustDimension::Openness, 7.0),
            make_event(alice, target, TrustDimension::Benevolence, 4.0),
            // Event not targeting our member — should be ignored
            make_event(alice, bob, TrustDimension::Competence, 9.0),
        ];

        let map = proc.compute_trust_map(&events, target);
        assert_eq!(map.len(), 3, "should have 3 trust sources");
        assert!(map.contains_key(&alice));
        assert!(map.contains_key(&bob));
        assert!(map.contains_key(&charlie));
        // Alice gave integrity + benevolence
        assert!(map[&alice].get(TrustDimension::Integrity) > 0.0);
        assert!(map[&alice].get(TrustDimension::Benevolence) > 0.0);
    }

    #[test]
    fn batch_processing_accumulates() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();

        let events: Vec<TrustEvent> = (0..5)
            .map(|_| make_event(from, to, TrustDimension::Competence, 3.0))
            .collect();

        let results = proc.process_batch(&mut field, &events);
        assert!(results.iter().all(|r| r.is_ok()));

        // Each successive result should be higher
        let vals: Vec<f64> = results.into_iter().map(|r| r.unwrap()).collect();
        for window in vals.windows(2) {
            assert!(window[1] > window[0], "trust should increase monotonically");
        }
    }

    #[test]
    fn batch_with_invalid_event_partial_success() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();

        let events = vec![
            make_event(from, to, TrustDimension::Competence, 3.0),
            make_event(from, from, TrustDimension::Competence, 3.0), // self-trust
            make_event(from, to, TrustDimension::Competence, 3.0),
        ];

        let results = proc.process_batch(&mut field, &events);
        assert!(results[0].is_ok());
        assert_eq!(results[1], Err(TrustError::SelfTrust));
        assert!(results[2].is_ok());
    }

    #[test]
    fn multiple_dimensions_independent() {
        let proc = TrustProcessor::new();
        let mut field = FieldOfTrust::new();
        let from = Uuid::new_v4();
        let to = Uuid::new_v4();

        let e1 = make_event(from, to, TrustDimension::Competence, 8.0);
        let e2 = make_event(from, to, TrustDimension::Openness, 2.0);

        proc.process_event(&mut field, &e1).unwrap();
        proc.process_event(&mut field, &e2).unwrap();

        assert!(
            field.get(TrustDimension::Competence) > field.get(TrustDimension::Openness),
            "different magnitudes should yield different dimension values"
        );
        assert_eq!(
            field.get(TrustDimension::Integrity),
            0.0,
            "untouched dimension should remain zero"
        );
    }
}
