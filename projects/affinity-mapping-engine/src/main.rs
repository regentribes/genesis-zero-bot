pub mod models;
pub mod scoring;
pub mod seed;
pub mod trust;
pub mod anti_capture;
pub mod api;
pub mod ws;

use actix_web::{App, HttpServer, middleware};
use tracing_subscriber::EnvFilter;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| EnvFilter::new("info")),
        )
        .init();

    let bind_addr =
        std::env::var("BIND_ADDR").unwrap_or_else(|_| "0.0.0.0:8080".to_string());

    tracing::info!("Starting Affinity Mapping Engine on {}", bind_addr);

    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .configure(api::configure)
    })
    .bind(&bind_addr)?
    .run()
    .await
}
