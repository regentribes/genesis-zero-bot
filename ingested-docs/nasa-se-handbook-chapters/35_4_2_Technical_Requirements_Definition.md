## 4.2 Technical Requirements Definition









**NOTE:**







4.2.1 Process Description

FIGURE 4.2-1





4.2.1.1 Inputs

Typical inputs needed for the requirements process include the following:

•

Baselined Stakeholder Expectations:



•

Baselined Concept of Operations:







•

Baselined Enabling Support Strategies:



•

Measures of Effectiveness:



Other inputs that might be useful in determining the technical requirements:

•

Human/Systems Function Allocation:

  

Technical PerformanceMeasures Baselined Stakeholder Expectations Validated TechnicalRequirements Baselined Concept ofOperations Measures ofEffectiveness Baselined EnablingSupport Strategies From StakeholderExpectations Definitionand Configuration Management Processes Measures ofPerformance To Logical Decompositionand Technical DataManagement ProcessesTo TechnicalAssessment ProcessTo Logical Decompositionand Requirementsand Interface ManagementProcesses Define performancerequirements for eachdefined functional andbehavioral expectation performance measures Define design andproduct constraints Validate technicalrequirements Establish technicalrequirements baseline Define functional and behavioral expectation intechnical terms Analyze scope of problemDefine technical requirements in acceptable “shall” statementsDefine measures ofDefine technicalperformance for eachmeasure of effectivenessCapture work products from technical requirements definition activities FIGURE 4.2‑1 Technical Requirements Definition Process

4.2.1.2 Process Activities 4.2.1.2.1   • Defining constraints that the design needs to adhere to or that limit how the system will be used. The constraints typically cannot be changed based on trade-off analyses.

• Identifying those elements that are already under design control and cannot be changed. This helps FIGURE 4.2‑1 Technical Requirements Definition Process

establish those areas where further trades will be made to narrow potential design solutions.

•  • Defining functional and behavioral expectations for the range of anticipated uses of the system as identified in the ConOps. The ConOps describes how the system will be operated and the possible use-case scenarios.

EXAMPLE OF FUNCTIONAL AND PERFORMANCE REQUIREMENTS

Initial Function Statement The Thrust Vector Controller (TVC) shall provide vehicle control about the pitch and yaw axes.

This statement describes a high-level function that the TVC must perform. The technical team needs to transform this statement into a set of design-to functional and performance requirements.

Functional Requirements with Associated Performance Requirements • The TVC shall gimbal the engine a maximum of 9 degrees, ± 0.1 degree.

• The TVC shall gimbal the engine at a maximum rate of 5 degrees/second ± 0.3 degrees/second.

• The TVC shall provide a force of 40,000 pounds, ± 500 pounds.

• The TVC shall have a frequency response of 20 Hz, ± 0.1 Hz.

4.2.1.2.2  FIGURE 4.2-2  • Functional requirements define what functions need to be performed to accomplish the objectives.

• Performance requirements define how well the system needs to perform the functions.

 

**Program RequirementsProject RequirementsMission DirectorateImposed RequirementsProgramImposed RequirementsSelf-Imposed DerivedRequirementsSelf-Imposed DerivedRequirementsLikewise flow to Lower Level Systems“Programmatic” RequirementsTechnical RequirementsOwned by Program/ ProjectOwned by Technical AuthorityAllSee note*OwnershipType Flow Ex: At least one major element shall be provided by the international community.Ex: The spacecraft shall provide a direct Earth entry capability for 11500 m/s or greater.Ex: The spacecraft shall provide a direct Earth entry capability for 11500 m/s or greater.Ex: The system shall have a 1.4 factor of safety* Requirements invoked by OCE, OSMA and OCHMO directives, technical standards and Center institutional requirements** FIGURE 4.2-2 Flow, Type and Ownership of Requirements
