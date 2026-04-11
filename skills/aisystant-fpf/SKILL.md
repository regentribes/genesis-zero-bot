---
name: aisystant-fpf
description: |
  Systems thinking frameworks for regenerative community governance and organizational design.
  Two complementary frameworks are packaged here:
  
  1. AISYSTANT "Introduction to Systems Thinking" — Russian engineering-management course
     by Tseren Tserenov. Core: Role → Method → Work Artifact. 3x3 Table. Organization as system.
     Ideal for: modeling WHO does WHAT with WHICH method producing WHICH artifact.
  
  2. FPF (First Principles Framework) — Anatoly Levenchuk's meta-theory of rigorous thinking.
     Covers: Role Taxonomy, Method Description, Temporal Duality, Boundary Discipline,
     Ontological Parsimony, Evidence Graph Referring. Ideal for: precision language work,
     epistemic hygiene, multi-view architectures.
  
  ## When to Use This Skill
  
  Trigger phrases:
  - "explain [concept]" / "what is a [concept]" / "define [concept]" from these frameworks
  - "role method artifact" / "3x3 table" / "subject of interest"
  - "practice management" / "work vs task" / "stages vs phases"
  - "functional vs modular" / "black box transparent box"
  - "boundary statement" / "signature engineering" / "precision restoration"
  - "how does X relate to Y" using systems vocabulary
  - "model this organization/project/activity using systems thinking"
  - "what roles are involved in [system]"
  - "chase hughes" + "systems thinking" cross-reference
  - "apply systems thinking to [situation]"
  - "what method/methodology for [goal]"
  
  NOT for: general web search, coding tasks, other domain skills.
  
  ## How to Use This Skill
  
  1. Identify which framework is most relevant (AISYSTANT vs FPF vs cross-framework)
  2. Read the specific reference file(s) needed for the concept
  3. Answer using the framework vocabulary precisely
  4. Cross-reference with other frameworks when the user asks for connections
  
  ## Framework Cross-Reference Map
  
  | Concept | AISYSTANT | FPF |
  |---------|-----------|-----|
  | Role | Role = functional object + performer (agent) | U.Role taxonomy, RoleAssignment, Capability |
  | Method | Practice = discipline + tools | U.Method, MethodDescription |
  | Work Artifact | Output of method in physical world | U.Work, WorkPlan |
  | Organization | Org as system (functional/modular view) | BoundedContext, RoleAlgebra |
  | Stages vs Phases | Logical time vs physical time | Temporal Duality (A.4) |
  | Practice Mgmt | Method manager + sequence | MethodDescription + RoleStateGraph |
  | 3x3 Table | Supersystem × System × Creation | Multi-View Architecture (Part C) |
  | Field State | N/A (AME territory) | "characteristic" + epistemic viewing |
  
  ## Chase Hughes Behavioral Science Cross-Reference
  
  | Behavior | AISYSTANT Role | FPF Concept |
  |----------|---------------|-------------|
  | Authority signals | Role expectations / preferences | Boundary statements, Commitment |
  | FEAR model | Stages (logical sequence) | Dynamics (A.3.3) |
  | Grief/motivation | Intention → role adoption | U.RoleStateGraph, PromiseContent |
  | Behavioral economics | Role interest / preference | U.EvidenceRole, Evidence Graph |
  
  ## Reference File Locations
  
  - AISYSTANT course (189 pages): `references/aisystant/page_XX_*.md`
    Run `python3 scripts/chunk_aisystant.py` once to populate.
    See `references/aisystant/_manifest.json` for the index.
    Key concept files (see names for specific concepts):
      references/aisystant/page_70_*Theatrical_Metaphor*.md
      references/aisystant/page_26_*Method_(Practice)*.md
      references/aisystant/page_69_*Successful_System*.md
      references/aisystant/page_28_*Organization_as_a_System*.md
      references/aisystant/page_32_*Stages_and_Phases*.md
      references/aisystant/page_37_*Work_and_Task*.md
      references/aisystant/page_87_*Physical_World_and_Mental_Space*.md
      references/aisystant/page_60_*Project_Roles*.md
      references/aisystant/page_68_*Subject_of_Interest*.md
      references/aisystant/page_33_*Systems_Thinking_as_a_Way*.md
      references/aisystant/page_29_*Practice_Management*.md
      references/aisystant/page_38_*Work_Management*.md
  
  - FPF spec (215 sections): `references/fpf/XX_*.md`
    Run `python3 scripts/chunk_fpf.py` once to populate.
    See `references/fpf/_manifest.json` for the index.
    Key sections:
      references/fpf/17_*Intellect_Stack*.md
      references/fpf/08_*Thinking_Through_Writing*.md
      references/fpf/22_*Role_Taxonomy*.md
      references/fpf/38_*Signature_Stack*.md
      references/fpf/09_*Descriptive_Ontologies*.md
      references/fpf/62_*Ontological_Parsimony*.md
      references/fpf/63_*External_Transformer*.md
      references/fpf/66_*Role_Method_Work*.md
  
  ## Scripts
  
  - `scripts/chunk_aisystant.py` — splits AISYSTANT VitePress export into 189 pages
  - `scripts/chunk_fpf.py` — splits FPF spec by H2 sections into 215 chunks
  - Run each script once to populate references/. Read individual files from there on.
  - Do NOT re-read the original 3,408-line or 60,000+ line source files.

## AISYSTANT Core Vocabulary

**Core triad:** Role (functional object) → Method (discipline + tools) → Work Artifact (physical output)

**Key distinctions:**
- Physical world (4D objects) vs Mental space (descriptions)
- Implementation vs Description vs Documentation
- Role vs Performer (agent: person/AI/org)
- Functional object vs Physical object
- Subject of interest vs Preference (role interest)
- Black box (external behavior) vs Transparent box (internal structure)
- Functional breakdown (roles/methods/stages) vs Modular breakdown (org units/work/phases)
- Stages (logical time, method sequence) vs Phases (physical time, task sequence)
- Increment (small meaningful improvement) vs Iteration (hypothesis-test cycle)
- Work (task + performer + deadline + role + method + resources → artifact) vs Task
- Method manager (methods + sequence) vs Enterprise architect (modular structure)
- Practice management (engineering) vs Work management (pure management)

**3x3 Table axes:**
- Areas: Supersystem Area of Interest / System of Interest / Creation Systems
- Roles: Target Audience / Usage Concept / Architecture / Creation Methods

**Successful system:** addresses role interests of all external + internal project roles.

**Organization as system:** functional view (roles/methods/functions/logical time) vs modular view (org units/work/services/physical time).

**Key exercise types:** 2.x (physical world/mental space), 3.x (roles/methods), 5.x (areas of interest/3x3), 6.x (modeling), 7.x (roles/stages/methods)

## FPF Core Vocabulary

**Holonic foundation:** Entity → Holon (whole/part duality that preserves both).

**Role taxonomy:** U.RoleAssignment (contextual), U.Capability, U.PromiseContent, U.EvidenceRole, U.RoleStateGraph (named states), U.RoleAlgebra (relations), U.Commitment (deontic), U.SpeechAct.

**Method:** U.Method (transformer + describedEntity), U.MethodDescription ( epistemic constraints on description).

**Temporal duality:** Open-ended evolution — A.4.

**Signature stack:** Boundary discipline — U.Signature (law-governed declaration), U.Mechanism (law application), U.EffectFreeEpistemicMorphing, U.EpistemicViewing, U.EpistemicRetargeting, precision restoration suites (RPR).

**Precision upgrade workflow:** detect umbrella words → unpack local ontology → choose math substrate → refactor → mint lexemes + guardrails (Tech/Plain twins).

**Multi-view architecture:** epistemes as slot graphs, engineering views as projections, MVPK as typed publication surfaces.

**Architectural characteristics of thought:** Auditability, Evolvability, Composability, Falsifiability.

**Nine load-bearing commitments:** holonic kernel, explicit creativity+assurance, bounded contexts, multi-view, epistemic hygiene, etc.

**Transdisciplinarity:** meta-theory for designing reasoning using physical-reality-grounded scaffolds.
