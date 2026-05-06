---
title: Integral OAD Workflow Grammar — Phase-Gated Adoption
number: 0000
status: accepted
date: 2026-05-06
authors: Genesis
domain: information
level: system
tags:
  - integral
  - OAD
  - design-system
  - architecture
  - tradeoff
---

# Integral OAD Workflow Grammar — Phase-Gated Adoption

## Context

Peter Joseph / Revolution Now Ep 60 (integralcollective.io) describes the Integral Collective's Open Access Design (OAD) — a 10-module design certification system. The OAD covers: intake (M1), collaborative workspace (M2), five-lens analysis (M3–M7), optimization (M8), certification (M9), and knowledge commons (M10).

OAD is the engineering backbone of the Integral parallel economy. Its radical claim: every design must be certified against 7 ecological coefficients *before* anything is built — embodied energy, carbon, toxicity, recyclability, water use, land use, scarcity.

Vitali requested evaluation of OAD as the design system for community hardware/tool development.

## Decision

Adopt OAD's **workflow grammar** — the structural process — without adopting the full Integral stack. Defer the material coefficient engine and ITC to Phase 2.

**OAD workflow grammar:**
```
M1 (intake) → M2 (collaborative workspace) → M3–M7 (analysis) → M8 (optimization) → M9 (certification) → M10 (knowledge commons)
```

This grammar is portable. It maps to existing tools: git for M2, SurrealDB for M10, open-source LCA tools for future M3.

## Options Considered

| Option | Description | Verdict |
|--------|-------------|---------|
| **A** | Full OAD — all 10 modules + 5-system Integral stack (CDS, COS, ITC, FRS) | ❌ Premature — requires infrastructure that doesn't exist |
| **B** | OAD workflow grammar only — structural process without downstream systems | ✅ Adopt — implementable now, maps to existing tools |
| **C** | Defer entirely until full Integral stack exists | ❌ Rejected — process grammar is valuable independently |

## Analysis

### What OAD Gets Right

1. **Design commons (M10)**: Every certified design enters a recursive knowledge archive. Maps directly onto SurrealDB + Hyperon migration path.
2. **Five-lens evaluation (M3–M7)**: Applies five independent analysis lenses — ecology, time, physics, labor, context — to every design. Implementable incrementally.
3. **Version-controlled branching (M2)**: GitHub-for-CAD. Available now via existing git infrastructure.
4. **Ecological coefficient intent**: OAD requires 7 material coefficients before production. Correct principle, wrong timing for Phase 1.
5. **Post-scarcity incentive model**: Contribution satisfaction over monetary compensation. Culturally dependent — cannot be engineered until community is larger.

### The Four Blocking Constraints

OAD modules M3–M10 require pieces that don't exist yet:

| Constraint | Module | Why It Blocks |
|------------|--------|---------------|
| **No material coefficient database** | M3 | Data is proprietary. No offline fallback. During internet blackout, M3 fails completely. |
| **No COS/ITC/FRS** | M9/M10 | OAD certified designs have no execution path without downstream systems. |
| **No constitutional governance** | M9 thresholds | Eco score and feasibility thresholds are policy-determined. No one is authorized to set them. |
| **Scale mismatch** | All | OAD assumes a node (12–200 people) with shared intent. Pre-constitutional community cannot meet this precondition. |

### Phase-Gated Path

The workflow grammar is implementable in phases:

| Phase | Actions |
|-------|---------|
| **Phase 1** (now) | M1 + M2 using git. M10 using SurrealDB. Approximate M3 ecological intent with checklists until coefficient database is available. |
| **Phase 2** (3–6 months) | Build M3–M7 incrementally. Develop regional coefficient database via OpenLCA + Ecoinvent. Establish constitutional threshold-setting. |
| **Phase 3** (6–12 months) | Integrate AME outputs for contributor trust scoring. Implement ITC-inspired access value calculation. P2P mesh sync for offline resilience. |

## Consequences

### Positive

- RegenTribes gains a rigorous, proven design process immediately
- Five-lens evaluation is implementable without the full stack
- M10 (knowledge commons) maps to existing SurrealDB graph schema
- No dependency on Integral's CDS, COS, ITC, or FRS in Phase 1

### Negative

- No ITC incentive system — design contribution relies on voluntary engagement
- No material coefficient database — ecological scoring uses approximations during Phase 1
- No CDS — certification thresholds are set ad hoc until constitutional rules exist
- Offline operation limited to locally computable analysis

### Risks

- Community may attempt full OAD adoption, hitting the 4 blocking constraints
- Without formal governance, "who decides certification thresholds" will recur
- Voluntary engagement model may not sustain sustained design contribution

## References

- Peter Joseph, Revolution Now Ep 60: Integral OAD — integralcollective.io
- OAD 10 Modules: M1 intake, M2 workspace, M3–M7 five-lens analysis, M8 optimization, M9 certification, M10 commons