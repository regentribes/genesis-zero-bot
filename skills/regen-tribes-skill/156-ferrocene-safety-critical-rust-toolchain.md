# Ferrocene Safety Critical Rust Toolchain

Ferrocene is a Rust compiler toolchain for safety- and mission-critical environments.
It is a proper downstream of the main Rust compiler rustc.
The Rust project maintains rustc on the rust-lang/rust GitHub repository.
System (metaphor for an integrated whole or network):
Ferrocene is maintained and supported by Ferrous Systems.
Both standard and long-term support versions are available.

The mission of Ferrocene is to bring open source practices to safety-critical industries.
Ecosystem (metaphor for an interconnected network):

It improves the Ecosystem (metaphor for system or network): Rust open source ecosystem through safety-critical practices.
Ferrocene is a registered trademark of Critical Section GmbH, a subsidiary of Ferrous Systems.

The toolchain is Apache-2.0 licensed.
Source code and all qualification documents are open source.
Prebuilt binaries are available for customers and partners at releases.ferrocene.dev.

Ferrocene is qualified in accordance with three major safety standards.

ISO 26262 (Automotive Safety): TV SD-qualified up to ASIL D (Automotive Safety Integrity Level D).
This is the highest risk classification in the ISO 26262 standard.
A certified core subset is available for ASIL B.

IEC 61508 (Functional Safety): Qualified under IEC 61508 with the compiler qualified up to SIL 3.
Supports customer certification efforts for SIL 4 (Safety Integrity Level 4).
This is the highest level of risk reduction in IEC 61508.
A certified subset of the Rust core library distributed with Ferrocene is certified to IEC 61508 (SIL 2).

IEC 62304 (Medical Device Software): Achieved IEC 62304 Class C qualification.
This covers medical device software lifecycle requirements.

Additional standards planned: Railway and aerospace qualifications are in development.
DO-178C (Aerospace) is supported for customer certification efforts (DAL C).

Many safety-critical compiler vendors fork compilers.
They take a current version, change it, qualify it, and release to customers.
This creates vendor lock-in and stagnation risks.
Customers become stuck on old versions while the main project moves on.
Vendor updates become difficult or impossible.

Ferrocene takes a different approach.

Ferrocene is not a fork.
Ferrocene is the upstream Rust compiler rustc, unmodified.
It is thoroughly tested on targets that are not supported by upstream.
Ferrocene uses LLVM as its code generation backend, also unmodified.
The qualification process involves thoroughly testing this unmodified upstream compiler.
This avoids creating a divergent fork.
Ferrocene maintains close alignment with official rustc releases.

The key advantage: customers receive all versions of Rust with Ferrocene extended validation.
Ferrocene runs its full qualification pipeline on every build.
While Ferrocene may not fully qualify each version (human effort still in the loop), every build goes through extended validation.

Ferrous Systems is one of the largest contributors to the Rust Project.
Particularly contributes to quality measures and testing infrastructure.
Provides services built around Ferrocene:

Training: Rust and Ferrocene training for teams, custom tailored to needs.
Inclusion in SDKs: Ferrocene available for integration in customer toolchains.
Tailoring and integration: Enabling Rust support in operating systems and tools.
Porting the Rust compiler to new targets and qualifying them.
Infrastructure support: Cloud build support as first-class citizen.

Ferrocene uses a modern validation strategy derived from the Not Rocket Science Rule of Software Engineering.
This is the same quality measure the Rust project uses every day.
This strategy has passed review of Ferrocene assessors with no outstanding questions.

The approach avoids ever merging code with bugs in the first place.
Using the same methodology as Rust means no disruption between codebases that may introduce bugs.
The fewer divergences between Ferrocene and upstream, the better.

Ferrocene maintains its own CI infrastructure developed from scratch.
This CI does not reuse upstream configuration.
It runs slightly different compiler configuration flags and tests on other OS versions.
Daily automatic imports bring changes from the main Rust project into Ferrocene branches.

Ferrous Systems provides comprehensive qualification assistance:
Qualification Plan (QP) outlining phases and activities.
Qualification Report (QR) detailing results, requirements traceability, test results.
Target platforms tested: Armv8-A bare-metal, Armv7E-M bare-metal, x86-64 Linux, QNX Neutrino.
All qualification documents are open source.

Ferrocene testing strategy includes two test suites:

Compiler Test Suite covers the compiler codebase through unit, integration, and documentation tests.
Uses compiletest to verify robustness and behavior of the compiler.
Tests both valid and invalid Rust programs.
All outputs and executable behaviors compared against expected results.
Tests annotated with ferrocene annotation tags for traceability to Ferrocene Language Specification sections.

Library Test Suite focuses on the core library.
For supported platforms it also covers alloc, std, and test libraries.
Uses similar mix of unit, integration, and documentation tests.
Ferrocene provides a certified core subset of the Rust standard library (core).
Essential for no_std applications like firmware and real-time control software.
Subset encompasses Option, Clone, str, pointers, most primitive types like slices.
Certified subset has achieved IEC 61508 (SIL 2) and ISO 26262 (ASIL B) certification.

Testing facades enable testing for bare-metal targets.
Provides std functionality for basic logic testing and profiling without hardware-in-the-loop.
Tools used: rustfilt and rust-profdata from cargo-binutils for measuring testing coverage.

Ferrocene runs a slightly different configuration than upstream Rust CI.
Some compiler configuration flags are different.
Tests run on other OS versions not tested upstream.
This has led to discovering issues not caught by upstream.
Ferrous Systems opens issues or PRs to address problems upstream.

Having multiple independent parallel CI pipelines benefits all Rust users.
The combinatory explosion of options to test cannot be covered by a single CI.
Upstream CI infrastructure maintained by the Rust Infrastructure Team is well-built and thorough.
Ferrous Systems has open collaboration with upstream on build system and CI.

Ferrocene not only imports upstream changes but also contributes back.
When changes are needed for Ferrocene workflows, targets, and customers, they propose changes upstream.

After two years of development approaching qualification:
The difference between Rust and Ferrocene in compiler/ and library/ source directories only amounts to support for the LynxOS-178 target and a temporary implementation of a feature proposed for upstream.

All other changes are in the test suite and qualification infrastructure, not in the compiler or standard library itself.

Contributions upstreamed include:
Structured output to the Rust build system to record which steps and tests were executed.
Easier hooking of custom libc into a new build of Rust when porting to a new target.
Changed Rust compiletest suite to produce an error if an ignore directive is invalid.
Changed Rust test suite to successfully run on targets without unwinding.

Ferrocene Supply Chain: Tooling and workflows for continuously reviewing and integrating external code without sacrificing developer ergonomics. Addresses software safety and security concerns.

Ferrocene SDK: Comprehensive Rust distribution for developers on safety-critical, cybersecurity-sensitive, and embedded systems. Extends Rust with tooling, long-term support, optional targets.

Ferrocene Certification: Automates and streamlines the Rust certification process.
Provides tools, expertise, documentation, workflows for meeting safety-critical standards.
Certified core subset available for ISO 26262 (ASIL B) and IEC 61508 (SIL 2), expandable upon request.

Rust provides memory safety without garbage collector.
Type safety catches many common bugs early.
Concurrency safety built into the language.
Coding errors detected early, costing less.
No runtime or garbage collector slowing execution.
Blazing fast performance suitable for real-time control.

Rust reduces common bugs found in C and C++.
Memory safety prevents entire classes of attacks.
Ferrocene enables these benefits in certified safety-critical contexts.

Rust Foundation established the Safety-Critical Rust Consortium.
Promotes responsible use of Rust in safety-critical environments.

ELISA Project (Enabling Linux In Safety Applications) by Linux Foundation.
Ferrous Systems engaged with ELISA, presenting work on qualifying the Rust compiler.
Shared commitment to enabling open-source technologies in safety-critical domains.

LLVM has announced plans for a committee to provide safety information on the Clang compiler.
Similar initiative to Ferrocene open-source qualification approach.

Ferrocene enables use of Rust in regenerative community technology deployments requiring safety certification.

Agricultural IoT devices may require IEC 61508 certification for safety functions.
Medical devices for community health clinics may require IEC 62304 certification.
Automotive-grade computing for autonomous tractors may require ISO 26262 certification.

Ferrocene provides a path to certification without proprietary vendor lock-in.
Open source qualification documents enable community review and verification.
No fork approach means community can benefit from upstream Rust improvements continuously.

The cost model (monthly or annual billing) makes safety-critical Rust accessible.
Start developing safety-critical software without massive upfront investment.
Regenerative communities can build certified systems without enterprise budgets.

The symbiotic relationship with upstream Rust means improvements flow both directions.
Community contributions to Rust can flow through to certified toolchain.
The open-source nature means community can verify the qualification claims themselves.





061 145 140

