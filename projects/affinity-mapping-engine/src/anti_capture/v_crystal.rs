//! V-Crystal - Conflict immune response
//!
//! Detects and responds to conflict patterns within affinity networks,
//! activating protective mechanisms when destructive dynamics are detected.

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VCrystalConfig {
    pub conflict_sensitivity: f64,
    pub response_intensity: f64,
    pub recovery_period_hours: u32,
}

impl Default for VCrystalConfig {
    fn default() -> Self {
        Self {
            conflict_sensitivity: 0.6,
            response_intensity: 0.8,
            recovery_period_hours: 48,
        }
    }
}
