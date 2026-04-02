// Sacred Geometry Integration for Mythogen AME
// Tetragrammaton (TTGM) + Toroidal Field Dynamics

// ═══════════════════════════════════════════════════════════
// TETRAGRAMMATON - 4 Core Vectors (TTGM)
// ═══════════════════════════════════════════════════════════

// The 4 fundamental directions of the field
// These map to FOT indicators but with explicit TTGM geometry
enum TTGMVector {
    YOD  = "source"      // The point of origin - consciousness/initiation
    HE   = "reception"   // Receiving, feminine principle - receptivity
    VAV  = "flow"        // Connecting, masculine principle - action/flow
    HE   = "return"      // Completion, returning to source - integration
}

const TTGM_LABELS = {
    YOD: { name: "Source", color: "#FF6B35", direction: "initiation" },
    HE:  { name: "Recept", color: "#4ECDC4", direction: "receiving" },
    VAV: { name: "Flow",   color: "#FFE66D", direction: "action" },
    HE:  { name: "Return",color: "#95E1D3", direction: "integration" }
};

// Map FOT indicators to TTGM vectors (5 indicators across 4 vectors)
const INDICATOR_TO_TTGM = {
    "Psychological Safety": "YOD",   // Source - safe to begin
    "Trust":                "HE",    // Recept - open to receive
    "Coherence":            "VAV",   // Flow - aligned action
    "Attunement":           "HE",    // Recept (secondary)
    "Openness":            "VAV",   // Flow (secondary)
    // 5th indicator maps to Return for toroidal completion
    "Integration":          "HE+",   // Return - the completing arc
};

// ═══════════════════════════════════════════════════════════
// TOROIDAL FIELD CALCULATIONS
// ═══════════════════════════════════════════════════════════

interface TTGMField {
    yod: number;   // Source strength (0-1)
    he_recept: number;  // Recept strength
    vav: number;    // Flow strength
    he_return: number;  // Return/completion strength
    
    // Derived
    toroidalCoherence: number;  // How complete the torus is
    fluxDirection: "inward" | "outward" | "stable";
    sacredRatio: number;        // YOD:VAV:HE balance (should be ~1:1:1)
}

function computeTTGM(indicators: FOTIndicator[]): TTGMField {
    // Aggregate indicators into TTGM vectors
    const vectors = {
        yod: 0, he_recept: 0, vav: 0, he_return: 0
    };
    
    const counts = { yod: 0, he_recept: 0, vav: 0, he_return: 0 };
    
    for (const ind of indicators) {
        const vector = INDICATOR_TO_TTGM[ind.name];
        if (vector) {
            vectors[vector] += ind.value;
            counts[vector]++;
        }
    }
    
    // Average each vector
    for (const key of Object.keys(counts) as Array<keyof typeof counts>) {
        if (counts[key] > 0) {
            vectors[key] /= counts[key];
        }
    }
    
    // Toroidal coherence = how close to perfect the torus is
    // Not average - minimum (hologram) but weighted by vector balance
    const toroidalCoherence = Math.min(
        vectors.yod, 
        vectors.he_recept, 
        vectors.vav, 
        vectors.he_return
    ) * sacredRatioScore(vectors);
    
    // Flux direction - is energy flowing in, out, or balanced?
    const inflow = vectors.yod + vectors.he_recept;
    const outflow = vectors.vav + vectors.he_return;
    const fluxDirection = inflow > outflow * 1.2 ? "inward" :
                          outflow > inflow * 1.2 ? "outward" : "stable";
    
    return {
        ...vectors,
        toroidalCoherence,
        fluxDirection,
        sacredRatio: sacredRatioScore(vectors)
    };
}

function sacredRatioScore(vectors: TTGMField): number {
    // Sacred ratio: vectors should be roughly equal (1:1:1:1)
    // Deviation reduces coherence - sacred geometry isn't about max, it's about balance
    const values = [vectors.yod, vectors.he_recept, vectors.vav, vectors.he_return];
    const mean = values.reduce((a, b) => a + b, 0) / 4;
    const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / 4;
    const stdDev = Math.sqrt(variance);
    
    // Score: 1 - normalized deviation (closer to 1 = more sacred balance)
    return Math.max(0, 1 - (stdDev / mean));
}

// ═══════════════════════════════════════════════════════════
// FRACTAL SCALING - Community Field Within Person Field
// ═══════════════════════════════════════════════════════════

interface FractalLayer {
    scale: "atom" | "person" | "community" | "planet" | "star" | "universe";
    ttgm: TTGMField;
    parentField?: string; // ID of the containing field
    childFields: string[]; // IDs of fields this contains
    resonanceFrequency: number; // Oscillation rate (Hz)
}

function computeFractalResonance(
    layer: FractalLayer,
    parentTTGM: TTGMField | null
): number {
    if (!parentTTGM) return 1.0;
    
    // Child field resonates with parent - coherence multiplicative
    // If parent toroidalCoherence = 0.7 and child = 0.8, combined = 0.56
    return layer.ttgm.toroidalCoherence * parentTTGM.toroidalCoherence;
}

// ═══════════════════════════════════════════════════════════
// TTGM VISUALIZATION (for the Lens interface)
// ═══════════════════════════════════════════════════════════

const TTGM_VISUALIZATION = {
    // 4 vectors as a cross/tetragrammaton
    // Rotated 90° gives us the basic shape:
    //
    //         YOD (top)
    //           ↑
    //   HE←─────┼────→VAV
    //    (left)      (right)
    //           ↓
    //        HE+ (bottom/return)
    //
    // In 3D: this wraps into a torus
    
    render: (field: TTGMField) => {
        // Each vector is a line from center, length = strength
        // Color = TTGM_LABELS[vector].color
        // Opacity = strength
        // Animation: vectors pulse at field.resonanceFrequency
        
        return {
            yod: { length: field.yod, color: "#FF6B35" },
            he:  { length: field.he_recept, color: "#4ECDC4" },
            vav: { length: field.vav, color: "#FFE66D" },
            heReturn: { length: field.he_return, color: "#95E1D3" },
            
            // Torus overlay - how complete the circle is
            torus: {
                completeness: field.toroidalCoherence,
                flux: field.fluxDirection
            }
        };
    }
};

// ═══════════════════════════════════════════════════════════
// DATABASE INTEGRATION
// ═══════════════════════════════════════════════════════════

// Add to person schema
interface PersonWithTTGM {
    // ... existing fields
    ttgmField: TTGMField;
    fractalScale: "person" | "community";
    resonanceFrequency: number;
    parentFieldId?: string;
}

// Add computed TTGM field to FOT sensing
async function senseWithTTGM(
    personId: string,
    rawIndicators: FOTIndicator[]
): Promise<{ indicators: FOTIndicator[], ttgm: TTGMField }> {
    const ttgm = computeTTGM(rawIndicators);
    
    return {
        indicators: rawIndicators,
        ttgm
    };
}

// ═══════════════════════════════════════════════════════════
// CONVERGENCE + TTGM
// ═══════════════════════════════════════════════════════════

// When finding convergence points, also calculate TTGM dynamics
// The sacred responsibility emerges from:
// - Weak vector in one person
// - Strong opposite vector in another
// - Toroidal flow completes when they connect

function findSacredConvergences(
    people: Person[],
    topics: Topic[]
): ConvergencePoint[] {
    return people.flatMap(person => {
        if (!person.ttgmField) return [];
        
        // Find weak vectors (below 0.5)
        const weakVectors = Object.entries(person.ttgmField)
            .filter(([k, v]) => typeof v === 'number' && v < 0.5)
            .map(([k]) => k);
        
        // Find topics where someone else has strong opposite vector
        return topics
            .filter(t => t.category === "collective" && t.emergenceScore > 0.5)
            .map(topic => ({
                personId: person.id,
                weakVectors,
                emergentTopicId: topic.id,
                overlapScore: calculateTTGMOverlap(person.ttgmField, topic),
                sacredResponsibility: identifySacredDuty(person.ttgmField)
            }));
    }).filter(c => c.overlapScore > 0.6);
}

function identifySacredDuty(field: TTGMField): string {
    // Who has strong YOD/HE while someone else has weak?
    // That's the "sacred responsibility" - complete the torus
    const strongest = Object.entries(field)
        .filter(([k]) => typeof field[k as keyof TTGMField] === 'number')
        .sort(([, a], [, b]) => (b as number) - (a as number))[0];
    
    return `Your strength in ${strongest[0]} creates sacred duty to connect with those weak in that vector`;
}

export {
    TTGMVector,
    TTGM_LABELS,
    INDICATOR_TO_TTGM,
    computeTTGM,
    computeFractalResonance,
    findSacredConvergences,
    senseWithTTGM
};