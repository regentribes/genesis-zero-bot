// Mythogen AME API - Axum (Rust)
// Field of Trust + Affinity Mapping + Convergence Engine

use axum::{
    routing::{get, post, ws},
    Router, Json, extract::{Path, Query, State, WebSocketUpgrade},
    http::StatusCode,
};
use serde::{Deserialize, Serialize};
use surrealdb::engine::local::Db;
use std::sync::Arc;

// ═══════════════════════════════════════════════════════════
// CORE TYPES (matching schema)
-- ═══════════════════════════════════════════════════════════

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Person {
    pub id: Option<String>,
    pub name: String,
    pub created_at: i64,
    pub fot_state: Option<FOTState>,
    pub weak_states: Vec<String>,
    pub v_crystal: Option<VCrystal>,
    pub social_radius: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct FOTState {
    pub indicators: Vec<FOTIndicator>,
    pub composite: f64, // hologram: min of all, not average
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct FOTIndicator {
    pub name: String, // "Psychological Safety", "Trust", etc.
    pub value: f64,
    pub trajectory: String, // "strengthening" | "weakening" | "stable"
    pub last_sensed: i64,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct VCrystal {
    pub id: Option<String>,
    pub core_value: String,
    pub expression_examples: Vec<String>,
    pub crystallization_date: i64,
    pub stability_score: f64,
    pub practicing_others: Vec<String>,
    pub witness_count: i32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Affinity {
    pub id: Option<String>,
    pub topic_id: String,
    pub target_id: String,
    pub witness_id: String,
    pub strength: f64,
    pub polarity: String,
    pub created_at: i64,
    pub last_updated: i64,
    pub witness_count: i32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Topic {
    pub id: Option<String>,
    pub name: String,
    pub category: String,
    pub affinity_strength: f64,
    pub participant_ids: Vec<String>,
    pub emergence_score: f64,
    pub created_at: i64,
    pub last_activity: i64,
    pub tags: Vec<String>, // For convergence matching
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ResonanceEvent {
    pub id: Option<String>,
    pub person_id: String,
    pub topic_id: String,
    pub witness_id: String,
    #[serde(rename = "type")]
    pub event_type: String,
    pub created_at: i64,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ConvergencePoint {
    pub id: Option<String>,
    pub person_id: String,
    pub weak_indicators: Vec<String>,
    pub emergent_topic_id: String,
    pub overlap_score: f64,
    pub urgency: String,
    pub suggested_actions: Vec<String>,
    pub created_at: i64,
    pub expires_at: i64,
}

// ═══════════════════════════════════════════════════════════
// REQUEST/RESPONSE TYPES
-- ═══════════════════════════════════════════════════════════

#[derive(Debug, Deserialize)]
pub struct WitnessAffinityRequest {
    pub witness_id: String,
    pub target_id: String,
    pub topic_id: String,
    pub strength: f64,
}

#[derive(Debug, Deserialize)]
pub struct SenseFOTRequest {
    pub person_id: String,
    pub indicators: Vec<FOTIndicator>,
}

#[derive(Debug, Deserialize)]
pub struct CrystallizeValueRequest {
    pub person_id: String,
    pub core_value: String,
    pub expression_examples: Vec<String>,
}

#[derive(Debug, Deserialize)]
pub struct ConvergenceQuery {
    pub min_overlap: Option<f64>,
    pub limit: Option<usize>,
}

#[derive(Debug, Serialize)]
pub struct FieldCompositeResponse {
    pub composite: f64, // Hologram: minimum of all indicators
    pub indicators: Vec<FOTIndicator>,
    pub weakest_link: String, // Which indicator is dragging down the field
}

// ═══════════════════════════════════════════════════════════
// APP STATE
-- ═══════════════════════════════════════════════════════════

pub struct AppState {
    pub db: Arc<Surreal<Db>>,
}

// ═══════════════════════════════════════════════════════════
// HANDLERS
-- ═══════════════════════════════════════════════════════════

// --- Field of Trust ---

async fn get_person_field(
    State(state): State<AppState>,
    Path(person_id): Path<String>,
) -> Result<Json<FOTState>, StatusCode> {
    let person: Option<Person> = state.db
        .select(("person", &person_id))
        .await
        .map_err(|_| StatusCode::NOT_FOUND)?;
    
    person.and_then(|p| p.fot_state)
        .map(Json)
        .ok_or(StatusCode::NOT_FOUND)
}

async fn get_field_composite(
    State(state): State<AppState>,
) -> Result<Json<FieldCompositeResponse>, StatusCode> {
    // Get all people, aggregate FOT indicators
    let people: Vec<Person> = state.db
        .select("person")
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    // Aggregate indicators across community (simplified)
    let all_indicators: Vec<FOTIndicator> = people
        .iter()
        .filter_map(|p| p.fot_state.as_ref())
        .flat_map(|fs| fs.indicators.clone())
        .collect();
    
    // Hologram principle: composite = MIN, not average
    let composite = all_indicators.iter()
        .map(|i| i.value)
        .fold(f64::INFINITY, f64::min);
    
    let weakest = all_indicators.iter()
        .min_by(|a, b| a.value.partial_cmp(&b.value).unwrap())
        .map(|i| i.name.clone())
        .unwrap_or_default();
    
    Ok(Json(FieldCompositeResponse {
        composite,
        indicators: all_indicators,
        weakest_link: weakest,
    }))
}

async fn sense_indicators(
    State(state): State<AppState>,
    Json(req): Json<SenseFOTRequest>,
) -> Result<Json<FOTIndicator>, StatusCode> {
    // AI-assisted FOT indicator sensing
    // In production: call LLM to analyze behavioral signals
    
    let indicator = FOTIndicator {
        name: req.indicators.first().unwrap().name.clone(),
        value: req.indicators.first().unwrap().value,
        trajectory: "stable".to_string(),
        last_sensed: chrono::Utc::now().timestamp(),
    };
    
    // Update person record
    let _: Option<Person> = state.db
        .update(("person", &req.person_id))
        .merge(serde_json::json!({
            "fot_state": {
                "indicators": [indicator],
                "composite": indicator.value // simplified
            }
        }))
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    Ok(Json(indicator))
}

// --- Affinities ---

async fn witness_affinity(
    State(state): State<AppState>,
    Json(req): Json<WitnessAffinityRequest>,
) -> Result<Json<Affinity>, StatusCode> {
    let affinity = Affinity {
        id: None,
        topic_id: req.topic_id,
        target_id: req.target_id,
        witness_id: req.witness_id,
        strength: req.strength,
        polarity: "neutral".to_string(),
        created_at: chrono::Utc::now().timestamp(),
        last_updated: chrono::Utc::now().timestamp(),
        witness_count: 1,
    };
    
    let created: Option<Affinity> = state.db
        .create("affinity")
        .content(affinity)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    created.map(Json).ok_or(StatusCode::INTERNAL_SERVER_ERROR)
}

async fn get_person_affinities(
    State(state): State<AppState>,
    Path(person_id): Path<String>,
) -> Result<Json<Vec<Affinity>>, StatusCode> {
    let affinities: Vec<Affinity> = state.db
        .query("SELECT * FROM affinity WHERE target_id = $id ORDER BY strength DESC")
        .bind(("id", person_id))
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
        .take(0)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    Ok(Json(affinities))
}

// --- Convergence ---

async fn find_convergences(
    State(state): State<AppState>,
    Query(query): Query<ConvergenceQuery>,
) -> Result<Json<Vec<ConvergencePoint>>, StatusCode> {
    let min_overlap = query.min_overlap.unwrap_or(0.7);
    let limit = query.limit.unwrap_or(10);
    
    // Get weak states + emergent topics, find overlaps
    let convergences: Vec<ConvergencePoint> = state.db
        .query("SELECT * FROM convergence_point WHERE overlap_score >= $min ORDER BY overlap_score DESC LIMIT $lim")
        .bind(("min", min_overlap))
        .bind(("lim", limit))
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
        .take(0)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    Ok(Json(convergences))
}

async fn create_convergence(
    State(state): State<AppState>,
    Json(req): Json<ConvergencePoint>,
) -> Result<Json<ConvergencePoint>, StatusCode> {
    let created: Option<ConvergencePoint> = state.db
        .create("convergence_point")
        .content(req)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    created.map(Json).ok_or(StatusCode::INTERNAL_SERVER_ERROR)
}

// --- Topics ---

async fn get_topics_emergence(
    State(state): State<AppState>,
) -> Result<Json<Vec<Topic>>, StatusCode> {
    let topics: Vec<Topic> = state.db
        .query("SELECT * FROM topic ORDER BY emergence_score DESC")
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
        .take(0)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    Ok(Json(topics))
}

// --- Values (V-Crystal) ---

async fn crystallize_value(
    State(state): State<AppState>,
    Json(req): Json<CrystallizeValueRequest>,
) -> Result<Json<VCrystal>, StatusCode> {
    let crystal = VCrystal {
        id: None,
        core_value: req.core_value,
        expression_examples: req.expression_examples,
        crystallization_date: chrono::Utc::now().timestamp(),
        stability_score: 0.5, // Starts at 0.5, grows with witness count
        practicing_others: vec![],
        witness_count: 0,
    };
    
    let created: Option<VCrystal> = state.db
        .create("v_crystal")
        .content(crystal.clone())
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    // Update person record
    let _: Option<Person> = state.db
        .update(("person", &req.person_id))
        .merge(serde_json::json!({ "v_crystal": crystal }))
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    created.map(Json).ok_or(StatusCode::INTERNAL_SERVER_ERROR)
}

// ═══════════════════════════════════════════════════════════
// ROUTES
-- ═══════════════════════════════════════════════════════════

pub fn router(state: AppState) -> Router {
    Router::new()
        // FOT
        .route("/api/people/{id}/field", get(get_person_field))
        .route("/api/field/composite", get(get_field_composite))
        .route("/api/field/sense", post(sense_indicators))
        
        // Affinities
        .route("/api/affinities/witness", post(witness_affinity))
        .route("/api/people/{id}/affinities", get(get_person_affinities))
        
        // Convergence
        .route("/api/convergence", get(find_convergences))
        .route("/api/convergence", post(create_convergence))
        
        // Topics
        .route("/api/topics/emergence", get(get_topics_emergence))
        
        // Values
        .route("/api/values/crystallize", post(crystallize_value))
        
        // WebSocket for real-time field updates
        .route("/api/ws/field", get(ws_handler))
        .with_state(state)
}

async fn ws_handler(
    ws: WebSocketUpgrade,
    State(state): State<AppState>,
) -> Response {
    ws.on_upgrade(|socket| async move {
        // Handle real-time field updates
        // Subscribe to SurrealDB changes or publish manually
        let _ = socket.send(Message::Text(Json(serde_json::json!({
            "type": "subscribed",
            "channel": "field"
        })).to_string())).await;
    })
}

fn main() {
    // Initialize SurrealDB
    let rt = tokio::runtime::Runtime::new().unwrap();
    let db = rt.block_on(async {
        Surreal::new::<Db>(("mem",)).await.unwrap()
    });
    db.use_ns("mythogen").use_db("ame").await.unwrap();
    
    let state = AppState { db: Arc::new(db) };
    let app = router(state);
    
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}