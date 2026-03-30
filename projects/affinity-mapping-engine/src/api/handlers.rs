use actix_web::{HttpResponse, web};
use uuid::Uuid;

pub async fn health() -> HttpResponse {
    HttpResponse::Ok().json(serde_json::json!({
        "status": "ok",
        "service": "affinity-mapping-engine"
    }))
}

pub async fn create_member(
    _body: web::Json<serde_json::Value>,
) -> HttpResponse {
    // TODO: implement in ame:api task
    HttpResponse::Created().json(serde_json::json!({
        "status": "stub",
        "message": "member creation pending implementation"
    }))
}

pub async fn get_member(
    _path: web::Path<Uuid>,
) -> HttpResponse {
    // TODO: implement in ame:api task
    HttpResponse::Ok().json(serde_json::json!({
        "status": "stub"
    }))
}

pub async fn submit_trust_event(
    _body: web::Json<serde_json::Value>,
) -> HttpResponse {
    // TODO: implement in ame:api task
    HttpResponse::Accepted().json(serde_json::json!({
        "status": "stub"
    }))
}

pub async fn get_affinity(
    _path: web::Path<Uuid>,
) -> HttpResponse {
    // TODO: implement in ame:api task
    HttpResponse::Ok().json(serde_json::json!({
        "status": "stub"
    }))
}
