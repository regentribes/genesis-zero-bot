# Webassembly Runtimes Network Survey

WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine.
Wasm was designed as a portable compilation target for high-level languages.
The W3C standardized Wasm in 2017 as the fourth official web language alongside HTML, CSS, JavaScript.

System (metaphor for an integrated whole or network):

WASI stands for WebAssembly System Interface.
WASI provides a standardized way for Wasm modules to interact with host operating systems.
WASI enables Wasm outside the browser for serverless, edge, embedded, and IoT use cases.

The Bytecode Alliance maintains Wasm standards and hosts major runtime projects.

Wasmtime is developed by the Bytecode Alliance.
It is considered the reference implementation for Wasm runtimes.
Wasmtime prioritizes security, standards compliance, and predictable performance.
Cranelift code generator provides consistent execution speed.
Peak execution speed is not the primary goal.

Cold start is 2 to 5ms for typical modules.
Execution overhead is 5 to 10 percent compared to native code.
Memory footprint is approximately 15MB for the base runtime.
Suitable for multi-tenant infrastructure with strong sandboxing requirements.
Suitable for serverless functions where response time matters.
Part of the broader stack including JIT compilation and garbage collection proposals.

Wasmer positions itself as a universal Wasm runtime.
Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): Focuses on portability, ease of use, and broad ecosystem.
Enables lightweight containers across desktop, cloud, edge, and browser.

Three compiler backends: Singlepass, Cranelift, LLVM.
Singlepass offers fastest cold start under 1ms.
LLVM achieves near-native performance with 2 to 3 percent overhead.
Cranelift provides balanced compilation speed and execution performance.

Unique package manager ecosystem through Wasmer Central.
Modules can be shared and deployed as standalone executables.
Headless mode allows running precompiled Wasm with minimal overhead.
Supports WASIX (extended WASI) for richer system interaction.
Extensive language integrations: Rust, C, C++, Go, Python, Ruby, PHP, C#, Java, Swift.

Use cases: standalone executables, distribution of AI software to edge devices, serverless functions.

WasmEdge is a CNCF (Cloud Native Computing Foundation) project.
improved for high-performance edge computing, cloud-native applications, and AI inference.
Brings cloud-native and serverless paradigms to the edge.

Startup is up to 100 times faster than Linux containers.
Runtime is 20 percent faster than Linux containers.
Application size can be 1/100 of a similar Linux container app.
Supports Ahead-of-Time (AOT) improvement for near-native performance.

WASI-NN (Neural Network) support for AI inference at the edge.
Can be embedded into applications written in C, Go, Rust, Node.js, Python.
JavaScript support via quickjs.
Supports WASI-like extensions and cloud-native management.
Specialized for resource-constrained edge environments.
Supports containerd and Kubernetes integration.

Use cases: edge AI inference, serverless functions, embedded functions, microservices, IoT.

wazero is written purely in Go with zero dependencies.
Avoids CGO complexities, enables cross-compilation, integrates with Go features.
Go developers can embed Wasm without external dependencies.

Interpreter mode and compiler mode available.
Compiler mode compiles Wasm to native machine code ahead of time.
Compiler is an order of magnitude faster than interpreter for many workloads.
Pure Go implementation avoids CGO overhead that slows other runtimes.

Conforms to WebAssembly Core Specification 1.0 and 2.0.
Built-in WASI support.
CLI available for running Wasm binaries.
Programming interfaces for Go developers.
Focus on startup times and pre-initialization.

Use cases: Go-based serverless platforms, cloud-native infrastructure, resource-constrained environments.

Wasm3 is an interpreter-based Wasm runtime written in C.
Ultra-fast cold start with 0.8ms measured.
But slower peak execution: 8,450ms for Fibonacci(40) vs ~1,800ms for JIT runtimes.
Memory footprint is minimal: approximately 4MB peak.
Suitable for IoT and extremely resource-constrained environments.
No JIT compilation overhead.

WAMR is a Bytecode Alliance project.
Lightweight standalone Wasm runtime with small footprint and high performance.
Highly configurable for embedded, IoT, edge, TEE, smart contract, cloud-native applications.

Three running modes: interpreter, Ahead-of-Time (AoT), Just-in-Time (JIT).
Fast JIT tier and LLVM JIT tier available.
Dynamic tier-up from Fast JIT to LLVM JIT.
Self-implemented AOT module loader works on Linux, Windows, MacOS, Android, SGX, MCU systems.

Runtime binary size benchmarks (core vmlib on cortex-m4f with tail-call, bulk memory, shared memory support):
Approximately 58.9K for fast interpreter.
Approximately 56.3K for classic interpreter.
Approximately 29.4K for AoT runtime.
Approximately 21.4K for libc-wasi library.
Approximately 3.7K for libc-builtin library.

Choices of Wasm application libc support: built-in libc subset for embedded or WASI for standard libc.

Architecture support: X86-64, X86-32, ARM, THUMB (Cortex-M7 and Cortex-A15 tested), AArch64 (Cortex-A57 and Cortex-A53 tested), RISCV64, RISCV32 (LP64 and LP64D tested), XTENSA, MIPS, ARC.

Platform support: Linux, Windows, MacOS, Android, SGX, MCU systems.

Features: multiple modules as dependencies, pthread APIs
and
thread management, wasi-threads, Linux SGX support, source debugging, XIP (Execution In Place), Berkeley/Posix Socket support, multi-tier JIT, language bindings for Go, Python, Rust, wasm-c-api, 128-bit SIMD, reference types, bulk memory operations, shared memory, Memory64, tail-call, garbage collection, exception handling, branch hinting, extended constant expressions.

Cold start metric measures module load plus instantiation in milliseconds.
Critical for serverless and FaaS where rapid scaling matters.

Fibonacci(40) measures CPU-intensive recursion in milliseconds.
Measures JIT and AoT peak performance.

Memory ops measures 1MB buffer read/write in milliseconds.
Simulates I/O bound workload.

Peak memory measures maximum RSS during execution in megabytes.
Resource footprint.

Industry standard benchmark suite at wasm-runtime-benchmarks repository (wasmruntime-io).

Runtime cold start comparison:
Wasmtime is 5.2ms.
Wasmer is 8.1ms.
WasmEdge is 6.8ms.
wazero is 12.3ms.
Wasm3 is 0.8ms (interpreter, slowest peak performance).

Runtime Fibonacci(40) comparison:
Wasmtime is 1,823ms.
Wasmer is 1,756ms.
WasmEdge is 1,912ms.
wazero is 2,104ms.
Wasm3 is 8,450ms.

Runtime memory ops comparison:
Wasmtime is 45ms.
Wasmer is 52ms.
WasmEdge is 48ms.
wazero is 61ms.
Wasm3 is 210ms.

Runtime peak memory comparison:
Wasmtime is 12MB.
Wasmer is 18MB.
WasmEdge is 15MB.
wazero is 8MB.
Wasm3 is 4MB.

Rusternetes (calfonso/rusternetes) is a ground-up reimplementation of Kubernetes in Rust.
216,000 plus lines of Rust across 10 crates.
31 controllers, 3,100 plus tests.
Passes 90 percent of official Kubernetes e2e conformance tests (398/441) across 149 rounds.
Every component written from scratch: API server, scheduler, controller manager, kubelet, kube-proxy.

Rust outperforms Go in controller reconciliation speed.
Rust eliminates garbage collection pauses that cause Go controllers to stutter under load.
Rust compiler enforces correctness in Kubernetes API interaction.

Three deployment modes from same codebase:
Full cluster with etcd: standard production with separate containers per component.
Swap the database: replace etcd with Rhino (etcd-compatible gRPC server in Rust) using SQLite, PostgreSQL, or MySQL.
Single binary single process: all five components as concurrent tokio tasks with embedded SQLite database.
No containers, no external dependencies.
Single SQLite file holds entire cluster state.

Built-in web console: real-time cluster topology, live metrics, pod log streaming, full resource management.

Axum-based HTTPS server implementing Kubernetes REST API.
76 handler modules covering core/v1, apps/v1, batch/v1, rbac.authorization.k8s.io/v1, storage.k8s.io/v1, networking.k8s.io/v1.
Full CRUD for all major resource types, Watch API with SSE, Server-Side Apply, Strategic Merge Patch, JSON Patch, field selectors, label selectors, Custom Resource Definitions with watch, status/scale subresources, schema validation, validating
and
mutating admission webhooks, ValidatingAdmissionPolicy with CEL expressions, RBAC authorization, ServiceAccount JWT token signing, TLS/mTLS, audit logging, Pod Security Standards, OpenAPI v3 discovery, aggregated discovery.

Scheduler filter/score plugin architecture: node/pod affinity and anti-affinity, taints and tolerations, resource requests and limits scoring, priority classes and preemption, topology spread constraints.

31 reconciliation controllers: Deployment, ReplicaSet, ReplicationController, StatefulSet, DaemonSet, Job, CronJob, Endpoints, EndpointSlice, Service, ServiceAccount, Namespace, Node, PV Binder, PVC Binder, and more.

youki (youki-dev) is an OCI runtime-spec implementation in Rust, similar to runc.
Pronounced /joki/ or yoh-key.
Japanese word meaning container.
Also means cheerful, merry, or hilarious.

youki benchmarks (container creation to deletion):
youki mean is 111.5ms with standard deviation 11.6ms.
runc mean is 224.6ms with standard deviation 12.0ms (200 percent of youki).
crun mean is 47.3ms with standard deviation 2.8ms (42 percent of youki, fastest).

Memory usage: youki uses less memory than runc in tight memory environments.
Rust provides memory safety while handling system calls for namespaces, fork.
Go has tricky handling for namespaces(7), fork(2).
Rust provides benefits without garbage collector overhead.

youki has passed containerd e2e tests and is used in production.
Supports rootless mode for non-root container execution.
Local build supported on Linux only.
Kernel requirement is 5.3 or higher.

smolvm (smol-machines/smolvm) builds and runs portable, lightweight, self-contained virtual machines.
Cross-platform: macOS, Linux.
Sub-second cold start, elastic memory usage.
Single file artifact (.smolmachine) for portability.
Hardware isolation via hypervisor: Hypervisor.framework on macOS, KVM on Linux.
libkrun VMM with custom kernel (libkrunfw).

Network is opt-in with --net flag.
Sandbox untrusted code with hardware-isolated VM.
Host filesystem, network, credentials separated by hypervisor boundary.
Egress control: --allow-host flag limits outbound connections.

Pack into portable executables: any workload becomes self-contained binary.
Boots in under 200ms.
Persistent machines for development.
Declarative environments via Smolfile TOML.
SSH agent forwarding without exposing keys to guest.

OCI format images: any image from Docker Hub or ghcr.io pulled and booted as microVM.
No Docker daemon required.
Default 4 vCPUs, 8 GiB RAM with elastic memory via virtio balloon.

Comparison to containers:
smolvm: VM per workload, hardware isolation, less than 200ms boot, library (libkrun), embeddable SDK, portable .smolmachine.
Containers: namespace (shared kernel), 100ms boot, daemon required.
Colima: namespace (1 VM), 15 to 30 seconds boot, daemon.
QEMU: separate VM, seconds boot, process.
Firecracker: separate VM, less than 125ms boot, process.
Kata: VM per container, 500ms boot, runtime stack.

fx (nikitavbv/fx) is a Wasm FaaS runtime written in Rust.
Inspired by Cloudflare workerd.
Functions compiled to Wasm (wasm32-unknown-unknown).
Triggers: HTTP requests, Kafka messages, cron schedules.
Functions are async and handle requests concurrently.
Input and output can be streams.
KV storage, SQL via SQLite.
Function-to-function RPC (same thread, no networking, very low latency).
Log, fetch, random, time APIs.
Live reload functions.

fx performs on par with Node.js and at 46 percent of native Rust (axum).

fx benchmark (TechEmpower Fortunes on Hetzner CCX23):
fx: 17,499 requests per sec, 455 microseconds latency.
axum (native Rust): 37,963 requests per sec, 221 microseconds latency.
Node.js: 17,200 requests per sec, 465 microseconds latency.

Note: toy project with missing APIs and edge case handling.

chiwawa (oss-fun/chiwawa) enables live migration and instrumentation for Wasm runtimes.
Self-hosted Wasm runtime.
Runtime-neutral: works with interpreter, JIT, and AOT execution methods.
Architecture-neutral.

Checkpoint/restore support:
Background thread monitors checkpoint.trigger file (wasm32-wasip1-threads target).
Or file existence check via WASI at each instruction (wasm32-wasip1 target).

Tracing requires trace feature at compile time.
TRACE_EVENTS: all, store, load, call, branch.
TRACE_RESOURCE: regs, memory, locals, globals, pc.

Statistics output requires stats feature at compile time.

Published research:
Self-Hosted WebAssembly Runtime for Runtime-Neutral Checkpoint/Restore in Edge-Cloud Continuum (ACM Mid4CC 2025).
Feasibility of Runtime-Neutral Wasm Instrumentation for Edge-Cloud Workload Handover (IEEE SEC).
What If the Runtime Was Portable Too: Self-Hosted Runtime Capabilities in Wasm (WasmCon NA 2025).
Beyond Portability: Live Migration for Evolving WebAssembly Workloads (KubeCon + CloudNativeCon Japan 2025).

augentic/backends provides WASI host implementations for the Omnia Wasm runtime.
Infrastructure backends bridging WASI interfaces to concrete services.
MSRV: Rust 1.93.

Azure Blob Storage via omnia-azure-blob (wasi-blobstore).
Azure Managed Identity via omnia-azure-id (wasi-identity).
Azure Table Storage via omnia-azure-table (wasi-sql).
Azure Key Vault via omnia-azure-vault (wasi-vault).
Apache Kafka via omnia-kafka (wasi-messaging).
MongoDB via omnia-mongodb (wasi-blobstore).
NATS / JetStream via omnia-nats (wasi-messaging, wasi-keyvalue, wasi-blobstore).
OpenTelemetry Collector (gRPC) via omnia-opentelemetry (wasi-otel).
PostgreSQL via omnia-postgres (wasi-sql).
Redis via omnia-redis (wasi-keyvalue).

All backends implement the omnia::Backend trait.
Loaded by Omnia runtime at startup.

awesome-wasi (wasmerio/awesome-wasi) is a curated list of WASI ecosystem resources.

WASI enables Wasm modules to interact with host systems through standardized interfaces.
Components include: wasi-blobstore, wasi-http, wasi-keyvalue, wasi-messaging, wasi-sockets, wasi-filesystem, wasi-cli, wasi-poll.

WASI proposals in progress:
Component Model: composable Wasm modules with typed interfaces.
WASI Preview 2: revised API with component model.
WASI Preview 3: further refinements.

For edge AI inference: WasmEdge with WASI-NN support.
For Kubernetes-native workloads: Wasmtime for security and standards compliance.
For Go infrastructure: wazero for zero-dependency integration.
For portable executables: Wasmer for cross-platform deployment.
For embedded and IoT: WAMR for minimal footprint and configurability.
For ultra-fast cold start with acceptable peak performance: Wasm3 for IoT.
For container isolation without Docker: youki for OCI compatibility.
For hardware-isolated microVMs: smolvm for macOS and Linux support.
For serverless functions in Rust: fx for low latency and WASM-native design.
For live migration and checkpoint: chiwawa for edge-cloud continuum.

The runtime landscape continues to evolve rapidly with WASI preview 2 and component model maturation.






055 111 061 140

