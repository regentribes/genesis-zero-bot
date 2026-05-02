# Hardened Integral Proto-Node - Complete Specification v1.0
**Compiled:** 2026-05-02 | **Threat model:** All known vectors | **Hardening:** Defense in depth | **Constraint:** Zero internet dependency

## Threat Register (15 Vectors)

| ID | Threat | Probability | Impact |
|----|--------|-------------|--------|
| T1 | BlackRock forks Integral | MEDIUM | Catastrophic |
| T2 | Palantir absorbs OAD | HIGH | Severe |
| T3 | EU mandates monetary tokenization | LOW-MEDIUM | Severe |
| T4 | Integral Core team capture | MEDIUM | Severe |
| T5 | Cascade failure (internet shutdown) | LOW | Catastrophic |
| T6 | BlackRock acquires Integral IP | MEDIUM | Severe |
| T7 | Palantir becomes standard ontology | MEDIUM | Severe |
| T8 | Tokenization becomes taxation | MEDIUM | Moderate |
| T9 | AI replaces CDS human consent | HIGH | Catastrophic |
| T10 | Cognitive capture via AI steering | HIGH | Severe |
| T11 | Federation fractures into sects | MEDIUM | Severe |
| T12 | Integral becomes mainstream (new BLK) | LOW | Moderate |
| T13 | Discovery of structurally superior system | HIGH | Low |
| T14 | Integral weaponized by bad actors | LOW | Catastrophic |
| T15 | Coordinated regulatory shutdown | LOW | Severe |

## Layer 0: Philosophical Foundation

### Principle 0.1: INVOLUNTARY OBSOLESCENCE
Integral is designed to be the last system standing, not the final solution. If a superior system emerges, Integral forks toward it. If Integral reaches >20% global coordination, it auto-dissolves.
- **Hardens:** T12, T13

### Principle 0.2: PRACTICE OVER DOCUMENT
All valuable knowledge is embodied in community practice, not documents. Legal IP cannot capture embodied knowledge. Documents are secondary to lived experience.
- **Hardens:** T1, T6

### Principle 0.3: MUTUAL EXCLUSIVITY
Integral cannot be consumed by any external system (Palantir, BlackRock, EU) without losing its meaning. Semantic firewall is structural, not policy.
- **Hardens:** T2, T7

### Principle 0.4: DISPERSED POWER
No single point of failure or capture. Every component exists in triplicate across independent nodes. No entity controls >15% of any resource.
- **Hardens:** T4, T11

### Principle 0.5: DELIBERATE FRICTION
Human consent required at every decision. No automated override. Deliberate slowness at governance moments. No "fast path."
- **Hardens:** T9, T10

## Layer 1: Physical Infrastructure Hardening

### Hardware Architecture (per node)

**Core (3x redundant per community):**
- RasPi 5 (8GB) x 3 = $450
- 3 boards, any 2 can fail, node survives
- Geographic distribution (3 locations)

**Storage (encrypted, replicated):**
- NVMe SSD 2TB x 2 = $300
- LUKS2 encryption
- Key split across 3 node operators

**Connectivity:**
- LoRa module (30km range) x 2 = $160
- 2 frequencies (primary + backup)
- AES-256 encrypted
- Mesh routing via LibreMesh

**Timing:**
- GPS module x 2 = $60
- 2 independent GNSS receivers
- Only used for ITC temporal ordering

**Power:**
- Solar 100W + LiFePO4 100Ah = $400
- 72hr+ autonomous operation
- No grid dependency

**Physical security:**
- Tamper-evident enclosure
- Anti-tamper switches
- Secure boot (TPM 2.0)
- Physical access logs
- Key destruction on tamper

### Node Geography (minimum for resilience)
- 3 nodes minimum per community
- 3 separate physical locations
- Minimum 5km between nodes
- Different power grids
- Node types: ACTIVE (participates), ARCHIVE (offline backup), RELAY (mesh only)

## Layer 2: Digital Infrastructure Hardening

### Hardware Security Module
- TPM 2.0 on every RasPi
- Secure boot chain (bootguard)
- Measured boot with attestation
- Keys stored in TPM, never in RAM
- LUKS2 with Argon2id key derivation
- 3 of 5 operator passphrase fragments needed

### Distributed Ledger (Holochain)
- Agent identity: 256-bit entropy key, split 3-of-5 Shamir, stored in TPM
- Source chain: SHA-3 512 hash chain, every entry signed
- DHT resilience: 20x replication, no hard deletion
- Consistency during splits: CRDT, merge on reconnection (no fork)
- Sybil resistance: ITC stake + reputation + PoW, no IP-based reputation

### ITC Timecredit Hardening
- **Non-transferability:** Protocol-level removal, node ejected on violation
- **Temporal decay:** 1% per month, via GNSS timestamp, cannot be modified
- **No exchange value:** "Community labor accounting" — not security/commodity/currency
- **Quantum resistance:** Dilithium/RaptorQ hybrid signatures

### FRS Ecological Feedback Hardening
- Physical sensors with self-test, tamper-evident housing, multi-sensor redundancy
- Local oracle (no Chainlink): local LLM, local sensors only, human review required
- Outlier detection, cross-sensor correlation, human override always available

## Layer 3: Governance (CDS) Hardening

### CDS Core Protocol

**Weighted consent (not majority voting):**
- Weight based on: participation history, community tenure, domain expertise
- Calculated locally, verified by network

**Objection mapping:**
- Severity 1-5 scale
- Severity 5 = automatic veto
- Severity <5 = mitigation before vote

**Decision classes:**
| Class | Weight Threshold | Deliberation |
|-------|-----------------|--------------|
| MINOR | 1.0 | None |
| MODERATE | 2.5 | 24hr |
| MAJOR | 5.0 | 7 days |
| CRITICAL | 10.0 | 30 days |

### Hardening Matrix: Governance
| Threat | Countermeasure |
|--------|---------------|
| T9 (AI replaces) | Human initiation, 24hr deliberation, human veto logged |
| T10 (cognitive) | AI must include dissent, devil's advocate, no suppression |
| T11 (fracture) | CRDT merge, 80% threshold to exit, "no带走knowledge" |
| T12 (mainstream) | Dissolution trigger at >20% coordination |
| T14 (bad actors) | Severity-5 objection = automatic veto |

### Human Consent Protocol (Mandatory)
Every governance action requires:
1. Human initiation (not AI-triggered)
2. 24-hour minimum deliberation
3. Objection period (7 days for MAJOR+)
4. Human consent signature (all types)
5. Implementation delay (1-30 days)
6. Post-implementation review (90 days)
7. Audit trail (immutable, local)

**AI role: ADVISORY ONLY** — must state confidence, alternatives, dissent. Can be ignored without consequence.

## Layer 4: OAD Knowledge Commons Hardening

### Semantic Firewall Architecture
- **Language isolation:** OAD written in community dialect, not formal ontology, cultural context embedded
- **Context embedding:** Local meaning, historical context, relationships to local practices
- **Version control:** Git-based, local, human authorship required
- **Access control:** Read (any member), Contribute (6mo+), Modify (consensus), Fork (with attribution)
- **Lossy export:** Formal data exports are intentionally lossy — external systems get data, not meaning

### OAD Content Hardening
**Capturable (can be legally acquired):** Documents, processes, specs, meeting records, templates

**Non-capturable (practice, not document):** How decisions get made, why objections raised, what cultural context means, how trust is built, community relationships

**Defensive documentation:** Legal docs reference embodied practice — acquirer gets document, not the practice

## Layer 5: Mutual Exclusivity Protocol

Makes Integral impossible to absorb into any external system.

| Mechanism | Effect |
|-----------|--------|
| Language isolation | OAD not parseable by external systems |
| Practice binding | Requires community presence to learn |
| Technical incompatibility | Holochain not compatible with Ethereum, Solana, Hyperledger, Palantir |
| Governance incompatibility | CDS not compatible with corporate hierarchy, democratic voting, market mechanisms, compliance frameworks |
| Economic incompatibility | ITC not compatible with monetary systems, securities law, tax frameworks, credit systems |
| Dissolution clause | >20% global coordination = automatic dissolution |

## Layer 6: Emergency Protocols

### Emergency Shutdown
**Trigger:** Any 3 operators across different nodes agree on existential threat

**Protocol:**
1. All nodes go to encrypted standby
2. Full state exported to USB (encrypted)
3. Nodes wipe active storage
4. Physical relocation of hardware
5. Mesh network re-establishes at new location after 30 days

**Key destruction:** TPM erases all keys. 5 of 7 fragments required. Fragment holders distributed globally.

### Sustained Operation Timeline
- **30 days:** Full solar + LoRa mesh, CDS coordination, ITC accounting, FRS monitoring
- **180 days:** Monthly mesh sync, USB sneakernet for OAD, physical goods trade via ITC
- **5 years:** Hardware refresh cycle, community growth funding, federation grows
- **10 years:** Protocol upgrades, hardware migration, cultural evolution built in

## Complete Stack Summary

| Layer | Components | Hardens Against |
|-------|-----------|-----------------|
| 0 | 5 philosophical principles | T12, T13, T1, T6, T2, T7, T4, T11, T9, T10 |
| 1 | Hardware (3x RasPi, LoRa, GPS, solar), geography | T5, T14, T15, T11 |
| 2 | TPM, LUKS2, Holochain, CRDT, ITC, FRS | T5, T4, T11, T14, T3, T8, T1 |
| 3 | CDS weighted consent, objection mapping, human consent | T9, T10, T11, T12, T14 |
| 4 | OAD, semantic firewall, practice binding | T1, T2, T6, T11, T14 |
| 5 | 6 mutual exclusivity mechanisms | T1, T2, T6, T7, T3, T8, T12 |
| 6 | Shutdown, recovery, sustained operation | T5, T14, T15 |

## Cost Summary

**Per 3-node community:**
- Hardware: $2,700 (one-time)
- Annual power: $200 (solar)
- Annual ops: 3 operators × 20hrs/month (ITC credits, no cash)

**Revised program total: $100-160K** (46% reduction from original $185-300K due to offline-first design)

**No internet. No cloud. No external dependency. No single point of failure. No capture vector.**

## Sources
- holochain.org — offline DLT
- ollama.ai — local LLM
- surrealdb.com — local knowledge graph
- polymesh.network — permissioned tokens
- libremesh.org — mesh networking
- raspberrypi.com — edge hardware
- gnss-sdr.org — free GNSS timing
- iacr.org — post-quantum signatures
- crdt.tech — conflict-free replicated data types

**GitHub:** github.com/regentribes/genesis-zero-bot/tree/main/docs/research/comprehensive-synthesis/extreme-scenarios-offline.md