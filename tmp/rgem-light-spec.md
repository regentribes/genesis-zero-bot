# RegenTribe RGEM-Light Technical Spec

## Overview

**Option B: Lightweight RGEM Adaptation**

Quick-start approach: Use RGEM dimensions as a structural checklist for existing knowledge graph, with prompt engineering to map content rather than building full KRC pipeline.

---

## Current State

- **Knowledge Graph:** SurrealDB (`semantic_graph/main`)
- **Schema:** Concepts, Documents, Relations (custom NARS-style)
- **Ingestion:** Manual + Kreuzberg extraction
- **Query:** Semantic similarity search

---

## Target State (RGEM-Light)

### Schema Extensions

Add 5 new optional fields to existing tables:

```sql
-- Extend concepts table
ALTER TABLE concept ADD FIELD rgem_ubt TYPE option<string>;      -- Energy|Time|Space|Matter|Intelligence
ALTER TABLE concept ADD FIELD rgem_st TYPE option<string>;       -- Location|Endeavor|Performer|Function|Activity|Resource
ALTER TABLE concept ADD FIELD rgem_rt TYPE option<string>;       -- Equivalence|Containment|Categorization|Sequence|Version|Variance|Descriptive
ALTER TABLE concept ADD FIELD rgem_als TYPE option<string>;    -- Concept|Request|Authorize|Allocate|Procure|Deploy|Operate
ALTER TABLE concept ADD FIELD rgem_asr TYPE option<string>;     -- Performer|Customer|Supplier|Authority|Partner|Public

-- Extend documents table
ALTER TABLE document ADD FIELD rgem_ubt TYPE option<string>;
ALTER TABLE document ADD FIELD rgem_st TYPE option<string>;
ALTER TABLE document ADD FIELD rgem_als TYPE option<string>;
ALTER TABLE document ADD FIELD rgem_asr TYPE option<string>;
```

### Alternative: Separate RGEM Metadata Table

```sql
DEFINE TABLE rgem_metadata SCHEMAFULL
  FLEXIBLE TYPE object
  FIELD target TYPE record<concept>
  FIELD ubt TYPE option<string>
  FIELD st TYPE option<string>
  FIELD rt TYPE option<string>
  FIELD als TYPE option<string>
  FIELD asr TYPE option<string>
  FIELD confidence TYPE float DEFAULT 1.0
  FIELD source TYPE string DEFAULT 'manual'
  FIELD created_at TYPE datetime DEFAULT time::now()
```

---

## Ingestion Pipeline (Lightweight)

### Step 1: Prompt-Based Classification

When adding new content, use LLM to classify:

```
Prompt template:
Classify this content according to RGEM dimensions:

Content: {chunk}

Choose ONE from each applicable dimension:
- UBT (Universe Base Type): Energy, Time, Space, Matter, Intelligence
- ST (Subject Type): Location, Endeavor, Performer, Function, Activity, Resource, Required Capability
- ALS (Activity Lifecycle): Concept, Request, Authorize, Allocate, Procure, Build, Deploy, Operate, Maintain
- ASR (Activity Stakeholder Role): Performer, Customer, Supplier, Authority, Partner, Contractor, Public

Output as JSON with confidence scores.
```

### Step 2: Store with Content

```json
{
  "id": "concept:abc123",
  "name": "Food Forest Project",
  "description": "Community garden implementing permaculture principles",
  "rgem": {
    "ubt": "Matter",
    "st": "Endeavor",
    "als": "Deploy",
    "asr": "Partner"
  },
  "confidence": 0.85
}
```

---

## Query Patterns

### Filter by RGEM Dimension

```sql
-- Find all active endeavors
SELECT * FROM concept 
WHERE rgem.als = "Operate" 
AND rgem.st = "Endeavor";

-- Find all resources at a location
SELECT * FROM concept 
WHERE rgem.ubt = "Matter"
AND rgem.st = "Resource";

-- Find all stakeholder activities
SELECT * FROM concept 
WHERE rgem.asr = "Partner"
AND rgem.st = "Activity";
```

### Hybrid Semantic + RGEM Search

```sql
-- Find "water" related endeavors in deploy phase
SELECT * FROM concept 
WHERE rgem.st = "Endeavor"
AND rgem.als CONTAINS ["Deploy", "Operate"]
AND math::dot(semantic_embedding, $query_embedding) > 0.7;
```

---

## Integration with Existing Tools

### Telegram Bot Commands

```
/rgem classify <message_id>  -- Classify a message
/rgem search <dimension> <value>  -- Search by RGEM
/rgem status                   -- Show RGEM coverage stats
```

### SurrealDB Functions

```sql
DEFINE FUNCTION fn::rgem_classify($content string) {
  -- Call LLM to classify (external)
};

DEFINE FUNCTION fn::rgem_summary() {
  RETURN (SELECT count() FROM concept GROUP BY rgem.als);
};
```

---

## Visualization

### Dashboard Queries

| Query | Purpose |
|-------|---------|
| `rgem.als` distribution | What stage are projects in? |
| `rgem.st` by member | Who is doing what? |
| `rgem.ubt` focus areas | What domains dominate? |
| Missing RGEM data | What needs classification? |

### 3D Force Graph Enhancement

Add RGEM as filter/color dimensions:
- Color nodes by `rgem.als` (lifecycle stage)
- Size by `rgem.st` (subject type)
- Filter by `rgem.ubt` (base type)

---

## Migration Path (B → A)

When ready for full KRC pipeline:

1. **KRC1 Adaptation**: Replace prompt classification with trained extractor
2. **Governance Layer**: Add workflow for RGEM review/approval
3. **Ontology Mapping**: Connect RGEM to external ontologies (Dublin Core, FOAF, etc.)
4. **Automation**: Auto-classify on ingestion

---

## Quick Start Checklist

- [ ] Add RGEM fields to SurrealDB schema
- [ ] Create `/rgem` bot commands
- [ ] Classify top 50 existing concepts manually
- [ ] Build dashboard queries
- [ ] Test hybrid semantic+RGEM search
- [ ] Document classification prompt

---

## Estimated Effort

| Task | Hours |
|------|-------|
| Schema changes | 1 |
| Bot commands | 2 |
| Classification prompts | 2 |
| Dashboard | 3 |
| Testing | 2 |
| **Total** | **~10 hours** |

---

## Files to Modify

- `skills/semantic-graph/graph_extract.py` — Add RGEM classification
- `skills/telegram-compose/` — Add `/rgem` commands  
- New: `skills/rgem-dashboard/` — Visualization queries
