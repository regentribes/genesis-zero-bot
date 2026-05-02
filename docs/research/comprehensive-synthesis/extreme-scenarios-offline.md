# Extreme Scenario Engineering - Mutated Variables + Edge Exploration
**Compiled:** 2026-05-02 | **Hard constraint:** NO INTERNET DEPENDENCY

## Mutating Initial Assumptions

| Old Assumption | Mutated Assumption |
|--------------|-------------------|
| Integral builds on internet | Mesh networks, delay-tolerant, off-grid |
| Blockchain/tokens needed | Holochain DLT (no mining, agent-centric) |
| Tokenization requires public chains | Polymesh/Substrate runs on libp2p (offline-first) |
| Internet required for global federation | Store-and-forward across mesh, eventually-consistent |
| RegenTribes = online community | RegenTribes = physical network with intermittent connectivity |

## Threat Mapping: Integral Core Vulnerabilities

### THREAT 1: BlackRock Forks Integral
**Scenario:** BLK creates "Open Integral" foundation, funds development, adds compliance layer, makes OAD proprietary, CDS becomes "advisory council," community uses BLK version, original dissolves.
**Probability:** MEDIUM
**Mitigation:** Make OAD content culturally-specific. Cannot fork embodied knowledge, local context, community relationships. Only can fork documents.

### THREAT 2: Palantir Absorbs OAD
**Scenario:** Palantir ontology ingests Integral OAD as one of many knowledge graphs. Communities contribute to Palantir. Palantir sells to governments/corps. Integral becomes data source. Capture via value extraction.
**Probability:** HIGH
**Mitigation:** OAD designed for mutual exclusivity. Cannot be consumed by foreign ontology without losing meaning. Semantic firewall via community language + cultural encoding.

### THREAT 3: EU Mandates Monetary Tokenization
**Scenario:** EU regulations require all goods traceable via monetary tokens. Non-monetary ITC becomes non-compliant. Communities forced to use ERC-20.
**Probability:** LOW-MEDIUM
**Mitigation:** ITC designed as "time accounting" not token. Exempt from securities law if no exchange value. Legal clarity via explicit non-monetary framing.

### THREAT 4: Integral Core Team Capture
**Scenario:** Founders leave, new leadership pivots to market-friendly version.
**Probability:** MEDIUM
**Mitigation:** No central team. Federated nodes with independent governance. No single point of capture. Proto-node independence is structural, not policy.

## Technological Leverage: Offline-First Stack

### Hardware Stack Per Node (~$900 one-time)
- Raspberry Pi 5 (8GB) x 2 redundancy: $300
- LoRa radio module (RAKwireless): $80 (30km range)
- NVMe SSD 2TB: $150
- GPS module for timestamping: $30
- Solar panel + battery (off-grid): $200

### Software Stack Per Node ($0 - all open source)
- **Holochain** (DLT): free, open source, offline DLT
- **Llama 3 via Ollama** (LLM): free, runs locally on RasPi
- **SurrealDB** (knowledge graph): free, local persistence
- **Substrate/Polymesh** (ITC): free, peer-to-peer sync
- **GNSS-SDR** (timing): free, GPS/Galileo for timestamp consensus
- **LibreMesh** (mesh routing): free, B.A.T.M.A.N. protocol

### 5 AI Agents (all run locally, no cloud)

| Agent | Function | Runs On | Offline |
|-------|----------|---------|---------|
| CDS-COORD | Weighted consensus facilitation | Local LLM + Holochain DNA | Yes |
| FRS-MONITOR | Ecological sensing + feedback | SurrealDB + local LLM | Yes |
| OAD-ARCHIVIST | Knowledge commons keeper | Git + local LLM embedding | Yes (sneakernet) |
| ITC-ACCOUNTANT | Time credit accounting | Polymesh/Substrate node | Yes (delayed sync) |
| MESH-ORCHESTRATOR | Network topology management | LibreMesh + custom | Yes (LoRa mesh) |

## Federation Protocol: No Internet

**Sync methods (priority order):**
1. LoRa mesh (live, range 30km)
2. WiFi ad-hoc (live, range 300m)
3. Bluetooth (live, range 10m)
4. USB drive sneakernet (batch, unlimited)
5. LoRa mail (store-and-forward, global range)

**When two nodes meet:**
1. Exchange OAD deltas
2. Reconcile CDS votes
3. Sync ITC balances
4. Share FRS measurements
5. Update peer lists

**Result:** Global federation without internet.

## Extreme Scenarios: Black Swan Map

### SCENARIO 1: Cascade Failure (internet shutdown)
**Win:** Integral nodes already operating on mesh + local LLMs. All other coordination systems offline.

### SCENARIO 2: BlackRock Collects Integral
**Win:** OAD is embodied in community practices, not documents. Cannot be transferred via IP acquisition. Culturally-embedded knowledge = uncapturable.

### SCENARIO 3: Palantir Replacement
**Win:** Integral AIP fork competes with Palantir. Open ontology on community hardware. Palantir becomes irrelevant.

### SCENARIO 4: Tokenization Becomes Taxation
**Win:** ITC designed as "labor accounting" not currency. Exempt from income tax if no exchange value.

### SCENARIO 5: AI Replaces CDS
**Win:** CDS designed with mandatory human consent layers. Human veto at every node. Deliberate slowness built in.

## Capture Prevention: Structural Design Principles

1. **No single access point** — No IP, team, server, or funding that can be captured
2. **Embedded in practice** — OAD = embodied in community practices, not documents
3. **Hostile acquisition immunity** — Corporate acquisition leaves practice behind
4. **Semantic firewall** — OAD encoded in community language, not formal ontology
5. **Voluntary dissolution clause** — If >20% global coordination achieved, auto-dissolve

## Unexpected Scenario Map (5-year horizon)

| Scenario | Probability | Implication |
|----------|-------------|-------------|
| Hybrid emergence (slow growth, 5-15%) | MOST LIKELY | Maintain offline capability, build bridge to BLK rails |
| Regulatory compression | LIKELY | Invest in compliance design, build legal clarity into ITC |
| Palantir ontology wars | LIKELY | Don't integrate with Palantir, build mutual exclusivity |
| War causes mesh adoption | SURPRISING | Already building offline stack = early mover |
| Climate collapse speeds up | SURPRISING | Climate adaptation is the use case, build FRS for collapse |

## Revised Program Estimate (Offline-First)

| Strategy | Original | Revised | Why |
|----------|----------|---------|-----|
| Holochain CDS | $45-75K | $20-35K | No cloud infra, local only |
| ITC Polymesh | $80-120K | $40-60K | Local Substrate, peer-to-peer |
| EU DPP | $35-60K | $20-35K | Works with physical traceability |
| OAD Build | $25-40K | $15-25K | Git + local LLM, no server |
| Integral Application | $5K | $5K | Unchanged |
| **TOTAL** | **$185-300K** | **$100-160K** | **46% reduction** |

**Hardware per node:** ~$900 (one-time, amortizes 5+ years)
**3-node setup:** $2,700 total, ~$540/year annual cost

## Immediate Actions: Next 30 Days

1. **Order hardware** (~$780): 3x Raspberry Pi 5 kits + LoRa modules + GPS modules
2. **Install offline stack** (2 days): Holochain + Ollama + SurrealDB + LibreMesh
3. **Design CDS for offline** (1 week): Weighted consensus algorithm adapted for delayed-sync
4. **Write ITC offline spec** (3 days): Temporal decay, no exchange value, non-monetary framing
5. **Build mesh network test** (1 week): Connect 3 nodes via LoRa, test offline coordination

## 60-Day Target State

After 60 days:
- 3 community nodes running offline
- Full Holochain DLT active
- Llama 3 coordinating CDS decisions
- SurrealDB storing knowledge graph
- LoRa mesh connecting 30km radius
- ITC accounting with temporal decay

**This = functional proto-node, no internet, no cloud, no external dependency.**

## Sources

- holochain.org — offline DLT
- ollama.ai — local LLM
- surrealdb.com — local knowledge graph
- polymesh.network — permissioned tokens
- libremesh.org — mesh networking
- raspberrypi.com — edge hardware
- gnss-sdr.org — free GNSS timing
- ipfs.io — content addressing