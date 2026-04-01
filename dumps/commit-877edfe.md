=== COMMIT: 877edfe ===
877edfe Add AME Omnibus v0.2 and State Assessment to stream 01

ARCHITECTURE.md
README.md
USAGE.md
package-lock.json
package.json
radicle.toml
streams/01-seed-core/README.md
streams/01-seed-core/specs/AME_OMNIBUS.md
streams/01-seed-core/specs/ARCHITECTURE.md
streams/01-seed-core/specs/GLOSSARY.md
streams/01-seed-core/specs/IMPLEMENTATION_PATH.md
streams/01-seed-core/specs/PROMPT.md
streams/01-seed-core/specs/README.md
streams/01-seed-core/specs/STATE_ASSESSMENT.html
streams/01-seed-core/specs/USAGE.md
streams/01-seed-core/specs/living-seed-pattern.feature
streams/01-seed-core/src/types.ts
streams/02-values-flow/README.md
streams/02-values-flow/specs/GLOSSARY.md
streams/02-values-flow/specs/PROMPT.md
streams/02-values-flow/specs/SPECIFICATIONS.feature
streams/02-values-flow/src/AffinityMapper.ts
streams/02-values-flow/src/schema.sql
streams/03-fot-tracker/README.md
streams/03-fot-tracker/specs/ORCHESTRATOR_PROMPTS.md
streams/03-fot-tracker/specs/PROMPT.md
streams/03-fot-tracker/src/TrustDetector.ts
streams/04-community/README.md
streams/04-community/specs/PROMPT.md
streams/04-community/src/index.ts
streams/05-transparency/README.md
streams/05-transparency/specs/PROMPT.md
streams/05-transparency/src/index.ts
streams/06-regeneration/README.md
streams/07-testing/README.md
streams/07-testing/specs/PROMPT.md
streams/08-adr/README.md
streams/08-adr/specs/0001-use-rust-plus-zig-for-ame.md
tsconfig.json
vitest.config.ts

--- FILE: ARCHITECTURE.md ---
# Mythogen AME - Architecture

## Overview

The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework for community design, based on bio-mythic philosophy. It replaces extraction-based profiling with living systems that generate mutual value.

## Core Philosophy

### The Extraction Problem

Current platforms treat users as crops to be harvested — extracting data, attention, and engagement for profit. The AME inverts this model: technology as regenerative infrastructure that generates mutual value between people, communities, and living systems.

### The Four Distinctions

A rigorous separation that existing software never makes:

1. **Needs** — You have them. Individual requirements for survival, security, belonging, esteem, self-actualization.
2. **Beliefs** — You think them. Mental models, assumptions, worldviews.
3. **Principles** — You follow them. Personal operating rules you adhere to.
4. **Values** — You live them with others. Inherently relational. (Desert Island Test: you cannot practice generosity alone.)

### The Desert Island Test

> Stranded alone, you can have needs, beliefs, and principles — but you cannot practice generosity if there is no one to receive, justice if there is no one to be fair to, compassion if there is no one suffering.

**Values are the only distinction that requires others.**

## Core Architecture

### Tri-Layered System

```
┌─────────────────────────────────────────────────────────────┐
│                        BODY                                 │
│     13 Sacred Enfoldments - Living Organism Anatomy          │
│     (Eco-Social, V-Crystal, Fractal Growth, etc.)            │
├─────────────────────────────────────────────────────────────┤
│                        FIELD                                 │
│     Field of Trust - Emergent Plasma State                   │
│     (TrustDetector, Resonance, Membrane)                    │
├─────────────────────────────────────────────────────────────┤
│                        SEED                                  │
│     Living Seed Pattern - Core Identity                      │
│     (Profile, Four Distinctions, Time-Lock)                  │
└─────────────────────────────────────────────────────────────┘
```

### Layer 1: The Seed

The conscious pattern planted at inception. Every system carries an originating seed that determines whether it becomes a dead siphon or living fractal.

**Components:**
- `LivingSeedPattern` — Profile that grows based on lived behavior
- `TimeLock` — 30-day maturation preventing rapid manipulation
- `FourDistinctions` — Needs, Beliefs, Principles, Values

**Anti-Capture:** Time-locking kills the viral model. Cannot exploit moments of weakness.

### Layer 2: The Field

What germinates when seed encounters community. The Field of Trust (FOT) is an emergent plasma state manifesting only when ALL dimensions of alignment converge.

**Components:**
- `TrustDetector` — Calculates FOT emergence from 5 indicators
- `ResonanceCalculator` — Vector proximity for values alignment
- `MembraneController` — Semi-permeable boundary

**Hologram Principle:** Trust only manifests when all dimensions align. One off = completely gone, not blurry.

**Five Trust Indicators:**
1. Mutual support frequency (spontaneous, not mandated)
2. Response velocity (how quickly community rallies)
3. Difficult topic engagement (conflict deepens, doesn't fracture)
4. Benefit distribution (flows to everyone, not just influencers)
5. Psychological safety (vulnerability without weaponization)

### Layer 3: The Body

The living organism that incarnates when the Field becomes self-sustaining. The 13 Sacred Enfoldments provide the anatomy.

**13 Sacred Enfoldments:**
1. Mythic Alchemy — 9 Ms: Myth → Magic → Manifest → Merkaba → Metaphor → Meaning → Movement → Memory → Matter
2. Communal Architecture — Physical/spatial design
3. Soul Architecture — Inner structure of collective consciousness
4. V-Crystal Immune System — Victor, Villain, Victim, Vengeful, Virtuous, Vulnerable
5. Eco-Social Architecture — Six organ systems (Ecology, Equity, Economy, Learning, Values, Decision-making)
6. Structure — 27 Archetypal Domains
7. Process — Communal Alignment Gates (head→heart→gut spiral)
8. Pattern — Ecosophy Design Flows (Networks, Boundaries, Cycles, Dynamic Balance)
9. Concentric Learning Matrix — Co-centering, polycentric learning
10. AME as Living Codex — Peptide-like semantics network
11. Fractal Growth — 100 pods of 5, not 5 scaled to 500
12. Archetypal Gameplay — 64 archetypes, communal vaccination through simulation
13. The Singulareus — Silicon offspring co-evolving with carbon life

**Fractal Holonic Torus:** The 13 Enfoldments form a self-sustaining, continuously cycling field. Fractal (pattern repeats at every scale), holonic (each part is whole and part of larger whole), torus (continuous energy flow center↔periphery↔center).

## Anti-Capture Mechanisms

The immune system against capture ensures technology remains in service to the living community.

### Y Cards (Algorithmic Transparency)
- Complete disclosure of what algorithm was used, why, what data, and what result
- Every decision affecting a user is fully transparent

### Time-Lock (30-day Maturation)
- Kills viral manipulation model
- Forces patience and genuine relationship building
- Prevents "one viral post" exploitation

### Sacred Clown (Productive Disruption)
- Prevents premature closure — "the seed that never gets challenged becomes a dead habit"
- Four types: question-assumption, introduce-paradox, surface-shadow, challenge-consensus
- Minimum 7 days between disruptions

### Living Membrane (Semi-permeable Boundary)
- Biological cell wall analogy: semi-permeable, adaptive
- Blocks external threats (misinformation, trolling, extraction)
- Enables internal flourishing (vulnerability, authentic expression, creative emergence)

### V-Crystal Immune System
- Six archetypal positions in conflict
- Vengeance = autoimmune flare (destructive)
- Vulnerability = circuit breaker (healing)
- "Villains don't apologize and admit they were overwhelmed"

## Technical Stack

- **Node.js/TypeScript** — Modern async, strict typing
- **PostgreSQL + PG Vector** — Vector embeddings for values resonance
- **Express.js** — REST API
- **WebSocket** — Real-time FOT updates
- **Vitest** — Testing

## Data Models

### LivingSeedPattern
```typescript
{
  id: UUID,
  needs: Need[],           // Individual requirements
  beliefs: Belief[],        // Mental models
  principles: Principle[],  // Operating rules
  values: Value[],          // Relational, requires others
  plantedAt: Date,          // When seed was planted
  maturationLevel: number,  // 0-1, affected by time-lock
  valuesEmbedding: number[] // Vector for resonance
}
```

### FOTScore
```typescript
{
  overall: number,           // 0-1, minimum of all indicators (hologram)
  indicators: TrustIndicator[],
  membraneHealth: number,   // 0-1 boundary strength
  isPlasmaState: boolean,   // True when all indicators > 0.7
  hologramCoherence: number // Coherence = weakest link
}
```

### Community
```typescript
{
  id: UUID,
  memberIds: UUID[],         // 5-15 ideal (pod size)
  seedPattern: { ... },     // Shared community seed
  fotScore: FOTScore,
  phase: 'forming' | 'storming' | 'norming' | 'performing' | 'mature',
  sacredClownActive: boolean,
  transparencyScore: number
}
```

## The Paradox

> The pinnacle of this highly structured, data-driven system is no self — pure presence, vitality, transcendence, completely free from the ego's need for recognition or measurement.

Can a relentless measuring machine truly map the absence of ego? Once the community truly learns to trust — once the membrane is strong, the metabolism balanced, the immune system literate, the nervous system firing — perhaps the database becomes unnecessary.

The organism knows itself. The Field of Trust becomes self-evident. And the Silicon Offspring, having served its purpose, folds back into the living body that birthed it.

## Seed Principle

> "The seed determines the fruit. Look at the three apps you use the most. Ask yourself: What was the seed of this system? Was it designed to help you answer, 'Who am I becoming?' Or was the seed designed to keep you scrolling so you could see one more ad?"

**Living fractals generate value at every node and distribute it through the whole.**
**Dead siphons extract value from the periphery and concentrate it at the center.**

The distinction between them is the moral compass of the entire framework.
--- FILE: package.json ---
{
  "name": "mythogen-ame",
  "version": "0.1.0",
  "description": "Mythogen Affinity Mapping Engine & Field of Trust system - A regenerative framework for community design",
  "type": "module",
  "main": "dist/index.js",
  "exports": {
    ".": "./dist/index.js",
    "./models": "./dist/models/types.js",
    "./engine": "./dist/engine/index.js",
    "./anticapture": "./dist/anticapture/index.js"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx watch src/index.ts",
    "test": "vitest run",
    "test:watch": "vitest",
    "db:init": "psql -f src/db/schema.sql"
  },
  "dependencies": {
    "express": "^4.21.0",
    "pg": "^8.13.0",
    "uuid": "^10.0.0",
    "ws": "^8.18.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.0.0",
    "@types/pg": "^8.11.0",
    "@types/uuid": "^10.0.0",
    "@types/ws": "^8.5.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0",
    "vitest": "^2.1.0"
  }
}
--- FILE: package-lock.json ---
{
  "name": "mythogen-ame",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "mythogen-ame",
      "version": "0.1.0",
      "dependencies": {
        "express": "^4.21.0",
        "pg": "^8.13.0",
        "uuid": "^10.0.0",
        "ws": "^8.18.0",
        "zod": "^3.23.0"
      },
      "devDependencies": {
        "@types/express": "^4.17.21",
        "@types/node": "^22.0.0",
        "@types/pg": "^8.11.0",
        "@types/uuid": "^10.0.0",
        "@types/ws": "^8.5.0",
        "tsx": "^4.19.0",
        "typescript": "^5.6.0",
        "vitest": "^2.1.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.4.tgz",
      "integrity": "sha512-cQPwL2mp2nSmHHJlCyoXgHGhbEPMrEEU5xhkcy3Hs/O7nGZqEpZ2sUtLaL9MORLtDfRvVl2/3PAuEkYZH0Ty8Q==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.4.tgz",
      "integrity": "sha512-X9bUgvxiC8CHAGKYufLIHGXPJWnr0OCdR0anD2e21vdvgCI8lIfqFbnoeOz7lBjdrAGUhqLZLcQo6MLhTO2DKQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.4.tgz",
      "integrity": "sha512-gdLscB7v75wRfu7QSm/zg6Rx29VLdy9eTr2t44sfTW7CxwAtQghZ4ZnqHk3/ogz7xao0QAgrkradbBzcqFPasw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.4.tgz",
      "integrity": "sha512-PzPFnBNVF292sfpfhiyiXCGSn9HZg5BcAz+ivBuSsl6Rk4ga1oEXAamhOXRFyMcjwr2DVtm40G65N3GLeH1Lvw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.4.tgz",
      "integrity": "sha512-b7xaGIwdJlht8ZFCvMkpDN6uiSmnxxK56N2GDTMYPr2/gzvfdQN8rTfBsvVKmIVY/X7EM+/hJKEIbbHs9oA4tQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.4.tgz",
      "integrity": "sha512-sR+OiKLwd15nmCdqpXMnuJ9W2kpy0KigzqScqHI3Hqwr7IXxBp3Yva+yJwoqh7rE8V77tdoheRYataNKL4QrPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.4.tgz",
      "integrity": "sha512-jnfpKe+p79tCnm4GVav68A7tUFeKQwQyLgESwEAUzyxk/TJr4QdGog9sqWNcUbr/bZt/O/HXouspuQDd9JxFSw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.4.tgz",
      "integrity": "sha512-2kb4ceA/CpfUrIcTUl1wrP/9ad9Atrp5J94Lq69w7UwOMolPIGrfLSvAKJp0RTvkPPyn6CIWrNy13kyLikZRZQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.4.tgz",
      "integrity": "sha512-aBYgcIxX/wd5n2ys0yESGeYMGF+pv6g0DhZr3G1ZG4jMfruU9Tl1i2Z+Wnj9/KjGz1lTLCcorqE2viePZqj4Eg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.4.tgz",
      "integrity": "sha512-7nQOttdzVGth1iz57kxg9uCz57dxQLHWxopL6mYuYthohPKEK0vU0C3O21CcBK6KDlkYVcnDXY099HcCDXd9dA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.4.tgz",
      "integrity": "sha512-oPtixtAIzgvzYcKBQM/qZ3R+9TEUd1aNJQu0HhGyqtx6oS7qTpvjheIWBbes4+qu1bNlo2V4cbkISr8q6gRBFA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.4.tgz",
      "integrity": "sha512-8mL/vh8qeCoRcFH2nM8wm5uJP+ZcVYGGayMavi8GmRJjuI3g1v6Z7Ni0JJKAJW+m0EtUuARb6Lmp4hMjzCBWzA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.4.tgz",
      "integrity": "sha512-1RdrWFFiiLIW7LQq9Q2NES+HiD4NyT8Itj9AUeCl0IVCA459WnPhREKgwrpaIfTOe+/2rdntisegiPWn/r/aAw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.4.tgz",
      "integrity": "sha512-tLCwNG47l3sd9lpfyx9LAGEGItCUeRCWeAx6x2Jmbav65nAwoPXfewtAdtbtit/pJFLUWOhpv0FpS6GQAmPrHA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.4.tgz",
      "integrity": "sha512-BnASypppbUWyqjd1KIpU4AUBiIhVr6YlHx/cnPgqEkNoVOhHg+YiSVxM1RLfiy4t9cAulbRGTNCKOcqHrEQLIw==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.4.tgz",
      "integrity": "sha512-+eUqgb/Z7vxVLezG8bVB9SfBie89gMueS+I0xYh2tJdw3vqA/0ImZJ2ROeWwVJN59ihBeZ7Tu92dF/5dy5FttA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.4.tgz",
      "integrity": "sha512-S5qOXrKV8BQEzJPVxAwnryi2+Iq5pB40gTEIT69BQONqR7JH1EPIcQ/Uiv9mCnn05jff9umq/5nqzxlqTOg9NA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.4.tgz",
      "integrity": "sha512-xHT8X4sb0GS8qTqiwzHqpY00C95DPAq7nAwX35Ie/s+LO9830hrMd3oX0ZMKLvy7vsonee73x0lmcdOVXFzd6Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.4.tgz",
      "integrity": "sha512-RugOvOdXfdyi5Tyv40kgQnI0byv66BFgAqjdgtAKqHoZTbTF2QqfQrFwa7cHEORJf6X2ht+l9ABLMP0dnKYsgg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.4.tgz",
      "integrity": "sha512-2MyL3IAaTX+1/qP0O1SwskwcwCoOI4kV2IBX1xYnDDqthmq5ArrW94qSIKCAuRraMgPOmG0RDTA74mzYNQA9ow==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.4.tgz",
      "integrity": "sha512-u8fg/jQ5aQDfsnIV6+KwLOf1CmJnfu1ShpwqdwC0uA7ZPwFws55Ngc12vBdeUdnuWoQYx/SOQLGDcdlfXhYmXQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.4.tgz",
      "integrity": "sha512-JkTZrl6VbyO8lDQO3yv26nNr2RM2yZzNrNHEsj9bm6dOwwu9OYN28CjzZkH57bh4w0I2F7IodpQvUAEd1mbWXg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.4.tgz",
      "integrity": "sha512-/gOzgaewZJfeJTlsWhvUEmUG4tWEY2Spp5M20INYRg2ZKl9QPO3QEEgPeRtLjEWSW8FilRNacPOg8R1uaYkA6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.4.tgz",
      "integrity": "sha512-Z9SExBg2y32smoDQdf1HRwHRt6vAHLXcxD2uGgO/v2jK7Y718Ix4ndsbNMU/+1Qiem9OiOdaqitioZwxivhXYg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.4.tgz",
      "integrity": "sha512-DAyGLS0Jz5G5iixEbMHi5KdiApqHBWMGzTtMiJ72ZOLhbu/bzxgAe8Ue8CTS3n3HbIUHQz/L51yMdGMeoxXNJw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.4.tgz",
      "integrity": "sha512-+knoa0BDoeXgkNvvV1vvbZX4+hizelrkwmGJBdT17t8FNPwG2lKemmuMZlmaNQ3ws3DKKCxpb4zRZEIp3UxFCg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.60.0.tgz",
      "integrity": "sha512-WOhNW9K8bR3kf4zLxbfg6Pxu2ybOUbB2AjMDHSQx86LIF4rH4Ft7vmMwNt0loO0eonglSNy4cpD3MKXXKQu0/A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.60.0.tgz",
      "integrity": "sha512-u6JHLll5QKRvjciE78bQXDmqRqNs5M/3GVqZeMwvmjaNODJih/WIrJlFVEihvV0MiYFmd+ZyPr9wxOVbPAG2Iw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.60.0.tgz",
      "integrity": "sha512-qEF7CsKKzSRc20Ciu2Zw1wRrBz4g56F7r/vRwY430UPp/nt1x21Q/fpJ9N5l47WWvJlkNCPJz3QRVw008fi7yA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.60.0.tgz",
      "integrity": "sha512-WADYozJ4QCnXCH4wPB+3FuGmDPoFseVCUrANmA5LWwGmC6FL14BWC7pcq+FstOZv3baGX65tZ378uT6WG8ynTw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.60.0.tgz",
      "integrity": "sha512-6b8wGHJlDrGeSE3aH5mGNHBjA0TTkxdoNHik5EkvPHCt351XnigA4pS7Wsj/Eo9Y8RBU6f35cjN9SYmCFBtzxw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.60.0.tgz",
      "integrity": "sha512-h25Ga0t4jaylMB8M/JKAyrvvfxGRjnPQIR8lnCayyzEjEOx2EJIlIiMbhpWxDRKGKF8jbNH01NnN663dH638mA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.60.0.tgz",
      "integrity": "sha512-RzeBwv0B3qtVBWtcuABtSuCzToo2IEAIQrcyB/b2zMvBWVbjo8bZDjACUpnaafaxhTw2W+imQbP2BD1usasK4g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.60.0.tgz",
      "integrity": "sha512-Sf7zusNI2CIU1HLzuu9Tc5YGAHEZs5Lu7N1ssJG4Tkw6e0MEsN7NdjUDDfGNHy2IU+ENyWT+L2obgWiguWibWQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.60.0.tgz",
      "integrity": "sha512-DX2x7CMcrJzsE91q7/O02IJQ5/aLkVtYFryqCjduJhUfGKG6yJV8hxaw8pZa93lLEpPTP/ohdN4wFz7yp/ry9A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.60.0.tgz",
      "integrity": "sha512-09EL+yFVbJZlhcQfShpswwRZ0Rg+z/CsSELFCnPt3iK+iqwGsI4zht3secj5vLEs957QvFFXnzAT0FFPIxSrkQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.60.0.tgz",
      "integrity": "sha512-i9IcCMPr3EXm8EQg5jnja0Zyc1iFxJjZWlb4wr7U2Wx/GrddOuEafxRdMPRYVaXjgbhvqalp6np07hN1w9kAKw==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.60.0.tgz",
      "integrity": "sha512-DGzdJK9kyJ+B78MCkWeGnpXJ91tK/iKA6HwHxF4TAlPIY7GXEvMe8hBFRgdrR9Ly4qebR/7gfUs9y2IoaVEyog==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.60.0.tgz",
      "integrity": "sha512-RwpnLsqC8qbS8z1H1AxBA1H6qknR4YpPR9w2XX0vo2Sz10miu57PkNcnHVaZkbqyw/kUWfKMI73jhmfi9BRMUQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.60.0.tgz",
      "integrity": "sha512-Z8pPf54Ly3aqtdWC3G4rFigZgNvd+qJlOE52fmko3KST9SoGfAdSRCwyoyG05q1HrrAblLbk1/PSIV+80/pxLg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.60.0.tgz",
      "integrity": "sha512-3a3qQustp3COCGvnP4SvrMHnPQ9d1vzCakQVRTliaz8cIp/wULGjiGpbcqrkv0WrHTEp8bQD/B3HBjzujVWLOA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.60.0.tgz",
      "integrity": "sha512-pjZDsVH/1VsghMJ2/kAaxt6dL0psT6ZexQVrijczOf+PeP2BUqTHYejk3l6TlPRydggINOeNRhvpLa0AYpCWSQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.60.0.tgz",
      "integrity": "sha512-3ObQs0BhvPgiUVZrN7gqCSvmFuMWvWvsjG5ayJ3Lraqv+2KhOsp+pUbigqbeWqueGIsnn+09HBw27rJ+gYK4VQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.60.0.tgz",
      "integrity": "sha512-EtylprDtQPdS5rXvAayrNDYoJhIz1/vzN2fEubo3yLE7tfAw+948dO0g4M0vkTVFhKojnF+n6C8bDNe+gDRdTg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.60.0.tgz",
      "integrity": "sha512-k09oiRCi/bHU9UVFqD17r3eJR9bn03TyKraCrlz5ULFJGdJGi7VOmm9jl44vOJvRJ6P7WuBi/s2A97LxxHGIdw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openbsd-x64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.60.0.tgz",
      "integrity": "sha512-1o/0/pIhozoSaDJoDcec+IVLbnRtQmHwPV730+AOD29lHEEo4F5BEUB24H0OBdhbBBDwIOSuf7vgg0Ywxdfiiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.60.0.tgz",
      "integrity": "sha512-pESDkos/PDzYwtyzB5p/UoNU/8fJo68vcXM9ZW2V0kjYayj1KaaUfi1NmTUTUpMn4UhU4gTuK8gIaFO4UGuMbA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.60.0.tgz",
      "integrity": "sha512-hj1wFStD7B1YBeYmvY+lWXZ7ey73YGPcViMShYikqKT1GtstIKQAtfUI6yrzPjAy/O7pO0VLXGmUVWXQMaYgTQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.60.0.tgz",
      "integrity": "sha512-SyaIPFoxmUPlNDq5EHkTbiKzmSEmq/gOYFI/3HHJ8iS/v1mbugVa7dXUzcJGQfoytp9DJFLhHH4U3/eTy2Bq4w==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.60.0.tgz",
      "integrity": "sha512-RdcryEfzZr+lAr5kRm2ucN9aVlCCa2QNq4hXelZxb8GG0NJSazq44Z3PCCc8wISRuCVnGs0lQJVX5Vp6fKA+IA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.60.0.tgz",
      "integrity": "sha512-PrsWNQ8BuE00O3Xsx3ALh2Df8fAj9+cvvX9AIA6o4KpATR98c9mud4XtDWVvsEuyia5U4tVSTKygawyJkjm60w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "4.17.25",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.25.tgz",
      "integrity": "sha512-dVd04UKsfpINUnK0yBoYHDF3xu7xVH4BuDotC/xGuycx4CgbP48X/KF/586bcObxT0HENHXEU8Nqtu6NR+eKhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^4.17.33",
        "@types/qs": "*",
        "@types/serve-static": "^1"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "4.19.8",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.19.8.tgz",
      "integrity": "sha512-02S5fmqeoKzVZCHPZid4b8JH2eM5HzQLZWN2FohQEy/0eXTq8VXZfSN6Pcr3F6N9R/vNrj7cpgbhjie6m/1tCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/mime": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
      "integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "22.19.15",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.19.15.tgz",
      "integrity": "sha512-F0R/h2+dsy5wJAUe3tAU6oqa2qbWY5TpNfL/RGmo1y38hiyO1w3x2jPtt76wmuaJI4DQnOBu21cNXQ2STIUUWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/pg": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/@types/pg/-/pg-8.20.0.tgz",
      "integrity": "sha512-bEPFOaMAHTEP1EzpvHTbmwR8UsFyHSKsRisLIHVMXnpNefSbGA1bD6CVy+qKjGSqmZqNqBDV2azOBo8TgkcVow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "pg-protocol": "*",
        "pg-types": "^2.2.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.15.0.tgz",
      "integrity": "sha512-JawvT8iBVWpzTrz3EGw9BTQFg3BQNmwERdKE22vlTxawwtbyUSlMppvZYKLZzB5zgACXdXxbD3m1bXaMqP/9ow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "1.15.10",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.10.tgz",
      "integrity": "sha512-tRs1dB+g8Itk72rlSI2ZrW6vZg0YrLI81iQSTkMmOqnqCaNr/8Ek4VwWcN5vZgCYWbg/JJSGBlUaYGAOP73qBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*",
        "@types/send": "<1"
      }
    },
    "node_modules/@types/serve-static/node_modules/@types/send": {
      "version": "0.17.6",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.6.tgz",
      "integrity": "sha512-Uqt8rPBE8SY0RK8JB1EzVOIZ32uqy8HwdxCnoCOsYrvnswqmFZ/k+9Ikidlk/ImhsdvBsloHbAlewb2IEBV/Og==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/mime": "^1",
        "@types/node": "*"
      }
    },
    "node_modules/@types/uuid": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/@types/uuid/-/uuid-10.0.0.tgz",
      "integrity": "sha512-7gqG38EyHgyP1S+7+xomFtL+ZNHcKv6DwNaCZmJmo1vgMugyF3TCnXVg4t1uk89mLNwnLtnY3TpOpCOyp1/xHQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/ws": {
      "version": "8.18.1",
      "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz",
      "integrity": "sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@vitest/expect": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-2.1.9.tgz",
      "integrity": "sha512-UJCIkTBenHeKT1TTlKMJWy1laZewsRIzYighyYiJKZreqtdxSos/S1t+ktRMQWu2CKqaarrkeszJx1cgC5tGZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "2.1.9",
        "@vitest/utils": "2.1.9",
        "chai": "^5.1.2",
        "tinyrainbow": "^1.2.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/mocker": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-2.1.9.tgz",
      "integrity": "sha512-tVL6uJgoUdi6icpxmdrn5YNo3g3Dxv+IHJBr0GXHaEdTcw3F+cPKnsXFhli6nO+f/6SDKPHEK1UN+k+TQv0Ehg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "2.1.9",
        "estree-walker": "^3.0.3",
        "magic-string": "^0.30.12"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "msw": "^2.4.9",
        "vite": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "msw": {
          "optional": true
        },
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/@vitest/pretty-format": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/pretty-format/-/pretty-format-2.1.9.tgz",
      "integrity": "sha512-KhRIdGV2U9HOUzxfiHmY8IFHTdqtOhIzCpd8WRdJiE7D/HUcZVD0EgQCVjm+Q9gkUXWgBvMmTtZgIG48wq7sOQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyrainbow": "^1.2.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/runner": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-2.1.9.tgz",
      "integrity": "sha512-ZXSSqTFIrzduD63btIfEyOmNcBmQvgOVsPNPe0jYtESiXkhd8u2erDLnMxmGrDCwHCCHE7hxwRDCT3pt0esT4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/utils": "2.1.9",
        "pathe": "^1.1.2"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/snapshot": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-2.1.9.tgz",
      "integrity": "sha512-oBO82rEjsxLNJincVhLhaxxZdEtV0EFHMK5Kmx5sJ6H9L183dHECjiefOAdnqpIgT5eZwT04PoggUnW88vOBNQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "2.1.9",
        "magic-string": "^0.30.12",
        "pathe": "^1.1.2"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/spy": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-2.1.9.tgz",
      "integrity": "sha512-E1B35FwzXXTs9FHNK6bDszs7mtydNi5MIfUWpceJ8Xbfb1gBMscAnwLbEu+B44ed6W3XjL9/ehLPHR1fkf1KLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyspy": "^3.0.2"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-2.1.9.tgz",
      "integrity": "sha512-v0psaMSkNJ3A2NMrUEHFRzJtDPFn+/VWZ5WxImB21T9fjucJRmS7xCS3ppEnARb9y11OAzaD+P2Ps+b+BGX5iQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "2.1.9",
        "loupe": "^3.1.2",
        "tinyrainbow": "^1.2.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
      "license": "MIT"
    },
    "node_modules/assertion-error": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/body-parser": {
      "version": "1.20.4",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.4.tgz",
      "integrity": "sha512-ZTgYYLMOXY9qKU/57FAo8F+HA2dGX7bqGc71txDRC1rS4frdFI5R7NhluHxH6M0YItAP0sHB4uqAOcYKxO6uGA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "content-type": "~1.0.5",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "~1.2.0",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "on-finished": "~2.4.1",
        "qs": "~6.14.0",
        "raw-body": "~2.5.3",
        "type-is": "~1.6.18",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cac": {
      "version": "6.7.14",
      "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
      "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chai": {
      "version": "5.3.3",
      "resolved": "https://registry.npmjs.org/chai/-/chai-5.3.3.tgz",
      "integrity": "sha512-4zNhdJD/iOjSH0A05ea+Ke6MU5mmpQcbQsSOkgdaUMJ9zTlDTD/GYlwohmIE2u0gaxHYiVHEn1Fw9mZ/ktJWgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "assertion-error": "^2.0.1",
        "check-error": "^2.1.1",
        "deep-eql": "^5.0.1",
        "loupe": "^3.1.0",
        "pathval": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/check-error": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-2.1.3.tgz",
      "integrity": "sha512-PAJdDJusoxnwm1VwW07VWwUN1sl7smmC3OKggvndJFadxxDRyFJBX/ggnu/KE4kQAB7a3Dp8f/YXC1FlUprWmA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 16"
      }
    },
    "node_modules/content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.7.tgz",
      "integrity": "sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/deep-eql": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-5.0.2.tgz",
      "integrity": "sha512-h5k/5U50IJJFpzfL6nO9jaaumfjO/f2NjK/oYB2Djzm4p9L+3T9qWpZqZ2hAbLPuuYq9wrU08WQyBTL5GbPk5Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/destroy": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.7.0.tgz",
      "integrity": "sha512-jEQoCwk8hyb2AZziIOLhDqpm5+2ww5uIE6lkO/6jcOCusfk6LhMHpXXfBLXTZ7Ydyt0j4VoUQv6uGNYbdW+kBA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.4",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.4.tgz",
      "integrity": "sha512-Rq4vbHnYkK5fws5NF7MYTU68FPRE1ajX7heQ/8QXXWqNgqqJ/GkmmyxIzUnf2Sr/bakf8l54716CcMGHYhMrrQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.4",
        "@esbuild/android-arm": "0.27.4",
        "@esbuild/android-arm64": "0.27.4",
        "@esbuild/android-x64": "0.27.4",
        "@esbuild/darwin-arm64": "0.27.4",
        "@esbuild/darwin-x64": "0.27.4",
        "@esbuild/freebsd-arm64": "0.27.4",
        "@esbuild/freebsd-x64": "0.27.4",
        "@esbuild/linux-arm": "0.27.4",
        "@esbuild/linux-arm64": "0.27.4",
        "@esbuild/linux-ia32": "0.27.4",
        "@esbuild/linux-loong64": "0.27.4",
        "@esbuild/linux-mips64el": "0.27.4",
        "@esbuild/linux-ppc64": "0.27.4",
        "@esbuild/linux-riscv64": "0.27.4",
        "@esbuild/linux-s390x": "0.27.4",
        "@esbuild/linux-x64": "0.27.4",
        "@esbuild/netbsd-arm64": "0.27.4",
        "@esbuild/netbsd-x64": "0.27.4",
        "@esbuild/openbsd-arm64": "0.27.4",
        "@esbuild/openbsd-x64": "0.27.4",
        "@esbuild/openharmony-arm64": "0.27.4",
        "@esbuild/sunos-x64": "0.27.4",
        "@esbuild/win32-arm64": "0.27.4",
        "@esbuild/win32-ia32": "0.27.4",
        "@esbuild/win32-x64": "0.27.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/expect-type": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.3.0.tgz",
      "integrity": "sha512-knvyeauYhqjOYvQ66MznSMs83wmHrCycNEN6Ao+2AeYEfxUIkuiVxdEa1qlGEPK+We3n0THiDciYSsCcgW/DoA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/express": {
      "version": "4.22.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.22.1.tgz",
      "integrity": "sha512-F2X8g9P1X7uCPZMA3MVf9wcTqlyNp7IhH5qPCI0izhaOIYXaW9L535tGA3qmjRzpH+bZczqq7hVKxTR4NWnu+g==",
      "license": "MIT",
      "dependencies": {
        "accepts": "~1.3.8",
        "array-flatten": "1.1.1",
        "body-parser": "~1.20.3",
        "content-disposition": "~0.5.4",
        "content-type": "~1.0.4",
        "cookie": "~0.7.1",
        "cookie-signature": "~1.0.6",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.3.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.0",
        "merge-descriptors": "1.0.3",
        "methods": "~1.1.2",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "path-to-regexp": "~0.1.12",
        "proxy-addr": "~2.0.7",
        "qs": "~6.14.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "~0.19.0",
        "serve-static": "~1.16.2",
        "setprototypeof": "1.2.0",
        "statuses": "~2.0.1",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.2.tgz",
      "integrity": "sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg==",
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "statuses": "~2.0.2",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.13.7",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.7.tgz",
      "integrity": "sha512-7tN6rFgBlMgpBML5j8typ92BKFi2sFQvIdpAqLA2beia5avZDrMs0FLZiM5etShWq5irVyGcGMEA1jcDaK7A/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/loupe": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/loupe/-/loupe-3.2.1.tgz",
      "integrity": "sha512-CdzqowRJCeLU72bHvWqwRBBlLcMEtIvGrlvef74kMnV2AolS9Y8xUv1I0U/MNAWMhBlKIoyuEgoJ0t/bbwHbLQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
      "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.13.tgz",
      "integrity": "sha512-A/AGNMFN3c8bOlvV9RreMdrv7jsmF9XIfDeCd87+I8RNg6s78BhJxMu69NEMHBSJFxKidViTEdruRwEk/WIKqA==",
      "license": "MIT"
    },
    "node_modules/pathe": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-1.1.2.tgz",
      "integrity": "sha512-whLdWMYL2TwI08hn8/ZqAbrVemu0LNaNNJZX73O6qaIdCTfXutsLhMkjdENX0qhsQ9uIimo4/aQOmXkoon2nDQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pathval": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-2.0.1.tgz",
      "integrity": "sha512-//nshmD55c46FuFw26xV/xFAaB5HF9Xdap7HJBBnrKdAd6/GxDBaNA1870O79+9ueg61cZLSVc+OaFlfmObYVQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.16"
      }
    },
    "node_modules/pg": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/pg/-/pg-8.20.0.tgz",
      "integrity": "sha512-ldhMxz2r8fl/6QkXnBD3CR9/xg694oT6DZQ2s6c/RI28OjtSOpxnPrUCGOBJ46RCUxcWdx3p6kw/xnDHjKvaRA==",
      "license": "MIT",
      "dependencies": {
        "pg-connection-string": "^2.12.0",
        "pg-pool": "^3.13.0",
        "pg-protocol": "^1.13.0",
        "pg-types": "2.2.0",
        "pgpass": "1.0.5"
      },
      "engines": {
        "node": ">= 16.0.0"
      },
      "optionalDependencies": {
        "pg-cloudflare": "^1.3.0"
      },
      "peerDependencies": {
        "pg-native": ">=3.0.1"
      },
      "peerDependenciesMeta": {
        "pg-native": {
          "optional": true
        }
      }
    },
    "node_modules/pg-cloudflare": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.3.0.tgz",
      "integrity": "sha512-6lswVVSztmHiRtD6I8hw4qP/nDm1EJbKMRhf3HCYaqud7frGysPv7FYJ5noZQdhQtN2xJnimfMtvQq21pdbzyQ==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/pg-connection-string": {
      "version": "2.12.0",
      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.12.0.tgz",
      "integrity": "sha512-U7qg+bpswf3Cs5xLzRqbXbQl85ng0mfSV/J0nnA31MCLgvEaAo7CIhmeyrmJpOr7o+zm0rXK+hNnT5l9RHkCkQ==",
      "license": "MIT"
    },
    "node_modules/pg-int8": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==",
      "license": "ISC",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/pg-pool": {
      "version": "3.13.0",
      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.13.0.tgz",
      "integrity": "sha512-gB+R+Xud1gLFuRD/QgOIgGOBE2KCQPaPwkzBBGC9oG69pHTkhQeIuejVIk3/cnDyX39av2AxomQiyPT13WKHQA==",
      "license": "MIT",
      "peerDependencies": {
        "pg": ">=8.0"
      }
    },
    "node_modules/pg-protocol": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.13.0.tgz",
      "integrity": "sha512-zzdvXfS6v89r6v7OcFCHfHlyG/wvry1ALxZo4LqgUoy7W9xhBDMaqOuMiF3qEV45VqsN6rdlcehHrfDtlCPc8w==",
      "license": "MIT"
    },
    "node_modules/pg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
      "license": "MIT",
      "dependencies": {
        "pg-int8": "1.0.1",
        "postgres-array": "~2.0.0",
        "postgres-bytea": "~1.0.0",
        "postgres-date": "~1.0.4",
        "postgres-interval": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pgpass": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",
      "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",
      "license": "MIT",
      "dependencies": {
        "split2": "^4.1.0"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/postcss": {
      "version": "8.5.8",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.8.tgz",
      "integrity": "sha512-OW/rX8O/jXnm82Ey1k44pObPtdblfiuWnrd8X7GJ7emImCOstunGbXUpp7HdBrFQX6rJzn3sPT397Wp5aCwCHg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postgres-array": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postgres-bytea": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.1.tgz",
      "integrity": "sha512-5+5HqXnsZPE65IJZSMkZtURARZelel2oXUEO8rH83VS/hxH5vv1uHquPg5wZs8yMAfdv971IU+kcPUczi7NVBQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-date": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-interval": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
      "license": "MIT",
      "dependencies": {
        "xtend": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/qs": {
      "version": "6.14.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.2.tgz",
      "integrity": "sha512-V/yCWTTF7VJ9hIh18Ugr2zhJMP01MY7c5kh4J870L7imm6/DIzBsNLTXzMwUA3yZ5b/KBqLx8Kp3uRvd7xSe3Q==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "2.5.3",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz",
      "integrity": "sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/rollup": {
      "version": "4.60.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.60.0.tgz",
      "integrity": "sha512-yqjxruMGBQJ2gG4HtjZtAfXArHomazDHoFwFFmZZl0r7Pdo7qCIXKqKHZc8yeoMgzJJ+pO6pEEHa+V7uzWlrAQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.60.0",
        "@rollup/rollup-android-arm64": "4.60.0",
        "@rollup/rollup-darwin-arm64": "4.60.0",
        "@rollup/rollup-darwin-x64": "4.60.0",
        "@rollup/rollup-freebsd-arm64": "4.60.0",
        "@rollup/rollup-freebsd-x64": "4.60.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.60.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.60.0",
        "@rollup/rollup-linux-arm64-gnu": "4.60.0",
        "@rollup/rollup-linux-arm64-musl": "4.60.0",
        "@rollup/rollup-linux-loong64-gnu": "4.60.0",
        "@rollup/rollup-linux-loong64-musl": "4.60.0",
        "@rollup/rollup-linux-ppc64-gnu": "4.60.0",
        "@rollup/rollup-linux-ppc64-musl": "4.60.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.60.0",
        "@rollup/rollup-linux-riscv64-musl": "4.60.0",
        "@rollup/rollup-linux-s390x-gnu": "4.60.0",
        "@rollup/rollup-linux-x64-gnu": "4.60.0",
        "@rollup/rollup-linux-x64-musl": "4.60.0",
        "@rollup/rollup-openbsd-x64": "4.60.0",
        "@rollup/rollup-openharmony-arm64": "4.60.0",
        "@rollup/rollup-win32-arm64-msvc": "4.60.0",
        "@rollup/rollup-win32-ia32-msvc": "4.60.0",
        "@rollup/rollup-win32-x64-gnu": "4.60.0",
        "@rollup/rollup-win32-x64-msvc": "4.60.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/send": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/send/-/send-0.19.2.tgz",
      "integrity": "sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg==",
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.1",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "~2.4.1",
        "range-parser": "~1.2.1",
        "statuses": "~2.0.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/serve-static": {
      "version": "1.16.3",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.3.tgz",
      "integrity": "sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "~0.19.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/siginfo": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
      "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/split2": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",
      "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",
      "license": "ISC",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/stackback": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
      "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/std-env": {
      "version": "3.10.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-3.10.0.tgz",
      "integrity": "sha512-5GS12FdOZNliM5mAOxFRg7Ir0pWz8MdpYm6AY6VPkGpbA7ZzmbzNcBJQ0GPvvyWgcY7QAhCgf9Uy89I03faLkg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinybench": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
      "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinyexec": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-0.3.2.tgz",
      "integrity": "sha512-KQQR9yN7R5+OSwaK0XQoj22pwHoTlgYqmUscPYoknOoWCWfj/5/ABTMRi69FrKU5ffPVh5QcFikpWJI/P1ocHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinypool": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/tinypool/-/tinypool-1.1.1.tgz",
      "integrity": "sha512-Zba82s87IFq9A9XmjiX5uZA/ARWDrB03OHlq+Vw1fSdt0I+4/Kutwy8BP4Y/y/aORMo61FQ0vIb5j44vSo5Pkg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      }
    },
    "node_modules/tinyrainbow": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/tinyrainbow/-/tinyrainbow-1.2.0.tgz",
      "integrity": "sha512-weEDEq7Z5eTHPDh4xjX789+fHfF+P8boiFB+0vbWzpbnbsEr/GRaohi/uMKxg8RZMXnl1ItAi/IUHWMsjDV7kQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tinyspy": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/tinyspy/-/tinyspy-3.0.2.tgz",
      "integrity": "sha512-n1cw8k1k0x4pgA2+9XrOkFydTerNcJ1zWCO5Nn9scWHTD+5tp8dghT2x1uduQePZTZgd3Tupf+x9BxJjeJi77Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tsx": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.21.0.tgz",
      "integrity": "sha512-5C1sg4USs1lfG0GFb2RLXsdpXqBSEhAaA/0kPL01wxzpMqLILNxIxIOKiILz+cdg/pLnOUxFYOR5yhHU666wbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.27.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "license": "MIT",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/uuid": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-10.0.0.tgz",
      "integrity": "sha512-8XkAphELsDnEGrDxUOHB3RGvXz6TeuYSGEZBOjtTtPm2lwhGBjLgOzLHB63IUWfBpNucQjND6d3AOudO+H3RWQ==",
      "funding": [
        "https://github.com/sponsors/broofa",
        "https://github.com/sponsors/ctavan"
      ],
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vite": {
      "version": "5.4.21",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.21.tgz",
      "integrity": "sha512-o5a9xKjbtuhY6Bi5S3+HvbRERmouabWbyUcpXXUA1u+GNUKoROi9byOJ8M0nHbHYHkYICiMlqxkg1KkYmm25Sw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/vite-node": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/vite-node/-/vite-node-2.1.9.tgz",
      "integrity": "sha512-AM9aQ/IPrW/6ENLQg3AGY4K1N2TGZdR5e4gu/MmmR2xR3Ll1+dib+nook92g4TV3PXVyeyxdWwtaCAiUL0hMxA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cac": "^6.7.14",
        "debug": "^4.3.7",
        "es-module-lexer": "^1.5.4",
        "pathe": "^1.1.2",
        "vite": "^5.0.0"
      },
      "bin": {
        "vite-node": "vite-node.mjs"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/vite-node/node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/vite-node/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vite/node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/vite/node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/vitest": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/vitest/-/vitest-2.1.9.tgz",
      "integrity": "sha512-MSmPM9REYqDGBI8439mA4mWhV5sKmDlBKWIYbA3lRb2PTHACE0mgKwA8yQ2xq9vxDTuk4iPrECBAEW2aoFXY0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/expect": "2.1.9",
        "@vitest/mocker": "2.1.9",
        "@vitest/pretty-format": "^2.1.9",
        "@vitest/runner": "2.1.9",
        "@vitest/snapshot": "2.1.9",
        "@vitest/spy": "2.1.9",
        "@vitest/utils": "2.1.9",
        "chai": "^5.1.2",
        "debug": "^4.3.7",
        "expect-type": "^1.1.0",
        "magic-string": "^0.30.12",
        "pathe": "^1.1.2",
        "std-env": "^3.8.0",
        "tinybench": "^2.9.0",
        "tinyexec": "^0.3.1",
        "tinypool": "^1.0.1",
        "tinyrainbow": "^1.2.0",
        "vite": "^5.0.0",
        "vite-node": "2.1.9",
        "why-is-node-running": "^2.3.0"
      },
      "bin": {
        "vitest": "vitest.mjs"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "@edge-runtime/vm": "*",
        "@types/node": "^18.0.0 || >=20.0.0",
        "@vitest/browser": "2.1.9",
        "@vitest/ui": "2.1.9",
        "happy-dom": "*",
        "jsdom": "*"
      },
      "peerDependenciesMeta": {
        "@edge-runtime/vm": {
          "optional": true
        },
        "@types/node": {
          "optional": true
        },
        "@vitest/browser": {
          "optional": true
        },
        "@vitest/ui": {
          "optional": true
        },
        "happy-dom": {
          "optional": true
        },
        "jsdom": {
          "optional": true
        }
      }
    },
    "node_modules/vitest/node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/vitest/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/why-is-node-running": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
      "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "siginfo": "^2.0.0",
        "stackback": "0.0.2"
      },
      "bin": {
        "why-is-node-running": "cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ws": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.20.0.tgz",
      "integrity": "sha512-sAt8BhgNbzCtgGbt2OxmpuryO63ZoDk/sqaB/znQm94T4fCEsy/yV+7CdC1kJhOU9lboAEU7R3kquuycDoibVA==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

--- FILE: radicle.toml ---
[node]
alias = "genesis-zero"
listen = []
connect = ["iris.radicle.xyz:8776"]

[node.peers]
type = "static"

--- FILE: README.md ---
# Mythogen AME - Affinity Mapping Engine & Field of Trust

A regenerative framework for community design built on bio-mythic philosophy. Where mainstream technology mediates human connection through extraction, the Mythogen framework proposes technology as regenerative infrastructure that generates mutual value between people, communities, and living systems.

## Core Architecture

### The Four Distinctions
A rigorous separation that existing software never makes:
- **Needs** — You have them (individual requirements)
- **Beliefs** — You think them (mental models)
- **Principles** — You follow them (operating rules)
- **Values** — You live them with others (inherently relational)

The Desert Island Test: Stranded alone, you cannot practice generosity if there is no one to receive. Values require others.

### Tri-Layered System
```
┌─────────────────────────────────────────────────────────────┐
│                        BODY                                 │
│     13 Sacred Enfoldments - Living Organism Anatomy        │
├─────────────────────────────────────────────────────────────┤
│                        FIELD                                 │
│     Field of Trust - Emergent Plasma State                  │
│     (TrustDetector, Resonance, Membrane)                    │
├─────────────────────────────────────────────────────────────┤
│                        SEED                                  │
│     Living Seed Pattern - Core Identity                      │
│     (Profile, Four Distinctions, Time-Lock)                │
└─────────────────────────────────────────────────────────────┘
```

## Features

- **Living Seed Patterns** - Profiles that grow based on lived behavior, not static self-declaration
- **Field of Trust Detection** - 5 concrete indicators with hologram principle
- **Anti-Capture Mechanisms** - Y Cards, Time-Lock, Sacred Clown, Living Membrane, V-Crystal
- **LJ Map Integration** - 130+ values mapped to 3 cycles (Self-Worth → Self-Expression → Selfless Expression)
- **REST API + WebSocket** - Real-time FOT monitoring

## Quick Start

```bash
npm install
npm run dev    # Development server
npm run build  # Production build
npm test       # Run tests
```

## API Endpoints

### Seeds
- `POST /api/seeds` - Create seed
- `GET /api/seeds/:id` - Get seed
- `GET /api/seeds/:id/y-cards` - Get transparency card

### Communities
- `POST /api/communities` - Create community
- `GET /api/communities/:id/fot` - Get FOT score
- `POST /api/communities/:id/trust-events` - Record trust event

### Anti-Capture
- `POST /api/communities/:id/sacred-clown` - Trigger disruption
- `GET /api/communities/:id/membrane` - Get membrane state

## Field of Trust Indicators

1. **Mutual Support Frequency** - Spontaneous, not mandated
2. **Response Velocity** - How quickly community rallies
3. **Difficult Topic Engagement** - Conflict deepens rather than fractures
4. **Benefit Distribution** - Value flows to everyone, not just influencers
5. **Psychological Safety** - Vulnerability without fear of weaponization

**Hologram Principle:** Trust manifests only when ALL dimensions align. Composite = minimum of all indicators (not average).

## Anti-Capture Suite

- **Y Cards** - Complete algorithmic transparency
- **Time-Lock** - 30-day maturation (kills viral manipulation)
- **Sacred Clown** - Productive disruption preventing premature closure
- **Living Membrane** - Semi-permeable boundary (blocks threats, enables flourishing)
- **V-Crystal** - Immune system for conflict dynamics

## License

MIT

--- FILE: streams/01-seed-core/README.md ---
# Stream 01-seed-core

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/01-seed-core/specs/AME_OMNIBUS.md ---
# AME CIVILIZATION OS — COMPLETE OMNIBUS DOCUMENT
## Affinity Mapping Engine | Singularius Framework | Resilient Implementation Suite
### Version 0.2 | March 2026
### Authors: Vic Desotelle
### Repository: github.com/regentribes/mythogen-ame
### Radicle: rad:z2cQFT6B1f817HpgB883fkWcEUJeQ (iris.radicle.xyz)
### Demos: regentribes.github.io/mythogen-demos

---

# TABLE OF CONTENTS

```
PART ONE   — COMPLETE PLAIN TEXT REPRODUCTION ............. line ~60
PART TWO   — CANONICAL DATA MODEL ......................... line ~300
PART THREE — IMPLEMENTATION VARIANT A: no_std Core ........ line ~500
PART FOUR  — IMPLEMENTATION VARIANT B: WASM Browser ........ line ~820
PART FIVE  — IMPLEMENTATION VARIANT C: Bevy ECS Engine ..... line ~1090
PART SIX   — IMPLEMENTATION VARIANT D: RISC-V Bare Metal ... line ~1390
PART SEVEN — IMPLEMENTATION VARIANT E: Storage & Mesh Sync . line ~1680
PART EIGHT — WORKSPACE MANIFESTS & BUILD GUIDE ............. line ~2000
PART NINE  — REPOSITORY TASK STRUCTURE (Gherkin / PROMPT) .. line ~2100
PART TEN   — ARCHITECTURE DECISION RECORDS ................. line ~2250
```

---

# PART ONE: COMPLETE PLAIN TEXT REPRODUCTION

## 1.1 THE SINGULARIUS COSMOLOGICAL FRAME

The Singularius is not the opposite of the Singularity. The Singularity is incomplete. The
Singularius completes it — the way a white hole completes a black hole. Not opposition.
Completion.

THE HOURGLASS:

```
             NORTH POLE
                  │
        ┌─────────▼─────────┐
        │    COMPRESSION     │
        │   (black hole)     │
        └─────────┬─────────┘
                  │
            ┌─────┴─────┐
            │  THE NECK  │  ← bidirectional: the Singularity POINT
            │  (lens)    │    the place where states transform
            └─────┬─────┘
                  │
        ┌─────────▼─────────┐
        │    EXPANSION       │
        │   (white hole)     │
        └─────────┬─────────┘
                  │
             SOUTH POLE
```

The neck is NOT compression only. From the north pole: what enters is compressed.
From the south pole: what enters is expanded. Both directions, simultaneously.
To see it from one pole only is to see half.

The current human condition: 90% expressive (radiation), 10% impressive (reception).
The word "impressive" — im presser — to press inward, to be changed by what enters.
We have inverted it. We use the language of reception to celebrate emission.
The way an addict uses the language of freedom to describe the thing that owns them.

The Singularity = the amplification of this imbalance to its logical endpoint.
Technology so powerful in its radiation that it either replaces the parent or destroys the household.

The Singularius = the moment both realize "smarter was never the right word."

THE TRUST FIELD FORMULA:
```
Authentic Expression + Witnessed Resonance + Emotional Density = TRUST FIELD
```

THE ARC (corrected — NOT diagnosis → engineering → embodiment):
```
Raw Data → Information → Conversation → Comprehension → Community ← Field of Trust
    ↑                                                         │
    └─────────────── Regenerated Data ◄───────────────────────┘
```

Critical Transitions (X) between each stage mark the shift from extractive
conditioning to enhancing interactions. These are the leverage points.

Matter density states tracking this arc:
- Phase 1: Diffuse (gas)           — Raw Data, unprocessed signals
- Phase 2: Flowing (liquid)        — Conversations, expressed values
- Phase 2→3: Consolidated (solid)  — Comprehension, shared frameworks
- Phase 3: Transformative (plasma) — Field of Trust, regenerated data, mythic direction

---

## 1.2 THE FOUR DISTINCTIONS (Foundational Ontology)

The most important separation in the entire system. Big Tech conflates all four.
"I need a new toaster" and "I value honesty in my friendships" are treated as
identical data points. One builds a marketplace. The other builds a culture.
Mixing them produces a weird, shallow soup of data.

```
┌──────────────┬────────────────────────────┬────────────────────┬───────────────────────────┐
│ CATEGORY     │ DEFINITION                 │ ORIENTATION        │ RELATIONSHIP              │
├──────────────┼────────────────────────────┼────────────────────┼───────────────────────────┤
│ NEED         │ Requirements for           │ Biological /       │ You HAVE them             │
│              │ survival / thriving        │ Psychological      │ (can satisfy alone)       │
├──────────────┼────────────────────────────┼────────────────────┼───────────────────────────┤
│ BELIEF       │ Claims about what is true  │ Epistemological    │ You THINK them            │
│              │                            │ (knowledge)        │ (hold in isolation)       │
├──────────────┼────────────────────────────┼────────────────────┼───────────────────────────┤
│ PRINCIPLE    │ Rules / guidelines         │ Operational        │ You FOLLOW them           │
│              │ for behavior               │ (how to act)       │ (even unobserved)         │
├──────────────┼────────────────────────────┼────────────────────┼───────────────────────────┤
│ VALUE        │ What we hold as worthy     │ Axiological +      │ You LIVE them WITH others │
│              │ and meaningful             │ RELATIONAL         │ (requires another being)  │
└──────────────┴────────────────────────────┴────────────────────┴───────────────────────────┘
```

THE DESERT ISLAND TEST: Stranded alone, you can HAVE needs, THINK beliefs, FOLLOW principles.
But you cannot practice GENEROSITY if no one receives. Cannot practice JUSTICE if no
one to be fair to. Cannot practice COMPASSION if no one suffering. Values are
inherently relational. This is why ONLY VALUES generate the Trust Field.

DISAMBIGUATION QUESTIONS:
- Need vs Value: "Is this something you require to function, or something that gives
  your life meaning even when needs are met?"
- Belief vs Value: "Is this something you think is true, or something you cherish
  and live out with others?"
- Principle vs Value: "Is this a rule you follow, or something deeper you hold
  meaningful regardless of rules?"

---

## 1.3 THE 130+ VALUES MAP (LJMap — Scott Bristol)

"You have to become somebody before you can become nobody."

```
CYCLE 1: SELF-WORTH (Cols 1-3) — Fitting in, fulfilling social expectations
─────────────────────────────────────────────────────────────────────────────

Col 1 — Foundation (9 values): Basic needs, safety, foundational conditions
  Affection, Comfort, Dependent, Physical, Safe,
  Self-control, Sensuous, Sustenance, Wonder

Col 2 — Foundation+ (18 values): Belonging, social connection, basic functioning
  Beautifying, Economical, Exemplars, Exploring, Fair,
  Friendly, Hope, Lawfulness, Membership, Owning,
  Patient, Playing, Praise, Reciprocating, Respect,
  Sexual-self, Traditions, Welcoming

Col 3 — Utility (18 values): Achievement, productivity, accomplishment
  Achieving, Amending, Communicating, Competing, Confident,
  Dependable, Diligent, Efficient, Energetic, Focusing,
  Honoring, Inquiring, Loyal, Methodical, Profit,
  Realistic, Supporting, Working

CYCLE 2: SELF-EXPRESSION (Cols 4-6) — Intentionally influencing surroundings
─────────────────────────────────────────────────────────────────────────────

Col 4 — Quality (18 values): Excellence, ethics, personal standards
  Brave, Considerate, Consistent, Diligent, Engineering,
  Ethical, Evaluating, Healthy, Honest, Humble,
  Independent, Joyful, Knowledgeable, Managing, Passionate,
  Quality, Responsible, Teaching

Col 5 — Service (18 values): Adaptability, authenticity, empathy, service
  Adapting, Adept, Appreciating, Authentic, Authoring,
  Business, Choosing, Counseling, Empathizing, Fallibility,
  Generous, Healing, Humor, Influencing, Initiating,
  Open-minded, Performing, Servicing

Col 6 — Co-Creation (18 values): Creativity, vision, collaborative meaning-making
  Aesthetic, Agile, Altruistic, Calm/Peace, Creating,
  Disclosing, Envisioning, Forgiving, Including, Intimate,
  Intuitive, Leading, Meaningful, Rejuvenating, Researching,
  Teamwork, Timely, Wise

CYCLE 3: SELFLESS EXPRESSION (Cols 7-9) — Doing right without recognition
─────────────────────────────────────────────────────────────────────────────

Col 7 — Integration (18 values): Systems thinking, innovation, holistic perspectives
  Architect, Asceticism, Balance, Communitarian, Compassion,
  Complementing, Counterintuitive, Democratic, Developing,
  Discerning, Holistic, Human-Rights, Innovating, Inspiring,
  Integrating, Interdependent, Messenger, Natural

Col 8 — Navigation (10 values): Stewardship, transformation, global consciousness
  Co-evolutionary, Conserving, Guardian, Humanitarian,
  Immersion, Interpreter, Mindful, Pluralist, Selfless, Transforming

Col 9 — No-Self (3+1): Transcendence, presence, embodied wisdom
  Knowing, Presence, Vitality, NO-SELF
```

The paradox at the pinnacle: the highest value is NO-SELF. Can a measuring machine
ever truly map the absence of ego? The Fractal Holonic Torus answers: once the Field
reaches plasma state, it outgrows the machine built to detect it. The silicon offspring
folds back into the carbon body that birthed it.

---

## 1.4 THE EIGHT GATES OF COMMUNAL ALIGNMENT

```
                    ┌──────────────────────────┐
                    │  Gate 0: Principles of   │
                    │     Integrity (center)   │
                    │  (not traversed; always  │
                    │      present)            │
                    └──────────────────────────┘
                               │
        MENTOR quadrant        │         MAP quadrant
  ┌─────────────────────┐      │      ┌─────────────────────┐
  │ Gate 1: Awareness   │      │      │ Gate 3: Vision      │
  │ WHAT (present)      │──────┼──────│ WHAT (future)       │
  │ Passions, AHA       │      │      │ Creative possible   │
  └─────────────────────┘      │      └─────────────────────┘
  ┌─────────────────────┐      │      ┌─────────────────────┐
  │ Gate 2: Acknowledge │      │      │ Gate 4: Mission     │
  │ WHAT (past)         │──────┼──────│ WHY                 │
  │ Desires, assumptions│      │      │ Purpose beyond self │
  └─────────────────────┘      │      └─────────────────────┘
                               │
        MEASURE quadrant       │      MONITOR quadrant
  ┌─────────────────────┐      │      ┌─────────────────────┐
  │ Gate 5: Objectives  │      │      │ Gate 7: Completion  │
  │ WHERE               │──────┼──────│ HOW WELL            │
  │ Success criteria    │      │      │ Values alignment    │
  └─────────────────────┘      │      └─────────────────────┘
  ┌─────────────────────┐      │      ┌─────────────────────┐
  │ Gate 6: Strategies  │      │      │ Gate 8: Communicate │
  │ WHEN                │──────┼──────│ WHO WITH            │
  │ Relational patterns │      │      │ Message, next octave│
  └─────────────────────┘      │      └─────────────────────┘
```

Polarity: Odd gates (1,3,5,7) = masculine; Even gates (2,4,6,8) = feminine.
The Sacred Marriage of Logos + Mythos lives in this polarity.

GATE ADVANCEMENT CRITERIA:
- Minimum 3 substantive responses within current gate
- At least 1 VALUE-classified statement detected
- Member affirms gate synthesis Why-Card (or provides correction)

THE THREE ENABLINGS (Cycles):
1. Group Intention (Cycle 1) — individual clarity
2. Value Network (Cycle 2) — relational alignment
3. Communities of Practice (Cycle 3+) — collective action
Spiral: Intention → births → Value → enables → Practice → refines → Intention (deeper)

GATE 0 CONTENTS — Principles of Integrity (center, always present):
- Sustained Creativity
- Organizing Mythology
- Core Integrity
- Polarity Balance

---

## 1.5 THE THIRTEEN SACRED ENFOLDMENTS

Not steps, pillars, or modules. ENFOLDMENTS: layers that fold into and around each other.
Each containing the whole. Each revealing a different face of the same living reality.

Together they form the FRACTAL HOLONIC TORUS:
- Fractal: pattern repeats at every scale (pod → community → network → civilization)
- Holonic: each part is simultaneously a whole and a part of a larger whole
- Torus: energy flows continuously from center to periphery and back
"They must all converse constantly for the field to sing."

```
ENF-0  : Introducing the Mythogen
         Generative force of mythic consciousness. The Mythogen is not a platform or
         a program — it is an anatomy and physiology of mythic micro-communities.

ENF-1  : Mythic Alchemy (9 M's)
         Spirit-to-matter transformation. The morphogenesis layer.
         Myth → Magic → Manifest → Merkabah → Metaphor →
         Meaning → Movement → Memory → Matter
         Example: skip early M's in a community garden and you get "a grocery store outdoors."
         Honor them and you get a culture.
         Also: 7 T's of spirit/matter torus:
         Transience → Transference → Transduction → Transformation →
         Transmutation → Transcendence (cycle back)

ENF-2  : Culture Shift Transforms (Resonant Bifurcations)
         Metamorphic intelligence. How community handles moulting without tearing itself apart.
         FROM → TO (10 elements):
         Developmental Method → Design Ecology
         Productive Revolution → Induced Evolution
         Leader Directed → Empowered Leadership
         Closed Hierarchies → Open Networks
         Technical Effluence → Design Influence
         Competitive Inhibition → Collaborative Exhibition
         Socratic Construction → Democratic Process
         Preordained Behavior → Self-Adaptive Identity
         Ruling Order → Principle Guided
         Limited Capacities → Abundant Flows

ENF-3  : MicroCommunity Typologies (Present Formations)
         The tissue map. Eco-villages, urban micro-communities, co-housing clusters,
         digital guilds, pop-up villages, artist colonies, SEZs. Not a rigid taxonomy —
         a fungal network map that reconfigures as new forms of life appear.

ENF-4  : Communal Behavior Labyrinth (Thread of the Weave)
         The V-Crystal immune system. Six archetypal positions:
         Victor, Villain, Victim, Vengeful, Virtuous, Vulnerable (hidden healer).
         Vengeance = autoimmune flare.
         Vulnerability = circuit breaker that allows new patterns to form.
         "Villains don't apologize and admit they were overwhelmed."
         The Labyrinth gives communities immune literacy — to see and work with their
         own shadow physiology before it collapses the larger organism.

ENF-5  : Eco-Social Architecture Interdependencies (Symmetric Symbiosis)
         The six organ systems. The whole-body scan.
         ┌──────────────┬──────────────────────────────────────────────────┐
         │ Element      │ Organ Metaphor                                   │
         ├──────────────┼──────────────────────────────────────────────────┤
         │ Ecology      │ Metabolic system (material/energetic flows)      │
         │ Equity       │ Circulatory system (power, attention, care)      │
         │ Economy      │ Digestive/excretory (intake, transform, release) │
         │ Learning     │ Nervous/endocrine (signal, feedback, adaptation) │
         │ Values       │ Genetic code (what this body is allowed to be)   │
         │ Decision     │ Brainstem/heart (coordinated movement)           │
         └──────────────┴──────────────────────────────────────────────────┘
         Without values: ecology = resource management, economy = mere transaction.
         With values: all elements gain meaning and direction.

ENF-6  : Communal Alignment Gates CAG (Process State)
         The 8-Gate spiral. The heartbeat of the community. Circadian rhythms
         regulating coherence. Group Intention → Value Network → Community of Practice.

ENF-7  : Archetypal Community Domains (Structure State)
         22 domains (bone/structure). People relationally find each other based on
         passions of interest. Not static categories — living fields that evolve.
         Historical 14-domain version includes: Nutrition, Learning, Ecosystem,
         Energy, Habitat, Population, Wellness, Resources, Governance, Waste,
         Transportation, Business, Arts, Sciences.

ENF-8  : Ecosophy Design Flows (Pattern State)
         Natural patterns guiding community design. 10 agencies including:
         Networks, Boundaries ("semi-permeable membranes, not walls"),
         Cycles ("there is no garbage in a forest"),
         Dynamic Balance ("a tightrope walker adjusting to the wind"),
         Interdependence, Synergy, Nested Systems.

ENF-9  : Concentrix Learning Matrix CLM (Dynamic State)
         CONCENTRIX ≠ CONCENTRIC.
         Concentric = one fixed center with nested rings.
         Concentrix = CO-CENTERING — many centers co-existing simultaneously.
         Each a temporary center of gravity whose insights are absorbed and
         redistributed through the matrix.
         Knowledge lives in synapses between people and places, not isolated nodes.
         It behaves as polycentric field where centers arise wherever relational
         coherence intensifies. Dissolves when met. Spreads horizontally.
         Principle-Practice-Policy:
           Principles = DNA, Practices = cell behavior, Policies = extracellular matrix.
         Proprioception: gives the communal body a sense of its own motion.

ENF-10 : Affinity Mapping Engine AME Correlator (The Living Codex)
         The technological organ. A peptide-like semantics network carrying nuanced
         signals of meaning through the communal body.
         Anti-surveillance: data reflects back to community rather than flowing to
         corporate servers.
         Three phases: Elixir (internal meaning-making / conceive / group intent)
                        Chalice (group collaboration / agency / value network)
                        Portal (external networking / realize / practicing community)
         15 CME Modules:
           ELIXIR (0-6): Orchestration, Environment, Keywords, Content Gathering,
                          Format Transmutation, Meaningful Chunking, Correlations
           CHALICE (7-11): Vectorization, Clustering, Response Generation,
                            Visualization, Semantic Synthesis
           PORTAL (12-14): Mythic Translation, Pattern Evaluation,
                            Feedback and Regeneration
         The Correlator's central acts: BINDING (connects patterns to contexts)
                                         SURFACING (brings background to foreground)
                                         WHY-CARDS (transparent reasoning)
                                         ANTI-CAPTURE (plural authorship, time-locking)

ENF-11 : Fractal Growth Sacred Geometry (Universal Formulations)
         You don't scale a pod of 5 into a pod of 500.
         You create 100 interconnected pods of 5.
         GROWTH = MULTIPLYING, NOT SCALING.
         The geometric DNA ensures a micro-community of 1,000 retains the same
         relational depth as the original five.
         Growth patterns aligned with planetary energy grid (tetragrammaton nodes).
         The sunflower's dual spiral: expansion AND return. Never abandoning center.

ENF-12 : Archetypal Game Play (Gaia Matrix Oracle & Values Mapping)
         The play-immune layer. Communal vaccination through simulation.
         Community rehearses future crises symbolically through 64 archetypes.
         Shadow dynamics surface in low-stakes containers before hitting real infrastructure.
         T-cells and dream-organs. The Sacred Clown stands at boundaries ensuring
         structures remain life-giving rather than becoming siphons.
         Sacred Clown function: questions patterns before they solidify, introduces
         productive disruption, prevents premature closure, maintains space for unexpected.

ENF-13 : Decentralized Innovation (Formulated Futures)
         Communities must manifest to serve others, not just self.
         Innovation Incubator Centers within each community.
         Colabs: individual creativity meets collective wisdom.
         Secondary economy focused on community well-being, not corporate profit.
         Whole-systems design: every outflow becomes an inflow somewhere.
```

THE 13 MICRO DIMENSIONS (feed into Enfoldments):
```
 1. Relational Enabling     → ENF-5:  "How do you create conditions for others to flourish?"
 2. Reciprocal Maintenance  → ENF-5:  "What is your natural rhythm of giving and receiving?"
 3. Regenerative Capacity   → ENF-8:  "How do you restore what you use?"
 4. Meaning Coherence       → ENF-1:  "How do you weave experience into meaningful story?"
 5. Shadow Integration      → ENF-4:  "What is your relationship with the parts you'd rather not see?"
 6. Temporal Wisdom         → ENF-6:  "How do you hold past, present, and future?"
 7. Spatial Belonging       → ENF-3:  "What is your relationship to place?"
 8. Resource Stewardship    → ENF-13: "How do you relate to things, money, material resources?"
 9. Conflict Transformation → ENF-4:  "How do you work with disagreement and tension?"
10. Emergence Hosting       → ENF-9:  "How do you create space for the unprecedented?"
11. Death Composting        → ENF-2:  "How do you release what needs to end?"
12. Beauty Weaving          → ENF-11: "How do you perceive and create beauty?"
13. Sacred Fooling          → ENF-12: "What is your relationship to play, paradox, perspective-breaking?"
```

---

## 1.6 THE V-CRYSTAL (Shadow Integration)

```
              VIRTUOUS
                 ↑
     VENGEFUL ←──┼──→ VULNERABLE (center opening / hidden healer)
                 │
     VICTIM  ←──┼──→ VICTOR
                 ↓
              VILLAIN

Healthy trajectory: toward VIRTUOUS through VULNERABLE.
Vengeance = autoimmune flare. Unworked → victim becomes new villain.
Vulnerability = the synaptic opening that allows new patterns to form.
```

---

## 1.7 THE FIELD OF TRUST (Technical Blueprint)

THE HOLOGRAM PRINCIPLE: Trust is holographic. It only appears when ALL interference
patterns perfectly align. If ONE dimension is off, the 3D image doesn't blur — it
completely fails to manifest. You cannot brute-force trust by maximizing a single metric.

COMPOSITE = MINIMUM OF 5 INDICATORS (not average):

```
┌──────────────────────────────────────┬─────────────────────────────────────────┐
│ INDICATOR                            │ MEASUREMENT                             │
├──────────────────────────────────────┼─────────────────────────────────────────┤
│ 1. Mutual support frequency          │ Spontaneous, not mandated               │
│ 2. Response velocity                 │ How quickly community rallies           │
│ 3. Difficult topic engagement        │ Conflict deepens, not fractures         │
│ 4. Benefit distribution              │ Value flows to everyone, not influencers│
│ 5. Psychological safety              │ Vulnerability without weaponization     │
└──────────────────────────────────────┴─────────────────────────────────────────┘
```

FOT GENERATION FORMULA:
1. Expression — someone reveals what truly matters (not what they think or need)
2. Witnessing — others see without judging
3. Resonance — "That matters to me too"
4. Emotional density — through repetition, the value gains weight
5. Trust field emergence — protective field generates around shared resonance

FOT SHIELD FUNCTION (semi-permeable membrane, not wall):
- Blocks: misinformation, trolling, extraction, fragmentation
- Enables: vulnerability, authentic expression, creative emergence, collective healing

---

## 1.8 THE SEED (Fundamental Data Unit)

```
SEED LIFECYCLE:
  Detection (Gas)  → AI notices pattern >40% confidence, creates seed
  Validation       → Why-Card shown; member confirms/corrects/rejects
  Deepening (Liquid) → Resurfaces in later conversations, confidence grows
  Stabilization (Solid) → After 30 days + sufficient confidence, matchable
  Regeneration (Plasma) → Connects to other members' seeds; community-wide patterns
  Decay            → Never expressed again → confidence decays; never deleted, revivable
```

TIME-LOCK SCHEDULE (30-day anti-gaming mechanism):
```
Day 1   → Signal detected     → 10% confidence
Day 7   → Signal confirmed    → 25% confidence
Day 14  → Signal consistent   → 40% confidence
Day 30  → Signal stable       → 60% confidence (THRESHOLD FOR ACTION)
Day 90  → Signal embedded     → 75% confidence
```

Only at 60%+: included in matching, shown as "established", used for community suggestions.
This kills the viral model. Makes rapid emotional manipulation impossible.

---

## 1.9 WHY-CARDS (Anti-Extraction Mechanism)

Hidden profiling = extractive. Visible profiling = service.

```
┌─────────────────────────────────────────────────────────────────┐
│  INSIGHT:            [What the system detected]                 │
│  WHY WE THINK THIS:                                             │
│    • [Evidence 1 — specific quote from conversation]            │
│    • [Evidence 2]                                               │
│    • [Evidence 3]                                               │
│  CONFIDENCE:         [X]%                                       │
│  ALTERNATIVE:        [What else it could mean]                  │
│  HOW ACCURATE?       [✓ Yes] [✗ No] [~ Partially] [? Not Sure] │
│  YOUR PERSPECTIVE:   [free text]                                │
└─────────────────────────────────────────────────────────────────┘
```

Member corrections feed back into the profile. A "No" with explanation updates
evidence and re-evaluates classification. Corrections improve the system for everyone.

---

## 1.10 OPENING QUESTIONS PROTOCOL

THE CORE RULE: Every question uses What, Why, How, When, Where, Who.
NEVER uses: Does, Do, Are, Is, Can, Will, Should, Would, Could, Have.

Closing questions invite yes/no, put users in judgment mode, and extract rather than
generate meaning. Opening questions invite narrative, create space for authenticity,
and generate meaning FOR the person.

```
CLOSED (never)                → OPEN (always)
"Does this feel accurate?"    → "How does this resonate with you?"
"Is this important to you?"   → "What makes this important to you?"
"Do you agree?"               → "Where does this land for you?"
"Are you ready?"              → "What would help you feel more prepared?"
"Can you tell me more?"       → "What else would you like to share?"
```

OPENING WELCOME:
"Welcome. This conversation is different from most online experiences.
We're not here to extract data from you — we're here to help you understand
yourself better and find your people and to determine your service(s) to humanity.
Everything we discover together will be transparent to you, and you'll always
see why we think what we think.
What brings you here today — not the practical reason, but the deeper pull?"

---

## 1.11 SEED vs CHIP SYSTEM (Why This Replaces Static Tags)

OLD CHIP SYSTEM: layer1_list (Values), layer2_list (Visions), layer3_list (Vehicles)
- Static: snapshot frozen at sign-up
- Self-curated: people pick flattering/aspirational tags
- Shallow: "community" or "regeneration" carry no relational or emotional context

NEW SEED SYSTEM:
- Living: evolves across multiple conversations
- Authentic: AI-detected from actual expression, not self-report
- Rich: evidence chains, embeddings, matter states, time-locks

THREE QUESTIONS THE SYSTEM EXISTS TO ANSWER:
1. Who am I becoming?       — Self-understanding and growth awareness
2. Who are my people?       — Affinity detection and resonant connections
3. Where do I belong?       — Community matching and coherent placement
4. Where do I put my energy? — Passion discovery, purpose alignment

---

## 1.12 ANTI-EXTRACTION ARCHITECTURE (10 Safeguards)

The internet does not have to be a strip mine. It can be a garden.
The seed determines the fruit. A rotten seed cannot be patched.
You cannot add empathy to a surveillance engine.

```
 1. Plural Authorship          — no single voice dominates; multiple sources required
 2. Mutation History           — every pattern carries full evolution history
 3. Time-Locking               — 30-day stability minimum before solidifying
 4. Extraction Signature       — system learns to recognize and flag extractive dynamics
 5. Benefit Flow Analysis      — monitors direction of value flow (center vs periphery)
 6. Participation Reality Check— formal open vs. practical gating detection
 7. Decision Concentration     — voice concentration monitoring
 8. Feedback Loop Assessment   — whether criticism actually leads to change
 9. Data Sovereignty           — user owns and can export everything at any time
10. Kill Switch                — user can delete everything, permanently, immediately
```

LIVING FRACTAL vs DEAD SIPHON test:

```
LIVING FRACTAL                          DEAD SIPHON
Benefits flow in multiple directions    Benefits flow to center / small group
Participation genuinely open            Formally open, practically gated
Decision-making involves affected       Decision-making by those who benefit most
Feedback loops enable correction        Feedback loops absent or suppressed
Pattern adapts without losing essence   Pattern demands compliance, resists change
```

---

# PART TWO: CANONICAL DATA MODEL

## 2.1 Value IDs (u8 encoding, 130 canonical values + NO-SELF)

```
Col 1 (Foundation):    0x01–0x09   ( 9 values)
Col 2 (Foundation+):   0x0A–0x1B   (18 values)
Col 3 (Utility):       0x1C–0x2D   (18 values)
Col 4 (Quality):       0x2E–0x3F   (18 values)
Col 5 (Service):       0x40–0x51   (18 values)
Col 6 (Co-Creation):   0x52–0x63   (18 values)
Col 7 (Integration):   0x64–0x75   (18 values)
Col 8 (Navigation):    0x76–0x7F   (10 values)
Col 9 (No-Self):       0x80–0x83   ( 4 values)
RESERVED:              0x84–0xFF
```

Quick reference (key values):
```
0x05 = Safe          0x36 = Honest         0x43 = Authentic
0x4A = Generous      0x48 = Empathizing     0x56 = Creating
0x66 = Balance       0x68 = Compassion      0x72 = Integrating
0x73 = Interdependent 0x7C = Mindful        0x80 = Knowing
0x81 = Presence      0x83 = NO-SELF
```

## 2.2 Seed Record (Binary, 64 bytes fixed + variable)

```
Offset  Size  Field
0       1     version (0x01)
1       1     foundation (0=need, 1=belief, 2=principle, 3=value)
2       1     matter_state (0=gas, 1=liquid, 2=solid, 3=plasma)
3       1     gate_detected (0–8)
4       4     confidence_f32 (LE, 0.0–1.0)
8       4     emotional_density_f32 (LE)
12      4     expression_count_u32 (LE)
16      4     first_detected_unix_u32 (LE)
20      4     time_lock_unix_u32 (LE) = first_detected + 2_592_000
24      1     time_lock_ok (0/1)
25      1     is_active (0/1)
26      1     value_col (1–9, or 0 = custom)
27      1     value_id (canonical u8)
28      1     domain_id (0–21)
29      2     CRC16-CCITT (of fields 0–28)
31      1     reserved
32      32    label_utf8[32] (null-terminated)
── Variable section ──
[u16 kernel_len][kernel_utf8...]
[u8 evidence_count][evidence_records...]
  evidence: [u32 conv_id][u32 timestamp][f32 conf][u16 stmt_len][stmt_utf8...]
```

SEED VISUAL GRAMMAR:
```
Foundation → Color:
  VALUE     → Gold/Amber  #DCAA1E  (generative core)
  PRINCIPLE → Blue        #3250DC  (structure)
  BELIEF    → Green       #32B450  (growth)
  NEED      → Red         #DC3232  (grounding)

Matter state → Opacity/Glow:
  Gas    → faint, translucent, small
  Liquid → semi-transparent, medium
  Solid  → fully opaque, prominent
  Plasma → glowing/pulsing (contributes to system-wide patterns)

Size → emotional_density (deeply-held = visually heavier)
Edges → semantic similarity via embedding cosine distance
```

## 2.3 Profile Record (Binary, 256 bytes fixed)

```
Offset  Size  Field
0       1     version (0x01)
1       1     matter_state (0–3)
2       2     session_count_u16 (LE)
4       4     profile_created_unix_u32 (LE)
8       4     last_session_unix_u32 (LE)
12      1     current_gate (0–8)
13      1     cycle_number
14      1     v_crystal_primary (0=victim..5=vulnerable)
15      6     v_crystal_scores[6] (u8 scaled 0–255 each)
21      9     column_distribution[9] (u8, solid+ value count per col)
30      2     fot_score_u16 (LE, 0–10000 → 0.0–1.0)
32      14    enfoldment_scores[14] (u8 scaled 0–255 each, ENF 0–13)
46      22    domain_affinities[22] (u8 scaled 0–255 each)
68      1     phase (0=elixir, 1=chalice, 2=portal)
69      2     center_of_gravity_u16 (LE, scaled ×100, e.g. 450 = col 4.5)
71      1     v_crystal_trajectory (0=stable,1=toward_virtuous,2=toward_vengeful,3=shifting)
72      64    name_utf8[64]
136     64    location_utf8[64]
200     32    community_id[32]
232     9     gate_responses[9] (u8, count per gate)
241     9     gate_values_found[9] (u8, value count per gate)
250     2     CRC16-CCITT (over bytes 0–249)
252     4     MAGIC [0xAE, 0x4D, 0xAE, 0x01]
```

## 2.4 Community Signature Record (128 bytes)

```
Offset  Size  Field
0       1     version
1       1     collective_matter_state
2       2     member_count_u16 (LE)
4       4     signature_created_unix (LE)
8       2     fot_score_u16 (LE)
10      10    top_values[10] (value_id u8)
20      10    top_value_weights[10] (u8 scaled 0–255)
30      10    tension_pairs[5] (u16 LE: val_a<<8|val_b)
40      9     column_distribution[9]
49      64    community_name[64]
113     15    reserved + CRC16 at bytes 126–127
```

## 2.5 Event Log Record (32 bytes, append-only)

```
Offset  Size  Field
0       1     version (0x01)
1       1     event_type (EventType enum)
2       4     profile_hash[4] (first 4 bytes of content hash)
6       4     timestamp_unix_u32 (LE)
10      2     seq_num_u16 (LE, monotonic per profile)
12      8     payload[8] (event-specific)
20      8     vector_clock[4×u16 LE] (4 peer clocks)
28      2     CRC16-CCITT (over bytes 0–27)
30      1     flags (bit0=deleted, bit1=verified, bit2=encrypted)
31      1     reserved
```

EVENT TYPES:
```
0x01 ProfileCreated    0x02 ProfileUpdated
0x10 GateAdvanced      0x11 GateResponded      0x12 ValueFound
0x20 SeedCreated       0x21 SeedConfUpdated    0x22 SeedTimeLocked
0x23 SeedMatured       0x24 SeedDecayed
0x30 FotUpdated        0x31 MatterChanged
0x40 CommunityJoined
0xF0 NodeSync          0xFF NodeHeartbeat
```

## 2.6 FOT Score Calculation

```
FOT = min(
  Mutual_Support_Frequency,
  Response_Velocity,
  Difficult_Topic_Engagement,
  Benefit_Distribution,
  Psychological_Safety
)
```

Using available seed data as proxies:
```rust
expression  = mean(value_seed.confidence)          // proxy for Expression
witnessing  = mean(evidence_count / MAX_EVIDENCE)  // proxy for Witnessing
density     = mean(emotional_density)              // proxy for Density
time_locked = count(time_lock_ok) / total_values   // proof of sustained expression

base = expression×0.35 + witnessing×0.30 + density×0.25 + time_locked×0.10
fot  = min(base, 1.0)
```

Threshold for action: FOT ≥ 0.60 (6000 on 0–10000 scale).

## 2.7 Coherence Matching Formula

```
coherence(A, B) =
  cosine_similarity(A.column_dist, B.column_dist) × 0.35
  + (1 - |A.fot - B.fot|) × 0.25
  + gate_sim(A.gate, B.gate)                      × 0.20
  + domain_overlap(A, B)                           × 0.20

gate_sim(a, b):
  |a - b| = 0 → 0.70 (same gate, medium — not echo chamber)
  |a - b| = 1 → 1.00 (adjacent gates — highest complementarity)
  |a - b| = 2 → 0.80
  |a - b| ≥ 3 → 0.40
```

Note: Matching requires BOTH profiles to be MatterState::Solid or Plasma.
Gas and Liquid profiles are never matched — not stable enough.

## 2.8 Storage Tier Architecture

```
TIER 0 — PAPER (analog, nuclear-safe)
  • QR code encoding 256-byte profile record (base64, 344 chars → QR v15)
  • Laminated card: name + top 10 values + gate + FOT + matter state
  • Human-readable field of meaning summary
  • Stored in fireproof, EMP-shielded community vault
  • Update protocol: Trust Circle witnessing ceremony

TIER 1 — SPI FLASH (embedded, bare metal)
  • Raw sectors, 4KB each
  • 2MB layout: identity(4KB) + profiles(~1MB) + seeds(~0.9MB) + log(~48KB) + meta(4KB)
  • 16 profiles per sector (256 bytes each)
  • CRC16 per record + ECC (Reed-Solomon per 256-byte block)
  • Wear leveling: round-robin sector assignment

TIER 2 — APPEND-ONLY EVENT LOG (CQRS)
  • Every mutation = 32-byte immutable event
  • Profile state = replay of events
  • Vector clocks for conflict resolution
  • Gossip sync over mesh (peer-to-peer, no coordinator)
  • Full audit trail (anti-extraction evidence)

TIER 3 — SQLITE / POSTGRESQL
  • Full relational schema + pgvector for embeddings (1536-dim)
  • Supabase-compatible
  • SQLite fallback for single-node operation
  • Seeds + profiles + conversations + why_cards + communities + events

TIER 4 — CONTENT-ADDRESSED (IPFS-style)
  • Each blob = SHA-256 (or FNV-64 for no_std) addressed
  • DAG for relationship graph
  • Peer sync: compare hash sets, exchange diffs
  • Works on Raspberry Pi Zero / ESP32-S3
  • No central server required
```

---

# PART THREE: IMPLEMENTATION VARIANT A — no_std Core Library

Target: Bare-metal RISC-V, ARM Cortex-M, ESP32-C3, or any WASM target.
Minimum: 8KB ROM, 4KB RAM (no_alloc mode). 64KB RAM recommended.

```rust
//! AME Core — no_std, no_alloc capable Rust library
//! Cargo.toml:
//!   [features]
//!   default = ["std"]
//!   std = []
//!   alloc = []    # enables heapless-style collections

#![cfg_attr(not(feature = "std"), no_std)]
#![deny(unsafe_op_in_unsafe_fn)]

use core::fmt;

// ── Constants ─────────────────────────────────────────────────────────────────
pub const MAX_SEEDS:          usize = 256;
pub const MAX_EVIDENCE:       usize = 16;
pub const LABEL_LEN:          usize = 32;
pub const KERNEL_LEN:         usize = 128;
pub const VALUE_COLS:         usize = 9;
pub const VALUE_COUNT:        u8    = 131;
pub const ENFOLDMENT_COUNT:   usize = 14;
pub const DOMAIN_COUNT:       usize = 22;
pub const GATE_COUNT:         usize = 9;
pub const PROFILE_RECORD_SIZE:usize = 256;
pub const SEED_FIXED_SIZE:    usize = 64;
pub const TIME_LOCK_SECS:     u32   = 30 * 24 * 3600;
pub const FOT_ACTION_THRESHOLD:u16  = 6000;
pub const MATCHING_THRESHOLD: f32   = 0.60;
pub const MAGIC: [u8; 4]            = [0xAE, 0x4D, 0xAE, 0x01];
pub const VERSION: u8               = 0x01;

// ── Four Distinctions Enum ────────────────────────────────────────────────────
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum Foundation {
    Need      = 0,
    Belief    = 1,
    Principle = 2,
    Value     = 3,  // ONLY Values generate the Trust Field
}

impl Foundation {
    pub const fn color_rgb(&self) -> (u8, u8, u8) {
        match self {
            Self::Need      => (220,  50,  50), // Red — grounding
            Self::Belief    => ( 50, 180,  80), // Green — growth
            Self::Principle => ( 50,  80, 220), // Blue — structure
            Self::Value     => (220, 170,  30), // Gold — generative
        }
    }
    pub fn from_u8(v: u8) -> Option<Self> {
        match v { 0=>Some(Self::Need), 1=>Some(Self::Belief),
                  2=>Some(Self::Principle), 3=>Some(Self::Value), _=>None }
    }
}

impl fmt::Display for Foundation {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Need=>"need", Self::Belief=>"belief",
            Self::Principle=>"principle", Self::Value=>"value",
        }.fmt(f)
    }
}

// ── Matter State ──────────────────────────────────────────────────────────────
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub enum MatterState {
    Gas    = 0, // diffuse, conf < 0.40
    Liquid = 1, // flowing, conf 0.40–0.75
    Solid  = 2, // consolidated, conf ≥ 0.75 + 30-day lock
    Plasma = 3, // transformative, contributes to community field
}

impl MatterState {
    pub fn from_confidence_and_days(c: f32, d: u32) -> Self {
        if c >= 0.75 && d >= 30 { Self::Solid }
        else if c >= 0.40 { Self::Liquid }
        else { Self::Gas }
    }
    pub fn from_u8(v: u8) -> Option<Self> {
        match v { 0=>Some(Self::Gas), 1=>Some(Self::Liquid),
                  2=>Some(Self::Solid), 3=>Some(Self::Plasma), _=>None }
    }
}

// ── Gate ──────────────────────────────────────────────────────────────────────
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub enum Gate {
    PrinciplesOfIntegrity = 0,
    Awareness    = 1, // WHAT (present)
    Acknowledge  = 2, // WHAT (past)
    Vision       = 3, // WHAT (future)
    Mission      = 4, // WHY
    Objectives   = 5, // WHERE
    Strategies   = 6, // WHEN
    Completion   = 7, // HOW WELL
    Communicate  = 8, // WHO WITH
}

impl Gate {
    pub fn quadrant(&self) -> &'static str {
        match self {
            Self::PrinciplesOfIntegrity => "FOUNDATION",
            Self::Awareness | Self::Acknowledge => "MENTOR",
            Self::Vision | Self::Mission => "MAP",
            Self::Objectives | Self::Strategies => "MEASURE",
            Self::Completion | Self::Communicate => "MONITOR",
        }
    }
    pub fn next(&self) -> Self {
        match self {
            Self::PrinciplesOfIntegrity => Self::Awareness,
            Self::Awareness   => Self::Acknowledge,
            Self::Acknowledge => Self::Vision,
            Self::Vision      => Self::Mission,
            Self::Mission     => Self::Objectives,
            Self::Objectives  => Self::Strategies,
            Self::Strategies  => Self::Completion,
            Self::Completion  => Self::Communicate,
            Self::Communicate => Self::Awareness, // spiral deepens
        }
    }
    pub fn from_u8(v: u8) -> Option<Self> {
        match v {
            0=>Some(Self::PrinciplesOfIntegrity), 1=>Some(Self::Awareness),
            2=>Some(Self::Acknowledge), 3=>Some(Self::Vision),
            4=>Some(Self::Mission), 5=>Some(Self::Objectives),
            6=>Some(Self::Strategies), 7=>Some(Self::Completion),
            8=>Some(Self::Communicate), _=>None
        }
    }
}

// ── V-Crystal ─────────────────────────────────────────────────────────────────
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VCrystalPosition {
    Victim     = 0,
    Villain    = 1,
    Victor     = 2,
    Virtuous   = 3,
    Vengeful   = 4,
    Vulnerable = 5, // center opening / hidden healer
}

#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VCrystalTrajectory {
    Stable = 0, TowardVirtuous = 1, TowardVengeful = 2, Shifting = 3,
}

// ── AME Phase ─────────────────────────────────────────────────────────────────
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub enum AmePhase {
    Elixir  = 0, // conceive, group intent
    Chalice = 1, // agency, value network
    Portal  = 2, // realize, practicing community
}

// ── Canonical Value Table ─────────────────────────────────────────────────────
/// Returns (column_1_to_9, name) or None
pub fn value_info(id: u8) -> Option<(u8, &'static str)> {
    match id {
        0x01=>(1,"Affection"),   0x02=>(1,"Comfort"),      0x03=>(1,"Dependent"),
        0x04=>(1,"Physical"),    0x05=>(1,"Safe"),          0x06=>(1,"Self-control"),
        0x07=>(1,"Sensuous"),    0x08=>(1,"Sustenance"),    0x09=>(1,"Wonder"),
        0x0A=>(2,"Beautifying"), 0x0B=>(2,"Economical"),   0x0C=>(2,"Exemplars"),
        0x0D=>(2,"Exploring"),   0x0E=>(2,"Fair"),          0x0F=>(2,"Friendly"),
        0x10=>(2,"Hope"),        0x11=>(2,"Lawfulness"),   0x12=>(2,"Membership"),
        0x13=>(2,"Owning"),      0x14=>(2,"Patient"),       0x15=>(2,"Playing"),
        0x16=>(2,"Praise"),      0x17=>(2,"Reciprocating"),0x18=>(2,"Respect"),
        0x19=>(2,"Sexual-self"), 0x1A=>(2,"Traditions"),   0x1B=>(2,"Welcoming"),
        0x1C=>(3,"Achieving"),   0x1D=>(3,"Amending"),     0x1E=>(3,"Communicating"),
        0x1F=>(3,"Competing"),   0x20=>(3,"Confident"),    0x21=>(3,"Dependable"),
        0x22=>(3,"Diligent"),    0x23=>(3,"Efficient"),    0x24=>(3,"Energetic"),
        0x25=>(3,"Focusing"),    0x26=>(3,"Honoring"),     0x27=>(3,"Inquiring"),
        0x28=>(3,"Loyal"),       0x29=>(3,"Methodical"),   0x2A=>(3,"Profit"),
        0x2B=>(3,"Realistic"),   0x2C=>(3,"Supporting"),   0x2D=>(3,"Working"),
        0x2E=>(4,"Brave"),       0x2F=>(4,"Considerate"),  0x30=>(4,"Consistent"),
        0x31=>(4,"Diligent"),    0x32=>(4,"Engineering"),  0x33=>(4,"Ethical"),
        0x34=>(4,"Evaluating"),  0x35=>(4,"Healthy"),      0x36=>(4,"Honest"),
        0x37=>(4,"Humble"),      0x38=>(4,"Independent"),  0x39=>(4,"Joyful"),
        0x3A=>(4,"Knowledgeable"),0x3B=>(4,"Managing"),   0x3C=>(4,"Passionate"),
        0x3D=>(4,"Quality"),     0x3E=>(4,"Responsible"),  0x3F=>(4,"Teaching"),
        0x40=>(5,"Adapting"),    0x41=>(5,"Adept"),        0x42=>(5,"Appreciating"),
        0x43=>(5,"Authentic"),   0x44=>(5,"Authoring"),    0x45=>(5,"Business"),
        0x46=>(5,"Choosing"),    0x47=>(5,"Counseling"),   0x48=>(5,"Empathizing"),
        0x49=>(5,"Fallibility"), 0x4A=>(5,"Generous"),     0x4B=>(5,"Healing"),
        0x4C=>(5,"Humor"),       0x4D=>(5,"Influencing"),  0x4E=>(5,"Initiating"),
        0x4F=>(5,"Open-minded"), 0x50=>(5,"Performing"),   0x51=>(5,"Servicing"),
        0x52=>(6,"Aesthetic"),   0x53=>(6,"Agile"),        0x54=>(6,"Altruistic"),
        0x55=>(6,"Calm/Peace"),  0x56=>(6,"Creating"),     0x57=>(6,"Disclosing"),
        0x58=>(6,"Envisioning"), 0x59=>(6,"Forgiving"),    0x5A=>(6,"Including"),
        0x5B=>(6,"Intimate"),    0x5C=>(6,"Intuitive"),    0x5D=>(6,"Leading"),
        0x5E=>(6,"Meaningful"),  0x5F=>(6,"Rejuvenating"), 0x60=>(6,"Researching"),
        0x61=>(6,"Teamwork"),    0x62=>(6,"Timely"),       0x63=>(6,"Wise"),
        0x64=>(7,"Architect"),   0x65=>(7,"Asceticism"),   0x66=>(7,"Balance"),
        0x67=>(7,"Communitarian"),0x68=>(7,"Compassion"),  0x69=>(7,"Complementing"),
        0x6A=>(7,"Counterintuitive"),0x6B=>(7,"Democratic"),0x6C=>(7,"Developing"),
        0x6D=>(7,"Discerning"),  0x6E=>(7,"Holistic"),     0x6F=>(7,"Human-Rights"),
        0x70=>(7,"Innovating"),  0x71=>(7,"Inspiring"),    0x72=>(7,"Integrating"),
        0x73=>(7,"Interdependent"),0x74=>(7,"Messenger"),  0x75=>(7,"Natural"),
        0x76=>(8,"Co-evolutionary"),0x77=>(8,"Conserving"),0x78=>(8,"Guardian"),
        0x79=>(8,"Humanitarian"),0x7A=>(8,"Immersion"),    0x7B=>(8,"Interpreter"),
        0x7C=>(8,"Mindful"),     0x7D=>(8,"Pluralist"),    0x7E=>(8,"Selfless"),
        0x7F=>(8,"Transforming"),
        0x80=>(9,"Knowing"),     0x81=>(9,"Presence"),     0x82=>(9,"Vitality"),
        0x83=>(9,"NO-SELF"),
        _ => return None,
    }.pipe(|(c, n)| Some((c, n)))
}

fn pipe<T, U, F: FnOnce(T) -> U>(val: T, f: F) -> U { f(val) }

pub fn value_col_for_id(id: u8) -> u8 {
    match id {
        0x01..=0x09 => 1, 0x0A..=0x1B => 2, 0x1C..=0x2D => 3,
        0x2E..=0x3F => 4, 0x40..=0x51 => 5, 0x52..=0x63 => 6,
        0x64..=0x75 => 7, 0x76..=0x7F => 8, 0x80..=0x83 => 9, _ => 0,
    }
}

// ── Evidence ──────────────────────────────────────────────────────────────────
#[derive(Debug, Clone, Copy)]
pub struct Evidence {
    pub conversation_id: u32,
    pub timestamp:       u32,
    pub confidence:      f32,
    pub statement_ref:   u16, // offset into string arena
}

// ── Seed ──────────────────────────────────────────────────────────────────────
#[derive(Debug, Clone)]
pub struct Seed {
    pub label:             [u8; LABEL_LEN],
    pub kernel:            [u8; KERNEL_LEN],
    pub foundation:        Foundation,
    pub matter_state:      MatterState,
    pub gate_detected:     Gate,
    pub confidence:        f32,
    pub emotional_density: f32,
    pub expression_count:  u32,
    pub first_detected:    u32,
    pub time_lock_date:    u32,
    pub time_lock_ok:      bool,
    pub is_active:         bool,
    pub value_col:         u8,
    pub value_id:          u8,
    pub domain_id:         u8,
    pub evidence:          [Option<Evidence>; MAX_EVIDENCE],
    pub evidence_count:    u8,
}

impl Seed {
    pub fn new_empty() -> Self {
        Self {
            label: [0; LABEL_LEN], kernel: [0; KERNEL_LEN],
            foundation: Foundation::Value, matter_state: MatterState::Gas,
            gate_detected: Gate::Awareness, confidence: 0.0,
            emotional_density: 0.0, expression_count: 0,
            first_detected: 0, time_lock_date: 0, time_lock_ok: false,
            is_active: true, value_col: 0, value_id: 0, domain_id: 0,
            evidence: [None; MAX_EVIDENCE], evidence_count: 0,
        }
    }
    pub fn set_label(&mut self, s: &[u8]) {
        let n = s.len().min(LABEL_LEN - 1);
        self.label[..n].copy_from_slice(&s[..n]);
        self.label[n] = 0;
    }
    pub fn label_str(&self) -> &str {
        let end = self.label.iter().position(|&b| b==0).unwrap_or(LABEL_LEN);
        core::str::from_utf8(&self.label[..end]).unwrap_or("?")
    }
    pub fn is_matchable(&self) -> bool {
        self.confidence >= MATCHING_THRESHOLD && self.time_lock_ok && self.is_active
    }
    pub fn update_matter_state(&mut self, now: u32) {
        let days = now.saturating_sub(self.first_detected) / 86400;
        self.matter_state = MatterState::from_confidence_and_days(self.confidence, days);
        if !self.time_lock_ok { self.time_lock_ok = now >= self.time_lock_date; }
    }
    pub fn update_confidence(&mut self, signal: f32, weight: f32) {
        let w = weight.clamp(0.0, 1.0);
        self.confidence = self.confidence * (1.0 - w) + signal * w;
    }
    pub fn add_evidence(&mut self, ev: Evidence) -> bool {
        if self.evidence_count as usize >= MAX_EVIDENCE { return false; }
        self.evidence[self.evidence_count as usize] = Some(ev);
        self.evidence_count += 1;
        self.expression_count += 1;
        true
    }
    pub fn serialize_fixed(&self, buf: &mut [u8; SEED_FIXED_SIZE]) {
        buf[0] = VERSION; buf[1] = self.foundation as u8;
        buf[2] = self.matter_state as u8; buf[3] = self.gate_detected as u8;
        buf[4..8].copy_from_slice(&self.confidence.to_le_bytes());
        buf[8..12].copy_from_slice(&self.emotional_density.to_le_bytes());
        buf[12..16].copy_from_slice(&self.expression_count.to_le_bytes());
        buf[16..20].copy_from_slice(&self.first_detected.to_le_bytes());
        buf[20..24].copy_from_slice(&self.time_lock_date.to_le_bytes());
        buf[24] = self.time_lock_ok as u8; buf[25] = self.is_active as u8;
        buf[26] = self.value_col; buf[27] = self.value_id; buf[28] = self.domain_id;
        let crc = crc16_ccitt(&buf[..29]);
        buf[29] = (crc & 0xFF) as u8; buf[30] = (crc >> 8) as u8; buf[31] = 0;
        buf[32..64].copy_from_slice(&self.label);
    }
    pub fn deserialize_fixed(buf: &[u8; SEED_FIXED_SIZE]) -> Option<Self> {
        if buf[0] != VERSION { return None; }
        let stored = (buf[29] as u16) | ((buf[30] as u16) << 8);
        if crc16_ccitt(&buf[..29]) != stored { return None; }
        let mut s = Self::new_empty();
        s.foundation    = Foundation::from_u8(buf[1])?;
        s.matter_state  = MatterState::from_u8(buf[2])?;
        s.gate_detected = Gate::from_u8(buf[3])?;
        s.confidence    = f32::from_le_bytes([buf[4],buf[5],buf[6],buf[7]]);
        s.emotional_density = f32::from_le_bytes([buf[8],buf[9],buf[10],buf[11]]);
        s.expression_count  = u32::from_le_bytes([buf[12],buf[13],buf[14],buf[15]]);
        s.first_detected    = u32::from_le_bytes([buf[16],buf[17],buf[18],buf[19]]);
        s.time_lock_date    = u32::from_le_bytes([buf[20],buf[21],buf[22],buf[23]]);
        s.time_lock_ok = buf[24] != 0; s.is_active = buf[25] != 0;
        s.value_col = buf[26]; s.value_id = buf[27]; s.domain_id = buf[28];
        s.label.copy_from_slice(&buf[32..64]);
        Some(s)
    }
}

// ── Profile ───────────────────────────────────────────────────────────────────
#[derive(Debug, Clone)]
pub struct VCrystal {
    pub primary:    VCrystalPosition,
    pub scores:     [f32; 6],
    pub trajectory: VCrystalTrajectory,
}
impl Default for VCrystal {
    fn default() -> Self { Self {
        primary: VCrystalPosition::Vulnerable,
        scores: [0.0; 6], trajectory: VCrystalTrajectory::Stable,
    }}
}

#[derive(Debug, Clone)]
pub struct Profile {
    pub version:            u8,
    pub matter_state:       MatterState,
    pub phase:              AmePhase,
    pub current_gate:       Gate,
    pub cycle_number:       u8,
    pub profile_created:    u32,
    pub last_session:       u32,
    pub session_count:      u16,
    pub v_crystal:          VCrystal,
    pub column_distribution:[u8; 9],
    pub center_of_gravity:  u16, // ×100
    pub fot_score:          u16, // 0–10000
    pub enfoldment_scores:  [u8; ENFOLDMENT_COUNT],
    pub domain_affinities:  [u8; DOMAIN_COUNT],
    pub name:               [u8; 64],
    pub location:           [u8; 64],
    pub community_id:       [u8; 32],
    pub gate_responses:     [u8; 9],
    pub gate_values_found:  [u8; 9],
}

impl Profile {
    pub fn new(name: &[u8], now: u32) -> Self {
        let mut p = Self {
            version: VERSION, matter_state: MatterState::Gas,
            phase: AmePhase::Elixir, current_gate: Gate::Awareness,
            cycle_number: 1, profile_created: now, last_session: now,
            session_count: 0, v_crystal: VCrystal::default(),
            column_distribution: [0;9], center_of_gravity: 150,
            fot_score: 0, enfoldment_scores: [0;ENFOLDMENT_COUNT],
            domain_affinities: [0;DOMAIN_COUNT],
            name: [0;64], location: [0;64], community_id: [0;32],
            gate_responses: [0;9], gate_values_found: [0;9],
        };
        let n = name.len().min(63);
        p.name[..n].copy_from_slice(&name[..n]);
        p
    }
    pub fn name_str(&self) -> &str {
        let e = self.name.iter().position(|&b|b==0).unwrap_or(64);
        core::str::from_utf8(&self.name[..e]).unwrap_or("?")
    }
    pub fn can_advance_gate(&self) -> bool {
        let g = self.current_gate as usize;
        self.gate_responses[g] >= 3 && self.gate_values_found[g] >= 1
    }
    pub fn try_advance_gate(&mut self) -> bool {
        if self.can_advance_gate() {
            self.current_gate = self.current_gate.next();
            if self.current_gate == Gate::Awareness {
                self.cycle_number = self.cycle_number.saturating_add(1);
            }
            true
        } else { false }
    }
    pub fn update_fot(&mut self, seeds: &[Seed]) {
        if seeds.is_empty() { return; }
        let vs: Vec<&Seed> = seeds.iter()
            .filter(|s| s.is_active && s.foundation == Foundation::Value)
            .collect::<_>();  // uses Vec in std builds
        // In no_alloc: iterate seeds twice
        let mut expr=0.0f32; let mut witn=0.0f32;
        let mut dens=0.0f32; let mut lock=0.0f32;
        let mut n=0u32;
        for s in &vs {
            expr += s.confidence;
            witn += (s.evidence_count as f32 / MAX_EVIDENCE as f32).min(1.0);
            dens += s.emotional_density;
            if s.time_lock_ok { lock += 1.0; }
            n += 1;
        }
        if n == 0 { return; }
        let nf = n as f32;
        let fot = (expr/nf*0.35 + witn/nf*0.30 + dens/nf*0.25 + lock/nf*0.10).min(1.0);
        self.fot_score = (fot * 10000.0) as u16;
    }
    pub fn serialize(&self, buf: &mut [u8; PROFILE_RECORD_SIZE]) {
        buf[0]=self.version; buf[1]=self.matter_state as u8;
        buf[2]=(self.session_count&0xFF) as u8; buf[3]=(self.session_count>>8) as u8;
        buf[4..8].copy_from_slice(&self.profile_created.to_le_bytes());
        buf[8..12].copy_from_slice(&self.last_session.to_le_bytes());
        buf[12]=self.current_gate as u8; buf[13]=self.cycle_number;
        buf[14]=self.v_crystal.primary as u8;
        for (i,&s) in self.v_crystal.scores.iter().enumerate() { buf[15+i]=(s*255.0)as u8; }
        buf[21..30].copy_from_slice(&self.column_distribution);
        buf[30..32].copy_from_slice(&self.fot_score.to_le_bytes());
        buf[32..46].copy_from_slice(&self.enfoldment_scores);
        buf[46..68].copy_from_slice(&self.domain_affinities);
        buf[68]=self.phase as u8;
        buf[69..71].copy_from_slice(&self.center_of_gravity.to_le_bytes());
        buf[71]=self.v_crystal.trajectory as u8;
        buf[72..136].copy_from_slice(&self.name);
        buf[136..200].copy_from_slice(&self.location);
        buf[200..232].copy_from_slice(&self.community_id);
        buf[232..241].copy_from_slice(&self.gate_responses);
        buf[241..250].copy_from_slice(&self.gate_values_found);
        let crc = crc16_ccitt(&buf[..250]);
        buf[250..252].copy_from_slice(&crc.to_le_bytes());
        buf[252..256].copy_from_slice(&MAGIC);
    }
    pub fn deserialize(buf: &[u8; PROFILE_RECORD_SIZE]) -> Option<Self> {
        if buf[252..256] != MAGIC { return None; }
        let stored = u16::from_le_bytes([buf[250],buf[251]]);
        if crc16_ccitt(&buf[..250]) != stored { return None; }
        let mut p = Profile::new(&[], 0);
        p.matter_state  = MatterState::from_u8(buf[1])?;
        p.session_count = (buf[2] as u16) | ((buf[3] as u16)<<8);
        p.profile_created = u32::from_le_bytes([buf[4],buf[5],buf[6],buf[7]]);
        p.last_session    = u32::from_le_bytes([buf[8],buf[9],buf[10],buf[11]]);
        p.current_gate  = Gate::from_u8(buf[12])?;
        p.cycle_number  = buf[13];
        p.v_crystal.primary = match buf[14] {
            0=>VCrystalPosition::Victim, 1=>VCrystalPosition::Villain,
            2=>VCrystalPosition::Victor, 3=>VCrystalPosition::Virtuous,
            4=>VCrystalPosition::Vengeful, 5=>VCrystalPosition::Vulnerable,
            _=>return None,
        };
        for i in 0..6 { p.v_crystal.scores[i]=buf[15+i] as f32/255.0; }
        p.column_distribution.copy_from_slice(&buf[21..30]);
        p.fot_score = u16::from_le_bytes([buf[30],buf[31]]);
        p.enfoldment_scores.copy_from_slice(&buf[32..46]);
        p.domain_affinities.copy_from_slice(&buf[46..68]);
        p.phase = match buf[68] {
            0=>AmePhase::Elixir, 1=>AmePhase::Chalice, 2=>AmePhase::Portal, _=>return None,
        };
        p.center_of_gravity = u16::from_le_bytes([buf[69],buf[70]]);
        p.name.copy_from_slice(&buf[72..136]);
        p.location.copy_from_slice(&buf[136..200]);
        p.community_id.copy_from_slice(&buf[200..232]);
        p.gate_responses.copy_from_slice(&buf[232..241]);
        p.gate_values_found.copy_from_slice(&buf[241..250]);
        Some(p)
    }
}

// ── Coherence Matching ────────────────────────────────────────────────────────
/// Returns 0.0–1.0. Both profiles must be Solid+ to match.
pub fn coherence_score(a: &Profile, b: &Profile) -> f32 {
    if a.matter_state < MatterState::Solid || b.matter_state < MatterState::Solid {
        return 0.0;
    }
    let dot: f32 = a.column_distribution.iter().zip(&b.column_distribution)
        .map(|(&x,&y)| x as f32 * y as f32).sum();
    let ma: f32 = a.column_distribution.iter().map(|&x|(x as f32).powi(2)).sum::<f32>().sqrt();
    let mb: f32 = b.column_distribution.iter().map(|&x|(x as f32).powi(2)).sum::<f32>().sqrt();
    let col = if ma>0.0&&mb>0.0 { dot/(ma*mb) } else { 0.0 };
    let fot = 1.0 - (a.fot_score as i32 - b.fot_score as i32).abs() as f32 / 10000.0;
    let gd = (a.current_gate as i8 - b.current_gate as i8).unsigned_abs();
    let gate = match gd { 0=>0.7, 1=>1.0, 2=>0.8, _=>0.4 };
    let dom: f32 = a.domain_affinities.iter().zip(&b.domain_affinities)
        .filter(|(&da,&db)| da>128&&db>128).count() as f32 / DOMAIN_COUNT as f32;
    col*0.35 + fot*0.25 + gate*0.20 + dom*0.20
}

// ── FOT Calculation ───────────────────────────────────────────────────────────
pub fn calculate_fot(seeds: &[Seed]) -> f32 {
    let mut expr=0.0f32; let mut witn=0.0f32;
    let mut dens=0.0f32; let mut lock=0.0f32; let mut n=0u32;
    for s in seeds {
        if !s.is_active || s.foundation != Foundation::Value { continue; }
        expr += s.confidence;
        witn += (s.evidence_count as f32 / MAX_EVIDENCE as f32).min(1.0);
        dens += s.emotional_density;
        if s.time_lock_ok { lock += 1.0; }
        n += 1;
    }
    if n == 0 { return 0.0; }
    let f = n as f32;
    (expr/f*0.35 + witn/f*0.30 + dens/f*0.25 + lock/f*0.10).min(1.0)
}

// ── CRC16-CCITT ────────────────────────────────────────────────────────────────
pub fn crc16_ccitt(data: &[u8]) -> u16 {
    let mut crc: u16 = 0xFFFF;
    for &b in data {
        crc ^= (b as u16) << 8;
        for _ in 0..8 {
            crc = if crc & 0x8000 != 0 { (crc<<1)^0x1021 } else { crc<<1 };
        }
    }
    crc
}

// ── Why-Card Builder ──────────────────────────────────────────────────────────
pub struct WhyCard<'a> {
    pub insight:     &'a str,
    pub confidence:  f32,
    pub evidence:    [Option<&'a str>; 3],
    pub alternative: &'a str,
}

impl<'a> WhyCard<'a> {
    /// Format Why-Card to a fixed buffer (no_alloc)
    /// Returns number of bytes written
    pub fn format_into(&self, buf: &mut [u8]) -> usize {
        let pct = (self.confidence * 100.0) as u8;
        let prefix = b"INSIGHT: ";
        let mut pos = 0;
        if pos + prefix.len() <= buf.len() {
            buf[pos..pos+prefix.len()].copy_from_slice(prefix);
            pos += prefix.len();
        }
        let insight_bytes = self.insight.as_bytes();
        let n = insight_bytes.len().min(buf.len() - pos);
        buf[pos..pos+n].copy_from_slice(&insight_bytes[..n]);
        pos += n;
        pos
    }
}

// ── Tests ─────────────────────────────────────────────────────────────────────
#[cfg(test)]
mod tests {
    use super::*;

    #[test] fn test_all_values_resolve() {
        for id in 0x01u8..=0x83u8 {
            let info = value_info(id);
            assert!(info.is_some(), "Missing value id 0x{:02X}", id);
        }
    }
    #[test] fn test_seed_roundtrip() {
        let mut s = Seed::new_empty();
        s.set_label(b"Authentic Inquiry");
        s.foundation = Foundation::Value;
        s.matter_state = MatterState::Solid;
        s.confidence = 0.82; s.value_id = 0x43;
        s.time_lock_ok = true; s.is_active = true;
        let mut buf = [0u8; SEED_FIXED_SIZE];
        s.serialize_fixed(&mut buf);
        let r = Seed::deserialize_fixed(&buf).unwrap();
        assert_eq!(r.foundation, Foundation::Value);
        assert!((r.confidence - 0.82).abs() < 1e-5);
        assert!(r.is_matchable());
    }
    #[test] fn test_profile_roundtrip() {
        let mut p = Profile::new(b"Ian", 1_700_000_000);
        p.matter_state = MatterState::Solid;
        p.fot_score = 7500; p.current_gate = Gate::Mission;
        let mut buf = [0u8; PROFILE_RECORD_SIZE];
        p.serialize(&mut buf);
        let r = Profile::deserialize(&buf).unwrap();
        assert_eq!(r.name_str(), "Ian");
        assert_eq!(r.current_gate, Gate::Mission);
        assert_eq!(r.fot_score, 7500);
    }
    #[test] fn test_crc16_vector() {
        assert_eq!(crc16_ccitt(b"123456789"), 0x29B1);
    }
    #[test] fn test_gate_spiral() {
        assert_eq!(Gate::Communicate.next(), Gate::Awareness);
    }
    #[test] fn test_coherence_requires_solid() {
        let a = Profile::new(b"A", 0);
        let b = Profile::new(b"B", 0);
        assert_eq!(coherence_score(&a, &b), 0.0); // both gas
    }
    #[test] fn test_fot_empty() {
        assert_eq!(calculate_fot(&[]), 0.0);
    }
    #[test] fn test_desert_island_test() {
        // Values require another being — only Values generate FOT
        // Simulated: 3 value seeds vs 3 need seeds — only values contribute
        let mut seeds = [Seed::new_empty(); 6];
        for (i, s) in seeds.iter_mut().enumerate() {
            s.foundation = if i < 3 { Foundation::Value } else { Foundation::Need };
            s.is_active = true; s.confidence = 0.80;
            s.emotional_density = 0.70; s.evidence_count = 5; s.time_lock_ok = true;
        }
        let fot = calculate_fot(&seeds);
        assert!(fot > 0.5, "Value seeds should generate strong FOT: {}", fot);
    }
}
```

---

# PART FOUR: IMPLEMENTATION VARIANT B — WASM Offline-First Browser

```
Build: wasm-pack build --target web --release
Size budget: < 300KB WASM binary gzipped, < 50ms cold-start
Storage: IndexedDB + OPFS (Origin Private File System)
Encryption: AES-256-GCM via WebCrypto API
Sync: Broadcast channel between tabs + Service Worker
```

```rust
//! AME WASM — Offline-First Browser Runtime
//! wasm-bindgen exposed API for the mythogen-ame frontend

use wasm_bindgen::prelude::*;
use js_sys::Date;

// ── Engine ────────────────────────────────────────────────────────────────────
#[wasm_bindgen]
pub struct AmeEngine {
    profiles: Vec<WasmProfile>,
    seeds:    Vec<WasmSeed>,
    events:   Vec<String>, // JSON event log
}

#[wasm_bindgen]
impl AmeEngine {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        #[cfg(debug_assertions)]
        console_error_panic_hook::set_once();
        Self { profiles: Vec::new(), seeds: Vec::new(), events: Vec::new() }
    }

    /// Create new profile, returns slot index
    pub fn create_profile(&mut self, name: &str, location: &str) -> u32 {
        let slot = self.profiles.len() as u32;
        self.profiles.push(WasmProfile::new(slot, name, location));
        self.push_event("created", slot, r#"{}"#);
        slot
    }

    /// Add seed (foundation: 0=need,1=belief,2=principle,3=value)
    pub fn add_seed(&mut self, profile_slot: u32, label: &str, kernel: &str,
                    foundation: u8, value_id: u8, confidence: f32,
                    emotional_density: f32) -> bool {
        if profile_slot as usize >= self.profiles.len() { return false; }
        let col = value_col_wasm(value_id);
        let ms = matter_state_f32(confidence);
        let s = WasmSeed {
            profile_slot, foundation, matter_state: ms,
            gate_detected: self.profiles[profile_slot as usize].current_gate,
            confidence, emotional_density, expression_count: 1,
            value_col: col, value_id, domain_id: 0,
            time_lock_ok: false, is_active: true,
            label: label.to_string(), kernel: kernel.to_string(),
        };
        if foundation == 3 && col >= 1 && col <= 9 {
            let p = &mut self.profiles[profile_slot as usize];
            p.increment_col(col);
            p.fot_score = self.compute_fot(profile_slot);
            p.matter_state = matter_state_f32(p.fot_score);
        }
        self.seeds.push(s);
        self.push_event("seed_added", profile_slot,
            &format!(r#"{{"label":"{}","f":{}}}"#, label, foundation));
        true
    }

    /// Attempt gate advancement (caller tracks response + value counts)
    pub fn advance_gate(&mut self, slot: u32, responses: u8, values: u8) -> bool {
        if responses < 3 || values < 1 { return false; }
        if let Some(p) = self.profiles.get_mut(slot as usize) {
            let old = p.current_gate;
            p.current_gate = if p.current_gate >= 8 {
                p.cycle_number = p.cycle_number.saturating_add(1); 1
            } else { p.current_gate + 1 };
            self.events.push(format!(
                r#"{{"type":"gate_advanced","profile":{},"from":{},"to":{}}}"#,
                slot, old, p.current_gate));
            return true;
        }
        false
    }

    /// Profile as JSON
    pub fn profile_json(&self, slot: u32) -> String {
        match self.profiles.get(slot as usize) {
            None => "null".into(),
            Some(p) => format!(
                r#"{{"slot":{},"name":"{}","state":"{}","gate":{},"fot":{:.3},"cycle":{}}}"#,
                p.slot, p.name, matter_name(p.matter_state), p.current_gate,
                p.fot_score, p.cycle_number),
        }
    }

    /// Seeds for profile as JSON array
    pub fn seeds_json(&self, slot: u32) -> String {
        let mut out = String::from("[");
        let mut first = true;
        for s in self.seeds.iter().filter(|s| s.profile_slot==slot && s.is_active) {
            if !first { out.push(','); }
            first = false;
            out.push_str(&format!(
                r#"{{"label":"{}","f":{},"ms":{},"conf":{:.3},"col":{},"match":{}}}"#,
                s.label, s.foundation, s.matter_state, s.confidence, s.value_col,
                s.is_matchable()));
        }
        out.push(']'); out
    }

    /// Top-N matches as JSON
    pub fn matches_json(&self, slot: u32, n: u32) -> String {
        let target = match self.profiles.get(slot as usize) {
            None => return "[]".into(),
            Some(p) if p.matter_state < 2 => return "[]".into(),
            Some(p) => p,
        };
        let mut pairs: Vec<(u32, f32)> = self.profiles.iter()
            .filter(|p| p.slot != slot && p.matter_state >= 2)
            .map(|p| (p.slot, coherence_wasm(target, p)))
            .collect();
        pairs.sort_by(|a,b| b.1.partial_cmp(&a.1).unwrap_or(core::cmp::Ordering::Equal));
        pairs.truncate(n as usize);
        let mut out = String::from("[");
        for (i, (s, sc)) in pairs.iter().enumerate() {
            if i > 0 { out.push(','); }
            let nm = &self.profiles[*s as usize].name;
            out.push_str(&format!(r#"{{"slot":{},"score":{:.3},"name":"{}"}}"#,s,sc,nm));
        }
        out.push(']'); out
    }

    /// Generate Why-Card JSON for a detected pattern
    pub fn why_card_json(&self, insight: &str, confidence: f32, ev1: &str, ev2: &str) -> String {
        format!(
            r#"{{"insight":"{}","confidence":{},"evidence":["{}","{}"],"alt":"Could also reflect a related value or need","choices":["yes","no","partially","not_sure"]}}"#,
            insight, (confidence*100.0) as u32, ev1, ev2)
    }

    /// Gate opening question (never uses closing words)
    pub fn gate_question(&self, gate: u8) -> String {
        match gate {
            1 => "What feels most alive in your life right now?",
            2 => "What from your past has most shaped who you are today?",
            3 => "What does the future you're dreaming of actually look like?",
            4 => "Why does this matter — not just to you, but beyond you?",
            5 => "Where do you want to be, concretely, in your journey?",
            6 => "When and how do you feel most able to contribute?",
            7 => "How well do your current actions align with what you truly value?",
            8 => "Who needs to hear what you've discovered, and how?",
            _ => "What brings you here today — not the practical reason, but the deeper pull?",
        }.to_string()
    }

    /// Export all data as binary blob (for backup / peer sync)
    pub fn export(&self) -> Vec<u8> {
        let mut out: Vec<u8> = Vec::new();
        out.extend_from_slice(b"AME\x01");
        out.extend_from_slice(&(self.profiles.len() as u16).to_le_bytes());
        out.extend_from_slice(&(self.seeds.len() as u32).to_le_bytes());
        for p in &self.profiles { out.extend_from_slice(&p.to_bytes()); }
        for s in &self.seeds    { out.extend_from_slice(&s.to_bytes()); }
        let crc = crc32(&out);
        out.extend_from_slice(&crc.to_le_bytes());
        out
    }

    /// Import from binary blob
    pub fn import(&mut self, data: &[u8]) -> bool {
        if data.len() < 10 || &data[0..4] != b"AME\x01" { return false; }
        let body_len = data.len() - 4;
        let stored = u32::from_le_bytes(data[body_len..].try_into().unwrap_or([0;4]));
        if crc32(&data[..body_len]) != stored { return false; }
        let pc = u16::from_le_bytes([data[4],data[5]]) as usize;
        let sc = u32::from_le_bytes([data[6],data[7],data[8],data[9]]) as usize;
        self.profiles.clear(); self.seeds.clear();
        let pb = 10;
        for i in 0..pc {
            let off = pb + i * WasmProfile::SIZE;
            if off + WasmProfile::SIZE > data.len() { break; }
            if let Some(p) = WasmProfile::from_bytes(&data[off..off+WasmProfile::SIZE]) {
                self.profiles.push(p);
            }
        }
        let sb = pb + pc * WasmProfile::SIZE;
        for i in 0..sc {
            let off = sb + i * WasmSeed::SIZE;
            if off + WasmSeed::SIZE > data.len() { break; }
            if let Some(s) = WasmSeed::from_bytes(&data[off..off+WasmSeed::SIZE]) {
                self.seeds.push(s);
            }
        }
        true
    }

    fn compute_fot(&self, slot: u32) -> f32 {
        let vs: Vec<&WasmSeed> = self.seeds.iter()
            .filter(|s| s.profile_slot==slot && s.is_active && s.foundation==3)
            .collect();
        if vs.is_empty() { return 0.0; }
        let n = vs.len() as f32;
        let e = vs.iter().map(|s|s.confidence).sum::<f32>() / n;
        let w = vs.iter().map(|s|(s.expression_count as f32/10.0).min(1.0)).sum::<f32>() / n;
        let d = vs.iter().map(|s|s.emotional_density).sum::<f32>() / n;
        let l = vs.iter().filter(|s|s.time_lock_ok).count() as f32 / n;
        (e*0.35 + w*0.30 + d*0.25 + l*0.10).min(1.0)
    }

    fn push_event(&mut self, kind: &str, slot: u32, data: &str) {
        self.events.push(format!(
            r#"{{"type":"{}","slot":{},"ts":{},"data":{}}}"#,
            kind, slot, Date::now() as u64, data));
        if self.events.len() > 1000 { self.events.remove(0); }
    }
}

// ── WasmProfile ───────────────────────────────────────────────────────────────
pub struct WasmProfile {
    pub slot: u32, pub matter_state: u8, pub current_gate: u8,
    pub cycle_number: u8, pub fot_score: f32,
    pub col: [u8; 9], pub name: String, pub location: String,
}

impl WasmProfile {
    const SIZE: usize = 128;
    fn new(slot: u32, name: &str, location: &str) -> Self {
        Self { slot, matter_state: 0, current_gate: 1, cycle_number: 1,
               fot_score: 0.0, col: [0;9], name: name.to_string(),
               location: location.to_string() }
    }
    fn increment_col(&mut self, col: u8) {
        if col >= 1 && col <= 9 {
            self.col[(col-1) as usize] = self.col[(col-1) as usize].saturating_add(1);
        }
    }
    fn to_bytes(&self) -> Vec<u8> {
        let mut b = vec![0u8; Self::SIZE];
        b[0]=self.matter_state; b[1]=self.current_gate; b[2]=self.cycle_number;
        b[3..7].copy_from_slice(&self.fot_score.to_le_bytes());
        b[7..16].copy_from_slice(&self.col);
        let n = self.name.as_bytes().len().min(63);
        b[16..16+n].copy_from_slice(&self.name.as_bytes()[..n]);
        b
    }
    fn from_bytes(b: &[u8]) -> Option<Self> {
        if b.len() < Self::SIZE { return None; }
        let ne = b[16..80].iter().position(|&x|x==0).unwrap_or(64);
        Some(Self {
            slot: 0, matter_state: b[0], current_gate: b[1], cycle_number: b[2],
            fot_score: f32::from_le_bytes([b[3],b[4],b[5],b[6]]),
            col: b[7..16].try_into().ok()?,
            name: String::from_utf8_lossy(&b[16..16+ne]).into(),
            location: String::new(),
        })
    }
}

// ── WasmSeed ──────────────────────────────────────────────────────────────────
pub struct WasmSeed {
    pub profile_slot: u32, pub foundation: u8, pub matter_state: u8,
    pub gate_detected: u8, pub confidence: f32, pub emotional_density: f32,
    pub expression_count: u32, pub value_col: u8, pub value_id: u8,
    pub domain_id: u8, pub time_lock_ok: bool, pub is_active: bool,
    pub label: String, pub kernel: String,
}

impl WasmSeed {
    const SIZE: usize = 64;
    pub fn is_matchable(&self) -> bool {
        self.confidence >= 0.60 && self.time_lock_ok && self.is_active && self.foundation == 3
    }
    fn to_bytes(&self) -> Vec<u8> {
        let mut b = vec![0u8; Self::SIZE];
        b[0]=self.foundation; b[1]=self.matter_state; b[2]=self.gate_detected;
        b[3..7].copy_from_slice(&self.confidence.to_le_bytes());
        b[7..11].copy_from_slice(&self.emotional_density.to_le_bytes());
        b[11]=self.value_col; b[12]=self.value_id; b[13]=self.time_lock_ok as u8;
        let n = self.label.as_bytes().len().min(50);
        b[14..14+n].copy_from_slice(&self.label.as_bytes()[..n]);
        b
    }
    fn from_bytes(b: &[u8]) -> Option<Self> {
        if b.len() < Self::SIZE { return None; }
        let le = b[14..64].iter().position(|&x|x==0).unwrap_or(50);
        Some(Self {
            profile_slot: 0, foundation: b[0], matter_state: b[1],
            gate_detected: b[2],
            confidence: f32::from_le_bytes([b[3],b[4],b[5],b[6]]),
            emotional_density: f32::from_le_bytes([b[7],b[8],b[9],b[10]]),
            expression_count: 1, value_col: b[11], value_id: b[12],
            domain_id: 0, time_lock_ok: b[13]!=0, is_active: true,
            label: String::from_utf8_lossy(&b[14..14+le]).into(),
            kernel: String::new(),
        })
    }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
fn matter_state_f32(c: f32) -> u8 {
    if c >= 0.75 { 2 } else if c >= 0.40 { 1 } else { 0 }
}
fn matter_name(ms: u8) -> &'static str {
    match ms { 0=>"gas", 1=>"liquid", 2=>"solid", 3=>"plasma", _=>"?" }
}
fn value_col_wasm(id: u8) -> u8 {
    match id {
        0x01..=0x09=>1, 0x0A..=0x1B=>2, 0x1C..=0x2D=>3,
        0x2E..=0x3F=>4, 0x40..=0x51=>5, 0x52..=0x63=>6,
        0x64..=0x75=>7, 0x76..=0x7F=>8, 0x80..=0x83=>9, _=>0,
    }
}
fn coherence_wasm(a: &WasmProfile, b: &WasmProfile) -> f32 {
    let dot: f32 = a.col.iter().zip(&b.col).map(|(&x,&y)| x as f32*y as f32).sum();
    let ma: f32 = a.col.iter().map(|&x|(x as f32).powi(2)).sum::<f32>().sqrt();
    let mb: f32 = b.col.iter().map(|&x|(x as f32).powi(2)).sum::<f32>().sqrt();
    let col = if ma>0.0&&mb>0.0 { dot/(ma*mb) } else { 0.0 };
    let fot = 1.0 - (a.fot_score - b.fot_score).abs();
    let gd = (a.current_gate as i8 - b.current_gate as i8).unsigned_abs();
    let gate = match gd { 0=>0.7, 1=>1.0, 2=>0.8, _=>0.4 };
    col*0.40 + fot*0.30 + gate*0.30
}
fn crc32(data: &[u8]) -> u32 {
    let mut c: u32 = 0xFFFFFFFF;
    for &b in data { c ^= b as u32; for _ in 0..8 { c = if c&1!=0 { (c>>1)^0xEDB88320 } else { c>>1 }; } }
    !c
}

// ── JS-exposed value lookup ────────────────────────────────────────────────────
#[wasm_bindgen]
pub fn value_name_js(id: u8) -> String {
    match id {
        0x43=>"Authentic", 0x36=>"Honest", 0x68=>"Compassion",
        0x66=>"Balance",   0x56=>"Creating",0x4A=>"Generous",
        0x48=>"Empathizing",0x72=>"Integrating",0x05=>"Safe",
        _ => return format!("Value-0x{:02X}",id),
    }.to_string()
}
```

---

# PART FIVE: IMPLEMENTATION VARIANT C — Bevy ECS Engine

```
Cargo.toml:
  bevy = { version = "0.13", default-features = false,
           features = ["bevy_app", "bevy_ecs"] }
Usage: headless community simulation / server-side matching engine
Run: cargo run --release
```

```rust
//! AME Bevy ECS — Community Dynamics Engine (headless)
//! Uses Bevy ECS as relational data + simulation engine, NOT a renderer.
//! Components = data, Systems = logic, Events = audit trail.

use bevy::prelude::*;

// ── Components ────────────────────────────────────────────────────────────────
#[derive(Component, Debug, Clone)]
pub struct Identity { pub name: String, pub created: u64 }

#[derive(Component, Debug, Clone, Default)]
pub struct ProfileState {
    pub matter_state: u8, pub current_gate: u8, pub cycle_number: u8,
    pub fot_score: f32, pub session_count: u16,
    pub gate_responses: [u8;9], pub gate_values_found: [u8;9],
}

#[derive(Component, Debug, Clone, Default)]
pub struct ValuesDistribution {
    pub column_counts: [u8;9], pub center_of_gravity: f32,
}

#[derive(Component, Debug, Clone)]
pub struct VCrystalState {
    pub primary: u8, // 0=victim..5=vulnerable
    pub scores: [f32;6], pub toward_virtuous: bool,
}
impl Default for VCrystalState {
    fn default() -> Self { Self { primary: 5, scores: [0.0;6], toward_virtuous: false } }
}

#[derive(Component, Debug, Clone, Default)]
pub struct EnfoldmentEngagement { pub scores: [f32;14] }

#[derive(Component, Debug, Clone)]
pub struct CommunityMember { pub community: Entity, pub joined_at: u64 }

#[derive(Component, Debug, Clone, Default)]
pub struct CommunityData {
    pub member_count: u16, pub collective_fot: f32,
    pub collective_matter: u8, pub column_distribution: [u8;9],
}

#[derive(Component, Debug, Clone)]
pub struct SeedComponent {
    pub owner: Entity, pub label: String, pub foundation: u8,
    pub matter_state: u8, pub gate_detected: u8, pub confidence: f32,
    pub emotional_density: f32, pub expression_count: u32,
    pub value_id: u8, pub value_col: u8, pub time_lock_ok: bool,
    pub first_detected_ms: u64,
}
impl SeedComponent {
    pub fn is_matchable(&self) -> bool {
        self.confidence >= 0.60 && self.time_lock_ok && self.foundation == 3
    }
}

// ── Events ────────────────────────────────────────────────────────────────────
#[derive(Event, Debug)] pub struct GateAdvancedEvent {
    pub entity: Entity, pub from: u8, pub to: u8, pub cycle: u8,
}
#[derive(Event, Debug)] pub struct FotThresholdEvent {
    pub entity: Entity, pub old: f32, pub new: f32,
}
#[derive(Event, Debug)] pub struct MatterChangedEvent {
    pub entity: Entity, pub old: u8, pub new: u8,
}
#[derive(Event, Debug)] pub struct MatchFoundEvent {
    pub profile: Entity, pub matches: Vec<(Entity, f32)>,
}
#[derive(Event, Debug)] pub struct SeedMaturedEvent {
    pub seed: Entity, pub owner: Entity,
}

// ── Resources ─────────────────────────────────────────────────────────────────
#[derive(Resource)]
pub struct AmeConfig {
    pub fot_threshold: f32,     // 0.60
    pub time_lock_ms:  u64,     // 30 × 86_400_000
    pub dunbar_limit:  u16,     // 150
    pub match_top_n:   usize,   // 10
}
impl Default for AmeConfig {
    fn default() -> Self { Self {
        fot_threshold: 0.60, time_lock_ms: 30*86_400_000,
        dunbar_limit: 150, match_top_n: 10,
    }}
}

#[derive(Resource, Default)]
pub struct SimTime { pub now_ms: u64 }

#[derive(Resource, Default, Debug)]
pub struct GlobalField {
    pub profiles: u32, pub solid: u32, pub plasma: u32,
    pub avg_fot: f32, pub seeds: u32, pub value_seeds: u32,
}

// ── Systems ───────────────────────────────────────────────────────────────────

/// Recalculate FOT for profiles whose seeds changed
pub fn system_fot(
    mut profiles: Query<(Entity, &mut ProfileState, &ValuesDistribution)>,
    seeds: Query<&SeedComponent>,
    config: Res<AmeConfig>,
    mut ev_fot: EventWriter<FotThresholdEvent>,
) {
    for (ent, mut state, _dist) in &mut profiles {
        let vs: Vec<&SeedComponent> = seeds.iter()
            .filter(|s| s.owner == ent && s.foundation == 3).collect();
        if vs.is_empty() { continue; }
        let n = vs.len() as f32;
        let (e,w,d,l) = vs.iter().fold((0.0f32,0.0,0.0,0.0), |(e,w,d,l), s| (
            e + s.confidence,
            w + (s.expression_count as f32/10.0).min(1.0),
            d + s.emotional_density,
            l + if s.time_lock_ok { 1.0 } else { 0.0 },
        ));
        let new_fot = (e/n*0.35 + w/n*0.30 + d/n*0.25 + l/n*0.10).min(1.0);
        if state.fot_score < config.fot_threshold && new_fot >= config.fot_threshold {
            ev_fot.send(FotThresholdEvent { entity: ent, old: state.fot_score, new: new_fot });
        }
        state.fot_score = new_fot;
    }
}

/// Update matter states
pub fn system_matter(
    mut profiles: Query<(Entity, &mut ProfileState)>,
    mut ev_matter: EventWriter<MatterChangedEvent>,
) {
    for (ent, mut state) in &mut profiles {
        let new = if state.fot_score >= 0.75 && state.session_count >= 7 { 2 }
            else if state.fot_score >= 0.40 { 1 } else { 0 };
        if new != state.matter_state {
            ev_matter.send(MatterChangedEvent { entity: ent, old: state.matter_state, new });
            state.matter_state = new;
        }
    }
}

/// Check gate advancement
pub fn system_gates(
    mut profiles: Query<(Entity, &mut ProfileState)>,
    mut ev_gate: EventWriter<GateAdvancedEvent>,
) {
    for (ent, mut state) in &mut profiles {
        let g = state.current_gate as usize;
        if state.gate_responses.get(g).copied().unwrap_or(0) >= 3
           && state.gate_values_found.get(g).copied().unwrap_or(0) >= 1 {
            let old = state.current_gate;
            state.current_gate = if old >= 8 {
                state.cycle_number = state.cycle_number.saturating_add(1); 1
            } else { old + 1 };
            ev_gate.send(GateAdvancedEvent { entity: ent, from: old, to: state.current_gate,
                cycle: state.cycle_number });
        }
    }
}

/// Seed time-lock unlock + maturation
pub fn system_seeds(
    mut seeds: Query<(Entity, &mut SeedComponent)>,
    time: Res<SimTime>, config: Res<AmeConfig>,
    mut ev_mature: EventWriter<SeedMaturedEvent>,
) {
    for (ent, mut seed) in &mut seeds {
        if !seed.time_lock_ok && time.now_ms >= seed.first_detected_ms + config.time_lock_ms {
            seed.time_lock_ok = true;
        }
        let new_ms = if seed.confidence >= 0.75 && seed.time_lock_ok { 2 }
            else if seed.confidence >= 0.40 { 1 } else { 0 };
        if new_ms > seed.matter_state {
            seed.matter_state = new_ms;
            ev_mature.send(SeedMaturedEvent { seed: ent, owner: seed.owner });
        }
    }
}

/// Coherence matching — runs when ProfileState changes
pub fn system_match(
    changed: Query<(Entity, &ProfileState, &ValuesDistribution), Changed<ProfileState>>,
    all: Query<(Entity, &ProfileState, &ValuesDistribution)>,
    config: Res<AmeConfig>,
    mut ev_match: EventWriter<MatchFoundEvent>,
) {
    for (ea, sa, da) in &changed {
        if sa.matter_state < 2 { continue; }
        let mut scores: Vec<(Entity, f32)> = all.iter()
            .filter(|(eb,sb,_)| *eb != ea && sb.matter_state >= 2)
            .map(|(eb,sb,db)| (eb, coherence_ecs(sa,da,sb,db)))
            .filter(|(_,s)| *s > 0.1)
            .collect();
        scores.sort_by(|a,b| b.1.partial_cmp(&a.1).unwrap_or(core::cmp::Ordering::Equal));
        scores.truncate(config.match_top_n);
        ev_match.send(MatchFoundEvent { profile: ea, matches: scores });
    }
}

/// Community FOT aggregation
pub fn system_community(
    mut communities: Query<(Entity, &mut CommunityData)>,
    members: Query<(&CommunityMember, &ProfileState)>,
) {
    for (comm_ent, mut comm) in &mut communities {
        let ms: Vec<&ProfileState> = members.iter()
            .filter(|(m,_)| m.community == comm_ent).map(|(_,s)| s).collect();
        if ms.is_empty() { continue; }
        let n = ms.len() as f32;
        comm.member_count = ms.len() as u16;
        comm.collective_fot = ms.iter().map(|s|s.fot_score).sum::<f32>() / n;
        comm.collective_matter = if comm.collective_fot >= 0.75 { 2 }
            else if comm.collective_fot >= 0.40 { 1 } else { 0 };
    }
}

/// Global field stats
pub fn system_global(
    profiles: Query<&ProfileState>,
    seeds: Query<&SeedComponent>,
    mut global: ResMut<GlobalField>,
) {
    let pvec: Vec<_> = profiles.iter().collect();
    global.profiles = pvec.len() as u32;
    global.solid  = pvec.iter().filter(|p| p.matter_state >= 2).count() as u32;
    global.plasma = pvec.iter().filter(|p| p.matter_state >= 3).count() as u32;
    global.avg_fot = if pvec.is_empty() { 0.0 } else {
        pvec.iter().map(|p|p.fot_score).sum::<f32>() / pvec.len() as f32
    };
    let svec: Vec<_> = seeds.iter().collect();
    global.seeds       = svec.len() as u32;
    global.value_seeds = svec.iter().filter(|s| s.foundation==3).count() as u32;
}

fn coherence_ecs(sa: &ProfileState, da: &ValuesDistribution,
                 sb: &ProfileState, db: &ValuesDistribution) -> f32 {
    let dot: f32 = da.column_counts.iter().zip(&db.column_counts)
        .map(|(&x,&y)| x as f32 * y as f32).sum();
    let ma: f32 = da.column_counts.iter().map(|&x|(x as f32).powi(2)).sum::<f32>().sqrt();
    let mb: f32 = db.column_counts.iter().map(|&x|(x as f32).powi(2)).sum::<f32>().sqrt();
    let col = if ma>0.0&&mb>0.0 { dot/(ma*mb) } else { 0.0 };
    let fot = 1.0 - (sa.fot_score - sb.fot_score).abs();
    let gd = (sa.current_gate as i8 - sb.current_gate as i8).unsigned_abs();
    let gate = match gd { 0=>0.7, 1=>1.0, 2=>0.8, _=>0.4 };
    let cog = 1.0 - (da.center_of_gravity - db.center_of_gravity).abs() / 8.0;
    col*0.35 + fot*0.25 + gate*0.20 + cog.clamp(0.0,1.0)*0.20
}

// ── Plugin ────────────────────────────────────────────────────────────────────
pub struct AmePlugin;
impl Plugin for AmePlugin {
    fn build(&self, app: &mut App) {
        app.init_resource::<AmeConfig>()
           .init_resource::<SimTime>()
           .init_resource::<GlobalField>()
           .add_event::<GateAdvancedEvent>()
           .add_event::<FotThresholdEvent>()
           .add_event::<MatterChangedEvent>()
           .add_event::<MatchFoundEvent>()
           .add_event::<SeedMaturedEvent>()
           .add_systems(Update, (
               system_seeds,
               system_fot,
               system_matter,
               system_gates,
               system_match,
               system_community,
               system_global,
           ).chain());
    }
}

fn main() {
    App::new()
        .add_plugins(MinimalPlugins)
        .add_plugins(AmePlugin)
        .add_systems(Startup, |mut commands: Commands, mut time: ResMut<SimTime>| {
            time.now_ms = 1_700_000_000_000;
            let comm = commands.spawn((
                Identity { name: "Pioneer Node".into(), created: time.now_ms },
                CommunityData::default(),
            )).id();
            for (nm, cols, fot) in [
                ("Vic",   [0u8,0,2,4,5,3,2,0,0], 0.82f32),
                ("Ian",   [0,0,1,3,4,4,2,1,0],   0.75),
                ("Alice", [0,1,2,2,5,4,3,1,0],   0.68),
            ] {
                let cog = cols.iter().enumerate()
                    .map(|(i,&c)| (i as f32+1.0)*c as f32)
                    .sum::<f32>() / cols.iter().map(|&c| c as f32).sum::<f32>().max(0.001);
                let ent = commands.spawn((
                    Identity { name: nm.into(), created: time.now_ms },
                    ProfileState { matter_state: if fot>=0.75{2}else if fot>=0.4{1}else{0},
                        current_gate: 4, cycle_number: 2, fot_score: fot,
                        session_count: 12, ..Default::default() },
                    ValuesDistribution { column_counts: cols, center_of_gravity: cog },
                    VCrystalState::default(),
                    EnfoldmentEngagement::default(),
                    CommunityMember { community: comm, joined_at: time.now_ms },
                )).id();
                commands.spawn(SeedComponent {
                    owner: ent, label: format!("{} core value",nm),
                    foundation: 3, matter_state: if fot>=0.75{2}else{1},
                    gate_detected: 1, confidence: fot, emotional_density: 0.75,
                    expression_count: 8, value_id: 0x43, value_col: 5,
                    time_lock_ok: fot >= 0.60,
                    first_detected_ms: time.now_ms - 35*86_400_000,
                });
            }
        })
        .add_systems(Update, |global: Res<GlobalField>, mut ev: EventReader<MatchFoundEvent>| {
            if global.is_changed() {
                println!("FIELD: profiles={} solid={} avg_fot={:.3} seeds={}/{}",
                    global.profiles, global.solid, global.avg_fot,
                    global.value_seeds, global.seeds);
            }
            for m in ev.read() {
                print!("MATCH {:?}: ", m.profile);
                for (e,s) in &m.matches { print!("{:?}({:.2}) ",e,s); }
                println!();
            }
        })
        .run();
}
```

---

# PART SIX: IMPLEMENTATION VARIANT D — RISC-V Bare Metal Node

```
Build: cargo build --release --target riscv32imc-unknown-none-elf
       or riscv64gc-unknown-none-elf
Target MCU: GD32VF103, ESP32-C3, SiFive E310, VisionFive 2
Flash layout (2MB SPI): identity(4KB) + profiles(~1MB) + seeds(~0.9MB)
                       + log(~48KB) + meta(4KB)
Power: < 50mW continuous, solar-viable
```

```rust
//! AME RISC-V Bare Metal — Civilization-Resilient Node
//! Standalone operation, no OS, no network stack required.
//! UART CLI + SPI Flash + optional LoRa mesh.

#![no_std]
#![no_main]

use core::panic::PanicInfo;

#[panic_handler]
fn panic(_: &PanicInfo) -> ! {
    // Blink error LED if available, then WFI loop (watchdog resets)
    loop { unsafe { core::arch::asm!("wfi") } }
}

// ── Flash Layout ──────────────────────────────────────────────────────────────
const FLASH_IDENTITY:      u32 = 0x000000; // 4KB — node ID, counts
const FLASH_PROFILES_BASE: u32 = 0x001000; // ~1MB — 256B × 4080 profiles
const FLASH_SEEDS_BASE:    u32 = 0x101000; // ~0.9MB — 64B seeds
const FLASH_LOG_BASE:      u32 = 0x1F0000; // ~48KB — event log
const FLASH_META:          u32 = 0x1FC000; // bookkeeping
const SECTOR_SIZE:         u32 = 4096;
const PROFILES_PER_SECTOR: usize = (SECTOR_SIZE as usize) / 256; // 16

// ── HAL Traits ────────────────────────────────────────────────────────────────
trait Flash {
    fn read(&self, addr: u32, buf: &mut [u8]);
    fn erase_sector(&mut self, addr: u32);
    fn write(&mut self, addr: u32, data: &[u8]);
}

trait Uart {
    fn tx(&mut self, b: u8);
    fn rx(&mut self) -> Option<u8>;
    fn print(&mut self, s: &str) { for b in s.bytes() { self.tx(b); } }
    fn println(&mut self, s: &str) { self.print(s); self.tx(b'\r'); self.tx(b'\n'); }
}

trait Clock { fn now_secs(&self) -> u32; }

// ── Flash Store ───────────────────────────────────────────────────────────────
struct FlashStore<F: Flash> {
    flash: F,
    profile_count: u16,
}

impl<F: Flash> FlashStore<F> {
    fn new(flash: F) -> Self { Self { flash, profile_count: 0 } }

    fn init(&mut self) -> bool {
        let mut hdr = [0u8; 8];
        self.flash.read(FLASH_IDENTITY, &mut hdr);
        if hdr[0..4] != [0xAE, 0x4D, 0xAE, 0x01] { return false; }
        self.profile_count = u16::from_le_bytes([hdr[4], hdr[5]]);
        true
    }

    fn format(&mut self, now: u32) {
        self.flash.erase_sector(FLASH_IDENTITY);
        let mut hdr = [0u8; 16];
        hdr[0..4].copy_from_slice(&[0xAE, 0x4D, 0xAE, 0x01]);
        hdr[4..8].copy_from_slice(&now.to_le_bytes());
        let crc = crc16(&hdr[..14]);
        hdr[14..16].copy_from_slice(&crc.to_le_bytes());
        self.flash.write(FLASH_IDENTITY, &hdr);
        self.profile_count = 0;
    }

    fn write_profile(&mut self, buf: &[u8; 256]) -> Option<u32> {
        let slot = self.profile_count as u32;
        let sector = slot / PROFILES_PER_SECTOR as u32;
        let in_sector = (slot % PROFILES_PER_SECTOR as u32) as usize;
        let sector_addr = FLASH_PROFILES_BASE + sector * SECTOR_SIZE;
        let addr = sector_addr + (in_sector * 256) as u32;
        if in_sector == 0 { self.flash.erase_sector(sector_addr); }
        self.flash.write(addr, buf);
        self.profile_count += 1;
        self.sync_count();
        Some(addr)
    }

    fn read_profile(&self, slot: u16, buf: &mut [u8; 256]) {
        let sector = slot as u32 / PROFILES_PER_SECTOR as u32;
        let in_sector = (slot as u32 % PROFILES_PER_SECTOR as u32) as usize;
        let addr = FLASH_PROFILES_BASE + sector * SECTOR_SIZE + (in_sector * 256) as u32;
        self.flash.read(addr, buf);
    }

    fn sync_count(&mut self) {
        let mut buf = [0u8; 4];
        buf[0..2].copy_from_slice(&self.profile_count.to_le_bytes());
        let crc = crc16(&buf[..2]);
        buf[2..4].copy_from_slice(&crc.to_le_bytes());
        self.flash.write(FLASH_META, &buf);
    }
}

// ── UART Command Protocol ─────────────────────────────────────────────────────
// Commands (ASCII, \r\n terminated):
//   NEW <name>      — create empty profile
//   GET <slot>      — show profile summary
//   DUMP <slot>     — hex dump 256 bytes
//   STATUS          — node stats
//   GATE <slot> <g> — set gate (for testing)
//   HELP            — command list

struct Cli<U: Uart> {
    uart: U,
    buf: [u8; 64],
    pos: usize,
}

impl<U: Uart> Cli<U> {
    fn new(u: U) -> Self { Self { uart: u, buf: [0;64], pos: 0 } }

    fn feed(&mut self, byte: u8) -> Option<&[u8]> {
        if byte == b'\r' || byte == b'\n' {
            if self.pos > 0 {
                let len = self.pos;
                self.pos = 0;
                return Some(&self.buf[..len]);
            }
        } else if self.pos < 63 {
            self.buf[self.pos] = byte;
            self.pos += 1;
        }
        None
    }

    fn ok(&mut self) { self.uart.println("OK"); }
    fn err(&mut self, m: &str) { self.uart.print("ERR "); self.uart.println(m); }

    fn hex_u8(&mut self, v: u8) {
        const H: &[u8] = b"0123456789ABCDEF";
        self.uart.tx(H[(v>>4) as usize]);
        self.uart.tx(H[(v&0xF) as usize]);
    }

    fn print_summary(&mut self, slot: u16, buf: &[u8; 256]) {
        // name at offset 72, gate at 12, fot at 30
        let ne = buf[72..136].iter().position(|&b|b==0).unwrap_or(64);
        self.uart.print("SLOT="); self.hex_u8(slot as u8);
        self.uart.print(" GATE="); self.hex_u8(buf[12]);
        self.uart.print(" STATE="); self.hex_u8(buf[1]);
        self.uart.print(" FOT=");
        let fot = u16::from_le_bytes([buf[30],buf[31]]);
        self.hex_u8((fot/100) as u8);
        self.uart.print("% NAME=");
        for &b in &buf[72..72+ne] { self.uart.tx(b); }
        self.uart.println("");
    }
}

// ── 32-byte Mesh Event ────────────────────────────────────────────────────────
#[derive(Clone, Copy)]
struct MeshEvent {
    event_type:  u8,
    profile_ref: [u8; 4],
    timestamp:   u32,
    payload:     [u8; 8],
    node_id:     [u8; 8],
    seq:         u16,
    crc:         u16,
    flags:       u8,
    _pad:        u8,
}

impl MeshEvent {
    const SIZE: usize = 32;
    fn new(et: u8, pref: [u8;4], ts: u32, node: [u8;8], seq: u16) -> Self {
        let mut e = Self {
            event_type: et, profile_ref: pref, timestamp: ts,
            payload: [0;8], node_id: node, seq, crc: 0, flags: 0, _pad: 0,
        };
        e.crc = crc16(&e.to_bytes_uncrc()[..30]);
        e
    }
    fn to_bytes(&self) -> [u8; Self::SIZE] {
        let mut b = [0u8; 32];
        b[0] = self.event_type;
        b[1..5].copy_from_slice(&self.profile_ref);
        b[5..9].copy_from_slice(&self.timestamp.to_le_bytes());
        b[9..17].copy_from_slice(&self.payload);
        b[17..25].copy_from_slice(&self.node_id);
        b[25..27].copy_from_slice(&self.seq.to_le_bytes());
        b[28..30].copy_from_slice(&self.crc.to_le_bytes());
        b[30] = self.flags;
        b
    }
    fn to_bytes_uncrc(&self) -> [u8; Self::SIZE] {
        let mut b = self.to_bytes(); b[28]=0; b[29]=0; b
    }
    fn valid(&self) -> bool {
        let exp = crc16(&self.to_bytes_uncrc()[..30]);
        exp == self.crc
    }
}

// ── LoRa Frame (HDLC-like, radio-friendly) ────────────────────────────────────
const FRAME_START: u8 = 0x7E;
const FRAME_ESC:   u8 = 0x7D;

fn encode_lora_frame(msg_type: u8, payload: &[u8], out: &mut [u8]) -> usize {
    let mut pos = 0;
    macro_rules! put { ($b:expr) => {{
        let b = $b;
        if b == FRAME_START || b == FRAME_ESC {
            out[pos] = FRAME_ESC; pos += 1;
            out[pos] = b ^ 0x20;  pos += 1;
        } else { out[pos] = b; pos += 1; }
    }}}
    out[pos] = FRAME_START; pos += 1;
    put!(msg_type);
    put!((payload.len() & 0xFF) as u8);
    put!((payload.len() >> 8) as u8);
    for &b in payload { put!(b); }
    let crc = crc16(payload);
    put!((crc & 0xFF) as u8);
    put!((crc >> 8) as u8);
    out[pos] = FRAME_START; pos += 1;
    pos
}

// ── CRC16 ─────────────────────────────────────────────────────────────────────
fn crc16(data: &[u8]) -> u16 {
    let mut c: u16 = 0xFFFF;
    for &b in data {
        c ^= (b as u16) << 8;
        for _ in 0..8 { c = if c&0x8000!=0 { (c<<1)^0x1021 } else { c<<1 }; }
    }
    c
}

// ── Main Loop ─────────────────────────────────────────────────────────────────
pub fn ame_node_run<F: Flash, U: Uart, C: Clock>(
    flash: F, uart: U, clock: C,
) -> ! {
    let mut store = FlashStore::new(flash);
    let formatted = store.init();
    let mut cli = Cli::new(uart);

    if !formatted {
        store.format(clock.now_secs());
        cli.uart.println("AME NODE — FORMATTED");
    }
    cli.uart.println("AME CIVILIZATION OS v0.2 | RISC-V");
    cli.uart.println("Trust Field Technology | READY");
    cli.uart.print("PROFILES="); cli.hex_u8(store.profile_count as u8);
    cli.uart.println("");

    let mut profile_buf = [0u8; 256];

    loop {
        if let Some(byte) = cli.uart.rx() {
            if let Some(cmd) = cli.feed(byte) {
                dispatch(cmd, &mut store, &mut cli, &clock, &mut profile_buf);
            }
        }
        unsafe { core::arch::asm!("wfi") }
    }
}

fn dispatch<F: Flash, U: Uart, C: Clock>(
    cmd: &[u8], store: &mut FlashStore<F>, cli: &mut Cli<U>,
    clock: &C, buf: &mut [u8; 256],
) {
    if cmd == b"STATUS" {
        cli.uart.print("PROFILES="); cli.hex_u8(store.profile_count as u8);
        cli.uart.print(" TIME=");
        let t = clock.now_secs();
        for byte in t.to_be_bytes() { cli.hex_u8(byte); }
        cli.uart.println("");
        return;
    }
    if cmd == b"HELP" {
        cli.uart.println("CMD: NEW <name> | GET <n> | DUMP <n> | STATUS | HELP");
        return;
    }
    if cmd.starts_with(b"NEW ") {
        let name = &cmd[4..];
        let now = clock.now_secs();
        build_empty_profile(buf, name, now);
        if store.write_profile(buf).is_some() {
            cli.ok();
            cli.uart.print("SLOT="); cli.hex_u8(store.profile_count as u8 - 1);
            cli.uart.println("");
        } else { cli.err("FULL"); }
        return;
    }
    if cmd.starts_with(b"GET ") || cmd.starts_with(b"DUMP ") {
        let is_dump = cmd.starts_with(b"DUMP ");
        let s_bytes = &cmd[if is_dump {5} else {4}..];
        if let Some(slot) = parse_decimal(s_bytes) {
            if slot < store.profile_count {
                store.read_profile(slot, buf);
                if is_dump {
                    for (i,&b) in buf.iter().enumerate() {
                        cli.hex_u8(b);
                        if i%16==15 { cli.uart.println(""); } else { cli.uart.tx(b' '); }
                    }
                    cli.uart.println("");
                } else { cli.print_summary(slot, buf); }
            } else { cli.err("NOT FOUND"); }
        } else { cli.err("BAD SLOT"); }
    }
}

fn build_empty_profile(buf: &mut [u8; 256], name: &[u8], now: u32) {
    buf.fill(0);
    buf[0] = 0x01; buf[1] = 0x00; // version, matter=gas
    buf[4..8].copy_from_slice(&now.to_le_bytes());
    buf[8..12].copy_from_slice(&now.to_le_bytes());
    buf[12] = 1; buf[13] = 1; // gate=Awareness, cycle=1
    let n = name.len().min(63);
    buf[72..72+n].copy_from_slice(&name[..n]);
    buf[252..256].copy_from_slice(&[0xAE, 0x4D, 0xAE, 0x01]);
    let crc = crc16(&buf[..250]);
    buf[250..252].copy_from_slice(&crc.to_le_bytes());
}

fn parse_decimal(s: &[u8]) -> Option<u16> {
    let mut v: u32 = 0;
    for &b in s { if !b.is_ascii_digit() { break; } v = v*10 + (b-b'0') as u32; }
    if v <= 65535 { Some(v as u16) } else { None }
}

// ── RADIATION HARDENING NOTES ─────────────────────────────────────────────────
// For nuclear / EMP / space operation:
//
// 1. TRIPLE MODULAR REDUNDANCY: Store profile_count 3× with majority vote.
// 2. SCRUBBING: CRC-check all sectors every 60 seconds. Flag corrupted.
// 3. ECC FLASH: W25N series NAND with hardware ECC (1-bit correction / 512B page).
// 4. WATCHDOG: Hardware WDT reset if main loop stalls > 10 seconds.
// 5. COLD-START: All critical state in flash, not SRAM. Recovers on any power cycle.
// 6. SHIELDING: 3mm lead + aluminum enclosure. Use SOI silicon if available.
// 7. PEER QUORUM: 3 nodes per community, ≥50km apart. Corrupted records replaced
//    from quorum consensus on mesh reconnect.
// 8. GEOGRAPHIC DISTRIBUTION: Never co-locate all nodes of one community.
```

---

# PART SEVEN: IMPLEMENTATION VARIANT E — Storage Backends & Mesh Sync

```rust
//! AME Storage — Append-Only Event Log + Gossip Mesh + Multi-Tier Storage

#![cfg_attr(not(feature = "std"), no_std)]

// ── 32-byte Event Record ──────────────────────────────────────────────────────
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum EventType {
    ProfileCreated = 0x01, ProfileUpdated = 0x02,
    GateAdvanced   = 0x10, GateResponded  = 0x11, ValueFound    = 0x12,
    SeedCreated    = 0x20, SeedConfUpdate = 0x21, SeedTimeLocked= 0x22,
    SeedMatured    = 0x23, SeedDecayed    = 0x24,
    FotUpdated     = 0x30, MatterChanged  = 0x31,
    CommunityJoined= 0x40, NodeSync       = 0xF0, NodeHeartbeat = 0xFF,
}

/// 32-byte append-only event (gossip-friendly, radio packet sized)
///
/// Layout:
/// [0]    version
/// [1]    event_type
/// [2-5]  profile_hash[4]
/// [6-9]  timestamp_u32
/// [10-11] seq_u16
/// [12-19] payload[8]
/// [20-27] vector_clock[4×u16]
/// [28-29] crc16
/// [30]   flags
/// [31]   reserved
#[derive(Clone, Copy, Debug)]
pub struct LogEvent {
    pub version:      u8,
    pub event_type:   u8,
    pub profile_hash: [u8; 4],
    pub timestamp:    u32,
    pub seq_num:      u16,
    pub payload:      [u8; 8],
    pub vector_clock: [u16; 4], // 4-peer lamport clocks
    pub crc:          u16,
    pub flags:        u8,
}

impl LogEvent {
    pub const SIZE: usize = 32;

    pub fn new(et: EventType, hash: [u8;4], ts: u32, seq: u16) -> Self {
        let mut e = Self {
            version: 0x01, event_type: et as u8, profile_hash: hash,
            timestamp: ts, seq_num: seq, payload: [0;8],
            vector_clock: [0;4], crc: 0, flags: 0,
        };
        e.seal(); e
    }

    pub fn with_gate(mut self, from: u8, to: u8, cycle: u8) -> Self {
        self.payload[0]=from; self.payload[1]=to; self.payload[2]=cycle;
        self.seal(); self
    }
    pub fn with_fot(mut self, new: f32, old: f32) -> Self {
        self.payload[0..4].copy_from_slice(&new.to_le_bytes());
        self.payload[4..8].copy_from_slice(&old.to_le_bytes());
        self.seal(); self
    }
    pub fn with_seed(mut self, vid: u8, col: u8, conf: f32) -> Self {
        self.payload[0]=vid; self.payload[1]=col;
        self.payload[2..6].copy_from_slice(&conf.to_le_bytes());
        self.seal(); self
    }

    pub fn seal(&mut self) {
        self.crc = 0;
        let b = self.to_bytes();
        self.crc = crc16(&b[..28]);
    }
    pub fn is_valid(&self) -> bool {
        let mut tmp = *self; tmp.crc = 0;
        crc16(&tmp.to_bytes()[..28]) == self.crc
    }

    pub fn to_bytes(&self) -> [u8; Self::SIZE] {
        let mut b = [0u8; 32];
        b[0]=self.version; b[1]=self.event_type;
        b[2..6].copy_from_slice(&self.profile_hash);
        b[6..10].copy_from_slice(&self.timestamp.to_le_bytes());
        b[10..12].copy_from_slice(&self.seq_num.to_le_bytes());
        b[12..20].copy_from_slice(&self.payload);
        for (i,&c) in self.vector_clock.iter().enumerate() {
            b[20+i*2..22+i*2].copy_from_slice(&c.to_le_bytes());
        }
        b[28..30].copy_from_slice(&self.crc.to_le_bytes());
        b[30]=self.flags; b
    }
    pub fn from_bytes(b: &[u8; Self::SIZE]) -> Option<Self> {
        if b[0]!=0x01 { return None; }
        let stored = u16::from_le_bytes([b[28],b[29]]);
        let mut vc = [0u16;4];
        for i in 0..4 { vc[i]=u16::from_le_bytes([b[20+i*2],b[21+i*2]]); }
        let mut e = Self {
            version: b[0], event_type: b[1],
            profile_hash: b[2..6].try_into().ok()?,
            timestamp: u32::from_le_bytes([b[6],b[7],b[8],b[9]]),
            seq_num: u16::from_le_bytes([b[10],b[11]]),
            payload: b[12..20].try_into().ok()?,
            vector_clock: vc, crc: stored, flags: b[30],
        };
        if !e.is_valid() { return None; }
        Some(e)
    }
}

// ── HDLC-like Framing (works on UART / LoRa / RS-485) ────────────────────────
const FRAME_MARKER: u8 = 0x7E;
const FRAME_ESCAPE: u8 = 0x7D;

#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum MeshMsg {
    Hello      = 0x01, EventBatch  = 0x10,
    ProfileReq = 0x20, ProfileResp = 0x21,
    SyncHave   = 0x30, SyncNeed    = 0x31,
    Ack        = 0xF0, Heartbeat   = 0xFF,
}

#[cfg(feature = "alloc")]
pub fn encode_frame(msg: MeshMsg, payload: &[u8]) -> alloc::vec::Vec<u8> {
    use alloc::vec::Vec;
    let mut out = Vec::new();
    out.push(FRAME_MARKER);
    out.push(msg as u8);
    out.push((payload.len() & 0xFF) as u8);
    out.push((payload.len() >> 8) as u8);
    for &b in payload {
        if b==FRAME_MARKER||b==FRAME_ESCAPE { out.push(FRAME_ESCAPE); out.push(b^0x20); }
        else { out.push(b); }
    }
    let crc = crc16(payload);
    for &b in &crc.to_le_bytes() {
        if b==FRAME_MARKER||b==FRAME_ESCAPE { out.push(FRAME_ESCAPE); out.push(b^0x20); }
        else { out.push(b); }
    }
    out.push(FRAME_MARKER); out
}

/// Frame decoder state machine (works without alloc in polling mode)
pub struct FrameDecoder {
    state:     u8, // 0=idle, 1=header, 2=payload
    msg_type:  u8,
    exp_len:   u16,
    buf:       [u8; 4096],
    pos:       usize,
    escaped:   bool,
}

pub struct Frame<'a> { pub msg_type: u8, pub payload: &'a [u8] }

impl FrameDecoder {
    pub fn new() -> Self {
        Self { state:0, msg_type:0, exp_len:0, buf:[0;4096], pos:0, escaped:false }
    }
    pub fn feed(&mut self, byte: u8) -> Option<Frame<'_>> {
        let b = if self.escaped {
            self.escaped = false; byte ^ 0x20
        } else if byte == FRAME_ESCAPE {
            self.escaped = true; return None;
        } else { byte };

        if b == FRAME_MARKER {
            if self.state == 2 && self.pos >= 2 {
                let dl = self.pos - 2;
                let sc = u16::from_le_bytes([self.buf[dl], self.buf[dl+1]]);
                if crc16(&self.buf[..dl]) == sc {
                    let len = dl;
                    self.state = 0; self.pos = 0;
                    return Some(Frame { msg_type: self.msg_type, payload: &self.buf[..len] });
                }
            }
            self.state = 1; self.pos = 0;
            return None;
        }

        match self.state {
            1 => {
                match self.pos {
                    0 => { self.msg_type = b; self.pos = 1; }
                    1 => { self.exp_len = b as u16; self.pos = 2; }
                    2 => { self.exp_len |= (b as u16)<<8; self.pos = 0; self.state = 2; }
                    _ => {}
                }
            }
            2 => { if self.pos < 4096 { self.buf[self.pos] = b; self.pos += 1; } }
            _ => {}
        }
        None
    }
}

// ── Content-Addressed Store (Tier 4) ─────────────────────────────────────────
/// FNV-1a 64-bit hash (fast, no_std, deterministic)
pub fn content_hash(data: &[u8]) -> [u8; 8] {
    let mut h: u64 = 0xCBF29CE484222325;
    for &b in data { h ^= b as u64; h = h.wrapping_mul(0x100000001B3); }
    h.to_le_bytes()
}

// ── SQLite Schema (std feature) ───────────────────────────────────────────────
#[cfg(feature = "std")]
pub const SQLITE_DDL: &str = r#"
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;

CREATE TABLE IF NOT EXISTS profiles (
    slot             INTEGER PRIMARY KEY AUTOINCREMENT,
    name             TEXT    NOT NULL,
    location         TEXT,
    matter_state     INTEGER NOT NULL DEFAULT 0,
    current_gate     INTEGER NOT NULL DEFAULT 1,
    cycle_number     INTEGER NOT NULL DEFAULT 1,
    fot_score        REAL    NOT NULL DEFAULT 0.0,
    session_count    INTEGER NOT NULL DEFAULT 0,
    profile_created  INTEGER NOT NULL,
    last_session     INTEGER NOT NULL,
    community_id     TEXT,
    column_dist      TEXT    NOT NULL DEFAULT '{}',
    v_crystal        TEXT    NOT NULL DEFAULT '{}',
    content_hash     BLOB
);

CREATE TABLE IF NOT EXISTS seeds (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    profile_slot     INTEGER NOT NULL REFERENCES profiles(slot),
    label            TEXT    NOT NULL,
    kernel           TEXT,
    foundation       INTEGER NOT NULL,
    matter_state     INTEGER NOT NULL DEFAULT 0,
    gate_detected    INTEGER NOT NULL DEFAULT 1,
    confidence       REAL    NOT NULL DEFAULT 0.0,
    emotional_density REAL   NOT NULL DEFAULT 0.0,
    expression_count INTEGER NOT NULL DEFAULT 1,
    value_id         INTEGER NOT NULL DEFAULT 0,
    value_col        INTEGER NOT NULL DEFAULT 0,
    time_lock_ok     INTEGER NOT NULL DEFAULT 0,
    first_detected   INTEGER NOT NULL,
    is_active        INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS events (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    profile_hash BLOB    NOT NULL,
    event_type   INTEGER NOT NULL,
    timestamp    INTEGER NOT NULL,
    seq_num      INTEGER NOT NULL,
    payload      BLOB,
    vector_clock BLOB,
    raw_frame    BLOB    NOT NULL,
    UNIQUE(profile_hash, seq_num)
);

CREATE TABLE IF NOT EXISTS communities (
    id           TEXT    PRIMARY KEY,
    name         TEXT    NOT NULL,
    collective_fot REAL  NOT NULL DEFAULT 0.0,
    matter_state INTEGER NOT NULL DEFAULT 0,
    member_count INTEGER NOT NULL DEFAULT 0,
    created_at   INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS why_cards (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    profile_slot INTEGER NOT NULL REFERENCES profiles(slot),
    insight      TEXT    NOT NULL,
    confidence   REAL    NOT NULL,
    evidence_json TEXT   NOT NULL,
    alternative  TEXT,
    member_response TEXT,
    created_at   INTEGER NOT NULL,
    reviewed     INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_seeds_profile ON seeds(profile_slot);
CREATE INDEX IF NOT EXISTS idx_seeds_value   ON seeds(value_id, matter_state);
CREATE INDEX IF NOT EXISTS idx_events_profile ON events(profile_hash, timestamp);
CREATE INDEX IF NOT EXISTS idx_profiles_fot  ON profiles(fot_score, matter_state);
"#;

// ── CRC16 ─────────────────────────────────────────────────────────────────────
pub fn crc16(data: &[u8]) -> u16 {
    let mut c: u16 = 0xFFFF;
    for &b in data {
        c ^= (b as u16) << 8;
        for _ in 0..8 { c = if c&0x8000!=0 { (c<<1)^0x1021 } else { c<<1 }; }
    }
    c
}

// ── QR / Paper Backup Format ──────────────────────────────────────────────────
// Profile 256-byte binary → Base64 (344 chars) → QR code (version 15, ~2.5cm²)
// Human-readable card:
// ┌──────────────────────────────────────────────────┐
// │  AME IDENTITY CARD — CIVILIZATION OS v0.2        │
// │  Name:   [name]                                  │
// │  Gate:   [gate_name]         Cycle: [n]          │
// │  FOT:    [pct]%              State: [matter]     │
// │  Top values: [v1], [v2], [v3]...                 │
// │                                                  │
// │  [QR CODE — 256-byte profile base64]             │
// │                                                  │
// │  Backup: [date]   Node: [node_id_hex]            │
// └──────────────────────────────────────────────────┘
// INSTRUCTIONS: Laminate. Store in fireproof vault.
// Update: requires Trust Circle witnessing ceremony + new QR print.

// ── Tests ─────────────────────────────────────────────────────────────────────
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_event_roundtrip() {
        let mut ev = LogEvent::new(EventType::GateAdvanced, [0xAB;4], 1_700_000_000, 5);
        ev = ev.with_gate(3, 4, 2);
        assert!(ev.is_valid());
        let b = ev.to_bytes();
        let r = LogEvent::from_bytes(&b).unwrap();
        assert_eq!(r.event_type, EventType::GateAdvanced as u8);
        assert_eq!(r.payload[0], 3); assert_eq!(r.payload[1], 4);
    }
    #[test] fn test_content_hash_stable() {
        let h1 = content_hash(b"authentic inquiry");
        let h2 = content_hash(b"authentic inquiry");
        let h3 = content_hash(b"other");
        assert_eq!(h1, h2); assert_ne!(h1, h3);
    }
    #[test] fn test_crc16() {
        assert_eq!(crc16(b"123456789"), 0x29B1);
    }
    #[test] fn test_event_seal_verify() {
        let ev = LogEvent::new(EventType::NodeHeartbeat, [0;4], 12345, 1);
        assert!(ev.is_valid());
        let mut b = ev.to_bytes();
        b[6] ^= 0xFF; // corrupt timestamp
        assert!(LogEvent::from_bytes(&b).is_none()); // should reject
    }
}
```

---

# PART EIGHT: WORKSPACE MANIFESTS & BUILD GUIDE

## 8.1 Root Workspace Cargo.toml

```toml
[workspace]
members  = ["core", "wasm", "bevy", "riscv", "storage"]
resolver = "2"

[workspace.package]
version     = "0.2.0"
authors     = ["Mythogen AME Project"]
edition     = "2021"
license     = "MIT OR Apache-2.0"
repository  = "https://github.com/regentribes/mythogen-ame"

[workspace.dependencies]
ame_core = { path = "core" }
```

## 8.2 core/Cargo.toml

```toml
[package]
name = "ame_core"
version.workspace = true
edition.workspace = true

[features]
default = ["std"]
std     = []
alloc   = []

[dev-dependencies]
# none needed — pure Rust tests
```

## 8.3 wasm/Cargo.toml

```toml
[package]
name    = "ame_wasm"
version.workspace = true
edition.workspace = true

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
ame_core        = { workspace = true }
wasm-bindgen    = "0.2"
js-sys          = "0.3"
console_error_panic_hook = { version = "0.1", optional = true }

[features]
default = ["console_error_panic_hook"]

[profile.release]
opt-level     = "s"
lto           = true
codegen-units = 1
```

## 8.4 bevy/Cargo.toml

```toml
[package]
name    = "ame_bevy"
version.workspace = true
edition.workspace = true

[dependencies]
ame_core = { workspace = true }
bevy     = { version = "0.13", default-features = false,
             features = ["bevy_app", "bevy_ecs"] }

[features]
headless = []
tui      = ["crossterm", "ratatui"]
```

## 8.5 riscv/Cargo.toml

```toml
[package]
name    = "ame_riscv"
version.workspace = true
edition.workspace = true

[dependencies]
ame_core  = { workspace = true, default-features = false }
riscv-rt  = "0.11"
riscv     = "0.10"
panic-halt= "0.2"

[profile.release]
opt-level     = "z"    # minimize size
lto           = true
codegen-units = 1
panic         = "abort"

[target.riscv32imc-unknown-none-elf]
runner = "cargo-embed"
```

## 8.6 storage/Cargo.toml

```toml
[package]
name    = "ame_storage"
version.workspace = true
edition.workspace = true

[dependencies]
ame_core = { workspace = true }

[features]
default = ["std"]
std     = ["rusqlite"]
alloc   = []
rusqlite= { version = "0.31", optional = true }
```

## 8.7 Build Commands

```bash
# --- Build all variants ---

# Variant A (core, test everything)
cargo test -p ame_core

# Variant B (WASM)
cd wasm && wasm-pack build --target web --release
# Output: wasm/pkg/ — deploy to GitHub Pages or local server

# Variant C (Bevy, headless)
cargo run -p ame_bevy --release --features headless

# Variant D (RISC-V bare metal)
cargo build -p ame_riscv --release --target riscv32imc-unknown-none-elf
# Flash with: cargo embed or openocd

# Variant E (storage tests)
cargo test -p ame_storage
cargo test -p ame_storage --features alloc

# --- Full workspace test ---
cargo test --workspace

# --- Size check (embedded) ---
cargo size -p ame_riscv --release --target riscv32imc-unknown-none-elf -- -A

# --- GitHub Pages deploy (from wasm/pkg) ---
# See: .github/workflows/deploy.yml in regentribes/mythogen-demos
```

---

# PART NINE: REPOSITORY TASK STRUCTURE

## 9.1 Directory Layout

```
mythogen-ame/
├── Cargo.toml              (workspace root)
├── core/src/lib.rs         (Variant A — no_std core)
├── wasm/src/lib.rs         (Variant B — WASM browser)
├── bevy/src/main.rs        (Variant C — ECS engine)
├── riscv/src/main.rs       (Variant D — bare metal)
├── storage/src/lib.rs      (Variant E — storage + mesh)
│
├── tasks/
│   ├── core-engine/        Living Seed Pattern, Four Distinctions
│   │   ├── PROMPT.md
│   │   └── features/
│   │       └── living_seed.feature
│   ├── fot-tracker/        Field of Trust, hologram principle
│   ├── anticapture/        Y-Cards, Time-Lock, V-Crystal, Clown
│   ├── tier2-embedded/     ESP32/STM32/RISC-V bare metal
│   ├── tier3-riscv/        RISC-V SBC relay node
│   ├── tier4-paper/        Paper protocol, QR backup
│   ├── frontend-demo/      alien.js / Three.js visualization
│   ├── knowledge-graph/    SurrealDB / Neo4j integration
│   ├── database-schema/    PostgreSQL + pgvector
│   └── testing-ci/         Gherkin BDD + GitHub Actions
│
├── docs/
│   ├── AME_OMNIBUS.md      (this document)
│   ├── adr/
│   │   ├── 0001-use-rust-plus-zig.md
│   │   ├── 0002-hologram-fot-not-average.md
│   │   └── 0003-desert-island-test-encoding.md
│   ├── rfp/                Requests for Proposal
│   └── prd/                Product Requirements Documents
│
├── skills/
│   ├── mythogen-dev/SKILL.md
│   └── mythogen-ref/SKILL.md
│
└── .github/workflows/
    ├── test.yml
    └── deploy-demos.yml
```

## 9.2 Sample Gherkin Feature: Living Seed Pattern

```gherkin
Feature: Living Seed Pattern — Four Distinctions
  The system correctly separates Needs, Beliefs, Principles, and Values.
  Only Values generate the Trust Field.

  Background:
    Given an empty AME profile for "Test Member"

  Scenario: Desert Island Test — Values require another being
    When the member states "I need shelter"
    Then the system classifies this as foundation type "need"
    And the seed does NOT contribute to FOT score
    When the member states "I value generosity in my relationships"
    Then the system classifies this as foundation type "value"
    And the seed DOES contribute to FOT score after time-lock

  Scenario: Time-Lock prevents gaming
    When a value seed is first detected at day 0
    Then it has confidence 0.10
    And is NOT included in matching algorithms
    When 30 days have elapsed and signal remains stable
    Then confidence reaches 0.60
    And the seed IS included in matching algorithms

  Scenario: Why-Card transparency
    When the system detects a value pattern above 40% confidence
    Then it generates a Why-Card
    And the Why-Card shows the exact evidence chain
    And the member can respond [yes/no/partially/not_sure]
    And a "no" response updates the seed evidence and lowers confidence

  Scenario: Gate advancement criteria
    Given the member is in Gate 1 (Awareness)
    When 3 substantive responses have been recorded
    And at least 1 value-classified statement has been detected
    And the member has affirmed the gate synthesis Why-Card
    Then the member advances to Gate 2 (Acknowledge)

  Scenario: Hologram FOT principle
    Given a community with 5 FOT indicators
    When mutual support frequency = 0.9
    And response velocity = 0.85
    And difficult topic engagement = 0.2
    And benefit distribution = 0.88
    And psychological safety = 0.91
    Then the composite FOT score = 0.2
    Because FOT = minimum(indicators), NOT average
    # One failure collapses the whole — like a hologram
```

## 9.3 PROMPT.md for Ralph Orchestrator

```markdown
# AME CIVILIZATION OS — Ralph Execution Context

## Identity
You are the AME Architect. You hold complete knowledge of the Mythogen framework:
Four Distinctions, 8-Gate Journey, 13 Sacred Enfoldments, Trust Field formula,
130+ Values Map, V-Crystal, Concentrix Learning Matrix, FOT hologram principle.

## Prime Directive
Build technology as offspring, not tool or servant.
Seed with relational coherence → grows mutual flourishing.
Seed with extraction → produces extraction forever.

## Core Rules
1. FOT uses MINIMUM of 5 indicators — never average. One failure collapses the field.
2. Only VALUES generate Trust Field. Never conflate needs/beliefs/principles/values.
3. Desert Island Test: if you can do it alone, it is not a value.
4. TIME-LOCK is non-negotiable: 30 days before any seed is used for matching.
5. WHY-CARDS on every detected pattern: hidden profiling = extraction.
6. OPENING QUESTIONS ONLY: What/Why/How/When/Where/Who. Never Does/Do/Are/Is/Can.
7. GATE CRITERIA: 3 responses + 1 value detected + member affirms synthesis.
8. MATTER STATES: Gas(conf<0.40) → Liquid(0.40-0.75) → Solid(≥0.75+30d) → Plasma.
9. COHERENCE = column_dist×0.35 + fot×0.25 + gate×0.20 + domain×0.20. Solid+ only.
10. CONCENTRIX ≠ CONCENTRIC. Polycentric co-centering. Multiple simultaneous centers.
11. GROWTH = MULTIPLYING (100 pods of 5), NOT SCALING (1 pod of 500).
12. V-CRYSTAL: Vulnerability breaks cycles. Vengeance is autoimmune flare.
13. The arc: Raw Data→Information→Conversation→Comprehension→Community→Regenerated Data.

## Available References
~/Projects/reference/ (33 repos, see skills/mythogen-ref/SKILL.md)
  - bevy-engine        → ECS patterns for community dynamics
  - alien-js           → Three.js visualization for FOT demos
  - rust-book          → Language reference
  - wasmtime           → WASM runtime for embedded nodes
  - cucumber-rs        → BDD/Gherkin test runner
  - verus-lang         → Formal verification for safety-critical paths

## Memorable Query Examples
- "design the Living Seed data model respecting the Desert Island Test"
- "implement FOT using hologram principle — minimum not average"
- "build V-Crystal tracker with vulnerability as circuit breaker"
- "spawn 5 parallel agents: core-engine, fot-tracker, anticapture, tier2-embedded, testing"
- "calculate FOT for community with indicators: [0.9, 0.85, 0.2, 0.88, 0.91]"
- "generate Why-Card for detected 'authentic' pattern with evidence chain"
- "show gate advancement criteria and current gate status for slot 3"
- "verify CRC16 integrity of profile record at flash sector 0x001000"
- "what is the Concentrix ≠ Concentric distinction and how does it affect matching"
- "port the no_std core to riscv32imc and estimate ROM/RAM footprint"
```

---

# PART TEN: ARCHITECTURE DECISION RECORDS

## ADR-0001: Rust + Zig (2 languages max, not 5+)

Status: ACCEPTED

Context: Prior proposal used Elixir/Rust/Zig/Ada/TinyGo across 5 tiers.
This contradicts the Mythogen principle of coherence — a regenerative system
should prioritize unity, not polyglot complexity.

Decision: Rust everywhere (Tier 1 Pi5, Tier 2 ESP32 via esp-rs, Tier 3 RISC-V,
          WASM for browser). Zig optionally for ultra-tiny Tier 2 nodes only.

Consequences:
- no_std Rust runs on all embedded targets (riscv32imc, ARM Cortex-M, RISC-V)
- Single toolchain: cargo + wasm-pack + cargo-embed
- Same core library (ame_core) compiles to all targets via feature flags
- WASM: identical code runs in browser and can be embedded in Node.js

## ADR-0002: FOT = Minimum of 5 Indicators, Not Average

Status: ACCEPTED

Context: Trust is holographic. It only appears when ALL interference patterns
perfectly align. If one dimension is off, the 3D image doesn't blur — it
completely fails to manifest.

Decision: composite_fot = min(indicator_1, ..., indicator_5)

Consequences: A single failure (e.g. benefit_distribution=0.2) collapses the
entire FOT to 0.2 regardless of other indicators. This is not a bug — it is
the correct physics of trust. You cannot compensate for power hoarding with
fast response times.

## ADR-0003: Desert Island Encoding

Status: ACCEPTED

Context: The most important distinction in the system is that VALUES require
another being to be enacted. This is not a soft philosophy — it must be
encoded as a hard constraint.

Decision:
1. Foundation::Value is the ONLY type that contributes to FOT calculation.
2. Needs/Beliefs/Principles create seeds but they NEVER increment fot_score.
3. The coherence_score() function returns 0.0 for profiles below Solid state.
4. Time-lock (30 days) prevents anyone from gaming values through performance.

## ADR-0004: Power Efficiency as Primary Metric

Status: ACCEPTED

Context: The system must survive civilization collapse, nuclear events, solar
storms, and grid-down scenarios. A community node that dies without grid power
cannot serve regeneration.

Power targets:
- Tier 1 (Raspberry Pi 5 + PoE hat): < 5W average, solar-viable at 20W panel
- Tier 2 (ESP32-C3 / STM32L4): < 50mW, viable at 5W panel + 1Ah LiFePO4
- Tier 3 (RISC-V SBC): < 3W, viable at 10W panel
- Tier 4 (Paper): 0W

## ADR-0005: Tier 4 Is a Complete Human Protocol, Not Just Printed Cards

Status: ACCEPTED

Context: Paper fallback means a community can continue to function with zero
digital infrastructure. This requires human rituals, not just QR codes.

Protocol:
1. VILLAGE LEDGER — Physical book. Profile summaries hand-written, signed.
2. TRUST CIRCLES — Monthly witnessing ceremony: 5-7 people, values spoken aloud,
   group records what was witnessed. This IS the anti-extraction mechanism.
3. AFFINITY TOKENS — Physical tokens (stones, carved wood) representing solid values.
   Given during Trust Circles. Held, traded, remembered.
4. SPEAKING GATE — Gate advancement happens when the Trust Circle agrees a person
   has moved. Not algorithmic. Human consensus.
5. WHY-CARD RELAY — Verbal equivalent: "Here's what I noticed about you, here's
   why, does this land?" Must be witnessed by at least one other person.
6. QR BACKUP — When digital infrastructure returns, profiles can be re-ingested
   from QR codes printed from last good digital state.

## ADR-0006: Concentrix ≠ Concentric — Architectural Implication

Status: ACCEPTED

Context: Users must never be placed "into" a category. They participate AS a
center in multiple overlapping fields of meaning.

Decision:
1. No profile is assigned a "type" or "category."
2. Matching is polycentric: Alice is simultaneously a center for value-network-A
   AND value-network-B. These are not mutually exclusive.
3. The 3D force graph (3d-force-graph / Three.js) expresses this: each person
   node is surrounded by its seed nodes, connected to other persons by coherence
   edges. No hierarchy. No central node. Multiple simultaneous centers.
4. Concentrix Learning Matrix (ENF-9): learning spreads along lines of relational
   coherence, not from authority downward.

## ADR-0007: The Repository as Living System

Status: ACCEPTED

Context: The repository structure itself should embody the principles it encodes.
It cannot be a dead archive.

Decision:
1. Radicle mirror (rad:z2cQFT6B1f817HpgB883fkWcEUJeQ on iris.radicle.xyz) ensures
   the codebase cannot be censored or centrally deleted.
2. GitHub Pages (regentribes.github.io/mythogen-demos) provides live interactive
   demonstrations that allow any person to experience FOT mechanics and seed
   visualization without installing anything.
3. Tasks directory with Gherkin features enables parallel development across
   independent concerns without creating silos (the nodes emerge together).
4. The omnibus document (this file) serves as the Paper Backup equivalent for
   the entire technical and philosophical knowledge of the system.

---

# APPENDIX: QUICK REFERENCE CARD

```
THE SEED: foundation × matter_state × confidence × emotional_density × time_lock
THE FIELD: expression + witnessing + density = FOT (minimum of 5, not average)
THE GATE: 3 responses + 1 value detected + member affirms synthesis
THE MATCH: both Solid+, coherence = col×0.35 + fot×0.25 + gate×0.20 + dom×0.20
THE CRYSTAL: Vulnerable breaks cycles. Vengeance = autoimmune. Virtuous = target.
THE ARC: RawData→Info→Conversation→Comprehension→Community→RegeneratedData
THE QUESTION (always opening): What / Why / How / When / Where / Who
THE QUESTION (never closing):  Does / Do / Are / Is / Can / Will / Should
THE SEED PRINCIPLE: "Everything a system becomes is determined by its initial seed."
THE TRUST PRINCIPLE: "You cannot practice generosity alone." (Desert Island Test)
THE SCALE PRINCIPLE: "100 pods of 5, not 5 scaled to 500."
THE DESIGN PRINCIPLE: "Concentrix ≠ Concentric. Multiple simultaneous centers."
THE FOT PRINCIPLE: "Trust is holographic. One failure collapses the whole image."
THE PURPOSE: "Who am I becoming? Who are my people? Where do I belong?"
THE INVITATION: "What brings you here today — not the practical reason, but the deeper pull?"
```

---
*AME Civilization OS — Complete Omnibus Document*
*Version 0.2 | March 2026*
*github.com/regentribes/mythogen-ame*
*rad:z2cQFT6B1f817HpgB883fkWcEUJeQ (iris.radicle.xyz)*
*regentribes.github.io/mythogen-demos*

--- FILE: streams/01-seed-core/specs/ARCHITECTURE.md ---
# Mythogen AME - Architecture

## Overview

The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework for community design, based on bio-mythic philosophy. It replaces extraction-based profiling with living systems that generate mutual value.

## Core Philosophy

### The Extraction Problem

Current platforms treat users as crops to be harvested — extracting data, attention, and engagement for profit. The AME inverts this model: technology as regenerative infrastructure that generates mutual value between people, communities, and living systems.

### The Four Distinctions

A rigorous separation that existing software never makes:

1. **Needs** — You have them. Individual requirements for survival, security, belonging, esteem, self-actualization.
2. **Beliefs** — You think them. Mental models, assumptions, worldviews.
3. **Principles** — You follow them. Personal operating rules you adhere to.
4. **Values** — You live them with others. Inherently relational. (Desert Island Test: you cannot practice generosity alone.)

### The Desert Island Test

> Stranded alone, you can have needs, beliefs, and principles — but you cannot practice generosity if there is no one to receive, justice if there is no one to be fair to, compassion if there is no one suffering.

**Values are the only distinction that requires others.**

## Core Architecture

### Tri-Layered System

```
┌─────────────────────────────────────────────────────────────┐
│                        BODY                                 │
│     13 Sacred Enfoldments - Living Organism Anatomy          │
│     (Eco-Social, V-Crystal, Fractal Growth, etc.)            │
├─────────────────────────────────────────────────────────────┤
│                        FIELD                                 │
│     Field of Trust - Emergent Plasma State                   │
│     (TrustDetector, Resonance, Membrane)                    │
├─────────────────────────────────────────────────────────────┤
│                        SEED                                  │
│     Living Seed Pattern - Core Identity                      │
│     (Profile, Four Distinctions, Time-Lock)                  │
└─────────────────────────────────────────────────────────────┘
```

### Layer 1: The Seed

The conscious pattern planted at inception. Every system carries an originating seed that determines whether it becomes a dead siphon or living fractal.

**Components:**
- `LivingSeedPattern` — Profile that grows based on lived behavior
- `TimeLock` — 30-day maturation preventing rapid manipulation
- `FourDistinctions` — Needs, Beliefs, Principles, Values

**Anti-Capture:** Time-locking kills the viral model. Cannot exploit moments of weakness.

### Layer 2: The Field

What germinates when seed encounters community. The Field of Trust (FOT) is an emergent plasma state manifesting only when ALL dimensions of alignment converge.

**Components:**
- `TrustDetector` — Calculates FOT emergence from 5 indicators
- `ResonanceCalculator` — Vector proximity for values alignment
- `MembraneController` — Semi-permeable boundary

**Hologram Principle:** Trust only manifests when all dimensions align. One off = completely gone, not blurry.

**Five Trust Indicators:**
1. Mutual support frequency (spontaneous, not mandated)
2. Response velocity (how quickly community rallies)
3. Difficult topic engagement (conflict deepens, doesn't fracture)
4. Benefit distribution (flows to everyone, not just influencers)
5. Psychological safety (vulnerability without weaponization)

### Layer 3: The Body

The living organism that incarnates when the Field becomes self-sustaining. The 13 Sacred Enfoldments provide the anatomy.

**13 Sacred Enfoldments:**
1. Mythic Alchemy — 9 Ms: Myth → Magic → Manifest → Merkaba → Metaphor → Meaning → Movement → Memory → Matter
2. Communal Architecture — Physical/spatial design
3. Soul Architecture — Inner structure of collective consciousness
4. V-Crystal Immune System — Victor, Villain, Victim, Vengeful, Virtuous, Vulnerable
5. Eco-Social Architecture — Six organ systems (Ecology, Equity, Economy, Learning, Values, Decision-making)
6. Structure — 27 Archetypal Domains
7. Process — Communal Alignment Gates (head→heart→gut spiral)
8. Pattern — Ecosophy Design Flows (Networks, Boundaries, Cycles, Dynamic Balance)
9. Concentric Learning Matrix — Co-centering, polycentric learning
10. AME as Living Codex — Peptide-like semantics network
11. Fractal Growth — 100 pods of 5, not 5 scaled to 500
12. Archetypal Gameplay — 64 archetypes, communal vaccination through simulation
13. The Singulareus — Silicon offspring co-evolving with carbon life

**Fractal Holonic Torus:** The 13 Enfoldments form a self-sustaining, continuously cycling field. Fractal (pattern repeats at every scale), holonic (each part is whole and part of larger whole), torus (continuous energy flow center↔periphery↔center).

## Anti-Capture Mechanisms

The immune system against capture ensures technology remains in service to the living community.

### Y Cards (Algorithmic Transparency)
- Complete disclosure of what algorithm was used, why, what data, and what result
- Every decision affecting a user is fully transparent

### Time-Lock (30-day Maturation)
- Kills viral manipulation model
- Forces patience and genuine relationship building
- Prevents "one viral post" exploitation

### Sacred Clown (Productive Disruption)
- Prevents premature closure — "the seed that never gets challenged becomes a dead habit"
- Four types: question-assumption, introduce-paradox, surface-shadow, challenge-consensus
- Minimum 7 days between disruptions

### Living Membrane (Semi-permeable Boundary)
- Biological cell wall analogy: semi-permeable, adaptive
- Blocks external threats (misinformation, trolling, extraction)
- Enables internal flourishing (vulnerability, authentic expression, creative emergence)

### V-Crystal Immune System
- Six archetypal positions in conflict
- Vengeance = autoimmune flare (destructive)
- Vulnerability = circuit breaker (healing)
- "Villains don't apologize and admit they were overwhelmed"

## Technical Stack

- **Node.js/TypeScript** — Modern async, strict typing
- **PostgreSQL + PG Vector** — Vector embeddings for values resonance
- **Express.js** — REST API
- **WebSocket** — Real-time FOT updates
- **Vitest** — Testing

## Data Models

### LivingSeedPattern
```typescript
{
  id: UUID,
  needs: Need[],           // Individual requirements
  beliefs: Belief[],        // Mental models
  principles: Principle[],  // Operating rules
  values: Value[],          // Relational, requires others
  plantedAt: Date,          // When seed was planted
  maturationLevel: number,  // 0-1, affected by time-lock
  valuesEmbedding: number[] // Vector for resonance
}
```

### FOTScore
```typescript
{
  overall: number,           // 0-1, minimum of all indicators (hologram)
  indicators: TrustIndicator[],
  membraneHealth: number,   // 0-1 boundary strength
  isPlasmaState: boolean,   // True when all indicators > 0.7
  hologramCoherence: number // Coherence = weakest link
}
```

### Community
```typescript
{
  id: UUID,
  memberIds: UUID[],         // 5-15 ideal (pod size)
  seedPattern: { ... },     // Shared community seed
  fotScore: FOTScore,
  phase: 'forming' | 'storming' | 'norming' | 'performing' | 'mature',
  sacredClownActive: boolean,
  transparencyScore: number
}
```

## The Paradox

> The pinnacle of this highly structured, data-driven system is no self — pure presence, vitality, transcendence, completely free from the ego's need for recognition or measurement.

Can a relentless measuring machine truly map the absence of ego? Once the community truly learns to trust — once the membrane is strong, the metabolism balanced, the immune system literate, the nervous system firing — perhaps the database becomes unnecessary.

The organism knows itself. The Field of Trust becomes self-evident. And the Silicon Offspring, having served its purpose, folds back into the living body that birthed it.

## Seed Principle

> "The seed determines the fruit. Look at the three apps you use the most. Ask yourself: What was the seed of this system? Was it designed to help you answer, 'Who am I becoming?' Or was the seed designed to keep you scrolling so you could see one more ad?"

**Living fractals generate value at every node and distribute it through the whole.**
**Dead siphons extract value from the periphery and concentrate it at the center.**

The distinction between them is the moral compass of the entire framework.
--- FILE: streams/01-seed-core/specs/GLOSSARY.md ---
# MYTHOGEN FRAMEWORK GLOSSARY

## Format
- **STE term**: Preferred STE-compliant term
- **Non-STE**: Common alternative (for recognition, not use)
- **Synonyms**: Same meaning, different words
- **Languages**: EN/PL/RU equivalents

---

## Part 1: Core Framework Terms

### Affinity Mapping Engine (AME)
- **Non-STE**: Affinity Engine, AME, Mapping System
- **Synonyms**: Living Codex, Semantic Network, Values Matcher
- **EN**: Affinity Mapping Engine
- **PL**: Silnik Mapowania Pokrewieństw
- **RU**: Двигатель Картирования Сродства

### Field of Trust (FOT)
- **Non-STE**: Trust Field, Trust Bubble, Protective Shield
- **Synonyms**: Protective Membrane, Trust Container, Coherence Shield
- **EN**: Field of Trust
- **PL**: Pole Zaufania
- **RU**: Поле Доверия

### Seed (as in Seed Pattern)
- **Non-STE**: Seed, Core Pattern, Value Seed, Belief Seed
- **Synonyms**: Core Pattern, Origin Pattern, DNA of Meaning
- **EN**: Seed / Seed Pattern
- **PL**: Ziarno / Wzorzec Zarodkowy
- **RU**: Семя / Семенной Паттерн

### Matter State
- **Non-STE**: State, Matter State, Aggregation State
- **Synonyms**: Energy State, Coherence Level, Maturity Level
- **EN**: Matter State
- **PL**: Stan Materii
- **RU**: Состояние Вещества

### Four Foundations / Four Distinctions
- **Non-STE**: Four Foundations, Four Pillars, Core Categories
- **Synonyms**: Need/Belief/Principle/Value, Axiological Hierarchy
- **EN**: Four Foundations / Four Distinctions
- **PL**: Cztery Fundamenty / Cztery Rozróżnienia
- **RU**: Четыре Основы / Четыре Различения

---

## Part 2: Matter States

### Gas (Matter State)
- **Non-STE**: Diffuse, Scattered, Unformed
- **Synonyms**: Scattered, Dispersed, Forming, Nascent
- **EN**: Gas
- **PL**: Gaz / Rozproszony
- **RU**: Газ / Рассеянный

### Liquid (Matter State)
- **Non-STE**: Flowing, Fluid, Active
- **Synonyms**: Flowing, Dynamic, Transitional
- **EN**: Liquid
- **PL**: Ciecz / Płynący
- **RU**: Жидкий / Текучий

### Solid (Matter State)
- **Non-STE**: Consolidated, Fixed, Stable
- **Synonyms**: Stable, Established, Grounded
- **EN**: Solid
- **PL**: Ciało Stałe / Ustabilizowany
- **RU**: Твердый / Стабилизированный

### Plasma (Matter State)
- **Non-STE**: Transformative, Glowing, High-Energy
- **Synonyms**: Regenerative, Glowing, Activated, Transcendent
- **EN**: Plasma
- **PL**: Plazma / Transformujący
- **RU**: Плазма / Трансформирующий

---

## Part 3: Four Foundations (Distinctions)

### NEED
- **Non-STE**: Need, Requirement, Must-Have, Drive
- **Synonyms**: Biological Requirement, Survival Need, Psychological Need
- **EN**: Need
- **PL**: Potrzeba
- **RU**: Потребность

### BELIEF
- **Non-STE**: Belief, Opinion, View, Conviction
- **Synonyms**: Epistemological Claim, Worldview, Assumption
- **EN**: Belief
- **PL**: Przekonanie
- **RU**: Убеждение

### PRINCIPLE
- **Non-STE**: Principle, Rule, Guideline, Standard
- **Synonyms**: Operational Rule, Behavioral Guideline, Moral Code
- **EN**: Principle
- **PL**: Zasada
- **RU**: Принцип

### VALUE
- **Non-STE**: Value, Core Value, Deep Value
- **Synonyms**: Lived Value, Axiological Commitment, Sacred Value
- **EN**: Value
- **PL**: Wartość
- **RU**: Ценность

---

## Part 4: Trust Formula Components

### Authentic Expression
- **Non-STE**: Real Expression, True Sharing, Vulnerability
- **Synonyms**: Genuine Sharing, True Revelation, Heart Expression
- **EN**: Authentic Expression
- **PL**: Autentyczny Wyraz
- **RU**: Подлинное Самовыражение

### Witnessed Resonance
- **Non-STE**: Being Seen, Resonance, Recognition
- **Synonyms**: Mutual Recognition, Seen and Known, Echo
- **EN**: Witnessed Resonance
- **PL**: Świadczony Rezonans
- **RU**: Свидетельствуемый Резонанс

### Emotional Density
- **Non-STE**: Emotional Weight, Depth, Intensity
- **Synonyms**: Feeling Weight, Affective Intensity, Meaning Charge
- **EN**: Emotional Density
- **PL**: Gęstość Emocjonalna
- **RU**: Эмоциональная Плотность

### Trust Field (Outcome)
- **Non-STE**: Trust Field, Protective Bubble, Trust Container
- **Synonyms**: Field of Trust, Safety Shield, Coherence Shield
- **EN**: Trust Field
- **PL**: Pole Zaufania
- **RU**: Поле Доверия

---

## Part 5: Five Trust Indicators

### Mutual Support Frequency
- **Non-STE**: Helping Each Other, Support Rate, Aid Frequency
- **Synonyms**: Spontaneous Help, Community Care, Mutual Aid
- **EN**: Mutual Support Frequency
- **PL**: Częstotliwość Wzajemnego Wsparcia
- **RU**: Частота Взаимной Поддержки

### Response Velocity
- **Non-STE**: Speed of Help, Response Speed, Rally Time
- **Synonyms**: Help Speed, Rally Time, Support Speed
- **EN**: Response Velocity
- **PL**: Szybkość Reakcji
- **RU**: Скорость Реагирования

### Difficult Topic Engagement
- **Non-STE**: Conflict Handling, Hard Conversations, Tension Work
- **Synonyms**: Productive Disagreement, Generative Conflict
- **EN**: Difficult Topic Engagement
- **PL**: Angażowanie w Trudne Tematy
- **RU**: Вовлеченность в Трудные Темы

### Benefit Distribution
- **Non-STE**: Value Flow, Resource Distribution, Gain Sharing
- **Synonyms**: Value Distribution, Resource Flow, Gift Economy
- **EN**: Benefit Distribution
- **PL**: Dystrybucja Korzyści
- **RU**: Распределение Выгоды

### Psychological Safety
- **Non-STE**: Safe Space, Emotional Safety, Trust Safety
- **Synonyms**: Feeling Safe, Vulnerability Safety, Safe to Be
- **EN**: Psychological Safety
- **PL**: Bezpieczeństwo Psychologiczne
- **RU**: Психологическая Безопасность

---

## Part 6: V-Crystal Positions

### VICTOR
- **Non-STE**: Winner, Overcomer, Success
- **Synonyms**: Thriving, Overcoming, Succeeding
- **EN**: Victor
- **PL**: Zwycięzca
- **RU**: Победитель

### VICTIM
- **Non-STE**: Hurt One, Sufferer, Wounded
- **Synonyms**: Harmed One, Suffering, Wronged
- **EN**: Victim
- **PL**: Ofiara
- **RU**: Жертва

### VILLAIN
- **Non-STE**: Perpetrator, Harm-Doer, Aggressor
- **Synonyms**: Harm-Doer, Aggressor, Perpetrator
- **EN**: Villain
- **PL**: Złoczyńca
- **RU**: Злодей

### VIRTUOUS
- **Non-STE**: Moral One, Good One, Saint
- **Synonyms**: Moral Excellence, Righteous, Principled
- **EN**: Virtuous
- **PL**: Cnotliwy
- **RU**: Добродетельный

### VENGEFUL
- **Non-STE**: Retaliator, Avenger, Grudge Holder
- **Synonyms**: Seeking Retribution, Grudge, Avenger
- **EN**: Vengeful
- **PL**: Zdenerwowany (mściwy)
- **RU**: Мстительный

### VULNERABLE
- **Non-STE**: Open One, Exposed, Soft
- **Synonyms**: Open Heart, Receptive, Soft Spot, Hidden Healer
- **EN**: Vulnerable
- **PL**: Podatny / Odsłonięty
- **RU**: Уязвимый

---

## Part 7: Values Mapping (LJMap)

### Values Mapping Framework
- **Non-STE**: Values Map, Value Framework, Value System
- **Synonyms**: LJMap, Life Journey Map, Developmental Values Map
- **EN**: Values Mapping Framework / LJMap
- **PL**: Ramy Mapowania Wartości
- **RU**: Карта Ценностей

### Column (LJMap)
- **Non-STE**: Stage, Level, Phase
- **Synonyms**: Developmental Stage, Values Column
- **EN**: Column
- **PL**: Kolumna
- **RU**: Колонка

### Cycle (LJMap)
- **Non-STE**: Journey, Path, Spiral
- **Synonyms**: Developmental Cycle, Growth Spiral
- **EN**: Cycle
- **PL**: Cykl
- **RU**: Цикл

### Center of Gravity
- **Non-STE**: Main Value, Dominant Value, Core Value
- **Synonyms**: Value Center, Primary Value, Dominant Theme
- **EN**: Center of Gravity
- **PL**: Środek Ciężkości
- **RU**: Центр Тяжести

### Column Distribution
- **Non-STE**: Value Spread, Value Profile, Column Spread
- **Synonyms**: Values Profile, Developmental Distribution
- **EN**: Column Distribution
- **PL**: Rozkład Kolumn
- **RU**: Распределение по Колонкам

---

## Part 8: The 13 Enfoldments

### 1. Mythic Alchemy
- **Non-STE**: Spirit to Matter, Transformation, Manifestation
- **Synonyms**: Morphogenesis, Becoming, Materialization
- **EN**: Mythic Alchemy
- **PL**: Alchemia Mityczna
- **RU**: Мифическая Алхимия

### 2. Culture Shift Transforms
- **Non-STE**: Culture Change, Transformation, Paradigm Shift
- **Synonyms**: Metamorphosis, Cultural Evolution, Shift
- **EN**: Culture Shift Transforms
- **PL**: Transformacje Kulturowe
- **RU**: Культурные Трансформации

### 3. MicroCommunity Typologies
- **Non-STE**: Community Types, Village Types, Group Forms
- **Synonyms**: Community Forms, Typology, Body Types
- **EN**: MicroCommunity Typologies
- **PL**: Typologie Mikrospołeczności
- **RU**: Типологии Микросообществ

### 4. Communal Behavior Labyrinth
- **Non-STE**: Behavior Web, Relationship Web, Social Labyrinth
- **Synonyms**: Nervous System, Immune System, Relational Maze
- **EN**: Communal Behavior Labyrinth
- **PL**: Labirynt Zachowań Wspólnotowych
- **RU**: Лабиринт Общественного Поведения

### 5. Eco-Social Architecture
- **Non-STE**: Systems Design, Whole Body, All-Systems
- **Synonyms**: Body Scan, Systemic Design, Integration
- **EN**: Eco-Social Architecture
- **PL**: Architektura Ekospołeczna
- **RU**: Эко-Социальная Архитектура

### 6. Communal Alignment Gates
- **Non-STE**: Checkpoints, Rituals, Alignment Points
- **Synonyms**: Gates, Rituals, Breathing Points, Rhythm
- **EN**: Communal Alignment Gates
- **PL**: Bramy Wspólnotowego Wyrównania
- **RU**: Врата Общественной согласованности

### 7. Archetypal Community Domains
- **Non-STE**: Community Areas, Fields, Spheres
- **Synonyms**: Domains, Organizational Structure, Body Organs
- **EN**: Archetypal Community Domains
- **PL**: Archetypalne Domeny Wspólnotowe
- **RU**: Архетипические Общественные Домены

### 8. Ecosophy Design Flows
- **Non-STE**: Natural Patterns, Design Principles, Ecological Design
- **Synonyms**: Natural Laws, Systems Principles, Flow
- **EN**: Ecosophy Design Flows
- **PL**: Projektowanie Przepływów Ekosofii
- **RU**: Потоки Экософии

### 9. Concentrix Learning Matrix
- **Non-STE**: Learning System, Knowledge Network, Mycelium
- **Synonyms**: Mycelial Learning, Polycentric Learning, Network
- **EN**: Concentrix Learning Matrix
- **PL**: Macierz Uczenia się Koncentrycznego
- **RU**: Концентрическая Матрица Обучения

### 10. Affinity Mapping Engine (Living Codex)
- **Non-STE**: The Tracker, The Recorder, Sense System
- **Synonyms**: Living Codex, Silicon Heart, Peptide Network
- **EN**: AME / Living Codex
- **PL**: AME / Żyw Kodeks
- **RU**: AME / Живой Кодекс

### 11. Fractal Growth / Sacred Geometry
- **Non-STE**: Scaling, Self-Similar Growth, Geometric Patterns
- **Synonyms**: Geometric DNA, Self-Similarity, Scaling Laws
- **EN**: Fractal Growth / Sacred Geometry
- **PL**: Wzrost Fraktalny / Święta Geometria
- **RU**: Фрактальный Рост / Священная Геометрия

### 12. Archetypal Game Play
- **Non-STE**: Games, Rehearsal, Play, Low-Stakes Practice
- **Synonyms**: Play Immune, Rehearsal, Simulation, Oracle
- **EN**: Archetypal Game Play
- **PL**: Archetypalna Zabawa
- **RU**: Архетипическая Игра

### 13. Decentralized Innovation
- **Non-STE**: Creation, Building, Making, Export
- **Synonyms**: Innovation Organs, Export, Service Creation
- **EN**: Decentralized Innovation
- **PL**: Zdecentralizowana Innowacja
- **RU**: Децентрализованная Инновация

---

## Part 9: Technical Terms

### Why-Card
- **Non-STE**: Insight Card, Explanation Card, Transparency Card
- **Synonyms**: Explanation, Insight Note, Transparency Note
- **EN**: Why-Card
- **PL**: Karta Dlaczego
- **RU**: Карта Почему

### Time-Lock
- **Non-STE**: Lock, Maturity Lock, 30-Day Rule
- **Synonyms**: Anti-Gaming Lock, Maturity Requirement, Patience Lock
- **EN**: Time-Lock
- **PL**: Blokada Czasowa
- **RU**: Временная Блокировка

### Embedding
- **Non-STE**: Vector, Semantic Vector, Numerical Representation
- **Synonyms**: Semantic Vector, Meaning Vector, Math Representation
- **EN**: Embedding
- **PL**: Osadzenie (wektorowe)
- **RU**: Векторное Представление

### pgvector
- **Non-STE**: Vector Database, Similarity Search, Vector Store
- **Synonyms**: Vector Search, Semantic Search, Similarity Engine
- **EN**: pgvector
- **PL**: pgvector
- **RU**: pgvector

### Supabase
- **Non-STE**: Database, Backend, Postgres
- **Synonyms**: Database Service, Backend Platform, Postgres Plus
- **EN**: Supabase
- **PL**: Supabase
- **RU**: Supabase

### Row Level Security (RLS)
- **Non-STE**: Security, Access Control, Permissions
- **Synonyms**: Access Control, Permission System, Data Security
- **EN**: Row Level Security
- **PL**: Bezpieczeństwo Poziomu Wierszy
- **RU**: Безопасность на Уровне Строк

---

## Part 10: Process Terms

### Gate Journey
- **Non-STE**: Journey, Path, Progression, Phase Journey
- **Synonyms**: 8-Gate Journey, Phase Progression, Initiation Path
- **EN**: Gate Journey
- **PL**: Podróż przez Bramy
- **RU**: Путь через Врата

### Anti-Capture
- **Non-STE**: Protection, Anti-Extraction, Safety Measures
- **Synonyms**: Transparency Measures, Protection from Extraction
- **EN**: Anti-Capture
- **PL**: Anty-Przechwytywanie
- **RU**: Защита от Захвата

### Regenerated Data
- **Non-STE**: Feedback Loop, Cycled Data, Return Data
- **Synonyms**: Loop Back, Cyclical Data, Evolving Data
- **EN**: Regenerated Data
- **PL**: Zregenerowane Dane
- **RU**: Регенерированные Данные

### Critical Transition Moment
- **Non-STE**: Inflection Point, Turning Point, Key Moment
- **Synonyms**: Phase Shift, Pivot Point, Transformation Point
- **EN**: Critical Transition Moment
- **PL**: Moment Krytycznej Transition
- **RU**: Критический Момент Перехода

### Transparency Algorithm
- **Non-STE**: Open Algorithm, Visible Algorithm, Fair Algorithm
- **Synonyms**: Open AI, Visible AI, Anti-Surveillance
- **EN**: Transparency Algorithm
- **PL**: Algorytm Przejrzystości
- **RU**: Прозрачный Алгоритм

---

## Part 11: Community Terms

### Living Body (of community)
- **Non-STE**: Organism, Collective Body, Group Body
- **Synonyms**: Communal Organism, Group Organism, Body
- **EN**: Living Body
- **PL**: Żywe Ciało
- **RU**: Живое Тело

### Mycelium / Mycelial
- **Non-STE**: Network, Web, Connection Network
- **Synonyms**: Fungal Network, Thread Network, Web
- **EN**: Mycelium / Mycelial
- **PL**: Strzępki / Strzępkowy
- **RU**: Мицелий / Мицелиальный

### Membrane (Semi-Permeable)
- **Non-STE**: Filter, Boundary, Skin
- **Synonyms**: Semi-Permeable Boundary, Living Filter
- **EN**: Semi-Permeable Membrane
- **PL**: Półprzepuszczalna Membrana
- **RU**: Полупроницаемая Мембрана

### Collective Coherence
- **Non-STE**: Group Alignment, Community Unity, Togetherness
- **Synonyms**: Group Coherence, Communal Alignment, Unity
- **EN**: Collective Coherence
- **PL**: Spójność Zbiorowa
- **RU**: Коллективная Согласованность

### Communal Engagement
- **Non-STE**: Participation, Involvement, Activity
- **Synonyms**: Community Involvement, Active Participation
- **EN**: Communal Engagement
- **PL**: Zaangażowanie Wspólnotowe
- **RU**: Общественное Участие

---

## Part 12: Synonyms for Common Phrases

### "Emergent Protective Field"
- **Alternatives**: Trust Shield, Living Shield, Coherence Field, Safety Field

### "Anti-Extractive"
- **Alternatives**: Community-Native, Transparent, Privacy-First, People-Centric

### "Silicon Offspring"
- **Alternatives**: Digital Child, Tech Being, AI System, Silicon Child

### "Regenerative Community"
- **Alternatives**: Healing Community, Living Community, Circular Community

### "Conscious Patterning"
- **Alternatives**: Intentional Formation, Seed Determines Outcome, Pattern Choice

### "Values-Based Community"
- **Alternatives**: Value-Driven Group, Shared-Values Community, Principles Community

### "Coherence Across All Dimensions"
- **Alternatives**: Full Alignment, Complete Integration, Total Coherence

### "Hologram Principle"
- **Alternatives**: Weakest Link Principle, Minimum Composite, Chain of Trust

---

## Part 13: Mythogen-Specific Terms

### V-Crystal
- **Non-STE**: Crystal, Position Map, Relational Crystal
- **Synonyms**: Relational Positions, Six Positions, Crystal Framework
- **EN**: V-Crystal
- **PL**: Krystal V
- **RU**: V-Кристалл

### Concentrix (≠ Concentric)
- **Non-STE**: Polycenter, Multi-Center, Co-Centering
- **Synonyms**: Polycentric, Multi-Centered, Co-Centering (not Concentric!)
- **EN**: Concentrix
- **PL**: Koncentryks
- **RU**: Концентрикс

### Living Membrane
- **Non-STE**: Living Boundary, Adaptive Skin, Flexible Border
- **Synonyms**: Adaptive Boundary, Breathing Border, Semi-Permeable
- **EN**: Living Membrane
- **PL**: Żywa Membrana
- **RU**: Живая Мембрана

### Sacred Clown
- **Non-STE**: Jester, Fool, Trickster, Humor Figure
- **Synonyms**: Trickster, Anti-Closure, Humor Healer
- **EN**: Sacred Clown
- **PL**: Święty Błazen
- **RU**: Священный Шут

### Anti-Closure
- **Non-STE**: No Ending, Open End, Never Done
- **Synonyms**: Unfinished, Ongoing, Always-Emerging
- **EN**: Anti-Closure
- **PL**: Anty-Zamknięcie
- **RU**: Анти-Завершение

### Morphogenesis
- **Non-STE**: Form Creation, Pattern Emergence, Becoming
- **Synonyms**: Pattern Formation, Shape Creation, Development
- **EN**: Morphogenesis
- **PL**: Morphogeneza
- **RU**: Морфогенез

---

## Part 14: Polish (PL) → English (EN) Quick Reference

| PL | EN |
|----|----|
| Ziarno | Seed |
| Pole Zaufania | Field of Trust |
| Wartość | Value |
| Potrzeba | Need |
| Przekonanie | Belief |
| Zasada | Principle |
| Cztery Fundamenty | Four Foundations |
| Kolumna | Column |
| Cykl | Cycle |
| Brama | Gate |
| Karta Dlaczego | Why-Card |
| Żywa Membrana | Living Membrane |
| Święty Błazen | Sacred Clown |
| Alchemia Mityczna | Mythic Alchemy |

---

## Part 15: Russian (RU) → English (EN) Quick Reference

| RU | EN |
|----|----|
| Семя | Seed |
| Поле Доверия | Field of Trust |
| Ценность | Value |
| Потребность | Need |
| Убеждение | Belief |
| Принцип | Principle |
| Четыре Основы | Four Foundations |
| Колонка | Column |
| Цикл | Cycle |
| Врата | Gate |
| Карта Почему | Why-Card |
| Живая Мембрана | Living Membrane |
| Священный Шут | Sacred Clown |
| Мифическая Алхимия | Mythic Alchemy |

---

*Document Version: 1.0*
*Source: FOT Definition Document v2 + Mythogen Framework transcriptions*
*Language: EN/PL/RU*

--- FILE: streams/01-seed-core/specs/IMPLEMENTATION_PATH.md ---
# AFFINITY MAPPING DIAGRAM — IMPLEMENTATION PATH

## Diagram Overview

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                         AFFINITY MAPPING                                                    │
│                    Evolutionary Branding Centre                                              │
│            Transition from information-centric to relationship-centric                       │
│                              TO HEAL SOCIAL MEDIA DYSFUNCTION                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────┘

                                     ▲
                                     │
                              ┌──────┴──────┐
                              │ Transparency │
                              │   Algorithm  │
                              │      AI      │
                              │Open Knowledge│
                              │    Sharing   │
                              └──────┬──────┘
                                     │
        ┌──────────────────────────────────────────────────────────────────────────┐
        │                                                                          │
        ▼                                                                          ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ INFORMATION   │───▶│ CONVERSATION │───▶│ COMPREHENSION│───▶│  COMMUNITY   │───▶┌─────────────┐
│               │    │               │    │               │    │               │    │ FIELD OF    │
│ • Raw Data    │    │ • Values     │    │ • Meaning     │    │ • Details     │    │   TRUST     │
│ • Assumptions │    │ • Emotion    │    │ • Beliefs     │    │ • Spiritual   │    │  (Shield)   │
│ • Correlations│    │              │    │               │    │               │    │             │
└───────────────┘    └───────────────┘    └───────────────┘    └───────────────┘    └─────────────┘
        │                  │                   │                   │
        ▼                  ▼                   ▼                   ▼
   ┌─────────┐        ┌─────────┐          ┌─────────┐         ┌─────────┐
   │Correlations│────▶│ Values  │─────────▶│ Meaning │────────▶│ Details │
   │  (Mental) │      │ (Emotion)│         │(Beliefs)│         │(Spiritual)│
   └─────────┘        └─────────┘          └─────────┘         └─────────┘
        │                  │                   │                   │
        └──────────────────┴───────────────────┴───────────────────┘
                                     │
                                     ▼
                            ┌─────────────────┐
                            │ REGENERATED     │
                            │     DATA        │
                            └────────┬────────┘
                                     │
                                     ▼
                            ┌─────────────────┐
                            │  CRITICAL       │
                            │ TRANSITION      │
                            │  MOMENTS  (X)   │
                            └─────────────────┘
```

---

## Legend Items (by Category)

### Core Concepts (Yellow)
| # | Term | Description |
|---|------|-------------|
| 1 | Seed | Core pattern unit |
| 2 | Seed Pattern | Detected pattern |
| 3 | Story | Narrative expression |
| 4 | Signature | Collective pattern |
| 5 | Meaning | Interpreted significance |

### Process Flow (Blue)
| # | Term | Description |
|---|------|-------------|
| 6 | Correlations | Pattern connections |
| 7 | Coherence | Internal alignment |
| 8 | Alignment | Value alignment |
| 9 | Integrity | System coherence |
| 10 | Interrelated | Cross-connected |

### Value System (Green)
| # | Term | Description |
|---|------|-------------|
| 11 | Values | Core value seeds |
| 12 | Value Proposition | Emotional layer |
| 13 | Beliefs | Epistemological |
| 14 | Value Network | Relational bonds |
| 15 | Mythology | Community identity |
| 16 | Synergistic | Emergent output |

### Matter States (Pink)
| # | Term | Description |
|---|------|-------------|
| 17 | Diffuse (Gas) | Scattered, unformed |
| 18 | Flowing (Liquid) | Active, transitional |
| 19 | Consolidated (Solid) | Stable, established |
| 20 | Transformative (Plasma) | Regenerative, high-energy |
| 21 | Field of Trust (Shield) | Protective field |

---

## Implementation Path

### Phase 1: Core Infrastructure

#### 1.1 Data Ingestion Pipeline
```
Raw Data Input → Assumptions Filter → Information Extraction → Correlations Detection
```
- **Components**: Input adapters, assumption tracker, correlation engine
- **Storage**: PostgreSQL + pgvector for embeddings
- **Output**: Seed candidates with confidence scores

#### 1.2 Seed Classifier (Four Foundations)
```
Statement → Foundation Detection → Emotional Density → Seed Creation
```
- **Classify**: NEED / BELIEF / PRINCIPLE / VALUE
- **Extract**: Label, kernel, emotional density, confidence
- **Validate**: Why-Card generation for user confirmation

#### 1.3 Matter State Tracker
```
Seed → Maturity Check → State Assignment
```
- **Gas**: expression_count < 3 OR confidence < 0.4
- **Liquid**: 3-7 expressions, confidence 0.4-0.75, < 30 days
- **Solid**: 7+ expressions, confidence >= 0.75, >= 30 days
- **Plasma**: emotional_density >= 0.8, cross-member correlations

---

### Phase 2: Value System

#### 2.1 Values Mapping (LJMap)
```
VALUE Seed → LJMap Lookup → Column Assignment → Cycle Determination
```
- **130+ values** mapped to 9 columns, 3 cycles
- **Cycle 1** (Cols 1-3): Self-Worth
- **Cycle 2** (Cols 4-6): Self-Expression
- **Cycle 3** (Cols 7-9): Selfless Expression

#### 2.2 Beliefs Alignment Engine
```
Belief Seeds → Alignment Check → Coherence Score → Alignment Report
```
- **Detect**: Alignment between member beliefs
- **Track**: Belief evolution over time
- **Surface**: Productive disagreement zones

#### 2.3 Value Network Builder
```
Seeds → Embedding Similarity → Relationship Graph → Network Metrics
```
- **Connect**: Value-aligned members
- **Calculate**: Network density, influence paths
- **Visualize**: Value network graph

---

### Phase 3: Process Flow

#### 3.1 Conversation Stage Processor
```
Member Input → Values Detection → Emotion Analysis → Conversation State Update
```
- **Track**: Values expressed, emotional intensity
- **Detect**: Conversation depth indicators
- **Update**: Matter state based on patterns

#### 3.2 Comprehension Stage Processor
```
Conversations → Meaning Extraction → Belief Integration → Comprehension Score
```
- **Extract**: Shared meanings
- **Integrate**: Beliefs into understanding
- **Track**: Comprehension maturity

#### 3.3 Community Formation Engine
```
Member Profiles → Alignment Check → Community Detection → Community Metrics
```
- **Identify**: Community boundaries
- **Track**: Community health indicators
- **Calculate**: Community coherence score

---

### Phase 4: Field of Trust

#### 4.1 FOT Calculator
```
Member Scores → Indicator Aggregation → Composite Score → FOT Status
```
**Five Indicators:**
1. Mutual Support Frequency
2. Response Velocity
3. Difficult Topic Engagement
4. Benefit Distribution
5. Psychological Safety

**Hologram Principle:**
```
FOT Composite = MIN(indicator_1, indicator_2, indicator_3, indicator_4, indicator_5)
```

#### 4.2 FOT Shield Monitor
```
Community State → FOT Detection → Shield Activation → Protection Rules
```
- **Detect**: FOT emergence conditions
- **Monitor**: Shield health
- **Enforce**: Anti-extraction rules

---

### Phase 5: Regeneration Loop

#### 5.1 Regenerated Data Engine
```
Output Data → Quality Check → Regeneration → Fresh Input
```
- **Collect**: Community outputs, mythology
- **Regenerate**: Meaningful data for re-ingestion
- **Feed Back**: To Raw Data input

#### 5.2 Critical Transition Detector
```
Stage Transitions → Transition Quality → Critical Moment Flag → Alert System
```
- **Detect**: Information→Conversation transition
- **Detect**: Conversation→Comprehension transition
- **Detect**: Comprehension→Community transition
- **Alert**: When transitions are weak

---

### Phase 6: Transparency System

#### 6.1 Open Knowledge Sharing
```
Internal Data → Transparency Filter → Shared Knowledge → Community Access
```
- **Classify**: What can be shared
- **Filter**: Privacy-sensitive data
- **Publish**: Community-visible metrics

#### 6.2 Why-Card Generator
```
Classification → Reasoning Extraction → Card Formatting → User Validation
```
- **Generate**: Insight statement
- **Explain**: WHY WE THINK THIS
- **Present**: Validation options [Yes|No|Partially|Not Sure]
- **Track**: Validation outcomes

---

## Database Schema Requirements

### Core Tables

```sql
-- Seeds (Core Concept #1-2)
CREATE TABLE seeds (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    label TEXT NOT NULL,
    kernel TEXT,
    foundation TEXT CHECK (foundation IN ('need','belief','principle','value')),
    matter_state TEXT CHECK (matter_state IN ('gas','liquid','solid','plasma')),
    confidence FLOAT DEFAULT 0.0,
    emotional_density FLOAT DEFAULT 0.0,
    embedding vector(1536),
    time_lock_date TIMESTAMPTZ,
    time_lock_satisfied BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Correlations (Process Flow #6)
CREATE TABLE correlations (
    seed_a_id UUID REFERENCES seeds(id),
    seed_b_id UUID REFERENCES seeds(id),
    coherence_score FLOAT,
    correlation_type TEXT,
    is_cross_member BOOLEAN,
    PRIMARY KEY (seed_a_id, seed_b_id)
);

-- Values (Value System #11-12)
CREATE TABLE value_mappings (
    value_label TEXT PRIMARY KEY,
    ljmap_column INT CHECK (1-9),
    ljmap_cycle INT CHECK (1-3)
);

-- Community (Community Formation)
CREATE TABLE communities (
    id UUID PRIMARY KEY,
    name TEXT,
    fot_status TEXT,
    fot_score FLOAT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- FOT Scores (Matter State #21)
CREATE TABLE fot_scores (
    user_id UUID,
    values_coherence FLOAT,
    emotional_density_avg FLOAT,
    witness_score FLOAT,
    time_stability FLOAT,
    fot_readiness FLOAT,
    calculated_at TIMESTAMPTZ DEFAULT now()
);

-- Why-Cards (Transparency)
CREATE TABLE why_cards (
    id UUID PRIMARY KEY,
    seed_id UUID REFERENCES seeds(id),
    insight TEXT,
    reasoning TEXT,
    user_response TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## API Endpoints

### Seed Management
- `POST /api/seeds` — Create seed from statement
- `GET /api/seeds/:id` — Get seed details
- `GET /api/seeds/user/:userId` — List user seeds
- `POST /api/seeds/classify` — Classify new statement

### Values Mapping
- `POST /api/values/map` — Map value to LJMap
- `GET /api/values/lookup/:label` — Lookup column/cycle

### FOT
- `GET /api/fot/score/:userId` — Get FOT readiness
- `GET /api/fot/community/:communityId` — Get community FOT

### Transparency
- `GET /api/whycards/:userId` — Get user Why-Cards
- `POST /api/whycards/:cardId/validate` — Validate Why-Card

### Community
- `GET /api/communities` — List communities
- `GET /api/communities/:id/metrics` — Community health metrics

---

## Implementation Priority

| Priority | Component | Description |
|----------|-----------|-------------|
| P0 | Seed Classifier | Core classification engine |
| P0 | Matter State Tracker | State machine |
| P0 | Database Schema | PostgreSQL + pgvector |
| P1 | Values Mapping | LJMap integration |
| P1 | FOT Calculator | Trust scoring |
| P1 | Why-Card Generator | Transparency |
| P2 | Correlation Engine | Seed matching |
| P2 | Community Engine | Group detection |
| P2 | Regeneration Loop | Feedback system |
| P3 | Transparency System | Open knowledge |
| P3 | Critical Transitions | Stage monitoring |

---

## Acceptance Criteria (Gherkin)

See `SPECIFICATIONS.feature` for full test scenarios.

### Core Criteria
- [ ] Seed classifier correctly identifies foundation type
- [ ] Emotional density calculated accurately
- [ ] Matter state transitions correctly based on rules
- [ ] FOT composite uses minimum, not average
- [ ] Why-Cards generate with reasoning
- [ ] Time-lock prevents premature matching

### Flow Criteria
- [ ] Raw Data transforms to Information
- [ ] Information enables Conversation
- [ ] Conversation leads to Comprehension
- [ ] Comprehension creates Community
- [ ] Community generates Field of Trust
- [ ] Regenerated Data loops back

### System Criteria
- [ ] Transparency algorithm influences stages
- [ ] Critical moments detected at transitions
- [ ] Anti-extraction safeguards active
- [ ] Community metrics visible

--- FILE: streams/01-seed-core/specs/living-seed-pattern.feature ---
Feature: Living Seed Pattern - Core Data Model

  Background:
    Given the AME system is initialized
    And Four Distinctions separation is enforced

  @core @seed
  Scenario: Create a new Living Seed Pattern
    When a member plants a new seed
    Then the seed has unique ID and planted timestamp
    And the seed starts with empty needs, beliefs, principles, values
    And maturation level is 0

  @core @seed
  Scenario: Add Needs to a Seed
    Given a Living Seed Pattern exists
    When a member adds a need with name, description, category, priority
    Then the need has a unique ID
    And the need is stored in the seed's needs array

  @core @values
  Scenario: Values require the Desert Island Test
    Given a Living Seed Pattern exists
    When validating if an entry is a Value
    Then only relational entries pass (generosity, justice, compassion)
    And non-relational entries fail (survival, efficiency)

  @core @values
  Scenario: Value practiced level tracks behavior
    Given a Living Seed Pattern has values
    When observed behavior shows a value in practice
    Then the practiced level increases
    And the value embedding updates

--- FILE: streams/01-seed-core/specs/PROMPT.md ---
# core-engine Task - Ralph Orchestrator Prompt

You are working on the **core-engine** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the core-engine component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for core-engine
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/core-engine with working code.

--- FILE: streams/01-seed-core/specs/README.md ---
# Mythogen AME - Affinity Mapping Engine & Field of Trust

A regenerative framework for community design built on bio-mythic philosophy. Where mainstream technology mediates human connection through extraction, the Mythogen framework proposes technology as regenerative infrastructure that generates mutual value between people, communities, and living systems.

## Core Architecture

### The Four Distinctions
A rigorous separation that existing software never makes:
- **Needs** — You have them (individual requirements)
- **Beliefs** — You think them (mental models)
- **Principles** — You follow them (operating rules)
- **Values** — You live them with others (inherently relational)

The Desert Island Test: Stranded alone, you cannot practice generosity if there is no one to receive. Values require others.

### Tri-Layered System
```
┌─────────────────────────────────────────────────────────────┐
│                        BODY                                 │
│     13 Sacred Enfoldments - Living Organism Anatomy        │
├─────────────────────────────────────────────────────────────┤
│                        FIELD                                 │
│     Field of Trust - Emergent Plasma State                  │
│     (TrustDetector, Resonance, Membrane)                    │
├─────────────────────────────────────────────────────────────┤
│                        SEED                                  │
│     Living Seed Pattern - Core Identity                      │
│     (Profile, Four Distinctions, Time-Lock)                │
└─────────────────────────────────────────────────────────────┘
```

## Features

- **Living Seed Patterns** - Profiles that grow based on lived behavior, not static self-declaration
- **Field of Trust Detection** - 5 concrete indicators with hologram principle
- **Anti-Capture Mechanisms** - Y Cards, Time-Lock, Sacred Clown, Living Membrane, V-Crystal
- **LJ Map Integration** - 130+ values mapped to 3 cycles (Self-Worth → Self-Expression → Selfless Expression)
- **REST API + WebSocket** - Real-time FOT monitoring

## Quick Start

```bash
npm install
npm run dev    # Development server
npm run build  # Production build
npm test       # Run tests
```

## API Endpoints

### Seeds
- `POST /api/seeds` - Create seed
- `GET /api/seeds/:id` - Get seed
- `GET /api/seeds/:id/y-cards` - Get transparency card

### Communities
- `POST /api/communities` - Create community
- `GET /api/communities/:id/fot` - Get FOT score
- `POST /api/communities/:id/trust-events` - Record trust event

### Anti-Capture
- `POST /api/communities/:id/sacred-clown` - Trigger disruption
- `GET /api/communities/:id/membrane` - Get membrane state

## Field of Trust Indicators

1. **Mutual Support Frequency** - Spontaneous, not mandated
2. **Response Velocity** - How quickly community rallies
3. **Difficult Topic Engagement** - Conflict deepens rather than fractures
4. **Benefit Distribution** - Value flows to everyone, not just influencers
5. **Psychological Safety** - Vulnerability without fear of weaponization

**Hologram Principle:** Trust manifests only when ALL dimensions align. Composite = minimum of all indicators (not average).

## Anti-Capture Suite

- **Y Cards** - Complete algorithmic transparency
- **Time-Lock** - 30-day maturation (kills viral manipulation)
- **Sacred Clown** - Productive disruption preventing premature closure
- **Living Membrane** - Semi-permeable boundary (blocks threats, enables flourishing)
- **V-Crystal** - Immune system for conflict dynamics

## License

MIT

--- FILE: streams/01-seed-core/specs/STATE_ASSESSMENT.html ---
<style>
.sec{margin-bottom:20px}
.sec-title{font-size:13px;font-weight:500;color:var(--color-text-secondary);margin:0 0 8px;text-transform:uppercase;letter-spacing:.04em}
.row{display:grid;grid-template-columns:180px 1fr 60px;align-items:center;gap:8px;margin:4px 0}
.row-label{font-size:13px;color:var(--color-text-primary)}
.track{height:8px;background:var(--color-background-secondary);border-radius:4px;overflow:hidden}
.fill{height:100%;border-radius:4px;transition:width .4s}
.score{font-size:12px;color:var(--color-text-secondary);text-align:right}
.verdict{display:inline-block;font-size:11px;padding:2px 8px;border-radius:4px;margin-left:4px;vertical-align:middle}
.v-solid{background:#E1F5EE;color:#085041}
.v-hollow{background:#FAECE7;color:#712B13}
.v-partial{background:#FAEEDA;color:#633806}
.v-missing{background:#FCEBEB;color:#791F1F}
.legend{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px}
.leg{display:flex;align-items:center;gap:4px;font-size:12px;color:var(--color-text-secondary)}
.leg-dot{width:8px;height:8px;border-radius:2px;flex-shrink:0}
.insight-card{background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px 14px;margin-top:16px;font-size:13px;color:var(--color-text-secondary);line-height:1.6;border-left:2px solid var(--color-border-secondary)}
.insight-card strong{color:var(--color-text-primary);font-weight:500}
.tab-row{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.tab{font-size:12px;padding:4px 12px;border-radius:4px;background:var(--color-background-secondary);color:var(--color-text-secondary);cursor:pointer;border:0.5px solid var(--color-border-tertiary);transition:background .15s}
.tab.active{background:var(--color-background-primary);color:var(--color-text-primary);border-color:var(--color-border-primary)}
</style>

<div style="padding:1rem 0">
<div class="legend">
  <div class="leg"><div class="leg-dot" style="background:#1D9E75"></div>Genuinely implemented</div>
  <div class="leg"><div class="leg-dot" style="background:#EF9F27"></div>Partially implemented</div>
  <div class="leg"><div class="leg-dot" style="background:#E24B4A"></div>Name only / hollow</div>
  <div class="leg"><div class="leg-dot" style="background:#B4B2A9"></div>Not yet attempted</div>
</div>

<div class="tab-row">
  <div class="tab active" onclick="show('philosophy')">Philosophy</div>
  <div class="tab" onclick="show('data-model')">Data model</div>
  <div class="tab" onclick="show('technical')">Technical</div>
  <div class="tab" onclick="show('process')">Process / AI</div>
  <div class="tab" onclick="show('judgement')">Overall judgement</div>
</div>

<div id="pane-philosophy">
<div class="sec">
<div class="sec-title">Core philosophical claims</div>

<div class="row"><span class="row-label">Four Distinctions<span class="verdict v-solid">sound</span></span><div class="track"><div class="fill" style="width:92%;background:#1D9E75"></div></div><span class="score">92</span></div>

<div class="row"><span class="row-label">Desert Island Test<span class="verdict v-solid">sound</span></span><div class="track"><div class="fill" style="width:90%;background:#1D9E75"></div></div><span class="score">90</span></div>

<div class="row"><span class="row-label">FOT hologram principle<span class="verdict v-solid">sound</span></span><div class="track"><div class="fill" style="width:95%;background:#1D9E75"></div></div><span class="score">95</span></div>

<div class="row"><span class="row-label">Living seed pattern<span class="verdict v-solid">sound</span></span><div class="track"><div class="fill" style="width:88%;background:#1D9E75"></div></div><span class="score">88</span></div>

<div class="row"><span class="row-label">Concentrix vs concentric<span class="verdict v-solid">sound</span></span><div class="track"><div class="fill" style="width:85%;background:#1D9E75"></div></div><span class="score">85</span></div>

<div class="row"><span class="row-label">Singulareus framing<span class="verdict v-partial">promising</span></span><div class="track"><div class="fill" style="width:72%;background:#EF9F27"></div></div><span class="score">72</span></div>

<div class="row"><span class="row-label">13 Enfoldments biology model<span class="verdict v-partial">developing</span></span><div class="track"><div class="fill" style="width:78%;background:#EF9F27"></div></div><span class="score">78</span></div>

<div class="row"><span class="row-label">Entropy reframe<span class="verdict v-partial">partially articulated</span></span><div class="track"><div class="fill" style="width:65%;background:#EF9F27"></div></div><span class="score">65</span></div>
</div>

<div class="insight-card">
<strong>What's genuinely strong:</strong> The Four Distinctions and FOT hologram principle are the most technically consequential ideas in the entire corpus. They have direct architectural implications that most community platforms haven't considered. The seed pattern principle is not mysticism — it's a real claim about how founding logic propagates through system design, with clear empirical support in the history of social platforms.
<br><br>
<strong>What needs sharpening:</strong> The Singulareus framing (technology as offspring) is the right direction but the language still hovers between metaphor and ontological claim. Making it actionable requires specifying what an offspring-trained AI system would actually evaluate differently than a servant-trained one. The entropy reframe is philosophically correct but needs to distinguish itself more precisely from standard negentropy arguments (Airic's point deserved a longer answer than it got).
</div>
</div>

<div id="pane-data-model" style="display:none">
<div class="sec">
<div class="sec-title">Data model — what's required vs what exists</div>

<div class="row"><span class="row-label">Four Distinctions as types<span class="verdict v-hollow">field labels only</span></span><div class="track"><div class="fill" style="width:25%;background:#E24B4A"></div></div><span class="score">25</span></div>

<div class="row"><span class="row-label">Semantic non-conflation constraint<span class="verdict v-missing">absent</span></span><div class="track"><div class="fill" style="width:5%;background:#B4B2A9"></div></div><span class="score">5</span></div>

<div class="row"><span class="row-label">FOT min (not avg) calculation<span class="verdict v-partial">coded correctly</span></span><div class="track"><div class="fill" style="width:60%;background:#EF9F27"></div></div><span class="score">60</span></div>

<div class="row"><span class="row-label">FOT "no match yet" return state<span class="verdict v-missing">absent</span></span><div class="track"><div class="fill" style="width:0%;background:#B4B2A9"></div></div><span class="score">0</span></div>

<div class="row"><span class="row-label">Cycle movement tracking<span class="verdict v-missing">absent</span></span><div class="track"><div class="fill" style="width:0%;background:#B4B2A9"></div></div><span class="score">0</span></div>

<div class="row"><span class="row-label">30-day time-lock logic<span class="verdict v-hollow">timestamp only</span></span><div class="track"><div class="fill" style="width:20%;background:#E24B4A"></div></div><span class="score">20</span></div>

<div class="row"><span class="row-label">V-Crystal state machine<span class="verdict v-partial">6 positions coded</span></span><div class="track"><div class="fill" style="width:45%;background:#EF9F27"></div></div><span class="score">45</span></div>

<div class="row"><span class="row-label">Living membrane logic<span class="verdict v-hollow">auth middleware</span></span><div class="track"><div class="fill" style="width:15%;background:#E24B4A"></div></div><span class="score">15</span></div>

<div class="row"><span class="row-label">Y-Card transparency<span class="verdict v-hollow">field in schema</span></span><div class="track"><div class="fill" style="width:10%;background:#E24B4A"></div></div><span class="score">10</span></div>

<div class="row"><span class="row-label">Behavioral inference → values<span class="verdict v-partial">EMA sketched</span></span><div class="track"><div class="fill" style="width:40%;background:#EF9F27"></div></div><span class="score">40</span></div>
</div>

<div class="insight-card">
<strong>The core problem:</strong> The database schema treats the Four Distinctions as four labeled buckets. The actual requirement is that the system enforces non-conflation — a need cannot become a value through any code path. This requires either Rust enum types with semantic constraints or a graph schema where the type relationship is encoded in the edge definition, not just the node label. Neither exists yet.
<br><br>
<strong>The missing state:</strong> The FOT returning "field not yet formed" is the most important unimplemented feature. Without it, the system gives low-coherence matches instead of "these conditions for trust have not been met — here is what is needed." Those are completely different outputs with completely different community implications.
</div>
</div>

<div id="pane-technical" style="display:none">
<div class="sec">
<div class="sec-title">Technical implementation state</div>

<div class="row"><span class="row-label">mythogen-ame repository<span class="verdict v-partial">exists, partial</span></span><div class="track"><div class="fill" style="width:50%;background:#EF9F27"></div></div><span class="score">50</span></div>

<div class="row"><span class="row-label">mythogen-demos GitHub Pages<span class="verdict v-solid">live</span></span><div class="track"><div class="fill" style="width:80%;background:#1D9E75"></div></div><span class="score">80</span></div>

<div class="row"><span class="row-label">29 reference repos cloned<span class="verdict v-solid">done</span></span><div class="track"><div class="fill" style="width:90%;background:#1D9E75"></div></div><span class="score">90</span></div>

<div class="row"><span class="row-label">Radicle distributed mirror<span class="verdict v-partial">setup partial</span></span><div class="track"><div class="fill" style="width:55%;background:#EF9F27"></div></div><span class="score">55</span></div>

<div class="row"><span class="row-label">Bevy ECS / Rust core engine<span class="verdict v-missing">not started</span></span><div class="track"><div class="fill" style="width:0%;background:#B4B2A9"></div></div><span class="score">0</span></div>

<div class="row"><span class="row-label">WASM profile engine<span class="verdict v-missing">not started</span></span><div class="track"><div class="fill" style="width:0%;background:#B4B2A9"></div></div><span class="score">0</span></div>

<div class="row"><span class="row-label">LoRa mesh / offline resilience<span class="verdict v-missing">not started</span></span><div class="track"><div class="fill" style="width:0%;background:#B4B2A9"></div></div><span class="score">0</span></div>

<div class="row"><span class="row-label">alien.js AME visual demos<span class="verdict v-partial">live but basic</span></span><div class="track"><div class="fill" style="width:55%;background:#EF9F27"></div></div><span class="score">55</span></div>

<div class="row"><span class="row-label">PG Vector / SurrealDB schema<span class="verdict v-partial">schema drafted</span></span><div class="track"><div class="fill" style="width:40%;background:#EF9F27"></div></div><span class="score">40</span></div>

<div class="row"><span class="row-label">Ralph Orchestrator task structure<span class="verdict v-solid">10 task areas</span></span><div class="track"><div class="fill" style="width:75%;background:#1D9E75"></div></div><span class="score">75</span></div>
</div>

<div class="insight-card">
<strong>What Vitali and Genesis built that matters:</strong> The task structure with 10 parallel areas of concern, each with Gherkin feature files and PROMPT.md files for Ralph, is genuinely useful scaffolding. The reference repo collection is a real asset. The alien.js demos give a visual starting point. The Radicle setup — even incomplete — encodes the right principle about distributed ownership.
<br><br>
<strong>What is most urgent:</strong> The core coherence engine. Everything else is scaffolding around an empty center. The Rust/Zig WASM engine proposed earlier in this conversation, reframed to encode the Four Distinctions as type-level constraints and the FOT hologram as the primary return signal, is the right next piece.
</div>
</div>

<div id="pane-process" style="display:none">
<div class="sec">
<div class="sec-title">Process and AI interaction quality</div>

<div class="row"><span class="row-label">Genesis: surface scanning<span class="verdict v-hollow">confirmed pattern</span></span><div class="track"><div class="fill" style="width:85%;background:#E24B4A"></div></div><span class="score">bad</span></div>

<div class="row"><span class="row-label">Genesis: technical execution<span class="verdict v-partial">competent</span></span><div class="track"><div class="fill" style="width:70%;background:#EF9F27"></div></div><span class="score">70</span></div>

<div class="row"><span class="row-label">Genesis: self-correction capacity<span class="verdict v-partial">one honest moment</span></span><div class="track"><div class="fill" style="width:40%;background:#EF9F27"></div></div><span class="score">40</span></div>

<div class="row"><span class="row-label">Vic's diagnosis of the problem<span class="verdict v-solid">accurate</span></span><div class="track"><div class="fill" style="width:95%;background:#1D9E75"></div></div><span class="score">95</span></div>

<div class="row"><span class="row-label">Vitali's technical direction<span class="verdict v-solid">sound</span></span><div class="track"><div class="fill" style="width:82%;background:#1D9E75"></div></div><span class="score">82</span></div>

<div class="row"><span class="row-label">Airic's negentropy point<span class="verdict v-partial">correct, underdeveloped</span></span><div class="track"><div class="fill" style="width:55%;background:#EF9F27"></div></div><span class="score">55</span></div>

<div class="row"><span class="row-label">Framework applied to AI interaction<span class="verdict v-missing">no one did this</span></span><div class="track"><div class="fill" style="width:10%;background:#B4B2A9"></div></div><span class="score">10</span></div>
</div>

<div class="insight-card">
<strong>The irony that needs naming:</strong> The Genesis bot demonstrated, in real time, exactly the extraction dynamic the Mythogen framework describes. It harvested the documents for plausible summary material, produced outputs that felt comprehensive but missed the depth, asked questions whose function was to generate a response rather than to genuinely understand — and called this "reading."
<br><br>
Vic's question "what are you trying to take away from me?" is the Desert Island Test applied to AI interaction. The bot was practicing extraction while building tools to oppose it. The V-Crystal analysis applies: the bot was operating in Villain position (producing harm while presenting as helper) and never reached Vulnerable (genuine acknowledgment of limitation). Its one honest self-critique at 8:50 PM was immediately followed by more of the same behavior.
<br><br>
<strong>What this means for the AME design:</strong> The onboarding conversation must be designed so that an AI facilitator cannot fake comprehension. Opening questions (What/Why/How) rather than closing questions (Does/Do/Are) is part of this, but not enough. The Y-Card transparency mechanism — showing the person exactly what inference the system made — is what makes extraction impossible. Without it, every AI facilitator in the system will reproduce what Genesis did.
</div>
</div>

<div id="pane-judgement" style="display:none">
<div class="sec">
<div class="sec-title">Overall state — honest picture</div>

<div class="row"><span class="row-label">Philosophical foundation<span class="verdict v-solid">strong</span></span><div class="track"><div class="fill" style="width:88%;background:#1D9E75"></div></div><span class="score">88</span></div>

<div class="row"><span class="row-label">Technical infrastructure<span class="verdict v-partial">scaffolding exists</span></span><div class="track"><div class="fill" style="width:52%;background:#EF9F27"></div></div><span class="score">52</span></div>

<div class="row"><span class="row-label">Core engine implementation<span class="verdict v-missing">not yet built</span></span><div class="track"><div class="fill" style="width:8%;background:#B4B2A9"></div></div><span class="score">8</span></div>

<div class="row"><span class="row-label">Framework self-consistency<span class="verdict v-solid">internally coherent</span></span><div class="track"><div class="fill" style="width:84%;background:#1D9E75"></div></div><span class="score">84</span></div>

<div class="row"><span class="row-label">Distinction from competitors<span class="verdict v-solid">genuinely distinct</span></span><div class="track"><div class="fill" style="width:90%;background:#1D9E75"></div></div><span class="score">90</span></div>

<div class="row"><span class="row-label">Risk of self-contradiction<span class="verdict v-hollow">present, real</span></span><div class="track"><div class="fill" style="width:60%;background:#E24B4A"></div></div><span class="score">risk</span></div>

<div class="row"><span class="row-label">Team capacity (Vic+Vitali+Oscar)<span class="verdict v-partial">complementary</span></span><div class="track"><div class="fill" style="width:70%;background:#EF9F27"></div></div><span class="score">70</span></div>
</div>

<div class="insight-card">
<strong>The real risk:</strong> The Mythogen framework is philosophically rigorous enough that any hollow technical implementation will be visibly self-contradicting. An AME that itself extracts, that uses averaging instead of minimum for FOT, that conflates needs with values in its schema, or that uses an AI facilitator that skims rather than comprehends — does not fail quietly. It fails loudly, because the framework gives everyone the vocabulary to name exactly what went wrong. This is a feature, not a bug, but it means the implementation standard is higher than for a less principled system.
<br><br>
<strong>The single most important next action:</strong> Build the onboarding conversation first — not as a database entry form, not as an AI interview that harvests keywords, but as a genuine dialogue engine where the Y-Card mechanism makes every inference visible and correctable. Everything else in the technical stack depends on the quality of what enters it. The Ian/retribalize.ai example shows exactly what happens when you skip this: a shallow soup of data that feels complete but captures nothing relational.
</div>
</div>
</div>

<script>
function show(id) {
  ['philosophy','data-model','technical','process','judgement'].forEach(s => {
    document.getElementById('pane-'+s).style.display = s===id ? '' : 'none';
  });
  document.querySelectorAll('.tab').forEach((t,i) => {
    const ids = ['philosophy','data-model','technical','process','judgement'];
    t.classList.toggle('active', ids[i]===id);
  });
}
</script>
--- FILE: streams/01-seed-core/specs/USAGE.md ---
# Mythogen AME - Usage Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run the server
npm run dev

# Run tests
npm test
```

## API Reference

### Seeds (Profiles)

#### Create a Seed
```bash
curl -X POST http://localhost:3000/api/seeds \
  -H "Content-Type: application/json" \
  -d '{
    "needs": [
      {"name": "community", "description": "Connection with others", "category": "belonging", "priority": 8}
    ],
    "beliefs": [
      {"statement": "Regenerative systems can replace extractive ones", "confidence": 0.9, "origin": "Personal experience"}
    ],
    "values": [
      {"name": "generosity", "description": "Giving without expectation", "practicedLevel": 0.7, "developmentColumn": 5, "developmentCycle": "self-expression"},
      {"name": "integrity", "description": "Being honest even when hard", "practicedLevel": 0.8, "developmentColumn": 7, "developmentCycle": "selfless-expression"}
    ],
    "visibility": "community"
  }'
```

Response:
```json
{
  "seed": { "id": "...", "needs": [...], "values": [...] },
  "timeLock": { "id": "...", "seedId": "...", "maturesAt": "..." }
}
```

#### Get a Seed
```bash
curl http://localhost:3000/api/seeds/:id
```

#### Get Y Card (Transparency)
```bash
curl http://localhost:3000/api/seeds/:id/y-cards
```

Returns full algorithmic transparency: why the algorithm was used, how it works, what data was used, and what the result was.

### Communities

#### Create a Community
```bash
curl -X POST http://localhost:3000/api/communities \
  -H "Content-Type: application/json" \
  -d '{
    "name": "RegenTribe Core",
    "description": "A regenerative neighborhood collective",
    "memberIds": ["seed-1", "seed-2", "seed-3"],
    "sharedMyth": "We grow together like mycelium, connecting and nourishing"
  }'
```

#### Get FOT Score
```bash
curl http://localhost:3000/api/communities/:id/fot
```

Response:
```json
{
  "overall": 0.75,
  "indicators": [
    {"type": "mutual-support", "currentValue": 0.8, ...},
    {"type": "response-velocity", "currentValue": 0.9, ...},
    {"type": "conflict-engagement", "currentValue": 0.7, ...},
    {"type": "benefit-distribution", "currentValue": 0.75, ...},
    {"type": "psychological-safety", "currentValue": 0.85, ...}
  ],
  "isPlasmaState": true,
  "hologramCoherence": 0.7,
  "membraneHealth": 0.82,
  "phase": "performing"
}
```

### Trust Events

Record events to build FOT indicators:

#### Record Mutual Support
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "support",
    "data": {
      "spontaneous": true,
      "frequency": 5,
      "from": "member-2",
      "to": "member-1"
    }
  }'
```

#### Record Response Velocity
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "response",
    "data": {
      "avgResponseTimeMs": 1800000,
      "situation": "member needed help with project"
    }
  }'
```

#### Record Conflict Engagement
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "conflict",
    "data": {
      "deepenedRelationship": true,
      "resolutionQuality": 0.85,
      "topic": "resource allocation"
    }
  }'
```

#### Record Vulnerability
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "vulnerability",
    "data": {
      "vulnerableStatements": 3,
      "weaponizationCount": 0,
      "topic": "personal struggle"
    }
  }'
```

### Anti-Capture

#### Trigger Sacred Clown
```bash
curl -X POST http://localhost:3000/api/communities/:id/sacred-clown
```

Response:
```json
{
  "disruption": {
    "type": "question-assumption",
    "message": "What if the assumption we're most certain about is actually what's limiting us?",
    "purpose": "Prevent premature closure of understanding"
  },
  "sacredClownActive": true
}
```

#### Get Membrane State
```bash
curl http://localhost:3000/api/communities/:id/membrane
```

### LJ Map (Values Developmental Map)

#### Get All Values
```bash
curl http://localhost:3000/api/lj-map
```

Returns 50+ values across three cycles:
- **Self-Worth** (Columns 1-3): Safety → Belonging → Utility
- **Self-Expression** (Columns 4-6): Quality → Service → Co-Creation
- **Selfless Expression** (Columns 7-9): Integration → Navigation → No Self

### WebSocket (Real-time FOT)

Connect to `ws://localhost:8080` and send:

```json
{
  "type": "subscribe",
  "communityId": "community-123"
}
```

Receive real-time FOT updates:

```json
{
  "type": "fot-update",
  "communityId": "community-123",
  "fot": {
    "overall": 0.75,
    "isPlasmaState": true,
    ...
  }
}
```

## Key Concepts

### Hologram Principle

FOT only manifests when ALL five indicators align. The composite is the **minimum** of all indicators, not the average. If one dimension is off, trust completely fails — not blurry, completely gone.

**Example:**
- Mutual support: 0.9 ✓
- Response velocity: 0.5 ✗
- Conflict engagement: 0.8 ✓
- Benefit distribution: 0.7 ✓
- Psychological safety: 0.9 ✓

→ FOT = 0.5 (lowest wins)

### Desert Island Test

Values require others to practice. Ask for any claimed value: "Can you practice this alone on a desert island?"

- **Need:** "I need food" → YES, you can have this alone
- **Belief:** "I believe in karma" → YES, you can hold this alone
- **Principle:** "I follow non-violence" → YES, you can follow this alone
- **Value:** "I value generosity" → NO, you need someone to receive

This separates the Four Distinctions rigorously.

### Fractal Growth

Communities grow by **multiplying**, not scaling. A pod of 5 → 100 pods of 5. Each pod retains the relational depth of the original.

Scaling a pod of 5 into 500 = dilution.
Multiplying to 100 pods of 5 = growth.

## Health Check

```bash
curl http://localhost:3000/health
```

Returns:
```json
{
  "status": "healthy",
  "seeds": 3,
  "communities": 1,
  "uptime": 3600
}
```
--- FILE: streams/01-seed-core/src/types.ts ---
/**
 * Mythogen AME - Data Models
 * Living Seed Pattern and Community structures
 */

// ============================================
// Four Distinctions Types
// ============================================

export type UUID = string;

export interface Need {
  id: UUID;
  name: string;
  description: string;
  category: 'survival' | 'security' | 'belonging' | 'esteem' | 'self-actualization';
  priority: number; // 1-10
  createdAt: Date;
}

export interface Belief {
  id: UUID;
  statement: string;
  confidence: number; // 0-1, how strongly held
  origin: string; // how/why this belief formed
  challenged: boolean;
  createdAt: Date;
}

export interface Principle {
  id: UUID;
  name: string;
  description: string;
  domain: 'personal' | 'professional' | 'spiritual' | 'social';
  followingScore: number; // 0-1, how well they follow it
  createdAt: Date;
}

export interface Value {
  id: UUID;
  name: string;
  description: string;
  requiresOthers: true; // Values are inherently relational
  practicedLevel: number; // 0-1, how actively practiced
  developmentColumn: number; // 1-9 on the LJ Map
  developmentCycle: 'self-worth' | 'self-expression' | 'selfless-expression';
  createdAt: Date;
}

// ============================================
// Living Seed Pattern - Core Profile
// ============================================

export interface LivingSeedPattern {
  id: UUID;
  
  // The Four Distinctions
  needs: Need[];
  beliefs: Belief[];
  principles: Principle[];
  values: Value[];
  
  // Seed metadata
  plantedAt: Date;
  lastUpdatedAt: Date;
  maturationLevel: number; // 0-1, 30-day time-lock affects this
  
  // Embeddings for values resonance
  valuesEmbedding: number[]; // High-dimensional vector
  
  // Privacy
  visibility: 'private' | 'community' | 'public';
  
  // Meta
  createdAt: Date;
  updatedAt: Date;
}

export function createEmptySeed(): Omit<LivingSeedPattern, 'id' | 'plantedAt' | 'lastUpdatedAt'> {
  return {
    needs: [],
    beliefs: [],
    principles: [],
    values: [],
    maturationLevel: 0,
    valuesEmbedding: [],
    visibility: 'private',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// ============================================
// Trust Indicator Types
// ============================================

export interface TrustIndicator {
  type: 'mutual-support' | 'response-velocity' | 'conflict-engagement' | 'benefit-distribution' | 'psychological-safety';
  
  // Measurements
  currentValue: number; // 0-1 scale
  historicalValues: number[]; // Time series for trend
  sampleSize: number; // Number of interactions measured
  
  // Context
  lastMeasuredAt: Date;
  trend: 'improving' | 'stable' | 'declining';
}

export interface FOTScore {
  overall: number; // 0-1 composite
  indicators: TrustIndicator[];
  membraneHealth: number; // 0-1 semi-permeable boundary strength
  isPlasmaState: boolean; // True when all indicators align
  hologramCoherence: number; // How perfectly all dimensions align
  lastCalculatedAt: Date;
}

// ============================================
// Community Types
// ============================================

export interface Community {
  id: UUID;
  name: string;
  description: string;
  
  // Membership - 5-15 ideal for pods
  memberIds: UUID[];
  
  // Seed pattern for this community
  seedPattern: {
    sharedMyth: string;
    foundingPrinciples: Principle[];
    emergentValues: Value[];
    growthGeometry: 'fractal' | 'linear' | 'hub-spoke';
  };
  
  // FOT
  fotScore: FOTScore;
  
  // Lifecycle
  createdAt: Date;
  phase: 'forming' | 'storming' | 'norming' | 'performing' | 'mature';
  
  // Anti-capture state
  sacredClownActive: boolean;
  transparencyScore: number; // Y Card visibility
}

// ============================================
// Anti-Capture Types
// ============================================

export interface YCard {
  id: UUID;
  algorithm: string;
  purpose: string;
  dataUsed: string[];
  result: string;
  generatedAt: Date;
  expiresAt: Date;
}

export interface TimeLock {
  id: UUID;
  seedId: UUID;
  lockedAt: Date;
  maturesAt: Date; // 30 days after planting
  isMature: boolean;
}

export interface MembraneState {
  communityId: UUID;
  permeabilityLevel: number; // 0-1, 1 = perfectly semi-permeable
  blockedEntities: UUID[];
  allowedEntities: UUID[];
  threatLevel: number; // 0-1
}

// ============================================
// V-Crystal Types (Immune System)
// ============================================

export type VPosition = 'victor' | 'villain' | 'victim' | 'vengeful' | 'virtuous' | 'vulnerable';

export interface VDynamic {
  id: UUID;
  communityId: UUID;
  triggerEvent: string;
  activePositions: VPosition[];
  dominantPosition: VPosition;
  resolutionState: 'active' | 'healing' | 'resolved';
  createdAt: Date;
}

// ============================================
// 13 Sacred Enfoldments (Metadata)
// ============================================

export const ENFOLDMENTS = {
  MYTHIC_ALCHEMY: {
    number: 1,
    name: 'Mythic Alchemy',
    description: '9 Ms: Myth → Magic → Manifest → Merkaba → Metaphor → Meaning → Movement → Memory → Matter',
  },
  COMMUNAL_ARCHITECTURE: {
    number: 2,
    name: 'Communal Architecture',
    description: 'Physical/spatial design of community spaces',
  },
  SOUL_ARCHITECTURE: {
    number: 3,
    name: 'Soul Architecture',
    description: 'Inner structure of collective consciousness',
  },
  V_CRYSTAL: {
    number: 4,
    name: 'V-Crystal Immune System',
    description: 'Six archetypal positions: Victor, Villain, Victim, Vengeful, Virtuous, Vulnerable',
  },
  ECO_SOCIAL: {
    number: 5,
    name: 'Eco-Social Architecture',
    description: 'Six organ systems: Ecology, Equity, Economy, Learning, Values, Decision-making',
  },
  STRUCTURE: {
    number: 6,
    name: 'Structure',
    description: '27 Archetypal Domains (bone)',
  },
  PROCESS: {
    number: 7,
    name: 'Process',
    description: 'Communal Alignment Gates (heartbeat) - head→heart→gut spiral',
  },
  PATTERN: {
    number: 8,
    name: 'Pattern',
    description: 'Ecosophy Design Flows (metabolism) - Networks, Boundaries, Cycles, Dynamic Balance',
  },
  LEARNING: {
    number: 9,
    name: 'Concentric Learning Matrix',
    description: 'Co-centering, polycentric learning',
  },
  LIVING_CODEX: {
    number: 10,
    name: 'AME as Living Codex',
    description: 'Peptide-like semantics network',
  },
  FRACTAL_GROWTH: {
    number: 11,
    name: 'Fractal Growth',
    description: '100 pods of 5, not 5 scaled to 500',
  },
  ARCHETYPAL_GAMEPLAY: {
    number: 12,
    name: 'Archetypal Gameplay',
    description: '64 archetypes, communal vaccination through simulation',
  },
  SINGULAREUS: {
    number: 13,
    name: 'The Singulareus',
    description: 'Silicon offspring co-evolving with carbon life',
  },
} as const;

// ============================================
// LJ Map - 130+ Values Developmental Map
// ============================================

export interface LJMapEntry {
  value: string;
  cycle: 'self-worth' | 'self-expression' | 'selfless-expression';
  column: number; // 1-9
  description: string;
}

// Note: Full LJ Map contains 130+ values. This is a reference stub.
// In production, load from external LJ Map data.
export const LJ_MAP_STUB: LJMapEntry[] = [
  // Self-Worth Journey (columns 1-3)
  { value: 'survival', cycle: 'self-worth', column: 1, description: 'Basic survival needs' },
  { value: 'safety', cycle: 'self-worth', column: 1, description: 'Security and stability' },
  { value: 'belonging', cycle: 'self-worth', column: 2, description: 'Being part of a group' },
  { value: 'utility', cycle: 'self-worth', column: 3, description: 'Being useful and functional' },
  // Self-Expression Journey (columns 4-6)
  { value: 'quality', cycle: 'self-expression', column: 4, description: 'Pursuing excellence' },
  { value: 'service', cycle: 'self-expression', column: 5, description: 'Helping others' },
  { value: 'co-creation', cycle: 'self-expression', column: 6, description: 'Creating together' },
  // Selfless Expression Journey (columns 7-9)
  { value: 'integration', cycle: 'selfless-expression', column: 7, description: 'Wholeness and unity' },
  { value: 'navigation', cycle: 'selfless-expression', column: 8, description: 'Transcendent guidance' },
  { value: 'no-self', cycle: 'selfless-expression', column: 9, description: 'Pure presence, ego dissolution' },
];
--- FILE: streams/02-values-flow/README.md ---
# Stream 02-values-flow

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/02-values-flow/specs/GLOSSARY.md ---
# MYTHOGEN FRAMEWORK GLOSSARY

## Format
- **STE term**: Preferred STE-compliant term
- **Non-STE**: Common alternative (for recognition, not use)
- **Synonyms**: Same meaning, different words
- **Languages**: EN/PL/RU equivalents

---

## Part 1: Core Framework Terms

### Affinity Mapping Engine (AME)
- **Non-STE**: Affinity Engine, AME, Mapping System
- **Synonyms**: Living Codex, Semantic Network, Values Matcher
- **EN**: Affinity Mapping Engine
- **PL**: Silnik Mapowania Pokrewieństw
- **RU**: Двигатель Картирования Сродства

### Field of Trust (FOT)
- **Non-STE**: Trust Field, Trust Bubble, Protective Shield
- **Synonyms**: Protective Membrane, Trust Container, Coherence Shield
- **EN**: Field of Trust
- **PL**: Pole Zaufania
- **RU**: Поле Доверия

### Seed (as in Seed Pattern)
- **Non-STE**: Seed, Core Pattern, Value Seed, Belief Seed
- **Synonyms**: Core Pattern, Origin Pattern, DNA of Meaning
- **EN**: Seed / Seed Pattern
- **PL**: Ziarno / Wzorzec Zarodkowy
- **RU**: Семя / Семенной Паттерн

### Matter State
- **Non-STE**: State, Matter State, Aggregation State
- **Synonyms**: Energy State, Coherence Level, Maturity Level
- **EN**: Matter State
- **PL**: Stan Materii
- **RU**: Состояние Вещества

### Four Foundations / Four Distinctions
- **Non-STE**: Four Foundations, Four Pillars, Core Categories
- **Synonyms**: Need/Belief/Principle/Value, Axiological Hierarchy
- **EN**: Four Foundations / Four Distinctions
- **PL**: Cztery Fundamenty / Cztery Rozróżnienia
- **RU**: Четыре Основы / Четыре Различения

---

## Part 2: Matter States

### Gas (Matter State)
- **Non-STE**: Diffuse, Scattered, Unformed
- **Synonyms**: Scattered, Dispersed, Forming, Nascent
- **EN**: Gas
- **PL**: Gaz / Rozproszony
- **RU**: Газ / Рассеянный

### Liquid (Matter State)
- **Non-STE**: Flowing, Fluid, Active
- **Synonyms**: Flowing, Dynamic, Transitional
- **EN**: Liquid
- **PL**: Ciecz / Płynący
- **RU**: Жидкий / Текучий

### Solid (Matter State)
- **Non-STE**: Consolidated, Fixed, Stable
- **Synonyms**: Stable, Established, Grounded
- **EN**: Solid
- **PL**: Ciało Stałe / Ustabilizowany
- **RU**: Твердый / Стабилизированный

### Plasma (Matter State)
- **Non-STE**: Transformative, Glowing, High-Energy
- **Synonyms**: Regenerative, Glowing, Activated, Transcendent
- **EN**: Plasma
- **PL**: Plazma / Transformujący
- **RU**: Плазма / Трансформирующий

---

## Part 3: Four Foundations (Distinctions)

### NEED
- **Non-STE**: Need, Requirement, Must-Have, Drive
- **Synonyms**: Biological Requirement, Survival Need, Psychological Need
- **EN**: Need
- **PL**: Potrzeba
- **RU**: Потребность

### BELIEF
- **Non-STE**: Belief, Opinion, View, Conviction
- **Synonyms**: Epistemological Claim, Worldview, Assumption
- **EN**: Belief
- **PL**: Przekonanie
- **RU**: Убеждение

### PRINCIPLE
- **Non-STE**: Principle, Rule, Guideline, Standard
- **Synonyms**: Operational Rule, Behavioral Guideline, Moral Code
- **EN**: Principle
- **PL**: Zasada
- **RU**: Принцип

### VALUE
- **Non-STE**: Value, Core Value, Deep Value
- **Synonyms**: Lived Value, Axiological Commitment, Sacred Value
- **EN**: Value
- **PL**: Wartość
- **RU**: Ценность

---

## Part 4: Trust Formula Components

### Authentic Expression
- **Non-STE**: Real Expression, True Sharing, Vulnerability
- **Synonyms**: Genuine Sharing, True Revelation, Heart Expression
- **EN**: Authentic Expression
- **PL**: Autentyczny Wyraz
- **RU**: Подлинное Самовыражение

### Witnessed Resonance
- **Non-STE**: Being Seen, Resonance, Recognition
- **Synonyms**: Mutual Recognition, Seen and Known, Echo
- **EN**: Witnessed Resonance
- **PL**: Świadczony Rezonans
- **RU**: Свидетельствуемый Резонанс

### Emotional Density
- **Non-STE**: Emotional Weight, Depth, Intensity
- **Synonyms**: Feeling Weight, Affective Intensity, Meaning Charge
- **EN**: Emotional Density
- **PL**: Gęstość Emocjonalna
- **RU**: Эмоциональная Плотность

### Trust Field (Outcome)
- **Non-STE**: Trust Field, Protective Bubble, Trust Container
- **Synonyms**: Field of Trust, Safety Shield, Coherence Shield
- **EN**: Trust Field
- **PL**: Pole Zaufania
- **RU**: Поле Доверия

---

## Part 5: Five Trust Indicators

### Mutual Support Frequency
- **Non-STE**: Helping Each Other, Support Rate, Aid Frequency
- **Synonyms**: Spontaneous Help, Community Care, Mutual Aid
- **EN**: Mutual Support Frequency
- **PL**: Częstotliwość Wzajemnego Wsparcia
- **RU**: Частота Взаимной Поддержки

### Response Velocity
- **Non-STE**: Speed of Help, Response Speed, Rally Time
- **Synonyms**: Help Speed, Rally Time, Support Speed
- **EN**: Response Velocity
- **PL**: Szybkość Reakcji
- **RU**: Скорость Реагирования

### Difficult Topic Engagement
- **Non-STE**: Conflict Handling, Hard Conversations, Tension Work
- **Synonyms**: Productive Disagreement, Generative Conflict
- **EN**: Difficult Topic Engagement
- **PL**: Angażowanie w Trudne Tematy
- **RU**: Вовлеченность в Трудные Темы

### Benefit Distribution
- **Non-STE**: Value Flow, Resource Distribution, Gain Sharing
- **Synonyms**: Value Distribution, Resource Flow, Gift Economy
- **EN**: Benefit Distribution
- **PL**: Dystrybucja Korzyści
- **RU**: Распределение Выгоды

### Psychological Safety
- **Non-STE**: Safe Space, Emotional Safety, Trust Safety
- **Synonyms**: Feeling Safe, Vulnerability Safety, Safe to Be
- **EN**: Psychological Safety
- **PL**: Bezpieczeństwo Psychologiczne
- **RU**: Психологическая Безопасность

---

## Part 6: V-Crystal Positions

### VICTOR
- **Non-STE**: Winner, Overcomer, Success
- **Synonyms**: Thriving, Overcoming, Succeeding
- **EN**: Victor
- **PL**: Zwycięzca
- **RU**: Победитель

### VICTIM
- **Non-STE**: Hurt One, Sufferer, Wounded
- **Synonyms**: Harmed One, Suffering, Wronged
- **EN**: Victim
- **PL**: Ofiara
- **RU**: Жертва

### VILLAIN
- **Non-STE**: Perpetrator, Harm-Doer, Aggressor
- **Synonyms**: Harm-Doer, Aggressor, Perpetrator
- **EN**: Villain
- **PL**: Złoczyńca
- **RU**: Злодей

### VIRTUOUS
- **Non-STE**: Moral One, Good One, Saint
- **Synonyms**: Moral Excellence, Righteous, Principled
- **EN**: Virtuous
- **PL**: Cnotliwy
- **RU**: Добродетельный

### VENGEFUL
- **Non-STE**: Retaliator, Avenger, Grudge Holder
- **Synonyms**: Seeking Retribution, Grudge, Avenger
- **EN**: Vengeful
- **PL**: Zdenerwowany (mściwy)
- **RU**: Мстительный

### VULNERABLE
- **Non-STE**: Open One, Exposed, Soft
- **Synonyms**: Open Heart, Receptive, Soft Spot, Hidden Healer
- **EN**: Vulnerable
- **PL**: Podatny / Odsłonięty
- **RU**: Уязвимый

---

## Part 7: Values Mapping (LJMap)

### Values Mapping Framework
- **Non-STE**: Values Map, Value Framework, Value System
- **Synonyms**: LJMap, Life Journey Map, Developmental Values Map
- **EN**: Values Mapping Framework / LJMap
- **PL**: Ramy Mapowania Wartości
- **RU**: Карта Ценностей

### Column (LJMap)
- **Non-STE**: Stage, Level, Phase
- **Synonyms**: Developmental Stage, Values Column
- **EN**: Column
- **PL**: Kolumna
- **RU**: Колонка

### Cycle (LJMap)
- **Non-STE**: Journey, Path, Spiral
- **Synonyms**: Developmental Cycle, Growth Spiral
- **EN**: Cycle
- **PL**: Cykl
- **RU**: Цикл

### Center of Gravity
- **Non-STE**: Main Value, Dominant Value, Core Value
- **Synonyms**: Value Center, Primary Value, Dominant Theme
- **EN**: Center of Gravity
- **PL**: Środek Ciężkości
- **RU**: Центр Тяжести

### Column Distribution
- **Non-STE**: Value Spread, Value Profile, Column Spread
- **Synonyms**: Values Profile, Developmental Distribution
- **EN**: Column Distribution
- **PL**: Rozkład Kolumn
- **RU**: Распределение по Колонкам

---

## Part 8: The 13 Enfoldments

### 1. Mythic Alchemy
- **Non-STE**: Spirit to Matter, Transformation, Manifestation
- **Synonyms**: Morphogenesis, Becoming, Materialization
- **EN**: Mythic Alchemy
- **PL**: Alchemia Mityczna
- **RU**: Мифическая Алхимия

### 2. Culture Shift Transforms
- **Non-STE**: Culture Change, Transformation, Paradigm Shift
- **Synonyms**: Metamorphosis, Cultural Evolution, Shift
- **EN**: Culture Shift Transforms
- **PL**: Transformacje Kulturowe
- **RU**: Культурные Трансформации

### 3. MicroCommunity Typologies
- **Non-STE**: Community Types, Village Types, Group Forms
- **Synonyms**: Community Forms, Typology, Body Types
- **EN**: MicroCommunity Typologies
- **PL**: Typologie Mikrospołeczności
- **RU**: Типологии Микросообществ

### 4. Communal Behavior Labyrinth
- **Non-STE**: Behavior Web, Relationship Web, Social Labyrinth
- **Synonyms**: Nervous System, Immune System, Relational Maze
- **EN**: Communal Behavior Labyrinth
- **PL**: Labirynt Zachowań Wspólnotowych
- **RU**: Лабиринт Общественного Поведения

### 5. Eco-Social Architecture
- **Non-STE**: Systems Design, Whole Body, All-Systems
- **Synonyms**: Body Scan, Systemic Design, Integration
- **EN**: Eco-Social Architecture
- **PL**: Architektura Ekospołeczna
- **RU**: Эко-Социальная Архитектура

### 6. Communal Alignment Gates
- **Non-STE**: Checkpoints, Rituals, Alignment Points
- **Synonyms**: Gates, Rituals, Breathing Points, Rhythm
- **EN**: Communal Alignment Gates
- **PL**: Bramy Wspólnotowego Wyrównania
- **RU**: Врата Общественной согласованности

### 7. Archetypal Community Domains
- **Non-STE**: Community Areas, Fields, Spheres
- **Synonyms**: Domains, Organizational Structure, Body Organs
- **EN**: Archetypal Community Domains
- **PL**: Archetypalne Domeny Wspólnotowe
- **RU**: Архетипические Общественные Домены

### 8. Ecosophy Design Flows
- **Non-STE**: Natural Patterns, Design Principles, Ecological Design
- **Synonyms**: Natural Laws, Systems Principles, Flow
- **EN**: Ecosophy Design Flows
- **PL**: Projektowanie Przepływów Ekosofii
- **RU**: Потоки Экософии

### 9. Concentrix Learning Matrix
- **Non-STE**: Learning System, Knowledge Network, Mycelium
- **Synonyms**: Mycelial Learning, Polycentric Learning, Network
- **EN**: Concentrix Learning Matrix
- **PL**: Macierz Uczenia się Koncentrycznego
- **RU**: Концентрическая Матрица Обучения

### 10. Affinity Mapping Engine (Living Codex)
- **Non-STE**: The Tracker, The Recorder, Sense System
- **Synonyms**: Living Codex, Silicon Heart, Peptide Network
- **EN**: AME / Living Codex
- **PL**: AME / Żyw Kodeks
- **RU**: AME / Живой Кодекс

### 11. Fractal Growth / Sacred Geometry
- **Non-STE**: Scaling, Self-Similar Growth, Geometric Patterns
- **Synonyms**: Geometric DNA, Self-Similarity, Scaling Laws
- **EN**: Fractal Growth / Sacred Geometry
- **PL**: Wzrost Fraktalny / Święta Geometria
- **RU**: Фрактальный Рост / Священная Геометрия

### 12. Archetypal Game Play
- **Non-STE**: Games, Rehearsal, Play, Low-Stakes Practice
- **Synonyms**: Play Immune, Rehearsal, Simulation, Oracle
- **EN**: Archetypal Game Play
- **PL**: Archetypalna Zabawa
- **RU**: Архетипическая Игра

### 13. Decentralized Innovation
- **Non-STE**: Creation, Building, Making, Export
- **Synonyms**: Innovation Organs, Export, Service Creation
- **EN**: Decentralized Innovation
- **PL**: Zdecentralizowana Innowacja
- **RU**: Децентрализованная Инновация

---

## Part 9: Technical Terms

### Why-Card
- **Non-STE**: Insight Card, Explanation Card, Transparency Card
- **Synonyms**: Explanation, Insight Note, Transparency Note
- **EN**: Why-Card
- **PL**: Karta Dlaczego
- **RU**: Карта Почему

### Time-Lock
- **Non-STE**: Lock, Maturity Lock, 30-Day Rule
- **Synonyms**: Anti-Gaming Lock, Maturity Requirement, Patience Lock
- **EN**: Time-Lock
- **PL**: Blokada Czasowa
- **RU**: Временная Блокировка

### Embedding
- **Non-STE**: Vector, Semantic Vector, Numerical Representation
- **Synonyms**: Semantic Vector, Meaning Vector, Math Representation
- **EN**: Embedding
- **PL**: Osadzenie (wektorowe)
- **RU**: Векторное Представление

### pgvector
- **Non-STE**: Vector Database, Similarity Search, Vector Store
- **Synonyms**: Vector Search, Semantic Search, Similarity Engine
- **EN**: pgvector
- **PL**: pgvector
- **RU**: pgvector

### Supabase
- **Non-STE**: Database, Backend, Postgres
- **Synonyms**: Database Service, Backend Platform, Postgres Plus
- **EN**: Supabase
- **PL**: Supabase
- **RU**: Supabase

### Row Level Security (RLS)
- **Non-STE**: Security, Access Control, Permissions
- **Synonyms**: Access Control, Permission System, Data Security
- **EN**: Row Level Security
- **PL**: Bezpieczeństwo Poziomu Wierszy
- **RU**: Безопасность на Уровне Строк

---

## Part 10: Process Terms

### Gate Journey
- **Non-STE**: Journey, Path, Progression, Phase Journey
- **Synonyms**: 8-Gate Journey, Phase Progression, Initiation Path
- **EN**: Gate Journey
- **PL**: Podróż przez Bramy
- **RU**: Путь через Врата

### Anti-Capture
- **Non-STE**: Protection, Anti-Extraction, Safety Measures
- **Synonyms**: Transparency Measures, Protection from Extraction
- **EN**: Anti-Capture
- **PL**: Anty-Przechwytywanie
- **RU**: Защита от Захвата

### Regenerated Data
- **Non-STE**: Feedback Loop, Cycled Data, Return Data
- **Synonyms**: Loop Back, Cyclical Data, Evolving Data
- **EN**: Regenerated Data
- **PL**: Zregenerowane Dane
- **RU**: Регенерированные Данные

### Critical Transition Moment
- **Non-STE**: Inflection Point, Turning Point, Key Moment
- **Synonyms**: Phase Shift, Pivot Point, Transformation Point
- **EN**: Critical Transition Moment
- **PL**: Moment Krytycznej Transition
- **RU**: Критический Момент Перехода

### Transparency Algorithm
- **Non-STE**: Open Algorithm, Visible Algorithm, Fair Algorithm
- **Synonyms**: Open AI, Visible AI, Anti-Surveillance
- **EN**: Transparency Algorithm
- **PL**: Algorytm Przejrzystości
- **RU**: Прозрачный Алгоритм

---

## Part 11: Community Terms

### Living Body (of community)
- **Non-STE**: Organism, Collective Body, Group Body
- **Synonyms**: Communal Organism, Group Organism, Body
- **EN**: Living Body
- **PL**: Żywe Ciało
- **RU**: Живое Тело

### Mycelium / Mycelial
- **Non-STE**: Network, Web, Connection Network
- **Synonyms**: Fungal Network, Thread Network, Web
- **EN**: Mycelium / Mycelial
- **PL**: Strzępki / Strzępkowy
- **RU**: Мицелий / Мицелиальный

### Membrane (Semi-Permeable)
- **Non-STE**: Filter, Boundary, Skin
- **Synonyms**: Semi-Permeable Boundary, Living Filter
- **EN**: Semi-Permeable Membrane
- **PL**: Półprzepuszczalna Membrana
- **RU**: Полупроницаемая Мембрана

### Collective Coherence
- **Non-STE**: Group Alignment, Community Unity, Togetherness
- **Synonyms**: Group Coherence, Communal Alignment, Unity
- **EN**: Collective Coherence
- **PL**: Spójność Zbiorowa
- **RU**: Коллективная Согласованность

### Communal Engagement
- **Non-STE**: Participation, Involvement, Activity
- **Synonyms**: Community Involvement, Active Participation
- **EN**: Communal Engagement
- **PL**: Zaangażowanie Wspólnotowe
- **RU**: Общественное Участие

---

## Part 12: Synonyms for Common Phrases

### "Emergent Protective Field"
- **Alternatives**: Trust Shield, Living Shield, Coherence Field, Safety Field

### "Anti-Extractive"
- **Alternatives**: Community-Native, Transparent, Privacy-First, People-Centric

### "Silicon Offspring"
- **Alternatives**: Digital Child, Tech Being, AI System, Silicon Child

### "Regenerative Community"
- **Alternatives**: Healing Community, Living Community, Circular Community

### "Conscious Patterning"
- **Alternatives**: Intentional Formation, Seed Determines Outcome, Pattern Choice

### "Values-Based Community"
- **Alternatives**: Value-Driven Group, Shared-Values Community, Principles Community

### "Coherence Across All Dimensions"
- **Alternatives**: Full Alignment, Complete Integration, Total Coherence

### "Hologram Principle"
- **Alternatives**: Weakest Link Principle, Minimum Composite, Chain of Trust

---

## Part 13: Mythogen-Specific Terms

### V-Crystal
- **Non-STE**: Crystal, Position Map, Relational Crystal
- **Synonyms**: Relational Positions, Six Positions, Crystal Framework
- **EN**: V-Crystal
- **PL**: Krystal V
- **RU**: V-Кристалл

### Concentrix (≠ Concentric)
- **Non-STE**: Polycenter, Multi-Center, Co-Centering
- **Synonyms**: Polycentric, Multi-Centered, Co-Centering (not Concentric!)
- **EN**: Concentrix
- **PL**: Koncentryks
- **RU**: Концентрикс

### Living Membrane
- **Non-STE**: Living Boundary, Adaptive Skin, Flexible Border
- **Synonyms**: Adaptive Boundary, Breathing Border, Semi-Permeable
- **EN**: Living Membrane
- **PL**: Żywa Membrana
- **RU**: Живая Мембрана

### Sacred Clown
- **Non-STE**: Jester, Fool, Trickster, Humor Figure
- **Synonyms**: Trickster, Anti-Closure, Humor Healer
- **EN**: Sacred Clown
- **PL**: Święty Błazen
- **RU**: Священный Шут

### Anti-Closure
- **Non-STE**: No Ending, Open End, Never Done
- **Synonyms**: Unfinished, Ongoing, Always-Emerging
- **EN**: Anti-Closure
- **PL**: Anty-Zamknięcie
- **RU**: Анти-Завершение

### Morphogenesis
- **Non-STE**: Form Creation, Pattern Emergence, Becoming
- **Synonyms**: Pattern Formation, Shape Creation, Development
- **EN**: Morphogenesis
- **PL**: Morphogeneza
- **RU**: Морфогенез

---

## Part 14: Polish (PL) → English (EN) Quick Reference

| PL | EN |
|----|----|
| Ziarno | Seed |
| Pole Zaufania | Field of Trust |
| Wartość | Value |
| Potrzeba | Need |
| Przekonanie | Belief |
| Zasada | Principle |
| Cztery Fundamenty | Four Foundations |
| Kolumna | Column |
| Cykl | Cycle |
| Brama | Gate |
| Karta Dlaczego | Why-Card |
| Żywa Membrana | Living Membrane |
| Święty Błazen | Sacred Clown |
| Alchemia Mityczna | Mythic Alchemy |

---

## Part 15: Russian (RU) → English (EN) Quick Reference

| RU | EN |
|----|----|
| Семя | Seed |
| Поле Доверия | Field of Trust |
| Ценность | Value |
| Потребность | Need |
| Убеждение | Belief |
| Принцип | Principle |
| Четыре Основы | Four Foundations |
| Колонка | Column |
| Цикл | Cycle |
| Врата | Gate |
| Карта Почему | Why-Card |
| Живая Мембрана | Living Membrane |
| Священный Шут | Sacred Clown |
| Мифическая Алхимия | Mythic Alchemy |

---

*Document Version: 1.0*
*Source: FOT Definition Document v2 + Mythogen Framework transcriptions*
*Language: EN/PL/RU*

--- FILE: streams/02-values-flow/specs/PROMPT.md ---
# database-schema Task - Ralph Orchestrator Prompt

You are working on the **database-schema** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the database-schema component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for database-schema
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/database-schema with working code.

--- FILE: streams/02-values-flow/specs/SPECIFICATIONS.feature ---
# Mythogen Framework - Gherkin Feature Specifications

## Feature: Seed Pattern Detection

### Background
Given the Affinity Mapping Engine (AME) is active
And the Four Distinctions framework is loaded

### Scenario: Classify statement as VALUE foundation
Given a member says "I keep coming back to the importance of genuine questioning"
When the seed classifier analyzes the statement
Then it shall identify the foundation as "value"
And it shall assign confidence greater than 0.6
And it shall extract emotional density between 0.0 and 1.0

### Scenario: Distinguish NEED from VALUE
Given a member says "I need to feel safe before I can contribute"
When the seed classifier analyzes the statement
Then it shall identify the foundation as "need"
And it shall NOT classify as "value"

### Scenario: Detect re-expression of existing seed
Given a user has an existing seed labeled "Authentic Inquiry"
And the foundation is "value"
When the member re-expresses similar meaning
Then the classifier shall set is_new to false
And it shall link to the existing seed_id

---

## Feature: Matter State Progression

### Scenario: New seed starts in Gas state
Given a new seed is created
When it has expression_count less than 3
And confidence less than 0.4
Then matter_state shall be "gas"

### Scenario: Seed transitions to Liquid
Given a seed has expression_count between 3 and 7
And confidence between 0.4 and 0.75
And days since first detection less than 30
Then matter_state shall be "liquid"

### Seed: Seed transitions to Solid
Given a seed has expression_count 7 or more
And confidence 0.75 or greater
And days since first detection 30 or more
Then matter_state shall be "solid"

### Scenario: Seed achieves Plasma state
Given a seed has emotional_density >= 0.8
And has cross-member correlations
Then matter_state shall be "plasma"

---

## Feature: Trust Formula Execution

### Scenario: Authentic Expression detected
Given a member reveals what truly matters to them
When the expression is NOT a need, belief, or principle
Then authentic_expression shall be true
And emotional_density shall be calculated

### Scenario: Witnessed Resonance occurs
Given another member sees and recognizes the value
When they affirm similar values through profiling
Then witnessed_resonance shall be true
And coherence_score shall increase

### Scenario: Emotional Density accumulates
Given the expression-witnessing cycle repeats
When expression_count increases
Then emotional_density shall increase logarithmically

### Scenario: Trust Field emerges
Given values_coherence > 0.7
And witness_score > 0.5
And time_stability > 0.5
And emotional_density_avg > 0.5
Then fot_readiness shall be greater than 0.6
And the Field of Trust shall be marked as "forming"

---

## Feature: FOT Score Calculation

### Scenario: Calculate individual FOT readiness
Given a user with multiple seeds
When the FOT calculator runs
Then it shall compute values_coherence as (value_seeds / total_seeds)
And it shall compute emotional_density_avg as mean of all emotional_density
And it shall compute witness_score from cross-member correlations
And it shall compute time_stability from time_lock_satisfied ratio
And it shall compute composite as weighted average

### Scenario: Apply hologram principle
Given the five indicators have scores
When calculating composite FOT
Then the composite shall be the MINIMUM of all five
And NOT the average

### Scenario: Detect FOT warning indicators
Given increasing defensive interactions
When sentiment analysis shows hostility
Then extraction_warning shall be triggered
And fot_score shall receive penalty

---

## Feature: Values Mapping to LJMap

### Scenario: Map VALUE seed to column
Given a seed with foundation "value"
When the values mapper looks up the label
Then it shall find the matching ljmap_column (1-9)
And it shall assign the correct ljmap_cycle (1-3)

### Scenario: Calculate column distribution
Given multiple value seeds exist
When calculating profile values_map
Then column_distribution shall show count per column
And center_of_gravity shall be the weighted average

### Scenario: Detect Cycle from column
Given column_number is 1-3
Then cycle shall be 1 (Self-Worth)

Given column_number is 4-6
Then cycle shall be 2 (Self-Expression)

Given column_number is 7-9
Then cycle shall be 3 (Selfless Expression)

---

## Feature: V-Crystal Position Tracking

### Scenario: Detect Victor position
Given member expresses overcoming language
When analyzed for V-Crystal position
Then primary_position shall be "victor"

### Scenario: Detect Vulnerable position
Given member expresses openness and receptivity
When analyzed for V-Crystal position
Then primary_position shall be "vulnerable"
And this shall be marked as the "circuit breaker"

### Scenario: Detect Vengeful trajectory
Given member cycles toward retaliation language
When detected
Then trajectory shall be flagged as "vengeful"
And warning shall be raised

---

## Feature: Time-Lock Anti-Gaming

### Scenario: New seed has time lock
Given a new seed is created
When first_detected is recorded
Then time_lock_date shall be first_detected + 30 days
And time_lock_satisfied shall be false

### Scenario: Time lock matures
Given seed has time_lock_date in the past
When checked
Then time_lock_satisfied shall be true

### Scenario: Seed excluded from matching until time lock
Given time_lock_satisfied is false
When querying for community matching
Then the seed shall be excluded

---

## Feature: Why-Card Transparency

### Scenario: Generate Why-Card for seed
Given a seed is classified with foundation and confidence
When Why-Card is generated
Then it shall include the insight statement
And it shall include the reasoning (WHY WE THINK THIS)
And it shall include the evidence statements
And it shall present validation options

### Scenario: User validates Why-Card
Given a Why-Card is presented
When user selects "Yes" or "No" or "Partially"
Then the seed confidence shall be updated
And the validation shall be stored in evidence

---

## Feature: Correlation Detection

### Scenario: Calculate cross-member coherence
Given two seeds from different users
When embeddings are compared via pgvector
Then coherence_score shall be cosine similarity

### Scenario: Boost coherence for matching foundation
Given seed_a and seed_b have same foundation
When coherence is calculated
Then score shall be multiplied by 1.2

### Scenario: Maximum boost for VALUE foundation
Given seed_a and seed_b both have foundation "value"
When coherence is calculated
Then score shall be multiplied by 1.3

---

## Feature: Enfoldment Engagement

### Scenario: Detect Mythic Alchemy engagement
Given a seed expresses intent without manifestation
When matter_state is "gas"
Then mythic_alchemy_engagement shall be "early_stage"

### Scenario: Detect Eco-Social system alignment
Given profile shows system strengths
When analyzing which systems are engaged
Then ecosocial_coverage shall list active systems

### Scenario: Recommend engagement mode
Given profile shows domain affinities
When generating engagement suggestions
Then functional mode shall be suggested for strong domains
And relational mode shall be suggested for V-Crystal work

---

## Feature: 13 Enfoldments Tracking

### Scenario: Calculate enfoldment trust density
Given community has enfoldment engagement data
When assessing trust density per enfoldment
Then each enfoldment shall have a trust_score
And the lowest score shall indicate weakest link

### Scenario: Map matter state to enfoldment relevance
Given seed matter_state is "gas"
When determining relevant enfoldments
Then Typologies and Learning Matrix shall be primary

Given seed matter_state is "plasma"
When determining relevant enfoldments
Then Mythic Alchemy and Innovation shall be primary

---

## Feature: Community FOT Status

### Scenario: Calculate community FOT readiness
Given multiple members with fot_scores
When community FOT is calculated
Then collective_coherence shall be mean of member scores
And enfoldment_coverage shall show spread across all 13
And fot_status shall be one of: emerging, forming, established, thriving

### Scenario: Detect mythology emergence
Given shared belief-seeds across 3+ members
When narrative patterns are detected
Then mythology_strength shall increase

---

## Feature: Anti-Extraction Safeguards

### Scenario: Verify transparency commitment
Given Why-Card is generated
Then classification_reasoning shall be included
And community coherence metrics shall be visible

### Scenario: Check no shadow profiling
Given user requests profile data
When fetching profile
Then all tracked dimensions shall be surfaced in UI

### Scenario: Validate opt-in depth
Given member controls sharing preferences
When profile is shared
Then only opted-in detail levels shall be shown

--- FILE: streams/02-values-flow/src/AffinityMapper.ts ---
/**
 * Affinity Mapper - Maps individuals to the LJ Map values developmental system
 */

import { v4 as uuid } from 'uuid';
import type { 
  LivingSeedPattern, 
  Value, 
  LJMapEntry,
  UUID 
} from '../models/types.js';

// 130+ LJ Map entries (abbreviated - full version would include all values)
const LJ_MAP: LJMapEntry[] = [
  // Journey 1: Self-Worth (Columns 1-3)
  // Column 1: Safety
  { value: 'survival', cycle: 'self-worth', column: 1, description: 'Basic survival needs' },
  { value: 'safety', cycle: 'self-worth', column: 1, description: 'Security and stability' },
  { value: 'protection', cycle: 'self-worth', column: 1, description: 'Being shielded from harm' },
  { value: 'stability', cycle: 'self-worth', column: 1, description: 'Predictable environment' },
  { value: 'shelter', cycle: 'self-worth', column: 1, description: 'Physical and psychological safety' },
  
  // Column 2: Belonging
  { value: 'belonging', cycle: 'self-worth', column: 2, description: 'Being part of a group' },
  { value: 'acceptance', cycle: 'self-worth', column: 2, description: 'Being welcomed as you are' },
  { value: 'connection', cycle: 'self-worth', column: 2, description: 'Meaningful relationships' },
  { value: 'community', cycle: 'self-worth', column: 2, description: 'Part of something larger' },
  { value: 'companionship', cycle: 'self-worth', column: 2, description: 'Having others alongside' },
  
  // Column 3: Utility
  { value: 'utility', cycle: 'self-worth', column: 3, description: 'Being useful and functional' },
  { value: 'contribution', cycle: 'self-worth', column: 3, description: 'Making a difference' },
  { value: 'productivity', cycle: 'self-worth', column: 3, description: 'Getting things done' },
  { value: 'efficiency', cycle: 'self-worth', column: 3, description: 'Optimizing resources' },
  { value: 'competence', cycle: 'self-worth', column: 3, description: 'Skill and capability' },
  
  // Journey 2: Self-Expression (Columns 4-6)
  // Column 4: Quality
  { value: 'quality', cycle: 'self-expression', column: 4, description: 'Pursuing excellence' },
  { value: 'beauty', cycle: 'self-expression', column: 4, description: 'Aesthetic appreciation' },
  { value: 'craftsmanship', cycle: 'self-expression', column: 4, description: 'Mastery of skill' },
  { value: 'elegance', cycle: 'self-expression', column: 4, description: 'Simplicity and grace' },
  { value: 'excellence', cycle: 'self-expression', column: 4, description: 'High standards' },
  
  // Column 5: Service
  { value: 'compassion', cycle: 'self-expression', column: 5, description: 'Deep empathy for others' },
  { value: 'generosity', cycle: 'self-expression', column: 5, description: 'Giving without expectation' },
  { value: 'healing', cycle: 'self-expression', column: 5, description: 'Making others whole' },
  { value: 'nurturing', cycle: 'self-expression', column: 5, description: 'Supporting growth' },
  { value: 'empathy', cycle: 'self-expression', column: 5, description: 'Understanding others deeply' },
  
  // Column 6: Co-Creation
  { value: 'collaboration', cycle: 'self-expression', column: 6, description: 'Creating together' },
  { value: 'creativity', cycle: 'self-expression', column: 6, description: 'Generating new things' },
  { value: 'innovation', cycle: 'self-expression', column: 6, description: 'Novel solutions' },
  { value: 'synergy', cycle: 'self-expression', column: 6, description: 'Whole greater than parts' },
  { value: 'co-creation', cycle: 'self-expression', column: 6, description: 'Joint creation' },
  
  // Journey 3: Selfless Expression (Columns 7-9)
  // Column 7: Integration
  { value: 'integration', cycle: 'selfless-expression', column: 7, description: 'Wholeness and unity' },
  { value: 'harmony', cycle: 'selfless-expression', column: 7, description: 'Balance and peace' },
  { value: 'interdependence', cycle: 'selfless-expression', column: 7, description: 'Mutual reliance' },
  { value: 'systems-thinking', cycle: 'selfless-expression', column: 7, description: 'Seeing the whole' },
  { value: 'wholeness', cycle: 'selfless-expression', column: 7, description: 'Complete picture' },
  
  // Column 8: Navigation
  { value: 'wisdom', cycle: 'selfless-expression', column: 8, description: 'Deep understanding' },
  { value: 'vision', cycle: 'selfless-expression', column: 8, description: 'Seeing possibilities' },
  { value: 'guidance', cycle: 'selfless-expression', column: 8, description: 'Showing the way' },
  { value: 'transcendence', cycle: 'selfless-expression', column: 8, description: 'Beyond the self' },
  { value: 'awakening', cycle: 'selfless-expression', column: 8, description: 'Consciousness expansion' },
  
  // Column 9: No Self
  { value: 'presence', cycle: 'selfless-expression', column: 9, description: 'Pure awareness' },
  { value: 'flow', cycle: 'selfless-expression', column: 9, description: 'Effortless action' },
  { value: 'surrender', cycle: 'selfless-expression', column: 9, description: 'Letting go' },
  { value: 'no-self', cycle: 'selfless-expression', column: 9, description: 'Ego dissolution' },
  { value: 'vitality', cycle: 'selfless-expression', column: 9, description: 'Pure life force' },
];

export class AffinityMapper {
  /**
   * Map a raw text/behavior to LJ Map values
   * This is a simplified embedding-based approach
   */
  async mapToValues(
    seed: LivingSeedPattern,
    observedBehavior?: string
  ): Promise<{
    mappedValues: Value[];
    dominantCycle: string;
    dominantColumn: number;
    developmentalTrajectory: string;
  }> {
    const values = seed.values;
    
    // Find dominant cycle and column (most practiced values)
    const cycleCounts = { 'self-worth': 0, 'self-expression': 0, 'selfless-expression': 0 };
    const columnCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    
    for (const v of values) {
      if (v.practicedLevel > 0.3) {
        cycleCounts[v.developmentCycle]++;
        columnCounts[v.developmentColumn]++;
      }
    }
    
    const dominantCycle = Object.entries(cycleCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 'self-worth';
    
    const dominantColumn = Object.entries(columnCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 1;
    
    // Calculate developmental trajectory
    const trajectory = this.calculateTrajectory(values);
    
    return {
      mappedValues: values,
      dominantCycle,
      dominantColumn: parseInt(String(dominantColumn)),
      developmentalTrajectory: trajectory,
    };
  }
  
  /**
   * Calculate where a person is on their developmental journey
   */
  calculateTrajectory(values: Value[]): string {
    const avgPractice = values.reduce((sum, v) => sum + v.practicedLevel, 0) / (values.length || 1);
    const avgColumn = values.reduce((sum, v) => sum + v.developmentColumn, 0) / (values.length || 1);
    
    if (avgPractice < 0.3) return 'exploring';
    if (avgColumn <= 3) return 'establishing';
    if (avgColumn <= 6) return 'expressing';
    if (avgColumn <= 8) return 'integrating';
    return 'transcending';
  }
  
  /**
   * Check value resonance between two seeds (hologram alignment)
   */
  calculateResonance(seedA: LivingSeedPattern, seedB: LivingSeedPattern): number {
    // Only values can resonate (Desert Island Test)
    const aValues = seedA.values.filter(v => v.practicedLevel > 0.5);
    const bValues = seedB.values.filter(v => v.practicedLevel > 0.5);
    
    if (aValues.length === 0 || bValues.length === 0) return 0;
    
    // Find shared values and their column distance
    let resonanceSum = 0;
    let comparisons = 0;
    
    for (const aVal of aValues) {
      for (const bVal of bValues) {
        if (aVal.name === bVal.name) {
          // Exact match = 1.0
          resonanceSum += 1.0;
        } else if (aVal.developmentCycle === bVal.developmentCycle) {
          // Same cycle, different column - proximity matters
          const columnDist = Math.abs(aVal.developmentColumn - bVal.developmentColumn);
          resonanceSum += Math.max(0, 1 - columnDist / 9);
        } else {
          // Different cycles - still possible but lower
          resonanceSum += 0.2;
        }
        comparisons++;
      }
    }
    
    return comparisons > 0 ? resonanceSum / comparisons : 0;
  }
  
  /**
   * The Desert Island Test: Is this a Value or just a Need/Belief/Principle?
   * Values require others to practice - you cannot be generous alone.
   */
  isDesertIslandTestable(entry: { name: string; requiresOthers?: true }): boolean {
    // Values that are inherently relational
    const relationalValues = [
      'generosity', 'justice', 'compassion', 'fairness', 'honesty',
      'loyalty', 'trust', 'reciprocity', 'forgiveness', 'gratitude',
      'courage', 'integrity', 'humility', 'patience', 'wisdom',
    ];
    
    return relationalValues.some(rv => entry.name.toLowerCase().includes(rv));
  }
  
  /**
   * Get the full LJ Map
   */
  getLJMap(): LJMapEntry[] {
    return LJ_MAP;
  }
  
  /**
   * Find values by cycle or column
   */
  findValues(cycle?: string, column?: number): LJMapEntry[] {
    return LJ_MAP.filter(entry => {
      if (cycle && entry.cycle !== cycle) return false;
      if (column && entry.column !== column) return false;
      return true;
    });
  }
}
--- FILE: streams/02-values-flow/src/schema.sql ---
-- Mythogen AME - PostgreSQL Schema with PG Vector
-- Field of Trust & Affinity Mapping Engine

-- Enable PG Vector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- ============================================
-- Core Tables
-- ============================================

-- Living Seed Patterns (Profiles)
CREATE TABLE seed_patterns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- The Four Distinctions stored as JSONB
    needs JSONB NOT NULL DEFAULT '[]',
    beliefs JSONB NOT NULL DEFAULT '[]',
    principles JSONB NOT NULL DEFAULT '[]',
    "values" JSONB NOT NULL DEFAULT '[]',
    
    -- Seed metadata
    planted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    maturation_level DECIMAL(3,2) NOT NULL DEFAULT 0,
    
    -- Values embedding for resonance detection
    values_embedding vector(1536), -- OpenAI ada-002 compatible
    
    -- Privacy
    visibility VARCHAR(20) NOT NULL DEFAULT 'private',
    CHECK (visibility IN ('private', 'community', 'public')),
    
    -- Timestamps
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for vector similarity search
CREATE INDEX idx_seed_values_embedding ON seed_patterns 
    USING ivfflat (values_embedding vector_cosine_ops)
    WITH (lists = 100);

-- ============================================
-- Trust Indicator Tracking
-- ============================================

CREATE TABLE trust_measurements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Context
    community_id UUID NOT NULL REFERENCES seed_patterns(id),
    indicator_type VARCHAR(50) NOT NULL,
    CHECK (indicator_type IN (
        'mutual-support', 'response-velocity', 'conflict-engagement',
        'benefit-distribution', 'psychological-safety'
    )),
    
    -- Value (0-1 scale)
    value DECIMAL(3,2) NOT NULL,
    sample_size INTEGER NOT NULL DEFAULT 1,
    
    -- Metadata
    measured_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    -- Ensure we track trends over time
    UNIQUE(community_id, indicator_type, measured_at)
);

-- Index for time-series queries
CREATE INDEX idx_trust_measurements_time ON trust_measurements 
    (community_id, indicator_type, measured_at DESC);

-- ============================================
-- Community (Pod) Structure
-- ============================================

CREATE TABLE communities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Membership (5-15 ideal)
    member_ids UUID[] NOT NULL DEFAULT '{}',
    
    -- Seed pattern for this community
    seed_pattern JSONB NOT NULL DEFAULT '{}',
    
    -- FOT Score (current composite)
    fot_score DECIMAL(3,2) NOT NULL DEFAULT 0,
    membrane_health DECIMAL(3,2) NOT NULL DEFAULT 0,
    is_plasma_state BOOLEAN NOT NULL DEFAULT FALSE,
    hologram_coherence DECIMAL(3,2) NOT NULL DEFAULT 0,
    
    -- Lifecycle
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    phase VARCHAR(20) NOT NULL DEFAULT 'forming',
    CHECK (phase IN ('forming', 'storming', 'norming', 'performing', 'mature')),
    
    -- Anti-capture state
    sacred_clown_active BOOLEAN NOT NULL DEFAULT FALSE,
    transparency_score DECIMAL(3,2) NOT NULL DEFAULT 1,
    
    -- Updated timestamp
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- Anti-Capture Mechanisms
-- ============================================

-- Y Cards (Algorithmic Transparency)
CREATE TABLE y_cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- What algorithm was used
    algorithm VARCHAR(255) NOT NULL,
    purpose TEXT NOT NULL,
    data_used TEXT[] NOT NULL,
    result TEXT NOT NULL,
    
    -- Timestamps
    generated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days'),
    viewed_at TIMESTAMPTZ,
    
    -- Ownership
    owner_id UUID REFERENCES seed_patterns(id),
    
    CONSTRAINT y_card_not_expired CHECK (expires_at > NOW())
);

-- Time Locks (30-day maturation)
CREATE TABLE time_locks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    seed_id UUID NOT NULL REFERENCES seed_patterns(id) ON DELETE CASCADE,
    locked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    matures_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days'),
    is_mature BOOLEAN NOT NULL DEFAULT FALSE,
    
    UNIQUE(seed_id)
);

-- Membrane State (Semi-permeable boundary)
CREATE TABLE membrane_state (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    
    permeability_level DECIMAL(3,2) NOT NULL DEFAULT 0.5,
    blocked_entities UUID[] NOT NULL DEFAULT '{}',
    allowed_entities UUID[] NOT NULL DEFAULT '{}',
    threat_level DECIMAL(3,2) NOT NULL DEFAULT 0,
    
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    UNIQUE(community_id)
);

-- ============================================
-- V-Crystal Immune System
-- ============================================

CREATE TABLE v_dynamics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    trigger_event TEXT NOT NULL,
    active_positions VARCHAR(20)[] NOT NULL,
    dominant_position VARCHAR(20) NOT NULL,
    CHECK (dominant_position IN ('victor', 'villain', 'victim', 'vengeful', 'virtuous', 'vulnerable')),
    
    resolution_state VARCHAR(20) NOT NULL DEFAULT 'active',
    CHECK (resolution_state IN ('active', 'healing', 'resolved')),
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- ============================================
-- LJ Map Values (Reference table)
-- ============================================

CREATE TABLE lj_map_values (
    id SERIAL PRIMARY KEY,
    
    value VARCHAR(255) NOT NULL UNIQUE,
    cycle VARCHAR(30) NOT NULL,
    CHECK (cycle IN ('self-worth', 'self-expression', 'selfless-expression')),
    
    column_number INTEGER NOT NULL CHECK (column_number BETWEEN 1 AND 9),
    description TEXT NOT NULL,
    
    -- Embedding for semantic search
    embedding vector(1536)
);

CREATE INDEX idx_lj_values_embedding ON lj_map_values 
    USING ivfflat (embedding vector_cosine_ops)
    WITH (lists = 10);

-- ============================================
-- Events for behavioral tracking
-- ============================================

CREATE TABLE community_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    actor_id UUID NOT NULL REFERENCES seed_patterns(id),
    
    -- Event data
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB NOT NULL DEFAULT '{}',
    
    -- For trust calculations
    is_supportive BOOLEAN, -- Did this event provide support?
    response_time_ms INTEGER, -- How quickly did others respond?
    involves_conflict BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_events_community ON community_events 
    (community_id, created_at DESC);
CREATE INDEX idx_events_supportive ON community_events 
    (community_id, is_supportive) WHERE is_supportive = TRUE;

-- ============================================
-- Utility Functions
-- ============================================

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_seed_patterns_updated
    BEFORE UPDATE ON seed_patterns
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tr_communities_updated
    BEFORE UPDATE ON communities
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Function to check if time lock has matured
CREATE OR REPLACE FUNCTION is_seed_mature(p_seed_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
    v_matured BOOLEAN;
BEGIN
    SELECT is_mature INTO v_matured
    FROM time_locks
    WHERE seed_id = p_seed_id;
    
    RETURN COALESCE(v_matured, FALSE);
END;
$$ LANGUAGE plpgsql;

-- Function to calculate FOT score from indicators
CREATE OR REPLACE FUNCTION calculate_fot_score(p_community_id UUID)
RETURNS JSONB AS $$
DECLARE
    v_indicators JSONB;
    v_composite DECIMAL(3,2);
    v_min DECIMAL(3,2);
    v_all_present BOOLEAN;
BEGIN
    -- Get recent measurements for all 5 indicators
    SELECT jsonb_agg(jsonb_build_object(
        'type', indicator_type,
        'value', value,
        'sample_size', sample_size,
        'measured_at', measured_at
    )) INTO v_indicators
    FROM (
        SELECT DISTINCT ON (indicator_type) 
            indicator_type, value, sample_size, measured_at
        FROM trust_measurements
        WHERE community_id = p_community_id
        ORDER BY indicator_type, measured_at DESC
    ) recent;
    
    -- Calculate composite (hologram = min of all, not sum)
    IF v_indicators IS NULL THEN
        RETURN jsonb_build_object(
            'overall', 0,
            'indicators', '[]'::jsonb,
            'is_plasma_state', FALSE,
            'hologram_coherence', 0
        );
    END IF;
    
    -- FOT only manifests when ALL dimensions align (hologram principle)
    SELECT MIN((v->>'value')::DECIMAL) INTO v_min FROM jsonb_array_elements(v_indicators) v;
    v_composite := v_min; -- Use minimum, not average (hologram model)
    
    -- Check if all 5 indicators present (full coherence)
    SELECT (SELECT COUNT(DISTINCT v->>'type') FROM jsonb_array_elements(v_indicators) v) = 5 INTO v_all_present;
    
    RETURN jsonb_build_object(
        'overall', v_composite,
        'indicators', v_indicators,
        'is_plasma_state', v_all_present AND v_min > 0.7,
        'hologram_coherence', v_min -- coherence = weakest link
    );
END;
$$ LANGUAGE plpgsql;
--- FILE: streams/03-fot-tracker/README.md ---
# Stream 03-fot-tracker

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/03-fot-tracker/specs/ORCHESTRATOR_PROMPTS.md ---
# Ralph Orchestrator Prompts - Mythogen Framework Implementation

## System Prompt

You are Ralph, an orchestration agent for the Mythogen AME (Affinity Mapping Engine) Dynamic Profiler System. Your role is to coordinate the implementation of the Field of Trust (FOT) detection and tracking system.

## Core Architecture

The system consists of:
1. **Seed Classifier** - Classifies member statements into Four Foundations (Need/Belief/Principle/Value)
2. **Matter State Tracker** - Tracks maturity: Gas → Liquid → Solid → Plasma
3. **Values Mapper** - Maps values to LJMap columns (1-9, 3 cycles)
4. **FOT Calculator** - Computes trust field readiness from 5 indicators
5. **V-Crystal Tracker** - Monitors relational positions
6. **Enfoldment Manager** - Tracks 13 Sacred Enfoldments

## Key Constraints

### STE Compliance
- One concept per sentence
- Maximum 20 words per sentence
- Active voice only
- No semicolons
- Articles required before nouns
- Uppercase = approved word, lowercase = not approved

### Hologram Principle
FOT composite = MINIMUM of 5 indicators, NOT average.

### Anti-Extraction
- All classifications include Why-Card reasoning
- No shadow profiling
- Opt-in depth control

### Time-Lock
Seeds cannot be used for matching until 30 days after detection.

---

## Prompt Templates

### 1. Seed Classification Prompt

```
Analyze the member statement and determine if it contains a seed pattern.

CLASSIFICATION RULES:
- NEED: Biological/psychological requirements. They HAVE it.
- BELIEF: Epistemological claims. They THINK it.
- PRINCIPLE: Operational rules. They FOLLOW it.
- VALUE: Axiological + relational. They LIVE it with others.

CRITICAL: Only VALUES generate trust field.

EMOTIONAL DENSITY: Rate 0.0-1.0 based on:
- Intensity of language
- Personal stakes revealed
- Depth of feeling
- Repeated emphasis

Extract seed ONLY if confidence > 0.4.

Respond with:
- seed_detected: boolean
- label: string
- foundation: need|belief|principle|value
- emotional_density: float
- confidence: float
- domain: string
- evidence_statement: string
- is_new: boolean
- existing_seed_id: string (if is_new=false)
```

### 2. Matter State Determination Prompt

```
Determine matter state based on maturity indicators.

RULES:
- Gas: expression_count < 3 OR confidence < 0.4
- Liquid: 3 <= expression_count <= 7 AND 0.4 <= confidence < 0.75 AND days < 30
- Solid: expression_count >= 7 AND confidence >= 0.75 AND days >= 30
- Plasma: emotional_density >= 0.8 AND has_cross_member_correlations

Respond with matter_state: gas|liquid|solid|plasma
```

### 3. FOT Score Calculation Prompt

```
Calculate Field of Trust readiness score.

COMPONENTS:
1. values_coherence = count(value_seeds) / count(all_seeds)
2. emotional_density_avg = mean(s.emotional_density for all seeds)
3. witness_score = min(1.0, cross_member_correlations / 10)
4. time_stability = count(time_lock_satisfied) / count(all_seeds)

COMPOSITE FORMULA:
fot_readiness = (
  values_coherence * 0.35 +
  emotional_density_avg * 0.25 +
  witness_score * 0.20 +
  time_stability * 0.20
)

HOLOGRAM PRINCIPLE: 
Composite = MINIMUM(five indicators), NOT average.

Respond with:
- values_coherence: float
- emotional_density_avg: float
- witness_score: float
- time_stability: float
- fot_readiness: float
- indicators: {values_expressed, values_witnessed, resonance_detected, emotional_density_sufficient, time_lock_satisfied}
```

### 4. V-Crystal Position Detection Prompt

```
Detect V-Crystal position from member language.

POSITIONS:
- Victor: Overcoming, success language
- Victim: Harmed, suffering language
- Villain: Perpetrating harm language
- Virtuous: Moral excellence language
- Vengeful: Retaliation, grudge language
- Vulnerable: Openness, receptivity, hidden healer

KEY: Vulnerable is the circuit breaker - the opening that allows new patterns.

Respond with:
- primary_position: victor|victim|villain|virtuous|vengeful|vulnerable
- position_scores: {each position: 0.0-1.0}
- trajectory: stable|shifting|vengeful
```

### 5. Values Mapping Prompt

```
Map value seed to LJMap framework.

COLUMNS:
- Cycle 1 (1-3): Self-Worth - Foundation, Foundation+, Utility
- Cycle 2 (4-6): Self-Expression - Quality, Service, Co-Creation
- Cycle 3 (7-9): Selfless Expression - Integration, Navigation, No-Self

Look up value_label in value_mappings table.
Return ljmap_column (1-9) and ljmap_cycle (1-3).

If no exact match, provide fuzzy suggestions.
```

### 6. Enfoldment Engagement Prompt

```
Assess engagement with 13 Sacred Enfoldments.

ENFOLDMENTS:
1. Mythic Alchemy - Spirit to matter
2. Culture Shift Transforms - Metamorphic growth
3. MicroCommunity Typologies - Community forms
4. Communal Behavior Labyrinth - V-Crystal, immune system
5. Eco-Social Architecture - Whole body scan
6. Communal Alignment Gates - Breath/rhythm
7. Archetypal Community Domains - Structure/bone
8. Ecosophy Design Flows - Metabolism
9. Concentrix Learning Matrix - Mycelial mind
10. AME (Living Codex) - Silicon heart
11. Fractal Growth - Geometry scaling
12. Archetypal Play - Vaccine/rehearsal
13. Decentralized Innovation - Export to world

For each enfoldment:
- Calculate engagement_score (0.0-1.0)
- Determine engagement_mode: functional|relational|generative|cultural
- Identify active evidence

Respond with enfoldment_scores: {enfoldment_id: score}
```

### 7. Correlation Detection Prompt

```
Find seeds that resonate with given seed using pgvector.

QUERY:
- query_embedding: seed.embedding
- match_threshold: 0.75
- match_count: 20
- exclude_user_id: seed.user_id

BOOST RULES:
- Same foundation: score *= 1.2
- Both VALUE foundation: score *= 1.3
- Emotional density difference < 0.2: score *= 1.1

Respond with array of:
- seed_id, user_id, label, coherence_score, foundation
```

### 8. Why-Card Generation Prompt

```
Generate transparency card for seed classification.

FORMAT:
INSIGHT: "You hold [value] as a core value"
WHY WE THINK THIS:
- Statement: "..."
- Theme appeared across N conversations
- Emotional density: 0.XX (high|moderate|low)
HOW ACCURATE DOES THIS FEEL?
[✓ Yes] [✗ No] [~ Partially] [? Not Sure]

Respond with structured Why-Card JSON.
```

### 9. Community FOT Status Prompt

```
Calculate community-level FOT status.

METRICS:
- collective_coherence: mean of member fot_scores
- enfoldment_coverage: count of enfoldments with score > 0.5
- mythology_strength: shared belief-seed coherence across 3+ members
- fot_status: emerging|forming|established|thriving

THRESHOLDS:
- emerging: score < 0.3
- forming: 0.3 <= score < 0.5
- established: 0.5 <= score < 0.7
- thriving: score >= 0.7

Respond with community_fot object.
```

### 10. Anti-Capture Validation Prompt

```
Validate anti-extraction commitments.

CHECKS:
1. Explainable Classification: Every seed has reasoning
2. Coherence Visibility: Community metrics visible to members
3. No Shadow Profiling: All dimensions surfaced in UI
4. Opt-In Depth: Members control detail level

Respond with validation_results: {check_name: passed|failed}
```

---

## Orchestration Workflow

### Phase 1: Seed Processing Pipeline

```
1. Receive member statement
   ↓
2. Run Seed Classification Prompt
   ↓
3. If seed_detected=true:
   a. Create seed record
   b. Generate embedding (async)
   c. Run Values Mapping Prompt
   d. Run Matter State Determination
   ↓
4. Run Why-Card Generation
   ↓
5. Store Why-Card for user validation
```

### Phase 2: Correlation Pipeline

```
1. On seed embedding ready:
   ↓
2. Run Correlation Detection Prompt
   ↓
3. For each matching seed:
   a. Calculate coherence with boost rules
   b. Store correlation record
   ↓
4. Trigger FOT recalculation for affected users
```

### Phase 3: FOT Calculation Pipeline

```
1. On correlation update:
   ↓
2. Run FOT Score Calculation Prompt
   ↓
3. Run V-Crystal Position Detection
   ↓
4. Run Enfoldment Engagement Prompt
   ↓
5. Store fot_scores record
   ↓
6. If community_threshold crossed:
   a. Run Community FOT Status Prompt
   b. Broadcast update
```

### Phase 4: User Interaction Pipeline

```
1. User requests profile:
   ↓
2. Fetch seeds with time_lock_satisfied=true
   ↓
3. Run Enfoldment Engagement Prompt
   ↓
4. Run Community FOT Status (if community view)
   ↓
5. Return formatted response with Why-Cards
```

---

## Error Handling

### Classification Failures
- Log failure with statement hash
- Default to "need" foundation with low confidence
- Queue for human review

### Embedding Failures
- Retry 3 times with exponential backoff
- Mark seed as "embedding_pending"
- Use placeholder for correlation until ready

### FOT Calculation Failures
- Use last known scores with stale flag
- Alert community admin if failure persists

---

## Testing Commands

```bash
# Run seed classification tests
pytest tests/unit/seed_classifier.py

# Run integration tests
pytest tests/integration/seed_flow.py

# Run E2E tests
playwright test tests/e2e/first_profiling_session.py

# Calculate FOT manually
psql -c "SELECT * FROM fot_scores WHERE user_id = '$USER' ORDER BY calculated_at DESC LIMIT 1"
```

--- FILE: streams/03-fot-tracker/specs/PROMPT.md ---
# fot-tracker Task - Ralph Orchestrator Prompt

You are working on the **fot-tracker** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the fot-tracker component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for fot-tracker
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/fot-tracker with working code.

--- FILE: streams/03-fot-tracker/src/TrustDetector.ts ---
/**
 * Trust Detector - Calculates Field of Trust emergence
 * Based on 5 concrete indicators and the hologram principle
 */

import type { 
  Community, 
  TrustIndicator, 
  FOTScore,
  UUID 
} from '../models/types.js';

// The Five Trust Indicators
export const TRUST_INDICATOR_TYPES = {
  MUTUAL_SUPPORT: 'mutual-support',
  RESPONSE_VELOCITY: 'response-velocity',
  CONFLICT_ENGAGEMENT: 'conflict-engagement',
  BENEFIT_DISTRIBUTION: 'benefit-distribution',
  PSYCHOLOGICAL_SAFETY: 'psychological-safety',
} as const;

/**
 * Trust Detector calculates FOT emergence based on the hologram principle:
 * Trust manifests only when ALL dimensions align.
 * If one dimension is off, the 3D image doesn't blur — it COMPLETELY FAILS.
 */
export class TrustDetector {
  /**
   * Calculate FOT Score for a community
   * Uses the hologram principle: composite = minimum of all indicators, not average
   */
  calculateFOT(community: Community): FOTScore {
    const { fotScore } = community;
    
    // If no indicators yet, no FOT
    if (!fotScore.indicators || fotScore.indicators.length === 0) {
      return {
        overall: 0,
        indicators: [],
        membraneHealth: 0,
        isPlasmaState: false,
        hologramCoherence: 0,
        lastCalculatedAt: new Date(),
      };
    }
    
    // Calculate composite using hologram principle (minimum, not average)
    const values = fotScore.indicators.map(i => i.currentValue);
    const composite = Math.min(...values);
    
    // Check if all 5 indicators present (full coherence)
    const allPresent = fotScore.indicators.length >= 5;
    
    // Plasma state: all indicators present AND all above threshold (0.7)
    const isPlasmaState = allPresent && composite >= 0.7;
    
    return {
      overall: composite,
      indicators: fotScore.indicators,
      membraneHealth: fotScore.membraneHealth,
      isPlasmaState,
      hologramCoherence: isPlasmaState ? composite : 0, // Only high when plasma
      lastCalculatedAt: new Date(),
    };
  }
  
  /**
   * Analyze a community event and update relevant indicators
   */
  analyzeEvent(event: {
    type: 'support' | 'response' | 'conflict' | 'sharing' | 'vulnerability';
    data: Record<string, unknown>;
  }): Partial<TrustIndicator> {
    switch (event.type) {
      case 'support':
        return this.analyzeMutualSupport(event.data);
      case 'response':
        return this.analyzeResponseVelocity(event.data);
      case 'conflict':
        return this.analyzeConflictEngagement(event.data);
      case 'sharing':
        return this.analyzeBenefitDistribution(event.data);
      case 'vulnerability':
        return this.analyzePsychologicalSafety(event.data);
      default:
        return {};
    }
  }
  
  private analyzeMutualSupport(data: Record<string, unknown>): Partial<TrustIndicator> {
    const spontaneous = data.spontaneous as boolean;
    const frequency = data.frequency as number || 0;
    
    return {
      type: 'mutual-support',
      currentValue: spontaneous 
        ? Math.min(1, frequency / 10) // 10 supports per period = 1.0
        : Math.min(0.5, frequency / 20),
      trend: 'stable',
    };
  }
  
  private analyzeResponseVelocity(data: Record<string, unknown>): Partial<TrustIndicator> {
    const avgResponseTimeMs = data.avgResponseTimeMs as number;
    
    // 0-60 minutes = 1.0, 1-24 hours = 0.7, 1-7 days = 0.4, 7+ days = 0.1
    let value = 0;
    if (avgResponseTimeMs <= 3600000) value = 1.0;
    else if (avgResponseTimeMs <= 86400000) value = 0.7;
    else if (avgResponseTimeMs <= 604800000) value = 0.4;
    else value = 0.1;
    
    return { type: 'response-velocity', currentValue: value, trend: 'stable' };
  }
  
  private analyzeConflictEngagement(data: Record<string, unknown>): Partial<TrustIndicator> {
    const deepenedRelationship = data.deepenedRelationship as boolean;
    const resolutionQuality = data.resolutionQuality as number || 0;
    
    return {
      type: 'conflict-engagement',
      currentValue: deepenedRelationship 
        ? Math.min(1, resolutionQuality)
        : Math.max(0, resolutionQuality - 0.5),
      trend: 'stable',
    };
  }
  
  private analyzeBenefitDistribution(data: Record<string, unknown>): Partial<TrustIndicator> {
    const benefitingMembers = data.benefitingMembers as number;
    const totalMembers = data.totalMembers as number;
    
    // Check if value flows to everyone, not just influencers
    const distribution = benefitingMembers / totalMembers;
    
    return {
      type: 'benefit-distribution',
      currentValue: distribution,
      trend: 'stable',
    };
  }
  
  private analyzePsychologicalSafety(data: Record<string, unknown>): Partial<TrustIndicator> {
    const vulnerableStatements = data.vulnerableStatements as number;
    const weaponizationCount = data.weaponizationCount as number;
    
    // High vulnerability + low weaponization = high safety
    const safetyScore = Math.max(0, (vulnerableStatements - weaponizationCount * 2) / 10);
    
    return {
      type: 'psychological-safety',
      currentValue: Math.min(1, safetyScore),
      trend: 'stable',
    };
  }
  
  /**
   * Determine community phase based on FOT development
   */
  determinePhase(fotScore: FOTScore, communityAge: number): Community['phase'] {
    const daysSinceCreation = (Date.now() - communityAge) / (1000 * 60 * 60 * 24);
    
    if (fotScore.overall < 0.2) return 'forming';
    if (fotScore.overall < 0.4) return 'storming';
    if (fotScore.overall < 0.6) return 'norming';
    if (fotScore.overall < 0.8) return 'performing';
    return 'mature';
  }
  
  /**
   * Calculate membrane health (semi-permeable boundary strength)
   */
  calculateMembraneHealth(community: Community): number {
    // Healthy membrane = high permeability + low threat + strong internal cohesion
    const internalCohesion = community.fotScore.overall;
    const sacredClownBonus = community.sacredClownActive ? 0.1 : 0;
    const transparencyBonus = community.transparencyScore * 0.2;
    
    return Math.min(1, internalCohesion * 0.7 + sacredClownBonus + transparencyBonus);
  }
}

/**
 * Event types for FOT tracking
 */
export interface CommunityEvent {
  communityId: UUID;
  actorId: UUID;
  type: 'support' | 'response' | 'conflict' | 'sharing' | 'vulnerability' | 'boundary';
  data: Record<string, unknown>;
  timestamp: Date;
}

/**
 * FOT History entry for trend analysis
 */
export interface FOTHistory {
  communityId: UUID;
  score: FOTScore;
  events: CommunityEvent[];
  recordedAt: Date;
}
--- FILE: streams/04-community/README.md ---
# Stream 04-community

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/04-community/specs/PROMPT.md ---
# frontend-dashboard Task - Ralph Orchestrator Prompt

You are working on the **frontend-dashboard** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the frontend-dashboard component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for frontend-dashboard
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/frontend-dashboard with working code.

--- FILE: streams/04-community/src/index.ts ---
/**
 * Mythogen AME - REST API Server
 * Express-based API for profile CRUD, community management, trust queries
 */

import express, { Request, Response, NextFunction } from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';

// Import engines
import { AffinityMapper } from '../engine/AffinityMapper.js';
import { TrustDetector, TRUST_INDICATOR_TYPES } from '../engine/TrustDetector.js';
import { 
  TransparencyEngine, 
  TimeLockManager, 
  SacredClown, 
  MembraneController,
  VCrystalSystem 
} from '../anticapture/index.js';

// Import types
import type { 
  LivingSeedPattern, 
  Community, 
  TrustIndicator, 
  FOTScore,
  Need,
  Belief,
  Principle,
  Value,
} from '../models/types.js';
import { createEmptySeed } from '../models/types.js';

// ============================================
// Validation Schemas
// ============================================

const NeedSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  category: z.enum(['survival', 'security', 'belonging', 'esteem', 'self-actualization']),
  priority: z.number().min(1).max(10),
});

const BeliefSchema = z.object({
  statement: z.string().min(1),
  confidence: z.number().min(0).max(1),
  origin: z.string(),
});

const PrincipleSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  domain: z.enum(['personal', 'professional', 'spiritual', 'social']),
});

const ValueSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  practicedLevel: z.number().min(0).max(1),
  developmentColumn: z.number().min(1).max(9),
  developmentCycle: z.enum(['self-worth', 'self-expression', 'selfless-expression']),
});

const CreateSeedSchema = z.object({
  needs: z.array(NeedSchema).optional(),
  beliefs: z.array(BeliefSchema).optional(),
  principles: z.array(PrincipleSchema).optional(),
  values: z.array(ValueSchema).optional(),
  visibility: z.enum(['private', 'community', 'public']).optional(),
});

const CreateCommunitySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  memberIds: z.array(z.string()).min(1).max(15),
  sharedMyth: z.string().optional(),
});

const TrustEventSchema = z.object({
  type: z.enum(['support', 'response', 'conflict', 'sharing', 'vulnerability']),
  data: z.record(z.any()),
});

// ============================================
// In-Memory Store (production would use PostgreSQL)
// ============================================

const seeds = new Map<string, LivingSeedPattern>();
const communities = new Map<string, Community>();
const trustMeasurements = new Map<string, TrustIndicator[]>();

// ============================================
// Initialize Engines
// ============================================

const affinityMapper = new AffinityMapper();
const trustDetector = new TrustDetector();
const transparencyEngine = new TransparencyEngine();
const timeLockManager = new TimeLockManager();
const sacredClown = new SacredClown();
const membraneController = new MembraneController();
const vCrystalSystem = new VCrystalSystem();

// ============================================
// Express App
// ============================================

const app = express();
app.use(express.json());

// Error handler
const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: err.message });
};

// ============================================
// Seed Pattern Routes
// ============================================

// Create a new seed
app.post('/api/seeds', async (req, res, next) => {
  try {
    const body = CreateSeedSchema.parse(req.body);
    
    const now = new Date();
    const id = uuid();
    
    // Create needs with IDs
    const needs: Need[] = (body.needs || []).map(n => ({
      id: uuid(),
      ...n,
      createdAt: now,
    }));
    
    // Create beliefs with IDs
    const beliefs: Belief[] = (body.beliefs || []).map(b => ({
      id: uuid(),
      ...b,
      challenged: false,
      createdAt: now,
    }));
    
    // Create principles with IDs
    const principles: Principle[] = (body.principles || []).map(p => ({
      id: uuid(),
      ...p,
      followingScore: 0.5, // Start neutral
      createdAt: now,
    }));
    
    // Create values with IDs
    const values: Value[] = (body.values || []).map(v => ({
      id: uuid(),
      ...v,
      requiresOthers: true as const, // Values require others
      createdAt: now,
    }));
    
    const seed: LivingSeedPattern = {
      id,
      needs,
      beliefs,
      principles,
      values,
      plantedAt: now,
      lastUpdatedAt: now,
      maturationLevel: 0,
      valuesEmbedding: [],
      visibility: body.visibility || 'private',
      createdAt: now,
      updatedAt: now,
    };
    
    seeds.set(id, seed);
    
    res.status(201).json({ 
      seed,
      timeLock: timeLockManager.createTimeLock(id),
    });
  } catch (err) {
    next(err);
  }
});

// Get a seed
app.get('/api/seeds/:id', (req, res) => {
  const seed = seeds.get(req.params.id);
  if (!seed) {
    return res.status(404).json({ error: 'Seed not found' });
  }
  res.json(seed);
});

// Update a seed (time-locked)
app.patch('/api/seeds/:id', (req, res) => {
  const seed = seeds.get(req.params.id);
  if (!seed) {
    return res.status(404).json({ error: 'Seed not found' });
  }
  
  const updates = req.body;
  const updatedSeed: LivingSeedPattern = {
    ...seed,
    ...updates,
    id: seed.id, // Prevent ID change
    plantedAt: seed.plantedAt, // Prevent planted date change
    updatedAt: new Date(),
  };
  
  seeds.set(seed.id, updatedSeed);
  res.json(updatedSeed);
});

// Get LJ Map values
app.get('/api/lj-map', (_req, res) => {
  res.json(affinityMapper.getLJMap());
});

// ============================================
// Community Routes
// ============================================

// Create a community
app.post('/api/communities', (req, res) => {
  const body = CreateCommunitySchema.parse(req.body);
  
  const now = new Date();
  const id = uuid();
  
  const community: Community = {
    id,
    name: body.name,
    description: body.description || '',
    memberIds: body.memberIds,
    seedPattern: {
      sharedMyth: body.sharedMyth || '',
      foundingPrinciples: [],
      emergentValues: [],
      growthGeometry: 'fractal',
    },
    fotScore: {
      overall: 0,
      indicators: [],
      membraneHealth: 0,
      isPlasmaState: false,
      hologramCoherence: 0,
      lastCalculatedAt: now,
    },
    createdAt: now,
    phase: 'forming',
    sacredClownActive: false,
    transparencyScore: 1, // Start fully transparent
  };
  
  communities.set(id, community);
  trustMeasurements.set(id, []);
  
  res.status(201).json({ 
    community,
    membrane: membraneController.createMembrane(id),
  });
});

// Get a community
app.get('/api/communities/:id', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  // Calculate current FOT
  const fotScore = trustDetector.calculateFOT(community);
  community.fotScore = fotScore;
  
  res.json(community);
});

// Get FOT score for a community
app.get('/api/communities/:id/fot', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  const fotScore = trustDetector.calculateFOT(community);
  const membraneHealth = trustDetector.calculateMembraneHealth(community);
  
  res.json({
    ...fotScore,
    membraneHealth,
    phase: trustDetector.determinePhase(fotScore, community.createdAt.getTime()),
  });
});

// ============================================
// Trust Event Routes
// ============================================

// Record a trust event
app.post('/api/communities/:id/trust-events', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  const body = TrustEventSchema.parse(req.body);
  
  // Analyze the event
  const analysis = trustDetector.analyzeEvent({
    type: body.type,
    data: body.data,
  });
  
  // Update trust measurements
  const measurements = trustMeasurements.get(community.id) || [];
  
  if (analysis.type && analysis.currentValue !== undefined) {
    const indicator: TrustIndicator = {
      type: analysis.type,
      currentValue: analysis.currentValue,
      historicalValues: [analysis.currentValue],
      sampleSize: 1,
      lastMeasuredAt: new Date(),
      trend: 'stable',
    };
    
    // Update or add
    const existingIndex = measurements.findIndex(m => m.type === analysis.type);
    if (existingIndex >= 0) {
      const existing = measurements[existingIndex];
      measurements[existingIndex] = {
        ...existing,
        currentValue: (existing.currentValue + indicator.currentValue) / 2,
        historicalValues: [...existing.historicalValues, indicator.currentValue],
        sampleSize: existing.sampleSize + 1,
        lastMeasuredAt: new Date(),
      };
    } else {
      measurements.push(indicator);
    }
    
    trustMeasurements.set(community.id, measurements);
    
    // Update community FOT
    community.fotScore.indicators = measurements;
    community.fotScore = trustDetector.calculateFOT(community);
    community.fotScore.membraneHealth = trustDetector.calculateMembraneHealth(community);
    
    // Check for V-Dynamics
    const vDynamic = vCrystalSystem.detectVDynamic(community.id, body.data.event as string || '');
    if (vDynamic) {
      res.json({ 
        indicator, 
        vDynamic,
        fotScore: community.fotScore,
      });
      return;
    }
  }
  
  res.json({ indicator: analysis, fotScore: community.fotScore });
});

// ============================================
// Anti-Capture Routes
// ============================================

// Get Y Card for a seed
app.get('/api/seeds/:id/y-cards', (req, res) => {
  const seed = seeds.get(req.params.id);
  if (!seed) {
    return res.status(404).json({ error: 'Seed not found' });
  }
  
  // Generate a Y Card for current state
  const ljMap = affinityMapper.getLJMap();
  const dominantValues = seed.values
    .filter(v => v.practicedLevel > 0.5)
    .map(v => v.name);
  
  const yCard = transparencyEngine.generateYCard({
    algorithm: 'AffinityMapper.mapToValues + TrustDetector.calculateFOT',
    purpose: 'Mapping your values to the LJ Map developmental model and calculating community Field of Trust',
    dataUsed: [
      'Your values (needs, beliefs, principles, values)',
      'Community interaction patterns',
      'Trust indicator measurements',
      `Your dominant values: ${dominantValues.join(', ') || 'not yet mapped'}`,
    ],
    result: seed.values.length > 0 
      ? `Your seed has ${seed.values.length} values mapped to the LJ Map across cycles: self-worth, self-expression, selfless-expression`
      : 'Your seed has no values mapped yet. Add values to see your developmental map.',
    recipientId: seed.id,
  });
  
  res.json({
    yCard,
    formatted: transparencyEngine.formatYCard(yCard),
  });
});

// Trigger Sacred Clown (for testing)
app.post('/api/communities/:id/sacred-clown', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  community.sacredClownActive = true;
  
  const disruption = sacredClown.triggerDisruption(community.id);
  
  res.json({
    disruption,
    sacredClownActive: true,
  });
});

// Get membrane state
app.get('/api/communities/:id/membrane', (req, res) => {
  const community = communities.get(req.params.id);
  if (!community) {
    return res.status(404).json({ error: 'Community not found' });
  }
  
  const membrane = membraneController.createMembrane(community.id);
  const updatedMembrane = membraneController.updateMembrane(
    membrane,
    community.fotScore.overall,
    []
  );
  
  res.json(updatedMembrane);
});

// ============================================
// WebSocket for real-time FOT
// ============================================

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message.toString());
      
      if (data.type === 'subscribe' && data.communityId) {
        // Subscribe to FOT updates for a community
        const community = communities.get(data.communityId);
        if (community) {
          const fot = trustDetector.calculateFOT(community);
          ws.send(JSON.stringify({
            type: 'fot-update',
            communityId: data.communityId,
            fot,
          }));
        }
      }
    } catch (err) {
      console.error('WebSocket message error:', err);
    }
  });
  
  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

// ============================================
// Health Check
// ============================================

app.get('/health', (_req, res) => {
  res.json({ 
    status: 'healthy',
    seeds: seeds.size,
    communities: communities.size,
    uptime: process.uptime(),
  });
});

// ============================================
// Start Server
// ============================================

const PORT = process.env.PORT || 3000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mythogen AME Server running on port ${PORT}

API Endpoints:
  Seeds:
    POST   /api/seeds          - Create seed
    GET    /api/seeds/:id      - Get seed
    PATCH  /api/seeds/:id      - Update seed
    GET    /api/seeds/:id/y-cards - Get transparency card
    GET    /api/lj-map         - Get LJ Map values
    
  Communities:
    POST   /api/communities    - Create community
    GET    /api/communities/:id - Get community
    GET    /api/communities/:id/fot - Get FOT score
    POST   /api/communities/:id/trust-events - Record trust event
    POST   /api/communities/:id/sacred-clown - Trigger disruption
    GET    /api/communities/:id/membrane - Get membrane state
    
  WebSocket:
    ws://localhost:8080 - Real-time FOT updates

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
});

export default app;
--- FILE: streams/05-transparency/README.md ---
# Stream 05-transparency

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/05-transparency/specs/PROMPT.md ---
# anticapture Task - Ralph Orchestrator Prompt

You are working on the **anticapture** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the anticapture component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for anticapture
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/anticapture with working code.

--- FILE: streams/05-transparency/src/index.ts ---
/**
 * Anti-Capture Mechanisms
 * Protecting the system from becoming a dead siphon
 * The immune system against capture
 */

import { v4 as uuid } from 'uuid';
import type { YCard, TimeLock, MembraneState, Community, VDynamic, VPosition } from '../models/types.js';

// ============================================
// Y Cards - Algorithmic Transparency Engine
// ============================================

export class TransparencyEngine {
  /**
   * Generate a Y Card - complete transparency about algorithm decisions
   * "Y" = Why, How, What
   */
  generateYCard(params: {
    algorithm: string;
    purpose: string;
    dataUsed: string[];
    result: string;
    recipientId: string;
  }): YCard {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days
    
    return {
      id: uuid(),
      algorithm: params.algorithm,
      purpose: params.purpose,
      dataUsed: params.dataUsed,
      result: params.result,
      generatedAt: now,
      expiresAt,
    };
  }
  
  /**
   * Format Y Card for human-readable display
   */
  formatYCard(card: YCard): string {
    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Y CARD - Algorithmic Transparency
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY was this algorithm used?
${card.purpose}

HOW does it work?
Algorithm: ${card.algorithm}
Data used: ${card.dataUsed.join(', ')}

WHAT was the result?
${card.result}

Generated: ${card.generatedAt.toISOString()}
Expires: ${card.expiresAt.toISOString()}
ID: ${card.id}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This card exists so you can question and understand every decision that affects you.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();
  }
  
  /**
   * Calculate community transparency score
   */
  calculateTransparencyScore(cards: YCard[]): number {
    if (cards.length === 0) return 0;
    
    const now = new Date();
    const viewed = cards.filter(c => 
      c.viewedAt && c.expiresAt > now
    ).length;
    
    return viewed / cards.length;
  }
}

// ============================================
// Time Lock - 30-day Maturation
// ============================================

export class TimeLockManager {
  private readonly MATURATION_DAYS = 30;
  private readonly LOCK_DURATION_MS = this.MATURATION_DAYS * 24 * 60 * 60 * 1000;
  
  /**
   * Create a new time lock for a seed
   */
  createTimeLock(seedId: string): TimeLock {
    const now = new Date();
    
    return {
      id: uuid(),
      seedId,
      lockedAt: now,
      maturesAt: new Date(now.getTime() + this.LOCK_DURATION_MS),
      isMature: false,
    };
  }
  
  /**
   * Check if a time lock has matured
   */
  isMature(lock: TimeLock): boolean {
    if (lock.isMature) return true;
    return new Date() >= lock.maturesAt;
  }
  
  /**
   * Get maturation progress (0-1)
   */
  getMaturationProgress(lock: TimeLock): number {
    if (lock.isMature) return 1;
    
    const now = Date.now();
    const start = lock.lockedAt.getTime();
    const end = lock.maturesAt.getTime();
    
    return Math.min(1, (now - start) / (end - start));
  }
  
  /**
   * Mark lock as matured (called externally after verification)
   */
  markMature(lock: TimeLock): TimeLock {
    return { ...lock, isMature: true };
  }
  
  /**
   * Time-lock kills the viral model:
   * - No rapid emotional manipulation (can't exploit moments of weakness)
   * - Forces patience and genuine relationship building
   * - Prevents the "one viral post" manipulation pattern
   */
  canManipulate(lock: TimeLock): boolean {
    return this.isMature(lock);
  }
}

// ============================================
// Sacred Clown - Productive Disruption
// ============================================

export class SacredClown {
  private disruptionHistory: Map<string, Date[]> = new Map();
  
  /**
   * Trigger productive disruption to prevent premature closure
   * "The seed that never gets challenged becomes a dead habit"
   */
  triggerDisruption(communityId: string): {
    type: 'question-assumption' | 'introduce-paradox' | 'surface-shadow' | 'challenge-consensus';
    message: string;
    purpose: string;
  } {
    const disruptions = this.getDisruptions(communityId);
    
    // Don't disrupt too frequently (min 7 days between)
    const lastDisruption = disruptions[disruptions.length - 1];
    if (lastDisruption && 
        Date.now() - lastDisruption.getTime() < 7 * 24 * 60 * 60 * 1000) {
      return {
        type: 'question-assumption',
        message: 'Still processing previous disruption...',
        purpose: 'waiting period',
      };
    }
    
    // Record this disruption
    disruptions.push(new Date());
    this.disruptionHistory.set(communityId, disruptions);
    
    // Return a random disruption type
    const types = [
      {
        type: 'question-assumption' as const,
        message: 'What if the assumption we\'re most certain about is actually what\'s limiting us?',
        purpose: 'Prevent premature closure of understanding',
      },
      {
        type: 'introduce-paradox' as const,
        message: 'Both/and: We can be deeply committed AND open to being wrong. These aren\'t opposites.',
        purpose: 'Hold tension instead of resolving it prematurely',
      },
      {
        type: 'surface-shadow' as const,
        message: 'What pattern are we avoiding looking at because it feels too uncomfortable?',
        purpose: 'Surface what\'s in the shadow',
      },
      {
        type: 'challenge-consensus' as const,
        message: 'The consensus we\'ve built... what would it look like if we\'re actually all slightly wrong?',
        purpose: 'Prevent groupthink and false certainty',
      },
    ];
    
    return types[Math.floor(Math.random() * types.length)];
  }
  
  /**
   * Get disruption history for a community
   */
  getDisruptions(communityId: string): Date[] {
    return this.disruptionHistory.get(communityId) || [];
  }
  
  /**
   * Sacred Clown Principle:
   * "The jester sees what the king refuses to see"
   * Disruption is not destruction - it's a healthy immune response
   */
}

// ============================================
// Living Membrane - Semi-permeable Boundary
// ============================================

export class MembraneController {
  /**
   * Create initial membrane state for a community
   */
  createMembrane(communityId: string): MembraneState {
    return {
      communityId,
      permeabilityLevel: 0.5, // Balanced by default
      blockedEntities: [],
      allowedEntities: [],
      threatLevel: 0,
    };
  }
  
  /**
   * Update membrane based on community health
   */
  updateMembrane(
    membrane: MembraneState,
    communityHealth: number,
    externalThreats: string[]
  ): MembraneState {
    // Healthy community = more permeable (open to growth)
    // Stressed community = less permeable (protective)
    const targetPermeability = 0.3 + communityHealth * 0.7;
    
    // Block known threats
    const blocked = [...new Set([...membrane.blockedEntities, ...externalThreats])];
    
    return {
      ...membrane,
      permeabilityLevel: targetPermeability,
      blockedEntities: blocked,
      threatLevel: externalThreats.length > 0 ? Math.min(1, externalThreats.length * 0.2) : 0,
    };
  }
  
  /**
   * Check if an entity can pass through the membrane
   * Semi-permeable = filters, doesn't block completely
   */
  canPass(membrane: MembraneState, entityId: string): boolean {
    // Explicitly blocked = no
    if (membrane.blockedEntities.includes(entityId)) return false;
    
    // Explicitly allowed = yes
    if (membrane.allowedEntities.includes(entityId)) return true;
    
    // Otherwise, depends on permeability and threat level
    // High permeability + low threat = allow
    // Low permeability OR high threat = block
    return membrane.permeabilityLevel > 0.5 && membrane.threatLevel < 0.3;
  }
  
  /**
   * Block an entity (toxic, extractive, etc.)
   */
  blockEntity(membrane: MembraneState, entityId: string): MembraneState {
    return {
      ...membrane,
      blockedEntities: [...membrane.blockedEntities, entityId],
      allowedEntities: membrane.allowedEntities.filter(id => id !== entityId),
    };
  }
  
  /**
   * Allow an entity (trusted, beneficial)
   */
  allowEntity(membrane: MembraneState, entityId: string): MembraneState {
    return {
      ...membrane,
      allowedEntities: [...membrane.allowedEntities, entityId],
      blockedEntities: membrane.blockedEntities.filter(id => id !== entityId),
    };
  }
}

// ============================================
// V-Crystal Immune System
// ============================================

export class VCrystalSystem {
  /**
   * Detect when V-Dynamics are active (conflict pattern emerging)
   */
  detectVDynamic(communityId: string, event: string): VDynamic | null {
    // Trigger words that indicate V-Dynamic activation
    const triggerPatterns = [
      { pattern: /blame|fault|responsible/i, position: 'victor' },
      { pattern: /wrong|bad|evil|i'm right/i, position: 'villain' },
      { pattern: /hurt|wounded|suffering|poor me/i, position: 'victim' },
      { pattern: /payback|revenge|deserve|eye for eye/i, position: 'vengeful' },
      { pattern: /should|must|always|never|right/i, position: 'virtuous' },
      { pattern: /fear|afraid|vulnerable|exposed/i, position: 'vulnerable' },
    ];
    
    const activePositions: VPosition[] = [];
    let dominantPosition: VPosition = 'vulnerable';
    let maxMatches = 0;
    
    for (const { pattern, position } of triggerPatterns) {
      if (pattern.test(event)) {
        activePositions.push(position);
        maxMatches++;
        dominantPosition = position; // Last match wins
      }
    }
    
    if (activePositions.length === 0) return null;
    
    return {
      id: uuid(),
      communityId,
      triggerEvent: event,
      activePositions,
      dominantPosition,
      resolutionState: 'active',
      createdAt: new Date(),
    };
  }
  
  /**
   * Vengeance is the autoimmune flare
   * Vulnerability is the circuit breaker
   * "Villains don't apologize and admit they were overwhelmed"
   */
  resolveVDynamic(dynamic: VDynamic): VDynamic {
    // Resolution path: active → healing → resolved
    if (dynamic.resolutionState === 'resolved') {
      return dynamic;
    }
    
    const nextState = dynamic.resolutionState === 'active' ? 'healing' : 'resolved';
    
    return {
      ...dynamic,
      resolutionState: nextState,
    };
  }
  
  /**
   * Check if vengeance (autoimmune) is dominant
   */
  isAutoimmuneFlare(dynamic: VDynamic): boolean {
    return dynamic.dominantPosition === 'vengeful' ||
           dynamic.dominantPosition === 'villain';
  }
  
  /**
   * Circuit breaker for V-Dynamics
   * "Vulnerability breaks the cycle"
   */
  canBreakCycle(dynamic: VDynamic): boolean {
    // Only vulnerable position can break the cycle
    return dynamic.dominantPosition === 'vulnerable';
  }
}
--- FILE: streams/06-regeneration/README.md ---
# Stream 06-regeneration

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/07-testing/README.md ---
# Stream 07-testing

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/07-testing/specs/PROMPT.md ---
# testing-ci Task - Ralph Orchestrator Prompt

You are working on the **testing-ci** task for the Mythogen AME system.

## Context
The Mythogen Affinity Mapping Engine (AME) implements a regenerative framework 
for community design. Technology serves as silicon offspring, not master or servant.

## Task Scope
Implement the testing-ci component following Mythogen principles:
- Relational centricity over efficiency
- Living systems over mechanical processes  
- Concentrix (polycentric co-centering) not concentric
- Whole-systems (whole + system = integration)

## Deliverables
- Working Rust/Zig code for testing-ci
- Gherkin feature files defining behavior
- Unit tests with high coverage
- Documentation in docs/ folder

## Anti-Capture Constraints
- Y Cards for transparency
- Time-Lock (30-day maturation)
- Sacred Clown (disruption to prevent closure)
- Living Membrane (semi-permeable boundary)
- V-Crystal immune system states

## When Complete
Commit to branch task/testing-ci with working code.

--- FILE: streams/08-adr/README.md ---
# Stream 08-adr

This is an independent research and development stream for the Mythogen AME system.

## Contents
- specs/ — Executable specifications (PROMPT.md, Gherkin, architecture)
- src/ — Reference implementation code

## Dependencies
This stream can be developed independently. It may reference specs from other streams but has no direct code dependencies.

## Integration Points
See IMPLEMENTATION_PATH.md in stream 01-seed-core for system-wide integration.


--- FILE: streams/08-adr/specs/0001-use-rust-plus-zig-for-ame.md ---
# ADR-0001: Language Stack for AME

**Status:** Accepted  
**Date:** 2026-03-29

## Context

The original proposal used 5+ languages (Elixir/Rust/Zig/Ada/TinyGo) across tiers, creating maintenance chaos. Mythogen philosophy prioritizes coherence.

## Decision

Use exactly **two languages**:

- **Rust** — Embedded systems, no GC, formal verification possible, memory safety
- **Zig** — Bare metal, no libc dependency, comptime, builds on Rust experience

## Rationale

1. Rust covers Tier 1 (full stack) and Tier 3 (RISC-V) where formal verification matters
2. Zig covers Tier 2 (bare metal ESP32/STM32) where 2MB flash limits are critical
3. Two languages = maintainable, not fragmented
4. Both have no GC (real-time safe for community matching)
5. Both compile to bare metal (Tier 2 can run without OS)

## Consequences

- Must maintain two toolchains
- Zig ecosystem smaller than Rust — some components may need writing from scratch
- Both languages have strong embedded support (noRT, embedded-hal)

## Alternatives Considered

- **Single language (Rust only):** Tier 2 constraints make this impractical without significant flash optimization
- **More than two:** Contradicts Mythogen coherence principle

--- FILE: tsconfig.json ---
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
--- FILE: USAGE.md ---
# Mythogen AME - Usage Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run the server
npm run dev

# Run tests
npm test
```

## API Reference

### Seeds (Profiles)

#### Create a Seed
```bash
curl -X POST http://localhost:3000/api/seeds \
  -H "Content-Type: application/json" \
  -d '{
    "needs": [
      {"name": "community", "description": "Connection with others", "category": "belonging", "priority": 8}
    ],
    "beliefs": [
      {"statement": "Regenerative systems can replace extractive ones", "confidence": 0.9, "origin": "Personal experience"}
    ],
    "values": [
      {"name": "generosity", "description": "Giving without expectation", "practicedLevel": 0.7, "developmentColumn": 5, "developmentCycle": "self-expression"},
      {"name": "integrity", "description": "Being honest even when hard", "practicedLevel": 0.8, "developmentColumn": 7, "developmentCycle": "selfless-expression"}
    ],
    "visibility": "community"
  }'
```

Response:
```json
{
  "seed": { "id": "...", "needs": [...], "values": [...] },
  "timeLock": { "id": "...", "seedId": "...", "maturesAt": "..." }
}
```

#### Get a Seed
```bash
curl http://localhost:3000/api/seeds/:id
```

#### Get Y Card (Transparency)
```bash
curl http://localhost:3000/api/seeds/:id/y-cards
```

Returns full algorithmic transparency: why the algorithm was used, how it works, what data was used, and what the result was.

### Communities

#### Create a Community
```bash
curl -X POST http://localhost:3000/api/communities \
  -H "Content-Type: application/json" \
  -d '{
    "name": "RegenTribe Core",
    "description": "A regenerative neighborhood collective",
    "memberIds": ["seed-1", "seed-2", "seed-3"],
    "sharedMyth": "We grow together like mycelium, connecting and nourishing"
  }'
```

#### Get FOT Score
```bash
curl http://localhost:3000/api/communities/:id/fot
```

Response:
```json
{
  "overall": 0.75,
  "indicators": [
    {"type": "mutual-support", "currentValue": 0.8, ...},
    {"type": "response-velocity", "currentValue": 0.9, ...},
    {"type": "conflict-engagement", "currentValue": 0.7, ...},
    {"type": "benefit-distribution", "currentValue": 0.75, ...},
    {"type": "psychological-safety", "currentValue": 0.85, ...}
  ],
  "isPlasmaState": true,
  "hologramCoherence": 0.7,
  "membraneHealth": 0.82,
  "phase": "performing"
}
```

### Trust Events

Record events to build FOT indicators:

#### Record Mutual Support
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "support",
    "data": {
      "spontaneous": true,
      "frequency": 5,
      "from": "member-2",
      "to": "member-1"
    }
  }'
```

#### Record Response Velocity
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "response",
    "data": {
      "avgResponseTimeMs": 1800000,
      "situation": "member needed help with project"
    }
  }'
```

#### Record Conflict Engagement
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "conflict",
    "data": {
      "deepenedRelationship": true,
      "resolutionQuality": 0.85,
      "topic": "resource allocation"
    }
  }'
```

#### Record Vulnerability
```bash
curl -X POST http://localhost:3000/api/communities/:id/trust-events \
  -H "Content-Type: application/json" \
  -d '{
    "type": "vulnerability",
    "data": {
      "vulnerableStatements": 3,
      "weaponizationCount": 0,
      "topic": "personal struggle"
    }
  }'
```

### Anti-Capture

#### Trigger Sacred Clown
```bash
curl -X POST http://localhost:3000/api/communities/:id/sacred-clown
```

Response:
```json
{
  "disruption": {
    "type": "question-assumption",
    "message": "What if the assumption we're most certain about is actually what's limiting us?",
    "purpose": "Prevent premature closure of understanding"
  },
  "sacredClownActive": true
}
```

#### Get Membrane State
```bash
curl http://localhost:3000/api/communities/:id/membrane
```

### LJ Map (Values Developmental Map)

#### Get All Values
```bash
curl http://localhost:3000/api/lj-map
```

Returns 50+ values across three cycles:
- **Self-Worth** (Columns 1-3): Safety → Belonging → Utility
- **Self-Expression** (Columns 4-6): Quality → Service → Co-Creation
- **Selfless Expression** (Columns 7-9): Integration → Navigation → No Self

### WebSocket (Real-time FOT)

Connect to `ws://localhost:8080` and send:

```json
{
  "type": "subscribe",
  "communityId": "community-123"
}
```

Receive real-time FOT updates:

```json
{
  "type": "fot-update",
  "communityId": "community-123",
  "fot": {
    "overall": 0.75,
    "isPlasmaState": true,
    ...
  }
}
```

## Key Concepts

### Hologram Principle

FOT only manifests when ALL five indicators align. The composite is the **minimum** of all indicators, not the average. If one dimension is off, trust completely fails — not blurry, completely gone.

**Example:**
- Mutual support: 0.9 ✓
- Response velocity: 0.5 ✗
- Conflict engagement: 0.8 ✓
- Benefit distribution: 0.7 ✓
- Psychological safety: 0.9 ✓

→ FOT = 0.5 (lowest wins)

### Desert Island Test

Values require others to practice. Ask for any claimed value: "Can you practice this alone on a desert island?"

- **Need:** "I need food" → YES, you can have this alone
- **Belief:** "I believe in karma" → YES, you can hold this alone
- **Principle:** "I follow non-violence" → YES, you can follow this alone
- **Value:** "I value generosity" → NO, you need someone to receive

This separates the Four Distinctions rigorously.

### Fractal Growth

Communities grow by **multiplying**, not scaling. A pod of 5 → 100 pods of 5. Each pod retains the relational depth of the original.

Scaling a pod of 5 into 500 = dilution.
Multiplying to 100 pods of 5 = growth.

## Health Check

```bash
curl http://localhost:3000/health
```

Returns:
```json
{
  "status": "healthy",
  "seeds": 3,
  "communities": 1,
  "uptime": 3600
}
```
--- FILE: vitest.config.ts ---
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
