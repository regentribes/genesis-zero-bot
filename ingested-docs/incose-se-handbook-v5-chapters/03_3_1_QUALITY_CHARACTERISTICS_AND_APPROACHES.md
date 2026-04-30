QUALITY CHARACTERISTICS AND APPROACHES


3.1.1 Introduction to Quality Characteristics


ISO/IEC/IEEE 15288 (2023), Section 3.36 defines Quality Characteristic (QC) as: inherent characteristic of a product, process, or system related to a requirement. QCs are how the stakeholders will judge the quality of the system. Approaches exist that help ensure these characteristics are present in the SoI and its broader context or environment.

The objective of the following sections is to give enough information to a Systems Engineering (SE) practitioner to appreciate the significance of various QC approaches, even if they are not an expert in the subject. In previous editions of the handbook, the QC approaches were known as Specialty Engineering or the Engineering Specialties. These approaches are also known as Design for X (DFX) and Through-Life Considerations. The QCs are informally known as the -ilities since many, but not all, end in “ility” in the English language.

QC approaches, as used in this handbook, are life cycle perspectives that need to be considered to ensure the system is developed and its ecosystem cultivated so that QCs are present when the system is produced, utilized, supported, and ultimately retired. QC approaches often generate non-functional requirements. Some QC approaches, such as safety, security, and resilience may also generate functional requirements. These QC approaches are applied throughout the system’s life cycle, as notionally shown in Figure 3.1. Consideration beyond the engineered system, including the system, SoS, or enterprise that it is a part of, and its interoperating and enabling systems, is also necessary.




FIGURE 3.1 Quality characteristic approaches across the life cycle. INCOSE SEh original figure created by Taljaard, Kemp, and Walden. Usage per the INCOSE Notices page. All other rights reserved.





The QC approaches in this section are covered in alphabetical order by name to avoid giving more weight to one over another. Table 3.1 summarizes the QC approaches included in the handbook. Not every QC approach will be applicable to every system or every application domain. It is recommended that subject matter experts are consulted and assigned as appropriate to conduct QC approaches. More information about the QC approaches can be found in references to external sources.


TABLE 3.1 Quality Characteristic approaches



QC approach An approach that … Representative QCs

Affordability Analysis maximizes value, providing cost effective capability over the entire life cycle Affordability, Cost-Effectiveness, Life Cycle Cost (LCC), Value Robustness

Agility Engineering enables change in a timely and cost-effective manner Adaptability, Agility, Changeability, Evolvability, Extensibility, Flexibility, Modularity, Reconfigurability, Scalability

Human Systems Integration integrates technology, organizations, and people effectively Desirability, Ergonomics, Habitability, Human Factors, Human-Computer Interaction (HCI), Human-Machine Interface (HMI), Usability, User Interface (UI). User eXperience (UX)

Interoperability Analysis ensures the system interacts effectively with other systems Compatibility, Connectivity, Interoperability

Logistics Engineering enables support for the entire life cycle Supportability

Manufacturability/Producibility Analysis enables production in a responsible and cost effective manner Manufacturability, Producibility

Reliability, Availability, Maintainability Engineering enables the system to perform without failure, to be operational when needed, and to be retained in or restored to a required functional state Accessibility, Availability, Interchangeability, Maintainability, Reliability, Repairability, Testability

Resilience Engineering provides required capability when facing adversity Resilience, Robustness, Survivability

Sustainability Engineering supports the circular economy over its life Disposability, Environmental Impact, Sustainability

System Safety Engineering reduces the likelihood of harm to people, assets, and the wider environment Safety

System Security Engineering identifies, protects from, detects, responds to, and recovers from anomalous and disruptive events, including those in a cyber contested environment Cybersecurity, Information Assurance (IA), Physical Security, Trustworthiness

INCOSE SEH original table created by Walden and Yip. Usage per the INCOSE Notices page. All other rights reserved.





This handbook includes a set of QC approaches that are generally applicable in various applications and domains. However, the SE practitioner should ensure that any additional applicable QC approaches are also addressed.




3.1.2 Affordability Analysis


Definition


Affordability Analysis is an approach that maximizes value, providing cost-effective capability over the entire life cycle.

INCOSE has defined system affordability as follows:

Affordability is the balance of system performance, cost, and schedule constraints over the system life while satisfying mission needs in concert with strategic investment and organizational needs.





Key Concepts


As stated in Blanchard and Fabrycky (2011),

Many systems are planned, designed, produced, and operated with little initial concern for affordability and the total cost of the system over its intended lifecycle… The technical [aspects are] usually considered first, with the economic [aspects] deferred until later.

This section addresses economic and cost factors under the general topics of affordability and cost‐effectiveness. The concept of life cycle cost (LCC) is also discussed. Improving design methods for affordability is critical for all application domains (Bobinis, et al., 2013; Tuttle and Bobinis, 2013). Case 4 (Design for Maintainability-Incubators) from Section 6.4 provides an illustration of its importance.

A system is “affordable” if it can be developed to meet its requirements within cost and schedule constraints. The concept can seem straightforward. The difficulty arises when an attempt is made to specify and quantify the affordability of a system. This is significant when writing requirements or when comparing two solutions to conduct an affordability trade study. Affordability analysis is contextually sensitive, often leading to a misunderstanding and incompatible perspectives on what an “affordable system is.”

Key affordability concepts include:

Affordability context, system(s), and portfolios (of systems capabilities) need to be consistently defined and included in any understanding of what an affordable system is.

An affordability process/framework needs to be established and documented.

Accountability (system governance) for affordability needs to be assigned across the life cycle, which includes stakeholders from the various contextual domains.



Affordability costs include acquisition, operating, and support costs. It may be expanded to encompass additional elements required for the Life Cycle Cost (LCC) of a system, as an outcome of various contexts in which any system is embedded. In the SE domain, affordability as an attribute must be determined both inside the boundaries of the system of interest (SoI) and outside. The concept of affordability must encompass everything from a portfolio (e.g., family of automobiles) to an individual project (specific car model).

An affordability design model must be able to provide the ability to effectively manage and evolve systems over long life cycles. One of the major assumptions for measuring the affordability of competing systems is that given two systems, which produce similar output capabilities, it will be the nonfunctional attributes of those systems that differentiate system value to its stakeholders. As shown in Figure 3.2, the affordability model is concerned with operational attributes of systems that determine their value and effectiveness over time, typically expressed as the system’s quality characteristics as they are called in this handbook. These attributes are properties of the system as a whole and as such represent the salient features of the system and are measures of the ability of the system to deliver the capabilities it was designed for over time.




FIGURE 3.2 System operational effectiveness. From Bobinis et al. (2013). Used with permission. All other rights reserved.





Managing a system within an affordability trade space means that we are concerned with the actual performance of the fielded system, defined in one or more appropriate metrics, bounded by cost over time. The time dimension extends a specific “point analysis” (static) to a continuous life cycle perspective (dynamic). Quantifying a relationship between cost, performance, and time defines a functional space that can be graphed and analyzed mathematically. Then it becomes possible to examine how the output (e.g., performance, availability, capability) changes due to changes in the input (e.g., cost constraints, budget availability). This functional relationship between cost and outcome defines an affordability trade space to analyze the relationship between money spent and system performance and possibly determine the point of diminishing returns. This is illustrated in Figure 3.3. The capabilities and schedule have been fixed leaving either the cost or the performance to be the evaluation criteria, while the other becomes the constraint. This results in a relatively simple relationship between performance and cost. The maximum budget and the minimum performance are identified.




FIGURE 3.3 Cost versus performance. INCOSE SEh original figure created by Bobinis on behalf of the INCOSE Affordability Working Group. Usage per the INCOSE Notices page. All other rights reserved.





Below the maximum budget line in Figure 3.3 lie solutions that meet the definition of “conducting a project at a cost constrained by the maximum resources.” The solutions to the right of the minimum performance line satisfy the threshold requirement. Thus, in the shaded rectangle lie the solutions to be considered since they meet the minimum performance and are less than the maximum budget. On the curve lay the solutions that are the “best value,” in the sense that for a given cost the corresponding point on the curve is the maximum performance that can be achieved. In actuality, the curve is rarely smooth or continuous and multiple curves need to be considered simultaneously. Similarly, for a given performance, the corresponding point on the curve is the minimum cost for which that performance can be achieved. Selecting the decision criterion as cost will result in achieving the threshold performance. If the decision criterion is performance, all of the budget would be expended. Consequently, to specify affordability for a system or project requires determining which affordability element is the basis for the decision criteria and which elements are being specified as constraints.

Affordability is the result of a disciplined decision‐making process requiring systematic methodologies that support selection of the most affordable technologies and systems.





Elaboration


Cost-Effectiveness Analysis

Cost-effectiveness (CE) is a measure relating cost to system effectiveness. It is defined below with the achieved systems effectiveness as the numerator and cost as the denominator (Blanchard, 1967):



Where SE = System Effectiveness, IC = initial cost and SC = sustainment cost.

Reliability and maintainability are major factors in determining the cost effectiveness of a system since they impact sustainment costs.

System effectiveness is a term used in a broad context to reflect the technical characteristics of a system (e.g., performance, availability, supportability, dependability) such as examples mentioned in the preceding section. It may be expressed differently depending on the specific application. Sometimes a single-figure of merit is used to express system effectiveness and sometimes multiple figures-of-merit are employed (Blanchard and Fabrycky, 2011). The IC and SC can also be expressed in different ways depending on the application or system parameters under evaluation. It may include costs for concept, development, production, utilization, support, and retirement.

Cost-Effectiveness Analysis (CEA) is distinct from cost–benefit analysis (CBA). The approach to measuring costs is similar for both techniques, but in contrast to CEA where the results are measured in performance terms, CBA uses monetary measures of outcomes. This approach has the advantage of being able to compare the costs and benefits in monetary values for each alternative to see if the benefits exceed the costs. It also enables a comparison among projects with very different goals if both costs and benefits can be placed in monetary terms. Other closely related, but slightly different, formal techniques include cost–utility analysis, economic impact analysis, fiscal impact analysis, and social return on investment (SROI) analysis.

The concept of cost effectiveness is applied to the planning and management of many types of organized activity. It is widely used in many system aspects. Some examples are:

Studies of the desirable performance characteristics of commercial aircraft to increase an airline’s market share at lowest overall cost over its route structure (e.g., more passengers, better fuel consumption)

Urban studies of the most cost-effective improvements to a city’s transportation infrastructure (e.g., buses, trains, motorways, and mass transit routes and departure schedules)

In health services, where it may be inappropriate to monetize health effect (e.g., years of life, premature births averted, sight years gained)

In the acquisition of military hardware when competing designs are compared not only for purchase price but also for such factors as their operating radius, top speed, rate of fire, armor protection, and caliber and armor penetration of their guns





LCC Analysis

LCC refers to the total cost incurred by a system throughout its life. This “total” cost varies by circumstances, the stakeholders’ points of view, and the system. For example, when purchasing an automobile, the major cost factors are the cost of acquisition, operation, maintenance, and disposal (or trade-in value). A more expensive car (acquisition cost) may have lower LCC because of lower operation and maintenance costs. But the car manufacturer has other costs such as development and production costs, including setting up the production line, to be considered. The SE Practitioner needs to look at costs from several aspects and be aware of the stakeholders’ perspectives. LCC should not be equated to Total Cost of Ownership (TCO), Total Ownership Cost (TOC), or Whole Life Cost (WLC). These measures may only include costs once the system has been purchased or acquired.

LCC estimates are sometimes used to support internal project trade‐off decisions and need only be accurate enough to support the relative trade-offs. The analyst should always attempt to prepare as accurate cost estimates as possible and assign risk to them. These estimates should be reviewed by upper management and potential stakeholders. Future costs, while unknown, can be predicted based on assumptions and risk assigned. All assumptions when doing LCC analysis should be documented.

LCC analysis can be used in affordability and system cost-effectiveness assessments. The LCC is not the definitive cost proposal for a project since LCC “estimates” (based on future assumptions) are often prepared early in a project’s life cycle when there is insufficient detailed design information. Later, LCC estimates should be updated with actual costs from early project stages and will be more definitive and accurate due to hands-on experience with the system. A major purpose of LCC studies is to help identify cost drivers and areas in which emphasis can be placed during the subsequent life cycle stages to obtain the best decisions. Accuracy in the estimates will improve as the system evolves and the data used in the calculation is less uncertain.

LCC analysis helps the project team understand the total cost impact of a decision, compare between project alternatives, and support trade studies for decisions made throughout the system life cycle. LCC normally includes the following costs, represented in Figure 3.4:




FIGURE 3.4 Life cycle cost elements. INCOSE SEH original figure from INCOSE SEH v2 Figure 4-83. Usage per the INCOSE Notices page. All other rights reserved.





Concept costs—Costs for the initial concept development efforts. These could be estimated based on average staffing and schedule spans and may include overhead, general and administrative (G&A) costs, and fees, as necessary.

Development costs—Costs for the system development efforts. Similar to concept costs, these can be estimated based on average staffing and schedule spans and may include overhead, G&A costs, and fees, as necessary. Parametric cost models may also be used.

Production costs—Usually driven by tooling and material costs for large-volume systems. Labor cost estimates are prepared by estimating the cost of the first production unit and then applying learning curve formula to determine the reduced costs of subsequent production units.

Utilization and support costs—Typically based on future assumptions for ongoing operation and maintenance of the system, for example, fuel costs, personnel levels, and spare parts.

Retirement costs—The costs for removing the system from operation and includes an estimate of trade-in or salvage costs. Could be positive or negative and should be mindful of the environmental impacts to dispose.



For global products, other sources of cost may include compliance costs (government regulations, import/export requirements, etc.) or other incidental costs of international business.

Common methods/techniques for conducting LCC analysis that may be suitable for different situations and/or used in combinations follow:

Analogy—Reasoning by comparing the proposed project with one or more completed projects that are judged to be similar, with corrections added for known differences. May be acceptable for early estimations.

Bottom up—Identifies and estimates costs for each lower-level element separately and rolls them up for the total cost.

Delphi technique—A structured approach to build estimates iteratively from multiple domain experts. Surveys are used, and in each round feedback on the group statistics is provided for experts to help revise their estimates.

Design-to-Cost (DTC)—Using a predetermined cost (e.g., the SoI material cost) as a constraint on the design solution.

Expert judgment—Estimate performed by one or more experts using their experience and judgment. It can be used for comparison and sanity check against other methods.

Parametric (algorithmic)—Uses mathematical algorithms to compute cost estimates as a function of cost factors based on historical data. This technique is supported by public domain and commercial tools and models. Examples include the Constructive Systems Engineering Cost Model (COSYSMO) for SE effort and the Constructive Cost Model (COCOMO) for software engineering effort.

Parkinsonian technique—Work estimates based on the available resources or schedules (Parkinson’s Law states that work expands to fill the available volume).

Price to win—Focuses on providing an estimate, and associated solution, at or below the price judged necessary to win the contract.

Taxonomy method—Using a hierarchical structure or classification scheme as a basis of the estimates.

Top down—Developing costs based on overall project characteristics at the top level of the architecture.





3.1.3 Agility Engineering


Definition


Agility Engineering is an approach that enables change in a timely and cost-effective manner.





Key Concepts


Agility is the ability to thrive and survive in uncertain, unpredictable operational environments; and manifests as effective response to situations presented by the environment (Dove and LaBarge, 2014). Effective response has four metrics:

timely (fast enough to deliver value),

affordable (at a cost that can be repeated as often as necessary),

predictable (can be counted on to meet the need), and

comprehensive (anything and everything within mission boundary).



Agile systems-engineering and agile-systems engineering are two different things (Haberfellner and de Weck, 2005) that share the word agile. In the first case the SoI is an engineering process (e.g., using an agile SE process). This is addressed in Section 4.2.2. In the second case, the SoI is what is produced by an engineering process (e.g., engineering an agile system). This is the subject of this section. Sustained agility is enabled by an architectural pattern and a set of design principles that are fundamental and common to both agile SE processes and engineered agile systems.





Elaboration


Agility Architectural Framework

The architecture that enables agility will be recognized in a simple sense as a drag-and-drop plug-and-play loosely coupled modularity, with some critical aspects not often called to mind with the general thoughts of a modular architecture. The architectural objective is to enable rapid and effective composability of processes and systems from available resources, appropriate for the needs at hand (Dove and LaBarge, 2014). Construction toys, like Lego or Meccano sets, are iconic architectural examples.

There are three critical elements in the architecture: a roster of drag-and-drop encapsulated modules, a passive infrastructure of minimal but sufficient rules and standards that enable and constrain plug-and-play operation, and an active infrastructure that designates specific responsibilities that sustain agile operational capability:

Encapsulated modules—Modules are self-contained encapsulated units complete with well-defined interfaces that conform to the plug-and-play passive infrastructure. They can be dragged and dropped into a system of response capability with relationship to other modules determined by the passive infrastructure. Modules are encapsulated so that their interfaces conform to the passive infrastructure, but their methods of functionality are not dependent on the functional methods of other modules except as the passive infrastructure dictates.



Passive infrastructure—The passive infrastructure provides drag-and-drop connectivity between modules. Its value is in isolating the encapsulated modules so that unexpected side effects are minimized and new operational functionality is rapid. Selecting passive infrastructure elements is a critical balance between requisite variety and parsimony—just enough in standards and rules to facilitate module connectivity but not so much to overly constrain innovative system configurations.



Active infrastructure—An agile system is not something designed and deployed in a fixed event and then left alone. Agility is most active as new system configurations are assembled in response to new requirements—something which may happen very frequently, even daily in some cases. In order for new configurations to be enabled when needed, five responsibilities are required:



Module mix evolution—Who (or what process) is responsible for ensuring that new modules are added to the roster and existing modules are upgraded in time to satisfy response needs?

Module readiness—Who (or what process) is responsible for ensuring that sufficient modules are ready for deployment at unpredictable times?

Situational awareness—Who (or what process) is responsible for monitoring, evaluating, and anticipating the operational environment?

System assembly—Who (or what process) assembles new system configurations when new situations require something different in capability?

Infrastructure evolution—Who (or what process) is responsible for evolving the passive and active infrastructures as new rules and standards are anticipated and become appropriate?



Responsibilities for these five activities must be designated and embedded within the system to ensure that effective response capability is possible at unpredictable times



Agility Architectural Design Principles

Ten reusable, reconfigurable, scalable design principles are briefly itemized in this section:

Reusable principles are as follows:

Encapsulated modules—Modules are distinct, separable, loosely coupled, independent units cooperating toward a shared common purpose.

Facilitated interfacing (plug compatibility)—Modules share well-defined interaction and interface standards and are easily inserted or removed in system configurations.

Facilitated reuse—Modules are reusable and replicable, with supporting facilitation for finding and employing appropriate modules.



Reconfigurable principles are as follows:

Peer–peer interaction—Modules communicate directly on a peer-to-peer relationship; and parallel (rather than sequential) relationships are favored.

Distributed control and information—Modules are directed by objective (rather than method); decisions are made at point of maximum knowledge, and information is associated locally and accessible globally.

Deferred commitment—Requirements can change rapidly and continue to evolve. Work activity, response assembly, and response deployment that are deferred to the last responsible moment avoid costly wasted effort that may also preclude a subsequent effective response.

Self-organization—Module relationships are self-determined where possible, and module interaction is self-adjusting or self-negotiated.



Scalable principles are as follows:

Evolving infrastructure standards—Passive infrastructure standardizes intermodular communication and interaction, defines module compatibility, and is evolved by designated responsibility for maintaining current and emerging relevance.

Redundancy and diversity—Duplicate modules provide capacity right-sizing options and fail-soft tolerance, and diversity among similar modules employing different methods is exploitable.

Elastic capacity—Modules may be combined in responsive assemblies to increase or decrease functional capacity within the current architecture.





Agility Metrics

Agility measures are enabled and constrained principally by architecture—in both the process and the product of development:

Time to respond, measured in both the time to understand a response is necessary and the time to accomplish the response.

Cost to respond, measured in both the cost of accomplishing the response and the cost incurred elsewhere as a result of the response.

Predictability of response, measured before the fact in architectural preparedness for response and confirmed after the fact in repeatable accuracy of response time and cost estimates.

Scope of response, measured before the fact in architectural preparedness for comprehensive response capability within mission and confirmed after the fact in repeatable evidence of broad response accommodation.





3.1.4 Human Systems Integration


Definition


Human Systems Integration (HSI) is an approach that integrates technology, organizations, and people effectively.

HSI is an essential, transdisciplinary, sociotechnical, and management approach of SE used to ensure that the system’s technical, organizational, and human elements are appropriately addressed across the whole system life cycle, service, or enterprise system. HSI considers systems in their operational context together with the necessary interactions between and among their human and technological elements to make them work in harmony and cost effectively, from concept to retirement.





Key Concepts


Human

The “human” in HSI includes all individuals and groups interacting within the SoI. Within HSI, these are typically referred to as “stakeholders.” Stakeholders can include system acquirers, owners, users, operators, maintainers, trainers, support personnel, and the general public. While most people who interact within the SoI will be cooperative or have a vested interest in its performance, consideration may also need to be given to non-cooperative people or those with malign intent such as competitors, adversaries, criminals (physical and cyber), and those seeking to use the system outside of its design intent. Life, human, and social sciences have different representations of the human element and can all bring different perspectives to HSI activities.



Systems

HSI adopts a sociotechnical system perspective that considers a system as a representation of natural and artificial elements that are organizations of humans and machines (where machines include both hardware and software). Therefore, HSI considers that all systems include both humans and machines, and to optimize the system, all of these elements must be considered within SE activities.



Integration

HSI considers integration from two key viewpoints. The first is the effective integration of the human and technological elements in a system. The second is the efficient integration of the different perspectives of both human and machine elements within the system. An example of these different HSI perspectives can be seen in Figure 3.5. The specific perspectives relevant to a project will vary depending on the nature of the system and the organization’s activities.




FIGURE 3.5 HSI technology, organization, people within an environment. INCOSE SEH original figure created by Boy. Usage per the INCOSE Notices page. All other rights reserved.





All systems involve or affect people and exist within a wider sociotechnical and organizational context. Therefore, HSI is an essential enabler to SE practice. The sociotechnical approach provided by HSI supports analysis, design, and evaluation activities in holistically understanding and effectively integrating the technological, organizational (including processes), and human elements of a system. As shown in Figure 3.5, HSI emerges from the overlapping of three main circles: (1) technology, organization, and people (the TOP Model) within an environment at the heart; (2) HSI perspectives; and (3) contributing disciplines associated with the operational domain shown in the periphery. It is particularly important that systems are designed to meet human capabilities, limitations, and goals.





Elaboration


Purpose and Value of HSI

The purpose of HSI is to optimize total system performance and stakeholder satisfaction through the mutual integration of technology, organizations (including processes), people, and environment.

The benefits which can be realized by HSI vary from domain to domain, depending on their priorities and purpose (e.g., safety, cost, efficiency, performance, acceptability) and the nature of the system. They can be broken down into the following areas:

holistic optimization of system performance and efficiency: participatory design, and human-in-the-loop (HITL) activities

improved safety: hazard, risk, performance limitations and emergent properties analysis

reduced development costs: consider the TOP Model

reduced system LCC costs: HSI from the beginning of the SE life cycle

improved sales: resulting from product or service usability

user experience (UX) and desirability: focus on Human-Centered Design (HCD) and user needs

improved adoption of new systems by the workforce or user groups: considering sociotechnical factors

HSI value to a project: from intuition to expertise in HSI





Scope and Breadth of HSI

HSI is based on the convergence of four key communities of practice (third circle in Figure 3.5):

human factors and ergonomics (HF/E) that provides human-centered and organization-centered analysis, performance evaluation techniques, and metrics (Boehm-Davis, et al., 2015);

information technology (IT) that includes human-computer interaction, artificial intelligence, visualization techniques, and modeling and simulation;

systems engineering that includes socio-technical systems, systems of systems (see Section 4.3.6), agile development (see Section 4.2.2), design and system thinking (see Sections 3.2.7 and 1.5), and model-based SE (MBSE) (see Section 4.2.1); and

the operational domain that includes operational expertise and experience, scenario elicitation, and experimental test personnel (see Section 4.4).



These communities enable support of HSI through HCD as a major process that involves development and use of domain ontology, prototypes and digital modeling, scenario-based design, modeling and HITL activities (simulations and physical tests), formative evaluations, agile design and development, as well as human performance and organizational metrics (e.g., maturity and flexibility) (Boy, 2013) (Boy, 2020). HCD validation both requires certification approval and contributes to certification rules evolution.

HSI considers systems complexity analysis as a baseline. It seeks simplification (where possible) and familiarity with complex systems (where necessary). HITL activities enable discovery and elicitation of complex systems’ emergent behaviors, properties, functions, and structures, which are incrementally integrated into the SoI through its whole life cycle. HITL activities provide SE and HCD teams with improved understanding of the SoI early in the life cycle, contributing to design flexibility and better resource management. HSI is a foundational enabler for industrial endeavors, such as Industry 4.0, where digital engineering, enabling virtual HCD, requires increased physical and cognitive tangibility testing across the life cycle of a system (see Section 5.4). Case 5 (Artificial Intelligence in Systems Engineering - Autonomous Vehicles) from Section 6.5 illustrates the importance of all these aspects.

HSI can be considered as both an enabling process, associating HCD and SE during the life cycle of a system, and a product resulting from this process. HSI is the result of this HCD-based convergence, which requires optimizing the TOP Model. User eXperience (UX) and User Interface (UI) development are integral parts of the HSI process from the early stages and throughout the system life cycle. HSI processes are iterative and supported by two main types of assets, methods, and tools: expertise elicitation and creativity. The former enables effective elicitation from subject matter experts through knowledge and know-how, supporting design teams during system formative evaluations, agile development, and certification. The latter enables out-of-the-box projections that are validated using prototyping and HITL activities.



HSI Perspectives

HSI encompasses several important perspectives displayed in Figure 3.5 (second circle) and described in more detail in Table 3.2.


TABLE 3.2 HSI perspective descriptions



Human Factors Engineering is the scientific discipline concerned with the understanding of interactions among humans and other elements of a system, and the profession that applies theory, principles, data, and other methods to design in order to optimize human well-being and overall system performance.

Social, Cultural, and Organizational Factors consider the organizational aspects of socio-technical systems and includes the organizations who will be using and supporting the operational system, as well as the organizations who are involved throughout the entire life cycle of the system.

HSI Planning addresses the implementation of HSI through the SE process to ensure the human element is effectively integrated with the system. HSI strategies and priorities need to be set up-front, can be formalized in the HSI Plan, and potentially adjusted during the life cycle, upon mission definition, and carried throughout the allocation of resources and project personnel.

Integrated Logistics Support (ILS) & Maintenance covers human performance during the whole life cycle of a system based on an ILS plan supported by an HSI plan. ILS includes training, operations, maintenance, potential redesign, and dismantling.

Workforce Planning addresses the number and type of personnel and the various occupational specialties required and potentially available to develop, train, operate, maintain, and support the system.

Competences and Professionalism consider the type of knowledge, skills, experience levels, and aptitudes (cognitive, physical, and sensory) required to operate, maintain, and support a critical system and the means to provide such people (through selection, recruitment, training, etc.).

Training encompasses designing to account for ease and reduction of operation time needed to provide training through trade studies evaluated to assess their impact on training, as well as the instructions and resources required to provide personnel with requisite competence, knowledge, skills, and attitudes to properly operate, maintain, and support systems.

Safety promotes system characteristics and procedures to minimize the risk of accidents or mishaps that cause death or injury to operators, maintainers, support personnel, or others who could come into intentional or unintentional contact with the system; threaten systems operations; or cause cascading failures in other systems. It includes survivability.

Occupational Health promotes system design features and procedures that serve to minimize physiological mental and social health hazards which might result in injury, acute or chronic illness, and disability; and to enhance job performance and wellbeing of personnel who operate, maintain, or support the system.

Sustainability covers the environmental considerations that can affect operations and particularly human performance and considers wider ranging concerns and long-term goals of how the humans within the system can affect the environment, society, and economy without compromising future generations' needs.

Habitability involves characteristics of system living and working conditions.

Usability involves objective evaluation methods to address aspects such as efficiency, conformity to human expectations, tolerance/resistance toward human errors, and learnability to improve the degree to which humans can reach their objectives when interacting with a system.

Comfort and UX are personal internal human aspects such as joy, guilt, opinions, and unconscious aspects which are to be considered, not only in regard to the primary users of the final product, but in regard to all humans involved in the systems engineering process.

INCOSE SEH original table created by Boy. Usage per the INCOSE Notices page. All other rights reserved.





A wide variety of HSI methods, models, knowledge, and approaches can be used to support decisions made across the whole system life cycle. This can include support to requirements analysis, trade-studies, life cost benefit analysis, options or tender down select, risk management, safety case development, design decisions, acceptance testing, and workforce planning. Human-related trade studies are critical to determining holistic of operational concept (OpsCon) and thereby informing the design team in terms of effectivity, efficiency, suitability, usability, safety, and affordability. See the INCOSE HSI Primer (2023) for more detail.





3.1.5 Interoperability Analysis


Definition


Interoperability Analysis is an approach that ensures the system interacts effectively with other systems.

In the domains of data/information exchange and communications, there are four definitions of interoperability:

The capability of systems to communicate with one another and to exchange and use information including content, format, and semantics (NIST SP 500-230, 1996).

The ability of two or more systems or system elements to exchange data and use information (IEEE 610.12, 1990).

The ability of two or more systems to exchange information and to mutually use the information that is exchanged (US Army, 1997).

The condition achieved among communications-electronics systems or items of communications—electronics equipment when information or services can be exchanged directly and satisfactorily between them and/or their users (US DoD, 2021).





Key Concepts


Interoperability reflects the ability of a system to work in conjunction with other system(s) to achieve an outcome. For example, a mobile phone can operate on different networks across the world, agricultural implements from different companies can work on each other’s tractors, or a system provides an interface allowing remote control of its capabilities. Originally described in terms of computer/software systems, the concept of interoperability applies more widely, such as human interactions. A broad definition of interoperability also takes into account social, political, and organizational factors that impact system-to-system performance. Interoperability is a key enabler for a System of Systems (SoS), because it allows the elements of a large and complex system to work together as a single entity, toward a shared purpose (see Section 4.3.6).

Interoperability may be achieved in two principal ways, which can also be combined:

Agreeing on one or more published standards as the definition of the interface. This exposure of interfaces complying with open interfaces is increasingly common in the consumer product area where “plug and play” is expected.

Defining and implementing a custom interface. When a standard interface does not exist, or is not suitable, a custom interface can be defined as the agreed way in which two or more systems will connect, communicate, interact, or cooperate to achieve their shared purpose.





Elaboration


Interoperability will increase in importance as the world grows smaller due to expanding communications networks (e.g., the internet of things (IoT)), as nations continue to perceive the need to communicate seamlessly across international coalitions of commercial organizations or national defense forces, and as individuals increasingly expect that products and services will “work together.”

The Øresund Bridge (see Section 6.2) demonstrates the interoperability challenges faced when just two nations collaborate on a project. For example, the meshing of regulations on health and safety, interfacing a left-handed (Sweden) and right-handed (Denmark) railway, and the resolution of two power supply systems for the railway. Hence careful choices were necessary for the standards selected for the bridge itself, and for its interfaces at the Swedish and Danish ends.





3.1.6 Logistics Engineering


Definition


Logistics Engineering is an approach that enables support for the entire life cycle.





Key Concepts


Logistics engineering, which may also be referred to as product support engineering, is the engineering discipline concerned with the identification, acquisition, procurement, and provisioning of all support resources required to sustain operation and maintenance of a system (Blanchard and Fabrycky, 2011). Logistics engineering is also concerned with engineering the inherent supportability of the design. Logistics should be addressed from a life cycle perspective and be considered in all stages and especially as an inherent part of system concept and development. Furthermore, logistics should be approached from a system perspective to include all activities associated with design for supportability, the acquisition and procurement of the elements of support, the supply and distribution of required support material, and the maintenance and support of systems throughout their planned period of utilization.

The scope of logistics engineering is thus

to determine logistics support requirements,

to design the system for supportability,

to acquire or procure the support, and

to provide cost-effective logistics support for a system during utilization and support stages.



Logistics engineering has evolved into several related elements such as supply chain management (SCM) in the commercial sector and integrated logistics support (ILS) in the defense sector.





Elaboration


Support Elements

Support planning starts with the definition of the support (including maintenance) concept in the concept stage and continues through supportability analysis in the development stage, to the ultimate development of a support plan. The support concept describes the support environment in which the system will operate and which inherent supportability and support system elements are required for establishing the system operational capability.

The following elements of support are to be fully integrated with the system at the lowest possible LCC:

Product support integration and management—Plan and manage cost and performance across the product support value chain, from concept to retirement.

Design interface—Participate in the SE process to impact the design from inception throughout the life cycle. Facilitate supportability to maximize availability, effectiveness, and capability at the lowest LCC. Early application of the support concept drives the design inherent supportability objectives and trade-offs. It is an important mechanism for aligning design Reliability, Maintainability, and Supportability (RMS), maintenance planning, and establishment of support capabilities for the operational environment. It guides design modularity, reliability, maintainability, testability, and overall repair policies.

Sustained logistics engineering of the fielded system—This effort spans those technical tasks (engineering investigations and analyses) to ensure continued dependable operation, including maintenance, for the life cycle. It characterizes the system and support capabilities’ RMS performance as an input to dependable planning of operational use. It involves applying improved confidence level RMS characteristics data, gained from the operational experience, to enhance maintenance strategy and the support system, and to propose design RMS improvements.

Maintenance planning—Identifying the system maintenance requirements, determining the maintenance strategy, and implementing the maintenance capabilities required to deliver the system operational capability. The support concept guides overall repair policies, such as “repair vs. replace” criteria.

Operation and maintenance personnel—Identify, plan, and acquire personnel, with the training, experience, and skills required to operate, maintain, and support the system.

Training and training support—Establish and maintain the required operator and maintainer skill levels across the system life cycle. Identify, develop, and acquire Training Aids, Devices, Simulators, and Simulations (TADSS) to maximize the effectiveness of the personnel to operate and sustain the system equipment.

Supply support—determine requirements for supply, and acquire, catalog, receive, store, transfer, issue, and dispose of spares, repair parts, and supplies. This means having the right spares, repair parts, and all classes of supplies available, in the right quantities, at the right place, at the right time, at the right price.

Computer resources (hardware and software)—Computers, associated software, networks, and interfaces necessary to enable long-term logistics engineering, maintenance management, system technical and associated support operations data management, and storage.

Technical data, reports, and documentation—Represents recorded information of scientific or technical nature (e.g., equipment technical manuals, engineering drawings), engineering data, specifications, and standards.

Facilities and infrastructure—This includes facilities (e.g., buildings, warehouses, hangars, waterways, associated facilities equipment) and infrastructure (e.g., IT services, fuel, water, electrical service, machine shops, dry docks, test ranges).

Packaging, handling, storage, and transportation (PHS&T)—Ensure that all system equipment and support items are preserved, packaged, handled, and transported properly, including environmental considerations, equipment reservation for short and long storage, and transportability. Some items may require special environmentally controlled, shock-isolated containers for transport to and from storage, operational, and repair facilities via all modes of transportation (e.g., land, rail, sea, air, space).

Support equipment—All equipment (mobile and fixed) required to sustain the operation and maintenance of a system, including, but not limited to, handling and maintenance equipment, trucks, air conditioners, generators, tools, metrology and calibration equipment, and manual and automatic test equipment.





Supportability Analysis

As shown in the Figure 3.1, supportability analysis addresses all elements of design supportability and of the support system required during all life cycle stages:

Functional failure analysis—A Functional Breakdown Structure (FBS) is used as reference to perform functional FMECA (Failure Mode Effects and Criticality Analysis), FTA (Fault Tree Analysis) and/or RBD (Reliability Block Diagram) analysis. These analyses can be used to identify functional failure modes and to classify them according to criticality (e.g., severity of failure effects and probability of occurrence). The functional failure analysis can also provide valuable system design input (e.g., redundancy requirements). In describing functional failure compensation means, including compensation by support, the functional failure analysis provides early means of illustrating the system supportability interface and criticality of support.



Physical failure analysis—A Product Breakdown Structure (PBS) is used as reference to perform hardware FMECA, FTA, and/or RBD analysis with the objective of optimizing the design and to identify all maintenance tasks for potential failure modes. An objective of logistic engineering is to minimize operational maintenance tasks and resource requirements. The FMECA (in assessing the design inherent reliability, protection, and testability versus reliance on preventive or corrective maintenance) allows in context trade-offs of the operational value of improving the design versus defaulting to reliance on operational maintenance. The FMECA findings are used to balance the level of repair allocation. Failure probability, criticality, detection means, the design modularity, and the complexity of failure restoration need to be in balance with the level of repair capabilities framed by the system support concept.

Task identification and optimization—Corrective maintenance tasks are primarily identified using FMECA, while preventive maintenance tasks are identified using RCM (Reliability-Centered Maintenance). Trade-off studies may be required to achieve an optimized maintenance strategy. Associated support tasks, such as operational transportation, are identified from analysis of the operational concept and support workflows.

Detail task analysis—Detail procedures for support tasks should be developed, and support resources identified and allocated to each task. The system Level of Repair Analysis (LORA), in conjunction with the support concept, may be used to determine the most appropriate location for executing these tasks.

Support element specifications—Support element specifications should be developed for all support deliverables. Depending on the system, specifications may be required for training aids, facilities, support equipment, publications, and packaging material. Establishment of support elements, such as facilities, may involve extended lead times requiring identification of requirements and initiation of acquisition from as early as the system concept stage. The support element requirements analysis is therefore iterated from the system concept stage to highlight long-lead time support element acquisition requirements.

Support deliverables, test, and evaluation—All support deliverables should be acquired based on the individual specifications. The support deliverables should be tested and evaluated against support element specifications and the overall system requirements.

Support modeling and simulation—Modeling and simulation are integral parts of supportability analysis that should be initiated during the early stages to frame and develop a compliant and optimized system design, maintenance strategy, and support system. Modeling and simulation during acquisition are progressed to become decision and planning optimization tools for the operational and support stages. The predictive modeling information during acquisition is progressively matured as experience is gained with the operational system and operational support capabilities (e.g., digital twin for operation and support).

Recording and corrective action—Failure recording and corrective action during the utilization and support stages form the basis for continuous improvement. System operational value delivery metrics should be applied to continuously monitor the system to improve support where deficiencies are identified, and to highlight focus areas for operational enhancements to system inherent reliability, maintainability, and supportability.





3.1.7 Manufacturability/Producibility Analysis


Definition


Manufacturability/Producibility Analysis is an approach that enables production in a responsible and cost-effective manner.





Key Concepts


Production involves the repeated manufacture of the developed system. The capability to manufacture or produce a system or its elements is as essential as the ability to properly develop it. A system that cannot be effectively produced causes unnecessary costs and may lead to rework and project delays with associated cost overruns. For this reason, manufacturability/producibility analysis is an integral part of the SE process.

Producibility considerations differ depending upon the type and number of systems being produced. For example, the manufacture of satellites (limited production runs), military tanks (medium production runs), and mobile phones (high production runs) would be vastly different. A unique aspect of infrastructure systems is that production typically takes place on-site, rather than in a factory (see Section 4.4.5). Multiple production cycles require the consideration of production maintenance and downtime.

One objective is to determine if existing production enabling systems are satisfactory (see Section 1.3.3), since this could be the lowest risk and most cost-effective approach. If not, the requirements for the production enabling systems and processes need to be determined, and the production enabling systems developed so they are ready when needed. A SE approach to manufacturing and production is necessary because the production enabling systems can sometimes cost more than the system being produced (Maier and Rechtin, 2009).





Elaboration


Producibility analysis is a key task in developing cost-effective, quality products. Multidisciplinary teams work to simplify the design and stabilize the manufacturing process to reduce risks, manufacturing costs, lead times, and cycle times and to minimize strategic or critical material use. Producibility analysis draws upon the production and support life cycle concepts. Producibility requirements are identified in the Business or Mission Analysis and Stakeholder Needs and Requirements Definition processes (see Sections 2.3.5.1 and 2.3.5.2) and included in the project risk analysis, if necessary. Similarly, long-lead-time items, sole source items (where only one supplier for the required item is available), material limitations, special processes, and manufacturing constraints are evaluated. Design simplification also considers ready assembly and disassembly for ease of maintenance and preservation of material for recycling. When production requirements create a constraint on the system, they are communicated and documented. The selection of manufacturing methods and processes is included in early decisions. Manufacturing test considerations are captured and are taken into account in built-in test and automated test equipment.

IKEA® is often used as an example of supply chain excellence. IKEA has orchestrated a value creating chain that begins with motivating customers to perform the final stages of furniture assembly in exchange for lower prices and a fun shopping experience. They achieve this through designs that support low-cost production and transportability (e.g., the bookcase that comes in a flat package and goes home on the roof of a car).





3.1.8 Reliability, Availability, Maintainability Engineering


Definition


Reliability, Availability, Maintainability Engineering is an approach that enables the system to perform without failure, to be operational when needed, and to be retained in or restored to a required functional state.

RAM (sometimes expressed as RMA) is a well-known acronym for Reliability, Availability, and Maintainability. These QCs are completely interrelated with each other and have a strong relationship with logistics and supportability.





Key Concepts


From a SE perspective, RAM should not only be viewed as quality characteristics, but as nonfunctional requirements. RAM activities are often neglected during system development, resulting in a substantial increase in risk of project failure or stakeholder dissatisfaction. Since RAM often drives other system requirements, it is essential that these activities be selected, tailored, planned, and executed in an integrated manner with other SE processes. A practical way to achieve this is to develop detailed reliability and maintainability plans early in the system development process and to integrate these plans with the SE management plan (SEMP).

RAM, being important inputs to the system maintenance concept, support other SE processes in two ways. First, they should be used to influence both system and system support definitions (e.g., the system architecture depends on RAM requirements). Second, they should be used as part of system verification (e.g., system analysis or system test).

Depending on the particular industry, availability is often seen as the most important of these three quality characteristics, especially from the viewpoint of a user or acquirer. Any availability loss can usually easily be translated to mission or production loss and increased costs.





Elaboration


Reliability

The IEEE Reliability Society defines:

Reliability is a design engineering discipline which applies scientific knowledge to assure a product will perform its intended function for the required duration within a given environment. This includes designing in the ability to maintain, test, and support the product throughout its total life cycle. Reliability is best described as product performance over time. This is accomplished concurrently with other design disciplines by contributing to the selection of the system architecture, materials, processes, and system elements—both software and hardware; followed by verifying the selections made by thorough analysis and test.



“To be reliable, a system must be robust—it must avoid failure modes even in the presence of a broad range of conditions including harsh environments, changing operational demands, and internal deterioration” (Clausing and Frey, 2005). An in-depth understanding of the interaction between the system, the environment where it will be used, the operating conditions it will be subjected to, and potential failure modes and failure mechanisms is thus essential to design and manufacture reliable systems. Figure 3.6 shows the interaction between these aspects.




FIGURE 3.6 Interaction between system, environment, operating conditions, and failure modes and failure mechanisms. INCOSE SEh original figure created by Barnard. Usage per the INCOSE Notices page. All other rights reserved.





Reliability can be formally defined as “the ability of a system to perform as designed, without failure, in an operational environment, for a stated period of time” (Tortorella, 2015). Since “ability” is an abstract concept, many reliability metrics are available which can be used to measure and manage the reliability of a system during the development, utilization, and support stages (e.g., number of failures per time period, failure-free period, expected lifetime of non-repairable parts, Mean Time Between Failure [MTBF]).

O’Connor and Kleyner (2012) state the objectives of reliability engineering, in the order of priority, are:

To apply engineering knowledge and specialist techniques to prevent or to reduce the likelihood or frequency of failures.

To identify and correct the causes of failures that do occur, despite the efforts to prevent them.

To determine ways of coping with failures that do occur, if their causes have not been corrected.

To apply methods for estimating the likely reliability of new designs and for analyzing reliability data.



The priority emphasis is important, since proactive prevention of failure is always more cost-effective than reactive correction of failure. Timely execution of appropriate reliability engineering activities is of utmost importance in achieving the required system reliability.

Modern approaches to reliability place strong emphasis on the engineering processes required to prevent failure during the expected life of a system. The concept of “design for reliability” has recently shifted the focus from a reactive “test-analyze-fix” approach to a proactive approach of designing reliability into the system. This requires that design attention be given to the early identification of potential failure modes, with subsequent mitigation actions implemented during development (i.e., reliability objective 1). Understanding of “how” (i.e., failure modes) and “why” (i.e., failure mechanisms) a system can fail is key to the achievement of reliability. In practice, this proactive approach to reliability is always complemented by a reactive approach where observed failure modes are managed and corrected (i.e., reliability objectives 2 and 3). Finally, reliability prediction, test, and demonstration play an important role during development stages (i.e., reliability objective 4).

“Design for reliability” implies that reliability should receive adequate attention during requirements analysis. Reliability requirements may be specified either in qualitative or quantitative terms, depending on the specific industry. Care should be taken with quantitative requirements, since verification by test of reliability is often not practical (especially for high reliability requirements). Also, the misuse of some reliability metrics (e.g., MTBF) frequently results in “playing the numbers game” during system development, instead of focusing on the engineering effort necessary to achieve reliability (Barnard, 2008). For example, MTBF is often used as an indicator of “expected life” of an item, which is incorrect. It is therefore recommended that other reliability metrics be used for quantitative requirements (e.g., reliability (as success probability) at a specific time, or failure-free period).

Appropriate reliability engineering activities should be selected and tailored according to the objectives of the specific project. These activities should be captured in the reliability program plan. The plan should indicate which activities will be performed, the planned timing of the activities, the level of detail required for the activities, and the parties responsible for execution of the activities. ANSI/GEIA-STD-0009 Reliability Program Standard for Systems Design, Development, and Manufacturing which supports a system life cycle approach to reliability engineering, can be referenced for this purpose. This standard addresses not only hardware and software failures but also other common failure causes (e.g., manufacturing, operator error, operator maintenance, training, quality). “At the heart of the standard is a systematic ‘design-reliability-in’ process, which includes three elements:

Progressive understanding of system-level operational and environmental loads and the resulting loads and stresses that occur throughout the structure of the system.

Progressive identification of the resulting failure modes and mechanisms.

Aggressive mitigation of surfaced failure modes.”



ANSI/GEIA-STD-0009 (2008) consists of the following objectives:

Understand acquirer / user requirements and constraints.

Design and redesign for reliability.

Produce reliable systems / products.

Monitor and assess user reliability.



The reliability program plan is often used to capture a forward-looking view on how to achieve reliability objectives. Complementary to the reliability program plan is the reliability case which provides a retrospective (and documented) view on achieved objectives during the system life cycle.

“Failure mode avoidance” approaches attempt to improve reliability of a system primarily early during development stages. It is performed by evaluating system functions, technology maturity, system architecture, redundancy, design options, etc., in terms of potential failure modes. The most significant improvements in system reliability can be achieved by avoiding physical failure modes in the first place and not by minor improvements after the system has been conceived, designed, and produced.

Reliability engineering activities can be divided into two groups: engineering analyses and tests and failure analyses. These activities are supported by various reliability management activities (e.g., design procedures, design checklists, design reviews, electronic part derating guidelines, preferred parts lists, preferred supplier lists).

Engineering analyses and tests refer to traditional design analyses and test methods performed during system development. Included in this group are Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), vibration and shock analysis, load-strength analysis, thermal analysis and measurement, electrical and mechanical stress analysis, wear-out life prediction, Accelerated Life Testing (ALT), and Highly Accelerated Life Testing (HALT).

Failure analyses refer to traditional reliability engineering analyses to improve understanding of cause-and-effect relationships. Included in this group are Failure Mode and Effects Analysis (FMEA), Fault Tree Analysis (FTA), Reliability Block Diagram (RBD) analysis, systems modeling, Monte Carlo simulation, failure data analysis, root cause analysis, and reliability growth analysis.



Availability

As part of system effectiveness, availability requirements should be carefully derived from user needs and specified during system definition. These requirements play a key role in influencing a multitude of design decisions and availability should be monitored during the utilization and support stages. The simplest definition of availability is the ratio between uptime and total time of a system, usually expressed as a percentage. Since total time consists of uptime and downtime, availability is therefore dependent on the reliability (influencing uptime) and maintainability (influencing downtime) of the system. Furthermore, downtime is obviously highly dependent on the system support environment during the support stage (influencing delay times). Due to these direct relationships, availability is governed by reliability, maintainability, and various logistics engineering aspects. Since availability is a function of both reliability and maintainability (including logistics aspects), achievement of a required availability usually requires trade-offs between reliability and maintainability, and other requirements and constraints (e.g., performance, cost).

Availability can be formally defined as “the probability that a system, when used under stated conditions, will operate satisfactorily at any point in time as required” (Blanchard, 2004). It may be expressed and defined as inherent, achieved, or operational availability:

Inherent availability (Ai) is based only on the inherent reliability and maintainability of the system. It assumes an ideal support environment (e.g., readily available tools, spares, maintenance personnel) and excludes preventive maintenance, logistics delay time, and administrative delay time.

Achieved availability (Aa) is similar to inherent availability, except that preventive (i.e., scheduled) maintenance is included. It excludes logistics delay time and administrative delay time.

Operational availability (Ao) assumes an actual operational environment and therefore also includes logistics delay time and administrative delay time.



Inherent availability thus focusses primarily on “design for reliability and maintainability” activities. Achieved availability takes a broader view to include preventive maintenance, and operational availability includes possible logistics and administrative delays.

A service-level agreement (SLA) between a service provider and an acquirer typically includes availability performance, usually measured for a certain period (e.g., one year) and is then translated into the maximum duration of downtime allowed for that period.



Maintainability

An objective in SE is to design and develop a system that can be maintained effectively, safely, in the least amount of time, in a cost-effective manner, and with a minimum expenditure of support resources without adversely affecting the mission of that system. Maintainability refers to all measures and activities implemented during the design, production, and use of a system that reduces the required maintenance (as measured in maintenance frequency, repair hours, tools, cost, skills, and facilities). Maintainability is thus the ability of a system to be maintained, whereas maintenance constitutes a series of actions to be taken to restore or retain a system in an effective operational state. Maintainability must be inherent or “built into” the design, while maintenance is the result of design. Maintainability can formally be defined as “the ability of a system to be repaired and restored to service when maintenance is conducted by personnel using specified skill levels and prescribed procedures and resources” (Tortorella, 2015). Case 4 (Design for Maintainability-Incubators) from Section 6.4 illustrates the importance of maintainability.

Maintenance can be broken down into the following groups:

Corrective maintenance: unscheduled maintenance accomplished, as a result of failure, to restore a system to a specified level of performance.

Preventive maintenance: scheduled maintenance accomplished to retain a system at a specified level of performance by providing systematic inspection and servicing or preventing impending failures through periodic item replacements.

Predictive maintenance: scheduled maintenance based on the in-service condition of a system to estimate when maintenance should be performed.

System upgrades: periodic maintenance to support system life extension and performance upgrades.



A maintainability engineering plan is often used to capture activities such as quantitative maintainability modeling and simulation, development of the system maintenance concept, level of repair analysis (LORA), diagnostic capabilities, identification of preventive maintenance activities, etc. It is thus closely related to logistics engineering (see Section 3.1.6). The maintainability engineering plan should consider various aspects such as interchangeability of parts, accessibility to parts for removal, and testability of equipment. Testability includes aspects such as built-in test (BIT) capability, diagnostic test equipment, and support software. Service providers such as telecommunication operators that serve the mass market may use OTA (Over-the-Air) technology to remotely provide maintenance (e.g., data transfer to update software or firmware). Like reliability, maintainability requirements should be derived from system availability requirements.

Various maintainability metrics can be used to specify or measure maintainability. The most widely used metric, Mean Time to Repair (MTTR), measures the elapsed time to perform a certain maintenance activity. It typically includes time for activities such as failure detection/failure isolation (FD/FI), disassembly, active repair, reassembly, and finally system testing. It is important to note that MTTR refers to the mean time of the underlying probability distribution. Maintenance times tend to be lognormally distributed, especially for electronic systems without a built-in test capability and for many other electromechanical systems.



Relationship with Other Engineering Disciplines

As discussed in this section, RAM engineering is closely related to several other engineering disciplines. The primary objective of reliability engineering is prevention of failure. The primary objective of safety engineering is prevention and mitigation of harm under both normal and abnormal conditions (see Section 3.1.11). The primary objective of logistics engineering is the development of efficient logistics support (see Section 3.1.6). Furthermore, RAM is also related to engineering disciplines such as affordability (see Section 3.1.2), resilience engineering (see Section 3.1.9), and reusability of products in a product line (see Section 4.2.4). The life cycle cost (LCC) of a system is highly dependent on reliability and maintainability, which are considered major drivers in support resources and related in-service costs (see Section 3.1.2).

Many of these not only have “failure” as common theme, but they may also use similar activities, albeit from different viewpoints. For example, an FMEA may be applicable to reliability, safety, and logistics engineering. However, a reliability FMEA will be different to a safety or logistics FMEA, due to the different objectives. Common to all disciplines is the necessity of early implementation during the system life cycle.

More information on RAM can be found in ANSI/GEIA-STD-0009 (2008), Barnard (2008), Blanchard (2004), Clausing and Frey (2005), O’Connor and Kleyner (2012), and Tortorella (2015).





3.1.9 Resilience Engineering


Definition


Resilience Engineering is an approach that provides required capability when facing adversity.

Resilience is a relatively new term in SE, appearing in the 2006 timeframe and becoming popularized around 2010. Resilience typically subsumes survivability. The recent application of “resilience” to engineered systems has led to a proliferation of alternative definitions. While the details of definitions will continue to be discussed and debated, there is general agreement that resilience of engineered systems is the ability to provide required capability when facing adversity.





Key Concepts


System development often focuses on system capability under nominal conditions. Resilience directs the SE focus to the system’s ability to deliver capability when faced with adverse conditions. This perspective can be important to stakeholders but is sometimes overlooked. Resilience in the realm of SE involves identifying:

the capabilities that are required of the system,

the adverse conditions under which the system is required to deliver those capabilities, and

the architecture and design that will ensure the system can provide the required capabilities.



It is important to emphasize that resilience focuses on providing the required capability—not necessarily with maintaining the architecture or composition of the system. While system continuity is one approach to achieving resilience, so is adaptability.





Elaboration


Scope of Resilience

The fundamental objectives of resilience are avoiding, withstanding, and recovering from adversity. In non-engineering contexts, resilience is often limited to the ability to recover after degradation. In the context of engineered systems, it is recommended that “avoiding” and “withstanding” adversity be considered in scope (Jackson and Ferris, 2016). Resilience, as does SE, applies to cyber-physical, organizational, and conceptual systems.



Scope of the Adversity

For the purpose of resilience, adversity is anything that might degrade the capability provided by a system. Achieving resilience requires consideration of all sources (e.g., environmental sources, human sources, system failure) and types of adversity (e.g., from adversarial, friendly, or neutral parties; adversities that are malicious or accidental; adversities that are expected or not). Adversities may be issues, risks, or unknown-unknowns. Adversities may arise from inside or outside the system. Adversity may be a single event or may take the form of complex causal chain of conditions and events that stress the system over multiple periods of time.



Taxonomy of Resilience Objectives

Resilience, and engineering its achievement, can be facilitated by considering a taxonomy of its objectives. A two-layer objectives-based taxonomy includes:

First layer, the fundamental objectives of resilience and

Second layer, the means objectives of resilience.



The layers relate by many-to-many relationships (Brtis, 2016) (Jackson and Ferris, 2013).

Taxonomy Layer 1: Resilience can be said to equate to achieving its three fundamental objectives. These are:

Avoid: eliminate or reduce exposure to stress.

Withstand: resist capability degradation when stressed.

Recover: replenish lost capability after degradation.



Taxonomy Layer 2: These fundamental objectives can be achieved through the pursuit of means objectives. Means objectives are not values or ends in themselves. Their value resides in their ability to help achieve resilience and its three fundamental objectives. The means objectives include:

Adaptive Response: reacting appropriately and dynamically to the specific situation to limit consequences and avoid degradation of system capability.

Agility: ability of a system to adapt to deliver required capability in unpredictably evolving conditions.

Anticipation: establishing awareness of the nature of potential adversities, their likely consequences, and appropriate responses, prior to the adversity stressing the system.

Constrain: limit the propagation of damage within the system.

Continuity: ensuring the endurance of the delivery of required capability, while and after being stressed.

Disaggregation: dispersing missions, functions, or system elements across multiple systems or system elements.

Evolution: restructuring the system to address changes to the adversity or needs over time.

Graceful Degradation: ability of the system to transition to a state that has acceptable, potentially limited capabilities.

Integrity: the quality of being complete and unaltered (ISO 13008 (2022)).

Prepare: developing and maintaining courses of action that address predicted or anticipated adversity.

Prevent: deterring or precluding the realization of adversity.

Re-architect: modifying the system architecture for improved resilience.

Redeploy: restructuring resources to provide capabilities after stress.

Robustness: the ability of a structure to withstand adverse and unforeseen events or consequences of human errors without being damaged (damage insensitivity) (ISO 8930 (2021)).

Situational Awareness: perception of elements in the environment, and a comprehension of their meaning, and could include a projection of the future status of perceived elements and the risk associated with that status (ISO 17757 (2019)).

Tolerance: the ability of a material/structure to resist failure due to the presence of flaws for a specified period of unrepaired usage (damage tolerance) (ISO 21347 (2005)).

Transform: changing aspects of system behavior.

Understand: developing and maintaining useful representations of required system capabilities, how those capabilities are generated, the system environment, and the potential for degradation due to adversity.



The SEBOK section on resilience provides a more extensive taxonomy of design, architecture, and operational techniques for achieving resilience.



Key Activities, Methods, and Tools

While resilience must be considered throughout the SE life cycle, it is critical that resilience be considered in the early life cycle stages: those that lead to the development of resilience requirements. Once resilience requirements are established, they can, and should, be managed along with all other requirements in the trade space through the system life cycle. As shown in Table 3.3, Brtis and McEvilley (2019) identify specific considerations that need to be included in the early life cycle activities.


TABLE 3.3 Resilience considerations



Business or Mission Analysis Process

Defining the problem space includes identification of adversities and expectations for performance under those adversities.





ConOps, OpsCon, and solution classes consider the ability to avoid, withstand, and recover from the adversities





Evaluation of alterative solution classes consider the ability to deliver required capabilities under adversity





Stakeholder Needs and Requirements Definition Process

The stakeholder set includes persons who understand potential adversities and stakeholder resilience needs.





Identifying stakeholder needs identifies expectations for capability under adverse conditions, and degraded/alternate, but useful, modes of operation.





Operational concept scenarios include resilience scenarios.





Transforming stakeholder needs to stakeholder requirements includes stakeholder resilience requirements.





Analysis of stakeholder requirements includes resilience scenarios in the adverse operational environment.





System Requirements Definition Process

Resilience is considered in the identification of requirements.





Achieving resilience and other adversity-driven considerations is addressed holistically.





System Architecture Definition Process

Viewpoints selected support the representation of resilience.





Resilience requirements significantly limit and guide the range of acceptable architectures. It is critical that resilience requirements are mature when used for architecture selection.





Individuals developing candidate architectures are familiar with architectural techniques for achieving resilience.





Achieving resilience and other adversity-driven considerations are addressed holistically.





Design Definition Process

Individuals developing candidate designs are familiar with design techniques for achieving resilience.





Achieving resilience and the other adversity-driven considerations are addressed holistically.





Risk Management Process

Risk management is planned to handle risks and opportunities identified by resilience activities.





From Brtis and McEvilley (2019). Used with permission. All other rights reserved.





Content, Structure, and Development of Resilience Requirements

Brtis and McEvilley (2019) investigated the content and structure needed to specify resilience requirements. Resilience requirements often take the form of a resilience scenario. There can be many such scenario threads in the ConOps or OpsCon. The following information is often part of a resilience scenario:

Operational concept/scenario name

System or system element of interest

Capability(s) of interest their metric(s) and units

Target value(s) (required amount) of the capability(s)

System modes of operation during the scenario (e.g., operational, training, exercise, maintenance, update)

System states expected during the scenario

Adversity(s) being considered, their source, and type

Potential stresses on the system, their metrics, units, and values (Note: Stresses are a type of adversity. They are proximate forces or influences, directly affecting the system that can cause degradation of the system’s ability to deliver required capability.)

Resilience related scenario constraints (e.g., cost, schedule, policies, regulations)

Timeframe and sub-timeframes of interest

Resilience metric(s), units, determination method(s), and resilience metric target(s) (e.g., expected availability of required capability, maximum allowed degradation, maximum length of degradation, total delivered capability). Note: There may be multiple resilience targets (e.g., threshold, objective, As Resilient as Practicable (ARAP)).



Importantly, many of these parameters may vary over the timeframe of the scenario. Figure 3.7 notionally shows the required capability, the stress on the system, and the delivered capability as they vary as a function of time. A single resilience scenario may involve multiple stresses, which may be involved at multiple times throughout the scenario.




FIGURE 3.7 Timewise values of notional resilience scenario parameters. INCOSE SEH original figure created by Brtis and Cureton. Usage per the INCOSE Notices page. All other rights reserved.





Requirement Patterns for Resilience

An example of a natural language pattern for representing this information would be:

The<system, mode(t), state(t)>encountering<adversity(t), source, type>,which imposes<stress(t), metric, units, value(t)>thus affecting delivery of<capability(t), metric, units>during<scenario timeframe, start time, end time, units>and under<scenario constraints>,shall achieve<resilience target(t) (include excluded effects)>for<resilience metric, units, determination method>.

Here, “(t)” is used to indicate that the item may vary as a function of time.



System State Considerations

When a system encounters an adversity, the system may pass through a number of states, from a fully capable state to a state minimally acceptable to the system stakeholders. Intermediate states include damaged or partially capable states. The transitions between these states fall into three categories. The robustness category defines the transitions for which the system maintains its level of capability. These transitions include maintaining fully capable or partially capable states. The tolerance category includes passing from any higher level of capability to a lower level of capability (e.g., a degraded capability). The recovery category includes passing from any lower-level capability to a higher-level capability including the original fully capable state. The system should be designed applying design principles that will manage the transitions between states to result in context appropriate behavior. Guidance on techniques is provided in Jackson and Ferris (2013) and Brtis (2016).



Related Quality Characteristics

Resilience has commonality and synergy with a number of other QCs. Examples include availability, maintainability, reliability, safety, security, and sustainability. This group of quality areas are referred to as loss-driven areas because they all focus on potential losses involved in the development and use of systems (see Section 3.1.13). These areas frequently share: the assets considered, losses considered, adversities considered, requirements, and architectural, design, and process techniques. It is imperative that these areas work closely with one another and share information and decision-making in order to achieve a holistic approach that avoids unbalanced emphasis in any one area.

Further information and references on resilience (including the state-of-the-art) can be found in the resilience section of the SEBoK.





3.1.10 Sustainability Engineering


Definition


Sustainability Engineering is an approach that supports the circular economy over its life.





Key Concepts


Design for sustainability is defined as the process that considers environmental and social aspects as key elements in product design to reduce the harmful impacts of the product throughout its life cycle (Sharma, et al., 2020). It entails environmentally conscious decisions that promote responsible disposability via product recycling and materials reuse as options for the preservation of scarce material resources. Sustainability and disposability are critical components toward the circular economy, which is based on a production and consumption model that involves sharing, reusing, repairing, and recycling existing products and materials as much as possible, expanding the life cycle of products, minimizing waste and pollution, and creating a closed-loop system (Geissdoerfer, et al., 2020). These goals are consistent with the 17 Sustainable Development Goals that were adopted by all UN Member States in 2015, as part of the 2030 Agenda for Sustainable Development (Haskins, 2021).





Elaboration


Role of Sustainability and Disposability in SE

Addressing sustainability effectively in context is highly complex, requiring the integration of multiple disciplines in balancing a wide range of interdependent issues (Pearce, et al., 2012). Sustainability is essential given the significant impacts that the SE processes, and the resulting systems, have had, and continue to have, on the environment. Achieving sustainability must include a holistic adoption of environmental stewardship in engineering activities (Alwi, et al., 2014) (Rosen, 2012).

The focus of environmental impact analysis is on potential harmful effects of a proposed system’s development, production, utilization, support, and retirement stages. Concern extends over the full life cycle of the system, from the materials used and scrap waste from the production process, operation of the system, replacement parts, consumables and their packaging, to final disposal of the system.

Disposal analysis is a significant analysis area within environmental impact analysis. During System Architecture Definition and Design Definition (see Sections 2.3.5.4 and 2.3.5.5), one goal is to maximize the economic value of the residual system elements after useful life and minimize the amount of waste materials. Design for disassembly has become an important consideration in the design process so that the products are created in a way that minimizes destructive separation of system elements such that the material can be reused in future generations of products, remanufacturing, or recycling processes (Abuzied, et al., 2020). This may include designing for transformation (e.g., decomposition, biodegradation).



Key Activities, Tools, and Methods of Sustainability and Disposability

The ISO 14000 (2015) series of environmental management standards are an excellent resource for methods to analyze and assess industrial operations and their impacts on the environment. Attention to environmental regulations should be addressed in the earliest activities of requirements analysis. The Øresund Bridge (see Section 6.2.) is an example of how early analysis of potential environmental impacts ensures that measures are taken in concept, development, and production to protect the environment with positive results. Two key elements of the success of this initiative were the continual monitoring of the environmental status and the integration of environmental concerns into the requirements of the two countries.

Another effort in the ISO community is the development of a standard for Environmental Product Declarations (EPD), based on carbon footprints, as an indicator of the global environmental impact of a product expressed in carbon emission equivalents (He, et al., 2018). EPD and labeling, such as the Nordic Swan and Blue Angel, offer consumers assistance in their purchasing decisions. Methods associated with life cycle assessment (LCA), life cycle impact assessment (LCIA), life cycle optimization (LCO), and life cycle management (LCM) are increasingly sophisticated and supported by software (Avraamidou, et al., 2020).



Related QCs

Achieving a circular closed-loop system relies on integrating additional quality characteristics. Useful life extensions rely on reliability and maintainability (see Section 3.1.8) alongside efficient logistical support (see Section 3.1.6) and products designed to be resilient (see Section 3.1.9). Recovery of valuable resources after useful life is highly dependent on decisions made when considering manufacturability (see Section 3.1.7).

More information on Sustainability/Disposability can be found in the Journal of Cleaner Production (2023), the Journal of Environmental Management (2023), Wood et al. (2023), ICE (2023), and MDPI (2023).





3.1.11 System Safety Engineering


Definition


System safety engineering is an approach that reduces the likelihood of harm to people, assets, and the wider environment.





Key Concepts


The goal of system safety engineering is to reduce and mitigate hazards of systems to an acceptable level of risk. Engineered systems have safety risks; they are not 100% safe. The definition of what is acceptably safe, safety regulations, processes, and culture vary across different industries and countries.

System safety engineering is not limited to ensuring that the engineered system is acceptably safe. It includes minimizing the risks to everyone involved in the production, utilization, support, and retirement of the system, as well as third parties who could also be affected by these activities. System safety engineering is about engineering the SoI, the wider socio-technical operational system, and the socio-technical (or even purely social) management system.

Safety is an emergent property of the engineered system in its real operational environment. How the system is used, maintained, and managed can have as big an impact on system safety as its inherent design. Understanding, and aligning, the mental models of designers, operators, and managers is critical.

Safety is managed by minimizing the hazards that can lead to an accident. This is either through reducing the likelihood the hazard will occur or minimizing the impact if it does. This is either through designing the hazard out, technical mitigations in the system, or procedural controls. This requires a mixture of suitably qualified people, effective processes, appropriate governance, and culture.

In-service systems need careful monitoring to ensure that design assumptions remain valid, no new hazards have been identified, and that operations/maintenance is as expected. Slow feedback loops and misaligned mental models can be particularly problematic, as issues can grow unseen for years before they appear with catastrophic impact.

Good systems safety engineering seeks to ensure operators do not misuse systems, leaders set the right tone and culture, and maintainers don’t take shortcuts. System safety engineers and senior leaders are often accountable for predictable misuse of systems, failure to address poor behavior, and ineffective oversight of maintenance and operations.





Elaboration


Acceptably Safe

The safety regulations, processes, and culture vary across different industries and countries. What is acceptable in one industry and country may not be acceptable in another. There is a wide diversity in regulators, definitions, evidence, and perceived benefits that adds further complexity. Even the definition of what is “acceptably safe” varies. Typical perceptions of “acceptably safe” include:

“We have complied with the necessary [product] regulations.” This is generally accepted for simple, well understood, standardized system elements (e.g., electrical cable, bolts).

“We have evaluated all identified hazards and have mitigated each to be ‘as low as reasonably practicable’ (ALARP).” This would be the typical approach adopted for complicated, safety critical civilian systems (e.g., a railway signaling system, passenger aircraft).

“We have evaluated all the identified hazards of the system, and they are either ALARP, or the level of hazard of the new system is less than the alterative (of not having it).” This would be the typical approach adopted for military, medical, or emergency response systems (e.g., artillery, pacemaker).



Eliminating all safety risk is not possible; therefore, no system can be described as 100% safe. There may be unknown hazards and hazards that cannot be eliminated but are determined to be acceptable given the perceived benefit. Similarly, assuming that the system must be safe because there haven’t been any accidents yet, or reported, is equally incorrect. There may have been near misses (see below), the hazardous functionality/performance may not have been used, or the effect/damage has not yet been recognized.



Emergence, Accidents, and Hazards

Safety is an emergent property of a system. It is not the sum of system element level safety or reliability. Rather, it is impacted by interactions between system elements and affected by the environment in which it is used. Many factors affect the level of safety risk (e.g., who uses and maintains a system, how they do it, in what environment). Safety is not a static property as systems (and the surrounding ecosystems) are dynamic and evolve. The designers’ expectations of risks often differ from the system under test and evaluation and from the system in operation (which continues evolves over time). The mental models of the humans interacting with the system and the related processes are also dynamic and subject to change.

Most accidents result from more than a single causal factor. When an unmitigated hazardous situation does occur but does not result in harm, it is referred to as a near miss. Near misses serve as critical feedback on the system safety level in operation. Safety culture often determines how near misses are treated and responded to. However:

Accident investigations often reveal dependencies between hazards exist, despite earlier beliefs that causal factors were independent. A failure to recognize dependencies when applying statistical methods can result in flawed safety decisions.

A hazardous situation can occur without a system element failure. This could be because of a design error, an implementation error, or a misalignment between mental models of designer and operators or maintainers.



Regulators typically assess safety risk in terms of both:

the likelihood of hazards occurring and leading to harm and

the severity of the resulting harm.



Safety is managed by eliminating hazards where possible; and when not possible, by reducing risks to an acceptable level. When possible, design changes to eliminate potential hazards are the preferred options. The next preferred options are design mitigations to reduce the likelihood of hazards occurring. When designs changes or mitigations are not possible, other means are typically employed such as operational controls and limitations, maintenance inspections or activities, warnings via labeling, and training.

Hazards may result from a range of sources such as intrinsic, functional, socio-technical, or management/wider culture. Intrinsic hazards are typically caused by the material, or other design factors of the system elements used in the system. Functional hazards result from incorrect, unexpected, or undesirable functions or performance of the system. Socio-technical hazards result from interactions between the physical system and its operators and the wider environment. Finally, management/cultural hazards relate to the system and the wider management controls needed to realize and sustain the system.

Examples of safety hazards include:

Interactions between system elements, the operating environment, and operators: A car on an icy road and an inexperienced driver is likely to result in an accident. Traction control, trained drivers, or not driving in icy conditions mitigates this hazard.

Mistakes in system/system element requirements, design, manufacturing, or installation: A failure to specify the Maneuvering Characteristics Augmentation System (MCAS) system element as safety critical resulted in loss of two 737 Max aircraft (Cantwell, 2021).

The system creates hazards in the wider SoI: Bull-bars / kangaroo bars reduce the risk of injury to a driver in vehicle to vehicle or vehicle to large animal collisions. However, they significantly increase the risks to pedestrians in vehicle to pedestrian collisions in urban areas (Desapriya, et al., 2012).

The inherent material used in system elements: Asbestos or flammable substances present inherent hazards.

Incorrect operation or maintenance: A failure to properly remove old wiring led to the Clapham junction rail accident (Hidden, 1989).

Misaligned mental models between operators, maintainers, and designers: Prior to the Smiler accident, false alarms were a common occurrence. This led to operators believing all alarms were false positives. This resulted in alarms being overridden without investigation (Kemp and O’Neil, 2018).

The activities undertaken to design, manufacture, test and maintain the system: The Piper-Alpha oil platform accident was caused by a failure to properly manage design changes, poor maintenance management, and poor contingency planning (Cullen, 1990).





Managing and Controlling Hazards

System safety engineering seeks to control hazards by:

Understanding the system environment, wider SoI, proposed system, and how it will be used.

Specifying the safety requirements for the system. System requirements flow from stakeholder needs and requirements and are derived into system element requirements (see Section 2.3.5.3). Maintaining traceability is key, as it may not be immediately obvious to a system element designer that a specific requirement is safety critical (see Section 3.2.3).

Analyzing the potential safety hazards. There is a range of hazard analysis techniques looking at the system, and its functions, physical, process, and human interactions. An effective hazard analysis will use multiple techniques.

Mitigating/controlling the known hazards, either by reducing the likelihood or severity of a hazard occurring. Approaches include removing the hazard entirely, designing-in passive or active controls to mitigate the hazard, or including operational or maintenance controls. A key element of including controls is ensuring effective feedback loops and recognizing the full control model beyond the engineered system (including the operating environment and management systems) (Leveson, 2011).

Establishing a safety management system to ensure the system remains safe throughout its life cycle.





Establish an Appropriate Safety Management System

Each organization’s safety management system needs to be tailored based on country, region, and industry/application considerations. Organizations need to understand the regulatory, operational, and physical environments that the systems they develop will be used. For example, the safety management system needed for a safety critical industry such as rail or aerospace would be inappropriate for consumer electronics.

The safety management system needs to: define the organizations approach to developing safe systems; manage the infrastructure, processes and information required to support system delivery; oversee the operations and maintenance of in-service systems; and ensure an effective safety culture.

The safety management system needs to be fully integrated into the wider organizations’ business management systems. It needs to ensure that:

Projects to deliver new systems are given clear safety objectives, measures, and targets.

In-service systems are operated and maintained safely, with appropriate monitoring of changes to use, environment, and material state of the system.

Incidents and near misses are reported without fear of retribution, and on-going monitoring and implementation of mitigation actions create an ongoing learning/improvement cycle (Dekker, 2014).



A key facet of the safety management system is the organization’s safety and ethical culture, or “how we behave when no-one is looking” (see Section 5.1.4). Regular measurement of the safety is useful to track organization’s safety culture (Hudson, 2001). Regular, frequent communications and stories of the behavior needed are necessary by senior and influential people to reinforce the safety culture (Kemp and O’Neil, 2018).



Establish and Run Projects with Safety at Their Core

Key issues to be aware of include:

Ensuring that the tailoring of the SE approach is appropriate for the system under development.

Ensuring that the safety engineering processes integrated as tightly as possible to the wider engineering and business processes, driving both operational efficiencies and reducing the risk of incorrect assumptions between the safety team and the wider project.

Accepting the need to make assumptions, but recognizing that when the assumptions turn out to be incorrect and appropriate rework will be required (and accepting the cost and time impact of the rework).

Ensuring the selection of an appropriate life cycle model. As Akroyd-Wallis (2018) notes, direct adoption of Agile software techniques to safety critical systems may be problematic. SE Practitioners should exercise caution when employing agile for safety critical systems.

Terminating projects when they can no longer meet their safety objectives at a reasonable cost, timescales, or performance.





Embed Safety in the Core of the SE Process

Specific safety engineering considerations include:

Ensuring Business or Mission Analysis (see Section 2.3.5.1) includes a high-level assessment of hazards and that analysis of alternatives includes their inherent safety potential

Including a comprehensive hazard analysis during Stakeholder Needs and Requirements Definition (see Section 2.3.5.2) to identify potential hazards with the system being developed and the wider operational capability the SoI will be deployed into

Ensuring that key safety functions and safety performance is captured during System Architecture Definition (see Section 2.3.5.4). A safety viewpoint will help ensure traceability from high level needs down to system element requirements.

Where the system is to be part of a wider SoS, ensuring that system functions/performance necessary to mitigate SoS hazards are captured as safety requirements (see Section 4.3.6).

Ensuring that verification and validation of safety requirements is sufficiently rigorous to meet the agreed levels of “acceptably safe.”

Ensuring that hazards that are managed by Operational or Maintenance (see Sections 2.3.5.12 and 2.3.5.13) activities are clearly embedded in relevant processes and are clearly communicated, precisely defined, and reasonable.

Ensuring that the assumptions in the safety case remain valid through life. (Is the environment as expected? Have the operators (and their mental models) changed? Has the use of the system changed? Is maintenance being done as required and is the maintenance as effective as planned? Are there any new potential new hazards being seen? Is the frequency and severity of hazards as expected?)





Ensure the System Is Delivered Safely

System safety engineering needs to ensure that systems can be designed, built, and verified safely. The systems that manufacture, test, and maintain complicated and complex systems can be as hazardous as the SoI itself. The traditional split between product safety and occupational safety is becoming less clear as:

Development becomes more agile.

Organizations shift from product to service delivery.

Increased use of non-expert operators and maintainers.





Suitably Qualified and Experienced Personnel Drive Safety Performance

The effectiveness of safety management system is driven by the people who work within it. Good people may build safe systems despite poor processes and tools. Good processes and tools cannot make up for poorly qualified people.

Effective safety practitioners need to be numerate, critical thinkers, and system thinkers who understand the technologies being used, the environment the system will be deployed into, and the mental models of operators and maintainers. In addition, they need the influencing and persuasion skills to convince others of the right approach to take and the moral courage to “say no” when necessary (see Section 5.1.2).

Safety practitioners need to be in the room when key decisions are made. They need to lead the safety decision making, capturing key information in an audit trail. If they are involved too late, organizations can be left with systems that cannot be deployed. This happened to the UK Air Force when acquiring eight Chinook Mk3 helicopters (NAO, 2008).

For more illustrations on the importance of system safety, refer to Case 1 (Radiation Therapy - The Therac-25) from Section 6.1 and Case 5 (Artificial Intelligence in Systems Engineering – Autonomous Vehicles) from Section 6.5.





3.1.12 System Security Engineering


Definition


System Security Engineering is an approach that identifies, protects from, detects, responds to, and recovers from anomalous and disruptive events, including those in a cyber contested environment.





Key Concepts


System Security Engineering (SSE) is focused on ensuring a system can function under anomalous and disruptive events associated with misuse and malicious behavior. SSE involves a disciplined application of SE principles in analyzing security threats and vulnerabilities to the system and assessing and mitigating security risks to assets of the system during the life cycle. It blends technology, management principles and practices, and operational rules to ensure sufficient protections are available at all times.

Sources of potential anomalous and disruptive events (threats) are many and varied. They may emanate from external sources (e.g., theft, denial of service attacks, power interruptions) or may be caused by internal forces (e.g., user actions, supporting systems). A disruption may be unintentional (misuse) or intentional (malicious) in nature

Physical security protects a system from unauthorized access, misuse, or damage caused by physical actions and events such as theft, vandalism, and intrusion. Protecting physical facilities, equipment, resources, and personnel can involve the use of multiple layers of interdependent systems such as surveillance and intrusion detection systems, deterrent systems, security guards, protective barriers, locks, and access control. Hardware devices can employ anti-tampering features to detect unauthorized opening or altering of the packaging, either to ensure the content is authentic or to trigger actions to protect sensitive information in the devices.

As our world becomes increasingly digital, both hardware and software systems are increasingly at risk for disruption or damage caused by threats taking advantage of digital technologies. Integrating and implementing systems security using SSE approaches is the most efficient and effective way to ensure that security is addressed at each stage of the life cycle and becomes part of the overall SE solution instead of being done separately and isolated from other SE activities (NIST SP 800-160 Vol. 1, 2022 and NIST 800-160 Vol. 2, 2021). SSE provides the needed complementary engineering capability that extends the notion of trustworthiness to deliver trustworthy secure systems, which are less susceptible to the effects of modern adversity such as attacks orchestrated by an intelligent adversary (NIST SP 800-160 Vol. 1, 2022).

Cybersecurity generally refers to the confidentiality, integrity, and availability of information assets. Security management includes controls (e.g., policies, practices, procedures, organization structures, and software). Trustworthiness is a concept that includes privacy, reliability, resilience, safety, and security, therefore worthy of being trusted to fulfill whatever critical requirements may be needed for a particular system element, system, network, application, mission, business function, enterprise, or other entity (NIST 800-160 Vol. 2, 2021).





Elaboration


SSE practitioners should have skills, expertise, and experience in multiple areas. Examples include security requirements, security architecture views, threat assessment, networking, security technologies, hardware and software security, security test and evaluation, vulnerability assessment, penetration testing, and supply chain security risk assessment. A major challenge in managing engineering projects is unclear security roles, responsibilities, and accountability. To assist in the security role development and understanding responsibilities, an SE/SSE roles and responsibilities framework can be used to break down tasks into a matrix format that enables the SE practitioner to understand the role contributions and identify the types of artifacts created by the execution of the SE life cycle processes. (Nejib, et al., 2017)

Through NIST 800–160 Vol. 1 (2022) and Vol. 2 (2021), it has been determined that the best way to integrate cybersecurity into systems is through an SE process. NIST 800–160 Vol. 1 (2022) and Vol. 2 (2021) are based on ISO/IEC/IEEE 15288 (2023) and this handbook. They use the same terminology so that both SE and SSE practitioners can understand the key relationship that exists between the two disciplines. There is a direct correlation between SE and SSE, and SE practitioners need to understand and incorporate security components into each SE life cycle process. Table 3.4 shows an example of how the SSE technical processes in NIST SP 800–160 Vol. 1 (2022) can be reused and referenced by SE, SSE, and other disciplines practitioners. Specifically, Table 3.4 is an example of the Implementation process (see Section 2.3.5.7) breakout defined with extensions for SSE to include the purpose, outcomes, activities and tasks, inputs, and responsible and supporting roles. This same format was used to breakout each of the technical SSE processes in NIST 800–160 Vol. 1 Rev. 1 (2022) and the SE Technical Processes (see Section 2.3.5) to build an understanding of the relationships between the SE and SSE processes.


TABLE 3.4 Implementation process breakout



Implementation Process Breakout

Purpose Realize the security aspects of the system element

Results in a system element that satisfies specified system security requirements, architecture, and design





Outcomes Security aspects of the implementation strategy are developed

Security aspects of implementation that constrain the requirements, architecture, or design are identified

Security system element

System elements securely packaged and stored

Enabling systems or services needed for security aspects of implementation

Traceability of security aspects of implemented system elements





Activities and Tasks Prepare for the security aspects of implementation

Perform the security aspects of implementation

Manage results of the security aspects of implementation





Inputs Security strategy, plan, traceability, requirements, design, architecture, secure system elements, assurance evidence, assurance results, and anomalies report

Responsible and Supporting Roles Responsible: Systems Security Engineer (SSE)

Supporting: Program Manager (PM), Chief Engineer (CE), Systems Engineer (SE), Systems Architect (SA), and Test Engineer (TE)



From NIST 800–160 Vol. 1 (2022). Used with permission. All other rights reserved.





Case Study 3, Cybersecurity Considerations in Systems Engineering-The Stuxnet Attack on a Cyber Physical System (see Section 6.3) provides an example of the importance of system security.





3.1.13 Loss-Driven Systems Engineering


Loss-Driven Systems Engineering (LDSE) is the value adding unification of the QCs that address the potential losses associated with developing and using systems (Brtis, 2020). SE methodologies often focus on the delivery of desired capability. As a result, SE methodologies are largely capability-driven, and may not provide integrated attention to the potential losses associated with developing and using systems. Loss and loss-driven QCs are often considered in isolation—if at all. Examples of loss-driven QCs include resilience, safety, security, sustainability/disposability, and availability.

There is significant commonality and synergy among the loss-driven QCs, which needs to be leveraged. To do this, work on the loss-driven QCs should be collaborative on:

the adversities considered,

the weakness, defects, flaws, exposures, hazards, and vulnerabilities considered,

the assets and losses considered, and

the coping mechanism considered.



Further, SE practitioners should:

elicit, analyze, and capture loss-driven requirements as an integrated part of the overall stakeholder and system requirements development,

make architectural and design decisions holistically across the loss-driven QC areas, and

integrate the management of risks associated with all loss-driven areas into the project’s risk management activities.