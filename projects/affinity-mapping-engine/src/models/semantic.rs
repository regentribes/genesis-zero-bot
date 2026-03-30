use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// Input data types accepted by the engine
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum InteractionData {
    Message(MessageData),
    TrustEvent(super::trust::TrustEvent),
    Participation(ParticipationData),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MessageData {
    pub from: Uuid,
    pub content: String,
    pub channel: String,
    pub timestamp: chrono::DateTime<chrono::Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ParticipationData {
    pub member: Uuid,
    pub activity: String,
    pub duration_minutes: u32,
    pub timestamp: chrono::DateTime<chrono::Utc>,
}
