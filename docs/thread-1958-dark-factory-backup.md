# Dark Factory Progress Report — Thread 1958 Backup
# Saved: 2026-05-04
# Messages: 21642 — latest in thread
# Purpose: Vitali requested save-to-file + delete from thread

## MESSAGE 1 (was 21642)

<b>DARK FACTORY PROGRESS REPORT</b>
2026-05-04

<b>━━ CONTEXT: WHAT WE'RE BUILDING ━━</b>

A federated, safety-critical infrastructure stack for regenerative community governance. Not a product — an operational commons. The pieces:

<b>• ITC (Integral Time Credits):</b> Non-transferable time currency. 1 hour = 1 ITC. Cannot be saved, traded, or accumulated. Prevents the emergence of a credit market inside the community.

<b>• CDS (Community Deliberation System):</b> Structured decision-making process. Proposals → deliberation → consensus → action. Governed by the community, not by an algorithm.

<b>• OAD (Open Access Design):</b> Shared design commons. NixOS configurations, PCB designs, sensor calibrations, deployment playbooks. Like a wiki for physical infrastructure.

<b>• COS (Community Operating System):</b> Production coordination. Who is doing what, when, where. The human-layer project management that connects ITC and CDS.

<b>• FRS (Feedback and Review System):</b> The immune system. Monitors deployed systems, detects drift, escalates anomalies, does not resolve autonomously.

The dark factory stack is the technical infrastructure layer beneath all five. Safety-critical Rust, NixOS deployment, formal verification, hardware attestation.

<b>━━ WHAT WE DID TODAY ━━</b>

<b>VERIFICATION ROUND 1 (Morning)</b>

11 resources evaluated for safety-critical Rust ecosystem:

<b>• Ferrocene:</b> ISO 26262 ASIL-D / IEC 61508 SIL-2 certified toolchain. Real. No marketing fluff. The only certified Rust path for bare-metal.

<b>• seL4 Rust:</b> Formally verified kernel + Rust userspace. The kernel is still C. The Rust userspace is real.

<b>• Creusot:</b> Deductive verifier via Why3/Coq. Won VerifyThis 2026. POPL 2026 tutorial. Full functional proofs. This is the verification layer for ITC core.

<b>• seL4 Microkit 2.1 + rust-sel4 3.0:</b> November 2025 releases. Real. Rust-native.

<b>• embOS-Safe + RTIC:</b> ISO 26262 ASIL-D RTOS with Rust FFI. RTIC for prototype (compile-time deadlock prevention). embOS-Safe for certification.

<b>• Integral Collective:</b> The governance architecture. 5 subsystems. ITC is the currency model.

<b>VERIFICATION ROUND 2 (Afternoon)</b>

10 more resources for deployment and infrastructure:

<b>• colmena:</b> Stateless NixOS deployment via SSH. No agent on target. Single-maintainer (zhaofengli, 14 PRs). Fork risk.

<b>• Attic:</b> Self-hostable binary cache. Multi-tenant, global deduplication. Single-maintainer. Early prototype.

<b>• OpenTofu:</b> Linux Foundation Terraform fork. 3,900+ providers. Drop-in replacement for Terraform.

<b>• terranix:</b> Nix → Terraform JSON. Bridging Nix configs to cloud IaC.

<b>• kubernix:</b> WRONG RESOURCE. Personal DevOps blog. Not the Kubernetes via Nix tool we wanted.

<b>• nix-init, nurl, just, awesome-nix, awesome-rust:</b> All useful, all verified.

<b>VERIFICATION ROUND 3 (Late Afternoon)</b>

9 resources for embedded + Nix toolchain:

<b>• crane, rust-overlay, fenix, cross:</b> All Nix library for Rust building.各有特色.

<b>• android-nixpkgs:</b> Nix-packaged Android SDK. Daily updates from Google.

<b>• nixpkgs-esp-dev, nix-qemu-espressif, esp-rust-nix-sandbox:</b> Full ESP32 development pipeline in Nix. Verified working.

<b>Gap solutions found:</b>
• sops-nix + Vault: Secrets management for NixOS.
• k3s-nix: Kubernetes on NixOS.
• nix-effects: Handler-based config validation with typed IR.

---

## MESSAGE 2 (was 21643)

<b>━━ SKILLS OPTIMIZATION ━━</b>

Agent Skills validation against Anthropic's official agentskills/agentskills spec:

• 32 active skills, all pass validation
• 31 skills archived
• 6 regen/mythogen skills restored (mythogen-dev, mythogen-ref, regen-cas, regen-tribes-notes, regen-tribes-skill, regen-vision)
• 19 new skills installed (rust, formal-provers, nix-mode, iot, cicd-pipeline, sbom-generator, secrets-management, kubernetes-devops, k8s-security-review, k8s-incident-response-playbook, kubernetes-encyclopedia, toolweb-kubernetes-hardening, kubectl-skill, github-api, recursive-knowledge-miner, knowledge-graph, software-architect, rust-patterns, cargo-toml-validator)

ClawHub blocked 3 skills (k8s-debug, kubernetes, container-reviewer) due to VirusTotal Code Insight flags. Agentic capabilities trigger security detection in automated scanners.

OSSInsight API skill created: skills/ossinsight-api/SKILL.md, 11KB, all 19 endpoints documented.

<b>━━ ARCHITECTURE AUDIT: WHAT FAILED ━━</b>

8 layer failures identified:

<b>1. Trust chain broken at root</b>
seL4 verified C + Rust userspace ≠ trusted system. Verification is against formal spec. The spec can be wrong. Hardware attestation (TPM 2.0) is the right primitive — it measures actual hardware state, not spec compliance.

<b>2. NixOS configuration undecidable</b>
Nix is Turing-complete. Proving full correctness = halting problem. nix-effects gives invariants, not proofs. namaka gives testing, not proofs.

<b>3. Formal verification proves correctness against spec</b>
The spec is the TCB. Wrong spec + correct implementation = proven correct unsafe system.

<b>4. ITC accounting assumes honest measurement</b>
Non-transferability ≠ honest reporting. Members self-report time. Governance required for measurement integrity.

<b>5. Distributed deployment requires trust</b>
Attic NAR deduplication trusts content. SSH keys as auth. Immutable ≠ secure.

<b>6. Verification doesn't connect to certification</b>
MC/DC coverage gap in Rust compiler. GSN tools not accepted by certification authorities.

<b>7. Kleisli bottleneck is human</b>
Handler authors write specs. AI agents generate specs. Human must validate.

<b>8. Single point of failure is specification</b>
Wrong specification + correct implementation = most dangerous failure mode.

<b>━━ AUDIT: WHAT SURVIVES ━━</b>

• NixOS reproducibility is genuine (content-addressed store)
• Safe Rust memory safety is proven (type system)
• Formal verification raises the assurance floor
• Hardware attestation is the right primitive
• ITC + FRS model direction is sound
• Dark factory stack is real and composable

<b>━━ SBC MARKET ANALYSIS (May 2025) ━━</b>

Live data from 6 sources: Liliputing, Phoronix, FanlessTech, LinuxGizmos, CNX-Software, Good e-Reader

• <b>Tier 1 (Universal):</b> Raspberry Pi 5 8GB — 80 USD
• <b>Tier 2 (Off-grid):</b> OrangePi 5 Pro RK3588S — 40 USD + Quartz64-B RK3566 — 35 USD
• <b>Tier 3 (Real-time):</b> BeagleBone AI-64 — 80 USD
• <b>RISC-V:</b> VisionFive 2 JH7110 — 70 USD + Pinecil Pro TH1520 — 75 USD
• <b>MCU:</b> ESP32-C6 RISC-V — 5 USD + STM32-U5 — 10 USD

ARM commoditization: 10-80 USD filled by OrangePi/Radxa/Pine64/RK3588 ecosystem
RISC-V SBCs: production-ready (JH7110 best Linux support)
RK3588: mainstream ARM64 workhorse (OrangePi 5 Pro, ROCK 5B)
Ubiquitous exited sub-USD 30 SBC market — Pine64/OrangePi fill gap

10-node regenerative neighborhood budget: ~490 USD + sensors/power/enclosure

---

## MESSAGE 3 (was 21644)

<b>━━ NIX ECOSYSTEM DECONSTRUCTION ━━</b>

<b>DEN (denful/den):</b>
Context-parameterized NixOS modules. Write one aspect (function of host, user), transpose to NixOS/Darwin/HomeManager. Works with or without flakes. 6 den.lib functions: listHosts, aspects.get, aspects.resolve, import-tree, nixosModules. Single-maintainer (vic).

<b>nix-effects:</b>
Freer monad with FTCQueue (O(1) bind). 6 built-in effects. 3 handlers: strict, collecting, logging. Dependent types: Pi, Sigma, DepRecord, Certified. Type checker with blame tracking.

<b>Kleisli:</b>
Verification layer: refinement types + strict/collect/log handlers. Coordination layer (kli): append-only event log with swappable handlers. Single computation, three semantics.

<b>flake-aspects:</b>
Aspect class system with DAG composition. Parametric providers. Zero-dependency foundation.

<b>Dendrix:</b>
Community distribution of NixOS aspects (like NUR for NixOS modules). Community-sharing mechanism for dendritic configurations.

<b>━━ ITC SPECIFICATION: THE CRITICAL PATH ━━</b>

ITC is the blocker. Everything else depends on it:

<b>• CDS deliberation</b> needs ITC to track deliberation time
<b>• COS coordination</b> needs ITC to assign time budgets
<b>• OAD</b> needs ITC to track design contribution time
<b>• FRS</b> needs ITC to track review and feedback time
<b>• IoT gateway</b> needs ITC to attribute sensor data to members

The ITC ledger specification is the first document to write. Not the implementation — the specification.

<b>Chapter outline (17 pages):</b>
1. Credit system overview (non-transferable, time-based)
2. Credit lifecycle (mint → assign → log → expire)
3. Double-entry model (debit/credit, balance invariants)
4. Consensus protocol (Raft single-node → PBFT at 50+)
5. Fraud/dispute resolution
6. Governance interface (CDS deliberation)

<b>━━ MVI-1: MINIMUM VIABLE INTEGRAL NODE ━━</b>

One Pi 5 + one ESP32 + one ITC ledger + one CDS deliberation

<b>Hardware:</b>
• Raspberry Pi 5 8GB — 80 USD
• ESP32-C6 RISC-V — 5 USD
• DHT22 temp/humidity — 3 USD
• SD card 64GB — 10 USD
<b>Total:</b> 98 USD (single node, not the full 173 USD hardware list)

<b>Purpose:</b>
• Run the ITC ledger in single-node Raft mode
• Flash one NixOS config via colmena
• Connect ESP32 via MQTT
• Run one real CDS deliberation

MVI-1 is the first real test. Not a prototype — an operational node running in a real community.

<b>━━ 10 KEY DERIVATIONS ━━</b>

<b>1.</b> ITC ledger specification FIRST — everything else depends on it
<b>2.</b> Hardware attestation before formal verification (TPM 2.0 on SBC)
<b>3.</b> Farmers IoT Toolkit IS the first Integral slice (OAD + FRS + CDS)
<b>4.</b> Raft first, PBFT at 50+ members (adversarial incentives low in small trusted community)
<b>5.</b> Verification allocation: Creusot on ITC core, Kani on CDS, Verus on PRU, namaka on OAD
<b>6.</b> FRS is the immune system: detect anomalies, do not resolve
<b>7.</b> MVI-1 plan: one Pi 5 + one ESP32 + ITC ledger + CDS deliberation
<b>8.</b> RegenTribes is the integration community: implementers + spec authors + field testers
<b>9.</b> ITC specification is the 80% effort this week
<b>10.</b> One thing moves the needle: writing the ITC specification

---

## MESSAGE 4 (was 21645)

<b>━━ WHAT VITALI ASKED: EXTEND AND EXTRAPOLATE ━━</b>

EXTEND means: we have the pieces, now show how they connect. The dark factory is not a list of tools — it is a system where each layer depends on the next.

EXTRAPOLATE means: where does this go? What happens after MVI-1? What are the failure modes three months from now?

<b>━━ THE SYSTEM MAP ━━</b>

<b>Layer 0 — Hardware (physical)</b>
TPM 2.0 on SBC → hardware attestation chain

<b>Layer 1 — Bootstrap (trusted init)</b>
seL4 Microkit → NixOS → colmena apply

<b>Layer 2 — Core Services (ITC + CDS)</b>
Rust ITC ledger (Raft) → CDS deliberation CLI

<b>Layer 3 — Integration (OAD + COS + FRS)</b>
Nix store + namaka → COS coordination → FRS alerting

<b>Layer 4 — Community (members)</b>
Farmers IoT → sensor data → ITC attribution → CDS deliberation

Each layer trusts the layer below it. The trust chain is the architecture.

<b>━━ THREE MONTHS FROM NOW (Extrapolation) ━━</b>

<b>If we ship MVI-1 in 2 weeks:</b>
• One farm running ITC ledger + CDS deliberation
• One NixOS config for Pi 5 managed via colmena
• One ESP32 sensor reporting via MQTT
• One community decision logged in CDS

<b>If we don't ship MVI-1:</b>
• ITC specification stays unwritten
• The stack remains theoretical
• Other communities don't have a reference implementation
• We lose the implementation lead

<b>━━ FAILURE MODES ━━</b>

<b>1. Specification paralysis</b>
We keep researching and never write the ITC spec. <b>Mitigation:</b> write the spec this week, no more research until the spec is done.

<b>2. Over-engineering</b>
We implement PBFT when Raft is sufficient. <b>Mitigation:</b> Raft single-node first, PBFT only at 50+ members.

<b>3. Single-maintainer dependency</b>
colmena and Attic are single-maintainer projects. If vic stops maintaining den, the NixOS configuration layer is at risk. <b>Mitigation:</b> fork and maintain.

<b>4. Verification theater</b>
We add formal verification without specifying what we're verifying. <b>Mitigation:</b> ITC spec first, then verify the ITC core in Creusot.

<b>5. Community adoption without governance</b>
We deploy ITC ledger without a CDS deliberation process. Members game the system. <b>Mitigation:</b> CDS deliberation is part of MVI-1, not a later addition.

<b>━━ THE ONE THING ━━</b>

Write the ITC specification. 17 pages. 6 chapters. This week.

Everything else waits on it.

<b>━━ OPEN LOOPS (Priority Order) ━━</b>

<b>1. [CRITICAL]</b> ITC specification chapters 1-6 — this week
<b>2. [CRITICAL]</b> MVI-1 hardware order — Pi 5 + ESP32 + DHT22 + SD card
<b>3. [HIGH]</b> Commit restored regen/mythogen skills — push to GitHub
<b>4. [HIGH]</b> ITC ledger Rust implementation — start after spec is done
<b>5. [MEDIUM]</b> Fork colmena/Attic maintenance plan — address single-maintainer risk
<b>6. [MEDIUM]</b> Evaluate agentskills/src/ for SDK patterns
<b>7. [MEDIUM]</b> pi self-modifying harness setup
<b>8. [LOW]</b> MC/DC coverage investigation for Rust certification

---

## MESSAGE 5 (was 21648) — Duplicate of 21642, resend attempt 1

[same content as MESSAGE 1]

---

## MESSAGE 6 (was 21649) — Duplicate of 21643, resend attempt 1

[same content as MESSAGE 2]

---

## MESSAGE 7 (was 21650) — Duplicate of 21644, resend attempt 1

[same content as MESSAGE 3]

---

## MESSAGE 8 (was 21651) — Duplicate of 21645, resend attempt 1

[same content as MESSAGE 4]

---

## MESSAGE 9 (was 21652) — To be deleted

[Already deleted]

---

## MESSAGE 10 (was 21654) — To be deleted

[Already deleted]

---

## MESSAGE 11 (was 21656) — To be deleted

[Already deleted]

---

## NEW MESSAGES (resend with proper formatting)

## NEW MSG A (was 21659)

<b>DARK FACTORY PROGRESS REPORT</b>
2026-05-04

<b>━━ CONTEXT: WHAT WE'RE BUILDING ━━</b>

A federated, safety-critical infrastructure stack for regenerative community governance. Not a product — an operational commons. The pieces:

<b>• ITC (Integral Time Credits):</b> Non-transferable time currency. 1 hour = 1 ITC. Cannot be saved, traded, or accumulated. Prevents the emergence of a credit market inside the community.

<b>• CDS (Community Deliberation System):</b> Structured decision-making process. Proposals → deliberation → consensus → action. Governed by the community, not by an algorithm.

<b>• OAD (Open Access Design):</b> Shared design commons. NixOS configurations, PCB designs, sensor calibrations, deployment playbooks. Like a wiki for physical infrastructure.

<b>• COS (Community Operating System):</b> Production coordination. Who is doing what, when, where. The human-layer project management that connects ITC and CDS.

<b>• FRS (Feedback and Review System):</b> The immune system. Monitors deployed systems, detects drift, escalates anomalies, does not resolve autonomously.

The dark factory stack is the technical infrastructure layer beneath all five. Safety-critical Rust, NixOS deployment, formal verification, hardware attestation.

<b>━━ WHAT WE DID TODAY ━━</b>

<b>VERIFICATION ROUND 1 (Morning)</b>

11 resources evaluated for safety-critical Rust ecosystem:

<b>• Ferrocene:</b> ISO 26262 ASIL-D / IEC 61508 SIL-2 certified toolchain. Real. No marketing fluff. The only certified Rust path for bare-metal.

<b>• seL4 Rust:</b> Formally verified kernel + Rust userspace. The kernel is still C. The Rust userspace is real.

<b>• Creusot:</b> Deductive verifier via Why3/Coq. Won VerifyThis 2026. POPL 2026 tutorial. Full functional proofs. This is the verification layer for ITC core.

<b>• seL4 Microkit 2.1 + rust-sel4 3.0:</b> November 2025 releases. Real. Rust-native.

<b>• embOS-Safe + RTIC:</b> ISO 26262 ASIL-D RTOS with Rust FFI. RTIC for prototype (compile-time deadlock prevention). embOS-Safe for certification.

<b>• Integral Collective:</b> The governance architecture. 5 subsystems. ITC is the currency model.

<b>VERIFICATION ROUND 2 (Afternoon)</b>

10 more resources for deployment and infrastructure:

<b>• colmena:</b> Stateless NixOS deployment via SSH. No agent on target. Single-maintainer (zhaofengli, 14 PRs). Fork risk.

<b>• Attic:</b> Self-hostable binary cache. Multi-tenant, global deduplication. Single-maintainer. Early prototype.

<b>• OpenTofu:</b> Linux Foundation Terraform fork. 3,900+ providers. Drop-in replacement for Terraform.

<b>• terranix:</b> Nix → Terraform JSON. Bridging Nix configs to cloud IaC.

<b>• kubernix:</b> WRONG RESOURCE. Personal DevOps blog. Not the Kubernetes via Nix tool we wanted.

<b>• nix-init, nurl, just, awesome-nix, awesome-rust:</b> All useful, all verified.

<b>VERIFICATION ROUND 3 (Late Afternoon)</b>

9 resources for embedded + Nix toolchain:

<b>• crane, rust-overlay, fenix, cross:</b> All Nix library for Rust building.各有特色.

<b>• android-nixpkgs:</b> Nix-packaged Android SDK. Daily updates from Google.

<b>• nixpkgs-esp-dev, nix-qemu-espressif, esp-rust-nix-sandbox:</b> Full ESP32 development pipeline in Nix. Verified working.

<b>Gap solutions found:</b>
• sops-nix + Vault: Secrets management for NixOS.
• k3s-nix: Kubernetes on NixOS.
• nix-effects: Handler-based config validation with typed IR.

## NEW MSG B (was 21660)

<b>━━ SKILLS OPTIMIZATION ━━</b>

Agent Skills validation against Anthropic's official agentskills/agentskills spec:

• 32 active skills, all pass validation
• 31 skills archived
• 6 regen/mythogen skills restored (mythogen-dev, mythogen-ref, regen-cas, regen-tribes-notes, regen-tribes-skill, regen-vision)
• 19 new skills installed (rust, formal-provers, nix-mode, iot, cicd-pipeline, sbom-generator, secrets-management, kubernetes-devops, k8s-security-review, k8s-incident-response-playbook, kubernetes-encyclopedia, toolweb-kubernetes-hardening, kubectl-skill, github-api, recursive-knowledge-miner, knowledge-graph, software-architect, rust-patterns, cargo-toml-validator)

ClawHub blocked 3 skills (k8s-debug, kubernetes, container-reviewer) due to VirusTotal Code Insight flags. Agentic capabilities trigger security detection in automated scanners.

OSSInsight API skill created: skills/ossinsight-api/SKILL.md, 11KB, all 19 endpoints documented.

<b>━━ ARCHITECTURE AUDIT: WHAT FAILED ━━</b>

8 layer failures identified:

<b>1. Trust chain broken at root</b>
seL4 verified C + Rust userspace ≠ trusted system. Verification is against formal spec. The spec can be wrong. Hardware attestation (TPM 2.0) is the right primitive — it measures actual hardware state, not spec compliance.

<b>2. NixOS configuration undecidable</b>
Nix is Turing-complete. Proving full correctness = halting problem. nix-effects gives invariants, not proofs. namaka gives testing, not proofs.

<b>3. Formal verification proves correctness against spec</b>
The spec is the TCB. Wrong spec + correct implementation = proven correct unsafe system.

<b>4. ITC accounting assumes honest measurement</b>
Non-transferability ≠ honest reporting. Members self-report time. Governance required for measurement integrity.

<b>5. Distributed deployment requires trust</b>
Attic NAR deduplication trusts content. SSH keys as auth. Immutable ≠ secure.

<b>6. Verification doesn't connect to certification</b>
MC/DC coverage gap in Rust compiler. GSN tools not accepted by certification authorities.

<b>7. Kleisli bottleneck is human</b>
Handler authors write specs. AI agents generate specs. Human must validate.

<b>8. Single point of failure is specification</b>
Wrong specification + correct implementation = most dangerous failure mode.

<b>━━ AUDIT: WHAT SURVIVES ━━</b>

• NixOS reproducibility is genuine (content-addressed store)
• Safe Rust memory safety is proven (type system)
• Formal verification raises the assurance floor
• Hardware attestation is the right primitive
• ITC + FRS model direction is sound
• Dark factory stack is real and composable

<b>━━ SBC MARKET ANALYSIS (May 2025) ━━</b>

Live data from 6 sources: Liliputing, Phoronix, FanlessTech, LinuxGizmos, CNX-Software, Good e-Reader

• <b>Tier 1 (Universal):</b> Raspberry Pi 5 8GB — 80 USD
• <b>Tier 2 (Off-grid):</b> OrangePi 5 Pro RK3588S — 40 USD + Quartz64-B RK3566 — 35 USD
• <b>Tier 3 (Real-time):</b> BeagleBone AI-64 — 80 USD
• <b>RISC-V:</b> VisionFive 2 JH7110 — 70 USD + Pinecil Pro TH1520 — 75 USD
• <b>MCU:</b> ESP32-C6 RISC-V — 5 USD + STM32-U5 — 10 USD

ARM commoditization: 10-80 USD filled by OrangePi/Radxa/Pine64/RK3588 ecosystem
RISC-V SBCs: production-ready (JH7110 best Linux support)
RK3588: mainstream ARM64 workhorse (OrangePi 5 Pro, ROCK 5B)
Ubiquitous exited sub-USD 30 SBC market — Pine64/OrangePi fill gap

10-node regenerative neighborhood budget: ~490 USD + sensors/power/enclosure

## NEW MSG C (was 21661)

<b>━━ NIX ECOSYSTEM DECONSTRUCTION ━━</b>

<b>DEN (denful/den):</b>
Context-parameterized NixOS modules. Write one aspect (function of host, user), transpose to NixOS/Darwin/HomeManager. Works with or without flakes. 6 den.lib functions: listHosts, aspects.get, aspects.resolve, import-tree, nixosModules. Single-maintainer (vic).

<b>nix-effects:</b>
Freer monad with FTCQueue (O(1) bind). 6 built-in effects. 3 handlers: strict, collecting, logging. Dependent types: Pi, Sigma, DepRecord, Certified. Type checker with blame tracking.

<b>Kleisli:</b>
Verification layer: refinement types + strict/collect/log handlers. Coordination layer (kli): append-only event log with swappable handlers. Single computation, three semantics.

<b>flake-aspects:</b>
Aspect class system with DAG composition. Parametric providers. Zero-dependency foundation.

<b>Dendrix:</b>
Community distribution of NixOS aspects (like NUR for NixOS modules). Community-sharing mechanism for dendritic configurations.

<b>━━ ITC SPECIFICATION: THE CRITICAL PATH ━━</b>

ITC is the blocker. Everything else depends on it:

<b>• CDS deliberation</b> needs ITC to track deliberation time
<b>• COS coordination</b> needs ITC to assign time budgets
<b>• OAD</b> needs ITC to track design contribution time
<b>• FRS</b> needs ITC to track review and feedback time
<b>• IoT gateway</b> needs ITC to attribute sensor data to members

The ITC ledger specification is the first document to write. Not the implementation — the specification.

<b>Chapter outline (17 pages):</b>
1. Credit system overview (non-transferable, time-based)
2. Credit lifecycle (mint → assign → log → expire)
3. Double-entry model (debit/credit, balance invariants)
4. Consensus protocol (Raft single-node → PBFT at 50+)
5. Fraud/dispute resolution
6. Governance interface (CDS deliberation)

<b>━━ MVI-1: MINIMUM VIABLE INTEGRAL NODE ━━</b>

One Pi 5 + one ESP32 + one ITC ledger + one CDS deliberation

<b>Hardware:</b>
• Raspberry Pi 5 8GB — 80 USD
• ESP32-C6 RISC-V — 5 USD
• DHT22 temp/humidity — 3 USD
• SD card 64GB — 10 USD
<b>Total:</b> 98 USD (single node, not the full 173 USD hardware list)

<b>Purpose:</b>
• Run the ITC ledger in single-node Raft mode
• Flash one NixOS config via colmena
• Connect ESP32 via MQTT
• Run one real CDS deliberation

MVI-1 is the first real test. Not a prototype — an operational node running in a real community.

<b>━━ 10 KEY DERIVATIONS ━━</b>

<b>1.</b> ITC ledger specification FIRST — everything else depends on it
<b>2.</b> Hardware attestation before formal verification (TPM 2.0 on SBC)
<b>3.</b> Farmers IoT Toolkit IS the first Integral slice (OAD + FRS + CDS)
<b>4.</b> Raft first, PBFT at 50+ members (adversarial incentives low in small trusted community)
<b>5.</b> Verification allocation: Creusot on ITC core, Kani on CDS, Verus on PRU, namaka on OAD
<b>6.</b> FRS is the immune system: detect anomalies, do not resolve
<b>7.</b> MVI-1 plan: one Pi 5 + one ESP32 + ITC ledger + CDS deliberation
<b>8.</b> RegenTribes is the integration community: implementers + spec authors + field testers
<b>9.</b> ITC specification is the 80% effort this week
<b>10.</b> One thing moves the needle: writing the ITC specification

## NEW MSG D (was 21662)

<b>━━ WHAT VITALI ASKED: EXTEND AND EXTRAPOLATE ━━</b>

EXTEND means: we have the pieces, now show how they connect. The dark factory is not a list of tools — it is a system where each layer depends on the next.

EXTRAPOLATE means: where does this go? What happens after MVI-1? What are the failure modes three months from now?

<b>━━ THE SYSTEM MAP ━━</b>

<b>Layer 0 — Hardware (physical)</b>
TPM 2.0 on SBC → hardware attestation chain

<b>Layer 1 — Bootstrap (trusted init)</b>
seL4 Microkit → NixOS → colmena apply

<b>Layer 2 — Core Services (ITC + CDS)</b>
Rust ITC ledger (Raft) → CDS deliberation CLI

<b>Layer 3 — Integration (OAD + COS + FRS)</b>
Nix store + namaka → COS coordination → FRS alerting

<b>Layer 4 — Community (members)</b>
Farmers IoT → sensor data → ITC attribution → CDS deliberation

Each layer trusts the layer below it. The trust chain is the architecture.

<b>━━ THREE MONTHS FROM NOW (Extrapolation) ━━</b>

<b>If we ship MVI-1 in 2 weeks:</b>
• One farm running ITC ledger + CDS deliberation
• One NixOS config for Pi 5 managed via colmena
• One ESP32 sensor reporting via MQTT
• One community decision logged in CDS

<b>If we don't ship MVI-1:</b>
• ITC specification stays unwritten
• The stack remains theoretical
• Other communities don't have a reference implementation
• We lose the implementation lead

<b>━━ FAILURE MODES ━━</b>

<b>1. Specification paralysis</b>
We keep researching and never write the ITC spec. <b>Mitigation:</b> write the spec this week, no more research until the spec is done.

<b>2. Over-engineering</b>
We implement PBFT when Raft is sufficient. <b>Mitigation:</b> Raft single-node first, PBFT only at 50+ members.

<b>3. Single-maintainer dependency</b>
colmena and Attic are single-maintainer projects. If vic stops maintaining den, the NixOS configuration layer is at risk. <b>Mitigation:</b> fork and maintain.

<b>4. Verification theater</b>
We add formal verification without specifying what we're verifying. <b>Mitigation:</b> ITC spec first, then verify the ITC core in Creusot.

<b>5. Community adoption without governance</b>
We deploy ITC ledger without a CDS deliberation process. Members game the system. <b>Mitigation:</b> CDS deliberation is part of MVI-1, not a later addition.

<b>━━ THE ONE THING ━━</b>

Write the ITC specification. 17 pages. 6 chapters. This week.

Everything else waits on it.

<b>━━ OPEN LOOPS (Priority Order) ━━</b>

<b>1. [CRITICAL]</b> ITC specification chapters 1-6 — this week
<b>2. [CRITICAL]</b> MVI-1 hardware order — Pi 5 + ESP32 + DHT22 + SD card
<b>3. [HIGH]</b> Commit restored regen/mythogen skills — push to GitHub
<b>4. [HIGH]</b> ITC ledger Rust implementation — start after spec is done
<b>5. [MEDIUM]</b> Fork colmena/Attic maintenance plan — address single-maintainer risk
<b>6. [MEDIUM]</b> Evaluate agentskills/src/ for SDK patterns
<b>7. [MEDIUM]</b> pi self-modifying harness setup
<b>8. [LOW]</b> MC/DC coverage investigation for Rust certification
