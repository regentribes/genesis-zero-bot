# Skills Responsibilities — Genesis RegenTribes

## Active Skills (32)

### Core — Always Available
| Skill | Purpose | Trigger |
|---|---|---|
| **genesis-brain** | Knowledge graph queries, semantic search | "what do you know about", "query brain" |
| **telegram** | Telegram Bot API design | Telegram workflows, bot commands |
| **telegram-compose** | Formatted message sending | Structured/long messages |
| **telegram-history** | Versioned conversation history | Telegram history queries |
| **web-search** | DuckDuckGo web research | Research, fact-checking |
| **summarize** | URL/file summarization | "summarize", "what's this about" |
| **youtube** | YouTube data + transcripts | YouTube queries |
| **video-transcript-downloader** | Video/audio download | "download", "transcript" |
| **transcribe** | Whisper audio transcription | Voice messages, audio files |
| **weather** | Weather forecasts | "weather in X" |

### Community & Vision
| Skill | Purpose | Trigger |
|---|---|---|
| **alchemy** | Community Alchemy Playbook | "alchemy", "community vision", "/alchemy" |
| **dreamcatcher** | Idea capture + development | "idea", "capture my idea", "build something" |
| **rnf-planner** | Regenerative Neighborhood Framework | "RNF", "regenerative neighborhood plan" |
| **regen-viz** | 3D force graph visualization | "visualize", "3D graph" |

### Research & Knowledge
| Skill | Purpose | Trigger |
|---|---|---|
| **deep-research-pro** | Multi-source research agent | "research X", "deep dive" |
| **knowledge-extraction** | Document → knowledge fragments | File attachments |
| **knowledge-graph** | Knowledge graph management | Knowledge graph queries |
| **semantic-graph** | SurrealDB semantic graph pipeline | Graph ingestion/queries |
| **recursive-knowledge-miner** | Structured knowledge extraction | "extract knowledge" |
| **kreuzberg** | 75+ document format extraction | PDF, Office, images |

### Technical Stack
| Skill | Purpose | Trigger |
|---|---|---|
| **rust** | Rust idioms, ownership, FFI | Rust code, "write Rust" |
| **rust-patterns** | Production Rust patterns | Rust architecture, async |
| **iot** | MQTT, CoAP, Zigbee, embedded | IoT, sensors, hardware |
| **cicd-pipeline** | GitHub Actions pipelines | "CI", "pipeline", "GitHub Actions" |
| **sbom-generator** | CycloneDX/SPDX SBOM | "SBOM", "supply chain" |
| **formal-provers** | Lean 4, Coq, Z3 SMT | Formal verification, proofs |
| **nix-mode** | Nix operations | NixOS, Nix configuration |
| **ossinsight-api** | GitHub analytics API | OSS analytics, repo stats |
| **software-architect** | System design decisions | Architecture, design patterns |
| **github-api** | GitHub REST API | GitHub operations |

### Meta / Utilities
| Skill | Purpose | Trigger |
|---|---|---|
| **skill-creator** | Build new skills | "create a skill", "build skill" |
| **find-skills** | Discover ClawHub skills | "find a skill for X" |
| **gog** | Google Workspace CLI | Gmail, Calendar, Drive |

---

## Archived Skills (31)

Moved to `skills-archive/` — not loaded into context. To restore: move directory back to `skills/`.

### Specialized / Archived
| Archived | Purpose | When to Restore |
|---|---|---|
| **kubernetes-devops** | K8s manifest generation | Active k8s cluster work |
| **kubernetes-encyclopedia** | K8s reference | K8s-heavy projects |
| **k8s-security-review** | K8s security analysis | Production k8s |
| **k8s-incident-response-playbook** | K8s incident response | Active incident |
| **toolweb-kubernetes-hardening** | K8s hardening configs | Production k8s |
| **kubectl-skill** | kubectl command reference | K8s CLI work |
| **rust-skill** | Rust skill authoring | Building Rust skills |
| **secrets-management** | Vault, SOPS, CI secrets | Active secrets project |
| **cargo-toml-validator** | Cargo.toml validation | Rust crate maintenance |
| **formal-provers** | Lean/Coq/Z3 | Formal verification work |
| **deepwiki-repo-analyzer** | DeepWiki repo analysis | Architecture research |
| **systems-engineering** | INCOSE, GSN, STPA | Safety case writing |
| **alien-js-dev** | Alien.js/Mythogen demos | Visual demo work |
| **space-js** | Space.js UI library | Sci-fi HUDs |
| **mythogen-dev** | Mythogen framework dev | Mythogen work |
| **mythogen-ref** | Mythogen reference | Mythogen work |
| **radicle** | Radicle p2p git | Radicle hosting |
| **ralph-runner** | Ralph agent orchestrator | Ralph automation |
| **regen-vision** | Regen Vision framework | Vision work |
| **regen-cas** | Content-addressable storage | CAS deduplication |
| **regen-tribes-notes** | RegenTribes notes | Notes management |
| **regen-tribes-skill** | RegenTribes skill | RegenTribes integration |
| **telegram-export-analyzer** | Telegram export analysis | Telegram data |
| **tetra-format** | MeTTa/JSON/N3/CSV formats | Format conversion |
| **surreal-skills** | SurrealDB management | SurrealDB admin |
| **aisystant-fpf** | AISystant FPF reference | AISystant work |
| **asd-ste100** | STE100 simplified English | Technical writing |
| **llm-pareto-analyzer** | LLM Pareto analysis | LLM research |
| **youtube-transcript-api** | YouTube transcript API | YouTube work |
| **fragment-engine** | Fragment engine | Fragment processing |
| **artifacts** | Artifact reference | Documentation |

### Restoration Command
```bash
mv skills-archive/<skill-name> skills/<skill-name>
```

### Batch Restore (all)
```bash
for d in skills-archive/*/; do
  mv "$d" skills/
done
```

---

## Optimization Notes

- 57 skills → 32 active (44% reduction)
- Archived skills are fully preserved — not deleted
- OpenClaw loads skills based on conversation context matching
- Skills with SKILL.md are discovered automatically
- No config changes needed — directory-based

## Adding New Skills

```bash
clawhub install <skill> --workdir ~/.openclaw/workspace-genesis --dir skills
```

Or manually: create `skills/<name>/SKILL.md` with proper frontmatter.
