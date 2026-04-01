# INTEGRAL: Terraform
## A Game Design Document

*"The most powerful game is one that makes you feel before you understand."*
— Inspired by That Game Company

---

## Core Philosophy

**Genre:** Emotional simulation / Meditative strategy
**Aesthetic:** Painterly, atmospheric, stripped of UI clutter
**Experience:** You don't *play* the transformation—you *witness* it

### The Three Inspirations

| Source | What We Borrow |
|--------|---------------|
| **SlowRoads.io** | Procedural endlessness, zen-pacing, no goals pressure |
| **That Game Company** | Emotional truth, minimal UI, wordless storytelling, atmospheric moments |
| **Peter Joseph's Integral** | The actual thesis—systems replacement as liberation |

---

## Design Principles

1. **No HUD clutter** — Minimal UI. Information emerges from the world itself.
2. **No leaderboards** — This isn't a competition. The old world loses. That's not victory—that's responsibility.
3. **Wordless storytelling** — Let the collapse speak without text overlays
4. **Atmospheric "moments"** — Cinematic beats: a stock exchange going dark, a factory lights turning on for the first time
5. **Cooperation, not combat** — Players work *with* the system, not against it
6. **Emotional truth over mechanical complexity** — If it doesn't *feel* right, it goes

---

## Visual Language

### The Look
- Painterly, not photorealistic — Think watercolor meets data visualization
- Soft edges, flowing motion (no sharp UI boxes)
- Color as narrative: Warm tones = Integral nodes, Cold/Desaturated = dying systems
- Dynamic lighting: Watch day/night cycles as regions "heal"

### The Split
- **Left screen:** The dying world — muted, grainy, analog-feeling
- **Right screen:** The emerging world — luminous, clean, alive
- Over time, the boundary dissolves

---

## Gameplay Structure

### Flow (SlowRoads-inspired)
Like endless driving—no discrete "levels," just continuous transformation. The player chooses *pace* and *focus*, not checkpoints.

### Your Role
You are not a hero. You are an observer-architect. You deploy nodes. You watch. You wait. You witness systems you've depended on collapse.

---

## Campaign: 5 Movements

*Called "Movements" rather than chapters—more poetic, less gamey*

### Movement I: Three and a Half

**Opening:** A globe. Most of it dark. Three glowing points. A half-point flickering.

**Experience:**
- Begin in silence. No music. Just wind.
- The half-node is unstable—pulse it to stabilize
- Watch as shadows (incumbents) move toward your nodes
- No combat. Just... presence. The nodes hold or they don't.

**Atmospheric moment:** The first time a region stabilizes, light spreads slowly—like dawn.

### Movement II: The Unmooring

*The SaaS apocalypse. Jobs dissolve. Middlemen vanish. The necessary collapse.*

**Source Data:** [JoshKale/jobs](https://github.com/JoshKale/jobs) — 342 US occupations with AI exposure scores (0-10 scale)

The dataset provides real grounding:
- Average exposure: 5.3/10
- Score 0-1: Roofers, janitors, construction laborers (minimal)
- Score 2-3: Electricians, plumbers, nurses aides (low)
- Score 4-5: Registered nurses, retail workers (moderate)
- Score 6-7: Teachers, managers, accountants, engineers (high)
- Score 8-10: Software developers, paralegals, data analysts (very high)

**Experience:**
- Screen fills with occupation tiles (treemap style: area = employment count)
- Color gradient: green (safe) → red (high exposure)
- Watch tiles shrink and vanish as AI exposure rises
- NPCs appear briefly—a "marketing coordinator," a " paralegal"—and fade
- **The brutal math:** ~50% of US jobs face high automation risk

**Atmospheric moment:** Atremendous sector (like "Information" or "Finance") goes dark. Then, slowly, new tiles appear—different work, collaborative, human.

### Movement III: Iron Wings

*Physical automation. Robotics. The displacement of human labor.*

**Experience:**
- Watch factories transform. Robotic arms move like dance.
- The tension bar (stability) becomes the central visual—breathing with the system
- Too fast: social collapse (characters huddle, infrastructure crumbles)
- Just right: humans and machines move in rhythm

**Atmospheric moment:** A port, fully automated. Containers flow like water. No humans in frame—yet the system *breathes* with life.

### Movement IV: The Giants Fall

*ASML. TSMC. NVIDIA. The intelligence apparatus. The pharmaceutical overlords.*

**Source Data:** [S&P 500 Companies](https://datahub.io/core/s-and-p-500-companies) — 500 major US corporations by market cap

Key targets for "collapse":
- **Semiconductors:** NVDA, AMD, INTC, AVGO, TSMC (listed as ADR)
- **Tech giants:** AAPL, MSFT, GOOGL, AMZN, META
- **Financial:** JPM, BAC, WFC, GS, MS
- **Pharma:** JNJ, PFE, UNH, MRK, ABBV
- **Energy:** XOM, CVX, COP (fossil incumbents)

**Experience:**
- Corporate fortresses as massive structures on the map
- Each has a "market cap" health bar (starts huge, shrinks)
- As Integral nodes spread, fortresses lose "resources"
- Token value (captured from incumbents) shown as single number: $2.8T → $0
- Structures don't explode—they *transform*: sharp edges → organic curves

**The mechanics:**
1. Incumbent loses revenue streams → market cap shrinks
2. Workers leave → facilities go quiet
3. Infrastructure captured → repurposed for local production
4. Building transforms → becomes a community node

**Atmospheric moment:** The last "trading floor" goes silent. In its place: a garden. Plants grow through trading screens.

### Movement V: Terraform

*100% coverage. The world is nodes. The world is whole.*

**Experience:**
- The split-screen dissolves into one image
- A planet, glowing softly
- No victory fanfare. Just... stillness.

**Final shot:** Camera pulls back. The Earth from space—luminous, webbed with light. The game doesn't tell you "you won." It shows you what became possible.

---

## Platform Versions

| Platform | Philosophy |
|----------|-----------|
| **Mobile** | Intimate, touch-responsive. Hold to watch a region transform. Gentle notifications when systems collapse. |
| **WebGL** | The accessible version—like Journey was free on PSN. Browser-native. Shareable. |
| **PC/Steam** | Full dashboard option for those who want data. But default: pure experience. |

---

## Monetization

- **Free** core experience
- **Cosmetics:** Different visual "atmospheres" (day/night/season themes)
- **Soundtrack:** Separate purchase
- **No ads. No loot boxes. No pay-to-win.**

*Theme-appropriate: The old world monetizes attention. We don't.*

---

## Emotional Thesis

> This game doesn't ask you to celebrate collapse. It asks you to *sit with* what it means when systems we've built begin to fail—and to ask whether they ever truly served us.

The closest reference: **Journey's** final mountain. You don't fight. You just climb. And when you reach the top, the game doesn't say "congratulations." It says "I see you." And then: light.

That's INTEGRAL.

---

## Data Sources (Real-World Grounding)

| Dataset | Source | Use in Game |
|---------|--------|-------------|
| **342 Occupations + AI Exposure** | [JoshKale/jobs](https://github.com/JoshKale/jobs) | Movement II: job collapse simulation |
| **S&P 500 Companies** | [DataHub](https://datahub.io/core/s-and-p-500-companies) | Movement IV: incumbent corporate targets |

---

## Next Steps (for Development Swarm)

1. Prototype Movement I — single node, atmosphere, stability pulse
2. Art direction: Find the painterly palette (reference: Studio Ghibli × data viz)
3. Audio: Begin ambient score development
4. Platform: WebGL build first (fastest viral path)

---

*Document ready for agent swarm execution.*
