# Untp United Nations Transparency Protocol And Digital Product Passports

The United Nations Transparency Protocol (UNTP) is a foundational framework for exchanging trusted supply chain data.
It provides open global specifications for digital credentials that enable supply chain transparency.
UNTP serves as the back-end engine for transparency.
It provides a universal language for data ensuring interoperability across diverse global supply chains and regulatory environments.

UNTP is based on UN Policy Recommendation No. 49 (Transparency at Scale).
Recommendation 49 was developed in response to demand for policy action to enhance trust in sustainability information.
UN/CEFACT Plenary Member States adopted Recommendation No. 49 in July 2025.
The UNTP is the practical application of Recommendation 49.

UNTP is a protocol, not a platform.
It assumes supply chain data remains with each natural owner.
Stakeholders pick any software that conforms to UNTP rather than requiring all actors to use one platform.
This is analogous to inter-bank payment standards.

The worlds supply chains face a transparency challenge.
Regulations such as EUDR (Deforestation Regulation) and CBAM (Carbon Border Adjustment Mechanism) present market access barriers.
Non-sustainable produce faces increased border tariffs.
Due diligence obligations apply to entire supply chains, not just final products.
Penalties for repeated non-compliance can reach 4 percent of global revenue.

Financial institutions rapidly move capital toward ESG assets.
Approximately 50 trillion USD or one third of global assets under management will be ESG assets within a few years.
Consumer sentiment drives purchasing toward sustainable products.
But consumers are increasingly mistrustful of unverifiable claims and look for third-party certification.

The challenge is achieving transparency at scale for the majority of products on the market.
Current solutions require all actors in a value chain to subscribe to the same platform.
This is not feasible or scalable, similar to requiring customers and suppliers to create accounts at the same bank.

UNTP defines five core credential types that work together for supply chain transparency.

The DPP is issued by the shipper of goods.
It carries product and sustainability information for serialised products or product batches.
It is deliberately lightweight, designed to carry minimum data needed by downstream receivers.
Data includes scope 3 emissions intensity or deforestation-free status.
The DPP links to conformity credentials for independent verification.
The DPP links to traceability events for supply chain visibility.

The DPP serves as the upstream B2B feedstock for national level product passports.
It complements rather than conflicts with national regulations such as EU DPP.
It provides the data and evidence needed for issuing high quality national level product passports.

DPP requirements include 18 detailed specifications:
Granularity at model, batch, or serialised item level.
Classification using codes from defined schemes (e.g., UN-CPC).
Materials provenance breakdown by mass fraction and origin country.
Produced at facility description with resolvable identifier.
Product dimensions (length, width, height, weight, volume).
Traceability links to upstream DPPs and conformity credentials.
Verifiable party identification for issuer, manufacturer, facility operator.
Performance claims referencing standards and regulations.
Evidence linking to independent conformity assessments.
Packaging and labels description.
Lifecycle data links for dynamic in-use data.
Scoring support for categorical performance grades (A through E).

The DFR is issued by facility owners or operators.
It describes facility identity, location, ownership, sustainability performance over defined reporting periods.
Facilities typically hold multiple identifiers from different authorities.
The DFR allows each identifier to resolve to the same authoritative facility record via identity resolver infrastructure.

The DTE records lifecycle activities of products as lightweight verifiable credentials.
DTEs capture the what, when, where, who, and how of supply chain events.
Three event types model any supply chain activity: make, move, modify.
Enables facility-level mass-balance assessment.
Enables full upstream traceability when linked to DPPs.

Records lifecycle activities of products as lightweight verifiable credentials.
Three event types: make (production), move (transport), modify (processing or state change).
Captures what, when, where, who, how.
Enables facility-level mass-balance assessment.
Enables full upstream traceability when linked to DPPs.

Issued by conformity assessment bodies (CABs).
Provides independent digitally verifiable assessments of products, facilities, or organisations against published standards and regulations.
Each credential carries the assessors accreditation, reference scheme and profile, measured performance metrics, conformance determination.
Gives downstream verifiers high-confidence evidence to support claims in product passports and facility records.

Issued by authoritative registers such as national business registers, trademark offices, mining cadastres, accreditation bodies.
Provides a digitally verifiable binding between a decentralised identifier (DID) and an authoritative registered identity.
Allows verifiers to confirm a credential was issued by the controller of a DID.
Confirms the DID controller is the genuine holder of a registered identity.

Defines how existing identifier systems participate in a discover-resolve-verify workflow.
Business registers, product registries, facility cadastres all participate.
UNTP does not replace existing identifiers but builds upon them.
Any identifier (registry-managed or self-issued as DID) can resolve to verifiable data.

The UNTP architecture comprises foundational components reused across all credential types.

Specifies W3C Verifiable Credentials and DID standards.
Every credential is digitally signed, tamper-evident, revocable, independently verifiable.

Defines patterns for balancing transparency with confidentiality.
Six progressively stronger access control patterns.
From anonymous public access through to decentralised authentication.
Patterns can be applied independently or in combination.

Defines shared classes and properties reused across all UNTP credential types.
Includes Product, Facility, Party, Attestation, Assessment.
Ensures consistent semantics and interoperability.

Provides standardised classification schemes for conformity topics (what is being assessed).
Provides performance metrics (how performance is measured).
Enables automated comparison and aggregation of sustainability data across credentials and value chains.

Regulations driving adoption of UNTP-style transparency:

EU Regulation on Deforestation (EUDR): Market access barriers for products linked to deforestation.
EU Carbon Border Adjustment Mechanism (CBAM): Increased border tariffs for non-sustainable produce.
EU Corporate Sustainability Due Diligence Directive (CSDDD): Due diligence obligations on entire supply chains.

Financial sector: ESG assets growing to 50 trillion USD, driving capital allocation toward verified sustainability.

Each supply chain actor can independently implement UNTP without imposing technical dependencies on upstream or downstream actors.
Traceability information describing arbitrarily complex value chains emerges in a bottom-up manner.
Actors share ESG evidence while protecting sensitive information via confidentiality measures.
Business case templates provided to help actors make the case for implementation.

RBTP is an industry-specific extension of UNTP developed by the Responsible Business Alliance (RBA).
RBA is the worlds largest industry coalition dedicated to responsible business conduct in global supply chains.
RBTP enhances transparency, interoperability, trust in sustainability-related supply chain data.
Primarily targets automotive, electronics, and related industries.

RBTP extends UNTP with specialized DPP implementations tailored for specific product categories.
Includes Digital Electronic Goods Passport and Digital Battery Passport.
Represents a shift from basic tier-1 supply chain transparency to comprehensive product-level traceability and multi-tier visibility.

Pyx Global is a key UNTP acceleration partner.
Empowers businesses, industry associations, regulators to implement UNTP-based digital product passports.
Provides comprehensive technical documentation and resources through its Knowledge Base.
Provides DPP Kit for issuing UNTP DPP credentials.
Provides open-source tools that can be self-hosted.
Organ (metaphor for a functional subsystem or team):
Organizations maintain full custody of proprietary information while achieving transparency.

The RBA initiated a large-scale real-world pilot program for RBTP from October 2025 to February 2026.
Focus on critical minerals: copper, cobalt, lithium, tantalum.
Over 20 participating organizations.
Pyx Global supports by designing the technical backbone and ensuring alignment with UNTP architecture.

UNTP uses W3C standards for verifiable data.
Verifiable Credentials (VC) provide digitally signed tamper-evident credentials.
Decentralized Identifiers (DID) enable verifiable identity without centralized registries.
While UNTP is not a blockchain platform, its architecture works with blockchain and distributed ledger technologies.
UNTP emphasizes a decentralized approach reducing reliance on centralized platforms or APIs.

UNTP provides a standardized framework for supply chain transparency that regenerative communities can use.

The protocol enables verification of sustainability claims without requiring a single platform.
Each community can implement independently while maintaining interoperability.
Bottom-up emergence model aligns with regenerative community values of local autonomy.

The Digital Product Passport can track ecological impact from raw materials through production.
Materials provenance tracking enables verification of sustainable sourcing claims.
Traceability events enable supply chain visibility for circular economy tracking.

However, UNTP is currently designed primarily for business-to-business supply chain contexts.
Consumer-facing applications are less developed.
The protocol is under active development and not yet ready for full production implementation (as of 2025).

The alignment with EU regulations creates a compliance pathway for communities producing for European markets.
The verifiable credentials approach provides a technical foundation for trust without centralized authority.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): 



154 151 133

