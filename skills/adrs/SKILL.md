---
name: adrs
description: Create, navigate, and manage Architecture Decision Records (ADRs) for RegenTribes. Use when asked to make an architecture decision, evaluate tradeoffs between technical approaches, file an ADR, or analyze design options. Wraps the adrs CLI tool (joshrotenberg/adrs).
metadata:
  requires:
    bins:
      - adrs
  triggers:
    - "make an architecture decision"
    - "file an ADR"
    - "architecture decision"
    - "ADR"
    - "tradeoff analysis"
    - "evaluate design options"
    - "decision record"
---

# ADRs — Architecture Decision Records Skill

Create, navigate, and manage Architecture Decision Records using the MADR 4.0.0 format.

## Quick Reference

### ADR Format (MADR 4.0.0)

```markdown
---
title: Decision Title
number: NNNN
status: proposed|accepted|deprecated|superseded
date: YYYY-MM-DD
authors: Genesis
domain: information|physical|social|exchange
level: cell|tissue|organ|system|body
tags:
  - tag-1
  - tag-2
---

# Title

## Context
[What is the situation? What prompted this decision?]

## Decision
[What was decided?]

## Options Considered
| Option | Description | Verdict |
|--------|-------------|---------|
| A | ... | ✅ adopted |
| B | ... | ❌ rejected |
| C | ... | ⚠️ deferred |

## Analysis
[Why this decision over alternatives. Be thorough — surface conflicts, edge conditions, blocking constraints.]

## Consequences
### Positive
### Negative
### Risks

## References
[Links, sources, related ADRs]
```

### Status Values

| Status | Meaning |
|--------|---------|
| `proposed` | Under review, not yet accepted |
| `accepted` | Decided and being implemented |
| `deprecated` | Superseded or no longer relevant |
| `superseded` | Replaced by a newer ADR |

### Domain Values

- `information` — knowledge, sensing, memory systems
- `physical` — materials, construction, hardware
- `social` — relationships, governance, decisions
- `exchange` — value flow, trade, resources

### Level Values

- `cell` — smallest unit (individual, single tool, one sensor)
- `tissue` — small group (3–12 people, core team)
- `organ` — neighborhood (12–200 people, local infrastructure)
- `system` — bioregion (multiple neighborhoods, federation)
- `body` — planetary (all bioregions, global standards)

## Storage

RegenTribes ADRs: `~/.openclaw/workspace-genesis/docs/adr/`

ADR naming convention: `NNNN-title-slug.md` (zero-padded 4-digit number).

## Common Workflows

### 1. Evaluate Options and File an ADR

When a request involves choosing between technical approaches:

1. List context — what are the options, what are the constraints?
2. Identify blocking constraints — what makes each option impossible or sub-optimal?
3. Drive conflicts to extremes — surface edge conditions, failure modes
4. Write ADR in MADR format with all options, analysis, and consequences
5. Commit to `docs/adr/` and push to origin

### 2. Tradeoff Analysis Pattern

```
Context → Options (min 3) → Analysis → Consequences → Decision → Phase plan
```

Always:
- Lead with the actual options (not strawmen)
- State blocking constraints explicitly
- Include phase-gated path when full adoption is premature
- Note what is deferred and why
- Identify risks, not just benefits

### 3. Multi-ADRs for Related Decisions

When one decision involves two distinct subjects (e.g., OAD vs. hosted alternatives), split into separate ADRs. Keep each ADR focused on one decision.

### 4. Linked ADRs

Use the `References` section to link related ADRs. Use `Supersedes` / `Superseded by` to track evolution of a decision over time.

## CLI Reference

```bash
cd ~/.openclaw/workspace-genesis/skills/adrs
./adrs list                          # List all ADRs
./adrs search "keyword"             # Search ADR content
./adrs new "Title" --format madr    # Create new ADR (interactive)
```

For automated ADR creation: write the Markdown file directly to `docs/adr/`.

## Skill Usage Examples

**"Evaluate Bonfires.ai vs llm_wiki vs memory-wiki"**
→ File ADR 0001 on agent knowledge systems. Structure: context → 3 options → analysis → consequences → decision.

**"Should we adopt the full OAD or just the workflow grammar?"**
→ File ADR 0000 on OAD phase-gated adoption. Structure: context → blocking constraints → phase plan.

**"We need to decide on our sync strategy for offline operation"**
→ File ADR. Structure: context → options (Syncthing, Radiant, custom) → analysis → consequences.

## Constraints

- `adrs` CLI requires interactive terminal — use for `list` and `search` only in interactive sessions
- For automated/subagent use: write Markdown directly to `docs/adr/`
- All ADRs must be committed and pushed to origin for persistence
- Use MADR 4.0.0 format for machine-readable metadata
- Zero-padded 4-digit numbers: 0000, 0001, 0002, etc.

## References

- MADR format: adr.github.io/madr/
- adrs CLI: github.com/joshrotenberg/adrs
- Original Nygard ADR article: thinkrelevance.com/blog/documenting-architecture-decisions