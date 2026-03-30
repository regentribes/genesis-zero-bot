//! Sacred Clown - Productive disruption preventing premature closure
//!
//! Introduces randomized perturbations to affinity clusters to prevent
//! echo chambers and groupthink from solidifying prematurely.

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SacredClownConfig {
    pub disruption_threshold: f64,
    pub cooldown_hours: u32,
}

impl Default for SacredClownConfig {
    fn default() -> Self {
        Self {
            disruption_threshold: 0.85,
            cooldown_hours: 24,
        }
    }
}
