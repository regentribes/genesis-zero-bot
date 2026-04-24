# Internet Computer Protocol Dfinity Network And Github Mapping

The Internet Computer (ICP) is a public blockchain that hosts smart contracts running at web speed.
ICP can serve web directly from the blockchain, scale with unbounded capacity, and process digital assets and payments.
Smart contracts on ICP are tamperproof, unstoppable, and process at web speed.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

The DFINITY Foundation develops the Internet Ecosystem (metaphor for system or network): Computer and maintains the ecosystem.
This note maps the complete DFINITY GitHub organization and key ecosystem projects.

The DFINITY GitHub organization maintains 100+ repositories across the ICP ecosystem.
This section documents the major repositories and their purposes.

Repository 1 is ic (1746 stars, Rust).
Internet Computer blockchain source code.
The client and replica software run by nodes.
This is the core implementation of the ICP protocol.

Repository 2 is sdk (203 stars, Rust).
IC SDK for creating and managing canister smart contracts on ICP.
Includes dfx command-line tool.
The primary development toolkit.

Repository 3 is icp-cli (113 stars, Rust).
The command-line interface for the ICP SDK.
Alternative implementation of dfx functionality.

Repository 1 is agent-rs (139 stars, Rust).
Collection of libraries and tools for building software around ICP in Rust.
The primary Rust agent implementation.

Repository 2 is icp-js-core (170 stars, TypeScript).
Base library to build applications on ICP.
Part of the ic-js monorepo collection.

Repository 3 is icp-js-canisters (81 stars, JavaScript).
Libraries and utilities for interacting with canisters on ICP.
Part of the ic-js monorepo.

Repository 4 is ic-gateway (11 stars, Rust).
HTTP to IC gateway service.
Handles routing of HTTP requests to canisters.

Repository 5 is ic-http-gateway-protocol (4 stars, Rust).
HTTP Gateway Protocol building blocks, reference implementations, and examples.
Defines how HTTP clients interact with IC canisters.

Repository 1 is internet-identity (511 stars, Rust).
Internet Identity is a blockchain authentication system for ICP.
Provides passwordless authentication.
Anchor-based identity management with hardware key support.

Repository 2 is oisy-wallet (168 stars, TypeScript).
Browser-based multi-chain wallet hosted on ICP.
Supports Bitcoin, Ethereum, Solana, and ERC-20 tokens.
Chain Fusion technology enables multi-chain support.

Repository 1 is stable-structures (111 stars, Rust).
Collection of data structures for fearless canister upgrades.
Enables persistent storage across canister code upgrades.
Critical for long-running canister state management.

Repository 2 is certified-assets (38 stars, Rust).
Certified assets canister written in Rust.
Provides tamperproof asset hosting.

Repository 3 is cbor-js (1 star, TypeScript).
Implementation of Concise Binary Object Representation in JavaScript.
Serialization format used by ICP for data encoding.

Repository 1 is motoko-bitcoin (5 stars, Motoko).
Bitcoin library for Motoko.
Enables native Bitcoin integration from Motoko canisters.

Repository 2 is cksol (2 stars, Rust).
Chain Key Solana implementation.
Extends chain key technology to Solana blockchain.

Repository 3 is vetkeys (21 stars, Rust).
Libraries for integrating verifiable encrypted threshold keys.
Provides encryption, threshold decryption, and distributed key management.
Key topics include IBE, BLS, VRF, timelock encryption.

Repository 4 is icp-eth-starter (42 stars, TypeScript).
Advanced starter project for interacting with Ethereum on ICP.
Beta functionality for ETH integration.

Repository 5 is erc20-icp (17 stars, Rust).
Contracts enabling ERC20 ICP on Ethereum.
Bridges ICP token to Ethereum ecosystem.

Repository 1 is pocket-ic (35 stars, null).
Canister testing solution for ICP.
Supports deterministic programmatic testing.

Repository 2 is pocketic-py (14 stars, Python).
PocketIC Python: canister testing library for ICP.

Repository 3 is pic-js (8 stars, TypeScript).
TypeScript library for testing canisters with PocketIC support.

Repository 4 is canbench (22 stars, Rust).
Benchmarking framework for canisters.
Analyzes code use of instructions and memory.

Repository 5 is canister-profiling (0 stars, Rust).
Code and scripts for collecting performance data.

Repository 1 is nns-dapp (139 stars, TypeScript).
Dapp of the Internet Computer's Network Nervous System.
The governance system of ICP.
Token holders vote on network proposals.

Repository 2 is governance-app (1 star, TypeScript).
New revamped version of the NNS web application.

Repository is examples (610 stars, Rust).
Example applications, microservices, and code samples for ICP.
The primary reference implementation repository.

Repository 1 is dfxvm (9 stars, Rust).
dfx version manager.
Easily switch between dfx versions.

Repository 2 is setup-dfx (9 stars, null).
GitHub Action to set up dfx.
CI/CD integration for ICP development.

Repository 3 is formal-models (9 stars, TLA).
TLA+ models of various IC components and canisters.
Formal verification of IC systems.

Repository 4 is dre (19 stars, Rust).
Decentralized Reliability Engineering.
Platform decentralization analysis.

Repository is orbit (41 stars, Rust).
Non-custodial digital assets management platform on ICP.

Repository 1 is portal (103 stars, JavaScript).
Internet Computer Developer Portal.
Main documentation and guide resources.

Repository 2 is icp-js-sdk-docs (2 stars, TypeScript).
SDK documentation for ic-js libraries.

Repository 3 is icskills (15 stars, Astro).
Agent-readable skill files for ICP development.
Prevents AI hallucinations by providing accurate skill definitions.

Repository is cns (18 stars, Motoko).
Chain Name System.
Trustless and decentralized discoverability layer on ICP.

Repository 1 is ic-docutrack (29 stars, Svelte).
Proof-of-concept dapp for sharing and managing documents.
Document management on ICP.

Repository 2 is ic-open-chat (0 stars, TypeScript).
OpenChat implementation on ICP.

Repository 3 is canistergeek (0 stars).
Open-source tool to track project canister cycles and memory status.

Repository 4 is icp-hello-world-motoko (11 stars, Python).
Quick development guide for Motoko on macOS, Windows, Linux.

Repository 5 is icp-hello-world-rust (3 stars, Python).
Quick development guide for Rust on macOS, Windows, Linux.

The awesome-ic list provides a comprehensive categorized view of the ecosystem.

The ecosystem includes multiple learning paths:
Motoko Bootcamp teaches Motoko in 7 days through DAO building.
Udemy Complete Web Development Bootcamp has a web3 section on IC.
AgorApp offers an interactive Motoko course.
Dacade TypeScript Smart Contract 101 teaches building dapps on IC.
Code-and-State TypeScript Bootcamp builds a DAO in 7 days.

Multiple starter projects enable quick project creation:
create-ic and create-ic-app for quick project setup.
vite-react-motoko and vite-sveltekit-motoko for full-stack with live reload.
nextjs-ic-starter for Next.js integration.
ic-rust-starter for Rust backend projects.
ic-eth-starter for Ethereum interaction.

Agents facilitate client interaction with canisters:
agent-js is the JavaScript collection from DFINITY.
ic-js is the comprehensive JavaScript library collection.
ic-use-actor provides React hooks for canister interaction.
icblast enables direct NodeJS communication with IC.
node-ic0 provides simple canister interaction.
ic-websocket-sdk enables WebSocket communication.

agent-rs is the Rust agent implementation.
dfx is the command-line tool written in Rust.
icp-py-core is the Python library.
agent_dart is the mobile application framework.
agent-go is the Go library.
ICP.NET is the native C# implementation (Unity compatible).
ic4j-agent is the Java library (Android compatible).
IcpKit is the native Swift library for iOS/MacOS.

Multiple CDKs enable writing canisters in different languages:
Motoko is the simple high-level language from DFINITY.
ic-cdk is the Rust CDK maintained by DFINITY.
ic-websocket-cdk enables WebSocket canisters in Rust.
Rustic extends ic-cdk with Solidity-like primitives.
Azle is the TypeScript CDK.
Kybra is the Python CDK.
bitfinity-evm provides EVM smart contracts on ICP.
Chico is the C/C++ CDK.
icpp-pro is the C++ CDK.
cdk-as is the AssemblyScript CDK.
moonbit-ic-cdk is the MoonBit CDK.

Storage options include:
stable-structures for persistent data across upgrades.
asset canisters for static content.
Certified assets for tamperproof hosting.

Authentication options include:
Internet Identity for passwordless blockchain auth.
Oisy Wallet for multi-chain wallet on IC.
Plug, Stoic, and other third-party wallets.

DeFi capabilities:
ICP token with cycles for computation.
IToken and DIP20 standards for fungible tokens.
ICRC-1, ICRC-2, ICRC-3 for advanced token standards.
Dexalot and ICDex for decentralized exchanges.
ICPSwap and CoinFlip for trading.

Governance frameworks:
NNS for network-level governance.
SNS for dapp-level governance DAOs.
Dashboard governance tools.

AI capabilities on ICP:
Model Context Protocol servers for AI agents.
On-chain LLM inference via llama_cpp_canister.
WASI-NN support for neural network inference.

Chain Fusion enables interoperability:
Native Bitcoin integration.
ETH integration via HTTPS outcalls.
Chain key signatures enable cross-chain transactions.
ckBTC (Chain Key Bitcoin) for BTC on ICP.

The ICP token serves multiple functions:
Staking for network governance.
Converting to cycles for canister computation.
Reversing ICP to cycles via the cycles minting canister.

Cycles are computational fuel priced at approximately 1 trillion cycles per 1 ICP.

Canisters are the fundamental unit of computation.
Each canister has its own state and code.
Canisters can serve web content directly.
Memory and compute resources are prepaid via cycles.

Subnets are groups of nodes running canisters.
Replication provides fault tolerance.
Threshold signatures enable decentralized signing.
Chain consensus maintains consistent state.

ICP uses orthogonal persistence.
Data survives canister upgrades without explicit serialization.
Stable memory provides persistent storage.

Canisters can call external HTTP services.
Enables integration with traditional web APIs.
Makes oracles optional for many use cases.

ICP provides compelling infrastructure for regenerative communities.

Key capabilities:
Canister-based applications run without cloud dependency.
Web serving directly from blockchain enables true decentralization.
Chain Fusion enables cross-chain interactions with existing systems.
Internet Identity provides authentication without passwords.

The ecosystem covers all major development needs:
Multiple CDKs enable development in preferred languages.
Extensive agent libraries for all major platforms.
Comprehensive testing frameworks.

Recommended applications:
Community governance dapps using SNS.
Knowledge management with on-chain storage.
Cross-chain interactions for existing blockchain assets.
Decentralized AI via on-chain LLM inference.





151 158 147

