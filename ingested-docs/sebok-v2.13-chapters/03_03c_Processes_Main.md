 verification plans (contain the verification strategy)
 verification matrices (contain the verification action, submitted element, applied technique, step of execution, system block concerned, expected result, obtained result, etc.)
 verification procedures (describe verification actions to be performed, verification tools needed, the verification configuration, resources and personnel needed, the schedule, etc.)
 verification reports
 verification tools
 verified elements
 issue / non-conformance / trouble reports
 change requests to the design
This process utilizes the ontology elements displayed in Table 2 below.

Table 2. Main Ontology Elements as Handled within Verification. (SEBoK Original)
Element	Definition

Attributes (examples)

Verification Action A verification action describes what must be verified (the element as reference) on which element, the expected result, the verification technique to apply, on which level of decomposition.





Verification Procedure

Identifier, name, description

A verification procedure groups a set of verification actions performed together (as a scenario of tests) in a gin verification configuration.



Identifier, name, description, duration, unit of time

Verification Tool	A verification tool is a device or physical tool used to perform verification procedures (test bench, simulator, cap/stub, launcher, etc.).





Verification Configuration

Identifier, name, description

A verification configuration groups all physical elements (aggregates and verification tools) necessary to perform a verification procedure.

Identifier, name, description


Risk	An event having a probability of occurrence and a gravity degree on its consequence onto the system mission or on other characteristics (used for technical risk in engineering). A risk is the combination of vulnerability and of a danger or a threat.
Rationale	An argument that provides the justification for the selection of an engineering element.

Identifier, name, description (rationale, reasons for defining a verification action, a verification procedure, for using a verification tool, etc.)


Methods and Techniques
There are several verification techniques to check that an element or a system conforms to its design references or its specified requirements. These techniques are almost the same as those used for validation, though the application of the techniques may differ slightly. In particular, the purposes are different; verification is used to detect faults/defects, whereas validation is used to provide evidence for the satisfaction of (system and/or stakeholder) requirements. Table 3 below provides descriptions of some techniques for verification.

Table 3. Verification Techniques. (SEBoK Original)


Verification Technique

Description

Inspection	Technique based on visual or dimensional examination of an element; the verification relies on the human senses or uses simple methods of measurement and handling. Inspection is generally non-destructive, and typically includes the use of sight, hearing, smell, touch, and taste, simple physical manipulation, mechanical and electrical gauging, and measurement. No stimuli (tests) are necessary. The technique is used to check properties or characteristics best determined by observation (e.g. paint color, weight, documentation, listing of code, etc.).
Analysis	Technique based on analytical evidence obtained without any intervention on the submitted element using mathematical or probabilistic calculation, logical reasoning (including the theory of predicates), modeling and/or simulation under defined conditions to show theoretical compliance. Mainly used where testing to realistic conditions cannot be achieved or is not cost-effective.

Analogy or Similarity

Technique based on evidence of similar elements to the submitted element or on experience feedback. It is absolutely necessary to show by prediction that the context is invariant that the outcomes are transposable (models, investigations, experience feedback, etc.). Similarity can only be used if the submitted element is similar in design, manufacture, and use; equivalent or more stringent verification actions were used for the similar element, and the intended operational environment is identical to or less rigorous than the similar element.

Demonstration	Technique used to demonstrate correct operation of the submitted element against operational and observable characteristics without using physical measurements (no or minimal instrumentation or test equipment). Demonstration is sometimes called 'field testing'. It generally consists of a set of tests selected by the supplier to show that the element response to stimuli is suitable or to show that operators can perform their assigned tasks when using the element. Observations are made and compared with predetermined/expected responses. Demonstration may be appropriate when requirements or specification are given in statistical terms (e.g. mean time to repair, average power consumption, etc.).
Test	Technique performed onto the submitted element by which functional, measurable characteristics, operability, supportability, or performance capability is quantitatively verified when subjected to controlled conditions that are real or simulated. Testing often uses special test equipment or instrumentation to obtain accurate quantitative data to be analyzed.
Sampling	Technique based on verification of characteristics using samples. The number, tolerance, and other characteristics must be specified to be in agreement with the experience feedback.


Practical Considerations
Key pitfalls and good practices related to this topic are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing System Verification are provided in Table 4.

Table 4. Major Pitfalls with System Verification (SEBoK Original)
Pitfall	Description

Confusion between	Confusion between verification and validation causes developers to take the wrong reference/baseline to define verification and	verification and validation actions and/or to address the wrong level of granularity (detail level for verification, global validation	level for validation).
No verification strategy	One overlooks verification actions because it is impossible to check every characteristic or property of all system elements and of the system in any combination of operational conditions and scenarios. A strategy (justified selection of verification actions against risks) must be established.
Save or spend time	Skip verification activity to save time.

Use only testing	Use only testing as a verification technique. Testing requires checking products and services only when they are implemented. Consider other techniques earlier during design; analysis and inspections are cost effective and allow discovering early potential errors, faults, or failures.
Stop verifications when	Stopping the performance of verification actions when budget and/or time are consumed. Prefer using criteria such as funding is diminished	coverage rates to end verification activity.


Proven Practices
Some proven practices gathered from the references are provided in Table 5.

Table 5. Proven Practices with System Verification. (SEBoK Original)
Practice	Description

Start verifications	The earlier characteristics of an element are verified in the project, the easier the corrections are to do and the consequences early in the	on schedule and cost will be fewer.
development

Define criteria	Carrying out verification actions without limits generates a risk of drift for costs and deadlines. Modifying and verifying in a ending verifications  non-stop cycle until arriving at a perfect system is the best way to never supply the system. Thus, it is necessary to set limits
of cost, time, and a maximum number of modification loops back for each verification action type, ending criteria (percentages of success, error count detected, coverage rate obtained, etc.).
Involve design	Include the verification responsible in the designer team or include some designer onto the verification team. responsible with
verification


References
Works Cited
Buede, D.M. 2009. The Engineering Design of Systems: Models and Methods. 2nd ed. Hoboken, NJ, USA: John Wiley & Sons Inc.
INCOSE. 2012. INCOSE Systems Engineering Handbook, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
Lake, J. 1999. "V & V in Plain English." International Council on Systems Engineering (INCOSE) 9th Annual International Symposium, Brighton, UK, 6-10 June 1999.
NASA. 2007. Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), December 2007. NASA/SP-2007-6105.

Primary References
INCOSE. 2012. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
NASA. 2007. Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), December 2007. NASA/SP-2007-6105.

Additional References
Buede, D.M. 2009. The Engineering Design of Systems: Models and Methods, 2nd ed. Hoboken, NJ, USA: John Wiley & Sons Inc.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD). February 19, 2010.
ECSS. 2009. Systems Engineering General Requirements. Noordwijk, Netherlands: Requirements and Standards Division, European Cooperation for Space Standardization (ECSS), 6 March 2009. ECSS-E-ST-10C.
MITRE. 2011. "Verification and Validation." in Systems Engineering Guide. Accessed 11 March 2012 at [[1]].
SAE International. 1996. Certification Considerations for Highly-Integrated or Complex Aircraft Systems.
Warrendale, PA, USA: SAE International, ARP475.
SEI. 2007. "Measurement and Analysis Process Area" in Capability Maturity Model Integrated (CMMI) for Development, version 1.2. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).


Relevant Videos
 Systems Engineering-Test, Evaluation, and Validation [2]

References
[1] http://mitre.org/work/systems_engineering/guide/se_lifecycle_building_blocks/test_evaluation/verification_validation.html
[2] https://www.youtube.com/watch?v=pcrkmaAx_QA


System Transition

 Lead Authors:
 Scott Jackson and Brian Gallagher
-
As part of system deployment, on-site installation, check-out, integration, and testing must be carried out to ensure that the system is fit to be deployed into the field and/or put into an operational context. Transfer is the process that bridges the gap between qualification and use; it deals explicitly with the handoff from development to logistics, operations, maintenance, and support.

Definition & Purpose
There are many different approaches to transition or deployment, and many different views on what is included within transition. The SEBoK uses the ISO/IEC/IEEE 15288 definition of transition, as seen below (ISO/IEC/IEEE 15288 2015):
[The transition] process installs a verified system, together with relevant enabling systems, e.g., operating system, support system, operator training system, user training system, as defined in agreements. This process is used at each level in the system structure and in each stage to complete the criteria established for exiting the stage.
Thinking in a linear fashion, the system is transitioned into operation and then would be used and maintained in the operational environment. However, there are other views on transition. For example, the NASA Systems Engineering Handbook states that transition can include delivery for end-use as well as delivery of components for integration (NASA 2007). Using this view, transition is the mechanism for moving system components from implementation activities into integration activities. The NASA discussion of transition also implies that transition can include sustainment activities:
The act of delivery or moving of a product from the location where the product has been implemented or integrated, as well as verified and validated, to a customer.
Many systems are deployed using an iterative or evolutionary approach where operationally useful capabilities are developed and deployed incrementally. While these operationally useful capabilities are fully deployed and transitioned into operational use, transition of logistics, maintenance, and support may occur incrementally or be delayed until after the full system capability is delivered.


Process Approaches
Just as there are multiple views on the definition of transition and deployment, there are also several ways to divide the activities required for transition. For example, the NASA Systems Engineering Handbook definition of transition states: This act can include packaging, handling, storing, moving, transporting, installing, and sustainment activities (2007). However, the SEBoK includes the topic of sustainment as separate from transition; this is instead covered under the maintenance and logistics topics. The International Council on Systems Engineering (INCOSE) views the transition process as two-step: planning and performance. Though there are several processes for deployment and transition, most generally include the following activities:
 Develop a Deployment/Transition Strategy - Planning for transition activities would ideally begin early in the SE life cycle, though it is possible to conduct these activities concurrently with realization activities. Planning should generally include some consideration of the common lower-level activities of installation, checkout, integration, and testing. Such activities are crucial to demonstrate that the system and the interfaces with the operational environment can function as intended and meet the contractual system specifications. For these activities to be effectively managed and efficiently implemented, the criteria, responsibility, and procedures for carrying out these activities should be clearly established and agreed upon during the planning phase.
 Develop Plans for Transitioning Systems - or system capabilities into operational use and support. Transition plans for the system or incremental system capabilities should be consistent with the overall transition strategy and agreed to by relevant stakeholders. Planning for transition will often include establishing a strategy for support, which may include organic support infrastructures, contractor logistics support, or other sources (Bernard et al. 2005, 1-49). It can also include defining the levels of support to be established. The strategy is important because it drives most of the other transition planning activities, as well as product design considerations. Transition plans should include considerations for coordination with the following activities:
 Installation - Installation generally refers to the activities required to physically instate the system; this will likely include connecting interfaces to other systems such as electrical, computer, or security systems, and may include software interfaces as well. Installation planning should generally document the complexity of the system, the range of environmental conditions expected in the operational environment, any interface specifications, and human factors requirements such as safety. When real-world conditions require changes in the installation requirements, these should be documented and discussed with the relevant stakeholders.
 Integration - Though system integration activities will generally be performed prior to installation, there may be additional steps for integrating the system into its operational setting. Additionally, if the system is being delivered incrementally, there will likely be integration steps associated with the transition (for more information on integration, please see the System Realization knowledge area (KA)).
 Verification and Validation (V&V) - At this stage, V&V for physical, electrical, and mechanical checks may be performed in order to verify that the system has been appropriately installed. Acceptance tests conducted after delivery may become part of this process (for additional information on V&V, please see the System Realization KA). There are several types of acceptance tests which may be used:
 On-site Acceptance Test (OSAT) - This test includes any field acceptance testing and is performed only after the system has successfully been situated in the operational environment. It may consist of functional tests to demonstrate that the system is functioning and performing properly.
 Field Acceptance Test - This test includes flight and sea acceptance tests; it is performed, if applicable, only after the system has successfully passed the OSAT. The purpose of field testing is to demonstrate that the system meets the performance specifications called for in the system specifications in the actual operating environment.
 Operational Test and Evaluation (OT&E) - An OT&E consists of a test series designed to estimate the operational effectiveness of the system.


 Evaluate the readiness of the system to transition into operations - This is based upon the transition criteria identified in the transition plan. These criteria should support an objective evaluation of the system's readiness for transition. The integration, verification, and validation activities associated with transition may be used to gauge whether the system meets transition criteria.
 Analyze the results of transition activities throughout and any necessary actions - As a result of analysis, additional transition activities and actions may be required. The analysis may also identify areas for improvement in future transition activities.
Some common issues that require additional considerations and SE activities are the utilization or replacement of legacy systems. It is also common for an organization to continue testing into the early operational phase. The following activities support these circumstances:
 System Run-In - After the successful completion of the various acceptance tests, the system(s) will be handed over to the user or designated post-deployment support organization. The tested system(s) may have to be verified for a stated period (called the system run-in, normally for one to two years) for the adequacy of reliability and maintainability (R&M) and integrated logistics support (ILS) deliverables. R&M are vital system operational characteristics having a dominant impact upon the operational effectiveness, the economy of in-service maintenance support, and the life cycle cost (LCC).
 Phasing-In/Phasing-Out - The need for phasing-in will usually be identified during the system definition, when it is clear that the new system entails the replacement of an existing system(s) (for additional information, please see the System Definition KA). These activities should help to minimize disruption to operations and, at the same time, minimize the adverse effect on operational readiness. It is also important that the phasing-in of a new system and the phasing-out of an existing system occur in parallel with the systems activities of the system run-in to maximize resource utilization. Other aspects of phasing-in/phasing-out to be considered include:
 Proper planning for the phasing out of an existing system (if necessary).
 For multi-user or complex systems, phase-by-phase introduction of the system according to levels of command, formation hierarchy, etc.
 Minimum disruption to the current operations of the users.
 Establishment of a feedback system from users on problems encountered in operation, etc.
 Disposal process including handling of hazardous items, cost of disposal, approval etc.

Applicable Methods & Tools
A system may have to undergo reliability demonstration testing (RDT) to ensure that it meets its contractual R&M guarantees. RDT is conducted under actual field conditions, especially for large systems purchased in small quantity. During RDT, the system is operated in the field within stated test duration and all field data are systematically recorded. At the end of the test period, analysis of the RDT data is performed. Data analysis should facilitate determination of system reliability. One possible output of this analysis is shown in Figure 1 below.





References
Works Cited
Bernard, S., B. Gallagher, R. Bate, H. Wilson. 2005. CMMI(r) Acquisition Module (CMMI-AM), version 1.1. Pittsburg, PA, USA: Carnegie Mellon University (CMU)/Software Engineering Institute (SEI) CMU/SEI-2005-TR-011.
ISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE).ISO/IEC/IEEE 15288:2015.
NASA. 2007. Systems Engineering Handbook. Washington, D.C., USA8: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.

Primary References
INCOSE. 2011. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. Version 3.2.1. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.1.
ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015.
NASA. 2007. Systems Engineering Handbook. Washington, D.C., USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.


Additional References
None.

System Validation

 Lead Author:
 Alan Faisandier
 Contributing Author:
 Rick Adcock
-
System Validation is a set of actions used to check the compliance of any element (a system element, a system, a document, a service, a task, a system requirement, etc.) with its purpose and functions. These actions are planned and carried out throughout the life cycle of the system. Validation is a generic term that needs to be instantiated within the context it occurs. When understood as a process, validation is a transverse activity to every life cycle stage of the system. Particularly during the development cycle of the system, the validation process is performed in parallel with the system definition and system realization processes and applies to any activity and product resulting from this activity. The validation process is not limited to a phase at the end of system development, but generally occurs at the end of a set of life cycle tasks or activities, and always at the end of each milestone of a development project. It may be performed on an iterative basis on every produced engineering element during development and may begin with the validation of the expressed stakeholder needs and requirements. When the validation process is applied to the system when completely integrated, it is often called final validation. It is important to remember that while system validation is separate from verification, the activities are complementary and intended to be performed in conjunction.

Definition and Purpose
Validation is the confirmation, through the provision of objective evidence, that the requirements for a specific intended use or application have been fulfilled. With a note added in ISO 9000:2005: validation is the set of activities that ensure and provide confidence that a system is able to accomplish its intended use, goals, and objectives (i.e., meet stakeholder requirements) in the intended operational environment (ISO 2005).
The purpose of validation, as a generic action, is to establish the compliance of any activity output as compared to inputs of the activity. It is used to provide information and evidence that the transformation of inputs produced the expected and right result. Validation is based on tangible evidence; i.e., it is based on information whose veracity can be demonstrated by factual results obtained from techniques or methods such as inspection, measurement, test, analysis, calculation, etc. Thus, to validate a system (product, service, or enterprise) consists of demonstrating that it satisfies its system requirements and eventually the stakeholder's requirements depending on contractual practices. From a global standpoint, the purpose of validating a system is to acquire confidence in the system's ability to achieve its intended mission, or use, under specific operational conditions.


Principles
Concept of Validation Action
Why Validate?
The primary goal of systems engineering (SE) is to develop a solution that meets the needs and requirements of stakeholders. Validation is the process by which engineers ensure that the system will meet these needs and requirements.
A validation action is defined and then performed (see Figure 1, below).

A validation action applied to an engineering element includes the following:
 Identification of the element on which the validation action will be performed.
 Identification of the reference that defines the expected result of the validation action. Performing the validation action includes the following:
 Obtaining a result by performing the validation action onto the submitted element.
 Comparing the obtained result with the expected result.
 Deducing the degree of compliance of the element.
 Deciding on the acceptability of this compliance, because sometimes the result of the comparison may require a value judgment to decide whether to accept the obtained result as compared to the relevance of the context of use.
Note: If there is uncertainty about compliance, the cause could come from ambiguity in the requirements.


What to Validate?
Any engineering element can be validated using a specific reference for comparison, such as stakeholder requirements, system requirements, functions, system elements, documents, etc. Examples are provided in Table 1 below:

Table 1. Examples of Validated Items (SEBoK Original)
Items	Explanation for Validation

Document	To validate a document is to make sure its content is compliant with the inputs of the task that produced the document.

Stakeholder	To validate a stakeholder requirement is to make sure its content is justified and relevant to stakeholders' expectations, Requirement and System complete and expressed in the language of the customer or end user. To validate a system requirement is to make sure Requirement	its content translates correctly and/or accurately a stakeholder requirement to the language of the supplier.
Design	To validate the design of a system (logical and physical architectures) is to demonstrate that it satisfies its system requirements.
System	To validate a system (product, service, or enterprise) is to demonstrate that the product, service, or enterprise satisfies its system requirements and/or its stakeholder requirements.
Activity	To validate an activity or a task is to make sure its outputs are compliant with its inputs.

Process	To validate a process is to make sure its outcomes are compliant with its purpose.


Validation versus Verification
The Verification versus Validation section of the System Verification article gives fundamental differences between the two concepts and associated processes. The Table 2 provides information to help understand these differences.

Table 2. Verification and Validation Differences (may vary with context). (SEBoK Original)
Point of View	Verification	Validation

Purpose of the Activity	Detect, identify faults/defects (supplier	Acquire confidence (end user oriented) oriented)
Idea behind the Term	Based on truth (objective/unbiased)	Based on value judgement (more subjective) Level of Concern	Detail and local	Global in the context of use
Vision	Glass box (how it runs inside)	Black box (application of inputs provides the expected effect)
Basic Method	Fine-tooth comb	Traceability matrix

System (Product, Service,	"Done Right" (respects the state of the art);	"Does Right" (produces the expected effect); focus on Enterprise)	focus on (physical) characteristics	services, functions
Baseline Reference for Comparison System design	System requirements (and stakeholder requirements) (Product, Service, Enterprise)
Order of Performance	First	Second

Organization of Activity	Verification actions are defined and/or	Validation actions are defined and/or performed by experts performed by development/designer team	and external members to development/designer team


Validation, Final Validation, and Operational Validation
System validation concerns the global system seen as a whole and is based on the totality of requirements (system requirements, stakeholders' requirements, etc.), but it is obtained gradually throughout the development stage in three non-exclusive ways:
 accumulating the results of verification actions and validation actions provided by the application of corresponding processes to every engineering element;
 performing final validation actions to the complete, integrated system in an industrial environment (as close as possible to the operational environment); and
 performing operational validation actions on the complete system in its operational environment (context of use).

Verification and Validation Level per Level
It is impossible to carry out only a single global validation on a complete, integrated complex system. The sources of faults/defects could be important, and it would be impossible to determine the causes of non-conformance manifested during this global check. Generally, the system-of-interest (SoI) has been decomposed during design in a set of layers of systems. Thus, every system and system element is verified, validated, and possibly corrected before being integrated into the parent system of the higher level, as shown in Figure 2.

As necessary, systems and system elements are partially integrated in subsets in order to limit the number of properties to be verified within a single step. For each level, it is necessary to perform a set of final validation actions to ensure that features stated at preceding levels are not damaged. Moreover, a compliant result obtained in a given environment can turn into a non-compliant result if the environment changes. Thus, as long as the system is not completely integrated and/or doesn't operate in the real operational environment, no result should be regarded as definitive.


Verification Actions and Validation Actions Inside and Transverse to Levels
Inside each level of system decomposition, verification actions and validation actions are performed during system definition and system realization. This is represented in Figure 3 for the upper levels, and in Figure 4 for the lower levels. Stakeholder requirements definition and operational validation make the link between the two levels of the system decomposition.

Operational validation of system element requirements and products makes the link between the two lower levels of the decomposition. See Figure 4 below.




Note: The last level of system decomposition is dedicated to the realization of system elements and the vocabulary and number of activities may be different from what is seen in Figure 4.

Verification and Validation Strategy
The difference between verification and validation is especially useful for elaborating on the integration strategy, the verification strategy, and the validation strategy. In fact, the efficiency of system realization is gained by optimizing the three strategies together to form what is often called the verification and validation strategy. This optimization consists of defining and performing the minimum number of verification and validation actions but detecting the maximum number of errors/faults/defects and achieving the maximum level of confidence in the system. The optimization takes into account the risks potentially generated if some verification actions or validation actions are excluded.

Process Approach
Purpose and Principles of the Approach
The purpose of the validation process is to provide objective evidence that the services provided by a system in use comply with stakeholder requirements and achieve its intended use in its intended operational environment (ISO/IEC/IEEE 15288 2015). The validation process performs a comparative assessment and confirms that the stakeholder requirements are correctly defined. Where variance is identified, it is recorded to guide future corrective actions. System validation is ratified by stakeholders (ISO/IEC/IEEE 15288 2015).


The validation process demonstrates that the realized end product satisfies its stakeholders' (customers' or other interested parties') expectations within the intended operational environments with validation performed by anticipated operators and/or users (NASA 2007, 1-360). Each system element, system, and the complete SoI are compared against their own applicable requirements (system requirements and stakeholder requirements). This means that the validation process is instantiated as many times as necessary during the global development of the system.
In order to ensure that validation is feasible, the implementation of requirements must be verifiable onto a defined element. It is essential to ensure that requirements are properly written, i.e., quantifiable, measurable, unambiguous, etc. In addition, verification/validation requirements are often written in conjunction with stakeholder and system requirements and provide a method for demonstrating the implementation of each system requirement or stakeholder requirement.
Generic inputs are references of requirements applicable to the submitted element. If the element is a system, inputs are system requirements and stakeholder requirements.
Generic outputs are the validation plan that includes validation strategy, selected validation actions, validation procedures, validation tools, validated elements or systems, validation reports, issue/trouble reports, and change requests on requirements or on the system.

Activities of the Process
Major activities and tasks performed during this process include the following:
 Establish a validation strategy (often drafted in a validation plan). This activity is carried out concurrently to system definition activities:
 Identify the validation scope that is represented by (system and/or stakeholder) requirements; normally, every requirement should be checked as the number of validation actions can be high.
 Identify constraints according to their origin (technical feasibility, management constraints as cost, time, availability of validation means or qualified personnel, and contractual constraints that are critical to the mission) that limit or increase potential validation actions.
 Define appropriate verification/validation techniques to be applied, such as inspection, analysis, simulation, review, testing, etc., depending on the best step of the project to perform every validation action according to constraints.
 Consider a trade-off of what should be validated (scope) while taking into account all constraints or limits and deduce what can be validated objectively; selection of validation actions would be made according to the type of system, objectives of the project, acceptable risks, and constraints.
 Optimize the validation strategy to define the most appropriate validation technique for every validation action, define necessary validation means (tools, test-benches, personnel, location, and facilities) according to the selected validation technique, schedule the execution of validation actions in the project steps or milestones, and define the configuration of elements submitted to validation actions (this is primarily about testing on physical elements).
 Perform validation actions, including the following tasks:
 Detail each validation action. In particular, note the expected results, the validation technique to be applied, and the corresponding means necessary (equipment, resources, and qualified personnel).
 Acquire validation means used during the system definition steps (qualified personnel, modeling tools, mocks-up, simulators, and facilities), then those means used during integration and final and operational steps (qualified personnel, validation tools, measuring equipment, facilities, validation procedures, etc.).
 Carry out validation procedures at the right time, in the expected environment, with the expected means, tools, and techniques.


 Capture and record results obtained when performing validation actions using validation procedures and means.
 Analyze the obtained results and compare them to the expected results. Decide if they comply acceptably. Record whether the decision and status are compliant or not, and generate validation reports and potential issue/trouble reports, as well as change requests on (system or stakeholder) requirements as necessary.
 Control the process using following tasks:
 Update the validation plan according to the progress of the project; in particular, planned validation actions can be redefined because of unexpected events.
 Coordinate validation activities with the project manager regarding the schedule, acquisition of means, personnel, and resources. Coordinate with the designers for issue/trouble/non-conformance reports. Coordinate with the configuration manager for versions of physical elements, design baselines, etc.

Artifacts and Ontology Elements
This process may create several artifacts, such as:
 a validation plan (contains the validation strategy)
 a validation matrix (contains for each validation action, submitted element, applied technique, step of execution, system block concerned, expected result, obtained result, etc.)
 validation procedures (describe the validation actions to be performed, the validation tools needed, the validation configuration, resources, personnel, schedule, etc.)
 validation reports
 validation tools
 the validated element
 issue, non-conformance, and trouble reports
 change requests on requirements, products, services, and enterprises This process utilizes the ontology elements of Table 3.
Table 3. Main Ontology Elements as Handled within Validation. (SEBoK Original)
Element	Definition

Attributes (examples)

Validation Action	A validation action describes what must be validated (the element as reference), on which element, the expected result, the verification technique to apply, on which level of decomposition.





Validation Procedure

Identifier, name, description

A validation procedure groups a set of validation actions performed together (as a scenario of tests) in a given validation configuration.



Identifier, name, description, duration, unit of time

Validation Tool	A validation tool is a device or physical tool used to perform validation procedures (test bench, simulator, cap/stub, launcher, etc.).

Identifier, name, description

Validation	A validation configuration groups the physical elements necessary to perform a validation procedure.
Configuration
Identifier, name, description


Risk	An event having a probability of occurrence and a gravity degree on its consequence onto the system mission or on other characteristics (used for technical risk engineering).

Identifier, name, description, status

Rationale	An argument that provides the justification for the selection of an engineering element.

Identifier, name, description (rationale, reasons for defining a validation action, a validation procedure, for using a validation tool, etc.)


Methods and Techniques
The validation techniques are the same as those used for verification, but their purposes are different; verification is used to detect faults/defects, whereas validation is used to prove the satisfaction of (system and/or stakeholder) requirements.
The validation traceability matrix is introduced in the stakeholder requirements definition topic. It may also be extended and used to record data, such as a validation actions list, selected validation techniques to validate implementation of every engineering element ( stakeholder and system requirements in particular), expected results, and obtained results when validation actions have been performed. The use of such a matrix enables the development team to ensure that selected stakeholder and system requirements have been checked, or to evaluate the percentage of validation actions completed.

Practical Considerations
Key pitfalls and good practices related to system validation are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing system validation are provided in Table 4.

Table 4. Major Pitfalls with System Validation. (SEBoK Original)
Pitfall	Description

Start validation at the	A common mistake is to wait until the system has been entirely integrated and tested (design is qualified) to perform any end of the project	sort of validation. Validation should occur as early as possible in the [product] life cycle (Martin 1997).
Use only testing	Use only testing as a validation technique. Testing requires checking products and services only when they are implemented. Consider other techniques earlier during design; analysis and inspections are cost effective and allow discovering early potential errors, faults, or failures.
Stop validation when	Stop the performance of validation actions when budget and/or time are consumed. Prefer using criteria such as coverage funding is diminished	rates to end validation activity.


Proven Practices
Some good practices gathered from the references are provided in Table 5.


Table 5. Proven Practices with System Validation. (SEBoK Original)
Practice	Description

Start Validation  It is recommended to start the drafting of the validation plan as soon as the first requirements applicable to the system are known.
Plan Early	If the writer of the requirements immediately puts the question to know how to validate whether the future system will answer the requirements, it is possible to:
 detect the unverifiable requirements
 anticipate, estimate cost, and start the design of validation means (as needed) such as test-benches, simulators
 avoid cost overruns and schedule slippages

Verifiable	According to Buede, a requirement is verifiable if a "finite, cost-effective process has been defined to check that the requirement Requirements	has been attained." (Buede 2009) Generally, this means that each requirement should be quantitative, measurable, unambiguous,
understandable, and testable. It is generally much easier and more cost-effective to ensure that requirements meet these criteria while they are being written. Requirement adjustments made after implementation and/or integration are generally much more costly and may have wide-reaching redesign implications. There are several resources which provide guidance on creating appropriate requirements - see the system definition knowledge area, stakeholder requirements, and system requirements topics for additional information.
Document	It is important to document both the validation actions performed and the results obtained. This provides accountability regarding Validation	the extent to which system, system elements, and subsystems fulfill system requirements and stakeholders' requirements. These Actions	data can be used to investigate why the system, system elements, or subsystems do not match the requirements and to detect
potential faults/defects. When requirements are met, these data may be reported to organization parties. For example, in a safety critical system, it may be necessary to report the results of safety demonstration to a certification organization. Validation results may be reported to the acquirer for contractual aspects or to internal company for business purpose.
Involve Users	Validation will often involve going back directly to the users to have them perform some sort of acceptance test under their own with Validation local conditions.
Involve	Often the end users and other relevant stakeholders are involved in the validation process.

The following are elements that should be considered when practicing any of the activities discussed as a part of system realization:
 Confusing verification and validation is a common issue. Validation demonstrates that the product, service, and/or enterprise as provided, fulfills its intended use, whereas verification addresses whether a local work product properly reflects its specified requirements. Validation actions use the same techniques as the verification actions (e.g., test, analysis, inspection, demonstration, or simulation).
 State who the witnesses will be (for the purpose of collecting the evidence of success), what general steps will be followed, and what special resources are needed, such as instrumentation, special test equipment or facilities, simulators, specific data gathering, or rigorous analysis of demonstration results.
 Identify the test facility, test equipment, any unique resource needs and environmental conditions, required qualifications and test personnel, general steps that will be followed, specific data to be collected, criteria for repeatability of collected data, and methods for analyzing the results.


References
Works Cited
Buede, D. M. 2009. The engineering design of systems: Models and methods. 2nd ed. Hoboken, NJ: John Wiley & Sons Inc.
INCOSE. 2012. INCOSE Systems Engineering Handbook, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
NASA. 2007. Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105, December 2007.

Primary References
INCOSE. 2012. Systems Engineering Handbook, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015.Systems and software engineering - system life cycle processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC 15288:2015.
NASA. 2007. Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105, December 2007.

Additional References
Buede, D.M. 2009. The engineering design of systems: Models and methods. 2nd ed. Hoboken, NJ: John Wiley & Sons Inc.
DAU. February 19, 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense.
ECSS. 2009. Systems engineering general requirements. Noordwijk, Netherlands: Requirements and Standards Division, European Cooperation for Space Standardization (ECSS), ECSS-E-ST-10C. 6 March 2009.
MITRE. 2011. "Verification and Validation." Systems Engineering Guide. Accessed 11 March 2012 at [[1]].
SAE International. 1996. Certification considerations for highly-integrated or complex aircraft systems. Warrendale, PA, USA: SAE International, ARP475.
SEI. 2007. Capability maturity model integrated (CMMI) for development, version 1.2, measurement and analysis process area. Pittsburg, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).


System Operation

 Lead Authors:
 Scott Jackson and Brian Gallagher
 Contributing Author:
 Leopoldo deCardenas
-
The role of systems engineering (SE) during the operation of a system consists of ensuring that the system maintains key mission and business functions and is operationally effective. The systems engineer is one of the stakeholders who ensures that maintenance actions and other major changes are performed according to the long-term vision of the system. Both the maintenance actions and any implemented changes must meet the evolving needs of owning and operating stakeholders consistent with the documented and approved architecture. SE considerations will also include the eventual decommissioning or disposal of the system so that the disposal occurs according to disposal/retirement plans. Those plans must account for and be compliant with relevant laws and regulations (for additional information on disposal or retirement, please see the Product and Service Life Management knowledge area (KA)). When the system-of-interest (SoI) replaces an existing or legacy system, it may be necessary to manage the migration between systems such that stakeholders do not experience a breakdown in services (INCOSE 2012).

Definition & Purpose
This process assigns personnel to operate the system and monitors the services and operator-system performance. In order to sustain services, it identifies and analyzes operational problems in relation to agreements, stakeholder requirements, and organizational constraints (ISO/IEC/IEEE 2015).
The concept of operations (ConOps) establishes the foundation for initial design specifications according to the long-term vision. It is also possible that pre-planned program improvements (P3I) had been generated based on expected evolving requirements. Throughout the systems life cycle, the operation of the system requires the systems engineer to be an active participant in reviews, change management and integrated master schedule activities to ensure the system operations continue to meet the evolving needs of stakeholders, and are consistent with the architecture through the eventual decommissioning or disposal of the system. In the event of decommissioning, a systems engineer must ensure disposal/retirement plans are compliant with relevant laws and regulations (for additional information on disposal or retirement, see the Product and Service Life Management KA).
Two additional areas are of interest to the systems engineer during system operation require special attention. First, it may be determined that a system is at the end of its life cycle, but the cost of replacing the system with a completely new design is too expensive. In this case, there will be intense engineering activities for service life extension program (SLEP). The SLEP solution will take into account obsolescence issues, diminishing manufacturing sources and material shortages (DMSMS), and changes in ConOps. Secondly, in the event that a new SoI is designed and produced as a complete replacement for an existing or legacy system, it will be necessary to manage the migration between systems such that stakeholders do not experience a breakdown in services (INCOSE 2012).

Process Approaches
During the operational phase, SE activities ensure the system maintains certain operational attributes and usefulness throughout its expected life span. Maintaining operational effectiveness consists of evaluating certain operationally relevant attributes and trends, taking actions to prevent degradation of performance, evolving the system to meet changing mission or business needs (see the Product and Service Life Management KA), and eventually decommissioning the system and disposing of its components. During operation, data would be collected to evaluate the system and determine if changes should be made. It is important to include the process for data collection during


operations when considering design and ConOps. In some cases, data may be collected by sensors and reported autonomously. In other cases, operators will identify and report on performance during operations. The systems engineer needs to understand how all data will be collected and presented for further analysis. The systems engineer will be involved in analysis of this data in several areas, including the following:
 Updating training and development of new training as required for operational and support personnel. Training is generally developed early with system design and production and executed during integration and operations. Determination of training updates or changes will be based on evaluation of the operational and support personnel.
 Evaluation of operational effectiveness. Early in the planning phases of a new system or capability, measures of operational effectiveness are established based on mission and business goals. These measures are important during system operation. These attributes are unique for each system and represent characteristics describing the usefulness of the system as defined and agreed to by system stakeholders. Systems engineers monitor and analyze these measurements and recommend actions.
 Failure reporting and corrective actions (FRACA) activities will involve the collection and analysis of data during operations. FRACA data will provide trends involving failures that may require design or component changes. Some failures may also result in safety issues requiring operational modifications until the offending elements under analysis can be corrected. If components or systems must be returned to maintenance facilities for corrective repairs, there will be operational and business impacts due to increased unavailability and unplanned transportation cost.

Applicable Methods & Tools
Operations manuals generally provide operators the steps and activities required to run the system.

Training and Certification
Adequate training must be provided for the operators who are required to operate the system. There are many objectives of training:
 Provide initial training for all operators in order to equip them with the skill and knowledge to operate the system. Ideally, this process will begin prior to system transition and will facilitate delivery of the system. It is important to define the certification standards and required training materials up front (for more information on material supply, please see Logistics).
 Provide continuation training to ensure currency of knowledge.
 Monitor the qualification/certification of the operators to ensure that all personnel operating the system meet the minimum skill requirements and that their currency remains valid.
 Monitor and evaluate the job performance to determine the adequacy of the training program.

Practical Considerations
The operation process sustains system services by assigning trained personnel to operate the system, as well as by monitoring operator-system performance and monitoring the system performance. In order to sustain services, the operation process identifies and analyzes operational problems in relation to agreements, stakeholder needs and requirements, and organizational constraints. When the system replaces an existing system, it may be necessary to manage the migration between systems such that persistent stakeholders do not experience a breakdown in services.
Results of a successful implementation of the operation process include:
 Definition and refinement of an operation strategy along the way
 Delivery of services that meet stakeholder requirements
 Satisfactory completion of approved, corrective action requests
 Continued stakeholder satisfaction


Outputs of the operation process include:
 Operational strategy, including staffing and sustainment of enabling systems and materials
 System performance reports (statistics, usage data, and operational cost data)
 System trouble/anomaly reports with recommendations for appropriate action
 Operational availability constraints to influence future design and specification of similar systems or reused system elements
Activities of the operation process include:
 Providing operator training to sustain a pool of operators
 Tracking system performance and accounting for operational availability
 Performing operational analysis
 Managing operational support logistics
 Documenting system status and actions taken
 Reporting malfunctions and recommendations for improvement

References
Works Cited
INCOSE. 2012. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation (ISO)/International Electrotechnical Commissions (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015.

Primary References
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th Edition. Englewood Cliffs, NJ, USA: Prentice Hall.
Institute of Engineers Singapore. 2009. Systems Engineering Body of Knowledge. Provisional version 2.0. Singapore: Institute of Engineers Singapore.
INCOSE. 2012. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation (ISO)/International Electrotechnical Commissions (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015.

Additional References
None.




Knowledge Area: System Maintenance

System Maintenance

Contents of this Knowledge Area
 Logistics (Scott Jackson and John Snoderly) (Garry Roedler)
 Service Life Management (William Stiffler)
 Service Life Extension (William Stiffler) (Brian Wells)
 Capability Updates, Upgrades, and Modernization (William Stiffler) (Brian Wells)
 System Disposal and Retirement (Brian Wells)
 Lead Authors:
 Scott Jackson and Brian Gallagher
 Contributing Author:
 David Dorgan
-
System Maintenance planning begins early in the acquisition process with development of a maintenance concept. Maintenance planning is conducted to evolve and establish requirements and tasks to be accomplished for achieving, restoring, and maintaining operational capability for the life of the system. For a system to be sustained throughout its system life cycle, the maintenance process has to be executed concurrently with the operations process (ISO/IEC/IEEE 15288 2015, Clause 6.4.9).

Topics
Each part of the SEBoK is divided into knowledge areas (KAs), which are groupings of information with a related theme. The KAs in turn are divided into topics. This KA contains the following topics:
 Logistics
 Service Life Management
 Service Life Extension
 Capability Updates, Upgrades, and Modernization
 System Disposal and Retirement
See the article Matrix of Implementation Examples for a mapping of case studies and vignettes included in Part 7 to topics covered in Part 3.

Overview
The initial requirements for maintenance have to be defined during the stakeholder needs definition process (Clause 6.4.1) (ISO/IEC/IEEE 15288 2015) and continue to evolve during the development and operation of the system. Considerations include:
 Maximizing system availability to meet the operational requirements. This has to take into account the designed-in reliability and maintainability of the system and resources available.
 Preserving system operating potential through proper planning of system scheduled maintenance. This requires a reliability-centered maintenance strategy that incorporates preventive maintenance in order to preempt failures, thereby extending the mean time between corrective maintenance, as well as enhancing the availability of the


system.
 Segmenting maintenance activities for potential outsourcing of non-critical activities to approved maintenance subcontractors as to optimize scarce technical manpower resources and maintenance/repair turn-around times.
 Harnessing IT technology for maintenance management. This involves rigorous and systematic capturing and tracking of operating and maintenance activities to facilitate analysis and planning.
Maintenance management is concerned with the development and review of maintenance plans, as well as securing and coordinating resources, such as budget, service parts provisioning, and management of supporting tasks (e.g., contract administration, engineering support, and quality assurance). Maintenance planning relies on level of repair analysis (LORA) as a function of the system acquisition process. Initial planning addresses actions and support necessary to ensure a minimum life cycle cost (LCC).

Process Approaches
The purpose of the maintenance process is to sustain the capability of a system to provide a service. This process monitors the system's capability to deliver services, records problems for analysis, takes corrective, adaptive, perfective, and preventive actions, and confirms restored capability. As a result of the successful implementation of the maintenance process:
 a maintenance strategy is developed
 maintenance constraints are provided as inputs to requirements
 replacement system elements are made available
 services meeting stakeholder requirements are sustained
 the need for corrective design changes is reported
 failure and lifetime data are recorded
The project should implement the following activities and tasks in accordance with applicable organization policies and procedures with respect to the maintenance process:
 scheduled servicing, such as daily inspection/checks, servicing, and cleaning
 unscheduled servicing (carrying out fault detection and isolation to the faulty replaceable unit and replacement of the failed unit)
 re-configuration of the system for different roles or functions
 scheduled servicing (higher level scheduled servicing but below depot level)
 unscheduled servicing (carrying out more complicated fault isolation to the faulty replaceable unit and replacement of the failed unit)
 minor modifications
 minor damage repairs
 major scheduled servicing (e.g., overhaul and corrosion treatment)
 major repairs (beyond normal removal and replacement tasks)
The maintenance plan specifies the scheduled servicing tasks and intervals (preventive maintenance) and the unscheduled servicing tasks (adaptive or corrective maintenance). Tasks in the maintenance plan are allocated to the various maintenance agencies. A maintenance allocation chart is developed to tag the maintenance tasks to the appropriate maintenance agencies. These include: in-service or in-house work centers, approved contractors, affiliated maintenance or repair facilities, original equipment manufacturer (OEMs), etc. The maintenance plan also establishes the requirements for the support resources.
Related activities such as resource planning, budgeting, performance monitoring, upgrades, longer term supportability, and sustenance also need to be managed. These activities are planned, managed, and executed over a longer time horizon and they concern the well-being of the system over the entire life cycle.


Proper maintenance of the system (including maintenance-free system designs) relies very much on the availability of support resources, such as support and test equipment (STE), technical data and documentation, personnel, spares, and facilities. These have to be factored in during the acquisition agreement process.

Training and Certification
Adequate training must be provided for the technical personnel maintaining the system. While initial training may have been provided during the deployment phase, additional personnel may need to be trained to cope with the increased number of systems being fielded, as well as to cater to staff turnover. Timely updates to training materials and trained personnel may be required as part of system upgrades and evolution. It is important to define the certification standards and contract for the training materials as part of the supply agreement.

Practical Considerations
The organization responsible for maintaining the system should have clear thresholds established to determine whether a change requested by end users, changes to correct latent defects, or changes required to fulfill the evolving mission are within the scope of a maintenance change or require a more formal project to step through the entire systems engineering life-cycle. Evaluation criteria to make such a decision could include cost, schedule, risk, or criticality characteristics.

References
Works Cited
ISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes.Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015.

Primary References
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th Edition. Upper Saddle River, NJ, USA: Prentice Hall.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense.
INCOSE. 2012. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. Version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
Institute of Engineers Singapore. 2009. Systems Engineering Body of Knowledge, Provisional version 2.0. Singapore: Institute of Engineers Singapore.
IISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers (IEEE).ISO/IEC/IEEE 15288:2015.


Additional References
None.

Logistics

 Lead Authors:
 Scott Jackson and John Snoderly
 Contributing Author:
 Garry Roedler
-
There are several definitions for logistics within systems engineering (SE) and the definition used will determine what activities are considered part of logistics. The SEBoK defines logistics as the science of planning and implementing the acquisition and use of the resources necessary to sustain the operation of a system.

Overview
The ability to sustain the operation of a system is determined by the inherent supportability of the system (a function of design) and the processes used to sustain the functions and capabilities of the system in the context of the end user. Figure 1, below, shows a Defense Acquisition University (DAU) model of the SE aspects for consideration in logistics and logistics planning (DAU 2010).



Sustainment Planning
The focus of sustainment planning is to influence the inherent supportability of the system and to plan the sustainment capabilities and processes that will be used to sustain system operations.

Influence Inherent Supportability (Operational Suitability)
Sustainment influence requires an understanding of the concept of operations (ConOps), system missions, mission profiles, and system capabilities to understand the rationale behind functional and performance priorities. Understanding the rationale paves the way for decisions about necessary tradeoffs between system performance, availability, and life cycle cost (LCC), with impact on the cost effectiveness of system operation, maintenance, and logistics support. There is no single list of sustainment considerations or specific way of grouping them as they are highly inter-related. They include: compatibility, interoperability, transportability, reliability, maintainability, manpower, human factors, safety, natural environment effects (including occupational health, habitability; see Environmental Engineering); diagnostics & prognostics (including real-time maintenance data collection), and corrosion protection & mitigation. The following are key design considerations:
 Architecture Considerations - The focus on openness, modularity, scalability, and upgradeability is critical to implementing an incremental acquisition strategy. In addition, the architecture attributes that expand system flexibility and affordability can pay dividends later when obsolescence and end-of-life issues are resolved through a concerted technology refreshment strategy. Trade-offs are often required relative to the extent each attribute is used.
 Reliability Considerations: - Reliability is critical because it contributes to a system's effectiveness as well as its suitability in terms of logistics burden and the cost to fix failures. For each system, there is a level of basic reliability that must be achieved for the system to be considered useful. Reliability is also one of the most critical elements in determining the logistics infrastructure and footprint. Consequently, system reliability should be a primary focus during design (along with system technical performance, functions, and capabilities). The primary objective is to achieve the necessary probability of operational success and minimize the risk of failure within defined availability, cost, schedule, weight, power, and volume constraints. While performing such analyses, trade-offs should be conducted and dependencies should be explored with system maintainability and integrated with the supportability analysis that addresses support event frequency (i.e. reliability), event duration, and event cost. Such a focus will play a significant role in minimizing the necessary logistics footprint, while maximizing system availability.
 Maintainability Considerations - The design emphasis on maintainability is to reduce the maintenance burden and supply chain by reducing the time, personnel, tools, test equipment, training, facilities and cost to maintain the system. Maintainability engineering includes the activities, methods, and practices used to design minimal system maintenance requirements (designing out unnecessary and inefficient processes) and associated costs for preventive and corrective maintenance as well as servicing or calibration activities. Maintainability should be a designed-in capability and not an add-on option because good maintenance procedures cannot overcome poor system and equipment maintainability design. The primary objective is to reduce the time it takes for a properly trained maintainer to detect and isolate the failure (coverage and efficiency) and affect repair. Intrinsic factors contributing to maintainability are:
 Modularity - Packaging of components such that they can be repaired via remove and replace action vs. on-board repair. Care should be taken not to over modularize, and trade-offs to evaluate replacement, transportation, and repair costs should be accomplished to determine the most cost-effective approach.
 Interoperability - The compatibility of components with standard interface protocols to facilitate rapid repair and enhancement/upgrade through black box technology using common interfaces. Physical interfaces should be designed so that mating between components can only happen correctly.


 Physical accessibility - The designed-in structural assurance that components which require more frequent monitoring, checkout, and maintenance can be easily accessed. This is especially important in low observable platforms. Maintenance points should be directly visible and accessible to maintainers, including access for corrosion inspection and mitigation.
 Designs that require minimum preventative maintenance including corrosion prevention and mitigation. Emphasis should be on balancing the maintenance requirement over the life cycle with minimal user workload.
 Embedded training and testing when it is determined to be the optimal solution from a total ownership cost (TOC) and materiel availability perspective.
 Human Systems Integration (HSI) to optimize total system performance and minimize life-cycle costs by designing systems and incorporating technologies that (a) require minimal manpower, (b) provide effective training, (c) can be operated and maintained by users, (d) are suitable (habitable and safe with minimal environmental and occupational health hazards), and (e) are survivable (for both the user and the equipment).
 Support Considerations - Support features cannot be easily added-on after the design is established. Consequently, supportability should be a high priority early in the program's planning and integral to the system design and development process. Support features cut across reliability, maintainability, and the supply chain to facilitate detection, isolation, and timely repair/replacement of system anomalies. These include features for servicing and other activities necessary for operation and support including resources that contribute to the overall support of the system. Typical supportability features include diagnostics, prognostics (see CBM+ Guidebook), calibration requirements, many HSI issues (e.g. training, safety, HFE, occupational health, etc.), skill levels, documentation, maintenance data collection, compatibility, interoperability, transportability, handling (e.g., lift/hard/tie down points, etc.), packing requirements, facility requirements, accessibility, and other factors that contribute to an optimum environment for sustaining an operational system.

Planning Sustainment Processes
Process efficiency reflects how well the system can be produced, operated, serviced (including fueling) and maintained. It reflects the degree to which the logistics processes (including the supply chain), infrastructure, and footprint have been balanced to provide an agile, deployable, and operationally effective system.
Achieving process efficiency requires early and continuing emphasis on the various logistics support processes along with the design considerations. The continued emphasis is important because processes present opportunities for improving operational effectiveness even after the design-in window has passed via lean-six sigma, supply chain optimization, or other continuous process improvement (CPI) techniques.

Sustainment Analysis (Product Support Package)
The product support package documents the output of supportability analysis and includes details related to the following twelve elements (links below are to excerpts from (NATO RTO 2001):
 Product/information technology (IT) system/medical system support management (integrated life cycle sustainment planning)
 product/IT system/medical system support strategies
 life cycle sustainment planning
 requirements management
 total ownership costs (TOC)/life cycle costs (LCC) planning & management
 Integration and management of product support activities
 configuration management
 production & distribution
 energy, environmental, safety and health (EESH) management
 policies & guidance


 risk management
 Design Interface [1]
 reliability
 maintainability
 supportability
 affordability
 configuration management
 safety requirements
 environmental and hazardous materials (HAZMAT) requirements
 human systems integration (HSI)
 calibration
 anti-tamper
 habitability
 disposal
 legal requirements
 Sustainment Engineering
 failure reporting, analysis, and corrective action system (FRACAS)
 value engineering
 diminishing manufacturing sources and material shortages (DMSMS)
 Supply Support (materiel planning) [2]
 Maintenance Planning [3]
 reliability centered maintenance (RCM)
 maintenance concepts
 levels of maintenance (level of repair analysis)
 condition-based maintenance
 prognostics & health management
 Support Equipment [4]
 Technical Data [5]
 Manpower & Personnel [6]
 Training & Training Support [7]
 Facilities & Infrastructure [8]
 Packaging, Handling, Storage, & Transportation [9]
 Computer Resources [10]


Sustainment Implementation
Once the system becomes operational, the results of sustainment planning efforts need to be implemented. SE supports the execution of the twelve integrated product support elements of a sustainment program that strives to ensure the system meets operational performance requirements in the most cost-effective manner over its total remaining life cycle, as illustrated in Figure 2.

Once a system is put into use, SE is often required to correct problems that degrade continued use, and/or to add new capabilities to improve product performance in the current or a new environment. In the context of integrated product support, these SE activities correspond to the integrated product support (IPS) element Sustaining Engineering. Changes made to fielded systems to correct problems or increase performance should include any necessary adjustments to the IPS elements, and should consider the interrelationships and integration of the elements to maintain the effectiveness of the system's support strategy.
The degree of change required to the product support elements varies with the severity of the problem. Minor problems may require a simple adjustment to a maintenance procedure, a change of supplier, a training course modification or a change to a technical manual. In contrast, problems that require system or component redesign may require engineering change proposals and approvals, IPS element trade studies, business case analysis, and updates to the product support strategy. The focus is to correct problems that degrade continued use, regardless of the degree of severity.
Evolutionary systems provide a strategy for acquisition of mature technology; the system delivers capabilities incrementally, planning for future capability enhancements. A system of systems (SoS) perspective is required for these systems to synchronize the primary and sustainment systems.


For more information refer to: An Enterprise Framework for Operationally Effective System of Systems Design
(Bobinis and Herald 2012.).

References
Works Cited
Bobinis, J. and T. Herald. 2012. "An enterprise framework for operationally effective system of systems design." Journal of Enterprise Architecture. Vol. 8, no. 2, May 2012. Available at: https:// www.mendling.com/publications/JEA12-2.pdf.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD).
NATO RTO. 2001. Logistics Test and Evaluation in Flight Test. Flight Test Techniques Series - Volume 20. Quebec, Canada: North Atlantic Treaty Organization (NATO) Research and Technology Organization (RTO). RTO-AG-300 Vol. 20, AC/323(SCI-010)TP/38. Table of contents available at: http:/ / ftp. rta. nato. int/ public/ / PubFullText/RTO/AG/RTO-AG-300-V20///AG-300-V20-$$TOC.pdf

Primary References
Blanchard, B.S. 1998. Logistics Engineering and Management. Upper Saddle River, NJ, USA: Prentice Hall.
Blanchard, B. and W. Fabrycky. 2011. Systems Engineering and Analysis, 5th Ed. Englewood Cliffs, NJ, USA: Prentice-Hall.
Bobinis, J. and T. Herald. 2012. "An enterprise framework for operationally effective system of systems design." Journal of Enterprise Architecture. Vol. 8, no. 2, May 2012. Available at: https:// www.mendling.com/publications/JEA12-2.pdf.
Daganzo, C. 2005. Logistics Systems Analysis, 4th Edition. New York, NY, USA: Springer.
Fabrycky, W.J. and B.S. Blanchard. 1991. Life-Cycle Cost and Economic Analysis. Upper Saddle River, NJ, USA: Prentice-Hall.
Ghiani, G., G. Laporte, and R. Musmanno. 2004. Introduction to Logistics Systems Planning and Control. Hoboken, NJ, USA: Wiley-Interscience.
Jones, J.V. 1995. Integrated Logistics Support Handbook. New York, NY, USA: McGraw Hill.

Additional References
Barros, L.L. 1998. "The optimization of repair decision using life-cycle cost parameters." IMA Journal of Management Mathematics. Vol. 9, no. 4, p. 403.
Berkowitz, D., J.N. Gupta, J.T. Simpson, and J.B. McWilliams. 2005. Defining and Implementing Performance-Based Logistics in Government. Washington, DC, USA: Defense Technical Information Center. Accessed 6 Sept 2011. Available at: http://handle.dtic.mil/100.2/ADP018510.
Gajpal, P.P., L.S. Ganesh, and C. Rajendran. 1994. "Criticality analysis of spare parts using the analytic hierarchy process." International Journal of Production Economics. Vol. 35, nos. 1-3 pp. 293-297.
MITRE. 2011. "Integrated logistics support." Systems Engineering Guide. Accessed 11 March 2012. Available at: [[11]].
Murthy, D.N.P. and W.R. Blischke. 2000. "Strategic warranty management: A life-cycle approach." Engineering Management. Vol. 47, no. 1, pp. 40-54.
Northrop Grumman Corporation. 2000. Logistics Systems Engineering. Accessed 6 Sept 2011. Available at: http:// www. northropgrumman. com/ Capabilities/ NavigationSystemsLogisticsSystemsEngineering/ Documents/


nsd_logistics.pdf.
Solomon, R., P.A. Sandborn, and M.G. Pecht. 2000. "Electronic part life cycle concepts and obsolescence forecasting." IEEE Transactions on Components and Packaging Technologies. Vol. 23, no. 4, pp. 707-717.
Spengler, T. and M. Schroter. 2003. "Strategic management of spare parts in closed-loop supply chains: A system dynamics approach." Interfaces. pp. 7-17.

References
[1] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-12.pdf
[2] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-06.pdf
[3] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-03.pdf
[4] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-05.pdf
[5] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-07.pdf
[6] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-04.pdf
[7] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-08.pdf
[8] http://www.decisionlens.com/docs/WP_Strategic_Facilities_and_Infrastructure_Planning.pdf
[9] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-11.pdf
[10] http://ftp.rta.nato.int/public/PubFullText/RTO/AG/RTO-AG-300-V20/AG-300-V20-09.pdf
[11] http://www.mitre.org/work/systems_engineering/guide/acquisition_systems_engineering/integrated_logistics_support/


Service Life Management


 Contributing Author:
 William Stiffler
-
Product and service life management deals with the overall life cycle planning and support of a system. The life of a product or service spans a considerably longer period of time than the time required to design and develop the system. Systems engineers need to understand and apply the principles of life management throughout the life cycle of the system. (See Life Cycle Models for a general discussion of life cycles.) Specifically, this article focuses on changes to a system after deployment, including extension, modernization, disposal, and retirement.

Overview
Product and service life management is also referred to as system sustainment. Sustainment involves the supportability of operational systems from the initial procurement to disposal. Sustainment is a key task for systems engineering that influences product and service performance and support costs for the entire life of the program.
Sustainment activities include: design for maintainability, application of built-in test, diagnostics, prognostics and other condition-based maintenance techniques, implementation of logistics footprint reduction strategies, identification of technology insertion opportunities, identification of operations and support cost reduction opportunities, and monitoring of key support metrics. Life cycle sustainment plans should be created for large, complex systems (DAU 2010). Product and service life management applies to both commercial systems (e.g. energy generation and distribution systems, information management systems, the Internet, and health industries) and government systems (e.g. defense systems, transportation systems, water-handling systems, and government services).
It is critical that the planning for system life management occur during the requirements phase of system development. (See System Requirements and System Definition). The requirements phase includes the analysis of life cycle cost alternatives, as well as gaining the understanding of how the system will be sustained and modified once it is operational.


The body of knowledge associated with product and service life management includes the following areas:
1. Service Life Extension - Systems engineers need to understand the principles of service life extension, the challenges that occur during system modifications, and issues involved with the disposal and retirement after a system has reached the end of its useful life.
2. Modernization and Upgrades - Managing service life extension uses the engineering change management process with an understanding of the design life constraints of the system. Modernizing existing legacy systems requires special attention and understanding of the legacy requirements and the importance of having a complete inventory of all the system interfaces and technical drawings.
3. Disposal and Retirement - Disposal and retirement of a product after reaching its useful life requires attention to environmental concerns, special handling of hazardous waste, and concurrent operation of a replacement system as the existing system is being retired.

Principles and Standards
The principles of product and service life management apply to different types of systems and domains. The type of system (commercial or government) should be used to select the correct body of knowledge and best practices that exist in different domains. For example, U.S. military systems would rely on sustainment references and best practices from the Department of Defense (DoD) (e.g., military services, Defense Acquisition University (DAU), etc.) and military standardization bodies (e.g., the American Institute of Aeronautics and Astronautics (AIAA), the Society of Automotive Engineers (SAE), the Society of Logistics Engineers (SOLE), the Open Geospatial Consortium (OGC), etc.).
Commercial aviation, power distribution, transportation, water-handling systems, the Internet, and health industries would rely on system life management references and best practices from a combination of government agencies, local municipalities, and commercial standardization bodies and associations (e.g., in the U.S.- the Department of Transportation (DOT), State of Michigan, International Organization for Standardization (ISO), Institute of Electrical and Electronics Engineers (IEEE), International Council on Systems Engineering (INCOSE), etc.).
Some standardization bodies have developed system life management practices that bridge both military and commercial systems (e.g., INCOSE, SOLE, ISO, IEEE, etc.). There are multiple commercial associations involved with defining engineering policies, best practices, and requirements for commercial product and service life management. Each commercial association has a specific focus for the market or domain area where the product is used. Examples of such commercial associations in the U.S. include: American Society of Hospital Engineering (ASHE); Association of Computing Machinery (ACM); American Society of Mechanical Engineers (ASME); American Society for Testing & Materials (ASTM) International; National Association of Home Builders (NAHB); and Internet Society (ISOC), including Internet Engineering Task Force (IETF), and SAE.
In addition, there are several specific resources which provide useful information on product and service life management:
 The INCOSE Systems Engineering Handbook, version 3.2.2, identifies several relevant points regarding product and service life management (2011).
 The Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version 1.1, provides guidance on product changes and system retirement (Caltrans and USDOT 2005).
 Systems Engineering and Analysis emphasizes design for supportability and provides a framework for product and service supportability and planning for system retirement (Blanchard and Fabrycky 2006).
 Modernizing Legacy Systems identifies strategies for product and service modernization (Seacord, Plakosh, and Lewis 2003).
 "Logistics and Materiel Readiness" (http://www.acq.osd.mil/log/ [1]) provides online policies, procedures, and
planning references for product service life extension, modernization, and retirement (OUSD(AT&L) 2011).


 A Multidisciplinary Framework for Resilience to Disasters and Disruptions provides insight into architecting a system for extended service life (Jackson 2007).

Good Practices
Major pitfalls associated with systems engineering (SE) after the deployment of products and services can be avoided if the systems engineer:
 Recognizes that the systems engineering process does not stop when the product or service becomes operational.
 Understands that certain life management functions and organizations, especially in the post-delivery phase of the life cycle, are part of the systems engineering process.
 Identifies that modifications need to comply with the system requirements.
 Considers that the users must be able to continue the maintenance activities drawn up during the system requirement phase after an upgrade or modification to the system is made.
 Accounts for changing user requirements over the system life cycle.
 Adapts the support concepts drawn up during development throughout the system life cycle.
 Applies engineering change management to the total system.
Not addressing these areas of concern early in development and throughout the product or service's life cycle can have dire consequences.

References
Works Cited
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research & Innovation/U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
DAU. 2010. "Acquisition Community Connection (ACC): Where the DoD AT&L workforce meets to share knowledge." Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/US Department of Defense (DoD). https://acc.dau.mil.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.  San  Diego,  CA,  USA:  International  Council  on  Systems  Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
Jackson. 2007. "A Multidisciplinary Framework for Resilience to Disasters and Disruptions." Journal of Integrated Design and Process Science. 11(2).
OUSD(AT&L). 2011. "Logistics and Materiel Readiness On-line policies, procedures, and planning references." Arlington, VA, USA: Office of the Under Secretary of Defense for Aquisition, Transportation and Logistics (OUSD(AT&L)). http://www.acq.osd.mil/log/.
Seacord, R.C., D. Plakosh, and G.A. Lewis. 2003. Modernizing Legacy Systems: Software Technologies, Engineering Processes, and Business Practices. Boston, MA, USA: Pearson Education.


Primary References
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), ver 1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research and Innovation and
U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
Jackson, S. 2007. "A Multidisciplinary Framework for Resilience to Disasters and Disruptions." Journal of Integrated Design and Process Science. 11(2).
OUSD(AT&L). 2011. "Logistics and Materiel Readiness On-line policies, procedures, and planning references." Arlington, VA, USA: Office of the Under Secretary of Defense for Acquisition, Transportation and Logistics (OUSD(AT&L). http://www.acq.osd.mil/log/.
Seacord, R.C., D. Plakosh, and G.A. Lewis. 2003. Modernizing Legacy Systems: Software Technologies, Engineering Processes, and Business Practices. Boston, MA, USA: Pearson Education.

Additional References
Blanchard, B.S. 2010. Logistics engineering and management, 5th ed. Englewood Cliffs, NJ, USA: Prentice Hall: 341-342.
Braunstein, A. 2007. "Balancing Hardware End-of-Life Costs and Responsibilities." Westport, CT, USA: Experture Group, ETS 07-12-18.
Brown, M., R. Weyers, and M. Sprinkel. 2006. "Service Life Extension of Virginia Bridge Decks afforded by Epoxy-Coated Reinforcement." Journal of ASTM International (JAI). 3(2): 13.
DLA. 2010. "Defense logistics agency disposition services." In Defense Logistics Agency (DLA)/U.S. Department of Defense [database online]. Battle Creek, MI, USA, accessed June 19 2010: 5. Available at: http://www.dtc.dla. mil.
EPA. 2010. "Wastes In U.S. Environmental Protection Agency (EPA)." Washington, D.C. Available at: http:/ / www.epa.gov/epawaste/index.htm.
Finlayson, B. and B. Herdlick. 2008. Systems Engineering of Deployed Systems. Baltimore, MD, USA: Johns Hopkins University: 28.
FSA. 2010. "Template for 'System Retirement Plan' and 'System Disposal Plan'." In Federal Student Aid (FSA)/U.S. Department of Eduation (DoEd). Washington, DC, USA. Accessed August 5, 2010. Available at: http:/ / federalstudentaid.ed.gov/business/lcm.html.
Gehring, G., D. Lindemuth, and W.T. Young. 2004. "Break Reduction/Life extension Program for CAST and Ductile Iron Water Mains." Paper presented at NO-DIG 2004, Conference of the North American Society for Trenchless Technology (NASTT), March 22-24, New Orleans, LA, USA.
Hovinga, M.N., and G.J. Nakoneczny. 2000. "Standard Recommendations for Pressure Part Inspection during a Boiler Life Extension Program." Paper presented at ICOLM (International Conference on Life Management and Life Extension of Power Plant), May, Xi'an, P.R. China.
IEC. 2007. Obsolescence Management - Application Guide, ed 1.0. Geneva, Switzerland: International Electrotechnical Commission, IEC 62302.
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical


and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
Ihii, K., C.F. Eubanks, and P. Di Marco. 1994. "Design for Product Retirement and Material Life-Cycle." Materials & Design. 15(4): 225-33.
INCOSE UK Chapter. 2010. Applying Systems Engineering to In-Service Systems: Supplementary Guidance to the INCOSE Systems Engineering Handbook, version 3.2, issue 1.0. Foresgate, UK: International Council on Systems Engineering (INCOSE) UK Chapter: 10, 13, 23.
Institute of Engineers Singapore. 2009. Systems Engineering Body of Knowledge, provisional, version 2.0. Singapore.
Jackson, S. 1997. Systems Engineering for Commercial Aircraft. Surrey, UK: Ashgate Publishing, Ltd.
Koopman, P. 1999. "Life Cycle Considerations." Pittsburgh, PA, USA: Carnegie Mellon. Accessed August 5, 2010. Available at: http://www.ece.cmu.edu/~koopman/des_s99/life_cycle/index.html.
L3 Communications. 2010. "Service Life Extension Program (SLEP)." Newport News, VA, USA: L3 Communications, Flight International Aviation LLC.
Livingston, H. 2010. "GEB1: Diminishing Manufacturing Sources and Material Shortages (DMSMS) Management Practices." McClellan, CA, USA: Defense MicroElectronics Activity (DMEA)/U.S. Department of Defense (DoD).
Minneapolis-St. Paul Chapter of SOLE. 2003. "Systems Engineering in Systems Deployment and Retirement, presented to INCOSE." Minneapolis-St. Paul, MN, USA: International Society of Logistics (SOLE), Minneapolis-St. Paul Chapter.
NAS. 2006. National Airspace System (NAS) System Engineering Manual, version 3.1 (volumes 1-3). Washington, D.C.: Air Traffic Organization (ATO)/U.S. Federal Aviation Administration (FAA), NAS SEM 3.1.
NASA. 2007. Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105, December 2007.
Nguyen, L. 2006. "Adapting the Vee Model to Accomplish Systems Engineering on Change Projects." Paper presented at 9th Annual National Defense Industrial Association (NDIA) Systems Engineering Conference, San Diego, CA, USA.
Office of Natural Gas and Oil Technology. 1999. Reservoir LIFE Extension Program: Encouraging Production of Remaining Oil and Gas. Washington, DC, USA: U.S. Department of Energy (DoE).
Paks Nuclear Power Plant. 2010. "Paks Nuclear Power Plant: Service Life Extension." In Paks Nuclear Power Plant, Ltd.. Hungary, accessed August 5, 2010. Available at: http://paksnuclearpowerplant.com/service-life-extension.
Ryen, E. 2008. Overview of the Systems Engineering Process. Bismarck, ND, USA: North Dakota Department of Transportation (NDDOT).
SAE International. 2010. "Standards: Commercial Vehicle--Maintenance and Aftermarket." Warrendale, PA, USA: Society of Automotive Engineers (SAE) International.
SAE International. 2010. "Standards: Maintenance and Aftermarket." Warrendale, PA, USA: Society of Automotive Engineers (SAE) International.
Sukamto, S. 2003. "Plant Aging and Life Extension Program at Arun LNG Plant Lhokseumawe, North Aceh, Indonesia." Paper presented at 22nd Annual World Gas Conference, June 1-5, Tokyo, Japan.


References
[1] http://www.acq.osd.mil/log/


Service Life Extension

 Lead Author:
 William Stiffler
 Contributing Author:
 Brian Wells
-
Product and service life extension involves continued use of a product and/or service beyond its original design life. Product and service life extension involves assessing the risks and the life cycle cost (LCC) of continuing the use of the product or service versus the cost of a replacement system.
Service life extension (SLE) emphasizes reliability upgrades and component replacement or rebuilding of the system to delay the system's entry into wear-out status due to issues such as expensive sustainment, reliability, safety, and/or performance requirements that can no longer be met. The goal is typically to return the system to as new a condition as possible while remaining consistent with the economic constraints of the program.
SLE is regarded as an environmentally friendly way to relieve rampant waste by prolonging the useful life of retiring products and preventing them from being discarded too early when they still have unused value. However, challenged by fast-changing technology and physical deterioration, a major concern in planning a product SLE is considering to what degree a product or service is fit to have its life extended.

Topic Overview
SLE is typically required in the following circumstances:
 The system no longer meets the system performance or reliability requirements.
 The cost of operation and maintenance exceeds the cost of SLE, or the available budgets.
 Parts are no longer available for repair and maintenance.
 Operation of the system violates rules or regulations, such as environmental or safety regulations.
 Parts of the system are about to reach their operations life limits, which will result in the issue listed above occurring.
It is best if systems engineers use a proactive approach that predicts ahead, so that SLE can be accomplished before the system fails to meet its requirements and before the operations and support costs rise above acceptable limits.
Key factors that must be considered by the systems engineer during service life extension include:
 current life cycle costs of the system
 design life and expected remaining useful life of the system
 software maintenance
 configuration management
 warranty policy
 availability of parts, subsystems, and manufacturing sources
 availability of system documentation to support life extension
System design life is a major consideration for SLE. System design life parameters are established early on during the system design phase and include key assumptions involving safety limits and material life. Safety limits and the properties of material aging are critical to defining system life extension. Jackson emphasizes the importance of architecting for system resiliency in increasing system life. He also points out that a system can be architected to


withstand internal and external disruptions (2007, 91-108). Systems that age through use, such as aircraft, bridges, and nuclear power plants, require periodic inspection to ascertain the degree of aging and fatigue. The results of inspections determine the need for actions to extend the product life (Elliot, Chen, and Swanekamp 1998, sec. 6.5).
Software maintenance is a critical aspect of SLE. The legacy system may include multiple computer resources that have been in operation for a period of many years and have essential functions that must not be disrupted during the upgrade or integration process. Typically, legacy systems include a computer resource or application software program that continues to be used because the cost of replacing or redesigning it is prohibitive. The Software Engineering Institute (SEI) has addressed the need for SLE of software products and services and provides useful guidance in the online library for Software Product Lines (SEI 2010, 1). (See Systems Engineering and Software Engineering for additional discussion of software engineering (SwE) factors to consider.)
Systems engineers have found that service life can be extended through the proper selection of materials. For example, transportation system elements such as highway bridges and rail systems are being designed for extended service life by using special epoxy-coated steel (Brown, Weyers, and Spinkel 2006, 13). Diminishing manufacturing sources and diminishing suppliers need to be addressed early in the SLE process. Livingston (2010) in Diminishing Manufacturing Sources and Material Shortages (DMSMS) Management Practices provides a method for addressing product life extension when the sources of supply are an issue. He addresses the product life cycle model and describes a variety of methods that can be applied during system design to minimize the impact of future component obsolescence issues.
During product and service life extension, it is often necessary to revisit and challenge the assumptions behind any previous life cycle cost analysis (and constituent analyses) to evaluate their continued validity and/or applicability early in the process.

Application to Product Systems
Product life extension requires an analysis of the LCC associated with continued use of the existing product versus the cost of a replacement product. In the INCOSE Systems Engineering Handbook, Chapter 3.3 points out that the support stage includes service life extension (2012). Chapter 7 provides a framework to determine if a product's life should be extended (INCOSE 2012). In Systems Engineering and Analysis, Chapter 17 provides an LCC methodology and emphasizes the analysis of different alternatives before deciding on product life extension (Blanchard and Fabrycky 2011).
For military systems, service life extension is considered a subset of modification or modernization. Military systems use well-developed and detailed guidance for SLE programs (SLEP). The Office of the Under Secretary of Defense for Acquisition, Technology, and Logistics (OSD AT&L) provides an online reference for policies, procedures, planning guidance, and whitepapers for military product service life extension (DAU 2011). Continuous military system modernization is a process by which state-of-the-art technologies are inserted continuously into weapon systems to increase reliability, lower sustainment costs, and increase the war fighting capability of a military system to meet evolving customer requirements throughout an indefinite service life.
Aircraft service life can be extended by reducing the dynamic loads which lead to structural fatigue. The Boeing B-52 military aircraft and the Boeing 737 commercial aircraft are prime examples of system life extension. The B-52 was first fielded in 1955 and the Boeing 737 has been fielded since 1967; both aircraft are still in use today.
For nuclear reactors, system safety is the most important precondition for service life extension. System safety must be maintained while extending the service life (Paks 2010). Built-in tests, automated fault reporting and prognostics, analysis of failure modes, and the detection of early signs of wear and aging may be applied to predict the time when maintenance actions will be required to extend the service life of the product. (For additional discussion, see Safety Engineering.)


Application to Service Systems
For systems that provide services to a larger consumer base, SLE involves continued delivery of the service without disrupting consumer use. This involves capital investment and financial planning, as well as a phased deployment of changes. Examples of these concepts can be seen in transportation systems, water treatment facilities, energy generation and delivery systems, and the health care industry. As new technologies are introduced, service delivery can be improved while reducing LCC's. Service systems must continuously assess delivery costs based upon the use of newer technologies.
Water handling systems provide a good example of a service system that undergoes life extension. Water handling systems have been in existence since early civilization. Since water handling systems are in use as long as a site is occupied (e.g., the Roman aqueducts) and upgrades are required as the population expands, such systems are a good example of "systems that live forever." For example, there are still U.S. water systems that use a few wooden pipes since there has been no reason to replace them. Water system life extension must deal with the issue of water quality and the capacity for future users (Mays 2000). Water quality requirements can be further understood from the AWWA Manuals of Water Supply Practices (AWWA 2010).

Application to Enterprises
SLE of a large enterprise, such as the National Astronautics and Space Administration's (NASA) national space transportation system, involves SLE on the elements of the enterprise, such as the space vehicle (shuttle), ground processing systems for launch operations and mission control, and space-based communication systems that support space vehicle tracking and status monitoring. SLE of an enterprise requires a holistic look across the entire enterprise. A balanced approach is required to address the cost of operating older system components versus the cost required to implement service life improvements.
Large enterprise systems, such as oil and natural gas reservoirs which span broad geographical areas, can use advanced technology to increase their service life. The economic extraction of oil and natural gas resources from previously established reservoirs can extend their system life. One such life extension method is to pump special liquids or gases into the reservoir to push the remaining oil or natural gas to the surface for extraction (Office of Natural Gas & Oil Technology 1999).

Other Topics
Commercial product developers have been required to retain information for extended periods of time after the last operational product or unit leaves active service (for up to twenty years). Regulatory requirements should be considered when extending service life (INCOSE 2012).

Practical Considerations
The cost associated with life extension is one of the main inputs in the decision to extend service life of a product or a service. The cost of SLE must be compared to the cost of developing and deploying a new system, as well as the functional utility the user will obtain from each of the alternatives. It is often the case that the funding required for SLE of large complex systems is spread over several fiscal planning cycles and is therefore subject to changes in attitude by the elected officials that appropriate the funding.
The challenges with upgrading a system while it is still being used, which is often the case with SLE, must be understood and planned to avoid serious disruptions to the services the systems provide.
Any SLE must also consider the obsolescence of the systems parts, (e.g., software, amount of system redesign that is required to eliminate the obsolete parts, etc.).


References
Works Cited
AWWA. 2010. "AWWA Manuals of Water Supply Practices." In American Water Works Association (AWWA). Denver, CO. Accessed August 5, 2010. Available at: http:/ / www. awwa. org/ Resources/ standards. cfm?ItemNumber=47829&navItemNumber=47834.
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Brown, M., R. Weyers, and M. Sprinkel. 2006. "Service Life Extension of Virginia Bridge Decks afforded by Epoxy-Coated Reinforcement." Journal of ASTM International (JAI), 3(2): 13.
DAU. 2010. "Acquisition community connection (ACC): Where the DoD AT&L workforce meets to share knowledge." In Defense Acquisition University (DAU)/US Department of Defense (DoD). Ft. Belvoir, VA, USA, accessed August 5, 2010. https://acc.dau.mil/.
Elliot, T., K. Chen, and R.C. Swanekamp. 1998. "Section 6.5" in Standard Handbook of Powerplant Engineering.
New York, NY, USA: McGraw Hill.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
Jackson. 2007. "A Multidisciplinary Framework for Resilience to Disasters and Disruptions." Journal of Integrated Design and Process Science. 11(2).
Livingston, H. 2010. "GEB1: Diminishing Manufacturing Sources and Material Shortages (DMSMS) Management Practices." McClellan, CA: Defense MicroElectronics Activity (DMEA)/U.S. Department of Defense (DoD).
Mays, L. (ed). 2000. "Chapter 3" in Water Distribution Systems Handbook. New York, NY, USA: McGraw-Hill Book Company.
Office of Natural Gas and Oil Technology. 1999. Reservoir LIFE Extension Program: Encouraging Production of Remaining Oil and Gas. Washington, DC, USA: U.S. Department of Energy (DoE).
Paks Nuclear Power Plant. 2010. "Paks Nuclear Power Plant: Service Life Extension." In Paks Nuclear Power Plant, Ltd. Hungary, accessed August 5, 2010. Available at: http://paksnuclearpowerplant.com/service-life-extension.
SEI. 2010. "Software Engineering Institute." In Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU). Pittsburgh, PA, accessed August 5, 2010. http://www.sei.cmu.edu.

Primary References
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research and Innovation and U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
Jackson. 2007. "A Multidisciplinary Framework for Resilience to Disasters and Disruptions." Journal of Integrated Design and Process Science. 11(2).
OUSD(AT&L). 2011. "Logistics and Materiel Readiness On-line policies, procedures, and planning references." Arlington, VA, USA: Office of the Under Secretary of Defense for Acquisition, Transportation and Logistics


(OUSD(AT&L). http://www.acq.osd.mil/log/.
Seacord, R.C., D. Plakosh, and G.A. Lewis. 2003. Modernizing Legacy Systems: Software Technologies, Engineering Processes, and Business Practices. Boston, MA, USA: Pearson Education.

Additional References
AWWA. 2010. "AWWA Manuals of Water Supply Practices." In American Water Works Association (AWWA). Denver, CO, USA. Accessed August 5, 2010. Available at: http:/ / www. awwa. org/ Resources/ standards. cfm?ItemNumber=47829&navItemNumber=47834.
Blanchard, B.S. 2010. Logistics engineering and management, 5th ed. Englewood Cliffs, NJ, USA: Prentice Hall, 341-342.
Braunstein, A. 2007. "Balancing Hardware End-of-Life Costs and Responsibilities." Westport, CT, USA: Experture Group, ETS 07-12-18.
Brown, M., R. Weyers, and M. Sprinkel. 2006. "Service Life Extension of Virginia Bridge Decks afforded by Epoxy-Coated Reinforcement." Journal of ASTM International (JAI), 3(2): 13.
Caltrans and USDOT. 2005. Systems engineering guidebook for ITS, version 1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research & Innovation/U.S. Department of Transportation (USDOT), SEG for ITS 1.1: 278, 101-103, 107.
Casetta, E. 2001. Transportation Systems Engineering: Theory and methods. New York, NY, USA: Kluwer Publishers Academic, Springer.
DAU. 2010. "Acquisition community connection (ACC): Where the DoD AT&L workforce meets to share knowledge." In Defense Acquisition University (DAU)/US Department of Defense (DoD). Ft. Belvoir, VA, USA, accessed August 5, 2010. https://acc.dau.mil/.
DLA. 2010. "Defense logistics agency disposition services." In Defense Logistics Agency (DLA)/U.S. Department of Defense [database online]. Battle Creek, MI, USA, accessed June 19 2010: 5. Available at: http://www.dtc.dla. mil.
Elliot, T., K. Chen, and R.C. Swanekamp. 1998. "Section 6.5" in Standard Handbook of Powerplant Engineering.
New York, NY, USA: McGraw Hill.
FAA. 2006. "Section 4.1" in "Systems Engineering Manual." Washington, DC, USA: US Federal Aviation Administration (FAA).
FCC. 2009. "Radio and Television Broadcast Rules." Washington, DC, USA: US Federal Communications Commission (FCC), 47 CFR Part 73, FCC Rule 09-19: 11299-11318.
Finlayson, B. and B. Herdlick. 2008. Systems Engineering of Deployed Systems. Baltimore, MD, USA: Johns Hopkins University: 28.
Gehring, G., D. Lindemuth, and W.T. Young. 2004. "Break Reduction/Life extension Program for CAST and Ductile Iron Water Mains." Paper presented at NO-DIG 2004, Conference of the North American Society for Trenchless Technology (NASTT), March 22-24, New Orleans, LA, USA.
Hovinga, M.N. and G.J. Nakoneczny. 2000. "Standard Recommendations for Pressure Part Inspection during a Boiler Life Extension Program." Paper presented at ICOLM (International Conference on Life Management and Life Extension of Power Plant), May, Xi'an, P.R. China.
IEC. 2007. Obsolescence Management - Application Guide, ed 1.0. Geneva, Switzerland: International Electrotechnical Commission, IEC 62302.
IEEE. 2010. IEEE Standard Framework for Reliability Prediction of Hardware. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE STD 1413.


IEEE. 1998. IEEE Standard Reliability Program for the Development and Production of Electronic Systems and Equipment. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE STD 1332.
IEEE. 2008. IEEE Recommended practice on Software Reliability. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE STD 1633.
IEEE 2005. IEEE Standard for Software Configuration Management Plans. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE STD 828.
IEEE. 2010. IEEE Standard Framework for Reliability Prediction of Hardware. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE STD 1413.
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
Ihii, K., C.F. Eubanks, and P. Di Marco. 1994. "Design for Product Retirement and Material Life-Cycle." Materials & Design. 15(4): 225-33.
INCOSE UK Chapter. 2010. Applying Systems Engineering to In-Service Systems: Supplementary Guidance to the INCOSE Systems Engineering Handbook, version 3.2, issue 1.0. Foresgate, UK: International Council on Systems Engineering (INCOSE) UK Chapter: 10, 13, 23.
Institute of Engineers Singapore. 2009. "Systems Engineering Body of Knowledge, provisional," version 2.0. Singapore.
ISO/IEC. 2003. "Industrial Automation Systems Integration-Integration of Life-Cycle Data for Process Plants including Oil, Gas Production Facilities." Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC).
ISO/IEC. 1997. "Systems Engineering for Commercial Aircraft." Surrey, UK: Ashgate Publishing Ltd.
Koopman, P. 1999. "Life Cycle Considerations." In Carnegie-Mellon University (CMU). Pittsburgh, PA, USA, accessed August 5, 2010. Available at: http://www.ece.cmu.edu/~koopman/des_s99/life_cycle/index.html.
L3 Communications. 2010. "Service Life Extension Program (SLEP)." Newport News, VA, USA: L3 Communications, Flight International Aviation LLC.
Livingston, H. 2010. "GEB1: Diminishing Manufacturing Sources and Material Shortages (DMSMS) Management Practices." McClellan, CA: Defense MicroElectronics Activity (DMEA)/U.S. Department of Defense (DoD).
Mays, L. (ed). 2000. "Chapter 3" in Water Distribution Systems Handbook. New York, NY, USA: McGraw-Hill Book Company.
MDIT. 2008. System Maintenance Guidebook (SMG), version 1.1: A companion to the systems engineering methodology (SEM) of the state unified information technology environment (SUITE). MI, USA: Michigan Department of Information Technology (MDIT), DOE G 200: 38.
NAS. 2006. National Airspace System (NAS) System Engineering Manual, version 3.1 (volumes 1-3). Washington, D.C., USA: Air Traffic Organization (ATO)/U.S. Federal Aviation Administration (FAA), NAS SEM 3.1.
NASA. 2007. Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105, December 2007.
Office of Natural Gas and Oil Technology. 1999. Reservoir LIFE Extension Program: Encouraging Production of Remaining Oil and Gas. Washington, DC, USA: U.S. Department of Energy (DoE).
Paks Nuclear Power Plant. 2010. "Paks Nuclear Power Plant: Service Life Extension." In Paks Nuclear Power Plant, Ltd. Hungary, accessed August 5, 2010. Available at: http://paksnuclearpowerplant.com/service-life-extension.
Reason, J. 1997. Managing the Risks of Organizational Accident. Aldershot, UK: Ashgate.


Ryen, E. 2008. Overview of the Systems Engineering Process. Bismarck, ND, USA: North Dakota Department of Transportation (NDDOT).
SAE International. 2010. "Standards: Automotive--Maintenance and Aftermarket." Warrendale, PA: Society of Automotive Engineers (SAE) International.
Schafer, D.L. 2003. "Keeping Pace With Technology Advances When Funding Resources Are Diminished." Paper presented at Auto Test Con. IEEE Systems Readiness Technology Conference, Anaheim, CA, USA: 584.
SEI. 2010. "Software Engineering Institute." In Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU). Pittsburgh, PA, accessed August 5, 2010. http://www.sei.cmu.edu.
SOLE. 2009. "Applications Divisons." In The International Society of Logistics (SOLE). Hyattsville, MD, USA, accessed August 5, 2010. http://www.sole.org/appdiv.asp.
Sukamto, S. 2003. "Plant Aging and Life Extension Program at Arun LNG Plant Lhokseumawe, North Aceh, Indonesia." Paper presented at 22nd Annual World Gas Conference, June 1-5, Tokyo, Japan.

Capability Updates, Upgrades, and Modernization

 Lead Author:
 William Stiffler
 Contributing Author:
 Brian Wells
-
Modernization and upgrades involve changing the product or service to include new functions and interfaces, improve system performance, and/or improve system supportability. The logistic support of a product or service reaches a point in its life where system modernization is required to resolve supportability problems and to reduce operational costs. The INCOSE Systems Engineering Handbook (INCOSE 2012) and Systems Engineering and Analysis (Blanchard and Fabrycky 2005) both stress the importance of using life cycle costs (LCC) when determining if a product or service should be modernized. Systems can be modernized in the field or returned to a depot or factory for modification.
Design for system modernization and upgrade is an important part of the system engineering process and should be considered as part of the early requirements and design activities. Engineering change proposals (ECPs) are used to initiate updates and modifications to the original system. Product and service upgrades can include new technology insertion, removing old equipment, or adding new equipment. Form, fit, function, and interface (F3I) is an important principle for upgrades where backward compatibility is a requirement.

Topic Overview
Product and service modernization involves the same systems engineering (SE) processes and principles that are employed during the upfront design, development, integration, and testing. The primary differences between product and service modernization are the various constraints imposed by the existing system architecture, design, and components. Modernizing a legacy system requires a detailed understanding of the product or service prior to making any changes. The constraints and the existence of design and test artifacts make it necessary for the systems engineers performing modernization to tailor the traditional development processes to fit the situation.
Product and service modernization occurs for many reasons, including the following:
1. The system or one of its subsystems is experiencing reduced performance, safety, or reliability.


2. A customer or other stakeholder desires a new capability for the system.
3. Some system components may be experiencing obsolescence, including the lack of spare parts.
4. New uses for the system require modification to add capabilities not built into the originally deployed system.
The first three reasons above are discussed in more detail in Applying Systems Engineering to In-Service Systems: Supplementary Guidance to the INCOSE Systems Engineering Handbook. (INCOSE UK Chapter 2010).
The UK chapter of the INCOSE developed Applying Systems Engineering to In-Service Systems: Supplementary Guidance to the INCOSE Systems Engineering Handbook (INCOSE UK Chapter 2010). This guidance document applies to any system for which multiple systems are produced. These systems may be buildings, transmission networks, aircraft, automobiles or military vehicles, trains, naval vessels, and mass transit systems.
Government and military products provide a comprehensive body of knowledge for system modernization and updates. Key references have been developed by the defense industry and can be particular to their needs.
Key factors and questions that must be considered by the systems engineer when making modifications and upgrades to a product or service include:
 type of system (space, air, ground, maritime, and safety critical)
 missions and scenarios of expected operational usage
 policy and legal requirements that are imposed by certain agencies or business markets
 product or service LCCs
 electromagnetic spectrum usage expected, including change in RF emissions
 system original equipment manufacturer (OEM) and key suppliers, and availability of parts and subsystems
 understanding and documenting the functions, interfaces, and performance requirements, including environmental testing and validation
 system integration challenges posed by the prevalence of system-of-systems solutions and corresponding interoperability issues between legacy, modified, and new systems
 amount of regression testing to be performed on the existing software
Key processes and procedures that should be considered during product and service modernization include:
 legislative policy adherence review and certification
 safety critical review
 engineering change management and configuration control
 analysis of alternatives
 warranty and product return process implementation
 availability of manufacturing and supplier sources and products

Application to Product Systems
Product modernization involves understanding and managing a list of product deficiencies, prioritizing change requests, and handling customer issues associated with product usage. The INCOSE Systems Engineering Handbook emphasizes the use of Failure Modes, Effects, and Criticality Analysis (FMECA) to understand the root causes of product failures and provide the basis for making any product changes.
Product modernization uses the engineering change management principle of change control boards to review and implement product changes and improvements. The U.S. Office of the Under Secretary of Defense for Acquisition, Technology, and Logistics (OUSD AT&L) provides an online reference for product modernization and the use of an ECP to document planned product or service modernization efforts.
Product modernization and upgrades require the use of system documentation. A key part of the product change process is to change the supporting system documentation functions, interfaces, modes, performance requirements, and limitations. Both INCOSE (2012) and Blanchard and Fabrycky (2005) stress the importance of understanding the intended usage of the product or service documented in the form of a concept of operations.


If system documentation is not available, reverse engineering is required to capture the proper "as is configuration" of the system and to gain understanding of system behavior prior to making any changes. Seacord, Plakosh, and Lewis's Modernizing Legacy Systems (2003) explains the importance of documenting the existing architecture of a system, including documenting the software architecture prior to making any changes. Chapter 5 of Seacord, Plakosh, and Lewis provides a framework for understanding and documenting a legacy system (2003). The authors point out that the product or service software will undergo a transformation during modernization and upgrades. Chapter 5 introduces a horseshoe model that includes functional transformation, code transformation, and architecture transformation (Seacord, Plakosh, and Lewis 2005).
During system verification and validation (after product change), it is important to perform regression testing on the portions of the system that were not modified to confirm that upgrades did not impact the existing functions and behaviors of the system. The degree and amount of regression testing depends on the type of change made to the system and whether the upgrade includes any changes to those functions or interfaces involved with system safety. INCOSE (2012) recommends the use of a requirements verification traceability matrix to assist the systems engineer during regression testing.
It is important to consider changes to the system support environment. Change may require modification or additions to the system test equipment and other support elements such as packaging and transportation.
Some commercial products contain components and subsystems where modernization activities cannot be performed. An example of these types of commercial systems can be seen by looking at consumer electronics, such as radios and computer components. The purchase price of these commercial systems is low enough that upgrades are not economical and are considered cost prohibitive.

Application to Service Systems
Service system modernization may require regulatory changes to allow the use of new technologies and new materials. Service system modernization requires backward compatibility to previous provided service capability during the period of change. Service system modernization also generally spans large geographical areas, requiring a phase-based change and implementation strategy. Transportation systems, such as highways, provide service to many different types of consumers and span large geographical areas. Modernization of transportation systems often requires reverse engineering prior to making changes to understand how traffic monitoring devices such as metering, cameras, and toll tags interface with the rest of the system. The California Department of Transportation's (CDOT's) Systems Engineering Guidebook for Intelligent Transportation Systems (ITS) (2005) adds reverse engineering to the process steps for system upgrade. In addition, this reference points out the need to maintain system integrity and defines integrity to include the accurate documentation of the system's functional, performance, and physical requirements in the form of requirements, design, and support specifications.
Software modernization is discussed in the Guide to the Software Engineering Body of Knowledge (SWEBOK)
(Bourque and Fairley, 2014).


Application to Enterprises
Enterprise system modernization must consider the location of the modification and the conditions under which the work will be performed. The largest challenge is implementing the changes while the system remains operational. In these cases, disruption of ongoing operations is a serious risk. For some systems, the transition between the old and new configuration is particularly important and must be carefully planned.
Enterprise system modernization may require coordination of changes across international boundaries. Enterprise modifications normally occur at a lower level of the system hierarchy. Change in requirements at the system level would normally constitute a new system or a new model of a system.
The INCOSE UK Chapter Supplementary Guidance (2010) discusses the change to the architecture of the system. In cases where a component is added or changed, this change will constitute a change to the architecture. As an example, the global positioning system (GPS) is an enterprise system implemented by the United States military but used by both commercial and government consumers worldwide. Modernization may involve changes to only a certain segment of the enterprise, such as the ground user segment to reduce size, weight, and power. Modernization may only occur in certain geographical areas of operation. For example, the air transportation system consists of multiple countries and governing bodies dispersed over the entire world. Changes can occur locally or can require coordination and integration world-wide.

Other Topics
The Vee Model for Modifications
Figure 1 below illustrates how the standard Vee model would be applied to a system modification. This Vee model is for the entire system; the key point is that if a modification is being initiated at a lower level of the system hierarchy, the Vee model must be entered at that level as shown in the figure. The figure shows three entry points to the Vee model. As the INCOSE UK Chapter Supplementary Guidance (2010) points out, the Vee model may be entered multiple times during the life of the system.

A change to the system that does not change the system capabilities but does change the requirements and design of a subsystem that may be introduced into the process at point B on the Vee model (see Figure 1). Changes of this type


could provide a new subsystem, such as a computer system, that meets the system-level requirements but has differences from the original, which necessitates modifications to the lower-level requirements and design, such as changing disk memory to solid state memory. The process for implementing changes starting at this point has been described by Nguyen (2006). Modification introduced at points B or C (in Figure 1) necessitate flowing the requirements upward through their "parent" requirements to the system-level requirements.
There are many cases where the change to a system needs to be introduced at the lowest levels of the architectural hierarchy; here, the entry point to the process is at point C on the Vee model. These cases are typically related to obsolete parts caused by changes in technology or due to reliability issues with subsystems and parts chosen for the original design. A change at this level should be F3I compatible so that none of the higher-level requirements are affected. The systems engineer must ensure there is no impact at the higher levels; when this does occur, it must be immediately identified and worked out with the customer and the other stakeholders.
In "Life extension of Civil Infrastructural works - a systems engineering approach" van der Laan (2008) provides a maintenance process that interacts with the system engineering process, represented by the Vee model. His life extension (or modernization) process model includes reverse engineering to obtain the system definition necessary for the modernization process. Consideration of the total lifecycle of the system will result in the capture of all of the records necessary for later upgrade; however, for many reasons, the systems engineer will find that the necessary information has not been captured or maintained.

Practical Considerations
As pointed out by the INCOSE UK Chapter Supplementary Guidance (2010) there may be multiple modifications to a system in its lifetime. Often these modifications occur concurrently. This situation requires special attention and there are two methods for managing it. The first is called the "block" method. This means that a group of systems are in the process of being modified simultaneously and will be deployed together as a group at a specific time. This method is meant to ensure that at the end state, all the modifications have been coordinated and integrated so there are no conflicts and no non-compliance issues with the system-level requirements. The second method is called continuous integration and is meant to occur concurrently with the block method. Information management systems provide an example of a commercial system where multiple changes can occur concurrently. The information management system hardware and network modernization will cause the system software to undergo changes. Software release management is used to coordinate the proper timing for the distribution of system software changes to end-users (Michigan Department of Information Technology, 2008).

Application of Commercial-Off-the-Shelf Components
Currently, a prominent consideration is the use of commercial-off-the-shelf (COTS) components. The application of COTS subsystems, components, and technologies to system life management provides a combination of advantages and risks. The first advantage is the inherent technological advancements that come with COTS components. COTS components continue to evolve toward a higher degree of functional integration. They provide increased functionality, while shrinking in physical size. The other advantage to using COTS components is that they typically have a lower cost.
The risks associated with using COTS during system life management involve component obsolescence and changes to system interfaces. Commercial market forces drive some components to obsolescence within two years or less. Application of COTS requires careful consideration to form factor and interface (physical and electrical).


References
Works Cited
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Bourque, P. and R.E. Fairley (eds.). 2014. Guide to the Software Engineering Body of Knowledge (SWEBOK). Los Alamitos, CA, USA: IEEE Computer Society. Available at: http://www.swebok.org
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research and Innovation and U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
INCOSE UK Chapter. 2010. Applying Systems Engineering to In-Service Systems: Supplementary Guidance to the INCOSE Systems Engineering Handbook, version 3.2, issue 1.0. Foresgate, UK: International Council on Systems Engineering (INCOSE) UK Chapter: 10, 13, 23.
MDIT. 2008. System Maintenance Guidebook (SMG), version 1.1: A companion to the systems engineering methodology (SEM) of the state unified information technology environment (SUITE). MI, USA: Michigan Department of Information Technology (MDIT), DOE G 200: 38.
Nguyen, L. 2006. "Adapting the Vee Model to Accomplish Systems Engineering on Change Projects." Paper presented at 9th Annual National Defense Industrial Association (NDIA) Systems Engineering Conference, San Diego, CA, USA.
OUSD(AT&L). 2012. "On-line policies, procedures, and planning references." Office of the Under Secretary of Defense for Acquisition, Transportation and Logistics, US Department of Defense (DoD). Accessed on August 30, 2012. Available at: http://www.acq.osd.mil/log/
Seacord, R.C., D. Plakosh, and G.A. Lewis. 2003. Modernizing Legacy Systems: Software Technologies, Engineering Processes, and Business Practices. Boston, MA, USA: Pearson Education.
van der Laan, J. 2008. "Life extension of Civil Infrastructural works - a systems engineering approach." Proceedings of the 18th annual International Symposium of the International Council on Systems Engineering, Utrecht, the Netherlands.

Primary References
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research and Innovation and U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
Jackson. 2007. "A Multidisciplinary Framework for Resilience to Disasters and Disruptions." Journal of Integrated Design and Process Science. 11(2).
OUSD(AT&L). 2011. "Logistics and Materiel Readiness On-line policies, procedures, and planning references." Arlington, VA, USA: Office of the Under Secretary of Defense for Acquisition, Transportation and Logistics


(OUSD(AT&L). http://www.acq.osd.mil/log/.
Seacord, R.C., D. Plakosh, and G.A. Lewis. 2003. Modernizing Legacy Systems: Software Technologies, Engineering Processes, and Business Practices. Boston, MA, USA: Pearson Education.

Additional References
Braunstein, A. 2007. "Balancing Hardware End-of-Life Costs and Responsibilities." Westport, CT, USA: Experture Group, ETS 07-12-18.
Casetta, E. 2001. Transportation Systems Engineering: Theory and methods. New York, NY, USA: Kluwer Publishers Academic, Springer.
DAU. 2010. "Acquisition community connection (ACC): Where the DoD AT&L workforce meets to share knowledge." In Defense Acquisition University (DAU)/US Department of Defense (DoD). Ft. Belvoir, VA, USA, accessed August 5, 2010. https://acc.dau.mil/.
Elliot, T., K. Chen, and R.C. Swanekamp. 1998. "Section 6.5" in Standard Handbook of Powerplant Engineering.
New York, NY, USA: McGraw Hill.
FAA. 2006. "Section 4.1" in "Systems Engineering Manual." Washington, DC, USA: US Federal Aviation Administration (FAA).
FCC. 2009. "Radio and Television Broadcast Rules." Washington, DC, USA: US Federal Communications Commission (FCC), 47 CFR Part 73, FCC Rule 09-19: 11299-11318.
Finlayson, B. and B. Herdlick. 2008. Systems Engineering of Deployed Systems. Baltimore, MD, USA: Johns Hopkins University: 28.
IEC. 2007. Obsolescence Management - Application Guide, ed 1.0. Geneva, Switzerland: International Electrotechnical Commission, IEC 62302.
IEEE. 2010. IEEE Standard Framework for Reliability Prediction of Hardware. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE 1413.
IEEE. 1998. IEEE Standard Reliability Program for the Development and Production of Electronic Systems and Equipment. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE 1332.
IEEE. 2008. IEEE Recommended practice on Software Reliability. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE 1633.
IEEE. 2005. IEEE Standard for Software Configuration Management Plans. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE 828.
INCOSE. 2010. "In-service systems working group." San Diego, CA, USA: International Council on Systems Engineering (INCOSE).
INCOSE UK Chapter. 2010. Applying Systems Engineering to In-Service Systems: Supplementary Guidance to the INCOSE Systems Engineering Handbook, version 3.2, issue 1.0. Foresgate, UK: International Council on Systems Engineering (INCOSE) UK Chapter: 10, 13, 23.
Institute of Engineers Singapore. 2009. "Systems Engineering Body of Knowledge, provisional," version 2.0. Singapore.
ISO/IEC. 2003. "Industrial Automation Systems Integration-Integration of Life-Cycle Data for Process Plants including Oil, Gas Production Facilities." Geneva, Switzerland: International Organization for Standardization (ISO)/International Electro technical Commission (IEC).
Jackson, S. 2007. "A Multidisciplinary Framework for Resilience to Disasters and Disruptions." Journal of Design and Process Science. 11(2): 91-108, 110.
Jackson, S. 1997. Systems Engineering for Commercial Aircraft. Surrey, UK: Ashgate Publishing, Ltd.


Koopman, P. 1999. "Life Cycle Considerations." In Carnegie-Mellon University (CMU). Pittsburgh, PA, USA, accessed August 5, 2010. Available at: http://www.ece.cmu.edu/~koopman/des_s99/life_cycle/index.html.
Livingston, H. 2010. "GEB1: Diminishing Manufacturing Sources and Material Shortages (DMSMS) Management Practices." McClellan, CA, USA: Defense MicroElectronics Activity (DMEA)/U.S. Department of Defense (DoD).
Mays, L. (ed). 2000. "Chapter 3" in Water Distribution Systems Handbook. New York, NY, USA: McGraw-Hill Book Company.
MDIT. 2008. System Maintenance Guidebook (SMG), version 1.1: A companion to the systems engineering methdology (SEM) of the state unified information technology environment (SUITE). MI, USA: Michigan Department of Information Technology (MDIT), DOE G 200: 38.
NAS. 2006. National Airspace System (NAS) System Engineering Manual, version 3.1 (volumes 1-3). Washington, D.C., USA: Air Traffic Organization (ATO)/U.S. Federal Aviation Administration (FAA), NAS SEM 3.1.
NASA. 2007. Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105, December 2007.
Nguyen, L. 2006. "Adapting the Vee Model to Accomplish Systems Engineering on Change Projects." Paper presented at 9th Annual National Defense Industrial Association (NDIA) Systems Engineering Conference, San Diego, CA, USA.
Reason, J. 1997. Managing the Risks of Organizational Accident. Aldershot, UK: Ashgate.
Ryen, E. 2008. Overview of the Systems Engineering Process. Bismarck, ND, USA: North Dakota Department of Transpofration (NDDOT).
SAE International. 2010. "Standards: Automotive--Maintenance and Aftermarket." Warrendale, PA, USA: Society of Automotive Engineers (SAE) International.
Schafer, D.L. 2003. "Keeping Pace With Technology Advances When Funding Resources Are Diminished." Paper presented at Auto Test Con. IEEE Systems Readiness Technology Conference, Anaheim, CA, USA: 584.
SEI. 2010. "Software Engineering Institute." In Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU). Pittsburgh, PA, USA, accessed August 5, 2010. http://www.sei.cmu.edu.
SOLE. 2009. "Applications Divisons." In The International Society of Logistics (SOLE). Hyattsville, MD, USA, accessed August 5, 2010. http://www.sole.org/appdiv.asp.


System Disposal and Retirement

 Lead Author:
 Brian Wells
-
Product or service disposal and retirement is an important part of system life management. At some point, any deployed system will become one of the following: uneconomical to maintain; obsolete; or unrepairable. A comprehensive systems engineering process includes an anticipated equipment phase-out period and takes disposal into account in the design and life cycle cost assessment. (See other knowledge areas in Part 3 for discussion on life cycle metrics and assessment.)
A public focus on sustaining a clean environment encourages contemporary systems engineering (SE) design to consider recycling, reuse, and responsible disposal techniques. (See Systems Engineering and Environmental Engineering for additional discussion.)

Topic Overview
According to the INCOSE Systems Engineering Handbook (2012), "The purpose of the disposal process is to remove a system element from the operation environment with the intent of permanently terminating its use; and to deal with any hazardous or toxic materials or waste products in accordance with the applicable guidance, policy, regulation, and statutes." In addition to technological and economical factors, the system-of-interest (SoI) must be compatible, acceptable, and ultimately address the design of a system for the environment in terms of ecological, political, and social considerations.
Ecological considerations associated with system disposal or retirement are of prime importance. The most concerning problems associated with waste management include:
 Air Pollution and Control,
 Water Pollution and Control,
 Noise Pollution and Control,
 Radiation, and
 Solid Waste.
In the US, the Environmental Protection Agency (EPA) and the Occupational Safety and Health Administration (OSHA) govern disposal and retirement of commercial systems. Similar organizations perform this function in other countries. OSHA addresses hazardous materials under the 1910-119A List of Highly Hazardous Chemicals, Toxics, and Reactives (OSHA 2010). System disposal and retirement spans both commercial and government developed products and services. While both the commercial and government sectors have common goals, methods differ during the disposition of materials associated with military systems.
US DoD Directive 4160.21-M, Defense Material Disposition Manual (1997) outlines the requirements of the Federal Property Management Regulation (FPMR) and other laws and regulations as appropriate regarding the disposition of excess, surplus, and foreign excess personal property (FEPP). Military system disposal activities must be compliant with EPA and OSHA requirements.


Application to Product Systems
Product system retirement may include system disposal activities or preservation activities (e.g., mothballing) if there is a chance the system may be called upon for use at a later time.
Systems Engineering and Analysis has several chapters that discuss the topics of design for goals such as "green engineering," reliability, maintainability, logistics, supportability, producibility, disposability, and sustainability. Chapter 16 provides a succinct discussion of green engineering considerations and ecology-based manufacturing. Chapter 17 discusses life cycle costing and the inclusion of system disposal and retirement costs (Blanchard and Fabrycky 2011).
Some disposal of a system's components occurs during the system's operational life. This happens when the components fail and are replaced. As a result, the tasks and resources needed to remove them from the system need to be planned well before a demand for disposal exists.
Transportation of failed items, handling equipment, special training requirements for personnel, facilities, technical procedures, technical documentation updates, hazardous material (HAZMAT) remediation, all associated costs, and reclamation or salvage value for precious metals and recyclable components are important considerations during system planning. Phase-out and disposal planning addresses when disposal should take place, the economic feasibility of the disposal methods used, and what the effects on the inventory and support infrastructure, safety, environmental requirements, and impact to the environment will be (Blanchard 2010).
Disposal is the least efficient and least desirable alternative for the processing of waste material (Finlayson and Herdlick 2008).
The EPA collects information regarding the generation, management and final disposition of hazardous wastes regulated under the Resource Conservation and Recovery Act of 1976 (RCRA). EPA waste management regulations are codified at 40 C.F.R., parts 239-282. Regulations regarding management of hazardous wastes begin at 40 C.F.R. part 260. Most states have enacted laws and promulgated regulations that are at least as stringent as federal regulations.
Due to the extensive tracking of the life of hazardous waste, the overall process has become known as the "cradle-to-grave system". Stringent bookkeeping and reporting requirements have been levied on generators, transporters, and operators of treatment, storage, and disposal facilities that handle hazardous waste.
Unfortunately, disposability has a lower priority compared to other activities associated with product development. This is due to the fact that typically, the disposal process is viewed as an external activity to the entity that is in custody of the system at the time. Reasons behind this view include:
 There is no direct revenue associated with the disposal process and the majority of the cost associated with the disposal process is initially hidden.
 Typically, someone outside of SE performs the disposal activities. For example, neither a car manufacturer nor the car's first buyer may be concerned about a car's disposal since the car will usually be sold before disposal.
The European Union's Registration, Evaluation, Authorization, and Restriction of Chemicals (REACH) regulation requires manufacturers and importers of chemicals and products to register and disclose substances in products when specific thresholds and criteria are met (European Parliament 2007). The European Chemicals Agency (ECHA) manages REACH processes. Numerous substances will be added to the list of substances already restricted under European legislation; a new regulation emerged when the Restriction on Hazardous Substances (RoHS) in electrical and electronic equipment was adopted in 2003.
Requirements for substance use and availability are changing across the globe. Identifying the use of materials in the supply chain that may face restriction is an important part of system life management. System disposal and retirement requires upfront planning and the development of a disposal plan to manage the activities. An important consideration during system retirement is the proper planning required to update the facilities needed to support the system during retirement, as explained in the California Department of Transportation Systems Engineering


Guidebook (2005).
Disposal needs to account for environmental and personal risks associated with the decommissioning of a system and all hazardous materials involved. The decommissioning of a nuclear power plant is a prime example of hazardous material control and exemplifies the need for properly handling and transporting residual materials resulting from the retirement of certain systems.
The US Defense Logistics Agency (DLA) is the lead military agency responsible for providing guidance for worldwide reuse, recycling, and disposal of military products. A critical responsibility of the military services and defense agencies is demilitarization prior to disposal.

Application to Service Systems
An important consideration during service system retirement or disposal is the proper continuation of services for the consumers of the system. As an existing service system is decommissioned, a plan should be adopted to bring new systems online that operate in parallel with the existing system so that service interruption is kept to a minimum. This parallel operation needs to be carefully scheduled and can occur over a significant period of time.
Examples of parallel operation include phasing in new Air Traffic Control (ATC) systems (FAA 2006), the migration from analog television to new digital television modulation (FCC 2009), the transition to Internet protocol version 6 (IPv6), maintaining water handling systems, and maintaining large commercial transportation systems, such as rail and shipping vessels.
The Systems Engineering Guidebook for Intelligent Transportation Systems (ITS) provides planning guidance for the retirement and replacement of large transportation systems. Chapter 4.7 identifies several factors which can shorten the useful life of a transportation system and lead to early retirement, such as the lack of proper documentation, the lack of effective configuration management processes, and the lack of an adequate operations and maintenance budget (Caltrans, and USDOT 2005).

Application to Enterprises
The disposal and retirement of large enterprise systems requires a phased approach, with capital planning being implemented in stages. As in the case of service systems, an enterprise system's disposal and retirement require parallel operation of the replacement system along with the existing (older) system to prevent loss of functionality for the user.

Other Topics
See the OSHA standard (1996) and EPA (2010) website for references that provide listings of hazardous materials. See the DLA Disposal Services website [1] for disposal services sites and additional information on hazardous materials.

Practical Considerations
A prime objective of systems engineering is to design a product or service such that its components can be recycled after the system has been retired. The recycling process should not cause any detrimental effects to the environment.
One of the latest movements in the industry is green engineering. According to the EPA, green engineering is the design, commercialization, and use of processes and products that are technically and economically feasible while minimizing:
 the generation of pollutants at the source; and
 the risks to human health and the environment.
See Environmental Engineering for additional information.


References
Works Cited
Blanchard, B. S. 2010. Logistics Engineering and Management, 5th ed. Englewood Cliffs, NJ, USA: Prentice Hall, 341-342.
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research and Innovation and U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
DoD. 1997. Defense Materiel Disposition Manual. Arlington, VA, USA: US Department of Defense, DoD 4160.21
-M.
DLA. 2010. "Defense logistics agency disposition services." In Defense Logistics Agency (DLA)/U.S. Department of Defense [database online]. Battle Creek, MI, USA, accessed June 19 2010: 5. Available at: http://www.dtc.dla. mil.
ECHA. 2010. "European Chemicals Agency (ECHA)." In European Chemicals Agency (ECHA). Helsinki, Finland. Available at: http://echa.europa.edu/home_en.asp.
EPA. 2010. "Wastes In U.S. Environmental Protection Agency (EPA)." Washington, D.C., USA. Available at: http:/
/www.epa.gov/epawaste/index.htm.
European Parliament. 2007. Regulation (EC) no 1907/2006 of the European parliament and of the council of 18 December 2006 concerning the registration, evaluation, authorisation and restriction of chemicals (REACH), establishing a European chemicals agency, amending directive 1999/45/EC and repealing council regulation (EEC) no 793/93 and commission regulation (EC) no 1488/94 as well as council directive 76/769/EEC and commission directives 91/155/EEC, 93/67/EEC, 93/105/EC and 2000/21/EC. Official Journal of the European Union 29 (5): 136/3,136/280.
FAA. 2006. "Section 4.1" in "Systems Engineering Manual." Washington, DC, USA: US Federal Aviation Administration (FAA).
FCC. 2009. "Radio and Television Broadcast Rules." Washington, DC, USA: US Federal Communications Commission (FCC), 47 CFR Part 73, FCC Rule 09-19: 11299-11318.
Finlayson, B. and B. Herdlick. 2008. Systems Engineering of Deployed Systems. Baltimore, MD, USA: Johns Hopkins University: 28.
OSHA. 1996. "Hazardous Materials: Appendix A: List of Highly Hazardous Chemicals, Toxics and Reactives." Washington, DC, USA: Occupational Safety and Health Administration (OSHA)/U.S. Department of Labor (DoL), 1910.119(a).
Resource Conservation and Recovery Act of 1976, 42 U.S.C. §6901 et seq. (1976)

Primary References
Blanchard, B.S. and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice-Hall International series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research and Innovation and U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE),


INCOSE-TP-2003-002-03.2.2.
Jackson, S. 2007. "A Multidisciplinary Framework for Resilience to Disasters and Disruptions." Journal of Integrated Design and Process Science. 11(2).
OUSD(AT&L). 2011. "Logistics and Materiel Readiness On-line policies, procedures, and planning references." Arlington, VA, USA: Office of the Under Secretary of Defense for Acquisition, Transportation and Logistics (OUSD(AT&L). http://www.acq.osd.mil/log/.
Seacord, R.C., D. Plakosh, and G.A. Lewis. 2003. Modernizing Legacy Systems: Software Technologies, Engineering Processes, and Business Practices. Boston, MA, USA: Pearson Education.

Additional References
Blanchard, B. S. 2010. Logistics Engineering and Management, 5th ed. Englewood Cliffs, NJ, USA: Prentice Hall, 341-342.
Casetta, E. 2001. Transportation Systems Engineering: Theory and methods. New York, NY, USA: Kluwer Publishers Academic, Springer.
DAU. 2010. "Acquisition community connection (ACC): Where the DoD AT&L workforce meets to share knowledge." In Defense Acquisition University (DAU)/US Department of Defense (DoD). Ft. Belvoir, VA, USA, accessed August 5, 2010. https://acc.dau.mil/.
DLA. 2010. "Defense logistics agency disposition services." In Defense Logistics Agency (DLA)/U.S. Department of Defense [database online]. Battle Creek, MI, USA, accessed June 19 2010: 5. Available at: http://www.dtc.dla. mil.
ECHA. 2010. "European Chemicals Agency (ECHA)." In European Chemicals Agency (ECHA). Helsinki, Finland. Available at: http://echa.europa.edu/home_en.asp.
Elliot, T., K. Chen, and R.C. Swanekamp. 1998. "Section 6.5" in Standard Handbook of Powerplant Engineering.
New York, NY, USA: McGraw Hill.
EPA. 2010. "Wastes In U.S. Environmental Protection Agency (EPA)." Washington, D.C., USA. Available at: http:/
/www.epa.gov/epawaste/index.htm.
European Parliament. 2007. Regulation (EC) no 1907/2006 of the European parliament and of the council of 18 December 2006 concerning the registration, evaluation, authorisation and restriction of chemicals (REACH), establishing a European chemicals agency, amending directive 1999/45/EC and repealing council regulation (EEC) no 793/93 and commission regulation (EC) no 1488/94 as well as council directive 76/769/EEC and commission directives 91/155/EEC, 93/67/EEC, 93/105/EC and 2000/21/EC. Official Journal of the European Union 29 (5): 136/3,136/280.
FAA. 2006. "Section 4.1" in "Systems Engineering Manual." Washington, DC, USA: US Federal Aviation Administration (FAA).
FCC. 2009. "Radio and Television Broadcast Rules." Washington, DC, USA: US Federal Communications Commission (FCC), 47 CFR Part 73, FCC Rule 09-19: 11299-11318.
Finlayson, B. and B. Herdlick. 2008. Systems Engineering of Deployed Systems. Baltimore, MD, USA: Johns Hopkins University: 28.
FSA. 2010. "Template for 'System Retirement Plan' and 'System Disposal Plan'." In Federal Student Aid (FSA)/U.S. Department of Education (DoEd). Washington, DC, USA. Accessed August 5, 2010. Available at: http:/ / federalstudentaid.ed.gov/business/lcm.html.
IEEE 2005. IEEE Standard for Software Configuration Management Plans. New York, NY, USA: Institute of Electrical and Electronics Engineers (IEEE), IEEE 828.


Ihii, K., C.F. Eubanks, and P. Di Marco. 1994. "Design for Product Retirement and Material Life-Cycle." Materials & Design. 15(4): 225-33.
INCOSE. 2010. "In-service systems working group." San Diego, CA, USA: International Council on Systems Engineering (INCOSE).
INCOSE UK Chapter. 2010. Applying Systems Engineering to In-Service Systems: Supplementary Guidance to the INCOSE Systems Engineering Handbook, version 3.2, issue 1.0. Foresgate, UK: International Council on Systems Engineering (INCOSE) UK Chapter: 10, 13, 23.
Institute of Engineers Singapore. 2009. "Systems Engineering Body of Knowledge, provisional," version 2.0. Singapore: Institute of Engineers Singapore.
Mays, L. (ed). 2000. "Chapter 3" in Water Distribution Systems Handbook. New York, NY, USA: McGraw-Hill Book Company.
MDIT. 2008. System Maintenance Guidebook (SMG), version 1.1: A companion to the systems engineering methodology (SEM) of the state unified information technology environment (SUITE). MI, USA: Michigan Department of Information Technology (MDIT), DOE G 200: 38.
Minneapolis-St. Paul Chapter of SOLE. 2003. "Systems Engineering in Systems Deployment and Retirement, presented to INCOSE." Minneapolis-St. Paul, MN, USA: International Society of Logistics (SOLE), Minneapolis-St. Paul Chapter.
NAS. 2006. National Airspace System (NAS) System Engineering Manual, version 3.1 (volumes 1-3). Washington, D.C., USA: Air Traffic Organization (ATO)/U.S. Federal Aviation Administration (FAA), NAS SEM 3.1.
NASA. 2007. Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105, December 2007.
OSHA. 1996. "Hazardous Materials: Appendix A: List of Highly Hazardous Chemicals, Toxics and Reactives." Washington, DC, USA: Occupational Safety and Health Administration (OSHA)/U.S. Department of Labor (DoL), 1910.119(a).
Ryen, E. 2008. Overview of the Systems Engineering Process. Bismarck, ND, USA: North Dakota Department of Transportation (NDDOT).
SAE International. 2010. "Standards: Automotive--Maintenance and Aftermarket." Warrendale, PA, USA: Society of Automotive Engineers (SAE) International.
Schafer, D.L. 2003. "Keeping Pace With Technology Advances When Funding Resources Are Diminished." Paper presented at Auto Test Con. IEEE Systems Readiness Technology Conference, Anaheim, CA, USA: 584.
SOLE. 2009. "Applications Divisons." In The International Society of Logistics (SOLE). Hyattsville, MD, USA, accessed August 5, 2010. http://www.sole.org/appdiv.asp.

References
[1] http://www.dtc.dla.mil

Part 3d: Relevant Standards


Knowledge Area: Systems Engineering Standards

Systems Engineering Standards

Contents of this Knowledge Area
 Why Standards? (Garry Roedler) (Bill Bearden, David Endler, and Mike Yokell)
 Systems Engineering Related Standards Landscape (Garry Roedler) (Bill Bearden, David Endler, and Mike Yokell)
 Alignment and Comparison of Systems Engineering Standards (Garry Roedler) (William Bearden, David Endler, and Mike Yokell)
 Application of Systems Engineering Standards (Garry Roedler) (William Bearden, David Endler, and Mike Yokell)
 Lead Author:
 Garry Roedler
 Contributing Authors:
 Bill Bearden, David Endler, and Mike Yokell
-
This knowledge area (KA) focuses on the standards and key references (hereafter referred to as standards) that are relevant to systems engineering. This KA examines the importance of standards, the types of standards, some of the key standards, the alignment efforts to achieve a consistent set of standards, and the suitable application of these standards. Note that many of these standards have been used as references throughout Part 3.

Topics
Each part of the SEBoK is divided into KA's, which are groupings of information with a related theme. The KA's, in turn, are divided into topics. This KA contains the following topics:
 Why Standards?
 Systems Engineering Related Standards Landscape
 Alignment and Comparison of the Standards
 Application of Systems Engineering Standards
See the article Matrix of Implementation Examples for a mapping of case studies and vignettes included in Part 7 to topics covered in Part 3.

References
None.


Why Standards?

 Lead Author:
 Garry Roedler
 Contributing Authors:
 Bill Bearden, David Endler, and Mike Yokell
-
There are many standards and guides across the industry that are related to Systems Engineering. A common question that comes up when considering the use of standards and guides is "Why Standardize?." This section will take a look at this question. This knowledge area, and particularly this article, will view standards as including formal documents that are developed by a Standards Development Organization (such as ISO or IEEE), deFacto standards that are generally accepted works, bodies of knowledge, and key guides that provide a consensus view. A list of the types of standards is provided in Systems Engineering Related Standards Landscape, Standards Taxonomies and Types of Standards, Table 1.

Why Standardize? The need and challenges for standards in SE
Standardization in engineering can help ensure quality, consistency, safety, efficiency, and effectiveness for products and projects throughout the life cycles, leading to improved communication, reduced errors, and faster cycle times. However, although there are many benefits from standardization, there are also some limitations or hinderances that can come from standardization. Table 1 provides a look at the Pros and Cons of standardization. For most projects and organizations, the Pros tend to outweigh the Cons. The use of the term standardization in this KA includes the definition, adaptation, tailoring, usage, assessment and improvement of standards.

Table 1. Pros and Cons of SE Standardization (G. Roedler, Used with Permission)
Focus	Pros	Cons

Timing &	Can help incorporate broad lessons learned and proven practices. Can  Potential immaturity of a topic for standardization; i.e.,
Effectivness	help ensure technologies are not only effective, but also secure and	standard can be developed too early. It can take a long safe for users.	time to create an effective standard; it may continue to
trail the focus methods, technology, etc.

Innovation	Can provide a baseline for tool development, methods and	Can somewhat stifle innovation when new approaches applications allowing engineers to focus on innovation for new	 are needed due to novel situations.
solutions, rather than reinventing the wheel for performing basic tasks on projects. As innovation occurs, the standardization generally helps to spread the knowledge.
Quality and	Standardized processes and system elements can help ensure that	In some cases, standardized processes can challenge Consistency	products and systems are built consistently, reducing variations and	responsiveness or agility.
improving overall quality. Process standards aim to help ensure consistency in the performance of processes and their outputs, regardless of the location or personnel involved.
Communication	Can help converge practices, which aids communication,	Can drive communication paths or workflows that are & Collaboration	teaming/collaboration, knowledge management. Standardized	not optimal, if not properly tailored for the project or
processes, practices, formats, symbols, and conventions can facilitate  organizational situation. clear and efficient communication among engineers and other
stakeholders.



Efficiency & Productivity






Knowledge Management

Standardized designs and processes can promote faster product development cycles, as engineers can reuse existing, pre-approved elements and methods. Streamlined processes generally improve efficiency by reducing waste: time and resources. Time and resources then can be focused on the solution or business requirements rather than on how to perform the engineering.

Standards can help to document lessons learned for processes and products. For engineering, standards can help provide the memory that could otherwise be lost. When people leave an organization or project, they take their knowledge with them. So, these entities need to capture the "memory". Documenting knowledge assets using standards or standard references can improve searches for specific information.

In cases with high levels of uncertainty and/or change, agility in the engineering processes and design can be needed. This can be more difficult if appropriate tailoring of the standards is not proactively considered. Also, all projects are not the same. So, if tailoring for the project specific characteristics is not done, it can lead to inefficiencies.
When there is a high likelihood of change (technology, processes, environments, etc.), especially in short intervals, standards as a means of capturing the "memory" can lead to obsolescence of the knowledge assets shortly after the documentation.

Costs	Standardization can lead to lower material costs for product lines and designs with more stability. Standardization can also help reduce the cost of training, tools, and knowledge transfer.




Scalability	Easier to scale engineering processes and services, as common practices and tools can be reused across multiple projects
Interoperability	Standardization can help ensure that different systems and elements can work together, promoting interoperability and reducing integration challenges.

When there is a high likelihood of change, standardization will not necessarily reduce the cost of materials, training, etc. If the change has not been accounted for due to the standardization, there can be an additional level of resistance to overcome.
Adaptability becomes more important.



Considerations for standardization
Implementing standards with a full life cycle approach:
When an organization or project implements a standard, it should be a full life cycle approach with respect to the standard in order to gain the greatest benefit. This includes the evaluation of alternative standards, selection, adaptation or tailoring, assessment of results, and improvement actions. ISO/IEC/IEEE 24748-1 and ISO/IEC/IEEE 24748-2 provide guidance on life cycle management, process tailoring, and other life cycle process topics that can help in the implementation of standards.

Assessing the readiness of a technical topic for the definition or usage of standards:
For the definition of a new topic for standardization, it is good to perform a study of the readiness for standards based on the maturity of the concepts, convergence of the principles and theory, and acceptance of proven practices. The study includes an assessment of the industry consensus on the topic. It is also useful to assess the relevance and maturity of a standard with respect to the project application of the topic of the standard. For example, if the project is using a technology covered by a standard, but the project's implementation of the technology is beyond that of the standard, then it could be an impediment to try to use the standard.

Agility and standardization:
These two things are not necessarily counter to each other. Engineering organizations or projects can tailor and adapt the standards, such as ISO/IEC/IEC 15288, to help define their processes and approaches considering agility necessary for situations with more uncertainty and likelihood for change. A paper from the NDIA SED and INCOSE titled "ISO/IEC/IEEE 15288 Meets Lean Agile." details the use of 15288 in an agile approach in the defense environment. However, much of the content applies to projects and systems in any environment. It


describes the use of 15288 in a lean agile approach focusing on lean agile principles, such as customer centricity, systems thinking, multiple horizons of planning, assuming variability and preserving options, iterative development with incremental deliveries and rapid feedback loops, data-driven decisions, decentralized decisions, and more. ISO/IEC/IEEE 24748-1 and ISO/IEC/IEEE 24748-2 provide guidance on life cycle management, process tailoring, and other life cycle process topics that can help in adapting standards for project specific needs, such as agility.

The balance between standardization and project specific needs:
As pointed out in the preceding subsections and Table 1, for the standardization to be most effective, there is usually a need to determine the project specific needs and tailor the standardized elements (process, design, tools, methods, etc.) to best meet the needs of the project. There is no one-size fits all for all projects, and typically, copy and paste or boilerplates don't work as the context and many variables are different. However, it is also important to avoid the "not invented here" mindset for the use standards. Finally, it is important, yet even more challenging, to find the right balance when many organizations are involved in the project.

Perspectives from key stakeholders
The following are a couple quotes regarding the importance and use of standards from ISO and IEEE, two key engineering standards development organizations (SDOs).
Per ISO:
Standards ensure consistency of essential features of goods and services, such as quality, ecology, safety, economy, reliability, compatibility, interoperability, efficiency and effectiveness.
Standards codify ... technology and facilitate its transfer. Standards are therefore an invaluable source of knowledge.
(https:/	/	www.	iso.	org/	sites/	ConsumersStandards/	1_standards. html#:~:text=How%20do%20standards%20help?,are%20aligned%20in%20this%20way. 20250331)
Per IEEE:
Standards help fuel compatibility and interoperability and simplifies product development, and speeds time-to-market. Standards also make it easier to understand and compare competing products. As standards are globally adopted and applied in many markets, they also fuel international trade.
(https:/ / standards. ieee. org/ beyond-standards/ what-are-standards-why-are-they-important/ #:~:text=This%20helps%20fuel%20compatibility%20and,they%20also%20fuel%20international%20trade. 20250331)
And finally, a quote the sums up the importance from a government project and contractor perspective:
"Technical standards provide the corporate process memory needed for a disciplined systems engineering approach and help ensure that the government and its contractors understand the critical processes and practices necessary to take a system from design to production, and through sustainment." (Welby, S. 2013)

Evolution of SE standards
Systems engineering related standards have evolved over the past few decades as the SE discipline has matured and evolved. These references have continued to incorporate the lessons learned and changes in approaches and methods to ensure they reflect current, proven practices. Along this evolution path, there has been collaboration to help align the references across the industry associations and standards development organizations (more is discussed on this in Alignment and Comparison of Systems Engineering Standards. Figure 1 provides a graphical view of the evolution of a subset of the key SE related standards.




Until the early 1990's, MIL-STD-499 (initially released in 1969) and subsequent revisions were the first and only SE standards developed. In 1994, it transitioned to an industry standard, EIA/IS 632. Around the same time, INCOSE started development of its Systems Engineering Handbook (SEH). Figure 1 shows the ongoing evolution of these documents, as well as the publication of ISO/IEC 15288, which later also became a joint standard with the IEEE. With the dramatic uptake of 15288, the latest revision of ANSI/EIA 632 was fully aligned with 15288 with a scope change and published as SAE 1001. Finally, the SEBoK, started its development in 2009 and was first published in 2012, as a broader reference that serves as a guide to the SE Body of Knowledge.

References
Works Cited
Roedler, G. 2023. "SE Standards and Guidance - Revisions and Trends." International Council on Systems Engineering, Boston, MA, USA.
https:/	/	www.	iso.	org/	sites/	ConsumersStandards/	1_standards. html#:~:text=How%20do%20standards%20help?,are%20aligned%20in%20this%20way. 20250331
https:/	/	standards.	ieee.	org/	beyond-standards/	what-are-standards-why-are-they-important/ #:~:text=This%20helps%20fuel%20compatibility%20and,they%20also%20fuel%20international%20trade.
20250331
Welby, S. 2013. Guest Editorial, M&S Journal, Vol. 8, No. 1 (Spring 2013), Modeling and Simulation Coordination Office, Alexandria, VA (http://www.dtic.mil/ndia/2013system/TH15992_Konwin.pdf, chart 3).
NDIA. 2025. "ISO/IEC/IEEE 15288 Meets Lean Agile: Integrating Lean and Agile Principles with Systems Engineering Processes for Modern Defense Acquisition". National Defense Industrial Association (NDIA), Arlington, VA. May 2025.


INCOSE. 2023. INCOSE Systems Engineering Handbook 5th Edition. International Council on Systems Engineering. Hoboken, NJ, USA: John Wiley & Sons. INCOSE SE Handbook.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
ISO/IEC/IEEE. 2024. "Systems and Software Engineering -- Life Cycle Management - Part 1: Guidelines for life cycle management,". Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEC/IEEE. 2024. Systems and Software Engineering -- Life Cycle Management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 24748-2:2024.
SAE. 2018. Integrated Project Processes for Engineering a System. Warrendale, PA, USA: SAE International. SAE 1001.

Primary References
Roedler, G. 2023. " SE Standards and Guidance - Revisions and Trends." International Council on Systems Engineering, Boston, MA, USA.
NDIA. 2025. "ISO/IEC/IEEE 15288 Meets Lean Agile: Integrating Lean and Agile Principles with Systems Engineering Processes for Modern Defense Acquisition".
Roedler, G. 2015. "Evolution of SE Standards and Practices - ISO/IEC/IEEE 15288 Based Harmonization." National Defense Industrial Association (NDIA) Conference, Springfield, VA, USA.
Roedler, G; Shaw, B.; Davis, D. 2015. "Extending Industry Standards to Meet the Systems Engineering Needs of Defense Programs." Defense Standardization Program Journal, Arlington, VA. March 2015.
INCOSE. 2023. INCOSE Systems Engineering Handbook 5th Edition. International Council on Systems Engineering. Hoboken, NJ, USA: John Wiley & Sons. INCOSE SE Handbook.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288: 2023.
ISO/IEC/IEEE. 2024. "Systems and Software Engineering -- Life Cycle Management - Part 1: Guidelines for life cycle management,". Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEC/IEEE. 2024. Systems and Software Engineering -- Life Cycle Management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 24748-2:2024.
ISO/IEC/IEEE. 2017. Systems and Software Engineering - Vocabulary (SEVocab). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2017.
SAE. 2018. Integrated Project Processes for Engineering a System. Warrendale, PA, USA: SAE International. SAE 1001.


Additional References
None.

Systems Engineering Related Standards Landscape

 Lead Author:
 Garry Roedler
 Contributing Authors:
 Bill Bearden, David Endler, and Mike Yokell
-
There are a multitude of standards across a number of standards development organizations (SDOs) that are related to systems engineering and systems domains. This topic examines the types of standards and provides a summary of the relevant standards for systems engineering (SE).

Standards Taxonomies and Types of Standards
There are many types of standards that focus on different aspects of SE. Table 1 provides the types of the current standards and a description of each type.

Table 1. Types of Systems Engineering Standards. (SEBoK Original)
Standard Type	Description of Type

Concepts and Terminology	  Defines the terminology and describes the concepts of a specific domain.

Process	 Defines a specific process or set of processes, giving normative requirements for the essential elements of the process or processes.
 It can give guidance to the requirements.

Requirements	  Defines the requirements for something.
 Most often used for actions, activities, or practices and not objects (see specifications).

Procedure (Practice,	 Defines instructions, approach, or requirements on how to do something. Activity)	 Sometimes a description of best practices.
Application Guides /	 Defines guidelines or provides interpretation of a published standard. Guidance
Management System	  Defines requirements for management of a specific focus area.

Specification	  Defines, describes, or identifies something precisely, including its requirements.
 Usually defines requirements, design, and functionality of a product, system, or project and is normative.

Artifact Description	  Defines the form, attributes, content requirements, or properties of an artifact.

Reference Model	 Defines an abstract or conceptual framework that provides a structured means to understand and communicate a system, architecture or element.
 Often used as a mechanism to gain commonality and interoperability.

Process Reference Model	 Defines a collection of processes necessary and sufficient to achieve a nominated business outcome. (PRM)
Process Assessment Model	 Defines requirements and guidance for assessing attributes of nominated processes or attributes of a nominated (PAM)		collection of processes.


Guide to Body of Knowledge  Defines a collection and description of the current knowledge sources in a domain, or a guide to knowledge (BOK)	sources that comprise the body of knowledge.

Additionally, a taxonomy of the SE related standards can help to understand the available set of standards. A standards taxonomy is defined as an orderly classification of standards according to their attributes and relationships. Figure 1 provides an example of a taxonomy for the SE related standards.


Description of the SE Standards Categories Presented in the Sample Taxonomy
Figure 1 illustrates the focus and level of detail for many of the SE related standards. This figure shows that there are different purposes or objectives for these knowledge assets. The following provides a brief description of the objective for each category in the sample taxonomy. Each of the categories provides specific utility to the SE stakeholders.
Foundation - Vocabulary: This provides a common set of terminology and definitions from across a wide range of standards and references for systems engineering. It includes the vocabulary from ISO/IEC JTC1/SC7, IEEE, INCOSE, and PMI. The vocabulary is both published in ISO/IEC/IEEE 24765, Vocabulary and in an online resource called SEVOCAB at https://pascal.computer.org/.
Foundation - Body of Knowledge: This includes resources that are either published as bodies of knowledge for systems engineering or related areas or are recognized consensus references that cover the breadth of systems engineering. The SEBoK is the sole body of knowledge for SE. The INCOSE SE Handbook covers the breadth of SE and is the key resource used for SE Certification.


Life Cycle Processes and Concepts: This includes the top-level standards and references that identify and define the system life cycle processes and the concepts that are essential for understanding, planning, and executing system life cycles and processes.
Assessment / Governance: This includes standards that are focused on the assessment or governance of processes, products, or other concerns in the engineering of systems or their life cycles.
Process Elaborations: This includes standards that focus specifically on one or more processes. These standards provide lower level details about the definitions, application, and other considerations that aid the planning and execution of the processes. The processes trace to the system life cycle processes identified in ISO/IEC/IEEE 15288, the INCOSE SE Handbook, and/or the SEBoK.
Application Guides: This includes the standards and references that provide key insights and guidance for the other standards and help users to understand the potential considerations for planning and executing the standards. Some of these standards and guides provide useful elaborations or notes regarding specific information or requirements in the standards or topics they refer to, such as ISO/IEC/IEEE 24748-2, A guide for the application of ISO/IEC/IEEE 15288.
Artifact Descriptions: This includes descriptions and/or requirements for specific artifacts (or information items) related to the system life cycle processes.
Tools: This includes standards that provide information or requirements related to tools that are applicable to the system life cycle processes.
Other Guidance: This includes any guidance that is outside of the scope of the other categories in the taxonomy.

Systems Engineering Related Standards
Summary of Systems Engineering Related Standards
Table 2 contains a partial list of SE related standards. This table does not include all SE related standards, as there are many are focused on a specific domain, sector, or user group (e.g., it does not include standards from a specific government agenda). The table does include standards that are considered to be widely applicable to systems engineering and systems life cycle management system life cycle processes, such as ISO/IEC/IEEE 15288 (2023). A link to the official abstract or information page has been provided in the first column for each standard.

Table 2. Summary of Systems Engineering Standards and Guides. (SEBoK Original)
Standard or Guide	Title
ISO/IEC/IEEE 15288 [1]	System life cycle processes
SEBoK	Guide to the Systems Engineering Body of Knowledge (SEBoK)


INCOSE SE Handbook 5th Ed [1]


INCOSE Systems Engineering Handbook (5th Edition)


SAE 1001 [1]	Integrated Project Processes for Engineering a System (replaced ANSI/EIA 632) NATO AAP-48 [4]	NATO System Life Cycle Processes
SE Vision 2035 (INCOSE) [2]	Systems Engineering Vision 2035: Engineering Solutions for a Better World ISO/IEC/IEEE 15026-1 [3]	Systems and software assurance concepts and vocabulary
ISO/IEC/IEEE 15026-2 [4]	Assurance case
ISO/IEC/IEEE 15026-3 [5]	System integrity levels



ISO/IEC/IEEE 15026-4 [6]
ISO/IEC/IEEE 15289 [5]
ISO/IEC/IEEE 15939 [7]
ISO/IEC/IEEE 16085 [8]
ISO/IEC/IEEE 16326 [4]
ISO/IEC/IEEE 21839 [9]
ISO/IEC/IEEE 21840 [10]
ISO/IEC/IEEE 21841 [11]
ISO/IEC/IEEE 24641 [11]
ISO/IEC/IEEE 24748-1 [2]
ISO/IEC/IEEE 24748-2 [12]
ISO/IEC/IEEE 24748-4 [13]
ISO/IEC/IEEE 24748-6 [14]
ISO/IEC/IEEE 24748-7 [15]
ISO/IEC/IEEE 24748-8 [16]
ISO/IEC/IEEE 24748-9 [17]
ISO/IEC/IEEE 24748-10 [18]
ISO/IEC/IEEE 24765 [19]
ISO/IEC/IEEE 26550 [20]
ISO/IEC/IEEE 26580 [21]
ISO/IEC/IEEE 29148 [22]
ISO/IEC/IEEE 42010 [23]
ISO/IEC/IEEE 42020 [24]
ISO/IEC/IEEE 42024 [25]
ISO/IEC/IEEE 42030 [26]
ISO/IEC/IEEE 42042 [27]
ISO/IEC 29110 [28]
ISO/IEC TS 33060 [29]
ISO 19450 [30]
ISO 9001 [31]
ISO 10007 [32]
ISO 10303-233 [33]

Assurance in the life cycle

Content of life-cycle information items (documentation) Measurement process
Risk management Project management
System of systems (SoS) considerations in life cycle stages of a system

Guidelines for the utilization of ISO/IEC/IEEE 15288 in the context of system of systems (SoS) Taxonomy of system of systems (SoS)
Methods and tools for model-based systems and software engineering Guidelines for life cycle management
Guidelines for the application of ISO/IEC/IEEE 15288 Systems engineering management planning
System and software integration

Application of systems engineering on defense programs (previously IEEE 15288.1) Technical reviews and audits on defense programs (previously IEEE 15288.2)
Application of system and software life cycle processes in epidemic prevention and control systems Guidelines for systems engineering agility
Systems and software engineering - Vocabulary

Reference model for product line engineering and management

Methods and tools for the feature-based approach to software and systems product line engineering Requirements engineering
Architecture description Architecture processes Architecture fundamentals Architecture evaluation framework Reference architectures
Standards and guides for very small entities (VSEs) (Multi-part set) Process assessment model for system life cycle processes
Object Process Methodology (OPM)
Quality Management Systems - Requirements Guidelines for configuration management Product data representation and exchange
Part 233: Application protocol: Systems engineering



ISO 15704 [34]
ISO 19439 [35]
ISO 31000 [36]
IEC 31010 [37]
ANSI/AIAA G-043B [38]
ANSI/EIA-649C (SAE) [2] CMMI- Dev V3.0 [39] ECSS-E-ST-10C [40]
ECSS-E-ST-10-02 [41]
ECSS-E-ST-10-06 [42]
ECSS-E-ST-10-24 [43]
ECSS-M-ST-10 [44]
ECSS-M-ST-40 [45]
ECSS-M-ST-60 [46]
ECSS-M-ST-80 [47]
ECSS-M-00-03 [48] EIA 748D (SAE) [49]

Requirements for Enterprise - Reference Architectures and Methodologies Framework for Enterprise Modeling
Risk management - Guidelines Risk assessment techniques
Guide to the Preparation of Operational Concept Documents National Consensus Standard for Configuration Management CMMI(r) for Development V3.0
Systems Engineering General Requirements Space Engineering - Verification
Space Engineering - Technical Requirements Specification Space Engineering - Interface Control
Space Project Management - Project Planning and Implementation

Space Project Management - Configuration and Information Management Space Project Management - Cost and Schedule Management
Space Project Management - Risk Management

Space Project Management - Risk Management Earned Value Management System

CEN EN 9277	Programme management - Guide for the management of Systems Engineering

IEC 62853 [50]
IEEE 828 [51]
NIST SP 800-160 Vol 1 [52]

NIST SP 800-160 Vol 2 [53] OMG SysML TM V2.0 [54]


Open systems dependability

Configuration Management in Systems and Software Engineering

Systems Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems
Developing Cyber-Resilient Systems: A Systems Security Engineering Approach OMG Systems Modeling Language


Practical Considerations
Key pitfalls and good practices related to systems engineering standards are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in the selection and use of SE standards are provided in Table 3.


Table 3. Pitfalls in Using Systems Engineering Standards. (SEBoK Original)
Pitfall Name	Pitfall Description

Turnkey Process Provision	  Expecting the standard to fully provide your SE processes without any elaboration or tailoring.

No Need for Product	 Expecting that the standard can be used without any functional or domain knowledge since the standard is the Knowledge		collective industry knowledge.
No Process Integration	  Lack of integrating the standards requirements with the organization or project processes.


Good Practices
Some good practices as gathered from the references are provided in Table 4.

Table 4. Good Practices in Using Systems Engineering Standards. (SEBoK Original)
Good Practice Name	Good Practice Description

Tailor for Business Needs   Tailor the standard within conformance requirements to best meet business needs.

Integration into Project	  Requirements of the standard should be integrated into the project via processes or product/service requirements.


References
Works Cited
Roedler, G. 2010. "An Overview of ISO/IEC/IEEE 15288, System Life Cycle Processes." Proceedings of the 4th Asian Pacific Council on Systems Engineering (APCOSE) Conference, 4-6 October 2010, Keelung, Taiwan.
Roedler, G. 2023. " SE Standards and Guidance - Revisions and Trends." International Council on Systems Engineering, Boston, MA, USA.
Roedler, G. 2011. "Towards Integrated Systems and Software Engineering Standards." National Defense Industrial Association (NDIA) Conference, San Diego, CA, USA.
Roedler, G. 2015. "Evolution of SE Standards and Practices - ISO/IEC/IEEE 15288 Based Harmonization." National Defense Industrial Association (NDIA) Conference, Springfield, VA, USA.

Primary References
INCOSE. 2023. INCOSE Systems Engineering Handbook 5th Edition. International Council on Systems Engineering. Hoboken, NJ, USA: John Wiley & Sons. INCOSE SE Handbook.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288: 2023.
ISO/IEC/IEEE. 2024. "Part 1: Guidelines for life cycle management," in Systems and software engineering--life cycle management.. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEC/IEEE. 2024. Systems and Software Engineering -- Life Cycle Management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 24748-2:2024.


ISO/IEC/IEEE. 2017. Systems and Software Engineering - Vocabulary (SEVocab). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2017.
NATO. 2022. NATO System Life Cycle Processes. Brussels, Belgium: North Atlantic Treaty Organization (NATO). NATO AAP-48.
SAE. 2018. Integrated Project Processes for Engineering a System. Warrendale, PA, USA: SAE International. SAE 1001.
Roedler, G. 2010. An Overview of ISO/IEC/IEEE 15288, System Life Cycle Processes. Proceedings of the 4th Asian Pacific Council on Systems Engineering (APCOSE) Conference, 4-6 October 2010, Keelung, Taiwan.
Roedler, G. 2023. " SE Standards and Guidance - Revisions and Trends." International Council on Systems Engineering, Boston, MA, USA.
Roedler, G. 2011. "Towards Integrated Systems and Software Engineering Standards." National Defense Industrial Association (NDIA) Conference, San Diego, CA, USA.
Roedler, G. 2015. "Evolution of SE Standards and Practices - ISO/IEC/IEEE 15288 Based Harmonization." National Defense Industrial Association (NDIA) Conference, Springfield, VA, USA.

Additional References
None.

References
[1] https://www.sae.org/standards/content/sae1001/
[2] https://www.incose.org/publications/se-vision-2035
[3] https://www.iso.org/standard/89808.html
[4] https://www.iso.org/standard/80625.html
[5] https://www.iso.org/standard/84444.html
[6] https://www.iso.org/standard/74396.html
[7] https://www.iso.org/standard/71197.html
[8] https://www.iso.org/standard/74371.html
[9] https://www.iso.org/standard/91120.html
[10] https://www.iso.org/standard/71956.html
[11] https://www.iso.org/standard/79111.html
[12] https://www.iso.org/standard/84661.html
[13] https://www.iso.org/standard/56887.html
[14] https://www.iso.org/standard/81563.html
[15] https://www.iso.org/standard/90139.html
[16] https://www.iso.org/standard/91563.html
[17] https://www.iso.org/standard/82474.html
[18] https://www.iso.org/standard/90086.html
[19] https://www.iso.org/standard/71952.html
[20] https://www.iso.org/standard/69529.html
[21] https://www.iso.org/standard/43139.html
[22] https://www.iso.org/standard/72089.html
[23] https://www.iso.org/standard/74393.html
[24] https://www.iso.org/standard/68982.html
[25] https://www.iso.org/standard/87510.html
[26] https://www.iso.org/standard/73436.html
[27] https://www.iso.org/standard/87310.html
[28] https://www.iso.org/standard/82669.html
[29] https://www.iso.org/standard/87701.html
[30] https://www.iso.org/standard/84612.html
[31] https://www.iso.org/standard/62085.html
[32] https://www.iso.org/standard/70400.html


[33] https://www.iso.org/standard/55257.html
[34] https://www.iso.org/standard/71890.html
[35] https://www.iso.org/standard/33833.html
[36] https://www.iso.org/standard/65694.html
[37] https://www.iso.org/standard/72140.html
[38] https://arc.aiaa.org/doi/book/10.2514/4.105487
[39] https://cmmiinstitute.com/cmmi/intro
[40] https://ecss.nl/standard/ecss-e-st-10c-rev-1-system-engineering-general-requirements-15-february-2017/
[41] https://ecss.nl/standard/ecss-e-st-10-02c-rev-1-verification-1-february-2018/
[42] https://ecss.nl/standard/ecss-e-st-10-06c-technical-requirements-specification/
[43] https://ecss.nl/standard/ecss-e-st-10-24c-rev-1-interface-management-15-november-2024/
[44] https://ecss.nl/standard/ecss-m-st-10c-rev-1-project-planning-and-implementation/
[45] https://ecss.nl/standard/ecss-m-st-40c-rev-1-configuration-and-information-management/
[46] https://ecss.nl/standard/ecss-m-st-60c-cost-and-schedule-management/
[47] https://ecss.nl/standard/ecss-m-st-80c-risk-management/
[48] http://www.everyspec.com/ESA/ecss-m-00-03a_2569/
[49] https://www.sae.org/standards/content/eia748d/
[50] https://webstore.iec.ch/en/publication/26367
[51] https://standards.ieee.org/ieee/828/5367/
[52] https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final
[53] https://csrc.nist.gov/pubs/sp/800/160/v2/r1/final
[54] https://www.omgsysml.org/


Alignment and Comparison of Systems Engineering Standards


 Lead Author:
 Garry Roedler
 Contributing Authors:
 William Bearden, David Endler, and Mike Yokell
-
Over the past two decades, standards development organizations (SDOs) and other industry associations have been working collaboratively to align the systems engineering (SE) and software engineering (SwE) standards. The objective is to have a set of standards that can easily be used concurrently within both engineering disciplines, and eventually throughout all engineering disciplines, with common terminology and concepts.

Problem Statement
Previously, SE and SwE standards used different terminology, process sets, process structures, levels of prescription, and audiences. These differences have been both between systems and software, and to some extent, within each. The problem has been exacerbated, in whole or part, by competing standards (Roedler 2010). Additionally, new challenges emerged, such as agile, model-based, and digital approaches, as well as new technologies as the discipline continued to evolve.
If alignment efforts do not have the commitment from all of the stakeholders, especially the SDOs, it can further drive proliferation of standards, as is indicated in Figure 1.





Root Cause
The root causes of this problem include (Roedler 2010):
 Culture - Concepts such as "we're different," "not invented here," etc. Culture change is complicated by the vast number of changes influencing engineering teams and environments today.
 Organizational - Structures with different SDOs, teams, committees, etc. This is further challenged by changes in
team structures as agile approaches became more common. And different teams within a single organization can be implementing very different norms as the organization transitions.
 Competition - Many SDOs exist. Each SDO is motivated to have its own set of effective standards that
contribute to revenue. From the perspective of other stakeholders, competition has driven significant variation in new approaches, moving away from consensus, as competing organizations, tool vendors, and consultants try to promote what they provide as differentiating for success in the industry. All of this has driven proliferation of standards over the years.
 Domains - A focused, narrow view often doesn't look beyond the domain for commonality.

Impact
The impact of this problem includes the following (Roedler 2010):
 Less effective or efficient processes that are not focused on leveraging commonalities or lessons learned from a wider base of practitioners. This causes redundancy and has resulted in incompatibilities and inconsistencies between the standards making it difficult to use them concurrently.
 Less effective solutions that are not focused on a common approach to solve a problem or need.
 Obstacles for communicating (at all levels), working in integrated teams, and leveraging resources.
 Stove-piping due to the incompatibilities and inconsistencies of and lack of leveraging commonalities.


Objective of Alignment
The objective is to make the standards more usable together by achieving the following (Roedler 2010):
 common vocabulary
 common concepts that account for differences such as domains
 single, integrated process set
 single process structure
 jointly planned level of prescription
 suitability across multiple audiences
 inclusion of considerations in a wide range of domains and applications
 inclusion of guidance for tailoring and adaptation to account for project specific needs and differences

Alignment of Systems Engineering Standards
Approach
A collaborative effort has been in place for the past two decades that includes ISO/IEC JTC1/SC7 (Information Technology, Systems and Software Engineering), the IEEE Computer Society, the International Council on Systems Engineering (INCOSE), and others. A collaborative process is being used to align the standards. This process is built around a foundational set of vocabulary, process definition conventions, and life cycle management concepts provided in ISO/IEC/IEEE 24765 (Vocabulary), ISO/IEC/IEEE 24774 (Specification for process description), and ISO/IEC/IEEE 24748-1 (Guide to Life Cycle Management), respectively. At the heart of the approach is the alignment of ISO/IEC/IEEE 15288 (System life cycle processes) and ISO/IEC/IEEE 12207 (Software life cycle processes), which provide the top-level process framework for life cycle management of systems and software. This enables concurrent and consistent use of the standards to support both systems and software life cycle management on a single project. The approach includes the development or revision of a set of lower level supporting standards and technical reports for elaboration of specific processes, description of practices for specific purposes (e.g., systems/software assurance), description of artifacts, and guidance for the application of the standards.

Past Accomplishments
INCOSE, IEEE, ISO, and other SDOs and industry associations have collaborated to align the key SE related standards and resources to be consistent and to manage their evolution to enable concurrent usage. Figure 2 shows ISO/IEC/IEEE 15288 is at the center of this Co-evolution model (Roedler 2023). This is due to it serving as the initial basis for leveraging terminology and concepts as a baseline. As part of this alignment effort, INCOSE adopted the ISO/IEC/IEEE 15288 process set, definitions, and terminology for shaping the system life cycle process information in the INCOSE SE Handbook in 2006. As the Systems Engineering Body of Knowledge (SEBoK) started its development in 2009, the project team also adopted ISO/IEC/IEEE 15288 and the INCOSE SE Handbook as key resources for guiding its content. Each of these resources have their unique purposes and scope, but have found utility in aligning. Over time the three resources, shown as a set of three key resources in the middle of the figure, have reached a point where each influences the other. In turn, these resources have been a catalyst for alignment of the other SE related documents shown.
As part of the alignment effort, ISO/IEC JTC1/SC7 formed a Life Cycle Process Harmonization Advisory Group that evaluated the standards for systems and software engineering. The objective of the group was to provide a set of recommendations for further harmonization of the industry standards. Specifically, its charter included:
 Perform an architectural analysis and recommend a framework for an integrated set of process standards in software and systems domains.
 Making recommendations regarding the future content, structure, and relationships of ISO/IEC/IEEE 12207, ISO/IEC/IEEE 15288 and their guides, as well as other related SC7 documents.


The result of this work has been a well aligned set of system and software standards, as shown in the Taxonomy of SE Related Standards figure in the Systems Engineering Related Standards Landscapearticle.


Current Efforts
The industry continues to harmonize SE related standards and references. The collaboration has grown to include the work of the organizations and projects shown in Figures 2 and 3. These organizations are working towards the goal of completing a complementary and supplementary set of systems engineering resources that use the same terminology, principles, concepts, practices, and processes and can be used concurrently without issues.
There are some current challenges that need to be considered as the SE standards continues to evolve. These include:
 Standards have a life cycle - development, publication, review, revision, withdrawal. Where the standards are in their life cycle influences how easily they can adapt to alignment efforts.
 It is hard to achieve commonality, since it is not always easy to determine where to start the harmonization. That is, which standards become the basis for the alignment. This determines what is impacted by changes.
 After more than two decades of harmonization efforts, the industry is still struggling with standards proliferation.
 Emerging topics are not necessarily in line with the core or existing standards.
These challenges will continue to be considered and addressed to form the best set of technical references possible.





Practical Considerations
Key pitfalls and good practices related to systems engineering standards are described in the Systems Engineering Related Standards Landscape article.
There are also instances in which standards groups for program management, safety, or other disciplines create standards on topics addressed within systems engineering, but use different terminology, culture, etc. One such example is risk management, which has been dealt with by many professional societies from a number of perspectives.
Systems engineers must also be aware of the standards that govern the specialty disciplines that support systems engineering, as discussed in Part 6.
Finally, the challenges listed above under the Current Efforts are also reflective of some of the Pitfalls when trying to align the standards and references.


References
Works Cited
Roedler, G. 2023. "SE Standards and Guidance - Revisions and Trends." International Council on Systems Engineering, Boston, MA, USA.
Roedler, G. 2010. An Overview of ISO/IEC/IEEE 15288, System Life Cycle Processes. Asian Pacific Council on Systems Engineering (APCOSE) Conference.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System life cycle processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
ISO/IEC. 2021. Systems and software engineering -- Life cycle management -- Specification for process description. Geneva, Switzerland: International Organisation for Standardisation/International Electrotechnical Commissions. ISO/IEC/IEEE 24774:2021.
ISO/IEC/IEEE. 2019. Systems and Software Engineering - Vocabulary (SEVocab). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2019.
ISO/IEC/IEEE. 2024. "Systems and Software Engineering -- Life Cycle Management - Part 1: Guidelines for life cycle management,". Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEEE. 2017. Systems and Software Engineering - Software Life Cycle Processes. Geneva, Switzerland: International Organization for Standards (ISO)/Institute of Electrical & Electronics Engineers (IEEE) Computer Society, ISO/IEEE 12207:2017.
Roedler, G. 2011. "Towards Integrated Systems and Software Engineering Standards." National Defense Industrial Association (NDIA) Conference, San Diego, CA, USA.
Proliferation of Standards figure: http://xkcd.com/927/

Primary References
Roedler, G. 2010. "An Overview of ISO/IEC/IEEE 15288, System Life Cycle Processes." Asian Pacific Council on Systems Engineering (APCOSE) Conference.
Roedler, G. 2023. "SE Standards and Guidance - Revisions and Trends." International Council on Systems Engineering, Boston, MA, USA.
Roedler, G. 2011. "Towards Integrated Systems and Software Engineering Standards." National Defense Industrial Association (NDIA) Conference, San Diego, CA, USA.
INCOSE. 2023. INCOSE Systems Engineering Handbook 5th Edition. International Council on Systems Engineering. Hoboken, NJ, USA: John Wiley & Sons. INCOSE SE Handbook.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System life cycle processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
ISO/IEC. 2021. Systems and software engineering -- Life cycle management -- Specification for process description. Geneva, Switzerland: International Organisation for Standardisation/International Electrotechnical Commissions. ISO/IEC/IEEE 24774:2021.
ISO/IEC/IEEE. 2019. Systems and Software Engineering - Vocabulary (SEVocab). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of


Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2019.
ISO/IEC/IEEE. 2024. "Systems and Software Engineering -- Life Cycle Management - Part 1: Guidelines for life cycle management,". Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEC/IEEE. 2024. Systems and Software Engineering -- Life Cycle Management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 24748-2:2024.
NATO. 2022. NATO System Life Cycle Processes. Brussels, Belgium: North Atlantic Treaty Organization (NATO). NATO AAP-48.
SAE. 2018. Integrated Project Processes for Engineering a System. Warrendale, PA, USA: SAE International. SAE 1001.

Additional References
INCOSE. 2022. Systems Engineering Vision 2035: Engineering Solutions for a Better World. San Diego, CA, USA: International Council on Systems Engineering (INCOSE). INCOSE SE Vision 2035. 2022.

Application of Systems Engineering Standards

 Lead Author:
 Garry Roedler
 Contributing Authors:
 William Bearden, David Endler, and Mike Yokell
-
Standards can have an influence on organizations and their projects as indicated in Figure 1 (below). The standards provide sets of process, project, and product requirements and associated guidance that organizations use to influence the definition of their organization and project specific processes. Some pitfalls and good practices in utilizing standards are also identified in the article on Systems Engineering Related Standards Landscape. In this article, several additional factors related to the utilization of the standards in systems engineering (SE) are presented.

Standards and their Utilization
A standard is an agreed upon, repeatable way of doing something. It is a published document that contains a technical specification or other precise criteria designed to be used consistently as a rule, guideline, or definition. Standards help to make life simpler and to increase the reliability and the effectiveness of many goods and services we use, as detailed in Why Standards. Standards are created by bringing together the experience and expertise of relevant stakeholders, such as the producers, sellers, buyers, users, and regulators of a particular material, product, process, or service.




Standards are designed for voluntary use and do not impose any regulations. However, laws and regulations may address certain standards and may make compliance with them compulsory.
Further, organizations and their enterprises may choose to use standards as a means of providing uniformity in their operations and/or the products and services that they produce. The standard becomes a part of the corporate culture. In this regard, it is interesting to note that the ISO/IEC/15288 (2023) standard has provided such guidance and has provided a strong framework for systems engineers, as well as systems engineering and business management, as forecast earlier by Arnold and Lawson (2004).
ISO directives [1] state the following:
A standard does not in itself impose any obligation upon anyone to follow it. However, such an obligation may be imposed, for example, by legislation or by a contract. In order to be able to claim compliance with a standard, the user (of the standard) needs to be able to identify the requirements he is obliged to satisfy. The user needs also to be able to distinguish these requirements from other provisions where a certain freedom of choice is possible. Clear rules for the use of verbal forms (including modal auxiliaries) are therefore essential.


Requirements, Recommendations, and Permissions
In order to provide specificity, standards employ verb forms that convey requirements, recommendations, and permissions. For example, the ISO directives specify the following verb usages:
 The word shall indicates requirements strictly to be followed in order to conform to the standard and from which no deviation is permitted.
 The word should indicates that among several possibilities, one is recommended as particularly suitable without mentioning or excluding others, or that a certain course of action is preferred, but not necessarily required, or that (in the negative form) a certain possibility or course of action is deprecated but not prohibited.
 In the past, the word may indicates a course of action permissible within the limits of the standard. More recently, the use of may is not preferred for use in a standard and should be avoided. Can is the preferred term in most situations.
The directive also indicates that standards should avoid the use of will, must, and other imperatives. Futhermore, the use of the term ensure should be avoided, since it is rare that anything can be absolutely ensured. It reflects a guarantee. However, the phrase help ensure is acceptable.

Certification, Conformance, and Compliance
In the context of the management system standards (such as ISO 9001 or ISO 14000), certification refers to the issuing of written assurance (the certificate) by an independent external body that it has audited a management system and verified that it conforms to the requirements specified in the standard.
Typically, other more specific systems engineering standards are not the subject of certification. They are self-imposed in order to improve uniformity of organization and enterprise operations or to improve the quality of products and services. Alternatively, they may be dictated by legislation, policy, or as part of a formal agreement between an acquirer and a supplier.
In the context of engineering standards, compliance typically refers to adhering to mandatory legal or regulatory requirements, while conformance refers to adhering to voluntary standards or specifications. Compliance is often driven by external authorities, while conformance is often a company's internal commitment.
Conformance to standards is generally considered to be the voluntary action of an organization to meet the requirements or tailored requirements of a consensus standard or other guidance or specification. Many standards include a Conformance Clause that identifies what is required to make a claim of conformance or tailored conformance to the standard. This is especially true for engineering process standards.
Sometimes Conformance testing is a focus for product standards. Conformance testing, or type testing, is testing to determine whether a product or system meets some specified standard that has been developed for efficiency or interoperability. To aid in this, many test procedures and test setups have been developed either by the standard's maintainers or by external organizations, such as the Underwriters Laboratory (UL), specifically for testing conformity to standards.
Conformance testing is often performed by external organizations, which is sometimes the standards body itself, to give greater guarantees of compliance. Products tested in such a manner are then advertised as being certified by that external organization as complying with the standard. Service providers, equipment manufacturers, and equipment suppliers rely on this data to ensure quality of service (QoS) through this conformance process.
When compliance to a or more standards is needed, the agreement or contract has usually identified the standard(s) compliance as a requirement. Compliance with engineering standards is crucial for applications with a high need for safety, reliability, and functionality of products, systems, and infrastructure. It involves adhering to established rules, regulations, and best practices to meet industry requirements and legal obligations. Compliance is often enforced by external authorities, such as government agencies or industry bodies, and failure to comply can result in penalties or sanctions.


Key aspects of standards compliance include:
 Identifying and selecting the relevant standards that will be part of the agreement.
 Identifying and understand the applicable requirements of the standards.
 Integrating the requirements of the standards into the organization or project processes, product requirements, or project requirements with appropriate adaptation and tailoring; and documenting the incorporation and compliance demonstration needed.
 Verifying compliance through appropriate and valid means and documenting it. Some challenges for compliance include:
 Keeping current - standards and other requirements can change, then requiring changes ot project planning
and implementation, if a specific version is not part of the agreement.
 Balancing between compliance with standards and leveraging innovation in products or processes.
 Capturing and maintaining accurate documentation of the compliance can require structured and ongoing data management.

Tailoring of Standards
Since the SE standards provide guidelines, they are most often tailored to fit the needs of organizations and their enterprises in their operations and/or for the products and services that they provide, as well as to provide agreement in a contract. Tailoring is a process described in an annex to the ISO/IEC/IEEE 15288 (2023) standard. ISO/IEC/IEEE 15288 (2023) addresses the issues of conformance, compliance, and tailoring as follows:
 Full conformance, or a claim of full conformance, first declares the set of processes or other requirements for which conformance is claimed. Full conformance is achieved by demonstrating that all of the requirements have been satisfied using the outcomes or other criteria as evidence.
 Tailored conformance for processes uses the standard as a basis for establishing a set of processes and their requirements. However, the specific requirements are selected, excluded, or modified in accordance with the tailoring process. A clear statement is made regarding the scope of the claimed tailored conformance.
 The tailored text for which tailored conformance is claimed is declared. Tailored conformance is achieved by demonstrating that requirements for the processes, as tailored, have been satisfied using the outcomes as evidence.
 When the standard is used to help develop an agreement between an acquirer and a supplier, clauses of the standard can be selected for incorporation in the agreement with or without modification. In this case, it is more appropriate for the acquirer and supplier to claim compliance with the agreement than conformance with the standard, since the agreement usually becomes legally binding.
 Any organization (e.g., a national organization, industrial association, or company) imposing the standard as a condition of trade should specify and make public the minimum set of required processes, activities, and tasks which constitute a supplier's conformance with the standard.
Per ISO/IEC/IEEE 24748-2, "Life cycle models, as well as the processes from ISO/IEC/IEEE 15288, may be adapted for an individual project to reflect the variations appropriate to the organization, project and system while still being able to claim tailored conformance."
ISO/IEC/IEEE 24748-2 provides an informational list of circumstances that influence tailoring.


References
Works Cited
Arnold, S., and H. Lawson. 2004. "Viewing systems from a business management perspective." Systems Engineering, 7 (3): 229.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
Roedler, G. 2010. "An Overview of ISO/IEC/IEEE 15288, System Life Cycle Processes. Asian Pacific Council on Systems Engineering." Asia-Pacific Council on Systems Engineering (APCOSE) Conference, Keelung, Taiwan.
Roedler, G. 2011. "Towards Integrated Systems and Software Engineering Standards." National Defense Industrial Association (NDIA) Conference, San Diego, CA, USA.

Primary References
Roedler, G. 2010. "An Overview of ISO/IEC/IEEE 15288, System Life Cycle Processes." Proceedings of the 4th Asian Pacific Council on Systems Engineering (APCOSE) Conference, 4-6 October 2010, Keelung, Taiwan.
ISO. 2015. Quality management systems -- Requirements. Geneva, Switzerland: International Organisation for Standardisation. ISO 9001:2015.
ISO. 2015. Environmental management systems -- Requirements with guidance for use. Geneva, Switzerland: International Organisation for Standardisation. ISO 14000:2015
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288: 2023.
ISO/IEC/IEEE. 2024. "Systems and Software Engineering -- Life Cycle Management - Part 1: Guidelines for life cycle management,". Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEC/IEEE. 2024. Systems and Software Engineering -- Life Cycle Management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 24748-2:2024.
INCOSE. 2023. INCOSE Systems Engineering Handbook 5th Edition. International Council on Systems Engineering. Hoboken, NJ, USA: John Wiley & Sons. INCOSE SE Handbook.

Additional References
None.

References
[1] http://www.iso.org/directives




Part 4: Applications of Systems Engineering

Applications of Systems Engineering

Contents of this Part
 Product Systems Engineering (Bud Lawson and Ricardo Pineda) (Rick Adcock)
 Service Systems Engineering (Ricardo Pineda, Bud Lawson, and Richard Turner)
 Enterprise Systems Engineering (James Martin, Dick Fairley, and Bud Lawson)
 Systems of Systems (SoS) (Mike Henshaw and Judith Dahmann)
 Healthcare Systems Engineering
 Lead Author:
 Bud Lawson
 Contributing Author:
 Rick Adcock
-
Part 4 of the Guide to the SE Body of Knowledge (SEBoK) focuses on the application of systems engineering to the creation and life cycle management of various types of systems.



In particular, the part covers product systems, service systems, enterprise systems, and systems of systems (SoS). It also contains a knowledge area describing Healthcare SE as a domain extension of these general SE approaches. This is the first of a number of planned domain-based extensions.

Knowledge Areas in Part 4
Each part of the SEBoK is divided into knowledge areas (KAs), which are groupings of information with a related theme. Part 4 contains the following KAs:
 Product Systems Engineering
 Service Systems Engineering
 Enterprise Systems Engineering
 Systems of Systems (SoS)
 Healthcare Systems Engineering

Systems Engineering Application
The different ways in which each of these contexts shapes the application of the generic SE Life Cycle and Process knowledge in Part 3 are discussed in detail in the KA above.
It is important to note that none of the contexts above are intended to be wholly separate or mutually exclusive from the others. They should be seen as overlapping and related frameworks which provide a starting point for how generic SE might be used to fulfil real world needs. We might think of each as a model of how SE can work in the real world. Each gives advice on how to use generic SE life cycle and process knowledge against its own viewpoint. If necessary, each may also develop new or extended knowledge relevant to its context, which becomes part of the extended toolkit of SE. Like any set of models, each has its own simplifications, strengths and weaknesses. As a general principle we would always select the simplest model available which fits the purpose and use that. For a complex outcome the combination of a number of models may be needed.
The real-world application of SE is no different. In most real projects, combinations of Product, Service, Enterprise and SoS knowledge may be needed to achieve success. The extent to which these combinations are taken from pre-determined approaches vs. the need for systems engineers to create such combinations as part of the application of SE is a key question for how SE is used. The final part of this knowledge, how SE is applied in the real world, sits within the knowledge base of the various application domain. Some domains have a very detailed set of procedures, guidelines and standards relevant to that domain, while others take general SE and apply it as needed using the judgement of those involved. In general, all domains have parts of both domain specific guidelines and experienced people. The SEBoK was originally written to be domain independent, other than through the application examples in part 7. To complete the SEBoK, we intend to create a series of Domain Application KA. These will give an overview of how SE application maps to domain practice. They are aimed at both the general SE reader who wants to know more about a domain and those working within a domain.
The Healthcare SE KA contained in this version of the SEBoK is the first such domain specific extension of the SEBoK.


References
Works Cited
None

Primary References
None.

Additional References
None.




Knowledge Area: Product Systems Engineering

Product Systems Engineering

Contents of this Knowledge Area
 Product Systems Engineering Background (Ricardo Pineda)
 Product as a System Fundamentals (Ricardo Pineda)
 Business Activities Related to Product Systems Engineering (Ricardo Pineda)
 Product Systems Engineering Key Aspects (Ricardo Pineda)
 Product Systems Engineering Special Activities (Ricardo Pineda)
 Lead Authors:
 Bud Lawson and Ricardo Pineda
 Contributing Author:
 Rick Adcock
-
Product systems engineering (PSE) is at the core of the new product development process (NPDP) that is needed to successfully develop and deploy products into different market segments. A market can be consumer based (e.g., private enterprises or general consumers) or it can be public (not-for-profit). Public
markets address the strategic needs of a country or region, such as military, healthcare, educational, transportation, and energy needs. NPDP has two significantly overlapping and integrated activities:
1. Systems engineering: This includes concept generation, engineering design/development, and deployment
2. Market development: This includes market research, market analysis, product acceptance and market growth (diffusion), and rate of adoption
NPDP also includes manufacturability/producibility, logistics and distribution, product quality, product disposal, conformance to standards, stakeholder's value added, and meeting customer's expectations. The internal enterprise competence and capabilities such as customer support, sales & marketing, maintenance and repair, personnel training, etc., must also be taken into account.


Topics
Each part of the SEBoK is divided into knowledge areas (KAs), which are groupings of information with a related theme. The KAs in turn are divided into topics. This KA contains the following topics:
 Product Systems Engineering Background
 Product as a System Fundamentals
 Business Activities Related to Product Systems Engineering
 Product Systems Engineering Key Aspects
 Product Systems Engineering Special Activities
The Product Systems Engineering Background article discusses product types and the need for a product to be aligned with the business objectives of the enterprise. It also discusses the relationships between PSE, product development and technology development.
Various types of connections between product elements, and the concept of enabling systems are introduced in the Product as a System Fundamentals article. It also discusses product architecture, modeling, analysis, and integration with various specialty engineering areas.
Product launching and product offerings have close linkages to different business processes. The major linkages are to business development, marketing, product lines, quality management, project management, operations management, supply chain management, etc. These and other topics are described in the Business Activities Related to Product Systems Engineering article.
Products emerge when they are realized based upon a system definition. Realizing the system results in instances of the system that are either delivered as products to a specific acquirer (based upon an agreement) or are offered directly to buyers and users. Key Aspects of PSE are discussed in the Product Systems Engineering Key Aspects article, which discusses aspects such as acquired vs. offered products, product lifecycle and adoption rates, integrated product teams (IPTs) and integrated product development teams (IPDTs), product architectures, requirements and standards, etc.
The last article, Product Systems Engineering Special Activities, covers some of the special activities carried out by PSE during the different stages from concept through product deployment.

Key Terms and Concepts
Product
A product is an artifact that is created by some person or by some process such as a manufacturing process, software source code compilation and integration, building construction, creative writing process, or data processing.
In general, a business product is defined as a thing produced by labor or effort, or the result of an act or a process. It stems from the verb produce, from the Latin produce(re) (to) lead or bring forth. Since 1575, the word product has referred to anything produced, and since 1695, the word product has referred to a thing or things produced.
In economics and commerce, products belong to a broader category of goods. The economic meaning of the word product was first used by political economist Adam Smith. In marketing, a product is anything that can be offered to a market that might satisfy a want or a need. In retail industries, products are called merchandise. In manufacturing, products are purchased as raw materials and sold as finished goods. Commodities are usually raw materials, such as metals and agricultural products, but a commodity can also be anything widely available in the open market. In project management, products are the formal definitions of the project deliverables that make up or contribute to delivering the objectives of the project. In insurance, the policies are considered products offered for sale by the insurance company that created the contract.


Product System
A product system is the combination of end products and the enabling products for those end products. This concept of a product system is illustrated in Figure 1. In the ANSI/EIA 632-2003 standard, just the term system is used, but the scope of the standard is clearly restricted to product systems.

The end product can also be considered as a system with its own elements or subsystems, each of which has its own enabling products as illustrated in Figure 2. The product development process usually focuses only on the engineering of the end product. PSE is essential when the enabling products are by themselves complex or their relationship to the end product is complex. Otherwise, the use of a traditional product development process is sufficient.





Product Realization System
The product realization system is a related system that enables the realization of the product system. It consists of all the resources to be applied in causing the Intervention System [i.e., the product system, in this case] to be fully conceived, developed, produced, tested, and deployed (Martin 2004). Lawson (2010) refers to this as a respondent system in the system coupling diagram. The intervention system is the system that is to be realized (or conceived and brought into being) in order to address some perceived problem in the context as shown in Figure 3.




The realization system can be a service system (as described in knowledge area Service Systems Engineering) or an enterprise system (as described in the knowledge are Enterprise Systems Engineering). When the realization system is a service system, then the service could partially realize the system by just designing the product system without developing or creating it. This design service system can pass the design to a manufacturing service system that turns the design into a physical artifact. Usually an enterprise is established to orchestrate the disparate services into a cohesive whole that is efficiently and effectively performed to achieve the strategic goals of that enterprise.
The product realization system utilizes a product realization process as described in (Magrab et al 2010) or a product development process as described in (Wheelwright and Clark 1992).

Product Sustainment System
When the realization system delivers the product system into its intended environment, the product often needs a set of services to keep that product operational. This other system, when needed, is called the product sustainment system. It consists of various enabling products and operational services. The sustainment system in relation to the realization system and the deployed product system is illustrated in Figure 4. Notice that the realization may need to develop or modify the sustainment for the particular intervention (product) system under development.





Product Systems Engineering, Service Systems Engineering and Enterprise Systems Engineering
PSE is in line with Traditional Systems Engineering (TSE) as captured in most textbooks on the subject, such as Wasson (2006), Sage and Rouse (2009), and Blanchard and Fabrycky (2011). However, they do not cover the full breadth of PSE since they tend to focus on hardware and software products only. Other kinds of products to be engineered include personnel, facilities, data, materials, processes, techniques, procedures, and media (Martin 1997; Lawson 2010). Further discussions on the distinctions between the various kinds of products is provided in the Product Systems Engineering Background article. Product system domains could be data-intensive (e.g. transportation system), facilities-intensive (e.g. chemical processing plant), hardware-intensive (e.g. defense systems), or technique-intensive (e.g. search and rescue system). Most product systems are a composite of several different kinds of products that must be fully integrated to realize the complete value-added potential for the different stakeholders.
When compared to Service Systems Engineering (SSE) and Enterprise Systems Engineering (ESE), PSE has some unique considerations:
 Often a product is part of a product line where both the product line and the products that make up that product line must be engineered simultaneously.
 Products are often composed of parts and sub-assemblies produced by several suppliers. This entails the need to work closely with the supply chain to ensure a successful product offering.
 Large complex products often require a lengthy and complicated series of steps for assembly, integration and test. During integration, many of the key assumptions made during the initial product design could be challenged.


 Products will usually require certification as to their safety or other factors like energy conservation and environmental compatibility. Electronic products often require certification to ensure electromagnetic compatibility and limited electronic emissions into the radio frequency spectrum. Transportation products require certification for safe operations.
 Products often have a complicated distribution network since they are not always developed where the end user may require it. There could be depots, warehouses, multi-modal transportation, wholesalers, dealers, and retail stores as part of this distribution network. This introduces challenges in delivery, maintenance and support of the product.
 Products must be engineered along with the realization system and the sustainment system. Sometimes it is necessary to make tradeoffs between the features and functions of the product system, the realization system and the sustainment system.
These considerations and others will be addressed in the articles under this knowledge area. One of the responsibilities of ESE is to manage these various considerations across multiple product lines across the enterprise while maximizing profits and customer satisfaction. SSE is often dependent on the products resulting from the PSE. A service will often be based on a product infrastructure that includes elements like data processing, hardware, software, data storage, data entry devices, display devices, service delivery facilities and techniques, service desk technicians, maintenance personnel, service offering catalogs and printed materials. Each of these products in the service infrastructure may need to be separately engineered using its own PSE lifecycle.

Creating Value
An enterprise that creates products must also create value that exceeds the cost of the product in the eyes of the customer. This applies to both for-profit and not-for-profit private and public enterprises. The creation and delivery of products may be the result of an acquisition agreement or an offering directly to buyers or users. To remain competitive, enterprises also need to understand the effects of the global economy, trends in industry, technology development needs, effects of new technology breakthroughs, market segments creation and their expectations, and most importantly, ever evolving customer expectations.
Ring (1998) defines a system value cycle with three levels that a systems approach must consider to deliver real world benefit:
1. stakeholder value
2. customer need
3. system solution
Value will be fully realized only when it is considered within the context of time, cost, and other resources appropriate to key stakeholders.

Aligning product characteristics with associated operational activities
The user of a product views the product as an asset that can be utilized in one's own systems of interest (Lawson 2010). Thus, in supplying the product, the expected form of operation becomes a driving factor in determining the characteristics of the product. In several contexts, in particular for military related products, the desired operational activities are termed concept of operations (ConOps) and in the case of commercial enterprises the intended use of the system is described through some form of Market Service Description of the product. The intended use of the product is market/customer driven and so the product characteristics must be aligned with the operational intent.


Architectures as basis for value assessment
Architectures can be used by enterprises to shift product development from individual products to an underlying product line architecture that incorporates the flexibility required by the enterprise to rapidly tailor new technologies and features to specific customer requirements (Phillips 2001). In determining the architecture of the product system, various alternative designs may arise. Each of the architecture alternatives is to be evaluated with respect to its value contribution to end users and other stakeholders.

Role of evaluation criteria in selection between product alternatives
In assessing the product system value, one must consider the measures that are to be used to determine the goodness of the product alternatives (alternative architectures and technologies) with respect to producibility, quality, efficiency, performance, cost, schedule and most importantly, the coverage provided in meeting the customer's requirement or market opportunity.

Role of tradeoffs in maximizing value
The evaluation of alternatives must include the tradeoffs between conflicting properties. For example, in striving for superior quality and efficiency, tradeoffs must be made with respect to schedule and cost. See article on Measurement in Part 3. Tradeoffs are made during different stages of the development process: at the product or system level, at the subsystem and architecture definition level, and at the technology level (Blanchard and Fabrycky 2011).
There are a variety of methods for performing tradeoff analysis such as: utility theory, analytic hierarchical process, the Pugh selection method, multi-objective decision, multi-attribute utility analysis, and multi-variate analysis. For software, the Software Engineering Institute (SEI) provides 'The Architecture Tradeoff Analysis Method (ATAM)' (Kazman et al., 2000) for evaluating software architectures relative to quality attribute goals. ATAM evaluations expose architectural risks that potentially inhibit the achievement of an organization's business goals. The ATAM not only reveals how well an architecture satisfies particular quality goals, but also provides insight into how those quality goals interact with each other and how they trade off against each other.

Expanding role of software in creation of product value
Software has an increasing role in providing the desired functionality in many products. The embedding of software in many types of products (such as transportation vehicles, home appliance, and production equipment) accounts for an ever-increasing portion of the product functionality. The current trend is the development of a network of systems that incorporate sensing and activating functions. The use of various software products in providing service is described in the Service Systems Engineering knowledge area.

References
Works Cited
ANSI/EIA. 2003. Processes for Engineering a System. Philadelphia, PA, USA: American National Standards Institute (ANSI)/Electronic Industries Association (EIA). ANSI/EIA 632-2003.
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
ISO/IEC/IEEE. 2011. Systems and software engineering - Architecture description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.


Kazman, R., M. Klein, and P. Clements. 2000. ATAM: Method for Architecture Evaluation. Pittsburgh, PA, USA: Software  Engineering  Institute  (SEI)/Carnegie  Mellon  University  (CMU).  CMU/SEI-2000-TR-004, ESC-TR-2000-004.
Lawson, H. 2010. A Journey Through the Systems Landscape. London, UK: College Publications.
Magrab, E., S. Gupta, P. McCluskey, and P. Sandborn. 2010. Integrated Product and Process Design and Development - The Product Realization Process. Boca Raton, FL, USA: CRC Press.
Martin, J.N. 1997. Systems Engineering Guidebook: A process for developing systems and products, 1st ed. Boca Raton, FL, USA: CRC Press.
Martin, J. 2004. "The Seven Samurai of Systems Engineering: Dealing with the Complexity of 7 Interrelated Systems." Proceedings of the International Council on Systems Engineering (INCOSE) International Symposium, 2004, Toulouse, France.
Phillips, F. 2001. Market-oriented Technology Management - Innovating for Profit in Entrepreneurial Times. Berlin, Germany: Springer-Verlag.
Pugh, S. 1990. Total Design: Integrated Methods for Successful Product Engineering. Upper Saddle River, NJ, USA: Prentice Hall.
Ring, J. 1998. "A Value Seeking Approach to the Engineering of Systems." Proceedings of the IEEE Conference on Systems, Man, and Cybernetics, 1998, San Diego, CA, USA. p. 2704-2708.
Sage, A., and W. Rouse. (eds.) 1999. Handbook of Systems Engineering and Management. Hoboken, NJ, USA: John Wiley and Sons, Inc.
Wasson, C.S. 2006. System Analysis, Design, and Development. New York, NY, USA: John Wiley & Sons.
Wheelwright, S., and K. Clark. 1992. Managing New Product and Process Development: Text and Cases. Columbus, OH, USA: Free Press.

Primary References
ANSI/EIA. 2003. Processes for Engineering a System. Philadelphia, PA, USA: American National Standards Institute (ANSI)/Electronic Industries Association (EIA). ANSI/EIA 632-2003.
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Magrab, E., S. Gupta, P. McCluskey, and P. Sandborn. 2010. Integrated Product and Process Design and Development - The Product Realization Process. Boca Raton, FL, USA: CRC Press.
Martin, J. 2004. "The Seven Samurai of Systems Engineering: Dealing with the Complexity of 7 Interrelated Systems." Proceedings of the International Council on Systems Engineering (INCOSE) International Symposium, 2004, Toulouse, France.
Wasson, C.S. 2006. System Analysis, Design, and Development. New York, NY, USA: John Wiley & Sons.

Additional References
None.


Product Systems Engineering Background

 Lead Author:
 Ricardo Pineda
-

Product Types
A system is by definition composed of elements that interact. The system itself is usually an element of a larger system, and each element can often also be viewed as a system on its own.
A system element consists of one or more products.
Products need to be produced or acquired. Some can be acquired or procured as-is, without need for fabrication or modification. Others need to be engineered, and in some cases, systems-engineered (Martin 1997). Basic product types are depicted in the figure below.
Types of products are not limited to hardware or software. Many other types of products perform functions necessary to meet stakeholder needs. Some are only relevant to certain industries or domains, such as structures for civil engineering, or ships for shipping or the naval domain. Systems engineers must remember not to allocate the required behavior for a system to hardware and software elements alone.
While we may associate the idea of a product with concrete objects like computer chip, phones, aircraft, or even command, control and communications centers, an organization or a process can also be a product. Sometimes a product is not complex enough to justify performing Product SE, and only needs product design engineering. Enterprise SE and Service SE should determine whether a product needs Product SE.

Product Taxonomy
For any system being developed, the systems engineers must decide what are the right elements to be included. This is not self-evident, because basic product types are not necessarily mutually exclusive. For example, some would consider that facilities contain hardware and people. Others would consider facilities to be separate from hardware and people. Some would include material as part of hardware, while others would not. Creating a taxonomy of product types can help the systems engineer think clearly and thoroughly about what components to include.

Business Objectives and Products
When it develops and launches a new product, an enterprise must align that product with its business goals, internal capabilities, and competition. It must align the end product with the systems expected to realize and sustain it.
The new product concept must be based on analysis that, besides product potential, also explores the ability of the enterprise to exploit that potential, including factors like organizational culture, focus, goals, and processes. Present and future markets and technology must be analyzed. So must several dimensions of competition: competitors' offerings and their plans, for entry into new markets and for product expansion including new functionality, features, or services. These, and the ability of the enterprise to react to them, must also be monitored for the enterprise to remain competitive in the long term.
Accelerating economic globalization since the 1970s has forced enterprises to respond to global needs, not just local or regional ones. Enterprises in the resulting hyper-competitive business environment must analyze their financial goals, their market positions, and the business segments in which they participate, in order to understand what products are required.


This is true for completely new products , product enhancements, penetration of new markets, and growth within existing markets.

Relationship between Product Systems Engineering and Product Development
Product development is the process of bringing a new product to market. Product SE (PSE) considers the complete product system-that is the product in the context of all its enabling elements. PSE takes a full life cycle perspective, "from cradle to grave" or "dust to dust."
Technology-based product development may be thought of as coming from two sources. One, where innovation enhances existing technology, is aimed at relatively short-term market windows. The other involves long-term research to identify the technology developments required to realize the concept. These may be technologies whose availability is not foreseen in the near future, meaning that substantial investment and long lead times may be required before the proof of concept, initial operational capabilities (IOCs) or prototyping stages are reached, let alone the commitment to realize the actual product offering. Some authors claim that the systems engineering process and the new product development (NPD) process for this second source are one and the same.
It is from the second source that strategic initiatives (long-term applied research) realize new products in areas like military aircraft or bioengineering. When research resolves fundamental questions on matters of science or national/regional interest technology, breakthroughs occur.
This article concentrates on the first source of technology-based product development, that is, the one driven by ever-evolving market needs to enhance existing technology.

Product Development Patterns
When existing or near-future technology innovations are exploited to generate new product ideas, product development may follow any one of following scenarios (Phillips 2001):
 Product development may use well-established technologies to help the enterprise improve the efficiency of current operations.
 Product development may use well-established technologies to help the enterprise into new kinds of operations.
 Product development may use leading edge technologies to improve the efficiency of current operations.
 Product development may use leading edge technologies to help the enterprise into new kinds of operations.
The product itself may simply be a modification of an existing product or its presentation, it may possess new or different characteristics that offer additional benefits to the customer, and/or it may be entirely new and satisfy a newly-defined  customer  want  or  market  niche  (http:/ / www. businessdictionary. com/ definition/ product-development.html [1]).
Existing realization or sustainment systems may not be adequate to develop a given product. For example, it might be necessary to change development practices, use different testing methods or facilities, or upgrade manufacturing equipment and procedures. There might need to be improved customer support procedures and newly trained support personnel, upgraded maintenance facilities and tools, or modified spare parts delivery techniques.


Market Pressures
The product development process must be dynamic, adaptive, and competitive on cost, time-to-market, performance, and quality on a global scale. This is because in the global economy continuous technology innovation and constantly evolving markets and customer needs demand a rapid response.
Products themselves are often multidisciplinary in nature; product development must have close participation, not only from the different specialty engineering fields (mechanical, electrical, industrial, materials, and so on), but also from the finance field to analyze the total cost of development (including production), marketing and sales to understand market behavior and acceptance, manufacturers and distributors, and legal and public relations experts.
All this has mandated enterprises to assess how they create their products and services. The result has been an effort to streamline the development process. One example of this is seen by the deployment of integrated product teams (IPTs) sometimes known as integrated product development teams (IPDTs).

Product Systems Engineering
Product systems engineering strives for the efficient use of company resources in order to achieve business objectives and deliver a quality product. Product systems engineering activities range from concept to analysis to design and determine how conceptual and physical factors can be altered to manufacture the most cost-effective, environmentally friendly product that satisfies customer requirements. Engineering the product system requires an interdisciplinary approach that includes an analysis of the product and its related elements such as manufacturing, maintenance, support, logistics, phase-out, and disposal; these are all activities which belong to either the realization system or the sustainment system. The proper application of systems engineering and analysis ensures the timely and balanced use of human, financial, and technological assets, and technology investments to minimize problems, harmonize overall results, and maximize customer satisfaction and company profits.
Products are as diverse as the customers that acquire them and there are no universally accepted methods, processes, and technologies (MPTs) for end-to-end analysis of products and their supporting subsystems. Every product needs to adapt existing MPTs based on prior experiences and best practices, such as Toyota (Hitchens 2007), MITRE (Trudeau 2010), and NASA (NASA SELDP 2011). Product systems engineering helps develop the end-to-end analysis of products and sub-systems by performing the following tasks:
 determining the overall scope of needs for the product system;
 defining product and system requirements;
 considering all interactions between the different elements of the product system;
 organizing and integrating engineering disciplines; and
 establishing a disciplined approach that includes review, evaluation and feedback, and ensures orderly and efficient progress.
Constantly evolving needs and requirements, along with constant technology innovations, may render a committed product development obsolete even before deployment. This has led to debate among systems engineering professionals on the need for the systems engineering process to become more rapidly adaptable. Platform-based solutions to resolve some of these challenges (infrastructure as a service, platform as a service, and software as a service) are being studied and proposed (MITRE 2010; Boehm 2010).

Integrated Product Development Process
The integrated product development process (IPDP) starts with understanding market needs and developing a strategy that creates products that satisfy or exceed customer expectations, respond to evolving customer demands, adapt to changing business environments, and incorporate systems thinking to generate novel ideas and co-create value with extensive stakeholders' participation. IPDP is a continuously evolving process that strives to realize products whose cost, performance, features, and time-to-market help increase company profitability and market


share. Magrab, et al. (2010) discussed the IPDP in terms of four different stages; Figure 1 provides a snapshot of an IPDP and the main tasks carried out at each stage.

Stage I: Product Identification
During the product identification stage, the enterprise aims to identify an enterprise-wide strategy that flows down to individual product strategies resulting in a good business investment for the company. During this stage addressable markets for the product are identified in addition to geographical coverage of the product. The developments through this stage result in demonstration of strong customer need, determination of potential markets and geographic scope, the fitness of enterprise core capabilities to the product strategy, business profitability (return on investment, profit & loss), etc.
During this stage an integrated product team (IPT) first develops the IPDP for the project, usually by tailoring a corporate IPDP standard. The IPT assesses required technology innovation, feasibility of existing technologies, estimated time and cost of technology development, and the risks associated with markets, finances and technologies risk, etc. This stage also takes into account inputs from the continuous improvement (CI) process to develop new features and enhancements in existing products to address new market needs or customer demands.

Stage II: Concept Development
The main goal of the Concept Development stage is to generate feasible concepts for the potential product and develop MPTs that will satisfy the product's performance goals of economic viability and customer satisfaction. These concept designs must ensure that the company's core competencies can satisfy the requirements to produce the products while taking into account the market viability, manufacturability, and technical feasibility through an extensive analysis of alternative process.
During this stage SE supports the IPT in identifying different operational scenarios and modes of operation, functional requirements of the products, technology and performance risks, and the main components of the products and required interfaces among them, etc. This stage involves a highly interactive and iterative exchange of concepts among several IPTs and, depending on complexity of the products, a Systems Engineering Integration Team may be required to ensure analysis of all the possible solutions. During this stage inputs from the CI process helps analyze new technologies/processes including upgrades to existing technologies and create products that result in enhanced customer experiences.

Stage III: Design and Manufacturing
During the design and manufacturing stage the actual product is realized and manufactured. This stage starts with creating engineering drawings for the product, product configuration items specs, "design for X" (DFX), manufacturing design plans, production plans and schedules, test production run to ensure that the product meets customer requirements and quality criteria, and a plan for full production, logistics and distribution.
During this stage the product design & manufacturing engineering team works closely with operations managers to create MPTs to manage the technical effort for the product from an end-to-end perspective. Some of the SE activities during this stage include product integration, verification and validation plans; modeling, simulation, test & evaluation of the product system under critical scenarios; launch readiness plans including end-user test plans, operational readiness, etc. During this stage MPTs are developed and documented for proper handling of defective parts, processes, or functionalities. The CI process inputs include product and process performance enhancements and sustained life-cycle operations support.


Stage IV: Product Launch
During the product launch stage, the product is delivered to its potential markets. During production and deployment, MPTs are developed to ensure that the product meets its quality goals, satisfies customer requirements, and realizes the business plan goals. This requires provisions for customer care, logistics, maintenance, training etc., and a CI process to monitor product and product system technical performance and product quality. The CI process is realized through extensive data collection using customer satisfaction surveys and remotely or manually observing, recording, and analyzing process performance metrics, technical performance measure, quality metrics, etc.


Relationship between Product Systems Engineering and Technology Development
As technological advancement accelerates, product life cycles become shorter, especially for high technology products. As a result, enterprises risk having outdated or obsolete products that have lost pace with markets trends, technology trends, or customer expectations.
Product systems engineering should bring awareness of technology changes and trends to the analysis of new product ideas or innovations. This affects the time and cost inputs into the technical feasibility analysis of the product. The result should include a road map of required technology developments, which is then used to create the overall road map for the new product offering.
In these cases, new product ideas impose requirements on new technology developments.
On the other hand, when technology developments or breakthroughs drive product innovation or the generation of new markets, the technology developments may also generate requirements on product features and functionalities. Factors which dictate decisions about introducing products include the technology readiness levels (TRL), the integration readiness levels (IRL), the manufacturing readiness levels (MRL), the system readiness levels (SRL), and


the operational readiness of the enterprise to launch the product system. See the "Readiness Levels" section in the Product Systems Engineering Special Activities article.
Understanding the entities (i.e., components or elements) that compose the product is not a trivial task for systems engineers. It is not unusual for a new product to require developments in several technologies, including new materials, electronic components, software, maintenance and repair procedures, processes, or organizational structures. All of these developments must be factored into the IPDP for the successful deployment and proper use of the product.


Product Type Examples
Examples of each product type are shown below (Martin 1997).


Table 1. Product Types (Martin 1997). This material is reproduced with permission of John Wiley & Sons, Inc.
Type	Examples

Hardware	Computer processor unit, radar transmitter, satellite payload, telephone, diesel engine, data storage device, network router, airplane landing gear
Software	Computer operating system, firmware, satellite control algorithm, robot control code, telephone switching software, database application
Personnel	Astronaut, computer operator, clerk, business executive, Laika (the cosmonaut dog), bus driver, cashier, maintenance technician

Facilities	Space rocket launch pad, warehouse building, shipping docks, airport runway, railroad tracks, conference room, traffic tunnel, bridge, local area network cables
Data	Personnel records, satellite telemetry data, command and control instructions, customer satisfaction scores

Materials	Graphite composite, paper, gold, concrete, stone, fiberglass, radar absorption material, cladded metals, integrated circuit substrate, magnetic memory core
Media	Data storage media (tape, disc, memory card), signal transport media (twisted pair wire, fiber optic cable, RF spectrum), communications media (television, radio, magazines), social media (blogs, Twitter, Facebook)
Techniques Soldering, trouble trick response process, change notice handling, telephone answering protocol, project scheduling, data sorting algorithm

Materials could be thought of as basic raw materials, like steel, or as complex materials, like cladded metals, graphite composites, or building aggregate material. Personnel are not normally thought of as a "product," but that can change depending on the type of system in question. The National Aeronautics and Space Administration (NASA) space program "system" certainly produces astronauts. When personnel are considered product(s), it is not usually possible to simply find and hire personnel with the requisite knowledge, skills, and experience. These personnel "products" can often be developed using a product SE approach (Martin 1996). For example, you could specify requirements (i.e., required knowledge, skills, and experience) for each person that is part of the system. Interfaces can be specified for each person, and an assessment can be made as to the maturity of each person (i.e., each potential product). These are a few examples of how product SE can be applied to personnel products.
In enterprise systems engineering, we may need education and training systems to make up a part of our personnel system in order to produce people with the right competencies and capabilities.

References
Works Cited
Academy of Program/Project and Engineering Leadership (APPEL). 2009. NASA's Systems Engineering Competencies. Washington, D.C., USA: US National Aeronautics and Space Association. Available at: http://www. nasa.gov/offices/oce/appel/pm-development/pm_se_competency_framework.html [2].
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Boehm, B. 2010. Systems 2020 Strategic Initiative. Hoboken, NJ, USA: Systems Engineering Research Center (SERC), SERC-2010-TR-009.
Grady, J. 2010. Systems Synthesis - Product and Process Design. Boca Raton, FL, USA: CRC Press.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.


Magrab, E., S. Gupta, P. McCluskey, and P. Sandborn. 2010. Integrated Product and Process Design and Development - The Product Realization Process. Boca Raton, FL, USA: CRC Press.
Martin, J.N. 1997. Systems Engineering Guidebook: A process for developing systems and products, 1st ed. Boca Raton, FL, USA: CRC Press.
MITRE. 2010. Platform as a Service: A 2010 Marketplace Analysis, Cloud Computing Series. Bedford, MA, USA: Systems Engineering at MITRE.
Morse, L., and D. Babcock. 2007. Managing Engineering and Technology, 4th ed. Upper Saddle River, NJ, USA: Prentice Hall.
Phillips, F. 2001. Market Oriented Technology Management: Innovating for Profit in Entrepreneurial Times. New York, NY, USA: Springer.
Trudeau, P.N. 2010. Designing and Enhancing a Systems Engineering Training and Development Program. Bedford, MA, USA: The MITRE Corporation.
Wasson, C.S. 2006. System Analysis, Design, and Development. New York, NY, USA: John Wiley & Sons.

Primary References
Grady, J. 2010. Systems Synthesis - Product and Process Design. Boca Raton, FL, USA: CRC Press.
Magrab, E., S. Gupta, P. McCluskey, and P. Sandborn. 2010. Integrated Product and Process Design and Development - The Product Realization Process. Boca Raton, FL, USA: CRC Press.
Martin, J.N. 1997. Systems Engineering Guidebook: A process for developing systems and product, 1st ed. Boca Raton, FL, USA: CRC Press.

Additional References
Academy of Program/Project and Engineering Leadership (APPEL). 2009. NASA's Systems Engineering Competencies. Washington, D.C., USA: US National Aeronautics and Space Association. Available at: http://www. nasa.gov/offices/oce/appel/pm-development/pm_se_competency_framework.html [2].
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Boehm, B. 2010. Systems 2020 Strategic Initiative. Hoboken, NJ, USA: Systems Engineering Research Center (SERC), SERC-2010-TR-009.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
MITRE. 2010. Platform as a Service: A 2010 Marketplace Analysis, Cloud Computing Series. Bedford, MA, USA: Systems Engineering at MITRE.
Morse, L., and D. Babcock. 2007. Managing Engineering and Technology, 4th ed. Upper Saddle River, NJ, USA: Prentice Hall.
Phillips, F. 2001. Market Oriented Technology Management: Innovating for Profit in Entrepreneurial Times. New York, NY, USA: Springer.
Trudeau, P.N. 2010. Designing and Enhancing a Systems Engineering Training and Development Program. Bedford, MA, USA: The MITRE Corporation.
Wasson, C.S. 2006. System Analysis, Design, and Development. New York, NY, USA: John Wiley & Sons.


References
[1] http://www.businessdictionary.com/definition/product-development.html
[2] http://www.nasa.gov/offices/oce/appel/pm-development/pm_se_competency_framework.html


Product as a System Fundamentals

 Lead Author:
 Ricardo Pineda
-
This article introduces fundamental concepts of product systems.

Product Elements and Connections
Product systems consist of product elements and two kinds of connections: connections among elements, and
connections between elements and things in the system environment. That portion of the environment that can be influenced by the system or that can influence the system is called the "context."
Connections between elements contain interactions and relationships (Hybertson 2009). A connection is more than a mere interface.
Interactions occur across interfaces between the elements inside or outside the system, and can be defined as exchanges of data, materials, forces, or energy. Connections with an interactive nature can be represented in various engineering artifacts: schematic block diagrams, data flow diagrams, free body diagrams, interface control diagrams, port specifications, energy transfer diagrams, and so on. Product systems engineering (PSE) usually defines interactions in an interface control document, interface design document, interface requirements document, or the equivalent.
Connections also encompass relationships between elements. These relationships can be spatial, motion-related, temporal, or social.
Spatial relationships:
 one element is underneath another
 two elements are x units apart
 one element is inside another Motion-related relationships:
 the relative velocity of two elements is v units
 the relative acceleration between two elements is a units
Temporal relationships:
 one element exists before another
 two elements must exist at the same time
 two elements must be separated in time by t units
Social relationships:
 a human element feels a particular way about a system
 a human element owns another (non-human) element
 a human element understands the operation of a system in a particular way


Relationships that are not about time can still change over time. For example, an element that is inside another element during one mode of operation can be outside of it during a different mode of operation. Therefore, one should not assume that non-temporal relationships are necessarily static in time.
Relationships can be represented in engineering artifacts, including the timing diagram, timeline diagram, mission reference profile, capability road map, and project schedule chart.
Social relationships include the implicit or explicit social obligations or expectations between the roles that human elements play in a system. These roles may be assigned different authorities, responsibilities, and accountabilities. See the discussion on organization behavior in the article Team Dynamics. Organizational behavior theories and human factors may need to be considered when engineering such a product system.
There can also be social relationships between the humans and the non-human elements of the system. This may involve how the human "feels" about things in the system or perhaps even the system as a whole. Humans inside or outside the system-of-interest may have different degrees of "understanding" with respect to how the system operates, its limitations and capabilities, and the best way to operate it safely and effectively. The "ownership" relationship can be important in determining things like who can operate or change some configuration or mode of the system.
There are many such social relationships in a product system that are often ignored or misunderstood when performing PSE. Social relationships can affect the overall performance or behavior of a product system to the point of determining its success or failure.


Core Product and its Enabling Products & Operational Services
A variety of systems (themselves being products or services) enable the development, delivery, operation and eventual disposal of a product, as shown in Figure 1. The concept of enabling systems is defined in the ISO/IEC 15288 standard (2015).

In the figure, the system-of-interest (SoI) goes into operation as a delivered product or offered service in the utilization stage while maintenance and logistics are provided (by a product sustainment system) simultaneously in the support stage. These two stages are commonly executed in parallel, and they offer opportunities to observe any need for changes in the properties of the product or service or how it is operated and supported. Making changes iterates the life cycle and results in new or improved products or features.
The delivered product and its enabling systems collectively form a wider system-of-interest (WSOI). The project design enabling system is an enterprise based system asset that establishes the strategy and means of organizing the projects to be executed along the life cycle. In many larger organizations, this type of enabling system is institutionalized and can be based upon recommendations of the Project Management Institute (PMI).
Product systems should be viewed as enabling service systems. That is, once deployed, a product system provides a service that contributes to an enterprise's operations. To the acquirer, the SoI provides operational services to users. This is true at several levels:
 Hardware and software products are used to enable the provisioning of service systems,
 Enterprises incorporate products as system assets and use them to enable operations, and
 Provided products are integrated into the system of systems.


Product Architecture, Modeling, and Analysis
IEEE standard 1471-2000 defines architecture as "the fundamental organization of a system embodied in its components, their relationships to each other, and to the environment, and the principles guiding its design and evolution" (IEEE 2000). Similarly, ISO/IEC 42010-2011 defines architecture as "fundamental concepts or properties of a system in its environment embodied in its elements, relationships, and in the principles of its design and evolution" (ISO/IEC 2011).
A product's purpose (stakeholder's need) is realized by a product system (the SoI). Because product systems are composed of different entities (components, assemblies, subsystems, information, facilities, processes, organizations, people, etc.) that together produce the results unachievable by any of the entities alone, architecting the product is based on a whole systems approach. To architect with a whole systems approach means to define, document, design, develop, manufacture, distribute, maintain, improve, and to certify proper implementation of the product's objectives in terms of the functional (the "what"), the behavioral (the use, or intended operations), the logical (interaction and relationships between entities) and the physical constructs (Wasson 2006; Maier 2009; Blanchard and Fabrycky 2011).
The system architect starts at the highest level of abstraction, concentrating on needs, functions, systems characteristics and constraints (concerns) before identifying components, assemblies, or subsystems. This is the systems view, and it is used to represent the stakeholder's market service description or the concept of operations (understanding of the opportunity/problem space).
Next to be documented, as needs become better understood, are architectural descriptions at different levels of abstraction, representing various stakeholders interests. These are the architecture models. They define the possible solution spaces for the product purpose in the form of detailed system, operational, behavioral, and physical requirements of the product system.
Different modeling techniques are then used to analyze different types of requirements. For operational scenarios and different modes of operation, there are hierarchical decomposition and allocation, architectural block diagrams (ABD), functional block diagrams (FBD), functional flow block diagrams (FFBD), and use case diagrams. For interactions and relationships among hardware and/or software components there are sequence diagrams, activity diagrams, state diagrams, and data flow diagrams. See (Maier 2009) Chapter 8 for an introduction to models and modeling.
Analysis of the solution space makes it possible to produce detailed technical specs, engineering drawings, blueprints, software architectures, information flows, and so on, that describe the entities in the product system. An entity's requirements bound its attributes and characteristics, levels of performance, operational capabilities, and design constraints. During design and integration, entity characteristics can be traced back to requirements (requirements traceability being a key aspect of SE). Verification and validation plans created during the requirements phase are the basis of testing certification that the product does what it was intended to do.
Overall, what occurs is the transformation of a set of requirements into products and processes that satisfy the stakeholder's need. The architecture is represented by a set of models that communicate an integrated view of the product's intent and purpose, and the interactions and interfaces required among all the different participating entities. The product's purpose is articulated in terms of business objectives (market, cost, functionality, performance, and time to deliver). The set of models includes sufficient variety to convey information appropriately to the stakeholders, designers/developers, specialty engineering, operations, manufacturers, management, and marketing and sales personnel.
Different architecture frameworks have been developed to guide product teams in defining the product architecture for commercial and for public enterprises. In general, an architecture framework describes a "view," meaning a "collection of models that represent the whole system from the perspective of a set of related stakeholder concerns." Prime examples of architecture frameworks are the Zachman framework (Zachman 1992), The Open Group


Architecture Framework (TOGAF) (TOGAF 2011), the Enhanced-Telecom Operations Map (e-TOM), just to mention a few in the commercial sector. In the case of public enterprises a few architecture frameworks include the Department of Defense Architecture Framework (DODAF 2.0) (DoD 2010), the Federal Enterprise Architecture Framework (FEAF) (FEA 2001), the British Ministry of Defense Architecture Framework (MODAF) (MOD 2004), etc.
Differences between acquired products and offered products play an important role in defining product system requirements. Acquired products are life cycle-managed directly by the acquirer; for instance, acquired defense systems are defined, developed, tested, owned, operated, maintained and upgraded by the defense agency. See the article Product Systems Engineering Key Aspects within this KA.


Specialty Engineering Integration
The INCOSE SE Handbook defines specialty engineering as:
"Analysis of specific features of a system that requires special skills to identify requirements and assess their impact on the system life cycle."
Areas of expertise that fall under this umbrella definition include logistics support, electromagnetic compatibility analysis, environmental impact, human factors, safety and health analysis, and training. The unique characteristics, requirements, and design challenges of a system-of-interest all help determine the areas of specialty that apply.
A number of specialty engineering areas are typically important to systems engineers working on the development, deployment, and sustainment of product systems. For example, logistics support is essential for fielded product systems that require maintenance and repair. The delivery of services, materials, parts, and software necessary for supporting the system must all be considered very early in the development activity. These factors should usually be


considered before the system requirements and concept definition are complete. To integrate these specialty disciplines sufficiently early on, the systems engineer needs to know what specialties relate to the system under development, how they relate to the systems engineering process, and how to integrate them into the life cycle process.
For product systems with significant hardware content and that operate in challenging environments, the following specialty engineering areas must usually be considered:
 manufacturability,
 reliability and maintainability,
 certification (essential where human safety is an issue),
 logistics support,
 electromagnetic compatibility (if they radiate),
 environmental impact,
 human factors,
 safety and health, and
 training.
The relationship of these specialty areas to the systems engineering process must be understood and considered. The key aspects of the relationship are:
 when the specialty needs to be considered,
 what essential data or information it provides,
 the consequences of not including the specialty in the systems engineering process, and
 how the systems engineers should interact with the specialty engineers.
Grady (2006) provides an overview, with references, for many of the specialty engineering disciplines, including reliability engineering; parts, materials, and process engineering (PMP); maintainability engineering, availability, producibility engineering, design to cost/life cycle cost (DTC/LCC), human factors engineering, corrosion prevention and control (CPC), system safety engineering, electromagnetic compatibility (EMC) engineering, system security engineering, mass properties engineering, and environmental impact engineering.
Eisner (2008) lists specialty engineering as one of the "thirty elements" of systems engineering. "Specialty engineering refers to a set of engineering topics that have to be explored on some, but not all, systems engineering efforts. In other words, some systems involve these special disciplines and some do not. Examples of specialty engineering areas include electromagnetic compatibility and interference, safety, physical security, computer security, communications security, demand forecasting, object-oriented design, and value engineering." Some of what we consider specialty engineering in the present article, Eisner includes among his "thirty elements" of systems engineering, but not as part of the specialty engineering element.
There is no standard list of specialty engineering disciplines. What is considered specialty engineering varies according to the community to which the systems engineering belongs, and sometimes to the preferences of the customer.


References
Works Cited
ANSI/IEEE. 2000. Recommended practice for architectural description for software-intensive systems. New York, NY, USA: American National Standards Institute (ANSI)/Institute of Electrical and Electronics Engineers (IEEE), ANSI/IEEE 1471-2000.
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Eisner, H. 2008. "Chapter 7. Essentials of Project and Systems Engineering Management," in The Thirty Elements of Systems Engineering, 3rd ed. New York, NY, USA: John Wiley & Sons.
Grady, J. 2006. "Chapter 3.7. System Requirements Analysis," in Specialty Engineering Requirements Analysis. New York, NY, USA: Academic Press.
Grady, J. 2006. System Requirements Analysis. New York, NY, USA: Academic Press.
Grady, J. 2010. Systems Synthesis - Product and Process Design. Boca Raton, FL, USA: CRC Press.
Hybertson, D. 2009. Model-oriented Systems Engineering Science: A Unifying Framework for Traditional and Complex Systems. Boston, MA, USA: Auerbach Publications.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015.Systems and software engineering - system life cycle processes.Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers.ISO/IEC 15288:2015.
ISO/IEC/IEEE. 2011. Systems and software engineering - Architecture description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.
Lawson, H. 2010. A Journey Through the Systems Landscape. London, UK: College Publications.
Maier, M., and E. Rechtin. 2009. The Art of Systems Architecting, 3rd ed. Boca Raton, FL, USA: CRC Press.
MOD. 2004. Ministry of Defence Architecture Framework (MODAF), version 2. London, UK: UK Ministry of Defence.
The Open Group. 2011. TOGAF, version 9.1. Hogeweg, The Netherlands: Van Haren Publishing. Accessed August 29, 2012. Available at: https:/ / www2. opengroup. org/ ogsys/ jsp/ publications/ PublicationDetails. jsp?catalogno=g116.
Wasson, C.S. 2006. System Analysis, Design, and Development. Hoboken, NJ, USA: John Wiley & Sons.
Zachman, J.A. 1992. "Extending and Formalizing the Framework for Information Systems Architecture." IBM Systems Journal. 31 (3): 590-616.


Primary References
Eisner, H. 2008. "Chapter 7. Essentials of Project and Systems Engineering Management," in The Thirty Elements of Systems Engineering, 3rd ed. New York, NY, USA: John Wiley & Sons.
Lawson, H. 2010. A Journey Through the Systems Landscape. London, UK: College Publications. Wasson, C.S. 2006. System Analysis, Design, and Development. Hoboken, NJ, USA: John Wiley & Sons.

Additional References
ANSI/IEEE. 2000. Recommended practice for architectural description for software-intensive systems. New York, NY, USA: American National Standards Institute (ANSI)/Institute of Electrical and Electronics Engineers (IEEE), ANSI/IEEE 1471-2000.
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Grady, J. 2006. "Chapter 3.7. System Requirements Analysis," in Specialty Engineering Requirements Analysis. New York, NY, USA: Academic Press.
Grady, J. 2006. System Requirements Analysis. New York, NY: Academic Press.
Grady, J. 2010. Systems Synthesis- Product and Process Design. Boca Raton, FL, USA: CRC Press.
Hybertson, D. 2009. Model-oriented Systems Engineering Science: A Unifying Framework for Traditional and Complex Systems. Boston, MA, USA: Auerbach Publications.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2. San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC. 2008. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions. ISO/IEC/IEEE 15288:2008.
ISO/IEC/IEEE. 2011. Systems and software engineering - Architecture description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.
Maier, M., and E. Rechtin. 2009. The Art of Systems Architecting, 3rd ed. Boca Raton, FL, USA: CRC Press. Zachman, J. 2008. "John Zachman's Concise Definition of The Zachman Framework(tm)." Zachman International Enterprise  Architecture.  Accessed  August  29,  2012.  Available  at:  http:/ / www. zachman. com/ about-the-zachman-framework.


Business Activities Related to Product Systems Engineering

 Lead Author:
 Ricardo Pineda
-
This topic discusses the interfaces between product systems engineering and other 'back office' and management activities that take place in an enterprise.






Marketing, Product Life Cycle Management, & Quality Management
Product systems engineering (PSE) includes critical and robust interfaces with related business activities, such as marketing, product life cycle management (PLM), and quality. Traditionally, PLM has been a critical stage in the integrated product development process (IPDP) and continues to be an important tool for life cycle management after product deployment. PLM provides an important component of the PSE end-to-end view. The other component is the "breadth" component that captures everything relevant to the system at each life cycle stage. Recently, the focus has started to shift from the idea of managing just the life of the product, to an expanded view that includes the management of product-lines (families) or product platforms themselves. This provides an increase in sustainability, flexibility, reduced development times, and important reductions in costs as new or enhanced products are not launched from scratch every time.
PSE also includes interfaces with the marketing function; in particular, PSE works closely with the business and market development organizations to elicit product needs and intended operations in target markets to define product roll-out and possible phases of product introduction. Analysis of the market is critical during the entire product life cycle from conception through retirement with the understanding that each life cycle phase requires very different marketing approaches. During concept development, marketing has to help determine the potential market, the addressable market segments, define products, and product/innovations requirements for those markets. During the product introduction stage, marketing has to create demand and prompt early customers to try the product. During the growth and maturity phases, marketing has to drive public awareness, develop the brand, and differentiate the product and its features and feature releases to compete with new market entrants. During saturation, marketing must help manage diminishing volumes and revenues as focus shifts from top line (increased market share) to bottom line (increased production and distribution efficiencies) considerations. See the article on Procurement and Acquisition.
The links between PSE and quality are just as critical. The relationships between PSE and quality also reflect the broad view which includes the product and opportunity, but also the company's internal goals, processes, and capabilities. Quality schemes which focus on a tangible product have been extensively used historically. More recent approaches that acknowledge and match PSE's holistic view have come into use. Issued during 1988, ISO 9000 is a family of standards which focuses on processes and the organization instead of the product itself. In addition, it calls out specific requirements for the design of products and services. ISO 9001 has served as a "platform" for many other schemes which are tailored to specific domains. A collaborative effort of the International Aerospace Quality Group, AS9100 contains all of the base requirements of ISO 9100 and expands further requirements which are critical and specific to the aviation, space, and defense industries. Similarly QS-16949 is a technical standard based on ISO 9001


but expanded to meet specific requirements in the worldwide automotive industry. PSE should play an important role in the design and implementation of any quality management system. See the article on Quality Management.
Capability Maturity Model Integrated (CMMI) for Development is a process improvement approach whose goal is to help organizations improve their performance. CMMI can be used to guide process improvement across a project, a division, or an entire organization. Although initially used in software engineering and organizational development, CMMI use is spreading to other domains since it provides organizations with the essential elements for effective process improvement. According to the Carnegie Mellon Software Engineering Institute, CMMI describe "an evolutionary improvement path from ad hoc, immature processes to disciplined, mature processes with improved quality and effectiveness." (SEI 2010).

Project Management & Business Development
The end-to-end view mandated by PSE requires strong relationships with project management and business development activities. The 'concurrent' thinking encouraged by PSE necessarily requires multiple projects to move forward in parallel, but with a high level of coordination. In this sense, PSE and project management (see Systems Engineering and Project Management) are two heavily intertwined disciplines which have been shown to generate synergy and added value for the stakeholders.
The systems engineering management plan (SEMP) is the key document covering the activities, milestones, organization, and resource requirements necessary to ensure the system-of-interest accomplishes its intended goals and mission. A key objective of the SEMP, which is usually developed during the conceptual design phase, is to provide the structure, policies, and procedures to foster the optimum management of projects and activities needed for system development and implementation (Blanchard and Fabrycky 2011).
An effective and agile PSE function can make important contributions to business development for an enterprise or company. The primary goal of business development activities is to identify new types of business/product/services which are believed to address existing or potential needs and gaps (new markets), to attract new customers to existing offerings, and to break into existing markets. PSE's end-to-end view of the life cycle can support market development by intelligence gathering, feedback on market acceptance or rejection, strategic analysis, and proposition development and campaign development. Finally, PSE should encourage the consideration of several factors within the new product development which may enhance market development. For example, in well-established companies, business development can often include setting up strategic alliances with other, third-party companies. In these instances, the companies may leverage each others expertise and/or intellectual property to improve the probability for identifying, researching, and bringing to market new businesses and new products. See (Sørensen 2012).

Supply Chain Management & Distribution Channel Management
PSE provides the following information to the supply chain management function in an enterprise:
 product specifications (including intended uses of the product),
 product acceptance criteria (for accepting delivery of the product from the supplier),
 product testing and qualification plans and procedures, including which ones are responsibility of the supplier and which ones are responsibility of the acquirer,
 interface specifications associated with each product,
 supplier certification criteria (including a list of pre-certified suppliers), and
 feedback on quality of products delivered by suppliers.
Supply chain management will, as necessary, manage the identification and certification of qualified suppliers with the concurrence of, and coordination with, systems engineering and product engineers.
PSE provides the following information to the distribution channel management function in the enterprise:


 product specifications (including intended uses of the product),
 product user manuals (including installation and maintenance documentation),
 product packaging (for safe delivery of product and for display in retail channels),
 product qualification data (to prove that product meets its design requirements),
 product certification data (to prove product is certified for safe and secure operation),
 user support instructions, and
 operator certification criteria.
Distribution channel management will, as necessary, manage the identification and certification of qualified distributors with the concurrence of, and coordination with, systems engineering and product engineers.

Capability Management & Operations Management
Capability is defined in various ways, but each definition is consistent with the notion of "the ability to do something useful." Products and services are acquired by end users to enable and improve their operational capability to let them do something useful, whether in a military context (e.g., weapon systems improve the capability to conduct effective military operations), or a social context (e.g., a car may improve the ability to satisfy the transport needs of a family). Users acquire products (e.g., military equipment, cars, "productized" service offerings from airlines and taxi companies, etc.) to contribute to satisfying their capability needs.
Capability management involves identifying and quantifying capabilities (existing, new, or modified) that will be needed to meet enterprise goals, as well as selecting a coherent set of product and services across all components of capability that will be integrated to provide the needed capabilities. So normally, requirements for "product systems" are derived from capability management. Capability management is likely to include trade-off processes to make the best use of existing products or low-risk evolutions of them, and conversely identifying when a capability need can only be satisfactorily met by a new-generation product, or even a new type of product altogether. In some cases, new offered products or disruptive technologies (e.g., jet engine, nuclear weapons, and internet) create opportunities for new or improved capabilities, in which case capability management focuses on ensuring that all needed components of capability are put in place to exploit the opportunity provided by the new product or technology. See Capability Engineering.
Operations management uses an integrated set of product systems to deliver value to the enterprise and its stakeholders. Operations management involves bringing new product systems into operation, normally while maintaining business continuity, so transition plans and relevant metrics are critical; next, operations management addresses some of the following: working up to full operational efficiency across all components of capability, coping with incidents, contingency plans to deal with major disruptions, adjusting the system to cope with new ways of working and to deliver new services to meet new enterprise requirements and accommodate new product systems entering service, and eventually planning transitions out of service or major in-service upgrades. PSE supports operations management by defining all dependencies for successful operation on other systems and services, and by providing ongoing engineering support for spares and repairs, obsolescence management, and system upgrades. Systems engineering in the in-service phase has been analyzed (Elliott et al. 2008) and is best viewed as the same basic systems engineering process conducted at a much higher tempo (Kemp and Linton, 2008) and requiring detailed understanding of constraints imposed by the current environment and usage. Configuration management and configuration status accounting during operation is very important for high value and high integrity systems to ensure that any changes are designed to fit the "as-is" system, which may be significantly different from the "as-originally intended" specification and design.


Product Engineering, Assembly, Integration, & Test
Product engineering typically results in an engineering model that is used as the "blueprint" for assembling, integrating, and testing (AIT) a product system. These AIT activities may be performed on prototype versions, as well as final production versions to be delivered to end users. There is significant experience in domain specific industries in performing AIT for complex products. Unfortunately, very little is written in the general literature. Wasson (2006) and de Jong (2008) cover some of these aspects. See also System Integration and System Verification.
For software products, the collection of code modules are integrated via some form of integration program (typically called "make"). The integrated modules are then subjected to tests to exercise the various potential paths through the software. Since software can be easily changed, it is common to use some form of regression testing based upon test suites in order to verify software correctness. Another common means of testing is by fault injection as described by Voas and McGraw (1998).

Manufacturing, Test, & Certification
Systems engineers usually work with manufacturing indirectly through the electrical and mechanical design teams. There are times in the development cycle when a direct interface and working relationship between systems engineering and manufacturing is appropriate and can improve the probability of program and system success. Early in the program the system concept must be examined to determine if it is manufacturable. The requirements and the concept design should be reviewed with the manufacturing engineers to obtain an assessment of the risks associated with the production of the system. If substantial risks are identified, then actions that improve the manufacturing capabilities of the organization, modify the design, and perhaps change the requirements may be needed to reduce the identified risks to acceptable levels. Manufacturing prototypes or proof of manufacture (POM) units may be necessary to reduce the risk and to demonstrate readiness to proceed with the design and the system development. Similarly, the systems engineers must establish that the system will be testable early in the product development phase. The requirements should be mapped to verification methods of inspection, analysis, demonstration, and test before they are released to the design team. All requirements mapped to test must be examined to determine the test methods and the risk associated with accomplishing the necessary tests as part of the product qualification, acceptance, and release process. Where risks are identified, the systems engineers must work with the test engineers to develop the necessary test capabilities.

Product Delivery & Product Support
Most products live much longer in the usage phase than in the development phase. The costs associated with product support are usually greater than the cost of developing the product. These two facts make it very important for the product systems engineer to consider the product delivery and support as part of the earliest activities during development. The design of the product dictates the maintenance and support that will be required. The systems requirements are the first means of influencing the design to achieve the desired product support. If maintenance, reliability, and support requirements have not been defined by the customer, then the systems engineer must define these to achieve the support methods and costs that the customer, users, and the organization responsible for support will find financially acceptable.


References
Works Cited
de Jong, I. 2008. Integration and Test Strategies for Complex Manufacturing Machines: Integration and Testing Combined in a Single Planning and Optimization Framework. Saarbrücken, Germany: Verlag.
Elliott, B. et al. INCOSE UK Chapter Working Group on Applying Systems Engineering to In-Service Systems, Final Report. Somerset, UK: INCOSE UK Chapter Working Group. 2008. Accessed November 11, 2014 at INCOSE UK http:/ / www. incoseonline. org. uk/ Documents/ Groups/ InServiceSystems/ is_tr_001_final_report_final_1_0.
pdf.
Kemp, D., and R. Linton. 2008. "Service Engineering." Proceedings of the 18th Annual International Symposium of the International Council on Systems Engineering, June 15-19, 2008, Utrecht, The Netherlands.
CMMI Product Team. CMMI for Development Version 1.3 (CMU/SEI-2010-TR-033). 2010. Pittsburgh, PA: Software Engineering Institute, Carnegie Mellon University. Accessed on 10 Nov 2014 at Software Engineering Institute Library http://resources.sei.cmu.edu/library/asset-view.cfm?AssetID=9661
Sørensen, H.E. 2012. Business Development: a market-oriented perspective. Hoboken, NJ, USA: John Wiley & Sons.
Voas, J.M., and G. McGraw. 1998. Software Fault Injection. Hoboken, NJ, USA: John Wiley & Sons. Wasson, C.S. 2006. System Analysis, Design, and Development. Hoboken, NJ, USA: John Wiley & Sons.

Primary References
de Jong, I. 2008. Integration and Test Strategies for Complex Manufacturing Machines: Integration and Testing Combined in a Single Planning and Optimization Framework. Saarbrücken, Germany: Verlag.
Voas, J.M., and G. McGraw. 1998. Software Fault Injection. Hoboken, NJ, USA: John Wiley & Sons. Wasson, C.S. 2006. System Analysis, Design, and Development. Hoboken, NJ, USA: John Wiley & Sons.

Additional References
Phillips, F.Y. 2001. Market-Oriented Technology Management: Innovating for Profit in Entrepreneurial Times, 1st ed. New York, NY, USA: Springer.


Product Systems Engineering Key Aspects

 Lead Author:
 Ricardo Pineda
-

Acquired Products versus Offered Products
The emphasis for traditional systems engineering (TSE) is in the provisioning of products and related services that meet stakeholder needs and requirements. For acquired products, an acquirer specifies the needs and
requirements, selects a supplier for development and provisioning, and then receives the needed products and services. The acquirer, after acceptance, usually owns, operates, and maintains the product and the support systems supplied by the developer. Offered products are provided by suppliers based on opportunities to develop and offer products and services to potential users of the product based on business objectives usually measured in terms of value addition to the stakeholder.
In the provisioning of product systems and related services, the enterprise owning and provisioning the product and services typically makes agreements with other suppliers to also provide elements, methods, and tools that are used during their entire life cycle. The supplying enterprises, in turn, may make further agreements with suppliers in regards to building a supply chain. The complexities of dealing with supply chains must be accounted for with respect to cost, risk, and schedule and thus can have an impact upon product or service maturity. (See articles under the Systems Engineering Organizational Strategy knowledge area (KA) in Part 5.)

Acquired Products
Specific needs for a product or service typically result in some form of an agreement between the acquirer and a supplier as specified in the agreement processes of ISO/IEC 15288 (2015). The acquirer specifies the need and requirements for the properties of the expected product or service and may or may not place specific requirements upon how the supplier plans to organize their life cycle treatment of the product or system.
The degree of formality involved with the agreement varies and is strongly influenced by whether the customer is a government entity or a commercial entity. Government contracts usually incorporate strict specifications and other unique requirements that are rarely found in commercial contracts. Government acquisition agents often specify design characteristics in addition to functional and performance specifications. Design specifications place constraints on product systems engineering (PSE) by explicitly defining the details of a product's physical characteristics. The government acquirer may also specify how the product is to be designed and developed or how it is to be produced. Government specifications tend to be longer, more detailed, and more complex than functional specifications and much longer than specifications used in a commercial environment.
When contracting with the government or similar enterprises, the PSE must identify disagreements related to the meaning of a particular provision in a contract, and work with contracts to get a written resolution of all ambiguities and issues in the specifications. Failure to do this can lead to legal disputes and government claims of product substitution which can prevent acceptance of the product system and result in financial penalties.
Developing product systems for government customers requires PSE to do a thorough review and perform internal coordination within the enterprise to prevent it from submitting proposals that are non-compliant because the requirements are not fully understood.


Offered Products
Given an opportunity or perceived opportunity, an enterprise may decide to develop and offer products or services to a broader potential marketplace. The properties of the product or service are often determined through surveying and/or forecasting the potential market penetration. The supplier determines the structure and operation of an appropriate life cycle model for achieving the desired results (Pugh 1990).

Supply Chains and Distribution Channels
The supply of products and services to the owner of a product or service that is acquired or offered at various points during the life cycle is vital to success. It is this wider system-of-interest (WSOI) that is the outsourcing holism that must be treated properly in order to provide successful products or services. A portrayal of supply chain structure is provided in Figure 1 below.

In Figure 1, it is important to note that in an agreement with a supplier, the outsourcing can involve delivering complete system description solutions or portions thereof. For example, a supplier could, given a set of stakeholder requirements developed by the acquirer, develop and supply a system that conforms to the architectural solution. The supplier in turn can be an acquirer of portions of their delivered results by outsourcing to other suppliers.
In regards to production, the outsourcing agreement with a supplier can vary from total production responsibility to merely supplying instances of system elements to be integrated by the acquirer. Once again, these suppliers can be acquirers of portions of their delivery from outsourcing to other suppliers.
In regards to utilization, for non-trivial systems, outsourcing agreements can be made with a supplier to provide for operational services, for example, operating a health care information system. Further agreements with suppliers can involve various forms of logistics aimed at sustaining a system product or service or for supplying assistance in the


form of help desks. Once again, suppliers that agree to provide services related to utilization can be acquirers of the services of other suppliers.
Important to all supply chains is the concept that supplying parties contribute some form of added value to the life cycle of a system-of-interest. The proper management of a supply chain system asset is a vital part of the operations of an enterprise. In fact, the supply chain itself is an enterprise system-of-interest that is composed of acquirers and suppliers as system elements. There is definitely a structure tied together by agreement relationships. Further, the operation of the supply chain results in an emergent behavior. The supply chain system becomes a vital infrastructure asset in the system portfolios of enterprises and forms the basis for extended enterprises.
Similar to a supply chain, the distribution channels for a product system can be a complex web of relationships between the product supplier and various distributors, for example, package delivery companies, warehouses, service depots, wholesale outlets, retail sales establishments, operator training and certification organizations, and so on. The nature of the distribution channels could have a significant impact on the architecture or design of a product system.
PSE may need to include special features in the product design to accommodate for the needs of distribution channel elements, for example, heavy load tie down or lifting brackets, protective shipping packages, retail marketing displays, product brochures, installation manuals, operator certification packages, training materials, and so on. Sometimes it may be necessary to create special versions (or instances) of the product for the training of operators and users for certifying safe or secure operations, for environmental testing and qualification, for product demonstration and user testing, for patent application, for load testing and scalability demonstrations, and for interface fit checking and mass balance certification, to name some examples.


Product Lifecycle and Product Adoption Rates
The life cycle of each product follows the typical incremental development phases shown below (Wasson 2006, 59-65). A particular product to be engineered could be preceded by a previous "model" of that product as shown in the product model life cycle below, and could be superseded later by a newer model of that product. It is worth noting that there is no standard set of life cycle phases. The example below is one of many ways that the phases can be structured.

From an industry perspective, managing a product's life cycle involves more than just the engineering aspects:
Product lifecycle management (PLM) is the process of managing the entire lifecycle of a product from its conception through design and manufacture to service and disposal. PLM integrates people, data, processes and business systems, and provides a product information backbone for companies and their extended enterprise. (CIMdata 2012)
There are many PLM tools and services available for facilitating the development and management of complicated product life cycles and especially for product line management (insert link to product line mgmt section here).




The product and product model life cycles are driven by the product adoption rate, illustrated below, that is commonly experienced by most engineered products (Rogers 2003). As products reach market saturation (i.e., on the down slope of the curve below) then there would typically be a new, upgraded version of the product ready for delivery to the marketplace. PSE serves a critical role in determining the best timing for delivery of this new version and the set of features and functions that would be of the greatest value at that time.





Integrated Product Teams and Integrated Product Development
Product systems as discussed throughout this KA mandate the participation of different disciplines for their success during their entire lifecycle from concept to product disposal or retirement. Rapid technology innovations and market pressures in the mid '90s demanded development process (mostly input-output serial) to shorten their development time and development cost, and to improve product quality to remain competitive. For commercial enterprises, the typical development times of 18-24 months to deploy new products into markets of the '90s have in many cases been reduced to 6-12 months and even 3-6 months for the highly competitive leading edge information technology products.
An initial response to these pressures was concurrent engineering. Concurrent engineering is "... a systematic approach to the integrated, concurrent design of products and their related processes, including manufacturing and support to cause developers, from the outset to consider all elements of the product lifecycle from conception through disposal, including quality, cost, schedule and end user requirements." This definition has evolved into the integrated product development (IPD) as more descriptive of this concurrency to describe the continuous integration of the entire product team, including engineering, manufacturing, test, and support through the life cycle. Later, as the importance of the process was recognized, the terminology was modified to integrated product and process development or IPPD (INCOSE 2012).
The INCOSE Systems Engineering Handbook v. 3.2.2 provides a good description of the IPT and IPDT process; the different types of IPDT; the steps in organizing and running an IPDT; good examples of IPDT, particularly for acquired systems; and a good discussion on IPDT pitfalls to avoid. (INCOSE 2012)


IPD/IPPD helps plan, capture, execute, and evaluate programs to help design, test, build, deliver, and support products that satisfy diverse stakeholder requirements. IPD/IPPD outlines the necessary infrastructure needed to deploy, maintain, evaluate and continuously improve processes and tools by aligning people (IPTs) and processes to realize product goals (customer satisfaction). The implementation of Integrated Product Development Processes (IPDP) requires an integrated approach for program planning and generally includes the following: Business Strategy, Program Management and Control, Project Planning, Product Requirements and Architecture Development, Product Design and Development, Production and Deployment, Product Verification and Validation, and Operations and Maintenance Support.
At each development stage, there is a decision gate that helps decide if the IPDP is feasible to enter the next stage of product development. IPD utilizes multi-functional IPTs to optimize the individual product and processes to meet overall cost and performance objectives. IPTs are a cross-functional group of people typically including representatives of all the relevant stakeholders in the project, who are brought together for delivering an integrated product to an external or internal customer using relevant IPDP. The main function of the IPTs is to ensure the business, technical and economical integrity and overall success of the product that is delivered to its eventual customer. IPTs carry out tailored IPDPs and follow relevant SE processes to deliver products that satisfy customer needs, overcomes external constraints, and adheres to the overall program strategy.
In the case of commercial enterprises, product development is tightly coupled with business strategies (short and long term), stakeholder value added measured in terms of return on investments (ROI), market presence/coverage, and other strategies as defined by the business objectives. Thus, product integration teams include strategic planners, business managers, financial managers, market managers, quality assurance managers, customer representatives, and end-users, as well as other disciplines required for acquired products. Phillips (2001), Annachino (2003), and Morse (2007) provide good discussions on this topic.

Role of Architectures, Requirements, and Standards
The architectural properties of a product system are influenced by the concerns of the various stakeholders as indicated in the ISO/IEC 42010 standard (ISO/IEC 2011). The stakeholders have various views that they express based on their specific perspective. These views are vital in establishing requirements and are inputs to those responsible for defining the functions, structures, and relationships needed to achieve the desired product or service.
A number of stakeholders have been identified in the discussions of product systems. It would be possible to identify a set of important stakeholders based on the life cycle thinking provided by the ISO/IEC 15288 standard (2015), for example, one such set could consist of owners, conceivers, developers, producers, users, and maintainers as discussed by Lawson (2010). As mentioned earlier, these stakeholders should cooperate at all stages of the life cycle in specifying requirements, verifying that the requirements are met, and validating that the products produced provide needed capabilities.
In addition to the two standards that have been identified, there are a variety of standards related to specialty aspects of products, such as safety and security, as well as standards that are applicable for project management and life cycle considerations, such as requirements and quality management.


Role of Modeling, Simulation, Prototyping, and Experimentation
Modeling, simulation, prototyping, and experimentation are techniques that have the purpose of improving stakeholder knowledge and shared understanding about aspects of the system to de-risk system development and operation before heavy commitment of time and funds. Examples of this are found below:
 Understanding future needs: "Warfighting experiments are the heart of the Army's warfighting requirements determination process. Progressive and iterative mixes of high fidelity constructive, virtual, and live simulations using real soldiers and units in relevant, tactically competitive scenarios provide Army leaders with future operational capability insights" (US Army 2012),
 Simulation is used to predict and optimize aspects of system performance for which there are good mathematical or logical models before committing the final physical design, and also to verify and validate the system design in scenarios where physical testing is too difficult, dangerous, or expensive, for example, checking the performance envelope of military systems in a wide range of engagement scenarios where test firing thousands of rounds to get statistically valid data is clearly unaffordable, ensuring that the safety features in a nuclear power station will operate correctly in a wide range of stressing scenarios, etc.,
 Prototyping (physical and virtual) is used in a wide variety of ways to check out aspects of system performance, usability, utility, and to validate models and simulations as part of the iterative process of converging on a final design,
 In a manufacturing context, the first units produced are often "prototypes" intended to make sure the production
process is working properly before committing to high rate production, and are often not shipped to end users, but used for intensive testing to qualify the design, and
 Simulation is also used extensively for training and marketing purposes. For training, an accurate model of the human machine interface and representation of the operational context allows operators to do most of their training without putting operational hours on the real system enabling them to learn emergency procedures for combat and accident scenarios in a safe and repeatable environment; for example, airline and military pilots now train mainly on simulators. System simulators of various levels of fidelity are used to familiarize customers and end users with the potential characteristics and benefits of the system, available options and trade-offs, and integration issues early in the development and acquisition process.
All of these methods use a variety of physical and mathematical representations of the system and its environment so modeling is an enabler for simulation, prototyping, and experimentation.

Increasing Role of Software in Product Functionality
An important trend in commercial products is the increasing importance of software in an increasingly wide range of products. Everything from phones, cameras, cars, test gear, and medical equipment now has essential functionality implemented in software. Software has had an increasing role in providing the desired functionality in many products. The embedding of software in many types of products accounts for increasing portions of product functionality. In tangible products such as cars, software helps improve functionality and usability (cruise control, climate control, etc.). In intangible products such as insurance, software helps in improving operational efficiency, data accessibility, etc.
The movement toward the internet of "things" where sensing and activating functions are incorporated is now starting to permeate. The use of various software products in proving service is also described in the Service Systems Engineering article.
Recent advancements in IT and software have assisted in their increased use in PSE. Although software development is already a very complex field, the role of software in the development and functionality of products is growing larger each day.


There is a need to broaden the horizons of software engineers to think of problem solving not only in software terms, but also using the systems thinking approach. For this purpose, software engineers need to be able to think critically about the problem and also the possible solutions to the problem or opportunity and its implication for business objectives.

Product Integration and Interface Control
Integration is "the set of activities that bring together smaller units of a system into larger units" (Eisner 2008). Products may consist of several systems, subsystems, assemblies, parts, etc., which have to work together as a whole to deliver the offered product's functionalities at specified performance levels in the intended operations environment. Product integration entails not only the working together of hardware and software components, but also the organization, processes, people, facilities, and the resources for the manufacturing, distribution, maintenance, customer support, sales channels, etc. Grady (2010) groups the above information into three fundamental integration components: functional organization, product integration, and process integration.
PSE plays an important role to ensure well defined interfaces, interactions, relationships, information exchange, and processes requirements between product components. These requirements are baseline, documented, traced, verified, and validated for the end-to-end Product integration and to maintain and ensure product offering integrity during its life cycle. The systems engineering hierarchical decomposition level allows requirement definition and allocations at different levels of abstraction to define the building blocks of the product architecture; these building blocks are assigned to integrated product development teams (IPDTs) for detailed design and development. The IPDTs or the systems engineering integration team (SEIT) must interact with all involved players to generate appropriate architectural block specifications at the lower tier of development for a product's architectural configuration and configuration tracking. As the building blocks are put together, interface requirements, information exchange, and interaction and relationships among entities are verified against the baseline. Once a configuration item has been built and tested against the baseline, test and verification at higher levels are conducted to obtain the final product configuration; the final product configuration can only be changed by a formal approval from a configuration control board (CCB). Note: the acronym CCB is often used to mean the change control board that, in addition to configuration control, makes decisions of any aspect of a project or an enterprise.
Interface agreements, specifications, and interface designs are usually documented through the interface control documents (ICD) and the interface design descriptions (IDD); in some instances, depending on the complexity of the product and the type of internal and/or external interfaces, an interface control working group (ICWG) is created to analyze and baseline changes to an interface for further recommendation to the CCB.
A configuration item (CI) may be hardware (HWCI), software (SWCI), firmware, subsystems, assemblies, non-development items, commercial off-the-shelf (COTS) items, acquirer furnished equipment, and/or processes. Please see Wasson (2006), Grady (2006), and INCOSE SE Handbook v. 3.2.2 for a more detailed description of configuration and interface control.
A product may experience hundreds of changes during its life cycle due to new product releases/enhancements, repair/replacement of parts, upgrades/updates in operating systems, computer infrastructure, software modules, organizational changes, changes in processes and/or methods and procedures, etc. Thus, strong mechanisms for bookkeeping and activity control need to be in place to identify, control, audit, account and trace interfaces, interactions, and relationships between entities that are required to maintain product configuration status (Eisner 2008). The product configuration and CI's are then controlled through the configuration management process.


Configuration Management and Risk Management
Configuration management (CM) deals with the identification, control, auditing, status accounting, and traceability aspects of the product, and broadly covers the book-keeping and control activities of the systems engineering process (Eisner 2001). Any product configuration changes to the baseline (configuration item, operational baseline, functional baseline, behavior baseline) or product baseline are submitted to a configuration control board (CCB) through an engineering change request (ECR) and/or a configuration change request (CCR). The CCB then analyzes the request to understand CI impacts and the feasibility (time and cost) of authorization or rejection of change request(s). The lack of proper control and tracking of CI and product baselines may result in a loss of features, functionality, data, interfaces, etc., leading to backtracking and CI version losses which may affect the offered product. All approved changes will have to be baselined, documented, and tested for backward compatibility and to ensure compliance with the integrated product functionality. Thus, successful implementation and life cycle management of the product mandates a highly disciplined CM process that maintains proper control over the product and its components. Please see the INCOSE Systems Engineering Handbook v. 3.2.2 (2012) for a detailed description of the CM Process.
Risk management deals with the identification, assessment, and prioritization of technical, cost, schedule, and programmatic risks in any system. Almost all engineered systems are designed, constructed, and operated under some level of risks and uncertainty while achieving multiple, and often conflicting, objectives. As greater complexities and new technologies are introduced in modern systems, the potential of risks have significantly increased. Thus, the overall managerial decision-making process should involve an extensive cost-benefit analysis of all identified, qualified, and evaluated risks (Haimes 2008). Risk management involves the coordinated and most cost-effective application of resources to minimize, monitor, and control the probability and/or impact of all identified risks within the systems engineering process. The risk management process requires the involvement of several disciplines and encompasses empirical, quantitative, and normative judgmental aspects of decision-making. Furthermore, risk assessment and management should be integrated and incorporated within the broader holistic approach so technology management can help align the risk management requirements to the overall systems engineering requirements. Thus, the inclusion of a well defined risk management plan that deals with the analysis of risks, within the systems engineering master plan is vital for the long term and sustained success of any system (Blanchard and Fabrycky 2011).

References
Works Cited
Annachino, M. 2003. New Product Development: From Initial Idea to Product Management. Amsterdam, Netherlands: Elsevier.
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Eisner, H. 2008. Essentials of Project and Systems Engineering Management, 3rd ed. New York, NY, USA: John Wiley & Sons.
Grady, J. 2006. System Requirements Analysis. New York, NY, USA: Academic Press.
Haimes, Y. 2008. Risk Modeling, Assessment, and Management, 3rd ed. New York, NY, USA: John Wiley & Sons.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015.Systems and software engineering - system life cycle processes.Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of


Electrical and Electronics Engineers.ISO/IEC 15288:2015.
ISO/IEC/IEEE. 2011. Systems and software engineering - Architecture description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.
Kass, R. 2006. "The logic of warfighting experiments." DOD Command and Control Research Program (CCRP). August 2006. Accessed 23 April 2013 at http://www.dodccrp.org/files/Kass_Logic.pdf.
Lawson, H. 2010. A Journey Through the Systems Landscape. London, UK: College Publications.
Morse, L., and D. Babcock. 2007. Managing Engineering and Technology. International Series in Industrial and Systems Engineering. Upper Saddle River, NJ, USA: Prentice Hall.
Phillips, F. 2001. Market Oriented Technology Management: Innovating for Profit in Entrepreneurial Times. New York, NY, USA: Springer.
Pugh, S. 1990. Total Design: Integrated Methods for Successful Product Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Reinertsen, D. 1997. Managing the Design Factory: A Product Developers Tool Kit. New York, NY, USA: Simon & Schuster Ltd.
Rogers, E.M. 2003. Diffusion of Innovations, 5th ed. New York, NY, USA: Free Press.
Smith, P., and D. Reinertsen. 1997. Developing products in half the time - new rules, new tools, 2nd ed. Hoboken, NJ, USA: John Wiley & Sons.
US Army. 2012. "Chapter 2, section A.4" in Army Science and Technology Master Plan. Accessed January 12, 2012. Available at: http://www.fas.org/man/dod-101/army/docs/astmp/c2/P2A4.htm.
Wasson, C.S. 2006. System Analysis, Design, and Development. Hoboken, NJ, USA: John Wiley & Sons.

Primary References
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Prentice Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.
Eisner, H. 2008. Essentials of Project and Systems Engineering Management, 3rd ed. New York, NY, USA: John Wiley & Sons.
Wasson, C.S. 2006. System Analysis, Design, and Development. Hoboken, NJ, USA: John Wiley & Sons.

Additional References
Annachino, M. 2003. New Product Development: From Initial Idea to Product Management. Amsterdam, Netherlands: Elsevier.
Haimes, Y. 2008. Risk Modeling, Assessment, and Management, 3rd ed. New York, NY, USA: John Wiley & Sons. Kass, R. 2006. "The logic of warfighting experiments." DOD Command and Control Research Program (CCRP). August 2006. Accessed 23 April 2013 at http://www.dodccrp.org/files/Kass_Logic.pdf.
Lawson, H. 2010. A Journey Through the Systems Landscape. London, UK: College Publications.
Morse, L., and D. Babcock. 2007. Managing Engineering and Technology. International Series in Industrial and Systems Engineering. Upper Saddle River, NJ, USA: Prentice Hall.
Phillips, F. 2001. Market Oriented Technology Management: Innovating for Profit in Entrepreneurial Times. New York, NY, USA: Springer.
Pugh, S. 1990. Total Design: Integrated Methods for Successful Product Engineering. Englewood Cliffs, NJ, USA: Prentice Hall.


Reinertsen, D. 1997. Managing the Design Factory: A Product Developers Tool Kit. New York, NY, USA: Simon & Schuster Ltd.
Rogers, E.M. 2003. Diffusion of innovations, 5th ed. New York, NY: Free Press.
Smith, P., and D. Reinertsen. 1997. Developing products in half the time - new rules, new tools, 2nd ed. Hoboken, NJ, USA: John Wiley & Sons.
US Army. 2012. "Chapter 2, section A.4" in Army Science and Technology Master Plan. Accessed January 12, 2012. Available at: http://www.fas.org/man/dod-101/army/docs/astmp/c2/P2A4.htm.

Product Systems Engineering Special Activities

 Lead Author:
 Ricardo Pineda
-
Product systems engineering has activities that are unique to products. This article discusses many of them.

Readiness Level Assessments
As a new system is developed, it is essential to verify
and validate that the developed system is mature enough to be released as an operational product or service. Technology readiness assessments (TRA) are established tools used to qualify technology development and help make investment decisions within complex development programs in order to deploy systems or elements of technology to an end user in a timely fashion.
This notion of maturity was formalized by the US National Aeronautics and Space Administration (NASA) (Mankins 1995) and later modified for use by the Department of Defense (DoD), the Air Force Research Laboratory (AFRL), and the US Department of Energy (DoE), as well as a growing number of non-governmental organizations. Technology readiness levels (TRL) are a metric developed to summarize the degree of maturity of a technology. The original NASA TRL scale has nine different levels from the basic principles observed and reported (TRL 1) to actual systems "flight proven" through successful mission operations (TRL 9). The TRL scale utilized by the DoD is portrayed in Table 1.


Table 1. Technology Readiness Levels for Assessing Critical Technologies (Mankins 1995). Released by the Advanced Concept Office, Office of Space Access and Technology, NASA.
Technology + 1. Basic  + 2.	+ 3. An	+ 4.	+ 5.	+ 6. Prototype	+ 7. Prototype	+ 8. System	+ 9. System  Actual

Readiness
principles
Technology
analytical
Component
Component
demonstration
demonstration
qualified
proven
application
Level
observed
concept
and
validation in
validation in
in a relevant
in an
through test
through
of the

and
and/or
experimental
laboratory
relevant
environment.
operational
and
successful
technology

reported.
application
critical
environment.
environment.

environment.
demonstration.
mission
in its final


formulated.
function





operations.
form and



and/or






under



characteristic






mission



proof of






conditions,



concept.






such as

those

encountered

in

operational

test and

evaluation.

The utilization of TRLs has an impact on the structure and operation of life cycles as described in Part 3; they allow better management and control of risks inherent with technology, as well as better control of costs and the schedule of program development. However, TRLs do not provide an assessment of the programmatic influence on a TRL, technology criticality and priority, software aging and readiness context, as pointed out by Smith (2005). While TRLs have proven to be useful in evaluating a technology's performance, as demonstrated in the laboratory or in a test environment, they do not inform one whether or not the technology product can actually be produced in an affordable manner. The concept of manufacturing readiness levels (MRL) has been incorporated to expand the TRL idea so that it can incorporate producibility concerns. The MRL approach addresses questions such as the level of technology reproducibility, the cost of production, and technology manufacturing production environment early in the development phase (GAO 2003, DoD 2011).




Readiness levels are an active research area within academia and government agencies in regards to the integration of technology components into complex systems (integration readiness levels (IRLs)) to address interface maturity among existing and maturing technology developments. TRLs apply to the critical enabling technologies, which are usually embodied at the subsystem, assembly level, or system component level. Systems readiness levels (SRL) are used when going from individual technologies to the whole system. The SRL model is a function of the individual TRLs in a system and their subsequent integration points with other technologies, the IRL (Sauser 2006).
Another maturity aspect is related to the provisioning of products that are readily available and referred to as commercial off-the-shelf (COTS). Such products, be they hardware, software, or a mixture of both, have hopefully achieved the degree of maturity so that those acquiring them can rely upon their operational properties and that the documentation of the COTS products is sufficient to provide the proper guidance in their use.
The PSE should realize that the TRL assessment for COTS changes dramatically if the operational environment or other requirements are imposed that exceed the design limits of the COTS product (e.g., operations at very high or very cold temperatures, high shock, or vibration levels).


Product Certification
Product certifications are both domain and product specific, and typically relate to human safety and health, the need to meet a specific government regulation, or are required by underwriters for insurance purposes. Certifications are performed by a third party (independent of the developer) who provides a guarantee of the quality, safety, and reliability of the product to the customer or user.
The INCOSE SE Handbook defines product certification as "the process of certifying that a certain product has passed performance or quality assurance tests or qualification requirements stipulated in regulations such as a building code or nationally accredited test standards, or that it complies with a set of regulations governing quality or minimum performance requirements." (INCOSE 2012)
The INCOSE SE Handbook also defines four methods for verification: inspection, analysis, demonstration, and testing (INCOSE 2012). In addition, it defines certification as a fifth verification method, which is defined as verification against legal or industrial standards by an outside authority without direction to that authority as to how the requirements are to be verified. For example, electronic devices require a CE certification in Europe, and a UL certification in the US and Canada (INCOSE 2012).
The best known certification is the airworthiness certification, which relates to the safety of flight for aircraft. In the US, the test for this certification is performed by the Federal Aviation Administration (FAA). Government certifications are also common in the medical systems field where the Federal Drug Administration (FDA) is the primary certification agency. Some certifications are based on standards defined by technical societies, such as the American Society of Mechanical Engineers (ASME). The combination of the technical standards and a certification allows product developers to perform certifications that meet government standards without having the government directly involved in the process.
There are equivalent government organizations in other countries and for other regulated areas, such as communications, building safety, nuclear systems, transportation systems to include ships, trains and automobiles, environmental impact, and energy use. Systems engineers must be aware of the certifications that are required for the domain and product being developed. Certification agencies must be involved early in the development effort to ensure the necessary certifications are included in the system requirements, the system development plan, and the funding provided to accomplish the development. When system changes and upgrades are necessary, the systems engineers must determine if product re-certification is necessary and include it in the plans and funding for the system upgrade.

Enabling Product Certifications
There may be other certifications for enabling products that must be considered and appreciated by PSE, such as an operator certification of airplane pilots to ensure flight safety, and certification of nuclear plant operators to ensure prevention or mitigation of nuclear radiation effects. An example of this is shown in the certification program by the North American Electric Reliability Corporation (NERC):
In support of NERC's mission, the System Operator Certification Program's mission is to ensure that employers have a workforce of system operators that meet minimum qualifications. These minimum qualifications are set through internationally recognized processes and procedures for agencies that certify persons. The Certification Program promotes excellence in the area of system operator performance and encourages system operators to be inquisitive and informed. (NERC 2012)
Production qualification testing (PQT) is another type of certification which DAU (2005) describes as:
A technical test completed prior to the full-rate production (FRP) decision to ensure the effectiveness of the manufacturing process, equipment, and procedures. This testing also serves the purpose of providing data for the independent evaluation required for materiel release so that the evaluator can address the adequacy of the materiel with respect to the stated requirements. These tests are conducted


on a number of samples taken at random from the first production lot, and are repeated if the process or design is changed significantly and when a second or alternative source is brought online.
Security certification and accreditation (C&A) is often required for the deployment of computing and networking equipment in a classified environment. Facility certification may be required to ensure that a building housing the equipment can provide the proper environment for safe and efficient operation of the equipment. High-altitude electromagnetic pulse (HEMP) certification may be required to ensure that a building and its equipment can withstand the effects of HEMP from nuclear weapons. A similar type of certification to HEMP is TEMPEST testing to ensure that sensitive electronic emissions are not allowed to leave high security facilities. TEMPEST is a code name referring to investigations and studies of compromising emission, and is not an acronym.

Technology Planning and Insertion
Technology planning can be an enterprise function or a program function. Technology planning as an enterprise function typically occurs on an annual basis to determine the funding necessary for independent research and development in the coming year. Technology planning as a program function occurs early in the program and often continues throughout the life of the system. The design of the product system is highly dependent on the availability of technologies that have acceptable risks and that meet the customer's cost, schedule, and performance requirements. These critical technologies will only be available when necessary if the systems engineers perform concept designs, technology assessments, and trade studies that define the critical technologies and the capabilities necessary before the system development activities that will use the critical technologies begin.
The MITRE Systems Engineering Guide (MITRE 2011) provides the following definition for technology planning:
Technology Planning is the process of planning the technical evolution of a program or system to achieve its future vision or end-state. Technology planning may include desired customer outcomes, technology forecasting and schedule projections, technology maturation requirements and planning, and technology insertion points. The goal is a defined technical end-state enabled by technology insertion over time.
Systems engineers who participate in technical planning must understand the future vision and system requirements, and relate these to the current and expected future technologies that can be applied to the system design during current development stages, as well as for potential future upgrades to the system. To do this, systems engineers must acquire and maintain knowledge of the existing and developing technology in their design domain. The systems engineer will also provide the essential connection between the system user and research communities to provide alignment between the technology developers and the system designers.
Technology planning and insertion usually requires that the systems engineer perform technology readiness assessments that rate the maturity levels and the risks associated with the planned technologies. Immature, risky technologies require risk reduction activities that include prototyping and product development and test activities that provide quantification of the capabilities and risks. The risk reduction activities provide the data necessary to assess and update the design to reduce its risk.

Product Road Mapping and Release Planning
Product road maps provide an outline that shows when products are scheduled for release and include an overview of the product's primary and secondary features. Both internal and external product road maps should be created. The form of the road map will depend on the development methodology being used. Waterfall, iterative, and spiral development models result in different road maps and release plans. The systems engineer must be an integral member of the team that creates road maps. Requirements should be mapped onto each of the planned releases. Test plans must be adapted to the development model and the release plans.


Product road maps should be aligned with the technology road maps that are applicable to the product. Technology maturity should be accomplished before the technologies are included in the product development plans and the road map for the product release that includes those technologies.
Product road maps are essential for software intensive systems that have many releases of software and capability upgrades. The identification of the requirements, the test plans, and the features provided for each release are an essential driver of the product development process. Clear definition of these items can make the difference between delivering the capabilities the customer is looking for and will support, or a product that fails to meet the needs of the customer and is abandoned.

Intellectual Property Management
Systems engineers must also manage intellectual property as part of their job. Existing systems engineering literature rarely covers this topic. However, there are many textbooks and management related literature that provide additional information, such as "Intellectual Property Rights for Engineers" (Irish 2005). Intellectual property may be considered as intangible output of the rational thought process that has some intellectual or informational value and is normally protected via using copyrights, patents, and/or trade secrets (Irish 2005). Listed below are some of the more important intellectual property types with brief explanations:
 Proprietary Information: Any information which gives a company (or enterprise) an advantage over its competitors is usually proprietary.
 Patents: A patent is the principle mechanism for protecting rights for an invention or discovery. In exchange for a full disclosure of how to practice it, the issuing government will grant the right to exclude others from practicing the invention for a limited amount of time, usually 15 to 20 years (in the US, a patent usually lasts for 17 years from the date of issue).
 Design Patents: In some countries, these are referred to by the more appropriate term design registrations or some other name. They protect rights in ornamental designs, provided the designs are new and inventive, i.e.,
non-obvious at the time they are made. In the US, the maximum length of a design patent is 14 years.
 Trademarks: A trademark identifies the source of origin for goods in commerce, and is not stronger than the actual use to which it has been put to and the diligence with which it has been protected from infringement, encroachment, or dilution. Under some circumstances, a trademark may be registered with governmental agencies. Among a company's most valuable assets is the corporate name, which also is the company's primary trademark.
 Copyrights: A claim of copyright protects such works as writings, musical compositions, and works of art from being copied by others, i.e., from plagiarism. A notice of claim of copyright must be made in the manner prescribed by law at the time of a protected work's first publication.

Parts, Materials, and Process Management
The consequences of mission failure or an inability to deploy the system on time due to parts, materials, and process (PM&P) issues needs to be clearly understood by the systems engineer since these elements are fundamental to the overall mission reliability and program success. PM&P management is especially important in harsh environments (like outer space and underwater) and in situations where system failure can have catastrophic impacts on public safety (like nuclear power, bridges and tunnels, and chemical processing plants).
Generally, original equipment manufacturers (OEMs) engaged in the design and fabrication of electronic systems have a documented policy that deals with PM&P, sometimes in the form of a PM&P Management Manual. The elements of a PM&P control program include things such as
 PM&P requirements that apply to a system;
 the generation number of a program or project approved parts list (PAPL);


 the appointment of a PM&P control board (PMPCB);
 the development of a part stress derating policy and a part parameter derating policy for end of life use; and
 a definition of the minimum qualifications, quality controls, and screening requirements for parts.
PM&P management guidance is provided by MIL-HDBK-512 (DoD 2001) and ANSI/AIAA R-100 (2001), which identify the overall management process elements of a PM&P program. Additional issues to be addressed by PM&P include the following: hazardous materials, rare earth elements, conflict materials, and counterfeit materials.

References
Works Cited
ANSI/AIAA. 2001. Recommended Practice for Parts Management. Philadelphia, PA, USA: American National Standards Institute (ANSI)/American Institute of Aeronautics and Astronautics (AIAA), ANSI/AIAA R-100A-2001.
DAU. 2005. Glossary of Defense Acquisition Acronyms & Terms, 12th ed. Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/US Department of Defense (DoD). Available at: http:/ / www. dau. mil/ pubscats/ PubsCats/13th_Edition_Glossary.pdf.
DoD. 2000. Department of Defense Directive (DoD-D) 5000.01: The Defense Acquisition System. Arlington, VA, USA: US Department of Defense, Acquisition, Technology, and Logistics (AT&L). Available at: http://www.dtic. mil/whs/directives/corres/pdf/500001p.pdf.
DoD. 2001. Department of Defense Handbook: Parts Management. Arlington, VA, USA: Department of Defense (DoD). MIL-HDBK-512A.
DoD. 2011 Department of Defense Technology Readiness Assessment (TRA) Guidance, Assistant Secretary of Defense for Research and Engineering (ASD(R&E)), May 2011.
FAA. 2011. Airworthiness Certificates Overview. Washington, DC, USA: Federal Aviation Administration (FAA). Available at: http://www.faa.gov/aircraft/air_cert/airworthiness_certification/aw_overview/.
GAO. 2003. Defense acquisitions: Assessments of Major Weapon Programs, GAO-03-476, US Government Accountability Office, May 2003.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
Irish, V. 2005. Intellectual Property Rights for Engineers, 2nd ed. Herts, UK: Institution of Engineering and Technology (IET).
Mankins, J. 1995. Technology Readiness Levels-A White Paper. Washington, DC, USA: Advanced Concepts Office, Office of Space Access and Technology, National Aeronautics and Space Administration (NASA).
MITRE. 2011. "Systems Engineering Guide." Accessed September 11, 2012. Available at: http://www.mitre.org/ work/systems_engineering/guide/.
Morgan, J 2007. Manufacturing Readiness Levels (MRLs) and Manufacturing Readiness Assessments (MRAs). ADA510027 Air Force Research Lab Wright-patterson Afb Oh Manufacturing Technology Directorate. September 2007. Accessed 06 November 2014 at Defense Technical Information Center http:/ / www. dtic. mil/ get-tr-doc/ pdf?AD=ADA510027
NERC. 2012. "North American Electric Reliability Corporation (NERC)." Accessed September 11, 2012. Available at: http://www.nerc.com.
Sauser, B., D. Verma, J. Ramirez-Marquez, and R. Gove. 2006. From TRL to SRL: The Concept of System Readiness Levels. Proceedings of the Conference on Systems Engineering Research (CSER), April 7-8, 2006, Los Angeles, CA, USA.


Smith, J. 2005. An Alternative to Technology Readiness Levels for Non-Developmental Item (NDI) Software. Proceedings of the 38th Hawaii International Conference on Systems Sciences, January 3-6, 2005, Island of Hawaii, USA.

Primary References
Mankins, J. 1995. Technology Readiness Levels-A White Paper. Washington, DC, USA: Advanced Concepts Office, Office of Space Access and Technology, National Aeronautics and Space Administration (NASA).
MITRE. "Systems Engineering Guide." Available at http://www.mitre.org/work/systems_engineering/guide/
Sauser, B., D. Verma, J. Ramirez-Marquez, and R. Gove. 2006. From TRL to SRL: The Concept of System Readiness Levels. Proceedings of the Conference on Systems Engineering Research (CSER), Los Angeles, CA, April 7-8, 2006.

Additional References
ANSI/AIAA. 2001. Recommended Practice for Parts Management. Philadelphia, PA, USA: American National Standards Institute (ANSI)/American Institute of Aeronautics and Astronautics (AIAA), ANSI/AIAA R-100A-2001.
DoD. 2000. Department of Defense Directive (DoD-D) 5000.01: The Defense Acquisition System. Arlington, VA, USA: US Department of Defense, Acquisition, Technology, and Logistics (AT&L). Available at: http://www.dtic. mil/whs/directives/corres/pdf/500001p.pdf.
DoD. 2001. Department of Defense Handbook: Parts Management. Arlington, VA, USA: Department of Defense (DoD). MIL-HDBK-512A.
FAA. 2011. "Airworthiness Certificates Overview." Washington, DC, USA: Federal Aviation Administration (FAA). Available at: http://www.faa.gov/aircraft/air_cert/airworthiness_certification/aw_overview/.
Irish, V. 2005. Intellectual Property Rights for Engineers, 2nd ed. Herts, UK: Institution of Engineering and Technology (IET).
Smith, J. 2005. An Alternative to Technology Readiness Levels for Non-Developmental Item (NDI) Software. Proceedings of the 38th Hawaii International Conference on Systems Sciences, January 3-6, 2005, Island of Hawaii, USA.




Knowledge Area: Service Systems Engineering

Service Systems Engineering

Contents of this Knowledge Area
 Service Systems Background
 Fundamentals of Services (Ricardo Pineda? Bud Lawson)
 Properties of Services (Ricardo Pineda, Bud Lawson, and Brian Wells)
 Scope of Service Systems Engineering (Ricardo Pineda and Bud Lawson)
 Value of Service Systems Engineering (Ricardo Pineda, Bud Lawson, and Richard Turner)
 Service Systems Engineering Stages (Ricardo Pineda, Bud Lawson, and Richard Turner)
 Lead Authors:
 Ricardo Pineda, Bud Lawson, and Richard Turner
-
The growth of services in the ever-evolving global economy has brought much needed attention to service science and service systems engineering (SSE). Research focuses on developing formal methodologies to understand enterprise-end-user (customer) interactions from both socio-economic and technological perspectives, and to enable value co-creation and productivity improvements. Service systems require trans-disciplinary collaborations between society, science, enterprises, and engineering. Service transactions are customized and personalized to meet a particular customer need. This requires a disciplined and systemic approach among stakeholders and resources to emphasize end-user satisfaction in the design and delivery of the service (Hipel et al. 2007; Tien and Berg 2003; Vargo and Akaka 2009; Maglio and Spohrer 2008; Maglio et al. 2010).

Topics
Each part of the SEBoK is divided into knowledge areas (KAs), which are groupings of information with a related theme. The KAs in turn are divided into topics. This KA contains the following topics:
 Service Systems Background
 Fundamentals of Services
 Properties of Services
 Scope of Service Systems Engineering
 Value of Service Systems Engineering
 Service Systems Engineering Stages

Introduction
New Service Development (NSD) has usually been a proprietary process closely guarded by product businesses and service businesses for their competitive advantage. Traditional systems engineering practices have been primarily applied in aerospace and defense sectors while SSE practices have been applied by information and communications technologies (ICT) service providers (Booz, Allen, and Hamilton 1982; Johnson et al. 2000; Eppinger 2001; Freeman 2004; Whitten and Bentley 2007; AT&T SRP 2008; Lin and Hsieh 2011).


These early efforts were, and in some instances remain, very important for product and service businesses. However, the growth and ubiquity of the World Wide Web, advances in computer science and ICT, and business process management through "social networking," support the realization of closely interrelated service systems. Product business (manufacturing, agriculture, etc.) and service business distinctions are going away (Spohrer 2011).
These services, or service innovations, must take into account social aspects, governance processes, business processes, operational processes, as well as design and development processes. The customer, service provider, product provider, and intermediaries need to collaborate toward the optimization of customer experiences and customer provided value (through co-creation). The interrelations among different stakeholders and resources require that methodologies, processes, and tools be dynamically tailored and delivered for either foreseen or newly discovered services to rapidly adapt to changing enterprise and end-user environments.
Even in the case of static, predetermined, interaction rules, the major problems faced in the definition, design, and implementation of services have been in understanding the integration needs among different systems, system entities, stakeholders, and in defining the information flows required for the governance, operations, administration, management and provisioning (OAM&P) of the service. (Maier 1998; Jamshidi 2008; Pineda 2010; Luzeaux and Ruault 2013). Thus, the 21st century technology-intensive services are "information-driven, customer centric, e-oriented, and productivity-focused" as discussed by Chesbrough (2011), Chang (2010), Tien and Berg (2003), and Hipel et al. (2007). A detailed discussion of these characteristics is given in the Value of Service Systems Engineering article within this KA.

Service Systems Engineering Knowledge Area Topics
This knowledge area (KA) describes best practices in SSE during the service design process and outlines current research on methods, processes, and tools. It does not attempt to describe the initial efforts and research in service science that were proposed and introduced by International Business Machines (IBM) (Maglio and Spohrer 2008), but it does recognize their leadership in championing these concepts in undergraduate and graduate curricula.
The rest of the KA is organized in the following way:
The Service Systems Background article presents some background on the transition from a manufacturing economy toward the service economy brought by the World Wide Web through co-creation of end-user value. It describes how this transformation is impacting industries, such as healthcare, agriculture, manufacturing, transportation, supply chain, environmental, etc. The article also describes the scope of the SSE discipline's contributions to meeting the needs of the service sector companies in strategic differentiation and operational excellence (Chang 2010) by pointing out some differences between product-oriented systems engineering and SSE.
The Fundamentals of Services and Properties of Services articles take the reader through a general discussion of services and current attempts to classify different types of services, in particular, attention is paid to the properties of service systems for the service sector, such us transportation, environmental and energy services, consulting services, healthcare, etc.
The Scope of Service Systems Engineering and Value of Service Systems Engineering articles cover the value of SSE, defining (or using when available) service architecture frameworks, and the stages of the service development process from concept to life cycle management.
The Service Systems Engineering Stages article summarizes the major SSE process activities that need to be carried out during the service design process and the needed output (work products) in each of the service design process stages.


Service Innovation and Value-Co-creation
Service innovation has several dimensions. Service innovation can come about through the creation of a service concept which is sufficiently different that it is not merely an improved service, but in reality is a new service concept. To maintain the rigor and value of innovation, it is necessary to distinguish between an improved service, which may generate some additional value, and a truly new and innovative service concept, which may generate a great deal of value. Dr. Noriaki Kano, a renowned quality management guru, has suggested that every service concept has its inherent attributes and we should strive to continuously improve upon these; but this is not innovation (Kano 1996).
To be innovative, the change in a value proposition cannot be incremental, but it must be enough to significantly impact customer and competitor behavior (e.g., new market creation). Value innovation involves a shift in perspective of customer needs that requires a rethinking of what service value proposition is delivered (Kano 1996).
Innovation can also come through a significant change in the way or the reason the customer is engaged or connected. In a service value chain the customer may well change from being just a receiver of service value to becoming a co-creator, or an active participant in the design and delivery, i.e., service transaction of service value. At the retail level, when a customer designs the time, route, and price selection for a plane ticket purchased online, he is co-creating the service. Value innovation involves a shift in perspective of customer needs that requires a rethinking of how a service value proposition is delivered (Bettencourt 2010).
Finally, service innovation can come through significant changes in the way the enterprise is organized to create a service value proposition from concept through delivery. A considerable improvement in the enterprise structure and/or governance can be seen as innovation. Value innovation involves a shift in perspective of customer needs that requires a rethinking of how an enterprise organizes to support a service value proposition.
Continuous improvement can be reasonably planned and predicted while innovation and breakthroughs cannot. The most effective way to obtain innovation and breakthroughs is to encourage the culture, environment, and atmosphere that are conducive to innovation and breakthroughs. Innovative co-creation requires the integration of people, ideas, and technology for the purpose of creating value for themselves, their customers, companies, and society.
The lone inventor sees a problem and must work to create the solutions to all dimensions of the problem. Co-creators see the problem and realize that there may already be several creators, each already having a piece of the solution. Co-creation embraces the value of things "not invented here" because of the velocity they can bring to ideation and time to market. This service innovation process is facilitated by modern mass (and at the same time, personal) communication technology evident in social networking platforms.

Towards a Discipline of Service Systems Engineering
Mindful of the evolution taking place in the global economy and the world markets, it would be futile to attempt covering all the major advances and the boundless possibilities in the services sector for the rest of the century. The services sector covers wide areas of application studied in many different fields (e.g., business science, social science, cognitive science, political science, etc.). The field of service systems, a trans-disciplinary analysis and study of services, was only introduced 10 to 15 years ago. As a consequence, much of the existing literature on services and service-innovation is scattered. The main objective of this KA is to document the systems engineering processes, methodologies, and existing tools as applied to the service design process, and to introduce critical SSE challenges and research areas.


References
Works Cited
AT&T SRP. 2008. Technical Approach to Service Delivery. General Services Administration, AT&T Bridge Contract No. GS00Q09NSD0003. Accessed on June 1, 2011. Available at: http:/ / www. corp. att. com/ gov/ contracts/fts_bridge/technical/07_vol_I_section_1.pdf.
Bettencourt, L. 2010. Service Innovation: How to Go from Customer Needs to Breakthrough Services. New York, McGraw-Hill Professional. July 2010.
Booz, Allen, and Hamilton. 1982. New Products Management for the 1980s. New York, NY, USA: Booz, Allen, and Hamilton Inc.
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. New York, NY, USA: John Wiley & Sons, Inc.
Chesbrough, H. 2011. Open Services Innovation: Rethinking Your Business to Grow and Compete in a New Era. San Francisco, CA, USA: Jossey-Bass.
Eppinger, S. 2001. "Innovation at the Speed of Information" Harvard Business Review. 79 (1): 149-158. Freeman, R.L. 2004. Telecommunication Systems Engineering, 4th ed. New York, NY, USA: John Wiley & Sons.
Hipel, K.W., M.M. Jamshidi, J.M. Tien, and C.C. White. 2007. "The Future of Systems, Man, and Cybernetics: Application Domains and research Methods. IEEE Transactions on Systems, Man, and Cybernetics - Part C: Applications and Reviews. 37 (5): 726-743.
Jamshidi M, System of Systems Engineering: Innovations for the Twenty-First Century. New York, NY, USA: John Wiley & Sons. November 2008.
Johnson, S.P., L.J. Menor, A.V. Roth, and R.B. Chase. 2000. "A critical evaluation of the new service development process: integrating service innovation and service design," in Fitzsimmons, J.A., and M.J. Fitzsimmons (eds.). New Service Development - Creating Memorable Experiences. Thousand Oaks, CA, USA: Sage Publications. p. 1-32.
Kano, N. 1996. Guide to TQM in Service Industry. Tokyo, Japan: Asian Productivity Organization.
Lin, F.R., and P.S Hsieh. 2011. A SAT View on New Service Development." Service Science. 3 (2): 141-157. Luzeaux, D. and Ruault. J,. System of Systems. New York, NY, USA: John Wiley & Sons. March 2013.
Maglio, P., C. Kieliszewski, and J. Spohrer. 2010. Handbook of Service Science, 1st ed. New York, NY, USA: Springer Science + Business Media.
Maglio, P., and J. Spohrer. 2008. "Fundamentals of Service Science." Journal of the Academy of Marketing Science. 36 (1): 18-20.
Maier, M.W., 1998. "Architecting Principles for System of Systems." Systems Engineering. 1 (4): 267-284.
Pineda, R. 2010. "Understanding Complex Systems of Systems Engineering." Presented at Fourth General Assembly, Cartagena Network of Engineering, September 21-24, 2010, Metz, France.
Spohrer, J.C. 2011. "Service Science: Progress & Directions." Presented at International Joint Conference on Service Science, May 25-27, 2011, Taipei, Taiwan.
Tien, J.M., and D. Berg. 2003. "A Case for Service Systems Engineering." Journal of Systems Science and Systems Engineering. 12 (1): 13-38.
Vargo, S.L., and R.F. Lusch. 2004. "The Four Service Marketing Myths - Remnants of a Goods-Based Manufacturing Model." Journal of Service Research. 6 (4): 324-335.
Vargo, S.L., and M.A. Akaka. 2009. "Service-Dominant Logic as a Foundation for Service Science: Clarifications."
Service Science. 1 (1): 32-41.


Whitten, J., and L. Bentley. 2007. Systems Analysis and Design Methods. New York, NY, USA: McGraw-Hill Higher Education.

Primary References
Maglio, P., C. Kieliszewski, and J. Spohrer. 2010. Handbook of Service Science, 1st ed. New York, NY, USA: Springer Science + Business Media.
Tien, J.M., and D. Berg. 2003. "A Case for Service Systems Engineering." Journal of Systems Science and Systems Engineering. 12 (1): 13-38.
Vargo, S.L., and R.F. Lusch. 2004. "The Four Service Marketing Myths - Remnants of a Goods-Based Manufacturing Model." Journal of Service Research. 6 (4): 324-335.

Additional References
AT&T SRP. 2008. Technical Approach to Service Delivery. General Services Administration, AT&T Bridge Contract No. GS00Q09NSD0003. Accessed on June 1, 2011. Available at: http:/ / www. corp. att. com/ gov/ contracts/fts_bridge/technical/07_vol_I_section_1.pdf.
Booz, Allen, and Hamilton. 1982. New Products Management for the 1980s. New York, NY, USA: Booz, Allen, and Hamilton Inc.
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. New York, NY, USA: John Wiley & Sons, Inc.
Eppinger, S. 2001. "Innovation at the Speed of Information." Harvard Business Review. 79 (1): 149-158. Freeman, R.L. 2004. Telecommunication Systems Engineering, 4th ed. New York, NY, USA: John Wiley & Sons.
Hipel, K.W., M.M. Jamshidi, J.M. Tien, and C.C. White. 2007. "The Future of Systems, Man, and Cybernetics: Application Domains and research Methods." IEEE Transactions on Systems, Man, and Cybernetics - Part C: Applications and Reviews. 37 (5): 726-743.
Johnson, S.P., L.J Menor, A.V. Roth, and R.B. Chase. 2000. "A critical evaluation of the new service development process: integrating service innovation and service design," in Fitzsimmons, J.A., and M.J. Fitzsimmons (eds.). New Service Development - Creating Memorable Experiences. Thousand Oaks, CA, USA: Sage Publications. p. 1-32.
Kano, N. 1996. Guide to TQM in Service Industry. Tokyo, Japan: Asian Productivity Organization.
Lin, F.R., and P.S Hsieh. 2011. A SAT View on New Service Development." Service Science. 3 (2): 141-157. Luzeaux, D. and Ruault, J. 2013. Systems of Systems, Wiley.
Maier, M.W. 1998. "Architecting Principles for System of Systems." Systems Engineering. 1 (4): 267-284.
Maglio, P., and J. Spohrer. 2008. "Fundamentals of Service Science." Journal of the Academy of Marketing Science. 36 (1): 18-20.
Pineda, R. 2010. "Understanding Complex Systems of Systems Engineering." Presented at Fourth General Assembly, Cartagena Network of Engineering, September 21-24, 2010, Metz, France.
Spohrer, J.C. 2011. "Service Science: Progress & Directions." Presented at International Joint Conference on Service Science, May 25-27, 2011, Taipei, Taiwan.
Vargo, S.L., and M.A. Akaka. 2009. "Service-Dominant Logic as a Foundation for Service Science: Clarifications."
Service Science. 1 (1): 32-41.
Whitten, J., and L. Bentley. 2007. Systems Analysis and Design Methods. New York, NY, USA: McGraw-Hill Higher Education.


Service Systems Background

-
Economies are pre-disposed to follow a developmental progression that moves them from heavy proportional reliance on agriculture and mining toward the development of manufacturing, and finally toward more service-based economic activity. As reported by the Organization for Economic Co-Operation and Development (OECD) in its "Science, Technology, and Industry (STI) Forum on The Service Economy":
The reason that we see a services economy today, and gather to talk about it and recognize its importance is because technology has allowed service industries to gain the operational leverage that manufacturing achieved 100 years ago. In addition to banks, health systems, telephone and telecommunications networks, and distribution and retailing firms are further examples of sectors that have been able to benefit from economies of scale. As a result, we are now living in a world where global-scale service companies exist for the first time, whereas we have seen global manufacturing companies for 50 years or more. (OECD 2000, 8)

Evolution Toward Service-Based Economies
The typical industry example given of this progression toward services is the company International Business Machines (IBM). Even though IBM still produces hardware, they view their business as overwhelmingly service-oriented wherein hardware plays only an incidental role in their business solutions services; the fastest line of business growth within IBM has been the business-to-business (B2B) services: information technology (IT); for example, data centers and call centers; business process outsourcing/re-engineering; systems integration; and organizational change.
Business to government (B2G) is forecasted to have the fastest growth in the years to come (Spohrer 2011). For IBM, this trend started in 1989 with the launch of business recovery services; it accelerated with the acquisition of Price-Waterhouse Coopers Consultants in 2002 and culminated with the 2005 sale of the laptop (ThinkPad) manufacturing, their last major hardware operation.
IBM exemplifies the services trend which has accelerated in the last 25-30 years and as of 2006, the services produced by private industry accounted for 67.8% of U.S. gross domestic product (GDP). The top sub-sectors included real estate, financial, healthcare, education, legal, banking, insurance, and investment. Production of goods accounted for 19.8% of GDP. The top product sub-sectors included manufacturing, construction, oil and gas, mining, and agriculture (Moran 2006).
Beginning in the mid-1990s, the concept of a product-service system (PSS) started to evolve. PSSs have been adopted by businesses interested in using the model to bring not only added value to their existing offerings, but capital-intensive, environmentally favorable products to market (Mont and Tukker 2006).
There are some definitional issues in any discussion of PSS, including the fact that services can sometimes be considered as products, and services invariably need physical products to support their provisioning or delivery (2006). A PSS is comprised of tangibles and intangibles (activities) in combination to fulfill specific customer requirements, or ideally, to allow applications to be co-created flexibly by linking loosely coupled agents, typically over a network (Domingue et al. 2009). Research has shown that manufacturing firms are more amenable to producing "results" rather than solely products as specific artifacts and that end users are more amenable to consuming such results (Cook 2004; Wild et al. 2007).
The popularity of wikis, blogs, and social networking tools is strong evidence that "Enterprise 2.0" is already well under way; Andrew McAfee describes Enterprise 2.0 as "the use of emergent social software platforms within companies, or between companies and their partners or customers" (McAfee 2009). However, the integrated access to people, media, services, and things, provided by the Future Internet, will enable new styles of societal and


economic interactions at unprecedented scales, flexibility, and quality. These applications will exploit the wisdom of crowds and allow for mass collaboration and value co-creation.
The future internet will provide location independent, interoperable, scalable, secure, and efficient access to a coordinated set of services (Tselentis et al. 2009), but such a broad vision demands a sound and well-defined approach for management and governance.
Current application service providers like Amazon, Facebook, Twitter, eBay, and Google must mediate between the business challenges enabled by network and IT convergence and customers (enterprise or consumer) demanding new and more value-adding services enabled by social networks (TMFORUM 2008). The differences between IT and communications technologies are disappearing; internally-focused processes (back-stage processes) for operations optimization are now being strongly tied to the customer facing (front-stage) processes for value co-creation and delivery. In this scenario, the enterprise's internal organization and employees are embedded in the service value chain to benefit customers and stakeholders. In the service-dominant logic (S-DL) for marketing (Vargo and Lusch 2004), service is the application (through deeds, processes, and performances) of specialized operant resources (knowledge and skills) for the benefit of another entity or the entity itself. The emphasis is on the process of doing something for, and with, another entity in order to create value; a service system is thus a system of interacting and interdependent parts (people, technologies, and organizations) that is externally oriented to achieve and maintain a sustainable competitive advantage (IFM 2008; Maglio and Spohrer 2008).
The future internet is expected to be more agile, scalable, secure, and reliable, demanding rapidly emerging applications/services with different requirements and implications for the Future Internet design that pose a significant set of problems and challenges, in particular, "the fragmentation of knowledge and the isolation of the specialist as well as the need to find new approaches to problems created by earlier 'solution of problems,'" (Skyttner 2006). The service systems engineering discipline may inform the discussion and offer potential multidisciplinary environments and trans-disciplinary solutions.
The internet has been successfully deployed for several decades due to its high flexibility in running over different kinds of physical media and in supporting different high-layer protocols and applications, including traditional file transfer, email, and client-server-based Web applications, among others.

Business Dependence on Service Systems
Most people and enterprises are heavily dependent on service interactions, including entertainment, communications, retail, education, healthcare, etc., brought about by emerging services, such as video on demand, web conferencing, time-shift services, place-shift and device-shift services, enterprise applications (e.g., enterprise resource planning (ERP), customer relationship management (CRM), manufacturing resource management (MRM), software configuration management (SCM), etc.), software as a service (SaaS), platform as a service (PaaS), cloud services, peer-to-peer (P2P) services, etc. A common denominator in the set of services mentioned is that applications are offered as services by the interaction of service system entities and thus they are service based applications (SBA).
Thus, "A service based application is obtained by composing various service system entities to satisfy the desired functionality" (Andrikopoulos et al. 2010). SBAs are heavily dependent on web services development, such as Web services 2.0 (WS). Software systems engineering (SwSE) plays a very important role in a business dependent on a service system. However, another important role is played by human interfaces, organizational development and technology development; for instance, governance (rules & regulations) and technology research and development are required for future services in healthcare services, intelligent transportation services, environmental services, energy services, etc. to address societal challenges of the 21st century (sustainability, energy, etc.) as presented by (Vest 2010) if we were to face those challenges as an ecosystem.


Service System Example
In an intelligent transport system-emergency transportation operation (ITS-ETO), the service goal is to provide safe evacuation, prompt medical care, and improved emergency management service. Typically, a traveler can request service through an emergency call or automated crash report feature, or a public safety officer on location can request service based on customer features and access rights.
The ITS-ETO service system utilizes advances in communication and information systems (technology and information enabler) to access essential, real-time data about conditions on routes throughout the affected area and coordinate operational and logistical strategies in cooperation within all service entities (organization processes). In a critical emergency situation, when patient conditions are continuously changing, ITS can help identify the appropriate response and get the correct equipment (infrastructure enabler), such as a helicopter and emergency personnel (people enabler), to and from the scene quickly and safely.
Efficient and reliable voice, data, and video communications (application enabler) further provide agencies with the ability to share information related to the status of the emergency, the operational conditions of the transportation facilities, and the location of emergency response resources to help communicate and coordinate operations and resources in real time. Advances in logistical and decision-making tools can enable commanders and dispatchers to implement strategies as conditions change (decision making).
It is also critical to receive information on the environmental conditions (storm, hazardous materials, multi-vehicle crashes, etc.) and/or road closures when coordinating evacuations. The availability of real-time data about transportation conditions, coupled with decision-making tools, enables more effective responses and coordination of resources during emergencies. ITS-ETO also enhances the ability of transportation agencies to coordinate responses with other stakeholders/entities.
As a result, increased data accuracy, timeliness, and automation leads to better use of resources, and reuse of exchanges, resulting in time and cost savings. Enhanced response and management leads to greater situational awareness and more effective reactions with the ability to identify and utilize the appropriate equipment, resulting in a more efficient response at the right time (output) (US DOT 2011). Figure 1 below lists the possible stakeholders in a service system.




As seen in the above example, the service activities are knowledge-intensive; well defined linkages (including access rights) and relationships among different entities give rise to the needed service systems interactions for the service system to be successful. As the world becomes more widely interconnected, and people become better educated, the services networks created by the interaction of the service systems will be accessible from anywhere, at any time, by anyone with the proper access rights.
Knowledge agents are then humans creating new linkages of information to create new knowledge which "can later be embedded in other people, technology, shared information, and organizations." Thus, people can be considered as individual service systems with "finite life cycles, identities (with associated histories and expectations), legal rights and authority to perform certain functions, perform multitasking as a way to increase individual productivity output in a finite time, and engage in division-of-labor with others to increase collective productive output in finite time" through service transactions enabled by their access rights (Spohrer and Kwan 2008).


References
Works Cited
Andrikopoulos, V., A. Bucchiarone, E. Di Nitto, R. Kazhamiakin, S. Lane, V. Mazza, and I. Richardson. 2010. "Chapter 8: Service Engineering," in Service Research Challenges and Solutions for the Future Internet S-Cube - Towards Engineering, Managing and Adapting Service-Based Systems, edited by M. Papazoglou, K. Pohl, M. Parkin, and A. Metzger. Berlin Heidelberg, Germany: Springer-Verlag. p. 271-337.
Cook, M. 2004. "Understanding The Potential Opportunities Provided by Service-Orientated Concepts to Improve Resource Productivity," in Design and Manufacture for Sustainable Development 2004, edited by T. Bhamra and B. Hon. Bury St. Edmonds, Suffolk, UK: Professional Engineering Publishing Limited. p. 123-134.
Domingue, J., D. Fensel, J. Davies, R. González-Cabero, and C. Pedrinaci. 2009. "The Service Web: a Web of Billions of Services," in Towards the Future Internet - A European Research Perspective, edited by G. Tselentis, J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zehariadis. Amsterdam, The Netherlands: IOS Press.
IFM. 2008. Succeeding through Service Innovation: A service perspective for education, research, business and government. University of Cambridge Institute for Manufacturing (IfM) and International Business Machines Corporation (IBM) report. Cambridge Service Science, Management and Engineering Symposium, July 14-15, 2007, Cambridge, UK.
Maglio P., and J. Spohrer 2008. "Fundamentals of Service Science." Journal of the Academy of Marketing Science. 36 (1): 18-20. DOI: 10.1007/s11747-007-0058-9.
Maglio, P., Weske, M., Yang, J. and Fantinato, Marcelo. 2010. 8th International Conference on Service Oriented Computing (ICSOC 2010). Lecture Notes in Computer Science. Vol. 6470. Springer-Verlag, San Francisco, California. December 2010.
McAfee, A. 2009. Enterprise 2.0: New Collaborative Tools for Your Organization's Toughest Challenges. Boston, MA, USA: Harvard Business School Press.
Mont, O., and A. Tukker. 2006. "Product-Service Systems." Journal of Cleaner Production. 14 (17): 1451-1454. Moran, M. 2006. Servicizing Solar Panels. Industry Course Report. Lund University International Master's Programme in Environmental Studies and Sustainability Science Department (LUMES), Lund University, Sweden.
Organization for Economic Co-operation and Development (OECD). 2000. The Service Economy. Science Technology Industry (STI) Business and Industry Policy Forum Series. Paris, France: OECD. Available: http:/ / www.oecd.org/dataoecd/10/33/2090561.pdf.
Skyttner, L. 2006. General Systems Theory: Perspectives, Problems, Practice, 2nd ed. Singapore: World Scientific Publishing Company.
Spohrer, J., and S.K. Kwan. 2009. "Service Science, Management, Engineering, and Design (SSMED): An Emerging Discipline - Outline & References." International Journal of Information Systems in the Service Sector. 1
(3): 1-31.
Spohrer, J.C. 2011. "Service Science: Progress & Directions." Presented at the International Joint Conference on Service Science, May 25-27, 2011, Taipei, Taiwan.
TM Forum. 2008. Service Delivery Framework (SDF) Overview, Release 2.0. Morristown, NJ: TeleManagement Forum. Technical Report 139.
Tselentis, G., J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zahariadis (eds.). 2009.
Towards the Future Internet - A European Research Perspective. Amsterdam, The Netherlands: IOS Press.
US DOT. 2011. "Emergency Transportation Operations." Research and Innovative Technology Administration. Accessed June 23, 2011. Last updated June 16, 2011. Available: http://www.its.dot.gov/eto/index.htm.


Vargo, S.L., and R.F. Lusch. 2004. "The Four Service Marketing Myths - Remnants of a Goods-Based Manufacturing Model." Journal of Service Research. 6 (4): 324-335.
Vest, C.M., 2013. "Educating Engineers for 2020 and Beyond" .The Bridge. Washington DC, National Academy of Engineering.
Wild, P.J., J. Jupp, W. Kerley, C. Eckert, and P.J. Clarkson. 2007. "Towards A Framework for Profiling of Products and Services." Presented at 5th International Conference on Manufacturing Research (ICMR), September 11-13, 2007, Leicester, UK.

Primary References
IFM. 2008. Succeeding through Service Innovation: A service perspective for education, research, business and government. University of Cambridge Institute for Manufacturing (IfM) and International Business Machines Corporation (IBM) report. Cambridge Service Science, Management and Engineering Symposium, July 14-15, 2007, Cambridge, UK.
Organization for Economic Co-operation and Development (OECD). 2000. The Service Economy. Science Technology Industry (STI) Business and Industry Policy Forum Series. Paris, France: OECD. Available: http:/ / www.oecd.org/dataoecd/10/33/2090561.pdf.
Vargo, S.L., and R.F. Lusch. 2004. "The Four Service Marketing Myths - Remnants of a Goods-Based Manufacturing Model." Journal of Service Research. 6 (4): 324-335.

Additional References
Andrikopoulos, V., A. Bucchiarone, E. Di Nitto, R. Kazhamiakin, S. Lane, V. Mazza, and I. Richardson. 2010. "Chapter 8: Service Engineering," in Service Research Challenges and Solutions for the Future Internet S-Cube - Towards Engineering, Managing and Adapting Service-Based Systems, edited by M. Papazoglou, K. Pohl, M. Parkin, and A. Metzger. Berlin Heidelberg, Germany: Springer-Verlag. p. 271-337.
Cook, M. 2004. "Understanding The Potential Opportunities Provided by Service-Orientated Concepts to Improve Resource Productivity," in Design and Manufacture for Sustainable Development 2004, edited by T. Bhamra and B. Hon. Bury St. Edmonds, Suffolk, UK: Professional Engineering Publishing Limited. p. 123-134.
Domingue, J., D. Fensel, J. Davies, R. González-Cabero, and C. Pedrinaci. 2009. "The Service Web: a Web of Billions of Services," in Towards the Future Internet - A European Research Perspective, edited by G. Tselentis, J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zehariadis. Amsterdam, The Netherlands: IOS Press.
Maglio P., and J. Spohrer 2008. "Fundamentals of Service Science." Journal of the Academy of Marketing Science. 36 (1): 18-20. DOI: 10.1007/s11747-007-0058-9.
McAfee, A. 2009. Enterprise 2.0: New Collaborative Tools for Your Organization's Toughest Challenges. Boston, MA, USA: Harvard Business School Press.
Mont, O., and A. Tukker. 2006. "Product-Service Systems." Journal of Cleaner Production. 14 (17): 1451-1454. Moran, M. 2006. Servicizing Solar Panels. Industry Course Report. Lund University International Master's Programme in Environmental Studies and Sustainability Science Department (LUMES), Lund University, Sweden.
Skyttner, L. 2006. General Systems Theory: Perspectives, Problems, Practice, 2nd ed. Singapore: World Scientific Publishing Company.
Spohrer, J., and S.K. Kwan. 2009. "Service Science, Management, Engineering, and Design (SSMED): An Emerging Discipline - Outline & References." International Journal of Information Systems in the Service Sector. 1
(3): 1-31.


Spohrer, J.C. 2011. "Service Science: Progress & Directions." Presented at the International Joint Conference on Service Science, May 25-27, 2011, Taipei, Taiwan.
TM Forum. 2008. Service Delivery Framework (SDF) Overview, Release 2.0. Morristown, NJ: TeleManagement Forum. Technical Report 139.
Tselentis, G., J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zahariadis (eds.). 2009.
Towards the Future Internet - A European Research Perspective. Amsterdam, The Netherlands: IOS Press.
US DOT. 2011. "Emergency Transportation Operations." Research and Innovative Technology Administration. Accessed June 23, 2011. Last updated June 16, 2011. Available: http://www.its.dot.gov/eto/index.htm.
Wild, P.J., J. Jupp, W. Kerley, C. Eckert, and P.J. Clarkson. 2007. "Towards A Framework for Profiling of Products and Services." Presented at 5th International Conference on Manufacturing Research (ICMR), September 11-13, 2007, Leicester, UK.

Fundamentals of Services

 Lead Author:
 Ricardo Pineda? Bud Lawson
-
Services are activities that cause a transformation of the state of an entity (a person, product, business, region, or nation) by mutually agreed terms between the service provider and the customer. Individual services are relatively simple, although they may require customization and significant back-stage support (e.g., database, knowledge management, analysis, forecasting, etc.) to assure quality and timely delivery. Product services are also relatively straightforward as product specifications, performance standards, quality control, installation guidelines, and maintenance procedures require good communication and understanding between providers and users. Business services can be rather complex; some may involve intensive negotiations, work process alignment, quality assurance, team collaboration, and service coproduction. Moreover, Chang (2010) states that: "Regional and National services are even more complex, as they may affect policy, custom regulations, export permits, local business practices, logistics, distribution, and other such issues" (see also Complexity).

Service Systems
The service and/or set of services developed and accessible to the customer (individual consumer or enterprise) are enabled by a service system. Service system stakeholders may interact to create a particular service value chain to be delivered with a specific objective (Spohrer and Maglio 2010). Service system entities dynamically configure four types of resources: people, technology/environment infrastructure, organizations(glossary)/institutions, and shared information/symbolic knowledge. Service systems can be either formal or informal in nature. In the case of formal service systems, the interactions are contracted through service level agreements (SLA). Informal service systems can promise to reconfigure resources without a written contractual agreement; in the case of the emergency transports operations example discussed in the Service Systems Background article, there is no formal contractual agreement (i.e., SLA) between the user requesting the service and the agency providing the service other than a "promise" for a quick and efficient response. SLAs are written contracts between and among service system entities, as well as the legal system for enforcing the contracts. The study of informal service systems contains the study of relationships (communications, interactions, and promises) between service systems and social systems, cultural norms and beliefs, as well as political systems that can maintain those relationships (Spohrer and Kwan 2008). The resources are either physical or non-physical and have rights or no rights. See Figure 1 below:





Service Value Chain
SLAs and policies specify the conditions under which services system entities reconfigure access rights to resources by mutually agreed value propositions. Current management frameworks typically focus on single service system entity interfaces. They neither use SLAs for managing the implementation and delivery of services nor do they recognize/support the fact that many services may be composed of lower-level services, involve third-party providers, and rely on possibly complex relationships and processes among participating businesses, information communications, and technologies (CoreGRID 2007). While SLAs are mapped to the respective customer requirements, policies are provider-specific means to express constraints and rules for their internal operations. These rules may be independent of any particular customer (Theilmann 2009).
In service systems practice, we describe the service value chain in terms of links among the entities connected via the Network Centric operations of service systems. For instance, value could then be created and delivered in terms of e-services, such as business-to-business (B2B), business to consumer (B2C), business to government (B2G), government-to-business (G2B), government-to-government (G2G), government-to-consumer (G2C), etc. The emerging service in this case interacts or "co-produces" with their customer via the World Wide Web as compared to the physical environment in which the traditional, or brick and mortar, service enterprises interact with their customers.
The services sector requires information as input, involves the customer at the production/delivery stage, and employs mostly qualitative measures to assess its performance, i.e., technology-intensive services are "information-driven, customer centric, e-oriented, and productivity-focused" (Tien and Berg 2003; Hipel et al. 2007; Chesbrough 2011). Chang (2010) defines these features in this manner:
 Information Driven: The creation, management, and sharing of information is crucial to the design, production, and delivery of services.
 Customer Centric: Customers are generally the co-producer of the services, as in the case of self-service. Customers require a certain degree of self-adaptation or customization and customers must be satisfied with the rendered services.


 E (electronics) Oriented: Services are becoming increasingly e-oriented. Thus, e-access, e-commerce, and e-customer management are crucial to e-services.
 Productivity Focused: Both efficiency and effectiveness are important in the design, delivery, and support of services.
 Value Adding: Services need to provide some value for the target clients. For profit-seeking service companies, the value produced for customers assures the company's profitability. For non-profit service entities, the value produced for customers reinforces the quality of a service entity's policy.
A service system is defined by its value co-creation chain in which stakeholders work in open collaboration to deliver consistently high quality service according to business goals, service goals, and customer goals. A value proposition can be viewed as a request from one service system to another to run an algorithm (the value proposition) from the perspectives of multiple stakeholders according to culturally determined value principles. The four primary stakeholder's perspectives in regards to value are the customer, provider, authority, and the competitors. Figure 2 below depicts value calculations from multiple stakeholder perspectives.

Table 1. Value Calculation from Different Stakeholders' Perspectives (Spohrer 2011). Reprinted with permission of Dr. James C. Spohrer. All other rights are reserved by the copyright owner.
  Stakeholder	Measure Impacted		Pricing	Basic Questions	Value Proposition Reasoning Perspective (the		Decision
players)

1. Customer	Quality (Revenue)	Value Based Should we?	Model of customer: Do customers want it? Is there
(offer it)	a market? How large? Growth rate?


2. Provider	Productivity (Profit, Mission, Continuous Improvement, Sustainability)
3. Authority	Compliance (Taxes and Fines, Quality of Fire)


Cost Plus	Can we? (deliver it)

Regulated	May we? (offer
and deliver it)


Model of self: Does it play to our strengths? Can we deliver it profitability to customers? Can we continue to improve?
Model of authority: Is it legal? Does it compromise our integrity in any way? Does it create a moral hazard?

4. Competitor	Sustainable Innovation (Market	Strategic	Will we? (invest	Model of competitor: Does it put us ahead? Can we (Substitute)	Share)		to make it so)	stay ahead? Does it differentiate us from the
competition?

From an engineering design point of view, the service and business goals are an entry point through which to analyze the business architectures (including organization and processes) needed, which in turn demand alignment between the information technology (IT) components and technology architecture to achieve the goals. From a systems engineering perspective, the next step is to identify service system entities that could participate in the service delivery (people, organizations, technologies, processes, etc.).


Service System Entities
Spath and Fahnrich (2007) defined a service meta-model comprised of nine types of entities:
1. Customers: customer features, customer attitudes, and customer preferences;
2. Goals: business goals, service goals, customer goals, and enterprise culture goals;
3. Inputs: physical, human beings, information, knowledge, currency, and constraints;
4. Outputs: physical, human beings, information, knowledge, currency, and waste;
5. Processes: service provision, service operations, service support, customer relationships, planning and control, and call center management;
6. Human Enablers: service providers, support providers, management, and owner organization (enterprise);
7. Physical Enablers: owner organization (physical), buildings, equipment, furnishings, and location;
8. Informatics Enablers: information, knowledge, procedures and processes, decision support, and skill acquisition; and
9. Environment: political factors, economic factors, social factors, technological factors, environmental factors, legal factors (PESTEL), and physical factors.
Thus, a service or service offering is created by the relationships among service system entities (including information flows) through business processes into strategic capabilities that consistently provide superior value to the customer. If we were to represent the service as a network diagram (as in Figure 3 below), then the entities represent the nodes and the links represent the relationships between nodes.



Service System Hierarchy
Systems are part of other systems which are often expressed by systems hierarchies (Skyttner 2010) to create a multilevel hierarchy, and thus the service system is composed of service system entities that interact through processes defined by governance and management rules to create different types of outcomes in the context of stakeholders with the purpose of providing improved customer interaction and value co-creation. Examples of service system entities are business enterprises, nations, or in the simplest form, a person (consumes and produces services).
Using the hierarchical approach, Spohrer conceptualizes an ecosystem at the highest level in which a service system is an entity of its own. This concept is extended to create the service system hierarchy as described in Figure 4 below (Spohrer 2011; Maglio and Spohrer 2008; Maglio et al. 2010).


Service System Attributes
The fundamental attributes of a service system include togetherness, structure, behavior, and emergence. As mentioned earlier, today's global economy is very competitive and a service system may be very competitive in a given environment at a given time (the business space). The service system's trajectory should be well controlled as time goes by (Qiu 2009) since services are "real time in nature and are consumed at the time they are co-produced" (Tien and Berg 2003), that is, during service transactions.
The service system should evolve and adapt to the conditions within the business space in a manner which ensures that the customized service behaves as expected. This adaptive behavior of service systems implies that their design must be truly trans-disciplinary:
They must include techniques from social science (i.e., sociology, psychology, and philosophy) and management (i.e., organization, economics, and entrepreneurship). As a consequence, Systems, Man, and Cybernetics (SMC) must expand their systems (i.e., holistic oriented), man (i.e., decision-oriented), and cybernetics methods to include and be integrated with those techniques that are beyond science and engineering. (Hipel et al. 2007)


References
Works Cited
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. Hoboken, NJ, USA: John Wiley & Sons, Inc.
Chesbrough, H. 2011. Open Services Innovation: Rethinking Your Business to Grow and Compete in a New Era. San Francisco, CA, USA: Jossey-Bass.
CoreGRID. 2007. Using SLA for Resource Management and Scheduling - A Survey. Technical Report 0096. Jülich & Dortmund, Germany: European Research Network on Foundations, Software Infrastructures and Applications for Large Scale Distributed, GRID and Peer-to-Peer Technologies, Institute on Resource Management and Scheduling. Accessed June 4, 2011. Available: http:/ / www. coregrid. net/ mambo/ images/ stories/ TechnicalReports/ tr-0096.
pdf.
Hipel, K.W., M.M. Jamshidi, J.M. Tien, and C.C. White. 2007. "The Future of Systems, Man, and Cybernetics: Application Domains and Research Methods." IEEE Transactions on Systems, Man, and Cybernetics - Part C: Applications and Reviews. 37 (5): 726-743.
Maglio, P., C. Kieliszewski, and J. Spohrer. 2010. Handbook of Service Science. New York, NY, USA: Springer Science and Business Media.
Maglio, P., and J. Spohrer. 2008. "Fundamentals of Service Science." Journal of the Academy of Marketing Science. 36 (1): 18-20.
Qiu, R. 2009. "Computational Thinking of Service Systems: Dynamics and Adaptiveness Modeling." Service Science. 1 (1): 42-55.
Skyttner, L. 2006. General Systems Theory: Perspectives, Problems, Practice, 2nd ed. Singapore: World Scientific Publishing Company.
Spath, D., and K.P. Fähnrich (eds.). 2007. Advances in Services Innovations. Berlin & Heidelberg, Germany: Springer-Verlag.
Spohrer, J., and S.K. Kwan. 2009. "Service Science, Management, Engineering, and Design (SSMED): An Emerging Discipline - Outline & References." International Journal of Information Systems in the Service Sector, 1
(3): 1-31.
Spohrer, J., and P.P Maglio. 2010. "Chapter 1: Service Science: Toward a Smarter Planet," in Introduction to Service Engineering, edited by G. Salvendy and W. Karwowski. Hoboken, NJ: John Wiley & Sons.
Spohrer, J.C. 2011. "Service Science: Progress & Directions." Presented at International Joint Conference on Service Science, May 25-27, 2011, Taipei, Taiwan.
Theilmann, W., and L. Baresi. 2009. "Multi-level SLAs for Harmonized Management in the Future Internet," in Towards the Future Internet - A European Research Perspective, edited by G. Tselentis, J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zehariadis. Amsterdam, The Netherlands: IOS Press.
Tien, J.M., and D. Berg. 2003. "A Case for Service Systems Engineering." Journal of Systems Science and Systems Engineering. 12 (1): 13-38.
Vargo, S.L., and M.A. Akaka. 2009. "Service-Dominant Logic as a Foundation for Service Science: Clarifications."
Service Science. 1 (1): 32-41.


Primary References
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. Hoboken, NJ, USA: John Wiley & Sons, Inc.
Hipel, K.W., M.M. Jamshidi, J.M. Tien, and C.C. White. 2007. "The Future of Systems, Man, and Cybernetics: Application Domains and Research Methods." IEEE Transactions on Systems, Man, and Cybernetics - Part C: Applications and Reviews. 37 (5): 726-743.
Spath, D., and K.P. Fähnrich (eds.). 2007. Advances in Services Innovations. Berlin & Heidelberg, Germany: Springer-Verlag.
Spohrer, J.C. 2011. "Service Science: Progress & Directions." Presented at International Joint Conference on Service Science, May 25-27, 2011, Taipei, Taiwan.

Additional References
Chesbrough, H. 2011. Open Services Innovation: Rethinking Your Business to Grow and Compete in a New Era. San Francisco, CA, USA: Jossey-Bass.
CoreGRID. 2007. Using SLA for Resource Management and Scheduling - A Survey. Technical Report 0096. Jülich & Dortmund, Germany: European Research Network on Foundations, Software Infrastructures and Applications for Large Scale Distributed, GRID and Peer-to-Peer Technologies, Institute on Resource Management and Scheduling. Accessed June 4, 2011. Available: http:/ / www. coregrid. net/ mambo/ images/ stories/ TechnicalReports/ tr-0096.
pdf.
Maglio, P., C. Kieliszewski, and J. Spohrer. 2010. Handbook of Service Science. New York, NY, USA: Springer Science and Business Media.
Maglio, P., and J. Spohrer. 2008. "Fundamentals of Service Science." Journal of the Academy of Marketing Science. 36 (1): 18-20.
Qiu, R. 2009. "Computational Thinking of Service Systems: Dynamics and Adaptiveness Modeling." Service Science. 1 (1): 42-55.
Skyttner, L. 2006. General Systems Theory: Perspectives, Problems, Practice, 2nd ed. Singapore: World Scientific Publishing Company.
Spohrer, J., and S.K. Kwan. 2009. "Service Science, Management, Engineering, and Design (SSMED): An Emerging Discipline - Outline & References." International Journal of Information Systems in the Service Sector, 1
(3): 1-31.
Spohrer, J., and P.P Maglio. 2010. "Chapter 1: Service Science: Toward a Smarter Planet," in Introduction to Service Engineering, edited by G. Salvendy and W. Karwowski. Hoboken, NJ: John Wiley & Sons.
Theilmann, W., and L. Baresi. 2009. "Multi-level SLAs for Harmonized Management in the Future Internet," in Towards the Future Internet - A European Research Perspective, edited by G. Tselentis, J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zehariadis. Amsterdam, The Netherlands: IOS Press.
Tien, J.M., and D. Berg. 2003. "A Case for Service Systems Engineering." Journal of Systems Science and Systems Engineering. 12 (1): 13-38.
Vargo, S.L., and M.A. Akaka. 2009. "Service-Dominant Logic as a Foundation for Service Science: Clarifications."
Service Science. 1 (1): 32-41.


Properties of Services

 Lead Authors:
 Ricardo Pineda, Bud Lawson, and Brian Wells
-
A service is realized by the service system through the relationships of service system entities that interact (or relate) in a particular way to deliver the specific service via a service level agreement (SLA). Current management frameworks typically only focus on the interfaces of single service system entities. Meanwhile, SLAs are mapped to the respective customer requirements. These policies are provider-specific means to express constraints and rules for their internal operations. These rules may be independent of any particular customer (Theilmann 2009).
Services not only involve the interaction between the service provider and the consumer to produce value, but have other attributes, like an intangible quality of service (e.g., an ambulance service's availability and response time to an emergency request). The demand for a service may have varying loads dependent on the time of day, day of week, season, or other unexpected needs (e.g., natural disasters, product promotion campaigns, etc.). In the US for instance, travel services have peak demands during Christmas week; Mother's day is usually the highest volume handling day for a telecommunications provider and tax services peak during extended periods (January through mid-April). Services cannot be inventoried; they are rendered at the time they are requested.
Additionally, for a business enterprise, delivering the service at the minimum cost while maximizing its profits may be the service objective. In contrast, for a non-profit organization the objective may be to maximize customer satisfaction while optimizing the resources required to render the service (e.g., during a natural disaster). Thus, the design and operations of service systems "is all about finding the appropriate balance between the resources devoted to the systems and the demands placed on the system so that the quality of service to the customer is as good as possible" (Daskin 2010).

Service Level Agreement
A SLA is a set of technical (functional) and non-technical (non-functional) parameters agreed among customers and service providers. SLAs can and do contain administrative level (non-functional) business related parameters, such as SLA duration, service availability for the SLA duration, consequences for variations, failure reporting, priorities, and provisions for modifications to the SLA. However, for service level management, the service level (technical) parameters need to be defined, monitored, and assessed; these parameters may include such things as throughput; quality; availability; security; performance; reliability, for example, mean time between failure (MTBF), maximum downtime, and time-to-repair; and resource allocation.
An SLA represents the negotiated service level requirements (SLR) of the customer and should establish valid and reliable service performance measures since it is usually the basis for effective service level management (SLM). The goal of SLM is to ensure that service providers meet and maintain the prescribed quality of service (QoS). However, care should be taken since in some domains the term QoS refers only to resource reservation control mechanisms rather than the achieved service quality (e.g., internet protocol (IP) networks). Some terms used to mean the "achieved service quality" include quality of experience (QoE), user-perceived performance, and degree of satisfaction of the user; these other terms are more generally used across service domains.
Non-functional properties fall into two basic categories: business properties, such as price and method of payment, and environmental properties, such as time and location. Business and environmental properties are classified as "context properties" by Youakim Badr (Badr et al. 2008). QoS properties are characteristics such as availability, resilience, security, reliability, scalability, agreement duration, response times, repair times, usability, etc. Therefore services evaluation measures are customer oriented and include not only traditional performance metrics (productivity, quality, etc.), but also require a comprehensive analysis of the service system from an end-to-end


perspective. Service evaluation typically includes customer demand-supply to ensure economic viability across the lifecycle of the service system. Furthermore, the service delivery is evaluated using the key technical performance metrics listed above, adding also Service Process Measures (provisioning time, time-to-restore/repair, etc.) and Technical Performance Measures (end-to-end response times, latency, throughput, etc.). Finally, the service system's SLAs are then the composition of these categories evaluated on a systemic level to ensure consistency, equity, and sustainability of the service to assure that the desired/contracted SLA for customer satisfaction, value co-creation, and high system robustness are realized. (Spohrer 2011; Tien and Berg 2003; Theilmann and Baresi, 2009)

Service Key Performance Indicators
Service key performance indicators (KPI) are defined and agreed to in the SLA; the service KPIs are decomposed into service process measures (SPM) and technical performance measures (TPM) during the analysis stage of the service systems engineering (SSE) process. In the design process, the KPIs and TPM are allocated to service system entities and their components, as well as to the business processes and their components so as to ensure compliance with SLAs. The allocated measures generate derived requirements (SLR) for the system entities and their relationships, as well as for the service entities' components and the data and information flows required in the service systems to monitor, measure, and assess end-to-end SLA. These allocations ensure that the appropriate performance indicators apply to each of the links in the service value chain.
TPMs are typically categorized by the number of defective parts in a manufacturing service, data transmission latency and data throughput in an end-to-end application service, IP QoS expressed by latency, jitter delay, and throughput; SPMs are typically categorized by service provisioning time, end-to-end response times to a service request (a combination of data and objective feedback), and quality of experience (QoE verified by objective feedback). Together, the KPI (TPM combined with SPM) and perception measures make up the service level management function. A quality assurance system's (QAS) continuous service improvement (CSI), processes, and process quality management and improvement (PQMI) should be planned, designed, deployed, and managed for the capability to continuously improve the service system and to monitor compliance with SLAs (e.g., PQMI, capability maturity model integration (CMMI) (SEI 2007), International Organization for Standardization (ISO) Standards 9001 (ISO/IEC 2008), Telecom Quality Management System Standards (TL 9000) (QuEST Forum 2012), Information Technology Infrastructure Library (ITIL) v. 3 (OGC 2009), etc.).
As discussed earlier, QoS needs to correlate customer perceived quality (subjective measures) with objective SPM and TPM measures. There are several techniques available to help monitor, measure, and assess TPM's, but most are a variation on the theme of culling information from TPM's using, for example, perceptual speech quality measure (PSQM) and perceptual evaluation of video quality (PEVQ) and enhancing or verifying this information with customer or end-user perception of service by extending mean opinion score (MOS) techniques/customer opinion models (Ray 1984). Telecommunication systems engineering (TCSE) played an important role in finding methodologies for correlation between perception and objective measures for the services of the twentieth century; SSE should continue to encourage multidisciplinary participation to equally find methodologies, processes, and tools to correlate perceived service quality with TPM and with SPM for the services of the twenty-first century (Freeman 2004).
Subjective (qualitative) service quality is the customer's perceived conformity of the service with the expected objective. Word-of-mouth, personal needs, and past experiences create customer expectations regarding the service. The customers' perception of the service must be captured via surveys and interviews. The customers' perception of the service is then compared with their expectations for the service; this process captures the perceived service quality. Care should be taken to understand that subjective measures appear to measure customer attitudes, and attitudes may be the result of several encounters with the service, as well as numerous encounters with similar services.


In summary, the SLA documents the SLRs and establishes reliable and valid service performance measures, technical parameters, and the agreed performance levels for the technical parameters. The technical parameters are then monitored and continuously compared against both objective and subjective data culled from multiple internal and external sources (service level management). The goal is not to report the level of service in a given period, but to develop and implement a dynamic system capable of predicting and driving service level improvement over time (i.e., continual service improvement (CSI)).

Evolution of Services
The second, third, and fourth decades of the twenty-first century will almost certainly see similar, and probably accelerated, technology development as seen in the prior three decades. Mass collaboration will become an established mode of operation. The beginnings of mass collaboration have manifested in developments such as value co-creation where loosely entangled actors or entities come together to create value in unprecedented ways, but ways that meet mutual and broader market requirements. Further developments in the technology, use, and acceptance of social media will continue to fuel the acceleration of these developments.
The next decades will see the grounding of concepts, such as crowdsourcing, coined by Jeff Howe in a June 2006 Wired magazine article; open innovation, promoted by Henry Chesbrough, a professor and executive director at the Center for Open Innovation at Berkeley; and mass collaboration and open source innovation supported by Enterprise
2.0 tools, as conceived by Wikinomics consultant Don Tapscott.
Roberto Saracco, a telecommunications expert specializing in analyzing economical impacts of technology evolution, argues that: "Communications will be the invisible fabric connecting us and the world whenever and wherever we happen to be in a completely seamless way, connecting us so transparently, cheaply, and effortlessly that very seldom will we think about it." The ubiquity and invisibility of these communications will greatly facilitate the creation and destruction of ad hoc collectives (groups of entities that share or are motivated by at least one common issue or interest, or work together on a specific project(s) to achieve a common objective). This enterprise may engender the concept of the hive mind (the collective intelligence of many), which will be an intelligent version of real-life super organisms, such as ant or bee nests (Hölldobler and Wilson 2009).
These models will most certainly give rise to issues of property rights and liabilities; access rights for both the provider and the customer can be owned outright, contracted/leased, shared, or have privileged access (Spohrer 2011). For now, we are on the cusp of a management revolution that is likely to be as profound and unsettling as the one that gave birth to the modern industrial age. Driven by the emergence of powerful new collaborative technologies, this transformation will radically reshape the nature of work, the boundaries of the enterprise, and the responsibilities of business leaders (McAfee 2009).
The service-providing industry in the US is divided into thirteen sectors (Chang 2010):
1. professional and business services,
2. healthcare and social assistance,
3. state and local government,
4. leisure and hospitality,
5. other services,
6. educational services,
7. retail trade,
8. financial activities,
9. transportation and warehousing,
10. wholesale trade,
11. information,
12. federal government, and
13. utilities.


Spohrer (2011) goes beyond the service sectors to propose three types of service systems:
1. Systems that focus on flow of things: transportation and supply chains, water and waste recycling, food and products, energy and electric Grid, information/ICT & cloud;
2. Systems that focus on Human Activities and Development: buildings and construction, retail and hospitality / media and entertainment industries, banking and finance / business consulting industries, healthcare and family life systems, education and work life / jobs and entrepreneurship; and
3. Systems that focus on Governing: cities, states, and nations.
Categorizing types and sectors of services is an important beginning because it can lead to a better understanding of the emerging rules and relationships in service value chains. This approach can further enhance the value co-creation capabilities of innovative service concepts that contribute to our quality of life. The classification also helps in identifying different objectives and constraints for the design and operations of the service system. Some examples include strategic policies under limited budget: education, strategic with readiness for quick response; national defense; business enterprise, maximizing profit while minimizing cost; etc.
In addition, this classification is being used to determine the overlap and synergies required among different science disciplines to enable trans-disciplinary collaboration and educational programs.

References
Works Cited
Badr, Y., A. Abraham, F. Biennier, and C. Grosan. 2008. "Enhancing Web Service Selection by User Preferences of Non-Functional Features." Presented at 4th International Conference on Next Generation Web Services Practices, October 20-22, 2008, Seoul, South Korea.
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. New York, NY, USA: John Wiley & Sons, Inc.
Daskin, M.S. 2010. Service Science. New York, NY, USA: John Wiley & Sons.
Freeman, R.L. 2004. Telecommunication Systems Engineering, 4th ed. New York, NY, USA: John Wiley & Sons.
Hölldobler, B., and E.O. Wilson. 2009. The Super-organism: The Beauty, Elegance, and Strangeness of Insect Societies. New York, NY, USA: W.W. Norton & Company.
ISO. 2008, ISO 9001:2008, Quality management systems -- Requirements. Geneva, Switzerland: International Organisation for Standardisation.
McAfee, A. 2009. Enterprise 2.0: New Collaborative Tools for Your Organization's Toughest Challenges. Boston, MA, USA: Harvard Business School Press.
OGC (Office of Government Commerce). 2009. ITIL Lifecycle Publication Suite Books. London, UK: The Stationery Office.
QuEST Forum. 2012. Quality Management System (QMS) Measurements Handbook, Release 5.0. Plano, TX, USA: Quest Forum.
Ray, R.F. (ed). 1984. Engineering and Operations in Bell System, 2nd ed. Florham Park, NJ, USA: AT&T Bell Labs.
SEI. 2007. Capability Maturity Model Integrated (CMMI) for Development, version 1.2. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).
Spohrer, J.C. 2011. "Service Science: Progress & Directions." Presented at the International Joint Conference on Service Science, 25-27 May 2011, Taipei, Taiwan.
Theilmann, W., and L. Baresi. 2009. "Multi-level SLAs for Harmonized Management in the Future Internet," in Towards the Future Internet - A European Research Perspective, edited by G. Tselentis, J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zehariadis. Amsterdam, The Netherlands: IOS Press.


Tien, J.M., and D. Berg. 2003. "A Case for Service Systems Engineering." Journal of Systems Science and Systems Engineering. 12 (1): 13-38.

Primary References
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. New York, NY, USA: John Wiley & Sons, Inc.
Theilmann, W., and L. Baresi. 2009. "Multi-level SLAs for Harmonized Management in the Future Internet," in Towards the Future Internet - A European Research Perspective, edited by G. Tselentis, J. Domingue, A. Galis, A. Gavras, D. Hausheer, S. Krco, V. Lotz, and T. Zehariadis. Amsterdam, The Netherlands: IOS Press.

Additional References
None.

Scope of Service Systems Engineering

 Lead Authors:
 Ricardo Pineda and Bud Lawson
-
Service systems engineering (SSE) involves all aspects of the enterprise. This topic discusses different aspects of the scope of SSE, from organizational strategy, to interoperability, to the life cycle of services, and then to their design.

SSE and the Enterprise
Enterprises plan, develop, and manage the enhancements of their infrastructure, products, and services, including marketing strategies for product and service offerings. These plans propose new products or service offerings based on new, unexplored, or unforeseen customer needs with clearly differentiated value propositions. Service strategies are the internal business processes required to design, operate, and deliver services. The mission of service strategies is to develop the capacity to achieve and maintain a strategic advantage (OGC 2009).
Taking the systems engineering (SE) approach to service systems, or (SSE), is imperative for the service-oriented, customer-centric holistic view to select and combine service system entities. The SSE approach can then define and discover relationships among service system entities to plan, design, adapt, or self-adapt to co-create value. The SSE approach should identify linkages, relationships, constraints, challenges/problems, new technologies, interoperability standards, interface agreements, or process development requirements among service entities required for the planned service or for potential future services (Lefever 2005).
SSE mandates participation not only from engineering, business operations, and customers, but also from various different domains, such as management science, behavioral science, social science, systems science, network science, computer science, decision informatics, etc.
Hipel et al. (2007) have presented a table for service science in terms of the domains and methods, including not only service systems, but also infrastructure and transportation systems, environmental and energy systems, and defense and space systems. The collaboration domains in Figure 1 below are a first approximation to the collaboration required from different disciplines for the SSE paradigm.


Table 1. Service Systems Engineering Domain Collaboration. (Hipel et al. 2007) Reprinted with permission of (c) Copyright IEEE - All rights reserved.
SEE	Collaboration Domains

SSE Management		Management Science
 Business Process Management
 Cognitive Science
 Decision Science

Service Realization Process (SRP)		All engineering fields
 Business Operations
 Infrastructure Operations
 Social Science
 Computer Science
 Management Science
 Behavioral Science
 Network Science
 Computational Science
 Systems Science
 Decision Science

Methodologies, Processes, and Tools (MPT) 	Natural Science
 Business Science (BPMN)
 Mathematical
 All engineering fields

Major challenges faced by SSE include the dynamic nature of service systems evolving and adapting to constantly changing operations and/or business environments, and the need to overcome silos of knowledge. Interoperability of service system entities through interface agreements must be at the forefront of the SSE design process for the harmonization of operations, administration, maintenance, and provisioning procedures of the individual service system entities (Pineda 2010).
In addition, service systems require open collaboration among all stakeholders, but recent research on mental models of multidisciplinary teams shows integration and collaboration into cohesive teams has proven to be a major challenge (Carpenter et al. 2010) (See also Team Dynamics). Thus, the emphasis on multidisciplinary (e.g., scientific, engineering, management, and social) education and training programs required to foster systems thinking helps bridge the gaps created by these silos of knowledge.
In the SSE approach, the social, governance, business, service, operations, and management activities are linked together through the service life cycle; service systems are by themselves a type of system of systems (SoS) where traditional systems engineering (TSE) practices need to be extended to include service systems entities' relationships (e.g., interface agreements among people, organizations, processes, and technologies) through information flows, technical interoperability, governance, and access rights within a system of systems.

Interoperability of Services
Interoperability among the different service system entities becomes highly relevant in SSE since the constituent entities are designed according to stakeholder needs; the entity is usually managed and operated to satisfy its own objectives independently of other system entities. The objectives of individual service system entities may not necessarily converge with the overall objectives of the service system. Thus, the need to include the following in the definition of a service system: analysis and design of the service system, governance frameworks to align political objectives, service strategies, business objectives, information and communications technologies (ICT) objectives, technology objectives and end-to-end operations, administration and maintenance procedures, and allocation of these procedures to individual entities (Luzeaux and Ruault 2010).


The previous discussion relates to a new service system development. There may be instances where a service is planned for delivery in phases of deployment (transition/deployment phase), or as presented earlier, if there is already a service system defined and deployed, then it's possible that the new request is for a service based application (SBA), in which case, the process is more focused on the adaptations needed to deploy the new application. For SBA, instances of advances in computer engineering, computer science, and software development already permit the adaptation and creation of SBA in a run-time environment for the discovery, development, and publishing of applications (Maglio et al. 2010).
The service design process (SDP) for new services is triggered by the market concept of the intended service and considers the stakeholder(s), service value chain(s), target market(s), target customer(s), proposed SLA, demand forecast, pricing strategy, and customer access privileges, which together comprise the service strategy. The SDP process then adapts the TSE as a life cycle approach (concept/definition, design/development, deployment/transition, operations, life cycle management/utilization/CSI, and retirement) as discussed in Life Cycle Models. A more detailed list of the SSE process activities is described in Value of Service Systems Engineering and Service Systems Engineering Stages.

Service Lifecycle Stages
The SDP stages and notation are depicted in Table 2 below; due to the complexity of service systems (see also Complexity) the documents generated are becoming more model-based electronic documents than written binders depending on the methodologies and tools used.
Table 2. Service Realization Process: Life Cycle Stages. (SEBoK Original)
<html>

Life Cycle Changes
Purpose
Decision Gates
Service Strategy/Concept
New Service identification
Elicit enterprise needs Explore service concepts Identify service system entities
Propose viable HL black box solutions
Output: Service Description
Decision Options
- Go, No-GO
- Continue this stage
- Go to preceding stage
- Hold project activity
- Terminate project
- Test
- Deploy

Feasibility Phase



HL Analysis


      Service Design/Development
Service Requirement Analysis and Engineering
Refine service system requirements Output: Service Requirement Document Create solution description
Identify Interfaces among entities
Output: Preliminary Design
Develop service system detailed architecture and specs
Output: Service Specification Document Verify and Validate system requirements Output: service JV & V Plans


Service Development



Service Integration, Verification, and Validation


Service Transition/Deployment
Service Insertion Plans Deploy service system Manage deployment activities Inspect and test (verify)
Output: Service Operation Plans, Operations Technical Plans, Operational Readiness Plans

Service Operations and / Continuous Service Improvement
Operate a reliable service system to satisfy customer needs Monitor, Measure, & Assess
Provide sustained system capability Troubleshoot potential issues
Store, archive, or dispose of the service system

</html>


All the life cycle stages are included for completeness, but very often during the concept analysis phase it may be determined that not all of the stages are needed. In these cases, a recommendation should be made regarding which stages are specifically required for the realization of the service in question.

Service Design Management
Another important role of SSE is the management of the service design process. SSE utilizes TSE practices to manage the resource and asset allocation to perform the activities required to realize the service through the value chain for both the customer and the service provider. The main focus of the service design process management is to provide for the planning, organizational structure, collaboration environment, and program controls to ensure that stakeholder's needs are met from an end-to-end customer perspective.
The service design process management process aligns business objectives and business operational plans with end-to-end service objectives, including customer management plans, service management and operations plans, and operations technical plans. The main SSE management activities are
 planning;
 assessment and control;
 decision management;
 risk management;
 configuration management; and
 information management.
SSE plays a critical role in describing the needs of the intended service in terms of the service's day-to-day operations, including customer care center requirements, interface among service system entities, such as: manufacturing plant, smart grid, hospital, network infrastructure provider(s), content provider(s) and service provider(s), service based application provider(s), applications providers, and the customer management process for the service.
Current research in computer engineering and software systems engineering is looking at the development of run-time platforms to allow real time or near real time customer service discovery and publishing (Spark 2009). The service-centric systems engineering (SeCSE) consortium has a well-defined service design process that is being applied to SBA. In this approach, there are design time and run-time sub-processes for the composition, provisioning, orchestration, and testing for service publishing (Lefever 2005). There is particular interest from the research community to include human-computer interactions (HCI) and behavioral science to address current social networking services (Facebook, Twitter, Linkedin, Google+, etc.) used to share unverified information via audio, messaging, video, chats, etc.
This research is gaining relevance because of the thin line between the customer (consumer, enterprise) and content providers in regards to security, privacy, information authentication, and possible misuse of the user-generated content. Even as the research progresses, these networking services are examples of business models organizing communities of interest for innovation. Hsu says, "If we understand this networking, then we may be able to see through the business strategies and systems design laws that optimize connected value co-creation" (2009).


References
Works Cited
Carpenter, S., H. Delugach, L. Etzkorn, J. Fortune, D. Utley, and S. Virani. 2010. "The Effect of Shared Mental Models on Team Performance." Presented at Industrial Engineering Research Conference, Institute of Industrial Engineers, 2010, Cancun, Mexico.
Hipel, K.W., M.M. Jamshidi, J.M. Tien, and C.C. White. 2007. "The Future of Systems, Man, and Cybernetics: Application Domains and research Methods." IEEE Transactions on Systems, Man, and Cybernetics-Part C: Applications and Reviews. 37 (5): 726-743.
Hsu, C. 2009. "Service Science and Network Science." Service Science, 1 (2): i-ii.
Lefever, B. 2005. SeSCE Methodology. Rome, Italy: SeCSE Service Centric Systems Engineering. SeCSE511680. Available: http://www.secse-project.eu/wp-content/uploads/2007/08/a5_d4-secse-methodology-v1_3.pdf.
Luzeaux, D., and J.R. Ruault (eds.). 2010. Systems of Systems. New York, NY, USA: John Wiley & Sons.
Maglio, P., M. Weske, J. Yang, and M. Fantinato (eds.). 2010. Proceedings of the 8th International Conference on Service Oriented Computing: ICSOC 2010. Berlin & Heidelberg, Germany: Springer-Verlag.
OGC (Office of Government Commerce). 2009. ITIL Lifecycle Publication Suite Books. London, UK: The Stationery Office.
Pineda, R. 2010. "Understanding Complex Systems of Systems Engineering." Presented at Fourth General Assembly Cartagena Network of Engineering, 2010, Metz, France.
Spark, D. 2009. "Real-Time Search and Discovery of the Social Web." Spark Media Solutions Report. Accessed September	2,	2011.	Available:	http:/	/	www.	sparkminute.	com/	2009/	12/	07/ free-report-real-time-search-and-discovery-of-the-social-web/.

Primary References
Lefever, B. 2005. SeSCE Methodology. Rome, Italy: SeCSE Service Centric Systems Engineering. SeCSE511680. Available: http://www.secse-project.eu/wp-content/uploads/2007/08/a5_d4-secse-methodology-v1_3.pdf.
Luzeaux, D., and J.R. Ruault (eds.). 2010. Systems of Systems. New York, NY, USA: John Wiley & Sons.

Additional References
None.


Value of Service Systems Engineering

 Lead Authors:
 Ricardo Pineda, Bud Lawson, and Richard Turner
-
Service systems engineering (SSE) is a multidisciplinary approach to manage and design value co-creation of a service system. It extends the holistic view of a system to a customer-centric, end-to-end view of service system design. Service systems engineers must play the role of an integrator by considering the interface requirements for the interoperability of service system entities, not only for technical integration, but also for the processes and organization required for optimal customer experience during service operations.
Service systems engineering uses disciplined approaches to minimize risk by coordinating/orchestrating social aspects, governance (including security), environmental, human behavior, business, customer care, service management, operations, and technology development processes. Therefore, systems engineers must have a good understanding of cross disciplinary issues to manage, communicate, plan, and organize service systems development and delivery of service. Service systems engineering also brings a customer focus to promote service excellence and to facilitate service innovation through the use of emerging technologies to propose creation of new service systems and value co-creation.
The service design process includes the definition of methods, processes, and procedures necessary to monitor and track service requirements verification and validation, in particular as they relate to the operations, administration, maintenance, and provisioning procedures of the whole service system and its entities. These procedures ensure that failures by any entity are detected and do not propagate and disturb the operations of the service (Luzeaux and Ruault 2010).
Research on service systems needs to fuse business process management, service innovation, and social networks for the modeling of service system value chain (Carroll et al. 2010). The systems engineering approach helps to better understand and manage conflict, thereby helping both private and public organizations optimize their strategic decision making. The use of a systemic approach reduces rework, overall time to market, and total cost of development.

Service SE Knowledge & Skills
The world's economies continue to move toward the creation and delivery of more innovative services. To best prepare tomorrow's leaders, new disciplines are needed that include and ingrain different skills and create the knowledge to support such global services. "In this evolving world, a new kind of engineer is needed, one who can think broadly across disciplines and consider the human dimensions that are at the heart of every design challenge" (Grasso and Martinelli 2007).
Service systems engineers fit the T-shaped model of professionals (Maglio and Spohrer 2008) who must have a deeply developed specialty area, as well as a broad set of skills and capabilities (See the Enabling Individuals article). Chang (2010) lists the following twelve service system management and engineering (SSME) skills:
1. Management of Service Systems. These skills include scheduling, budgeting and management of information systems/technologies, and leadership;
2. Operations of Service Systems. Engineers should be proficient in process evaluation and improvement, quality improvement, customer relationships, and uncertainty management;
3. Service Processes. These skills include performance measurements, flow charting, work task breakdown;
4. Business Management. Business skills include project costing, business planning, and change management;
5. Analytical Skills. These skills include problem solving, economic decision analysis, risk analysis, cost estimating, probability and statistics;


6. Interpersonal Skills. Increasingly, service systems engineers are expected to excel in professional responsibility, verbal skills, technical writing, facilitating, and team building;
7. Knowledge Management. Service systems engineers should be familiar with definition, strategies, success factors, hurdles, and best practices in industry;
8. Creativity and Innovation in Services. These skills include creative thinking methods, success factors, value chain, best practices, and future of innovation;
9. Financial and Cost Analysis and Management. Additional business skills include activity-based costing, cost estimation under uncertainty, T-account, financial statements, ratio analysis, balanced scoreboards, and capital formation;
10. Marketing Management. Market forecast, market segmentation, marketing mix- service, price, communications and distribution- are important marketing tools;
11. Ethics and Integrity. Service Systems Engineers must be held to high ethical standards. These include practicing ethics in workplace and clear guidelines for making tough ethical decisions, corporate ethics programs, affirmation action, and workforce diversity, as well as global issues related to ethics. (See Ethical Behavior); and
12. Global Orientation. Increasingly, engineers must be aware of emerging business trends and challenges with regards to globalization drivers, global opportunities, and global leadership qualities.

Service Architecture, Modeling & Views
Successful deployment of service value chains is highly dependent on the alignment of the service with the overall enterprise service strategy, customer expectations, and customer's service experience. The importance of service-oriented customer-centric design has been recognized for several years by traditional service providers (telecommunications, information technology (IT), business reengineering, web services, etc.) through the creation of process-driven architecture frameworks.
Architecture frameworks are important for creating a holistic system view. They promote a common understanding of the major building blocks and their interrelation in systems of systems or complex systems of systems (see also Complexity). An architecture is a model of the the system created to describe the entities, the interactions and interoperability among entities, as well as the expected behavior, utilization, and properties of the end-to-end system. The architectures become the main tool to guide stakeholders, developers, third-party providers, operations managers, service managers, and users in the understanding of the end-to-end service system, as well as to enable governance at the service management and the service development levels.
These architecture frameworks have been defined through standards bodies and/or by private enterprises that recognize their advantage-standard processes that integrate the business-strategic processes and operations with the information technology and technology infrastructure (See Systems Engineering Standards). Most architecture frameworks model different scopes and levels of detail of business strategies, product and service offerings, business operations, and organizational aspects. Unfortunately, there are currently no frameworks that cover all the aspects (views) required to model the service systems. Some frameworks focus on business strategies, others in business process management, others in business operations, still others in aligning IT strategy or technology strategy to business strategy. Thus, a combination of architecture frameworks is required to create the enterprise service system model. For instance, an enterprise may use an enterprise business architecture (EBA) model covering strategic goals and objectives, business organization, and business services and processes where driven by market evolution, technology evolution, and customer demands. However, a reference framework would be needed to model the IT strategy (e.g., Information Technology Infrastructure Library (ITIL) v. 3 (OGC 2009)) and the organizations and processes needed to deliver, maintain, and manage the IT services according to the business strategy.


Service Architecture Frameworks
Prime examples of Service Architecture Frameworks are listed below. Standards:
 Zachmann Framework (Zachman 2003)
 Business Process Modeling (BPM) (Hantry et al. 2010)
 The Open Group Architecture Framework (TOGAF) (TOGAF 2009)
 Enhanced-Telecomm Operations Map (eTOM) by the TeleManagemnt Forum (eTOM 2009)
 Service Oriented Architecture (SOA) (Erl 2008)
 National Institute of Standards and Technology (NIST) Smart Grid Reference Model (NIST 2010)
 Web services business process execution language (WS-BPEL) (OASIS 2007)
 Department of Defense Architecture Framework (DoDAF) (DoD 2010)
 Others.
Proprietary Enterprise Architecture Frameworks:
 Hewlett - Packard IT Service Management Reference Model (HP ITSMRM 2000)
 International Business Machines Systems Management Solutions Life Cycle, IBM Rational Software.
 Microsoft Operations Framework
This list represents only a sample of the existing service architecture frameworks.
One great example of architecture frameworks applications for service systems, the "High Level Reference Model for the Smart Grid," developed by NIST in 2010 under the "Energy Independence and Security Act of 2007" (EISA), is presented below:
EISA designated the development of a Smart Grid as a national policy goal, specifying that an interoperability framework should be "flexible, uniform and technology neutral. The law also instructed that the framework should accommodate "traditional, centralized generation and distribution resources" while also facilitating incorporation of new, innovative Smart Grid technologies, such as distributed renewable energy resources and energy storage. (NIST 2010)
The NIST reference model was developed as "a tool for identifying the standards and protocols needed to ensure interoperability and cyber security, and defining and developing architectures for systems and subsystems within the smart grid." Figure 1 illustrates this model and the strategic (organizational), informational (business operations, data structures, and information exchanges required among system entities), and technical needs of the smart grid (data structures, entities specifications, interoperability requirements, etc.).




The NIST reference model uses this architecture framework to identify existing standards, identify new standards required for interoperability among interconnected networks, and to enable innovations where smart grid components (energy sources, bulk generation, storage, distribution, transmission, metering, cyber infrastructure, markets, service providers, customers, etc.) are supported by a broad range of interoperable options by well-defined interfaces useful across industries, including security. Emerging/innovative service development with massively scaled, well-managed, and secured networks will enable a dynamic market driven ecosystem representing new economic growth (NIST 2010).
This architecture framework is being used today by different standards organizations, such as the Smart Grid Interoperability Panel (SGIP), and several smart grid working groups. For details on priorities, working programs, and working group charters, see "High Level Reference Model for the Smart Grid" (NIST 2010).
For service systems, the application of any of these frameworks requires modifications/adaptations to create dynamic frameworks aware of environmental changes due to competitor's offerings, market demands, and customer co-creation. Most frameworks are static in nature; this requires business operations to manage changes through pre-defined (pre-programmed) processes for service configuration and change control. Dynamic frameworks would allow real-time, or near real-time, analysis of impacts of newly discovered service on business processes, organizations, and revenue for run-time environment deployment.
Automatic service configuration and change control are being incorporated into the management process via service oriented architecture (SOA) for service automation (Gu et al. 2010) and service oriented computing (Maglio et al. 2010). In particular, progress has been made over the last ten years on the standards for adaptation, orchestration and creation of web services (WS) for service based applications (SBA). A good summary of existing life cycle approaches for adaptable and evolvable SBA is presented in (Papazoglou et al. 2010). Some examples of this are
 web services development life cycle (SDLC);


 rational unified process (RUP) for SOA;
 service oriented modeling and architecture (SOMA); and
 service oriented analysis and design/decision Modeling (SOAD).
Further research is required to understand the architectural implications of dynamic service configuration, including research on human behavior, social aspects, governance processes, business processes, and implications of dynamic service level agreements (SLA) for an enterprise service system. New ways are needed to include adaptation requirements for new technologies that will exchange information with the service system entities and may have their own specifications. These technologies include robots, sensors, renewable energy, nanotechnologies, three dimensional printers, and implantable medical devices.

References
Works Cited
Carroll, N., E. Whelan, and I. Richardson. 2010. "Applying Social Network Analysis to Discover Service Innovation within Agile Service Networks." Service Science. 2 (4): 225-244.
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. New York, NY, USA: John Wiley & Sons, Inc.
DoD. 2010. DoD Architecture Framework (DoDAF), version 2.0. Arlington, VA, USA: US Department of Defense (DoD).
Erl, T. 2008. SOA Principles of Service Design. Boston, MA, USA: Prentice Hall, Pearson Education.
eTOM. 2009. "Business Process Framework." Morristown, NJ: TeleManagement Forum. Accessed May 30, 2011 at http://www.tmforum.org/BusinessProcessFramework/1647/home.html.
Grasso, D., and D. Martinelli. 2007. "Section B: Holistic Engineering." The Chronicle Review, The Chronicles of Higher Education. Vol. 53, Issue 28. Page 8B. March 2007.
Gu. Q., Cuadrado, F., Lago, P. and Duenãs, J.C. 2010. "Architecture views illustrating the service automation aspect of SOA". Service research challenges and solutions for the future internet. 339-372.
Hantry, F., M.P. Papazoglou, W. van den Heuvel, R. Haque, E. Whelan, N. Carroll, D. Karastoyanova, F. Leymann,
C. Nikolaou, W. Lamersdorf, and M. Hacid. 2010. "Business Process Management," in Service Research Challenges and Solutions for the Future Internet S-Cube - Towards Engineering, Managing and Adapting Service-Based Systems, edited by M. Papazoglou, K. Pohl, M. Parkin, and A. Metzger. Berlin and Heidelberg, Germany: Springer-Verlag. 27-54.
HP ITSMRM. 2000. "HP IT Service Management Reference Model. Technical White Paper." Palo Alto, California, USA: Hewlett - Packard Company. Accessed September 2, 2011. Available: ftp://ftp.hp.com/pub/services/itsm/ info/itsm_rmwp.pdf.
Luzeaux, D., and J.R. Ruault (eds.). 2010. Systems of Systems. New York, NY, USA: John Wiley & Sons.
Maglio, P., and J. Spohrer. 2008. "Fundamentals of Service Science." Journal of the Academy of Marketing Science.
36 (1): 18-20.
National Institute of Standard and Technology (NIST). 2010. NIST Framework and Roadmap for Smart Grid Interoperability Standards Release 1.0. Gaithersburg, MD, USA: Office of the National Coordinator for Smart Grid Interoperability, US Department of Commerce. Accessed September 2, 2011. Available: http:/ / www. nist. gov/ smartgrid/upload/FinalSGDoc2010019-corr010411-2.pdf.
OASIS. 2007. "Web Services Business Process Execution Language Version 2.0." Organization for Advancement of Structured Information Standards (OASIS) Standard. Accessed September 2, 2011. Available: http:/ / docs. oasis-open.org/webcgm/v2.0/OS/webcgm-v2.0.pdf.


OGC (Office of Government Commerce). 2009. ITIL Lifecycle Publication Suite Books. London, UK: The Stationery Office.
Papazoglou, M., K. Pohl, M. Parkin, and A. Metzger. 1998. "Service Research Challenges and Solutions for the Future Internet," in Service Research Challenges and Solutions for the Future Internet S-Cube - Towards Engineering, Managing and Adapting Service-Based Systems. Berlin and Heidelberg, Germany: Springer-Verlag.
TOGAF. 2009. "The Open Group Architecture Framework," version 9. The Open Architecture Group. Accessed September 2, 2011. Available: http://www.opengroup.org/togaf.
Zachman, J. 2003. "The Zachman Framework for Enterprise Architecture: Primer for Enterprise Engineering and Manufacturing." Accessed September 2, 2011. Available: http:/ / www. zachmanframeworkassociates. com/ index. php/ebook.

Primary References
Chang, C.M. 2010. Service Systems Management and Engineering: Creating Strategic Differentiation and Operational Excellence. New York, NY, USA: John Wiley & Sons, Inc.
Erl, T. 2008. SOA Principles of Service Design. Boston, MA, USA: Prentice Hall, Pearson Education.
Hantry, F., M.P. Papazoglou, W. van den Heuvel, R. Haque, E. Whelan, N. Carroll, D. Karastoyanova, F. Leymann,
C. Nikolaou, W. Lamersdorf, and M. Hacid. 2010. "Business Process Management," in Service Research Challenges and Solutions for the Future Internet S-Cube - Towards Engineering, Managing and Adapting Service-Based Systems, edited by M. Papazoglou, K. Pohl, M. Parkin, and A. Metzger. Berlin and Heidelberg, Germany: Springer-Verlag. p. 27-54.
National Institute of Standard and Technology (NIST). 2010. NIST Framework and Roadmap for Smart Grid Interoperability Standards Release 1.0. Gaithersburg, MD, USA: Office of the National Coordinator for Smart Grid Interoperability, US Department of Commerce. Accessed September 2, 2011. Available: http:/ / www. nist. gov/ smartgrid/upload/FinalSGDoc2010019-corr010411-2.pdf.

Additional References
None.


Service Systems Engineering Stages

 Lead Authors:
 Ricardo Pineda, Bud Lawson, and Richard Turner
-
This article describes the stages of the service systems development process (SSDP) and expected outputs for each stage; for a closer alignment with the traditional systems engineering (TSE) process, the concept and feasibility phases have been combined into a single service strategy/concept as discussed in the SEBoK Systems Engineering and Management article. All of the stages of the SSDP take a similar iterative approach to fully understand the enterprise capabilities, enterprise process impact, information technology (IT), and technology impacts and customer expectations. Lin and Hsieh (2011) provide a good summary on New service Development processes. The Information Technology Infrastructure Library (ITIL) stage names have been purposely added to the SSDP to show the needed alignment between IT and technology. The reader should keep in mind that even though IT is crucial to the overall end-to-end system, service technology development needs must be taken into consideration in all the stages of SSDP.

Service Strategy/Concept
A service strategy/concept is the entry into the SSDP. The concept may be generated by an end-user (enterprise customer or consumer), a business manager, an engineering organization, new web service designers, new technology developments, and/or information technology trends. The service concept is the highest level of the service idea and it usually addresses what service is being proposed to what markets and to whom within these markets.
A high-level feasibility assessment of the concept is then carried out by the integrated service development team (ISDT) to assess the needs/impacts on enterprise process capabilities, operational capabilities, and/or new technology developments (access, infrastructure, operations support systems (OSS), service support systems (SSS), and business support systems (BSS). It should also consider any impacts on service governance, social, cultural, and human behaviors. The feasibility assessment also gives a plus or minus 30% estimate on the time to develop and the cost of development, which are entry points into the business case to evaluate whether the service is viable to develop and to market given the constraints and estimates. At this time, a decision (decision gate) determines if the service is to be developed.
If the business case is viable, then a detailed business description of the service is developed. This includes functions and features to be included, phases of development, markets to be addressed, customers within the markets to be targeted, and customer experiences expected from the service (i.e., defining the non-functional requirements of the service, such as the quality of service (QoS), availability, reliability, and security considerations and offerings within the service). This description allows detailed studies of expected human-computer interactions, social networking, technology requirements, and operations requirements. Governance and organizational process requirements should also be included to generate the "service description" as the main output from this stage.
Service systems engineering (SSE) takes an important role in understanding and eliciting the enterprise service concepts. Clearly, understood end-to-end business processes required for the intended service are fundamental to its successful development, deployment, and customer satisfaction. SSE works with business process management (BPM), social science, and cognitive science to elicit intended service operations, including target audiences, pre-sale, sale, and post-sale customer care processes.


Requirements Analysis and Engineering
A service requirements document is created that describes the service functions, the service entities, the intended interaction among entities, and the customer-facing and internal-facing functions/processes that are required to support the service. This description should conceptually include intended service level agreements (SLAs) and the obligations of the service provider process should there be any degree of non-compliance during service operation.
In addition to the TSE activities described earlier, the SSE requirements analysis and engineering process must develop a customer-centric view of the service to analyze SLA, QoS, value co-creation, monitoring, and assessment requirements to comply with the expected/planned SLA. This analysis will determine whether dynamic changes of the service are required during service operation to correct faults, reconfigure, administer, or to adapt/self-adapt for possible performance degradations.
Beyond the traditional service life cycle management (LCM) processes, the requirements must also be developed for service level management (SLM) processes and systems. These are needed to monitor, measure, and assess key performance indicators (KPIs), technical performance measures (TPMs), and service performance measures (SPMs) according to the SLA.
The SSE requirements analysis addresses the support systems for the governance, business, service, operations, and support processes to derive requirements for technologies, information systems, processes, and enterprise organizations. Interface requirements, information flows, and data requirements are also within the scope of requirements analysis. The main output is the service requirements document (SRD).
SSE plays a critical role in describing the services needs for day-to-day operations. These include customer care centers requirements and interfaces between network infrastructure provider(s), content provider(s), service provider(s), service based application provider(s), and the customer management process for the service. All of these are described in detail in the service operations plans (SOPs) and the operations technical plans (OTPs).

Systems Design/Development
The SRD, SOP, and OTP have enough detail regarding the service functions, operations, interfaces, and information flows required among the different service system entities to analyze, identify, and recommend end-to-end applicable architecture frameworks; to carry out trade-off analyses for the alternatives among service system entities; and to describe and allocate relationships (interactions) among entities at all levels of the service architecture. Detailed requirements are worked at lower levels to generate specifications for entity developers including data structures, data flow diagrams, and allocated performance requirements.
ITIL v. 3 (OGC 2007) recommends inclusion of the following service design processes:
 service catalog management,
 service level management,
 capacity management,
 availability management,
 service continuity management,
 security management, and
 supplier/provider management.


Service Integration, Verification & Validation
SSE defines integration and interface requirements for the seamless operation of the service. In this regard, the system engineer takes an integrator role to ensure proper data generation and flow through all the different systems composing the service offered. The goal is to ensure customers (consumer or internal) are getting the information required to carry out the tasks required in the business, operations, service, and customer processes. The service integration, verification, and validation plans need to include end-to-end verification and validation procedures for any new development or adaptations required for planned dynamic configuration/re-configuration of previously tested service systems. (See also System Verification and System Validation.)
The systems engineer creates these plans using a number of different perspectives. These include:
 end-to-end service (service validation test plans),
 customer care (operational readiness test plans),
 service provider (network validation test plans),
 service system entities interoperability/interface test plans,
 content provider (content validation test plans), and
 application (user acceptance test plans).

Service Transition/Deployment
Service systems may change very rapidly and new enhancements, new features, or new applications can be added as incremental developments, new developments, or adaptation to service offerings. Service systems engineers review new requirements to assess the feasibility of the changes to the service system entities, technologies, processes, and organizations, as well as their impacts on the service offerings. The service transition/deployment stage takes input from service development to plan for service insertion, technology insertion, processes adaptations, and implementation with minimal impact to existing services. During this stage, special care is taken with integration, verification, and validation test plans and regression testing to ensure new developments work flawlessly with existing services.
ITIL v. 3 (OGC 2007) recommends the following processes in the transition/deployment stage:
 transition planning and support,
 change management,
 service asset and configuration management,
 release and deployment management,
 service validation and testing,
 evaluation, and
 knowledge management.

Service Operations/Continuous Service Improvement (CSI)
Service operation manages the day-to-day activities of all aspects of the end-to-end service delivery to the customer. It manages the operations, administration, maintenance, and provisioning of the service, technology, and infrastructure required to deliver the contracted service to the customer within the specified service levels. The main service operations processes in ITIL v. 3 are
 event management,
 incident management,
 problem management,
 request fulfillment, and
 access management.


A continuous service improvement (CSI) plan for the implementation of technologies and tools for the continuous improvement of the service, monitoring, measuring, and analyzing process and service metrics is essential.

Service Systems Engineering Tools & Technologies
Tools and technologies from a broad spectrum of fields are extensively used during the different stages of SSE. Not only are they used for the development of the hardware, software, information systems and technology components, but also for the modelling, definition, and design of the organization, processes, and data structures of the service system (See also Representing Systems with Models). These tools and technologies include modelling, simulation, development, test bed, and social environmental aspects of the intended or to be designed service. The tools fall into three main domains:
1. business process management (BPM),
2. service design process, and
3. service design management.
Business process management (BPM) generally deals with process management scenarios to coordinate people and systems, including sequential workflow, straight through processing, case management, content life cycle management, collaborative process work, and value chain participation. Systems engineers work with service managers to align the business architectures with the technology and IT architecture. The business process modeling notation (BPMN) is a graphic notation standard that is implemented to describe a process's realization within any given workflow. This notation is linked with web services business process execution language (WS-BPEL), a format used to perform an automated business process by implementing web services technology. For an extensive review of existing BPM tools and BPM suites, please see Hantry et al. (2010), Carroll et al. (2010), Andrikoupolous et al. (2010), Lin and Hsieh (2011), and Ward-Dutton (2010).
Service design process: Architecture frameworks (AF) and enterprise architectures (EAs) are standards that help split complex systems (see also Complexity) into an interrelated, structured form. They describe the different characteristics of the products and services. Systems engineering modeling tools, such as the unified modeling language (UML) (OMG 2010a) and system modeling language (SysML) (OMG 2010b), help develop the AF and EA and greatly impact the continued evolution and successful implementation of complex projects. Service oriented architecture (SOA) and systems and software engineering architecture (ISO/IEC/IEEE 2011) are standards that apply architecture principles for specialized applications. Successful implementation of the architecture tools helps identify critical interfaces and improves understanding of the allocations between components and functions.
Model-based systems engineering (MBSE), model driven architectures (MDA), and model oriented systems engineering (MOSES) are examples of commonly used tools for logical (functional), behavioral (operational), and physical design of the IT. UML, UML 2.0, and SysML are extensively used to describe operational scenarios, modes of operations, use cases, and entity relationships. For an extensive review of MBSE, MDA, and MOSES, please see Friedenthal (1998), Estefan (2008), Pezuela (2005), Andrikopoulos et al. (2010), and Hybertson (2010).
In addition, trade-off and engineering analyses use different optimization methodologies. Since services exhibit a significant level of randomness, statistical analysis, demand forecasting, multi-objective optimization, queuing theory, and stochastic optimization methodologies are tools used to model and simulate the service system behavior. These methodologies support decision making in areas as diverse as resource allocation, number of facilities, facilities' geographical locations, fleet routing and optimization, service systems reliability and prognosis, and network optimization. A good overview of these methodologies can be found in Daskin (2010).
During the service design process (SDP), planning for the implementation of technologies and tools for the continuous improvement of the service is performed. These tools support monitoring, measuring, and analyzing process and service performance metrics. The Deming cycle (plan, do, check, and act (PDCA) is widely used as the foundation for quality improvements across the service. Lean manufacturing, six sigma, swim lanes, balanced scoreboard, benchmarking, and gap analysis methodologies are commonly used for service evaluation and


continuous improvement.
Service design management: There are standards for implementing and managing systems engineering processes (IEEE 1220 (1998)) that help coordinate and synchronize all the service systems engineering processes leading to improved organizational collaboration and improved service delivery (see also Systems Engineering Standards). Standards have been developed in software engineering for product evaluation (ISO/IEC 14598 (1998)) and product quality (ISO/IEC 9126 series (2003a, 2003b, & 2004)), as well as information security management (ISO 27001 (2005)) and evaluation series (ISO 15408 (2008a, 2008b, & 2009)). The ITIL v. 3 describes best practices for IT service management, which can be extended to include service systems.

References
Works Cited
Adams, S., A. Cartlidge, A. Hanna, S. Rance, J. Sowerby, and J. Windebank. 2009. ITIL V3 Foundation Handbook. London, England, UK: The Stationary Office.
Andrikopoulos, V., A. Bucchiarone, E. Di Nitto, R. Kazhamiakin, S. Lane, V. Mazza, and I. Richardson. 2010. "Chapter 8: Service Engineering," in Service Research Challenges and Solutions for the Future Internet S-Cube - Towards Engineering, Managing and Adapting Service-Based Systems, edited by M. Papazoglou, K. Pohl, M. Parkin, and A. Metzger. Berlin and Heidelberg, Germany: Springer-Verlag. p. 271-337.
Carroll, N., E. Whelan, and I. Richardson. 2010. "Applying Social Network Analysis to Discover Service Innovation within Agile Service Networks." Service Science. 2 (4): 225-244.
Daskin, M.S. 2010. Service Science. New York, NY, USA: John Wiley & Sons.
Estefan, J. 2008. A Survey of Model-Based Systems Engineering (MBSE) Methodologies, rev B. Seattle, WA, USA: International Council on Systems Engineering. INCOSE-TD-2007-003-02.
Friedenthal, S. 1998. "Object Oriented System Engineering: Process Integration for 2000 and beyond." Presented at System Engineering & Software Symposium, Lockheed Martin Corporation, 1998, New Orleans, LA.
Hantry, F., M.P. Papazoglou, W. van den Heuvel, R. Haque, E. Whelan, N. Carroll, D. Karastoyanova, F. Leymann,
C. Nikolaou, W. Lamersdorf, and M. Hacid. 2010. "Business Process Management," in Service Research Challenges and Solutions for the Future Internet S-Cube - Towards Engineering, Managing and Adapting Service-Based Systems, edited by M. Papazoglou, K. Pohl, M. Parkin, and A. Metzger. Berlin and Heidelberg, Germany: Springer-Verlag. p. 27-54.
Hybertson, D.W. 2009. Model-Oriented Systems Engineering Science: A Unifying Framework for Traditional and Complex Systems. Boston, MA, USA: Auerbach Publications.
IEEE. 1998. IEEE 1220-1998, IEEE Standard for Application and Management of the Systems Engineering Process. Washington, DC, USA: Institute of Electrical and Electronics Engineers.
ISO/IEC. 1998. ISO/IEC 14598-5:1998, Information technology - Part 5: Process for evaluators. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
ISO/IEC. 2003a. ISO/IEC TR 9126-2:2003, Software engineering - Product quality - Part 2: External metrics. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
ISO/IEC. 2003b. ISO/IEC TR 9126-3:2003, Software engineering - Product quality - Part 3: Internal metrics. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
ISO/IEC. 2004. ISO/IEC TR 9126-4:2004, Software engineering - Product quality - Part 4: Quality in use metrics. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.


ISO/IEC. 2005. ISO/IEC 27001:2005, Information technology - Security techniques - Information security management systems - Requirements. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
ISO/IEC. 2008a. ISO/IEC 15408-2:2008, Information technology - Security techniques - Evaluation criteria for IT security - Part 2: Security functional components. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
ISO/IEC. 2008b. ISO/IEC 15408-3:2008, Information technology - Security techniques - Evaluation criteria for IT security - Part 3: Security assurance components. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
ISO/IEC. 2009. ISO/IEC 15408-1:2009, Information technology - Security techniques - Evaluation criteria for IT security - Part 1: Introduction and general model. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
ISO/IEC/IEEE. 2011. ISO/IEC/IEEE 42010:2011, Systems and software engineering - Architecture description. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commission.
Lefever, B. 2005. "SeSCE Methodology." Rome, Italy: SeCSE Service Centric Systems Engineering. SeCSE511680. Available: http://www.secse-project.eu/wp-content/uploads/2007/08/a5_d4-secse-methodology-v1_3.pdf.
Lin, F., and P. Hsieh. 2011. "A SAT View on New Service Development." Service Science. 3 (2): 141-157.
OGC (Office of Government Commerce). 2007. ITIL Lifecycle Publication Suite Books. London, England, UK: The Stationery Office.
OMG. 2010a. Unified Modeling Language(tm) (UML), version 2. Needham, MA, USA: Object Management Group. Available: http://www.omg.org/spec/UML/.
OMG. 2010b. OMG Systems Modeling Language (SysML), version 1.2. Needham, MA, USA: Object Management Group. Available: http://www.sysml.org/docs/specs/OMGSysML-v1.2-10-06-02.pdf.
Pezuela, C. 2005. "Collection of Existing Service Centric Prototypes." Report A5.D1. Brussels, Belgium: European Union, Information Society Technology. Accessed September 5, 2011. Available: http:/ / www. secse-project. eu/ wp-content/uploads/2007/08/a5d1-collection-of-existing-service-centric-prototypes.pdf.
Ward-Dutton, N. 2010. "BPM Technology: Vendor Capability Comparison." MWD Premium Advisory Report. Horsham, West Sussex, UK: Macehiter Ward-Dutton (MWD) Limited. MWD Advisors. Accessed September 5, 2011. Available: http://www.mwdadvisors.com/library/detail.php?id=380.

Primary References
Estefan, J. 2008. A Survey of Model-Based Systems Engineering (MBSE) Methodologies, rev B. Seattle, WA, USA: International Council on Systems Engineering. INCOSE-TD-2007-003-02.
Hybertson, D.W. 2009. Model-Oriented Systems Engineering Science: A Unifying Framework for Traditional and Complex Systems. Boston, MA, USA: Auerbach Publications.
Lefever, B. 2005. "SeSCE Methodology." Rome, Italy: SeCSE Service Centric Systems Engineering. SeCSE511680. Available: http://www.secse-project.eu/wp-content/uploads/2007/08/a5_d4-secse-methodology-v1_3.pdf.
OGC (Office of Government Commerce). 2007. ITIL Lifecycle Publication Suite Books. London, England, UK: The Stationery Office.


Additional References
None.




Knowledge Area: Enterprise Systems Engineering

Enterprise Systems Engineering

Contents of this Knowledge Area
 Enterprise Systems Engineering Background (James Martin, Dick Fairley, and Bud Lawson) (Alan Faisandier)
 The Enterprise as a System (James Martin, Bud Lawson, and Judith Dahmann)
 Related Business Activities (James Martin, Dick Fairley, and Bud Lawson)
 Enterprise Systems Engineering Key Concepts (James Martin, Bud Lawson, and Alan Faisandier)
 Enterprise Systems Engineering Process Activities (James Martin, Bud Lawson, and Alan Faisandier)
 Enterprise Capability Management (James Martin, Bud Lawson, and Alan Faisandier)
 Lead Authors:
 James Martin, Dick Fairley, and Bud Lawson
-
Enterprise systems engineering (ESE) is the application of systems engineering principles, concepts, and methods to the planning, design, improvement, and operation of an enterprise.

Topics
Each part of the SEBoK is divided into knowledge areas (KAs), which are groupings of information with a related theme. The KAs in turn are divided into topics. This KA contains the following topics:
 Enterprise Systems Engineering Background
 The Enterprise as a System
 Related Business Activities
 Enterprise Systems Engineering Key Concepts
 Enterprise Systems Engineering Process Activities
 Enterprise Capability Management

Introduction
This knowledge area provides an introduction to systems engineering (SE) at the enterprise level in contrast to "traditional" SE (TSE) (sometimes called "conventional" or "classical" SE) performed in a development project or to "product" engineering (often called product development in the SE literature).
The concept of enterprise was instrumental in the great expansion of world trade in the 17th century (see note 1) and again during the Industrial Revolution of the 18th and 19th centuries. The world may be at the cusp of another global revolution enabled by the information age and the technologies and cultures of the Internet (see note 2). The discipline of SE now has the unique opportunity of providing the tools and methods for the next round of enterprise transformations.
Note 1. "The Dutch East India Company... was a chartered company established in 1602, when the States-General of the Netherlands granted it a 21-year monopoly to carry out colonial activities in Asia. It was the first multinational corporation in the world and the first company to issue stock. It was also arguably the world's first mega-corporation, possessing quasi-governmental powers, including the ability to wage war,


negotiate treaties, coin money, and establish colonies." (emphasis added, National Library of the Netherlands 2010)
Note 2. This new revolution is being enabled by cheap and easily usable technology, global availability of information and knowledge, and increased mobility and adaptability of human capital. The enterprise level of analysis is only feasible now because organizations can work together to form enterprises in a much more fluid manner.
ESE is an emerging discipline that focuses on frameworks, tools, and problem-solving approaches for dealing with the inherent complexities of the enterprise. Furthermore, ESE addresses more than just solving problems; it also deals with the exploitation of opportunities for better ways to achieve the enterprise goals. A good overall description of ESE is provided by in the book by Rebovich and White (2011).

Key Terms
Enterprise
An enterprise consists of a purposeful combination (e.g., a network) of interdependent resources (e.g., people, processes, organizations, supporting technologies, and funding) that interact with
 each other to coordinate functions, share information, allocate funding, create workflows, and make decisions, etc.; and
 their environment(s) to achieve business and operational goals through a complex web of interactions distributed across geography and time (Rebovich and White 2011, 4-35).
The term enterprise has been defined as follows:
(1) One or more organizations sharing a definite mission, goals, and objectives to offer an output such as a product or service. (ISO 2000);
(2) An organization (or cross organizational entity) supporting a defined business scope and mission that includes interdependent resources (people, organizations and technologies) that must coordinate their functions and share information in support of a common mission (or set of related missions). (CIO Council 1999);
(3) The term enterprise can be defined in one of two ways. The first is when the entity being considered is tightly bounded and directed by a single executive function. The second is when organizational boundaries are less well defined and where there may be multiple owners in terms of direction of the resources being employed. The common factor is that both entities exist to achieve specified outcomes. (MOD 2004); and
(4) A complex, (adaptive) socio-technical system that comprises interdependent resources of people, processes, information, and technology that must interact with each other and their environment in support of a common mission. (Giachetti 2010)
An enterprise must do two things: (1) develop things within the enterprise to serve as either external offerings or as internal mechanisms to enable achievement of enterprise operations, and (2) transform the enterprise itself so that it can most effectively and efficiently perform its operations and survive in its competitive and constrained environment.


Enterprise vs Organization
It is worth noting that an enterprise is not equivalent to an "organization" according to the definition above. This is a frequent misuse of the term enterprise. The figure below shows that an enterprise includes not only the organizations that participate in it, but also people, knowledge, and other assets such as processes, principles, policies, practices, doctrine, theories, beliefs, facilities, land, intellectual property, and so on.
Some enterprises are organizations, but not all enterprises are organizations. Likewise, not all organizations are enterprises. Some enterprises have no readily identifiable "organizations" in them. Some enterprises are self-organizing (i.e., not organized by mandate) in that the sentient beings in the enterprise will find for themselves some way in which they can interact to produce greater results than can be done by the individuals alone. Self-organizing enterprises are often more flexible and agile than if they were organized from above (Dyer and Ericksen 2009; Stacey 2006).
One type of enterprise architecture that supports agility is a non-hierarchical organization without a single point of control. Individuals function autonomously, constantly interacting with each other to define the vision and aims, maintain a common understanding of requirements and monitor the work that needs to be done. Roles and responsibilities are not predetermined but rather emerge from individuals' self-organizing activities and are constantly in flux. Similarly, projects are generated everywhere in the enterprise, sometimes even from outside affiliates. Key decisions are made collaboratively, on the spot, and on the fly. Because of this, knowledge, power, and intelligence are spread through the enterprise, making it uniquely capable of quickly recovering and adapting to the loss of any key enterprise component. (http://en.wikipedia.org/wiki/Business_agility)
In spite of this lack of "organization" in some enterprises, SE can still contribute much in the engineering of the enterprise, as described in the articles below. However, SE must be prepared to apply some non-traditional approaches in doing so. Hence the need for embracing the new discipline called enterprise systems engineering (ESE).
Giachetti (2010) distinguishes between enterprise and organization by saying that an organization is a view of the enterprise. The organization view defines the structure and relationships of the organizational units, people, and other actors in an enterprise. Using this definition, we would say that all enterprises have some type of organization, whether formal, informal, hierarchical or self-organizing network.

Extended Enterprise
Sometimes it is prudent to consider a broader scope than merely the "boundaries" of the organizations involved in an enterprise. In some cases, it is necessary (and wise) to consider the "extended enterprise" in modeling, assessment, and decision making. This could include upstream suppliers, downstream consumers, and end user organizations, and perhaps even "sidestream" partners and key stakeholders. The extended enterprise can be defined as:
Wider organization representing all associated entities - customers, employees, suppliers, distributors, etc. - who directly or indirectly, formally or informally, collaborate in the design, development, production, and delivery of a product (or service) to the end user. (http:/ / www. businessdictionary. com)

Enterprise Systems Engineering
Enterprise systems engineering (ESE), for the purpose of this article, is defined as the application of SE principles, concepts, and methods to the planning, design, improvement, and operation of an enterprise (see note 3). To enable more efficient and effective enterprise transformation, the enterprise needs to be looked at "as a system," rather than merely as a collection of functions connected solely by information systems and shared facilities (Rouse 2009). While a systems perspective is required for dealing with the enterprise, this is rarely the task or responsibility of


people who call themselves systems engineers.
Note 3. This form of systems engineering (i.e., ESE) includes (1) those traditional principles, concepts, and methods that work well in an enterprise environment, plus (2) an evolving set of newer ideas, precepts, and initiatives derived from complexity theory and the behavior of complex systems (such as those observed in nature and human languages).

Creating Value
The primary purpose of an enterprise is to create value for society, other stakeholders, and for the organizations that participate in that enterprise. This is illustrated in Figure 1 that shows all the key elements that contribute to this value creation process.
There are three types of organizations of interest: businesses, projects, and teams (see note 4). A typical business participates in multiple enterprises through its portfolio of projects. Large SE projects can be enterprises in their own right, with participation by many different businesses, and may be organized as a number of sub-projects.
Note 4. The use of the word "business" is not intended to mean only for-profit commercial ventures. As used here, it also includes government agencies and not-for-profit organizations, as well as commercial ventures. Business is the activity of providing goods and services involving financial, commercial, and industrial aspects.


Resource Optimization
A key choice for businesses that conduct SE is to what extent, if at all, they seek to optimize their use of resources (people, knowledge, assets) across teams, projects, and business units. Optimization of resources is not the goal in itself, but rather a means to achieve the goal of maximizing value for the enterprise and its stakeholders. At one extreme, in a product-oriented organization, projects may be responsible for hiring, training, and firing their own staff, as well as managing all assets required for their delivery of products or services. (The term "product-oriented organization" is not meant in the sense of product-oriented SE, but rather in the sense of this being one of the basic constructs available when formulating organizational strategy.)


At the other extreme, in a functional organization, the projects delegate almost all their work to functional groups. In between these two extremes is a matrix organization that is used to give functional specialists a "home" between project assignments. A full discussion of organizational approaches and situations along with their applicability in enabling SE for the organization is provided in the article called Systems Engineering Organizational Strategy.
The optimization debate can be handled as described in the book called "Enterprise Architecture as Strategy" (Ross, Weill, and Robertson 2006). In other words, an enterprise can choose (or not) to unify its operations and can choose (or not) to unify its information base. There are different strategies the enterprise might adopt to achieve and sustain value creation (and how ESE helps an enterprise to choose). This is further addressed in the section on Enterprise Architecture Formulation & Assessment in the article called Enterprise Capability Management.

Enabling Systems Engineering in the Organization
SE skills, techniques, and resources are relevant to many enterprise functions, and a well-founded SE capability can make a substantial contribution at the enterprise level, as well as at the project level. The article called Systems Engineering Organizational Strategy discusses enabling SE in the organization, while the article called Enabling Businesses and Enterprises focuses on the cross-organizational functions at the business and enterprise levels. The competence of individuals is discussed in the article called Enabling Individuals.

Kinds of Knowledge Used by the Enterprise
Knowledge is a key resource for ESE. There are generally two kinds of knowledge: explicit and tacit. Explicit knowledge can be written down or incorporated in computer codes. Much of the relevant knowledge, however, is "tacit knowledge" that only exists within the heads of people and in the context of relationships that people form with each other (e.g., team, project, and business level knowledge). The ability of an organization to create value is critically dependent on the people it employs, on what they know, how they work together, and how well they are organized and motivated to contribute to the organization's purpose.

Projects, Programs & Businesses
The term "program" is used in various ways in different domains. In some domains a team can be called a program (e.g., a customer support team is their customer relationship "program"). In others, an entire business is called a program (e.g., a wireless communications business unit program), and in others the whole enterprise is called a program (e.g., the Joint Strike Fighter program and the Apollo Space program). And in many cases, the terms project and program are used interchangeably with no discernible distinction in their meaning or scope. Typically, but not always, there are program managers who have profit and loss (P&L) responsibility and are the ultimate program decision makers. A program manager may have a portfolio of items (services, products, facilities, intellectual property, etc.) that are usually provided, implemented, or acquired through projects.
The Office of Government Commerce provides a useful distinction between programs and projects:
The ultimate goal of a Programme is to realise outcomes and benefits of strategic relevance. To achieve this a programme is designed as a temporary flexible organisation structure created to coordinate, direct and oversee the implementation of a set of related projects and activities in order to deliver outcomes and benefits related to the organisation's strategic objectives...
A programme is likely to have a life that spans several years. A Project is usually of shorter duration (a few months perhaps) and will be focussed on the creation of a set of deliverables within agreed cost, time and quality parameters. (OGC 2010)


Practical Considerations
When it comes to performing SE at the enterprise level, there are several good practices to keep in mind (Rebovich and White 2011):
 Set enterprise fitness as the key measure of system success. Leverage game theory and ecology, along with the practices of satisfying and governing the commons.
 Deal with uncertainty and conflict in the enterprise through adaptation: variety, selection, exploration, and experimentation.
 Leverage the practice of layered architectures with loose couplers and the theory of order and chaos in networks.
Enterprise governance involves shaping the political, operational, economic, and technical (POET) landscape. One should not try to control the enterprise like one would in a TSE effort at the project level.

References
Works Cited
BusinessDictionary.com, "Extended Enterprise." Accessed September 12, 2012. Available: http:/ / www. businessdictionary.com/definition/extended-enterprise.html.
CIO Council. 1999. Federal Enterprise Architecture Framework (FEAF). Washington, DC, USA: Chief Information Officer (CIO) Council.
Dyer, L., and J. Ericksen. 2009. "Complexity-based Agile Enterprises: Putting Self-Organizing Emergence to Work," in The Sage Handbook of Human Resource Management, edited by A. Wilkinson et al. London, UK: Sage. p. 436-457.
Giachetti, R.E. 2010. Design of Enterprise Systems: Theory, Architecture, and Methods. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group.
ISO. 2000. ISO 15704:2000, Industrial Automation Systems -- Requirements for Enterprise-Reference Architectures and Methodologies. Geneva, Switzerland: International Organization for Standardization (ISO).
MOD. 2004. Ministry of Defence Architecture Framework (MODAF), version 2. London, UK: UK Ministry of Defence.
National Library of the the Netherlands. 2010. "Dossier VOC (1602-1799)." Accessed September 12, 2012. Available: http://www.kb.nl/dossiers/voc/voc.html (in Dutch).
OGC (Office of Government Commerce). 2010. Guidelines for Managing Programmes: Understanding programmes and programme management. London, UK: The Stationery Office.
Rebovich, G., and B.E. White (eds.). 2011. Enterprise Systems Engineering: Advances in the Theory and Practice. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group, Auerbach.
Ross, J.W., P. Weill, and D. Robertson. 2006. Enterprise Architecture As Strategy: Creating a Foundation for Business Execution. Boston, MA, USA: Harvard Business Review Press.
Rouse, W.B. 2009. "Engineering the Enterprise as a System," in Handbook of Systems Engineering and Management, 2nd ed., edited by A.P. Sage and W. B. Rouse. New York, NY, USA: Wiley and Sons, Inc.
Stacey, R. 2006. "The Science of Complexity: An Alternative Perspective for Strategic Change Processes," in
Complexity and Organization: Readings and Conversations, edited by R. MacIntosh et al. London, UK: Routledge.
p. 74-100.
Wikipedia contributors, "Business agility," Wikipedia, The Free Encyclopedia. Accessed November 28, 2012. Available: http://en.wikipedia.org/w/index.php?title=Business_agility&oldid=503858042.


Primary References
Bernus, P., L. Nemes, and G. Schmidt (eds.). 2003. Handbook on Enterprise Architecture. Berlin and Heidelberg, Germany: Springer-Verlag.
Rebovich, G., and B.E. White (eds.). 2011. Enterprise Systems Engineering: Advances in the Theory and Practice. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group, Auerbach.
Rouse, W.B. 2005. "Enterprise as Systems: Essential Challenges and Enterprise Transformation." Systems Engineering, the Journal of the International Council on Systems Engineering (INCOSE). 8 (2): 138-50.
Rouse, W.B. 2009. "Engineering the Enterprise as a System," in Handbook of Systems Engineering and Management, 2nd ed., edited by A.P. Sage and W.B. Rouse. New York, NY, USA: Wiley and Sons, Inc.
Valerdi, R. and D.J. Nightingale. 2011. "An Introduction to the Journal of Enterprise Transformation." Journal of Enterprise Transformation. 1 (1): 1-6.

Additional References
Drucker, P.F. 1994. "The theory of business." Harvard Business Review. 72 (5): 95-104.
Fox, M., J.F. Chionglo, and F.G. Fadel. 1993. "A common sense model of the enterprise." Presented at the 3rd Industrial Engineering Research Conference, 1993, Norcross, GA, USA.
Joannou, P. 2007. "Enterprise, systems, and software-the need for integration." Computer. 40 (5): 103-105.
Journal of Enterprise Architecture. Available: http://www.globalaea.org/?page=JEAOverview.
MITRE. 2012. "Enterprise Engineering," in Systems Engineering Guide, MITRE Corporation. Accessed 8 July 2012. Available: http://www.mitre.org/work/systems_engineering/guide/enterprise_engineering/.
Nightingale, D., and J. Srinivasan. 2011. Beyond the Lean Revolution: Achieving Successful and Sustainable Enterprise Transformation. New York, NY, USA: AMACOM Press.
Nightingale, D., and R. Valerdi (eds). Journal of Enterprise Transformation. London, UK: Taylor & Francis. Available: http://www.tandf.co.uk/journals/UJET.
Saenz, O.A. 2005. "Framework for Enterprise Systems Engineering," in FIU Electronic Theses and Dissertations. Miami, FL, USA: Florida International University. Accessed September 12, 2012. Available: http:/ / digitalcommons.fiu.edu/cgi/viewcontent.cgi?article=1055&context=etd.


Enterprise Systems Engineering Background

 Lead Authors:
 James Martin, Dick Fairley, and Bud Lawson
 Contributing Author:
 Alan Faisandier
-
This article provides a common context for the succeeding topics in the knowledge area.

Capabilities in the Enterprise
The enterprise acquires or develops systems or individual elements of a system. The enterprise can also create, supply, use, and operate systems or system elements. Since there could possibly be several organizations involved in this enterprise venture, each organization could be responsible for particular systems or perhaps for certain kinds of elements. Each organization brings their own organizational capability with them and the unique combination of these organizations leads to the overall operational capability of the whole enterprise. These concepts are illustrated below.

Organizational capabilities are addressed in the article on Systems Engineering Organizational Strategy, and individual competencies are addressed in the article on Enabling Individuals as they relate to the principles, theories, and practices of organizational behavior.

Organizational Capabilities and Competencies
The word "capability" is used in systems engineering (SE) in the sense of "the ability to do something useful under a particular set of conditions." This article discusses three different kinds of capabilities: organizational capability, system capability, and operational capability. It uses the word "competence" to refer to the ability of people relative to the SE task. Individual competence, (sometimes called "competency"), contributes to, but is not the sole determinant of, organizational capability. This competence is translated to organizational capabilities through the


work practices that are adopted by the organizations. New systems (with new or enhanced system capabilities) are developed to enhance enterprise operational capability in response to stakeholder's concerns about a problem situation.
Enterprise stakeholders are the ultimate arbiters of value for the system to be delivered. Organizational, system, and operational capabilities cannot be designed, improved, and implemented independently. The key to understanding the dependencies between capabilities is through architecture modeling and analysis as part of the activities described in the article called Enterprise Capability Management. "Capability engineering" is an emerging discipline that could enhance the effectiveness of enterprise systems engineering (ESE), which is further discussed in the article on Systems of Systems (SoS).

Organizational Design
The competencies of individuals are important to the overall organizational capability as discussed in the article on Enabling Individuals. The organizational capability is also a function of how the people, teams, projects, and businesses are organized. The organizational design should specify the roles, authorities, responsibilities, and accountabilities (RARA) of the organizational units to ensure the most efficient and effective operations. Effectiveness of enterprise operations is certainly driven by management principles, concepts, and approaches, but it is also largely driven by its leadership principles, concepts, and approaches. These factors are discussed in the article on Systems Engineering Organizational Strategy that discusses how to organize for effective performance of SE.
Organizational structure is tightly tied to creating value for the enterprise's various stakeholders. Since the enterprise is made up of various elements including people, processes, technologies, and assets, the organizational structure of the people and the allocation of responsibilities for executing portions of the value stream is a "design decision" for the enterprise and hence is a key element of properly performing ESE. Organizational design is increasingly influenced by the portfolio of products and services and the degree of coupling between them. This organizational design will be based on organizational design patterns and their tradeoffs, as discussed in the article on Systems Engineering Organizational Strategy. Browning (2009) discusses one approach for modeling and analysis of an organization.

Operational Capabilities & Operational Services
As you can see in this figure, operational capabilities provide operational services that are enabled by system capabilities. These system capabilities are inherent in the system that is conceived, developed, created and/or operated by an enterprise. ESE concentrates its efforts on maximizing operational value for various stakeholders, some of whom may be interested in the improvement of some problem situation.
ESE, however, addresses more than just solving problems; it also deals with the exploitation of opportunities for better ways to achieve the enterprise goals. This opportunity might involve lowering of operating costs, increasing market share, decreasing deployment risk, reducing time to market, and any number of other enterprise goals. The importance of addressing opportunity potentials should not be underestimated in the execution of ESE practices.
This article focuses on the operational capabilities of an enterprise and the contribution of these capabilities to operational value (as perceived by the stakeholders). Notice that the organization or enterprise can deal with either the system as a whole or with only one (or a few) of its elements. These elements are not necessarily hard items, like hardware and software, but can also include "soft" items, like people, processes, principles, policies, practices, organizations, doctrine, theories, beliefs, and so on.


Services vs. Products vs. Enterprises
A service system is a collection of items (or entities) that perform the operations, administration, management and provisioning (OAM&P) of resources that together provide the opportunities to co-create value by both the service provider and the service consumer.
A collection of services is not necessarily a service system. In fact, this collection of services is often merely a product system that is one of the resources being OAM&P'ed by the service system. A product system can be composed of hardware, software, personnel (see note 1), facilities, data, materials, techniques, and even services. Each of these product system elements can be "engineered."
Note 1. Even personnel are engineered in the sense that their roles and responsibilities are specified precisely and trade-offs are made about which functions are performed by these people versus by hardware or software. People are "produced" in the sense that untrained people are trained to perform their allocated system functions, unknowledgeable people are educated to find or create the information they need to do their assigned task, and uninformed people are taught how to get access to the data they need, and how to extract relevant information from that data.
It is important to understand the difference between the services "enabled" by a service system versus the services that are the elements of a service system entity. See the Service Systems Engineering article for more information about services and how they are engineered.
Likewise, a collection of services is not necessarily an enterprise system. An enterprise may be composed of service systems, along with product systems, as well as policies, procedures, properties, knowledge, financial capital, intellectual capital, and so on. An enterprise might even contain sub-enterprises. Enterprise SE must do the engineering not only across the enterprise itself, but may also get involved in the engineering of the service systems and products systems that the enterprise depends on in order to achieve its goals.

Enterprise Components
The above depictions of enterprise-related things do not show the components of an enterprise. The components of an enterprise when it is viewed as a "system" are different than the components of a product or service system (which is the focus of most literature on systems engineering). The figure below shows the typical kinds of components (shown here as "domains") in an enterprise (Troux 2010) that could be utilized in achieving the desired enterprise operational capability as shown in Figure 1. It is this operational capability that drives ultimate value for the enterprise's customers and other stakeholders. Further discussion on enterprise components is provided by Reese (2010) and Lawson (2010, chap. 8).




The application/software and infrastructure/hardware domains (shown above) are likely the most familiar to systems engineers. The application/software domain contains things like the deployed software itself plus applications, modules, servers, patches, functions, and messages. The infrastructure/hardware domain contains things like the hardware itself plus networks and different kinds of hardware like computing hardware, cabinets, and network devices. There might different subtypes of computing hardware like computers, servers, desktops, laptops, and mainframes.
This particular "semantic model" had its origins in the area of information technology (IT) management but has been successfully expanded beyond the IT domain (Martin 2003 and 2005). You can see from this elaboration of these domains that an enterprise architecture "schema" can be quite extensive in the kinds of things it can model. The less technical domains would be things like policy, market, strategy, transition, financial, knowledge and skill, and analysis. In a typical enterprise architecture schema like this there could be over a hundred types of modeling objects grouped into these domains.
Various tools used in modeling the enterprise are described at http://www.enterprise-architecture.info/EA_Tools. htm (IEAD 2011). The TOGAF metamodel (http:/ / pubs. opengroup. org/ architecture/ togaf9-doc/ arch/ chap34. html) used in The Open Group Architecture Framework (TOGAF) is another useful depiction of the various modeling entities involved in modeling the enterprise (TOGAF 2009).


Scope of Enterprise SE
Computer and communications technologies make it easier to integrate activities across the enterprise, but this does not necessarily make the enterprise more effective and efficient. To enable this to happen, one needs to look at the whole enterprise as a system, rather than as a collection of functions connected solely by information systems and shared facilities.

Essential Challenges
Enterprises face strategic challenges that are essential to address in order to ensure that the enterprise will succeed (Rouse 2009):
 Growth: Increasing impact, perhaps in saturated/declining "markets",
 Value: Enhancing relationships of processes to benefits and costs,
 Focus: Pursuing opportunities and avoiding diversions,
 Change: Competing creatively while maintaining continuity,
 Future: Investing in inherently unpredictable outcomes,
 Knowledge: Transforming information to insights to programs, and
 Time: Carefully allocating the organization's scarcest resource.
To address these challenges, one recognizes that the central source of value in the enterprise is in its people. "Understanding and supporting the interests of an enterprise's diverse stakeholders - and finding the 'sweet spot' among the many competing interests - is a central aspect of discerning the work of the enterprise as a system and creating mechanisms to enhance this work" (Rouse 2009).

Enterprise Transformation
Enterprises are constantly transforming, whether at the individual level (wherein individuals alter their work practices) or at the enterprise level (large-scale planned strategic changes) (Srinivasan 2010). These changes are a response on the part of the enterprise to evolving opportunities and emerging threats. It is not merely a matter of doing work better, but doing different work, which is often a more important result. Value is created through the execution of business processes. However, not all processes necessarily contribute to overall value (Rouse 2005, 138-150). It is important to focus on process and how they contribute to the overall value stream.
After gaining a good understanding of business processes, the next main concern is how best to deploy and manage the enterprise's human, financial, and physical assets. The key challenge in transforming an enterprise is, in the midst of all this change, continuing to satisfice key stakeholders (see note 2).
Note 2. "Satisfice" means to decide on and pursue a course of action satisfying the minimum requirements to achieve a goal. For the enterprise as a whole, it is often impossible to completely satisfy all stakeholders given their competing and conflicting concerns and interests. Therefore, the concept of "satisficing" is a very important element in the execution of ESE practices. It has less stringent criteria than the concept of "satisfaction," which is commonly used in product/service systems engineering.
Systems engineers have to respond to an increased recognition of the 'connectedness' of products and systems, brought about by a number of trends, for example: the capability of (mainly digital) technology, working across multiple systems, to transform businesses and operational systems; the need to create systems in families to increase product diversity and reuse technology, in order to reduce development and operating costs; and the need to build systems which can be brought together flexibly in operations, even if such co-operation was not foreseen at the time of development.
There has also been an increase in collaborative systems development activities, often spanning national boundaries. This has proceeded alongside a growth in the development of what might be called meta-systems, that is systems comprising parts which would previously have been considered as complex in their own right a generation ago, now


conceived of and developed as a whole, and thus requiring fresh approaches, of the adaption of old ones.
Tackling these issues requires an approach that transcends the technical and process domain. ESE needs to address integration at the organizational and value chain level.

Transformation Context
Enterprise transformation occurs in the external context of the economy and markets as shown in the figure below (Rouse 2009). The "market" for the enterprise can be thought of as the context in which the enterprise operates. Of course, in the public sector, the enterprise's "market" is commonly known as its "constituency."

The term "intraprise" is used here to denote the many systems internal to the enterprise. This includes "information systems such as... ERP [enterprise resource planning] systems, as well as social and cultural systems. More specifically, work assignments are pursued via work processes and yield work products, incurring costs" (Rouse 2009). The social and cultural aspects of an enterprise are addressed further in the article called Enabling Businesses and Enterprises.

Modeling the Enterprise
Models of the enterprise can serve as the basis for understanding the enterprise in its context of markets and economies. The figure below shows the various drivers (or inputs) of an enterprise and its potential outcomes (or outputs) (Rouse 2009). Enterprise architecture can be a key enabler for modeling and can serve as a basis for transformation (Vernadat 1996; Bernus, Laszlo, and Schmidt 2003; Nightingale and Rhodes 2004). Enterprise architecture can be used to provide a model to understand how the parts of the enterprise fit together (or do not) (Giachetti 2010) (See also Representing Systems with Models). For a good review of the subject see Lillehagen and Krogstie (2008).





In Pursuit of Value
Based on his theory of enterprise transformation, Rouse (2005, 279-295) has identified four alternative perspectives that tend to drive the need for transformation:
1. Value Opportunities: The lure of greater success via market and/or technology opportunities prompts transformation initiatives.
2. Value Threats: The danger of anticipated failure due to market and/or technology threats prompts transformation initiatives.
3. Value Competition: Other players' transformation initiatives prompt recognition that transformation is necessary
to continued success.
4. Value Crises: Steadily declining market performance, cash flow problems, etc., prompt recognition that transformation is necessary for the enterprise to survive.
Work processes can be enhanced, streamlined, eliminated, and invented to help in the pursuit of enhanced value. These process changes should be aligned with enterprise strategy to maximize value produced by the enterprise (Hammer and Champy 1993). As shown below, there are many entities involved in helping the enterprise create value for society, participating organizations, and other stakeholders.





References
Works Cited
Browning, T.R. 2009. "Using the Design Structure Matrix to Design Program Organizations," in Handbook of Systems Engineering and Management, 2nd ed., edited by A.P. Sage and W.B. Rouse. New York, NY: Wiley and Sons, Inc.
Giachetti, R.E. 2010. Design of Enterprise Systems: Theory, Architecture, and Methods. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group.
Hammer, M., and J. Champy. 1993. Reengineering the Corporation: A Manifesto for Business Revolution. New York, NY: Harper Business, HarperCollins Publishers.
IEAD. 2011. "Enterprise Architecture Tools." Institute for Enterprise Architecture Developments. Accessed September 12, 2012. Available: http://www.enterprise-architecture.info/EA_Tools.htm.
Lawson, H. 2010. A Journey Through the Systems Landscape. Kings College, UK: College Publications.
Lillehagen, F., and J. Krogstie. 2008. "Chapter 4: State of the Art of Enterprise Modelling," in Active Knowledge Management of Enterprises. New York, NY, USA: Springer.
Martin, J.N. 2003. "On the Use of Knowledge Modeling Tools and Techniques to Characterize the NOAA Observing System Architecture." Presented at 13th Annual International Council on Systems Engineering (INCOSE) International Symposium, 2003, Arlington, VA, USA.
Martin, J.N. 2005. "Using an Enterprise Architecture to Assess the Societal Benefits of Earth Science Research." Presented at 15th Annual International Council on Systems Engineering (INCOSE) International Symposium, 2005, Rochester, NY, USA.
Miller, J., and S. Page. 2007. Complex Adaptive Systems: An Introduction to Computational Models of Social Life. Princeton, NJ, USA: Princeton University Press.
Reese, R.J. 2010. Troux Enterprise Architecture Solutions. Birmingham, UK: Packt Publishing Ltd.


Rouse, W.B. 2005. "Enterprise as Systems: Essential Challenges and Enterprise Transformation." Systems Engineering, the Journal of the International Council on Systems Engineering (INCOSE). 8 (2): 138-150.
Rouse, W.B. 2009. "Engineering the Enterprise as a System," in Handbook of Systems Engineering and Management, 2nd ed., edited by A.P. Sage and W.B. Rouse. New York, NY: Wiley and Sons, Inc.
Srinivasan, J. 2010. "Towards a Theory Sensitive Approach to Planning Enterprise Transformation." Presented at 5th European Institute for Advanced Studies in Management (EIASM) Workshop on Organizational Change and Development, September 23-24, 2010, Vienna, Austria.
TOGAF 2009. "The Open Group Architecture Framework," version 9. The Open Architecture Group. Accessed September 2, 2011. Available: http://www.opengroup.org/togaf.
Troux. 2010. Metamodeling and modeling with Troux Semantics, version 9. Austin, TX, USA: Troux Technologies. White, B.E. 2009. "Complex Adaptive Systems Engineering (CASE)." Presented at IEEE Systems Conference, March 23-26, 2009, Vancouver, Canada.

Primary References
Giachetti, R.E. 2010. Design of Enterprise Systems: Theory, Architecture, and Methods. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group.
Rouse, W.B. 2009. "Engineering the Enterprise as a System," in Handbook of Systems Engineering and Management, 2nd ed., edited by A.P. Sage and W.B. Rouse. New York, NY: Wiley and Sons, Inc.
Srinivasan, J. 2010. "Towards a Theory Sensitive Approach to Planning Enterprise Transformation." Presented at 5th European Institute for Advanced Studies in Management (EIASM) Workshop on Organizational Change and Development, September 23-24, 2010, Vienna, Austria.
White, B.E. 2009. "Complex Adaptive Systems Engineering (CASE)." Presented at IEEE Systems Conference, March 23-26, 2009, Vancouver, Canada.

Additional References
McCarter, B.G., and B.E. White. 2009. "Emergence of SoS, sociocognitive aspects," in Systems of systems engineering: Principles and applications, edited by M. Jamshidi. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group. p. 71-105.
Rouse, W.B. 2008. "Health Care as a Complex Adaptive System: Implications for design and management." The Bridge, National Academy of Engineering. 38 (1): 17-25.
Sage, A.P. 2000. "Transdisciplinarity Perspectives in Systems Engineering and Management," in Transdiciplinarity: Recreating Integrated Knowledge, edited by M.A. Somerville and D. Rappaport. Oxford, UK: EOLSS Publishers. p. 158-169.
von Bertalanffy, L. 1968. General System Theory: Foundations, Development, Applications, revised ed. New York, NY, USA: Braziller.
Weinberg, G., and D. Weinberg. 1988. General Principles of Systems Design. New York, NY, USA: Dorset House Publishing Company. White, B.E. 2007. "On Interpreting Scale (or View) and Emergence in Complex Systems Engineering." Presented at 1st Annual IEEE Systems Conference, April 9-12, 2007, Honolulu, HI, USA.


The Enterprise as a System

 Lead Authors:
 James Martin, Bud Lawson, and Judith Dahmann
-
To enable more efficient and effective enterprise transformation, the enterprise needs to be looked at "as a system," rather than as a collection of functions connected solely by information systems and shared facilities (Rouse 2005 and 2009; Lawson 2010). What distinguishes the design of enterprise systems from product systems is the inclusion of people as a component of the system, not merely as a user/operator of the system.
The term 'enterprise system' has taken on a narrow meaning of only the information system an organization uses. Research and project experience has taught us that to design a good enterprise system, we need to adopt a much broader understanding of enterprise systems. The greater view of enterprise systems is inclusive of the processes the system supports, the people who work in the system, and the information [and knowledge] content of the system. (Giachetti 2010)
It is worth noting that the concept of "service" systems also includes people in the system. The thoughts above do not take this into account, primarily since their perspectives come mainly from a product system experience. The practice of service systems engineering is relatively new and is an emerging discipline. For more information on this, see the articles on Service Systems Engineering.

Creating Value
The primary purpose of an enterprise is to create value for society, other stakeholders, and for the organizations that participate in that enterprise. This is illustrated in Figure 1 that shows all the key elements that contribute to this value creation process. These elements in the enterprise can be treated as a "system" and the processes, methods, and tools ESE can be applied.
There are three types of organizations of interest: businesses, projects, and teams (see note 1). A typical business participates in multiple enterprises through its portfolio of projects. Large SE projects can be enterprises in their own right, with participation by many different businesses, and may be organized as a number of sub-projects.
Note 1. The use of the word "business" is not intended to mean only for-profit commercial ventures. As used here, it also includes government agencies and not-for-profit organizations, as well as commercial ventures. Business is the activity of providing goods and services involving financial, commercial, and industrial aspects.





Resource Optimization
A key choice for businesses that conduct SE is to what extent, if at all, they seek to optimize their use of resources (people, knowledge, assets) across teams, projects, and business units. Optimization of resources is not the goal in itself, but rather a means to achieve the goal of maximizing value for the enterprise and its stakeholders. At one extreme, in a product-oriented organization, projects may be responsible for hiring, training, and firing their own staff, as well as managing all assets required for their delivery of products or services. (The term "product-oriented organization" is not meant in the sense of product-oriented SE, but rather in the sense of this being one of the basic constructs available when formulating organizational strategy.)
At the other extreme, in a functional organization, the projects delegate almost all their work to functional groups. In between these two extremes is a matrix organization that is used to give functional specialists a "home" between project assignments. A full discussion of organizational approaches and situations along with their applicability in enabling SE for the organization is provided in the article called Systems Engineering Organizational Strategy.
The optimization debate can be handled as described in the book called "Enterprise Architecture as Strategy" (Ross, Weill, and Robertson 2006). In other words, an enterprise can choose (or not) to unify its operations and can choose (or not) to unify its information base. There are different strategies the enterprise might adopt to achieve and sustain value creation (and how ESE helps an enterprise to choose). This is further addressed in the section on Enterprise Architecture Formulation & Assessment in the article called Enterprise Capability Management.

Enabling Systems Engineering in the Organization
SE skills, techniques, and resources are relevant to many enterprise functions, and a well-founded SE capability can make a substantial contribution at the enterprise level, as well as at the project level. The article called Systems Engineering Organizational Strategy discusses enabling SE in the organization, while the article called Enabling Businesses and Enterprises focuses on the cross-organizational functions at the business and enterprise levels. The competence of individuals is discussed in the article called Enabling Individuals.


Kinds of Knowledge Used by the Enterprise
Knowledge is a key resource for ESE. There are generally two kinds of knowledge: explicit and tacit. Explicit knowledge can be written down or incorporated in computer codes. Much of the relevant knowledge, however, is "tacit knowledge" that only exists within the heads of people and in the context of relationships that people form with each other (e.g., team, project, and business level knowledge). The ability of an organization to create value is critically dependent on the people it employs, on what they know, how they work together, and how well they are organized and motivated to contribute to the organization's purpose.

Projects, Programs, and Businesses
The term "program" is used in various ways in different domains. In some domains a team can be called a program (e.g., a customer support team is their customer relationship "program"). In others, an entire business is called a program (e.g., a wireless communications business unit program), and in others the whole enterprise is called a program (e.g., the Joint Strike Fighter program and the Apollo Space program). And in many cases, the terms project and program are used interchangeably with no discernible distinction in their meaning or scope. Typically, but not always, there are program managers who have profit and loss (P&L) responsibility and are the ultimate program decision makers. A program manager may have a portfolio of items (services, products, facilities, intellectual property, etc.) that are usually provided, implemented, or acquired through projects.
The Office of Government Commerce provides a useful distinction between programs and projects:
The ultimate goal of a Programme is to realise outcomes and benefits of strategic relevance. To achieve this a programme is designed as a temporary flexible organisation structure created to coordinate, direct and oversee the implementation of a set of related projects and activities in order to deliver outcomes and benefits related to the organisation's strategic objectives...
A programme is likely to have a life that spans several years. A Project is usually of shorter duration (a few months perhaps) and will be focussed on the creation of a set of deliverables within agreed cost, time and quality parameters. (OGC 2010)

Enabling the Enterprise
ESE, by virtue of its inherent trans-disciplinarity (Sage 2000, 158-169) in dealing with problems that are large in scale and scope, can better enable the enterprise to become more effective and efficient. The complex nature of many enterprise problems and situations usually goes beyond the abilities of standard tools and techniques provided to business school graduates (See also Complexity). ESE can augment the standard business management methods using the tools and methods from the SE discipline to more robustly analyze and evaluate the enterprise as a holistic system. A more general viewpoint, or "view," for dealing with the enterprise consisting of scale, granularity, mindset, and time frame is provided by White (2007) and by McCarter and White (2009, 71-105).
ESE can provide the enablers to address the concerns of enterprise executives as shown in Table 1 (Rouse 2009). The methods for dealing with, and the special characteristics of, complex adaptive systems must be properly considered when adapting traditional systems engineering (TSE) practices for use at the enterprise level-many of which come out of the systems science and systems thinking domains (von Bertalanffy 1968; Weinberg and Weinberg 1988; Miller and Page 2007; Rouse 2008, 17-25). For an approach to complex adaptive systems (CAS) engineering, refer to White (2009, 1-16) and to McCarter and White (2009, 71-105).


Table 1. Executive Concerns and SE Enablers (Rouse 2009). Reprinted with permission of John Wiley & Sons Inc. All other rights are reserved by the copyright owner.
Executive Concerns	SE Enablers
    Identifying ends, means, and scope and candidate changes	System complexity analysis to compare "as is" and "to be" enterprises Evaluating changes in terms of process behaviors and performance		Organizational simulation of process flows and relationships Assessing economics in terms of investments, operating costs, and		Economic modeling in terms of cash flows, volatility, and options
returns

Defining the new enterprise in terms of processes and their	Enterprise architecting in terms of workflow, processes, and levels of
integration	maturity

Designing a strategy to change the culture for selected changes	Organizational and cultural change via leadership, vision, strategy, and
incentives

Developing transformation action plans in terms of what, when,	Implementation planning in terms of tasks, schedule, people, and
and who	information


Enterprise Engineering
Another distinction is that "enterprise design does not occur at a single point in time like the design of most systems. Instead, enterprises evolve over time and are constantly changing, or are constantly being designed" (Giachetti 2010) [emphasis in original]. Giachetti calls this new discipline "enterprise engineering." We consider the enterprise engineering set of practices to be equivalent to what we call enterprise systems engineering (ESE) in this article.
The body of knowledge for enterprise engineering is evolving under such titles as enterprise engineering, business engineering, and enterprise architecture . . . . Many systems and software engineering principles are applicable to enterprise engineering, but enterprise engineering's unique complexities require additional principles.... Enterprise engineering's intent is to deliver a targeted level of enterprise performance in terms of shareholder value or customer satisfaction    Enterprise
engineering methods include modeling; simulation; total quality management; change management; and bottleneck, cost, workflow, and value-added analysis. (Joannou 2007)

Supersystem Constructs
System of Systems (SoS)
The phrase "system of systems" (SoS) is commonly used, but there is no widespread agreement on its exact meaning, nor on how it can be distinguished from a conventional system. A system is generally understood to be a collection of elements that interact in such a manner that it exhibits behavior that the elements themselves cannot exhibit. Each element (or component) of the system can be regarded as a system in its own right. Therefore, the phrase "system of systems" can technically be used for any system and, as such, would be a superfluous term. However, the meaning of this phrase has been examined in detail by (Maier 1998, 267-284), and his definition has been adopted by some people (AFSAB 2005). Maier provides this definition:
A SoS is an assemblage of components which individually may be regarded as systems, and which possess two additional properties:
 Operational Independence of the Components: If the system-of-systems is disassembled into its component systems the component systems must be able to usefully operate independently. That is, the components fulfill customer-operator purposes on their own; and
 Managerial Independence of the Components: The component systems not only can operate independently, they do operate independently. The component systems are separately acquired and integrated but maintain a


continuing operational existence independent of the system-of-systems. (Maier 1998, 267-284)
Maier goes on further saying that "the commonly cited characteristics of systems-of-systems (complexity of the component systems and geographic distribution) are not the appropriate taxonomic classifiers" (Maier 1998, 267-284). Four kinds of SoS have been defined (Dahmann, Lane, and Rebovich 2008).
For further details on SoS, see the Systems Engineering Guide for SoS developed by the US Department of Defense (DoD) (DUS(AT) 2008). Also, see the Systems of Systems (SoS) knowledge area.

Federation of Systems (FoS)
Different from the SoS concept, but related to it in several ways, is the concept called "federation of systems" (FoS). This concept might apply when there is a very limited amount of centralized control and authority (Sage and Cuppan 2001, 325-345; Sage and Rouse 2009). Each system in an FoS is very strongly in control of its own destiny, but "chooses" to participate in the FoS for its own good and the good of the "country," so to speak. It is a coalition of the willing. An FoS is generally characterized by significant autonomy, heterogeneity, and geographic distribution or dispersion (Krygiel 1999). Krygiel defined a taxonomy of systems showing the relationships among conventional systems, SoSs, and FOSs.
This taxonomy has three dimensions: autonomy, heterogeneity, and dispersion. A FoS would have a larger value on each of these three dimensions than a non-federated SoS. An "Enterprise System," as described above, could be considered to be an FoS if it rates highly on these three dimensions. However, it is possible for an enterprise to have components that are not highly autonomous, that are relatively homogeneous, and are geographically close together. Therefore, it would be incorrect to say that an enterprise is necessarily the same as an FoS.
Dove points out that in order for a large enterprise to survive in the twenty-first century, it must be more agile and robust (Dove 1999 and 2001). Handy (1992, 59-67) describes a federalist approach called "New Federalism" which identifies the need for structuring of loosely coupled organizations to help them adapt to the rapid changes inherent in the Information Age. This leads to the need for virtual organizations where alliances can be quickly formed to handle the challenges of newly identified threats and a rapidly changing marketplace (Handy 1995, 2-8). Handy sets out to define a number of federalist political principles that could be applicable to an FoS. Handy's principles have been tailored to the domain of systems engineering (SE) and management by Sage and Cuppan (2001, 325-345):
 Subsidiarity,
 Interdependence,
 Uniform and standardized way of doing business,
 Separation of powers,
 Dual citizenship, and
 Scales of SE.

Scales of SE
According to Maier's definition, not every enterprise would be called a SoS since the systems within the enterprise do not usually meet the criteria of operational and managerial independence. In fact, one of the key purposes of an enterprise is to explicitly establish operational dependence between systems that the enterprise owns and/or operates in order to maximize the efficiency and effectiveness of the enterprise as a whole. Therefore, it is more proper to treat an enterprise system and an SoS as different types of things, with different properties and characteristics. This distinction is illustrated in the figure below, where three corresponding categories of SE are shown (DeRosa 2005; Swarz et al. 2006).
It is true that an enterprise can be treated as a system itself and is comprised of many systems within the enterprise, but this discussion will reserve the term SoS to those systems that meet the criteria of operational and managerial independence. This distinction was also used within the MITRE Corporation in their ESE Office (Rebovich and White 2011).





Relationships between Enterprise and SoS
An enterprise may require a particular operational capability that is brought into being by connecting together a chain of systems that together achieve that capability. Any one of these systems in the chain cannot by itself provide this capability. The desired capability is the emergent property of this chain of systems. This chain of systems is sometimes called an SoS. However, the enterprise that requires this capability rarely has direct control over all the systems necessary to provide this full capability. This situation is illustrated in the figure below (Martin 2010).

Enterprise E1 (in the example above) has full control over SoS2, but not full control over SoS1. TSE can be applied to the individual systems (S1, S2, ..., S53) shown within each enterprise, but needs to be augmented with additional activities to handle SoS and enterprise kinds of issues.


There is a general issue regarding dealing with enterprises in this situation: there are at least two enterprises related to any particular SoS. First, there is the enterprise of builders/developers comprising projects and programs, which have to be organized appropriately and adopt special types of architectural principles. Second, there is the enterprise of users (those who use the products and service provided by the first enterprise), which has to exercise its own sort of agility. How the first enterprise designs systems to allow the second to operate is the core issue.

References
Works Cited
AFSAB. 2005. Report on System-of-Systems Engineering for Air Force Capability Development. Washington, DC: US Air Force Scientific Advisory Board (AFSAB), US Air Force. SAB-TR-05-04.
Dahmann, J.S., J.A. Lane, and G. Rebovich. 2008. "Systems Engineering for Capabilities." CROSSTALK: The Journal of Defense Software Engineering. 21 (11): 4-9.
DeRosa, J.K. 2005. "Enterprise Systems Engineering." Presented at Air Force Association, Industry Day, Day 1, August 4, 2005, Danvers, MA, USA.
Dove, R. 2001. Response Ability: The Language, Structure, and Culture of the Agile Organization. New York, NY, USA: John Wiley & Sons.
Dove, R. 1999. "Knowledge Management, Response Ability, and the Agile Enterprise," in Paradigm Shift International [database online]. Accessed September 6, 2011. Available: http:/ / www. parshift. com/ docs/ KmRaAeX.htm.
DUS(AT). 2008. Systems Engineering Guide for Systems of Systems, version 1.0. Washington, DC, USA: Deputy Under Secretary of Defense for Acquisition and Technology (DUS(AT)) / US Department of Defense (DoD). Accessed September 6, 2011. Available: http://www.acq.osd.mil/se/docs/SE-Guide-for-SoS.pdf.
Giachetti, R.E. 2010. Design of Enterprise Systems: Theory, Architecture, and Methods. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group.
Handy, C. 1995. "Trust and the Virtual Organization." Harvard Business Review. 73 (3): 2-8.
Handy, C. 1992. "Balancing Corporate Power: A New Federalist Paper." Harvard Business Review. 70 (6): 59-67. Joannou, P. 2007. "Enterprise, Systems, and Software-The Need for Integration." Computer. 40 (5): 103-105.
Krygiel, A.J. 1999. Behind the Wizard's Curtain: An Integration Environment for a System of Systems. Arlington, VA, USA: C4ISR Cooperative Research Program (CCRP).
Lawson, H. 2010. A Journey Through the Systems Landscape. Kings College, UK: College Publications.
Maier, M.W. 1998. "Architecting Principles for Systems-of-Systems." Systems Engineering, the Journal of the International Council on Systems Engineering (INCOSE). 1 (4): 267-84.
Martin, J.N. 2010. "An Enterprise Systems Engineering Framework." Presented at 20th Anniversary International Council on Systems Engineering (INCOSE) International Symposium, July 12-15, 2010, Chicago, IL, USA.
McCarter, B.G., and B.E. White. 2009. "Emergence of SoS, sociocognitive aspects," in Systems of systems engineering: Principles and applications, edited by M. Jamshidi. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group. p. 71-105.
OGC (Office of Government Commerce). 2010. Guidelines for Managing Programmes: Understanding programmes and programme management. London, UK: The Stationery Office.
Ross, J.W., P. Weill, and D. Robertson. 2006. Enterprise Architecture As Strategy: Creating a Foundation for Business Execution. Boston, MA, USA: Harvard Business Review Press.


Rouse, W.B. 2009. "Engineering the Enterprise as a System," in Handbook of systems engineering and management,
2nd ed., edited by A.P. Sage and W.B. Rouse. New York, NY, USA: Wiley and Sons, Inc.
Rouse, W.B. 2008. "Health Care as a Complex Adaptive System: Implications for design and management." The Bridge, National Academy of Engineering. 38 (1): 17-25.
Rouse, W.B. 2005. "Enterprise as Systems: Essential Challenges and Enterprise Transformation." Systems Engineering. 8 (2): 138-50.
Sage, A.P. 2000. "Transdisciplinarity Perspectives in Systems Engineering and Management." in Transdiciplinarity: Recreating Integrated Knowledge, edited by M.A. Somerville and D. Rappaport. Oxford, UK: EOLSS Publishers. p. 158-169.
Sage, A., and C. Cuppan. 2001. "On the Systems Engineering and Management of Systems of Systems and Federations of Systems." Information-Knowledge-Systems Management Journal. 2 (4): 325-345.
Sage, A.P., and W.B. Rouse (eds). 2009. Handbook of System Engineering and Management, 2nd ed. New York, NY, USA: John Wiley & Sons.
Swarz, R.S., J.K. DeRosa, and G. Rebovich. 2006. "An Enterprise Systems Engineering Model." Proceedings of the INCOSE International Symposium, July 9-13, 2006, Orlando, FL, USA.
von Bertalanffy, L. 1968. General System Theory: Foundations, Development, Applications, revised ed. New York, NY, USA: Braziller.
Weinberg, G., and D. Weinberg. 1988. General Principles of Systems Design. New York, NY: Dorset House Publishing Company.
White, B.E. 2007. "On Interpreting Scale (or View) and Emergence in Complex Systems Engineering." Presented at 1st Annual IEEE Systems Conference, 9-12 April, 2007, Honolulu, HI, USA.

Primary References
Giachetti, R.E. 2010. Design of Enterprise Systems: Theory, Architecture, and Methods. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group.
Joannou, P. 2007. "Enterprise, Systems, and Software-The Need for Integration." Computer. 40 (5): 103-105. Rouse, W.B. 2009. "Engineering the Enterprise as a System," in Handbook of systems engineering and management, 2nd ed., edited by A.P. Sage and W.B. Rouse. New York, NY, USA: Wiley and Sons, Inc.
Rouse, W.B. 2005. "Enterprise as Systems: Essential Challenges and Enterprise Transformation." Systems Engineering. 8 (2): 138-50.

Additional References
Arnold, S., and H. Lawson. 2004. "Viewing Systems From a Business Management Perspective." Systems Engineering. 7 (3): 229.
Beimans, F.P.M., M.M. Lankhorst, W.B. Teeuw, and R.G. van de Wetering. 2001. "Dealing with the Complexity of Business Systems Architecting." Systems Engineering. 4 (2): 118-33.
Nightingale, D., and D. Rhodes. 2004. "Enterprise systems architecting: Emerging art and science within engineering systems." Presented at Engineering Systems Symposium, Massachusetts Institute of Technology (MIT), 29-31 March, 2004, Boston, MA, USA.
Rebovich, G. 2006. "Systems Thinking for the Enterprise: New & Emerging Perspectives." Presented at IEEE/SMC International Conference on System of Systems Engineering, April 2006, Los Angeles, CA, USA.
Rechtin, E. 1999. Systems Architecting of Organizations: Why Eagles can't Swim. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group.


Ring, J. 2004. "Intelligent Enterprises." INCOSE INSIGHT. 6 (2).
Ring, J. 2004. "Seeing an Enterprise as a System." INCOSE INSIGHT. 6(2).
Valerdi, R., D. Nightingale, and C. Blackburn. 2009. "Enterprises as Systems: Context, Boundaries, and Practical Implications." Information-Knowledge-Systems Management Journal. 7 (4): 377-399.

Related Business Activities

 Lead Authors:
 James Martin, Dick Fairley, and Bud Lawson
-
The following business management activities can be supported by enterprise systems engineering (ESE) activities:
 mission and strategic planning,
 business processes and information Management,
 performance management,
 portfolio management,
 resource allocation and budgeting, and
 program and project management.

Introduction
The figure below shows how these business activities relate to each other as well as the relative scope of ESE and product systems engineering (PSE) (Martin 2010 and 2011). PSE is mainly involved at the project level and collaborates with project management activities, and gets somewhat involved in program management and the resource allocation and budgeting activities. On the other hand, ESE is heavily involved in the higher level activities from the program management level and up. Both ESE and PSE have key roles to play in the enterprise.




Shown in this manner, these business activities can be considered to be separate processes with a clear precedence in terms of which process drives other processes. TSE uses "requirements" to specify the essential features and functions of a system. An enterprise, on the other hand, typically uses goals and objectives to specify the fundamental characteristics of desired enterprise operational capabilities. The enterprise objectives and strategies are used in portfolio management to discriminate between options and to select the appropriate balanced portfolio of systems and other enterprise resources.
The first three activities listed above are covered in Enabling Businesses and Enterprises. The other business management activities are described in more detail below in regards to how they relate to ESE.

Business Management Cycles
PDCA stands for "plan-do-check-act" and is a commonly used iterative management process as seen in the figure below. It is also known as the Deming circle or the Shewhart cycle after its two key proponents (Deming 1986; Shewhart 1939). ESE should use the PDCA cycle as one of its fundamental tenets. For example, after ESE develops the enterprise transformation plan, execution of the planned improvements are monitored (i.e., "checked" in the PDCA cycle) to ensure they achieve the targeted performance levels. If not, then action needs to be taken (i.e., "act" in the PDCA cycle) to correct the situation and re-planning may be required. ESE can also use the PDCA cycle in its support of the 'business as usual' efforts, such as the annual budgeting and business development planning activities.




It is also worth mentioning the utility of using Boyd's OODA loop (observe, orient, decide, and act) to augment PDCA. This could be accomplished by first using the OODA loop (http:/ / en. wikipedia. org/ wiki/ OODA_loop), which is continuous in situation awareness, and then followed by using the PDCA approach, which is discrete, having goals, resources, usually time limits, etc. (Lawson 2010).

Portfolio Management
Program and project managers direct their activities as they relate to the systems under their control. Enterprise management, on the other hand, is involved in directing the portfolio of items that are necessary to achieving the enterprise goals and objectives. This can be accomplished by using portfolio management:
Project Portfolio Management (PPM) is the centralized management of processes, methods, and technologies used by project managers and project management offices (PMOs) to analyze and collectively manage a group of current or proposed projects based on numerous key characteristics. The objectives of PPM are to determine the optimal resource mix for delivery and to schedule activities to best achieve an organization's operational and financial goals-while honoring constraints imposed by customers, strategic objectives, or external real-world factors. (http:/ / en. wikipedia. org/ wiki/ Project_portfolio_management)
The enterprise may not actually own these portfolio items. They could rent or lease these items, or they could have permission to use them through licensing or assignment. The enterprise may only need part of a system (e.g., one bank of switching circuits in a system) or may need an entire system of systems (SoS) (e.g., switching systems, distribution systems, billing systems, provisioning systems, etc.). Notice that the portfolio items are not just those items related to the systems that systems engineering (SE) deals with. These could also include platforms (like ships and oil drilling derricks), facilities (like warehouses and airports), land and rights of way (like railroad property easements and municipal covenants), and intellectual property (like patents and trademarks).
The investment community has been using portfolio management for a long time to manage a set of investments to maximize return for a given level of acceptable risk. These techniques have also been applied to a portfolio of "projects" within the enterprise (Kaplan 2009). However, it should be noted that an enterprise is not merely a portfolio of projects. The enterprise portfolio consists of whatever systems, organizations, facilities, intellectual property, and other resources that are needed to help the enterprise achieve its goals and objectives.
Portfolio management in the context of ESE is well addressed in the following article: http:/ / www. mitre. org/ work/ systems_engineering/ guide/ enterprise_engineering/ enterprise_planning_management/ portfolio_management.html (MITRE 2010).


Resource Allocation and Budgeting
The resource allocation and budgeting (RA&B) activity is driven by the portfolio management definition of the optimal set of portfolio elements. Capability gaps are mapped to the elements of the portfolio, and resources are assigned to programs (or other organizational elements) based on the criticality of these gaps. Resources come in the form of people and facilities, policies and practices, money and energy, and platforms and infrastructure. Allocation of resources could also involve the distribution or assignment of corporate assets, like communication bandwidth, manufacturing floor space, computing power, intellectual property licenses, and so on. Resource allocation and budgeting is typically done on an annual basis, but more agile enterprises will make this a more continuous process. Some of the resource allocation decisions deal with base operational organizations that are not project related.
It is sometimes the case that RA&B is part of portfolio management (PfM). But as can be seen in Figure 1, it is sometimes useful and practical to separate these two activities. PfM usually recommends changes to the enterprise portfolio, but RA&B takes these PfM considerations into mind along with inputs from the business process and information management and the performance management activities. Furthermore, PfM is usually an annual or biannual activity whereas RA&B is often done more frequently. RA&B may need to execute ad hoc when perturbations happen, such as funding cuts, schedule slips, performance targets missed, strategic goals changed, and so on.

Program and Project Management
Within the enterprise, TSE is typically applied inside a project to engineer a single system (or perhaps a small number of related systems). If there is a SoS or a large, complex individual system to be engineered, then this might be handled at the program level, but is sometimes handled at the project level, depending on the size and complexity of the system-of-interest (See also Complexity).
There are commonly three basic types of projects in an enterprise. A development project takes a conceptual notion of a system and turns this into a realizable design. A production project takes the realizable design for a system and turns this into physical copies (or instantiations). An operations "project" directly operates each system or supports the operation by others. (Base operations are sometimes called "line organizations" and are not typically called projects per se, but should nonetheless be considered as key elements to be considered when adjusting the enterprise portfolio.) The operations project can also be involved in maintaining the system or supporting maintenance by others. A program can have all three types of projects active simultaneously for the same system, as in this example:
 Project A is developing System X version 3.
 Project B is operating and maintaining System X version 2.
 Project C is maintaining System X version 1 in a warehouse as a backup in case of emergencies.
Project management uses TSE as a tool to ensure a well-structured project and to help identify and mitigate cost, schedule, and technical risks involved with system development and implementation. The project level is where the TSE process is most often employed (Martin 1997; ISO/IEC/IEEE 2015; Wasson 2006; INCOSE 2010; Blanchard and Fabrycky 2010).
The Office of Government Commerce provides a useful distinction between programs and projects:
The ultimate goal of a Programme is to realise outcomes and benefits of strategic relevance. To achieve this, a programme is designed as a temporary flexible organisation structure created to coordinate, direct and oversee the implementation of a set of related projects and activities in order to deliver outcomes and benefits related to the organisation's strategic objectives...
A programme is likely to have a life that spans several years. A Project is usually of shorter duration (a few months perhaps) and will be focussed on the creation of a set of deliverables within agreed cost, time and quality parameters. (OGC 2010)


Enterprise Governance
ESE is also concerned with the way in which organizations and embedded management and technical functions work together to achieve success at the enterprise level. Governance frameworks provide the essential additional structure and controls needed to both 'steer a steady ship' (during business as usual) and to 'plot a course to a new place' (during business transformation).
Such frameworks can be designed by recognizing that there are enduring management concerns that need to be addressed and by applying the principle of economy. For example, a particular concern for most organizations is linking the control of projects to business drivers and objectives. This leads to a requirement for a governance body to both approve the initiation of projects, and to regularly review their progress, continuing relevance, and if necessary, mutual coherence in the light of developments inside and outside the enterprise.
This might be achieved by delegating some or all of the roles; depending on circumstances, the enterprise might be driven towards top-down or a more collective, peer-to-peer approach-or even a combination of the two for different functions. Governance bodies and management roles can be engineered in this way against a common set of management concerns. Governance may also include the maintenance of common technical standards and their promulgation and use throughout relevant projects. See Bryant (2012) for more information on governance.

Multi-Level Enterprises
An enterprise does not always have full control over the ESE processes. In some cases, an enterprise may have no direct control over the resources necessary to make programs and projects successful. For example, the Internet Engineering Task Force (IETF) is responsible for the "smooth operation of the Internet," yet it controls none of the requisite resources.
The Internet Engineering Task Force (IETF) is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. ... The actual technical work of the IETF is done in its working groups, which are organized by topic into several areas (e.g., routing, transport, security, etc.). Much of the work is handled via mailing lists. The IETF holds meetings three times per year. (IETF 2010a)
The IETF has "influence" over these resources even though it does not have direct control: "The IETF is unusual in that it exists as a collection of happenings, but is not a corporation and has no board of directors, no members, and no dues" (IETF 2010b).
The ESE processes might be allocated between a "parent" enterprise and "children" enterprises, as shown in the figure below (Martin 2010). The parent enterprise, in this case, has no resources. These resources are owned by the subordinate child enterprises. Therefore, the parent enterprise does not implement the processes of resource allocation and budgeting, program management, and project management.
The parent enterprise may have an explicit contract with the subordinate enterprises, or, as in some cases, there is merely a "working relationship" without the benefit of legal obligations. The parent enterprise will expect performance feedback from the lower level to ensure that it can meet its own objectives. Where the feedback indicates a deviation from the plan, the objectives can be adjusted or the portfolio is modified to compensate.




Enterprises X, Y, and Z in the situation shown above will cooperate with each other to the extent that they honor the direction and guidance from the parent enterprise. These enterprises may not even be aware of each other, and, in this case, would be unwittingly cooperating with each other. The situation becomes more complex if each enterprise has its own set of strategic goals and objectives as shown in the figure below.




These separate, sub-enterprise objectives will sometimes conflict with the objectives of the parent enterprise. Furthermore, each subordinate enterprise has its own strategic objectives that might conflict with those of its siblings. The situation shown here is not uncommon, and illustrates an enterprise of enterprises, so to speak. This highlights the need for the application of SE at the enterprise level to handle the complex interactions and understand the overall behavior of the enterprise as a whole. TSE practices can be used, to a certain extent, but these need to be expanded to incorporate additional tools and techniques.

References
Works Cited
Bryant, P. 2012. "Modelling Governance within Business Architecture using Topic Mapping." Presented at 22nd Annual International Council on Systems Engineering (INCOSE) International Symposium, July 9-12, 2012, Rome, Italy.
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Englewood Cliffs, NJ, USA: Prentice-Hall.
Deming, W.E. 1986. Out of the Crisis. Cambridge, MA, USA: MIT Press, MIT Center for Advance Engineering Study.
IETF. 2010a. "Overview of the IETF," in Internet Engineering Task Force, Internet Society (ISOC) [database online]. Accessed September 6, 2011. Available: http://www.ietf.org/overview.html.
IETF.  2010b.  "The  Tao  of  IETF:  A  Novice's  Guide  to  the  Internet  Engineering  Task  Force (draft-hoffman-tao4677bix-10)," in Internet Engineering Task Force, Internet Society (ISOC) [database online].


Accessed September 6, 2011. Available: http://www.ietf.org/tao.html#intro.
INCOSE. 2012. Systems Engineering Handbook, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE). INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions. ISO/IEC/IEEE 15288:2015.
Kaplan, J. 2009. Strategic IT portfolio management: Governing enterprise transformation. Waltham, Massachusetts, USA: Pittiglio, Rabin, Todd & McGrath, Inc. (PRTM).
Lawson, H. 2010. A Journey Through the Systems Landscape. Kings College, UK: College Publications.
Martin, J.N. 2011. "Transforming the Enterprise Using a Systems Approach." Presented at 21st Anniversary International Council on Systems Engineering (INCOSE) International Symposium, June 20-23, 2011, Denver, CO, USA.
Martin, J.N. 2010. "An Enterprise Systems Engineering Framework." Presented at 20th Anniversary International Council on Systems Engineering (INCOSE) International Symposium, July 12-15, 2010, Chicago, IL, USA.
Martin, J.N. 1997. Systems Engineering Guidebook: A Process for Developing Systems and Products, 1st ed. Boca Raton, FL, USA: CRC Press.
MITRE. 2012. "Enterprise Engineering," in Systems Engineering Guide. Bedford, MA, USA: MITRE Corporation. Accessed	July	8,	2012.	Available:	http:/ / www. mitre. org/ work/ systems_engineering/ guide/ enterprise_engineering/.
OGC (Office of Government Commerce). 2010. Guidelines for Managing Programmes: Understanding programmes and programme management. London, UK: The Stationery Office.
Shewhart, W.A. 1939. Statistical Method from the Viewpoint of Quality Control. New York, NY, USA: Dover Publications.
Wasson, C.S. 2006. System Analysis, Design and Development. Hoboken, NJ, USA: John Wiley and Sons Ltd.

Primary References
Martin, J.N. 2011. "Transforming the Enterprise Using a Systems Approach." Presented at 21st Anniversary International Council on Systems Engineering (INCOSE) International Symposium, June 20-23, 2011, Denver, CO, USA.
Martin, J.N. 2010. "An Enterprise Systems Engineering Framework." Presented at 20th Anniversary International Council on Systems Engineering (INCOSE) International Symposium, July 12-15, 2010, Chicago, IL, USA.

Additional References
Arnold, S., and H. Lawson. 2004. "Viewing Systems from a Business Management Perspective." Systems Engineering. 7 (3): 229.
Beimans, F.P.M., M.M. Lankhorst, W.B. Teeuw, and R.G. van de Wetering. 2001. "Dealing with the Complexity of Business Systems Architecting." Systems Engineering. 4 (2): 118-133.
Drucker, P.F. 1994. "The Theory of Business." Harvard Business Review. 72 (5): 95-104.
Haeckel, S.H. 2003. "Leading on demand businesses-Executives as architects." IBM Systems Journal. 42 (3): 405-13.
Kaplan, R., and D. Norton. 1996. The balanced scorecard: Translating strategy into action. Cambridge, MA, USA: Harvard Business School Press.


Lissack, M.R. 2000. "Complexity Metaphors and the Management of a Knowledge Based Enterprise: An Exploration of Discovery." PhD Dissertation in Business Administration. Henley-on-Thames, UK: Henley Management College, University of Reading.
Rechtin, E. 1999. Systems Architecting of Organizations: Why Eagles Can't Swim. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group.

Enterprise Systems Engineering Key Concepts

 Lead Authors:
 James Martin, Bud Lawson, and Alan Faisandier
-
The purpose of traditional systems engineering (TSE) is to bring together a diversity of discipline experts to address a wide range of problems inherent in the development of a large, complex "single" system (Blanchard and Fabrycky 2010; Hall 1989; Sage and Rouse 2009). Enterprise systems engineering (ESE) expands beyond this traditional basis to "consider the full range of SE services increasingly needed in a modern organization where information-intensive systems are becoming central elements of the organization's business strategy" (Carlock and Fenton 2001, 242-261). The traditional role of systems engineering (SE) is heavily involved in system acquisition and implementation, especially in the context of government acquisition of very large, complex military and civil systems (e.g., F22 fighter jet and air traffic control systems).
ESE encompasses this traditional role in system acquisition, but also incorporates enterprise strategic planning and enterprise investment analysis (along with others as described below). These two additional roles for SE at the enterprise level are "shared with the organization's senior line management, and tend to be more entrepreneurial, business-driven, and economic in nature in comparison to the more technical nature of classical systems engineering" (Carlock and Fenton 2001, 242-261).

Closing the Gap
ESE practices have undergone significant development recently.
Today the watchword is enterprise systems engineering, reflecting a growing recognition that an 'enterprise' may comprise many organizations from different parts of government, from the private and public sectors, and, in some cases, from other nations. (MITRE 2004)
Rebovich (2006) says there are "new and emerging modes of thought that are increasingly being recognized as essential to successful systems engineering in enterprises." For example, in addition to the TSE process areas, MITRE has included the following process areas in their ESE process (DeRosa 2005) to close the gap between ESE and PSE:
 strategic technical planning,
 enterprise architecture,
 capabilities-based planning analysis,
 technology planning, and
 enterprise analysis and assessment.
These ESE processes are shown in the context of the entire enterprise in the figure below (DeRosa 2006). The ESE processes are shown in the middle with business processes on the left and TSE processes on the right. These business processes are described in the article called Related Business Activities. The TSE processes are well documented in many sources, especially in the ISO/IEC/IEEE 15288 standard (2015).




SE is viewed by many organizations and depicted in many process definitions as bounded by the beginning and end of a system development project. In MITRE, this restricted definition was referred to as TSE. Many have taken a wider view seeking to apply SE to the "whole system" and "whole life cycle." For example, Hitchins (1993) sets out a holistic, whole-life, wider system view of SE centered on operational purpose. Elliott and Deasley (2007) discuss the differences between development phase SE and in-service SE.
In contrast to TSE, the ESE discipline is more like a "regimen" (Kuras and White 2005) that is responsible for identifying "outcome spaces," shaping the development environment, coupling development to operations, and rewarding results rather than perceived promises (DeRosa 2005). ESE must continually characterize the operational environmental and the results of enterprise or SoS interventions to stimulate further actions within and among various systems in the enterprise portfolio. Outcome spaces are characterized by a set of desired capabilities that help meet enterprise objectives, as opposed to definitive "user requirements" based on near-term needs. Enterprise capabilities must be robust enough to handle unknown threats and situations in the future. A detailed description of previous MITRE views on ESE can be found in a work by Rebovich and White (2011).

Role of Requirements in ESE
TSE typically translates user needs into system requirements that drive the design of the system elements. The system requirements must be "frozen" long enough for the system components to be designed, developed, tested, built, and delivered to the end users (which can sometimes take years, and in the case of very large, complicated systems like spacecraft and fighter jets, more than a decade).
ESE, on the other hand, must account for the fact that the enterprise must be driven not by requirements (that rarely can even be defined, let alone made stable), but instead by continually changing organizational visions, goals, governance priorities, evolving technologies, and user expectations. An enterprise consists of people, processes, and technology where the people act as "agents" of the enterprise:
Ackoff has characterized an enterprise as a 'purposeful system' composed of agents who choose both their goals and the means for accomplishing those goals. The variety of people, organizations, and their strategies is what creates the inherent complexity and non-determinism in an enterprise. ESE must account for the concerns, interests and objectives of these agents. (Swarz, DeRosa, and Rebovich 2006) (See also Complexity)


Whereas TSE focuses on output-based methodologies (e.g., functional analysis and object-oriented analysis), ESE is obligated to emphasize outcomes (e.g., business analysis and mission needs analysis), especially those related to the enterprise goals and key mission needs.

Enterprise Entities and Relationships
An enterprise "system" has different entities and relationships than you might find in a product/service system (see note 1). These can be usefully grouped into two categories: asset items and conceptual items. An example of an asset is hardware and software. Examples of conceptual items are things like analysis, financial elements, markets, policies, process, and strategy.
Note 1. An "enterprise system" should not be confused with the enterprise "perceived as a system." An enterprise system is a product (or service) system used across the enterprise, such as payroll, financial accounting, or enterprise resource planning applications, and consolidated data center, data warehouse, and other such facilities and equipment used across one or more organizations.
Products and services are sometimes treated as "assets" as shown in the figure below (Troux 2010). This categorization of enterprise items comes from the semantic model (i.e., metamodel) used in the Troux Architect modeling tool for characterization and analysis of an enterprise architecture. Other enterprise entities of interest are things like information, knowledge, skills, finances, policies, process, strategy, markets, and resources, but these are categorized as "concept" items (in this particular schema). Further details on how to use this metamodel's entities and relationships are provided by Reese (2010).

Table 1. Asset Domain and Concept Domain Categories for Enterprise Entities. (Troux 2010) Reprinted with permission of Copyright (c) 2010 Troux Technologies. All other rights are reserved by the copyright owner.
Asset Domains	Concept Domains

Application and Software Domain Data Domain Document Domain	Analysis Domain Financial Domain General Domain Information Infrastructure and Hardware Domain IT Product Domain IT Service	Domain IT Architecture Domain Knowledge and Skill Domain Market Domain Location Domain Organization Domain Product and Service	Domain Policy Domain Process Domain Resource Domain Strategy Domain Services Portfolio Management Domain	Domain Timeline Domain Transition Domain

The application/software and infrastructure/hardware domains are likely the most familiar to systems engineers (as illustrated in the figure below). The application/software domain contains things like the deployed software itself, plus applications, modules, servers, patches, functions, and messages. The infrastructure/hardware domain contains things like the hardware itself, plus networks and different kinds of hardware like computing hardware, cabinets, and network devices. There might be different subtypes of computing hardware like computers, servers, desktops, laptops, and mainframes. You can see from this elaboration of these domains that an enterprise architecture "schema" can be quite extensive in the kinds of things it can model.




The less technical domains would be things like policy, market, strategy, transition, financial, knowledge and skill, and analysis. In a typical enterprise architecture schema like this, there could be over a hundred types of modeling objects grouped into these domains. The examples give above are from the Troux Semantics metamodel used in the Troux Architect modeling tool for enterprise architecture activities. Other enterprise modeling tools have similar metamodels (sometimes called "schemas"). See Reese (2010) for more details on how to use the metamodel shown in the figure above.

Enterprise Architecture Frameworks & Methodologies
Enterprise architecture frameworks are collections of standardized viewpoints, views, and models that can be used when developing architectural descriptions of the enterprise. These architecture descriptions can be informal, based on simple graphics and tables, or formal, based on more rigorous modeling tools and methods. ISO/IEC 42010 (2011) specifies how to create architecture descriptions.
These frameworks relate to descriptive models of an enterprise, with conventions agreed in particular communities. There are various frameworks and methodologies available that assist in the development of an enterprise architecture.
Urbaczewski and Mrdalj (2006) provide an overview and comparison of five prominent architectural frameworks, including:
 the Zachman Framework for Enterprise Architecture (Zachman 1992),
 the Department of Defense Architecture Framework (DoDAF) (DoD 2010),
 the Federal Enterprise Architecture Framework (FEAF) (FEA 2001),
 the Treasury Enterprise Architecture Framework (TEAF) (US Treasury 2000),
 and The Open Group Architectural Framework (TOGAF) (TOGAF 2009).


References
Works Cited
Blanchard, B.S., and W.J. Fabrycky. 2011. Systems Engineering and Analysis, 5th ed. Englewood Cliffs, NJ, USA: Prentice-Hall.
Carlock, P., and R. Fenton. 2001. "System of Systems (SoS) Enterprise Systems Engineering for Information-Intensive Organizations." Systems Engineering. 4 (4): 242-261.
CIO Council. 1999. Federal Enterprise Architecture Framework (FEAF), version 1.1. Washington, DC, USA: Federal Chief Information Officers Council.
DeRosa, J.K. 2005. "Enterprise Systems Engineering." Presented at Air Force Association, Industry Day, Day 1, August 4, 2005, Danvers, MA, USA.
DoD. 2010. DoD Architecture Framework (DoDAF), version 2.0. Washington, DC: U.S. Department of Defense (DoD).
Elliott, C., and P. Deasley. 2007. Creating Systems that Work--Principles of Engineering Systems for the 21st Century. London, England, UK: Royal Academy of Engineering.
FEA. 2001. "Federal Enterprise Architecture - Practical Guide, version 1.0, February 2001." Available: https:/ / secure.cio.noaa.gov/hpcc/docita/files/a_practical_guide_to_federal_enterprise_architecture.pdf.
Friedman, G., and A.P. Sage. 2004. "Case Studies of Systems Engineering and Management in Systems Acquisition." Systems Engineering. 7 (1): 84-96.
Hall, A.D. 1989. Metasystems Methodology: A New Synthesis and Unification, 1st ed. Oxford, UK: Pergamon Press. Hitchins, D. 1993. Putting Systems to Work. New York, NY, USA: John Wiley & Sons.
ISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes.Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
Kuras, M.L., and B.E. White. 2005. "Engineering Enterprises Using Complex-Systems Engineering." Annotated presentation at 15th Annual International Council on Systems Engineering (INCOSE) International Symposium, July 10-15, 2005, Rochester, NY, USA.
MITRE. 2004. MITRE 2004 Annual Report". McLean, VA, USA: MITRE Corporation.
Rebovich, G. 2006. "Systems Thinking for the Enterprise: New & Emerging Perspectives." Presented at IEEE/SMC International Conference on System of Systems Engineering, April 2006, Los Angeles, CA, USA.
Rebovich, G., and B.E. White (eds.). 2011. Enterprise Systems Engineering: Advances in the Theory and Practice. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group.
Reese, R.J. 2010. Troux Enterprise Architecture Solutions. Birmingham, UK: Packt Publishing Ltd.
Sage, A.P., and W.B. Rouse (eds). 2009. Handbook of System Engineering and Management, 2nd ed. New York, NY, USA: John Wiley & Sons.
Swarz, R.S., J.K. DeRosa, and G. Rebovich. 2006. "An Enterprise Systems Engineering Model." Proceedings of the 16th Annual International Council on Systems Engineering (INCOSE) International Symposium, July 9-13, 2006, Orlando, FL, USA.
TOGAF. 2009. "The Open Group Architecture Framework," version 9. Accessed September 7, 2011. Available: http://www.opengroup.org/togaf/.
Troux. 2010. Metamodeling and modeling with Troux Semantics, version 9. Austin, TX, USA: Troux Technologies.
Urbaczewski, L., and S. Mrdalj. 2006. "A Comparison of Enterprise Architecture Frameworks." Issues in Information Systems. 7 (2): 18-26.


US Treasury. 2000. Treasury Enterprise Architecture Framework, version 1. Washington, DC, USA: US Department of the Treasury Chief Information Officer Council.
Zachman, J.A. 1992. "Extending and Formalizing the Framework for Information Systems Architecture." IBM Systems Journal. 31 (3): 590-616.
Zachman, J.A. 1987. "A Framework for Information Systems Architectures." IBM Systems Journal. 26 (3): 276-92.

Primary References
Kuras, M.L., and B.E. White. 2005. "Engineering Enterprises Using Complex-Systems Engineering." Annotated presentation at 15th Annual International Council on Systems Engineering (INCOSE) International Symposium, July 10-15, 2005, Rochester, NY, USA.
Rebovich, G., and B.E. White (eds.). 2011. Enterprise Systems Engineering: Advances in the Theory and Practice. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group.
Swarz, R.S., J.K. DeRosa, and G. Rebovich. 2006. "An Enterprise Systems Engineering Model." Proceedings of the 16th Annual International Council on Systems Engineering (INCOSE) International Symposium, July 9-13, 2006, Orlando, FL, USA.

Additional References
Journal of Enterprise Architecture. Available: http://www.globalaea.org/?page=JEAOverview.
Minoli, D. 2008. Enterprise Architecture A to Z: Frameworks, Business Process Modeling, SOA, and Infrastructure Technology. Boca Raton, FL, USA: CRC Press, Taylor and Francis Group, An Auerbach Book.
TRAK. 2011. "TRAK Enterprise Architecture Framework." Accessed September 7, 2011. Available: http:/ / trak. sourceforge.net/index.html.
Vernadat, F.B. 1996. Enterprise Modelling and Integration - Principles and Applications. London, UK: Chapman and Hall.


Enterprise Systems Engineering Process Activities

 Lead Authors:
 James Martin, Bud Lawson, and Alan Faisandier
-
The application of the key concepts of Enterprise Systems Engineering requires processes. These processes span and can transform the enterprise.

Systems Engineering Role in Transforming the Enterprise
Enabling Systematic Enterprise Change
The systems engineering (SE) process as applied to the enterprise as a whole could be used as the "means for producing change in the enterprise ... [where the] ... Seven Levels of change in an organization [are defined] as effectiveness, efficiency, improving, cutting, copying, differentiating and achieving the impossible" (McCaughin and DeRosa 2006). The essential nature of enterprise systems engineering (ESE) is that it "determines the balance between complexity and order and in turn the balance between effectiveness and efficiency. When viewed as the fundamental mechanism for change, it goes beyond efficiency and drives adaptation of the enterprise" (McCaughin and DeRosa 2006). McCaughin and DeRosa (2006) provide a reasonably good definition for an enterprise that captures this notion of balance:
Enterprise: People, processes and technology interacting with other people, processes and technology, serving some combination of their own objectives, those of their individual organizations and those of the enterprise as a whole.

Balancing Effectiveness versus Efficiency
Ackoff tells us that:
Data, information, knowledge and understanding enable us to increase efficiency, not effectiveness. The value of the objective pursued is not relevant in determining efficiency, but it is relevant in determining effectiveness. Effectiveness is evaluated efficiency. It is efficiency multiplied by value. Intelligence is the ability to increase efficiency; wisdom is the ability to increase effectiveness.
The difference between efficiency and effectiveness is reflected in the difference between development and growth. Growth does not require an increase in value; development does. Therefore, development requires an increase in wisdom as well as understanding, knowledge and information. ((Ackoff 1989, 3-9), emphasis added)
ESE has a key role to play in establishing the right balance between effectiveness and efficiency in enterprise operations and management. Value stream analysis is one technique, among others, that can help ESE determine where inefficiencies exist or ineffective results are being achieved.

Value Stream Analysis
Value stream analysis is one way of treating the enterprise as a system. It provides insights regarding where in the sequence of enterprise activities value is added as it moves towards the final delivery to customer or user (Rother and Shook 1999). It relates each step to the costs entailed in that step in terms of resource consumption (i.e., money, time, energy, and materials). In addition to direct costs, there may also be indirect costs due to overhead factors or infrastructure elements. This activity commonly involves drawing a flowchart of the value stream for the enterprise


as illustrated in the figure below.

Analysis of this value stream diagram can highlight unnecessary space, excessive distance traveled, processing inefficiencies, and so on. Value stream mapping is associated with so-called "lean enterprise" initiatives. At Toyota, where the technique originated, it is known as "material and information mapping" (Rother 2009). Various value stream mapping tools are available (Hines and Rich 1997).

Enterprise Management Process Areas
Martin (2010) has determined that the following four processes are needed in ESE beyond the traditional SE processes in support of enterprise management activities:
1. Strategic technical planning,
2. Capability-based planning analysis,
3. Technology and standards planning, and
4. Enterprise evaluation and assessment.
The interactions between these four processes are illustrated below, along with their interactions with other processes that deal with architecture, requirements, risk, and opportunity.





Strategic Technical Planning
The purpose of strategic technical planning (STP) is to establish the overall technical strategy for the enterprise. It creates the balance between the adoption of standards (see also Systems Engineering Standards) and the use of new technologies, along with consideration of the people aspects driven by the relevant trans-disciplinary technical principles and practices from psychology, sociology, organizational change management, etc.
This process uses the roadmaps developed during technology and standards planning (TSP). It then maps these technologies and standards against the capabilities roadmap to determine potential alignment and synergy. Furthermore, lack of alignment and synergy is identified as a risk to avoid or an opportunity to pursue in the technical strategy. The technical strategy is defined in terms of implementation guidance for the programs and projects.
One reason that STP and TSP are separate processes is that they are often done by different groups in the enterprise and they involve different skill sets. TSP is often done by the technology and science groups. TSP is done closer to (if not in) the chief architect and budget planning groups. Sometimes the great technology proposed by TSP just doesn't line up with the capabilities needed in the requisite time frame. STP does this balancing between technology push and capability pull.


Capability-Based Planning Analysis
The purpose of Capability-based Planning Analysis is to translate the enterprise vision and goals into a set of current and future capabilities that helps achieve those goals. Current missions are analyzed to determine their suitability in supporting the enterprise goals. Potential future missions are examined to determine how they can help achieve the vision. Current and projected capabilities are assessed to identify capability gaps that prevent the vision and technical strategy from being achieved. These capability gaps are then used to assess program, project, and system opportunities that should be pursued by the enterprise. This is defined in terms of success criteria of what the enterprise is desired to achieve.
There are different types of capabilities, as shown in the figure below. It is common practice to describe capabilities in the form of capability hierarchies and capability roadmaps. Technology roadmaps (discussed below under Technology Planning) are usually related to the system capabilities while business capability roadmaps (BCRMs) are related to the operational capabilities of the enterprise as a whole (ref: Business-Capability Mapping: Staying Ahead of the Joneses, http:/ / msdn. microsoft. com/ en-us/ library/ bb402954. aspx). The BCRM development is usually done as part of enterprise strategic planning, which is one level higher than, and a key driver for, the strategic technical planning activity described above.
In some domains there may be competency roadmaps dealing with the organizational capabilities, with perhaps the desired competency levels of individuals mapped out in terms of the jobs or roles used in the enterprise or perhaps in terms of the knowledge and skills required for certain activities. (For more information on systems engineering competency, see the Enabling Individuals article.)


Technology and Standards Planning
The purpose of Technology Planning is to characterize technology trends in the commercial marketplace and the research community. This activity covers not just trend identification and analysis, but also technology development and transition of technology into programs and projects. It identifies current, and predicts future, technology readiness levels for the key technologies of interest. Using this information, it defines technology roadmaps. This activity helps establish the technical strategy and implementation guidance in the strategic technical plan. The business capabilities roadmap (BCRM) from the strategic planning activity is used to identify which technologies can contribute to achieved targeted levels of performance improvements.


The purpose of Standards Planning is to assess technical standards to determine how they inhibit or enhance the incorporation of new technologies into systems development projects. The future of key standards is forecast to determine where they are headed and the alignment of these new standards with the life cycles for the systems in the enterprise's current and projected future portfolios. The needs for new or updated standards are defined and resources are identified that can address these needs. Standardization activities that can support development of new or updated standards are identified (See also Systems Engineering Standards).

Enterprise Evaluation and Assessment
The purpose of enterprise evaluation and assessment (EE&A) is to determine if the enterprise is heading in the right direction. It does this by measuring progress towards realizing the enterprise vision. This process helps to "shape the environment" and to select among the program, project, and system opportunities. This is the primary means by which the technical dimensions of the enterprise are integrated into the business decisions.
This process establishes a measurement program as the means for collecting data for use in the evaluation and assessment of the enterprise. These measures help determine whether the strategy and its implementation are working as intended. Measures are projected into the future as the basis for determining discrepancies between what is observed and what had been predicted to occur. This process helps to identify risks and opportunities, diagnose problems, and prescribe appropriate actions. Sensitivity analysis is performed to determine the degree of robustness and agility of the enterprise.
Roberts states that EE&A must go beyond traditional system evaluation and assessment practices (Roberts 2006). He says that this process area:
must de-emphasize the utility of comparing detailed metrics against specific individual requirement values, whether the metrics are derived from measurement, simulation or estimation... [it] must instead look for break points where capabilities are either significantly enhanced or totally disabled.
Key characteristics of this activity are the following:
 Multi-scale analysis,
 Early and continuous operational involvement,
 Lightweight command and control (C2) capability representations,
 Developmental versions available for assessment,
 Minimal infrastructure,
 Flexible modeling and simulation (M&S), operator-in-the-loop (OITL), and hardware-in-the-loop (HWIL) capabilities, and
 In-line, continuous performance monitoring and selective forensics. (Roberts 2006)
Enterprise architecture (EA) can be used as a primary tool in support of evaluation and assessment. EA can be used to provide a model to understand how the parts of the enterprise fit together (or do not) (Giachetti 2010). The structure and contents of the EA should be driven by the key business decisions (or, as shown in the six-step process presented by Martin (2005), the architecture should be driven by the "business questions" to be addressed by the architecture).
The evaluation and assessment success measures can be put into the EA models and views directly and mapped to the elements that are being measured. An example of this can be seen in the US National Oceanographic and Atmospheric Agency (NOAA) EA shown by Martin (2003a and 2003b). The measures are shown, in this example, as success factors, key performance indicators, and information needs in the business strategy layer of the architecture.
EA can be viewed as either the set of artifacts developed as "views" of the enterprise, or as a set of activities that create, use, and maintain these artifacts. The literature uses these terms in both senses and it is not always clear in each case which sense is intended.


Enterprise Portfolio Considerations
Opportunity Assessment and Management
The management activities dealing with opportunities (as opposed to just risk) are included in ESE. According to White (2006), the "greatest enterprise risk may be in not pursuing enterprise opportunities." Hillson believes there is:
a systemic weakness in risk management as undertaken on most projects. The standard risk process is limited to dealing only with uncertainties that might have negative impact (threats). This means that risk management as currently practiced is failing to address around half of the potential uncertainties-the ones with positive impact (opportunities). (Hillson 2004)
White claims that "in systems engineering at an enterprise scale the focus should be on opportunity, and that enterprise risk should be viewed more as something that threatens the pursuit of enterprise opportunities" (White 2006). The figure below (Rebovich and White 2011, chapter 5) shows the relative importance of opportunity and risk at the different scales of an individual system, a system of systems (SoS), and an enterprise. The implication is that, at the enterprise level, there should be more focus on opportunity management than on risk management.


Enterprise Architecture and Requirements
EA goes above and beyond the technical components of product systems to include additional items such as strategic goals and objectives, operators and users, organizations and other stakeholders, funding sources and methods, policies and practices, processes and procedures, facilities and platforms, infrastructure, and real estate. EA can be used to provide a model to understand how the parts of the enterprise fit together (or don't) (Giachetti 2010). The EA is not strictly the province of the chief information officer (CIO), and is not only concerned with information technology. Likewise, enterprise requirements need to focus on the cross-cutting measures necessary to ensure overall enterprise success. Some of these enterprise requirements will apply to product systems, but they may also apply to business processes, inter-organizational commitments, hiring practices, investment directions, and so on (Bernus, Nemes, and Schmidt 2003).


Architecture descriptions following the guidelines of an architecture framework have been used to standardize the views and models used in architecting efforts (Zachman 1987 and 1992; Spewak 1992). Architecture descriptions have also been developed using a business-question based approach (Martin 2003b; Martin 2006). The standard on Architecture Description Practices (ISO/IEC 42010) (ISO/IEC 2011) has expanded its scope to include requirements on architecture frameworks.
Government agencies have been increasingly turning to SE to solve some of their agency-level (i.e., enterprise) problems. This has sometimes led to the use of an architecture-based investment process, especially for information technology procurements. This approach imposes a requirement for linking business strategies to the development of EAs. The Federal Enterprise Architecture Framework (FEAF) (CIO Council 1999) and the DoD Architecture Framework (DoDAF) (DoD 2010) were developed to support such an architecture-based investment process. There have been several other architecture frameworks also developed for this purpose (ISO 2000; ISO/IEC 1998; NATO 2004; TOGAF 2009; MOD 2010; TRAK 2010).

ESE Process Elements
As a result of the synthesis outlined above, the ESE process elements to be used at the enterprise scale are as follows:
1. Strategic Technical Planning,
2. Capability-Based Planning Analysis,
3. Technology and Standards Planning,
4. Enterprise Evaluation and Assessment,
5. Opportunity and Risk Assessment and Management,
6. Enterprise Architecture and Conceptual Design,
7. Enterprise Requirements Definition and Management,
8. Program and Project Detailed Design and Implementation,
9. Program Integration and Interfaces,
10. Program Validation and Verification,
11. Portfolio and Program Deployment and Post Deployment, and
12. Portfolio and Program Life Cycle Support.
The first seven of these elements were described in some detail above. The others are more self-evident and are not discussed in this article.

References
Works Cited
Ackoff, R.L. 1989. "From Data to Wisdom." Journal of Applied Systems Analysis. 16 (1): 3-9.
Bernus, P., L. Nemes, and G. Schmidt (eds.). 2003. Handbook on Enterprise Architecture. Berlin and Heidelberg, Germany: Springer-Verlag.
CIO Council. 1999. Federal Enterprise Architecture Framework (FEAF), Version 1.1. Washington, DC, USA: Federal Chief Information Officers Council.
DoD. 2010. DoD architecture framework (DoDAF), version 2.0. Washington, DC: US Department of Defense (DoD).
Giachetti, R.E. 2010. Design of Enterprise Systems: Theory, Architecture, and Methods. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group.
Hillson, D. 2004. Effective Opportunity Management for Projects: Exploiting Positive Risk. Petersfield, Hampshire, UK; New York, NY, USA: Rick Doctor & Partners; Marcel Dekker, Inc.


Hines, P., and N. Rich. 1997. "The Seven Value Stream Mapping Tools." International Journal of Operations & Production Management. 1 (17): 46-64.
ISO. 2000. ISO 15704:2000, Industrial Automation Systems - Requirements for Enterprise-Reference Architectures and Methodologies. Geneva, Switzerland: International Organization for Standardization (ISO).
ISO/IEC/IEEE. 2011. Systems and software engineering - Architecture description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.
ISO/IEC. 1998. ISO/IEC 10746:1998, Information Technology - Open Distributed Processing - Reference Model: Architecture. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC).
Martin, J.N. 2010. "An Enterprise Systems Engineering Framework." Presented at 20th Anniversary International Council on Systems Engineering (INCOSE) International Symposium, July 12-15, 2010, Chicago, IL, USA.
Martin, J.N. 2006. "An Enterprise Architecture Process Incorporating Knowledge Modeling Methods." PhD dissertation. Fairfax, VA, USA: George Mason University.
Martin, J.N. 2005. "Using an Enterprise Architecture to Assess the Societal Benefits of Earth Science Research." Presented at 15th Annual International Council on Systems Engineering (INCOSE) International Symposium, 2005, Rochester, NY, USA.
Martin, J.N. 2003a. "An Integrated Tool Suite for the NOAA Observing System Architecture." Presented at 13th Annual International Council on Systems Engineering (INCOSE) International Symposium, 2003, Arlington, VA, USA.