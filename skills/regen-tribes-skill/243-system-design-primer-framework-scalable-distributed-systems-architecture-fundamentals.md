# System Design Primer Framework Scalable Distributed Systems Architecture Fundamentals

System (metaphor for an integrated whole or network):

The System Design Primer provides a structured learning framework for designing scalable distributed systems.

It covers the trade-offs between competing quality attributes, the fundamental algorithms and protocols used in distributed computing, and real-world architectural patterns from successful companies.

Every concept is described by its first principles.

Performance and scalability are related but distinct concerns.

Performance is the speed of individual operations, typically measured in latency or response time.

Scalability is the ability to handle increased load by adding resources.

A service is scalable if adding resources increases performance proportionally.

Poor performance can make a service unusable regardless of scalability.

Availability is the percentage of time a service is operational.

Consistency is the guarantee that all nodes return the same data at the same time.

In distributed systems, network partitions can occur. A partition is a temporary disconnection between nodes.

The CAP theorem states that a distributed system can provide only two of three guarantees: Consistency, Availability, and Partition tolerance.

Since network partitions are unavoidable, designers must choose between CP (Consistency over Availability) and AP (Availability over Consistency).

CP systems prioritize consistency over availability.

When a partition occurs, the system becomes unavailable to ensure all nodes agree on the same data.

Examples include Bigtable, HBase, and MongoDB.

CP systems are chosen when strong transactional guarantees are required, such as in banking systems where financial consistency cannot be compromised.

AP systems prioritize availability over consistency.

When a partition occurs, the system continues operating but may return stale data.

Examples include Dynamo, Cassandra, and CouchDB.

AP systems are chosen when eventual consistency is acceptable
and
system availability during network failures is critical, such as in social media feeds where stale data is preferable to no data.

Load balancers distribute incoming traffic across multiple servers.

Placement options include between users and the web server, between web servers and application servers, and between application servers and database servers.

Common algorithms include round robin, least connections, IP hash, and weighted round robin.

Health checks verify server availability before routing traffic.

Load balancers can terminate SSL connections to reduce computational burden on backend servers.

Caching reduces latency by storing frequently accessed data closer to the requester.

Application caches include in-memory caches such as Memcached and Redis.

Database caches include query result caching and write-through caching.

CDN caches static content at edge locations.

Cache invalidation strategies include write-through which writes to both cache
and
database, write-around which writes directly to database bypassing cache,
and
write-back which writes to cache
and
asynchronously persists to database.

Eviction policies include LRU (Least Recently Used), FIFO (Least Recently Used), and TTL (Time To Live).

Replication copies data across multiple nodes for redundancy and performance.

Single-leader replication designates one node as the primary that handles all writes, with secondary nodes replicating from the primary.

Leaderless replication treats all nodes as equal, with clients writing to multiple nodes and reads querying multiple nodes to achieve quorum.

Synchronous replication ensures all replicas are consistent before acknowledging a write.

Asynchronous replication acknowledges writes immediately before all replicas are updated.

Strong consistency guarantees immediately reflects all writes in subsequent reads.

Eventual consistency guarantees writes will propagate to all replicas eventually.

Weak consistency allows reads to return stale data for a bounded period after a write.

Read-after-write consistency guarantees reads reflect writes made by the same client.

Partitioning splits data across multiple database instances.

Key-based partitioning uses a hash function on a key to determine which partition holds the data.

Range-based partitioning stores contiguous ranges of keys on the same partition.

Directory-based partitioning uses a lookup service to track which partition owns each key.

Partitioning improves scalability but increases complexity for queries spanning multiple partitions and cross-partition operations.

DNS translates domain names to IP addresses.

Resolution follows a path from browser cache to recursive resolvers to root servers to TLD servers to authoritative name servers.

DNS record types include A for IPv4 address, AAAA for IPv6 address, CNAME for canonical name aliasing, and MX for mail exchange.

DNS latency is improved through CDN edge caching and DNS caching at multiple levels.

CDNs cache content at edge servers geographically distributed near users.

CDNs reduce latency by serving static assets from nearby edge locations.

Origin pull CDNs fetch content from the origin server on first request and cache it.

Push CDNs receive content from origin servers and distribute to edge locations proactively.

CDNs can cache dynamic content with appropriate cache headers or serve personalized content through edge computing.

Database indexes accelerate read queries by maintaining data structures improved for search.

B-tree indexes are balanced tree structures that maintain sorted order, supporting range queries efficiently.

Hash indexes provide constant-time lookups for exact match queries.

Composite indexes cover multiple columns in a specific order, supporting queries that filter on the leading column.

Indexes improve read performance but add overhead to write operations and consume storage space.

SQL databases provide ACID transaction guarantees with relational data modeled in tables with schemas.

NoSQL databases sacrifice ACID guarantees for scalability and flexibility, using data models such as key-value, document, wide-column, and graph.

High transaction volume applications with complex queries benefit from SQL databases.

Applications with flexible schemas, high write throughput, or large data volumes benefit from NoSQL databases.

Hybrid approaches combine SQL for transactional data with NoSQL for analytical data.

Criteria for database selection include data model, query patterns, scalability requirements, durability guarantees, and operational complexity.

Document stores suit hierarchical data with flexible schemas.

Wide-column stores suit massive datasets with predictable query patterns.

Key-value stores suit simple lookup patterns with high throughput requirements.

Graph databases suit connected data with complex relationship traversals.

Strong consistency ensures all subsequent reads see the latest write.

Eventual consistency ensures all replicas converge to the same value given no new writes.

Causal consistency ensures operations respect causality, where causally related operations are seen by all nodes in order.

Read-your-writes consistency ensures a client sees their own writes immediately after submission.

Bandwidth is the maximum data transfer rate measured in bits per second.

Throughput is the actual data transfer rate achieved in practice.

Latency is the time delay between a request and its response.

Latency affects user experience, with target latencies of under 100 milliseconds for interactive applications.

Separation of concerns through layered architecture improves maintainability and scalability.

Web servers handle HTTP requests and responses.

Application servers implement business logic.

Databases persist and retrieve data.

Caching layers reduce database load.

Message queues decouple components and provide asynchronous communication.





204 208 207

