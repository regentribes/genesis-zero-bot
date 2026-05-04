# Autoagents And Odyssey Programmatic Agent Orchestration

Project: Odyssey - Batteries-included programmatic agent orchestrator

Framework: AutoAgents - Open-source Rust agent framework

Repository: github.com/liquidos-ai/Odyssey

License: MIT / Apache-2.0

Status: Active development (not yet production-ready)

Odyssey is a high-performance, embeddable agent orchestrator written in pure Rust.

It is built on the open-source AutoAgents framework.

It provides a complete runtime for AI agents with built-in tools, memory management, permission gates, and WASM sandboxing.

Why Odyssey matters for RegenTribes: local model support (runs embedded without external API), sandboxed tool execution (security for community infrastructure), deterministic behavior (same inputs produce same outputs), composable agents (build complex behaviors from simple parts), production-quality Rust (no Python dependency hell).

Odyssey Runtime coordinates Agent instances.

Each Agent runs on AutoAgents framework.

Tool Executor provides sandboxed WASM plus permission gates.

Memory Provider uses Rig for LLM integration.

Built-in tools include fs and http.

An Agent is an autonomous entity that receives perceptions (from simulation, user, other agents), reasons using attached LLM or behavior tree, decides actions (tool calls, messages, state changes),
and
stores memory (beliefs, goals, context).

```rust
use odyssey::prelude::*;

pub struct Agent {
    id: AgentId,
    role: AgentRole,
    llm: Option<LLMClient>,  // Rig LLM backing
    behavior_tree: BehaviorTree,  // or LLM reasoning
    memory: MemoryStore,
    tools: Vec<Tool>,
}

impl Agent {
    pub fn tick(&mut self, ctx: &PerceptionContext) -> Vec<Action>;
    pub fn attach_llm(&mut self, client: LLMClient);
    pub fn grant_tool(&mut self, tool: Tool, scope: Scope);
}
```

Behavior Trees provide deterministic, hierarchical agent logic (alternative to LLM-based reasoning).

```rust
pub enum BehaviorNode {
    Sequence(Vec<BehaviorNode>),
    Parallel(Vec<BehaviorNode>, ContinuePolicy),
    Selector(Vec<BehaviorNode>),
    Condition(fn(&Agent) -> bool),
    Action(fn(&mut Agent) -> Result<Action>),
    Wait(Duration),
}

pub struct BehaviorTree { root: BehaviorNode }
```

Example: Habitat Controller

A behavior tree sequence checks CO2 level. If high, activate scrubber. Wait 10 seconds. Check resolved. If low, deactivate scrubber.

Tools are executed in WASM sandboxes with permission gates.

```rust
pub struct ToolPermission {
    pub tool: String,
    pub scope: PermissionScope,
    pub resource_limits: ResourceLimits,
}

pub enum PermissionScope {
    None,
    Read(String),
    Write(String),
    Execute(String),
}

pub fn execute_tool(agent: &Agent, tool: &str, args: JsonValue) -> Result<JsonValue> {
    let perm = agent.permissions.get(tool)?;
    match perm.scope {
        PermissionScope::Execute(resource) => {
            wasm_sandbox.execute(&tool, &args, &resource)
        }
        _ => Err(PermissionDenied),
    }
}
```

Memory stores agent beliefs, goals, and context history.

```rust
pub struct MemoryStore {
    beliefs: Vec<Belief>,
    goals: Vec<Goal>,
    context: Vec<ContextEntry>,
    long_term: AtomSpace,  // Persistent knowledge (MeTTa)
}

pub struct Belief {
    pub content: String,
    pub confidence: f32,
    pub source: Source,
    pub timestamp: DateTime<Utc>,
}

pub struct Goal {
    pub description: String,
    pub status: GoalStatus,
    pub progress: f32,
    pub sub_goals: Vec<Goal>,
}
```

Rig provides LLM-backed agent reasoning (OpenAI, Anthropic, local models).

```rust
use rig::prelude::*;

pub struct LLMClient {
    provider: LLMProvider,
    model: String,
    temperature: f32,
}

impl LLMClient {
    pub async fn complete(&self, prompt: &str) -> Result<String>;
    pub async fn generate<R: DeserializeOwned>(&self, prompt: &str) -> Result<R>;
}

agent.attach_llm(LLMClient::new(LLMProvider::OpenAI, "gpt-4o", 0.7));
```

Odyssey integrates with the Rust Simulation and Agent Platform as follows.

Sim Tick (Bevy ECS) produces state changes.

Obelisk Signal Graph processes signals.

Agent Perception receives data per agent.

Odyssey Runtime ticks agents.

Tool Execution handles sandboxed calls.

LLM Reasoning provides cognition.

WASM Sandbox isolates code.

Rig provides local model inference.

Actions write to SurrealDB and Fluvio Event Log.

Example: Habitat Controller Agent

```rust
use odyssey::prelude::*;
use rig::prelude::*;

let mut controller = Agent::new(
    id: "habitat-controller-01".into(),
    role: AgentRole::Controller,
);

controller.attach_llm(LLMClient::new(
    LLMProvider::Local,
    "llama3.2:latest",  // Ollama local model
    0.3,  // Low temp for deterministic behavior
));

controller.grant_tool(
System (metaphor for an integrated whole or network):
    Tool::FileSystem,
    PermissionScope::Read("/habitat/sensors".into()),
);
controller.grant_tool(
    Tool::Http,
    PermissionScope::Execute("/actuator".into()),
);

controller.set_behavior_tree(controller_bt);
runtime.spawn(controller);
runtime.tick(&sim_context);
```

- Tool
- fs_read
- fs_write
- http_get
- http_post
- shell
- eval_wasm
- surreal_query
- surreal_write

```yaml
odyssey:
  runtime:
    max_agents: 256
    tick_interval_ms: 100
    parallel_execution: true
  memory:
    max_context_tokens: 8192
    belief_decay: true
  sandbox:
    wasmtime_version: 22
    max_memory_mb: 512
    max_cpu_cycles: 1000000
  llm:
    default_provider: local
    local_endpoint: http://localhost:11434
```

- Feature
- Language
- Local models
- WASM sandboxing
- Deterministic BT
- Production ready
- Embedded deployment
- Memory management






066 067 054 056

