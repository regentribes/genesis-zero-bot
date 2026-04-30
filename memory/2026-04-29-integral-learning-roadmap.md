# Integral Technology Stack — Learning Roadmap
## Self-Contained Knowledge System for Sovereign Infrastructure Development

**Purpose:** Develop sufficient confidence in each technology area without external references.
**Approach:** Contained knowledge, progressive depth, practice-first learning. No links to external docs — all knowledge embedded.

---

## STAGE 0 — Foundations (Weeks 1-4)

### Goal: Understand why local-first sovereignty matters, and what fails when it's absent.

### Core Learning:

**Why Centralized Systems Fail**
- Single point of failure: datacenter goes down, everything dependent on it goes dark
- Legal capture: AWS/Azure/GCP comply with legal orders, infrastructure disappears or gets searched
- Geographic concentration: 44% of Bitcoin nodes in US+Germany — same power grid, same geopolitical exposure
- Trust model inversion: systems that claim to be "decentralized" often rely on centralized DNS, cloud APIs, GitHub for coordination

**The Threat Model (Memorize)**
Three distinct failure modes require different responses:
1. Datacenter destruction → infrastructure must survive physical loss
2. Authoritarian control → DNS poisoning, API blocklists, legal pressure on cloud providers
3. Systemic infrastructure collapse (EMP) → everything electronic dark for weeks

Every technology choice either survives these or doesn't. No middle ground.

**What Sovereignty Requires**
- No single points of failure
- Data replicated across nodes in diverse jurisdictions and infrastructure types
- Operates peer-to-peer without requiring internet
- Agent-centric (each node carries own valid state, gossip protocol for sync)
- No central switch to flip

**Contained Knowledge:**
The adversary model: you are building for conditions where Google is inaccessible, GitHub is blocked, your cloud provider is served a legal notice, and your nodes might be physically separated from each other for weeks. Design for that first. Everything else is a bonus.

---

## STAGE 1 — CRDT Fundamentals (Weeks 5-8)

### Goal: Understand Conflict-free Replicated Data Types deeply enough to reason about them without reference material.

### Core Learning:

**What CRDTs Are**
CRDT = Conflict-free Replicated Data Type. Data structure that works correctly even when copies diverge and reconnect later.

Two classes you need to understand:

**CvRDT (Commutative Replicated Data Type)**
- State-based
- Send your full state to neighbors, they merge it
- Simple but expensive (full state every time)
- Example: grow-only counter (you can only increment, merge = take max)

**CmRDT (Operation-based)**
- Operation-based
- Broadcast operations to all peers
- Peers apply operations in causal order
- More efficient (just the operation, not full state)
- Example: add-wins set (operation = "add X", merge = apply all operations)

**The Key Invariant (Memorize)**
Any two replicas that have received the same set of updates, regardless of order, converge to the same state. This is what makes the system resilient — no coordinator needed, no consensus needed, just exchange whatever you have and the math guarantees convergence.

**Why This Matters for Governance**
Governance data (proposals, votes, decisions) must survive network partitions. A community might be offline from the rest of the network for weeks. When they reconnect, the data must merge correctly — no lost votes, no overwritten decisions. CRDTs provide this guarantee mathematically, not by trusting a server.

**Common CRDT Patterns (Practical)**
- Last-Write-Wins Register: Each update has a timestamp or version. On merge, take the update with the latest timestamp. Simple but loses intermediate values (two writes between sync = one wins, other lost).
- OR-Set (Observed-Remove Set): Each element has a unique tag. Add = add with new tag. Remove = mark tag as deleted but keep it. Merge = union of all adds, intersection of undeleted tags. Handles concurrent adds and removes correctly.
- PN-Counter (Positive-Negative Counter): Two grow-only counters — one for increments, one for decrements. Final value = P - N. Each replica can increment/decrement locally. Merge = P = max(P1, P2), N = max(N1, N2). Works for distributed credit tracking.

**What CRDTs Cannot Do**
CRDTs guarantee convergence for the data structure itself. They don't solve: semantic conflicts (two proposals both say "reject the other"), schema enforcement (you can write invalid data into a LWW register), or application-level logic (CRDTs handle merge, not meaning).

**Contained Knowledge:**
For Integral's CDS (governance): a PN-Counter tracks time credits locally on each node, syncs via gossip, converges even with weeks of partition. For OAD (design specs): a CRDT document store tracks version history with full supersession preserved — no "last write wins" losing intermediate states.

---

## STAGE 2 — SurrealDB Deep Dive (Weeks 9-12)

### Goal: Operate SurrealDB embedded in production without external reference.

### Core Learning:

**What SurrealDB Is**
Multi-model database: document store + graph database + time-series database + vector store. Runs embedded (no separate server process), runs as distributed server, runs in-memory or persisted to disk.

**Why It Matters for Integral**
Genesis Brain already uses it. It has native graph traversal (→ operator), HNSW vector indexes for semantic search, time-series queries, and SurrealQL (SQL-like with graph extensions). One database instead of four.

**Embedded Mode (Critical for Sovereignty)**
```
USE surreal REMOTE host:port  -- connect to server
USE surreal EMBLEMENT db_name  -- embedded, persisted to disk
USE surreal MEMORY  -- in-memory only
```
Embedded mode means the database runs in the same process as your application. No network calls. No server to lose. The database file lives on your local encrypted SSD.

**Graph Queries (Native)**
```sql
SELECT * FROM person WHERE ->knows->(age > 30);
```
This traverses from person through knows edges to people with age > 30. No JOIN required. The → operator is graph traversal.

**Schema Design for Governance**
For CDS (governance decisions):
- Table: proposal (id, created_at, status, author, content)
- Table: vote (id, proposal_id, voter_id, position, timestamp)
- Table: objection (id, proposal_id, objector_id, reason, resolved)
Edges model relationships between decisions, objections, and resolutions.

For FRS (feedback system):
- Table: metric (id, node_id, type, value, timestamp)
- Table: signal (id, metric_id, interpretation, confidence)
Time-series queries: `SELECT * FROM metric WHERE timestamp > 7 days ago GROUP BY type`

**What SurrealDB Doesn't Yet Provide (Know This)**
- No native CRDT sync — you need an external layer (Loro, Yjs, or custom) on top
- v3 still maturing — some edge cases in embedded mode under high load
- No built-in schema migration tooling — manage via versioned schema files

**Contained Knowledge:**
SurrealDB is your primary persistence layer today. Build a CRDT sync wrapper around it for the fault-tolerant layer. The graph query model maps directly to Integral's knowledge commons (OAD) — traverse from design spec to its revisions to the humans who contributed.

---

## STAGE 3 — Peer-to-Peer Transport with iroh (Weeks 13-16)

### Goal: Understand iroh's direct connections model and apply it to offline mesh scenarios.

### Core Learning:

**What iroh Provides**
Library for building on direct connections between devices, even through NATs and firewalls. No server required. One device connects to another device directly — they exchange data, then disconnect.

**The Key Insight (Memorize)**
Most P2P systems still rely on signaling servers to establish connections. iroh uses a relay system that works even when both peers are behind symmetric NATs. Once connected, they can talk directly forever. The relay is only for connection establishment, not for ongoing traffic.

**Why This Matters for Integral**
Nodes in a regenerative neighborhood need to sync data without internet access. They might be connected via LoRa radios, Bluetooth, or a local Wi-Fi mesh. iroh handles the connection logistics — you just send and receive data.

**iroh Basics (Practical)**
- `iroh connect` — generate a peer ID for this device
- `iroh connect peer_id` — connect to another device by peer ID
- Once connected: bidirectional data channel, like a TCP socket but P2P
- For local mesh: share peer IDs via QR code, NFC, or pre-configured config file

**Building a Simple Sync with iroh**
1. Each node has a peer ID stored locally
2. Nodes exchange peer IDs on first contact (LoRa broadcast, QR code scan, config file)
3. On connection: exchange state vectors (what do you have that I don't?)
4. Exchange deltas (send me what I don't have)
5. Apply deltas locally
6. Disconnect and repeat when needed

**Limitations (Know Them)**
- iroh handles transport, not data model — you build the sync protocol on top
- No automatic discovery — nodes need to know each other's peer IDs somehow
- Mobile networks (LTE/5G) can have issues with long-lived P2P connections — test on actual mesh hardware

**Contained Knowledge:**
iroh is your transport substrate. It solves the "how do two devices talk when there's no internet" problem. The actual data sync (what to exchange, how to merge) is your problem — iroh just moves bytes between devices.

---

## STAGE 4 — Holochain Agent-Centric Model (Weeks 17-20)

### Goal: Understand why agent-centric beats data-centric for sovereign applications.

### Core Learning:

**The Central Problem with Data-Centric Systems**
In a data-centric system (blockchain, distributed database), there's a global state that everyone agrees on. This requires consensus — which requires coordination — which requires infrastructure — which creates centralization pressure.

**The Agent-Centric Alternative (Memorize)**
Each agent (person, organization, AI) has their own chain. Their chain is the authoritative record of their actions. Other agents validate the cryptographic signatures but don't need to agree on global state. Each agent's chain is valid independently.

**How Holochain Works (Practical)**
- Each node runs a conductor (runtime environment for hApps)
- Each hApp defines DNA (distributed hash array — the app logic + data schema)
- When you take an action, it's recorded in your local chain with your cryptographic signature
- Actions reference other actions by hash (not by global state)
- When two nodes sync, they exchange new actions and validate each other's chains cryptographically

**Why This Is Sovereignty-Preserving**
No global consensus to fail. No leader to target. If the Holo cloud hosting disappears, hApps keep running — nodes talk directly to each other. The network survives the destruction of any subset of nodes.

**Converge — Criteria-Driven Decision Making (Relevant to CDS)**
Converge is a Holochain hApp for criteria-driven deliberation. Key concepts:
- Propose criteria for a decision (not proposals, but the standards for evaluation)
- Evidence against criteria gets recorded
- Resolution: when sufficient evidence satisfies criteria, decision emerges
- Each participant maintains their own view; no central vote count

**Contained Knowledge:**
Holochain is the model for how Integral nodes should operate — each carrying their own valid chain, gossiping with neighbors, no global consensus bottleneck. The CDS (governance) subsystem maps directly to Converge-style criteria-driven decisions. Start with Converge as a reference hApp.

---

## STAGE 5 — Zero Knowledge Proofs for Privacy (Weeks 21-24)

### Goal: Reason about ZKP's role in privacy-preserving coordination without needing the math.

### Core Learning:

**What ZKP Enables (Conceptual, Not Mathematical)**
Zero knowledge proofs let you prove you know something without revealing what you know. You can prove you have enough time credits to make a purchase without revealing your balance, your identity, or your transaction history.

**The Practical Value for ITC (Memorize)**
Integral Time Credits need to be:
- Verifiable (recipient can confirm you have the credits)
- Private (no one can see your balance or history unless you reveal it)
- Non-transferable (you can't give your credits to someone else)

ZKP enables all three. A zero-knowledge proof of sufficient balance proves you're solvent without exposing balance. The proof is cryptographic — the verifier is convinced without trusting you.

**SNARKs vs. STARKs (Practical Distinction)**
- SNARKs: Succinct Non-interactive ARguments of Knowledge. Short proofs, fast verification, require trusted setup ceremony (controversial).
- STARKs: Scalable Transparent ARguments of Knowledge. No trusted setup, post-quantum secure, proofs larger and slower to verify.

For Integral's use case: STARKs for long-term infrastructure (post-quantum matters), SNARKs for user-facing transactions where proof size and verification speed matter more.

**ZKML (Zero-Knowledge Machine Learning)**
Enables proving that an ML model was run correctly without revealing the model. Useful for FRS (feedback system) — prove that a monitoring computation was done honestly without revealing the algorithm.

**Contained Knowledge:**
ZKP is enabling infrastructure for ITC (privacy-preserving time credits) and FRS (spoof-proof feedback signals). You don't need to write the cryptography — you need to know when to apply it: credit verification, membership credentials, feedback integrity.

---

## STAGE 6 — Formal Verification Basics (Weeks 25-28)

### Goal: Understand why TLA+ specs matter for safety-critical systems and how to read them.

### Core Learning:

**Why Formal Verification for Integral**
When a system failure means community governance breaks down, you need to be able to reason about correctness with confidence, not just test a bunch of scenarios and hope. Formal verification provides mathematical proof that a system behaves correctly under all conditions, not just tested conditions.

**TLA+ (Practical)**
TLA+ is a formal specification language. You describe your system (states, transitions, invariants) in TLA+, and the TLA+ model checker (TLC) explores all possible state combinations to find bugs.

Key concepts:
- States: variables and their values
- Actions: transitions between states
- Invariants: properties that must always hold (safety)
- Temporal properties: properties that must eventually hold (liveness)

**The Critical Invariant Pattern (Memorize)**
For a governance system (CDS):
```
Invariants:
- A proposal cannot be marked resolved while unresolved objections exist
- A vote cannot be cast by the same person twice on the same proposal
- Time credits cannot go negative

These are safety properties. If any are violated, the system is in an invalid state.
```

**How BlackSwan Uses TLA+ (Reference)**
BlackSwan's TLA+ specs cover:
- NodeLifecycle: what happens when a node joins/leaves/fails
- D2BFT: distributed Byzantine fault-tolerant consensus (though Integral avoids BFT via CRDT approach)
- GlobalState: invariants across the entire system
- SporeProtocol: how nodes regenerate after failure

**Contained Knowledge:**
Formal specs are not documentation — they're executable requirements. For Integral's CDS and COS (the load-bearing governance systems), TLA+ specs catch bugs before they propagate. Start with invariants, not behaviors.

---

## STAGE 7 — Arxia Offline Infrastructure (Weeks 29-32)

### Goal: Understand block-lattice architecture and CRDT reconciliation for offline operation.

### Core Learning:

**Block-Lattice vs. Traditional Blockchain (Memorize)**
In traditional blockchain (Bitcoin, Ethereum), there's one global chain. All miners work on the same chain. This requires heavy consensus and is slow.

In block-lattice (Arxia), each account has its own chain. You are the only miner of your chain. When you make a transaction, you append a block to your chain and reference the recipient's last block. No global chain. No heavy consensus.

**Why This Works Offline**
If you're disconnected from the network, you keep appending blocks to your own chain. When you reconnect, you exchange chain tips with neighbors, detect which chain is longer (most work done), and resolve via CRDT.

**CRDT Reconciliation in Arxia (Practical)**
- PN-Counter for balance: your balance is P - N. When offline, you increment P (credit) or N (debit). On reconnect, merge by taking max of P and max of N.
- OR-Set for transaction history: each transaction has unique ID. Add = append with new ID. Remove = mark deleted. Merge = union adds, intersection of undeleted. Conflicting transactions resolve correctly.

**ORV Consensus (Open Representative Voting)**
Not proof-of-work or proof-of-stake. Instead, each node designates representatives (trust network). When resolving conflicts, the weighted votes of representatives determine the canonical state. Designed for environments where traditional consensus is impractical.

**Contained Knowledge:**
Arxia solves the offline payment and infrastructure problem. When the internet is gone but LoRa radios still work, Arxia's block-lattice + CRDT reconciliation + ORV provides a working settlement layer. Study Arxia's partition_reconciliation example to understand the merge logic.

---

## STAGE 8 — Integration Patterns (Weeks 33-36)

### Goal: Understand how the layers compose into a coherent sovereign stack.

### Core Learning:

**The Layer Architecture (Memorize)**
```
Transport:        iroh (P2P connections through NATs/firewalls)
Graph Data:       Silk-Graph or SurrealDB + CRDT wrapper
Knowledge:        Integral knowledge commons (OAD)
Governance:       CDS decisions via Holochain hApp model
Economy:           ITC via Arxia-style block-lattice
Monitoring:        FRS via SurrealDB time-series + Nushell pipelines
Interface:         AFFiNE (self-hosted community-facing surface)
Simulation:        Bevy (systems dynamics visualization)
```

**The Critical Integration Point**
Every layer must work when the internet is gone. Test by:
1. Disconnecting the WAN link
2. Running the full stack on local mesh
3. Performing a governance transaction (CDS proposal + vote)
4. Performing an economic transaction (ITC credit transfer)
5. Reconnecting WAN and verifying full network converges
6. Documenting what failed and fixing it

**How Sync Works Across Layers**
1. iroh establishes P2P connection between two nodes
2. Each node's SurrealDB instance exports delta since last sync (change feed)
3. Delta exchanged via iroh connection
4. Each node imports the other's delta, CRDT merge logic handles conflicts
5. For governance: CRDT document store tracks proposals/votes/objections
6. For economy: Arxia block-lattice handles credit reconciliation
7. For knowledge: Silk-Graph schema-enforced graph syncs as Merkle-CRDT

**The Integration That's Still Missing**
No existing tool composes all these layers together. The integration work is the actual hard problem — writing the glue code that connects iroh transport to SurrealDB CRDT sync to Arxia ledger reconciliation to Holochain-style governance hApps.

This is where the 2-3 year timeline comes from: not the individual tools, but the integration and failure-mode testing.

**Contained Knowledge:**
The stack is composable. Each layer is real and available today. The missing work is integration + testing under adversarial conditions. Start with: iroh + SurrealDB + CRDT wrapper, test offline, iterate.

---

## LEARNING SEQUENCE SUMMARY

| Stage | Weeks | Technology | Confidence Check |
|---|---|---|---|
| 0 | 1-4 | Threat model + sovereignty requirements | Can explain failure modes without reference |
| 1 | 5-8 | CRDT fundamentals | Can design CRDT data structures for governance |
| 2 | 9-12 | SurrealDB embedded | Can build and query graph schema for OAD |
| 3 | 13-16 | iroh P2P transport | Can set up mesh sync between two nodes |
| 4 | 17-20 | Holochain agent-centric | Can explain why agent-centric > data-centric |
| 5 | 21-24 | ZKP for privacy | Can identify ZKP application points in ITC/FRS |
| 6 | 25-28 | TLA+ formal specs | Can write invariants for CDS safety properties |
| 7 | 29-32 | Arxia offline infrastructure | Can trace block-lattice reconciliation logic |
| 8 | 33-36 | Integration patterns | Can compose layers into working prototype |

---

## CONFIDENCE DEFINITION

You have sufficient confidence in a technology when:
1. You can explain the core mechanism without reference material
2. You can design a data structure or protocol using that technology for a novel use case
3. You can identify failure modes specific to that technology
4. You can teach it to someone else without external resources

Not: you can use the API. Not: you read the docs. Confidence = you understand the why, not just the how.

---

*This document is self-contained. All knowledge required to progress through the roadmap is embedded here. No external links, no external references. The only external resource needed is the ability to run the actual tools and observe their behavior.*