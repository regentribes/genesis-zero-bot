# Three-Skill Integration Guide
## Knowledge Extraction, System Specification, Nested Meaning

---

## USAGE SCENARIOS AND TRIGGER PHRASES

### SKILL 1: knowledge-extraction

**Purpose:** Transform any input into self-contained knowledge fragments (extract meaning)

**Triggers:**
- extract meaning
- make sense of
- distill
- analyze
- summarize
- key points
- (bare input without trigger also processes)

**Input:** Text, document, conversation, concept statement

**Output:** STE100-compliant fragments in plain prose, each independent and self-contained

**Example:**
User: "Extract meaning from: The tree provides oxygen while absorbing carbon dioxide."

Output fragment: A living tree breathes in what animals exhale and breathes out what animals need. The oxygen released sustains breathing life while the carbon absorbed becomes stored biomass. This exchange demonstrates mutual dependency between plant and animal kingdoms.

---

### SKILL 2: system-specification

**Purpose:** Transform features and problems into system specification fragments

**Triggers:**
- specify
- create spec
- write specification
- requirement
- system spec
- feature spec
- (bare description without trigger also processes)

**Input:** Feature description, problem statement, system requirements

**Output:** STE100-compliant specification fragments in plain prose, implementation-ready

**Example:**
User: "Specify authentication system for community platform."

Output fragment: A member authenticates using verified credentials issued by trusted community anchors. The system validates identity against the community registry before granting access. Failed authentication triggers limited retry with escalating delay. Session tokens expire after seven days of inactivity.

---

### SKILL 3: nested-meaning

**Purpose:** Transform input into multi-level meaning fragments (four levels)

**Triggers:**
- nested meaning
- four levels
- context-meaning
- multiple interpretations
- diverse viewpoints
- tetramorph
- (bare input without trigger also processes)

**Input:** Text, document, concept, statement requiring multi-perspective analysis

**Output:** STE100-compliant fragments across literal/allegorical/historical-linguistic/philosophical levels, plain prose only

**Example:**
User: "Apply nested meaning to: Technology in service to life."

Output (Level 1 - Literal): Technology serves life as tool serving organism. The relationship flows from technology toward life. Service implies separate entities in relationship.

Output (Level 2 - Allegorical): Life receives technology as gardener receives seed. The seed carries genetic information determining future growth. Technology carries creator consciousness determining future emergence.

Output (Level 3 - Historical-Linguistic): The word service derives from economic exchange vocabulary. Modern usage extends service from employment to utility. The phrase represents industrial-age worldview extending into digital age.

Output (Level 4 - Philosophy of Meaning): What is technology? What is life? The question assumes separation. The answer reveals consciousness of questioner. Language creates the separation language then attempts to bridge.

---

## CROSS-FORMAT COMPATIBILITY (Internal)

Each skill maintains internal cross-format compatibility without exposing in output:

| Format | Purpose | Exposure |
|--------|---------|----------|
| **STE100** | Human-readable prose | Primary output |
| **MeTTa** | Pattern matching, semantic structure | Internal representation |
| **JSON-LD** | Linked data, graph connections | Internal representation |
| **Bliss** | Symbol indicators (matter/energy/value) | Internal representation |

The STE100 prose is semantically equivalent to what MeTTa/JSON-LD/Bliss would express. Cross-parsing is possible because each fragment encodes the same meaning in STE100 that the other formats would capture structurally.

---

## SIMULATED APPLICATION

### SCENARIO: Document about regenerative community governance

**Input:**
"Regenerative communities require distributed governance with rotating leadership, transparent resource allocation, and conflict resolution mechanisms that preserve relationship while addressing disputes."

---

**knowledge-extraction output:**

A regenerative community distributes decision-making authority across rotating roles rather than concentrating power in permanent positions. Each member serves as leader for defined term then returns to participant role. Resource allocation remains visible to all community members through shared tracking systems. Disputes arise naturally in human groups; resolution processes prioritize preserving working relationships while fairly addressing the specific conflict.

---

**system-specification output:**

The governance system allocates decision authority to rotating roles with term durations of three to six months. A member currently serving as decision-maker cannot hold that role for consecutive terms. Resource tracking system publishes all allocations in real-time accessible format. Conflict resolution begins with private conversation between parties, escalates to neutral mediator if unresolved, reaches community circle only when both parties agree. The system produces written outcome documentation preserving relationship context for future reference.

---

**nested-meaning output (Level 1 - Literal):**

Distributed governance places decision authority in multiple roles rather than single position. Rotation prevents power concentration while enabling broad participation. Transparent allocation allows community oversight of resource flows. Conflict mechanisms address disputes while maintaining social fabric.

**nested-meaning output (Level 2 - Allegorical):**

Rotating leadership mirrors natural cycles of seasons. Power held too long creates stagnation like standing water breeds disease. Transparent resource flows mirror血液循环 in living organism. Conflict resolution preserving relationship mirrors wound healing leaving scar stronger than original tissue.

**nested-meaning output (Level 3 - Historical-Linguistic):**

Distributed governance language emerges from cooperative organizational theory. Rotation derives from agricultural harvest rotation preventing soil depletion. Transparency inherits from open-source software movement vocabulary. Conflict resolution language draws from mediation and restorative justice frameworks.

**nested-meaning output (Level 4 - Philosophy of Meaning):**

What is governance? What is community? The questions assume community exists separate from governance. The answers create what they describe. Language of governance creates the governed. The choice to describe community as requiring governance creates that necessity. Alternative language might describe community as self-organizing where coordination emerges without imposed structure.

---

## SUMMARY: When to Use Each Skill

| Skill | Use When | Output Character |
|-------|----------|------------------|
| **knowledge-extraction** | You have information and want key knowledge fragments | What the information means |
| **system-specification** | You have requirements and want implementation specs | How to build it |
| **nested-meaning** | You have text/concept and want multi-level interpretation | What it means at different depths |

All three accept arbitrary input, output STE100-compliant plain prose, maintain internal cross-format compatibility.