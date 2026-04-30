SYSTEMS ENGINEERING HANDBOOK





A GUIDE FOR SYSTEM LIFE CYCLE PROCESSES AND ACTIVITIES


FIFTH EDITION

INCOSE–TP–2003–002–05

2023

Prepared by:

International Council on Systems Engineering (INCOSE)

7670 Opportunity Rd, Suite 220

San Diego, CA, USA 92111-2222

Compiled and Edited by:

DAVID D. WALDEN, ESEP – EDITOR-IN-CHIEF – AMERICAS SECTOR

THOMAS M. SHORTELL, CSEP – DEPUTY EDITOR-IN-CHIEF – AMERICAS SECTOR

GARRY J. ROEDLER, ESEP – EDITOR – AMERICAS SECTOR

BERNARDO A. DELICADO, ESEP – EDITOR – EMEA SECTOR

ODILE MORNAS, ESEP – EDITOR – EMEA SECTOR

YIP YEW-SENG, CSEP – EDITOR – ASIA OCEANIA SECTOR

DAVID ENDLER, ESEP – EDITOR – EMEA SECTOR





This edition first published 2023

© 2023 John Wiley & Sons Ltd.

Edition History

Fourth edition, 2015

All rights reserved. No part of this publication may be reproduced, stored in a retrieval system, or transmitted, in any form or by any means, electronic, mechanical, photocopying, recording or otherwise, except as permitted by law. Advice on how to obtain permission to reuse material from this title is available at http://www.wiley.com/go/permissions.

The right of INCOSE; David Walden to be identified as the editorial material in this work has been asserted in accordance with law.

Registered Offices

John Wiley & Sons, Inc., 111 River Street, Hoboken, NJ 07030, USA

John Wiley & Sons Ltd, The Atrium, Southern Gate, Chichester, West Sussex, PO19 8SQ, UK

For details of our global editorial offices, customer services, and more information about Wiley products visit us at www.wiley.com.

Wiley also publishes its books in a variety of electronic formats and by print-on-demand. Some content that appears in standard print versions of this book may not be available in other formats.

Trademarks: Wiley and the Wiley logo are trademarks or registered trademarks of John Wiley & Sons, Inc. and/or its affiliates in the United States and other countries and may not be used without written permission. All other trademarks are the property of their respective owners. John Wiley & Sons, Inc. is not associated with any product or vendor mentioned in this book.

Limit of Liability/Disclaimer of Warranty

While the publisher and authors have used their best efforts in preparing this work, they make no representations or warranties with respect to the accuracy or completeness of the contents of this work and specifically disclaim all warranties, including without limitation any implied warranties of merchantability or fitness for a particular purpose. No warranty may be created or extended by sales representatives, written sales materials or promotional statements for this work. This work is sold with the understanding that the publisher is not engaged in rendering professional services. The advice and strategies contained herein may not be suitable for your situation. You should consult with a specialist where appropriate. The fact that an organization, website, or product is referred to in this work as a citation and/or potential source of further information does not mean that the publisher and authors endorse the information or services the organization, website, or product may provide or recommendations it may make. Further, readers should be aware that websites listed in this work may have changed or disappeared between when this work was written and when it is read. Neither the publisher nor authors shall be liable for any loss of profit or any other commercial damages, including but not limited to special, incidental, consequential, or other damages.

Library of Congress Cataloging-in-Publication Data

Names: Walden, David D., editor. | International Council on Systems Engineering, editor.

Title: INCOSE systems engineering handbook / edited by INCOSE, David Walden.

Description: Fifth edition. | Hoboken, NJ : John Wiley & Sons Ltd., [2023] | Includes index.

Identifiers: LCCN 2023022915 | ISBN 9781119814290 (paperback) | ISBN 9781119814306 (adobe pdf) | ISBN 9781119814313 (epub)

Subjects: LCSH: Systems engineering--Handbooks, manuals, etc. | Product life cycle--Handbooks, manuals, etc.

Classification: LCC TA168 .I444 2023 | DDC 620/.0042--dc23/eng/20230525

LC record available at https://lccn.loc.gov/2023022915

Cover Design: Wiley

Cover Images: © DANNY HU/Getty Images, © Zero Creatives/Getty Images, © Stebenkov Roman/Shutterstock, © Phonlamai Photo/Shutterstock, © MNBB Studio/Shutterstock, © Titima Ongkantong/Shutterstock

Set in 10/12pt TimesLTStd by Integra Software Services Pvt. Ltd., Pondicherry, India





Contents


Cover

Title Page

Copyright Page

INCOSE Notices

History of Changes

List of Figures

List of Tables

Preface

1 Systems Engineering Introduction 1.1 What Is Systems Engineering?

1.2 Why Is Systems Engineering Important?

1.3 Systems Concepts 1.3.1 System Boundary and the System of Interest (SoI)

1.3.2 Emergence

1.3.3 Interfacing Systems, Interoperating Systems, and Enabling Systems

1.3.4 System Innovation Ecosystem

1.3.5 The Hierarchy within a System

1.3.6 Systems States and Modes

1.3.7 Complexity





1.4 Systems Engineering Foundations 1.4.1 Uncertainty

1.4.2 Cognitive Bias

1.4.3 Systems Engineering Principles

1.4.4 Systems Engineering Heuristics





1.5 System Science and Systems Thinking





2 System Life Cycle Concepts, Models, and Processes 2.1 Life Cycle Terms and Concepts 2.1.1 Life Cycle Characteristics

2.1.2 Typical Life Cycle Stages

2.1.3 Decision Gates

2.1.4 Technical Reviews and Audits





2.2 Life Cycle Model Approaches 2.2.1 Sequential Methods

2.2.2 Incremental Methods

2.2.3 Evolutionary Methods





2.3 System Life Cycle Processes 2.3.1 Introduction to the System Life Cycle Processes 2.3.1.1 Format and Conventions

2.3.1.2 Concurrency, Iteration, and Recursion





2.3.2 Agreement Processes 2.3.2.1 Acquisition Process

2.3.2.2 Supply Process





2.3.3 Organizational Project-Enabling Processes 2.3.3.1 Life Cycle Model Management Process

2.3.3.2 Infrastructure Management Process

2.3.3.3 Portfolio Management Process

2.3.3.4 Human Resource Management Process

2.3.3.5 Quality Management Process

2.3.3.6 Knowledge Management Process





2.3.4 Technical Management Processes 2.3.4.1 Project Planning Process

2.3.4.2 Project Assessment and Control Process

2.3.4.3 Decision Management Process

2.3.4.4 Risk Management Process

2.3.4.5 Configuration Management Process

2.3.4.6 Information Management Process

2.3.4.7 Measurement Process

2.3.4.8 Quality Assurance Process





2.3.5 Technical Processes 2.3.5.1 Business or Mission Analysis Process

2.3.5.2 Stakeholder Needs and Requirements Definition Process

2.3.5.3 System Requirements Definition Process

2.3.5.4 System Architecture Definition Process

2.3.5.5 Design Definition Process

2.3.5.6 System Analysis Process

2.3.5.7 Implementation Process

2.3.5.8 Integration Process

2.3.5.9 Verification Process

2.3.5.10 Transition Process

2.3.5.11 Validation Process

2.3.5.12 Operation Process

2.3.5.13 Maintenance Process

2.3.5.14 Disposal Process





3 Life Cycle Analyses and Methods 3.1 Quality Characteristics and Approaches 3.1.1 Introduction to Quality Characteristics

3.1.2 Affordability Analysis

3.1.3 Agility Engineering

3.1.4 Human Systems Integration

3.1.5 Interoperability Analysis

3.1.6 Logistics Engineering

3.1.7 Manufacturability/Producibility Analysis

3.1.8 Reliability, Availability, Maintainability Engineering

3.1.9 Resilience Engineering

3.1.10 Sustainability Engineering

3.1.11 System Safety Engineering

3.1.12 System Security Engineering

3.1.13 Loss-Driven Systems Engineering





3.2 Systems Engineering Analyses and Methods 3.2.1 Modeling, Analysis, and Simulation

3.2.2 Prototyping

3.2.3 Traceability

3.2.4 Interface Management

3.2.5 Architecture Frameworks

3.2.6 Patterns

3.2.7 Design Thinking

3.2.8 Biomimicry





4 Tailoring and Application Considerations 4.1 Tailoring Considerations

4.2 SE Methodology/Approach Considerations 4.2.1 Model-Based SE

4.2.2 Agile Systems Engineering

4.2.3 Lean Systems Engineering

4.2.4 Product Line Engineering (PLE)





4.3 System Types Considerations 4.3.1 Greenfield/Clean Sheet Systems

4.3.2 Brownfield/Legacy Systems

4.3.3 Commercial-off-the-Shelf (COTS)-Based Systems

4.3.4 Software-Intensive Systems

4.3.5 Cyber-Physical Systems (CPS)

4.3.6 Systems of Systems (SoS)

4.3.7 Internet of Things (IoT)/Big Data-Driven Systems

4.3.8 Service Systems

4.3.9 Enterprise Systems





4.4 Application of Systems Engineering for Specific Product Sector or Domain Application 4.4.1 Automotive Systems

4.4.2 Biomedical and Healthcare Systems

4.4.3 Commercial Aerospace Systems

4.4.4 Defense Systems

4.4.5 Infrastructure Systems

4.4.6 Oil and Gas Systems

4.4.7 Power & Energy Systems

4.4.8 Space Systems

4.4.9 Telecommunication Systems

4.4.10 Transportation Systems





5 Systems Engineering in Practice 5.1 Systems Engineering Competencies 5.1.1 Difference between Hard and Soft Skills

5.1.2 System Engineering Professional Competencies

5.1.3 Technical Leadership

5.1.4 Ethics





5.2 Diversity, Equity, and Inclusion

5.3 Systems Engineering Relationships to Other Disciplines 5.3.1 SE and Software Engineering (SWE)

5.3.2 SE and Hardware Engineering (HWE)

5.3.3 SE and Project Management (PM)

5.3.4 SE and Industrial Engineering (IE)

5.3.5 SE and Operations Research (OR)





5.4 Digital Engineering

5.5 Systems Engineering Transformation

5.6 Future of SE





6 Case Studies 6.1 Case 1: Radiation Therapy—the Therac-25

6.2 Case 2: Joining Two Countries—the Øresund Bridge

6.3 Case 3: Cybersecurity Considerations in Systems Engineering—the Stuxnet Attack on a Cyber-Physical System

6.4 Case 4: Design for Maintainability—Incubators

6.5 Case 5: Artificial Intelligence in Systems Engineering—Autonomous Vehicles

6.6 Other Case Studies





Appendix A: References

Appendix B: Acronyms

Appendix C: Terms and Definitions

Appendix D: N2 Diagram of Systems Engineering Processes

Appendix E: Input/Output Descriptions

Appendix F: Acknowledgments

Appendix G: Comment Form

Index

End User License Agreement





List of Tables


CHAPTER 01 TABLE 1.1 SE standards and...

TABLE 1.2 SE return on...

TABLE 1.3 Examples for systems...

TABLE 1.4 Sources of system...

TABLE 1.5 Common cognitive biases...

TABLE 1.6 SE principles and...





CHAPTER 02 TABLE 2.1 Representative technical reviews...

TABLE 2.2 Life cycle model...

TABLE 2.3 Eight Attributes of...

TABLE 2.4 Partial list of...

TABLE 2.5 Measurement benefits...

TABLE 2.7 Requirement statement characteristics...

TABLE 2.8 Requirement set characteristics...

TABLE 2.9 Requirement attributes...

TABLE 3.2 HSI perspective descriptions...

TABLE 3.3 Resilience considerations...





CHAPTER 04 TABLE 4.1 Considerations of greenfield...

TABLE 4.2 Considerations for COTS...

TABLE 4.3 SoS types...

TABLE 4.5 Comparison of automotive...

TABLE 4.6 Representative organizations and...

TABLE 4.7 Infrastructure and SE...





CHAPTER 05 TABLE 5.1 Differences between the...

TABLE 5.2 Technical leadership mode..





List of Illustrations


APPENDIX 04 FIGURE D.1 Input/output relationships......





CHAPTER 01 FIGURE 1.1 Acceleration of design...

FIGURE 1.2 Cost and schedule...

FIGURE 1.3 Project performance versus...

FIGURE 1.4 Life cycle costs...

FIGURE 1.5 Emergence...

FIGURE 1.7 Hierarchy within a...

FIGURE 1.8 An architectural framework...





CHAPTER 02 FIGURE 2.1 System life cycle...

FIGURE 2.2 Generic life cycle...

FIGURE 2.3 Criteria for decision...

FIGURE 2.4 Relationship between technical...

FIGURE 2.5 Concepts for the...

FIGURE 2.6 The SE Vee...

FIGURE 2.7 The Incremental Commitment...

FIGURE 2.8 DevSecOps...

FIGURE 2.10 System life cycle...

FIGURE 2.11 Sample IPO diagram...

FIGURE 2.12 Concurrency, iteration, and...

FIGURE 2.13 IPO diagram for...

FIGURE 2.14 IPO diagram for...

FIGURE 2.15 IPO diagram for...

FIGURE 2.16 IPO diagram for...

FIGURE 2.17 IPO diagram for...

FIGURE 2.18 Requirements across the...

FIGURE 2.19 IPO diagram for...

FIGURE 2.20 IPO diagram for..s

FIGURE 2.21 QM Values and...

FIGURE 2.22 IPO diagram for...

FIGURE 2.23 IPO diagram for...

FIGURE 2.24 The breakdown structures...

FIGURE 2.25 IPO diagram for...

FIGURE 2.26 IPO diagram for...

FIGURE 2.27 IPO diagram for...

FIGURE 2.28 Level of risk...

FIGURE 2.29 Intelligent management of...

FIGURE 2.30 Typical relationship among...

FIGURE 2.31 IPO diagram for...

FIGURE 2.32 IPO diagram for...

FIGURE 2.33 IPO diagram for...

FIGURE 2.34 Integration of Measurement...

FIGURE 2.35 Relationship of product...

FIGURE 2.36 TPM monitoring...

FIGURE 2.38 Technical Processes in...

FIGURE 2.39 IPO diagram for...

FIGURE 2.40 IPO diagram for...

FIGURE 2.41 IPO diagram for...

FIGURE 2.42 IPO diagram for...

FIGURE 2.43 Core architecture processes...

FIGURE 2.44 IPO diagram for...

FIGURE 2.45 Taxonomy of system...

FIGURE 2.46 IPO diagram for...

FIGURE 2.47 IPO diagram for...

FIGURE 2.48 IPO diagram for...

FIGURE 2.49 IPO diagram for...

FIGURE 2.50 Verification per level...

FIGURE 2.51 IPO diagram for...

FIGURE 2.52 IPO diagram for...

FIGURE 2.53 Validation per level...

FIGURE 2.54 IPO diagram for...

FIGURE 2.55 IPO diagram for...

FIGURE 2.56 IPO diagram for...





CHAPTER 03 FIGURE 3.1 Quality characteristic approaches...

FIGURE 3.2 System operational effectiveness...

FIGURE 3.3 Cost versus performance...

FIGURE 3.4 Life cycle cost...

FIGURE 3.5 HSI technology, organization...

FIGURE 3.6 Interaction between system...

FIGURE 3.7 Timewise values of...

FIGURE 3.8 Schematic view of...

FIGURE 3.9 System development with...

FIGURE 3.10 Illustrative model taxonomy...

FIGURE 3.11 Model-based integration...

FIGURE 3.12 Multidisciplinary MA&...

FIGURE 3.13 Sample N-squared...

FIGURE 3.14 Sample coupling matrix..

FIGURE 3.15 Unified Architecture Method...

FIGURE 3.16 Enterprise and product...

FIGURE 3.17 S*Pattern class...

FIGURE 3.18 Examples of natural...





CHAPTER 04 FIGURE 4.1 Tailoring requires balance...

FIGURE 4.2 IPO diagram for...

FIGURE 4.3 SE life cycle...

FIGURE 4.4 Agile SE life...

FIGURE 4.5 Feature-based PLE...

FIGURE 4.6 Schematic diagram of...

FIGURE 4.7 The relationship between...

FIGURE 4.8 Example of the...

FIGURE 4.9 Service system conceptual...

FIGURE 4.10 Organizations manage resources...

FIGURE 4.11 Individual competence leads...

FIGURE 4.12 Enterprise state changes...





CHAPTER 05 FIGURE 5.1 The “T...

FIGURE 5.2 Technical leadership is...

FIGURE 5.3 Categorized dimensions of...

FIGURE 5.4 The intersection between...

FIGURE 5.5 IE and SE...





CHAPTER 06 FIGURE 6.1 Timeline of vehicle...





INCOSE NOTICES




This International Council on Systems Engineering (INCOSE) Technical Product was prepared by the INCOSE Systems Engineering Handbook Team. It is approved by the INCOSE Technical Operations Leadership for release as an INCOSE Technical Product.

Copyright ©2023 by INCOSE, subject to the following restrictions:

Author Use: Authors have full rights to use their contributions in a totally unfettered way with credit to the INCOSE technical source, except as noted in the following text. Abstraction is permitted with credit to the source.

INCOSE Use: Permission to reproduce and use this document or parts thereof by members of INCOSE and to prepare derivative works from this document for INCOSE use is granted, with attribution to INCOSE and the original author(s) where practical, provided this copyright notice is included with all reproductions and derivative works. Content from ISO/IEC/IEEE 15288 and ISO/IEC TR 24748‐1 is used by permission and is not to be reproduced other than as part of this total document.

External Use: This document may not be shared or distributed to any non‐INCOSE third party. Requests for permission to reproduce this document in whole or in part, or to prepare derivative works of this document for external and/or commercial use should be addressed to the INCOSE Central Office, 7670 Opportunity Road, Suite 220, San Diego, CA 92111‐2222, USA.

Electronic Version Use: Any electronic version of this document is to be used for personal, professional use only and is not to be placed on a non‐INCOSE sponsored server for general use.

Any additional use of these materials must have written approval from the INCOSE Central.

General Citation Guidelines: References to this handbook should be formatted as follows, with appropriate adjustments for formally recognized styles:

INCOSE SEH (2023). Systems Engineering Handbook: A Guide for System Life Cycle Process and Activities (5th ed.). D. D. Walden, T. M. Shortell, G. J. Roedler, B. A. Delicado, O. Mornas, Yip Y. S., and D. Endler (Eds.). San Diego, CA: International Council on Systems Engineering. Published by John Wiley & Sons, Inc.





lang="en"

xmlns="http://www.w3.org/1999/xhtml"

xmlns:epub="http://www.idpf.org/2007/ops">





HISTORY OF CHANGES





Revision Revision date Change description and rationale

Original Jun 1994 Draft Systems Engineering Handbook (SEH) created by INCOSE members from several defense/aerospace companies—including Lockheed, TRW, Northrop Grumman, Ford Aerospace, and the Center for Systems Management—for INCOSE review.

1.0 Jan 1998 Initial SEH release approved to update and broaden coverage of SE process. Included broad participation of INCOSE members as authors. Based on Interim Standards EIA 632 and IEEE 1220.

2.0 Jul 2000 Expanded coverage on several topics, such as functional analysis. This version was the basis for the development of the Certified Systems Engineering Professional (CSEP) exam.

2.0A Jun 2004 Reduced page count of SEH v2 by 25% and reduced the US DoD‐centric material wherever possible. This version was the basis for the first publicly offered CSEP exam.

3.0 Jun 2006 Significant revision based on ISO/IEC 15288:2002. The intent was to create a country‐ and domain-neutral handbook. Significantly reduced the page count, with elaboration to be provided in appendices posted online in the INCOSE Product Asset Library (IPAL).

3.1 Aug 2007 Added detail that was not included in SEH v3, mainly in new appendices. This version was the basis for the updated CSEP exam.

3.2 Jan 2010 Updated version based on ISO/IEC/IEEE 15288:2008. Significant restructuring of the handbook to consolidate related topics.

3.2.1 Jan 2011 Clarified definition material, architectural frameworks, concept of operations references, risk references, and editorial corrections based on ISO/IEC review.

3.2.2 Oct 2011 Correction of errata introduced by revision 3.2.1.

4.0 Jul 2015 Significant revision based on ISO/IEC/IEEE 15288:2015, inputs from the relevant INCOSE working groups (WGs), and to be consistent with the Guide to the Systems Engineering Body of Knowledge (SEBoK).

5.0 Jul 2023 Significant revision based on ISO/IEC/IEEE 15288:2023 and inputs from the relevant INCOSE working groups (WGs). Significant restructuring of the handbook based inputs from INCOSE stakeholders.





LIST OF FIGURES




1.1 Acceleration of design to market life cycle has prompted development of more automated design methods and tools

1.2 Cost and schedule overruns correlated with SE effort

1.3 Project performance versus SE capability

1.4 Life cycle costs and defect costs against time

1.5 Emergence

1.6 System innovation ecosystem pattern

1.7 Hierarchy within a system

1.8 An architectural framework for the evolving the SE discipline

2.1 System life cycle stages

2.2 Generic life cycle stages compared to other life cycle viewpoints

2.3 Criteria for decision gates

2.4 Relationship between technical reviews and audits and the technical baselines

2.5 Concepts for the three life cycle model approaches

2.6 The SE Vee model

2.7 The Incremental Commitment Spiral Model (ICSM)

2.8 DevSecOps

2.9 Asynchronous iterations and increments across agile mixed discipline engineering

2.10 System life cycle processes per ISO/IEC/IEEE 15288

2.11 Sample IPO diagram for SE processes

2.12 Concurrency, iteration, and recursion

2.13 IPO diagram for the Acquisition process

2.14 IPO diagram for the Supply process

2.15 IPO diagram for Life Cycle Model Management process

2.16 IPO diagram for Infrastructure Management process

2.17 IPO diagram for Portfolio Management process

2.18 Requirements across the portfolio, program, and project domains

2.19 IPO diagram for Human Resource Management process

2.20 IPO diagram for the Quality Management process

2.21 QM Values and Skills Integration

2.22 IPO diagram for Knowledge Management process

2.23 IPO diagram for Project Planning process

2.24 The breakdown structures

2.25 IPO diagram for Project Assessment and Control process

2.26 IPO diagram for the Decision Management process

2.27 IPO diagram for Risk Management process

2.28 Level of risk depends upon both likelihood and consequence

2.29 Intelligent management of risks and opportunities

2.30 Typical relationship among the risk categories

2.31 IPO diagram for Configuration Management process

2.32 IPO diagram for Information Management process

2.33 IPO diagram for Measurement process

2.34 Integration of Measurement, Risk Management, and Decision Management processes

2.35 Relationship of product-oriented measures

2.36 TPM monitoring

2.37 IPO diagram for the Quality Assurance process

2.38 Technical Processes in context

2.39 IPO diagram for Business or Mission Analysis process

2.40 IPO diagram for Stakeholder Needs and Requirements Definition process

2.41 IPO diagram for System Requirements Definition process

2.42 IPO diagram for System Architecture Definition process

2.43 Core architecture processes

2.44 IPO diagram for Design Definition process

2.45 Taxonomy of system analysis dimensions

2.46 IPO diagram for System Analysis process

2.47 IPO diagram for Implementation process

2.48 IPO diagram for Integration process

2.49 IPO diagram for Verification process

2.50 Verification per level

2.51 IPO diagram for Transition process

2.52 IPO diagram for Validation process

2.53 Validation per level

2.54 IPO diagram for Operation process

2.55 IPO diagram for Maintenance process

2.56 IPO diagram for Disposal process

3.1 Quality characteristic approaches across the life cycle

3.2 System operational effectiveness

3.3 Cost versus performance

3.4 Life cycle cost elements

3.5 HSI technology, organization, people within an environment

3.6 Interaction between system, environment, operating conditions, and failure modes and failure mechanisms

3.7 Timewise values of notional resilience scenario parameters

3.8 Schematic view of a generic MA&S process

3.9 System development with early, iterative V&V and integration, via modeling, analysis, and simulation

3.10 Illustrative model taxonomy (non-exhaustive)

3.11 Model-based integration across multiple disciplines using a hub-and-spokes pattern

3.12 Multidisciplinary MA&S coordination along the life cycle

3.13 Sample N-squared diagram

3.14 Sample coupling matrix showing: (a) Initial arrangement of aggregates; (b) final arrangement after reorganization

3.15 Unified Architecture Method

3.16 Enterprise and product frameworks

3.17 S*Pattern class hierarchy

3.18 Examples of natural systems applications and biomimicry

4.1 Tailoring requires balance between risk and process

4.2 IPO diagram for Tailoring process

4.3 SE life cycle spectrum

4.4 Agile SE life cycle model

4.5 Feature-based PLE factory

4.6 Schematic diagram of the operation of a Cyber-Physical System

4.7 The relationship between Cyber-Physical Systems (CPS), Systems of Systems (SoSs), and an Internet of Things (IoT)

4.8 Example of the systems and systems of systems within a transport system of systems

4.9 Service system conceptual framework

4.10 Organizations manage resources to create enterprise value

4.11 Individual competence leads to organizational, system, and operational capability

4.12 Enterprise state changes through work process activities

5.1 The “T-shaped” SE practitioner. From Delicado, et al. (2018). Used with permission. All other rights reserved.

5.2 Technical leadership is the intersection of technical expertise and leadership skills

5.3 Categorized dimensions of diversity

5.4 The intersection between PM and SE

5.5 IE and SE relationships

6.1 Timeline of vehicle impact

D.1 Input/output relationships between the various SE processes





LIST OF TABLES




1.1 SE standards and guides

1.2 SE return on investment

1.3 Examples for systems interacting with the SoI

1.4 Sources of system uncertainty

1.5 Common cognitive biases

1.6 SE principles and subprinciples

2.1 Representative technical reviews and audits

2.2 Life cycle model approach characteristics

2.3 Eight Attributes of a Quality Management Culture

2.4 Partial list of decision situations (opportunities) throughout the life cycle

2.5 Measurement benefits

2.6 Measurement references for specific measurement focuses

2.7 Requirement statement characteristics

2.8 Requirement set characteristics

2.9 Requirement attributes

3.1 Quality Characteristic approaches

3.2 HSI perspective descriptions

3.3 Resilience considerations

3.4 Implementation process breakout

4.1 Considerations of greenfield and brownfield development efforts

4.2 Considerations for COTS-based development efforts

4.3 SoS types

4.4 Impact of SoS considerations on the SE processes

4.5 Comparison of automotive, aerospace/defense, and consumer electronics domains

4.6 Representative organizations and standards in the automotive industry

4.7 Infrastructure and SE definition correlation

5.1 Differences between the hard skills and soft skills

5.2 Technical leadership model





PREFACE




The objective of the International Council on Systems Engineering (INCOSE) Systems Engineering Handbook (SEH) is to describe key Systems Engineering (SE) process activities. The intended audience is the SE practitioner. When the term “SE practitioner” is used in this handbook, it includes the new SE practitioner, a product engineer, an engineer in another discipline who needs to perform SE, or an experienced SE practitioner who needs a convenient reference.

The descriptions in this handbook show what each SE process activity entails, in the context of designing for required performance and life cycle considerations. On some projects, a given activity may be performed very informally; on other projects, it may be performed very formally, with interim products under formal configuration control. This document is not intended to advocate any level of formality as necessary or appropriate in all situations. The appropriate degree of formality in the execution of any SE process activity is determined by the following:

The need for communication of what is being done (across members of a project team, across organizations, or over time to support future activities) The level of uncertainty

The degree of complexity

The consequences to human welfare



On smaller projects, where the span of required communications is small (few people and short project life cycle) and the cost of rework is low, SE activities can be conducted very informally and thus at low cost. On larger projects, where the span of required communications is large (many teams that may span multiple geographic locations and organizations and long project life cycle) and the cost of failure or rework is high, increased formality can significantly help in achieving project opportunities and in mitigating project risk.

In a project environment, work necessary to accomplish project objectives is considered “in scope”; all other work is considered “out of scope.” On every project, “thinking” is always “in scope.” Thoughtful tailoring and intelligent application of the SE processes described in this handbook are essential to achieve the proper balance between the risk of missing project technical and business objectives on the one hand and process paralysis on the other hand. Part IV provides tailoring and application guidance to help achieve that balance.





APPROVED FOR THE INCOSE SEH FIFTH EDITION:


Christopher D. Hoffman, CSEP, INCOSE Technical Director, January 2021-January 2023

Olivier Dessoude, INCOSE Technical Director, January 2023-January 2025

Theodore J. Ferrell, INCOSE Assistant Director, Technical Review, January 2021-January 2023

Krystal Porter, INCOSE Assistant Director, Technical Review, January 2023-January 2025

Lori F. Zipes, ESEP, INCOSE Assistant Director, Technical Information, January 2022-January 2024

Tony Williams, ESEP, INCOSE Assistant Director, Product Champion, January 2022-January 2025





HOW TO USE THIS HANDBOOK





PURPOSE


This handbook defines the “state-of-the-good-practice” for the discipline of Systems Engineering (SE) and provides an authoritative reference to understand the SE discipline in terms of content and practice.





APPLICATION


This handbook is consistent with ISO/IEC/IEEE 15288 (2023), Systems and software engineering—System life cycle processes, hereafter referred to as ISO/IEC/IEEE 15288, to ensure its usefulness across a wide range of application domains for engineered systems and products, as well as services. ISO/IEC/IEEE 15288 is an international standard that provides system life cycle process outcomes, activities, and tasks, whereas this handbook further elaborates on the activities and practices necessary to execute the processes.

This handbook is also consistent with the Guide to the Systems Engineering Body of Knowledge, hereafter referred to as the SEBoK (2023), to the extent practicable. In many places, this handbook points readers to the SEBoK for more detailed coverage of the related topics, including a current and vetted set of references. The SEBoK also includes coverage of “state-of-the-art” in SE.

For organizations that do not follow the principles of ISO/IEC/IEEE 15288 or the SEBoK to specify their life cycle processes, this handbook can serve as a reference to practices and methods that have proven beneficial to the SE community at large and that can add significant value in new domains, if appropriately selected, tailored, and applied. Part IV provides top-level guidance on the application of SE in selected product sectors and domains.

Before applying this handbook in a given organization or on a given project, it is recommended that the tailoring guidelines in Part IV be used to remove conflicts with existing policies, procedures, and standards already in use within an organization. Not every process will apply universally. Careful selection from the material is recommended. Reliance on process over progress will not deliver a system. Processes and activities in this handbook do not supersede any international, national, or local laws or regulations.





USAGE


This handbook was developed to support the users and use cases shown in Table 0.1. Primary users are those who will use the handbook directly. Secondary users are those who will typically use the handbook with assistance from SE practitioners. Other users and use cases are possible.


TABLE 0.1 Handbook users and use cases



User Type Use cases

Seasoned SE Practitioner. Those who need to reinforce, refresh, and renew their SE knowledge Primary Adapt or refer to handbook to suit individual applicability

Explore good practices

Identify blind spots or gaps by providing a good checklist to ensure necessary coverage

References to other sources for more in-depth understanding





Novice SE Practitioner: Those who need to start using SE Primary Support structured, coherent, and comprehensive learning

Understand the scope (breadth and depth) of systems thinking and SE practices





INCOSE Certification: Systems Engineering Professional (SEP) certifiers and those being certified Primary Define body of knowledge for SEP certification

Form the basis of the SEP examination





SE Educators: Those who develop and teach SE courses, including universities and trainers Primary Support structured, coherent, and comprehensive learning

Suggest relevant SE topics to trainers for their course content

Serve as a supplemental teaching aid





SE Tool Providers/Vendors: Those who provide tools and methods to support SE practitioners Primary Suggest tools, methods, or other solutions to be developed that help practitioners in their work





Prospective SE Practitioner or Manager: Those who may be interested in pursuing a career in SE or who need to be aware of SE practices Secondary Provide an entry level survey to understand what SE is about to someone who has a basic technical or engineering background





Interactors: Those who perform in disciplines that exchange (consume and/or produce) information with SE practitioners Secondary Understand basic terminologies, scope, structure, and value of SE

Understand the role of the SE practitioner and their relationship to others in a project or an organization





INCOSE SEH original table created by Yip. Usage per the INCOSE Notices page. All other rights reserved.





ORGANIZATION AND STRUCTURE


As shown in Figure 0.1, this handbook is organized into six major parts, plus appendices.


FIGURE 0.1 Handbook structure. INCOSE SEH original figure created by Mornas. Usage per the INCOSE Notices page. All other rights reserved.





Systems Engineering Introduction (Part I) provides foundational SE concepts and principles that underpin all other parts. It includes the what and why of SE and why it is important, key definitions, systems science and systems thinking, and SE principles and concepts.

System Life Cycle Concepts, Models, and Processes (Part II) describes an informative life cycle model with six stages: concept, development, production, utilization, support, and retirement. It also describes a set of life cycle processes to support SE consistent with the four process groups of ISO/IEC/IEEE 15288: Agreement Processes, Organizational Project Enabling Processes, Technical Management Processes, and Technical Processes.

Life Cycle Analyses and Methods (Part III) describes a set of quality characteristics approaches that need to be considered across the system life cycle. This part also describes methods that can apply across all processes, reflecting various aspects of the concurrent, iterative, and recursive nature of SE.

Tailoring and Application Considerations (Part IV) describes information on how to tailor (adapt and scale) the SE processes. It also introduces various considerations to view and apply SE: SE methodologies and approaches, system types, and project sectors and domains.

Systems Engineering in Practice (Part V) describes SE competencies, diversity, equity, and inclusion, SE relationship to other disciplines, SE transformation, and insight into the future of SE.

Case Studies (Part VI) describes several case studies that are used throughout the handbook to reinforce the SE principles and concepts.

Appendix A contains a list of references used in this handbook. Appendices B and C provide a list of acronyms and a glossary of SE terms and definitions, respectively. Appendix D provides an N2 diagram of the SE life cycle processes showing an example of the dependencies that exist in the form of shared inputs or outputs. Appendix E provides a list of all the typical inputs/outputs identified for each SE life cycle process. Appendix F acknowledges the various contributors to this handbook. Errors, omissions, and other suggestions for this handbook can be submitted to the INCOSE using instructions found in Appendix G.





SYMBOLOGY


As described in Section 2.3.1.2, SE is a concurrent, iterative, and recursive process. The following symbology is used throughout this handbook to reinforce these concepts





Concurrency is indicated by the parallel lines.

Iteration is indicated by the circular arrows.





Recursion is indicated by the down and up arrows.





TERMINOLOGY


One of the SE practitioner’s first and most important responsibilities on a project is to establish nomenclature and terminology that support clear, unambiguous communication and definition of the system and its elements, functions, operations, and associated processes. Further, to promote the advancement of the field of SE throughout the world, it is essential that common definitions and understandings be established regarding general methods and terminology that in turn support common processes. As more SE practitioners accept and use common terminology, SE will experience improvements in communications, understanding, and, ultimately, productivity.

The glossary of terms used throughout this book (see Appendix C) is based on the definitions found in ISO/IEC/IEEE 15288; ISO/IEC/IEEE 24765 (2017); and the SEBoK.





1