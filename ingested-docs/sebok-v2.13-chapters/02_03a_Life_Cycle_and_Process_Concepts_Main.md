In a top-down approach, concept definition activities are focused primarily on understanding the problem, the operational needs/requirements within the problem space, and the conditions that constrain the solution and bound the solution space. The concept definition activities determine the mission context, mission analysis, and the needs to be fulfilled in that context by a new or modified system (i.e. the SoI), and address stakeholder needs and requirements.
The system definition activities consider functional, behavioral, temporal, and physical aspects of one or more solutions based on the results of concept definition. System analysis considers the advantages and disadvantages of the proposed system solutions both in terms of how they satisfy the needs established in concept definition, as well as the relative cost, time scales and other development issues. This may require further refinement of the concept definition to ensure all legacy relationships and stakeholders relevant to a particular solution architecture have been considered in the stakeholder requirements.
The outcomes of this iteration between Concept Definition and System Definition define a required system solution and its associated problem context, which are used for System Realization, System Deployment and Use, and Product and Service Life Management of one or more solution implementations. In this approach, problem


understanding and solution selection activities are completed in the front-end portion of system development and design and then maintained and refined as necessary throughout the life cycle of any resulting solution systems. Top-down activities can be sequential, iterative, recursive or evolutionary depending upon the life cycle model.

Bottom-Up Approach: Evolution of the Solution
In some situations, the concept definition activities determine the need to evolve existing capabilities or add new capabilities to an existing system. During the concept definition, the alternatives to address the needs are evaluated. Engineers are then led to reconsider the system definition in order to modify or adapt some structural, functional, behavioral, or temporal properties during the product or service life cycle for a changing context of use or for the purpose of improving existing solutions.
Reverse engineering is often necessary to enable system engineers to (re)characterize the properties of the system-of-interest (SoI) or its elements. This is an important step to ensure that system engineers understand the SoI before beginning modification. For more information on system definition, see the System Definition article.
A bottom-up approach is necessary for analysis purposes, or for (re)using existing elements in the design architecture. Changes in the context of use or a need for improvement can prompt this. In contrast, a top-down approach is generally used to define an initial design solution corresponding to a problem or a set of needs.

Solution Synthesis
In most real problems, a combination of bottom-up and top-down approaches provides the right mixture of innovative solution thinking driven by need, and constrained and pragmatic thinking driven by what already exists. This is often referred to as a "middle-out" approach.
As well as being the most pragmatic approach, synthesis has the potential to keep the life cycle focused on whole system issues, while allowing the exploration of the focused levels of detail needed to describe realizable solutions; see Synthesising System Solutions for more information.

References
Works Cited
Faisandier, A. 2012. Systems Architecture and Design. Belberaud, France: Sinergy'Com.
Lawson, H. 2010. A Journey Through the Systems Landscape. London, UK: College Publications.

Primary References
INCOSE. 2015. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
4.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-118-99940-0.

Additional References
None.

Part 3b: Process Concepts

Knowledge Area: Process Concepts
Process Concepts

Contents of this Knowledge Area
 Process Description (David Endler) (Mike Yokell)
 Process Concurrency, Iteration, and Recursion (David Endler) (Mike Yokell)
 Lead Author:
 David Endler
 Contributing Authors:
 Mike Yokell and Garry Roedler
-
Systems engineering relies on a well-defined set of processes that guide the development of complex systems along the whole life cycle. These processes form the backbone of systematic engineering practice, differentiating it from ad-hoc approaches. ISO/IEC/IEEE 24774 standardizes process descriptions to ensure clarity, consistency, and comparability. However, they are not meant to be executed in a serial, sequential fashion. Concurrency, iteration, and recursion ensure dynamic, non-linear system life cycle management.

Articles
This Knowledge Area contains the following articles:
 Process Description
 Process Concurrency, Iteration, and Recursion

References
Works Cited
None.

Primary References
None.

Additional References
None.


Process Description

 Lead Author:
 David Endler
 Contributing Author:
 Mike Yokell
-
A life cycle model provides a framework of processes and activities guiding a system's life cycle. ISO/IEC/IEEE 24774 standardizes process descriptions to ensure clarity, consistency, and comparability. Each process includes a name, purpose, and outcomes, with optional activities, tasks, inputs, and outputs. Consistent descriptions enhance understanding, compliance, and improvement, supporting systematic, transparent, and adaptable system engineering practices.

Fundamental Concepts
Article Life Cycle Models describes that a life cycle model is a framework of processes and activities concerned with the life cycle. Processes and activities that are integrated into the framework of a life cycle model are often referred to as life cycle processes.
The purpose of ISO/IEC/IEEE 24774, Specification for process description, (available for free at: https://www.iso. org/standard/78981.html) is to "encourage uniformity in the description of processes". This international standard specifies the way process descriptions should be established and builds on the lessons learned from other international, national, and industry standards that describe processes and process models.
Defining processes in a consistent manner ensures that they are understandable, comparable, and manageable. Consistency provides a common language for describing how work is done, which reduces ambiguity and simplifies collaboration. It enables alignment with standards, regulations, and good practices, ensuring that processes are not only efficient but also compliant. When processes follow a consistent structure, it becomes easier to document, analyze, and improve them systematically. This also supports training and knowledge transfer, as users can quickly grasp and apply established methods.
Processes can be specified using the following elements (ISO/IEC/IEEE 24774):
Table 1. Process Elements. (SEBoK Original)

Required Element Optional Elements For Any Other Element

Process Name	Inputs	Notes

Purpose	Activities	Controls

Outcomes	Tasks	Constraints Outputs
According to ISO/IEC/IEEE 24774, at a minimum, process descriptions include the elements Name, Purpose, and Outcomes. Additional details, such as inputs, outputs, activities, or tasks, can be added if needed but are not mandatory. The core elements capture the goals and objectives of the process, focusing on the intended results without requiring a detailed structural breakdown. By defining processes in terms of Name, Purpose, and Outcomes, organizations establish a clear and consistent foundation. This approach ensures that processes can be easily understood, implemented, and assessed, while still allowing for further elaboration if deeper analysis or refinement becomes necessary.


Elements of Process Description
Process Name (Required)
The name of a process should be a concise noun phrase that clearly identifies its main focus and distinguishes it from other processes. Verbs should be avoided because they can lead to situations where the process name resembles activities or purposes.

Process Purpose (Required)
The purpose of a process should express one or more high-level goals that define why the process is performed. It helps clarify the scope and boundaries, especially when processes appear to overlap. Ideally, the purpose is stated in a single, concise sentence, beginning with "The purpose of the xxx process is...". It should not summarize activities or outcomes, and the use of "and" should be avoided to prevent listing unrelated goals. Additional context or explanations can be provided separately in notes or supporting text.

Process Outcomes (Required)
Process outcomes represent measurable and observable results or change of state achieved by executing a process. Unlike outputs, they are not defined as documents, records, or information items, but rather as tangible technical or business achievements. Each outcome should be written as a single, present-tense declarative sentence, expressing a clear, positive objective such as delivering a service, achieving a change of state, maintaining a desired condition, or meeting defined requirements. To ensure clarity, outcomes should avoid conjunctions like "and" or "and/or", separate statements should be used instead. Typically, a process should have three to seven concise outcomes, each directly supporting its stated purpose. Outcomes are distinct from benefits, which describe broader organizational gains and can be recorded separately as informative notes.

Process Activities (Optional)
According to ISO/IEC/IEEE 24774, activities are defined as "set of cohesive tasks of a process". Process activities describe the broad actions undertaken to execute a process. They group related tasks (see below) to improve understanding and communication and can, if cohesive and well-defined, be treated as lower-level processes with their own purposes and outcomes. All activities together must achieve the process outcomes and purpose. Activities should be strongly related internally (across its tasks) but loosely connected to other activities. They are not sequential steps but ongoing responsibilities, avoiding imposed timing or order unless explicitly required.

Process Tasks (Optional)
According to ISO/IEC/IEEE 24774, a task is defined as a "required, recommended, or permissible action, intended to contribute to the achievement of one or more outcomes of a process".
Process tasks specify concrete requirements, recommendations, or permissible actions that guide the execution of a process. They are written to support the achievement of process outcomes but do not need to fully cover the scope of an activity. Instead, tasks can be seen as discrete points within the broader space of processes and activities. Additional tasks can be included to clarify conformance requirements or to support higher capability levels. Timing or sequencing should not be assumed unless explicitly stated, ensuring flexibility across different life cycle models.


Process Inputs (Optional)
Process inputs are items that get transformed into outputs through the execution of the process, excluding the human or automated resources that perform the work. Inputs can originate from other processes, organizational resources, suppliers, or external sources. While specifying inputs is optional, it becomes essential in closed-loop life cycles.

Process Outputs (Optional)
Process outputs can be specified in descriptions but are optional if outcomes can be demonstrated. Some outputs are essential deliverables, while others serve only for validation or audit. They are generally categorized as artefacts (e.g., prototypes, models, components, or services) or information items with defined characteristics. Artifacts further include four generic work product types: services, software, hardware, and processed materials.

Process Notes (For Any Other Element)
Process notes contain further information on the what, how and why. In many cases, they explain the interrelationship with other processes and also main contain brief examples.

Process Controls and Constraints
Process controls and process constraints guide or restrict how a process is performed, and to some extent when. Controls can originate from laws, regulations, organizational policies, voluntary standards, or agreements with suppliers and customers. Constraints often stem from external environmental or business conditions. They can be documented in a dedicated section of the process description or included as notes alongside other process elements.

Elaboration
In INCOSE SEHv5 section 2.3 a common structure has been applied to describe the system life cycle processes. To maintain alignment with ISO/IEC/IEEE 15288, the purpose statements from the standard are reproduced verbatim for each process described in INCOSE SEHv5. Similarly, the titles of process activities follow the standard, describing what should be done rather than how to perform the tasks. Additional elements are included in some cases to summarize industry best practices and recent developments in systems engineering processes. Process elaborations provide further details specific to each life cycle process.
Each system life cycle process is also represented by an input-process-output (IPO) diagram, showing typical inputs, activities, and typical outputs. While the outcomes are included in ISO/IEC/IEEE 15288, they are not included in INCOSE SEHv5. Instead, INCOSE SEHv5 contains typical inputs and outputs for each process.
They can take any form (e.g., database, document, model, etc), and combinations of inputs and outputs in one artifact are also possible. The names of the inputs and outputs can vary depending on domain, company, or project.
In INCOSE SEHv5, controls and enablers are typically excluded from input-process-output (IPO) diagrams, in figure 1 they are noted, showing how inputs are transformed into outputs under process controls.
These diagrams illustrate one possible way to perform the process, not a mandatory approach. Outputs often represent results captured as documents, artifacts, or models, rather than being produced solely because they are listed.


References
Works Cited
INCOSE. 2023. "Chapter 2" in Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, 5th Edition. Ed(s): D. Walden, T.M. Shortell, G.J. Roedler, B.A. Delicado, O. Mornas, Y. Yew-Seng, D. Endler. San Diego, CA: International Council on Systems Engineering (INCOSE). Available at https:/ / www. incose.org/publications/se-handbook-v5.
ISO/IEC/IEEE. 2023. Systems and software engineering - System life cycle processes. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023.
ISO/IEC/IEEE. 2021. Systems and software engineering - Life cycle management - Specification for process description. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24774:2021.

Primary References
None

Additional References
None

Process Concurrency, Iteration, and Recursion

 Lead Author:
 David Endler
 Contributing Author:
 Mike Yokell
-
Concurrency, iteration, and recursion ensure dynamic, non-linear system life cycle management. Concurrency allows parallel processes; iteration enables refinement through feedback and evolving requirements; recursion applies processes across system levels for consistency. Together, they promote continuous learning, adaptability, and informed decision-making throughout system definition and realization.

Fundamental Concepts
The concepts of concurrency, iteration, and recursion is also discussed in ISO/IEC/IEEE 15288 and article Applying the Systems Approach. While the article in SEBoK Part 2 explains the application of concurrency , iteration, and recursion in the development of complex systems, this article deals with the application of these concepts to life cycle processes.
The system life cycle processes are sometimes mistakenly perceived as linear and sequential, applied at a single system hierarchy level. In reality, effective system life cycle management relies on exchanging information and insights across processes to ensure a system definition that meets stakeholder needs efficiently and effectively. To do this, it is often necessary to account for learning and feedback that is obtained as processes are applied during the system definition. Applying concurrency, iteration, and recursion supports continuous communication, ongoing learning, and informed decision-making as the technical solution evolves.


Concurrency
Concurrency involves performing two or more processes in parallel. Many processes can proceed simultaneously when they do not strongly depend on each other's outputs. For instance, risk management and measurement processes are typically continuous and concurrent.

Iteration
Iteration refers to repeated application and interaction between processes for a variety of reasons, including to accommodate stakeholder decisions, to incorporate learning and feedback, and evolving understanding, architectural constraints, and trade-offs for affordability, feasibility, resilience, and adaptability. Iteration frequently occurs between processes such as system requirements definition and system architecture definition. Evolving requirements can drive architectural changes, which in turn can prompt updates to requirements, design, or trade-offs.

Recursion
Recursion is the repeated application of life cycle processes throughout the system structure. Technical Management and Technical Processes are applied recursively for many reasons, including defining the system at continually lower levels until decisions on make, buy, or reuse are made. Outputs from one element level serve as inputs for another, whether in system definition or system realization, ensuring consistency and integrity.

References
Works Cited
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, 5th Edition. Ed(s): D. Walden, T.M. Shortell, G.J. Roedler, B.A. Delicado, O. Mornas, Y. Yew-Seng, D. Endler. San Diego, CA: International Council on Systems Engineering (INCOSE). Available at https:/ / www. incose. org/ publications/se-handbook-v5.
ISO/IEC/IEEE. 2023. Systems and software engineering - System life cycle processes. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023.

Primary References
None

Additional References
None




Knowledge Area: Process Selection and Tailoring

Process Selection and Tailoring

Contents of this Knowledge Area
 Guidelines for the Selection and Tailoring of Processes (David Endler) (Mike Yokell)
 Using ISO/IEC/IEEE 24748-2 (David Endler) (Mike Yokell)
 Tailoring (David Endler) (Mike Yokell)
 Lead Author:
 David Endler
 Contributing Authors:
 Mike Yokell and Garry Roedler
-
Selecting appropriate processes for use throughout the life cycle of systems is a strategic challenge for organizations. In many cases, ISO/IEC/IEEE 24748-2 is a useful resource for this challenge. When starting projects, it is often beneficial to tailor the organization's life cycle processes to the specific needs of the project.

Articles
This Knowledge Area contains the following articles:
 Guidelines for the Selection and Tailoring of Processes
 Using ISO/IEC/IEEE 24748-2
 Tailoring

References
Works Cited
None.

Primary References
ISO/IEC/IEEE. 2024b. Systems and software engineering - Life cycle management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-2:2024.

Additional References
None.


Guidelines for the Selection and Tailoring of Processes

 Lead Author:
 David Endler
 Contributing Author:
 Mike Yokell
-
Selecting suitable life cycle processes is strategic, requiring flexibility, compliance, and alignment with standards like ISO/IEC/IEEE 24748-2. Key principles include risk-based rigor, tailoring, traceability, tool integration, and governance. Success depends on human factors, learning, reuse, and management support. Effective frameworks balance rigor with agility, using feedback, training, and pilot projects to ensure continuous improvement.

Fundamental Concepts
Selecting appropriate processes for use throughout the life cycle of systems is a strategic challenge for organizations. In many cases, ISO/IEC/IEEE 24748-2 is a useful resource for this challenge. The goal is to create a flexible, adaptable framework that ensures compliance, quality, and efficiency while allowing innovation and agility. This requires aligning with consensus standards, learning from past experience, and tailoring processes to project-specific needs.

Core Principles
When selecting system life cycle processes, consider the following principles:
 Risk and context: Process rigor should match system complexity, criticality, and regulatory environment. For example, a safety-critical avionics system requires more rigorous analysis and stringent verification than a home TV screen.
 Tailoring: Consider tailoring upfront, it will happen. In almost every project, the process framework needs to be tailored to the project-specific context, life cycle model and approach, with documented rationale. A process framework with tailoring guidelines is far more effective than a single, uniform process.
 Traceability: Most systems demand end-to-end traceability between requirements, design, implementation, verification results, and other artifacts.
 Tool and data integration: Processes can connect with product lifecycle management / application lifecycle management / configuration management (PLM/ALM/CM) tools to enable automation, audit trails, and reporting.
 Governance and accountability: Clear process ownership, change control boards, and role definitions prevent fragmentation and ensure accountability.
Additional topics of high relevance include:
 Human Factors and Organizational Aspects
 Competence Management: Processes are only as good as the people executing them. Skills matrices, role training, and certification of staff should be part of the process framework.
 Culture & Change Management: Process adoption depends strongly on company culture. Introducing new methods requires structured change management.
 Communication Interfaces: Most systems often involve multiple disciplines. Defined communication rules and cross-disciplinary forums are essential.
 Knowledge and Lessons Learned


 Organizational Learning: Processes should include structured mechanisms for capturing lessons learned, good practices, and failure analyses.
 Reuse & Reference Architectures: Reusable components, design patterns, and product and process reference architectures can dramatically reduce risk and cost, but only if processes explicitly encourage and govern reuse.

Good Practices
Implementing effective and efficient processes for most systems goes beyond compliance; practical approaches that teams can consistently follow are required. The following good practices provide some guidance, however, tailoring to different project types, technologies, and organizational contexts should be considered.
 Lightweight Process Frameworks: Identify and build around core processes (e.g., requirements, architecture, integration, verification, validation, configuration, risk management). Overly detailed process definitions are often ignored. Focus first on essential practices. Note that the optimal process "weight" depends on mission criticality and risk.
 Tailoring: Define decision criteria (e.g., size, safety level, novelty, mission criticality, certification needs) to select mandatory vs. optional activities and level of rigor. Ensure tailoring is documented; clear decision trees and
real-world examples improve adoption and compliance.
 Risk-based Verification: Scale test rigor and independence according to risk and criticality.
 Supplier governance: Require suppliers to demonstrate compliance and maturity.
 Training & coaching: Adoption requires skilled practitioners and process champions.
 Measurement and feedback loops: Collect data on defects, requirements churn, and lead times to refine processes.
 Management support: When process compliance is supported and demanded by management, lengthy debates about necessity are avoided. All levels of the project should be able to see the benefit of performing the processes.
 Pilot projects: Test process changes in representative projects before full rollout.
 Effectiveness vs efficiency: Processes must be effective before they can be made efficient. Getting the wrong answer faster or cheaper doesn't count.
 Process assurance: Life cycle processes form a basis for execution that avoids unintended omission, unnecessary activities and lack of discipline. For example, the project assessment and control process and decision management process provide for iterative incremental development that is at once responsive and disciplined.

Challenges
While a unified process framework offers consistency, in practice, no single process can perfectly fit every project or technology context. Differences in project size, complexity, regulatory requirements, and technology maturity can create conflicts that a single process cannot address. Typical challenges include:
 Scaling: Large programs can need more structure in their governance; small projects can leverage lean, flexible processes.
 Technology maturity: New technology requires experimentation; legacy products require strict control.
 Regulatory heterogeneity: Some domains demand exhaustive documentation, others allow leaner approaches.
 Organizational maturity: Processes that exceed a team's capability can lead to noncompliance.
 Culture Change, Change Management: Noncompliance also results from not having a common vision regarding the necessity, not getting adequate training, not providing for effective transition from previous process approaches, etc.
 Contractual constraints: OEMs, regulators, or funding bodies may impose specific processes.
 Myths about processes: ISO/IEC/IEEE 15288 "does not prescribe a specific system life cycle model, development methodology, method, modelling approach or technique" (ISO/IEC/IEEE 15288:2023, Clause 1). The processes, activities and tasks in ISO/IEC/IEEE 15288 can be used with agile and other techniques with or without tailoring.


References
Works Cited
ISO/IEC/IEEE. 2023. Systems and software engineering - System life cycle processes. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023.
ISO/IEC/IEEE. 2024. Systems and software engineering - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-2:2024.

Primary References
None

Additional References
None

Using ISO/IEC/IEEE 24748-2

 Lead Author:
 David Endler
 Contributing Author:
 Mike Yokell
-
Effective management of life cycle processes ensures quality, risk reduction, and consistency across projects. ISO/IEC/IEEE 15288 provides the foundational framework for system life cycle processes, often extended by domain-specific standards. ISO/IEC/IEEE 24748-2 guides the practical application of 15288 covering strategy, system, life cycle, organizational, project, process, and conformance aspects to ensure structured, adaptable implementation.

Fundamental Concepts
Management and structuring of life cycle processes are critical to achieving successful results. Life cycle processes provide a structured framework for all life cycle stages of systems or products. For organizations striving to ensure quality, reduce risk, and enhance consistency across projects, adopting recognized standards is not only recommended but often essential.
ISO/IEC/IEEE 15288 can be seen as the foundation for domain-specific standards (e.g., ASPICE, ISO 26262, RTCA DO-178C, RTCA DO-254, IEC 62304, ISO 13485), or as a framework for other standards and guides with specific focuses (e.g., ISO/IEC 27000, NIST 800-160, SAE 1001). In many situations it is therefore advisable to use this standard as a starting point and then overlay domain-specific standards to meet regulatory or certification requirements.
According to ISO/IEC/IEEE 24748-2: ISO/IEC/IEEE 24748-2 is a guideline for the application of ISO/IEC/IEEE 15288. It addresses system, life cycle, organizational, project, and process, concept application, principally through reference to ISO/IEC/IEEE 24748-1 and ISO/IEC/IEEE 15288. It gives guidance on applying ISO/IEC/IEEE 15288 from the aspects of strategy, planning, application in organizations, and application on projects. Whereas


ISO/IEC/IEEE 15288 is kept short and concise, ISO/IEC/IEEE 24784-2 elaborates on the following aspects:
 Application strategy
 Application of system concepts
 Application of life cycle concepts
 Application of organizational concepts
 Application of project concepts
 Application of process concepts
 Application of conformance and adaptation concepts

Application Strategy
Guidelines are provided for defining the strategy to apply ISO/IEC/IEEE 15288 to
 a specific project,
 improving an organization's life cycle processes, or
 system life cycle processes usable within a larger process (e.g., an organization's acquisition process). The strategy described in ISO/IEC/IEEE 24748-2 includes the following steps:
 plan the application,
 adapt ISO/IEC/IEEE 15288, if applicable,
 conduct pilot project(s),
 formalize the approach, and
 institutionalize the approach.

Application of System Concepts
Approaches are summarized on how to define the system-of-interest, the system structure, as well as interfacing, enabling, and interoperating systems.

Application of life cycle concepts
This clause of ISO/IEC/IEEE 24748-2 summarizes the generic life cycle stages,
the decision gates that separate the stages, and application approaches.

Application of organizational concepts
Guidelines are provided on which topics should be considered when ISO/IEC/IEEE 15288 is applied internally by an organization or ISO/IEC/IEEE 15288 is applied through an agreement by two or more organizations.

Application of project concepts
This clause of ISO/IEC/IEEE 24748-2 summarizes how ISO/IEC/IEEE 15288 can be used by a project. Each of the four process groups (Agreement Processes, Organizational Project-Enabling Processes, Technical Management Processes, and Technical Processes) can be used to establish a common understanding in a project.


Application of process concepts
Detailed guidelines are provided for the life cycle processes defined in ISO/IEC/IEEE 15288.

Application of conformance and adaptation concepts
Guidelines for conformance and adaptation of the life cycle processes defined in ISO/IEC/IEEE 15288 are provided.

References
Works Cited
ASPICE. 2025. Automotive Software-based systems Process Improvement and Capability DEtermination. Version
4.0. Accessed 29 Oct 2025: https://vda-qmc.de/en/automotive-spice/
IEC. 2006. Medical device software - Software life cycle processes. International Electrotechnical Commission (IEC). IEC 62304:2006.
ISO. 2016. Medical devices - Quality management systems - Requirements for regulatory purposes. Geneva, Switzerland: International Organization for Standardization (ISO). ISO 13485:2016.
ISO. 2028. Road vehicles - Functional safety. Geneva, Switzerland: International Organization for Standardization (ISO). ISO 26262 Series, 2018.
ISO/IEC. 2018. Information technology - Security techniques - Information security management systems - Overview and vocabulary. International Organization for Standardization (ISO) and International Electrotechnical Commission (IEC). ISO/IEC 27000:2018.
ISO/IEC/IEEE. 2023. Systems and software engineering - System life cycle processes. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023.
ISO/IEC/IEEE. 2024a. Systems and software engineering - Life cycle management - Part 1: Guidelines for life cycle management. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEC/IEEE. 2024b. Systems and software engineering - Life cycle management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-2:2024.
NIST 2022. Engineering Trustworthy Secure Systems. National Institute of Standards and Technology. NIST SP 800-160 Vol. 1 Rev. 1, 2022.
RTCA. 2000. Design Assurance Guidance for Airborne Electronic Hardware. Radio Technical Commission for Aeronautics. RTCA DO-254, 2000.
RTCA. 2018. Software Considerations in Airborne Systems and Equipment Certification. Radio Technical Commission for Aeronautics. RTCA DO-178C, 2018.
SAE. 2018. Integrated Project Processes for Engineering a System. Warrendale, PA: SAE International, SAE 1001:2018.


Primary References
ISO/IEC/IEEE. 2023. Systems and software engineering - System life cycle processes. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023.
ISO/IEC/IEEE. 2024a. Systems and software engineering - Life cycle management - Part 1: Guidelines for life cycle management. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-1:2024.
ISO/IEC/IEEE. 2024b. Systems and software engineering - Life cycle management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-2:2024.

Additional References
None

Tailoring

 Lead Author:
 David Endler
 Contributing Author:
 Mike Yokell
-
Project-level tailoring adapts ISO/IEC/IEEE 15288 processes to specific contexts, balancing rigor, risk, and flexibility. It is dynamic, evidence-based, and aligned with project planning. Success depends on stakeholder collaboration, documentation, and continuous review. Good practices emphasize fact-based decisions, tool integration, and adaptability, while avoiding over-engineering, uniformity, and neglecting stakeholder engagement.

Fundamental Concepts
While organizations provide governance and overarching frameworks (see articles Adapting the Life Cycle Model and Adapting the Development Approach), tailoring can be needed on the project level. ISO/IEC/IEEE 15288, along with related elaboration standards (ISO/IEC/IEEE 24748 series), defines a comprehensive set of life cycle processes that can be applied to projects of any size and complexity. However, no project can adopt these processes "off the shelf." They should be tailored to the specific project environment, stakeholders, and risks.


The Role of Tailoring
Tailoring at the project level involves adjusting life cycle processes to ensure that they meet the unique requirements of the project. These adjustments scale the rigor of processes to a level appropriate to project risk, complexity, and constraints. For example:
 A project with tight budgets and low tolerance for failure can benefit more rigorous verification and validation activities.
 A small project with low complexity and high trust among stakeholders may streamline certain formal reviews to save cost and time.
Tailoring is not a one-time activity, but a dynamic process. As risks and circumstances evolve, tailoring should be revisited throughout the life cycle. As shown in Figure 1, it balances the dangers of two extremes:
Too little rigor, which raises the risk of technical issues, schedule slips, or cost overruns.
Too much rigor, which introduces unnecessary process overhead, reduces flexibility, and inflates cost. PLACE FIGURE HERE
Figure 1: Tailoring requires balance between risk and process. INCOSE SEH original figure created by Krueger adapted from Salter (2003). Used with permission.

Project Context Factors
According to PMI Scaling Factors, several factors shape how tailoring decisions are made:
1. Team size
2. Geographic distribution
3. Organizational distribution
4. Skill availability
5. Compliance
6. Domain complexity
7. Solution complexity
Other factors that can be considered are:
1. Stakeholder landscape
2. Budget and schedule
3. Risk tolerance
4. Criticality of the project (safety, mission, etc.)
In all cases, tailoring seeks to ensure that processes are fit for purpose, supporting the project's goals while managing risk at an acceptable level.

Concurrency, Iteration, and Recursion
As described in article Process Concurrency, Iteration, and Recursion, life cycle processes are applied in ways that are concurrent, iterative, and recursive. For instance, requirements definition, architecture definition, and verification may occur simultaneously and in multiple cycles as knowledge evolves. The processes are recursively applied throughout the system structure. This recursive application ensures coherence across project activities and maintains traceability of decisions.


Good Practices
Project success depends on disciplined tailoring, transparent agreements, and effective use of tools and methods. Several practices have proven especially valuable.

Fact-Based Tailoring
Tailoring decisions should not rely on intuition alone. Instead, they should be based on facts, evidence, and risk assessment. Independent review or approval can help avoid bias. Using structured Decision Management processes to document alternatives, trade-offs, and rationales creates a traceable record that supports accountability.

Documenting and Validating Assumptions and Rationale
Every tailoring choice should be explicitly justified and recorded. For example, if a project reduces the number of formal design reviews, it should document why (e.g., high team cohesion, proven system element maturity). This documentation ensures that later stakeholders (especially during audits or project transitions) understand the reasoning behind earlier decisions.

Collaboration with Stakeholders
Projects rarely operate in isolation. Tailoring works best when all relevant stakeholders (e.g., acquirers, suppliers, and regulators) are involved in defining and approving the tailoring approach. Collaborative agreements build trust and reduce disputes later in the life cycle. As trust grows or project risks or complexity reduces[GR10] , projects can simplify some process activities; conversely, when risks rise, additional rigor can be introduced.

Integration with Project Planning
Tailoring should be conducted in parallel with project planning. Decisions on scope, schedule, budget, milestones, and resource allocation are tightly linked to the processes chosen or how they are applied. For example, aggressive schedules can require automated testing tools to accelerate verification, while budget constraints may limit the number of prototypes built. Alignment ensures that plans are realistic and processes are executable.

Dynamic Assessment and Control
Tailoring is not static. Throughout the project, effectiveness and efficiency of tailoring should be continuously assessed and, if necessary, controlled (see article Project Assessment and Control) in response to changing risks, stakeholder feedback, or external conditions. For example, if a project experiences unanticipated technical problems, additional design reviews can be added. Conversely, if risks decrease, some formalities can be reduced to save time.

Methods and Tools at Project Level
Though ISO/IEC/IEEE 15288 does not prescribe specific tools, projects benefit from structured selection and disciplined use of methods and tools. Key considerations include:
 Purpose-driven selection: Tools should directly support tailored processes; process comes before tool.
 Connectivity: Tools should integrate with other tools in use, ensuring smooth data flow across project functions.
 Training requirements: Staff need adequate preparation to use tools effectively.
 Engineer judgment: Tools are aids, not substitutes for critical thinking.
 Data availability: Tool selection should consider what data is needed and whether that data can easily be obtained and verified.


Practical Applications of Life Cycle Processes
According to ISO/IEC/IEEE 24748-2, ISO/IEC/IEEE 15288 processes can be applied in at least four practical ways:
 to establish agreements with organizational entities external and internal to the project to acquire or supply a product or service (agreement processes);
 to establish the organization's capability to acquire and supply products or services through the initiation, support
and control of projects (organizational project-enabling processes);
 to establish and evolve project plans, to execute the project plans, to assess actual achievement and progress against the plans and to control execution of the project through to fulfilment (technical management processes);
 to contribute to the satisfaction of technical objectives for one or more life cycle stages (technical processes).
By focusing on these purposes, projects ensure that process tailoring delivers tangible value rather than administrative burden.

Challenges
Even with clear principles and good practices, projects face substantial challenges when tailoring and applying life cycle processes.

Common Tailoring Traps
Projects often fall into predictable traps, including:
 Reusing baselines blindly: Borrowing a tailored process from another project without revisiting assumptions.
 Over-engineering: Applying all processes "just to be safe," leading to unnecessary costs and delays.
 Assuming uniformity: Believing that the same set of risks or controls applies across all projects.
 Failing to engage stakeholders: Excluding key voices, which leads to lack of buy-in and increased risk of conflict. Disciplined decision-making and continuous review can facilitate avoiding these traps.
Complexity of Multi-Stakeholder Projects
Projects often involve multiple stakeholders with different priorities and policies. Achieving alignment requires:
 Establishing consistent processes across parties.
 Negotiating agreements that balance competing needs.
 Using ISO/IEC/IEEE 15288 as a shared reference framework.
 Still, differences in culture, terminology, and expectations remain significant hurdles.

Tool and Method Pitfalls
On many cases, tools pose challenges:
 Lack of integration between tools creates silos and rework.
 Security and data management issues complicate tool lifecycle.
 High training requirements can strain limited project resources.
 Over-reliance on tools risks diminishing engineers' independent judgment. Data availability and verification
 "Garbage in, Garbage out".


Maintaining Stakeholder Commitment
Tailoring of processes benefits from strong stakeholder commitment. If stakeholders view processes as excessive overhead, they can resist compliance. Conversely, if they perceive insufficient rigor, they may lose confidence in the project's ability to deliver. Active communication and visible leadership support are essential to maintain alignment.

Conclusion
At the project level, tailoring systems engineering life cycle processes is both a necessity and an opportunity. Standards such as ISO/IEC/IEEE 15288 provide a comprehensive framework, but projects should adapt these processes to their specific context, risks, and stakeholder environment.
Good practices include fact-based tailoring, documentation of rationale, stakeholder collaboration, integration with project planning, dynamic monitoring, and thoughtful tool use. By applying processes in ways that are practical and purpose-driven, projects can increase efficiency, reduce risk, and maintain stakeholder confidence.
Nevertheless, challenges remain. Projects should avoid common tailoring traps, balance rigor with agility, manage multi-stakeholder complexity, and ensure that tools support rather than dominate decision-making. Above all, continuous adaptation and transparent communication can help ensure that processes remain aligned with project needs.
In the end, project-level tailoring is not about minimizing process effort or maximizing bureaucracy. It is about applying the right processes, at the right level of rigor, at the right time to deliver systems that meet stakeholder needs effectively and efficiently.

References
Works Cited
ISO/IEC/IEEE. 2023. Systems and software engineering - System life cycle processes. Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023.
ISO/IEC/IEEE. 2024. Systems and software engineering - Life cycle management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes). Geneva, Switzerland: International Organization for Standardization (ISO), International Electrotechnical Commission (IEC), and Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24748-2:2024.

Primary References
None

Additional References
None

Part 3c: Processes


Knowledge Area: Technical Management Processes

Technical Management Processes

Contents of this Knowledge Area
 Project Planning (Ray Madachy, Garry Roedler, and Brian Wells)
 Project Assessment and Control (Ray Madachy, Andy Pickard, and Garry Roedler) (Richard Turner)
 Decision Management (Matt Chilli) (Garry Roedler, Greg Parnell, and Scott Jackson)
 Requirements Management (Tami Katz) (Lou Wheatcraft and Mike Ryan)
 Risk Management (Ed Conrow, Ray Madachy, and Garry Roedler) (Victor Bertolazzo, Leighton Johnson, Bob Parro, Jack Stein, and Richard Turner)
 Configuration Management (John Metcalf, Philip Hallenbeck, and Sandrine Gonthier) (Garry Roedler)
 Configuration Baselines (John Metcalf, Philip Hallenbeck, and Sandrine Gonthier) (Garry Roedler)
 Configuration Management Implementation (John Metcalf, Philip Hallenbeck, and Sandrine Gonthier) (Garry Roedler)
 Information Management (John Metcalf, Philip Hallenbeck, and Sandrine Gonthier) (Garry Roedler and Andy Pickard)
 Quality Management (Quong Wang, Massood Towhidnejad, and David Olwell) (Dick Fairley and Garry Roedler)
 Measurement (Garry Roedler) (Salvatore R. Bruno, Thomas McDermott, and David Endler)
 Lead Authors:
 Ray Madachy and Garry Roedler
-
This knowledge area is about managing the resources and assets allocated to perform systems engineering, often in the context of a project or a service, but sometimes in the context of a less well-defined activity. Systems engineering management is distinguished from general project management by its focus on the technical or engineering aspects of a project. SEM also encompasses exploratory research and development (R&D) activities at the enterprise level in commercial or government operations.
See the article Matrix of Implementation Examples for a mapping of case studies and vignettes included in Part 7 to topics covered in Part 3.

Discussion
Implementing systems engineering (SE) requires the coordination of technical and managerial endeavors. Success with the technical is not possible in the absence of the managerial. Management provides the planning, organizational structure, collaborative environment, and program controls to ensure that stakeholder needs are met.
The Venn diagram below provides some context for thinking about SEM. It shows that some functions are managed within the SE function, while others are managed in collaboration with the management of systems implementation and with overall project and systems management.




There is no one-size-fits-all way to define the details of where SEM functions are performed. An in-company SE organization does not run its own accounting system, but relies on the corporate management organization for this aspect of SEM. A company performing only SE does include the accounting functions as part of SEM. In all cases, the managers of the SE function must be actively involved in the management of all the activities within the SE system boundary, including working out what collaborative arrangements best fit their situation. They must also remain aware of management events in their environment outside the system boundary that may affect their ability to perform. Part 6 of the SEBoK includes relevant knowledge areas for collaborative management, including Systems Engineering and Software Engineering, Systems Engineering and Project Management, Systems Engineering and Industrial Engineering, Systems Engineering and Procurement/Acquisition, and Systems Engineering and Quality Attributes.


References
Works Cited
None.

Primary References
Blanchard, B.S. 2004. Systems Engineering Management, 3rd ed. New York, NY, USA: John Wiley & Sons Inc.
Sage, A.P. and W. Rouse. 2009. Handbook of Systems Engineering and Management, 2nd Ed. Hoboken, NJ, USA: John Wiley and Sons.
Rebentisch, E. 2017. Integrating Program Management and Systems Engineering, 1st Ed. Hoboken, NJ, USA: John Wiley and Sons.

Additional References
None.

Project Planning

 Lead Authors:
 Ray Madachy, Garry Roedler, and Brian Wells
-
Planning is an important aspect of technical management processes (SEM). Systems engineering (SE) planning is performed concurrently and collaboratively with project planning. It involves developing and integrating technical plans to achieve the technical project objectives within the resource constraints and risk thresholds. The planning involves the success-critical stakeholders to ensure that necessary tasks are defined with the right timing in the life cycle in order to manage acceptable risks levels, meet schedules, and avoid costly omissions.

SE Planning Process Overview
SE planning provides the following elements:
 Definition of the project from a technical perspective.
 Definition or tailoring of engineering processes, practices, methods, and supporting enabling environments to be used to develop products or services, as well as plans for transition and implementation of the products or services, as required by agreements.
 Definition of the technical organizational, personnel, and team functions and responsibilities, as well as all disciplines required during the project life cycle.
 Definition of the appropriate life cycle model or approach for the products or services.
 Definition and timing of technical reviews, product or service assessments, and control mechanisms across the life cycle, including the success criteria such as cost, schedule, and technical performance at identified project milestones.
 Estimation of technical cost and schedule based on the effort needed to meet the requirements; this estimation becomes input to project cost and schedule planning.
 Determination of critical technologies, as well as the associated risks and actions needed to manage and transition these technologies.
 Identification of linkages to other project management efforts.
 Documentation of and commitment to the technical planning.


Scope
SE planning begins with analyzing the scope of technical work to be performed and gaining an understanding the constraints, risks, and objectives that define and bound the solution space for the product or service. The planning includes estimating the size of the work products, establishing a schedule (or integrating the technical tasks into the project schedule), identification of risks, and negotiating commitments. Iteration of these planning tasks may be necessary to establish a balanced plan with respect to cost, schedule, technical performance, and quality. The planning continues to evolve with each successive life cycle phase of the project (NASA 2007, 1-360; SEI 1995, 12).
SE planning addresses all programmatic and technical elements of the project to ensure a comprehensive and integrated plan for all of the project's technical aspects and should account for the full scope of technical activities, including system development and definition, risk management, quality management, configuration management, measurement, information management, production, verification and testing, integration, validation, and deployment. SE planning integrates all SE functions to ensure that plans, requirements, operational concepts, and architectures are consistent and feasible.
The scope of planning can vary from planning a specific task to developing a major technical plan. The integrated planning effort will determine what level of planning and accompanying documentation is appropriate for the project.

Integration
The integration of each plan with other higher-level, peer, or subordinate plans is an essential part of SE planning. For the technical effort, the systems engineering management plan (SEMP), also frequently referred to as the systems engineering plan (SEP), is the highest-level technical plan. It is subordinate to the project plan and often has a number of subordinate technical plans providing detail on specific technical focus areas (INCOSE 2011, sec. 5.1.2.2; NASA 2007, appendix J).
In U.S. defense work, the terms SEP and SEMP are not interchangeable. The SEP is a high-level plan that is made before the system acquisition and development begins. It is written by the government customer. The SEMP is the specific development plan written by the developer (or contractor). In this context, intent, and content of these documents are quite different. For example, a SEP will have an acquisition plan that would not be included in a SEMP. Figure 1 below shows the SEMP and integrated plans.




Task planning identifies the specific work products, deliverables, and success criteria for systems engineering efforts in support of integrated planning and project objectives. The success criteria are defined in terms of cost, schedule, and technical performance at identified project milestones. Detailed task planning identifies specific resource requirements (e.g., skills, equipment, facilities, and funding) as a function of time and project milestones.
SE planning is accomplished by both the acquirer and supplier and the activities for SE planning are performed in the context of the respective enterprise. The activities establish and identify relevant policies and procedures for managing and executing the project management and technical effort, identifying the management and technical tasks, their interdependencies, risks, and opportunities, and providing estimates of needed resources/budgets. Plans are updated and refined throughout the development process based on status updates and evolving project requirements (SEI 2007).

Linkages to Other Systems Engineering Management Topics
The project planning process is closely coupled with the measurement, assessment and control, decision management, and risk management processes.
The measurement process provides inputs for estimation models. Estimates and other products from planning are used in decision management. SE assessment and control processes use planning results for setting milestones and assessing progress. Risk management uses the planning cost models, schedule estimates, and uncertainty distributions to support quantitative risk analysis (as desired).
Additionally, planning needs to use the outputs from assessment and control as well as risk management to ensure corrective actions have been accounted for in planning future activities. The planning may need to be updated based on results from technical reviews (from assessment and control) addressing issues pertaining to: measurement, problems that were identified during the performance of risk management activities, or decisions made as a result of


the decision management activities (INCOSE 2010, sec. 6.1).

Practical Considerations
Pitfalls
Some of the key pitfalls encountered in planning and performing SE planning are listed in Table 1.

Table 1. Major Pitfalls with Planning. (SEBoK Original)
Name	Description


Incomplete and Rushed Planning


Inadequate SE planning causes significant adverse impacts on all other engineering activities. Although one may be tempted to save time by rushing the planning, inadequate planning can create additional costs and interfere with the schedule due to planning omissions, lack of detail, lack of integration of efforts, infeasible cost and schedules, etc.

Inexperienced Staff Lack of highly experienced engineering staff members, especially in similar projects, will likely result in inadequate planning.
Less experienced engineers are often assigned significant roles in the SE planning; however, they may not have the appropriate judgment to lay out realistic and achievable plans. It is essential to assign the SE planning tasks to those with a good amount of relevant experience.


Good Practices
Some good practices gathered from the references are in Table 2.

Table 2. Proven Practices with Planning. (SEBoK Original)
Name	Description

Use Multiple	Get technical resources from all disciplines involved in the planning process. Disciplines
Early Conflict	Resolve schedule and resource conflicts early. Resolution
Task Independence  Tasks should be as independent as possible.

Define	Define task interdependencies, using dependency networks or other approaches. Interdependencies
Risk Management	Integrate risk management with the SE planning to identify areas that require special attention and/or trades.

Management	The amount of management reserve should be based on the risk associated with the plan. Reserve
Use Historical Data Use historical data for estimates and adjust for differences in the project.

Consider Lead	Identify lead times and ensure that you account for them in the planning (e.g., the development of analytical tools). Times
Update Plans	Prepare to update plans as additional information becomes available or changes are needed.

Use IPDTs	An integrated product development team (IPDT) (or integrated product team (IPT)) is often useful to ensure adequate communication across the necessary disciplines, timely integration of all design considerations, as well as integration, testing, and consideration of the full range of risks that need to be addressed. Although there are some issues that need to be managed with them, IPDTs tend to break down the communication and knowledge stovepipes that often exist.

Additional good practices can be found in the Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), NASA Systems Engineering Handbook, the INCOSE Systems Engineering Handbook, and Systems and Software Engineering - Life Cycle Processes - Project Management (Caltrans and USDOT 2005, 278; NASA December 2007, 1-360, sec. 6.1; INCOSE 2011, sec. 5.1; ISO/IEC/IEEE 2009, Clause 6.1).


References
Works Cited
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Reserach & Innovation/U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense, February 19.
INCOSE. 2012. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. Version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2009. Systems and Software Engineering - Life Cycle Processes - Project Management. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 16326:2009(E).
NASA. 2007. NASA Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.
SEI. 1995. A systems engineering capability maturity model. Version 1.1. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-95-MM-003.

Primary References
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Reserach & Innovation/U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense.
INCOSE. 2012. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. Version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
ISO/IEC/IEEE. 2009. Systems and Software Engineering - Life Cycle Processes - Project Management. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 16326:2009(E).
NASA. 2007. NASA Systems Engineering Handbook. Washington, D.C., USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.
SEI. 1995. A Systems Engineering Capability Maturity Model, version 1.1. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-95-MM-003.
SEI. 2007. Capability Maturity Model Integrated (CMMI) for Development, version 1.2, measurement and analysis process area. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).


Additional References
Boehm, B., C. Abts, A.W. Brown, S. Chulani, B.K. Clark, E. Horowitz, R. Madachy, D.J. Reifer, B. Steece. 2000.
Software Cost Estimation with COCOMO II. Englewood Cliffs, NJ, USA: Prentice Hall
DeMarco, T. and T. Lister. 2003. Waltzing with Bears; Managing Risks on Software Projects. New York, NY, USA: Dorset House.
ISO/IEC/IEEE. 2009. Systems and Software Engineering - Life Cycle Processes - Project Management. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 16326:2009(E).
Valerdi, R. 2008. The Constructive Systems Engineering Cost Model (COSYSMO): Quantifying the Costs of Systems Engineering Effort in Complex Systems. Saarbrücken,Germany: VDM Verlag Dr. Muller

Project Assessment and Control

 Lead Authors:
 Ray Madachy, Andy Pickard, and Garry Roedler
 Contributing Author:
 Richard Turner
-
The purpose of systems engineering assessment and control (SEAC) is to provide adequate visibility into the project's actual technical progress and risks with respect to the technical plans (i.e., systems engineering management plan (SEMP) or systems engineering plan (SEP) and subordinate plans). The visibility allows the project team to take timely preventive action when disruptive trends are recognized or corrective action when performance deviates beyond established thresholds or expected values. SEAC includes preparing for and conducting reviews and audits to monitor performance. The results of the reviews and measurement analyses are used to identify and record findings/discrepancies and may lead to causal analysis and corrective/preventive action plans. Action plans are implemented, tracked, and monitored to closure. (NASA 2007, Section 6.7; SEG-ITS, 2009, Section 3.9.3, 3.9.10; INCOSE, 2010, Clause 6.2; SEI, 2007)

Systems Engineering Assessment and Control Process Overview
The SEAC process involves determining and initiating the appropriate handling strategies and actions for findings and/or discrepancies that are uncovered in the enterprise, infrastructure, or life cycle activities associated with the project. Analysis of the causes of the findings/discrepancies aids in the determination of appropriate handling strategies. Implementation of approved preventive, corrective, or improvement actions ensures satisfactory completion of the project within planned technical, schedule, and cost objectives. Potential action plans for findings and/or discrepancies are reviewed in the context of the overall set of actions and priorities in order to optimize the benefits to the project and/or organization. Interrelated items are analyzed together to obtain a consistent and cost-effective resolution.
The SEAC process includes the following steps:
 monitor and review technical performance and resource use against plans
 monitor technical risk, escalate significant risks to the project risk register and seek project funding to execute risk mitigation plans
 hold technical reviews and report outcomes at the project reviews
 analyze issues and determine appropriate actions
 manage actions to closure


 hold a post-delivery assessment (also known as a post-project review) to capture knowledge associated with the project (this may be a separate technical assessment or it may be conducted as part of the project assessment and control process).
The following activities are normally conducted as part of a project assessment and control process:
 authorization, release and closure of work
 monitor project performance and resource usage against plan
 monitor project risk and authorize expenditure of project funds to execute risk mitigation plans
 hold project reviews
 analyze issues and determine appropriate actions
 manage actions to closure
 hold a post-delivery assessment (also known as a post-project review) to capture knowledge associated with the project
Examples of major technical reviews used in SEAC are shown in Table 1 from DAU (2010).

Table 1. Major Technical Review Examples (DAU 2012). Released by Defense Acquisition University (DAU)/U.S. Department of Defense (DoD).
Name	Description

Alternative Systems A multi-disciplined review to ensure the resulting set of requirements agrees with the customers' needs and expectations. Review
Critical Design	A multi-disciplined review establishing the initial product baseline to ensure that the system under review has a reasonable Review (CDR)	expectation of satisfying the requirements of the capability development document within the currently allocated budget and
schedule.

Functional	Formal examination of the as-tested characteristics of a configuration item (hardware and software) with the objective of Configuration Audit verifying that actual performance complies with design and interface requirements in the functional baseline.
In-Service Review	A multi-disciplined product and process assessment that is performed to ensure that the system under review is operationally employed with well-understood and managed risk.
Initial Technical	A multi-disciplined review that supports a program's initial program objective memorandum submission. Review
Integrated Baseline	A joint assessment conducted by the government program manager and the contractor to establish the performance Review	measurement baseline.
Operational Test	A multi-disciplined product and process assessment to ensure that the system can proceed into initial operational test and Readiness Review	evaluation with a high probability of success, and also that the system is effective and suitable for service introduction.
Production	The examination of a program to determine if the design is ready for production and if the prime contractor and major Readiness Review  subcontractors have accomplished adequate production planning without incurring unacceptable risks that will breach (PRR)	thresholds of schedule, performance, cost, or other established criteria.
Physical	An examination of the actual configuration of an item being produced around the time of the full-rate production decision. Configuration Audit
Preliminary Design  A technical assessment establishing the physically allocated baseline to ensure that the system under review has a reasonable Review (PDR)	expectation of being judged operationally effective and suitable.
System Functional	A multi-disciplined review to ensure that the system's functional baseline is established and has a reasonable expectation of Review (SFR)	satisfying the requirements of the initial capabilities document or draft capability development document within the currently
allocated budget and schedule.

System	A multi-disciplined review to ensure that the system under review can proceed into initial systems development and that all Requirements	system requirements and performance requirements derived from the initial capabilities document or draft capability Review (SRR)	development document are defined and testable, as well as being consistent with cost, schedule, risk, technology readiness,
and other system constraints.


System Verification A multi-disciplined product and process assessment to ensure the system under review can proceed into low-rate initial Review (SVR)	production and full-rate production within cost (program budget), schedule (program schedule), risk, and other system
constraints.

Technology	A systematic, metrics-based process that assesses the maturity of critical technology elements, such as sustainment drivers. Readiness
Assessment

Test Readiness	A multi-disciplined review designed to ensure that the subsystem or system under review is ready to proceed into formal Review (TRR)	testing.


Linkages to Other Systems Engineering Management Topics
The SE assessment and control process is closely coupled with the measurement, planning, decision management, and risk management processes. The measurement process provides indicators for comparing actuals to plans. Planning provides estimates and milestones that constitute plans for monitoring as well as the project plan, which uses measurements to monitor progress. Decision management uses the results of project monitoring as decision criteria for making control decisions.

Practical Considerations
Key pitfalls and good practices related to SEAC are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing SE assessment and control are shown in Table 2.

Table 2. Major Pitfalls with Assessment and Control. (SEBoK Original)
Name	Description

No Measurement Since the assessment and control activities are highly dependent on insightful measurement information, it is usually ineffective to proceed independently from the measurement efforts - what you get is what you measure.
"Something in	Some things are easier to measure than others - for instance, delivery to cost and schedule. Don't focus on these and neglect Time" Culture	harder things to measure like quality of the system. Avoid a "something in time" culture where meeting the schedule takes
priority over everything else, but what is delivered is not fit for purpose, resulting in the need to rework the project.

No Teeth	Make sure that the technical review gates have "teeth". Sometimes the project manager is given authority (or can appeal to someone with authority) to over-ride a gate decision and allow work to proceed, even when the gate has exposed significant issues with the technical quality of the system or associated work products. This is a major risk if the organization is strongly schedule-driven; it can't afford the time to do it right, but somehow it finds the time to do it again (rework).
Too Early	Don't baseline requirements or designs too early. Often there is strong pressure to baseline system requirements and designs Baselining	before they are fully understood or agreed, in order to start subsystem or component development. This just guarantees high
levels of rework.


Good Practices
Some good practices gathered from the references are shown in Table 3.


Table 3. Proven Practices with Assessment and Control. (SEBoK Original)
Name	Description

Independence	Provide independent (from customer) assessment and recommendations on resources, schedule, technical status, and risk based on experience and trend analysis.
Peer Reviews	Use peer reviews to ensure the quality of a product's work before they are submitted for gate review.
Accept Uncertainty	Communicate uncertainties in requirements or designs and accept that uncertainty is a normal part of developing a system.
Risk Mitigation Plans	Do not penalize a project at gate review if they admit uncertainty in requirements - ask for their risk mitigation plan to manage the uncertainty.
Just In-Time Baselining Baseline requirements and designs only when you need to - when other work is committed based on the stability of the requirement or design. If work must start and the requirement or design is still uncertain, consider how you can build robustness into the system to handle the uncertainty with minimum rework.
Communication	Document and communicate status findings and recommendations to stakeholders.

Full Visibility	Ensure that action items and action-item status, as well as other key status items, are visible to all project participants.

Leverage Previous Root When performing root cause analysis, take into account the root cause and resolution data documented in previous related Cause Analysis	findings/discrepancies.
Concurrent	Plan and perform assessment and control concurrently with the activities for Measurement and Risk Management. Management
Lessons Learned and	Hold post-delivery assessments or post-project reviews to capture knowledge associated with the project - e.g., to Post-Mortems	augment and improve estimation models, lessons learned databases, gate review checklists, etc.

Additional good practices can be found in INCOSE (2010, Clause 6.2), SEG-ITS (2009, Sections 3.9.3 and 3.9.10), INCOSE (2010, Section 5.2.1.5), and NASA (2007, Section 6.7).

References
Works Cited
Caltrans and USDOT. 2005. Systems Engineering Guidebook for Intelligent Transportation Systems (ITS), version
1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research & Innovation/U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD). February 19, 2010.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. Version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
NASA. 2007. Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), December 2007. NASA/SP-2007-6105.
SEI. 2007. "Measurement and Analysis Process Area," in Capability Maturity Model Integrated (CMMI) for Development, version 1.2. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).


Primary References
Caltrans and USDOT. 2005. [[Systems Engineering Guidebook for Intelligent Transportation Systems (ITS)],] version 1.1. Sacramento, CA, USA: California Department of Transportation (Caltrans) Division of Research & Innovation/U.S. Department of Transportation (USDOT), SEG for ITS 1.1.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD). February 19, 2010.
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. Version
3.2.2. San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2.
NASA. 2007. Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), December 2007. NASA/SP-2007-6105.
SEI. 2007. "Measurement and Analysis Process Area," in Capability Maturity Model Integrated (CMMI) for Development, version 1.2. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).

Additional References
ISO/IEC/IEEE. 2009. ISO/IEC/IEEE 16326|Systems and Software Engineering - Life Cycle Processes - Project Management. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 16326:2009(E).

Decision Management

 Lead Author:
 Matt Chilli
 Contributing Authors:
 Garry Roedler, Greg Parnell, and Scott Jackson
-
Many systems engineering decisions are difficult because they include numerous stakeholders, multiple competing objectives, substantial uncertainty, and significant consequences. In these cases, good decision making requires a formal decision management process. The purpose of the decision management process is:
"...to provide a structured, analytical framework for objectively identifying, characterizing and evaluating a set of alternatives for a decision at any point in the life cycle and select the most beneficial course of action."(ISO/IEC/IEEE 15288)
Decision situations (opportunities) are commonly encountered throughout a system's lifecycle. The decision management method most commonly employed by systems engineers is the trade study. Trade studies aim to define, measure, and assess shareholder and stakeholder value to facilitate the decision maker's search for an alternative that represents the best balance of competing objectives. By providing techniques for decomposing a trade decision into logical segments and then synthesizing the parts into a coherent whole, a decision management process allows the decision maker to work within human cognitive limits without oversimplifying the problem. Furthermore, by decomposing the overall decision problem, experts can provide assessments of alternatives in their area of expertise.


Decision Management Process
The decision analysis process is depicted in Figure 1 below. The decision management process is based on several best practices, including:
 Utilizing sound mathematical technique of decision analysis for trade studies. Parnell (2009) provided a list of decision analysis concepts and techniques.
 Developing one master decision model, followed by its refinement, update, and use, as required for trade studies throughout the system life cycle.
 Using Value-Focused Thinking (Keeney 1992) to create better alternatives.
 Identifying uncertainty and assessing risks for each decision.

The center of the diagram shows the five trade space objectives (listed clockwise): Performance, Growth Potential, Schedule, Development & Procurement Costs, and Sustainment Costs . The ten blue arrows represent the decision management process activities and the white text within the green ring represents SE process elements. Interactions are represented by the small, dotted green or blue arrows. The decision analysis process is an iterative process. A hypothetical UAV decision problem is used to illustrate each of the activities in the following sections.


Framing and Tailoring the Decision
To ensure the decision team fully understands the decision context, the analyst should describe the system baseline, boundaries and interfaces. The decision context includes: the system definition, the life cycle stage, decision milestones, a list of decision makers and stakeholders, and available resources. The best practice is to identify a decision problem statement that defines the decision in terms of the system life cycle.

Developing Objectives and Measures
Defining how an important decision will be made is difficult. As Keeney (2002) puts it:
Most important decisions involve multiple objectives, and usually with multiple-objective decisions, you can't have it all. You will have to accept less achievement in terms of some objectives in order to achieve more on other objectives. But how much less would you accept to achieve how much more?
The first step is to develop objectives and measures using interviews and focus groups with subject matter experts (SMEs) and stakeholders. For systems engineering trade-off analyses, stakeholder value often includes competing objectives of performance, development schedule, unit cost, support costs, and growth potential. For corporate decisions, shareholder value would also be added to this list. For performance, a functional decomposition can help generate a thorough set of potential objectives. Test this initial list of fundamental objectives by checking that each fundamental objective is essential and controllable and that the set of objectives is complete, non-redundant, concise, specific, and understandable (Edwards et al. 2007). Figure 2 provides an example of an objectives hierarchy.

For each objective, a measure must be defined to assess the value of each alternative for that objective. A measure (attribute, criterion, and metric) must be unambiguous, comprehensive, direct, operational, and understandable (Keeney & Gregory 2005). A defining feature of multi-objective decision analysis is the transformation from measure space to value space. This transformation is performed by a value function which shows returns to scale on the measure range. When creating a value function, the walk-away point on the measure scale (x-axis) must be ascertained and mapped to a 0 value on the value scale (y-axis). A walk-away point is the measure score where


regardless of how well an alternative performs in other measures, the decision maker will walk away from the alternative. He or she does this through working with the user, finding the measure score beyond, at which point an alternative provides no additional value, and labeling it "stretch goal" (ideal) and then mapping it to 100 (or 1 and 10) on the value scale (y-axis). Figure 3 provides the most common value curve shapes. The rationale for the shape of the value functions should be documented for traceability and defensibility (Parnell et al. 2011).

The mathematics of multiple objective decision analysis (MODA) requires that the weights depend on importance of the measure and the range of the measure (walk away to stretch goal). A useful tool for determining priority weighting is the swing weight matrix (Parnell et al. 2011). For each measure, consider its importance through determining whether the measure corresponds to a defining, critical, or enabling function and consider the gap between the current capability and the desired capability; finally, put the name of the measure in the appropriate cell of the matrix (Figure 4). The highest priority weighting is placed in the upper-left corner and assigned an unnormalized weight of 100. The unnormalized weights are monotonically decreasing to the right and down the matrix. Swing weights are then assessed by comparing them to the most important value measure or another assessed measure. The swing weights are normalized to sum to one for the additive value model used to calculate value in a subsequent section.





Generating Creative Alternatives
To help generate a creative and comprehensive set of alternatives that span the decision space, consider developing an alternative generation table (also called a morphological box) (Buede, 2009; Parnell et al. 2011). It is a best practice to establish a meaningful product structure for the system and to be reported in all decision presentations (Figure 5).



Assessing Alternatives via Deterministic Analysis
With objectives and measures established and alternatives having been defined, the decision team should engage SMEs, equipped with operational data, test data, simulations, models, and expert knowledge. Scores are best captured on scoring sheets for each alternative/measure combination which document the source and rationale. Figure 6 provides a summary of the scores.

Note that in addition to identified alternatives, the score matrix includes a row for the ideal alternative. The ideal is a tool for value-focused thinking, which will be covered later.


Synthesizing Results
Next, one can transform the scores into a value table, by using the value functions developed previously. A color heat map can be useful to visualize value tradeoffs between alternatives and identify where alternatives need improvement (Figure 7).

The additive value model uses the following equation to calculate each alternative's value:


where






The value component chart (Figure 8) shows the total value and the weighted value measure contribution of each alternative (Parnell et al. 2011).

The heart of a decision management process for system engineering trade off analysis is the ability to assess all dimensions of shareholder and stakeholder value. The stakeholder value scatter plot in Figure 9 shows five dimensions: unit cost, performance, development risk, growth potential, and operation and support costs for all alternatives.




Each system alternative is represented by a scatter plot marker (Figure 9). An alternative's unit cost and performance value are indicated by x and y positions respectively. An alternative's development risk is indicated by the color of the marker (green = low, yellow= medium, red = high), while the growth potential is shown as the number of hats above the circular marker (1 hat = low, 2 hats = moderate, 3 hats = high).

Identifying Uncertainty and Conducting Probabilistic Analysis
As part of the assessment, the SME should discuss the potential uncertainty of the independent variables. The independent variables are the variables that impact one or more scores; the scores that are independent scores. Many times the SME can assess an upper, nominal, and lower bound by assuming low, moderate, and high performance. Using this data, a Monte Carlo Simulation summarizes the impact of the uncertainties and can identify the uncertainties that have the most impact on the decision.


Accessing Impact of Uncertainty - Analyzing Risk and Sensitivity
Decision analysis uses many forms of sensitivity analysis including line diagrams, tornado diagrams, waterfall diagrams and several uncertainty analyses including Monte Carlo Simulation, decision trees, and influence diagrams (Parnell et al. 2013). A line diagram is used to show the sensitivity to the swing weight judgment (Parnell et al. 2011). Figure 10 shows the results of a Monte Carlo Simulation of performance value.


Improving Alternatives
Mining the data generated for the alternatives will likely reveal opportunities to modify some design choices to claim untapped value and/or reduce risk. Taking advantage of initial findings to generate new and creative alternatives starts the process of transforming the decision process from "alternative-focused thinking" to "value-focused thinking" (Keeney 1993).

Communicating Tradeoffs
This is the point in the process where the decision analysis team identifies key observations about tradeoffs and the important uncertainties and risks.


Presenting Recommendations and Implementing Action Plan
It is often helpful to describe the recommendation(s) in the form of a clearly-worded, actionable task-list in order to increase the likelihood of the decision implementation. Reports are important for historical traceability and future decisions. Take the time and effort to create a comprehensive, high-quality report detailing study findings and supporting rationale. Consider static paper reports augmented with dynamic hyper-linked e-reports.

The Cognitive Bias Effect on Decisions
Research by (Kahneman 2011) and (Thaler and Sunstein 2008) has concluded that cognitive bias can seriously distort decisions made by any decision maker. Both Kahneman and Thaler were awarded the Nobel prize for their work. The cause of this distortion is called the cognitive bias. These distorted decisions have contributed to major catastrophes, such as Challenger and Columbia. Other sources attributing major catastrophes are (Murata, Nakamura, and Karwowski 2015) and (Murata 2017).
(Kahneman 2011) and (Thaler and Sunstein 2008) have identified a large number of individual biases, the most well-known of which is the confirmation bias. This bias states that humans have a tendency to interpret new evidence as confirmation of one's existing beliefs or theories. Regarding mitigation of theses biases, there is general agreement that self-mitigation by the decision-maker is not feasible for most biases. (Thaler and Sunstein 2008) provide methods to influence the mitigation of most biases. They refer to these influences as "nudges".
Considering cognitive biases in a systems engineering is discussed by (Jackson 2017, Jackson and Harel 2017), and (Jackson 2018). The primary theme of these references is that rational decisions are rarely possible and that cognitive bias must be taken into account.

Decisions with Cognitive Bias
According to (INCOSE 2015) ideal decisions are made while "objectively identifying, characterizing, and evaluating a set of alternatives for a decision..." Research in the field of behavioral economics has shown that these decisions can be distorted by a phenomenon known as cognitive bias. Furthermore, most decision makers are unaware of these biases. The literature also provides methods for mitigating these biases.
According to (Haselton, Nettle, and Andrews 2005, p. 2) a cognitive bias represents a situation in which "human cognition reliably produces representations that are systematically distorted compared to some aspect of objective reality." Cognitive biases are typically stimulated by emotion and prior belief. The literature reveals large numbers of cognitive biases of which the following three are typical:
1. The rankism bias. According to (Fuller 2011), rankism is simply the idea that persons of higher rank in an organization are better able to assert their authority over persons of lower rank regardless of the decision involved. Rankism frequently occurs in aircraft cockpits. According to (McCreary et al. 1998), rankism was a factor in the famous Tenerife disaster.
2. The complacency bias. According to (Leveson 1995, pp. 54-55), complacency is the disregard for safety and the belief that current safety measures are adequate. According to (Leveson 1995, pp. 54-55), complacency played a role in the Three Mile Island and Bhopal disasters.
3. The optimism bias. According to (Leveson 1995, pp. 54-55), famous physicist Richard Feynman states that NASA "exaggerates the reliability of the system." This is an example of the optimism bias.


Mitigation of Cognitive Bias
Various sources have suggested methods to mitigate the effects of cognitive bias. Following are some of the major ones.
1. Independent Review. The idea of independent review is that advice on decisions should come from an outside body, called by the Columbia Accident Investigation Board (CAIB) (NASA 2003, 227) as the Independent Technical Authority (ITA). This authority must be both organizationally and financially independent of the program in question. That is, the ITA cannot be subordinate to the program manager.
2. Crew Resource Management. Following a period of high accident rate, several airlines have adopted the crew resource management (CRM) method. The primary purposes of this method are first to assure that all crew members do their job properly and secondly that they communicate with the pilot effectively when they have a concern. The impetus for this method was the judgment that many pilots were experiencing the rankism bias or were preoccupied with other tasks and simple did not understand the concerns of the other crew members. The result is that this strategy has been successful, and that the accident rate has fallen.
3. The Premortem. (Kahneman 2011) (pp. 264-265) suggests this method of nudging in an organizational context. This method, like others, requires a certain amount of willingness on the part of the decision-maker to participate in this process. It calls for decision-makers to surround themselves with trusted experts in advance of major decisions. According to Kahneman the primary job of the experts is to present the negative argument against any decision. For example, the decision-maker should not authorize the launch now, perhaps later.

References
Works Cited
Buede, D.M. 2009. The engineering design of systems: Models and methods. 2nd ed. Hoboken, NJ: John Wiley & Sons Inc.
Edwards, W., R.F. Miles Jr., and D. Von Winterfeldt. 2007. Advances In Decision Analysis: From Foundations to Applications. New York, NY: Cambridge University Press.
Fuller, R.W. 2011. "What is Rankism and Why to We "Do" It?" Psychology Today. 25 May 2011. https:/ / www. psychologytoday.com/us/blog/somebodies-and-nobodies/201002/what-is-rankism-and-why-do-we-do-it
Haselton, M.G., D. Nettle, and P.W. Andrews. 2005. "The Evolution of Cognitive Bias." Handbook of Psychology.
INCOSE. 2015. Systems Engineering Handbook, 4th Ed. Edited by D.D. Walden, G.J. Roedler, K.J. Forsberg, R.D. Hamelin, and T.M. Shortell. San Diego, CA: International Council on Systems Engineering (INCOSE).
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
Kahneman, D. 2011. "Thinking Fast and Slow." New York, NY: Farrar, Straus, and Giroux.
Keeney, R.L. and H. Raiffa. 1976. Decisions with Multiple Objectives - Preferences and Value Tradeoffs. New York, NY: Wiley.
Keeney, R.L. 1992. Value-Focused Thinking: A Path to Creative Decision-Making. Cambridge, MA: Harvard University Press.
Keeney, R.L. 1993. "Creativity in MS/OR: Value-focused thinking-Creativity directed toward decision making."
Interfaces, 23(3), p.62-67.
Leveson, N. 1995. Safeware: System Safety and Computers. Reading, MA: Addison Wesley.
McCreary, J., M. Pollard, K. Stevenson, and M.B. Wilson. 1998. "Human Factors: Tenerife Revisited." Journal of Air Transportation World Wide. 3(1).


Murata, A. 2017. "Cultural Difference and Cognitive Biases as a Trigger of Critical Crashes or Disasters - Evidence from Case Studies of Human Factors Analysis." Journal of Behavioral and Brain Science. 7:299-415.
Murata, A., T. Nakamura, and W. Karwowski. 2015. "Influences of Cognitive Biases in Distorting Decision Making and Leading to Critical Unfavorable Incidents." Safety. 1:44-58.
Parnell, G.S. 2009. "Decision Analysis in One Chart," Decision Line, Newsletter of the Decision Sciences Institute. May 2009.
Parnell, G.S., P.J. Driscoll, and D.L Henderson (eds). 2011. Decision Making for Systems Engineering and Management, 2nd ed. Wiley Series in Systems Engineering. Hoboken, NJ: Wiley & Sons Inc.
Parnell, G.S., T. Bresnick, S. Tani, and E. Johnson. 2013. Handbook of Decision Analysis. Hoboken, NJ: Wiley & Sons.
Thaler, Richard H., and Cass R. Sunstein. 2008. Nudge: Improving Decisions About Health, Wealth, and Happiness. New York: Penguin Books.

Primary References
Buede, D.M. 2004. "On Trade Studies." Proceedings of the 14th Annual International Council on Systems Engineering International Symposium, 20-24 June, 2004, Toulouse, France.
Keeney, R.L. 2004. "Making Better Decision Makers." Decision Analysis, 1(4), pp.193-204.
Keeney, R.L. & R.S. Gregory. 2005. "Selecting Attributes to Measure the Achievement of Objectives". Operations Research, 53(1), pp.1-11.
Kirkwood, C.W. 1996. Strategic Decision Making: Multiobjective Decision Analysis with Spreadsheets. Belmont, California: Duxbury Press.

Additional References
Buede, D.M. and R.W. Choisser. 1992. "Providing an Analytic Structure for Key System Design Choices." Journal of Multi-Criteria Decision Analysis, 1(1), pp.17-27.
Felix, A. 2004. "Standard Approach to Trade Studies." Proceedings of the International Council on Systems Engineering (INCOSE) Mid-Atlantic Regional Conference, November 2-4 2004, Arlington, VA.
Felix, A. 2005. "How the Pro-Active Program (Project) Manager Uses a Systems Engineer's Trade Study as a Management Tool, and not just a Decision Making Process." Proceedings of the International Council on Systems Engineering (INCOSE) International Symposium, July 10-15, 2005, Rochester, NY.
Jackson, S. 2017. "Irrationality in Decision Making: A Systems Engineering Perspective." INCOSE Insight, 74. Jackson, S. 2018. "Cognitive Bias: A Game-Changer for Decision Management?" INCOSE Insight, 41-42.
Jackson, S. and A. Harel. 2017. "Systems Engineering Decision Analysis can benefit from Added Consideration of Cognitive Sciences." Systems Engineering. 55, 19 July.
Miller, G.A. 1956. "The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information." Psychological Review, 63(2), p.81.
Ross, A.M. and D.E. Hastings. 2005. "Tradespace Exploration Paradigm." Proceedings of the International Council on Systems Engineering (INCOSE) International Symposium, July 10-15, 2005, Rochester, NY.
Sproles, N. 2002. "Formulating Measures of Effectiveness." Systems Engineering", 5(4), p. 253-263.
Silletto, H. 2005. "Some Really Useful Principles: A new look at the scope and boundaries of systems engineering." Proceedings of the International Council on Systems Engineering (INCOSE) International Symposium, July 10-15, 2005, Rochester, NY.


Ullman, D.G. and B.P. Spiegel. 2006. "Trade Studies with Uncertain Information." Proceedings of the International Council on Systems Engineering (INCOSE) International Symposium, July 9-13, 2006, Orlando, FL.

Requirements Management

 Lead Author:
 Tami Katz
 Contributing Authors:
 Lou Wheatcraft and Mike Ryan
-
Requirements management (RM) is performed to ensure alignment of requirements with other representations, analyses, and system artifacts generated across the life cycle. The scope of RM includes management of artifacts from the Concept Definition processes: Business or Mission Analysis and Stakeholder Needs Definition, as well as traceability to other systems engineering artifacts as described in System Requirements Definition process. RM includes providing an understanding of the requirements, an understanding of the needs from which they originated, establishing a baseline, communicating the needs and requirements, managing changes, providing status, and maintaining traceability with the rest of the artifacts of System Definition (INCOSE NRM 2022).

Purpose and Definition
As shown in Figure 1, RM is a cross-cutting series of activities that involve managing the sets of needs and the sets of design input requirements, including managing the needs and requirement definition activities, baselining the needs and requirements, communicating the needs and requirements, managing the flow down (allocation and budgeting) of requirements from one level to another, managing interactions (interfaces) both internal and external to the SoI, managing bidirectional traceability, and managing the design and system verification and validation artifacts, and managing change (INCOSE GtNR 2022).




While needs and requirements development addresses elicitation and creation of the needs and requirements as described in System Requirements Definition, the RM activities address how needs and requirements are managed across the project life cycle. These activities leverage other systems engineering management processes including Configuration Management (CM), Interface Management, Systems Analysis, and Information Management.

Process Approach
RM begins at the beginning of a project addressing the management of needs and requirements across the life cycle, ensuring the data and information from the development life cycle activities are captured, configuration controlled, and communicated. Enablers for RM include organizational processes, tools, and trained personnel in those processes and tools.

Configuration Management and Change Control
RM is closely tied to CM activities associated with baseline management and control of the sets of needs and requirements and other related artifacts. When the sets of needs and requirements have been defined, assessed, and approved, they are baselined. The baseline allows the project to define and manage budgets and schedules as well as analyze and understand the impact (technical, cost, and schedule) of any proposed changes.
There are several reasons needs and requirements could change:
 changing stakeholder needs, requirements, expectations,
 customer budget and schedule changes,
 emerging threats and risks,
 re-allocation of system performance, and
 changing operational environments.


Note that due to the iterative and recursive nature of SE across the life cycle there is an expectation of changes to needs and requirements, particularly early in the development life cycle, as requirements are allocated, budgeted, and requirements defined for lower-level architecture entities. This drives the need for an established change control process early in the effort.
Changes to needs and requirements can include modifications, additions, or deletions. Once a need or requirement is baselined, changes must include rationale why the change is necessary, which helps with impact assessment of the change. Impacts could include the cost of making changes at multiple levels in the architecture hierarchy (including suppliers), as well as the cost/schedule/technical impacts associated with any work-in-process updates (design, verification, etc.). Impacts to related needs, requirements, and interfaces also need to be considered when making changes. Traceability, described below, is a powerful enabler to support assessment and impact of need and requirement changes.

Monitoring and Control
The monitoring process uses the Measurement process to enable situational awareness of the status and quality of the RM process activities, including status of needs and requirement definition activities, incorporation of changes, and progress towards obtaining objective evidence during System Verification and System Validation that the needs and requirements have been met.
Controlling the needs and requirements involves actions taken to ensure the integrated set of needs reflect the life cycle concepts, MGOs, and measures from which they were derived, and that the requirements continue to address the intent of the integrated set of needs from which they were transformed. Monitoring and controlling also includes resolving unknowns (To Be Resolved (TBR), To Be Determined (TBD), etc.), addressing the quality and correctness of the needs and requirements, and managing changes to the needs and requirements.
Several types of metrics can be used as part of Monitoring and Controlling:
 number of needs,
 number of requirements,
 number of needs and requirements with TBDs or TBRs
 needs and requirements not traced to a source,
 status of system verification, and
 status of system validation,
The project must define which metrics will be used to monitor and control the needs and requirements as well as choose tools that enable these metrics to be defined and managed as well as tools that can communicate these metrics to the project team. The ability to monitor these metrics is supported through the use of attributes that provide additional content for the need or requirement. Example attributes to support requirements management include Rationale, Status, Criticality, Priority, Stability, and Responsible Person or Owner. Reference System Requirements Definition for more details on defining attributes.


Requirement Management Tools
There are many tools available to provide a supporting infrastructure for needs and requirements management; the best choice is the one that matches the needs and processes of the project or enterprise. Desired capabilities and features of RM tools include definition, collaboration, change control, and traceability to other project data (INCOSE NRM 2022). A requirements management tool (RMT) can enable a project's success by providing several capabilities:
 capturing the needs, requirements, and associated attributes,
 capturing requirement traceability to other data,
 communication of metrics and status,
 management of version control and changes, and
 facilitation of change impact analysis.
Modern RMTs vary in capabilities and costs. Pointers for finding various RMTs and other SE tools can be found in the Primary References section.
It is recommended that RMTs enable the sharing of data and information with other tools in the project toolset as part of a larger digital engineering ecosystem, as highlighted in Figure 2; this ability helps to maximize the ability to ensure consistency with other project data and artifacts generated across the life cycle, which is critical to being able to establish the Authoritative Source of Truth (ASoT) (INCOSE NRM 2022).

RMTs are most effective if they are setup with a common project schema, ontology, and templates, and team members are trained in their use before project initiation, ensuring the project team spends their time on the definition and management of needs and requirements and not on extensive development of the tool infrastructure.

Managing Traceability
As described in System Requirements Definition, traceability can be established between the needs and requirements and other sets of data and artifacts across the life cycle:
 operational Scenarios,
 risks,
 related requirements, and
 verification/validation artifacts.
RM processes are used to monitor traceability of data and ensure they are maintained over the system life cycle. This is enabled through use of toolsets that allow linkages of the needs and requirements to the other data within a digital ecosystem as shown in Figure 2.


Requirements Management Planning
The RM activities involve project resources and must be planned as part of the overall project and systems engineering planning efforts. A Requirements Management Plan (RMP) can be used to define and communicate scope and processes for managing needs and requirements across the SoI life cycle. An RMP keeps all team members and stakeholders on the same page. For smaller and less complex projects, the needs and requirements management process could be captured within the program or project management plan (PMP) or systems engineering management plan (SEMP). For larger and more complex projects, it is recommended a standalone RMP be developed.
There are several topics addressed within an RMP:
 Who will be responsible for the RM activities and deliverables?
 What tool(s) will be used?
 How will the project team interact with the stakeholders?
 What activities are involved in life cycle concepts and needs definition?
 What activities are involved in requirements definition?
 How will the needs and requirements be assessed for quality and correctness?
 How will changes be managed and controlled?
 What types of traceability will be used?
 What is the hierarchy of the sets of needs and requirements and how will it be managed?
 What attributes will be used?
 How will metrics need to be defined and reported?
 How are TBRs and TBDs managed?
Projects should plan for the RM approach based on the scale and complexity of the project and system to be developed and generate an RMP accordingly, and then update the plan if the processes evolve. Note that some projects are required to deliver their RMP to a customer, which may require additional content; however, do not generate a plan merely because a customer directed it, the development of an RMP is critical to project success. Proper planning can ensure desired outcomes when implementing an RM process.

References
Works Cited
INCOSE. 2022. INCOSE Needs and Requirements Manual (NRM), version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2022. INCOSE Guide to Needs and Requirements (GtNR), version 1. INCOSE-TP-2021-003-01.

Primary References
INCOSE. 2022. INCOSE Needs and Requirements Manual (NRM), version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2022. INCOSE Guide to Needs and Requirements (GtNR), version 1. INCOSE-TP-2021-003-01. INCOSE and PPI Systems Engineering Tools Database [1].
Pohl, K. (2010). Requirements Engineering Fundamentals, Principles, and Techniques.


Additional References
none

References
[1] https://www.ppi-int.com/resources/setdb/


Risk Management

 Lead Authors:
 Ed Conrow, Ray Madachy, and Garry Roedler
 Contributing Authors:
 Victor Bertolazzo, Leighton Johnson, Bob Parro, Jack Stein, and Richard Turner
-
The purpose of risk management is to reduce risks to an acceptable level before they occur, throughout the life of the product or project. Risk management is a continuous, forward-looking process that is applied to anticipate and avert risks that may adversely impact the project, and can be considered both a project management and a systems engineering process. A balance must be achieved on each project in terms of overall risk management ownership, implementation, and day-to-day responsibility between these two top-level processes.
For the SEBoK, risk management falls under the umbrella of Systems Engineering Management, though the wider body of risk literature is explored below.

Risk Management Process Overview
Risk is a measure of the potential inability to achieve overall program objectives within defined cost, schedule, and technical constraints.
The Risk Management Process section of the INCOSE Systems Engineering Handbook: A Guide for Systems Life Cycle Processes and Activities, 5th Edition, provides a comprehensive overview of risk management which is intended to be consistent with the Risk Management Process section of ISO 15288:2023. In this section of the INCOSE handbook two prominent risk concepts which may be encountered in a systems engineering project are discussed and tied to their respective internationally accepted definitions of risk (INCOSE 2023, pg. 84):
 The effect of uncertainty on objectives, see ISO/IEC/IEEE 15288, ISO 31073, ISO/IEC/IEEE 16085, ISO 31000, ISO 27000
 The combination of the probability of occurrence of harm and the severity of that harm, see ISO Guide 51, ISO 22367, ISO 14971
The first definition, which includes a note-to-entry stating that "effects may be negative or positive," is different from the second in that the second definition accommodates only negative effects. Also, it is important to note that the first definition ties risks to specified objectives, while the second ties risks to identified types of potential harm without regard to objectives. Thus, the second definition is used extensively in safety engineering and in projects that require compliance to safety and risk management standards and regulations intended for the protection of public health, safety, and security.
A long-established approach to risk management is to identify and manage a set of individual risks for the project, while characterizing or expressing each individual risk as the combination of the following two components (DAU 2003a; INCOSE 2023, pg. 84-85):
1. the probability (or likelihood) of failing to achieve a particular outcome


2. the consequences (or impact) of failing to achieve that outcome
Among the benefits of this approach is that it supports the need for simple project risk metrics and familiar visual aids such the risk matrix (or risk cube). However, in practice, it is usually necessary to select and utilize a combination of various methods, techniques, and tools as deemed necessary. International standard ISO 31010:2019 Risk management - risk assessment techniques describes and provides guidance on selecting and applying 41 risk assessment techniques, including the risk matrix.
New techniques able to identify and better address undesirable outcomes associated with highly complex (and unpredictable) system behaviors, e.g., System Theoretic Process Analysis (STPA), are emerging and gaining international acceptance (SAE, 2025).
In the domain of catastrophic risk analysis, risk has three components: (1) threat, (2) vulnerability, and (3) consequence (Willis et al. 2005).
Risk management involves defining a risk management strategy, identifying and analyzing risks, treating selected risks, and monitoring the progress in reducing risks to an acceptable level (SEI 2010; DoD 2023; DAU 2003a; DAU 2003b; PMI 2021). The SE community, as a general rule, has recommended that "positive effects" of risks identified using the "effect of uncertainty on objectives" definition of risk be referred to as "opportunities". Opportunity and opportunity management is discussed in the "Opportunity and Opportunity Management" section below.
The SE risk management process includes the following activities:
 risk management planning
 risk identification
 risk analysis
 risk treatment
 risk monitoring
ISO/IEC/IEEE 16085 provides a detailed set of risk management activities and tasks which can be utilized in a risk management process aligned with ISO 31000, ISO 31073, and ISO 9001, which includes risk-based preventive action requirements.

Risk Management Planning
Risk management planning establishes and maintains a strategy for identifying, analyzing, treating, and monitoring risks within the project. The strategy, both the process and its implementation, is documented in a risk management plan (RMP).
The risk management process and its implementation should be tailored to each project and updated as appropriate throughout the life of the project. The RMP should be transmitted in an appropriate means to the project team and key stakeholders.
The risk management strategy includes as necessary the risk management process of all supply chain suppliers and describes how risks from all suppliers will be raised to the next level(s) for incorporation in the project risk process. The context description for the risk management process should include a description of stakeholders' perspectives,
risk categories, and a description (perhaps by reference) of the technical and managerial objectives, assumptions and
constraints. The risk categories include the relevant technical areas of the system and facilitate identification of risks across the life cycle of the system. As noted in ISO 31000, the aim of this step is to generate a comprehensive list of risks based on those events that might create, enhance, prevent, degrade, accelerate or delay the achievement of objectives.
The RMP should contain key risk management information; Conrow (2003) identifies the following as key components of RMP:
 a project summary
 project acquisition and contracting strategies


 key definitions
 list of key documents
 process steps
 inputs, tools and techniques, and outputs per process step
 linkages between risk management and other project processes
 key ground rules and assumptions
 risk categories
 buyer and seller roles and responsibilities
 organizational and personnel roles and responsibilities
Generally, the level of detail in an RMP is risk-driven, with simple plans for low risk projects and detailed plans for high risk projects.

Risk Identification
Risk identification is the process of examining the project products, processes, and requirements to identify and document candidate risks. Risk identification should be performed continuously at the individual level as well as through formerly structured events at both regular intervals and following major program changes (e.g., project initiation, re-baselining, change in acquisition phase, etc.).
Conrow (2009) states that systems engineers should use one or more top-level approaches (e.g., work breakdown structure (WBS), key processes evaluation, key requirements evaluation, etc.) and one or more lower-level approaches (e.g., affinity, brainstorming, checklists and taxonomies, examining critical path activities, expert judgment, Ishikawa diagrams, etc.) in risk identification. The top and lower-level approaches are essential but there is no single accepted method - all approaches should be examined and used as appropriate.
Candidate risk management documentation should include the following items where possible, as identified by Conrow (2003 p.198):
 risk title
 structured risk description
 applicable risk categories
 potential root causes
 relevant historical information
 responsible individual and manager
It is important to use structured risk descriptions such as an if-then format: if (an event occurs--trigger), then (an outcome or affect occurs). Another useful construct is a condition (that exists) that leads to a potential consequence (outcome) (Gluch 1994). These approaches help the analyst to better think through the nature of the risk.

Risk Analysis
Risk analysis is the process of systematically evaluating each identified risk to estimate the probability of occurrence (likelihood) and consequence of occurrence (impact), and then converting the results to a corresponding risk level or rating.
There is no best analysis approach for a given risk category. Risk scales and a corresponding matrix, simulations, and probabilistic risk assessments are often used for technical risks, while decision trees, simulations and payoff matrices are used for cost risk; and simulations are used for schedule risk. Risk analysis approaches are sometimes grouped into qualitative and quantitative methods. A structured, repeatable methodology should be used in order to increase analysis accuracy and reduce uncertainty over time.
Once the risk level for each risk is determined, the risks need to be prioritized. Prioritization is typically performed by risk level (e.g., low, medium, high), risk score (the pair of max (probability), max (consequence) values), and


other considerations such as time-frame, frequency of occurrence, and interrelationship with other risks (Conrow 2003, pp. 187-364).
Widely used quantitative methods include decision trees and the associated expected monetary value analysis (Clemen and Reilly 2001), modeling and simulation (Law 2007; Mun 2010; Vose 2000), payoff matrices (Kerzner 2009, p. 747-751), probabilistic risk assessments (Kumamoto and Henley 1996; NASA 2002), and other techniques. Risk prioritization can directly result from the quantitative methods employed. For quantitative approaches, care is needed in developing the model structure, since the results will only be as good as the accuracy of the structure, coupled with the characteristics of probability estimates or distributions used to model the risks (Law 2007; Evans, Hastings, and Peacock 2011).
Descriptions and application guidance for a number of the above mentioned, as well as additional, risk assessment methods and techniques, may be found among the 41 contained in ISO 31010. Depending on the project environment and objectives, it may be beneficial to devote resources to researching, developing, and staying abreast of new and emerging analysis and assessment methods, techniques, and tools.

Risk Treatment
Risk treatment is the process that identifies and selects options and implements the desired option to reduce a risk to an acceptable level, given program constraints (budget, other resources) and objectives (DAU 2003a, 20-23, 70-78).
The risk treatment strategy selected is the combination of the most desirable risk treatment option coupled with a suitable implementation approach for that option (Conrow 2003). Risk treatment options include assumption, avoidance, control (mitigation), and transfer. All four options should be evaluated and the best one chosen for each risk. An appropriate implementation approach is then chosen for that option. Hybrid strategies can be developed that include more than one risk treatment option, but with a single implementation approach.
Additional risk treatment strategies can also be developed for a given risk and either implemented in parallel with the primary strategy or be made a contingent strategy that is implemented if a particular trigger event occurs during the execution of the primary strategy. Often, this choice is difficult because of uncertainties in the risk probabilities and impacts. In such cases, buying information to reduce risk uncertainty via prototypes, benchmarking, surveying, modeling, etc. will clarify risk treatment decisions (Boehm 1981).

Risk Monitoring
Risk monitoring is used to evaluate the effectiveness of risk treatment activities against established metrics and provide feedback to the other risk management process steps. Risk monitoring results may also provide a basis to (a) update risk treatment plans (RTPs), and/or the appropriate part(s) of the RMP, and (b) develop additional risk treatment options and approaches, and re-analyze risks. In some cases, monitoring results may also be used to identify new risks, revise an existing risk with a new facet, or revise some aspects of risk management planning (DAU 2003a, p. 20). Some risk monitoring approaches that can be applied include earned value, program metrics, technical performance measures (TPMs), schedule analysis, and variations in risk level. Risk monitoring approaches should be updated and evaluated at the same time and WBS level; otherwise, the results may be inconsistent.

Opportunity and Opportunity Management
In principle, opportunity management is the duality to risk management, with two components: (1) probability of achieving an improved outcome and (2) impact of achieving the outcome. Thus, both should be addressed in risk management planning and execution. In practice, however, a positive opportunity exposure will not match a negative risk exposure in utility space, since the positive utility magnitude of improving an expected outcome is considerably less than the negative utility magnitude of failing to meet an expected outcome (Canada 1971; Kahneman-Tversky 1979). Further, since many opportunity-management initiatives have failed to anticipate serious side effects, all


candidate opportunities should be thoroughly evaluated for potential risks to prevent unintended consequences from occurring.
In addition, while opportunities may provide potential benefits for the system or project, each opportunity pursued may have associated risks that detract from the expected benefit. This may reduce the ability to achieve the anticipated effects of the opportunity, in addition to any limitations associated with not pursing an opportunity.

Integrated Risk Management (IRM) and Linkages to Other Systems Engineering Management Topics
Per ISO 31000:2018, "integrating risk management with all organizational processes improves the performance of risk management while gaining efficiencies". Clause 7 of ISO/IEC/IEEE 16085:2021 provides a methodical approach for the integration of risk management and "risk-based thinking" into all systems engineering life cycle processes.
Within Systems Engineering Management the practices of IRM and establishing linkages between risk management and other SE life cycle processes has been an area of interest for a number of decades. For example: The measurement process provides indicators for risk analysis. Project planning involves the identification of risk and planning for stakeholder involvement. Project assessment and control monitors project risks. Decision management evaluates alternatives for selection and treatment of identified and analyzed risks. With respect to linkages and interrelationship between systems engineering and project management, considerable work is documented the PMI-INCOSE-MIT collaborative Wiley book publication Integrating Program Management and Systems Engineering: Methods, Tools, and Organizational Systems for Improving Performance, (Rebentisch 2017).

Practical Considerations
Key pitfalls and good practices related to systems engineering risk management are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in performing risk management are below in Table 1.

Table 1. Risk Management Pitfalls. (SEBoK Original)
Name	Description

Process	 Over-reliance on the process side of risk management without sufficient attention to human and organizational behavioral Over-Reliance		considerations.
Lack of	 Failure to implement risk management as a continuous process. Risk management will be ineffective if it's done just to Continuity		satisfy project reviews or other discrete criteria. (Charette, Dwinnell, and McGarry 2004, 18-24 and Scheinin 2008).
Tool and	 Over-reliance on tools and techniques, with insufficient thought and resources expended on how the process will be Technique		implemented and run on a day-to-day basis.
Over-Reliance

Lack of Vigilance  A comprehensive risk identification will generally not capture all risks; some risks will always escape detection, which reinforces the need for risk identification to be performed continuously.
Automatic	 Automatically select the risk treatment mitigation option, rather than evaluating all four options in an unbiased fashion and Mitigation		choosing the "best" option.
Selection


Sea of Green	 Tracking progress of the risk treatment plan, while the plan itself may not adequately include steps to reduce the risk to an acceptable level. Progress indicators may appear "green" (acceptable) associated with the risk treatment plan: budgeting, staffing, organizing, data gathering, model preparation, etc. However, the risk itself may be largely unaffected if the treatment strategy and the resulting plan are poorly developed, do not address potential root cause(s), and do not incorporate actions that will effectively resolve the risk.
Band-Aid Risk	 Treating risks (e.g., interoperability problems with changes in external systems) by patching each instance, rather than Treatment		addressing the root cause(s) and reducing the likelihood of future instances.


Good Practices
Some good practices gathered from the references are below in Table 2.

Table 2. Risk Management Good Practices. (SEBoK Original)
Name	Description
Top Down and	 Risk management should be both "top down" and "bottom up" in order to be effective. The project manager or deputy need Bottom Up		to own the process at the top level, but risk management principles should be considered and used by all project personnel.
Early Planning	 Include the planning process step in the risk management process. Failure to adequately perform risk planning early in the project phase contributes to ineffective risk management.
Risk Analysis	 Understand the limitations of risk analysis tools and techniques. Risk analysis results should be challenged because Limitations		considerable input uncertainty and/or potential errors may exist.
Robust Risk	 The risk treatment strategy should attempt to reduce both the probability and consequence of occurrence terms. It is also Treatment		imperative that the resources needed to properly implement the chosen strategy be available in a timely manner, else the risk Strategy		treatment strategy, and the entire risk management process, will be viewed as a "paper tiger."
Structured Risk	 Risk monitoring should be a structured approach to compare actual vs. anticipated cost, performance, schedule, and risk Monitoring		outcomes associated with implementing the RHP. When ad-hoc or unstructured approaches are used, or when risk level vs.
time is the only metric tracked, the resulting risk monitoring usefulness can be greatly reduced.

Update Risk	 The risk management database (registry) should be updated throughout the course of the program, striking a balance Database		between excessive resources required and insufficient updates performed. Database updates should occur at both a tailored,
regular interval and following major program changes.


References
Works Cited
Boehm, B. 1981. Software Engineering Economics. Upper Saddle River, NJ, USA: Prentice Hall.
Boehm, B. 1989. Software Risk Management. Los Alamitos, CA; Tokyo, Japan: IEEE Computer Society Press: 115-125.
Canada, J.R. 1971. Intermediate Economic Analysis for Management and Engineering. Upper Saddle River, NJ, USA: Prentice Hall.
Carr, M., S. Konda, I. Monarch, F. Ulrich, and C. Walker. 1993. Taxonomy-based risk identification. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-93-TR-6.
Charette, R., L. Dwinnell, and J. McGarry. 2004. "Understanding the roots of process performance failure."
CROSSTALK: The Journal of Defense Software Engineering (August 2004): 18-24. Clemen, R., and T. Reilly. 2001. Making hard decisions. Boston, MA, USA: Duxbury.
Conrow, E. 2003. Effective Risk Management: Some Keys to Success, 2nd ed. Reston, VA, USA: American Institute of Aeronautics and Astronautics (AIAA).


Conrow, E. 2008. "Risk analysis for space systems." Paper presented at Space Systems Engineering and Risk Management Symposium, 27-29 February, 2008, Los Angeles, CA, USA.
Conrow, E. and P. Shishido. 1997. "Implementing risk management on software intensive projects." IEEE Software.
14(3) (May/June 1997): 83-9.
DAU. 2003a. Risk Management Guide for DoD Acquisition: Fifth Edition, version 2. Ft. Belvoir, VA, USA: Defense Acquisition University (DAU) Press.
DAU. 2003b. U.S. Department of Defense extension to: A guide to the project management body of knowledge (PMBOK(R) guide), first edition. Version 1. 1st ed. Ft. Belvoir, VA, USA: Defense Acquisition University (DAU) Press.
DoD. 2023. Risk, Issue, and Opportunity Management Guide for Defense Acquisition Programs. Washington, DC, USA: Office of the Deputy Assistant Secretary of Defense for Systems Engineering/Department of Defense.
Evans, M., N. Hastings, and B. Peacock. 2000. Statistical Distributions, 3rd ed. New York, NY, USA: Wiley-Interscience.
Forbes, C., M. Evans, N. Hastings, and B. Peacock. 2011. "Statistical Distributions," 4th ed. New York, NY, USA.
Gallagher, B., P. Case, R. Creel, S. Kushner, and R. Williams. 2005. A taxonomy of operational risk. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-2005-TN-036.
Gluch, P. 1994. A Construct for Describing Software Development Risks. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-94-TR-14.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version 5. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-05.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
Kerzner, H. 2009. Project Management: A Systems Approach to Planning, Scheduling, and Controlling. 10th ed. Hoboken, NJ, USA: John Wiley & Sons.
Kahneman, D., and A. Tversky. 1979. "Prospect theory: An analysis of decision under risk." Econometrica. 47(2) (Mar., 1979): 263-292.
Kumamoto, H. and E. Henley. 1996. Probabilistic Risk Assessment and Management for Engineers and Scientists,
2nd ed. Piscataway, NJ, USA: Institute of Electrical and Electronics Engineers (IEEE) Press. Law, A. 2007. Simulation Modeling and Analysis, 4th ed. New York, NY, USA: McGraw Hill. Mun, J. 2010. Modeling Risk, 2nd ed. Hoboken, NJ, USA: John Wiley & Sons.
NASA. 2002. Probabilistic Risk Assessment Procedures Guide for NASA Managers and Practitioners, version 1.1. Washington, DC, USA: Office of Safety and Mission Assurance/National Aeronautics and Space Administration (NASA).
PMI. 2021. A Guide to the Project Management Body of Knowledge (PMBOK(r) Guide), 7th ed. Newtown Square, PA, USA: Project Management Institute (PMI).
Rebentisch, E. 2017. Integrating Program Management and Systems Engineering: Methods, Tools, and Organizational Systems for Improving Performance. Hoboken, NJ, USA: John Wiley & Sons.
SAE. 2025. System Theoretic Process Analysis (STPA) Standard for All Industries, Warrendale, PA, USA: SAE International (SAE). SAE J3307_202503.
Scheinin, W. 2008. "Start Early and Often: The Need for Persistent Risk Management in the Early Acquisition Phases." Paper presented at Space Systems Engineering and Risk Management Symposium, 27-29 February 2008, Los Angeles, CA, USA.


SEI. 2010. Capability Maturity Model Integrated (CMMI) for Development, version 1.3. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).
Vose, D. 2000. Quantitative Risk Analysis, 2nd ed. New York, NY, USA: John Wiley & Sons.
Willis, H.H., A.R. Morral, T.K. Kelly, and J.J. Medby. 2005. Estimating Terrorism Risk. Santa Monica, CA, USA: The RAND Corporation, MG-388.

Primary References
Boehm, B. 1981. Software Engineering Economics. Upper Saddle River, NJ, USA:Prentice Hall.
Boehm, B. 1989. Software Risk Management. Los Alamitos, CA; Tokyo, Japan: IEEE Computer Society Press, p. 115-125.
Conrow, E.H. 2003. Effective Risk Management: Some Keys to Success, 2nd ed. Reston, VA, USA: American Institute of Aeronautics and Astronautics (AIAA).
DoD. 2023. Risk, Issue, and Opportunity Management Guide for Defense Acquisition Programs. Washington, DC, USA: Office of the Deputy Assistant Secretary of Defense for Systems Engineering/Department of Defense.
SEI. 2010. Capability Maturity Model Integrated (CMMI) for Development, version 1.3. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).

Additional References
Canada, J.R. 1971. Intermediate Economic Analysis for Management and Engineering. Upper Saddle River, NJ, USA: Prentice Hall.
Carr, M., S. Konda, I. Monarch, F. Ulrich, and C. Walker. 1993. Taxonomy-based risk identification. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-93-TR-6.
Charette, R. 1990. Application Strategies for Risk Management. New York, NY, USA: McGraw-Hill.
Charette, R. 1989. Software Engineering Risk Analysis and Management. New York, NY, USA: McGraw-Hill (MultiScience Press).
Charette, R., L. Dwinnell, and J. McGarry. 2004. "Understanding the roots of process performance failure."
CROSSTALK: The Journal of Defense Software Engineering (August 2004): 18-24. Clemen, R., and T. Reilly. 2001. Making hard decisions. Boston, MA, USA: Duxbury.
Conrow, E. 2010. "Space program schedule change probability distributions." Paper presented at American Institute of Aeronautics and Astronautics (AIAA) Space 2010, 1 September 2010, Anaheim, CA, USA.
Conrow, E. 2009. "Tailoring risk management to increase effectiveness on your project." Presentation to the Project Management Institute, Los Angeles Chapter, 16 April, 2009, Los Angeles, CA.
Conrow, E. 2008. "Risk analysis for space systems." Paper presented at Space Systems Engineering and Risk Management Symposium, 27-29 February, 2008, Los Angeles, CA, USA.
Conrow, E. and P. Shishido. 1997. "Implementing risk management on software intensive projects." IEEE Software.
14(3) (May/June 1997): 83-9.
DAU. 2003a. Risk Management Guide for DoD Acquisition: Fifth Edition. Version 2. Ft. Belvoir, VA, USA: Defense Acquisition University (DAU) Press.
DAU. 2003b. U.S. Department of Defense extension to: A guide to the project management body of knowledge (PMBOK(R) guide), 1st ed. Ft. Belvoir, VA, USA: Defense Acquisition University (DAU) Press.
Dorofee, A., J. Walker, C. Alberts, R. Higuera, R. Murphy, and R. Williams (eds). 1996. Continuous Risk Management Guidebook. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU).


Gallagher, B., P. Case, R. Creel, S. Kushner, and R. Williams. 2005. A taxonomy of operational risk. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-2005-TN-036.
Gluch, P. 1994. A Construct for Describing Software Development Risks. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie-Mellon University (CMU), CMU/SEI-94-TR-14.
Haimes, Y.Y. 2009. Risk Modeling, Assessment, and Management. Hoboken, NJ, USA: John Wiley & Sons, Inc.
Hall, E. 1998. Managing Risk: Methods for Software Systems Development. New York, NY, USA: Addison Wesley Professional.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version 5. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-05.
ISO. 2018. Risk Management Guidelines. Geneva, Switzerland: International Organization for Standardization (ISO), ISO 31000:2018.
ISO/IEC. 2019. Risk management-Risk assessment techniques. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), ISO/IEC 31010:2019.
ISO/IEC/IEEE. 2021. Systems and Software Engineering -- Life cycle processes -- Risk management. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 16085:2021.
ISO. 2022. Space Systems -- Programme management -- Risk Management. Geneva, Switzerland: International Organization for Standardization (ISO), ISO 17666:2025.
Jones, C. 1994. Assessment and Control of Software Risks. Upper Saddle River, NJ, USA: Prentice-Hall.
Kahneman, D. and A. Tversky. 1979. "Prospect theory: An analysis of decision under risk." Econometrica. 47(2) (Mar., 1979): 263-292.
Kerzner, H. 2009. Project Management: A Systems Approach to Planning, Scheduling, and Controlling, 10th ed. Hoboken, NJ: John Wiley & Sons.
Kumamoto, H., and E. Henley. 1996. Probabilistic Risk Assessment and Management for Engineers and Scientists,
2nd ed. Piscataway, NJ, USA: Institute of Electrical and Electronics Engineers (IEEE) Press. Law, A. 2007. Simulation Modeling and Analysis, 4th ed. New York, NY, USA: McGraw Hill.
MITRE. 2012. Systems Engineering Guide to Risk Management. Available online: http:/ / www. mitre. org/ work/
systems_engineering/ guide/ acquisition_systems_engineering/ risk_management/ . Accessed on July 7, 2012. Page last updated on May 8, 2012.
Mun, J. 2010. Modeling Risk, 2nd ed. Hoboken, NJ, USA: John Wiley & Sons.
NASA. 2002. Probabilistic Risk Assessment Procedures Guide for NASA Managers and Practitioners, version 1.1. Washington, DC, USA: Office of Safety and Mission Assurance/National Aeronautics and Space Administration (NASA).
PMI. 2021. A Guide to the Project Management Body of Knowledge (PMBOK(r) Guide), 7th ed. Newtown Square, PA, USA: Project Management Institute (PMI).
Rebentisch, E. 2017. Integrating Program Management and Systems Engineering: Methods, Tools, and Organizational Systems for Improving Performance. Hoboken, NJ, USA: John Wiley & Sons.
SAE. 2025. System Theoretic Process Analysis (STPA) Standard for All Industries, Warrendale, PA, USA: SAE International (SAE). SAE J3307_202503.
Scheinin, W. 2008. "Start Early and Often: The Need for Persistent Risk Management in the Early Acquisition Phases." Paper presented at Space Systems Engineering and Risk Management Symposium, 27-29 February 2008, Los Angeles, CA, USA.


USAF. 2005. SMC systems engineering primer & handbook: Concepts, processes, and techniques, 3rd ed. Los Angeles, CA, USA: Space & Missile Systems Center/U.S. Air Force (USAF).
USAF. 2014. ''SMC Risk Management Process Guide. Version 2. Los Angeles, CA, USA: Space & Missile Systems Center/U.S. Air Force (USAF).
Vose, D. 2000. Quantitative Risk Analysis. 2nd ed. New York, NY, USA: John Wiley & Sons.
Willis, H.H., A.R. Morral, T.K. Kelly, and J.J. Medby. 2005. Estimating Terrorism Risk. Santa Monica, CA, USA: The RAND Corporation, MG-388.

Configuration Management

 Lead Authors:
 John Metcalf, Philip Hallenbeck, and Sandrine Gonthier
 Contributing Author:
 Garry Roedler
-
Configuration management (CM) helps teams keep track of changes to a system over its life cycle-ensuring that what's built matches what was planned, and that everyone stays aligned as updates occur. Simply put, CM is about maintaining a clear, accurate picture of a system as it evolves-tracking changes, managing versions, and avoiding confusion.
As stated in ISO/IEC/IEEE 15288 (6.3.5.1): The purpose of the configuration management process is to manage system and system element configurations over their life cycle. The INCOSE SE Handbook describes CM as a key technical management process, supported by defined roles, resources, and controls. In this article, we may refer to a "system" or "product" depending on the application of the CM process.

Fundamental Concepts
CM and main CM concepts are defined slightly differently according to the various standards. The objective of this article is to provide a general understanding of CM based on common and general principles, usually aligned with INCOSE SE Handbook, ISO 10007, and SAE EIA-649C standards. Before entering in the description of the CM process, it is important to define a few concepts (below).

Applicability
CM applies to any kind of system; any product or process can be considered a system. Therefore, CM addresses hardware, software, services, systems, and systems of systems with equal relevance, or any combination of the above. CM is applicable regardless of the complexity of the system in question.
CM applies throughout the entire life cycle of the system. CM applies to all system life-cycle models and development approaches, with adequate tailoring.
In addition, to master the configuration of a system of interest, the configuration of the associated enabling systems should also be taken into account.


Configuration, Configuration Items, and Configuration Information
The configuration refers to the interrelated functional and physical characteristics outlined in configuration information, as defined by ISO 10007. The system and its individual elements, which fall under Configuration Management, are known as Configuration Items. Their functional and physical characteristics constitute their configuration information.
Configuration information encompasses the comprehensive data necessary to describe and document Configuration Items throughout the entire system life cycle. This includes artifacts produced during the execution of the technical processes, such as requirement specifications, architecture descriptions, design descriptions, and user documentation, as referenced in ISO/IEC/IEEE 15289.
Configuration information is understood as structured and contextualized data related to the system and its artifacts. While data serves as the raw input, information represents the processed output that adds context, relevance, and purpose. The collective set of configuration information associated with a system encapsulates all pertinent elements needed to document its characteristics.

CM fundamental objectives
The objectives of Configuration Management (CM) are to provide means to guarantee consistency between the system and its configuration information, ensure the integrity and traceability of this information and its changes over time, and facilitate reproducibility. These three objectives collectively enable the capabilities to define, realize, transition, operate, maintain, and dispose of the system.

How do you distinguish Configuration Management (CM) from Information Management (IM)?
Configuration Management (CM) and Information Management (IM) processes are interconnected; however, CM focuses on the relevance of information related to the system and its evolution over time, while IM concentrates on the management of the information itself. This includes its generation, collection, validation, transformation, dissemination, and disposal, overseeing the entire life cycle of the information.
CM is concerned with the significance and applicability of information in relation to the specific system elements with which it is associated, referred to as configuration information. While all information can be managed, only configuration information is subject to configuration management.
The CM and IM processes are complementary and closely aligned with the objective of ensuring traceability.

Configuration Management System
To ensure the CM process activities, a dedicated Configuration Management system to enable and support CM.

Process Overview
The Configuration Management process relies on appropriate processes, resources, and controls, to establish and maintain an authoritative source of truth on system configuration.
The CM process consists of activities that are widely used in key standards and references, including ISO/IEC/IEEE 15288, SAE EIA 649, and ISO 10007. The names of these activities may differ through various norms and standards, and in this article, the terms used are:
 Configuration Management Planning and Management
 Configuration Identification
 Configuration Change Management
 Configuration Status Accounting


 Configuration Verification and Audit.
The benefits of using the CM process are maximized when all five activities are planned and executed. These activities are not strictly sequential; rather, they are interrelated and may be applied concurrently and iteratively as needed throughout the system life cycle.


CM Planning and Management
This first activity involves defining the scope and organization of CM tasks. It is considered good practice to formalize the results of this activity in a dedicated CM plan that guides implementation throughout the life cycle.
In terms of organization, the roles in charge of leading the Configuration Management activities on the project need to be defined early in the system life cycle. These roles constitute the CM team. This team is organized according to the size and complexity of the product to be managed and to the organizational rules of the organization. It should at least have a Configuration Manager, who oversees the CM plan.
CM Planning and Management defines the CM scope relevant for the system and for being able to maintain the consistency between the system and its configuration information: CM activities need to be adjusted to the type of system (hardware, software, service or combination of the above), the system life cycle, and to the system complexity, as well to the type of configuration information to be managed and to their criticality.
The activities depend also on the stages of the life cycle that need to be addressed as defined per contract: if all the stages of the life cycle must be managed from conception until retirement, the CM plan covers all these stages.
The CM plan should address the definition of the CM tasks, their organization, their schedule, the responsibilities of the various stakeholders of the system, and the tools to support the CM. CM activities involve most of the stakeholders of the system.
The CM plan should also be developed in consideration of the organizational context and culture. It must adhere to or incorporate applicable policies, procedures, and standards and it must accommodate acquisition, subcontracting and partnership situations, as well as any specific requirements agreements.


Except very specific use cases, CM planning and management should address the remaining activities as described hereafter.
Additional considerations about the Planning and Management of CM activities are provided in "CM implementation.

Configuration Identification
This activity overarches the following task:
 Identify which elements of the system and which information should be under configuration management
 Identify where configuration management is needed among the elements of the system: these elements are called
"Configuration Items", the information related to these elements are their configuration information
 Define the identification rules for Configuration items and configuration information to apply to ensure the unicity, the rules to make these identifiers evolve, and the associated labelling constraints
 Structure the items and their information: this structure reflects the relationships between system items
 Define the rules for validating and releasing the items and the information under configuration management
 Define the baselines to be established at dedicated milestones of the system life cycle.
Note 1: a baseline specifies how a system is viewed for the purposes of management, control, and evaluation; each baseline is fixed at a specific point in time in the system life cycle and represents the current approved configuration; it serves as a basis for defining changes, and generally can only be changed through formal change procedures. See CM baselines for more details about typical CM baselines.
Note 2: depending on the practices and methods, the term "configuration item" may be used to designate anything that should be managed in the configuration management system, which leads to include the system elements and its information in the generic term "configuration items".

Configuration Change Management
A disciplined Configuration Change Management process is critical for engineering systems.
It encompasses the analysis, justification, evaluation, coordination and disposition of changes to the system and variances to the system (non-compliance to its requirements).
This activity aims to control the evolution of the system, of its elements and of its configuration information throughout the life cycle.
To ensure the missions of the activity, boards are defined to monitor and make key decisions regarding changes and variances process.
These boards are commonly called "Configuration Control Boards (CCBs)" but may also be referred to as "Configuration Steering Boards" or "Change Control Boards (CCBs)". They can also be split into Change Review boards and Change Implementation boards, when separately addressing the decisions about agreeing to the changes and variances and the stage where changes are implemented.




A Configuration Control Board (CCB) typically includes:
 a CCB Chair,
 a Configuration Manager,
 the product or organization systems engineer,
 domain-specific subject-matter experts (SMEs) such as for software or mechanical engineering, product support, and cyber resiliency,
 procurement and contracting specialists.
The CCB dealing with the CM of a dedicated system or product (product CCB) may invite periodic participation from specialized or outside SMEs, including representation from vendors and subcontractors; this however must be carefully managed to ensure that information-access restrictions (especially for competition-sensitive information) is not compromised.
Organizational CCBs may be organized at a wider level and address several systems, products, or product lines and they typically include information technology (IT) and cyber resiliency SMEs who may not be needed on product-focused CCBs.
More advanced considerations about the change management and the related boards are provided in CM implementation.


Configuration Status Accounting
This activity covers all the reporting tasks that aim to provide dedicated reporting about the configuration information and the CM activities. The reports can address a wide range of content, for various purposes: internal reports for the organization and for the internal stakeholders, external reports as part of the deliveries planned in the contract, certificates and conformity reports, etc.

Elaboration
Configuration Management is involved in the management and control of artifacts produced and modified throughout the system life cycle. It is therefore linked to system analysis, system detailed design definition, system realization, system deployment and use, system operation and product and service life management.
CM must also work in conjunction with other technical management processes. These include project planning, project assessment and control, decision management, risk management, information management, and measurement.
This includes CM application to the artifacts of all the other management processes (plans, analyses, reports, statuses, etc.).

Practical Considerations
Refer to CM implementation for detailed considerations about the practical implementation of CM according to context.
Key pitfalls and good practices related to systems engineering CM are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing CM are in Table 1.

Table 1. Configuration Management Pitfalls. (SEBoK Original)
Name	Description

Shallow Visibility	  Not involving all affected disciplines in the change control process.

Poor Tailoring	  Inadequate CM tailoring to adapt to the project scale, number of subsystems, etc.

Limited CM Perspective	 Not considering and integrating the CM processes of all contributing organizations including COTS vendors and subcontractors.
Insufficient CM	 Insufficient awareness and training of all affected disciplines Awareness
Lack of CM Plan	 Not organizing the CM activities and provision of the adequate resources and means Insufficient CM Checks	 Not verifying CM implementation regularly


Good Practices
Some good practices gathered from the references are provided in Table 2 below.

Table 2. Configuration Management Good Practices. (SEBoK Original)
Name	Description

Cross-Functional CM	 Implement cross-functional communication and CM processes for software, hardware, firmware, data, or other types of items as appropriate.
Full Lifecycle	 Plan for integrated CM through the life cycle. Do not assume that it will occur as part of the program without explicit Perspective		planning.
CM Planning	 Processes are documented in a single, comprehensive CM plan early in the project. The plan should be a (systems) CM plan.
 Include tools selected and used.

Requirements	 Initiate requirements traceability at the start of the CM activity. Traceability
CCB Hierarchy	 Use a hierarchy of configuration control boards commensurate with the program elements. Consistent Identification  Software CI and hardware CI use consistent identification schemes.
CM Automation	  Configuration status accounting should be as automated as possible.


References
Works Cited
ISO/IEC/IEEE 15288:2023, Second Edition. Systems and software engineering - System life cycle processes - International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023 [1]
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO 10007, Third Edition. Quality Management Systems - Guidelines for Configuration Management. International Organization for Standardization (ISO), ISO 10007:2017 [1]
Blanchard, B.S. and W J. Fabrycky. 2005. Systems Engineering and Analysis, 4th ed. Prentice-hall international series in industrial and systems engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
IEEE SWEBOK Version 4 2024. Guide to the Software Engineering Body of Knowledge (SWEBOK). Los Alamitos, CA, USA: IEEE Computer Society. Available at: https:/ / www. computer. org/ education/ bodies-of-knowledge/ software-engineering
SEI. 2010. Capability Maturity Model Integrated (CMMI) for Development, version 1.3. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).


Primary References
ISO/IEC/IEEE 15288:2023, Second Edition. Systems and software engineering - System life cycle processes - International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023 [1]
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO 10007, Third Edition. Quality Management Systems - Guidelines for Configuration Management. International Organization for Standardization (ISO), ISO 10007:2017 [1]
ANSI/GEIA. 2019. Configuration Management Standard Implementation Guide. Arlington, VA, USA: American National Standards Institute/Government Electronics & Information Technology Association, EIA649C [2].
GEIA. 2022. Data Management. Arlington, VA, USA: Government Electronics & Information Technology Association. GEIA-859B [3].

Additional References
ISO/IEC/IEEE 16236:2019. Systems and Software Engineering - Life Cycle Processes - Project Management. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 16326:2019 [4] (Edition 2)
ISO/IEC/IEEE 15289:2019. Systems and software engineering - Content of life-cycle information items. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 15289:2019 [5] (Edition 4)
ISO/IEC/IEEE 24748-1:2024. Systems and software engineering - Life cycle management - Part 1: Guidelines for life cycle management. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 24748-1:2024 [2] (Edition 2)
ISO/IEC/IEEE 24748-2 Systems and software engineering - Life Cycle Management - Part 2: Guidelines for the Application of ISO/IEC/IEEE 15288
ISO/IEC/IEEE 24748-2:2024. Systems and software engineering - Life cycle management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes) - International Organization for Standardisation
/ International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 24748-2:2024 (Edition 2)
ECSS-M-ST-40C Rev.1. 2009. Space project management - Configuration and information management. Noordwijk, The Netherlands: European Cooperation for Space Standardization (ECSS)
ANSI/EEIA. 2020. Configuration Management Requirements for Defense Contracts EIA649_1A. Arlington, VA, USA: Government Electronics & Information Technology Association - EIA649_1A [6]
ISO/IEC/IEEE 24748-8:2019 - Systems and software engineering - Life cycle management Part 8: Technical reviews and audits on defense programs - International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 24748-8:2019 [2] (Edition 1)


References
[1] https://www.iso.org/standard/70400.html#lifecycle
[2] https://www.sae.org/standards/content/eia649c/
[3] https://www.sae.org/standards/content/geia859b/
[4] https://www.iso.org/standard/75276.html
[5] https://www.iso.org/standard/74909.html
[6] https://www.sae.org/standards/content/eia649_1a/


Configuration Baselines


 Lead Authors:
 John Metcalf, Philip Hallenbeck, and Sandrine Gonthier
 Contributing Author:
 Garry Roedler
-
In systems engineering, a configuration baseline is a formally approved snapshot of a system's attributes at a specific point in its development. These baselines-such as the functional, allocated, and product baselines-serve as reference points that guide and control subsequent changes to the system. By establishing baselines, teams can ensure consistency, manage complexity, and maintain alignment with requirements throughout the system's life cycle. Configuration baselines are an important concept in the overall disciplines of Configuration Management.

Fundamental Concepts
Process Overview
The information of a Configuration item are assembled into Configuration baselines at certain points after or within in a life cycle stage, as a set of consistent and immutable information that serve as starting points for further changes.
Many types of baselines could be defined depending on the complexity of the system and desire to manage certain types of configuration changes at different levels of the organization. The differences between the information item in each baseline could be by information item type (specifications or descriptions), by information item associated with configuration items at different levels of the system hierarchy, or both.
The next subsection presents three main Configuration Management baselines that are focused on specifications and definition characteristics of the system: Functional Configuration Baseline (FBL), Allocated Configuration Baseline (ABL), and Product Configuration Baseline (PBL). These three formal baselines contain different specifications and description information. They are usually generated in order and aligned with life cycle stage events. They are present in most norms and standards, with some variation in their names, definitions, and scope.
Each of these baselines generally have specific related 'configuration documentation': Functional Configuration Documentation (FCD), Allocated Configuration Documentation (ACD), and Product Configuration Documentation (PCD). Configuration baselines and Configuration documentation are crucial in managing the complexity of systems and products, ensuring that all components and configurations are well-documented and understood throughout the lifecycle of the project or product.
Other predefined baselines may exist for the CM of the system, either requested by the applicable normative context, defined in the Configuration Management Plan for specific project's needs, etc. For example, Mission Objective Baseline which focuses on the purpose, constraints, environment and expected capabilities of the system as planned in [ECSS-M-ST-40C].


Finally, it is important to note that the content of the baselines or related configuration documentation is not necessarily limited to physical documents; the information can also include digital artifacts, such as models, databases, files, and more.

Functional, Allocated and Product baselines and documentation
The following provides definitions of the FBL, ABL and PBL baselines and FCD, ACD and PCD, whose detailed description may differ through various standards.
 Functional baseline represents the approved originating set of performance requirements for the system (functional, interoperability, and interface characteristics) and the verification required to demonstrate the achievement of those specified characteristics.
 Functional Configuration Documentation: includes information on the functional requirements, interface descriptions, and any changes made to the system over time.It serves as a reference for understanding the system's configuration and for evaluating changes or updates to its functionality. Comparison: the functional baseline acts as a foundational reference point, functional configuration documentation may evolve throughout the life cycle stages as design details are finalized and changes are documented.
 Allocated baseline represents the "allocation" of requirements to the major elements of the system (lower levels Configuration Items). It is the reference point for the functional and performance requirements that have been assigned. It defines what is expected from each component in terms of functionality and performance.
 Allocated Configuration Documentation: it details the specific configurations of the individual system elements that have been derived from the overall system requirements outlined in the allocated baseline. It may include design specifications, performance criteria, and how each system element is configured to meet its designated functions. Comparison: The allocated baseline is a conceptual framework or reference point, while the allocated configuration documentation is a detailed artifact that documents the specifics of individual system elements configurations.
 Product baseline gathers the approved definition and description information resulting from the system definition activities (e.g., system design definition).
 Product Configuration Documentation: This documentation provides comprehensive details about the configuration of a specific product, encompassing its physical and functional characteristics. It typically includes information about the product's design, elements, versions, and any configuration settings that are relevant. It describes how the product should be built and what specifications must be met. Comparison: The product
baseline is an established reference for the overall product's characteristics, while the product configuration
documentation contains the specific details needed to implement those characteristics.
Figure 1 hereunder provides a schema of the interconnections between the FBL, ABL and PBL baselines and associated documentation. It may vary according to the normative standard to be applied. In this figure, the terms 'Product Configuration Information' and 'Product Definition Information' are consistent with SAE-EIA 649C. The organizations may choose other terms.




Figure 2 provides a description of the process and information standards related to product configuration information as illustrated in figure 1.





Elaboration
Configuration Management baselines are related to the artifacts produced and modified throughout the system life cycle. Baselining activities are therefore interfacing with system analysis, system detailed design definition, system realization, system deployment and use, system operation and product and service life management.

Practical Considerations
Pitfalls
Some of the key pitfalls encountered in Configuration baselines are in Table 1.


Table 1. Configuration baselines Pitfalls. (SEBoK Original)
Name	Description

Shallow Baselines Visibility	  Not involving all affected disciplines in baselines preparation and validation

Baselines needs are not tailored	 Insufficient CM tailoring to adapt the baselines needs to the specific context of the project and to the adequately		system
Lack of Baselines planning and	 Not planning baselines at the adequate milestones, not identifying rules for their validation and release management
Baselines not used by the stakeholders    Insufficient awareness of all stakeholders about the consideration of baselines as key references across
the whole project

Missing Baselines checks	  Not verifying CM baselines regularly


Good Practices
Some good practices gathered from the references are provided in Table 2 below.

Table 2. Configuration baselines Good Practices. (SEBoK Original)
Name	Description

Cross-Functional Baselines	 Define baselines across the whole system, for software, hardware, firmware, data, or other types of items as appropriate
Baselines over the full	 Define the baselines needed throughout the entire life cycle lifecycle
Baselines Planning	  CM plan describes the needs in terms of baselines

Baselines tooling	  CM tools provide the adequate means to create, validate, and disseminate baselines

Baselines immutability	  CM baselines should be immutable reference points that serve as starting points for further change


References
Works Cited
ISO/IEC/IEEE 15288:2023, Second Edition. Systems and software engineering - System life cycle processes - International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023 [1]
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO 10007, Third Edition. Quality Management Systems - Guidelines for Configuration Management. International Organization for Standardization (ISO), ISO 10007:2017 [1]
Blanchard, B.S. and W J. Fabrycky. 2005. Systems Engineering and Analysis, 4th ed. Prentice-hall international series in industrial and systems engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
IEEE SWEBOK Version 4 2024. Guide to the Software Engineering Body of Knowledge (SWEBOK). Los Alamitos, CA, USA: IEEE Computer Society. Available at: https:/ / www. computer. org/ education/ bodies-of-knowledge/ software-engineering
SEI. 2010. Capability Maturity Model Integrated (CMMI) for Development, version 1.3. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).


Primary References
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO 10007, Third Edition. Quality Management Systems - Guidelines for Configuration Management. International Organization for Standardization (ISO), ISO 10007:2017 [1]
ISO/IEC/IEEE 15288:2023, Second Edition. Systems and software engineering - System life cycle processes - International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023 [1]
ANSI/GEIA. 2019. Configuration Management Standard EIA649C. Arlington, VA, USA: American National Standards Institute/Government Electronics & Information Technology Association, EIA649C [2].
ANSI/GEIA. 2016. Configuration Management Standard Implementation Guide. Arlington, VA, USA: American National Standards Institute/Government Electronics & Information Technology Association, EIA649A [1].
GEIA. 2022. Data Management. Arlington, VA, USA: Government Electronics & Information Technology Association. GEIA-859B [3].

Additional References
ISO/IEC/IEEE 16236:2019. Systems and Software Engineering - Life Cycle Processes - Project Management. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 16326:2019 [4] (Edition 2)
ISO/IEC/IEEE 15289:2019. Systems and software engineering - Content of life-cycle information items. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 15289:2019 [5] (Edition 4)
ISO/IEC/IEEE 24748-1:2024. Systems and software engineering - Life cycle management - Part 1: Guidelines for life cycle management. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 24748-1:2024 [2] (Edition 2)
ISO/IEC/IEEE 24748-2 Systems and software engineering - Life Cycle Management - Part 2: Guidelines for the Application of ISO/IEC/IEEE 15288
ISO/IEC/IEEE 24748-2:2024. Systems and software engineering - Life cycle management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes) - International Organization for Standardisation
/ International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 24748-2:2024 (Edition 2)
ECSS-M-ST-40C Rev.1. 2009. Space project management - Configuration and information management. Noordwijk, The Netherlands: European Cooperation for Space Standardization (ECSS)
ANSI/EEIA. 2020. Configuration Management Requirements for Defense Contracts EIA649_1A. Arlington, VA, USA: Government Electronics & Information Technology Association - EIA649_1A [6]

References
[1] https://www.sae.org/standards/content/geiahb649a/


Configuration Management Implementation

 Lead Authors:
 John Metcalf, Philip Hallenbeck, and Sandrine Gonthier
 Contributing Author:
 Garry Roedler
-
Implementing Configuration Management (CM) is about putting theory into practice-establishing the processes, tools, and responsibilities needed to manage changes to a system effectively. This involves planning how CM will function within an organization, defining roles, selecting appropriate tools, and integrating CM activities into the broader systems engineering workflow. By thoughtfully implementing CM, organizations can ensure that system changes are tracked, controlled, and communicated, maintaining the integrity and consistency of the system throughout its life cycle. This article is a compliment to Configuration Management.

Process Overview
As described Configuration Management, CM is a process that relies on appropriate practices, methods, and controls to provide the means to establish and maintain a source of authoritative data on system configuration.
This article provides guidance on how to plan the implementation of CM activities with a focus on explaining what elements to consider adapting CM to the dedicated context of the system to be addressed.

Principles and Concepts
Essential Areas to Evaluate for Adjustments
Product Information to be Considered in CM
The Configuration information should encompass product operational information and should not be limited to product definition information (see recommendation from the EIA-649C standard paragraph 5.2.2). Starting from the initial source of information provided by the document describing the operational conditions of the product, information about the product's physical environment of use, and the type of support to be provided in case of in-service support part of the contract, need to be considered.
Here are some examples of valuable product operation information: scope of use, user profiles, quantitative and qualitative requirements, etc.

CM Boards
The organization of CM activities is heavily influenced by the scope of the CM activities to be considered, and by the organizational factors addressed below. In general, complicated and critical products are managed by larger, more comprehensive CM organizations. Conversely, large organizations similarly require more comprehensive CM organizations and processes to manage the workload of key personnel.
Some considerations include the following:


Single CCB for Small Organizations
Small organizations, or those managing relatively simple products, may decide to have a single CCB staffed and operated at the organizational level, controlling not only organizational level configurations, but those of its respective projects or products. This can be a useful cost-saving measure, but one whose benefits must be balanced against the time demands of CCB membership and necessary expertise-especially as products increase in number.

Additional Boards for Larger Organizations and/or for Complex Systems
Larger teams or organizations, or those managing products of significant complexity, may choose to institute a Technical Review Board (TRB) prior to the CCB.
The TRB's function is to ensure thoroughness and correctness of the information supporting each CCB decision. Its membership depends on the demands of the CM subject, but it typically includes the relevant representatives of the major disciplines involved in the project, and subject matter experts as per needed. The TRB should address in detail the investigations and the arbitrations (technical and non-technical ones) prior to CCB to prepare the synthesis of the proposed analysis with predefined solutions to be agreed on in CCB.

CM Augmentation
The CM team must adapt to the system's complexity; greater complexity requires more dedicated and structured CM resources to manage a volume of configuration information that is greater and more complex. It induces the need for a detailed and formalized implementation of CM tasks.
Additionally, the contribution of various stakeholders is essential in performing specific CM functions.
For instance, when evaluation the compliance of a complex system to its requirements in a Functional Configuration Audit (FCA) part of Configuration Verification and Audit activity, the assistance of test engineers and technical writers would be typically required. Status accounting activities on complex systems may require participation from domain experts per expertise area (such as mechanical engineers, radiation engineers, chemical engineers, ...) to ensure the correctness of the process and its artifacts. Systems engineers should ensure that these are accounted for in technical planning, estimation, and resourcing.

CM Training
In general, CM training should adhere to the principle of training to the specific standard of the organization and its processes. Hence, trainers should use generic process areas and principles as a foundation and introduction, only, to their program and its implementation. Important considerations in CM training include:
 Ensure that all organizational stakeholders are trained to a minimum level of awareness to support the Configuration Management (CM) initiative and help prevent interruptions to the CM process.
 Check that all stakeholders take CM activities into account when scheduling meetings and other activities.
 Make sure that CCB members and contributors understand the CCB workflow and necessary documents. It's especially important for contributors, like project systems and software engineers, to contribute to properly preparing CCB artifacts, as this avoids wasting time during CCB meetings.
 Make sure that everyone knows the status accounting procedures and documents, along with those for verification and audits. These activities are often viewed as the most impactful by CM contributors in engineering, production, or support. Therefore, it's crucial to train engineering staff on CM audit procedures and their significance in verifying CM. Similarly, ensuring that all team members understand how to access status accounting documents and their relevance to their roles will help build support for the CM effort.


CM Organizational Legacy and Tailoring
A CM organization with a background in previous projects can leverage the legacy of earlier CM plans, tools, and standardized methods as a foundational reference for new projects. However, the Configuration Manager must ensure that the existing processes and infrastructure align with the specific needs of the current CM efforts. If adjustments are necessary, the practices must be appropriately tailored, and such tailoring should be justified.

Constraints and Guidance
Constraints affecting and guiding the CM process come from various sources.
There are a variety of sources for guidance on the development of a CM process. These include the ISO standards on system life cycle processes (refer to latest ISO/IEC/IEEE 15288 version) and configuration management guidelines (refer to latest ISO 10007 version), as well as the Guide to The Software Engineering Body of Knowledge (SWEBOK) (2024), and the CMMI for Development V1.3 (SEI 2010).
Policies, procedures, and standards set forth at corporate or other organizational levels might influence or constrain the design and implementation of the CM process.
Guidance should also come from the CM purpose that may differ according to the organizations and/or to the projects, which has a direct influence on the CM effort:
 lifecycle phases to be considered, (operational and maintenance phases included or not), safety, cyber-security, environmental scope included or not,
 specific acquirer processes to comply with
 specific interfaces with authorities to consider,
 agreement(s) with acquirers or suppliers containing provisions affecting the CM process
 tools and associated practices
 other processes used in system development in interface with CM process
 etc.
In all cases, the balance between CM scope and CM costs needs to be addressed.
Highly rigorous CM implementation implies activities, resources and planning, that need to be adjusted to the correct level of control needed for each product. Highly critical products with safety constraints will, for example, need potentially a higher level of Configuration information to be managed and a higher number of CM verifications. The increase of control induces an increase of the cost of CM activities. However, for any product, the dedicated normative expectations of the context will drive the minimum set of CM requirements to be applied.

Organizational Issues
Successful CM planning, management, and implementation requires an understanding of the organizational context for the design and implementation of the CM process and why constraints are placed upon it.
To plan a CM process for a project, it is necessary to understand the organizational context and the relationships among the organizational elements. CM interacts with other organizational elements, which may be structured in various ways. Although the responsibility for performing certain CM tasks might be assigned to other parts of the organization, the overall responsibility for CM often rests with a distinct organizational element or designated individuals that constitute the CM team (Bourque and Fairley 2014).
The following are some examples of elements to be considered for a dedicated project:
 size of the organization,
 budgets,
 schedules,
 contract requirements for CM,
 approval authority for the configuration,


 access and control of CM information, IT-security constraints,
 certification requirements,
 internal context: enterprise management system, processes, and supporting systems to achieve the CM activities,
 external context: Acquirer/Supplier CM interfaces with a contracted relationship to support external trusted interactions,
 IT infrastructure to provide an adequate CM management system supporting the requested CM activities.
Some examples of organizational elements to be considered across the entire organization (this is not an exhaustive list) include:
 IT needs to support the various CM management systems of the projects of the organization
 IT support teams to provide training and support for the usage of the CM tools
 Cyber-resiliency expectations, with the support of the relevant subject-matter experts (SMEs)
 IT infrastructure requirements:
 Capacity to support the CM activities for all the projects of the organization
 Provision and status of backups. While products of low complexity or criticality may be able to suffer a discontinuous CM tooling with little impact, complicated or safety-critical systems often require continuous access to CM info. Hence, IT may need to include CM tools and repositories in a hot or warm backup scheme.
 Traceability and preservation of the history of all Configuration Information are part of the requirements for CM.
 Information hosting and access. CM information is often proprietary and competition-sensitive and sometimes classified in accordance with national security requirements. Hence, both hosting and access must often be controlled.

Measurement
To carry out certain CM activities, such as status accounting, verification and auditing, as well as to monitor and assess the effectiveness of CM processes, it is necessary to measure and collect data related to CM activities and system artifacts.
CM management system and automated report tools provide convenient access and facilitation of data collection. Measurement of CM effectiveness would concern address the assessment of CM strategy deployment and maturity, for example:
 are the CM processes clearly documented for all life cycle phases, planned, deployed, known, applied?
 are the stakeholders trained and aware of their involvement in CM activities?
 are the tools providing the adequate capabilities to ensure CM activities?
Measurement of CM performance could address the quantitative aspects of CM activities implementation:
 Volume of Configuration items to manage
 Volume of configuration information
 Volume and costs of changes
 Volume of variances
 Duration of impact analysis to assess the impact of changes and variances
 Time to approve a change, time to implement an approved change
 Proportion of rework of impact analysis (not aiming to decision in CCB at first attempt)
 Number of discrepancies detected in CM verifications
 Number of attempts to get Functional and Physical Configuration Audits successfully passed.
It must be noted that most quantitative measures of CM performance would indeed address the performance of all the disciplines involved in the CM activity:


 the time to perform an impact analysis is mainly illustrating the time needed by the various expertise and engineering stakeholders to evaluate all the induced impacts of a change
 the time to implement a change may be driven by the manufacturing or purchasing constraints that could delay the implementation to include it in a dedicated batch

Tools
CM employs a variety of tools to support the process, that may depend on the nature of the system under CM and of the nature of the system artifacts. In a very general way, the Configuration Management system relies on tools such as Product Lifecycle Management and Application Lifecycle Management applications, and it can be seen as a federated environment. This environment could encompass various functionalities, among which
 information management
 tracking and change management
 version management
 release management
 baseline management
 breakdown structures management.

Practical Considerations
Pitfalls
Some of the key pitfalls encountered in implementing CM are in Table 1.

Table 1. Configuration Implementation Pitfalls. (SEBoK Original)
Name	Description

Poor Tailoring	 Inadequate CM tailoring to adapt to the project scale, number of subsystems, etc. CM Boards organization not clarified  Missing a visible and detailed organization of the boards over the whole system Insufficient CM training	 Insufficient training of all affected disciplines
Insufficient CM tooling	  Lack of tools supporting the CM tasks


Good Practices
Some good practices gathered from the references are provided in Table 2 below.

Table 2. Configuration Implementation Good Practices. (SEBoK Original)
Name	Description

CM activities adjusted to the	 CM activities consider the context of the project, the characteristics of the system, and the context of the project needs		organization
CM Boards organization	 The various boards have been set up according to the project needs, and their organization is adjusted along the lifecycle when needed
CM Resources	  The CM team organization is anticipated

CM Tools	 The Configuration Management system is set up to guarantee adequate support to the CM tasks, and to alleviate the administrative tasks.
CM Training	 CM training is available all through the project with adequate content for the involved stakeholders' priorities


References
Works Cited
ISO/IEC/IEEE 15288:2023, Second Edition. Systems and software engineering - System life cycle processes - International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023 [1]
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO 10007, Third Edition. Quality Management Systems - Guidelines for Configuration Management. International Organization for Standardization (ISO), ISO 10007:2017 [1]
Blanchard, B.S. and W J. Fabrycky. 2005. Systems Engineering and Analysis, 4th ed. Prentice-hall international series in industrial and systems engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
IEEE SWEBOK Version 4 2024. Guide to the Software Engineering Body of Knowledge (SWEBOK). Los Alamitos, CA, USA: IEEE Computer Society. Available at: https:/ / www. computer. org/ education/ bodies-of-knowledge/ software-engineering
ISO 10007, Third Edition. Quality Management Systems - Guidelines for Configuration Management. International Organization for Standardization (ISO), ISO 10007:2017 [1]
SEI. 2010. Capability Maturity Model Integrated (CMMI) for Development, version 1.3. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).

Primary References
ISO/IEC/IEEE 15288:2023, Second Edition. Systems and software engineering - System life cycle processes - International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023 [1]
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO 10007, Third Edition. Quality Management Systems - Guidelines for Configuration Management. International Organization for Standardization (ISO), ISO 10007:2017 [1]
ANSI/GEIA. 2016. Configuration Management Standard Implementation Guide. Arlington, VA, USA: American National Standards Institute/Government Electronics & Information Technology Association, EIA649A [1].
ANSI/GEIA. 2019. Configuration Management Standard Implementation Guide. Arlington, VA, USA: American National Standards Institute/Government Electronics & Information Technology Association, EIA649C [2].
GEIA. 2022. Data Management. Arlington, VA, USA: Government Electronics & Information Technology Association. GEIA-859B [3].

Additional References
ISO/IEC/IEEE 16236:2019. Systems and Software Engineering - Life Cycle Processes - Project Management. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 16326:2019 [4] (Edition 2)
ISO/IEC/IEEE 15289:2019. Systems and software engineering - Content of life-cycle information items. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 15289:2019 [5] (Edition 4)
ISO/IEC/IEEE 24748-1:2024. Systems and software engineering - Life cycle management - Part 1: Guidelines for life cycle management. International Organization for Standardisation / International Electrotechnical Commissions /


Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 24748-1:2024 [2] (Edition 2)
ISO/IEC/IEEE 24748-2 Systems and software engineering - Life Cycle Management - Part 2: Guidelines for the Application of ISO/IEC/IEEE 15288
ISO/IEC/IEEE 24748-2:2024. Systems and software engineering - Life cycle management - Part 2: Guidelines for the application of ISO/IEC/IEEE 15288 (system life cycle processes) - International Organization for Standardisation
/ International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers - ISO/IEC/IEEE 24748-2:2024 (Edition 2)
ECSS-M-ST-40C Rev.1. 2009. Space project management - Configuration and information management. Noordwijk, The Netherlands: European Cooperation for Space Standardization (ECSS)
ANSI/EEIA. 2020. Configuration Management Requirements for Defense Contracts EIA649_1A. Arlington, VA, USA: Government Electronics & Information Technology Association - EIA649_1A [6]

Information Management

 Lead Authors:
 John Metcalf, Philip Hallenbeck, and Sandrine Gonthier
 Contributing Authors:
 Garry Roedler and Andy Pickard
-
Information management (IM) helps teams access and manage information over its lifecycle, ensuring that the information is relevant, complete, verified, protected, distributed and managed. Simply put, IM is about maintaining a clear, accurate, and accessible picture of information to one or more audiences.
As stated in ISO/IEC/IEEE 15288 (6.3.6.1): 'The purpose of the Information Management process is to generate, obtain, confirm, transform, retain, retrieve, disseminate, and dispose of information to designated stakeholders'.

Fundamental Concepts
The INCOSE SE Handbook describes IM as the process that "plans, executes, and controls the provision of information to designated stakeholders that is unambiguous, complete, verifiable, consistent, traceable, and presentable".
The IM process ensures that necessary information is created, stored, retained, protected, managed, and made easily available to those with a need and who are permitted access. It also ensures that information is disposed of when it is no longer relevant.
The scope of information to be considered is wide, addressing technical, project, organizational, integration, contractual, agreement and user information, and any other information deemed relevant for the organization, all of these designated as 'information assets' in this article.
Effective IM enables business objectives, as illustrated in Table 1 below:


Table 1: IM Enables Business Objectives (SEBoK Original)
Objective	How is IM enabling the objective

Operational efficiency	Through organizing secured processes for the collection, access and distribution of the information


Support analytics and decision-making


Through managing, in a controlled way, the tangible and intangible information assets and preserving them against uncontrolled modifications, threats and loss (cybersecurity dispositions against digital threats, resilient storage structures and pre-defined disaster recovery dispositions)

Quality and security	Through managing, in a controlled way, the tangible and intangible information assets and preserving them against uncontrolled modifications, threats and loss (cybersecurity dispositions against digital threats, resilient storage structures and pre-defined disaster recovery dispositions)

Competitiveness and innovation

Through providing access to the crucial information needed to make decisions and through the capability to extract meaningful insights from information analysis

Compliance	Through planning the adequate dispositions and access controls to comply with legal requirements, intellectual property and regulations applicable to information and data

From a business enterprise perspective, the systems engineer, as well as many other stakeholders involved in systems development, may be involved in several activities that support the management of information across the enterprise and its projects. It may include strategic planning, analyses of technology/business trends, development of applications, understanding operational disciplines, analytics supporting decision-making, resource control techniques, and assessment of organization structures.

Information Versus Data
Terms like artifact, asset, work product, and documentation are commonly encountered in system engineering projects and are often used interchangeably to refer to information and data without regard to their difference.
ISO/IEC/IEEE 15289 describes data as outputs of life cycle processes that can be individually recorded and managed, composable into a structure set and treated as a unit called a record, and part of information items (documentation). Information items (documentation) "are produced and communicated for human use and contain formal elements (such as purpose, scope, and summary), intended to make them usable by their intended audience".
ISO/IEC/IEEE 15289 also describes the content for the general and specific information items that are inputs and outputs from life cycle processes. (Remark: U.S. DoD projects use MIL-STD-963C to describe the contents of information items).
Similarly, GEIA- STD-927B defines data as "A representation of facts, concepts, or instructions in a formalized manner suitable for communication, interpretation, or processing by humans or by automatic means" and information as "Data organized in a form that can be interpreted by humans or computers. Note: these definitions are "frequently used to discriminate between uninterpreted measurements (data) and meanings derived from raw data through some form of analysis (information)".
Data Management Body of Knowledge (DMBOK) acknowledges that data and information can be differentiated in a similar way if it will better enable communication within an organization. An example of these relationships is shown in Figure 1. Conversely, GEIA-STD-859B defines data as "information that has been recorded in a form or format convenient to move or process".
Figure 1 below shows examples of relationships between data and information items in a project. However, it should be noted that this figure only mentions a few examples of data and information items that may have a much broader scope in a project or organization.




Using the above-mentioned standards, we can synthesize a convenient definition for information and data: data are raw unstructured values, and information is structured data in context that has been analyzed and interpreted.
Even though information and data are different, some organizations may choose not to differentiate between management of the two. The definitions, relationships, use, and management of PM, SE or Operational System information and data should be described in the project's management plans or system's configuration information, respectively.

Information Asset
An information asset is any piece or collection of information that must be managed independently. The information items described by ISO/IEC/IEEE 15289 would be considered as information assets. Information assets:
 can exist in many tangible or intangible forms in an organization,
 are either related to a specific system development project or held at enterprise level and made available to projects as required: e.g., Product Line Engineering information, generic procedures and processes,
 may be held in electronic format and/or in physical form: electronic or paper drawings or documentation, microfiche, photographic record, file, database...
Table 2 gives some examples of criteria that may be considered when choosing between formats:


Table 2: Electronic Format Versus Physical Format (SEBoK Original)
Electronic Format	Physical Format

Pros    Ease of access to various stakeholders	  No need for access software
 Searchability	  Long term storage
 Maintainability	  Robust to corruption and cyberthreats
 Ease of multiple use enhanced by the capability to use links towards the information
Cons   Potential for data corruption and cyberthreat-sensitive	  Less searchable
 Need to manage long term storage and archiving solutions	  Access capabilities driven by physical locations
 Need to manage the longevity of access software	  Long term preservation of the media depending on the
physical support


Metadata
Metadata can be thought of as 'data about data.' It consists of 'data' that characterizes the information or data to be managed: for example, the title of the information, the author(s), the provenance, or the status of the information.
Metadata is particularly useful to organize the information database, to use the information and to search and navigate across the information database. It plays a key role in the organization of the governance of the information and data and contributes to quality and integrity objectives of the IM process.

Information Management versus Knowledge Management
According to SE HBK, Knowledge Management (KM) differs from Information Management (IM) as it is managed at Organization level and focused on providing the capability to re-apply existing knowledge.
However, KM is related to IM when it addresses explicit knowledge captured in information assets. Also, IM can be used to aid the objectives of KM by providing the means to manage the information regarding the knowledge assets.
Some examples of information assets, which may be considered as knowledge artifacts at the level of the organization, include:
 Technical content: leveraging and capitalizing on past engineering documentation, manufacturing processes, standard test procedures, design guides...
 Architectural and Design patterns
 Reusable content, i.e. product line information, generic analyses, previous documentation reusable pre-defined templates...
 Process information: process definition documentation, instructions, "How-to" guidance, validation information
for analytical tools (e.g. aero-thermo-mechanical analysis tools).

How Does Information Management Relate to Configuration Management?
Information Management (IM) and Configuration Management (CM) are closely interconnected: whenever information assets correspond to identified Configuration Information related to systems or products under Configuration Management, those information assets should be subject to CM.
As noted in SEBoK Configuration Management article, 'CM is concerned with the significance and applicability of information in relation to the specific system elements with which it is associated, referred to as configuration information', while the IM process deals with the management of information itself over its own lifecycle: information generation, collection, validation, transformation, dissemination, and disposal.
The IM process is also complementary to CM to ensure the traceability of information in Configuration Management perspective.


Information Security Management
IM incorporates the fundamental need to manage the security of information assets.
Information security encompasses the mitigation of all kinds of breaches (digital and physical ones) that may expose personal, proprietary and industrial data, with associated consequences in terms of cost, image, and financial damages. It addresses a broader scope than cybersecurity, which focuses on electronic data, devices, and systems. It must consider all forms of storage, including information on physical formats and even knowledge held in the minds of stakeholders.
It must address the protection of intellectual property and trade secrets and comply with legal and regulatory requirements protecting privacy.
A simple approach for information security, inspired from the detailed methodology available in National Institute of Standards Special Publication 800-160v1r1, Engineering Trustworthy Secure Systems, should plan the 5 major steps explained below:

1 - Define Sensitive Information:
Determine the levels of Information sensitivity relative to pre-defined criteria, according to the nature of information to be managed and to the regulations and norms to comply with
Examples: information aiming to identify an individual, health information, national security information, or competition sensitive information.

2 - Define Data and Asset Classifications:
Define a global classification dictionary with clear classification rules, in accordance with the levels of sensitivity and considering the whole set of stakeholders along the system lifecycle; these rules should consider the variability that may exist in case of large systems involving many organizations and countries.

3 - Determine Information Security Controls, that may include the following:
* Information encryption, for both use-cases of information at rest (stored or archived) and under distribution, with considering the induced cost, processing, network and coordination overhead
* Digital signatures Distribution restrictions in accordance with the classification, enforced either by procedures or tools, including non-disclosure agreements (NDAs) between organizations, making them liable in case of disclosure of protected information
* User security education with regular refresher training and monitoring

4 - Implement Information Security Controls:
Ensure controls adapted to each sensitivity classification and to the phasing of the connections across organizations (either existing or under development), with the adequate planned tools and resources

5 - Monitor execution:
Ensure measures to provide insights and status about information security, taking advantage of existing cybersecurity dispositions when available.

Information Management System
A dedicated Information Management system is needed to enable and support the IM process and its activities. The IM system must comply with the involved organizations' security policies along the full lifecycle of information assets.
A typical IMS includes capabilities to do or assist with the following functionalities:


 Collection and organization of data and information
 Storage and retrieval of both raw data and information
 Analysis of data to transform it into information
 Creation of relevant reports/reporting of the results per appropriate context for decisions
 Protection of data and information
 Management of the access rights, responsibilities and authorities over the information database
 Compliance with laws and regulations.

Engineering the Information Management System
The Information Management system (IMS) aims to ensure the functions identified in the previous section while guaranteeing information availability, reliability, provenance traceability, security.
The IMS stakeholders' range may address a wide scope: project management, cybersecurity, systems engineering, specialty engineering disciplines, configuration management, quality management, industry, service functions, ... across one or several organizations.
The life cycle processes can be used to engineer the IMS as the system in charge of answering to the organizational need to manage its information and data. An example of approach is shown in Figure 2:

Each major step in figure 2 includes several considerations of particular importance to IM:
 In Concept Definition (Business or Mission Analysis and Stakeholder Needs Definition):
 The involved stakeholders and organizations and their needs in terms of access controls
 The needs for security boundaries
 The needs for audits
 The applicable regulations, laws, protection requirements


 The information lifecycle requirements per type of information
 In Requirements Definition and System Architecture Definition:
 The existing structures and their constraints: repositories, cybersecurity architectures
 The existing information and configuration management processes (including problem reporting and change management),
 The existing syntax and semantics
 The disaster recovery dispositions
 In Design definition:
 Potential iterations when designing the IMS to consider changes to introduce new requirements for retrieval speed, archiving, metadata, data modelling, access rules
 In Realization (Implementation, Integration, Verification, and Validation):
 Incremental integration, verification, and validation of the IM system to enable a stepwise adoption of new processes
 Application of information and configuration management rules
 Involvement of stakeholders in tests to value their feedback
 Coordination with IT and cybersecurity staff especially during initial implementation steps
 In Maintenance and Utilization:
 Needs to adapt the information lifecycle, always controlled by dedicated processes (information and/or configuration management workflows)
 Regular disaster recovery and retrieval plan exercise
 Performance and quality monitoring of a dedicated set of indicators
 Stakeholders' feedback to maintain their involvement in the overall IMS quality.

Process Overview
The IM process relies on a defined approach that includes appropriate practices, methods, procedures, resources, and controls to establish and maintain a reliable source of Information.
A decomposition is proposed below, inspired by the SE HBK IM section. Examples of decomposition could also be found in ISO/IEC/IEEE 15288 Clause 6.3.6, SAE 1001 Clause 5.2.5, ISO/IEC/IEEE 24748-7 Clause 6.3.6.
The benefits of the IM process are maximized when all activities are planned and executed. These activities are not sequential. They may be applied concurrently and iteratively as needed throughout the information life cycle.




Here are some insights about the proposed sub-activities:
 Prepare for information management (preparing the information management strategy):
 Define the scope:
 Relevant information and valid sources to be considered (business processes which will provide information)
 Directives, standards to be considered, including customers' requirements, industry standards...
 Policies, constraints: organization internal policy and directives, external constraints (e.g. legal, environmental, geographical, regulations)
 Stakeholders
 Define the approach:
 Information dictionary to consider the information to be managed (may be related to the project planning outputs in case of a system's information)
 Information lifecycle:
 Stages and status of the information asset, from initialization until obsolescence and disposal
 Transition triggers between the lifecycle stages, defining workflows
 Change process to control the evolutions of the information, and when relevant, the traceable incorporation in Configuration Management baselines
 Authorized formats for capture, retention, transmission, retrieval, distribution
 Requests for adequate repositories and tools
 Storage and archive policy: retention duration, end of life disposal process, disaster recovery dispositions to prevent the loss of information in case of failure (back-up system, flawless recovery plan)
 Develop the IM plan:
 Identification rules: identification schema, mandatory attributes and metadata aiming to ease of search, rules for identifiers evolution
 Management requirements
 applicable to information capture, storage, validation, release, retrieval, and distribution


 problem reporting and change management, for both configuration information and information out of configuration scope
 control and security rules per type of Information, e.g. export control, access or distribution control, Intellectual Property, segregation of information between projects...
 auditing capabilities on the information database
 Roles
 Responsibilities: roles providing, managing, consuming, distributing information (including external distribution to suppliers, customers, partners)
 Authorities: roles in charge of IM policy and governance inside the organization, roles defining the IM system requirements...
 Storage and archive tools, consistent with the policy identified in the approach
 Perform information management
 Collect the information: obtain from the valid sources, capture and store according to the IM plan
 Organize the information: identify and categorize, structure the information to identify their relationships with the system's elements to which they are related
 Analyze: develop or transform the information, report about the information to support decision-making
 Distribute the information to designated stakeholders inside the organization and to the relevant external stakeholders in accordance with predefined processes
 Protect the information: maintain integrity, security, privacy, in accordance with the applicable requirements
 Manage end-of-life: control information obsolescence, identify obsolete information and assess whether it should be archived or disposed of; it aims to prevent the uncontrolled growth of the information asset database by retaining content that should be archived or destroyed in accordance with applicable policies or agreements.

Elaboration
Information Management is involved in the management and control of artifacts produced and modified throughout the system life cycle and across the organization.
The list of types of information assets to be managed and their cadence in the systems engineering and project lifecycle should be defined in the planning process and documented in the IM plan. For information assets related to configuration management, their cadence should be consistent with CM requirements.
The IM process is therefore linked to configuration management, project planning, project assessment and control, system analysis, system detailed design definition, system realization, system deployment and use, system operation and service life management.

Practical Considerations
Key pitfalls and good practices related to IM are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing IM are provided in Table 3:


Table 3. Information Management Pitfalls. (SEBoK Original)
Pitfall Name	Pitfall Description

No Information / Data Dictionary	Not defining an information/data dictionary for the organization or for the project may result in inconsistencies in identification conventions for information, which reduces the accuracy and completeness of searches for information and adding search time performance.
No Information identification	Not specifying the naming convention for information and identification rules may result in inconsistent strategy	information identification, difficulties to retrieve information and impossibility to ensure consistency of the
information across the whole project or organization

No Metadata	Not defining the relevant metadata per type of information or tagging them inconsistently may result in ineffective searches based on metadata which are ineffective and can overlook key information.
No predefined Information / data	Missing definition of the information lifecycle defining creation and validation workflow, release lifecycle	mechanism, obsolescence management, leading to uncontrolled creation and validation of information,
overaccumulation of obsolete data

No security rules	Not defining the security classification levels nor the associated security protection mechanisms induce quickly high levels of risks of information leaks that could engage the legal responsibility of the organization
No clear information communication Not defining the conditions for reception and distribution of information leads to lacks in traceability.
rules	Information should be considered as key assets and their communication across the stakeholders need to be organized
Missing content-obsolescence	Not checking the currency and relevance of the information content, and not tagging obsolescent and management	obsolete information results in outdated information being retained and used inadequately, and induces an
overload in the storage capacity needs

Missing access-obsolescence	Not checking the currency and relevance of the access rights could lead to maintaining accesses to management	information that should no longer be proposed and lead to protection breaches
Missing information	Not considering the information management system applications maintenance and survey could lead to the repositories-obsolescence	loss of access to crucial information. The IM plan should include the management of the nominal management	repositories' lifecycle, back-up solutions as well as a disaster recovery plan.
Inadequate back-up policy	Not ensuring that the information is backed up periodically in a back-up solution having the required retention durability and remains retrievable could lead to late discovery of information loss. The back-up policy should plan regular checks to ensure that information is not corrupted over time.


Good Practices
Some good practices gathered from the references are provided in Table 4:

Table 4. Information Management Good Practices. (SEBoK Original)
Good Practice Name	Good Practice Description

Guidance	  Refer to the applicable Data Management guide or standard or norm applicable to your domain or industrial context.
 When applicable, the DAMA Guide to the Data Management Body of Knowledge provides an excellent, detailed overview of IM at both the project and enterprise level.
Information as an Asset  Recognize that information is a strategic asset for the organization and needs to be managed and protected.

Information Storage	Plan for the information storage capacity that is foreseen in your context, without forgetting to anticipate the increase of Capacity	information volume based on the regular survey of the amount of information to be managed.
Effective Information	Ensure that the users are aware of the presence of the information and the relevant people access the information they Access	need to know. Information that is not accessible or not used loses value that should come from the usage of the
information.


Data Modeling	 Invest time and effort in designing data models that are consistent with the underlying structures and information needs of the organizations involved.
 Cross-organization data modeling should focus on semantics (the exact meaning of terms or data items). Agreement on formats or table structures is insufficient: Terms often mean different things to different organizations.
 Model for interoperability: Assume the data will be used in integrating with new, different systems later on. This requires a focus on identifiers, metadata, and provenance; and structures that can scale across organizational boundaries.
Quality Management	The cost impact of using poor quality information can be enormous. Be rigorous about managing the quality of information, including considering carefully the validation and release steps in the information lifecycle.
Information Repository  The impact of managing information poorly can also be enormous (e.g., violating intellectual property or export Design	control rules).
 Make sure that the IM requirements are captured and implemented in the information repository, and that all users of the repository are aware of the rules that they need to follow and the penalties for infringement.
Uncontrolled	Organize the information management life cycle and security to prevent from undesirable and/or untraced modification of modification prevention the information.


References
Works Cited
ISO/IEC/IEEE. 2023. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation/International Electrotechnical Commissions. ISO/IEC/IEEE 15288:2023.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, 5th Edition. Ed(s): D. Walden, T.M. Shortell, G.J. Roedler, B.A. Delicado, O. Mornas, Y. Yew-Seng, D. Endler. San Diego, CA: International Council on Systems Engineering (INCOSE). Available at https:/ / www. incose. org/ publications/se-handbook-v5.
DAMA international. 2024, DAMA International's Guide to the Data Management Body of Knowledge (DAMA-DMBOK2). Data Administration Management Association International. https:/ / technicspub. com/ dmbok2/
Ilana Hamilton. 2025, Article 'Information Security Vs. Cybersecurity: What's The Difference?'. https:/ / www. forbes.com/advisor/education/it-and-tech/information-security-vs-cybersecurity/
Shirley M. Radack, National Institute of Standards and Technology. 2009, The System Development Life Cycle (SDLC). https://www.nist.gov/publications/system-development-life-cycle-sdlc
ISO/IEC/IEEE15289. 2019. Systems and software engineering - Content of life-cycle information items (documentation). International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE15289:2019
ANSI/GEIA-859B. 2022. Data Management GEIA-859B. Arlington, VA, USA: Government Electronics & Information Technology Association. GEIA-859B Data Management
ANSI/GEIAHB859. 2006. Implementation Guide for Data Management GEIAHB859 - Arlington, VA, USA: Government Electronics & Information Technology Association. GEIAHB859
ANSI/GEIA-STD-927B. 2013. Common Data Schema for Complex Systems GEIA-STD-927B. Arlington, VA, USA: Government Electronics & Information Technology Association. GEIASTD927B
ANSI/GEIAHB927. 2007. Implementation Guide for Common Data Schema for Complex Systems. Arlington, VA, USA: Government Electronics & Information Technology Association. GEIAHB927
U.S. Department of Defense. 2019. MIL-STD-963C Data Item Descriptions (DIDs). https:/ / quicksearch. dla. mil/ qsDocDetails.aspx?ident_number=202450


NIST Special Publication (SP) 800-160v1r1. 2022. Engineering Trustworthy Secure Systems, by Ron Ross, Mark Winstead, and Michael McEvilley. https://doi.org/10.6028/NIST.SP.800-160v1r1

Primary References
ISO/IEC/IEEE. 2023. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation/International Electrotechnical Commissions. ISO/IEC/IEEE 15288:2023.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities 5th Edition. Ed(s): D. Walden, T.M. Shortell, G.J. Roedler, B.A. Del]icado, O. Mornas, Y. Yew-Seng, D. Endler. San Diego,
CA: International Council on Systems Engineering (INCOSE). Available at https://www.incose.org/publications/ se-handbook-v5.
ISO/IEC 27001. 2022. Information security, cybersecurity and privacy protection - Information security management systems -	Requirements. International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. https:/ / www. iso. org/ standard/ 27001
ISO/IEC/IEEE 15289. 2019. Systems and software engineering - Content of life-cycle information items (documentation). International Organization for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE15289:2019
INCOSE. 2018. Integrated Data as a Foundation of SE. INCOSE Requirements working group. INCOSE-TP-2018-001-01.0.
ECSS-M-ST-40C Rev.1. 2009. Space project management - Configuration and information management. Noordwijk, The Netherlands: European Cooperation for Space Standardization (ECSS) - ECSS-M-ST-40C Rev.1

Additional References
None.


Quality Management

 Lead Authors:
 Quong Wang, Massood Towhidnejad, and David Olwell
 Contributing Authors:
 Dick Fairley and Garry Roedler
-
Whether a systems engineer delivers a product, a service, or an enterprise, the deliverable should meet the needs of the customer and be fit for use. Such a deliverable is said to be of high quality. The process to assure high quality is called quality management.

Overview
Over the past 80 years, a quality movement has emerged to enable organizations to produce high quality deliverables. This movement has gone through four stages:
1. Acceptance Sampling was developed to apply statistical tests to assist in the decision of whether or not to accept a lot of material based on a random sample of its content.
2. Statistical Process Control (SPC) was developed to determine if production processes were stable. Instead of necessarily measuring products, processes are measured instead. Processes that departed from a state of statistical control were far more likely to develop low quality deliverables.
3. Design for Quality focused on designing processes that were robust against causes of variation, reducing the likelihood that a process would go out of control, and accordingly reducing the monitoring requirements.
4. Six sigma methods are applied the tools and power of statistical thinking to improve other aspects of the organization.

Definitions
The American Society for Quality [1] provides the following definitions:
 Acceptance Sampling involves the inspection of a sample to decide whether to accept the entire lot. There are two types of sampling:
 In attributes sampling, the presence or absence of a characteristic is noted in each of the units inspected.
 In variables sampling, the numerical magnitude of a characteristic is measured and recorded for each inspected unit. This involves reference to a continuous scale of some kind.
 SPC is the application of statistical techniques to control a process. It is often used interchangeably with the term
"statistical quality control."
 Quality is a subjective term for which each person or sector has its own definition. In technical usage, quality can have two meanings:
 The characteristics of a product or service that bear on its ability to satisfy stated or implied needs.
 A product or service free of deficiencies. According to Joseph Juran, quality means "fitness for use." According to Philip Crosby, it means "conformance to requirements."
 Six Sigma is a method that provides organizations with tools to improve the capability of their business processes. This increase in performance and decrease in process variation leads to defect reduction and improvement in profits, employee morale, and quality of products or services. Six Sigma quality is a term generally used to indicate a process is well controlled (±6 s from the centerline in a control chart).


Quality Attributes
Quality attributes, also known as quality factors, quality characteristics, or non-functional requirements, are a set of system functional and non-functional requirements that are used to evaluate the system performance. There are a large number of system quality attributes identified in the literature (e.g. MSDN 2010, Barbacci et al. 1995). Depending on the type of the system being considered, some of these attributes are more prominent than others. Ideally, a system would be optimized for all the quality attributes that are important to the stakeholders, but this is an impossible task. Therefore, it is important to conduct a trade-off analysis to identify the relationship between the attributes and establish whether a change in one attribute would positively or negatively affect any other attributes. An example of such trade-off is shown in Table 1 below. (See SEBoK discussion on specialty engineering for additional information on quality attributes.)

Table 1. Attribute Trade Off. (SEBoK Original)


Flexibility
Maintainability
Reliability
Flexibility

+
-
Maintainability
+

+
Reliability
-
+


Finding the right set of quality attributes is the first step in quality control and management. In order to achieve high quality, quality must be measured, monitored, managed, and improved on. Therefore, in order to increase the overall system quality, it is necessary to:
 identify and prioritize the quality attributes
 identify the metrics that can be used for these attributes
 measure and monitor the attributes
 validate the measurements
 analyze the result of those measurements
 establish processes and procedures that result in improved system quality, based on the analysis.

Quality Attributes for Products
Quality attributes for a product focus on the conformance to the specifications for the product; frequently these are manufacturing specifications. Examples include physical characteristics (length, weight, finish, capacity, etc.) being inside a given tolerance range. The physical characteristics can be related to the function of the product or to aesthetic qualities.
A single product may have a vector of quality attributes of high dimension as well as an associated region in which the vector is expected to be. Often the quality is summarized by saying the item is "in compliance" (if the vector is in the acceptable region) or "defective" (if the vector is outside the acceptable region).

Quality Attributes for Services
Quality of services plays a major role in customer satisfaction, which is the measurement of the overall system quality. Services can be divided into two major categories: primary and secondary. The city public transportation system, the U.S. postal service, or the medical services provided by a hospital are all examples of primary services. Services that provide help to a customer are secondary services, which are typically referred to as a customer service. Identifying the appropriate quality attributes is critical in the quality management of services. Some examples of service quality attributes include: affordability, availability, dependability, efficiency, predictability, reliability, responsiveness, safety, security, usability, etc. Again, depending on the type of the service, some of these attributes are more prominent than the others.


For example, in the case of services that are provided by the hospital, one may potentially be more interested in the availability, reliability, and responsiveness than the security (typically hospitals are assumed to be safe) and the affordability (typically insurance covers the majority of the cost). Of course, if the patient does not have a good insurance coverage, then the importance of affordability will increase (de Knoning, 2006).

Quality Attributes for Enterprises
An enterprise typically refers to a large, complex set of interconnected entities that includes people, technologies, processes, financial, and physical elements. Clearly, a typical enterprise has a number of internal and external stakeholders, and as a result there are a large number of quality attributes that will define its quality. Identifying the right set of attributes is typically more challenging in such a complex system. An example of an enterprise is the air traffic management system that is mainly responsible for the safe and efficient operation of the civil aviation within a country or collection of countries. There are many stakeholders that are concerned about the overall quality of the system, some example of these stakeholders and some of the primary quality attributes that they are concerned with are identified in Table 2.

Table 2. Enterprise Stakeholders and their Quality Attributes. (SEBoK Original)
Stakeholders	Primary Quality Attributes

Passengers	Safety, affordability, and reliability

     Airlines	Adaptability, efficiency, and profitability Air Traffic Controller		Safety, reliability, and usability
Hardware & Software Developers Reliability, fault tolerance, and maintainability Government/Regulatory Agency	Safety, reliability, affordability, etc.

Measuring Quality Attributes
Quality cannot be achieved if it cannot be measured. The Measurement System Analysis (MSA) (Wheeler and Lynday 1989) is a set of measuring instruments that provide an adequate capability for a team to conduct appropriate measurements in order to monitor and control quality. The MSA is a collection of:
 Tools - measuring instruments, calibration, etc.
 Processes - testing and measuring methods, set of specifications, etc.
 Procedures - policies and procedures and methodologies that are defined by the company and/or regulatory agency
 People - personnel (managers, testers, analysis, etc.) who are involved in the measurement activities
 Environment - both environmental setting and physical setting that best simulate the operational environment and/or the best setting to get the most accurate measurements
Once the quality attributes are identified and prioritized, then the MSA supports the monitor and control of overall system quality.
Additional details about measurement are presented in the measurement article.


Quality Management Strategies
Acceptance Sampling
In acceptance sampling many examples of a product are presented for delivery. The consumer samples from the lot and each member of the sample is then categorized as either acceptable or unacceptable based on an attribute (attribute sampling) or measured against one or more metrics (variable sampling). Based on the measurements, an inference is made as to whether the lot meets the customer requirements.
There are four possible outcomes of the sampling of a lot, as shown in Table 3.

Table 3. Truth Table - Outcomes of Acceptance Sampling. (SEBoK Original)
                   Lot Meets Requirement Lot Fails Requirement Sample Passes Test	No error	Consumer risk
Sample Fails Test	Producer risk	No error

A sample acceptance plan balances the risk of error between the producer and consumer. Detailed ANSI/ISO/ASQ standards describe how this allocation is performed (ANSI/ISO/ASQ A3534-2-1993: Statistics-Vocabulary and Symbols-Statistical Quality Control).

Statistical Process Control
SPC is a method that was invented by Walter A. Shewhart (1931) that adopts statistical thinking to monitor and control the behaviors and performances of a process. It involves using statistical analysis techniques as tools in appropriate ways, such as providing an estimate of the variation in the performance of a process, investigating the causes of this variation, and offering the engineer the means to recognize when the process is not performing as it should based on the data. (Mary et al. 2006, 441). In this context, performance is measured by how well the process is performed.
The theory of quality management emphasizes managing processes by fact and maintaining systematic improvement. All product developments are a series of interconnected processes that have variation in their results. Understanding variation with SPC technology can help the process executors understand the facts of their processes and find the improvement opportunities from a systematic view.
Control charts are common tools in SPC. The control chart is also called the Shewhart 3-sigma chart. It consists of 3 limit lines: the center line, which is the mean of statistical samples, and the upper and lower control limit lines, which are calculated using the mean and standard deviation of statistical samples. The observed data points or their statistical values are drawn in the chart with time or other sequence orders. Upper and lower control limits indicate the thresholds at which the process output will be considered as unlikely. There are two sources of process variation. One is common cause variation, which is due to inherent interaction among process components. Another is assignable cause, which is due to events that are not part of the normal process. SPC stresses bringing a process into a state of statistical control, where only common cause variation exists, and keeping it in control. A control chart is used to distinguish between variation in a process resulting from common causes and assignable causes.
If the process is in control, and if standard assumptions are met, points will demonstrate a normal distribution around the control limit. Any points outside either of the limits, or in systematic patterns, imply a new source of variation would be introduced. A new variation means increased quality cost. Additional types of control charts exist, including: cumulative sum charts that detect small, persistent step change model departures and moving average charts, which use different possible weighting schemes to detect persistent changes (Hawkins and Olwell 1996).


Design for Quality
Variation in the inputs to a process usually results in variation in the outputs. Processes can be designed, however, to be robust against variation in the inputs. Response surface experimental design and analysis is the statistical technique that is used to assist in determining the sensitivity of the process to variations in the input. Such an approach was pioneered by Taguchi.

Six Sigma
Six sigma methodology (Pyzdek and Keller, 2009) is a set of tools to improve the quality of business processes; in particular, to improve performance and reduce variation. Six sigma methods were pioneered by Motorola and came into wide acceptance after they were championed by General Electric.
Problems resulting in variation are addressed by six sigma projects, which follow a five-stage process:
1. Define the problem, the stakeholders, and the goals.
2. Measure key aspects and collect relevant data.
3. Analyze the data to determine cause-effect relationships.
4. Improve the current process or design a new process.
5. Control the future state or verify the design.
These steps are known as DMAIC for existing processes and DMADV for new processes. A variant of six sigma is called lean six sigma wherein the emphasis is on improving or maintaining quality while driving out waste.

Standards
Primary standards for quality management are maintained by ISO, principally the IS0 9000 series [2]. The ISO standards provide requirements for the quality management systems of a wide range of enterprises, without specifying how the standards are to be met. The key requirement is that the system must be audited. ISO standards have world-wide acceptance.
In the United States, the Malcolm Baldridge National Quality Award presents up to three awards in six categories: manufacturing, service company, small business, education, health care, and nonprofit. The Baldridge Criteria [3] have become de facto standards for assessing the quality performance of organizations.

References
Works Cited
Barbacci, M., M.H. Klein, T.A. Longstaff, and C.B. Weinstock. 1995. Quality Attributes. Pittsburgh, PA, USA: Software Engineering Institute/Carnegie Melon University. CMU/SEI-95-TR-021.
Chrissis, M.B., M. Konrad, and S. Shrum. 2006. CMMI for Development: Guidelines for Process Integration and Product Improvement, 2nd ed. Boston, MA, USA: Addison Wesley.
Evans, J. and W. Lindsay. 2010. Managing for Quality and Performance Excellence. Florence, KY, USA: Cengage Southwestern.
Juran, J.M. 1992. Juran on Quality by Design: The New Steps for Planning Quality into Goods and Services. New York, NY, USA: The Free Press.
Koning, H. de, J.P.S. Verver, J. van den Heuvel, S. Bisgaard, R.J.M.M. Does. 2006. "Lean Six Sigma in Healthcare." Journal for Healthcare Quality. 28(2) pp 4-11. MSDN. 2010. "Chapter 16: Quality Attributes," in Microsoft Application Architecture Guide, 2nd Edition. Microsoft Software Developer Network, Microsoft Corporation. Accessed August 31, 2012. Available online at http://msdn.microsoft.com/en-us/library/ff650706.


Moen, R.D., T.W. Nolan, and L.P. Provost. 1991. Quality Improvement through Planned Experimentation. New York, NY, USA: McGraw-Hill.
Pyzdek, T. and P.A. Keller. 2009. The Six Sigma Handbook, 3rd ed. New York, NY: McGraw-Hill. Shewhart, W.A. 1931. Economic Control of Manufactured Product. New York, NY, USA: Van Nostrand.
Wheeler, D.J. and R.W. Lyday. 1989. Evaluating the Measurement Process, 2nd ed. Knoxville, TN, USA: SPC Press.

Primary References
Chrissis, M.B, M. Konrad, S. Shrum. 2011. CMMI for Development: Guidelines for Process Integration and Product Improvement, 3rd ed. Boston, MA, USA: Addison-Wesley Professional.
Evans, J. and W. Lindsay. 2010. Managing for Quality and Performance Excellence. Florence, KY, USA: Cengage Southwestern.
Juran, J.M. 1992. Juran on Quality by Design: The New Steps for Planning Quality into Goods and Services. New York, NY, USA: The Free Press.
Moen, R.D., T.W. Nolan, and L.P. Provost. 1991. Quality Improvement through Planned Experimentation. New York, NY, USA: McGraw-Hill.
Pyzdek, T. and P.A. Keller. 2009. The Six Sigma Handbook, 3rd ed. New York, NY, USA: McGraw-Hill.
Wheeler, D.J. and R.W. Lyday. 1989. Evaluating the Measurement Process, 2nd ed. Knoxville, TN, USA: SPC Press.

Additional References
Hawkins, D. and D.H. Olwell. 1996. Cumulative Sum Charts and Charting for Quality Improvement. New York, NY, USA: Springer.

References
[1] http://asq.org/glossary/index.html
[2] http://www.iso.org/iso/iso_catalogue/management_and_leadership_standards/quality_management.htm
[3] http://www.nist.gov/baldrige/publications/criteria.cfm


Measurement

 Lead Author:
 Garry Roedler
 Contributing Authors:
 Salvatore R. Bruno, Thomas McDermott, and David Endler
-
Measurement and the accompanying analysis are fundamental elements of systems engineering (SE) and technical management. SE measurement provides information relating to the products developed, services provided, and processes implemented to support effective management of the processes and to objectively evaluate product or service quality. Measurement supports realistic planning, provides insight into actual performance, and facilitates assessment of suitable actions (Roedler and Jones 2005, 1-65; Frenz et al. 2010).
Appropriate measures and indicators are essential inputs to tradeoff analyses to balance cost, schedule, and technical objectives. Periodic analysis of the relationships between measurement results and review of the requirements and attributes of the system provides insights that help to identify issues early, when they can be resolved with less impact. Historical data, together with project or organizational context information, forms the basis for the predictive models and methods that should be used.

Fundamental Concepts
The discussion of measurement in this article is based on some fundamental concepts. Roedler et al. (2005, 1-65) states three key SE measurement concepts that are paraphrased here:
1. SE measurement is a consistent but flexible process tailored to the unique information needs and characteristics of a particular project or organization and revised as information needs change.
2. Decision makers must understand what is being measured. Key decision-makers must be able to connect what is being measured to what they need to know and what decisions they need to make as part of a closed-loop, feedback control process (Frenz et al. 2010).
3. Measurement must be used to be effective. Measurement of the Quality attribute of the technical objectives along with the cost and schedule provides the overall effectiveness of the project.

Measurement Process Overview
The measurement process as presented here consists of four activities from Practical Software and Systems Measurement (PSM 2025) and described in (ISO/IEC/IEEE 15939; McGarry et al. 2002):
1. Establish and sustain commitment
2. Plan measurement
3. Perform measurement
4. Evaluate measurement
This approach has been the basis for establishing a common process across the software and systems engineering communities. This measurement approach has been adopted by the Capability Maturity Model Integration (CMMI) measurement and analysis process area (SEI 2010), as well as by international systems and software engineering standards (ISO/IEC/IEEE 15939; ISO/IEC/IEEE 15288; ISO/IEC/IEEE 12207; SAE 2018). The International Council on Systems Engineering (INCOSE) Measurement Working Group has also adopted this measurement approach for several of their measurement assets, such as the INCOSE SE Measurement Primer (Frenz et al. 2010) and Technical Measurement Guide (Roedler and Jones 2005). This approach has provided a consistent treatment of measurement that allows the engineering community to communicate more effectively about measurement. The


process is illustrated in Figure 1 from Roedler and Jones (2005) and McGarry et al. (2002).


Establish and Sustain Commitment
This activity focuses on establishing the resources, training, and tools to implement a measurement process and ensure that there is a management commitment to use the information that is produced. Refer to PSM (2025) and SPC (2011) for additional detail.

Plan Measurement
This activity focuses on defining measures that provide insight into project or organization information needs. This includes identifying what the decision-makers need to know and when they need to know it, relaying these information needs to those entities in a manner that can be measured, and identifying, prioritizing, selecting, and specifying measures based on project and organization processes (Jones 2003, 15-19). This activity also identifies the reporting format, forums, and target audience for the information provided by the measures.
Here are a few widely used approaches to identify the information needs and derive associated measures, where each can be focused on identifying measures that are needed for SE management:
 The PSM approach, which uses a set of information categories, measurable concepts, and prosepctive measures to aid the user in determining relevant information needs and the characteristics of those needs on which to focus (PSM 2025).
 The (GQM) approach, which identifies explicit measurement goals. Each goal is decomposed into several questions that help in the selection of measures that address the question and provide insight into the goal achievement (Park, Goethert, and Florac 1996).


 ISO/IEC/IEEE 15939:2017, clause 6.3.2 provides specific information on planning for measurement. In clause 6.3.2.4, it covers the identification of information needs and the selection and definition of measures (ISO/IEC/IEEE 15939).
The following are good sources for candidate measures that address information needs and measurable concepts/questions:
 PSM Web Site - Sample Measurement Specifications (PSM 2025)
 Table: Information Categories - Measurable Concepts - Prospective Measures (ICM Table) (PSM 2025)
 PSM Guide, Version 4.0, Chapters 3 and 5 (PSM 2000)
 SE Leading Indicators Guide, Version 2.0, Section 3 (Roedler et al. 2010)
 Technical Measurement Guide, Version 1.0, Section 10 (Roedler and Jones 2005, 1-65)
 Safety Measurement (PSM White Paper), Version 3.0, Section 3.4 (Murdoch 2006, 60)
 Security Measurement (PSM White Paper), Version 3.0, Section 7 (Murdoch 2006, 67)
 Measuring Systems Interoperability, Section 5 and Appendix C (Kasunic and Anderson 2004)
 Measurement for Process Improvement (PSM Technical Report), version 1.0, Appendix E (Statz 2005)
 New Opportunities for Architecture Measurement (Carson and Kohl 2012)
 System Development Performance Measurement (NDIA and PSM 2011)
 Continuous Iterative Development (CID) Measurement Specifications (PSM 2025)
 Digital Engineering Measurement Framework, Version 1.1 (DE Measurement Framework 2022)
The INCOSE SE Measurement Primer (Frenz et al. 2010) provides a list of attributes of a good measure with definitions for each attribute; these attributes include relevance, completeness, timeliness, simplicity, cost effectiveness, repeatability, and accuracy. Evaluating candidate measures against these attributes can help assure the selection of more effective measures.
The details of each measure need to be unambiguously defined and documented. Templates for the specification of measures and indicators are available on the PSM website (2025) and in Goethert and Siviy (2004).

Perform Measurement
This activity focuses on the collection and preparation of measurement data, measurement analysis, and the presentation of the results to inform decision makers. The preparation of the measurement data includes verification, normalization, and aggregation of the data, as applicable. Analysis includes estimation, feasibility analysis of plans, and performance analysis of actual data against plans.
The quality of the measurement results is dependent on the collection and preparation of valid, accurate, and unbiased data. Data verification, validation, preparation, and analysis techniques are discussed in PSM (2025) and SEI (2010). Per TL 9000, Measurements Handbook, The analysis step should integrate quantitative measurement results and other qualitative project information, in order to provide managers the feedback needed for effective decision making (QuEST Forum 2020). This provides richer information that gives the users the broader picture and puts the information in the appropriate context.
There is a significant body of guidance available on good ways to present quantitative information. Edward Tufte has several books focused on the visualization of information, including The Visual Display of Quantitative Information (Tufte 2001).
Other resources that contain further information pertaining to understanding and using measurement results include
 PSM (2025)
 ISO/IEC/IEEE 15939:2017, clauses 6.3.3.3 and 6.3.4
 Roedler and Jones (2005), sections 6.4, 7.2, and 7.3
 INCOSE Systems Engineering Handbook, 5th Edition, Section 2.3.4.7 (INCOSE 2023)
 SE Leading Indicators Guide, Version 2.0, Sections 3 & 4 (Roedler et al. 2010)


 System Development Performance Measurement (NDIA and PSM 2011)
 Continuous Iterative Development (CID) Measurement Specifications (PSM 2025)
 Digital Engineering Measurement Framework, Version 1.1 (DE Measurement Framework. 2022)

Evaluate Measurement
This activity involves the analysis of information that explains the periodic evaluation and improvement of the measurement process and specific measures. One objective is to ensure that the measures continue to align with the business goals and information needs, as well as provide useful insight. This activity should also evaluate the SE measurement activities, resources, and infrastructure to make sure it supports the needs of the project and organization. Refer to PSM (2025) and Practical Software Measurement: Objective Information for Decision Makers (McGarry et al. 2002) for additional detail.

Systems Engineering Leading Indicators
Leading indicators are aimed at providing predictive insight that pertains to an information need. A SE leading indicator is a measure for evaluating the effectiveness of a how a specific activity is applied on a project in a manner that provides information about impacts that are likely to affect the system performance objectives (Roedler et al. 2010). Leading indicators may be individual measures or collections of measures and associated analysis that provide future systems engineering performance insight throughout the life cycle of the system; they support the effective management of systems engineering by providing visibility into expected project performance and potential future states (Roedler et al. 2010).
As shown in Figure 2, a leading indicator is composed of characteristics, a condition, and a predicted behavior. The characteristics and conditions are analyzed on a periodic or as-needed basis to predict behavior within a given confidence level and within an accepted time range into the future. More information is also provided by Roedler et al. (2010).





Technical Measurement
Technical measurement is the set of measurement activities used to provide information about progress in the definition and development of the technical solution, ongoing assessment of the associated risks and issues, and the likelihood of meeting the critical objectives of the acquirer. This insight helps an engineer make better decisions throughout the life cycle of a system and increase the probability of delivering a technical solution that meets both the specified requirements and the mission needs. The insight is also used in trade-off decisions when performance is not within the thresholds or goals.
Technical measurement includes measures of effectiveness (MOEs), measures of performance (MOPs), and technical performance measures (TPMs) (Roedler and Jones 2005, 1-65). The relationships between these types of technical measures are shown in Figure 3 and explained in the reference for Figure 3. Using the measurement process described above, technical measurement can be planned early in the life cycle and then performed throughout the life cycle with increasing levels of fidelity as the technical solution is developed, facilitating predictive insight and preventive or corrective actions. More information about technical measurement can be found in the NASA Systems Engineering Handbook, System Analysis, Design, Development: Concepts, Principles, and Practices, and the Systems Engineering Leading Indicators Guide (NASA December 2007, 1-360, Section 6.7.2.2; Wasson 2006, Chapter 34; Roedler et al. 2010).





Service Measurement
The same measurement activities can be applied for service measurement; however, the context and measures will be different. Service providers have a need to balance efficiency and effectiveness, which may be opposing objectives. Good service measures are outcome-based, focus on elements important to the customer (e.g., service availability, reliability, performance, etc.), and provide timely, forward-looking information.
For services, the terms critical success factors (CSF) and key performance indicators (KPI) are used often when discussing measurement. CSFs are the key elements of the service or service infrastructure that are most important to achieve the business objectives. KPIs are specific values or characteristics measured to assess achievement of those objectives.
More information about service measurement can be found in the Service Design and Continual Service Improvement volumes of BMP (2010, 1). More information on service SE can be found in the Service Systems Engineering article.


Linkages to Other Systems Engineering Management Topics
SE measurement has linkages to other SEM topics. The following are a few key linkages adapted from Roedler and Jones (2005):
 Project Planning - SE measurement provides the historical data and supports the estimation for, and feasibility analysis of, the plans for realistic planning.
 Project Assessment and Control - SE measurement provides the objective information needed to perform the
assessment and determination of appropriate control actions. The use of leading indicators allows for early assessment and control actions that identify risks and/or provide insight to allow early treatment of risks to minimize potential impacts.
 Risk Management - SE risk management identifies the information needs that can impact project and
organizational performance. SE measurement data helps to quantify risks and subsequently provides information about whether risks have been successfully treated to a level that that they can be managed or eliminated. Risk management relies heavily on measurement, as it quantifies potential impacts and provides data to support informed decision-making, resource allocation, and the evaluation of risk treatments or handling strategies. Thus, the risks and risk treatments identify potential new measures to provide this insight. Additionally, the results of measures may also help to identify potential new risks that should be considered for assessment and handling.
 Decision Management - SE Measurement results inform decision making by providing objective insight.

Digital Engineering (DE) Measurement
As stated in the article "Digital Engineering Measures: Research and Guidance" by McDermott et al. in the March 2022 issue of INCOSE Insight magazine, "Digital Engineering (DE) and model-based approaches are two components of enterprise digital transformation that have great promise to improve the efficiency and productivity of engineering activities, particularly for complex engineered systems." The trends towards Digital Engineering (DE) have continued, so the industry needs to be able to define and perform measurement to manage DE and make informed decisions. For DE, "data and models are the core products undergoing measurement." (McDermott et al. 2022).
In June 2022, a coalition consisting of INCOSE, NDIA, AIA, SERC, and the US DoD R&E joined with PSM to develop and publish the PSM Digital Engineering Measurement Framework. This framework is intended to supplement the foundational measurement guidance provided by ISO/IEC/IEEE 15939, PSM 2025. And other resources listed in this article. This framework provides "the initial set of constructs ... to isolate those measurements that are most closely linked to the primary benefits of DE." The guidance focuses on supplemental measures for DE specific information needs that are intended to be used along with relevant measures for other information needs of the project and other engineering activities. The DE measures "focus on the digital information products (data and models) developed and used across a product life cycle." (DE Framework 2022). This framework can be obtained from the PSM website (www.psmsc.com) or from the collaborating organizations. Version 2 of the framework is expected to be published in December 2025.
The DE measurement framework considers measures needed to provide insight for the scope of DE work activities. These include:
 Digital Infrastructure (Environment and Supporting Tools)
 Life Cycle Models (Phases/Stages and Decision Points)
 Process Models (Work Processes, Digital Artifacts)
 Data and Model Ontology (System)
 Operational, System, and Discipline Specific Data and Models


Continuous Iterative Development (CID)
Since most systems have great quantities of software, it would be remiss to ignore recent developments in measurement for software development employing Continuous Iterative Development (CID) approaches (often referred to as agile). Similarly to the DE Measurement Framework, this work is meant to supplement the foundational measurement guidance provided by ISO/IEC/IEEE 15939, PSM 2021 and other resources listed in this article. The CID Measurement Framework was developed and published by a team spanning Practical Software and Systems Measurement (PSM), the National Defense Industrial Association (NDIA), and the International Council on System Engineering (INCOSE). The framework details "common information needs and measures that are effective for evaluating CID approaches. The information needs address the team, product, and enterprise perspectives to provide insight and drive decision-making. The framework also identifies and specifies an initial set of measures identified as practical measures to address these information needs." (CID Framework 2021) It also includes a series of diagrams and an ontology to describe the development approaches and terminology used. (PSM 2025) The guidance is provided in three volumes that cover basic guidance, prioritized information needs for CID projects, and ten specifications for prospective measures. All of the volumes can be obtained from the PSM website (www.psmsc.com) or from the collaborating organizations.

Practical Considerations
Key pitfalls and good practices related to SE measurement are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing SE Measurement are provided in Table 1.

Table 1. Measurement Pitfalls. (SEBoK Original)
Name	Description

Golden Measures	  Looking for the one measure or small set of measures that applies to all projects.
 No one-size-fits-all measure or measurement set exists.
 Each project has unique information needs (e.g., objectives, risks, and issues).
 The one exception is that, in some cases with consistent product lines, processes, and information needs, a small core set of measures may be defined for use across an organization.
Single-Pass	  Viewing measurement as a single-pass activity.
Perspective	 To be effective, measurement needs to be performed continuously, including the periodic identification and prioritization of information needs and associated measures.
Unknown Information  Performing measurement activities without the understanding of why the measures are needed and what information Need	they provide.
 This can lead to wasted effort. Avoid "measurement for measurement sake".

Inappropriate Usage	 Using measurement inappropriately, such as measuring the performance of individuals or making interpretations without context information.
 This can lead to bias in the results or incorrect interpretations.


Good Practices
Some good practices gathered from the references are provided in Table 2.

Table 2. Measurement Good Practices. (SEBoK Original)
Name	Description

Periodic Review	  Regularly review each measure collected.

Action Driven	  Measurement by itself does not control or improve process performance.
 Measurement results should be provided to decision makers for appropriate action.

Integration into	 SE Measurement should be integrated into the project as part of the ongoing project business rhythm. Project Processes	 Data should be collected as processes are performed, not recreated as an afterthought.
Timely Information  Information should be obtained early enough to allow necessary action to control or treat risks, adjust tactics and strategies, etc.
 When such actions are not successful, measurement results need to help decision-makers determine contingency actions or correct problems.
Relevance to	 Successful measurement requires the communication of meaningful information to the decision-makers. Decision Makers	 Results should be presented in the decision-makers' preferred format.
 Allows accurate and expeditious interpretation of the results.

Data Availability	  Decisions can rarely wait for a complete or perfect set of data, so measurement information often needs to be derived from analysis of the best available data, complemented by real-time events and qualitative insight (including experience).
Historical Data	 Use historical data as the basis of plans, measure what is planned versus what is achieved, archive actual achieved results, and use archived data as a historical basis for the next planning effort.
Information Model	 The information model defined in ISO/IEC/IEEE (2007) provides a means to link the entities that are measured to the associated measures and the identified information need, and also describes how the measures are converted into indicators that provide insight to decision-makers.

Additional information can be found in the Systems Engineering Measurement Primer, Section 4.2 (Frenz et al. 2010), and INCOSE Systems Engineering Handbook, Section 5.7.1.5 (2012).

References
Works Cited
Carson and Kohl. 2013. New Opportunities for Architecture Measurement. Proceedings of the INCOSE International Symposium, Philadelphia 2013. Hoboken, New Jersey: Wiley & Sons.
DE Measurement Framework. 2022. PSM Digital Engineering Measurement Framework version 1.1. Practical Software and Systems Measurement. Available at: https:/ / www. psmsc. com/ Downloads/ DEPaper/ DE%20Measurement%20Framework%20ver%201. 1%202022-07-27%20final. pdf or https:/ / www. psmsc. com/ DEMeasurement
Frenz, P., G. Roedler, D.J. Gantzer, P. Baxter. 2010. Systems Engineering Measurement Primer: A Basic Introduction to Measurement Concepts and Use for Systems Engineering. Version 2.0. San Diego, CA: International Council on System Engineering (INCOSE). INCOSE-TP-2010-005-02. Accessed April 13, 2015 at http:/ / www. incose.org/ProductsPublications/techpublications/PrimerMeasurement.
INCOSE Insight. 2022. Digital Engineering Measures: Research and Guidance. Hoboken, New Jersey: Wiley. International Council on Systems Engineering (INCOSE) Insight Magazine, March 2022.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Process and Activities. 5th ed. D. D. Walden, T. M. Shortell, G. J. Roedler, B. A. Delicado, O. Mornas, Yip Y. S., and D. Endler (Eds.). San Diego, CA: International Council on Systems Engineering. Published by John Wiley & Sons, Inc.


ISO/IEC/IEEE. 2017a. Systems and Software Engineering - Software Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 12207:2017.
ISO/IEC/IEEE. 2017. ISO/IEC/IEEE 15939|Systems and software engineering - Measurement process. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), ISO/IEC/IEEE 15939:2017.
ISO/IEC/IEEE. 2023. ISO/IEC/IEEE 15288|Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
Kasunic, M. and W. Anderson. 2004. Measuring Systems Interoperability: Challenges and Opportunities.
Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).
McGarry, J., D. Card, C. Jones, B. Layman, E. Clark, J. Dean, F. Hall. 2002. Practical Software Measurement: Objective Information for Decision Makers. Boston, MA, USA: Addison-Wesley.
NASA. 2007. NASA Systems Engineering Handbook|Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), December 2007. NASA/SP-2007-6105.
NDIA and PSM. 2011. Working Group Report: System Development Performance Measurement. National Defense Industrial Association (NDIA) and Practical Software and Systems Measurement (PSM). Available at: https:/ / www.	psmsc.	com/	Downloads/	Other/ NDIA%20System%20Develpopment%20Performance%20Measurement%20Report.pdf
Park, R.E., W.B. Goethert, and W.A. Florac. 1996. Goal-Driven Software Measurement - A Guidebook. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU), CMU/SEI-96-BH-002.
PSM. 2025. Practical Software and Systems Measurement. Accessed September 29, 2025. Available at: http:/ / www.psmsc.com/.
PSM. 2000. Practical Software and Systems Measurement (PSM) Guide, version 4.0c. Practical Software and System Measurement Support Center. Available at: http://www.psmsc.com/PSMGuide.asp.
PSM. 2021. Continuous Iterative Development Measurement, version 2.1, Volumes 1, 2, and 3. Practical Software and Systems Measurement. Available at: https://www.psmsc.com/CIDMeasurement
PSM Safety & Security TWG. 2006. Security Measurement, version 3.0. Practical Software and Systems Measurement. Available at: http:/ / www. psmsc. com/ Downloads/ TechnologyPapers/ SecurityWhitePaper_v3. 0. pdf.
QuEST Forum. 2020. TL 9000 Quality Management System (QMS) Measurements Handbook, Release 5.7. Plano, TX, USA: Quest Forum.
Roedler, G., D. Rhodes, C. Jones, and H. Schimmoller. 2010. Systems Engineering Leading Indicators Guide, version 2.0. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2005-001-03.
Roedler, G. and C. Jones. 2005. Technical Measurement Guide, version 1.0. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-020-01.
SAE. 2018. Integrated Project Processes for Engineering a System. Warrendale, PA: SAE International, SAE 1001:2018.
SEI. 2010. "Measurement and Analysis Process Area" in Capability Maturity Model Integrated (CMMI) for Development, version 1.3. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).
Statz, J. et al. 2005. Measurement for Process Improvement, version 1.0. York, UK: Practical Software and Systems Measurement (PSM).


Tufte, E. 2006. The Visual Display of Quantitative Information. Cheshire, CT, USA: Graphics Press.
Wasson, C. 2005. System Analysis, Design, Development: Concepts, Principles, and Practices. Hoboken, NJ, USA: John Wiley and Sons.

Primary References
Carson and Kohl. 2013. New Opportunities for Architecture Measurement. Proceedings of the INCOSE International Symposium, Philadelphia 2013. Hoboken, New Jersey: Wiley & Sons.
DE Measurement Framework. 2022. PSM Digital Engineering Measurement Framework, version 1.1. Practical Software and Systems Measurement. Available at: https:/ / www. psmsc. com/ Downloads/ DEPaper/ DE%20Measurement%20Framework%20ver%201. 1%202022-07-27%20final. pdf or https:/ / www. psmsc. com/ DEMeasurement
Frenz, P., G. Roedler, D.J. Gantzer, P. Baxter. 2010. Systems Engineering Measurement Primer: A Basic Introduction to Measurement Concepts and Use for Systems Engineering. Version 2.0. San Diego, CA: International Council on System Engineering (INCOSE). INCOSE-TP-2010-005-02. Accessed April 13, 2015 at http:/ / www. incose.org/ProductsPublications/techpublications/PrimerMeasurement.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Process and Activities (5th ed.). D.
D. Walden, T. M. Shortell, G. J. Roedler, B. A. Delicado, O. Mornas, Yip Y. S., and D. Endler (Eds.). San Diego, CA: International Council on Systems Engineering. Published by John Wiley & Sons, Inc.
ISO/IEC/IEEE. 2017. Systems and Software Engineering - Measurement Process. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), ISO/IEC/IEEE 15939:2017.
NDIA and PSM. 2011. Working Group Report: System Development Performance Measurement. National Defense Industrial Association (NDIA) and Practical Software and Systems Measurement (PSM). Available at: https:/ / www.	psmsc.	com/	Downloads/	Other/ NDIA%20System%20Develpopment%20Performance%20Measurement%20Report.pdf
PSM. 2025. Practical Software and Systems Measurement. Accessed September 29, 2025. Available at: http:/ / www.psmsc.com/. [3]
PSM. 2000. Practical Software and Systems Measurement (PSM) Guide, version 4.0c. Practical Software and System Measurement Support Center. Available at: http://www.psmsc.com.
PSM. 2021. Continuous Iterative Development Measurement, version 2.1, Volumes 1, 2, and 3. Practical Software and Systems Measurement. Available at: https://www.psmsc.com/CIDMeasurement. [4]
Roedler, G., D. Rhodes, C. Jones, and H. Schimmoller. 2010. Systems Engineering Leading Indicators Guide,
version 2.0. San Diego, CA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2005-001-03.
Roedler, G. and C. Jones. 2005. Technical Measurement Guide, version 1.0. San Diego, CA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-020-01.


Additional References
Kasunic, M. and W. Anderson. 2004. Measuring Systems Interoperability: Challenges and Opportunities.
Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).
McGarry, J. et al. 2002. Practical Software Measurement: Objective Information for Decision Makers. Boston, MA, USA: Addison-Wesley.
NASA. 2007. NASA Systems Engineering Handbook. Washington, DC, USA: National Aeronautics and Space Administration (NASA), December 2007. NASA/SP-2007-6105.
Park, Goethert, and Florac. 1996. Goal-Driven Software Measurement - A Guidebook. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU), CMU/SEI-96-BH-002.
PSM. 2011. "Practical Software and Systems Measurement." Accessed August 18, 2011. Available at: http://www. psmsc.com/.
PSM Safety & Security TWG. 2006. Safety Measurement, version 3.0. Practical Software and Systems Measurement. Available at: http:/ / www. psmsc. com/ Downloads/ TechnologyPapers/ SafetyWhitePaper_v3. 0. pdf.
PSM Safety & Security TWG. 2006. Security Measurement, version 3.0. Practical Software and Systems Measurement. Available at: http:/ / www. psmsc. com/ Downloads/ TechnologyPapers/ SecurityWhitePaper_v3. 0. pdf.
SEI. 2010. "Measurement and Analysis Process Area" in Capability Maturity Model Integrated (CMMI) for Development, version 1.3. Pittsburgh, PA, USA: Software Engineering Institute (SEI)/Carnegie Mellon University (CMU).
Statz, J. 2005. Measurement for Process Improvement, version 1.0. York, UK: Practical Software and Systems Measurement (PSM).
Tufte, E. 2006. The Visual Display of Quantitative Information. Cheshire, CT, USA: Graphics Press.
Wasson, C. 2005. System Analysis, Design, Development: Concepts, Principles, and Practices. Hoboken, NJ, USA: John Wiley and Sons.

References
[1] http://www.psmsc.com
[2] http://www.incose.com
[3] http://www.psmsc.com/.
[4] https://www.psmsc.com/CIDMeasurement.




Knowledge Area: System Concept Definition

System Concept Definition

Contents of this Knowledge Area
 Business or Mission Analysis (Tami Katz) (Lou Wheatcraft and Mike Ryan)
 Stakeholder Needs Definition (Tami Katz) (Lou Wheatcraft and Mike Ryan)
 Lead Author:
 Tami Katz
 Contributing Authors:
 Lou Wheatcraft, Mike Ryan, Garry Roedler, and Rick Adcock
-

Concept Definition is the set of systems engineering (SE) activities in which the problem space as well as the needs and requirements of the business (or enterprise) and stakeholders are closely examined. Concept definition begins before any formal definition of the system-of-interest (SoI) is developed.
The Concept Definition activities include Business or Mission Analysis and Stakeholder Needs Definition. Within these two activities the enterprise or project decision makers, as well as additional key stakeholders, describe what a solution should accomplish and why it is needed. Both why and what need to be answered before consideration is given to how the problem will be addressed (i.e., what type of solution will be implemented) and how the solution will be defined and developed.

Concept Definition Activities
There are two primary activities discussed under Concept Definition: Business or Mission Analysis and the definition of Stakeholder Needs:
1. The Business or Mission Analysis activity defines the problem, threat, or opportunity being addressed which could result in a new or modified product or service. This process also includes identification of major stakeholders, the mission, goals, and objectives of the SoI, the measures of success, identification of business needs and requirements, and identification of the SoI life cycle concepts.
2. The Stakeholder Needs Definition activity uses the inputs from the Business or Mission Analysis effort to identify an integrated set of needs based on inputs from the major stakeholders, higher-level requirements, and an analysis of the life cycle concepts, drivers, constraints, and risks.
The products and artifacts produced during Concept Definition are then used in the System Definition process.


Drivers of Concept Definition
There are many considerations associated with concept definition activities, which are further elaborated below.

The Role of Architecture Development
The activities of Business or Mission Analysis and Stakeholder Needs Definition occur concurrently with the processes of System Architecture Design Definition. The activities to address a full set of needs includes identification of SoI life cycle concepts, external interfaces and constraints, as well as candidate solutions and an exploration of the architecture (logical and functional).

Drivers of Solution on Problem Definition
During Concept Definition, the problem definition and solution exploration depend on each other: solutions should be developed to respond appropriately to well-defined problems; and problem definitions should be constrained by what is feasible in the solution space. System analysis is used to provide the links between problems and solutions.
There are two paradigms that drive the ways in which concept definition is done: push and pull. The pull paradigm is based on providing a solution to an identified problem or gap, such as a missing mission capability for defense or infrastructure. The push paradigm is based on creating a solution to address a perceived opportunity, such as the emergence of an anticipated product or service that is attractive to some portion of the population (i.e. whether a current market exists or not). This can impact other life cycle processes, such as verification and validation, or alpha/beta testing as done in some commercial domains.
As systems generally integrate existing and new system elements in a mixture of push and pull, it is often best to combine a bottom-up approach with a top-down approach to take into account legacy elements, as well as to identify the services and capabilities that must be provided in order to define applicable interface requirements and constraints. This is discussed in Applying Life Cycle Processes.

New System or Modification of Existing System
The activities of concept definition determine whether the enterprise strategic goals and business needs will be addressed by a new system, a change to an existing system, a service, an operational change, or some other solution. For a new system, the organization or customer has decided to start with a "blank piece of paper". This is often
referred to as a green-field system, and analysis efforts during concept definition characterize the as-is or
present-state of the SoI in terms of the problem, threat, or opportunity and then characterize the to-be or future-state of the SoI in obtaining the resolution of the problem, threat, or opportunity.
An existing system can be evolved or transformed into the desired system. This is often referred to as a brown-field system, and the data that has been established for the original system can be used as inputs into the analysis efforts during concept definition activities. The existing system may have been developed for other purposes, the stakeholder needs or the operational environment may have changed, e.g., a change in threats. The analysis effort will explore the problem space and possible solutions to the gaps of the existing system to address the problem, threat or opportunity.


References
Works Cited
None.

Primary References
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-118-99940-0.
INCOSE. 2022. INCOSE Needs and Requirements Manual, version 1.1. INCOSE-TP-2021-002-01.
ISO/IEC/IEEE. 2023. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.

Additional References
Hitchins, D. 2007. Systems Engineering: A 21st Century Systems Methodology. Hoboken, NJ, USA: John Wiley & Sons.
ISO/IEC. 2003. Systems Engineering - A Guide for The Application of ISO/IEC 15288 System Life Cycle Processes.
ISO/IEC. 2007. Systems Engineering - Application and Management of The Systems Engineering Process. Geneva, Switzerland: International Organization for Standards (ISO)/International Electrotechnical Commission (IEC), ISO/IEC 26702:2007.
Jackson, S., D. Hitchins, and H. Eisner. 2010. "What is the Systems Approach?" INCOSE Insight. (April 2010): 41-43.
NASA. 2016. Systems Engineering Handbook. Washington, D.C., USA: National Aeronautics and Space Administration (NASA). NASA/SP-2016-6105 rev 2.


Business or Mission Analysis

 Lead Author:
 Tami Katz
 Contributing Authors:
 Lou Wheatcraft and Mike Ryan
-
The primary start to the engineering of any system-of-interest (SoI) is to obtain an understanding the objectives behind the development of the SoI, which is performed as part of the Concept Definition process.
Business or Mission Analysis, the first process performed in Concept Definition, establishes a definition of the overall strategic problem or opportunity and identification of potential solution classes to address the problem (or take advantage of an opportunity) (ISO/IEC/IEEE 15288). The solution could be a new system, a change to an existing system, a service, an operational change or some other solution.
This analysis effort identifies the primary purpose(s) of the SoI (its "mission"). The second Concept Definition process is called Stakeholder Needs Definition, which explores what capabilities are needed to accomplish the mission or the intended use of the system.
Business or Mission Analysis is often performed iteratively with the Stakeholder Needs Definition process to better understand the problem space, as well as options in the solution space.

Purpose and Definition
The purpose of Business or Mission Analysis is to understand a mission or market problem, threat, or opportunity, and to establish the goals, objectives and measures of success of a potential solution class. This consists of a strategic analysis related to emerging needs, capability gaps, threats, opportunities, and potential solutions by a project team or by an organization to obtain its business objectives prior to establishing a project team.

Principles and Concepts
For the SoI under development, success depends on the project team's understanding the data and information that constitutes the purpose of the SoI (why?), acceptability or desirability of a solution (what?), measures (how well?), and the conditions in which the SOI must operate (in what operating environment?)
Prior to SoI development, a project champion works with key stakeholders to clearly define the problem, threat, or opportunity for which the project team is to address. Identifying the specific problem, threat, or opportunity will enable the project team to understand if the project is worth doing, why the system is needed, and the expected capabilities of the SoI. The next step is to identify the mission, goals, and objectives (MGOs) based on the defined problem, threat or opportunity, as well as the measures of success.
 The Mission statement is based on the analysis of a problem, threat, or opportunity that the project was formed to address, the expected outcome of the SoI being developed, and defines the "why". Why does the project exist? Why is the SoI needed? What value does it bring to the organization?
 Goals are elaborated from the mission statement to communicate what must be achieved to result in a successful mission. Goals allow the organization to divide the mission statement into manageable pieces and promote a shared understanding between the project team and the business operations level stakeholders of what needs to be done to achieve the mission.
 Objectives are elaborated from the goals to provide more details concerning what must be done that will result in the goals and mission to be achieved. What does the project team need to do to achieve the goals? What does the SoI need to do to achieve the goals?


 Measures are quantitative metrics used to validate the SoI against the objectives as well as to manage system development across the life cycle, expressed as Measures of Effectiveness (MOE) (reference Measurement).
As part of the Business or Mission Analysis effort, an initial assessment by key stakeholders of the SoI life cycle concepts is used to support identification of candidate solution classes. The organization then performs an evaluation of whether to proceed with development of the SoI based on analysis of the data and alignment with the organization's enterprise strategy. Upon agreement to proceed, the data from the Business and Mission Analysis effort is used by the project team to complete the rest of the concept development process for the SoI, as shown in Figure 1.

There are several outputs of the Business or Mission Analysis process:
 identification of major stakeholders,
 definition of the problem, threat, or opportunity to which the project must address,
 elaboration of the MGOs and measures of success,
 identification of preliminary life cycle concepts and the preferred solution classes,
 traceability of strategic problems, threats, opportunities, MGOs, and measures of success to the preferred solution classes, and
 confirmation of organizational support.
The effort of Business or Mission Analysis is often done at a business enterprise level, where the initial assessment results in the authorization for a project and associated budget along with an acquisition concept. For the project team responsible for developing the SoI, this means seeking an understanding of this content to ensure the outcomes of the project align with the organization's overall strategy and rationale for developing that particular SoI.
The output from the Business or Mission Analysis is then provided to the project team for use in additional analysis that establishes an overall set of needs for the solution (described in Stakeholder Needs Definition).


Process Approach
Identify Major Stakeholders
During this process the initial stakeholder identification is performed. This can be captured in a stakeholder register, noting each stakeholder and their involvement with the SoI and project, as well as establishment a ranking of the stakeholders. This list is expanded upon during Stakeholder Needs Definition. At this phase, the stakeholders will often include key members from the organization at the enterprise level.

Define the Problem, Threat, or Opportunity
Identifying the specific problem, threat or opportunity will enable the project team to understand why the system is needed, and which capabilities, functions, performance, and features that are important to the customers, users, operators, maintainers, and disposers of the system.
There are four steps to defining the problem, threat, or opportunity:
1. Identification of the organization's strategic and business operations level stakeholders that are impacted by the problem or threat or those who will benefit by pursuing the opportunity.
2. Collaboration with these stakeholders to understand how they are impacted by the problem or threat, or by those that will benefit by pursuing the opportunity.
3. Clear definition of the problem, threat, or opportunity.
4. Stakeholder concurrence with the problem, threat, or opportunity statement.
Example Problem/Threat/Opportunity statement: Marketing is seeing an increase of work from home personnel that are purchasing more coffee makers. Existing coffee makers have single functions while consumers want a multi-function hot beverage maker to produce a blend of options like traditional brew or espresso. There is a huge opportunity if first to market. (INCOSE GtNR 2022)

Define the Mission, Goals, Objectives and Measures
To achieve the MGOs and measures, the project champion collaborates with the stakeholders that participated in defining the problem, threat, or opportunity to better understand what they view as an acceptable outcome by asking them a series of questions:
 How do they define success?
 What measures would the stakeholders use to determine success?
 What is the intended use of the SoI and in what operating environment?
 What capabilities, features, functions, and performance do they need?
 What are their expectations for quality and compliance (such as with standards and regulations)?
 What specific outcome(s) do they expect once the SoI is delivered?
 What are the measures of success, e.g., measures of effectiveness (MOE), expected of the SoI?
For cases where there is no existing SoI, a common approach is to characterize the "as is" or "present state" in terms of the problem, threat, or opportunity and then characterize the "to be" or "future state" in terms of the resolution of the problem, neutralizing the threat, or the ability to pursue the opportunity.
For existing systems that need to be updated, a common approach is to list the problems or issues with the existing "as-is" system and the reasons it needs to be changed. Key information includes what value they believe will result from the change by addressing: What can the existing SoI no longer do, what performance needs to be improved, what changes need to be made concerning interactions with external systems, what updates are needed as a result of changes to applicable standards and regulations, what updates are needed as a result of changes in the operational environment or new threats (e.g., security)?


It is also important to understand different perspectives. The problem, threat, or opportunity, MGOs, and measures from a business perspective may be different than the user's perspective, both must be addressed. The user does not necessarily care about the developing organization's profits, time to market, market share, etc., they care about how the resulting SoI meets their needs. Thus, there could be several sets of MGOs and measures that need to be defined and met by the project team from both a business perspective and a user perspective of the SoI to be developed. This may lead to conflicts, e.g., product price vs. profitability vs. market share, which need to be prioritized based on the organizational enterprise strategy.
Examples (derived from INCOSE GtNR 2022):
 Mission statement: Increase revenue by providing a home-based, one-stop, multi-function hot beverage maker.
 Consumer Goals: Product a blend of options. Obtain home brew beverage quickly.
 Consumer Objective: Options of brew or expresso. Receive finished home brew coffee within minutes upon request.
 Consumer-focused Measure: Finished home brew provided within 2 minutes of activation at the selected temperature. Rationale: Consumer survey results.
 Business Goals: Increase revenue. Increase market share.
 Business Objective: Increase market share of Company X sales regions.
 Business-focused Measure: Improve current market share of Company X sales regions by 20%. Rationale: Aligns with the enterprise strategic vision.

Capture Preliminary Life Cycle Concepts
Life cycle concepts, such as the operational concept, define what the SoI needs to do and how well during its intended use in the expected operational environment, from multiple perspectives. This includes various use cases with expected interactions with external systems, identification of drivers and constraints, expected risks to success in the context of the MGOs and measures.
Preliminary life cycle concepts are defined by the organization and include preliminary concepts for acquisition, development, manufacturing or coding, verification, validation, deployment, operations, support, and retirement. Operational concepts include high level operational modes or states, operational scenarios, potential use cases, misuse cases, loss scenarios, or usage within a proposed business strategy. These concepts enable feasibility analysis and evaluation of solution options. For example, concerning acquisition and development how much of the development effort will be done inhouse or outsourced to a supplier? Who will be the overall integrator? If development is done in house, what are the concepts for the supply chain for parts and components?
In a Model-Based Systems Engineering effort, these life cycle concepts are generated using mission analysis, such as defining use cases associated with users and life cycle stage (Figure 2). Reference Model-Based Systems Engineering (MBSE) for more information regarding usage of MBSE.




The life cycle concepts will be further refined within the stakeholder needs definition process. As part of the preliminary life cycle concepts, candidate solution classes are suggested for a possible range of approaches to address the MGOs, as part of a Functional Architecture definition activity.

Identify Uncertainties and Risks
The preliminary life cycle concepts include some level of uncertainty. This leads to risks which need to be identified and managed using the Risk Management process. These risks may also serve as inputs to the generation of additional life cycle concepts (such as addressing cyber security or hazards to successful operation).

Identify Preliminary Concepts of the Solution Space, Including Alternatives
A solution class refers to the means of achieving a solution. Examples include development of a new system, modifying or upgrading an existing system, leveraging multiple existing systems, or generating operational changes.
Possible solution classes to address the problem, threat, or opportunity are assessed against the preliminary life cycle concepts, MGOs and measures. Feasibility of a solution class and its capability to meet the strategic needs are key decision criteria, as well as feasibility considerations in terms of cost, schedule, technology, legal, ethical, environmental, sustainability, etc. The Decision Management process is used to evaluate alternatives and to guide selection. The assessment of alternatives can include modeling, simulation, analytical techniques, or expert judgment to understand the risks, feasibility, and value of the alternative solution classes.
The conclusion of this effort results in the identification of preliminary concepts of the solution space, including alternatives, which are traceable to the organization defined problems/threats/opportunities and MGOs/measures.


Assessment of Continuation of Effort
Upon the conclusion of the Business or Mission Analysis process the organization performs an evaluation on whether to commence with development of the SoI. The key determination is alignment with the enterprise strategy. If the effort is to be continued, a project team will take the outcomes of the Business or Mission Analysis effort and commence with the Stakeholder Needs Definition activity.

References
Works Cited
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
INCOSE. 2022. INCOSE Needs and Requirements Manual (NRM), version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2022. INCOSE Guide to Needs and Requirements (GtNR), version 1. INCOSE-TP-2021-003-01

Primary References
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-118-99940-0.
INCOSE. 2022. INCOSE Needs and Requirements Manual (NRM), version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2022. INCOSE Guide to Needs and Requirements (GtNR), version 1. INCOSE-TP-2021-003-01

Additional References
None.


Stakeholder Needs Definition

 Lead Author:
 Tami Katz
 Contributing Authors:
 Lou Wheatcraft and Mike Ryan
-
Stakeholder Needs Definition, the second process in Concept Definition, explores what capabilities are needed by various stakeholders for the system-of-interest (SoI) to accomplish the mission. The outcome of the Stakeholder Needs Definition process is used as the basis of System Validation, as well as input into the System Requirements Definition process.
Note that the first process, Business or Mission Analysis, is often performed iteratively with Stakeholder Needs Definition to better understand the problem, threat, or opportunity space, as well as options of the solution space.

Purpose and Definition
Stakeholder needs represent a user, acquirer, customer, and other stakeholders perspective of the SoI, which are then transformed into system requirements which communicate a developer perspective of the SoI. When stakeholder needs are combined with results of multiple analysis activities that includes risks, drivers, constraints, and life cycle concepts analysis, as shown in Figure 1, the result is an overall integrated set of needs.

The establishment of the integrated set of needs forms the basis of a full understanding of the capabilities expected of the SoI, and these needs are ultimately transformed into a set of design-input requirements on the SoI as part of the System Requirements Definition process.


Principles and Concepts
The results of the Business or Mission Analysis is provided as inputs into the Stakeholder Needs Definition process (shown in Figure 2). This input includes the problem, threat or opportunity statement capturing why the project is worth doing, the mission, goals and objectives (MGOs) and measures of success used as the criteria for assessing project success, along with identification of major stakeholders, initial life cycle concepts, and initial concepts of the solution space (architecture and design).

The Stakeholder Needs Definition process continues the life cycle concepts definition activities to ensure the system-of-interest (SoI) provides the capabilities needed by users and other stakeholders in the intended operational environment. This process is much more than identification and elicitation of need or requirement statements from various stakeholders, it consists of a series of analysis activities done to ensure that all parameters are captured, including risks, drivers, constraints, as well as the SoI life cycle concepts analysis and maturation; this effort results in an integrated set of needs as shown in Figure 3.




The result of this process is a well-formed integrated set of needs that is correct, consistent, complete, and feasible. It is this set of needs that defines the scope of the project which the organization agrees to provide the resources necessary for developing the SoI, and against which the requirements, design, and the realized SoI will be validated against.

Nomenclature discussion
This process is frequently referred to as the "Stakeholder Needs and Requirements" process. Because various guides, textbooks, and standards refer to stakeholder "expectations, needs, and requirements" as if they are the same, resulting in confusion as to what is an "expectation" versus a "need" and a "requirement", this article focuses on the process of developing an integrated set of stakeholder needs. The term "stakeholder requirements" is considered a set of requirements on the SoI established by the stakeholder, as transformed from their needs, which are provided as additional input towards the life cycle concepts analysis and maturation activities from which the integrated set of needs is defined. In Figure 3, this is designated as both "stakeholder needs, requirements, and expectations" as well as the "higher-level requirements" inputs.


Process Approach
Inputs to the Stakeholder Needs Definition Process
The inputs from the Business or Mission Analysis process includes identification of major stakeholders, definition of the problem, threat, or opportunity, elaboration of the MGOs and measures of success, capture of preliminary life cycle concepts, and identification of initial concepts of the solution space (architecture and design).

Activities of the Process
There are several activities performed during this process:
 Identify additional stakeholders or classes of stakeholders across the life cycle.
 Elicit, capture, consolidate and prioritize stakeholder needs, requirements, and expectations.
 Identify drivers and constraints on the SoI and its development efforts.
 Identify potential risks (such as threats and hazards) that could prevent the SoI from successful operation (see Risk Management for further information on addressing risks).
 Mature and analyze the life cycle concepts.
 Identify, baseline, and manage the integrated set of needs.
The activities behind each of these are described in the following sections.

Identify Stakeholders
Stakeholders are the primary source of needs and requirements, therefore for the project to be successful, all relevant stakeholders must be identified and included from the beginning of the project. Leaving out a relevant stakeholder often results in missing needs and requirements and a failure to pass system validation. Stakeholders can include, but are not limited to, customers, sponsors, organization decision makers, regulatory organizations, developing organizations, integrators, testers, users, operators, maintainers, support organizations, the public at large (within the context of the business and proposed solution), and those involved in the disposal or retirement of the SoI. Stakeholders can be both internal and external to the organization. There can be many stakeholders for a SoI over its life cycle; therefore, considering the life cycle concepts provides a thorough source for stakeholder identification. Examples of stakeholders are provided in Table 1.

Table 1. Stakeholder Identification Based on Life Cycle Stages. (SEBoK Original)

Life Cycle Stage
Example of Related Stakeholders
Concept
Paying customer, sponsor, project team, project manager, procurement, research and development, suppliers, regulating authorities, public, marketing, end users, operators, compliance office, regulators, owners of enabling systems, owners of external systems, Approving Authorities
Development
Acquirer, subject matter experts (SMEs), system architects, design engineers, suppliers, procurement, suppliers (technical domains for components realization), integration team
Production, Integration, Verification and Validation
Production organization, process engineers, quality control, production verification, product acceptance, supply chain, test engineers, system integration engineers, system verification engineers, system validation engineers, operators/users, owners of enabling systems, facility personnel, contracting, approving authorities, regulators, safety personnel, security personnel
Logistics and Maintenance
Customer/technical support, replacement part providers, service technicians, trainers, IT, quality engineer, inspectors, those conducting post development system verification and system validation activities
Operation
Normal users, unexpected users, etc.
Disposal
Operators, waste management, regulators, public


A key part of stakeholder identification is to determine who the approving authorities are within the group of stakeholders. It cannot be assumed that the only stakeholder that has this authority is the "customer". The approving authorities include stakeholders that are responsible for formally certifying, qualifying, and approving the system for use in its operational environment by its intended users. There can be approving authorities both within and external to the organization, especially for highly-regulated systems.
An approach for recording the list of stakeholders is to use a stakeholder register that includes key information for each stakeholder and how they are involved with the SoI. It is recommended that the project team re-evaluate the stakeholder community periodically to ensure successful engagement with stakeholders, keeping them engaged across all life cycle activities, and managing changes in stakeholders and their needs.

Stakeholder Needs Elicitation
For stakeholder needs elicitation, the project team engages the stakeholders to understand their needs, requirements, and expectations for all life cycle stages. The elicitation activities allow the project team to discover what is needed, what processes exist, how stakeholders interact with the SoI, what happens over the SoI's life cycle from their perspective (examples are provided below).
It is recommended that several techniques or methods be considered during elicitation activities to better accommodate the diverse set of sources (INCOSE NRM 2022):
 structured brainstorming workshops,
 interviews and questionnaires,
 workshops or focus groups,
 use of visual and descriptive content associated with the SoI,
 technical, operational, and/or strategy documentation review, and
 feedback from System Verification and System Validation processes. A broad range of topics are discussed with the stakeholders:
 Obtain feedback on the outputs from the Business and Mission Analysis process (problem, threat, opportunity, MGOs, etc.).
 Identify the life cycle stages the stakeholder represents and their role.
 For each life cycle stage, obtain input on expected and off-nominal use cases, scenarios, misuse cases, and loss scenarios.
 Identify the desired capabilities and functions from their perspective.
 Identify interactions with external systems.
 Obtain input on their view of quality and other "ilities", such as reliability, testability, serviceability, etc.
 Inquire about their view of risks and hazards, along with likelihood and consequence.
 For each need, capture rationale concerning "why".
 Ask about criticality of the stated needs and relative priorities of all inputs obtained.
During elicitation activities, it is important to ask the stakeholders to provide rationale for and prioritize what they are asking for. Some needs will be especially important to the stakeholder, while others may be "nice-to-haves" and not critical to the system being able to accomplish its intended use. There will be some things that the stakeholder may be able to "live without" given budget or schedule constraints. Providing rationale often reveals the real need, especially when the stakeholder expresses a need as an implementation.
The information obtained from the elicitation activities needs to be recorded with trace to the stakeholder register. In a Model-Based Systems Engineering (MBSE) effort, the elicited needs can be included in the MBSE system model and traced to the stakeholders.


Identify Drivers and Constraints
Drivers and constraints are things outside of the project's control that constrain or drive the solution space. Drivers and Constraints can include design constraints (parts, materials, organizational design best practices, etc.), design standards, production constraints (existing technology, facilities, equipment, cost, throughput, etc.), human factors, (human/machine interface - HMI), regulations (law), operating environment (natural, induced), other environment (social, cultural), existing systems: (interactions, interfaces, dependencies), technology maturity, cost, schedule.
Concurrently with the stakeholder elicitation activities, drivers and constraints need to be identified and recorded within the SoI's integrated dataset.

Identify, Assess, and Handle Risk
Risks are anything that could prevent the delivery of a successful SoI (providing what is needed, within budget and schedule, with the needed quality), anything that could impact the intended use of the SoI in its intended environment by its intended users, or anything that would allow unintended users to prevent the intended use of the SoI or to use the SOI in an unintended manner, e.g., hack into an aircraft and use the aircraft as a weapon.
As part of the elicitation activities, issues and risks must be identified and assessed. The identified risks from the Business or Mission Analysis effort should be used as a starting point, and then additional elaboration of risks is needed along with how the project is expected to handle those risks. Stakeholders should be asked specifically about any issues and risk they think could prevent the SoI to be developed and delivered within budget, schedule, or risk during operations. Failing to address risk will result in an incomplete set of needs and resulting design input requirements resulting in a SoI that will fail system validation.
The project must do a risk assessment of each of the risks (see Risk Management). Some risks could lead to development of life cycle concepts as part of the mitigation (such as for hazards), which are expanded further in the next section.

Life Cycle Concepts Analysis and Maturation
As a result of life cycle concept analysis and maturation activities, architectural and analytical/behavioral models are developed. Based on the resulting information, the preliminary set of life cycle concepts established in Business or Mission Analysis are transformed into a mature set of life cycle concepts that are consistent, correct, complete, and feasible. Models and diagrams (such as those used in Model-Based Systems Engineering (MBSE) are excellent analysis tools for defining and maturing feasible life cycle concepts by providing a context for needs, and are key to help ensure correctness, completeness, and consistency of both individual needs and the integrated set of needs.
The logical architecture defines system boundary and functions, from which more detailed needs can be determined (interactions and interdependencies between logical elements of the system). As part of life cycle concept maturation, functions are defined, grouped logically, and relationships and interactions between those functions are captured. Supporting analytical and behavioral models can be developed to help assess behavior, interactions between parts of the architecture, and determine the performance characteristics of the functions.

Define and Baseline the Integrated Set of Needs
The project team derives an integrated set of needs that reflect the set of feasible system life cycle concepts, MGOs, measures, business operations level and system level stakeholder needs, drivers and constraints, and risk mitigation (Figure 4). These outcomes include results of the life cycle concepts analysis and maturation activity to determine expected functionality (what the stakeholders need the system to do), expected performance and quality ("how well" characteristics), the conditions of action, including triggering events, system states, and operating environments ("under what operating conditions"), as well as compliance with standards and regulations.




This integrated set of needs is what will be transformed into the set of design input requirements. In addition, it is this integrated set of needs which the design input requirements, design, and realized system will be validated against.
Needs are written in a structured, natural language from the perspective of what the stakeholders need the SoI to do. To help distinguish needs from the requirements, the needs statements do not include the word "shall" (or other word that depicts the statement is a requirement). It is recommended that need statements use a different format from requirements, such as: "The stakeholders need the system to" (INCOSE GtWR 2023). See Table 2 for example need statements.

Table 2. Example Need Statements. (SEBoK Original)

ID
Name
Need Statement
Rationale
Source
N1
Variable Temperature Settings.
The user needs the coffee maker to have two temperature settings (warm and hot) for the water temperature.
Focus groups provided input that a multi-select option for temperature is a desired feature.
Consumer input
N2
Prohibit Brew if Container Missing
The user needs the coffee maker to not brew unless a coffee container is in place.
Mitigation of risk of user error prior to starting coffee maker brew process.
Risk mitigation
N3
Coffee Maker Color Options
The company stakeholders need the coffee maker to come in four colors: black, grey, blue and red.
Marketing survey found that offering multiple colors provides competitive advantage with consumers.
Marketing stakeholder
N4
Ease of Use
The user needs the coffee maker to be easy to use (clearly defined user interface and a minimum of steps to get a cup of coffee).
Focus groups provided input that they are more likely to purchase products with simple user interfaces and operation controls.
Consumer input


The integrated set of needs must be recorded within the SoI's integrated dataset in a form and media suitable for review and feedback from the stakeholders, as well as a form that allows traceability. It is critical that the project team has confirmation from the stakeholders that their needs, requirements, expectations, MGOs, measures, drivers and constraints, and risk are properly communicated by integrated set of needs, this is supported by traceability. In a model-based systems engineering (MBSE) approach, the needs can be included in the system model, where they can be traced to their source (life cycle, stakeholder, MGO, risk, etc.).
Once the integrated set of needs is captured, they are used as inputs into the System Requirements Definition process.

References
Works Cited
INCOSE. 2022. INCOSE Needs and Requirements Manual, version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2022. INCOSE Guide to Needs and Requirements, version 1. INCOSE-TP-2021-003-01. INCOSE. 2023. INCOSE Guide to Writing Requirements (GtWR), version 4. INCOSE-TP-2006-004-04.

Primary References
INCOSE. 2022. INCOSE Needs and Requirements Manual, version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2022. INCOSE Guide to Needs and Requirements, version 1. INCOSE-TP-2021-003-01.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-118-99940-0.
ISO/IEC/IEEE. 2018. Systems and software engineering - Requirements engineering. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission/ Institute of Electrical and Electronics Engineers (IEEE), (IEC), ISO/IEC/IEEE 29148.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.

Additional References
INCOSE. 2023. INCOSE Guide to Writing Requirements, version 4. INCOSE-TP-2006-004-01.

Relevant Videos
 INCOSE Webinar, Life cycle Concepts and Needs Definition [1]
 How to Get Project Requirements from Project Stakeholders [2]

References
[1] https://youtu.be/hEGfNLvuyXo?list=PLVfZ7HbxxzBVnavoSAMUXjP49triK36KN
[2] https://www.youtube.com/watch?v=YJ4wCbKJeXY


System Requirements Definition

 Lead Author:
 Tami Katz
 Contributing Authors:
 Lou Wheatcraft and Mike Ryan
-
The System Requirements Definition process transforms the stakeholder view of desired capabilities into a technical, developer view of how the system can achieve those capabilities. System requirements describe requirements which the system-of-interest (SoI) must fulfill to satisfy the stakeholder needs and are expressed in an appropriate combination of well-formed textual statements and supporting models or diagrams. Inputs into this process are the life cycle concepts and integrated set of needs generated during the System Concept Definition activities.
System requirements play major roles in systems engineering, as they:
 Form the basis of system architecture and design activities.
 Form the basis of system integration and verification activities.
 Provide a means of communication between the various project team members that interact throughout the project.
Outputs of the System Requirements Definition process serve as inputs to a number of other technical processes, which include System Design Definition, System Architecture Definition, and System Verification.

Principles and Concepts
System Requirements Definition uses the outcome of the System Concept Definition activities to address what the system must do so that the integrated set of needs will be realized by the SoI. As shown in Figure 1, this information is then provided as input to the System Architecture Definition and System Design Definition processes, as well as the System Verification process.

Defining requirements is not only an exercise in writing it is also an exercise in engineering. Every requirement represents an engineering decision as to what the SoI must do, or a quality the system must have, to meet the needs from which they were transformed. Determination of what the system must do to meet a need is through a process of detailed requirement analysis, which can include the development and use of models, simulations, and prototypes.


A requirement statement is the result of a "formal transformation of one or more needs or parent requirements into an agreed-to obligation for an entity to perform some function or possess some quality within specified constraints with acceptable risk." (INCOSE NRM 2022). In this context the use of the term "quality" means an inherent feature or a distinguishing attribute.
There are many types of requirements; this article describes the requirements which are used as inputs into the System Architecture and System Design Definition processes. As such, these requirements can be referred to as design input requirements, which are defined iteratively and recursively as the integrated system is decomposed into subsystems and system elements (the SoI could exist at any level of a system architecture).

Process for Generating System Requirements
Transforming Needs to System Requirements
The System Requirement Definition activities begin with the transformation of the integrated set of needs into a set of requirements for the SoI. These requirements must be appropriate to the level that the SoI exists within the system architecture and communicate "what" the SoI must do to meet the needs, avoiding requirements that state implementation of "how" to achieve the design realization of the physical SoI.
Needs communicate the stakeholder's perspective concerning their expectations of what they need the system of interest (SoI) to do from an external, black box view.
 Example: The user needs the coffee maker to stop heating water once the user-selected temperature has been achieved.
The sources of needs are described in Stakeholder Needs Definition. These sources include the stakeholder expectations and needs, drivers and constraints, risk analysis, and life cycle concept analysis and maturation activities. These needs are treated as inputs to the System Requirement Definition process, which results in a set of design input requirements for the SoI.
Requirements communicate the technical, developer perspective concerning what the SoI must do to meet the stakeholder needs from an internal white box view.
 Example: The Coffee Maker shall stop the heating function once the selected Brew Temperature has been achieved.
The process of generating a requirement statement is more than changing the subject of the need statement, it is an analysis of what the system must do to achieve what is needed. There are many types of analyses and tools that are used to make this determination:
 functional analysis,
 interface analysis,
 data flow diagrams,
 performance analysis, and
 needs to transformation matrix.
Requirement analysis for functions and performance can be performed by using system models (supported by Model-Based Systems Engineering (MBSE) applications). Key enabling model views include activity diagrams, sequence diagrams, state machine diagrams, and structure diagrams (for hierarchy and interfaces). An example functional analysis is shown in Figure 2.




Close and frequent coordination with the stakeholders is necessary to ensure the transformation is accurate and traceability is maintained. This results in a set of system requirements communicating measurable characteristics which can form the basis for system realization. A detailed analysis of a single need statement may result in multiple requirements expressing what the system must do to meet it, including definition of measurable performance criteria (INCOSE NRM 2022).

Use of Attributes
An attribute is additional information associated with an entity which is used to aid in its definition and management. Well-chosen attributes, when properly defined and tracked, can enable correct interpretation and management of requirements throughout the system life cycle. There are several useful attributes to consider:
 rationale,
 trace to source or parent,
 system verification success criteria,
 owner,
 category,
 status,
 criticality, and
 priority.
The use of the rationale attribute helps communicate why the requirement is needed, any assumptions made, the source of numbers, the results of related design studies, or any other related supporting information. This supports further requirements analysis and decomposition, as well as identifying the source of any requirement value. Defining the system verification success criteria helps ensure the requirement is well-formed, is verifiable, and aids in the planning for the project's verification program (INCOSE NRM 2022).


Categorizing Requirements
It is useful to organize the requirements into categories, grouping similar types of requirements together within a set. An example set of categories is shown in Table 1. While organizations may have different categorizations, for the set of requirements to be complete each category topic in Table 1 must be addressed.

Table 1. Example Types of Requirement Categories. (Derived from the INCOSE Needs and Requirements Manual)

Category
Description
Function/ Performance
The primary functions and associated performance that the SoI needs to perform in terms of its intended use. The functions address the capabilities and features the stakeholders expect the SoI to have; performance addresses how well, how many, how fast attributes of the function. Many of the primary functions involve interactions (interfaces) between the SOI and systems external to the SOI. All critical and high priority needs would be included in this category.
Fit/Operational
Requirements dealing with functions that deal with a secondary or enabling capabilities, functions, and interactions between the SoI and external systems needed for the system to accomplish its primary functions. This includes functions concerning the ability of the system to interface with, interact with, connect to, operate within, and become an integral part of the macro system it is a part. Fit includes human system interactions and interfaces as well as both the induced and natural environments (conditions of operations, transportation, storage, maintenance). For example, needs associated with safety, security, power, cooling, transportation and handling, storage, maintenance, and disposal.
Form
Physical Characteristics. The shape, size, dimensions, mass, weight, and other observable parameters and characterizes that uniquely distinguish a system. For software, form could address programming language, lines of code, memory requirements.
Quality
Fitness for use. For example, various "-ilities" such as reliability, testability, operability, availability, maintainability, operability, supportability, manufacturability, and interoperability.
Compliance
Conformance with design and construction standards and regulations.
See Table 2 for example requirement statements, attributes and categories.

Table 2. Example Requirement Statements. (SEBoK Original)

Reqt ID
Requirement Title
Requirement
Rationale
Category
R1
Variable Temperature Settings
The Coffee Maker shall have two user-selectable settings for coffee brewing: Warm: 96°C +/- 2°C, Hot: 100°C+/- 2°C.
Based on focus group inputs for selectable temperature; values are from analysis associated with consumer research surveys and safety regulations.
Function/Performance
R2
Prohibit Brew if Container Missing
If coffee container is not fully inserted into the brew location, the Coffee Maker shall prohibit brew function.
Protective measure related to off-nominal use case.
Function/Performance
R3
Operational Life
The Coffee Maker shall have an operational life greater than or equal to 3 years.
Analysis shows expected operational service of 1,000 hours over three years of usage, ensuring appliance lasts through the warranty period.
Quality
R4
User Inputs
The Coffee Maker shall limit the number of user inputs to: Power On, Brew Temperature, Brew Size, Brew Start.
User inputs are assessed from focus groups to minimum set of inputs to achieve coffee maker full set of life cycle concepts.
Fit/Operation


Requirements At Levels Within the Hierarchy
Requirements definition is an iterative and recursive process performed concurrently with the Architecture Definition Process. Upon determination of the system hierarchy, a requirement tree can be established showing the system level requirements and the supporting requirements at the lower-level elements of the hierarchy. Figure 3 shows an example flow from system requirement to lower-level requirements, and an example requirement tree is shown in Figure 4.





Allocation is the process by which the requirements at one level of the physical architecture are assigned to those entities at the next lower level of the architecture that have a role in the implementation of the allocated requirement. This involves an analysis where the project team determines what "role", if any, each subsystem or system element at the next level of the architecture has in the implementation of the requirement being allocated. Requirements generated at the lower level are referred to as child requirements of an allocated parent requirement.
An important concept associated with allocation is budgeting. Budget refers to the total value of a parameter defined at the system level. The system requirement value may be decomposed to ensure the lower-level elements contribute their portion, enabling the system level to achieve its total value. Budgeted quantities result in requirements that have a dependency - a change in one will result in the need to change another. Budgeted values can include mass (weight), power usage, bandwidth, time, and quality attributes).


Principles Governing System Requirements
Addressing Interfaces and Interactions
For each part of the architecture, an external interface diagram provides the ability to address interactions between the SoI and external systems (Figure 5).

The phrase "interface requirement" refers to the specific form or template for a functional requirement that deals with an interaction of a system across an interface boundary with another system. Writing interface requirements is a three-step process (INCOSE NRM 2022):
1. Identify the interface boundaries and interactions across those boundaries.
2. Define the interactions across the interface boundaries (the characteristics of what is crossing the boundary, and media involved).
3. Write the interface requirements. Example interface requirement:
 The System shall send telemetry to the Ground System as defined in ICD 123, Table X.


Model Form of Requirements
Requirements can be recorded and managed via a document, database, or in the form of a model:
 Models provide the capability to address completeness in terms of functions, inputs to those functions, sources of those inputs, outputs, and customers (destinations/users) for those outputs.
 Models help facilitate communication by making complex systems and processes easier to understand (a picture is worth a thousand words....).
 Models enable the capture of interdependencies of requirements to other aspects of the system dataset, such as inputs, needs, architecture, test cases, etc.
 Models enable quantitative analyses and execution of simulations.
In MBSE, the model form of requirements can be expressed as a diagram (Figure 6) or within a table in the modeling tool (Figure 7), using well-formed textual statements as part of a requirement model element. Refer to Requirements Management for further guidance on usage of tools associated with textual and model requirements.






Addressing Unknowns
When initially generating a set of requirements, there is often a set of parameters which may require future analysis to determine their actual value. One common method to do this is to use a placeholder in the requirement statement to indicate the requirement is drafted, yet further work is needed before it is considered complete. When a value is unknown, a common approach is to use the "To Be Determined" (TBD) indication within the requirement statement, in place of an actual value. When a value is determined but confidence is low (e.g., feasibility has not been assessed), a method to reflect this is to use the "To Be Resolved" (TBR) indication next to the value. Together, TBRs and TBDs are referred to generically as "TBXs". Keeping track of TBXs allows for awareness of the maturity of the requirements throughout the life cycle and is a valuable metric to evaluate completion and maturity of the integrated set of needs and set of design input requirements.
TBXs can lead to risk if not addressed by the project team prior to significant work in establishing the design solution. TBX management is the process of identifying the TBXs in a requirement set, establishing the work needed to resolve closure of the issue, identifying the owner of the work, and systematically iterating through and completing the actions to enable removal of these placeholders in the requirements.

Traceability
Traceability is a powerful way to manage the design input requirements, especially across levels and across subsystems and system elements within a specific level as well as manage the requirements across the life cycle. Traceability helps ensure the requirements trace to their needs, and that they are correct and complete. Traceability also helps identify allocation of requirements to lower-level system elements of the architecture. Traceability is used to access any impacts of changes to requirements or other types of data across the life cycle, enabling insight into whether that change is beneficial or costly.
Defining a traceability relationship model at the beginning of the project enables an understanding of which relationships will be established and managed via traceability throughout the development of the SoI. An example traceability model is shown in Figure 8 (INCOSE NRM 2022).





Planning for System Verification
A best practice is to do early planning for how the project will perform system verification. Defining the system verification success criteria, strategy, and method when the requirements are generated helps ensure the requirement statements are worded properly, are within the scope of the project plans, and demonstrate they have the characteristic of "verifiable". This information can be captured within the attributes defined for the requirement.

Assessing the Requirements
Requirements should be assessed to gauge whether they are well-formed and that they meet the intent of the needs from which they were transformed. Concepts behind assessment of the requirements are captured with the terms "requirement verification" and "requirement validation", which are not the same concepts described for system verification and system validation.
 Requirement verification activities address: Are the requirements well-formed, i.e., do the individual requirements and sets of requirements have the characteristics and follow the rules defined in the organizations criteria for
well-formed requirements?
 Requirement validation activities address: Do we have the right requirements, i.e., do the requirements clearly communicate the intent of the needs, parent requirements, and other sources from which they were transformed, in a language understandable by the architectural definition, design definition, and manufacturing/coding teams? Validation addresses if the requirements are correct and are also achievable.
There are several methods that can be used to verify and validate requirements, such as standard peer review techniques and comparison of each requirement against a set of requirements characteristics and the integrated set of needs. For requirements communicated in a textual form, guidelines exist for writing well-formed requirements; they include recommendations about the syntax of requirements statements, wording (exclusions, representation of concepts, etc.), and characteristics (specific, measurable, achievable, feasible, testable, etc.) (INCOSE GtWR 2023).


System Requirement Definition Artifacts
The System Requirements Definition process results in a variety of artifacts:
 well-formed requirements recorded in models, databases, or documentation,
 requirement tree,
 traceability of requirements to other data,
 defined interactions across boundaries,
 performance budgets, and
 initial system verification plans.

Requirements Management
Requirements Management (RM) is performed to ensure alignment of the system, subsystem, and system element requirements with other representations, analyses, and artifacts of the system across the life cycle. It includes providing an understanding of the requirements, obtaining commitment, managing changes, maintaining bi-directional traceability among the requirements and with the rest of the system definition, and alignment with project resources and schedule. The Requirements Management article provides additional guidance on methods for performing requirements management.

References
Works Cited
INCOSE. 2022. INCOSE Needs and Requirements Manual (NRM), version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2023. INCOSE Guide to Writing Requirements (GtWR), version 4. INCOSE-TP-2006-004-04.

Primary References
ISO/IEC/IEEE. 2018. Systems and Software Engineering - Requirements Engineering. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 29148.
ISO/IEC/IEEE. 2023.Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023.
INCOSE. 2023. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-118-99940-0.
INCOSE. 2022. INCOSE Needs and Requirements Manual (NRM), version 1.1. INCOSE-TP-2021-002-01. INCOSE. 2022. INCOSE Guide to Needs and Requirements (GtNR), version 1. INCOSE-TP-2021-003-01. INCOSE. 2023. INCOSE Guide to Writing Requirements (GtWR), version 4. INCOSE-TP-2006-004-04.


Additional References
INCOSE. 2022. INCOSE Guide to Verification and Validation (GtVV), version 1. INCOSE-TP-2021-004-01.

Relevant Videos
 INCOSE Requirements Working Group YouTube Channel [1]

References
[1] https://www.youtube.com/@incoserwg891




Knowledge Area: System Architecture Design Definition

System Architecture Design Definition

Contents of this Knowledge Area
 Functional Architecture (Caitlyn Singam and Jeffrey Carter)
 Logical Architecture (Alan Faisandier and Garry Roedler) (Rick Adcock)
 Physical Architecture (Alan Faisandier and Rick Adcock)
 Lead Authors:
 Jeffrey Carter and Caitlyn Singam
-
The system architecture design defines system behavior and structure characteristics in accordance with derived requirements. The architecture ensures that the system elements operate together in the applicable operating environment to satisfy Stakeholder needs. Figure 1 illustrates the system design phenomenon based on Hamilton's Principle: a system is composed of interacting elements exchanging data, energy, or mass to impact the state of cooperating elements resulting in continuous, discrete, or emergent behaviors at progressive levels of aggregation or decomposition.

Systems Engineering has traditionally applied intuitive domain-specific [e.g., aerospace, defense, automotive, consumer, ...] product practices emphasizing processes and procedures. The practices in conjunction with proficient


writing skills manually organize design configuration information in a disparate collection of documents. The documents depict the system architecture design with textual description and graphical figures using unique organizational adopted notation without formal semantics. The documents require manual updating to synchronize design configuration information resulting in consistency issues in addition to cost and schedule inefficiencies.
This article describes a model-based system architecture design definition approach with the Systems Modeling Language [SysML] for product development, integration, and verification. This approach enables digital transformation design initiatives to employ Model-Based System Engineering [MBSE] practices similar to other design engineering disciplines [EE, ME, SW].
SysML provides industry standard graphical and textual [added with SysML-v2] notations with formal semantics to define system design requirements, behavior and structure characteristics with traceability to the associated requirements. The system design model provides an Authoritative Source of Truth [ASoT] digital repository of the project technical baseline including requirement, functional, logical, and physical design representations for each system, subsystem, and component design abstraction level. Integrated system design model simulation capabilities with verification criteria of end-to-end system "digital threads" enable evaluation of key performance parameters to verify design decision or discover and resolve design defects in digital environments. The system design model with integrated simulation capabilities provides a system "digital twin" as an authoritative representation of the physical system including digital thread end-to-end simulations with all the data, models, and infrastructure necessary to optimize the system design digitally and explore design alternatives for system improvements to evolving missions and threats. The approach is tailorable to satisfy specific project objectives.

System Architecture Design Overview
System architecture design definition includes system behavioral and structural analyses to define a holistic technical solution that satisfies Stakeholder needs. The model-based system architecture design definition approach provides an implementation for the ISO/IEC/IEEE-15288 Architecture Definition technical lifecycle process. The approach defines practices to develop, integrate, and employ digital system design models for cross-domain collaboration by applying product domain-specific design knowledge and expertise.
The system architecture design defines the structural elements and their behavior interactions in the applicable operating environment to satisfy Stakeholder needs. The architecture includes a project overview with representations of system requirements, functional behavior & interactions, logical and physical configuration items. Figure 2 illustrates the system architecture design definition approach.

The following describes the model-based system architecture design definition approach activities and information for the digital system design model.
1. Provide a project overview by describing the scope of the project and the system/project boundaries.
1. System mission description relative to the project's Stakeholder needs with requirements traceable to the system needs.
2. Glossary of terms with descriptions of the design model organization, environment, development approach, SysML conventions and custom profiles
2. Define the system requirements and verification criteria derived from the Stakeholder Needs to specify the system capabilities, functions, interfaces, performance, characteristics, operating conditions and environments.


1. System use cases reflect black-box functionality, solution constraints, boundaries, external human and system interfaces.
2. Capabilities and requirements derived from the Stakeholder's needs verified with engineering analysis,
demonstration, inspection, and test results throughout the hierarchical system structure of elements.
3. Define the system functional hierarchical functions and subfunctions with their behavior interactions to satisfy Stakeholder needs. Each function defines input-to-output transformations to satisfy one or more allocated requirement(s).
1. System use case elaboration identifies system capabilities with activity, sequence, and state machine diagrams to describe system functional operations decomposed into User tasks, system functions and subfunctions with the associated requirements and verification criteria.
2. System element interactions define how the functions and subfunctions operate together via interfaces to provide capabilities.
4. Define the logical system structural elements to identify logical configuration items without a specific design implementation, referred to as the technology Platform Independent Model [PIM]. Each logical configuration item has a set of allocated functions and subfunctions with specified property attributes, interfaces, and functional performance requirements for programmatic make vs. buy decisions. Also, each logical element has a corresponding physical design element with additional lower-level design details. For example, an automobile design will specify a logical combustion engine with requirements to establish a contractual baseline for production/procurement.
1. Recursive white-box analyses identify logical configuration items with allocated functions, subfunctions, and interfaces for implementation by the corresponding physical configuration item.
2. Logical configuration items include hierarchical subsystems, assemblies, subassemblies, and components based on the system complexity.
5. Define he physical system structural elements to identify a specific design implementation for each logical structural element, referred to as a technology Platform Specific Model [PSM]. The physical configuration items comply with the allocated requirements and have a specific manufacturer's part number identification. For example, an automobile will have a specific V8 gas, diesel, or propane combustion engine in accordance with the requirements and include additional physical engine component configuration items [e.g., pistons, spark plugs, cam shaft, ...].
1. Recursive design analyses with electrical, mechanical, and software engineering to identify the specific design implementation for physical configuration items [i.e., manufacture and part number identification].
2. Physical configuration items provide a design implementation for the corresponding logical element including the required property attributes and functional operations.


System Architecture Design Definition Model
Figure 3 provides an example for the organization of the digital system design model. The design model provides an Authoritative Source of Truth [ASoT] repository for a project's system technical baseline including requirements, functional, logical, and physical design representations for each system, subsystem, and component design abstraction level. The design model also provides design libraries for product-line management and reuse.

The digital system design model enables the following:
 Specifies system behavior and structure characteristics with traceability to the associated requirements.
 Provides an Authoritative Source of Truth [ASOT] digital repository of a project's approved technical baseline across engineering, production, and sustainment including requirement, functional, logical, and physical design representations for each system, subsystem, and component design abstraction level for collaboration and decision making.
 Provides product design libraries to adapt product designs to stakeholder needs with new, modified, and existing system capabilities.
 Integrated system design model simulation capabilities with verification test cases of end-to-end system "digital
threads" enable evaluation of key performance parameters to verify design decision, discover and resolve design defects in digital environments before the expense of producing prototypes.
 Assessment of design changes in all model usages for compliance, with any issue(s) flagged for corrective action.
 Provides a system design model with integrated simulation capabilities providing a system "digital twin" representing an authoritative representation of the physical system including digital thread end-to-end simulations with all the data, models, and infrastructure necessary to optimize the system design digitally and explore design alternatives for system improvements to evolving missions and threats.
 Provides design model scripts to export functional & interface specifications, design & requirements traceability and design descriptions reports.


System Architecture Design Definition Model Viewpoints and Views
The architecture model includes multiple views of the system design features with the information necessary to address each stakeholder's viewpoint and concerns. Figures 4a and 4b provide typical system views and viewpoints which are tailorable by specific projects, if necessary.







System Architecture Design Definition Modeling Ecosystem
Digital system design model integration within an engineering development ecosystem including electrical, mechanical, software and specialty engineering models enables system-level simulations. The system simulations provide initial design verification in digital environments to discover and resolve design defects before producing physical prototypes. Figure 5 provides an example of a model-based system design ecosystem.

The digital system design model provides an executable representation of a system in terms of the hierarchical structural elements and their behavior interactions to satisfy Stakeholder needs in the applicable operating environment.
 Hierarchical structural elements include subsystems, assemblies, subassemblies, and components enabling separation of concerns between each design abstraction level.
 Element interactions involve the exchange of data, energy, force, or mass that trigger state changes in the cooperating elements resulting in discrete, emergent, or continuous behaviors at progressive levels of aggregation or decomposition.
The executable design model enables digital simulations to confirm system functional performance, accuracy, timeliness, and stability with verification criteria. In addition, the system response to operating condition variations is evaluated including deterministic and stochastic disturbances to discover design defects and enhancements before the expense of producing physical prototypes. The governing principle is to develop digital system design models with high-fidelity simulation capabilities to realistically emulate systems to create a digital twin with digital threads to evaluate design alternatives in virtual computing environments without producing prototypes as shown in Figure 6.




 Digital threads are analytical frameworks providing end-to-end system simulation representations to evaluate key performance parameters in virtual environments by exchanging information between different modeling tools across the lifecycle.
 Digital twins are authoritative representations of physical systems including the digital thread end-to-end connections with all the data, models, and infrastructure needed to create and optimize a system's lifecycle digitally. Digital twins enable project team collaboration, system simulation performance assessments, design change impact evaluations, and product-line management reuse libraries.

System Architecture Design Definition Illustrative Example
Figure 7 provides an example automobile product to illustrate how the digital design model can specify, analyze, and design the system. The scope of the example is an automotive powertrain subsystem consisting of an engine, drivetrain, and four-wheel assemblies. The drivetrain assembly consists of transmission, driveshaft, differential, and two axle shaft rod subassemblies. The intent is to demonstrate the system architecture design definition approach and design solution accuracy is not a high priority.




Figure 8 provides the automobile system context and use cases. The diagram defines the automobile system boundary, Stakeholder capability needs, and external interfaces with. The design analyses will focus on the "Drive Vehicle" capability which includes the "Control Vehicle Acceleration" function allocated to a logical and physical system "Powertrain" subsystem.
 The powertrain subsystem is composed of engine, drivetrain, and wheel assemblies.
 The engine assembly components interact to generate torque by consuming fuel and air.
 The drivetrain assembly is composed of transmission, driveshaft, differential, and two axle rod shaft subassemblies. The drivetrain interacts with the engine to distribute amplified torque to the wheels.
 The transmission subassembly amplifies the engine torque.
 The driveshaft subassembly delivers the amplified torque to a differential.
 The differential subassembly transfers the delivered torque to axle rod shaft.
 The axle shaft rod subassembly provides the amplified torque [rotational force] to the four wheels.
 The four-wheel assemblies interact with the road surface to apply the torque and move the vehicle.
 The Driver's interaction with the vehicle determines the speed and direction of travel.
 The vehicle speed and direction of travel is affected by environmental conditions.
 A Mechanic uses an external diagnostic tool to read vehicle fault codes during maintenance.
 The automobile's fuel is filled at an external fuel [gas-diesel-propane] or electrical charging station.




The following three sub-articles [functional, logical, and physical architecture] illustrate the model-based system architecture design definition approach for the automobile system example to define a holistic solution. The functional architecture article has been provided. The logical and physical architecture articles will be updated in future SEBoK releases.

References
Works Cited
Bill Schindel; SEBoK Part-3: Systems Engineering STEM Overview
Will Roper. There is No Spoon: The New Digital Acquisition Reality. US Air Force: Assistant Secretary of the Air Force, 07-October 2020
U.S. DOD; Digital Engineering Strategy; Office of the Deputy Assistant Secretary of Defense for Systems Engineering. June 2018.


Primary References
INCOSE, Systems Engineering Handbook - 5th Edition: A Guide for System Life Cycle Processes and Activities, John Wiley & Sons Ltd., 2023
ISO/IEC/IEEE-15288, Systems and Software Engineering: System Life Cycle Processes, 2023 ISO/IEC/IEEE-42010; Software, Systems and Enterprise - Architecture Description; 2022 OMG; Systems Modeling Language [SysML] Standard - v1.7; August 2022
OMG; Systems Modeling Language [SysML] Standard - v2 beta 2; April 2024 OMG; Model Driven Architecture Guide; 2003
Lenny Delligatti; SysML Distilled: A brief Guide to the Systems Modeling Language Addison-Wesley Professional; 2013
Sanford Friedenthal, Alan Moore, Rick Steiner; A Practical Guide to SysML: The Systems Modeling Language - 3rd Edition; Morgan Kaufmann; October 2014
Tim Weilkiens, Jesko G. Lamm, Stephan Roth, Markus Walker; Model-Based System Architecture - 2nd Edition; John Wiley & Sons Ltd., 2023
Tim Weilkiens; Systems Engineering with SysML/UML: Modeling, Analysis, Design; Morgan Kaufmann; 2011 Mark Maier; The Art of Systems Architecting - 3rd Edition; CRC Press; 2009
Jon Holt, Simon Perry; SysML for Systems Engineering; The Institution of Engineering and Technology; 2008

Additional References
Charles Wasson; System Analysis, Design, and Development - Concepts, Principles, and Practices; John Wiley & Sons; 2006
Katsuhiko Ogata; Modern Control Engineering; Prentice-Hall Inc; 1970


Functional Architecture

 Lead Authors:
 Caitlyn Singam and Jeffrey Carter
-
A system's functional architecture is the inter-related set of transformative processes and purposeful input-output tasks (i.e., functions) that a system performs, or can perform, on input(s) from external or internal sources in order to produce output(s) that supports the achievement of mission objectives. More simply, functional architecture defines the various actions a system can perform in support of specific goals, and how those actions relate to each other in order to collectively give the system the appropriate capabilities to meet those goals. The handling of internal inputs and outputs (such as those generated by and passed between sub-functions) are encompassed in functional architecture as well.
Since a system's functional architecture only defines the system in relation to transformative functions and their inputs/outputs, it is not in and of itself a complete definition of all aspects of the system design. Functional architecture is thus considered as an architectural "view" or "perspective", rather than as a standalone sub-unit of the overall system architecture. Other system architectural views, such as logical architecture and physical architecture, can be used to provide limited context for a given system's functional architecture without the need to examine all aspects of a complete system architecture.
Functional architectures are typically represented via abstract system models when used as part of documentation capturing and/or defining the characteristics and behaviors of a system of interest. Capturing a system's functional architecture is a key part of system architecture design definition? and is typically done early on in a system's life cycle. The closely associated task of functional architecture modeling is generally performed at the same time and in advance of any system development efforts, though there are instances (e.g., in studies of natural systems) where there may be an interest in documenting the functional architecture of a system already in operation. Once developed, functional architecture models provide a useful means of elucidating the processes which underlie a system's abilities and behaviors to stakeholders, and consequently can be used later on in the system life cycle as well, in support of verification and validation (V&V) efforts and system design review activities.
This article discusses how functional architecture relates as a concept to other facets of system architecture, and discusses key principles related to the development and documentation of functional architecture in practice.

Purpose
The purpose of functional architecture is essentially stated directly in the name: it defines what functions and sub-functions exist within a system of interest (SoI), and the metaphorical "layout" or architecture which connects or otherwise relates these functions. Specifically, these function definitions involve the identification of the system's inputs and outputs (both main and intermediary), and the expression of system activities in terms of the actions they perform, either directly or in association with auxiliary system processes, to transform those inputs into output elements and behavioral outcomes (ISO/IEC/IEEE 15288:2023). The idea of a "function" in the specific context of functional architecture is thus arguably closer to how it is used in mathematics (in the sense of "y is a function of x") or computer programming than in other aspects of systems engineering, where "function" takes on a broader definition generally along the lines of actions performed in pursuit of a desired outcome (Hitchins 2008) and not directly tied to input-output transformations.


Relation to Behavioral Architecture
Functional architecture is distinct from the closely related concept of behavioral architecture, which it can be easily conflated with due to the similar technical meanings of the terms "behavior" and "function". Both functional and behavioral architecture concern purposeful actions undertaken by a given system, and the manner in which those actions enable the production of observable features such as system modes and mode transitions, but differ in terms of the lenses through which they view and define the system's actions.
Functional architecture relates to input-output transformations: the manner in which a system operates on, and/or in relation to, intangible and tangible inputs from the entities, users, and environments which exist around it in the surrounding system context through the transformation of inputs into outputs. Behavioral architecture, in contrast, is more concerned with the sequencing and execution of system actions, and how system actions interact with checkpoint conditions and the initiation/completion of other system tasks in order to produce behavior.

Application in practice
An overall system architecture is generally defined very early on in the system life cycle, as it plays a key role in translating the system concept definition into a viable system design (INCOSE 2023). Functional architecture, as one of many potential "views" of that system architecture, offers a lens through which one can consider the system in question in order to ensure that key elements of the system architecture are not omitted or overlooked, and to furthermore ensure that changes in aspects of the system architecture that were defined outside the scope of the functional view do not conflict or otherwise cause issues with the system's functionality.
The functional architecture view of a completed system architecture should, at minimum, define the following:
1. the functional capabilities that the system uses to fulfill mission objectives and meet stakeholder needs;
2. the required inputs and outputs for those system functions;
3. the steps through which the system will transform provided inputs into the desired outputs;
4. the grouping of those steps into independently executable sub-functions, if sub-functions are being employed, with corresponding definitions of the inputs and outputs for those sub-functions;
5. the variations in the inputs, outputs, and execution of the system's function/sub-functions for each system mode, if the system has multiple modes; and
6. the internal and external interfaces enabling input flow and output flow for each defined function, sub-function, and auxiliary function.
Given that functional architecture is merely a partial "view" of the overall system architecture, it is generally a good practice to consider a system's functional architecture in juxtaposition with other architectural views for context. Logical architecture, physical architecture, and functional architecture are often discussed in conjunction with each other (Pineda and Smith 2010; Borky and Bradley 2019; Stief et al. 2018) since they provide distinct but mutually relevant perspectives of how the system's capabilities are implemented in a given system design (Broy et al. 2009). Taken together as a trio, they provide a fairly comprehensive portrait of the overall system architecture, and can be as key lenses through which to develop design concepts for new systems or examine the architecture of pre-existing ones. Figure 1 provides the functional architecture viewpoint and view within the system design model.



Modeling
A system's functional architecture is an abstract concept; consequently, while it might be possible to deduce the functional architecture of an existing system through observation and testing of the system while it is in operation (as might be necessary when examining/documenting a natural system), doing so is generally a non-trivial, time-intensive task. Thus, a model of a system's functional architecture, which provides a representation of the system's functionality in a manner that can be accessed and understood by relevant parties, is a useful means through which individuals can interact with information about system's functional architecture concept. It is worth noting, however, that a functional architecture model is not equivalent to the system's functional architecture itself: while a system's functional architecture refers to the conceptual idea of how a system transforms its inputs into outputs, a functional architectural model serves as a representation or expression of that concept to communicate understanding of the system's functionality. As with any model, a functional architectural model will not necessarily capture every possible nuance of what is being modeled, and in cases where one is attempting to model the functional architecture of a system without complete knowledge of the system requirements, etc. that impacted the details system's functionality (natural systems again being an example of this), it is entirely feasible to have a functional architecture model that does not match the functional architecture of the system. The terms "functional architecture view" and "functional architecture model" should thus not be used interchangeably as the former refers an idea (a specific aspect of the overall system architecture), and the latter to a representation used to communicate the key aspects of that idea in a manner that may be imperfect and/or incomplete.
There are multiple options for how one can express a system's functional architecture in model form. The optimal type of model for representing any one given system's functional architecture is something that is usually best assessed on a case-by-case basis depending on the system and scope of the model's intended use. Text-based descriptive architecture models, for instance, are suitable solutions for systems with straightforward functional architectures that only involve a few functions and inputs/outputs since those architectures can be described in paragraph form without too much difficulty. In cases where the functional architecture involves a large number of conditional operations or highly interconnected processes, a visual diagram-based model (Youngs et al. 1999) or digital software model (Lemazurier, Chapurlat, and Grossetête 2017; Brinkkemper and Pachidi 2010) are likely to be preferable to text-based descriptions in terms of accurately representing the full gamut of system functionality while still making it feasible to extract information from the model without undue effort (Nowodzienski and Navas 2023; Younse, Cameron, and Bradley 2021). The principles of model-based systems engineering (MBSE) tend to be useful in ensuring the development of a quality system architecture model, and it is thus recommended for individuals to apply such principles when performing architecture modeling in various contexts (Estefan 2007; Kaslow et al. 2017). Software packages for generating digital MBSE-friendly models sometimes include tools that automatically check the model for errors (e.g., incorrectly expressed data flows), which can be useful when modeling informational flow through system functions.
For individuals using Unified Modeling Language (UML), Systems Modeling Language (SysML), or other standardized graphical modeling approaches to express their system concept, the functional architecture and behavioral architecture views are often considered and evaluated jointly due to their coordinated expression in SysML diagrams. Figures 2-5 are presented below for the reader's edification as illustrative exemplars of some of the diagram types of relevance in a functional architecture view of a SysML model, including a Use Case Diagram for a system (Figure 2), a Block Definition Diagram of hierarchical system functions (Figure 3), an Activity Diagram describing an individual system function (Figure 4), and a State Machine Diagram of the overall system (Figure 5). The diagrams below are presented in the example context of an automobile powertrain application.















References
Works Cited
Borky, John M., and Thomas H. Bradley. 2019. "Designing in a Logical/Functional Viewpoint." In Effective Model-Based Systems Engineering, edited by John M. Borky and Thomas H. Bradley, 153-216. Cham: Springer International Publishing. https://doi.org/10.1007/978-3-319-95669-5_5.
Brinkkemper, Sjaak, and Stella Pachidi. 2010. "Functional Architecture Modeling for the Software Product Industry." In Software Architecture, edited by Muhammad Ali Babar and Ian Gorton, 198-213. Berlin, Heidelberg: Springer. https://doi.org/10.1007/978-3-642-15114-9_16.
Broy, Manfred, Mario Gleirscher, Stefano Merenda, Doris Wild, Peter Kluge, and Wolfgang Krenzer. 2009. "Toward a Holistic and Standardized Automotive Architecture Description." Computer 42 (12): 98-101. https://doi.org/10.1109/MC.2009.413.
Estefan, Jeff A. 2007. "Survey of Model-Based Systems Engineering (MBSE) Methodologies." INCOSE MBSE Focus Group 25 (8): 1-12.
Hitchins, Derek K. 2008. Systems Engineering: A 21st Century Systems Methodology. John Wiley & Sons.
INCOSE, ed. 2023. INCOSE Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. 5th edition. Hoboken, NJ: Wiley.
Kaslow, David, Bradley Ayres, Philip T. Cahill, Laura Hart, and Rose Yntema. 2017. "A Model-Based Systems Engineering (MBSE) Approach for Defining the Behaviors of CubeSats." In 2017 IEEE Aerospace Conference, 1-14. https://doi.org/10.1109/AERO.2017.7943865.


Lemazurier, L., V. Chapurlat, and A. Grossetête. 2017. "An MBSE Approach to Pass from Requirements to Functional Architecture." IFAC-PapersOnLine, 20th IFAC World Congress, 50 (1): 7260-65. https://doi.org/10.1016/j.ifacol.2017.08.1376.
Nowodzienski, Pierre, and Juan Navas. 2023. "From Model-Based to Model and Simulation-Based Systems Architectures-Achieving Quality Engineering through Descriptive and Analytical Models." INSIGHT 26 (1): 40-50. https://doi.org/10.1002/inst.12428.
Pineda, Ricardo L., and Eric D. Smith. 2010. "Functional Analysis and Architecture." In Systems Engineering Tools and Methods. CRC Press.
Stief, Paul, Jean-Yves Dantan, Alain Etienne, and Ali Siadat. 2018. "A New Methodology to Analyze the Functional and Physical Architecture of Existing Products for an Assembly Oriented Product Family Identification." Procedia CIRP, 28th CIRP Design Conference 2018, 23-25 May 2018, Nantes, France, 70 (January): 47-52. https://doi.org/10.1016/j.procir.2018.02.026.
Youngs, R., D. Redmond-Pyle, P. Spaas, and E. Kahan. 1999. "A Standard for Architecture Description." IBM Systems Journal 38 (1): 32-50. https://doi.org/10.1147/sj.381.0032.
Younse, Paulo J., Jessica E. Cameron, and Thomas H. Bradley. 2021. "Comparative Analysis of a Model-Based Systems Engineering Approach to a Traditional Systems Engineering Approach for Architecting a Robotic Space System through Knowledge Categorization." Systems Engineering 24 (3): 177-99. https://doi.org/10.1002/sys.21573.

Primary References
ANSI/IEEE. 2000. Recommended Practice for Architectural Description for Software-Intensive Systems. New York, NY, USA: American National Standards Institute (ANSI)/Institute of Electrical and Electronics Engineers (IEEE), ANSI/IEEE 1471-2000.
INCOSE. 2023. Systems Engineering Handbook - A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
ISO/IEC/IEEE. 2011. Systems and Software Engineering - Architecture Description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.

Additional References
None.


Logical Architecture

 Lead Authors:
 Alan Faisandier and Garry Roedler
 Contributing Author:
 Rick Adcock
-
Logical Architecture Model Development may be used as a task of the activity "Develop candidate architectures models and views," or a sub-process of the System Architecture Design Definition process. Its purpose is to elaborate models and views of the functionality and behavior of the future engineered system as it should operate while in service. The logical architecture model of a engineered system of interest (SoI) is composed of a set of related technical concepts and principles that support the logical operation of the system. It may include a functional architecture view, a behavioral architecture view, and a temporal architecture view. Other additional views are suggested in architecture frameworks, depending on the domain.
Note: The term Logical Architecture is a contraction of the expression Logical View of the System Architecture.

Concepts and Principles
Functional Architecture Model
A functional architecture model is a set of functions and their sub-functions that defines the transformations performed by the system to complete its mission.
Function and Input-Output Flow - In the context of System Architecture, functions and input-output flows are architecture entities. A function is an action that transforms inputs and generates outputs, involving data, materials, and/or energies. These inputs and outputs are the flow items exchanged between functions. The general mathematical notation of a function is y = ( x ,t), in which y and x are vectors that may be represented graphically and t = time.
In order to define the complete set of functions of the system, one must identify all the functions necessitated by the system and its derived requirements, as well as the corresponding inputs and outputs of those functions. Generally speaking, there are two kinds of functions:
1. Functions that are directly deduced from functional and interface requirements. These functions express the expected services of a system necessary to meet its system requirements.
2. Functions that are derived and issued from the alternative solutions of the physical architecture model and are dependent upon the result of the design; additionally, they rely upon on technology choice to implement the logical architecture model elements.
Functional Hierarchy/Decomposition of Functions - At the highest level of a hierarchy (Figure 1), it is possible to represent a system as a unique, central function (defined as the system's mission) that in many ways is similar to a "black box" ("F0" in plan A-0 in Figure 1). In order to understand, in detail, what the system does, this "head-of-hierarchy" (F0) is broken down into sub-functions (F1, F2, F3, F4) grouped to form a sub-level of the hierarchy (plan A0), and so on. Functions of the last level of a functional hierarchy can be called leaf-functions (F21, F22, F23, F24 in plan A2). Hierarchies (or breakdowns) decompose a complex or global function into a set of functions for which physical solutions are known, feasible, or possible to imagine.
This view of functional hierarchy represents a static view of functions which would be populated at different levels over a number of iterations, depending upon the synthesis approach used. In general, it is not created by a single top-down decomposition. A static functional hierarchy on its own does not represent how effectively the flows of


inputs and outputs are exchanged, and may need to be viewed alongside the other models below.


Behavioral Architecture Model
A behavioral architecture model is an arrangement of functions and their sub-functions as well as interfaces (inputs and outputs) that defines the execution sequencing, conditions for control or data-flow, and performance level necessary to satisfy the system requirements (ISO/IEC 26702:2007). A behavioral architecture model can be described as a set of inter-related scenarios of functions and/or operational modes.
Control (Trigger) - A control flow is an element that activates a function as a condition of its execution. The state of this element, or the condition it represents, activates or deactivates the function (or elements thereof). A control flow can be a signal or an event, such as a switch being moved to the on position, an alarm, a trigger, a temperature variation, or the push of a key on a keyboard.
Scenario (of Functions) - A scenario of functions is a chain of functions that are performed as a sequence and synchronized by a set of control flows to work to achieve a global transformation of inputs into outputs, as seen in the figures below. A scenario of functions expresses the dynamic of an upper level function. A behavioral architecture is developed by considering both scenarios for each level of the functional hierarchy and for each level of the system hierarchy. When representing scenarios of functions and behavioral architecture models, it is appropriate to use diagrams as modeling techniques, such as functional flow block diagrams (FFBD) (Oliver, Kelliher, and Keegan 1997) or activity diagrams, developed with SysML (OMG 2010). Figures 2 and 3 provide examples of these diagrams.






Operational Mode - A scenario of functions can be viewed by abstracting the transformation of inputs into outputs of each function and focusing on the active or non-active state of the function and its controls. This view is called a scenario of modes, which is a chain of modes performed as a sequence of transitions between the various modes of the system. The transition from one mode to another is triggered by the arrival of a control flow (event/trigger). An action (function) can be generated within a transition between two modes following the arrival of an event or a trigger, as demonstrated in Figure 4 below.




Behavioral Patterns - When defining scenarios or behavioral architecture models, architects may opt to recognize and use known models to represent the expected transformations and behaviors. Patterns are generic basic models that may be more or less sophisticated depending on the complexity of the treatment (Gamma, Helm, Johnson, and Vlissides 1995). A pattern can be represented with different notations. Behavioral patterns are classified into several categories, which can be seen in the following examples (see also SEBoK Part 2: Patterns of Systems Thinking):
 Basic patterns or constructs linking functions - such as sequence, iteration, selection, concurrence, multiple exits, loops with an exit, and replication.
 Complex patterns - such as monitoring a treatment, exchanging a message, man machine interfaces, modes monitoring, real-time monitoring of processes, queue management, and continuous monitoring with supervision.
 Failure detection, identification, and recovery (FDIR) patterns - such as passive redundancies, active redundancies, semi-active redundancies, and treatments with reduced performance.

Temporal Architecture Model
A temporal architecture model is a classification of the functions of a system that is derived according to the frequency level of execution. Temporal architecture models include the definition of synchronous and asynchronous aspects of functions. The decision monitoring that occurs inside a system follows the same temporal classification because the decisions are related to the monitoring of functions.
Temporal and Decisional Hierarchy Concept - Not every function of a system is performed at the same frequency. The frequencies change depending on the time and the manner in which the functions are started and executed. One must therefore consider several classes of performance. There are synchronous functions that are executed cyclically and asynchronous functions that are executed following the occurrence of an event or trigger.
To be more specific, real-time systems and command-control systems combine cyclical operations (synchronous) and factual aspects (asynchronous). Cyclical operations consist of sharing the execution of functions according to frequencies, which depend on either the constraints of capture or dispatching the input/output and control flows. Two types of asynchronous events can be distinguished:
1. Disturbances on High Frequencies (bottom of figure 5) - Decisions that are made at either the level they occur or one level above. The goal is to deter disturbances from affecting the low frequencies so that the system continues to achieve its mission objectives. This is the way to introduce exception operations, with the typical example relating to operations concerns, breakdowns, or failures.
2. Changes on Low Frequencies (top of figure 5) - Decisions pertaining to changes that are made at the upper levels. The ultimate goal is to transmit them toward bottom levels to implement the modifications. A typical example relates to operator actions, maintenance operations, etc.





Process Approach
Purpose
The purpose of the Logical Architecture Model Development is to define, select, and synthesize a system's logical architecture model to provide a framework against which to verify that a future system will satisfy its system requirements in all operational scenarios, within which trade-offs between system requirements can be explored in developing such systems.
Generic inputs to the process include system requirements, generic architecture patterns that architects identify and use to answer requirements, outcomes from system analysis processes, and feedback from system verification and validation processes. Depending on the Life Cycle Model that is chosen, there will be iterations through which these inputs and outputs, and the relationships between them evolve and change throughout the process (see also Applying Life Cycle Processes).
Generic outputs from the process are either a single logical architecture model or a set of candidate logical architecture models together with the selected independent logical architecture model and a rationale for its selection. They include, at minimum, views and models. These involve functional, behavioral and temporal views, a traceability matrix between logical architecture model elements and system requirements.


Activities of the Process
Major activities and tasks performed during this process include the following:
 Identify and analyze functional and behavioral elements:
 Identify functions, input-output flows, operational modes, transition of modes, and operational scenarios from system requirements by analyzing the functional, interface, and operational requirements.
 Define necessary inputs and controls (energy, material, and data flows) to each function and outputs that result in the deduction of the necessary functions to use, transform, move, and generate the input-output flows.
 Assign system requirements to functional and behavioral elements:
 Formally characterize functions expressions and their attributes through the assignment of performance, effectiveness, and constraints requirements. In particular, study the temporal aspects from requirements to assign duration, response time, and frequency to functions.
 Formally characterize the input, output, and control flows expressions and their attributes through assignment of interface, effectiveness, operational, temporal and constraints requirements.
 Establish traceability between system requirements and these functional and behavioral elements.
 Define candidate logical architecture models for each candidate:
 Analyze operational modes as stated in the system requirements (if any) and/or use previously defined elements to model sequences of operational modes and the transition of modes. Eventually decompose the modes into sub-modes and then establish for each operational mode one or several scenarios of functions recognizing and/or using relevant generic behavioral patterns.
 Integrate these scenarios of functions in order to get a behavioral architecture model of the system (a complete picture of the dynamic behavior).
 Decompose previously defined logical elements as necessary to look towards implementation.
 Assign and incorporate temporal constraints to previously defined logical elements, such as the period of time, duration, frequency, response-time, timeout, stop conditions, etc.
 Define several levels of execution frequency for functions that correspond to levels of decision, in order to monitor system operations, prioritize processing on this time basis, and share out functions among those execution frequency levels to get a temporal architecture model.
 Perform functional failure modes and effects analysis and update the logical architecture elements as necessary.
 Execute the models with simulators (when possible) and tune these models to obtain the expected characteristics.
 Synthesize the selected independent logical architecture model:
 Select the logical architecture by assessing the candidate logical architecture models against assessment criteria (related to system requirements) and compare them, using the system analysis process to perform assessments and decision management process for the selection (see the System Analysis and Decision Management topics). This selected logical architecture model is called independent logical architecture model because, as much as possible, it is independent of implementation decisions.
 Identify and define derived logical architecture model elements created for the necessity of design and corresponding with the derived system requirements. Assign these requirements to the appropriate system (current studied system or external systems).
 Verify and validate the selected logical architecture models (using as executable models as possible), make corrections as necessary, and establish traceability between system requirements and logical architecture model elements.
 Feedback logical architecture model development and system requirements. This activity is performed after the physical architecture model development process:


 Model the allocated logical architecture to systems and system elements, if such a representation is possible, and add any functional, behavioral, and temporal elements as needed to synchronize functions and treatments.
 Define or consolidate derived logical and physical elements induced by the selected logical and physical architecture models. Define the corresponding derived requirements and allocate them to appropriate logical and physical architectures elements. Incorporate these derived requirements into the requirements baselines of impacted systems.

Artifacts, Methods and Modeling Techniques
Logical architecture descriptions use modeling techniques that are grouped under the following types of models. Several methods have been developed to support these types of models (some are executable models):
 Functional Models - These include models such as the structured analysis design technique (SADT/IDEF0), system analysis & real time (SA-RT), enhanced Functional Flow Block Diagrams (eFFBD), and the function analysis system technique (FAST).
 Semantic Models- These include models such as entities-relationships diagrams, class diagrams, and data flow diagrams.
 Dynamic Models - These include such models as state-transition diagrams, state-charts, eFFBDs, state machine
diagrams (SysML), activity diagrams (SysML) (OMG 2010), and petri nets.
Depending on the type of domain (e.g. defense, enterprise), architecture frameworks provide descriptions that can help to represent additional aspects/views of architectures - see the section 'Enterprise Architecture Frameworks & Methodologies' in Enterprise Systems Engineering Key Concepts. See also practical means for using general templates related to ISO/IEC/IEEE 42010 (ISO 2011).

Practical Considerations
As stated above, the purpose of the logical architecture model is to provide a description of what a system must be able to do to satisfy the stated need. This should help to ensure that the needs and/or concerns of all stakeholders are addressed by any solution, and that innovative solutions, as well as those based on current solution technologies, can be considered. In practice it is human nature for problem stakeholders to push their own agendas and for solution architects or designers to offer their familiar solutions. If a logical architecture model is not properly enforced with the chosen life cycle, it is easy for both problem and solution stakeholders to ignore it and revert to their own biases (see Part 5: Enabling Systems Engineering). This is exacerbated if the logical architecture model becomes an end in its own right or disconnected from the main lifecycle activities. This can occur either through the use of abstract language or notations, levels of detail, time taken, or an overly complex final architecture that does not match the purpose for which it was created. If the language, scope, and timeliness of the architecture are not matched to the problem stakeholder or solution providers, it is easier for them to overlook it. Key pitfalls and good practices which can help to avoid problems related to logical architecture models are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in developing logical architecture are provided in Table 1.


Table 1. Pitfalls with Logical Architecture Development. (SEBoK Original)
Pitfall	Description

Problem Relevance	The logical architecture model should relate back to the operational scenarios produced by mission analysis.

Inputs for Architecture	The major input for architecture definition activity involves the set of system requirements and the instances in
Model	which they do not address the right level of architecture. The consequence is that the architect allows the requirements to fall to the side and invents a solution with what he or she understands through the input.
Decomposition Too Deep		A common mistake made by many beginners in architecture consists of decomposing the functions too deeply or having too many functions and input/output flows in scenarios or in the functional architecture model of the current
system block.

Not Considering Inputs	A common mistake is to consider only the actions supported by functions and decomposing them, while forgetting
and Outputs Together with	the inputs and the outputs or considering them too late. Inputs and outputs are integral parts of a function.
Functions

Considering Static		Static function decomposition is the smallest functional architecture model task and answers the basic question, Decomposition of	 "How is this done?" The purpose of the static decomposition is to facilitate the management of or navigation through Functions Only	the list of functions. The static decomposition should be established only when scenarios have been created and the
logical architecture is close to complete.

Mixing Governance,	Governance (strategic monitoring), management (tactical monitoring), and basic operations are often mixed in
Management, and	complex systems. Logical architecture model should deal with behavioral architecture model as well as with
Operation	temporal architecture model.


Proven Practices
Some proven practices gathered from the references are provided in Table 2.

Table 2. Proven Practices with Logical Architecture Development. (SEBoK Original)
Practice	Description

Constitute Scenarios	Before constituting a decomposition tree of functions, one must model the behavior of the system, establish scenarios of
of Functions	functions, and decompose functions as scenarios of sub-functions.

Analysis and	When facing a system that contains a large number of functions, one should attempt to synthesize functions into higher
Synthesis Cycles	abstraction levels of functions with the assistance of criteria. Do not perform analysis only; instead, conduct small cycles of analysis (decomposition) and synthesis. The technique of using scenarios includes this design practice.
Alternate Functional	A function (action verb; e.g. "to move") and its state of execution/operational mode (e.g. "moving") are two similar and
and Behavioral	complimentary views. Utilize this to consider a behavioral view of the system that allows for the transition from one
Views	operational mode to another.

The Order to Create  When creating a scenario of functions, it is more efficient to first establish the (control) flow of functions, then to add input
a Scenario of	and output flows, and finally to add triggers or signals for synchronization.
Functions


References
Works Cited
Gamma, E., R. Helm, R. Johnson, and J. Vlissides. 1995. Design Patterns: Elements of Reusable Object-Oriented Software. Boston, MA, USA: Addison-Wesley.
Faisandier, A. 2012. Systems Architecture and Design. Belberaud, France: Sinergy'Com.
ISO/IEC. 2007.Systems Engineering - Application and Management of the Systems Engineering Process. Geneva, Switzerland: International Organization for Standards (ISO)/International Electronical Commission (IEC), ISO/IEC 26702:2007.
ISO/IEC/IEEE. 2011. Systems and Software Engineering - Architecture Description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.
Oliver, D., T. Kelliher, and J. Keegan. 1997. Engineering Complex Systems with Models and Objects. New York, NY, USA: McGraw-Hill.
OMG. 2010. OMG Systems Modeling Language Specification, version 1.2, July 2010. Available at: http:/ / www. omg.org/technology/documents/spec_catalog.htm.

Primary References
ANSI/IEEE. 2000. Recommended Practice for Architectural Description for Software-Intensive Systems. New York, NY, USA: American National Standards Institute (ANSI)/Institute of Electrical and Electronics Engineers (IEEE), ANSI/IEEE 1471-2000.
INCOSE. 2023. Systems Engineering Handbook - A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO/IEC. 2007. Systems Engineering - Application and Management of the Systems Engineering Process. Geneva, Switzerland: International Organization for Standards (ISO)/International Electronical Commission (IEC), ISO/IEC 26702:2007.
ISO/IEC/IEEE 15288:2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization / International Electrotechnical Commissions / Institute for Electrical and Electronics Engineers.
ISO/IEC/IEEE 15288:2023.
ISO/IEC/IEEE. 2011. Systems and Software Engineering - Architecture Description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.
Maier, M. and E. Rechtin. 2009. The Art of Systems Architecting, 3rd ed. Boca Raton, FL, USA: CRC Press.


Additional References
Alexander, C., S. Ishikawa, M. Silverstein, M. Jacobson, I. Fiksdahl-King, and S. Angel. 1977. A Pattern Language: Towns, Buildings, Construction. New York, NY, USA: Oxford University Press.
Buede, D.M. 2009. The Engineering Design of Systems: Models and Methods. 2nd ed. Hoboken, NJ, USA: John Wiley & Sons Inc.
Oliver, D., T. Kelliher, and J. Keegan. 1997. Engineering Complex Systems with Models and Objects. New York, NY, USA: McGraw-Hill.
The Open Group. 2011. TOGAF, version 9.1. Hogeweg, The Netherlands: Van Haren Publishing. Accessed August 29, 2012. Available at: https:/ / www2. opengroup. org/ ogsys/ jsp/ publications/ PublicationDetails. jsp?catalogno=g116.
Zachman, J. 2008. "John Zachman's Concise Definition of The Zachman Framework(tm)." Zachman International Enterprise  Architecture.  Accessed  August  29,  2012.  Available  at:  http:/ / www. zachman. com/ about-the-zachman-framework.

Physical Architecture

 Lead Authors:
 Alan Faisandier and Rick Adcock
-
Physical Architecture Model Development may be used as a task of the activity "Develop candidate architectures models and views," or a sub-process of the System Architecture Design Definition process. Its purpose is to elaborate models and views of a physical, concrete solution that accommodates the logical architecture model and satisfies and trades-off system requirements. Once a logical architecture model is defined (see Logical Architecture Model Development), concrete physical elements have to be identified that can support functional, behavioral, and temporal features as well as the expected properties of the system deduced from non-functional system requirements (e.g. constraint of replacement of obsolescence, and/or continued product support).
A physical architecture model is an arrangement of physical elements, (system elements and physical interfaces) that provides the solution for a product, service, or enterprise. It is intended to satisfy logical architecture elements and system requirements ISO/IEC/IEEE 26702 (ISO 2007). It is implementable through technological system elements. System requirements are allocated to both the logical and physical architectures. The resulting system architecture is assessed with system analysis and when completed becomes the basis for system realization.
In some cases, particularly when multiple systems are to be defined to a common physical architecture model, one of the drivers for the physical architecture model may be interface standards; these physical interfaces may well be one of the most important concerns for these systems. It is quite possible that such interface standards are mandated at a high level in the system requirements. On the other hand, it is equally possible for standards to be derived during physical architecture model development and these can be critical enablers for desirable engineering outcomes, such as: families of systems, technology insertion, interoperability and "open systems". For example, today's video, hi-fi, and computer systems have all benefited from adoption of interface standards. Other examples exist in most fields of engineering from nuts and bolts, plumbing, electrical installations, rail gauges, TCP/IP, IT systems and software to modular defense and space systems.
Note: The term Physical Architecture is a contraction of the expression Physical View of the System Architecture.


Concepts and Principles
System Element, Physical Interface, and Physical Architecture Model
A system element is a discrete part of a system that can be implemented to fulfill design properties. A system element can be hardware, software, data, humans, processes (e.g., processes that provide a service to users), procedures (e.g., operator instructions), facilities, materials, and naturally occurring entities (e.g., water, organisms, and minerals), or any combination of these ISO/IEC/IEEE 15288 (ISO 2023). A physical interface binds two system elements together; this is similar to a link or a connector. Table 1 provides some examples of system elements and physical interfaces.

Table 1. Types of System Elements and Physical Interfaces. (SEBoK Original)

Element
Product System
Service System
Enterprise System
System
 Hardware Parts (mechanics, electronics,
 Processes, Data Bases,
 Corporate, Direction, Division, Department,
Element
electrical, plastic, chemical, etc.)
 Operator Roles
 Software Pieces
Procedures, etc.
 Operator Roles
 Software Applications
Project, Technical Team, Leader, etc.
 IT Components
Physical Interface
* Hardware Parts, Protocols, Procedures, etc.
* Protocols, Documents, etc.
* Protocols, Procedures, Documents, etc.

A complex system composed of thousands of physical and/or intangible parts may be structured in several layers of systems and system elements. The number of elements in a level of the structure of one system is limited to only a few, in order to facilitate managing the system definition; a common guideline is five plus or minus two elements (see illustration in Figure 1).

A physical architecture model is built from systems, system elements, and all necessary physical interfaces between these elements, as well as from external elements (neighboring or enabling systems and/or system elements in the considered layer and concerned elements in the context of the global system-of-interest) - see illustration in Figure 2.





Design Property
A design property is a property that is obtained during system architecture and created through the assignment of non-functional requirements, estimates, analyses, calculations, simulations of a specific aspect, or through the definition of an existing element associated with a system element, a physical interface, and/or a physical architecture. If the defined element complies with a requirement, the design property will relate to (or may equal) the requirement. Otherwise, one has to identify any discrepancy that could modify the requirement or design property and detect any deviations.
Stakeholders have concerns that correspond to the expected behavior of a system within operational, environmental, and/or physical constraints as well as to more general life cycle constraints. Stakeholder needs and requirements and system requirements express these concerns as expected capabilities from the system (e.g., usability, interoperability, security, expandability, environment suitability, etc.). Architects and/or designers identify these capabilities from requirements and deduce corresponding quantitative or qualitative design properties to properly equip their physical architecture model (e.g., reliability, availability, maintainability, modularity, robustness, operability, climatic environment resistance, dimensions limits, etc.). For further discussion on how some of these properties may be included in architecture and design, please see the article Systems Engineering and Quality Attributes in the Related Disciplines Part.

Allocation of Logical Elements to Physical Elements and Partitioning
Developing a candidate physical architecture model for a system consists of first identifying the system elements that can perform functions of the logical architecture model as well as identifying the interfaces capable of carrying out the input-output flows and control flows. When identifying potential elements, a systems engineer needs to allocate design properties within the logical architecture; these properties are deduced from the system requirements. Partitioning and allocation are activities to decompose, gather, or separate functions in order to facilitate the identification of feasible system elements that support these functions. Either they exist and can be reused or re-purposed, or they can be developed and technically implemented.
Partitioning and allocation use criteria to find potential affinities between functions. Systems engineers use system requirements and/or design properties as criteria to assess and select candidate system elements and partitions of functions, such as similar transformations within the same technology, similar levels of efficiency, exchange of the same type of input-output flows (information, energy, and materials), centralized or distributed controls, execution


with close frequency level, dependability conditions, environment resistance level, and other enterprise constraints.
A concurrent engineering approach is necessary when several different sets of technologies, knowledge, and skills are necessary to establish a candidate physical architecture model. This is particularly true during the partition and allocation of functions to various system elements, in which the systems engineer must account for compatibility issues and emergent properties. (See SEBoK Part 2: Synthesizing Possible Solutions for a discussion of possible approaches.)

Developing Candidate Physical Architecture Models
The goal of physical architecture model development activities is to provide the best possible physical architecture model made of suitable systems, technological system elements, and physical interfaces (i.e., the architecture that answers, at best, all system requirements, depending on agreed limits or margins of each requirement). The best way to do this is to produce several candidate physical architecture models, assess and compare them, and then select the most suitable one.
A candidate physical architecture model is elaborated according to affinity criteria in order to build a set of system elements (i.e., separate, gather, connect, and disconnect the network of system elements and their physical interfaces). These criteria are the same as those used for partitioning and allocating functions to system elements. The physical architecture model development may be focused in different ways, for example, it may address:
 Reduction in the number of physical interfaces
 System elements that can be tested separately
 Compatible technology
 Measures of the proximity of elements in space
 Ease of handling (weight, volume, and transportation facilities)
 Optimization of resources shared between elements
 Modularity (i.e. elements have low interdependence)
 Resilience (i.e. elements which are highly reliable, maintainable or replaceable)

Evaluating and Selecting the Preferred Candidate
Viable physical architecture models enable all required functions or capabilities specified in the logical architecture model to be realized. Architecture and design activity includes evaluation to obtain a balance among design properties, costs, risks, etc. Generally, the physical architecture model of a system is determined more strongly by non-functional requirements (e.g., performance, safety, security, environmental conditions, constraints, etc.) than by functions. There may be many (physical) ways to establish functions but fewer ways of satisfying non-functional requirements. The preferred physical architecture model represents the selection of system elements, their physical relationships, and interfaces. Typically, this physical architecture will still leave further systems engineering to be undertaken to achieve a fully optimized system after any remaining trade-offs are made and algorithms and parameters of the system are finalized. Certain analyses (efficiency, dependability, cost, risks, etc.) are required to get sufficient data that characterize the global behavior and structure of the candidate architectures in regard to system requirements; this is often broadly referred to as system analysis. Other analyses and assessments require knowledge and skills from the different involved technologies and specialties (mechanics, electronics, software, thermodynamics, electro-magnetic compatibility, safety, security etc.). They are performed through corresponding specialist analysis of the system.


Legacy Systems and Systems of Systems
Few systems come into existence or operate without interacting with others in a system context. These interactions may be with other operational systems, or maintenance and support systems, which in turn may be legacy (already in use) or future legacy (under development and likely to operate with the system of interest in the future).
The best chosen approach will be dependent on the strength of interactions between the system-of-interest (SoI) and its wider context. While these interactions are small, they may be accounted for by defining a set of static external interface requirements (for example, technical standards) with which the system must comply, by including these as constraints in the system requirements and ensuring compliance through design assurance.
Where the interactions are more intense (for example, where continuous information is to be exchanged with other systems), these will have to be recognized as part of a system of systems context and will instead be considered as part of an enterprise systems engineering approach.
Another important consideration may be the sharing of technology or system elements between the SoI and other systems, often as part of a family of systems (many examples occur in automotive and aerospace industries) or the re-use of system elements from existing legacy. Here a degree of top-down or middle-out design work will be necessary to ensure the system of interest embodies the required system elements, while conforming as far as possible to the stakeholder and system requirements, with any compromises being understood and managed.
If a System-of-Interest is intended to be used in one or more service systems or system of systems configurations, this will affect its physical architecture model. One of the features of these SoS is the late binding of component systems in use. Such component systems must be architected with open or configurable interfaces, must have clearly defined functions packaged in such a way as to be relevant to the SoS using them, and must include some method by which they can be identified and included in the SoS when needed.
Both service systems and SoS will be defined by a high-level physical architecture model, which will be utilized to define the relevant SoS relationships, interfaces, and constraints that should be included in System Concept Definition. The results will be embedded in the stakeholder and system requirements and handled through interface agreements and across-project communication during development, realization, and use.
See SEBoK Part 4: Applications of Systems Engineering for more information on special considerations for architecting SoS.

Process Approach
Purpose
The purpose of the Physical Architecture Model Development is to define, select, and synthesize a system physical architecture model which can support the logical architecture model. A physical architecture model will have specific properties to address stakeholder concerns or environmental issues and to satisfy system requirements.
Because of the evolution of the context of use or technological possibilities, the physical architecture which is composed of system elements is supposed to evolve along the life cycle of the system in order for it to continue to perform its mission within the limits of its required effectiveness. Depending on whether or not evolution impacts logical architecture model elements, allocations to system elements may change. A physical architecture model is equipped with specific design properties to continuously challenge the evolution.
Generic inputs include the selected logical architecture model, system requirements, generic patterns and properties that architects identify and utilize to answer requirements, outcomes from system analysis, and feedback from system verification and system validation.
Generic outputs are the selected physical architecture model, allocation matrix of functional elements to physical elements, traceability matrix with system requirements, stakeholder requirements of each system and system element composing the physical architecture model, and rejected solutions.


Activities of the Process
Major activities and tasks to be performed during this process include the following:
 Partition and allocate functional elements to system elements:
 Search for system elements or technologies able to perform functions and physical interfaces to carry input-output and control flows. Ensure system elements exist or can be engineered. Assess each potential
system element using criteria deduced from design properties (themselves deduced from non-functional system requirements).
 Partition functional elements (functions, scenarios, input-outputs, triggers, etc.) using the given criteria and allocate partitioned sets to system elements (using the same criteria).
 When it is impossible to identify a system element that corresponds to a partitioned functional set, decompose the function until the identification of implementable system elements is possible.
 Check the compatibility of technologies and the compatibility of interfaces between selected system elements.
 Constitute candidate physical architecture models.
 Because partitioned sets of functions can be numerous, there are generally too many system elements. For defining controllable architectures, system elements have to be grouped into higher-level system elements known as system element groups, often called sub-systems in industry.
 Constitute several different system element groups corresponding to different combinations of elementary system elements. One set of system element groups plus one or several non-decomposable system elements forms a candidate physical architecture model of the considered system.
 Represent (using patterns) the physical architecture model of each system element group connecting its system elements with physical interfaces that carry input-output flows and triggers. Add physical interfaces as needed; in particular, add interfaces with external elements to the system element group.
 Represent the synthesized physical architecture of the considered system built from system element groups, non-decomposable systems, and physical interfaces inherited from the physical architecture model of system element groups.
 Enhance the physical architecture model with design properties such as modularity, evolution capability, adaptability to different environments, robustness, scalability, resistance to environmental conditions, etc.
 If possible, use executable architecture prototypes (e.g., hardware-software (HW-SW)-in-the-loop prototypes) for identifying potential deficiencies and correct the architecture as needed.
 Assess physical architecture model candidates and select the most suitable one:
 Use the system analysis process to perform assessments (see the System Analysis topic).
 Use the Decision Management process to support the trades and selection of the preferred alternative (see the Decision Management topic).
 Synthesize the selected physical architecture model:
 Formalize physical elements and properties. Verify that system requirements are satisfied and that the solution is realistic.
 Identify the derived physical and functional elements created for the necessity of architecture and design and the corresponding system requirements.
 Establish traceability between system requirements and physical elements as well as allocate matrices between functional and physical elements.


Artifacts, Methods and Modeling Techniques
Physical architecture descriptions use modeling techniques to create and represent physical architectures. Some common physical models include structural blocks, mass, layout and other models. Modeling techniques may be:
 Physical block diagrams (PBD)
 SysML block definition diagrams (BDD)
 Internal block diagrams (IBD) (OMG 2010)
 Executable architecture prototyping
 Etc.
Depending on the type of domain for which it is to be used (defense, enterprise, etc.), architecture frameworks may provide descriptions that can help to trade-off candidate architectures. Please see section 'Enterprise Architecture Frameworks & Methodologies' in Enterprise Systems Engineering Key Concepts.

Practical Considerations
Key pitfalls and good practices related to physical architecture development are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in performing physical architecture model development are provided in Table 3.

Table 3. Pitfalls with Physical Architecture Development. (SEBoK Original)
Pitfall	Description

Too Many Levels in The current system block includes too many levels of decomposition. The right practice is that the physical architecture a Single System	model of a system block is composed of one single level of systems and/or system elements.
Block

No Logical	The developers perform a direct passage from system requirements to a physical architecture model without establishing a Architecture Model logical architecture model; this is a common wrong practice that mainly takes place when dealing with repeating systems and
products because the functions are already known. The issue is that a function is always associated with input-output flows defined in a specific domain set. If the domain set changes, the performance of the function can become invalid.
Direct Allocation	At a high level of abstraction of multidisciplinary systems, directly allocating the functions onto technologies of the lowest on Technologies	level of abstraction, such as hardware or software, does not reflect a system comprehension. The right practice is to consider
criteria to decompose the architecture into the appropriate number of levels, alternating logical and physical before reaching the technology level ( the last level of the system).


Proven Practices
Some proven practices gathered from the references are provided in Table 4.


Table 4. Proven Practices with Physical Architecture Development. (SEBoK Original)
Practice	Description

Modularity	Restrict the number of interactions between the system elements and consider the modularity principle (maximum of consistency inside the system element, minimum of physical interfaces with outside) as the right way for architecting systems.
Focus on	Focusing on interfaces rather than on system elements is another key element of a successful architecture and design for abstract Interfaces	levels of systems.


References
Works Cited
ISO/IEC. 2007. Systems Engineering - Application and Management of The Systems Engineering Process. Geneva, Switzerland: International Organization for Standards (ISO)/International Electrotechnical Commission (IEC), ISO/IEC 26702:2007.
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation (ISO) /International Electrotechnical Commissions (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015.
OMG. 2010. OMG Systems Modeling Language Specification, version 1.2, July 2010. Available at: http:/ / www. omg.org/technology/documents/spec_catalog.htm.
Faisandier, A. 2012. Systems Architecture and Design. Belberaud, France: Sinergy'Com.

Primary References
ANSI/IEEE. 2000. Recommended Practice for Architectural Description for Software-Intensive Systems. New York, NY, USA: American National Standards Institute (ANSI)/Institute of Electrical and Electronics Engineers (IEEE), ANSI/IEEE 1471-2000.
INCOSE. 2023. Systems Engineering Handbook - A Guide for System Life Cycle Processes and Activities, version
5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO/IEC/IEEE. 2023. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation (ISO)/International Electrotechnical Commissions (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2023. ISO/IEC/IEEE. 2011. Systems and Software Engineering - Architecture Description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.

Additional References
Maier, M., and E. Rechtin. 2009. The Art of Systems Architecting, 3rd ed. Boca Raton, FL, USA: CRC Press.
Holland, J.H. 2006. "Studying Complex Adaptive Systems." Journal of Systems Science and Complexity. vol. 19, no. 1 pp. 1-8. Available at: http://hdl.handle.net/2027.42/41486.
Thome, B. 1993. Systems Engineering, Principles & Practice of Computer-Based Systems Engineering. New York, NY, USA: Wiley.
The Open Group. 2011. TOGAF, version 9.1. Hogeweg, The Netherlands: Van Haren Publishing. Accessed August 29, 2012. Available at: https:/ / www2. opengroup. org/ ogsys/ jsp/ publications/ PublicationDetails. jsp?catalogno=g116.


Zachman, J. 2008. "John Zachman's Concise Definition of The Zachman Framework(tm)." Zachman International Enterprise  Architecture.  Accessed  August  29,  2012.  Available  at:  http:/ / www. zachman. com/ about-the-zachman-framework.

System Detailed Design Definition

 Lead Authors:
 Alan Faisandier and Rick Adcock
-
The purpose of the System Design is to supplement the system architecture by providing information and data useful and necessary for implementation of the system elements. Design definition is the process of developing, expressing, documenting, and communicating the realization of the architecture of the system through a complete set of design characteristics described in a form suitable for implementation.

Concepts and Principles
Design Notion
In industrial practices, the term design is often used to mean both architecture and design. In the recent past, professionals used the term design when they dealt with simpler technological products - ones that do not include several different and interconnected technological components such as hardware, software, operators, services, etc. In the development of new multi-technology products and services, professionals have recognized the usefulness of the notion of system in dealing with complexity (interconnections level, multi-techno, emergence, etc.).
It was due to complexity that structuring the elements that comprise a system became necessary. This structure explains the functional, behavioral, temporal, physical, and other aspects of a system as described in System Architecture Design Definition. Practitioners found the term structure inadequate to describe all these aspects of a system. The terms architecture and architectural design have been used for approximately 30 years, especially in software intensive systems and other domains, such as the space industry. The set of different types and interrelated structures can be understood as the architecture of the system.
The trend today is to consider system architecture and system design as different and separate sets of activities, but concurrent and strongly intertwined.
System design includes activities to conceive a set of system elements that answers a specific, intended purpose, using principles and concepts; it includes assessments and decisions to select system elements that compose the system, fit the architecture of the system, and comply with traded-off system requirements. It is the complete set of detailed models, properties, and/or characteristics described into a form suitable for implementation.

Design Characteristics and Design Enablers
Every technological domain or discipline owns its peculiar laws, rules, theories, and enablers concerning transformational, structural, behavioral, and temporal properties of its composing parts of materials, energy, or information. These specific parts and/or their compositions are described with typical design characteristics and enablers. These allow achieving the implementation of every system element through various transformations and exchanges required by design characteristics (e.g., operability level, reliability rate, speed, safeguard level) that have been assigned during the system architecture definition process.
The design definition provides the description of the design characteristics and design enablers necessary for implementation. Design characteristics include dimensions, shapes, materials, and data processing structures. Design


enablers include formal expressions or equations, drawings, diagrams, tables of metrics with their values and margins, patterns, algorithms, and heuristics.
 Examples of generic design characteristics in mechanics of solids: shape, geometrical pattern, dimension, volume, surface, curves, resistance to forces, distribution of forces, weight, velocity of motion, temporal persistence
 Examples of generic design characteristics in software: distribution of processing, data structures, data persistence, procedural abstraction, data abstraction, control abstraction, encapsulation, creational patterns (e.g., builder, factory, prototype, singleton), and structural patterns (e.g., adapter, bridge, composite, decorator, proxy)

Relation with System Architecture
System design is intended to be the link between the system architecture (at whatever point this milestone is defined in the specific application of the systems engineering process) and the implementation of technological system elements that compose the physical architecture model of the system.
Design definition is driven by specified requirements, the system architecture, and more detailed analysis of performance and feasibility. It addresses the implementation technologies and their assimilation. Design provides the "how-" or "implement-to" level of the definition.
Design concerns every system element composed of implementation technologies, such as mechanics, electronics, software, chemistry, human operations and services for which specific engineering processes are needed. System design provides feedback to the parent system architecture to consolidate or confirm the allocation and partitioning of architectural characteristics and design properties to system elements.

Design Descriptor
A design descriptor is the set of generic design characteristics and of their possible values. If similar, but not exact system elements exist, it is possible to analyze these in order to identify their basic characteristics. Variations of the possible values of each characteristic determine potential candidate system elements.

Holistic Design
Holistic design is an approach that considers the system being designed as an interconnected whole, which is also part of something larger. Holistic concepts can be applied to the system as a whole along with the system in its context (e.g., the enterprise or mission in which the system participates), as well as the design of mechanical devices, the layout of spaces, and so forth. This approach often incorporates concerns about the environment, considering how the design will impact the environment and attempting to reduce environmental impact. Holistic design is about more than merely trying to meet the system requirements.

Process Approach
Purpose
The purpose of the System Design process is to provide sufficient detailed data and information about the system and its system elements to enable the implementation consistent with architectural entities as defined in models and views of the system architecture (ISO/IEC/IEEE 15288 [ISO 2015]).
Generic inputs include architecture description of the parent system and system element requirements.
Generic outputs are the description of the design characteristics and design enablers necessary for implementation.


Activities of the Process
Major activities and tasks to be performed during this process include the following:

1. Initialize design definition
 Plan for technology management for the whole system. Identify the technologies (mechanics, electricity, electronics, software, biology, operators, etc.) that would compose and implement the system elements and their physical interfaces.
 Determine which technologies and system elements have a risk to become obsolete or evolve during the operation stage of the system. Plan for their potential replacement.
 Identify types of design characteristics or properties for each technology of each system element.
 Periodically assess design characteristics and adjust as the system evolves.
 Document the design definition strategy, including the need for and requirements of any enabling systems, products, or services to perform the design.

2. Establish design characteristics and design enablers related to each system element
 Perform, consolidate or detail system requirements allocation to system elements for all requirements and system elements not fully addressed in the System Architecture process (normally, every system requirement would have been transformed into architectural entities and architectural characteristics within the System Architecture process, which are then allocated to system elements through direct assignment or some partitioning).
 Define the design characteristics relating to the architectural characteristics and check that they are implementable. Use design enablers, such as models (physical and analytical), design heuristics, etc. If the design characteristics are not feasible, then assess other design alternatives or implementation option, or perform trades of other system elements definition.
 Define the interfaces that were not defined by the System Architecture process or that need to be refined as the design details evolve. This includes both internal interfaces between the system elements and the external interfaces with other systems.
 Record the design characteristics of each system element within the applicable artifacts (they depend on the design methods and techniques used).
 Provide rationale about selection of major implementation options and enablers.

3. Assess alternatives for obtaining system elements
 Identify existing implemented system elements (COTS/NDI, reused, or other non-developed system elements). Alternatives for new system elements to be developed may be studied.
 Assess design options for the system element, using selection criteria that are derived from the design characteristics.
 Select the most appropriate alternatives.
 If the decision is made to develop the system element, the rest of the design definition process and the implementation process are used. If the decision is to buy or reuse a system element, the acquisition process may be used to obtain the system element.


4. Manage the design
 Capture and maintain the rationale for all selections among alternatives and decisions for the design, architecture characteristics, design enablers, and sources of system elements.
 Assess and control the evolution of the design characteristics, including the alignment with the architecture.
 Establish and maintain traceability between design characteristics and architectural characteristics, and with requirements as necessary.
 Provide baseline information for configuration management.
 Maintain the design baseline and the design definition strategy.

Practical Considerations
Key pitfalls and proven practices related to system design are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in performing system design are provided in Table 1.

Pitfall	Description

Consider the design of  This would be conducted using heterogeneous implementation of a given technology or between technologies within each system element	the system-of-interest. The design strategy for the complete system is defined to find synergies and/or commonalities separately	that could help operation and maintenance of system elements.


Proven Practices
Some proven practices gathered from the references are provided in Table 2.

Practice	Description

Architecture and	Discipline engineers perform the design definition of each system element; they provide strong support (knowledge and design mutual	competencies) to systems engineers or architects in the evaluation and selection of candidate system architectures and support	system elements. Inversely, systems engineers, or architects, must provide feedback to discipline engineers to improve
knowledge and know-how.


References
Works Cited
INCOSE. 2015. INCOSE Systems Engineering Handbook, Version 4. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015.
Faisandier, A. 2012. Systems Architecture and Design. Belberaud, France: Sinergy'Com.


Primary References
ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015.
Faisandier, A. 2012. Systems Architecture and Design. Belberaud, France: Sinergy'Com.

Additional References
Baldwin, C.Y. and K.B. Clark. 2000. Design Rules. Cambridge, MA, USA: MIT Press.
Buede, D.M. 2009. The Engineering Design of Systems: Models and Methods. 2nd ed. Hoboken, NJ, USA: John Wiley & Sons Inc.
DoD. 2010. DOD Architecture Framework. Version 2.02. Arlington, VA, USA: US Department of Defense. Available at: http://cio-nii.defense.gov/sites/dodaf20/

System Analysis

 Lead Authors:
 Alan Faisandier and Ray Madachy
 Contributing Author:
 Rick Adcock
-
System analysis allows developers to objectively carry out quantitative assessments of systems in order to select and/or update the most efficient system architecture and to generate derived engineering data. During engineering, assessments should be performed every time technical choices or decisions are made to determine compliance with system requirements.
System analysis provides a rigorous approach to technical decision-making. It is used to perform trade-off studies, and includes modeling and simulation, cost analysis, technical risks analysis, and effectiveness analysis.

Principles Governing System Analysis
One of the major tasks of a systems engineer is to evaluate the engineering data and artifacts created during the systems engineering (SE) process. The evaluations are at the center of system analysis, providing means and techniques:
 to define assessment criteria based on system requirements;
 to assess design properties of each candidate solution in comparison to these criteria;
 to score the candidate solutions globally and to justify the scores; and
 to decide on the appropriate solution(s).
The Analysis and Selection between Alternative Solutions article in the Systems Approach Applied to Engineered Systems knowledge area (KA) of Part 2 describes activities related to selecting between possible system solutions to an identified problem or opportunity. The following general principles of systems analysis are defined:
 Systems analysis is based on assessment criteria based upon a problem or opportunity system description.
 These criteria will be based around an ideal system description, which assumes a hard system problem context can be defined.
 Criteria must consider required system behavior and properties of the complete solution, in all possible wider system contexts and environments.


 These must consider non-functional issues such as system safety, security, etc. (Please see Systems Engineering and Specialty Engineering for additional discussion on incorporating non-functional elements.)
 This "ideal" system description may be supported by soft system descriptions, from which additional "soft"
criteria may be defined. For example, a stakeholder preference for or against certain kinds of solutions, relevant social, political or cultural conventions to be considered, etc.
 The assessment criteria should include, at a minimum, the constraints on cost and time scales acceptable to stakeholders.
 Trade studies provide a mechanism for conducting analysis of alternative solutions.
 A trade study should consider a set of assessment criteria, with appropriate awareness of the limitations and dependencies between individual criteria.
 Trade studies need to deal with both objective and subjective criteria. Care must be taken to assess the sensitivity of the overall assessment to particular criteria.

Trade-Off Studies
In the context of the definition of a system, a trade-off study consists of comparing the characteristics of each system element and of each candidate system architecture to determine the solution that best globally balances the assessment criteria. The various characteristics analyzed are gathered in cost analysis, technical risks analysis, and effectiveness analysis (NASA 2007).
Guidance on the conduct of trade studies for all types of system context are characterized in the above principles and described in more detail in the Analysis and Selection between Alternative Solutions topic. Of particular interest to SE analysis are technical effectiveness, cost, and technical risk analysis.

Effectiveness Analysis
The effectiveness of an engineered system solution includes several essential characteristics that are generally gathered in the following list of analyses, including (but not limited to): performance, usability, dependability, manufacturing, maintenance or support, environment, etc. These analyses highlight candidate solutions under various aspects.
It is essential to establish a classification that limits the number of analyses to the really significant aspects, such as key performance parameters. The main difficulties of effectiveness analysis are to sort and select the right set of effectiveness aspects; for example, if the product is made for a single use, maintainability will not be a relevant criterion.

Cost Analysis
A cost analysis considers the full life cycle costs. A cost baseline can be adapted according to the project and the system. The global life cycle cost (LCC), or total ownership cost (TOC), may include exemplary labor and non-labor cost items such as those indicated in Table 1.


Table 1. Types of Costs. (SEBoK Original)
Type of Cost	Description and Examples

Development	Engineering, development tools (equipment and software), project management, test-benches, mock-ups and prototypes, training, etc.
Product manufacturing Raw materials and supplies, spare parts and stock assets, necessary resources to operation (water, electricity power, etc.),
or service realization	risks and nuances, evacuation, treatment and storage of waste or rejections produced, expenses of structure (taxes, management, purchase, documentation, quality, cleaning, regulation, controls, etc.), packing and storage, documentation required.
Sales and after-sales	Expenses of structure (subsidiaries, stores, workshops, distribution, information acquisition, etc.), complaints and guarantees, etc.
Customer utilization	Taxes, installation (customer), resources necessary to the operation of the product (water, fuel, lubricants, etc.), financial risks and nuisances, etc.
Supply chain	Transportation and delivery.

Maintenance	Field services, preventive maintenance, regulation controls, spare parts and stocks, cost of guarantee, etc.

Disposal	Collection, dismantling, transportation, treatment, waste recycling, etc.

Methods for determining cost are described in the Project Planning topic.

Technical Risks Analysis
Every risk analysis concerning every domain is based on three factors:
1. Analysis of potential threats or undesired events and their probability of occurrence.
2. Analysis of the consequences of these threats or undesired events and their classification on a scale of gravity.
3. Mitigation to reduce the probabilities of threats and/or the levels of harmful effect to acceptable values.
The technical risks appear when the system cannot satisfy the system requirements any longer. The causes reside in the requirements and/or in the solution itself. They are expressed in the form of insufficient effectiveness and can have multiple causes: incorrect assessment of technological capabilities; over-estimation of the technical maturity of a system element; failure of parts; breakdowns; breakage, obsolescence of equipment, parts, or software, weakness from the supplier (non-compliant parts, delay for supply, etc.), human factors (insufficient training, wrong tunings, error handling, unsuited procedures, malice), etc.
Technical risks are not to be confused with project risks, even if the method to manage them is the same. Although technical risks may lead to project risks, technical risks address the system itself, not the process for its development. (See Risk Management for more details.)

Process Approach
Purpose and Principles of the Approach
The system analysis process is used to: (1) provide a rigorous basis for technical decision making, resolution of requirement conflicts, and assessment of alternative physical solutions (system elements and physical architectures);
(2) determine progress in satisfying system requirements and derived requirements; (3) support risk management; and (4) ensure that decisions are made only after evaluating the cost, schedule, performance, and risk effects on the engineering or re-engineering of a system (ANSI/EIA 1998). This process is also called the decision analysis process by NASA (2007, 1-360) and is used to help evaluate technical issues, alternatives, and their uncertainties to support decision-making. (See Decision Management for more details.)
System analysis supports other system definition processes:


 Stakeholder needs definition and system requirements definition processes use system analysis to solve issues relating to conflicts among the set of requirements; in particular, those related to costs, technical risks, and effectiveness (performances, operational conditions, and constraints). System requirements subject to high risks, or those which would require different architectures, are discussed.
 The Logical Architecture Model Development and Physical Architecture Model Development processes use it to assess characteristics or design properties of candidate logical and physical architectures, providing arguments for selecting the most efficient one in terms of costs, technical risks, and effectiveness (e.g., performances, dependability, human factors, etc.).
Like any system definition process, the system analysis process is iterative. Each operation is carried out several times; each step improves the precision of analysis.

Activities of the Process
Major activities and tasks performed within this process include:
 Planning the trade-off studies:
 Determine the number of candidate solutions to analyze, the methods and procedures to be used, the expected results (examples of objects to be selected: behavioral architecture/scenario, physical architecture, system element, etc.), and the justification items.
 Schedule the analyses according to the availability of models, engineering data (system requirements, design properties), skilled personnel, and procedures.
 Define the selection criteria model:
 Select the assessment criteria from non-functional requirements (performances, operational conditions, constraints, etc.), and/or from design properties.
 Sort and order the assessment criteria.
 Establish a scale of comparison for each assessment criterion and weigh every assessment criterion according to its level of relative importance with the others.
 Identify candidate solutions, related models, and data.
 Assess candidate solutions using previously defined methods or procedures:
 Carry out cost analysis, technical risks analysis, and effectiveness analysis placing every candidate solution on every assessment criterion comparison scale.
 Score every candidate solution as an assessment score.
 Provide results to the calling process: assessment criteria, comparison scales, solutions' scores, assessment selection, and possibly recommendations and related arguments.

Artifacts and Ontology Elements
This process may create several artifacts, such as:
 A selection criteria model (list, scales, weighing)
 Costs, risks, and effectiveness analysis reports
 Justification reports
This process handles the ontology elements of Table 2 within system analysis.


Table 2. Main Ontology Elements as Handled within System Analysis. (SEBoK Original)
Assessment	In the context of system analysis, an assessment criterion is a characteristic used to assess or compare system elements, physical
Criterion	interfaces, physical architectures, functional architectures/scenarios, or any engineering elements that can be compared.

Identifier; name; description; relative weight; scalar weight

Assessment	In the context of system analysis, an assessment selection is a technical management element based on an assessment score that
Selection	justifies the selection of a system element, a physical interface, a physical architecture, or a functional architecture/scenario.

Assessment	In the context of system analysis, an assessment score is obtained assessing a system element, a physical interface, a physical
Score	architecture, a functional architecture/scenario using a set of assessment criteria.

Identifier; name; description; value

Cost	In the context of systems engineering, a cost is an amount expressed in a given currency related to the value of a system element, a physical interface, and a physical architecture.

Identifier; name; description; amount; type (development, production, utilization, maintenance, disposal); confidence interval; period of reference; estimation technique
Risk	An event having a probability of occurrence and consequences related to the system mission or on other characteristics. (Used for technical risk in engineering.). A risk is the combination of vulnerability and a danger or threat.

Identifier; name description; status


Checking Correctness of System Analysis
The main items to be checked within system analysis in order to get validated arguments are:
 Relevance of the models and data in the context of use of the system,
 Relevance of assessment criteria related to the context of use of the system,
 Reproducibility of simulation results and of calculations,
 Precision level of comparisons' scales,
 Confidence of estimates, and
 Sensitivity of solutions' scores related to assessment criteria weights. See Ring, Eisner, and Maier (2010) for additional perspective.
Methods and Modeling Techniques
 General usage of models: Various types of models can be used in the context of system analysis:
 Physical models are scale models allowing simulation of physical phenomena. They are specific to each discipline; associated tools include mock-ups, vibration tables, test benches, prototypes, decompression chamber, wind tunnels, etc.
 Representation models are mainly used to simulate the behavior of a system. For example, enhanced functional flow block diagrams (eFFBDs), statecharts, state machine diagrams (based in systems modeling language (SysML)), etc.
 Analytical models are mainly used to establish values of estimates. We can consider the deterministic models and probabilistic models (also known as stochastic models) to be analytical in nature. Analytical models use equations or diagrams to approach the real operation of the system. They can be very simple (addition) to incredibly complicated (probabilistic distribution with several variables).
 Use right models depending on the project progress
 At the beginning of the project, first studies use simple tools, allowing rough approximations which have the advantage of not requiring too much time and effort. These approximations are often sufficient to eliminate unrealistic or outgoing candidate solutions.


 It is progressively necessary over the development of the project to improve precision of data to compare the candidate solutions still competing. The work is more complicated if the level of innovation is high.
 A systems engineer alone cannot model a complex system; he or she must be supported by skilled people from different disciplines involved.
 Specialist expertise: When the values of assessment criteria cannot be given in an objective or precise way, or because the subjective aspect is dominating, we can ask specialists for expertise. The estimates proceed in four steps:
1. Select interviewees to collect the opinion of qualified people for the considered field.
2. Draft a questionnaire; a precise questionnaire allows an easy analysis, but a questionnaire that is too closed risks the neglection of significant points.
3. Interview a limited number of specialists with the questionnaire, including an in-depth discussion to get precise opinions.
4. Analyze the data with several different people and compare their impressions until an agreement on a classification of assessment criteria and/or candidate solutions is reached.
Often used analytical models in the context of system analysis are summarized in Table 3.

Table 3. Often Used Analytical Models in the Context of System Analysis. (SEBoK Original)
Type of Model	Description

Deterministic models	 Models containing statistics are included in this category. The principle consists of establishing a model based on a significant amount of data and number of results from former projects; they can apply only to system elements/components whose technology already exists.
 Models by analogy also use former projects. The system element being studied is compared to an already existing system element with known characteristics (cost, reliability, etc.). Then these characteristics are adjusted based on the specialists' expertise.
 Learning curves allow foreseeing the evolution of a characteristic or a technology. One example of evolution: "Each time the number of produced units is multiplied by two, the cost of this unit is reduced with a certain percentage, generally constant."
Probabilistic models	The theory of probability allows classifying the possible candidate solutions compared to consequences from a set of (also called stochastic  events as criteria. These models are applicable if the number of criteria is limited and the combination of the possible models)	events is simple. Take care that the sum of probabilities of all events is equal to one for each node.
Multi-criteria decisions  When the number of criteria is greater than ten, it is recommended that a multi-criteria decision model be established.
models	This model is obtained through the following actions:
 Organize the criteria as a hierarchy (or a decomposition tree).
 Associate each criterion of each branch of the tree with a relative weight compared to each other of the same level.
 Calculate a scalar weight for each leaf criterion of each branch, multiplying all the weights of the branch.
 Score every candidate solution on the leaf criteria; sum the scores to get a global score for each candidate solution; compare the scores.
 Using a computerized tool allows to perform sensitivity analysis to get a robust choice.


Practical Considerations
Key pitfalls and good practices related to system analysis are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing system analysis are provided in Table 4.

Table 4. Pitfalls with System Analysis. (SEBoK Original)
Pitfall	Description

Analytical modeling is not a  Analytical modeling gives analytical results from analytical data. It has to be considered as an aid and not as a decision tool	decision tool.
Models and system levels of A model can be well adapted to a level n of a system and be incompatible with the model of the higher level which decomposition	uses the data coming from the lower level. It is essential that the systems engineer ensures the coherence of the
various models used.

Optimization is not a sum of The general optimization of the system-of-interest is not the sum of its optimized systems and/or system elements. optimized elements


Proven Practices
Some proven practices gathered from the references are provided in Table 5.

Table 5. Proven Practices with System Analysis. (SEBoK Original)
Practice	Description

Stay in the	Models can never simulate all the behavior/reactions of a system: they operate only in one limited field with a restricted operational field	number of variables. When a model is used, it is always necessary to make sure that the parameters and data inputs are part of
the operation field. If not, there is a high risk of irregular outputs.

Evolve models	Models shall evolve during the project: by modification of parameter settings, by entering new data when modified (modification of assessment criteria, functions to perform, requirements, etc.), by the use of new tools when those used reach their limits.
Use several types	It is recommended to concurrently use several types of models in order to compare the results and/or to take into account of models	another aspect of the system.
Keep context	Results of a simulation shall always be given in their modeling context: tool used, selected assumptions, parameters and data elements	introduced, and variance of the outputs.
consistent


References
Works Cited
ANSI/EIA. 1998. Processes for Engineering a System. Philadelphia, PA, USA: American National Standards Institute (ANSI)/Electronic Industries Association (EIA), ANSI/EIA-632-1998.
NASA. 2007. Systems Engineering Handbook. Washington, D.C., USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.
Ring, J, H. Eisner, and M. Maier. 2010. "Key Issues of Systems Engineering, Part 3: Proving Your Design." INCOSE Insight 13(2).


Primary References
ANSI/EIA. 1998. Processes for Engineering a System. Philadelphia, PA, USA: American National Standards Institute (ANSI)/Electronic Industries Association (EIA), ANSI/EIA 632-1998.
Blanchard, B.S., and W.J. Fabrycky. 2010. Systems Engineering and Analysis, 5th ed. Prentice-Hall International Series in Industrial and Systems Engineering. Englewood Cliffs, NJ, USA: Prentice-Hall.
NASA. 2007. Systems Engineering Handbook. Washington, D.C., USA: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.

Additional References
Ring, J, H. Eisner, and M. Maier. 2010. "Key Issues of Systems Engineering, Part 3: Proving Your Design." INCOSE Insight. vol. 13, no. 2.

System Realization

 Lead Authors:
 John Snoderly and Alan Faisandier
 Contributing Author:
 Rick Adcock
-
System realization activities are conducted to create and test versions of a system as specified by system definition. The activities are grouped and described as generic processes that are performed iteratively and/or concurrently depending on the selected life cycle model. These activities include those required to build a system (system implementation), integrate disparate system elements (system integration), and ensure that the system meets both the needs of stakeholders (system validation) and aligns with the system requirements and architecture (system verification).
These activities are not sequential, but are performed concurrently, iteratively and recursively depending on the selected life cycle model. Figure 1 (see "Overview", below), also shows how these processes fit within the context of system definition and System Deployment and Use KAs. See also Applying Life Cycle Processes for further discussion of the relationships between process and life cycle model.

Topics
Each part of the SEBoK is divided into KAs, which are groupings of information with a related theme. The KAs in turn are divided into topics. This KA contains the following topics:
 System Implementation
 System Integration
 System Verification
 System Validation
See the article Matrix of Implementation Examples for a mapping of case studies and vignettes included in Part 7 to topics covered in Part 3.


Overview
Essentially, the outputs of system definition are used during system implementation to create system elements and during system integration to provide plans and criteria for combining these elements. The requirements are used to verify and validate system elements, systems, and the overall system-of-interest (SoI). These activities provide feedback into the system design, particularly when problems or challenges are identified.
Finally, when the system is considered, verified, and validated, it will then become an input to system deployment and use. It is important to understand that there is overlap in these activities; they do not have to occur in sequence as demonstrated in Figure 1. Every life cycle model includes realization activities, principally, verification and validation activities. The way these activities are performed is dependent upon the life cycle model in use. (For additional information on life cycles, see the Life Cycle Models KA.)

The realization processes are performed to ensure that the system will be ready for transition and has the appropriate structure and behavior to enable the desired operation and functionality throughout the system's life span. Both DAU and NASA include transition in realization, in addition to implementation, integration, verification, and validation (Prosnik 2010; NASA December 2007, 1-360).


Fundamentals
Macro View of Realization Processes
Figure 2 illustrates a macro view of generic outputs from realization activities when using a Vee life cycle model. The left side of the Vee represents various design activities 'going down' the system.

The left side of the Vee model demonstrates the development of system elements specifications and design descriptions. In this stage, verification and validation plans are developed, which are later used to determine whether realized system elements (products, services, or enterprises) are compliant with specifications and stakeholder needs and requirements. Also, during this stage initial specifications become flow-down requirements for lower-level system models. In terms of time frame, these activities take place early in the system's life cycle. These activities are discussed further in the System Definition KA. However, it is important to understand that some of the system realization activities are initiated at the same time as system definition activities; this is the case with integration, verification and validation planning in particular.
The right side of the Vee model, as illustrated in Figure 2, shows the system elements (products, services, or enterprises) are assembled according to the system model described on the left side of the Vee (integration). Verification and validation activities determine how well the realized system fulfills the stakeholder requirements, the system requirements, and design properties. These activities should follow the plans developed on the left side of the Vee. Integration can be done continuously, incrementally and/or iteratively, supported by verification and validation (V&V) efforts. For example, integration typically starts at the bottom of the Vee and continues upwards to the top of the Vee.
The U.S. Defense Acquisition University (DAU) provides an overview of what occurs during system realization:
Once the products of all system models have been fully defined, Bottom-Up End Product Realization can be initiated. This begins by applying the Implementation Process to buy, build, code or reuse end products. These implemented end products are verified against their design descriptions and specifications, validated against Stakeholder Requirements and then transitioned to the next higher


system model for integration. End products from the Integration Process are successively integrated upward, verified and validated, transitioned to the next acquisition phase or transitioned ultimately as the End Product to the user. (Prosnik 2010)
While the systems engineering (SE) technical processes are life cycle processes, the processes are concurrent, and the emphasis of the respective processes depends on the phase and maturity of the design. Figure 3 portrays (from left to right) a notional emphasis of the respective processes throughout the systems acquisition life cycle from the perspective of the U.S. Department of Defense (DoD). It is important to note that from this perspective, these processes do not follow a linear progression; instead, they are concurrent, with the amount of activity in a given area changing over the system's life cycle. The red boxes indicate the topics that will be discussed as part of realization.


References
Works Cited
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD). February 19, 2010.
Prosnik, G. 2010. Materials from "Systems 101: Fundamentals of Systems Engineering Planning, Research, Development, and Engineering". DAU distance learning program. eds. J. Snoderly, B. Zimmerman. Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD).


Primary References
INCOSE. 2023.Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version 5.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-119-81429-0.
ISO/IEC/IEEE. 2023.Systems and Software Engineering - System Life Cycle Processes.Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2023.
Martin, J.N. 1997. Systems Engineering Guidebook: A process for developing systems and products, 1st ed. Boca Raton, FL, USA: CRC Press.
NASA. 2007. Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.

Additional References
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD). February 19, 2010.
DAU. Your Acquisition Policy and Discretionary Best Practices Guide. In Defense Acquisition University (DAU)/U.S. Department of Defense (DoD) [database online]. Ft Belvoir, VA, USA. Available at: https://dag.dau. mil/Pages/Default.aspx (accessed 2010).
ECSS. 2009. Systems Engineering General Requirements. Noordwijk, Netherlands: Requirements and Standards Division, European Cooperation for Space Standardization (ECSS), 6 March 2009. ECSS-E-ST-10C.
IEEE. 2012. "Standard for System and Software Verification and Validation". Institute of Electrical and Electronics Engineers. IEEE-1012.

System Implementation

 Lead Authors:
 John Snoderly and Alan Faisandier
-
System Implementation uses the structure created during architectural design and the results of system analysis to construct system elements that meet the stakeholder needs and requirements and system requirements developed in the early life cycle phases. These system elements are then integrated to form intermediate aggregates and finally the complete system-of-interest (SoI). See System Integration.

Definition and Purpose
Implementation is the process that actually yields the lowest-level system elements in the system hierarchy (system breakdown structure). System elements are made, bought, or reused. Production involves the hardware fabrication processes of forming, removing, joining, and finishing, the software realization processes of coding and testing, or the operational procedures development processes for operators' roles. If implementation involves a production process, a manufacturing system which uses the established technical and management processes may be required.
The purpose of the implementation process is to design and create (or fabricate) a system element conforming to that element's design properties and/or requirements. The element is constructed employing appropriate technologies and industry practices. This process bridges the system definition processes and the integration process. Figure 1 portrays how the outputs of system definition relate to system implementation, which produces the implemented (system) elements required to produce aggregates and the SoI.





Process Approach
Purpose and Principle of the Approach
During the implementation process, engineers apply the design properties and/or requirements allocated to a system element to design and produce a detailed description. They then fabricate, code, or build each individual element using specified materials, processes, physical or logical arrangements, standards, technologies, and/or information flows outlined in detailed descriptions (drawings or other design documentation). A system element will be verified against the detailed description of properties and validated against its requirements.
If subsequent verification and validation (V&V) actions or configuration audits reveal discrepancies, recursive interactions occur, which includes predecessor activities or processes, as required, to mitigate those discrepancies and to modify, repair, or correct the system element in question. Figure 2 provides the context for the implementation process from the perspective of the U.S. Defense Acquisition University (DAU).

Such figures provide a useful overview of the systems engineering (SE) community's perspectives on what is required for implementation and what the general results of implementation may be. These are further supported by the discussion of implementation inputs, outputs, and activities found in the National Aeronautics and Space


Association's (NASA's) Systems Engineering Handbook (NASA 2007). It is important to understand that these views are process -oriented. While this is a useful model, examining implementation only in terms of process can be limiting.
Depending on the technologies and systems chosen when a decision is made to produce a system element, the implementation process outcomes may generate constraints to be applied on the architecture of the higher-level system; those constraints are normally identified as derived system requirements and added to the set of system requirements applicable to this higher-level system. The architectural design has tomust take those constraints into account.
If the decision is made to purchase or reuse an existing system element, it has tomust be identified as a constraint or system requirement applicable to the architecture of the higher-level system. Conversely, the implementation process may involve some adaptation or adjustments to the system requirement in order to be integrated into a higher-level system or aggregate.
Implementation also involves packaging, handling, and storage, depending on the concerned technologies and where or when the system requirement needs to be integrated into a higher-level aggregate. Developing the supporting documentation for a system requirement, such as the manuals for operation, maintenance, and/or installation, is also a part of the implementation process; these artifacts are utilized in the system deployment and use phase. The system element requirements and the associated verification and validation criteria are inputs to this process; these inputs come from the architectural design process detailed outputs.
Execution of the implementation process is governed by both industrial and government standards and the terms of all applicable agreements. This may include conditions for packaging and storage, as well as preparation for use activities, such as operator training. In addition, packaging, handling, storage, and transportation (PHS&T) considerations will constrain the implementation activities. For more information, refer to the discussion of PHS&T in the System Deployment and Use article. The developing or integrating organization will likely have enterprise-level safety practices and guidelines that must also be considered.

Activities of the Process
The following major activities and tasks are performed during this process:
 Define the implementation strategy - Implementation process activities begin with detailed design and include developing an implementation strategy that defines fabrication and coding procedures, tools and equipment to be used, implementation tolerances, and the means and criteria for auditing configuration of resulting elements to the detailed design documentation. In the case of repeated system element implementations (such as for mass manufacturing or replacement elements), the implementation strategy is defined and refined to achieve consistent and repeatable element production; it is retained in the project decision database for future use. The implementation strategy contains the arrangements for packing, storing, and supplying the implemented element.
 Realize the system element - Realize or adapt and produce the concerned system element using the implementation strategy items as defined above. Realization or adaptation is conducted with regard to standards that govern applicable safety, security, privacy, and environmental guidelines or legislation and the practices of the relevant implementation technology. This requires the fabrication of hardware elements, development of software elements, definition of training capabilities, drafting of training documentation, and the training of initial operators and maintainers.
 Provide evidence of compliance - Record evidence that the system element meets its requirements and the associated verification and validation criteria as well as the legislation policy. This requires the conduction of peer reviews and unit testing, as well as inspection of operation and maintenance manuals. Acquire measured properties that characterize the implemented element (weight, capacities, effectiveness, level of performance, reliability, availability, etc.).
 Package, store, and supply the implemented element - This should be defined in the implementation strategy.


Artifacts and Ontology Elements
This process may create several artifacts such as:
 an implemented system
 implementation tools
 implementation procedures
 an implementation plan or strategy
 verification reports
 issue, anomaly, or trouble reports
 change requests (about design)
This process handles the ontology elements shown in Table 1 below.

Table 1. Main Ontology Elements as Handled within System Element Implementation. (SEBoK Original)
Element	Definition





Implemented Element




Measured Property

Attributes (examples)

An implemented element is a system element that has been implemented. In the case of hardware it is marked with a part/serial number.

Identifier, name, description, type (hardware, software application, software piece, mechanical part, electric art, electronic component, operator role, procedure, protocol, manual, etc.)
A measured property is a characteristic of the implemented element established after its implementation. The measured properties characterize the implemented system element when it is completely realized, verified, and validated. If the implemented element complies with a design property, the measured property should equal the design property. Otherwise one has tomust identify the difference or non-conformance which treatment could conclude to modify the design property and possibly the related requirements, or to modify (correct, repair) the implemented element, or to identify a deviation.

Identifier, name, description, type (effectiveness, availability, reliability, maintainability, weight, capacity, etc.), value, unit, etc.


The main relationships between ontology elements are presented in Figure 3.





Methods, Techniques, and Tools
There are many software tools available in the implementation and integration phases. The most basic method would be the use of N-squared diagrams as discussed in Jeff Grady's book System Integration (Grady 1994).

Checking and Correctness of Implementation
Proper implementation checking and correctness should include testing to determine if the implemented element (i.e., piece of software, hardware, or other product) works in its intended use. Testing could include mockups and breadboards, as well as modeling and simulation of a prototype or completed pieces of a system. Once this is completed successfully, the next process would be system integration.

References
Works Cited
DAU. February 19, 2010. Defense acquisition guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense.
Grady, J.O. 1994. System integration. Boca Raton, FL, USA: CRC Press, Inc.
NASA. 2007. Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.


Primary References
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD). February 19, 2010.
Grady, J.O. 1994. System Integration. Boca Raton, FL, USA: CRC Press, Inc.
ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
NASA. 2007. Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.

Additional References
Faisandier, A. 2012. Systems Architecture and Design. Belberaud, France: Sinergy'Com.

System Integration

 Lead Authors:
 John Snoderly, Alan Faisandier, and Scott Jackson
-
System integration consists of taking delivery of the implemented system elements which compose the system-of-interest (SoI), assembling these implemented elements together, and performing the verification and validation actions (V&V actions) in the course of the assembly. The ultimate goal of system integration is to ensure that the individual system elements function properly as a whole and satisfy the design properties or characteristics of the system. System integration is one part of the realization effort and relates only to developmental items. Integration should not to be confused with the assembly of end products on a production line. To perform the production, the assembly line uses a different order from that used by integration.

Definition and Purpose
System integration consists of a process that "iteratively combines implemented system elements to form complete or partial system configurations in order to build a product or service. It is used recursively for successive levels of the system hierarchy." (ISO/IEC 15288 2015, 68). The process is extended to any kind of product system, service system, and enterprise system. The purpose of system integration is to prepare the SoI for final validation and transition either for use or for production. Integration consists of progressively assembling aggregates of implemented elements that compose the SoI as architected during design, and to check correctness of static and dynamic aspects of interfaces between the implemented elements.
The U.S. Defense Acquisition University (DAU) provides the following context for integration: The integration process will be used . . . for the incorporation of the final system into its operational environment to ensure that the system is integrated properly into all defined external interfaces. The interface management process is particularly important for the success of the integration process, and iteration between the two processes will occur (DAU 2010).
The purpose of system integration can be summarized as below:
 Completely assemble the implemented elements to make sure that the they are compatible with each other.
 Demonstrate that the aggregates of implemented elements perform the expected functions and meet measures of performance/effectiveness.
 Detect defects/faults related to design and assembly activities by submitting the aggregates to focused V&V actions.


Note: In the systems engineering literature, sometimes the term integration is used in a larger context than in the present topic. In this larger sense, it concerns the technical effort to simultaneously design and develop the system and the processes for developing the system through concurrent consideration of all life cycle stages, needs, and competences. This approach requires the "integration" of numerous skills, activities, or processes.

Principles
Boundary of Integration Activity
Integration can be understood as the whole bottom-up branch of the Vee Model, including the tasks of assembly and the appropriate verification tasks. See Figure 1 below:

The assembly activity joins together, and physically links, the implemented elements. Each implemented element is individually verified and validated prior to entering integration. Integration then adds the verification activity to the assembly activity, excluding the final validation.
The final validation performs operational tests that authorize the transition for use or the transition for production. Remember that system integration only endeavors to obtain pre-production prototypes of the concerned product, service, or enterprise. If the product, service, or enterprise is delivered as a unique exemplar, the final validation activity serves as acceptance for delivery and transfer for use. If the prototype has to be produced in several exemplars, the final validation serves as acceptance to launch their production. The definition of the optimized operations of assembly which will be carried out on a production line relates to the manufacturing process and not to the integration process.
Integration activity can sometimes reveal issues or anomalies that require modifications of the design of the system. Modifying the design is not part of the integration process but concerns only the design process. Integration only deals with the assembly of the implemented elements and verification of the system against its properties as designed. During assembly, it is possible to carry out tasks of finishing touches which require simultaneous use of several implemented elements (e.g., paint the whole after assembly, calibrate a biochemical component, etc.). These


tasks must be planned in the context of integration and are not carried out on separate implemented elements and do not include modifications related to design.

Aggregation of Implemented Elements
The integration is used to systematically assemble a higher-level system from lower-level ones (implemented system elements) that have been implemented. Integration often begins with analysis and simulations (e.g., various types of prototypes) and progresses through increasingly more realistic systems and system elements until the final product, service, or enterprise is achieved.
System integration is based on the notion of an aggregate - a subset of the system made up of several implemented elements (implemented system elements and physical interfaces) on which a set of V&V actions is applied. Each aggregate is characterized by a configuration which specifies the implemented elements to be physically assembled and their configuration status.
To perform V&V actions, a V&V configuration that includes the aggregate plus V&V tools is constituted. The V&V tools are enabling products and can be simulators (simulated implemented elements), stubs or caps, activators (launchers, drivers), harness, measuring devices, etc.

Integration by Level of System
According to the Vee Model, system definition (top-down branch) is done by successive levels of decomposition; each level corresponds to the physical architecture of systems and system elements. The integration (bottom-up branch) takes the opposite approach of composition (i.e., a level by level approach). On a given level, integration is done on the basis of the physical architecture defined during system definition.

Integration Strategy
The integration of implemented elements is generally performed according to a predefined strategy. The definition of the integration strategy is based on the architecture of the system and relies on the way the architecture of the system has been designed. The strategy is described in an integration plan that defines the minimum configuration of expected aggregates, the order of assembly of these aggregates in order to support efficient subsequent verification and validation actions (e.g., inspections and/or testing), techniques to check or evaluate interfaces, and necessary capabilities in the integration environment to support combinations of aggregates. The integration strategy is thus elaborated starting from the selected verification and validation strategy. See the System Verification and System Validation topics.
To define an integration strategy, there are several possible integration approaches/techniques that may be used individually or in combination. The selection of integration techniques depends on several factors; in particular, the type of system element, delivery time, order of delivery, risks, constraints, etc. Each integration technique has strengths and weaknesses which should be considered in the context of the SoI. Some integration techniques are summarized in Table 1 below.


Table 1. Integration Techniques. (SEBoK Original)
Integration	Description
Technique

Global Integration	Also known as big-bang integration; all the delivered implemented elements are assembled in only one step.
 This technique is simple and does not require simulating the implemented elements not being available at that time.
 Difficult to detect and localize faults; interface faults are detected late.
 Should be reserved for simple systems, with few interactions and few implemented elements without technological risks.
Integration "with	The delivered implemented elements are assembled as they become available.
the Stream"	  Allows starting the integration quickly.
 Complex to implement because of the necessity to simulate the implemented elements not yet available. Impossible to control the end-to-end "functional chains"; consequently, global tests are postponed very late in the schedule.
 Should be reserved for well-known and controlled systems without technological risks.

Incremental	In a predefined order, either one or a very few implemented elements are added to an already integrated increment of
Integration	implemented elements.
 Fast localization of faults: a new fault is usually localized in lately integrated implemented elements or dependent of a faulty interface.
 Require simulators for absent implemented elements. Require many test cases, as each implemented element addition requires the verification of the new configuration and regression testing.
 Applicable to any type of architecture.

Subsets Integration	Implemented elements are assembled by subsets, and then subsets are assembled together (a subset is an aggregate); could also be called "functional chains integration".
 Time saving due to parallel integration of subsets; delivery of partial products is possible. Requires less means and fewer test cases than integration by increments.
 Subsets shall be defined during the design.
 Applicable to architectures composed of sub-systems.

Top-Down	Implemented elements or aggregates are integrated in their activation or utilization order.
Integration	 Availability of a skeleton and early detection of architectural faults, definition of test cases close to reality, and the re-use of test data sets possible.
 Many stubs/caps need to be created; difficult to define test cases of the leaf-implemented elements (lowest level).
 Mainly used in software domain. Start from the implemented element of higher level; implemented elements of lower level are added until leaf-implemented elements.
Bottom-Up	Implemented elements or aggregates are integrated in the opposite order of their activation or utilization.
Integration	 Easy definition of test cases; early detection of faults (usually localized in the leaf-implemented elements); reduce the number of simulators to be used. An aggregate can be a sub-system.
 Test cases shall be redefined for each step, drivers are difficult to define and realize, implemented elements of lower levels are "over-tested", and does not allow architectural faults to be quickly detected.
 Mainly used in software domain, but can be used in any kind of system.

Criterion Driven	The most critical implemented elements compared to the selected criterion are first integrated (dependability, complexity,
Integration	technological innovation, etc.). Criteria are generally related to risks.
 Allows early and intensive testing of critical implemented elements; early verification of design choices.
 Test cases and test data sets are difficult to define.

Usually, a mixed integration technique is selected as a trade-off between the different techniques listed above, allowing optimization of work and adaptation of the process to the system under development. The optimization takes into account the realization time of the implemented elements, their delivery scheduled order, their level of complexity, the technical risks, the availability of assembly tools, cost, deadlines, specific personnel capability, etc.


Process Approach
Activities of the Process
Major activities and tasks performed during this process include:
 Establishing the integration plan (this activity is carried out concurrently to the design activity of the system) that defines:
 The optimized integration strategy - order of aggregates assembly using appropriate integration techniques.
 The V&V actions to be processed for the purpose of integration.
 The configurations of the aggregates to be assembled and verified.
 The integration means and verification means (dedicated enabling products) that may include assembly procedures, assembly tools (harness, specific tools), V&V tools (simulators, stubs/caps, launchers, test benches, devices for measuring, etc.), and V&V procedures.
 Obtain the integration means and verification means as defined in the integration plan. The acquisition of the means can be accomplished through various ways such as procurement, development, reuse, and sub-contracting; usually the acquisition of the complete set of means is a mix of these methods.
 Take delivery of each implemented element:
 Unpack and reassemble the implemented element with its accessories.
 Check the delivered configuration, conformance of implemented elements and compatibility of interfaces, and ensure the presence of mandatory documentation.
 Assemble the implemented elements into aggregates:
 Gather the implemented elements to be assembled, the integration means (assembly tools, assembly procedures), and the verification means (V&V tools and procedures).
 Connect the implemented elements to each other using assembly tools to constitute aggregates in the order prescribed by the integration plan and in assembly procedures.
 Add or connect the V&V tools to the aggregates as predefined.
 Carry out eventual operations of welding, gluing, drilling, tapping, adjusting, tuning, painting, parametering, etc.
 Verify each aggregate:
 Check the aggregate is correctly assembled according to established procedures.
 Perform the verification process that uses verification and validation procedures and check that the aggregate shows the right design properties/specified requirements.
 Record integration results/reports and potential issue reports, change requests, etc.

Artifacts and Ontology Elements
This process may create several artifacts such as:
 an integrated system
 assembly tools
 assembly procedures
 integration plans
 integration reports
 issue/anomaly/trouble reports
 change requests (about design)
This process utilizes the ontology elements discussed in Table 2.


Table 2. Main Ontology Elements as Handled within System Integration. (SEBoK Original)
Element	Definition

Attributes

Aggregate	An aggregate is a subset of the system made up of several system elements or systems on which a set of verification actions is applied.





Assembly Procedure

Identifier, name, description

An assembly procedure groups a set of elementary assembly actions to build an aggregate of implemented system elements.

Identifier, name, description, duration, unit of time


Assembly Tool An assembly tool is a physical tool used to connect, assemble, or link several implemented system elements to build aggregates (specific tool, harness, etc.).

Identifier, name, description

Risk	An event having a probability of occurrence and a gravity degree on its consequence onto the system mission or on other characteristics (used for technical risk in engineering). A risk is the combination of vulnerability and of a danger or a threat.

Identifier, name, description, status

Rationale	An argument that provides the justification for the selection of an engineering element.

Identifier, name, description (rationale, reasons for defining an aggregate, assembly procedure, assembly tool)

Note: verification and validation ontology elements are described in the System Verification and System Validation topics.
The main relationships between ontology elements are presented in Figure 2.





Checking and Correctness of Integration
The main items to be checked during the integration process include the following:
 The integration plan respects its template.
 The expected assembly order (integration strategy) is realistic.
 No system element and physical interface set out in the system design document is forgotten.
 Every interface and interaction between implemented elements is verified.
 Assembly procedures and assembly tools are available and validated prior to beginning the assembly.
 V&V procedures and tools are available and validated prior to beginning the verification.
 Integration reports are recorded.

Methods and Techniques
Several different approaches are summarized above in the section Integration Strategy [1] (above) that may be used for integration, yet other approaches exist. In particular, important integration strategies for intensive software systems include: vertical integration, horizontal integration, and star integration.

Coupling Matrix and N-squared Diagram
One of the most basic methods to define the aggregates and the order of integration would be the use of N-Squared diagrams (Grady 1994, 190).
In the integration context, the coupling matrices are useful for optimizing the aggregate definition and verification of interfaces:


 The integration strategy is defined and optimized by reorganizing the coupling matrix in order to group the implemented elements in aggregates, thus minimizing the number of interfaces to be verified between aggregates (see Figure 3).

 When verifying the interactions between aggregates, the matrix is an aid tool for fault detection. If by adding an implemented element to an aggregate an error is detected, the fault can be related to the implemented element, to the aggregate, or to the interfaces. If the fault is related to the aggregate, it can relate to any implemented element or any interface between the implemented elements internal to the aggregate.

Application to Product Systems, Service Systems, and Enterprise Systems
As the nature of implemented system elements and physical interfaces is different for these types of systems, the aggregates, the assembly tools, and the V&V tools are different. Some integration techniques are more appropriate to specific types of systems. Table 3 below provides some examples.

Table 3. Different Integration Elements for Product, Service, and Enterprise Systems. (SEBoK Original)
       Element		Product System		Service System		Enterprise System System Element	Hardware Parts (mechanics,	Processes, data bases, procedures, etc.	Corporate, direction, division,

electronics, electrical, plastic, chemical, etc.)
Operator Roles Software Pieces

Operator Roles Software Applications

department, project, technical team, leader, etc.
IT components

Physical Interface	Hardware parts, protocols,	Protocols, documents, etc.	Protocols, procedures, documents, etc. procedures, etc.
Assembly Tools	Harness, mechanical tools, specific	Documentation, learning course, etc.	Documentation, learning, moving of tools		office
Software Linker

Verification Tools	Test bench, simulator, launchers,	Activity/scenario models, simulator,	Activity/scenario models, simulator, stub/cap	human roles rehearsal, computer, etc.	human roles rehearsal
Skilled Experts

Validation Tools	Operational environment	Operational environment	Operational environment


Recommended	Top down integration technique	Subsets integration technique	Global integration technique
Integration Techniques  Bottom Up Integration technique	(functional chains)	Incremental integration


Practical Considerations
Key pitfalls and good practices related to system integration are described in the next two sections.

Pitfalls
Some of the key pitfalls encountered in planning and performing SE Measurement are provided in Table 4.

Table 4. Major Pitfalls with System Integration. (SEBoK Original)
Pitfall	Description

Delay of expected	The experience shows that the implemented elements always do not arrive in the expected order and the tests never proceed
element	or result as foreseen; therefore, the integration strategy should allow a great flexibility.

Big-bang not	The "big-bang" integration technique is not appropriate for a fast detection of faults. It is thus preferable to verify the
appropriate	interfaces progressively all along the integration.

Integration plan	The preparation of the integration activities is planned too late in the project schedule, typically when first implemented
too late	elements are delivered.


Good Practices
Some good practices gathered from the references are provided in Table 5.

Table 5. Proven Practices with System Integration. (SEBoK Original)
Practice	Description

Start earlier	The development of assembly tools and verification and validation tools can be take as long as the system development
development of	itself. It should be started as early as possible as soon as the preliminary design is nearly frozen.
means

Integration means	The development of integration means (assembly tools, verification, and validation tools) can be seen as enabling systems, seen as enabling	using system definition and system realization processes as described in this SEBoK, and managed as projects. These systems	projects can be led by the project of the corresponding system-of-interest, but assigned to specific system blocks, or can be
subcontracted as separate projects.

Use coupling matrix A good practice consists in gradually integrating aggregates in order to detect faults more easily. The use of the coupling matrix applies for all strategies and especially for the bottom up integration strategy.
Flexible integration	The integration process of complex systems cannot be easily foreseeable and its progress control difficult to observe. This
plan and schedule	is why it is recommended to plan integration with specific margins, using flexible techniques, and integrating sets by similar technologies.
Integration and	The integration responsible should be part of the design team.
design teams


References
Works Cited
DAU. February 19, 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD).
Faisandier, A. 2012. Systems Architecture and Design. Belberaud, France: Sinergy'Com.
ISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes.Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.

Primary References
INCOSE. 2010. Systems Engineering Handbook: A Guide for Systems Life Cycle Processes and Activities. Version
3.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.
NASA. 2007. Systems Engineering Handbook. Washington, D.C.: National Aeronautics and Space Administration (NASA), NASA/SP-2007-6105.

Additional References
Buede, D.M. 2009. The Engineering Design of Systems: Models and Methods. 2nd ed. Hoboken, NJ, USA: John Wiley & Sons Inc.
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense. February 19, 2010.
Gold-Bernstein, B. and W.A. Ruh. 2004. Enterprise integration: The essential guide to integration solutions. Boston, MA, USA: Addison Wesley Professional.
Grady, J.O. 1994. System integration. Boca Raton, FL, USA: CRC Press, Inc.
Hitchins, D. 2009. "What are the General Principles Applicable to Systems?" INCOSE Insight 12(4):59-63.
Jackson, S. 2010. Architecting Resilient Systems: Accident Avoidance and Survival and Recovery from Disruptions. Hoboken, NJ, USA: John Wiley & Sons.
Reason, J. 1997. Managing the Risks of Organizational Accidents. Aldershot, UK: Ashgate Publishing Limited.

References
[1] http://sebokwiki.org/1.0.1/index.php?title=System_Integration#Integration_Strategy


System Verification

 Lead Authors:
 John Snoderly and Alan Faisandier
-
System Verification is a set of actions used to check the correctness of any element, such as a system element, a system, a document, a service, a task, a requirement, etc. These types of actions are planned and carried out throughout the life cycle of the system. Verification is a generic term that needs to be instantiated within the context it occurs. As a process, verification is a transverse activity to every life cycle stage of the system. In particular, during the development cycle of the system, the verification process is performed in parallel with the system definition and system realization processes and applies to any activity and any product resulting from the activity. The activities of every life cycle process and those of the verification process can work together. For example, the integration process frequently uses the verification process. It is important to remember that verification, while separate from validation, is intended to be performed in conjunction with validation.

Definition and Purpose
Verification is the confirmation, through the provision of objective evidence, that specified requirements have been fulfilled. With a note added in ISO/IEC/IEEE 15288, the scope of verification includes a set of activities that compares a system or system element against the requirements, architecture and design characteristics, and other properties to be verified (ISO/IEC/IEEE 2015). This may include, but is not limited to, specified requirements, design description, and the system itself.
The purpose of verification, as a generic action, is to identify the faults/defects introduced at the time of any transformation of inputs into outputs. Verification is used to provide information and evidence that the transformation was made according to the selected and appropriate methods, techniques, standards, or rules.
Verification is based on tangible evidence; i.e., it is based on information whose veracity can be demonstrated by factual results obtained from techniques such as inspection, measurement, testing, analysis, calculation, etc. Thus, the process of verifying a system (product, service, enterprise, or system of systems (SoS)) consists of comparing the realized characteristics or properties of the product, service, or enterprise against its expected design properties.

Principles and Concepts
Concept of Verification Action
Why Verify?
In the context of human realization, any human thought is susceptible to error. This is also the case with any engineering activity. Studies in human reliability have shown that people trained to perform a specific operation make around 1-3 errors per hour in best case scenarios. In any activity, or resulting outcome of an activity, the search for potential errors should not be neglected, regardless of whether or not one thinks they will happen or that they should not happen; the consequences of errors can cause extremely significant failures or threats.
A verification action is defined, and then performed, as shown in Figure 1.




The definition of a verification action applied to an engineering element includes the following:
 Identification of the element on which the verification action will be performed
 Identification of the reference to define the expected result of the verification action (see examples of reference in Table 1)
The performance of a verification action includes the following:
 Obtaining a result by performing the verification action onto the submitted element
 Comparing the obtained result with the expected result
 Deducing the degree of correctness of the element

What to Verify?
Any engineering element can be verified using a specific reference for comparison: stakeholder requirement, system requirement, function, system element, document, etc. Examples are provided in Table 1.

Table 1. Examples of Verified Items. (SEBoK Original)
Items	Explanation for Verification

Document	To verify a document is to check the application of drafting rules.

Stakeholder	To verify a stakeholder requirement or a system requirement is to check the application of syntactic and grammatical Requirement and	rules, characteristics defined in the stakeholder requirements definition process, and the system requirements definition System Requirement	process such as necessity, implementation free, unambiguous, consistent, complete, singular, feasible, traceable, and
verifiable.

Design	To verify the design of a system is to check its logical and physical architecture elements against the characteristics of the outcomes of the design processes.
System	To verify a system (product, service, or enterprise) is to check its realized characteristics or properties against its expected design characteristics.
Aggregate	To verify an aggregate for integration is to check every interface and interaction between implemented elements.

Verification Procedure	To verify a verification procedure is to check the application of a predefined template and drafting rules.


Verification versus Validation
The term verification is often associated with the term validation and understood as a single concept of V&V. Validation is used to ensure that one is working the right problem, whereas verification is used to ensure that one has solved the problem right (Martin 1997). From an actual and etymological meaning, the term verification comes from the Latin verus, which means truth, and facere, which means to make/perform. Thus, verification means to prove that something is true or correct (a property, a characteristic, etc.). The term validation comes from the Latin valere, which means to become strong, and has the same etymological root as the word value. Thus, validation means to prove that something has the right features to produce the expected effects. (Adapted from "Verification and Validation in plain English" (Lake INCOSE 1999).)
The main differences between the verification process and the validation process concern the references used to check the correctness of an element, and the acceptability of the effective correctness.
 Within verification, comparison between the expected result and the obtained result is generally binary, whereas within validation, the result of the comparison may require a judgment of value regarding whether or not to accept the obtained result compared to a threshold or limit.
 Verification relates more to one element, whereas validation relates more to a set of elements and considers this set as a whole.
 Validation presupposes that verification actions have already been performed.
 The techniques used to define and perform the verification actions and those for validation actions are very similar.

Integration, Verification, and Validation of the System
There is sometimes a misconception that verification occurs after integration and before validation. In most cases, it is more appropriate to begin verification activities during development or implementation and to continue them into deployment and use.
Once the system elements have been realized, they are integrated to form the complete system. Integration consists of assembling and performing verification actions as stated in the integration process. A final validation activity generally occurs when the system is integrated, but a certain number of validation actions are also performed parallel to the system integration in order to reduce the number of verification actions and validation actions while controlling the risks that could be generated if some checks are excluded. Integration, verification, and validation are intimately processed together due to the necessity of optimizing the strategy of verification and validation, as well as the strategy of integration.

Process Approach
Purpose and Principle of the Approach
The purpose of the verification process is to confirm that the system fulfills the specified design requirements. This process provides the information required to effect the remedial actions that correct non-conformances in the realized system or the processes that act on it - see ISO/IEC/IEEE 15288 (ISO/IEC/IEEE 2015).
Each system element and the complete system itself should be compared against its own design references (specified requirements). As stated by Dennis Buede, verification is the matching of [configuration items], components, sub-systems, and the system to corresponding requirements to ensure that each has been built right (Buede 2009). This means that the verification process is instantiated as many times as necessary during the global development of the system. Because of the generic nature of a process, the verification process can be applied to any engineering element that has conducted to the definition and realization of the system elements and the system itself.


Facing the huge number of potential verification actions that may be generated by the normal approach, it is necessary to optimize the verification strategy. This strategy is based on the balance between what must be verified and constraints, such as time, cost, and feasibility of testing, which naturally limit the number of verification actions and the risks one accepts when excluding some verification actions.
Several approaches exist that may be used for defining the verification process. The International Council on Systems Engineering (INCOSE) dictates that two main steps are necessary for verification: planning and performing verification actions (INCOSE 2012). NASA has a slightly more detailed approach that includes five main steps: prepare verification, perform verification, analyze outcomes, produce a report, and capture work products (NASA December 2007, 1-360, p. 102). Any approach may be used, provided that it is appropriate to the scope of the system, the constraints of the project, includes the activities of the process listed below in some way, and is appropriately coordinated with other activities.
Generic inputs are baseline references of the submitted element. If the element is a system, inputs are the logical and physical architecture elements as described in a system design document, the design description of internal interfaces to the system and interfaces requirements external to the system, and by extension, the system requirements. Generic outputs define the verification plan that includes verification strategy, selected verification actions, verification procedures, verification tools, the verified element or system, verification reports, issue/trouble reports, and change requests on design.

Activities of the Process
To establish the verification strategy drafted in a verification plan (this activity is carried out concurrently to system definition activities), the following steps are necessary:
 Identify verification scope by listing as many characteristics or properties as possible that should be checked. The number of verification actions can be extremely high.
 Identify constraints according to their origin (technical feasibility, management constraints as cost, time, availability of verification means or qualified personnel, and contractual constraints that are critical to the mission) that limit potential verification actions.
 Define appropriate verification techniques to be applied, such as inspection, analysis, simulation, peer-review, testing, etc., based on the best step of the project to perform every verification action according to the given constraints.
 Consider a tradeoff of what should be verified (scope) taking into account all constraints or limits and deduce what can be verified; the selection of verification actions would be made according to the type of system, objectives of the project, acceptable risks, and constraints.
 Optimize the verification strategy by defining the most appropriate verification technique for every verification action while defining necessary verification means (tools, test-benches, personnel, location, and facilities) according to the selected verification technique.
 Schedule the execution of verification actions in the project steps or milestones and define the configuration of elements submitted to verification actions (this mainly involves testing on physical elements).
Performing verification actions includes the following tasks:
 Detail each verification action; in particular, note the expected results, the verification techniques to be applied, and the corresponding means required (equipment, resources, and qualified personnel).
 Acquire verification means used during system definition steps (qualified personnel, modeling tools, mocks-up, simulators, and facilities), and then those used during the integration step (qualified personnel, verification tools, measuring equipment, facilities, verification procedures, etc.).
 Carry out verification procedures at the right time, in the expected environment, with the expected means, tools, and techniques.


 Capture and record the results obtained when performing verification actions using verification procedures and means.
The obtained results must be analyzed and compared to the expected results so that the status may be recorded as either compliant or non-compliant. Systems engineering (SE) practitioners will likely need to generate verification reports, as well as potential issue/trouble reports, and change requests on design as necessary.
Controlling the process includes the following tasks:
 Update the verification plan according to the progress of the project; in particular, planned verification actions can be redefined because of unexpected events.
 Coordinate verification activities with the project manager: review the schedule and the acquisition of means, personnel, and resources. Coordinate with designers for issues/trouble/non-conformance reports and with the configuration manager for versions of the physical elements, design baselines, etc.

Artifacts and Ontology Elements
This process may create several artifacts such as: