use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::member::LayerKind;

/// A single relational layer in the peptide-like semantic network
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AffinityLayer {
    pub kind: LayerKind,
    pub nodes: Vec<SemanticNode>,
}

impl AffinityLayer {
    pub fn new(kind: LayerKind) -> Self {
        Self {
            kind,
            nodes: Vec::new(),
        }
    }
}

/// A node in the semantic network representing a concept
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SemanticNode {
    pub id: Uuid,
    pub label: String,
    pub weight: f64,
    pub created_at: DateTime<Utc>,
}

/// A scored relationship between two members
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RelationshipScore {
    pub member_a: Uuid,
    pub member_b: Uuid,
    pub layer: LayerKind,
    pub strength: f64,
    pub last_updated: DateTime<Utc>,
    /// Locked until this time to prevent viral manipulation
    pub locked_until: Option<DateTime<Utc>>,
}

/// A cluster of members with high mutual affinity
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AffinityCluster {
    pub id: Uuid,
    pub members: Vec<Uuid>,
    pub centroid_scores: Vec<f64>,
    pub cohesion: f64,
}
