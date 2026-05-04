# Holochain Agent Centric P2P Application Framework

Holochain is an open-source framework for developing peer-to-peer applications.
It provides high levels of security, reliability, and performance.
It gives digital agency to organizations, markets, and people.
By combining cryptography, distributed databases, and consensus-free validation, new social dynamics become possible.

Holochain thinks BitTorrent plus Git plus Cryptographic Signatures.
It is a distributed app framework with P2P networking.

Current state is initial Beta release.
Ready for limited production use.
Still undergoing security reviews and network protocol hardening.
The Holochain Foundation maintains the project.

License is CAL-1.0 (Cryptographic Autonomy License).

The core insight of Holochain is agent-centricity.
Applications are centered around individual users, not a central server or global ledger.
Each agent maintains their own data, identity, and processing locally on their device.
This gives users sovereignty over their information.

Blockchain takes a data-centric approach.
A single global state is replicated across all nodes.
Every node processes every transaction.
This creates the scalability bottleneck inherent in blockchain.

Holochain takes an agent-centric approach.
Each participant maintains their own cryptographically signed chain.
Shared data is stored in a Distributed Hash Table (DHT).
Validation happens locally against application rules rather than globally.

Every participant in a Holochain network has their own source chain.
The source chain is a personal, cryptographically signed, append-only journal.
It records all actions and data the agent creates within an application.
It lives on the agents device.
Each entry is signed by the private key ensuring integrity and authorship.

Entries can be private or public.
Private entries stay on the users device.
Public entries are shared with the network.

The source chain is the fundamental record of agent activity.
It cannot be altered or deleted.
It provides a complete audit trail of what the agent has done.

The DHT acts as a public data store providing redundancy and availability.
When an agent commits public data to their source chain, it is shared with a random selection of peers.
Each node holds a small shard of the DHT.
This distributes storage burden and makes data available even if the original author goes offline.
The DHT is an eventually consistent graph database where data is connected by links.

The DHT provides public data storage separate from source chains.
Private data stays in source chains and is never shared.
Public data is validated and stored by peers.

Holochain does not rely on global consensus.
When public data is shared to the DHT, peers validate it against the applications predefined rules.
These rules are defined in the DNA (the core application code).
Validation rules are called integrity zomes.

If invalid data is detected, a network-wide security response triggers.
Malicious actors can be identified and blocked.
System (metaphor for an integrated whole or network):

This creates an immune-system based security model.

Transactions are validated locally by participating agents.
Data integrity is maintained through cryptographic signatures and peer validation against shared rules.
No system-wide agreement on every transaction is required.

This approach improves scalability dramatically.
No global state means no coordination bottleneck.
Energy efficiency is high because there is no mining.

DNA defines the shared rules for an application.
It includes entry types, validation rules, and application logic.
DNA is compiled to WebAssembly (WASM).
WASM provides sandboxed execution for application logic.

hApp (Holochain application) bundles one or more DNAs with an optional web-based UI.
hApps are serverless by design.
Users run their own copy of the application backend on their devices.
Users connect directly to peers via encrypted P2P connections.

The DNA defines the rules.
The conductor runs the DNA and manages the application runtime.
The conductor exposes two RPC APIs over WebSocket: admin API and app API.

Holochain applications are built from zomes.
Zomes come in two types:

Integrity zomes define the shared rules.
They cannot import from other zomes.
They define the validation rules and entry types.
They provide the data model and constraints.

Coordinator zomes implement application logic.
They can import from integrity zomes and other coordinator zomes.
They handle the workflows and business logic.

This separation ensures validation rules are clearly defined and auditable.

HDK (Holochain Development Kit) is for writing coordinator zomes.
HDI (Holochain Development Interface) is for writing integrity zomes.
These Rust crates make it easy to write guest code that interfaces with the conductor.
The guest code runs in a WebAssembly sandbox.

Holochain Open Dev is a community collection of reusable zomes and template repositories.

Key libraries:
profiles: Profile management zome with nickname support.
peer-status: Communicate agent status (online, busy, on holiday).
notifications: Designate trusted agent to send notifications over text, WhatsApp, email.
file-storage: Chunk, store, and retrieve arbitrary binary data in the DHT.
holochain-time-index: Query DHT entries indexed by time.
contacts: Contact list management for an agent.
holochain-prefix-index: Prefix-based DHT indexing.
zits: Synchronize Rust and TypeScript types for zomes.

hREA is a framework for economic network coordination built on Holochain.
It implements the Valueflows specification.
It enables transparent and trusted accounting of resource and information flows between independent agents.
It provides simple, composable, modular economic building blocks.
It balances data privacy with shared data commons.
It is a toolkit for operational management and accounting in economic networks.

The Weave defines an interaction pattern for Holochain hApps to be added as Tools into group spaces.
It provides an open standard for creating, searching, linking, and organizing social context units.
It allows groups to establish social context without centralized infrastructure.
It aims to foster a social fabric of interlocking social agreements.
It enables fit-for-purpose groupware tools.
It makes own-your-data a reality by design.

Moss is the reference implementation of The Weave.
Formerly known as We.
It is a groupware container for composing multiple applets into one cohesive experience.
It acts as a collaborative workspace where group data resides on members computers.
Changes sync directly between teammates via Holochain P2P.
Tools include chat, video conferencing, Kanban boards, governance tools, games, collaborative editing.
Ideal for progressive decentralization experimentation.
DAOs can use it for team conversations, project management, and governance.

Syn provides back-end and front-end libraries for creating real-time collaboration apps.
Uses Automerge CRDT for conflict-free concurrent updates.
Enables real-time editing during live sessions.

Acorn is a visually intuitive project management app.
Based around defining goals first, then figuring out what needs to be done.
Open-source and peer-to-peer.

Flux is a communities app similar to Discord.
Allows add-ons for new content types like long-form content and knowledge bases.
Peer-to-peer architecture.

Hylo is a social network for community management, messaging, and collaboration.

Distributed microblogging platform with moderation features.
Twitter-like social media on Holochain.

Reddit-like functionality with distributed architecture.

Agent-centric social network and interoperability dApp framework.
Enables sense-making and social DNA.
Developed by Coasys.

Criteria-driven decision making and deliberation platform.

Tooling for group self-awareness on Holochain.
Enables spatial organization and location-based collaboration.

Spreadsheet application for Holochain.
Collaborative data management.

Collaborative sticky notes application built as a Weave applet.

Experiment with REA accounting on Holochain.

Privacy-first intranet mail app that does not need an intranet server.

Video message app built with Holochain, Electron, and WebRTC.
P2P video communication.

JavaScript client: For web-based UIs, all-purpose.
Rust client: For native applications.
Python client: For Python-based applications.
C# client: Community-maintained, for .NET and Unity.

Tauri Plugin Holochain: Build cross-platform P2P apps using Tauri and Holochain.
Electron Holochain Template: Build Electron desktop applications with Holochain backend.

Holochain Playground: Interactive development and debugging environment.

hc is the all-purpose developer tool:
Scaffolds project directory structure, build config, boilerplate CRUD code.
Packages DNA manifests and zomes into DNA bundles.
Packages one or more DNAs into hApps.
Manages Holochain conductor sandboxes.
Spawns hApps and UIs for testing.
Runs JavaScript-based integration test scripts.
Runs local peer discovery and WebRTC signalling services.

Tryorama: Test toolset to manage Holochain conductors and facilitate test scenarios.
Scaffolding: Quick generation and modification of Holochain applications.

Released section shows infrastructure is operational.
Recent releases include coordinator updates, memproof security improvements, K2 maintenance.
Authentication improvements for bootstrap server.

In progress: Major follow-up release to Holochain 0.6 with improved security and performance.
Minimal breaking changes.
Currently 89 percent complete, 34 points to complete.

Ongoing work:
Wind Tunnel performance and scale testing infrastructure.
iroh networking framework transport development (86 percent complete).
Workflow stabilization and testability.
Performance and behavior improvements.
HDK ergonomics improvements.
Network component improvements.
Mobile target builds on CI.
Security improvements with warrants and blocking.
Major refactoring for data model consistency.

Holochain can interoperate with blockchain through several patterns.

Wallet binding: Bind crypto wallet public key to Holochain agent key.
Useful for NFT interactions and blockchain integration.
Can be done completely offline.

Membership proof: Holochain apps can require proofs for entering shared spaces.
Protects from Sybil attacks.
Proofs can be based on oracle data or API context.
Membrane (metaphor for a boundary or interface):

Membrane (metaphor for boundary or interface): Peers reject incoming agent keys without valid membrane proof.

Notacle pattern: Combines transparency of oracle with trustworthiness of notary.
Provides proof and verifiability.
Transit back on-chain with Holochain proofs.
Enables gas-less, serverless governance voting with on-chain execution.
A vote by thousands of DAO members on Holochain, then notacle creates proof for single on-chain transaction.
Saves thousands in gas fees.

The CAL-1.0 is an open license protecting app developers, users, and end-user privacy and data control.
It ensures applications built with Holochain remain under user control.
Not a copyleft license.
Permits commercial use while ensuring user sovereignty.

Holochain architecture is fundamentally aligned with regenerative community values.

Agent-centricity means each community member owns their data.
No global ledger means no single point of control.
Consensus-free validation means no coordination bottleneck.
Serverless design means no corporate infrastructure dependency.

The hREA framework enables economic coordination without traditional finance.
Resource tracking, supply chain management, cooperative marketplaces.
Zero transaction fees enable micro-transactions practical for local exchange.

The Weave and Moss enable group governance without corporate tools.
Chat, video, Kanban, governance tools.
Progressive decentralization path for communities moving from legacy platforms.
Own-your-data by design.

The immune-system security model provides protection without centralized authority.
Peers validate and enforce rules.
Bad actors are identified and blocked collectively.

Offline-first capability is critical for communities in areas with limited connectivity.
Data syncs when connection is available.
No dependency on always-on internet.

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 



151 155 149

