# Zero Knowledge Proofs Comprehensive Technical And Network Survey

Zero-knowledge proofs enable a prover to convince a verifier that a statement is true without revealing any information beyond the truth of the statement.

Three fundamental properties:

Property 1 is completeness.
If the statement is true, an honest prover can convince an honest verifier.

Property 2 is soundness.
If the statement is false, no cheating prover can convince an honest verifier except with negligible probability.

Property 3 is zero-knowledge.
The verifier learns nothing beyond the validity of the statement.

System (metaphor for an integrated whole or network):

SNARK stands for Succinct Non-interactive ARguments of Knowledge.

Key characteristics:
Proving time is O(N log(N)).
Verifier time is approximately O(1).
Proof size is approximately O(1).
Requires trusted setup (sometimes).
Post-quantum security is not achieved.
Relies on DLP and secure bilinear pairing.

SNARK proof systems include Groth16, Plonk, Marlin, Sonic, and others.

Groth16 is the most widely adopted SNARK.
Proof size is 128 to 192 bytes.
Verification time is approximately 1.2 milliseconds.
Requires a relation-specific trusted setup.
Used in Zcash, Loopring, and many blockchain applications.

Plonk features a universal and updateable trusted setup.
A single setup can be reused for any program up to a certain size.
Anyone can contribute randomness to enhance integrity.
More flexible for developers than Groth16.
Used by Aztec, ZkSync, and many Layer 2 solutions.

Marlin is a preprocessing SNARK with universal and updatable SRS.
improved for practical deployment.

Sonic is a practical zk-SNARK with nearly trustless setup.
Early implementation of universal setup concepts.

STARK stands for Scalable Transparent ARguments of Knowledge.

Key characteristics:
Proving time is O(N poly-log(N)).
Verifier time is O(poly-log(N)).
Proof size is O(poly-log(N)).
No trusted setup required.
Post-quantum secure.
Relies on collision-resistant hashes.

STARKs are transparent because they use publicly verifiable randomness.
No secret parameters that could compromise security.

STARKs produce larger proofs than SNARKs but offer better scalability.
The proof size growth is poly-logarithmic rather than constant.

Used by StarkWare for Starknet and StarkEx.
Cairo language is used for writing STARK-compatible programs.

Key characteristics:
Proving time is O(N log(N)).
Verifier time is O(N).
Proof size is O(log(N)).
No trusted setup required.
Not post-quantum secure.
Relies on discrete log assumptions.

Bulletproofs are shorter than SNARKs but longer than STARKs.
Used in Monero for confidential transactions.
Enables efficient range proofs.

Trusted setup is required for many SNARK systems to generate initial cryptographic parameters.

The setup creates a structured reference string (SRS).
If the toxic waste from setup is exposed, the security of the system is compromised.

Multi-party computation ceremonies address this risk.
Multiple participants contribute randomness.
Even if one participant is honest, the final parameters are secure.
Zcash Powers of Tau ceremony is a famous example.

Universal and updateable setups (Plonk, Marlin, Sonic) allow:
Single ceremony for any program up to a size limit.
Anyone can add new randomness to improve security.
The setup can be continuously enhanced.

STARKs avoid trusted setup entirely through transparency.

zkVM is a virtual machine that generates zero-knowledge proofs for program execution.

Notable zkVMs:

Risc Zero provides a STARK-based zkVM.
Supports Rust, C, C++ programs.
Supports EVM verifier.
GPU acceleration available (Metal, CUDA).
SHA-256 hash performance is moderate.

Polygon Miden provides a STARK-based zkVM.
Assembly-like instruction set.
Customizable with user-defined instructions.
No EVM verifier (different design).

Valida provides a STARK-based virtual machine.
RISC-inspired instruction set.
Highly customizable.

Nexus provides a modular extensible zkVM.
Written in Rust.
Focused on performance and security.

Starknet uses Cairo language for STARK programs.
Native STARK execution on Ethereum.

Feature 1 is proof system.
Risc Zero is STARK-based.
Polygon Miden is STARK-based.
Valida is STARK-based.
Nexus is STARK-based.

Feature 2 is external library support.
Risc Zero does not support external libraries.
Polygon Miden has limited external library support.
Valida supports external libraries.
Nexus has limited external library support.

Feature 3 is EVM verifier.
Risc Zero supports EVM verifier.
Polygon Miden does not support EVM verifier.
Valida does not support EVM verifier.
Nexus does not support EVM verifier.

Feature 4 is unbounded programs.
Risc Zero supports unbounded programs.
Polygon Miden supports unbounded programs.
Valida supports unbounded programs.
Noir does not support unbounded programs.

Feature 5 is GPU acceleration.
Risc Zero supports Metal and CUDA.
Polygon Miden supports Metal and CUDA.
Valida supports Metal and CUDA.
Noir does not support GPU acceleration.

Language 1 is Circom.
Hardware description language for designing circuits.
Used for writing constraint systems for SNARK proofs.
Popular for identity and privacy applications.
Tooling includes snarkjs for compilation and proving.

Language 2 is ZoKrates.
Python subset language for zkSNARKs.
Toolbox for Ethereum zkSNARK development.
Compiler generates proof artifacts.
Works with Ethereum and Bitcoin.

Language 3 is Cairo.
Language for STARK programs.
Used by StarkWare for Starknet.
Writing Cairo compiles to Cairo circuit.
Proving happens on Starknet.

Language 4 is SnarkyJS.
TypeScript DSL for writing zkSNARKs.
Developed by O(1) Labs for Mina Protocol.
Enables browser-based zk app development.

Language 5 is Noir.
Rust-like language for SNARKs.
Developed by Aztec.
Designed for privacy-preserving applications.
Barretenberg backend provides proof generation.

Language 6 is Leo.
Functional statically-typed language.
Developed by Aleo.
Designed for private applications on Aleo blockchain.

Language 7 is Halo2.
Proving system from Zcash.
Plonk-based with custom gates and lookup tables.
Actively developed for new applications.

Application 1 is Zcash.
Privacy-preserving cryptocurrency.
Uses SNARKs for confidential transactions.
Sender, receiver, and amount are hidden.

Application 2 is zkRollups.
Layer 2 scaling for Ethereum.
Process transactions off-chain.
Generate SNARK or STARK proof of correctness.
Submit proof to mainnet.
Increases throughput and reduces gas costs.
Projects include zkSync Era, Polygon zkEVM, Starknet.

Application 3 is zkEVM.
Ethereum Virtual Machine compatibility with ZK proofs.
Enables existing Ethereum dapps to deploy on Layer 2.
Various approaches from full bytecode compatibility to language-level compatibility.

Application 4 is Dark Forest.
zkSNARK-based space warfare strategy game.
Players can hide their strategies.
Proves game state without revealing.

Application 5 is Tornado Cash.
Privacy mixer for Ethereum.
Users deposit funds and withdraw to different addresses.
Zero-knowledge proofs break the on-chain link.

Application 1 is proof of identity.
Prove attributes like age or citizenship without revealing details.
Prove membership in a group without revealing identity.
Semaphore enables anonymous signaling.

Application 2 is Proof of Passport.
Prove official passport ownership without revealing document details.
Privacy-preserving identity verification.
Useful for border crossing and legal verification.

Application 3 is World ID.
Uses Semaphore for anonymous group membership.
Proves unique human without revealing identity.
Biometric capture is required (controversial for regenerative communities).

Application 4 is Skill Credentials.
Prove possession of skills or qualifications without revealing full credential data.
Zero-knowledge disclosure of capabilities.
Enables portable reputation.

Application 1 is private machine learning.
Prove ML model inference without revealing model or input.
zk-MNIST demonstrates handwritten digit recognition on Ethereum.
zkCNN for CNN inference with ZK proofs.

Application 2 is private database queries.
Query database without revealing what data is accessed.
Enables privacy-preserving data retrieval.

Application 3 is voting.
Anonymous voting with verifiable results.
ZKU-Vote and OVOTE are examples.
Proves vote validity without revealing vote content.

Application 4 is auctions.
Blind auctions where bids are hidden.
Provers demonstrate bid validity without revealing amount.
Publicly verifiable sealed-bid auctions.

Application 5 is gaming.
On-chain games with hidden state.
Proves game actions are valid without revealing strategy.
Dark Forest, zkBattleship, Mastermind are examples.

Security concern 1 is circuit vulnerabilities.
Constraints must be properly specified.
Overconstrained or underconstrained circuits create vulnerabilities.
Formal verification tools detect issues.

Security concern 2 is trusted setup compromise.
If toxic waste is exposed, proofs can be forged.
MPC ceremonies mitigate this risk.
Universal setups allow continuous improvement.

Security concern 3 is implementation bugs.
Cryptographic implementations are complex.
Side-channel attacks possible.
Code audits necessary.

Tool 1 is Circomspect.
Static analysis for Circom circuits.
Detects common vulnerability patterns.

Tool 2 is Ecne.
Formal verification for Circom circuits.
Proves circuit constraints are correct.

Tool 3 is halo2-analyzer.
Static and symbolic analysis for Halo2 circuits.

Tool 4 is Coda.
Formal verification in Coq for Circom circuits.

Tool 5 is ZKFuzz.
Fuzzing tool for Circom circuits.

Tool 6 is gnark-lean-extractor.
Formal verification in Lean for GNARK circuits.

Tool 7 is Picus.
Formal verification for Circom and GNARK.

Tool 8 is Sierra Analyzer.
Static analysis for Cairo circuits.

Tool 9 is fAmulet.
Fuzzing for Polygon zkEVM.

Tool 10 is zkwasm-fv.
Formal verification for zkWasm.

Hash function performance varies significantly.

SHA-256 at 1k bytes:
Risc Zero is 6.20 seconds.
Polygon Miden is 20.33 seconds.
Noir is 3.63 seconds.
Starknet (Cairo) is 21.55 seconds.

SHA-256 at 10k bytes:
Risc Zero is 6.27 seconds.
Polygon Miden is 177.79 seconds.
Noir is 33.89 seconds.
Starknet (Cairo) is 235.71 seconds.

Pedersen hash shows different patterns:
Noir is fastest at 0.54 seconds for 1k bytes.
Leo is 1.99 seconds.

RPO hash (Starknet native) is fastest:
Polygon Miden is 0.03 seconds for 1k bytes.
Risc Zero is 0.17 seconds.

Fibonacci performance:
Noir is consistently fast at 0.01 seconds per iteration.
Starknet (Cairo) is 6-12 seconds per iteration.
Risc Zero ranges from 0.03 to 9.55 seconds depending on iterations.

SNARK assumptions:
Groth16 relies on DLP and bilinear pairings.
Plonk relies on DLP and KZG commitments.
Both require trusted setup for most implementations.

STARK assumptions:
Relies on collision-resistant hash functions.
No trusted setup required.
Post-quantum secure.

Bulletproofs assumptions:
Relies on discrete log assumption.
No trusted setup.
Not post-quantum secure.

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): ## Ecosystem Resources

Learning resources:
ZK Whiteboard Sessions by ZK Hack.
Vitalik Buterin blog series on SNARKs and STARKs.
Matthew Green Zero Knowledge Proofs Illustrated Primer.
The MoonMath Manual to zk-SNARKs.
Justin Thaler Proofs Arguments and ZK book.

Communities:
Zero Knowledge Podcast (ZKPodcast).
ZKProof standardization initiative.
0xPARC learning group.
ZK Hack workshops.

Tooling frameworks:
Circom ecosystem (snarkjs, circomspect, ecne).
Halo2 ecosystem (halo2-analyzer, snarkyjs).
ZoKrates for Ethereum development.
Noir for Aztec applications.

ZK proofs enable privacy-preserving systems aligned with regenerative community values.

Key applications for communities:
Anonymous signaling and voting using Semaphore.
Skill credential verification without identity disclosure.
Access control via zero-knowledge score verification.
Privacy-preserving resource allocation.
Identity verification without biometric capture.

Selection guidance:
For anonymous group membership: Semaphore protocol.
For universal trusted setup: Plonk-based systems.
For post-quantum security: STARK-based systems.
For Ethereum compatibility: zkSync Era or Polygon zkEVM.
For no trusted setup: STARKs or Bulletproofs.

Important considerations:
Trusted setup requirements create trust dependencies.
Hardware acceleration is becoming important for practical deployment.
Developer tooling is maturing rapidly.
Standardization efforts are ongoing.





161 157 158

