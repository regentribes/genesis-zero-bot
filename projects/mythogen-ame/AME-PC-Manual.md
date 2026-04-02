# Affinity Mapping Engine Profiler Correlator (AME-PC)
## A Comprehensive Technical Manual
### Version 0.1.0-seed | 2026-04-01

---

# PART I: CONCEPT & PHILOSOPHY

## 1. Overview

The **Affinity Mapping Engine Profiler Correlator (AME-PC)** is a whole-systems design for sensing, measuring, and visualizing the health of regenerative communities. It operates on two primary layers:

1. **FOT Layer (Field of Trust)** — The soft dynamics of human behavior: psychological safety, trust, coherence, attunement, and openness
2. **Domain Layer (Archetypal Communities)** — The hard dynamics of community structure: 27 domains organized in 9 triads

The system correlates these layers to identify:
- **Barn Raising Opportunities** — Where community has capacity but isn't applying it
- **Decline Warnings** — Where domains may collapse due to insufficient FOT support
- **Composite Health** — A holistic measure of community vitality

---

## 2. The Four Critical Aspects

These philosophy principles are embedded in the code and design:

### 2.1 Emergent Design
The system is a **grammar, not a script**. Different communities use different parts, discover connections we never imagined.

- Community-custom metrics allowed
- Local pattern recognition enabled
- Dynamic domains (not fixed to 27)

### 2.2 Relational Mirror
The UI is a **mirror, not a monitor**. It helps communities see their own patterns, not telling them what's wrong.

- Reflective language ("here's what we see")
- No comparative rankings
- Generative questions over conclusions

### 2.3 Self-Limiting Architecture
Communities can disable parts that become coercive. Data belongs to community, not system.

- Every layer/domain has toggle switches
- All metrics visible and contestable
- Safeguards: no external access, aggregate over individual, consent required

### 2.4 Modular Toggle Architecture
Not monolithic — a modular relational fabric. All connection points preserved, layers can grow independently.

- Modules: FOT, Domain, Correlation, Triad, Sensing
- Each with status: active/developing/planned/disabled
- Connection points always preserved

---

# PART II: FIELD OF TRUST (FOT) LAYER

## 3. FOT Indicators

The FOT layer measures 5 core indicators of community health:

| Indicator | Description | What it measures |
|-----------|-------------|------------------|
| Psychological Safety | Do people feel safe to speak up, be vulnerable? | Comfort with risk, speaking truth |
| Trust | Do people extend trust to others, share authentically? | Reliability, vulnerability |
| Coherence | Are actions aligned with values? | Consistency, integrity |
| Attunement | Do people notice and respond to others? | Awareness, responsiveness |
| Openness | Are people exploring, sharing novel perspectives? | Curiosity, innovation |

## 4. TTGM Geometry (True Geometric Matrix)

The FOT is not metaphorical — it is the **actual geometric configuration** of a spherical triangular mesh (tetrahedral lattice) with toroidal flow dynamics:

- **4 vectors**: YOD (Source), HE (Recept), VAV (Flow), HE+ (Return)
- **Geometry**: Sphere of triangles, edges channel energy
- **Flow**: Toroidal circulation through the mesh
- **Hologram Principle**: FOT composite = MIN(indicators), NOT average. If ANY indicator is low, the whole field weakens.

### TTGM Visualization
```
    [YOD] ──
          ↙ ↘
   [HE] ─── [VAV]
          ↖ ↗
    [HE+] ──
```

## 5. FOT Sensing Variables

### Signal Types (14 categories)
| Signal Type | Source | Indicators Affected |
|-------------|--------|---------------------|
| message_sent | chat | Safety, Coherence, Openness |
| affinity_witnessed | affinity | Trust, Attunement |
| support_offered | action | Safety, Attunement |
| conflict_detected | action | Safety (-), Trust (-) |
| presence_changed | presence | Coherence, Openness |
| silence_duration | presence | Safety (-) |
| energy_shift | action | Coherence (-) |
| language_pattern | content | Trust, Attunement |
| engagement_pattern | content | Coherence, Attunement |

---

# PART III: ARCHETYPAL DOMAINS LAYER

## 6. The 27 Domains (9 Triads)

### 6.1 Nucleic Center Triad
- d1: Spirituality and Religion
- d2: Science and Physics
- d3: Arts and Ritual

### 6.2 Nourishment Triad
- d4: Resources and Nature
- d5: Energy and Power
- d6: Food and Agriculture

### 6.3 Daily Living Triad
- d7: Habitat and Building
- d8: Transportation and Mobility
- d9: Neighborhoods and Families

### 6.4 Cultural Advancement Triad
- d10: Learning and Education
- d11: Commerce and Business
- d12: Governance and Government

### 6.5 Integrating Confluences Triad
- d13: Wellness and Medicine
- d14: Populations and Diversity
- d15: Recreation and Play

### 6.6 Functional Congruence Triad
- d16: Models and Currencies
- d17: Tools and Weapons
- d18: Emergence and Emergency

### 6.7 Trauma Integration Triad
- d19: Master and Slave
- d20: War and Peace
- d21: Individual and Collective

### 6.8 Inter-Relational Triad
- d22: Media and Communications
- d23: Language and Metaphor
- d24: Indigenous Wisdom and Ancestral Healing

### 6.9 Omnipresence Triad
- d25: Universal Ecology and Personal Ideology
- d26: Complexity and Simplicity
- d27: Consciousness and Awareness

---

## 7. Domain Sensing Variables (14 Categories)

Each domain tracks signals across 14 categories:

| Category | What it measures | Example signals |
|----------|------------------|-----------------|
| Engagement | Participation | activeMembers, attendanceRate, volunteerHours |
| Activity | Output | projectsStarted, outputsProduced |
| Affinity | AME network | clusterDensity, affinityStrength |
| Sentiment | Feeling | averageSentiment, pulseSurveyScore |
| Repair | Conflicts | conflictReports, restorativeCircles |
| Health | Wellbeing | wellbeingIndex, energyLevel |
| Diversity | Variety | ageDiversity, skillDiversity |
| CrossDomain | Collaboration | collaborationsInitiated, depth |
| MatterDensity | Formalization | sharedAssets, legalStructures |
| Governance | Decision-making | alignmentGatePassRate, decisionLatency |
| Learning | CLM/education | learningEvents, apprenticeships |
| Economic | Resource flows | resourceInflows, localTransactions |
| Ecological | Physical world | foodYield, soilHealth, biodiversity |
| Trust | Relational | networkDensity, reciprocityRate |

---

## 8. Domain-Specific Secondary Metrics (378 total)

Each of the 27 domains has:
- **4 Primary signals** — most critical metrics
- **10 Secondary signals** — additional indicators
- **4 Health indicators** — what health looks like
- **4 Warning signs** — what problems look like
- **Measurement frequency** — how often to measure

Example (d12: Governance):
- Primary: decision_participation_rate, alignment_gate_pass_rate, governance_satisfaction_score, policy_implementation_rate
- Secondary: meeting_attendance, proposal_submission_count, role_rotation_achieved, conflict_resolution_time, transparency_index, accountability_mechanisms, constitutional_updates, delegate_representation, consent_achievement_time, governance_trainings_held

---

# PART IV: CROSS-LAYER CORRELATION

## 9. Correlation Engine

### 9.1 How FOT maps to Domains

| FOT Indicator | Affected Triads | Mechanism |
|---------------|-----------------|------------|
| Psychological Safety | Nucleic Center, Trauma Integration, Integrating Confluences | Cannot engage in sacred practice, trauma work, wellness without feeling safe |
| Trust | Cultural Advancement, Daily Living, Nourishment | Cannot share resources, govern, build habitat without trust |
| Coherence | Functional Congruence, Inter-Relational, Omnipresence | Complex systems, communication, existential matters require coherent action |
| Attunement | Integrating Confluences, Nourishment, Inter-Relational | Cannot care for wellness, respect nature, communicate without attunement |
| Openness | Nucleic Center, Functional Congruence, Omnipresence | Science, innovation, consciousness require openness |

### 9.2 Barn Raising Opportunities
Where FOT predicts health but domain is weak = community has capacity but isn't applying it.

### 9.3 Decline Warnings
Where domain is stronger than FOT predicts = might collapse when FOT catches up.

### 9.4 Triad Cross-Talk
How triads influence each other:
- Trauma Integration → Nucleic Center: Unresolved trauma blocks spiritual practice
- Cultural Advancement → Functional Congruence: Learning enables tool development
- Nourishment → Daily Living: Resources enable habitat

---

## 10. Composite Health Score

**Formula:**
```
Composite = (FOT × 35%) + (Alignment × 30%) + (Triad Health × 35%)
```

Where:
- FOT = FOT composite (MIN of 5 indicators)
- Alignment = 1 - averageDivergence (how well FOT predictions match reality)
- Triad Health = MIN of all 9 triads (hologram at triad level)

---

# PART V: MODULE ARCHITECTURE

## 11. System Modules

| Module | Status | Purpose |
|--------|--------|---------|
| Sensing | developing | Processes raw signals from chat/actions |
| FOT | developing | Computes indicators, TTGM geometry |
| Domain | developing | Tracks 27 domains across 14 categories |
| Correlation | developing | Maps FOT ↔ Domain relationships |
| Triad | developing | Analyzes cross-triad influences |

## 12. Connection Points (Preserved)

| From | To | Protocol | Preserved |
|------|-----|----------|-----------|
| Sensing | FOT | async | Yes |
| Sensing | Domain | async | Yes |
| FOT | Domain | async | Yes |
| Domain | Triad | direct | Yes |
| Correlation | Correlation | event | Yes |

## 13. Toggle Architecture

Each module and domain can be independently enabled/disabled:
- FOT Layer: toggle
- Domain Layer: toggle
- Correlation Engine: toggle
- Triad Network: toggle
- Individual Domains: 27 toggles

---

# PART VI: PROCESS FLOW

## 14. Data Flow Pipeline

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              RAW INPUTS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Chat/Message Events    │  Domain Activity   │  Manual Entry    │ External │
│  ───────────────────── │  ────────────────  │  ─────────────── │ ──────── │
│  - message_sent        │  - project_started │  - pulse_survey  │  - API   │
│  - affinity_witnessed  │  - ritual_attended │  - domain_rating │  - Sensor│
│  - support_offered     │  - meeting_held   │  - manual_metric │  - IoT   │
└──────────┬──────────────┴────────┬───────────┴────────┬──────────┴──────────┘
           │                      │                    │
           ▼                      ▼                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SENSING ENGINE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Signal Processing → Normalization → Category Routing                       │
│  - BehavioralSignals → DomainSignals                                        │
└──────────┬─────────────────────────┬────────────────────────────────────────┘
           │                         │
           ▼                         ▼
┌─────────────────────┐    ┌──────────────────────────────────────────────────┐
│    FOT ENGINE      │    │              DOMAIN ENGINE                       │
├─────────────────────┤    ├──────────────────────────────────────────────────┤
│ - Process signals  │    │ - Process 14 signal categories                   │
│ - Update indicators│    │ - Calculate domain health (14 categories weighted)│
│ - Compute TTGM     │    │ - Compute triad aggregate (MIN, hologram)         │
│ - Emit FOT state   │    │ - Emit domain states                            │
└────────┬────────────┘    └────────────────────┬─────────────────────────────┘
         │                                    │
         └──────────────┬─────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      CORRELATION ENGINE                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  1. Get FOT state (indicators, composite, TTGM)                             │
│  2. Get Domain state (27 domains, 9 triads)                                 │
│  3. For each FOT indicator → affected triads                               │
│  4. Calculate: expected vs actual health                                   │
│  5. Identify divergence (positive = opportunity, negative = warning)      │
│  6. Calculate composite health                                              │
│  7. Find Barn Raising opportunities                                         │
│  8. Find Decline warnings                                                    │
│  9. Calculate triad cross-talk                                               │
└──────────────────────────┬──────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      AME PROFILER REPORT                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  {                                                                         │
│    compositeHealth: 0.72,                                                  │
│    fotLayer: { composite: 0.75, indicators: [...], ttgm: {...} },        │
│    domainLayer: { triads: [...], weakestTriad: '...', strongestTriad: '...'│
│    crossLayer: { correlations: [...], alignment: 0.85 },                 │
│    opportunities: [...],                                                  │
│    warnings: [...],                                                         │
│    influences: [...]                                                       │
│  }                                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 15. UI Views

| View | Purpose | Data Shown |
|------|---------|------------|
| Summary | Composite health at a glance | Overall %, FOT/Domain/Alignment bars |
| FOT Explorer | Drill into indicators | 5 indicators, TTGM geometry, trends |
| Domain Map | 27 domains in triads | Grid with health colors per domain |
| Triad Focus | One triad in detail | 3 domains + cross-triad influences |
| Correlations | FOT ↔ Domain mappings | All correlations with divergence |
| Barn Raising | Action opportunities | Prioritized list with suggested actions |
| Timeline | Historical trends | Health over time |
| Single Domain | One domain deep-dive | 14 signal categories + 378 metrics |

---

# PART VII: FILE STRUCTURE

## 16. All Files in Design

| File | Purpose |
|------|---------|
| `README.md` | Overview + architecture |
| `schema.sql` | SurrealDB schema |
| `api.rs` | Axum REST API |
| `sacred-geometry.ts` | TTGM math |
| `ttgm-geometry.ts` | True geometric matrix (spherical mesh) |
| `ttgm-integration.ts` | Wiring guide |
| `ttgm-visualization.tsx` | 2D React components |
| `ttgm-3d.tsx` | 3D Three.js + convergence |
| `sensing-engine.ts` | FOT sensing engine |
| `domain-sensing.ts` | Domain sensing (14 categories) |
| `domain-secondary-metrics.ts` | 27 domains × 14 metrics each |
| `two-layer-correlation.ts` | Correlation framework |
| `ame-correlation-framework.ts` | Full correlation engine |
| `websocket.ts` | Real-time layer |
| `lens-full.tsx` | Full UI mockup |
| `ame-philosophy-config.ts` | Philosophy + toggle architecture |
| **AME-PC-Manual.md** | This document |

---

# PART VIII: GLOSSARY

| Term | Definition |
|------|------------|
| AME | Affinity Mapping Engine |
| AME-PC | Affinity Mapping Engine Profiler Correlator |
| FOT | Field of Trust — soft dynamics of community health |
| TTGM | True Geometric Matrix — spherical triangular mesh |
| Hologram Principle | Composite = MIN(indicators), not average |
| Triad | Group of 3 related domains (9 total triads) |
| Barn Raising | Opportunity where capacity exists but isn't applied |
| Convergence | Where individual need meets collective emergence |
| Sacred Responsibility | Duty to connect weak vector with strong |
| Domain | One of 27 archetypal community areas |
| Signal | Raw data point from behavior or activity |
| Indicator | Processed metric (e.g., "Trust = 0.7") |

---

*This manual represents the complete seed pattern for the AME-PC system. All modules, connections, and philosophies are documented. Development can proceed layer-by-layer while maintaining all relationships.*

**Version:** 0.1.0-seed  
**Date:** 2026-04-01  
**Philosophy:** Grammar, not script. Mirror, not monitor. Toggle, not monolithic.  
**Status:** Design complete, development commenced.

🌿⚡