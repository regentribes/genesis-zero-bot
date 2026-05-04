---
name: mythogen-dev
description: Specialized agent skill for working with the Mythogen Affinity Mapping Engine project. Use when tasks involve mythogen-ame repository, AME/FOT implementation, community architecture design, or Radicle/GitHub operations.
---

# Mythogen AME Development & Deployment Skill

## Purpose
Specialized agent skill for working with the Mythogen Affinity Mapping Engine project.

## When to Use
- Any task involving mythogen-ame repository
- AME/FOT implementation questions
- Community architecture design
- Radicle/GitHub operations

## Project Context
- **Repo:** github.com/regentribes/mythogen-ame
- **Radicle:** rad:z2cQFT6B1f817HpgB883fkWcEUJeQ
- **Language stack:** Rust (Tier 1/3) + Zig (Tier 2)
- **Architecture:** 10 parallel task areas in `tasks/`

## Key Patterns

### Working with Tasks
Each task has:
```
tasks/{task-name}/
├── PROMPT.md           # Ralph Orchestrator instructions
├── features/           # Gherkin .feature files
└── steps/              # Step definitions
```

### Commit Format
```
feat: {description}
fix: {description}  
refactor: {description}
docs: {description}
test: {description}
```

### Branch Naming
- Feature: `feat/{task}-{description}`
- Bugfix: `fix/{task}-{description}`
- Task work: `task/{task-name}`

## Memorable Query Samples

### Architecture & Design
- "design the living seed pattern data model for the AME"
- "implement the FOT hologram trust calculation"
- "create the V-Crystal immune system state machine"
- "design the anti-capture Y Card transparency system"

### Task Management
- "spawn 5 agents to work on core-engine, fot-tracker, anticapture, database-schema, and testing-ci tasks in parallel"
- "check status of all task branches on radicle"
- "compare current implementation against AME-Architecture-Mythogen.md"

### Radicle Operations
- "sync mythogen-ame on radicle and check peer connections"
- "check iris.radicle.xyz connectivity"
- "create a patch for the current main branch"

### Community Design
- "apply the Four Distinctions to a member profile structure"
- "calculate the Field of Trust for a community with these indicators"
- "model the Concentrix Learning Matrix for a pod of 5"

### Development
- "write a Gherkin feature file for the Living Seed Pattern"
- "add unit tests for the TrustDetector hologram principle"
- "benchmark power consumption across all 4 tiers"

### Emergency / Debug
- "rollback to last known working state on main"
- "diagnose why the embedded tier won't compile"
- "emergency: restore radicle node from backup"

## Anti-Capture Reminders
When working on this project, always:
1. Ground designs in Living Seed Pattern + Four Distinctions
2. Implement FOT hologram principle (composite = minimum, not average)
3. Include V-Crystal immune system states
4. Design for power efficiency (field deployment, not dev machine)
5. Maintain Concentrix (polycentric) not concentric thinking

## File Locations
- Core implementation: `src/`
- Tests: `tests/`
- Architecture docs: `docs/AME-Architecture-Mythogen.md`
- ADRs: `docs/adr/`
- Task prompts: `tasks/*/PROMPT.md`
