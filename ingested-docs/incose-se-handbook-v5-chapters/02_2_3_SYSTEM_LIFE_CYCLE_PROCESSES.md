SYSTEM LIFE CYCLE PROCESSES


2.3.1 Introduction to the System Life Cycle Processes


A process is a series of activities and tasks performed to achieve one or more outcomes for a stated purpose. In SE, the system life cycle processes are one of the enablers to help manage a system solution across the life cycle stages. The processes are intended to be applied concurrently, iteratively, and recursively with other enablers (e.g., tools, technology) throughout the stages of the life cycle (see Section 2.3.1.2).

ISO/IEC/IEEE 15288 (2023) identifies four process groups for the system life cycle, providing “a common process framework for describing the life cycle of engineered systems, adopting a Systems Engineering approach.” Each of these process groups is the subject of a section within Part 2. A graphical overview of these processes is given in Figure 2.10:




FIGURE 2.10 System life cycle processes per ISO/IEC/IEEE 15288. InCOSE SEH original figure created by roedler and Walden. Usage per the InCOSE notices page. All other rights reserved.





Agreement Processes (Section 2.3.2) include Acquisition and Supply.

Organizational Project-Enabling Processes (Section 2.3.3) include Life Cycle Model Management, Infrastructure Management, Portfolio Management, Human Resource Management, Quality Management, and Knowledge Management.

Technical Management Processes (Section 2.3.4) include Project Planning, Project Assessment and Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement, and Quality Assurance.

Technical Processes (Section 2.3.5) include Business or Mission Analysis, Stakeholder Needs and Requirements Definition, System Requirements Definition, System Architecture Definition, Design Definition, System Analysis, Implementation, Integration, Verification, Transition, Validation, Operation, Maintenance, and Disposal.

The application of these system life cycle processes is supported by SE practitioners having the relevant competencies. The competencies are defined in the INCOSE Systems Engineering Competency Framework (SECF) (2018). Note that the professional competencies (see Section 5.1.2) generally apply to all the processes.

Note: Acronyms for the process names are provided in Appendix D.





2.3.1.1 Format and Conventions


A common section structure has been applied to describe the system life cycle processes in this handbook. The following structure provides consistency in the discussion of these processes:

Process overview Purpose

Description

Inputs/outputs

Process activities

Common approaches and tips





Process elaboration



To ensure consistency with ISO/IEC/IEEE 15288, the purpose statements from the standard are included verbatim for each process described herein. The titles of the process activities listed in each section are also consistent with ISO/IEC/IEEE 15288. The process activities describe “what” should be done, not “how” to do it. In some cases, additional items have been included to provide summary-level information regarding industry good practices and evolutions in the application of SE processes. Process elaborations provide additional details on topics that are unique to the specific life cycle process. See Part III for topics that cross-cut multiple life cycle processes.

In addition, each system life cycle process is illustrated by an input–process–output (IPO) diagram showing typical inputs, process activities, and typical outputs. A sample is shown in Figure 2.11. To understand a given process, readers are encouraged to study the complete information provided in the combination of figures and text and not rely solely on the IPO diagrams.




FIGURE 2.11 Sample IPO diagram for SE processes. INCOSE SEH original figure created by Walden, Shortell, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Typical inputs and outputs are listed by name within the respective IPO diagrams with which they are associated. The typical inputs and outputs are consistent with ISO/IEC 33060 (2020) when possible. Note that the IPO diagrams throughout this handbook represent “a” way that the SE processes can be performed, but not necessarily “the” way that they must be performed. The system life cycle processes produce “results” that are often captured in “documents” or “artifacts” or “models,” rather than producing “documents” simply because they are identified as outputs. A complete list of all inputs and outputs with their respective descriptions appears in Appendix E.

The controls and enablers shown in Figure 2.11 govern all processes described herein and, as such, are not repeated on the subsequent IPO diagrams. Typically, IPO diagrams do not include controls and enablers, but since they are not repeated in the IPO diagrams throughout the rest of the handbook, we have chosen to label them IPO diagrams. The enablers work together with the inputs to be transformed by the process into the outputs under the direction of the controls. A complete list of all controls and enablers with their respective descriptions appears in Appendix E.




2.3.1.2 Concurrency, Iteration, and Recursion


Too often, the system life cycle processes are viewed as being applied in a sequential, linear manner at a single level of the system hierarchy. However, valuable information and insight need to be exchanged between the processes in order to ensure a good system definition that effectively and efficiently meets the stakeholder needs and requirements. The application of concurrency, iteration, and recursion to the system life cycle processes helps to ensure communication that accounts for ongoing learning and decisions. This facilitates the incorporation of learning from further analysis and process application as the technical solution evolves. Figure 2.12 shows an illustration of the concurrent, iterative, and recursive nature of the system life cycle processes.




FIGURE 2.12 Concurrency, iteration, and recursion. InCOSE SEH original figure created by roedler and Walden. Usage per the InCOSE notices page. All other rights reserved.





Concurrency (indicated by the parallel lines in the figure) is the parallel application of two or more processes at a given level in the system hierarchy. Concurrent work is likely to happen on any project and the system life cycle processes can likewise be performed in a concurrent manner. It is not necessary for processes to be performed serially, especially when one process is not dependent on another for information or results. For example, the Risk Management process and Measurement process usually are performed in a continual and concurrent manner. This is illustrated in Figure 2.34, in which both of these processes occur concurrently, yet provide information to one another. Additionally, the system architecture should enable concurrency through modularization, encapsulation, commonality/reuse, and other design methods.




FIGURE 2.34 Integration of Measurement, Risk Management, and Decision Management processes. INCOSE SEH original figure created by Roedler. Usage per the INCOSE Notices page. All other rights reserved.





Iteration (indicated by the circular arrows in the figure) is the repeated application of and interaction between two or more processes at a given level in the system hierarchy. Iteration is needed to accommodate stakeholder decisions and evolving understanding, account for architectural decisions or constraints, and resolve trade-offs for affordability, adaptability, feasibility, resilience, etc. There can be iteration between any of the processes. For example, there is often iteration between System Requirements Definition and System Architecture Definition processes. The system architecture will reflect these design iterations through identification of functions, their allocation to system elements, assignment to logical and physical interfaces, and verification as intended in the design. In this case, there is a concurrent application of the processes with iteration between them, where the evolving system requirements help to shape the architecture through identified constraints and functional and quality requirements. For example, the system architecture may need to be changed due to detailed electrical modeling indicating that a particular system element’s load exceeds its allocated power budget and forces a design change or reallocation of the network power assignments in the overall system. The tradeoffs between candidate architectures or elements of the architecture, in turn, may identify requirements that are not feasible, driving further requirements analysis with trade-offs that change some requirements. Likewise, the Design Definition process could identify the need to reconsider decisions and trade-offs in the System Requirements Definition or System Architecture Definition processes. Any of these can invoke additional application of the System Analysis and Decision Management processes.

Recursion (indicated by the down and up arrows in the figure) is the repeated application of the set of life cycle processes, tailored as appropriate, at successive levels in the system hierarchy. The Technical Management and Technical Processes are expected to be recursively applied for each successive level of the system hierarchy until the level is reached where the decision is made to make, buy, or reuse a system element (see Section 1.3.5). During the recursive application of the processes, the outputs at one level become inputs for the next successive level (below for system definition, above for system realization).

Horizontal integration ensures completeness before diving deeper and vertical integration ensures consistency between levels in this concurrent, iterative, and recursive environment (see Section 2.3.5.8). For example, one may have to define functions, their inputs and outputs, their associated performance and conditions of operations before writing the associated requirement. Then one can define the related verification (method, conditions, criteria), from which one can postulate the next-lower-level architecture to assess feasibility and perform the related function, performance, or requirements decomposition and allocation. However, teams may need to go down multiples levels to validate that the functions or elements at the lower levels are going to be suitable solutions for the SoI and its stakeholders.





2.3.2 Agreement Processes


The initiation of a project begins with the identification of a problem or opportunity to be addressed, which results in the development of needs to be satisfied. Once a need is identified and resources are committed to establish a project, it is possible to define the terms and conditions of an acquisition and supply relationship through the Agreement Processes, which are defined in ISO/IEC/IEEE 15288 as follows:

[5.7.2] [Agreement] Processes define the activities necessary to establish an agreement between two organizations.



The Agreement Processes in this handbook and in ISO/IEC/IEEE 15288 are focused on the acquisition and supply of systems, system elements, products, or services, although agreements could be established for other objectives. With respect to the acquisition and supply relationship, the acquirer and supplier could be two independent organizations (i.e., no common parent organization or enterprise) or two organizations from the same parent organization or enterprise.

The Agreement Processes are utilized under many conditions, including when:

an organization cannot satisfy a defined need itself,

a supplier can satisfy a defined need in a more economical or timely manner,

a higher authority has directed the use of a specific supplier, and

an organization needs materials or specialized services.



An overall objective of Agreement Processes is to identify the interfaces between the acquirer and supplier(s) and establish the terms and conditions of these relationships, including identifying the inputs required and the outputs that will be provided.

Agreement negotiations are handled in various ways depending on the specific organizations and the formality of the agreement. In a formal agreement, there is usually a contract negotiation activity to refine the contract terms and conditions. Note also that the Agreement Processes can be used for coordinating within an organization between different business units or functions. In this case, the agreement will usually be more informal, not requiring a formal or specific contract.

An important contribution of ISO/IEC/IEEE 15288 is the recognition that SE practitioners are relevant contributors to the Agreement Processes (Arnold and Lawson, 2003). The SE practitioner is usually in a supporting role to the project management practitioner during negotiations and is responsible for impact assessments for changes, trade studies on alternatives, risk assessments, and other technical input needed for decisions.

Acceptance criteria are critical elements to each party because they protect both sides of the business relationship—the acquirer from being coerced into accepting a product with poor quality and the supplier from the unpredictable actions of an indecisive acquirer. It is important to note that the acceptance criteria are negotiated during the Agreement Processes. During negotiations, it is also critical that both parties are able to track progress toward an agreement. Identifying where further work toward achieving consensus in the documents and clauses is vital.

Two Agreement Processes are identified by ISO/IEC/IEEE 15288: the Acquisition process and the Supply process. These processes, subject of Sections 2.3.2.1 and 2.3.2.2, respectively, are two sides of the same coin. They conduct the essential business of the organization related to the SoI. They establish the relationships between organizations relevant to the acquisition and supply of products and services, regardless of whether the agreement is formal (as in a contract) or informal. Each process establishes the context and constraints of the agreement under which the other system life cycle processes belonging to the project scope are performed. Note that an organization can be both a supplier and acquirer for a given system. For example, an organization may be contracted to supply a system to an end customer. However, that organization may choose to acquire some of the system elements, materials, or services for developing or producing the system. So, that organization is the supplier to the end customer of the system and is the acquirer to those organizations providing it system elements, materials, or services.

Changes may happen during the execution of an agreement including acquirer change requests, deviations and waivers from the supply chain, or changes in the context of the project that were foreseen in risk analysis or not. Upon decision of the parties, this may lead to modifications to the initial state of the agreement. For that purpose, a statement of compliance may be initiated and updated all along the project describing the agreed changes and can include requirements impacted by a modification, the reference of modification, compliance verification by the supplier, and compliance validation by the acquirer.





2.3.2.1 Acquisition Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.1.1.1] The purpose of the Acquisition process is to obtain a product or service in accordance with the acquirer’s requirements.



The Acquisition process is invoked to establish an agreement between two organizations under which one party acquires products and/or services from the other. The acquirer experiences a need for an operational system, for services in support of an operational system, for elements of a system being developed by a project, or for services in support of project activities.

Description This section is written from the perspective of the acquirer organization. An acquiring organization applies due diligence in the selection of a supplier to avoid costly failures and impacts to the organization’s budgets and schedules and other issues. Therefore, the role of the acquirer demands familiarity with the Technical, Technical Management, and Organizational Project-Enabling Processes, as it is through them that the supplier will execute the agreement.

Inputs/Outputs Inputs and outputs for the Acquisition process are listed in Figure 2.13. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.13 IPO diagram for the Acquisition process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Acquisition process includes the following activities:

Prepare for the acquisition. – Develop and maintain acquisition policies, plans, and procedures to meet the organization strategies, goals, and objectives as well as the needs of the project management and SE organizations.

– Collect needs in a request for supply—such as a Request for Proposal (RFP) or Request for Quotation (RFQ) or some other mechanism—to obtain the supply of the service and/or product. Through the use of the Technical Processes, the acquiring organization produces a set of requirements and models that will form the basis for the technical information of the agreement.

– Identify a list of potential suppliers—suppliers may be internal or external to the acquirer organization.





Advertise the acquisition and select the supplier. – Distribute the request for supply and select appropriate suppliers—using selection criteria, rank suppliers by their suitability to meet the overall need and establish supplier preferences and corresponding justifications. Viable suppliers should be willing to conduct ethical negotiations, able to meet obligations, and willing to maintain open communications throughout the Acquisition process. Note that the approach may be less formal when a function within the organization is a candidate for the supply need.

– Evaluate supplier responses to the request for supply—ensure the offered product and/or service can meet acquirer needs and complies with industry and other standards. Assessments from the Project Portfolio Management (see Section 2.3.3.3) and Quality Management (see Section 2.3.3.5) processes and review results from the requesting organization are necessary to determine the suitability of each response and the ability of the supplier to meet the stated commitments. Record results from the evaluation of responses to the request for supply. This can range from formal documentation to less formal interorganizational interactions (e.g., between design engineering and marketing).

– Select the preferred supplier(s) based on acquisition criteria.





Establish and maintain an agreement. – Establish an agreement. Ensure an understanding of expectations, including acceptance criteria.

– This agreement ranges in formality from a written contract to a verbal agreement. Appropriate to the level of formality, the agreement establishes requirements, development and delivery milestones, verification, validation and acceptance conditions, process requirements (e.g., configuration management, risk management, measurements), exception-handling procedures, agreement change management procedures, payment schedules, and handling of data rights and intellectual property so that both parties understand the basis for executing the agreement. For a written contract, this occurs when the contract is signed.

– Identify the necessary changes to the agreement and evaluate the related impacts on the agreement.

– Update the agreement with the supplier as necessary.





Monitor the agreement. – Manage Acquisition process activities, including decision making for agreements, relationship building and maintenance, interaction with organization management, responsibility for the development of plans and schedules, and final approval authority for deliveries accepted from the supplier.

– Maintain communications with supplier, stakeholders, and other organizations regarding the project.

– Status progress against the agreed‐to schedule to identify risks and issues, to measure progress toward mitigation of risks and adequacy of progress toward delivery and cost and schedule performance, and to determine potential undesirable outcomes for the organization. The Project Assessment and Control process (see Section 2.3.4.2) provides necessary evaluation information regarding cost, schedule, and performance.

– Amend agreements when impacts on schedule, budget, or performance are identified.





Accept the product or service. – Accept delivery of products and services—in accordance with all agreements and relevant laws and regulations.

– Render payment—or other agreed consideration in accordance with agreed payment schedules.

– Accept responsibility in accordance with all agreements and relevant laws and regulations.

– When an Acquisition process cycle concludes, a final review of performance is conducted to extract lessons learned for continued process performance.

– Retire the agreement.





Note: The project is closed through the Portfolio Management process (see Section 2.3.3.3), which manages the full set of projects of the organization.

Common approaches and tips:

Establish acquisition guidance and procedures that inform acquisition planning, including recommended milestones, standards, assessment criteria, and decision gates. Include approaches for identifying, evaluating, choosing, negotiating, managing, and terminating suppliers.

Establish a technical point of responsibility within the organization for monitoring and controlling individual agreements. This person maintains communication with the supplier and is part of the decision-making team to assess technical development and progress in the execution of the agreement.



Note: There can be multiple points of responsibility for an agreement that focus on technical, programmatic, marketing, etc.

Define and track measures that indicate progress on agreements. Avoid measures that are not focused on the true information needs. Leading indicators are preferable (see Section 2.3.4.7).

Include technical representation in the selection of the suppliers to critically assess the capability of the supplier to perform the required task.

Past performance of the supplier is highly important, but changes to key supplier personnel should be identified and evaluated to understand any impact with respect to the current request for supply.

Communicate clearly with the supplier about priorities and avoid conflicting statements or making frequent changes in the statement of need that introduce risk into the process.

Maintain traceability between the supplier’s responses to the acquirer’s solicitation. This can reduce the risk of contract modifications, cancellations, or follow-on contracts to fix the product or service.

Smart contracts can be used to establish and maintain an agreement. A smart contract is a transaction protocol intended to execute automatically and control or document legally relevant events and actions according to the terms of a contract or an agreement (Tapscott and Tapscott, 2018). The objectives of smart contracts are the reduction of need in trusted intermediaries, arbitrations and enforcement costs, fraud losses, and the reduction of malicious and accidental exceptions (Fries and Paal, 2019).



Elaboration:

The Project Manager’s role is to define, execute, and manage the acquisition. This is focused on the project needs to deliver the system, system elements, products, or services that meet the end user requirements and achieve the acquisition milestones. This is done in collaboration with the SE practitioners and the selected contractor to ensure the technical expectations and key performance parameters are achieved. The team needs to define plans and methods collectively, and refine them as more is learned about the nature and challenges inherent in the system or capability being built and its intended operating environment. For more information on PM-SE integration, see 5.3.3.

When the acquisition involves systems or system elements where technology or a system capability is not mature enough, it is necessary to account for uncertainty and the need for additional risk management actions in the planning. This includes allowing additional margin in the development/production timeframe, such as ample lead time in anticipation of inherent challenges, especially when technology maturation is required. These challenges may also include limited availability of adequate resources for the supplier (skilled labor and/or technologies), a need for customization of supplier products or equipment, poor or early understanding of interface requirements, integration challenges, and required verification and/or validation of the development. If there is no flexibility in the delivery date, then trade-offs may be needed to provide the system capabilities in an incremental manner.

Technical supplier management is about ensuring the supplier meets the allocated project requirements and that the supplier is effectively managed. This is usually achieved through the Statement of Work (SOW) and a set of requirements. The SOW is a mechanism to ensure progress is being made and describes the necessary work, quality, standards, designs, models, evidence, reviews, timescales, and meetings, etc. that the supplier is expected to provide contingent on the contract. To prove the system/system element functional, performance, and operational requirements are met, the supplier will also need to provide compliance matrices and verification and validation evidence.




2.3.2.2 Supply Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.1.2.1] The purpose of the Supply process is to provide an acquirer with a product or service that meets agreed requirements.



The Supply process is invoked to establish an agreement between two organizations under which one party supplies products or services to the other. Within the supplier organization, a project is conducted according to the recommendations of this handbook with the objective of providing a product or service to the acquirer that meets the agreed requirements. In the case of a mass-produced commercial product or service, a marketing, or similar, function may represent the acquirer and establish stakeholder expectations.

Description This section is written from the perspective of the supplier organization. The Supply process is highly dependent upon the Technical, Technical Management, and Organizational Project-Enabling Processes as it is through them that the work of executing the agreement is accomplished. This means that the Supply process is the larger context in which the other processes are applied under the agreement.

Inputs/Outputs Inputs and outputs for the Supply process are listed in Figure 2.14. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.14 IPO diagram for the Supply process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Supply process includes the following activities:

Prepare for the supply. – Develop and maintain strategic plans, policies, and procedures to meet the needs of potential acquirer organizations, as well as internal organization goals and objectives including the needs of the project management and technical SE organizations.

– Identify opportunities.





Respond to a request for supply of products or services. – Select appropriate acquirers willing to conduct ethical negotiations, able to meet financial obligations, and willing to maintain open communications throughout the Supply process.

– Evaluate the acquirer requests and propose a product or service that meets acquirer needs and complies with industry and other standards. Assessments from the Portfolio Management, Human Resource Management, Quality Management, and Business or Mission Analysis processes are necessary to determine the suitability of this response and the ability of the organization to meet these commitments.





Establish and maintain an agreement. – Establish an agreement. Ensure an understanding of expectations, including acceptance criteria.

– Identify the necessary changes to the agreement and evaluate the related impacts on the agreement.

– Update the agreement with the acquirer as necessary.





Execute the agreement. – Start the project and invoke the other processes defined in this handbook.

– Manage the Supply process and related activities including the development of plans and schedules, decision making for agreements, relationship building and maintenance, interaction with organization management, and final approval authority for deliveries made to acquirer.

– Maintain communications with acquirers, suppliers, stakeholders, and other organizations regarding the agreement.

– Carefully evaluate the terms of the agreement to identify risks and issues, progress toward mitigation of risks, and adequacy of progress toward delivery. Also evaluate cost and schedule performance and determine potential undesirable outcomes for the organization.





Deliver and support the product or service. – After acceptance and transfer of the final products and/or services, the acquirer will provide payment or other consideration in accordance with all agreements, schedules, and relevant laws and regulations. A support agreement is often ongoing after the transfer of products and/or services.

– When a Supply process cycle concludes, a final review of performance is conducted to extract lessons learned for continued process performance.

– Retire the agreement.





Note: The agreement is closed through the Portfolio Management process (see Section 2.3.3.3), which manages the full set of systems and projects of the organization. When the project is closed, action is taken to close the agreement.

Common approaches and tips:

Relationship building and trust between the parties is a nonquantifiable quality that, while not a substitute for good processes, makes human interactions agreeable.

Develop technology white papers or similar artifacts to demonstrate and describe to the (potential) acquirer the range of capabilities in areas of interest. Use traditional marketing approaches to encourage acquisition of mass-produced products.

When expertise is not available within the organization (legal and other governmental regulations, laws, etc.), retain subject matter experts to provide information and specify requirements related to agreements.

Invest sufficient time and effort into understanding acquirer needs before the agreement. This can improve the estimations for cost and schedule and positively affect agreement execution. Evaluate any technical specifications for the product or service for clarity, completeness, and consistency.

Involve personnel who will be responsible for agreement execution to participate in the evaluation of and response to the acquirer’s request. This reduces the start‐up time once the project is initiated, which in turn is one way to recapture the cost of writing the response.

Make a critical assessment of the ability of the organization to execute the agreement; otherwise, the high risk of failure and its associated costs, delivery delays, and increased resource commitment needs will reflect negatively on the reputation of the entire organization.



Elaboration:

Agreements fall into a large range, from formal to very informal based on verbal understanding (e.g., from a written contract to a verbal agreement). Agreements may call for a fixed price, cost plus fixed fee, incentives for early delivery, penalties for late deliveries, and other financial motivators. Appropriate to the level of formality, the agreement establishes requirements, development and delivery milestones, verification, validation and acceptance conditions, process requirements (e.g., configuration management, risk management, measurements), exception-handling procedures, agreement change management procedures, payment schedules, and handling of data rights and intellectual property so that both parties understand the basis for executing the agreement. For a written contract, this occurs when the contract is signed.





2.3.3 Organizational Project-Enabling Processes


The Organizational Project-Enabling Processes are defined in ISO/IEC/IEEE 15288 as follows:

[5.7.3] The Organizational Project-Enabling Processes are concerned with providing the resources needed to enable the project to meet the needs and expectations of the organization’s stakeholders. The Organizational Project-Enabling Processes are typically concerned at a strategic level with the management and improvement of the organization’s undertaking, with the provision and deployment of resources and assets, and with its management of risks in competitive or uncertain situations.… The Organizational Project-Enabling Processes establish the environment in which projects are conducted.



This section focuses on the capabilities of an organization relevant to enabling the system life cycle; they are not intended to address general business management objectives, although sometimes the two overlap. Six Organizational Project-Enabling Processes are identified by ISO/IEC/IEEE 15288. They are Life Cycle Model Management, Infrastructure Management, Portfolio Management, Human Resource Management, Quality Management, and Knowledge Management. As defined in ISO/IEC/IEEE 15288 and this handbook, these processes provide the resources and organizational support to enable the projects that are focused on the system life cycle. The organization will tailor these processes and their interfaces to meet specific strategic and tactical objectives in support of the organization’s projects (see Section 4.1).





2.3.3.1 Life Cycle Model Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.2.1.1] The purpose of the Life Cycle Model Management process is to define, maintain, and help ensure availability of policies, life cycle processes, life cycle models, and procedures for use by the organization with respect to the scope of ISO/IEC/IEEE 15288.



Description This process (i) establishes and maintains a set of policies and procedures at the organization level that support the organization’s ability to acquire and supply products and services and (ii) provides integrated system life cycle models necessary to meet the organization’s strategic plans, policies, goals, and objectives for all projects and all system life cycle stages. The processes are defined, adapted, and maintained to support the requirements of the organization, SE organizational units, individual projects, and personnel. The Life Cycle Model Management process is supplemented by recommended methods and tools. The resulting guidelines in the form of organization policies and procedures are still subject to tailoring by projects (see Section 4.1).

Inputs/Outputs Inputs and outputs for the Life Cycle Model Management process are listed in Figure 2.15. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.15 IPO diagram for Life Cycle Model Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Life Cycle Model Management process includes the following activities:

Establish the life cycle process. – Establish policies and procedures for managing and deploying life cycle processes.

– Establish the life cycle processes with process performance metrics to assess effectiveness and efficiency.

– Define roles, responsibilities, accountabilities, and authorities to enable the implementation of the life cycle processes.

– Establish entrance and exit criteria for decision gates.

– Define an appropriate set of life cycle models that are comprised of stages.

– Establish tailoring guidance for projects





Assess the life cycle process. – Use assessments and reviews of the life cycle models’ performance to confirm the adequacy and effectiveness of the Life Cycle Model Management process.

– Identify opportunities to improve the organization life cycle model management guidelines on a continuing basis based on individual project assessments, individual feedback, metrics, and changes in the organization strategic plan.





Improve the process. – Prioritize and implement the identified improvement opportunities.

– Communicate with all relevant organizations regarding the creation of and changes in the life cycle model management guideline.





NOTE: ISO/IEC/IEEE 15288 provides more details for the Life Cycle Model Management process that are aligned with the activities listed above.

Common approaches and tips:

Base the policies and procedures on an organization‐level strategic and business area plan that provides a comprehensive understanding of the organization’s goals, objectives, stakeholders, competitors, future business, and technology trends.

Ensure that policy and procedure compliance review is included as part of the business decision gate criteria.

Develop a Life Cycle Model Management process information database with essential information that provides an effective mechanism for disseminating consistent guidelines and providing announcements about organization-related topics, as well as industry trends, research findings, and other relevant information. This provides a single point of contact for continuous communication regarding the life cycle model management guidelines and encourages the collection of valuable feedback, metrics, and the identification of organization trends.

Establish an organization center of excellence for the Life Cycle Model Management process. This organization can become the focal point for the collection of relevant information, dissemination of guidelines, and analysis of assessments, performance, and feedback. They can also develop checklists and other templates to support project assessments to ensure that the predefined measures and criteria are used for evaluation.

Manage the network of external relationships by assigning personnel to identify standards, industry and academia research, and other sources of organization management information and concepts needed by the organization. The network of relationships includes government, industry, and academia. Each of these external interfaces provides unique and essential information for the organization to succeed in business and meet the continued need and demand for improved and effective systems and products for its stakeholders. It is up to the Life Cycle Model Management process to fully define and utilize these external entities and interfaces (i.e., their value, importance, and capabilities that are required by the organization): – Legislative, regulatory, and other government requirements

– Industry SE and management‐related standards, training, and capability maturity models

– Academic education, research results, future concepts and perspectives, and requests for financial support





Establish an organization communication plan for the policies and procedures. Most of the processes in this handbook include dissemination activities. An effective set of communication methods is needed to ensure that all stakeholders are well informed.

Include stakeholders, such as engineering and project management organizations, as participants in developing the life cycle model management guidelines. This increases their commitment to the recommendations and incorporates a valuable source of organizational experience.

Develop alternative life cycle models based on the type, scope, complexity, and risk of a project. This decreases the need for tailoring by engineering and project organizations.



Elaboration

Value Proposition for Organizational Processes. The value propositions to be achieved by instituting organization‐wide processes for use by projects are as follows:

Provide repeatable/predictable performance across the projects in the organization (this helps the organization in planning and estimating future projects and in demonstrating reliability to stakeholders)

Leverage practices that have been proven successful by certain projects and instill those in other projects across the organization (where applicable)

Enable process improvement across the organization

Improve ability to efficiently transfer staff across projects as roles are defined and performed consistently

Enable leveraging lessons that are learned from one project for future projects to improve performance and avoid issues

Improve startup of new projects (less reinventing the wheel)



In addition, the standardization across projects may enable cost savings through economies of scale for support activities (tool support, process documentation, etc.).

Benchmarking. SE benchmarking involves comparing an organization’s system life cycle processes and practices to those of other entities that are considered as good performers, internally or externally, or comparing to industry standards or good practices. SE benchmarking results and comparisons can be used to generate ideas for driving process improvement to maximize efficiency and effectiveness.

Standard SE Processes. An organization engaged in SE provides the requirements for establishing, maintaining, and improving the standard SE processes and the policies, practices, and supporting functional processes necessary to meet the needs throughout the organization. Further, it defines the process for tailoring the standard SE processes for use on projects addressing the specific needs of the project and for making improvements to the project-tailored SE processes.

Analysis of Process Performance. A high-performing organization also reviews the process (as well as work products), conducts assessments and audits (e.g., assessments based on CMMI (2018), ISO/IEC 33060 (2020), and ISO 9000 (2015) audits), retains corporate memory through the understanding of lessons learned, and establishes how benchmarked processes and practices of related organizations can affect the organization. Successful organizations should analyze their process performance, its effectiveness and compliance to organizational and higher directed standards, and the associated benefits and costs and then develop targeted improvements.

The basic requirements for standard and project-tailored SE process control, based on CMMI (2018), ISO/IEC 33060 (2020), or other resources, are as follows:

Process responsibilities for projects: – Identify SE processes.

– Document the implementation and maintenance of SE processes.

– Use a defined set of standard methods and techniques to support the SE processes.

– Apply accepted tailoring guidelines to the standard SE processes to meet project-specific needs.





Good process definition includes: – Inputs and outputs

– Entrance and exit criteria





Process responsibilities for organizations and projects: – Assess strengths and weaknesses in the SE processes.

– Compare the SE processes to benchmark processes used by other organizations.

– Institute SE process reviews and audits of the SE processes.

– Institute a means to capture and act on lessons learned from SE process implementation on projects.

– Institute a means to analyze potential changes for improvement to the SE processes.

– Institute measures that provide insight into the performance and effectiveness of the SE processes.

– Analyze the process measures and other information to determine the effectiveness of the SE processes.





Although it should be encouraged to identify and capture lessons learned throughout the performance of every project, the SE organization must plan and follow through to collect lessons learned at predefined milestones in the system life cycle. The SE organization should periodically review lessons learned together with the measures and other information to analyze and improve SE processes and practices. The results need to be communicated and incorporated into training. It should also establish good practices and capture them in an easy-to-retrieve form.

For more information on process definition, assessment, and improvement, see the resources in the bibliography, including the CMMI and ISO/IEC TS 33060.




2.3.3.2 Infrastructure Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.2.2.1] The purpose of the Infrastructure Management process is to provide the infrastructure and services to projects to support organization and project objectives throughout the life cycle.



Description The work of the organization is accomplished through projects, which are conducted within the context of the infrastructure environment. This infrastructure needs to be defined and understood within the organization and the project to ensure alignment of the working units and achievement of overall organization strategic objectives. This process exists to establish, communicate, and continuously improve the system life cycle process environment.

Infrastructure Management is an organizational project-enabling process and foundational to all SE process management and improvement. Effective infrastructure management is imperative to an organization’s ability to change and for that change to be positive, durable, and impactful. Each element of infrastructure is a SoI and both Technical Management and Technical Processes, as stated in ISO/IEC/IEEE 15288 apply to the establishment and maintenance of the infrastructure. Additionally, the Infrastructure Management process includes the physical, political, and process improvement infrastructures.

Inputs/Outputs Inputs and outputs for the Infrastructure Management process are listed in Figure 2.16. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.16 IPO diagram for Infrastructure Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Infrastructure Management process includes the following activities:

Establish the infrastructure. – Define infrastructure requirements.

– Define infrastructure elements (e.g., facilities, tools, hardware, software, services, and standards)

– Define, gather, and negotiate infrastructure resource needs with the organization and projects.

– Identify, obtain, and provide the infrastructure resources and services to ensure organization goals and objectives are met.

– Control the infrastructure elements, resources, and services.

– Conduct inventory management to include enumeration, lists, storage to establish ownership, accessibility, and expectations.

– Manage resource and service conflicts and shortfalls with steps for resolution.

– Conduct infrastructure management inventories including identification, status, type, location, access, and condition.





Maintain the infrastructure. – Continue to assess whether the project infrastructure needs are met.

– Identify and provide improvements or changes to the infrastructure resources as the project requirements change.

– Manage infrastructure resource availability to ensure organization goals and objectives are met. Conflicts and resource shortfalls are managed with steps for resolution.

– Allocate infrastructure resources and services to support all projects.

– Evaluate the condition of the infrastructure.

– Perform cost analysis toward the cost of infrastructure management.

– Control multi-project infrastructure resource management communications to effectively allocate resources throughout the organization; and identify potential future or existing conflict issues and problems with recommendations for resolution.

– Provide change control for the infrastructure management.

– Conduct risk analysis regarding infrastructure management.

– Evaluate infrastructure management alternatives through analysis of alternatives. This evaluation and analysis compliments risk management and cost reduction activities.





Common approaches and tips:

Qualified resources may be leased (insourced or outsourced) or licensed in accordance with the investment strategy.

Establish an organization infrastructure architecture. Integrating the infrastructure of the organization can make the execution of routine business activities more efficient.

Establish a resource management information system with enabling support systems and services to maintain, track, allocate, and improve the resources for present and future organization needs. Computer-based equipment tracking, facilities allocation, and other systems are recommended for organizations with over 50 people.

Attend to physical factors, including facilities and human factors, such as ambient noise level and computer access to specific tools and applications.

Begin planning in early life cycle stages of all system development efforts to address utilization and support resource requirements for system transition, facilities, infrastructure, information/data storage, and management. Enabling resources should also be identified and integrated into the organization’s infrastructure.

Engage project management, risk management, and business management processes to fully integrate Infrastructure Management processes to ensure organizational adoption.



Elaboration

Infrastructure Management Concepts. Projects all need resources to meet their objectives. Project planners determine the resources needed by the project and attempt to anticipate both current and future needs. The Infrastructure Management process provides the mechanisms whereby the organization infrastructure is made aware of project needs and the resources are scheduled to be in place when requested. While this can be simply stated, it is less simply executed. Conflicts must be negotiated and resolved, equipment must be obtained and sometimes repaired, buildings need to be refurbished, and information technology services are in a state of constant change. The infrastructure management organization collects the needs, negotiates to remove conflicts, and is responsible for providing the enabling organization infrastructure without which nothing else can be accomplished. Since resources are not free, their costs are also factored into investment decisions. Financial resources are addressed under the Portfolio Management process (see Section 2.3.3.3), but all other resources, except for human resources which are addressed under the Human Resource Management process (see Section 2.3.3.4), are addressed under this process.

Infrastructure management is complicated by the number of sources for requests, the need to balance the skills of the labor pool against the other infrastructure elements (e.g., computer-based tools), the need to maintain a balance between the budgets of individual projects and the cost of resources, the need to keep apprised of new or modified policies and procedures that might influence the skills inventory, and myriad unknowns.

Resources are allocated based on requests. Infrastructure management collects the needs of all the projects in the active portfolio and schedules or acquires nonhuman assets, as needed. Additionally, the infrastructure management process maintains and manages the facilities, hardware, and support tools required by the portfolio of organization projects. Infrastructure management is the efficient and effective deployment of an organization’s resources when and where they are needed. Such resources may include inventory, production resources, or information technology. The goal is to provide materials and services to a project when they are needed to keep the project on target and on budget. A balance should be found between efficiency and robustness. Infrastructure management relies heavily on forecasts into the future of the demand and supply of various resources.

The organization environment and subsequent investment decisions are built on the existing organization infrastructure, including facilities, equipment, personnel, and knowledge. Efficient use of these resources is achieved by exploiting opportunities to share enabling systems or to use a common system element on more than one project. These opportunities are enabled by good communications within the organization. Integration and interoperability of supporting systems, such as financial, human resources (see Section 2.3.3.4), and training, is critically important to executing organization strategic objectives. Feedback from active projects is used to refine and continuously improve the infrastructure.

Further, trends in the market may suggest changes in the supporting environment. Assessment of the availability and suitability of the organization infrastructure and associated resources provides feedback for improvement and reward mechanisms. All organization processes require mandatory compliance with government and corporate laws and regulations. Decision making is governed by the organization strategic plan.

Infrastructure Management Process Maturity. The Infrastructure Management process primarily focuses on the establishment and deployment of infrastructure rather than the construction or actual use of the infrastructure. Since the quality of a product is related to the structure and use of the infrastructure employed, the maturity and quality of the process employed toward management of the infrastructure can help provide higher quality process inputs, outputs, and outcomes.




2.3.3.3 Portfolio Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.2.3.1] The purpose of the Portfolio Management process is to initiate and sustain necessary, sufficient, and suitable projects to meet the strategic objectives of the organization.



Portfolio management also provides organizational output regarding the set of projects, systems, and technical investments of the organization to external stakeholders, such as parent organizations, investors/funding sources, and governance bodies.

Description Projects create the products or services that meet the objectives and generate revenue for an organization. Thus, the conduct of successful projects requires an adequate allocation of funding and resources and the authority to deploy them to meet project objectives. Most business entities manage the commitment of financial resources using well-defined and closely monitored processes.

The Portfolio Management process also performs ongoing evaluation of the projects and systems in its portfolio. Based on periodic assessments, projects are determined to justify continued investment if they have the following characteristics:

Contribute to the organization strategy

Progress toward achieving established goals

Comply with project directives from the organization

Are conducted according to an approved plan

Provide a service or product that is still needed and providing acceptable investment returns



Otherwise, projects may be redirected or, in extreme instances, terminated.

Inputs/Outputs Inputs and outputs for the Portfolio Management process are listed in Figure 2.17. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.17 IPO diagram for Portfolio Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Portfolio Management process includes the following activities:

Define and authorize projects. – Obtain business area plans and organization strategic plans—use the strategic objectives to identify candidate projects to fulfill them.

– Identify, assess, prioritize, and select investment opportunities consistent with the organization strategic plan.

– Establish project scope, define project management accountabilities and authorities, and identify expected project outcomes.

– Establish the domain area of the product line defined by its main features and their suitable variability.

– Allocate adequate funding and other resources to selected projects.

– Identify interfaces and opportunities for multi-project synergies.

– Specify the project governance process including organizational status reporting and reviews.

– Authorize project execution.





Evaluate the portfolio of projects. – Evaluate ongoing projects to provide rationale for continuation, redirection, or termination.

– Provide direction and supporting actions for continuation or redirection, as applicable for successful completion.





Terminate projects. – Close, cancel, or suspend projects that are completed or designated for termination.





Common approaches and tips:

Logic modeling techniques that capture how an organization works can aid development or evaluation of business area plans at multiple levels of interest, ranging from the project- to portfolio-level plans (see, for example, PMBOK® (2021) Section 4.2 for a list of commonly used models). The logic models typically describe the fundamental theory/assumptions, planned work (resources, inputs and activities) linked with intended results (outputs, outcomes, and impact).

When investment opportunities present themselves, prioritize them based on measurable criteria such that projects can be objectively evaluated against a threshold of acceptable performance. This assessment is done in the context of the business area planning to focus resources to best meet present and future objectives.

Expected project outcomes should be based on clearly defined, measurable criteria to ensure that an objective assessment of progress can be determined. Specify the investment information that will be assessed for each milestone. Initiation should be a formal milestone that does not occur until all resources are in place as identified in the project plan.

Establish organizational coordination mechanisms to manage the synergies between active projects in the organization portfolio. Complex and large organization architectures require the management and coordination of multiple interfaces and make additional demands on investment decisions. These interactions occur within and between the projects.

Use a product line engineering approach (see Section 4.2.4) when stakeholders need the same or similar systems (e.g., common features), with some customizations (e.g., variants). The goal is to manage a product line as one product definition with planned variants as opposed to multiple separate products managed individually, thereby streamlining and simplifying the management effort.

Include risk assessments (see Section 2.3.4.4) in the evaluation of ongoing projects. Projects that contain risks that may pose a challenge in the future might require redirection. Cancel or suspend projects whose disadvantages or risks to the organization outweigh the investment.

Include opportunity assessments (see Section 2.3.4.4) in the evaluation of ongoing projects. Addressing project challenges may represent a positive investment opportunity for the organization. Avoid pursuing opportunities that are inconsistent with the capabilities of the organization and its strategic goals and objectives or contain unacceptably high technical risk, resource demands, or uncertainty.

Allocate resources based on the requirements of the projects; otherwise, the risk of cost and schedule overruns may have a negative impact on quality and performance of the project.

Establish effective governance processes that directly support investment decision making and communications with project management.



Elaboration

Define the Business Cases and Assess Against Business Area Plans. Portfolio management tries to maximize the benefit obtained by the organization from the use of financial assets and other resources within the organization. Thus, business cases for potential projects are evaluated for cost-benefit and the business need before a project is approved for the proposed SoI. Each decision gate reviews the business case as the project matures. The result is reverification or perhaps restatement of the business case.

The business case may be validated in a variety of ways. For large projects, sophisticated engineering models, or even prototypes of key system elements, help prove that the objectives of the business case can be met, and that the system will work as envisioned prior to committing large amounts of resources to full-scale engineering and manufacturing development. For smaller projects, when the total investment is modest, proof-of-concept models may be constructed during the concept stage to prove the validity of business case assumptions.

Investment opportunities are not all equal, and organizations are limited in the number of projects that can be conducted concurrently. Further, some investments are not well aligned with the overall strategic plan of the organization. For these reasons, opportunities are evaluated against the portfolio of existing agreements and ongoing projects, taking into consideration the attainability of the stakeholders’ requirements.

Project Management and SE considerations. Portfolios may have multiple projects. As previously stated, projects are added to the portfolio after the candidate project can show that it is both feasible and meets organizational business needs. In many organizations projects with defined scope are organized in programs focused on a set of objectives that are part of the organization’s strategic plan. As stated in the PMI (2017), the focus of portfolio management is “doing the right work” as opposed to program or project management which is more concerned with “doing work right.”

The disciplines of project management and SE have overlapping responsibilities regarding portfolio management. To save time, share knowledge, facilitate the accomplishment of shared objectives, and achieve success, a strong partnership should exist between each of these disciplines (see Section 5.3.3).

At the portfolio level, the scope is extensive with consideration external to the organization and internal across the organization’s enterprise. At the other end of the spectrum, the focus is internal to the project with consideration for the context of the product/service/result. An example of this is to look at the range in scope in requirements development, as shown in Figure 2.18.




FIGURE 2.18 Requirements across the portfolio, program, and project domains. From PMI (2016). Used with permission. All other rights reserved.





At the portfolio level, the portfolio’s strategic plan and roadmap address business and mission needs and provides direction and organizational focus, and plans/actions to realize the direction. Requirements often start at the concept or portfolio level as a high-level view associated with investment or business opportunities.




2.3.3.4 Human Resource Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.2.4.1] The purpose of the Human Resource Management process is to provide the organization with necessary human resources and to maintain their competencies, consistent with strategic needs.



Description Projects all need resources to meet their objectives. This process deals with human resources. Nonhuman resources, including tools, databases, communication systems, financial systems, and information technology, are addressed using the Infrastructure Management process (see Section 2.3.3.2).

Project planners determine the resources needed for the project by anticipating both current and future needs. The Human Resource Management process provides the mechanisms whereby the organization management is made aware of project needs and personnel are scheduled to be in place when requested. While this can be simply stated, it is less simply executed. Conflicts must be resolved, personnel must be trained, and employees are entitled to vacations and time away from the job.

The human resource management organization collects the needs, negotiates to remove conflicts, and is responsible for providing the personnel, without which nothing else can be accomplished. Since qualified personnel are not free, their costs are also factored into investment decisions.

Inputs/Outputs Inputs and outputs for the Human Resource Management process are listed in Figure 2.19. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.19 IPO diagram for Human Resource Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Processes Activities The Human Resource Management process includes the following activities:

Identify skills. – Identify and record skills of existing personnel to establish a “skills inventory.”

– Review current and anticipated projects to determine and record the skill needs across the portfolio of projects. The INCOSE Systems Engineering Competency Framework (SECF) (2018) and Systems Engineering Competency Assessment Guide (SECAG) (2023) can be used as resources to identify SE skills.

Evaluate skill needs against available personnel with the prerequisite skills to determine if training, hiring, or other skill acquisition activities are indicated.





Develop skills. – Establish a strategy/approach for skills development.

– Plan for the skill development per the strategy.

Obtain (or develop) and deliver training, education, and mentoring to close identified gaps of project personnel.

– Identify skills, abilities, and behaviors needed for competencies. The INCOSE Systems Engineering Assessment Guide is a recommended resource for this.

– Identify training and development resources to match desired skills, abilities, and behaviors development. The INCOSE Professional Development Portal can help identify potential resources.

– Identify assignments that lead toward career progression.

– Create succession plans to ensure that the desired skill set and flow of skill development through the organization is sustained into the future.

– Create and maintain skill development records.





Acquire and provide skills. – Provide human resources to support all projects.

– Train or hire qualified personnel when gaps indicate that skill needs cannot be met with existing personnel.

– Maintain and manage a skilled personnel pool to staff ongoing projects.

– Assign personnel to projects based on personnel development and project needs.

– Create and maintain staff assignment records.

– Motivate personnel by providing career development and reward programs.

– Resolve personnel conflicts between or within projects.

– Maintain communication across projects to effectively allocate human resources throughout the organization and identify potential future or existing conflicts and problems with recommendations for resolution.

– Schedule other related assets or, if necessary, acquire them.





Develop and Manage Competencies. – Create and maintain job role definitions related to competencies required.

– Identify organization competency gaps.

– Align organization competencies with strategic objectives.

– Maintain organization-level competency definitions and frameworks.





Common approaches and tips:

The availability and suitability of personnel is one of the critical project assessments and provides feedback for improvement and reward mechanisms.

Consider using an IPDT environment as a means to reduce the frequency of project rotation, recognize progress and accomplishments and reward success, and establish apprentice and mentoring programs for newly hired employees and students.

Maintain both a listing of skill needs and the paths to obtain the necessary expertise, including a pipeline of candidates, training provisions, consultants, temporary outsourcing, reassignments, etc.

Personnel are allocated based on requests and conflicts are negotiated. The goal is to provide personnel to a project when they are needed to keep the project on target and on budget.

Try to avoid the overcommitment of project personnel, especially people with specialized skills.

Skills inventory and career development plans are important documentation that can be validated by engineering and project management. The INCOSE SECF and SECAG are comprehensive resources of skills that can be used to develop career development plans.

Maintain an organization career development program that is not sidetracked by project demands. Develop a policy that all personnel receive training or educational benefits on a regular cycle. This includes both undergraduate and graduate studies, in-house training courses, certifications, tutorials, workshops, and conferences.

Remember to provide training on organization policies and procedures and system life cycle processes.

Establish a resource management information infrastructure with enabling support systems and services to maintain, track, allocate, and improve the resources for present and future organization needs.

Use the slack time in the beginning of a project to provide training to ensure necessary skills.

Career development plans should be managed and aligned to the objectives of both the employee and the organization. Career development plans should be reviewed, tracked, and refined to provide a mechanism to help manage the employee’s career within the organization.



Elaboration

Human Resource Management Concepts. The Human Resource Management process maintains and manages the people required by the portfolio of organization projects. Human resource management is the efficient and effective deployment of qualified personnel when and where they are needed. A balance should be found between efficiency and robustness. Human resource management relies heavily on forecasts into the future of the demand and supply of various resources.

The primary objective of this process is to provide a pool of qualified personnel to the organization. This is complicated by the number of sources for requests, the need to balance the skills of the labor pool against the other infrastructure elements (e.g., computer-based tools), the need to maintain a balance between the budgets of individual projects and the cost of resources, the need to keep apprised of new or modified policies and procedures that might influence the skills inventory, and myriad unknowns.

Project managers face their resource challenges competing for scarce talent in the larger organization pool. They must balance access to the experts they need for special studies with stability in the project team with its tacit knowledge and project memory. Today’s projects depend on teamwork and optimally multidisciplinary teams. Such teams are able to resolve project issues quickly through direct communication between team members. Such intrateam communication shortens the decision-making cycle and is more likely to result in improved decisions because the multidisciplinary perspectives are captured early in the process.




2.3.3.5 Quality Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.2.5.1] The purpose of the Quality Management process is to assure that products, services, and implementations of the Quality Management process meet organizational and project quality objectives and achieve customer satisfaction.



Description The overarching process for achieving quality goals is the Quality Management (QM) process and its supporting methods, values, and subprocesses. Properly communicated, through policy and procedure, it makes visible the goals of the organization to achieve customer satisfaction. These goals, when supported by measurable activities, provide feedback for maintaining consistency in work processes and delivering quality outcomes. Since primary drivers in any project are time, cost, and quality, inclusion of a comprehensive QM process and its subprocesses is essential to every organization and must be sustained by a work culture that is disciplined in the proper execution of QM foundational principles and values. System life cycle processes are concerned with quality issues, and this is sufficient justification for spending the time, money, and energy into establishing QM fundamentals in an organization, its processes, and its people.

The QM process for SE ensures that all SE processes are deployed consistently by capable staff that can then produce systems designs that fulfill the stakeholder’s requirements and lead to development and build processes that are aligned to produce high levels of performance throughout the organization.

Inputs/Outputs Inputs and outputs for the Quality Management process are listed in Figure 2.20. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.20 IPO diagram for the Quality Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Quality Management process includes the following activities:

Plan quality management. – Identify, assess, and prioritize quality guidelines consistent with the organization strategic plan. Establish QM guidelines-policies, standards, and procedures.

– Establish organization and project QM goals and objectives, including QM Culture emphasis.

– Establish organization and project QM responsibilities and authorities.





Assess quality management. – Evaluate project assessments.

– Assess customer satisfaction against compliance with requirements and objectives.

– Continuously improve the QM guidelines.





Perform quality management corrective action and preventive action. – Recommend appropriate action, when indicated.

– Maintain open communications within the organization and with stakeholders.





Common Approaches and Tips

Management’s commitment to quality is reflected in the integration of QM principles in the strategic planning and budgeting of the organization, and the allocation of educational resources to achieve and sustain a reliable QM culture.

A quality policy, mission, strategies, goals, and objectives provide essential inputs along with a description of an organization’s fundamental values for supporting a growing QM culture.



Elaboration

QM Generally accepted theory and practice. The four generally accepted foundational values of quality are its definition, its system, the standard for quality, and the method for measuring quality. Philip Crosby called them the Four Absolutes of Quality (Crosby, 1979).

The definition of quality is meeting the stakeholder’s requirements, needs and expectations. Organizations (and individuals) are both producers and users of systems. One organization or person (acting as an acquirer) can task another (acting as a supplier) for products or services. This transaction is achieved using agreements that promise to fulfil the stakeholder’s requirements in exchange for something of value, usually money. Quality pioneer W. Edwards Deming stressed that meeting stakeholder needs represents the defining criterion for quality and that all members of an organization need to participate actively in “constant and continuous” quality improvement (Deming, 1986).

The system of quality is prevention. One of the two QM prevention methods is Quality Assurance (QA). QA can be described as “putting good things into our processes” so that they perform as designed and conform to our stakeholder’s requirements. QA was born in the aerospace industry and was originally referred to as “reliability engineering.” It is generally associated with activities such as failure testing and pre-inspecting batches of materials and system elements that are then certified for use, thus preventing errors and defects from occurring by building-in quality. The QA methodology also includes infusing processes with reliable human resources and appropriate policies, procedures, and training (SEH Section 2.3.4.8). Quality Control (QC) is the QM method for “taking bad things out of our processes after they occur” to prevent the defects that are discovered from reaching our stakeholders. QC includes checking, monitoring, and inspecting for defects and the removal, replacement, or rework of defective outcomes. One method of monitoring and statistically evaluating the stability and potential defect rates of processes is Statistical Process Control (SPC). Many manufacturing and high-volume service organizations use SPC to help achieve quality. Traditional SPC techniques include real-time, random sampling to test a fraction of the output for variances within critical tolerances (Juran, 1974).

The standard for Quality is Zero Defects (ZD). It is important to make a distinction between the tracking of defects from feedback loops to improve our processes and progress toward a ZD count, and the more fundamental human term which is the Zero Defects Attitude (ZDA) (Kennedy, 2005). A ZDA is not about achieving perfection; it is a commitment to make each stakeholder’s experience as close to what was promised as possible. No one can achieve perfection, nor attain and sustain ZD, so we cannot expect perfection from any of our staff or processes. Like the “pride of workmanship,” people with a ZDA have a “heart attitude” that desires to prevent all defects and to reach the highest level of personal performance and customer satisfaction. People with a ZDA want to keep their promises to everyone and make things right when we fail. A ZDA, coupled with appropriate metrics and plans to progress toward ZD, will result in continuous and incremental improvement.

The method for measuring quality is the price of non-conformance (Crosby, 1979). It is a calculation of the expenses incurred by defects and their related rework, replacement, warranties, customer service, etc. The American Society for Quality calls it the “cost of poor quality.” It is an essential factor in calculating the actual “cost of quality” which is determined by comparing the “price of non-conformance (or doing things wrong) that includes expense caused by re-work, defects, and warranties, with the “price of conformance (or doing things right)” which is a calculation of the expenses related to improving processes and applying preventive methods. The cost of quality includes a calculation of quantitative and qualitative parameters that are measured in both financial and human values. When the cost of doing things right is equal to or less than the price of non-conformance then, as Crosby said, “Quality is Free.”



QM Culture. SE practitioners need to have sufficient process knowledge and a QM knowledge base to be able to evaluate prevention options and make continuous, incremental improvements. When engineering disciplines are supported by planning and budgeting skills that resonate with the organization, we can achieve Process Quality with effective, efficient, and profitable outcomes, low defect rates, and delighted stakeholders. Deming, in his “14 Points” emphasized the need to “create constancy of purpose for improving products and services” and that it should be supported by “a vigorous program of education and self-improvement for everyone” (Deming, 1986). A high-performing work culture is measured by identifiable attributes or values within an organization's leadership style and workforce that directly influence the reliability of outputs. Kennedy (2005) leverages Deming’s mandate and the work of Crosby by defining the Eight Attributes of a Quality Management Culture that are described in Table 2.3. Figure 2.21 shows a QM culture resulting from QM values and skills integration.




FIGURE 2.21 QM Values and Skills Integration. From Kennedy (2005). Used with permission. All other rights reserved.





TABLE 2.3 Eight Attributes of a Quality Management Culture



1. Zero Defects Attitude: A measure of our commitment to keep our promises and to initiate systems with the goal of preventing defects from reaching our customers.

2. Vocational Certainty: A measure of our faithfulness to our career agenda. A QM culture is disciplined about developing their skills and talents and acquiring earned confidence.

3. Process Quality: A measure of our mastery of planning and budgeting disciplines and how effectively we apply them to create viable work processes.

4. Administrative Consistency: A measure of our attention to details. QM cultures carefully listen to their customer to identify and conform to their requirements and assure customer satisfaction.

5. Executive Credibility: A measure of our sincerity and skill with people. Sincerity comes naturally from the heart, but skills can be sharpened and improved to gain reliable influence.

6. Personal Authenticity: A measure of our resolve to be consistent with our customers and coworkers. Authentic QM cultures work diligently to make exceptional service feel normal.

7. Ethical Dependability: A measure of our trustworthiness in practical matters. QM cultures are what we turn to when we want things to work right, run on time, and be there when needed.

8. Create a Keeping the Promise Culture: A measure of the mutual respect, accountability, and professionalism in a work culture. These are the practiced values of effective QM cultures.


From Kennedy (2005). Used with permission. All other rights reserved.





2.3.3.6 Knowledge Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.2.6.1] The purpose of the Knowledge Management process is to create the capability and assets that enable the organization to exploit opportunities to re-apply existing knowledge.



Description Knowledge Management (KM) includes the identification, capture, creation, representation, dissemination, and exchange of knowledge across targeted groups of stakeholders. It draws from the insights and experiences of individuals and/or organizational groups or projects. The knowledge includes both explicit knowledge (conscious realization of the knowledge, often captured in artifacts and able to be communicated) and tacit knowledge (internalized in an individual or team without conscious realization) and can come from either individuals (through experience) or organizations (through processes, practices, and lessons learned) (Alavi and Leidner, 1999) (Roedler, 2010).

Within an organization, explicit knowledge is usually captured in its training, processes, practices, methods, policies, and procedures. In contrast, tacit knowledge is embodied in the individuals or teams of the organization and requires specialized techniques to identify and capture the knowledge, if it is to be passed along within the organization.

KM efforts typically focus on organizational objectives such as improved performance, competitive advantage, innovation, the sharing of good practices or lessons learned, avoidance of relearning practices, integration, and continuous improvement of the organization (Gupta and Sharma, 2004). KM captures knowledge that would otherwise be lost. So, it is generally advantageous for an organization to adopt a KM approach that includes building the framework, assets, and infrastructure to support the KM.

In this handbook, KM is viewed from an organizational project-enabling perspective, that is, how the organization supports the project (or program) environment with the resources in its KM system. The support provided to the project can come in several ways, including:

Knowledge captured from technical experts.

Lessons learned captured from previous similar projects.

Domain engineering information that is applicable for reuse on the project, such as part of a product line or system family (see Section 4.2.4).

Architecture or design patterns that are commonly encountered.

Other reusable assets that may be applicable to the SoI.



Inputs/Outputs Inputs and outputs for the Knowledge Management process are listed in Figure 2.22. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.22 IPO diagram for Knowledge Management process. INCOSE original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The knowledge management process includes the following activities:

Plan knowledge management. – Establish a KM strategy that defines the approach and priorities for how the organization and projects within the organization will interact to ensure the right level of knowledge is captured to provide useful knowledge assets.

– Establish the scope of the KM strategy—the organization and projects need to identify the specific knowledge information to capture and manage. Considerations include the importance and cost effectiveness of capturing the knowledge. If there is no identified project that will benefit from the knowledge asset, then it probably should not be considered.





Share knowledge and skills throughout the organization. – Capture, maintain, and share knowledge and skills per the strategy. The infrastructure should be established to include mechanisms to easily identify, access, and determine the applicability of the knowledge and skills.





Share knowledge assets throughout the organization. – Establish a taxonomy for the reapplication of knowledge.

– Establish a representation for domain models and domain architectures to help ensure an understanding of the domain and identify and manage opportunities for common system elements and their representations, such as architecture or design patterns, reference architectures, and common requirements.

– Define or acquire the knowledge assets applicable to the domain, including system and software elements, and share them across the organization. As the system and system elements are defined in the Technical Processes, the information items that represent those definitions should be captured and included as knowledge assets for the domain. The infrastructure should be established to include mechanisms to easily identify, access, and determine the applicability of the assets.





Manage knowledge, skills, and knowledge assets. – As the domain, family of systems, or product line changes, ensure the associated knowledge assets are revised or replaced to reflect the latest information. In addition, the associated domain models and architectures also may need to be revised.

– Assess and track where the knowledge assets are being used. This can help understand the utility of specific assets, as well as determine whether they are being applied where they are applicable.

– Determine whether the knowledge assets reflect current technology and continue to evolve.





Common approaches and tips:

The planning for KM may include: – Plans for obtaining and maintaining knowledge assets for their useful life.

– Characterization of the types of assets to be collected and maintained along with a scheme to classify them.

– Criteria for accepting, qualifying, and retiring knowledge assets.

– Procedures for controlling changes to the knowledge assets.

– A mechanism for knowledge asset storage and retrieval.





In developing an understanding of the domain, it is important to identify and manage both the commonalities (such as features, capabilities, or functions) and the differences or variations of the system elements (including where a common system element has variations in parameters depending on the system instance). The domain representations should include: – Definition of the boundaries.

– Relationships of the domains to other domains.

– Domain models that incorporate the commonalities and differences allowing for sensitivity analysis.

– An architecture for a system family or product line within the domain, including their commonalities and variations (see Section 4.2.4).





Elaboration

General KM Implementation. KM focuses on capturing the organizational, project, and individual knowledge for use throughout the organization in the future. It is important to capture end-of-project lessons learned prior to the project personnel moving on to new assignment. However, an effective Knowledge Management process has the knowledge capture mechanisms in place to capture the relevant information throughout the life of the project, rather than trying to piece it together at the end.

KM for Product Lines and Reuse. KM also includes identification of systems that are part of a product line or system family (see Section 4.2.4) and system elements that are designed for reuse. For the first instance of these systems and system elements, the KM system needs to capture the domain engineering artifacts in a way to facilitate their use in the future. For subsequent instances, the KM system needs to provide the domain engineering information and capture any variations, updates of technology, and lessons learned. Issues important to the organization include:

Definition and planning of KM activities for domain engineering and asset preservation, including tasks dedicated to domain engineering of product lines or system families and to the preservation of reusable assets.

Integration of architecture management into the KM system including frameworks, architecture reuse, architecture reference models, architecture patterns, platform-based engineering, and product line architecture.

Characterization of the types of assets to be collected and maintained including an effective means for users to find the applicable assets.

Determination of the quality and validity of the assets.



Potential Reuse Issues. There are serious traps in reuse, especially with respect to commercial off-the-shelf (COTS) (see Section 4.3.3) and non-developmental item (NDI) elements:

Do the new system or system element requirements and operational characteristics closely match the prior one? Trap: the prior solution was intended for a different use, environment, or performance level, or it was only a prototype.

How did the prior system or system element perform? Trap: it worked perfectly, but the new application is outside the qualified range (e.g., using a standard car for a high-speed track race).

Is the new system or system element going to operate in the same environment as the prior one? Trap: it is not certain, but there is no time to study it. One NASA Mars probe was lost because the development team used a radiator design exactly as was used on a successful satellite in Earth orbit. When the Mars mission failed, the team then realized that Earth orbiting environment, while in space, is different from a deep space mission.

Is the system/system element definition defined and understood (i.e., requirements, constraints, operating scenarios, etc.)? Trap: too often, the development team assumes that if a reuse solution will be applied (especially for COTS), there is no need for well-defined system definition. The issues may not show up until systems integration, causing major cost and schedule perturbations.

Is the solution likely to have emergent requirements/behaviors where the reuse is being considered? Trap: a solution that worked in the past was used without consideration for the evolution of the solution. If COTS is used, there may be no way to adapt or modify it for emergent requirements.



A properly functioning KM system paired with well‐defined processes and engineering discipline can help avoid these problems.





2.3.4 Technical Management Processes


The engineering of new or existing systems is managed by the conduct of projects. For this reason, it is important to understand the contribution of SE to the management of the project. This contribution is provided through the Technical Management Processes, which ensure the successful management of the SE effort within the project.

The Technical Management Processes are defined in ISO/IEC/IEEE 15288 as follows:

[5.7.4] The Technical Management Processes are concerned with managing the resources and assets allocated by organization management and with applying them to fulfill the agreements into which the organization or organizations enter. The Technical Management Processes relate to the technical effort of projects, in particular to planning in terms of cost, timescales and achievements, to the checking of actions to help ensure that they comply with plans and performance criteria, and to the identification and selection of corrective actions that recover shortfalls in progress and achievement. They are used to establish and perform technical plans for the project, manage information across the technical team, assess technical progress against the plans for the system products or services, control technical tasks through to completion, and to aid in the decision-making process.



Technical management, which is the application of technical and administrative resources to plan, organize and control engineering functions, consists of the following eight processes: Project Planning, Project Assessment and Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement, and Quality Assurance. The Technical Management Processes are used consistently throughout the system life cycle so that system-specific Technical Processes can be conducted effectively. They work with the project management processes to establish and perform technical plans, manage information across the technical teams, assess technical progress against the plans, control technical tasks and risks through to completion, and aid in the decision-making process.

SE practitioners continually interact with project management practitioners. Both contribute to the project with unique professional competences. A life cycle from the project management practitioner’s point of view (project start–project end) is defined differently than from the SE practitioner’s point of view (system concept to system retirement). But there is a “shared space” where both must collaborate to drive the team’s performance and success (Langley, et al., 2011). See Section 5.3.3 for treatment of the integration between SE and project management.





2.3.4.1 Project Planning Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.3.1.1] The purpose of the Project Planning process is to produce and coordinate effective and workable plans.



Description Project planning starts with the identification of a new potential project and continues after the authorization and activation of the project until its termination. The Project Planning process is performed in the context of the organization, and in compliance with the Life Cycle Model Management process (see Section 2.3.3.1) that identifies and establishes relevant policies and procedures applicable to all projects owned by the organization.

The Project Planning process identifies the project objectives, technical activities, interdependencies, resource requirements, risks and opportunities, and management approach for the technical effort. The planning includes the estimates of needed resources and budgets and the determination of the need for project enablers, including specialized equipment, facilities, and specialists during the project to improve efficiency and effectiveness and decrease cost overruns. This requires coordination across the set of processes to develop a set of consistent planning for all activities. For example, different disciplines work together in the performance of the System Requirements Definition, System Architecture Definition, and Design Definition processes to evaluate the parameters such as producibility, testability, operability, maintainability, and sustainability against product performance. Project tasking may be concurrent to achieve the best results.

Project planning establishes the direction necessary to enable execution of the project and the assessment and control of the project progress. It identifies the details of the work and the right set of personnel, skills, infrastructure, and facilities with a schedule for needed resources from within and outside the organization.

Inputs/Outputs Inputs and outputs for the Project Planning process are listed in Figure 2.23. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.23 IPO diagram for Project Planning process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Project Planning process includes the following activities:

Define the project. – Analyze the project supply response and related agreements to define the project objectives, assumptions, constraints, and scope.

– Identify or establish tailoring of organization procedures and practices to carry out planned effort (see Section 4.1).

– Develop or select Breakdown Structures based on the evolving system architecture (see paragraph on Breakdown Structures hereafter) and the constraints on the resources.

– Define and maintain a life cycle model that could be tailored from the defined life cycle models of the organization. This includes the identification of major milestones, decision gates, and project reviews.





Plan project and technical management. – Establish the roles and responsibilities for project authority.

– Define top-level work packages for each activity identified. Each work package should be tied to required resources including procurement strategies.

– Develop a project schedule (e.g., an integrated project schedule, a SE Master Schedule (SEMS)) based on objectives and work estimates.

– Determine the infrastructure and services needed for the project.

– Estimate the costs and establish a project budget.

– Plan the acquisition of materials, goods, and enabling systems.

– Generate and communicate a Systems Engineering Management Plan (SEMP), also called a Systems Engineering Plan (SEP), for project and technical management/execution, including the technical reviews and audits (see Section 2.1.4).

– Contribute to the quality management, configuration management, risk management, information management, and measurement plans to meet the needs of the project with regard to SE efforts (may be the SEMP for smaller projects).

– Establish the achievement criteria to be used for major milestones, decision gates, and internal reviews.

– Establish criteria for project performance.





Activate the project. – Obtain project authorization and resources. The Portfolio Management process provides this authorization (see section 2.3.3.3).

– Obtain authorization for the necessary project resources.

– Commence execution of the project plans.





Common approaches and tips:

The SEMP (or equivalent technical planning) is an important outcome that identifies activities, key events, work packages, and resources. It references other planning artifacts that are tailored for use on the project.

The standard ISO/IEC/IEEE 24748–4 on Systems Engineering Planning is a reference to aid in writing a SEMP.

Plans for developing software are often captured in a Software Development Plan. (See ISO/IEC/IEEE 24748–5.)

The creation of the Work Breakdown Structure (WBS) and other breakdown structures (e.g., Function Tree/Functional Breakdown Structure (FBS), Product Tree/Product Breakdown Structure (PBS), Organizational Breakdown Structure (OBS), Cost Breakdown Structure (CBS)) is an activity where SE and Project Management intersect (Forsberg, et al., 2005). (See paragraph on Breakdown Structures hereafter and Section 5.3.3.)

Taking shortcuts in the planning process reduces the effectiveness of other Technical Management Processes.

Agile project management methods also include planning—the cycles may be shorter and more frequent, but planning is an essential process. Agile planning process is not related to the entire project but addressing only the next already known iterations while applying learning from the previous iterations.

Defining project objectives, value, and the criteria for success are critical to guide project decision making. The project value should be expressed in technical performance measures (TPMs) (Roedler and Jones, 2006) (see Section 2.3.4.7).

Incorporate risk assessment early in the planning process to identify areas that need special attention or contingencies (see Section 2.3.4.4). Always attend to the technical risks (PMI, 2013).

If a Project Management Plan (PMP) already exists or is in preparation (in accordance with practices as defined by the Project Management Body of Knowledge (PMBOK®) (2021) from the Project Management Institute (PMI), for example), then it is important to coordinate in order to have a global consistency between these artifacts. The SEMP should reference, or provide a link to, the PMP for direction on how the SEMP will be updated and controlled on the project.



Elaboration

Project Planning Concepts. Project planning estimates the project budget and schedule against which project progress will be assessed and controlled. SE practitioners and PM practitioners must collaborate in project planning. SE practitioners perform technical management activities consistent with project objectives (see Section 5.3.3). Technical management activities include planning, scheduling, reviewing, and auditing the SE process as defined in the SEMP.

Systems Engineering Management Plan (SEMP). The SEMP is the key technical management plan that integrates the SE effort. It defines how the total set of engineering processes will be organized, structured, and conducted and how it will be controlled to provide a product that satisfies stakeholder requirements. The SEMP typically includes the following content (a complete outline can be found in ISO/IEC/IEEE 24748–4 (2016), which is aligned with ISO/IEC/IEEE 15288 and this handbook):

organization of how SE interfaces with the other parts of the organization

responsibilities and authority of the key engineering roles

clear system boundaries and scope of the system

key, technical objectives, assumptions, and constraints (or link to them)

infrastructure support and resource management (i.e., facilities, tools, IT, personnel)

technical schedule, including key milestones, decision gates, and associated criteria

definition of the SE processes, including interaction with other engineering and project processes

approach and methods for planning and executing the Technical Processes (see Section 2.3.5)

approach and methods for planning and executing the Technical Management Processes (see Section 2.3.4)

approach and methods for planning and executing applicable quality characteristic (QC) approaches (see Section 3.1)

major technical deliverables of the project



A SEMP should be prepared early in the project, submitted to the customer (or to management for in-house projects), and used in technical management for the concept and development stages of the project. The format of the SEMP can be tailored to fit project, customer, or company standards. In addition to being a stand-alone artifact, the SEMP can be a part of an integrated project plan, be a distributed set of plans, or be in a format other than a document (e.g., it may be composed of different models, management tools, or other artifacts).

The SEMS is an essential part of the SEMP and a tool for project control because it identifies the critical path of technical activities in the project. The schedule of tasks and dependencies helps prioritize the effort and justify requests for personnel and resources needed throughout the development life cycle.

Breakdown Structures. The purpose of the breakdown structures is to hierarchically decompose constructs in manageable and understandable elements. In projects, breakdown structures provide:

a framework for ensuring that all requirements, functions, and products of the system design are identified and arranged in a logical relationship that can be traced to, and satisfy, the business and stakeholder needs;

an identification of all activities and resources needed to the product;

a cost relationship to the activities being performed;

an organizational context for the project to perform the activities needed to the product;

an identification, by name, within the organization of the responsible person for performing each activity;

a basis for configuration control once a particular project breakdown structure is baselined, and a basis for effective management of changes;

a framework to help identify risks and subsequent risk management;

a basis for financial control and interface responsibilities resulting from business agreements.



The SE practice is to derive system functions from requirements and then allocate these functions into products or services, usually through the development of a functional and physical architecture (see Section 2.3.5.4). Functions and products are organized in breakdown structures that have the organizational framework of a tree, such as Function Tree and Product Tree. The Function Tree also, called Functional Breakdown Structure (FBS), is a breakdown of the functions of the required SoI into successively lower levels of its functional architecture. The Function Tree includes the technical characteristics of each function. The Product Tree, also called Product Breakdown Structure (PBS), is a breakdown of the SoI into successively lower-level details of its physical architecture (see Section 1.3.5).

The work to be carried out to reach the project objectives can be organized in a breakdown structure, as a hierarchical tree, where the lower-level activities provide more details. This is the Work Breakdown Structure (WBS), which is based on the FBS in the initial stages of system maturity (e.g., feasibility, conceptual design) and the PBS in the later stages. The WBS includes all activities needed to develop the product. Each branch of the WBS is used to define a work package (WP). Each WP describes the work to be performed, related input and output, who is doing the work, the related interfaces with other WPs, the related cost and deliverables and the key dates and milestones. The WBS serves as a reference for the identification of cost elements arranged into a Cost Breakdown Structure (CBS). Along with the overall management organization, the WBS is also used to determine who does what. This is represented in an Organizational Breakdown Structure (OBS), which is a hierarchical tree of the organizational elements. Figure 2.24 illustrates these different project breakdown structures with their relationships. See Section 5.3.3 for the relationship between PM and SE.




FIGURE 2.24 The breakdown structures. INCOSE SEH original figure created by Roussel and Dazzi on behalf of the INCOSE PM–SE Integration Working Group. Usage per the INCOSE Notices page. All other rights reserved.





2.3.4.2 Project Assessment and Control Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.3.2.1] The purpose of the Project Assessment and Control process is to assess if the plans are aligned and feasible; determine the status of the project, technical and process performance; and direct execution to help ensure that the performance is according to plans and schedules, within projected budgets, to satisfy technical objectives.



Assessments are scheduled periodically and for all milestones and decision gates. The intention is to maintain good communications within the project team and with the stakeholders, especially when deviations are encountered. The Project Assessment and Control process uses these assessments to direct the efforts of the project, including redirecting the project when the project does not reflect the anticipated maturity.

Description The Project Planning process (see Section 2.3.4.1) identified details of the work effort and expected results. The Project Assessment and Control process collects data to evaluate the adequacy of the project infrastructure, the availability of necessary resources, and the compliance with project performance measures. Assessments also monitor the technical progress of the project and may identify new risks or areas that require additional investigation. A discussion of the creation and assessment of measures is found in Section 2.3.4.7—Measurement process.

The rigor of the Project Assessment and Control process is directly dependent on intrinsic characteristics of the project and the SoI, such as the complexity, urgency, and consequence of failure to deliver or failure of the SoI. Project control involves both preventive and corrective actions taken to ensure that the project is performing according to plans and schedules and within projected budgets. The Project Assessment and Control process may trigger activities within Technical Management Processes.

Inputs/Outputs Inputs and outputs for the Project Assessment and Control process are listed in Figure 2.25. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.25 IPO diagram for Project Assessment and Control process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Project Assessment and Control process includes the following activities:

Plan for project assessment and control. – Develop a strategy/approach for assessment and control for the project.





Assess the project. – Determine whether project objectives and plans are aligned with the project context.

– Determine cost, schedule, and performance variances for the project and technical effort through assessment of status versus plans.

– Evaluate the effectiveness and efficiency of the performance of project activities.

– Determine if the project roles, responsibilities, accountabilities, and authorities are adequate.

– Assess the adequacy and the availability of the project infrastructure and resources.

– Using project measures and milestone status, assess the progress of the project.

– Conduct required reviews, audits, and inspections to determine readiness to proceed to the next milestone (see paragraph on reviews and audits in the elaboration and Section 2.1.4 for more details).

– Monitor areas of high risk, such as critical tasks and new technologies/applications (see Section 2.3.4.4).

– Recommend actions that are warranted by measurement results and other project information.

– Make recommendations for adjustments to project plans—these are input to the project control process and other decision‐making processes.

– Record and provide the project status report, gathering all needed measures on technical progress aspects (e.g., performance, requirements compliance, verification and validation progress) and technical management aspects (e.g., schedule, cost, risk, configuration status).

– Communicate status in the project status report as designated in agreements, policies, and procedures.





Control the project. – Initiate preventive actions when assessments indicate a trend toward deviation.

– Initiate problem resolution when assessments indicate nonconformance with performance success criteria.

– Initiate corrective actions when assessments indicate deviation from approved plans.

– Update project planning as needed based on the project control or corrective actions.

– Implement change actions to reflect contractual changes to cost, time, or quality. This is usually due to the impact of acquirer or supplier request.

– Authorize the project to proceed when assessments support a decision gate or milestone event.





Common approaches and tips:

One way to remain updated on project status is to conduct regular team meetings. Short stand-up meetings on a daily or weekly schedule are effective for smaller groups.

Prevailing wisdom suggests that “what gets measured gets done,” but projects should avoid the collection of measures that are not used in decision making.

Good practices show that status should be concise and visual (e.g., usage of Red/Yellow/Green “traffic lights”) in order to quickly and easily identify the critical issues on which urgent actions for recovery are required. Another useful tool is a project dashboard that provides a timely and easy summary of status.

A template for the project status report is a good practice. This template may be included in the SEMP (or PMP).

Methods and techniques for Project Assessment and Control should be formally described in the SEMP (or PMP) and agreed with the project team.

The Project Management Institute (PMI) provides industry-wide guidelines for project assessment, including Earned Value Management techniques.

Project teams need to identify critical areas and control them through measurement, risk management, analysis, configuration management, and information management.

The Project Assessment and Control process requires close cooperation between the PM practitioner and SE practitioner, with PM being accountable for the overall results of the project and SE being accountable for the achievement of the technical activities.

The typical common responsibilities between PM and SE practitioners are risk management, external supplier relations, quality management and life cycle planning.

An effective feedback control process is an essential element to enable the improvement of project performance.

Incremental and evolutionary models typically schedule frequent assessments and make project control adjustments on tighter feedback cycles than sequential development models (see Section 2.2).

Tailoring of organization processes and procedures (see Section 4.1) should not jeopardize any certifications. Processes must be established with effective reviews, assessments, audits, and improvements.

Standard ISO/IEC 24748–8 / IEEE 15288.2 (2014) is a useful reference on how to define and manage technical reviews and establish requirements for the related milestones.



Elaboration

Integration of Technical Management Artifacts. Each of the Technical Management Processes provides essential insight into the health and progress of the project through the life cycle with respect to the specific focus of the particular process. However, it is important to look at the results of these processes in an integrated view, especially since there are relationships between these processes and their artifacts. For example, the results of the Measurement process provide useful insights into risks, technical reviews and audits, and quality assurance, as well as many other things. Similarly, other processes may identify new information needs for which new measures should be initiated. Mechanisms should be put in place to provide an integrated view of the results or artifacts in a way that the decision makers can interpret quickly and see trends and trigger points to aid decisions. Two such mechanisms are the project status report and the project dashboard. Both organize and provide a summary of similar information about the project; the status report usually presents the information in report form and the dashboard is usually a digital representation that uses gauges, graphs, indicators, or other visual representations of the information. In both mechanisms relationships are shown and trends or areas needing attention are highlighted.

Technical Reviews and Audits. Technical reviews and audits are a foundational element of an effective SE approach and form the backbone of robust technical assessment. Technical reviews and audits provide a venue for baselining stakeholder and system requirements, evaluating the system’s technical maturity, and identifying and assessing risks to system performance, cost, and schedule. In order for a project’s technical management to have a balanced information basis on which to base any required project control actions, each technical review or audit should be conducted from an integrated project viewpoint, including technical status and progress, cost and schedule status, and impacts and risk assessment, to help ensure that technical review decisions do not create unrecognized and unacceptable future project impacts. See Section 2.1.4 Technical Reviews and Audits and ISO/IEC 24748–8 / IEEE 15288.2 (2014) for more information.




2.3.4.3 Decision Management Process


Overview

Purpose As defined by ISO/IEC/IEEE 15288,

[6.3.3.1] The purpose of the Decision Management process is to provide a structured, analytical framework for objectively identifying, characterizing and evaluating a set of alternatives for a decision at any point in the life cycle and select the most beneficial course of action.



Table 2.4 provides a partial list of decision situations (opportunities) that are commonly encountered throughout a system’s life cycle. Buede and Miller (2009) provide a much larger list.


TABLE 2.4 Partial list of decision situations (opportunities) throughout the life cycle



Life cycle stage Decision situation (opportunity)

Concept Assess technology opportunity/initial business case

Craft a technology development strategy

Inform, generate, and refine a capability artifact

Conduct analysis of alternatives

Supporting program initiation decision

Select system architecture



Development Select system element

Select lower-level elements

Select verification and validation methods

Perform make-or-buy decision



Production Select production process and location

Utilization, support Select maintenance approach

Retirement Select disposal approach

INCOSE SEH original table created by Parnell, Kenley, and Roedler. Usage per the INCOSE Notices page. All other rights reserved.





Decision management as a critical SE activity. Consider the number of decisions involved in identifying a business/mission need, crafting a technology development strategy, defining the stakeholder and system requirements, selecting a system architecture, converging on a detailed design, developing verification and validation plans, determining make-or-buy decisions, creating production ramp-up plans, crafting maintenance and logistics plans, and selecting disposal approaches. New product developments entail an array of interrelated decisions throughout the system life cycle.

Description The Decision Management process transforms a broadly stated decision situation into a recommended course of action and associated implementation plan. The process requires a decision maker with full responsibility, authority, and accountability for the decision, a decision analyst with a suite of decision tools, subject matter experts with performance models, and a representative set of end users and other stakeholders (Parnell, et al., 2013). The decision process is executed within the policy and guidelines established by the system sponsor. A well-structured decision process will capture and communicate the impact that different value judgments have on the overall decisions and facilitate the search for alternatives that remain attractive across a wide range of value schemes.

Inputs/Outputs Inputs and outputs for the Decision Management process are listed in Figure 2.26. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.26 IPO diagram for the Decision Management process. INCOSE SEH original figure created by Walden, Shortell, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Decision Management process includes the following activities:

Prepare for decisions. – Develop the decision management strategy/approach for system or project decisions.

– Establish and challenge the decision statement and clarify the decision to be made.

– Determine the analyses methods, other processes, and tools required to support decision activities. (Note that the System Analysis process (see Section 2.3.5.6) is often applied to perform analyses to provide input for the decisions.)

– Provide resources to implement the strategy.





Analyze the decision information. – Frame, tailor, and structure each decision.

– Develop objectives and measures.

– Generate creative alternatives.

– Assess alternatives via deterministic analysis.

– Synthesize results.

– Identify uncertainties and conduct probabilistic analysis.

– Assess impact of the uncertainties.

– Improve alternatives.

– Communicate trade-offs.

– Present recommendation and implement action plan.





Make and manage decisions. – Record the decision with relevant data, models, and supporting documentation (i.e., the decision authority, source, and rationale)

– Describe analyses methods, other processes, and tools actually used to support decision activities.

– Communicate new directions from the decision





Common Approaches and Tips:

Since there are many decisions across the spectrum of project management, system definition, and life cycle activities, the Decision Management process is applied in conjunction with most of the Technical Management and Technical Processes.

It is important to verify and validate the data and assumptions used in the decision analyses, since the validity of the analysis results depends on the use of valid data and assumptions, and the application of appropriate analytic methods.



Elaboration

SE practitioners face many decision situations throughout the life cycle of a project. They must choose the analytical approach that best fits the frame and structure of each decision problem. For instance, when there are “clear, important, and discrete events that stand between the implementation of the alternatives and the eventual consequences” (Edwards, et al., 2007), a decision tree is often a well-suited analytical approach, especially when the decision structure has only a few decision nodes and chance nodes. As the number of decision nodes and chance nodes grows, the decision tree quickly becomes unwieldy and loses some of its communicative power. Furthermore, decision trees require end node consequences be expressed in terms of a single number.

The decision management method most employed by SE practitioners is a multiple objective decision approach (MODA) (Parnell, 2016), in which an objective function is formulated to synthesize an alternative’s response across multiple, often competing, objectives. The aim is to define, measure, and assess stakeholder value and then synthesize this information to facilitate the decision maker’s search for alternatives that represent the best balance with often competing objectives. If time and funding allow, SE practitioners may want to conduct trade studies using several techniques, compare results, and reconcile any differences to ensure findings are robust.

The following are a summary of decision management good practices.

Framing, Tailoring, and Structuring Decisions. Capturing a description of the system baseline, as well as the concept of operations with some indication of system boundaries and anticipated interfaces, helps ensure the understanding of the decision context. This includes such details as the time frame allotted for the decisions, an explicit list of stakeholders, a discussion regarding available resources, and expectations regarding the type of action to be taken as a result of the decision at hand. It may also include decisions anticipated in the future (Edwards, et al., 2007).

Developing Objectives and Measures. Defining the decision to be made may require balancing a large number of ambiguous and potentially conflicting stakeholder need statements, engaging in uncomfortable discussions regarding the relative priority of each requirement, and establishing walkaway points and stretch goals. Per Keeney (2002):

“Most important decisions involve multiple objectives, and usually with multiple‐objective decisions, you cannot have it all. You will have to accept less achievement in terms of some objectives to achieve more on other objectives. But how much less would you accept to achieve how much more?”



Use the information obtained from the Business or Mission Analysis, Stakeholder Needs and Requirements Definition, System Requirements Definition, System Architecture Definition, and Design Definition processes to develop objectives and measures for MODA models that use fundamental objectives (why, what, where, and when), but not means objectives (how). For each fundamental objective, a measure must be established so that alternatives that more fully satisfy the objective receive a better score on the measure than those alternatives that satisfy the objective to a lesser degree. These measures (also known as measures of effectiveness (MOEs), key performance parameters (KPPs), measures of performance (MOPs), technical performance measures (TPMs), critical performance measures, attributes, criterion, or metrics) must be unambiguous, comprehensive, direct, operational, and understandable (Keeney and Gregory, 2005) (Roedler and Jones, 2005) (see Section 2.3.4.7).

Generating Creative Alternatives. For many trade studies, the alternatives will be systems composed of many interrelated system elements. It is important to establish a meaningful product structure for the SoI and to apply this product structure consistently throughout the decision analysis. The product structure should be a useful decomposition of the elements of the SoI that explores the trade space. Each alternative is composed of specific design choices for each element. The ability to communicate the differentiating design features of the alternatives is essential. An alternative to a finite number of alternatives is Set-Based Design (SBD). SBD has been shown to effectively and efficiently explore the trade space (Specking, et al., 2018).

Assessing Alternatives via Deterministic Analysis. The decision team should engage subject matter experts by creating models using operational and test data along with the defined objectives, measures, and alternatives to assess performance and using structured scoring sheets. Each score sheet contains a summary description of the alternative and the scoring criteria. Ideally, the models and simulations should be integrated with the performance, value, and cost models so a design change impacts all models.

Synthesizing Results. Using the data summarized in the objective measure consequence table, explore, understand, aggregate the data, and display results in a way that facilitates stakeholder understanding.

Identifying Uncertainty and Conducting Probabilistic Analysis. It is important to identify potential uncertainty surrounding the assessed score and variables that could impact one or more scores (see Section 1.4.1). One example of uncertainty is that system concepts are described as a collection of system element design choices, but knowledge of the system element performance during system design is often incomplete. Subject matter experts can often assess an upper, nominal, and lower bound score by making three separate assessments: (i) assuming a low performance, (ii) assuming moderate performance, and (iii) assuming high performance.

Accessing Impact of Uncertainty. Decision analysis uses many forms of sensitivity analysis including line diagrams, tornado diagrams, waterfall diagrams, and several uncertainty analyses, including Monte Carlo simulation, decision trees, and influence diagrams (Parnell, et al., 2013). Monte Carlo simulations are used to identify the relative impact of each source of uncertainty on the performance, value, and cost of each alterative. Risks should be identified when significant uncertainty is present.

Improving Alternatives. One could be tempted to end the decision analysis here, highlight the alternative that has the highest total value, and claim success. Such a premature ending would not be considered good practice. Good practice includes further analysis to mine the data generated for the first set of alternatives to reveal opportunities to modify some system element design choices to identify untapped value and reduce risk.

Communicating Trade-Offs. The decision team should identify key observations regarding what stakeholders seem to want and what they may be willing to give up to achieve it. The decision team highlights the design decisions that are least significant and/or most influential and provide the best stakeholder value. In addition, the important uncertainties and risks should also be identified. Observations regarding combinatorial effects of various design decisions are also important products of this process step. Finally, competing objectives that are driving the trade-offs should be highlighted as well.

Presenting Recommendations and Implementing the Action Plan. It is helpful to clearly describe the recommendation as an actionable task list to increase the likelihood of the decision analysis leading to some form of action showing tangible value. Decisions should be documented using digital engineering artifacts. Reports that include the analysis, decisions, and rationale are important for historical traceability and future decisions.




2.3.4.4 Risk Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.3.4.1] The purpose of the Risk Management process is to identify, analyze, treat and monitor the risks continually.



Description Risk Management is a disciplined approach to dealing with the uncertainty that is present throughout the entire system life cycle (see Section 1.4.1). Opportunity management may be performed in conjunction with or as part of risk management. A primary objective of risk management is to identify and manage uncertainties that threaten or reduce the value provided by a business enterprise or organization. A primary objective of opportunity management is to identify and manage uncertainties that enhance or increase the value provided by a business enterprise or organization. Since risk cannot be reduced to zero, another objective is to achieve a proper balance between risk and opportunity.

Risk management, as it relates to SE, is defined in ISO/IEC/IEEE 15288 and elaborated upon in ISO/IEC/IEEE 16085 (2021). As stated in ISO/IEC/IEEE 16085,

[6.1] The Risk Management process is a continual process for systematically addressing risk throughout the life cycle of a system, product, or service. It can be applied to risks related to the acquisition, development, maintenance, or operation of a system.



When using this process for opportunity management, the above statement, with the term “opportunity” substituted for the term “risk,” is also true.

Inputs/Outputs Inputs and outputs for the Risk Management process are listed in Figure 2.27. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.27 IPO diagram for Risk Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Risk Management process includes the following activities:

Plan risk management. – Develop the risk management strategy/approach.

– Capture the Risk Management process context, including risk categories.





Maintain the risk profile. – Capture the thresholds and conditions of the risks.

– Establish and maintain a risk profile to include context of the risk and its likelihood of occurrence, severity of consequences, risk thresholds, and priority and the risk action requests along with the status of their treatment.

– Ensure updates of the risk profile are available to relevant stakeholders.





Analyze risks. – Identify risks consistent with the risk management strategy/approach.

– For each risk, estimate its likelihood and consequence of occurrence.

– For each risk, use the risk thresholds to evaluate the risk for potential treatment.

– For risks that exceed the threshold, capture recommended treatment strategies and measures.





Treat risks that exceed their risk threshold. – Identify a set of feasible alternatives for the treatment of risks.

– Establish measures to provide insight into the risk treatment effectiveness.

– Execute the treatments for the risks.

– When management action is needed for risk treatments, ensure effective coordination.





Monitor risks. – Maintain the record of risk items and how they were treated.

– Monitor high priority risks.

– Monitor risks and the risk management context to capture changes and update priorities and actions.

– Throughout the life cycle, monitor for new risks and sources of risk.





When using this process for opportunity management, the above process activity description, with a few adjustments in terminology, and the term “opportunity” substituted for the term “risk,” is reasonable.

Common approaches and tips:

In the Project Planning process, a risk management plan (RMP) is tailored to satisfy the policies, procedures, standards, and regulations related to and affecting the management of risks for the project.

Process Enablers—It has been found that an organization’s structure and culture can have a significant effect on the performance of the Risk Management process. ISO 31000 (2018), outlines a model that advocates the establishment of principles for managing risk and a framework for managing risk that work in concert with the process for managing risk.

Typical strategies for coping with risk include transference, avoidance, acceptance, or taking action to reduce the potential negative effects of the situation.

Most Risk Management processes include a prioritization scheme whereby risks with the greatest potential negative consequence and the highest likelihood are treated before those deemed to have lower potential negative consequences and lower likelihood. The objective of risk management is to balance the allocation of resources such that a minimum amount of resources achieves the greatest risk mitigation (or opportunity realization) benefits.

Communication errors and misunderstandings can be prevented by defining and communicating the risk terminology to be used by the project and including with the project’s risk management plan (RMP).

Experience has shown that terms such as “positive risk” and concept models that define opportunity as a subset of risks serve only to confuse. Take care to define the terminology and concepts to be used by the project team and provide training to reinforce a common understanding.

Practices used for writing good requirements help with risk statements. For example, one good practice for identifying and clarifying risks is to use an “if <situation>, then <consequence>, for <stakeholder >” pattern. This pattern helps to determine the validity of a risk and assess its magnitude or importance.

Risk management is most successful when risk-based thinking is embraced and integrated into the culture. All personnel are responsible for identifying risks early and continuously throughout the project life cycle.

Negative feedback toward personnel who identify a potential problem will discourage the full cooperation of engaged stakeholders and could result in failure to identify and address serious risk-laden situations. Conduct a transparent Risk Management process to encourage all stakeholders to assist in risk mitigation efforts.

Some situations can be difficult to categorize in terms of probability and consequences; involve all relevant stakeholders in this evaluation to capture the maximum variety in viewpoints.

Risk measurement is not an exact science. Variation in stakeholder perspectives, perceptions, and tolerance levels, along with high uncertainty in available data, can make reliance on quantitative measures of risk insufficient. For example, some low-likelihood/high-severity risks might require treatment and monitoring regardless of the estimated likelihood of occurrence (Taleb, 2018) (Siegel, 2019).

External risks are often neglected in project management. External risks are risks caused by or originating from the surrounding environment of the project (Fossnes, 2005). Project participants often have no control or influence over external risk factors, but they can learn to observe the external environment and eventually take proactive steps to minimize the impact of external risks on the project. The typical issues are time-dependent processes, rigid sequence of activities, one dominant path for success, and little slack.



Elaboration

Definitions of Risk. Few terms used in engineering have as many different published definitions as the term “risk.” In practice, risk terminology and concepts vary considerably across industries; however, most published definitions of risk align with one of two concept models. Below are two prominent definitions of risk that capture the essence of both concepts:

The effect of uncertainty on objectives [see ISO/IEC/IEEE 15288, ISO Guide 73, ISO/IEC/IEEE 16085, ISO/IEC 31000, ISO 27000]

The combination of the probability of occurrence of harm and the severity of that harm [see ISO Guide 51, ISO 22367, ISO 14971]



Both definitions may be used in an SE project. The first definition includes the concept that effects may be negative or positive. In this respect the first definition accommodates use of the second definition. In SE it is common to use the term “risk” when referring to scenarios with a negative effect, and the term “opportunity” when referring to scenarios with a positive effect. The second definition (which accommodates only negative effects) is commonly used in safety engineering, and its use may be required in order to demonstrate compliance to risk management standards and regulations applicable to products and systems that impact public health, safety, and security. For example, in the medical industry (see Section 4.4.2), particularly for medical devices, risk management is often centered on product (patient and user) safety risk (referred to as system safety in this handbook, see Section 3.1.11).

Evolving Risk and Opportunity Management Concepts. According to Conrow (2003), “Traditionally, risk has been defined as the likelihood of an event occurring coupled with a negative consequence of the event occurring. In other words, a risk is a potential problem—something to be avoided if possible, or its likelihood and/or consequences reduced if not.” As a corollary to risk, Conrow (2003) defines opportunity as “the potential for the realization of wanted, positive consequences of an event.” The idea of considering opportunities and positive outcomes (in addition to negative outcomes) as an integral part of a Risk Management process has gained favor with some experts and practitioners. New risk and risk management concepts intended to support this broadened scope for risk management are evolving.

The measurement of risk has two components (see Figure 2.28):




FIGURE 2.28 Level of risk depends upon both likelihood and consequence. From ISO/IEC 31010 (2019). Used with permission. All other rights reserved.





The likelihood that an event will occur

The undesirable consequence of the event if it does occur



The generic consequence/likelihood matrix in Figure 2.28 is a way to display risks according to their consequence (illustrated with the generic a-e, high-to-low, consequence rating scale), and their likelihood (illustrated with the generic 1-5, low-to-high, likelihood rating scale), and to combine these characteristics to display a rating for risk level (illustrated with the generic Roman numeral I-V, high-to-low, risk significance scale). The combination of low likelihood and low undesirable consequences gives low risk, while high risk is produced by high likelihood and highly undesirable consequences. Risk prioritization and decision rules (such as the level of management attention or the urgency of response) can be linked to the matrix cells. Note that this generic matrix is conceptual and cannot be applied without careful customization to address the specific project. Detailed guidance and examples for designing rating scales and matrices suitable for use on specific projects, products and systems are provided in IEC 31010 (2019).

A positive consequence scale may be used in the matrix shown in Figure 2.28, thereby changing the outcome adjective from undesirable to desirable, and the cells in the matrix from risks to opportunities. Note that the foundational concept and structure of the matrix diagram remains the same.

SE and project management are all about pursuing an opportunity to solve a problem or fulfill a need. Opportunities enable creativity in resolving concepts, architectures, designs, and strategic and tactical approaches, as well as the many administrative issues within the project. It is the selection and pursuit of these strategic and tactical opportunities that determine just how successful the project and system will be. Of course, opportunities usually carry risks, and each opportunity will have its own set of risks that must be intelligently judged and properly managed to achieve the full value (Forsberg, et al., 2005). These are the risks that must be managed to enhance the opportunity value and the overall value of the project (see Figure 2.29). Opportunity management and risk management are therefore essential to—and performed concurrently with—the planning process but require the application of separate and unique techniques that justify this distinct technical management element.




FIGURE 2.29 Intelligent management of risks and opportunities. From Forsberg, et al. (2005) with permission from John Wiley & Sons. All other rights reserved.





Balancing Project, Risk, and Opportunity Management for SE. No realistic project can be planned without risk. The challenge is to define the system and the project that best meet overall requirements, allow for risk, and achieve the highest chances of project success. Figure 2.30 illustrates the major interactions between the four risk categories: technical, cost, schedule, and programmatic. The arrow labels indicate typical risk relationships, others are possible.




FIGURE 2.30 Typical relationship among the risk categories. INCOSE SEH original figure from INCOSE SEH v1 Figure 4.5–7. Usage per the INCOSE Notices page. All other rights reserved.





The Risk Management process is used to understand the potential cost, schedule, and performance (i.e., technical) risks associated with a system, and then take a (proactive) structured approach to anticipate negative outcomes and respond to them before they occur. With respect to opportunities, this process is used to understand the potential cost, schedule, and performance (i.e., technical) improvement opportunities associated with a system, and then take a (proactive) structured approach to defining potential positive outcomes and responding to them by adopting the best candidate improvements before the “window of opportunity” is missed. Care is taken to consider new and increased risk created as a result of pursuing a new opportunity. This practice can help identify unintended negative consequences that might be introduced by the proposed change.

Integrating Risk Management. Per ISO/IEC 31000, “integrating risk management with all organizational processes improves the performance of risk management while gaining efficiencies.” Section 7 of ISO/IEC/IEEE 16085 “Risk management in life cycle processes” provides a methodical approach for the integration of risk management and “risk-based thinking” into all SE life cycle processes. Organizations typically manage risks and opportunities of many types, across and throughout the organization. Risks and opportunities associated with system development should be managed in a manner consistent with the organization’s overall risk and opportunity management strategies.

Risk Management and the System Life Cycle. Once the scope and context of a system have been established from a hierarchical standpoint, it is possible to define and model the system (and its associated risks) in relation to its life cycle, i.e., the differences in the risks in different life cycle stages. For example, risks in the concept stage are quite different than the risks in the retirement stage. It is often necessary to consider risks in other stages while performing activities in the current stage.

Risk Assessment Techniques. ISO/IEC 31010, Risk management—Risk assessment techniques, provides detailed descriptions and application guidance for over 30 assessment techniques ranging from brainstorming and checklists to Failure Mode and Effects Analysis (FMEA), Fault Tree Analysis (FTA), Monte Carlo simulation, and Bayesian statistics and Bayes nets. Although a comparable set of (published) techniques for opportunity management is not available, it is notable that ISO/IEC 31010 is not without mention of opportunity, and contains the Strength, Weakness, Opportunity, and Threat (SWOT) Analysis technique. In addition, many of the techniques in ISO/IEC 31010 can be used to assess positive outcomes as well as negative outcomes. For example, FTA can be used to perform Success Tree Analysis, and techniques such as brainstorming, checklists, Monte Carlo simulation, and Bayesian statistical analysis are broadly used for most any purpose, including the assessment of opportunities. A variant of SWOT analysis that is not mentioned in ISO/IEC 31010 is Threats, Opportunities, Weaknesses, and Strengths (TOWS), which puts the emphasis on the external environment (threats and opportunities) rather than on the internal environment (strengths and weaknesses).

Risk Treatment Approaches. Risk treatment approaches (also referred to as risk handling approaches) are often established for the moderate- and high‐risk items identified in the risk analysis effort. These activities are formalized in the RMP. There are four basic approaches to treat risks:

Acceptance: Accept the risk and do no more.

Avoidance: Avoid the risk through change of requirements or redesign.

Control (or Mitigation): Taking actions to reduce the risk by expending budget and/or other resources to reduce likelihood and/or consequence over time.

Transference: Transfer the risk by agreement with another party that it is in their scope to treat. Look for a partner that has experience in the dedicated risk area.



The following are some of the steps that can be taken to avoid or control unnecessary risks:

Requirements scrubbing—Requirements that significantly complicate the system can be scrutinized to ensure that they deliver value equivalent to their investment. Find alternative solutions that deliver the same or comparable capability.

Selection of most promising options—In most situations, several options are available. A trade study can include project risk as a criterion when selecting the most promising alternative.

Staffing and team building—Projects accomplish work through people. Attention to training, teamwork, and employee morale can help avoid risks introduced by human errors.



For high-risk technical tasks, risk avoidance is insufficient and can be supplemented by the following approaches:

Early procurement

Initiation of parallel developments

Implementation of extensive analysis and testing

Contingency planning



For each risk that is determined credible after analysis, a Risk Treatment Plan should be created that identifies the risk treatment strategy, the trigger points for action, and any other information to ensuring the treatment is effectively executed. The Risk Treatment Plan can be part of the risk record on the risk profile. For risks that have significant consequences, a contingency plan should be created in case the risk treatment is not successful. It should include the triggers for enacting a contingency plan.

Risk Monitoring. Project management uses measures to simplify and illuminate the Risk Management process (see Figure 2.34). Measures can help identify new risks, as well as provide insight into the effectiveness of the risk treatments.

Each risk category has certain indicators that may be used to monitor project status for signs of risk. Tracking the progress of key system technical parameters can be used as an indicator of technical risk. The typical format in tracking technical performance is a graph of a planned value of a key parameter plotted against calendar time. A second contour showing the actual value achieved is included in the same graph for comparative purposes. Cost and schedule risk are monitored using the products of the cost/schedule control system or some equivalent technique. Normally, cost and schedule variances are used along with a comparison of tasks planned to tasks accomplished.




2.3.4.5 Configuration Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.3.5.1] The purpose of the Configuration Management (CM) process is to manage system and system element configurations over their life cycle.



CM establishes and maintains consistency, integrity, traceability, and control of a product’s configuration. CM provides enduring truth, trust and traceability across the full life cycle of the product. Appropriate CM across the enterprise and its supply chain, provides efficient, effective, lean, resilient, financially responsible, mature, need realization and sustainment through quantified knowledge and insight. Inadequate CM increases risk to the product—see the example in Section 6.1 about the case of the Therac-25.

Description: Configuration Management (CM) is a Technical Management Process applying appropriate processes, resources, and controls, to establish and maintain consistency between product configuration information, and the product (SAE-EIA 649C).

Evolving system requirements, technology and the operating environment are a reality that must be addressed over the life of a system development effort and throughout the utilization and support stages. Furthermore, CM extended to the enterprise level supports the internal goals needed to achieve an efficient, effective, lean, and resilient enterprise.

Configuration management helps ensure:

that product functional, performance, and physical characteristics are properly identified, documented, controlled, validated, and verified to establish product integrity;

that changes to these product characteristics are properly identified, reviewed, approved, documented, and implemented;

that the products produced against a given set of data are known, verified and validated.



Inputs/Outputs The functional model for the Configuration Management process is listed in Figure 2.31. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.31 IPO diagram for Configuration Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Configuration Management process includes the following activities:

Prepare for configuration management. – Similar to other SE processes, configuration management needs to be planned as early as possible in the product life cycle. The result of CM planning could be a standalone configuration management strategy, could be incorporated in the SEMP, or could be part of the digital implementation of these principles throughout the development platform (e.g., in software development where we have an integrated platform).

– Planning and managing configuration management is accomplished in conjunction with and integrated through other SE activities and should include the following: Identify the context and environment of the system that we want to apply this to

Applying adequate configuration management resources and assigning responsibility

Establishing performance and status measurements

Establish, implement and maintain procedures

Configuration management training

Assessing compliance and effectiveness

Supplier configuration management

Product configuration information processes establishment (inc. collection and processing, controlling status, providing inter-operability and exchange, long-term preservation)

Planning for configuration identification, configuration change management, configuration status accounting, configuration verification, and audit.





Perform configuration identification. – Identify the items or elements of a system and associated data which should be under configuration management.

– Establish unique identifiers for the items and data under configuration management.

– Structure the items and information under configuration management.

– Validate and release items and information under configuration management.

– Establish and identify baselines at appropriate points throughout the life cycle. Baselines may coincide with a project milestone or decision gate as shown in Figure 2.4.

– Manage interfaces and the constraints they impose.

– Identify where distinct configuration control is required (governance) and designate Configuration Items (CIs).





Perform configuration change management. – Manage changes and variances (i.e., non-conformances) throughout the system life cycle to ensure the integrity of the product/system.

– This includes the identification, recording, review (incl. impact analysis), approve/disapprove, tracking, processing, implementing and closing of requests for change/variances, including relevant supporting documentation, whatever its origin.

– Disposition of changes/variances are often performed by change boards (the names used in various industries like Configuration Control Board [CCB], Configuration Review Boards [CRB], etc.).

– An important practice for the change/variance process is to track and manage implementation activities and close the loop ensuring that both the product and its associated information have been evolved to the current approved configuration.





Perform configuration status accounting. – Communicate and maintain the status of controlled events, items, and data, as well as performance of CM processes across the life cycle of the product/system to the appropriate stakeholders.

– Measures and means of measuring performance are established by the Project Assessment and Control process and the configuration status accounting supports these metrics and performance assessments (e.g., Performing reconciliation of the As-Designed data with the As-Built data).





Perform configuration verification and audit. – Perform verification of CM processes, in conjunction with the Verification and Quality Assurance processes. Verification includes: review of CM processes; verifying to ascertain that the system has achieved specified requirements and the design of the system is accurately and completely documented in configuration information; verify physical, functional, and interface requirements defined in the approved product definition information, are achieved by the product; verify approved changes to its configuration. Auditing supports the verification process by validating traceability and status between the product to its design, product design to its requirements, and the implementation of changes. Auditing at events like a functional configuration audit (FCA) or a physical configuration audit (PCA), is often accomplished at the end of the development effort and/or testing.

– Furthermore, the acquirer may have the requirement or wish to perform surveillance and, where necessary, audits to ensure the correct application of CM processes in their supply chain.





Common approaches and tips:

Begin the Configuration Management process at the beginning of the system life cycle and continue through until retirement of the system. Tailoring of the configuration management approach is key for its successful applications across various domains; this includes an appropriate understanding of the information and processes that need to be in place to fulfill all CM requirements.



Elaboration

Additional guidance regarding configuration management can be found in the current versions of SAE-EIA 649C, ISO 10007, and IEEE 828. Application domain‐specific practices, such as SAE ARP 4754A, GEIA HB 649, MIL HDBK 61 B, NIST 800–53, NIST 800–128 provide additional application details.

Configuration management must account for horizontal and vertical integration (see Section 2.3.5.8), in addition to other factors that can affect the system definition over time. Change is a fundamental characteristic of every large-scale system during its life cycle; baselines are set, design fidelity and completeness are improved, and problems are resolved as analyses are performed, impacts are assessed, and trade studies result in decisions that change the system definition. This constancy of change as the design matures makes it imperative to understand the impact of change across all interacting elements and to ensure the complete incorporation of change decisions. Consequently, configuration management, including change management, coordinates maturation of the system.

In Model-Based Systems Engineering (MBSE), CM is required to assure and ensure that the product/system and its product configuration information (i.e., the configuration) are appropriately captured, organized, managed, and communicated for the benefit of the model’s stakeholders and participants (see Section 4.2.1).

The corresponding testing and deployment provisions need to be considered in terms of checks against validation rules, interface compatibility, flow time alignment, technical performance measure evaluation, physical clashing, and other domain-specific characteristics.

Moreover, although cyber security is traditionally thought of as a software engineering problem, it needs to be taken into account in a wider system’s engineering thought process. Hardware components on which the software is deployed as well as system interfaces can be just as susceptible to cyber-attacks as software itself. That is why proper configuration management needs to also include continuous auditing of potential cyber vulnerabilities. CM processes that originated in agile software engineering (SWE), are now widely used in other Engineering disciplines, including MBSE where the most challenging aspect is the constant need to maintain the relationships between the appropriate configurations of each domain while ensuring accountability and consistency. Several well-established CM practices in agile SWE help with addressing those pain points:

revisions are managed as a stream of commits;

baselines are established by tagging specific commits;

concurrent changes are managed through branching and merging;

testing, evaluation and/or deployment are automated through a Continuous Integration and Continuous Delivery (CI/CD) process

security is ensured through the DevSecOps life cycle by integrating security tools into DevOps (see Figure 2.8)



The digital thread establishes communication paths between the individually configured domains. It is also responsible for correctly tying together the appropriate configurations in each domain and to form a consistent configuration for a specific system/product and their elements. More details on traceability can be found in Section 3.2.3.




2.3.4.6 Information Management Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.3.6.1] The purpose of the Information Management process is to generate, obtain, confirm, transform, retain, retrieve, disseminate, and dispose of information to designated stakeholders.



Information management plans, executes, and controls the provision of information to designated stakeholders that is unambiguous, complete, verifiable, consistent, traceable, and presentable. Information includes technical, project, organizational, integration, contractual, agreement, and user information. Information is often derived from data artifacts of the organization, system, process, or project.

Information management needs to provide relevant, timely, complete, valid, and, if required, protected information to designated parties during and, as appropriate, after the product/system life cycle. It manages all defined information, including technical, project, organizational, integration, contractual, agreement, and user information.

Information management ensures that data is properly defined, stored, structured, maintained, secured, exchanged and accessible to those who need it, thereby establishing/maintaining integrity of relevant system life cycle artifacts.

Description Information exists in many forms, and different types of information have different values within an organization. Information assets, whether tangible or intangible, have become so widespread in contemporary organizations that they are indispensable. Information Security has become a fundamental requirement for every industry to work within digital environments with confidence. The following are important terms in information management:

Information is what an organization has compiled or its employees know. It can be stored and communicated, and it may include classified or unclassified, export restrictive, proprietary, and/or protected (e.g., by copyright, trademark, or patent) and unprotected (e.g., business intelligence) intellectual property. Specific domain classification may apply as well (e.g., further classifications, like Controlled Unclassified Information (CUI) protections in the US defense domain).

Information assets are intangible information and any tangible form of its representation, including drawings, models of all flavors (systems, software, design, simulation, manufacturing, etc.), specifications, memos, email, computer files, and databases.

Information security generally refers to the protection, confidentiality, integrity, and availability of the information assets (ISO 17799, 2005).

Information security management includes the controls used to achieve information security and is accomplished by implementing a suitable set of formalized controls, which could be policies, practices, procedures, organizational structures, and software.

Information Security Management System is the life cycle approach to implementing, maintaining, and improving the interrelated set of policies, controls, and procedures that ensure the security of an organization’s information assets in a manner appropriate for its strategic objectives.



Information management must be associated very closely with configuration management to ensure the integrity, initial release and change control of the information and data. Information management provides the basis for the management of and access to information throughout the system life cycle from ideation through disposal. Designated information may include organizational, project, integration, contractual, agreement, technical, and user information. The mechanisms for maintaining historical knowledge in the prior processes—decision making, risk, and configuration management—are under the responsibility of configuration management working in concert with information management. Figure 2.32 is the IPO diagram for the Information Management process.




FIGURE 2.32 IPO diagram for Information Management process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Knowledge management is also closely linked to information management. One of the motivations for putting knowledge management in place is for “Information sharing across the organization” thus information management is key for knowledge management. Whereas “Share knowledge and skills throughout the organization” as one of the process-activities for knowledge management draws an identifiable relationship between the information management and Knowledge Management processes via the feedback loop created with inputs and outputs between the processes if mapped out.

Inputs/Outputs Inputs and outputs for the Information Management process are listed in Figure 2.32. Descriptions of each input and output are provided in Appendix E.

Process Activities The Information Management process includes the following activities:

Prepare for Information Management. – Support establishing and maintaining a system data dictionary—see project planning outputs.

– Define system‐relevant information, revisioning scheme, storage requirements, access privileges, and the duration of maintenance.

– Define formats and media for capture, retention, transmission, and retrieval of information.

– Identify valid sources of information (e.g., business processes) and designate authorities and responsibilities regarding the origination, generation, capture, release, archival, and disposal of information in accordance with the Configuration Management process.





Perform Information Management. – Periodically obtain or transform artifacts of information. This is not necessarily specific to waterfall approaches. “Periodically” can also mean at each increment or each iteration/sprint.

– Maintain information according to integrity, security, and privacy requirements.

– Retrieve and distribute information in an appropriate form to designated parties, as required by agreed schedules, definitions, or defined circumstances.

– Archive designated information for compliance with legal, audit, knowledge retention, and project closure requirements.

– Dispose of unwanted, invalid, or unverifiable information according to organizational policy, security, privacy, and legal requirements applicable to the data.





Common approaches and tips:

Identify information-rich artifacts and store them for later use even if the information is informal, such as a design engineer’s notebook (in any media or format).

Identify the information set at the start of a project if you are going to follow a digital engineering approach.

In the Project Planning process (see Section 2.3.4.1), an information management plan is tailored to satisfy the individual project procedures for information management. An information management plan identifies the system-relevant information to be collected, retained, controlled, secured, and disseminated, with a schedule for disposal.



Elaboration

The initial planning efforts for information management are defined in the information management plan (and should align with the Configuration Management Plan), which establishes the scope of information that is maintained; identifies the resources and personnel skill level required against the defined tasks to be performed; defines the rights, obligations, and commitments of parties for generation, management, and access; and identifies information management tools and processes, as well as methodologies, standards, and procedures that will be used on the project and managed by appropriate configuration management.

Effective information management provides readily accessible information and management means to authorized project and organization personnel. Database management, security, and revision of data, sharing data across multiple platforms and organizations are facilitated by information management. With all emphasis on knowledge management, organizational learning, and information as competitive advantage, these activities are gaining increased attention.




2.3.4.7 Measurement Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288 (and ISO/IEC/IEEE 15939),

[6.3.7.1] The purpose of the Measurement process is to collect, analyze, and report objective data and information to support effective management and address information needs about the products, services, and processes.



Description The Measurement process defines the types of information needed to support project and technical management decisions and implement actions to manage and improve performance. The key SE measurement objective is to assess the SE processes and work products with respect to project and organization needs, including timeliness, meeting performance requirements and quality characteristics, product conformance to standards, effective use of resources, and continuous process improvement in reducing cost and cycle time.

The Practical Software and Systems Measurement (PSM) Guide (2003), Section 1.1, states:

Measurement provides objective information to help the project manager.



Specific measures are based on information needs and how that information will be used to make decisions and take action. Measurement thus exists as part of an integrated set of management processes and includes not just the project manager, but also SE practitioners, analysts, quality management/assurance, and nearly all other technical and management functions/roles. The decisions to be made drive the information needs and the information needs drive the data to be collected, analyzed, and reported. As a result, numerous benefits are realized from effective measurement (see Table 2.5).


TABLE 2.5 Measurement benefits



Benefit to Project Manager/Technical Lead

Communicate effectively throughout the project organization

Identify and correct problems early

Support making key trade-offs

Track specific project objectives

Defend and justify decisions

Enable continuous process improvement



From PSM (2003). Used with permission. All other rights reserved.





Successful measurement communicates meaningful information to the decision makers. The presentation of the information must be relevant and unambiguous to those using it, ensuring the intended interpretation.

Inputs/Outputs Typical inputs and outputs for the Measurement process are listed in Figure 2.33. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.33 IPO diagram for Measurement process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Measurement process includes the following activities:

Prepare for measurement. – Identify the measurement stakeholders and their measurement information needs and develop a strategy to meet them.

– Identify and select relevant prioritized measures that aid with the management and technical performance of the project.

– Define the base measures, derived measures, indicators, data collection, measurement frequency, measurement repository, reporting method and frequency, trigger points or thresholds, and review authority.





Perform measurement. – Gather, process, store, verify, and analyze the data to obtain measurement results (information products).

– Record and review the measurement information products with the measurement stakeholders and recommend action, as warranted by the results.





Common approaches and tips:

Measurement for measurement sake is a waste of time and effort. Collecting data without an information need and an intended use is not effective use of limited resources.

Each measure should be regularly reviewed by the measurement stakeholders. The frequency of review is determined by a number of factors, including frequency of data availability/change, level of risk, maturity of the organization, and cycle times.

Some agreements identify measures of effectiveness (MOEs) that must be met. The derived measures of performance (MOPs) and Technical Performance Measures (TPMs) that provide the necessary insight into meeting the MOEs are default measures to be included within the measurement plan. Other measures to consider should provide insight into technical and programmatic execution of the project (Roedler and Jones, 2005).

The best measures are repeatable, can be implemented with automated data collection or require minimal effort for data collection, are straightforward to understand, and are presented in a consistent format on a regular basis (with trend data and, where applicable, projections).

Many methods are available to present the data to the measurement stakeholders. Line graphs, control charts, and Red/Yellow/Green “traffic lights” are some of the more frequently used. Tools are available to help with measurement.

If a need for corrective action is perceived, further investigation into the measures may be necessary to identify the root cause of the issue to ensure that corrective actions address the cause instead of a symptom.

Measurement by itself does not control or improve process performance, project success, or product quality. Measurement results must be provided to decision makers in a manner that provides the needed insight for the right decisions to be made. Action must be taken, to realize any benefit.



Elaboration

Measurement Concepts. Measurement concepts have been expanded upon in the previous works shown in Table 2.6 that the SE measurement practitioner should reference for further insights.


TABLE 2.6 Measurement references for specific measurement focuses



Reference Focus Reference

General Reference Systems and Software Engineering -Measurement Process (ISO/IEC/IEEE 15939, 2017)

Guide to the Systems Engineering Body of Knowledge (SEBoK), Part 3: SE and Management/Systems Engineering Management/Measurement (SEBoK, 2023)

Practical Software and Systems Measurement (PSM) Guide V4.0c, (PSM, 2003)

Capability Maturity Model Integration (CMMI®) for Development V2.0, Measurement and Quantitative Management Process Areas (CMMI, 2018)



Guidance for New Practitioners INCOSE Systems Engineering Measurement Primer, Version 2.0 (INCOSE Measurement Primer, 2010)

Technical Measurement / Performance Technical Measurement Guide (Roedler and Jones, 2005)

System Development System Development Performance Measurement Report (NDIA, et al., 2011)

Project Management Project Manager's Guide to Systems Engineering Measurement for Project Success (INCOSE PMGtSEMfPS, 2015)

Continuous Iterative Development Continuous Iterative Development Measurement Framework (PSM, et al., 2021)

Digital Engineering Practical Software and Systems Measurement (PSM) Digital Engineering Measurement Framework (INCOSE, et al., 2022)

Leading Indicators Systems Engineering Leading Indicators Guide, Version 2.0 (Roedler, et al., 2010)

INCOSE SEH original table created by Roedler. Usage per the INCOSE Notices page. All other rights reserved.





Measurement Approach. As discussed in the INCOSE Measurement Primer (2010), measurement may be thought of as a feedback control system. Value is obtained from measurement when the data analysis provides insight for assessment or action by decision makers (e.g., action is taken due to a variance from a target value or the need to improve current performance to a more desirable level). Comparing the target value and the allowable difference between the target and actual values enables decisions based upon evaluation of risk to the project or product performance meeting their required goals.

Relationship of Measurement to Risk Management and Decision Management. The measures for a project are driven by the information needs of the project and its decision makers. One source of the information needs are the objectives of the project, which can be related to resources, technical performance of the system, product or process quality, or other aspects of the project that are considered essential. Another key source of information needs are the key risks of the project. As shown in Figure 2.34, the Risk Management process identifies risks that need to be monitored, thus creating information needs that drive new measures. The Measurement process helps characterize and quantify the risks. In turn, the results of the measurement analysis may uncover new risks that need to be considered by the Risk Management process. The results of both risk management and measurement provide essential insight to decision makers that is essential to the Decision Management process. Measurement also provides insight to all other processes, especially Project Planning, Project Assessment and Control, Quality Assurance, Life Cycle Model Management, and the Technical Processes.

Digital Engineering (DE) Measurement. DE has three interrelated concerns: the transformation of engineering activities to a fully digital infrastructure, artifacts, and processes; the use of authoritative sources of truth (ASOTs) to improve the efficiency and productivity of engineering practice; and the use of MBSE practice to fully integrate system data and models with engineering, project management, and other domains and disciplines. Measurement in DE focuses on the implementation of DE transformations on projects and in enterprises, including the realization of measurable benefits in performance, effectiveness, and product quality relative to traditional engineering methods. DE measures can also serve as useful leading indicators for other product related measures. For more information, see INCOSE, et al. (2022) and Section 5.4.

Continuous Iterative Development. As organizations and projects move toward incremental and evolutionary approaches for acquisition and life cycle models, measurement is key to understanding progress and quality (see Section 2.2). Measures are needed to address team, product, and enterprise perspectives. Measures are needed that balance both speed and quality that delivers a best value solution based on project objectives. For more information, see PSM, et al. (2021).

Leading Indicators. Per Roedler, et al. (2010), a leading indicator is a measure for evaluating the effectiveness of how a specific activity is applied on a project in a manner that provides information about impacts that are likely to affect the system performance or SE effectiveness objectives.

A leading indicator may be an individual measure, or collection of measures, that is predictive of future system performance before the performance is realized. Leading indicators aid leadership in delivering value to stakeholders and end users while assisting in taking interventions and actions to avoid rework and wasted effort.

Rather than provide status and historical information, leading indicators use trend information to facilitate predictive analysis (forward looking). By analyzing the trends, quantitative relationships of key factors can be developed with known correlations and predictions can be forecast on the outcomes of certain activities. Trends are analyzed for insight into both the entity being measured and potential impacts to other entities. This enables proactive decisions and actions (preventive and corrective).

For a more detailed treatment of this topic, including measurement examples, refer to Roedler, et al. (2010). In addition, NDIA, et al. (2011) provides specific leading indicators developed from the previously referenced guide for the defense and aerospace domains. However, most of the indicators have a broader application.

Product-Oriented Measures. As shown in Roedler and Jones (2005), product measures can be thought of as an interdependent hierarchy (see Figure 2.35).




FIGURE 2.35 Relationship of product-oriented measures. From Roedler and Jones (2005). Usage per the INCOSE Notices page. All other rights reserved.





Measures of Effectiveness (MOEs), which are stated from the acquirer (customer/user) viewpoint, are the acquirer’s key indicators of achieving the mission needs for performance, suitability, and affordability across the life cycle. Although they are independent of any particular solution, MOEs are the overall operational success criteria (mission performance, safety, operability, operational availability, etc.) to be used by the acquirer for the delivered system, services, and/or processes.

Key Performance Parameters (KPPs) are used in some domains to indicate the minimum number of performance parameters needed to characterize the major drivers of operational performance, supportability, and interoperability. Each KPP has a threshold and objective value. The acquirer defines the KPPs at the time the operational concepts and requirements are defined.

Measures of Performance (MOPs) measure attributes considered as important to ensure that the system has the capability to achieve operational objectives. MOPs are used to assess whether the system meets design or performance requirements that are necessary to satisfy the MOEs. MOPs should be derived from or provide insight for MOEs or other user needs.

Technical Performance Measures (TPMs) are used to assess design progress, show compliance to performance requirements, and track technical risks. They provide visibility into the status of important project technical parameters to enable effective management, thus enhancing the likelihood of achieving the technical objectives of the project. TPMs are derived from, or provide insight for, the MOPs and focus on the critical technical parameters of specific architectural elements of the system as it is designed and implemented. Selection of TPMs should be limited to critical technical thresholds or parameters that, if not met, put the project at cost, schedule, or performance risk. The TPMs are not a full listing of the requirements of the system or system element. The SEMP should define the approach to TPMs (Roedler and Jones, 2005).

Figure 2.36 illustrates a sample TPM. Values are established to provide limits that give early indications if a TPM is out of tolerance. The tolerance band is generally wider earlier in the life cycle and gets tighter as the system development progresses. Measured values that fall outside an established tolerance band alert management that it may be necessary to take corrective action.




FIGURE 2.36 TPM monitoring. INCOSE SEH original figure created by Roedler and Walden. Usage per the INCOSE Notices page. All other rights reserved.





The progress of some TPMs relies on maturing a particular technology. Thus, it may be necessary to have a technology plan and technology readiness level (TRL) assessment as part of the input associated with a TPM.




2.3.4.8 Quality Assurance Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.3.8.1] The purpose of the Quality Assurance process is to help ensure the effective application of the organization’s Quality Management process to the project.



Description Quality Assurance (QA) is broadly defined as the set of activities throughout the entire project life cycle necessary to provide adequate confidence that a product or service conforms to stakeholder requirements or that a process adheres to established methodology (ASQ, 2007). SE practitioners adopt and use QA processes as key contributors to project and systems development success. QA is a key aspect in QM from the project level to the individual processes. It involves the resourcing and improved performance of processes with built-in quality that is designed to prevent defects from occurring in delivered products and services.

Inputs/Outputs Inputs and outputs for the QA process are listed in Figure 2.37. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.37 IPO diagram for the Quality Assurance process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Quality Assurance process includes the following activities:

Prepare for quality assurance. – Establish and maintain the QA strategy (often captured in a QA plan).

– Establish and maintain QA guidelines, policies, standards, and procedures.

– Define responsibilities and authorities.





Perform product or service evaluations. – Perform the evaluations at appropriate times in the life cycle as defined by the QA plan, ensuring V&V of the outputs of the life cycle processes. Ensure that QA perspectives are appropriately represented during design, development, verification, validation, and production activities.

– Evaluate product verification results as evidence of QA effectiveness.





Perform process evaluations. – Implement prescribed surveillance on processes to provide an independent evaluation of whether the developing organization is in compliance with established procedures.

– Evaluate enabling tools and environments for conformance and effectiveness.

– Flow applicable procedural and surveillance requirements throughout the project supply chain and evaluate subcontractor processes for conformance to allocated requirements.





Manage QA records and reports. – Create, maintain, and store records and reports in accordance with applicable requirements.

– Identify incidents and problems associated with product and process evaluations.





Treat incidents and problems.



Note: Incidents are short-term anomalies or observations that require immediate attention, and problems are confirmed nonconformities that would cause the project to fail to meet requirements.

– Document, classify, report, and analyze all anomalies.

– Perform root cause analysis and note trends.

– Recommend appropriate actions to resolve anomalies and errors, when indicated.

– Track all incidents and problems to closure.



Common Approaches and Tips

Management’s commitment to QA is reflected in the integration of QM principles in the strategic planning and budgeting of the organization, and the allocation of educational resources to achieve and sustain a reliable QM culture (see Section 2.3.3.5).

A quality policy, mission, strategies, goals, and objectives provide essential inputs along with a description of an organization’s fundamental values for quality assurance and the support of a growing QM culture.



Elaboration

QA Generally accepted theory and practice. QA is one of the two Quality Management (QM) defect prevention methods. The second is Quality Control which is described and contrasted in Section 2.3.3.5. QA can be described as “putting good things into our processes” so that they perform as designed and conform to our stakeholder’s requirements. Like QM, QA was born in the aerospace industry and was originally referred to as “reliability engineering.” It is generally associated with activities such as failure testing and pre-inspecting batches of materials and system elements that are then certified for use, thus preventing errors and defects from occurring by building-in quality. QA also includes infusing processes with reliable human resources and the appropriate policies, procedures, and training. W. Edwards Deming noted that “Quality comes not from inspection, but from improvement of the production process” (Deming, 1986).

QA Culture. “Ultimately, it is the people in an organization who can create a work culture in which quality is promoted and value is delivered to stakeholders” (Kennedy, 2005). An effective QA methodology defines competent, well-prepared humans as the major asset within processes that are then supported by the appropriate corporate environment, resources, and technologies to improve outcomes. It supports a high-performing work culture that diligently defines and fulfills stakeholder requirements with a Zero Defects Attitude (ZDA) (see Section 2.3.3.5) and is focused on continuous improvement. Philip Crosby noted that “Quality is the result of a carefully crafted cultural environment. It has to be the fabric of the organization, not part of the fabric” (Crosby, 1979).

The fabric of a QA-strengthened work culture is defined by fundamental skills and supporting values that create a sense of ownership by all participants. Workers who identify with an organization’s core values have a stronger sense of psychological ownership and higher job satisfaction. At its core, psychological ownership is about an employee’s possession and stewardship of an organization’s core values and the pride they have about their enterprise/mission (Journal of Organizational Behavior, 2004). The workforce must have skills and experience that are directly related to the output objectives, and when skills are supported by shared values it creates a reliable work culture. (See Section 2.3.3.5.) This strengthening of the work culture leads to greater employee engagement and naturally results in products and services with higher quality, along with other benefits to both the workforce and the corporation (Gallup, 2017, 2020). QM is an educational technology with systems, methods and language that help us reach our business goals and QA performs an essential resourcing, educational and process improvement role in ensuring that all elements of an organization execute its activities in accordance with its plans, and procedures as a means of building quality into products or services. While QA is focused on improving processes to prevent errors from occurring, QC provides an essential feedback loop to QA by providing defect rates and identifying their source in processes. By applying Work Process Analysis (WPA) to the defect data, QA can define and initiate input and process improvements to produce lean outcomes.

As the complexity of a project increases, the challenges to effectiveness and risk management also increase. These factors further emphasize the need for a coordinated QM culture with the proper balance of QC and QA along with the skills, experience, and values that align with the requirements of the project. Kennedy calls this properly configured alignment “Vocational Certainty,” and that a high-performing work culture is measured by identifiable professional and personal attributes or values within an organization’s workforce (Kennedy, 2005). Professional values for an effective QA educational initiative must build upon personal vocational certainty, and on administrative consistency that extends our attention to process details beyond the initial documentation of requirements and progress reports. We must continue to interact with and challenge the stakeholders to mature their requirements so that stakeholder satisfaction can be assured.





2.3.5 Technical Processes


The ISO/IEC/IEEE 15288 includes 14 Technical Processes that are invoked concurrently, iteratively, and recursively throughout the system life cycle in conjunction with supporting agreement and technical management process activities. The Technical Processes are defined in ISO/IEC/IEEE 15288 as follows:

[5.7.5] The Technical Processes are used to define the requirements for a system, to transform the requirements into an effective product, to permit consistent reproduction of the product where necessary, to use the product, to provide the required services, to sustain the provision of those services and to dispose of the product when it is retired from service.



Technical Processes enable SE practitioners to coordinate the interactions between engineering specialists, other engineering disciplines, acquirers, operators, manufacturing/production and other system stakeholders. They also address conformance with the expectations and legislated requirements of society. These processes lead to the creation of a necessary and sufficient set of needs and requirements as well as resulting system solutions that address the needed capabilities within the bounds of performance, environment, external interfaces, ethical norms, societal expectations, regulations, and design constraints. Without the Technical Processes, the risk of project failure would be unacceptably high. Figure 2.38 provides a graphical representation of the Technical Processes in context.




FIGURE 2.38 Technical Processes in context. INCOSE SEH original figure created by Roedler, Walden, and Wheatcraft derived from INCOSE NRM (2022). Usage per the INCOSE Notices page. All other rights reserved.





As shown in Figure 2.38, at the beginning of the system life cycle are stakeholder real-world expectations for a SoI. The SoI could be the integrated system, a set of system elements, or a system element within the system architecture.

For each SoI, through a series of transformational actions across the life cycle, the technical processes transform input artifacts into output artifacts that are inputs into other technical processes, which in-turn transform those artifacts into additional artifacts. This series of transformations results in an SoI that addresses the capabilities needed by the stakeholders.

It is important to understand several key points for Figure 2.38.

While the figure depicts the series of transformations in a linear fashion, in practice the Technical Processes are intended to be practiced concurrently, iteratively, and recursively as the project team moves down the layers of the system architecture. As such, the figure applies to each system element within the system architecture.

The Integration process is applied from the beginning of the project, managing the integrated system as the project team traverses the system architecture. In doing so, the project team is continuously addressing interactions of the parts that make up the integrated system as well as interactions with the macro system of which it is a part. In addition, the project team is assessing the behavior of the system as a function of these interactions and looking for emerging properties—both good and bad—which is a key activity involved in Interface Management (see Section 3.2.4).

Following each transformation, the output artifacts are verified against the system requirements via the Verification process to ensure the output artifacts’ transformation was “right” as defined by their requirements.

Following each transformation, the output artifacts are validated against the stakeholder needs and requirements via the Validation process to ensure the output artifacts are the “right” artifacts as defined by the stakeholder needs and requirements.

Once the SoI has been deployed and has entered into operations by its intended users, post-deployment validation is performed to help ensure the SoI remains the right SoI that meets the stakeholder real-world expectations—is the SoI still the right system? In addition, post-deployment verification is performed to help ensure the SoI is still meeting its requirements over time—is it still “right”?



Further elaboration of these key points is included within the following Technical Process sections.

New requirements can be placed on the SoI by the SoS configurations in which the SoI will participate. The SoS technical considerations apply to all the system life cycle processes across the life cycle stages, especially the Technical Processes that provide the concept and system definition (see Section 4.3.6).





2.3.5.1 Business or Mission Analysis Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.1.1] The purpose of the Business or Mission Analysis process is to define the overall strategic problem or opportunity, characterize the solution space, and determine potential solution class(es) that can address a problem or take advantage of an opportunity.



Description The Business or Mission Analysis process initiates the life cycle of the SoI by defining the problem or opportunity space; defining the mission, business, or operational problems or opportunities; identifying major stakeholders; characterizing the solution space by identifying environmental conditions and business constraints that bound the solution domain; identifying and prioritizing business needs; identifying and prioritizing business requirements, defining critical business success measures; developing preliminary life cycle concepts from the organizational perspectives including operations, acquisition, deployment, support, and retirement; and evaluating alternative solution classes and selecting a preferred solution class.

Inputs/Outputs Inputs and outputs for the Business or Mission Analysis process are listed in Figure 2.39. Descriptions of each input and output are provided in Appendix E. Note that, as with all processes, the Business or Mission Analysis process is applied concurrently and iteratively evolving throughout the life cycle so that all SE artifacts mature as a result of the iterative application of the processes.




FIGURE 2.39 IPO diagram for Business or Mission Analysis process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Business or Mission Analysis process includes the following activities:

Prepare for business or mission analysis. – Identify potential problems and opportunities resulting from changes in the organization’s strategy and Concept of Operations, while considering desired organization mission(s), goals, objectives, and other organizational business needs and business requirements. This may involve the development of concepts for a new solution but may also involve identifying gaps or deficiencies in existing capabilities, systems, products, or services and concepts for addressing those gaps or deficiencies.

– Establish the strategy/approach for business or mission analysis. This involves the organizational approach(es) to defining the problem space, the characterization of the solution space, and the identification of an appropriate alternative solution classes.

– Plan for the necessary enabling systems or services needed through the life cycle for business or mission analysis. This includes interfaces to organizational enabling systems or services such as business, acquisition, operations, production, project management, and SE tools and applications, financial systems, information technology, databases, security controls, and other data and information repositories.

– Ensure enabling system or service access needed to support business or mission analysis.





Define the problem or opportunity space. – Considering relevant trade-space factors as part of the problem and opportunity analysis. This analysis is focused on understanding the scope, drivers, constraints, risks, needs, and requirements associated with the problem or opportunity. The analysis includes changes in business needs, business requirements, opportunities, capabilities, performance improvement, security risks, safety risks, factors such as cost and effectiveness, value, regulation changes, standard changes, user dissatisfaction, lack of existing systems, and PESTEL factors (Political, Economic, Social, Technological, Environmental, and Legal). This may be accomplished through external, internal, or SWOT (Strengths, Weaknesses, Opportunities, and Threats) analysis.

– Define the problem or opportunity, mission, goals, objectives, and associated business needs and requirements to be addressed by a solution class. This definition is solution-class independent, since the solution could be an operational change, a change to an existing system or service, or a new system.

– Prioritize the problem or opportunity, mission, goals, objectives, needs, and requirements against other business needs and business requirements.

– Define critical business success measures. The business must define how it will know that the solution provided will meet its needs. Validation criteria establish critical and desired system performance—thresholds and objectives for system performance parameters that are critical for system success and those that are desired but may be subject to compromise to meet the critical parameters.

– Obtain agreement on the problem or opportunity, mission, goals, objectives, business needs, business requirements, and success measures.





Characterize the solution space. – Define preliminary life cycle concepts for acquisition, development, deployment, operations, support, and retirement of the solution. Business stakeholders identify the stakeholders (individuals or groups) who are to be involved in any of the life cycle concepts. The life cycle concepts define what the system needs to do and how well from the business stakeholder’s perspective of the intended use in the intended operational environment, when operated by the intended users in the context of all its life cycle activities, the required interactions with external systems, drivers and constraints, security, risks, business needs, and business requirements at the strategic level.

– Establish a set of alternative classes spanning the potential solution space.





Evaluate alternative solution classes that span the potential solution space. – Evaluate the set of alternative solution concepts and select the preferred solution concepts against the organization’s business needs, business requirements, and critical business success measures. Appropriate modeling, simulation, and analytical analysis will help determine the feasibility, value, and appropriateness of the alternative solution classes.

– Select the preferred solution class(es) and ensure each has been validated in the context of the proposed strategic level life cycle concepts. Feedback on feasibility, value, market factors, and alternatives is also provided for use in completing the definition of the organization’s level life cycle concepts.

– Provide feedback to organization level life cycle concepts in terms of the selected solution class(es).

– Obtain agreement on the problem or opportunity statement, mission, goals, objectives, critical business success measures, life cycle concepts, business needs, and business requirements.





Manage the Business or Mission Analysis. – As key decisions are made, record the decision along with supporting information and rationale.

– Establish and sustain traceability (analysis, rationale, and alternative solution classes).

– Give CM the information items, work products, or other artifacts needed for baselines.





Common approaches and tips.

Identify the enabling systems and materials needed for transition early in the life cycle to allow for the necessary lead time to obtain or access them.



Elaboration

Identify Major Stakeholders. Although the identification of stakeholders is undertaken at each stage of system development, during the Business or Mission Analysis process, business managers are responsible for nominating key stakeholders and are often responsible for establishing a stakeholder register and means of exchanging information. It is fundamentally a business management function to ensure stakeholders are available and able to contribute to the system development activities for the SoI—stakeholders are often occupied in other business operations activities and must be authorized in terms of both budget and time to expend the needed effort and resources on other than their current operational tasks.

Identify Business Needs and Requirements. For each problem or opportunity, it is important to identify the business needs and business requirements associated with needed capabilities, functionality, performance, and security as well as risk and compliance with standards and regulations. Business needs exist at several levels of abstraction, consist of identification of “what is needed” by the business to address the problem or opportunity, and can be communicated in several forms, such as the mission statement, goals, objectives, critical success measures, use cases, user stories, and individual need statements. The business requirements communicate what the business requires of the solution to address their needs without stating a specific solution. The life cycle concepts are developed in response to the business needs and business requirements. Together, the business needs, business requirements, and critical business success measures communicate what is “necessary for acceptance” at the business level.

Life Cycle Concepts. Life cycle concepts address not only the concepts for the SoI during operations by the intended users in the operational environment, but also includes the concepts required to address the business needs, business requirements, critical business success measures, and higher-level stakeholder needs and stakeholder-owned system requirements across the system life cycle. Preliminary life cycle concepts are established and assured through the Business or Mission Analysis process to the extent needed to define the problem or opportunity space and characterize the solution space. Principal life cycle concepts include:

Concept of operations (ConOps)—Describes the way the organization will operate to achieve its missions, goals, and objectives. The ConOps captures how the system will potentially impact the acquiring and other organizations. “The ConOps describes the organization’s assumptions or intent in regard to an overall operation or series of operations of the business with using the system to be developed, existing systems and possible future systems. The ConOps serves as a basis for the organization to direct the overall characteristics of the future business and systems, for the project to understand its background, and for [its] users … to implement the stakeholder requirements elicitation” (ISO/IEC/IEEE 29148, 2018) Ideally, the enterprise level ConOps should be an input to the Business or Mission Analysis process, but if it does not exist, it may need to be jointly developed and maintained. The ConOps also describes the higher-level system in which the SoI must operate.

Operational concept (OpsCon)—Describes the way the system will be used during operations, for what purpose, in its operational environment by its intended users and does not enable unintended users to negatively impact the intended use of the system nor allow unintended users from using the system in unintended ways. Also addressed are the needed capabilities, functionality, performance, quality, safety, security, compliance with standards and regulations, interactions with external systems, and operational risks. An OpsCon provides a user-oriented perspective that describes system characteristics of the to-be-delivered system. The OpsCon is used to communicate overall quantitative and qualitative system characteristics to the acquirer, user, supplier and other organizational elements.

Acquisition concept—For solutions that will be procured from a supplier, the acquisition concept describes the way the system will be acquired including aspects such as stakeholder engagement, needs definition, requirements definition, design, production, verification, validation, and contract deliverables. The supplier enterprise(s) may need to develop more detailed concepts for production, assembly, verification, validation, transport of system, and/or system elements. For solutions that will be provided internal to the organization, the acquisition concept will include a production concept that describes the way the system will be developed and produced including aspects such as stakeholder engagement, needs definition, requirements definition, design, production, integration, verification, and validation.

Deployment concept—Describes the way the system will be delivered, integrated into its operational environment, and introduced into operations, including deployment considerations when the system will be integrated with other systems that are in operation and/or replace any systems in operation.

Support concept—Describes the logistics, desired support infrastructure and staffing considerations for supporting the system after it is deployed. A support concept would address operating support, engineering support, maintenance support, supply support, training support, and post-deployment verification and validation.

Retirement concept—Describes the way the system will be removed from operation and retired, including the disposal of any hazardous materials used in or resulting from the process and any legal obligations—for example, regarding IP rights protection, any external financial/ownership interests, sustainability, environmental impacts, and security concerns.



These preliminary life cycle concepts are defined first at the organizational level, to the extent required at that level, for the identified solution classes that address the problem or opportunity. The preliminary life cycle concepts are then elaborated and refined through the Stakeholder Needs and Requirements Definition process (Section 2.3.5.2). Through iteration, the life cycle concepts are refined throughout the life cycle as required as a result of feedback obtained through the conduct of the rest of the Technical Processes.

Uncertainties and risk. There will be uncertainties (see Section 1.4.1) in the preliminary life cycle concepts. Uncertainties can be related to differing stakeholder perspectives, business factors, market, management, technical performance, schedule, development and production costs, operations and support costs, security, and sustainability. These uncertainties are a source of risk. Each of these uncertainties need to be addressed using the Risk Management process (Section 2.3.4.4) in conjunction with the rest of the Technical Processes, especially the Stakeholder Needs and Requirements Definition process (Section 2.3.5.2), the System Requirements Definition process (Section 2.3.5.3), and the System Architecture Definition process (Section 2.3.5.4).




2.3.5.2 Stakeholder Needs and Requirements Definition Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.2.1] The purpose of the Stakeholder Needs and Requirements Definition process is to define the stakeholder needs and requirements for a system that can provide the capabilities needed by users and other stakeholders in a defined environment.



Description Successful projects depend on meeting the stakeholder real-world expectations as communicated by the needs and requirements of the stakeholders throughout the system life cycle. A stakeholder is any entity (individual or organization) with a legitimate interest in the system. Stakeholders exist at each of the levels of an organization and system architecture. The focus of the Stakeholder Needs and Requirements Definition process is on elaboration of the preliminary the life cycle concepts, on the stakeholder needs transformed from those concepts, and on the stakeholder requirements transformed from those needs. The activities during the process are constrained and driven by the preliminary life cycle concepts, business needs, business requirements, and critical business success measures developed during the Business or Mission Analysis process (see Section 2.3.5.1).

In addition to identifying the stakeholders, this process elicits the operational use cases, scenarios, and life cycle concepts from stakeholders, identifies drivers and constraints, determines interactions with the operational and enabling systems, determines interactions with users and operators, characterizes the operational environment, and assesses risks associated with the development of a new or changed capability or new opportunities addressed by a solution class. The life cycle concepts are analyzed, matured, and transformed into a set of stakeholder needs. These needs are analyzed and transformed into a set of stakeholder requirements for the SoI. These stakeholder requirements communicate what the stakeholders expect from the SoI that will result in their needs being met using their terminology.

The stakeholder requirements drive and constrain the solution space by addressing stakeholder expectations for the SoI, characterizing the operational environment, and identifying external interface boundaries between the SoI and external systems across which there is an interaction. Traceability between the life cycle concepts, stakeholder needs, and stakeholder requirements is established as part of this process.

Stakeholder requirements govern the SoI’s development and are an essential factor in further defining or clarifying the scope of the development project and elaborating on what is “necessary for acceptance.” If an organization is acquiring the system, this process provides the basis for the technical description of the deliverables in an agreement—typically in the form of a set of system requirements for a SoI and defined interfaces at the SoI boundaries.

Inputs/Outputs Inputs and outputs for the Stakeholder Needs and Requirements Definition process are shown in Figure 2.40. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.40 IPO diagram for Stakeholder Needs and Requirements Definition process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Stakeholder Needs and Requirements Definition process includes the following activities:

Prepare for stakeholder needs and requirements definition. – Identify the stakeholders with an interest in the solution. Resolve differing interests. These stakeholders or classes of stakeholders will help identify constraints and define operational-level life cycle concepts, transform those concepts into operational-level stakeholder needs, which are then transformed into operational-level stakeholder requirements.

– Establish the strategy/approach for stakeholder needs and requirements definition. Understand the role and perspective of each stakeholder and identify any potential conflicts with other stakeholders to develop a stakeholder management plan and a strategy for defining life cycle concepts, stakeholder needs, and stakeholder requirements.

– Plan for the necessary enabling systems or services needed through the life cycle for stakeholder needs and requirements definition. Enabling systems may include tools for elicitation of stakeholder life cycle concepts, recording drivers and constraints, defining risks, analysis, recording needs, recording requirements, and providing traceability between SE artifacts generated during this process, and managing those artifacts.

– Ensure enabling system or service access needed to support stakeholder needs and requirement definition.





Develop the operational concept and other life cycle concepts. – Elaborate the operational concept (OpsCon) within the context of the concept of operations (ConOps), other life cycle concepts, and the preferred solution class(es). Preliminary life cycle concepts are developed in the Business or Mission Analysis process (see Section 2.3.5.1)—in this process they are elaborated in more detail.

– Define a set of operational scenarios (or use cases) to identify required capabilities that correspond to anticipated operational and other life cycle concepts. Identify use cases and operational scenarios and associated capabilities, behaviors, and responses of the system or solution and environments across the SoI life cycle (concept, development, production, utilization, support, and retirement). The use cases and operational scenarios provide the information from the stakeholders needed to define the life cycle concepts; the range of intended uses of the system; the intended operational environment and the system’s impact on the environment; intended users, and interfacing systems, platforms, or products.

– >Capture the characterization of the SoI’s intended operational environment and users.

– Considering usability, identify user interactions. Capture factors (e.g., skills) that can affect the interactions.

– Identify external interface boundaries across which the SoI interacts.

– Considering the stakeholder and technical objectives and limitations, identify constraints on the solution.

– Identify risks associated with management, development, operations, and disposal, including misuse and loss scenarios (see Sections 3.1.12 and 3.1.13).





Define stakeholder needs. – Identify stakeholder needs that reflect the intended life cycle concepts and associated constraints (see the INCOSE NRM [2022] and INCOSE GtNR [2022] for more details). Specify quality, health, safety, security, environment, compliance, and other stakeholder needs and functions that relate to critical qualities.

– In conjunction with the Decision Management process, prioritize and select the essential needs. The System Analysis process (see Section 2.3.5.6) is used to analyze the life cycle concepts, resolve conflicts, and access feasibility of those concepts. Needs are assessed and priorities are assigned in terms of critically, value, completeness, correctness, consistency, security and feasibility.

– As the stakeholder needs are selected, record the needs with their sources and rationale. Transform the life cycle concepts and other sources into a homogeneous, agreed-to integrated set of stakeholder needs. Establish traces from the needs to their sources. Although the stakeholder needs are not required to be as stated as rigorously as requirements, it is useful to follow the same rules as for quality requirements (see Section 2.3.5.3 and the INCOSE GtWR [2023] for more details) since better-formed needs and sets of needs will result in less ambiguity in the transformation of the needs into requirements. For each stakeholder need, define attributes such as source, rationale, priority, and criticality.





Transform stakeholder needs into stakeholder requirements. – Transform the needs into stakeholder requirements. Define a set of stakeholder requirements consistent with the stakeholder needs.

– Identify any additional stakeholder requirements. Define stakeholder requirements that relate to safety, security, sustainability, human systems integration, etc. (see Section 3.1). Define stakeholder requirements that relate to high priority and critical functionality, performance, the operational environment, interactions with users, interactions with external interfacing and enabling systems, and compliance with standards and regulations. Ensure the stakeholder requirements are consistent with the life cycle concepts, needs, scenarios, interactions, constraints, operational risks, and SoI considerations.

– Ensure high quality stakeholder requirements. Each stakeholder requirement should follow the rules for quality requirements and possesses characteristics such as necessary, singular, correct, unambiguous, feasible, appropriate to level, complete, conforming, and can be validated (see Section 2.3.5.3 and the INCOSE GtWR (2023) for more details). For each stakeholder requirement, define attributes such as source, rationale, priority, and criticality.





Analyze stakeholder needs and requirements. – Analyze the complete sets of stakeholder needs and stakeholder requirements. Analyze the sets of stakeholder needs and stakeholder requirements to ensure they are correct, complete, consistent, comprehensible, appropriate to level, and feasible (see Section 2.3.5.3 and the INCOSE GtWR [2023] for more details).

– Enable technical achievement monitoring through the definition of critical performance measures and quality characteristics.

– Define system validation criteria for each stakeholder need and requirement, the validation strategy, validation method, and responsible organization for providing evidence the stakeholder needs and requirements have been met.

– Review the analyzed stakeholder requirements with the applicable stakeholders to validate that their needs and expectations have been adequately captured and expressed.

– Resolve stakeholder needs and requirements issues. Negotiate changes, amendments, and modifications to resolve inconsistencies, conflicts, and unrealizable or impractical stakeholder needs and requirements.





Manage the stakeholder needs and requirements definition. – Obtain explicit agreement on the stakeholder needs and requirements.

– Establish and sustain traceability (stakeholder needs and requirements).

– Give CM the information items, work products, or other artifacts needed for baselines.

– Manage changes to the stakeholder needs and stakeholder requirements, as needed.





Common approaches and tips.

Identify the enabling systems and materials needed for transition early in the life cycle to allow for the necessary lead time to obtain or access them.



Elaboration

This section elaborates and provides “how-to” information on the Stakeholder Needs and Requirements Definition process. Further guidance on elicitation, life cycle concepts, needs and requirements definition can be found in ISO/IEC/IEEE 29148 (2018), the INCOSE GtWR (2023), the INCOSE GtNR (2022), and the INCOSE NRM (2022).

Verified and validated stakeholder needs and stakeholder requirements are drivers and constraints for the majority of the system life cycle Technical Processes. Depending on the system development model, life cycle concepts definition, and maturation, the stakeholder needs and stakeholder requirements capture should be conducted at the beginning of the development cycle and assessed as a continuous, concurrent, and iterative activity as the project team moves recursively through the system architecture and across all life cycle activities. The reason for eliciting and analyzing the life cycle concepts, stakeholder needs, and stakeholder requirements is to understand the expectations of stakeholders well enough to support the System Requirements Definition processes.

Identify Stakeholders. One of the biggest challenges in system development is the identification of the set of stakeholders from whom life cycle concepts, needs, and requirements are elicited. When identifying stakeholders, take into account those who may be affected by, are able to influence, or will support the life cycle stages of the SoI, Typically, stakeholders include customers, users, operators, maintainers, procurement, organization decision makers, approving authorities, regulatory bodies, developing organizations, verifiers, validators, support organizations, and society at large (within the context of the business and proposed solution). This can include the stakeholders of external systems (e.g., interoperating, interfacing, other constituent systems in a system of systems) and enabling systems, as these will usually impose constraints that need to be identified and considered in the SoI or could have impacts on those systems or the environment. In sustainable development, this includes identifying representation for future generations. When direct contact is not possible, agents are identified, such as marketing or user groups to represent the concerns of classes of stakeholders such as consumers or future generations. There also may be stakeholders who oppose the system. These detractors of the system are first considered in establishing consensus needs. Beyond this, they are addressed through the Risk Management process, the threat analysis of the system, or the system requirements for security, adaptability, agility, or resilience.

Elicit or Derive Stakeholder Needs and Stakeholder Requirements. Determining stakeholder needs and requirements requires the integration of a number of disparate views, which may not necessarily be harmonious. It is important to have a “reconcile” path in the establishment of stakeholder needs and stakeholder requirements, since the stakeholder expectations and the life cycle concepts may be in conflict, incomplete, ambiguous, infeasible, or unable to be satisfied collectively within project constraints. This circumstance illustrates an aspect of “horizontal integration” (see Section 2.3.5.8), recognizing that there will often be prioritization of competing concerns, or even outright rejection of some stakeholder concerns because of inconsistencies with other stakeholders’ needs and requirements or a lack of feasibility.

As the SE processes are applied, a common paradigm for examining and prioritizing available information and determining the value of added information should be created. Each of the stakeholder’s views of the needed systems can be translated to a common system description that is understood by all participants, and all decision-making activities recorded for future examination. The stakeholder views will be influenced by cognitive biases (see Section 1.4.2) based on their specific role, education, work experiences, culture, etc. Stakeholder views are framed in the context of these biases. It is important for the project team to understand this during elicitation to better understand the perspective of each stakeholder.

SE practitioners support project management in defining what must be done and gathering the information, personnel, and analysis tools to elaborate the life cycle concepts, needs, and requirements. This includes eliciting or deriving stakeholder needs, stakeholder requirements, system/project constraints (e.g., cost and schedule constraints, technology limitations, applicable specifications, and requirements), “drivers” (e.g., capabilities of the competition, external threats, and critical environments), and risks.

The output of the Stakeholder Needs and Requirements Definition process should be sufficient definition of the life cycle concepts, stakeholder needs, and stakeholder requirements to gain authorization and continuing funding for through the Portfolio Management process (see Section 2.3.3.3). The output should also provide necessary technical definition to the Acquisition process (see Section 2.3.2.1) to generate a request for supply if the system is to be acquired through an acquisition or to gain authorization to develop and market the system if the SoI is to be developed within the organization.

Since stakeholder needs and requirements come from multiple sources, eliciting and capturing them constitutes a significant effort on the part of the project. The life cycle concepts help the project team understand the context within which the needs and requirements are captured and defined. Modeling, analysis, and simulation tools can also be used to evaluate candidate solutions and select a desired solution (see Section 3.2.1).

It is essential to establish a database of the data and information which represents the artifacts generated during this process. The database also includes traces between the stakeholder needs, stakeholder requirements, and system requirements. They serve as a foundation for later refinement and/or revision by subsequent activities across the life cycle. Tools for capturing and managing requirements can be used.

Refine Life Cycle Concepts. Stakeholder needs and requirements result from obtaining an understanding of stakeholder expectations through the definition, analysis, and maturation of in a series of life cycle concepts (e.g., acquisition concept, deployment concept, operations concept, support concept, and retirement concept). Development of preliminary life cycle concepts were introduced in the Business or Mission Analysis process (see Section 2.3.5.1). These life cycle concepts need to be refined as part of the Stakeholder Needs and Requirements Definition process.

The primary objective of the development of life cycle concepts is to ensure that stakeholder needs and requirements are clearly understood and the rationale for each is incorporated into the decision mechanism for later transformation into the system requirements. Interviews with manufacturing/coding stakeholders, operators, maintainers, and disposers of current/similar systems, potential users, owners of interoperating, interfacing, and enabling systems (see Section 1.3.3), and site visits provide valuable stakeholder input toward establishing life cycle concepts. Other objectives are as follows:

To provide traceability between stakeholder needs and stakeholder requirements and their source.

To establish a holistic understanding of the capabilities needed to address the problem or opportunity in terms of people, process, and products.

To establish a basis for needs and requirements to support the system over its life, such as personnel requirements, enabling systems, and support requirements.

To establish a basis for design, system verification, and system validation planning across the life cycle and resulting artifacts and requirements for enabling systems needed as part of the validation and verification activities.

To assess interactions of the SoI with users and its operating environment including interactions across interface boundaries with external and enabling systems.

To provide the basis for analysis of system performance, behavior under (over)-load, and mission-effectiveness calculations.

To validate needs and requirements at all levels and to discover implicit requirements overlooked from other sources.



The life cycle concepts are used to define an integrated set of stakeholder needs which are transformed into the set of stakeholder requirements.

Uncertainties and Risk. During the development of the preliminary life cycle concepts as part of the Business or Mission Analysis process (see Section 2.3.4.3), there may have been uncertainties (see Section 1.4.1) from several perspectives including business, market, management, technical performance, schedule, development and production costs, operations and support costs, security, and sustainability. These uncertainties are a source of risk. Each of these uncertainties must be addressed during the Stakeholder Needs and Requirements Definition process and further elaborated during the Systems Requirements Definition Process (see Section 2.3.4.3).

Record and manage the life cycle concepts, needs, and requirements. The life cycle concepts, stakeholder needs, and stakeholder requirements should be recorded and managed within the project database in a form that allows traceability between the life cycle concepts and the resulting stakeholder needs and requirements (see the INCOSE GtNR [2022] and the INCOSE NRM [2022] for more details).




2.3.5.3 System Requirements Definition Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.3.1] The purpose of the System Requirements Definition process is to transform the stakeholder, user-oriented view of desired capabilities into a technical view of a solution that meets the operational needs of the user.



Description. System requirements are the foundation of system definition and form the basis for the System Architecture Definition, Design Definition, Integration, and Verification processes. Each requirement carries a cost, so the system requirements should be the minimum set necessary and sufficient to realize the intent of the stakeholder needs and requirements. Typically, the later in the project that changes are introduced to the system requirements, the greater the impact is to cost and schedule. Where there is more uncertainty in the requirements, the uncertainty should be managed until the requirements mature.

The System Requirements Definition process generates system requirements from a technical perspective using the stakeholder needs and requirements that reflect the stakeholders’ perspectives. As such, the stakeholder needs and requirements drive and constrain the SoI being developed. The quality of the resulting system requirements is dependent on the quality of the agreed-to stakeholder needs and requirements.

System requirements definition is concurrent, iterative, and recursive. Thus, the System Requirements Definition process is done concurrently and iteratively with the other Technical Processes, particularly the Stakeholder Needs and Requirements Definition and the System Architecture Definition processes. With each iteration, more detailed information is discovered and defined based on the analysis and maturation of the life cycle concepts and the system solution. In addition, the System Requirements Definition processes is recursively applied to define the requirements for each lower-level system element within the SoI architecture. The allocation of the system requirements is performed concurrently with the System Architecture Definition process. Lower-level system elements are defined via the System Architecture Definition process, and then the SoI level requirements are allocated to the system elements at the next level. For each lower-level system element, the Stakeholder Needs and Requirements Definition and System Requirements Definition processes are repeated recursively until all system elements have their system requirements defined. The outputs of System Requirements Definition process must be traceable and consistent with the life cycle concepts and stakeholder needs and stakeholder requirements, without introducing unnecessary implementation biases. The System Requirements Definition process adds the verification criteria to each system requirement as it is derived.

Inputs/Outputs. Inputs and outputs for the System Requirements Definition process are listed in the IPO diagram in Figure 2.41. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.41 IPO diagram for System Requirements Definition process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities. The System Requirements Definition process includes the following activities:

Prepare for system requirements definition. – Establish the strategy/approach for system requirements definition.

– Plan for the necessary enabling systems or services needed through the life cycle for system requirements definition. Enabling systems include tools for elicitation of requirements, life cycle concepts, recording drivers and constraints, defining risks, analysis, recording system needs, recording system requirements, and providing traceability.

– Ensure enabling system or service access needed to support system requirements definition.





Define system requirements. – Define the functional boundary of the system in terms of the behavior and properties to be provided.

– Identify the life cycle concepts and stakeholder requirements from which the system requirements will be transformed and then define each function and associated performance.

– Define each expected system function, including the associated performance. Include both primary functions and enabling functions.

– Define necessary constraints. These include higher-level requirements allocated to the SoI, operational conditions, and interactions with external systems. Define interactions with users, operators, maintainers, and disposers.

– Identify system requirements that relate to risks, criticality of the system, critical quality characteristics, and compliance with standards and regulations.

– Define verification success criteria for each system requirement, the verification strategy, verification method, and responsible organization for providing proof the system requirements have been met (see Section 2.3.5.9).

Capture the system requirements and their attributes.





Analyze system requirements. – Analyze the system requirements for characteristics of individual requirements and of the set of requirements (can be the set of requirements for the current increment, build, or sprint). Analyze the set of requirements to ensure they are correct, complete, consistent, comprehensible, appropriate to level, and feasible (see the elaboration below and the INCOSE GtWR [2023] for more details).

– Enable technical achievement monitoring through the definition of critical performance measures.

– Review the analyzed requirements with the applicable stakeholders.

– Perform issue resolution for the system requirements. Negotiate changes, amendments, and modifications to resolve inconsistencies, conflicts, and unrealizable or impractical requirements.





Manage system requirements. – Confirm agreement that the system requirements meet the stakeholder needs and requirements.

– Capture key system requirements decisions, rationale, alternatives, and enablers.

– Establish and sustain traceability (system requirements).

– Manage system requirements change.

– Give CM the information items, work products, or other artifacts needed for baselines.





Common approaches and tips.

Identify the enabling systems and materials needed for transition early in the life cycle to allow for the necessary lead time to obtain or access them.



Elaboration

This section elaborates and provides “how-to” information on the System Requirements Definition process. Additional guidance on needs and requirements definition can be found in ISO/IEC/IEEE 29148 (2018), the INCOSE GtWR (2023), the INCOSE GtNR (2022) and the INCOSE NRM (2022).

Stakeholder Requirements versus System Requirements. The set of stakeholder requirements are SoI requirements written from the stakeholders’ perspectives to represent what they require of the SoI in order to meet their needs. The set of system requirements represent the technical perspective of what the SoI must meet during the System Architecture Definition and Design Definition processes that will result in a system that meets the stakeholder needs and stakeholder requirements. Another key distinction is that the focus of the stakeholder requirements is often on high-priority and critical functions, performance, quality, compliance, etc., while the system requirements are more encompassing and detailed including enabling functions, performance, quality, compliance, etc. that will result in the stakeholder requirements to be implemented.

In some cases, the stakeholder requirements can be copied directly into the set of system requirements “as is” and additional requirements added as needed. For smaller, internal projects, the set of stakeholder requirements could be used as the set of system requirements, depending on how much analysis went into the definition of the set of stakeholder requirements such that their implementation will result in the stakeholder needs to be met.

When a set of stakeholder requirements is provided to a supplier by an acquirer, the supplier uses these as inputs to their SE processes to develop the set of system requirements. When defining the system requirements, rather than treating the supplied stakeholder requirements as the only source of requirements, the supplier has an obligation to do an assessment for derived system requirements and as well as requirements from other “non-acquirer” stakeholders. For example, the supplier’s production team needs the product to be manufacturable, their test team needs the product to be testable, the supplier and public need the product to be safe and secure from a cybersecurity perspective, the users and operators need the product to be easy and safe to interface with from a human perspective, and the organization has regulatory compliance considerations. For products to be developed by an outside supplier, the supplier’s company may need the product to conform to a strategic development effort aligning with other products produced, internal standards, and technology maturation. The acquirer may not have included all of these considerations when developing their set of requirements. If the supplier blindly follows only the acquirer supplied requirements specified in their contract, they are likely to generate a SoI that may not work in the integrated system or operational environment, resulting in a system that fails system validation.

Plan for system requirements definition. The System Requirements Definition process should begin with a review of the problem, threat, or opportunity for which the SoI is to address, and the mission, goals, objectives and critical success measures defined by the Business or Mission Analysis process (see Section 2.3.5.1) and the set of stakeholder needs, stakeholder requirements, and life cycle concepts defined by the Stakeholder Needs and Requirement Definition process (see Section 2.3.5.2). For contracted development efforts, mission, goals, objectives, and critical success measures can come from both the acquirer and supplier organizations. Before the System Requirements Definition process, the project team will need to define the strategy to be used to transform the stakeholder needs and stakeholder requirements, define drivers and constraints, assess risks, define, analyze, and mature life cycle concepts, and derive an integrated set of system requirements resulting from these activities.

Requirements Definition. The integrated set of stakeholder requirements is transformed into system requirements to address what the system must do to meet those needs. The transformation process involves additional analysis and further elaboration of the models developed during life cycle concept analysis and maturation. The system requirements must address function, fit, form, quality, and compliance with stakeholder and business needs. System requirements must also address interactions with external systems, users, operators, maintainers, disposers, and the operational environment. SE practitioners collaborate with the stakeholders of the external systems to define each of the interactions and record an agreement of those definitions in some configuration managed form, as well as any constraints or interface requirements (see Section 3.2.4).

Definition of the system requirements is a complex process that includes function and performance analysis; trade studies; constraint evaluation; inclusion of (or reference to) specific requirements from relevant standards and regulations; risk assessment; technology assessment; detailed characterization of the operational environment; detailed assessment of the interactions of the parts that make up the SoI, detailed assessment of the interactions between the SoI and users, operators, maintains, disposers, and external systems; and cost–benefit analysis. System requirements cannot be established without determining their impact (achievability) on lower-level system elements, especially in terms of cost, schedule, and technology. Therefore, system requirements definition is a concurrent, iterative, and recursive balancing process that works both “top-down” (called allocation, derivation, and flow-down) and “bottom-up” (called compliance analysis and flow-up).

The system requirements are inputs to the System Architecture Definition and Design Definition processes, in some domains these requirements are referred to as “design-to” or “design input” requirements. When the requirements are defined, it is important that they are expressed at a level of abstraction that is appropriate to the SoI and systems hierarchy level to which they apply. Although it is good practice to avoid implementation when defining the system requirements, it is not always possible.

In defining system requirements, care should be exercised to ensure each requirement statement is appropriately crafted. The characteristics shown in Table 2.7 should be considered for each individual requirement statement (INCOSE GtWR, 2023). In addition to the characteristics of individual requirement statements, the characteristics shown in Table 2.8 should be considered for requirement sets (INCOSE GtWR, 2023).


TABLE 2.7 Requirement statement characteristics



Requirement Statement Characteristic Definition

Necessary The requirement statement defines a capability, characteristic, constraint, or quality factor needed to satisfy a life cycle concept, need, source, or parent requirement.

Appropriate The specific intent and amount of detail of the requirement statement is appropriate to the level (e.g., the level of abstraction, organization, or system architecture) of the entity to which it refers.

Unambiguous The requirement statement is stated such that the intent is clear and the requirement can be interpreted in only one way by all the intended stakeholders.

Complete The requirement statement sufficiently describes the necessary capability, characteristic, constraint, conditions, or quality factor to meet the need, source, or higher-level requirement from which it was transformed.

Singular The requirement statement states a single capability, characteristic, constraint, or quality factor.

Feasible The requirement statement can be realized within entity constraints (e.g., cost, schedule, technical, legal, ethical, safety) with acceptable risk.

Verifiable The requirement statement is structured and worded such that its realization can be verified to the approving authority’s satisfaction.

Correct The requirement statement is an accurate representation of the need, source, or higher-level requirement from which it was transformed.

Conforming The requirement statement conforms to an approved standard pattern and style guide or standard for writing and managing requirements.

From INCOSE GtWR (2023). Usage per the INCOSE Notices page. All other rights reserved.





TABLE 2.8 Requirement set characteristics



Requirement Set Characteristic Definition

Complete The requirement set for a given SOI should stand alone such that it sufficiently describes the necessary capabilities, characteristics, functionality, performance, drivers, constraints, conditions, interactions, standards, regulations, and/or quality characteristics without requiring other sets of requirements at the appropriate level of abstraction.

Consistent The requirement set contains individual requirements that are unique, do not conflict with or overlap with others in the set, and the units and measurement systems they use are homogeneous. The language used within the sets is consistent (i.e., the same words are used throughout the set to mean the same thing). All terms used within the requirement statements are consistent with the architectural model, project glossary, and project data dictionary.

Feasible The requirement set can be realized within entity constraints (e.g., cost, schedule, technical) with acceptable risk.

Comprehensible The requirement set is written such that it is clear as to what is expected of the entity and its relation to the macro system of which it is a part.

Able to be validated The requirement set will lead to the achievement of the set of needs and higher-level requirements within the constraints (such as cost, schedule, technical, and regulatory compliance) with acceptable risk.

Correct The requirement set is an accurate representation of the needs, sources, or higher-level requirements from which it was transformed.

From INCOSE GtWR (2023). Usage per the INCOSE Notices page. All other rights reserved.





System requirement statements may have a number of attributes attached to them (either as fields in a database or through relationships with other artifacts) shown in Table 2.9. The attributes annotated with an asterisk (“*”) represent a proposed minimum set. See the INCOSE NRM (2022) for the definition and description of these attributes.


TABLE 2.9 Requirement attributes



Attributes to Help Define Needs and Requirement and Their Intent

A1—Rationale*

A2—Trace to Parent*

A3—Trace to Source*

A4—States and Modes

A5—Allocation/Budgeting*

Attributes Associated with System Verification and System Validation

A6—System Verification or System Validation Success Criteria*

A7—System Verification or System Validation Strategy*

A8—System Verification or System Validation Method*

A9—System Verification or System Validation Responsible Organization*

A10—System Verification or System Validation Level

A11—System Verification or System Validation Phase

A12—Condition of Use

A13—System Verification or System Validation Results

A14—System Verification or System Validation Status

Attributes to Help Manage the Requirements

A15—Unique Identifier*

A16—Unique Name

A17—Originator/Author*

A18—Date Requirement Entered

A19—Owner*

A20—Stakeholders

A21—Change Control Board

A22—Change Proposed

A23—Version Number

A24—Approval Date

A25—Date of Last Change

A26—Stability/Volatility

A27—Responsible Person

A28—Need or Requirement Verification Status*

A29—Need or Requirement Validation Status*

A30—Status of the Need or Requirement

A31—Status (of Implementation)

A32—Trace to Interface Definition

A33—Trace to Dependent Peer Requirements*

A34—Priority*

A35—Criticality or Essentiality*

A36—Risk (of Implementation)*

A37—Risk (Mitigation)*

A38—Key Driving Need or Requirement

A39—Additional Comments

A40—Type/Category

Attributes to Show Applicability and Enable Reuse

A41—Applicability

A42—Region

A43—Country

A44—State/Province

A45—Market Segment

A46—Business Unit

Attributes to Aid in Product Line Management

A47—Product Line

A48—Product Line Common Needs and Requirements

A49—Product Line Variant Needs and Requirements

From INCOSE NRM (2022). Usage per the INCOSE Notices page. All other rights reserved.





Allocation, derivation, and flow-down. The next level of the system hierarchy is defined in conjunction with the System Architecture Definition and Design Definition processes. System requirements are allocated to the system elements at the next level of the system hierarchy. Once the allocation has been determined, the system requirements are derived (assigned) for the next system elements at the level of system hierarchy such that the intent of the allocated parent requirement is met.

The System Requirements Definition process is repeated recursively for each level of the system hierarchy until the system elements are to the level of detail needed to be realized via a make (e.g., build, code), buy, or reuse decision. The resulting sets of system requirements for the system elements represent the allocated baseline of the SoI.

Requirements Management. According to ISO/IEC/IEEE 29148, requirements management encompasses those tasks that record and maintain the evolving requirements and associated context and historical information from the requirements engineering activities. Effective requirements management occurs within the context of an organization’s project and Technical Processes. Requirements management also establishes procedures for defining, controlling, and publishing the baseline requirements for all levels of the SoI. The resulting sets of requirements are provided to the Configuration Management process (see Section 2.3.4.5) process for baselining at the appropriate time. The Configuration Management process is used to establish and maintain configuration items and baselines. Requirements management also ensures traceability is established between requirements and other artifacts (see Section 3.2.3), that appropriate requirements reviews occur, and requirements measures are established and used. See also the INCOSE GtNR (2022) and the INCOSE NRM (2022) for further elaboration concerning requirements management.




2.3.5.4 System Architecture Definition Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.4.1] The purpose of the System Architecture Definition process is to generate system architecture alternatives, select one or more alternative(s) that address stakeholder concerns and system requirements, and express this in consistent views and models.



System Architecture Definition process transforms related architectures (e.g., strategic, enterprise, reference, and SoS architectures), organizational and project policies and directives, life cycle concepts and constraints, stakeholder concerns and requirements, and system requirements and constraints into the fundamental concepts and properties of the system and the governing principles for evolution of the system and its related life cycle processes. This process results in a system architecture description for use by the project, its organization, other organizations, and various stakeholders. The Project Management Plan (PMP) and Systems Engineering Management Plan (SEMP) in some cases will provide management directives on how to perform this process, but usually the programmatic view and other related views developed by the System Architecture Definition activities will guide the PMP and the SEMP. The architecture governance activities at the organization level will provide additional direction for the System Architecture Definition process through its issuance of architecture governance directives. Since the directives and stakeholder requirements can evolve throughout the system life cycle, the system architecture description should be treated as a living artifact reflecting both the changing expectations and the evolution of our understanding of what the system solution should be.

Development practices for architecture are specified by ISO 15704 for enterprises and the ISO/IEC/IEEE 42000 series of standards in software, systems, and enterprise fields of application. ISO 15704 specifies terms, concepts, and principles considered necessary to address stakeholder concerns, carry out enterprise creation programs and any incremental change projects required by the enterprise throughout its whole life. ISO/IEC/IEEE 42000 series of standards establishes processes, key principles, and concepts for conceptualization, evaluation, and description of architectures.

Description The System Architecture Definition process provides information and data useful and necessary for identifying and characterizing the fundamental concepts and properties of the system and its elements. These concepts and properties can be fundamentally human-centric, with individual, social, organizational, and political aspects, in human activity systems considering technical elements as enablement assets. The architecture information and data will be implementable through system and system element designs, which satisfy as far as possible the problem or opportunity expressed by models and views for a set of stakeholder and system requirements (traceable to business/mission requirements, as applicable) and life cycle concepts (e.g., Operational, Acquisition, Deployment, Support, and Retirement). During a stage in the system life cycle, the relevant enabling systems and the SoI are considered together as a solution but are distinguished from each other in the overall solution conceptualization.

System architecture definition focuses on achieving associated missions and characterizing the operational concepts of the system and performing market analysis to ensure viability of the SoI. It utilizes architectural principles and concepts to define the high‐level structure of a system and its elements, and the intended properties and characteristics of the SoI. It highlights and supports trade-offs for the other System Definition processes. and possibly Portfolio Management and Project Planning. It incorporates incremental insights obtained about the emergent properties and behaviors of the SoI while achieving a balance for suitability, viability, effectiveness, and affordability. This process is iterative and requires participation of architects, SE practitioners, and specialists in relevant domains, subject matter experts and other stakeholders. The process continues recursively through the levels of the system and its system elements, with consistent feedback to ensure the system design continues to satisfy stakeholder needs and system requirements,

Inputs/Outputs Inputs and outputs for the System Architecture Definition process are listed in Figure 2.42. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.42 IPO diagram for System Architecture Definition process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The System Architecture Definition process includes the following activities:

Prepare for system architecture definition.

Identify and analyze relevant market, industry, stakeholder, organizational, business, operations, mission, legal, and other information and related perspectives that will guide the development of the system architecture.

Identify key milestones and decisions to be informed by the system architecture effort. In particular, identify those key architecture artifacts and resources that guide the system architecture development.

In conjunction with the System Requirements Definition process, determine the system context (i.e., how the SoI fits into the external environment) and system boundary are refined, that reflect operational scenarios and expected system behaviors. This task includes identification of expected interactions of the SoI with system elements, or other systems or entities.

Establish the approach for architecting. This includes an architecture roadmap and strategy, methods, frameworks (see Section 3.2.5), patterns (see Section 3.2.6), modeling techniques, tools, and the need for any enabling systems (see Section 1.3.3), products, or services. The approach should also include the process requirements (e.g., measurement approach and methods), evaluation (e.g., reviews and criteria), and necessary coordination.

Ensure the enabling items (registry, repository, library, competencies), services, resources and capabilities for executing the System Architecture Definition process are available. This includes planning for the need and identifying the requirements for the enabling items.

Establish or identify associated architecture viewpoints and model kinds that facilitate analysis and understanding of the viewpoint. This task includes identifying expected uses and users of architecture information, identifying potential architecture framework(s), capturing rationale for selection of viewpoints, templates, metamodels and model kinds, selecting, modifying and developing relevant methods, techniques, and tools.



Conceptualize the system architecture.

Note: This activity is based on the Architecture Conceptualization process in ISO/IEC/IEEE 42020

Characterize the problem space in conjunction with the BMA process and document it. The report focuses on architecture considerations that span one or more system life cycle stages

In conjunction with the SNRD process, the system context and system boundary are refined, including identification of expected interactions of the SoI with system elements, or other systems or entities. This task includes determination of boundary conditions, quality measures, situation contexts, assumptions, degrees of freedom, constraints, conditions, and challenges.

Define architecture objectives and critical success criteria that will be used to assess the extent to which the problems and opportunities will be addressed.

Based on existing or previous solutions, and problem mitigation strategies, address the highest priority requirements and architecture considerations to synthesize a set of potential solutions. This task includes scanning for relevant technologies, problem patterns, solution patterns, naturally occurring solutions, enhancements to existing systems, heuristics, tactics, and discussion with experts.

For each potential solution, identify strengths, weaknesses, gaps or shortfalls, required trade-offs, consequences, obligations, assumptions, critical success factors affecting critical success criteria and key performance indicators. Devise structural, behavioral, organizational and architectural entities (functions, input/output flows and flow items, states and modes, functional and physical interfaces, nodes and links, computational and communication resources, etc.) to formulate candidate architecture(s). Based on the set of candidate architecture(s), select the best architecture(s) for downstream use by using the Decision Management and Risk Management process. This task includes identifying and characterizing tradeoffs, defining context and scope, determining and mitigating risks, and identifying issues and areas for improvement.

Select, adapt, or develop views and models of the best architecture(s), by capturing concepts, properties, decisions, processes, activities, tasks, characteristics, guidelines, and principles and utilizing architecture viewpoints to develop architecture descriptions. This task includes determining the scope, breadth and depth, use and users of each view and model, and expressing them in the specified form with sufficient level of detail.



Evaluate the system architecture.

Note: This activity is based on the Architecture Evaluation process in ISO/IEC/IEEE 42020.

Determine evaluation objectives and criteria for value assessment and architecture analysis by identifying relevant mandates and imperatives, stakeholders and their concerns, policies and standards, value, and quality characteristics.

Determine evaluation methods and integrate them with evaluation objectives and criteria.

Collect and review evaluation related information including views and models, architecture concepts, properties, metrics and measures, sources of information, accuracy, errors, degrees of uncertainty, and qualification of correctness, completeness, and consistency of gathered information.

Analyze, assess, and characterize architecture(s), by using evaluation methods and criteria, and applying the System Analysis and Measurement processes to produce architecture assessments. Architecture alternatives that are similar to each other or fail to meet identified mandates are eliminated and costs, risks, and opportunities are identified and characterized for appropriate actions.

Formulate, capture, validate, and communicate the findings and recommendations, including implications, to relevant decision makers and stakeholders. The combined overall evaluation can be used to select a preferred system architecture solution.



Elaborate the system architecture.

Note: This activity is based on the Architecture Elaboration process in ISO/IEC/IEEE 42020.

Based on the identified viewpoints, develop architecture models and views that adequately address stakeholder concerns, while, if applicable, conforming to selected architecture frameworks.

Perform preliminary interface definition for interfaces with the level of detail necessary for understanding the architecture for decision making and risk management. The definition includes the internal interfaces between the system elements and the external interfaces with entities outside the system boundary.

Analyze the architecture models and views for consistency and resolve any issues identified. ISO/IEC/IEEE 42010 correspondence rules from frameworks can aid in this analysis. This task includes relating architectural entities to elements of views and models, mapping related entities to relevant architecture and system concepts, properties, and principles, and assessing whether architecture views are consistent with corresponding viewpoints.

In conjunction with the Verification and Validation processes (see Sections 2.3.5.9 and 2.3.5.11), verify and validate the models by execution or simulation, if modeling techniques and tools permit, and with traceability matrix of operational concepts. Where possible, use design tools to check their feasibility and validity. As needed, implement partial mock-ups or prototypes, or use executable architecture prototypes or simulators.

Utilizing models and views, develop architecture descriptions by composing those views and models that adequately cover the uses and users of the architecture descriptions. Assess the architecture description against the intent of the architecture, as well as its suitability, correctness, completeness, and consistency.



Manage results of system architecture definition.

Capture, maintain, and manage the rationale for selections among alternatives and decisions about the architecture, architecture framework(s), viewpoints, model kinds, views, and models. This task includes managing information for decisions, risks, constraints and assumptions and possible governance of upper-level architectures.

Establish the means for the implementation of the directives of the governance of the architecture, including the roles, responsibilities, authorities, and other control functions. Monitor and assess whether governance directives and guidance are being followed.

Establish a means for management of the architecture, including plans, measures, schedules, milestones, and other functional outcomes. Monitor and control the implementation of management instructions, provision of status reports, and corrective actions.

Manage the maintenance and evolution of the architecture, including the architectural entities, their characteristics, and principles. Allocation and traceability matrices are useful to analyze impacts on the architecture.

Manage the architecting effectiveness, including work performance tracking, reviewing, regulating the progress, dealing with management issues, dealing with resource allocation issues, dealing with methods and tools availability, and coordinating review of the architecture to achieve stakeholder agreement.

Maintain bi-directional traceability of the system architecture including traceability between the architectural entities to the requirements, interface definitions, analysis results, related architectures, and stakeholder concerns.

Manage the maintenance, evolution, and use of the architecture descriptions, including the architecture viewpoints, views, and models.



Common approaches and tips.

Define the problem and the solution spaces with regard to the identified stakeholders

Define the main principles governing the whole life cycle processes of a SoI, in the scope of the solution space.

Identify the enabling systems and materials needed for transition early in the life cycle to allow for the necessary lead time to obtain or access them.

Ensure that conflicting interests (e.g., performance vs. quality characteristics, distributed control vs. central control, new technologies vs. COTS) have been properly addressed.

Use the Risk Management process to help ensure that the inherent risks associated with the use of new technologies are adequately assessed.



Elaboration

Architecture Processes ISO/IEC/IEEE 42020 (2019) provides a generic process reference model for architecture processes for enterprise, system, and software levels. The concept of architecture as considered in this standard is applicable for different kinds of entities being architected. It specifies 6 architecture processes for use by organizations and projects. As shown in Figure 2.43, the core architecture processes as outlined in the standard are: Architecture Conceptualization, Architecture Evaluation, and Architecture Elaboration. The Architecture Conceptualization process characterizes the problem space and determines suitable solutions that address stakeholder concerns, achieve architecture objectives, and meet relevant requirements. The Architecture Evaluation process determines the extent to which one or more architectures meet their objectives, address stakeholder concerns, and meet relevant requirements. The Architecture Elaboration process describes or documents an architecture in a sufficiently complete and correct manner for the intended uses of the architecture.




FIGURE 2.43 Core architecture processes. From ISO/IEC/IEEE 42020 (2019). Used with permission. All other rights reserved.





System Architecture The notion of a system is abstract, but it is a practical means to create, design, or redesign products, services, or enterprises. The SoI and the enabling systems that are necessary for development, utilization and support should be considered together in a solution to address a problem or an opportunity. Note that there may be several potential solutions to address the same problem or opportunity. System is represented with sets of interrelated entities―including human in socio-technical systems―achieving one or more stated purposes. These system entities may possess characteristics such as dimensions, environmental resilience, availability, robustness, learnability, execution efficiency, openness, modularity, scalability, and mission effectiveness.

Architecture Description ISO/IEC/IEEE 42010 specifies the normative features of architecture frameworks, architecture description languages, and viewpoints and views as they pertain to architecture description. An architecture description expresses the architecture of a system and is composed of architecture views. A view is an information part comprising portion of an architecture description. It is composed of view components which are derived from models and non-model sources of information. A viewpoint is the set of conventions for the creation, interpretation and use of views to frame one or more concerns of stakeholders and specifies the ways in which the view components should be generated and used. An architecture framework contains standardized viewpoints, view templates, metamodels, model templates, etc. that aid in development of architecture views. An architecture description language contains syntax and semantics intended for describing the architecture and provides a way to create and understand view components.

Architecture Evaluation ISO/IEC/IEEE 42030 provides a generic, conceptual guiding framework that can be used for the planning, execution, and documentation of architecture evaluations. The elements described in this standard can be used to determine architecture value, determine architectural characteristics, validate whether the architecture addresses current and future stakeholder needs with architecture assessment against defined stakeholder acceptance criteria, and also provide inputs to decisions made at the business, operational and tactical levels.

Architecture Considerations Per ISO/IEC/IEEE 42010, Stakeholder concerns, architecture aspects and stakeholder perspectives are kinds of architecture considerations. Architecture frameworks help identify views and viewpoints to characterize the architectures with regard to these considerations.

Kinds of Architecture Entities Architecture is increasingly applied to systems and other entities that are not traditionally considered to be systems, such as enterprises, services, business functions, mission areas, product lines, families of systems, and software items. Corresponding to each of these entities, different kinds of architecture can be considered according to their purpose, domains of application, and roles within entity and architecture life cycles.

System Architecture vs System Design The System Architecture Definition process focuses on the essential concepts, properties’ structure, behaviors, and features that apply to the system solution. It helps gain insights into the relation between the requirements for the system and the emergent properties and behaviors of the system that arise from the interactions and relations between the system elements. The Design Definition process focusses on developing an overall system design that is ultimately sufficiently detailed to allow its realization. An effective architecture is as design-agnostic as possible to allow for maximum flexibility in the design trade space. The Design Definition process provides feedback to the System Architecture Definition process to consolidate or confirm the allocation, partitioning, and alignment of architectural entities to system elements that comprise the system.

Architecting Styles Per (Evans, 2014), Architecting Styles provide a set of proven approaches for those who create, commission, use, and evaluate architecture products. These can help key decision makers to be better informed on the use and limitations of the architecture thereby ensuring that the different architecting activities consistently deliver value. These styles help to understand the architecting approach; architecture objectives; architectural entities; how value is created to make effective architecture-related decisions. The styles are driven by the purpose, culture, or reason for the architecture and reflect currently observed good practices. The four styles of architecting are: authoritative, directive, coordinative, and supportive.

Architecture Styles Per (Garlan, et al., 1994, 1996), an architecture style is a set of design elements or principles or properties or a generic pattern that provides guidance for the System Architecture Definition process. The set helps in identification and classification of architectures. Architecture styles can be understood as language, system of types and as theory. Architecture styles can be defined by architecture views, architectural elements and their relationships, architecture viewpoints, layouts, connections, interfaces, interaction mechanisms, communication factors, and applicable constraints.

Architecture Patterns Per (Bass, et al., 2012), an architecture pattern is a reusable, configurable architectural entity comprising a minimal set of elements that is complete under certain aspects and exhibits rules for instantiation that is applicable for different situations. It solves and delineates certain elements of the system architecture and can be used in many system architecture efforts. It has a fundamental structure of predefined elements and relationships, principles, rules and guidelines. Architecture patterns promote communication, streamline documentation, support high levels of reuse, improve architect’s efficiency and productivity, and provide a starting point for additional ideas.

Value and Quality While the Systems Architecture Definition process creates a framework for addressing stakeholder concerns and requirements; the goal is to deliver value to all stakeholders, which might correlate to quality factors deemed important. It is essential that value is created over the life of the system so that the system remains satisfactorily in use. The perception of what is of value to stakeholder changes over time, and hence it is necessary to account for the different times at which value is being presented or reported. This requires that sources of stakeholder value are determined, system capabilities are defined to produce or influence value, and vulnerabilities that cause value degradation are identified. Per Kumar (2020), value-based approaches helps one to learn and understand the stakeholder’s value system, their principles of behavior, expectations, ideals and belief systems, motivation, and the boundaries within which the stakeholder can be engaged.

Notion of Interface The notion of interface is one of the key items to consider when defining the architecture of a system. The term “interface” comes from Latin words “inter” and “facere” and means “to do something between things.” Therefore, the fundamental aspects of an interface are functional and defined as inputs and outputs of functions. Interoperability is a stakeholder need and requirement, ensuring interfaces use open, well maintained and enduring standards is key to reduce future integration challenges.

Horizontal and vertical integration System Architectures ensure that requirements allocated throughout the system’s design process account for system elements and interfaces as the design matures. The architecture establishes the significant operational and system development interfaces, both internal and external, that must be maintained through development and upgrades. The overall System Architecture is composed of system elements, which are integrated to form the entire system. It is essential to maintain cognizance of the end-to-end system performance expectations when evaluating integration of the system elements, so that those elements continue to perform as needed. When a dynamic relationship exists between one element in the system and another, there is an interdependency. This may involve relationships that are functional or physical in nature, or both. Depending on how tightly coupled these system elements are, the net effect on the system will vary. For example, there is often an interdependency between safety functional hazard conditions and certain function and physical system elements defined in the system architecture.




2.3.5.5 Design Definition Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.5.1] The purpose of the Design Definition process is to provide sufficient detailed data and information about the system and its elements to realize the solution in accordance with the system requirements and architecture.



This process is driven by requirements that have been vetted through the architecture and more detailed analyses of feasibility.

Description The Design Definition process transforms architecture and requirements into a design of the system that can be realized. This process results in sufficiently detailed data and information about the system and its elements to enable implementation consistent with architectural entities defined in models and views of the system architecture, in conformance with applicable system requirements, and in alignment with design guidelines and standards adopted by the organization or project. Often these system elements are identified, and their fundamental concepts and properties are characterized, by the System Architecture Definition process. The design information and data will define the expected properties and characteristics allocated to each system element and enable transition toward their realization.

Inputs and Outputs Inputs and outputs for the Design Definition process are listed in Figure 2.44. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.44 IPO diagram for Design Definition process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Design Definition process includes the following activities:

Prepare for design definition.

Determine design drivers for the system design and an appropriate design strategy and applicable approaches. Personnel (together with human factors), processes, products, and services intended to compose the system are among the many factors that will impact system design. Non-functional considerations and design constraints should be identified as these can also serve as design drivers.

Determine the necessary technologies and the categories of system characteristics to be represented in the design. Capabilities, resources, and services should be identified as these can provide the necessary technologies. Quality models should be identified as these can categorize system characteristics.

Examine the system architecture to determine the fundamental properties and concepts that apply to the system design, along with the principles that should govern the design and its evolution.

Establish the approach for system design effort.

Ensure the necessary system design-enabling elements, services, resources and capabilities are available.



Create the system design.

Identify and assess design alternatives and create a system design using appropriate techniques such as adapting an existing design, composing a design from available system elements, creating a new design, or through a combination of these approaches. Section 3.2.7 briefly explains several design approaches.

Allocate system requirements to system elements so that all the system requirements and architecture objectives are addressed. This task includes transformation of architectural entities and relationships to design elements and transformation of architectural characteristics into design characteristics.

Where necessary, conceive a system design that does not already exist using synthesis techniques, e.g., brainstorming, analogical thinking, or using morphological charts. Synthesis can be applied at multiple levels within a system and focuses upon the solution space and the development of one or more potentially satisfactory design solutions.

Transform architectural entities (e.g., enterprise or project goals, capabilities and effects, operational activities, resource functions) and relationships into design elements. Also transform architectural characteristics into design characteristics (e.g., functionality, behavior, dimensions, shapes, materials, critical quality characteristics, data processing structures).

Analyze the design as part of the design creation activity. A range of analysis techniques can be employed including (1) parametric design to explore within the potential solution space areas for further investigation, and (2) trade-off analysis to achieve balanced system design solutions. Analysis of the design which is systemic in nature (e.g., completeness and consistency analysis) is included in the Systems Analysis process (see Section 2.3.5.6).

Analyze the interfaces that were identified and defined in the system architecture and refine or further define the interfaces to the level required for the design characteristics and interactions between the system elements and with external entities.

Capture the system design expressing it as a work product, termed the system design description, addressing the composition, properties, and characteristics of the system design. Typically, methods, frameworks, diagrammatic forms, notations, and other forms of model are applied to express this work product. The system design description is developed into a specification which can be used to either procure or otherwise realize the system elements which comprise the design.



Evaluate the system design.

Determine the overall suitability and “goodness” of potential design solutions in meeting the identified need or opportunity and in satisfaction of requirements and constraints. The design should be consistent with a governing architecture description.

Analyze further the system design in support of such evaluation, for example to determine particular design properties and characteristics.

Assess the value or worth the design will have for various stakeholders as well as potential negative consequences.

Combine the analyses and assessments into an overall evaluation determination which can serve as the basis for selecting a preferred system design and serve as feedback to the System Architecture Definition process. This design evaluation activity can also provide useful information to the Verification process.



Manage results of design definition.

Establish a means for the management of the system design, including agreement of the design.

Maintain bidirectional traceability of the system design. Track the satisfaction of requirements, constraints, and objectives, as well as between the design characteristics and architecture entities, interfaces, and analysis results.

Capture, maintain, and manage the rationale and supporting information for selections among alternatives and decisions about the design. Maintain the design configuration(s) and, in conjunction with the Configuration Management process, conduct change management.

Manage certification of the design to qualify it as meeting specified quality standards, as applicable (e.g., for critical systems).

Register the design to protect it and its constituent intellectual property, as applicable.

Maintain design integrity during the development and evolution of the system design. A specific responsibility (e.g., a system design authority) is generally assigned to address this issue.

Conduct design reviews to evaluate design progress, suitability, and quality, and record resulting actions and their satisfaction.



Common approaches and tips.

Identify the enabling systems and materials needed for transition early in the life cycle to allow for the necessary lead time to obtain or access them.

It is important to maintain good communication and coordination between the SE practitioners and the various practitioners from other disciplines during the design definition of the system elements, in order to ensure a holistic view as the elements evolve.



Elaboration

System Design versus System Architecture The Design Definition process focusses on developing an overall system design that is ultimately sufficiently detailed to allow its realization. It may be driven from stakeholder concerns, requirements, constraints, business opportunity, mission need, or from the architecture developed by the System Architecture Definition process. On the other hand, the system architecture focuses on the essential concepts, properties, structure, behaviors and features that apply to the system solution, the system design ultimately will capture a description of the proposed system solution which is sufficiently detailed to enable its implementation. System design focuses on system technical considerations such as the solution system elements, their interfaces and characteristics together with technological and other realization considerations such as materials, manufacture, software coding, and operator profiles.

Influence of Design Thinking Design Thinking focuses on design processes and reasoning, together with the resulting design concept and their development, specialization and realization (see Section 3.2.7). It has particular influence upon the creation of the system design. Design Thinking can have as important an influence on system design as Systems Thinking considerations (see Section 1.5) which focus on taking a holistic, systemic view.

Identification of Design Drivers Design drivers, often identified during the System Architecture Definition process, are those factors which should most heavily influence the system design. They may be identifiable from analysis of the business market for the system, operational considerations, through-life considerations, stakeholder requirements and constraints, human factors, technology characteristics and constraints, implementation factors, etc. The set of design drivers applicable to a particular system problem (and solution) determine the overall design approaches that should be employed, the applicable design principles, and the specific specialty considerations which should be employed and integrated into a coherent overall system design.

Usually, the functionality required of a system dominates the design considerations. However, in some situations, the non-functional attributes (e.g., safety, security, performance, dependability) will dominate the Design Definition process, for example, in propulsion systems (e.g., gas turbine engines), and for some kinds of systems (e.g., sensor systems) where quality attributes are key. Furthermore, in socio-technical systems, the relationships between system elements and things in the external world (e.g., financial, legal, social, economic, political), as well as human factors considerations, will often dominate the design of such systems. (For example, see human-centric design).

Design For X (DFX) Design drivers concerning considerations such as testability (DFT) or manufacturability (DFM), for example, are addressed by quality characteristics described further in Section 3.1. These drivers may apply to either the whole or just a part of the system and a commonly employed system design tactic is to concentrate their applicability just to a specific part of the system. The resulting system design elements or influences need to be integrated into an overall balanced, viable, and satisfactory design using holistic design practices.

Different Approaches used for developing a System Design A system design approach may originate from one or more sources:

From requirements and constraints as identified in the Stakeholder Needs and Requirements Definition Process, and System Requirements Definition processes

From the business or mission problem or opportunity and potential solution space characterization as determined by the Business or Mission Analysis process

From the system architecture as defined by the System Architecture Definition process

From the Design Strategy (e.g., maximum reuse).



Assurance of a System Design In certain circumstances, system designs are required with high levels of special characteristics such as integrity or dependability and this is likely to require either the more stringent application of design practices or the usage of specific practices (as part of the create the system design activity) to achieve design characteristics such as overall quality or some specific characteristics such as airworthiness, reliability, safety or security. Some of these characteristics may be externally regulated. Specific organizations (authorities) may have been delegated responsibility for identifying appropriate requirements and determining their satisfaction (often by independent means) by a system design. In addition, certification of the system design (as part of the Verification and Validation processes) may be undertaken to ensure that the system design complies with regulatory design certification requirements. This includes matters such as nuclear power plant operational certification, aircraft airworthiness certification, space launch range safety certification, and consumer product safety and emissions certifications.

Notions and Principles Used within Design The Design Definition process identifies the human activities and material system elements for realizing the system solution. Specialist technical disciplines will need to be harnessed and orchestrated to ensure achievement of a coherent overall solution that meets the specified or identified needs or opportunities. Every technical domain or discipline possesses its peculiar laws, rules, theories, and practices for developing solution parts. Designing an overall system entails identifying where and how specific practices should be employed and integrated. Common and coherent design descriptors should be employed across the system to ensure that overall required system properties are realized and that system elements are capable of interoperation.

Usage of Design Descriptors A design descriptor is the set of (1) design characteristics and (2) their possible values. System design entails the identification and quantification of relevant design descriptors for the system elements composing the system design. These descriptors may be determined through a combination of (1) top-down apportionment and allocation, and (2) bottom-up selection and measurement. Matching system elements together with their specific design descriptors to those of the overall system is a key part of system design.

The following are examples of generic design characteristics that are specifically relevant to SE: – For overall system functional and structural aspects: Quality of service, modularity, openness, scalability, deployability, and degree of automation and autonomy

– For overall system non-functional aspects: Aesthetics, commonality, balance, availability, reliability, affordability, and other relevant QCs (see Section 3.1)





The following are examples of generic design characteristics that are related to other engineering disciplines, but are relevant to SE in ensuring system balance and supporting trade-offs across system elements: – For hardware elements: Weight/mass, power, geometry, volume, vibration, acoustic, and thermal

– For software elements: Correctness, understandability, efficiency, maintainability, flexibility, and consistency

– For data/information: Accuracy, completeness, reliability, relevance, and timeliness





Holistic Design System design starts with the system as a whole consisting of system elements and ends with a definition (i.e., design specification) for each of these system elements and how they are designed to work together as a complete system. The system architecture identifies the system elements, although the architecture description might only identify those elements that are architecturally significant with additional elements becoming evident as a result of more detailed design considerations.

Early Design Validation Techniques such as modeling, simulation, and prototyping can be employed to discover early problems in a system design with respect to stakeholder expectations before significant expenditure in effort and materials. Increasingly these make use of computer-based representations of the system design, including augmented and virtual reality. Such validation techniques can be employed as part of different design process cycles including staged design and as part of an iterative design cycle.

Maintenance of Design Integrity Design integrity concerns the completeness, consistency, and inherent quality characteristics of a system design. An important design responsibility concerns ensuring the integrity of a system design, and subsequently approving, or denying, any decisions concerning the design, its modification, and its implementation. This is important to the acquirer (and therefore also to the supplier) as a system design evolves throughout the Design Definition process, including any evolution following its realization and transition to operation.

Design Evolution The system design matures and evolves over time. Conceptual design focuses on the overall form of the design solution. Preliminary design (sometimes called embodiment) elaborates the system design(s) with more details than provided in the architecture, so that layout, technical, cost, and other realization issues can be addressed. Detailed design progresses the preliminary system design with specification such that the system can be realized unambiguously. Usually, a design continues to evolve for various reasons: to accommodate new technologies, address obsolescence, improve performance and functionality, account for a new threat to its operation and/or integrity, etc. In case the SoI is operated in an SoS environment, there can be continuous design evolution. Consequently, robustness and resilience of the system design need to be considered often and on many levels of the hierarchy. The system architecture can specify principles for evolution of the design. Where possible, features should be included in the design to accommodate change according to the specified architectural principles and design objectives.




2.3.5.6 System Analysis Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.6.1] The purpose of the System Analysis process is to provide a rigorous basis of data and information for technical understanding to aid decision‐making and technical assessments across the life cycle.



Description Analysis is “a detailed examination or study of something so as to determine its nature, structure, or essential features” (Oxford, 2020). System analysis uses models and simulations to assess the utility and integrity of system requirements, architecture, and design across the life cycle. Models are incomplete representations of reality that answer four types of questions: (1) descriptive—what has happened? (2) predictive—what could happen? (3) prescriptive—what should we do? And (4) definitive—how should an entity be defined? (Buede and Miller, 2016, p. 70; Lustig, et al., 2010; Watson IOT, 2017).

System models define quantitative (numerical) and qualitative (categorical) variables to represent system attributes along multiple dimensions that can be categorized according to Figure 2.45. By establishing the relationships among the selected variables, the models represent the emergent features of the system and provide answers to the four types of questions from a holistic perspective. In addition to addressing the complexity of many interacting variables, modeling approaches may be needed to address uncertainty, dynamic behavior, and feedback loops (Howard, 1968). Typical modeling approaches include MBSE with functional, structural, and behavioral modeling (Dennis, et al., 2020); mathematical analysis; probabilistic and statistical modeling; simulation; and other techniques to represent the relationships among the variables and to perform sensitivity analysis of the allowable range of values for the variables across all life cycle stages. In some cases, it may be necessary to employ a mixture of modeling approaches to obtain the necessary insight. For more information on models and simulation, see Section 3.2.1.




FIGURE 2.45 Taxonomy of system analysis dimensions. INCOSE SEH original figure created by Kenley. Usage per the INCOSE Notices page. All other rights reserved.





Inputs and Outputs Inputs and outputs for the System Analysis process are listed in Figure 2.46. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.46 IPO diagram for System Analysis process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The System Analysis process includes the following activities:

Prepare for system analysis. – Establish the strategy/approach for system analysis.

– Identify the situation (problem, opportunity, question, or decision) to be addressed by system analysis.

– Identify the stakeholders and their perspectives for the system analysis.

– Define the scope (including system level), objectives, and level of fidelity of the system analysis.

– Choose analysis methods based on relevant drivers, such as time, cost, fidelity, and criticality.

– Plan for the necessary enabling systems or services needed through the life cycle for system analysis.

– Ensure enabling system or service access needed to support system analysis.

– Identify assumptions and ensure they are valid (correct and consistent).

– Ensure the data and inputs needed for the analysis are collected are timely and trustworthy.

– Establish criteria for trustworthiness of data needed for the analysis.

– Review the data and inputs for quality and validity (i.e., trustworthy data).





Perform system analysis. – Execute the required system analysis using the selected analysis methods.

– Perform uncertainty analysis and sensitivity analysis

– Perform a quality and validity check on the analysis results.

– Interpret the analysis results to develop relevant conclusions and recommendations.

– Capture the system analysis results. This is often done in a system analysis report.





Manage system analysis. – Establish and sustain traceability (system analysis results).

– Give CM the information items, work products, or other artifacts needed for baselines.





Common approaches and tips:

Models can never simulate all the behavior of a system: they operate in limited fields with a restricted number of variables. When a model is used, it is always necessary to make sure that the parameters and data inputs are part of the operation field; if not, irregular outputs are likely.

Models evolve during the project: by modification of parameters, by entering new data, and by the use of new tools.

It is recommended to concurrently use several types of models in order to compare the results and to take into account another characteristic or property of the system.

Results of a simulation shall always be given in their modeling context: tool used, selected assumptions, parameters and data introduced, and variance of the outputs.



Elaboration

System Analysis Relationships to Other System Life Cycle Processes. Some of the SE processes leverage different dimensions of system analysis to answers different questions are as follows:

The Business or Mission Analysis process to analyze and estimate candidate OpsCon and/or candidate business models related to a potential SoI in terms of effectiveness, feasibility, costs, risk preferences, and value preferences that address uncertainty, dynamic behavior, and feedback based on operator or end user behavior (Choi, et al., 2020).

The Stakeholder Needs and Requirements Definition and System Requirements Definition processes to analyze issues relating to conflicts among the set of requirements, in particular those related to functionality, feasibility, performance, and effectiveness, including technical risks, costs, and externally imposed operational conditions and constraints (Beery and Paulo, 2019).

The System Architecture Definition and Design Definition processes to analyze and estimate architectural and design space characteristics of candidate architectures and/or system element, providing information needed to select a design that provides the best value in terms of feasibility, and effectiveness, including technical risks, costs, and critical quality characteristics such as dependability, affordability, maintenance, and human-system interface considerations (Guariniello, et al., 2020).

The Verification and Validation processes to understand and quantify the cost, schedule, information value, and the uncertainty characteristics inherent among the different choices of methods among inspection, analysis (including simulation), demonstration, and test (Salado and Kannan, 2018).

The Project Planning and Project Assessment and Control processes to obtain estimates along with range of uncertainty of system metrics against established targets and thresholds, especially with respect to the technical measures (MOEs, MOPs, and TPMs) (Raz, et al., 2020).



The results of system analyses and estimations are provided to the Decision Management process as data, information, and arguments for selecting the alternatives or candidates that provide the best value to the decision maker(s) based on their value, risk, and time preferences. In some cases, the results may be provided to the Project Assessment and Control process, if the information is needed to monitor the progress of the system or project against its system objectives, performance thresholds, or growth targets.

Cost Analysis. A cost analysis should consider the life cycle costs (LCC), which can be adapted according to the project and the system. The LCC may include labor and non-labor cost items; it may include development, manufacturing, service realization, sales, stakeholder utilization, supply chain, maintenance, and disposal costs (see Section 3.1.2).

Technical Risk Analysis. Technical risks address the operational system as opposed to the project risks, which are concerned with developing the system. The System Analysis process is often needed to perform the technical assessments that provide quantification and understanding of the probability or impact of a potential risk or opportunity (see Section 2.3.4.4).

Effectiveness Analysis. System effectiveness analysis is a term for a broad category of analyses that evaluate the degree or extent to which a system meets one or more criteria in its intended operational environment. The criteria may be derived from desired system characteristics, such as TPMs, MOPs, MOEs, or other attributes of the system (see Section 2.3.4.7). The system analysis assesses the probability the criteria are met and also the degree to which they are met (or fall short or exceed). This information is used to support evaluation of alternatives and trade-offs (such as which candidates to develop further, where improvements are needed or cost savings are possible).




2.3.5.7 Implementation Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.7.1] The purpose of the Implementation process is to realize a specified system element.



The Implementation process creates the system element per that element’s description (concepts, requirements, architecture, design, including interfaces). Note that this process does not only occur during the production stage of the life cycle, but has activities in the other stages to ensure the element can be produced and to prepare for the production stage or other stages. For example: the supporting infrastructure may need to be defined or upgraded in preparation for the activities in a stage.

Description During the Implementation process, engineers follow the requirements allocated and derived to the system element to fabricate, code, or build each individual element outlined in system element descriptions. System element requirements are verified and system element stakeholder requirements are validated. If subsequent configuration audits reveal discrepancies, iterative and recursive interactions occur with predecessor activities or processes, as required, to correct them.

Inputs/Outputs Inputs and outputs for the Implementation process are listed in Figure 2.47. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.47 IPO diagram for Implementation process. IISE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Implementation process activities include the following:

Prepare for implementation. – Define fabrication/coding procedures, tools and equipment to be used, implementation tolerances, and the means and criteria for auditing configuration of the resulting elements.

– Elicit from stakeholders, developers, and teammates any constraints imposed by implementation technology, strategy, or impacted systems. Record the constraints for consideration in the definition of the requirements, architecture, design, and implementation.

– Document the plan for acquiring or gaining access to resources needed during implementation. The planning includes the identification of requirements and interfaces for the enabling system.

– Ensure enabling system or service access, and materials, needed to support implementation.

– Schedule the Implementation process, noting any critical path elements and ensuring that those critical element issues/constraints are addressed and understood by all stakeholders.





Perform implementation. – Realize the system elements per the detailed product, process, and material specifications.

– Produce documented evidence of implementation compliance:

– Complete detailed product, process, material specifications, and system configurations.

– Conduct peer reviews and testing—Inspect and verify software and hardware for correct functionality, hardware functional testing, etc.

– Conduct conformation audits—Compare hardware and software elements to detailed drawings and design artifacts to ensure that each element meets its detailed specifications prior to integration with other elements.

– Prepare initial training capability and draft training documentation—To provide the user community with the ability to operate, conduct failure detection and isolation, conduct contingency scenarios, and maintain the system as appropriate.

– Prepare a hazardous materials log, if applicable.





Manage results of implementation. – Identify and record implementation results. Provide baseline information for configuration management (see Section 2.3.4.5). Maintain the records per organizational policy (see Section 2.2.3.6).

– Record any anomalies encountered during the Implementation process and resolve the anomalies (corrective actions or improvements) using the Quality Assurance process. (see Section 2.3.4.8)

– Establish and sustain traceability of the implemented system elements with the system architecture, design, and system and interface requirements that are needed for implementation (see Section 3.2.3).





Common approaches and tips.

Nearly all implementations have some issues requiring adjustments. Schedule pressures to get the system into operation can lead to lapses in tracking the needed adjustments. To assist consider the following:

Keep the team (e.g., the Integrated Product Development Team (IPDT)) engaged to assist with configuration issues and redesign.

Inspections are a proactive way to build in quality (Gilb and Graham, 1993).

Conduct hardware conformation audits or system element level hardware verification; and ensure sufficient software configuration verification prior to entering the Transition process.

Identify the enabling systems and materials needed for implementation early in the life cycle to allow for the necessary lead time to obtain or access them.



Elaboration

Implementation Concepts. The implementation process typically focuses on the following four forms of system elements:

Hardware—Output includes fabricated or adapted physical elements.

Software—Output includes software code and executable images

Operational resources—Output includes procedures and training.

Services—Output includes specified services. These may be the result of one or more hardware, software, or operational elements resulting in the service.



The Implementation process can support either the creation (fabrication or development) or adaptation of system elements. For system elements that are reused or acquired (such as COTS), the Implementation process allows for adaption of the elements, if necessary, to satisfy the needs of the SoI. This may be accomplished via configuration settings provided within the element (e.g., hardware configuration switches and software configuration tables). Newly created products have more flexibility to be designed and developed to meet the needs of the SoI without modification (but at increased cost).




2.3.5.8 Integration Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.8.1] The purpose of the Integration process is to synthesize a set of system elements into a realized system that satisfies the system requirements.



Description The focus of integration is the combination of system elements (hardware, software, and operational resources) that compose the SoI and verifying the correctness of the static and dynamic aspects of interfaces between, and interaction among, the implemented system elements. Integration also includes proactive activities to address potential integration issues early in the project such as modeling, analysis, simulation, prototyping, and early testing. Integration constraints and objectives are identified and considered during the definition of the system requirements, architecture, and design. The interaction of the Integration process with the system definition processes (i.e., System Requirements Definition, System Architecture Definition, and Design Definition) early in the development stage is essential for avoiding integration issues during the system realization.

The Integration process works closely with the Verification and Validation (V&V) processes. This process is iterated with the V&V processes, as appropriate, and includes an assessment of the integration maturity of elements to be integrated. As the integration of system elements occurs, the Verification process is invoked to check the correct implementation of system requirements, architectural characteristics, and design properties. The Validation process may be invoked to check that the individual system elements meet the stakeholder requirements and provide the function intended. The process checks that all boundaries between system elements have been correctly identified and described, including physical, logical, and human–system interfaces and interactions (physical, functional, sensory, and cognitive), and that all system and system element functional and performance requirements and constraints are satisfied.

Inputs/Outputs Inputs and outputs for the Integration process are listed in Figure 2.48. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.48 IPO diagram for Integration process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Integration process includes the following activities:

Prepare for integration. – Establish checkpoints for the correct implementation of the interfaces as the system elements are progressively aggregated.

– Establish the strategy/approach for integration.

– The strategy identifies risk mitigation approaches and sequences the order and levels for aggregating system elements while considering integration time and cost.

– Identify system constraints and objectives necessary for successful integration to be addressed in the system requirements, architecture, or design such as those for accessibility, safety for integrators, required interfaces for enablers.

– Plan for the necessary enabling systems or services needed to support integration such as integration facilities, training systems, or simulators.

– Ensure enabling system or service access, and materials, needed to support integration.





Perform integration. – Integrate system element configurations until the system is complete.

– Manage interface availability as scheduled and track conformance of the interfaces to their requirements.

– Address any conformance or availability issues.

– Integrate the system elements in accordance with planned sequences.

– Perform check of the interfaces, selected functions, and critical quality characteristics at different integration levels.





Manage results of integration. – Capture the integration results, including any anomalies or other issues identified. This includes anomalies due to the integration strategy, the integration enabling systems, execution of the integration, or incorrect system or element definition.

– Where inconsistencies exist at the interface between the system, its specified operational environment, and any systems that enable the utilization stage the deviations lead to corrective actions or requirement changes. The Project Assessment and Control process (see Section 2.3.4.2) is used to analyze the data to identify the root cause, direct corrective or improvement actions, and to record lessons learned.

– Maintain bidirectional traceability of the integrated system elements and the strategy, plans, and requirements (see Section 3.2.3).

– Give CM the information items, work products, or other artifacts needed for baselines. The Configuration Management process (see Section 2.3.4.5) is used to establish and maintain baselines.





Common approaches and tips:

The integration strategy should account for the schedule of availability of system elements and account for the personnel that will use, operate, maintain, and sustain the system). It should also be consistent with the defect/fault isolation and diagnosis practices.

Development of integration enablers, such as tools and facilities, can take as long as the system itself and should be started early in the project.

The Integration process of complex systems should use flexible approaches and techniques.

Integrate aggregates in order to detect faults more easily. The use of the coupling matrix technique applies for all strategies and especially for the bottom-up integration strategy (see Section 3.2.4).



Elaboration

Integration occurs throughout the project from initial needs identification through utilization and support. The focus of integration evolves as the system evolves from concept definition to system definition to system realization to system deployment and use. As the system progresses, the emphasis of integration changes from its system definition, analysis, modeling, or prototypes to the deployed and operational system integrated into its intended environment, including interfacing systems. Integration should look proactively to mitigate risks and avoid integration issues, or discover them at the earliest point.

Concept of an “Aggregate.” The integration of a system is based on the notion of an “aggregate.” An aggregate is made up of several system elements and their physical and functional interfaces. Each aggregate is characterized by a configuration that specifies the system elements to be integrated and their configuration status. A set of verification actions is applied on each aggregate. To perform these verification actions, a verification configuration that includes the aggregate plus verification enabling systems is constituted. The verification enabling systems can be simulators (simulated system elements), emulators, stubs or caps, scaffolding, activators (launchers, drivers), harnesses, measuring devices, etc.

Integration Strategy and Approaches. The integration of evolving system elements is performed according to a predefined strategy. The strategy relies on the defined physical and functional architectures of the system and the organizational structure developing it. The detailed implementation of the strategy is described in an integration plan that defines the actions to be taken to mitigate integration risks and the configuration of expected aggregates of evolving system elements. It also defines the sequence these aggregates to carry out efficient verification actions and validation actions (e.g., inspections, analyses, demonstrations, or tests). The integration strategy is thus elaborated in coordination with the selected verification strategy and validation strategy (see Sections 2.3.5.9 and 2.3.5.11).

Several possible integration approaches and techniques can be used to define an integration strategy. Any of these may be used individually or in combination. The selection of integration approaches and techniques depends on several factors, in particular the type of system element, delivery time, order of delivery of system elements, risks, constraints, etc. Each integration approach has strengths and weaknesses, which should be considered in the context of the SoI.

Integration of the SoI and enabling systems occurs during development as well as utilization and support. Early in the life cycle, integration is concerned with concepts, requirements, architecture, and design. Approaches include models, analysis, simulations, and prototypes. In later life cycle stages, integration focuses on changes during utilization and support.

There are multiple options for the combination of system elements or aggregation of completed system elements or aggregates. Some common integration techniques are:

Global (or Big Bang) integration—The simplest approach for low-risk, complicated, or simple systems is integration of the entire SoI. While the process is simplified, any issues or interface problems are difficult to find and resolve.

Bottom-up integration—A common approach follows the reverse order of decomposition from lowest system element through levels of the architecture to the final system. Problems can be found at lower levels and more easily isolated to specific system elements. System level issues may not be discovered until late in the process.

Top-down integration—This is a common variation of incremental integration (see below) that starts with the system elements that most closely reflect overall system performance with peripheral elements simulated and integrated later. The purpose is to detect system level issues, particularly with external interfaces, early.

Incremental integration—In a predefined order, one or a small number of system elements are added to an already integrated increment of system elements. It can also include a portion of the system being integrated into a predefined increment. This approach can be effective for incremental and evolutionary development (see Section 2.2). For agile development, the order can be defined by features.

Subset integration—System elements are assembled by subsets, and then subsets are assembled together. Subsets can be defined by functional chains or threads to perform specific tasks.

Criterion‐driven integration—The most critical system elements compared to the selected criterion are first integrated (e.g., dependability, complexity, technological innovation). The criteria are generally related to risks. This technique allows early integration and verification of intensively critical system elements.

Integration “with the stream”—The delivered system elements are assembled as they become available.

Model-based integration—The system elements are modeled physically or functionally and integrated in the model environment. Actual system elements can be inserted into the model environment as they developed.



Throughout the project, the integration strategy addresses management approaches to address risks such as communications issues. These include use of Integrated Product Teams (IPTs), Interface Control Working Groups (ICWGs), Systems Engineering Integration Teams (SEITs), or Technical Performance Measures (TPMs).

Horizontal & Vertical Integration. The Integration process needs to address the wide range of integration perspectives that apply across the life cycle. Horizontal integration typically refers to activities that are performed across elements that appear in a common hierarchy level of the system architecture. Structural aspects may be system elements that collectively constitute a system. Behavioral aspects include the sequence of discrete behaviors that together describe system functionality. Vertical integration typically refers to activities that are performed to help ensure that system elements at a given system hierarchy level are consistent with, and satisfy the expectations of, the system or higher-level system elements. The recursive nature of SE highlights how integration features span the levels of the system structure (see Section 2.3.1.2). As there is new information or learning on one level of the system structure, it is shared with both higher and lower levels. Other integration “directions” span additional viewpoints and stakeholder concerns, such as those relating to temporal or functional considerations, application of standards, satisfaction of regulatory expectations, or operational conditions and environments. Integration can also be viewed in relationship to the requirements concepts of horizontal traceability among parallel elements in the architecture and vertical traceability between system hierarchy levels (see Section 3.2.3).




2.3.5.9 Verification Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.9.1] The purpose of the Verification process is to provide objective evidence that a system, system element, or artifact fulfils its specified requirements and characteristics.



Description The Verification process can be applied to any engineering artifact, entity, or information item that has contributed to the definition and realization of the SoI (e.g., verification of stakeholder needs, stakeholder requirements, system requirements, models, simulations, the system architecture, design characteristics, verification procedures, or a realized system or system element). The Verification process provides objective evidence with an acceptable degree of confidence to confirm:

The artifact or entity has been made “right” according to its specified requirements and characteristics,

No anomaly (error/defect/fault) has been introduced at the time of any transformation of inputs into outputs.

The selected verification strategy, method, and procedures will yield appropriate evidence that if an anomaly were introduced, it would be detected.



As is often stated, verification is intended to ensure that “the artifact or entity has been built right,” while validation is intended to ensure that “the right artifact or entity will be or was built.”

Inputs/Outputs Inputs and outputs for the Verification process are listed in Figure 2.49. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.49 IPO diagram for Verification process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Verification process includes the following activities:

Prepare for verification. – Define the scope (what will be verified) and the verification actions (strategy, method, and success criteria). Verification activities consume resources: time, labor, facilities, and funds. The scope of the organization’s verification strategy/approach should be documented within the project’s SEMP and system integration, verification, and validation plans. Establish a list of entities to be verified, including stakeholder needs, stakeholder requirements, system requirements, system architecture, prototypes, models, simulations, the system design, design characteristics, the system elements within the SoI architecture, and the integrated SoI itself.

Identify the specified requirements against which each entity will be verified.





– Consider and capture constraints that could impact the feasibility or effectiveness of verification actions. The constraints could impact the implementation of the verification actions and include contractual constraints, limitations due to regulatory requirements, cost, schedule, feasibility to exercise a function, safety and security considerations, the laws of physics, physical configurations, accessibility, etc.

– For each verification action, select one or more verification methods and associated success criteria. Verification methods include inspection, analysis, demonstration, and test (each of these methods are defined later in this section). The success criteria define what the verification actions must do that will result in sufficient objective evidence to show that the entity has fulfilled the requirement(s) against which it was verified against.

– Establish the strategy/approach for verification, including trade-offs between scope and constraints. The verification strategy includes the method that will result in objective evidence that the verification success criteria has been met with an acceptable degree of confidence. Define verification activities. For each verification instance, define a specific verification action that will result in objective evidence needed to verify the SoI meets one or more requirements per the defined verification strategy.

Define verification procedure requirements for each verification action. The verification procedure requirements are requirements that will drive the formulation of steps and actions for a given verification procedure.





– Identify constraints and objectives from the verification strategy to be incorporated within the sets of system requirements, architecture, and design. These requirements are needed to support the defined strategy.

– Plan for the necessary enabling systems or services needed through the life cycle for verification. Enabling systems include organizational support, verification equipment, simulators, emulators, test beds, test automation tools, facilities, etc.

– Ensure enabling system or service access needed to support verification. This includes confirming everything required for the verification activities will be available, when needed and have passed their own verification and validation. The acquisition of the enablers can be done through several ways such as rental, procurement, development, reuse, and subcontracting.





Perform verification. – Define the procedures for the verification actions. A procedure can support one action or a set of actions.

– Execute the verification procedures for planned verification actions.

– Schedule the execution of verification procedures. Each scheduled verification event represents a commitment of personnel, time, resources, and equipment that would ideally show up on a project’s schedule.

– Ensure readiness to conduct the verification procedures: availability and configuration status of the system/entity, the availability of the verification enablers, qualified personnel or operators, resources, etc.





Manage results of verification. – Record the verification results and any defects identified. Maintain the results in verification reports and records per organizational policy as well as contractual and regulatory requirements.

– Analyze the verification results against the verification success criteria to determine whether the entity being verified meets those criteria with an acceptable degree of confidence.

– Throughout verification, capture operational incidents and problems and track them until final resolution. Problem resolution and any subsequent changes will be handled through the Project Assessment and Control process (see Section 2.3.4.2) and the Configuration Management process (see Section 2.3.4.5). Any changes to the SoI definition (e.g., stakeholder needs, stakeholder requirements, system requirements, system architecture, system design, design characteristics, or interfaces) and associated engineering artifacts are performed within other Technical Processes.

– Obtain agreement from the approval authority that the verification criteria have been met to their satisfaction. Combine the individual verification records into a verification approval package for the entity being verified and submit to the verification approval authority. The verification approval authority is the party authorized to determine whether sufficient evidence has been provided to show that the entity has passed verification with an acceptable degree of confidence.

– Establish and sustain traceability (verification). Establish and maintain bidirectional traceability of the verified entity and verification artifacts with the system architecture and design characteristics or requirements against which the entity is being verified.

– Give CM the information items, work products, or other artifacts needed for baselines. The Configuration Management process (see Section 2.3.4.5) is used to establish and maintain baselines. The Verification process identifies candidates for baseline and provides the items to the Configuration Management process.





Common approaches and tips.

Identify the enabling systems and materials needed for verification early in the life cycle to allow for the necessary lead time to obtain or access them.

Avoid conducting verification only late in the schedule or reducing the number of verification activities due to budget or schedule issues, since discrepancies and errors are more costly to correct later in the system life cycle.

Review requirements as they are defined to ensure that the entities to which they apply can be verified against those requirements.



Elaboration

This section elaborates and provides “how-to” information on the Verification process. Additional guidance on verification can be found in the INCOSE NRM (2022) and INCOSE GtVV (2022).

Verification Planning. Planning for verification should begin when the system requirements are being defined. As the system requirements are defined, it is recommended to define the verification success criteria, method, and strategy and obtain acquirer and approval authority approval. Early planning helps drive cost and schedule estimates of the verification plan earlier in the project—maximizing the chance the full verification plan will be resourced.

Reduction of Verification Activities and Risk. If verification activities must be reduced due to cost and schedule concerns or other constraints, this should be done using a risk-based approach. The SE practitioner is urged to resist the temptation to blindly reduce the number of, or the costliest, verification activities due to budget or schedule concerns. Gaps and misses are more costly and time consuming to correct later in the life cycle—especially when these gaps show up at the integrated SoI level from reduced system element verification. If additional resources become available that allow an opportunity to verify to additional depth, the project should do so to reduce risk and increase the degree of confidence.

Notion of a Verification Action. A verification action describes verification in terms of an entity, the reference item against which the entity will be verified (e.g., a requirement, design characteristic, or standard), the expected result (success criteria deduced from the reference item the entity is being verified against), the verification strategy and method to be used, and on which level of integration of the system (e.g., system, system element). The performance of a verification action onto the submitted entity provides an obtained result which is compared with the expected result as defined by the verification success criteria. The comparison enables the determination of the acceptable conformance of the entity to the reference item with some degree of confidence. Figure 2.50 illustrates several common verification actions.




FIGURE 2.50 Verification per level. INCOSE SEH original figure created by Walden from Faisandier. Usage per the INCOSE Notices page. All other rights reserved.





Examples of verification actions include:

Verification of a stakeholder requirement (requirement verification)—(1) Verify the stakeholder requirement statement correctly transforms the source or stakeholder need from which it was transformed or derived and (2) verify the stakeholder requirement satisfies the characteristics of good requirement statements (see Section 2.3.5.3).

Verification of a system requirement (requirement verification)—(1) Verify the system requirement statement correctly transforms the source, stakeholder requirement, or parent from which it was transformed or derived and (2) verify the system requirement satisfies the characteristics of good requirement statements (see Section 2.3.5.3)

Verification of a model or simulation (model or simulation verification)—(1) Verify that the model/simulation meets its requirements consistent with its intended purpose, (2) verify the model/simulation against syntactic and grammatical rules, characteristics, and standards defined for the type of model/simulation, and (3) verify the correct application of the appropriate patterns and heuristics used and the correct usage of modeling/simulation techniques or methods as defined by the organization’s guidelines and requirements concerning model/simulation development and use.

Verification of the system architecture (architecture verification)—(1) Verify that the SoI architecture, when realized by design, will result in a SoI that will pass system verification and (2) verify the correct application of the appropriate patterns and heuristics used and the correct usage of architecture definition techniques or methods as defined by the organization’s guidelines and requirements concerning system architecture definition.

Verification of the system design (design verification)—(1) Verify that the SoI design and associated design characteristics meets its system requirements and would result in a SoI that will pass system verification with an acceptable degree of confidence and (2) verify the correct usage of patterns, trade rules, or state of the art related to the concerned technology (e.g., software, mechanics, electronics, biology, chemistry) as defined by the organization’s guidelines and requirements concerning system design.

Verification of a realized system (product, service, or enterprise) or system element (system verification)—Verify the system or system element meets its system requirements and design characteristics with an acceptable degree of confidence.



Verification Methods. Basic verification methods are as follows (ISO/IEC/IEEE 29148, 2018):

Inspection . An examination of the item against visual or other evidence to confirm compliance with requirements. Inspection is used to verify properties best determined by examination and observation (paint color, weight, etc.). Inspection is generally non-destructive and typically includes the use of sight, hearing, smell, touch and taste; simple physical manipulation; mechanical and electrical gauging; and measurement.

Analysis (including modeling and simulation). Use of analytical data or simulations under defined conditions to show theoretical compliance. Used where testing to realistic conditions cannot be achieved or is not cost-effective. Analysis (including simulation) may be used when such means establish that the appropriate requirement is met by the proposed solution. Analysis may also be based on “similarity” by reviewing a similar system or system element’s prior verification and confirming that its verification status can legitimately be transferred to the present system or system element. Similarity can only be used if the systems or system elements are similar in design, manufacture, and use; equivalent or more stringent verification specifications were used for the similar system or system element; and the intended operational environment is identical to or less rigorous than the similar system or system element.

Demonstration . A qualitative exhibition of functional performance, usually accomplished with no or minimal instrumentation or test equipment. Demonstration uses a set of test activities with system stimuli selected by the supplier to show that system or system element response to stimuli is suitable or to show that operators can perform their allocated functions when using the system. Often, observations are made and compared with predetermined responses.

Test . An action by which the operability, supportability, or performance capability of an item is quantitatively verified when subjected to controlled conditions that are real or simulated. These verifications often use special equipment or instrumentation to obtain accurate quantitative data for analysis to determine verification.



Verification per Level. The SoI may have a number of hierarchical layers of system elements within its architecture. The planning of the verification is done recursively at each lower level as the definition of the system or a system element evolves. The execution of the verification actions occurs recursively for each layer as the elements are integrated as shown in Figure 2.50. For example, the stakeholder requirements are verified to ensure they meet their higher-level requirements, the system and system element requirements are verified to ensure they meet their higher-level system requirements and the system architecture and design are verified to ensure they meet their system or system element requirements. Additionally, every layer of realized systems and system elements are verified to ensure they meet their system requirements before being integrated into the next higher level of the SoI architecture. Any issues or discrepancies must be corrected before a system element is integrated into the next higher level of the SoI. Having passed verification at a given level, that set of elements are integrated into the next higher-level system as defined in the Integration process (see Section 2.3.5.8). System integration, system verification, and system validation continues until the integrated SoI has passed system verification.

Early Verification and MBSE. With the increased use of models and simulations as part of the design process, verification activities can be conducted earlier in the life cycle prior to implementation. Doing so will reduce the risk of issues and anomalies being discovered during system integration, system verification, and system validation activities with the actual physical hardware, mechanisms, and software and reduce the resulting expensive and time-consuming rework.

However, the SE practitioner is cautioned to resist substituting verification of the realized system with the verification results obtained using models and simulations, unless necessary. Doing so reduces the confidence level (as compared to verification against the actual realized system) and adds risk of the realized system failing system validation. As long as the realized system is not completely integrated and/or has not been validated to operate in the actual operational environment by the intended users, no result must be regarded as definitive until the acceptable degree of confidence is realized.

Managing the project’s system verification program. In the progress of the project, it is important to know, at any time, the status of the verification activities, anomalies discovered, and noncompliances. This knowledge enables the project to better manage the budget and schedule as well as estimate the risks of noncompliance against the possibly of eliminating some of the planned verification actions to meet budget and schedule constraints.




2.3.5.10 Transition Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.10.1] The purpose of the Transition process is to establish a capability for a system to provide services specified by stakeholder requirements in the operational environment.



Description

The Transition process installs a SoI into its operational and maintenance environment. This process makes the SoI an integral part of the acquiring organization systems, business processes, and capabilities so the organization starts to benefit from using and sustaining the system’s services.

The Transition process coordinates with verification and validation performed in the target environment, with the activities of operation and maintenance of new systems and services, and with the disposal of systems, system elements, materials, and services no longer needed for operation.

Transition may identify system requirements and design gaps. It may also drive changes, augmenting the initial stakeholder and system requirements.

Inputs/Outputs Inputs and outputs for the Transition process are listed in Figure 2.51. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.51 IPO diagram for Transition process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Transition process includes the following activities:

Prepare for the Transition. – Analyze the intended environment for the system deployment, including the physical sites, information technology infrastructure, organizational structure, and processes of the receiving organization.

– Identify the changes to the existing environment to accommodate the system.

– Identify and obtain (e.g., procure, develop, reuse, rent, schedule, subcontract) the requisite enabling systems, controls, products, or services required for the transition, including the changes in the environment.

– Plan for coordinating the development of the SoI with the modifications of its intended environment.

– Determine the transition team structure, composition, and responsibilities for the transition activities.

– Plan for the system’s transition, including allocating time and budget for all parts of the transition.

– Plan for mitigation strategies if the transition if the system encounters difficulties. Ensure that stakeholders understand the process/risk of possible downtime of the system and even actions to restore the predecessor system (roll-back) and the “point-of-no-return.”

– Plan the configuration management of the system’s adaptation to the local operation and support context.

– Develop procedures for system deployment and service activation, incremental and staged if appropriate.

– Develop procedures to validate the system and services at all relevant sites, either physical or virtual.

– Staff, organize, and train collaborative transition teams.





Perform the Transition. – Deploy the system to operation, support, and maintenance sites.

– Invoke integration and verification processes to realize operable local system configurations.

– Establish systems, processes, and organizational capabilities for ongoing adaptation of the system to evolving context, including capabilities for integration with other systems, deployment to other sites, performance monitoring, and problem detection, investigation, and correction.

– Train the operation, maintenance, and other personnel. As applicable, perform complete review and hand-off of the operator, maintenance, and support manuals. Affirm that the personnel have the knowledge and skill levels necessary to operate, maintain, and support the system.

– Provide as-built information for configuration management.

– Activate/commission the system’s services at each site. Ensure that the system delivers its intended services as expected, including collaboration with other systems and personnel.

– Receive final confirmation that the installed system can provide its required functions and be sustained. Assure that the system has been properly installed and verified and all issues and action items have been resolved. Assure that all agreements about developing and delivering a fully supportable system have been fully satisfied or adjudicated.

– Perform or support contractual acceptance of the system by the acquirer, followed by transfer of control, responsibility, ownership, and custody.





Manage results of Transition. – Capture incidents, problems, and anomalies. Investigate and document issues. Perform corrective actions as needed. Use the Quality Assurance process for managing incidents and problem resolution. If the transition is to multiple sites using a phased approach, ensure that any corrective actions are incorporated into the transition approach.

– Use the experience gained in the current transition instances for improving future instances.

– Maintain bidirectional traceability of the transitioned system elements, system services, and operational capabilities with the architecture, design, and system requirements. Initiate changes as needed.





Common approaches and tips.

Identify the enabling systems and materials needed for transition early in the life cycle to allow for the necessary lead time to obtain or access them.



Elaboration

Transition Concepts. The Transition process is not limited to the SoI going into service as a part of the operating organization. Each system element undergoes transition during its integration into a larger element, and the element’s transition must be formalized in the agreements between key stakeholders, such as prime contractors and its subcontractors.

The Transition process coordinates the system or system element deployment and activation with the modification of its environment. It pays particular attention to integrating the SoI and other systems in its environment. The Transition process should be fully integrated with an organizational change process led by the receiving organization, usually incremental and staged.

The Transition process comprises all activities required to establish the capability for a system to provide services for the benefit of the organization acquiring the system. The transition transfers the system from the development context (“system-in-the-lab“) to the utilization context (”system-in-the field”). Successful transition typically marks the beginning of the SoI or system element’s utilization stage.

Transition Considerations. The transition of new systems to a newly created organization (or a new element into a new system) differs from transitioning a new system or element into an existing organization or system. The former is sometimes referred to as “greenfield” or “clean sheet” transitioning, and the latter as “brownfield” or “legacy systems” (see Sections 4.3.1 and 4.3.2). The introduction of the new element disrupts the existing environment, so considerable effort must be invested to transition to the “new norm.”

A phase of provisional operation (also referred to as “burn-in”) is sometimes included in the transition activities, allowing operations to get used to the new system before acceptance, resulting in concurrent and iterative application of the Transition and Operation processes. Burn-in involves activities taken to operate a system element in the operational or simulated environment to detect failures and improve reliability. Usually, the operation of the system is done at levels that would cover or exceed the range of expected environmental values (heat, vibration, power, etc.). The warranty period may delay the transfer of responsibility for the system maintenance, resulting in concurrency and iteration between the Transition and Maintenance Processes.




2.3.5.11 Validation Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.11.1] The purpose of the Validation process is to provide objective evidence that the system, when in use, fulfills its business or mission objectives and stakeholder needs and requirements, achieving its intended use in its intended operational environment.



Description The Validation process can be applied to any engineering artifact, entity, or information item that has contributed to the definition and realization of the SoI (e.g., validation of stakeholder needs, stakeholder requirements, system requirements, models, simulations, the system architecture, design characteristics, validation procedures, or a realized system or system element). The Validation process provides objective evidence with an acceptable degree of confidence to confirm:

1. The “right” artifact or entity has been made according to the stakeholder needs and stakeholder requirements.

2. Whether or not these artifacts, entities, or information items, will result in the right SoI, when realized, that can be validated to accomplish its intended use in its operational environment when operated by its intended users.

3. The system does not enable unintended users to negatively impact the intended use of the system or use the system in an unintended way.



As is often stated, validation is intended to ensure that “the right artifact or entity will be or was built,” while verification is intended to ensure that “the artifact or entity has been built right.”

Inputs/Outputs Inputs and outputs for the Validation process are listed in Figure 2.52. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.52 IPO diagram for Validation process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Validation process includes the following activities:

Prepare for validation. – Define the scope (what will be validated) and the validation actions (strategy, method, and success criteria). Validation activities consume resources: time, labor, facilities, and funds. The scope of the organization’s validation strategy/approach should be documented within the project’s SEMP and system integration, verification, and validation plans. Establish a list of artifacts, entities, or information items to be validated.

Identify the stakeholder needs and stakeholder requirements against which each entity will be validated.





– Consider and capture constraints that could impact the feasibility or effectiveness of validation actions. The constraints could impact the implementation of the validation actions and include contractual constraints, limitations due to regulatory requirements, cost, schedule, feasibility to exercise a function, safety and security considerations, the laws of physics, physical configurations, accessibility, etc.

– For each validation action, select one or more validation methods and associated success criteria. Validation methods are similar to the methods defined for verification (inspection, analysis, demonstration, or test) (see Section 2.3.5.9). The success criteria define what the validation actions must do that will result in sufficient objective evidence to show that the entity has fulfilled the need(s) or requirement(s) against which it was validated against, achieving its intended use in its intended operational environment by its intended users.

– Establish the strategy/approach for validation, including trade-offs between scope and constraints. The validation strategy includes the method that will result in objective evidence that the validation success criteria have been met with an acceptable degree of confidence. Significant collaboration is necessary with the stakeholders and approval authority to ensure there is agreement on what is necessary to accept the validation results. Define validation activities. For each validation instance, define a specific validation action that will result in objective evidence needed to validate the SoI meets one or more stakeholder needs or stakeholder requirements per the defined validation strategy.

Define validation procedure requirements for each validation action. The validation procedure requirements are requirements that will drive the formulation of steps and actions for a given validation procedure.





– Identify constraints and objectives from the validation strategy to be incorporated within the sets of stakeholder needs and requirements and the system requirements transformed from them.

– Plan for the necessary enabling systems or services needed through the life cycle for validation. Enabling systems include organizational support, validation equipment, simulators, emulators, test beds, test automation tools, facilities, etc.

– Ensure enabling system or service access needed to support validation. This includes confirming everything required for the validation activities will be available, when needed. The acquisition of the enablers can be done through several ways such as rental, procurement, development, reuse, and subcontracting.





Perform validation. – Define the procedures for the validation actions. A procedure can support one action or a set of actions.

– Execute the validation procedures for planned validation actions. Schedule the execution of validation procedures. Each scheduled validation event represents a commitment of personnel, time, resources, and equipment that would ideally show up on a project’s schedule. At the integrated SoI level, this should be done against the actual SoI in the operational environment or one as close to it as possible, by the intended users or equivalent surrogates.

Ensure readiness to conduct the validation procedure: availability and configuration status of the system/entity, the availability of the validation enablers, qualified personnel or operators, resources, etc. At the integrated SoI level, since it often depends on customer and intended user involvement, this can be particularly important to plan out in advance to be sure the right individuals are present.





– Manage results of validation. – Record the validation results and any defects identified. Maintain the results in validation reports and records per organizational policy as well as contractual and regulatory requirements. Analyze the validation results against the validation success criteria to determine whether the entity being validated meets those criteria with an acceptable degree of confidence.





– Throughout validation, capture operational incidents and problems and track them until final resolution. Problem resolution and any subsequent changes will be handled through the Project Assessment and Control process (see Section 2.3.4.2) and the Configuration Management process (see Section 2.3.4.5). Any changes to the SoI definition (e.g., stakeholder needs, stakeholder requirements, system requirements, system architecture, system design, design characteristics, or interfaces) and associated engineering artifacts are performed within other Technical Processes

– Obtain agreement from the approval authority that the validation criteria have been met to their satisfaction. Combine the individual validation records into a validation approval package for the entity being validated and submit to the validation approval authority. The validation approval authority is the party authorized to determine whether sufficient evidence has been provided to show that the entity has passed validation with an acceptable degree of confidence.

– At the integrated SoI level, validation may be performed with or by the acquirer as defined in the supplier agreement. However, at lower levels in the architecture, validation may be performed by the supplier without acquirer direct involvement.

– Establish and sustain traceability (validation). Establish and maintain bidirectional traceability of the validated entity and validation artifacts with the system architecture, system design, models, and the stakeholder needs and stakeholder requirements against which the entity is being validated.

– Give CM the information items, work products, or other artifacts needed for baselines. The Configuration Management process (see Section 2.3.4.5) is used to establish and maintain configuration items and baselines. The validation process identifies candidates for baseline, and then provides the items to the Configuration Management process.





Common approaches and tips.

Identify the enabling systems and materials needed for validation early in the life cycle to allow for the necessary lead time to obtain or access them.

Validation also reveals the effects the SoI may have on enabling, interfacing, and interoperating systems. Validation actions and analysis should include these system interactions in the scope.

Involve the broadest range of stakeholders that is practical, including end users and operators,

Validation should include actions that provide insight as early as possible, such as analysis, modeling, and simulation of anticipated operational characteristics and system behavior.

Start to develop the validation planning as the OpsCon, operational scenarios, stakeholder needs, and stakeholder requirements are defined. Early consideration of the potential validation actions and methods helps to anticipate constraints, costs, and necessary enablers, as well as start the acquisition of those enablers.

Validation actions during the Business or Mission Analysis process (see Section 2.3.5.1) include assessment of the OpsCon through operational scenarios that exercise all system operational modes and demonstrating system-level performance.



Elaboration

This section elaborates and provides “how-to” information on the Validation process. Additional guidance on validation can be found in the INCOSE NRM (2022) and INCOSE GtVV (2022).

General Considerations. The stakeholder needs and stakeholder requirements the SoI is being validated against are derived from the mission statement, goals, objectives, critical measures, constraints, risks, and set of life cycle concepts for the SoI defined by the organization or acquirer during the Stakeholder Needs and Requirements Definition and System Requirements Definition processes (see Sections 2.3.5.2 and 2.3.5.3). The life cycle concepts include scenarios and use cases that are performed in a specific operational environment by the intended users for not only operation, but during other life cycle stages including production, operation, support, and retirement. It is common for these scenarios and use cases to be exercised during the conduct of the validation procedures within the operational environment with the intended users. The common saying “test as you fly, fly as you test” applies. When using scenarios and use cases, in addition to nominal operations, it is important to also address off-nominal, alternate cases, misuse cases, and loss scenarios. A positive validation result obtained in a given environment by specific users can turn noncompliant if the environment or class of users change. These changes may not be immediately known by the developer; however, changing stakeholder needs and stakeholder requirements should be accommodated by the acquirer and developer’s SE processes.

During validation, especially for walkthroughs and similar activities, it is highly recommended to involve intended users/operators. Validation will often involve going back directly to the users to have them perform an acceptance test under their own local operational conditions in the intended operational environment. When the system is validated at a supplier facility or organization, the acquirer will often want to conduct additional validation activities in their own facility, in the intended operational environment, and with the intended users. The stakeholders who were involved in defining the life cycle concepts and needs must be presented with the results of the validation activities to ensure their needs and requirements have been met.

Validation Planning. Planning for validation should begin when the stakeholder needs and stakeholder requirements are being defined. As they are defined, it is recommended to define the validation success criteria, method, and strategy and obtain acquirer and approval authority approval. Early planning helps drive cost and schedule estimates of the system validation plan earlier in the project—maximizing the chance the full system validation plan will be resourced.

Reduction of Validation Activities and Risk. If validation activities must be reduced due to cost and schedule concerns, this should be done using a risk-based approach. The SE practitioner is urged to resist the temptation to blindly reduce the number of, or the costliest, validation activities due to budget or schedule concerns. Gaps and misses are more costly and time consuming to correct later in the life cycle—especially when these gaps show up at final system acceptance by the acquirer or regulatory agency. If additional resources become available that allow an opportunity to validate lower-risk, non-critical stakeholder needs and stakeholder requirements, the project should do so to reduce risk and increase the degree of confidence.

Notion of a Validation Action. Validation actions are similar to verification actions, and the reader is referred to the Verification process (see Section 2.3.5.9) for background. Figure 2.53 illustrates several common validation actions.




FIGURE 2.53 Validation per level. INCOSE SEH original figure created by Walden from Faisandier. Usage per the INCOSE Notices page. All other rights reserved.





Examples of validation actions include:

Validation of a stakeholder requirement (requirement validation)—Validate that the stakeholder requirement is the right requirement and clearly and accurately communicates the need of the stakeholder, is in the stakeholder’s language, and is actionable (i.e., can be transformed into one or more system requirements). For stakeholder requirements and sets of stakeholder requirements ask, “If a SoI were built to these requirements, would the SoI meet the needs from which these requirements were transformed?”

Validation of a system requirement (requirement validation)—Validate that the system requirement is the right requirement and clearly and accurately communicates the need and requirement of the stakeholder, is expressed in technical terms, and is actionable (i.e., can be transformed into a system architecture and design). For system requirements and sets of system requirements ask, “If a SoI were built to the system architecture and design transformed from these requirements, would the SoI meet the intent of the requirements from which the architecture and design were transformed?”

Validation of a model or simulation (model or simulation validation)—(1) Validate that the model/simulation accurately reflects the intended behavior of the entity it represents in its operational environment when operated by the intended users and (2) validate that the model/simulation meets the intended purpose for which it was developed.

Validation of the system architecture (architecture validation)—Validate that the architecture is the right architecture that will result in a design for the SoI that will meet the stakeholder needs and stakeholder requirements.

Validation of the system design (design validation)—Validate that the design, as communicated by the design characteristics, will result in a SoI that meets its intended purpose in its operational environment when operated by the intended users as defined by the stakeholder needs and stakeholder requirements.

Validation of a realized SoI (product, service, or enterprise) (system validation)—Validate that realized SoI meets its intended purpose in its operational environment when operated by the intended users and does not enable unintended users to negatively impact the intended use of the system or use the system in an unintended way with an acceptable degree of confidence as defined by the stakeholder needs and stakeholder requirements.



Validation Outcomes. Typical validation outcomes include:

Acceptance. Acceptance is an activity conducted prior to transition to the acquirer such that the acquirer can decide if this transition is appropriate. A set of operational validation actions is often exercised, or a review of validation results performed by the supplier is systematically performed as part of acceptance.

Certification. Certification is a written assurance that the system has been developed per a defined procedure and can perform its intended functions in accordance with identified legal or industrial standards (e.g., airworthiness standards for aircraft, information assurance). A host of information can be part of the certification package, including development reviews, verification results, and validation results. However, certification is typically performed by outside authorities, without direction as to how the needs are to be validated. For example, this method is used for electronics devices via Conformité Européenne (CE) certification in Europe and via Underwriters Laboratories (UL) certification in the United States and Canada.

Readiness for Use. As part of the analysis of the validation results, the project team and validation authority may need to make a readiness for use assessment. This may occur several times in the life cycle, including upon first article delivery, upon completion of production (if more than a single system is produced), following maintenance actions, or successful completion of field trials with a predefined user population. In the field, particularly after maintenance, it may be necessary to establish whether the system is ready for reintroduction to service.

Qualification. System qualification requires that all verification and validation actions have been successfully performed, documented, and that the SoI is “qualified” for use as intended by the supplier organization. These verification and validation actions cover not only the SoI itself but also all the interfaces with its environment (e.g., for a space system, the validation of the interface between space segment and ground segment). The qualification process must demonstrate that the characteristics or properties of the realized system, including margins, meet the applicable system requirements and/or stakeholder requirements. The qualification is concluded by an acceptance review and/or an operational readiness review.



Validation per Level. The SoI may have a number of hierarchical layers of system elements within its architecture. The planning of the validation is done recursively for each level as the definition of the system or a system element evolves. The execution of the validation actions occurs recursively for each layer as the elements are integrated as shown in Figure 4.53. For example, the stakeholder needs and stakeholder requirements are validated against the stakeholder real world expectations to ensure they are the right stakeholder needs and stakeholder requirements, the systems requirements are validated against the stakeholder needs and requirements to ensure they are right system requirements, and the system architecture and design are validated against the stakeholder needs and requirements to ensure they are the right system architecture and design. Additionally, every layer of realized systems and system elements are validated to ensure they meet their stakeholder needs and stakeholder requirements in their operational environment before being integrated into the next higher level of the SoI architecture. Having passed system verification and system validation at a given level, that system element is integrated into the next higher-level system as defined in the Integration process (see Section 2.3.5.8). System integration, system verification, and system validation continue until the integrated SoI has passed system validation.

Early System Validation and MBSE. With the increased use of models and simulations as part of the design process, validation activities can be conducted earlier in the life cycle prior to implementation. Doing so will reduce the risk of issues and anomalies being discovered during system integration, system verification and system validation activities with the actual physical hardware, mechanisms, and software and reduce the resulting expensive and time-consuming rework.

In addition, modeling and simulations early in the project allows not only expectation management but also early feedback from the acquirer and other stakeholders on the final system architecture and design before implementation. It will be much less expensive and time consuming to resolve issues before the realization of the actual physical hardware and software and before system integration, system verification, and system validation activities.

Because the behavior of a system is a function of the interaction of its elements, a major goal of systems validation is assessing the behavior of the integrated physical system and identifying emergent properties not specifically addressed in the stakeholder needs or stakeholder requirements nor identified during modeling and simulations. Emergent properties may be positive or negative. For example, cascading failures across multiple interface boundaries between the system elements that are part of the SoI’s architecture. Relying on models and simulations of the SoI and operational environment may not uncover all the emerging properties and issues that occur in the physical realm. While validation using models and simulations allows a theoretical determination that the modeled system will meet its needs in the operational environment by the intended users once realized, the assessment of the actual system behavior (system validation) must be done, whenever possible, in the physical realm with the actual hardware and software integrated into the higher-level system which it is a part in the actual operational environment by the intended users.

There are cases when it may not be practical in terms of the intended use and actual operational environment to do all system validation activities. However, the SE practitioner is cautioned to not substitute validation of the realized system with the validation results obtained using models and simulations, unless absolutely necessary. Doing so adds risk to the project and reduces the confidence level (as compared to validation against the actual realized system in its actual operational environment when operated by the intended users) and adds risk of the realized system failing system validation when delivered to the acquirer or submitted to a regulatory agency. As long as the realized system is not completely integrated and/or has not been validated to operate in the actual operational environment by the intended users, no result must be regarded as definitive until the acceptable degree of confidence is realized.

Managing the project’s validation program. In the progress of the project, it is important to know, at any time, the status of the validation activities, anomalies discovered, and noncompliances. This knowledge enables the project to better manage the budget and schedule as well as estimate the risks of noncompliance against the possibly of eliminating some of the planned validation actions to meet budget and schedule constraints.




2.3.5.12 Operation Process


Overview

Purpose

As stated in ISO/IEC/IEEE 15288,

[6.4.12.1] The purpose of the Operation process is to use the system to deliver its services.



Description

The Operation process focuses on delivering services provided by the system for the benefit of the operating organization. This process is often concurrent with the Maintenance process of sustaining the system’s services. During Operation, the SoI functions as an integral part of the operating organization. The SoI contributes to the Business or Mission Analysis process by cooperating with human operators and diverse interfacing systems.

Operation may identify the system requirements and design gaps. It may also drive changes, augmenting the initial stakeholder and system requirements.

Inputs/Outputs Inputs and outputs for the operation process are listed in Figure 2.54. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.54 IPO diagram for Operation process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Operation process includes the following activities:

Prepare for operation. – Influence the Concept of Operations (ConOps) of the receiving organization, the Operational Concept (OpsCon) of the SoI, the stakeholder needs and requirements, and the system requirements impacting the operation of the SoI.

– Identify relevant regulations, legal requirements, environmental and ethical constraints.

– Define business rules related to modifications that sustain existing or enhanced services.

– Plan for operational capability build-up, including confirmation of site deployment schedules, personnel availability, training, and logistic support availability.

– Identify and obtain (procure, develop, reuse, rent, schedule, subcontract) the requisite enabling systems, controls, products, or services required for the operation.

– Verify that the SoI is accompanied by all relevant information products, such as documentation, manuals, and procedures. Identify gaps and initiate changes as necessary.

– Review the transition, validation, and maintenance strategies for compatibility with the OpsCon and their completeness concerning the expected operational capabilities.





Perform operation. – Confirm completion of the system transition at the operational sites.

– Prepare and verify the system’s configurations for delivering specific services or missions.

– Operate the system according to the established procedures. Update the procedures as experience accumulates.

– Ensure the flow of materials, energy, and information into and from the SoI. Monitor the functioning of the systems providing inputs for the SoI and utilizing its outputs.

– Track system performance, including operational availability. Identify, investigate, and correct problems and anomalies.

– When abnormal operational conditions warrant, conduct planned contingency actions. Perform system contingency operations, if necessary.





Manage results of operation. – Capture incidents, problems, and anomalies. Investigate and document the issues. Perform corrective actions as needed. Use the Quality Assurance process for managing incidents and problem resolution.

– Use the experience gained during the operation for improvement.

– Maintain bidirectional traceability of the system’s assets, services, and operational capabilities with system architecture, design, and system requirements. Initiate changes as needed.





Support stakeholders – While the customer is responsible for the Operation process, the supplier should support the customer throughout the system life cycle leveraging the knowledge generated by the customer and the supplier.





Common approaches and tips.

Identify the enabling systems, products, services, and materials needed for operation early in the life cycle to allow for the necessary lead time to obtain or access them.



Elaboration

Operation Concepts. Successful operation of the SoI as a part of the operating organization is the ultimate goal of SE. The stakeholders’ needs and requirements regarding operation constitute a significant source of the system requirements and a significant input to the Validation and Transition processes.

During operation, the SoI interfaces with other systems in its environment (see Section 1.3.3). These systems are SoIs in their own right, and their life cycles must be coordinated with the life cycle of your SoI.

The operational environment may change and evolve while the system is being developed. Considerable effort must be invested in recognizing these changes and updating the life cycle concepts (especially ConOps and OpsCon) and all derived requirements.




2.3.5.13 Maintenance Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.13] The purpose of the Maintenance process is to sustain the capability of the system to provide a service.



Description

The Maintenance process focuses on sustaining the system’s ability to provide services for the operating organization’s benefit. This process is often concurrent with the Operation process of delivering the system’s services. Maintenance includes the activities to provide operations support, logistics, and material management to sustain satisfactory quality, performance, and availability of the system’s services.

Maintenance may identify requirements and design gaps. It may also drive changes in the SoI, augmenting the initial stakeholder and system requirements.

Inputs/Outputs Inputs and outputs for the Maintenance process are listed in Figure 2.55. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.55 IPO diagram for Maintenance process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Maintenance process includes the following activities:

Prepare for maintenance and logistics. – Define and maintain the maintenance and logistics strategies of the SoI and its elements and update the system requirements and attribute specifications impacting the maintenance and logistics support.

– Define business rules related to modifications that sustain existing or enhanced services.

– Identify relevant regulations, legal requirements, and ethical constraints and generate corresponding requirements.

– Plan for maintenance and logistics support capability build-up, including site deployment schedules, personnel availability, and training, including the logistic support availability.

– Establish appropriate warranty and licenses (e.g., software, legal) and the lines of communication to activate more support when needed.

– Identify and obtain (procure, develop, reuse, rent, schedule, subcontract) the requisite enabling systems, controls, products, or services required for maintenance and logistics support.

– Review the transition, validation, and operation strategies for compatibility with the support concept and their completeness concerning the expected maintenance and logistics support capabilities.





Perform maintenance. – Confirm completion of the system transition at the maintenance sites.

– Maintain the system according to the established procedures. Update the procedures when experience accumulates.

– Detect, identify, and repair physical and logical damage to the system, including data corruption or inaccessibility. Identify and replace faulty or obsolete parts, including software updates.

– Monitor the SoI and its environment to detect or predict system failures or performance degradation, identifying and resolving operational problems minimizing operational interruptions.

– Prevent operation disruptions by scheduling repairs and replacements before failures occur, based on operations history or failure prediction.

– Ensure availability of materials and parts for replacement and repairs by production, acquisition, or repairs, including operations and maintenance of logistics processes and systems. Conduct logistics operations according to the established procedures. Update the procedures when experience accumulates.

– Track all maintenance repairs for analysis, which may lead to performance trends that can trigger warranty claims or new project needs.





Perform logistic support. – Conduct acquisition logistics actions

– Conduct operational logistics actions





Manage results of maintenance and logistics. – Capture incidents, problems, and anomalies. Investigate and document the issues. Perform corrective actions as needed. Use the Quality Assurance process for managing incidents and problem resolution.

– Use the experience gained while performing maintenance for improvement.

– Maintain bidirectional traceability of the maintenance and logistics assets, services, and capabilities with system architecture, design, and system requirements. Initiate changes as needed.

– Manage the configuration data items.





Common approaches and tips.

Identify the enabling systems, products, services, and materials needed for maintenance and logistics support early in the life cycle to allow for the necessary lead time to obtain or access them.

The maintenance of the SoI must be coordinated with the maintenance of other systems in its environment (the interoperating and enabling systems). The failure or malfunction of any system can trigger maintenance actions in other systems due to technical, organizational, economic, or political concerns.



Elaboration

The Maintenance process supports the operation of the SoI and its elements throughout its life cycle. The maintenance and logistics activities regarding the SoI must be integrated into the operating organization’s existing support and logistics networks. This includes provisions for sustaining the skills and competencies of personnel performing operation and maintenance.

Different modes of maintenance should be considered:

Corrective maintenance restores system services to normal operations (e.g., remove and replace hardware, reload software, apply a software patch).

Preventive maintenance prevents failures and malfunctions by scheduling routine maintenance actions to sustain optimal system operational performance.

Predictive maintenance is a more advanced preventive maintenance that utilizes data collected during the system operations to predict failures and malfunctions and schedule the maintenance actions in advance.

System modification is a form of maintenance that extends the system’s useful life by changing the system to sustain existing capabilities in the changing environment. Adding new capabilities (system upgrades) is sometimes considered part of the maintenance.





2.3.5.14 Disposal Process


Overview

Purpose As stated in ISO/IEC/IEEE 15288,

[6.4.14.1] The purpose of the Disposal process is to end the existence of a system element or system for a specified intended use, appropriately handle replaced or retired elements, appropriately handle any waste products, and to properly attend to identified critical disposal needs.



The Disposal process is conducted in accordance with applicable guidance, policy, regulations, and statutes throughout the system life cycle.

Description The Disposal process generates requirements and constraints that must be balanced with defined stakeholders’ needs and requirements and other design considerations. Further, environmental concerns drive the designer to consider reclaiming the materials or recycling them into new systems. Incremental disposal can be applied at any point in the life cycle (e.g., prototypes that are not to be reused or evolved, waste materials during manufacturing, parts that are replaced during maintenance). The Disposal process may also be used to manage the transition of system elements from a current SoI to a different system.

The Disposal process also includes any steps necessary to return the environment to an acceptable condition; handle all system elements and waste products in an environmentally sound manner in accordance with applicable legislation, organizational constraints, and stakeholder agreements; and document and retain records of disposal activities, as required for monitoring by external oversight or regulatory agencies.

Inputs/Outputs Inputs and outputs for the Disposal process are listed in Figure 2.56. Descriptions of each input and output are provided in Appendix E.




FIGURE 2.56 IPO diagram for Disposal process. INCOSE SEH original figure created by Shortell, Walden, and Yip. Usage per the INCOSE Notices page. All other rights reserved.





Process Activities The Disposal process includes the following activities:

Prepare for disposal. – Review the retirement concept (may be called a disposal concept), including any hazardous materials and other environmental impacts to be encountered during disposal.

– Plan for disposal, including the development of the strategy.

– Impose associated constraints on the system requirements.

– Ensure that the necessary enabling systems, products, or services required for disposal are available, when needed. The planning includes the identification of requirements and interfaces for the enablers. The acquisition of the enablers can be done through various ways such as rental, procurement, development, reuse, and subcontracting. An enabler may be a complete enabling system developed as a separate project from the project of the SoI.

– Identify elements that can be reused and that cannot be reused. Special methods may need to be implemented for hazardous materials.

– Specify containment facilities, storage locations, inspection criteria, and storage periods, if the system is to be stored.





Perform disposal. – Decommission the system or system elements to be disposed.

– Disassemble the elements for ease of handling. Include identification and processing of reusable elements.

– Extract all elements and waste materials that are no longer needed—this includes removing materials from storage sites, consigning the elements and waste products for destruction or permanent storage, and ensuring that the waste products or elements not intended for reuse cannot get back into the supply chain.

– Dispose of deactivated system elements per the disposal procedure.

– Ensure the disposal staff adheres to safety, security, privacy and environment regulations or policies and capture their tacit knowledge for future needs.





Finalize the disposal. – Confirm no adverse effects from the disposal activities and return the environment to its original state.

– Maintain documentation of all disposal activities and residual hazards.





Common approaches and tips:

Consider donating an obsolete system—Many items, both systems and information, of cultural and historical value have been lost to posterity because museums and conservatories were not considered as an option during the retirement stage.

Concepts such as zero footprint and zero emissions drive current trends toward corporate social responsibility that influence decision making regarding cleaner production and operational environments and eventual disposal of depleted materials and systems.

Design the SoI to support the circular economy (see Section 3.1.10). Maintaining materials in closed loops maximizes material value without damaging ecosystems (McDonough, 2013).



Elaboration

The project team conducts analyses to develop solutions for disposition of the system, system elements, and waste products based on evaluation of alternative disposal methods. Methods addressed should include storing, dismantling, reusing, recycling, reprocessing, and destroying systems, system elements, materials, consumables, waste, and enabling systems,.

Disposal analyses are essential to ensure the planning and feasibility of disposal throughout the life cycle. The following are key points with respect to the analyses.

Analyses include consideration of costs (including LCC), disposal sites, environmental impacts, health and safety issues, responsible agencies, handling and shipping, supporting items, and applicable international, national, and local regulations.

Analyses support selection of system elements and materials that will be used in the system design and should be readdressed to consider design and project impacts from changing laws and regulations throughout the life cycle.



Disposal strategy and design considerations are updated throughout the system life cycle in response to changes in applicable laws, regulations, and policy.

The ISO 14000 (2015) series includes standards for environmental management systems and life cycle assessment.