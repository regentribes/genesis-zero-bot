# Living Book Technical Roadmap

This note captures the Living Book technical roadmap for implementation.

The Living Book adapts the Genesis Brain Light architecture. Two layers form the foundation.

Layer one is GitHub. Authors edit locally. Authors push to publish.

Layer two is SurrealDB. The database provides the knowledge graph. The graph enables queries.

Sync flows from GitHub to SurrealDB. A webhook triggers the pipeline. The VPS runs the update.

Two lenses operate from day one. The Author Lens is the canonical text. The Community Lens is validated contributions.

Version 0 is the MVP. The goal is author publishing and community reading.

Authors publish books. Readers access books. Readers annotate books.

Components are all existing. GitHub stores documents. SurrealDB stores the graph. A pipeline syncs the two.

The workflow is simple. Author pushes to GitHub. Webhook triggers SurrealDB update. Reader queries the graph.

Version 0 does not do access control. Version 0 does not do contribution gating. Version 0 does not do token settlement.

Phase 1 adds access control and contribution layer.

Token access restricts reading. Tokens are purchased or earned. Tokens grant access to content.

Structured contribution adds a workflow. Contributors propose annotations. Authors review annotations. Quality filtering applies.

The gating implementation uses tokens. Tokens gate reading. Tokens gate contribution.

Infrastructure additions include a token mint. Fedimint provides the mint. Fedimint provides privacy.

Phase 2 adds coherence streams and settlement.

Multiple coherence streams emerge. Each stream is a lens. Streams filter and attribute content.

Automated settlement distributes tokens. Access purchases trigger settlement. Settlement flows to contributors.

Community signal emerges from aggregation. Annotations are weighted by trust. Weighted annotations form the community stream.

Infrastructure additions include a settlement layer. The layer tracks contributions. The layer distributes payments.

Phase 3 adds advanced architecture.

Knowledge graph enhances with deeper relationships. Relationships connect concepts. Connections enable discovery.

Coherence stream computation becomes real-time. Readers switch between lenses. Switching is instantaneous.

P2P replication goes beyond GitHub. Radicle provides the P2P layer. Replication ensures resilience.

Custom search combines keyword and semantic. SurrealDB provides vector search. Search returns coherent results.

Advanced token mechanics add governance. Token holders vote on proposals. Proposals affect stream weight.

Current choices are GitHub and SurrealDB. Both are proven. Both are open source.

Future choices may include Radicle for P2P. Radicle provides sovereignty. Sovereignty prevents censorship.

Token choices may include Fedimint. Fedimint provides Chaumian e-cash. Privacy protects readers.

Decision one is access control timing. Gate before or after Phase 1.

Decision two is contribution rights. Who can contribute. Who can approve.

Decision three is token distribution. How many tokens. How distributed initially.

Decision four is stream governance. Who controls stream weight. How to change weight.

Build the simplest thing that works. Ship version 0 first. Add complexity as needed.

The Living Book grows through use. Use reveals what matters. What matters shapes the roadmap.

: 000-ROOT.md




000 050 072 086

