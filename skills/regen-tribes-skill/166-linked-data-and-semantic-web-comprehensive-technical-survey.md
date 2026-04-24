# Linked Data And Semantic Web Comprehensive Technical Survey

Tim Berners-Lee outlined four principles of linked data in 2006.

Principle 1 is URIs for naming.
Use Uniform Resource Identifiers to name and identify individual things.
URIs provide globally unique, resolvable names for any concept or entity.

Principle 2 is HTTP URIs for dereferencing.
Use HTTP URIs so these things can be looked up and interpreted.
Anyone can resolve a URI to retrieve information about the identified thing.

Principle 3 is open standards for information.
Provide useful information about what a name identifies through open standards such as RDF, SPARQL.
Standard formats enable machines to process the data.

Principle 4 is linking to other things.
When publishing data on the Web, refer to other things using their HTTP URI-based names.
Links create the interconnected graph of knowledge.

The vision is for the Internet to become a global database.
Data becomes machine-readable through structured data linked across the Web.
The Semantic Web builds upon standard Web technologies (HTTP, RDF, URIs) but extends them for machine readers.

RDF is the foundation of linked data.
RDF describes data as triples (subject-predicate-object statements).
Each statement links two resources or connects a resource to a literal value.
Graph structure emerges from interconnected triples.

RDF serializations include RDFa (attributes in HTML), RDF/XML (XML syntax), N3 (Notation 3), Turtle (Terse RDF Triple Language), and JSON-LD (JSON for Linked Data).

Controlled vocabularies provide consistent terminology.
Standard ontologies include FOAF (Friend of a Friend for person data), schema.org, DBpedia ontology.
Vocabularies enable interoperability across different datasets.

The LOD Cloud is a diagram showing datasets published in linked data format.
The diagram was started in 2007 as part of the W3C Semantic Web Education and Outreach group.

Growth trajectory shows significant expansion:
2007 had 12 datasets and 28 RDF links.
2008 grew to 34 to 45 datasets with over 2 billion triples.
2014 had 570 datasets and 31 billion triples.
2024 reached 1,350 datasets.

Current state as of April 2026 has 1,358 datasets tracked.

Major datasets in the cloud include DBpedia, Wikidata, GeoNames, and US Census data.
Each dataset links to other datasets through shared URIs and vocabulary terms.
The interconnected structure creates a global knowledge graph.

Tim Berners-Lee proposed a 5-star scheme for grading open data quality.

Star 1 is open available.
Data is openly available in some format.

Star 2 is structured format.
Data available in a structured format such as Excel.

Star 3 is non-proprietary format.
Data available in a non-proprietary structured format such as CSV.

Star 4 is W3C standards.
Data follows W3C standards like RDF and URIs.

Star 5 is linked open data.
All of the above plus links to other Linked Open Data sources.

Reaching 5 stars means data is not just open but truly interconnected with the global knowledge graph.

DBpedia is the crystallization point of the Linked Open Data Cloud since 2008.
It extracts structured data from Wikipedia.
Contains approximately 3.4 million things described by 1 billion triples.
Includes abstracts in 11 different languages.
Serves as the hub connecting many other datasets.

DBpedia represents the structured knowledge extracted from unstructured Wikipedia content.
It provides a common framework for linking across different knowledge domains.

Wikidata is a collaboratively-created linked dataset.
Acts as central storage for structured data of all Wikimedia projects.
Contains millions of entities with properties and relationships.
Provides identifiers that link to external databases and knowledge systems.

Wikidata follows linked data principles.
Each entity has a unique URI.
Properties use standard vocabulary.
Links connect to other datasets in the LOD Cloud.

Solid (Social Linked Data) applies linked data principles to personal data.
Pods store personal data that individuals control.
WebID provides decentralized identity linking to Pod locations.
Data remains linked but under user control.

Solid changes the model from centralized platforms to user-controlled data vaults.
Applications access data from Pods with user permission.
Identity and data are decoupled from application providers.

SPARQL is the standard query language for RDF.
Enables queries across distributed linked data sources.
Supports pattern matching, filtering, aggregation, and subqueries.

SPARQL endpoints provide queryable access to knowledge graphs.
Public SPARQL endpoints face challenges from AI crawler load.
Recent restrictions limit query complexity and frequency.
SPARQL federation (joining multiple endpoints in one query) is particularly affected.

Federated queries send multiple smaller queries to endpoints.
AI crawlers sending many requests create capacity problems.
This impacts decentralized knowledge graph infrastructure.

Comunica is a modular SPARQL query engine for the Web.
Designed for querying over decentralized environments.
Supports federation and link traversal across distributed data.

Key characteristics:
Modular architecture using Components.js dependency injection.
Written in JavaScript/TypeScript for universal deployment.
Can run in browsers, Node.js, or as Web services.
Configurable with different algorithm implementations.

Comunica enables queries across heterogeneous sources.
Combine SPARQL endpoints with Linked Data documents.
Custom modules extend functionality for specific use cases.
Performance closely matches centralized SPARQL engines despite different improvement criteria.

Virtuoso is a high-performance multi-model RDBMS.
Also functions as data integration middleware.
Enables linked data deployment and HTTP application services.

Capabilities include:
RDF storage and querying alongside relational data.
SPARQL endpoint hosting with high concurrency.
Linked Data deployment through faceted browsing.
Open-source edition available for self-hosting.

Virtuoso powers many large-scale linked data deployments.
Handles both structured and unstructured data.
Provides the backend for many LOD Cloud datasets.

Linked Data Fragments defines alternative interfaces for accessing linked data.

Three types of interfaces:

Type 1 is Triple Pattern Fragments.
Provides an API where clients specify subject, predicate, or object patterns.
Server responds with matching triples.
Lower bandwidth but higher expressivity than SPARQL endpoints.

Type 2 is Topic Pages.
Human-readable pages showing all data about a subject.
Machine-readable versions using content negotiation.

Type 3 is Data dumps.
Complete dataset downloads in serialized formats.
Highest bandwidth, lowest flexibility for clients.

The framework enables different tradeoffs between server load and client flexibility.

The W3C Semantic Web stack provides standards for linked data.

RDF (Resource Description Framework) defines the data model.
RDFS and OWL provide vocabulary definition and inference capabilities.
SPARQL provides the query language.
SKOS handles simple knowledge organization systems.
Linked Data Platform specifies HTTP interfaces for CRUD operations on RDF.

The stack enables machines to process and reason about Web data.
Inference engines derive new facts from existing data using OWL or rules.

Knowledge graphs organize information as an interconnected network.
Nodes represent entities.
Edges represent relationships between entities.
Properties provide additional metadata about nodes and edges.

KnowWhereGraph is a notable example with 12 billion triples and 30 data layers.
Integrates human and environmental data through Semantic Web technologies.
Used for geographic and environmental analysis.

The LOD Cloud represents thousands of interconnected knowledge graphs.
Each dataset contributes to the global knowledge network.
Querying across datasets reveals insights from combined data.

Application 1 is search and discovery.
Linked data improves search engine results through structured data.
Schema.org provides vocabulary for common concepts.
Google uses structured data for rich search results.

Application 2 is data integration.
Link different datasets through shared URIs and vocabularies.
Enables federated queries across organizational boundaries.
Avoids data silos through interconnection.

Application 3 is research and analysis.
Large-scale knowledge graphs enable complex queries.
DBpedia and Wikidata support academic research.
Citation analysis and knowledge mapping benefit from linked data.

Application 4 is government transparency.
Open government data published as linked data.
Data.gov.uk provides thousands of linked datasets.
Citizens can query government data directly.

Application 5 is cultural heritage.
American Art Collaborative links museum collections.
Library data converted to linked data with authority control.
Historical documents and archives become queryable.

Challenge 1 is scaling.
Large knowledge graphs require sophisticated indexing.
SPARQL endpoints face capacity limits.
Distributed query improvement is complex.

Challenge 2 is quality.
Data quality varies across sources.
Vocabularies lack consistent adoption.
Entity resolution and deduplication remain difficult.

Challenge 3 is evolution.
Vocabularies change over time.
URIs must remain stable for linked data to work.
Deprecated terms create compatibility issues.

Challenge 4 is AI crawler impact.
Recent load from AI crawlers threatens public SPARQL endpoints.
Restrictions limit federation query capabilities.
Infrastructure degradation affects decentralized knowledge graphs.

Challenge 5 is complexity.
Steep learning curve for RDF and SPARQL.
Tooling less mature than traditional databases.
Debugging linked data applications is difficult.

Linked data provides a powerful framework for regenerative community knowledge management.

Key applications for communities:

Application 1 is community knowledge graphs.
Capture community knowledge as linked data.
Community members contribute and query shared knowledge.
Vocabularies for community concepts and relationships.

Application 2 is resource documentation.
UNTP Digital Product Passports use linked data vocabularies.
Supply chain transparency through RDF assertions.
Community resources documented with standard metadata.

Application 3 is federated queries.
Comunica enables querying across community boundaries.
Share knowledge while maintaining autonomy.
Collaborative problem-solving through federated data.

Application 4 is Solid integration.
Personal data stored as linked data in Pods.
Community applications access shared data with permission.
Decentralized identity protects community members.

Application 5 is provenance tracking.
RDF triples capture the origin of information.
Provenance enables trust assessment.
Community data quality improves through transparent lineage.

System (metaphor for an integrated whole or network):

Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): The linked data ecosystem provides proven standards for knowledge representation.
Vocabularies like FOAF, schema.org, and custom community ontologies enable interoperability.
SPARQL provides powerful querying across distributed sources.

The main concern is AI crawler load on public endpoints.
Communities should consider self-hosted SPARQL endpoints.
Federation capabilities of Comunica enable decentralized querying without centralized endpoints.

Recommended approach:
Start with RDF data for community knowledge.
Use standard vocabularies for interoperability.
Host SPARQL endpoints locally for critical queries.
Integrate with Solid for personal data management.





158 155 157

