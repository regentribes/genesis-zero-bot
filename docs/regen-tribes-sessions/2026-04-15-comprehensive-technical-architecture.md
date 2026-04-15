# RegenTribes Technical Architecture — Complete Session Synthesis

**Date:** 2026-04-15  
**Duration:** Full session (~10 hours)  
**Participants:** Vitali, Genesis  
**Topic:** Full-stack regenerative community infrastructure: IoT mesh, cognitive reasoning, knowledge graphs, gift economy architecture, digital twins, and prevention-first system design

---

## Executive Summary

This session established the complete technical architecture for RegenTribes — a regenerative community nervous system. The architecture spans from physical sensor nodes to cognitive reasoning, from real-time data to long-term memory, and from individual community deployment to multi-site federation.

**The core proposition:** Build a distributed, community-owned cognitive infrastructure that enables regenerative communities to perceive their environment, reason collectively, maintain continuity of knowledge, and prevent regression to extractive dynamics — using open tools, owned hardware, and architectural prevention rather than legal prohibition.

**The stack in one line:** ESP32/nRF52 sensor mesh → MQTT → SurrealDB + QuestDB → MeTTaClaw + NARS/PLN reasoning → Telegram + Nostr interface → CesiumJS 3D visualization, with Reed-Solomon distributed storage and gift-economy prevention schema.

---

## Part I: The Foundation

### 1.1 Why This Architecture Exists

**The problem:** Regenerative communities need infrastructure that:
- Perceives the physical environment in real-time
- Synthesizes individual observations into collective understanding
- Maintains institutional memory across membership changes
- Coordinates action without hierarchy
- Prevents regression to extractive dynamics

**Why existing tools fail:** AWS IoT, Google Nest, IFTTT, Notion, and Slack each solve a piece. None provides community-owned infrastructure. None keeps the knowledge. None survives the departure of a founding member. None prevents the soft, informal forms of hoarding that precede extractive collapse.

**Why open source isn't enough:** Running open-source software on corporate cloud infrastructure still surrenders sovereignty. The infrastructure must run on community hardware, owned by the community.

### 1.2 The Layered Architecture

```
MOTIVATION
│
├─ PURPOSE: Regenerative community nervous system
│
├─ STRATEGY:
│   ├── Environmental perception (sensor mesh)
│   ├── Knowledge continuity (SurrealDB)
│   ├── Meaning-making (MeTTa + NARS)
│   ├── Coordination without hierarchy (Telegram + Nostr)
│   ├── Resilience and sovereignty (distributed)
│   └── Prevention of extractive dynamics (schema)
│
├─ HARDWARE:
│   ├── Sensor nodes: ESP32-S3 / nRF52840 + BME680 + SGP30 + INM-441
│   ├── Gateway: RPi CM4 + NVMe SSD + nRF52840 dongle
│   ├── Enclosures: 3D printed PETG/PC, IP54/IP67
│   └── Power: LiPo / LiFePO4 + solar
│
├─ SOFTWARE:
│   ├── Gateway: Debian/Alpine + Docker
│   ├── MQTT: Mosquitto
│   ├── Time-series: QuestDB
│   ├── Agent: Python + MeTTa + ONA
│   ├── LLM: Ollama (local)
│   └── Visualization: CesiumJS + 3D Tiles
│
├─ KNOWLEDGE:
│   ├── Hypergraph: concepts + relations + embeddings
│   ├── Time-series: sensor readings
│   ├── Gift economy: provenance + allocation
│   └── FOT composite: coherence × resonance × stability
│
├─ DISTRIBUTION:
│   ├── Tailscale WireGuard VPN (free tier)
│   ├── SurrealDB replication (explicit, read-approved)
│   └── Iroh (firmware distribution, future)
│
└─ SPATIAL:
    ├── IFC BIM models → glTF → 3D Tiles
    ├── GeoJSON parcels + terrain
    ├── OPC UA sensor binding
    └── CesiumJS viewer with live batch tables
```

---

## Part II: Sensor Mesh — Perception Layer

### 2.1 Sensor Architecture

**What is measured:**

```
ENVIRONMENT
        ├── AIR: Temperature, Humidity, Pressure, IAQ, eCO₂, TVOC, Sound (dBA)
        ├── LIGHT: Illuminance (lux), UV index
        ├── SOIL: Temperature, Volumetric water content, pH
        └── BIOMETRIC (opt-in): Heart rate variability, Breath rate, Skin conductance
```

**Key sensors:**

| Sensor | IC | Protocol | Cost |
|---|---|---|---|
| Temp/Humidity/Pressure/IAQ | Bosch BME680 | I²C | $6 |
| eCO₂ + TVOC | Sensirion SGP30 | I²C | $5.50 |
| Microphone | Knowles INM-441 | I²S | $3 |
| Light | BH1750 or VEML7700 | I²C | $1.50-4 |
| Soil moisture | Capacitive probe | Analog (ADS1115) | $3 |
| pH | Atlas Scientific EZO | I²C | $25 (industrial) |

### 2.2 The Three Tiers

**Tier 1 — Minimal ($20/node)**
- ESP32-S3-WROOM-1 (4MB flash)
- BME680 + INM-441
- C / ESP-IDF firmware
- WiFi direct to gateway
- MQTT over WiFi
- For: First deployment, proof of concept, <20 nodes

**Tier 2 — Mesh ($35/node)**
- nRF52840 + Zephyr RTOS
- BLE 5.0 Mesh (native, flooding protocol)
- Deep sleep: <10µA
- Solar + LiPo 18650 capable
- For: 20-100 nodes, power-optimized, multi-building

**Tier 3 — Cognitive ($80/node)**
- ESP32-S3 + K210 dual-core
- Vision capable (K210 camera)
- TinyML anomaly detection at edge
- Thread + BLE dual protocol
- LiFePO4 + 5W solar + MPPT
- For: Production, multi-site federation

### 2.3 Power Architecture

| Approach | Battery | Solar | Lifespan |
|---|---|---|---|
| Tier 1 (indoor) | LiPo 500mAh | None | ~6 months (1/min reading) |
| Tier 2 (outdoor) | LiPo 18650 3000mAh | 5V 2W panel | Perpetual in most climates |
| Tier 3 (extreme) | LiFePO4 18650 | 5V 5W + MPPT | Cold-tolerant, all climates |

### 2.4 Firmware Principles

```c
// Sensor reading cycle
void loop() {
    if (wake_reason == TIMER) {
        SensorReading r = read_all_sensors();
        
        // Publish to MQTT
        char payload[256];
        snprintf(payload, sizeof(payload),
            "{\"node\":\"%s\",\"t\":%.1f,\"h\":%.1f,\"p\":%.1f,\"iaq\":%.0f,\"sound\":%.1f}",
            NODE_ID, r.temp, r.humidity, r.pressure, r.iaq, r.sound);
        
        mqtt.publish("fot/sensors", payload);
        enter_deep_sleep(SLEEP_SECONDS);
    }
}
```

**Key principles:**
- No-OS or FreeRTOS for Tier 1, Zephyr for Tier 2+
- Deep sleep current target: <10µA
- OTA firmware updates via MQTT
- Calibration stored in EEPROM
- BLE Mesh: flooding, not routing (no routing table needed)

### 2.5 BOM (Tier 2, Per Node)

| Component | Part | Cost |
|---|---|---|
| MCU | nRF52840 (production module) | $4.50 |
| Temp/Humidity/Pressure/IAQ | BME680 | $6 |
| Air Quality | SGP30 | $5.50 |
| Microphone | INM-441 | $3 |
| PCB (prototype) | JLCPCB 2-layer 50x50mm | $2 |
| Battery | LiPo 18650 3000mAh | $3.50 |
| Solar | 5V 2W panel | $4 |
| Charger | TP4056 USB-C | $0.80 |
| Enclosure | 3D printed PETG | $1 |
| Connectors | JST-PH 4-pin Qwiic | $0.50 |
| **Total** | | **$30.80** |

---

## Part III: Cognitive Core — Reasoning Layer

### 3.1 Why MeTTa

**The problem with traditional software:**
```
if temperature > 30:
    send_alert()
```
This is reactive. It doesn't reason about context, history, or relationships.

**MeTTa's approach:**
```
!(match &self
  ((Inheritance $X ThermalDiscomfort) 
   (AND (temperature $X (> 30))
   (occupancy $X (> 5))
   (ventilation_closed $X))
  $X)
```
Pattern matching over the knowledge graph, with inference.

**Why it matters for RegenTribes:** Communities need to reason about complex relationships — "this building has poor air quality AND it's been occupied by >5 people AND the ventilation has been closed for 2 hours" — not just threshold alerts.

### 3.2 Why NARS/PLN

**Standard ML:** Probability. "80% confidence the IAQ is degraded."

**NARS:** Truth value = `{frequency, confidence, evidence_count}`. "IAQ has been degraded in 72% of observed cases when occupancy exceeds 5 and ventilation is closed, based on 23 observations, with moderate confidence."

**Why this matters:**
- A belief from 3 observations looks different from one with 300
- Communities making decisions about shared resources need to know how certain their certainty is
- PLN handles second-order probability distributions — distributions over distributions

**Sources:**
- Pei Wang's NARS theory (1995) — non-axiomatic reasoning under AIKR
- ONA (OpenNARS for Applications) — C implementation, NASA-vetted, embedded-capable
- `trueagi-io/PLN` — active development of PLN for Hyperon/MeTTa
- `lib_nal.metta` in MeTTaClaw — NAL inference rules as MeTTa rewrite rules

### 3.3 The MeTTaClaw Architecture

MeTTaClaw (github.com/patham9/mettaclaw) — 200 lines of MeTTa implementing the agent core.

**The loop:**
```
IDLE → RECEIVE (Telegram) → QUERY MEMORY (embeddings) → 
BUILD CONTEXT (prompt + history) → LLM CALL (Ollama/Claude) → 
EXECUTE TOOLS (remember, query, send, search, shell, metta) → 
UPDATE HISTORY → LOOP
```

**Tools available:**
```metta
(remember "string")        ; Store in long-term memory
(query "string")           ; Semantic recall via embeddings
(send "message")          ; Telegram
(search "query")          ; DuckDuckGo
(shell "command")        ; Gateway OS
(metta "sexpression")     ; NARS/NAL inference
(read-file "filename")     ; File system
```

**Key design decisions:**
- Token-efficient: embeddings not full history in every prompt
- Error feedback stored in history: LLM sees what went wrong
- Periodic wake tasks (10-minute intervals) for background goals
- 50 tool-use cycles per message for complex reasoning

### 3.4 Why ONA (NARS-C)

- C code, ~50KB core, no GC
- NASA JPL autonomous systems
- Cisco traffic surveillance
- Runs on embedded hardware
- Embeddable as C library via ctypes

### 3.5 The NARS Truth Function Implementation

From `lib_nal.metta` in MeTTaClaw:

```metta
;; Confidence → Weight: c/(1-c)
(= (Truth_c2w $c)
 (/ $c (- 1 $c)))

;; Weight → Confidence: w/(w+1)  
(= (Truth_w2c $w)
 (/ $w (+ $w 1)))

;; Deduction: multiply frequencies, confidence decays
(= (Truth_Deduction (stv $f1 $c1) (stv $f2 $c2))
 (stv (* $f1 $f2) (* (* $f1 $f2) (* $c1 $c2))))

;; Revision: weighted average of evidence
(= (Truth_Revision (stv $f1 $c1) (stv $f2 $c2))
 (let* (($w1 (Truth_c2w $c1))
        ($w2 (Truth_c2w $c2))
        ($w (+ $w1 $w2))
        ($f (/ (+ (* $w1 $f1) (* $w2 $f2)) $w))
   (stv (min 1.00 $f) (min 0.99 (max (max $c $c1) $c2)))))
```

---

## Part IV: Knowledge Graph — Memory Layer

### 4.1 Why SurrealDB

| Alternative | Why SurrealDB Wins |
|---|---|
| Neo4j (graph) | No native time-series + vectors |
| InfluxDB (time-series) | No graph query capability |
| PostgreSQL + pgvector | Vectors bolted-on, not native |
| Neo4j + InfluxDB | Two databases, two failure modes |
| **SurrealDB** | Graph + time-series + vectors + embedded mode |

### 4.2 Schema

```sql
-- CORE ONTOLOGY
DEFINE TABLE concepts SCHEMAFULL;
DEFINE FIELD name ON concepts TYPE string;
DEFINE FIELD description ON concepts TYPE string;
DEFINE FIELD source ON concepts TYPE string;
DEFINE FIELD embedding ON concepts TYPE array<float> DEFAULT [];
DEFINE FIELD truth_value ON concepts TYPE object 
    DEFAULT {tv: 0.5, ev: 1, conf: 0.5};  -- NARS-style
DEFINE FIELD affinity_group ON concepts TYPE string;
DEFINE FIELD created ON concepts TYPE datetime DEFAULT time::now();

DEFINE TABLE relations SCHEMAFULL;
DEFINE FIELD from ON relations TYPE record(concepts);
DEFINE FIELD to ON relations TYPE record(concepts);
DEFINE FIELD relation_type ON relations TYPE string;  -- is_a, part_of, causes
DEFINE FIELD strength ON relations TYPE float DEFAULT 0.5;
DEFINE FIELD evidence ON relations TYPE array<string> DEFAULT [];
DEFINE FIELD created ON relations TYPE datetime DEFAULT time::now();

-- SENSOR READINGS (time-series)
DEFINE TABLE sensor_readings SCHEMAFULL
    PERMISSIONS FOR select WHERE true
    PERMISSIONS FOR create WHERE true
    PERMISSIONS FOR update WHERE false
    PERMISSIONS FOR delete WHERE false;

DEFINE FIELD node_id ON sensor_readings TYPE string;
DEFINE FIELD timestamp ON sensor_readings TYPE datetime;
DEFINE FIELD temperature ON sensor_readings TYPE float;
DEFINE FIELD humidity ON sensor_readings TYPE float;
DEFINE FIELD iaq ON sensor_readings TYPE float;
DEFINE FIELD co2 ON sensor_readings TYPE float;
DEFINE FIELD sound ON sensor_readings TYPE float;
DEFINE FIELD light ON sensor_readings TYPE float;

-- FOT SCORES
DEFINE TABLE fot_scores SCHEMAFULL
    PERMISSIONS FOR select WHERE true
    PERMISSIONS FOR create WHERE true
    PERMISSIONS FOR update WHERE false;

DEFINE FIELD composite ON fot_scores TYPE float;
DEFINE FIELD coherence ON fot_scores TYPE float;
DEFINE FIELD entropy ON fot_scores TYPE float;
DEFINE FIELD resonance ON fot_scores TYPE float;
DEFINE FIELD stability ON fot_scores TYPE float;
DEFINE FIELD timestamp ON fot_scores TYPE datetime;

-- MEMBERS
DEFINE TABLE members SCHEMAFULL
    PERMISSIONS FOR select WHERE true
    PERMISSIONS FOR create WHERE true
    PERMISSIONS FOR update WHERE auth() = "governance_admin";

DEFINE FIELD name ON members TYPE string;
DEFINE FIELD did ON members TYPE string;  -- Decentralized Identifier
DEFINE FIELD telegram_id ON members TYPE string;
DEFINE FIELD interests ON members TYPE array<string>;
DEFINE FIELD current_goals ON members TYPE array<string>;
DEFINE FIELD projects ON members TYPE array<string>;
DEFINE FIELD member_since ON members TYPE datetime;

-- AFFINITY SESSIONS
DEFINE TABLE affinity_sessions SCHEMAFULL;
DEFINE FIELD session_id ON affinity_sessions TYPE string;
DEFINE FIELD facilitator ON affinity_sessions TYPE record(members);
DEFINE FIELD timestamp ON affinity_sessions TYPE datetime;
DEFINE FIELD duration_min ON affinity_sessions TYPE int;
DEFINE FIELD participants ON affinity_sessions TYPE array<record(members)>;
DEFINE FIELD themes ON affinity_sessions TYPE array<string>;

-- COMMUNITY ASSETS (Gift Economy)
DEFINE TABLE community_assets SCHEMAFULL
    PERMISSIONS FOR select WHERE true
    PERMISSIONS FOR create WHERE true
    PERMISSIONS FOR update WHERE false   -- IMMUTABLE after creation
    PERMISSIONS FOR delete WHERE false;   -- NEVER delete

DEFINE FIELD asset_id ON community_assets TYPE string;
DEFINE FIELD description ON community_assets TYPE string;
DEFINE FIELD asset_type ON community_assets TYPE string;
DEFINE FIELD created_at ON community_assets TYPE datetime DEFAULT time::now();
DEFINE FIELD created_by ON community_assets TYPE record(members);
DEFINE FIELD status ON community_assets TYPE string 
    DEFAULT "available";  -- available | allocated | maintenance | retired
DEFINE FIELD current_custodian ON community_assets TYPE record(members) DEFAULT none;

-- PROVENANCE LOG (Append-only)
DEFINE TABLE provenance_log SCHEMAFULL
    PERMISSIONS FOR select WHERE true
    PERMISSIONS FOR create WHERE true
    PERMISSIONS FOR update WHERE false  -- APPEND ONLY
    PERMISSIONS FOR delete WHERE false;

DEFINE FIELD asset_id ON provenance_log TYPE record(community_assets);
DEFINE FIELD action ON provenance_log TYPE string;  -- created|allocated|returned|maintained|retired
DEFINE FIELD actor ON provenance_log TYPE record(members);
DEFINE FIELD timestamp ON provenance_log TYPE datetime DEFAULT time::now();
DEFINE FIELD duration_minutes ON provenance_log TYPE int DEFAULT none;
DEFINE FIELD expires_at ON provenance_log TYPE datetime DEFAULT none;

-- ALLOCATION POLICIES
DEFINE TABLE allocation_policies SCHEMAFULL
    PERMISSIONS FOR select WHERE true
    PERMISSIONS FOR update WHERE auth() = "governance_admin";

DEFINE FIELD asset_type ON allocation_policies TYPE string;
DEFINE FIELD max_per_member ON allocation_policies TYPE int;
DEFINE FIELD max_duration_minutes ON allocation_policies TYPE int;
DEFINE FIELD auto_return ON allocation_policies TYPE bool DEFAULT true;
```

---

## Part V: Prevention Architecture — Gift Economy

### 5.1 The Three Failure Modes

```
TRADE:     Transfer of ownership for value
HOARDING:  Taking more than one's share
MONEY:     A unit that stores value and enables exchange
```

### 5.2 Prohibition vs. Prevention

**PROHIBITION (fails):**
```
"Hoarding is illegal and will be punished"
→ Someone can still try
→ Enforcement fails
→ Community fractures
```

**PREVENTION (works):**
```
"The system has no transfer() function"
"All allocations expire automatically"
"There is no balance field to accumulate"
```

### 5.3 The Prevention Stack

| Failure Mode | Prevention Mechanism |
|---|---|
| Trade | No transfer() function in schema |
| Hoarding | expires_at + cron auto-reclamation |
| Accumulation | No balance/total_contributions fields |
| Money | Contributions are qualitative (narrative), not quantitative |
| Data tampering | PERMISSIONS FOR update WHERE false on key tables |

### 5.4 The Cron Reclamation

```python
# Runs every hour — automatic expiry and reclamation
EXPIRED = provenance_log WHERE expires_at < now()
        │
        └── UPDATE asset SET status = 'available', custodian = null
        └── UPDATE provenance_log SET action = 'auto_returned'
        └── CREATE provenance_log entry "reclaimed_by_system"
```

**The system reclaims. Not humans. Not law. The cron job.**

---

## Part VI: Digital Twin — Spatial Layer

### 6.1 The Three Model Hierarchy

```
LAYER 1: TERRAIN + GIS
        ├── GeoJSON parcels
        ├── DEM/DTM terrain
        ├── Soil types, NDVI, hydrology
        └── EPSG:4326 + local ENU reference frame

LAYER 2: BIM → glTF → 3D Tiles
        ├── IFC models from architects
        ├── Converted to glTF 2.0 binary
        ├── Tiled with py3dtiles / CesiumJS 3D Tiles
        └── Streaming to browser

LAYER 3: IoT → OPC UA → CesiumJS Batch Tables
        ├── OPC UA address space (industrial IoT model)
        ├── MQTT bridge maps sensor_id → OPC UA node
        ├── SurrealDB links OPC UA node → IFC GlobalId
        └── Buildings colorized by IAQ in real-time
```

### 6.2 Standards Compliance

| Standard | Purpose | Tool |
|---|---|---|
| IFC 2x3/4 | BIM import | Archicad, Revit, BlenderBIM |
| glTF 2.0 | Real-time 3D asset | IfcConvert, Blender |
| 3D Tiles 1.1 | Streaming large 3D datasets | py3dtiles, CesiumJS |
| GeoJSON | GIS parcels | GeoPandas, SurrealDB |
| OPC UA (IEC 62541) | Industrial IoT information model | node-opcua, prosys |
| GeoTIFF | Orthophotos, DEM | GDAL, QGIS |
| EPSG:4326/3857 | Coordinate reference | All GIS tools |
| LAS/LAZ | LiDAR point clouds | PDAL, Potree |

### 6.3 OPC UA Address Space Example

```
urn:regentribes:equipment
└── Objects
    ├── BuildingA
    │   ├── Floor1
    │   │   ├── Zone1_Living
    │   │   │   ├── TemperatureSensor (ns=2;id=1001)
    │   │   │   ├── HumiditySensor (ns=2;id=1002)
    │   │   │   └── CO2Sensor (ns=2;id=1003)
    │   │   └── Zone2_Kitchen
    ├── Outdoor
    │   ├── Garden_North
    │   │   ├── SoilMoisture (ns=2;id=2001)
    │   │   └── SolarRadiation (ns=2;id=2003)
```

### 6.4 CesiumJS Integration

```javascript
// Add community tileset
const tileset = viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromIonAssetId(YOUR_ION_ASSET_ID)
);

// Color buildings by IAQ
tileset.style = new Cesium.Cesium3DTileStyle({
    color: {
        interpolate: ['linear', ['get', 'iaq']],
        0:   Cesium.Color.BLUE,
        25:  Cesium.Color.GREEN,
        50:  Cesium.Color.YELLOW,
        75:  Cesium.Color.ORANGE,
        100: Cesium.Color.RED
    }
});
```

---

## Part VII: DAS / OpenCog / MeTTa Ecosystem

### 7.1 Project Lineage

```
Pei Wang's NARS theory (1995)
        │
        ├── OpenNARS (Java, research)
        │         └── OpenNARS-for-Applications (C, NASA/Cisco)
        │
        └── OpenCog (Ben Goertzel, 2008)
                  ├── AtomSpace (hypergraph KR)
                  ├── PLN (Probabilistic Logic Networks)
                  ├── MOSES (evolutionary program learning)
                  └── Hyperon (MeTTa language, new architecture)
                            ├── hyperon-experimental (Rust)
                            ├── MeTTaLog (SWI-Prolog + MeTTa)
                            └── trueagi-io repos (current development)

ZeroClaw/OpenClaw (Genesis runtime)
        └── Path: MeTTa/AtomSpace integration layer
```

### 7.2 DAS (Distributed AtomSpace)

**Architecture:**
```
MeTTa Interpreter → DAS Query Engine (C++) → AtomDB
Python/Rust client → gRPC → DAS agents
```

**The Rustification proposal:**
- Replace Python client with Rust (maturin/PyO3)
- Replace C++ agents with Rust equivalents
- Replace Redis+MongoDB with SurrealDB
- Use MORK (Rust) as the compute kernel
- Generate Rust gRPC from das-proto with tonic

### 7.3 MeTTaClaw (Patrick Hammer)

**The agent:** ~200 lines of MeTTa implementing an agent loop with tool use, embedding memory, and NARS inference.

**Key files:**
- `loop.metta` — main agent loop
- `lib_nal.metta` — NAL inference rules as MeTTa rewrite rules
- `memory.metta` — embedding + ChromaDB integration
- `skills.metta` — tool definitions

**Key innovation:** NAL inference as MeTTa term rewriting. The inference rules ARE the MeTTa evaluation.

### 7.4 NARS vs Q-Learning

From the Beikmohammadi & Magnússon paper (arXiv:2304.03291v2):

| Environment | Winner | Why |
|---|---|---|
| CliffWalking (deterministic) | Q-Learning | Small discrete state space |
| Taxi (complex, deterministic) | Q-Learning | Large discrete state space |
| FrozenLake 4×4 | NARS | Slight advantage |
| FrozenLake 4×4 Slippery | **NARS** | Significant advantage |
| FrozenLake 8×8 Slippery | **NARS** | Strong advantage |
| FlappyBird | Q-Learning | Fast reaction loop |

**Key finding:** NARS significantly outperforms Q-Learning in **non-deterministic environments** — exactly the kind environments real-world sensor meshes operate in.

---

## Part VIII: The RPI DEV Cyberdeck (SECTOR07)

### 8.1 Project Overview

A Raspberry Pi-powered development station / cyberdeck — dual-screen, modular hacking platform with physical I/O. Full open-source files (KiCad PCBs, 3D models, Python GUI).

**Key specs:**
- Dual 9" touchscreen (portrait/landscape)
- Raspberry Pi 4/5 (main compute)
- Internal USB hub (4-port)
- 3 custom PCBs (KiCad)
- Power circuit: 120V → 5V MOSFET switch

### 8.2 Applicable Patterns

| Pattern | RegenTribes Application |
|---|---|
| I2C sensor chaining | Gateway sensor suite (BME680 + SGP30 + ADS1115) |
| Qwiic connectors | Solder-free field assembly |
| DIP switch GPIO isolation | Gateway hardware mode switch |
| USB power injection | Multi-display gateway |
| Slow poll separation | Don't block fast controls on slow sensors |
| Two-point pH calibration | Soil/water monitoring |
| Rolling time-series deque | Grafana dashboards |

### 8.3 Improved Sensor Suite for RegenTribes

| RPI DEV Original | RegenTribes Replacement | Why |
|---|---|---|
| BH1750 (lux) | VEML7700 | Better range (0-200k lux), interrupt capable |
| DS18B20 (temp) | BME280 | Temp + humidity + pressure in one chip |
| PCF8591 (8-bit ADC) | ADS1115 (16-bit) | 256x resolution |
| pH probe (analog) | Atlas Scientific EZO | True I²C, factory calibrated |
| Rotary encoder | Keep | Great for volume/scrolling |

---

## Part IX: Federation and Resilience

### 9.1 The Three-Node Distribution

```
SENSOR NODES (ESP32/nRF52)
        │ BLE Mesh / Thread
        ▼
GATEWAY (RPi CM4)
        ├── Mosquitto MQTT broker
        ├── SurrealDB (local)
        ├── MeTTaClaw agent
        └── Ollama local LLM
        │
        │ WireGuard VPN (Tailscale)
        ▼
COMMUNITY SERVER ($10/mo VPS) [optional]
        ├── SurrealDB replication target
        └── Nostr relay
```

### 9.2 Reed-Solomon Erasure Coding

```
DATA FRAGMENT = Reed-Solomon(20, 14)
        ├── Split SurrealDB export into 20 fragments
        ├── Any 14 fragments reconstruct the data
        ├── 7 nodes destroyed = data intact
        └── 20 fragments on 20 member devices
```

### 9.3 The Federation Principle

**No hub-and-spoke.** Each community owns their raw data. Aggregated summaries flow between communities.

```
WITHOUT FEDERATION:
        Community A's data → goes to a central cloud
        Cloud company changes policy → Community A loses everything
        
WITH FEDERATION:
        Community A's raw data → stays on Community A's hardware
        Community B queries: "avg IAQ across 5 communities, 7d"
        Returns: {avg_iaq: 43, sample_n: 847, period: "7d"}
        No individual readings. No member identities.
```

---

## Part X: Three-Tier BOM Summary

| Tier | Per Node | Nodes (20) | Gateway | Total |
|---|---|---|---|---|
| **1 — Minimal** | $20 | $400 | $75 (RPi 4B) | **$475** |
| **2 — Mesh** | $35 | $700 | $110 (RPi CM4) | **$810** |
| **3 — Cognitive** | $80 | $1,600 | $250 (BeaglePlay) | **$1,850** |

All prices single-unit. At 100+ units, PCB costs drop 60%.

---

## Part XI: Anti-Fragility Properties

```
IF TOKEN: The system has no token. There is nothing to speculate on.

IF TRADE: The system has no transfer function. Ownership cannot be exchanged.

IF HOARDING: Allocations expire automatically. The system reclaims.

IF MONEY: There are no quantity fields. Contributions are qualitative.

IF CLOUD_FAIL: Data lives on community hardware. Reed-Solomon survives.

IF CENTRAL_ATTACK: Infrastructure distributed across 20+ member nodes.

IF MEMBER_LEAVES: Knowledge persists. SurrealDB is community-owned.

IF LLM_GOES_DOWN: Ollama runs local. No dependency on OpenAI/Anthropic.

IF DATABASE_FAILS: QuestDB is embedded. SurrealDB is replicated.

IF TELEGRAM_FAILS: Nostr relay serves as fallback.
```

---

## Part XII: Key Decisions Made

| Decision | Choice | Why |
|---|---|---|
| MCU (Tier 1) | ESP32-S3 | Works today, community has experience |
| MCU (Tier 2) | nRF52840 | BLE Mesh native, Nordic ecosystem mature |
| Radio | BLE Mesh / Thread | Power-optimized, no routing table |
| Gateway DB | SurrealDB | Graph + time-series + vectors in one binary |
| Time-series DB | QuestDB | Faster ingestion than InfluxDB |
| Agent | MeTTaClaw | ~200 lines, embedding memory, NARS inference |
| LLM | Ollama local | No cloud dependency, privacy-first |
| Firmware | C / ESP-IDF | Iterate fast, massive community |
| Firmware (future) | Rust / embassy | When tooling matures |
| Visualization | CesiumJS + 3D Tiles | OGC standard, streaming, open |
| BIM pipeline | IFC → glTF → 3D Tiles | Industry standard, open tools |
| Federation | Tailscale + SurrealDB replication | Free tier sufficient, explicit access |
| OTA distribution | Iroh (future) | Content-addressed, verified |

---

## Part XIII: Open Questions

1. **NARS/PLN integration depth:** How deeply to integrate NARS inference vs. using MeTTa's own pattern matching? Start with MeTTaClaw's `(metta (|- ...))` approach; migrate to embedded ONA as needed.

2. **FOT biometric capture:** The FOT (Field of Trust) composite metric requires biometric input (HRV, breath rate). When does the community add this layer? Start with environmental; add biometric when there's group session infrastructure.

3. **Multi-site federation governance:** Who can query whose data? What are the explicit sharing agreements? This needs community governance design, not just technical implementation.

4. **MeTTa interpreter choice:** Hyperon vs. PeTTa vs. metta-wam (MeTTaLog). PeTTa seems most active; metta-wam offers Prolog+MeTTa hybrid. Evaluate during Phase 2.

5. **K210 TinyML integration:** The Tier 3 edge inference is appealing but the K210 toolchain is complex. Validate that the anomaly detection accuracy justifies the complexity before committing.

---

## Part XIV: Next Steps

### Phase 1: Foundation (Month 1-2)
- [ ] 5 sensor nodes (Tier 1) deployed in one community space
- [ ] Gateway running: Mosquitto + SurrealDB + MeTTaClaw
- [ ] Telegram bot responding to sensor queries
- [ ] IFC model of one building uploaded to CesiumJS
- [ ] Basic Grafana dashboard for sensor readings

### Phase 2: Mesh (Month 3-4)
- [ ] Migrate to nRF52840 + Zephyr (Tier 2)
- [ ] BLE Mesh operational across 20 nodes
- [ ] QuestDB replacing InfluxDB
- [ ] FOT scoring running (environmental only)
- [ ] Affinity session tracking in SurrealDB

### Phase 3: Cognitive (Month 5-6)
- [ ] NARS-ONA embedded inference running
- [ ] Ollama local LLM integrated
- [ ] Nostr bridge for community discussion
- [ ] Drone photogrammetry → 3D Tiles
- [ ] Reed-Solomon distribution across community nodes

### Phase 4: Federation (Month 7+)
- [ ] Two-community SurrealDB replication
- [ ] Iroh firmware distribution operational
- [ ] OPC UA full model for HVAC/water systems
- [ ] Historical playback timeline in CesiumJS
- [ ] Community contribution governance finalized

---

## Appendix A: Key Repositories Referenced

| Project | URL | Role |
|---|---|---|
| MeTTaClaw | github.com/patham9/mettaclaw | Agent core |
| ONA | github.com/opennars/OpenNARS-for-Applications | NARS implementation |
| DAS | github.com/singnet/das | Distributed AtomSpace |
| MORK | github.com/trueagi-io/MORK | Rust compute kernel |
| Hyperon | github.com/trueagi-io/hyperon-experimental | MeTTa interpreter |
| PeTTa | github.com/trueagi-io/PeTTa | Prolog + MeTTa |
| MeTTa examples | github.com/trueagi-io/metta-examples | MeTTa experiments |
| PLN | github.com/trueagi-io/PLN | Probabilistic Logic Networks |
| NARS-Arduino | github.com/opennars/NAR_Arduino | Embedded NARS |
| RPI DEV | github.com/sector07-dev/RPI_DEV | Cyberdeck reference |
| IfcOpenShell | github.com/IfcOpenShell/IfcOpenShell | IFC processing |
| py3dtiles | github.com/nytimes/py3dtiles | 3D Tiles generation |

## Appendix B: Glossary

| Term | Definition |
|---|---|
| **AIKR** | Assumption of Insufficient Knowledge and Resources — NARS foundational principle |
| **AME** | Affinity Mapping Engine — MYTHOGEN concept for discovering thematic clusters |
| **BOM** | Bill of Materials — component list with costs |
| **DEPIN** | Decentralized Physical Infrastructure Network |
| **FOT** | Field of Trust — composite metric for group coherence |
| **IAQ** | Index Air Quality (0-500 scale, BME680) |
| **NAL** | Non-Axiomatic Logic — the logic layer of NARS |
| **NARS** | Non-Axiomatic Reasoning System — Pei Wang's AGI theory |
| **ODA** | Open Digital Assets (Singapore framework) |
| **ONA** | OpenNARS for Applications — production NARS implementation |
| **pNFT** | Physical NFT — tokenized real-world asset |
| **PLN** | Probabilistic Logic Networks — OpenCog's uncertain reasoning system |
| **RWA** | Real World Asset — tokenized physical assets |
| **TV** | Truth Value — NARS: {frequency, confidence, evidence_count} |

---

## Appendix C: Session Context

This document was generated from a single ~10-hour session on 2026-04-15 covering:
- IoT protocols (BLE Mesh, Thread, Zigbee, Z-Wave, LoRa, WiFi, MQTT, OPC UA)
- Hardware architectures (ESP32, nRF52, RISC-V, RPi CM4, BeaglePlay)
- Cognitive systems (MeTTa, NARS, PLN, ONA, MeTTaClaw)
- Knowledge graphs (SurrealDB, AtomSpace, DAS)
- Gift economy prevention architecture
- Digital twins (IFC, glTF, 3D Tiles, CesiumJS, OPC UA)
- The DAS Rustification