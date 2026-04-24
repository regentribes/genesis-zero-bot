# Iroh N0-Computer P2P Networking And Blobs Network

Iroh is a P2P networking stack built in Rust by n0-computer.

The project provides production-ready tools for distributed systems.

n0-computer builds infrastructure for the distributed future.

The team is funded to build in public.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): The iroh ecosystem includes networking, blob management, and synchronization tools.

Iroh Blobs is a standalone document synchronization system.

The system transfers large files over P2P connections.

Documents are content-addressed using BLAKE3 hashes.

Transfers work over any QUIC connection.

NAT traversal is built in.

The system works offline and online.

Transfer progress is resumable.

The key properties are:

Content addressing ensures verifiability.

Any node can serve the same content.

Duplicate elimination saves bandwidth.

Provenance tracking works across the network.

Feature 1 is content-addressed storage.
Content is addressed by its BLAKE3 hash.
Verification is automatic and instant.
Integrity is guaranteed by the hash.

Feature 2 is P2P transfer.
Files transfer directly between peers.
No central server required.
NAT traversal works automatically.

Feature 3 is offline capability.
Peers connect when they can.
No continuous connection needed.
Works in intermittent connectivity scenarios.

Feature 4 is resumption.
Partial transfers resume where they left off.
Connection drops do not lose progress.
Bandwidth is never wasted.

Feature 5 is multi-source download.
Multiple peers serve chunks of the same file.
Speed scales with peer count.
Reliability improves with redundancy.

Iroh Blobs uses BaoTree for authenticated data.

BaoTree provides partial verification of files.

Any prefix of data can be verified.

Verification happens while downloading.

No full download required for verification.

Integration 1 is iroh_blobs in standalone mode.
Standalone binary for file transfer.
HTTP gateway for browser access.
Simple UI for manual transfers.

Integration 2 is iroh_blobs as library.
Embed in Rust applications.
Custom protocols on top of iroh_blobs.
Full programmatic control.

Integration 3 is HTTP gateway.
Browser-accessible file server.
Standard HTTP interface.
Familiar web tooling works.

BaoSock is a partial-message-streaming RPC library.

The library builds on Bao encoding and Quinn.

Bao encoding provides partial verification.

Quinn provides QUIC transport.

The result is streaming RPC with cryptographic verification.

Partial verification enables security without downloading everything.

Streaming enables real-time responses.

Quinn is the QUIC implementation that powers iroh.

Quinn is a Rust QUIC implementation.

Quinn provides reliable UDP transport.

Quinn handles 0-RTT connection establishment.

Quinn manages connection migration across network changes.

Quinn is the foundation of the iroh networking stack.

Irohd is the iroh daemon.

The daemon runs in the background.

Clients connect to the daemon over IPC.

The daemon manages network connections.

The daemon handles peer discovery.

The daemon manages blob storage and transfer.

Architecture 1 is the daemon process.
Long-running background service.
Manages network and storage.
Clients connect over RPC.

Architecture 2 is the client protocol.
Clients communicate with daemon over IPC.
Simple request-response interface.
Asynchronous and efficient.

Architecture 3 is the blob store.
Persistent storage for content-addressed data.
Deduplication eliminates duplicates.
GC removes unreferenced content.

Architecture 4 is the networking layer.
QUIC connections to peers.
NAT traversal for connectivity.
Peer discovery and DHT integration.

Example 1 is getting started.
Simple iroh_blobs usage.
Minimal code to transfer a file.
Learn the core API.

Example 2 is the standalone binary.
Command-line file transfer.
No code required.
Demonstrates iroh_blobs capabilities.

Example 3 is the HTTP gateway.
Serve files over HTTP.
Browser access to blob store.
Standard web interface.

Example 1 is iroh-sync.
Live synchronization of document trees.
Changes propagate to all peers.
Conflict-free eventual consistency.

Example 2 is iroh-conf.
Configuration management for iroh.
Handles iroh daemon settings.
RPC interface to daemon.

Example 3 is iroh-blobs-bao-tree.
BaoTree verification integration.
Demonstrates partial verification.
Shows verification while downloading.

Example 4 is iroh-drops.
File sharing demo application.
Demonstrates real-world usage.
Includes UI components.

Example 5 is iroh-gateway.
HTTP gateway implementation.
Serves blobs over HTTP.
Browser-accessible interface.

Example 6 is iroh-netbench.
Networking benchmarking tools.
Measures QUIC performance.
Tunable parameters and metrics.

Example 7 is iroh.one.
Public iroh gateway instance.
Gateway.zrok.fyi deployment.
Try iroh without running your own.

Example 8 is yatrie.
Personal cross-device bookmark sync.
Bookmarks synchronize across devices.
Content-addressed storage ensures integrity.

Advantage 1 is bandwidth efficiency.
Content deduplication saves transfer costs.
Multi-source downloads accelerate.
Compression-friendly transfer.

Advantage 2 is resilience.
Offline operation works.
Peer disconnection does not fail.
Resumable transfers recover.

Advantage 3 is verifiability.
BaoTree verifies while downloading.
Partial verification is possible.
Integrity is guaranteed.

Advantage 4 is simplicity.
HTTP gateway provides familiar interface.
Rust library integrates easily.
Daemon model simplifies deployment.

Property 1 is BLAKE3 hashing.
Fast and secure hashing.
BLAKE3 is the hash function.
Content addressing uses BLAKE3.

Property 2 is QUIC transport.
Modern transport protocol.
0-RTT connection setup.
Connection migration supported.

Property 3 is NAT traversal.
Automatic NAT detection.
Hole punching when possible.
Reliable connectivity.

Property 4 is content addressing.
Files addressed by hash.
Automatic deduplication.
Integrity verification.

The n0-computer GitHub organization contains:

Repository 1 is iroh (stars: 12,300).
The main P2P networking stack.
BaoSock, Quinn, blobs, and daemon.

Repository 2 is BaoSock (stars: 500).
Partial-message-streaming RPC.
Bao encoding plus Quinn.

Repository 3 is Quinn (stars: 2,500).
Production QUIC implementation.
Used beyond iroh in many projects.

Repository 4 is Askama (stars: 2,800).
Rust template engine.
Used for web UI rendering.

Repository 5 isiroh-examples (stars: 42).
Example applications.
Demonstrates iroh usage patterns.

Repository 6 is genawait (stars: 200).
Generator coroutines in stable Rust.
Used for async iteration patterns.

Repository 7 is metrics (stars: 290).
Rust metrics infrastructure.
Monitoring and observability.

Repository 8 is h2 (stars: 2,000).
HTTP/2 for Rust.
Async HTTP/2 implementation.

Repository 9 is tower-http (stars: 730).
Tower middleware for HTTP.
Service composition for HTTP.

Repository 10 is tonic (stars: 13,000).
Rust gRPC implementation.
High-performance RPC framework.

Repository 11 is conduit (stars: 1,400).
Simple Rust HTTP proxy.
Lightweight and fast.

Repository 12 is axum (stars: 8,100).
Ergonomic Rust web framework.
Built on Tower and Tokio.

Repository 13 is hyper (stars: 15,000).
Rust HTTP library.
Low-level HTTP primitives.

Repository 14 is tower (stars: 1,200).
Service composition library.
Middleware for Rust services.

Repository 15 is data-encoder (stars: 52).
Canonical data encoding.
Encoding for distributed systems.

Repository 16 is anyhow (stars: 23,000).
Flexible Rust error handling.
Context-rich error types.

Repository 17 is thiserror (stars: 14,500).
Derive macro for error types.
Ergonomic error definitions.

Repository 18 is metrics (stars: 290).
Metrics primitives and utilities.

Repository 19 is bytewax (stars: 3,500).
Python stream processing.
High-level Python API for Rust.

Repository 20 is sqlx (stars: 15,000).
Async Rust SQL toolkit.
Compile-time checked queries.

Application 1 is yatrie.
Personal bookmark synchronization.
Bookmarks sync across devices.
Content-addressed storage.

Application 2 is iroh-drops.
File sharing application.
Share files with friends.
P2P transfer without servers.

Application 3 is iroh-sync.
Live document synchronization.
Real-time collaboration.
Conflict-free consistency.

Protocol 1 is QUIC.
Iroh uses QUIC as transport.
RFC 9000 compliant.
Used via the Quinn implementation.

Protocol 2 is Bao encoding.
Authenticated data encoding.
Partial verification support.
Streaming verification.

Protocol 3 is BLAKE3.
Hash function for content addressing.
Fast and secure.
Used for all content identifiers.

Protocol 4 is DHT.
Distributed hash table.
Peer discovery.
Decentralized lookup.

Comparison 1 is with IPFS.
IPFS uses libp2p for networking.
Iroh uses custom QUIC stack.
Iroh focuses on blobs specifically.
IPFS is more general-purpose.

Comparison 2 is with BitTorrent.
BitTorrent has tracker servers.
Iroh has no central trackers.
Iroh uses modern QUIC transport.
BaoTree provides better verification.

Comparison 3 is with libp2p.
libp2p is a comprehensive P2P framework.
Iroh is more focused on blobs.
Iroh is Rust-native.
libp2p is multi-language.

Use case 1 is offline-first data sharing.
Community members share data without internet.
Mesh networks with iroh_blobs.
Works in remote locations.

Use case 2 is knowledge base sync.
RegenTribes knowledge syncs across nodes.
No central server required.
Content-addressed ensures integrity.

Use case 3 is large file distribution.
Agricultural data or maps share easily.
Multi-source download accelerates.
Bandwidth-efficient transfer.

Use case 4 is environmental monitoring.
Sensor data transfers via P2P.
Integrity verified automatically.
Resumable for intermittent connectivity.

Use case 5 is community mesh networking.
Local P2P without internet.
Iroh handles NAT traversal.
Communities build their own networks.

Consideration 1 is integrity.
BLAKE3 guarantees integrity.
BaoTree verifies while downloading.
No corrupted data accepted.

Consideration 2 is authentication.
Content addressing provides authentication.
Hash proves content identity.
No man-in-the-middle possible.

Consideration 3 is privacy.
P2P transfers bypass servers.
Direct peer communication.
Metadata minimized.

Consideration 4 is resilience.
No central point of failure.
Network disruption does not block transfers.
Offline operation supported.

Performance 1 is speed.
BLAKE3 is fast hashing.
Multi-source downloads accelerate.
QUIC provides low latency.

Performance 2 is bandwidth.
Deduplication saves bandwidth.
Compression-friendly encoding.
Efficient chunking strategy.

Performance 3 is memory.
Streaming architecture.
No full file in memory.
Constant memory usage.

Status 1 is production ready.
Iroh blobs is production-ready.
Used in real applications.
Stable and reliable.

Status 2 is active development.
New features added regularly.
Bugs fixed quickly.
Community responsive.

Status 3 is open source.
All code is open source.
Contributions welcome.
Built in public.

Related technology 1 is Quinn.
The QUIC implementation.
Reliable UDP transport.
Foundation of iroh networking.

Related technology 2 is Bao.
The encoding format.
Partial verification.
Streaming support.

Related technology 3 is Tokio.
Async runtime for Rust.
Iroh uses Tokio extensively.
Production-grade async.

Related technology 4 is Sled.
Embedded database sometimes used.
Key-value storage.
Part of the Rust ecosystem.

Iroh provides a robust P2P file transfer layer for regenerative communities.

Key benefits are:

The offline-first design fits community infrastructure.

Content addressing ensures data integrity.

No central server means no single point of failure.

The Rust implementation provides memory safety and performance.

Multi-source downloads work well for large community datasets.

The daemon model simplifies deployment.

The HTTP gateway enables familiar access patterns.

The ecosystem of examples provides working code to build on.

Recommended approach:

Deploy irohd as a daemon on community servers.

Use iroh_blobs for large file distribution.

Set up iroh-sync for live document collaboration.

Configure the HTTP gateway for browser access.

Connect communities via iroh peer discovery.





145 157 173

