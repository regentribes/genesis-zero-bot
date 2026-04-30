#!/usr/bin/env python3
"""Write the SECF assessment document in chunks."""
import sys

out_path = "/home/ian/.openclaw/workspace-genesis/civilization-stack-SECF-assessment.md"

part = sys.argv[1] if len(sys.argv) > 1 else "intro"

sections = {

"intro": """# CIVILIZATION STACK BOOTSTRAP: SECF CAPABILITY DEVELOPMENT PLAN
## Ground Zero to Full Competency — Applying the Systems Engineering Competency Framework to Post-Collapse Regeneration

---

## PREFACE

This document applies the Systems Engineering Competency Framework (SECF v2, Christian Sprague, 2025) to the Civilization Stack bootstrap problem: how does a community starting from absolute ground zero develop all 40 SECF competency areas through the sequential bootstrap sequence?

The SECF defines 5 proficiency levels:
1. **Awareness** — Knowledge of key ideas, understands issues, asks relevant questions. Characterizes engineers new to the area.
2. **Supervised Practitioner** — Understanding with limited/historical experience, requires regular guidance.
3. **Practitioner** — Knowledge and practical experience, functions without supervision, can guide others.
4. **Lead Practitioner** — Extensive practical knowledge, go-to person for advice, determines best practice within organization.
5. **Expert** — Recognized beyond organizational boundary, contributes to regional or international best practices.

The bootstrap sequence has 4 stages:
- **Stage 0** (Years 1-3): Manual production, hand tools, forge, hand-powered machines
- **Stage 1** (Years 3-10): Simple machines produce medium-complexity machines
- **Stage 2** (Years 10-20): CNC machines produce complex machines
- **Stage 3** (Years 20-50): Advanced machines produce everything including more Stage 3 machines

The fundamental problem: every SECF competency requires practitioners to develop it, but developing practitioners requires the competency itself. This document maps how the community breaks this cycle across the 40 SECF areas.

---

## SECTION A: SECF PROFICIENCY LEVELS AND BOOTSTRAP EQUIVALENTS

| SECF Level | Bootstrap Meaning |
|---|---|
| **Awareness** | Can identify the need for this competency, knows the right questions to ask, reads and understands written guidance. Can follow a procedure written by a Practitioner without understanding why. |
| **Supervised Practitioner** | Can perform the competency with guidance from written materials (OAD procedures). Requires reference to documentation. Can adapt known procedures to novel situations within established patterns. |
| **Practitioner** | Can perform independently using available tools. Does not need to reference written procedures for routine work. Can troubleshoot when things go wrong. Can write procedures for Awareness and Supervised Practitioner levels. |
| **Lead Practitioner** | Recognized as the community's expert. Designs new processes and systems. Trains and mentors Practitioners. Sets standards. Knows what is not yet known and identifies what must be developed next. |
| **Expert** | Recognized beyond the community. Contributes to the federated knowledge network. Develops new capabilities that advance the state of the art. Publishes in the OAD for other communities. |

**Key insight:** The bootstrap sequence determines which SECF levels are achievable at each stage. Stage 0 communities cannot have Practitioners in semiconductor manufacturing — but they can have Awareness and Supervised Practitioners in basic metallurgy. The goal is to reach Practitioner level in all 40 areas by Stage 3.

---

## SECTION B: THE BOOTSTRAP PARADOX

The paradox: developing engineering competency requires competent engineers; developing competent engineers requires engineering training; developing engineering training requires competent engineers. This circular dependency appears in every SECF area.

**The resolution strategy has four dimensions:**

1. **Written materials first.** The OAD stores procedures, recipes, and guides written by prior Practitioners. The community starts as Supervised Practitioners reading these materials, not as blank slates.

2. **Iterative approximation.** Each bootstrap stage produces better tools and processes, which enable better training materials, which produce better practitioners, who improve the tools. The paradox is resolved temporally.

3. **Federated learning.** No single community needs all 40 Practitioner-level competencies. Communities specialize, then federate. The Lead Practitioner in one community becomes the Expert reference for the network.

4. **Simulation before practice.** Before building a real machine, the community simulates it. Before performing a real medical procedure, they practice on models. Simulation reduces the cost of iteration, accelerating competency development.

**The critical risk:** if the community loses its written materials (fire, flood, deliberate destruction), it falls back toward Awareness level in all competencies simultaneously. The OAD's multi-location backup discipline is load-bearing for the entire competency development program.

---

## SECTION C: INTEGRAL AS THE COMPETENCY DEVELOPMENT SYSTEM

The five INTEGRAL subsystems serve as the infrastructure for SECF competency development:

**CDS** — Deliberates on competency priorities. When the community identifies a gap, the CDS decides: develop internally, seek a federation partner, or accept the limitation. The CDS manages the competency development curriculum.

**OAD** — Stores and versions all training materials. Every procedure, process, failure analysis, and curriculum revision is recorded. The OAD is the community's institutional memory and the primary tool for resolving the bootstrap paradox.

**ITC** — Tracks contribution of competency development activities. Teaching is a contribution. Learning is a contribution. Demonstrating proficiency is a contribution. ITC creates incentive alignment: everyone benefits from everyone else's competency development.

**COS** — Allocates time and resources to competency development. The work decomposition identifies what must be learned to accomplish each task. The curriculum is derived from the work decomposition.

**FRS** — Monitors competency gaps and development outcomes. When the FRS detects that a required competency is missing or degrading (e.g., the community's only blacksmith is aging and has not trained a successor), it triggers a CDS deliberation.

---

## SECTION D: KNOWLEDGE SOURCES FROM INGESTED DOCUMENTS

**SECF V2** (40-sheet Excel, 547K chars): Defines all 40 competency areas with proficiency indicators and behavioral examples. Used as the competency requirements specification.

**GRCSE v1.1** (135-page PDF, 447K chars): Graduate Reference Curriculum for Systems Engineering. Maps SECF areas to specific topics, teaching hours, and assessment methods. Used as the curriculum design template.

**NASA SE Handbook** (297-page PDF, 331K chars): NASA SP-2016-6105 Rev2. Provides systems engineering process guidance, life cycle models, and technical management frameworks. Used as the process implementation reference.

The civilization-stack-ground-zero.md provides the domain knowledge that SECF competencies apply to: metallurgy, agriculture, medicine, manufacturing, energy, and computation.

---

## SECTION E: ALL 40 SECF COMPETENCY AREAS

---

### THEME 1: SYSTEMS FUNDAMENTALS

---

#### 1. Systems Thinking
**SECF Code:** ST

**Bootstrap Challenge:** Systems thinking — understanding how components interact to produce emergent properties — is the most fundamental SECF competency and also the hardest to develop from nothing. A Stage 0 community has no complex artifacts to study. Yet systems thinking is needed immediately to design the bootstrap sequence itself.

**Bootstrap Pathway:**
- **Stage 0:** Start with the simplest systems: a fire (inputs: fuel, oxygen, heat; outputs: heat, gases, light; emergent: sustained combustion). Map other Stage 0 systems (bloomery, compost pile, sourdough starter) as analog exercises. Practice drawing system boundaries, identifying inputs and outputs, predicting emergent properties.
- **Stage 1:** The water-powered grain mill is the ideal teaching artifact: mechanical, hydraulic, and human components. Map the full system: water source, flume, wheel, gears, grain hopper, flour outlet. Identify failure modes and how components interact to produce failure.
- **Stage 2:** With CNC machines and basic computers, run simple system dynamics simulations. Model the bootstrap sequence itself: how does investment in Year 3 affect production capacity in Year 5? This is meta-systems-thinking: applying systems thinking to the competency development process.
- **Stage 3:** Full system dynamics modeling of the entire community. All five INTEGRAL subsystems modeled as interacting feedback loops. Scenario planning: what happens if the primary energy source fails? What is the optimal skill distribution?

**Proficiency Target:** Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** Paper and pencil for system diagramming. OAD system description templates.

**Connection to INTEGRAL:** CDS uses systems thinking to map interdependencies between subsystem decisions. FRS uses systems thinking to detect emergent failure modes that no single subsystem monitoring can capture.

**Critical Risks:** Systems thinking degrades when the community is under stress. Ensure systems thinking practice continues even during crises.

---

#### 2. Life Cycles
**SECF Code:** LC

**Bootstrap Challenge:** Life cycle thinking requires having complete life cycles to study. Stage 0 has no complex products with long life cycles. Yet life cycle awareness is needed immediately: Stage 0 decisions (what to stockpile, what infrastructure to build) determine the Stage 3 possibility space.

**Bootstrap Pathway:**
- **Stage 0:** Begin with natural life cycles: seeds (birth), plants (growth), harvest (utility), compost (recycling). Map agricultural life cycles for staple crops. Identify where in the life cycle the community is most vulnerable (seed storage, growing season, harvest window).
- **Stage 1:** Product life cycles for basic tools: steel knife (raw ore → forged → used → sharpened → resharpened → recycled). Map the iron knife life cycle in the OAD. Identify life cycle stages that are bottlenecks.
- **Stage 2:** Full life cycle assessment for production decisions: when is it worth investing in a CNC machine that will take 10 years to pay for itself? Compare life cycle cost of handmade vs. CNC-produced items.
- **Stage 3:** Life cycle management for the entire community: which competencies are in decline (practitioners aging out), which are in growth (new apprentices completing training), which are at risk (single point of failure in knowledge transmission). Plan succession in every competency area.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** GRCSE Chapter 5 (Life Cycle Models). NASA SE Handbook Chapter 4. OAD life cycle templates.

**Connection to INTEGRAL:** COS uses life cycle thinking to plan maintenance, repair, and replacement. FRS monitors life cycle stages and flags when systems approach end-of-life.

**Critical Risks:** Short-term thinking dominates during resource scarcity. The community must explicitly protect resources for life cycle planning.

---

#### 3. Capability Engineering
**SECF Code:** CE

**Bootstrap Challenge:** Capability definition requires understanding the full range of operational conditions. Stage 0 communities tend to define capabilities either too narrowly (requiring undevelopable capabilities) or too broadly (missing critical capabilities).

**Bootstrap Pathway:**
- **Stage 0:** Define capabilities for basic tools by operational need: "a knife that can cut through a 2cm hardwood branch and maintain edge for 100 cuts." Test candidate tools against capability definitions. Document results in the OAD.
- **Stage 1:** Capability definitions for community infrastructure: water system must supply 50 liters per person per day under drought conditions (3-year return period). Define the full operational envelope: normal, stress, and emergency conditions.
- **Stage 2:** Capability-based acquisition: before building any complex system, write the capability definition document. Use GRCSE capability engineering methodology.
- **Stage 3:** Full capability engineering for all community systems. Maintain a capability matrix (OAD) mapping systems to capabilities to gaps.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** GRCSE Chapter 6 (Capability Engineering). OAD capability definition templates.

**Connection to INTEGRAL:** CDS deliberates on capability priorities. COS allocates resources to close capability gaps. FRS monitors whether systems meet their defined capabilities.

**Critical Risks:** Over-specification forecloses opportunities. Under-specification produces fragile systems. Maintain capability definitions as living documents.

---

#### 4. General Engineering
**SECF Code:** GE

**Bootstrap Challenge:** General engineering fundamentals (physics, chemistry, mathematics, materials science) must be developed before most other competencies can advance. Stage 0 communities have limited formal education in engineering.

**Bootstrap Pathway:**
- **Stage 0:** Prioritize fundamentals that support Stage 0 production: thermodynamics of combustion, basic chemistry of smelting, material properties of wood and metal. Focus on empirical knowledge: what works, not why it works theoretically.
- **Stage 1:** Formalize engineering fundamentals: load calculations for structures, power calculations for water wheels, heat transfer calculations for kilns. Store calculation templates and worked examples in the OAD.
- **Stage 2:** Apply engineering analysis tools: structural analysis, fluid dynamics calculations, thermodynamics simulations. Begin connecting empirical Stage 0 knowledge to formal engineering theory.
- **Stage 3:** Full engineering analysis for complex systems.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** Pre-collapse engineering handbooks (OAD), mathematics textbooks, physics references.

**Connection to INTEGRAL:** All technical competencies depend on general engineering knowledge. COS allocates time to engineering study.

**Critical Risks:** Mathematics and physics education is easy to deprioritize during resource scarcity. Protect time for engineering fundamentals — it pays compound returns.

---

#### 5. Critical Thinking
**SECF Code:** CT

**Bootstrap Challenge:** Critical thinking is load-bearing for every other SECF competency. It is also the most vulnerable to collapse: under stress, people default to authority-based thinking rather than evidence-based reasoning.

**Bootstrap Pathway:**
- **Stage 0:** Establish evidence-based decision-making in CDS assemblies. Every claim must be supported by OAD records, observed data, or explicit reasoning. Train the distinction between assertion and evidence.
- **Stage 1:** Apply critical thinking to technical claims: is this tool better? Is this soil amendment actually improving yields? Teach hypothesis testing: define claim, design test, collect data, evaluate.
- **Stage 2:** Critical thinking about complex systems: evaluating whether proposed designs will produce desired outcomes. Identifying hidden assumptions.
- **Stage 3:** Meta-critical thinking: evaluating whether the community's decision-making processes themselves are producing good outcomes.

**Proficiency Target:** Practitioner (all stages, escalating in depth)

**Essential Resources:** GRCSE Chapter 8. OAD critical thinking evaluation criteria.

**Connection to INTEGRAL:** CDS is the primary arena for critical thinking practice. FRS provides data that must be critically evaluated.

**Critical Risks:** Critical thinking is the first competency to degrade under social pressure. Maintain a culture where questioning is safe and expected.

---

### THEME 2: SE PROCESSES

---

#### 6. Systems Modeling and Analysis
**SECF Code:** SM

**Bootstrap Challenge:** Systems modeling requires both skills and tools. Stage 0 lacks both. Yet modeling is needed immediately for bootstrap planning.

**Bootstrap Pathway:**
- **Stage 0:** Paper-and-pencil system modeling: draw system diagrams, write equations, trace causal chains. Start with simple models: fire, water wheel, compost pile. Practice model verification: does the prediction match reality?
- **Stage 1:** Physical models: build scale models of proposed systems (e.g., small-scale water wheel to test efficiency before building full-size). Document model validation results in OAD.
- **Stage 2:** With available computation: spreadsheet models for system behavior simulation. Model the bootstrap sequence.
- **Stage 3:** Full model-based systems engineering: all significant systems have executable models in the OAD.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** Paper, pencil, drawing tools. Spreadsheet software (Stage 2).

**Connection to INTEGRAL:** FRS uses models to predict system behavior. CDS uses model outputs to inform decisions. OAD stores all system models as versioned documents.

**Critical Risks:** Models are simplifications. Every model in OAD must be tagged with assumptions and limitations.

---

#### 7. Communications
**SECF Code:** CM

**Bootstrap Challenge:** Communication is load-bearing for the INTEGRAL CDS. In a 25-person community, face-to-face communication is easy. As the community federates, communication across distance and culture becomes critical and difficult.

**Bootstrap Pathway:**
- **Stage 0:** Establish written communication standards: how to write an OAD entry, how to document a CDS decision, how to write a technical procedure. Communication norms: how to give and receive feedback, how to raise an objection.
- **Stage 1:** Written technical reports: document every significant technical decision, failure analysis, process improvement. Practice peer review.
- **Stage 2:** Formal communication processes: change control communication, design review communication, configuration change communication.
- **Stage 3:** Federated communication across community boundaries, cultural diversity, language barriers.

**Proficiency Target:** Practitioner (all stages)

**Essential Resources:** OAD templates for all document types.

**Connection to INTEGRAL:** CDS is a communication process. OAD is a communication infrastructure.

**Critical Risks:** In small communities, informal communication dominates and written communication atrophies. Develop written communication habits from Stage 0.

---

#### 8. Requirements Definition
**SECF Code:** RD

**Bootstrap Challenge:** Writing good requirements is deceptively hard. Stage 0 communities write either vague requirements ("a good knife") or over-specific ones ("blade 15cm, 2mm thick, 58 HRC").

**Bootstrap Pathway:**
- **Stage 0:** Practice writing operational capability definitions as the first form of requirements. Convert capability definitions into concrete specifications. Test specifications: does the built item actually meet the specification?
- **Stage 1:** Formal requirements documents for community infrastructure: water system requirements, food storage requirements, shelter requirements.
- **Stage 2:** Full requirements engineering for complex systems. Requirements traced from stakeholder needs through capability definitions to system specifications to component requirements.
- **Stage 3:** Federated requirements management across communities.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD requirements templates. NASA SE Handbook Chapter 7.

**Connection to INTEGRAL:** CDS generates stakeholder needs. COS implements systems that meet requirements. FRS verifies that implemented systems meet requirements.

**Critical Risks:** Requirements creep is the most common failure mode. CDS must enforce requirements discipline.

---

#### 9. System Architecting
**SECF Code:** SA

**Bootstrap Challenge:** System architecting requires knowing what structures are possible. Stage 0 communities have limited architectural vocabulary: they know what they have seen, not what is possible.

**Bootstrap Pathway:**
- **Stage 0:** Study pre-collapse architectural examples in the OAD. Learn to read architectural drawings and schematics. Practice reproducing known designs, then modifying them.
- **Stage 1:** Design new systems using known patterns: serial (one thing after another), parallel (multiple at once), feedback (output feeds back to input). Apply to community systems.
- **Stage 2:** Architectural frameworks: modularity, hierarchy, layering. Design systems that can be built incrementally and upgraded without replacement.
- **Stage 3:** Complex system architecture: systems of systems, federated architectures, adaptive architectures. The INTEGRAL itself is the most complex system and the meta-architectural reference.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD architectural drawings and schematics. NASA SE Handbook Chapter 8.

**Connection to INTEGRAL:** COS decomposes the architecture into work packages. OAD stores all architectural decisions as versioned documents.

**Critical Risks:** Architectural over-complexity consumes resources without benefit. Stage 0 should prefer simple architectures that can evolve. Architect for replaceability, not permanence.

---

#### 10. Design For...
**SECF Code:** DF

**Bootstrap Challenge:** Design for X (reliability, maintainability, producibility, sustainability) requires knowing what those properties mean in context and how to achieve them.

**Bootstrap Pathway:**
- **Stage 0:** Design for simplicity: the simplest system that meets the capability definition is the best design. The most maintainable system has the fewest parts. The most producible system can be made with available tools.
- **Stage 1:** Design for reliability: understand failure modes, design to avoid single points of failure, use redundancy where possible.
- **Stage 2:** Design for maintainability: systems that can be maintained with available tools. Design for disassembly: threaded fasteners not rivets, modular assemblies not monolithic structures.
- **Stage 3:** Design for sustainability: full life cycle assessment. Can the system be maintained indefinitely with locally available materials? Can it be recycled at end of life?

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD design review templates. Failure mode databases.

**Connection to INTEGRAL:** FRS tracks failure rates and maintenance burden. ITC accounts for maintenance costs in product life cycle cost.

**Critical Risks:** Design-for-x can become analysis paralysis. Set design thresholds and enforce them in the CDS.

---

#### 11. Integration
**SECF Code:** IN

**Bootstrap Challenge:** System integration is where most failures occur. Components that work individually often fail when integrated due to interface mismatches or unexpected interactions.

**Bootstrap Pathway:**
- **Stage 0:** Start with integration checklist: does each component work independently? Have interface specifications been defined? Test integration incrementally: integrate one component at a time, test after each addition.
- **Stage 1:** Integration planning: before building a complex system, write the integration plan. Define sequence, required test equipment, acceptance criteria at each step.
- **Stage 2:** Formal integration process with change control. Plan integration from the architecture: define integration units, sequence them, specify verification at each step.
- **Stage 3:** Federated integration: integrating systems developed by different communities. Establish interface control documents (ICDs).

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD integration procedure templates.

**Connection to INTEGRAL:** COS manages the integration workflow. OAD stores integration procedures and results. FRS monitors integration outcomes.

**Critical Risks:** Integration failures are expensive — they require rework of already-built components. Invest in interface specification before component construction.

---

#### 12. Interfaces
**SECF Code:** IF

**Bootstrap Challenge:** Interface management is critical for system interoperability. Stage 0 communities have simple interfaces but lack the discipline of interface specification.

**Bootstrap Pathway:**
- **Stage 0:** Name every interface. Document: what connects to what, physical dimensions, material requirements. Write it down. The discipline of naming and documenting interfaces is the foundation.
- **Stage 1:** Interface control documents (ICDs) for all inter-system interfaces: mechanical (flanges, shafts, couplings), electrical (voltage, current, connectors), informational (data format, update rate). ICDs are versioned in the OAD.
- **Stage 2:** Interface verification: test that connected systems meet their ICD specifications. Maintain an interface verification log.
- **Stage 3:** Federated interfaces: interfaces between communities' systems. Establish ICD negotiation process.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD ICD templates.

**Connection to INTEGRAL:** The five INTEGRAL subsystems have defined interfaces. Changes to subsystem interfaces require CDS deliberation.

**Critical Risks:** Interface drift — interfaces that evolve independently from their specifications — creates integration failures. FRS monitors for interface drift.

---

#### 13. Verification
**SECF Code:** VF

**Bootstrap Challenge:** Verification requires test methods appropriate to the system and available equipment. Stage 0 has minimal test equipment but must still verify that critical systems meet specifications.

**Bootstrap Pathway:**
- **Stage 0:** Verification by examination and simple test: does it look right? Does it do what the specification says? For critical systems, destructive testing of samples: cut until it fails, fill until it leaks.
- **Stage 1:** Formal verification procedures: what test, what equipment, what constitutes a pass, what is done with failed items. Store procedures in the OAD.
- **Stage 2:** Verification planning: write the verification plan before building. Specify methods, required equipment, acceptance criteria.
- **Stage 3:** Full verification program: verification matrix (specification item vs. method vs. result), traceability from requirements to verification, formal verification records.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD verification procedure templates.

**Connection to INTEGRAL:** COS implements systems. FRS runs verification monitoring. OAD stores verification results. ITC credits verification work.

**Critical Risks:** Verification without follow-up — finding defects but not fixing them — wastes resources. CDS must ensure verification results trigger corrective action.

---

#### 14. Validation
**SECF Code:** VL

**Bootstrap Challenge:** Validation — proving that the right system was built — requires understanding the operational context. Stage 0 conflate validation with verification, building systems that meet specifications but don't solve problems.

**Bootstrap Pathway:**
- **Stage 0:** Teach the distinction: verification (did we build it correctly?) vs. validation (did we build the right thing?). Validation is informal: does the knife actually cut what it needs to cut in actual use?
- **Stage 1:** Structured validation: write the validation plan before building. Define stakeholder needs, how the system will be used, what constitutes success.
- **Stage 2:** Operational validation under realistic conditions: not just "does it work in test" but "does it work in the actual operational environment?"
- **Stage 3:** Federated validation: validating systems across communities with different operational contexts. Establish a validation sharing protocol.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD validation plan templates. NASA SE Handbook Chapter 11.

**Connection to INTEGRAL:** CDS generates stakeholder needs. FRS monitors whether deployed systems are actually solving problems. OAD stores validation records.

**Critical Risks:** Building to specification (verification) instead of building to solve problems (validation) is the most common systems engineering failure.

---

#### 15. Transition
**SECF Code:** TR

**Bootstrap Challenge:** Transition is underestimated in complexity. Stage 0 lacks formal transition processes: tools are used as soon as they seem to work, without preparing operators or establishing maintenance plans.

**Bootstrap Pathway:**
- **Stage 0:** Establish transition discipline: before a system goes into operational use, document: how is it used? What maintenance does it require? What are failure signs? Who is responsible?
- **Stage 1:** Formal transition plans for all community infrastructure: operator training (who, what, how long), documentation requirements (user manual, maintenance manual), spare parts inventory, maintenance schedule.
- **Stage 2:** Transition management for complex systems. Phased transition with verification at each phase.
- **Stage 3:** Federated transition: transitioning systems developed by one community for use by another.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD transition plan templates.

**Connection to INTEGRAL:** COS manages the transition workflow. FRS monitors post-transition system performance. OAD stores transition documentation.

**Critical Risks:** Premature transition (using a system before ready) and delayed transition (keeping a system in development too long) are both costly. CDS sets transition criteria and authorizes transitions.

---

#### 16. Utilization and Support
**SECF Code:** US

**Bootstrap Challenge:** Utilization and support — keeping systems operational after transition — is where long-term value is realized or lost. Stage 0 has no maintenance culture: tools are used until they break.

**Bootstrap Pathway:**
- **Stage 0:** Establish a maintenance culture: clean tools after use, store properly, inspect before use. Create a simple maintenance log.
- **Stage 1:** Scheduled maintenance: based on observed wear patterns, define maintenance intervals. Write maintenance procedures and store in the OAD.
- **Stage 2:** Full utilization and support system: maintenance scheduling, spare parts inventory management, operator training program, maintenance records analysis.
- **Stage 3:** Predictive maintenance: use FRS sensor data to predict maintenance needs before failure. Move from scheduled to condition-based maintenance.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD maintenance procedure templates.

**Connection to INTEGRAL:** FRS monitors utilization and support performance. COS manages support resources.

**Critical Risks:** Deferred maintenance (postponing maintenance to do other work) accumulates as future failures. CDS must protect maintenance time.

---

#### 17. Retirement
**SECF Code:** RT

**Bootstrap Challenge:** Retirement — taking a system out of service — is often neglected. Stage 0 communities informally abandon broken tools without formal retirement processes.

**Bootstrap Pathway:**
- **Stage 0:** When a system is retired, document: what was it replaced by, what happened to its components (reused, recycled, disposed), what knowledge about it must be preserved.
- **Stage 1:** Formal retirement plans: for significant systems, define the retirement criteria, the retirement process, the disposition of components, the knowledge preservation requirements.
- **Stage 2:** Full retirement documentation: all systems that reach end of life have formal retirement records in the OAD. Component reuse and recycling pathways are planned before the system is built.
- **Stage 3:** Federated retirement: systems developed by one community retired by another. Establish retirement knowledge transfer protocols.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD retirement plan templates.

**Connection to INTEGRAL:** FRS monitors when systems approach retirement. COS manages the retirement process. OAD stores retirement records.

**Critical Risks:** Lost knowledge — when a system is retired, the knowledge of how it worked is lost if not explicitly preserved. Always preserve the OAD record even after physical retirement.

---

### THEME 3: MANAGEMENT

---

#### 18. Planning
**SECF Code:** PL

**Bootstrap Challenge:** Planning — defining work scope, schedule, and resources — is the management function most easily deprioritized in a resource-scarce community. Stage 0 communities often treat planning as optional.

**Bootstrap Pathway:**
- **Stage 0:** Every significant task has a plan: what must be done, in what order, by when, with what resources. Written plans on paper. Simple Gantt chart (horizontal lines on paper showing start and end dates).
- **Stage 1:** Formal planning for all community projects. Work breakdown structure (WBS): decompose the project into tasks. Estimate task duration. Identify dependencies. Identify the critical path.
- **Stage 2:** Integrated master schedule: all community projects on a single schedule showing dependencies across projects. Resource leveling: ensure the community has the people and materials when needed.
- **Stage 3:** Federated planning: coordinating plans across communities. Planning for bootstrap sequence investments.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD planning templates. Spreadsheet software for schedule management.

**Connection to INTEGRAL:** COS decomposes the bootstrap sequence into plans. CDS authorizes major plans. FRS monitors plan execution.

**Critical Risks:** Planning without execution is just dreams. The value of planning is in the discipline of thinking through dependencies and risks before starting, not in the plan document itself.

---

#### 19. Monitoring and Control
**SECF Code:** MC

**Bootstrap Challenge:** Monitoring and control — tracking progress against plan and taking corrective action — is the execution一半 of planning. Stage 0 communities often plan but don't monitor.

**Bootstrap Pathway:**
- **Stage 0:** Weekly progress review: did we do what we planned? If not, why not? What is the plan for the coming week? Simple but regular.
- **Stage 1:** Earned value tracking: define milestones, assess milestone completion, compare actual progress to planned progress. Identify variances and their causes.
- **Stage 2:** Full project monitoring and control: integrated master schedule tracking, variance analysis, corrective action plans.
- **Stage 3:** Federated monitoring: monitoring across community boundaries. FRS provides real-time operational data for monitoring.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD monitoring templates.

**Connection to INTEGRAL:** FRS provides the monitoring data. CDS authorizes corrective actions. COS implements corrective actions.

**Critical Risks:** Monitoring without control — tracking variance but not taking action — is useless. The monitoring system must feed into a control system that changes behavior.

---

#### 20. Decision Management
**SECF Code:** DM

**Bootstrap Challenge:** Decision management — making and recording significant decisions — is the heart of the INTEGRAL CDS. Stage 0 communities make decisions informally, without documented rationale or tracking of decisions made.

**Bootstrap Pathway:**
- **Stage 0:** Every significant decision is recorded in the OAD: what was decided, why, by whom, with what objections. Decisions are not just outcomes — they are documented reasoning processes.
- **Stage 1:** Decision criteria: before making a significant decision, define what criteria will be used to evaluate options. Record the criteria and the evaluation of options against criteria.
- **Stage 2:** Decision tracking: decisions are revisited and confirmed or revised based on outcomes. The OAD maintains a decision log that can be queried.
- **Stage 3:** Federated decision management: decisions that affect multiple communities require coordination. Establish decision rights: which decisions are local, which are cluster-level, which are regional.

**Proficiency Target:** Practitioner (all stages)

**Essential Resources:** OAD decision log templates.

**Connection to INTEGRAL:** CDS is the decision management system. The decision log is the primary OAD artifact. FRS monitors decision outcomes and flags when decisions need revision.

**Critical Risks:** Decision avoidance — postponing difficult decisions — accumulates problems. The CDS must enforce timely decision-making on critical issues.

---

#### 21. Concurrent Engineering
**SECF Code:** CE (note: code collision with Capability Engineering — context-dependent)

**Bootstrap Challenge:** Concurrent engineering — performing activities in parallel rather than sequentially — reduces total project time but increases coordination complexity. Stage 0 communities naturally work sequentially due to limited coordination capability.

**Bootstrap Pathway:**
- **Stage 0:** Identify activities that can be performed in parallel: while the forge is heating, prepare the ore. While the bread is rising, prepare the soup. Apply concurrent thinking to daily work organization.
- **Stage 1:** Concurrent engineering for project planning: identify the longest sequential chain of tasks (critical path). Then identify tasks that can be done in parallel with critical path tasks. Schedule parallel tasks to finish just before they are needed.
- **Stage 2:** Full concurrent engineering: design, manufacturing, and testing activities are overlapped to reduce total project time. Use the GRCSE concurrent engineering methodology.
- **Stage 3:** Federated concurrent engineering: coordinating concurrent activities across communities. Requires robust communication and interface management.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** GRCSE Chapter 30 (Concurrent Engineering).

**Connection to INTEGRAL:** COS manages concurrent activity coordination. CDS resolves conflicts between concurrent activities.

**Critical Risks:** Concurrent engineering increases risk of rework (doing things in parallel that need to be sequential). The discipline is knowing when activities can safely overlap and when they cannot.

---

#### 22. Business Enterprise Integration
**SECF Code:** BE

**Bootstrap Challenge:** Business enterprise integration — coordinating business processes across functional boundaries — is needed even in small communities where one person may perform multiple functions.

**Bootstrap Pathway:**
- **Stage 0:** Identify the business processes that exist: procurement (getting materials), production (making things), sales (distributing things), finance (tracking value). Document how information flows between these processes.
- **Stage 1:** Formalize business process descriptions: each process has a defined owner, defined inputs, defined outputs. Document process interfaces.
- **Stage 2:** Business process integration: information systems (even simple databases) connect processes. The OAD becomes the primary integration mechanism.
- **Stage 3:** Federated business integration: business processes across communities are integrated through shared OAD and shared ITC accounting.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD business process templates.

**Connection to INTEGRAL:** All five subsystems are business processes. CDS integrates decisions. COS integrates production. ITC integrates value accounting.

**Critical Risks:** Business process integration that is too tight creates brittleness. Allow for human judgment at process boundaries.

---

#### 23. Acquisition and Supply
**SECF Code:** AS

**Bootstrap Challenge:** Acquisition and supply — obtaining products and services from external sources — is trivial in Stage 0 (there are no external sources) but becomes critical in later stages when communities federate.

**Bootstrap Pathway:**
- **Stage 0:** Procurement is collection: gathering materials from the environment. Document what was collected, where, when, in what condition.
- **Stage 1:** Formal procurement: within the community, procurement means allocating shared resources. Between communities, procurement means trade. Document procurement criteria and procurement decisions.
- **Stage 2:** Supply chain management: maintaining relationships with external suppliers, managing inventory, managing lead times. Supply chain disruptions trigger FRS alerts.
- **Stage 3:** Federated acquisition: communities acquire from each other using ITC. Acquisition decisions are made by CDS based on FRS supply chain data.

**Proficiency Target:** Supervised Practitioner (Stage 1), Practitioner (Stage 2), Lead Practitioner (Stage 3)

**Essential Resources:** OAD supplier and procurement records.

**Connection to INTEGRAL:** COS manages supply chain execution. FRS monitors supply chain health. CDS authorizes major acquisitions. ITC tracks acquisition costs.

**Critical Risks:** Supply chain concentration risk — depending on a single supplier for critical materials — is the most common acquisition failure. Establish multiple sources or maintain strategic stockpiles.

---

#### 24. Information Management
**SEC