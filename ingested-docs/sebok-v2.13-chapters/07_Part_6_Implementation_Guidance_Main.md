Operation of the System	X	X

System Maintenance	X

Logistics	X

Project Planning	X	X	X	X	X

Project Assessment and Control	X	X

Risk Management	X	X	X	X	X

Measurement				X Decision Management	X	X	X
Configuration Management	X	X	X

Information Management	X

Quality Management	X


References
Works Cited
None.

Primary References
None.

Additional References
None.

Implementation Examples

-
Characteristics of the organization(s) which perform SE have an impact on the engineering itself. It is for this reason that the examples are grouped into three categories: government examples, commercial examples, and examples which represent issues from both ("combined"). As the SEBoK continues to evolve, additional categorizations may be developed. A matrix is used to map the specific systems engineering principles illustrated in each example to the associated SEBoK topics.

SEBoK Examples
 Construction System Examples - Coming Soon!
 CyberPhysical System Examples - Coming Soon!
 Defense System Examples
 Submarine Warfare Federated Tactical Systems
 Virginia Class Submarine
 Geospatial System Examples - Coming Soon!
 Information System Examples
 Complex Adaptive Taxi Service Scheduler
 Successful Business Transformation within a Russian Information Technology Company
 FBI Virtual Case File System
 Management System Examples
 Project Management for a Complex Adaptive Operating System
 Medical System Examples
 Next Generation Medical Infusion Pump
 Medical Radiation
 Design for Maintainability
 Space System Examples
 Global Positioning System Case Study
 Global Positioning System Case Study II
 Russian Space Agency Project Management Systems
 How Lack of Information Sharing Jeopardized the NASA/ESA Cassini/Huygens Mission to Saturn
 Hubble Space Telescope
 Applying a Model-Based Approach to Support Requirements Analysis on the Thirty-Meter Telescope


 Miniature Seeker Technology Integration Spacecraft
 Apollo 1 Disaster
 Transportation System Examples
 Denver Airport Baggage Handling System
 FAA Advanced Automation System (AAS)
 Federal Aviation Administration Next Generation Air Transportation System
 UK West Coast Route Modernisation Project
 Standard Korean Light Transit System Vignette
 Utilities Examples
 Northwest Hydro System
 Singapore Water Management

Characterization of Examples
Systems engineering (SE) principles described in the SEBoK Parts 1-6 are illustrated in Part 7, Systems Engineering Implementation Examples. These examples describe the application of systems engineering practices, principles, and concepts in real settings and can be used to improve the practice of systems engineering by illustrating to students, practitioners, and those new to SE the benefits of effective practice and the risks of poor practice.
The examples here have been developed by examining previously published case studies from external sources that demonstrate the real-world examples of systems engineering principles. These case studies were then summarized by the BKCASE team. The summaries include links to the original documentation as well as links to the relevant areas of the SEBoK highlighted in the example.
Systems engineering (SE) examples can be characterized in terms of at least two relevant parameters, viz., their degrees of complexity and engineering difficulty. Although a so-called quad chart is likely an oversimplification, a 2 x 2 array can be used to make a first-order characterization, as shown in Figure 1.

The x-axis depicts complicated, the simplest form of complexity, at the low-end on the left, and complex, representing the range of all higher forms of complexity on the right. The y-axis suggests how difficult it might be to engineer (or re-engineer) the system to be improved, using Conventional (classical or traditional) SE, at the low-end on the bottom, and Complex SE, representing all more sophisticated forms of SE, on the top. This upper range is intended to cover system of systems (SoS) engineering (SoSE), enterprise systems engineering (ESE), as well as Complex SE (CSE).The distinctions among these various forms of SE may be explored by visiting other sections of the SEBoK. In summary, the SEBoK case study editors have placed each case study in one of these four quadrants to provide readers with a suggested characterization of their case study's complexity and difficulty. For sake of compactness the following abbreviations have been used:


 Business Transformation (Successful Business Transformation within a Russian Information Technology Company)
 NextGen ATC (Federal Aviation Administration Next Generation Air Transportation System)
 Saturn Mission (How Lack of Information Sharing Jeopardized the NASA/ESA Cassini/Huygens Mission to Saturn)
 Hubble (Hubble Space Telescope Case Study)
 GPS and GPS II (Global Positioning System Case Study)
 Medical Radiator (Medical Radiation Case Study)
 FBI Case Files (FBI Virtual Case File System Case Study)
 Small Satellite MSTI (MSTI Case Study)
 Medical Infusion Pump (Next Generation Medical Infusion Pump Case Study)
 Incubator Maintainability Design (Design for Maintainability)
 Complex Adaptive Operations (Complex Adaptive Operating System)
 Taxi Scheduler (The Development of the First Real-Time Complex Adaptive Scheduler for a London Taxi Service)
 Project Management (The Development of a Real-Time Complex Adaptive Project Management System)
 SWFTS MBSE (Submarine Warfare Federated Tactical Systems Case Study)

References
Works Cited
None.

Primary References
None.

Additional References
None.




Defense System Examples

Submarine Warfare Federated Tactical Systems

-
This article describes the transformation of the systems engineering and integration program that produces the common combat system used across the United States Navy (USN) submarine fleet from traditional document-based systems engineering (DBSE) to model-based systems engineering (MBSE).. The topic may be of particular interest to those dealing with programs in the sustainment and evolution phase of their life cycle. For addition information, refer to the links provided in Section V, Lessons Learned below.

Background
Modern submarines are typically in service for 20 - 40 years. Historically, each new class of submarines has been equipped with a new combat system, with a corresponding logistics and sustainment tail unique to that class. Submarines and their internal systems are commonly state-of-the-practice at launch, but most navies find it necessary to upgrade the ship's combat system at least once during the operational lifetime. The evolution of threats, technology and interoperability drives the USN to upgrade their submarine combat systems and key components including the sonar (Fages 1998) (Ford and Dillard 2009) and tactical control systems continuously (Jacobus and Barrett 2002).
Over the last three decades submarine combat systems have evolved from multiple independent systems (sonar, combat control, imaging, electronic warfare, weapon control, etc.) with manual or point-to-point interfaces into networked federations of systems (FoS). Confusingly, these component systems are often referred to as subsystems in the literature.



In the USN, each of these component systems has its own acquisition program, customer, and contractor team. Starting as legacy military systems hosted on traditional military-unique computational platforms, these systems have evolved to utilize Commercial Off-The-Shelf (COTS) computational and networking platforms, and leverage large amounts of COTS software.
As the component systems became more tightly interconnected, the acquisition customers established and collaboratively funded a systems engineering and integration (SE&I) program to manage the interfaces between systems, manage technology insertion and the obsolescence of common COTS components, and to integrate and test the production systems (Cooper, Sienkiewicz and Oliver 2006). Starting with the Virginia class, this SE&I program was expanded to encompass both new-production and in-service submarine modernization efforts. Over time, the combat systems of the various USN submarine classes were converged into variants of a single product line (Zingarelli, et al. 2010).

Purpose
The submarine combat system SE&I program delivers an updated production baseline annually, along with product line variants for each submarine class or subclass being built or upgraded that year. Production systems implementing this baseline are delivered to new-build submarines, and to in-service submarines being upgraded on a roughly six-year cycle. The common combat system product line is referred to as the Submarine Warfare Federated Tactical Systems (SWFTS). SWFTS is deployed by the USN on submarines of the Los Angeles (SSN 688), Ohio (SSGN 726, SSBN 730), Seawolf (SSN 21), and Virginia (SSN 774) classes, and by the Royal Australian Navy on the Collins (SSG 73) class. SWFTS is also planned for the next-generation USN Columbia (SSBN) class. Compared to the submarine combat systems that it replaced, SWFTS significantly reduces development, maintenance and training costs while delivering enhanced combat capabilities and facilitating the rapid insertion of new or improved capabilities (Zingarelli, et al. 2010).





Challenges
The USN submarine fleet encompasses substantial platform variability between class, sub-classes, and even individual ships within a sub-class. The RAN Collins class contributes additional variability. Platform variability drives combat system variability.
SWFTS is a Federation of Systems, with each platform hosting a subset of 40 systems produced by 20 different program offices. As is common with system of systems (SoS) and FoS, there is no central program office that can command the compliance of all of the component system programs. Instead, the evolution of SWFTS is executed through negotiation and consensus.
Many baselines must be produced each year: new common hardware baselines are introduced in odd years, while new common software baselines are introduced in even years (Jacobus, Yan and Barrett 2002). In addition, multiple incremental developmental baselines are established each year. Once the annual production baseline for the product line is defined, variants must be developed for each submarine class or subclass built or upgraded that year (Mitchell 2012).
Like most other defense programs, the SWFTS SE&I program is under constant pressure to accomplish more with decreasing resources. There has been steady increase in SE scope despite decreasing budgets. Program leadership has responded in part through continuous SE process improvement. Improvements have included test automation, changes in the requirements management processes and tools (spreadsheets to IBM(r) Rational(r) DOORS(r) to OMG(r) SysML(r)), refined tooling for change management, and the DBSE to MBSE transition that is the focus of this case study. Substantial Return on Investment (ROI) has been achieved with each major SE process or tooling improvement (Mitchell 2014, Rogers III and Mitchell 2021).


Systems Engineering Practices
During 2009 the SWFTS SE&I program conducted a Model Driven Architecture (MDA) study to determine if MDA should be the next step in the program's continuous SE process improvement. The MDA study predicted a positive ROI from converting to MBSE. In January 2010 the SWFTS SE&I program office kicked-off a three-year effort to develop and validate a SWFTS FoS model and MBSE process. In 2013 a SWFTS baseline was developed using both DBSE and MBSE in parallel. The DBSE products were used to validate the MBSE products. Based on that successful validation, the SWFTS SE&I program transitioned to MBSE for all ongoing work.
Until the transition in 2013, SWFTS SE was performed using traditional DBSE. Requirements were managed in DOORS, and reviewed and used by engineers in the form of massive spreadsheets with hundreds of columns and thousands of rows. The design of each variant was documented in Microsoft Office files. Baseline Change Requests (BCR) were documented in briefings, and analyzed by all component system programs in parallel for potential impact. Approved BCRs were manually merged into DOORS and into revised baseline documents for each effected variant.
Starting in 2010, the customer community invested in a three-year MBSE transformation effort. The engineering team performed an in-depth tool trade study to select and set up the MBSE environment. That trade study resulted in the selection of MagicDraw(tm) for system modeling, using Teamwork(tm) as the model repository.
Once the modeling environment was installed, the MBSE transformation team architected, developed and populated a SysML-based model of the SWFTS FoS interfaces. The team updated the SWFTS SE process to take advantage of the new MBSE environment, with the constraint that the MBSE process produce SE products that were effectively identical to those produced by the DBSE process.
As the SWFTS model was developed, unanticipated benefits emerged. Capturing the architecture in a model improves the depth and quality of baseline products due to the fact that, unlike the spreadsheets it replaced, the model inherently captures relationships between elements. Using the model, one can drill down and explore various aspects of the architecture, e.g., a) the network design that supports data exchanges; b) component systems that use a particular network Virtual Local Area Network (VLAN); c) service level requirements levied upon data providers.
In 2013 the new MBSE environment and process was used to produce a set of SWFTS baseline SE products. In parallel, the DBSE process produced equivalent products. The two sets of baseline products were compared in detail, with all differences traced back to root causes.
The relationships in the model also support automated integrity and consistency checking between model elements, which is also called model concordance. Analysis of these relationships identified a significant number of minor differences that were all traced to errors in the DBSE products. This validated the MBSE process, and demonstrated that while those initial MBSE baseline products were more labor-intensive than the DBSE baseline products, the new MBSE process produced higher quality products. After this validation, the SWFTS SE&I program switched over to MBSE as their basic process.
Since that transformation, SE process improvement has continued apace. Requirements management has moved from DOORS to the system model in MagicDraw. As of 2016, the system model is the baseline for requirements, architecture and the FoS design. BCR impact analysis is now performed in model, leveraging capabilities of the toolset for automated assistance. Variants are documented in the system model as system configurations. Most SE products are generated from the system model on demand.
The MBSE process has been matured and refined over subsequent baseline development efforts. As the team climbed the learning curve, the average cost of processing a BCR declined. New SE artifacts capturing specific aspects of the FoS model were conceived and auto-generated from the model to improve communication with targeted audiences. Where before the transition to MBSE it was not cost-effective to manually generate tailored SE artifacts for individual systems, developing scripts to auto-generate tailored artifacts proved cost effective and improved the efficiency of the component system developers. Additional scripts were developed to tailor the


modeling tool user interface and focus it on the specific activities performed by the SWFTS SE&I engineers. MagicDraw(tm) has very extensive modeling capabilities with a correspondingly expansive user interface, and tailoring the user interface both reduced the learning curve for new engineers coming onto the program and streamlined routine SWFTS SE activities.
While the initial scope of MBSE was limited to managing the interfaces between component systems, once the transition was successful MBSE started expanding out to encompass additional SWFTS SE&I tasks. MBSE is now beginning to spread into the component system programs as well as the overall submarine combat system SE&I program.

Return on Investment Achieved by Transitioning to MBSE
After the MBSE process reached a reasonable level of maturity, a retrospective analysis (Rogers III and Mitchell 2021) was performed to determine if the anticipated cost savings had been achieved. This analysis compared the requirements database-managed 2010 baselines, which were generated using the mature common requirements baseline and common change management process institutionalized by 2008, with the 2014 baselines built using the mature MBSE process. This analysis made a quantitative comparison of the efficiencies between the legacy interface requirements management process using the IBM DOORS(r) toolset, and the model-based interface requirements management process employing the MagicDraw(tm) toolset.
These two distinct SWFTS baseline updates provided a good case study as both
 utilized the same high-level SWFTS process and contract,
 involved updating the lead boat in a new group of submarines added to the SWFTS SE&I program, and
 involved updates to a similar number of submarine classes.
The second bullet is key, since it suggests that the overall level of complexity of the requirements changes is similar between the two sets of baselines.
The 2010 baseline developed using DOORS(r) will be referred to hereafter as the Legacy Process Baseline. The 2014 baseline developed using MBSE with the MagicDraw(tm) toolset will henceforth be referred to as the MBSE Baseline. The timing of these two baselines in the context of the MBSE transition is shown in Figure 3.
Figure 3. Timing of the Legacy Process Baseline and the MBSE Baseline relative to other SE process improvement. (Rogers III and Mitchell 2021)
Since a requirement modification is the basic unit of systems engineering work depicting development needs at the FoS level, it is a useful metric to compare the scope of the updates. As can be seen from Table 1, the MBSE Baseline involved 42% more interface requirements changes than the Legacy Process, while consuming only 16% more hours. Another way of looking at these numbers is that the SE hours per requirement decreased from 12.1 in the Legacy baseline to 9.9 in the MBSE baseline. This is equivalent to saying that the MBSE process is 18% more efficient than the older DBSE process. This exceeded the 13% improvement projected by the 2009 SWFTS pilot study (Mitchell 2014).
Table 1. Summary of the SWFTS MBSE ROI Analysis Baselines. (Rogers III and Mitchell 2021)
In addition to the decrease in labor hours per requirements change, measurable improvements in quality were found. A 9% reduction in total interface defects were discovered in the MBSE Baseline compared to the Legacy Process Baseline. In addition, there was an 18% shift of defect discovery from platform integration testing to laboratory integration testing with the MBSE Baseline. Estimates of the cost savings achieved by shifting defect eradication from platform integration to laboratory integration range from 1.6x (Rogers III and Mitchell 2021) to 4x (Feiler et al. 2013), but in any case these savings can contribute significantly to the overall ROI.


Lessons Learned
Seven learning principles (LPs) (Friedman and Sage 2005) were derived that address the more broadly applicable areas of systems engineering knowledge, and inform the areas of the SEBoK that are most strongly related to the case study. They are:
 Requirements traceability (LP1);
 Communications (LP2);
 Productivity (LP3);
 Quality (LP4);
 Managing Change (LP5);
 Managing variants (LP6); and
 Life cycle (LP7).
Requirements traceability LP1: MBSE improves traceability in multiple dimensions, but maintaining requirements traceability between a traditional database and the MBSE system model can be challenging. While DOORS, MagicDraw and Teamwork can interoperate to provide requirements management and traceability, the combination is fragile. Without careful configuration management, synchronization can lead to database corruption. If DOORS and Teamwork are on separate servers, maintaining the connection can run afoul of ever-evolving corporate information assurance policies.
Requirements can be managed using the SysML language inside the system model quite effectively. This approach can reduce the resources needed to keep the system model in sync with a traditional requirements database system and increase overall SE productivity.
Communications LP2: Tailored SE products generated from the system model can substantially enhance communications both within the technical team and between customer stakeholders.
Graphical depictions of the system model often communicate better to human stakeholders than massive spreadsheets and textual documents. Further, the enhanced precision driven by modeling can reduce miscommunications between both technical and programmatic stakeholders.
Having the architecture and design in a system model makes it affordable to generate specialized SE products on demand for particular communications needs while keeping all SE products in concordance. Even technical stakeholders who thought they understood the design can find new insights by looking at it in different representations.
Productivity LP3: MBSE increases productivity by enhancing communications within the team, automating routine tasks and through cost avoidance.
DBSE processes often require substantial revision to achieve the potential productivity gains of MBSE. In particular, review processes should be modified to take advantage of the tooling.
The modeling tools selected constrain how you can practically re-engineer SE processes. Automation can replace a great deal of routine SE work (document generation, identifying potential impacts of changes, etc.).
Developing strong modeling style guidelines and specialized representations, along with training materials to indoctrinate new team members as they join the program, is worth the investment. MBSE does require a trained cadre of modelers, but not all systems engineers have to become skilled modelers.
To effectively quantify the benefits of MBSE, a program needs to plan metrics collection carefully, and then stick to the plan long enough to collect meaningful data.
Quality LP4: Much of the ROI from the MBSE transition can be in improved quality. Improving the quality of SE products enhances early discovery of defects, which reduces integration costs. It also reduces latent defects in systems delivered to the customer, reducing maintenance costs and increasing customer satisfaction.


Models are less tolerant of imprecision than documents. The increased precision improves SE product quality, both in reduced defect generation and in reduced defect escape.
The automation of product generation can make specialized SE products affordable, further enhancing system quality.
Managing change LP5: How a proposed system change is understood and executed is fundamentally different between a model- and a document-centric approach. In the document-centric approach, the focus is on "What should my final output look like?" In the model-based approach, the focus is on "What does this change mean to the system? Which other parts of the system are impacted by this change?"
Change management is hard. When moving from DBSE to MBSE you need to think carefully up front about what approach you are going to take, and then design the system model to facilitate that approach. Change management also impacts tool selection, since different tools align better with different approaches.
Managing variants LP6: The most common process for managing variants in DBSE is 'clone and own', where each new product family member takes the then-current baseline and 'forks' the baseline for evolution of the variant. This makes synchronizing changes to the core baseline across the product family a very labor-intensive process. Treating variants as deviations from a core baseline in a model greatly reduces the cost of managing variation in a product family.
Variant management is hard. You need to think about what approach you plan to take up front and design your system model to accommodate it. The selected approach impacts tool selection and tailoring.
Design the system model to treat variants as deviations from the core baseline. Then changes to the core baseline are automatically shared among all variants, and impact to product family members is limited to any impact of core baseline change on specific variant deviations. This also facilitates commonality between variants, a key customer goal as commonality reduces logistics and training costs.
Life cycle LP7: MBSE can be applied early or late in the product family life cycle. While most projects using MBSE start off model-based, a program can transition to MBSE late in the life cycle.
Getting from DBSE to MBSE requires serious engineering, careful thought, planning and implementation. The SWFTS MBSE transition required three years of investment by the customer. That time and budget was spent primarily in designing and developing the system model and in re-engineering the SE processes.
Start the transition with carefully defined scope. Once that is accomplished you can expand the scope of MBSE from there.

References
Works Cited
Cooper, D. J., J. Sienkiewicz, and M. Oliver, "System engineering and integration for submarine combat systems in the COTS environment", NDIA Systems Engineering Conference, San Diego, CA, 23-26 October 2006.
Fages, H I. 'Submarine programs: A resource sponsor's perspective," The Submarine Review, July pp. 53-59, 1998. Feiler, Peter H., John B. Goodenough, Arie Gurfinkel, Charles B. Weinstock and Lutz Wrage, "Four Pillars for Improving the Quality of Safety-Critical Software-Reliant Systems", CMU/SEI White Paper, April 2013. Accessed
10 Sept 2017 at http://www.dtic.mil/get-tr-doc/pdf?AD=ADA585679
Ford, D. N., and J. T. Dillard, "Modeling open architecture and evolutionary acquisition: implementation lessons from the ARCI program for the Rapid Capability Insertion process ", Proceedings of the Sixth Acquisition Research Symposium: Defense Acquisition in Transition 2 (Apr 2009): pp. 207- 235.
Friedman, G.R. and A.P. Sage, "Case studies of systems engineering and management in systems acquisition."
Systems Engineering, vol. 7, No. 1, pp. 84-97, 2004.


Jacobus, P., P. Yan, and J. Barrett, "Information management: The advanced processor build (tactical)", JOHNS HOPKINS APL TECHNICAL DIGEST, vol. 23, No. 4 Jan, pp. 366-372, 2002.
Mitchell, Steven W., "Efficiently Managing Product Baseline Configurations in the Model-Based System Development of a Combat System Product Family", INCOSE International Symposium, Rome, Italy, July 2012.
Zingarelli, M. A., S. R. Wright, R. J. Pallack, and K. C. Matto, "SWFTS - System engineering applied to submarine combat systems," Engineering the Total Ship, Falls Church, VA, July 2010.

Primary References
Mitchell, S. W., "Transitioning the SWFTS program combat system product family from traditional document-centric to model-based systems engineering", Journal of Systems Engineering, Vol. 17, No. 2, Spring 2014.
Rogers III, Edward B. and Steven W. Mitchell, "MBSE Delivers Significant Return on Investment in Evolutionary Development of Complex SoS", Systems Engineering, vol. 24, No. 6, pp. 385-408, November 2021. DOI 10.1002/sys.21592

Additional References
Gibson, B., S. W. Mitchell, and D. Robinson, "Bridging the gap: Modeling federated combat systems," Third International Conference on Model Based Systems Engineering, Fairfax, VA, Sept 2010.
Mitchell, S. W., "Model-based system development for managing the evolution of a common submarine combat system," A FCEA-GMU C4I Center Symposium on Critical Issues in C4I, 18-19 May 2010.
Mitchell, S. W., "Complex product family modeling for common submarine combat system MBSE," Third International Conference on Model Based Systems Engineering, Fairfax, VA, Sept 2010.
Mitchell, S. W., "Efficient management of configurations in the model-based system development of a common submarine combat system," A FCEA-GMU C4I Center Symposium on Critical Issues in C4I, 24-25 May 2011.

Note
OMG(r) and SysML(r) are registered trademarks of Object Management Group, Inc. in the United States and/or other countries. IBM(r), Rational(r), and DOORS(r) are registered trademarks of International Business Machines Corporation, registered in many jurisdictions worldwide.


Virginia Class Submarine

 Lead Authors:
 Heidi Davidz and Alice Squires
-
This example was developed as a SE example directly for the SEBoK. It describes the Virginia Class submarine sonar system project. In particular, it highlights the approach taken to the development of a sonar system architecture and how this helped in the integration of commercial off the shelf products.

Description
Prior to the Virginia class submarine, sonar systems were comprised of proprietary components and interfaces. However, in the mid-1990s, the United States government transitioned to the use of commercially developed products - or commercial off the shelf (COTS) products - as a cost-saving measure to reduce the escalating costs associated with proprietary-based research and development. The Virginia class submarine system design represented a transition to COTS-based parts and initiated a global change in architectural approaches adopted by the sonar community. The lead ship of the program, Virginia, reduced the number of historically procured parts for nuclear submarines by 60% with the use of standardization. The Virginia class submarine sonar system architecture has improved modularity, commonality, standardization, and reliability, maintainability and testability (RMT) over historical sonar systems.

Architectural Approach: Standardization
Based on the new architectural approach and the success of the transition, system architecture experts developed an initial set of architecture evaluation metrics:
 Commonality
 Physical commonality (within the system)
 Hardware (HW) commonality (e.g., the number of unique line replaceable units, fasteners, cables, and unique standards implemented)
 Software (SW) commonality (e.g., the number of unique SW packages implemented, languages, compilers, average SW instantiations, and unique standards implemented)
 Physical familiarity (with other systems)
 Percentage of vendors and subcontractors known
 Percentage of HW and SW technology known
 Operational commonality
 Percentage of operational functions which are automated
 Number of unique skill codes required
 Estimated operational training time (e.g., initial and refresh from previous system)
 Estimated maintenance training time (e.g., initial and refresh from previous system)
 Modularity
 Physical modularity (e.g., ease of system element or operating system upgrade)
 Functional modularity (e.g., ease of adding new functionality or upgrading existing functionality)
 Orthogonality
 Level to which functional requirements are fragmented across multiple processing elements and interfaces
 Level to which throughput requirements span across interfaces
 Level to which common specifications are identified


 Abstraction (i.e., the level to which the system architecture provides an option for information hiding)
 Interfaces
 Number of unique interfaces per system element
 Number of different networking protocols
 Explicit versus implicit interfaces
 Level to which the architecture includes implicit interfaces
 Number of cables in the system
 Standards-based openness
 Interface standards
 Ratio of the number of interface standards to the number of interfaces
 Number of vendors for products based on standards
 Number of business domains that apply/use the standard (e.g., aerospace, medical, and telecommunications)
 Standard maturity
 Hardware standards
 Ratio of the number of form factors to the number of line replaceable units (LRUs)
 Number of vendors for products based on standards
 Standard maturity
 Software standards
 Number of proprietary and unique operating systems
 Number of non-standard databases
 Number of proprietary middle-ware
 Number of non-standard languages
 Consistency orientation
 Common guidelines for implementing diagnostics and performance monitor/fault location (PM/FL)
 Common guidelines for implementing human-machine interface (HMI)
 Reliability, maintainability, and testability
 Reliability (fault tolerance)
 Critical points of fragility (e.g., system loading comprised of percent of processor, memory, and network loading)
 Maintainability (e.g., expected mean time to repair (MTTR), maximum fault group size, whether the system can be operational during maintenance)
 Accessibility (e.g., space restrictions, special tool requirements, special skill requirements)
 Testability
 Number of LRUs covered by built-in tests (BIT) (BIT coverage)
 Reproducibility of errors
 Logging/recording capability
 Whether the system state at time of system failure can be recreated
 Online testing (e.g., whether the system is operational during external testing and the ease of access to external test points)
 Automated input/stimulation insertion


Other Points
The Virginia class submarine acquisition exhibited other best practices. These are discussed by Schank (2011), GAO (2008), and General Dynamics (2002).
These best practices included stringent design trades to keep costs under control, careful consideration of technical maturity of components, and the importance of program stability.

Summary
In summary, the work on the Virginia class submarine prompted a change in the traditional architectural approach used in the sonar community to design submarine sonar and validated the cost savings in both research and development (R&D) and in component costs when transitioning from proprietary interfaces to industry standard interfaces. The identification of a list of feasible architecture evaluation metrics was an added benefit of the effort.

References
Works Cited
GAO. Defense Acquisitions: Assessment of Selected Weapon Programs Report. Washington, DC, USA: US. Government Accountability Office (GAO). March 2009. GAO-09-326SP.
GD Electric Boat Division. The Virginia Class Submarine Program: A Case Study. Groton, CT: General Dynamics. February 2002.
Schank, J.F. et al. Learning from Experience, Volume 2: Lessons from the U.S. Navy's Ohio, Seawolf, and Virginia Submarine Programs. Santa Monica, CA, USA: Rand. 2011. Available at http:/ / www. rand. org/ content/ dam/ rand/pubs/monographs/2011/RAND_MG1128.2.pdf [1]

Primary References
None.

Additional References
None.

References
[1] http://www.rand.org/content/dam/rand/pubs/monographs/2011/RAND_MG1128.2.pdf




Information System Examples

Complex Adaptive Taxi Service Scheduler

 Lead Author:
 Rick Adcock
-
This article is based around a London Taxi Service Case Study (Rzevski and Skobelev, 2014). The case study focuses on the development of a Real-Time Complex Adaptive Scheduler for a London Taxi Service capable of managing the complexity of many hundreds of taxi journeys in an unpredictable and changing environment, while fitting into the goals and values of the Enterprise.

Background
When this project was initiated, the company, the largest and the best-known minicab (taxi) operator in London had a fleet of more than 2,000 vehicles, each with a Global Positioning System (GPS) navigation system. The fleet comprised a variety of vehicles, including minivans and Sport Utility Vehicles (SUVs), some with equipment to match special customer requirements. Under usual circumstances, approximately 700 drivers worked concurrently, competing with each other for customers.
The company had a modern Enterprise Resource Planning (ERP) system and a call center with over 100 operators receiving orders concurrently. Some orders were received through the company website. A large team of skilled dispatchers allocated vehicles to customers.
Main characteristics of the taxi service were as follows:
 More than 13,000 orders per day
 Occasionally more than 1,500 orders per hour (1 order every 2.4 seconds)
 Unpredictable order arrival times and locations
 Various clients, e.g., personal, corporate, Very Important Persons (VIPs), a variety of discounted tariffs, special requirements suitable for the disabled, small children (child seats), transportation of pets, etc.
 Many freelance drivers who leased cars from the company and were allowed to start and finish their shifts at times that suited them, which may have differed from day to day
 Clients in central London were guaranteed pick up times within 15 minutes of order placement
 Fundamentally, the company tried to find the best economic match of vehicle to every client. However, dynamic exceptions to this basic requirement included:
 Matching drivers going to and from home with passengers travelling in the same direction (to reduce drivers' idle runs); and
 Giving priority to drivers with less work during a particular day (to increase drivers' satisfaction with working
conditions)
No pre-planned taxi schedule was viable because any of the following unpredictable "Disruptive Events" occurred every 2 to 10 seconds:
 Order arrival, change, or cancellation
 Changes in driver profile, status, or location
 Client no-show
 Vehicle failure


 Delays due to traffic congestion, or queues at airports, railway stations, etc.

Purpose
Rescheduling up to 700 independent entities travelling in London under unpredictable conditions that change every few seconds represented an exceedingly complex task, which was not feasible to accomplish using any known mathematical method.
Manual scheduling, as practiced, could not handle the frequent disruptive events. Many perturbations, such as unexpected delays, had to be ignored by the human dispatchers.
Therefore, the project's objective was to provide effective, real-time, automated assistance to accommodate the disruptions that drove the scheduling. Thus, the project purpose became the development of a complex adaptive software system capable of managing the taxi operation complexity described above with the aim of substantially improving: (1) operational profitability; (2) customer service quality; and (3) driver working conditions.
The planned transformation was from a manual to semi-automated managed taxi operation that facilitated optional human dispatcher interactions with a complex adaptive system scheduler. A thorough analysis of contemporary practices showed that such a transformation has never been achieved before. To the best of the project team's knowledge, there were no real-time schedulers of taxi operations in existence anywhere in the world.

Challenges
The team undertaking the development of a new real-time scheduler for this client had vast experience of designing and implementing complex adaptive software, and therefore no particular challenges were anticipated. The multi-agent technology, which underpinned the system, was well understood by the team, and a methodology for managing complexity (Rzevski and Skobelev, 2014) of the task was in place.

Systems Engineering Practices
Overview
The complexity of the taxi service ruled out all conventional systems engineering practices. The real-time adaptive scheduler for the client's taxi service was developed using multi-agent software technology. STOPPED HERE The scheduler design consisted of the following major components (Rzevski and Skobelev, 2014):
1. A Knowledge Base containing domain-useful information relevant to the client's taxi service
2. A Multi-agent Virtual World which models the Real World of the taxi service and is capable of managing its complexity
3. Communication channels between the Virtual and Real Worlds which enable the Virtual World management of the Real World with or without human intervention.
The system was designed to behave as follows. In reaction to every disruptive event, Order Agents, assigned to every received order, and Driver Agents, assigned to every working driver, negotiate the most suitable Order-Driver match through the exchange of messages. Before starting negotiations, these software agents consult the Knowledge Base for the current negotiation rules. Once the best possible match (under prevailing circumstances) is agreed upon, the result is communicated to Drivers, who are free to accept or reject the task (Glaschenko et al. 2009). This process is depicted simply in the figure below.
After a successful prototype implementation, a basic version of the complex adaptive scheduler was developed as described below.





Knowledge Base
The Knowledge Base consisted of: (1) Ontology, containing conceptual knowledge as a semantic network; and (2) Values, in standard databases.
The basic Ontology contained two Object Classes: Order and Driver. Order attributes were:
 Location of pick-up and drop-off
 Pick-up( urgent or booked in advance for a certain date and time)
 Type of service (standard car, minivan, VIP, etc.)
 Importance of service (a number from 0 to 100 depending upon the client)
 Special requirements (pet, child chair, etc.) Driver attributes were:
 Type of vehicle
 Capability to complete special jobs
 Driver experience (novice or experienced)
 Domicile of driver
 Current vehicle location (GPS coordinates)
 Driver status (unavailable, break, working, free, will be free in 5/10 minutes, home transit)
Factual data on Object Instances (Individual Orders and Drivers/Vehicles statuses) were stored in client's databases, including Scenes (i.e., instantaneous models of the taxi service yielding every vehicle location and driver availability).

Virtual World
In the basic version of the scheduler, the allocation of taxis to customers was done by the negotiation between Order Agents, assigned to customers, and Driver Agents, assigned to taxi drivers. Order Agents were active: they compiled lists of available vehicles and initiated negotiations with Driver Agents. In this first version of the system, Driver Agents were designed to be only reactive: they only replied to requests from Order Agents and implemented the option selected by an Order Agent.
In the extended version, hereafter described, Order Agents and Driver Agents competed with each other or co-operated, depending on what was best for the whole enterprise. In addition to Order and Driver Agents, this version used some new types of agents, namely: External Events Agents, Regional Loading Agents, and Orders Allocation Agents.
Agents were designed to use flexible decision-making criteria instead of direct priorities, which is valuable when there is a need to deal with different categories of clients. For example, if a VIP order arrived and there was only one


driver that fully corresponded to the specified requirements and if that driver was already assigned to another job, the system would nevertheless allocate the VIP order to this driver and initiate re-scheduling of the previously agreed matches, if required.
The system first attempted to maximize company profit. Then, other criteria that are important for the business were considered, such as the service level and driver working conditions. For example, when choosing from two approximately equal options the system allocated the order to the driver who had not received orders for a longer time, thus ensuring relatively fair distribution of orders.
This virtual agent-based scheduling system was designed to work effectively with human dispatchers. In a situation where one dispatcher takes a new order and schedules a vehicle to come from north to south to pick up a client, and another dispatcher independently schedules another vehicle to go from south to north for another order, the virtual agents can spot this schedule anomaly and recommend dispatchers change their decisions to be more effective.
To enable improved performance, the taxi allocation system functioned in short cycles rather than as an immediate reaction to every event. Between the cycles, the system collected the events and placed them in a queue. During each cycle, the events from the queue were processed one by one and appropriate agents, in turn, were given control by a designated human system dispatcher. Each event thus initiated a chain of negotiations among virtual agents. When all events were processed and the system dispatcher was satisfied that the best possible schedule was produced for that cycle, the schedule perturbation was implemented in the real world, and the system fell asleep (was idled) until a new event arrived causing the initiation of the next cycle.
To decrease the dimensions of the decision space, a pre-matching mechanism was used, which determined the suitability of Order-Driver matching. This mechanism cuts off unpromising options.
The Order-Driver pairs were evaluated before the final decision was made. An evaluation mark was given to each option and good options were remembered so that the evaluations did not need to be repeated later. The evaluation mark was determined using a multi-criteria model and calculated as a sum of all criteria values multiplied by their (variable) weights.
The following criteria were used for option evaluation: distance to the order, predicted delay of the pick-up, if any, preferences of the driver, driver experience, distance of the driver to overloaded area (to utilize drivers from outlying districts), service level conformity, importance and priority of the order, driver's place in a queue (if he is waiting at an airport), driver's home address (if he is looking for an order to or from home).
Scheduling workflow included the following steps:
1. New order arrives and joins the event queue
2. Possibility of order scheduling is checked
3. A software agent is assigned to the order
4. All drivers that can complete this order are included in pre-matching
5. Evaluation of all Order-Driver pairs is done according to agreed criteria
6. The Order Agent requests order completion costs from selected Driver Agents. This cost includes the cost of transferring the order from the previously allocated driver, if any
7. The Driver Agent receives the information on the reallocation costs by sending a request to its current Order Agent
8. If the revised decision is better than the previous one, it is applied
9. Step 6 continues for all candidate drivers, for whom the initial evaluation (without transfers) was better than the current evaluation
10. If no further changes occur during the cycle, the event processing is considered finished
In order to achieve the best possible solution, the system continued to search for improvements in previously agreed Order-Driver matches until the last moment when it had to issue the instruction to a driver to fulfil an order (commitment time). During this time interval, the Driver was considered to be available for new allocations but only


if the new allocation improved specified performance indicators.
When required, Driver Agents attempted "to come to an agreement" with each other about proposed re-allocation of orders. Occasionally, compensation was offered to the Driver Agent who lost a good client in order to improve overall value of the business, and Driver Agent satisfaction, in particular. Very often the re-scheduling of allocated resources caused a wave of negotiations aimed at the resolution of conflicts between new and old orders. The length of the re-scheduling chain was limited only by the time required for a taxi to reach a customer in a busy city such as London, which normally was sufficient for several changes of the schedule.
To summarize, the system built a schedule and perpetually reviewed it, attempting to improve key performance indicators as long as the time for essential re-scheduling was still available.
The Commitment Time was dynamically calculated for each order, taking into account the priority and service type of the order and some other parameters. The introduction of the dynamic Commitment Time resulted in the increase of the fleet effectiveness by reducing the average task completion time per driver.
An option was introduced for the system to distribute the fleet according to the order-flow forecasts. Having information about the current order-flow and distribution of orders in the past, the expected order-flow was extrapolated, enabling the system to generate short-term (30 minutes) forecasts, which were normally reasonably correct. Based on the forecast, the system sent text messages to unoccupied drivers with recommendations to stay in, or move to, the region where an increased order flow was expected. This feature enabled an improved distribution of the fleet, reducing response times and idle miles and increasing the number of pick-ups.
In cases when forecasts envisaged a probability of a VIP order arrival at a significant distance from the point where drivers were advised to congregate, the system would recommend that a proximate driver to move closer to the likely order point, offering him/her a guaranteed next order in exchange for compliance. This was an important feature because there were usually enough proximate drivers to complete available orders in areas that were not overloaded, and productivity of work in overloaded areas determined the actual fleet effectiveness. The system was also designed with an option to temporarily amend criteria for the allocation of orders to drivers (for example, to extend the area where drivers are allowed to search for orders) to enable drivers to reach critical locations without being intercepted by less important orders from nearby locations.
The forecasting functionality was supported by an agent-based dynamic data mining system, which was, in fact, another complex adaptive system cooperating with the complex adaptive scheduler.
In later versions the system was designed to detect and identify drivers that cheat, i.e., deliberately providing the scheduler with false information to gain personal advantages. Recorded cases include attempts to:
 Reduce their ultimate waiting time by reporting that they were already waiting in an airport queue when, in reality, they may still have been tens of miles from the airport
 Get an earlier next order by indicating "free in 10 minutes" at or near the beginning of a long assignment
 Receive orders in their home direction by indicating "going home" several times during a day.
To reduce cheating, Driver Agents were designed to monitor drivers' schedules and ignore their messages, when judged inappropriate.
The final version of the complex adaptive taxi service scheduler negotiated only with agents that were affected by a disruptive event and then modified only affected parts of the schedule. This capability was a key feature that improved overall effectiveness.


Connecting Virtual and Real Worlds
The Virtual World, which is a model of reality and resides in the scheduler, is connected with the Real World of customers, dispatchers, and drivers, as follows.
As customers ring the call center or visit the website to place, modify or cancel an order, dispatchers enter the pertinent information into the system. Drivers communicate with the system using GPS, mobile phones, or specialized handheld devices, conveying information on their location, direction of travel, availability, etc., and, in turn, receive instructions to pick up customers.

Lessons Learned
The system began its operation and maintenance phase in March 2008, only 6 months from the beginning of the project.
Results were extremely good: 98.5 % of all orders were allocated automatically without dispatcher's assistance; the number of lost orders was reduced by up to 2 %; the number of vehicles idle runs was reduced by 22.5 %. Each vehicle was able to complete two additional orders per week spending the same time and consuming the same amount of fuel, which increased the yield of each vehicle by 5 - 7 %.
Time required to repay investments was 2 months from the beginning of the operation and maintenance phase. During the first month of operation the fleet utilization effectiveness was increased by 5 - 7 %, which represents potential additional revenue of up to 5 million dollars per year. Such realized additional income has benefited both the company and the taxi drivers. According to available statistics, driver wages have increased by 9 % since 2008, and there is a possibility for an overall fleet growth.
Delayed pick-ups were reduced by a factor of 3, which considerably improved customer service. Urgent order average response time (from booking until taxi pick-up arrival) decreased to 9 minutes, which is the best time among all taxi services in London. For high priority orders, the response time is 5 - 7 minutes or less. Response time reductions are especially noticeable in overloaded areas.
Implementation of "on the way home" orders, an improved allocation mechanism, when compared with a previous system, gives 3 - 4 thousand miles reduction in daily fleet run, greatly benefiting both drivers and the city's ecology.
Further developments targeting business effectiveness improvements may include an analysis of vehicle movements to determine actual vehicle velocities that could improve courier service by increasing the number of orders per courier.

References
Works Cited
Rzevski, G., Skobelev, P. 2014. Managing Complexity. WIT Press, New Forest, Boston. ISBN 978-1-84564-936-4.
Glaschenko, A., Ivaschenko, A., Rzevski, G., Skobelev, P. "Multi-Agent Real Time Scheduling System for Taxi Companies". Proc. of 8th Int. Conf. on Autonomous Agents and Multiagent Systems (AAMAS 2009), Decker, Sichman, Sierra, and Castelfranchi (eds.), May, 10-15, 2009, Budapest, Hungary. ISBN: 978-0-9817381-6-1, pp. 29-35.


Primary References
Rzevski, G., Skobelev, P. 2014. Managing Complexity. WIT Press, New Forest, Boston. ISBN 978-1-84564-936-4.

Additional References
None.

Successful Business Transformation within a Russian Information Technology Company

 Lead Author:
 Brian White
-
This article describes a successful business transformation of an information technology enterprise. The topic may be of particular interest, especially because this transformation was accomplished by a Russian company during the republic's fast-growing economic recovery.
For addition information, refer to the closely related topics of Enabling Businesses and Enterprises and Enterprise Systems Engineering.

Background
In 2001, the top management of the IBS company [1] in Moscow initiated a fundamental transformation to change the company's strategy and business model. The company was one of the biggest Russian information technology (IT) systems integrators at that time, with about 900 employees. Annual revenues of about $80M were mainly generated by information technology (IT) infrastructure projects (complex computing systems, multi-service networks, etc.) and hardware and software distribution. The transformation of the company to form new capabilities in IT services and the associated consulting area is the main topic in the case study.
During the transformation period (from 2001 to the present) IBS was represented as a set of autonomous business units (BUs), called constituent systems, which are virtual, independent businesses with the following characteristics:
 Profit and loss reporting was required for each BU according to management accounting procedures
 BU management established and independently conducted human resources, technology, and product policy
 A centralized back-office was organized to provide supporting functions for each BU. Thus, BUs do not have back-offices; they rely on and "pay" a corporate governing center (CGC) for these services.
A thorough enterprise system (ES) transformation was executed as a set of activities: mission analysis and capabilities decomposition, business architecting, planning of the project program, and implementation of the new business model.
Before and after transformation IBS was an exemplar directed system of systems (sos): the constituent BUs are autonomous but their operations are supervised by CGC. At the same time IBS also has significant features of an acknowledged SoS: the constituent BUs retain their independent development and sustainment approaches, and changes in the company are based on collaboration between the CGC and each constituent; even operations of BUs are not controlled but only supervised/governed by the CGC through "soft" recommendations and coordination.
IBS was a quite mature ES before the transformation, and it was thoroughly upgraded to form new capabilities of the whole system as well as of the constituents.


Purpose
In 2000-2001 IBS management forecasted considerable growth of the Russian IT services and consulting market based on the fast growing Russian economy, which was rapidly recovering from the national financial crisis of 1998. The largest corporations started overseas expansion and borrowed from international markets to finance this growth. IBS predicted corresponding growth in the complexity of business processes and their associated software and hardware systems, all of which should require more consulting and IT services.
Based on this forecast, management established a strategy goal to double the share of IT services and consulting from 25% to 50% over one year; further growth in this business was planned as a long-term trend.
The consulting and IT services business is very complex technologically and organizationally and dramatically differs from IBS's former infrastructure focus. Thus, a fundamental transformation was required, and it was executed during 2002.
Initially detected problems appeared as expenditures exceeding resources, slow delivery of the projects and reworking. Later, as it was expected, new problems appeared, for example, disinterest of BUs' managers in developing new technologies or raising qualified employees' motivation. All those problems were solved during transformation and during further development.
The first step of the transformation included strategic analysis and mission-to-capabilities decomposition. Five major capability groups to be focused on were defined. The groups and exemplar capabilities for each group are represented at Figure 1.



Challenges
All main challenges were caused by knowledge/information deficit described by three factors listed as a, b, and c below.
a. The lack of experience in enterprise transformation (and capability-based approaches, even the lack of any textbooks or guides in those areas) was the major challenge which IBS management faced. The task to be solved did not devolve to organizational changes (which was a well-developed and described area), but was appropriately allocated to enterprise system or system of systems (SoS) engineering. In spite of the lack of experience, it was decided to prepare and execute the transformation based on the company's employees without involving external consultants. The following arguments supported the decision.
 The task to be solved was not typical, so there weren't widely used and well tested algorithms or methods, and there weren't a lot of consultants experienced in exactly what was needed. So only consultants with general experience (strategy consulting, organizational management) might be hired.
 The Russian consulting industry in 2001-2002 was not well developed, so only foreign professionals were available. But foreign consultants would have needed to study Russian specifics; such study would have unduly lengthened the duration and increased the cost of the transformation.
 A joint transformation team would have to be formed, and IBS employees would have to be involved: management would have to be interviewed and be involved in decision making. In any case, all employees would have to participate in change implementations.
 External consultants are not stakeholders; so their level of interest in helping to achieve success might not be very high, and their output also might not be outstanding.
 Unwillingness to open professional secrets and other intellectual property issues to direct competitors were other factors that prevented hiring of external consultants.
Thus, the final decision was to execute the transformation without involvement of external consulting resources. A special BoU responsible for business processes development was established and an agile program management approach was applied to handle challenges and to pursue opportunities as well as to mitigate risks.
b. A very high complexity IBS as an enterprise system or SoS. Management recognized that the company and its environment was very complex, with many different agents, many constituents, and countless relationships; and that an enterprise system or SoS might become even more complex after transformation. This complexification happened as the company became an "extended enterprise," the governing hierarchies weakened, and the demand for more sophisticated relationships increased.
c. The risk of mistaken forecast of IT market development. The expected growth of the consulting and services market might have not happened. In this case the transformation would have been senseless. This challenge generated additional emotional stress for management.

Systems Engineering Practices
The SE task of the transformation was established in the form: to develop required capabilities for an enterprise system or SoS - IBS company. The SE process might be represented by the following specific IBS interpretation of the vee (v) model ("V model") with Stages 1 through 7 (Figure 2).
Initially (Stage 1) the mission was translated to capabilities (Figure 1); "understanding the constituent systems (BUs) and their relationships" was executed. The transformation team found that capabilities might not be directly translated to any business-agent. Neither BUs (they serve as resource pools), nor projects (being temporal elements), nor employees (each of them have a finite set of skills, experience, responsibilities, etc.) might realize necessary capabilities.
Realizing this (Stage 2) transformation team defined several key areas (Figure 2) of company's operations or activities which were supposed to be changed to form new capabilities. Appropriate artifacts (procedures, guides,


documents, software systems) to support new capabilities were developed and implemented for each of the areas; these new assets formed exactly the corporate infrastructure of new business model.

For each new and legacy system (Stage 3), a set of conceptual design documents was developed, describing approaches, polices, processes, and procedures. The entire set of documents formed the business architecture description of the company. The description connected all key areas and defined a target operation model of the company after transformation. This architecture represented multiple views of the IBS company, and thus aptly reflected its enterprise system or SoS nature.
Somewhat in contrast with the conventional linear systems engineering approach advocated by the V model, Stages 4-6 were conducted in parallel to save time and resources. The company's performance (Stage 7) should be monitored based on indicators' measurements, and improvements should be developed and implemented (arrows from Stage 3 to Stage 7). Such iterations have been executed in practice not only during transformation but also later, when procedures, guides and the whole systems were updated.
Integration and interoperability of the new systems required a thorough integration of parallel development jobs. So joint workgroups were formed of the employees at the level of low officers; and CGC played the role of integrated workgroup at the management level. Actually, multi-level integrated workgroups were formed.
The major complexity and risks derived from the challenges described above.
The transformation team developed and used an approach which is very similar to the agile development approach to address those risks. The following principles were used to manage the portfolio of projects in case of uncertainty and deficit of knowledge.
 Form solutions as fast as possible (but not necessarily with pure quality) to test them in practice faster.
 Recognizing failures are unavoidable, perceive them readily and react rationally.


 In case of failure, analyze the situation and find a new solution, generate changes, and update the plan.
 Work in parallel, verifying and coordinating intermediate results.
 The schedule might be corrected and updated but should not be jeopardized by improper execution.
 Formulate and test the most critical and most questionable solutions at first.
 Start from pilot area and then expand to embrace the entire scope.
 Use high quality monitoring and a "manual control mode" for piloting and testing developing solutions but not additional aspects to limit waste of the resources.
Following those principles, including a very strong discipline of execution, a high level of the sponsorship and all-employee involvement enabled the transformation to be completed on time without hiring consultants while keeping and developing on-going business.

Lessons Learned
IBS's accomplishment of the mission was the major result of ES transformation. Shareholders and management recognized that new capabilities had been formed, that the company could deliver consulting and services, sell and execute complex projects, manage consulting resources effectively, measure its performance, and plan and forecast financial results. Created capabilities are emergent in some sense because they are not directly related to concrete constituents (BUs, or employee, or projects) but are realized by means of integrated end-to-end processes and functions, which are executed in the projects by employees.
The systems organization did not dramatically change during transformation; "visible structure" was not practically changed: no new types of business-agents appeared, existing types did not change much. Those factors did not create new capabilities. Target capabilities were formed as the result of development and implementation of, it would seem, auxiliary and supporting tools - new capabilities support systems. New capabilities were formed mainly by the changes in the intangible areas of governing media, corporate culture, relations, and personnel competences; as well as by the creation of new capabilities support systems; without considerable changes in main company's business-agents. (Refer to Figure 3.)
The main challenges which management faced (the lack of experience and the ambiguity of market growth forecast) made the uncertainty factor the critical one in the transformation.

What Worked and Why?
An agile program management in general demonstrated its efficiency and applicability to "soft and uncertain" tasks, especially in triggering a pre-established process for dealing with unexpected events; the main aspects of the approach are:
 Senior and credible sponsors
 Multi-level integrated project team(s)
 Open information exchange
 Partnership and collaboration
 Proactive and motivated parties and constituents
 Creative and innovative way of development




 Prioritizing and focusing on the most ambiguous elements of systems design
 Piloting and subsequent roll-out in realistic environments
 Strong project scope control
 Strong project execution control - time schedule and resources control.

What Did Not Work and Why?
Perhaps corporate knowledge base development was the only more or less serious task which was not solved in transformation. The company's management understood the usefulness of knowledge accumulation and further alienation from the carriers in utilizing their business knowledge, so the goal of developing their own knowledge base was established. Special database and software systems were developed with appropriate guides, reports and data collection forms; but formal regulation to fill in engineering knowledge accumulation templates did not work. However, this issue later progressed quite naturally and simply: common folders were established to store project data in free formats. Such folders served to accumulate knowledge but in flat, unstructured form.


Best Practices and Replication Prospects
The following methods and approaches were proven as efficient and convenient in transformation.
1. Capability-based development approach and capability-based architecting might be recommended to be utilized in creation and transformation of an enterprise system or SoS. These focused all efforts on the required capabilities and involved very important relations from mission to capabilities and to functions in the systems engineering process.
2. An agile program management might be used to solve a wide range of fuzzy and ambiguous problems of different scale in the areas of SE, ES engineering, and SoS engineering where there is much uncertainty and lack of expertise and proven methods or algorithms to solve them. The combination of "soft" and very creative designs with strong planning and progress control is the crucial foundation of this approach.
3. Key area definition and development appropriate to generating new capabilities for support systems (core consulting and services technologies, project implementation systems, systems for business unit growth, management accounting systems, motivation systems). Precisely defining these areas and developing integrated systems in these areas might be considered as quite common for application to a broader group of ESs.

References
Works Cited
Belov, M. 2014. "IBS Group, Eastern European ITS Services - Capability-Based Development for Business Transformation," in Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering, A. Gorod et al., (Eds.). Boca Raton, FL, USA: CRC Press, Taylor & Francis Group.

Primary References
Belov, M. 2014. "IBS Group, Eastern European ITS Services - Capability-Based Development for Business Transformation." Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering. Gorod, A., B. E. White, V. Ireland, S. J. Gandhi, and B. J. Sauser, (Eds.). Boca Raton, FL: CRC Press, Taylor & Francis Group. Scheduled for publication in July 2014. http://www.taylorandfrancis.com/books/details/9781466502390/
.

Additional References
None

References
[1] http://www.en.ibs.ru/


Federal Bureau of Investigation (FBI) Virtual Case File System

 Lead Authors:
 Heidi Davidz and John Brackett
-
This case study presents systems and software engineering issues encountered in the Federal Bureau of Investigation (FBI) Virtual Case File (VCF) project in the period between 2000-2005. VCF development was abandoned in 2005 after over $170 million had been spent.

Domain Background
The FBI is an organization within the United States Department of Justice (DoJ) consisting of 23 divisions, including counterintelligence, criminal investigation, and cybercrime. The Bureau's 12,400 agents investigate everything from counter-terrorism leads to kidnappings. They interview witnesses, develop informants, conduct surveillance, hunt for clues, and collaborate with local law enforcement to find and arrest criminals. Agents document every step and methodically build case files. They spend a tremendous amount of time processing paperwork. This system of forms and approvals stretches back to the 1920s when forms for all of the bureau's investigative reports were standardized.
In 2000, the Bureau had hundreds of standardized paper forms and an obsolete information technology (IT) systems. The FBI's 13,000 computers could not run modern software. Most of the agency offices were connected to the FBI Intranet with links operating at about the speed of a 56 kilobits-per-second modem. Agents could not e-mail U.S. Attorneys, federal agencies, local law enforcement, or each other; instead, they typically sent case-related information by fax. The agency's problems in 2000 were summarized in the 9/11 Commission Report: "The FBI's information systems were woefully inadequate. The FBI lacked the ability to know what it knew; there was no effective mechanism for capturing or sharing its institutional knowledge" (National Commission on Terrorist Acts upon the United States 2004).
In September 2000, Congress approved $380 million over three years for what was then called the FBI Information Technology Upgrade Program. Eventually divided into three parts, the program became known as the Trilogy Information Technology Modernization Program. The first part would provide all 56 FBI field offices with updated computer terminals, as well as new hardware such as scanners, printers, and servers. The second part would re-implement the FBI Intranet to provide secure local area and wide area networks, allowing agents to share information with their supervisors and each other. The third part was intended to replace the FBI's investigative software applications, including the obsolete Automated Case Support (ACS) system.
In June 2001, the FBI awarded a contract to develop the investigative software applications of Trilogy to Science Applications International Corporation (SAIC) over a three year period. The purpose of the software to be developed was to:
 provide the capability to find information in FBI databases without having prior knowledge of its location, and to search all FBI databases with a single query through the use of search engines;
 Web-enable the existing investigative applications;
 improve capabilities to share information inside and outside the FBI;
 provide access to authorized information from both internal and external databases; and
 allow the evaluation of cases and crime patterns through the use of commercial and FBI-enhanced analytical and case management tools.
After the September 11 terrorist attacks, the inability of FBI agents to share the most basic information about al Qaeda's U.S. activities was front-page news. Within days, the FBI's obsolete technology infrastructure was being


discussed in Congress and the FBI was under intense pressure to improve its information sharing capabilities. On September 4, 2001, Robert S. Mueller III became FBI director, and, in the face of intense public and congressional pressure, Mueller accelerated the Trilogy program. The planned three-year period to develop the investigative software was considered politically unacceptable. In January 2002, the FBI requested an additional $70 million to accelerate Trilogy; Congress went further, approving $78 million.
Providing web-enablement of the existing but antiquated and limited ACS system would not provide the investigative case management capabilities required to meet the FBI's post-September 11 mission. In December 2001, the FBI asked SAIC to stop building a Web-based front end for the old programs. Instead, SAIC was asked to devise a new case management system, the Virtual Case File (VCF), to replace ACS. The VCF would contain a major new application, database, and graphical user interface. In order to make both criminal and terrorist investigation information readily accessible throughout the FBI, major changes to the standardized FBI processes would be required. This case study focuses on the VCF component of the Trilogy program.

Case Study Background
The most complete description of the development of the VCF is the report by the DoJ Office of the Inspector General (OIG). The OIG reports to the Attorney General and is independent of the FBI organizations responsible for the Trilogy program. The introduction to the report states, "We conducted this audit to assess the FBI's progress in meeting cost, schedule, technical, and performance targets for the three components of Trilogy. We also examined the extent to which Trilogy will meet the FBI's current and longer-term IT needs" (OIG 2004).
An IEEE Spectrum article complements the OIG audit report by detailing the development of the VCF requirements, the contractor's activities, and the project management failures by both the FBI and the contractor. The contractor's viewpoint is presented in testimony given before a subcommittee of the U.S. Senate Appropriations Committee.
These materials, in total, provide a comprehensive view of the VCF program and the reasons for its failure.

Case Study Description
In the political environment following the 9/11 attacks, funding for the VCF project was never a problem. By early 2002, SAIC and the FBI committed to creating an entirely new case management system in 22 months. High-level funding enabled the project to continue gaining momentum in spite of the problems it encountered. The scheduling for the VCF project focused on what was desired, not what was possible. Trilogy's scope grew by approximately 80% from the initial project baseline (Moore 2010).
The reasons for the failure of the VCF project are associated with the non-use or misuse of numerous system engineering practices, especially within stakeholder needs definition, system requirements definition, planning, assessment and control, and risk management. Given the political pressures following the 9/11 attacks, the schedule was accelerated to the point that it was nearly impossible for the developers to follow an appropriate systems engineering process.
The FBI cycled through five people in the role of Chief Information Officer in four years and most decisions were made by committees. In order to compress the schedule, the FBI even proposed replacing the ACS with the VCF over a weekend using an IT procedure called a "flash cut-over." In this proposed implementation, the ACS system would be taken offline and entirely replaced by VCF. Once the cut-over happened, there would be no mechanism to return to ACS, even if the VCF did not work properly.
SAIC worked under a cost-plus-award-fee contract for the VCF as the scope of the project was undefined in early 2002 when work began. Given the schedule pressures, the FBI believed that there was no time to develop formal requirements (glossary), validate them with the various FBI user communities, and then estimate the cost and time required to develop the VCF. The SAIC contract did not require specific completion milestones and the cost-plus contract allowed the scope to increase. VCF was a case of not having the requirements sufficiently defined in terms


of completeness and correctness. The continuous redefinition of requirements had a cascading effect on what had already been designed and produced. Once there was demonstrable software, change requests started arriving-roughly 400 from December 2002 to December 2003.
The new FBI Intranet was specified during 2001, before the start of the VCF project and with little understanding of the network traffic that would result from information sharing. By early 2003, the FBI began to realize how taxing the network traffic would be once all 22,000 users came online. The requirements for the FBI Intranet were modified based on the best guesses for the bandwidth that would be required when the VCF was fully operational. By early 2004, the new FBI Intranet was in operation, although the VCF software was far from complete.
In reaction to the time pressure, SAIC broke its VCF development group into eight teams working in parallel on different functional elements of the program. However, this posed many integration challenges and the eight threads would later prove too difficult for SAIC to combine into a single system. By the time VCF was canceled, SAIC had developed over 700,000 lines of software based upon an incomplete set of requirements that were documented in an 800-page volume.

Summary
The OIG summarizes its conclusions as:
Various reasons account for the delays and associated cost increases in the Trilogy project, including:
 poorly defined and slowly evolving design requirements,
 contracting weaknesses,
 IT investment management weaknesses,
 lack of an Enterprise Architecture,
 lack of management continuity and oversight,
 unrealistic scheduling of tasks,
 lack of adequate project integration, and
 inadequate resolution of issues raised in our previous reports on Trilogy. . . .
According to the Government Accountability Office (GAO), an Enterprise Architecture is a set of descriptive models such as diagrams and tables that define, in business and technology terms, how an organization operates today, how it intends to operate in the future, and how it intends to invest in technology to transition from today's operational environment to tomorrow's. . . .
As of early 2005 the FBI's operations remain significantly hampered due to the poor functionality and lack of information-sharing capabilities of its current IT systems.  (OIG 2005)
In May 2005, FBI director Mueller announced Sentinel, a four-phase, four-year project intended to fulfill the purpose of VCF and provide the Bureau with a web-based case and records management system. During the previous five years, commercial case management software had become available; as a result, Sentinel is intended to utilize commercial off-the-shelf (COTS) software. A report by the OIG in late 2009 describes Sentinel and its status at that time. Sentinel was put online for all employees on July 1, 2012, and it ended up at $451 million and 2 1/2 years overdue (Yost 2012).


References
Works Cited
Moore, S. 2010. "The Failure of the FBI's Virtual Case File Project." Strategic PPM: Project and Portfolio Management, last modified April 5, accessed on September 11, 2011. Available at http://strategicppm.wordpress. com/2010/04/05/the-fbis-virtual-case-file-project-and-project-failure.
National Commission on Terrorist Attacks upon the United States. 2004. The 9/11 Commission Report: Final Report of the National Commission on Terrorist Attacks Upon the United States. New York, NY, USA: W. W. Norton & Company.
Office of the Inspector General. 2005. The Federal Bureau of Investigation's Management of the Trilogy Information Technology Project. Washington, DC, USA: United States Department of Justice. Audit Report 05-07. February 2005. Accessed on September 11, 2011. Available at http://www.justice.gov/oig/reports/FBI/a0507.
Office of the Inspector General. 2009. Sentinel Audit V: Status of the Federal Bureau of Investigation's Case Management System. Washington, DC, USA: U.S. Department of Justice. Audit Report 10-03. November 2009. Accessed on September 11, 2011. Available at http://www.justice.gov/oig/reports/FBI/a1003_redacted.pdf.
Yost, P. 2012. "'Sentinel', New FBI Computer System, Finally Tracking Cases -- Years Late and Millions Over Budget." Washington, DC, USA. Accessed on August 6, 2012. Available at http:/ / www. huffingtonpost. com/ 2012/07/31/sentinel-fbi_n_1725958.html.

Primary References
None.

Additional References
Goldstein, H. 2005. "Who Killed the Virtual Case File?" IEEE Spectrum. September. Accessed at September 11, 2011. Available at http://spectrum.ieee.org/computing/software/who-killed-the-virtual-case-file.
Testimony before the Subcommittee on Commerce, Justice, State and the Judiciary, U.S. Senate Committee on Appropriations, February 3, 2005 (statement of Arnold Punaro, Executive Vice President, Science Applications International Corporation).




Management System Examples

Project Management for a Complex Adaptive Operating System

 Lead Author:
 Rick Adcock
-
This article is based on the Complex Adaptive Operating System: Creating Methods for Complex Project Management case study (Findlay and Straus, 2015). The case study focuses on creating tools and methods that project managers can use in managing complex adaptive systems projects.

Background
The International Centre for Complex Project Management (ICCPM) is a non-profit organization that was created to address "the international community's ability to successfully deliver very complex projects and manage complexity across all industry and government sectors" (ICCPM, 2012).
In an ongoing effort to help member organizations successfully undertake major complex projects, ICCPM conducted a bi-annual series of international round-tables. The purpose of the round-tables was to better understand what contributes to the success of complex projects and to identify and develop new and improved tools and approaches. The round-tables were facilitated using a computer-assisted collaborative meeting process that leverages the features of complex adaptive systems-described below-to help people with diverse viewpoints and experience create new collective understanding and plans for action.
Complex major projects are known for being unsuccessful in on-time and on-budget completion. A survey (IBM, 2008) of 1,500 change managers found that only 40% of projects finished on time and on budget. Barriers to success were the inability to change attitudes or mindsets (58%), dysfunctional culture (40%), lack of senior management support (32%), and underestimating the complexity of a project (35%).
However, several new systemic approaches show considerable promise as a way to think about and manage projects. Six frameworks help inform these approaches: systems thinking, the features of complex adaptive systems (CASs), complexity theory, the Complexity Model of Change (Findlay and Straus, 2011), polarity thinking as a way of thinking about and leveraging wicked problems, cognitive complexity, and adult development theory.
Systems thinking recognizes whole systems and the interdependencies of their parts. A system may be defined as "a set of things, organisms, and people that, as a result of their interconnection, produce their own patterns of behavior over time" (Meadows, 2008, p. 2). A system cannot be understood by focusing on its parts alone (Wheatley, 1999). To successfully address and influence a system, such as a complex project, one must understand the whole and how its parts interact.
Some project managers continue to think of a project as a "machine" that operates according to linear or algorithm rules. This persistent and largely unhelpful meme is now being displaced by a new and more robust model, which regards projects as complex adaptive systems (CASs). Unlike strictly mechanical systems, CASs are self-organizing, learn from experience, are emergent, and from time to time undergo large scale phase transitions to new and higher states of the system. This view of large-scale projects-which are heavily influenced by human interaction-is proving to be much more accurate and allows project managers to leverage techniques for exerting influence in


environments that have previously presented intractable problems .
Leaders of complex projects would also be wise to consider three fundamental theorems of complexity theory, which apply to CASs and which are critical to project success. These are a robust model of the system, requisite variety and adopting solutions which act at an appropriate scale.
 The robust model axiom considers that "no one can effectively influence a system until they have a thorough understanding of its scope and the connections and interdependencies" (Conant and Ashby, 1970).
 The law of requisite variety contends that "complexity can only be dealt with by equal or greater complexity" (Ashby, 1956, p. 2). In other words, in order to deal effectively with the diversity of problems presented by a complex project, one must have a repertoire of responses which is (at least) as nuanced as the problems themselves (Requisite Variety, 2015).
 The scale condition requires that those who wish to exercise leverage over a system must recognize that "highly
complex situations can best be addressed by greater degrees of freedom at the local scale so that innovation and adaptability are maximized" (Bar-Yam, 2004).
A third framework, the Complexity Model of Change, is a model of socio-technological change, comprising a series of growth and decay curves or waves, which helps project managers better understand how to influence systems and design new ones, so the roles, methods, rules of interaction or engagement, technologies, and relationships between people are better aligned with each other and the desired outcome. The overlapping waves represent large-scale eras, for example, the Industrial Age and the Information Age, which have at their core a metaphor, for example, the machine and the computer. The current wave, the Knowledge Age, is based on a network metaphor. The wave we are now entering is the Wisdom Age, which began in 2010. Its core metaphor is the complex adaptive system and the main thrust of this period is the wise application of knowledge.
Another area that project managers may now address differently is that of wicked problems or paradoxes: problems that are ill-defined and recurrent, and which, when attempts are made to solve them with single optimal solutions, create another problem. Polarity thinking regards wicked problems as sets of interdependent values or ideas-like centralizing for efficiency and decentralizing for adaptability-that persist together over time and need each other for the success of the system. If we pay attention to one pole at the expense of the other, we achieve sub-optimal results. When we manage polarities as a system, we realize the benefits of both poles and achieve high performance over time with a minimum of vacillation and the need for correction.
Other disciplines that are critical to project success are understanding and making best use of new ways of thinking about issues and relating to others in more flexible and adaptive ways. Theories of cognitive complexity and adult development theory can contribute to how we think about this problem. For example, "triple-loop learning" (Gragert, 2013), helps us think about issues from a higher level of cognitive complexity. Instead of asking "Are we doing things right (single loop)?", we might ask, "Are we doing the right things (double loop)?" or "How do we decide what is the most effective paradigm to use to influence and create benefit for the system (triple)?"

Purpose
The purpose of the ICCPM roundtables was to help project managers develop new and better ways to lead complex major projects, by bringing together people from both the buy-side and the supply-side to share their knowledge and experience and to grow a network of practitioners, professionals, researchers, and educators able to deliver leading edge complex project management solutions to client organizations and partners around the world (Findlay and Straus, 2015, p. 489).


Challenges
There are many challenges to be addressed in the complex project management environments. The three top contenders are 1) developing new ways of thinking, acting, and interacting; 2) developing more robust models of the system by getting everyone in the room-the project management team and their stakeholders; and 3) steering projects through multiple disruptive socio-technological shifts using the feature of complex adaptive systems.


Systems Engineering Practices
One of the tools Findlay and Straus use to deal with all three challenges in the context of group interaction, such as the ICCPM round-tables, is the Zing complex adaptive meeting process. The process is used to guide conversation in the room, to capture, simultaneously display ideas and to help participants integrate and make meaning from the ideas. The tool was used for the round-tables to help people work together in new ways, develop new and better models of the system together and to design and pilot new and better decision and learning methods.
The technology "provide[s] a container for a suitably representative sample of the people in the system to meet and conceptualize a robust model of the system and develop strategies for how to leverage the system" (Findlay and Straus, 2015, p. 492).
A "talk-type-read-review" (Findlay and Straus, 2015, p. 492) etiquette was employed to organize the session, which, in complexity theory terms, is a simple rule of interaction. Rich, open-ended questions guide the conversations, the ideas are read out loud and the common themes or stand out ideas are recorded by the facilitators.
The open-ended questions are asked one at a time to explore all possibilities and reduce complexity. Although, round-table participants often held opposing views at the beginning of the session, through a processes of continual, iterative feedback, they ultimately arrived at similar or complementary conclusions by the end of the round-table.
The process "automates"-or helps participants engage in-ways of interacting that incorporate a higher level of cognitive complexity than the participants might engage in individually, thus facilitating a shift in the group to a higher level of system performance.

Lessons Learned
The role of leaders of complex projects is to help their organization systems successfully deliver on time and on budget amidst constant change. Their mandate is to deliver amazing new solutions while making few or no mistakes-a challenging goal even in far less complex environments. In order to be successful, project leaders (and their teams) need new systems structures-new tools and methods-that reliably get better results. They need to have a robust and fresh understanding of the systems over which they preside and how they might influence them to greatest effect.
No longer can the complex project leader go off into a corner and design a project and then try to sell it to the community and political leaders, for example. Leaders now need to involve the whole system in the design of a project from its inception through to completion. They need to deal with wicked problems not by looking for the one best solution, but by integrating and leveraging competing ideas. This requires a shift in perspective: from attempting to "control" a complex project system as one might control a mechanical device, to understanding projects as highly complex and interconnected "living" systems that evolve over time. While we do not have "control" over our systems in the classical sense, we can exert influence very effectively, provided that we constantly update our understanding of what is going on and learn new ways to act and interact that are more likely to achieve our desired outcomes.


To achieve this, leaders need to develop the capacity to "anticipate the skills, leadership and coordination roles, technologies, methods, and processes that will be required to successfully surf the waves of change..." (Findlay and Straus, 2015, p. 501).
The 2012 ICCPM round-table series discussion paper (ICCPM, 2012) uses the example of a system undergoing transformation of many levels to illustrate the difficulty that complex project leaders face:

This case study illustrates the need, in times of accelerating change, of "a real-time, systems-wide approach to the development of the methods and tools for managing complex projects" (Findlay and Straus, 2015, p. 500) so leaders can deal successfully and creatively with uncertainty and ambiguity.

References
Works Cited
Ashby, R. 1956. An Introduction to Cybernetics. London, UK: Chapman and Hall.
Bar Yam, Y. 2004. Making Things Work: Solving Complex Problems in a Complex World. Cambridge, MA, USA: Knowledge Press.
Conant, R., and R. Ashby. 1970. "Every good regulator of a system must be a model of that system". International Journal of System Sciences. 1(2): 89-97.
Findlay, J., and A. Straus. 2011. "A shift from systems to complex adaptive systems thinking". In O. Bodrova and N. Mallory (Eds.), Complex Project Management Task Force Report: Compendium of Working Papers. Canberra, Australia: International Centre for Complex Project Management: 24-26.
Findlay, J., and A. Straus. 2015. "Complex Adaptive Operating System: Creating Methods for Complex Project Management". In Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering. Gorod, A., White, B.E., Ireland, V., Gandhi, S.J., and Sauser, B. (Eds.). Boca Raton, Florida, USA: CRC Press: 471-505.
Gragert, T. 2013. Triple loop learning. Thorston's site. Available http:/ / www. thorsten. org/ wiki/ index. php?title=Triple_Loop_Learning.Accessed 12 June, 2015.
IBM. 2008. Making Change Work. New York, NY, USA: IBM.
ICCPM. 2012. Roundtable discussion paper: Complexity in a time of global financial change: Program delivery for the new economy. Findlay, J., Straus, A., and Hatcher, C. (Eds). Canberra, Australia: International Centre for Complex Project Management.
Meadows, D. 2008. Thinking in Systems: A Primer. White River Junction, Vermont, USA: Chelsea Green Publishing.
Requisite	Variety.	2015.	What	is	Requisite	Variety?.	Available	http:/ / requisitevariety. co. uk/ what-is-requisite-variety.Accessed 1 June, 2015.
Wheatley, M. 1999. Leadership and the New Science: Discovering Order in a Chaotic World. San Francisco, California, USA: Berrett-Koehler.


Primary References
Findlay, J., and Straus, A. 2015. "Complex adaptive operating systems: Creating methods for complex project management". In Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering. Gorod, A., White, B.E., Ireland, V., Gandhi, S.J., and Sauser, B. (Eds.). Boca Raton: CRC Press: 471-505.

Additional References
None.




Medical System Examples

Next Generation Medical Infusion Pump

 Lead Author:
 Heidi Davidz
-
This case study summarizes the systems engineering aspects of the next-generation Symbiq(tm) IV (intravenous) medical pump development. Symbiq(tm) was developed by Hospira Inc. and documented in detail in Chapter 5 of the National Research Council book, Human-System Integration in the System Development Process. As described in the book, Symbiq(tm)'s purpose was "to deliver liquid medications, nutrients, blood and other solutions at programmed flow rates, volumes and time intervals via intravenous and other routes to a patient, primarily for hospital use with secondary limited feature use by patients at home" (Pew 2007).

Domain Background
This case study provides insight into the use of systems engineering practices in a medical application.

Case Study Background
The project that is the subject of this report was approved by the Governing Board of the National Research Council, whose members are drawn from the councils of the National Academy of Sciences, the National Academy of Engineering, and the Institute of Medicine.
The study was supported by Award Nos. W911NF-05-0150 and FA5650-06-1-6610 between the National Academy of Sciences, the U.S. Department of the Army, and the U.S. Department of the Air Force.

Case Study Description
In creating a next-generation product, Hospira proposed to introduce new IV pump features, such as:
 multi-channel vs. single-channel liquid delivery;
 the ability to group multi-channeled devices together;
 associated user-programming capabilities and programmable drug libraries for specifying parallel delivery of liquids;
 use of color touchscreen devices;
 integration with numerous types of hospital information systems;
 ease of use for both medical personnel and patients at home;
 handling of potential hardware, software, and human-user faults;
 compliance with U.S. and international safety standards;
 use of alternating-current or battery power; and
 the ability to be cost-competitive and attractive to traditional medical and hospital administration personnel.
Many of these features are highly coupled, such as the multi-channel hardware controls, concurrent software synchronization, distinctive displays and alarms for multi-channel devices, and rigorous medical safety standards.
Views of the resulting medical infusion pump can be found as Figures 5-5 and 5-6 in Chapter 5, page 107 of the Pew and Mavor (2007) book. Systems engineering for the device involved a great deal of concurrent analysis and


engineering of its hardware, software, human factors, operational, business, and safety aspects. It has been a commercial success and won the 2006 Human Factors and Ergonomics Society's User-Centered Product Design Award and the 2007 Medical Design Excellence Award.
Not only were there numerous technical challenges in the development of Symbiq(tm), but there were also challenges in the systems engineering of a product with a life-cycle operational concept that would produce satisfactory outcomes for a wide variety of product and operational stakeholders whose value propositions were often in some conflict. Some stakeholders wanted numerous features that would require a complex user interface, while others wanted a simple and easy to learn interface. Some users wanted the most advanced color touchscreen displays available, while others wanted a simpler, less-expensive product that was harder to misuse due to inadvertent screen commands. Some organizations felt that a minimal interpretation of the required safety features would be acceptable, while others advocated ultrahigh assurance levels. Some marketing personnel wanted a quick development and fielding of the basic product to capture market share, while maintainers wanted initial built-in life cycle support, maintenance, and diagnostic capabilities.
In such situations, many organizations focus on making quick requirement decisions and rapidly proceed into development. However, Hospira's understanding of the uncertainties and risks caused them to pursue a risk-driven, incremental commitment course of buying information to reduce risk, as emphasized in the SEBoK Part 3 knowledge area on Risk Management. As described in Pew and Mavor (2007), Hospira used a version of the Incremental Commitment Spiral Model (ICSM) summarized in the SEBoK Part 3 Knowledge Area on representative systems engineering process models. The following sections describe the project's incremental system definition progress through the ICSM exploration, valuation, foundations, and Development phases. Some evolution of terminology has occurred, the Pew and Mavor (2007) version uses ICM instead of ICSM and "architecting phase" instead of "foundations phase".

Symbiq(tm) Exploration Phase Summary
In the exploration phase, the project carried out numerous analyses on stakeholder needs, technical opportunities, and business competition. Using these analyses, the project team determined ranges of preferred options. Stakeholder needs analyses included contextual inquiry via shadowing of nurses using IV pumps and followup interviews, as well as creating task flow diagrams, use environment analyses, and user profiles analyses. Technical opportunity analyses included initial conceptual designs of multi-channel pump configurations, evaluation of commercially available single-color and multicolor display devices with touchscreen capabilities, and software approaches for specifying multi-channel delivery options and synchronizing concurrent processes.
Business competition analyses included hiring a management and marketing planning firm to examin next-generation pump competitor strengths and weaknesses with respect to such capabilities as the number of pump channels, therapies, programming options, air-in-line management, battery and alternating current capabilities, biomedical domain expertise, and alarms. Several key competitive advantages of a next-generation pump were identified, such as the ability to read bar-codes, small size, light weight, stand-alone functional channels, an extensive drug library, a high level of reliability, and clear mapping of screen displays and pumping channels.
Market research and market segment analyses also identified market windows, pricing alternatives, hospital purchasing decision-making trends, and safety aspects. These were iterated by focus groups of key thought leaders in critical care. The results were factored into a product concept plan, cost analysis, and business case analysis. These were independently reviewed by experts as part of the ICSM Valuation Phase Commitment Review process, which resulted in a go-ahead decision with an identification of several risks to be managed.


Symbiq(tm) Valuation Phase Summary
The valuation phase focused on the major risks highlighted in the Valuation Commitment Review, such as the multi-channel pump options, the types of programmable therapies, the need for tailorable medication libraries, the display screen and user interface options, and the safety considerations. The valuation phase also elaborated the product concept plan for the most attractive general set of options, including a development plan and operations plan, along with an associated cost analysis, risk analysis, and business case for review at the Foundations Commitment Review.
The multi-channel pump options were explored via several hardware industrial design mockups and early usability tests of the mockups. These included evaluation of such desired capabilities as semi-automatic cassette loading, special pole-mounting hardware, stacking of and total number of channels, and tubing management features. The evaluations led to the overall all choice to use a semi-automatic cassette loading capability with a red-yellow-green LED display to indicate concerns with the loading mechanism and with the pump in general.
Field exercises with prototypes of the pole mountings indicated the need for quick release and activation mechanisms, which were subsequently implemented. Risk analyses of alternative stacking mechanisms and the potential number of channels available established a preference for side-by-side stacking, a decision to develop one and two channel units, and to support a maximum of four channels in a stacked configuration.
The types of programmable therapies considered included continuous delivery for a specified time period, patient weight-based dosing, piggyback or alternating delivery between the two channels, tapered or ramped-rate delivery, intermittent-interval delivery, variable-time delivery, and multistep delivery. These were evaluated via prototyping of the software on a simulated version of the pump complexes and were iterated until satisfactory versions were found.
Evaluation of the tailorable medication libraries addressed the issue that different hard and soft safety limits were needed for dosages in different care settings (e.g., emergency room, intensive care, oncology, pediatric care, etc.) which creates a need for hospitals to program their own soft limits (overridable by nurses with permission codes) and hard limits (no overrides permitted). Stakeholder satisfaction with the tailoring features was achieved via prototype exercises and iteration with representative hospital personnel.
A literature review was conducted to determine the relative advantages and disadvantages of leading input and display technologies, including cost and reliability data. After down-selecting to three leading vendors of touch screen color LCD displays and further investigating their costs and capabilities, a business risk analysis focused on the trade offs between larger displays and customer interest in small-footprint IV pumps. The larger display was selected based on better readability features and the reduced risk of accidental user entries since the larger screen buttons would help to avoid these occurrences. Extensive usability prototyping was done with hardware mockups and embedded software that delivered simulated animated graphic user interface (GUI) displays to a touchscreen interface that was integrated into the hardware case.
The safety risk analysis in the valuation phase followed ISO 14971:2000 standards for medical device design, focusing on Failure Modes and Effects Analyses (FMEAs). This analysis was based on the early high-level design, such as entry of excessive drug doses or misuse of soft safety limit overrides. Subsequent-phase FMEAs would elaborate this analysis, based on the more detailed designs and implementations.
As in the exploration phase, the results of the valuation phase analyses, plans, budgets for the succeeding phases, the resulting revised business case, evidence of solution feasibility, and remaining risks with their risk management plans were reviewed by independent experts and the ICSM Foundations Commitment Review was passed, subject to a few risk level and risk management adjustments.


Symbiq(tm) Foundations Phase Summary
During the foundations phase, considerable effort was focused on addressing the identified risks such as the need for prototyping the full range of GUI usage by the full range of targeted users, including doctors, home patients, the need for interoperability of the Symbiq(tm) software with the wide variety of available hospital information systems, and the need for fully detailed FMEAs and other safety analyses. Comparable added effort went into detailed planning for development, production, operations, and support, providing more accurate inputs for business case analyses.
GUI prototyping was done with a set of usability objectives, such as
 90% of experienced nurses will be able to insert the cassette the first time while receiving minimal training;
 99% will be able to correct any insertion errors;
 90% of first time users with no training will be able to power the pump off when directed; and
 80% of patient users would rate the overall ease of use of the IV pump three or higher on a five-point scale (with five being the easiest to use).
Similar extensive evaluations were done on the efficacy and acceptability of the audio alarms, including the use of a patient and intensive care unit simulator that included other medical devices that produced noises, as well as other distractions such as ringing telephones. These evaluations were used to enable adjustment of the alarms and to make the visual displays easier to understand.
Software interoperability risk management involved extensive testing of representative interaction scenarios between the Symbiq(tm) software and a representative set of hospital information systems. These resulted in several adjustments to the software interoperability architecture. Also, as the product was being developed as a platform for the next generation of infusion pump products, the software design was analyzed for overspecialization to the initial product, resulting in several revisions. Similar analyses and revisions were performed for the hardware design.
As the design was refined into complete build-to specifications for the hardware and the operational software, the safety analyses were elaborated into complete FMEAs of the detailed designs. These picked up several potential safety issues, particularly involving the off-nominal usage scenarios, but overall confirmed a high assurance level for the safety of the product design. However, the safety risk assessment recommended a risk management plan for the development phase to include continued FMEAs, thorough off-nominal testing of the developing product's hardware and software, and extensive beta-testing of the product at representative hospitals prior to a full release.
This plan and the other development and operations phase plans, product feasibility evidence, and business case analysis updates were reviewed at a Development Commitment Review, which resulted in a commitment to proceed into the development phase.

Symbiq(tm) Development Phase Systems Engineering Summary
The development phase was primarily concerned with building and testing the hardware and software to the build-to specifications, but continued to have an active systems engineering function to support change management; operations, production, and support planning and preparation; and further safety assurance activities as recommended in the risk management plan for the phase.
For hospital beta-testing, thoroughly bench-tested and working beta versions of the IV pump were deployed in two hospital settings. The hospitals programmed drug libraries for at least two clinical care areas. The devices were used for about four weeks. Surveys and interviews were conducted with the users to capture their "real world" experiences with the pump. Data from the pump usage and interaction memory was also analyzed and compared to the original doctors' orders. The beta tests revealed a number of opportunities to make improvements, including revision of the more annoying alarm melodies and the data entry methods for entering units of medication delivery time in hours or minutes.


Usability testing was also conducted on one of the sets of abbreviated instructions called TIPS cards. These cards serve as reminders for how to complete the most critical tasks. Numerous suggestions for improvement in the TIPS cards themselves, as well as the user interface, came from this work, including how to reset the "Air-in-Line" alarm and how to check all on-screen help text for accuracy.
The above mentioned usability objectives were used as acceptance criteria for the validation usability tests. These objectives were met. For example, the calculated task completion accuracy was 99.66% for all tasks for first time nurse users with minimal training. There were a few minor usability problems uncovered that were subsequently fixed without major changes to the GUI or effects on critical safety related tasks.
The risk analysis was iterated and revised as the product development matured. FMEAs were updated for safety critical risks associated with three product areas: the user interface, the mechanical and electrical subsystems, and the product manufacturing process. Some detailed implementation problems were found and fixed, but overall the risk of continuing into full-scale production, operations, and support was minimal. Systems engineering continued into the operations phase, primarily to address customer change requests and problem reports, and to participate in planning for a broader product line of IV pumps.
Overall, customer satisfaction, sales, and profits from the Symbiq(tm) IV pump have been strong and satisfaction levels from the management, financial, customer, end user, developer, maintainer, regulatory, and medical-community stakeholders have been quite high (Pew 2007).

Summary
In summary, the Symbiq(tm) Medical Infusion Pump Case Study provides an example of the use of the systems engineering practices discussed in the SEBoK. As appropriate for a next-generation, advanced technology product, it has a strong focus on risk management, but also illustrates the principles of synthesis, holism, dynamic behavior, adaptiveness, systems approach, progressive entropy reduction, and progressive stakeholder satisfying discussed in Part 2 of the SEBoK. It provides an example of an evolutionary and concurrent systems engineering process, such as the incremental commitment spiral process, and of other knowledge areas discussed in SEBoK Parts 3 and 4, such as system definition, system realization, system engineering management, and specialty engineering.

References
Works Cited
Pew, R. and A. Mavor. 2007. Human-System Integration in the System Development Process: A New Look.
Washington, DC, USA: The National Academies Press.

Primary References
None.

Additional References
None.


Medical Radiation

 Lead Authors:
 Heidi Davidz and John Brackett
-
This case study presents system and software engineering issues relevant to the accidents associated with the Therac-25 medical linear accelerator that occurred between 1985 and 1988. The six accidents caused five deaths and serious injury to several patients. The accidents were system accidents that resulted from complex interactions between hardware components, controlling software, and operator functions.

Domain Background
Medical linear accelerators, devices used to treat cancer, accelerate electrons to create high energy beams that can destroy tumors. Shallow tissue is treated with the accelerated electrons. The electron beam is converted to X-ray photons to reach deeper tissues. Accidents occur when a patient is delivered an unsafe amount of radiation.
A radiation therapy machine is controlled by software that monitors the machine's status, accepts operator input about the radiation treatment to be performed, and initializes the machine to perform the treatment. The software turns the electron beam on in response to an operator command. The software turns the beam off whenever the treatment is complete, the operator requests the beam to shut down, or when the hardware detects a machine malfunction. A radiation therapy machine is a reactive system in which the system's behavior is state dependent and the system's safety depends upon preventing entry into unsafe states. For example, the software controls the equipment that positions the patient and the beam. The positioning operations can take a minute or more to execute, thus it is unsafe to activate the electron beam while a positioning operation is in process.
In the early 1980s, Atomic Energy of Canada (AECL) developed the Therac-25, a dual-mode (X-rays or electrons) linear accelerator that can deliver photons at 25 megaelectron volts (MeV) or electrons at various energy levels. The Therac-25 superseded the Therac-20, the previous 20-MeV dual mode accelerator with a history of successful clinical use. The Therac-20 used a DEC PDP-11 (Digital Equipment Corporation Programmed Data Processor) minicomputer for computer control and featured protective circuits for monitoring the electron beam, as well as mechanical interlocks for policing the machine to ensure safe operation. AECL decided to increase the responsibilities of the Therac-25 software for maintaining safety and eliminated most of the hardware safety mechanisms and interlocks. The software, written in PDP-11 assembly language, was partially reused from earlier products in the Therac product line. Eleven Therac-25s were installed at the time of the first radiation accident in June 1985.
The use of radiation therapy machines has increased rapidly in the last 25 years. The number of medical radiation machines in the United States in 1985 was approximately 1000. By 2009 the number had increased to approximately 4450. Some of the types of system problems found in the Therac-25 may be present in the medical radiation devices currently in use. References to more recent accidents are included below.

Case Study Background
The Therac-25 accidents and their causes are well documented in materials from the U.S. and Canadian regulatory agencies (e.g., the U.S. Food and Drug Administration (FDA) and the Canadian Bureau of Radiation and Medical Devices) and in depositions associated with lawsuits brought against AECL. An article by Leveson and Turner (1993) provides the most comprehensive, publicly available description of the accident investigations, the causes of the accidents, and the lessons learned relevant to developing systems where computers control dangerous devices.


Case Study Description
The Therac-25 accidents are associated with the non-use or misuse of numerous system engineering practices, especially system verification and validation, risk management, and assessment and control. In addition, numerous software engineering good practices were not followed, including design reviews, adequate documentation, and comprehensive software unit and integration tests.
The possibility of radiation accidents increased when AECL made the systems engineering decision to increase the responsibilities of the Therac-25 software for maintaining safety and eliminated most of the hardware safety mechanisms and interlocks. In retrospect, the software was not worthy of such trust. In 1983 AECL performed a safety assessment on the Therac-25. The resulting fault tree did include computer failures, but only those associated with hardware; software failures were not considered in the analysis.
The software was developed by a single individual using PDP-11 assembly language. Little software documentation was produced during development. An AECL response to the FDA indicated the lack of software specifications and of a software test plan. Integrated system testing was employed almost exclusively. Leveson and Turner (1993) described the functions and design of the software and concluded that there were design errors in how concurrent processing was handled. Race conditions resulting from the implementation of multitasking also contributed to the accidents.
AECL technical management did not believe that there were any conditions under which the Therac-25 could cause radiation overdoses, and this belief was evident in the company's initial responses to accident reports. The first radiation overdose accident occurred in June 1985 at the Kennestone Regional Oncology Center in Marietta, Georgia, where the Therac-25 had been operating for about 6 months. The patient who suffered the radiation overdose filed suit against the hospital and AECL in October 1985. No AECL investigation of the incident occurred and FDA investigators later found that AECL had no mechanism in place to follow up potential reports of suspected accidents. Additionally, other Therac-25 users received no information that an accident had occurred.
Two more accidents occurred in 1985, including a radiation overdose at Yakima Valley Memorial Hospital in Yakima, Washington that resulted in an accident report to AECL. The AECL technical support supervisor responded to the hospital in early 1986: "After careful consideration, we are of the opinion that this damage could not have been produced by any malfunction of the Therac-25 or by any operator error... there have apparently been no other instances of similar damage to this or other patients."
In early 1986 there were two accidents at the East Texas Cancer Center in Tyler, Texas, both of which resulted in the death of the patient within a few months. On March 21, 1986 the first massive radiation overdose occurred, though the extent of the overdose was not realized at the time. The Therac-25 was shut down for testing the day after the accident. Two AECL engineers, one from the plant in Canada, spent a day running machine tests but could not reproduce the malfunction code observed by the operator at the time of the accident. The home office engineer explained that it was not possible for the Therac-25 to overdose a patient. The hospital physicist, who supervised the use of the machine, asked AECL if there were any other reports of radiation overexposure. The AECL quality assurance manager told him that AECL knew of no accidents involving the Therac-25.
On April 11, 1986 the same technician received the same malfunction code when an overdose occurred. Three weeks later the patient died; an autopsy showed acute high-dose radiation injury to the right temporal lobe of the brain and to the brain stem. The hospital physicist was able to reproduce the steps the operator had performed and measured the high radiation dosage delivered. He determined that data-entry speed during editing of the treatment script was the key factor in producing the malfunction code and the overdose. Examination of the portion of the code responsible for the Tyler accidents showed major software design flaws. Levinson and Turner (1993) describe in detail how the race condition occurred in the absence of the hardware interlocks and caused the overdose. The first report of the Tyler accidents came to the FDA from the Texas Health Department. Shortly thereafter, AECL provided a medical device accident report to the FDA discussing the radiation overdoses in Tyler.


On May 2, 1986 the FDA declared the Therac-25 defective and required the notification of all customers. AECL was required to submit to the FDA a corrective action plan for correcting the causes of the radiation overdoses. After multiple iterations of a plan to satisfy the FDA, the final corrective action plan was accepted by the FDA in the summer of 1987. The action plan resulted in the distribution of software updates and hardware upgrades that reinstated most of the hardware interlocks that were part of the Therac-20 design.
AECL settled the Therac-25 lawsuits filed by patients that were injured and by the families of patients who died from the radiation overdoses. The total compensation has been estimated to be over $150 million.

Summary
Leveson and Turner (1993) describe the contributing factors to Therac-25 accidents: "We must approach the problems of accidents in complex systems from a systems-engineering point of view and consider all contributing factors." For the Therac-25 accidents, the contributing factors included:
 management inadequacies and a lack of procedures for following through on all reported incidents;
 overconfidence in the software and the resulting removal of hardware interlocks (causing the software to be a single point of failure that could lead to an accident);
 less than acceptable software engineering practices; and
 unrealistic risk assessments along with over confidence in the results of those assessments.

Recent Medical Radiation Experience
Between 2009 and 2011, The New York Times published a series of articles by Walter Bogdanich on the use of medial radiation, entitled "Radiation Boom" (2011).
The following quotations are excerpts from that series:
Increasingly complex, computer-controlled devices are fundamentally changing medical radiation, delivering higher doses in less time with greater precision than ever before." But patients often know little about the harm that can result when safety rules are violated and ever more powerful and technologically complex machines go awry. To better understand those risks, The New York Times examined thousands of pages of public and private records and interviewed physicians, medical physicists, researchers and government regulators. The Times found that while this new technology allows doctors to more accurately attack tumors and reduce certain mistakes, its complexity has created new avenues for error - through software flaws, faulty programming, poor safety procedures or inadequate staffing and training. . . .
Linear accelerators and treatment planning are enormously more complex than 20 years ago,' said Dr. Howard I. Amols, chief of clinical physics at Memorial Sloan-Kettering Cancer Center in New York. But hospitals, he said, are often too trusting of the new computer systems and software, relying on them as if they had been tested over time, when in fact they have not. . . .
Hospitals complain that manufacturers sometimes release new equipment with software that is poorly designed, contains glitches or lacks fail-safe features, records show. Northwest Medical Physics Equipment in Everett, Wash., had to release seven software patches to fix its image-guided radiation treatments, according to a December 2007 warning letter from the F.D.A. Hospitals reported that the company's flawed software caused several cancer patients to receive incorrect treatment, government records show.


References
Works Cited
Bogdanich, W. 2011. Articles in the "Radiation Boom" series. New York Times. June 2009-February 2011. Accessed November 28, 2012. Available: http://topics.nytimes.com/top/news/us/series/radiation_boom.
Leveson, N.G., and C.S. Turner. 1993. "An Investigation of the Therac-25 Accidents." Computer. 26 (7): 18-41.

Primary References
None.

Additional References
None.

Design for Maintainability

 Lead Author:
 Rick Adcock
-
This article describes an example of where systems thinking led to a much more practical solution to a common problem. For additional information, refer to Systems Thinking.
This article is excerpted and condensed from Johnson, S. 2010. Where Good Ideas Come From: The Natural History of Innovation. New York, NY, USA: Riverhead Books. pp. 25-28.

Background
In the late 1870s, a Parisian obstetrician named Stephane Tarnier was visiting the Paris Zoo where they had farm animals. While there, he conceived the idea of adapting a chicken incubator to use for human newborns, and he hired "the zoo's poultry raiser to construct a device that would perform a similar function for human newborns." At the time infant mortality was staggeringly high "even in a city as sophisticated as Paris. One in five babies died before learning to crawl, and the odds were far worse for premature babies born with low birth weights." Tarnier installed his incubator for newborns at Maternité de Paris and embarked on a quick study of five hundred babies. "The results shocked the Parisian medical establishment: while 66 percent of low-weight babies died within weeks of birth, only 38 percent died if they were housed in Tarnier's incubating box. ... Tarnier's statistical analysis gave newborn incubation the push that it needed: within a few years the Paris municipal board required that incubators be installed in all the city's maternity hospitals." ...

Purpose
"Modern incubators, supplemented with high-oxygen therapy and other advances, became standard equipment in all American hospitals after the end of World War II, triggering a spectacular 75 percent decline in infant mortality rates between 1950 and 1998."... "In the developing world, however, the infant mortality story remains bleak. Whereas infant deaths are below ten per thousand births throughout Europe and the United States, over a hundred infants die per thousand (births) in countries like Liberia and Ethiopia, many of them premature babies that would have survived with access to incubators.


Challenges
But modern incubators are complex, expensive things. A standard incubator in an American hospital might cost more than $40,000 [about 30,000]. But the expense is arguably the smaller hurdle to overcome. Complex equipment breaks and when it breaks you need both the technical expertise to fix it and replacement parts. In the year that followed the 2004 Indian Ocean tsunami, the Indonesian city of Meulaboh received eight incubators from a range of international relief organizations. By late 2008, when an MIT professor named Timothy Prestero visited the hospital, all eight were out of order, the victims of power surges and tropical humidity, along with the hospital staff's inability to read the English repair manual. The Meulaboh incubators were a representative sample: some studies suggest that as much as 95 percent of medical technology donated to developing countries breaks within the first five years of use.

Systems Engineering Practices
"Prestero had a vested interest in those broken incubators, because the organization he founded, Design that Matters, had been working for several years on a scheme for a more reliable, and less expensive, incubator, one that recognized complex medical technology was likely to have a very different tenure in a developing world context than it would in an American or European hospital. Designing an incubator for a developing country wasn't just a matter of creating something that worked; it was also a matter of designing something that would break in a non-catastrophic way. You couldn't guarantee a steady supply of spare parts, or trained repair technicians. So instead, Prestero and his team decided to build an incubator out of parts that were already abundant in the developing world. The idea had originated with a Boston doctor named Jonathan Rosen, who had observed that even the smaller towns of the developing world seemed to be able to keep automobiles in working order. The towns might lack air conditioning and laptops and cable television, but they managed to keep their Toyota 4Runners on the road. So Rosen approached Prestero with an idea: What if you made an incubator out of automobile parts?

Lessons Learned
"Three years after Rosen suggested the idea, the Design that Matters team introduced a prototype device called NeoNurture. From the outside, it looked like a streamlined modern incubator, but its guts were automotive. Sealed-beam headlights supplied the crucial warmth; dashboard fans provided filtered air circulation; door chimes sounded alarms. You could power the device via an adapted cigarette lighter, or a standard-issue motorcycle battery. Building the NeoNurture out of car parts was doubly efficient, because it tapped both the local supply of parts themselves and the local knowledge of automobile repair. These were both abundant resources in the developing world context, as Rosen liked to say. You didn't have to be a trained medical technician to fix the NeoNurture; you didn't even have to read the manual. You just needed to know how to replace a broken headlight."


References
Works Cited
Johnson, S. 2010. Where Good Ideas Come From: The Natural History of Innovation. New York, NY, USA: Riverhead Books. pp. 25-28.

Primary References
Johnson, S. 2010. Where Good Ideas Come From: The Natural History of Innovation. New York, NY, USA: Riverhead Books. pp. 25-28.

Additional References
None.




Space System Examples

Global Positioning System

 Lead Authors:
 Heidi Davidz, Richard Freeman, and Alice Squires
 Contributing Authors:
 Tom Hilburn and Brian White
-
The Global Positioning System (GPS) case study was developed by the United States Air Force Center for Systems Engineering (AF CSE) located at the Air Force Institute of Technology (AFIT). The GPS is a space-based radio-positioning system. A constellation of twenty-four satellites, including three spares, comprise the overall system which provides navigation and timing information to military and civilian users worldwide. GPS satellites, in one of six Earth orbits, circle the globe every twelve hours, emitting continuous navigation signals on two different L-band frequencies. The system consists of two other major segments: a world-wide satellite control network, and the GPS user equipment that can either be carried by a human user or integrated into host platforms such as ships, vehicles, or aircraft.
This case study discussion is based on the original source (O'Brien and Griffin 2007), which provides useful insights into what we might consider a "traditional" SE application. A second global positioning case study looks at the same case study from the perspectives of system of systems (sos) engineering and enterprise systems engineering (ese).

Domain Background
When looking at the Global Positioning System (GPS), it would be difficult to imagine another system that relies so heavily upon such a wide range of domains, with the possible exception of the World Wide Web (WWW). Additionally, the various systems operating within these domains must all function together flawlessly to achieve success. It is evident from reading this case study that it directly relates to the following domains:
 aerospace;
 space;
 communications; and
 transportation.
This is also an example of systems of systems (SoS) and is considered an innovative technology.
The GPS case study includes a detailed discussion of the development of the GPS and its components, as well as other applicable areas. The reader of this study will gain an increased understanding of the effect that GPS has on military and commercial industries in the context of the systems engineering support required to achieve success.

Case Study Background
The United States Air Force Center for Systems Engineering (AF CSE), established in 2002 at the Air Force Institute of Technology (AFIT), was tasked to develop case studies focusing on the application of systems engineering principles within various aerospace programs. The GPS case study (O'Brien and Griffin 2007) was developed by AFIT in support of systems engineering graduate school instruction. The cases are structured using the Friedman-Sage framework (Friedman and Sage 2003; Friedman and Sage 2004, 84-96), which decomposes a case into contractor, government, and shared responsibilities in the following nine concept areas:


1. Requirements Definition and Management
2. Systems Architecture Development
3. System/Subsystem Design
4. Verification/Validation
5. Risk Management
6. Systems Integration and Interfaces
7. Life Cycle Support
8. Deployment and Post Deployment
9. System and Program Management
The Friedman-Sage framework (2004) is provided in Appendix A of the case study. This case study is an example where the government - specifically the JPO Systems Engineering Directorate - bore the responsibility for systems integration and configuration management. That is, the government played more than an oversight role in the systems engineering of the GPS system of systems. As mentioned in the case study, JPO developed the CONOPs, mission analysis, requirements and design analysis including security, and developed their own approach to the cryptology methodology. JPO coordinated the Configuration Control Board (CCB) chaired by the Program Director. JPO was also responsible for Level I ICDs and system design configurations; where the contractors were responsible for the system architecture and ICDs within their segment.

Case Study Description
The "Global Positioning System - Systems Engineering Case Study" describes the application of systems engineering during the concept validation, system design and development, and production phases of the GPS program (O'Brien and Griffin 2007). The case examines the applied systems engineering processes, as well as the interactions of the GPS joint program office (JPO), the prime contractors, and the plethora of government agencies that were associated with the program's development and fielding. The systems engineering process is traced from the initiation of studies and the development of key technologies, which established the vision of a satellite navigation system in the 1960s, through to the multiphase joint program that resulted in a fully operational capability release in 1995. This case study does not cover system enhancements incorporated through Blocks IIM, IIF, and III.
The GPS case study derived four learning principles (LPs) that explain the more broadly applicable areas of systems engineering knowledge that are addressed by the case study. These four LPs relate strongly to the SEBoK in the following areas:
 enabling individuals (LP1);
 configuration management (LP2);
 enabling the organization (LP3); and
 risk management (LP4).
Additionally, the GPS case study contains a thorough overview of life cycle management and exemplifies systems thinking principles.

Enabling Individuals
Learning Principle 1: Programs must strive to staff key positions with domain experts.
From the program management team, to the systems engineering, design, manufacturing, and operations teams, the individuals on the program were well-versed in their disciplines and all possessed a systems view of the program. While communications, working relationships, and organization were important, it was the ability of the whole team at all levels to understand the implications of their work on the system that was vital. Their knowledge-based approach for decision making had the effect of shortening the decision cycle because the information was understood and the base and alternative solutions were accurately presented.


Configuration Management
Learning Principle 2: The systems integrator must rigorously maintain program baselines.
The joint program office (JPO) retained the role of managing and controlling the system specification and, therefore, the functional baseline. The JPO derived and constructed a mutually-agreed-to set of system requirements that became the program baseline in 1973. While conducting the development program, the GPS team was able to make performance, risk, cost, and trade analyses against the functional baseline to control both risk and cost. The JPO was fully cognizant of the implications of the functional requirements on the allocated baseline because they managed the interface control working group process. Managing that process gave them first-hand knowledge and insight into the risks at the lowest level. The individual with the system integrator role must rigorously maintain the system specification and functional baseline. There must be appropriate sharing of management and technical responsibilities between the prime contractor and their government counterparts to ensure success.

Enabling the Organization
Learning Principle 3: Achieving consistent and continuous high-level support and advocacy helps funding stability, which impacts systems engineering stability.
Consistent, continuous high-level support provides the requirements and assists funding stability. In this role, the Office of the Secretary of Defense (OSD) provided advocacy and sourced the funding at critical times in the program, promoted coordination among the various services, and reviewed and approved the GPS JPO system requirements. The OSD played the central role in the establishment and survivability of the program. The GPS JPO had clear support from the Director of Defense Development, Research, and Engineering, Dr. Malcolm Currie, and program support from the Deputy Secretary of Defense, Dr. David Packard. Clearly, the armed services - particularly the Navy and the Air Force early on, and later the Army - were the primary users of GPS and the eventual customers. However, each armed service had initial needs for their individual programs, or for the then-current operational navigation systems. Additionally, the secretary of the Air Force provided programmatic support to supply manpower and facilities.

Risk Management
Learning Principle 4: Disciplined and appropriate risk management must be applied throughout the life cycle.
The GPS program was structured to address risk in several different ways throughout the multiphase program. Where key risks were known up front, the contractor and/or the government utilized a classic risk management approach to identify and analyze risk, as well as develop and track mitigation actions. These design (or manufacturing/launch) risks were managed by the office who owned the risks. Identified technical risks were often tracked by technical performance measures (such as satellite weight and software lines of codes) and addressed at weekly chief engineer's meetings.
Serving in the clear role of program integrator allowed the JPO to sponsor risk trade studies at the top level. The JPO would issue study requests for proposals to several bidders for developing concepts and/or preliminary designs. Then, one contractor would be down-selected and the process would continue. This approach provided innovative solutions through competition, as well as helped in defining a lower risk, more clearly defined development program for the fixed-price contracts approach that was being used for development and production.
As the system integrator, the JPO was also closely involved with technical development. To identify unforeseeable unique technical challenges, the JPO would fund studies to determine the optimal approaches to new issues. There were schedule risks associated with the first launch due to unforeseen Block II issues with respect to the space vehicle and control segments (software development). Although it was a catastrophic event, the Challenger accident actually provided much needed schedule relief. Using decision analysis methodology led the JPO to an alternative approach to develop the expendable launch vehicle for the Block II satellites.


Good communication, facilitated by cooperative working relationships, was a significantly positive (though intangible) factor in the success of the GPS program, regardless of whether it was between the contractors and the government (JPO or other agencies), or between contractors and sub-contractors. A true team environment also played a significant role in reducing risk, especially considering the plethora of government agencies and contractors that were involved in the effort.

Life Cycle Management
The GPS case study takes the reader through the initial concept of GPS (March 1942) all the way to the development, production, and operational capability of the system. The current GPS program traces its heritage to the early 1960s when Air Force Systems Command initiated satellite-based navigation systems analyses conducted by The Aerospace Corporation. The case study follows the execution of the GPS program from the inception of the idea to the full operational capability release on April 27th, 1995. The concentration of the case study is not limited to any particular period, and the learning principles come from various times throughout the program's life.

Systems Thinking
The GPS case study highlights the need for systems thinking throughout. GPS satellites, in one of six Earth orbits, circle the globe every twelve hours. These satellites emit continuous navigation signals on two different L-band frequencies. The system consists of two other major segments: a world-wide satellite control network and the GPS user equipment that can either be carried by a human user, or integrated into host platforms such as ships, vehicles, or aircraft. The ability to conceive, develop, produce, field, and sustain the GPS demands the highest levels of systems thinking.

Summary
The GPS case study is useful for global systems engineering learning and provides a comprehensive perspective on the systems engineering life cycle. The study is applicable for detailed instruction in the following areas:
 enabling individuals;
 configuration management;
 enabling the organization;
 risk management;
 life cycle management; and
 systems thinking.
The GPS case study revealed that key Department of Defense personnel maintained a clear and consistent vision for this unprecedented, space-based navigation capability. The case study also revealed that good fortune was enjoyed by the JPO as somewhat independent, yet critical, space technologies matured in a timely manner.
Although the GPS program required a large degree of integration, both within the system and external to the system, amongst a multitude of agencies and contractors, the necessary efforts were taken to achieve success.
Lastly, the reader of the GPS case study will gain an increased understanding of the effect that GPS has on the military and commercial industries in the context of the systems engineering support required to achieve success. The system was originally designed to help "drop five bombs in one hole" which defines the accuracy requirement in context-specific terms. The GPS signals needed to be consistent, repeatable, and accurate to a degree that, when used by munitions guidance systems, would result in the successful delivery of multiple, separately-guided munitions to virtually the identical location anywhere at any time across the planet. Forty to fifty years ago, very few outside of the military recognized the value of the proposed accuracy and most non-military uses of GPS were not recognized before 1990. GPS has increasingly grown in use and is now used every day.


References
Works Cited
Friedman, G.R. and A.P. Sage. 2003. Systems Engineering Concepts: Illustration Through Case Studies. Accessed September 2011. Available at: http://www.afit.edu/cse/docs/Friedman-Sage%20Framework.pdf.
Friedman, G. and A. Sage. 2004. "Case studies of systems engineering and management in systems acquisition."
Systems Engineering. 7(1): p. 84-96.
O'Brien, Patrick J., and John M. Griffin. 4 October 2007. Global Positioning System. Systems Engineering Case Study. Air Force Center for Systems Engineering (AFIT/SY) Air Force Institute of Technology (AFIT). 2950 Hobson Way, Wright-Patterson AFB OH 45433-7765.

Primary References
O'Brien, Patrick J., and John M. Griffin. 4 October 2007. Global Positioning System. Systems Engineering Case Study. Air Force Center for Systems Engineering (AFIT/SY) Air Force Institute of Technology (AFIT). 2950 Hobson Way, Wright-Patterson AFB OH 45433-7765.

Additional References
none.

Global Positioning System II

 Lead Author:
 Brian White
-
This article highlights some of the differences between the so-called classical, traditional, or conventional systems engineering (SE) approaches and the newer, and, as yet, less defined principles of system of systems (SoS) engineering (SoSE), enterprise systems engineering (ESE), and/or complex systems engineering (CSE) or complex adaptive systems engineering (Gorod et al. 2015). The topic is still somewhat controversial, especially considering those that are skeptical that broader views of SE might work better when one is immersed in trying to cope with our most difficult problems. Indeed, the lack of a unified theory of SE is one of the prime motivations for producing and analyzing case studies to develop more knowledge of what seems to work, what does not seem to work, and reasons why, really challenging SE environments.
For addition information, refer to Systems Engineering: Historic and Future Challenges, Systems Engineering and Other Disciplines, Enterprise Systems Engineering, and System of Systems Engineering.
Rather than modifying the previous discussion of the Global Positioning System Case Study in SEBoK, the focus is on comparing and contrasting the older and newer forms of SE by commenting on quotations from the original case study source documents (O'Brien and Griffin 2007).


Preface
The original case study begins by describing systems engineering (SE) principles. For example,
System requirements are critical to all facets of successful system program development. First, system development must proceed from a well-developed set of requirements. Second, regardless of the evolutionary acquisition approach, the system requirements must flow down to all subsystems and lower-level components. And third, the system requirements must be stable, balanced, and must properly reflect all activities in all intended environments. However, system requirements are not unchangeable. As the system design proceeds, if a requirement or set of requirements is proving excessively expensive to satisfy, the process must rebalance schedule, costs, and performance by changing or modifying the requirements or set of requirements. (O'Brien and Griffin 2007, p. 9)
The Global Positioning System (GPS), including its multi-various applications, was developed over many years as the result of the efforts of a host of contributors. It is very difficult to believe that the classical, traditional or conventional systems engineering approach described in the above paragraph (especially those phrases highlighted in bold by the present authors) was truly responsible for this remarkable achievement that so profoundly impacts our lives. Rather, some more advanced form of systems engineering (SE), that might be called system of systems (SoS) engineering (SoSE), enterprise systems engineering (ESE), or complex (adaptive) systems engineering (CSE), or a blend and/or combination of these approaches or methodologies, had to be responsible. This premise is supported explicitly and repeatedly in the following case study revision using bold font.
Continuing, the following quoted paragraphs seem flawed in several places highlighted in bold. The bold phrases might be replaced by the phrases in brackets [...]. Such brackets might also include other editorial comments of the present authors.
Systems engineering includes making key system and design trades early in the process to establish the system architecture. '''These architectural artifacts''' [This architecture] can depict any new system, legacy system, modifications thereto, introduction of new technologies, and overall system-level behavior and performance. Modeling and simulation are generally employed to organize and assess architectural system alternatives at this stage. System and subsystem design follows the functional [system] architecture [as defined from a functional point of view]. System architectures designs are modified if elements are too risky, expensive, or time-consuming. (O'Brien and Griffin 2007, p. 9)
A good architecture, once established, should guide systems development, and not change very much, if at all, at least compared to possible changes in the system design, which, of course, can evolve as one learns more about the problem and potential solutions that may increase the system's capability. Thus, it is crucial to not confuse architecture with designs instantiating the architecture, contrary to what seems to be the case in (Ricci, et al. 2013).
Important to the efficient decomposition and creation of functional and physical architectural designs are the management of interfaces and the integration of subsystems. Interface management and integration is applied to subsystems within a system or across a large, complex system of systems. Once a solution is planned, analyzed, designed, and constructed, validation and verification take place to ensure satisfaction of requirements. Definition of test criteria, measures of effectiveness (MOEs), and measures of performance (MOPs) are established as part of the requirements process, taking place well before any component/subsystem assembly design and construction occurs. (O'Brien and Griffin 2007, p. 10)
In the quoted paragraph just above, bold phrases note the emphasis on a reductionist approach, reductionism, where great attention is paid to the subsystems and managing the interfaces among them. This is the antithesis of a holistic approach where one concentrates on the whole system, recognizing that it is difficult to identify overall system behavior as depending on any particular subsystem or set of subsystems. In a truly complex system that is continually evolving, the above-mentioned requirements process is flawed because the system is continually changing, i.e., the system is evolutionary; the requirements are either ill-defined at the outset, or are modified


because stakeholderschange their minds, or become somewhat irrelevant because the system environment changes.
There are several excellent representations of the [usual traditional or conventional] systems engineering process presented in the literature. These depictions present the current state of the art in maturity and evaluation of the systems engineering process. One can find systems engineering process definitions, guides, and handbooks from the International Council on Systems Engineering (INCOSE), European Industrial Association (EIA), Institute of Electrical and Electronics Engineers (IEEE), and various Department of Defense (DoD) agencies and organizations. They show the process as it should be applied [Really? In all situations?] by today's experienced practitioner. One of these processes, long used by the Defense Acquisition University (DAU), is [a model] not accomplished in a single pass. This iterative and nested process gets repeated to the lowest level of definition of the design and its interfaces. (O'Brien and Griffin 2007, p. 10)
The above description appears to be written with pride without any acknowledgement that this SE methodology might fail to work if applied according to these guidelines, or that there might be new SE techniques that could be more effective in some situations. Again, this reflects a reductionist approach that ignores holism and emergent properties that might not be explained even when thoroughly understanding the systems components and their interactions. On the positive side, the next paragraph suggests how the world is changing and hints that something more is needed. Nevertheless, the advice seems to be oriented toward applying the existing SE discipline more vigorously instead of seeking new methods that might be more effective.
The DAU model, like all others, has been documented in the last two decades, and has expanded and developed to reflect a changing environment. Systems are becoming increasingly complex internally and more interconnected externally. The process used to develop aircraft and systems of the past was effective at the time. It served the needs of the practitioners and resulted in many successful systems in our inventory. Notwithstanding, the cost and schedule performance of the past programs are replete with examples of well-managed programs and ones with less-stellar execution. As the nation entered the 1980s and 1990s, large DoD and commercial acquisitions experienced overrunning costs and slipping schedules. The aerospace industry and its organizations were becoming larger and were more geographically and culturally distributed. Large aerospace companies have worked diligently to establish common systems engineering practices across their enterprises. However, because of the mega-trend of teaming in large (and some small) programs, these common practices must be understood and used beyond the enterprise and to multiple corporations. It is essential that the systems engineering process govern integration, balance, allocation, and verification, and be useful to the entire program team down to the design and interface level. (O'Brien and Griffin 2007, p. 11)
Finally, in the next paragraph, there is a suggestion that SE could be made more sophisticated but there is no mention of addressing people problems or advocating a broader transdisciplinary approach.
Today, many factors overshadow new acquisition; including system-of-systems (SoS) con- text, network centric warfare and operations, and rapid growth in information technology. These factors are driving a more sophisticated systems engineering process with more complex and capable features, along with new tools and procedures. One area of increased focus of the systems engineering process is the informational systems architectural definitions used during system analysis. This process, described in DoD Architectural Framework (DoDAF), emphasizes greater reliance on reusable architectural views describing the system context and concept of operations, interoperability, information and data flows, and network service-oriented characteristics. (O'Brien and Griffin 2007, p. 11)
The last two sections of the systems engineering principles portion of the original case study address case studies themselves, mainly for academic purposes, to help people appreciate systems engineering principles, and the framework used in the case study, namely the rather narrowly defined Friedman-Sage framework that will be discussed briefly in Section II below.


The treatment of the reason for case studies is quite good in that it talks about the benefits of applying systems engineering principles, as highlighted from real-world examples of what works and what does not. Except near the end, where there is allusion to the possibility of new endeavor systems engineering principles, the principles espoused tend to be traditional or conventional.
On the other hand, based upon the original case study (O'Brien and Griffin 2007), if one views the boundary of the GPS system to include primarily the technology associated with the GPS space segment and its controlling ground network, then it can be assumed that system was likely implemented primarily by following traditional or conventional systems engineering processes. If one takes this viewpoint, then all of the above criticism which attempts to point out some of the shortcomings of conventional systems engineering, may seem vacuous at best, or politically incorrect at worst. It may well be that many would rather not denigrate the original GPS case study by exposing it to the possibilities of a broader system engineering approach.
Unless otherwise indicated, as the present authors have already been doing, unchanged quotations from the existing SEBoK are indented below. Modifications to such quotations are shown in brackets [...]; deletions are not necessarily shown explicitly.

Background
The Global Positioning System (GPS) case study was developed by the United States Air Force Center for Systems Engineering (AF CSE) located at the Air Force Institute of Technology (AFIT). The GPS is a space-based radio-positioning system. A constellation of twenty-four satellites, including three spares, comprise the overall system which provides navigation and timing information to military and civilian users worldwide. GPS satellites, in one of six Earth orbits, circle the globe every twelve hours, emitting continuous navigation signals on two different L-band frequencies. The system consists of two other major segments: a world-wide satellite control network, and the GPS user equipment that can either be carried by a human user or integrated into host platforms such as ships, vehicles, or aircraft.
A user needs to receive signals from at least four GPS satellites simultaneously (satellite orbital positions and terrestrial terrain blockage can be issues that degrade performance) to determine one's position in three dimensions; the altitude determination is typically less accurate than the other two dimensions.
When looking at [GPS], it would be difficult to imagine another system that relies so heavily upon such a wide range of [domains containing systems that must interact effectively to achieve successful GPS operation]. It is evident that [GPS directly relates to many domains and applications including:
 position location and tracking
 time synchronization
 navigation
 transportation
 times of arrival
 air traffic management
 situational awareness
 jam-resistant communications
 business and commerce
 farming
 aerospace
 sensing nuclear detonations from space
 military war-fighting
 targeting
 weapons delivery
 etc.].


[GPS is] an example of [a collaborative (Dahmann, et al. 2008) systems of systems (SoS)]. As such, no one is in charge, and the capabilities (not requirements) flow from the bottom-up, as opposed to top-down.

Purpose
The GPS case study includes a detailed discussion of the development of the GPS and its components, as well as other applicable areas. The reader of this study will gain an increased understanding of the effect that GPS has on military and commercial industries in the context of the systems engineering support required to achieve success.
This may be, but the principal purpose of this revised case study is to suggest a broader view of GPS that discusses signature aspects of SoS, enterprises, and complex systems, and emphasizes SoSE, ESE, and CSE.
[AF CSE] was tasked to develop case studies focusing on the application of [SE] principles within various aerospace programs. The GPS case study [was developed in support of SE] graduate school instruction using the Friedman-Sage framework (Friedman and Sage 2003) (Friedman and Sage 2004).]
However, the Friedman-Sage framework involves only two contractual stakeholders, the Government and the contractor; further, the framework is limited to the traditional or conventional SE life cycle which mainly treats activities in a linear instead of nonlinear fashion; still further, only risks are considered, not a balance of risk and opportunity. Thus, the present authors believe a broader framework embracing SoSE, ESE, and CSE is more appropriate.

Challenges
In the original case study, the first highly technical section (Section 2) was the system description. The original idea derived from trying to determine the precise orbital parameters of the first artificial satellites, such as Sputnik, launched by the Soviets in 1957. Researchers at Johns Hopkins realized the inverse, that if one knew precisely the orbital parameters, the locations of ground stations receiving satellite signals could be determined quite accurately. (O'Brien and Griffin 2007, p. 20.)
GPS got its start in the early 70s (O'Brien and Griffin 2007, p. 19), building upon several previous satellite navigation systems. The primary motive was very accurate position information for the purposes of military applications. For example, the U.S. Air Force wanted to deliver nuclear weapons from bombers with unprecedented accuracy and precision. (O'Brien and Griffin 2007, p. 29)
With such an intense interest from the military, the first real challenge, other than the many technical challenges of making GPS work as well as envisioned, might have been the question of how to make GPS available to the civilian community so they could share the benefits. The study claimed that the system was always offered for civilian use, albeit with some charge. After the Korean airliner went astray and got shot down by a Soviet interceptor aircraft, President Reagan made GPS officially available for civilian use free of charge. (O'Brien and Griffin 2007, p. 14)
The second challenge could be associated with preserving precision capabilities for the military only, and relegating course acquisition (C/A) accuracy to the civilian community. (O'Brien and Griffin 2007, p. 15) Later this dichotomy was essentially eliminated with the realization that a differential GPS configuration involving a fixed ground station with a precisely known location will yield great accuracy. (Kee, et al. 1991)
The GPS satellites used space-borne atomic clocks. To alleviate the need for updating these clocks too often, a successful effort was initiated to revise the international time standard which ended up using relatively infrequent "leap seconds". (O'Brien and Griffin 2007, p. 23) Even these are still annoying for many other applications, such as the continual need to achieve precise synchronization of frequency-hopping radios.
An organizational challenge of inter-service rivalries was overcome with the formation of the Joint Program Office (JPO). (O'Brien and Griffin 2007, p. 25.)


In the early days of satellite communication systems, for example, the satellites were quite small and low powered while the terminals were large and high-powered. By the time GPS came along, the satellites are getting bigger and more sophisticated. Then the challenge to develop relatively low-cost terminals, particularly for mobile users, greatly increased. (O'Brien and Griffin 2007, p. 29)
A small but interesting challenge was the definition of system of systems (SoS). It was decided that GPS was an SoS because it involved three independent systems, namely, the space vehicle (SV), the control segment (CS), and the user equipment (UE), that "merely" had to interface with each other. (O'Brien and Griffin 2007, p. 30)
Continually changing requirements is usually a problem, although in this case the requirements did not change as often as they could have. (O'Brien and Griffin 2007, p. 31)
Difficulties of defining and updating the many GPS interfaces was largely overcome by the GPS program director, Col. Brad Parkinson, when he convinced his own management, Gen. Schultz at Space and Missile Systems Office (SAMSO) (which eventually became the Space Division) that GPS ought to be defined solely by the signal-structure-in-space and not the physical interfaces. (O'Brien and Griffin 2007, p. 31)

Systems Engineering Practices
Although the systems engineering process in Phase I has been discussed previously, this section will expand on the concepts. For example, one of the user equipment contractors was technically competent, but lacked effective management. The JPO strongly suggested that a systems engineering firm be hired to assist the contractor in managing the program and they agreed. (O'Brien and Griffin 2007, p. 42)
There did not seem to be any mention of what SE firm was hired, if any. The Aerospace Corporation, a non-profit Federally Funded Research and Development Center (FFRDC), which had such a key role in the run-up to GPS was also prominently and centrally involved in development phase of this humungous project. (O'Brien and Griffin 2007, pp. 20, 22, 25, 33, 34, 40, 41, 44, 48, 50-52, 56, 57, 62, 63, 64, 66, 67, 71)

Lessons Learned
Communications was a key ingredient that was fostered throughout GPS development. (O'Brien and Griffin 2007, p. 71)
Yes, from reading the original case study there seems to have been a lot of cooperation among the various organizations, more so than might have been expected in a less compelling case.
Several precepts or foundations of the Global Positioning Satellite program are the reasons for its success. These foundations are instructional for today's programs because they are thought-provoking to those who always seek insight into the program's progress under scrutiny. These foundations of past programs are, of course, not a complete set of necessary and sufficient conditions. For the practitioner, the successful application of different systems engineering processes is required throughout the continuum of a program, from the concept idea to the usage and eventual disposal of the system. Experienced people applying sound systems engineering principles, practices, processes, and tools are necessary every step of the way. Mr. Conley, formerly of the GPS JPO, provided these words: "Systems engineering is hard work. It requires knowledgeable people who have a vision of the program combined with an eye for detail." (O'Brien and Griffin 2007, p. 72)
In very complex systems engineering efforts of this type, it is also important to explore new techniques that attempt to deal with "soft" issues involving people. Those that seem to work can be added to the systems engineering process collection.
Systems engineering played a major role in the success of this program. The challenges of integrating new technologies, identifying system requirements, incorporating a system of systems approach, interfacing with a plethora of government and industry agencies, and dealing with the lack of an


operational user early in the program formation required a strong, efficient systems engineering process. The GPS program embedded systems engineering in their knowledge-base, vision, and day-to-day practice to ensure proper identification of system requirements. It also ensured the allocation of those requirements to the almost-autonomous segment developments and beyond to the subcontractor/vendor level, the assessments of new requirements, innovative test methods to verify design performance to the requirements, a solid concept of operations/mission analysis, a cost-benefit analysis to defend the need for the program, and a strong system integration process to identify and control the "hydra" of interfaces that the program encountered. The program was able to avoid major risks by their acquisition strategy, the use of trade studies, early testing of concept designs, a detailed knowledge of the subject matter, and the vision of the program on both the government and contractor side. (O'Brien and Griffin 2007, p. 72)
This well summarizes the successful systems engineering approach utilized in GPS. Another element of achieving overall balance is the pursuit of opportunities as the "flipside" of risk mitigation.
Finally, here is the list of academic questions offered in the original case study.
QUESTIONS FOR THE STUDENT (O'Brien and Griffin 2007, p. 73) The following questions are meant to challenge the reader and prepare for a case discussion.
 Is this program start typical of an ARPA/ DARPA funded effort? Why or why not?
 Have you experienced similar or wildly different aspects of a Joint Program?
 What were some characteristics that should be modeled from the JPO?
 Think about the staffing for the GPS JPO. How can this be described? Should it be duplicated in today's programs? Can it?
 Was there anything extraordinary about the support for this program?
 What risks were present throughout the GPS program. How were these handled?
 Requirement management and stability is often cited as a central problem in DoD acquisition. How was this program like, or [un]like, most others?
 Could the commercial aspects of the User Equipment be predicted or planned? Should the COTS aspect be a strategy in other DoD programs, where appropriate? Why or why not?
Other questions might be: What possible influences did the demand for or offering to the public of this GPS capability entail? What differences in the development of GPS might have emerged if the public was more aware of the potential applications for their benefit at the outset?

References
Works Cited
Dahmann, J. S., G. Rebovich, Jr., and J. A. Lane. November 2008. "Systems engineering for capabilities." CrossTalk, The Journal of Defense Software Engineering. http:/ / www. stsc. hill. af. mil/ crosstalk/ 2008/ 11/ index. html.
Accessed 12 May 2015).
Friedman, G.R., and A.P. Sage. 19 January 2003. Systems Engineering Concepts: Illustration Through Case Studies. Accessed September 2011. http://www.afit.edu/cse/docs/Friedman-Sage%20Framework.pdf.
Gorod, A., B. E. White, V. Ireland, S. J. Gandhi, and B. J. Sauser. 2015. Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering. Boca Raton, FL: CRC Press, Taylor & Francis Group. 2015. http://www.taylorandfrancis.com/books/details/9781466502390/.Accessed 8 May 2015.
Friedman, G.R., and A.P. Sage. 2004. "Case Studies of Systems Engineering and Management in Systems Acquisition." Systems Engineering 7(1): 84-96.
Kee, C., B. W. Parkinson, P. Axelrad. 1991. "Wide area differential GPS." Journal of The Institute of Navigation
38(2): 123-46.


O'Brien, P. J., and J. M. Griffin. 4 October 2007. Global Positioning System. Systems Engineering Case Study. Air Force Center for Systems Engineering (AFIT/SY) Air Force Institute of Technology (AFIT). 2950 Hobson Way, Wright-Patterson AFB OH 45433-7765.
Ricci, N., A. M. Ross, D. H. Rhodes, and M. E. Fitzgerald. 2013. "Considering alternative strategies for value sustainment in systems-of-systems." 6th IEEE International Systems Conference (SysCon). 15-18 April. Orlando, FL.

Primary References
Gorod, A., B. E. White, V. Ireland, S. J. Gandhi, and B. J. Sauser. 2015. Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering. Boca Raton, FL: CRC Press, Taylor & Francis Group. 2015. http://www.taylorandfrancis.com/books/details/9781466502390/.Accessed 12 May 2015

Additional References
None

Russian Space Agency Project Management Systems

-
This article is based around a Russian space agency Project Management Systems case study (Rzevski and Skobelev, 2014). The case study focuses on the development of a Real-Time Complex Adaptive Project Management System capable of effectively managing multiple related projects collectively contributing to a defined Enterprise Value.

Background
The essence of every management system should be the same: the allocation of human, physical, financial and intellectual (knowledge) resources to demands (tasks) with the aim of increasing the specified Enterprise Value, where the Enterprise Value is a system of values such as profit, market share, business sustainability, quality of service to customers, quality of working conditions for employees, quality of life in the community, etc. The key difference between the management of a business and management of a project is that businesses are continuously evolving processes whilst projects have specified beginnings and ends.
Standard challenges for project management are:
 Stringent budgets and deadlines
 High competition for limited resource availability such as up-to-date domain knowledge, skills and advanced productivity tools
 Functional organization, which inevitably impedes interdepartmental cooperation
 Bureaucratic management, which is more concerned with lines of command and reporting than with the full use of a project member's initiative and creativity and which negatively affects their motivation
 Rigid project planning, which leads to a rapid divergence between the project plan and reality
Large enterprises commonly operate several projects concurrently. What is best for an individual project is not always best for the enterprise and therefore it is necessary to implement coordination of concurrently run projects with the objective of significantly increasing Enterprise Value.
There are two new key problems, which the 21st century brought to us.


The first is the rapidly increasing complexity of the Internet-based global market, which creates frequent unpredictable disruptive events. This requires real-time adaptive project management, for which there is at present no precedent.
The second is the replacement of capital with knowledge as the key business resource in the economy in which the wealth created by knowledge services is greater than wealth created by producers of goods. There is at present no management system capable of discovering, processing, storing and allocating knowledge to project tasks.

Purpose
The client for this case study was one of the key space technology organizations in Russia, their equivalent of NASA, which operates, at any time, many concurrent mission critical projects.
The purpose of the project management system was to enable the client to effectively manage several related projects (at least ten), collectively contributing to the specified Enterprise Value, with the following requirements:
 Each project may consist of up to 5,000 constituent tasks
 Project members may have different backgrounds and skills and may belong to diverse business cultures
 Project members must have an opportunity to contribute to decision making processes, which affects their domain of work (distributed decision making)
 Both project management and project members must have readily available and up-to-date information on, respectively, project and individual progress, productivity and achievements of goals
 The allocation of resources to tasks must consider 4 types of resources, namely, human, physical, financial and knowledge
 Availability of resources for and constituent tasks of each project may change with short notice and these changes must be rapidly incorporated into the system
 Projects will be subjected to frequent disruptive events such as non-arrival of expected orders, arrival of unexpected orders, sudden and unforeseen emergence of external/internal competitors, cancellations, changes in task specifications, delays, failures, no-shows, etc.
 Rules and regulations governing projects are likely to change rather frequently and any change in rules and regulations must be incorporated immediately and easily into the relevant project management system
 Any discrepancy between project plans and reality in the field must be continuously monitored and rapidly detected and reported
 Projects may cooperate and/or compete for resources in order to increase specified Enterprise Value
A thorough analysis of the client's requirements led to the conclusion that it is necessary to develop a real-time, complex adaptive project management system capable of cooperating and/or competing with other systems, with the overarching goal to continuously increase specified Enterprise Value.
The new system would replace a number of stand-alone, manual or semi-automated project management systems with inadequate monitoring of progress and productivity.
A thorough analysis of contemporary practices showed that such a transformation had never before been achieved. To the best of the team's knowledge, there were no real-time project management systems in existence anywhere in the world.


Challenges
This particular undertaking had a number of challenges.
The most important challenge was the resistance to change by client's managers. The new system with its progress and productivity monitoring capabilities threatened to expose inefficiencies and was not universally welcomed. Two approaches were planned to manage this challenge: the first was education of participants and the second, a proposal for a new payment structure which related salaries to meeting of targets, as reported by the new system.
The scale of the proposed network of systems was an even more important challenge, especially because all projects were mission critical. To manage this challenge, the plan was made to adopt an evolutionary development strategy. The first step was planned to be a fully engineered prototype with a limited functionality, which would be extended into the first project management system only after a complete acceptance by the client that the prototype was capable of delivering its limited functionality as specified. The network of project management systems would be grown step by step.
The multi-agent technology, which underpinned the system, was well understood by the team, and a methodology for managing complexity (Rzevski and Skobelev, 2014) of the task was in place.

Systems Engineering Practices
Overview
The complexity of client's projects ruled out all conventional project management practices and systems. Instead, for every project, the team designed a complex adaptive project management system, based on multi-agent technology, capable of meeting client requirements.
The system consisted of the following major components (Rzevski and Skobelev, 2014):
1. Knowledge Base containing domain knowledge relevant to the client's project management processes
2. Multi-agent Virtual World which models the Real World of projects and is capable of managing real-world complexity
3. Interfaces between the Virtual and Real Worlds, which enable the Virtual World to, in-effect, manage the Real World, with or without human intervention

Knowledge Base
Examples of Classes of Objects in the ontology are: Enterprise, Organizational Unit, Project, Task, Project Member (Human Resource), Hardware (Physical) Resource, Document, Software Resource, Knowledge Resource and Process.
Examples of attributes are, for Task: Content, Cost, Duration, Deadline and Preferences; and for Project Member: Organizational Unit, Competences, Profile, Schedule, Current Task, Salary, Achievements and Preferences.
A fragment of enterprise ontology is shown below.





Virtual World
Examples of agents that populate the Virtual World include:
 Task Agent, whose objective is to search for the best resources capable to meet its requirements
 Human Resource Agent, whose objective is to get the best possible task, which will keep the project participant fully occupied, provide opportunities for bonuses and/or enable the participant to learn new skills or get new experience
 Physical Resource Agent, whose objective is to maximize resource utilization
 Project Agent, whose objective is to maximize Project Value
 Enterprise Agent, whose objective is to maximize Enterprise Value
All decisions are made through agent negotiations, as exemplified by the following process:
Task Agents send messages to Human Resource Agents with required competences inviting them to contribute to task fulfilments. Human Resource Agents that are available send their bids. Task Agents offer project participation to those Agents that sent the best bids. Bids are subject to negotiations between affected agents.
A new Task Agent is created whenever a new task is formulated or a previously allocated task is modified. The new Task Agent consults ontology to find out what its objectives are and how to achieve them, and proceeds to send messages to selected Human Resource Agents inviting them to bid for project participation. It is very likely that this invitation will result in re-scheduling, giving an opportunity to Human Resource Agents that were not fully satisfied with their previous allocations to improve their positions. Remuneration, including bonuses, if any, is calculated on the basis of project member participation and achieved results. Enterprise members may participate in several projects.
The allocation of physical, software and knowledge resources is done in an analogous manner. Advanced methods (Rzevski and Skobelev, 2014) have been employed to maximise effectiveness of agent negotiation, such as, virtual microeconomics, agent satisfaction, agent proactivity, enterprise agents, swarm cooperation, etc.
Decisions on allocation of resources to project tasks are made using multiple criteria, for example, decreases in completion time, increases in quality and reducing identified risks, as illustrated below.





Connecting Virtual and Real Worlds
The project member dashboard is the key link between the system and the project member. The exchange of information that could be conducted using the dashboard includes:
 Negotiations of task content, risks, deadlines and budgets
 Acceptance/rejection by the project member of offered project tasks
 Inputs by project members of unexpected disruptive events and comments during the project
 Reports by the system on the project member performance in carrying out accepted tasks
The system may decide to engage two or more available project members in competition with each other to secure an agreement on the acceptable task performance.
The other key link between the virtual and real worlds is the project managers dashboard, which displays detailed project performance data in the form of various diagrams and Gantt charts and allows the manager to examine or modify decisions made autonomously by the system.

Lessons Learned
The first real-time complex adaptive project management system was commissioned and deployed by the client in 2014 achieving the following results:
 10% to 15% increase in project member productivity;
 3 to 4 times reduction in manpower required for project scheduling, monitoring and coordination;
 2 to 3 times reduction of response time to unpredictable disruptive events;
 15% to 30% increase in the number of projects completion on budget and in time;
 A significant increase in project member motivation;
 A possibility to increase the number of projects operating in parallel without increasing the number of employees.


References
Works Cited
Rzevski, G., Skobelev, P., "Managing Complexity" WIT Press, New Forest, Boston, 2014. ISBN 978-1-84564-936-4.

Primary References
Rzevski, G., Skobelev, P., "Managing Complexity" WIT Press, New Forest, Boston, 2014. ISBN 978-1-84564-936-4.

Additional References
None.

How Lack of Information Sharing Jeopardized the NASA/ESA Cassini/Huygens Mission to Saturn

 Lead Author:
 Brian White
-
This article describes a deep space mission where more forthright information exchanges between teamed but rival agencies could have both preserved the original plan and saved much time and money. The topic may be of particular interest to those involved in institutional collaborations where there are vested interests in protecting rather than sharing information.
For additional information, refer to the closely related topics of Information Management, Organizing Business and Enterprises to Perform Systems Engineering and Fundamentals of Services.

Background
Before the "Faster, Better, Cheaper" philosophy introduced in the 1990s, the United States National Aeronautics and Space Administration (NASA) focused on three classes of unmanned space missions. In order of increasing cost, these were the Discovery, New Frontiers, and Flagship programs. Flagship programs typically cost more than $1B, and included the Voyager (outer planets), Galileo (Jupiter), Cassini-Huygens (Saturn), Mars Science Laboratory (Mars), and the James Webb Space Telescope. (Wall 2012)
The concept of the Cassini-Huygens mission was initiated in 1982 as the result of a working group formed by the National Academy of Sciences and the European Science Foundation. This group sought opportunities for joint space missions; several subsequent reports endorsed the working group's concept of a Saturn orbiter coupled with a Titan (Saturn's largest moon) lander. (Russell 2003, p. 61.)
By 1988, NASA was politically motivated to reverse earlier tensions with the European Space Agency (ESA) by engaging in a joint mission. Cassini-Huygens was seen as a mechanism to achieve this goal, and the cooperation between NASA and ESA helped the program survive potential budget cuts (since the U.S. was obligated to match ESA commitments). (Russell 2003, p. 62.)


NASA and ESA approved the Cassini-Huygens program, and it proceeded under a traditional management approach. NASA built the Cassini orbiter (the largest and most complex unmanned space probe ever built) and the ESA constructed the Huygens lander. This partition of responsibility almost led to the failure of the Titan survey portion of the mission. Cassini (which would conduct a variety of scientific surveys of the Saturn planetary system) was expected to relay transmissions from Huygens to NASA's Deep Space Network (DSN); however, the interface between the lander and orbiter was not well-managed and erroneous assumptions about how the orbiter/lander system would behave after separation nearly doomed the Titan exploration portion of the mission. (Oberg 2004.)

Purpose
The intent of the Titan survey portion of the Cassini-Huygens mission was that the Huygens lander would separate from the Cassini orbiter and commence a one-way, 2.5 hour descent into Titan's atmosphere. Its modest transmitter would send data back to the orbiter, which would relay the information to Earth. (Oberg 2004, p. 30.) This effectively made the radio link between the two spacecraft a poorly-characterized single point of failure (SPOF).
Alenia Spazio SpA, the Italian communications vendor that built the radio system, overlooked the Doppler shift (approximately 38 kHz) (Oberg, 2004, p. 31) that would occur when Huygens separated from Cassini and began its descent (Oberg 2004, p. 38). The communications protocol was binary phase-key shifting: "[the] transmission system represents 1s and 0s by varying the phase of the outgoing carrier wave. Recovering these bits requires precise timing: in simple terms, Cassini's receiver is designed to break the incoming signal into 8192 chunks every second. It determines the phase of each chunk compared with an unmodulated wave and outputs a 0 or a 1 accordingly". (Oberg 2004, p. 31.) The receiver was appropriately configured to compensate for the Doppler shift of the carrier wave but would be unable to adjust for the Doppler shift of the encoded data. "In effect, the shift would push the signal out of synch with the timing scheme used to recover data from the phase-modulated carrier." (Oberg 2004, p. 33) Therefore, the communications system would be unable to decode the data from the lander and would then relay scrambled information to NASA. Because of the failure mechanism involved, the data would be completely unrecoverable.
Both Cassini and Huygens had been tested before launch; however, none of the testing accurately reflected the Doppler shift that would be experienced at this critical phase of the mission. An opportunity to conduct a full-scale, high-fidelity radio test was ignored due to budget constraints; the testing would have required disassembly and subsequent recertification of the probes. (Oberg, 2004, p. 30.) Correcting this latent issue via a minor firmware upgrade would have been trivial before the spacecraft were launched (Oberg 2004, p. 33) once they were on the way to Saturn any corrective action would be severely limited and expensive.
Once the mission was underway, the probe coasted along its seven-year trajectory to Saturn and its moons. Claudio Sollazzo, the ESA ground operations manager, was uncomfortable with the untested communications system. He tasked Boris Smeds, an engineer with radio and telemetry experience, with finding a way to test the communications system using an Earth-generated signal. (Oberg 2004, p. 30.)
Smeds spent six months developing the test protocols that would use Jet Propulsion Laboratory (JPL) ground stations and an exact duplicate of Huygens. Simulated telemetry would be broadcast from Earth to Cassini and relayed back; the test signal would vary in power level and Doppler shift to fully exercise the communications link and accurately reflect the anticipated parameters during Huygens's descent into Titan's atmosphere. (ESA 2005)


Challenges
Smeds faced opposition to his test plans from those who felt it was unnecessary, but ultimately prevailed due to support from Sollazzo and Jean-Pierre Lebreton, the Huygens project scientist. More than two years after the mission was launched, Smeds traveled to a DSN site in California to conduct the test. (Oberg 2004, p. 31)
A test signal was broadcast, received by Cassini, re-transmitted to the DSN site, and relayed to ESA's European Space Operation Centre (ESOC) in Darmstadt, Germany for analysis. Testing had to be conducted when the orbiter was in the correct relative position in the sky; it was more than a quarter of a million miles away with a signal round-trip time of nearly an hour. The test immediately exposed an issue; the data stream was intermittently corrupted, with failures not correlated to the power level of the test signal. The first of two days of testing concluded with no clear root cause identified. (Oberg 2004, p. 31.)
Even though the probe was far from its ultimate destination, many science teams were competing for time to communicate with it using the limited bandwidth available. The communications team would not be able to conduct another set of trials for several months. Smeds diagnosed the root cause of the problem; he felt it was the Doppler shifts induced in the simulated signal. However, the test plan did not include unshifted telemetry (an ironic oversight). He modified his test plan overnight and shortened the planned tests by 60%; this recovered sufficient time for him to inject an unshifted signal into the test protocols. (Oberg 2004, p. 32)
This unshifted signal did not suffer from the same degradation; however, other engineers resisted the diagnosis of the problem. Follow-up testing using probe mockups and other equipment ultimately convinced the ESA of the issue; this took an additional seven months. (Oberg 2004, p. 33.)
By late 2000, ESA informed NASA of the latent failure of the communications link between Cassini and Huygens. Inquiry boards confirmed that Alenia Spazio had reused timing features of a communications system used on Earth-orbiting satellites (which did not have to compensate for Doppler shifts of this magnitude). (Oberg, 2004, p. 33.) In addition, because NASA was considered a competitor, full specifications for the communications modules were not shared with JPL. The implementation of the communications protocols was in the system's firmware; trivial to correct before launch, impossible to correct after. (ESA 2005.)
A 40-man Huygens Recovery Task Force (HRTF) was created in early 2001 to investigate potential mitigation actions. Analysis showed that no amount of modification to the signal would prevent degradation; the team ultimately proposed changing the trajectory of Cassini to reduce the Doppler shift. (ESA 2005) Multiple studies were conducted to verify the efficacy of this remedy, and it ultimately allowed the mission to successfully complete the Titan survey.

Systems Engineering Practices
Space missions are particularly challenging; once the spacecraft is en route to its destination, it is completely isolated. No additional resources can be provided and repair (particularly for unmanned missions) can be impossible. Apollo 13's crew managed to barely survive the notable mishap on its mission because of the resources of the docked Lunar Excursion Module (LEM) and the resourcefulness of the ground control team's experts. A less well-known failure occurred during the Galileo mission to Jupiter. After the Challenger disaster, NASA adopted safety standards that restricted the size of boosters carried in the Space Shuttle. (Renzetti 1995.) Galileo was delayed while the Shuttles were grounded and Galileo's trajectory was re-planned to include a Venus fly-by to accelerate and compensate for a smaller booster. Galileo's main antenna failed to deploy; lubricant had evaporated during the extended unplanned storage (Evans 2003) and limited computer space led to the deletion of the antenna motor-reversing software to make room for thermal protection routines. When the antenna partially deployed, it was stuck in place with no way to re-furl and redeploy it. Engineers ultimately used an onboard tape recorder, revised transmission protocols, the available low-gain antenna, and ground-based upgrades to the DSN to save the mission. (Taylor, Cheung, and Seo 2002.)


The Titan survey was ultimately successful because simulation techniques were able to verify the planned trajectory modifications and sufficient reaction mass was available to complete the necessary maneuvers. In addition, Smeds's analysis gave the mission team the time it needed to fully diagnose the problem and develop and implement the remedy. If this test were conducted the day before the survey, it would merely have given NASA and ESA advance warning of a disaster. The time provided enabled the mission planners to craft a trajectory that resolved the communication issue and then blended back into the original mission profile to preserve the balance of the Saturn fly-bys planned for Cassini. (Oberg 2004, p. 33.)

Lessons Learned
The near-failure of the Cassini-Huygens survey of Titan was averted because a handful of dedicated systems engineers fought for and conducted relevant testing, exposed a latent defect, and did so early enough in the mission to allow for a recovery plan to be developed and executed. Root causes of the issue included politically-driven partitioning, poor interface management, overlooked contextual information, and a lack of appreciation for single-points-of-failure (SPOFs).
The desire to use a joint space mission as a mechanism for bringing NASA and ESA closer together (with the associated positive impact in foreign relations) introduced an unnecessary interface into the system. Interfaces must always be managed carefully; interfaces between organizations (particularly those that cross organizational or political borders) require extra effort and attention. Boeing and Airbus experienced similar issues during the development of the Boeing 787 and A380; international interfaces in the design activities and supply chains led to issues:
...every interface in nature has a surface energy. Creating a new surface (e.g., by cutting a block of steel into two pieces) consumes energy that is then bound up in that surface (or interface). Interfaces in human systems (or organizations), a critical aspect of complex systems such as these, also have costs in the effort to create and maintain them. Second, friction reduces performance. Carl von Clausewitz, the noted military strategist, defined friction as the disparity between the ideal performance of units, organizations, or systems, and their actual performance in real-world scenarios. One of the primary causes of friction is ambiguous or unclear information. Partitioning any system introduces friction at the interface. (Vinarcik 2014, p. 697)
Alenia Spazio SpA's unclear understanding of the Doppler shift introduced by the planned relative trajectories of Huygens and Cassini during the Titan survey led it to reuse a component from Earth-orbiting satellites. Because it considered NASA a competitor and cloaked details of the communications system behind a veil of propriety, it prevented detection of this flaw in the design phase. (Oberg 2004, p. 33)
Because NASA and ESA did not identify this communication link as a critical SPOF, they both sacrificed pre-launch testing on the altar of expediency and cost-savings. This prevented detection and correction of the flaw before the mission was dispatched to Saturn. The resource cost of the later analysis and remedial action was non-trivial and if sufficient time and reaction mass had not been available the mission would have been compromised. It should be noted that a number of recent spacecraft failures are directly attributable to SPOFs (notably, the Mars Polar Lander (JPL 2000) and the Genesis sample return mission (GENESIS, 2005)). Effective SPOF detection and remediation must be a priority for any product development effort. More generally, early in the development process, significant emphasis should be placed on analyses focused on what might go wrong ("rainy day scenarios") in addition to what is expected to go right ("sunny day scenarios").
The success of the Huygens survey of Titan was built upon the foundation established by Boris Smeds by identifying the root cause of the design flaws in a critical communications link. This case study underscores the need for clear contextual understanding, robust interface management, representative testing, and proper characterization and management of SPOFs.


References
Works Cited
Evans, B. 2003. "The Galileo Trials." Spaceflight Now. Available: http:/ / www. spaceflightnow. com/ galileo/ 030921galileohistory.html.
GENESIS. 2005. "GENESIS Mishap Investigation Board Report Volume I." Washington, DC, USA: National Aeronautics and Space Administration (NASA).
JPL. 2000. "Report on the Loss of the Mars Polar Lander and Deep Space 2 Missions." Special Review Board. Pasadena, CA, USA: NASA Jet Propulsion Laboratory (JPL).
ESA. 2005. "Modest Hero Sparks Team Response." European Space Agency. Available: http:/ / www. esa. int/ Our_Activities/Operations/Modest_hero_sparks_team_response.
Oberg, J. 2004. "Titan Calling: How a Swedish engineer saved a once-in-a-lifetime mission to Saturn's mysterious moon." IEEE Spectrum. 1 October 2004, pp. 28-33.
Renzetti, D.N. 1995. "Advanced Systems Program and the Galileo Mission to Jupiter." The Evolution of Technology in the Deep Space Network: A History of the Advanced Systems Program. Available: http:/ / deepspace. jpl. nasa. gov/technology/95_20/gll_case_study.html.
Russell, C. 2003. The Cassini-Huygens Mission: Volume 1: Overview, Objectives and Huygens Instrumentarium. Norwell, MA, USA: Kluwer Academic Publishers.
Taylor, J., K.-M. Cheung, and D. Seo. 2002. "Galileo Telecommunications. Article 5." DESCANSO Design and Performance Summary Series. Pasadena, CA, USA: NASA/Jet Propulsion Laboratory.
Vinarcik, M.J. 2014. "Airbus A380 and Boeing 787 - Contrast of Competing Architectures for Air Transportation," in Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering, edited by A. Gorod et al. Boca Raton, FL, USA: CRC Press. p. 687-701.
Wall, M. 2012. "NASA Shelves Ambitious Flagship Missions to Other Planets." Space News. Available: http:/ / www.space.com/14576-nasa-planetary-science-flagship-missions.html.

Primary References
None.

Additional References
None.


Hubble Space Telescope

 Lead Authors:
 Heidi Davidz, Alice Squires, and Richard Freeman
 Contributing Author:
 Brian White
-
This article describes a remarkable engineering feat with vast scientific benefits and implications. The topic may be of particular interest to those facing formidable systems engineering challenges where one might thrive on a thoughtful blend of humility and optimism. For additional information, refer to the links provided in Section V: Lessons Learned below.

Background
The Hubble Space Telescope (HST) Case Study was developed by the United States Air Force Center for Systems Engineering (AF CSE) located at the Air Force Institute of Technology (AFIT). The AF CSE was tasked to develop case studies focusing on the application of systems engineering principle s within various aerospace program s. The HST study (Mattice 2005) is one of four initial case studies selected by AFIT for development in support of systems engineering graduate school instruction. The cases are structured using the Friedman-Sage framework (Friedman and Sage 2003; Friedman and Sage 2004, 84-96), which decomposes a case into contractor, government, and shared responsibilities in the following nine concept areas: STOPPED HERE
1. Requirements Definition and Management
2. Systems Architecture Development
3. System/Subsystem Design
4. Verification/Validation
5. Risk Management
6. Systems Integration and Interfaces
7. Life Cycle Support
8. Deployment and Post Deployment
9. System and Program Management
The case study provides a useful example of the rising cost of defect correction through successive life cycle phases, demonstrating how an error (in test fixture specification) that could have been fixed for $1,000 at the design stage, or detected and fixed with a $10 million investment in an end-to-end test of the telescope on the ground, ended up costing $1 billion to fix when the system was in service.

Purpose
The Hubble Space Telescope (HST) is an orbiting astronomical observatory operating in the spectrum from the near-infrared into the ultraviolet. Launched in 1990 and still operational, HST carries and has carried a wide variety of instruments producing imaging, spectrographic, astrometric, and photometric data through both pointed and parallel observing programs. Over 100,000 observations of more than 20,000 targets have been produced for retrieval. The telescope is well known as a marvel of science. This case study hopes to represent the facet of the HST that is a marvel of systems engineering, which, in fact, generated the scientific research and observation capabilities now appreciated worldwide.
Viewed with the clarity that only time and hindsight provide, the HST program certainly represents one of the most successful modern human endeavors on any scale of international scope and complex ity. As a systems engineering


project the HST had to respond to requirement s from the diverse international scientific community at a time when NASA was implementing a different research-development-acquisition philosophy and process than what was predominately being used in most major government acquisition programs. As with most other large programs, powerful influences outside the systems engineering process itself became issues that HST systems engineer s in effect had to acknowledge as integral to their overall system/program/engineering management responsibility.

Challenges
The story of how this remarkable capability came to be is a story of the complicated interactions of a systems engineering process, which we like to believe we understand, with equally demanding political, budgetary, and institutional processes we often fail to understand or comprehend at the time they occur. In the final analysis, these processes are inseparable and integral to attaining program success. The challenge to modern systems engineers is to fully embrace the discipline of the systems engineering process while at the same time learning how to continue to practice it in spite of inevitable external influences and instabilities that often cannot be anticipated.
Major differences revolved around the nature and needs of a very different HST "customer" or user from most DoD systems. The HST had to respond to requirements from the diverse international scientific community instead of from  DoD's  combatant  commands.  In  addition,  at  the  time,  NASA  implemented  a  different research-development-acquisition philosophy and process than the DoD Acquisition Management Framework described in the DoD 5000 series acquisition reforms. As with most other large programs, powerful influences outside the systems engineering process itself became issues that HST systems engineers in effect had to acknowledge as integral to their overall system/program/engineering management responsibility.

Systems Engineering Practices
During the critical systems engineering phase for the HST program (1970s concept studies thru 1990 launch) there appears to have been no NASA systems engineering master process. Rather, field center processes were operative and possibly even in competition, as centers (especially Marshall and Goddard for HST) were in keen competition for lead management roles and responsibilities. We will see the systems engineering and program management impacts of this competition as it played out for HST, with the science mission objectives and instrumentation payloads being the motivation for Goddard vs. the vehicle/payload access to space motivation of Marshall. In the final analysis, the roles of the major contractors in engineering the system with uneven NASA participation over the system life cycle had a telling effect.

Lessons Learned
Five learning principles (LPs) were derived that address the more broadly applicable areas of systems engineering knowledge. These five LPs inform the areas of the SEBoK that are most strongly related to the case study. The five areas are:
 stakeholder requirements definition (LP1);
 planning (pre-program trade studies) (LP2);
 system integration (LP3);
 life cycle model management (LP4); and
 risk management (LP5).
A synopsis of the HST Learning Principles (LPs) are as follows:
Stakeholder Requirements Definition LP1: Early and full participation by the customer/user throughout the program is essential to success. In the early stages of the HST program, the mechanism for involving the customer was not well defined. The user community was initially polarized and not effectively engaged in program definition and advocacy. This eventually changed for the better, albeit driven heavily by external political and related national


program initiatives. Ultimately, institutionalization of the user's process for involvement ensured powerful representation and a fundamental stake and role in both establishing and managing program requirements. Over time, the effectiveness of "The Institute" led to equally effective user involvement in the deployment and on-orbit operations of the system as well.
Planning LP 2: The use of Pre-Program Trade Studies (e.g. "Phased Studies" or "Phased Project Planning") to broadly explore technical concepts and alternatives is essential and provides for a healthy variety of inputs from a variety of contractors and government (NASA) centers. These activities cover a range of feasibility, conceptual, alternative and preliminary design trades, with cost initially a minor (later a major) factor. In the case of HST, several NASA Headquarters and Center organizations funded these studies and sponsored technical workshops for HST concepts. This approach can promote healthy or unhealthy competition, especially when roles and responsibilities within and between the participating management centers have not yet been decided and competing external organizations use these studies to further both technical and political agendas. NASA Center roles and missions can also be at stake depending on political and or budgetary realities. The systems engineering challenge at this stage is to "keep it technical, stupid!"
Systems Integration LP 3: A high degree of systems integration to assemble, test, deploy, and operate the system is essential to success and must be identified as a fundamental program resource need as part of the program baseline. For HST, the early wedding of the program to the Shuttle, prior NASA and NASA contractor experience with similarly complex programs, such as Apollo, and the early requirement for manned, on-orbit servicing made it hard not to recognize this was a big systems engineering integration challenge. Nonetheless, collaboration between government engineers, contractor engineers, as well as customers, must be well defined and exercised early on to overcome inevitable integration challenges and unforeseen events.
Life Cycle Models LP 4: Life Cycle Support planning and execution must be integral from day one, including concept and design phases. The results will speak for themselves. Programs structured with real life cycle performance as a design driver will be capable of performing in-service better, and will be capable of dealing with unforeseen events (even usage in unanticipated missions). HST probably represents a benchmark for building in system sustainment (reliability, maintainability, provision for technology upgrade, built-in redundancy, etc.), while providing for human execution of functions (planned and unplanned) critical to servicing missions. With four successful service missions complete, including one initially not planned (the primary mirror repair), the benefits of design-for-sustainment, or life cycle support, throughout all phases of the program become quite evident. Without this design approach, it is unlikely that the unanticipated, unplanned mirror repair could even have been attempted, let alone been totally successful.
Risk Management LP 5: For complex programs, the number of stakeholders (government and contractor) demands that the program be structured to cope with high risk factors in many management and technical areas simultaneously. The HST program relied heavily on the contractors (especially Lockheed Missiles and Space Company (LMSC) and Perkin-Elmer (P-E)), each of which "owned" very significant and unique program risk areas. In the critical area of optical systems, NASA depended on LMSC as the overall integrator to manage risk in an area where P-E was clearly the technical expert. Accordingly, NASA relied on LMSC and LMSC relied on P-E with insufficient checks, oversight, and independence of the quality assurance function throughout. While most other risk areas were no doubt managed effectively, lapses here led directly to the HST's going to orbit with the primary mirror defect undetected, in spite of substantial evidence that could have been used to prevent this.


References
Works Cited
Friedman, G.R. and A.P. Sage. 2003. Systems Engineering Concepts: Illustration Through Case Studies. Accessed September 2011. Available at: http://www.afit.edu/cse/docs/Friedman-Sage%20Framework.pdf.
Friedman, G. and A. Sage. 2004. "Case Studies of Systems Engineering and Management in Systems Acquisition."
Systems Engineering. 7(1): 84-96.
Mattice, J. "Hubble Space Telescope Case Study." Ft. Belvoir, VA: Defense Acquisition University (DAU). Last modified May 2, 2005. Accessed November 27, 2012. Available at https:/ / acc. dau. mil/ adl/ en-US/ 37600/ file/ 9105/Hubble%20Space%20Telescope%20SE%20Case%20Study%20-%20JJ%20Mattice.pdf.

Primary References
None.

Additional References
None.

Applying a Model-Based Approach to Support Requirements Analysis on the Thirty-Meter Telescope

-
This article describes how a model-based systems engineering (MBSE) approach was used to support requirements analysis, system design, and early verification for critical subsystems of the Thirty Meter Telescope (TMT) [8]. The MBSE approach applied the Executable Systems Engineering Method (ESEM) [4] [5] and the Open-source Engineering Environment (OpenMBEE) [7] to specify, analyze, and verify requirements of TMT's Alignment and Phasing System (APS) and the Narrow Field Infrared Adaptive Optics System (NFIRAOS). The value proposition for applying this MBSE approach was to establish precise requirements and fine-grained traceability to system designs, and to verify key requirements using executable SysML [6] models beginning early in development.

Background
The TMT (Figure 1) is a next-generation ground-based extremely large telescope designed to answer key science questions regarding the nature and composition of the Universe. At its core is a wide-field, altitude-azimuth Ritchey-Chrétien design with a 492 segment, 30-meter diameter primary mirror (M1), a fully active secondary mirror, and an articulated tertiary mirror. Each segment's optical performance is sensitive to three rigid body degrees of freedom: piston, tip, and tilt. To obtain optimal image quality, the segmented M1 must perform like a single monolithic mirror, achieved through a multitude of controls working to co-align, co-focus, and co-phase its segments. The APS (Figure 2) is responsible for the overall pre-adaptive optics wavefront quality, using starlight to measure wavefront errors and align the TMT optics. Adaptive optics systems like the NFIRAOS (Figure 2) are designed to sense real-time atmospheric turbulence and correct the telescope's optical beam to remove its effect, enabling diffraction-limited imaging on the ground. In LGS MCAO and NGSAO modes, this is achieved through the use of wavefront sensors to detect laser and natural guide stars and deformable mirrors to direct the corrected wavefront to science instruments. These opto-mechanical designs and complex controls are constrained by several


requirements that must be satisfied.



TMT International Observatory (TIO), LLC is a non-profit organization of international members, responsible for managing the design, development, and operations of the TMT. The Jet Propulsion Laboratory (JPL) [9] participates in the design and development of several TMT subsystems and delivers an operational APS, where TIO is responsible for providing requirements to JPL. The APS team applies an MBSE approach to analyze requirements, derive an architecture design, and implement a system. TIO also works with JPL to analyze the operational behavior of NFIRAOS through modeling system-level operational scenarios (such as slew, acquisition, and dithering) with Monte-Carlo simulations. Modeling patterns are used to capture functional and physical system characteristics, behavior, requirements, parametric relationships, and use case scenarios. MBSE applications are motivated by optimization to better understand TMT's complex system behaviors.

Purpose
This article describes how MBSE is applied to the development of critical subsystems of a complex interdisciplinary system and the benefits of this approach. While document-based artifacts are necessary throughout the development lifecycle, complex systems engineering relies significantly on the use of models to address concerns from various domains (e.g. mechanics, optics, controls) (Figure 3). MBSE helps to manage implicit dependencies on information contained in these cross-domain documents, understand change impacts, analyze designs, and communicate evolving technical baselines. Models act as the single source of authority for systems engineering information that enables optimization through consistent and automated data exchange, enhanced analyses, and consolidating subsystem design information into separate artifacts needed by various stakeholders.





MBSE Challenges
Systems engineering (SE) is inherently challenging with concepts spanning several engineering disciplines. Expressing these concepts in a model demands the use of flexible methodology, language, and tools. The modeler must understand how to leverage this flexibility to rigorously specify systems with a broad range of complex design considerations. This poses the initial MBSE challenge-the learning curve. However, this challenge is native to any new undertaking and is overcome by hands-on experience, training, and ever-growing resources.
Another challenge is determining how to apply MBSE to meet the needs of a project. MBSE is not separate from SE-it is an approach to achieve the fundamental goals of SE more efficiently. MBSE should not be used to duplicate work, but instead replace efforts that can be better accomplished formally through modeling.
Engineers live in a landscape of variability among tools and information models in different domains (e.g. ALM, PLM, CAD), which are often implicitly connected [4]. To benefit from a model-based paradigm, the models require explicit connections. A key challenge is how to leverage data and associated models to enable cross-domain integration.
Finally, standardization is a challenge for MBSE. A model is only effective if stakeholders can understand it. SysML is an evolving modeling language that is becoming the dominant standard to communicate system architectures, independent of the modeling tools that use it. However, SysML is only one of many standards that must be applied to ensure the models can be consistently interpreted by tools and users.


MBSE Approach
The MBSE approach follows the conventional SE V-process enriched by a model-based paradigm (Figure 4). The scope of this MBSE application addresses models at L2 and L3, and requirements flow-down to L4, although the approach can be applied to support specification and architecture design at other levels as well. Associated modeling artifacts are created early and maintained throughout the development lifecycle.

MBSE articulates the system architecture in a formal, executable model that captures structure, behavior, requirements, and parametric relationships of system elements. Operational scenarios are defined in the model and analyzed through system-level simulation to verify requirements and validate overall system design over an expected range of conditions and parameters. The system model is also the authoritative source for several engineering documents. The MBSE approach is subsequently described by its methodology, tooling infrastructure, and analysis processes.

Methodology
The Executable Systems Engineering Method (ESEM) [1] is used to formalize requirements, specify system designs, characterize components, and specify/run analyses. ESEM augments the Object Oriented Systems Engineering Method (OOSEM) [2] by enabling executable models that enhance understanding, precision, and verification of requirements through applying analysis patterns specified with various SysML diagrams. ESEM also enables integration of supplier/customer models.
Figure 5 shows the major activities common to SE processes using OOSEM. The red circles indicate where ESEM injects formal modeling methods.




ESEM is utilized to model different levels of abstraction that are analyzed using several modeling patterns as detailed in [4]. The system-of-interest is modeled as a black box that interacts with external subsystems, such as controls. Interactions are modeled using ports to identify operations and flows at the system-of-interest interface.
The conceptual model specifies technology-independent system components and captures their behavior. This part of the model is used to analyze characteristics such as duration of operational scenarios. Component behavior is captured using state machines and activity diagrams, and constraint parameters are captured in a table. Communication across internal and external system components is accomplished through the sending and receiving of signals through ports. This model supports production of interface control documents by querying information sent from one component to another over ports.
The conceptual model serves as a basis to specify the realization model of the physical components. The realization model imposes technology-dependent constraints on the design solutions. Both the conceptual (i.e. logical) and realization (i.e. physical) models represent the "as-specified" system.

Tooling
The MBSE approach uses standard SysML language and modeling tools to minimize custom software. The OpenMBEE community promotes an open tooling environment that provides a platform for modeling. It utilizes the Model Management System (MMS) that can be accessed from rich SysML desktop clients like MagicDraw, lightweight web-based clients like View Editor, computational programs like Mathematica, and other tools that utilize RESTful web services. The MMS also provides the basic infrastructure for search, relation management, versioning, workflow, access control, content flexibility, web applications support, web-based API access, and multi-tool/repository integration across engineering and management disciplines.
Figure 6 shows the integration of model artifacts produced by MMS, View Editor, and MagicDraw. System models are constructed, queried, and rendered following the view and viewpoint paradigm [3] from MMS.





Analysis
One key SE process is to analyze the impact of changing requirements on the system design. Figure 7 illustrates how the MBSE approach is used to support requirements impact analysis through the following steps:
 Step 1: A changed requirement triggers impact analysis.
 Step 2: MMS integrates DOORS (which manages text requirements) and the SysML model, enabling a DOORS requirement change to propagate to the SysML model.
 Step 3: A property-based requirement is formalized in SysML, enabling requirements specification that can be evaluated by engineering analysis.
 Steps 4-6: The conceptual and/or realization design is automatically verified against the changed requirement, resulting in pass or fail.




In this article, a simplified APS model is shown to illustrate the model-based approach for analyzing changed requirements. The full analysis is available in [4] and [5].
A model-based approach was also applied to APS for error analysis, which was performed to describe the accuracy of expected system performance against requirements. It involved multiple artifacts to analyze a requirement such as "APS shall measure the position of the telescope pupil to an accuracy of 0.03% of the diameter of the pupil." Defining requirements and parameters in the model indicated the required accuracy and current best estimates of the system design. Defining various roll-up patterns allowed for error decomposition calculations. The benefit is realized in automated requirements verification when applying a parametric solver to formulate results for specified equations in the model. This model-based approach formally integrates accuracy requirements with the system design.
The system model for NFIRAOS LGS MCAO and NGSAO modes was developed to capture sequence behaviors and operational scenarios to run Monte-Carlo simulations for verifying acquisition time, observing efficiency, and operational behavior requirements. The model is particularly useful for investigating the effect of parallelization, identifying interface issues, and re-ordering sequence acquisition tasks.
ESEM enables system analysis by conducting quantitative assessments to select and/or update the most efficient system architecture and generate derived engineering data. System analysis provides rigor for technical decision-making. It includes modeling and simulation, cost, technical risks, and effectiveness analyses, and is used to perform trade studies. In particular, it supports requirements verification, which assesses whether a system design meets its objectives and satisfies the constraints levied by system requirements.


Observed Benefits
The MBSE approach applied to APS and NFIRAOS was motivated by optimization to coordinate the efforts of complex system development. In these applications, implicit dependencies are made explicit in a formal model through the use of ESEM, OpenMBEE, and SysML modeling constructs. Requirements are formalized and tracked directly to the evolving system design. This tight association of requirements within a common environment promotes cross-domain integration and efficient communication among stakeholders. The model is used to automate requirements verification and to generate systems engineering products. The benefit over a traditional document-based approach is that currently disconnected artifacts become related in the model, enabling the production of consistent model-based documentation. Requirements verification is an important analysis conducted in the context of MBSE. To perform this analysis, the requirements, executable behavior, and models predicting the system's performance must be integrated. The ability to integrate these elements using ESEM and the OpenMBEE tooling infrastructure is a significant value proposition for the MBSE approach described in this article. In the formally integrated and executable SysML model, simulations are performed to analyze the impact of changed requirements and verify that requirements are met within specified constraints for various operational scenarios. MBSE enhances information exchange through created visualizations that communicate system behavior. For example, duration analyses were performed to study acquisition time for observing. The use of Monte-Carlo simulations proved how the model-based approach optimized the analysis process. Higher quality analysis results were obtained through the execution of operational scenario runs in an articulated system model, and the model continues to serve as a communication tool across various domains.

Acknowledgements
This research was carried out at the Jet Propulsion Laboratory (JPL), California Institute of Technology, under a contract with the National Aeronautics and Space Administration (NASA), and at NoMagic. The TMT Project gratefully acknowledges the support of the TMT collaborating institutions. They are the California Institute of Technology, the University of California, the National Astronomical Observatory of Japan, the National Astronomical Observatories of China and their consortium partners, the Department of Science and Technology of India and their supported institutes, and the National Research Council of Canada. This work was supported as well by the Gordon and Betty Moore Foundation, the Canada Foundation for Innovation, the Ontario Ministry of Research and Innovation, the Natural Sciences and Engineering Research Council of Canada, the British Columbia Knowledge Development Fund, the Association of Canadian Universities for Research in Astronomy (ACURA), the Association of Universities for Research in Astronomy (AURA), the U.S. National Science Foundation, the National Institutes of Natural Sciences of Japan, and the Department of Atomic Energy of India.

References
Works Cited
[1] Zwemer, D., "Connecting SysML with PLM/ALM, CAD, Simulation, Requirements, and Project Management Tools", Intercax LLC, May 2011. [2] Friedenthal S, Moore A., and Steiner R., "A Practical Guide to SysML 3rd Ed.", Morgan Kaufmann OMG Press, 2014 [3] ISO/IEC, ISO/IEC 42010:2011, Systems and software engineering - Architecture description

Primary References
[4] Karban, R., Jankevicius, N., Elaasar, M. "ESEM: Automated Systems Analysis using Executable SysML Modeling Patterns", INCOSE International Symposium (IS), Edinburgh, Scotland, 2016 [5] Karban, R. "Using Executable SysML Models to Generate System Engineering Products", NoMagic World Symposium, 2016 [6] OMG SysML, "Systems Modeling Language (SysML) Version 1.4", OMG, 2014 [7] Open Source Engineering


Environment: https://open-mbee.github.io/[8] TMT, "Thirty Meter Telescope." http://www.tmt.org [9] JPL, "Jet Propulsion Laboratory." https://www.jpl.nasa.gov/[10] Karban R., Dekens F., Herzig S., Elaasar M, Jankevicius N., "Creating systems engineering products with executable models in a model-based engineering environment", SPIE, Edinburgh, Scotland, 2016

Additional References
https:/ / github. com/ Open-MBEE/ TMT-SysML-Model https:/ / github. com/ Open-MBEE/ mdk/ tree/ support/ 2. 5/ manual http:/ / www. omgwiki. org/ MBSE/ doku. php?id=mbse:telescope https:/ / groups. google. com/ forum/ #!forum/openmbee

Miniature Seeker Technology Integration Spacecraft


 Lead Authors:
 Heidi Davidz, Art Pyster, and Deva Henry
 Contributing Author:
 Dave Olwell
-
The Miniature Seeker Technology Integration (MSTI) spacecraft was the first of its kind: a rapid development spacecraft, designed and launched in one year. As an aerospace example for a satellite application, the case study, "M.S.T.I.: Optimizing the Whole System" (Grenville, Kleiner, and Newcomb 2004), describes the project's systems engineering approach. Driven by an aggressive schedule, MSTI optimized over the whole project, rather than allowing sub-optimizations at the component level. As a partnership with Phillips Laboratories, the Jet Propulsion Laboratory (JPL), and Spectrum Astro, MSTI went into orbit on November 21, 1992. The MSTI-1 succeeded in meeting all primary mission objectives, surpassing the 6-day data collection mission requirement.

Domain Background
There are many case study examples for aerospace systems. This case is of particular interest because it highlights mechanisms which enabled successful performance following an aggressive schedule. Since this rapid development spacecraft was designed and launched in one year, new ways of structuring the project were necessary. Within this domain, the MSTI project used an innovative approach. Practices from this project led to the Mission Design Center and the System Test Bed at JPL.

Case Study Background
This case study was developed in support of the National Aeronautics and Space Administration (NASA) Program and Project Management Initiative by authors at the Virginia Polytechnic Institute and State University and Scientific Management, Inc. The case study was developed in the interest of continuously improving program and project management at NASA (NASA 2010). Research for this case included comprehensive literature review and detailed interviews. The project was selected based on the potential for providing lessons learned.


Case Study Description
The MSTI case study illustrates many principles described in the Systems Engineering Body of Knowledge (SEBoK). The MSTI team had to make adjustments to the traditional approach to spacecraft development in order to stay within budget and to meet the aggressive timeline of bringing a spacecraft from conception to launch within one year. The team realized that they were "building Porsches not Formula 1s"(Grenville, Kleiner, Newcomb 2004). Meeting the schedule was a crucial factor that affected all decisions. The SEBoK knowledge area on life cycle models describes life cycle design in more detail.
The team took advantage of existing hardware architectures for their architectural design to expedite the project. In addition, at each design phase, the whole system was optimized instead of optimizing subsystems, and the level of optimization at the subsystem level was reduced. A hardware-in-the-loop test bed was used throughout the project, which expedited system integration.
The schedule was maintained only at a high level in the project management office, and the costs were managed using a cost reporting technique for "cost to completion." Rather than report on past spending, the Responsible Engineering Authorities (REAs) were expected to continually evaluate their ability to complete their tasks within projected costs. Faster procurement was achieved using the Hardware Acquisition Team, where a technical team member was matched with a procurement representative for each design function. This pair wrote the specifications together and initiated the purchase requisitions.
From the organizational perspective, increased responsibility and accountability were given to each team member. Individuals took ownership of their work and the decision process was streamlined. The team made more "good decisions," rather than optimal decisions. The team was collocated, and daily meetings were used to assign daily tasks and keep the team focused on the launch. The standard Problem Failure Report (PFR) was streamlined and electronic reports provided snapshots of the resolved and outstanding PFRs. The report helped REAs stay on top of potential problem areas. REAs were responsible for looking forward on the project horizon and notifying the team of any potential problem areas.
The first satellite in the MSTI series, MSTI-1, was launched on November 21, 1992. The spacecraft weighed 150 kg and was built for $19M in less than 12 months. Over 200,000 photographs were returned from the spacecraft. From a project management standpoint, all mission objectives were completed.
In addition, MSTI had a lasting legacy. Faster procurement developed into an approach JPL now calls "Fast Track Procurement." Hardware acquisition teams are used often in JPL projects. The hardware-in-the-loop test bed was the precursor to the Flight System Test Bed at JPL. Team members moved up quickly in JPL due to the increased responsibility and authority they were given on the MSTI project.

Summary
MSTI demonstrated that an aggressive schedule can be used to design low earth-orbiting spacecraft to optimize the full system. The MSTI experience changed JPL's culture and their approach to spacecraft development and mission management. The insights from this case study example can help both students and practitioners better understand principles described in the SEBoK.

References
Works Cited
Grenville, D., B.M. Kleiner, and J.F. Newcomb. 2004. M.S.T.I., Optimizing the Whole System. Blacksburg, VA: Virginia Polytechnic Institute, case study developed in support of the NASA Program and Project Management Initiative.	1-27.	Accessed	June	3,	2011.	Available	at	http:/	/	www.	nasa.	gov/	pdf/ 293212main_58529main_msti_casestudy_042604.pdf.


NASA. 2010. A Catalog of NASA-Related Case Studies, version 1.6. Compiled by the Office of the Chief Knowledge Officer, Goddard Space Flight Center, MD, USA: National Aeronautics and Space Administration (NASA).  Accessed  June  3,  2011.  Available  at  http:/ / www. nasa. gov/ centers/ goddard/ pdf/ 450420main_NASA_Case_Study_Catalog.pdf.

Primary References
None.

Additional References
None.

Apollo 1 Disaster

 Lead Authors:
 W. Clifton Baldwin and Anthony Long
-
On January 27, 1967, the crew of Apollo 204 was training for the first crewed Apollo flight, an Earth orbiting mission scheduled for launch on 21 February. Flight commander Gus Grissom, astronaut Edward White and astronaut Roger Chaffee died when fire swept the Apollo Command Module during this preflight test. After the accident, NASA reclassified Apollo 204 as Apollo 1. This case study examines some of the human factors shortfalls that lead to the Apollo 1 disaster.

Background
On January 27, 1967, the crew of Apollo 204 was training for the first crewed Apollo flight, an Earth orbiting mission scheduled for launch on 21 February. They were involved in a "plugs-out" test on the launch pad just as in the actual launch, except the rocket was not fueled. This test was a simulation, going through an entire countdown sequence. Flight commander Gus Grissom, astronaut Edward White and astronaut Roger Chaffee died when fire swept the Apollo Command Module during this preflight test. After the accident, NASA reclassified Apollo 204 as Apollo 1.
During the test and subsequent accident, emergency teams were not in attendance (Benson and Faherty 1978). The fire crews were only on standby since the vehicle was not fueled (Freiman and Schlager 1995). It was believed that the test did not rate a hazardous classification (Benson and Faherty 1978) (NASA History Office 1967), and the emergency equipment located in the launch tower test room was not designed for the type of fire that resulted (NASA History Office 1967). Within the capsule, there were no design features for fire protection as no one had considered the possibility of a fire from anything other than the rocket engines (NASA History Office 1967). There was not even a fire extinguisher in the cabin (Freiman and Schlager 1995) (Kranz 2000). Astronaut Frank Borman later stated, "None of us gave any serious consideration to a fire in the spacecraft" (Benson and Faherty 1978).
NASA leveraged technical knowledge from the two earlier Mercury and Gemini space programs and utilized their designs as a baseline for the Apollo program (Rosholt 1966). Naturally, some problems were expected from such a huge undertaking. Due in part to a multitude of integration issues, the crew could not escape the fire. After the accident, however, NASA officials admitted that they had concentrated their efforts on "in flight" situations and had not even considered problems on the ground (Benson and Faherty 1978) (Kranz 2000).


Challenges
During the late 1960s, NASA's systems integration group appeared to be largely paperwork focused, although NASA considered the Apollo 204 test as a type of systems integration test (Baldwin and Reilly 2005). Regardless of the systems integration efforts, there were obvious gaps integrating the astronauts leading to the unfortunate consequence of the deaths of the men of Apollo 1.

Integration of the Hatch
Designing and integrating safety into the space capsule was known to be an important factor from the start of the space program. The hatch was the primary means for the astronauts to enter and exit the capsule, and therefore it was a vital component for integrating the astronauts.
Both the Mercury and the Apollo capsules were equipped with a means for escaping from a launch-vehicle failure (Purser, Faget and Smith 1965) (Swenson Jr., Grimwood and Alexander 1998). This escape system consisted of a booster rocket on the capsule that could fly the capsule away from a malfunctioning rocket. The Gemini capsule had ejection seats instead. Due to the dangers during an emergency ejection, the Apollo design went back to an escape tower booster (Purser, Faget and Smith 1965). Without the ejection seats, the quick-opening hatches used by the Gemini program were not required. Initially, the Apollo capsule contractors North American Aviation had recommended a hatch that opens outward with explosive bolts for emergencies. NASA designers disagreed due to the accidental opening of an earlier Mercury capsule with a similar hatch design (Brooks, Grimwood and Swenson 1979). "NASA and North American designers hadn't been as worried about escape contingencies as they were about the possibility of a hatch popping open into the vacuum of space or another inadvertent opening during a water landing" (Kranz 2000).
In order to keep the astronauts safe, "An Apollo mission designer would prefer that the crew never exit the space capsule" (Mendell 1998). Therefore, the designers integrated the hatch to open inward, which allowed the internal pressure to assist in keeping the hatch secure (Murray and Cox 1989). The result of the integration process was a three-part hatch, an inner pressure hatch that opened inward when the capsule was on the ground, an ablative hatch that opened outward when in space, and a boost protective cover to protect the capsule during launch from the escape tower boosters (Freiman and Schlager 1995) (Kranz 2000) (NASA History Office 1967). Furthermore, the designers chose not to have an explosive hatch. As an aside to the Apollo 1 accident, even if the capsule had an explosive hatch, it would not have been armed during the test due to the danger to the support personnel (Murray and Cox 1989).
It took at least 90 seconds to open the hatch under ideal conditions (Freiman and Schlager 1995) (Senate Committee on Aeronautical and Space Sciences 1968). In practice, the crew had never accomplished the egress in the minimum time. Additionally, escaping was a very complicated procedure to perform under emergency circumstances. For example, it required one astronaut to lower another one's headrest in order to actuate a ratchet-type device that would release the first of a series of latches (NASA History Office 1967). When the accident occurred, it took five minutes and 25 seconds to open the hatch (NASA History Office 1967). The Apollo Review Board criticized this problem as well as obviously recommended it to be changed (Benson and Faherty 1978).
The accident of Apollo 1 caused NASA to reconsider its decisions and processes. Although well integrated technically, NASA was lacking in integrating the astronauts with the hatch. To remedy this problem, the hatch was redesigned to be single-hinged that could be unlatched in three seconds and would swing outward with minimal force (Benson and Faherty 1978).


Integration of the Environmental Control System
Perhaps the most complex of all the human factors elements concerned the Environmental Control System (ECS). This system was designed to control the quantity and quality of air delivered to the astronauts, maintain cabin pressure, and heat and cool the astronauts, equipment, and cabin. Extremes of space flight had to be anticipated and this system needed to meet the needs of that harsh environment. Redundancy was built in to provide suitable backup systems and ensure reliability and availability (NASA History Office 1967).
NASA engineers had performed trade studies that concluded a pure oxygen atmosphere in the cabin was preferred. Again, this decision failed to fully consider the astronauts. In 1964, Dr. Emmanuel Roth of the Lovelace Foundation for Medical Education and Research prepared for NASA a paper warning about the dangers of pure oxygen (Benson and Faherty 1978). Natural fabrics, most synthetics, and even allegedly flameproof materials will burn violently in a pure oxygen environment. In that same year, Dr. Frank J. Hendel, a staff scientist with Apollo Space Sciences and Systems at North American Aviation, wrote an article warning against pure oxygen especially on the launch pad (Benson and Faherty 1978). Joe Shea, head of Apollo Spacecraft Program Office at the time, wrote in a memo, "The problem is sticky- we think we have enough margin to keep fire from starting - if one ever does, we do have problems. Suitable extinguishing agents are not yet developed" (Murray and Cox 1989).
Due to the ongoing redesign and test environment in which the ECS was operated, there was a need to change out components quickly and easily to save time on the schedule (NASA History Office 1967). This need resulted in poor wiring placement as well as insulation (Stavnes and Hammoud 1994). Coolant coils were placed in locations that permitted them to be used as a handle to move about in the cabin. This unintended usage led to a leakage of coolant in the cabin, whereby the vapors were flammable and the coolant itself in liquid form was corrosive to the insulation of the nearly 12 miles of electrical wiring in the command module (Freiman and Schlager 1995) (NASA History Office 1967). The cooling system was extensive throughout the capsule, and coolant leakage at solder joints had already been a chronic problem (NASA History Office 1967).
One ECS cable was wedged against the bottom of a door used by the astronauts. When the door was shut, it would scrape the cable. The repeated abrasion eventually exposed two tiny sections of wire on the cable (Murray and Cox 1989). When the insulation became worn away, the wiring system would fail, and sparks could arc (Stavnes and Hammoud 1994). To make matters worse, flammable raschel netting near the scuffed cable was located closer to the cable than it should have been (Murray and Cox 1989).
The astronauts' spacesuits were also not incorporated well into the ECS. A suit-loop provided air quality control, temperature control, pressure control, humidity control, and decontamination to the astronauts and the cabin. There were three astronauts suited up and plugged into the loop with a fourth suit position. This so-called fourth suit position provided forced ventilation and exchange of the cabin air with the suit circuit (Bellcomm, Inc. 1964). This link of the spacesuits to the cabin could not be closed off in an emergency. The result would allow internal toxic gases from a fire to penetrate the astronauts' suits.

Integration of the Egress System
Until the accident, no one seriously considered the possibility of a safety issue within the capsule. The egress system, which would allow astronauts to get away from the launch pad, was not thoroughly explored and several integration problems were missed (NASA History Office 1967). "We all assumed that when a calamity struck, it would be in flight. Our nightmare was an explosion during launch, or a flying coffin, a faulty craft stuck in endless orbit" (Kranz 2000). There were no formal procedures for an in-capsule emergency on the ground for either the crew or the spacecraft pad work team (NASA History Office 1967).
The designers' experience necessitated "The use of an escape system should a malfunction occur during the powered ascent portion of the trajectory" (Purser, Faget and Smith 1965). Unfortunately, the designers only considered escape situations where the astronauts had to remain in the capsule. Hazard analysis was done to "Examine all the hazards that might require escape from the launch vehicle during powered flight" (Purser, Faget and Smith 1965).


Nonetheless, the hazards were thought to come through three operational phases, "1) liftoff and shortly thereafter, 2) transonic through maximum dynamic pressure regimes, and 3) shutdown and staging" (Purser, Faget and Smith 1965). There is no mention of a hazard within the capsule itself.
Additional evidence for unsatisfactory egress can be found in the launch pad environment. Even if they could get the hatch open, there were no contingency preparations to permit escape or rescue of the crew from an internal capsule fire. The umbilical tower access arm contained features such as steps, sliding doors and sharp turns in the egress paths that hindered emergency operations (NASA History Office 1967). Albeit too late for Apollo 1, the Apollo 204 Review Board sharply criticized the fact that the astronauts had no quick means of escaping the capsule (Benson and Faherty 1978).

Integration Lessons
Systems Thinking Approach
A systems approach to integration with respect to the capsule and rocket may have avoided overlooking the users' needs inside the capsule. For example, the ECS was designed without fully considering the astronauts onboard. Decisions to limit space in order to restrict subsystems from growing in weight were made by rule of thumb. A "whole system" integration approach could have arrived at a design for the ECS while considering the astronauts' needs. Early integration of the astronauts could have saved time, especially since those changes had to be made eventually, and would have saved lives. For more information, see Part 2, Overview of the Systems Approach.

Use Cases
NASA designers stated they considered three phases of operations which were known to be hazardous. A problem with their analysis is that they failed to consider every phase, such as prelaunch or rather preflight. The designers should have evaluated every feasible scenario, or use case, of the system, even if unlikely. Thorough use case analysis evaluates all potential "normal" and "rainy day" scenarios. Use cases could have been developed for the preflight phase, including any potential failure cases on the ground. The designers could have used these scenarios to contemplate hatch issues, coolant coil issues, and especially the egress process.

Failure Analysis
The plugs-out test of Apollo 1 was ranked as a low risk without much analysis, and NASA officials stated that they were not concerned with problems prior to launch. Although a failure analysis was conducted for the flight of Apollo 204, no failure analysis, such as a Failure Modes and Effects Analysis (FMEA), was conducted for an on-the-ground or prelaunch situation. Once identified, proper mitigation actions could have been implemented. For more information, see Part 3, Risk Management and Part 6, Safety Engineering.

References
Works Cited
Baldwin, W. C., and C. K. Reilly, interview by Rich Morton. 2005. Interview with former NASA Technician during January 1967 (Dec. 13).
Bellcomm, Inc. 1964. Review of Environmental Control Systems for Apollo. B-1.
Benson, C. D., and W. B. Faherty. 1978. Moonport: A History of Apollo Launch Facilities and Operations . Vols. NASA Special Publication-4204 in the NASA History Series. Washington D.C., USA: National Aeronautics and Space Administration. Available at: http:/ / www. hq. nasa. gov/ office/ pao/ History/ SP-4204/ contents. html.
Accessed Nov. 22, 2005.


Brooks, C., J. Grimwood, and L. Swenson. 1979. Chariots for Apollo: A History of Manned Lunar Spacecraft. Vols. NASA Special Publication-4205 in the NASA History Series. Washington D.C., USA: National Aeronautics and Space Administration.
Freiman, F. L., and N. Schlager. 1995. "Apollo 1 catches fire," Vol. 1, in Failed Technology: True Stories of Technological Disasters, by Fran Locher Freiman and Neil Schlager. New York, NY, USA: UXL.
House Subcommittee on NASA Oversight of the Committee on Science and Astronautics. 1967. Investigation into Apollo 204 Accident: Hearings. Washington D.C., USA: 90th Congress, 1st Session, pp. 1-404.
Kranz, G. 2000. Failure Is Not an Option. New York, NY, USA: Simon and Schuster.
Mendell, W. W. 1998. "Role of lunar development in human exploration of the solar system," Journal of Aerospace Engineering, pp. 106 - 110.
Murray, C., and C. B. Cox. 1989. Apollo: The Race to the Moon. New York, NY, USA: Simon & Schuster.
NASA History Office. 1967. Findings, Determinations and Recommendations. Apollo 204 Review Board, National Aeronautics and Space Administration. Washington D.C., USA: NASA Historical Reference Collection. Available at: http://www.hq.nasa.gov/office/pao/History/Apollo204/find.html.Accessed Feb. 18, 2020.
NASA History Office. 1967. History of The Accident. Apollo 204 Review Board, National Aeronautics and Space Administration. Washington, D.C., USA: NASA Historical Reference Collection. Available at: http:/ / www. hq. nasa.gov/office/pao/History/Apollo204/history.html.Accessed Feb. 18, 2020.

Primary References
None.

Additional References
None.




Transportation System Examples

Denver Airport Baggage Handling System

 Lead Authors:
 Art Pyster and Heidi Davidz
-
This example was developed as a SE example for the SEBoK. It describes systems engineering (SE) issues related to the development of the automated baggage handling system for the Denver International Airport (DIA) from 1990 to 1995. The computer-controlled, electrical-mechanical system was part of a larger airport system.

Description
In February 1995, DIA was opened 16 months later than originally anticipated with a delay cost of $500 million (Calleam Consulting Ltd. 2008). A key schedule and cost problem-the integrated automated baggage handling system-was a unique feature of the airport. The baggage system was designed to distribute all baggage automatically between check-in and pick-up on arrival. The delivery mechanism consisted of 17 miles of track on which 4,000 individual, radio-controlled carts would circulate. The $238 million system consisted of over 100 computers networked together, 5,000 electric eyes, 400 radio receivers, and 56 bar-code scanners. The purpose of the system was to ensure the safe and timely arrival of every piece of baggage. Significant management, mechanical, and software problems plagued the automated baggage handling system. In August 2005, the automated system was abandoned and replaced with a manual one.
The automated baggage system was far more complex than previous systems. As planned, it would have been ten times larger than any other automated system, developed on an ambitious schedule, utilized novel technology, and required shorter-than-average baggage delivery times. As such, the system involved a very high level of SE risk. A fixed scope, schedule, and budget arrangement precluded extensive simulation or physical testing of the full design. System design began late, as it did not begin until well after construction of the airport was underway. The change management system allowed acceptance of change requests that required significant redesigns to portions of work already completed. The design did not include a meaningful backup system; for a system that required very high mechanical and computer reliability, this increased failure risks. The system had an insufficient number of tugs and carts to cope with the volume of baggage expected and this, along with severely limited timing requirements, caused baggage carts to jam in the tracks and for them to misalign with the conveyor belts feeding the bags. This resulted in mutilated and lost bags (Neufville 1994; Gibbs 1994).
The baggage system problems could be associated with the non-use or misuse of a number of systems engineering (SE) concepts and practices: system architecture complexity, project scheduling, risk management, change management, system analysis and design, system reliability, systems integration, system verification and validation/testing, and insufficient management oversight.


Summary
The initial planning decisions, such as the decision to implement one airport-wide integrated system, the contractual commitments to scope, schedule, and cost, as well as the lack of adequate project management (PM) procedures and processes, led to a failed system. Attention to SE principles and practices might have avoided the system's failure.

References
Works Cited
Calleam Consulting Ltd. 2008. Case Study - Denver International Airport Baggage Handling System - An Illustration of Ineffectual Decision Making. Accessed on September 11, 2011. Available at http:/ / calleam. com/ WTPF/?page_id=2086.
Neufville, R. de. 1994. "The Baggage System at Denver: Prospects and Lessons." Journal of Air Transport Management. 1(4): 229-236.
Gibbs, W.W. 1994. "Software's Chronic Crisis." Scientific American. September 1994: p. 72-81.

Primary References
None.

Additional References
DOT. 1994. New Denver Airport: Impact of the Delayed Baggage System. US Department of Transportation (DOT), Research Innovation Technology Administration. GAO/RCED-95-35BR. Available at http:/ / ntl. bts. gov/ DOCS/ rc9535br.html
Donaldson, A.J.M. 2002. A Case Narrative of the Project Problems with the Denver Airport Baggage Handling Systems (DABHS). Software Forensics Center Technical Report TR 2002-01. Middlesex University, School of Computer Sciences. Available at http://www.eis.mdx.ac.uk/research/SFC/Reports/TR2002-01.pdf


Federal Aviation Administration (FAA) Advanced Automation System (AAS)

 Lead Authors:
 Tom Hilburn, Alice Squires, and Heidi Davidz
 Contributing Author:
 Richard Turner
-
This example was created as a SE example directly for the SEBoK. It describes the Advanced Automation System (AAS), part of the Federal Aviation Administration (FAA) Advanced Automation Program. It describes some of the problems which can occur in a complex, software intensive system program if SE is not applied.

Description
In 1981, the Federal Aviation Administration (FAA) announced the Advanced Automation Program, which was established to modernize air traffic control (ATC) computer systems. A centerpiece of the project was the Advanced Automation System (AAS). AAS was the largest project in FAA's history to modernize the nation's ATC system. AAS would replace computer hardware and software as well as controller workstations at tower, terminal, and en-route facilities and allow the ATC system to accommodate forecasted large increases in traffic through the use of modern equipment and advanced software functions. (GAO 1992)
The FAA originally proposed AAS in 1982 as a project that would cost $2.5 billion and be completed in 1996. However, substantial cost increases and schedule delays beset the AAS project over its history, caused by numerous problems in AAS development:
 The project began with a design competition between Hughes and IBM. The competition involved numerous extensions and took four years to complete. Analysis by the FAA and others pointed to inadequate consideration of user expectations and improper assessment of the technology risks. (Barlas 1996)
 The FAA pushed for 99.99999% reliability, which was considered by some "more stringent than on any system
that has ever been implemented" and extremely costly. (DOT 1998)
 The program created unworkable software testing schedules - "Testing milestones were skipped or shortcutted and new software was developed assuming that the previously developed software had been tested and performed." (Barlas 1996)
 There were an extraordinary number of requirements changes. For example, for the Initial Sector Suite System (ISSS), a key component of AAS, there were over 500 requirements changes in 1990. Because of these changes, 150,000 lines of software code had to be rewritten at a cost of $242 million. (Boppana et al. 2006)
 IBM's cost estimation and development process tracking used inappropriate data, were performed inconsistently,
and were routinely ignored by project managers. The FAA conservatively expected to pay about $500 per line of computer code - five times the industry average. The FAA ended up paying $700 to $900 per line for the AAS software. (Gibbs 1994)
 In 1988, FAA estimated that the AAS program - both contract and supporting efforts - would cost $4.8 billion. By late 1993, the FAA estimated that it would cost $5.9 billion. Before the program was dramatically restructured in 1994, estimates had risen to as much as $7 billion, with key segments expected to be behind schedule by as much 8 years. In 1994, with significant cost and schedule overruns, as well as concerns about adequate quality, usability, and reliability, the AAS program ceased to exist as originally conceived, leaving its various elements terminated, restructured, or as parts of smaller programs. (DOT 1998)


The AAS problems could be associated with the non-use or misuse of a number of systems engineering (SE) concepts and practices: system requirements, system architecture complexity, project planning, risk management, change management, system analysis and design, system reliability, system integration, system verification and system validation/testing, and management oversight.

Summary
The AAS program was the centerpiece of an ambitious effort begun in the 1980s to replace the computer hardware and software throughout the ATC system - including controller workstations, and en-route, terminal, and tower air traffic control facilities. AAS was intended to provide new automated capabilities to accommodate increases in air traffic. After sustaining serious cost and schedule problems, the FAA dramatically restructured the program into more manageable pieces. This action included terminating major segments of the contract. (DOT 1998.)

References
Works Cited
Barlas, S. "Anatomy of a Runaway: What Grounded the AAS." IEEE Software. vol. 13, no. 1, Jan., pp. 104-106, 1996.
Boppana, K., S. Chow, O.L. de Weck, C. LaFon, S.D. Lekkakos, J. Lyneis, M. Rinaldi, Z. Wang, P. Wheeler, M. Zborovskiy. "Can models capture the complexity of the systems engineering process?" In Proceedings of the International Conference on Complex Systems (ICC2006), 11-15 June 2006, Istanbul, Turkey.
DOT. Audit Report: Advance Automation System, Federal Aviation Administration. Washington, DC, USA: Office of Inspector General, U.S. Department of Transportation, 2005.
GAO. Advanced Automation System Still Vulnerable to Cost and Schedule Problems. Washington, DC, USA: United States General Accounting Office (GAO). GAO/RCED-92-264. 1992.
Gibbs, W.W. "Software's Chronic Crisis." Scientific American. September 1994.

Primary References
None.

Additional References
Britcher, R. The Limits of Software: People, Projects, and Perspectives. Boston: Addison Wesley, 1999.


Federal Aviation Administration (FAA) Next Generation Air Transportation System

 Lead Author:
 Brian White
-
This article describes a massive undertaking to modernize the air traffic management enterprise. The topic may be of particular interest to those involved in air transportation whether in connection with their careers or as pilots or passengers on airplanes. For addition information, refer to the closely related topics of Enabling Businesses and Enterprises and Enterprise Systems Engineering.

Background
This case study presents the systems engineering and enterprise systems engineering (ese) efforts in the Next Generation (NextGen) Air Transportation Systems by the Federal Aviation Administration (FAA 2008). NextGen is an unprecedented effort by multiple U.S. federal organizations to transform the U.S. air transportation infrastructure from a fragmented ground-based navigation system to a net-centric satellite-based navigation system. This project is unique to the FAA because of its large scale, the huge number of stakeholder(s) involved, the properties of the system of interest, and the revolutionary changes required in the U.S. Air Transportation Network (U.S. ATN) enterprise.
A sociotechnical system like the U.S. ATN is a "large-scale [system] in which humans and technical constituents are interacting, adapting, learning, and coevolving. In [such] systems technical constraints and social and behavioral complexity are of essential essence". (Darabi and Mansouri 2014). Therefore, in order to understand changes in the
U.S. ATN it was seen as necessary to view it through a lens of evolutionary adaptation rather than rigid systems design. The U.S. ATN serves both military and commercial aircraft with its 19,782 airports, including 547 are commercial airports. Nineteen major airlines, with more than a billion dollars in annual total revenue, along with other 57 national and regional airlines, transport 793 million passengers and realize 53 billion revenue ton-miles.
The Air Traffic Organization (ATO) is responsible for ensuring aircraft navigation in the U.S. National Air Space (NAS) system using a five-layer architecture. Each aircraft goes through different layers and possibly various zones of this architecture as it takes off from an airport until its lands at another airport (Donohue and Zellweger 2001). However, this architecture is fragmented and many issues are raised: an airplane's path through its route is not optimized, and the path may change its direction from one zone to another, the destination airport's capacity is limited by the current regulations of minimum aircraft separation distance due to navigation limitations, the real-time weather information is not integrated into the system, and communications are mainly voice-based, etc.
In NextGen major changes to the U.S. ATN design are planned. As already stated, the navigation system will be changed from ground-based communication to satellite-based navigation. The current fragmented architecture will be integrated into a seamless net-centric information system in which the digital communication will replace the current voice communications. Moreover, weather information will be assimilated into decision making and planning across the system.


Purpose
The FAA's purpose is "to provide the safest, most efficient aerospace system in the world". Toward this end the NextGen project is aimed at enhancing the U.S.'s leadership position in air transportation.
During the last three decades the demand for air transportation shows exponential growth. In just one decade from 1995 to 2005 this demand showed a 44% percent increase. Therefore, the change in infrastructure was inevitable. Moreover, 9/11 attacks on the U.S. ATN emphasized this need for change. The combination of a requirement for a safer and more secure network and increasing demand was the motivation for President Bush to enact the Vision 100-Century of Aviation Reauthorization Act on 2003. A major part of this Act was to revolutionize the U.S. ATN by means of the NextGen project. The first integration plan of the project was released in 2004, and the project is estimated to continue until 2025.
The demand behavior of the U.S. ATN shows diverse degrees of congestion among airports. Although there are multitudes of airports in the system, the top 35 most congested airports carried more than 60% of the total traffic consistently during the period of 2000 to 2008. Because the growth of the network demand is not proportional, the demand in congested airports will be even higher.
A study by the Joint Planning and Development Office (JPDO) shows that flight delays in the current network will cause $6.5 billion of economic loss until 2015, and $19.6 billion until 2025. By implementing NextGen the delays are estimated to be reduced by 38% until 2020. Moreover, aircraft CO2 emissions are a major part of environmental pollution in crowded cities; these will be reduced by 14 million metric tons by 2020. The current level of jet fuel usage is also a known problem because of increasing fuel prices. The NextGen project will improve fuel usage by
1.4 billion gallons cumulative through 2020.
NextGen is pursuing multiple goals to retain the U.S. leadership in aviation, to expand the U.S. ATN capacity, to continue to ensure safety, to increase environment protection, to help ensure national air defense, all generally helping to increase the nation's security (JPDO 2007a).
Eight general capabilities are defined in conducting this mission: (1) network-enabled information access, (2) performance-based operations and services, (3) weather assimilated into decision making, (4) layered adaptive security, (5) positioning, navigation, and timing (PNT) services, (6) aircraft trajectory-based operations (TBO), (7) equivalent visual operations (EVO), and (8) super-density arrival/departure operations.
To create the desired capabilities, general areas of transformations are defined as air traffic management operations, airport operations and infrastructure services, net-centric infrastructure services, shared situational awareness services, layered and adaptive security services, environmental management services, safety management services, and performance management services. The detailed changes in each area are discussed in Concept of Operations for NextGen (JPDO 2007a).

Challenges
An instructive part of this case study is observing evolution in understanding challenges from initial steps of the project through current efforts for delivering it. As an overall conclusion, the perspective on challenges shifted from technical problems and intra-organizational issues to more enterprise-wide issues.
The NextGen Implementation Plan 2008 discussed the following challenges (FAA 2008):
 performance analysis, to understand and assess operational capabilities
 policy, to balance responsibility between humans and automation, for environmental management processes, and for global harmonization strategies
 acquisition workforce staffing
 environmental planning, to resolve conflicts with local environmental constraints
 security


 transition from current ground-based navigation to automatic dependent surveillance - broadcast (ADS-B) technology.
A more recent report on Targeted NextGen Capabilities for 2025 (JPDO 2011) highlights the effect of the multi-stakeholder nature of the project on raising additional challenges. Achieving Interagency Collaboration is the first issue, which is important in implementing security, safety, policy making, and technological advancement.
Increasing capacity, reducing delay and protecting the environment are the main three promises of the NextGen project. However, reaching the defined high standards is not an easy task. A major part of this challenge is integrating new technologies into legacy systems, aircraft, airports, facilities, and organizations. Airlines and general aviation pilots resist the expense of additional avionics and communications equipment, even though it bolsters the common good of air travel.
Maintaining airports and airspace security requires coherent and harmonious work of multiple U.S. agencies. The core of this challenge is not just changing the technology but also the processes, organizational structures, and enterprises to meet the new requirements of security.
Moreover, the need for greater information sharing in this net-centric environment is a challenge. The current culture of limited information sharing in which inter-organizational and intra-organizational information is strictly divided creates tension in a seamless information sharing infrastructure. In addition to that, the responsibility of generating, sharing, and utilizing useful information should be addressed in advance to avoid costly mistakes.
Verification and validation of NextGen deliverables is a major issue. The traditional systems engineering methods of verification and validation are tailored for testing an isolated system, while by definition a project like NextGen requires new methodologies of verification and validation beyond the scope of one system. The knowledge and experience of advancement in systems engineering in this area can be of priceless value for future projects.
Balance between human decision-making and automation is required to ensure a correct policy for increasing traffic and safety concerns. Changes in both human resource and technological facilities are required to effectively address this challenge.
The support of local communities is essential to facilitate development of the U.S. ATN and its physical infrastructure.
Communication, navigation, and surveillance systems in NextGen are going through major changes in terms of capacity and technology. However, planning required backups for them in case of any emergency is an area of challenge in developing NextGen.
The rise of Unmanned Aircraft Systems (UASs) provides significant opportunities for both military and commercial applications. However, integrating them into the NAS and developing policing and strategies for safe and secure use is a concern for the revolutionized U.S. ATN.
And finally realizing the benefits of NextGen is dependent on the critical mass of early adopters, similar to any technological advancement. Therefore, the NextGen project authority requires well-defined policies for motivating stakeholders' participation.

Systems Engineering Practices
The FAA NextGen is not just a revolution of the U.S. air transportation infrastructure, but also a shift in its enterprise. The enterprise architecture document, which is developed by JPDO, provides an overview of the desired capabilities (JPDO 2007b).
The enterprise architecture is described using Department of Defense Architecture Framework (DoDAF) and the Federal Enterprise Architecture (FEA). DoDAF is used to describe the operational aspects of the project. The three views of DoDAF, the Operational View (OV), the Systems View (SV), and the Technical Standards View (TV), are presented in the enterprise architecture document. The Overview and Summary Information (AV-1) is the formal statement about how to use the architecture, the Integrated Dictionary (AV-2) defines the terms in the document, the


Community Model (OV-1) presents a high level depiction of the NextGen community, the Operational Node Connectivity Description (OV-2) presents the information flow among operational nodes in the system, Operational Information Exchange Matrix (OV-3) details the description of information flow in OV-2. Other architectural views of the system based on DoDAF are the Activity Model (OV-5) which documents activities (functions and processes), the Operational Event/Trace Description (OV-6c) is a part of sequence and timing description of activities, the System Functionality Description (SV-4) explains system functional hierarchies, and the Operational Activity to System Functionality Traceability Matrix (SV-5) is specification of relationships between operational activities in architecture and functional activities. However, a challenging part of applying this Enterprise Architecture is transformation from legacy systems to the new NextGen. This transformation is the ultimate test for relevance and comprehensiveness of the developed Enterprise Architecture.
Acquisition is the heart of systems engineering activities in the FAA NextGen project. As mentioned in Challenges above, the current practice of verification of validation in systems engineering (SE) is geared toward single isolated systems, rather than a myriad of interconnected system of systems (sos). Moreover, the capabilities of NextGen are interdependent, and different programs rely on each other to deliver the promises. 250 unique and highly interconnected acquisition programs are identified in the FAA's Capital Investment Plan, and these are to be delivered by 1820 FAA acquisition professionals. In addition, program complexity, budget uncertainty, and the challenge of finding acquisition professionals present other problems. The experience of systems acquisition in NextGen can provide a useful knowledge for future similar projects.

Lessons Learned
Although major portions of the FAA NextGen project are technical transformations and physical infrastructure developments, the transformation in the aviation enterprise is important but to some degree neglected. Part of the issue might be the fact that this transformation is beyond the responsibility and capability of FAA. However, to accomplish NextGen's perceived benefits it is important to realize the effects of legacy systems, and most importantly the legacy enterprise architecture of the U.S. ATN. Many of the actual challenges in the system arose because of this inattention.
The sequestration in the U.S. government, the Budget Control Act of 2011, has cut the project funding substantially in recent years. As a result the project schedule and portfolio are subject to constant and wide-spread changes. The FAA was focused on delivering Optimization of Airspace and Procedures in the Metroplex (OPAM) program which is designed to reduce the delay, fuel consumption, and exhaust emission in busiest airports. The three areas of Houston, North Texas, and Washington D.C. were planned to complete the design phase on 2013 and start implementation.
Out of 700 planned ADS-B ground stations, 445 were operational on February 2013. ADS-B capability is a NextGen descendant of current radar systems and provides situational awareness for the players in the NAS using the Global Positioning System (GPS) and Wide Area Augmentation System (WAAS).
On the enterprise part of the project, the FAA Modernization and Reform Act of 2012 provided financial incentives for airlines and commercial aviation manufacturers to implement the required equipment in their aircraft. These incentives are designed to engage the air transportation community in the project and to create the critical mass of equipped airplanes.
There are considerable practices in applying NextGen. Establishment of the JPDO made the efforts of the project more coherent and integrated. JPDO's main responsibility is to coordinate development of NextGen. The role of this organization is to represent multiple stakeholders of the project, which enables it to resolve possible conflicts of interests inside one entity. Moreover, such an organization provides a venue for technical knowledge-sharing, creating a consensus, and making an integrated system.
Emphasizing delivery of the mid-term objectives of NextGen is another lesson of the project. It was a well-known practice documented by Forman and Maier to establish mid-points for complex projects (Forman 2000). Developing


a mid-level system provides the system designers an opportunity to examine their underlying assumptions, to identify best practices and heuristics in the context of the project, and to reapply the acquired knowledge thorough evolutionary developments. A major shift in the policy of FAA in recent years was to focus on delivering project mid-term objectives.
There are unique characteristics of NextGen which makes it a valuable case for learning and replicating to other complex transformation projects of sociotechnical systems. The scale of the project for infrastructure transformation is unprecedented. The system includes legacy systems and cutting edge technology, and its performance is based on their coherent work. The project implementation is dependent on involved participation of multiple governmental and commercial organizations. Moreover, this case-study provides a great investigation in enterprise governance and enterprise transformation beyond a single organization.

References
Works Cited
Darabi, H.R., and M. Mansouri. 2014. "NextGen: Enterprise Transformation of the United States Air Transport Network," in Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering, edited by
A. Gorod et al. Boca Raton, FL, USA: CRC Press, Taylor & Francis Group.
Donohue, G.L., and A.G. Zellweger. 2001. "Air Transportation Systems Engineering." American Institute of Aeronautics and Astronautics. 193 (1).
FAA. 2008. FAA's NextGen Implementation Plan. Federal Aviation Administration. Washington, DC, USA. Accessed March 29, 2014. Available: http://www.faa.gov/nextgen/media/ng2008_implementation_plan.pdf.
Forman, B. 2000. "The political process and systems architecting," in The Art of Systems Architecting, 2nd ed., edited by M.W. Maier and E. Rechtin. Boca Raton, FL, USA: CRC Press LLC.
JPDO. 2007a. Concept of operations for the next generation air transportation system. Joint Planning Development Office. Accessed March 29, 2014. Available: http://www.jpdo.gov/library/nextgen_v2.0.pdf.
JPDO. 2007b. Enterprise Architecture V2.0 for the Next Generation Air Transportation System. Joint Planning and Development	Office.	Accessed	March	29,	2014.	Available:	http:/ / www. jpdo. gov/ library/ EnterpriseArchitectureV2.zip.
JPDO. 2011. Targeted NextGen Capabilities for 2025. Joint Planning and Development Office. Accessed March 29, 2014. Available: http://www.jpdo.gov/library/2011_Targeted_NextGen-Capabilities_for_2025_v3.25.pdf.

Primary References
Darabi, H.R. and M. Mansouri. 2014. "NextGen: Enterprise Transformation of the United States Air Transport Network." Case Studies in System of Systems, Enterprise Systems, and Complex Systems Engineering. Gorod, A.,
B. E. White, V. Ireland, S. J. Gandhi, and B.J. Sauser. Boca Raton, FL: CRC Press, Taylor & Francis Group. Scheduled for publication in July 2014. http:/ / www. taylorandfrancis. com/ books/ details/ 9781466502390/ . Accessed 29 March 2014.

Additional References
None.


Reverse Engineering a UAV Prototype using Agile Practices

 Lead Author:
 Phyllis Marbach
-
This example shows how Agile Practices were applied to an unmanned air vehicle (UAV) that had been developed as a prototype and was intended to be produced and marketed (Marbach 2012). At the time it was required to have the Federal Aviation Agency (FAA) approve the use of a UAV in populated areas. FAA required artifacts such as requirements, architecture representations and test procedures to grant this approval. A team was established to reverse engineer the artifacts needed from the operational prototypes being flown at the time. The test manager requested that the life cycle process to produce these artifacts be agile. Stakeholder needs were determined, and a plan was written to describe the problem and the process to be applied. Then the approach was presented to the team, the product backlog was developed, and a training and planning session was started.

Description
The agile process is described in the SEBoK here. When defining requirements (Carlson 2010) proposes that the requirements be identified, gathered, defined, and developed in iterations (or sprints). These requirements are written in the User Story format and controlled and managed in a product backlog. The User Stories in the Product backlog are selected and estimated by the team based on importance and need. The most important user stories (or requirements) are prioritized and moved to the top of the product backlog. Then those User Stories are broken into tasks and the tasks are estimated. The number of tasks that the team can complete are then put into the Sprint Backlog (or iteration backlog) and those tasks are then worked on by the team. For this work the UAV and its code were already operational. We had working code, a test bed, user interfaces and user procedures. The goal was to produce requirements documentation, architecture and design diagrams, a trace matrix of tests to requirements, software test descriptions and a Hazard Analysis to take before the FAA.
The team assembled were experienced engineers, but not with this UAV system. There were UAV subject matter experts (SMEs) still on the program, but they were not always available to answer questions or come to reviews. There was existing documentation in program repositories such as charts and operator procedures, but we did not know where to find this information. Given these challenges it was decided to use collaborative tools to manage the information as it was discovered and make it visible to the team and the UAV SMEs.
The first set of information produced was the product backlog. An example of the product backlog is shown in Figure 1. Epics are a set of User Stories that take more than one iteration to complete. A user story is broken into tasks such as those shown in Figure 2. These templates were developed to understand the scope of each task and what the definition of done for that task was. The goal was to identify tasks that take a maximum of 16 work hours to complete. The product backlog was developed and managed in an Application Lifecycle Management (ALM) Tool. Our team did a trades study when selecting a tool for use. Parameters considered in the trade included ease of use, cost, and features of the tool itself. The tool selected was VersionOne.
The team then determined what collaboration tool would be used to make our discovered information visible. The requirements for this tool were: easy to access, easy to use, easy to comment on and easy to change. At the time these tools were available: Mediawiki, an open source, TWikiTM, another open source, Confluence, SharePoint, and Socialtext. It was decided to use TWikiTM.
For each of the epics in work, such as "Power On", the Description of Functionality was written in the collaboration tool. Figure 3 shows the list of content in the collaboration tool for the artifacts being developed.











The Collaboration Home Page had an introduction about the analysis underway. It had links to a list of functional threads that were links to the work products themselves. There were also links to the references used, links to the test environment information and links to templates for the work products with instructions. The work products being developed, as shown in Figure 3, were Collaboration Tool Templates, Functional Descriptions, Requirements including Use Cases, Hazard Analysis and Risk Mitigation, and Test Procedures including Test Cases and Test Descriptions.
Once the requirements were complete for one Epic, such as "Power On" the material in the Collaboration Tool was exported into a Word Document and that was parsed into a Requirements Management tool. This team used the Dynamic Object-Oriented Requirements System (DOORS). The final Software Requirement Specification (SRS) was created from DOORS. After peer review the release documents were baselined into the Data Management Tool Repository that provided Configuration Management control. The Integrated Toolset used for this project is shown in Figure 4.




The sequence of development started with the prioritized user story to be worked first. Then the Collaboration tool was used to capture the information that members of the reverse engineering team worked with SMEs to reach an understanding of the functional requirements, hazard analysis and software test descriptions for the user story in development. A formal peer review was conducted and when agreed it was ready those documents were parsed into the requirements management tool. The Software Test Description (STD) was used to test the UAV code using the test platform. If the STD is determined to be complete, then it is also parsed into the requirements management tool and traced to the requirements that have been verified by testing. From the requirements management tool formal artifacts such as the Software Requirement Specification, the Software Test Description and the Trace Matrix were produced. Those were put into a configuration management tool. If the STD used for the testing was not Done then any markups were made into the Collaboration Tool and the Peer Review was conducted again. Essentially, each iteration resulted in potentially deliverable products that could be delivered to a stakeholder.
The data management tool, shown in Figure 4 by the green oval contained a repository of draft folders, peer review records, action items created, tracking and closure, a repository of release folders, the calendar, meeting notifications, distribution lists, access control to records, configuration management workflow and approvals, and it provided collaboration across companies, subcontractors, and customers.
The documentation created included software requirements specification that was created epic by epic rather than all at once, software test descriptions created as each feature is analyzed, and a Hazard Analysis being performed one epic at a time. These documents were updated each increment. An increment is a set of iterations. Each backlog item included conducting peer reviews of the content, as shown in Figure 2 list of tasks of each user story. Records of the peer reviews were maintained in the data management tool as mentioned above. The definition of done for these artifacts was that the work was not complete until the information was posted into the Requirements Management Tool. The Software Test Descriptions were linked to the requirements in the Requirements Management Tool thus beginning the Trace Matrix.
The Agile Practices described in this article can be mapped to LEAN Disciplines as shown in Table 1.


Table 1. Agile Practices Drive LEAN Disciplines (Used with Permission)
LEAN Disciplines	Agile Requirements Analysis

1. Establish Clear Priorities	1. Product backlog is always prioritized; Team works on highest priority items first
2. Eliminate Bad Multitasking - Focus and Finish	2. Team is shielded from interruptions that cause bad multitasking
3. Limit the Release of Work in Process (WIP) to Deliver	3. Tasks are pulled from the iteration backlog one at a time to limit individual WIP Earlier
4. Prepare! Start to Finish	4. Requirements are not selected from the product backlog until everything needed is available
5. Use Checklists to Prevent Defects and Traveled Risk	5. Checklists and guides are used to prevent costly rework

6. Face into and Resolve Issues Quickly	6. Daily stand-up meetings force issues and risks to be identified and resolved quickly

7. Drive Daily Execution	7. Daily stand-up meetings drive team-based execution


Summary
Systems engineering best practice is to perform requirements analysis, verification and validation as a system is being developed. Artifacts are created and configuration controlled as the system matures. This example describes how an existing operating prototype could be transitioned to a production system by performing requirements analysis, risk mitigation and hazard analysis even after the prototype is developed and operational. There is value in performing these system engineering tasks for an existing prototype to verify it is safe to operate and to achieve approval to fly. Using iterative and incremental development of these artifacts limited the work in process (WIP). The whole team worked one epic at a time to produce artifacts that addressed that one epic and verified the requirements, testing and analysis of hazards relative to that one epic, such as "Power On". Then they would work the next epic focusing on one capability at a time therefore reinforcing each other's work quite effectively.

Lessons Learned
 Developing Systems Engineering products such as Systems Requirements Specifications, Hazards Analysis, Test
*Procedures, and Verification Trace Matrix in an iterative incremental way is effective.
 Some new to using these principles and methods did resist at first but then saw the value and became advocates of the iterative incremental process.
 The use of tools helped keep the work visible, aiding in communication and accuracy.
 Access to Subject Matter Experts (SMEs) was critical to producing accurate products.
 The team focused on known elements first. Then the knowledge learned was applied to elements with more uncertainty. This applies the Lean Principle of limiting the work in process.
 The team did not start work on an element until they had what was needed to accomplish the analysis. This applies the Lean Principle of working start to finish.


References
Works Cited
Carlson, R., Matzuc, P., 2010, "A Viable Systems Engineering Approach", Proceedings of the Systems and Software Technology Conference (SSTC), 2010, Salt Lake City, Utah, USA.
Marbach, P., 2012, "An Experience Report on Agile Systems Engineering Requirements Analysis," Proceedings of the INCOSE-LA Mini-conference, 2012, Los Angeles, CA, USA.

Primary References
None.

Additional References
None.

UK West Coast Route Modernisation Project

 Lead Authors:
 Tom Hilburn, Heidi Davidz, and Alex Lee
 Contributing Authors:
 Alice Squires and Richard Turner
-
This example was created as a SE example directly for the SEBoK. It describes the United Kingdom West Coast Main Line railway project and some of the problems which occurred on this project before the implementation of SE. It also discussed the value of applying some aspects of SE, even if this is done later in the project.
This example is based on information from a report by the UK National Audit Office (NAO 2006). It also uses an INCOSE publication on systems engineering case studies (INCOSE 2011) to help structure its conclusions.

Description
The West Coast Main Line (WCML) is a principal United Kingdom (UK) railway artery serving London, the Midlands, the North West and Scotland. The Line is responsible for over 2,000 train movements each day, with more than 75 million rail journeys made each year on the route. It accounts for 43% of Britain's UK freight market (Railway People 2011). In 1998, the British government embarked on a modernization program called the West Coast Route Modernisation (WCRM) project, to carry out a significant volume of modernization work between 1998 and 2008, delivering increased capacity and reduced journey times as well as replacing worn-out parts of the railway. It was a challenging job involving 640 kilometers of track-much of which was incapable of carrying high-speed rail cars. Some sections were seriously dilapidated, and new trains would require a complete overhaul of signaling, power supply, and switching systems.
Early on, the WCRM upgrade had serious problems. A major complicating factor was the introduction of a new signaling technology that was designed to allow improved services for new trains running at 140 miles per hour. By 2001, neither the rail infrastructure upgrade nor the new trains were on course for delivery as expected in the 1998 agreement. By May 2002, the projection of the program's final cost had risen from £2.5 billion (in 1998) to £14.5 billion but had delivered only a sixth of the original scope.
In January 2002, the UK Secretary of State instructed the Strategic Rail Authority (SRA) to intervene and find a way to renew and upgrade the WCML. An SRA analysis identified the following issues:


 The program lacked direction and leadership before 2002.
 The project did not have a delivery strategy and there was no central point for responsibility and communication.
 There was a lack of openness and communication regarding the program with interested parties before 2002 and there was a lack of stakeholder management.
 Scope changes arose because WCRM did not have an agreed-upon specification that matched required outputs with inputs.
 There was inadequate knowledge about the West Coast asset condition.
 Technology issues related to the decision to replace conventional signaling with unproven moving block signaling introduced major risk into deliverability and cost before 2002. These technology issues caused scope changes and program delay.
 Project management (PM) was weak, with a lack of senior management skills, too many changes in personnel, and ill-defined and fragmented roles and responsibilities. There was no integrated delivery plan and there was limited oversight of contractors. Poor management of contracts added to costs.
In order to remedy the situation, the SRA initiated the following actions, which align with generally accepted systems engineering (SE) practice:
 A clear direction for the project was developed and documented in the June 2003 West Coast Main Line Strategy, specifying desired goals and outcomes.
 A clear, measurable set of program outputs was established, along with more detailed infrastructure requirements, which were then subject to systematic change control and monitoring procedures fixing scope. Contractors were invited to tender complete detailed designs and deliver the work to a fixed price.
 Clear program governance structures were instituted.
 The SRA consulted widely with stakeholders and, in turn, kept stakeholders informed.
A National Audit Office (NAO) report concluded that the new arrangements worked well and that there were benefits to this approach (NAO 2006). Until this time, one of the program's key constraints and cost drivers had been the ability to access certain areas of the track. The new approach facilitated the ability to obtain possession of the track for engineering work, which was crucial to delivery. The new approach also enabled the program to identify opportunities to reduce the total cost by over £4 billion.
The NAO report also discussed a business case analysis by the SRA that identified the following benefits (NAO 2006):
 benefit:cost ratio for the enhancements element was 2.5:1;
 journey times and train frequencies exceeded the targets set out in the 2003 West Coast Strategy;
 growth in passenger numbers exceeded expectations (e.g., by 2005-06, following Phase 1 of the West Coast program, annual passenger journeys on Virgin West Coast grew by more than 20%); and
 punctuality improved (e.g., by September 2006, average time delays on Virgin West Coast trains have been approximately 9.5 minutes, a 43% improvement on the average delay of 17 minutes in September 2004).
The WCRM problems could be associated with a number of systems engineering concepts and practices: stakeholder needs definition, planning, analysis of risks and challenges of new technology and associated risk management, decision management, configuration or change management, information management, and management oversight.


Summary
The WCRM project illustrates that when SE concepts and practices are not used or applied properly, system development can experience debilitating problems. This project also demonstrates how such problems can be abated and reversed when SE principles and methods are applied.

References
Works Cited
INCOSE Transportation Working Group. Systems Engineering in Transportation Projects: A Library of Case Studies, version 1.0. Seattle, WA, USA: International Council on Systems Engineering. March 9th, 2011.
NAO. The Modernisation of the West Coast Main Line, Report by the Comptroller and Auditor General. London, UK: National Audit Office. November 22, 2006. HC 22 Session 2006-2007.
Railway People. '"West Coast Route Modernisation." RailwayPeople. 2011. Accessed July 25, 2011. Available at: http://www.railwaypeople.com/rail-projects/west-coast-route-modernisation-3.html.

Primary References
None.

Additional References
None.

Standard Korean Light Transit System

 Lead Authors:
 Heidi Davidz, Alice Squires, and Chuck Calvano
 Contributing Author:
 Richard Turner
-
This example was created as a SE example directly for the SEBoK. It deals with systems engineering (SE) concepts and guidelines applied to the development of the Standard Korean Light Transit System (SKLTS). In Korea, local authorities had historically been interested in light transit to help resolve their transportation problems. The SKLTS was a joint effort between local authorities and the central government. It was built to provide a standard platform on which any local authority could construct its own light transit system. The issues of stakeholder needs definition, safety, and reliability, availability, and maintainability were critical to the success of this system.

Description
The elements of the SKLTS were classified into four groups (as shown in Figure 1): trains, signal systems, electric and machinery (E&M) systems, and structures. Trains and vehicles were to be automatically operated, without need for human operators. Operation systems and their interfaces were based on digital signals and communications. For SKLTS, SE-based design activities focused on reliability, availability, maintainability, and safety (RAMS), and were integrated into project management (PM) activities during all phases.




The project life cycle for the SKLTS is summarized in Figure 2. It consisted of 7 phases: concept studies, concept development, preliminary design, design, system production and testing, performance evaluation, and operation/maintenance/close-out (OMC) - please see (Choi 2007) and (Chung et al. 2010) for further details. These phases, with the exception of the production and test phases, are completed through an evaluation and decision point (EDP) (milestone), depicted as a colored circle in Figure 2. These EDPs correspond to common life cycle artifacts such as requests for proposal (RFPs), proposals, preliminary design reviews (PDRs), and critical design reviews (CDRs).

During the SKLTS development, SE activities were focused on RAMS as summarized in Table 1.

Table 1. The SE Framework of the SKLTS (Ahn 2005). Reprinted with permission of the Journal of the Korean Society for Railway. All other rights are reserved by the copyright owner.

Phases
Safety
Reliability
Function
Performance
Concept studies
 Requirements analysis
 Identifying RAM conditions
 RAM allocation
 System configuration
 Interface management
 Performance simulation
Concept development & pre-design
 Safety planning
 Defining safety procedures & levels
 RAM planning
 Initial availability analysis
 Defining scenarios and alarm procedure
 Pre-designing command
rooms
 Interface analysis



Design
 Hazard log
 Safety case analysis
 Risk analysis
 Reporting RAM analysis
 RAM analysis of auxiliary systems
 Defining alarm systems
 Train analysis
 Functionality analysis of stations
 Interface analysis
Performance
 Safety test planning &
 Verification and Validation
 System test planning and
 Performance test
evaluation
testing
(V&V) RAM
 Maintainability test
testing
planning & testing
Initial Operation
 System acceptance
 Driver certification
 RAM monitoring
 FRACAS*
 Analyzing systems
 Identifying improvement points
 Performance monitoring

*FRACAS: Failure Reporting & Corrective Action System
In the "concept studies" and "concept development" phases, requirements included the RAMS objectives. Planning activities in this phase included the scheduling of various tests and evaluations to be conducted after system design. The basic layout of rails and command rooms was also proposed. Finally, it was during this phase that interface management procedures and relationships between requirements and systems were defined. For RAMS engineering, it was also important to establish associated plans and criteria (e.g., RAM plans, safety plans, service availability, etc.).
During the pre-design phase, the basic architecture of the system was determined for safety planning, RAMS planning, and operational scenarios. Interfaces among subsystems, management procedures for contractors and legal regulations were defined. were defined as well as management procedures for contractors and legal regulations. The functional analysis dealt with timeline, accuracy of stop points, and trip times. Pre-design activities also included the specifications of major system elements such as signal systems, trains, and interfaces. For RAMS engineering, safety scenarios were defined, and the hazard and risk analyses were performed.
During the design and performance evaluation phases, hazard log and RAMS analyses were performed to ensure that each subsystem met safety requirements. The specifications of alarm systems and stations were also defined. In addition, V&V and test procedures were determined for performance evaluation. During the design phase, a design/construction interface manual (D/CIM) was developed and applied to ensure integrated and consistent design. (Bombardier, 2005.)
Because SKLTS was designed as an automatically-driven system, RAMS issues were critical to its success. The safety and reliability of the SKLTS were evaluated on a test railway that was constructed to standard specifications. Data was gathered from existing Korean light rail systems, as well as the light rail systems from other countries, to support V&V activities.
Various methods were applied for achieving the RAMS objectives, including RAMS requirements analysis, safety and RAMS planning, utilization of systems scenarios, and construction risk analysis.
Initial operation of SKLTS was allowed only after the system was formally accepted and operators were properly certified. During test operation, RAMS performance was continuously monitored and system scenarios were used successfully to evaluate the dynamic behavior of the system. A failure reporting and corrective action system (FRACAS) was used to gather accident and failure data. Continuous improvement when the system is in normal operation was identified as a requirement; the results from the FRACAS will be used to support improvement of the system, maintenance, and improvement of procedures.


Summary
Korean local authorities have successfully introduced the SKLTS to their precincts with some modifications. Successful examples include the Inchun Airport Line and the Seoul 9th Subway Line. One lesson learned that was identified was that requirement analysis, especially in the first few phases, should have been more complete.

References
Works Cited
Ahn, S.H. 2005. "Systems Engineering Applied to the Construction of Unmanned Light Rail Transit Systems."
Journal of the Korean Society for Railway. 8(2): 41-49.
Bombardier. 2005. Design/Construction Interface Manual. Montréal, Québec, Canada: Bombardier.
Choi, Y.C. 2007. "Systems eEngineering aApplication mModel for the nNational R&D pProject: Focusing on the rRailway sSystems." Ph.D. dissertation, Ajou University, Suwon, South Korea, 2007.
Chung, S. Y., S.G. Lee, D.W. Lee, and S.T. Jeon. 2010. "A sStudy on tThe aApplication mModel of sSystems eEngineering to Aadvance the bBusiness of the Light Rail Transit (LRT)." Proceedings on the Autumn Conference of the Korean Society for Railway, p. 24-30.

Primary References
None.

Additional References
Han, S.Y. and A.H. Lee. 2005. System Engineering for The Technology Development Program of Light Transit Systems: Internal Research Report. Gyeonggi-do, South Korea: Korea Railroad Research Institute.
Korean Agency for Technology and Standards. 2009. KSX ISO/IEC 15288: Life Cycle Processes of IT Systems Based on Systems and Software Engineering, Research Report. Gyeonggi-do, South Korea: Korean Agency for Technology and Standards.
Lee, W.D. 2002. "A study on the top-level functional analysis for the automated guideway transit by system engineering tools." Proceedings of the Autumn Conference of the Korean Society for Railway, p. 202-207.




Utilities Examples

Northwest Hydro System

-
This case study presents the Northwest Hydro System (NwHS), which is situated in the northwestern United States (the Northwest). NwHS comprises a large number of loosely coupled autonomous elements (hydroelectric dams) that operate in a complex environment of social, regulatory, and ecological contexts. It is instructive to note that the NwHS is characterized as a project that is concerned with planning, developing, and maintaining a hydroelectric system that has evolved, and continues to evolve, over time. Each of the hydroelectric dams within the NwHS is also referred to as a project, which indicates that the individual elements of the NwHS are also evolving over time (FWEE 2016).

Background
As is shown in this case study, NwHS is an adaptive and reconfigurable system that exists within a framework of policies, rules, regulations, and agreements. The NwHS is analyzed using each of the four provisioning paradigms in SEBoK Part 4: product system engineering; service system engineering; enterprise system engineering; and system of systems engineering.
NwHS encompasses the Columbia River and its tributaries. The headwaters of the Columbia are in the Rocky Mountains of British Columbia, Canada. The river flows south into the United States and then east to west; it forms the north-south border between the states of Washington and Oregon in the U.S. and empties into the Pacific Ocean near Astoria, Oregon. The Columbia River drainage basin (Columbia and tributaries) is roughly the size of France and extends across seven U.S. states and British Columbia (Col 2016).
The Columbia River has 14 hydroelectric dams (hydro dams) on its main stem. In total, there are more than 250 hydro dams in the Columbia River Basin, each of which has a generating capacity of five or more megawatts of electricity. The NwHS produces approximately one-third of all hydroelectric power generated in the United States - more than any other North American hydroelectric system. The amount of electrical power generated by the NwHS fluctuates between 50% and 75% of all electricity used in the Northwest; other sources include coal, natural gas, nuclear, wind, and solar. Excess electrical energy generated by NwHS is sold to other electrical grids. There are more small hydro dams than large dams. Small hydro dams have a generating capacity of 100 kilowatts to 30 megawatts; large hydro dams have a capacity of more than 30 megawatts. In addition, there are numerous micro dams that can each generate fewer than 100 kilowatts. Most micro dams provide power to isolated homes or small communities but some are elements of the NwHS and sell power to utilities (DOE 2016). Utility companies own some of the dams, some are locally and privately owned, and some are owned and operated by federal agencies.
The Bonneville Power Administration (BPA) provides about one-third of the electrical power generated by NwHS and used in the Northwest; BPA is a federal nonprofit agency - it is part of the U.S. Department of Energy. It is self-funded and covers its costs by selling electrical power generated by 31 federal hydro dams in the Columbia River Basin. The U.S. Army Corps of Engineers and the Bureau of Reclamation operate the dams.
The Bureau of Reclamation also operates a network of automated hydrologic and meteorologic monitoring stations located throughout the Northwest. This network and its associated communications and computer systems are collectively called Hydromet. Remote data collection platforms transmit water and environmental data via radio and satellite to provide near-real-time water management capabilities. Other information, as available, is integrated with Hydromet data to provide timely water supply status for river and reservoir operations (USBR 2016).


Distinguishing characteristics of individual hydro dams are their capacity to generate electrical energy and their physical structure. Several factors contribute to the differences in generating capacity of hydro dams: the number of turbines/generators; the flow rate of a river or tributary; the amount of elevation that water falls in order to spin the turbines; and environmental factors such as providing for fish passage and regulating water flow to provide irrigation water and maintain downstream ecosystems.
Dam structures include storage dams, run-of-river dams, and pumped storage dams (DOE 2016). A storage dam retains water in a reservoir for future use. A run-of-river dam harvests the energy in a river as it flows through the dam but does not impede the flow. Pumped storage dams use generated electricity to pump water back up to a storage reservoir during times of low demand for use during times of high demand. Pumped storage dams are not common in the NwHS.

Purpose
NwHS has three primary goals (NwHS 2016):
1. To provide most of the Northwest's "firm-energy" needs.
2. To maximize "non-firm" energy production.
3. To maintain the ecological environment.
Firm energy is the amount of electricity the Northwest will need each year. Planners rely on NwHS and other sources to produce enough firm energy to ensure that sufficient electricity will be generated to meet estimated needs (energy sources include hydroelectric, nuclear, coal, natural gas, solar, and wind). NwHS "firm energy" is the amount of electricity that can be generated by NwHS when the amount of available water is at a historical low, thus guaranteeing the amount of energy the NwHS can provide.
Non-firm energy is the electricity generated when the annual hydrologic cycle makes more water available for power generation than in a historically low-water year. Non-firm electricity generated by hydro dams is generally sold at a lower price than the alternatives of electricity generated by nuclear, coal, or natural gas thus making it more attractive to customers. Excess non-firm electricity is also sold to interconnected regional grids when the demand on those grids exceeds supply.
Other goals for NwHS include flood control, navigation, irrigation, and maintaining the water levels of all reservoirs.

Challenges
The NwHS is a large, complex system that has many challenges to be met.
NwHS hydro dams have varying design details (e.g., the types of turbines, generators, control systems, and fish passage facilities used). This makes routine maintenance, retrofitting, and other sustainment issues unique for each dam.
Safety and security (both physical and cyber) are common challenges for all dams; cyber security is a growing concern. Smaller dams, having fewer resources, may be more susceptible to cyber attacks than larger ones. It has been reported that on 12 occasions in the last decade hackers gained top-level access to key power networks (HLS 2010) (Cyber 2015).
Run-of-river hydro dams do not store water. They may not be able to meet their firm energy commitments when rivers are lower than anticipated and flowing slowly.
The ways in which electricity generated by a dam is transmitted and sold to utilities and large industrial customers varies widely. For instance, the Bonneville Power Administration transmits and sells power generated by federal dams. Non-federal operators must manage transmission and sale of power produced by their dams.
Depending on factors such as size, structure, location, and ownership of each dam, a large number of policies, regulations, and agreements have dramatically different effects on how dams are operated.


Some of the most contentious environmental issues are associated with maintaining the ecology of the rivers, preserving salmon and other fish, and providing sufficient irrigation water while preserving sufficient reservoir water to meet firm-energy demands (Speakout 2016).
Preserving the salmon population endangered by dams is a continuing challenge. Salmon populations have been depleted because dams impede the return of salmon to upstream spawning beds. Native Americans advocate for their traditional fishing rights, which conflict with governmental policies intended to maintain healthy salmon populations in the Columbia River Basin (Impact 2016). The National Marine Fisheries Service has recently declared that salmon recovery is a higher priority than all other purposes except flood control at 14 federal dams.

Systems Engineering Practices
The Northwest Hydro System is a large, complex system composed of loosely coupled autonomous elements; each dam operates semi-independently within a large network of similar entities and contextual constraints. The NwHS evolves over time: some dams have been retrofitted to increase power generation capability or to reconfigure connections to electrical transmission lines; new dams have been constructed; and some existing dams have been decommissioned and removed.
Human elements of NwHS include: operators; maintainers; regulators; and inspectors. Others are suppliers to NwHS (vendors and contractors); some humans are users of the electricity generated by NwHS (businesses and home owners); and some are stakeholders who depend on and are impacted by the NwHS (utilities, large industries, farmers, ranchers, homeowners, ecology advocates, Native Americans, towns).
The context of NwHS includes natural elements (rivers, terrain, weather systems, fish); elements purposefully built by humans (transmission lines, electrical grids); cyber connections (both wired and Internet); and rules, regulations, and agreements at the federal, regional, state, and local levels.
Given the complexity of the NwHS and its context, it is instructive to analyze the NwHS by applying each of the four application paradigms of systems engineering presented in SEBok Part 4: the product, service, enterprise, and system-of-systems application paradigms.

Product System Provisioning
Product system provisioning applies systems engineering processes, methods, tools, and techniques to conceive, develop, and sustain the purposefully developed elements of a system (e.g., a hydro dam or a hydro system). In addition, some of the naturally occurring physical elements of a system may be shaped and configured (e.g., a river channel).
Major product elements of a hydro dam include the physical structure of the dam (including the spillway), the penstock (used to direct water into the turbines), the generating plant (i.e., the turbines used to turn generator rotors, generator stators and rotors that generate the electricity, step-up transformers used to increase the voltage level of electricity produced by the generators, and connections to transmission lines).
Cyber elements sense, measure, regulate, and control water flow, power generation, safety, security, and the structural integrity of the dam. Some turbines, for example, have adjustable vanes that are controlled to harvest maximum energy from the water, depending on the flow rate, power demand, and other factors. The cyber elements include: computing devices; supporting software (operating systems, databases, spreadsheets); data management software (collection, analysis, reporting); application software (displays of monitored status and interfaces for controlling operation of a dam); and communication interfaces to wired linkage and Internet-enabled links. In addition, software support is provided for the analog and digital devices needed to sense, measure, regulate, and control the purposefully built and naturally occurring elements of a dam and its environment.
Product system provisioning is also concerned with other issues that apply to individual dams, elements of dams, and the overall NwHS. They include issues such as: manufacturability/producibility; logistics and distribution; product


quality; product disposal; conformance to policies, laws, regulations, agreements, and standards; value added for stakeholders; and meeting customer's expectations. Many different technologies and engineering disciplines are needed to develop and sustain a hydro dam and the overall Northwest Hydro System. Product system provisioning can provide the coordination and control of systems engineering needed to develop, reconfigure, adapt, analyze, and sustain the hydro dams and the NwHS.

Service System Provisioning
A service is an activity performed by an entity to help or assist one or more other entities. Service system provisioning can be applied within the various contexts of services provided by the NwHS to meet stakeholders' requirements, users' needs, and system interactions with operators, users, and maintainers, plus the interactions with the contextual elements that determined services provided by the NwHS in the social, business, regulatory, and physical environments.
The NWHS provides electricity to a grid that serves commercial, industrial, governmental, and domestic customers. Stakeholders in addition to customers served include those who affect or will be affected by development, operation, and sustainment of a dam. Downstream stakeholders served, for example, include:, Native Americans, farmers and ranchers, and communities that receive the service of water released by the dam.
Additional service attributes include: the services that enable operators and maintainers to efficiently and effectively operate and maintain the physical and cyber elements of a dam; release water from the dam in a manner that services the upstream and downstream ecosystems; manage sharing of electrical power with other regional grids; provide emergency responses to power demands that result from electrical brownouts, blackouts, and overloads; and handle system failures that might be caused by earthquakes, terrorist attacks, and other catastrophic events.

Enterprise System Provisioning
An enterprise, such as the NwHS, consists of one or more organizations that share a mission, goals, and objectives to offer an output such as a product or service. The mission and goals of the NwHS are to provide most of the Northwest's firm energy needs and to maximize non-firm energy production while serving stakeholders and preserving affected environmental ecosystems. To meet those goals, the Northwest Hydroelectric Association (NWHA) coordinates the planning, design, improvement, and operation of the hydro dams that constitute the NwHS enterprise.
NWHA members represents all segments of the hydropower industry - independent developers and energy producers; public and private utilities; manufacturers and distributors; and local, state and regional governments including water and irrigation districts. Other NWHA members include contractors, Native American tribes, and consultants: engineers, financiers, environmental scientists, attorneys and others (NWHA 2016).
Note that an enterprise may consist of multiple organizations that are engaged in a common endeavor. The NwHS is a large complex enterprise that has many constituent organizations; namely, the organizations that own and operate the hydro dams and the other stakeholder members of the NWHA. Differences in ownership, structure, location, and size of hydro dams, the special interests of various NWHA members, and a complicated regulatory process, are some of the distinguishing characteristics of the NwHS that can be analyzed by enterprise systems provisioning.

System of Systems Provisioning
Many systems are composed of autonomous elements that are combined to provide increased capabilities that cannot be provided by the elements operating in isolation. The Northwest Hydro System is a system of systems comprised of autonomous hydro dams that have different owners, different operators, different stakeholders, and different regulators. The autonomous hydro dams could not provide the NwHS capabilities without the overall coordination and control that can be managed by applying system of systems provisioning.


Lessons Learned
NwHS is a collection of many interrelated ongoing projects that have shared common goals and shared constraints. The unique characteristics of NwHS make it a useful case study to illustrate how the four provisioning paradigms in SEBoK Part 4 provide essential viewpoints for analyzing large complex systems comprised of loosely coupled, autonomous elements.
Product systems engineering allows the collection of physical and purposefully built NwHS elements and their interconnections to be analyzed by applying systems product engineering processes and methods.
Service systems engineering supports analysis of the NwHS services provided to customers, users, farmers, ranchers, Native Americans, and other stakeholders who rely on NwHS for those services.
Enterprise systems engineering considers the broad scope and impact of the NwHS enterprise, both positive and negative, on the northwestern United States within the context of economic, social, physical, and regulatory environments.
System of Systems engineering applies the principles of planning, coordination, and operation to a collection of semi-autonomous hydro dams that form the Northwest Hydro System. The complexity of adding new dams as well as modifying and decommissioning existing dams in a seamless manner can best be understood by applying system of systems engineering processes and methods.
Taken together, the four provisioning paradigms in SEBoK Part 4 present a comprehensive view of a very large complex system whose many dimensions would be otherwise difficult, if not impossible, to comprehend when the NwHS is examined using only one of the paradigms.

References
Works Cited
Col. 2016. Columbia River. Available at https://en.wikipedia.org/wiki/Columbia_River. Accessed February 15, 2016..
Cyber. 2015. US in Fear of New Cyber Attack. Available at http:/ / www. independent. co. uk/ news/ world/ americas/
bowman-avenue-dam-us-in-fear-of-new-cyber-attack-as-dam-breach-by-iranian-hackers-is-revealed-a6782081.html. Accessed February 16, 2016.
DOE. 2016. Types of Hydropower Plants. Available at http:/ / energy. gov/ eere/ water/ types-hydropower-plants. Accessed February 16, 2016.
FWEE. 2016. Foundation for Water and Energy Education. Available: http:/ / fwee. org/ about-fwee/ about/ . Accessed February 17, 2016.
HLS. 2010. Dam Sector Roadmap to Secure Systems. Available at http:/ / www. damsafety. org/ media/ Documents2/security/files/DamsSectorRoadmapToSecureControlSystems.pdf.Accessed February 16, 2016.
Impact. 2016. The Impact of the Bonneville Dam on Native American Culture. Available at http://www2.kenyon. edu/projects/Dams/bsc02yogg.html.Accessed February 16, 2016.
NWHA. 2016. Northwest Hydroelectric Association. Available at http:/ / www. nwhydro. org/ nwha/ about/ . Accessed February 17, 2016.
NwHS. 2016. How the Northwest Hydro System Works. Available at http:/ / fwee. org/ nw-hydro-tours/ how-the-northwest-hydro-system-works/.Accessed February 15, 2016.
USBR. 2016. Hydromet. Available at http://www.usbr.gov/pn/hydromet/.Accessed February 16, 2016.
Speakout. 2016. Stop the Hydropower Wish List Bill. Available at http:/ / act. americanrivers. org/ page/ speakout/ stop-unlockhydro-senate?source=adwords& gclid=CPTF7u3G_MoCFVE0aQodiGgMQg. Accessed February 16,


2016.

Primary References
FCRPS. 2003. Federal Columbia River Power System. Available at https:/ / www. bpa. gov/ power/ pg/ fcrps_brochure_17x11.pdf.Accessed February 16, 2016.
HLS. 2010. Dam Sector Roadmap to Secure Systems. Available at http:/ / www. damsafety. org/ media/ Documents2/security/files/DamsSectorRoadmapToSecureControlSystems.pdf.Accessed February 16, 2016.
NWHA. 2016. Northwest Hydroelectric Association. Available at http:/ / www. nwhydro. org/ nwha/ about/ . Accessed February 17, 2016.
NwHS. 2016. How the Northwest Hydro System Works. Available at http:/ / fwee. org/ nw-hydro-tours/ how-the-northwest-hydro-system-works/.Accessed February 15, 2016.

Additional References
FWEE1. 2016. Foundation for Water and Energy Education. Available at http:/ / www. fwee. org. Accessed February 16, 2016.
FWEE2. 2016. Overview of Hydropower in the Northwest. Available at http:/ / fwee. org/ education/ the-nature-of-water-power/overview-of-hydropower-in-the-northwest/.Accessed February 16, 2016.
HP. 2016. Hydro Portal. Available at https://energypedia.info/wiki/Portal:Hydro.Accessed February 16, 2016.

Singapore Water Management


 Lead Authors:
 Heidi Davidz, Alex Lee, and Alice Squires
 Contributing Author:
 Richard Turner
-
This example was produced as a SE example directly for the SEBoK. It describes a systems engineering approach in the development of a sustainable National Water Management System for the Republic of Singapore. It demonstrates the successful outcome of long-term planning and a systems approach to preempt a critical water shortage. The example is primarily based on information taken from a paper presented at the INCOSE International Symposium in 2008. (Chia 2008.)

Description
When Singapore achieved independence in 1965, water supply depended on water catchment in local reservoirs and two bilateral water agreements with its closest neighbor, Malaysia. These water agreements are registered with the United Nations. The first agreement expired in August 2011, and the second agreement will expire in 2061 (Singapore 2012). After several failed attempts to renegotiate the extension of the first water agreement, Singapore determined that it was necessary to achieve full water self-sufficiency by 2060 in case the second water agreement also could not be extended. An intermediate goal was to match the supply of the first water agreement before it expired. This was achieved in several ways. In 2001, the Public Utilities Board (PUB), the national water agency responsible for treating raw water in Singapore, was charged to also begin managing wastewater and stormwater, allowing for an integrated and holistic approach to water management.


This example examines Singapore's water management system from a large-scale systems engineering perspective, particularly focusing on the goals, boundaries (see Concepts of Systems Thinking), stakeholders (see Stakeholder Needs Definition), and complexities involved in this type of a national system. This approach illustrates how Systems Thinking (illustrated through causal loop diagrams) and other systems engineering tools may be used to understand systems complexities. Concepts and methodologies of learning organizations were applied to enable understanding of behavioral complexities. Lean thinking facilitated a long-term strategic philosophy, built on the premise of continuous improvements.
Perhaps more importantly, it shows that while systems engineering, especially the Systems Approach, is necessary for the conceptualization and planning of such a complex system, it is not sufficient for success. It is the systemic structures that have been put in place over decades, political will, leadership, people, and culture that make such tasks realizable.
The supply of water in Singapore is managed in totality. Collecting rainwater, purchasing water, and purifying water utilizing reverse osmosis and desalination were all considered. Approaches included even incentivizing consumers to change their habits by making drains and canals recreational areas to encourage the public not to dispose of waste in their drains. By managing sewage and drainage together with water, environmental considerations are taken into account as well. By carefully adjusting organizational boundaries, Singapore has managed to reduce silo thinking and parochial interests. The relationships between the industry innovators, government, suppliers and users, and technology innovators create opportunities for Singapore's water management. This demonstrates how multiple stakeholder interests can be combined to create a viable water management solution. Continuous improvements through the use of technology and elimination of waste, such as reducing water that is not accounted for in the system, help to assure the sustainability of an adequate supply of water for a growing Singapore population. The Singapore Water Management system is already in successful operation and is being studied by the Organization for Economic Co-operation and Development (OECD) and by other nations.

Summary
The supply of water in Singapore is managed in totality through a systems approach, i.e., water catchment, supply, sewage and drainage. The importance of relationships between the stakeholders is also recognized. Industry innovators, political leadership, suppliers, and consumers are all involved; the project has been able to incentivize this diverse group to work together for a common goal, i.e., assuring the sustainability of an adequate supply of water for Singapore into the future.
Utilizing systems engineering and taking into consideration the systemic structures and culture required have helped Singapore achieve its first milestone of supplying its own water resources by 2010. Singapore has been able to overcome the shortfall that would have come about with the expiry of the first water agreement with Malaysia in 2011.


References
Works Cited
Chia, A. 2008. "A large-scale systems engineering perspective of water management in Singapore." Proceedings of the 18th Annual INCOSE International Symposium, 15-19 June 2008, Utrecht, The Netherlands.
Singapore Government. 2012. "The Singapore Water Story." Available at http://www.pub.gov.sg/water/Pages/ singaporewaterstory.aspx.Accessed August 2012.

Primary References
None.

Additional References
Public Utilities Board. 2007. "PUB Main Website". Available at http://www.pub.gov.sg.Accessed August 2011.
Tortajada, C. 2006. "Water management in Singapore." International Journal of Water Resources Development. vol. 22, no. 2 p. 227-240.




Part 8: Emerging Knowledge

Emerging Knowledge

Contents of this Part
 Emerging Topics (Robert Cloutier)
 Emerging Research (Robert Cloutier and Arthur Pyster)
 Lead Authors:
 Robert Cloutier, Daniel DeLaurentis, and Ha Phuong Le
-
Like other portions of the SEBoK, the notion and content of Part 8 is evolving. Part 8 consists of two Knowledge Areas (KAs): Emerging Topics and Emerging Research.



Scope and Purpose
While the practice and need for systems engineering began appearing in journals from 1950 onward, the practice currently seems to be gaining momentum in most engineering and even non-engineering circles.
The classically trained systems engineers of the 1970s and even 1980s are faced with a C note shift in thinking brought on by the rapid advance of the software centricity of our systems, cybersecurity, agent-based, object-oriented, and model-based practices. These emerging practices bring their own methods and tools. Hall (1962, p. 5) may have been prescient when he wrote "It is hard to say whether increasing complexity is the cause or the effect of man's effort to cope with his expanding environment. In either case a central feature of the trend has been the development of large and very complex systems which tie together modern society. These systems include abstract or non-physical systems, such as government and the economic system."
These changes and the rate of change are causing systems engineering to evolve. Some of the practices may not even be recognizable to classically trained systems engineers. This Part of the SEBoK is intended to introduce some of the more significant emerging changes to systems engineering. As topics discussed in this Part evolve and become mainstream, they will be moved into the appropriate Part of the SEBoK.
System of Systems Engineering (SoSE) provides examples in recent times of an emerging topic from Systems Engineering community that generated emerging research, ultimately resulting in a foundational body of knowledge that continues to expand. A recent article describing this evolution from emerging topic to solution is now referenced in Part 4 - Systems of Systems (SoS).

Overview of Emerging Topics
See further: Emerging Topics
The Emerging Topics section is meant to inform the reader on the more significant and emerging changes to the practice of systems engineering. Examples of these emerging topics include:
 What is the potential to change systems engineering processes or the ways in which we perform systems engineering?
 How will the development of artificial intelligence impact systems engineering?
 Will AI change the way we think of systems architecture?
 How will we perform V&V of an AI system?
 How will the push towards vertically integrated digital engineering influence systems engineering?
 How are social features becoming more tightly connected to technical features of systems, and how is the modeling of socio-technical systems infusing into practice?

Overview of Emerging Research
See further: Emerging Research
As these emerging topics gain visibility, researchers will begin to investigate them. Corporate R&D may do early work, but academia and government will formalize this research. The Emerging Research section is a place to gather the references to this disparate work into a single repository to better inform systems engineers working on related topics. The references are collected from the following sources:
 PhD dissertations
 INCOSE publications and events
 IEEE publications and events
 Research funded by National Science Foundation (NSF) - Engineering Design and Systems Engineering (EDSE)
 Research funded by Systems Engineering Research Center (SERC)


References
Works Cited
Hall, Arthur D. (1962). A Methodology for Systems Engineering. New York, NY, USA: Van Nostrand.

Primary References
None.

Additional References
Engstrom, E.W. (1957). "Systems engineering: A growing concept," in Electrical Engineering, vol. 76, no. 2, pp. 113-116, Feb. 1957, doi: 10.1109/EE.1957.6442968.
Goode, H. Herbert., Machol, R. Engel. (1957). System Engineering: An Introduction to the Design of Large-Scale Systems. New York, NY, USA: McGraw-Hill.
Kelly, Mervin J. (1950). "The Bell Telephone Laboratories-An example of an institute of creative technology". Proceedings of the Royal Society B. Vol. 137, Issue 889. https://doi.org/10.1098/rspb.1950.0050.




Emerging Topics

Emerging Topics

Contents of this Knowledge Area
 Introduction to SE Transformation
 Socio-technical Systems (Erika Palmer)
 Artificial Intelligence (Barclay Brown, Tom McDermott, Rael Kopace, Ramakrishnan Raman, Ali Raz, and Kevin Robinson)
 Verification and Validation of Systems in Which AI is a Key Element (Laura Pullum)
 Transitioning Systems Engineering to a Model-based Discipline
 Model-Based Systems Engineering Adoption Trends 2009-2018 (Rob Cloutier) (Ifezue Obiako)
 Digital Engineering (Ron Giachetti)
 Set-Based Design (Eric Specking, Gregory S. Parnell, and Ed Pohl)
 Lead Author:
 Robert Cloutier
-
The Emerging Topics section is intended to introduce and inform the reader on significant and rapidly emerging needs and trends in practicing systems engineering within the community. It is not intended to be all-inclusive. Instead, those topics that have a high probability of significantly impacting the practice of systems engineering, as determined by the SEBoK editorial board, are covered. If the reader has recommendations of emerging topics that should be covered, please send an email to SEBoK@incose.org, or leave a comment in the comment feature at the bottom of this page.

Introduction to Systems Engineering Transformation
The knowledge covered in this KA reflects the transformation and continued evolution of SE, which are formed by the current and future challenges (see Systems Engineering: Historic and Future Challenges). This notion of SE transformation and the other areas of knowledge which it includes are discussed briefly below.
The INCOSE Systems Engineering Vision 2035 (INCOSE 2021) describes the global context for SE, the current state of SE practice and the possible future state of SE. It describes a number of ways in which SE continues to evolve to meet modern system challenges. These are summarized briefly below.
Systems engineering has evolved from a combination of practices used in a number of related industries (particularly aerospace and defense). These have been used as the basis for a standardized approach to the life cycle of any complex system (see Systems Engineering and Management). Hence, SE practices are largely based on heuristics, with efforts under-way to evolve a theoretical foundation for systems engineering (see Foundations of Systems Engineering) considering foundational knowledge from a variety of sources.
Systems engineering continues to evolve in response to a long history of increasing system complexity. Such complexity arises from human and societal needs, global megatrends, grand engineering challenges, and then are shaped by stakeholders expectations, and the enterprise environment. System solutions require both depth and breadth, and the design of those solutions must consider both technical and social aspects (see Socio-technical Systems).


Many systems engineering practices have become standard (e.g. studies, risk analysis) while some other are in transitioning phase (e.g. Model-Based Systems Engineering, agile, systems-of-systems). More recently, the rise of Artificial Intelligence (AI) introduces unprecedented challenges in verification and validation of AI-infused systems, but also opens up new opportunities to implement AI methodologies in the design of systems.
Systems engineering has gained recognition across industries, academia and governments. However, SE practice varies across industries, organizations, and system types. Cross fertilization of systems engineering practices across industries has begun slowly but surely; however, the global need for systems capabilities has outpaced the progress in systems engineering.
INCOSE Vision 2035 concludes that SE is poised to play a major role in some of the global challenges of the 21st century, that it has already begun to change to meet these challenges and that it needs to undergo a more significant transformation to fully meet these challenges. The following bullet points are taken from the summary section of Vision 2035 and define the attributes of a transformed SE discipline in the future:
 The future of systems engineering is model-based, enabled by enterprise digital transformation.
 Systems engineering practices will make significant advancements to deal with systems complexity and enable enterprise agility.
 Systems engineering will leverage practices from other disciplines such as data science to help manage the growth in data.
 Formal systems engineering theoretical foundations will be codified leading to new research and development in the next generation of systems engineering methods and tools.
 AI will both impact the systems engineering practice and the types of systems designed by the systems engineering community.
 There will be a step change in systems engineering education starting with early education with a heavy focus on lifelong learning.
Some of these future directions of SE are covered in the SEBoK. Others need to be introduced and fully integrated into the SE knowledge areas as they evolve. This KA will be used to provide an overview of these transforming aspects of SE as they emerge. This transformational knowledge will be integrated into all aspects of the SEBoK as it matures.

Topics in Part 8
 Introduction to SE Transformation
 Socio-technical Systems
 Artificial Intelligence
 Verification and Validation of Systems in Which AI is a Key Element
 Transitioning Systems Engineering to a Model-based Discipline
 Model-Based Systems Engineering Adoption Trends 2009-2018
 Digital Engineering
 Set-Based Design


References
Works Cited
None.

Primary References
None.

Additional References
None.

Introduction to SE Transformation

-
While the primary focus of the SEBoK is on the current practice of domain independent systems engineering, it is also concerned with the future evolution of the discipline.
The topics in this Knowledge Area (KA) summarize SE knowledge which is emerging and transitioning to become part of the practice of systems engineering, such as Model-Based Systems Engineering (MBSE). In general, topics will be introduced here and then expanded into other SEBoK KA's over time.
The knowledge covered in this KA reflects the transformation and continued evolution of SE. For a summary of the current and future challenges that contribute to this evolution, see Systems Engineering: Historic and Future Challenges. This notion of SE transformation and the other areas of knowledge which it includes are discussed briefly below.

Topics
Each part of the SEBoK is divided into Knowledge Areas (KAs), which are groupings of information with a related theme. The KAs, in turn, are divided into topics. This KA contains the following topics:
 Transitioning Systems Engineering to a Model-based Discipline
 Digital Engineering
 Set-Based Design
 Model-Based Systems Engineering Adoption Trends 2009-2018
 Systems Engineering Core Concepts

Systems Engineering Transformation
The INCOSE Systems Engineering Vision 2025 (INCOSE 2014) describes the global context for SE, the current state of SE practice and the possible future state of SE. It describes a number of ways in which SE continues to evolve to meet modern system challenges. These are summarized briefly below.
Systems engineering has evolved from a combination of practices used in a number of related industries (particularly aerospace and defense). These have been used as the basis for a standardized approach to the life cycle of any complex system (see Systems Engineering and Management). Hence, SE practices are still largely based on heuristics. Efforts are under-way to evolve a theoretical foundation for systems engineering (see Foundations of Systems Engineering) considering foundational knowledge from a variety of sources.


Systems engineering continues to evolve in response to a long history of increasing system complexity. Much of this evolution is in the models and tools focused on specific aspects of SE, such as understanding stakeholder needs, representing system architectures or modeling specific system properties. The integration across disciplines, phases of development, and projects continues to represent a key systems engineering challenge.
Systems engineering is gaining recognition across industries, academia and governments. However, SE practice varies across industries, organizations, and system types. Cross fertilization of systems engineering practices across industries has begun slowly but surely; however, the global need for systems capabilities has outpaced the progress in systems engineering.
INCOSE Vision 2025 concludes that SE is poised to play a major role in some of the global challenges of the 21st century, that it has already begun to change to meet these challenges and that it needs to undergo a more significant transformation to fully meet these challenges. The following bullet points are taken from the summary section of Vision 2025 and define the attributes of a transformed SE discipline in the future:
 Relevant to a broad range of application domains, well beyond its traditional roots in aerospace and defense, to meeting society's growing quest for sustainable system solutions to providing fundamental needs, in the globally competitive environment.
 Applied more widely to assessments of socio-physical systems in support of policy decisions and other forms of remediation.
 Comprehensively integrating multiple market, social and environmental stakeholder demands against
"end-to-end" life-cycle considerations and long-term risks.
 A key integrating role to support collaboration that spans diverse organizational and regional boundaries, and a broad range of disciplines.
 Supported by a more encompassing foundation of theory and sophisticated model-based methods and tools allowing a better understanding of increasingly complex systems and decisions in the face of uncertainty.
 Enhanced by an educational infrastructure that stresses systems thinking and systems analysis at all learning phases.
 Practiced by a growing cadre of professionals who possess not only technical acumen in their domain of application, but who also have mastery of the next generation of tools and methods necessary for the systems and integration challenges of the times.
Some of these future directions of SE are covered in the SEBoK. Others need to be introduced and fully integrated into the SE knowledge areas as they evolve. This KA will be used to provide an overview of these transforming aspects of SE as they emerge. This transformational knowledge will be integrated into all aspects of the SEBoK as it matures.

References
Works Cited
International Council on Systems Engineering (INCOSE). 2014. Systems Engineering Vision 2025, July, 2014; Available at http:/ / www. incose. org/ docs/ default-source/ aboutse/ se-vision-2025. pdf?sfvrsn=4. Accessed February 16.

Primary References
None.

Additional References
None.


Relevant Videos
 Leading the Transformation of Model-Based Engineering [1]

References
[1] https://www.youtube.com/watch?v=VRnNun2EH-o


Socio-technical Systems

 Lead Author:
 Erika Palmer
-
Though there are a few specific definitions, there are many ways in which the term "socio-technical system" is used depending on the specific engineering/scientific domain. There are also different approaches for considering socio-technical systems depending on the life cycle stage and the specific systems engineering challenge.

The Concept and Theory
The concept of a socio-technical system describes the interrelationship between humans and machines, and the motivation behind developing research on socio-technical systems was to cope with theoretical and practical work environment problems in industry (Ropohl, 1999).
Socio-technical systems theory has been developing over the past 60 years predominately focusing on new technology and work design (Davis et al., 2014). This theory has developed into socio-technical systems thinking, and research has concentrated in several key areas:
 Human factors and ergonomics (Carayon, 2006)
 Organizational design (Cherns, 1976)
 System design (Clegg, 2000; van Eijnatten, 1998)
 Information systems (Mumford, 2006)

A Design Approach
As a design approach -socio-technical systems design (STSD)-socio-technical systems bring human, social, organizational and technical elements in the design of organizational systems (Baxter and Sommerville, 2011). While Baxter and Sommerville (2011) refer to computer-based systems in their definition of socio-technical systems thinking as a design approach, the generic term "technical system" is also applicable: "The underlying premise of socio-technical systems thinking is that system design should be a process that takes into account both social and technical factors that influence the functionality and usage of computer-based systems" (p.4).

Systems Engineering Context
In a systems engineering context, it has been argued that all systems are socio-technical systems (Palmer, et al., 2019). However, socio-technical systems in a systems engineering context is not well defined though the topic has gained traction in recent years (Donaldson, 2017; Broniatowski, 2018). There are examples in systems engineering literature, where the term socio-technical systems is used to refer to a system where social and technical elements are relevant. These include studies of agent-based modeling of socio-technical systems (Heydari and Pennock, 2018), insurance systems as socio-critical systems (Yasui, 2011) and interdisciplinary systems engineering approaches to influence enterprise systems (Pennock and Rouse, 2016; Wang et al., 2018).


Based on the work that the systems engineering community has produced thus far, the working definition of the term socio-technical systems in a systems engineering context is simply:
Socio-technical systems: Systems operating at the intersection of social and technical systems (Kroes et al., 2006).

Modeling Sociotechnical Systems
There is no "state of the practice" for how to model sociotechnical systems. There are, however, a few examples in systems engineering literature of how systems engineers could analyze these types of systems. Outside systems engineering/engineering literature, there is an ever-increasing number of examples of social system models. The modeling techniques found in these examples can be adapted to evaluate sociotechnical systems in a systems engineering context. Many of these are system dynamics models, and there is a journal dedicated to social system analysis, called the Journal for Artificial Societies and Social Simulation (JASS), which focuses on agent-based modeling.
1) Qualitative Modeling
 Insurance systems as socio-critical systems (Yasui, 2011)
Yasui (2011) provides a new methodology to accommodate stakeholder goals in social system failures. This new methodology is a "soft" systems approach that brings together the Holon concept by Checkland and Scholes (1990) and the Vee Model.
2) Agent-Based Modeling of Sociotechnical Systems in Systems Engineering
 Agent-based modeling of sociotechnical systems (Heydari and Pennock, 2018)
Heydari and Pennock (2018) illustrate how to support the design and governance of sociotechnical systems with agent-based modeling (ABM). Critically, they outline the difference between how ABM is used in physical, natural and social applications versus sociotechnical applications.
 Interdisciplinary systems engineering approaches to influence enterprise systems (Pennock and Rouse, 2016) Pennock and Rouse (2016) not only provide how to define an enterprise as a system, but they also illustrate this with several ABM examples. They also highlight that when modeling sociotechnical systems versus traditional
engineering systems, it is important to focused less on "control" and more on "influence."
3) Economic modeling
 Social System Modeling Challenges (Wang et al., 2018)
In their book, Social Systems Engineering, Wang et al. (2018) provide an overview of not only modeling and its challenges in evaluating social systems, but they also give insight into how social system modeling is approached in economics.
4) System Dynamics Modeling of Social Systems for Adaptation in an SE Sociotechnical Context
 Social policy (Palmer, 2017)
Palmer (2017) provides an overview of social systems in a systems engineering context, and uses system dynamics modeling of pension and sick leave policy systems to illustrate how to use systems engineering methods for social policy.
 Social Systems Engineering (García-Díaz and Olaya, 2018)
García-Díaz and Olaya (2018) give not only a thorough overview in their book (called Social Systems Engineering) of social systems and various qualitative and quantitative modeling types, but they also highlight participatory system dynamics modeling (stakeholder-led system design).
 Health care (Homer and Hirsch, 2006)
As there is increasing attention in the systems engineering community towards health care technology, Homer and Hirsch's (2006) paper on system dynamics modeling of public health gives a basis for how to model social systems


in this domain. For example, chronic disease prevention, disease outcomes, health and risk behaviors, environmental factors, and health-related resources and delivery systems.

References
Works Cited
Baxter, G. and Sommerville, I., 2011. Socio-technical systems: From design methods to systems engineering. Interacting with computers, 23(1), pp.4-17.
Broniatowski, DA, 2018, 'Building the tower without climbing it: Progress in engineering systems', Systems Engineering, 21 (3), 259-81.
Carayon, P., 2006. 'Human factors of complex sociotechnical systems.' Applied ergonomics, 37(4), pp.525-535. Checkland, P. and Scholes, J. 1990. 'Soft systems methodology in action.' Wiley: UK.
Cherns, A., 1976. The principles of sociotechnical design. Human relations, 29(8), pp.783-792.
Clegg, C.W., 2000. Sociotechnical principles for system design. Applied ergonomics, 31(5), pp.463-477.
Davis, M.C., Challenger, R., Jayewardene, D.N. and Clegg, C.W., 2014. Advancing socio-technical systems thinking: A call for bravery. Applied ergonomics, 45(2), pp.171-180.
Donaldson, W, 2017. 'In Praise of the "Ologies": A Discussion of and Framework for Using Soft Skills to Sense and Influence Emergent Behaviors in Sociotechnical Systems', Systems Engineering, 20 (5), 467-78.
Heydari, B and Pennock, MJ, 2018, 'Guiding the behavior of sociotechnical systems: The role of agent-based modeling', Systems Engineering, 21 (3),210-26.
Homer, JB and Hirsch, GB, 2006, 'System dynamics modeling for public health: background and opportunities', American journal of public health, 96 (3), 452-458.
Kroes, P, Franssen, M, Poel, IVD and Ottens M, 2006, 'Treating socio-technical systems as engineering systems: some conceptual problems', Systems Research and Behavioral Science, 23 (6), 803-814.
Palmer, E, 2017, 'Systems Engineering Applied to Evaluate Social Systems: Analyzing Systemic Challenges to the Norwegian Welfare State.' University of Bergen: Norway.
Palmer, E, Presland, I, Rhodes, D, Olaya, C, Haskins, C, Glazner, C, 2019, 'Social Systems-Where Are We and Where Do We Dare to Go?' Panel Discussion. 29th Annual INCOSE Symposium, Orlando, Florida
Pennock, MJ and Rouse WB, 2016, 'The epistemology of enterprises', Systems Engineering, 19 (1), 24-43.
Ropohl, G., 1999. Philosophy of socio-technical systems. Society for Philosophy and Technology Quarterly Electronic Journal, 4(3), pp.186-194.
van Eijnatten, F.M., 1998. Developments in socio-technical systems design (STSD). P. J. Drenth, H. Thierry, & CJ de Wolff, Handbook of Work and Organizational Psychology, 2, pp.61-80.
Wang, H, Li, S and Wang, Q, 2018. 'Introduction to Social Systems Engineering.' Springer: US.
Yasui, T, 2011, 'A new systems engineering approach for a Socio-Critical System: A case study of claims-payment failures of Japan's insurance industry,' Systems Engineering, 14 (4), 349-63


Primary References
None.

Additional References
None.

Artificial Intelligence

 Lead Authors:
 Barclay Brown, Tom McDermott, Rael Kopace, Ramakrishnan Raman, Ali Raz, and Kevin Robinson
-
This article provides an overview and definitions of artificial intelligence and machine learning and their importance to and relationships with systems engineering.

Introduction
Artificial Intelligence (AI) is perhaps best defined as the ability of a system to exhibit behavior, which if exhibited by a human being, would be considered intelligent. It's the ability of a machine to process and learn from data, to recognize and understand patterns, to solve problems, and make decisions autonomously. The term "Artificial Intelligence" dates to the early 1950s where it was first introduced to mimic human-level intelligence capabilities in software and hardware systems-a goal which still is far from reachable in the near future despite the rapid technological advancement in the AI field . It is important for systems engineers to note that "AI" does not designate a specific technology-intelligent behavior can be implemented in a system in a number of ways, including conventional software or hardware logic. Modern systems that use AI fall into two major categories: systems where the decision-making logic is explicitly pre-programmed, and systems where the decision-making capability is learned from data. This latter category, known as Machine Learning (ML), is the predominant category for the modern paradigm shift in capabilities enabled by AI.

Machine Learning Foundations of AI
ML builds its foundation from statistics and computer science disciplines, accelerated by the advances in computational power and memory offered by modern hardware systems (i.e., CPUs and GPUs). The ever-increasing number of ML algorithms available today can be classified into three major categories of Supervised, Unsupervised, and Reinforcement learning.
 Supervised Learning is where labelled input-output datasets are available and ML algorithms learn the mapping between input-output pairs presented in the datasets (for example, learning from clearly labelled pictures of cars and tanks)
 Unsupervised Learning is where the labels in data sets are not available and the ML algorithms learn the grouping or clustering of input and outputs (for example, identifying common customer attributes, classifying spam email, or detecting fraudulent transactions)
 Reinforcement Learning is where an AI agent trains itself to make decisions to effect a positive change in the environment based on a defined reward function (e.g., training a robot to avoid obstacles by penalizing crashes)
The implementation approaches for all ML types require large datasets and can be based on statistical models or neural networks including Deep Neural Networks (DNNs). Irrespective of the implementation approaches and the type of ML, the workflow for deploying an ML-based AI solution remains largely common and is shown in Figure 1 (details on each of these steps can be found in the Digital Transformation book by Thomas Siebel).


Figure 1 A typical ML Workflow
Understanding the subtleties of statistical models and neural networks for ML implementation along with the related workflow will become imperative for systems engineers as they begin to incorporate ML solutions in systems and perform systems engineering activities for AI systems.

Systems Engineers and AI
Given the holistic nature of the systems engineering discipline, it is practical to think about AI and its role in the larger context of digital transformation, which can be defined as the confluence of big data, cloud computing, AI and Internet of Things (IoT). Digital transformation is enabling organizations to evolve their business and operational models. As such most organizations are collecting vast amounts of data pertaining to their business, operations, systems, customers, and personnel. Big data has created the conditions that necessitate the application of AI solutions supported by the technological advancements in computational power and memory to aid in the analysis of big data and the automation of labor intensive and time-consuming processes.
The ability to collaborate and communicate with data scientists, AI engineers, cloud computing specialists, application developers, and other experts is becoming a necessity for many systems engineers. Systems engineers must become sufficiently knowledgeable and familiar with as many elements of the digital transformation ecosystem as possible to best serve the needs of the organization and its mission in order to identify the areas of business or the systems that would most benefit from the application of AI. Understanding the benefits as well as the potential pitfalls of an AI development initiatives is also important. To that end, systems engineers must be able to identify the right requirements and architectures, expertise, partnering organizations, technology stack, development platforms, and other relatable elements. The roles and responsibilities of systems engineers versus data scientists, data engineers, application developers, and AI engineers must be differentiated. The market is filled with an ever-growing number of AI platforms and it is virtually impossible for a non-data scientist to be able to master each of them. Moreover, the advances in the AI domain happen at such a rapid pace that nowadays many companies may choose to avoid investing in their own internal data science teams to develop AI solutions. Instead, they can purchase or license models that are ready for implementation from companies that have solved similar problems before. Additionally, there exist unified platforms that aim to standardize workflows and come equipped with the appropriate technology stack to collect, label, and feed data into supervised learning models or alternatively assist with the development of models.
As a result, rather than mirroring the roles and responsibilities of data scientists and other AI domain professionals, it is beneficial for most systems engineering professionals to develop an understanding at various degrees of depth of the relevant technologies that support and are used to create AI applications including but not limited to the following:
 Data integration
 Relational and non-relational databases
 Cloud storage
 Enterprise architecture infrastructure and APIs
 ML learning frameworks
 Batch and online processing
 Executable environments
 Commonly used programming languages
 UI and data visualization tools


Systems Engineering and AI: SE4AI and AI4SE
At an early 2019 Future of Systems Engineering (FuSE) workshop hosted by the International Council on Systems Engineering (INCOSE), the terms AI for SE and SE for AI were first used to describe the dual transformation envisioned for both the SE and AI disciplines. The "AI4SE" and "SE4AI" labels have quickly become symbols for an upcoming rapid evolutionary phase in the SE community. SE's Digital Engineering transformation will enable both transformation of SE practices using AI for SE and drive the need for new systems engineering practices that support a new wave of automated, adaptive, and learning systems, termed SE for AI. AI4SE applies AI and ML techniques to improve human-driven engineering practices. This goal of "augmented intelligence" includes outcomes such as achieving scale in model construction and efficiency in designing space exploration systems. SE4AI applies SE methods to the design and operation of intelligent systems, with outcomes such as improved safety, security, ethics, etc.
Systems engineers have long sought to evolve engineered systems to include human-like intelligence, thinking, and autonomous decision-making. In many cases, the inclusion of intelligent capabilities means increasing non-determinism in the system's behavior, exponentially increasing complexity in the design, verification, and validation of such systems. The initial approaches of inculcating intelligence predominantly involved human-in-the-loop for capturing knowledge from experts, codifying it in some form that is machine understandable (for instance, a "knowledge database"), and enabling the system to interpret the codified knowledge so as to make the required optimal decisions and exhibit the desired intelligent behavior. These initial approaches involved human-in-the loop for the entire gamut of activities from capturing the knowledge and codifying the knowledge to enabling (programming) the system to leverage the knowledge.
More recent contemporary approaches represent the next evolution of inculcating intelligence in systems, wherein the human gathers the required data and programs the system such that the system can learn/build the knowledge from the data provided by the human. Learning from data requires significant computing resources (processing power and memory) but recent advances have expanded the availability of large amounts of both source data and matching computing resources to enable intensive processing and learning from data. Recent ML algorithms are the result of this evolution. The system learns during the design and development phases and is expected to demonstrate limited forms of adaptive behavior.
In both approaches, a human is in the loop to validate the intelligence gained by the system, and to make a conscious decision to deploy the intelligence in the system. The next evolution is expected to be predominantly based on a system learning from the other systems it interacts with (machine-to-machine learning) and building its intelligence from the interactions and from the ecosystem (cloud). Evolution in that direction is as seen by some of the recent progress made in reinforcement learning models and algorithms. The system learns by trial-and-error and once it meets performance expectations, can apply its behavior on a larger scale.
The augmented intelligence scenarios described above will need an underlying and synergistic foundation of both SE4AI and AI4SE which are briefly described in the following subsections.

SE4AI: Addressing Practical Implementation Challenges for AI
The increasing application of AI in systems presents challenges for both the systems engineering community and the AI community. Their common goal is to ensure that the future users of the system can be certain that the behavior and performance of that system is what is needed. That is, the AI system's behavior is verified through a set of activities that check its compliance against system requirements and validate it for fitness to meet user needs. The need for verification and validation presents a challenge for the engineering of AI systems as the failure modes observed in AI systems are different and may not be adequately addressed by traditional Systems Engineering life-cycle approaches. From a systems engineering lifecycle perspective, appropriate tailoring of conventional processes is needed to "engineer" a system that is intelligent-a system that learns during development and is designed for adaptive behavior. New approaches are required for developing requirements, evaluating when these


intelligent systems are ready for operations, and for ensuring their adaptive behavior is safe and produces the desired outcomes. The data required for enabling a system to acquire the desired intelligence poses several challenges from being biased (inculcating a biased intelligence reflected in the system's behavior) to not being representative of the various use case scenarios envisaged for the system. The system's intelligence is only as good as the data that was used to train it. There are many considerations pertaining to the broader challenge of engineering safe and effective human interaction with intelligent systems. These include (a) leveraging cognitive strengths of humans and AI, (b) gaining trust, (c) explainable intelligence (d) identifying and understanding bias, and (e) dealing with uncertainty.
Broadly there are three key challenges for the systems engineering of intelligent systems:
1. New failure modes not previously experienced in the engineering of systems. The AI community recognizes that there are there are five main failure modes that cause the AI systems to not behave safely and as expected. These new failure modes include negative side effects, reward hacking, scalable oversight, unsafe exploration, and distributional shift .
2. The unpredictability of performance due to non-deterministic and evolving behavior. ML systems initially learn from predetermined data and through the activity of validation, system engineers check the compliance of the system performance against its intended purpose, captured in a Systems Specification. The challenge with AI, and specifically ML, is predicting the performance and behaviour of the AI algorithm on unseen data in future operations. ML systems exhibit non-deterministic performance, with the performance of some systems evolving as the system learns (changes performance) during operations. This presents challenges in validating system compliance before the system enters operations.
3. Lack of trust and robustness in future systems performance. System validation is based on a basic four step approach: obtaining results from a validation test, comparing the measured results to expect results, deducing the degree of compliance, and deciding on the acceptability of this compliance. A key aspect in deciding the acceptability of compliance is expert judgement. Expert judgement requires an understanding of the result as compared to the relevance of the context of use, and therefore the results need to be explainable. Explainable behaviour of AI Systems is problematic, and therefore determining a level of trust and robustness in future systems performance is challenging.

AI4SE: Leveraging AI to Advance State-of-the-Art in Systems Engineering
The next evolution of SE practices is expected to be predominantly driven by AI technologies assisting systems engineers in the engineering development lifecycle activities. AI4SE addresses how AI can enhance the systems engineering lifecycle for engineered systems, across the various lifecycle phases including concept development, requirements, architecture design, implementation, integration, verification, validation, and deployment. Enhancing and assisting systems engineering processes, methods, and tools, with tangible impacts on the quality of the engineered system as well as on the cycle time for the various life cycle activities, would be some of the primary focus areas of AI4SE. For instance, AI technologies can be leveraged to advise system architects on the various architecture and design decisions options based on intelligence built from collective prior experience of decisions made in earlier systems. A second example is leveraging AI technologies to assist in arriving at various corner test cases during verification. Historical systems engineering life cycle data would be the predominant drivers for the use of AI for such applications. A third example would pertain to the simulation aspects, where digital and synthetic environments (e.g., digital twins) are leveraged to understand various lifecycle operation scenarios and providing better insights to systems engineers on understanding the implications of architecture design decisions on the engineered systems. However, some forms of distinction are being envisaged in the community between AI4SE as against automation, digitization and digital linking of various SE life cycle artifacts and work products. While automation and digitization activities may be enhanced by AI, these activities may still be dominated by conventional software, with outcomes focused on significant reduction in life cycle time and efficiency on managing scale.


Landscape of AI Applications in Industry and Systems
Over the last few decades, ML-based solutions have become ubiquitous in technical and social systems and have enabled new business opportunities and even new business models. The rapid commercialization of AI is bringing profound changes to all markets. Capabilities are advancing and it is becoming easier to develop and implement AI solutions given the growing number of AI tools and platforms. Organizations in every industry segment are increasingly realizing that AI is key to market leadership and that they all have processes that are suited for AI. Early adopters of AI have noticed significant tangible benefits and given the lower barriers of entry that exist nowadays, others are making significant investments to accelerate their AI adoption.
AI is being integrated into the fabric of business and systems and AI solutions are being deployed to solve a wide spectrum of use cases at every layer of the enterprise. The following table provides examples of AI applications across the different fields and sectors.
Domain	General examples of AI usage

Sales	Price optimization, forecasting, performance management, dynamic recommendations (think Amazon, Netflix making product and movie
recommendations)
[Ref: https://hbr.org/2018/07/how-ai-is-changing-sales]

Security	Breach risk prediction, incident response, early identification and classification of cyber threats [Ref: https://www.ibm.com/case-studies/cargills-bank-ltd]
Anti-fraud	Identification of fraudulent behavior and transactions
[Ref: https://www.fico.com/blogs/5-keys-using-ai-and-machine-learning-fraud-detection]

HR	Candidate assessment, screening time reduction, skills to jobs alignment
[Ref: https://www.forbes.com/sites/jeannemeister/2019/01/08/ten-hr-trends-in-the-age-of-artificial-intelligence/?sh=426c0c7d3219]

Marketing	Programmatic advertising for target audiences, behavior analysis, interactive marketing through chatbots
[Ref:
https://www.forbes.com/sites/forbesagencycouncil/2019/08/21/how-artificial-intelligence-is-transforming-digital-marketing/?sh=46ae38e021e1
]

Personal	Control smart home objects, interact with the web and provide answers to questions, manage calendar Assistant
Smart tools	Smart thermostats, doorbells, home security system, baby monitor, real time language translation
[Ref: https://www.pcmag.com/news/the-best-smart-home-devices-for-2020]

Finance	Automated financial trading and trade validation to protect from obvious errors and irrational price swings, identification and management of
risk based on user history, classification of loan and credit applications
[Ref: https://builtin.com/artificial-intelligence/ai-finance-banking-applications-companies]

Healthcare	Assisted diagnostic medical imaging, management and accuracy check of electronic medical records, disease risk prevention, personalized
health management
[Ref: https://www2.deloitte.com/cn/en/pages/technology-media-and-telecommunications/articles/global-ai-development-white-paper.html]

Education	Virtual adaptive teaching and learning, curriculum personalization, virtual tutor
[Ref: https://medium.com/towards-artificial-intelligence/artificial-intelligence-in-education-benefits-challenges-and-use-cases-db52d8921f7a]

Autonomous	Real time sensor data processing, dynamic path planning, auto health monitoring, route optimization, real time traffic monitoring Driving		[Ref: https://www.embedded.com/the-role-of-artificial-intelligence-in-autonomous-vehicles/]
Retail	Smart inventory, demand forecasting, smart logistics, unmanned store, automated customer service inquiries through chatbots
[Ref: ]

Manufacturing	Quality and safety checks, improving yield and performance, failure mode prediction, predictive maintenance, adaptive design, energy
saving, production forecasting
[Ref: https://www2.deloitte.com/cn/en/pages/technology-media-and-telecommunications/articles/global-ai-development-white-paper.html]


Media	Personalized media content, content discovery, real time fact checking, identifying false content [Ref: https://neoteric.eu/blog/10-use-cases-of-ai-in-manufacturing/]
Government	Non-compliant behavior and tax evasion, policy checks, citizen assistance chatbots, emergency and disaster resource identification and and Legal		monitoring, automated due diligence on background information, legal analytics, content generation
[Ref: https://emerj.com/ai-sector-overviews/ai-in-law-legal-practice-current-applications/]

Agriculture	Pest monitoring, crop return prediction, optimizing yield, monitoring and managing closed environment, weather forecasting [Ref: https://www.intel.com/content/www/us/en/big-data/article/agriculture-harvests-big-data.html]
Logistics		Predictive supply chain network management, demand and capacity planning, route optimization, [Ref: dhl.com/content/dam/dhl/global/core/documents/pdf/glo-core-trend-report-artificial-intelligence.pdf]
Oil and Gas	Oil seep detection with robots, precision drilling, temperature and pressure monitoring, predictive maintenance
[Ref: https://www.sparkcognition.com/top-4-ai-applications-oil-gas-industry/]


Acknowledgements
The article is provided by INCOSE's AI working group and includes summarized sections from the AI Primer for Systems Engineers which is currently under development. The AI Primer for Systems Engineers will provide a broader view of AI discipline and its implication for Systems Engineering. The AI working group would like to acknowledge (in alphabetical order) Barclay Brown, Tom McDermott, Rael Kopace, Ramakrishnan Raman, Ali Raz, and Kevin Robinson for their contributions to this article.

References
Works Cited
Ammanath, B., Jarvis, D. and Hupfer, S., 2021. Thriving in the era of pervasive AI. [online] Deloitte Insights. Available	at:
<https://www2.deloitte.com/us/en/insights/focus/cognitive-technologies/state-of-ai-and-intelligent-automation-in-business-survey.ht [Accessed 23 April 2021].
Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J., & Mané, D. (2016). Concrete problems in AI safety. arXiv preprint arXiv:1606.06565.
Jordan, Michael I. "Artificial intelligence-the revolution hasn't happened yet." Harvard Data Science Review 1.1 (2019).
Sharma, M., 2021. Navigating the New Landscape of AI Platforms. [online] Harvard Business Review. Available at:
<https://hbr.org/2020/03/navigating-the-new-landscape-of-ai-platforms> [Accessed 23 April 2021].
Siebel, Thomas M. Digital transformation: survive and thrive in an era of mass extinction. Rosetta Books, 2019. TechRepublic.	2021.	10	ways	data	and	analytics	will	impact	businesses.	[online]	Available	at:
<https://www.techrepublic.com/article/10-ways-data-and-analytics-will-impact-businesses/> [Accessed 23 April 2021].


Primary References
Siebel, Thomas M. Digital transformation: survive and thrive in an era of mass extinction. Rosetta Books, 2019.

Additional References
None.

Verification and Validation of Systems in Which AI is a Key Element

 Lead Author:
 Laura Pullum
-
Many systems are being considered in which artificial intelligence (AI) will be a key element. Failure of an AI element can lead to system failure (Dreossi et al 2017), hence the need for AI verification and validation (V&V). The element(s) containing AI capabilities is treated as a subsystem and V&V is conducted on that subsystem and its interfaces with other elements of the system under study, just as V&V would be conducted on other subsystems. That is, the high-level definitions of V&V do not change for systems containing one or more AI elements.
However, AI V&V challenges require approaches and solutions beyond those for conventional or traditional (those without AI elements) systems. This article provides an overview of how machine learning components/subsystems "fit" in the systems engineering framework, identifies characteristics of AI subsystems that create challenges in their V&V, illuminates those challenges, and provides some potential solutions while noting open or continuing areas of research in the V&V of AI subsystems.


Overview of V&V for AI-based Systems
Conventional systems are engineered via 3 overarching phases, namely, requirements, design and V&V. These phases are applied to each subsystem and to the system under study. As shown in Figure 1, this is the case even if the subsystem is based on AI techniques.

AI-based systems follow a different lifecycle than do traditional systems. As shown in the general machine learning life cycle illustrated in Figure 2, V&V activities occur throughout the life cycle. In addition to requirements allocated to the AI subsystem (as is the case for conventional subsystems), there also may be requirements for data that flow up to the system from the AI subsystem.



Characteristics of AI Leading to V&V Challenges
Though some aspects of V&V for conventional systems can be used without modification, there are important characteristics of AI subsystems that lead to challenges in their verification and validation. In a survey of engineers, Ishikawa and Yoshioka (2019) identify attributes of machine learning that make the engineering of same difficult. According to the engineers surveyed, the top attributes with a summary of the engineers' comments are:
 Lack of an oracle: It is difficult or impossible to clearly define the correctness criteria for system outputs or the right outputs for each individual input.
 Imperfection: It is intrinsically impossible to for an AI system to be 100% accurate.
 Uncertain behavior for untested data: There is high uncertainty about how the system will behave in response to untested input data, as evidenced by radical changes in behavior given slight changes in input (e.g., adversarial examples).
 High dependency of behavior on training data: System behavior is highly dependent on the training data. These attributes are characteristic of AI itself and can be generalized as follows:
 Erosion of determinism
 Unpredictability and unexplainability of individual outputs (Sculley et al., 2014)
 Unanticipated, emergent behavior, and unintended consequences of algorithms
 Complex decision making of the algorithms
 Difficulty of maintaining consistency and weakness against slight changes in inputs (Goodfellow et al., 2015)

V&V Challenges of AI Systems
Requirements
Challenges with respect to AI requirements and AI requirements engineering are extensive and due in part to the practice by some to treat the AI element as a "black box" (Gunning 2016). Formal specification has been attempted and has shown to be difficult for those hard-to-formalize tasks and requires decisions on the use of quantitative or Boolean specifications and the use of data and formal requirements. The challenge here is to design effective methods to specify both desired and undesired properties of systems that use AI- or ML-based components (Seshia 2020).
A taxonomy of AI requirements engineering challenges, outlined by Belani and colleagues (2019), is shown in Table 1.

Table 1: Requirements engineering for AI (RE4AI) taxonomy, mapping challenges to AI-related entities and requirements engineering activities (after (Belani et al., 2019))
RE4AI	AI Related Entities
 RE Activities		Data		Model		System Elicitation	- Availability of large datasets	- Lack of domain knowledge	- How to define problem /scope
- Requirements analyst upgrade	- Undeclared consumers	- Regulation (e.g., ethics) not clear

Analysis	- Imbalanced datasets, silos	- No trivial workflows	- No integration of end results
- Role: data scientist needed	- Automation tools needed	- Role: business analyst upgrade

Specification	- Data labelling is costly, needed  - No end-to-end pipeline support - Avoid design anti- patterns
- Role: data engineer needed	- Minimum viable model useful  - Cognitive / system architect needed

Validation	- Training data critical analysis	- Entanglement, CACE problem  - Debugging, interpretability
- Data dependencies	- High scalability issues for ML  - Hidden feedback loops


Management	- Experiment management	- Difficult to log and reproduce	- IT resource limitations, costs
- No GORE-like method polished - DevOps role for AI needed	- Measuring performance

Documentation - Data & model visualization	- Datasets and model versions	- Feedback from end-users
- Role: research scientist useful	- Education and training of staff  - Development method

All of the Above - Data privacy and data safety
- Data dependencies

CACE: change anything, change everything GORE: goal-oriented requirements engineering
Data
Data is the life-blood of AI capabilities given that it is used to train and evaluate AI models and produce their capabilities. Data quality attributes of importance to AI include accuracy, currency and timeliness, correctness, consistency, in addition to usability, security and privacy, accessibility, accountability, scalability, lack of bias and others. As noted above, the correctness of unsupervised methods is embedded in the training data and the environment.
There is a question of coverage of the operational space by the training data. If the data does not adequately cover the operational space, the behavior of the AI component is questionable. However, there are no strong guarantees on when a data set it 'large enough'. In addition, 'large' is not sufficient. The data must sufficiently cover the operational space.
Another challenge with data is that of adversarial inputs. Szegedy et al. (2014) discovered that several ML models are vulnerable to adversarial examples. This has been shown many times on image classification software, however, adversarial attacks can be made against other AI tasks (e.g., natural language processing) and against techniques other than neural networks (typically used in image classification) such as reinforcement learning (e.g., reward hacking) models.

Model
Numerous V&V challenges arise in the model space, some of which are provided below.
 Modeling the environment: Unknown variables, determining the correct fidelity to model, modeling human behavior. The challenge problem is providing a systematic method of environment modeling that allows one to provide provable guarantees on the system's behavior even when there is considerable uncertainty about the environment. (Seshia 2020)
 Modeling learning systems: Very high dimensional input space, very high dimensional parameter or state space, online adaptation/evolution, modeling context (Seshia 2020).
 Design and verification of models and data: data generation, quantitative verification, compositional reasoning, and compositional specification (Seshia 2020). The challenge is to develop techniques for compositional reasoning that do not rely on having complete compositional specifications (Seshia 2017).
 Optimization strategy must balance between over- and under-specification. One approach, instead of using distance (between predicted and actual results) measures, uses the cost of an erroneous result (e.g., an incorrect classification) as a criterion (Faria, 2018) (Varshney, 2017).
 Online learning: requires monitoring; need to ensure its exploration does not result in unsafe states.
 Formal methods: intractable state space explosion from complexity of the software and the system's interaction with its environment, an issue with formal specifications.
 Bias in algorithms from underrepresented or incomplete training data OR reliance on flawed information that reflects historical inequities. A biased algorithm may lead to decisions with collective disparate impact. Trade-off between fairness and accuracy in the mitigation of an algorithm's bias.


 Test coverage: effective metrics for test coverage of AI components is an active area of research with several candidate metrics, but currently no clear best practice.

Properties
Assurance of several AI system properties is necessary to enable trust in the system, e.g., the system's trustworthiness. This is a separate though necessary aspect of system dependability for AI systems. Some important properties are listed below and though extensive, are not comprehensive.
 Accountability: refers to the need of an AI system to be answerable for its decisions, actions and performance to users and others with whom the AI system interacts
 Controllability: refers to the ability of a human or other external agent to intervene in the AI system's functioning
 Explainability: refers to the property of an AI system to express important factors influencing the AI system results or to provide details/reasons behind its functioning so that humans can understand
 Interpretability: refers to the degree to which a human can understand the cause of a decision (Miller 2017)
 Reliability: refers to the property of consistent intended behavior and results
 Resilience: refers to the ability of a system to recover operations quickly following an incident
 Robustness: refers to the ability of a system to maintain its level of performance when errors occur during execution and to maintain that level of performance given erroneous inputs and parameters
 Safety: refers to the freedom from unacceptable risk
 Transparency: refers to the need to describe, inspect and reproduce the mechanisms through which AI systems make decisions, communicating this to relevant stakeholders.

V&V Approaches and Standards
V&V Approaches
Prior to the proliferation of deep learning, research on V&V of neural networks touched on adaptation of available standards, such as the then-current IEEE Std 1012 (Software Verification and Validation) processes (Pullum et al. 2007), areas need to be augmented to enable V&V (Taylor 2006), and examples of V&V for high-assurance systems with neural networks (Schumann et al., 2010). While these books provide techniques and lessons learned, many of which remain relevant, additional challenges due to deep learning remain unsolved.
One of the challenges is data validation. It is vital that the data upon which AI depends undergo V&V. Data quality attributes that are important for AI systems include accuracy, currency and timeliness, correctness, consistency, usability, security and privacy, accessibility, accountability, scalability, lack of bias, and coverage of the state space. Data validation steps can include file validation, import validation, domain validation, transformation validation, aggregation rule and business validation (Gao et al. 2011).
There are several approaches to V&V of AI components, including formal methods (e.g., formal proofs, model checking, probabilistic verification), software testing, simulation-based testing and experiments. Some specific approaches are:
 Metamorphic testing to test ML algorithms, addressing the oracle problem (Xie et al., 2011)
 A ML test score consisting of tests for features and data, model development and ML infrastructure, and monitoring tests for ML (Breck et al., 2016)
 Checking for inconsistency with desired behavior and systematically searching for worst-case outcomes when testing consistency with specifications.
 Corroborative verification (Webster et al., 2020), in which several verification methods, working at different levels of abstraction and applied to the same AI component, may prove useful to verification of AI components of systems.


 Testing against strong adversarial attacks (Useato, 2018); researchers have found that models may show robustness to weak adversarial attacks and show little to no accuracy to strong attacks (Athalye et al., 2018, Uesato et al., 2018, Carlini and Wagner, 2017).
 Use of formal verification to prove that models are consistent with specifications, e.g., (Huang et al., 2017).
 Assurance cases combining the results of V&V and other activities as evidence to support claims on the assurance of systems with AI components (Kelly and Weaver, 2004; Picardi et al. 2020).

Standards
Standards development organizations (SDO) are earnestly working to develop standards in AI, including the safety and trustworthiness of AI systems. Below are just a few of the SDOs and their AI standardization efforts.
ISO is the first international SDO to set up an expert group to carry out standardization activities for AI. Subcommittee (SC) 42 is part of the joint technical committee ISO/IEC JTC 1. SC 42 has a working group on foundational standards to provide a framework and a common vocabulary, and several other working groups on computational approaches to and characteristics of AI systems, trustworthiness, use cases, applications, and big data. (https://www.iso.org/committee/6794475.html)
The IEEE P7000 series of projects are part of the IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems, launched in 2016. IEEE P7009, "Fail-Safe Design of Autonomous and Semi-Autonomous Systems" is one of 13 standards in the series. (https://standards.ieee.org/project/7009.html)
Underwriters Laboratory has been involved in technology safety for 125 years and has released ANSI/UL 4600
"Standard for Safety for the Evaluation of Autonomous Products". (https://ul.org/UL4600)
The SAE G-34, Artificial Intelligence in Aviation, Committee is responsible for creating and maintaining SAE Technical Reports, including standards, on the implementation and certification aspects related to AI technologies inclusive of any on or off-board system for the safe operation of aerospace systems and aerospace vehicles. (https:// www.sae.org/works/committeeHome.do?comtID=TEAG34)

References
Works Cited
Belani, Hrvoje, Marin Vukovic, and eljka Car. Requirements Engineering Challenges in Building AI-Based Complex Systems. 2019. IEEE 27th International Requirements Engineering Conference Workshops (REW).
Breck, Eric, Shanqing Cai, Eric Nielsen, Michael Salib and D. Sculley. What's your ML Test Score? A Rubric for ML Production Systems. 2016. 30th Conference on Neural Information Processing Systems (NIPS 2016), Barcelona Spain.
Daume III, Hal, and Daniel Marcu. Domain adaptation for statistical classifiers. Journal of Artificial Intelligence Research, 26:101-126, 2006.
Dreossi, T., A. Donzé, S.A. Seshia. Compositional falsification of cyber-physical systems with machine learning components. In Barrett, C., M. Davies, T. Kahsai (eds.) NFM 2017. LNCS, vol. 10227, pp. 357-372. Springer, Cham (2017). https://doi.org/10.1007/978-3-319-57288-8_26
Faria, José M. Machine learning safety: An overview. In Proceedings of the 26th Safety-Critical Systems Symposium, York, UK, February 2018.
Farrell, M., Luckcuck, M., Fisher, M. Robotics and Integrated Formal Methods. Necessity Meets Opportunity. In:
Integrated Formal Methods. pp. 161-171. Springer (2018).
Gao, Jerry, Chunli Xie, and Chuanqi Tao. 2016. Big Data Validation and Quality Assurance - Issues, Challenges and Needs. 2016 IEEE Symposium on Service-Oriented System Engineering (SOSE), Oxford, UK, 2016, pp.


433-441, doi: 10.1109/SOSE.2016.63.
Gleirscher, M., Foster, S., Woodcock, J. New Opportunities for Integrated Formal Methods. ACM Computing Surveys 52(6), 1-36 (2020).
Goodfellow, Ian, J. Shlens, C. Szegedy. Explaining and harnessing adversarial examples. In International Conference on Learning Representations (ICLR), May 2015.
Gunning, D. Explainable Artificial Intelligence (XAI). In IJCAI 2016 Workshop on Deep Learning for Artificial Intelligence (DLAI), July 2016.
Huang, X., M. Kwiatkowska, S. Wang, and M. Wu. Safety Verification of deep neural networks. In. Majumdar, R., and V. Kuncak (eds.) CAV 2017. LNCS, vol. 10426, pp. 3-29. Springer, Cham (2017). https://doi.org/10.1007/978-3-319-63387-9_1
Ishikawa, Fuyuki and Nobukazu Yoshioka. How do Engineers Perceive Difficulties in Engineering of Machine-Learning Systems? - Questionnaire Survey. 2019 IEEE/ACM Joint 7th International Workshop on Conducting Empirical Studies in Industry (CESI) and 6th International Workshop on Software Engineering Research and Industrial Practice (SER&IP) (2019)
Jones, Cliff B. Tentative steps toward a development method for interfering programs. ACM Transactions on Programming Languages and Systems (TOPLAS), 5(4):596-619, 1983.
Kelly, T., and R. Weaver. The goal structuring notation - a safety argument notation. In Dependable Systems and Networks 2004 Workshop on Assurance Cases, July 2004.
Klein, G., Andronick, J., Fernandez, M., Kuz, I., Murray, T., Heiser, G. Formally verified software in the real world.
Comm. of the ACM 61(10), 68-77 (2018).
Kuwajima, Hiroshi, Hirotoshi Yasuoka, and Toshihiro Nakae. Engineering problems in machine learning systems.
Machine Learning (2020) 109:1103-1126. https://doi.org/10.1007/s10994-020-05872-w
Lwakatare, Lucy Ellen, Aiswarya Raj, Ivica Crnkovic, Jan Bosch, and Helena Holmström Olsson. Large-scale machine learning systems in real-world industrial settings: A review of challenges and solutions. Information and Software Technology 127 (2020) 106368
Luckcuck, M., Farrell, M., Dennis, L.A., Dixon, C., Fisher, M. Formal Specification and Verification of Autonomous Robotic Systems: A Survey. ACM Computing Surveys 52(5), 1-41 (2019).
Marijan, Dusica and Arnaud Gotlieb. Software Testing for Machine Learning. The Thirty-Fourth AAAI Conference on Artificial Intelligence (AAAI-20) (2020)
Miller, Tim. Explanation in artificial intelligence: Insights from the social sciences. arXiv Preprint arXiv:1706.07269. (2017).
Pei, K., Y. Cao, J Yang, and S. Jana. DeepXplore: automated whitebox testing of deep learning systems. In The 26th Symposium on Operating Systems Principles (SOSP 2017), pp. 1-18, October 2017.
Picardi, Chiara, Paterson, Colin, Hawkins, Richard David et al. (2020) Assurance Argument Patterns and Processes for Machine Learning in Safety-Related Systems. In: Proceedings of the Workshop on Artificial Intelligence Safety (SafeAI 2020). CEUR Workshop Proceedings, pp. 23-30.
Pullum, Laura L., Brian Taylor, and Marjorie Darrah, Guidance for the Verification and Validation of Neural Networks, IEEE Computer Society Press (Wiley), 2007.
Rozier, K.Y. Specification: The Biggest Bottleneck in Formal Methods and Autonomy. In: Verified Software. Theories, Tools, and Experiments. pp. 8-26. Springer (2016).
Schumann, Johan, Pramod Gupta and Yan Liu. Application of neural networks in High Assurance Systems: A Survey. In Applications of Neural Networks in High Assurance Systems, Studies in Computational Intelligence, pp. 1-19. Springer, Berlin, Heidelberg, 2010.


Sculley, D., Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips, Dietmar Ebner, Vinay Chaudhary, Michael Young, Jean-François Crespo, and Dan Dennison. Machine Learning: the high interest credit card of technical debt. In NIPS 2014 Workshop on Software Engineering for Machine Learning (SE4ML), December 2014.
Seshia, Sanjit A. Compositional verification without compositional specification for learning-based systems. Technical Report UCB/EECS-2017-164, EECS Department, University of California, Berkeley, Nov 2017.
Seshia, Sanjit A., Dorsa Sadigh, and S. Shankar Sastry. Towards Verified Artificial Intelligence. arXiv:1606.08514v4 [cs.AI] 23 Jul 2020.
Szegedy, Christian, Zaremba, Wojciech, Sutskever, Ilya, Bruna, Joan, Erhan, Dumitru, Goodfellow, Ian J., and Fergus, Rob. Intriguing properties of neural networks. ICLR, abs/1312.6199, 2014b. URL http://arxiv.org/abs/1312.6199.
Taylor, Brian, ed. Methods and Procedures for the Verification and Validation of Artificial Neural Networks, Springer-Verlag, 2005.
Thompson, E. (2007). Mind in life: Biology, phenomenology, and the sciences of mind. Cambridge, MA: Harvard University Press.
Tiwari, Ashish, Bruno Dutertre, Dejan Jovanovic, Thomas de Candia, Patrick D. Lincoln, John Rushby, Dorsa Sadigh, and Sanjit Seshia. Safety envelope for security. In Proceedings of the 3rd International Conference on High Confidence Networked Systems (HiCoNS), pp. 85-94, Berlin, Germany, April 2014. ACM.
Uesato, Jonathan, O'Donoghue, Brendan, van den Oord, Aaron, Kohli, Pushmeet. Adversarial Risk and the Dangers
of Evaluating Against Weak Attacks. Proceedings of the 35th International Conference on Machine Learning, Stockholm, Sweden, PMLR 80, 2018.
Varshney, Kush R., and Homa Alemzadeh. On the safety of machine learning: Cyber-physical systems, decision sciences, and data products. Big Data, 5(3):246-255, 2017.
Webster, M., Wester, D.G., Araiza-Illan, D., Dixon, C., Eder, K., Fisher, M., Pipe, A.G. A corroborative approach to verification and validation of human-robot teams. J. Robotics Research 39(1) (2020).
Xie, Xiaoyuan, J.W.K. Ho, C. Murphy, G. Kaiser, B. Xu, and T.Y. Chen. 2011. "Testing and Validating Machine Learning Classifiers by Metamorphic Testing," Journal of Software Testing, April 1, 84(4): 544-558, doi:10.1016/j.jss.2010.11.920.
Zhang, J., Li, J. Testing and verification of neural-network-based safety-critical control software: A systematic literature review. Information and Software Technology 123, 106296 (2020).
Zhang, J.M., Harman, M., Ma, L., Liu, Y. Machine learning testing: Survey, landscapes and horizons. IEEE Transactions on Software Engineering. 2020, doi: 10.1109/TSE.2019.2962027.

Primary References
Belani, Hrvoje, Marin Vukovic, and eljka Car. Requirements Engineering Challenges in Building AI-Based Complex Systems. 2019. IEEE 27th International Requirements Engineering Conference Workshops (REW).
Dutta, S., Jha, S., Sankaranarayanan, S., Tiwari, A. 2018. Output range analysis for deep feedforward neural networks. In: NASA Formal Methods. pp. 121-138.
Gopinath, D., G. Katz, C. Pasareanu, and C. Barrett. 2018. DeepSafe: A Data-Driven Approach for Assessing Robustness of Neural Networks. In: ATVA.
Huang, X., M. Kwiatkowska, S. Wang and M. Wu. 2017. Safety Verification of Deep Neural Networks. Computer Aided Verification.
Jha, S., V. Raman, A. Pinto, T. Sahai, and M. Francis. 2017. On Learning Sparse Boolean Formulae for Explaining AI Decisions, NASA Formal Methods.


Katz, G., C. Barrett, D. Dill, K. Julian, M. Kochenderfer. 2017. Reluplex: An Efficient SMT Solver for Verifying Deep Neural Networks, https://arxiv.org/abs/1702.01135.
Leofante, F., N. Narodytska, L. Pulina, A. Tacchella. 2018. Automated Verification of Neural Networks: Advances, Challenges and Perspectives, https://arxiv.org/abs/1805.09938 Marijan, Dusica and Arnaud Gotlieb. Software Testing for Machine Learning. The Thirty-Fourth AAAI Conference on Artificial Intelligence (AAAI-20) (2020)
Mirman, M., T. Gehr, and M. Vechev. 2018. Differentiable Abstract Interpretation for Provably Robust Neural Networks. International Conference on Machine Learning.
Pullum, Laura L., Brian Taylor, and Marjorie Darrah, Guidance for the Verification and Validation of Neural Networks, IEEE Computer Society Press (Wiley), 2007.
Seshia, Sanjit A., Dorsa Sadigh, and S. Shankar Sastry. Towards Verified Artificial Intelligence. arXiv:1606.08514v4 [cs.AI] 23 Jul 2020.
Taylor, Brian, ed. Methods and Procedures for the Verification and Validation of Artificial Neural Networks, Springer-Verlag, 2005.
Xiang, W., P. Musau, A. Wild, D.M. Lopez, N. Hamilton, X. Yang, J. Rosenfeld, and T. Johnson. 2018. Verification for Machine Learning, Autonomy, and Neural Networks Survey. https://arxiv.org/abs/1810.01989
Zhang, J., Li, J. Testing and verification of neural-network-based safety-critical control software: A systematic literature review. Information and Software Technology 123, 106296 (2020).

Additional References
Jha, Sumit Kumar, Susmit Jha, Rickard Ewetz, Sunny Raj, Alvaro Velasquez, Laura L. Pullum, and Ananthram Swami. An Extension of Fano's Inequality for Characterizing Model Susceptibility to Membership Inference Attacks. arXiv:2009.08097v1 [cs.LG] 17 Sep 2020.
Sunny Raj, Mesut Ozdag, Steven Fernandes, Sumit Kumar Jha, Laura Pullum, "On the Susceptibility of Deep Neural Networks to Natural Perturbations," AI Safety 2019 (held in conjunction with IJCAI 2019 - International Joint Conference on Artificial Intelligence), Macao, China, August 2019.
Ak, R., R. Ghosh, G. Shao, H. Reed, Y.-T. Lee, L.L. Pullum. "Verification-Validation and Uncertainty Quantification Methods for Data-Driven Models in Advanced Manufacturing," ASME Verification and Validation Symposium, Minneapolis, MN, 2018.
Pullum, L.L., C.A. Steed, S.K. Jha, and A. Ramanathan. "Mathematically Rigorous Verification and Validation of Scientific Machine Learning," DOE Scientific Machine Learning Workshop, Bethesda, MD, Jan/Feb 2018.
Ramanathan, A., L.L. Pullum, Zubir Husein, Sunny Raj, Neslisah Totosdagli, Sumanta Pattanaik, and S.K. Jha. 2017. "Adversarial attacks on computer vision algorithms using natural perturbations." In 2017 10th International Conference on Contemporary Computing (IC3). Noida, India. August 2017.
Raj, S., L.L. Pullum, A. Ramanathan, and S.K. Jha. 2017. "Work in Progress: Testing Autonomous cyber-physical systems using fuzzing features derived from convolutional neural networks." In ACM SIGBED International Conference on Embedded Software (EMSOFT). Seoul, South Korea. October 2017.
Raj, S., L.L. Pullum, A. Ramanathan, and S.K. Jha, "SATYA: Defending against Adversarial Attacks using Statistical Hypothesis Testing," in 10th International Symposium on Foundations and Practice of Security (FPS 2017), Nancy, France. (Best Paper Award), 2017.
Ramanathan, A., Pullum, L.L., S. Jha, et al. "Integrating Symbolic and Statistical Methods for Testing Intelligent Systems: Applications to Machine Learning and Computer Vision." IEEE Design, Automation & Test in Europe(DATE), 2016.
Pullum, L.L., C. Rouff, R. Buskens, X. Cui, E. Vassiv, and M. Hinchey, "Verification of Adaptive Systems," AIAA Infotech@Aerospace 2012, April 2012.


Pullum, L.L., and C. Symons, "Failure Analysis of a Complex Learning Framework Incorporating Multi-Modal and Semi-Supervised Learning," In IEEE Pacific Rim International Symposium on Dependable Computing(PRDC 2011), 308-313, 2011.
Haglich, P., C. Rouff, and L.L. Pullum, "Detecting Emergent Behaviors with Semi-Boolean Algebra," Proceedings of AIAA Infotech @ Aerospace, 2010.
Pullum, L.L., Marjorie A. Darrah, and Brian J. Taylor, "Independent Verification and Validation of Neural Networks
- Developing Practitioner Assistance," Software Tech News, July 2004.

Transitioning Systems Engineering to a Model-based Discipline

-
Systems engineers have always leveraged many kinds of models, including functional models to support requirements development, simulation models to analyze the behavior of systems, and other analytical models to analyze various aspects of the system such as reliability, safety, mass properties, power consumption, and cost. However, the discipline still relies heavily on document-based artifacts to capture much of the system specification and design information, such as requirements, interface control documentation, and system architecture design descriptions. This information is often spread across many different documents including text, informal drawings, and spreadsheets. This document-based approach to systems engineering suffers from a lack of precision, inconsistencies from one artifact to another, and difficulties in maintaining and reusing the information.

Model-Based Systems Engineering
Model-based systems engineering (MBSE) is the formalized application of modeling to support system requirements, design, analysis, verification, and validation activities beginning in the conceptual design phase and continuing through development and later life cycle phases (INCOSE 2007). A distinguishing characteristic of an MBSE approach is that the model constitutes a primary artifact of the systems engineering process. The focus on developing, managing and controlling a model of the system is a shift from the traditional document-based approach to systems engineering, where the emphasis is on producing and controlling documentation about the system. By leveraging the system model as a primary artifact, MBSE offers the potential to enhance product quality, enhance reuse of the system modeling artifacts, and improve communications among the systems development team. This, in turn, offers the potential to reduce the time and cost to integrate and test the system, and significantly reduce cost, schedule, and risks in fielding a system.
MBSE includes a diverse set of descriptive and analytical models that can be applied throughout the life cycle, and from system of systems (SoS) modeling down to component modeling. Typical models may include descriptive models of the system architecture that are used to specify and design the system, and analytical models to analyze system performance, physical characteristics, and other quality characteristics such as reliability, maintainability, safety, and cost.
MBSE has been evolving for many years. The term MBSE was used by Wayne Wymore in his book by this name (Wymore 1993), that provided a state-based formalism for analyzing systems in terms of their input/output characteristics, and value functions for assessing utility of technology independent and technology dependent systems. Simulations have been extensively used across industry to provide high fidelity performance analysis of complex systems. The Standard for Integration Definition for Function Modeling (IDEF0 1993) was introduced in the 1990's to support basic functional modeling. A modeling formalism called the enhanced functional flow block diagram (Long 2000) has been used to model many different types of systems. The Object Management Group


(OMG) introduced the concept of a Model Driven Architecture (MDA(r)) (OMG 2003) that leverages a standards-based approach to modeling. The Systems Modeling Language (OMG SysML(tm)) (OMG 2015) was adopted by the OMG in 2006 as a general-purpose systems modeling language. In addition, the Unified Profile for DoDAF and MODAF (UPDM) (OMG 2013) was adopted by the OMG in 2008 to support enterprise modeling. Several other domain specific modeling languages have been introduced as well.

MBSE Transition
The INCOSE Systems Engineering Vision 2025 (INCOSE 2025, pg 38) describes the current state of MBSE as follows: "Model-based systems engineering has grown in popularity as a way to deal with the limitations of document-based approaches, but is still in an early stage of maturity similar to the early days of CAD/CAE."
SE Vision 2025 also describes a continuing transition of SE to a model-based discipline in which: "Formal systems modeling is standard practice for specifying, analyzing, designing, and verifying systems, and is fully integrated with other engineering models. System models are adapted to the application domain, and include a broad spectrum of models for representing all aspects of systems. The use of internet driven knowledge representation and immersive technologies enable highly efficient and shared human understanding of systems in a virtual environment that span the full life cycle from concept through development, manufacturing, operations, and support." The transition to a more model-based discipline is not without its challenges. This requires both advancements in the practice, and the need to achieve more widespread adoption of MBSE within organizations across industry sectors.
The INCOSE Systems Engineering Vision 2035 (INCOSE 2035, pg 33) states that "The Future of Systems Engineering Is Predominantly Model-Based". Further discussion goes on to project that "Systems engineers routinely compose task-specific virtual models using ontologically linked, digital twin-based model-assets. These connected models are updated in real-time providing a virtual reality-based, immersive design and exploration space. This virtual global collaboration space is cloud- based, enabled by modelling as a service and supports massive simulation leveraging cloud-based high-capacity compute infrastructure. Families of unified ModSim frameworks exist enabling small and medium businesses along with Government agencies to collaborate."
Advancing the practice requires improvements in the modeling languages, methods, and tools. The modeling languages must continue to improve in terms of their expressiveness, precision, and usability. MBSE methods, such as those highlighted in A Survey of Model-Based Systems Engineering (MBSE) Methodologies (Estefan 2008), have continued to evolve, but require further advancements to provide a rigorous approach to modeling a system across the full system lifecycle, while being more adaptable to a diverse range of application domains. The modeling tools must also continue to evolve to support the modeling languages and methods, and to integrate with other multi-disciplinary engineering models and tools in support of the broader model-based engineering effort. The movement towards increased use of modeling standards, that are more widely available in commercial tools, and rigorous model-based methodologies, increase the promise of MBSE.
The adoption of MBSE requires a workforce that is skilled in the application of MBSE. This requires organizations to provide an infrastructure that includes MBSE methods, tools, and training, and a commitment to deploy this capability to their programs. As with any organizational change, this must be approached strategically to grow this capability and learn from their experiences.
Like other engineering disciplines, the transition of systems engineering to a model-based discipline is broadly recognized as essential to meet the challenges associated with increasing system complexity and achieving the productivity and quality improvements. The SEBoK will continue to reflect the growing body of knowledge to facilitate this transition.


References
Works Cited
Estefan, J. 2008. A Survey of Model-Based Systems Engineering (MBSE) Methodologies, rev. B. Seattle, WA: International Council on Systems Engineering.
INCOSE-TD-2007-003-02. Available at: http:/ / www. omgsysml. org/ MBSE_Methodology_Survey_RevB. pdf. Accessed April 13, 2015.
INCOSE 2020. INCOSE Technical Operations. 2007. Systems Engineering Vision 2020, version 2.03. Seattle, WA: International Council on Systems Engineering, Seattle, WA, INCOSE-TP-2004-004-02.
INCOSE 2035, INCOSE Technical Operations. 2021. Systems Engineering Vision 2035 [1]. Seattle, WA: International Council on Systems Engineering, Seattle, WA.
International Council on Systems Engineering (INCOSE) 2014. Systems Engineering Vision 2025July, 2014. Available at http:/ / www. incose. org/ docs/ default-source/ aboutse/ se-vision-2025. pdf?sfvrsn=4. Accessed February 16.
Long , James E. 2000,Systems Engineering (SE) 101, CORE (r): Product & Process Engineering Solutions, Vitech Training Materials, Vienna, VA, USA: Vitech Corporation.
Object Management Group (OMG). 2003. Model-Driven Architecture (MDA) Guide, v1.01, June 12 2003. Available at: http://www.omg.org/mda/.
Object Management Group (OMG). 2015. OMG Systems Modeling Language (OMG SysML(tm)), V1.4. OMG document number formal/2015-06-03, September 2015. Available at: http://www.omg.org/spec/SysML/1.4/.
Object Management Group (OMG). 2013. Unified Profile for DoDAF/MODAF (UPDM) OMG document. number formal/2013-08-04, August 2013. Available at: http://www.omg.org/spec/UPDM/2.1/.
Computer Systems Laboratory of the National Institute of Standards and Technology (NIST). 1993. Standard for Integration Definition for Function Modeling(IDEF0), Draft Federal Information Processing Standards, Publication 183, December 21, 1993.
Wymore, W. 1993. Model-Based Systems Engineering. Boca Raton, FL: CRC Press.

Primary References
INCOSE. 2015. [INCOSE Systems Engineering Handbook|Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities], Section 9.2: Model-Based Systems Engineering, version 4.0. Hoboken, NJ, USA: John Wiley and Sons, Inc, ISBN: 978-1-118-99940-0.

Additional References
OMG. MBSE Wiki. Available at: http://www.omgwiki.org/MBSE/doku.php.Accessed February 16, 2015.

References
[1] https://www.incose.org/about-systems-engineering/se-vision-2035


Model-Based Systems Engineering Adoption Trends 2009-2018

 Lead Author:
 Rob Cloutier
 Contributing Author:
 Ifezue Obiako
-
The MBSE Initiative was kicked off at the INCOSE International Workshop (IW) in 2007 at the Albuquerque, NM, USA Embassy Suites. There were approximately 45 INCOSE members for this first meeting, held during the two days preceding IW.
Surveys were conducted in 2009, 2012, 2014, 2018, and 2019 to better understand the adoption trends of model-based systems engineering.

Introduction
Model-based systems engineering (MBSE) is not a new concept. Wymore (1993) published the seminal work on the topic. This book presents the mathematical theory behind MBSE. Since that time, engineering has made significant movement from text-based approaches using office-based tools (e.g. Harvard Graphics, Microsoft PowerPoint, Microsoft Visio, etc.) to an interconnected set of graphical diagrams. These diagrams are generally created in a tool with a specialized graphical user interface.
Today aerospace engineers no longer use drafting boards to create their drawings - they use computer aided design (CAD) tools. Likewise, software engineers seldom use EMACS or Vi (text editors), instead, they use software GUIs that allow them to code, check syntax, compile, link, and run their software all in a single environment.
Broadly speaking, a model_ can be thought of as a facsimile or abstraction of reality. To this end, even a requirements document can be considered a model - it represents what a real system should do in performing its mission or role. While systems engineering has used models for a very long time, MBSE is the systems engineering migration to computer-based graphical user interfaces to perform our analysis and design tasks just as our other engineering brethren have moved to computer-based graphical user interfaces.
A discussion of available tools is beyond the scope of this article, and it is not the practice of the SEBoK to review or promote specific tool offerings. However, it is fair to state that current MBSE tools fall into three broad categories:
1) Functional decomposition tools that use IDEF0 (also called IPO) diagrams, N2 diagrams, functional flow block diagrams, etc., 2) Object-oriented tools that implement the Object Management Group's Systems Modeling Language (SysML), and 3) Mathematical modeling tools.
This migration for systems engineering might have begun in the late 90's. The INCOSE INSIGHT publication proclaimed that MBSE was a new paradigm (INSIGHT 1998). Cloutier (2004) addressed the migration from a waterfall systems engineering approach to an object-oriented approach on the Navy Open Architecture project. At that time, SysML did not exist, and the teams were using the Unified Modeling Language (UML) that was predominately a software modeling tool. Zdanis & Cloutier (2007a, 2007b) addressed the use of activity diagrams instead of sequence diagrams for systems engineering based on the newly released SysML. In 2009, the INCOSE INSIGHT publication proclaimed MBSE was THE new paradigm (INSIGHT 2009).


Approach
In 2009, a survey was commissioned by the Object Management Group (OMG) with the intent of informing the SysML Working Group on necessary changes to SysML since its first release (Cloutier & Bone 2010). That survey focused on process more than adoption. Beginning in 2012, INCOSE has commissioned three more surveys to understand adoption trends and obstacles. The survey instrument remained relatively unchanged for 2012, 2014, and 2018 (Cloutier 2015, Cloutier 2019a). In January of 2019, the Jet Propulsion Lab (JPL) conducted an MBSE Workshop (Cloutier 2019b). A survey of those participants was conducted, and the intent of the questions was to augment knowledge gained from the 2018 survey. The table below shows the number of respondents in each of the surveys.

Table 1. MBSE Survey Purposes and Responses (SEBoK Original)

Year
Survey Purpose
Responses
2012
INCOSE MBSE Initiative
134
2014
INCOSE MBSE Initiative
205
2018
INCOSE MBSE Initiative
661
2019
JPL MBSE Workshop
98

Responses and Response Demographics
Each survey was sent to a diverse group of MBSE practitioners. Table 2 shows that of the 661 responses for the 2018 survey, 410 indicated their country of origin. This international representation is similar to all surveys conducted.

Table 1. MBSE Survey Purposes and Responses (Cloutier 2019, used with permission)

Country
Responses
Country
Responses
USA
197
Israel
4
United Kingdom
52
Singapore
3
France
30
China
2
Germany
28
New Zealand
2
Australia
20
Poland
2
Netherlands
19
Russia
1
Japan
8
Romania
1
Canada
6
Turkey
1
Italy
6
Columbia
1
Sweden
6
Norway
1
South Africa
5
South Korea
1
Switzerland
4
UAE
1
Brazil
4
Belarus
1
India
4



As part of the demographics, Figure 1 shows the represented industries. Because the "Other" category was so large, the data was analyzed to better understand Figure 2.






The 2018 survey indicated that there seems to be an increased application of MBSE in traditionally civil engineering industries - specifically energy, infrastructure, and transportation (Figure 2) One of the most interesting aspects of the 2018 survey is the finding that MBSE is being applied in the early phases of systems engineering, and less so in the later phases as shown in Figure 3.




This was confirmed by the JPL question "Where do we believe MBSE holds the most promise?" Figure 4 shows that 76% of the responses indicated system/subsystem architecting, 42% thought requirements analysis, and 39% believed early conceptualization (note: the question allowed for multiple answers).





When asked whether the JPL survey respondents believed that their systems modeling experience is recognized as a valued skill supporting career growth of systems engineers in their organization, just over 50% believed management valued their experience. A smaller number, 21%, believed their modeling experience was not valued (Figure 5).

Key Adoption Trends
The remainder of this article will look at some of the trends identified across the surveys, from 2009 to 2018. Figure 6 shows that MBSE is moving from a defense and space dominated practice into other industries as discussed in Figure 4.



Model-based systems engineering seems to be expanding in influence in that it is not just in the purview of systems engineers. While systems and software engineers find value in MBSE practices, Figure 6 demonstrates that the customer is finding value in MBSE practices. It is also interesting that software engineers' perceived value of MBSE is declining from survey to survey.





Figure 8 demonstrates that availability of MBSE skills and cultural and general resistance to change have continued to increase. Lack of perceived value reflects the findings in Figure 6 - software and hardware engineers are not seeing the value of MBSE.

Conclusions
Surveys conducted between 2012 and 2018 demonstrate that MBSE practices are spreading beyond traditional Defense and Space domains. Most MBSE practitioners are finding MBSE is most useful in the early project phases of conceptualization, requirements analysis, and systems architecting. There continues to be a skills shortage, yet companies/organizations are providing less training to improve MBSE skills. Both systems engineers, systems engineering management, and the systems engineering customer are finding value in using models to perform systems engineering.

References
Works Cited
Cloutier, R. 2004. "Migrating from a waterfall systems engineering approach to an object oriented approach -
Lessons learned," ICSE and INCOSE Region II Conference, Las Vegas, NV, USA, September 15, 2004.
Cloutier, R. and M. Bone. 2010. Compilation of SysML RFI- Final Report: Systems Modeling Language (SysML) Request For Information. OMG Document: syseng/2009-06-01. Report date: 02/20/2010. Available at: http://www. omgwiki. org/ OMGSysML/ lib/ exe/ fetch. php?media=sysml-roadmap:omg_rfi_final_report_02_20_2010-1. pdf Accessed October 24, 2019.
Cloutier, R. 2015. "Current modeling trends in systems engineering," INSIGHT, A Publication of the International Council on Systems Engineering (INCOSE), vol. 18, no. 2.


Cloutier, R. 2019a. "2018 MBSE survey results," In Proceedings of the 2019 INCOSE MBSE Workshop, presented at the INCOSE 2019 International Workshop, Torrance, CA, USA, January 26-29, 2019.
Cloutier, R. 2019b. "2019 JPL MBSE Survey Results," Presented at the 2019 Jet Propulsion Lab (JPL) MBSE Workshop, Pasadena, CA, USA, January 2019.
INSIGHT. 1998. Model-Based Systems Engineering: A New Paradigm. A Publication of the International Council on Systems Engineering (INCOSE). Volume 1, Issue 3.
INSIGHT. 2009. Special Edition on Model-based Systems Engineering: The New Paradigm. A Publication of the International Council on Systems Engineering (INCOSE). Volume 12, Issue 4.
Wymore, W. 1993. Model-Based Systems Engineering. Boca Raton, FL, USA: CRC Press.
Zdanis, L. and R. Cloutier. 2007. "The Use of Behavioral Diagrams in SysML." Hoboken, NJ: Stevens Institute of Technology. Proceedings of the Conference on Systems Engineering Research (CSER) 2007, 14-16 March 2007, Hoboken, NJ, USA. ISBN 0-9787122-1-8.
Zdanis, L. and R. Cloutier. 2007. "The Use of Behavioral Diagrams in SysML." IEEE Long Island Systems, Applications and Technology Conference, Farmingdale, NY, 2007, pp. 1-1. doi: 10.1109/LISAT.2007.4312634

Primary References
Bone, M. and R. Cloutier. 2010. "The current state of model based systems engineering: Results from the OMG(tm) SysML request for information 2009," in Proceedings of the 8th Conference on Systems Engineering Research (CSER),  Hoboken,  NJ,  USA,  March  17-19,  2010.  Available  at:  http:/ / www. omgsysml. org/ SysML_2009_RFI_Response_Summary-bone-cloutier.pdf.
Cloutier, R. and M. Bone. 2012. "MBSE survey 2," Presented at the International Council on Systems Engineering (INCOSE) International Workshop, Jacksonville, FL, USA, January 21-24, 2012.
Cloutier, R. 2019a. "2018 MBSE survey results," In Proceedings of the 2019 INCOSE MBSE Workshop, presented at the INCOSE 2019 International Workshop, Torrance, CA, USA, January 26-29, 2019.
Cloutier, R. 2019b. "2019 JPL MBSE survey results," Presented at the 2019 Jet Propulsion Lab (JPL) MBSE Workshop, Pasadena, CA, January 2019.

Additional References
Batarseh, O., L. McGinnis, J. Lorenz. 2012. "MBSE supports manufacturing system design," In Proceedings of the 22nd Annual International Council of Systems Engineering (INCOSE) International Symposium, Rome, Italy, July 9-12, 2012. Paper ID: 2950.
Kernschmidt, K., B. Vogel-Heuser. 2013. "An interdisciplinary SysML based modeling approach for analyzing change influences in production plants to support the engineering," In Proceedings of the 2013 IEEE International Conference on Automation Science and Engineering (CASE), August 17-20, 2013. pp. 1113-1118. doi: 10.1109/CoASE.2013.6654030.
Gulan, S., S. Johr, R. Kretschmer, S. Rieger, M. Ditze. 2013. "Graphical modelling meets formal methods," In Proceedings of the 11th IEEE International Conference on Industrial Informatics (INDIN), July 29-31, 2013. pp. 716-721. doi: 10.1109/INDIN.2013.6622972.
Hoffmann, H. 2012. "Streamlining the development of complex systems through model-based systems engineering," In Proceedings of the 2012 IEEE/AIAA 31st Digital Avionics Systems Conference (DASC), October 14-18, 2012.
pp. 6E6-1, 6E6-8. doi: 10.1109/DASC.2012.6382404.
Paredis, C.J.J. et al. 2010. "An overview of the SysML-Modelica transformation specification," In Proceedings of the 2010 International Council on Systems Engineering (INCOSE) International Symposium, Chicago, IL, USA, July 11-15, 2010.


Pihlanko, P., S. Sierla, K. Thramboulidis, M. Viitasalo. 2013. "An industrial evaluation of SysML: The case of a nuclear automation modernization project," In Proceedings of the 18th IEEE Conference on Emerging Technologies & Factory Automation (ETFA), September 10-13, 2013. pp. 1-8. doi: 10.1109/ETFA.2013.6647945.
Ramos, A.L., J.V. Ferreira, J. Barcelo. "Model-Based Systems Engineering: An Emerging Approach for Modern Systems," IEEE Transactions on Systems, Man, and Cybernetics, Part C: Applications and Reviews, vol. 42, no. 1,
pp. 101-111. doi: 10.1109/TSMCC.2011.2106495.

Digital Engineering

 Lead Author:
 Ron Giachetti
-
The US Under Secretary of Defense for Research and Development released the US Department of Defense (DoD) Digital Engineering Strategy in June 2018 describing five goals to streamline the DoD acquisition process through the creation of a digital thread enabling the conception, design, and development of complex weapon systems (DoD 2018; Zimmerman 2017). The crux of digital engineering is the creation of computer readable models to represent all aspects of the system and to support all the activities for the design, development, manufacture, and operation of the system throughout its lifecycle. These computer models would have to be based on shared data schemata so that in effect a digital thread integrates all the diverse stakeholders involved in the acquisition of new weapon systems. The Digital Engineering Strategy anticipates digital engineering will lead to greater efficiency and improved quality of all the acquisition activities.

Relationship with MBSE
Model-based systems engineering (MBSE) is a subset of digital engineering. MBSE supports the systems engineering activities of requirements, architecture, design, verification, and validation. These models would have to be connected to the physics-based models used by other engineering disciplines such as mechanical and electrical engineering. One challenge remaining for digital engineering is the integration of MBSE with physics-based models.
Foundation to digital engineering is the representation of the system data in a format sharable between all stakeholders (Giachetti et al. 2015; Vaneman 2018). SysML 2.0 is one of several future developments promising to provide a representation sufficient to support digital engineering. An ontology defining the entities and relationships between them can be used to define the concepts relevant to systems engineering. Such a representation is necessary to create the digital thread linking all the models together in a cohesive and useful manner.

Digital Engineering as a Transformation
For many organizations, digital engineering represents a transformation of how they normally conduct systems engineering (e.g., see Bone et al. 2018) since most organizations conduct a document-intensive systems engineering process. The adoption of digital engineering requires concomitant changes to how organizations perform system engineering activities. Everything from documenting requirements, technical reviews, architecture design, and so forth would be based on the models in a digital engineering environment (Vaneman and Carlson, 2019). The digital thread would be the authoritative source of truth concerning the system data.


Digital Twin
A digital twin is a related yet distinct concept to digital engineering. The digital twin is a high-fidelity model of the system which can be used to emulate the actual system. An organization would be able to use a digital twin to analyze design changes prior to incorporating them into the actual system.

References
Works Cited
Bone, M.A., M.R. Blackburn, D.H. Rhodes, D.N. Cohen, and J.A. Guerrero. 2018. "Transforming systems engineering through digital engineering," The Journal of Defense Modeling and Simulation (2018): 1548512917751873.
DoD. 2018. DoD Digital Engineering Strategy. Washington, D.C., USA: Office of the Undersecretary of Defense for Research and Engineering (OUSD R&E), US Department of Defense.
Giachetti, R.E. 2015. "Evaluation of the DoDAF meta-model's support of systems engineering," Procedia Computer Science, vol. 61, pp. 254-260.
Vaneman, W.K. 2018. "Evolving model-based systems engineering ontologies and structures," Proceedings of the International Council on Systems Engineering (INCOSE) International Symposium, Washington D.C., USA, July 7-12, 2018. Symposium Proceedings vol. 28, no. 1, pp. 1027-1036.
Zimmerman, P. "DoD digital engineering strategy," Proceedings of the 20th Annual National Defense Industrial Association (NDIA) Systems Engineering Conference, Springfield, VA, October 23-26, 2017.

Primary References
Bone, M.A., M.R. Blackburn, D.H. Rhodes, D.N. Cohen, and J.A. Guerrero. 2018 "Transforming systems engineering through digital engineering," The Journal of Defense Modeling and Simulation (2018): 1548512917751873.
Singh, V. and K.E. Willcox. "Engineering design with digital thread," AIAA Journal, vol. 56, no. 11, pp. 4515-4528. Zimmerman, P. "DoD digital engineering strategy," Proceedings of the 20th Annual National Defense Industrial Association (NDIA) Systems Engineering Conference, Springfield, VA, October 23-26, 2017. OUSD R&E, DoD
Digital Engineering Strategy, (June 2018).

Additional References
None.

Relevant Videos
 Digital Engineering: MBSE Approach for DoD [1]


Set-Based Design

 Lead Authors:
 Eric Specking, Gregory S. Parnell, and Ed Pohl
-
Set-based design (SBD) is a complex design method that enables robust system design by 1) considering a large number of alternatives, 2) establishing feasibility before making decisions, and 3) using experts who design from their own perspectives and use the intersection between their individual sets to optimize a design (Singer, Doerry, and Buckley 2009). Model-based engineering (MBE)/model-based systems engineering (MBSE) with an integrated framework can enable the use of SBD tradespace exploration, for some situations (i.e. early-design stage with low fidelity models), in near-real time (Specking et al. 2018a). This article provides insights on using model-based design to create and assess alternatives with set-based design.

Introduction
SBD analyzes sets of alternatives instead of single solutions. Sets are "two or more design points that have at least one design option in common" (Specking et al. 2018b) or "the range of options for a design factor" (Singer et al. 2017). A design factor is a "solution parameter, characteristic, or relationship that influences the design at the system level" (Singer et al. 2017). Systems engineers should develop sets determining the design factors and separating the design factors into set drivers or set modifiers. Set drivers are "fundamental design decisions that define the system characteristics that enable current and future missions," while set modifiers are "design decisions that are 'added on' to the system and can be modified to adapt for new missions and scenarios" (Specking et al. 2018b).
SBD is not the best design method for every situation. SBD is particularly useful in early-stage design and if the project contains the following attributes:
 A large number of design variables,
 Tight coupling among design variables,
 Conflicting requirements,
 Flexibility in requirements allowing for trades, or
 Technologies and design problems not well understood - learning required for a solution (Singer et al. 2017)
In early-stage design, SBD helps inform requirements analysis and assess design decisions (Parnell et al. 2019). Quantitative SBD requires an integrated MBE environment to assess the effects of constraining and relaxing requirements on the feasible tradespace. For example, Figure 2 demonstrates the effects of constraining or relaxing requirements of an unmanned aerial vehicle case study with all of the explored designs in orange, the tradespace affected by non-requirement constraints (e.g. physics with requirements relaxed to not affect the tradespace) in blue, the original UAV feasible tradespace in yellow, and the relaxed (black)/constrained (red) tradespaces.




The tornado diagram seen in Figure 3 shows results of a one requirement at a time analysis. This makes it easy to see how the constraining/relaxing of each individual requirement affects the feasible tradespace. Figure 3 shows that the requirements "Detect Human Activity at Night" and "Detect Human Activity in Daylight" have the greatest impact on the feasible tradespace.

Changing the requirements does not always translate to finding improved designs. The individual one requirement at a time analysis scatterplot provides important information, as seen in an example illustration in Figure 4. It is important to carefully analyze the Pareto Frontier created by each change (represented by a different color) and compare it to the Pareto Frontier of the original analysis. If the original requirement level produces better


alternatives, then it does not make sense to change (constrain or relax) the requirement.

Additionally, using SBD can add value to the overall project and team. Some of the advantages include:
 enabling reliable, efficient communications,
 allowing much greater parallelism in the process, with much more effective use of subteams early in the process,
 allowing the most critical, early decisions to be based on data, and
 promoting institutional learning (Ward et al. 1995).

System Analyst Set-Based Design Tradespace Exploration Process
Figure 4 illustrates SBD as a concept for system design and analysis. This SBD illustration contains 5 distinct characteristics:
1. start by determining the business/mission needs and system requirements;
2. use the business/mission needs and system requirements to perform design and analysis techniques throughout time in the exploratory, concept, and development stages of the system's life cycle;
3. perform design and analysis concurrently as much as possible;
4. inform requirement analysis by using feasibility, performance, and cost data; and
5. consider a large number of alternatives through the use of sets and slowly converge to a single point solution (Specking et al. 2019).




SBD is a social-technical process and should involve input and interactions from several teams, but Figure 6 provides a SBD tradespace exploration process for system analysts (Specking et al. 2019). This eight-step process is especially useful to perform early-stage design (Specking et al. 2018b). The system analyst starts by analyzing the business/mission needs and system requirements. Systems engineers use this information, along with models and simulations developed by themselves or provided by systems and subsystem teams, to develop an integrated model. Systems engineers include requirements to assess feasible and infeasible alternatives using this integrated model. They explore the tradespace by treating each design decision as a uniform (discrete or continuous) random variable. An alternative consists of an option from every design decision. Systems engineers then use the integrated model to evaluate each alternative and to create the feasible tradespace. Monte Carlo simulation is one method that enables a timely alternative creation and evaluation process. The created tradespace will consist of infeasible and feasible alternatives based upon the requirements and any physics-based performance models and simulations. Systems engineers should work with the appropriate stakeholders to inform requirements when the tradespace produces a significantly small number of or no feasible alternatives. In addition to feasibility, systems engineers should also analyze each design decision by using descriptive statistics and other analyses and data analytics techniques. This information provides insights into how each design factor influences the feasible tradespace. Once the tradespace contains an acceptable number of alternatives, it is then classified by sets. This is an essential part of SBD. If the set drivers or design factors are not known, systems engineers should view the tradespace by each design decision for insights. Systems engineers should use dominance analysis and other optimization methods to find optimal or near optimal alternatives based upon the measures of effectiveness. Systems engineers should explore the remaining sets for additional insights on the feasible tradespace and the requirements. The final part of this process is to select one or more sets to move to the next design-stage. It should be noted that this process contains cycles. At any part of this process, systems engineers should use the available information, such as from tradespace exploration or set evaluation, to inform requirement analysis or update the integrated model. Additionally, the systems engineer should update the integrated model with higher fidelity models and simulations as they become available. The key is to have the "right" information from the "right" people at the "right" time.





References
Works Cited
Parnell, G.S., E. Specking, S. Goerger, M. Cilli, and E. Pohl. 2019. "Using set-based design to inform system requirements and evaluate design decisions." Proceedings of the 29th Annual International Council on Systems Engineering (INCOSE) International Symposium, Orlando, FL, USA, July 20-25, 2019.
Singer, D.J., N. Doerry, and M. E. Buckley. 2009. "What is set-based design?" Naval Engineers Journal, vol. 121, no. 4, pp. 31-43.
Singer, D., J. Strickland, N. Doerry, T. McKenney, and C. Whitcomb. 2017. "Set-based design." SNAME T&R Bulletin SNAME (mt) Marine Technology Technical and Research Bulletin.
Specking, E., C. Whitcomb, G. Parnell, S. Goerger, E. Kundeti, and N. Pohl. 2018a. "Literature review: Exploring the role of set-based design in trade-off analytics," Naval Engineers Journal, vol. 130, no. 2, pp. 51-62.
Specking, E., G. Parnell, E. Pohl, and R. Buchanan. 2018b. "Early design space exploration with model-based system engineering and set-based design," IEEE Systems, vol. 6, no. 4, pg. 45.
Ward, A., I. Durward Sobek, J. C. John, and K. L. Jeffrey. 1995. "Toyota, concurrent engineering, and set-based design," in Engineered in Japan: Japanese Technology-management Practices. Oxford, England: Oxford University Press. pp. 192-216.


Primary References
None.

Additional References
None.




Emerging Research

Emerging Research

 Lead Authors:
 Robert Cloutier and Arthur Pyster
-
The Emerging Research topic under the SEBoK Emerging Knowledge is a place to showcase some of the systems engineering research published in the past 3-5 years.

Doctoral Dissertations
Doctoral level systems engineering research has taken root over the last two decades. Additionally, many institutions have either an Industrial Engineering or Systems Engineering Master's program. This has enabled new and interesting research to be conducted. Here you will find bibliographic citations and summaries for recently defended research.

Towards Early Lifecycle Prediction of System Reliability
Salter, C. "Towards early lifecycle prediction of system reliability," Ph.D. dissertation University of South Alabama, Mobile, Alabama, July 2018. Available: ProQuest Store [1]
Reliability is traditionally defined as "the probability that an item will perform a required function without failure under stated conditions for a stated period of time" (O'Connor, 2012). This definition is applicable to all levels of a system, from the smallest part to the system as a whole. Predicting reliability requires extensive knowledge of the system of interest, thus making prediction difficult and complex. This problem is further complicated by the desire to predict system reliability early in the acquisition lifecycle. This work set out to develop a model for the prediction of system reliability early in the system lifecycle. The model utilizes eight factors: number of system requirements, number of major interfaces, number of operational environments, requirements understanding, technology maturity, manufacturability, company experience, and performance convergence. These factors come together to form a model much like the software engineering and systems engineering models COCOMO and COSYSMO. This work provides the United States Department of Defense a capability that previously did not exist: the estimation of system reliability early in the system lifecycle. The research demonstrates that information available during early system development may be used to predict system reliability. Through testing, the author found that a model of this type could provide reliability predictions for military ground vehicles within 25% of their actual recorded reliability values.

Toward the Evolution of Information Digital Ecosystems
Lippert, K. "Toward the evolution of information digital ecosystems," Ph.D dissertation, University of South Alabama, Mobile, Alabama, May 2018. Available: ProQuest Store [2].
Digital ecosystems are the next generation of Internet and network applications, promising a whole new world of distributed and open systems that can interact, self-organize, evolve, and adapt. These ecosystems transcend traditional collaborative environments, such as client-server, peer-to-peer, or hybrid models (e.g., web services) to become a self-organized, interactive environment. The complexity of these digital ecosystems will encourage evolution through adaptive processes and selective pressures of one member on another to satisfy interaction,


adaptive organization, and, incidentally, human curiosity. This work addresses one of the essential parts of the digital ecosystem - the information architecture. The research, inspired by systems thinking influenced by both biological models and science fiction, applies the TRIZ method to the contradictions raised by evolving data. This inspired the application of patterns and metaphor as a means for coping with the evolution of the ecosystem. The metaphor is explored as a model of representation of rapidly changing information through a demonstration of an adaptive digital ecosystem. The combination of this type of data representation with dynamic programming and adaptive interfaces will enable the development of the various components required by a true digital ecosystem.

Cybersecurity Decision Patterns as Adaptive Knowledge Encoding in Cybersecurity Operations
Willett, K. "Cybersecurity decision patterns as adaptive knowledge encoding in cybersecurity operations", Ph.D. dissertation, Stevens Institute of Technology, Hoboken, NJ, July 2016. Available: https://pqdtopen.proquest.com/ doc/1875237837.html?FMT=ABS.
Cyberspace adversaries perform successful exploits using automated adaptable tools. Cyberspace defense is too slow because existing response solutions require humans in-the-loop across sensing, sense-making, decision-making, acting, command, and control of security operations (Done et al. 2016). Security automation is necessary to provide for cyber defense dynamic adaptability in response to an agile adversary with intelligence and intent who adapts quickly to exploit new vulnerabilities and new safeguards. The rules for machine-encoding security automation must come from people; from their knowledge validated through their real-world experience. Cybersecurity Decision Patterns as Adaptive Knowledge Encoding in Cybersecurity Operations introduces cybersecurity decision patterns (CDPs) as formal knowledge representation to capture, codify, and share knowledge to introduce and enhance security automation with the intent to improve cybersecurity operations efficiency for processing anomalies.

INCOSE & IEEE Periodicals and Events
Every year, the International Council on Systems Engineering (INCOSE) holds one International Workshop and one International Symposium, as well as regular meetings of various working groups, to encourage discussions of emerging needs and sharing of experience within Systems Engineering community. All papers and presentations from these events are available for free for INCOSE members, or with a fee for non-members via Wiley. The library can be access here: https://www.incose.org/products-and-publications/papers-presentations-library#
Additionally, INCOSE also publish periodicals, which include: Systems Engineering (SE Journal), INSIGHT (magazine), and INCOSE Members Newsletter. These periodicals are available as PDF, free for INCOSE members and with a fee for non-members, or as hard copies. More information can be found here: https://www.incose.org/ products-and-publications/periodicals
The Institute of Electrical and Electronics Engineers (IEEE) Systems Council also holds multiple annual conferences, such as the International Systems Conference (SysCon), on systems engineering, resulting in a large pool of publications. These publications can be found via: https://ieeesystemscouncil.org/publications

NSF- and SERC-funded Research
The National Science Foundation (NSF), Division of Civil, Mechanical, and Manufacturing Innovation (CMMI) has been funding research in academia on systems engineering under Engineering Design and Systems Engineering (EDSE) program. According to NSF-EDSE website [3], the program "seeks proposals leading to improved understanding about how processes, organizational structure, social interactions, strategic decision making, and other factors impact success in the planning and execution of engineering design and systems engineering projects". Research under this program can be found via Award Search feature on NSF website: https:/ / www. nsf. gov/ awardsearch/advancedSearch.jsp (Enter "CMMI" for NSF Organization and "EDSE" for Program).


The Systems Engineering Research Center (SERC) is a University-Affiliated Research Center of the US Department of Defense, consisting of 22 collaborator universities in the US and funding research on different aspects of Systems Engineering, including Enterprises and System of Systems, Trusted Systems, Systems Engineering and Systems Management Transformation. More information can be found here: https:/ / sercuarc. org/ serc-programs-projects/ esos/

References
None.

References
[1] 	https://order.proquest.com/OA_HTML/pqdtibeCAcdLogin. jsp;jsessionid=e0c74b22f5dff64bf4a20c1deef606a0397a02e9aa59ec701b81e5d7cde90387. e34PbxmRc3qPbO0Lbx4Nc3yMbxiNe0?ref=https%3A%2F%2Forder.proquest.com%2FOA_HTML%2FpqdtibeCCtpItmDspRte. jsp%3Fdlnow%3D1%26item%3D10840641%26rpath%3Dhttps%253A%252F%252Fsearch.proquest. com%252Fpqdtglobal%252Fredirectfor%253Faccountid%253D14541%26track%3D1SRCH&sitex=10020:22372:US& sitex=10020:22372:US
[2] 	https://order.proquest.com/OA_HTML/pqdtibeCAcdLogin.jsp?ref=https%3A%2F%2Forder.proquest. com%2FOA_HTML%2FpqdtibeCCtpItmDspRte. jsp%3Fdlnow%3D1%26item%3D10790760%26rpath%3Dhttps%253A%252F%252Fsearch.proquest. com%252Fpqdtglobal%252Fredirectfor%253Faccountid%253D14541%26track%3D1SRCH&sitex=10020:22372:US& sitex=10020:22372:US
[3] https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505478&org=ENG&from=home






































Contents
Articles

Glossary	1
A	2
Absorption (glossary)	2
Abstract Model (glossary)	2
Abstract Syntax (glossary)	3
Abstraction (glossary)	3
Acceptance Criteria (glossary)	4
Acceptance Sampling (glossary)	4
Acquirer (glossary)	5
Acquisition (glossary)	5
Acquisition Strategy (glossary)	6
Activity (glossary)	6
Adaptability (glossary)	7
Address (glossary)	8
Adversity (glossary)	8
Aggregate (glossary)	8
Agile (glossary)	9
Agility (glossary)	9
Agreement (glossary)	10
Analytical Model (glossary)	10
Antipattern (glossary)	11
Architecting (glossary)	11
Architecture (glossary)	12
Architecture Framework (glossary)	13
Assembly Procedure (glossary)	14
Assembly Tool (glossary)	14
Assessment Criterion (glossary)	15
Assessment Score (glossary)	15
Attribute (glossary)	16
Availability (glossary)	17
B	18
Baseline (glossary)	18
Behavior (glossary)	19
Behavioral Architecture (glossary)	19
Binding (glossary)	20
Black-Box System (glossary)	20
Body of Knowledge (glossary)	21
Boundary (glossary)	22
Business (glossary)	22
Business Process (glossary)	22
Business Process Outsourcing (glossary)	23
C	24
Call Center (glossary)	24
Capability (glossary)	24
Capability Management (glossary)	25
Capacity (glossary)	26
Cartesian coordinate system (glossary)	26
Cartography (glossary)	27
Case Study (glossary)	27
Catalogue (glossary)	28
Chaos (glossary)	28
Closed System (glossary)	29
Coercive (glossary)	29
Cognitive Bias (glossary)	30
Cohesion (glossary)	30
Competency (glossary)	31
Complex (glossary)	32
Complex Adaptive System (CAS) (glossary)	32
Complexity (glossary)	33
Complexity avoidance (glossary)	34
Component (glossary)	34
Computer Simulation (glossary)	35
Concept (glossary)	35
Concept Definition (glossary)	36
Concept of Operations (ConOps) (glossary)	36
Concrete Syntax (glossary)	37
Concurrent (glossary)	37
Concurrently (glossary)	38
Configuration (glossary)	38
Configuration Management (glossary)	39
Constraint (glossary)	39
Control (glossary)	40
Coordinate (glossary)	41
Cost (glossary)	41
Critical Design Review (CDR) (glossary)	41
Critical Systems Thinking (glossary)	42
Culture (glossary)	42
Customer (glossary)	43
Cyber-Physical Systems (glossary)	43
Cybernetics (glossary)	44
Cycle (glossary)	44
D	45
Data Center (glossary)	45
Decision Gate (glossary)	45
Decision Management (glossary)	46
Defense in depth (glossary)	46
Demonstration (glossary)	47
Derived Requirement (glossary)	47
Descriptive Model (glossary)	48
Design (glossary)	48
Design Factor (glossary)	49
Design Life (glossary)	49
Design Property (glossary)	50
DevOps (glossary)	50
Digital Elevation Model (glossary)	51
Digital Terrain Model (DTM) (glossary)	51
Digital Twin (glossary)	52
Disposal (glossary)	52
Disruption (glossary)	53
Diversity (glossary)	53
Domain (glossary)	54
Drift Correction (glossary)	54
Drift Correction (glossary)	55
Dualism (glossary)	55
E	56
E-Services (glossary)	56
Effectiveness (glossary)	56
Element (glossary)	57
Ellipsoid (glossary)	57
Ellipsoidal Height or Geodetic Height (glossary)	58
Emergence (glossary)	58
Emergent Behavior (glossary)	59
Emergent Property (glossary)	59
Enabling System (glossary)	60
Encapsulation (glossary)	60
Engineered System (glossary)	61
Engineering (glossary)	62
Engineering Change Management (glossary)	62
Engineering Change Proposal (ECP) (glossary)	63
Engineering Coordinate Reference System (glossary)	63
Enterprise (glossary)	64
Enterprise Architecture (glossary)	65
Enterprise System (glossary)	66
Enterprise Systems Engineering (ESE) (glossary)	66
Entropy (glossary)	67
Environment (glossary)	68
Equity (glossary)	68
Ethics (glossary)	69
Evolutionary (glossary)	70
Executable System Model (glossary)	70
Extended Enterprise (glossary)	71
F	72
Failure (glossary)	72
Failure Modes and Effects Criticality Analysis (glossary)	73
Feature (glossary)	73
Feature attribute (glossary)	74
Feature Catalog (glossary)	74
Feature catalogue (glossary)	75
Federation of Systems (FoS) (glossary)	75
Flexibility (glossary)	76
Form, Fit, Function, and Interface (F3I) (glossary)	76
Framework (glossary)	77
Function (glossary)	77
Functional Architecture (glossary)	78
Functional redundancy (glossary)	79
G	80
Gazetteer (glossary)	80
General System Theory (glossary)	80
Geodesic or Geodesic Line (glossary)	81
Geodesy (glossary)	81
Geodetic Coordinate System (glossary)	82
Geodetic Datum (glossary)	82
Geodetic Reference Frame (glossary)	83
Geographic coordinates (glossary)	83
Geographic Data (glossary)	84
Geographic Identifier (glossary)	84
Geographic Imagery (glossary)	85
Geographic Information (glossary)	85
Geographic Information System (glossary)	86
Geoid (glossary)	86
GEOINT (glossary)	87
Geopositioning (glossary)	87
Glossary:Principle	88
Governance (glossary)	88
Gravity-Related Height (glossary)	89
Green Engineering (glossary)	89
H	90
Habitability (glossary)	90
Hard System (glossary)	90
Hardware-in-the-Loop Testing (glossary)	91
Healthcare (glossary)	91
Healthcare Systems Engineering (glossary)	92
Height (glossary)	92
Heuristic (glossary)	93
Hierarchy (glossary)	93
High Reliability Organizations (HROs) (glossary)	94
Holism (glossary)	95
Holistic (glossary)	95
Homeostasis (glossary)	95
Human Factors (glossary)	96
Human in the loop (glossary)	96
Human Survivability (glossary)	97
Human Systems Integration (HSI) (glossary)	97
Hydrography (glossary)	98
I	99
Implementation (glossary)	99
In-Process Validation (glossary)	99
Inclusion (glossary)	100
Increment (glossary)	100
Incremental (glossary)	101
Industrial Engineering (glossary)	101
Information and Communications Technologies (ICT) (glossary)	102
Information Category (glossary)	102
Information Need (glossary)	103
Information Technology (glossary)	103
Infrastructure (glossary)	104
Input (glossary)	104
Input-Output Flow (glossary)	105
Installation (glossary)	105
Integrated Product Team (IPT) (glossary)	106
Integration (glossary)	106
Integrity (glossary)	107
Inter-Node Interaction (glossary)	107
Interface (glossary)	108
Internal Coordinate Reference System (glossary)	108
Internode Interaction (glossary)	109
Interoperability (glossary)	109
Issue (glossary)	110
Iteration (glossary)	110
K	111
Knowledge (glossary)	111
L	112
Land Cover (glossary)	112
Land Use (glossary)	112
Latent (glossary)	113
Layer (glossary)	113
Leader (glossary)	114
Lean Systems Engineering (LSE) (glossary)	114
Lean Value Stream Mapping (glossary)	115
Legacy System (glossary)	115
Leverage (glossary)	116
Life Cycle (glossary)	116
Life Cycle Cost (LCC) (glossary)	117
Life Cycle Management (glossary)	117
Life Cycle Model (glossary)	118
Life Cycle Process (glossary)	118
Localized Capacity (glossary)	119
Location (glossary)	119
Location-Based Service (LBS) (glossary)	120
Logical Architecture (glossary)	120
Logistics (glossary)	121
Loose Coupling (glossary)	121
Loss-Driven Systems Engineering (glossary)	122
M	123
Maintainability (glossary)	123
Maintenance (glossary)	123
Manpower (glossary)	124
Map (glossary)	124
Map Projection (glossary)	125
Market Analysis (glossary)	125
Mean Sea Level(glossary)	126
Measurable Concept (glossary)	126
Measure (glossary)	127
Measure of Effectiveness (MoE) (glossary)	128
Measure of Performance (MoP) (glossary)	128
Measurement (glossary)	129
Meta-model (glossary)	129
Metadata (glossary)	130
Metric (glossary)	130
Milestone (glossary)	131
Mission (glossary)	131
Mission Analysis (glossary)	132
Mission Engineering (glossary)	132
Model (glossary)	133
Model Management (glossary)	134
Model Transformation (glossary)	134
Model Validation (glossary)	135
Model-Based Systems Engineering (MBSE) (glossary)	135
Modeling Language (glossary)	136
Modeling Tool (glossary)	136
Modularity (glossary)	137
Motion (glossary)	138
N	139
Natural System (glossary)	139
Nautical Chart (glossary)	139
Navigation (glossary)	140
Network (glossary)	140
Neutral State (glossary)	141
Node (glossary)	141
Non-Functional Requirements (glossary)	142
O	143
Occupational Health (glossary)	143
Ontology (glossary)	143
Open System (glossary)	144
Operational (glossary)	144
Operational Capability (glossary)	145
Operational Concept (glossary)	145
Operational Environment (glossary)	146
Operational Mode (glossary)	146
Operational Scenario (glossary)	147
Operations Research (glossary)	147
Opportunity (glossary)	148
Organization (glossary)	149
Organizational (glossary)	149
Organizational Capability (glossary)	150
Orthoimage (glossary)	150
Outcome (glossary)	150
Output (glossary)	151
P	152
Paradigm (glossary)	152
Pattern (glossary)	152
Personnel (glossary)	153
Physical Architecture (glossary)	153
Physical Interface (glossary)	154
Physical Model (glossary)	154
Physical redundancy (glossary)	154
Plan (glossary)	155
Pluralist (glossary)	155
Portfolio (glossary)	156
Portfolio Management (glossary)	156
Portrayal (glossary)	157
Positional accuracy (glossary)	157
Postal address type (glossary)	157
Postmodernist (glossary)	158
Praxis (glossary)	158
Preliminary Design Review (PDR) (glossary)	159
Principle (glossary)	159
Problem (glossary)	160
Process (glossary)	160
Procurement (glossary)	161
Product (glossary)	161
Product System (glossary)	162
Program (glossary)	162
Program Management (glossary)	163
Project (glossary)	163
Project Management (glossary)	164
Prototype (glossary)	164
Proving (glossary)	165
Purpose (glossary)	165
Purposeful (glossary)	166
Purposive (glossary)	166
Q	167
Qualification (glossary)	167
Quality (glossary)	168
R	169
Rationale (glossary)	169
Recovery (glossary)	169
Recursion (glossary)	170
Reductionism (glossary)	170
Redundancy (glossary)	171
Regularity (glossary)	171
Reliability (glossary)	172
Remote sensing (glossary)	172
Reparability (glossary)	173
Requirement (glossary)	173
Resilience (glossary)	174
Resolution (of imagery) (glossary)	174
Restructuring (glossary)	175
Reverse Engineering (glossary)	175
Rhumb Line (glossary)	176
Risk (glossary)	176
Risk Management (glossary)	177
Robustness (glossary)	177
Routing (glossary)	178
S	179
Safety (glossary)	179
Satellite Positioning System (glossary)	179
Scalability (glossary)	180
Scenario (glossary)	180
Scope (glossary)	181
Security (glossary)	181
Semantic Interoperability (glossary)	182
Semantics (glossary)	182
Service (glossary)	183
Service Life Extension (SLE) (glossary)	184
Service Science (glossary)	185
Service System (glossary)	185
Service Systems Engineering (glossary)	186
Service Value Chain (glossary)	187
Set Driver (glossary)	187
Set Modifiers (glossary)	188
Set-Based Design (glossary)	188
Simulation (glossary)	189
Simulator (glossary)	189
Six Sigma (glossary)	190
Social System (glossary)	190
Sociotechnical System (glossary)	191
Soft System (glossary)	191
Soft Systems Methodology (glossary)	192
Software (glossary)	192
Software Assurance (glossary)	193
Software Engineering (glossary)	193
Software System (glossary)	194
Software-in-the-Loop Testing (glossary)	194
Solution (glossary)	195
Spatial Reference (glossary)	195
Spatial Reference System (glossary)	195
Spatial Reference (glossary)	196
Specialty Engineering (glossary)	196
Stage (glossary)	197
Stakeholder (glossary)	197
Stakeholder Needs and Requirements (glossary)	198
State (glossary)	199
Statistical Process Control (glossary)	199
Structure (glossary)	200
Supplier (glossary)	200
Survivability (glossary)	201
Sustainment (glossary)	201
Synectics (glossary)	202
Synergy (glossary)	202
Synthesis (glossary)	203
System (glossary)	203
System Analysis (glossary)	204
System Assurance (glossary)	205
System Boundary (glossary)	205
System Breakdown Structure (glossary)	206
System Capability (glossary)	206
System Context (glossary)	207
System Coupling Diagram (glossary)	207
System Definition (glossary)	208
System Deployment and Use (glossary)	209
System Element (glossary)	209
System Hardware Assurance	210
System of Systems (SoS) (glossary)	216
System Property (glossary)	217
System Realization (glossary)	217
System Requirement (glossary)	218
System-of-Interest (glossary)	218
Systemist (glossary)	219
Systems Approach (glossary)	219
Systems Biology (glossary)	220
Systems Concept (glossary)	220
Systems Development (glossary)	221
Systems Engineer (glossary)	221
Systems Engineering (glossary)	222
Systems Engineering Management (SEM) (glossary)	224
Systems Engineering Plan (SEP) (glossary)	224
Systems Integration (glossary)	225
Systems Science (glossary)	225
Systems Thinking (glossary)	226
T	227
Tailoring (glossary)	227
Task (glossary)	227
Team (glossary)	228
Technical Management (glossary)	228
Technical Performance Measure (TPM) (glossary)	229
Temporal Architecture (glossary)	229
Test Cases (glossary)	230
Threat (glossary)	230
Tolerance (glossary)	231
Total Ownership Cost (glossary)	231
Traceability (glossary)	232
Training (glossary)	232
Transition of Modes (glossary)	233
Transport network (glossary)	233
U	234
Uncertainty (glossary)	234
Unitary (glossary)	234
Use Case (glossary)	235
Useful life (glossary)	235
User (glossary)	236
Utility network (glossary)	236
V	237
Validation (glossary)	237
Value (glossary)	238
Variety (glossary)	239
Vee (V) Model (glossary)	239
Verification (glossary)	240
Verification and Validation Action (glossary)	241
Verification and Validation Configuration (glossary)	241
Verification and Validation Procedure (glossary)	242
Verification and Validation Tool (glossary)	242
Viable (glossary)	243
View (glossary)	243
Viewpoint (glossary)	244
Vignette (glossary)	244
W	245
White-Box System (glossary)	245
Wicked Problem (glossary)	245
Acronyms	246
Acronyms	246
References
Article Sources and Contributors	260
Image Sources, Licenses and Contributors	271

Glossary

A
Absorption (glossary)

The ability of a system to withstand a disturbance without a fundamental breakdown in the system's performance or structure -- adapted from (Woods 2006)
Absorption is a resilience principle that supports the robustness attribute according to Jackson and Ferris (2013).

Sources
Woods, David D. 2006. "Essential Characteristics of Resilience." In E. Hollnagel, D. D. Woods, and N. Leveson.
"Resilience Engineering: Concepts and Precepts." Aldershot, UK: Ashgate Publishing Limited.
Jackson, Scott, and Timothy Ferris. 2013. "Resilience Principles for Engineered Systems." Systems Engineering 16 (2):152-164.

Discussion
This definition is in the context of resilience for which David Woods is an authority.

Abstract Model (glossary)


(1) A simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions. (Pearsall 2012)
(2) An abstract or conceptual representation of a system that does not have a physical or concrete existence. (Created for SEBoK)

Sources
(1) Pearsall, Judy (editor). 2012. Oxford Dictionaries Online. Oxford, England, UK: Oxford University Press. Available at : http://oxforddictionaries.com/definition/english/model [1].
(2) This definition was developed for the SEBoK v. 1.0.

Discussion
An abstract model contrasts with a concrete physical model. It can be further classified as descriptive or analytical (See article Types of Models).

References
[1] http://oxforddictionaries.com/definition/english/model


Abstract Syntax (glossary)


(1) A form of representation of data that is independent of machine-oriented structures and encodings and also of the physical representation of the data. (Dictionary.com 2012)
(2) The set of constructs and associated rules to create well-formed models. (Created for SEBoK)

Sources
(1) Dictionary.com. 2012. The Free On-line Dictionary of Computing. Denis Howe. http:/ / dictionary. reference. com/browse/abstract%20syntax (accessed: September 07, 2012).
(2) This definition was developed for the SEBoK v. 1.0.

Discussion
None.

Abstraction (glossary)


(1) A view of an object that focuses on the information relevant to a particular purpose and ignores the remainder of the information. (ISO/IEC 2010)
(2) The process of formulating a view. (ISO/IEC 2010)
(3) "A [simplified] replica of the concrete. For example, the abstract architectural principle of redundancy can be realized in the concrete manifestation of a concrete communications system." (Lonergan, 1992)

Source
(1)-(2) ISO/IEC. 2010. Systems and Software Engineering Vocabulary (SEVocab) - ISO/IEC 24765. in International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC) [database online]. Geneva, Switzerland, 2010. Available from http://pascal.computer.org/sev_display/index.action.
(3) Lonergan, Bernard, "Insight" University of Toronto Press, Toronto, 1992, p. 111.

Discussion
None.


Acceptance Criteria (glossary)


The procurement specification, in the context of the overall agreement, should clearly state the criteria by which the acquirer will accept delivery from the supplier. A verification matrix can be used to clarify these criteria. (INCOSE 2011, Section 6.1.15, p 259)

Source
INCOSE. 2011. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities. Version
3.2.2. San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2

Discussion
None.

Acceptance Sampling (glossary)


In acceptance sampling many examples of a product are presented for delivery. The consumer samples from the lot and each member of the sample is then either categorized as "acceptable" or "unacceptable" based on an attribute (attribute sampling) or measured against one or more metrics (variable sampling). Based on the measurements, an inference is made as to whether the lot meets the customer requirements. There are four possible outcomes of the sampling of a lot, as shown in Table 1.

Table 1. Truth Table - Outcomes of Acceptance Sampling. (SEBoK Original)
                  Lot meets requirement Lot fails requirement Sample passes test	No error	Consumer risk
Sample fails test	Producer risk	No error

A sample acceptance plan balances the risk of error between the producer and consumer. Detailed ANSI/ISO/ASQ standards describe how this allocation is performed. (ANSI/ISO/ASQ 1993)

Sources
ANSI/ISO/ASQ. 1993. Statistics-Vocabulary and Symbols-Statistical Quality Control. Philadelphia, PA, USA: American National Standards Institute (ANSI)/International Standards Organization (ISO)/American Society for Quality(ASQ) :A3534-2-1993.

Discussion
A company cannot test every one of its products due to either the need for destructive testing requirements, or the volume of products being too large. Acceptance sampling solves this by testing a sample of product for defects. The process involves batch size, sample size and the number of defects acceptable in the batch. This process allows a company to measure the quality of a batch with a specified degree of statistical certainty without having to test every unit of product. The statistical reliability of a sample is generally measured by a t-statistic.


Acquirer (glossary)


The stakeholder that acquires or procures a product or a service from a supplier. (ISO/IEC 2010)

Source
ISO/IEC. 2010. Systems and Software Engineering -- Life Cycle Management -- Part 2: Guide for the Application of ISO/IEC 15288 (systems life cycle processes). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), ISO/IEC DTR 24748-2.

Discussion
None.

Acquisition (glossary)


The process of obtaining a system, product or service. (ISO/IEC/IEEE 2015)

Sources
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.

Discussion
None.


Acquisition Strategy (glossary)


A comprehensive, integrated plan that identifies the acquisition approach and describes the business, technical, and support strategies that management will follow to manage program risks and meet program objectives. The acquisition strategy should define the relationship between the acquisition phases and work efforts, and key program events such as decision points, reviews, contract awards, test activities, production lot/delivery quantities, and operational deployment objectives. (DAU 2010)

Source
DAU. 2010. Defense Acquisition Guidebook (DAG). Ft. Belvoir, VA, USA: Defense Acquisition University (DAU)/U.S. Department of Defense (DoD).

Discussion
None.

Activity (glossary)

According to ISO/IEC/IEEE 24774, activities are defined as "set of cohesive tasks of a process".
(ISO/IEC/IEEE 2021)

Sources
ISO/IEC/IEEE. 2021. Systems and software engineering - Life cycle management - Specification for process description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24774:2021, Clause 3.1.

Discussion
None.


Adaptability (glossary)


(1) An adaptive system is one that is able to change itself or its environment if its effectiveness is insufficient to achieve its current or future goals or objectives. (Ackoff 1971)
(2) Attributes of software that bear on the opportunity for its adaptation to different specified environments without applying other actions or means than those provided for this purpose for the software considered. (INCOSE 1998)
(3) The ability of a system to acclimate physically and functionally to a new operating environment with a minimal degree of degradation to capability performance. (Wasson 2006)
(4) the ability of the system to become suitable for a new use or purpose and to what range or sources of variation. According to Jackson (2016) adaptability is an attribute of a resilient system.

Sources
(1) Ackoff, R.L. 1971. "Towards a System of Systems Concepts." Management Science 11: 11.
(2) INCOSE. 1998. INCOSE SE Terms Glossary. In: INCOSE Concepts and Terms, Working Group (ed.). Seattle, WA, USA: International Council on Systems Engineering.
(3) Wasson, Charles S. 2006. System Analysis, Design, and Development. Edited by A. P. Sage, Wiley Series in Systems Engineering and Management. Hoboken, NJ, USA: John Wiley & Sons.
(4) Jackson, Scott. 2016. "Evaluation of resilience principles for engineered systems." PhD Research, Engineering, University of South Australia.

Discussion
(1) A system science definition, which applies to any level of system
(2) The term in a software context where it is frequently used, the same idea could apply to human systems. The 1998 INCOSE SE Terms Glossary is an authoritative source.
(3) A more general definition, which applies to complex engineered systems. The book by Wasson is a standard systems engineering textbook.


Address (glossary)


Insert definition here. (Reference YEAR)

Source
Insert full source info (Author Last, FI. YEAR. TITLE. Publisher. URL)

Annotation
If there is discussion around why this is the appropriate definition, include here. If not, please replace with "None".


Adversity (glossary)


A condition that may degrade the desired capability of a system. (Brtis 2016)

Source
Brtis, John. 2016. How to Think About Resilience in a DoD Context. Colorado Springs, CO: MITRE Corporation.

Discussion
In the context of resilience adversity can include an encounter with a threat or an internal disruption such as human error.

Aggregate (glossary)


A subset of a system made up of several system elements and physical interfaces (indiscriminately system elements or sub-systems) on which a set of verification and validation actions is applied. (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
None.


Agile (glossary)


(1) Response ability state marked by high competence at both proactive and reactive change. (Dove 2001, 69)
(2) Project execution methods can be described on a continuum from "adaptive" to "predictive." Agile methods exist on the "adaptive" side of this continuum, which is not the same as saying that agile methods are "unplanned" or "undisciplined." (INCOSE 2011, 40, 183)

Source
(1) Dove, R. 2001. Response Ability: The Language, Structure, and Culture of the Agile Organization. New York, NY, USA: John Wiley & Sons.
(2) INCOSE 2011. INCOSE Systems Engineering Handbook, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE). INCOSE-TP-2003-002-03.2.2.

Discussion
None.

Agility (glossary)


Derivation of the physical ability to act (response ability) and the intellectual ability to find appropriate things to act on (knowledge management). (Dove 2001, p. 9)

Source
Dove, R. 2001. Response Ability: The Language, Structure, and Culture of the Agile Organization. New York, NY, USA: John Wiley & Sons.

Discussion
None.


Agreement (glossary)


Mutual acknowledgment of terms and conditions under which a working relationship is conducted.
(ISO/IEEE 2008, 1, Section 4.4)

Source
ISO/IEEE. 2008. Systems and Software Engineering - Software Life Cycle Processes. Geneva, Switzerland: International Organization for Standards (ISO)/Institute of Electrical & Electronics Engineers (IEEE) Computer Society, ISO/IEEE 12207:2008(E).

Discussion
None.

Analytical Model (glossary)


Mathematical model into which data are loaded for analysis. (Turban, et al 2010)

Source
Turban, E., R. Sharda, and D. Delen. 2010. Decision Support and Business Intelligence Systems, 9th ed. Prentice-Hall.

Discussion
In the context of systems engineering (SE), it may be considered that the model represents a System-of-Interest (SoI).


Antipattern (glossary)


(1) An antipattern is just like a pattern except that instead of a solution it gives something that looks superficially like a solution but isn't one. (Koenig 1995)
(2) Pattern of failure. (SEI 2012)

Sources
(1) Koenig, A. (March/April 1995). "Patterns and Antipatterns". Journal of Object-Oriented Programming 8, (1): 46-48.
(2) SEI 2012. Patterns of Failure: System Archetypes. Available at http://www.sei.cmu.edu/acquisition/research/ pofsa.cfm.

Discussion
A full discussion of Antipatterns and how they relate to systems thinking can be found in Patterns of Systems Thinking

Architecting (glossary)


(1) Process of conceiving, defining, expressing, documenting, communicating, certifying proper implementation of, maintaining and improving an architecture throughout a system's life cycle (ISO/IEC/IEEE 2011)
(2) The architecting process sometime involves the use of heuristics to establish the form of architectural options before quantitative analyses can be applied. Heuristics are design principles learned from experience. (Rechtin 1990)

Source
(1) ISO/IEC/IEEE. 2011. Systems and software engineering - Architecture description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE), ISO/IEC/IEEE 42010.
(2) Rechtin, E. 1990. Systems Architecting: Creating & Building Complex Systems. Upper Saddle River, NJ, USA: Prentice-Hall.

Discussion
None.


Architecture (glossary)


(1) fundamental concepts or properties of a system in its environment embodied in its elements, relationships, and in the principles of its design and evolution (ISO/IEC/IEEE 2015, Section 4.5)
(2) The organizational structure of a system or component; the organizational structure of a system and its implementation guidelines. (ISO/IEC 2009, 1)
(3) Fundamental concepts or properties of a system in its environment embodied in its elements, relationships, and in the principles of its design and evolution. (ISO/IEC 2011, section 3.2)

Source
(1) ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.
(2) ISO/IEC/IEEE. 2009. Systems and Software Engineering - System and Software Engineering Vocabulary Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronic Engineers (IEEE) 2009 ISO/IEC/IEEE 24765:2009 [database online]. Available from http://pascal.computer.org/sev_display/index.action.
(3) ISO/IEC/IEEE. 2011. Systems and Software Engineering - Architectural Description. Geneva, Switzerland: International Organization for Standards (ISO)/International Electrotechnical Commission (IEC), ISO/IEC 42010:2011.

Discussion
A few definitions are presented here to illustrate the different ways that authors define architecture. Note that many authors write extensively on architecture without ever defining what they mean by the term.
The use of the word fundamental (definitions (1) and (3)) is problematic, since it has no universal definition. In practice, the level of detail in an architecture depends on the context of use and the purpose to which it is being designed. In the early (conceptual) stages it might only contain a high-level description of the system as a whole, but in later stages the key features of all key subsystems need to be mapped out. An architectural description should therefore also justify what is included and what is excluded.
ISO/IEC/IEEE 15288:2015 is normative - see above. The architecture associated with a system-of-interest is conceptual and is realized through an architectural description.
ISO/IEC/IEEE 42010:2011 is normative - see above.
OMG 2010 is normative - "The organizational structure and associated behavior of a system. An architecture can be recursively decomposed into parts that interact through interfaces, relationships that connect parts, and constraints for assembling parts."
Works Cited
OMG. 2010. OMG Systems Modeling Language Specification, version 1.2, July 2010. http:/ / www. omg. org/ technology/documents/spec_catalog.htm.


Architecture Framework (glossary)


Conventions, principles and practices for the description of architectures established within a specific domain of application and/or community of stakeholders. (ISO/IEC/IEEE 2011)

Source
ISO/IEC/IEEE. 2011. Systems and software engineering - Architecture description. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions. ISO/IEC/IEEE 42010:2011. Available at https://www.iso.org/standard/50508.html [1].

Discussion
Examples of architecture frameworks include:
DoDAF: (DOD. 2010. DOD Architecture Framework. Version 2.02. Arlington, VA, USA: US Department of Defense. Available at: http://cio-nii.defense.gov/sites/dodaf20/)
MoDAF: (MOD. 2010. MOD Architecture Framework. Version 1.2.004. UK Ministry of Defence. Available at: http://www.mod.uk/DefenceInternet/AboutDefence/WhatWeDo/InformationManagement/MODAF/.)
TOGAF: (The Open Group. 2011. TOGAF, version 9.1. Hogeweg, The Netherlands: Van Haren Publishing. Accessed August 29, 2012. Available at: https:/ / www2. opengroup. org/ ogsys/ jsp/ publications/ PublicationDetails.jsp?catalogno=g116.)
TRAK: TRAK Enterprise Architecture Framework. Available at: https:/ / sourceforge. net/ projects/ trak/ . Recognised by an INCOSE team award (https:/ / www. incose. org/ about-incose/ incose-recognition/ working-group-awards#2011)
Zachamn: (Zachman, J. 2008. "John Zachman's Concise Definition of The Zachman Framework(tm)." Zachman International Enterprise Architecture. Accessed August 29, 2012. Available at: http:/ / www. zachman. com/ about-the-zachman-framework.)
See the section 'Enterprise Architecture Frameworks & Methodologies' in Enterprise Systems Engineering Key Concepts

References
[1] https://www.iso.org/standard/50508.html


Assembly Procedure (glossary)


A set of elementary assembly actions to build an aggregate of implemented system elements. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
This definition is most relevant to the usage of this term in the SEBoK (see System Integration article).

Assembly Tool (glossary)


An assembly tool is a physical tool used to connect, assemble or link several implemented system elements and to build aggregates (specific tool, harness, etc.). (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
This definition is most relevant to the usage of this term in the SEBoK (see System Integration article).


Assessment Criterion (glossary)


A characteristic used to assess or compare system elements, physical interfaces, physical architectures, logical architectures, or any such engineering element. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
This definition is most relevant to the usage of this term in the SEBoK in the context of System Analysis. Also see the Analysis and Selection between Alternative Solutions article.

Assessment Score (glossary)


A score that is obtained from assessing a component, a link, a physical architecture, or a functional architecture using a set of assessment criteria. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
This definition is most relevant to the usage of this term in the SEBoK in the context of System Analysis. Also see the Analysis and Selection between Alternative Solutions article.


Attribute (glossary)


An inherent property or characteristic of an entity that can be distinguished quantitatively or qualitatively by human or automated means. (ISO/IEC/IEEE 2007)

Sources
ISO/IEC/IEEE. 2007. Systems and software engineering - Measurement process. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), ISO/IEC/IEEE 15939:2007.

Discussion
There are 8 definitions of attribute in the standards covered by the IEEE Systems and Software Vocabulary Project (sevocab). The included definition is the second, but best seems to capture the intended use of the term in SEBoK. Many uses of the term attribute are specific to database theory and formal modeling. See www.computer.org/sevocab for more detail.
SEVOCAB [1] contains the following note:
[An] attribute can refer either to general characteristics such as reliability, maintainability, and usability or to specific features of a software product. ISO 9000 distinguishes two types of attributes: a permanent characteristic existing inherently in something; and an assigned characteristic of a product, process or system (e.g. the price of a product, the owner of a product). The assigned characteristic is not an inherent quality characteristic of that product, process or system. An attribute expresses some characteristic that is generally common to the instances of a class. The name of the attribute is the name of the role that the value class plays in describing the class, which may simply be the name of the value class (as long as using the value class name does not cause ambiguity).

References
[1] http://www.computer.org/sevocab


Availability (glossary)


Availability is the probability that a repairable system or system element is operational at a given point in time, under a given set of environmental conditions.

Source
Adapted from the following sources:
ASQ. 2011. "Glossary: Availability." American Society for Quality. Available at http://asq.org/glossary/a.html.
DoD. 2010. "Acquipedia: Material Availability." Department of Defense. Available at https:/ / acc. dau. mil/ CommunityBrowser.aspx?id=387703.
ReliaSoft Corporation. 2003. "Availability and the Different Ways to Calculate it." Available at http:/ / www. weibull.com/hotwire/issue79/relbasics79.htm.

Discussion
The definition here is similar to the one given in (ASQ 2011) and in the Department of Defense. Availability has some additional definitions, characterizing what downtime is counted against a system. For inherent availability, only downtime associated with corrective maintenance counts against the system. For achieved availability, downtime associated with both corrective and preventive maintenance counts against a system. Finally, operational availability counts all sources of downtime, including logistical and administrative, against a system.
Availability can also be calculated instantaneously, averaged over an interval, or reported as an asymptotic value. Asymptotic availability can be calculated easily from the mean time to failure and the mean time to repair, but care must be taken to analyze whether or not a systems settles down or settles up to the asymptotic value, and how long it takes until the system approaches that asymptotic value.




B

Baseline (glossary)


A specification or product that has been formally reviewed and agreed upon, that thereafter serves as the basis for further development, and that can be changed only through formal change control procedures. (ISO/IEEE 2008)

Sources
ISO/IEEE. 2008. Systems and Software Engineering - Software Life Cycle Processes. Geneva, Switzerland: International Organization for Standards (ISO)/Institute of Electrical & Electronics Engineers (IEEE) Computer Society, ISO/IEEE 12207:2008(E).

Discussion
There are 7 definitions of baseline in the standards covered by the IEEE sevocab database. The included definition seems most appropriate for SEBoK use. See http://www.computer.org/sevocab for more detail.
The SEVOCAB [1] entry provides 7 definitions followed by this note: A baseline should be changed only through formal configuration management procedures. Some baselines may be project deliverables while others provide the basis for further work. Baselines, plus approved changes from those baselines, constitute the current configuration identification.

References
[1] http://pascal.computer.org/sev_display/index.action


Behavior (glossary)


(1) Systems behavior is a change which leads to events in itself or other systems. Thus, action, reaction or response may constitute behavior in some cases. (Ackoff 1971)
(2) The effect produced when an instance of a complex system or organism is used in its operational environment. (Created for SEBoK)

Source
(1) Ackoff, R.L. 1971. "Towards a System of Systems Concepts". Management Science 17: 11. Hanover, MD, USA: INFORMS.
(2) This definition was developed for the SEBoK.

Discussion
(1) This is the system science definition. Any system has behavior if its actions are in some way visible to systems around it.
(2) This definition associates behavior with an emergent outcome of (complex) deployed system, more analogus to human/animal behavior. Taking this view, the whole organism has behavior but not any of its element systems; e.g., cars have behavior (when driven by people), engines have functions.

Behavioral Architecture (glossary)


(1) An arrangement of functions and their sub-functions and interfaces (internal and external) which defines the execution sequencing, conditions for control or data-flow and the performance requirements to satisfy the requirements baseline. (ISO/IEC 2010)
(2) A set of inter-related scenarios. (Created for SEBoK)

Sources
(1) ISO/IEC. 2010. Systems and Software Engineering, Part 1: Guide for Life Cycle Management. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), ISO/IEC 24748-1:2010.
(2) This definition was developed for the SEBoK.

Discussion
Within the terms and definitions related to System Architecture, the present SEBoK tries to fit the real practices and to provide some consistency between those terms.
Definition (1) comes from ISO/IEC/IEEE 24748 - 4 (past IEEE 1220, ISO/IEC 26702) as functional architecture; but modified because in the standard functional and behavioral aspects are mixed. In reality the functional architecture emphasizes more on transformations performed rather than the sequencing of their executions. See definition of functional architecture (glossary).
Definition (2) is a good suggestion to represent a behavioral architecture, because a scenario of functions chains the execution of functions taking into account synchronization between functions and arrival of triggers.


Binding (glossary)


(1) The point in time when relationships are established. (Created for SEBoK)
(2) Static binding is done once and then the relationship remains unchanged. (Created for SEBoK)
(3) Dynamic binding is established at the point of a request and disappears after the request has been satisfied. (Created for SEBoK)

Source
These definitions were developed for SEBoK v. 1.0.

Discussion
This definition is most relevant to the usage of this term in the SEBoK (See article Applications of Systems Engineering).

Black-Box System (glossary)


A device, system or object which can be viewed solely in terms of its input, output and transfer characteristics without any knowledge of its internal workings, that is, its implementation is "opaque" (black). (Ashby 1956)

Sources
Ashby, W R. 1956. Introduction to Cybernetics. "Chapter 11" London, UK: John Wiley & Sons.

Discussion
None.


Body of Knowledge (glossary)


(1) The purpose of the Guide to the Software Engineering Body of Knowledge is to provide a consensually validated characterization of the bounds of the software engineering discipline and to provide a topical access to the Body of Knowledge supporting that discipline. (Abran and Moore 2004)
(2) Identifies that subset of the project management body of knowledge generally recognized as good practice. "Generally recognized" means the knowledge and practices described are applicable to most projects most of the time, and there is consensus about their value and usefulness. "Good practice" means there is general agreement that the application of these skills, tools, and techniques can enhance the chances of success over a wide range of projects...The PMBOK(r) Guide also provides and promotes a common vocabulary within the project management profession...The Project Management Institute views this standard as a foundational project management reference for its professional development programs and certifications. (PMI 2013)
(3) Document explicitly intended to capture the knowledge for entry into the practice of [an] engineering [discipline] at the professional level. (ASCE 2008)

Source
(1) Abran, A. and J.W. Moore (exec. eds); P. Bourque and R. Dupuis (eds.). 2004. Guide to the Software Engineering Body of Knowledge (SWEBOK Guide). Piscataway, NJ, USA: The Institute of Electrical and Electronic Engineers, Inc. (IEEE). Available at: http://www.computer.org/portal/web/swebok.
(2) PMI. 2013. A Guide to the Project Management Body of Knowledge (PMBOK(r) Guide). 5th ed. Newtown Square, PA, USA: Project Management Institute (PMI).
(3) ASCE. 2008. Civil Engineering Body of Knowledge for the 21st Century: Preparing the Civil Engineer for the Future, 2nd ed. Reston, VA, USA: American Society of Civil Engineers.

Discussion
None.


Boundary (glossary)


Please see system boundary.

Business (glossary)


A business is an organization engaged in the trade of goods, services, or both to consumers. (Sullivan and Sheffrin 2003)

Source
Sullivan, A. and S.M. Sheffrin. 2003. Economics: Principles in Action. Upper Saddle River, NJ, USA: Pearson Prentice Hall.

Discussion
A business may be a commercial company, a not-for-profit organization, or state-owned. Its consumers may be individuals, projects, other businesses, or enterprises.
There are many different legal forms of businesses, which vary across political entities. In the context of the SEBoK, the term business would include a government agency.
The word enterprise is sometimes used synonymously with "business". However in the SEBoK, a business is a specific type of enterprise, usually a legal entity with a form of centralized management. An enterprise is a purposeful activity often involving collaboration across organizational boundaries.

Business Process (glossary)


An inter-related set of cross-functional activities or events that result in the delivery of a specific product or service to a customer. (ISACA 2012)

Source(s)
ISACA. 2012. "Glossary of Terms: Business Process." Information Systems Audit and Control Association. Accessed July 23, 2012. Available at: http:/ / www. isaca. org/ Knowledge-Center/ Documents/ Glossary/ glossary. pdf.

Discussion
None.


Business Process Outsourcing (glossary)


The transfer of internal business processes, such as customer relationship management, finance & accounting, human resources and procurement, to an external service provider. (Gewald and Rouse 2012)

Source(s)
Gewald, H. and A. Rouse. 2012. "Comparing Business Process and IT Outsourcing Risks--An Exploratory Study in Germany and Australasia," 45th Hawaii International Conference on System Science (HICSS), 4-7 Jan. 2012, 275-284. Available at: http:/ / ieeexplore. ieee. org/ stamp/ stamp. jsp?tp=& arnumber=6148641& isnumber=6148595.

Discussion
The term business process outsourcing is often confounded with "information technology (IT) outsourcing", they are related but not synonymous. IT oriented companies and consultancies often do so. Gartner's definition is a good example: "the delegation of one or more IT-intensive business processes to an external provider that, in turn, owns, administrates and manages the selected processes based on defined and measurable performance metrics."[1]. Any business process may be outsourced.

References
[1]  http://www.gartner.com/it-glossary/business-process-outsourcing-bpo/




C

Call Center (glossary)


Telephone service facility set up to handle a large number of (usually) both inbound and outbound calls. Some firms, however, specialize only in calls that are inbound (for assistance, help, or ordering) or outbound (for sales promotion or other messages). Most telephone orders are handled by call centers and not by the manufacturers or suppliers of goods or services. (BusinessDictionary.com)

Sources
BusinessDictionary.com, s.v. "Call Center," http:/ / www. businessdictionary. com/ definition/ call-center. html (accessed July 25, 2012).

Discussion
None.

Capability (glossary)


(1) The ability to achieve a desired effect under specified (performance) standards and conditions through combinations of ways and means (activities and resources) to perform a set of activities. (DoD 2009)
(2) The ability to execute a specified course of action. It is defined by a user and expressed in non-equipment based operational terms. (MOD 2004)
(3) The ability to execute a specified course of action. A capability may or may not be accompanied by an intention. (DoD 2009)
(4) An outcome or effect which can be achieved through use of features of a system of interest and which contributes to a desired benefit or goal (Created for SEBoK)

Source
(1) DoD. 2009. DoD Architecture Framework (DoDAF), version 2.0. Washington, DC, USA: U.S. Department of Defense (DoD).
(2) MOD. 2004. Ministry of Defence Architecture Framework (MODAF), version 2. London, UK: U.K. Ministry of Defence.
(3) DoD. 2009. Department of Defense Dictionary of Military and Associated Terms. Washington, DC, USA: U.S. Department of Defense (DoD), Joint Publication 1-02, 17 March 2009.
(4) This definition was developed for the SEBoK.


Discussion
Capability provides an umbrella term for the ability to achieve many objectives and effects that may be specified during the SE lifecycle: missions, mission objectives, user needs, user requirements, system
In the defense context capability refers to an operational outcome available to the end user when engineered systems are deployed and fully supported (including trained people, logistics, doctrine, infrastructure, etc.) in an operational environment. It is used either to specify a required capability need (i.e., what is sought) or to describe the currently fielded capability (i.e., the currently available effect) to help identify gaps. The term capability has been defined to encourage military user to describe current and future needs independent of current solution technology
The term capability is less common outside of defense but is sometimes used to describe outcomes a user needs to achieve which connect the systems feature to the business or enterprise benefit. You can say that they lead your customer into understanding how the features you have deliver the benefit.
For example, a fingerprint scanner on a desktop computer can store passwords. This saves five minutes every time the user forgets a password and has to look it up or reset it, it also makes the computer more secure. The fingerprint scanner is the Feature, storing passwords is the Capability and saving time and increasing security the Benefit. This is likely to become a more common terminology as Systems Engineering looks to relate stakeholder needs more explicitly with business benefits, see Stakeholder Needs Definition

Capability Management (glossary)


(1) Development and maintenance of all aspects of the ability to conduct certain types of missions in a given environment. (Created for SEBoK)
(2) The planning, organization, assessment and control of capabilities. (Created for SEBoK)

Source
(1)-(2) These definitions were developed for SEBoK v. 1.0.

Discussion
None.


Capacity (glossary)

An attribute of resilience that includes all capabilities to enable a system to withstand a disruption -
adapted from (Jackson 2010)

Sources
Jackson, S. 2010. Architecting Resilient Systems: Accident Avoidance and Survival and Recovery from Disruptions. Edited by A. P. Sage, Wiley Series in Systems Engineering and Management. Hoboken, NJ, USA: John Wiley & Sons.

Discussion
This term is an a accumulation of terms defined by Woods (2006).
Work Cited
Woods, David D. 2006. "Essential Characteristics of Resilience." In Resilience Engineering: Concepts and Precepts. Edited by E. Hollnagel, D. D. Woods, and N. Leveson. Aldershot, UK: Ashgate Publishing Limited.

Cartesian coordinate system (glossary)


Insert definition here. (Reference YEAR)

Source
Insert full source info (Author Last, FI. YEAR. TITLE. Publisher. URL)

Annotation
If there is discussion around why this is the appropriate definition, include here. If not, please replace with "None".



Cartography (glossary)


the science or art of making or drawing maps

Source
Cambridge Online Dictionary. Accessed on May 11, 2022. Available: https:/ / dictionary. cambridge. org/ us/ dictionary/english/cartography

Annotation
None.


Case Study (glossary)


An empirical inquiry that investigates the application of systems engineering practices, principles, and concepts that are based on real-life context. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
This definition describes the approach for the Case Studies included in Part 7: Systems Engineering Implementation Examples.


Catalogue (glossary)


Insert definition here. (Reference YEAR)

Source
Insert full source info (Author Last, FI. YEAR. TITLE. Publisher. URL)

Annotation
If there is discussion around why this is the appropriate definition, include here. If not, please replace with "None".


Chaos (glossary)


(1) A state of disorder or unpredictability. (Oxford English Dictionary)
(2) A chaotic system has elements which are not interconnected and behave randomly with no adaptation or control. (Oxford English Dictionary)
(3) Chaos theory is applied to certain types of dynamic system (e.g. the weather) which, although they have structure and relationships, exhibit un-predictable behavior. These systems are deterministic; their future behavior is fully determined by their initial conditions with no random elements involved. However, their structure is such that (un-measurably) small perturbations in inputs or environmental conditions may result in unpredictable changes in behavior. This behavior is known as deterministic chaos, or simply chaos. (Kellert, 1993)

Sources
(1) and (2) Oxford English Dictionary. s.v. "Chaos."
(3) Kellert, S. 1993. In the Wake of Chaos: Unpredictable Order in Dynamical Systems. Chicago, IL, USA: University of Chicago Press. p. 32. ISBN 0-226-42976-8.

Discussion
(1) and (2) are the general usage definitions in which chaos means random and unconnected, e.g. not a system.
(3) is a mathematical definitions of a class of natural systems which appear chaotic, but have underlying mathematical order them.


Closed System (glossary)


A system which has no interactions with its environment. (von Bertalanffy 1968)

Sources
von Bertalanffy, L. 1968. General system theory: Foundations, Development, Applications. Revised ed. New York, NY, USA: George Braziller.

Discussion
None.

Coercive (glossary)


A problem situation in which the participants "have few interests in common and, if free to express them, would hold conflicting values and beliefs. Compromise is not possible and so no agreed objectives direct action. Decisions are taken on the basis of who has most power and various forms of coercion employed to ensure adherence to commands." (Jackson 2003, p. 19)

Sources
Jackson, M. 2003. Systems Thinking: Creating Holisms for Managers. Chichester, UK: John Wiley & Sons.

Discussion
None.


Cognitive Bias (glossary)


A systematic pattern of deviation from norm or rationality in judgment. (Haselton et al. 2005)

Source
Haselton, M.G., D. Nettle, and P.W. Andrews. 2005. "The evolution of cognitive bias." In D.M. Buss (Ed.). The Handbook of Evolutionary Psychology. Hoboken, NJ, US: John Wiley & Sons Inc. pp. 724-746.

Discussion
None.

SEBOK v. 2.2, released 15 June 2020

Cohesion (glossary)


(1) The attribute of a system that allows it to operate before, during, and after an encounter with a threat. (Hitchins 2009)
(2) The manner and degree to which the tasks performed by a single software module are related to one another. (ISO/IEC/IEEE 2010)
(3) The act or state of cohering, uniting, or sticking together. (Dictionary.com 2012)

Sources
(1) Hitchins, D. 2009. "What Are The General Principles Applicable to Systems?" INCOSE Insight 12 (4) (Dec 2009): 59-63.
(2) ISO/IEC/IEEE. 2010. Systems and Software Engineering - System and Software Engineering Vocabulary (SEVocab). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2010.
(3) Dictionary.com. 2012. "Cohesion." Available at http://dictionary.reference.com/browse/cohesion [1].

Discussion
In systems engineering, cohesion refers both to the property of natural and social systems that similar elements are attracted to each other and to ability to operate in a threat environment. The context determines which definition is appropriate.

References
[1] http://dictionary.reference.com/browse/cohesion


Competency (glossary)


An observable, measurable set of skills, knowledge, abilities, behaviors, and other characteristics an individual needs to successfully perform work roles or occupational functions. Competencies are typically required at different levels of proficiency depending on the specific work role or occupational function. Competencies can help ensure individual and team performance aligns with the organization's mission and strategic direction. (OPM 2014)
a measure of an individual's ability in terms of their knowledge, skills, and behavior to perform a given role (Holt and Perry, 2011)

Source
U.S. Office of Personnel Management (OPM), Human Capital Assessment and Accountability Framework (HCAAF) Resource Center, "Glossary". http:/ / www. opm. gov/ hcaaf_resource_center/ glossary. asp [1] Last accessed June, 2015.
Holt, Jon, and Perry, Simon,A Pragmatic Guide to Competency, Tools, Frameworks, and Assessment.BCS, The Chartered Institute for IT, Swindon, UK, 2011.

Discussion
There is disagreement in the literature on whether competency is only for individuals or if the term competency can be used at the team, project, and enterprise level.

References
[1] http://www.opm.gov/hcaaf_resource_center/glossary.asp


Complex (glossary)


(1) An adjective describing a system's design or code that is difficult to understand because of numerous components or relationships among components (ISO/IEC/IEEE 2010).
(2) An adjective describing a system or component that has a design or implementation that is difficult to understand and verify (ISO/IEC/IEEE 2010).

Sources
ISO/IEC/IEEE. 2010. Systems and Software Engineering - System and Software Engineering Vocabulary (SEVocab). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2010.

Discussion
Modified from the definition of complexity in the SEVOCAB.

Complex Adaptive System (CAS) (glossary)


System where the individual elements act independently but jointly behave according to common constraints and goals. In the natural world, a flock of geese is a Complex Adaptive System (CAS). Human-intensive systems are also CASs since each human in the system is independent. (Weaver 1948, 536; Jackson, Hitchins, and Eisner 2010, 41; Flood and Carson 1993; Lawson 2010)

Sources
Jackson, S., D. Hitchins, and H. Eisner. 2010. "What is the systems approach?" INCOSE Insight 13:(1) (March 2010): 41.
Flood, R.L., and E.R. Carson. 1993. Dealing with complexity: An Introduction to the Theory and Application of Systems Science. 2nd ed. New York, NY, USA: Plenum Press.
Lawson, H.W. 2010. A Journey through the Systems Landscape. London, UK: College Publications, Kings College.

Discussion
None.


Complexity (glossary)


(1) A measure of how difficult it is to understand how a system will behave or to predict the consequences of changing it (Sheard and Mostashari 2009)
(2) The degree to which a system's design or code is difficult to understand because of numerous components or relationships among components (ISO/IEC 2009)
(3) A complex system has elements, the relationship between the states of which are weaved together so that they are not fully comprehended, leading to insufficient certainty between cause and effect (INCOSE 2021)

Source
(1) Sheard, S.A. and A. Mostashari. 2009. "Principles of Complex Systems for Systems Engineering". Systems Engineering, 12(4): 295-311.
(2) ISO/IEC. 2009. "Systems and Software Engineering Vocabulary (SEVocab)" - ISO/IEC 24765. in International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC) [database online]. Geneva, Switzerland, 2009 [cited December 21 2009]. Available from http:/ / pascal. computer. org/ sev_display/ index. action.
(3) A complexity Primer for systems Engineers, Revision 1, 2021.