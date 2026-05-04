# Distributed Systems Key Algorithms And Protocols Paxos Raft Gossip Two Phase Commit Consensus

Distributed systems require protocols to coordinate behavior across unreliable networks.

These protocols provide consistency guarantees, fault tolerance, and coordination between nodes.

Every concept is described by its first principles.

Paxos achieves consensus among distributed nodes in the presence of failures.

A proposer submits a value to acceptors and collects responses.

If a majority of acceptors agree, the value is chosen.

The algorithm handles message loss, node failures, and network partitions.

Multi-Paxos extends the basic algorithm to sequence multiple commands.

Paxos is notoriously difficult to implement correctly.

Raft was designed as a more understandable alternative to Paxos.

Raft decomposes consensus into three subproblems: leader election, log replication, and safety.

A leader is elected from among the nodes through voting.

The leader replicates log entries to followers.

If the leader fails, a new election chooses a replacement.

Raft provides the same safety guarantees as Paxos but with clearer semantics.

Gossip protocols disseminate information through pairwise communication between nodes.

Each node periodically selects a random peer to exchange state with.

Information spreads across the system through successive pairwise exchanges.

Gossip protocols are eventually consistent, converging to the same state across all nodes.

They handle node failures gracefully since missed exchanges are retried with other peers.

Gossip protocols scale well as they do not require central coordination.

Two-phase commit coordinates a distributed transaction across multiple participants.

The coordinator first sends a prepare message to all participants.

Participants vote to commit or abort the transaction.

If all vote to commit, the coordinator sends a commit message.

If any votes to abort, the coordinator sends an abort message.

Two-phase commit is blocking, waiting for participants to respond.

Three-phase commit adds a pre-commit phase to avoid blocking.

The coordinator sends a prepare-to-commit message after participants vote commit.

Participants acknowledge pre-commit and wait for the final commit or abort.

The extra phase allows recovery from coordinator failures without blocking participants.

Merkle trees efficiently verify consistency of data across distributed nodes.

A Merkle tree is a hash tree where each leaf node is a hash of a data block.

Non-leaf nodes are hashes of their child nodes.

Comparing root hashes quickly determines if any data differs.

Merkle trees are used in Dynamo, Cassandra, and Bitcoin for anti-entropy and data consistency.

Vector clocks track causality between events in distributed systems.

Each node maintains a vector of logical timestamps, one per node.

When an event occurs, a node increments its own timestamp.

When nodes exchange information, they merge vectors by taking the maximum of each component.

Vector clocks can determine whether events are causally related or concurrent.

Bloom filters probabilistically test set membership with configurable false positive rates.

A Bloom filter uses multiple hash functions to set bits in a bit array.

To check membership, the same hash functions compute bit positions and check if all are set.

If a bit is not set, the element is definitely not in the set.

If all bits are set, the element is probably in the set with configurable probability of false positive.

Bloom filters trade exactness for space efficiency and constant-time lookups.

Consistent hashing distributes keys across nodes to minimize remapping when nodes are added or removed.

Keys and nodes are mapped to positions on a hash ring.

A key is assigned to the first node found moving clockwise on the ring.

When a node is added or removed, only keys near that node are remapped.

Virtual nodes improve distribution by assigning multiple positions per physical node.

Consistent hashing is used in Dynamo, Cassandra, and content delivery networks.

Quorum systems define the minimum number of nodes required to agree for reads or writes.

A quorum size of more than half the nodes ensures no two quorums can overlap.

Reads can wait for responses from a read quorum.

Writes can wait for acknowledgments from a write quorum.

Strict quorums ensure strong consistency but reduce availability during partitions.

Leader-follower replication designates one node as the primary for all writes.

The leader appends writes to its local log and replicates to followers.

Followers apply writes in the same order as the leader.

If the leader fails, a follower is promoted to become the new leader.

Asynchronous replication allows followers to lag behind the leader, improving performance but allowing some data loss.





243 244 208

