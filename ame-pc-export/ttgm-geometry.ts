// TTGM - True Geometric Configuration
// Sphere of Triangles + Toroidal Flow Dynamics = Same Thing, Two Views

// ═══════════════════════════════════════════════════════════
// CORE GEOMETRY: TETRAHEDRAL LATTICE (SPHERE OF TRIANGLES)
// ═══════════════════════════════════════════════════════════

// The TTGM is a tetrahedral lattice projected onto a sphere
// 4 vertices of tetrahedron × infinite subdivision = spherical triangular mesh
// This is the STRUCTURE (geometry)

interface TTGMGeometry {
    // Vertices: 4 corners of tetrahedron (mapped to sphere)
    vertices: Vector3[];  // YOD, HE, VAV, HE+ positions on sphere
    
    // Triangular faces - the sphere of triangles
    faces: TriangularFace[];  // Each face = 3 vertices
    
    // Edges - flow channels between vertices
    edges: Edge[];  // Energy flow paths
    
    // Resolution - how many triangles (more = smoother sphere)
    resolution: number;
}

// The 4 source points on sphere (tetrahedron corners)
const TTGM_BASE_VERTICES: Vector3[] = [
    { x: 0, y: 1, z: 0 },                    // YOD - top pole
    { x: 0.9428, y: -0.3333, z: 0 },         // VAV - right lower
    { x: -0.4714, y: -0.3333, z: 0.8165 },   // HE - left front lower
    { x: -0.4714, y: -0.3333, z: -0.8165 }   // HE+ - left back lower
];

// Generate spherical triangular mesh (geodesic tessellation)
function generateTGMesh(resolution: number): TTGMGeometry {
    // Start with icosahedron subdivision → sphere of triangles
    const vertices: Vector3[] = [...TTGM_BASE_VERTICES];
    const faces: TriangularFace[] = [];
    
    // Base icosahedron faces (20 triangles)
    const icoFaces = getIcosahedronFaces();
    
    // Subdivide each face into smaller triangles (resolution times)
    for (const face of icoFaces) {
        const subFaces = subdivideTriangle(face, resolution, vertices);
        faces.push(...subFaces);
    }
    
    // Normalize all vertices to unit sphere
    for (const v of vertices) {
        const len = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
        v.x /= len; v.y /= len; v.z /= len;
    }
    
    // Create edges from face connections
    const edgeSet = new Set<string>();
    const edges: Edge[] = [];
    
    for (const face of faces) {
        const pairs = [
            [face.a, face.b],
            [face.b, face.c],
            [face.c, face.a]
        ];
        for (const [i, j] of pairs) {
            const key = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (!edgeSet.has(key)) {
                edgeSet.add(key);
                edges.push({ 
                    from: i, 
                    to: j, 
                    flowStrength: calculateEdgeFlow(i, j, vertices) 
                });
            }
        }
    }
    
    return { vertices, faces, edges, resolution };
}

// ═══════════════════════════════════════════════════════════
// TOROIDAL FLOW - DYNAMIC WITHIN GEOMETRY
// ═══════════════════════════════════════════════════════════

// The toroid is the FLOW through the geometry
// Same structure, different view: geometry = structure, toroid = motion

interface ToroidalFlow {
    // Flow field: direction + magnitude at each vertex/face
    flowField: FlowVector[];
    
    // Toroidal circulation (clockwise viewed from top)
    circulation: 'clockwise' | 'counterclockwise' | 'bipolar';
    
    // Flux: inward/outward along axis
    fluxDirection: 'inward' | 'outward' | 'stable';
    
    // Energy centers (where flow concentrates)
    energyCenters: EnergyCenter[];
}

interface FlowVector {
    position: Vector3;
    direction: Vector3;  // Unit vector
    magnitude: number;   // 0-1
    timestamp: number;
}

interface EnergyCenter {
    position: Vector3;   // Near one of the 4 vertices
    type: 'source' | 'sink' | 'vortex';
    strength: number;
}

// Calculate toroidal flow based on FOT indicators
function calculateToroidalFlow(
    ttgm: TTGMGeometry,
    indicators: FOTIndicator[]
): ToroidalFlow {
    const flowField: FlowVector[] = [];
    
    // Map indicators to flow parameters
    const yodStrength = indicators.find(i => i.name === 'Psychological Safety')?.value || 0.5;
    const heStrength = indicators.find(i => i.name === 'Trust')?.value || 0.5;
    const vavStrength = indicators.find(i => i.name === 'Coherence')?.value || 0.5;
    const hePlusStrength = indicators.find(i => i.name === 'Attunement')?.value || 0.5;
    
    // Base circulation from YOD → VAV (main flow)
    const circulationStrength = (yodStrength + vavStrength) / 2;
    
    // Generate flow vectors around torus
    for (let i = 0; i < ttgm.vertices.length; i++) {
        const v = ttgm.vertices[i];
        
        // Toroidal direction: tangent to the ring
        const angle = Math.atan2(v.z, v.x);
        const radius = Math.sqrt(v.x*v.x + v.z*v.z);
        
        // Clockwise circulation (looking from YOD down)
        const flowDir = {
            x: -Math.sin(angle) * circulationStrength,
            y: (v.y > 0 ? -0.1 : 0.1) * (1 - circulationStrength),  // slight vertical drift
            z: Math.cos(angle) * circulationStrength
        };
        
        // Magnitude varies by position (stronger at equator)
        const magnitude = circulationStrength * (1 - Math.abs(v.y) * 0.5);
        
        flowField.push({
            position: v,
            direction: normalize(flowDir),
            magnitude,
            timestamp: Date.now()
        });
    }
    
    // Determine flux from vertical component balance
    const upwardFlow = flowField.filter(f => f.direction.y > 0).reduce((a, b) => a + b.magnitude, 0);
    const downwardFlow = flowField.filter(f => f.direction.y < 0).reduce((a, b) => a + b.magnitude, 0);
    
    const flux = upwardFlow > downwardFlow * 1.2 ? 'inward' :
                downwardFlow > upwardFlow * 1.2 ? 'outward' : 'stable';
    
    // Energy centers at the 4 vertices
    const energyCenters: EnergyCenter[] = [
        { position: ttgm.vertices[0], type: 'source', strength: yodStrength },
        { position: ttgm.vertices[1], type: 'vortex', strength: vavStrength },
        { position: ttgm.vertices[2], type: 'sink', strength: heStrength },
        { position: ttgm.vertices[3], type: 'sink', strength: hePlusStrength }
    ];
    
    return {
        flowField,
        circulation: circulationStrength > 0.6 ? 'clockwise' : 
                     circulationStrength < 0.4 ? 'counterclockwise' : 'bipolar',
        fluxDirection: flux,
        energyCenters
    };
}

// ═══════════════════════════════════════════════════════════
// GEOMETRY + FLOW = SAME THING, TWO VIEWS
// ═══════════════════════════════════════════════════════════

interface TTGMField {
    // The geometry (structure)
    geometry: TTGMGeometry;
    
    // The flow (dynamics)
    flow: ToroidalFlow;
    
    // Derived metrics
    coherence: number;  // How well geometry aligns with flow
    sacredRatio: number;  // Balance between 4 vertices
    fractalDepth: number;  // Resolution of triangular mesh
}

// Create full TTGM field from indicators
function createTTGMField(indicators: FOTIndicator[], resolution: number = 3): TTGMField {
    const geometry = generateTGMesh(resolution);
    const flow = calculateToroidalFlow(geometry, indicators);
    
    // Coherence: how well flow follows geometry edges
    const coherence = calculateFlowCoherence(geometry, flow);
    
    // Sacred ratio: balance across 4 vertices
    const sacredRatio = calculateSacredRatio(flow.energyCenters);
    
    return { geometry, flow, coherence, sacredRatio, fractalDepth: resolution };
}

function calculateFlowCoherence(geometry: TTGMGeometry, flow: ToroidalFlow): number {
    // Flow should follow edges - check alignment
    let alignedFlow = 0;
    let totalFlow = 0;
    
    for (const edge of geometry.edges) {
        const fromV = geometry.vertices[edge.from];
        const toV = geometry.vertices[edge.to];
        
        // Edge direction
        const edgeDir = normalize({ x: toV.x - fromV.x, y: toV.y - fromV.y, z: toV.z - fromV.z });
        
        // Average flow at endpoints
        const flowAtFrom = flow.flowField.find(f => 
            f.position.x === fromV.x && f.position.y === fromV.y
        );
        const flowAtTo = flow.flowField.find(f => 
            f.position.x === toV.x && f.position.y === toV.y
        );
        
        if (flowAtFrom && flowAtTo) {
            const avgFlow = {
                x: (flowAtFrom.direction.x + flowAtTo.direction.x) / 2,
                y: (flowAtFrom.direction.y + flowAtTo.direction.y) / 2,
                z: (flowAtFrom.direction.z + flowAtTo.direction.z) / 2
            };
            
            const dot = Math.abs(edgeDir.x * avgFlow.x + edgeDir.y * avgFlow.y + edgeDir.z * avgFlow.z);
            alignedFlow += dot * edge.flowStrength;
            totalFlow += edge.flowStrength;
        }
    }
    
    return totalFlow > 0 ? alignedFlow / totalFlow : 0;
}

function calculateSacredRatio(centers: EnergyCenter[]): number {
    const strengths = centers.map(c => c.strength);
    const mean = strengths.reduce((a, b) => a + b, 0) / 4;
    const variance = strengths.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / 4;
    const stdDev = Math.sqrt(variance);
    return Math.max(0, 1 - (stdDev / mean));
}

// ═══════════════════════════════════════════════════════════
// HELPER TYPES & FUNCTIONS
// ═══════════════════════════════════════════════════════════

interface Vector3 {
    x: number;
    y: number;
    z: number;
}

interface TriangularFace {
    a: number;  // vertex index
    b: number;
    c: number;
}

interface Edge {
    from: number;
    to: number;
    flowStrength: number;
}

function normalize(v: Vector3): Vector3 {
    const len = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
    return len > 0 ? { x: v.x/len, y: v.y/len, z: v.z/len } : { x: 0, y: 0, z: 0 };
}

function getIcosahedronFaces(): TriangularFace[] {
    // 20 faces of icosahedron (each with 3 vertex indices)
    // Standard icosahedron vertex ordering
    const t = (1 + Math.sqrt(5)) / 2;
    
    const verts: Vector3[] = [
        { x: -1, y: t, z: 0 }, { x: 1, y: t, z: 0 }, { x: -1, y: -t, z: 0 }, { x: 1, y: -t, z: 0 },
        { x: 0, y: -1, z: t }, { x: 0, y: 1, z: t }, { x: 0, y: -1, z: -t }, { x: 0, y: 1, z: -t },
        { x: t, y: 0, z: -1 }, { x: t, y: 0, z: 1 }, { x: -t, y: 0, z: -1 }, { x: -t, y: 0, z: 1 }
    ];
    
    // Normalize to sphere
    for (const v of verts) {
        const len = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
        v.x /= len; v.y /= len; v.z /= len;
    }
    
    return [
        [0,11,5], [0,5,1], [0,1,7], [0,7,10], [0,10,11],
        [1,5,9], [5,11,4], [11,10,2], [10,7,6], [7,1,8],
        [3,9,4], [3,4,2], [3,2,6], [3,6,8], [3,8,9],
        [4,9,5], [2,4,11], [6,2,10], [8,6,7], [9,8,1]
    ].map(f => ({ a: f[0], b: f[1], c: f[2] }));
}

function subdivideTriangle(face: TriangularFace, depth: number, vertices: Vector3[]): TriangularFace[] {
    if (depth === 0) return [face];
    
    const v0 = vertices[face.a];
    const v1 = vertices[face.b];
    const v2 = vertices[face.c];
    
    // Midpoints
    const m01 = normalize({ x: (v0.x + v1.x)/2, y: (v0.y + v1.y)/2, z: (v0.z + v1.z)/2 });
    const m12 = normalize({ x: (v1.x + v2.x)/2, y: (v1.y + v2.y)/2, z: (v1.z + v2.z)/2 });
    const m20 = normalize({ x: (v2.x + v0.x)/2, y: (v2.y + v0.y)/2, z: (v2.z + v0.z)/2 });
    
    // Add midpoints to vertices
    const i01 = vertices.length; vertices.push(m01);
    const i12 = vertices.length; vertices.push(m12);
    const i20 = vertices.length; vertices.push(m20);
    
    // 4 smaller triangles
    const sub1: TriangularFace = { a: face.a, b: i01, c: i20 };
    const sub2: TriangularFace = { a: i01, b: face.b, c: i12 };
    const sub3: TriangularFace = { a: i20, b: i12, c: face.c };
    const sub4: TriangularFace = { a: i01, b: i12, c: i20 };
    
    if (depth === 1) {
        return [sub1, sub2, sub3, sub4];
    }
    
    return [
        ...subdivideTriangle(sub1, depth - 1, vertices),
        ...subdivideTriangle(sub2, depth - 1, vertices),
        ...subdivideTriangle(sub3, depth - 1, vertices),
        ...subdivideTriangle(sub4, depth - 1, vertices)
    ];
}

function calculateEdgeFlow(i: number, j: number, vertices: Vector3[]): number {
    const v1 = vertices[i];
    const v2 = vertices[j];
    
    // Flow strength based on distance and position
    const dist = Math.sqrt(
        Math.pow(v1.x - v2.x, 2) + 
        Math.pow(v1.y - v2.y, 2) + 
        Math.pow(v1.z - v2.z, 2)
    );
    
    // Closer = stronger flow
    return Math.max(0.1, 1 - dist);
}

export {
    TTGMGeometry,
    ToroidalFlow,
    TTGMField,
    generateTGMesh,
    calculateToroidalFlow,
    createTTGMField,
    TTGM_BASE_VERTICES
};