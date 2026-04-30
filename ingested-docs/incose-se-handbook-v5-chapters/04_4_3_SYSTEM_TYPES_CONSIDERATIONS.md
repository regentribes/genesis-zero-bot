SYSTEM TYPES CONSIDERATIONS


The concept of SoI was introduced in Section 1.3.1. The type of SoI has significant implications on SE. This section introduces SE considerations for the following types of SoIs:

Greenfield/Clean Sheet Systems

Brownfield/Legacy Systems

Commercial-off-the-Shelf (COTS)-Based Systems

Software-Intensive Systems

Cyber-Physical Systems (CPS)

System of Systems (SoS)

Internet of Things (IoT)/Big Data-Driven Systems

Service Systems

Enterprise Systems



Note that other types of SoIs exist.





4.3.1 Greenfield/Clean Sheet Systems


“Greenfield” and “brownfield” are terms used in real estate. Greenfield land is previously undeveloped space, such as a (green) farmer’s field. Brownfield land has been previously developed, typically has existing structures and services in place, and may contain undesirable or hazardous materials (also known as waste) that must be remediated. Greenfield SE, also known as “clean sheet” or “blank slate” SE, involves systems that are new designs and have no, or limited, legacy systems constraints, other than system interfaces. Given the incremental and spiral development life cycle approaches of today, a greenfield system may evolve toward brownfield even before it is delivered, from the developer’s perspective.

Traditionally, SE has been taught by considering systems from a greenfield perspective. One starts with a “clean or blank sheet of paper” and determines the set of stakeholders and their needs and requirements, translates them into system requirements, architects and designs a system solution, implements the system elements, and then integrates, verifies, and validates the system elements and the system solution. While this is an effective way to teach SE and to prepare practitioners with skills applicable to the entire system life cycle, few system development efforts are truly greenfield. Greenfield, therefore, is an almost theoretical situation that is rarely seen in practice. The remaining considerations provide different perspectives and implications beyond greenfield SE.

Sometimes, it can be quite traumatic for organizations that make brownfield updates to its legacy products over a long period of time to transition from brownfield development back to greenfield (Axehill, 2021). They may need to “relearn” how to do greenfield.




4.3.2 Brownfield/Legacy Systems


As described in Section 4.3.1, brownfield (and greenfield) are terms used in real estate. Brownfield land has been previously developed, typically has existing structures and services in place, and may contain undesirable or hazardous materials (also known as waste) that must be remediated. Brownfield SE, also known as “legacy” SE, involves significant modifications, extensions, or replacement of an existing “as-is” system in an existing environment to an updated “to-be” system. Brownfield systems often contain waste (e.g., technical debt) that may need to be remediated (Seacord, et al., 2003) (Hopkins and Jenkins, 2008). “In-service” systems are another example of brownfield system (Kemp, 2010) (Van De Ven, et al., 2012). Brownfield systems typically have explicit continuity requirements, where the operation of the as-is system needs to continue, resulting in a deliberate transition to the updated system.

The nature of greenfield and brownfield systems drives different life cycle approaches that reflect different areas of emphasis. Table 4.1 lays out some of the key differences across a set of aspects important to SE (Walden, 2019) (Baley and Belcham, 2010). This impacts not only the system solution, but also the team that is put in place to develop the system. As with all development efforts, SE processes need to be tailored to fit the needs of a given project (see Section 4.1). SE in a brownfield environment augments the SE life cycle processes described in this handbook with site surveys and reconstruction activities to understand the as-is systems, identify gaps, and engineer the to-be system (Walden, 2019).


TABLE 4.1 Considerations of greenfield and brownfield development efforts



Aspect Greenfield Brownfield

Life Cycle Stage(s) (of Initial SoI) Concept, Development Utilization, Support

Focus New or novel features Maintenance or adding new features while retaining select legacy functionality

Maturity (of Initial SoI) Low to Moderate High for maintenance;

Mix for existing system and environment, plus new development for upgrade or replacement



Architecture and Design Review Reviewed and modified at multiple levels Reviewed only when significant updates are made/performed

Verification The entire SoI typically needs to verified Only the updated and impacted parts of the system need to be verified (there may be regression testing for the unchanged parts)

Validation The entire SoI typically needs to validated with the customer/user The entire SoI (including changes) typically needs to validated with the customer/user to check for new emergent behavior

Manufacturing/Production May be in place if using the existing line, or is developed (or tailored) as development progresses Mostly in place, reverse engineering of existing designs may be required if the original design can no longer be produced (e.g., due to as-is use of banned materials)

Maintenance and Logistics Developed (or tailored) as development progresses Mostly in place, but may need changes or upgrades depending on the replacement system elements

Practices and Processes Developed (or tailored) as work progresses Mostly in place, though not necessarily relevant to the new team

Team Composition Newly formed group Mix of old and new, bringing both historical biases and fresh ideas

From Walden (2019) derived from Baley and Belcham (2010). Used with permission. All other rights reserved.





4.3.3 Commercial-off-the-Shelf (COTS)-Based Systems


One of the key trade-off studies SE practitioners perform is the “make vs. buy” decision on system elements. “Make” represents custom-built solutions; “buy” represents outsourced development and commercial-off-the-shelf (COTS) solutions. Directed use also can result in COTS. Most systems have some COTS content. The following characteristics can be useful when deciding if a particular system or system element can be characterized as COTS (Oberndorf, et al., 2000) (Tyson, et al., 2003):

Sold, leased, or licensed to the general public;

Offered by a vendor trying to profit from it;

Supported and evolved by the vendor, who retains the intellectual property rights;

Vendor (not acquirer) controls the frequency of the product’s maintenance and updates;

Available in multiple, identical copies;

Used without hardware or source code modification.



The promise of COTS is to save development time, reduce technical risk, reduce time-to-market, reduce cost-to-market, and take advantage of latest technology. However, often these promises are not realized. Considerations for COTS-based systems include (Long, 2000):

COTS products not built to your specific requirements (including missing functionality, extra functionality, and unwanted behaviors).

Unique, or different than expected, interfaces, including a vendor’s use of proprietary data formats and/or communications protocols, may occur.

Vendor claims and decisions may impact schedule.

The details needed to understand how COTS products may impact the safe and secure operation of the SoI may not be readily available, including the trustworthiness of the vendor, the use of open-source software, and the use of third-party software of unknown origin.

COTS product may be insufficiently documented.

“Not Invented Here” (NIH) syndrome may deter engineers from using COTS.

Delivery times may not be met.

Special integration challenges may occur.

COTS products are often not verified to your specific requirements and may lack verification data for the operating environment for the SoI.

“Sole Source” suppliers result in more risk.

Need to consider the entire life cycle cost (LCC) of maintenance and technology rolls/refresh due to COTS obsolescence and diminishing manufacturing sources and material shortages (DMSMS) (Note: IEC 62402 (2019) provides guidance for establishing a framework for obsolescence management process which is applicable through all stages of system life cycle).



There are differences in approaches to SE for COTS-based systems development. Some of the key COTS-based SE considerations are shown in Table 4.2. Effective use of COTS generally requires COTS evaluation starting during needs analysis. In some circumstances, an “internal sales pitch” for each viable candidate COTS-based system needs to be developed, highlighting which requirements are met, which are partially or not met, and what additional capabilities and cost advantages (now and potentially in the future) each possible system provides. For an organization which has only done “make” system development in the past, moving to a COTS-based development requires a different mind-set and different development skills, including the new role of COTS integrator. These skills are often different than those needed for non-COTS-based system development.


TABLE 4.2 Considerations for COTS-based development efforts



Aspect Traditional Systems Engineering COTS-Based Considerations

Focus The SoI The SoI as well as how potential COTS products in the marketplace could be assembled to meet most/all the needs

Stakeholder Needs and Requirements Fairly explicit stakeholder requirements Flexible and prioritized capabilities stated in broad terms

System Requirements and Functionality Requirements and functionality are defined and allocated based on technical considerations COTS capabilities and functionality form the basis for the system requirements allocation and evolution and COTS may introduce additional system-level constraints

System Element Requirements Extra or missing system element requirements are typically bad Need to strike a balance between what the system needs and what the market can provide, missing or extra COTS requirements may be a reality due to the marketplace and they may also necessitate extra COTS wrappers and glue

System Architecture and Design Focus is on optimizing the SoI Focus is on optimizing the set of COTS and custom components that make up the SoI

Integration, Verification, and Validation Done with known (internal) system element owners Can typically get an early version of the system up and operating dramatically sooner than with a “make” system, criteria more difficult to establish since COTS performance must satisfy the market requirements while balancing the needs of the system, execution and defect resolution more difficult due to external COTS element owners

Technical Management Well understood set of processes More challenging decision environment, additional risks are present for COTS, and potentially increased configuration and information management (CM and IM) activities

Agreements Acquisition agreements are primarily outsourced development efforts Acquisitions also include COTS items and must consider other aspects such as licensing, additional COTS vendor support, and obsolescence management

Quality Characteristics Known with internal team support and data, but the full picture may not be obtainable until after system deployment For proven COTS, can be determined up front, may have to rely on COTS vendors for some data, consideration of life cycle cost (LCC) is critical for COTS

INCOSE SEH original table created by Walden. Usage per the INCOSE Notices page. All other rights reserved.





4.3.4 Software-Intensive Systems


ISO/IEC/IEEE 42010 (2022) defines a software-intensive system as:

Any system where software contributes essential influences to the design, construction, deployment, and evolution of the system as a whole.



Software, like physical entities, is encapsulated in system elements. Software elements often contribute to system functionality, behavior, quality characteristics, interfaces, and observable performance indicators for software-intensive systems. Encapsulated software is sometimes custom-built and is sometimes obtained by using software elements from libraries. Reused software elements may be modified by tailoring them for intended use. Also, software elements may be licensed from software vendors. In most cases, licensed software packages cannot be modified. Software engineers sometimes encapsulate licensed software packages in software shells or wrappers that provide the interfaces needed to integrate the needed capabilities of the software into a system while masking unwanted capabilities.

Software is widely incorporated in systems and provides “essential influences” because software is a malleable entity composed of textual and iconic symbols that in many cases, but not always, can be constructed, modified, or procured sooner and at less expense than fabricating, modifying, or procuring physical elements that have equivalent capabilities. In some cases, but not always, software elements can provide capabilities that would be difficult to realize in hardware.

But in some cases, a physical element of equivalent capability may be preferred to a software element because software may not provide certifiable safety, security, or performance at the necessary levels of assurance. Making tradeoffs between physical elements and software elements is an essential aspect of developing and modifying software-intensive systems. Trade studies are best conducted when SE practitioners consult physical engineers and software engineers who are working collaboratively.

Interfaces provided by software in a software-intensive system can provide passive pass-through connections or, if desired, software included in an interface can actively coordination interactions among the connected elements. Software interfaces may be internal and/or external to a system. Internal software interfaces can provide connections that coordinate interactions among physical elements, among software elements, and between physical elements and software elements. External software interfaces can provide passive and active connections to entities in the physical environment, including humans and other sentient entities that are software-enabled, plus connections to the external interfaces of other physical-only, software-only, and software-intensive systems. A “software-only” system is a software application implemented on a stable computing platform. The computing platform includes hardware and software that support the software application. The platform is often implemented using commodity items.

Sometimes the essential influences of software are observable in a system’s external interfaces, as in human-user interface displays, and sometimes not, as in the interfaces for direct interaction with an external system. In the latter case, the software is said to be embedded in the SoI because performance of the interface is not directly observable by a human, although the effects of interface performance may be observable. Software is also used to provide interfaces among the systems that constitute an SoS. Software can contribute to functionality, behavior, quality attributes, external interfaces, and performance indicators for a composite SoS.

Developing and modifying software-intensive systems presents challenges for SE practitioners when partitioning system requirements and elements of the architecture, allocating performance parameters to physical elements and to software elements, establishing and controlling physical-software interfaces, and facilitating integration of physical elements with software elements (Fairley, 2019). These challenges sometimes arise because the culture, terminology, processes, and practices of software engineering are unfamiliar to SE practitioners and conversely, the various aspects of SE may be unfamiliar to software engineers. Techniques for improving communication between SE practitioners and software engineers are presented in Section 5.3.1 and in Fairley (2019).




4.3.5 Cyber-Physical Systems (CPS)


CPS are the integration of physical and cyber (software) processes in which the software monitors and controls the physical processes and is, in turn, affected by them. CPS are enabled by sensors and feedback loops and their provenance has increased because of significant advances in sensor technology and affordability. Figure 4.6 illustrates the behavior of a CPS: sensors may be deployed in the system hardware and/or its environment. Sensor data is used by software algorithms to control the hardware in responses to changes in the environment and/or in the hardware itself. The algorithms control the dynamic behavior of the CPS to achieve one or more goals, which could include homeostasis (maintaining equilibrium). An example might be an automobile with sensors to detect obstacles (in the environment) and take evasive action if an obstacle is detected ahead (the actuators would be steering or braking). Other sensors may be deployed to monitor the health of the vehicle, for instance, wear of the brake pads may trigger an action to modify the driving or notify the owner of the need for maintenance. Digital twins are also an important concept in this regard that refers to a digital surrogate that is a dynamic physic-based description of physical assets (physical twin), processes, people, places, systems, and devices that can be used for various purposes. The digital representation provides both the elements and the dynamics of how an Internet of Things (IoT) device operates and lives throughout its life cycle (see Section 4.3.7).




FIGURE 4.6 Schematic diagram of the operation of a cyber-physical System. IncoSE SEH original figure created by Henshaw. Usage per the IncoSE notices page. All other rights reserved.





The CPS concept is closely aligned to Industry 4.0, an initiative to revolutionize industry through so-called smart systems (Kagermann, 2013). CPS always include both software and hardware and are almost always networked, in which case they are Cyber-Physical Systems of Systems (CPSoS). If the individual CPS are networked using Internet Protocols, then they form part of an IoT, but they may interact through other mechanisms (e.g., mechanical, electromagnetic, thermal). The relationships between the concepts of SoS, CPS, and IoT are illustrated in Figure 4.7. The “Things” in IoT are constituent systems and they are always networked, and therefore, always an SoS.




FIGURE 4.7 The relationship between cyber-physical Systems (cpS), Systems of Systems (SoSs), and an Internet of Things (IoT). From Henshaw (2016). Used with permission. All other rights reserved.





CPS are a feature of almost every industry and many aspects of society. They provide automated, and even autonomous, control of technologies ranging from robotic manufacture to SMART cities and from automated insulin delivery to control of critical infrastructure. They may form a contribution to business models that include physical systems and can even underpin a business concept by providing resilience or cost savings.

There are many implications of CPS for engineers. Two of the most significant are complexity and ethics. The increased level of complexity is due to both extensive networks and the problem of modeling the combination of physical dynamics with computational processes. Lee (2015) has pointed out that such models are nearly always nondeterministic due to the lack of temporal semantics in the cyber and physical modeling programs. This has significant implications for modeling and verification within the SE processes. The lack of determinism, together with questions concerning the transfer of decision making from humans to machines have ethical challenges that engineers must face in terms of definition and realization of CPS (European Parliament Research Service, 2016).

The scope and dimensions of CPS is well-illustrated by the CPS Concept Map (Asare, et al., 2012), which essentially defines CPS as feedback systems that are applicable across a wide range of applications such as infrastructure, healthcare, manufacturing, military and many more. One might consider them relevant to any application in which the system is required to be dynamic and the control thereof is managed by software. The concept map also highlights the explicit need for security and safety considerations in design as well as the challenges of verification and validation in large complex systems. It points toward the need for improved modeling and, indeed, progress has been made in the use of MBSE for CPS development through a framework to implement suitable tool chains (Lu, 2019).

Given that software forms an integral part of many systems and devices, it can reasonably be stated that SE practitioners are very often concerned with CPS and usually CPSoS.




4.3.6 Systems of Systems (SoS)


ISO/IEEE/IEC 21839 (2019) defines a System of Systems (SoS) as:

A set of systems or system elements that interact to provide a unique capability that none of the constituent systems can accomplish on its own.



Constituent systems can be part of one or more SoS. Each constituent system is a useful system by itself, having its own development, management goals, and resources, but interacts within the SoS to provide the unique capability of the SoS (ISO/IEEE/IEC 21839, 2019).

The following characteristics can be useful when deciding if a particular SoI can better be understood as an SoS (Maier, 1998):

Operational independence of constituent systems;

Managerial independence of constituent systems;

Geographical distribution;

Emergent behavior;

Evolutionary development processes.



Of these, operational independence and managerial independence are the two principal distinguishing characteristics for applying the term SoS.

Figure 4.8 illustrates the concept of an SoS. The air transport system is an SoS comprising multiple aircraft, airports, air traffic control systems, and ticketing systems, which along with other systems such as security and financial systems facilitate passenger transportation. There are equivalent ground and maritime transportation SoS that are all in turn part of the overall transport system (an SoS in the terms of this description).




FIGURE 4.8 Example of the systems and systems of systems within a transport system of systems. From ISo/IEc/IEEE 21841 (2019). Used with permission. All other rights reserved.





There are three international standards that provide useful guidance on SoS:

ISO/IEC/IEEE 21839 (2019)—“System of systems (SoS) considerations in life cycle stages of a system” focuses on the SE of an individual constituent system and identifies considerations to be addressed as the engineering of the systems progresses from concept through retirement.

ISO/IEC/IEEE 21840 (2019)—“Guidelines for the utilization of ISO/IEC/IEEE 15288 in the context of system of systems (SoS)” provides guidance on the application of the processes to the special case of SoS, including considerations for how constituent systems relate within the SoS.

ISO/IEC/IEEE 21841 (2019)—“Taxonomy of systems of systems” lays out a taxonomy of SoS types based on authority relationships as (shown in Table 4.3)




TABLE 4.3 SoS types



Directed The SoS is created and managed to fulfill specific purposes and the constituent systems are subordinated to the SoS. The constituent systems maintain an ability to operate independently; however, their normal operational mode is subordinated to the central managed purpose.

Acknowledged The SoS has recognized objectives, a designated manager, and resources for the SoS; however, the constituent systems retain their independent ownership, objectives, funding, and development and sustainment approaches. Changes in the systems are based on cooperative agreements between the SoS and the constituent systems.

Collaborative The constituent systems interact more or less voluntarily to fulfill agreed upon central purposes. The central players collectively decide how to provide or deny service, thereby providing some means of enforcing and maintaining standards.

Virtual The SoS lacks a central management authority and a centrally agreed upon purpose for the SoS. Large-scale behavior emerges-and may be desirable-but this type of SoS must rely on relatively invisible mechanisms to maintain it.

From ISO/IEC/IEEE 21841 (2019) derived from SEBOK. Used with permission. All other rights reserved.





ISO/IEC/IEEE 21840 (2019) guidance on application of ISO/IEC/IEEE 15288 (2023) life cycles processes (see Section 2.3) is based on the differences between systems and SoS and the impact on the SE processes as shown in Table 4.4.


TABLE 4.4 Impact of SoS considerations on the SE processes



SE Process Implementation as Applied to SoS

Agreement Processes Because there is often no top level SoS authority, effective agreements among the systems in the SoS are key to successful SoSE.

Organizational Project Enabling Processes SoSE develops and maintains those processes which are critical for the SoS within the constraints of the system level processes.

Technical Management Processes SoSE implements Technical Management Processes applied to the particular considerations of SoS engineering - planning, analyzing, organizing, and integrating the capabilities of a mix of existing and new systems into a system of systems capability while systems continue to be responsible for technical management of their systems.

Technical Processes SoSE Technical Processes define the cross-cutting SoS capability, through SoS level business or mission analysis and stakeholder needs and requirements definition. SoS architecture and design frame the planning, organization, and integration of the constituent systems, constrained by system architectures. Development, integration, verification, transition, and validation are implemented by the systems. with SoSE monitoring and review. SoSE integration, verification, transition and validation applies when constituent systems are integrated into the SoS and performance is verified and validated.

From ISO/IEC/IEEE 21840 (2019) adapted from SEBOK. Used with permission. All other rights reserved.





Dahmann (2014) identified the following challenges that influence the engineering of an SoS:

SoS authorities—In an SoS, each constituent system has its own local “owner” with its stakeholders, users, business processes, and development approach. As a result, the type of organizational structure assumed for most traditional SE under a single authority responsible for the entire system is absent from most SoS. In an SoS, SE relies on crosscutting analysis and on composition and integration of constituent systems, which in turn depend on an agreed common purpose and motivation for these systems to work together toward collective objectives that may or may not coincide with those of the individual constituent systems.

Leadership—Recognizing that the lack of common authorities and funding poses challenges for SoS, a related issue is the challenge of leadership in the multiple organizational environments of an SoS. This question of leadership is experienced where a lack of structured control normally present in SE requires alternatives to provide coherence and direction, such as influence and incentives.

Constituent systems—SoS are typically composed, at least in part, of in‐service systems, which were often developed for other purposes and are now being leveraged to meet a new or different application with new objectives. This is the basis for a major issue facing the application of SE to SoS, that is, how to technically address issues that arise from the fact that the systems identified for the SoS may be limited in the degree to which they can support the SoS. These limitations may affect initial efforts at incorporating a system into an SoS, and systems’ commitments to other users may mean that they may not be compatible with the SoS over time. Further, because the systems were developed and operate in different situations, there is a risk that there could be a mismatch in understanding the services or data provided by one system to the SoS if the particular system’s context differs from that of the SoS.

Capabilities and requirements—Traditionally (and ideally), the system engineering process begins with a clear, complete set of initial user requirements and provides a disciplined approach to develop and evolve a system to meet these and emerging requirements. Typically, SoS are composed of multiple independent systems with their own requirements, working toward broader capability objectives. In the best case, the SoS capability needs are met by the constituent systems as they meet their own local requirements. However, in many cases, the SoS needs may not be consistent with the requirements for the constituent systems. In these cases, SE of an SoS needs to identify alternative approaches to meeting those needs either through changes to the constituent systems or through the addition of other systems to the SoS. In effect, this is asking the systems to take on new requirements with the SoS acting as the “user.”

Autonomy, interdependence, and emergence—The independence of constituent systems in an SoS is the source of a number of technical issues when applying SE to an SoS. The fact that a constituent system may continue to change independently of the SoS, along with interdependencies between that constituent system and other constituent systems, adds to the complexity of the SoS and further challenges SE at the SoS level. These dynamics can lead to unanticipated effects at the SoS level leading to unexpected or unpredictable behavior in an SoS even if the behavior of the constituent systems is well understood.

Testing—The fact that SoS are typically composed of constituent systems that are independent of the SoS poses challenges in conducting end-to-end SoS testing, as is typically done with systems. First, unless there is a clear understanding of the SoS-level expectations and measures of those expectations, it can be very difficult to assess the level of performance as the basis for determining areas that need attention or to ensure users of the capabilities and limitations of the SoS. Even when there is a clear understanding of SoS objectives and metrics, testing in a traditional sense can be difficult. Depending on the SoS context, there may not be funding or authority for SoS testing. Often, the development cycles of the constituent systems are tied to the needs of their owners and original ongoing user base. With multiple constituent systems subject to asynchronous development cycles, finding ways to conduct traditional end-to-end testing across the SoS can be difficult if not impossible. In addition, many SoS are large and diverse, making traditional full end-to-end testing with every change in a constituent system prohibitively costly. Often, the only way to get a good measure of SoS performance is from data collected from actual operations or through estimates based on modeling, simulation, and analysis. Nonetheless, the SoS SE team needs to enable continuity of operation and performance of the SoS despite these challenges.

SoS principles—SoS is a an area where there has been limited attention given to ways to extend systems thinking to the issues particular to SoS. The community is beginning to identify and articulate the crosscutting principles that apply to SoS in general and to develop working examples of the application of these principles. There is a major learning curve for the average SE practitioner moving to an SoS environment and a problem with SoS knowledge transfer within or across organizations.



Beyond these general SE challenges, in today’s environment, SoS pose particular issues from a security perspective. This is because constituent system interface relationships are rearranged and augmented asynchronously and often involve COTS elements from a wide variety of sources. Security vulnerabilities may arise as emergent phenomena from the overall SoS configuration even when individual constituent systems are sufficiently secure in isolation.

The SoS challenges cited in this section require SE approaches that combine both the systematic and procedural aspects described in this handbook with holistic, nonlinear, iterative methods. There is a growing set of approaches to applying SE to SoS (Cook and Unewisse, 2019). These include SoS life cycle engineering approaches such as the SoS Wave Model (Dahmann, et al., 2011) and the Designing for Adaptability and evolutioN in System of Systems Engineering (DANSE). These approaches address both functionality of constituents to create coherent aggregate SoS capability (Axelsson, 2020) as well as management of interfaces among constituents (Hoehne, 2020).




4.3.7 Internet of Things (IoT)/Big Data-Driven Systems


SE is based on engineering requirements, engineering calculations, testing, modeling, and simulations—and all are based on data or data generation. SE practitioners often make decisions based on intuition, previous experience, or qualitative assessments. The 4th Industrial Revolution, with its proliferation of sensors of various types and big data analytics, creates an opportunity for SE, as a discipline, and for SE practitioners, as professionals and decisions makers, to be more data-driven. The following recommendations apply to modern SE tasks and decisions:

Bring as much diverse data and as many diverse viewpoints to maximize the generation of information quality.

Use data to develop a deeper understanding of the business context and the problem at hand.

Develop an appreciation for the impact of variation, both in data and in the overall business.

Deal with uncertainty, which means that SE also recognizes mistakes.

Recognize the importance of high-quality data and invest in trusted sources and in making improvements.

Conduct good experiments and research to supplement existing data and address new questions.

Recognize the criteria used to make decisions and adapt under varying circumstances.

Realize that making a decision is only the first step; SE practitioners must keep an open mind and revise decisions if new data suggests a better course of action.

Work to bring new data and new data technologies into the organization.

Learn from mistakes and help others to do so, by applying lessons-learned processes.

As SE practitioners, strive to be a role model when it comes to data, working with leaders, peers, and subordinates to help them become data driven.



There are three general goals in analyzing data:

Prediction: To predict the response to future values of the input variables.

Estimation: To infer how response variables are associated with input variables.

Explanation: To understand the relative contribution of input variables to response values.



Predictive modeling is the process of applying models and algorithms to data for the purpose of predicting new observations. In contrast, explanatory models aim to explain the causality and relationship between the independent variables and the dependent variables. Classical statistics focuses on modeling the stochastic system generating the data. Statistical learning, or computer age statistics, builds on big data and the modeling of the data itself. If the former aimed at properties of the model, the latter is looking at the properties of computational algorithms. SE practitioners need to be educated in data sciences to enable them to practice the above tools and methods as an integral part of SE.

Data analytics and IoT are wide-scope revolutions of digital surroundings. They create complex CPS that add new functionalities and capabilities to the existing physical environment. Designing an IoT system that has analytic capabilities involves “multi stack” layers, addressing SoS and network of networks.

SE practitioners should view a system as interconnected system elements performing the system functions. To meet this challenge, the SE practitioner who leads data-driven designs needs interdisciplinary knowledge of the main aspects of IoT: computing, sensors/actuators, software, network, analytics and data science.




4.3.8 Service Systems


OASIS (2012) defines a service as:

A mechanism to enable access to one or more capabilities, where the access is provided using a prescribed interface and is exercised consistently with constraints and policies as specified by the service description.



It involves application of specialized competences (knowledge and skills) through deeds, processes, and performances for the benefit of another entity or the entity itself in real world. The entity involved with the service can be technical, socio-technical, or strictly social.

For service systems, understanding the integration needs among loosely coupled systems and system elements, along with the information flows required for both governance and operations, administration, maintenance, and provisioning of the service, presents major challenges in the definition, design, and implementation of services (Domingue, et al., 2009; Maier, 1998). Cloutier, et al. (2009) presented the importance of Network-Centric Systems (NCS) for dynamically binding different system entities in engineered systems rapidly to realize adaptive SoSs that, in the case of service systems, are capable of knowledge emergence and real-time behavior emergence for service discovery and delivery.

Figure 4.9 illustrates the conceptual framework of a service system. Typically, a service system is composed of service system entities that interact through processes defined by governance and management rules to create different types of outcomes in the context of stakeholders with the purpose of providing improved customer interaction and value cocreation.




FIGURE 4.9 Service system conceptual framework. From Spohrer (2011). Used with permission. All other rights reserved.





Services not only involve the interaction between the service provider and the consumer to produce value, but have other intangible attributes like quality of service (e.g., ambulance service availability, response time to an emergency request). The demand for service may have loads dependent on time of day, day of week, season, or unexpected needs (e.g., natural disasters), and services are rendered at the time they are requested. Thus, the design and operations of service systems “is all about finding the appropriate balance between the resources devoted to the systems and the demands placed on the system, so that the quality of service to the customer is as good as possible” (Daskin, 2010).

In many cases, taking a service SE approach is imperative for the service-oriented, customer-centric, holistic view to select and combine service system entities to define and discover relationships among service system entities to plan, design, adapt, or self-adapt to cocreate value. Typically, five types of resources need to be considered: people; tangible products and environment infrastructure; organizations and institutions; protocols; and shared information and symbolic knowledge in the service delivery process. Major challenges include the dynamic nature of service systems evolving and adapting to constantly changing operations and/or business environments and the need to overcome silos of knowledge. Interoperability of service system entities through interface agreements must be at the forefront of the service SE design process for the harmonization of operations, administration, maintenance, and provisioning procedures of the individual service system entities (Pineda, 2010). In addition, service systems require open collaboration among all stakeholders, but recent research on mental models of multidisciplinary teams shows integration and collaboration into cohesive teams has proven to be a major challenge (Carpenter, et al., 2010).

In summary, in a service system environment, SE practitioners should bring a customer focus to promote service excellence and to facilitate service innovation through the use of emerging technologies to propose creation of new service systems and value cocreation. SE practitioners must play the role of an integrator, considering the interface requirements for the interoperability of service system entities—not only for technical integration but also for the processes and organization required for optimal customer experience during service operations.




4.3.9 Enterprise Systems


This section illustrates the applications of SE principles and concepts when the SoI is an enterprise. The aim is to continuously improve and help transform the enterprise to better deliver value and to survive in a globally competitive environment. Enterprise SE is an emerging discipline that focuses on frameworks, tools, and problem‐solving approaches for dealing with the inherent complexities of the enterprise including exploitation of new opportunities that can facilitate achievement of enterprise goals. A good overall description of enterprise SE is provided in Rebovich and White (2011). For more detailed information on this topic, please see the Enterprise SE articles in Part 4 of SEBoK (2023).





Enterprise


An enterprise consists of a purposeful combination (e.g., a network) of interdependent resources (e.g., people, processes, organizations, supporting technologies, and funding) that interact with each other to coordinate functions, share information, allocate funding, create workflows, and make decisions, and that interact with their environment(s) to achieve business and operational goals through a complex web of interactions distributed across geography and time (Rebovich and White, 2011).

An enterprise must do two things: (1) develop things within the enterprise to serve as either external offerings or as internal mechanisms to enable achievement of enterprise operations, and (2) transform the enterprise itself so that it can more effectively and efficiently perform its operations and survive in its competitive and constrained environment.

It is worth noting that an enterprise is not equivalent to an “organization.” As shown in Figure 4.10, an enterprise has organizations that participate in it, but these organizations are not necessarily “part” of the enterprise. The organizations that participate in the enterprise will manage a variety of resources for the benefit of the enterprise, such as people, knowledge, and other assets such as processes, principles, policies, practices, culture, doctrine, theories, beliefs, facilities, land, and intellectual property. These organizational resources will consume or produce money, time, energy, and material when acting on behalf of the enterprise.




FIGURE 4.10 Organizations manage resources to create enterprise value. From SEBoK (2023). Used with permission. All other rights reserved.





Creating Value


As shown in Figure 4.10, an enterprise creates value for society, for other stakeholders, and for the organizations that participate in that enterprise. It also shows other key elements that contribute to the value creation process. There are many types of organizations to implement value-creating enterprises: businesses (companies), networks of companies, programs and projects, virtual organizations, etc. A typical business may participate in multiple enterprises through its portfolio of projects. A large SE project can be an enterprise in its own right (implemented as a virtual organization), with participation by many different businesses, and may be organized as a number of interrelated subprojects. In many cases, enterprises find themselves in a rapidly changing environment where stakeholder needs change over time. Therefore, an enterprise must constantly adapt its capabilities to meet the enterprise strategic goals and objectives.





Capabilities in the Enterprise


As shown in Figure 4.11, the enterprise acquires or develops systems or individual elements of a system. The enterprise can also create, supply, use, and operate systems or system elements. Since there could possibly be several organizations involved in this enterprise venture, each organization could be responsible for particular systems or perhaps for certain kinds of elements. Each organization brings their own organizational capability with them, and the unique combination of these organizations leads to the overall operational capability of the whole enterprise.




FIGURE 4.11 Individual competence leads to organizational, system, and operational capability. From SEBoK (2023). Used with permission. All other rights reserved.





The word “capability” is used in SE in the sense of “the ability to do something useful under a particular set of conditions.” This section discusses three different kinds of capabilities: organizational capability, system capability, and operational capability. It uses the word “competence” to refer to the ability of people relative to the SE task. Individual competence (sometimes called “competency”) contributes to, but is not the sole determinant of, organizational capability. This competence is translated to organizational capabilities through the work practices that are adopted by the organizations. New systems (with new or enhanced system capabilities) are developed to enhance enterprise operational capability in response to stakeholder’s concerns about a problem situation.

As also shown in Figure 4.11, operational capabilities provide operational services that are enabled by system capabilities. These system capabilities are inherent in the system that is conceived, developed, created, and/or operated by an enterprise. Enterprise SE concentrates its efforts on maximizing operational value for various stakeholders, some of whom may be interested in the improvement of some problem situation.

Enterprise SE, however, addresses more than just solving problems; it also deals with the exploitation of opportunities for better ways to achieve the enterprise goals. These opportunities might involve lowering operating costs, increasing market share, decreasing deployment risk, reducing time to market, and any number of other enterprise goals. The importance of addressing opportunity potentials should not be underestimated in the execution of enterprise SE practices.

The operational capabilities of an enterprise will have a contribution to operational value (as perceived by the stakeholders). Notice that the organization or enterprise can deal with either the system as a whole or with only one (or a few) of its elements. These elements are not necessarily hard items, like hardware and software, but can also include “soft” items, like people, processes, principles, policies, practices, organizations, doctrines, theories, beliefs, and so on.





Enterprise Drivers and Outcomes


An enterprise needs to consider its own needs that relate to enabling assets (e.g., personnel, facilities, communication networks, computing facilities, policies and practices, tools and methods, funding and partnerships, equipment and supplies) when addressing the stakeholders’ needs. The purpose of the enterprise’s enabling assets is to effect state changes to relevant elements of the enterprise necessary to achieve targeted levels of performance. The enterprise “state” shown in Figure 4.12 is a complex web of past, current, and future states (Rouse, 2009). The enterprise work processes use these enabling assets to accomplish their work objectives to achieve the desired future states.




FIGURE 4.12 Enterprise state changes through work process activities. From rouse (2009). Used with permission. All other rights reserved.





Since a high degree of complexity is to be assumed, it is advisable to apply formalized modeling methods to achieve the enterprise strategic goals and objectives. It has proven useful to use enterprise architecture analysis to model these states and the relative impact each enabling asset has on the desired state changes. This analysis can be used to determine how best to fill capability gaps and minimize the excess capabilities (or “capacities”). The needs and capacities are used to determine where in the architecture elements need to be added, dropped, or changed. Each modification represents a potential benefit to various stakeholders, along with associated costs and risks for introducing that modification.





Enterprise Opportunities and Opportunity Assessments


The potential modifications that are identified represent opportunities for improvement. Usually, these opportunities require the investment of time, money, facilities, personnel, and so on. There might also be opportunities for “divestment,” which could involve selling of assets, reducing capacity, canceling projects, and so on. Each opportunity can be assessed on its own merits, but usually these opportunities have dependencies and interfaces with other opportunities, with the current activities and operations of the enterprise, and with the enterprise’s partners. Therefore, the opportunities may need to be assessed as a “portfolio,” or, at least, as sets of related opportunities. Typically, a business case assessment is required for each opportunity or set of opportunities. If the set of opportunities is large or has complicated relationships, it may be necessary to employ portfolio management techniques. The portfolio elements could be bids, projects, products, services, technologies, intellectual property, etc., or any combination of these items. Examples of an enterprise portfolio captured in an architecture modeling tool can be found in Martin (2005), Martin et al. (2004), and Martin (2003).

The results of the opportunity assessment can be compiled and laid out in an enterprise plan (sometimes conveyed as an enterprise ConOps) that considers all relevant factors, including system capabilities, organizational capabilities, funding constraints, legal commitments and obligations, partner arrangements, intellectual property ownership, personnel development and retention, and so on. The plan usually goes out to some long horizon, typically more than a decade, depending on the nature of the enterprise’s business environment, technology volatility, market intensity, and so on. The enterprise plan needs to be in alignment with the enterprise’s strategic goals and objectives and leadership priorities.





Practical Considerations


When it comes to performing SE at the enterprise level, Rebovich and White (2011) provide several good practices:

Set enterprise fitness as the key measure of system success. Leverage game theory and ecology, along with the practices of satisfying and governing the commons.

Deal with uncertainty and conflict in the enterprise through adaptation: variety, selection, exploration, and experimentation.

Leverage the practice of layered architectures with loose couplers and the theory of order and chaos in networks.



Enterprise governance involves shaping the political, operational, economic, and technical landscape. One should not try to control the enterprise like one would in a traditional SE effort at the project level.