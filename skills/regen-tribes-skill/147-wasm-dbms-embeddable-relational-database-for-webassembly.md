# Wasm Dbms Embeddable Relational Database For Webassembly

wasm-dbms is an embeddable relational database engine written in Rust.
It runs entirely inside WebAssembly runtimes.
Unlike traditional databases that run as external services, wasm-dbms compiles into your WASM module.
It manages data directly in linear or stable memory.
No network calls, no external dependencies.

You define your schema as Rust structs with derive macros.
wasm-dbms provides full CRUD operations, ACID transactions, foreign key integrity, validation, and sanitization.
All running within the sandbox of your WASM module.

wasm-dbms supports any WASM runtime: Wasmtime, Wasmer, WasmEdge.
First-class integration with Internet Computer canisters through the ic-dbms adapter.

License is MIT. Repository is veeso/wasm-dbms on GitHub.

Schema-driven: define tables as Rust structs with derive macros.
Runtime-agnostic: works on any WASM runtime, not tied to a specific platform.
CRUD operations: full insert, select, update, delete support.
ACID transactions: commit and rollback with isolation.
Foreign keys: referential integrity with cascade and restrict behaviors.
Validation and sanitization: built-in validators and sanitizers.
JSON support: store and query semi-structured data.
IC integration: first-class support for Internet Computer canisters.

System (metaphor for an integrated whole or network):

Three-layer system: table management, query engine, memory provider.
Stable memory internals for persistent storage.
Join engine for cross-table query operations.

Table struct derives from Table macro.
Primary key field uses #(primary_key) attribute.
Sanitizers and validators applied as field attributes.

Example struct:
```rust
pub struct User {
    pub id: Uint32,
    pub name: Text,
    pub email: Text,
}
```

The Table macro generates additional types:
UserRecord for full records returned from queries.
UserInsertRequest for inserting records.
UserUpdateRequest for updating records.
UserForeignFetcher for relationship loading.

DatabaseSchema derive macro wires tables together.
Auto-generates DatabaseSchema trait implementation and register_tables method.
Replaces approximately 130 lines of manual dispatch code.

HeapMemoryProvider stores data in heap memory for testing and short-lived use cases.
WasiMemoryProvider provides file-backed persistent storage for WASI environments.
Internet Computer canisters use ic-dbms adapter with stable memory.

Uint32, Int32, Uint64, Int64, Float, Double, Boolean, Text, Blob, DateTime, Nullable, JSON.

Insert: add new record, returns Result with primary key conflict error if duplicate.
Select: query records with filters, ordering, pagination, field selection.
Update: modify existing records, returns count of affected rows.
Delete: remove records with restrict or cascade behavior.

All operations validate and sanitize data according to schema rules.
All operations enforce foreign key constraints.

Query builder with filter expressions.
Filter operators: eq, like, gt, lt, gte, lte, and, or, not.
Ordering by column ascending or descending.
Pagination with limit and offset.
Column selection to return only specific fields.
Eager loading of related records via with() method.

Begin transaction returns a transaction ID.
Create a transactional database instance from context and transaction ID.
Commit applies all changes.
Rollback reverts all changes.
Transactions provide isolation between concurrent operations.

Built-in validators: EmailValidator, MaxStrlenValidator, RangeValidator, Custom validators.
Built-in sanitizers: TrimSanitizer, HtmlSanitizer, Custom sanitizers.
Validators run on insert and update operations.
Sanitizers clean data before storage.

ic-dbms adapter deploys wasm-dbms as an Internet Computer canister.
ACL access control management for canister.
Client library for connecting to IC database canisters.

WasiMemoryProvider enables file-backed persistent storage.
Works with Wasmer, Wasmtime, WasmEdge runtimes.
Suitable for serverless and edge deployment.

Offline-first applications with local data persistence.
Embedded database in Wasm modules for edge computing.
Community data storage without cloud dependency.
Portable applications with self-contained database.
Regenerative neighborhood IoT data collection.
Local governance records with ACID guarantees.

Traditional databases require a running service with network access.
wasm-dbms embeds directly in your application binary.
No database server process to manage or secure.
Data stays with the application that uses it.

Compared to file-based storage like SQLite:
SQLite requires filesystem access and external process.
wasm-dbms runs within the same Wasm sandbox as your application.
Better isolation and portability.

Compared to in-memory only storage:
wasm-dbms supports persistent storage via WASI file operations.
ACID transactions ensure data integrity.
Foreign key constraints prevent invalid data structures.


Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 



140 145 111 133

