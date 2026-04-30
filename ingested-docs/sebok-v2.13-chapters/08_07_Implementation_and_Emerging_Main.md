(1) Describes the system relationships and environment, resolved around a selected system-of-interest. (Flood and Carson 1993)
(2) Diagram defining the highest level view of a system in its environment. (Flood and Carson 1993)

Source
(1) and (2) Flood, R.L. and E.R. Carson. 1993. Dealing with complexity: An introduction to the theory and application of systems science, 2nd ed. New York, NY, USA: Plenum Press.

Discussion
Definition (1) describes the reason for considering context.
Definitions (2) relates context to a context diagram. This is most common way in which context is express in systems engineering. A number of context diagram notations are available.

System Coupling Diagram (glossary)


A paradigm that conveys the essence of what systems are used for and how systems relate to each other as portrayed in the figure (Lawson 2010)

Sources
Lawson, H. 2010. A Journey Through the Systems Landscape, UK: College Publications, Kings College.

Discussion

 Situation System - A problem or opportunity situation; either unplanned or planned. The situation may be the work of nature, be man-made, a combination of both or a postulated situation (Thematic System) that is to be used as a basis for deeper understanding and training (for example, business games or military exercises). Thus, the situation may be catastrophe, terrorist action, the capabilities needed for a new system, the next stage in a life cycle of a system. In all cases, in order to affect the situation a response is required.
 Respondent System - The system created to respond to the situation where the parallel bars indicate that this
system interacts with the situation and transforms the situation to a new situation. A Respondent System, based upon the situation that is being treated can have several names such as Project, Program, Mission, Task Force, or


in a scientific context, Experiment. Note that one of the system elements of this system is a control element that directs the operation of the respondent system in its interaction with the situation. This element is based upon an instantiation of a Control System asset, for example a Command and Control System, or a control process of some form.
 System Assets - The sustained assets of an enterprise that are to be utilized in responding to situations. System
assets must be adequately life cycle managed so that when instantiated in a Respondent System will perform their function. These are the systems that are the primary objects of an Enterprise and include their value added products or services as well as their infrastructure systems. Examples of assets include concrete systems such as produced products and/or services, facilities, instruments and tools as well as abstract systems such as theories, knowledge, processes and methods.

System Definition (glossary)


A set of core technical activities of systems engineering, including the activities that are completed primarily in the front-end portion of the system design. This consists of the definition of system requirements, the design of one or more logical and physical architectures, and analysis and selection between possible solution options. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
System definition is a knowledge area in the SEBoK that includes several front-end systems engineering activities, such as system requirements development; functional, logical and physical architectural design, and system analysis. This generally aligns with the "concept stage" as discussed in INCOSE (2012). In the SEBoK, system concept definition is used to discuss the assessment of the mission and stakeholder requirements.
Work Cited
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.


System Deployment and Use (glossary)


A set of core technical activities of systems engineering in ensure that the developed system is operationally acceptable and that the responsibility for the effective, efficient, and safe operations of the system is transferred to the owner. Considerations for deployment and use must be included throughout the system life cycle. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
System Deployment and Use is a SEBoK knowledge area; it includes systems engineering activities for system deployment and operation in its operational environment; and for the maintenance and logistics support of the system through life.

System Element (glossary)


A member of a set of elements that constitutes a system. A system element is a discrete part of a system that can be implemented to fulfill specified requirements. A system element can be hardware, software, data, humans, processes (e.g., processes for providing service to users), procedures (e.g., operator instructions), facilities, materials, and naturally occurring entities (e.g., water, organisms, minerals), or any combination. (ISO/IEC 15288:2015)

Source
ISO/IEC/IEEE. 2015.Systems and Software Engineering - System Life Cycle Processes.Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers.ISO/IEC/IEEE 15288:2015.

Discussion
None.


System Hardware Assurance


 Lead Authors:
 Michael Bear, Donald Davidson, Shawn Fetterolf, Darin Leonhardt, Daniel Radack, Karen Johnson, and Elizabeth A. McDaniel
 Contributing Authors:
 Michael Berry, Brian Cohen, Diganta Das, Houman Homayoun, and Thomas McDermott
-
This article describes the discipline of hardware assurance, especially as it relates to systems engineering. It is part of the SE and Quality Attributes Knowledge Area.

Overview
System hardware assurance is a set of system security engineering activities (see System Security for more information) undertaken to quantify and increase the confidence that electronics function as intended and only as intended throughout their life cycle, and to manage identified risks. The term hardware refers to electronic components, sometimes called integrated circuits or chips. As products of multi-stage processes involving design, manufacturing and post-manufacturing, packaging, and test, they must function properly under a wide range of circumstances. Hardware components - alone and integrated into subcomponents, subsystems, and systems - have weaknesses and vulnerabilities enabling exploitation. Weaknesses are flaws, bugs, or errors in design, architecture, code, or implementation. Vulnerabilities are weaknesses that are exploitable in the context of use (Martin 2014).
Hardware assurance is conducted to minimize risks related to hardware that can enable adversarial exploitation and subversion of functionality, counterfeit production, and loss of technological advantage. Challenges include increasing levels of sophistication and complexity of hardware architectures, integrated circuits, operating systems, and application software, combined with supply chain risks, emergence of new attack surfaces, and reliance on global sources for some components and technologies.
After identifying concerns and applicable mitigations, hardware assurance offers a range of possible activities and processes. At the component level, hardware assurance focuses on the hardware itself and the supply chain used to design and manufacture it; at the subcomponent, subsystems, and system levels, hardware assurance incorporates the software and firmware integrated with the component.
Engineering efforts to enhance trust in hardware have increased in response to complex hardware architectures, the increasing sophistication of adversarial attacks on hardware, and globalization of supply chains. These factors raise serious concerns about the security, confidentiality, integrity, and availability as well as the provenance and authenticity of hardware. The "root of trust" (NIST 2020) of a system is typically contained in the processes, steps, and layers of hardware components and across the systems engineering development cycle. System hardware assurance focuses on hardware components and their interconnections with software and firmware to reduce risks to proper function or other compromises of the hardware throughout the complete life cycle of components and systems. Advances in hardware assurance tools and techniques will strengthen designs, and enhance assurance during manufacturing, packaging, test, and deployment and operational use.


Life Cycle Concerns of Hardware Components
Hardware assurance should be applied at various stages of a component's life cycle from hardware architecture and design, through manufacturing and testing, and finally throughout its inclusion in a larger system. The need for hardware assurance then continues throughout its operational life including sustainment and disposal.
As semiconductor technology advances the complexity of electronic components, it increases the need to "bake-in" assurance. Risks created during architecture, design, and manufacturing are challenging to address during the operational phase. Risks associated with interconnections between and among chips are also a concern. Therefore, improving a hardware assurance posture must occur as early as possible in the life cycle, thereby reducing the cost and schedule impacts associated with "fixing" components later in the life cycle of the system.
A conceptual overview of the typical hardware life cycle (Figure 1) illustrates the phases of the life cycle of components, as well as the subsystems and systems in which they operate. In each phase multiple parties and processes contribute a large set of variables and corresponding attack surfaces. As a result, the potential exists for compromise of the hardware as well as the subcomponents and systems in which they operate; therefore, matching mitigations should be applied at the time the risks are identified.

Both the value of the hardware component and the associated cost of mitigating risks increase at each stage of the life cycle. Therefore, it is important to identify and mitigate vulnerabilities as early as possible. It takes longer to find and fix defects later, thereby increasing the complexity of replacing hardware with "corrected" designs that create system integration issues. In addition to cost savings, early correction and mitigation avoid delays in creating an operational system. It is essential to re-assess risks associated with hardware components throughout the life cycle periodically, especially as operational conditions change.
Hardware assurance during system sustainment is a novel challenge given legacy hardware and designs with their associated supply chains. In long-lived high-reliability systems, hardware assurance issues are compounded by obsolescence and diminished sourcing of components, thereby increasing concerns related to counterfeits and acquisitions from the gray market.

Function as Intended and Only as Intended
Exhaustive testing can check system functions against specifications and expectations; however, checking for unintended functions is problematic. Consumers have a reasonable expectation that a purchased product will perform as advertised and function properly (safely and securely, under specified conditions) - but consumers rarely consider if additional functions are built into the product. For example, a laptop with a web-conferencing capability comes with a webcam that will function properly when enabled, but what if the webcam also functions when turned off, thereby violating expectations of privacy? Given that a state-of-the-art semiconductor component might have billions of transistors, "hidden" functions might be exploitable by adversaries. The statement "function as intended and only intended" communicates the need to check for unintended functions.
Hardware specifications and information in the design phase are needed to validate that components function properly to support systems or missions. If an engineer creates specifications that support assurance that flow down the system development process, the concept of "function as intended" can be validated for the system and mission through accepted verification and validation processes. "Function only as intended" is also a consequence of capturing the requirements and specifications to assure the product is designed and developed without extra


functionality. For example, a Field Programmable Gate Array (FPGA) contains programmable logic that is highly configurable; however, the programmable circuitry might be susceptible to exploitation.
Given the specifications of a hardware component, specialized tools and processes can be used to determine with a high degree of confidence whether the component's performance meets specifications. Research efforts are underway to develop robust methods to validate that a component does not have capabilities that threaten assurance or that are not specified in the original design. Although tools and processes can test for known weaknesses, operational vulnerabilities, and deviations from expected performance, all states of possible anomalous behavior cannot currently be determined or predicted.
Data and information can be used to validate the component's function and should be collected from multiple sources including designers, developers, and members of the user community. Designers and developers can provide deep understanding of the component's intended function and provide tests used to verify its functional performance before fielding. The merging of component design and development information with extensive field data, including third-party evaluation, contributes to assurance that the component is performing specified functions and that no unintended functionality is observed.

Risks to Hardware
Modern systems depend on complex microelectronics, but advances in hardware without attention to associated risks can expose critical systems, their information, and the people who rely on them. "Hardware is evolving rapidly, thus creating fundamentally new attack surfaces, many of which will never be entirely secured". (Oberg 2020) Therefore, it is imperative that risk be modeled through a dynamic risk profile and be mitigated in depth across the entire profile. Hardware assurance requires extensible mitigations and strategies that can and do evolve as threats do. Hardware assurance methods seek to quantify and improve confidence that weaknesses that can become vulnerabilities that create risks are mitigated.
Most hardware components are commercially designed, manufactured, and inserted into larger assemblies by multi-national companies with global supply chains. Understanding the provenance and participants in complex global supply chains is fundamental to assessing risks associated with the components.
Operational risks that derive from unintentional or intentional features are differentiated based on the source of the feature. Three basic operational risk areas related to goods, products, or items are: failure to meet quality standards, maliciously tainted goods, and counterfeit hardware. Counterfeits are usually offered as legitimate products, but they are not. They may be refurbished or mock items made to appear as originals, re-marked products, the result of overproduction, or substandard production parts rejected by the legitimate producer. Counterfeit risks and substandard quality offer avenues for malware insertion and potential impacts to overall system performance and availability.
Failure to follow quality standards including safety and security standards, especially in design, can result in unintentional features or flaws being inadvertently introduced. These can occur through mistakes, omissions, or lack of understanding how features might be manipulated by future users for nefarious purposes. Features introduced intentionally for specific purposes can also make the hardware susceptible to espionage or control of the hardware at some point in its life cycle.

Quantify and Improve Confidence
The quantification of hardware assurance is a key technical challenge because of the complex interplay among designer, manufacturer and supply chains, and adversarial intent, as well as the challenge of defining "security" with respect to hardware function. Quantification is necessary to identify and manage hardware risks within program budgets and timeframes. It enables a determination of the required level of hardware assurance and whether quantification is achievable throughout the hardware's life cycle.


Current methods for quantifying hardware assurance are adapted from the fields of quality and reliability engineering, which use methods like Failure Mode and Effects Analysis (FMEA). (SAE 2021) FMEA is semi-quantitative and combines probabilistic hardware failure data and input from experts. Adapting FMEA to quantify hardware assurance is hampered when it relies on assigning probabilities to human behavior that may be motivated by money, malicious intent, etc. Expert opinion often varies when quantifying and weighting factors used in generating risk matrices and scores. In response, recent efforts are attempting to develop quantitative methods that reduce subjectivity.
Game theoretic analysis (game theory) is the creation of mathematical models of conflict and cooperation between intelligent and rational decision-makers. (Myerson 1991) Models include dynamic, as opposed to static, interactions between attackers and defenders that can quantify the risks associated with potential interactions among adversaries, hardware developers, and manufacturing processes. (Eames and Johnson 2017) Creation of the models forces one to define attack scenarios explicitly and to input detailed knowledge of hardware development and manufacturing processes. Outputs of the model may include a ranking of the most likely attacks to occur based on cost-benefit constraints on the attackers and defenders. (Graf 2017) The results can empower decision-makers to make quantitative trade-off decisions about hardware assurance.
Another quantification method that results in a confidence interval for detecting counterfeit/suspect microelectronics is presented in the SAE AS6171 standard. (SAE 2016) Confidence is based on knowing the types of defects associated with counterfeits, and the effectiveness of different tests to detect those defects. Along the same lines, a standard for hardware assurance might be developed to quantify the confidence interval by testing against a catalogue of known vulnerabilities, such as those documented in the MITRE Common Vulnerabilities and Exposures (CVE) list. (MITRE 2020)
Distributed ledger technology (DLT) is an example of an emerging technology that could enable a standardized approach for quantifying hardware assurance attributes such as data integrity, immutability, and traceability. DLT can be used in conjunction with manufacturing data (such as dimensional measurement, parametric testing, process monitoring, and defect mapping) to improve tamper resistance using component provenance and traceability data. DLT also enables new scenarios of cross-organizational data fusion, opening the door to new classes of hardware integrity checks.

Manage Risks
The selection of specific components for use in subsystems and systems should be the outcome of performance-risk and cost-benefit trade-off assessments in their intended context of use. The goal of risk management and mitigation planning is to select mitigations with the best overall operational risk reduction and the lowest cost impact. The required level of hardware assurance varies with the criticality of a component's use and the system in which it is used.
During a typical development life cycle of a system - architecture, design, code, and implementation - various types of problems can pose risks to the operational functionality of the hardware components provided. These risks include weaknesses or defects that are inadvertent (unintentional), as well as counterfeits that may be either inadvertent or intentionally injected into the supply chain for financial motivations or malicious components designed to change functionality.
Managing risk in the context of hardware assurance seeks to decrease the risk of weaknesses that create attack surfaces that can be exploited, while improving confidence that an implementation resists exploitation. Ideally, risk management reduces risk and maximizes assurance to an acceptable level. Often, risks are considered in the context of likelihood of consequences and the costs and effectiveness of mitigations. However, new operationally impactful risks are recognized continuously over the hardware life cycle and supply chains of components. At the same time hardware weaknesses are often exploited through software or firmware. Therefore, to maximize assurance and minimize operationally impactful risks mitigation-in-depth across all constituent components must be considered.


This highlights the need for a dynamic risk profile.
An example of a post-manufacturing mitigation involves a new hardware risk identified during field operation. A dynamic risk profile can be used to characterize the issue and identify possible resources to address the suspect component function. This profile can also be used to track and address risks throughout its life, including obsolescence-related risk. One means of mitigating this kind of hardware life cycle risk is the use of existing programmable logic.
Just as with software patches and updates, new attack surfaces on hardware may become exposed through the mitigation being applied, and they will likely take a long time to discover. In the example above, the programmable logic is updated to provide a new configuration to protect the hardware. In this context, access to hardware reconfiguration must be limited to authorized parties to prevent an unauthorized update that introduces weaknesses on purpose or by accident. While programmable logic may have mitigated a specific attack surface or type of weakness, additional mitigations are needed to minimize risk more completely. This is mitigation-in-depth - multiple mitigations building upon one another.
Throughout the entire supply chain, critical pieces of information can be inadvertently exposed. The exposure of such information directly enables the creation and exploitation of new attack surfaces. Therefore, the supply chain infrastructure must also be assessed for weaknesses, and the development, use, and maintenance of hardware components assured. The dynamic risk profile offers a framework to balance mitigations in the context of risk and cost throughout the complete hardware and system life cycles.

References
Works Cited
Eames, B.K. and M.H. Johnson. 2017. "Trust Analysis in FPGA-based Systems." Proceeding of GOMACTech 2017, March 20-23, 2017, Reno, NV.
Graf, J. 2017. "OpTrust: Software for Determining Optimal Test Coverage and Strategies for Trust." Proceedings of GOMACTech 2017, March 20-23, 2017, Reno, NV.
Martin, R.A. 2014. "Non-Malicious Taint: Bad Hygiene is as Dangerous to the Mission as Malicious Intent." CrossTalk Magazine. 27(2).
MITRE. 2020. "Common Vulnerabilities and Exposures." Last Updated December 11, 2020. Accessed March 31, 2021.Available at https://cve.mitre.org/cve/,
Myerson, R.R. 1991. Game Theory: Analysis of Conflict. Cambridge, MA: Harvard University Press.
NIST. 2020. Roots of Trust. Last Updated June 22, 2020. Accessed March 31, 2021. Available at https://csrc.nist. gov/projects/hardware-roots-of-trust.
Oberg, J. 2020. Reducing Hardware Security Risk. Last Updated July 1, 2020. Accessed March 31, 2021. Available at: https://semiengineering.com/reducing-hardware-security-risk/.
SAE. 2016. SAE AS6171, Test Methods Standard: General Requirements, Suspect/Counterfeit, Electrical, Electronic, and Electromechanical Parts. SAE International. Accessed March 31, 2021. Available at https:/ / www. sae.org/standards/content/as6171/.
SAE. 2021. SAE J1739_202101, Potential Failure Mode and Effects Analysis (FMEA) Including Design FMEA, Supplemental FMEA-MSR, and Process FMEA. SAE International. Last Updated January 13, 2021. Accessed on March 31, 2021. Available at https://www.sae.org/standards/content/j1739_202101/.


Primary References
Bhunia, S. and M. Tehranipoor. 2018. Hardware Security: A Hands-on Learning Approach. Amsterdam, Netherlands: Elsevier Science.
ENISA. 2017. Hardware Threat Landscape and Good Practice Guide. Final Version 1.0. European Union Agency for Cybersecurity. Accessed March 31, 2021. Available at https:/ / www. enisa. europa. eu/ publications/ hardware-threat-landscape
TAME Steering Committee. 2019. Trusted and Assured Microelectronics Forum Working Group Reports. Last Updated December 2019. Accessed March 31, 2021. Available at: https://dforte.ece.ufl.edu/wp-content/uploads/ sites/65/2020/08/TAME-Report-FINAL.pdf.

Additional References
DARPA. A DARPA Approach to Trusted Microelectronics. Accessed March 31, 2021. Available at: https:/ / www. darpa.mil/attachments/Background_FINAL3.pdf [1].
Fazzari, S. and R. Narumi. 2019. New & Old Challenges for Trusted and Assured Microelectronics. Accessed March 31, 2021. Available at: https://apps.dtic.mil/dtic/tr/fulltext/u2/1076110.pdf.
IEEE. 2008-2020. IEEE International Symposium on Hardware Oriented Security and Trust (HOST). Annual symposium held since 2008 providing wealth of articles on hardware assurance.
Martin, R. 2019. "Hardware Assurance and Weakness Collaboration and Sharing (HAWCS)." Proceedings of the 2019 Software and Supply Chain Assurance Forum, September 17-18, 2019 in McLean, VA. Accessed March 31, 2021. Available at https://csrc.nist.gov/CSRC/media/Projects/cyber-supply-chain-risk-management/documents/ SSCA/Fall_2019/WedPM2.2_Robert_Martin.pdf.
NDIA. 2017. Trusted Microelectronics Joint Working Group: Team 3 White Paper: Trustable Microelectronics Standard Products. Accessed March 31, 2021. Available at https:/ / www. ndia. org/ -/ media/ sites/ ndia/ divisions/ working-groups/tmjwg-documents/ndia-tm-jwg-team-3-white-paper-finalv3.ashx.
Regenscheid, A. 2019. NIST SP 800-193, Platform Firmware Resiliency Guidelines. Accessed March 31, 2021.Available at https://csrc.nist.gov/publications/detail/sp/800-193/final.
Ross, R., V. Pillitteri, R. Graubart, D. Bodeau, R. McQuaid. 2019. NIST SP 800-160 Vol. 2, Developing Cyber Resilient Systems - A Systems Security Engineering Approach. Accessed March 31, 2021. Available at: https://csrc. nist.gov/News/2019/sp-800-160-vol2-developing-cyber-resilient-systems.

References
[1] https://www.darpa.mil//about-us/darpa-approach-to-trusted-microelectronics


System of Systems (SoS) (glossary)


(1) Two or more systems that are separately defined but operate together to perform a common goal.
(Checkland 1999)
(2) an assemblage of components which individually may be regarded as systems, and which possess two additional properties: (a) Operational Independence of the Components: If the system-of-systems is disassembled into its component systems the component systems must be able to usefully operate independently. That is, the components fulfill customer-operator purposes on their own.
(b) Managerial Independence of the Components: The component systems not only can operate independently, they do operate independently. The component systems are separately acquired and integrated but maintain a continuing operational existence independent of the system-of-systems. (Maier 1998, 267-284)
(3) System-of-systems applies to a system-of-interest whose system elements are themselves systems; typically these entail large scale inter-disciplinary problems with multiple, heterogeneous, distributed systems. (INCOSE 2012)

Source
(1) Checkland, P. B. 1999. Systems Thinking, Systems Practice. Chichester, UK: John Wiley & Sons Ltd.
(2) Maier, M. W. 1998. "Architecting principles for systems-of-systems." Systems Engineering, the Journal of the International Council on Systems Engineering (INCOSE) 1 (4).
(3) INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2.	San	Diego,	CA,	USA:	International	Council	on	Systems	Engineering	(INCOSE), INCOSE-TP-2003-002-03.2.2

Discussion
e the Systems of Systems Knowledge Area in Part 4: Applications of Systems Engineering.e


System Property (glossary)


Any named, measurable or observable attribute, quality or characteristic of a system or system element.
(OMG 2003)

Source
Object Management Group. 2003. "Property." In SE Conceptual Model Semantic Dictionary (Draft 12_03-27-03). Available	at	http:/	/	syseng.	omg.	org/	SE_Conceptual%20Model/	Draft%2012/ Concept%20Model%20Semantic%20Dictionary%2012th%20Draft%20Partitioned%203_27_03.xls. [1]

Discussion
None

References
[1] http://syseng.omg.org/SE_Conceptual%20Model/Draft%2012/ Concept%20Model%20Semantic%20Dictionary%2012th%20Draft%20Partitioned%203_27_03.xls

System Realization (glossary)


The activities required to build a system, integrate disparate system elements, and ensure that a system both meets the needs of stakeholders and aligns with the requirements identified in the system definition stage. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
"System realization" is used in the SEBoK as a knowledge area (KA); it includes several systems engineering (SE) activities such as system implementation, integration, verification, and validation. (See System Realization KA.) This generally aligns with the "development" and "production" stages as discussed in the International Council on Systems Engineering (INCOSE) Systems Engineering Handbook (INCOSE 2012).
Work Cited
INCOSE. 2012. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version
3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.


System Requirement (glossary)


(1a) A statement that transforms the stakeholder, user-oriented view of desired capabilities into a technical view, of a solution that meets the operational needs of the user. (ISO/IEC/IEEE, 2015, section 6.4.2)
(1b) The System Requirement Definition process creates a set of measurable system requirements that specify, from the supplier's perspective, what characteristics, attributes, and functional and performance requirements the system is to possess, in order to satisfy stakeholder requirements. (ISO/IEC/IEEE, 2015, section 6.4.2)

Source
(1) ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015 (E).

Discussion
Both definitions are modified from the introduction to the Requirements Analysis process, there is no formal definition of the term "system requirement" in the standard.
The term (engineered system) has been substituted for the word (product) in definition 1a to better align with the terminology used in the SEBoK.
For a full discussion of the role and importance of system requirements in systems engineering see the System Requirements article.

System-of-Interest (glossary)


(1) The system whose life cycle is under consideration. (ISO/IEC/IEEE 2015)
(2) The system of interest to an observer. (Bertalanffy 1968)

Source
(1) ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC), Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015. The second definition is an expanded version of the ISO/IEC/IEEE version.
(2) von Bertalanffy, L. 1968. General system theory: Foundations, development, applications, revised ed. New York, NY: Braziller.

Discussion
(1) Is the common Systems Engineering definition. A system-of-interest is a collective set of all elements of any system considered by a lifecycle, this may include both operational or enabling systems. Strictly this definition is relevant for an Engineered System (glossary) of interest.
(2) Is the system science definition and applies to all systems irrespective of whether they have a purpose or lifecycle in an engineering sense.


Systemist (glossary)


A systemist (from Greek chem(ía) alchemy; replacing chymist from Medieval Latin alchimista) is a scientist trained in the study of System Science.

Source
Daniel-Allegro B, Smith G.R. (2016). Exploring the branches of the system landscape, Les editions Allegro Brigitte
D. ISBN 978-2-9538007-1-5.
Gary Smith (INCOSE International Workshop 2020) https:/ / docs. google. com/ viewer?a=v& pid=sites& srcid=ZGVmYXVsdGRvbWFpbnxzc3dnMjAyMHxneDo1ODcwN2Q0NzdkMDA1YmRj

Discussion
"We use this term for people who have the capabilities to understand complex situations, to cope with the unusual, to identify the right problem in order to solve it and who are able to take decisions keeping in mind a vision for the future" (Brigitte Daniel-Allegro and Gary Smith 2016). "The chemist uses their understanding of chemical elements when they interact with chemical substances. Likewise, in the future the systemist will use their understanding of systemics when they manipulate and transform systems" (Gary Smith 2020)


Systems Approach (glossary)


A set of principles for applying systems thinking to engineered system contexts. (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
This definition has been created from a number of relevant sources on Systems Thinking, see the Systems Approach Applied to Engineered Systems knowledge area.


Systems Biology (glossary)


Systems biology is the computational and mathematical modeling of complex biological systems.

Source
https://en.wikipedia.org/wiki/Systems_biology

Discussion
An emerging engineering approach applied to biological scientific research, systems biology is a biology-based inter-disciplinary field of study that focuses on complex interactions within biological systems, using a holistic approach (holism instead of the more traditional reductionism) to biological research. Particularly from year 2000 onwards, the concept has been used widely in the biosciences in a variety of contexts. For example, the Human Genome Project is an example of applied systems thinking in biology which has led to new, collaborative ways of working on problems in the biological field of genetics.One of the outreaching aims of systems biology is to model and discover emergent properties, properties of cells, tissues and organisms functioning as a system whose theoretical description is only possible using techniques which fall under the remit of systems biology. These typically involve metabolic networks or cell signaling networks. (Wikipedia, "Systems Biology")

Systems Concept (glossary)


A mode of description, which explains an aspect of an object in terms of a set of interacting elements. The object can, in principle, be anything: a physical object, a body of work, an idea, or an enterprise. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
For a full discussion of the role and importance of systems concepts in systems engineering see the System Concept Definition article.


Systems Development (glossary)


A process that usually includes requirements analysis, system design, implementation, documentation and quality assurance. (ISO/IEC 1990)

Sources
ISO/IEC. 1990. Information technology--Vocabulary--Part 20: System development. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC 2382-20:1990.

Discussion
None.

Systems Engineer (glossary)

A systems engineer is "a person who practices systems engineering" and whose systems engineering capabilities and experience include sustained practice, specialization, leadership or authority over systems engineering activities. Systems engineering activities may be conducted by any competent person regardless of job title or professional affiliation. (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
Systems engineer is not a term in ISO/IEC/IEEE 24865:2010. The INCOSE website has a description but not a definition:
Systems engineers concentrate their efforts on the aspects of the engineering process (requirements definition, top-level functional designs, project management, life cycle cost analysis,...) that serve to organize and coordinate other engineering activities. The systems engineer is the primary interface between management, customers, suppliers, and specialty engineers in the systems development process.


Systems Engineering (glossary)


The definition of systems engineering has evolved over time. The current accepted definitions are found below:
(1) Interdisciplinary approach governing the total technical and managerial effort required to transform a set of customer needs, expectations, and constraints into a solution and to support that solution throughout its life. (ISO/IEC/IEEE 2010)
(2) An interdisciplinary approach and means to enable the realization of successful systems. It focuses on defining customer needs and required functionality early in the development cycle, documenting requirements, then proceeding with design synthesis and system validation while considering the complete problem:
 Operations
 Performance
 Test
 Manufacturing
 Cost & Schedule
 Training & Support
 Disposal
Systems engineering integrates all the disciplines and specialty groups into a team effort forming a structured development process that proceeds from concept to production to operation. Systems engineering considers both the business and the technical needs of all customers with the goal of providing a quality product that meets the user needs. (INCOSE 2012)
(3) A transdisiplinary and integrative approach to enable the successful realization, use, and retirement of engineered systems, using systems principles and concepts, and scientific, technological, and management methods.
We use the terms "engineering" and "engineered" in their widest sense: "the action of working artfully to bring something about". "Engineered systems" may be composed of any or all of people, products, services, information, processes, and natural elements. (INCOSE Fellows 2019)

Source
(1) ISO/IEC/IEEE. 2010. Systems and Software Engineering - System and Software Engineering Vocabulary (SEVocab). Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2010.
(2) INCOSE. 2012. INCOSE Systems Engineering Handbook, version 3.2.2. San Diego, CA, USA: International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2.
(3) INCOSE Fellows, Briefing to INCOSE Board of Directors, January 2019.


Discussion
There are many definitions of systems engineering. The SEBOK presents three of those definitions. Two come from foundational documents.
Note that both stress the interdisciplinary nature of systems engineering and its application throughout the life of the system.
In the Systems Engineering Overview article, the authors modified the INCOSE definition, saying traditional definitions of SE have emphasized sequential performance of SE activities, e.g., "documenting requirements, then proceeding with design synthesis ...". (INCOSE 2012) The SEBoK authors depart from tradition to emphasize the inevitable intertwining of system requirements definition and system design in the following revised definition of SE:
Systems Engineering (SE) is an interdisciplinary approach and means to enable the realization of successful systems. It focuses on holistically and concurrently understanding stakeholder needs; exploring opportunities; documenting requirements; and synthesizing, verifying, validating, and evolving solutions while considering the complete problem, from system concept exploration through system disposal.
Definition (3) was created by the INCOSE Fellows Initiative on System and Systems Engineering Definitions. This was established in 2016, to review current INCOSE definitions of SYSTEM and SYSTEMS ENGINEERING and to recommend any changes necessary to align the definitions to a) current practice, and b) the aspirations of INCOSE's 2025 Vision. At the January 2019 INCOSE Board of Directors meeting, a new INCOSE definition for "system" was approved and is given above.
The Fellows Initiative on System and Systems Engineering Definitions was established in 2016, to review current INCOSE definitions of SYSTEM and SYSTEMS ENGINEERING and to recommend any changes necessary to align the definitions to a) current practice, and b) the aspirations of INCOSE's 2025 Vision. The INCOSE Fellows elaborated this definition by stating: We use the terms "engineering" and "engineered" in their widest sense: "the action of working artfully to bring something about". "Engineered systems" may be composed of any or all of people, products, services, information, processes, and natural elements.


Systems Engineering Management (SEM) (glossary)


Managing the resources and assets allocated to perform systems engineering activities. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
None.

Systems Engineering Plan (SEP) (glossary)


A systems engineering plan (SEP) is a "living" document that captures a program's current and evolving systems engineering strategy and its relationship with the overall program management effort. The SEP purpose is to guide all technical aspects of the program. It should be established early in the Materiel Solution Analysis phase and updated continually. (DAU 2012)

Source
DAU 2012. "Systems Engineering Plan (SEP)." (online). Virginia, USA: ACQuipedia. Your Online Acquisition Encyclopedia. Accessed on 20 October 2019. Available at: https://www.dau.edu/acquipedia/pages/articledetails. aspx#!206.

Discussion
In many contexts, the Systems Engineering Plan (SEP) and Systems Engineering Management Plan (SEMP) are used interchangeably, to refer to the highest level technical plan. However, in the context of the U.S. Department of Defense the context, intent, and content of these documents are quite different:
 The SEP is a high-level plan that is made before the system acquisition and development begins. It is written by the government customer.
 The SEMP is the specific development plan written by the developer (or contractor).


Systems Integration (glossary)


A broad topic that includes hardware, software, and human systems and which uses an interdisciplinary approach for a structured, disciplined, and documented technical effort to simultaneously design and develop systems products and processes used to create cohesive systems. (Created for SEBoK)

Source
This definition was developed for the SEBoK.

Discussion
None.

Systems Science (glossary)


Systems science is an interdisciplinary field of science that studies the nature of complex systems in nature, society, and science. It aims to develop interdisciplinary foundations, which are applicable in a variety of areas, such as engineering, biology, medicine and social sciences. (Farlex 2012)

Source
Farlex 2012. "Systems Science." (online). Pennsylvania, USA: Farlex. The Free Dictionary. Access on 11 September 2012. Available at: http://encyclopedia.thefreedictionary.com/systems+science

Discussion
Please see the Systems Science knowledge area.


Systems Thinking (glossary)


(1) An epistemology which, when applied to human activity is based on four basic ideas: emergence, hierarchy, communication, and control as characteristics of systems. (Checkland 1999)
(2) A process of discovery and diagnosis - an inquiry into the governing processes underlying the problems and opportunities. (Senge 1990)
(3) A discipline for examining wholes, interrelationships, and patterns utilizing a specific set of tools and techniques. (Senge 1990)

Source
(1) Checkland, P. 1999. Systems Thinking, Systems Practice. New York, NY, USA: John Wiley & Sons.
(2) & (3) Senge, P.M. 1990. The fifth discipline: The Art & Practice of the Learning Organization. New York, NY, USA: Doubleday Business.

Discussion
Definition (1) is the System Science view, defining system thinking as a "theory of knowledge, esp. with regard to its methods, validity, and scope", based around seeing the world as systems.
Definitions (2) and (3) focus more on systems thinking as a collection of methods for dealing wih system problems. This aspect of systems thinking relates directly to the Systems Approach defined in the SEBoK.
See also the topic What is Systems Thinking?




T

Tailoring (glossary)


Adapted from notes/discussion of "tailoring guide" (ISO/IEC/IEEE 2009): Tailoring a process adapts the process description for a particular end. For example, a project creates its defined process by tailoring the organization's set of standard processes to meet the objectives, constraints, and environment of the project. (ISO/IEC/IEEE 2009)

Sources
ISO/IEC/IEEE. 2009. Systems and Software Engineering - System and Software Engineering Vocabulary. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2009.

Discussion
None.

Task (glossary)

According to ISO/IEC/IEEE 24774, a task is defined as a "required, recommended, or permissible action, intended to contribute to the achievement of one or more outcomes of a process". (ISO/IEC/IEEE 2021)

Sources
ISO/IEC/IEEE. 2021. Systems and software engineering - Life cycle management - Specification for process description. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24774:2021, Clause 3.20.

Discussion
None.


Team (glossary)


A group of people with a full set of complementary skills required to complete a task, job, or project. Team members (1) operate with a high degree of interdependence, (2) share authority and responsibility for self-management, (3) are accountable for the collective performance, and (4) work toward a common goal and shared reward(s). A team becomes more than just a collection of people when a strong sense of mutual commitment creates synergy, thus generating performance greater than the sum of the performances of its individual members. (WebFinance 2012)

Sources
WebFinance. 2012. "dictionary.com" (online). Washington, DC, USA: WebFinance, Inc. Accessed on 11 September 2012. Available at: http://www.businessdictionary.com/definition/team.html.

Discussion
This definition encompasses the key elements of "team." Other characteristics of systems engineering teams are a sense of shared commitment to achieving the end result, shared work products, and willingness to help one another. As pointed out in the definition, a team is more than a collection, or group of people. A systems engineering team is a group of individuals who cooperatively perform a collection of systems engineering tasks based on a shared vision and a common set of engineering objectives.

Technical Management (glossary)


The purpose of Technical Management is to steer the technical effort (commencing when the opportunity is identified) along the correct technical path to solution. Technical Management ensures integration (provides a bridge) between business / project management and all technical activity. Technical Management determines how the system approach can be carried out most effectively and efficiently in the attainment of value, cost targets and achievement of time-to-market. (INCOSE 2020)

Source
INCOSE. 2020. "PM-SE Integration Working Group." https:/ / www. incose. org/ incose-member-resources/ working-groups/process/pm-se-integration [1]

Discussion
This is a primary topic of interest for the INCOSE PM/SE Integration Working Group.

SEBoK v. 2.3, released 30 October 2020

References
[1]  https://www.incose.org/incose-member-resources/working-groups/process/pm-se-integration


Technical Performance Measure (TPM) (glossary)


(1) Measures of attributes of a system element within the system to determine how well the system or system element is satisfying specified requirements. (Roedler and Jones 2005, 1-65)
(2) A product design assessment, which estimates, through engineering analysis and tests, the values of essential performance parameters of the current design as effected by risk handling actions. (BMP 2012)

Source
(1) Roedler, G. J., and C. Jones. 2005. Technical Measurement: A Collaborative Project of PSM, INCOSE, and Industry. San Diego, CA, USA: Practical Software & Systems Management (PSM)/International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-020-01.
(2) BMP. 2012. "2.8 Risk Monitoring." Accessed September 13, 2012. Available at: http:/ / www. bmpcoe. org/ library/books/dsmc%20rmg%204th/69.html.

Discussion
None.

Temporal Architecture (glossary)


A temporal classification of the functions of a system according to the frequency level of execution. Temporal architecture includes the definition of synchronous and asynchronous aspects of functions. (Created for SEBoK)

Sources
This definition was developed for SEBoK.

Discussion
The definition provided here is consistent with a multiple view of a system logical architecture that should include as a minimum functional, behavioral and temporal views.


Test Cases (glossary)


A set of test inputs, execution conditions, and expected results developed for a particular objective, such as to exercise a particular program path or to verify compliance with a specific requirement. (IEEE 2004)

Sources
IEEE. 2004. IEEE Standard for Software Verification and Validation. Washington, DC, USA: Institute of Electrical and Electronics Engineers (IEEE). IEEE 1012-2004.

Discussion
None.

Threat (glossary)


State of the system or system environment which can lead to adverse effects. (ISO/IEC/IEEE 2011)

Sources
ISO/IEC/IEEE. 2011. Systems and Software Engineering - System and Software Engineering Vocabulary. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765a:2011.

Discussion
None.


Tolerance (glossary)


a resilience attribute that describes the ability of the system to degrade gracefully in the face of a threat. (Jackson and Ferris, 2013)
How a system behaves near a boundary - whether the system gracefully degrades as stress or pressure increases or collapses quickly when pressure exceeds adaptive capacity (Woods 2006, 23)

Sources
Woods, D.D. 2006. "Essential Characteristics of Resilience." In Resilience Engineering: Concepts and Precepts,
edited by E. Hollnagel, DD. Woods, and N. Leveson. Aldershot, UK: Ashgate Publlishing Limited.
Jackson, Scott, and Timothy Ferris. 2013. "Resilience Principles for Engineered Systems." Systems Engineering 16 (2):152-164.

Discussion
None.

Total Ownership Cost (glossary)


The sum of all financial resources necessary to organize, sustain, and operate military forces sufficient to meet national goals in compliance with all laws, all policies applicable to DoD, all standards in effect for readiness, safety, and quality of life, and other official measures of performance in effect for DoD and its Components.) (Miller 2007)

Sources
Miller, K. 2007. DoD Defintion of Total Ownership Cost (TOC). Los Angeles: University of Southern California.

Discussion
The term "total ownership cost" is a term used primarily but not exclusively by the US Department of Defense (DoD). The quote was extracted from a presentation by Dr. Karen Miller a lecturer at the University of Southern California and Loyola Marymount University, both in Los Angeles. Dr. Miller is an authority on system affordability which includes the concept of total ownership cost.


Traceability (glossary)


The degree to which a relationship can be established between two or more products of the development process, especially products having a predecessor-successor or master-subordinate relationship to one another (IEEE 1233-1998 (R2002) IEEE Guide for Developing System Requirements Specifications, 3.1.9)

Source[s]
IEEE. 1998. IEEE Guide for Developing System Requirements Specifications. New York, NY: Institute of Electrical and Electronics Engineers (IEEE), IEEE 1233-1998.

Discussion
SEVOCAB lists other, similar definitions.

Training (glossary)


Provision of formal and informal learning activities. (ISO/IEC/IEEE 2009)

Sources
ISO/IEC/IEEE. 2009. Systems and Software Engineering - System and Software Engineering Vocabulary. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 24765:2009.

Discussion
None.


Transition of Modes (glossary)


A transition of mode characterizes the transition (change of state) between two successive Operational Modes of a system. (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
None.

Transport network (glossary)


Insert definition here. (Reference YEAR)

Source
Insert full source info (Author Last, FI. YEAR. TITLE. Publisher. URL)

Annotation
If there is discussion around why this is the appropriate definition, include here. If not, please replace with "None".





U

Uncertainty (glossary)


The result of not having accurate or sufficient knowledge of a situation. (ISO/IEC 2009, 1)

Source
ISO/IEC. 2009. Systems and Software Engineering Vocabulary (SEVocab) - ISO/IEC 24765. in International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC) [database online]. Geneva, Switzerland, 2009 [cited December 21 2009]. Available from http:/ / pascal. computer. org/ sev_display/ index. action.

Discussion
None.

Unitary (glossary)


A problem situation in which participants "have similar values, beliefs and interests. They share common purposes and are all involved, in one way or another, in decision-making about how to realize their agreed objectives." (Jackson 2003, 19)

Sources
Jackson, M. 2003. Systems Thinking: Creating Holisms for Managers. Chichester, UK: J. Wiley.

Discussion
None.


Use Case (glossary)


Description of the behavioral requirements of a system and its interaction with a user. (ISO/IEC/IEEE 2011)

Sources
ISO/IEC/IEEE. 2011. Systems and software engineering: Developing user documentation in an agile environment. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/ Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 26515:2011.

Discussion
None.

Useful life (glossary)


The period of time during which an asset or property is expected to be usable for the purpose it was acquired. It may or may not correspond with the item's actual physical life or economic life. (WebFinance 2012)

Sources
WebFinance. 2012. "dictionary.com" (online). Washington, DC, USA: WebFinance, Inc. Accessed on 11 September 2012. Available at: http://www.businessdictionary.com/definition/useful-life.html

Discussion
None.


User (glossary)


Individual or group that interacts with a system or benefits from a system during its utilization.
(ISO/IEC/IEEE 2015)

Source
ISO/IEC/IEEE. 2015. Systems and Software Engineering -- System Life Cycle Processes. Geneva, Switzerland: International Organisation for Standardisation / International Electrotechnical Commissions / Institute of Electrical and Electronics Engineers. ISO/IEC/IEEE 15288:2015.

Discussion
None.

Utility network (glossary)


Insert definition here. (Reference YEAR)

Source
Insert full source info (Author Last, FI. YEAR. TITLE. Publisher. URL)

Annotation
If there is discussion around why this is the appropriate definition, include here. If not, please replace with "None".





V

Validation (glossary)


(1a) Confirmation, through the provision of objective evidence, that the (stakeholder) requirements for a specific intended use or application have been fulfilled. (ISO 9000:2015)
(1b) The set of activities ensuring and gaining confidence that a system is able to accomplish its intended use, goals and objectives (i.e., meet stakeholder requirements) in the intended operational environment. The right system was built. (ISO/IEEE 2015, 1, Section 6.4.8)
(2) The assurance that a product, service, or system meets the needs of the customer and other identified stakeholders. It often involves acceptance and suitability with external customers. Contrast with verification. (PMI 2013)
(3) The process of providing evidence that the software and its associated products satisfy system requirements allocated to software at the end of each life cycle activity, solve the right problem, and satisfy intended use and user needs. (IEEE 1012-2004, 3.1.35)

Source
(1) ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015 (E).
(2) PMI. 2013. A Guide to the Project Management Body of Knowledge (PMBOK(r) Guide). 5th ed. Newtown Square, PA, USA: Project Management Institute (PMI).
(3) IEEE. 2004. IEEE Standard for Software Verification and Validation. Institute of Electrical and Electronics Engineers (IEEE) Standards Association: 3.1.35. IEEE 1012-2004.

Discussion
Definition (1a) refers to the outcome of providing evidence that a particular system realization is validated (i.e., Does it satisfy the customer and user needs as stated and agreed?). The word (stakeholder) has been added to clarify the definition.
Definition (1b) is based on the introduction to the validation process and refers to the process of achieving validation through a set of activities conducted across a system's Life Cycle (glossary) to ensure that the system that has been built will serve its intended purpose. The term (engineered) system has been added to conform to SEBoK terminology.
Definition (3) refers to the validation of software components in terms of satisfying both allocated system requirements as well as user needs.
Validation builds on the activities and outcome of verification, a process that confirms that the system has been built correctly (i.e., Does it satisfy the system requirements?).
For a full discussion of the role and importance of validation in systems engineering see the System Validation article.


Value (glossary)


(1) Value: the regard, merit, importance or worth given to something. It is the basis for showing a preference i.e. making a choice. (Penguin Dictionary of Civil Engineering)
(2) Numerical or categorical result assigned to a base measure, derived measure or indicator. (PSM 2010; ISO/IEC/IEEE 2007)
(3) A measure of worth (e.g., benefit divided by cost) of a specific product or service by a customer, and potentially other stakeholders; (McManus 2005)
Note: "Values" are shared beliefs about what an organization or its members consider to be important.
(1) A personal and/or cultural value is an absolute or relative ethical value, the assumption of which can be the basis for ethical action. A value system is a set of consistent values and measures. (Wikipedia) (2) Values are the principles or standards of behavior. The things to which we give value and which determine how we behave. Some important personal values are truth, honesty, trust, respect for others and for the environment, fairness, making what we do enjoyable for others with whom we interact, openness, competence, sustainability, balance, harmony, reasonableness. Wherever possible key performance indicators (KPIs) should reflect the relevant values within a process of all stakeholders. In this way you have a better chance of driving out waste and adding value to all of those involved. See ethics, worth. - see ethics, morals, codes of conduct. (Penguin Dictionary of Civil Engineering)

Source
(1) Penguin Dictionary of Civil Engineering
(2) PSM. 2010. Practical Software and Systems Measurement: A Foundation for Objective Project Management. version 4.0 ed. Bethesda, MD, USA: Practical Software and Systems Measurement (PSM).
ISO/IEC/IEEE. 2007. Measurement Process. Geneva, Switzerland: International Organization for Standards (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical & Electronics Engineers (IEEE), ISO/IEC/IEEE 15939.
(3) McManus, H. L. 2005. Product Development Value Stream Mapping Manual, release 1.0. Boston, MA, USA: Lean Aerospace Initiative (LAI)/Massachusetts Institute of Technology (MIT), PVDSM Manual 1.0.

Discussion
In systems engineering we generally use the notion of "value" to describe the amount of benefit some thing, feature or capability provides to various stakeholders. The term "worth" is often used in the same way, as a measure of benefit or "how much someone would pay for" something. From this viewpoint the McManus definition would be considered to be "value for money" rather than "value" per se.
In the SEBoK the need to clearly separate the notions of value and cost is stressed upon because the systems engineer needs to be clear on the distinction between value (or benefit), which is an attribute of the problem space and considers the optimum set of requirements to deliver customer satisfaction, and cost, which is an attribute of the solution, and may be different for different solutions to the same set of requirements. The concept of value stream analysis can be used to understand and optimize added value and associated costs through the value stream.
Systems Engineers also use "value" in the PSM sense of "the value of a given attribute".


Variety (glossary)


(1) A measure of the connectivity betwen system elements (Ashby 1956)
(2) Interacting systems stability increases with variety, and with the degree of connectivity of that variety within the environment (Hitchins 2007)

Sources
(1) Ashby, W.R. 1956. Introduction to Cybernetics. London, UK; J. Wiley.
(2) Hitchins, D. 2007. Systems Engineering: A 21st Century Systems Methodology. Hoboken, NJ, USA: Wiley .

Discussion
(1) Is a cybernetic term used to define the number of available connections between elements, and thus the potential routes for control actions.
(2) Is a systems engineering definition, in which variety of connections between elements is used as a way to increase the stability and potential of a system to achieve is goals. Hitchins refers to this as Connected Variety, and also discussed the limits on this conectivity applied by availability of time, space, resource.

Vee (V) Model (glossary)


The technical aspect of the project cycle is envisioned as a "Vee", starting with User needs on the upper left and ending with a User-validated system on the upper right. (Forsberg and Mooz 1991)

Source
Mooz, H. and K. Forsberg. 1991. "The Relationship of Systems Engineering to the Project Cycle", Joint Conference of INCOSE and the American Society for Engineering Management, 21-23 October 1991, Chattanooga, TN. Available at: https:/ / onlinelibrary. wiley. com/ doi/ abs/ 10. 1002/ j. 2334-5837. 1991. tb01484. x. Accessed September 11, 2012.

Discussion
None.


Verification (glossary)


(1a) Confirmation, through the provision of objective evidence, that specified (system) requirements have been fulfilled. (ISO/IEC 2008, section 4.38)
(1b) Verification is a set of activities that compares a system or system element against the required characteristics. This includes, but is not limited to, specified requirements, design description and the system itself. The system was built right. (ISO/IEC/IEEE 2015, 1, Section 6.4.6)
(2) The evaluation of whether or not a product, service, or system complies with a regulation, requirement, specification, or imposed condition. It is often an internal process. Contrast with validation. (PMI 2013)
(3a) The process of evaluating a system or component to determine whether the products of a given development phase satisfy the conditions imposed at the start of that phase. (IEEE 1012-2004, 3.1.36)
(3b) Process of providing objective evidence that the software and its associated products comply with requirements for all life cycle activities during each life cycle process, satisfy standards, practices, and conventions during life cycle processes, and successfully complete each life cycle activity and satisfy all the criteria for initiating succeeding life cycle activities. (IEEE 829-2008, 3.1.54)

Source
(1) ISO/IEC/IEEE. 2015. Systems and Software Engineering - System Life Cycle Processes. Geneva, Switzerland: International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC)/Institute of Electrical and Electronics Engineers (IEEE). ISO/IEC/IEEE 15288:2015 (E).
(2) PMI. 2013. A Guide to the Project Management Body of Knowledge (PMBOK(r) Guide). 5th ed. Newtown Square, PA, USA: Project Management Institute (PMI).
(3) IEEE. 2004. IEEE Standard for Software Verification and Validation. Institute of Electrical and Electronics Engineers (IEEE) Standards Association: IEEE 1012-2004.

Discussion
Definition (1a) refers to the outcome of providing evidence that a particular system realization is verified(i.e. Does it satisfy the specified and agreed system requirements?). The word (system) has been added to clarify the definition.
Definition (1b) is based on the introduction to the verification process and refers to the process of achieving verification through a set of activities conducted across a system's Life Cycle (glossary) to ensure the system has been built correctly. The term (engineered) system has been added to conform to SEBoK terminology.
Definition (3) refers to verification at the end of each lifecycle stage that confirms that both software and systems have been developed in compliance with all standard practices and rules.
Verification supports the activities and outcome of validation, a process that ensures that the correct system has been built for its intended use (i.e., Does it satisfy the customer and user needs?).
For a full discussion of the role and importance of verification in systems engineering see the System Verification article.


Verification and Validation Action (glossary)


A verification and validation action describes what must be verified or validated (the element as reference), on which element, the expected result, the validation/verification technique to apply, on which level of decomposition. (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
None.

Verification and Validation Configuration (glossary)


A grouping of all physical elements (system elements, Aggregates, Verification and Validation Tools) necessary to perform a Verification and Validation Procedure. (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
None.


Verification and Validation Procedure (glossary)


A verification and validation procedure groups a set of Verification and Validation Actions performed together (as a scenario of tests) in a given Verification and Validation Configuration. (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
None.

Verification and Validation Tool (glossary)


A verification and validation tool is a device or physical tool used to perform verification and validation procedures (test bench, simulator, cap/stub, launcher, etc.). (Created for SEBoK)

Sources
This definition was developed for the SEBoK.

Discussion
None.


Viable (glossary)


(1) Capable of working successfully; feasible. (Oxford English Dictionary)
(3) capable of living; especially : having attained such form and development as to be normally capable of surviving outside the mother's womb. (Oxford English Dictionary)
(3) A viable system is any system organised in such a way as to meet the demands of surviving in the changing environment. (Beer 1967)

Sources
(1) & (2) Oxford English Dictionary, 2013., s.v. "viable."
(3) Beer, S. 1967. Cybernetics and Management, 2nd edition. London, UK: English Universities Press.

Discussion
(1) and (2) are dictionary definitons which illustrate the two basic ideas of able to do its job, and have reached sufficent maturity to be able to survive in its environment.
(3) Is taken from Beer's Viable Systems Model, which describes the things an organization needs to be viable.

View (glossary)


A representation of a system from the perspective of a viewpoint. (OMG 2010)

Sources
OMG. 2010. OMG Systems Modeling Language (OMG SysML(tm)), Version 1.3. Needham, MA, USA: Object Management Group. Accessed on 11 September 2012. Available at http://www.omg.org/technology/documents/ domain_spec_catalog.htm#OMGSysML - derived from IEEE 1471.

Discussion
None.


Viewpoint (glossary)


A viewpoint is a specification of the conventions and rules for constructing and using a view for the purpose of addressing a set of stakeholder concerns (OMG 2010)

Source(s)
OMG. 2010. OMG Systems Modeling Language (OMG SysML(tm)), Version 1.3. Needham, MA, USA: Object Management Group. Available at http:/ / www. omg. org/ technology/ documents/ domain_spec_catalog. htm#OMGSysML - derived from IEEE 1471.

Discussion
None.

Vignette (glossary)


A small illustrative sketch. For the SEBoK, a vignette is a short implementation example written to become part of the SEBoK, where a case study introduction cites an existing, more extensive case study already available in the external literature. (Adapted from Webster's Online Dictionary)

Sources
Webster's Online Dictionary. s.v. "Vignette."

Discussion
The base definition is from "Webster's Online Dictionary" at, http:/ / www. websters-online-dictionary. org/ definitions/ vignette. The additional explanation was developed for SEBoK.. This definition describes the approach for vignettes in Systems Engineering Implementation Examples.

W

White-Box System (glossary)


A system where the inner components or logic are available for inspection. (Ashby 1956)

Sources
Ashby, W.R. 1956. Introduction to Cybernetics. London, UK: Wiley.

Discussion
None.

Wicked Problem (glossary)


Wicked problems are ill-defined, ambiguous and associated with strong moral, political and professional issues. Since they are strongly stakeholder dependent, there is often little consensus about what the problem is, let alone how to resolve it. (Ritchey 2011)

Sources
Ritchey, T. 2001. Wicked Problems: Structuring Social Messes with Morphological Analysis. Stockholm, Sweden: Swedish Morphological Society. Available online at: http:/ / www. swemorph. com/ pdf/ wp. pdf. Accessed July 7, 2012.

Discussion
None.



Acronyms

Acronyms



The following is a list of acronyms and abbreviations which are used within the SEBoK.

SEBoK Acronyms. (Table Developed for BKCASE)
Acronym	Definition

A

AADL	Architecture Analysis and Design Language AAS		Advanced Automation System
ABD	Architecture Block Diagram
ACM	Association for Computing Machinery ACS		Automated Case Support
ADM	Architecture Development Method AECL		Atomic Energy of Canada
AF	Architecture Framework
AF CSE	Air Force Center for Systems Engineering (USA) AFI		Air Force Instruction (USA)
AFIT	Air Force Institute of Technology (USA) AFRI		Air Force Research Lab (USA)
AHP	Analytical Hierarchy Process
AIA	Aerospace Industries Association
AIAA	American Institute of Aeronautics and Astronautics (USA) AIT		(1) Analysis and Integration Team
(2) Assembling, Integrating, and Testing
ALT	Accelerated Life Testing
ANSI	American National Standards Institute
AP-233	Application Protocol for Systems Engineering Data Exchange API		Application Program Interface
 APPEL		Academy Program/Project & Engineering Leadership ASAECP	Aerospace Systems Architecting and Engineering Certificate Program ASHE			American Society of Hospital Engineering
ASME	American Society of Mechanical Engineers ASQ		American Society for Quality
ASTM		American Society for Testing & Materials AT&L	Acquisition, Technology, and Logistics (US DoD)


ATAM	Architecture Trademark Analysis Method ATC		Air Traffic Control
B

B2B	Business to Business
B2C	Business to Consumer
B2G	Business to Government
BCRM	Business Capability Road Map
BDD	Block Definition Diagram
BIM	Building Information Modeling
BIT	Built-in Test
BKCASE	Body of Knowledge and Curriculum to Advance Systems Engineering BOK		Body of Knowledge
BPM	(1) Business Process Modeling

(2) Business Process Management
BPMN	Business Process Modeling Notation BSI		British Standards Institution
BSS	Business Support System

C

C&A	Certification and Accreditation
C2	Command and Control
C4ISR	Command, Control, Communications, Intelligence, Information, Surveillance, and Reconnaissance CAA		Certification and Accreditation
CAS	(1) Complex Adaptive System

(2) Collision Avoidance System
CASE	Complex Adaptive Systems Engineering CBK		Common Body of Knowledge
CCB	Change Control Board
CCR	Configuration Change Requirement
CDF	Cumulative Distribution Function CDR		Critical Design Review
CDRL	Contractor Data Requirements List CE		Compromising Emission
CI	Continuous Improvement
CIMOSA	Computer Integrated Manufacturing Open System Architecture CIO		Chief Information Officer
CISSP	Certified Information Systems Security Professional CM		Configuration Management
CMM	Capability Maturity Model
CMMI	Capability Maturity Model Integration


CO	Contract Officer
COCOMO	Constructive Cost Model
CONOPS	Concept of Operations
CorBoK	Core Body of Knowledge (see also GRCSE)
COSYSMO	Constructive Systems Engineering Cost Model COTS		Commercial-off-the-Shelf
CPC	Corrosion Prevention and Control
CPI	Continuous Process Improvement
CRM	Customer Relationship Management CSF		Critical Success Factor
CSI	Continuous Service Improvement
CST	Critical Systems Thinking

D

D/C IM	Design/Construction Interface Manual
DAU	Defense Acquisition University (USA) DCR		Design Certification Review
DE	Digital Engineering
DFD	Data Flow Diagram
DFDD	DGIWG Feature Data Dictionary DFX		Design for "X"
DGWIG	Defence Geospatial Information Working Group DHS		Department of Homeland Security (USA) DIA			Denver International Airport
DIS	Distributed Interactive Simulation
DLA	Defense Logistics Agency
DMADV	Define, Measure, Analyze, Design, Verify
DMAIC		Define, Measure, Analyze, Improve, Control DMSMS	Diminishing Manufacturing Sources and Material Shortages
DNA	Deoxyribonucleic Acid
DoD	Department of Defense (DoD)
DoDAF	Department of Defense Architecture Framework (USA) DoDD		Department of Defense Directive (USA)
DoDI	Department of Defense Instruction (USA) DoJ		Department of Justice (USA)
DoT	Department of Transporation (USA) DSM		Design Structure Matrix
DTC	Design to Cost
DTM	Digital Terrain Model

E


E&M	Electrical and Machinery
EA	Enterprise Architecture
EC	European Commission
ECP	Engineering Change Proposal
ECHA	European Chemicals Agency
ECP	Engineering Change Proposal
ECR	Engineering Change Request
EDP	Evaluation and Discussion Point
EE&A	Enterprise Evaluation and Assessment
EESH	Energy, Environmental, Safety and Health Management eFFBD		Enhanced Functional Flow Block Diagram
EIS	Environmental Impact Statement
EISA	Energy Independence and Security Act of 2007 (USA) EM		Enterprise Modeling
EMC	Electromagnetic Capability
EMI	Electromagnetic Interference
EMP	Electromagnetic Pulse
EPA	Environmental Protection Agency (USA) ERB		Engineering Review Board
ERP	Enterprise Resource Planning
ES	Engineered System
ESE	Enterprise Systems Engineering
e-TOM	Enhanced-Telecomm Operations Map

F

F3I	Form, Fit, Function, and Interface
FAA	Federal Aviation Administration (USA)
FAST	Function Analysis System Technique
 FBI		Federal Bureau of Investigation (USA) FCC	 Federal Communications Commission (USA) FDA		 Food and Drug Administration (USA) FDIR	Failure Detection, Identification, and Recovery
FEAF	Federal Enterprise Architecture Framework (USA) FEEP		Foreign Excess Personal Property
FFBD	Functional Flow Block Diagram
 FMEA		Failure Modes and Effects Analysis FMECA	Failure Modes, Effects, and Criticality Analysis FONSI			Finding of No Significant Impact
FoS	Federation of Systems
FPMR	Federal Property Management Regulation


 FRACA		Failure Reporting and Corrective Actions FRACAS	Failure Reporting and Corrective Action System
FRP	Full-Rate Production
FUML	Foundational Subset for Executable UML Models

G

G2B	Government to Business
G2C	Government to Consumer
G2G	Government to Government
GAO	Government Accountability Office (USA) GDP		Gross Domestic Product
GERAM	Generalize Enterprise Reference Architecture and Methodology GIGO		Garbage In Garbage Out
GGE	Geospatial/Geodetic Engineering
GIS	Geographic Information System
GMDSS	Global Maritime Distress and Safety System GNSS		Global Navigation Satellite System GOTS			Government-off-the-Shelf
GPS	Global Positioning System
GQM	Goal-Question-Metric
GRCSE	Graduate Reference Curriculum for Systems Engineering GST		General System Theory
H

HAZMAT	Hazardous Materials
HCI	Human-Computer Interaction
HEMP	High-altitude Electromagnetic Pulse HFE		Human Factors Engineering
HLA	High-Level Architecture
HMI	Human-Machine Interface
HNA	Host Nation Approval
HNC	Host Nation Coordination
HRO	High Reliability Organization
HSI	Human Systems Integration
HST	Hubble Space Telescope
HWCI	Hardware Configuration Item
HWIL	Hardware in the Loop

I

IBD	Internal Block Diagram
IBM	International Business Machines
ICM	Incremental Commitment Model



ICSM
Incremental Commitment Spiral Model
ICT
Information and Communications Technology
IDEF0
Integration Definition for Functional Modeling
IE
Industrial Engineering
IEC
International Electrotechnical Commission
IEEE
Institute of Electrical and Electronics Engineers
IETF
Internet Engineering Task Force
IFSR
International Federation for Systems Research
IHO
International Hydrographic Organization
IID
Incremental and Iterative Development
ILS
Integrated Logistics Support
IM
Information Management
IMS
Integrated Master Schedule
INCOSE
International Council on Systems Engineering
IOC
Initial Operating Capability
IP
(1) Internet Protocol


IPDP
       (2) Intellectual Property Integrated Product Development Process
IPDT
Integrated Product Development Team
IPR
In-Progress Review
IPS
Integrated Product Support
IPT
Integrated Product Team
IPV6
Internet Protocol Version 6
IRAC
Interdepartment Radio Advisory Committee
IRL
Integration Readiness Level
ISDT
Integrated Service Development Team
ISO
International Organization for Standardization
ISOC
Internet Society
ISP
Internet Service Provider
ISSS
(1)International System Safety Society

(2)International Society for the Systems Sciences


IT
(3)Initial Sector Suit System Information Technology
ITIL
Information Technology Infrastructure Library
ITS
Intelligent Transportation System
ITS-ETO
Intelligent Transport System-Emergency Transportation Operation
ITSM
Information Technology Services Management
ITU
International Telecommunications Union


K

KA	Knowledge Area
KPI	Key Performance Indicator
KPP	Key Performance Parameter
KSAA	Knowledge, Skills, Abilities, and Attitudes

L

LBS	Location Based Service
LCC	Life Cycle Cost
LCM	Life Cycle Management
LEfSE	Lean Enablers for Systems Engineering LORA		Level of Repair Analysis
LRU	Line Replaceable Unit
LSE	(1) Lean Systems Engineering

(2) Lead Systems Engineer
LSE WG	Lean Systems Engineering Working Group (INCOSE)

M

MA	Mission Analysis
MARTE	Modeling and Analysis for Real-Time and Embedded Systems MBE		Model-Based Engineering
MBRA	Model-Based Risk Analysis
MBSE	Model-Based Systems Engineering
MCDA	Multi-Criteria Decision Analysis
MDA(r)	Model-Driven Architecture
ME	Mission Engineering
 MIT	Massachusetts Institute of Technology MOD		Ministry of Defence
MODAF	Ministry of Defence Architecture Framework (UK) MOE		Measure of Effectiveness
MOP	Measure of Performance
MOS	Mean Opinion Score
MOSES	Model Oriented Systems Engineering
MPT	(1)Methods, Processes, and Tools

(2)Methodologies, Processes, and Technologies
MRAR	Mishap Risk Assessment Report
MRL	Manufacturing Readiness Level
MRM	Manufacturing Resource Management MS		Meta-System
MSA	Measurement System Analysis
MSL	Mean Sea Level


MSRB		Management Safety Review Board MSTI	Miniature Seeker Technology Integration MTBF			Mean Time Between Failures
MTTR	Mean Time to Repair

N

NAHB	National Association of Home Builders NAO		National Audit Office (UK)
NASA	National Aeronautics and Space Administration (USA) NATO		North Atlantic Treaty Organization
NDI	Non-Developmental Item
NDIA	National Defense Industrial Association (NDIA) NEPA		National Environmental Policy Act NERC	North American Electric Reliability Corporation
NETMA	NATO Eurofighter and Tornado Management Agency
NIST	National Institute of Standards and Technology (USA) NLP		Neuro-Linguistic Programming
NOAA	National Oceanographic and Atmospheric Agency NPD		New Product Development
NPDP	New Product Development Process NSA		National Security Agency
NSD	New service Development
NSOI	Narrower System-of-Interest
NSPE	National Society of Professional Engineers
NSTISSI	National Security Telecommunications Information Systems Security Issuance NTIA		National Telecommunications and Information Administration (USA)
O

O&S	Operations and Support
OAM&P	Operations, Administration, Management, and provisioning OCR		Operations Commitment Review
OECD	Organization for Economic Co-Operative Development OEM		Original Equipment Manufacturer
OGC	(1)Office of Government Commerce (UK)

(2) Open Geospatial Consortium
OITL	Operator in the Loop
OMC	Operation/Maintenance/Closeout
OMG	Object Management Group
OODA	Observe, Orient, Decide, and Act OPD		Object Process Diagram
OPL	Object Process Language



OPM
Object Process Methodology
OR
Operations Research
ORMS
Operations Research and Management Science
OSAT
On-site Acceptance Test
OSD
Office of the Secretary of Defense (USA)
OSHA
Occupational Safety and Health Administration (USA)
OSM
Office of Spectrum Management
OSS
Operations Support Systems
OT&E
Operational Test and Evaluation
OTP
Operations Technical Plan
OWL
Web Ontology Language

P
P&L
Profit and Loss
P3I
Pre-Planned Production Improvement
PaaS
Platform as a System
PAPL
Program/Project Approved Parts List
PBD
Physical Block Diagram
PBSE
Pattern-Based Systems Engineering
P-CMM
People Capability Maturity Mode
PD
Product Development
PDCA
Plan, Do, Check, Act
PDF
Portable Document Format
PDR
Preliminary Design Review
PERA
Purdue Enterprise Reference Architecture
PESTEL
Political, Economic, Social, Technological, Environmental, and Legal
PEVQ
Perceptual Evaluation of Video Quality
PfM
Portfolio Management
PFR
Problem Failure Report
PHS&T
Packaging, Handling, Storage, and Transportation
PM
(1) Project Management


PMBOK(tm)
(2) Project Manager
Project Management Body of Knowledge
PM/FI
Performance Monitoring/Fault Location
PMI
Project Management Institute
PMP
(1) Project Management Professionals

(2) Project Management Plan
PMO
Project Management Office
PMP
Parts, Materials, and Processes
PMPCB
PMP Control Board


 PNT		Positioning, Navigation and Timing POET	Political, Operational, Economic, and Technical POM			Proof of Manufacture
PQMI	Process Quality Management and Improvement PQT		Production Qualification Testing
PRR	Production Readiness Review
PSE	Product Systems Engineering
 PSM	Practical Software and Systems Measurement PSQM		Perceptual Speech Quality Measure
PSS	(1)Product-Service System

(2)Problem Solution System
PT	Product Team
PUB	Public Utilities Board (Singapore)

Q

QAS	Quality Assurance System
QFD	Quality Function Deployment
QoE	Quality of Experience
QoS	Quality of Service
QVT	Query View Transformations

R

R&D	Research and Development
R&M	Reliability and Maintainability
RAA	Responsibility, Authority, and Accountability
RACI	Responsible, Accountable, Consulted, Informed
 RAM		Reliability, Availability, and Maintainability RAMS	Reliability, Availability, Maintainability, and Safety
RAMSS	Reliability, Availability, Maintainability, Safety, and Security
RARA	Roles, Authorities, Responsibilities, and Accountabilities RB		Radio-communication Bureau
RBD	Reliability Block Diagram
RCM	Reliability Centered Maintenance
RCRA	Resource Conservation and Recovery Act (USA) RDF		Resource Description Framework
REA	Responsible Engineering Authority
REACH	Registration, Evaluation, Authorization, and Restriction of Chemicals REP		Risk Element Plan
ReqIF	Requirements Interchange Format RF		Radio Frequency
RFP	Request For Proposal


RHP	Risk Handling Plan
RMP	Risk Management Plan
RMT	Reliability, Maintenance, and Testability RNT		Resilient Navigation and Timing
RoHS	Restriction on Hazardous Substances (USA) ROI		Return on Investment
ROSE	Risk-Oriented Systems Engineering RR		Radio Regulations
RRB	Radio Regulations Board
RSG	Radio-communication Study Groups RUP		Rational Unified Process
S

SaaS	Software as a Service
SADT	Structured Analysis Design Technique
SAE	Society of Automotive Engineers
SAE	Society of Automotive Engineers
SART	System Analysis & Real Time
SBA	Service-Based Application
SBD	Set-Based Design
SBS	System Breakdown Structure
SCM	Software Configuration Management
ScSE	Service-Centric Systems Engineering SD		Systems Dynamics
SDO	Standards Development Organization
SDLC	Service Development Life Cycle SDP		Service Design Process
SE	Systems Engineering
SEAC	Systems Engineering Assessment and Control
SEBoK	Systems Engineering Body of Knowledge
SeCSE	Service Centric Systems Engineering SEI		Software Engineering Institute
SEIT	Systems Engineering and Integration Team SEM		Systems Engineering Management
SEMP	Systems Engineering Management Plan SEP		Systems Engineering Plan
SFR	System Functional Review
SGIP	Smart Grid Interoperability Panel SIS		Software-Intensive System
SKLTS	Standard Korean Light Transit System



SLA
Service Level Agreement
SLDC
Services Development Life Cycle
SLE
Service Life Extension
SLEP
Service Life Extension Program
SLM
Service Level Management
SLOC
Source Lines of Code
SLR
Service Level Requirement
SMC
Systems, Man, and Cybernetics
SOA
Service Oriented Architecture
SOAD
Service Oriented Analysis and Design/Decision Modeling
SoI
System-of-Interest
SOMA
Service Oriented Modeling and Architectures
SOLE
Society of Logistics Engineers
SOMA
Service Oriented Modeling and Architecture
SOO
Statement of Objectives
SOP
Service Operations Plan
SoS
System of Systems
SoSE
System of Systems Engineering
SOSM
Systems of Systems Methodology
SOW
Statement of Work
SPAC
Spectrum Planning and Policy Advisory Committee
SPC
Statistical Process Control
SPM
Service Performance Measure
SRA
Strategic Rail Authority (UK)
SRD
Service Requirements Document
SRL
System Readiness Level
SRR
System Requirements Review
SSDP
Service Systems Development Process
SSE
(1) Service Systems Engineering


SSEMP
      (2) Security Systems Engineering System Security Engineering Management Plan
SSM
Soft Systems Methodology
SSME
Service System Management and Engineering
SSP
(1) Source Selection Plan


SSPP
  (2) System Security Plan System Safety Program Plan
SSS
Service Support Systems
STAMP
System-Theoretic Accident Model and Processes
STEEPLED
Social, Technical, Economic, Environmental, Political, Legal, Ethical and Demographic


STI	Science, Technology, and Industry Forum STP		Strategic Technical Planning
SVR	System Verification Review
SWCI	Software Configuration Item
SwE	Software Engineering
SWEBOK	Software Engineering Body of Knowledge SWG		Safety Working Group
SWIL	Software in the Loop
SWOT	Strengths, Weaknesses, Opportunities, and Threats Analysis SwSE		Software Systems Engineering
SysML	Systems Modeling Language

T

TCSE	Telecommunication Systems Engineering TM		Technical Management
TOC	Total Ownership Cost
TOGAF	The Open Group Architecture Framework
TOVE	Toronto Virtual Enterprise (Canada)
TPM	Technical Performance Measure
TPS	Toyota Production System
TQM	Total Quality Management
TRL	Technology Readiness Level
TRR	Technical Readiness Review
TSE	Traditional Systems Engineering
TSI	Total Systems Intervention
TSP	Technology and Standards Planning

U

UC	Use Case
UK	United Kingdom
UL	Underwriters Laboratory
UML	Unified Modeling Language
UN	United Nations
UPDM	Unified Profile for DoDAF and MODAF US		United States
USAF	United States Air Force
USB	Universal Serial Bus

V

V&V	Verification and Validation
VCF	Virtual Case File
VERAM	Virtual Enterprise Reference Architecture and Methodology


VHDL	VHSIC Hardware Description Language
VHSIC	Very-High-Speed Integration Circuit
VIN	Vehicle Identification Number

W

WBS	Work Breakdown Structure
WCML	West Coast Main Line (UK)
WCRM	West Coast Route Modernisation (UK) WIP		Work in Progress
WGS84	World Geodetic System 1984
WMO	World Meteorological Organization
WRC	World Radio-communication Conference WS		Web Services 2.0
WSOI	Wider System-of-Interest
WS-PBEL	Web Services Business Process Execution Language WWII		World War II
WWW	World Wide Web

X

XMI	XML Metadata Interchange
XML	Extensible Markup Language