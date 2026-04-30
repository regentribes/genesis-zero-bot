SE METHODOLOGY/APPROACH CONSIDERATIONS


The system definition activities, especially the partitioning of the system, requires that integration is considered throughout the development stage of the life cycle. The integration considerations may also require refinement based on when and how the work is performed. The choice of SE methodology or approach, along with the chosen life cycle model, often affects the sequence of work, which can help determine the focus of resources to address the unique challenges of the project.

This section introduces considerations for the following SE methodologies and approaches:

Model-Based Systems Engineering (MBSE);

Agile Systems Engineering;

Lean Systems Engineering;

Product Line Engineering (PLE).



Note that other types of SE methodologies and approaches exist.





4.2.1 Model-Based SE


This section provides an overview of the Model-Based Systems Engineering (MBSE) approach and includes a summary of its benefits relative to a more document-based approach. It also references a set of MBSE methodologies and provides a brief description of one representative methodology called the Object-Oriented Systems Engineering Method (OOSEM).





MBSE Overview


The INCOSE Systems Engineering Vision 2020 (2007) defines MBSE as:

The formalized application of modeling to support system requirements, design, analysis, verification, and validation activities beginning in the [concept stage] and continuing throughout development and later life cycle [stages].



MBSE is often contrasted with a document-based approach to SE. In a document-based SE approach, there is often considerable information generated about the system that is contained in documents and other artifacts such as specifications, interface control documents, system description documents, trade studies, analysis reports, and verification plans, procedures, and reports. The information contained within these documents is often difficult to synchronize and maintain, and difficult to assess in terms of its quality (correctness, completeness, and consistency). Although many systems have been developed using a traditional document-based approach, a model-based approach is becoming essential to address the increasing complexity of systems and support approaches that can more effectively and efficiently adapt to requirements and design changes.

MBSE enhances the ability to capture, analyze, share, and manage the information associated with the specification of a product that can result in the benefits listed below. There is some quantitative data (Rogers and Mitchell, 2021) and considerable qualitative data (OMG MBSE Wiki, 2023, MBSE Events and Related Meetings) from industry papers and presentations that support the following benefits of MBSE:

Improved communications among the development stakeholders (e.g., the acquirer, project management, SE practitioners, hardware and software developers, testers, quality characteristic disciplines).

Increased ability to manage system complexity by enabling the system to be viewed from multiple perspectives.

Improved product quality by providing an unambiguous and precise model of the system that can be evaluated for consistency, correctness, and completeness.

Reduced cycle time by enabling better control of the technical baseline, more rapid impact analysis, improved specification and design reuse, early insight for design decisions, and early discovery of potential defects.

Reduced risk by surfacing requirements and design issues early.

Enhanced knowledge capture and reuse of the information by capturing information in more standardized ways and reducing redundancy of information.

Improved ability to teach and learn SE fundamentals by providing a clear and unambiguous representation of systems and system concepts.





MBSE Methodologies


In an MBSE approach, much of the information that has been traditionally captured in informal diagrams, text, and tables is captured in a descriptive system model (see Section 3.2.1). This includes information about the system context, the requirements on the system and its elements, the system architecture including its structure and behavior, the critical parameters needed to specify the analysis of the system, and information about how the system is verified to satisfy its requirements. Modeling languages such as SysML™ (OMG SysML, 2021) are often used to capture this information in a standard way (see Section 3.2.1). The system descriptive model is augmented by other models, such as models to capture the system geometric configuration and various analytical models, to analyze the performance and other quality characteristics of the system. Each kind of model captures different kinds of information about the system. The different models must be managed as the design evolves to ensure a coherent representation of the overall system.

In an MBSE approach, the system descriptive model is a primary artifact of the SE process. MBSE formalizes the application of SE by creating the system descriptive model and integrating it with the other kinds of models. The kind of information and the level of detail of the information that is captured in models and maintained throughout the life cycle depends on the scope of the MBSE effort. An effective MBSE methodology supported by appropriate tools and a team with the requisite SE skills and knowledge are essential to fully realize the benefits of MBSE.

An MBSE methodology describes how MBSE is performed to capture the required information in the system descriptive model and related artifacts. Like any methodology, it must be tailored to the particular need of the organization and/or project (see Section 4.1). This includes defining the appropriate life cycle model, tailoring the activities and work products to align with the project scope and modeling objectives, and selecting the appropriate tools to create and manage the models and other relevant data. Estefan (2008) published a survey of candidate MBSE methodologies under the auspices of an INCOSE technical publication. Information on these methodologies is available on the Methodology and Metrics web page of the INCOSE MBSE Wiki (2022). These methodologies and others continue to evolve based on their application to real world projects. OOSEM is summarized below as a representative MBSE method.





OOSEM Summary


OOSEM is an MBSE method intended to help architect systems that satisfy evolving mission and system requirements and can accommodate changes in technology and design. OOSEM is generally consistent with processes in this handbook. It can be adapted to different life cycle models to support the specification, analysis, design, and verification of systems. The method enables the flow-down of requirements from mission, to system, to system element levels, which are realized by applicable hardware, software, data, and other discipline-specific design methods.

OOSEM describes fundamental SE activities whose outputs are model-based artifacts. The modeling artifacts are captured in a system descriptive model using the Systems Modeling Language (SysML™) along with other analytical models. A process model for OOSEM can be downloaded from the INCOSE OOSEM Working Group website (2022).

The OOSEM supports a development process that includes the following subprocesses and activities:

Manage the system development—activities include plan and control the technical effort, including planning, risk management, configuration management, and other project monitoring and control activities;

Specify and design the system—activities include analyze stakeholder needs, specify the system requirements, develop the system architecture, and allocate the system requirements to system elements;

Develop the system elements—activities include design the elements, implement the elements, and verify the elements satisfy the allocated requirements; and

Integrate and verify the system—activities include integrate the system elements and verify that the integrated system elements satisfy the system requirements.



This OOSEM process can be applied at each level of the system hierarchy to specify the requirements of the system and its elements. Applying the process recursively at successive levels of the hierarchy may involve multiple iterations throughout the development process. To be effective, the fundamental tenets of SE must be applied including the use of multi-disciplinary teams and a disciplined management process.





4.2.2 Agile Systems Engineering


The knowledge of requirements for an effective system often continues to change during the system life cycle. Common causes include insufficient initial knowledge, new knowledge revealed during development and utilization, and continual evolution in the targeted operational environment of the system. When evolution of the system’s operational environment doesn’t stop with initial deployment, a system’s functional capabilities must evolve if it is to remain viable. Under these circumstances system engineering is virtually never ending, and retirement is generally an issue of safe and secure functional capability disposal rather than system decommissioning.

Agile Systems Engineering is a principle-based approach for designing, building, sustaining, and evolving systems when knowledge is uncertain, or environments are dynamic. Thus, Agile System Engineering is a what, not a how. As stated in Section 2.2, there are many life cycle models (e.g., Vee, Incremental Commitment Spiral Model (ICSM), DevSecOps (Development, Security, Operations)). Some of them are targeted on a single engineering domain (e.g., XP (Extreme Programming), Scrum, DevOps (Development, Operations), and various scaled approaches such as SAFe (Scaled Agile Framework) in the software engineering domain). Most of them have a strong focus on the development stage.

Agile Systems Engineering is best understood when contrasted to the sequential life cycle approach and in how the two relate to the system life cycle spectrum. Figure 4.3 shows extreme forms of these two life cycle approaches in terms of their activity stages and data flows. All life cycle approaches fall somewhere between the two ends of the spectrum, depending upon the process-encoded degree of attentiveness and responsiveness to dynamics in knowledge and environment. It is unlikely that either depicted extreme would be effective in actual practice.




FIGURE 4.3 SE life cycle spectrum. From dove (2022). Used with permission. All other rights reserved.





An Agile Systems Engineering process is based on strategies for timely and continual knowledge development and affordable application of new knowledge in system development activity. Virtually all forms of Agile Systems Engineering employ incremental or evolutionary development in some way (see Sections 2.2.2 and 2.2.3) as a means to produce demonstrable and/or usable work in process that provokes feedback for real time learning and subsequent application.

Software plays an increasingly major role in most systems today. Codified agile software development methodologies offer relevant approaches for rapid knowledge discovery and deployment in the software domain. Patterns from these software approaches can inform agile engineering approaches in other domains and in the encompassing domain of SE; but each domain has unique differences (e.g., external dependencies, fabrication techniques, development cycle time constraints, development support tools).





Agile Systems Engineering Life Cycle Model


The Agile Systems Engineering life cycle model is depicted on the far right of Figure 4.3 and with more detail in Figure 4.4. The six system life cycle stages run around the perimeter, with situational awareness featured in the center. The agile life cycle model can accommodate activities in any and all of the stages concurrently without progressive sequencing. Figure 4.4 depicts a life cycle model (Dove and Schindel, 2019), not to be confused with the Vee model (see Section 2.2.1) which depicts relationships among SE activities applicable in sequential, iterative, and evolutionary approaches.




FIGURE 4.4 Agile SE life cycle model. From dove and Schindel (2019). Used with permission. All other rights reserved.





Situational awareness has no entry or exit criteria, as it should, in principle, be a continuous activity. Entry criteria for all of the other stages begins with a decision to act upon specific triggering awareness, and may require process-prudent, or contract-required, engagement criteria for a stage or stages to be entered. An Agile Systems Engineering process is predicated upon real-time experimentation and learning in all stages, and as such, the entry criteria may be as simple as the decision to enter a stage for experimental knowledge development that may or may not produce artifacts for use in other stages. On the other hand, exit criteria for a stage that produces artifacts for use in other stages should have some fixed requirements for satisfactory stage completion, with recognition that the outcome of stage activity may simply be valuable learned knowledge that aborts the need for producing artifacts of use in other stages.

The retirement stage deals with system elements and older system versions that are retired frequently, as the “current” system evolves. This has implications for safe and secure maintenance, disposal, and reversion processes.

Fleshing out a generic Agile SE Life Cycle Model for a specific project likely starts with default standard processes in each stage, tailored and augmented for specific agile SE differences. Adapting the generic model to a specific organization’s process will tailor and augment the generic model as the organization’s standard process evolves.





Agile Systems Engineering Life Cycle Operational Considerations


As described in Section 1.3.4, Figure 1.6 depicts the life cycle operational “pattern” as three nested systems:

System 1 – The Engineered System is the target system under development.

System 2 – The Life Cycle Project Management System includes the basic SE development and maintenance processes, and their operational domains that produces System-1.

System 3 – The Enterprise Process and Innovation System is the process improvement system that learns, configures, and matures System-2. System 3 is responsible for situational awareness, evolution, and knowledge management, the provider of operational agility. Intent is continuous, not episodic, information flow among the three systems. Principles and strategies that facilitate operational agility in action include:



Sensing:

External awareness (proactive alertness);

Internal awareness (proactive alertness);

Sense making (risk analysis, trade space analysis).



Responding:

Decision making (timely, informed);

Action making (invoke/configure process activity to address the situation);

Action evaluation (verification and validation).



Evolving:

Experimentation (variations on process ConOps);

Evaluation (internal and external judgement);

Memory (evolving culture, response capabilities, and process ConOps).



The architecture and structural principles that enable system agility are covered in Section 3.1.3.





Agile Systems Engineering Examples


Agile system engineering methodologies are project-context dependent. What is common across methodologies are certain fundamental strategies that get tailored for a specific context. Four published examples illuminate this tailoring in four different contexts:

As shown in Figure 2.9, Rockwell Collins employed a product line engineering (PLE) (see Section 4.2.4) approach for a large family of radio products composed of software, firmware, and electronic circuit boards with a continuous integration platform that accommodated asynchronous evolution of mixed-domain system element work in process (Dove, et al., 2017).

The US Navy SpaWar delivered innovative off-road autonomous vehicle technology in continuous six-month development increments with parallel tracks of integration, test, and architecture evolution (Dove, et al., 2016).

Northrop Grumman evolved user capabilities in six month increments for a software systems-of-systems single-point hub that provided access to 22 independent logistics data bases, with three successive generations under active life cycle control at all times (Dove and Schindel, 2017).

Lockheed Martin evolved F16, F22, and F35 weapons capabilities with internally developed software and externally subcontracted hardware in roughly six month development increments in a tailored SAFe approach; featuring a continuous integration and demonstration platform with asynchronous evolution of system element simulations, low fidelity proxies, work in process, and completed system elements (Dove, et al., 2018).





4.2.3 Lean Systems Engineering


SE is regarded as an established, sound practice, but is not always delivered efficiently. US Government Accountability Office (GAO, 2008) and NASA (2007a) studies of space systems document major budget and schedule overruns. Similarly, studies by the MIT-based Lean Advancement Initiative (LAI) have identified a significant amount of waste in government projects, averaging 88% of charged time (LAI MIT, 2013; McManus, 2005; Oppenheim, 2004; Slack, 1998). Most projects are burdened with some form of waste: politicization, poor coordination, premature and unstable requirements, quality problems, and management frustration. This waste represents a vast productivity reserve in projects and major opportunities to improve project efficiency.

Lean system development and the broader methodology of lean thinking have their roots in the Toyota “just-in-time” philosophy, which aims at “producing quality products efficiently through the complete elimination of waste, inconsistencies, and unreasonable requirements on the production line” (Toyota, 2009). Lean SE is the application of lean thinking to SE and related aspects of organization and project management. SE is the discipline that enables flawless development and integration of complex technical systems. Lean thinking is a holistic paradigm that focuses on delivering maximum value to the customer and minimizing waste. A popular description of lean is “doing the right job right the first time.” Lean thinking has been successfully applied in manufacturing, healthcare, administration, supply chain management, and product development, including engineering.

Lean SE is the area of synergy between lean thinking and SE, with the goal to deliver the best life-cycle value for technically complex systems with minimal waste. The early use of the term lean SE is sometimes met with concern that this might be a “repackaged faster, better, cheaper” initiative, leading to cuts in SE at a time when the profession is struggling to increase the level and quality of SE effort in projects. Lean SE does not take away anything from SE and it does not mean less SE. It means better SE with higher responsibility, authority, and accountability, leading to better, waste-free workflows with increased mission assurance.

Three concepts are fundamental to the understanding of lean: value, waste, and the process of creating value without waste (captured into lean principles).





Value


The value proposition in engineering projects is often a multiyear, complex, and expensive acquisition process involving numerous stakeholders and resulting in hundreds or even thousands of requirements, which, notoriously, are rarely stable. In lean SE, value is defined simply as mission assurance (i.e., the delivery of a flawless complex system, with flawless technical performance, during the product or mission development life cycle) and satisfying the customer and all other stakeholders. This implies completion with minimal waste, minimal cost, and the shortest possible schedule.





Waste in Product Development


Waste is “the work element that adds no value to the product or service in the eyes of the customer. Waste only adds cost and time” (Womack and Jones, 1996). The LAI classifies waste into seven categories (McManus, 2005). An eighth category, the waste of human potential, is increasingly added. These categories are defined and illustrated as follows.

Overprocessing—Processing more than necessary to produce the desired output; excessive refinement, beyond what is needed for value.

Waiting—Waiting for people, material or information, or people waiting for information or material; late delivery of material or information, or delivery too early—leading to eventual rework.

Unnecessary movement—Moving people (or people moving) unnecessarily to access or process material or information; unnecessary motion in the conduct of the task; lack of direct access; manual intervention.

Overproduction—Creating too much material or information; performing a task that nobody needs; information over-dissemination and pushing data.

Transportation—Moving material or information unnecessarily; unnecessary hand‐offs between people; incompatible communication—lost transportation through communication failures.

Inventory—Maintaining more material or information than needed; too much “stuff” buildup; complicated retrieval of needed “stuff”; outdated, obsolete information.

Defects—Errors or mistakes causing the effort to be redone to correct the problem.

Waste of human potential—Not utilizing or even suppressing human enthusiasm, energy, creativity, and ability to solve problems and general willingness to perform excellent work.





Lean Principles and Lean Enablers for Systems Engineering


Womack and Jones (1996) captured the process of creating value without waste into six lean principles described in (Oppenheim, 2011), as follows:

The value principle promotes a robust process of establishing the value of the system to the customer with crystal clarity early in the project. The process should be customer-centric, involving the customer frequently and aligning employees accordingly.

The value stream principle emphasizes detailed project planning and waste‐preventing measures, solid preparation of the personnel and processes for subsequent efficient workflow, and healthy relationships between stakeholders (e.g., acquirer, contractor, suppliers, and employees); project frontloading; and use of leading indicators and quality measures. SE practitioners should prepare for and plan all end-to-end linked actions and processes necessary to realize streamlined value, after eliminating waste.

The flow principle promotes the uninterrupted flow of robust quality work and first‐time-right products and processes, broad steady competence instead of hero behavior in crises, excellent communication and coordination, concurrency, frequent clarification of the requirements, and making project progress visible to all.

The pull principle is a powerful guard against the waste of rework and overproduction. It promotes pulling tasks and outputs based on internal and external customer needs (and rejecting others as waste), and better coordination between the pairs of employees handling any transaction before their work begins so that the result can be first‐time right.

The perfection principle promotes excellence in the SE and organization processes, utilization of the wealth of lessons learned from previous projects into the current project, the development of perfect collaboration policy across people and processes, and driving out waste through standardization and continuous improvement. Imperfections should be made visible in real time, and continuous improvement tools (Six Sigma) should be applied as soon as possible. It calls for a more important role of SE practitioners, with responsibility, accountability, and authority for the overall technical success of the project.

Finally, the respect-for-people principle promotes the enterprise culture of trust, openness, honesty, respect, empowerment, cooperation, teamwork, synergy, and good communication and coordination and enables people for excellence.



In 2011, a project undertaken jointly by PMI, INCOSE, and the LAI at MIT developed the Lean Enablers for Managing Engineering Programs (LEfMEP, 2012), adding lean enablers for project management and holistically integrating lean project management with lean SE. A major section of the book is devoted to a rigorous analysis of challenges in managing engineering projects. They are presented under the following 10 challenge themes:

Firefighting—reactive project execution;

Unstable, unclear, and incomplete requirements;

Insufficient alignment and coordination of the extended enterprise;

Processes that are locally optimized and not integrated for the entire enterprise;

Unclear roles, responsibilities, and accountability;

Mismanagement of project culture, team competency, and knowledge;

Insufficient project planning;

Improper metrics, metric systems, and key performance indicators;

Lack of proactive project risk management; and

Poor project acquisition and contracting practices.





4.2.4 Product Line Engineering (PLE)


Rarely does anyone build just one edition, just one flavor, just one point solution of anything. In many cases, SE is performed in the context of a product line—a family of similar systems with variations in features and functions. Product Line Engineering (PLE) addresses this mismatch by providing models, tools, and methods for holistic engineering of system families.

A note on terminology: Where the PLE field and standards refer to “product,” “product line,” and “product line engineering,” the equivalent terms in SE are “system,” “system family,” and “system family engineering,” respectively. These terms can be used interchangeably (Krueger, 2022).





Challenges with Early Generation System Family Engineering Approaches


When systems in a system family are engineered as individual point solutions, techniques such as clone-and-own reuse or branch-and-merge result in ever-growing duplicate and divergent engineering effort. Trying to manage the commonality and variability among these individually engineered systems in the family has traditionally relied on tribal knowledge and high bandwidth, error-prone interpersonal communication. Furthermore, when each engineering discipline adopts a different ad hoc technique for managing variations among the members of the system family, the result is error prone dissonance when trying to translate and communicate across the different life cycle disciplines.

This is a self-inflicted complexity, over and above the complexity inherent in the systems being engineered. It consumes engineering teams with low-value, trivial, replicative work that deprives them of time and energy that would be better spent on high-value innovative work that advances system and business objectives.





Feature-based Product Line Engineering


Feature-based PLE is the modern digital engineering industry good practice for PLE, as defined in the INCOSE PLE Primer (2019) and ISO/IEC 26580 (2021). Feature-based PLE offers significant improvements and benefits in effort, cost, time, scale, and quality by exploiting system similarity while formally managing variation.

Feature-based PLE is used to engineer a system family as a single holistic system rather than a multitude of individual systems. Engineering assets in each engineering discipline are consolidated to eliminate duplication and divergence. A single authoritative variation management model is applied consistently across all assets in all engineering disciplines to eliminate that source of dissonance across the life cycle and to enable organizations to make informed and deliberate cost-benefit decisions about the variations designed into their system family.





Key Elements of a Feature-based PLE Factory


Feature-based PLE uses a PLE Factory metaphor, as illustrated in Figure 4.5. See ISO/IEC 26580 (2021) for a full description.




FIGURE 4.5 Feature-based plE factory. From IncoSE plE primer (2019). Usage per the IncoSE notices page. All other rights reserved.





Feature Catalogue, as shown in the upper left, captures a formal model of the distinguishing characteristics about how the members of the system family differ from each other and provides a common language and single authoritative source of truth about variation throughout the engineering organization.

Bill-of-Features, as shown in the upper right, specifies the features selected from the Feature Catalogue for each system in a system family portfolio.

Shared Asset Supersets, as shown in the lower left, are the engineering artifacts that support the creation, design, implementation, deployment, and operation of systems in a system family. They contain variation points, which are pieces of content that can be included, omitted, generated, or transformed for a system instance, based on the features selected in a Bill-of-Features for that system.

PLE Factory Configurator, shown in the center, is an automation that applies a Bill-of-Features for a system to each variation point in the Shared Asset Supersets, to determine each variation point’s content for the system instance.

Product Asset Instances, shown in the lower right, each contain only the shared asset content suited for that one system in the system family.



With Feature-based PLE, engineers now work in the PLE Factory on the Shared Asset Supersets, the Feature Catalogue, and the Bills-of-Features rather than on the individual system instances. Once the PLE Factory is established, engineering assets for the individual systems are automatically instantiated rather than manually engineered. Feature-based PLE transforms the task of engineering a plethora of individual systems into the much more efficient task of producing a single system: The PLE Factory itself. This consolidation also means that change management and configuration management are performed on the single PLE Factory rather than separately on each of the system instances.





Shared Asset Supersets and Variation Points


To work in a PLE Factory, engineers must learn how to create and maintain Shared Asset Supersets, including variation points, for their discipline. For example, requirements engineers learn how to create requirements Shared Asset Supersets with variation points, test engineers learn how to create verification and validation Shared Asset Supersets with variation points, and software engineers learn how to create source code Shared Asset Supersets with variation points.

A Shared Asset Superset contains a single copy of all content used in any system—that is, there is no duplication of content. Content that appears in every system is said to be common content, while content that varies from system to system is encapsulated in a variation point. Consistent treatment of variation points in Shared Asset Supersets across all disciplines is a hallmark of Feature-based PLE. Variation points are places in an asset that denote content that is configured according to feature selections in a Bill-of-Features for a particular system instance. Variation point configuration mechanisms typically include selection or omission of the content; selection from among mutually exclusive content alternatives; generation of content based on feature specifications; and feature-based transformation of content from one form into another.

Perhaps one of the easiest examples of Shared Asset Supersets to understand is requirements. A superset of requirements combines individual system requirements to establish all of the system family requirements. Variation points express inclusion and omission, define mutual exclusion, and transform requirement wording in the system specification—all based on feature selections. Requirement transformation can replace numbers, units, or other text with information that is derived from the Bill-of-Features. Requirements that have no variation are common and apply to every system.

MBSE models can be developed as Shared Asset Supersets and instrumented with variation points. For example, system design or architecture models using SysML™ include variation points to specify optional, mutually exclusive, and varying structural elements such as blocks, ports, relationships, objects, classes, activities, states, transitions, use-cases, packages, and others, as well as generation or transformation of values, attributes, and constraints associated with those elements.

Shared Asset Supersets for Electronic Design Automation, Mechanical Design Automation, and Computer-aided Design (CAD) for electronic, mechanical, mechatronic, and cyber-physical systems take the form of supersets of parts, properties, relationships, assemblies, system elements, circuit boards, wiring harnesses, and more. Variation points instrument optional, mutually exclusive, and varying content in these models.

In software systems, Shared Asset Supersets are constructed for source code, resources, and build scripts. Source code variation points can be defined in several ways, including blocks of code, optional or mutually exclusive source files, and macro substitutions.

Verification and validation Shared Asset Supersets for automated and manual test plans and test cases can be instrumented with variation points to identify and configure the tests for each system, based on feature selections. It is possible to streamline or even eliminate redundant testing of common capability across multiple systems in the system family.

A broad array of additional assets with digital representations can serve as Shared Asset Supersets in system families. These include system budgets or cost models, schedules and work plans, user manuals and installation guides, process documentation, marketing brochures, simulation models, system descriptions, digital twins, supply chain orders, manufacturing specs, contract proposals, and much more. Feature-based PLE can be applied to all SoI types defined in Section 4.3.





Organizational Change and Return-on-Investment with Feature-based Product Line Engineering


For many organizations, Feature-based PLE represents a shift in engineering approach that requires organizational change, along with commitment from engineering and business leadership to make that change. The ROI to justify the organizational change is in most cases compelling, based on the elimination of low-value, mundane, replicative work, with doubling, tripling and larger improvements in engineering metrics such as: lowering engineering complexity; reducing overall engineering time, cost, and effort; increasing portfolio scalability; and improving system quality (Gregg, et al., 2015 and McNicholas, 2021). In consideration of this ROI, the question to leadership is, “What if your engineers could do their normal day’s work before lunch; what would you have them do in the afternoon?” There are many answers to this question, all of them good.