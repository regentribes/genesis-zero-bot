SYSTEMS ENGINEERING RELATIONSHIPS TO OTHER DISCIPLINES


SE practitioners routinely work within broad multidisciplinary teams. The following sections highlight SE practitioner interactions with some key related disciplines.





5.3.1 SE and Software Engineering (SWE)


This section describes an overview of the relationships between SE and software engineering (SWE), especially when developing and modifying software-intensive systems. ISO/IEC/IEEE 42010 (2022) defines a software-intensive system as:

Any system where software contributes essential influences to the design, construction, deployment, and evolution of the system as a whole.



Section 4.3.4 discusses software-intensive systems. These systems are also known as software-enabled and cyber-physical systems (see Section 4.3.5).

What is this discipline?

ISO/IEC TR 19759 (2015) defines SWE as:

The application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software; that is, the application of engineering to software.



SE practitioners need to know that software has become ubiquitous in modern systems and is important in updates to many older systems. Because software elements are malleable, software can thus, in most cases, be tailored, adapted, and modified more readily than can physical elements, especially in the support stage of the system life cycle. Software elements, like physical elements, can be improved and replaced if the interfaces are preserved. Software often provides or facilitates provision of the following system attributes: functionality, behavior, quality characteristics (QCs), and system interfaces (both internal and external). Software embedded in software-intensive systems can also monitor system performance and provide observable performance indicators.

The differences between software elements and physical elements present significant challenges for SE practitioners when facilitating development and modification of software-intensive systems. Software elements are logical entities composed of textual and iconic symbols that are processed and interpreted by other software that is executed on computer hardware. A single mistyped symbol, including a single mistake in a logical expression, in large system that may include thousands or millions of symbols and logical expressions can result in failure of the entire system. The mistake may not be detected during system development or modification because even small software programs contain large numbers of logical branches and iteration loops that prevent exhaustive testing in reasonable amounts of time. Assuring the quality of a software-intensive system is thus challenging. Detailed concentration on the precise development of software elements and software interfaces may cause SWE practitioners to lose sight of the impacts of their software on larger system issues.

What is its relationship to SE?

The relationship of SWE to SE is becoming increasingly important because software is a large and growing part of modern systems. The issues that arise for SE practitioners when developing or modifying software-intensive systems involve partitioning of requirements and architecture so that SWE practitioners (and hardware engineering (HWE) practitioners of various kinds) can design their elements and interfaces and pursue their development practices based on the differing natures of the mediums in which they work (Fairley, 2019). Well-defined and controlled interfaces, both provided and required, are essential so that separately developed elements can be efficiently integrated. Integration of software and hardware elements is typically accomplished in an incremental manner, as the elements become available. Defining and controlling interfaces is an ongoing challenge.

The primary benefit of coordinating SE and SWE during system development and modification is incorporation of software-provided capabilities in a manner that results in efficient and effective systems. SE practitioners can consult with SWE practitioners during system analysis and design to develop options and tradeoffs for configuring software and hardware elements and their interfaces. In addition, SWE practitioners can provide recommendations to SE practitioners for processes that can be used when developing and integrating software and hardware elements and when performing system verification, validation, and deployment (Fairley, 2019). Consultations and recommendations can ameliorate the software problems that sometimes result in late deliveries, insufficient system performance, and difficult system modifications.

How does it impact/is it impacted by SE?

SE practitioners who develop software-intensive systems are, as always, concerned with facilitating development of systems that are delivered in a timely manner, that satisfy performance parameters, and that can be modified efficiently and effectively. SE practitioners can better achieve these goals by taking advantage of the expertise of SWE practitioners, but they may fail to do so because they may not be familiar with the culture, terminology, and practices of SWE. SWE practitioners may not contribute their expertise because they are not consulted or if consulted may have insufficient knowledge of system level issues to provide recommendations. Involving knowledgeable SWE practitioners at the system level can improve communication. Cross-training, shadowing, mentoring, and collaborative workshops that include SE practitioners and SWE practitioners can result in synergetic relationships that will provide better communication and allow more effective and efficient development and modification of software-intensive systems.

More information on SE for software-intensive systems can be found in The Guide to the System Engineering Body of Knowledge (SEBoK) in the Part 6 knowledge area titled “SE and Software Engineering.”




5.3.2 SE and Hardware Engineering (HWE)


This section describes an overview of the relationships between SE and hardware engineering (HWE).

What is this discipline?

HWE includes the development and implementation of physical elements for systems, enabling systems, and support equipment for systems. HWE includes mechanical engineering (ME) for mechanical elements and electrical engineering (EE) for electrical and electronic elements.

What is its relationship to SE?

The SE team must assist the hardware team in establishing hardware requirements, physical interface requirements, and establishing and tracking key physical measures (e.g., size, weight, and power (SWaP) budgets) at every level of the system architecture. During the System Architecture Definition and Design Definition processes (see Section 2.3.5.4 and 2.3.5.5), requirements will be allocated and derived across many hardware elements. Initially, these allocations may be required to meet a set of requirements at the system level without a full understanding of the actual values at the element level. This is where a requirements budget can be utilized by the SE team to derive these critical hardware attributes across all the applicable hardware elements and design teams. These hardware design teams will consist of diverse HWE fields, with a focus on the hardware design. The hardware design teams will accept an initial budget allocation from the SE team based on a summary analysis of the system requirements and design. The SE team gives allocations based on the requirements and hardware design team inputs. The SE team will then track progress to those budgets, determine any impacts at the system level, and relay change requests as needed. Hardware considerations include SWaP, inertia, balance, frequency, phase, and others.

Interface management is an important consideration for SE and HWE. Interface decisions will have an impact on both the interconnectivity of the system and hardware selection. Utilizing open source or standard interfaces, if feasible, can reduce costs and development time. If unique or custom interfaces are necessary, they must be documented in the architecture before design, development, and testing can occur. This requires the SE team to balance interface decisions between capability and hardware standards.

The application of SE to hardware differs from software-only applications in two primary ways: hardware solutions may exist that can meet all or part of a decomposed requirement and the hardware performance requirements generally must be built into the initial hardware deliverable rather than iterated into the design (with some exceptions). A make or buy decision is often performed at each level of the architecture based on the results of a market analysis and tradeoff study of existing solutions that will satisfy the requirements. If the result of the decision is to make, the architecture can be further decomposed or Implementation process initiated. However, if the result of the decision is to buy, then the architecture decomposition for that system element will end (see Section 1.3.5).

How does it impact/is it impacted by SE?

Hardware material selection is supported by existing application or domain-specific standards. On a smaller, less complicated systems, HWE may be able to select all materials without the need of a formal SE process. With the increasing complexity of large systems and SoSs, the role of SE in hardware material selection becomes paramount, especially in applications where human lives could be affected. For instance, when multiple hardware sources could have system elements with mechanical or electrical interactions, the role of SE is to document architecture and design decisions and provide timely input into the material selection process before costly errors are found in verification or production. Sometimes SE acts to balance the software and hardware requirements, because software requirements can influence the hardware requirements, and vice versa. For instance, having a high availability requirement can result in the need for redundant software systems deployed on redundant hardware systems, meaning that the weight and the power budgets are increasing. SE serves as the bridge between software and hardware.




5.3.3 SE and Project Management (PM)


This section describes an overview of the relationships between SE and project management (PM).

What is this discipline?

As defined by the Project Management Institute (PMI), PM is defined as:

The application of knowledge, skills, tools, and techniques to project activities to meet the project requirements.(PMI, 2022)



PM activities include initiating, planning, executing, monitoring, and closing projects. Within this handbook these are primarily distributed across the Technical Management Processes (see Section 2.3.4) for the SE portion of the responsibilities, but also include some activities in the Agreement Processes (see Section 2.3.2) and Organizational Project Enabling Processes (see Section 2.3.3). In the PMI Project Management Body of Knowledge (PMBoK) (2017), they are part of Project Integration Management, Project Scope Management, Project Schedule Management, Project Cost Management, Project Quality Management, Project Resource Management, Project Communications Management, Project Risk Management, Project Procurement Management, and Project Stakeholder Management. According to the PMBoK, a program is a set of related projects that are viewed as an entity that requires coordinated management.

What is its relationship to SE?

While SE and PM are distinct disciplines, extensive research has shown that effective integration between PM and SE improves project performance, achieving better results in schedule and budget performance, as well as stakeholder requirements satisfaction, when compared with projects with lesser integration. In 2011, INCOSE formed a strategic alliance with PMI and Massachusetts Institute of Technology (MIT) to research and advance the integration of the two disciplines, driven by the vision that better integration would lead to the delivery of better solutions for organizations and their stakeholders. One output of this alliance was Integrating Program Management and SE (Rebentisch, 2017), which defines this integration as “a reflection of the organization ability to combine project management and SE practices, tools and techniques, experience and knowledge in a collaborative and systematic approach in the face of challenges in order to be more effective in achieving common goals/objectives in complex project environments.” A summary of the respective and shared responsibilities between PM and SE is shown in Figure 5.4. Cooperation between project managers and SE practitioners must exist within all these shared activities.




FIGURE 5.4 The intersection between Pm and SE. INCOSE SEH original figure created by roussel on behalf of the INCOSE Pm-SE Integration Working Group. Usage per the INCOSE Notices page. All other rights reserved.





How does it impact/is it impacted by SE?

A high degree of integration between PM and SE is characterized by collaborative decision making, a shared responsibility toward a common goal, having the project manager involved in technical aspects of the project, and having the SE practitioners involved in programmatic aspects of the project. An understanding of the differences, culture, background, and behavior of the two disciplines is also required. A team’s ability to combine PM and SE practices, tools and techniques, experience, and knowledge in a collaborative and systematic approach enables addressing challenges in order to achieve common goals and objectives. Specifically, an integrated team achieves rapid and effective decision making, effective collaborative work, and effective information sharing (Rebentisch, 2017).

PM and SE overlap in the early stages of concept and development but tend to diverge in the later stages of development and production. For example, in the early life cycle stages the SE practitioner focuses on the technical details of the SoI, verification, and validation. The project manager focuses on the overall project performance and delivery of benefits, including high-level finance and budgetary requirements. PM and SE should cooperate on concurrent development of the breakdown structures (see Section 2.3.4.1), and in the management of them through the life cycle. If the different structures are managed separately by the respective teams without coordination, problems may arise in the project. As the project proceeds through the later life cycle stages, greater integration between PM and SE reduces unproductive tension, a cause of project delays, cost increases, and, sometimes, project failure (Rebentisch, 2017).

As stated in Rebentisch (2017), PM delivers the sustainable benefits of the overall project, while SE delivers the technical aspect of the project. These two roles overlap to integrate technical and programmatic aspects of the project and create potential for unproductive tension, if not effectively managed with cooperation. For example, PM and SE share the same objective to satisfy stakeholder needs and requirements. However, project managers tend to focus on project stakeholders, while SE practitioners tend to focus on system stakeholders. The separation between these two types of stakeholders can generate tension and misunderstandings between project managers and SE practitioners. It is important that they jointly identify all stakeholders and agree on the priority and criticality of stakeholder needs and requirements.

Where there is not effective integration between PM and SE, unproductive tension emerges between the two disciplines. This tension produces conflict and works at cross purposes with project success. Tension can be related to practices, techniques, as well as responsibilities. Misaligned measures can cause tension. Common measures are critical to ensuring that each party has the same concerns and information. The maturity level of each party is critical. An immature or inexperienced PM organization can render ineffective a mature, high-performing SE organization (and vice versa). When one or both disciplines perform inadequately, the entire effort is impaired.




5.3.4 SE and Industrial Engineering (IE)


This section describes an overview of the relationships between SE and industrial engineering (IE).

What is this discipline?

Bidanda (2022) defines Industrial Engineering as:

Optimizing the utilization of human resources, facilities, equipment, tools, technologies, information, and handling of materials to produce quality products and services safely and cost-effectively considering the needs of customers and employers.



The Institute of Industrial and Systems Engineers (IISE) Industrial and SE Body of Knowledge (ISEBoK) (2022) is composed of 14 knowledge areas. The knowledge areas include: Operations Research & Analysis, Economic Analysis, Facilities Engineering & Energy Management, Quality and Reliability Engineering, Ergonomics & Human Factors, Operations Engineering & Management, Supply Chain Management, Safety, Information Engineering, Design and Manufacturing Engineering, Product Design & Development, Systems Design & Engineering.

What is its relationship to SE?

IE is closely related to SE. The IISE states that “Industrial and SE is concerned with the design, improvement, and installation of integrated systems of people, materials, information, equipment and energy. It draws upon specialized knowledge and skill in the mathematical, physical, and social sciences together with the principles and methods of engineering analysis and design, to specify, predict, and evaluate the results to be obtained from such systems.” As evidence of the close relationship of IE and SE, Figure 5.5 compares the ISEBoK (2022) with SE topics in this handbook. The numbered topics on the figure are the knowledge areas explicitly identified in the ISEBoK. The figure identifies the knowledge areas that are usually performed by SE practitioners, the ones usually performed by industrial engineers (IE), and the knowledge area descriptions that are used by both disciplines.




FIGURE 5.5 IE and SE relationships. From Parnell, et al. (2022). Used with permission. All other rights reserved.





As an illustration of the relationships between IE and SE, four knowledge areas are discussed below.

Operations Research and Analysis—Operations Research (OR) includes a variety of techniques to quantify and improve the efficiency of systems and organizational processes using scientific mathematical models. The mathematical techniques include linear programming, transportation models, linear assignment models, network flows, dynamic programming, integer programming, nonlinear programming, metaheuristics, decision analysis, game theory, stochastic modeling, queuing systems, simulation, systems dynamics, and analytics. Industrial engineers use OR to understand, design, and improve the operation of industrial systems and processes. SE practitioners can perform OR analyses or use OR studies performed by others to make system decisions (see Section 5.3.5).

Information engineering—Information engineering is a “methodology for developing an integrated information system based on the sharing of common data, with emphasis on decision support needs as well as transaction-processing (TP) requirements” (Gartner, 2022). Information engineering topics include: data types; information system concepts; information requirements; output design; data processing; database concepts; storage and processing; system analysis; system design; system evaluation; information management; and data analytics. Since information systems are a critical component of modern engineering systems, IE and SE practitioners work closely with information engineers.

Product Design and Development—As stated in ISEBoK (2022), “From an Industrial Engineering knowledge view, it is the processes and analysis employed supporting efficient decision-making during Product Design and Development.” Product design and development topics include: design process; preliminary and detailed design; verification and testing; planning for manufacture; metrics for design and development; life cycle costing; and risk and opportunity management. SE practitioners may provide inputs to the product design and development process throughout the system life cycle.

System Design and Engineering—The ISEBoK (2022) lists the SEBoK (2022) as the reference for this section. The topics include the system life cycle concepts from mission engineering to operations.

How does it impact/is it impacted by SE?

There are some significant overlaps. IE and SE practitioners must work closely with each other to accomplish the goals of the project. Different organizations use different job titles for IE and SE, and the same job title may have different responsibilities in different organizations.




5.3.5 SE and Operations Research (OR)


This section describes an overview of the relationships between SE and operations research (OR).

What is this discipline?

The Institute for Operations Research and the Management Sciences (INFORMS) defines OR as:

The scientific process of transforming data into insights using advanced analytical methods to making better decisions.(INFORMS, 2022)



The name “operations research” originated from the recognition of the successful use of scientific and mathematical modeling techniques for military operations during World War II (Gass and Harris, 2001). For example, mathematical modeling assisted in developing strategies to employ bombers as well as arrange convoys against submarine attacks. OR is sometimes referred to as Management Science, particularly in business applications, as well as Operational Research in some countries (Quade and Boucher, 1968).

A branch of applied mathematics, OR includes wide range of approaches. Common to all is the establishment of a model to represent the system to support analysis for decision making. In some cases, the model may be solved directly, but other common approaches include optimization, simulation, and decision analysis.

Optimization is useful in determining the best combination of decision variables. Optimization models can be linear, integer, and nonlinear depending on the form of the objective function and constraints. Goal programming is useful when thresholds are established as an achievement target on multiple objectives. The approach avoids falling short of goals and incurring a penalty but permits a broader trade-off analysis.

Simulation is useful for assessing how well the system as a whole will perform its role in a given environment. Systems will typically be analyzed using stochastic discrete event simulations. These are often called Monte Carlo simulations, as random numbers are drawn to represent outcomes from distributions for the input uncertainties. These models are run multiple times and the output probabilities of occurrence are established by aggregating the simulation runs and using statistical tools for interpretation (Fishman, 1997).

Decision analysis uses a model of the decision makers’ preferences and risk attitudes to analyze tradeoffs between alternatives and is often used for strategic decision making.

What is its relationship to SE?

OR techniques frequently support SE by assisting in understanding stakeholder needs and estimating how a proposed system will behave. Decision analysis is used to elicit stakeholder needs and preferences to construct a value model. The value model is used to understand value tradeoffs between different system or system element alternatives. The performance of the anticipated system alternatives may be represented through a simulation. This has been so successful that model-based SE (MBSE) has become an important area (see Section 4.2.1). Optimization may be applied to improve designs. For example, by minimizing a system element weight while providing required structural strength. Optimization may be used to minimize life cycle costs using inventory theory. Queueing theory may be used to understand system processing times. Forecasting may be used to project forward from historical data. Network flow analysis may be used to improve network capacity.

Blanchard and Fabrycky (2011) discuss the SE morphology for product (system) realization. They note the steps after design synthesis are (1) Estimation and Prediction, and (2) Design Evaluation. Estimation and Prediction often rely heavily on OR. For example, assessing the response times associated with different possible locations for a new firehouse or estimating spare parts requirements as part of a life cycle cost perspective.

Optimization may be applied in the development stage as well as in the production stage. Optimization may be applied at higher levels of the systems hierarchy. For example, a less costly design may support a larger number of employed systems for the same results.

Operations research techniques may be applied to historical and test data. Data analytics may be used to establish system performance as a mathematical function of inputs. Sensitivity analysis may be used to establish acceptable system inputs. Response surface methodology may be used to establish more abstract but tractable models. Forecasting methods may be applied to time series data.

Decision analysis provides the ability to understand decision quality and assess the value or utility delivered under certainty and uncertainty. Decision analysis provides not only the ability to select the best presented alternative but also supports insight in examination of hybrid alternatives, allowing searching for improved designs. It is also transparent and traceable, and so is fully defensible and allows representation of differing preferences of various stakeholders.

How does it impact/is it impacted by SE?

OR and SE practitioners must work closely with each other to accomplish the goals of the project. SE practitioners can perform OR analyses or use OR studies performed by others to make system decisions.