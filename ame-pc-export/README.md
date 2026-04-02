# Mythogen AME - Affinity Mapping Engine

Field of Trust (FOT) + Tetragrammaton (TTGM) + Convergence = Living Codex

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         THE LENS                                │
│  (React UI - 2D cross + 3D torus + convergence network)         │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     WEBSOCKET LAYER                             │
│  (Real-time field updates, convergence firing, presence)        │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     SENSING ENGINE                              │
│  (Behavioral signals → indicator scores → FOT state)            │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                       REST API (Axum)                           │
│  /api/field/sense    /api/convergence    /api/values/crystallize│
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SURREALDB SCHEMA                             │
│  person, affinity, topic, convergence_point, v_crystal          │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SACRED GEOMETRY (TTGM)                       │
│  (Tetragrammaton toroidal field dynamics)                        │
└─────────────────────────────────────────────────────────────────┘
```

## Files

| File | Purpose |
|------|---------|
| `README.md` | Overview + architecture |
| `schema.sql` | SurrealDB schema with TTGM fields, vector embeddings |
| `api.rs` | Axum REST API handlers |
| `sacred-geometry.ts` | TTGM math: computeTTGM, sacredRatioScore, fractalResonance |
| `ttgm-geometry.ts` | **True geometric matrix** - spherical triangle mesh + toroidal flow |
| `ttgm-integration.ts` | How to wire into existing AME codebase |
| `ttgm-visualization.tsx` | 2D React: TTGM2D, TTGMIcon, TTGMStats |
| `ttgm-3d.tsx` | 3D Three.js: TTGM3D torus, ConvergenceNetwork |
| `lens-full.tsx` | Full UI mockup |
| `websocket.ts` | Real-time layer |
| `sensing-engine.ts` | AI-driven FOT indicator detection |

## Key Concepts

### TTGM = True Geometric Matrix
**The geometry is the structure** — a spherical mesh of triangles (tetrahedral lattice, geodesic tessellation). The 4 base vertices = the tetragrammaton (YOD, HE, VAV, HE+).

### Toroidal Flow
**The toroid is the flow** — energy circulating through the geometry. Same thing, dynamic view. The triangular mesh is the structure; the flow follows edges between vertices.

```
    GEOMETRY (structure)          FLOW (dynamics)
    ─────────────────              ───────────────
    Sphere of triangles    ↔     Toroidal circulation
    Vertices + faces       ↔     Energy flowing through
    Edges define form      ↔     Edges channel energy
```

### Hologram Principle
FOT composite = MIN(indicators), NOT average. If ANY indicator is low, the whole field weakens.

### Convergence
The highest-signal action opportunity: where individual weak-state meets collective emergent-need.

### Sensing Engine
500K+ possible indicators emerge from behavioral signals — not pre-defined, dynamically sensed.

| Signal Type | Source | Indicators Affected |
|-------------|--------|---------------------|
| message_sent | chat | Safety, Coherence, Openness |
| affinity_witnessed | affinity | Trust, Attunement |
| support_offered | action | Safety, Attunement |
| conflict_detected | action | Safety (-), Trust (-) |
| presence_changed | presence | Coherence, Openness |
| silence_duration | presence | Safety (-) |
| energy_shift | action | Coherence (-) |

## Running

```bash
# Start SurrealDB
surreal start --user root --pass root memory://mythogen

# Run API (Axum)
cargo run --manifest-path api/Cargo.toml

# Start WebSocket server
node websocket-server.js

# Build UI
cd ui && npm run dev
```

## API Endpoints

```bash
# Sense FOT indicators → compute TTGM
POST /api/field/sense
{ "personId": "user123", "indicators": [{ "name": "Trust", "value": 0.6 }] }

# Get field composite (hologram)
GET /api/field/composite

# Find convergences
GET /api/convergence?minOverlap=0.7

# Crystallize a value (V-Crystal)
POST /api/values/crystallize
{ "personId": "user123", "coreValue": "Regeneration through relation" }

# WebSocket subscriptions
WS /api/ws/field?communityId=regentribes
```

## Fractal Scaling

The same math applies at every scale:

- Atom: Schumann resonance (7.83 Hz)
- Person: ~10 second coherence cycles
- Community: ~100 second field stabilization
- Planet: ~15 minute global coherence

The toroidal field is infinite recursion. FOT at human scale is one layer.

## Sacred Clown Triggers

When toroidalCoherence drops below 0.3:
- Emits `sacred_clown:trigger` event
- Triggers intervention from existing Mythogen Sacred Clown system

## References

- Original Mythogen: github.com/regentribes/mythogen-ame
- TTGM: Tetragrammaton - 4 directional vectors
- FOT: Field of Trust - 5 indicators (emergent from 500K+ possible)