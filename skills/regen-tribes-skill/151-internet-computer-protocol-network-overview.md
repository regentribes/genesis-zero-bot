# Internet Computer Protocol Network Overview

The Internet Computer (ICP) is a public blockchain that hosts smart contracts running at web speed.
Smart contracts can serve web from cyberspace, run efficiently, and scale with unbounded capacity.
Smart contracts are tamperproof and unstoppable software.
They reimagine websites, systems, internet services, and finance.

The network is the cloud. Agents build.

Developed by the DFINITY Foundation formed October 2016.
R&D program has run the largest R&D operation in the Web3 industry since late 2017.
Purpose is to develop internet cloud hosting a new kind of software.
Any language that compiles to Wasm can be used.
DFINITY also develops the domain-specific Motoko language.

Property 1 is tamperproof security.
Apps hosted on the Internet Computer are tamperproof and immune to traditional cyber attacks.

Property 2 is unstoppable resilience.
Apps hosted on the Internet Computer are guaranteed to run.
Data is always available.

Property 3 is sovereign end-to-end.
Escape vendor lock-in.
Run on the Internet Computer network or network cloud on-premises.

Property 4 is AI agents build your apps.
The Internet Computer advances frontiers where AI agents build and manage.
Catches mistakes to prevent app data ever being lost.
This enables the self-writing internet.

Property 5 is trustless token processing.
Hosted software securely creates keys on demand using chain key technology.
Can transact across multiple blockchains.

Chain key is a cryptographic technology enabling ICP to interact with other blockchains.
Creates keys on demand without centralized key management.
Enables trustless cross-chain transactions.
Supports Bitcoin integration and Ethereum interactions.

Canisters are the fundamental unit of computation on ICP.
Similar to smart contracts on other blockchains but with web-serving capability.
Run WebAssembly (Wasm) bytecode.
Any language that compiles to Wasm can be used.

Canister types include:
System (metaphor for an integrated whole or network):

System canisters for network operations (NNS, SNS).
User canisters for application logic.
Asset canisters for static content hosting.

Canister storage uses orthogonal persistence.
Data survives canister upgrades without explicit serialization.
Stable memory provides persistent storage across code upgrades.

Motoko is a simple high-level language designed specifically for ICP.
Object-oriented and actor-based concurrency model.
Built-in support for canditaive types and async operations.

Rust CDK (ic-cdk) is the Rust-based canister development kit maintained by DFINITY.
Most popular choice for production canisters.
ic-cdk-trait for trait-based design patterns.
ic-websocket-cdk for WebSocket support in Rust canisters.

Azle is a TypeScript CDK.
Kybra is a Python CDK.

bitfinity-evm provides EVM-based smart contract capability.

Chico is a C/C++ CDK.
icpp-pro is a C++ CDK.
Lucid is a pure C CDK.

cdk-as is an AssemblyScript CDK.

Agents facilitate client interaction with canisters.

agent-js and ic-js: JavaScript libraries from DFINITY.
agent-rs: Rust libraries from DFINITY.
dfx: Command-line tool written in Rust.

icp-py-core: Python library.
agent-go: Go library.
agent_dart: Mobile application framework.
ic4j-agent: Java and Android compatible.
ic4j-websocket: Java WebSocket library.
icp-client-cpp: C/C++ wrapper for agent-rs.
ICP.NET: Native C# implementation (Unity compatible).
IcpKit: Native Swift library for iOS/MacOS.

Internet Identity provides cryptographic authentication.
No passwords, hardware key support.
Anchor-based identity management.

NNS (Network Nervous System) is the governance system of ICP.
Token holders vote on network proposals.
SNS (Service Nervous System) enables DAO creation for dapps.

Cycles are computational fuel.
Canisters consume cycles for computation and storage.
ICP tokens converted to cycles.
1T cycles costs approximately 1 XR.

Ecosystem (metaphor for an interconnected network):

Caffeine is a platform where AI builds websites and apps through conversation.
Demonstrates the self-writing internet concept.

OISY Wallet is a browser-based multi-chain wallet.
Powered by Chain Fusion technology.
Fully on-chain with network custody.

OpenChat is a fully decentralized messaging platform comparable to WhatsApp.
Real-time communication entirely on-chain.
Users own their data.

Pakistan Digital Authority partners with DFINITY for sovereign AI-native digital infrastructure.

UNDP uses ICP to create tamperproof verifiable credentials.

GZA features the Internet Computer in Europes tech powerhouse initiatives.

llama_cpp_canister (onicai) deploys llama.cpp as a smart contract on ICP.
Run any LLM on-chain via the gguf format.
Model must produce at least 1 token per update call.
Largest model deployed so far is DeepSeek-R1 1.5B.

Projects using on-chain LLM:
funnAI: Truly Open AI with Bitcoin Tokenomics.
IConfucius: Wisdom fueled by Cycles, fully on chain AI tokenized on Bitcoin.
ICGPT: Chat with on-chain LLMs.

Stored in C++ using stable memory.
Files survive code upgrades.

Web4application/llama.cpp is another fork for ICP.

Multiple approaches for data persistence:
Stable memory in canisters.
Asset canisters for static content.
Third-party storage solutions.

Database options include:
ic-sqlite pattern using stable memory.
Wasm-dbms for embeddable relational database in Wasm.

On-chain AI inference via llama_cpp_canister.
WASI-NN support in WasmEdge for neural network inference.
Model hosting directly in canisters.

MCP servers on ICP enable AI agents to interact with canister services.
Extends AI agent capabilities to on-chain data and operations.

Chain key technology enables secure device authentication.
Canisters as IoT gateways.
Lightweight clients for resource-constrained devices.

Subnets are groups of nodes running canisters.
Replication provides fault tolerance and security.
Chain consensus for state agreement.
Threshold signatures for decentralized signing.

Canister smart contracts process requests.
Query calls are read-only and fast.
Update calls modify state and consume cycles.

HTTPS outcalls enable canisters to call external HTTP services.
Enables integration with traditional web APIs.

WebAssembly provides sandboxed execution.
Any language compiling to Wasm runs on ICP.

Traditional cloud: VMs or containers managed by providers.
ICP: canisters managed by protocol.
No vendor lock-in, decentralized infrastructure.

Traditional cloud: data stored on provider servers.
ICP: data stored in canisters with orthogonal persistence.
Tamperproof and always available.

Traditional cloud: centralized control.
ICP: decentralized governance via NNS and SNS.

Community-owned social platforms without corporate control.
Decentralized governance systems with transparent voting.
Trustless resource allocation and coordination.
On-chain AI for community knowledge management.
Verifiable credentials for community membership.
Cross-chain interactions with existing blockchain infrastructure.
Self-writing internet enables AI-assisted community tool building.






149 145 147 111

