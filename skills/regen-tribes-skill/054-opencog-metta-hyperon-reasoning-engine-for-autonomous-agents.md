# Opencog Metta Hyperon Reasoning Engine For Autonomous Agents

OpenCog builds artificial general intelligence (AGI).
Ben Goertzel founded it.
He has worked on AGI since the mid-1990s.
He coined the term AGI via a 2007 book.
He is called the father of AGI.

OpenCog integrates multiple reasoning paradigms.
Symbolic logic. Neural networks. Probabilistic inference. Evolutionary learning.
Integration is the core insight.
No single paradigm suffices.

The AtomSpace is the core knowledge representation of OpenCog.
It is an in-RAM hypergraph database.
A hypergraph allows links to connect multiple nodes.
Standard graphs allow only pairwise connections.
Hypergraphs enable higher-order reasoning.

Atoms are nodes and links.
Nodes represent concepts.
Links represent relationships.

Atom types include ConceptNode.
Atom types include PredicateNode.
Atom types include NumberNode.

Link types include InheritanceLink.
It represents a subtype relationship.

Link types include AssociativeLink.
It represents an association.

Link types include ExecutionLink.
It represents a procedure.

Each Atom holds mutable key-value data.
Values include truth values. Probabilities. Activation values.
This supports probabilistic reasoning.

MeTTa is meta-text.
Hyperon is hyperon.
WASM is webassembly.
NAL is non-axiomatic logic.
SurrealDB is surrealdb.

PLN stands for Probabilistic Logic Networks.
Ben Goertzel created it.
PLN performs logical reasoning with uncertainty.

Classical logic assumes perfect certainty.
Real knowledge has uncertainty.
PLN handles both.

PLN uses truth values.
Strength is probability of truth. 0 to 1.
Confidence is reliability of strength. 0 to 1.

PLN rules include deduction.
If all A are B. If all B are C. Then all A are C.

PLN rules include abduction.
If C implies B. If B is observed. Then C is probable.

PLN rules include induction.
If many A are B. Then all A are probably B.

PLN rules include analogy.
If A is like B. If B has property P. Then A may have property P.

PLN has been abandoned since 2021.
The GitHub repository is unmaintained.
It remains conceptually influential.

MeTTa stands for Meta-Type Talk.
It is the programming language of OpenCog.
MeTTa succeeded Atomese (called Atomese 2).
MeTTa is designed for AI agents.
For reasoning.

MeTTa has three data types.
Type M is a node.
Type A is a link.
Type T is a type.
Type M holds atoms.
Type A holds links between atoms.
Type T defines type constraints.

MeTTa syntax is simple.
Pattern equal result.
The underscore means wildcard.
The exclamation mark means negation.
The question mark means query.

MeTTa compiles to the AtomSpace.
MeTTa executes inference rules.
MeTTa runs pattern matching.

Hyperon is the next generation of OpenCog.
It revises OpenCog with a flexible decentralized design.
Hyperon is a standalone interpreter.
Aims for speed. Aims for simplicity.

Hyperon uses MeTTaSpace instead of AtomSpace.
MeTTaSpace is a minimal knowledge base.

Hyperon adds GroundedAtom.
GroundedAtom connects to external systems.
Python functions. C functions. Neural networks.
GroundedAtoms extend the knowledge base.

Hyperon adds Space.
System (metaphor for an integrated whole or network):

Space is a module system.
Each Space has its own knowledge base.

Hyperon adds Actor.
Actor is a concurrent unit.
Actors communicate via messages.

The Rust implementation compiles to bare metal.
Runs without operating system.
Targets embedded AI. Small devices. Low power.

NARS stands for Non-Axiomatic Reasoning System.
Pei Wang created it.
He is a professor at Temple University.
NARS implements adaptive reasoning.
NARS handles insufficient knowledge.
NARS handles unexpected tasks.

NARS assumes bounded resources.
Real agents have finite time. Finite memory.
Classical logic assumes infinite resources.
NARS assumes bounded resources.

NARS uses a memory model.
Memory holds beliefs. Beliefs have truth values.
Memory holds goals. Goals have satisfaction values.
Memory has limited capacity.
NARS evicts low-priority beliefs.

NARS uses the NAL inference system.
NAL stands for Non-Axiomatic Logic.
NAL generalizes classical logic.
Handles uncertainty. Temporal context. Variable terms.

NARS inference rules include deduction. Induction. Abduction. Comparison. Analogy.

OpenCog and NARS share concepts.
Both handle uncertain reasoning.
Both assume bounded resources.
Both aim for AGI.
OpenCog integrates NARS as a component.

Ben Goertzel identifies three kinds of learning.
Current ML does not do them.

Kind 1 is continual learning.
Humans learn without catastrophic forgetting.
Current neural nets forget everything when they learn new.
New learning overwrites old weights.

Kind 2 is transfer learning.
Humans leap out-of-distribution.
LLMs appear to transfer.
They actually just saw both domains in training.
Real transfer means handling truly novel situations.

Kind 3 is developmental learning.
Humans restructure how they represent knowledge over lifetime.
Current nets do not do this.
They learn within a fixed representation.

Core thesis: modular plus abstracted knowledge representation enables all three.
Logic systems support this naturally.
They do not scale to perceptual data.
Hybrid approach: neural for perception. Symbolic for reasoning.
Unified in knowledge graph.

The field has identified an eight-layer architecture.
No single project has built all layers.
The integration is the opportunity.

Layer 1 is the language.
Programs itself.

Layer 2 is the memory.
Stores atoms. Retrieves atoms. Patterns atoms.

Layer 3 is the inference engine.
Derives conclusions. Updates truth values.

Layer 4 is the substrate.
Rust runs everywhere. Safe. Fast.

Layer 5 is the sandbox.
WASM isolates untrusted code.
Enables plugin systems.

Layer 6 is the credential gateway.
Scopes access. Auditable.

Layer 7 is the channel adapter.
Connects to users. Telegram. Discord. Signal.

Layer 8 is the deployment variant.
Different contexts need different configs.

OpenCog addresses safety.
The AGI must be safe.
Behave as intended. Not cause harm.

Self-modification risk: self-modifying code can become unsafe.
Human oversight limits self-modification.

Alignment problem: the system must align with human values.
Values must be encoded. Prioritized. Conflicting values resolved.

Interpretability problem: the system must be understandable.
Users must understand decisions.
Operators must audit behavior.

Organ (metaphor for a functional subsystem or team):

The organ needs reasoning.
Decisions. Planning. Learning.

OpenCog provides the reasoning engine.
PLN handles uncertain evidence.
The AtomSpace stores community knowledge.

Hyperon provides the distributed engine.
MeTTa programs the query logic.
GroundedAtoms connect to databases.
Actors provide concurrency.

The gap is integration work.
Connect reasoning to SurrealDB persistence.
Connect actors to channels.

pi is a self-modifying agent harness.
pi uses context engineering.
Uses ADOPT decision theory.
pi is research-grade. Not production-grade.

040 021 053 050 055 000

