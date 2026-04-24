# Rust Systems For Safety Critical Infrastructure

Rust is a systems programming language.

It provides memory safety without garbage collection.

Use-after-free is impossible.

Buffer overflow is impossible.

Null pointer dereference is impossible.

Rust provides thread safety.

Data races are prevented at compile time.

Rust provides zero-cost abstractions.

Iterators have no runtime overhead.

Rust provides deterministic destruction.

No GC pauses. No unpredictable delays.

Ferrocene is a qualified Rust compiler toolchain.

TUV SUD certified it.

Ferrocene has ISO 26262 qualification.

Qualified at ASIL D.

The highest automotive safety level.

For series production road vehicles.

Ferrocene has IEC 61508 qualification.

Qualified at SIL 4.

The highest safety integrity level for industrial systems.

Also qualified for IEC 62304 Class C (medical devices).

SIL 4 continuous mode PFH range is 10-to-the-minus-9 to less than 10-to-the-minus-8 per hour.

SIL 4 is the highest level.

Ferrocene is not the only certified option.

Assembly is recommended for SIL 4.

C is recommended up to SIL 3.

Ada is recommended for SIL 4.

Ferrocene extends Rust into this space.

Message brokers route messages between services.

RobustMQ is a message queue built in Rust.

It supports MQTT. It supports HTTP.

It provides high throughput.

Fluvio is a distributed streaming platform built in Rust.

It provides real-time data streaming.

It provides cluster replication.

Iggy is a lightweight message streaming built in Rust.

It provides persistent streams.

It provides message ordering.

Time-series databases store and query time-stamped data.

SurrealDB is a multi-model database built in Rust.

It supports structured data. It supports time-series data.

It supports graph data.

It speaks SQL. It speaks RPC.

It runs embedded or as a server.

Stream processing engines compute on data streams in real time.

Arroyo is a distributed stream processing engine built in Rust.

It provides stateful computation.

It provides windowing. It provides joins.

Materialize is a SQL streaming engine built in Rust.

It provides incremental computation.

It provides temporal tables.

It provides Kafka integration.

WASM runtimes execute WebAssembly outside a browser.

wasmtime is a WASM runtime built by the Bytecode Alliance.

It is written in Rust.

It is portable.

wasmCloud is a distributed actor platform built on WASM.

It provides actor isolation.

It provides capability-based security.

It provides portable actors.

It runs on wasmtime.

Safety-critical systems can kill or injure if they fail.

Examples include water treatment. Power distribution. Fire suppression.

IEC 61508 is the functional safety standard.

It defines Safety Integrity Levels (SIL).

SIL 4 is the highest level.

SIL 4 requires probability of dangerous failure below 10 to the minus 9 per hour.

ISO 26262 is the automotive safety standard.

It defines ASIL levels.

ASIL D is the highest level.

IEC 61508 recommends specific languages for the highest reliability levels.

Assembly is recommended for SIL 4.

C is recommended up to SIL 3.

Ada is recommended for SIL 4.

Ferrocene extends Rust into these certified spaces.

Organ (metaphor for a functional subsystem or team):

The organ information layer uses Rust infrastructure.

SurrealDB stores the knowledge graph.

SurrealDB stores sensor readings.

SurrealDB stores beliefs with confidence levels.

RobustMQ and Fluvio handle sensor data streams.

Iggy handles lightweight message delivery.

Arroyo and Materialize process streams in real time.

They compute aggregates. They detect anomalies.

wasmtime and wasmCloud provide the sandbox layer.

They isolate untrusted code.

They enable plugin systems.

Ferrocene targets the highest safety levels.

For water systems. For power distribution.

For any system where failure means harm.



Body (metaphor for the complete collective or organism):


: 000-ROOT.md

053 021 040 000

