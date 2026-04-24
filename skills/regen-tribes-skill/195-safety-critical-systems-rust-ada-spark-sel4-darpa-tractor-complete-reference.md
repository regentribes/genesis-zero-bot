# Safety Critical Systems Rust Ada Spark Sel4-Darpa Tractor Complete Reference

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): This note covers the safety-critical systems ecosystem.
Topics include industrial Rust tooling, formal methods languages, and verified microkernels.
Coverage spans GNAT Pro for Rust, Ada versus SPARK versus Rust comparison, DARPA TRACTOR, and seL4.

Source: adacore.com/gnat-pro-for-rust

GNAT Pro for Rust is AdaCore's industrial-grade Rust toolchain.
It delivers compilers, libraries, and tools with long-term support.
It provides upstream Rust with industrial reliability guarantees.

Problem 1 is toolchain volatility.
Rust releases a new version every six weeks.
Versions do not receive backported fixes.
Industrial projects need stable toolchain versions across years.

Problem 2 is industrial readiness.
Toolchains must work in export-controlled environments.
SBOM evidence and CVE monitoring required.
Safety and security regulation compliance needed.

Problem 3 is platform availability.
Hardware and RTOSes are chosen first.
Toolchain must be portable to diverse embedded environments.
Embedded domain demands specific platform support.

Problem 4 is long-term maintenance.
Bug fixes needed for the specific compiler version in use.
Confidence that issues will be addressed.
Predictable support lifecycle across product lifespan.

Feature 1 is Rust language support.
GNAT Pro follows regular Rust updates.
Pace of release adjusted for industrial constraints.
Same upstream Rust with backported critical fixes.

Feature 2 is portability across platforms.
Same toolchain on many OS and hardware combinations.
Eases porting between environments.
Same codebase across different targets.

Feature 3 is long-term maintenance versions.
Select a version and stay supported for years.
Bug fixes and known problem monitoring.
No forced upgrades.

Feature 4 is safety certification readiness.
GNAT Pro developed for DO-178, ISO-26262, IEC 61508 compliance.
Certification evidence preparation underway.

Component 1 is rustc.
The official Rust compiler with backported critical fixes.

Component 2 is cargo.
The Rust package manager and build system.

Component 3 is Rust Analyzer.
Language server and VS Code extension for IDE support.

Component 4 is rustfmt.
Official code formatter for standard Rust style.

Component 5 is GDB.
GNU debugger integrated for multi-language debugging.

Component 6 is GPRbuild.
Multi-language builder supporting Rust, Ada, C, and C++ in single project.
Single command for hybrid-language builds.

Component 7 is runtime libraries.
libcore, liballoc, libstd, libproc_macro, libtest included.

GNAT Pro provides coherent compilation across Rust, Ada, and C/C++.
Applications can link binaries from multiple languages.
GPRbuild sequences complex build processes.
Debugger handles multi-language applications seamlessly.

Item 1 is SBOM.
AdaCore produces Software Bills of Materials in SPDX format.
All AdaCore products include SBOMs.
Automated vulnerability management integration.

Item 2 is CVE monitoring.
GNAT Pro monitored for security vulnerabilities.
Customers receive timely security reports.
Proactive vulnerability assessment.

Item 3 is export control.
Classified as low-risk commercial technology under US and EU regulations.
Generally exportable without license within North America and Europe.
Subject only to narrow restrictions.

Supported platforms span native and embedded categories.
Off-the-shelf and custom platforms across industries supported.
See AdaCore for specific platform list.

GNAT Pro is a commercial product.
Contact AdaCore for pricing and licensing.
Long-term support contracts available.
Expert support included.

Source: adacore.com/blog/should-i-choose-ada-spark-or-rust-over-c-c

C and C++ remain the default choice in embedded domains.
Large existing codebases, trained staff, and established tools exist.
Processes and development costs are known.
However, decades of research have not produced cost-effective safe C or C++.
Growing evidence shows C and C++ make safe software production difficult.

Column headers: Ada, Rust, SPARK

Community: Small, Large, Small
Toolchain ecosystem: Mature, In development, Mature
Certification evidence: Off-the-shelf, In development, Off-the-shelf
Libraries available: Limited, Large, Limited
Programming paradigm: Imperative system-level, Imperative system-level, Imperative system-level
Mitigation of programming errors: Yes, Yes, Yes
Strong typing: Yes, Limited, Yes
Data constraints and hardware consistency: Yes, No, Yes
Guaranteed absence of run-time errors: Run-time checks, Run-time checks, Static via Proof
Contract language: Yes run-time, No, Yes static via Proof
Memory safety: Pointer avoidance, Borrow checker, Borrow checker
Cost of adoption: Language change, Language change, Methodology change
Expected benefits: Error mitigation, Memory safety, Formal proof plus memory safety

Ada has a smaller but dedicated community.
Community has grown over four decades with new members joining.
Ada has a complete and mature toolchain ecosystem.
Ada has off-the-shelf certification evidence for many safety standards.
Ada has unmatched specification language for expressing constraints.
Ada strong typing detects design inconsistencies not just coding errors.
Ada can define types like Distance_Miles versus Percentage and prevent mixing.
Ada can constrain floating-point types like Latitude between -90 and 90 degrees.
Ada supports hardware-level data representation with bit-level specification.
Ada contracts checked at run-time via exceptions.

Rust has a large and vibrant community.
Huge ecosystem of tools and libraries via cargo.
Most popular libraries developed by hobbyists.
Many popular libraries have not yet reached version 1.0.
Rust has strong memory safety via borrow checker and lifetimes.
Rust borrow checker eliminates memory safety vulnerabilities at compile time.
Rust prevents data races, null pointer dereferences, and uninitialized variables.
Rust prevents mixing different types without explicit conversion.
Rust arrays are first-class citizens with boundary awareness.
Community resources and learning materials abundant.

SPARK is based on Ada with formal methods added.
SPARK proves mathematical correctness of software properties.
SPARK performs static proof at compile time.
SPARK proves absence of run-time errors without run-time checks.
SPARK proves no array index can ever be out of bounds.
SPARK allows custom properties expressed and proved across all code paths.
SPARK verifies mutex call balance, sort correctness, and function input-output relationships.
SPARK eliminates the need for MISRA-C checkers and many unit tests.
SPARK cost of adoption is methodology change rather than language change.
SPARK benefits exceed Ada or Rust for high-integrity environments.
SPARK can prove formal properties that Rust cannot natively express.
SPARK adds ownership model and borrow checker matching Rust guarantees.
SPARK literature cites up to 40 percent development cost savings versus C.

Rust uses borrow checker with lifetimes for memory safety.
Rust ownership model eliminates most security vulnerabilities at compile time.
Ada 2022 offers pointer avoidance strategy.
Some programming patterns in Ada still require pointers without ownership model.
SPARK adds strong ownership model and borrow checker.
SPARK matches Rust memory safety guarantees plus formal proof.

Ada provides contract language via preconditions, postconditions, and invariants.
Ada contracts generate dynamic checks at run-time.
Ada contracts can be stripped out before deployment.
Ada contract failure raises exceptions.

SPARK provides the same contract language.
SPARK contracts are proved mathematically at compile time.
No run-time check overhead.
No exceptions from contract violation in production.
Contracts express mathematical properties verified across all possible values.

Rust has no native specification language for contracts.
Rust can emulate some contract checking via defensive code.
Rust cannot formally prove custom properties like SPARK can.

Ada and SPARK have certification evidence for DO-178 avionics.
Ada and SPARK have certification evidence for ISO 26262 automotive.
Ada and SPARK have certification evidence for EN-50128 railway.
Ada and SPARK have certification evidence for ECSS-E-ST-40C and ECSS-Q-ST-80C space.

Rust certification is in development.
Some ISO 26262 automotive evidence emerging.
Limited to specific environments and subsets of the toolchain.
Rust has not yet achieved the certification maturity of Ada or SPARK.

Ada and SPARK have very mature embedded toolchains.
Compilers exist for many RTOSes and hardware architectures.
Tools cover static analysis through dynamic analysis.
Industrial support available with long-term version contracts.

Rust embedded ecosystem is in development.
Native and server environments well established.
RTOS and architecture support being developed.
Commercial support from AdaCore and others in progress.
Long-term support question unresolved for some Rust providers.

Rust has vast library ecosystem via cargo.
Pretty much any capability available through crates.io.
Many libraries developed by hobbyists.
Many popular libraries not yet version 1.0.

Ada and SPARK have fewer native libraries.
Alire package manager launched 2021 with approximately 400 packages.
Gap offset by C and C++ bindings.
Public libraries often unsuitable for certified development.

Both Ada and Rust face constraints from certification requirements.
Publicly available libraries may not meet safety-critical standards.

Ada adoption cost is learning a new language and deploying new toolchain.
Programmers keep existing programming processes largely intact.

Rust adoption cost is similar to Ada.
New language and new toolchain required.
Steep learning curve for ownership and borrowing concepts.

SPARK adoption cost is higher initially.
Toolchain and language similar to Ada.
Full adoption requires different programming methodology.
Formal verification integrated into development process.
Verification steps front-loaded but testing and checking activities reduced.
Returns can be significant for long-lifetime high-integrity systems.

Ada versus Rust at coarse grain provides similar benefit levels.
Both greatly reduce programming error probability.
Both address memory safety in different ways.
Rust memory model goes further than current Ada pointer avoidance.
Ada strong typing allows consistency checking where Rust cannot.
Literature cites up to 40 percent development cost savings for Ada versus C.
Savings do not account for reduced residual bugs in production.

SPARK benefits exceed Ada or Rust significantly.
Formal methods eliminate defects rather than mitigate them.
Some testing and checking activities eliminated entirely.
Deviations against specified behavior eliminated not mitigated.
High value for applications where defect cost is high and lifetime is years or decades.

Source: darpa.mil/research/programs/translating-all-c-to-rust

TRACTOR stands for Translating All C to Rust.
It is a DARPA research program.
The goal is automated translation of legacy C codebases to memory-safe Rust.
Funding anticipated at approximately 14 million dollars.

After more than two decades of grappling with memory safety in C and C++.
The software engineering community has reached consensus.
Bug-finding tools alone are not enough.
The preferred approach is safe programming languages that reject unsafe programs at compile time.
The goal is preventing memory safety issues from ever emerging.

TRACTOR aims to automate translation of legacy C code to Rust.
The target is code quality equivalent to skilled Rust developer output.
Translation should eliminate entire class of memory safety vulnerabilities.
Translation must preserve performance-critical behavior.

Technique 1 is software analysis.
Static analysis of C code structures.
Dynamic analysis for behavior understanding.

Technique 2 is formal methods.
Used for verifying translation correctness.
ForCLift approach: Formally-Verified Compositional Lifting of C to Rust.
Verified lifting translates complex C to safe idiomatic Rust.
Preserves performance-critical behavior.

Technique 3 is machine learning and large language models.
LLMs assist translation process.
Novel combination with traditional software analysis.

MIT Lincoln Laboratory serves as independent test and evaluation organization.
Responsible for designing evaluation framework.
Defines metrics and develops standardized benchmarks.
Runs experiments across performers and analyzes results.
All benchmarks and tools published publicly.

Benchmark batteries released incrementally every six months.

Battery 01 covers basic C features.
Baseline evaluation using representative subset of C.
Focus on pointers with clear well-defined lifetimes.
Avoids dynamic allocation and untyped pointers.
Allows controlled pointer arithmetic like array indexing.
Tests pass-by-reference translation to Rust borrowing model.
Uses conventional error handling via return codes and errno.
Includes global and static program structures.
Data structures intentionally simple to focus on correctness and safety.

Milestone Project 0 is Perlin noise library.
Focus on numerical computation and array manipulation.
Arithmetic code emphasis.

Milestone Project 1 is SPHINCS cryptographic library.
Emphasizes low-level bit manipulation.
Security-critical correctness focus.
Strict performance requirements.

Round 1 evaluation report available.
Published on GitHub under DARPA-TRACTOR-Program organization.

Proposers Day held August 26, 2024.
Active development underway in 2024 and 2025.
New benchmark batteries released every six months.
Ongoing evaluation by MIT Lincoln Laboratory.

Source: sel4.systems

seL4 is the worlds most highly assured operating system kernel.
seL4 is also the worlds fastest microkernel.
Its uniqueness lies in formal mathematical proof of exact behavior.
Proof enforces strong security boundaries.
High performance maintained for deployed systems.

Award 1 is MIT Technology Review Award.
Award 2 is ACM Hall of Fame Award.
System (metaphor for an integrated whole or network):
Award 3 is ACM Software Systems Award.
Award 4 is DARPA Game changer award.

seL4 protects critical systems from software failures and cyber-attacks.
Non-critical functionality runs securely alongside critical payloads.
Strong isolation and controlled communication enforced.

Sectors served include automotive, aerospace, IoT, data distribution, military, and intelligence.
seL4 has been successfully retrofitted into complex critical systems.
seL4 has demonstrably prevented cyber-attacks.
Government organizations on several continents fund further development.

seL4 is open source.
Supported by the seL4 Foundation.
Open transparent neutral organization.
Free to use with maintenance funded by foundation memberships.

Component 1 is Microkit.
For building static-architecture systems on seL4.
Version 2.2.0 released.

Component 2 is CAmkES.
Component Architecture for microkernel-based Embedded Systems.
Version 3.12.0 released.

Component 3 is CapDL.
Tools for generating, parsing, and loading capability distribution specifications.
Version 0.5.0 released.

Annual international conference on seL4 technology.
Covers microkernel, tools, infrastructure, products, and research.
Latest Summit in 2026.
Sponsors include Proofcraft and Riverside Research.

Source: sel4.systems/Verification

seL4 is the most highly assured operating system kernel.
Formal mathematical proof from high-level specifications to binary code.
Proofs cover functional correctness and information leakage absence.

Machine-checked mathematical proofs span from abstract specifications to binary.
Properties proved include functional correctness and absence of information leakage.
Interactive theorem prover Isabelle/HOL used for verification.

Functional correctness is an extremely strong property.
It implies, for free, absence of buffer overflows.
It implies absence of memory leaks.
It implies absence of common C programming errors.
Buffer overflows and memory leaks eliminated without separate verification effort.

The proofs assume correct assembly code and boot code.
The proofs assume correct machine interface and hardware.
The proofs assume correct handling of DMA.
These areas are where manual validation and scrutiny focus.

The proofs go beyond what Common Criteria requires.
The proofs go beyond ISO 26262 ASIL-D requirements.
The proofs go beyond DO-178C Level A requirements.
seL4 proofs exceed the most stringent certification requirements.

seL4 suitable for ISO 26262 automotive ASIL-D.
seL4 suitable for DO-178C Level A avionics.
seL4 suitable for IEC 61508 SIL 4 industrial.
seL4 suitable for Common Criteria EAL7.
seL4 used in government and defense systems worldwide.

Source: github.com/seL4/rust-sel4

rust-sel4 provides Rust support for seL4 userspace.
SeL4 Foundation funded and manages this project.
Version 4.0.0 released aligned with seL4 15.0.0.

Component 1 is sel4 crate.
Straightforward pure-Rust bindings to the seL4 API.
Safe idiomatic Rust interface to kernel calls.

Component 2 is sel4-sys crate.
Raw bindings to seL4 API.
Generated from libsel4 headers and interface definition files.
Not for direct application use.
Foundation for sel4 crate implementation.

Component 3 is sel4-config crate.
Macros and constants for seL4 kernel configuration.
Usable in application code, build scripts, and build tools.

Component 4 is sel4-platform-info crate.
Constants from platform_info.h header.
Usable across all targets where this file exists.

Component 5 is sel4-sync crate.
Synchronization constructs using seL4 IPC.
Currently supports notification-based mutexes.

Component 6 is sel4-logging crate.
Log trait implementation for the log crate.
Standard logging interface for seL4 environments.

Component 7 is sel4-shared-memory crate.
Abstractions for interacting with shared memory data.

Component 8 is sel4-async series.
Crates for async Rust in seL4 userspace.
Experimental async support.

Runtime 1 is sel4-root-task.
Runtime for root tasks on seL4.
Supports thread-local storage and unwinding.
Provides global allocator.
Used for simple root task demos.

Runtime 2 is sel4-microkit.
Runtime for seL4 Microkit protection domains.
Implementation of libmicrokit.
Abstractions for IPC between protection domains.

Runtime 3 is sel4-capdl-initializer.
CapDL-based system initializer.
Generates and loads capability distribution specifications.

Runtime 4 is sel4-kernel-loader.
Loader for seL4 kernel similar to elfloader.
Loads kernel ELF executable.

Demo 1 is simple root task.
rust-root-task-demo repository.
Basic root task running Rust on seL4.

Demo 2 is simple Microkit system.
rust-microkit-demo repository.
Basic Microkit system with Rust protection domains.

Demo 3 is HTTP server.
rust-microkit-http-server-demo repository.
HTTP server running on seL4 Microkit.

Requirements are Linux, Make, rustup, and Nix.
Docker available for non-Linux or Nix-free development.
Nix provides consistent build environment.

Clone the repository.
Run Docker setup if needed.
Build with make example for simulated system.
Run tests with make run-tests.
Rust-sel4 website at sel4.github.io/rust-sel4.

Requires seL4 version 15.0.0.
Requires seL4 Microkit version 2.2.0.
Crates not yet on crates.io.
Use Git or path dependencies.

SEL4_PREFIX sets base directory for seL4 installation.
SEL4_INCLUDE_DIRS colon-separated include paths for libsel4 headers.
SEL4_PLATFORM_INFO path to platform_gen.yaml from kernel build.
SEL4_KERNEL path to kernel ELF executable.

See .



156

