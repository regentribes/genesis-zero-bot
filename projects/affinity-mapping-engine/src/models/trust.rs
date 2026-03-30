use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// The five dimensions of the Field of Trust
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum TrustDimension {
    Competence,
    Reliability,
    Integrity,
    Benevolence,
    Openness,
}

impl TrustDimension {
    pub fn all() -> &'static [TrustDimension] {
        &[
            TrustDimension::Competence,
            TrustDimension::Reliability,
            TrustDimension::Integrity,
            TrustDimension::Benevolence,
            TrustDimension::Openness,
        ]
    }
}

/// Field of Trust indicator across five dimensions
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FieldOfTrust {
    pub competence: f64,
    pub reliability: f64,
    pub integrity: f64,
    pub benevolence: f64,
    pub openness: f64,
}

impl FieldOfTrust {
    pub fn new() -> Self {
        Self {
            competence: 0.0,
            reliability: 0.0,
            integrity: 0.0,
            benevolence: 0.0,
            openness: 0.0,
        }
    }

    pub fn get(&self, dim: TrustDimension) -> f64 {
        match dim {
            TrustDimension::Competence => self.competence,
            TrustDimension::Reliability => self.reliability,
            TrustDimension::Integrity => self.integrity,
            TrustDimension::Benevolence => self.benevolence,
            TrustDimension::Openness => self.openness,
        }
    }

    pub fn increment(&mut self, dim: TrustDimension, amount: f64) {
        let val = match dim {
            TrustDimension::Competence => &mut self.competence,
            TrustDimension::Reliability => &mut self.reliability,
            TrustDimension::Integrity => &mut self.integrity,
            TrustDimension::Benevolence => &mut self.benevolence,
            TrustDimension::Openness => &mut self.openness,
        };
        *val = (*val + amount).clamp(0.0, 100.0);
    }
}

impl Default for FieldOfTrust {
    fn default() -> Self {
        Self::new()
    }
}

/// A trust event from community interaction
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TrustEvent {
    pub id: Uuid,
    pub from_member: Uuid,
    pub to_member: Uuid,
    pub dimension: TrustDimension,
    pub magnitude: f64,
    pub timestamp: DateTime<Utc>,
    pub context: String,
}
