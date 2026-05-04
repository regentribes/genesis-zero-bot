# Hermes Agent Network Complete Technical Reference

Hermes Agent is a self-improving AI agent built by Nous Research.

The project has spawned multiple implementations across languages and platforms.

Key implementations include the Python original, three Rust rewrites, and an SDK.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): The ecosystem centers on a closed learning loop where the agent improves from experience.

Source: github.com/nousresearch/hermes-agent

The Python Hermes Agent is the original implementation.

It is built by Nous Research and marketed as the agent that grows with you.

Install command:

curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

Requirements: Python 3.11, Linux/macOS/WSL2/Termux.

Minimum context window: 64K tokens.

The defining feature of Hermes Agent is its built-in learning loop.

After completing complex tasks, the agent autonomously creates skills.

Skills are markdown documents that encode procedures learned.

Skills self-improve during use based on feedback.

This creates a closed loop where each session makes future sessions better.

Hermes maintains layered memory across sessions.

Layer 1 is always-loaded prompt memory.
This includes SOUL.md, USER.md, AGENTS.md files.

Layer 2 is SQLite session storage with FTS5 full-text search.
LLM summarization enables cross-session recall.

Layer 3 is procedural skills stored as markdown documents.
Skills are compatible with agentskills.io open standard.

Honcho dialectic user modeling provides persistent user understanding.

Skills are reusable workflow documents created autonomously by the agent.

The agent decides to persist useful procedures as skills after complex tasks.

Skills follow the agentskills.io open standard format.

Skills are stored as markdown files in a skills directory.

Built-in skills include coding agents, architecture diagrams, ASCII art, video generation, GitHub management, LLM fine-tuning, audio generation, and more.

Skills hub provides browsable catalog of available skills.

Hermes ships with 40+ built-in tools.

Tools are organized into logical toolsets configurable per platform.

Tool categories include terminal operations, file management, web search, browser automation, code execution, image generation, and delegation.

Tools available include hermes (interactive CLI), claude-code (delegation), codex (delegation), opencode (delegation), architecture-diagram, ascii-art, ascii-video, excalidraw, manim-video, p5js, github-auth, github-code-review, github-issues, github-pr-workflow, github-repo-management, huggingface-hub, llama-cpp, serving-llms-vllm, unsloth, fine-tuning-with-trl, audiocraft-audio-generation, axolotl, dspy, evaluating-llms-harness, google-workspace, linear, maps, notion, nano-pdf, powerpoint,
and
more.

Hermes gateway connects to 17 messaging platforms simultaneously.

Supported platforms: Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Email, Home Assistant.

Single gateway process manages all platform connections.

Conversation continuity maintained across all platforms.

Voice mode supported with VAD plus STT plus TTS pipeline.

Hermes is model-agnostic with no provider lock-in.

Supported providers: Nous Portal, OpenRouter (200+ models), NVIDIA NIM (Nemotron), Xiaomi MiMo, z.ai/GLM, Kimi/Moonshot, MiniMax, Hugging Face, OpenAI, Anthropic, custom OpenAI-compatible endpoints.

Switch providers with hermes model command, no code changes.

Recommended providers by use case: Nous Portal for least friction, Anthropic/OpenAI for existing auth, OpenRouter for multi-provider routing, Ollama/custom endpoints for local inference.

Six terminal backend options for secure execution.

Backend 1 is local: direct execution on host OS.

Backend 2 is Docker: container isolation.

Backend 3 is SSH: remote server execution.

Backend 4 is Daytona: serverless sandbox with hibernation.

Backend 5 is Singularity: HPC container runtime.

Backend 6 is Modal: serverless GPU infrastructure.

Daytona and Modal hibernate when idle, minimizing costs.

MCP stands for Model Context Protocol.

MCP acts as an adapter layer connecting Hermes to external tool servers.

External MCP servers contribute tools discovered at startup or reload.

Fine-grained control over which MCP tools are exposed to Hermes.

Use cases: existing MCP tools, local or remote system access via RPC, internal company systems.

Configuration via hermes config.yaml with MCP server definitions.

Example MCP server: github server via npx.

ACP stands for Agent Client Protocol (Apache 2.0, by Zed).

ACP standardizes communication between code editors and AI agents.

Hermes can run as an ACP server for editor integration.

ACP-compatible editors: VS Code, Zed, JetBrains IDEs.

Communication via JSON-RPC 2.0 over stdio.

ACP toolset includes file tools, terminal tools, web and browser tools, memory management, and task delegation.

ACP mode enables Hermes to act as an editor-native coding agent.

Ongoing work to generalize ACP client to orchestrate other coding agents: Claude Code, Codex CLI, Gemini CLI.

Hermes supports 24/7 autonomous workspace-driven operation.

Reads TODO.md for task queue, validates with local tests, pushes after success.

Autonomous loop structure: inspect repo, implement next pending task, update TODO.md.

Validation via configured test command before any git push.

Git operations are strict: tests must pass before push.

Repeated failures pause the loop until TODO.md or git state changes.

Pause state persisted in autonomous-status.toml across process restarts.

TODO.md structure: ## Implemented for completed work, ## Pending for next tasks.

Built-in cron scheduler with natural language or cron expression syntax.

Deliverables sent to any configured platform.

Use cases: daily reports, nightly backups, weekly audits.

Tasks run unattended without manual triggering.

Hermes auto-discovers project context files: .hermes.md, AGENTS.md, CLAUDE.md, HERMES.md, .cursorrules.

Context injected into system prompt for every conversation.

Files, folders, Git diffs, and URLs can be injected directly as references.

Context compression and caching manage token usage efficiently.

Obvious prompt-injection patterns are blocked before injection.

Hermes provides automatic migration from OpenClaw.

Command: hermes claw migrate

Migrated items: SOUL.md persona file, memories (MEMORY.md, USER.md), skills, command allowlist, messaging settings, API keys (allowlisted), TTS assets, workspace instructions.

Migration options: --dry-run preview, --preset user-data (no secrets), --overwrite (force conflicts).

Three independent Rust rewrites of Hermes Agent exist.

Each targets different use cases and priorities.

All are MIT or Apache-2.0 licensed.

Source: github.com/Lumio-Research/hermes-agent-rs

Status v0.1: Core agent loop, 10 LLM providers, 30 tool backends, 17 platform adapters, memory system, CLI/TUI production-ready.

Parity roadmap modules still being completed (see PARITY_PLAN.md).

Key differentiator: zero dependencies, single static binary.

No Python, no pip, no Docker required.

Runs on Raspberry Pi, $3 VPS, or air-gapped server.

Architecture modules:

hermes-cli is the binary entry point, TUI, slash commands.

hermes-agent is the agent loop, LLM providers, memory plugins.

hermes-core provides shared types, traits, error hierarchy.

hermes-intelligence handles model routing, prompt building, self-evolution.

hermes-config handles config loading, YAML/env merging.

hermes-tools provides 30+ tool backends, approval engine.

hermes-gateway provides 17 platform adapters, session management.

hermes-environments handles terminal backends: Local/Docker/SSH/Daytona/Modal/Singularity.

hermes-mcp provides Model Context Protocol client and server.

hermes-acp provides Agent Communication Protocol.

hermes-skills handles skill management and hub.

hermes-cron handles cron scheduling.

hermes-http provides REST/WebSocket API server.

hermes-auth handles OAuth token exchange.

hermes-eval provides SWE-bench, Terminal-Bench, YC Bench evaluation.

hermes-telemetry provides OpenTelemetry plus Prometheus.

Key traits: LlmProvider (10 providers), ToolHandler (30+ backends), PlatformAdapter (17 platforms), TerminalBackend (6 backends), MemoryProvider (8 plugins).

Tool call parsers: Hermes, Anthropic, OpenAI, Qwen, Llama, DeepSeek, Auto.

Rust tokio runtime enables true concurrency across OS threads.

A 30-second browser scrape does not block a 50ms file read.

No GIL bottleneck unlike Python counterparts.

Self-evolution engine includes multi-armed bandit model selection, long-task planning, prompt and memory shaping.

Install: cargo install --git https://github.com/Lumio-Research/hermes-agent-rs hermes-cli --locked

Docker: docker run --rm -it -v ~/.hermes:/root/.hermes ghcr.io/lumio-research/hermes-agent-rs

Test suite: cargo test --workspace (1,428 tests), cargo clippy for linting, cargo fmt for formatting.

MIT licensed.

Source: github.com/eikarna/hermes-rs

A high-performance Rust implementation of the Hermes Agent orchestration loop.

Target: LLM-driven tool execution with streaming-first architecture.

Key architectural decisions:

Streaming-first: tool calls detected and executed incrementally from partial LLM outputs.

Tolerant XML parser: handles malformed tags, unclosed JSON with state-machine parsing.

Early tool detection: tool execution initiated as soon as detected.

Self-healing: automatic re-prompt with error context on failures.

Dynamic schema generation: JSON Schema auto-generated from Rust structs.

Shared TOML configuration: one runtime config model across CLI and core.

Architecture modules:

OpenAI client for API communication.

XMLParser (tolerant) for streaming tool call extraction.

ToolRegistry and execution engine.

ReAct orchestration loop: Think, Plan, Execute Tools, Observe, Respond.

TUI via ratatui: prompt-first landing view, responsive workspace panes, constrained-terminal fallback, reasoning display, MCP/Skills/Behavior management.

Commands: autonomous (continuous loop), run (one-shot query), tools (list), chat (interactive), test (tool testing).

Config loading order: --config flag, ./hermes.toml, ./.hermes.toml, OS config directory, environment variables, CLI flags.

TOML-based configuration (not YAML).

Workspace guidance files loaded: AGENTS.md, CLAUDE.md, .hermes.md, HERMES.md, .cursorrules.

Autonomous mode: reads TODO.md on every tick, validates with tests, commits only after success.

Dual-licensed under MIT or Apache 2.0.

Unofficial community port, not affiliated with Nous Research.

Source: github.com/rsasaki0109/hermes-agent-rs

Minimal Rust CLI-only port of Hermes Agent.

Design goal: minimal footprint with essential features.

Provider support: OpenAI-compatible API (HTTP /v1/chat/completions) or Anthropic Messages API.

Switch providers via model.provider in YAML.

Built-in tools: echo, read_file, write_file, memory, list_dir, grep.

Optional bash tool behind allow_bash flag and BASH_ALLOW_EXECUTE environment variable.

Memory: in-process KV or JSON file persistence (memory.kind: json_file).

Skills: optionally load skills_dir/*/skill.md, append to system prompt.

REPL: line editing and history via rustyline, -v for debug logs.

Rust stable toolchain.

Install: git clone, cargo build --release, copy config.example.yaml to config.yaml.

Config format: YAML with fields for model (provider, base_url, api_key_env, name), system_prompt, tools list, max_steps, temperature, allow_bash, memory, skills_dir.

Supports Ollama OpenAI-compatible endpoint with dummy API key.

Supports Anthropic API with ANTHROPIC_API_KEY environment variable.

Format checking: cargo fmt, cargo clippy, cargo test.

Apache-2.0 licensed.

Source: github.com/junix/hermes-sdk-rs

Rust SDK for Hermes Agent API server using Responses API.

Provides Rust programmatic access to Hermes Agent capabilities.

Purpose: build custom integrations with Hermes Agent backend.

v0.60 introduced multi-agent profiles.

MCP server support added in v0.60.

Enhanced platform adapter support.

See github.com/NousResearch/hermes-agent releases for changelog.

NousBench is the Nous Research benchmarking system.

Used internally for evaluating Hermes Agent performance.

NousBench tracks Nous-2 and Nous-3 model evaluations.

Part of the broader Nous Research ecosystem for agent evaluation.

Dimension 1 is language: Python (NousResearch) versus Rust (three rewrites).

Dimension 2 is dependencies: Python original has pip/venv dependencies, Lumio Rust is zero-dependency single binary.

Dimension 3 is platforms: Lumio claims 17 platform adapters, NousResearch Python supports major messaging platforms, rsasaki0109 is CLI-only.

Dimension 4 is memory: Python original has Honcho dialectic modeling, FTS5 SQLite, layered skill system. Lumio has 8 memory backend plugins. rsasaki0109 has simple JSON file KV.

Dimension 5 is self-improvement: Python original has full closed learning loop with autonomous skill creation. Lumio has self-evolution engine with multi-armed bandit. Others are read-only tool execution.

Dimension 6 is licensing: all MIT or Apache-2.0.

Use Python NousResearch for: full feature set, closed learning loop, broadest platform support, voice mode, ACP/MCP editor integration, OpenClaw migration path.

Use Lumio-research Rust for: production deployment, zero dependency runtime, maximum concurrency, enterprise telemetry, MCP/ACP protocol support, Docker/sandbox security.

Use eikarna Rust for: high-performance local development, streaming tool execution, self-healing error recovery, autonomous coding mode, ratatui TUI experience.

Use rsasaki0109 Rust for: minimal footprint, CLI-only use, Ollama or Anthropic endpoints, simple skill loading, quick prototyping.

NousResearch GitHub: github.com/nousresearch/hermes-agent

Documentation: hermes-agent.nousresearch.com/docs

Nous Research Discord: discord.gg/NousResearch

Lumio Research GitHub: github.com/Lumio-Research/hermes-agent-rs

eikarna GitHub: github.com/eikarna/hermes-rs

rsasaki0109 GitHub: github.com/rsasaki0109/hermes-agent-rs

junix GitHub: github.com/junix/hermes-sdk-rs

Hermes Agent explicitly supports migration from OpenClaw.

Importable items: SOUL.md, MEMORY.md, USER.md, skills, API keys, messaging settings.

See .



188

