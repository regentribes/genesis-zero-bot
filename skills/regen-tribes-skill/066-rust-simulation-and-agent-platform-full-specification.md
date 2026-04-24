# Rust Simulation And Agent Platform Full Specification

Owner: Vitali

Status: Specced and Ready for Build

Repo: github.com/regentribes/genesis-zero-bot (rust-sim-agent crate)

License: MIT / Apache-2.0

System (metaphor for an integrated whole or network):

The Regenerative Community AI stack requires a high-performance Rust-native platform that combines simulation, agent orchestration, knowledge graph, P2P networking, and formal verification in one composable system.

This document is the canonical specification. It supersedes any earlier architectural descriptions that used unverified crate names.

USER INTERFACE: WebGL Render, CLI, Telegram Bot, WebSocket.

OBELISK (FRP WORKFLOW ENGINE): Signal graphs, deterministic workflows, WASM component model, parallel execution, event sourcing via Fluvio.

SIM: Bevy plus ECS.

AGENTS: Odyssey plus AutoAgents plus Rig.

DB: SurrealDB.

NET: Iroh.

PHYSICS: Rapier.

WASM: Sandboxing via Wasmtime 22.

VERIFY: Prusti plus Kani, formal proofs.

- Component
- ECS Simulation
- Physics
- FRP Workflow
- Agent Orchestrator
- Agent Framework
- LLM Agent
- Database
- Streaming
- P2P Networking
- WASM Runtime
- Verification
- Verification
- MeTTa/Hyperon

NOTE: Obelisk is obeli-sk/obelisk (Durable and Deterministic Workflow Engine, WASM Component Model).

NOTE: Odyssey is liquidos-ai/Odyssey (batteries-included programmatic agent orchestrator built on AutoAgents).

regen-sim-agent: Workspace root.

src/obelisk: Workflow engine (re-export obelisk crate).

src/sim: Bevy ECS simulation. Contains ecs.rs, physics.rs, components.rs, systems.rs, rpc.rs.

src/agents: Agent subsystem. Contains runtime.rs, behavior.rs, messaging.rs, memory.rs.

src/db: Database subsystem. Contains surrealdb.rs, schema.rs, atomstore.rs.

src/net: Networking subsystem. Contains iroh.rs, hole_punch.rs, gossipsub.rs.

src/wasm: WASM sandbox. Contains runtime.rs, sandbox.rs.

src/verify: Formal verification. Contains contracts.rs.

tests: Integration tests.

benches: Benchmarks.

cargo init --lib regen-sim-agent

Create Cargo.toml (workspace) and regen-sim-agent/Cargo.toml (crate).

Add all verified dependencies.

Verification: cargo build --dry-run 2 and error all deps must resolve.

Obelisk is a durable, deterministic workflow engine using the WASM Component Model.

Key concepts: Signals are values that change over time with subscriber notification.
Workflows are pure functions from EventStream I to EventStream O.
Deterministic execution means same input produces same output every time.
Durable means workflows survive process restarts.
Event sourcing uses Fluvio for event stream persistence.

Integration with simulation: Simulation tick emits signal to obelisk signal graph. Agent perception receives processed data.

Core components: Habitat (id, position, temperature, co2_ppm, humidity, water_level), ResourceNode (resource_type, capacity, current), SimAgent (agent_id, role, energy, goals).

Physics: Rapier3D rigid bodies for spatial simulation. Bevy ECS schedules systems in parallel.

RPC bridge to Obelisk: After each physics step, emit signal to obelisk.

SurrealDB embedded (kv-mem or kv-rocksdb).

Namespace: semantic_graph/main.

Database: regen_sim.

Schema: entity table (name, level, created, updated), edge table (from, to, relation, weight, evidence), atom table (atom_type, truth, embedding), agent_state table (agent_id, beliefs, goals, memory), sim_state table (tick, entities, config), workflow_state table (workflow_id, status, input, output).

Odyssey provides core runtime (spawn agents, manage lifecycle), built-in tools (file system, HTTP, shell), memory management (belief stores, context windows), permission gates (controlled tool access), and sandboxing via WASM runtime.

Rig provides LLM-backed agents (OpenAI, Anthropic, local models).

AgentRuntime: spawn agents with behavior trees, tick all agents each simulation tick, handle Fluvio-based inter-agent messaging, attach LLM client to agent for reasoning.

Iroh provides hole-punching (connect peers behind NAT/firewall), DHT (distributed hash table for peer discovery), QUIC-based transport (low-latency, encrypted), and mDNS discovery (local network peer finding).

P2PNetwork: start Iroh node, connect to peer (automatic hole-punching), broadcast agent message to all connected peers.

Agents execute untrusted behavior in WASM sandboxes.

Module validation before execution.

Resource limits (memory, CPU cycles, gas).

WASI integration for controlled I/O.

Host calls filtered through permission gates.

WasmSandbox: execute agent logic in WASM, validate module before execution.

Prusti contracts: annotate Rust functions with pre/postconditions verified at compile time.

Kani (CBMC): bounded model checker for proving absence of runtime errors.

cargo build --dry-run: verify deps resolve.

cargo build: incremental build.

cargo fmt --check: format check.

cargo clippy --all-targets -- -D warnings: lint.

cargo test --all: tests.

cargo doc --no-deps: docs.

cargo build --release: release build.

cargo bench: benchmarks.

All dependencies resolve.

Obelisk workflow engine integrates (signals compile).

Bevy ECS simulation runs (empty world step succeeds).

SurrealDB connects in embedded mode, schema applies.

Agent runtime spawns test agents via Odyssey.

Iroh node starts (P2P networking initializes).

WASM sandbox executes simple validated module.

Release build succeeds.

Test suite passes.

Docs generate without warnings.



Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 




053 054 055 056 067 068

