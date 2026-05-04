# Obelisk Frp Workflow Engine Technical Reference

Project: Durable and Deterministic Workflow Engine

Language: Rust

Repository: github.com/obeli-sk/obelisk

License: MIT / Apache-2.0

Status: Active development

Obelisk is a workflow engine built in Rust that uses the WASM Component Model to execute durable, deterministic workflows.

It is designed for scenarios where workflows must survive process restarts, network failures, and infrastructure changes.

Suitable for regenerative community infrastructure where long-running processes and fault tolerance are critical.

Durable. Workflow state persists beyond process lifetime (WASM component model plus event sourcing).

Deterministic. Same inputs always produce same outputs (no hidden state, no timing dependencies).

Composable. Workflows are pure functions that can be combined, forked, and merged.

WASM-native. Runs as WASM components, portable across runtimes and platforms.

System (metaphor for an integrated whole or network):

A Signal is a value that changes over time, with a subscriber notification system.

```rust
pub struct Signal<T> {
    value: RwLock<Option<T>>,
    subscribers: RwLock<Vec<Box<dyn Fn(&T) + Send + Sync>>>,
}

impl<T: Clone> Signal<T> {
    pub fn new(initial: T) -> Self;
    pub fn set(&self, value: T);
    pub fn get(&self) -> T;
    pub fn subscribe<F>(&self, f: F) where F: Fn(&T) + Send + Sync + 'static;
}
```

The Signal Graph manages all signals and their dependencies.

Signals are identified by string keys and form a directed acyclic graph (DAG) of dependencies.

```rust
pub struct SignalGraph {
    signals: RwLock<HashMap<String, Arc<dyn SignalVariant>>>,
}

impl SignalGraph {
    pub fn register<T: SignalData>(&mut self, key: &str, signal: Signal<T>);
    pub fn tick(&self) -> bool;
    pub fn get(&self, key: &str) -> Option<serde_json::Value>;
}
```

A Workflow is a pure function from EventStream I to EventStream O.

```rust
pub type Workflow<I, O> = fn(EventStream<I>) -> EventStream<O>;

impl WorkflowOps for Workflow<I, O> {
    fn map<F>(self, f: F) -> Workflow<I, O> where F: Fn(I) -> O + Send + Sync + 'static;
    fn filter<F>(self, f: F) -> Workflow<I, I> where F: Fn(&I) -> bool + Send + Sync + 'static;
    fn merge(self, other: Workflow<I, O>) -> Workflow<I, O>;
    fn par(self, other: Workflow<I, O>) -> Workflow<I, Vec<O>>;
    fn flatten(self) -> Workflow<I, O> where O: IntoIterator;
}
```

An EventStream is an async sequence of events, backed by Fluvio for durability.

```rust
pub struct EventStream<T> {
    inner: futures::stream::SplitStream<FluvioTopic>,
}

impl<T: serde::de::DeserializeOwned> EventStream<T> {
    pub async fn next(&mut self) -> Option<T>;
    pub fn filter<F>(self, f: F) -> EventStream<T>;
    pub fn map<U, F>(self, f: F) -> EventStream<U>;
}
```

Obelisk serves as the workflow coordination layer between simulation ticks, agent reasoning, and database operations.

Bevy Simulation Tick produces state changes. Obelisk Signal Graph captures and routes them. Agent Perception receives processed data. SurrealDB writes state. Fluvio logs events.

Example: Simulation tick to agent perception.

```rust
use obelisk::prelude::*;

let sim_tick = Signal::<SimTick>::new(SimTick { t: 0 });

let to_perception = |tick: SimTick| -> AgentPerception {
    AgentPerception {
        agent_id: tick.agent_id,
        sensors: tick.sensor_data,
        timestamp: tick.timestamp,
    }
};

let perception_stream = obelisk::workflow::map(sim_tick.subscribe(), to_perception);

perception_stream.for_each(|p| {
    agent_runtime.inject_perception(p);
});
```

Obelisk enforces determinism through four mechanisms.

Pure functions. No side effects in workflow transformations.

Event sourcing. All state changes logged as immutable events via Fluvio.

Single-threaded execution by default. Eliminates race conditions.

WASM component isolation. No hidden state between invocations.

This makes Obelisk workflows verifiable via formal methods (Prusti or Kani) and suitable for safety-critical systems.

```yaml
workflow_engine:
  wasm_component_model: true
persistence:
  fluvio:
    topic: regen-sim-workflows
    partition: 0
signal_graph:
  max_signals: 1024
  tick_interval_ms: 10
execution:
  deterministic: true
  max_parallelism: 4
```

```toml
obelisk = { git = https://github.com/obeli-sk/obelisk }
fluvio = "0.14"
tokio = { version = "1", features = ("full") }
serde = { version = "1", features = ("derive") }
serde_json = "1"
futures = "0.3"
```

 - Rust Simulation and Agent Platform (full stack spec)

 - AutoAgents and Odyssey (agent orchestrator)

 - OpenCog MeTTa and Hyperon (knowledge representation)





066 068 054

