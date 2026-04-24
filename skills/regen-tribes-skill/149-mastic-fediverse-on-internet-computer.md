# Mastic Fediverse On Internet Computer

Mastic is a federated social platform running entirely on the Internet Computer as Rust WASM canisters.
Mastic is Mastodon-compatible via ActivityPub protocol.
Everyone can run their own Mastic instance and interact seamlessly with the wider Fediverse.
Benefits from Internet Computer scalability, Internet Identity authentication, and decentralised governance through a DAO (SNS).

License is MIT. Repository is veeso/mastic on GitHub.

Three canister types plus shared libraries:

Canister 1 is Directory Canister.
Global registry maps Internet Identity principals to handles and User Canister IDs.
Manages sign-up, profile deletion, and moderation.

Canister 2 is Federation Canister.
HTTP boundary handles all server-to-server ActivityPub traffic.
Serves WebFinger and routes activities between local User Canisters and the Fediverse.

Canister 3 is User Canister.
One per user.
Stores inbox, outbox, profile, followers, following, and liked collections.
Holds an RSA keypair for HTTP Signatures.

Library 1 is activitypub.
ActivityPub protocol types and utilities.

Library 2 is did.
Shared Candid type definitions used across canisters.

Principal-based authorization:
User to User Canister: owner principal.
Federation to User Canister: federation principal in install args.
User Canister to Federation: registered at creation.

Build pipeline: cargo build --target wasm32-unknown-unknown produces WASM.
ic-wasm shrink reduces binary size.
candid-extractor generates Candid interfaces.
gzip compresses final artifacts.
Artifacts go to .artifact directory.

Commands:
just build_all builds all three canisters.
just test runs unit tests.
just integration_test runs pocket-ic integration tests.
just check_code runs nightly rustfmt --check and clippy -D warnings.

Rust 1.90.0 or later.
DFX v0.31.0 or later for Internet Computer development.
Just for task running.
ic-wasm for binary shrinking.
candid-extractor for interface extraction.

The Fediverse is a network of interoperable social platforms using ActivityPub protocol.
Mastodon is the largest Fediverse platform.
Users on one instance can follow and interact with users on any other Fediverse instance.
Mastic brings this capability to the Internet Computer blockchain.

Internet Computer provides:
Scalable canister hosting without traditional cloud infrastructure.
Internet Identity for secure authentication.
System (metaphor for an integrated whole or network):

SNS (Service Nervous System) DAO for decentralized governance.

Centralized platforms: single company controls data, terms of service, algorithmic curation.
Mastic: data stored in user canisters, governance via DAO, no central authority.
ActivityPub interoperability: users can interact with Mastodon, Pixelfed, PeerTube, and other Fediverse platforms.

Community-controlled social media without corporate dependency.
Decentralized governance of community communications.
Integration with other regenerative community platforms via Fediverse.
No single point of failure for community communication infrastructure.
Transparent moderation through DAO governance.

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 



145 147 111

