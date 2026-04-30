LIFE CYCLE TERMS AND CONCEPTS


The overall purpose of Systems Engineering (SE) is to enable successful realization of the system while optimizing among competing stakeholder objectives. One way in which realization is managed is by breaking the overall effort into transformational steps, or stages, then checking for satisfactory fulfillment of system characteristics at the end of each stage, as well as checking whether risk is acceptable and the system is ready to enter other stages. Stages do not need to be executed sequentially or singularly. They can be executed multiple times as needed, and often in parallel. The critical feature of this approach is that progress is gated by specific decision points, generally called decision gates. By analogy with the stages that living things go through, called a life cycle, the set of stages for a system is termed a system life cycle. In summary, engineered systems progress in some manner through a set of stages, conceptually forming a system life cycle, with decision gates determining the completion of one stage and start of another. This part of the SE Handbook gives details for each of these parts of the system life cycle concept, as well as pointing out the role of the SE practitioner throughout a system’s life cycle. Further details can be found in ISO/IEC/IEEE 24748–1 (2018).





2.1.1 Life Cycle Characteristics


As the introduction states, life cycles are defined in terms of the stages that mark progress in achieving the system characteristics. A commonly encountered set of life cycle stages is shown in Figure 2.1. These stages are also shown in ISO/IEC/IEEE 15288 (2023) and in ISO/IEC/IEEE 24748–1 (2018).




FIGURE 2.1 System life cycle stages. InCOSE SEH original figure created by yokell. Usage per the InCOSE notices page. All other rights reserved.





System life cycle stages can be entered based on the needs of the SoI or any system element. Stages can be entered into as many times as needed. Stages often are not sequential and can occur concurrently or as needed. Stages can overlap and stages can be entered at any point in the life cycle. The retirement stage does not require the entire SoI to be retired, it can be any system element, and retirement does not need to be in the order the systems are delivered.

Typically, life cycle stages have both entry and exit decision gates. The entry decision gate is intended to help ensure that the entry criteria are met and the resources needed for the stage are available. The exit decision gate is intended to help ensure that the objectives of the stage have been achieved and the risk of going forward is acceptable. Decision gates are discussed in more detail in Section 2.1.3.

Figure 2.2 compares the generic life cycle stages to other life cycle viewpoints. Typical decision gates are represented along the bottom.




FIGURE 2.2 Generic life cycle stages compared to other life cycle viewpoints. derived from Forsberg, et al. (2005) with permission from John Wiley & Sons. All other rights reserved.





Major system elements may have their own life cycles. These life cycles have to be managed so that an integrated SoI is achieved and used over a span of time. When the SoI is, or is part of, an SoS (see Section 4.3.6), the influences from the evolution of the SoS need to be considered in the life cycle of the SoI. Each constituent system of the SoS has its own life cycle. Further, enabling systems (see Section 1.3.3) also have their own life cycles, which must be integrated with that of the SoI.

Requirements must be flowed down to the elements to be integrated and the decision gates should support progressive integration into the final SoI in a timely manner to help ensure that the elements can be progressively integrated. The decision gates associated with the various life cycle models should be synchronized, whatever the types of system element or parts of the life cycle are involved to support progressive integration into the final SoI.

Note that the above figures are notional and do not attempt to scale the relative time spans of the stages. For example, a system could move from initial concept to a fielded system in a few years, then remain in utilization, being supported and possibly upgraded, for decades (e.g., jet aircraft, nuclear power facility, day care nursery). A different system could have a series of development efforts, each resulting in relatively short periods of utilization and retirement (e.g., mobile phone, consumer electronics). While that is of interest from a programmatic viewpoint, it is secondary to the rationale of breaking the life cycle into stages to allow decisions to be made at key points.




2.1.2 Typical Life Cycle Stages


As shown in Figure 2.1, a system progresses through various life cycle stages that span the conception, development, production, utilization, support, and retirement of the SoI. This section highlights specific characteristics of each life cycle stage. Note that other life cycle models use different names for the stages and the associated characteristics of the stage. For other types of stages, such as those illustrated in Figure 2.2, the discussion here needs to be adapted as appropriate. Additional discussion of life cycle stage characteristics is in ISO/IEC/IEEE 24748–1 (2018).





Concept Stage


The concept stage can include exploratory research and begins with recognition of a need for a new or modified mission or business capability. Unless the solution is immediately at hand, which is the first thing to analyze, new potential solutions will need to be sought. Exploration needs to address both short- and long-range factors, including technical, economic, market, and resource considerations, including human resources. Surveys, trade-off studies, business or mission analyses, and other means of exploring the solution space are used. It is key that the problem space is clearly defined (existing issue or new opportunity), the solution space is characterized, business or mission requirements, and stakeholder needs and requirements are identified. From this, an estimate of the cost, schedule, and performance across the life cycle can be derived. Throughout the concept stage, it is critical to perform ongoing and robust assessment and management of risks. Getting feedback from current and potential stakeholders (e.g., customers, users, suppliers) significantly aids in developing solution concepts. The maturity and availability of enabling systems over the system life cycle must also be considered.

Typical outputs from the concept stage include preliminary concept artifacts (e.g., Operational Concept (OpsCon), Support Concept), SE methodology approach considerations, feasibility assessments (e.g., models, simulations, prototypes), preliminary architecture solutions, and stakeholder requirements. The concept stage could create key preliminary system requirements and could outline design solutions and acquisition strategies. Enabling systems are also addressed, as are first estimates of cost and schedule over the whole life cycle.

The concept stage is a particularly critical part of the system life cycle because the decisions made during the stage will shape, with increasing difficulty to change, the possibilities for all the remaining stages. It is difficult to project the possibilities for as-yet untried solutions, though these may provide the greatest long-term benefit. At the same time, it is easy to fall into the trap of projecting incremental changes to what has worked in the past and is used now, which can significantly limit the future possibilities.





Development Stage


The development stage defines an SoI that meets its agreed-to stakeholder needs and requirements and can be produced, utilized, supported, and retired. System analyses, including trade-off analysis, as well as further modeling, simulation, and prototyping are performed to achieve system balance and to optimize the design for key parameters.

The main aspect of the development stage is to mature the system concepts and stakeholder needs and requirements into an engineering baseline that can be produced, utilized, and supported over the desired span of its useful life, and finally retired in a responsible manner. The goal is not perfection, but rather to adequately meet the stakeholder needs and requirements in a manner that is supportable. The engineering baseline includes system requirements, architecture, design, documentation, and plans for subsequent stages. Outputs can include an SoI prototype, enabling system requirements (or the enabling systems themselves), plans for integration, verification, validation, transition, acquisition, logistics support, risk management, staffing and training, and detailed cost estimates and schedules for future stages. These outputs can occur incrementally, supporting a phased realization of the SoI, especially for complex systems.





Production Stage


The production stage begins with approval to translate the baselines of the development stage into an actual system, or those parts of the SoI where approval is given (which is not uncommon for a complex system). The approval includes the enabling systems and must address all areas of the baseline. In this stage, the SoI becomes reality, is qualified for use, and is ready for installation and transition under the utilization stage. The outputs of this stage are the realized portions of the SoI (with its enabling systems) as well as the documentation that will go forward for use in the utilization, support, and retirement stages.





Utilization Stage


The utilization stage begins with the transition to use of a system, or the parts of a system approved for use. This includes any enabling systems that will support use of the system being used in its intended environment to provide its intended capabilities. Product modifications are often introduced throughout the utilization stage, which generally is much longer than the other stages. Such changes can remedy deficiencies, enhance the capabilities, or extend the life of the system. Throughout, it is critical to maintain documentation from prior stages, as well as to ensure that Technical Management Processes, such as Configuration Management and Risk Management, and SE support remain in place and are robustly applied. The utilization stage proceeds in parallel with the support stage and ends, possibly by steps for different parts of the SoI, with the retirement stage.





Support Stage


The support stage begins with provisioning of support for the SoI’s utilization. Planning and acquisition actions for the system support are often taken before utilization is allowed to start. In this stage, deficiencies and failures are noted and used as the basis for either remediation of the problems, or to build a case for evolutionary modification. Modifications may be proposed to resolve supportability problems, to reduce operational costs, or to extend the life of a system. These changes require SE assessments to avoid loss of system capabilities while under operation, or violation of non-performance related requirements. The support stage ends when a decision is made that the system is at the end of its useful life or that it should no longer be supported.





Retirement Stage


The retirement stage is where the system or a system element and its related services are removed from operation. SE activities in this stage are primarily focused on ensuring that disposal requirements, which can be extensive, are satisfied. However, it is often of value to ensure that documentation generated during at least the utilization and support stages is archived. That information can be invaluable when belated recognition arises that there is a need for new system.

Planning for retirement is part of the system definition during the concept and development stages. Experience has repeatedly demonstrated the consequences when system retirement is not considered from the outset. Early in the twenty-first century, many countries have changed their laws to hold the developer of a SoI accountable for proper end-of-life disposal of the system.





2.1.3 Decision Gates


It is good practice to have risk-managing decision points that occur at the beginning and end of each stage. This approach ensures that progress is gated by specific decision points that are clearly visible. These decision points help ensure the readiness to proceed with a stage and that the stage accomplishes is objective as it finishes. They often take place within the context of “project milestones,” “project reviews,” or “milestone reviews.” Key is to help ensure that decisions are clearly made and documented and that they relate directly to the criteria established to begin or end a particular stage of a system’s life cycle. Note that some approaches, such as agile (see Section 4.2.2), accomplish their decision points in a different cadence and tend to avoid the terms “milestones” and “decision gates.” In agile development, frequent interaction with stakeholders can change the frequency (more frequent) and scope (smaller scope), and formality (less formal) of decision gates.

Typical goals of decision gates are to confirm that:

increase in system maturity is within the defined threshold;

the project deliverables satisfy the business case;

the resources are sufficient to for the stage and subsequent stages;

unresolved issues that need to be addressed in that stage are addressed; and

overall risk for proceeding forward in the system life cycle is acceptable.



As shown in Figure 2.3, decision criteria can also include stage entry/exit criteria, entry/exit criteria from other stages, and risk assessment. Figure 2.3 shows the following cases:




FIGURE 2.3 Criteria for decision gates. InCOSE SEH original figure created by yokell. Usage per the InCOSE notices page. All other rights reserved.





the entry criteria are met, but the start of the stage is delayed;

when the entry criteria are met, the decision to start the stage is made;

although the entry criteria are not met, the stage is started;

although the exit criteria are met, the decision to end the stage is delayed;

when the exit criteria are met, the decision to end the stage is made;

the decision to end the stage is made before the exit criteria are met.



At each decision gate, the options can include:

Begin subsequent stage or stages;

Continue this stage, possibly after some reformulation;

Go to or restart a preceding stage;

Hold the project activity;

Terminate the project.



The option selected depends on the quality of the results of the effort so far (based on the answers to the exit questions) plus the risk of moving forward (based on the answers to the entrance questions). Stages do not need to be sequential. Transitions often occur, but it is common to have stages occurring concurrently. In complex systems, the decision can also be more differentiated. For example: move part of the effort forward; hold on some; and terminate or reform others.

Decision gate approval follows review by qualified experts, involved stakeholders, and management. Approval should be based on evidence of compliance to the criteria of the review. Balancing the formality and frequency of decision gates is seen as a critical success factor for all SE process areas. The consequences of conducting a superficial review, omitting a critical discipline, or skipping a decision gate are usually long-term and costly.

It is important to note that there may be significant changes in the project’s environment. This may impact the project’s business case, system scope, or resources needed. Consequently, the related decision criteria should be updated and evaluated at every decision gate. Inadequate consideration can set up subsequent failures—usually a major factor in cost overruns and delays.

Upon successful completion of a decision gate, some artifacts (e.g., documents, analysis results, models, or other products of a system life cycle stage) will have been approved as the basis upon which future work must build. These artifacts are placed under configuration management along with the decisions made and the associated rationale and assumptions (see Section 2.3.4.5).




2.1.4 Technical Reviews and Audits


Technical reviews and audits are used to assess technical progress, coordinate activities, and determine the technical status of a system of interest (SoI). According to ISO/IEC 24748–8 / IEEE 15288.2 (2014):

A technical review is “a series of systems engineering activities conducted at logical transition points in a system life cycle, by which the progress of a [project] is assessed relative to its technical requirements using a mutually agreed-upon set of criteria” and

An audit is “a detailed review of processes, product definition information, documented verification of compliance with requirements, and an inspection of products to confirm that products have achieved their required attributes or conform to released product configuration definition information.”



The technical reviews and audits to be performed occur throughout the system life cycle and should be captured in the project’s Systems Engineering Management Plan (SEMP) and reflected in the project’s schedule (see Section 2.3.4.1). They may be part of a decision gate review (see Section 2.1.3). A representative set of technical reviews and audits are listed in Table 2.1. They should be tailored for the needs of the project and the methodologies being used. ISO/IEC/IEEE 24748–1 (2018), Annex F and ISO/IEC 24748–8 / IEEE 15288.2 (2014) provide useful guidance for the planning and tailoring of reviews to the needs of the project and its stakeholders.


TABLE 2.1 Representative technical reviews and audits



Defense Projects per ISO/IEC/IEEE 24748-8/IEEE 15288.2 (2014) Space Projects per NASA (2007b) Incremental Commitment Spiral Model per Boehm, et al. (2014)

Alternative Systems Review (ASR)

System Requirements Review (SRR)

System Functional Review (SFR)

Preliminary Design Review (PDR)

Critical Design Review (CDR)

Test Readiness Review (TRR)

Functional Configuration Audit (FCA)

System Verification Review (SVR)

Production Readiness Review (PRR)

Physical Configuration Audit (PCA)

Mission Concept Review (MCR)

System Requirements Review (SRR)

Mission Definition Review (MDR)

System Definition Review (SDR)

Preliminary Design Review (PDR)

Critical Design Review (CDR)

System Integration Review (SIR)

Operational Readiness Review (ORR)

Flight Readiness Review (FRR)

Mission Readiness Review (MRR)

Post-Launch Assessment Review (PLAR)

Critical Events Readiness Review (CERR)

Post-Flight Assessment Review (PFAR)

Decommissioning Review (DR)

Disposal Readiness Review (DRR)

Exploration Commitment Review (ECR)

Valuation Commitment Review (VCR)

Foundation Commitment Review (FCR)

Development Commitment Reviewn (DCRn)

Operations Commitment Reviewn (OCRn)



INCOSE SEH original table created by Walden. Usage per the INCOSE Notices page. All other rights reserved.





Figure 2.4 depicts the relationship between these reviews and audits identified in ISO/IEC 24748–8 / IEEE 15288–2 (2014) and the typical technical baselines across the system life cycle applicable for a sequential life cycle model. This depiction will vary significantly for incremental life cycle models.




FIGURE 2.4 Relationship between technical reviews and audits and the technical baselines. From ISO/IEC 24748–8 / IEEE 15288.2 (2014). Used with permission. All other rights reserved.





Technical reviews and audits provide an opportunity to assess the following:

The SoI is meeting its requirements

The SoI is meeting stakeholder expectations, internal and external

The SoI will have acceptable quality characteristics (QCs)

The SoI is at an appropriate level of maturity

The SoI is at an acceptable level of risk

There is a clear path toward verifying and validating the SoI and its elements



Good practices for technical reviews and audits include:

Plan the review or audit, including getting concurrence on a mutually agreeable location and date

Application of multiple instances of the reviews and audits, both at multiple levels of the systems hierarchy and during each increment or iteration

Elimination of unnecessary reviews or audits

Establish clear entry and exit criteria for each review and audit

Establish roles and responsibilities for the preparation, conduct, and acceptance of each review

Make the reviews be risk-driven (risk is at an acceptable level) or event-driven (the entry criteria has been satisfied), not schedule-driven (must happen on a certain date)

Consider “dry-runs” to make the review as efficient as possible

Include subject matter experts (SMEs) and independent reviewers

Include all members of the team, including acquirers and suppliers

Capture clear actions, with ownership and due dates, for all issues that arise

Follow up on actions that were raised



Each technical review or audit should include knowledgeable participants as well as participants with sufficient objectivity to assess satisfaction of the pre-established review criteria. Based on the purpose and level of the review, the participants may include representatives from the acquirer or supplier organizations, or both. A list of possible participants is provided below:

Project Manager

Lead SE Practitioner / Chief Engineer / Lead Engineer

Review or Audit Chair

Recorder (person charged with capturing the results of the review or audit)

Acquirer Representative(s)

Supplier Representative(s)

Project Verification and Validation Lead

Other Technical Leads