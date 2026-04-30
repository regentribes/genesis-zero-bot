SYSTEMS ENGINEERING ANALYSES AND METHODS


Part II of this handbook provided a set of SE life cycle processes used across the system life cycle. Each process contains a set of process activities and elaborations in the context of that specific life cycle process. This section provides insight into topics, techniques, and methods that cut across the SE life cycle processes, reflecting various aspects of the concurrent, iterative, and recursive nature of SE.





3.2.1 Modeling, Analysis, and Simulation


Overview and Purpose


The INCOSE Systems Engineering Vision 2035 (2022) predicts that “The future of systems engineering is model-based, leveraging next generation modeling, simulation, and visualization environments powered by the global digital transformation, to specify, analyze, design, and verify systems. High fidelity models, advanced visualization, and highly integrated, multidisciplinary simulations will allow SE Practitioners to evaluate and assess an order of magnitude more alternative designs more quickly and thoroughly than can be done on a single design today.”

The essential artifact of modeling, analysis, and simulation (MA&S) is an explicit model, an idealized representation of one or more aspects of the as-is or to-be SoI. Systems Modeling and Simulation has been defined (NAFEMS and INCOSE, 2019) as the use of interdisciplinary functional, architectural, and behavioral models (with physical, mathematical, and logical representations) for all life stages.

The terms “modeling,” “analysis,” and “simulation” are sometimes used interchangeably. However, they clearly refer to distinct activities. Modeling is the conception, creation, and refinement of models. Analysis is the process of systematic, reproducible examination to gain insight. Simulation is the process of using a model to predict and study the behavior or performance of the SoI—for aspects represented in the model. Simulation is often performed to support a particular kind of analysis, but not all analysis is performed through simulation. In the classification of models presented below, two major types of models are distinguished: physical models, and digital models. The SE discipline primarily makes use of digital models, since they provide many benefits to the SE processes in a timely and affordable manner, in particular during the early life cycle stages. Other engineering disciplines make use of both physical and digital models throughout the product life cycle. Although sometimes the term “simulation” is used in conjunction with a physical model, in this section simulation always involves a digital model, and any examination involving a physical model is always a test.

For effective MA&S, digital models are often parameterized to enable analysis or simulation of multiple configurations or situations with one model. Each configuration is typically defined by grouping selected parameter values in an experiment, see also Minsky (1965). Alternatively, the terms “analysis case,” “load case,” or “verification case” are used, depending on the application domain or convention. An experiment specifies the purpose of the analysis or simulation as well as the combination of target scenario, environment, initial and boundary conditions, and any other user-defined parameters. Figure 3.8 shows a typical workflow.




FIGURE 3.8 Schematic view of a generic MA&S process. INCOSE SEh original figure created by the NAFEMS-INCOSE Systems Modeling and Simulation Working Group (SMSWG)). Usage per the INCOSE Notices page. All other rights reserved.





MA&S links directly to the Core Competency “Systems Modeling and Analysis” in the INCOSE SE Competency Framework (INCOSE SECF, 2018). MA&S supports all Technical, Management and Integrating Competencies. Appropriate MA&S practices can clearly support SE professionals (individuals and teams) to perform better SE, more efficiently.





MA&S Related to Life Cycle Processes


Creation and refinement of descriptive models in the Business or Mission Analysis process (see Section 2.3.5.1) and the Stakeholder Needs and Requirements Definition process (see Section 2.3.5.2) can be used to ensure that the business or mission proposition is understood correctly, the problem is understood correctly, is specified at the appropriate level of detail, and is fully shared with the stakeholders. MA&S can be used in the System Requirements Definition process (see Section 2.3.5.3) to flow-down the system requirements to system elements. This may include models that specify functional, interface, performance, and physical requirements, as well as other nonfunctional requirements (e.g., reliability, maintainability, safety, and security). In addition to bounding the system design parameters, MA&S can also be used to validate that the system requirements reflect stakeholder needs and requirements before proceeding with subsequent life cycle processes.

MA&S can be used in the System Architecture Definition process (see Section 2.3.5.4) concurrently with the Design Definition process (see Section 2.3.5.5) to synthesize and define alternative system concepts, compare and evaluate candidate options, and enable discovery of the best architecture and design, including the integration with other systems and unambiguously defining the system’s capabilities and the value it is expected to deliver to its stakeholders (e.g., in the form of MOEs and MOPs). MA&S is often used extensively to realize an iterative model-based or model-driven design workflow. In many application domains, it is much more cost—and schedule-effective to perform analysis and simulation with digital models than to prototype with physical models. Digital models also allow for full and continuous access to all model parameters and properties, which is often infeasible with physical models. MA&S lends itself to fast iterations between problem specification, architectural design, detailed design, and V&V, as well as between system elements at different levels of decomposition. Using MA&S in the System Analysis process (Section 2.3.5.6), related system analyses can be used to explore a trade space by modeling alternative system solutions, or even generate many candidate solutions, and assessing the impact of critical properties such as mass, speed, energy consumption, accuracy, reliability, and cost on the overall adequacy and performance.

MA&S can be used in the Implementation process (see Section 2.3.5.7) to support definition, understanding and prediction of behavior for various aspects of the enabling production (manufacturing) and supply chain processes for the envisaged SoI. Models that reflect the “as produced” state of the SoI can be used to develop production facilities (factory) and “digital twins.” MA&S can be used in the Integration process (see Section 2.3.5.8) to support integration of the elements into a system, as well as in the Verification process (see Section 2.3.5.9) to support verification that the system satisfies its requirements. This often involves integrating lower-level hardware and software design models with system-level design models, thereby allowing verification that the system requirements are satisfied. Systems integration and verification may also include replacing selected hardware and design models with actual hardware and software products to incrementally verify that system requirements are satisfied: so-called hardware-in-the-loop and software-in-the-loop testing. In cases where testing is impossible or carries prohibitive cost, verification of the SoI can be done by analysis or simulation using high fidelity digital models. Models can be used to simulate relevant operational environments where actual environments are unattainable, too costly, or not reproducible. Simulation can use observed data as inputs for computation of critical parameters that are not directly observable.

In the Operation process (see Section 2.3.5.12), MA&S can support definition, understanding, and prediction of behavior for various aspects of the envisaged or actual operation of the SoI, to help train (future) users to interact with the system, and to develop training material. Models may form a basis for developing a simulator of the system with varying degrees of fidelity to represent user interaction in different usage scenarios. Models and simulators can also be used to perform dry runs to prepare for complex or risky operations with the real, deployed system. In the Maintenance process (see Section 2.3.5.13), models that reflect the “as maintained” state of deployed systems can be used to develop “digital twins,” possibly for individual deployed systems. Such models can be connected to data acquisition in the field and provide valuable insight and support for health monitoring and preventive maintenance. They can also be used to plan system upgrades and evolutions. MA&S in the Disposal process (see Section 2.3.5.14) can be used to predict and monitor system disposal. MA&S also enables model-based iterations between the development processes mentioned above, as depicted in Figure 3.9.




FIGURE 3.9 System development with early, iterative V&V and integration, via modeling, analysis, and simulation. Derived from NAFEMS and INCOSE (2019), based on NDIA, et al. (2011). Used with permission. All other rights reserved.





Cross-Cutting MA&S


There are several cross-cutting uses of MA&S that are not tied to a particular life cycle process, including:

Characterizing an existing system—Existing systems may be poorly documented (in whole or in part). Modeling such a system can provide a concise way to capture its architecture and design. This model can then be used to facilitate maintenance of the system or its further evolution.

Knowledge transfer within teams—MA&S enables the creation and maintenance of more precise, elaborate, and consistent specifications, including the rationale behind many requirements or design choices. Capturing specifications in rich models helps to mitigate the risk of loss of knowledge in case of team changes in long-duration projects.

Automated mapping and transformation—Digital models can be transformed by declarative or procedural algorithms (i.e., automated generation of a new or modified digital model from an existing one). Model transformations are a very powerful means to increase the value of model-based engineering (e.g., convert model formulations from one modeling language to another, move from a systems architecture to a (partial) software architecture, package a model for use outside the owning organization by encapsulating and protecting its intellectual property, creation of a surrogate model from a much more detailed discipline-specific engineering model). The value of transformation increases even more when it can be made bi-directional.

Knowledge capture and system design evolution—MA&S can be an effective means for capturing knowledge about a system as part of the Knowledge Management process (see Section 2.3.3.6). Established modeling can help transform tacit into explicit organizational knowledge. MA&S in projects enables identification and capture of reusable patterns or modules from problem and solution models that have proven their worth. Catalogs of such reusable model patterns and modules can become important assets for organizational knowledge management.





Benefits


MA&S have many advantages including:

Separation of representation and presentation—Models capture representations of an SoI. MA&S tooling can then be used to maintain an “authoritative source of truth” and produce many different presentations, or views, of the model(s) that are correct-by-construction and enable effective communication with all engineering and non-engineering actors (humans and machines). The model-based approach can thus overcome the main problem of the document-centric approach in which representation and presentation are often combined in single information containers, which leads to a lot of information duplication and therefore cumbersome maintenance and potential errors. This is one of the most important advantages of the model-centric over the traditional document-centric approach.

More explicit SE—SE Practitioners can use MA&S to systematically check their own thinking, assumptions, and decision making with quantitative analyses. They can capture rationales and decisions in an accessible, traceable, consistent way.

Better problem specification—The stakeholder needs and requirements can be refined and formalized as an integral and structured set of goals, assumptions, requirements, constraints, actors, typical usage scenarios, and critical capabilities, with full traceability between all model elements. Anticipated system behaviors and performances can be explored and vetted with the stakeholders before proceeding with the development of an actual solution and committing significant resources.

Rigorous, well-documented design—MA&S facilitates development of solutions in a more rigorous and consistent way which leads to higher quality specifications. Systematic design space exploration and structured trade-studies become possible. Interfaces can be defined rigorously. Simulation with digital models enables design experimentation and optimization that is impossible, not affordable, or not on time with physical models. Technical and business decision-making can also be integrated into the model repositories for future consultation.

Early V&V to reduce risk—Early validation and verification of solutions with respect to the problem specification can be performed. This enables stakeholders to be informed of the implications of their preferences, provides perspective for evaluating alternatives, and builds confidence in the solution as it develops. Systematic, regular checking of interfaces and actual interconnections is feasible. It also allows catching issues early in the life cycle, when mitigation is affordable and change of scope is still feasible. The ability to detect limitations and incompatibilities early in a project helps avoid cost and schedule overruns in later life cycle stages.

Multi-user collaboration—Use of modern MA&S tooling allows for multi-user and multi-discipline collaboration with integrated configuration and version control, including splitting work into distinct parallel branches and merging results back into a main branch, using well-established workflows. Once deployed, this workflow is much more sophisticated and effective than what could be achieved with a document-centric approach.

Better change impact assessment—Modeled specifications with traceability (see Section 3.2.3) and MA&S tooling allow for change impact assessments by highlighting the consequences of a considered change.

Improved mastering of complexity—The value of MA&S increases with the complexity of the SoI, be it functional or physical. MA&S is a means to master greater complexity by structuring, refining, evaluating, and sharing all information within integrated project teams. On-demand multiple views with dynamic filtering to a suitable level of detail are possible. Quick views to share and capture information for effective communication with other actors, such as non-engineering disciplines and stakeholders, become more feasible and affordable.

Better team planning and handover—Development, deployment, and operational staff can more easily comprehend the design specifications, appreciate imposed limits from technology and management, and ensure an adequate degree of sustainability. Adequate, accurate, and timely MA&S helps an organization and its suppliers to plan and put in place the necessary and sufficient personnel, methods, tools, and infrastructure for system realization.

Enable efficient maintenance and traceability—Digital models (supported with appropriate tools) enable bookkeeping of SE artifacts as they evolve through the life cycle stages in a reliable, consistent, traceable, and timely manner, while also providing hyperlinked navigation.

Flexible and repeatable querying—A rigorous MA&S approach enables gaining insight into many different aspects by querying the models with pertinent questions (what-if, impact of change, etc.) and getting answers efficiently, in support of decision making. Queries can generate many different views from the modeled information that address concerns of selected stakeholders. Query formulations can also be persisted for reuse.





Classifying and Characterizing Models


There are many different kinds of models to address different system aspects and different kinds of systems. Generally, a specific type of model focuses on some subset of the system characteristics, such as timing, process behavior, measures of performance, interfaces, and connections. It is useful to classify the types of models to assist in selecting the appropriate one. Figure 3.10 shows one possible (non-exhaustive) taxonomy as an example.




FIGURE 3.10 Illustrative model taxonomy (non-exhaustive). INCOSE SEH original figure created by the NAFEMS-INCOSE Systems Modeling and Simulation Working Group (SMSWG) derived from Friedenthal. Usage per the INCOSE Notices page. All other rights reserved.





Physical model—A physical model represents (aspects of) a system with real parts. Examples are a physical mockup, a scaled model airplane, a wind tunnel model, and a 3D-printed scale model from a digital model specification (the latter could be considered a physical view of a digital model). If simulation is performed with a physical model, it is typically called a test.

Digital model—Digital models can have many different expressions to represent (e.g., a system, entity, phenomenon, or process), each of which may vary in degrees of formalism. Therefore, the next level of classification is between informal and formal models.

Formal models—A formal model is expressed in a machine-readable language with explicitly defined semantics. The language may be textual and/or graphical, but with only one way of interpretation. Formal models can be further classified as logical, quantitative (i.e., mathematical), geometric, or surrogate models. A logical model, also referred to as a descriptive model or a conceptual model, represents logical relationships about the system such as whole–part relationships, interconnection relationships between elements, or precedence relationships between activities, to name a few. Logical models are often depicted using network graphs (with nodes and edges) or tables. A quantitative model represents quantitative relationships (e.g., mathematical equations) about the system or its elements that yield numerical results. A geometric model represents the geometry, geometric shapes, and spatial relationships of the system or any of its (physical) elements. A surrogate model is a reduced model that is derived from a higher fidelity, more detailed model using a data-driven, typically automated, transformation. The goal (and challenge) is to create a surrogate that adequately represents essential aspects of the modeled system while requiring substantially less computational resources. Surrogate models then enable running large numbers of (parameterized) experiments in order to facilitate design exploration, optimization, or validation.

Informal models—An informal model is expressed using some convention understood by humans, where the convention is defined casually without formal semantics. The model does not need to be machine-readable. An informal model can be created by hand or with simple tools (e.g., word-processing, spreadsheet, diagramming, mind-mapping). While such informal representations can be useful, they often lack the rigor to be considered a type of model that is truly usable for MA&S for non-trivial systems. Informal model presentations may be used as views that are generated from or ingested into formal models in order to communicate with people not familiar with the notation.

Mixed models—A mixed model is a combination of physical and digital models.

In addition to a selected type of model, any model can be further characterized for its intended purpose through the following three characteristics:

The model breadth reflects what aspects of the SoI—and possibly its (actual or intended) environment(s)—are represented, and to what extent.

The model granularity characterizes the amount of visible detail captured in the model, in terms of the represented depth of system decomposition as well as the represented level of details of individual system elements.

The model fidelity indicates how accurately the model represents the real-world system. Where applicable, this includes the computational precision to be achieved and the discretization scheme to be used.



The type of model and the model characteristics must be balanced against project needs and resources. Another important aspect of modeling is to explicitly state the assumptions and limitations that almost inevitably apply to any model.





Model Interoperability


Since the development of complex systems requires collaboration between all project members and disciplines, it is very important to have the ability to exchange and share models as well as analysis and simulation results across disciplines, projects, organizations, and life cycle stages. This is also referred to as digital interchange. In most projects and (extended) enterprises it is not possible to standardize on a single set of tools. The alternative is to develop and utilize open, tool-independent standards that enable information exchange and sharing. There is an increasing awareness and consensus between user communities and tool developers on the merit of international royalty-free standards. Standards can be categorized in terms of how MA&S is supported. The main categories are:

Standardized data exchange file,

Application programming interface (API),

Modeling language, and

Process.



Data exchange files are used for on-demand transfer of complete models or results. APIs usually support more fine-grained data access and sharing, often implementing a service-oriented software architecture. Modeling languages can be graphical, textual or both, and are used to standardize the way of expressing a model. Process standards specify (aspects of) the MA&S processes. Most modeling languages do not prescribe a particular methodology to be followed. This flexibility is a feature of a general-purpose modeling language that enables economies of scale for implementations which are in the interest of the SE community as a whole. However, in order to align how SE practitioners in a team, organization, or application domain approach MA&S, a methodology is needed. A methodology provides guidance and examples on how to organize MA&S over a typical system life cycle, how to structure model artifacts, as well as what stages and milestones to respect. A methodology can also capture proven modeling patterns and checklists, as well as good practices in general. For further details se Section 4.2.1 or consult the OMG MBSE Wiki (2023).





Tools


For physical models, the tools are generally the same as those used for production of the final SoI, plus general or dedicated test facilities. For digital models, the tools are typically MA&S software applications running on general-purpose digital computers. For some computationally intensive applications, HPC (High Performance Computing) facilities may be needed. A MA&S software application may consist of one integrated tool or a set of tools that each implement part of the needed capabilities. The typical features of such tools are a graphical user interface with a hierarchical model structure browser, palettes of model constructs, a graphical and/or textual editor for creation and modification of the model, and multiple views for visualization, reporting, diagnostics, etc. The tool typically checks on-the-fly for adherence to the supported modeling formalism or language. If analysis or simulation support is included, there are also model execution views. For further details consult INCOSE SETDB (2021) or NAFEMS (2021).





Modeling Quality and Metrics


The quality of a model should not be confused with the quality of the design that the model represents. A perfect model can represent a bad design. On the other hand, a low-quality model can in principle represent a good design, although that is not very useful.

A completed model or simulation can be considered a system or a product in its own right. Therefore, the general steps in the development and application of a model are closely aligned to the SE processes described within this handbook. MA&S needs to be planned and tracked, just like any other developmental effort. An essential good practice is to define clearly the purpose and intended life cycle of any (type of) model upfront. In particular, verification and validation of the MA&S methods, procedures, and infra-structure themselves are essential to ensure that the resulting models, analyses, and simulations possess the required quality and credibility that make them “fit for purpose” in an application domain or project. The required rigor of the approach depends on the criticality of the SoI. As an example, the US DoD Modeling and Simulation Enterprise has developed comprehensive guidance on Verification, Validation and Accreditation (VV&A, 2021).

A valuable feature of digital models is that they are amenable to many other kinds of computation than pure analysis or simulation. This enables the assertion of many modeling metrics such as:

compliance with design or certification rules, including naming conventions, and associated model quality requirements,

structural consistency of the system architecture,

compliance of system element interconnections with interface specifications,

coverage, consistency, and completeness of traceability, such as requirements satisfaction and verification, as well as function allocation,

consistency and completeness of logical to physical architecture mapping and allocation,

statistics that assist in monitoring and establishing specification maturity, uncertainty quantification, and resource planning,





MA&S Industrial Practice


A big driver for the adoption of MA&S via all engineering disciplines is the trend that complex systems are becoming more and more software intensive. Analysis and simulation using digital models is much more economical and scalable than prototyping and testing with physical models, especially in the earlier stages of the life cycle. In the later stages, a mixed approach is often used. An example of the latter is an incremental hardware-in-the-loop approach in performing dynamic simulations. When it can be justified, verification through a purely digital model may be used.

Since a major responsibility of SE is to regard the system as a whole and coordinate between all disciplines in a multidisciplinary team, it follows that SE MA&S must interoperate at some level with the modeling and simulation of each of the other engineering disciplines in a team. As shown in Figure 3.11, the trend is to use an integrated system model to ensure information consistency between all engineering disciplines through a hub-and-spokes pattern, where a system model repository forms the hub.




FIGURE 3.11 Model-based integration across multiple disciplines using a hub-and-spokes pattern. Derived from NAFEMS and INCOSE (2019). Used with permission. All other rights reserved.





A different way to look at multidisciplinary MA&S coordination is shown in the life cycle view presented in Figure 3.12. The information needed by two or more disciplines in a project team is shared via the integrated system model repository, which acts as the “authoritative source of truth.” Within a project, there is then one authoritative repository. The one authoritative repository is a logical concept that may be implemented as a federation of distributed physical repositories. The figure schematically depicts several examples of synchronizations, milestones, and baselines (in a real project there will of course be many more). In addition, MA&S data management supporting versioning, branching, merging, and archiving needs to be implemented for each of the threads, as well as across all organizations in an extended enterprise.




FIGURE 3.12 Multidisciplinary MA&S coordination along the life cycle. INCOSE SEH original table created by the NAFEMSINCOSE Systems Modeling and Simulation Working Group (SMSWG). Usage per the INCOSE Notice pages. All other rights reserved.





When different organizations collaborate in an extended enterprise, the need may arise to protect intellectual property, which naturally includes the know-how captured in models. To enable such collaboration, often so-called black box (also known as opaque box) models are created and maintained, which hide or obfuscate intellectual property, while still providing a publicly accessible external interface for using them to perform simulations. In contrast, white box (also known as transparent box) models provide full visibility of their internals.





3.2.2 Prototyping


Prototyping is a technique that can significantly enhance the likelihood of providing a system that will meet the stakeholder’s needs. In addition, a prototype can facilitate both the awareness and understanding of stakeholder needs and requirements. The original use of a prototype was as the first-of-a-kind product from which all others were replicated. However, prototypes are not “the first draft” of production entities. Prototypes are intended to enhance learning and should be set aside when this purpose is achieved. Once the prototype is functioning, changes will often be made to improve performance or reduce production costs. Thus, the production entity may exhibit different behavior. Two types of prototyping are commonly used: rapid and traditional.

Rapid prototyping is an easy and one of the fastest ways to get system performance data and evaluate alternate concepts (Noorani, 2008). A rapid prototype is a particular type of physical model or simulation quickly assembled from a menu of existing physical, graphical, or mathematical elements. Examples include tools such as laser lithography or computer simulation shells. 3-D printing, or additive manufacturing, has significantly enhanced the physical elements that can be prototyped (Gebhardt and Hotte, 2016). Rapid prototypes are frequently used to investigate form and fit, human–system interface, operations, or producibility considerations. They are widely used and are particularly useful; but except in rare cases, they are not traditional “prototypes.”

Traditional prototyping is a tool that can reduce risk or uncertainty and has two primary variants. A partial prototype is used to verify critical elements of the system. A full prototype is a complete representation of the system. They must be complete and accurate in the aspects of concern. Objective and quantitative data on performance times and error rates can be obtained from higher‐fidelity interactive prototypes. SE practitioners are in a much better position to evaluate modifications that will be needed to develop the system because of the existence of a traditional prototype.




3.2.3 Traceability


Traceability for products and systems is defined as “the ability to trace the history, application, or location of an object/entity/item” (ISO 9000, 2015). From an SE perspective, traceability is establishing an association or relationship between two or more objects/entities/items such as life cycle concepts, needs, requirements, architectural definition artifacts (e.g., systems, system elements), design definition artifacts, verification artifacts, validation artifacts, information, models, and acquired or supplied systems or system elements.

Bidirectional traceability is the ability to trace an object/entity/item to another object/entity/item while automatically establishing a reverse link back to the initial object/entity/item. Thus, once a given object/entity/item has been linked to its source/destination, the source/destination is automatically linked to that object/entity/item. Bidirectional traceability is facilitated by SE tools which support the establishment of two-way links (bidirectional traceability) between objects/entities/items.

Vertical traceability is most often referred to in context of organization levels or architectural levels of the system or product under development. From a hierarchical architecture view (see Section 1.3.5), there are various system levels. The SoI level (Level n) has lower-level systems elements (Level n+1), some of which are further decomposed into lower-level system elements (Levels n+2, n+3, etc.) until the elements are defined to the level at which they can be made, bought, or reused. Entities at each level have objects/entities/items defined at various levels of abstraction. As the objects/entities/items are refined level-by-level, bidirectional traceability is established. Many times, these vertical traceability relations are referred to as “parent” and “child” relationships, depending upon the perspective (parent being the relationship to the higher level, child being the relationship to the lower level).

Horizontal traceability involves traceability across the elements of a given level of the architectural or system structure and across the life cycle. From a hierarchical architecture view, as relationships between objects/entities/items at the same level (i.e., Level n) are identified, bidirectional traceability is established. Many times, these horizontal traceability relations are referred to as “peer” relationships. Horizontal traceability also links objects/entities/items generated in one life cycle stage or process to data, information, and artifacts generated in other life cycle stage or process, resulting in connecting these objects/entities/items across the life cycle. For example, from a life cycle stage perspective, concept objects/entities/items are traced to development; which are traced to production; which are traced to utilization and support; which are ultimately traced to retirement. From a life cycle process perspective, a stakeholder requirement can be traced to its system requirements; which can be traced to architecture and design artifacts; which can be traced to the realized product; which can be traced to the system verification and system validation artifacts.

Establishing traceability is a critical activity of the Technical Processes (see Section 2.3.5), especially Business or Mission Analysis; Stakeholder Needs and Requirements Definition; System Requirements Definition; System Architecture Definition; Design Definition; System Analysis; Verification; and Validation. Traceability is facilitated through the appropriate application of the Configuration Management (CM) process (see Section 2.3.4.5). The CM Identification activity enables the SE practitioner to “connect the dots” and understand the identity, location, relationships, pedigree, origin of data, materials and parts of the objects/entities/items. CM also enables the traceability of the history and location of the product after delivery. The management of products/systems, their system elements, and their configuration information requires unique identification so traceability of these items can be accurately determined. For traceability purposes the product/system identifier consists of a unique identifier which, once issued to a specific project/product/system, should never be reused.

Traceability is also a crucial component of the digital thread, enabling the connection between uniquely identified configurations of digital system models, digital twins, and physical assets (see Section 5.4). In an MBSE environment (see Section 4.2.1), the underlying system model enables a stakeholder requirement to be traced through the functional representations, to the physical product, thus enabling the identification of specific physical elements (and their specific configurations) that are impacted by a change in a given requirement. Vice versa, traceability enables the identification of the requirements that will need to be assessed when a given physical element is modified (e.g., due to a change of supplier or manufacturing process). Digitally enabled traceability methods help ensure the stakeholders get what they asked for. Digitally enabled traceability also supports the transparency of information.

More information on traceability can be found in INCOSE GtNR (2022) and the INCOSE NRM (2022).




3.2.4 Interface Management


The purpose of Interface Management is to facilitate and manage the identification, definition, design, and management of interfaces of the system across the system life cycle. It manages interface boundaries and interactions across those boundaries, the definition and agreement for each interaction, and interface requirements for all interactions identified by the various Technical Processes. Interface Management cuts across the Agreement, Technical Management, and Technical Processes. Because of its importance, the project team should focus on Interface Management as a distinct activity across all life cycle process activities.

Given that the behavior of a system is a function of the interaction of its elements and the interaction of the SoI and external systems, it is critical for the project team to identify and define each of the interactions between all system elements that make up the integrated system as well as interactions of the integrated system with external systems and users. Failing to do so will result in costly and time-consuming rework during system integration, system verification, and system validation. Because of the criticality of interfaces, the project team must define how they will manage interfaces in their project planning (e.g., SEMP). For more complex systems, projects often develop a separate Interface Management Plan. It is often useful to have the interfaces managed using an Interface Control Working Group. Additional elaboration concerning interface identification, interface definition, interface requirements, risk assessment, and managing interfaces across the life cycle is included in the INCOSE NRM (2022).

When interface management is applied as a distinct objective and focus of the SE processes, it will help highlight underlying critical issues much earlier in the project than would otherwise be revealed that could impact the project’s budget, schedule, and system performance. Identifying interface boundaries and interactions across those boundaries early in the life cycle facilitates definition of the SoI’s boundaries and clarifies the dependencies the SoI has on other systems and dependencies other systems have on the SoI (see Sections 1.3.1 and 1.3.3). Identifying interface boundaries and interactions across those boundaries also helps ensure compatibility between the SoI and those external systems in which it interacts. Of particular importance is the Human Machine Interface (HMI), as ultimately it is the interaction between users, operators, and maintainers that will result in acceptance of the SoI for its intended use by its intended users (see Section 3.1.4). Failure to identify all interface boundaries and interactions across those boundaries is a significant risk to the project, especially during system integration, system verification, system validation, operations, and maintenance. Because of this, it is extremely important the project defines life cycle concepts for how it will make sure the system will work safely and securely with all the external systems and personnel with which it must interact in the intended operational environment when operated by its intended users and is protected from outside threats across those interfaces.

A key characteristic of today’s increasingly complex, software-intensive systems is the number of internal interactions within systems and between a system and external systems. The increased number of interactions relates directly to the complexity of a system. It greatly increases the complexity of integration of the system elements that are part of the SoI, and integration of the realized SoI within the system it is part of. It also increases the complexity of assessing the behavior of the integrated system when operated as part of a larger system. Another key characteristic of modern software-intensive systems is the form of the interactions. In the past, when many of the systems were mostly mechanical/electrical, the interactions were more visible involving connectors, wires, pipes, mechanical parts, bolts, etc. In software-intensive systems, there can be multiple computer modules, each with software that communicates commands, messages, and data across one or more communication busses. For example, in modern automobiles there can be more than 150 computer modules connected to each other and multiple sensors and actuators.





Interface Management Related to Life Cycle Processes


Major interface boundaries between the SoI and external systems are identified during preliminary life cycle concept definition activities within the Business or Mission Analysis process (see Section 2.3.5.1). Through the application of the Stakeholder Needs and Requirements Definition process (see Section 2.3.5.2) the life cycle concepts are further elaborated, interface boundaries between external systems are further refined to include all interface boundaries, and interactions across each of those boundaries are identified. Risks associated with each interface boundary and associated interactions are assessed as part of the Risk Management process (see Section 2.3.4.4). Using the System Requirements Definition process (see Section 2.3.5.3), the interactions are further refined and the characteristics of what is involved in each interaction are defined. Using this information, interface requirements are defined.

As the system architecture and system elements are defined, the System Architecture Definition process (see Section 2.3.5.4) concurrently with the System Requirements Definition process identify and define interface requirements for external systems, including enabling systems, which are also allocated to the applicable system elements. Internal interface boundaries and interactions across those boundaries are identified, and interface requirements defined for each of the interactions across the interface boundaries internal to the SoI (i.e., between system elements). The focus is on defining and agreeing on the characteristics of what is involved in the interactions, not on how those interactions are realized. The interface identification, definition, and requirements continue to evolve as the system requirements, architecture, design, and models evolve. These definitions are recorded in some form of interface control artifacts (e.g., Interface Control Document (ICD)) that are put under configuration control. For each interaction across an interface boundary, the identified interaction is input to the System Requirements Definition process to define the interface requirements.

How those interactions are realized is addressed by the Design Definition process (see Section 2.3.5.5). Definitions of interactions across interface boundaries are refined to include what each system element involved in the interaction looks like at the interface boundary and the media (e.g., a data bus, a wiring harness, a physical connection, Wi-Fi, Bluetooth) involved in the interaction is determined. Additional interface boundaries and interactions may need to be identified and defined that were not addressed by the System Architecture Definition and System Requirements Definition processes. The definition of these additional interfaces often drives additional iteration between these processes to capture the interface characteristics and requirements definition. Interactions across interface boundaries are primary considerations in both horizontal and vertical integration across the life cycle as part of the Integration Process (see Section 2.3.5.8).

A major issue concerning interface definition is that when a system element is contracted out to a supplier or the SoI interacts with other supplier-developed system elements. Often the contracts are issued prior to design and thus the design definitions of what the SoI and system elements look like at the interface boundary and the media involved in the interaction have not yet been defined. In addition, it is common for the suppliers to have little insight into the workings of other suppler-developed system elements with which they interact and how changes to those system elements could affect the interactions and performance of their system element (or changes to their system element could affect other system elements). In these cases, it is important that the acquirer clearly addresses how each supplier will support, participate in, and comply with the interface management activities during interface definition, design, system integration, system verification, and system validation in the agreements via the Agreement Processes (see Section 2.3.2).

Using the System Analysis process (see Section 2.3.5.6), the level and type of analysis needed to understand the trade space with respect to the interface requirements and definition is determined and performed. This can include mathematical analysis, modeling, simulation, experimentation, and other techniques. The analysis results are input to trade-offs made through the Decision Management process (see Section 2.3.4.3).

The Implementation process (see Section 2.3.5.7) is used to develop the system element interfaces and record evidence of meeting the interface requirements for an implemented system element.

The Integration process (see Section 2.3.5.8) considers the integration of the system and system element interfaces in the integration planning and integrates the implemented system elements together at the interface boundaries. Each system element is verified to have met their interface requirements using the Verification process (see Section 2.3.5.9). The system interfaces are validated using the Validation process (see Section 2.3.5.11) against the stakeholder needs and stakeholder requirements concerning interactions with systems or users external to the SoI in the operational environment. The Transition process (see Section 2.3.5.10) checks the installation and operational state of the interfaces in the operational environment.

Key activities that are part of interface management include facilitating cooperation and agreements with other stakeholders, defining roles and responsibilities, enabling open communication concerning issues, establishing timing for providing interface information, problem resolution, and agreeing on the interaction characteristics across interface boundaries early in the project. These functions are done through the Project Planning process (see Section 2.3.4.1). An important interface analysis activity is assessing and managing risks as part of the Risk Management process (see Section 2.3.4.4), avoiding potential impacts especially during system integration, system verification, system validation, operation, and maintenance. Other processes may also contribute to the management of the interfaces.

After establishing baselines for interface requirements, interface definitions, architecture, and design, the Configuration Management process (see Section 2.3.4.5) provides the ongoing management and control of the interface requirements and definitions, as well as any associated artifacts.





Recording Definitions of Interactions across Interface Boundaries


In a document-centric practice of SE, definitions concerning interface boundaries, the interaction across those boundaries, and the media involved are commonly recorded in some type of interface definition artifact (e.g., Interface Control Document (ICD), Data Dictionary (DD), Interface Definition Document (IDD), Interface Agreement Document (IAD)) or within the project’s integrated dataset from which the associated report may be generated. In a data-centric practice of SE, these are often captured in databases and models. A data-centric practice enables effective impact and change analysis, as well as helping ensure consistency of interface requirements and definitions across the architecture.





Interface Analysis


In conjunction with the other Technical Processes, the System Analysis process (see Section 2.3.5.6) applies various analysis methods to identify interface boundaries, and interactions across those boundaries, to better understand how the SoI interacts with the other systems that make up the system of which it is a part and to help ensure there are no missing interface boundaries, definitions, and interface requirements. Some common diagrams, methods, and tools used for analysis include functional flow block diagrams (FFBD), data flow diagrams (DFD), context diagrams, boundary diagrams, external interface diagrams, input, process, output (IPO) diagrams, N2 diagrams, and internal interface diagrams, Failure Modes and Effects Analysis (FMEA), System-Theoretic Process Analysis (STPA), language-based models (e.g., SysML diagrams), and simulations.

A critical part of interface analysis includes an assessment of each interaction across an interface boundary in terms of maturity, stability, documentation, threats, and risks. The SoI is particularly vulnerable when interfacing with external systems over which they may have little or no control. Because of this, the SoI is vulnerable to undesirable effects at and across the interface boundaries. Therefore, identifying and managing risks associated with interface boundaries and interactions across those boundaries is key to exposing potential risks to the project across applicable life cycle stages. Many of the major issues discovered during system integration, system verification, and system validation involve interfaces.

An example analysis tool is the N2 diagram shown in Figure 3.13, which enables a systematic approach to identifying interface boundaries and interactions across those boundaries. N2 diagrams enable the SE practitioner to assess and identify interface boundaries and interactions across those boundaries in a structured, bidirectional, fixed framework. The N2 diagrams can be used at several levels of abstraction of the SoI: a functional view and a physical view.




FIGURE 3.13 Sample N-squared diagram. INCOSE SEH original figure created by Krueger and Forsberg. Usage per the INCOSE Notices page. All other rights reserved.





An N2 diagram is created using an N × N matrix. The system elements (functional or physical) are placed in squares forming a diagonal from upper left to lower right. The rest of the squares in the matrix represent potential interactions (interfaces) between the elements. In an N2 diagram, interactions between elements flow in a clockwise direction. For example, the entity being passed from element A to element B, can be defined in the appropriate off-diagonal square. A blank square indicates there is no interaction between the respective elements. Sometimes, characteristics of the entity passing between elements may be included in the off-diagonal square where the interacting entity is identified. When all elements have been compared to all other elements, then the matrix is complete. If lower-level elements are identified in the process with corresponding lower-level interactions, then they can be successively described in expanded lower-level N2 diagrams. The Design Structure Matrix (DSM) is very similar in appearance and usage to the N2 diagram, but a different input and output convention is typically used (inputs on the horizontal rows and outputs on the vertical columns) resulting in interactions between elements flowing in a counterclockwise direction (Eppinger and Browning, 2012). Figure D-1 illustrates an N2 diagram for the interactions amongst the system life cycle processes.

One of the main functions of the N2 diagram, besides the identification of interactions, is to pinpoint areas where conflicts may arise between elements so that systems integration later in the development cycle can proceed efficiently (Becker, et al., 2000) (DSMC, 1983) (Lano, 1977). Alternatively, or in addition, functional and physical diagrams can be used with N2 diagrams to characterize the flow of information among system elements and between system elements and the external systems. As the system architecture is decomposed to lower levels, it is important to ensure the interface interaction definitions keep pace and that interactions are defined so that decompositions of lower levels are considered.

Coupling matrices (a type of N2 diagram, shown in Figure 3.14) are a basic method to define the aggregates and the order of integration (Grady, 1994). They can be used during System Architecture Definition (see Section 2.3.5.4), with the goal of keeping the interfaces as simple as possible. Simplicity of interfaces can be a distinguishing characteristic and a selection criterion between alternate architectural candidates. The coupling matrices are also useful for optimizing the aggregate definition and the verification of interfaces during Integration (see Section 2.3.5.8). Integration can be optimized by reorganizing the coupling matrix in order to group the system elements into aggregates and minimize the number of interfaces to be verified between aggregates. When verifying the interactions between aggregates, the coupling matrix can be an aid for fault detection.




FIGURE 3.14 Sample coupling matrix showing: (a) Initial arrangement of aggregates; (b) final arrangement after reorganization. INCOSE SEH original figure created by Faisandier. Usage per the INCOSE Notices page. All other rights reserved.





3.2.5 Architecture Frameworks


An architecture description framework is defined in ISO/IEC/IEEE 42010 (2022) as:

A set of “conventions, principles and practices for the description of architectures established within a specific domain of application or community of stakeholders.”



The term “description” is used in the definition to avoid confusion between architecture description frameworks and other frameworks (e.g., enterprise architecture framework, architecture evaluation framework). Other definitions for architecture framework (AF) can be found in the technical literature, for example The Open Group Architecture Framework (OMG TOGAF, 2023) defines AF as:

A foundational structure, or set of structures, which can be used for developing a broad range of different architectures.



Architecture frameworks are used in various domains to help ensure harmonization, consistency, and re-use. When a commonly agreed upon architecture framework is adhered to by all project teams involved, better aligned project artifacts typically result. This benefit will be particularly evident in distributed teams and within enterprises when architecture descriptions and architectural artefacts are reused across projects.

Most architecture frameworks are organized to provide one or more viewpoints to cover the target domains and their typical stakeholders’ concerns (e.g., NATO AF (NAF), Unified AF (UAF), and Department of Defense AF (DoDAF)). Some frameworks also provide one or more of the following:

A method for describing systems in terms of a set of architecture building blocks, and for showing how the building blocks fit together.

A set of tools and a common vocabulary.

Multiple dimensions with coordinates for relating particular groups of concerns or solutions along the dimensional aspects.



Figure 3.15 provides an overview of the Unified Architecture Method (UAM), which provides dimensions for perspectives and aspects.




FIGURE 3.15 Unified Architecture Method. From UAM (2022). Used with permission. All other rights reserved.





Others advocate that architecture frameworks should include a list of recommended standards, libraries of patterns, and compliant products that can be used to accelerate architecting. Finally, it is useful for architecture frameworks, or more broadly, architecting environments, to define activities and resources for architecture governance, in addition to the governance of skills and competencies in place, with regard to enterprise objectives.





Framework Support to Architecture Activities


Architecture activities are described in the System Architecture Definition process (see Section 2.3.5.4). This section explains how some of the major architecture frameworks can be used to perform the key architecture activities.

Architecture Enablement Frameworks like Pragmatic Enterprise AF (PEAF) (Pragmatic 365, 2023) and Generalized Enterprise Reference Architecture and Methodology (GERAM) (Bernus, 1999) can be used to establish and maintain a set of capabilities, services, and resources that support the architecture process. The enablement activities include:

Analysis of context in the organization where the architecture activities can take place.

Definition of the main principles and the overall organization where the processes, methods, roles, and technologies can be used for architecting.

Implementation of these high-level principles with methodologies provided by frameworks like TOGAF for IT domain or NAF and DoDAF for defense domains. This implementation comprises development of a metamodel to capture the terminology and a collection of architecture development methods, standards library, architecture repository and registry, and architecture capability. Architecture capability includes skills and governance logic.

Reference documents like Evans (2014) help assess the architecture context and environment with regard to the architecting styles of the enterprise programs and projects.



Architecture Governance Related concepts are objective, goal, strategy, policy, directive, roadmap, life cycle stage, and statement of work. Per Sowa and Zachman (1992), as illustrated in Figure 3.16, two levels of architecture frameworks should be established to ensure consistency of products and systems regarding the enterprise strategy. Within most contexts, there exists a need to consider the architecture of multiple entities, each with its own life cycle, and correspondingly a framework, that helps describe or model that entity. In addition, architecting must consider that the life cycles of these entities are interrelated, often in a recursive manner (by one entity contributing to some or all activities in the life cycle of another), and that these activities may have to be synchronized (e.g., for complexity reduction purposes, to achieve or to maintain selected system quality characteristics).




FIGURE 3.16 Enterprise and product frameworks. From Sowa and Zachman (1992). Used with permission. All other rights reserved.





Frameworks like NAF and TOGAF consider two levels of architecture governance:

At enterprise level, in accordance with enterprise objectives, goals, strategy, roadmap, policies and directives.

At project level, with regard to internal or external contracts of the projects of produced architecture(s) along the whole life cycle of the entity of interest related to the architecture(s).



Architecture Management Architecture management implements the governance directives in the frame of the project contract. Frameworks like NAF explain that the architecting effort should be defined in a management plan. This plan should also include the management of the work products throughout their whole life cycle. The management activities coordinate the architecting effort and report to the governance level with rationales about the application of the governance directives and the agreement.

Architecture Description Architecture Description, as defined by ISO/IEC/IEEE 42010 (2022), is accomplished with Architecture Conceptualization and Architecture Elaboration, as defined by ISO/IEC/IEEE 42020 (2019). These architecting activities are performed as planned by the management plan covering the architecture effort. Frameworks like Zachman explain how architecture viewpoints characterize the problem and represent the solution with regard to the stakeholders’ concerns, possibly structured as architecture aspects and stakeholders’ perspectives. These viewpoints can be defined in architecture frameworks or developed within the project for the benefit of the enterprise. ISO/IEC/IEEE 42010 defines views and viewpoints as they apply to the architecture description. Annex F of ISO/IEC/IEEE 42010 includes tables of requirements compliance for Architecture Description Frameworks. Development of project-specific viewpoint specifications needs to be justified because they imply additional effort for architecture description, evaluation, management, and usage of the work products.

Frameworks like NAF and TOGAF include a methodology to develop the architecture views governed by the viewpoints. As far as possible, this development should be based on patterns and standards already proven in the business domain where the entity of interest resides. Formalisms, model kind specifications, and modeling languages are typically defined in AFs.

Architecture Evaluation As defined by ISO/IEC/IEEE 42030 (2019), the evaluation activities determine the extent to which one or more architectures meet their objectives, address stakeholder concerns, and meet relevant requirements. These activities are performed as planned by the management plan covering the architecture effort. Frameworks like Architecture Tradeoff Analysis Method (ATAM) (CMU/SEI, 2000) and Method Framework for Engineering System Architectures (MFESA) (Firesmith, et al. 2008) allow performing architecture evaluation in three steps:

Definition of the objectives and evaluation criteria agreed by the stakeholders to cover their concerns.

Definition or development of a method to cover the activities normally structured in analysis, assessment, and evaluation tasks.

Analysis of the architecture concepts and properties, assessment of the value and utility for the stakeholders, and formulation of findings and recommendations in evaluation reports.





3.2.6 Patterns


Introduction to Patterns


The scientific disciplines, whether concerned with phenomena at a molecular, global, or astronomical scale, are based upon discovery and effective modeling of patterns. Patterns are recurrences—repeated regularities observed across time, space, or other dimensions. Patterns lie at the heart of physical sciences and the related engineering disciplines, as laws of nature whose mathematical representation and engineering exploitation have transformed the nature and possibilities of human life. In SE, recurring patterns are observable in engineered system requirements, solution architectures, stakeholder value, missions, fitness and trade spaces, parametric couplings, failure modes and risks, markets, system phenomena, principles, and the socio-technical systems of engineering and life cycle management. For example, there are patterns for requirements for refrigerators, patterns for design of coolant compressors, patterns for refrigerant failures, and patterns for maintaining refrigerators. Patterns are visible for products developed for commercial markets and systems engineered under defense contracts, as well as for the socio-technical systems that produce them, such as methodology patterns for eliciting and validating requirements. Whether the patterns are only implicitly and informally recognized and used, or explicit and formal, they can be found across the System of Innovation Pattern shown in Figure 1.6, where they are the basis of group learning. Explicitly modeled patterns help us surface and more efficiently share (learn, teach, practice) what earlier generations of SE practitioners treated as expertise and intuition only obtainable over decades of personal practice. As in the physical sciences, engineering patterns of all kinds are also subject to issues of credibility, validity, applicability, and trust as a basis for decision-making and action. Patterns are not “one size fits all”, but instead have both fixed (recurring) and variable (parameterized) aspects, distilled by abstraction across individual instances. Depending on how they are recognized, represented, managed, and applied, patterns may be informal or formal.





Informal Patterns


The most informally described patterns are those implicit in the expertise or judgement of individual practitioners and teams (as in tribal knowledge), when subject matter experts recognize new occurrences of past experiences. Examples are Jean’s expertise in packaging systems, or Jose’s expertise in risk assessment. Because of the high value of this experience and interest in making it available to others, historical efforts have been made to explicitly capture and record such patterns, even in informal form, so that they can be transmitted to others. SE principles and heuristics, often captured as informal prose, illustrate such explicit but informal patterns (see Sections 1.4.3 and 1.4.4). The informal but explicit prose representation of engineering patterns has created popular followings in civil and software engineering communities of practice (Alexander, et al., 1977) (Gamma, et al., 1995). These patterns typically include a prose template description of a problem and an informal description of a design pattern suited to such a problem. Examples of these explicit, informal, but effective patterns include building structural patterns and city layout patterns (in civil architecture patterns), as well as sorting algorithms and graphic user interface designs (in software design patterns). SE practitioners and leaders should not underestimate the value of explicit informal patterns for transmitting knowledge.





Formal Patterns


The sciences’ transition from informal prose to formal models powered much of the Science, Technology, Engineering, and Math (STEM) revolution’s transformative impact, where model-based representations of patterns are the heart of the related physical sciences. These models have also enabled several generations of powerful automation tools for design, simulation, and production across the engineering disciplines, and more recently this is also impacting SE.

The practice of SE has increased use of explicit formal system descriptive models as central to SE methods, described as Model-Based Systems Engineering (MBSE) (see Section 4.2.1). This also enables the shift to formal model-based representation of patterns and their application in SE, because patterns based in models can be readily transformed (including automated assistance) into configured models specific to an application or project. Likewise, such patterns can be used in automated conformance-checking of other models. Provided the credibility of the patterns for the uses intended is managed, this not only shortens time to a trustable specific model, it also helps shift the language and perspective of multiple systems practitioners and teams into common semantic frameworks specific to a domain or specialty, for improved compatibility and interoperability. For example, do designers of tractors and trailers have a common perspective on the interactions between these engineered products? Can their work be readily checked for consistency? These issues have major impacts on SE effectiveness and productivity.

Formal patterns, particularly when model-based, appear under different names and “flavors” across SE practice and this handbook. Among these are ontologies, Architectural Frameworks, schemas, and Product Line Engineering (PLE) datasets. For more on these, refer to INCOSE S*Patterns Primer (2022) and the other sections of this handbook. Formal patterns also include general and domain-specific system modeling languages.

The power of models in the STEM revolution was not simply that they reflected agreements across groups (as in standards), but also agreements with observed natural phenomena, reduced to simplest form in the patterns of physical laws. These phenomena-based patterns continue to provide the theoretical basis for the individual engineering disciplines, as well as for the foundations of SE (Schindel, 2016, 2020). The central question they address is: What is the smallest system model content necessary to represent a SoI, across its life cycle, for purposes of engineering and life cycle management (Schindel, 2011)? This question has practical implications, but is also rooted in the foundations of SE:

The practitioner has an interest in keeping things as simple as possible, but not simpler. “Too large” a model implies the burden of more information than is needed, including redundancies which often include inconsistencies. “Too small” a model implies that information needed during the life cycle is missing.

Foundations of an engineering discipline include representing recurring phenomena fundamental to its corresponding science. The smallest set of elements generating a discipline identifies its foundations (e.g., Newton’s Laws generating Mechanics, Maxwells’ Equations generating Electrical Science). A definition of a system’s mathematical complexity is the size of its smallest generating representation (Li and Vitanyi, 2009).



The Systematica Metamodel (S*Metamodel) is a formal pattern describing a neutral (independent of specific modeling languages or tools) answer to the above “smallest model” question, mapped into contemporary model tooling and languages, such as SysML, simulations, or modeling frameworks. An S*Model is any model, expressed in any modeling language or tooling, that is mapped to the reference S*Metamodel. The S*Metamodel spans disciplines, tooling, and languages, and is rooted in the phenomena-based models of the physical sciences.

Modern word processing tools are powerful, but varying writer composition skills and practices allow authoring that may produce valuable literature or faulty descriptions and broken semantics. Similarly, observed methods of use of contemporary modeling languages and automated tools allow the generation of system models that are both too small (are missing important elements) and too large (contain undetected redundancies and contradictions) at the same time. Fortunately for formal models, the history of the physical sciences provides patterns about the nature of phenomena and their models, and these can guide the users of contemporary tools and languages to more effective models than bare languages and tools alone. Accordingly, the S*Metamodel provides that guidance in any language or tooling into which it is mapped. Three examples from the S*Metamodel are:

All behavior is interaction-based: Physics has made it clear that there is no “naked” behavior in the absence of interactions, although system modelers sometimes create models that incorrectly assert otherwise. Interactions are the heart of system phenomena, emergence, SE, and S*Models. Failure to understand and represent interactions leads to well-known engineering problems such as overlooking the impact of “external” actor behavior on the performance of an in-service engineered system (Schindel, 2013, 2016).

Requirement statements are transfer functions: Models can help make it clear that requirement statements are not simply prose, but always represent input-output relationships parameterized by state variables. S*Models make this clear and enable improved auditing for problematic or overlooked requirements (Schindel, 2005).

Stakeholder value trade space, failure effects in risk analysis, and configurability of product line families are all manifestations of the same variables: These are frequently treated as relatively independent specialties and dimensions, greatly over-complicating system representation and understanding, when that apparent dimensionality can be substantially reduced by S*Models (Schindel, 2010).



Other aspects of the S*Metamodel, and the S*Models generated from it, are described in Schindel (2011), INCOSE S*MBSE (2022), and INCOSE S*Patterns Primer (2022).





S*Patterns


S*Patterns are reusable S*Models of families of systems, often domain-specific, configurable to represent multiple individual applications, market segments, or other configurations (Schindel, 2022a). There are also more generic S*Patterns, such as the S*Metamodel itself ( INCOSE S*MBSE, 2022), the System Innovation Ecosystem Pattern introduced in Figure 1.6 (Schindel and Dove, 2016) (INCOSE Innovation Ecosystems, 2022), and the Model Characterization Pattern used to generate requirements and metadata for unified characterization of virtual models of all types (INCOSE S*MCP, 2019). Pattern-based MBSE using S*Patterns involves authoring of system patterns and their configuration to application and project-specific S*Model instances, as summarized by Figure 3.17. Part of the “minimality” of the S*Metamodel is its sufficiency for such representations, including configuration rules. Instructional examples of system pattern representations may be found in Schindel and Peterson (2013). System patterns have been used in automotive, heavy equipment, aerospace, medical device, diesel and gas turbine engines, advanced manufacturing, consumer product, cybersecurity, and other domains (Bradley, et al., 2010) (Cook and Schindel, 2015) (Schindel and Smith, 2002) (Schindel, 2012).




FIGURE 3.17 S*Pattern class hierarchy. From (Schindel and Peterson, 2013). Used with permission. All other rights reserved.





There is more to pattern-based methods than just representing the patterns. Historical descriptions of SE processes can appear to describe all the processes practitioners ought to perform in order to discover, validate, and utilize all the information the system life cycle requires. However, those descriptions have by volume had less to say on the question of “what about what we already know?” Such descriptions might be viewed as relying on practitioners to separately work out informal means of exploiting existing knowledge within what the process specifies. To address such questions, the System Innovation Ecosystem Pattern shown in Figure 1.6 describes the curation and mixing of information believed already credible with required new information extraction and validation. Schindel and Dove (2016), INCOSE S*Patterns Primer (2022) and others describe multiple additional levels of detail decomposition of processes, information, ecosystem capabilities, and limitations. Those details show how life cycle processes of ISO/IEC/IEEE 15288 (2023) and this handbook are incorporated to manage group learning and controlled sharing, and especially pattern credibility and uncertainty, across multiple programs of an enterprise, supply chain, or industry group. The System Innovation Ecosystem Pattern is further concerned with the effective linkage between the processes of pattern learning, validation, and curation versus the execution processes of making use of the content of trusted patterns—often by different people, at different times, in different places or organizations.





3.2.7 Design Thinking


Understanding and leveraging the technical, business, and social relationships to successfully design and manage engineered systems is still a challenge in SE practice. SE solutions to this challenge tend to focus on system components, human activities, machine functionality, and human-system integration . Solution design can take advantage of Design Thinking (Dorst, 2015) as a complementary approach to Systems Thinking (see Section 1.5). Design Thinking explores (1) the human needs, (2) the operational and business processes and reasoning by which design concepts are devised and realized, especially those which are creative in nature, together with (3) the systems being realized, (4) its specialization, and (5) their utilities and value provided for the stakeholders.

In a Design Thinking process (Cross, 2000), (Lawson, 1997), context analysis and problem framing techniques are employed to identify all relevant influences on a problem, explore the given problem, and restructure or revise it to suggest a route to a solution. Solution generation techniques, including approaches to idea generation (ideation), are employed to identify a range of possible design solutions which are based on:

existing known solutions, possibly in the form of variants, patterns or other adaptations;

applying different forms of design-related reasoning to achieve innovative solutions;

iterating between decomposing functional requirements and design solutions to achieve optimal design – see, for example, Axiomatic Design (Suh, 2001); and,

using successive divergent and convergent phases of design synthesis and analysis with respect to the value provided for the stakeholders resulting from business and operational processes.



Design Thinking enables SE practitioners and other team members to understand the stakeholders, challenge assumptions, redefine problems, and realize innovative solutions by drawing upon logic, imagination, intuition, and systemic reasoning. Design Thinking can also be utilized for anticipating and addressing emergent features of systems, and in technical management and organization of engineering processes.

As Design Thinking approaches use solution-based methods, they can be used in various system life cycle stages. Examples are to support business or mission analysis (see Section 2.3.5.1), to identify and validate stakeholder or system requirements (see Sections 2.3.5.2 and 2.3.5.3), or to define the system architecture or its design solution (see Sections 2.3.5.4 and 2.3.5.5).




3.2.8 Biomimicry


Definition


Natural systems include living and non-living systems—anything that is not human-made. Natural systems differ from engineered systems (see Section 1.1), which are the primary focus of this handbook.

“Biomimicry is a practice that learns from and mimics the strategies found in nature to solve human design challenges—and find hope” (Biomimicry Institute, 2022).





Purpose


Nature inspired SE and biomimicry can improve processes, practices, and products through the understanding of how nature is structured, behaves, adapts, interacts, accomplishes functions, and recovers from disturbance. Applying natural systems thinking and engineering can improve system capability, efficiency, and performance, while benefiting operations, support, and the effects on external environments. Examples include optimized information processing and sensing, operation in extreme environments, innovative materials application, distributed architectures, understanding of how emergence arises, lowered environmental impact, and system resilience. Nature has strategies to improve performance in all these areas, including circular approaches to materials and energy. To utilize nature-inspired solutions, SE looks to a universal solution space and asks regularly, “Can nature help me solve this problem?” and, “How can nature help me improve my SoI, product, or process?”





Examples


Examples of successful natural systems applications and biomimicry abound. Select examples are shown in Figure 3.18: Velcro® inspired by burdock (Velcro, 2023); an impeller inspired by the calla lily and nautilus shell (Pax Water Technologies, 2022); grippers inspired by the gecko (NASA JPL, 2013, 2014, 2015); and a sensor inspired by an insect’s compound eye (Frost, et al, 2016).




FIGURE 3.18 Examples of natural systems applications and biomimicry. INCOSE SEH original figure created by McNamara and Anway derived from Studor (2016) and Hoeller, et al. (2016) using NASA images. Usage per the INCOSE Notices page. All other rights reserved.





Description


Over time, natural systems have developed a very close fit to their surroundings and other systems. The result is that they exhibit optimized attributes that often exceed the performance of engineered systems. In addition, they often have positive impacts on the environment. The study of natural systems includes forms, structures, materials, behaviors, processes, regenerative strategies, and interactions. Studying natural systems will increase an SE practitioners’ repertoire of solutions, architectural variations, and strategies. The SE practitioner on a project is ideally suited to explore opportunities for application of natural systems across all life cycle stages.

To develop natural systems solutions, the SE practitioner uses a systematic process that:

Begins by being open to alternate solutions;

Defines requirements in terms of abstract functions or goals, including specific relevant metrics whenever practical;

In the early stages of solution exploration, uses the abstracted functions to search for and identify multiple natural systems that could satisfy the desired function and examines characteristics of each;

Selects one or more candidate natural systems;

Abstracts the strategy that accomplishes the function in nature;

Explores architectural variations that translates the strategy and generates alternate system element alternatives;

Transfers the strategy to the SoI;

Evaluates system element performance at the system level; and

Evaluates the environmental impact of the system production, operation, support, and retirement.



Partnering with and supporting natural systems scientists can be essential to a successful implementation. An SE team gains from the in-depth knowledge provided by a cross-disciplinary team.

For more information, see INCOSE NS Primer (2023).