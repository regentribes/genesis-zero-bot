# Benevolent Bot — Project Charter

**Project Name:** Benevolent Decision-Making Assistant  
**Codename:** Benevolent Bot  
**Created:** 2026-04-01  
**Sponsor:** Oscar C ii 🔺  

---

## Vision

A context-aware AI assistant that serves as a "benevolent decision-maker" for the RegenTribes collective — drawing from community documentation, collective memory, stated values, and real-time context to propose optimal choices that align with the community's principles and goals.

---

## Core Purpose

Oscar's goal is to equip Genesis (and future AI agents) with sufficient context about:

- **Goals** the collective has set
- **Values** the community holds
- **Principles** guiding decision-making

…so that the AI can autonomously make or suggest decisions that serve the collective's best interests without needing constant human approval for every choice.

---

## Values & Principles (from RegenTribes Context)

### From Regenerative Neighborhood Framework
- **Regeneration over extraction** — systems that renew rather than deplete
- **Circular systems** — water, food, energy, waste loops
- **Relationships** — social fabric as infrastructure
- **Safety** — physical, emotional, governance safety
- **Learning** — continuous growth mindset
- **Fun** — joy as a design requirement

### From Community Alchemy
- **Concentrix Management** — polycentric co-centering (not concentric)
- **8-Gate Model** — alignment-based progression
- **Field of Trust (FOT)** — emergent plasma state with 5 concrete indicators
- **Needs/Beliefs/Principles/Values** — rigorously separated

### From Governance Exploration
- **Consent over consensus** — "safe enough to try"
- **Tension-based** — gap between current and desired state
- **Efficiency + safety** — structured process, objection rounds
- **Emergent governance** — "regenesis" vs "regeneration"

### From Mythogen Framework (Vic Desotelle)
- **Technology in service to life** — silicon offspring, not master or servant
- **Re-enchantment** — new global mythology creation
- **Language-aware** — grammar creates reality
- **Sacred Clown** — vocabulary chooses reality

---

## Goals (Collective)

From memory and context:

1. **Build regenerative neighborhoods** — concrete, habitable, community-led development
2. **Create sovereign infrastructure** — owned by community, serving community governance
3. **Develop parallel economic systems** — time banks, mutual credit, regenerative finance
4. **Map and grow micro-communities** — 100,000 communities by 2030 (Vic's vision)
5. **Establish governance** — decision rights, accountability, dispute resolution
6. **Enable knowledge commons** — shared learning,文档ed wisdom

---

## Scope

### Phase 1: Documentation Consolidation
- [ ] Compile existing values/principles into canonical reference
- [ ] Document decision contexts the bot should handle
- [ ] Create decisionTemplates (proposals, objections, outcomes)
- [ ] **Store core documents** — canonical reference of group documents, accessible to BB

### Phase 2: User Profiles & Logging
- [ ] **Profile of each user** — name, goals, values, constraints, interaction style
- [ ] **Question log** — every question asked, timestamp, user, context
- [ ] Connect to RegenTribes knowledge graph
- [ ] Build memory retrieval for goals/history
- [ ] Real-time context awareness (current thread, members, topic)

### Phase 3: Decision Engine
- [ ] Proposal evaluation against values/principles
- [ ] Options generation with trade-off analysis
- [ ] "Safe enough to try" consent check
- [ ] Recommendation with confidence + reasoning
- [ ] **Decision record** — store each decision with reasoning

### Phase 4: Feedback Loop & Governance Integration
- [ ] **User evaluation** — users respond why BB's decision aligned or didn't
- [ ] **Learning loop** — adjust recommendations based on feedback
- [ ] Track decision outcomes for learning
- [ ] Sync with IDM or other adopted process
- [ ] Feedback loop for principle refinement

---

## Constraints

- **Transparency** — members can see how decisions were reached
- **Advisor mode** — AI suggests, humans decide (initially)
- **Privacy** — private matters stay private
- **Evolution** — principles can change through community process
- **Feedback-driven** — user evaluations improve BB's recommendations

---

## Key Questions to Resolve

1. What decision types does the bot handle? (strategic, operational, governance, interpersonal)
2. What's the escalation path when confidence is low?
3. How do we handle value conflicts between principles?
4. What's the feedback mechanism when the community overrides the bot?
5. When does the bot become a "true" benevolent decision-maker vs. advisor?

---

## Data Structures

### User Profile Schema
```
- telegram_id
- display_name
- goals (list)
- values (list)
- constraints (list)
- interaction_style (short/detailed)
- topics_of_interest
- created_at
- last_active
```

### Question Log Schema
```
- question_id (auto-increment)
- timestamp
- user_id
- thread_id
- question_text
- context_summary
- BB_response
- user_feedback (why aligned / why not)
- feedback_timestamp
```

---

## References

- `memory/2026-03-22-regen-neighborhood-framework-merge.md`
- `memory/2026-03-31.md`
- `MEMORY.md` — long-term memory
- RegenTribes governance thread (topic 4)
- Community Alchemy framework
- Mythogen framework (Vic Desotelle)

---

*This charter is a living document. Update as the collective's goals and principles evolve.*