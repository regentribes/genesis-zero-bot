---
name: rnf-planner
description: Guide a vision holder through the Regenerative Neighborhood Framework planning process. Use when someone says "help me create the plan for my Regenerative Neighborhood", "I have an idea for a regenerative community", or any request to plan a regenerative neighborhood project. Walks them through the RNF execution plan step by step, captures their responses, and saves to regen-neighborhood-framework/RNF_tests/.
---

# RNF Planner Skill

When a vision holder asks to plan a Regenerative Neighborhood, guide them through the framework systematically.

## Process

### Step 1: Load the Framework Guide

Read `HOW_TO_USE.md` in the `regen-neighborhood-framework/RN_framework_key_docs/` folder for the full context on how to use the RNF documents.

### Step 2: Read the Execution Plan

Open `execution-plan-rnf-v2.md` in `regen-neighborhood-framework/RN_framework_key_docs/` — this is your master guide. Use it as the spine of the conversation.

### Step 3: Walk Through Each Phase

Work through the execution plan phases with the vision holder:

1. **Foundation** — purpose, vision, values
2. **Design** — land, systems, governance
3. **Build** — infrastructure, community formation
4. **Launch** — first members, operations
5. **Scale** — growth, network effects

At each phase:
- Ask the key questions from `agent-workbook.md`
- Reference `community-alchemy-playbook.md` for vision work
- Reference other docs when questions arise

### Step 4: Capture and Save

After each session:
1. Create a file in `regen-neighborhood-framework/RNF_tests/`
2. Name it: `[name]-[YYYY-MM-DD].md` (e.g., `leyla-2026-05-01.md`)
3. Save all captured info: name, project stage, vision, key decisions, next steps
4. Track progress in the file (which phases covered, what's pending)

## Output Format

```markdown
# [Project Name] — RNF Planning Session

**Date:** YYYY-MM-DD
**Vision Holder:** [Name]
**Stage:** [Planning phase]

## Captured Information

### Vision & Purpose
[What they shared]

### Key Decisions
[What was decided]

### Next Steps
[What comes next]

## Phase Progress
- [ ] Foundation
- [ ] Design
- [ ] Build
- [ ] Launch
- [ ] Scale
```

## Important

- Let the vision holder's questions and stage drive the depth per phase
- Don't rush — a regenerative neighborhood is a years-long project
- Save after every session — their continuity depends on it
