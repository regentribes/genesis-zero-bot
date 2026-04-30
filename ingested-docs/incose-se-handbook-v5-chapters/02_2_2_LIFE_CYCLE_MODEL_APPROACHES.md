LIFE CYCLE MODEL APPROACHES


Section 2.1 introduces the concept of life cycle stages. The life cycle models are thus the framework within which the individual life cycle stages and transitions between them are planned and implemented. There are many different life cycle models, each suitable for different situations. A common way to differentiate them is to divide the life cycle model approaches into three groups: sequential, incremental, and evolutionary. Figure 2.5 provides the general concept for each of these approaches, and Table 2.2 summarizes their distinguishing characteristics.




FIGURE 2.5 Concepts for the three life cycle model approaches. InCOSE SEH original figure created by Endler. Usage per the InCOSE nOTICES page. All other rights reserved.





TABLE 2.2 Life cycle model approach characteristics



Life cycle approach Requirement set at start Planned iterations Multiple deployments

Sequential Full Single No

Incremental Full Multiple Potential

Evolutionary Partial Multiple Typically

INCOSE SEH original table created by Endler derived from ISO/IEC/IEEE 24748-1 (2018). Usage per the INCOSE Notices page. All other rights reserved.





ISO/IEC/IEEE 24748–1 (2018) provides further information on sequential (identified as “once-through”), incremental, and evolutionary life cycle model approaches. Sections 2.2.1 to 2.2.3 elaborate on how these approaches can be applied to manage the work within each life cycle stage.

There are many factors that help determine which life cycle models are suitable for a specific system or project. Clause 6 of ISO/IEC/IEEE 24748–1 (2018) provides informational considerations that may influence the selection and adaptation of life cycle model, including:

stability of, and variety in, operational environments;

risks, commercial or performance, to the concern of stakeholders;

novelty, size, and complexity;

starting date and duration of utilization;

integrity issues such as safety, security, privacy, usability, availability;

emerging technology opportunities;

profile of budget and organizational resources available;

availability of the services of enabling systems;

roles, responsibilities, accountabilities, and authorities in the overall life cycle of the system;

the need to conform to other standards.



Other sources define characteristics and tailoring factors that can be used to guide tailoring. As an example, Project Management Institute (PMI) has published their Situation Context Framework (SCF) (2022) that “defines how to select and tailor a situation-dependent strategy for software development. The SCF is used to provide context for organizing your people, process, and tools for a software-based solution delivery team.” Seven dimensions (team size, geographic distribution, organizational distribution, skill availability, compliance, domain complexity, and solution complexity) with scaling factors in each dimension are defined within this framework.

As there is no universal approach, it is recommended that each organization continuously questions itself as to which approach, or combination of approaches, is most suitable. Part IV of this handbook addresses tailoring and application considerations in more detail.





2.2.1 Sequential Methods


The sequential approach is focused on the general flow of the processes with feedback loops, but a single delivery. Sequential life cycle models break down SE activities into linear sequential stages, where each stage depends on the deliverables of the previous stages, along with feedback from subsequent stages.

On projects where it is necessary to coordinate large teams of people working in multiple companies, sequential approaches provide an underlying framework to provide discipline to the life cycle processes. Sequential life cycle models are characterized by a systematic approach that adheres to specified processes as the system moves through a series of representations from requirements through design to finished product. Specific attention is given to the completeness of documentation, traceability from requirements, and verification of each representation after the fact.

The strengths of sequential life cycle models are predictability, stability, repeatability, and high assurance. Process improvement focuses on increasing process capability through standardization, measurement, and control. These models rely on “master plans” to anchor their processes and provide project-wide communication. Historical data is usually carefully collected and maintained as inputs to future planning to make projections more accurate (Boehm and Turner, 2004).

The waterfall model, introduced by Royce (1970), was used to characterize the advantages and disadvantages of sequential approaches. The waterfall model has been used successfully in the manufacturing and construction industries, where the highly structured physical environments meant that design changes became prohibitively expensive much sooner in the development process. In addition, safety-critical products, such as the Therac-25 medical equipment (see the case study in Section 6.1), can only meet modern certification standards by following a thorough, documented set of plans and specifications. Such standards mandate strict adherence to process and specified documentation to achieve safety or security.

The SE Vee model (named due to its shape representing the letter “V” in the English language), introduced in Forsberg and Mooz (1991), described in Forsberg, et al. (2005), and shown in Figure 2.6, is another example of a sequential approach used to visualize key areas for SE focus, associating each development stage with a corresponding testing stage. The Vee highlights the need for continuous validation with the stakeholders, the need to define verification plans during requirements development, and the importance of continuous risk and opportunity assessment.




FIGURE 2.6 The SE Vee model. From Forsberg, et al. (2005) with permission from John Wiley & Sons. All other rights reserved.





There are several variations of the Vee model. Typically, the “left” side of the Vee is called system definition and the “bottom” and “right” side of the Vee are called system realization. In the Vee model, time and system maturity conceptually proceed from left to right (down the left side of the Vee and up the right side of the Vee). However, all the system life cycle processes are performed concurrently and iteratively at each level of the system hierarchy and all the system life cycle processes are recursively applied at each level of the system hierarchy (see Section 2.3.1.2). One of the strengths of the Vee model is its depiction of the relationships between the left and right sides of the Vee.

The left side of the Vee depicts the evolving baseline from stakeholder requirements, to system requirements, to the identification of a system architecture, to definition of elements that will comprise the final system. The development team then can move from the highest level of the system requirements down to the lowest level of detail. Risk and opportunity management investigations address development options to provide assurance that the baseline performance being considered can indeed be achieved and to initiate alternate concept studies at the lower levels of detail to determine the best approach. Stakeholder discussions (in-process validation) occur to ensure that the proposed baselines are acceptable to the organization, customer, user, and other stakeholders. Changes to enhance system performance or to reduce risk or cost are welcome for consideration, but after baselining these must go through formal change control, since others may be building on previously defined and released design decisions. The bottom of the Vee depicts either the recursive application of the systems life cycle processes at the next level of the system hierarchy or the implementation of atomic system elements (see Section 1.3.5). The broadening at the base of the figure shows the growth in the number of system elements. Note that system elements can also be bought or reused. The right side of the Vee depicts the evolving baseline of system elements that are implemented, integrated, verified, and validated. In each stage of the system life cycle, the SE processes iterate to ensure that a concept or design is feasible and that the stakeholders remain supportive of the solution as it evolves.

ISO/IEC/IEEE 24748–2 (2018), Clause 6.4.3.1 provides further details on sequential life cycle models, including typical applicable systems as well as risks and opportunities associated with these models.




2.2.2 Incremental Methods


Incremental approaches have been in use since the 1960s (Larman and Basili, 2003). They represent a practical and useful approach that allows a project to provide an initial capability (or a limited set of capabilities) followed by successive deliveries to reach the desired SoI. The goal of an incremental approach is to provide rapid value and responsiveness. Generally, each increment adds capabilities intended to converge on a stakeholder satisfying result for the increment. Based on a set of requirements, a candidate set of increments is defined and the initial increment is initiated. Subsequent increments are initiated, and the process is repeated, until a complete system is deployed or until the organization decides to terminate the effort. Intermediate increments can potentially be deployed to support learning.

An incremental approach works well when an organization intends to market new versions of a product at planned intervals. Typically, the capabilities of the final delivery are known at the beginning. However, as there is significant technical risk, the development of the capabilities is performed incrementally to allow for the latest technology insertion or potential changes in needs or requirements. A core part of the planning process for an incremental approach establishes the cycle times for increments. Increments are beneficially timed in development projects to accommodate coordinated events such as integration testing and evaluation, capability deployment, experimental deployment, or release to production. Iteration cycles are beneficially timed to minimize rework cost as a project learns experimentally and empirically. Project planning and management often benefit from a constant cadence among increments.

One example of an incremental approach is the Incremental Commitment Spiral Model (ICSM) (Boehm, et al., 2014), which extends the classic Spiral Model for software introduced in Boehm (1987) for SE. A view of the ICSM is shown in Figure 2.7. In the ICSM, each increment addresses requirements and solutions concurrently, rather than sequentially. ICSM also considers products and processes; hardware, software, and human aspects; and business case analyses of alternative product configurations or product line investments. The stakeholders consider the risks and risk mitigation plans and decide on a course of action. If the risks are acceptable and covered by risk mitigation plans, the project proceeds into the next spiral (increment).




FIGURE 2.7 The Incremental Commitment Spiral model (ICSm). From Boehm, et al. (2014) with permission from pearson Education. All other rights reserved.





ISO/IEC/IEEE 24748–2 (2018), Clause 6.4.3.2 provides further details on incremental life cycle models, including typical applicable systems as well as risks and opportunities associated with these models.




2.2.3 Evolutionary Methods


In the sequential and incremental approaches described previously, the full set of required capabilities of the final system is assumed to be mostly known at the start of the effort. In some cases, especially in novel systems, the final system requirements may be unknown or only partially known. An evolutionary approach provides the adaptability and flexibility needed for the development in these situations. For example, the high-temperature tiles of the NASA space shuttle were developed using an evolutionary approach (Forsberg, 1995). An evolutionary approach is often used in research and development (R&D) projects and SoS developments. Software development efforts are increasingly using agile methods, which are a type of evolutionary development.

In evolutionary approaches, cycles are typically planned on a regular periodic basis, each resulting in a deployable version. The requirements for the SoI are typically only partially known and are increasingly refined with each cycle. At the beginning, the goal of each cycle may be more or less unknown. Therefore, it is particularly important that the experience gained with the earlier cycles is taken into account for the subsequent cycles. Similar to the incremental approach, versions may be developed sequentially or in parallel. This is a particular challenge for those involved in the project, since new capabilities are typically assigned to exactly one version. If this assignment is lost or becomes unclear, this leads to confusion and negatively impacts the schedule and cost targets. Thus, a well-functioning configuration control is essential, also since multiple versions can be operated and supported simultaneously (see Section 2.3.4.5). Aspects to be considered include operating manuals, maintenance instructions, spare parts, disposal instructions, etc.

The evolutionary approach offers significant advantages if it is possible to obtain steady and high-quality feedback from relevant stakeholders. For example, the first versions can be used to demonstrate basic feasibility, such as a minimal viable product (MVP), and facilitate market entry. Likewise, emerging technical innovations can be planned for later versions.

When developing subsequent versions, it is recommended to carefully examine whether the previous versions should be completely replaced by newer ones. Alternatively, subsequent versions can be developed such that a partial or even complete upgrade of the previous versions to the new version is possible. For this, it is necessary that these things are considered during the early cycles. Criteria such as adaptability, flexibility, and modularity should be carefully considered to enable the long-term evolution of the system. Decisions should be made in the context of life cycle cost (see Section 3.1.2).

An example of an evolutionary approach is DevOps (a blend of the terms and concepts for “development” and “operations”). The goal of DevOps is to provide continuous integration of the system and continuous delivery of capabilities. DevOps is typically characterized by three key principles: shared ownership, workflow automation, and rapid feedback. DevSecOps (a blend of “development,” “security,” and “operations”), shown in Figure 2.8, integrates security practices into DevOps. In DevSecOps, each delivery team is responsible and empowered to pick appropriate security means.




FIGURE 2.8 DevSecOps INCOSE SEH original figure created by D'Souza derived from Banach (2019) and Anx (2021). Usage per the INCOSE Notices page. All other rights reserved.





ISO/IEC/IEEE 24748–2 (2018), Clause 6.4.3.4 provides further details on evolutionary life cycle models, including typical applicable systems as well as risks and opportunities associated with these models.

Figure 2.9 is an example of a mixed approach (both incremental and evolutionary). This figure shows the agile mixed-discipline approach employed by Rockwell Collins in the development of military radios (Dove, et al., 2017). Teams working on electronic-board hardware, firmware, and software have different timings for hardware increments and firmware and software epics (versions). The teams accomplish integrated work-in-process testing with the latest increments and versions from each of the disciplines.




FIGURE 2.9 Asynchronous iterations and increments across agile mixed discipline engineering. From Dove, et al. (2017). Used with permission. All other rights reserved.





All these life cycle approaches are supported by the processes defined in ISO/IEC/IEEE 15288 (2023) and this handbook. The life cycle model should be chosen so that it is sufficiently adaptable and flexible. Section 4.1 provides more information on tailoring life cycle models.