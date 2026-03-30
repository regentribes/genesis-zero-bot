//! Y Cards - Algorithmic transparency mechanism
//!
//! Allows members to inspect and challenge how affinity scores are computed,
//! providing transparency into the scoring algorithms.

use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct YCard {
    pub id: Uuid,
    pub member_id: Uuid,
    pub query: String,
    pub explanation: String,
}
