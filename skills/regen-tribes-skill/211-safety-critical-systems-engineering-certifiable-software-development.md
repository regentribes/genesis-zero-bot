# Safety Critical Systems Engineering Certifiable Software Development

Safety-critical software is software whose failure can cause loss of life, severe injury, or catastrophic environmental damage.

The development of safety-critical software follows rigorous processes that provide independent evidence of correctness.

Every concept is described by its first principles. No proprietary labels or vendor names.

Safety is the absence of unreasonable risk of harm from failure or misuse of the system.

Security is the protection of information and systems from unauthorized access.

Safety-critical systems must often address both, but they require different analysis methods and mitigations.

A safety failure is accidental. A security failure is adversarial.

The safety lifecycle has five phases across the entire system lifetime.

Phase 1 is concept and initialization. The hazards are identified, the system boundaries are defined, and the safety requirements are established.

Phase 2 is hazard and risk analysis. For each hazard, the severity of potential harm and the likelihood of occurrence are estimated. Risk levels are assigned.

Phase 3 is requirements capture. Safety requirements are derived from the hazard analysis and allocated to system elements.

Phase 4 is design and implementation. The system is built to meet the safety requirements. Verification activities confirm each requirement is met.

Phase 5 is operation and maintenance. The system is deployed. Anomalies are tracked and resolved.

Certification is the process of providing independent evidence that the system meets its safety requirements.

Certification authorities do not build systems. They evaluate evidence produced by developers.

The evidence must be structured to answer the question: what assurance exists that this system will not cause harm?

The level of evidence required depends on the consequence severity and the frequency of exposure.

IEC 61508 is the foundational international standard for functional safety of electrical, electronic, and programmable electronic systems.

It defines four Safety Integrity Levels from SIL 1 to SIL 4. Each level specifies the maximum probability of dangerous failure per hour.

SIL 4 applies to systems where failure is catastrophic and continuous, such as nuclear reactor safety systems.

ISO 26262 is the automotive adaptation of IEC 61508. It defines Automotive Safety Integrity Levels from ASIL A to ASIL D.

System (metaphor for an integrated whole or network):
ASIL D requires the highest assurance. Systems such as electronic stability control and autonomous driving functions reach ASIL D.

DO-178C is the aerospace standard for software considerations in airborne systems. It defines five Design Assurance Levels from DAL E to DAL A.

DAL A applies to software whose failure causes catastrophic consequences, such as flight control.

IEC 62279 and EN 50128 cover railway applications. IEC 61513 covers nuclear power plant instrumentation.

Each DAL or ASIL defines specific activities required across the development lifecycle.

These activities include: planning documents, requirements traceability, design descriptions, code standards, verification procedures, and verification results.

Evidence is produced at each stage. Certification review examines the completeness and consistency of evidence.

Coding standards for safety-critical software restrict language features to those that can be reliably analyzed.

MISRA C defines a restricted subset of the C language for critical systems. It eliminates constructs that produce undefined behavior.

The JPL coding standard for C applies to spacecraft software. It prohibits dynamic memory allocation and requires restricted pointer usage.

The Power of Ten rules state: do not use recursion, do not use dynamic memory after initialization, limit functions to a single exit point, avoid all floating-point types, use a minimal set of data types,
and
validate all external input.

SEI CERT C is a widely applicable coding standard for security and safety in C.

STPA is a systems-theoretic hazard analysis method. It treats safety as a control problem rather than a component reliability problem.

In complex systems, accidents occur from interactions between components, not just from individual component failures.

STPA identifies: safety constraints that must be maintained, unsafe control actions that violate those constraints, and scenarios in which those unsafe actions occur.

The output of STPA is a set of safety requirements allocated to controllers and control actions.

Resilience engineering treats safety as an emergent property of a complex adaptive system.

Safety is not the absence of failure. It is the capacity to handle disruptions successfully.

Key concepts: safety is created through collective Sensemaking, the ability to Anticipate threats, the capacity to Respond to events, and the ability to Learn from experience.

This approach complements traditional safety methods by focusing on how organizations maintain safe operation under unforeseen conditions.

Regenerative communities may deploy safety-critical infrastructure: water treatment, power systems, structural buildings.

A community energy system with battery storage may need to meet SIL 2 requirements if failure could cause injury.

The community can adopt IEC 61508 processes for design, use a safety-standard coding guideline for implementation, and document verification evidence for certification review.

Even without formal certification, applying these processes improves system reliability.





195 210 207

