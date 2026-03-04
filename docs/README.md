# RegenTribes Knowledge Graph — Documentation Index

## 📋 Project Overview
- [PROJECT-objectives.md](./PROJECT-objectives.md) — Overall project goals and milestones

---

## 📋 Evaluation Specs (Independent Tasks)

| # | Spec | Focus Area |
|---|------|------------|
| 1 | [SPEC-extraction-evaluation.md](./specs/SPEC-extraction-evaluation.md) | Entity/relation extraction tools |
| 2 | [SPEC-knowledge-graph-storage.md](./specs/SPEC-knowledge-graph-storage.md) | Graph + vector database |
| 3 | [SPEC-document-ingestion.md](./specs/SPEC-document-ingestion.md) | PDF/Doc processing |
| 4 | [SPEC-visualization-evaluation.md](./specs/SPEC-visualization-evaluation.md) | 3D force-directed graphs |
| 5 | [SPEC-security-hardening.md](./specs/SPEC-security-hardening.md) | Zero-trust security |
| 6 | [SPEC-full-integration.md](./specs/SPEC-full-integration.md) | E2E pipeline |
| 7 | [SPEC-evaluation-summary.md](./specs/SPEC-evaluation-summary.md) | Final stack selection |

---

## 🎯 Quick Start

### Run Extraction Evaluation
Start with `SPEC-extraction-evaluation.md` — this is the highest priority task.

### Current Stack Recommendation
```
Ingestion   → Kreuzberg
Extraction  → langextract-rs
Storage     → SurrealDB + Oxigraph
Visualize   → Three.js + Force-Graph
Security    → Zero-trust + RBAC + Audit
```

---

## 🔑 Key Concepts

### 4-Stage Understanding Algorithm
1. **Literal Stripping** — Flag ambiguity, don't discard
2. **Multi-meaning Expansion** — Generate all interpretations
3. **Chain Formation** — Connect interpretations into coherent chains
4. **Memory Validation** — Filter against existing knowledge

### Core Entities
- `Person` — Community members
- `Project` — Initiatives and work
- `Concept` — Ideas and knowledge
- `Resource` — Tools, materials, assets
- `Event` — Happenings

---

## 📊 Metrics Targets

| Metric | Target |
|--------|--------|
| Entity extraction F1 | >0.85 |
| Relation extraction F1 | >0.80 |
| Query latency (p95) | <200ms |
| Visualization (10k nodes) | 30+ FPS |

---

*Last updated: 2026-03-04*
