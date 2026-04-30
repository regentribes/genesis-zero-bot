SYSTEMS ENGINEERING FOUNDATIONS


1.4.1 Uncertainty


There is uncertainty associated with much of the systems information and measurement data we use. This section provides a brief summary of the two major types of uncertainty, the sources of systems uncertainty, and decision making under uncertainty.

Types of Uncertainty. There are two types of uncertainties: epistemic and aleatory. In SE, epistemic uncertainty is due to our lack of knowledge about the potential demand for a new system and how a technology, system, or process will perform in the future, for example, the knowledge gap about key value attribute or about the acquirer’s preferences. Aleatory uncertainty is uncertainty due to randomness. If a technology, system, or process can perform a function, there will be always some inherent randomness in every performance measurement. Our system requirements process, and development decisions focus on reducing epistemic uncertainty (overcoming our lack of knowledge), but we can never completely reduce aleatory uncertainty in our development or operational measurement of system performance.

Sources of Uncertainty and Risk. There are many sources of epistemic uncertainty that impact SE in the system life cycle. Table 1.4 provides a partial list of some of the major uncertainties that confront project managers and SE practitioners and describes some of the implications for SE.


TABLE 1.4 Sources of system uncertainty



Sources of Uncertainty Major Questions Potential Uncertainties

Business Will political, economic, labor, social, technological, environmental, legal or, other factors adversely affect the business environment? Changes in political viewpoint (e.g., elections) Economic disruptions (e.g., recession). Global disruptions (e.g., supply chain). Changes to laws and regulations. Disruptive technologies. Adverse publicity.

Market Will there be a market if the product or service works? User and consumer demand. Threats from competitors (quality and price) and adversaries (e.g., hackers and terrorists). Continuing stakeholder support.

Management Does the organization have the people, processes, and culture to manage a major system? Organization culture. SE and management experience and expertise. Mature baselining processes (technical, cost, schedule). Reliable cost estimating processes.

Performance (Technical) Will the product or service meet the required desired performance? Defining future requirements in dynamic environments. Understanding of the technical baseline. Technology maturity to meet performance. Adequate modeling, simulation, test, and evaluation capabilities to predict and evaluate performance. Availability of enabling systems needed to support use.

Schedule Can the system that provides the product or service be delivered on time? Concurrency in development. Impact of uncertain events on schedule. Time and budget to resolve technical and cost risks.

Development and Production Cost Can the system be delivered within the budget? Will the cost be affordable? Changes in missions. Technology maturity. Hardware and software development processes. Industrial/supply chain capabilities. Production facilities capabilities and processes.

Operations and Support Cost Can the owner afford to operate and support the system? Will the cost be affordable? Increasing operations and support (e.g., resource or environmental) costs. Resiliency of the design to new missions and tasks. Changes in maintenance or logistics strategy/needs.

Sustainability Will the system provide sustainable future value? Availability of future resources and impact on the natural environment.

INCOSE SEH original table created by Jackson and Parnell derived from Parnell (2016). Usage per the INCOSE Notices page. All other rights reserved.





Decisions Under Uncertainty

As can be seen from Table 1.4, uncertainties impact every SE decision process. Taking decisions before having enough knowledge is potentially very risky. Key decisions that have a strong impact on the solution require reducing uncertainty by closing the knowledge gap to an appropriate level. However, SE practitioners must be able to make decisions under uncertainty and should record a corresponding risk with those decisions (see Sections 2.3.4.3 and 2.3.4.4).




1.4.2 Cognitive Bias


SE practitioners need to obtain information from stakeholders throughout the system life cycle. SE practitioners and stakeholders (individual or groups) are subject to cognitive biases when interpreting uncertain information. The best defense from cognitive biases is understanding what they are and how they can be avoided and setting up organizational projects to obtain unbiased assessments. Cognitive biases are mental errors in judgment under uncertainty caused by our simplified information processing strategies (sometimes called heuristics) and are consistent and predictable (Tversky and Kahneman, 1974). There are many lists of cognitive biases, including one that lists 50 sources (Hallman, 2022). Cognitive biases can affect both individual and teams of SE practitioners (McDermott, et al., 2020). Cognitive biases can contribute to incidents, failures, or disasters as a result of distorted decision making and can lead to undesirable outcomes. Cognitive biases are included in a field called Behavioral Decision-Making. Table 1.5 lists some of the most common cognitive biases.


TABLE 1.5 Common cognitive biases



Cognitive Bias Description Implication for the SE Practitioner.

Framing How we ask the question or describe the decision matters. Carefully word questions and problem description to avoid influencing the response.

Representativeness People draw conclusions based on representative characteristics and often ignore relevant facts or the base rates. Discuss the relevant facts and data before requesting a judgment about an uncertainty or risk. Use Bayes Law to update our beliefs after we receive new data. Teams that reflect Diversity, Equity, and Inclusion principles can help reduce the bias for the team (see Section 5.2).

Availability We place too much weight on vivid, striking, and recent events. Ask about the relevant facts and data before requesting a judgment about an uncertainty or risk. Design systems to provide the relevant data.

Anchoring The initial estimate affects the final estimates. Never begin by asking about the expected outcome. Instead obtain information about the worst or best outcomes first to understand the range of outcomes.

Motivational When making probability judgments, people have incentives to provide estimates that will benefit themselves Understand the potential bias of an individual providing an assessment. For example, a technology developer has an incentive to overestimate technology readiness if a more conservative estimate could result in loss of funding.

Optimism We overestimate the likelihood of good outcomes and underestimate the likelihood bad outcomes. Seek data on similar bad outcomes. Obtain assessments from experts not involved in the decision.

Confirmation We seek or put more weight on data that confirms our beliefs. Actively seek data that would disprove our current belief in all tests and evaluations.

Group Think A group of people make irrational or unsound decisions to suppress dissent and maintain group harmony. Seek dissenting opinions inside the group and seek outside assessments.

Authority We trust and are more often influenced by the opinions of people in positions of authority Assess the opinion independent of the source.

Rankism Assumption that person of higher rank is always correct in decisions Seek to determine correct decision

INCOSE SEH original table created by Jackson and Parnell. Usage per the INCOSE Notices page. All other rights reserved.





For major systems decisions, more formal methods are required to avoid cognitive biases. Both Tversky and Kahneman (1974) and Thaler and Sunstein (2008) describe mitigation methods suitable to different environments. The most effective methods are external group methods. For example, NASA (2003) recommends the Independent Technical Authority (ITA) to warn decision makers of the potential for failure. The ITA must be both financially and organizationally independent of the project manager. Another method, adopted by the aviation industry, is called the Crew Resource Management (CRM) method. With the CRM method, all crew members, including the co-pilot, are responsible for warning the pilot of imminent danger.




1.4.3 Systems Engineering Principles


SE is a relatively young discipline. The emergence of a set of SE principles has occurred over the past 30 years within the discipline. In reviewing various published SE principles, a set of criteria emerged for SE principles. SE principles cover broad application within the practice; they are not constrained to a particular system type, to the system development or operational context, or to a particular life cycle stage. SE principles transcend these system characteristics and inform a worldview of the discipline. Thus, a SE principle:

transcends a particular life cycle model or stage,

transcends system types,

transcends a system context,

informs a world view on SE,

is not a “how to” statement,

is supported by literature or widely accepted by the community (i.e., has proven successful in practice across multiple organizations and multiple system types),

is focused, concise, and clearly worded.



SE principles are a form of guidance proposition which provide guidance in application of the SE processes and a basis for the advancement of SE. SE has many kinds of guidance propositions that can be classified by their sources, e.g., heuristics (derived from practical experience as discussed in Section 1.4.4), conventions (derived from social agreements), values (derived from cultural perspectives), and models (based on theoretical mechanisms). Although these all support purposeful judgment or action in a context, they can vary greatly in scope, authority, and conferred capability. They can all be refined, and as they mature, they gain in their scope, authority, and capability, while the set becomes more compact. A key moment in their evolution occurs with gaining insight into why they work, at which point they become principles. Principles can have their origins associated in referring to them as “heuristic principles,” “social principles,” “cultural principles,” and “scientific principles,” although in practice it is usually sufficient to just refer to them as SE principles. SE principles are derived from principles of these various origins providing a diverse set of transcendent principles based on both practice and theory.

In addition, SE principles differ from systems principles in important ways (Watson, et al., 2019). System principles address the behavior and properties of all kinds of systems, looking at the scientific basis for a system and characterizing this basis in a system context via specialized instances of a general set of system principles. SE principles build on systems principles that are general for all kinds of systems (Rousseau, 2018) (Watson, 2020) and for all kinds of human activity systems (Senge, 1990) (Calvo-Amodio and Rousseau, 2019).

INCOSE compiled an early list of principles consisting of 8 principles and 61 subprinciples in 1993 (Defoe, 1993). These early principles were important considerations recognized in practice for the success of system developments and ultimately became the basis for the SE processes. These early principles were focused on particular aspects of the SE process and particular life cycle stages. The INCOSE work on SE principles considered these earlier sources and compiled a set of SE principles that are transcendent. The INCOSE SE Principles (2022) documents each SE principle with a description, evidence that supports the principle (e.g., observable evidence of the application, proof from scientific evidence), and implications in SE practice for application of the principle. There are presently 15 SE principles and 20 subprinciples as shown in Table 1.6.

These principles provide a start in defining a transcendent disciplinary basis for SE. Application of the principles aids in determining a system life cycle model, implementing SE processes, and defining organizational constructs to help the SE practitioner successfully develop and sustain the SoI.


TABLE 1.6 SE principles and subprinciples



1 SE in application is specific to stakeholder needs, solution space, resulting system solution(s), and context throughout the system life cycle.

2 SE has a holistic system view that includes the system elements and the interactions amongst themselves, the enabling systems, and the system environment.

3 SE influences and is influenced by internal and external resources, and political, economic, social, technological, environmental, and legal factors.

4 Both policy and law must be properly understood to not over-constrain or under-constrain the system implementation.

5 The real system is the perfect representation of the system.

6 A focus of SE is a progressively deeper understanding of the interactions, sensitivities, and behaviors of the system, stakeholder needs, and its operational environment.

Sub-Principle 6(a): Mission context is defined based on the understanding of the stakeholder needs and constraints

Sub-Principle 6(b): Requirements and models reflect the understanding of the system

Sub-Principle 6(c): Requirements are specific, agreed to preferences within the developing organization

Sub-Principle 6(d): Requirements and system design are progressively elaborated as the development progresses

Sub-Principle 6(e): Modeling of systems must account for system interactions and couplings

Sub-Principle 6(f): SE achieves an understanding of all the system functions and interactions in the operational environment

Sub-Principle 6(g): SE achieves an understanding of the system’s value to the system stakeholders

Sub-Principle 6(h): Understanding of the system degrades during operations if system understanding is not maintained.

7 Stakeholder needs can change and must be accounted for over the system life cycle.

8 SE addresses stakeholder needs, taking into consideration budget, schedule, and technical needs, along with other expectations and constraints.

Sub-Principle 8(a): SE seeks a best balance of functions and interactions within the system budget, schedule, technical, and other expectations and constraints.

9 SE decisions are made under uncertainty accounting for risk.

10 Decision quality depends on knowledge of the system, enabling system(s), and interoperating system(s) present in the decision making process.

11 SE spans the entire system life cycle.

Sub-Principle 11(a): SE obtains an understanding of the system

Sub-Principle 11(b): SE defines the mission context (system application)

Sub-Principle 11(c): SE models the system

Sub-Principle 11(d): SE designs and analyzes the system

Sub-Principle 11(e): SE tests the system

Sub-Principle 11(f): SE supports the production of the system

Sub-Principle 11(g): SE supports operations, maintenance, and retirement

12 Complex systems are engineered by complex organizations.

13 SE integrates engineering and scientific disciplines in an effective manner.

14 SE is responsible for managing the discipline interactions within the organization.

15 SE is based on a middle range set of theories.

Sub-Principle 15 (a): SE has a systems theory basis

Sub-Principle 15 (b): SE has a physical logical basis specific to the system

Sub-Principle 15 (c): SE has a mathematical basis

Sub-Principle 15 (d): SE has a sociological basis specific to the organization

From INCOSE SE Principles (2022). Usage per the INCOSE Notices page. All other rights reserved.





1.4.4 Systems Engineering Heuristics


Summary


Heuristics provide a way for an established profession to pass on its accumulated wisdom. This allows practitioners to gain insights from what has been found to work well in the past, and apply the lessons learned. Heuristics usually take the form of short expressions in natural language. These can be memorable phrases encapsulating shortcuts, “rules of thumb,” or “words of the wise,” giving general guidelines on professional conduct or rules, advice, or guidelines on how to act under specific circumstances. Heuristics usually do not express all there is to know, yet they can act as a useful entry point for learning more. At their best, heuristics can act as aids to decision making, value judgments, and assessments.

Interest in SE heuristics currently centers on their use in two contexts: (1) encapsulating engineering knowledge in an accessible form, where the underlying practice is widely accepted and the underlying science understood, and (2) overcoming the limitations of more analytical approaches, where the science is still of limited use. This is especially applicable as we extend the practice of SE to providing solutions to inherently complex, unbounded, ill-structured, or very difficult problems.





Background


Engineering first emerged as a series of skills acquired while transforming the ancient world, principally through buildings, cities, infrastructure, and machines of war. Since then, mankind has sought to capture the knowledge of “how to” to allow each generation to learn from its predecessors, enabling more complex structures to be built with increasing confidence while avoiding repeated real-world failures. For example, early cathedral builders encapsulated their knowledge in a small number of “rules of thumb,” such as “maintain a low center of gravity” and “put 80% of the mass in the pillars.” Designs were conservative, with large margins. When the design margins were exceeded (e.g., out of a desire to build higher and more impressive structures), a high price was sometimes paid, with the collapse of a roof, a tower, or even a whole building. From such failures, new empirical rules emerged. Much of this took place before the science behind the strength of materials or building secure foundations was understood. Only in recent times have computer simulations revealed the contribution toward certain failures played by such dynamic effects as wind shear on tall structures.

Since then, engineering and applied sciences have co-evolved: with science providing the ability to predict and explain performance of engineered artefacts with greater assurance and engineering developing new and more complex systems, requiring new scientific explanations and driving research agendas. In the modern era, complex and adaptive systems are being built which challenge conventional engineering sciences, and we are turning to social and behavioral sciences, management sciences, and increasingly systems science to deal with some of the new forms of complexity involved and guide the profession accordingly.





Current Use


Renewed interest in the application of heuristics to the field of SE stems from the seminal work of Maier and Rechtin (2009), and their book remains the best single published source of such knowledge. Their motivation was to provide guidance for the emerging role of system architect as the person (or team) responsible for coordinating engineering effort toward devising solutions to complex problems and overseeing their implementations. They observed that it was in many cases better to apply heuristics than attempt detailed analysis. The reason for this is the number of variables involved and the complexity of the interactions between stakeholders, internal dynamics of system solutions, and the organizations responsible for their realization. Some examples of SE heuristics are:

Don’t assume that the original statement of the problem is necessarily the best, or even the right one. This has to be handled with tact and respect for the user, but experience shows that failure to reach mutual understanding early on is a fundamental cause of failure, and strong relationships forged in the course of doing such coordination with stakeholders can pay off when solving more difficult issues which might arise later on.

In the early stages of a project, unknowns are a bigger issue than known problems. Sometimes developing a clear understanding of the environment, all of the stakeholders, and the ramifications of possible solutions uncovers many unanticipated issues.

Model before build, wherever possible. System Science postulates “The only complete model of the system in its environment is the system in its environment,” which leads into using evolutionary life cycles, rapid deployment of prototypes, agile life cycles, and so on. This heuristic opens a door into twenty-first-century systems.



A repository of heuristics can act as a knowledge base, especially if media (such as video clips or training materials) or even interactive media (to encourage discussion and feedback) are included. A heuristics repository should link to other established knowledge sources and be tagged with other metadata to allow flexible retrieval. It should be organized to reflect accepted areas of SE competency and allow users to assemble a personal set of heuristics most meaningful to them, being relevant to their professional or personal sphere of activity.