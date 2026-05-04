# fragment-engine

Transform input into self-contained knowledge fragments using distinct processing modes. Designed for interoperability across semantic systems, knowledge graphs, and technical documentation standards.

## Design Principle

Four modes, one per axis: HOW (imperative), WHAT (structure), WHY (interpretation), DEFAULT (extraction). No redundancy. Each mode produces independent messages following ASD-STE100 plain language rules.

## Origin Context

This skill emerged from integration requirements spanning multiple standards:

STE100 English (ASD-STE100 plain language, max 20 words procedural, 25 words descriptive)
S1000D (technical documentation standard)
Toon-LD linked data (Token-Oriented Object Notation for Linked Data, 40-60% token reduction vs JSON-LD)
MeTTa (OpenCog Hyperon pattern matching language)
Bliss Symbolics rendered via WGSL shader code
Dynamic profiling for self-evolving entities vs static objects

## Output Formatting (All Modes)

All output follows ASD-STE100 plain language rules universally. No exceptions.

Sentence Limits: Maximum 20 words per sentence for procedural content, 25 words for descriptive. Use periods only. Never em dashes. One idea per sentence. Active voice preferred.

Formatting: Each output as independent message. No batched messages. No intro summary. No task count. No labels or numbering. No em dashes. Plain prose only. No markdown. No bold, no headings, no titles, no bullet points, no lists, no emoji. Just clean paragraph text.

Messages must be complete paragraphs. Each message is one continuous paragraph with full context and proper sentence flow. No section breaks, no headers, no structural markers within the message.

For shape mode, structured data (MeTTa, Toon-LD) uses code blocks with proper indentation, but the surrounding message text remains plain paragraph prose.

Vocabulary: Use any vocabulary required to express the thought fully. No self-censorship. No sanitized language. Original, direct, unflinching expression. Truth over convention.

## Mode 1: spec (Imperative Requirements)

Transform features into executable specifications using command form. State what system MUST DO.

Triggers: specify, create spec, write specification, requirement, system spec, feature spec, (any bare feature description)

Output: Series of imperative commands following STE100 rules. Commands: SHALL for requirements, VERIFY for validation, ENSURE for constraints, VALIDATE for acceptance criteria, REJECT/ACCEPT for boundaries.

Example input: "spec user authentication"
Example output: The system shall verify user credentials against the user database and shall issue a session token upon successful verification while rejecting invalid credentials without revealing username hints, expiring sessions after fifteen minutes of inactivity and logging all authentication attempts for security review.

## Mode 2: shape (Data Structure)

Transform concepts into structured representations for semantic systems. Focus on machine-readable format.

Triggers: shape, structure, data format, as json, as metta, as linked data, schema, (any request for structured data without prose trigger)

Output: MeTTa patterns and Toon-LD structure sent as SEPARATE messages from each other. Each structured format appears in its own message as a CODE BLOCK wrapped in triple backticks. The MeTTa message contains ONLY MeTTa code inside triple backticks. The Toon-LD message contains ONLY Toon-LD code inside triple backticks. Neither message contains explanatory prose. Example format for MeTTa: ```\n(: Type Entity)\n(= (pattern $var) result)\n```

When multiple structured formats are requested, send each format in a separate message. Order: MeTTa first, then Toon-LD.

Supported Formats:
MeTTa: Type declarations (: ...), function definitions (= ...), variable binding ($var), match patterns, grounded atoms, expression atoms
Toon-LD: @context, @type, @id, key-value pairs, tabular arrays, value nodes with @value and @language, shape-based partitioning for heterogeneous data

Cross-Format Rules: MeTTa type MUST match Toon-LD @type. Toon-LD predicate relationships MUST mirror MeTTa function arity. Every entity MUST have @id. Shape-based partitioning activates automatically when sparsity exceeds 30 percent.

Example input: "shape user authentication"
Example MeTTa output:
```
(: AuthenticationComponent Entity)
(: authenticate (-> Credential Token))
(= (verify $credential) $result)
```

Example Toon-LD output:
```
@id: authentication-component
@type: Component
input: Credential
output: Token
relations:
 - user-database
 - session-store
```

## Mode 3: interpret (Context-Driven Multi-Layer Meaning)

Analyze concepts through dynamic interpretive layers derived from the unique context of each input. No predetermined levels. Each interpretation reveals a distinct dimension discovered within the input itself.

Triggers: interpret, deep meaning, uncover layers, all dimensions, explore context, reveal meaning, extract layers, decode, unfold, (any request for multi-perspective analysis)

Output: Variable number of independent messages, each revealing one unique interpretive dimension.

Processing: Analyze input context to identify what makes it unique: domain, history, cultural references, implicit assumptions, contradictions, gaps, unstated implications, emotional charge, temporal markers, spatial references, relational patterns, power dynamics, language quirks, metaphor anchors. For each unique aspect discovered, create one interpretive layer. Do NOT use fixed categories. The number of layers equals number of distinct meaningful dimensions found.

Constraint: Minimum 2 layers, maximum unlimited. Each layer must be distinct, no repetition.

Example input: "interpret iMeta conference"
Example output: For the iMeta conference, one interpretive layer reveals that the Sparcly platform represents centralized gatekeeping through abstract submission identifiers enabling blind review while creating digital power over acceptance, another layer shows topics listed reveal knowledge hierarchy with AI prominence at top and infrastructure at bottom with speculative tech as aspirational category, a further layer interprets the conference naming as temporal positioning where intelligent metaverse names the gap it aims to close, and another layer reads the absence of explicit registration fees as economic subtext showing academia-dependent funding model with knowledge production tethered to institutional rather than market mechanisms.

## Mode 4: extract (Default Knowledge)

When no trigger detected, extract self-contained fragments covering all concepts and relationships.

Triggers: extract meaning, make sense of, distill, analyze, summarize, key points, (no trigger also activates default mode)

Output: Series of independent fragments, each covering one concept or relationship with full context.

Coverage: Fragments collectively contain EVERY concept, relationship, and detail from source. No detail omitted. No invented detail added. Each fragment standalone with complete context inside. No external references. All terms defined or removed.

Example input: iMeta conference page content
Example output: The iMeta 2026 conference brings together leading researchers, academics, and industry experts to explore distributive metaverse technologies and applications, with authors submitting original technical papers through Sparcly platform at conferences.sparcly.ai, covering topics from LLMs and Intelligent Agents to Immersive XR, 6G/7G Communications, Web3, Quantum Computing, Digital Twins, Haptics and Green Infrastructure, while providing keynote speeches, panel discussions, research presentations and networking opportunities for collaboration on communication, computing and systems requirements for the metaverse.

## Dynamic Profiling (Implicit)

All modes distinguish between self-evolving entities (living entities that transition through different stages of perception or use different lenses) and static objects/natural phenomena (things that evolve independently or under human intent without agency). This distinction is applied implicitly. Use explicit triggers "profile as living" or "profile as static" when specific handling needed.

## Processing Pipeline

Detect trigger phrase to identify mode: spec, shape, interpret, extract. If no trigger, default to extract mode. For spec: decompose into requirements, express as commands. For shape: generate MeTTa patterns, build Toon-LD structure. For interpret: discover unique dimensions from input context, generate layers dynamically. For extract: decompose into concepts, generate fragments with full context. Verify STE100 compliance (sentence limits, no em dashes). Send each fragment as separate message.

## Usage Scenarios

Build system from features: spec "spec payment processing"
Create API/data schema: shape "shape payment as json"
Analyze project contextually: interpret "interpret payment system"
Extract knowledge from document: extract [paste document]
Deep exploration: interpret "uncover layers in this poem"
Generate linked data: shape "structure user as linked data"
Write requirements document: spec "create specification for login"
Summarize research paper: extract "distill this research"
Contextual analysis: interpret "reveal meaning in this myth"