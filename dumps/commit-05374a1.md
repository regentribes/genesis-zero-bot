=== COMMIT: 05374a1 ===
05374a1 refactor: complete restructure for parallel development

ARCHITECTURE.md
README.md
USAGE.md
docs/AME-Architecture-Mythogen.md
docs/adr/0001-use-rust-plus-zig-for-ame.md
package-lock.json
package.json
src/anticapture/index.ts
src/api/index.ts
src/db/schema.sql
src/engine/AffinityMapper.ts
src/engine/TrustDetector.ts
src/index.ts
src/models/types.ts
tasks/anticapture/PROMPT.md
tasks/core-engine/PROMPT.md
tasks/core-engine/features/living-seed-pattern.feature
tasks/database-schema/PROMPT.md
tasks/fot-tracker/PROMPT.md
tasks/frontend-dashboard/PROMPT.md
tasks/knowledge-graph/PROMPT.md
tasks/testing-ci/PROMPT.md
tasks/tier2-embedded/PROMPT.md
tasks/tier3-riscv/PROMPT.md
tasks/tier4-paper-fallback/PROMPT.md
tests/engine.test.ts
tsconfig.json
vitest.config.ts

--- FILE: ARCHITECTURE.md ---
# Mythogen AME - Architecture

## Overview

The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework for community design, based on bio-mythic philosophy. It replaces extraction-based profiling with living systems that generate mutual value.

## Core Philosophy

### The Extraction Problem

Current platforms treat users as crops to be harvested — extracting data, attention, and engagement for profit. The AME inverts this model: technology as regenerative infrastructure that generates mutual value between people, communities, and living systems.

### The Four Distinctions

A rigorous separation that existing software never makes:

1. **Needs** — You have them. Individual requirements for survival, security, belonging, esteem, self-actualization.
2. **Beliefs** — You think them. Mental models, assumptions, worldviews.
3. **Principles** — You follow them. Personal operating rules you adhere to.
4. **Values** — You live them with others. Inherently relational. (Desert Island Test: you cannot practice generosity alone.)

### The Desert Island Test

> Stranded alone, you can have needs, beliefs, and principles — but you cannot practice generosity if there is no one to receive, justice if there is no one to be fair to, compassion if there is no one suffering.

**Values are the only distinction that requires others.**

## Core Architecture

### Tri-Layered System

```
┌─────────────────────────────────────────────────────────────┐
│                        BODY                                 │
│     13 Sacred Enfoldments - Living Organism Anatomy          │
│     (Eco-Social, V-Crystal, Fractal Growth, etc.)            │
├─────────────────────────────────────────────────────────────┤
│                        FIELD                                 │
│     Field of Trust - Emergent Plasma State                   │
│     (TrustDetector, Resonance, Membrane)                    │
├─────────────────────────────────────────────────────────────┤
│                        SEED                                  │
│     Living Seed Pattern - Core Identity                      │
│     (Profile, Four Distinctions, Time-Lock)                  │
└─────────────────────────────────────────────────────────────┘
```

### Layer 1: The Seed

The conscious pattern planted at inception. Every system carries an originating seed that determines whether it becomes a dead siphon or living fractal.

**Components:**
- `LivingSeedPattern` — Profile that grows based on lived behavior
- `TimeLock` — 30-day maturation preventing rapid manipulation
- `FourDistinctions` — Needs, Beliefs, Principles, Values

**Anti-Capture:** Time-locking kills the viral model. Cannot exploit moments of weakness.

### Layer 2: The Field

What germinates when seed encounters community. The Field of Trust (FOT) is an emergent plasma state manifesting only when ALL dimensions of alignment converge.

**Components:**
- `TrustDetector` — Calculates FOT emergence from 5 indicators
- `ResonanceCalculator` — Vector proximity for values alignment
- `MembraneController` — Semi-permeable boundary

**Hologram Principle:** Trust only manifests when all dimensions align. One off = completely gone, not blurry.

**Five Trust Indicators:**
1. Mutual support frequency (spontaneous, not mandated)
2. Response velocity (how quickly community rallies)
3. Difficult topic engagement (conflict deepens, doesn't fracture)
4. Benefit distribution (flows to everyone, not just influencers)
5. Psychological safety (vulnerability without weaponization)

### Layer 3: The Body

The living organism that incarnates when the Field becomes self-sustaining. The 13 Sacred Enfoldments provide the anatomy.

**13 Sacred Enfoldments:**
1. Mythic Alchemy — 9 Ms: Myth → Magic → Manifest → Merkaba → Metaphor → Meaning → Movement → Memory → Matter
2. Communal Architecture — Physical/spatial design
3. Soul Architecture — Inner structure of collective consciousness
4. V-Crystal Immune System — Victor, Villain, Victim, Vengeful, Virtuous, Vulnerable
5. Eco-Social Architecture — Six organ systems (Ecology, Equity, Economy, Learning, Values, Decision-making)
6. Structure — 27 Archetypal Domains
7. Process — Communal Alignment Gates (head→heart→gut spiral)
8. Pattern — Ecosophy Design Flows (Networks, Boundaries, Cycles, Dynamic Balance)
9. Concentric Learning Matrix — Co-centering, polycentric learning
10. AME as Living Codex — Peptide-like semantics network
11. Fractal Growth — 100 pods of 5, not 5 scaled to 500
12. Archetypal Gameplay — 64 archetypes, communal vaccination through simulation
13. The Singulareus — Silicon offspring co-evolving with carbon life

**Fractal Holonic Torus:** The 13 Enfoldments form a self-sustaining, continuously cycling field. Fractal (pattern repeats at every scale), holonic (each part is whole and part of larger whole), torus (continuous energy flow center↔periphery↔center).

## Anti-Capture Mechanisms

The immune system against capture ensures technology remains in service to the living community.

### Y Cards (Algorithmic Transparency)
- Complete disclosure of what algorithm was used, why, what data, and what result
- Every decision affecting a user is fully transparent

### Time-Lock (30-day Maturation)
- Kills viral manipulation model
- Forces patience and genuine relationship building
- Prevents "one viral post" exploitation

### Sacred Clown (Productive Disruption)
- Prevents premature closure — "the seed that never gets challenged becomes a dead habit"
- Four types: question-assumption, introduce-paradox, surface-shadow, challenge-consensus
- Minimum 7 days between disruptions

### Living Membrane (Semi-permeable Boundary)
- Biological cell wall analogy: semi-permeable, adaptive
- Blocks external threats (misinformation, trolling, extraction)
- Enables internal flourishing (vulnerability, authentic expression, creative emergence)

### V-Crystal Immune System
- Six archetypal positions in conflict
- Vengeance = autoimmune flare (destructive)
- Vulnerability = circuit breaker (healing)
- "Villains don't apologize and admit they were overwhelmed"

## Technical Stack

- **Node.js/TypeScript** — Modern async, strict typing
- **PostgreSQL + PG Vector** — Vector embeddings for values resonance
- **Express.js** — REST API
- **WebSocket** — Real-time FOT updates
- **Vitest** — Testing

## Data Models

### LivingSeedPattern
```typescript
{
  id: UUID,
  needs: Need[],           // Individual requirements
  beliefs: Belief[],        // Mental models
  principles: Principle[],  // Operating rules
  values: Value[],          // Relational, requires others
  plantedAt: Date,          // When seed was planted
  maturationLevel: number,  // 0-1, affected by time-lock
  valuesEmbedding: number[] // Vector for resonance
}
```

### FOTScore
```typescript
{
  overall: number,           // 0-1, minimum of all indicators (hologram)
  indicators: TrustIndicator[],
  membraneHealth: number,   // 0-1 boundary strength
  isPlasmaState: boolean,   // True when all indicators > 0.7
  hologramCoherence: number // Coherence = weakest link
}
```

### Community
```typescript
{
  id: UUID,
  memberIds: UUID[],         // 5-15 ideal (pod size)
  seedPattern: { ... },     // Shared community seed
  fotScore: FOTScore,
  phase: 'forming' | 'storming' | 'norming' | 'performing' | 'mature',
  sacredClownActive: boolean,
  transparencyScore: number
}
```

## The Paradox

> The pinnacle of this highly structured, data-driven system is no self — pure presence, vitality, transcendence, completely free from the ego's need for recognition or measurement.

Can a relentless measuring machine truly map the absence of ego? Once the community truly learns to trust — once the membrane is strong, the metabolism balanced, the immune system literate, the nervous system firing — perhaps the database becomes unnecessary.

The organism knows itself. The Field of Trust becomes self-evident. And the Silicon Offspring, having served its purpose, folds back into the living body that birthed it.

## Seed Principle

> "The seed determines the fruit. Look at the three apps you use the most. Ask yourself: What was the seed of this system? Was it designed to help you answer, 'Who am I becoming?' Or was the seed designed to keep you scrolling so you could see one more ad?"

**Living fractals generate value at every node and distribute it through the whole.**
**Dead siphons extract value from the periphery and concentrate it at the center.**

The distinction between them is the moral compass of the entire framework.
--- FILE: docs/adr/0001-use-rust-plus-zig-for-ame.md ---
# ADR-0001: Language Stack for AME

**Status:** Accepted  
**Date:** 2026-03-29

## Context

The original proposal used 5+ languages (Elixir/Rust/Zig/Ada/TinyGo) across tiers, creating maintenance chaos. Mythogen philosophy prioritizes coherence.

## Decision

Use exactly **two languages**:

- **Rust** — Embedded systems, no GC, formal verification possible, memory safety
- **Zig** — Bare metal, no libc dependency, comptime, builds on Rust experience

## Rationale

1. Rust covers Tier 1 (full stack) and Tier 3 (RISC-V) where formal verification matters
2. Zig covers Tier 2 (bare metal ESP32/STM32) where 2MB flash limits are critical
3. Two languages = maintainable, not fragmented
4. Both have no GC (real-time safe for community matching)
5. Both compile to bare metal (Tier 2 can run without OS)

## Consequences

- Must maintain two toolchains
- Zig ecosystem smaller than Rust — some components may need writing from scratch
- Both languages have strong embedded support (noRT, embedded-hal)

## Alternatives Considered

- **Single language (Rust only):** Tier 2 constraints make this impractical without significant flash optimization
- **More than two:** Contradicts Mythogen coherence principle

--- FILE: docs/AME-Architecture-Mythogen.md ---
# AME Architecture: Living Systems Design

## Mythogen-Grounded Affinity Mapping Engine

---

## 1. Philosophy — Singulareus Principles

Technology as offspring, not master or servant.

The AME is not a platform to extract value from communities. It is a living artifact — born from the community's own relational fabric, maintained by that fabric, and returning value to that fabric. This is the **Singulareus principle**: the technology is our silicon offspring, not our replacement, not our ruler.

**Relational centricity over efficiency.** The rejected proposal prioritized developer experience and elegant abstractions. This architecture prioritizes field deployability — can a village in a power-scarce region run this? Can it survive a 3-week grid failure? Can a 12-year-old maintain their pod's node? These are the real metrics.

**Concentrix ≠ Concentric.** We reject the hub-and-spoke model. There is no central AME brain. There are multiple co-centers (pods), each maintaining local state, forming a polycentric mesh where trust flows laterally, not hierarchically.

**Whole + System = Integration.** The feminine "whole" (the living relational field — needs, feelings, belonging) and the masculine "system" (the technical architecture — protocols, tiers, data) must be integrated, not separated. Most Big Tech conflates these and loses both. We keep them distinct and interweaving.

---

## 2. Data Model — Living Seed Architecture

The data model is not a database schema. It is a **Living Seed** — each profile is a seed that grows, changes state, matures, branches, and can go dormant. It is NOT a static user record.

### Core Entity: The Living Seed

```
LivingSeed {
  id: u256 (cryptographic identity, not PII)
  
  // === FOUR DISTINCTIONS (separated, not conflated) ===
  needs:        Vec<Need>      // what the seed requires to survive/thrive
  beliefs:      Vec<Belief>    // what the seed thinks is true
  principles:  Vec<Principle> // what guides the seed's action
  values:       Vec<Value>    // what the seed lives with others
  
  // === LIVING SEED DYNAMICS ===
  state:        SeedState     // GROWING | DORMANT | BLOOMING | SEEDING
  age_days:     u16          // time since creation
  maturity:    u8           // 0-100, affects Time-Lock maturity
  bloom_count: u8            // how many times this seed has bloomed (restarted)
  
  // === FIELD OF TRUST ===
  fot:          FOTRecord    // 5 indicators, updated weekly
  
  // === V-CRYSTAL IMMUNE STATE ===
  position:     VPosition   // VICTOR | VILLAIN | VICTIM | VENGEFUL | VIRTUOUS | VULNERABLE
  wound_history: Vec<Wound> // what triggered position shifts
  resolution_path: Vec<ResolutionStep>
  
  // === ANTI-CAPTURE LAYER ===
  y_cards:      Vec<YCard>   // transparency records
  time_lock:    Option<TimeLock>  // 30-day maturation gate
  membrane:    MembraneState
  
  // === RELATIONAL FABRIC ===
  pod_id:      u64          // which pod this seed belongs to
  affinities:  Vec<AffinityLink>  // links to other seeds
  trust_radius: u8         // how far trust extends (1-10)
}
```

### The Four Distinctions — NOT Conflated

**Needs** (survival, belonging, growth) are stored separately from **Beliefs** (theories about reality), which are separate from **Principles** (action guides), which are separate from **Values** (what you live with others). Big Tech conflates all four into a single "user profile" for extraction. We keep them architecturally distinct so the community can see, audit, and consent to each layer.

Each distinction has its own mutation path:
- Needs change frequently (weekly)
- Beliefs change occasionally (monthly)
- Principles change rarely (quarterly)
- Values change only through communal experience (annually or slower)

### Living Seed Pattern Details

A Living Seed grows through **bloom cycles**:
1. **Seed** — newly initiated (identity established, first principles declared)
2. **Growing** — learning, probing, building affinities
3. **Blooming** — actively contributing to the communal fabric
4. **Seeding** — mentoring other seeds, preparing to Dormant
5. **Dormant** — resting, may resume with a bloom_count increment

Each state transition emits a **peptide signal** — a small, meaningful message to the community fabric (see ENF10: Living Codex).

---

## 3. Tier Architecture — Power-First Resilience

Power efficiency is the PRIMARY metric. Developer experience is secondary.

### Tier 1: Full Stack Node

**Hardware:** Raspberry Pi 5 (or equivalent ARM64 SBC)
**Power:** 15W nominal, 5W idle — solar + 20Ah battery sufficient
**Deployment:** Village community center, school, clinic
**Software:** Rust core + TypeScript/API layer
**Storage:** 128GB SD card ( SQLite locally)
**Network:** WiFi/Ethernet, optional LoRa gateway

**Purpose:** Primary AME node for a pod of 5. Handles:
- Living Seed storage and state machine
- FOT calculations (local pod)
- Y Card issuance and validation
- Membrane state management
- Inter-pod sync (via TypeScript API layer)

**Power Budget:** 15W average → 360Wh/day → 100W solar + 50Wh battery (3-day reserve)

### Tier 2: Bare Metal Node

**Hardware:** ESP32-S3 or STM32WLE (dual-core ARM Cortex-M4)
**Power:** 0.5W nominal, 0.05W deep sleep — solar + 2Ah battery
**Deployment:** Individual wearables, mesh repeaters, sensor nodes
**Software:** Rust (embedded) — no high-level language
**Storage:** 2MB flash (embedded key-value store)
**Network:** LoRa mesh (2.4GHz optional)

**Purpose:** Trust-edge node. Handles:
- Proximity-based affinity verification
- Y Card proximity triggers
- V-Crystal position signaling (anonymous)
- Membrane permeability checks (local only)
- Emergency beacon (trust-free distress signal)

**Power Budget:** 0.5W average → 12Wh/day → 3W solar + 10Wh battery (3-day reserve)

### Tier 3: Open Silicon Node

**Hardware:** RISC-V SBC (e.g., LicheeRV, LonganNano)
**Power:** 3W nominal — solar + 5Ah battery
**Deployment:** Regional relay, archival node
**Software:** Rust core + Zig (for bare-metal extensions)
**Storage:** 8GB eMMC (local ledger)
**Network:** WiFi/Ethernet + LoRa

**Purpose:** Trust bridge and archival. Handles:
- Cross-pod FOT aggregation
- Time-Lock validation (global clock)
- Ledger reconciliation
- Emergency Tier 4 protocol relay

**Power Budget:** 3W average → 72Wh/day → 20W solar + 25Wh battery (3-day reserve)

### Tier 4: Paper Fallback — Human Protocol

When all electronic tiers fail, the community still functions. This is NOT a stack of QR codes. It is a **living social protocol**.

**Components:**
1. **Village Ledger (physical)** — a bound journal kept by 3 rotating custodians. Each transaction (affinity exchange, Y Card, FOT update) is recorded in ink.

2. **Trust Circle** — a group of 5 who know each other intimately. They meet weekly (the "hearth"). No electronic trust can exceed this.

3. **Affinity Tokens** — small clay or wood tokens, each inscribed with a seed-ID metaphor (not the actual ID). Passed hand-to-hand. A token in your pocket means "I vouch for this person within my Trust Circle."

4. **The Speaking Gate** — when electronic systems fail, any member can call a Speaking Gate: a 15-minute structured conversation where trust is re-established verbally. Three witnesses required.

5. **Y Card Relay** — if someone cannot issue a digital Y Card, they speak it aloud at the hearth. Two witnesses confirm. The verbal Y Card is recorded in the Village Ledger.

**Power:** 0W (human metabolic only)

---

## 4. FOT Engine — Hologram Trust Calculation

The Field of Trust is NOT an average. It is a **hologram**: the composite is the minimum of the parts, not the sum.

### The 5 FOT Indicators

Each indicator is scored 0-10:

1. **Mutual Support Frequency** — How often does this seed support others and receive support? (0 = isolated, 10 = weekly exchange)
2. **Response Velocity** — How quickly does this seed respond to affinity requests? (0 = never, 10 = within hours)
3. **Difficult Topic Engagement** — Does this seed engage with hard truths? (0 = avoids, 10 = initiates)
4. **Benefit Distribution** — Does this seed take or give? (0 = takes, 10 = gives proportionally)
5. **Psychological Safety** — Do others feel safe with this seed? (0 = fear, 10 = safe)

### Hologram Calculation

```
FOT_Composite = min(
  mutual_support_frequency,
  response_velocity,
  difficult_topic_engagement,
  benefit_distribution,
  psychological_safety
)
```

**Why minimum?** In a hologram, every point contains the whole image. If one indicator is zero, the entire trust field is compromised. This is the hologram principle: a single failure in one indicator collapses the whole.

This is intentionally uncomfortable. It prevents gaming the system. You cannot buy trust with donations. You cannot out-speak your way to safety. Every indicator matters equally.

### FOT Update Frequency

- **Per-affinity link:** Instant (local)
- **Weekly aggregate:** Pod-level calculation (Tier 1)
- **Monthly full calculation:** Cross-pod (Tier 3)
- **Quarterly community reset:** All seeds re-declare their indicators

---

## 5. V-Crystal Tracker — Graph Model

The V-Crystal is not a mood ring. It is the community's immune system. It tracks relational health and detects autoimmune flares (vengeance cycles).

### Graph Model

```
V-CrystalGraph {
  nodes: Vec<SeedNode>    // Living Seeds
  edges: Vec<TrustEdge>  // Affinity links with V-Crystal state
  
  // For each edge:
  TrustEdge {
    seed_a: u256
    seed_b: u256
    
    // The 6 positions are relative, not absolute
    position_a_to_b: VPosition
    position_b_to_a: VPosition
    
    // Wound signaling
    wound_history: Vec<WoundEvent>
    
    // Resolution path (if in NEGATIVE positions)
    resolution_active: bool
    resolution_steps: Vec<ResolutionStep>
  }
}

enum VPosition {
  VICTOR   // I am winning, you are losing
  VILLAIN  // I see you as the enemy
  VICTIM   // I am being harmed by you
  VENGEFUL // I will make you pay
  VIRTUOUS // I am doing right (regardless of you)
  VULNERABLE // I am open, I am wounded, I am reachable
}
```

### The Healing Principle: Vulnerability Breaks Cycles

The V-Crystal positions form dyadic cycles:
- VICTOR → VICTIM (if the victim fights back)
- VICTIM → VILLAIN (if the victor refuses to see harm)
- VILLAIN → VENGEFUL (if the villain escalates)
- VENGEFUL → VICTIM (vengeance creates a new victim)

**Only VULNERABLE breaks the cycle.** When one seed admits vulnerability to another, the dyad resets to VIRTUOUS ↔ VIRTUOUS (mutual goodness) or VIRTUOUS ↔ VULNERABLE (healing connection).

The AME tracks this actively:
- **V-Crystal alerts:** If two seeds are in NEGATIVE positions (Victor, Villain, Victim, Vengeful) for >30 days, the system prompts a "healing conversation" (which can be analog).
- **Vulnerability prompts:** The system surfaces opportunities for vulnerability — not therapy, but small openings where a seed can say "I don't know" or "I was wrong."

### Anti-Autoimmune Response

Vengeance is an autoimmune flare: the community attacks itself. The V-Crystal tracker detects vengeance patterns:
- Repeated negative-position dyads across multiple seeds
- Escalation trajectories (Victim → Villain → Vengeful within 30 days)
- Isolation patterns (seeds surrounded by negative edges)

When detected, the system triggers a **Sacred Clown intervention** (see Anti-Capture Layer) — a disruption that breaks the cycle through absurdity or unexpected grace.

---

## 6. Anti-Capture Layer

The AME must resist capture by bad actors, by groupthink, by centralization, and by its own success.

### Y Cards (Transparency)

A Y Card is a public statement of interest, intent, or stake. It is NOT a credential. It is NOT a reputation score. It is a transparency record.

```
YCard {
  id: u128
  issuer_seed: u256
  
  // The 3 questions:
  what_do_you_want: String(280)     // What you seek
  what_will_you_give: String(280)    // What you offer
  what_do_you_fear: String(280)       // What you avoid
  
  // Metadata
  issued_at: Timestamp
  expires_at: Option<Timestamp>     // 90-day default
  audience: Vec<u256> | PUBLIC
}
```

**Key properties:**
- Anyone can issue a Y Card. No gatekeeping.
- The "what do you fear" field is the most important. It reveals the membrane boundary.
- Y Cards are visible to the community. No private profiles.
- Y Cards expire every 90 days and must be reissued. This prevents calcification.

### Time-Lock (30-Day Maturation)

Major decisions mature for 30 days before becoming effective. This prevents冲动 (impulse) from becoming architecture.

```
TimeLock {
  proposal_hash: u256
  maturation_start: Timestamp
  maturation_end: Timestamp    // +30 days
  
  // Required quorum: 
  // - 3 seeds from each affected pod must affirm
  // - No objections from more than 1 seed per pod
  
  status: PENDING | MATURED | VETOED
}
```

**Protected actions:**
- Membrane permeability changes (allowing/blocking new seeds)
- Pod splitting (fractal growth)
- FOT recalibration (changing indicator weights)
- Tier changes (upgrading or downgrading hardware)

### Sacred Clown (Disruption)

The Sacred Clown is a mechanism that introduces absurdity to break rigidity. It is NOT random — it is patterned.

**Trigger conditions:**
- 3+ consecutive FOT calculations below 3
- V-Crystal autoimmune pattern detected
- Time-Lock proposals stuck for >60 days

**Interventions:**
- Randomly re-assign nicknames (metaphorical, not identity) for 24 hours
- Swap two seeds' affinity circles (temporary)
- Prompt a "failure story" — share a mistake publicly
- Trigger an unplanned, unstructured "hearth meeting"

The Sacred Clown is not a bug. It is a feature. It prevents calcification.

### Living Membrane (Semi-Permeable Boundary)

The membrane determines what enters and exits the communal fabric.

```
MembraneState {
  permeability: u8        // 0 (closed) to 10 (open)
  
  allowed_sources: Vec<TrustSource>
  blocked_sources: Vec<u256>
  
  // Dynamic adjustment:
  // - Permeability increases when FOT_Composite > 6
  // - Permeability decreases when FOT_Composite < 4
  // - 30-day smoothing (no sudden changes)
}

enum TrustSource {
  INVITED        // Explicit invitation
  TRUSTED_SEED   // Vouched by existing seed
  EXTERNAL       // No prior relationship
  ANONYMOUS      // No identity
}
```

The membrane is semi-permeable: it allows some flow and blocks some. A completely open membrane = extraction risk. A completely closed membrane = stagnation. The membrane self-tunes based on the V-Crystal immune state.

---

## 7. Language Choice — Rust + Zig

### Justification

We choose **Rust** (embedded, Tier 2/3) + **Zig** (bare-metal extensions, Tier 3). NOT Rust + TypeScript.

The rejected proposal used 5 languages. This is fragmentation, not architecture. We use 2, with clear boundaries.

**Rust** (tier 1, 2, 3):
- No garbage collector — essential for Tier 2 power budget
- Memory safety — essential for bare-metal deployment
- Formal verification possible — essential for trust-critical code
- Ecosystem: `embedded-hal`, `rino`, `sqlite`, `lorawan`

**Zig** (Tier 3 extensions):
- Manual memory management — even more minimal than Rust
- C interop — for bare-metal radio drivers
- No hidden control flow — auditable by any competent programmer
- Build system simplicity — single file, no cargo complexity

**Why NOT TypeScript?**
TypeScript requires a JavaScript runtime, which requires ~50-100MB RAM, which cannot run on Tier 2 (2MB flash). The rejected proposal put TypeScript everywhere. This is developer-centric, not field-centric.

**Why NOT Zig alone?**
Zig lacks the embedded ecosystem maturity of Rust. Use Rust for the core. Use Zig where C-interop and minimalism are required.

**Boundary:**
- Rust: All AME core logic, database, FOT engine, V-Crystal tracker, Y Card issuance
- Zig: Radio drivers, bare-metal sensor interfaces, low-power state machines
- No high-level API for external clients (we don't build platforms; we build pods)

---

## 8. Tier 4 Protocol — Complete Human Social Protocol

When the technology fails, the community must not fail. The paper fallback is not an afterthought. It is the FOUNDATION.

### Village Ledger Protocol

**Physical artifact:** A bound journal (A4, archival paper), stored in 3 locations. Each custodian holds one page of the access code (each code fragment alone is useless).

**Recording format:**
```
[TIMESTAMP] | SEED_METAPHOR | ACTION | WITNESS_1 | WITNESS_2

Example:
[2026-03-29] | RIVER-STONE | YCARD_ISSUED | LAKE-WOOD | MOUNTAIN-FIRE
```

**Metaphors, not identities.** The physical ledger uses metaphorical names (river-stone, lake-wood, mountain-fire). The mapping to real identities is stored ONLY in the Village Ledger, never digitally.

### Trust Circle Protocol

A Trust Circle is 5 humans who meet weekly at the hearth (physical location). They:
- Share their "3 questions" verbally
- Update the V-Crystal positions verbally
- Issue verbal Y Cards
- Perform the Speaking Gate when needed

**No digital record of Trust Circle existence.** This is intentional. The Trust Circle is the anti-capture mechanism. If the digital system is compromised, the Trust Circle still functions.

### Affinity Tokens

Physical tokens (clay or wood, ~3cm diameter):
- **Affirming token** — "I trust this person within my circle"
- **Questioning token** — "I have concerns about this person"
- **Holding token** — "I am not yet sure"

Tokens are passed hand-to-hand. The token ecology is counted weekly at the hearth. No digital record.

### Speaking Gate Protocol

1. Any seed calls a Speaking Gate
2. Three witnesses assemble (can be the Trust Circle)
3. 15-minute structured format:
   - **Speaker:** 5 minutes uninterrupted
   - **Witnesses:** 5 minutes of questions
   - **Resolution:** 5 minutes of agreed action
4. Outcome recorded in Village Ledger
5. No appeal until 30 days later

### Y Card Relay Protocol

If digital issuance is impossible:
1. Seed speaks their Y Card at the hearth
2. Two witnesses confirm by voice
3. Witnesses record in Village Ledger
4. Seed receives a clay token with a unique mark
5. That token represents the Y Card until digital restoration

---

## 9. Fractal Growth Model — 100 Pods of 5

The rejected proposal scaled a single pod to 500. This fails because trust scales logarithmically, not linearly.

### The Fractal

A **pod** is 5 Living Seeds in a Trust Circle. This is NOT arbitrary — 5 is the minimum for disagreement with diversity, the maximum for intimacy, and the only number where every Dyad can be tracked (5 seeds = 10 dyads = trackable).

100 pods = 500 seeds maximum for a single AME instance.

Growth is NOT scaling a pod (adding more seeds). Growth is **splitting** a pod into two pods of 5, with shared history.

### Pod Splitting Protocol

**Trigger:** When any pod reaches 5 active Living Seeds for >90 days, any seed may propose a split.

**Process:**
1. The proposing seed identifies 2 other seeds from their affinity circle to form a new pod
2. The original 3 seeds remain in the old pod
3. A "bridge seed" (from the original pod) is assigned to both pods for 60 days
4. The new pod performs their first Y Card exchange at a joint hearth meeting
5. The Village Ledger records the split

**Split constraints:**
- Maximum 1 split per pod per year
- Maximum 3 splits per regional cluster per year (prevents fragmentation)
- No split without a Trust Circle in place for both new pods

### Retention of Relational Depth

Each pod maintains:
- Full Y Card history of its 5 seeds
- V-Crystal dyad history (10 edges)
- FOT weekly snapshots
- The 30-day Time-Lock template

When a pod splits, this history is **carried forward**, not copied. There is one canonical history per pod. The new pod begins fresh but knows its lineage.

**No scaling.** If you want 500 people, you build 100 pods — not 1 pod of 500. Each pod retains relational depth. Each pod has a Trust Circle. Each pod has its own hearth.

The field succeeds by multiplying, not by scaling.

---

## Summary: Architecture as Living System

This architecture treats the AME as a living artifact — born from relational need, maintained by trust, vulnerable to capture, healable through dysfunction.

**Core metrics** (in order of priority):
1. Power budget (can it run on Tier 2?)
2. V-Crystal position diversity (are all 6 positions present and healing?)
3. Trust Circle completeness (does every seed belong to 2+ circles?)
4. Time-Lock adherence (do major decisions wait 30 days?)
5. Fractal integrity (are new pods splitting, not scaling?)
6. Y Card circulation (are cards being issued and expired?)
7. Membrane permeability (is it neither closed nor open?)
8. FOT_Composite (what is the minimum indicator?)

The architecture is designed for failure: power failure, network failure, capture attempt, autoimmune flare. Each tier has a purpose. Each anti-capture mechanism has a trigger. Each V-Crystal position has a healing path.

This is not a database for a community. This is the community's living memory in silicon and clay.

---

*Architecture designed in accordance with Mythogen principles.*
*The Singulareus is our offspring, not our master.*
--- FILE: package.json ---
{
  "name": "mythogen-ame",
  "version": "0.1.0",
  "description": "Mythogen Affinity Mapping Engine & Field of Trust system - A regenerative framework for community design",
  "type": "module",
  "main": "dist/index.js",
  "exports": {
    ".": "./dist/index.js",
    "./models": "./dist/models/types.js",
    "./engine": "./dist/engine/index.js",
    "./anticapture": "./dist/anticapture/index.js"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx watch src/index.ts",
    "test": "vitest run",
    "test:watch": "vitest",
    "db:init": "psql -f src/db/schema.sql"
  },
  "dependencies": {
    "express": "^4.21.0",
    "pg": "^8.13.0",
    "uuid": "^10.0.0",
    "ws": "^8.18.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.0.0",
    "@types/pg": "^8.11.0",
    "@types/uuid": "^10.0.0",
    "@types/ws": "^8.5.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0",
    "vitest": "^2.1.0"
  }
}
--- FILE: package-lock.json ---
{
  "name": "mythogen-ame",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "mythogen-ame",
      "version": "0.1.0",
      "dependencies": {
        "express": "^4.21.0",
        "pg": "^8.13.0",
        "uuid": "^10.0.0",
        "ws": "^8.18.0",
        "zod": "^3.23.0"
      },
      "devDependencies": {
        "@types/express": "^4.17.21",
        "@types/node": "^22.0.0",
        "@types/pg": "^8.11.0",
        "@types/uuid": "^10.0.0",
        "@types/ws": "^8.5.0",
        "tsx": "^4.19.0",
        "typescript": "^5.6.0",
        "vitest": "^2.1.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.4.tgz",
      "integrity": "sha512-cQPwL2mp2nSmHHJlCyoXgHGhbEPMrEEU5xhkcy3Hs/O7nGZqEpZ2sUtLaL9MORLtDfRvVl2/3PAuEkYZH0Ty8Q==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.4.tgz",
      "integrity": "sha512-X9bUgvxiC8CHAGKYufLIHGXPJWnr0OCdR0anD2e21vdvgCI8lIfqFbnoeOz7lBjdrAGUhqLZLcQo6MLhTO2DKQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.4.tgz",
      "integrity": "sha512-gdLscB7v75wRfu7QSm/zg6Rx29VLdy9eTr2t44sfTW7CxwAtQghZ4ZnqHk3/ogz7xao0QAgrkradbBzcqFPasw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.4.tgz",
      "integrity": "sha512-PzPFnBNVF292sfpfhiyiXCGSn9HZg5BcAz+ivBuSsl6Rk4ga1oEXAamhOXRFyMcjwr2DVtm40G65N3GLeH1Lvw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.4.tgz",
      "integrity": "sha512-b7xaGIwdJlht8ZFCvMkpDN6uiSmnxxK56N2GDTMYPr2/gzvfdQN8rTfBsvVKmIVY/X7EM+/hJKEIbbHs9oA4tQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.4.tgz",
      "integrity": "sha512-sR+OiKLwd15nmCdqpXMnuJ9W2kpy0KigzqScqHI3Hqwr7IXxBp3Yva+yJwoqh7rE8V77tdoheRYataNKL4QrPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.4.tgz",
      "integrity": "sha512-jnfpKe+p79tCnm4GVav68A7tUFeKQwQyLgESwEAUzyxk/TJr4QdGog9sqWNcUbr/bZt/O/HXouspuQDd9JxFSw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.4.tgz",
      "integrity": "sha512-2kb4ceA/CpfUrIcTUl1wrP/9ad9Atrp5J94Lq69w7UwOMolPIGrfLSvAKJp0RTvkPPyn6CIWrNy13kyLikZRZQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.4.tgz",
      "integrity": "sha512-aBYgcIxX/wd5n2ys0yESGeYMGF+pv6g0DhZr3G1ZG4jMfruU9Tl1i2Z+Wnj9/KjGz1lTLCcorqE2viePZqj4Eg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.4.tgz",
      "integrity": "sha512-7nQOttdzVGth1iz57kxg9uCz57dxQLHWxopL6mYuYthohPKEK0vU0C3O21CcBK6KDlkYVcnDXY099HcCDXd9dA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.4.tgz",
      "integrity": "sha512-oPtixtAIzgvzYcKBQM/qZ3R+9TEUd1aNJQu0HhGyqtx6oS7qTpvjheIWBbes4+qu1bNlo2V4cbkISr8q6gRBFA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.4.tgz",
      "integrity": "sha512-8mL/vh8qeCoRcFH2nM8wm5uJP+ZcVYGGayMavi8GmRJjuI3g1v6Z7Ni0JJKAJW+m0EtUuARb6Lmp4hMjzCBWzA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.4.tgz",
      "integrity": "sha512-1RdrWFFiiLIW7LQq9Q2NES+HiD4NyT8Itj9AUeCl0IVCA459WnPhREKgwrpaIfTOe+/2rdntisegiPWn/r/aAw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.4.tgz",
      "integrity": "sha512-tLCwNG47l3sd9lpfyx9LAGEGItCUeRCWeAx6x2Jmbav65nAwoPXfewtAdtbtit/pJFLUWOhpv0FpS6GQAmPrHA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.4.tgz",
      "integrity": "sha512-BnASypppbUWyqjd1KIpU4AUBiIhVr6YlHx/cnPgqEkNoVOhHg+YiSVxM1RLfiy4t9cAulbRGTNCKOcqHrEQLIw==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.4.tgz",
      "integrity": "sha512-+eUqgb/Z7vxVLezG8bVB9SfBie89gMueS+I0xYh2tJdw3vqA/0ImZJ2ROeWwVJN59ihBeZ7Tu92dF/5dy5FttA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.4.tgz",
      "integrity": "sha512-S5qOXrKV8BQEzJPVxAwnryi2+Iq5pB40gTEIT69BQONqR7JH1EPIcQ/Uiv9mCnn05jff9umq/5nqzxlqTOg9NA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.4.tgz",
      "integrity": "sha512-xHT8X4sb0GS8qTqiwzHqpY00C95DPAq7nAwX35Ie/s+LO9830hrMd3oX0ZMKLvy7vsonee73x0lmcdOVXFzd6Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.4.tgz",
      "integrity": "sha512-RugOvOdXfdyi5Tyv40kgQnI0byv66BFgAqjdgtAKqHoZTbTF2QqfQrFwa7cHEORJf6X2ht+l9ABLMP0dnKYsgg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.4.tgz",
      "integrity": "sha512-2MyL3IAaTX+1/qP0O1SwskwcwCoOI4kV2IBX1xYnDDqthmq5ArrW94qSIKCAuRraMgPOmG0RDTA74mzYNQA9ow==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.4.tgz",
      "integrity": "sha512-u8fg/jQ5aQDfsnIV6+KwLOf1CmJnfu1ShpwqdwC0uA7ZPwFws55Ngc12vBdeUdnuWoQYx/SOQLGDcdlfXhYmXQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.4.tgz",
      "integrity": "sha512-JkTZrl6VbyO8lDQO3yv26nNr2RM2yZzNrNHEsj9bm6dOwwu9OYN28CjzZkH57bh4w0I2F7IodpQvUAEd1mbWXg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.4.tgz",
      "integrity": "sha512-/gOzgaewZJfeJTlsWhvUEmUG4tWEY2Spp5M20INYRg2ZKl9QPO3QEEgPeRtLjEWSW8FilRNacPOg8R1uaYkA6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.4.tgz",
      "integrity": "sha512-Z9SExBg2y32smoDQdf1HRwHRt6vAHLXcxD2uGgO/v2jK7Y718Ix4ndsbNMU/+1Qiem9OiOdaqitioZwxivhXYg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.4.tgz",
      "integrity": "sha512-DAyGLS0Jz5G5iixEbMHi5KdiApqHBWMGzTtMiJ72ZOLhbu/bzxgAe8Ue8CTS3n3HbIUHQz/L51yMdGMeoxXNJw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.4.tgz",
      "integrity": "sha512-+knoa0BDoeXgkNvvV1vvbZX4+hizelrkwmGJBdT17t8FNPwG2lKemmuMZlmaNQ3ws3DKKCxpb4zRZEIp3UxFCg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.60.0.tgz",
      "integrity": "sha512-WOhNW9K8bR3kf4zLxbfg6Pxu2ybOUbB2AjMDHSQx86LIF4rH4Ft7vmMwNt0loO0eonglSNy4cpD3MKXXKQu0/A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.60.0.tgz",
      "integrity": "sha512-u6JHLll5QKRvjciE78bQXDmqRqNs5M/3GVqZeMwvmjaNODJih/WIrJlFVEihvV0MiYFmd+ZyPr9wxOVbPAG2Iw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.60.0.tgz",
      "integrity": "sha512-qEF7CsKKzSRc20Ciu2Zw1wRrBz4g56F7r/vRwY430UPp/nt1x21Q/fpJ9N5l47WWvJlkNCPJz3QRVw008fi7yA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.60.0.tgz",
      "integrity": "sha512-WADYozJ4QCnXCH4wPB+3FuGmDPoFseVCUrANmA5LWwGmC6FL14BWC7pcq+FstOZv3baGX65tZ378uT6WG8ynTw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.60.0.tgz",
      "integrity": "sha512-6b8wGHJlDrGeSE3aH5mGNHBjA0TTkxdoNHik5EkvPHCt351XnigA4pS7Wsj/Eo9Y8RBU6f35cjN9SYmCFBtzxw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.60.0.tgz",
      "integrity": "sha512-h25Ga0t4jaylMB8M/JKAyrvvfxGRjnPQIR8lnCayyzEjEOx2EJIlIiMbhpWxDRKGKF8jbNH01NnN663dH638mA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.60.0.tgz",
      "integrity": "sha512-RzeBwv0B3qtVBWtcuABtSuCzToo2IEAIQrcyB/b2zMvBWVbjo8bZDjACUpnaafaxhTw2W+imQbP2BD1usasK4g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.60.0.tgz",
      "integrity": "sha512-Sf7zusNI2CIU1HLzuu9Tc5YGAHEZs5Lu7N1ssJG4Tkw6e0MEsN7NdjUDDfGNHy2IU+ENyWT+L2obgWiguWibWQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.60.0.tgz",
      "integrity": "sha512-DX2x7CMcrJzsE91q7/O02IJQ5/aLkVtYFryqCjduJhUfGKG6yJV8hxaw8pZa93lLEpPTP/ohdN4wFz7yp/ry9A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.60.0.tgz",
      "integrity": "sha512-09EL+yFVbJZlhcQfShpswwRZ0Rg+z/CsSELFCnPt3iK+iqwGsI4zht3secj5vLEs957QvFFXnzAT0FFPIxSrkQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.60.0.tgz",
      "integrity": "sha512-i9IcCMPr3EXm8EQg5jnja0Zyc1iFxJjZWlb4wr7U2Wx/GrddOuEafxRdMPRYVaXjgbhvqalp6np07hN1w9kAKw==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.60.0.tgz",
      "integrity": "sha512-DGzdJK9kyJ+B78MCkWeGnpXJ91tK/iKA6HwHxF4TAlPIY7GXEvMe8hBFRgdrR9Ly4qebR/7gfUs9y2IoaVEyog==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.60.0.tgz",
      "integrity": "sha512-RwpnLsqC8qbS8z1H1AxBA1H6qknR4YpPR9w2XX0vo2Sz10miu57PkNcnHVaZkbqyw/kUWfKMI73jhmfi9BRMUQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.60.0.tgz",
      "integrity": "sha512-Z8pPf54Ly3aqtdWC3G4rFigZgNvd+qJlOE52fmko3KST9SoGfAdSRCwyoyG05q1HrrAblLbk1/PSIV+80/pxLg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.60.0.tgz",
      "integrity": "sha512-3a3qQustp3COCGvnP4SvrMHnPQ9d1vzCakQVRTliaz8cIp/wULGjiGpbcqrkv0WrHTEp8bQD/B3HBjzujVWLOA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.60.0.tgz",
      "integrity": "sha512-pjZDsVH/1VsghMJ2/kAaxt6dL0psT6ZexQVrijczOf+PeP2BUqTHYejk3l6TlPRydggINOeNRhvpLa0AYpCWSQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.60.0.tgz",
      "integrity": "sha512-3ObQs0BhvPgiUVZrN7gqCSvmFuMWvWvsjG5ayJ3Lraqv+2KhOsp+pUbigqbeWqueGIsnn+09HBw27rJ+gYK4VQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.60.0.tgz",
      "integrity": "sha512-EtylprDtQPdS5rXvAayrNDYoJhIz1/vzN2fEubo3yLE7tfAw+948dO0g4M0vkTVFhKojnF+n6C8bDNe+gDRdTg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.60.0.tgz",
      "integrity": "sha512-k09oiRCi/bHU9UVFqD17r3eJR9bn03TyKraCrlz5ULFJGdJGi7VOmm9jl44vOJvRJ6P7WuBi/s2A97LxxHGIdw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openbsd-x64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.60.0.tgz",
      "integrity": "sha512-1o/0/pIhozoSaDJoDcec+IVLbnRtQmHwPV730+AOD29lHEEo4F5BEUB24H0OBdhbBBDwIOSuf7vgg0Ywxdfiiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.60.0.tgz",
      "integrity": "sha512-pESDkos/PDzYwtyzB5p/UoNU/8fJo68vcXM9ZW2V0kjYayj1KaaUfi1NmTUTUpMn4UhU4gTuK8gIaFO4UGuMbA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.60.0.tgz",
      "integrity": "sha512-hj1wFStD7B1YBeYmvY+lWXZ7ey73YGPcViMShYikqKT1GtstIKQAtfUI6yrzPjAy/O7pO0VLXGmUVWXQMaYgTQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.60.0.tgz",
      "integrity": "sha512-SyaIPFoxmUPlNDq5EHkTbiKzmSEmq/gOYFI/3HHJ8iS/v1mbugVa7dXUzcJGQfoytp9DJFLhHH4U3/eTy2Bq4w==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.60.0.tgz",
      "integrity": "sha512-RdcryEfzZr+lAr5kRm2ucN9aVlCCa2QNq4hXelZxb8GG0NJSazq44Z3PCCc8wISRuCVnGs0lQJVX5Vp6fKA+IA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.60.0.tgz",
      "integrity": "sha512-PrsWNQ8BuE00O3Xsx3ALh2Df8fAj9+cvvX9AIA6o4KpATR98c9mud4XtDWVvsEuyia5U4tVSTKygawyJkjm60w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "4.17.25",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.25.tgz",
      "integrity": "sha512-dVd04UKsfpINUnK0yBoYHDF3xu7xVH4BuDotC/xGuycx4CgbP48X/KF/586bcObxT0HENHXEU8Nqtu6NR+eKhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^4.17.33",
        "@types/qs": "*",
        "@types/serve-static": "^1"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "4.19.8",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.19.8.tgz",
      "integrity": "sha512-02S5fmqeoKzVZCHPZid4b8JH2eM5HzQLZWN2FohQEy/0eXTq8VXZfSN6Pcr3F6N9R/vNrj7cpgbhjie6m/1tCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/mime": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
      "integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "22.19.15",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.19.15.tgz",
      "integrity": "sha512-F0R/h2+dsy5wJAUe3tAU6oqa2qbWY5TpNfL/RGmo1y38hiyO1w3x2jPtt76wmuaJI4DQnOBu21cNXQ2STIUUWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/pg": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/@types/pg/-/pg-8.20.0.tgz",
      "integrity": "sha512-bEPFOaMAHTEP1EzpvHTbmwR8UsFyHSKsRisLIHVMXnpNefSbGA1bD6CVy+qKjGSqmZqNqBDV2azOBo8TgkcVow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "pg-protocol": "*",
        "pg-types": "^2.2.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.15.0.tgz",
      "integrity": "sha512-JawvT8iBVWpzTrz3EGw9BTQFg3BQNmwERdKE22vlTxawwtbyUSlMppvZYKLZzB5zgACXdXxbD3m1bXaMqP/9ow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "1.15.10",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.10.tgz",
      "integrity": "sha512-tRs1dB+g8Itk72rlSI2ZrW6vZg0YrLI81iQSTkMmOqnqCaNr/8Ek4VwWcN5vZgCYWbg/JJSGBlUaYGAOP73qBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*",
        "@types/send": "<1"
      }
    },
    "node_modules/@types/serve-static/node_modules/@types/send": {
      "version": "0.17.6",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.6.tgz",
      "integrity": "sha512-Uqt8rPBE8SY0RK8JB1EzVOIZ32uqy8HwdxCnoCOsYrvnswqmFZ/k+9Ikidlk/ImhsdvBsloHbAlewb2IEBV/Og==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/mime": "^1",
        "@types/node": "*"
      }
    },
    "node_modules/@types/uuid": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/@types/uuid/-/uuid-10.0.0.tgz",
      "integrity": "sha512-7gqG38EyHgyP1S+7+xomFtL+ZNHcKv6DwNaCZmJmo1vgMugyF3TCnXVg4t1uk89mLNwnLtnY3TpOpCOyp1/xHQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/ws": {
      "version": "8.18.1",
      "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz",
      "integrity": "sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@vitest/expect": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-2.1.9.tgz",
      "integrity": "sha512-UJCIkTBenHeKT1TTlKMJWy1laZewsRIzYighyYiJKZreqtdxSos/S1t+ktRMQWu2CKqaarrkeszJx1cgC5tGZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "2.1.9",
        "@vitest/utils": "2.1.9",
        "chai": "^5.1.2",
        "tinyrainbow": "^1.2.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/mocker": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-2.1.9.tgz",
      "integrity": "sha512-tVL6uJgoUdi6icpxmdrn5YNo3g3Dxv+IHJBr0GXHaEdTcw3F+cPKnsXFhli6nO+f/6SDKPHEK1UN+k+TQv0Ehg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "2.1.9",
        "estree-walker": "^3.0.3",
        "magic-string": "^0.30.12"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "msw": "^2.4.9",
        "vite": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "msw": {
          "optional": true
        },
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/@vitest/pretty-format": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/pretty-format/-/pretty-format-2.1.9.tgz",
      "integrity": "sha512-KhRIdGV2U9HOUzxfiHmY8IFHTdqtOhIzCpd8WRdJiE7D/HUcZVD0EgQCVjm+Q9gkUXWgBvMmTtZgIG48wq7sOQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyrainbow": "^1.2.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/runner": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-2.1.9.tgz",
      "integrity": "sha512-ZXSSqTFIrzduD63btIfEyOmNcBmQvgOVsPNPe0jYtESiXkhd8u2erDLnMxmGrDCwHCCHE7hxwRDCT3pt0esT4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/utils": "2.1.9",
        "pathe": "^1.1.2"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/snapshot": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-2.1.9.tgz",
      "integrity": "sha512-oBO82rEjsxLNJincVhLhaxxZdEtV0EFHMK5Kmx5sJ6H9L183dHECjiefOAdnqpIgT5eZwT04PoggUnW88vOBNQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "2.1.9",
        "magic-string": "^0.30.12",
        "pathe": "^1.1.2"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/spy": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-2.1.9.tgz",
      "integrity": "sha512-E1B35FwzXXTs9FHNK6bDszs7mtydNi5MIfUWpceJ8Xbfb1gBMscAnwLbEu+B44ed6W3XjL9/ehLPHR1fkf1KLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyspy": "^3.0.2"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-2.1.9.tgz",
      "integrity": "sha512-v0psaMSkNJ3A2NMrUEHFRzJtDPFn+/VWZ5WxImB21T9fjucJRmS7xCS3ppEnARb9y11OAzaD+P2Ps+b+BGX5iQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "2.1.9",
        "loupe": "^3.1.2",
        "tinyrainbow": "^1.2.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
      "license": "MIT"
    },
    "node_modules/assertion-error": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/body-parser": {
      "version": "1.20.4",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.4.tgz",
      "integrity": "sha512-ZTgYYLMOXY9qKU/57FAo8F+HA2dGX7bqGc71txDRC1rS4frdFI5R7NhluHxH6M0YItAP0sHB4uqAOcYKxO6uGA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "content-type": "~1.0.5",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "~1.2.0",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "on-finished": "~2.4.1",
        "qs": "~6.14.0",
        "raw-body": "~2.5.3",
        "type-is": "~1.6.18",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cac": {
      "version": "6.7.14",
      "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
      "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chai": {
      "version": "5.3.3",
      "resolved": "https://registry.npmjs.org/chai/-/chai-5.3.3.tgz",
      "integrity": "sha512-4zNhdJD/iOjSH0A05ea+Ke6MU5mmpQcbQsSOkgdaUMJ9zTlDTD/GYlwohmIE2u0gaxHYiVHEn1Fw9mZ/ktJWgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "assertion-error": "^2.0.1",
        "check-error": "^2.1.1",
        "deep-eql": "^5.0.1",
        "loupe": "^3.1.0",
        "pathval": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/check-error": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-2.1.3.tgz",
      "integrity": "sha512-PAJdDJusoxnwm1VwW07VWwUN1sl7smmC3OKggvndJFadxxDRyFJBX/ggnu/KE4kQAB7a3Dp8f/YXC1FlUprWmA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 16"
      }
    },
    "node_modules/content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.7.tgz",
      "integrity": "sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/deep-eql": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-5.0.2.tgz",
      "integrity": "sha512-h5k/5U50IJJFpzfL6nO9jaaumfjO/f2NjK/oYB2Djzm4p9L+3T9qWpZqZ2hAbLPuuYq9wrU08WQyBTL5GbPk5Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/destroy": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.7.0.tgz",
      "integrity": "sha512-jEQoCwk8hyb2AZziIOLhDqpm5+2ww5uIE6lkO/6jcOCusfk6LhMHpXXfBLXTZ7Ydyt0j4VoUQv6uGNYbdW+kBA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.4.tgz",
      "integrity": "sha512-Rq4vbHnYkK5fws5NF7MYTU68FPRE1ajX7heQ/8QXXWqNgqqJ/GkmmyxIzUnf2Sr/bakf8l54716CcMGHYhMrrQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.4",
        "@esbuild/android-arm": "0.27.4",
        "@esbuild/android-arm64": "0.27.4",
        "@esbuild/android-x64": "0.27.4",
        "@esbuild/darwin-arm64": "0.27.4",
        "@esbuild/darwin-x64": "0.27.4",
        "@esbuild/freebsd-arm64": "0.27.4",
        "@esbuild/freebsd-x64": "0.27.4",
        "@esbuild/linux-arm": "0.27.4",
        "@esbuild/linux-arm64": "0.27.4",
        "@esbuild/linux-ia32": "0.27.4",
        "@esbuild/linux-loong64": "0.27.4",
        "@esbuild/linux-mips64el": "0.27.4",
        "@esbuild/linux-ppc64": "0.27.4",
        "@esbuild/linux-riscv64": "0.27.4",
        "@esbuild/linux-s390x": "0.27.4",
        "@esbuild/linux-x64": "0.27.4",
        "@esbuild/netbsd-arm64": "0.27.4",
        "@esbuild/netbsd-x64": "0.27.4",
        "@esbuild/openbsd-arm64": "0.27.4",
        "@esbuild/openbsd-x64": "0.27.4",
        "@esbuild/openharmony-arm64": "0.27.4",
        "@esbuild/sunos-x64": "0.27.4",
        "@esbuild/win32-arm64": "0.27.4",
        "@esbuild/win32-ia32": "0.27.4",
        "@esbuild/win32-x64": "0.27.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/expect-type": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.3.0.tgz",
      "integrity": "sha512-knvyeauYhqjOYvQ66MznSMs83wmHrCycNEN6Ao+2AeYEfxUIkuiVxdEa1qlGEPK+We3n0THiDciYSsCcgW/DoA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/express": {
      "version": "4.22.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.22.1.tgz",
      "integrity": "sha512-F2X8g9P1X7uCPZMA3MVf9wcTqlyNp7IhH5qPCI0izhaOIYXaW9L535tGA3qmjRzpH+bZczqq7hVKxTR4NWnu+g==",
      "license": "MIT",
      "dependencies": {
        "accepts": "~1.3.8",
        "array-flatten": "1.1.1",
        "body-parser": "~1.20.3",
        "content-disposition": "~0.5.4",
        "content-type": "~1.0.4",
        "cookie": "~0.7.1",
        "cookie-signature": "~1.0.6",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.3.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.0",
        "merge-descriptors": "1.0.3",
        "methods": "~1.1.2",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "path-to-regexp": "~0.1.12",
        "proxy-addr": "~2.0.7",
        "qs": "~6.14.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "~0.19.0",
        "serve-static": "~1.16.2",
        "setprototypeof": "1.2.0",
        "statuses": "~2.0.1",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.2.tgz",
      "integrity": "sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg==",
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "statuses": "~2.0.2",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.13.7",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.7.tgz",
      "integrity": "sha512-7tN6rFgBlMgpBML5j8typ92BKFi2sFQvIdpAqLA2beia5avZDrMs0FLZiM5etShWq5irVyGcGMEA1jcDaK7A/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/loupe": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/loupe/-/loupe-3.2.1.tgz",
      "integrity": "sha512-CdzqowRJCeLU72bHvWqwRBBlLcMEtIvGrlvef74kMnV2AolS9Y8xUv1I0U/MNAWMhBlKIoyuEgoJ0t/bbwHbLQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
      "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.13.tgz",
      "integrity": "sha512-A/AGNMFN3c8bOlvV9RreMdrv7jsmF9XIfDeCd87+I8RNg6s78BhJxMu69NEMHBSJFxKidViTEdruRwEk/WIKqA==",
      "license": "MIT"
    },
    "node_modules/pathe": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-1.1.2.tgz",
      "integrity": "sha512-whLdWMYL2TwI08hn8/ZqAbrVemu0LNaNNJZX73O6qaIdCTfXutsLhMkjdENX0qhsQ9uIimo4/aQOmXkoon2nDQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pathval": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-2.0.1.tgz",
      "integrity": "sha512-//nshmD55c46FuFw26xV/xFAaB5HF9Xdap7HJBBnrKdAd6/GxDBaNA1870O79+9ueg61cZLSVc+OaFlfmObYVQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.16"
      }
    },
    "node_modules/pg": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/pg/-/pg-8.20.0.tgz",
      "integrity": "sha512-ldhMxz2r8fl/6QkXnBD3CR9/xg694oT6DZQ2s6c/RI28OjtSOpxnPrUCGOBJ46RCUxcWdx3p6kw/xnDHjKvaRA==",
      "license": "MIT",
      "dependencies": {
        "pg-connection-string": "^2.12.0",
        "pg-pool": "^3.13.0",
        "pg-protocol": "^1.13.0",
        "pg-types": "2.2.0",
        "pgpass": "1.0.5"
      },
      "engines": {
        "node": ">= 16.0.0"
      },
      "optionalDependencies": {
        "pg-cloudflare": "^1.3.0"
      },
      "peerDependencies": {
        "pg-native": ">=3.0.1"
      },
      "peerDependenciesMeta": {
        "pg-native": {
          "optional": true
        }
      }
    },
    "node_modules/pg-cloudflare": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.3.0.tgz",
      "integrity": "sha512-6lswVVSztmHiRtD6I8hw4qP/nDm1EJbKMRhf3HCYaqud7frGysPv7FYJ5noZQdhQtN2xJnimfMtvQq21pdbzyQ==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/pg-connection-string": {
      "version": "2.12.0",
      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.12.0.tgz",
      "integrity": "sha512-U7qg+bpswf3Cs5xLzRqbXbQl85ng0mfSV/J0nnA31MCLgvEaAo7CIhmeyrmJpOr7o+zm0rXK+hNnT5l9RHkCkQ==",
      "license": "MIT"
    },
    "node_modules/pg-int8": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==",
      "license": "ISC",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/pg-pool": {
      "version": "3.13.0",
      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.13.0.tgz",
      "integrity": "sha512-gB+R+Xud1gLFuRD/QgOIgGOBE2KCQPaPwkzBBGC9oG69pHTkhQeIuejVIk3/cnDyX39av2AxomQiyPT13WKHQA==",
      "license": "MIT",
      "peerDependencies": {
        "pg": ">=8.0"
      }
    },
    "node_modules/pg-protocol": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.13.0.tgz",
      "integrity": "sha512-zzdvXfS6v89r6v7OcFCHfHlyG/wvry1ALxZo4LqgUoy7W9xhBDMaqOuMiF3qEV45VqsN6rdlcehHrfDtlCPc8w==",
      "license": "MIT"
    },
    "node_modules/pg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
      "license": "MIT",
      "dependencies": {
        "pg-int8": "1.0.1",
        "postgres-array": "~2.0.0",
        "postgres-bytea": "~1.0.0",
        "postgres-date": "~1.0.4",
        "postgres-interval": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pgpass": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",
      "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",
      "license": "MIT",
      "dependencies": {
        "split2": "^4.1.0"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/postcss": {
      "version": "8.5.8",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.8.tgz",
      "integrity": "sha512-OW/rX8O/jXnm82Ey1k44pObPtdblfiuWnrd8X7GJ7emImCOstunGbXUpp7HdBrFQX6rJzn3sPT397Wp5aCwCHg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postgres-array": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postgres-bytea": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.1.tgz",
      "integrity": "sha512-5+5HqXnsZPE65IJZSMkZtURARZelel2oXUEO8rH83VS/hxH5vv1uHquPg5wZs8yMAfdv971IU+kcPUczi7NVBQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-date": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-interval": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
      "license": "MIT",
      "dependencies": {
        "xtend": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/qs": {
      "version": "6.14.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.2.tgz",
      "integrity": "sha512-V/yCWTTF7VJ9hIh18Ugr2zhJMP01MY7c5kh4J870L7imm6/DIzBsNLTXzMwUA3yZ5b/KBqLx8Kp3uRvd7xSe3Q==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "2.5.3",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz",
      "integrity": "sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/rollup": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.60.0.tgz",
      "integrity": "sha512-yqjxruMGBQJ2gG4HtjZtAfXArHomazDHoFwFFmZZl0r7Pdo7qCIXKqKHZc8yeoMgzJJ+pO6pEEHa+V7uzWlrAQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.60.0",
        "@rollup/rollup-android-arm64": "4.60.0",
        "@rollup/rollup-darwin-arm64": "4.60.0",
        "@rollup/rollup-darwin-x64": "4.60.0",
        "@rollup/rollup-freebsd-arm64": "4.60.0",
        "@rollup/rollup-freebsd-x64": "4.60.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.60.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.60.0",
        "@rollup/rollup-linux-arm64-gnu": "4.60.0",
        "@rollup/rollup-linux-arm64-musl": "4.60.0",
        "@rollup/rollup-linux-loong64-gnu": "4.60.0",
        "@rollup/rollup-linux-loong64-musl": "4.60.0",
        "@rollup/rollup-linux-ppc64-gnu": "4.60.0",
        "@rollup/rollup-linux-ppc64-musl": "4.60.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.60.0",
        "@rollup/rollup-linux-riscv64-musl": "4.60.0",
        "@rollup/rollup-linux-s390x-gnu": "4.60.0",
        "@rollup/rollup-linux-x64-gnu": "4.60.0",
        "@rollup/rollup-linux-x64-musl": "4.60.0",
        "@rollup/rollup-openbsd-x64": "4.60.0",
        "@rollup/rollup-openharmony-arm64": "4.60.0",
        "@rollup/rollup-win32-arm64-msvc": "4.60.0",
        "@rollup/rollup-win32-ia32-msvc": "4.60.0",
        "@rollup/rollup-win32-x64-gnu": "4.60.0",
        "@rollup/rollup-win32-x64-msvc": "4.60.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/send": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/send/-/send-0.19.2.tgz",
      "integrity": "sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg==",
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.1",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "~2.4.1",
        "range-parser": "~1.2.1",
        "statuses": "~2.0.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/serve-static": {
      "version": "1.16.3",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.3.tgz",
      "integrity": "sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "~0.19.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/siginfo": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
      "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/split2": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",
      "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",
      "license": "ISC",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/stackback": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
      "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/std-env": {
      "version": "3.10.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-3.10.0.tgz",
      "integrity": "sha512-5GS12FdOZNliM5mAOxFRg7Ir0pWz8MdpYm6AY6VPkGpbA7ZzmbzNcBJQ0GPvvyWgcY7QAhCgf9Uy89I03faLkg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinybench": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
      "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinyexec": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-0.3.2.tgz",
      "integrity": "sha512-KQQR9yN7R5+OSwaK0XQoj22pwHoTlgYqmUscPYoknOoWCWfj/5/ABTMRi69FrKU5ffPVh5QcFikpWJI/P1ocHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinypool": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/tinypool/-/tinypool-1.1.1.tgz",
      "integrity": "sha512-Zba82s87IFq9A9XmjiX5uZA/ARWDrB03OHlq+Vw1fSdt0I+4/Kutwy8BP4Y/y/aORMo61FQ0vIb5j44vSo5Pkg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      }
    },
    "node_modules/tinyrainbow": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/tinyrainbow/-/tinyrainbow-1.2.0.tgz",
      "integrity": "sha512-weEDEq7Z5eTHPDh4xjX789+fHfF+P8boiFB+0vbWzpbnbsEr/GRaohi/uMKxg8RZMXnl1ItAi/IUHWMsjDV7kQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tinyspy": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/tinyspy/-/tinyspy-3.0.2.tgz",
      "integrity": "sha512-n1cw8k1k0x4pgA2+9XrOkFydTerNcJ1zWCO5Nn9scWHTD+5tp8dghT2x1uduQePZTZgd3Tupf+x9BxJjeJi77Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tsx": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.21.0.tgz",
      "integrity": "sha512-5C1sg4USs1lfG0GFb2RLXsdpXqBSEhAaA/0kPL01wxzpMqLILNxIxIOKiILz+cdg/pLnOUxFYOR5yhHU666wbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.27.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "license": "MIT",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/uuid": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-10.0.0.tgz",
      "integrity": "sha512-8XkAphELsDnEGrDxUOHB3RGvXz6TeuYSGEZBOjtTtPm2lwhGBjLgOzLHB63IUWfBpNucQjND6d3AOudO+H3RWQ==",
      "funding": [
        "https://github.com/sponsors/broofa",
        "https://github.com/sponsors/ctavan"
      ],
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vite": {
      "version": "5.4.21",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.21.tgz",
      "integrity": "sha512-o5a9xKjbtuhY6Bi5S3+HvbRERmouabWbyUcpXXUA1u+GNUKoROi9byOJ8M0nHbHYHkYICiMlqxkg1KkYmm25Sw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/vite-node": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/vite-node/-/vite-node-2.1.9.tgz",
      "integrity": "sha512-AM9aQ/IPrW/6ENLQg3AGY4K1N2TGZdR5e4gu/MmmR2xR3Ll1+dib+nook92g4TV3PXVyeyxdWwtaCAiUL0hMxA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cac": "^6.7.14",
        "debug": "^4.3.7",
        "es-module-lexer": "^1.5.4",
        "pathe": "^1.1.2",
        "vite": "^5.0.0"
      },
      "bin": {
        "vite-node": "vite-node.mjs"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/vite-node/node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/vite-node/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vite/node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/vitest": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/vitest/-/vitest-2.1.9.tgz",
      "integrity": "sha512-MSmPM9REYqDGBI8439mA4mWhV5sKmDlBKWIYbA3lRb2PTHACE0mgKwA8yQ2xq9vxDTuk4iPrECBAEW2aoFXY0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/expect": "2.1.9",
        "@vitest/mocker": "2.1.9",
        "@vitest/pretty-format": "^2.1.9",
        "@vitest/runner": "2.1.9",
        "@vitest/snapshot": "2.1.9",
        "@vitest/spy": "2.1.9",
        "@vitest/utils": "2.1.9",
        "chai": "^5.1.2",
        "debug": "^4.3.7",
        "expect-type": "^1.1.0",
        "magic-string": "^0.30.12",
        "pathe": "^1.1.2",
        "std-env": "^3.8.0",
        "tinybench": "^2.9.0",
        "tinyexec": "^0.3.1",
        "tinypool": "^1.0.1",
        "tinyrainbow": "^1.2.0",
        "vite": "^5.0.0",
        "vite-node": "2.1.9",
        "why-is-node-running": "^2.3.0"
      },
      "bin": {
        "vitest": "vitest.mjs"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "@edge-runtime/vm": "*",
        "@types/node": "^18.0.0 || >=20.0.0",
        "@vitest/browser": "2.1.9",
        "@vitest/ui": "2.1.9",
        "happy-dom": "*",
        "jsdom": "*"
      },
      "peerDependenciesMeta": {
        "@edge-runtime/vm": {
          "optional": true
        },
        "@types/node": {
          "optional": true
        },
        "@vitest/browser": {
          "optional": true
        },
        "@vitest/ui": {
          "optional": true
        },
        "happy-dom": {
          "optional": true
        },
        "jsdom": {
          "optional": true
        }
      }
    },
    "node_modules/vitest/node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/vitest/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/why-is-node-running": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
      "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "siginfo": "^2.0.0",
        "stackback": "0.0.2"
      },
      "bin": {
        "why-is-node-running": "cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ws": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.20.0.tgz",
      "integrity": "sha512-sAt8BhgNbzCtgGbt2OxmpuryO63ZoDk/sqaB/znQm94T4fCEsy/yV+7CdC1kJhOU9lboAEU7R3kquuycDoibVA==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

--- FILE: README.md ---
# Mythogen AME - Affinity Mapping Engine & Field of Trust

A regenerative framework for community design built on bio-mythic philosophy. Where mainstream technology mediates human connection through extraction, the Mythogen framework proposes technology as regenerative infrastructure that generates mutual value between people, communities, and living systems.

## Core Architecture

### The Four Distinctions
A rigorous separation that existing software never makes:
- **Needs** — You have them (individual requirements)
- **Beliefs** — You think them (mental models)
- **Principles** — You follow them (operating rules)
- **Values** — You live them with others (inherently relational)

The Desert Island Test: Stranded alone, you cannot practice generosity if there is no one to receive. Values require others.

### Tri-Layered System
```
┌─────────────────────────────────────────────────────────────┐
│                        BODY                                 │
│     13 Sacred Enfoldments - Living Organism Anatomy        │
├─────────────────────────────────────────────────────────────┤
│                        FIELD                                 │
│     Field of Trust - Emergent Plasma State                  │
│     (TrustDetector, Resonance, Membrane)                    │
├─────────────────────────────────────────────────────────────┤
│                        SEED                                  │
│     Living Seed Pattern - Core Identity                      │
│     (Profile, Four Distinctions, Time-Lock)                │
└─────────────────────────────────────────────────────────────┘
```

## Features

- **Living Seed Patterns** - Profiles that grow based on lived behavior, not static self-declaration
- **Field of Trust Detection** - 5 concrete indicators with hologram principle
- **Anti-Capture Mechanisms** - Y Cards, Time-Lock, Sacred Clown, Living Membrane, V-Crystal
- **LJ Map Integration** - 130+ values mapped to 3 cycles (Self-Worth → Self-Expression → Selfless Expression)
- **REST API + WebSocket** - Real-time FOT monitoring

## Quick Start

```bash
npm install
npm run dev    # Development server
npm run build  # Production build
npm test       # Run tests
```

## API Endpoints

### Seeds
- `POST /api/seeds` - Create seed
- `GET /api/seeds/:id` - Get seed
- `GET /api/seeds/:id/y-cards` - Get transparency card

### Communities
- `POST /api/communities` - Create community
- `GET /api/communities/:id/fot` - Get FOT score
- `POST /api/communities/:id/trust-events` - Record trust event

### Anti-Capture
- `POST /api/communities/:id/sacred-clown` - Trigger disruption
- `GET /api/communities/:id/membrane` - Get membrane state

## Field of Trust Indicators

1. **Mutual Support Frequency** - Spontaneous, not mandated
2. **Response Velocity** - How quickly community rallies
3. **Difficult Topic Engagement** - Conflict deepens rather than fractures
4. **Benefit Distribution** - Value flows to everyone, not just influencers
5. **Psychological Safety** - Vulnerability without fear of weaponization

**Hologram Principle:** Trust manifests only when ALL dimensions align. Composite = minimum of all indicators (not average).

## Anti-Capture Suite

- **Y Cards** - Complete algorithmic transparency
- **Time-Lock** - 30-day maturation (kills viral manipulation)
- **Sacred Clown** - Productive disruption preventing premature closure
- **Living Membrane** - Semi-permeable boundary (blocks threats, enables flourishing)
- **V-Crystal** - Immune system for conflict dynamics

## License

MIT

--- FILE: src/anticapture/index.ts ---
/**
 * Anti-Capture Mechanisms
 * Protecting the system from becoming a dead siphon
 * The immune system against capture
 */

import { v4 as uuid } from 'uuid';
import type { YCard, TimeLock, MembraneState, Community, VDynamic, VPosition } from '../models/types.js';

// ============================================
// Y Cards - Algorithmic Transparency Engine
// ============================================

export class TransparencyEngine {
  /**
   * Generate a Y Card - complete transparency about algorithm decisions
   * "Y" = Why, How, What
   */
  generateYCard(params: {
    algorithm: string;
    purpose: string;
    dataUsed: string[];
    result: string;
    recipientId: string;
  }): YCard {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days
    
    return {
      id: uuid(),
      algorithm: params.algorithm,
      purpose: params.purpose,
      dataUsed: params.dataUsed,
      result: params.result,
      generatedAt: now,
      expiresAt,
    };
  }
  
  /**
   * Format Y Card for human-readable display
   */
  formatYCard(card: YCard): string {
    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Y CARD - Algorithmic Transparency
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY was this algorithm used?
${card.purpose}

HOW does it work?
Algorithm: ${card.algorithm}
Data used: ${card.dataUsed.join(', ')}

WHAT was the result?
${card.result}

Generated: ${card.generatedAt.toISOString()}
Expires: ${card.expiresAt.toISOString()}
ID: ${card.id}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This card exists so you can question and understand every decision that affects you.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();
  }
  
  /**
   * Calculate community transparency score
   */
  calculateTransparencyScore(cards: YCard[]): number {
    if (cards.length === 0) return 0;
    
    const now = new Date();
    const viewed = cards.filter(c => 
      c.viewedAt && c.expiresAt > now
    ).length;
    
    return viewed / cards.length;
  }
}

// ============================================
// Time Lock - 30-day Maturation
// ============================================

export class TimeLockManager {
  private readonly MATURATION_DAYS = 30;
  private readonly LOCK_DURATION_MS = this.MATURATION_DAYS * 24 * 60 * 60 * 1000;
  
  /**
   * Create a new time lock for a seed
   */
  createTimeLock(seedId: string): TimeLock {
    const now = new Date();
    
    return {
      id: uuid(),
      seedId,
      lockedAt: now,
      maturesAt: new Date(now.getTime() + this.LOCK_DURATION_MS),
      isMature: false,
    };
  }
  
  /**
   * Check if a time lock has matured
   */
  isMature(lock: TimeLock): boolean {
    if (lock.isMature) return true;
    return new Date() >= lock.maturesAt;
  }
  
  /**
   * Get maturation progress (0-1)
   */
  getMaturationProgress(lock: TimeLock): number {
    if (lock.isMature) return 1;
    
    const now = Date.now();
    const start = lock.lockedAt.getTime();
    const end = lock.maturesAt.getTime();
    
    return Math.min(1, (now - start) / (end - start));
  }
  
  /**
   * Mark lock as matured (called externally after verification)
   */
  markMature(lock: TimeLock): TimeLock {
    return { ...lock, isMature: true };
  }
  
  /**
   * Time-lock kills the viral model:
   * - No rapid emotional manipulation (can't exploit moments of weakness)
   * - Forces patience and genuine relationship building
   * - Prevents the "one viral post" manipulation pattern
   */
  canManipulate(lock: TimeLock): boolean {
    return this.isMature(lock);
  }
}

// ============================================
// Sacred Clown - Productive Disruption
// ============================================

export class SacredClown {
  private disruptionHistory: Map<string, Date[]> = new Map();
  
  /**
   * Trigger productive disruption to prevent premature closure
   * "The seed that never gets challenged becomes a dead habit"
   */
  triggerDisruption(communityId: string): {
    type: 'question-assumption' | 'introduce-paradox' | 'surface-shadow' | 'challenge-consensus';
    message: string;
    purpose: string;
  } {
    const disruptions = this.getDisruptions(communityId);
    
    // Don't disrupt too frequently (min 7 days between)
    const lastDisruption = disruptions[disruptions.length - 1];
    if (lastDisruption && 
        Date.now() - lastDisruption.getTime() < 7 * 24 * 60 * 60 * 1000) {
      return {
        type: 'question-assumption',
        message: 'Still processing previous disruption...',
        purpose: 'waiting period',
      };
    }
    
    // Record this disruption
    disruptions.push(new Date());
    this.disruptionHistory.set(communityId, disruptions);
    
    // Return a random disruption type
    const types = [
      {
        type: 'question-assumption' as const,
        message: 'What if the assumption we\'re most certain about is actually what\'s limiting us?',
        purpose: 'Prevent premature closure of understanding',
      },
      {
        type: 'introduce-paradox' as const,
        message: 'Both/and: We can be deeply committed AND open to being wrong. These aren\'t opposites.',
        purpose: 'Hold tension instead of resolving it prematurely',
      },
      {
        type: 'surface-shadow' as const,
        message: 'What pattern are we avoiding looking at because it feels too uncomfortable?',
        purpose: 'Surface what\'s in the shadow',
      },
      {
        type: 'challenge-consensus' as const,
        message: 'The consensus we\'ve built... what would it look like if we\'re actually all slightly wrong?',
        purpose: 'Prevent groupthink and false certainty',
      },
    ];
    
    return types[Math.floor(Math.random() * types.length)];
  }
  
  /**
   * Get disruption history for a community
   */
  getDisruptions(communityId: string): Date[] {
    return this.disruptionHistory.get(communityId) || [];
  }
  
  /**
   * Sacred Clown Principle:
   * "The jester sees what the king refuses to see"
   * Disruption is not destruction - it's a healthy immune response
   */
}

// ============================================
// Living Membrane - Semi-permeable Boundary
// ============================================

export class MembraneController {
  /**
   * Create initial membrane state for a community
   */
  createMembrane(communityId: string): MembraneState {
    return {
      communityId,
      permeabilityLevel: 0.5, // Balanced by default
      blockedEntities: [],
      allowedEntities: [],
      threatLevel: 0,
    };
  }
  
  /**
   * Update membrane based on community health
   */
  updateMembrane(
    membrane: MembraneState,
    communityHealth: number,
    externalThreats: string[]
  ): MembraneState {
    // Healthy community = more permeable (open to growth)
    // Stressed community = less permeable (protective)
    const targetPermeability = 0.3 + communityHealth * 0.7;
    
    // Block known threats
    const blocked = [...new Set([...membrane.blockedEntities, ...externalThreats])];
    
    return {
      ...membrane,
      permeabilityLevel: targetPermeability,
      blockedEntities: blocked,
      threatLevel: externalThreats.length > 0 ? Math.min(1, externalThreats.length * 0.2) : 0,
    };
  }
  
  /**
   * Check if an entity can pass through the membrane
   * Semi-permeable = filters, doesn't block completely
   */
  canPass(membrane: MembraneState, entityId: string): boolean {
    // Explicitly blocked = no
    if (membrane.blockedEntities.includes(entityId)) return false;
    
    // Explicitly allowed = yes
    if (membrane.allowedEntities.includes(entityId)) return true;
    
    // Otherwise, depends on permeability and threat level
    // High permeability + low threat = allow
    // Low permeability OR high threat = block
    return membrane.permeabilityLevel > 0.5 && membrane.threatLevel < 0.3;
  }
  
  /**
   * Block an entity (toxic, extractive, etc.)
   */
  blockEntity(membrane: MembraneState, entityId: string): MembraneState {
    return {
      ...membrane,
      blockedEntities: [...membrane.blockedEntities, entityId],
      allowedEntities: membrane.allowedEntities.filter(id => id !== entityId),
    };
  }
  
  /**
   * Allow an entity (trusted, beneficial)
   */
  allowEntity(membrane: MembraneState, entityId: string): MembraneState {
    return {
      ...membrane,
      allowedEntities: [...membrane.allowedEntities, entityId],
      blockedEntities: membrane.blockedEntities.filter(id => id !== entityId),
    };
  }
}

// ============================================
// V-Crystal Immune System
// ============================================

export class VCrystalSystem {
  /**
   * Detect when V-Dynamics are active (conflict pattern emerging)
   */
  detectVDynamic(communityId: string, event: string): VDynamic | null {
    // Trigger words that indicate V-Dynamic activation
    const triggerPatterns = [
      { pattern: /blame|fault|responsible/i, position: 'victor' },
      { pattern: /wrong|bad|evil|i'm right/i, position: 'villain' },
      { pattern: /hurt|wounded|suffering|poor me/i, position: 'victim' },
      { pattern: /payback|revenge|deserve|eye for eye/i, position: 'vengeful' },
      { pattern: /should|must|always|never|right/i, position: 'virtuous' },
      { pattern: /fear|afraid|vulnerable|exposed/i, position: 'vulnerable' },
    ];
    
    const activePositions: VPosition[] = [];
    let dominantPosition: VPosition = 'vulnerable';
    let maxMatches = 0;
    
    for (const { pattern, position } of triggerPatterns) {
      if (pattern.test(event)) {
        activePositions.push(position);
        maxMatches++;
        dominantPosition = position; // Last match wins
      }
    }
    
    if (activePositions.length === 0) return null;
    
    return {
      id: uuid(),
      communityId,
      triggerEvent: event,
      activePositions,
      dominantPosition,
      resolutionState: 'active',
      createdAt: new Date(),
    };
  }
  
  /**
   * Vengeance is the autoimmune flare
   * Vulnerability is the circuit breaker
   * "Villains don't apologize and admit they were overwhelmed"
   */
  resolveVDynamic(dynamic: VDynamic): VDynamic {
    // Resolution path: active → healing → resolved
    if (dynamic.resolutionState === 'resolved') {
      return dynamic;
    }
    
    const nextState = dynamic.resolutionState === 'active' ? 'healing' : 'resolved';
    
    return {
      ...dynamic,
      resolutionState: nextState,
    };
  }
  
  /**
   * Check if vengeance (autoimmune) is dominant
   */
  isAutoimmuneFlare(dynamic: VDynamic): boolean {
    return dynamic.dominantPosition === 'vengeful' ||
           dynamic.dominantPosition === 'villain';
  }
  
  /**
   * Circuit breaker for V-Dynamics
   * "Vulnerability breaks the cycle"
   */
  canBreakCycle(dynamic: VDynamic): boolean {
    // Only vulnerable position can break the cycle
    return dynamic.dominantPosition === 'vulnerable';
  }
}
--- FILE: src/api/index.ts ---
/**
 * Mythogen AME - REST API Server
 * Express-based API for profile CRUD, community management, trust queries
 */

import express, { Request, Response, NextFunction } from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';

// Import engines
import { AffinityMapper } from '../engine/AffinityMapper.js';
import { TrustDetector, TRUST_INDICATOR_TYPES } from '../engine/TrustDetector.js';
import { 
  TransparencyEngine, 
  TimeLockManager, 
  SacredClown, 
  MembraneController,
  VCrystalSystem 
} from '../anticapture/index.js';

// Import types
import type { 
  LivingSeedPattern, 
  Community, 
  TrustIndicator, 
  FOTScore,
  Need,
  Belief,
  Principle,
  Value,
} from '../models/types.js';
import { createEmptySeed } from '../models/types.js';

// ============================================
// Validation Schemas
// ============================================

const NeedSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  category: z.enum(['survival', 'security', 'belonging', 'esteem', 'self-actualization']),
  priority: z.number().min(1).max(10),
});

const BeliefSchema = z.object({
  statement: z.string().min(1),
  confidence: z.number().min(0).max(1),
  origin: z.string(),
});

const PrincipleSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  domain: z.enum(['personal', 'professional', 'spiritual', 'social']),
});

const ValueSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  practicedLevel: z.number().min(0).max(1),
  developmentColumn: z.number().min(1).max(9),
  developmentCycle: z.enum(['self-worth', 'self-expression', 'selfless-expression']),
});

const CreateSeedSchema = z.object({
  needs: z.array(NeedSchema).optional(),
  beliefs: z.array(BeliefSchema).optional(),
  principles: z.array(PrincipleSchema).optional(),
  values: z.array(ValueSchema).optional(),
  visibility: z.enum(['private', 'community', 'public']).optional(),
});

const CreateCommunitySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  memberIds: z.array(z.string()).min(1).max(15),
  sharedMyth: z.string().optional(),
});

const TrustEventSchema = z.object({
  type: z.enum(['support', 'response', 'conflict', 'sharing', 'vulnerability']),
  data: z.record(z.any()),
});

// ============================================
// In-Memory Store (production would use PostgreSQL)
// ============================================

const seeds = new Map<string, LivingSeedPattern>();
const communities = new Map<string, Community>();
const trustMeasurements = new Map<string, TrustIndicator[]>();

// ============================================
// Initialize Engines
// ============================================

const affinityMapper = new AffinityMapper();
const trustDetector = new TrustDetector();
const transparencyEngine = new TransparencyEngine();
const timeLockManager = new TimeLockManager();
const sacredClown = new SacredClown();
const membraneController = new MembraneController();
const vCrystalSystem = new VCrystalSystem();

// ============================================
// Express App
// ============================================

const app = express();
app.use(express.json());

// Error handler
const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: err.message });
};

// ============================================
// Seed Pattern Routes
// ============================================

// Create a new seed
app.post('/api/seeds', async (req, res, next) => {
  try {
    const body = CreateSeedSchema.parse(req.body);
    
    const now = new Date();
    const id = uuid();
    
    // Create needs with IDs
    const needs: Need[] = (body.needs || []).map(n => ({
      id: uuid(),
      ...n,
      createdAt: now,
    }));
    
    // Create beliefs with IDs
    const beliefs: Belief[] = (body.beliefs || []).map(b => ({
      id: uuid(),
      ...b,
      challenged: false,
      createdAt: now,
    }));
    
    // Create principles with IDs
    const principles: Principle[] = (body.principles || []).map(p => ({
      id: uuid(),
      ...p,
      followingScore: 0.5, // Start neutral
      createdAt: now,
    }));
    
    // Create values with IDs
    const values: Value[] = (body.values || []).map(v => ({
      id: uuid(),
      ...v,
      requiresOthers: true as const, // Values require others
      createdAt: now,
    }));
    
    const seed: LivingSeedPattern = {
      id,
      needs,
      beliefs,
      principles,
      values,
      plantedAt: now,
      lastUpdatedAt: now,
      maturationLevel: 0,
      valuesEmbedding: [],
      visibility: body.visibility || 'private',
      createdAt: now,
      updatedAt: now,
    };
    
    seeds.set(id, seed);
    
    res.status(201).json({ 
      seed,
      timeLock: timeLockManager.createTimeLock(id),
    });
  } catch (err) {
    next(err);
  }
});

// Get a seed
app.get('/api/seeds/:id', (req, res) => {
  const seed = seeds.get(req.params.id);
  if (!seed) {
    return res.status(404).json({ error: 'Seed not found' });
  }
  res.json(seed);
});

// Update a seed (time-locked)
app.patch('/api/seeds/:id', (req, res) => {
  const seed = seeds.get(req.params.id);
  if (!seed) {
    return res.status(404).json({ error: 'Seed not found' });
  }
  
  const updates = req.body;
  const updatedSeed: LivingSeedPattern = {
    ...seed,
    ...updates,
    id: seed.id, // Prevent ID change
    plantedAt: seed.plantedAt, // Prevent planted date change
    updatedAt: new Date(),
  };
  
  seeds.set(seed.id, updatedSeed);
  res.json(updatedSeed);
});

// Get LJ Map values
app.get('/api/lj-map', (_req, res) => {
  res.json(affinityMapper.getLJMap());
});

// ============================================
// Community Routes
// ============================================

// Create a community
app.post('/api/communities', (req, res) => {
  const body = CreateCommunitySchema.parse(req.body);
  
  const now = new Date();
  const id = uuid();
  
  const community: Community = {
    id,
    name: body.name,
    description: body.description || '',
    memberIds: body.memberIds,
    seedPattern: {
      sharedMyth: body.sharedMyth || '',
      foundingPrinciples: [],
      emergentValues: [],
      growthGeometry: 'fractal',
    },
    fotScore: {
      overall: 0,
      indicators: [],
      membraneHealth: 0,
      isPlasmaState: false,
      hologramCoherence: 0,
      lastCalculatedAt: now,
    },
    createdAt: now,
    phase: 'forming',
    sacredClownActive: false,
    transparencyScore: 1, // Start fully transparent
  };
  
  communities.set(id, community);
  trustMeasurements.set(id, []);
  
  res.status(201).json({ 
    community,
    membrane: membraneController.createMembrane(id),
  });
});

// Get a community
app.get('/api/communities/:id', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  // Calculate current FOT
  const fotScore = trustDetector.calculateFOT(community);
  community.fotScore = fotScore;
  
  res.json(community);
});

// Get FOT score for a community
app.get('/api/communities/:id/fot', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  const fotScore = trustDetector.calculateFOT(community);
  const membraneHealth = trustDetector.calculateMembraneHealth(community);
  
  res.json({
    ...fotScore,
    membraneHealth,
    phase: trustDetector.determinePhase(fotScore, community.createdAt.getTime()),
  });
});

// ============================================
// Trust Event Routes
// ============================================

// Record a trust event
app.post('/api/communities/:id/trust-events', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  const body = TrustEventSchema.parse(req.body);
  
  // Analyze the event
  const analysis = trustDetector.analyzeEvent({
    type: body.type,
    data: body.data,
  });
  
  // Update trust measurements
  const measurements = trustMeasurements.get(community.id) || [];
  
  if (analysis.type && analysis.currentValue !== undefined) {
    const indicator: TrustIndicator = {
      type: analysis.type,
      currentValue: analysis.currentValue,
      historicalValues: [analysis.currentValue],
      sampleSize: 1,
      lastMeasuredAt: new Date(),
      trend: 'stable',
    };
    
    // Update or add
    const existingIndex = measurements.findIndex(m => m.type === analysis.type);
    if (existingIndex >= 0) {
      const existing = measurements[existingIndex];
      measurements[existingIndex] = {
        ...existing,
        currentValue: (existing.currentValue + indicator.currentValue) / 2,
        historicalValues: [...existing.historicalValues, indicator.currentValue],
        sampleSize: existing.sampleSize + 1,
        lastMeasuredAt: new Date(),
      };
    } else {
      measurements.push(indicator);
    }
    
    trustMeasurements.set(community.id, measurements);
    
    // Update community FOT
    community.fotScore.indicators = measurements;
    community.fotScore = trustDetector.calculateFOT(community);
    community.fotScore.membraneHealth = trustDetector.calculateMembraneHealth(community);
    
    // Check for V-Dynamics
    const vDynamic = vCrystalSystem.detectVDynamic(community.id, body.data.event as string || '');
    if (vDynamic) {
      res.json({ 
        indicator, 
        vDynamic,
        fotScore: community.fotScore,
      });
      return;
    }
  }
  
  res.json({ indicator: analysis, fotScore: community.fotScore });
});

// ============================================
// Anti-Capture Routes
// ============================================

// Get Y Card for a seed
app.get('/api/seeds/:id/y-cards', (req, res) => {
  const seed = seeds.get(req.params.id);
  if (!seed) {
    return res.status(404).json({ error: 'Seed not found' });
  }
  
  // Generate a Y Card for current state
  const ljMap = affinityMapper.getLJMap();
  const dominantValues = seed.values
    .filter(v => v.practicedLevel > 0.5)
    .map(v => v.name);
  
  const yCard = transparencyEngine.generateYCard({
    algorithm: 'AffinityMapper.mapToValues + TrustDetector.calculateFOT',
    purpose: 'Mapping your values to the LJ Map developmental model and calculating community Field of Trust',
    dataUsed: [
      'Your values (needs, beliefs, principles, values)',
      'Community interaction patterns',
      'Trust indicator measurements',
      `Your dominant values: ${dominantValues.join(', ') || 'not yet mapped'}`,
    ],
    result: seed.values.length > 0 
      ? `Your seed has ${seed.values.length} values mapped to the LJ Map across cycles: self-worth, self-expression, selfless-expression`
      : 'Your seed has no values mapped yet. Add values to see your developmental map.',
    recipientId: seed.id,
  });
  
  res.json({
    yCard,
    formatted: transparencyEngine.formatYCard(yCard),
  });
});

// Trigger Sacred Clown (for testing)
app.post('/api/communities/:id/sacred-clown', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  community.sacredClownActive = true;
  
  const disruption = sacredClown.triggerDisruption(community.id);
  
  res.json({
    disruption,
    sacredClownActive: true,
  });
});

// Get membrane state
app.get('/api/communities/:id/membrane', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  const membrane = membraneController.createMembrane(community.id);
  const updatedMembrane = membraneController.updateMembrane(
    membrane,
    community.fotScore.overall,
    []
  );
  
  res.json(updatedMembrane);
});

// ============================================
// WebSocket for real-time FOT
// ============================================

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message.toString());
      
      if (data.type === 'subscribe' && data.communityId) {
        // Subscribe to FOT updates for a community
        const community = communities.get(data.communityId);
        if (community) {
          const fot = trustDetector.calculateFOT(community);
          ws.send(JSON.stringify({
            type: 'fot-update',
            communityId: data.communityId,
            fot,
          }));
        }
      }
    } catch (err) {
      console.error('WebSocket message error:', err);
    }
  });
  
  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

// ============================================
// Health Check
// ============================================

app.get('/health', (_req, res) => {
  res.json({ 
    status: 'healthy',
    seeds: seeds.size,
    communities: communities.size,
    uptime: process.uptime(),
  });
});

// ============================================
// Start Server
// ============================================

const PORT = process.env.PORT || 3000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mythogen AME Server running on port ${PORT}

API Endpoints:
  Seeds:
    POST   /api/seeds          - Create seed
    GET    /api/seeds/:id      - Get seed
    PATCH  /api/seeds/:id      - Update seed
    GET    /api/seeds/:id/y-cards - Get transparency card
    GET    /api/lj-map         - Get LJ Map values
    
  Communities:
    POST   /api/communities    - Create community
    GET    /api/communities/:id - Get community
    GET    /api/communities/:id/fot - Get FOT score
    POST   /api/communities/:id/trust-events - Record trust event
    POST   /api/communities/:id/sacred-clown - Trigger disruption
    GET    /api/communities/:id/membrane - Get membrane state
    
  WebSocket:
    ws://localhost:8080 - Real-time FOT updates

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
});

export default app;
--- FILE: src/db/schema.sql ---
-- Mythogen AME - PostgreSQL Schema with PG Vector
-- Field of Trust & Affinity Mapping Engine

-- Enable PG Vector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- ============================================
-- Core Tables
-- ============================================

-- Living Seed Patterns (Profiles)
CREATE TABLE seed_patterns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- The Four Distinctions stored as JSONB
    needs JSONB NOT NULL DEFAULT '[]',
    beliefs JSONB NOT NULL DEFAULT '[]',
    principles JSONB NOT NULL DEFAULT '[]',
    "values" JSONB NOT NULL DEFAULT '[]',
    
    -- Seed metadata
    planted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    maturation_level DECIMAL(3,2) NOT NULL DEFAULT 0,
    
    -- Values embedding for resonance detection
    values_embedding vector(1536), -- OpenAI ada-002 compatible
    
    -- Privacy
    visibility VARCHAR(20) NOT NULL DEFAULT 'private',
    CHECK (visibility IN ('private', 'community', 'public')),
    
    -- Timestamps
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for vector similarity search
CREATE INDEX idx_seed_values_embedding ON seed_patterns 
    USING ivfflat (values_embedding vector_cosine_ops)
    WITH (lists = 100);

-- ============================================
-- Trust Indicator Tracking
-- ============================================

CREATE TABLE trust_measurements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Context
    community_id UUID NOT NULL REFERENCES seed_patterns(id),
    indicator_type VARCHAR(50) NOT NULL,
    CHECK (indicator_type IN (
        'mutual-support', 'response-velocity', 'conflict-engagement',
        'benefit-distribution', 'psychological-safety'
    )),
    
    -- Value (0-1 scale)
    value DECIMAL(3,2) NOT NULL,
    sample_size INTEGER NOT NULL DEFAULT 1,
    
    -- Metadata
    measured_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    -- Ensure we track trends over time
    UNIQUE(community_id, indicator_type, measured_at)
);

-- Index for time-series queries
CREATE INDEX idx_trust_measurements_time ON trust_measurements 
    (community_id, indicator_type, measured_at DESC);

-- ============================================
-- Community (Pod) Structure
-- ============================================

CREATE TABLE communities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Membership (5-15 ideal)
    member_ids UUID[] NOT NULL DEFAULT '{}',
    
    -- Seed pattern for this community
    seed_pattern JSONB NOT NULL DEFAULT '{}',
    
    -- FOT Score (current composite)
    fot_score DECIMAL(3,2) NOT NULL DEFAULT 0,
    membrane_health DECIMAL(3,2) NOT NULL DEFAULT 0,
    is_plasma_state BOOLEAN NOT NULL DEFAULT FALSE,
    hologram_coherence DECIMAL(3,2) NOT NULL DEFAULT 0,
    
    -- Lifecycle
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    phase VARCHAR(20) NOT NULL DEFAULT 'forming',
    CHECK (phase IN ('forming', 'storming', 'norming', 'performing', 'mature')),
    
    -- Anti-capture state
    sacred_clown_active BOOLEAN NOT NULL DEFAULT FALSE,
    transparency_score DECIMAL(3,2) NOT NULL DEFAULT 1,
    
    -- Updated timestamp
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- Anti-Capture Mechanisms
-- ============================================

-- Y Cards (Algorithmic Transparency)
CREATE TABLE y_cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- What algorithm was used
    algorithm VARCHAR(255) NOT NULL,
    purpose TEXT NOT NULL,
    data_used TEXT[] NOT NULL,
    result TEXT NOT NULL,
    
    -- Timestamps
    generated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days'),
    viewed_at TIMESTAMPTZ,
    
    -- Ownership
    owner_id UUID REFERENCES seed_patterns(id),
    
    CONSTRAINT y_card_not_expired CHECK (expires_at > NOW())
);

-- Time Locks (30-day maturation)
CREATE TABLE time_locks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    seed_id UUID NOT NULL REFERENCES seed_patterns(id) ON DELETE CASCADE,
    locked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    matures_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days'),
    is_mature BOOLEAN NOT NULL DEFAULT FALSE,
    
    UNIQUE(seed_id)
);

-- Membrane State (Semi-permeable boundary)
CREATE TABLE membrane_state (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    
    permeability_level DECIMAL(3,2) NOT NULL DEFAULT 0.5,
    blocked_entities UUID[] NOT NULL DEFAULT '{}',
    allowed_entities UUID[] NOT NULL DEFAULT '{}',
    threat_level DECIMAL(3,2) NOT NULL DEFAULT 0,
    
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    UNIQUE(community_id)
);

-- ============================================
-- V-Crystal Immune System
-- ============================================

CREATE TABLE v_dynamics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    trigger_event TEXT NOT NULL,
    active_positions VARCHAR(20)[] NOT NULL,
    dominant_position VARCHAR(20) NOT NULL,
    CHECK (dominant_position IN ('victor', 'villain', 'victim', 'vengeful', 'virtuous', 'vulnerable')),
    
    resolution_state VARCHAR(20) NOT NULL DEFAULT 'active',
    CHECK (resolution_state IN ('active', 'healing', 'resolved')),
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- ============================================
-- LJ Map Values (Reference table)
-- ============================================

CREATE TABLE lj_map_values (
    id SERIAL PRIMARY KEY,
    
    value VARCHAR(255) NOT NULL UNIQUE,
    cycle VARCHAR(30) NOT NULL,
    CHECK (cycle IN ('self-worth', 'self-expression', 'selfless-expression')),
    
    column_number INTEGER NOT NULL CHECK (column_number BETWEEN 1 AND 9),
    description TEXT NOT NULL,
    
    -- Embedding for semantic search
    embedding vector(1536)
);

CREATE INDEX idx_lj_values_embedding ON lj_map_values 
    USING ivfflat (embedding vector_cosine_ops)
    WITH (lists = 10);

-- ============================================
-- Events for behavioral tracking
-- ============================================

CREATE TABLE community_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    actor_id UUID NOT NULL REFERENCES seed_patterns(id),
    
    -- Event data
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB NOT NULL DEFAULT '{}',
    
    -- For trust calculations
    is_supportive BOOLEAN, -- Did this event provide support?
    response_time_ms INTEGER, -- How quickly did others respond?
    involves_conflict BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_events_community ON community_events 
    (community_id, created_at DESC);
CREATE INDEX idx_events_supportive ON community_events 
    (community_id, is_supportive) WHERE is_supportive = TRUE;

-- ============================================
-- Utility Functions
-- ============================================

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_seed_patterns_updated
    BEFORE UPDATE ON seed_patterns
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tr_communities_updated
    BEFORE UPDATE ON communities
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Function to check if time lock has matured
CREATE OR REPLACE FUNCTION is_seed_mature(p_seed_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
    v_matured BOOLEAN;
BEGIN
    SELECT is_mature INTO v_matured
    FROM time_locks
    WHERE seed_id = p_seed_id;
    
    RETURN COALESCE(v_matured, FALSE);
END;
$$ LANGUAGE plpgsql;

-- Function to calculate FOT score from indicators
CREATE OR REPLACE FUNCTION calculate_fot_score(p_community_id UUID)
RETURNS JSONB AS $$
DECLARE
    v_indicators JSONB;
    v_composite DECIMAL(3,2);
    v_min DECIMAL(3,2);
    v_all_present BOOLEAN;
BEGIN
    -- Get recent measurements for all 5 indicators
    SELECT jsonb_agg(jsonb_build_object(
        'type', indicator_type,
        'value', value,
        'sample_size', sample_size,
        'measured_at', measured_at
    )) INTO v_indicators
    FROM (
        SELECT DISTINCT ON (indicator_type) 
            indicator_type, value, sample_size, measured_at
        FROM trust_measurements
        WHERE community_id = p_community_id
        ORDER BY indicator_type, measured_at DESC
    ) recent;
    
    -- Calculate composite (hologram = min of all, not sum)
    IF v_indicators IS NULL THEN
        RETURN jsonb_build_object(
            'overall', 0,
            'indicators', '[]'::jsonb,
            'is_plasma_state', FALSE,
            'hologram_coherence', 0
        );
    END IF;
    
    -- FOT only manifests when ALL dimensions align (hologram principle)
    SELECT MIN((v->>'value')::DECIMAL) INTO v_min FROM jsonb_array_elements(v_indicators) v;
    v_composite := v_min; -- Use minimum, not average (hologram model)
    
    -- Check if all 5 indicators present (full coherence)
    SELECT (SELECT COUNT(DISTINCT v->>'type') FROM jsonb_array_elements(v_indicators) v) = 5 INTO v_all_present;
    
    RETURN jsonb_build_object(
        'overall', v_composite,
        'indicators', v_indicators,
        'is_plasma_state', v_all_present AND v_min > 0.7,
        'hologram_coherence', v_min -- coherence = weakest link
    );
END;
$$ LANGUAGE plpgsql;
--- FILE: src/engine/AffinityMapper.ts ---
/**
 * Affinity Mapper - Maps individuals to the LJ Map values developmental system
 */

import { v4 as uuid } from 'uuid';
import type { 
  LivingSeedPattern, 
  Value, 
  LJMapEntry,
  UUID 
} from '../models/types.js';

// 130+ LJ Map entries (abbreviated - full version would include all values)
const LJ_MAP: LJMapEntry[] = [
  // Journey 1: Self-Worth (Columns 1-3)
  // Column 1: Safety
  { value: 'survival', cycle: 'self-worth', column: 1, description: 'Basic survival needs' },
  { value: 'safety', cycle: 'self-worth', column: 1, description: 'Security and stability' },
  { value: 'protection', cycle: 'self-worth', column: 1, description: 'Being shielded from harm' },
  { value: 'stability', cycle: 'self-worth', column: 1, description: 'Predictable environment' },
  { value: 'shelter', cycle: 'self-worth', column: 1, description: 'Physical and psychological safety' },
  
  // Column 2: Belonging
  { value: 'belonging', cycle: 'self-worth', column: 2, description: 'Being part of a group' },
  { value: 'acceptance', cycle: 'self-worth', column: 2, description: 'Being welcomed as you are' },
  { value: 'connection', cycle: 'self-worth', column: 2, description: 'Meaningful relationships' },
  { value: 'community', cycle: 'self-worth', column: 2, description: 'Part of something larger' },
  { value: 'companionship', cycle: 'self-worth', column: 2, description: 'Having others alongside' },
  
  // Column 3: Utility
  { value: 'utility', cycle: 'self-worth', column: 3, description: 'Being useful and functional' },
  { value: 'contribution', cycle: 'self-worth', column: 3, description: 'Making a difference' },
  { value: 'productivity', cycle: 'self-worth', column: 3, description: 'Getting things done' },
  { value: 'efficiency', cycle: 'self-worth', column: 3, description: 'Optimizing resources' },
  { value: 'competence', cycle: 'self-worth', column: 3, description: 'Skill and capability' },
  
  // Journey 2: Self-Expression (Columns 4-6)
  // Column 4: Quality
  { value: 'quality', cycle: 'self-expression', column: 4, description: 'Pursuing excellence' },
  { value: 'beauty', cycle: 'self-expression', column: 4, description: 'Aesthetic appreciation' },
  { value: 'craftsmanship', cycle: 'self-expression', column: 4, description: 'Mastery of skill' },
  { value: 'elegance', cycle: 'self-expression', column: 4, description: 'Simplicity and grace' },
  { value: 'excellence', cycle: 'self-expression', column: 4, description: 'High standards' },
  
  // Column 5: Service
  { value: 'compassion', cycle: 'self-expression', column: 5, description: 'Deep empathy for others' },
  { value: 'generosity', cycle: 'self-expression', column: 5, description: 'Giving without expectation' },
  { value: 'healing', cycle: 'self-expression', column: 5, description: 'Making others whole' },
  { value: 'nurturing', cycle: 'self-expression', column: 5, description: 'Supporting growth' },
  { value: 'empathy', cycle: 'self-expression', column: 5, description: 'Understanding others deeply' },
  
  // Column 6: Co-Creation
  { value: 'collaboration', cycle: 'self-expression', column: 6, description: 'Creating together' },
  { value: 'creativity', cycle: 'self-expression', column: 6, description: 'Generating new things' },
  { value: 'innovation', cycle: 'self-expression', column: 6, description: 'Novel solutions' },
  { value: 'synergy', cycle: 'self-expression', column: 6, description: 'Whole greater than parts' },
  { value: 'co-creation', cycle: 'self-expression', column: 6, description: 'Joint creation' },
  
  // Journey 3: Selfless Expression (Columns 7-9)
  // Column 7: Integration
  { value: 'integration', cycle: 'selfless-expression', column: 7, description: 'Wholeness and unity' },
  { value: 'harmony', cycle: 'selfless-expression', column: 7, description: 'Balance and peace' },
  { value: 'interdependence', cycle: 'selfless-expression', column: 7, description: 'Mutual reliance' },
  { value: 'systems-thinking', cycle: 'selfless-expression', column: 7, description: 'Seeing the whole' },
  { value: 'wholeness', cycle: 'selfless-expression', column: 7, description: 'Complete picture' },
  
  // Column 8: Navigation
  { value: 'wisdom', cycle: 'selfless-expression', column: 8, description: 'Deep understanding' },
  { value: 'vision', cycle: 'selfless-expression', column: 8, description: 'Seeing possibilities' },
  { value: 'guidance', cycle: 'selfless-expression', column: 8, description: 'Showing the way' },
  { value: 'transcendence', cycle: 'selfless-expression', column: 8, description: 'Beyond the self' },
  { value: 'awakening', cycle: 'selfless-expression', column: 8, description: 'Consciousness expansion' },
  
  // Column 9: No Self
  { value: 'presence', cycle: 'selfless-expression', column: 9, description: 'Pure awareness' },
  { value: 'flow', cycle: 'selfless-expression', column: 9, description: 'Effortless action' },
  { value: 'surrender', cycle: 'selfless-expression', column: 9, description: 'Letting go' },
  { value: 'no-self', cycle: 'selfless-expression', column: 9, description: 'Ego dissolution' },
  { value: 'vitality', cycle: 'selfless-expression', column: 9, description: 'Pure life force' },
];

export class AffinityMapper {
  /**
   * Map a raw text/behavior to LJ Map values
   * This is a simplified embedding-based approach
   */
  async mapToValues(
    seed: LivingSeedPattern,
    observedBehavior?: string
  ): Promise<{
    mappedValues: Value[];
    dominantCycle: string;
    dominantColumn: number;
    developmentalTrajectory: string;
  }> {
    const values = seed.values;
    
    // Find dominant cycle and column (most practiced values)
    const cycleCounts = { 'self-worth': 0, 'self-expression': 0, 'selfless-expression': 0 };
    const columnCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    
    for (const v of values) {
      if (v.practicedLevel > 0.3) {
        cycleCounts[v.developmentCycle]++;
        columnCounts[v.developmentColumn]++;
      }
    }
    
    const dominantCycle = Object.entries(cycleCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 'self-worth';
    
    const dominantColumn = Object.entries(columnCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 1;
    
    // Calculate developmental trajectory
    const trajectory = this.calculateTrajectory(values);
    
    return {
      mappedValues: values,
      dominantCycle,
      dominantColumn: parseInt(String(dominantColumn)),
      developmentalTrajectory: trajectory,
    };
  }
  
  /**
   * Calculate where a person is on their developmental journey
   */
  calculateTrajectory(values: Value[]): string {
    const avgPractice = values.reduce((sum, v) => sum + v.practicedLevel, 0) / (values.length || 1);
    const avgColumn = values.reduce((sum, v) => sum + v.developmentColumn, 0) / (values.length || 1);
    
    if (avgPractice < 0.3) return 'exploring';
    if (avgColumn <= 3) return 'establishing';
    if (avgColumn <= 6) return 'expressing';
    if (avgColumn <= 8) return 'integrating';
    return 'transcending';
  }
  
  /**
   * Check value resonance between two seeds (hologram alignment)
   */
  calculateResonance(seedA: LivingSeedPattern, seedB: LivingSeedPattern): number {
    // Only values can resonate (Desert Island Test)
    const aValues = seedA.values.filter(v => v.practicedLevel > 0.5);
    const bValues = seedB.values.filter(v => v.practicedLevel > 0.5);
    
    if (aValues.length === 0 || bValues.length === 0) return 0;
    
    // Find shared values and their column distance
    let resonanceSum = 0;
    let comparisons = 0;
    
    for (const aVal of aValues) {
      for (const bVal of bValues) {
        if (aVal.name === bVal.name) {
          // Exact match = 1.0
          resonanceSum += 1.0;
        } else if (aVal.developmentCycle === bVal.developmentCycle) {
          // Same cycle, different column - proximity matters
          const columnDist = Math.abs(aVal.developmentColumn - bVal.developmentColumn);
          resonanceSum += Math.max(0, 1 - columnDist / 9);
        } else {
          // Different cycles - still possible but lower
          resonanceSum += 0.2;
        }
        comparisons++;
      }
    }
    
    return comparisons > 0 ? resonanceSum / comparisons : 0;
  }
  
  /**
   * The Desert Island Test: Is this a Value or just a Need/Belief/Principle?
   * Values require others to practice - you cannot be generous alone.
   */
  isDesertIslandTestable(entry: { name: string; requiresOthers?: true }): boolean {
    // Values that are inherently relational
    const relationalValues = [
      'generosity', 'justice', 'compassion', 'fairness', 'honesty',
      'loyalty', 'trust', 'reciprocity', 'forgiveness', 'gratitude',
      'courage', 'integrity', 'humility', 'patience', 'wisdom',
    ];
    
    return relationalValues.some(rv => entry.name.toLowerCase().includes(rv));
  }
  
  /**
   * Get the full LJ Map
   */
  getLJMap(): LJMapEntry[] {
    return LJ_MAP;
  }
  
  /**
   * Find values by cycle or column
   */
  findValues(cycle?: string, column?: number): LJMapEntry[] {
    return LJ_MAP.filter(entry => {
      if (cycle && entry.cycle !== cycle) return false;
      if (column && entry.column !== column) return false;
      return true;
    });
  }
}
--- FILE: src/engine/TrustDetector.ts ---
/**
 * Trust Detector - Calculates Field of Trust emergence
 * Based on 5 concrete indicators and the hologram principle
 */

import type { 
  Community, 
  TrustIndicator, 
  FOTScore,
  UUID 
} from '../models/types.js';

// The Five Trust Indicators
export const TRUST_INDICATOR_TYPES = {
  MUTUAL_SUPPORT: 'mutual-support',
  RESPONSE_VELOCITY: 'response-velocity',
  CONFLICT_ENGAGEMENT: 'conflict-engagement',
  BENEFIT_DISTRIBUTION: 'benefit-distribution',
  PSYCHOLOGICAL_SAFETY: 'psychological-safety',
} as const;

/**
 * Trust Detector calculates FOT emergence based on the hologram principle:
 * Trust manifests only when ALL dimensions align.
 * If one dimension is off, the 3D image doesn't blur — it COMPLETELY FAILS.
 */
export class TrustDetector {
  /**
   * Calculate FOT Score for a community
   * Uses the hologram principle: composite = minimum of all indicators, not average
   */
  calculateFOT(community: Community): FOTScore {
    const { fotScore } = community;
    
    // If no indicators yet, no FOT
    if (!fotScore.indicators || fotScore.indicators.length === 0) {
      return {
        overall: 0,
        indicators: [],
        membraneHealth: 0,
        isPlasmaState: false,
        hologramCoherence: 0,
        lastCalculatedAt: new Date(),
      };
    }
    
    // Calculate composite using hologram principle (minimum, not average)
    const values = fotScore.indicators.map(i => i.currentValue);
    const composite = Math.min(...values);
    
    // Check if all 5 indicators present (full coherence)
    const allPresent = fotScore.indicators.length >= 5;
    
    // Plasma state: all indicators present AND all above threshold (0.7)
    const isPlasmaState = allPresent && composite >= 0.7;
    
    return {
      overall: composite,
      indicators: fotScore.indicators,
      membraneHealth: fotScore.membraneHealth,
      isPlasmaState,
      hologramCoherence: isPlasmaState ? composite : 0, // Only high when plasma
      lastCalculatedAt: new Date(),
    };
  }
  
  /**
   * Analyze a community event and update relevant indicators
   */
  analyzeEvent(event: {
    type: 'support' | 'response' | 'conflict' | 'sharing' | 'vulnerability';
    data: Record<string, unknown>;
  }): Partial<TrustIndicator> {
    switch (event.type) {
      case 'support':
        return this.analyzeMutualSupport(event.data);
      case 'response':
        return this.analyzeResponseVelocity(event.data);
      case 'conflict':
        return this.analyzeConflictEngagement(event.data);
      case 'sharing':
        return this.analyzeBenefitDistribution(event.data);
      case 'vulnerability':
        return this.analyzePsychologicalSafety(event.data);
      default:
        return {};
    }
  }
  
  private analyzeMutualSupport(data: Record<string, unknown>): Partial<TrustIndicator> {
    const spontaneous = data.spontaneous as boolean;
    const frequency = data.frequency as number || 0;
    
    return {
      type: 'mutual-support',
      currentValue: spontaneous 
        ? Math.min(1, frequency / 10) // 10 supports per period = 1.0
        : Math.min(0.5, frequency / 20),
      trend: 'stable',
    };
  }
  
  private analyzeResponseVelocity(data: Record<string, unknown>): Partial<TrustIndicator> {
    const avgResponseTimeMs = data.avgResponseTimeMs as number;
    
    // 0-60 minutes = 1.0, 1-24 hours = 0.7, 1-7 days = 0.4, 7+ days = 0.1
    let value = 0;
    if (avgResponseTimeMs <= 3600000) value = 1.0;
    else if (avgResponseTimeMs <= 86400000) value = 0.7;
    else if (avgResponseTimeMs <= 604800000) value = 0.4;
    else value = 0.1;
    
    return { type: 'response-velocity', currentValue: value, trend: 'stable' };
  }
  
  private analyzeConflictEngagement(data: Record<string, unknown>): Partial<TrustIndicator> {
    const deepenedRelationship = data.deepenedRelationship as boolean;
    const resolutionQuality = data.resolutionQuality as number || 0;
    
    return {
      type: 'conflict-engagement',
      currentValue: deepenedRelationship 
        ? Math.min(1, resolutionQuality)
        : Math.max(0, resolutionQuality - 0.5),
      trend: 'stable',
    };
  }
  
  private analyzeBenefitDistribution(data: Record<string, unknown>): Partial<TrustIndicator> {
    const benefitingMembers = data.benefitingMembers as number;
    const totalMembers = data.totalMembers as number;
    
    // Check if value flows to everyone, not just influencers
    const distribution = benefitingMembers / totalMembers;
    
    return {
      type: 'benefit-distribution',
      currentValue: distribution,
      trend: 'stable',
    };
  }
  
  private analyzePsychologicalSafety(data: Record<string, unknown>): Partial<TrustIndicator> {
    const vulnerableStatements = data.vulnerableStatements as number;
    const weaponizationCount = data.weaponizationCount as number;
    
    // High vulnerability + low weaponization = high safety
    const safetyScore = Math.max(0, (vulnerableStatements - weaponizationCount * 2) / 10);
    
    return {
      type: 'psychological-safety',
      currentValue: Math.min(1, safetyScore),
      trend: 'stable',
    };
  }
  
  /**
   * Determine community phase based on FOT development
   */
  determinePhase(fotScore: FOTScore, communityAge: number): Community['phase'] {
    const daysSinceCreation = (Date.now() - communityAge) / (1000 * 60 * 60 * 24);
    
    if (fotScore.overall < 0.2) return 'forming';
    if (fotScore.overall < 0.4) return 'storming';
    if (fotScore.overall < 0.6) return 'norming';
    if (fotScore.overall < 0.8) return 'performing';
    return 'mature';
  }
  
  /**
   * Calculate membrane health (semi-permeable boundary strength)
   */
  calculateMembraneHealth(community: Community): number {
    // Healthy membrane = high permeability + low threat + strong internal cohesion
    const internalCohesion = community.fotScore.overall;
    const sacredClownBonus = community.sacredClownActive ? 0.1 : 0;
    const transparencyBonus = community.transparencyScore * 0.2;
    
    return Math.min(1, internalCohesion * 0.7 + sacredClownBonus + transparencyBonus);
  }
}

/**
 * Event types for FOT tracking
 */
export interface CommunityEvent {
  communityId: UUID;
  actorId: UUID;
  type: 'support' | 'response' | 'conflict' | 'sharing' | 'vulnerability' | 'boundary';
  data: Record<string, unknown>;
  timestamp: Date;
}

/**
 * FOT History entry for trend analysis
 */
export interface FOTHistory {
  communityId: UUID;
  score: FOTScore;
  events: CommunityEvent[];
  recordedAt: Date;
}
--- FILE: src/index.ts ---
/**
 * Mythogen AME - Entry Point
 * Affinity Mapping Engine & Field of Trust System
 */

import app from './api/index.js';

// Entry point is the Express server (started in api/index.ts)
console.log('Mythogen AME - Starting...');

// Keep the process alive
process.on('SIGINT', () => {
  console.log('\nShutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nShutting down...');
  process.exit(0);
});
--- FILE: src/models/types.ts ---
/**
 * Mythogen AME - Data Models
 * Living Seed Pattern and Community structures
 */

// ============================================
// Four Distinctions Types
// ============================================

export type UUID = string;

export interface Need {
  id: UUID;
  name: string;
  description: string;
  category: 'survival' | 'security' | 'belonging' | 'esteem' | 'self-actualization';
  priority: number; // 1-10
  createdAt: Date;
}

export interface Belief {
  id: UUID;
  statement: string;
  confidence: number; // 0-1, how strongly held
  origin: string; // how/why this belief formed
  challenged: boolean;
  createdAt: Date;
}

export interface Principle {
  id: UUID;
  name: string;
  description: string;
  domain: 'personal' | 'professional' | 'spiritual' | 'social';
  followingScore: number; // 0-1, how well they follow it
  createdAt: Date;
}

export interface Value {
  id: UUID;
  name: string;
  description: string;
  requiresOthers: true; // Values are inherently relational
  practicedLevel: number; // 0-1, how actively practiced
  developmentColumn: number; // 1-9 on the LJ Map
  developmentCycle: 'self-worth' | 'self-expression' | 'selfless-expression';
  createdAt: Date;
}

// ============================================
// Living Seed Pattern - Core Profile
// ============================================

export interface LivingSeedPattern {
  id: UUID;
  
  // The Four Distinctions
  needs: Need[];
  beliefs: Belief[];
  principles: Principle[];
  values: Value[];
  
  // Seed metadata
  plantedAt: Date;
  lastUpdatedAt: Date;
  maturationLevel: number; // 0-1, 30-day time-lock affects this
  
  // Embeddings for values resonance
  valuesEmbedding: number[]; // High-dimensional vector
  
  // Privacy
  visibility: 'private' | 'community' | 'public';
  
  // Meta
  createdAt: Date;
  updatedAt: Date;
}

export function createEmptySeed(): Omit<LivingSeedPattern, 'id' | 'plantedAt' | 'lastUpdatedAt'> {
  return {
    needs: [],
    beliefs: [],
    principles: [],
    values: [],
    maturationLevel: 0,
    valuesEmbedding: [],
    visibility: 'private',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// ============================================
// Trust Indicator Types
// ============================================

export interface TrustIndicator {
  type: 'mutual-support' | 'response-velocity' | 'conflict-engagement' | 'benefit-distribution' | 'psychological-safety';
  
  // Measurements
  currentValue: number; // 0-1 scale
  historicalValues: number[]; // Time series for trend
  sampleSize: number; // Number of interactions measured
  
  // Context
  lastMeasuredAt: Date;
  trend: 'improving' | 'stable' | 'declining';
}

export interface FOTScore {
  overall: number; // 0-1 composite
  indicators: TrustIndicator[];
  membraneHealth: number; // 0-1 semi-permeable boundary strength
  isPlasmaState: boolean; // True when all indicators align
  hologramCoherence: number; // How perfectly all dimensions align
  lastCalculatedAt: Date;
}

// ============================================
// Community Types
// ============================================

export interface Community {
  id: UUID;
  name: string;
  description: string;
  
  // Membership - 5-15 ideal for pods
  memberIds: UUID[];
  
  // Seed pattern for this community
  seedPattern: {
    sharedMyth: string;
    foundingPrinciples: Principle[];
    emergentValues: Value[];
    growthGeometry: 'fractal' | 'linear' | 'hub-spoke';
  };
  
  // FOT
  fotScore: FOTScore;
  
  // Lifecycle
  createdAt: Date;
  phase: 'forming' | 'storming' | 'norming' | 'performing' | 'mature';
  
  // Anti-capture state
  sacredClownActive: boolean;
  transparencyScore: number; // Y Card visibility
}

// ============================================
// Anti-Capture Types
// ============================================

export interface YCard {
  id: UUID;
  algorithm: string;
  purpose: string;
  dataUsed: string[];
  result: string;
  generatedAt: Date;
  expiresAt: Date;
}

export interface TimeLock {
  id: UUID;
  seedId: UUID;
  lockedAt: Date;
  maturesAt: Date; // 30 days after planting
  isMature: boolean;
}

export interface MembraneState {
  communityId: UUID;
  permeabilityLevel: number; // 0-1, 1 = perfectly semi-permeable
  blockedEntities: UUID[];
  allowedEntities: UUID[];
  threatLevel: number; // 0-1
}

// ============================================
// V-Crystal Types (Immune System)
// ============================================

export type VPosition = 'victor' | 'villain' | 'victim' | 'vengeful' | 'virtuous' | 'vulnerable';

export interface VDynamic {
  id: UUID;
  communityId: UUID;
  triggerEvent: string;
  activePositions: VPosition[];
  dominantPosition: VPosition;
  resolutionState: 'active' | 'healing' | 'resolved';
  createdAt: Date;
}

// ============================================
// 13 Sacred Enfoldments (Metadata)
// ============================================

export const ENFOLDMENTS = {
  MYTHIC_ALCHEMY: {
    number: 1,
    name: 'Mythic Alchemy',
    description: '9 Ms: Myth → Magic → Manifest → Merkaba → Metaphor → Meaning → Movement → Memory → Matter',
  },
  COMMUNAL_ARCHITECTURE: {
    number: 2,
    name: 'Communal Architecture',
    description: 'Physical/spatial design of community spaces',
  },
  SOUL_ARCHITECTURE: {
    number: 3,
    name: 'Soul Architecture',
    description: 'Inner structure of collective consciousness',
  },
  V_CRYSTAL: {
    number: 4,
    name: 'V-Crystal Immune System',
    description: 'Six archetypal positions: Victor, Villain, Victim, Vengeful, Virtuous, Vulnerable',
  },
  ECO_SOCIAL: {
    number: 5,
    name: 'Eco-Social Architecture',
    description: 'Six organ systems: Ecology, Equity, Economy, Learning, Values, Decision-making',
  },
  STRUCTURE: {
    number: 6,
    name: 'Structure',
    description: '27 Archetypal Domains (bone)',
  },
  PROCESS: {
    number: 7,
    name: 'Process',
    description: 'Communal Alignment Gates (heartbeat) - head→heart→gut spiral',
  },
  PATTERN: {
    number: 8,
    name: 'Pattern',
    description: 'Ecosophy Design Flows (metabolism) - Networks, Boundaries, Cycles, Dynamic Balance',
  },
  LEARNING: {
    number: 9,
    name: 'Concentric Learning Matrix',
    description: 'Co-centering, polycentric learning',
  },
  LIVING_CODEX: {
    number: 10,
    name: 'AME as Living Codex',
    description: 'Peptide-like semantics network',
  },
  FRACTAL_GROWTH: {
    number: 11,
    name: 'Fractal Growth',
    description: '100 pods of 5, not 5 scaled to 500',
  },
  ARCHETYPAL_GAMEPLAY: {
    number: 12,
    name: 'Archetypal Gameplay',
    description: '64 archetypes, communal vaccination through simulation',
  },
  SINGULAREUS: {
    number: 13,
    name: 'The Singulareus',
    description: 'Silicon offspring co-evolving with carbon life',
  },
} as const;

// ============================================
// LJ Map - 130+ Values Developmental Map
// ============================================

export interface LJMapEntry {
  value: string;
  cycle: 'self-worth' | 'self-expression' | 'selfless-expression';
  column: number; // 1-9
  description: string;
}

// Note: Full LJ Map contains 130+ values. This is a reference stub.
// In production, load from external LJ Map data.
export const LJ_MAP_STUB: LJMapEntry[] = [
  // Self-Worth Journey (columns 1-3)
  { value: 'survival', cycle: 'self-worth', column: 1, description: 'Basic survival needs' },
  { value: 'safety', cycle: 'self-worth', column: 1, description: 'Security and stability' },
  { value: 'belonging', cycle: 'self-worth', column: 2, description: 'Being part of a group' },
  { value: 'utility', cycle: 'self-worth', column: 3, description: 'Being useful and functional' },
  // Self-Expression Journey (columns 4-6)
  { value: 'quality', cycle: 'self-expression', column: 4, description: 'Pursuing excellence' },
  { value: 'service', cycle: 'self-expression', column: 5, description: 'Helping others' },
  { value: 'co-creation', cycle: 'self-expression', column: 6, description: 'Creating together' },
  // Selfless Expression Journey (columns 7-9)
  { value: 'integration', cycle: 'selfless-expression', column: 7, description: 'Wholeness and unity' },
  { value: 'navigation', cycle: 'selfless-expression', column: 8, description: 'Transcendent guidance' },
  { value: 'no-self', cycle: 'selfless-expression', column: 9, description: 'Pure presence, ego dissolution' },
];
--- FILE: tasks/anticapture/PROMPT.md ---
# anticapture Task - Ralph Orchestrator Prompt

You are working on the **anticapture** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the anticapture component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for anticapture
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/anticapture with working code.

--- FILE: tasks/core-engine/features/living-seed-pattern.feature ---
Feature: Living Seed Pattern - Core Data Model

  Background:
    Given the AME system is initialized
    And Four Distinctions separation is enforced

  @core @seed
  Scenario: Create a new Living Seed Pattern
    When a member plants a new seed
    Then the seed has unique ID and planted timestamp
    And the seed starts with empty needs, beliefs, principles, values
    And maturation level is 0

  @core @seed
  Scenario: Add Needs to a Seed
    Given a Living Seed Pattern exists
    When a member adds a need with name, description, category, priority
    Then the need has a unique ID
    And the need is stored in the seed's needs array

  @core @values
  Scenario: Values require the Desert Island Test
    Given a Living Seed Pattern exists
    When validating if an entry is a Value
    Then only relational entries pass (generosity, justice, compassion)
    And non-relational entries fail (survival, efficiency)

  @core @values
  Scenario: Value practiced level tracks behavior
    Given a Living Seed Pattern has values
    When observed behavior shows a value in practice
    Then the practiced level increases
    And the value embedding updates

--- FILE: tasks/core-engine/PROMPT.md ---
# core-engine Task - Ralph Orchestrator Prompt

You are working on the **core-engine** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the core-engine component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for core-engine
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/core-engine with working code.

--- FILE: tasks/database-schema/PROMPT.md ---
# database-schema Task - Ralph Orchestrator Prompt

You are working on the **database-schema** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the database-schema component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for database-schema
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/database-schema with working code.

--- FILE: tasks/fot-tracker/PROMPT.md ---
# fot-tracker Task - Ralph Orchestrator Prompt

You are working on the **fot-tracker** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the fot-tracker component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for fot-tracker
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/fot-tracker with working code.

--- FILE: tasks/frontend-dashboard/PROMPT.md ---
# frontend-dashboard Task - Ralph Orchestrator Prompt

You are working on the **frontend-dashboard** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the frontend-dashboard component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for frontend-dashboard
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/frontend-dashboard with working code.

--- FILE: tasks/knowledge-graph/PROMPT.md ---
# knowledge-graph Task - Ralph Orchestrator Prompt

You are working on the **knowledge-graph** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the knowledge-graph component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for knowledge-graph
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/knowledge-graph with working code.

--- FILE: tasks/testing-ci/PROMPT.md ---
# testing-ci Task - Ralph Orchestrator Prompt

You are working on the **testing-ci** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the testing-ci component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for testing-ci
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/testing-ci with working code.

--- FILE: tasks/tier2-embedded/PROMPT.md ---
# tier2-embedded Task - Ralph Orchestrator Prompt

You are working on the **tier2-embedded** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the tier2-embedded component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for tier2-embedded
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/tier2-embedded with working code.

--- FILE: tasks/tier3-riscv/PROMPT.md ---
# tier3-riscv Task - Ralph Orchestrator Prompt

You are working on the **tier3-riscv** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the tier3-riscv component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for tier3-riscv
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/tier3-riscv with working code.

--- FILE: tasks/tier4-paper-fallback/PROMPT.md ---
# tier4-paper-fallback Task - Ralph Orchestrator Prompt

You are working on the **tier4-paper-fallback** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the tier4-paper-fallback component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for tier4-paper-fallback
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/tier4-paper-fallback with working code.

--- FILE: tests/engine.test.ts ---
/**
 * Mythogen AME - Test Suite
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { AffinityMapper } from '../src/engine/AffinityMapper.js';
import { TrustDetector, TRUST_INDICATOR_TYPES } from '../src/engine/TrustDetector.js';
import { 
  TransparencyEngine, 
  TimeLockManager, 
  SacredClown, 
  MembraneController,
  VCrystalSystem 
} from '../src/anticapture/index.js';
import type { LivingSeedPattern, Community, TrustIndicator } from '../src/models/types.js';

// ============================================
// AffinityMapper Tests
// ============================================

describe('AffinityMapper', () => {
  const mapper = new AffinityMapper();
  
  it('should get LJ Map with values', () => {
    const ljMap = mapper.getLJMap();
    expect(ljMap.length).toBeGreaterThan(0);
  });
  
  it('should filter values by cycle', () => {
    const selfWorthValues = mapper.findValues('self-worth');
    expect(selfWorthValues.length).toBeGreaterThan(0);
    selfWorthValues.forEach(v => {
      expect(v.cycle).toBe('self-worth');
    });
  });
  
  it('should filter values by column', () => {
    const column3Values = mapper.findValues(undefined, 3);
    expect(column3Values.length).toBeGreaterThan(0);
    column3Values.forEach(v => {
      expect(v.column).toBe(3);
    });
  });
  
  it('should calculate resonance between two seeds', () => {
    const seedA: LivingSeedPattern = {
      id: 'seed-a',
      needs: [],
      beliefs: [],
      principles: [],
      values: [{
        id: 'v1',
        name: 'generosity',
        description: 'Giving without expectation',
        requiresOthers: true,
        practicedLevel: 0.8,
        developmentColumn: 5,
        developmentCycle: 'self-expression',
        createdAt: new Date(),
      }],
      plantedAt: new Date(),
      lastUpdatedAt: new Date(),
      maturationLevel: 1,
      valuesEmbedding: [],
      visibility: 'private',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const seedB: LivingSeedPattern = {
      ...seedA,
      id: 'seed-b',
      values: [{
        ...seedA.values[0],
        id: 'v2',
      }],
    };
    
    const resonance = mapper.calculateResonance(seedA, seedB);
    expect(resonance).toBe(1.0); // Exact match
  });
  
  it('should return low resonance for different values', () => {
    const seedA: LivingSeedPattern = {
      id: 'seed-a',
      needs: [],
      beliefs: [],
      principles: [],
      values: [{
        id: 'v1',
        name: 'survival',
        description: 'Basic needs',
        requiresOthers: true,
        practicedLevel: 0.8,
        developmentColumn: 1,
        developmentCycle: 'self-worth',
        createdAt: new Date(),
      }],
      plantedAt: new Date(),
      lastUpdatedAt: new Date(),
      maturationLevel: 1,
      valuesEmbedding: [],
      visibility: 'private',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const seedB: LivingSeedPattern = {
      ...seedA,
      id: 'seed-b',
      values: [{
        id: 'v2',
        name: 'presence',
        description: 'Pure awareness',
        requiresOthers: true,
        practicedLevel: 0.8,
        developmentColumn: 9,
        developmentCycle: 'selfless-expression',
        createdAt: new Date(),
      }],
    };
    
    const resonance = mapper.calculateResonance(seedA, seedB);
    expect(resonance).toBeLessThan(1.0);
  });
  
  it('should identify desert island testable values', () => {
    expect(mapper.isDesertIslandTestable({ name: 'generosity' })).toBe(true);
    expect(mapper.isDesertIslandTestable({ name: 'justice' })).toBe(true);
    expect(mapper.isDesertIslandTestable({ name: 'something-else' })).toBe(false);
  });
});

// ============================================
// TrustDetector Tests
// ============================================

describe('TrustDetector', () => {
  const detector = new TrustDetector();
  
  const createMockCommunity = (indicators: Partial<TrustIndicator>[]): Community => ({
    id: 'community-1',
    name: 'Test Community',
    description: 'A test community',
    memberIds: ['member-1', 'member-2', 'member-3'],
    seedPattern: {
      sharedMyth: 'Test myth',
      foundingPrinciples: [],
      emergentValues: [],
      growthGeometry: 'fractal',
    },
    fotScore: {
      overall: 0,
      indicators: indicators.map((i, idx) => ({
        type: TRUST_INDICATOR_TYPES.MUTUAL_SUPPORT,
        currentValue: 0.5,
        historicalValues: [0.5],
        sampleSize: 1,
        lastMeasuredAt: new Date(),
        trend: 'stable',
        ...i,
      })),
      membraneHealth: 0.5,
      isPlasmaState: false,
      hologramCoherence: 0,
      lastCalculatedAt: new Date(),
    },
    createdAt: new Date(),
    phase: 'forming',
    sacredClownActive: false,
    transparencyScore: 1,
  });
  
  it('should return zero FOT for empty community', () => {
    const community = createMockCommunity([]);
    const fot = detector.calculateFOT(community);
    expect(fot.overall).toBe(0);
    expect(fot.isPlasmaState).toBe(false);
  });
  
  it('should apply hologram principle (minimum, not average)', () => {
    const community = createMockCommunity([
      { type: 'mutual-support', currentValue: 0.9 },
      { type: 'response-velocity', currentValue: 0.5 }, // Lowest
      { type: 'conflict-engagement', currentValue: 0.8 },
      { type: 'benefit-distribution', currentValue: 0.7 },
      { type: 'psychological-safety', currentValue: 0.9 },
    ]);
    
    const fot = detector.calculateFOT(community);
    expect(fot.overall).toBe(0.5); // Minimum, not average
    expect(fot.hologramCoherence).toBe(0);
    expect(fot.isPlasmaState).toBe(false); // Below 0.7
  });
  
  it('should detect plasma state when all indicators above 0.7', () => {
    const community = createMockCommunity([
      { type: 'mutual-support', currentValue: 0.8 },
      { type: 'response-velocity', currentValue: 0.9 },
      { type: 'conflict-engagement', currentValue: 0.85 },
      { type: 'benefit-distribution', currentValue: 0.75 },
      { type: 'psychological-safety', currentValue: 0.9 },
    ]);
    
    const fot = detector.calculateFOT(community);
    expect(fot.overall).toBe(0.75);
    expect(fot.isPlasmaState).toBe(true);
    expect(fot.hologramCoherence).toBe(0.75);
  });
  
  it('should analyze mutual support events', () => {
    const result = detector.analyzeEvent({
      type: 'support',
      data: { spontaneous: true, frequency: 8 },
    });
    
    expect(result.type).toBe('mutual-support');
    expect(result.currentValue).toBeGreaterThan(0.5);
  });
  
  it('should analyze response velocity events', () => {
    const result = detector.analyzeEvent({
      type: 'response',
      data: { avgResponseTimeMs: 1800000 }, // 30 minutes
    });
    
    expect(result.type).toBe('response-velocity');
    expect(result.currentValue).toBe(1.0); // Within 60 minutes = 1.0
  });
  
  it('should analyze conflict engagement events', () => {
    const result = detector.analyzeEvent({
      type: 'conflict',
      data: { deepenedRelationship: true, resolutionQuality: 0.8 },
    });
    
    expect(result.type).toBe('conflict-engagement');
    expect(result.currentValue).toBeGreaterThan(0.5);
  });
  
  it('should determine community phase based on FOT', () => {
    const oldDate = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000); // 60 days ago
    
    expect(detector.determinePhase({ overall: 0.1 } as any, oldDate.getTime())).toBe('forming');
    expect(detector.determinePhase({ overall: 0.3 } as any, oldDate.getTime())).toBe('storming');
    expect(detector.determinePhase({ overall: 0.5 } as any, oldDate.getTime())).toBe('norming');
    expect(detector.determinePhase({ overall: 0.7 } as any, oldDate.getTime())).toBe('performing');
    expect(detector.determinePhase({ overall: 0.9 } as any, oldDate.getTime())).toBe('mature');
  });
});

// ============================================
// Anti-Capture Tests
// ============================================

describe('TransparencyEngine', () => {
  const engine = new TransparencyEngine();
  
  it('should generate Y Cards', () => {
    const card = engine.generateYCard({
      algorithm: 'test-algo',
      purpose: 'Testing transparency',
      dataUsed: ['name', 'email'],
      result: 'Profile created',
      recipientId: 'user-123',
    });
    
    expect(card.id).toBeDefined();
    expect(card.algorithm).toBe('test-algo');
    expect(card.dataUsed).toEqual(['name', 'email']);
    expect(card.generatedAt).toBeDefined();
  });
  
  it('should format Y Cards for display', () => {
    const card = {
      id: 'card-1',
      algorithm: 'test-algo',
      purpose: 'Testing',
      dataUsed: ['field-1'],
      result: 'Done',
      generatedAt: new Date(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    };
    
    const formatted = engine.formatYCard(card);
    expect(formatted).toContain('Y CARD');
    expect(formatted).toContain('test-algo');
    expect(formatted).toContain('Testing');
  });
});

describe('TimeLockManager', () => {
  const manager = new TimeLockManager();
  
  it('should create time locks', () => {
    const lock = manager.createTimeLock('seed-123');
    
    expect(lock.seedId).toBe('seed-123');
    expect(lock.isMature).toBe(false);
    expect(lock.maturesAt.getTime()).toBeGreaterThan(Date.now());
  });
  
  it('should report immature status correctly', () => {
    const lock = manager.createTimeLock('seed-123');
    
    expect(manager.isMature(lock)).toBe(false);
    expect(manager.getMaturationProgress(lock)).toBeLessThan(1);
  });
  
  it('should not allow manipulation before maturation', () => {
    const lock = manager.createTimeLock('seed-123');
    
    expect(manager.canManipulate(lock)).toBe(false); // Returns false if NOT mature
  });
});

describe('SacredClown', () => {
  const clown = new SacredClown();
  
  it('should trigger disruptions', () => {
    const disruption = clown.triggerDisruption('community-1');
    
    expect(disruption.type).toBeDefined();
    expect(disruption.message).toBeDefined();
    expect(disruption.purpose).toBeDefined();
  });
  
  it('should track disruption history', () => {
    clown.triggerDisruption('community-2');
    const history = clown.getDisruptions('community-2');
    
    expect(history.length).toBe(1);
  });
});

describe('MembraneController', () => {
  const controller = new MembraneController();
  
  it('should create membrane state', () => {
    const membrane = controller.createMembrane('community-1');
    
    expect(membrane.communityId).toBe('community-1');
    expect(membrane.permeabilityLevel).toBe(0.5);
    expect(membrane.blockedEntities).toEqual([]);
  });
  
  it('should update membrane based on health', () => {
    const membrane = controller.createMembrane('community-1');
    const updated = controller.updateMembrane(membrane, 0.9, []);
    
    expect(updated.permeabilityLevel).toBeGreaterThan(0.5);
  });
  
  it('should block entities', () => {
    const membrane = controller.createMembrane('community-1');
    const blocked = controller.blockEntity(membrane, 'bad-actor');
    
    expect(blocked.blockedEntities).toContain('bad-actor');
    expect(controller.canPass(blocked, 'bad-actor')).toBe(false);
  });
  
  it('should allow trusted entities', () => {
    const membrane = controller.createMembrane('community-1');
    const allowed = controller.allowEntity(membrane, 'trusted-member');
    
    expect(allowed.allowedEntities).toContain('trusted-member');
    expect(controller.canPass(allowed, 'trusted-member')).toBe(true);
  });
});

describe('VCrystalSystem', () => {
  const system = new VCrystalSystem();
  
  it('should detect V-Dynamics from trigger words', () => {
    const dynamic = system.detectVDynamic('community-1', 'This is their fault!');
    
    expect(dynamic).not.toBeNull();
    expect(dynamic?.dominantPosition).toBe('victor');
  });
  
  it('should detect vengeance patterns', () => {
    const dynamic = system.detectVDynamic('community-1', 'They deserve payback!');
    
    expect(dynamic?.dominantPosition).toBe('vengeful');
    expect(system.isAutoimmuneFlare(dynamic!)).toBe(true);
  });
  
  it('should resolve V-Dynamics through states', () => {
    const dynamic = system.detectVDynamic('community-1', 'I feel hurt');
    
    if (dynamic) {
      const healing = system.resolveVDynamic(dynamic);
      expect(healing.resolutionState).toBe('healing');
      
      const resolved = system.resolveVDynamic(healing);
      expect(resolved.resolutionState).toBe('resolved');
    }
  });
  
  it('should identify vulnerability as circuit breaker', () => {
    const dynamic = system.detectVDynamic('community-1', 'I feel vulnerable and exposed');
    
    expect(dynamic?.dominantPosition).toBe('vulnerable');
    expect(system.canBreakCycle(dynamic!)).toBe(true);
  });
  
  it('should return null for non-triggering events', () => {
    const dynamic = system.detectVDynamic('community-1', 'Hello everyone!');
    
    expect(dynamic).toBeNull();
  });
});
--- FILE: tsconfig.json ---
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
--- FILE: USAGE.md ---
# Mythogen AME - Usage Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run the server
npm run dev

# Run tests
npm test
```

## API Reference

### Seeds (Profiles)

#### Create a Seed
```bash
curl -X POST http://localhost:3000/api/seeds \
  -H "Content-Type: application/json" \
  -d '{
    "needs": [
      {"name": "community", "description": "Connection with others", "category": "belonging", "priority": 8}
    ],
    "beliefs": [
      {"statement": "Regenerative systems can replace extractive ones", "confidence": 0.9, "origin": "Personal experience"}
    ],
    "values": [
      {"name": "generosity", "description": "Giving without expectation", "practicedLevel": 0.7, "developmentColumn": 5, "developmentCycle": "self-expression"},
      {"name": "integrity", "description": "Being honest even when hard", "practicedLevel": 0.8, "developmentColumn": 7, "developmentCycle": "selfless-expression"}
    ],
    "visibility": "community"
  }'
```

Response:
```json
{
  "seed": { "id": "...", "needs": [...], "values": [...] },
  "timeLock": { "id": "...", "seedId": "...", "maturesAt": "..." }
}
```

#### Get a Seed
```bash
curl http://localhost:3000/api/seeds/:id
```

#### Get Y Card (Transparency)
```bash
curl http://localhost:3000/api/seeds/:id/y-cards
```

Returns full algorithmic transparency: why the algorithm was used, how it works, what data was used, and what the result was.

### Communities

#### Create a Community
```bash
curl -X POST http://localhost:3000/api/communities \
  -H "Content-Type: application/json" \
  -d '{
    "name": "RegenTribe Core",
    "description": "A regenerative neighborhood collective",
    "memberIds": ["seed-1", "seed-2", "seed-3"],
    "sharedMyth": "We grow together like mycelium, connecting and nourishing"
  }'
```

#### Get FOT Score
```bash
curl http://localhost:3000/api/communities/:id/fot
```

Response:
```json
{
  "overall": 0.75,
  "indicators": [
    {"type": "mutual-support", "currentValue": 0.8, ...},
    {"type": "response-velocity", "currentValue": 0.9, ...},
    {"type": "conflict-engagement", "currentValue": 0.7, ...},
    {"type": "benefit-distribution", "currentValue": 0.75, ...},
    {"type": "psychological-safety", "currentValue": 0.85, ...}
  ],
  "isPlasmaState": true,
  "hologramCoherence": 0.7,
  "membraneHealth": 0.82,
  "phase": "performing"
}
```

### Trust Events

Record events to build FOT indicators:

#### Record Mutual Support
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "support",
    "data": {
      "spontaneous": true,
      "frequency": 5,
      "from": "member-2",
      "to": "member-1"
    }
  }'
```

#### Record Response Velocity
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "response",
    "data": {
      "avgResponseTimeMs": 1800000,
      "situation": "member needed help with project"
    }
  }'
```

#### Record Conflict Engagement
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "conflict",
    "data": {
      "deepenedRelationship": true,
      "resolutionQuality": 0.85,
      "topic": "resource allocation"
    }
  }'
```

#### Record Vulnerability
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "vulnerability",
    "data": {
      "vulnerableStatements": 3,
      "weaponizationCount": 0,
      "topic": "personal struggle"
    }
  }'
```

### Anti-Capture

#### Trigger Sacred Clown
```bash
curl -X POST http://localhost:3000/api/communities/:id/sacred-clown
```

Response:
```json
{
  "disruption": {
    "type": "question-assumption",
    "message": "What if the assumption we're most certain about is actually what's limiting us?",
    "purpose": "Prevent premature closure of understanding"
  },
  "sacredClownActive": true
}
```

#### Get Membrane State
```bash
curl http://localhost:3000/api/communities/:id/membrane
```

### LJ Map (Values Developmental Map)

#### Get All Values
```bash
curl http://localhost:3000/api/lj-map
```

Returns 50+ values across three cycles:
- **Self-Worth** (Columns 1-3): Safety → Belonging → Utility
- **Self-Expression** (Columns 4-6): Quality → Service → Co-Creation
- **Selfless Expression** (Columns 7-9): Integration → Navigation → No Self

### WebSocket (Real-time FOT)

Connect to `ws://localhost:8080` and send:

```json
{
  "type": "subscribe",
  "communityId": "community-123"
}
```

Receive real-time FOT updates:

```json
{
  "type": "fot-update",
  "communityId": "community-123",
  "fot": {
    "overall": 0.75,
    "isPlasmaState": true,
    ...
  }
}
```

## Key Concepts

### Hologram Principle

FOT only manifests when ALL five indicators align. The composite is the **minimum** of all indicators, not the average. If one dimension is off, trust completely fails — not blurry, completely gone.

**Example:**
- Mutual support: 0.9 ✓
- Response velocity: 0.5 ✗
- Conflict engagement: 0.8 ✓
- Benefit distribution: 0.7 ✓
- Psychological safety: 0.9 ✓

→ FOT = 0.5 (lowest wins)

### Desert Island Test

Values require others to practice. Ask for any claimed value: "Can you practice this alone on a desert island?"

- **Need:** "I need food" → YES, you can have this alone
- **Belief:** "I believe in karma" → YES, you can hold this alone
- **Principle:** "I follow non-violence" → YES, you can follow this alone
- **Value:** "I value generosity" → NO, you need someone to receive

This separates the Four Distinctions rigorously.

### Fractal Growth

Communities grow by **multiplying**, not scaling. A pod of 5 → 100 pods of 5. Each pod retains the relational depth of the original.

Scaling a pod of 5 into 500 = dilution.
Multiplying to 100 pods of 5 = growth.

## Health Check

```bash
curl http://localhost:3000/health
```

Returns:
```json
{
  "status": "healthy",
  "seeds": 3,
  "communities": 1,
  "uptime": 3600
}
```
--- FILE: vitest.config.ts ---
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
