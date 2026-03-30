use crate::models::{FieldOfTrust, TrustEvent};

/// Processes trust events and updates field of trust indicators
pub struct TrustProcessor;

impl TrustProcessor {
    pub fn new() -> Self {
        Self
    }

    /// Process a trust event, updating the member's field of trust
    pub fn process_event(
        &self,
        field: &mut FieldOfTrust,
        event: &TrustEvent,
    ) {
        // TODO: implement in ame:trust task
        field.increment(event.dimension, event.magnitude);
    }
}

impl Default for TrustProcessor {
    fn default() -> Self {
        Self::new()
    }
}
