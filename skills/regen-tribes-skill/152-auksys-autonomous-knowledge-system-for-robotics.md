# Auksys Autonomous Knowledge System For Robotics

System (metaphor for an integrated whole or network):

auKsys (autonomous knowledge system) is a distributed knowledge system for multi-agent systems.
It is well suited for robotics and sensing applications.
Developed at Linkoping University in 2015 as a research project.
Now developed as an open-source project hosted on GitLab under MIT license.

auKsys handles the full lifecycle from raw sensor data to high-level semantic knowledge.
It integrates with many types of sensors including camera, lidar, GPS.
It transforms sensory data and extracts semantic information via processing algorithms.
It stores data efficiently as SQL or RDF in a PostgreSQL backend.
It provides automatic synchronization of knowledge graphs represented as RDF documents.

Feature 1 is acquire.
auKsys integrates with many types of sensors (camera, lidar, GPS).

Feature 2 is process.
auKsys integrates with different processing algorithms to transform sensory data and extract high-level semantic information.

Feature 3 is store.
auKsys interfaces with a PostgreSQL database to efficiently store data as SQL or RDF.
Enables high-performance storage of sensory data.

Feature 4 is share.
auKsys includes algorithms for automatic synchronization of knowledge graphs represented as RDF documents.

Feature 5 is modular.
auKsys follows a modular architecture allowing integration at different levels.
Main interface is a C++ API with a set of libraries.
Partial bindings for Python and Ruby are also available.
ROS integration is provided.

auKsys is built as modular libraries that form a distributed knowledge system.

Core library is knowL.
knowCore provides core libraries.
knowDataTransfert provides base library for implementing data transfer.
knowDBC provides database connection.
knowGIS provides geographic information system support.
knowRDF provides RDF data handling.
knowSHACL provides SHACL implementation for constraint language.
knowValues provides data structures for sensor and data values.
knowVis provides 3D knowledge visualization components.

The knowledge database is kDB.
kDB relies on PostgreSQL for storing data.
kDB provides API and tools for controlling and connecting to the server, storing and querying data.

At the lowest level, data is stored in SQL tables.
kDB provides default schema for a number of types of data.
kDB also allows creating custom tables by running custom SQL queries.
kDB provides triple stores that can be queried using SPARQL.
Data can be imported from RDF files.

The kDB API allows access to the data through different mechanisms:
SQL or SPARQL queries.
Active Records.
RDF files.

kDB also provides API for exchanging sensor data and automatic synchronization of triple stores.

Clients built on top of the API include:
ROS server.
user interface (knowX).
computation server (pralin).
RDF compatible endpoint.

kproc is the knowledge processing library designed to transform information into a knowledge graph.
Ecosystem (metaphor for an interconnected network):

Ecosystem (metaphor for system or network): Part of the auKsys ecosystem for robotics applications.

GQLite is a query engine for RDF and graph data.
Moved to the auKsys project in June 2025.

GQLite 1.5 (January 2026) brings:
PostgreSQL backend support (client-side library, server-side extension on todo).
Non-blocking queries in gqlitebrowser.
New functions.
redb backend enabled by default in gqlitedb rust crate.
All three backends enabled for Python, Ruby, and C/C++ bindings.

GQLite 1.4 (November 2025) brings:
Timestamps support.
GQLS (GQL Schema) introduction.
ORB-like API for OpenCypher queries.
Paves way for support of more SQL databases.
Improvements to GQL GUI Browser.
Fixes to query engine.

GQLite 1.3 (September 2025) brings:
Upgrade to Redb3.
Introduction of GQB (Graph Query Builder).
API for building OpenCypher queries.

GQLite 1.2.1 (July 2025) brings:
New Rust-based bindings for Ruby and Python.
Pushed to gem and PyPi.
First attempt at multithreading support through experimental ConnectionServer.

GQLite uses logos for lexing and nom for parsing (version 1.6 upcoming).

auKsys supports multiple query languages.

SPARQL is SPARQL Protocol and RDF Query Language.
kDB implements a subset of SPARQL 1.1 specification.
Strongly typed literals use native types instead of strings.
Supports binary data such as images and point clouds.
Variadic paths are not supported (complex to implement, performance issues).

kDQL is kDB Document Query Language.
New module since kDB 4.2 for storing and querying JSON documents.
kDQL queries are valid YAML documents.
Supports create, drop, retrieve operations.
Supports equality-based matching.
Supports bindings with external values using !binding tag.
Supports composite queries (multiple queries at once).
Supports !include tag for large string content in separate files.

SQL is supported for direct database queries.

krQL is used for ROS server commands including base knowledge registration.

RDF (Resource Description Framework) is a standard model for data interchange on the web.
Knowledge is represented as a graph where nodes are URI or values and edges have one URI label.
RDF Graphs are encoded as subject-predicate-object triples.

Turtle (Terse RDF Triple Language) is the syntax for expressing RDF data.
Turtle files start with @base and @prefix declarations.
Provides more human-readable form than RDF/XML.

OWL (Web Ontology Language) is used for defining meaning of URI used in RDF graphs.
Ontologies encode semantic of a graph.
Grounded in Descriptive Logic.

SHACL (Shapes Constraint Language) validates RDF graphs.
Defines schema for graph structure.
Specifies valid node and edge combinations.

The kDB ROS Server is the main interface between a running ROS system and the knowledge database.

Functionality includes:
Recording of topics.
Querying services (RDF Graph, Altitude).
Automatic synchronization of RDF Graph between agents.
Data transfer between agents.

Started with: ros2 run ros_kdb kdb_server

Database stored in $HOME/.ros_kdb/default or $HOME/.ros_kdb/namespace if namespace provided.

Services include:
Topic recording.
SQL query.
SPARQL query.
Altitude query (requires digital elevation map).
Graph synchronization.
Dataset transfer.

Base knowledge directories can be added with DEM, RDF Graph, Python or Ruby scripts.

auKsys was developed as part of several research projects.

WARA-PS (2017-2024) is the WASP Research Arena for Public Safety.
Promotes research in collaborative heterogeneous agents and systems of systems.
auKsys integrated as part of a team of UAVs, UGVs and USVs operating in rescue scenarios.
kDB used to collect sensor data and distribute 3D models of the environment and points of interest.
Demonstrated distribution mechanisms for symbolic and non-symbolic data.
Active queries (scQL) used for seamless acquisition and re-use of information.

AuSSys: Autonomous Search System (2022-2024) addresses vision fatigue in long-term missions.
Uses image-based Automatic Target Search System.
Combines pattern recognition, perception, reasoning, decision-making and machine learning.
Coordinates information between drones acquiring images, ground operator, and cloud system for anomaly detection.
Ground operator requests anomalies in a given area translated to active query.
auKsys re-uses existing images or sends drones to acquire new images.
Images processed in the cloud using machine learning.
Results stored in kDB and displayed in ground operator interface.

Collaborative Robotics (202x-2024) focuses on dynamic interaction between humans and robotic systems.
Distributive situation awareness supports collective intelligence in teams.
Essential for individual and collective decision support.

SymbiCloud (2016-2020) investigated smart systems enhancement of Robot-Assisted Hastily Formed Knowledge Networks.
Robotic systems both ground and aerial embedded as integral part of physical infrastructure.
Main application focus was disaster relief and humanitarian assistance.
Main components of auKsys developed including kDB and early prototype for active query mechanism (scQL).
System handles distributed sensor data and semantic information across heterogeneous platforms.
Queries combine both types of information.

auKsys is described in the following publications:

2024: using active queries in collaborative robotic mission planning.
C Berger, P Doherty, P Rudol, M Wzorek.
Intelligence and Robotics. 2024.

2023: RGS+ (RDF Graph Synchronization for collaborative robotics).
C Berger, P Doherty, P Rudol, M Wzorek.
Autonomous Agents and Multi-Agent Systems. 2023.

2021: Hastily formed knowledge networks and distributed situation awareness for collaborative robotics.
P Doherty, C Berger, P Rudol, M Wzorek.
Autonomous Intelligent Systems. 2021.

auKsys can be installed via multiple methods:

auksys-build is the recommended approach for users.

cc-pkg is the recommended approach for developing and contributing.

Manual build instructions available but not recommended.

Docker images available.

ROS server has separate installation instructions.

API documentation available at https://docs.auksys.org.
knowL API at https://lrs.gitlab-pages.liu.se/knowl/.
kDB API at https://lrs.gitlab-pages.liu.se/kdb/.

auKsys sensor fusion capabilities could enable environmental monitoring networks.
RDF-based knowledge graphs align well with semantic knowledge representation.
Multi-agent synchronization could support distributed community governance.
ROS integration enables robotics applications for land stewardship.
The knowledge processing pipeline from sensor data to semantic knowledge could support ecological monitoring.
Open-source MIT license enables community customization.





061 145 151

