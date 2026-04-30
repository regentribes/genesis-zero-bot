SYSTEMS CONCEPTS


Important system concepts include the system of interest (SoI), the system environment, and external systems. The boundaries between the system and the surrounding elements are important to understand. These boundaries separate the SoI, enabling systems, interoperating systems, and interfacing systems, supporting the SE practitioner in properly accounting for all the necessary elements which comprise the whole system context. Part of the system concept are the system’s modes and states which are fundamental system behavior characteristics important to SE. Systems can be hierarchical in their structural organization, or they can be complex where hierarchy is not always present. The system concepts encompass all types of systems structures and support the SE practitioner with a framework in which to engineer a system.





1.3.1 System Boundary and the System of Interest (SoI)


General System Concepts


An external view of a system must introduce elements that specifically do not belong to the system but do interact with the system. This collection of elements is called the system environment or context and can include the users (or operators) of the system. It is important to understand that the system environment or context is not limited to the operating environment, but also includes external systems that interface with or support the system at any time of the life cycle.

The internal and external views of a system give rise to the concept of a system boundary. In practice, the system boundary is a “line of demarcation” between the system under consideration, called the system of interest (SoI), and its greater context. It defines what belongs to the system and what does not. The system boundary is not to be confused with the subset of elements that interact with the environment.

The functionality of a system is typically expressed in terms of the interactions of the system with its operating environment, especially the users. When a system is considered as an integrated combination of interacting elements, the functionality of the system derives not just from the interactions of individual elements with the environmental elements but also from how these interactions are influenced by the organization (interrelations) of the system elements. This leads to the concept of system architecture, which ISO/IEC/IEEE 42020 (2019) defines as:

Fundamental concepts or properties of an entity in its environment and governing principles for the realization and evolution of this entity and its related life cycle processes.



This definition speaks to both the internal and external views of the system and shares the concepts from the definitions of a system (see Section 1.1).





Scientific Terminology Related to System Concepts


In general, engineering can be regarded as the practice of creating and sustaining systems, services, devices, machines, structures, processes, and products to improve the quality of life—getting things done effectively and efficiently. The repeatability of experiments demanded by science is critical for delivering practical engineering solutions that have commercial value. Engineering in general, and SE in particular, draw heavily from the terminology and concepts of science.

An attribute of a system (or system element) is an observable characteristic or property of the system (or system element). For example, among the various attributes of an aircraft is its air speed. Attributes are represented symbolically by variables. Specifically, a variable is a symbol or name that identifies an attribute. Every variable has a domain, which could be but is not necessarily measurable. A measurement is the outcome of a process in which the SoI interacts with an observation system under specified conditions. The outcome of a measurement is the assignment of a value to a variable. A system is in a state when the values assigned to its attributes remain constant or steady for a meaningful period of time (Kaposi and Myers, 2001). In SE and software engineering, the system elements (e.g., software objects) have processes (e.g., operations) in addition to attributes. These have the binary logical values of being either idle or executing. A complete description of a system state therefore requires values to be assigned to both attributes and processes. Dynamic behavior of a system is the time evolution of the system state. Emergent behavior is a behavior of the system that cannot be understood exclusively in terms of the behavior of the individual system elements. See Section 1.3.2 for further information on emergent behavior and Section 1.3.6 for more information on states and modes.

The key concept used for problem solving is the black box/white box (also known as opaque box/transparent box) system representation. The black box (opaque box) representation is based on an external view of the system (attributes). The white box (transparent box) representation is based on an internal view of the system (attributes and structure of the elements). Both representations are useful to the SE practitioner and there must be an understanding of the relationship between the two. A system, then, is represented by the external attributes of the system, its internal attributes and structure, and the interrelationships between these that are governed by the laws of science.





1.3.2 Emergence


Emergence describes the phenomenon that whole entities exhibit properties which are meaningful only when attributed to the whole, not to its elements. Every model of human activity system exhibits properties as a whole entity that derive from its element activities and their structure, but cannot be reduced to them (Checkland, 1999). Emergence is a fundamental property of all systems (Sillitto and Dori, 2017). According to Rousseau et al. (2018), emergence derives from the systems science concept of “properties the system has but the elements by themselves do not.”

System elements interact between themselves and can create desirable or undesirable phenomena called emergent properties such as inhibition, interference, resonance, or reinforcement of any property. Emergent properties can also result from the interaction between the system and its environment. Many engineering disciplines include emergence as a property. For example, system safety (Leveson, 1995) and resilience (Rasoulkahni, 2018) are examples of emergent properties of engineered systems (see Sections 3.1.11 and 3.1.9, respectively).

Definition of the architecture of the system includes an analysis of interactions between system elements in order to reinforce desirable and prevent undesirable emergent properties. According to Rousseau et al. (2019), the systemic virtue of emergent properties are used during systems architecture and design definition to highlight necessary derived functions and internal physical or environmental constraints (see Sections 2.3.5.4 and 2.3.5.5, respectively). Corresponding derived requirements should be added to system requirements baseline when they impact the SoI.

Calvo-Amodio and Rousseau (2019) explain how emergence applies to systems in which complexity is dominant. Complexity dominance, they say, encourages us to consider the significance of the difference between kinds of complexity and degrees of complexity systems have. Doing so enables the SE practitioner to use variety engineering to manage complexity accordingly.

Figure 1.5 illustrates how the interaction between elements can result in emergent properties in any kind of system. This figure illustrates the basic rules of emergence. First, individual elements cannot exhibit higher-level system emergence. Second, two or more elements are required for emergence. Finally, emergence occurs at a level above the individual elements.




FIGURE 1.5 Emergence. INCOSE SEH original figure created by Jackson. usage per the INCOSE Notices page. All other rights reserved.





1.3.3 Interfacing Systems, Interoperating Systems, and Enabling Systems


External systems are systems beyond (or outside of) the SoI boundary. Interfacing systems are external systems that share an interface (e.g., physical, material, energy, data/information) with the SoI. Typically, humans also interface with the SoI throughout the SoI’s life cycle stages. Interoperating systems are interfacing systems that interface with the SoI in its operational environment to perform a common function that supports the SoI’s primary purpose. The set of SoI and interoperating systems can be seen as a system of systems (see Section 4.3.6). Enabling systems are external systems that facilitate the life cycle activities of the SoI but are not a direct element of the operational environment. The enabling systems provide services that are needed by the SoI during one or more life cycle stages. Some enabling systems share an interface with the SoI and some do not. Examples of enabling systems include collaboration development systems, production systems, and logistics support systems. Table 1.3 gives examples of these types of external systems.


TABLE 1.3 Examples for systems interacting with the SoI



SOI and External Systems Interfacing System Interoperating System Enabling System

Aircraft

Flight simulator No No Yes

Fuel Truck Yes No Yes

Remote Maintenance Yes Yes Yes

Communication system Yes Yes No

Runway Yes No No

Automobile

SE Tool No No Yes

Car carrier Yes No Yes

Diagnosis system Yes Yes Yes

Parking assistant Yes Yes No

Windshield snow cover Yes No No

INCOSE SEH original table created by Endler. Usage per the INCOSE Notices page. All other rights reserved.





During the life cycle stages for an SoI, it is necessary to concurrently consider interfacing, interoperating, and enabling systems along with the SoI. Otherwise, important requirements may not be identified, which will lead to significant costs in the further course of system development. Typical pitfalls include assuming that a new enabling system will come online in time to support the development of the SoI or that an existing enabling system will be available for the duration of the life cycle of the SoI. A delay in an enabling system coming online or the loss of an existing enabling system can lead to significant issues with the development and deployment of the SoI. In addition, horizontal and vertical integration considerations (see Section 2.3.5.8) may arise from the system context represented by interfacing, interoperating, and enabling systems.




1.3.4 System Innovation Ecosystem


Sections 1.3.1 and 1.3.3 describe the system boundary and external systems in the overall context of the SoI. This section focuses on learning. Over single, and eventually multiple life cycles, engineered system innovation may be viewed as a form of group learning by “ecosystems” composed of individuals, teams, enterprises, supply chains, markets, and societies. Effective innovation requires effective learning and adaptation at a group level across these ecosystems and brings related challenges. To represent, plan, analyze, and improve such performance, the neutral descriptive System Innovation Ecosystem Pattern has been found to be useful (Schindel and Dove, 2016) (Schindel 2022b). Figure 1.6 provides a high-level view of that multiple-layered descriptive model, further discussed as a formal pattern in Section 3.2.6.




FIGURE 1.6 System innovation ecosystem pattern. From Schindel and Dove (2016) and Schindel (2022b). used with permission. All other rights reserved.





Figure 1.6 identifies three top-level system boundaries:

System 1 – The Engineered System may be a product developed for a market, a defense system created under contract, a service-providing system, or other system subject to SE life cycle management. It is shown in its larger environment, the Life Cycle Project Management System (System 2). System 1 examples include Medical Devices, Aircraft, Consumer Packaged Goods, and Gas Turbine Engines. This system is typically referred to as the engineered SoI in this handbook.

System 2 – The Life Cycle Project Management System provides the environment of System 1 over its life cycle, including the life cycle management processes responsible for System 1—described in Part II. System 2, a socio-technical system of people, processes, and facilities, is responsible to learn about System 1 and its environment, and to effectively apply that learning in the life cycle management by System 2. System 2 examples include System Requirements Definition Processes, Verification Processes, Product Manufacturing Processes, Product Distribution Processes, Product Sustainment Systems, Product Life Cycle Management (PLM) Information Systems, and Product Digital Twin Systems.

System 3 – The Enterprise Process and Innovation System contains System 2 and is responsible for learning about and improving System 2. In that sense, System 3 includes formal life cycle management for the processes of System 2. System 3 contains the “organizational change management” for advancing and adapting System 2 as a recognized formal system in its own right. System 3 examples include Product Life Cycle Management Processes, Program and Project Configuration and Tailoring Processes, Engineering Recruitment, Education, and Advancement Processes, Product Development Methodology Descriptions, Engineering Automation Tooling Acquisition and Development, Development Process Performance Analysis Systems, Regulatory Authorities, Engineering Professional Societies, and Engineering Facilities Construction and Acquisition.



The System Innovation Ecosystem Pattern emphasizes the learning and execution aspects of the enterprise ecosystem and directly integrates the SE life cycle processes described in Part II of this Handbook. Those processes are applied to two different managed SoIs (System 1 and System 2) and explicate the processes of learning versus application in each of the SE life cycle processes, along with how, and how effectively, execution is coupled with prior learning. The (configurable) System Innovation Ecosystem Pattern intentionally describes any engineering environment, whether effective in its learning and adaptation or not. It is intended as a descriptive, not prescriptive, reference model that can be used to plan and analyze any engineering and life cycle management ecosystem. So, while the “learned models” shown inside System 2 describe knowledge of System 1 (The Engineered System), the models shown inside System 3 describe knowledge of System 2 (The Life Cycle Project Management System).

The formal System Innovation Ecosystem Pattern includes the ability to be configured specific to a local enterprise, project, or supply chain, and for use to plan a series of migration increments representing advancing System 2 capabilities. For more details, refer to Section 3.2.6 and the INCOSE S*Patterns Primer (2022).




1.3.5 The Hierarchy within a System


As explained in Section 1.1, “A system is an arrangement of parts or elements.” A system element is a member of a set of elements that constitute a system (ISO/IEC/IEEE 15288, 2023). A system element is a discrete part of a system that can be implemented to fulfil specified requirements. Hardware, software, data, humans, processes (e.g., processes for providing service to users), procedures (e.g., operator instructions), facilities, materials, and naturally occurring entities or any combination are examples of system elements.

In the ISO/IEC/IEEE 15288 (2023) usage of terminology, the system elements can be atomic (i.e., not further decomposed), or they can be systems on their own merit (i.e., decomposed into further subordinate system elements). A system element that needs only a black box (also known as opaque box) representation (i.e., external view) to capture its requirements and confidently specify its real-world solution definition can be regarded as atomic. Decisions to make, buy, or reuse the element can be made with confidence without further specification of the element.

One of the challenges of system definition is to understand what level of detail is necessary to define each system element and the interrelations between elements. The integration of the system elements must establish the relationship between the effects that organizing the elements has on their interactions and how these effects enable the system to achieve its purpose. One approach to defining the elements of a system and their interrelations is to identify a complete set of distinct system elements with regard only to their relation to the whole (system) by suppressing details of their interactions and interrelations. These considerations lead to the concept of hierarchy within a system. This is referred to as a partitioning of the system and the end result is called a Product Breakdown Structure (PBS) (see Section 2.3.4.1). As stated above, each element of the PBS can be either atomic or it can be at a higher level that could be viewed as a system itself. At any given level, the elements are grouped into distinct subsets of elements subordinated to a higher-level system, as illustrated in Figure 1.7. Thus, hierarchy within a system is an organizational representation of system structure using a partitioning relation.




FIGURE 1.7 Hierarchy within a system. From ISO/IEC/IEEE 15288 (2023). used with permission. All other rights reserved.





The art of defining a hierarchy within a system relies on the ability of the SE practitioner to strike a balance between clearly and simply defining span of control and resolving the structure of the SoI into a complete set of system elements that can be implemented with confidence. Urwick (1956) suggested a possible heuristic for span of control, recommending that decomposition of any object in a hierarchy be limited to no more than seven subordinate elements, plus or minus two (7 +/–2). Others have also found this heuristic to be useful in other contexts (Miller, 1956). A level of design with too few subordinate elements is unlikely to have a distinct design activity. In this case, both design and verification activities may contain redundancy. In case of too many subordinate elements, it may be difficult to manage all the interfaces between the subordinate elements. In practice, the nomenclature and depth of the hierarchy can and should be adjusted to fit the nature of the system and the community of interest.

The interrelationships of system elements at a given architecture level of decomposition can be referred to as the horizontal view of the system. The horizontal view also includes requirements; integration, verification, or validation activities and results; various other related artifacts; and external elements. How the horizontal elements, activities, results, and artifacts are derived from or lead to higher-level systems and lower-level system element can be referred to as the vertical view of the system.




1.3.6 Systems States and Modes


States and modes are two related concepts that are used for defining and modeling system functional architectures and for modeling and managing system behaviors.

A state can be defined as:

An observable and measurable … attribute used to characterize the current configuration, status, or performance-based condition of a System or Entity.(Wasson, 2016)



States are snapshots of a set of variables or measurements needed to describe fully the system’s capabilities to perform the system’s functions. State variables are the multidimensional list of variables that determine the state of the system. The list of variables does not change over time, but the values that these variables take do change over time (Buede and Miller, 2016). In control theory, the state of a dynamic system is a set of physical quantities, the specification of which (in Newtonian dynamics) completely determines the evolution of the system (Friedland, 2012). From the perspective of MBSE (see Section 4.2.1), “The state of the system is the most concise description of its past history.”

The current system state and a sequence of subsequent inputs allow computation of the future states of the system. The state of a system contains all the information needed to calculate future responses without reference to the history of inputs and responses (Chapman, et al., 1992). Bonnet et al. (2017) states, “A state often directly reflects an operating condition or status on structural elements of the system (operational, failed, degraded, absent, etc.). States are also likely to represent the physical condition of a system element (full or empty fuel tank, charged or discharged battery, etc.). States can also be exploited to represent environment constraints (temperature, humidity, etc.).” If the system is transitioning from one state to another as time progresses, then time is one of the key attributes of the system. To monitor the system and manage it, the manager observes a state variable that is comprised of the appropriate collection of the system’s attributes (Shafaat and Kenley, 2020).

A mode can be defined as:

A distinct operating capability of the system during which some or all of the system’s functions may be performed to a full or limited degree.(Buede and Miller, 2016)



For a personal computer, examples of modes are “off,” “on,” “waking up,” “waiting,” “reading from disk,” “writing to disk,” “computing,” “printing,” and, of course, “down” (Wymore, 1993). Modes are part of the system functional architecture and can be derived by affinity analysis of system use cases (Wasson, 2016). Various perspectives can be used to define the distinct operating modes of a system (Bonnet, et al., 2017), such as:

the phases of mission operations (taxiing, taking-off, cruising, landing, etc.),

the system operating conditions (connected, autonomous, etc.),

the specific conditions in which the system is used (test, training, maintenance, etc.).



Transitioning from one mode to another is the result of decisions made by the system itself, its users, or external actors in order to adapt to new needs or new contexts (Bonnet, et al., 2017). Decisions that result in the system transitioning from one mode to another are typically based on the observed values of the state variables. When using models to depict system behavior, mode transitions are often based on triggering events that meet specified entry and exit criteria (Wasson, 2016).




1.3.7 Complexity


Systems engineering practitioners encounter a number of systems with simple, complicated, and complex characteristics. Many traditional systems engineering approaches and techniques work well for simple and complicated systems but do not handle complexity in systems (i.e., complex systems) well. Conversly, approaches and techniques that handle complexity well are also used in some complicated system contexts, especially when complex characteristics exist in some aspects of the system. Thus, care must be used to ensure the SE approaches and techniques for the SoI are appropriate and tailored for the type of system, especially with respect to its complexity. Complex systems are defined in the INCOSE publication “A Complexity Primer for Systems Engineers” (INCOSE Complexity Primer, 2021). A complex system has elements, the relationship between the states of which are weaved together so that they are not fully comprehended, leading to insufficient certainty between cause and effect. Complicated systems are less challenging. A complicated system has elements, the relationship between the states of which can be unfolded and comprehended, leading to sufficient certainty between cause and effect. Systems can also be simple. A simple system has elements, the relationship between the states of which, once observed, are readily comprehended. Complex systems can provide beneficial solutions yet also contain challenging characteristics. Complexity can result in positive behavior, such as self-organization and virtuous cycles of activity. However, intricate networks of evolving cause-and-effect relationships can lead to novel, nonlinear, and counterintuitive dynamics over time, resulting in suboptimal system operation, unintended consequences, and system obsolescence. The INCOSE Complexity Primer identifies 14 distinguishing characteristics that define complexity in a system. These characteristics provide insights into complexity, realizing that systems are not wholly complex: they are typically complex in some characteristics and complicated or even simple in others.

Traditional SE process for complicated systems takes a reductionist approach, whereby the problem is procedurally broken down into its parts (i.e., decomposition), solved, and reassembled to form the whole solution. This approach works well for complicated problems, where fixed, deterministic, or predictable patterns of behavior are required. However, these processes often do not perform well in complex environments, such as the challenges involved in designing autonomous vehicles or other socio-technical systems. A fundamentally different approach is required to understand the unexpected emergent interaction between the parts in the context of the whole through iterative exploration and adaptation (Snowden and Boone, 2007).

SE for complex systems requires a balance of linear, procedural methods for sorting through complicated and intricate tasks (e.g., systematic activity) and holistic, nonlinear, iterative methods for harnessing complexity (e.g., systems thinking). Complexity is not antithetical to simplicity, as even relatively simple systems can generate complex behavior. The INCOSE Complexity Primer provides guidance in the methods, approaches, and tools that may benefit complex systems engineering.