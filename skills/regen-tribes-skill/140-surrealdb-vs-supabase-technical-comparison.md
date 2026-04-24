# Surrealdb Vs Supabase Technical Comparison

Aspect 1 is Type.
SurrealDB is a multi-model DB.
It supports doc, graph, key-value, relational, vector.
Supabase is a Postgres-based platform.
It is relational plus extensions.

Aspect 2 is License.
SurrealDB uses Apache 2.0 open source.
Supabase uses PostgreSQL MIT.
The Supabase platform is closed-source SaaS.

Aspect 3 is Stars.
SurrealDB has 31.4k.
Supabase has 98.4k.

Aspect 4 is Founded.
SurrealDB was 2016.
Supabase was 2020.

SurrealDB is true multi-model.
Native document, graph with edge
and
vertex relationships, relational tables with joins
and
ACID transactions, key-value in embedded mode, time-series with native timestamps, vector search in version 3.0, GeoJSON with radius queries.

Supabase is Postgres Extensions.
Relational is core strength.
JSON is JSONB columns with partial indexing.
Vector requires pgvector extension.
Full-text search via tsvector.
Time-series via TimescaleDB extension which is optional.

Winner: SurrealDB for native multi-model flexibility.
Supabase needs extensions for what SurrealDB does out of the box.

SurrealDB uses SurrealQL.
It is SQL-like with native graph traversal, built-in HTTP and RPC, native GraphQL, native REST.

Supabase uses SQL.
No native graph support.
Requires Edge Functions for HTTP and RPC.
GraphQL via Hasura auto-generated.
REST via auto-generated API.

Winner: SurrealDB.
Single query language across all models.
Supabase needs multiple tools.

SurrealDB offers embedded mode with no server.
Also offers standalone and distributed cluster.

Supabase offers cloud only for managed version.
Self-hosted option exists.

For regenerative communities: SurrealDB embedded mode works offline.
Supabase requires cloud connection.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 


055 111

