## 6.5 Configuration Management









          6.5.1 Process Description

FIGURE 6.5-1 6.5.1.1 Inputs

The inputs for this process are:

•

CM plan:

•

Engineering change proposals:

•

Expectation, requirements and interface docu  ments:

•

Approved requirements baseline changes:

•

Designated configuration items to be controlled:

6.5.1.2 Process Activities FIGURE 6.5-2 • configuration planning and management • configuration identification,

• configuration change management, • Configuration Status Accounting (CSA), and • configuration verification.

*From projectFrom Requirementsand InterfaceManagement ProcessesTo Technical DataManagement ProcessTo applicabletechnical processes To project andTechnical DataManagement ProcessExpectation, Requirements, andInterface Documents Engineering ChangeProposalsProject ConfigurationManagement Plan List of ConfigurationItems UnderControlConfigurationManagementWork Products CurrentBaselinesConfigurationManagementReports ApprovedRequirementBaseline ChangesPrepare a strategy to conductconfiguration managementIdentify baseline to be underconfiguration controlMaintain the status of configuration Maintain the status of configuration documentation Manage configuration change controlConduct configuration auditsCapture work products fromconfiguration management activitiesIdentified Riskto Be ControlledDesignatedConfiguration Itemsto Be Controlled* FIGURE 6.5‑1 Configuration Management Process 6.5.1.2.1



ConfigurationVerificationConfigurationStatusAccountingConfigurationChangeManagementConfigurationPlanning and ConfigurationIdentification ManagementCONFIGURATIONMANAGEMENT FIGURE 6.5‑2 Five Elements of Configuration Management

 

*Appendix M*

This plan has both internal and external uses:

•

Internal:

 •

External:

 6.5.1.2.2        

FIGURE 6.5-3

 •

Functional Baseline:

   •

Allocated Baseline:

 

performance characteristics and for initiating detailed design for a CI. The allocated baseline is usually controlled by the design organization until all design requirements have been verified. The allocated baseline is typically established at the successful completion of the PDR. Prior to CDR, NASA normally reviews design output for conformance to design requirements through incremental deliveries of engineering data. NASA control of the allocated baseline occurs through review of the engineering deliveries as data items.

Level 1 TechnicalRequirementsFUNCTIONAL BASELINEConfiguration Information Non-Configuration Information (examples)MilestonesMajor ArchitectureAspects of DesignCompleteALLOCATEDBASELINEImplementationAspects of DesignComplete PRODUCTBASELINERealization Aspects of Design Complete; Fabricationand Text Complete MDRConceptPartial analysesand studiesProgram andproject plansDevelopmentaldataCompleteanalysesDevelopmentaldataTest plansSystem SpecTest informationManualsCertificationsProduct structureSDRSRRPDRORRSARCDRSegment SpecPrime ItemDesign-to-SpecEnd ItemDesign-to-SpecEnd ItemBuild-to-SpecEnd ItemDesign-to-SpecEnd ItemDesign-to-SpecSegment Spec Segment SpecPrime ItemDesign-to-SpecPrime ItemDesign-to-Spec FIGURE 6.5‑3 Evolution of Technical Baseline

•

Product Baseline:



»

Detailed physical or form, fit, and function characteristics of a CI;

»



»

The production acceptance test requirements.

•

As-Deployed Baseline:

 6.5.1.2.3    

FIGURE 6.5-4



**OriginatorNORMAL CONFIGURATION CHANGE PROCESSCM Function ReviewersResponsibleOrganization CCB Actionees1.• Prepare and submit change request• Propose reviewers3. 4.2. 5.• Receive and log request in system• Screen change package• Release for reviewReview and submit commentsSchedule CCB and prepare agenda (if needed)8b.Collect, track, and adjudicatecomments (withreviewers andoriginator)6.Prepare decisionpackage9.7. 8a.Completeassigned actions• Disposition change request• Assign action items as needed• Release CCB minutes• Track actions10.• Verify release package• Release final documentation• Close change request• Execute approved changes • Finalizedocumentation** FIGURE 6.5‑4 Typical Change Control Process

TYPES OF CONFIGURATION MANAGEMENT CHANGES

• Engineering Change: An engineering change is an iteration in the baseline. Changes can be major or minor. They may or may not include a specification change. Changes affecting an external interface must be coordinated and approved by all stakeholders affected.

> A “major” change is a change to the baseline configuration documentation that has significant impact (i.e., requires retrofit of delivered products or affects the baseline specification, cost, safety, compatibility with interfacing products, or operator, or maintenance training).> A ”minor” change corrects or modifies configuration documentation or processes without impact to the interchangeability of products or system elements in the system structure.

• Waiver: A waiver is a documented agreement intentionally releasing a program or project from meeting a requirement. (Some Centers use deviations prior to Implementation and waivers during Implementation.) Authorized waivers do not constitute a change to a baseline.

6.5.1.2.4  • Complete current and historical configuration documentation and unique identifiers.

•  •   Some useful purposes of the CSA data include:

•  • Historical traceability • Software trouble reporting • Performance measurement data The following are critical functions or attributes to consider if designing or purchasing software to assist with the task of managing configuration.

• Ability to share data real time with internal and external stakeholders securely;

• Version control and comparison (track history of an object or product);

• Secure user checkout and check in;

• Tracking capabilities for gathering metrics (i.e., time, date, who, time in phases, etc.);

• Web based;

• Notification capability via e-mail;

• Integration with other databases or legacy systems;

• Compatible with required support contractors and/or suppliers (i.e., can accept data from a third party as required);

• Integration with drafting and modeling programs as required;

• Provide neutral format viewer for users;

• License agreement allows for multiple users within an agreed-to number;

• Workflow and life cycle management;

• Limited customization;

• Migration support for software upgrades;

• User friendly;

• Consideration for users with limited access;

• Ability to attach standard format files from desktop • Workflow capability (i.e., route a CI as required based on a specific set of criteria); and • Capable of acting as the one and only source for released information.

6.4.1.2.5  6.4.1.2.6   6.5.1.3 Outputs NPR 7120.5 defines a project’s life cycle in progressive phases. Beginning with Pre-Phase A, these steps in turn are grouped under the headings of Formulation and Implementation. Approval is required to transition between these phases. Key Decision Points (KDPs) define transitions between the phases. CM plays an important role in determining whether a KDP has been met. Major outputs of CM are:

•

List of configuration items under control (Configuration Status Accounting (CSA) reports):

 •

Current baselines:

 •

CM reports:

•

Other CM work products:

6.5.2 CM Guidance

*https://nen.nasa.*

*gov/web/se/doc-repository*

• the impact of not doing CM, • warning signs when you know you are in trouble, and • when it is acceptable to use redline drawings.
