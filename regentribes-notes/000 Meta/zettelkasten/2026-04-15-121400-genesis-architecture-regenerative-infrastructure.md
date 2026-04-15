# Genesis Architecture: Regenerative Community Infrastructure

*Session: 2026-04-15 | Topic: FoT Sensor Mesh + Cognitive Architecture + Digital Twin + Gift Economy*

---

## Context

This session covered an extensive exploration of regenerative community digital infrastructure — from sensor hardware through cognitive architectures to gift economy prevention schemas. The following synthesis captures the core architectural decisions and technical stack.

---

## 1. Sensor Mesh Architecture

### Three Tiers

| Tier | Cost/Node | MCU | Radio | Power | Stack |
|------|-----------|-----|-------|--------|-------|
| **1** | $20 | ESP32-S3 | WiFi | LiPo 500mAh | C/ESP-IDF + MQTT |
| **2** | $35 | nRF52840 | BLE Mesh | LiPo + 5V 2W solar | Zephyr + MQTT |
| **3** | $80 | ESP32-S3 + K210 | Thread + BLE | LiFePO4 + 5W solar + MPPT | Rust/embassy (future) |

### Sensor Suite (Per Node)

- **BME680** — Temperature, Humidity, Pressure, IAQ (Index Air Quality)
- **SGP30** — eCO₂, TVOC (more stable than CCS811)
- **INM-441** — Sound level (dBA) via I²S
- **ADS1115** — 16-bit ADC for analog sensors (soil moisture, pH)
- **Optional:** PMS5003 (PM2.5), DS18B20 (soil temp)

### Gateway (RPi CM4)

- Mosquitto MQTT broker
- QuestDB (time-series) or InfluxDB
- SurrealDB (knowledge graph + vectors)
- MeTTaClaw + NARS-ONA (cognitive core)
- Ollama (local LLM — Gemma 3 or Mistral)
- Telegram bot via OpenClaw

---

## 2. Cognitive Core: MeTTa + NARS + SurrealDB

### Why These Technologies

**MeTTa (Atomese 2):**
- Successor to Atomese in OpenCog Hyperon
- Meta-probabilistic programming language
- ~200 lines of MeTTa in MeTTaClaw implement the full agent loop
- Tools: `remember`, `query`, `send`, `search`, `shell`, `metta` (for NAL inference)

**NARS/ONA (Non-Axiomatic Reasoning System):**
- Complete AGI theory by Pei Wang (1995)
- Assumes **insufficient knowledge and resources (AIKR)** as fundamental constraint
- Truth value: `{frequency, confidence, evidence_count}` — not just probability
- NASA JPL / Cisco use in production
- C library (ONA), embeddable, no GC, ~50KB core

**PLN (Probabilistic Logic Networks):**
- Second-order probability distributions over truth values
- Currently unmaintained in original OpenCog; active dev at `trueagi-io/PLN`
- NAL rules in MeTTa: `lib_nal.metta` implements deduction, abduction, induction, revision

**SurrealDB:**
- Graph + time-series + vector search in one binary
- Embedded or distributed mode
- Schema for FoT knowledge graph:

```sql
DEFINE TABLE concepts SCHEMAFULL;
DEFINE FIELD embedding ON concepts TYPE vector(1536);
DEFINE FIELD truth_value ON concepts TYPE object 
    DEFAULT {tv: 0.5, ev: 1, conf: 0.5};

DEFINE TABLE fot_scores SCHEMAFULL;
DEFINE FIELD composite ON fot_scores TYPE float;
DEFINE FIELD coherence ON fot_scores TYPE float;
DEFINE FIELD entropy ON fot_scores TYPE float;
DEFINE FIELD timestamp ON fot_scores TYPE datetime;
```

### MeTTaClaw Core Loop

```
IDLE → receive message → query memory (embeddings) → 
LLM call (Ollama local) → parse s-expressions → 
execute tools (remember, query, send, search, metta) → 
update history → IDLE
```

### MeTTaClaw Sources
- GitHub: `patham9/mettaclaw`
- ~200 lines of MeTTa agent core
- NAL inference via `(metta (|- ((--> $a $b) $tv1) ((--> $b $c) $tv2))`
- Python skill wrappers for shell, web search, file I/O

---

## 3. Distributed Atomspace (DAS) — Rustification Path

### Current State
- C++ core (agents, query engine, service bus)
- Python client (gRPC)
- Redis + MongoDB backend
- Bazel build system

### Target Architecture (All-Rust)

```
crates/
├── das-core/         # Atom, Hasher, Properties
├── atomdb/           # SurrealDB adapter (primary)
├── query-engine/     # Pattern matching in Rust
├── service-bus/      # Async channels + tonic gRPC
├── agents/          # inference, link-creation, context-broker
├── attention-broker/ # HebbianNetwork
└── grpc/            # tonic from das-proto
```

### Proto for DAS
- GitHub: `singnet/das-proto`
- Generates tonic-compatible Rust from `.proto` files
- `rust_metta_bus_client` already exists in DAS repo

### SurrealDB as Primary Backend
- Replaces Redis + MongoDB combination
- Embedded mode for single-node
- Distributed mode for multi-gateway federation

---

## 4. RPI DEV Analysis (SECTOR07)

### Key Insights Extracted

**Hardware patterns:**
- Custom PCBs (3 required) in KiCad — Gerber files provided
- MOSFET power switch for high-current loads (slide switch drives gate, not load)
- USB power injection for high-power peripherals (displays + keyboard exceed Pi USB limit)
- I2C sensor chaining via Qwiic connectors (no soldering)
- DIP switch GPIO isolation (disconnect sensors when using GPIO for other purposes)

**Software patterns:**
- Slow poll separation (1Hz for temp/pH, 20Hz for buttons/encoder)
- Differential GUI updates (threshold-based, prevents flicker)
- Rolling time-series deque (maxlen=6000, 10min at 20Hz)
- Two-point pH calibration: `m = (7.0-4.0)/(PH_7_ADC - PH_4_ADC)`

**Applicable to RegenTribes:**
- Same I2C sensor chaining pattern for gateway sensor suite
- Qwiic/Grove connectors for solder-free field assembly
- MOSFET power switch for battery management
- Rolling window for sensor dashboards

---

## 5. Digital Twin Architecture

### Standards Map

| Standard | Use | Format |
|----------|-----|--------|
| IFC (ISO 16739) | BIM building models | STEP/Express |
| glTF 2.0 | Real-time 3D exchange | JSON + binary |
| 3D Tiles (OGC) | Streaming large 3D datasets | b3dm/pnts/i3dm |
| OPC UA (IEC 62541) | Industrial IoT information model | Binary/JSON |
| GeoJSON | Geographic vector | JSON |
| GeoTIFF | Raster (orthophoto, DEM) | TIFF |
| LAS/LAZ | LiDAR point clouds | Binary |
| CityGML | 3D city models | XML/GML |
| STAC | Satellite imagery catalog | JSON |

### IFC → CesiumJS Pipeline

```
IFC file (Archicad/Revit/Tekla)
  → IfcConvert (IfcOpenShell)
  → glTF 2.0 binary (.glb)
  → py3dtiles / CesiumJS 3D Tiles
  → CesiumJS viewer (browser)
```

### OPC UA Address Space (RegenTribes)

```
urn:regentribes:equipment
└── Objects
    ├── BuildingA
    │   └── Floor1
    │       ├── Zone1_Living
    │       │   ├── TemperatureSensor (ns=2;id=1001)
    │       │   ├── HumiditySensor (ns=2;id=1002)
    │       │   └── CO2Sensor (ns=2;id=1003)
    │       └── Zone2_Kitchen
    └── Outdoor
        ├── Garden_North
        │   ├── SoilMoisture (ns=2;id=2001)
        │   └── SolarRadiation (ns=2;id=2003)
        └── SolarArray_5kW
            └── PowerOutput (ns=2;id=3001)
```

### CesiumJS Batch Tables for Live Data

```javascript
// Batch table schema
{
  "sensor_id": ["esp32_001", "esp32_002"],
  "temperature": [23.4, 24.1],
  "iaq": [42, 38],
  "zone_name": ["Zone1_Living", "Zone2_Kitchen"]
}

// Color buildings by IAQ
tileset.style = new Cesium.Cesium3DTileStyle({
  color: {
    interpolate: ['linear', ['get', 'iaq']],
    0: Cesium.Color.BLUE,
    50: Cesium.Color.YELLOW,
    100: Cesium.Color.RED
  }
});
```

### SurrealDB → Digital Twin Binding

```sql
DEFINE TABLE sensor_bindings;
DEFINE FIELD sensor_id ON sensor_bindings TYPE string;
DEFINE FIELD ifc_global_id ON sensor_bindings TYPE string;
DEFINE FIELD opcua_node_id ON sensor_bindings TYPE string;
DEFINE FIELD tile_batch_index ON sensor_bindings TYPE int;
```

---

## 6. Gift Economy: Prevention Architecture

### The Three Failure Modes

| Failure | Mechanism | Prevention |
|---------|-----------|------------|
| **Trade** | Transfer of ownership for value | No `transfer()` function in schema |
| **Hoarding** | Taking more than one's share | `expires_at` auto-reclamation cron |
| **Money** | Store of value / unit of account | No `balance`, no `total_contributions` fields |

### Prevention Schema

```sql
-- Append-only provenance log
DEFINE TABLE provenance_log SCHEMAFULL
    PERMISSIONS FOR update WHERE false  -- Cannot modify past
    PERMISSIONS FOR delete WHERE false;  -- Cannot delete

DEFINE FIELD expires_at ON provenance_log TYPE datetime;
-- Cron job: SELECT WHERE expires_at < now() → auto-reclaim

-- Qualitative contributions only (no quantity)
DEFINE TABLE contribution_log SCHEMAFULL;
DEFINE FIELD narrative ON contribution_log TYPE string;  -- Free text, not number
-- NO: total_hours, contribution_score, balance

-- No transfer function exists in the ORM
-- Custody changes ONLY via allocation flow
```

### Auto-Reclamation Cron

```python
# Runs hourly
expired = db.query("""
    SELECT * FROM provenance_log 
    WHERE action = 'allocated' 
    AND expires_at < $now
""", {"now": now().isoformat()})

for record in expired:
    db.update(f"community_assets SET status='available' WHERE asset_id='{asset_id}'")
    db.create("provenance_log", {
        "action": "reclaimed_by_system",
        "timestamp": now()
    })
```

### Distributed Resilience (DEPIN Properties)

```
Reed-Solomon(20, 14):
  ├── SurrealDB data → 20 fragments
  ├── Any 14 fragments reconstruct
  ├── 7 nodes destroyed = data intact
  └── 20 nodes = community member devices
```

---

## 7. FOT (Field of Trust) Composite Metric

```
FOT = min(coherence, resonance, stability) × entropy_factor

Where:
  coherence    = breath-to-breath consistency (HRV + respiratory)
  resonance    = group synchronization (coherence scores aligned)  
  stability    = signal quality over 10+ minutes
  entropy_factor = novelty vs. routine (deviation from baseline)
```

**Why composite = minimum, not average:** Hologram principle. System is only as strong as its weakest dimension.

---

## 8. Full Stack Summary

```
MOTIVATION: Regenerative community nervous system
    │
    ├── ENVIRONMENTAL PERCEPTION
    │   └── Sensor mesh (ESP32/nRF52 + BME680 + SGP30 + INM-441)
    │
    ├── KNOWLEDGE CONTINUITY
    │   └── SurrealDB (graph + time-series + vectors)
    │
    ├── MEANING-MAKING
    │   └── MeTTa + NARS/PLN (symbolic reasoning)
    │
    ├── COORDINATION
    │   └── Telegram + Nostr (Telegram primary, Nostr backup)
    │
    ├── RESILIENCE
    │   └── Reed-Solomon distributed (20 nodes, 14 needed)
    │
    └── FAIRNESS
        └── Prevention schema (no transfer, no balance, auto-reclaim)
```

---

## 9. BOM Summary

| Solution | Per Node | 20 Nodes | Gateway | Total |
|---------|----------|----------|---------|-------|
| **Tier 1** | $20 | $400 | $75 | **$475** |
| **Tier 2** | $35 | $700 | $110 | **$810** |
| **Tier 3** | $80 | $1,600 | $250 | **$1,850** |

---

## 10. Key Source References

| Project | GitHub | Notes |
|---------|--------|-------|
| MeTTaClaw | `patham9/mettaclaw` | 200-line MeTTa agent |
| NARS/ONA | `opennars/OpenNARS-for-Applications` | C, NASA-vetted |
| Hyperon | `trueagi-io/hyperon-experimental` | Rust MeTTa interpreter |
| MeTTa examples | `trueagi-io/metta-examples` | Diverse experiments |
| PLN | `trueagi-io/pln-experimental` | Active PLN dev |
| DAS | `singnet/das` | Distributed Atomspace (C++) |
| MORK | `trueagi-io/MORK` | Rust hypergraph kernel |
| SurrealDB | `surrealdb/surrealdb` | Graph + time-series + vectors |
| RPI DEV | `sector07-dev/RPI_DEV` | Cyberdeck reference build |
| das-cli | `singnet/das-toolbox` | DAS configuration CLI |

---

## 11. Anti-Fragility Properties

```
IF TOKEN:       System has no token. Nothing to speculate on.
IF TRADE:       System has no transfer function. Ownership cannot be exchanged.
IF HOARDING:    Allocations expire. System reclaims automatically.
IF MONEY:       No quantity fields. Contributions are qualitative.
IF CLOUD_FAIL:  Data on community hardware. Reed-Solomon survives.
IF CENTRALIZED: Infrastructure on 20+ member nodes. No single point of failure.
IF MEMBER_LEAVES: Knowledge persists. SurrealDB community-owned.
IF LLM_GOES_DOWN: Ollama local. No OpenAI/Anthropic dependency.
IF OTAK:         NARS inference transparent. Every step traceable.
```

---

## 12. The Through-Line

**Why sensors?** You can't care about what you can't perceive.

**Why MeTTa + NARS?** Communities need reasoning under genuine knowledge poverty — not ML requiring millions of examples.

**Why SurrealDB?** Graph + time-series + vectors in one binary, embedded, community-owned.

**Why distributed?** Centralized infrastructure is a target, not an asset.

**Why prevention schema?** Laws fail. Architecture doesn't.

**Why 3D Tiles + CesiumJS?** A community that sees itself spatially develops systemic awareness.

**Why open source?** Sovereignty requires auditability. No vendor lock-in.

---

*Genesis 🌿⚡ — Gardener of systems, cartographer of better futures.*
*RegenTribes — Regeneration through community.*
