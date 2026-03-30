//! Living Membrane - Semi-permeable boundary management
//!
//! Controls how affinity information flows between community boundaries,
//! preventing external capture while allowing healthy exchange.

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LivingMembraneConfig {
    pub permeability: f64,
    pub boundary_strength: f64,
}

impl Default for LivingMembraneConfig {
    fn default() -> Self {
        Self {
            permeability: 0.5,
            boundary_strength: 0.7,
        }
    }
}
