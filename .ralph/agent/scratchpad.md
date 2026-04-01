# Affinity Mapping Engine - Scratchpad

## Understanding

The Affinity Mapping Engine is a Rust service for regenerative communities that:
- Maps affinity relationships between members via peptide-like semantic networks
- Four relational layers: needs, beliefs, principles, values
- Accepts: messages, trust events, participation patterns
- Returns: affinity clusters, relationship strength scores, field of trust indicators

## Key Scenarios
1. New member → seed profile with four-distinction separation
2. Ongoing interaction → weighted relationship scoring builds affinity map
3. Trust events → increment field of trust across 5 dimensions
4. 30-day time-lock → prevents viral manipulation

## Anti-Capture Mechanisms
- Y Cards: algorithmic transparency
- Sacred Clown: productive disruption, prevents premature closure
- Living Membrane: semi-permeable boundary management
- V-Crystal: conflict immune response

## Safety: Level B
- Property-based testing for scoring algorithms and field of trust calculations
- Manipulation of affinity data could enable social engineering

## Tech Stack
- Rust + actix-web (REST) + tungstenite (WebSocket)
- Target: RISC-V primary, ARM secondary, x64 legacy
- Containerized for Kubernetes
- Database for persistent affinity graphs, cache for real-time scoring

## Task Breakdown (iteration plan)
1. **Scaffold** - Cargo workspace, deps, module structure
2. **Domain models** - Member, AffinityLayer, TrustEvent, SemanticNode, etc.
3. **Seed profile creation** - New member with four-distinction separation
4. **Affinity scoring engine** - Weighted relationship scoring
5. **Field of Trust** - Five dimensions, trust event processing
6. **Time-lock mechanism** - 30-day viral manipulation prevention
7. **Anti-capture mechanisms** - Y Cards, Sacred Clown, Living Membrane, V-Crystal
8. **REST API** - actix-web endpoints
9. **WebSocket** - Real-time field of trust monitoring
10. **Property-based testing** - proptest for scoring/trust calculations
11. **Containerization** - Dockerfile, k8s manifests

## Iteration 1 - DONE
Scaffold completed and committed (559d88f). Project compiles, all modules in place.
Domain models already defined with proper types during scaffolding.
Next iteration should pick up domain models task or seed profile creation.

## Iteration 2 - DONE
Closed domain models task (already done in scaffold).
Implemented seed profile creation (0e790a8):
- `src/seed.rs`: `create_member()` builds Member with four-distinction SeedProfile
- Validates: empty name, empty labels, case-insensitive duplicate labels within layers
- Seed nodes start at weight 0.1 to prevent newcomer distortion
- 11 unit tests all passing
- Next: affinity scoring engine (ame:scoring) is the natural next task

## Iteration 3 - DONE
Implemented affinity scoring engine (fc642ff):
- `src/scoring/engine.rs`: Full scoring implementation
- `compute_layer_score()`: Jaccard word-overlap similarity on normalized labels, symmetric bidirectional
- `compute_composite_score()`: Weighted average across all four layers (values 2.5x > needs 1.0x)
- `reinforce_node()`: Interaction-driven weight growth approaching but never exceeding 1.0
- `discover_clusters()`: Connected components via BFS with cohesion filtering and centroid scores
- Design decision: layer scores are raw similarity [0,1]; weights only affect composite
- 17 scoring tests + 11 seed tests all passing (28 total)
- Next: field of trust (ame:trust) is the natural next task

## Iteration 4 - DONE
Implemented field of trust processor (465a515):
- `src/trust/processor.rs`: Full trust processing with validation, diminishing returns, decay, aggregation
- `validate_event()`: Rejects self-trust, out-of-range magnitude (>10.0), future timestamps
- `process_event()`: Applies diminishing returns — trust grows fast near 0, slow near 100
- `compute_delta()`: Positive events get headroom-based diminishing; negative events apply at full magnitude
- `apply_decay()`: Time-based decay with configurable daily rate and floor
- `aggregate_trust()`: Weighted average across 5 dimensions (integrity 2.0x > competence 1.0x)
- `compute_bidirectional_trust()`: A→B and B→A tracked independently
- `compute_trust_map()`: Groups incoming trust by source member
- `process_batch()`: Processes event arrays with partial failure support
- 18 trust tests + 17 scoring + 11 seed = 46 total, all passing
- Next: 30-day time-lock (ame:timelock) is the natural next task
