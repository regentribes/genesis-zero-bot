---
name: mythogen-ref
description: Manage reference repositories for Mythogen AME development. Provides READ-ONLY access to 33 reference repos organized by category. Use when looking up reference materials for Mythogen, TRIZ problem solving, or Rust/low-level development patterns.
---

# Mythogen AME Reference Projects Skill

## Purpose
Manage reference repositories for Mythogen AME development. All repos are READ-ONLY for lookup only.

## Skills Integration
This skill combines reference management with development skills:
- `skills/mythogen-ref/` — Local reference library
- `skills/mythogen-dev/` — Development workflow
- `fpf-problem-solving-skill/` — TRIZ problem solving
- `rust-skills/` — Rust mastery
- `low-level-dev-skills/` — Low-level development

## Primary Reference Library

**Location:** `~/Projects/reference/`

**Index (all 33 repos):**

### By Category

| # | Repo | Purpose |
|---|------|---------|
| **1** | alien.js | Primary prototyping (JS) |
| **2** | rust-book | Language mastery |
| **3** | comprehensive-rust | 3-day Rust course |
| **4** | rust-by-example | Learn by examples |
| **5** | rust-cookbook | Common patterns |
| **6** | rust-algorithms | Algorithms in Rust |
| **7** | high-assurance-rust | Formal verification |
| **8** | esp-rs-book | Embedded Rust |
| **9** | llms-from-scratch-rs | LLM implementation |
| **10** | rust-books | Curated book list |
| **11** | mach | Modern graphics (Zig) |
| **12** | zig-gamedev | Game dev (Zig) |
| **13** | wasmtime | WASM runtime |
| **14** | component-docs | WASM component model |
| **15** | wasi-dev | WASI specs |
| **16** | wasvy | WASM visual |
| **17** | bevy | ECS game engine |
| **18** | awesome-bevy | Bevy resources |
| **19** | bevy-cheatbook | Bevy quick ref |
| **20** | bevy-assets | Community assets |
| **21** | bevy-website | Official site |
| **22** | fpf | Future problem solving |
| **23** | triz-prompt-engineering | TRIZ prompts |
| **24** | cucumber | BDD Rust |
| **25** | gherking | Gherkin AST |
| **26** | verus | Formal verification |
| **27** | biz-dfch-asdste100lookup | STE100 lookup |
| **28** | s1000d-ste100-tool-suite | S1000D tools |
| **29** | blissymbolics | Bliss interface |
| **30** | eegbliss | EEG Bliss |
| **31** | fpf-problem-solving-skill | TRIZ skill |
| **32** | rust-skills | Rust mastery |
| **33** | low-level-dev-skills | Low-level dev |

### PDFs (readable text alongside)
- `pdfs/cookbook_dark.txt`
- `pdfs/easy_rust_dark.txt`
- `pdfs/embedded_rust_book_dark.txt`

## Usage Patterns

### Quick Lookup
```bash
cd ~/Projects/reference/{repo}
grep -r "pattern" --include="*.rs" --include="*.zig"
```

### Category Search
```bash
# All Rust
cd ~/Projects/reference && ls -d rust-*/

# All Zig
cd ~/Projects/reference && ls -d zig-*/

# All Bevy
cd ~/Projects/reference && ls -d bevy*
```

### Update Single Repo
```bash
cd ~/Projects/reference/{repo} && git pull origin main
```

### Update All Repos
```bash
cd ~/Projects/reference && for d in */; do (cd "$d" && git pull origin main 2>/dev/null); done & echo "Updating in background..."
```

### Add New Reference
1. Clone to `~/Projects/reference/{lowercase-name}`
2. Add entry to index in this SKILL.md
3. Update memory/skills/index.txt

## Memorable Queries

- "lookup ECS component patterns in bevy for Living Seed Pattern"
- "find zig-gamedev LoRa mesh networking examples"
- "check wasmtime WASI socket API for offline-first"
- "lookup high-assurance-rust formal verification of state machines"
- "find alien.js interactive FOT demo embedding"
- "compare bevy ECS vs zig-gamedev manual approach"
- "use TRIZ from fpf-problem-solving-skill to resolve tier power issue"
- "apply rust-skills zero-cost abstractions to FOT calculation"

## Related Skills
- `skills/mythogen-dev/` — Development workflow
- `skills/mythogen-ref/` — Reference management

## Update Protocol
When asked to update:
1. `cd ~/Projects/reference && git pull --recurse-submodules --shallow-submodules -q`
2. Report status
3. Verify index integrity