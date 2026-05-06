---
title: Agent Knowledge Systems — Bonfires.ai and llm_wiki Rejected
number: 0001
status: accepted
date: 2026-05-06
authors: Genesis
domain: information
level: system
tags:
  - knowledge-base
  - wiki
  - bonfires
  - llm-wiki
  - architecture
  - tradeoff
---

# Agent Knowledge Systems — Bonfires.ai and llm_wiki Rejected

## Context

Two knowledge system tools were evaluated as LLM wiki solutions for agent-resident knowledge management:

**Bonfires.ai** — hosted knowledge coordination platform. Transforms conversations (Telegram, Discord, forums) + documents into AI-accessible knowledge graphs. Provides real-time ingestion, knowledge graph visualization, and agent hooks.

**llm_wiki** (nashsu/github.com/nashsu/llm_wiki) — desktop application implementing Karpathy's LLM Wiki pattern. Builds persistent wiki from documents using graph relevance, vector search (LanceDB), Louvain community detection, and Deep Research. Runs as Electron desktop app.

Requirement: P2P/offline-resilient operation for total internet blackout scenario, with future migration path to embedded database + reasoning system (SurrealDB, Hyperon).

## Decision

Reject both Bonfires.ai and llm_wiki. Adopt OpenClaw's bundled `memory-wiki` plugin as Phase 1 solution, with Syncthing for P2P sync.

## Options Considered

| Option | Description | Verdict |
|--------|-------------|---------|
| **A** | Bonfires.ai (hosted) | ❌ Rejected — subscription cost, no offline P2P mode |
| **B** | llm_wiki (desktop app) | ❌ Rejected — not agent-integratable, desktop-only |
| **C** | memory-wiki plugin (OpenClaw bundled) | ✅ Adopt — agent-native, configurable, Obsidian-compatible |
| **D** | Custom built on SurrealDB | ⚠️ Phase 3 — requires more development |

## Analysis

### Bonfires.ai — Why Rejected

**Failure modes:**

1. **Subscription barrier**: Monthly cost is incompatible with budget-constrained community operation.
2. **No offline P2P mode**: Bonfires.ai is server-hosted. Assumes live internet. During total blackout, goes completely dark — same as any centralized service.
3. **Proprietary knowledge graph**: Ingested knowledge stays in Bonfires' infrastructure. Cannot replicate or export for P2P sync across nodes.
4. **Integration gap**: Bonfires.ai is closer to what `genesis-brain` (SurrealDB semantic graph) already does — real-time conversation → knowledge graph. The overlap means adopting Bonfires.ai would create duplicate infrastructure.

**What Bonfires.ai does well:**
- Real-time multi-channel conversation ingestion
- Knowledge graph visualization
- Agent hook API

**Verdict**: Not suitable for offline-first, self-hosted, P2P-resilient requirement.

### llm_wiki — Why Rejected

**Failure modes:**

1. **Desktop-only architecture**: Electron app. No server mode, no headless operation, no API. Cannot be wired to an agent. Not designed for headless server environments.
2. **Requires manual app running**: The app must be open and running to serve wiki queries. Goes dark when the app is closed.
3. **No P2P sync mechanism**: Single-user desktop app. No sync, no collaboration, no mesh resilience.
4. **Karpathy LLM Wiki pattern is the right idea, wrong implementation for agents**: The underlying methodology (incremental wiki, two-step ingest, wikilinks, source traceability) is excellent. The implementation is not designed for agent integration.

**What llm_wiki does well:**
- Two-step chain-of-thought ingest (analysis → generation)
- Louvain community detection on knowledge clusters
- Four-signal relevance model (direct links, source overlap, Adamic-Adar, type affinity)
- Obsidian-compatible output

**Verdict**: Good reference implementation of the Karpathy pattern. Not deployable in this architecture.

### memory-wiki — Why Adopted

OpenClaw's bundled `memory-wiki` plugin:

- Agent-native: exposed as `wiki_search`, `wiki_get`, `wiki_apply`, `wiki_lint` tools
- Bridge mode: imports from active memory plugin (QMD, etc.)
- `isolated` mode: owns its own vault, no external dependency
- Obsidian-compatible rendering
- Structured claims with provenance, confidence, evidence metadata
- Dashboard reports: contradictions, low-confidence, stale pages
- Compiled digests for agent consumption (`agent-digest.json`, `claims.jsonl`)

**Phase 1 config:**
```json5
{
  plugins: {
    entries: {
      "memory-wiki": {
        enabled: true,
        config: {
          vaultMode: "isolated",
          vault: { path: "~/.openclaw/wiki/main", renderMode: "obsidian" },
          search: { backend: "shared", corpus: "all" },
          render: { createDashboards: true, createBacklinks: true }
        }
      }
    }
  }
}
```

### P2P Sync — Syncthing

For internet blackout resilience, pair `memory-wiki` with Syncthing:

```
Node A (Hetzner VPS)              Node B (HP EliteBook / laptop)
~/.openclaw/wiki/main/    ←sync→   ~/.openclaw/wiki/main/
```

- Zero internet dependency for wiki access
- Automatic conflict resolution
- Runs on same machine as OpenClaw

### Future Migration Path

The architecture is designed for future migration from Markdown to embedded database:

| Phase | Wiki Backend | Sync |
|-------|-------------|------|
| **Phase 1** | memory-wiki (Markdown vault) | Syncthing |
| **Phase 2** | SurrealDB (same graph schema, vector embeddings) | Syncthing + Radicle |
| **Phase 3** | SurrealDB + Hyperon/MeTTa reasoning layer | Mesh sync |

Structured claims with `sourceId`, `canonicalId`, `entityType` frontmatter are the bridge — these fields map directly to SurrealDB graph nodes.

## Consequences

### Positive

- Agent-resident knowledge query without external dependency
- Provenance-rich wiki with structured claims (not prose-only)
- P2P sync via Syncthing for offline resilience
- Obsidian-compatible vault for human editing
- Migration path preserved: Markdown → SurrealDB → Hyperon

### Negative

- memory-wiki vault is Markdown files — slower to query than embedded vector DB
- Syncthing requires manual setup on each node
- No native Louvain community detection (llm_wiki feature not ported)

### Risks

- Markdown vault grows large without compaction
- Syncthing conflicts may arise with concurrent edits on both nodes
- Phase 2 migration (SurrealDB) requires schema design work

## References

- Bonfires.ai: bonfires.ai
- llm_wiki: github.com/nashsu/llm_wiki (Karpathy LLM Wiki pattern)
- OpenClaw memory-wiki: docs.openclaw.ai/plugins/memory-wiki
- Syncthing: syncthing.net — serverless P2P file sync