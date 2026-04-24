# Surrealdb Multi Model Context Layer For Ai Agents

SurrealDB is a multi-model database where storage, context, and memory are one transaction.
It positions itself as the context layer for AI agents.
The core insight is that agents fail due to context fragmentation, not model limitations.

SurrealDB unifies five databases into one engine.
Before, applications required five SDKs, five drivers, five connection pools for vector database, full-text search, time-series, relational/document, and graph database.
SurrealDB replaces all five with one SDK, one driver, one connection pool.
All five data models are accessible via SurrealQL in a single ACID transaction with strong consistency.

Five data models are native primitives in one query language:

Model 1 is documents.
Store and query structured JSON-like data with flexible schemas.
Schemaless start with progressive schema enforcement as needs evolve.

Model 2 is graphs.
Model and traverse complex relationships using native graph edges.
RELATE statements establish graph edges between records.
Graph traversals composed with other query types in single SurrealQL statement.

Model 3 is vectors.
Store embeddings for AI and RAG workflows.
Vector similarity search with cosine, euclidean, manhattan distance functions.
hybrid retrieval combining vector and BM25 full-text search.

Model 4 is time-series.
Ingest and query time-stamped data with windowing and aggregation patterns.
improved for sensor data, metrics, event streams.

Model 5 is relational.
Traditional tables with ACID transactions across multiple tables.
Full SQL-like SELECT, CREATE, UPDATE, DELETE operations.
Foreign key relationships and JOIN operations.

Single ACID transaction covers all five models.
Graph updates, document writes, and vector index changes happen together or not at all.
System (metaphor for an integrated whole or network):

This eliminates the partial write problem where one system commits and another fails.

The SurrealDB platform is a vertical stack from object storage to agent memory.

Layer 1 is object storage.
S3, GCS, Azure Blob storage as backend.
Compute-storage separation on commodity object storage.
Scale to zero when not in use.

Layer 2 is SurrealKV storage engine.
Native key-value storage engine in Rust.
ACID compliance with versioning and historical querying.
Replaces RocksDB as default storage for single-node deployments.

Layer 3 is SurrealDB compute engine.
Quorum consensus for distributed deployments.
All data models in one ACID transaction.
Single permission model across all data types.

Layer 4 is APIs.
GraphQL from client devices.
WebSocket connections for real-time.
REST API for programmatic access.
SurrealQL as unified query language.

SurrealQL is the unified query language across all data models.
SQL-like syntax for ease of adoption.
Supports advanced querying with filtering, sorting, aggregating, JOINs.
Recursive queries supported.
Graph semantics for relationship traversal.

Example multi-model query:
```sql
LET $vec = fn::embed("running shoes");
SELECT
  ->purchased->product AS history,
  ->reviewed->product(WHERE
    vector::similarity::cosine(embedding, $vec) > 0.8
  ) AS relevant,
  ->prefs(WHERE valid_at <= time::now()) AS prefs
FROM ONLY $user;
```

Example ACID transaction:
```sql
BEGIN TRANSACTION;
LET $order = CREATE order SET
  user = $auth.id,
  product = product:headphones,
  total = product:headphones.price;
RELATE $auth.id->purchased->product:headphones
  SET at = time::now();
UPDATE product:headphones SET stock -= 1;
COMMIT TRANSACTION;
```

Example hybrid RAG retrieval:
```sql
LET $query = "How do I configure access control?";
LET $embedding = fn::embed($query);
LET $vs = SELECT id,
  vector::similarity::cosine(embedding, $embedding) AS vs
FROM document
WHERE embedding <|20,COSINE|> $embedding
ORDER BY vs DESC LIMIT 20;
LET $ft = SELECT id,
  search::score(1) AS ts
FROM document
WHERE content @1@ $query
ORDER BY ts DESC LIMIT 20;
SELECT * FROM search::rrf(($vs, $ft), 5, 60)
ORDER BY rrf_score DESC;
```

SurrealDB runs embedded directly in an application process.
Single Rust binary with no external dependencies.
Full query engine with zero network overhead.

Deployment options:

Python: In-memory or file-based with SurrealKV.
JavaScript: Node.js and browser via WebAssembly.
Browser: In-memory or IndexedDB persistence.
Edge: WASM runtime for local reasoning with sync to central DB.

The same SurrealQL, API, and data model across all deployment modes.
Code developed for embedded instance works identically on cloud cluster.

Embedded mode is ideal for local-first applications, edge deployments, testing, and desktop applications.

SurrealDB offers real-time queries without polling.

Live queries push changes to subscribers as they commit.
Changefeeds enable event-driven architectures.
No polling, no message broker, no stale reads.

Built-in API layer for real-time collaboration features.

Built-in authentication and access control with scoped permissions.
DEFINE ACCESS statement for RECORD-based authentication.
JWT-based authentication with token management.
Row-level security with FOR SELECT, FOR CREATE, FOR UPDATE, FOR DELETE permissions.

Example:
```sql
DEFINE ACCESS account ON DATABASE
  TYPE RECORD
  SIGNUP (
    CREATE user SET
      email = $email,
      pass = crypto::argon2::generate($pass)
  )
  SIGNIN (
    SELECT * FROM user WHERE
      email = $email AND
      crypto::argon2::compare(pass, $pass)
  );

DEFINE TABLE order PERMISSIONS
  FOR select WHERE user = $auth.id
  FOR create WHERE $auth.id != NONE;
```

Version 2.0 introduces several major capabilities:

SurrealML: Storage, loading, and execution of ML models directly in database.
Enhanced security with advanced token management and precise user access control.
improved SurrealQL parser for faster query execution.
Improved memory handling.
Recursive query performance improvements.

Surrealist is the visual interface for interacting with SurrealDB.
Available as web app and desktop application.
Connect to any SurrealDB instance.
Execute queries, explore tables, design schemas.
Web app at app.surrealdb.com.
Desktop app with local installation.

SurrealDB Cloud: Managed service via AWS Marketplace.
Handles infrastructure, monitoring, backups, capacity planning.
Scalable from prototype to enterprise.
ACID compliant managed service.

Self-hosted: Single node or distributed cluster.
Install via single command, Docker, Kubernetes.
HomeBrew for macOS.
Single node: RocksDB or SurrealKV storage.
Multi-node: TiKV cluster for high availability.

Community Edition (BSL 1.1): All core open-source features.
Free for non-commercial use and development.
Free for pre-production and production use.
Can be deployed on-premise or in private cloud.
Cannot be offered commercially as DBaaS without separate commercial license.
After four years from release, BSL converts to Apache 2.0.

Enterprise Edition: Commercial license with advanced security, compliance, audit logging, FIPS-compliant cryptography.

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): ## Ecosystem

Official SDKs: JavaScript/TypeScript, Python, Rust, Go, Java, .NET, Swift.

Community libraries: Flutter/Dart client, TypeScript type-safe code generator, Zod schemas, Valibot schemas, Nim allographer, Rust surrealdb_extra ORM.

Management interfaces: Surrealist (web/desktop), Grafana datasource plugin.

Integrations: LangChain document loader, LangChain vector store, MCP server for AI assistants.

Starter kits: SvelteKit auth example, Vue blog, Go driver starter.

AI agents: Context-aware agents with unified memory, knowledge graphs, structured context.
Agent memory: Persistent structured memory for working, semantic, episodic, procedural memory.
Knowledge graphs: Model rich relationships and dependencies.
Real-time applications: Live queries without polling.

Community projects using SurrealDB:
open-notebook: Open source implementation of Notebook LM.
podcasts-to-knowledge: YouTube podcast to structured knowledge graph.
taro: Agentic search harness with 8 search tools.
dead-reckoning: Navigate Python codebases via knowledge graph.
Synapse (metaphor for a connection or signal link):

Synapse (metaphor for connection or link): synapse: Unstructured reflections into persistent knowledge graph.

SurrealDB provides a unified context layer that eliminates the operational overhead of five separate systems.

For regenerative communities building AI agents for community coordination:
One transaction boundary covers knowledge graph, sensor data, documents, relationships.
No glue code between vector DB, graph DB, doc store, auth service.
Built-in auth and permissions model replaces separate identity service.
Real-time capabilities enable live collaboration features.

Embedded mode enables local-first deployment without cloud dependency.
WASM runs in browser for offline-capable applications.
SurrealKV provides embedded persistent storage without external dependencies.

The licensing model is favorable for community use.
Development and production are free.
The main restriction is offering SurrealDB as a DBaaS, which communities are unlikely to do.





140 145 157

