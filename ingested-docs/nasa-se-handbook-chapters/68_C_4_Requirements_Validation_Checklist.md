## C.4 Requirements Validation Checklist

Clarity









Are the requirements concise and simple?









Does the requirement statement have one subject and one predicate?

Completeness



Are requirements stated as completely as possible? Have all incomplete requirements been captured as TBDs or TBRs and a complete listing of them maintained with the requirements?











Have all assumptions been explicitly stated?

Compliance

















Consistency



Are the requirements stated consistently without contradicting themselves or the requirements of related systems?



Is the terminology consistent with the user and sponsor’s terminology? With the project glossary?



Is the terminology consistently used throughout the document? Are the key terms included in the project’s glossary?

Traceability



Are all requirements needed? Is each requirement necessary to meet the parent requirement? Is each requirement a needed function or characteristic? Distinguish between needs and wants. If it is not necessary, it is not a requirement. Ask, “What is the worst that could happen if the requirement was not included?”









Is each requirement stated in such a manner that it can be uniquely referenced (e.g., each requirement is uniquely numbered) in subordinate documents?

Correctness



Is each requirement correct?



Is each stated assumption correct? Assumptions should be confirmed before the document can be baselined.



Are the requirements technically feasible?

Functionality



Are all described functions necessary and together sufficient to meet mission and system goals and objectives?

Performance



Are all required performance specifications and margins listed (e.g., consider timing, throughput, storage size, latency, accuracy and precision)?



Is each performance requirement realistic?



Are the tolerances overly tight? Are the tolerances defendable and cost-effective? Ask, “What is the worst thing that could happen if the tolerance was doubled or tripled?”

Interfaces



Are all external interfaces clearly defined?



Are all internal interfaces clearly defined?





Maintainability



Have the requirements for maintainability of the system been specified in a measurable, verifiable manner?



Are requirements written so that ripple effects from changes are minimized (i.e., requirements are as weakly coupled as possible)?

Reliability



Are clearly defined, measurable, and verifiable reliability requirements specified?



Are there error detection, reporting, handling, and recovery requirements?



Are undesired events (e.g., single-event upset, data loss or scrambling, operator error) considered and their required responses specified?



Have assumptions about the intended sequence of functions been stated? Are these sequences required?



Do these requirements adequately address the survivability after a software or hardware fault of

the system from the point of view of hardware, software, operations, personnel and procedures?

Verifiability/Testability



Can the system be tested, demonstrated, inspected, or analyzed to show that it satisfies requirements? Can this be done at the level of the system at which the requirement is stated? Does a means exist to measure the accomplishment of the requirement and verify compliance? Can the criteria for verification be stated?



Are the requirements stated precisely to facilitate specification of system test success criteria and requirements?





Data Usage





# Appendix D: Requirements Verification Matrix



**NOTE:**

*Appendix I*

TABLE D-1

*Appendix C*

TABLE D-1 Requirements Verification Matrix



Document

-



-



Facility or Lab

a











Results

**

*Document number the requirement is contained within*

*Paragraph number of the requirement*

*Text (within reason) of the requirement, i.e., the “shall”*

*Success criteria for the requirement*

*Verification method for the requirement (analysis, inspection, demonstration, test)*

**

**

**

**

**

**

**

*Indicate documents that contain the objective evidence that requirement was satisfied*

P-1

xxx

3.2.1.1 Capability: Support Uplinked Data (LDR)

System X shall provide a max. ground-tostation uplink of…

1. System X locks to forward link at the min and max data rate tolerances

2. System X locks to the forward link at the min and max operating frequency tolerances

Test

xxx

5

Yes

No

xxx

P-i

xxx

Other paragraphs

Other “shalls” in PTRS

Other criteria

xxx

xxx

xxx

Yes/No

Yes/No

xxx

Memo xxx

S-i or other unique designator

xxxxx (other specs, ICDs, etc.)

Other paragraphs

Other “shalls” in specs, ICDs, etc.

Other criteria

xxx

xxx

xxx

Yes/No

Yes/No

xxx

Report xxx

a

# Appendix E: Creating the Validation Plan with a Validation Requirements Matrix

**NOTE:**

*Appendix I*

TABLE E-1

*Appendix D*







•

ConOps

•

Stakeholder/customer needs, goals, and objectives documentation

•



•

Lessons learned database

•

System architecture modeling

•

Test-as-you-fly design goals and constraints

•

SEMP, HSIP, V&V plans

Validation products can take the form of a wide range of deliverables, including:

•

Stakeholder evaluation and feedback

•

Peer reviews

•

Physical models of all fidelities

•

Simulations

•

Virtual modeling

•

Tests

•

Fit-checks

•

Procedure dry-runs

•



•

Phase-level review solicitation and feedback

Particular attention should be paid to the planning for life cycle phase since early validation can have a profound impact on the design and cost in the later life cycle phases.

TABLE E-1

Validation Product # Activity Objective Validation Method Facility or Lab Phase Performing Organization Results *Unique identifier for validation product Describe evaluation by the customer/sponsor that will be performed What is to be accomplished by the customer/sponsor evaluation  Facility or laboratory used to perform the validation*

*a*

*Organization responsible for coordinating the validation activity Indicate the objective evidence that validation activity occurred* 1 Customer/sponsor will evaluate the candidate displays 1. Ensure legibility is acceptable 2. Ensure overall appearance is acceptable Test xxx Phase A xxx TPS 123456 a. Example: (1) during product selection process, (2) prior to final product selection (if COTS) or prior to PDR, (3) prior to CDR, (4) during box-level functional, (5) during system-level functional, (6) during end-to-end functional, (7) during integrated vehicle functional, (8) during on-orbit functional.

Appendix F: Functional, Timing, and State Analysis



*https://nen.nasa.gov/web/se/doc-repository*

# Appendix G: Technology Assessment/Insertion

































2

2

TABLE G.1-1

2

FIGURE G.1-1

TABLE G.1-1 Products Provided by the TA as a Function of Program/Project Phase

Gate

Product

KDP A: Transition from

Requires an assessment of potential technology needs versus current and planned

Pre-Phase A to Phase A

technology readiness levels, as well as potential opportunities to use commercial,

academic, and other government agency sources of technology. Included as part of

the draft integrated baseline. Technology Development Plan is baselined that identifies

technologies to be developed, heritage systems to be modified, alternative paths to be

pursued, fallback positions and corresponding performance descopes, milestones, metrics,

and key decision points. Initial Technology Readiness Assessment (TRA) is available.

KDP B: Transition from

Technology Development Plan and Technology Readiness Assessment (TRA) are updated.

Phase A to Phase B

Incorporated in the preliminary project plan.

KDP C: Transition from

Requires a TRAR demonstrating that all systems, subsystems, and components have

Phase B to Phase C/D

achieved a level of technological maturity with demonstrated evidence of qualification in a

relevant environment.

Source: NPR 7120.5.
