use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::affinity::AffinityLayer;
use super::trust::FieldOfTrust;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Member {
    pub id: Uuid,
    pub name: String,
    pub created_at: DateTime<Utc>,
    pub seed_profile: SeedProfile,
    pub field_of_trust: FieldOfTrust,
}

/// Seed profile with four-distinction separation:
/// needs, beliefs, principles, values
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SeedProfile {
    pub needs: AffinityLayer,
    pub beliefs: AffinityLayer,
    pub principles: AffinityLayer,
    pub values: AffinityLayer,
}

impl SeedProfile {
    pub fn new_empty() -> Self {
        Self {
            needs: AffinityLayer::new(LayerKind::Needs),
            beliefs: AffinityLayer::new(LayerKind::Beliefs),
            principles: AffinityLayer::new(LayerKind::Principles),
            values: AffinityLayer::new(LayerKind::Values),
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum LayerKind {
    Needs,
    Beliefs,
    Principles,
    Values,
}
