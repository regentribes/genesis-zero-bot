use actix_web::web;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api/v1")
            .route("/health", web::get().to(super::handlers::health))
            .route("/members", web::post().to(super::handlers::create_member))
            .route("/members/{id}", web::get().to(super::handlers::get_member))
            .route("/trust/events", web::post().to(super::handlers::submit_trust_event))
            .route(
                "/affinity/{member_id}",
                web::get().to(super::handlers::get_affinity),
            ),
    );
}
