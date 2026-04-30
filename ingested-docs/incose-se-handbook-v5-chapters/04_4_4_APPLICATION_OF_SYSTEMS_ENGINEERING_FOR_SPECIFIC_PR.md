APPLICATION OF SYSTEMS ENGINEERING FOR SPECIFIC PRODUCT SECTOR OR DOMAIN APPLICATION


This chapter presents how SE is applied in different product sectors or application domains. For each of these, unique and domain-specific terms, concepts, activities, methods, and practices are introduced.

The following domains are presented in alphabetical order:

Automotive Systems;

Biomedical and Healthcare Systems;

Commercial Aerospace Systems;

Defense Systems;

Infrastructure Systems;

Oil & Gas Systems;

Power & Energy Systems;

Space Systems;

Telecommunication Systems;

Transportation Systems.



Note that the application of SE is not limited to the product sectors and application domains listed above. SE is a generic discipline that can be applied in most situations and domains (with varying levels of value). However, the details of how the practice is applied will vary in different product sectors or application domains.





4.4.1 Automotive Systems


Overview of SE Applications within the Automotive Domain


The automotive industry has a long history of engineering complicated and more and more complex consumer products, characterized by diverse product ranges, high production volumes, and a very competitive market. To make vehicles attractive, manufacturers have to balance efficiency for mass production with driving performance. Strong, well-orchestrated processes across the supply chain are key to meeting this challenge. Quality is highly dependent on good processes being followed rigorously, and economic performance relies on optimization. Electrification, connectivity, autonomy, and consumer choice are driving complexity, creating opportunities for SE to enter the mainstream in coming years. The INCOSE Automotive SE Vision 2025 document (2020) provides an excellent summary of the current and future trends in this domain. See Table 4.5 for a comparison of automotive with two other domains considering some of the characteristics that may affect SE approaches.


TABLE 4.5 Comparison of automotive, aerospace/defense, and consumer electronics domains



Automotive Aerospace/ Defense Consumer Electronics

Customer requirements Assumed by manufacturer Defined by customer Assumed by manufacturer

Legislative environment Certification/inspection of product design, auditing of development and production processes (e.g., ISO/TS 16949 (2009)/IATF 16949, ISO 26262 (2018), E-marking, conformity of production, many regulatory Inc) standards (UNR, FMRSS, etc.) applicable to the overall system and its elements. Process regulations/standards are a new development. Certification (e.g., DO-178C from RTCA Inc) in process, tooling and product. Auditing of development and production processes CE/UL/FCC marking, according to a small number of standards (typically <10 per product)

User skill level Somewhat trained Highly trained Untrained

Complexity (PLE/component reuse) High Low Medium

Complexity (sociodynamic) High High Low

Product development cycle time Medium (3–7 years) Long (10+ years) Short (1–2 years)

Delivery cadence Annual Decade Annual

Product design life Medium (10–20 years) Long (30+ years) Short (1–2 years)

Approach to maintenance Repair Repair Replacement

Connectivity need Medium (trend to high) Low-medium (defined in stakeholder requirements) Medium-high

Number of external integration interfaces Medium (trend to high) Medium (trend to high) Medium

Safety/cybersecurity criticality High High Medium-high

Typical industry operating margin 4–6% 6–8% 8–10%

Annual production volume 10k–900k 100–100k 100k–100M

INCOSE SEH original table created by the INCOSE Automotive Working Group (AWG). Usage per the INCOSE Notices page. All other rights reserved.





Emergence of SE in the Automotive Domain


Since General Motors vehicles first shared a common chassis in 1908, the automotive industry has employed extensive reuse in combination with variant management techniques to manage costs and keep delivery cycles short. Until the late 1960s, activities familiar to the SE domain centered on parts development, promoting reuse through standards and matrix organizations. Architects mainly addressed geometry until the on-board electronics and software revolution started in the 1970s. Standalone mechatronic and automated control systems appeared first, delivering applications such as engine control, anti-lock braking, and automatic heating and air conditioning. During the 1990s, vehicles acquired extensive networks of interconnected electronic control units. In the same period, many manufacturers invested heavily in engineering teams that focused on elicitation and refinement of stakeholder needs to address emergent properties such as safety, environmental impact, dynamic performance, and occupant comfort. This subset of activities (e.g., stakeholder requirements, electrical and electronic architecture) provided the ingredients for the emergence of SE in automotive.





Contemporary SE in the Automotive Domain


Increasing complexity, driven by the parallel trends of electrification, on- and off-board networks, automation, and autonomy has led to growing interest in automotive SE since 2000. Electronics and software began to outstrip mechanical design as a means for manufacturers to provide distinctive products. As shown in Table 4.6, the automotive industry is very standards-driven and the last decade has seen many new developments. These standards address, in particular, architectural approaches, software elements, safety, and security processes. Practices have evolved in isolated pockets, leading to significant variation in how the discipline is interpreted and executed. Convergence of capabilities at different maturity levels, led by engineering executives with different worldviews and backgrounds, has led to the adoption of many different SE paradigms with varying enthusiasm. SE practitioners might draw the system boundary at the vehicle level, or be restricted to applying their techniques to individual features, system elements, or domains, sometimes focusing on electronics and software. Approaches differ too, with some being requirements-led, others architecture-centric. SE has entered the automotive domain in incremental steps, and continues to do so, due to the need to accommodate the special features and legacy of each company. Disruptive change is hard for established players because their business models have low margins, and rely on trusted, repeatable processes that leverage extensive reuse of system elements. Similarly, production needs efficient processes to continuously deliver high volumes of system elements and assemblies on a just-in-time basis, making interruptions to manufacturing difficult to tolerate.


TABLE 4.6 Representative organizations and standards in the automotive industry



Organization/standard Description

SAE International, formerly the Society of Automotive Engineers One of the main organizations that coordinate the development of technical standards for the automotive industry. Currently, SAE International is a globally active professional association and standards organization for engineering professionals in various industries, whose principal emphasis is placed on transport industries such as automotive, aerospace, and commercial vehicles

Japan Society of Automotive Engineers (JSAE) An organization that sets automotive standards in Japan, analogous to the SAE

Association for Standardization of Automation and Measuring An incorporated association under German law whose members are primarily international car manufacturers, suppliers, and engineering service providers from the automotive industry. The ASAM standards define protocols, data models, file formats, and application programming interfaces (APIs) for the use in the development and testing of automotive electronic control units

AUTomotive Open System ARchitecture (AUTOSAR) An open and standardized automotive software architecture, jointly developed by automobile manufacturers, suppliers, and tool developers. Some of its key goals include the standardization of basic system functions, scalability to different vehicle and platform variants, transferability throughout the network, integration from multiple suppliers, maintainability

The GENIVI Alliance A nonprofit consortium whose goal is to establish a globally competitive, Linux-based operating system, middleware, and platform for the automotive in-vehicle infotainment (IVI) industry. GENIVI specifications cover the entire product life cycle and software updates and upgrades over the vehicle’s lifetime

ISO/TS 16949 (2009)/IATF 16949

An international standard for particular requirements for the application of ISO 9001 quality management systems for automotive production and relevant service part organizations

IEC 62196 (2022) An international standard for set of electrical connectors and charging modes for electric vehicles maintained by the International Electrotechnical Commission (IEC)

ISO 26262 (2018) Road vehicles - Functional safety

ISO/SAE 21434 (2021) Road vehicles - Cybersecurity engineering

INCOSE SEH original table created by the INCOSE Automotive Working Group (AWG). Usage per the INCOSE Notices page. All other rights reserved.





The explosion of electrical, electronic, and software systems is driving awareness that engineering based on assembling parts from suppliers without a systems approach is no longer enough. Full autonomy is on the horizon, and advanced driver assistance features like lane keeping and emergency braking are well established. Many new vehicles have high-integrity system elements linked to the outside world. Managing the complexity and cybersecurity risks this creates is a great challenge (see Section 6.5). Cultural and methodological changes are ongoing in industry incumbents. They increasingly face competition from newcomers with backgrounds in software-intensive industries (see Section 4.3.4), who in turn must adapt their culture and scale their business models to the realities of high-volume automotive manufacturing.





New Eco-Systems Involving the Automotive Industry: The Example of “Mobility as a Service”


In many urban areas, local governments implement policies to reduce the number of private cars and to foster the deployment of mobility services as a complement to public transport. The number of privately owned, individual cars has decreased dramatically in some big cities. For instance, in Paris, capitol of France, the percentage of cars as a mode of transportation has decreased from 46% in 2002, to only 13% in 2022. Vehicle manufacturers should not expect that this trend will change. Vehicles they used to sell are more and more being replaced by public transport, biking, and walking, as well as services still involving vehicles like car-sharing or ridesharing. All these service offers can be integrated into a larger service enabling them to combine and thus making on-demand mobility faster and easier. This is called Mobility as a Service (MaaS), with a lot of initiatives around the world triggered by the Sustainable Development Goals introduced in Section 3.1.10. However, MaaS is not a silver bullet nor standard yet. MaaS may be considered as the mission for an SoS involving mobility service operators, both public and private. They have to cooperate in order to offer a more attractive user experience and at the same time to make the conditions for local mobility more sustainable.





The Future of SE in the Automotive Domain


Dealing with massively expanding complexity in an extremely challenging environment where standards and regulation trail fast-paced innovation is a challenge for this process-driven industry, but an opportunity for SE. As connectivity and autonomy become the norm, vehicles are built on highly configurable software platforms for providing mobility as a service. Development cycles that took five years are being compressed, where service updates that took a year will be expected in weeks. Delivering change like this means fundamental shifts in thinking are required across the board: from new business models, through service-centric architectures, to security-informed safety paradigms. SE is the means by which this can be achieved.





4.4.2 Biomedical and Healthcare Systems


Overview of SE Applications within the Biomedical and Healthcare Domain


SE has become more important to the healthcare industry (SEBoK, 2023), especially as systems and processes get more complex and quality characteristics such as safety, security, reliability, and human systems integration become more challenging. SE offers numerous benefits to biomedical and healthcare systems including the following:

Supports design and development of healthcare systems using well-defined processes and standards,

Offers well-defined approaches to design and implement architectures for proper interfacing, networking and communications using open industry standards,

Enables operators and enterprises to scale up without compromising quality of operations,

Enables better insights and control of many production systems including quality assurance, inventory, and cost control, and

Augments user experience of various stakeholders like doctors, and surgeons by system level integration of emerging digital platforms like augmented reality, virtual reality, and robotics.



In the medical industry, especially for medical devices, it is important to understand that “risk management” is generally centered around product (user safety) risk and (called system safety in this handbook—see Section 3.1.11) rather than project (technical or business) risk (called risk management in this handbook—see Section 2.3.4.4).





Unique Considerations for Healthcare Delivery


SE applied to healthcare delivery differs significantly from conventional SE as applied in traditional fields such as defense, aerospace, and automotive. Most healthcare delivery projects involve improvement of an imperfect workflow or care process or the design of a limited scope new workflow or care process in a local clinic, hospital, laboratory, or in population health. If successful, solutions are shared with peer institutions in the same medical organization. As a result, most SE projects in healthcare delivery involve only a few stakeholders and a handful of requirements. Approaches leveraging lean SE have shown to be successful in many cases (Oppenheim, 2021) (see Section 4.2.3). Healthcare delivery operations have a critical need for the SE process to address pervasive healthcare problems such as care fragmentation (e.g., the systemic misalignment of incentives) or lack of coordination that spawn inefficient allocation of resources or harm to patients. Just as in medical device development, SE in healthcare delivery also strongly emphasizes patient safety. Methods such as the Systems Engineering Intervention for Patient Safety (SEIPS) (Carayon, 2006) focus on tailoring SE processes to the specific context of patient-centered medicine.





Unique Considerations for Medical Devices


In contrast to healthcare delivery systems, some medical device and healthcare IT companies use a more traditional form of SE. However, some are heavily tailoring SE approaches to incrementally demonstrate the value of SE. Many devices must work in harsh environments, including inside the human body. Interoperability, interconnectivity, and transportability are increasingly critical for medical devices and SaMDs (Software as Medical Devices). During audits and submissions, regulators require device developers to follow standard quality system processes (e.g., ISO 13485). Standards such as ISO 14971 (application of risk management to medical devices), IEC 60601 (medical device safety), IEC 62304 (Medical Device software—Software life cycle processes), and IEC 62366 (application of usability engineering to medical devices) are driving medical device organizations to take a deeper look into system safety and the engineering practices behind it. Thus, SE practitioners are increasingly being brought on board to leverage their life cycle management skills and support validating that the final product does indeed meet the needs of its stakeholders. In addition to an emphasis on systems safety, the medical device sector is seeing an increasing need for several SE methodologies including, but not limited to, SoS management, stakeholder management, agile systems development, trade analysis, MBSE, and PLE.





Unique Activities, Methods, and Practices


Healthcare Systems are often broad in context including a population of diverse patients, many healthcare professionals, many medical devices, many insurance companies, many delivery systems, regulators, and the government. One emphasis of SE practitioners in the biomedical and healthcare domain is patient safety risk, often more so than technical or business risks (see Section 6.1). Traceability is often a key factor in regulatory submissions and audits. Organizations that have strong SE practices are therefore in a better position to avoid pitfalls and to effectively defend their decisions if a regulatory audit does occur. In general, applicable standards do not need to be excessively tailored, although organizations with new or maturing practices may want to focus on lean implementations to obtain early and effective system adoption. Carefully balancing the trades between healthcare costs, better health outcomes for populations, and profits for shareholders is an ongoing challenge for Healthcare SE practitioners. On a larger scale, healthcare SE practitioners that can influence policy and incentives will become even more valuable to their organizations.





4.4.3 Commercial Aerospace Systems


Overview of SE Applications within the Commercial Aerospace Domain


SE is part of the strategies for the development of solutions and products in the commercial aerospace system domain. Commercial aerospace systems are complex, and their complexity continues to increase. The increased use of software makes it possible to implement more functions than before, which contributes to a further increase in complexity. At the same time, the expectation is raised that the increased use of software will make solutions and products available more quickly than the historic mechanical systems of the past. As shown in Figure 4.8, commercial aerospace systems are often part of larger SoSs. Future commercial aerospace systems will include autonomy, artificial intelligence, neural networks, novel propulsion, advanced human system integration (HSI), and cybersecurity.

Commercial aerospace systems use sequential as well as incremental and evolutionary life cycle models, including agile methods with smaller cycles. Thus, the processes in this handbook can be used to address and help organizations manage these new factors derived from complexity settings. The adoption of new technologies and perspectives emphasize some concepts such as the systemic approaches and use of SoS approaches to support organizations by putting them on the forefront of the market with competitive products, adapted to the new reality of increasing interoperability.





Unique Terms & Concepts


The commercial aerospace organizations of many countries have specific policies, standards, and guidebooks to guide the application of SE in their organizational environment. For example, ARP 4754A (2010) describes the standard practices for verifying commercial aircraft requirements.

There are many other systems related to this domain. For example, in the aviation domain, there are systems that go far beyond the aircraft itself according to the interaction characteristic of system elements described on system concept definition. Examples include an air traffic control system.

New applications of commercial aerospace systems are being continually introduced. For example, some organizations specifically created to address the new aerospace segment of flying cars have started a great race in a totally different way. By using new methodologies and approaches, these systems are being developed by considering their integration in completely new context. The same is happening with unmanned and autonomous vehicles. These new applications require an understanding of the ecosystem of the new operational contexts, as well as the lifestyles of its users.





Unique Activities, Methods, and Practices


SE may help the realization of effective commercial aerospace systems through the following activities, methods, and practices:

Stakeholders. Stakeholders vary greatly and can range from federal government services, to aircraft manufacturers, to passengers.

Design and construction practices. Model-based design is generally used from construction model specifications, which enables and maintains traceability between requirements and models.

Interfaces. Because commercial aerospace systems’ system elements are developed in various parts of the world and brought to a single (or multiple) location for assembly, adherence to interface management principles is critical.

Risk management. Risk management is essential, especially for the introduction of new technologies.

Safety. Finally, it is important for SE management to assure that safety is not compromised by organizational factors, as described by Paté-Cornell (1990).



Examples of how SE helps is resolving unique domain challenges include:

For aircraft original equipment manufacturers (OEMs), SE:

Helps in design and manufacturing of aircraft subsystems, assembly and integration testing using well-defined process, standards, and quality standards.

Offers well-defined approaches to create designs or architectures, processes, and roadmaps for proper interfaces, instrumentation, and communications that enable better visibility of the static and dynamic operational data and status of the subsystems.

Enables operators and enterprises to scale up without compromising quality of production using a well-defined SE framework, tools, and emerging technologies.

Enables better insights and control of congestion and traffic control of many schedules like flights, passenger, luggage, and food.

Augments user experience of various stakeholders by system level integration of emerging digital technologies like augmented reality and virtual reality for enriched cockpit and instruments.



For airlines, SE:

Helps in the support stage, to maintain the fleet.

Helps balance performance and environmental impacts.

Offers a set of procedures and activities to manage the services that consider human resources, information, and operation data.





Other Unique Considerations


SE is increasingly being applied in commercial practice. Petersen and Sutcliffe (1992), for example, discuss the principles of SE as applied to aircraft development. Life cycle functions of the commercial aerospace industry gives SE its own unique characteristics.





4.4.4 Defense Systems


Overview of SE Applications within the Defense Domain


While SE has been practiced in some form from antiquity, what has now become known as the modern definition of SE has its roots in defense systems of the twentieth century. It became recognized as a distinct activity in the late 1950s and early 1960s due to technological advances taking place that led to increasing levels of system complexity and systems integration challenges, and the need for SE further increased with the large-scale introduction of digital computers and software.

SE within defense evolved to address systemic approaches to issues such as the widespread adaptation of COTS technologies and the use of SoS approaches. It offers well-defined designs/architecture, processes and roadmaps for proper interfacing, networking, and communications. This enables better integrity and interoperability of real-time intelligence data across various devices, from various vendors, and platforms using open industry standards. Today, with increasing emphasis on networks and capabilities the defense organizations of many countries are recognizing the criticality of end-to-end SoS performance and increasing focus on integration to deliver these capabilities.





Unique Considerations


Defense systems have numerous characteristics and consequently, a huge complexity, making SE essential for their development:

They are complex technical systems with many stakeholders and compressed development timelines.

The systems must be highly available and work in extreme conditions all over the world—from deserts to rain forests and to arctic outposts.

There are long system life cycles, so logistics is of prime importance.

There is typically a strong human interaction, so usability/human systems integration is critical for successful operations.

There is at times a need for defense operators and enterprises to accelerate development and production (e.g., quick response in event of national emergency or increased threats) without compromising quality of operations using a well-defined SE framework, tools, and emerging technologies





Unique Activities, Methods, and Practices


SE has a strong heritage in defense, and much of the SE processes in this handbook can be used as is in a straightforward manner, with normal project tailoring to address unique aspects of the project. It is important to note that as ISO/IEC/IEEE 15288 (2023) has evolved into a more domain- and country-neutral SE standard, so care must be taken to ensure that the defense focus is reasserted upon application. An example of specific implementation of ISO/IEC/IEEE 15288 when utilized for US Department of Defense projects is provided in IEEE 15288.1 (2014). This standard provides the basis for selection, negotiation, agreement, and performance of necessary SE activities and delivery of products. Additionally, the standard allows flexibility for both innovative implementation and tailoring of the specific SE processes to be used by system suppliers, either contractors or government system developers, integrators, maintainers, or sustainers. The defense organizations of many countries also have specific policies, standards, and guidebooks to guide the application of SE in their environment.





4.4.5 Infrastructure Systems


Overview of SE Applications within the Infrastructure Domain


This section addresses physical capital projects infrastructure including public works, transport, complex buildings, and industrial facilities. Within the infrastructure domain, SE practices are more developed in the high-technology system elements that involve software development, control systems, system security, or system safety. Infrastructure projects tend to define the high-level design solution without requirements decomposition, allocation, or interface identification. Architectures, traceability, and relationships within the project are often implied rather than specified. Infrastructure owners can benefit by applying SE to provide systematic, formal, verifiable connections between the business needs and the final product.





Unique Terms and Concepts


Infrastructure projects are distinguished from manufacturing and production, as they usually focus on unique, large physical systems where construction takes place on site rather than in a factory. These projects are adapted and integrated to existing environments, and are often characterized by loosely defined boundaries, evolving system architectures, multiphase implementation efforts which can exceed a few decades, and multiple-decade asset life cycles. As a result, stakeholders’ expectations and design solutions evolve over an extended timeframe. Unlike other SE domains, most infrastructure projects cannot be standardized and do not involve a prototype.

Many of the processes described in this handbook can be used to manage infrastructure projects but in some cases with different terminology, as illustrated in Table 4.7. There are some areas where existing infrastructure practices could be adjusted slightly to better align with SE practices.


TABLE 4.7 Infrastructure and SE definition correlation



Systems Engineering Term Infrastructure Term Recommendation

Acquirer Owner or Agency

Acquisition Contracting phase; Procurement Share good practices and lessons learned to improve procurement documents to enable better owner control of the project.

Business requirements Project need; Business case Derives contractor requirements from the business requirements, hold requirement reviews and include in the contractors’ scope.

Configuration control Versioning Configuration identification, change management, status accounting, configuration audit according to ISO 10007 (2017).

Decision gate Milestone Clearly define entry and exit criteria for decision gates

Life cycle Project life cycle Include how the infrastructure will deliver its intended function and long-term asset management. Add in contractor's scope expectations that will benefit the entire project life cycle.

Performance requirement Often found in Technical Specifications Allocate top-level system performance requirements to system elements, defining performance requirements. Best performed by the acquiring entity unless the procurement method is a PPP.

Requirements Design Criteria; Scope of Work; or Specifications Integrate full life cycle considerations into design criteria, including operations, maintenance, and disposal/replacement planning.

Supplier Design Consultant; Contractor Use requirements management to strengthen procurement language and enforce contract requirements during the project. Clearly define acceptance criteria and performance measures.

System architecture Context diagram; Schematics; Process and Instrumentation Diagrams Consider creating early in project life cycle to support requirement allocation and interface management. Use ICDs or N2 diagrams to complement the system architecture.

Verification Design Review; Quality Control (QC)/Quality Assurance (QA) Provide sufficient schedule and budget for both QC and Q A activities, including specific audit periods and “pens down” dates for each milestone. In the design phase, confirm the design meets requirements (QC), and procedures were followed (QA)

Validation Construction Inspection; Quality Control (QC) / Quality Assurance (QA) Include sufficient budget and authority for QA to ensure compliance. Ensure acceptance testing refers back to stakeholder needs and includes a focus on whether it meets its intended use.

INCOSE SEH original table created by Kouassi on behalf of the INCOSE Infrastructure Working Group members. Usage per the INCOSE Notices page. All other rights reserved.





Unique Activities, Methods, and Practices


SE may help the realization of effective infrastructure systems through the following activities, methods, and practices:

Stakeholders. Stakeholders can range from governmental legislators who control funding for the project, to local/regional agencies that add beautification needs, to landowners with adjacent property impacted by a proposed project. In all government-funded projects, segments of the public may also be a stakeholder group. The wide array of potential stakeholders makes requirements gathering, cost, and schedules volatile. Public and political pressure can cause premature initiation of projects, with incomplete project scope and ill-defined metrics.

Design and construction practices. Within infrastructure, the engineering disciplines have well-established, traditional practices and are guided by independent industry codes and standards that are not shared between disciplines. Design requirements are generally dissociated from construction specifications, therefore limiting traceability between design and construction.

Interfaces. Infrastructure projects have external, often uncontrollable interfaces that can impact the project. Interfaces can include existing built systems, natural systems, environmental, and other internal and external dynamics.

Risks. The contractual framework and allocation of liability and commercial risk are major factors impacting procurement and contracting processes. SE practices may therefore help to manage risk associated with cost estimating, changing scope, system integration, and verification. They may also improve construction productivity, making infrastructure development more cost‐effective.





Other Unique Considerations


SE concepts are relatively newly applied in the infrastructure domain. As the application of SE grows within the infrastructure domain, an effort should be made to train engineering discipline specialists in SE concepts. Four key SE processes are useful to introduce SE on infrastructure projects: requirements management, interface management, verification, and validation. These processes can improve infrastructure project delivery, and total life cycle view that integrates design, construction, and asset management.





4.4.6 Oil and Gas Systems


Overview of SE Applications within the Oil and Gas Domain


The emergence of SE within the Oil and Gas (O&G) domain is relatively new compared to other sectors of similar complexity. Most applications of SE have occurred within the past decade to varying levels of implementation. Due to fluctuation in oil prices, new systems with increasing complexity and efforts to reduce greenhouse gas emissions have motivated a risk-averse industry to adapt to, and in some cases drive, change. This has encouraged an entire culture known to resist change to challenge assumptions and traditional ways of working, especially working in a document-centric environment.

The greatest SE-related need has been in the system requirements definition and requirements management space. With a domain-wide focus on digitalization, the change in how requirements are defined and transmitted throughout the supply chain has benefited from an SE approach. The industry leaders have either switched, or are switching, to data-centric requirement sets. There has been collaboration between suppliers and acquirers to improve the quality and traceability of requirements and create metrics for measurement of progress. INCOSE and American Petroleum Institute (API) cooperated on some trials in 2017 and 2018 that explained the aims and elements of good requirement writing to a panel of experts involved in updating a standard. They then supported the engineers in the writing and recrafting of the content, resulting in higher quality requirements and clearly separating between instruction, information, and verification (IOGP, 2021).

Beyond requirements, additional SE practices are also being introduced in the O&G domain. For example, SE practitioners take advantage of requirement definition to develop system architectures and systematically define interfaces. By using requirement management tools, configuration management and change management of requirements can be implemented in projects. In other cases, systems thinking tools, such as context diagrams and functional trees, are used as a foundation for SE practices, such as functional modeling. Technical requirements are also leading to conversations and implementation of verification and validation strategies and realization. With the companies incorporating digital design data across disciplines and throughout the life cycle, the digitalization of requirements has led to the auto-creation of specifications and test plans.





Unique Considerations for SE within Oil and Gas


One of the challenges when considering SE in O&G is that it is difficult to evaluate the entire domain as one. The long and complicated supply chain includes diverse and segmented companies across the globe. And it is not solely crude oil or natural gas. With the current energy transition affecting all aspects of engineering, most O&G companies have been shifting focus from fossil-based systems to include renewable sources that are efficient solutions with net-zero emissions. Many oil and gas companies have targets of net-zero greenhouse gas emissions for operations by 2050.

Another challenge for the domain is that since SE has not been implemented as a holistic approach, there are pockets of SE maturity that do not always intersect. This is a result of most O&G companies following a well-established and practiced sequential (waterfall) stage gate process. Therefore, SE implementation is generally only implemented where a clear case for change is needed and demonstrated, or when all other approaches have been exhausted. To help with this, the INCOSE O&G working group developed a scalable presentation for various high-level conversations and presenting success case studies from participating O&G companies. One area where SE continues to gain traction and show value is in new product development projects. By introducing SE principles and methods early in the project, the project team can see the benefits of applying SE and embrace the changes to the traditional ways of working.





4.4.7 Power & Energy Systems


Overview of SE Applications within the Power and Energy Domain


During the first two decades of the twenty-first century, the global energy system has been subject to a complex set of requirements stemming from the Paris Agreement, the United Nations Sustainable Development Goals (see Section 3.1.10), reduction in greenhouse gas emissions, and other efforts to avoid degradation of our social foundations and ecological ceiling (Raworth, 2017). To provide an effective solution for such a complex set of problems demands the realization, or modification, of many new systems, elements, and enabling systems supported by a holistic systems approach. The United Kingdom’s (UK) Council for Science and Technology stated with respect to the UK’s Net Zero ambitions that “by drawing on SE principles, a detailed and credible plan can provide the framework required to drive change, give reassurance to businesses, investors and consumers, and engage the whole of society in delivering this change” (CST, 2020).

At the heart of the sustainability transition is the convergence of business, technology, and socio-politics to guide innovation around what is viable, feasible, and desirable. This new intersection of disciplines can be enabled through SE. Yet many incumbent organizations and legacy approaches dominate the power and energy landscape, meaning a change in thinking or practice is resisted, or even directly opposed. As a result, the application of SE in power and energy remains largely immature in the first quarter of the twenty-first century compared to more established sectors such as defense, space, and transportation. A cultural shift toward shared knowledge management systems, portfolio management, and organization infrastructure is required to fully embrace and adopt SE.





Unique Terms and Concepts


The language used in SE is made effective through SE heuristics or when translated to real-world examples in the power and energy context. For example, an SoS may be considered an abstract SE term, yet it perfectly describes the nature of distributed energy resources.





Unique Activities, Methods, and Practices


SE may help the realization of effective power and energy systems through the following activities, methods, and practices:

Architecture and design. Provides robust architecture, design, and development processes for higher integrity and interoperability across the supply chain infrastructure from upstream (e.g., solar plant, nuclear, wind farms), mid-stream (e.g., large-scale storage, energy vector processing, transmission and distribution networks) and downstream (e.g., retail outlets, local area networks, domestic microgeneration, private storage).

Risks. Enables better identification and handling of risks associated with energy security and resilience.

Portfolio management. Provides the platform for joined up roadmaps and communication channels which enables stakeholder acceptance, transition, and utilization of emerging paradigms such as smart grids, district heat networks, renewable technologies, demand side response, and electric vehicles.

Sustainability. Enables better management of reductions in greenhouse gas emissions through robust technical and management processes with a whole life cycle perspective, open industry standards, quality management, and assurance.





Other Unique Considerations


Power and energy systems are typically at the SoS level, so activities follow the key characteristics and challenges associated with an SoS. As an example, achieving the goal of energy security requires as much understanding of geo-politics as it does the evolution of cybersecurity as digitalization grows.

The application of SE needs to transcend geographic boundaries and domain silos. For example, consideration for how SE supports the implementation of the Clydebank declaration, which calls for the establishment of green shipping corridors for zero-emission maritime transport between shipping ports, presents an energy, transport, and logistics challenge on an international scale.

On a global scale, power and energy systems must remain persistently operational for billions of system users whilst maintaining a constant state of equilibrium with demand balanced by supply (augmented by flexibility solutions such as demand side response and storage). In addition, power and energy systems typically have a life cycle of 30–100 years or even into the thousands of years for end-of-life decommissioning and waste storage from nuclear fission facilities. These considerations form complexity multipliers for the sustainable energy transition.

Adapting the mental models and behaviors of system users will be crucial to effecting change. This demands elements of social sciences, systems science, and systems thinking to complement the rigor of SE processes. To support this, there is a need to provide feedback mechanisms to influence the micro-behavior of the human actors in the system in such a way as to maintain the macro-stability of the system (Sillitto, 2010) achieved through HSI (see Section 3.1.4). But SE cannot focus on change in human behaviors without consideration for market dynamics and political levers. SE can help provide the coherence and joined-up thinking necessary to make energy policy an enabling system for delivering the overarching goals of energy decarbonization, digitalization, decentralization, and democratization. We must also avoid the trap of pushing technology solutions that deliver undesirable user experience. Considerations range from consumer price point, to acoustic noise of technologies, to retrofit disruptions, to the availability of energy in remote or isolated communities. Our challenge, as future ancestors, will be to find ways to support growing energy demands whilst delivering a sustainable energy supply chain that is available and affordable to everyone on a global scale.





4.4.8 Space Systems


Overview of SE Applications within the Space Domain


Space systems are systems that are designed to operate and perform tasks into and within the space environment. This may consist of: spacecraft (and their associated payloads and instruments); mission packages(s); ground stations; data links between spacecraft and ground, launch systems; and directly related supporting infrastructure. Due to the relatively high costs of deploying assets into earth orbit or beyond, space systems typically require high reliability with little maintenance other than software changes (note that designing for maintainability in space one of the many trade-offs that need to be considered during conceptual design). This makes it necessary for all system elements to work the first time or be compensated by operational workarounds; this can impact the risk posture of the system being developed.

The space domain has evolved into three main areas of interest, with some overlap:

Civil,

Commercial, and

National Security Space.



Each of these areas have their own motivations that can influence the way they develop systems.





Unique Activities, Methods, and Practices


Key emphases of SE in the space domain are integration, verification (including testing), and validation of highly reliable, well-characterized systems. Risk management is also key in determining when to incorporate new technologies and how to react to changing requirements through multiyear developments and programmatic challenges. SE provides coordination for multi-disciplinary engineering expertise that enables optimized designs.

Civil systems are typically acquired by government agencies, which typically focus on performance risk, determining when to incorporate new technologies, and how to react to changing requirements through multiyear developments and programmatic challenges. This lends itself to the use of the sequential approaches, such as the SE Vee model, or, in some cases, the waterfall model.

Commercial systems strive for profitability (cost and schedule) and are more amenable to using incremental and evolutionary approaches. This allows them to deploy systems faster, and rapidly gain experience that can improve later iterations of their product.

National Security Space, much like Civil, may emphasize performance over cost and schedule, and have traditionally used the Vee and waterfall models for development. They typically are more tolerant of accepting risk from the injection of new technologies.





Unique Standards


Overall, proper application of SE in the space domain helps in design and development of space elements for easier manufacturing and lowering maintenance cost using well-defined processes and standards. SE offers well-defined architecture and design processes and roadmaps for proper interfacing, networking, and communications that enable better integrity and interoperability of space systems and elements provided by various contractors, and across the supply chain using open industry standards.

Civil, commercial, and national security entities have their own drivers that determine how standards are created and adopted. Most space-faring nations and international consortiums have developed and adopted their own standards that are specific for space systems. Some examples include:

In the United States, the Department of Defense has created Military (or “Mil”) Standards that have been readily adopted by both Civil and Commercial primarily due to the need for high reliability and survivability in a hostile environment. NASA has also created a set of technical standards, as has the AIAA and other organizations.

The European Cooperation for Space Standardization is an initiative established to develop a coherent, single set of user-friendly standards for use in all European space activities.

The Euro-Asian Council for Standardization, Metrology and Certification, a regional standards organization operating under the auspices of the Commonwealth of Independent States, has developed GOST (Russian: OCT),a set of spacecraft certification standards that is commonly used by Russia.

JAXA (Japan Aerospace Exploration Agency) has developed a library of standards known as JERG (JAXA Engineering Requirement, Guideline).

International organizations such as ISO and IEEE have also been involved in the development of standards that enhance interoperability.





Other Unique Considerations


An additional challenge in the space domain occurs when humans are integrated into the system. Typically, it includes the incorporation of design features and capabilities that accommodate human interaction with the system to enhance overall safety and mission success. The system needs to ensure that the human needs are addressed in terms of effectively utilizing human capabilities and performance, hazards are controlled to a level considered safe for human operations, and provide, to the maximum extent practical, the capability to safely recover the crew from hazardous situations. At the time of this writing, only missions led by three nations (Russia, the United States, and China) have sent humans into space. Each country has developed their own set of standards:

Rovcosmos for Russia, and

Human Space Flight Requirements for Civil, typically governed by NASA, for the United States,

CNSA for China.



Of the three, only the United States has begun to explore human commercial space flight, where such requirements are governed by the US Federal Aviation Administration (FAA).





4.4.9 Telecommunication Systems


Overview of SE Applications within the Telecommunication Domain


Telecommunication systems are defined by having a route to transfer information across and to distinct endpoints that are used to share (send and/or receive) information. They differ from postal systems in that the information shared is in the form of electronic media (applications or services) rather than transporting packages or handwritten letters.

Telecommunication systems are enablers for other services. Almost all modern systems either make use of telecommunication technologies provided by other systems, or contain telecommunication technologies within them (e.g., digital signage and ticketing systems within public transport systems; battlespace communication systems used by the military; environmental monitoring systems such as those used to monitor/predict the weather or detect and provide advance warning of earthquakes and other environmental events). Lives and livelihoods depend on telecommunication systems.

Communication network complexity and the social cost of telecommunication failures will only increase (White and Tantsura, 2016). It is therefore opportune for telecommunication leaders and practitioners to advocate, apply, and extend the best telecommunication SE approaches to cope with this complexity and risk.





Unique Terms and Concepts


Telecommunication systems are built on a wide range of technologies: satellite communication, cellular networks, land mobile radio, microwave, radio, television, Wi-Fi, Bluetooth, and global positioning systems. They are increasingly software-intensive systems (Donovan and Prabhu, 2017). Telecommunications includes communication networks owned by carriers, internet service providers, government agencies, and other enterprises, as well as broadcast networks (e.g., radio, cable, television) and over-the-top service provider applications (e.g., messaging, video conferencing, social media applications) (Adkins, et al., 2020) (Birman, 2012). Some telecommunication systems, like the internet and the public switched telephone network, have no single owner; their design depends upon collaboration in international telecommunication standards bodies.

The telecommunication transport network may be dedicated for a specific purpose (service or application) or shared for multiple services or applications. Communication networks may be employed for emergency services, defense, transportation, health, financial, industrial supervisory control, and data acquisition purposes. Many of these are considered to be national critical infrastructure (Lewis, 2019).

Telecommunication systems typically have some of the following characteristics:

Diverse geographical distribution;

Multi-party ownership and management (network domains or applications);

Multiple constituent systems with independent life cycles that continuously evolve over many decades;

A small stable set of functions, allocated across system elements, to achieve the common purpose of enabling communication;

Many nodes and types of nodes; and

Strong interdependence between nodes (failures within one node may cause other nodes to become isolated unless the specific failure mode is anticipated and the network is designed to withstand the failure).





Unique Activities, Methods, and Practices


Network specifications, architectures, and models have a small number of functions and node types at their core, but they must also support many function and node variants. Engineering planning and architecture must be flexible enough to accommodate change in parts of the network owned and operated by others. Design and verification activities depend on a thorough analysis of failure modes and interactions across the network. Scale and variation lead to significant configuration management challenges (Xu and Zhou, 2015). These characteristics affect engineering activities throughout the life cycle. Like other types of networks, communication networks can be represented by a network model that defines a grouping of nodes and links to help understand how resources flow from one node to another.

While some telecommunication systems in slowly changing environments can survive on implicit engineering practices, such approaches have been found to be ineffective and inefficient. They typically fall short when one or more of the following exist:

New and/or complex stakeholder needs;

New operating models;

Significant safety or security risks;

High complexity; or

Constrained, high-cost operating environments.





Other Unique Considerations


Many vendor services and technologies are mature and are slow to evolve. Telecommunication networks typically comprise COTS vendor equipment/applications using industry interface standards and semi-standardized architectures (see Section 4.3.3). This equipment is typically integrated together without the use of SE. The promise from COTS vendors is that their equipment is suitable for rapid configuration and integration, and implicitly can survive with simpler requirements/business analysis and engineering processes, including outsourced vendor standardized engineering. This can lead to situations where there are unexpected outcomes. Without an appropriate set of engineering disciplines, such as those based on SE, it is difficult to assess, let alone manage, the risks.





4.4.10 Transportation Systems


Overview of SE Applications within the Transportation Domain


Ground transportation systems, such as highways, busses, people-movers, mass transit, and rail involve complex capital programs for fleet acquisition and/or building of related infrastructures and are invariably within a SoS on an operational level. The system life cycle for ground transportation assets is 25 to 100+ years and often involves public funding and a related fiducial public trust. During this life cycle, operational processes are continuously optimized and improved using block changes.

The ground transportation industry segment is an emerging SE practice area, largely consisting of transit authorities, railroad operators rolling stock manufacturing industries, and civil engineering construction firms. Globally, some geographic regions are progressing the deployment and acceptance of SE more rapidly. They have created effective SoS approaches that are in concert with emergent societal trends such as smart cities, an embedded safety culture, and a through life approach to service delivery. For example, in the UK, the Institution of Civil Engineers has made solid progress in moving toward an SE approach within the civil engineering domain. Other regions are at the early stages of integrating SE into their ground transportation systems processes. These imbalances can be overcome in time through global collaboration.





Unique Considerations


Additional mandates for the use of SE methods, skills, and competencies are generated from rapidly increasing system complexities in modern transportation systems, as evidenced by Intelligent Transportation System (ITS) concepts including regional, national, and local smart cities initiatives. Train control automation, bus scheduling, and ride-share coordination, coupled with autonomous vehicles, micro-grid hybrid traction power, passenger fare collection, and related trip planner smartphone apps provide emerging complexities within modern ground transportation capability. However, public transportation must improve as public needs change, new technologies are introduced, or as environmental concerns and quality-of-life concerns encourage greater use of public transit. Ground transportation services are typically “in-service” brownfield systems and must migrate to an updated version, while still maintaining service, so that assets may be cost effectively managed in the public’s interest (see Section 4.3.2). Some transit assets in large cities run 24/7 service as a matter of public safety and demand, requiring careful planning. A “whole” organization approach is needed for success.





Unique Terms and Concepts


The transportation domain uses the same terms as the infrastructure domain, see Table 4.7.





Unique Activities, Methods, and Practices


Some examples of early initiatives on the application of SE are in the United Kingdom, the European Union, and, specifically, the Netherlands. In the UK, Network Rail established the Governance for Railway Investment Projects (GRIP) to help manage projects and to align them with SE processes. Leading EU train operating companies and the main rolling stock manufacturers seek to develop a common, open architecture such as EULYNX and the Reference Command and Control System Architecture to support and optimize trackside and rolling stock acquisitions and upgrades. In the Netherlands, SE is advocated by the network management institution, ProRail, as part of their project management approach for delivering rail infrastructure projects. ProRail created a SE Handbook for their project life cycle approach which is comparable to GRIP.