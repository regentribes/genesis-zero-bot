## 1. Introduction

- **1.1 System s Engineering Background**

System s and the processes and practices required to develop them are critical to the operation of the m odern world. The International Council on System s Engineering (INCOSE) defines system s engineering (SE) as an interdisciplinary approach and m eans to enable the realization of successful system s. (INCOSE 2012) SE principles and practices are essential for the development of large, com plex, and/or trustworthysystem s, whether they are products, services, or enterprises. SE enables a contem porary lifestyle thatrelies on high-performance system s in every sector, and affects all aspects of life. M odern designphilosophies dem and system s thinking in order to support the deep integration of technical system s andorganizations required to supply the kinds of services now expected. SE helps ensure that the systemdelivered is a coherent and effective solution to the system need. System s engineers are responsible for ensuring that the right system development tasks are performedso that high-quality systems can be both delivered and sustained. Systems engineers work with a varietyof other professionals to create and support systems throughout their life cycle. These otherprofessionals contribute skills in various engineering disciplines, system s science, and project m anagem ent, am ong m any other fields. The role of the system s engineer includes:

 Understanding the intended purpose, operational context, and concept of use of the proposedsystem.

 Appreciating the interests, purposes, and values of m ultiple stakeholders and com bining theseinto a coherent representation of the system requirem ents.

 Understanding the technology that m ay be applied in the system.  Appreciating the life cycle im plications of system s and incorporating life cycle perspectives intosystem s design.

 Evaluating, selecting, and developing system solutions to satisfy custom er needs and projectobjectives.

The knowledge, skills, abilities, and attitudes (KSAAs) required to perform this role are diverse and maydiffer from those needed in other engineering disciplines. As SE continues to m ature, curricula thatfoster these KSAAs are becom ing critically im portant. Such curricula should enable students to continuetheir professional developm ent after graduation and eventually to m ove into engineering and technicalleadership of large, com plex projects.

- **1.2 System s Engineering Education**

The roots of SE education extend back to the developm ent of SE as a distinct field during the 1950s. A few years later, IEEE Transactions on Education (previously IRE Transactions on Education) published a special issue on SE education, covering a general description of SE programs and a set of the technicalissues confronting engineers at the system level. (W ym ore 1962)

SE education has grown since the 1960s, with many institutions worldwide now offering degreeprogram s in SE at bachelor’s, m aster’s, and doctoral levels. These program s com prise two distinctfamilies: those centered on SE specifically and those centered on an engineering dom ain (such asindustrial, biological, or com puter) com bined with SE. Fabrycky refers to these as “system s-centric” and “dom ain-centric” SE program s, respectively (Fabrycky 2010). The two types of program s have differentprim ary purposes and im pose different requirem ents on the SE aspects of their curriculum , particularlyat the bachelor’s and m aster's levels. The Graduate Reference Curriculum for System s Engineering (GRCSE™) project presents a reference curriculum for system s-centric m aster’s program s. The m aster’s programs most com m only sought by students are professional degree program s focusedon developing or im proving their skills as SE practitioners, as evidenced by Fabrycky (2010), who reportson 31 master’s program s and 14 Ph.D. programs in SE in the US. The popularity of professional m aster’sprogram s in SE has guided the specific focus of GRCSE on these program s to the exclusion of otherprogram s. The m ajority of such students are, at the time of their decision to study in a professional m aster’s program , not focused on progressing through to a doctoral program , although some m ay laterdecide to pursue doctoral studies. M any students in SE m aster’s program s hold bachelor’s degrees inother areas, such as other fields of engineering or science, and approach their master’s program in SE as a career developm ent step. In some cases, the students are recent graduates with a bachelor’s degree;with little or no real-world SE work experience. Their lack of experience is a challenge in realizing theeducational objectives and outcom es identified in GRCSE; this concern is explored in several places inthis docum ent.

- **1.3 Docum ent Purpose**

Despite the im portance of graduate education to today’s system s engineers, there is no comm unityaccepted recommendation or guidance on what to teach graduate students about SE. GRCSE offers a reference curriculum 1 for a professional m aster’s degree in SE to fill this gap. Naturally, GRCSE draws on several earlier efforts. In 2007, INCOSE published a reference curriculumfram ework for a graduate program in SE (Jain and Verm a 2007). This framework was the culmination of a two-year effort by a sm all team to establish a baseline curriculum for a SE graduate program (Squiresand Cloutier 2010). In July 2007, the United States Departm ent of Defense’s (DoD) Office of the Secretary of Defense (OSD) began sponsoring a series of m aster’s-level software and system s curricula. This sponsorship enabled the developm ent of Graduate Software Engineering 2009 (GSwE2009), Version

1.0 (Pyster 2009), which was released in Septem ber 2009, and is now sponsored by the Association for Com puting M achinery (ACM ) and the Institute for Electrical and Electronics Engineers (IEEE) Com puter Society. The prior work has significantly inform ed the present work, GRCSE.

1 A reference curriculum is a set of outcom es, objectives, entrance expectations, architecture, and a body of

knowledge that provides guidance for faculty m em bers who are designing and updating their program s. Thatguidance is intentionally flexible so that faculty m em bers can adopt and adapt it based on local program m aticneeds. A reference curriculum is not intended to be used directly for program accreditation, but certainly caninform faculty m em bers who wish to design a curriculum so their program can eventually be accredited. It is not a standard, nor is it intended to be a foundational docum ent for developing accreditation criteria to beused by accreditation agencies.

GRCSE is written to assist developers of new program s, reviewers of existing program s, prospectivestudents, and prospective em ployers of SE m aster’s program graduates. For each of these stakeholders, GRCSE is a tool to support development, m aintenance, updates, or selection of m aster’s program s in SEto m eet their particular needs. To that end, GRCSE is intended to:

 Enable program developers and m aintainers to im prove existing SE graduate program s from the viewpoint of universities, students, graduates, em ployers, and system s custom ersand users.

 Assist the developm ent of new m aster’s SE program s by providing guidelines on curriculumcontent and advice on im plem entation of those guidelines.

 Provide a fram ework to guide the deliberations of strategic advisory boards, established toassist universities in appropriate program design.

 Support increased enrollm ent in SE program s by increasing the value of those program s topotential students and em ployers.

 Assist in an overall understanding of the diversity of available SE educational program s tosupport prospective students and em ployers in gauging the suitability of a particularprogram for their individual purposes.

 Provide a presentation of system s engineering curriculum that will assist engineeringeducators in general to appreciate the distinctive knowledge and perspectives of system s engineering.

- **1.4 Guidance for Developing GRCSE**

The GRCSE team began by stating principles and assum ptions to guide the work. These are brieflysumm arized:

 SE is a distinct discipline and contains a rich body of knowledge. Therefore the SEBoKserves as an im portant input to GRCSE (BKCASE Editorial Board, 2015).

 SE interacts with other disciplines, som e of which provide im portant foundational conceptsfor SE. These disciplines are integrated into GRCSE as appropriate.

 Existing SE program s are diverse. The GRCSE team conducted a survey of SE m aster’sprogram s that confirm ed that there is considerable diversity am ong existing program s (see Appendix B for sum m ary results of this survey).

 SE is by nature a practical discipline and therefore students m ust learn how to integratetheory and practice. This is discussed in the objectives and outcom es sections of GRCSE (Chapters2 and 3, respectively).

- ***1.4.1 GRCSE Scope***

GRCSE is aim ed at university education leading to a professional m aster’s degree in SE; that is, a degreeintended for som eone who will either enter the workforce as a system s engineer, or who is already inthe workforce and seeks to gain m ore form al education in SE to advance his or her career. GRCSE does

not target graduate program s for those seeking a doctoral degree and a career in research or education,and does not discuss developing a student’s ability to perform research. Rather, GRCSE discussesprogram s that develop skills to perform SE in professional roles. However, since GRCSE is designed to betailored and incorporates freedom for university-specific content, universities may include content forpurposes beyond those for which GRCSE is specifically intended. GRCSE does not address suchextensions, as they are considered out of its scope.

- ***1.4.2 Global Applicability***

GRCSE is designed for worldwide use. Globally, education system s differ significantly, with each countryor region im posing its own regulatory environm ent and cultural norm s. Regulations and culture m ay:

 Constrain the nature of program s that can be offered at the m aster’s level or course offerings orsom e other aspect of program s.

 Influence students’ decisions as to whether to proceed directly from undergraduate to m aster’slevel studies or to gain some career experience between the two education stages.

 Influence the choice and acceptability of face-to-face, online, or hybrid delivery.  Affect the administrative decom position of program s.

- ***1.4.3 Accounting for M ultiple Education Pathways***

The perm utations of education program responses to regulation and culture are too numerous anddiverse for a reference curriculum to m eaningfully respond to each. The diversity of possible educationpathways is illustrated in Figure 1.
