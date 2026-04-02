// INTEGRATION: Add to your existing person.ts or similar
import { computeTTGM, findSacredConvergences, senseWithTTGM, TTGM_LABELS } from './sacred-geometry';

// ─────────────────────────────────────────────────────────
// 1. WHEN SENSING FOT INDICATORS → COMPUTE TTGM
// ─────────────────────────────────────────────────────────

async function onIndicatorSensed(personId: string, indicators: FOTIndicator[]) {
    // Old way: just store indicators
    // const fot = await db.update(`person:${personId}`, { fot: indicators });
    
    // New way: also compute TTGM
    const { indicators: stored, ttgm } = await senseWithTTGM(personId, indicators);
    
    await db.update(`person:${personId}`, {
        fot: stored,
        ttgm: ttgm,                    // ← new field
        sacredRatio: ttgm.sacredRatio, // ← for quick filtering
        fluxDirection: ttgm.fluxDirection
    });
    
    // If toroidalCoherence drops below 0.3 → trigger Sacred Clown
    if (ttgm.toroidalCoherence < 0.3) {
        await triggerSacredClown(personId, "toroidal_collapse", ttgm);
    }
}

// ─────────────────────────────────────────────────────────
// 2. CONVERGENCE → INCLUDE SACRED RESPONSIBILITY
// ─────────────────────────────────────────────────────────

// Old convergence query
// GET /api/convergence?minOverlap=0.7

// New: includes sacred duty
app.get('/api/convergence/sacred', async (req, res) => {
    const people = await db.select('person');
    const topics = await db.select('topic');
    
    const convergences = findSacredConvergences(people, topics);
    
    res.json(convergences.map(c => ({
        personId: c.personId,
        weakVectors: c.weakVectors,  // "Your YOD is low"
        emergentTopic: c.emergentTopicId,
        overlapScore: c.overlapScore,
        sacredDuty: identifySacredDuty(people.find(p => p.id === c.personId).ttgm)
    })));
});

// ─────────────────────────────────────────────────────────
// 3. FRACTAL SCALING (community within person)
// ─────────────────────────────────────────────────────────

// A person's FOT is also a field that contains sub-fields:
// - Their internal subsystems (nervous system, etc.)
// - Their relationships (each is a sub-torus)

// Scale calculation
const FRACTAL_FREQUENCIES = {
    atom: 7.83,        // Schumann resonance base
    person: 0.1,      // ~10 second coherence cycles
    community: 0.01,   // ~100 second field stabilization
    planet: 0.001     // ~15 min global coherence
};

async function updateFractalScale(personId: string, scale: FractalLayer['scale']) {
    const person = await db.get(`person:${personId}`);
    const freq = FRACTAL_FREQUENCIES[scale];
    
    // Compute parent resonance (if person is in a community)
    const community = await db.get('community:default');
    const parentResonance = community?.ttgm 
        ? computeFractalResonance({ 
            scale, 
            ttgm: person.ttgm, 
            resonanceFrequency: freq 
          }, community.ttgm)
        : 1.0;
    
    await db.update(`person:${personId}`, {
        fractalScale: scale,
        resonanceFrequency: freq,
        parentResonance
    });
}

// ─────────────────────────────────────────────────────────
// 4. VISUALIZATION IN LENS
// ─────────────────────────────────────────────────────────

// The Lens shows TTGM visualization per person:
//
//     [YOD] ──
//           ↙ ↘
//    [HE] ─── [VAV]
//           ↖ ↗
//     [HE+] ──
//     
//     ← torus wraps →
//
// Each vector: color + length = strength
// Torus ring: opacity = toroidalCoherence
// Animation: pulse at resonanceFrequency

function renderTTGMInLens(person: PersonWithTTGM) {
    const ttgm = person.ttgm;
    
    return {
        vectors: [
            { name: "YOD",  strength: ttgm.yod,  color: TTGM_LABELS.YOD.color },
            { name: "HE",   strength: ttgm.he_recept, color: TTGM_LABELS.HE.color },
            { name: "VAV",  strength: ttgm.vav,   color: TTGM_LABELS.VAV.color },
            { name: "HE+",  strength: ttgm.he_return, color: TTGM_LABELS.HE.color }
        ],
        torusRing: {
            opacity: ttgm.toroidalCoherence,
            flux: ttgm.fluxDirection
        },
        sacredRatio: ttgm.sacredRatio  // Show balance score
    };
}

// ─────────────────────────────────────────────────────────
// 5. API ROUTES SUMMARY
// ─────────────────────────────────────────────────────────

// Existing → Augmented:
// POST /api/field/sense → now returns { indicators, ttgm }
// GET /api/convergence → GET /api/convergence/sacred (adds sacredDuty)
// GET /api/people/{id}/field → now includes ttgm, fractalScale, resonanceFrequency
// NEW: GET /api/field/fractal/{scale} → filter by scale
// NEW: GET /api/field/sacred-ratio → all people sorted by sacredRatio

export { onIndicatorSensed, renderTTGMInLens, FRACTAL_FREQUENCIES };