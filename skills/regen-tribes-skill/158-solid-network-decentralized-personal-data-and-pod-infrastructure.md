# Solid Network Decentralized Personal Data And Pod Infrastructure

Solid is an evolution of the web by its creator Sir Tim Berners-Lee.
It realizes his original vision for the Web of empowering individuals and enabling collaboration.
Solid returns the web to its roots by giving everyone direct control over their own data.

System (metaphor for an integrated whole or network):

The core concept is that Solid is a file system for the web.
In the same way that a PDF can be stored on a laptop
and
read or edited by one of a dozen applications, Solid lets you put documents into an online file system.
You have control over which people, websites, apps, and AI agents can read and edit them, and when.

Solid adds to existing Web standards to create a space where individuals maintain autonomy, control data and privacy, and choose applications and services.

A Solid Pod is a secure personal web server.
It is short for Personal Online Datastore.
A Pod acts as your own personal storage space so you can share data with people and Solid applications.
Instead of data being held by various applications in disparate silos, your photos, contacts, financial information, health records,
and
more can reside in one or multiple Pods chosen
and
controlled by you.
You decide what data to share, with whom, for how long, and you can revoke access at any time.

You can get a Pod from Inrupt PodSpaces or self-host using Community Solid Server.

A WebID is a unique decentralized identifier in the form of a URI.
Ecosystem (metaphor for an interconnected network):

It identifies an agent which can be a person, organization, or device within the Ecosystem (metaphor for system or network): Solid ecosystem.
The WebID resolves to a public WebID profile document.
This is an RDF document containing information about the agent such as trusted identity providers and locations of their Solid Pods.
It acts as a digital ID analogous to a passport number, enabling entities to identify themselves across Solid applications without multiple accounts.

OpenID Connect is an authentication protocol built on top of OAuth 2.0.
Solid uses OIDC for secure login and identity verification.
When a user wants to access an application, they authenticate with their OpenID provider.
This may or may not be the same as their Pod provider.
The process provides an ID Token containing the users WebID, confirming identity to the application and Solid server.

RDF is the foundational data model for Solid.
It describes data by defining relationships between data objects using triples (subject-predicate-object statements).
This structure allows highly interconnected data that is machine-readable, rich in context, and easy for any authorized application to navigate.
Solid uses RDF vocabularies to formally define types of data stored and how they relate, ensuring interoperability between applications and services.

Solid achieves decentralized identity by combining WebIDs, OIDC, and Pods.
Users own their WebID (their identifier) and their Pods (their data), authenticating through OIDC.
Identity and data are not controlled by a central authority but by the individual.
Users grant fine-grained permissions to applications and other individuals to access specific parts of their data.

The Solid Community Group (CG) of the W3C produces technical reports including specifications, use cases, requirements, best practices, guidelines, primers, and notes.

Key specifications include:

Solid Protocol defines the core interaction patterns.
Current stage is CG-DRAFT v0.11.0.

Solid WebID Profile defines the profile document format.
Current stage is CG-DRAFT v1.0.0.

Solid-OIDC defines OpenID Connect usage in Solid.
Current stage is v0.1.0.

HTTPSig Authentication for Solid provides HTTP signature-based authentication.
Current stage is CG-DRAFT.

Web Access Control (WAC) defines access control for Web resources.
Current stage is CG-DRAFT v1.0.0.

Access Control Policy (ACP) provides an improved authorization model.
Current stage is v0.9.0.

Solid Application Interoperability (SAI) enables applications to interoperate via shared data.
Current stage is CG-DRAFT v0.1.0.

Shape Trees provides data modeling for hierarchical structures.
Current stage is Editors Draft.

Solid Notifications Protocol enables real-time updates.
Current stages include EventSource, WebSocket, Webhook, StreamingHTTP, LDN channels.

Solid DID Method defines Decentralized Identifier method for Solid.
Current stage is Unofficial Draft.

Inrupt is a company co-founded by Sir Tim Berners-Lee.
It provides commercial Solid solutions and maintains significant open-source repositories.

Inrupt repositories on GitHub:

solid-client-js (242 stars): Library for accessing data and managing permissions on data stored in a Solid Pod.
TypeScript, core SDK.

solid-client-authn-js (77 stars): Client library for authenticating with Solid.
TypeScript.

solid-client-notifications-js (3 stars): JS client library for Solid notifications.
TypeScript.

solid-client-vc-js (3 stars): Client library to ease working with Verifiable Credentials in Solid.
TypeScript.

solid-client-access-grants-js (6 stars): Library for managing verifiable consent grants in Solid.
TypeScript.

solid-client-errors-js (1 star): Library providing meaningful and intuitive error handling.
TypeScript.

solid-client-java (16 stars): Java Client Libraries for Solid.
Java.

rdf-wrapping-java (5 stars): RDF Wrapping library for working with domain models.
Java.

typescript-sdk-tools (10 stars): Tooling used when writing Inrupts TypeScript SDK for Solid.
TypeScript.

Inrupt provides the Enterprise Solid Server (ESS).
ESS is an enterprise-grade Solid Pod server designed for large-scale deployments.
Features include robust scalability, high performance, advanced security, comprehensive compliance, audit, and traceability capabilities.

ESS facilitates adoption by organizations with managed services for Pod provisioning, identity management (WebID Service), and secure authentication.

Version 2.7 (January 2026) enhances enterprise-grade sharing controls.
Enables organizations to build compliant, scalable, and trusted customer experiences that the AI age demands.

ESS supports dynamic user consent with colocated consent and data.

Community Solid Server is an open and modular implementation of the Solid specifications.
It provides a Solid Pod and identity for people who want to try out having their own Pod.
It helps developers quickly create and test Solid apps.
It serves researchers who want to design new features for Solid.

Quick start with Node.js 18 or higher:
npx @solid/community-server

Persist contents between restarts:
npx @solid/community-server -c @css:config/file.json -f data/

The server uses Components.js for specifying how modules and components are wired together at runtime.
Recipes for configuring the server are available in the CommunitySolidServer/recipes repository.

Copyright is by Inrupt Inc. and imec.
Available under MIT License.

SolidJS is the UI framework used for building Solid applications.
It is a JavaScript UI library compiled to fine-grained reactivity.
It is syntactically similar to React (JSX) but compiles to direct DOM updates without a Virtual DOM.
It shares principles with Svelte (compiler-based, fine-grained reactivity).

SolidJS reached version 1.0.

Key characteristics:
Fine-grained reactivity without Virtual DOM.
Compiled for optimal performance.
Close to React syntax, easy for React developers to learn.
Strong performance benchmarks.
Active community and ecosystem.

Official resources include Guide, Tutorial, API Reference, GitHub Repo, Release Notes, Playground, Resource Index.

Apps must meet these criteria to be Solid-compatible:
If identifying users is necessary, they must be able to log in using their WebID and pointing to the Identity Provider of their choice.
Data consumed by the app should be fetched from Solid Pods if possible.
Data generated by the app should be stored in Solid Pods.
The interaction between the app, pods, and Identity Provider(s) must be compliant with the Solid specification(s).

Apps that cause harm, have unethical purposes, enable hate speech, encourage harmful stereotypes, have malicious intent, fulfill illegal purposes, share user information without consent, or have important security issues that compromise Pods are not listed.

Example apps include:

File Manager: User-friendly interface for managing files and folders in Solid Pods.

Media Kraken: Track movies and create collections.

Penny: General Pod Browser by Vincent Tunru.

Umai: Offline-first Recipes Manager by Noel De Martin.

Dokie.li: Clientside editor for decentralised article publishing, annotations, and social interactions.

Podpro.dev: IDE for editing Solid Pods.

Solid Media: Movie tracking and sharing app with personalised recommendations by Oxford Human Centred Computing Group.

Notepod: Private and shareable note taking app with encryption by ANU Software Innovation Institute.

Healthpod: Manage health data with encryption support by ANU.

Moviestar: Track movie and TV watching and ranking with recommendations and encryption by ANU.

Focus: Manage tasks and notes across workspaces with offline access and Markdown support.

Tired.bike: Decentralised platform for bicycle touring community by Open Hospitality Network.

Inrupt maintains Java libraries for Solid integration:

solid-client-java: Java Client Libraries for Solid (16 stars).
rdf-wrapping-java: RDF Wrapping library for working with domain models (5 stars).

These enable Java-based applications to interact with Solid Pods using RDF data models.

Solid provides a foundational infrastructure for regenerative community data sovereignty.

Pods give each community member personal control over their data.
WebID provides decentralized identity without corporate login.
RDF data model enables semantic interoperability across community tools.
Solid Protocol specifications ensure standardization and vendor independence.

The Community Solid Server allows communities to self-host their Pod infrastructure.
No dependency on corporate cloud providers.
Each community can run their own Pod servers.

SolidJS enables building performant applications for community interfaces.
The framework compiles to efficient code suitable for resource-constrained environments.

Access control through WAC and ACP enables fine-grained permissions.
Communities can share data selectively while maintaining privacy.
Verifiable Credentials support trusted assertions between community members.

The ecosystem is still maturing with many specifications in draft stage.
Enterprise adoption (Inrupt ESS) provides stability for production use.
Open-source components enable community review and customization.





157 149 151

