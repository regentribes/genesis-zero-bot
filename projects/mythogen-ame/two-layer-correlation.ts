// AME Two-Layer Correlation Engine
// FOT (soft) <-> Archetypal Domains (hard)

// ═══════════════════════════════════════════════════════════
// LAYER 2: ARCHETYPAL DOMAINS (27 domains, 9 triads)
// Source: "Sacred Enfoldments" - Section 7: "Archetypal Community Domains (Structure State)"
// ═══════════════════════════════════════════════════════════

// The 27 Archetypal Community Domains organized into 9 triads
// Each triad = 3 related domains that influence each other

enum DomainTriad {
    NUCLEIC_CENTER = "Nomic Center Triad",
    NOURISHMENT = "Nourishment Triad",
    DAILY_LIVING = "Daily Living Triad",
    CULTURAL_ADVANCEMENT = "Cultural Advancement Triad",
    INTEGRATING_CONFLUENCES = "Integrating Confluences Triad",
    FUNCTIONAL_CONGRUENCE = "Functional Congruence Triad",
    TRAUMA_INTEGRATION = "Trauma Integration Triad",
    INTER_RELATIONAL = "Inter-Relational Triad",
    OMNIPRESENCE = "Omnipresence Triad"
}

interface ArchetypalDomain {
    id: string;
    name: string;
    description: string;
    triad: DomainTriad;
    triadPosition: number;  // 1, 2, or 3 within the triad
    
    // Activity state
    isActive: boolean;
    activityLevel: number;  // 0-1 how actively being used
    lastEngaged: number;     // timestamp
    
    // Health metrics
    healthScore: number;     // 0-1 calculated from multiple signals
    healthTrajectory: 'growing' | 'stable' | 'declining';
    
    // Connection to micro-community (MC)
    microCommunityId: string;
    participantIds: string[];
}

// The 27 domains (9 triads × 3 domains each)
const ARCHETYPAL_DOMAINS: Omit<ArchetypalDomain, 'isActive' | 'activityLevel' | 'lastEngaged' | 'healthScore' | 'healthTrajectory' | 'microCommunityId' | 'participantIds'>[] = [
    // 1. Nucleic Center Triad
    { id: 'd1', name: 'Spirituality and Religion', description: 'Sacred practices, myths, meaning, transcendence', triad: 'NUCLEIC_CENTER', triadPosition: 1 },
    { id: 'd2', name: 'Science and Physics', description: 'Inquiry, research, understanding of natural laws', triad: 'NUCLEIC_CENTER', triadPosition: 2 },
    { id: 'd3', name: 'Arts and Ritual', description: 'Creative expression, ceremonial practices, aesthetic form', triad: 'NUCLEIC_CENTER', triadPosition: 3 },
    
    // 2. Nourishment Triad
    { id: 'd4', name: 'Resources and Nature', description: 'Land, materials, ecological relationship, stewardship', triad: 'NOURISHMENT', triadPosition: 1 },
    { id: 'd5', name: 'Energy and Power', description: 'Energy systems, power generation, resource flow', triad: 'NOURISHMENT', triadPosition: 2 },
    { id: 'd6', name: 'Food and Agriculture', description: 'Growing, cooking, nourishing the community', triad: 'NOURISHMENT', triadPosition: 3 },
    
    // 3. Daily Living Triad
    { id: 'd7', name: 'Habitat and Building', description: 'Shelter, infrastructure, physical spaces', triad: 'DAILY_LIVING', triadPosition: 1 },
    { id: 'd8', name: 'Transportation and Mobility', description: 'Movement, travel, connectivity between places', triad: 'DAILY_LIVING', triadPosition: 2 },
    { id: 'd9', name: 'Neighborhoods and Families', description: 'Living units, family structures, local community', triad: 'DAILY_LIVING', triadPosition: 3 },
    
    // 4. Cultural Advancement Triad
    { id: 'd10', name: 'Learning and Education', description: 'Knowledge transfer, growth, mentorship', triad: 'CULTURAL_ADVANCEMENT', triadPosition: 1 },
    { id: 'd11', name: 'Commerce and Business', description: 'Economy, trade, enterprise, exchange systems', triad: 'CULTURAL_ADVANCEMENT', triadPosition: 2 },
    { id: 'd12', name: 'Governance and Government', description: 'Decision-making, leadership, collective choice', triad: 'CULTURAL_ADVANCEMENT', triadPosition: 3 },
    
    // 5. Integrating Confluences Triad
    { id: 'd13', name: 'Wellness and Medicine', description: 'Health, healing, physical and mental care', triad: 'INTEGRATING_CONFLUENCES', triadPosition: 1 },
    { id: 'd14', name: 'Populations and Diversity', description: 'Demographics, inclusion, variety of people', triad: 'INTEGRATING_CONFLUENCES', triadPosition: 2 },
    { id: 'd15', name: 'Recreation and Play', description: 'Fun, games, leisure, joy', triad: 'INTEGRATING_CONFLUENCES', triadPosition: 3 },
    
    // 6. Functional Congruence Triad
    { id: 'd16', name: 'Models and Currencies', description: 'Systems of value, exchange mediums, frameworks', triad: 'FUNCTIONAL_CONGRUENCE', triadPosition: 1 },
    { id: 'd17', name: 'Tools and Weapons', description: 'Technology, implements, defense capabilities', triad: 'FUNCTIONAL_CONGRUENCE', triadPosition: 2 },
    { id: 'd18', name: 'Emergence and Emergency', description: 'Innovation, crisis response, adaptation', triad: 'FUNCTIONAL_CONGRUENCE', triadPosition: 3 },
    
    // 7. Trauma Integration Triad
    { id: 'd19', name: 'Master and Slave', description: 'Power dynamics, authority, servitude patterns', triad: 'TRAUMA_INTEGRATION', triadPosition: 1 },
    { id: 'd20', name: 'War and Peace', description: 'Conflict, resolution, violence and harmony', triad: 'TRAUMA_INTEGRATION', triadPosition: 2 },
    { id: 'd21', name: 'Individual and Collective', description: 'Self vs group, personal vs communal identity', triad: 'TRAUMA_INTEGRATION', triadPosition: 3 },
    
    // 8. Inter-Relational Triad
    { id: 'd22', name: 'Media and Communications', description: 'Information exchange, storytelling, messaging', triad: 'INTER_RELATIONAL', triadPosition: 1 },
    { id: 'd23', name: 'Language and Metaphor', description: 'Communication forms, symbolic understanding', triad: 'INTER_RELATIONAL', triadPosition: 2 },
    { id: 'd24', name: 'Indigenous Wisdom and Ancestral Healing', description: 'Traditional knowledge, lineage healing, ancestral connection', triad: 'INTER_RELATIONAL', triadPosition: 3 },
    
    // 9. Omnipresence Triad
    { id: 'd25', name: 'Universal Ecology and Personal Ideology', description: 'Global environment, personal beliefs, worldview', triad: 'OMNIPRESENCE', triadPosition: 1 },
    { id: 'd26', name: 'Complexity and Simplicity', description: 'Systems complexity, elegant simplicity, reduction', triad: 'OMNIPRESENCE', triadPosition: 2 },
    { id: 'd27', name: 'Consciousness and Awareness', description: 'Mind, awareness, sentience, perception', triad: 'OMNIPRESENCE', triadPosition: 3 }
];

// Map triads to TTGM quadrants for correlation
const TRIAD_TO_TTGM: Record<DomainTriad, string> = {
    'NUCLEIC_CENTER': 'YOD',       // Source/initiation
    'NOURISHMENT': 'YOD',          // Getting fed/started
    'DAILY_LIVING': 'VAV',         // Action/doing
    'CULTURAL_ADVANCEMENT': 'VAV', // Building culture
    'INTEGRATING_CONFLUENCES': 'HE', // Receptivity/gathering
    'FUNCTIONAL_CONGRUENCE': 'VAV', // Making things work
    'TRAUMA_INTEGRATION': 'HE+',   // Returning/integrating trauma
    'INTER_RELATIONAL': 'HE',       // Relating/receiving
    'OMNIPRESENCE': 'HE+'          // All-encompassing return
};

interface ArchetypalDomain {
    id: string;
    name: string;
    description: string;
    quadrant: DomainQuadrant;
    subdomains: string[];  // More granular breakdown
    
    // Activity state
    isActive: boolean;
    activityLevel: number;  // 0-1 how actively being used
    lastEngaged: number;     // timestamp
    
    // Health metrics
    healthScore: number;     // 0-1 calculated from multiple signals
    healthTrajectory: 'growing' | 'stable' | 'declining';
    
    // Connection to micro-community (MC)
    microCommunityId: string;
    participantIds: string[];
}

// The 27 domains (grouped by quadrant for TTGM alignment)
const ARCHETYPAL_DOMAINS: Omit<ArchetypalDomain, 'isActive' | 'activityLevel' | 'lastEngaged' | 'healthScore' | 'healthTrajectory' | 'microCommunityId' | 'participantIds'>[] = [
    // YOD (Source/Initiation) - Getting things started
    { id: 'd1', name: 'Vision & Purpose', description: 'Shared direction and meaning', quadrant: 'YOD', subdomains: ['mission', 'values', 'goals'] },
    { id: 'd2', name: 'Initiative & Leadership', description: 'Who steps up first', quadrant: 'YOD', subdomains: ['leadership', 'volunteering', 'courage'] },
    { id: 'd3', name: 'Innovation & Creation', description: 'New ideas and experiments', quadrant: 'YOD', subdomains: ['creativity', 'prototyping', 'risk-taking'] },
    { id: 'd4', name: 'Spirituality & Ceremony', description: 'Ritual, sacred space, transcendence', quadrant: 'YOD', subdomains: ['rituals', 'celebration', 'sacred'] },
    { id: 'd5', name: 'Education & Learning', description: 'Knowledge transfer, growth', quadrant: 'YOD', subdomains: ['teaching', 'mentoring', 'curiosity'] },
    { id: 'd6', name: 'Play & Recreation', description: 'Fun, games, joy', quadrant: 'YOD', subdomains: ['games', 'celebration', 'humor'] },
    { id: 'd7', name: 'Hope & Aspiration', description: 'Future-facing optimism', quadrant: 'YOD', subdomains: ['vision', 'dreams', 'possibility'] },
    
    // HE (Receptivity) - Receiving, gathering, perceiving
    { id: 'd8', name: 'Listening & Communication', description: 'How we hear each other', quadrant: 'HE', subdomains: ['dialogue', 'feedback', 'hearing'] },
    { id: 'd9', name: 'Research & Discovery', description: 'Inquiry, investigation', quadrant: 'HE', subdomains: ['investigation', 'exploration', 'curiosity'] },
    { id: 'd10', name: 'Sensory & Arts', description: 'Aesthetics, beauty, expression', quadrant: 'HE', subdomains: ['visual', 'music', 'dance'] },
    { id: 'd11', name: 'Health & Wellness', description: 'Body, mind, spirit care', quadrant: 'HE', subdomains: ['healing', 'fitness', 'nutrition'] },
    { id: 'd12', name: 'Rest & Renewal', description: 'Recovery, sleep, stillness', quadrant: 'HE', subdomains: ['rest', 'contemplation', 'peace'] },
    { id: 'd13', name: 'Intimacy & Connection', description: 'Deep relationships', quadrant: 'HE', subdomains: ['vulnerability', 'trust', 'love'] },
    { id: 'd14', name: 'Nature & Ecology', description: 'Earth connection, environment', quadrant: 'HE', subdomains: ['gardening', 'wildness', 'stewardship'] },
    
    // VAV (Flow/Action) - Building, making, doing
    { id: 'd15', name: 'Governance & Decision', description: 'How decisions get made', quadrant: 'VAV', subdomains: ['voting', 'consensus', 'authority'] },
    { id: 'd16', name: 'Economy & Exchange', description: 'Trade, resource flow', quadrant: 'VAV', subdomains: ['currency', 'trade', 'sharing'] },
    { id: 'd17', name: 'Construction & Building', description: 'Physical infrastructure', quadrant: 'VAV', subdomains: ['building', 'design', 'maintenance'] },
    { id: 'd18', name: 'Technology & Systems', description: 'Tools, systems, automation', quadrant: 'VAV', subdomains: ['software', 'hardware', 'infrastructure'] },
    { id: 'd19', name: 'Food & Agriculture', description: 'Growing, cooking, sharing', quadrant: 'VAV', subdomains: ['farming', 'cooking', 'foraging'] },
    { id: 'd20', name: 'Water & Resource Mgmt', description: 'H2O, energy, materials', quadrant: 'VAV', subdomains: ['water', 'energy', 'waste'] },
    { id: 'd21', name: 'Safety & Security', description: 'Protection, emergency', quadrant: 'VAV', subdomains: ['defense', 'emergency', 'boundaries'] },
    
    // HE+ (Return/Integration) - Completing, weaving, returning
    { id: 'd22', name: 'Storytelling & History', description: 'Memory, narrative, legacy', quadrant: 'HE_PLUS', subdomains: ['history', 'myths', 'memory'] },
    { id: 'd23', name: 'Conflict & Transformation', description: 'Resolution, growth through friction', quadrant: 'HE_PLUS', subdomains: ['dispute', 'mediation', 'growth'] },
    { id: 'd24', name: 'Grief & Loss', description: 'Transition, letting go', quadrant: 'HE_PLUS', subdomains: ['mourning', 'release', 'transition'] },
    { id: 'd25', name: 'Integration & Synthesis', description: 'Weaving together, wholeness', quadrant: 'HE_PLUS', subdomains: ['coordination', 'unity', 'coherence'] },
    { id: 'd26', name: 'Celebration & Culmination', description: 'Marking achievements', quadrant: 'HE_PLUS', subdomains: ['parties', 'milestones', 'honoring'] },
    { id: 'd27', name: 'Legacy & Succession', description: 'Passing on, continuity', quadrant: 'HE_PLUS', subdomains: ['mentorship', 'succession', 'continuation'] }
];

// ═══════════════════════════════════════════════════════════
// CORRELATION MATRIX: FOT <-> DOMAINS
// ═══════════════════════════════════════════════════════════

// How FOT indicators correlate with domain health
// Triad-based correlations - each FOT indicator affects certain triads more than others

interface FOTDomainCorrelation {
    fotIndicator: string;
    triadIds: DomainTriad[];        // Which triads it most affects
    correlationStrength: number;    // 0-1 how strong the relationship
    mechanism: string;              // Why this correlation exists
    lagPeriod: number;              // Time for correlation to manifest (ms)
}

const FOT_DOMAIN_CORRELATIONS: FOTDomainCorrelation[] = [
    // Psychological Safety → triads requiring vulnerability and trust
    {
        fotIndicator: 'Psychological Safety',
        triadIds: ['NUCLEIC_CENTER', 'TRAUMA_INTEGRATION', 'INTEGRATING_CONFLUENCES'],
        correlationStrength: 0.9,
        mechanism: 'Cannot engage in sacred practice, trauma work, or wellness without feeling safe',
        lagPeriod: 300000
    },
    // Trust → triads requiring reliance on others
    {
        fotIndicator: 'Trust',
        triadIds: ['CULTURAL_ADVANCEMENT', 'DAILY_LIVING', 'NOURISHMENT'],
        correlationStrength: 0.85,
        mechanism: 'Cannot share resources, govern together, or build habitat without trust',
        lagPeriod: 600000
    },
    // Coherence → triads requiring alignment and integration
    {
        fotIndicator: 'Coherence',
        triadIds: ['FUNCTIONAL_CONGRUENCE', 'INTER_RELATIONAL', 'OMNIPRESENCE'],
        correlationStrength: 0.8,
        mechanism: 'Complex systems, communication, and existential matters require coherent action',
        lagPeriod: 900000
    },
    // Attunement → triads requiring awareness of others
    {
        fotIndicator: 'Attunement',
        triadIds: ['INTEGRATING_CONFLUENCES', 'NOURISHMENT', 'INTER_RELATIONAL'],
        correlationStrength: 0.75,
        mechanism: 'Cannot care for wellness, respect nature, or communicate deeply without attunement',
        lagPeriod: 300000
    },
    // Openness → triads requiring novelty and exploration
    {
        fotIndicator: 'Openness',
        triadIds: ['NUCLEIC_CENTER', 'FUNCTIONAL_CONGRUENCE', 'OMNIPRESENCE'],
        correlationStrength: 0.7,
        mechanism: 'Science, innovation, and consciousness exploration require openness',
        lagPeriod: 600000
    }
];

// ═══════════════════════════════════════════════════════════
// CORRELATION ENGINE
// ═══════════════════════════════════════════════════════════

interface CommunityState {
    // FOT Layer
    fotIndicators: FOTIndicator[];
    fotComposite: number;
    ttgm: TTGMFieldData;
    
    // Domain Layer
    domains: Map<string, ArchetypalDomain>;
    
    // Cross-layer correlations
    activeCorrelations: CorrelationResult[];
    compositeHealthScore: number;
}

interface CorrelationResult {
    fromFOT: string;
    toDomain: string;
    correlationScore: number;    // Calculated correlation
    expectedHealth: number;       // What domain health SHOULD be
    actualHealth: number;        // What domain health IS
    divergence: number;          // actual - expected (positive = thriving beyond expectation)
    timestamp: number;
}

class CorrelationEngine {
    private correlations: FOTDomainCorrelation[] = FOT_DOMAIN_CORRELATIONS;
    
    // Calculate all correlations between current FOT state and domain states
    calculateCorrelations(fot: FOTIndicator[], domains: ArchetypalDomain[]): CorrelationResult[] {
        const results: CorrelationResult[] = [];
        
        // Get current FOT indicator values
        const fotValues = new Map(fot.map(i => [i.name, i.value]));
        
        for (const corr of this.correlations) {
            const fotValue = fotValues.get(corr.fotIndicator) || 0.5;
            
            for (const domainId of corr.domainIds) {
                const domain = domains.find(d => d.id === domainId);
                if (!domain) continue;
                
                // Expected domain health based on FOT correlation
                const expectedHealth = fotValue * corr.correlationStrength;
                
                // Calculate divergence (actual vs expected)
                const divergence = domain.healthScore - expectedHealth;
                
                results.push({
                    fromFOT: corr.fotIndicator,
                    toDomain: domainId,
                    correlationScore: corr.correlationStrength,
                    expectedHealth,
                    actualHealth: domain.healthScore,
                    divergence,
                    timestamp: Date.now()
                });
            }
        }
        
        return results;
    }
    
    // Calculate composite community health score
    // Considers BOTH layers weighted together
    calculateCompositeHealth(
        fotComposite: number,
        domainHealthScores: number[],
        correlationResults: CorrelationResult[]
    ): number {
        // FOT contributes 40%, Domains contribute 40%, Correlation alignment contributes 20%
        
        const fotWeight = 0.4;
        const domainWeight = 0.4;
        const correlationWeight = 0.2;
        
        // Average domain health
        const avgDomainHealth = domainHealthScores.length > 0
            ? domainHealthScores.reduce((a, b) => a + b, 0) / domainHealthScores.length
            : 0.5;
        
        // Correlation alignment: how well FOT predictions match reality
        // Divergence close to 0 = aligned (good), large divergence = misaligned (bad)
        const divergences = correlationResults.map(r => Math.abs(r.divergence));
        const avgDivergence = divergences.length > 0
            ? divergences.reduce((a, b) => a + b, 0) / divergences.length
            : 0;
        const correlationAlignment = Math.max(0, 1 - avgDivergence);  // 0 = totally misaligned, 1 = perfectly aligned
        
        return (fotComposite * fotWeight) + 
               (avgDomainHealth * domainWeight) + 
               (correlationAlignment * correlationWeight);
    }
    
    // Identify "Barn Raising" opportunities
    // Where FOT indicates readiness but domain is weak = potential for growth
    findBarnRaisingOpportunities(correlationResults: CorrelationResult[]): BarnRaisingOpportunity[] {
        const opportunities: BarnRaisingOpportunity[] = [];
        
        // Look for positive divergence: FOT strong, domain weak
        // This means the community HAS the capacity (FOT) but isn't applying it to this domain
        const positiveDivergence = correlationResults
            .filter(r => r.divergence > 0.2)  // FOT predicts better than actual
            .sort((a, b) => b.divergence - a.divergence);
        
        for (const corr of positiveDivergence.slice(0, 5)) {
            opportunities.push({
                domainId: corr.toDomain,
                domainName: ARCHETYPAL_DOMAINS.find(d => d.id === corr.toDomain)?.name || 'Unknown',
                fotReadiness: corr.expectedHealth,      // FOT says this should work
                currentDomainHealth: corr.actualHealth,  // But domain is weak
                gap: corr.divergence,
                recommendedAction: generateBarnRaisingAction(corr.fromFOT, corr.toDomain),
                urgency: corr.divergence > 0.5 ? 'high' : corr.divergence > 0.3 ? 'medium' : 'low'
            });
        }
        
        return opportunities;
    }
    
    // Identify where FOT is weak and domain is strong but could collapse
    // (Inverse: domain exists but FOT can't sustain it)
    findPotentialDeclines(correlationResults: CorrelationResult[]): DeclineWarning[] {
        return correlationResults
            .filter(r => r.divergence < -0.3)  // Domain healthier than FOT predicts
            .map(r => ({
                domainId: r.toDomain,
                domainName: ARCHETYPAL_DOMAINS.find(d => d.id === r.toDomain)?.name || 'Unknown',
                warning: 'Domain may collapse as FOT cannot sustain it',
                risk: Math.abs(r.divergence),
                recommendedAction: `Strengthen ${r.fromFOT} to sustain ${r.toDomain}`
            }));
    }
}

function generateBarnRaisingAction(fotIndicator: string, domainId: string): string {
    const actions: Record<string, Record<string, string>> = {
        'Psychological Safety': {
            d1: 'Create sacred ceremony circles to build spiritual safety',
            d3: 'Host ritual arts gatherings where vulnerability is welcomed',
            d13: 'Facilitate wellness circles for emotional safety',
            d19: 'Address power dynamics through structured dialogue',
            d20: 'Create safe conflict resolution practices'
        },
        'Trust': {
            d7: 'Build shared habitat projects requiring collective trust',
            d9: 'Organize neighborhood gatherings to strengthen local bonds',
            d10: 'Launch learning circles with mutual commitment',
            d11: 'Start commerce experiments based on trust exchange',
            d12: 'Host governance workshops for transparent decision-making'
        },
        'Coherence': {
            d5: 'Create integrated energy systems requiring aligned action',
            d16: 'Develop currency models with coherent value frameworks',
            d17: 'Build tools that require coordinated effort',
            d22: 'Establish communication systems with coherent protocols',
            d26: 'Work on simplifying complex systems together'
        },
        'Attunement': {
            d4: 'Go on nature walks together to attune to the land',
            d6: 'Grow food together - attune to seasonal rhythms',
            d13: 'Practice wellness together - listen to bodies collectively',
            d14: 'Create spaces for diverse populations to be truly heard',
            d15: 'Play together - attune through joy and laughter'
        },
        'Openness': {
            d2: 'Start science inquiry circles - explore questions together',
            d3: 'Create experimental art rituals - try new forms',
            d18: 'Host emergence hackathons for rapid prototyping',
            d25: 'Explore ecological and ideological perspectives openly',
            d27: 'Practice consciousness exploration together - meditation, inquiry'
        }
    };
    
    return actions[fotIndicator]?.[domainId] || 'Initiate community dialogue around this domain';
}

// ═══════════════════════════════════════════════════════════
// DOMAIN SENSING ENGINE
// ═══════════════════════════════════════════════════════════

class DomainSensingEngine {
    // Detect domain activity from behavioral signals
    processDomainSignal(domainId: string, signal: DomainSignal): void {
        // Similar to FOT sensing, but for domains
        // Signals like: meeting_attended, project_contributed, resource_shared, etc.
    }
    
    // Calculate domain health based on:
    // 1. Participation frequency
    // 2. Resource allocation
    // 3. Project completion
    // 4. Member satisfaction (if measured)
    calculateDomainHealth(domainId: string, signals: DomainSignal[]): number {
        // Weighted combination of signals
        const participationScore = signals.filter(s => s.type === 'participation').length / 10;
        const resourceScore = signals.filter(s => s.type === 'resource').length / 5;
        const projectScore = signals.filter(s => s.type === 'project').length / 3;
        
        return Math.min(1, (participationScore * 0.4) + (resourceScore * 0.3) + (projectScore * 0.3));
    }
    
    // Determine trajectory (growing/stable/declining)
    calculateTrajectory(domainId: string, history: number[]): 'growing' | 'stable' | 'declining' {
        if (history.length < 3) return 'stable';
        
        const recent = history.slice(-3);
        const older = history.slice(-6, -3);
        
        const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
        const olderAvg = older.length > 0 ? older.reduce((a, b) => a + b, 0) / older.length : recentAvg;
        
        if (recentAvg > olderAvg * 1.2) return 'growing';
        if (recentAvg < olderAvg * 0.8) return 'declining';
        return 'stable';
    }
}

interface DomainSignal {
    type: 'participation' | 'resource' | 'project' | 'decision' | 'conflict' | 'celebration';
    domainId: string;
    participantId: string;
    intensity: number;
    timestamp: number;
}

// ═══════════════════════════════════════════════════════════
// PROFILER UI COMPONENT (React)
// ═══════════════════════════════════════════════════════════

interface ProfilerDashboardProps {
    communityState: CommunityState;
}

export const AMEProfiler: React.FC<ProfilerDashboardProps> = ({ communityState }) => {
    const engine = new CorrelationEngine();
    const domainEngine = new DomainSensingEngine();
    
    // Calculate correlations
    const correlations = engine.calculateCorrelations(
        communityState.fotIndicators,
        Array.from(communityState.domains.values())
    );
    
    // Find opportunities
    const opportunities = engine.findBarnRaisingOpportunities(correlations);
    const warnings = engine.findPotentialDeclines(correlations);
    
    // Composite health
    const domainScores = Array.from(communityState.domains.values()).map(d => d.healthScore);
    const compositeHealth = engine.calculateCompositeHealth(
        communityState.fotComposite,
        domainScores,
        correlations
    );
    
    return (
        <div style={styles.profilerContainer}>
            {/* Header with composite score */}
            <div style={styles.profilerHeader}>
                <h2 style={{ margin: 0 }}>AME Profiler</h2>
                <div style={styles.compositeScore}>
                    <span style={{ fontSize: '32px', fontWeight: 'bold' }}>
                        {(compositeHealth * 100).toFixed(0)}%
                    </span>
                    <span style={{ color: '#888', fontSize: '12px' }}>Composite Health</span>
                </div>
            </div>
            
            {/* Two-layer visualization */}
            <div style={styles.twoLayerDisplay}>
                {/* Layer 1: FOT */}
                <div style={styles.layerPanel}>
                    <h3 style={styles.layerTitle}>Layer 1: FOT (Soft)</h3>
                    <div style={styles.fotIndicators}>
                        {communityState.fotIndicators.map(ind => (
                            <div key={ind.name} style={styles.indicatorRow}>
                                <span>{ind.name}</span>
                                <div style={styles.indicatorBar}>
                                    <div style={{ width: `${ind.value * 100}%`, background: getHealthColor(ind.value) }} />
                                </div>
                                <span>{(ind.value * 100).toFixed(0)}%</span>
                            </div>
                        ))}
                    </div>
                    <div style={styles.ttgmDisplay}>
                        <span style={{ color: '#666', fontSize: '11px' }}>TTGM: {communityState.ttgm.sacredRatio.toFixed(2)}</span>
                    </div>
                </div>
                
                {/* Layer 2: Domains - organized by triads */}
                <div style={styles.layerPanel}>
                    <h3 style={styles.layerTitle}>Layer 2: Archetypal Domains (Hard)</h3>
                    <div style={styles.triadGrid}>
                        {Object.values(DomainTriad).map((triad, i) => (
                            <div key={triad} style={styles.triadGroup}>
                                <div style={styles.triadLabel}>{triad}</div>
                                <div style={styles.triadDomains}>
                                    {ARCHETYPAL_DOMAINS.filter(d => d.triad === triad).map(d => {
                                        const domainState = communityState.domains.get(d.id);
                                        return (
                                            <div key={d.id} style={{
                                                ...styles.domainCell,
                                                borderColor: domainState ? getHealthColor(domainState.healthScore) : '#333'
                                            }}>
                                                <div style={{ fontSize: '10px', fontWeight: 600 }}>{d.name}</div>
                                                <div style={{ fontSize: '9px', color: '#666' }}>
                                                    {domainState ? `${(domainState.healthScore * 100).toFixed(0)}%` : '--'}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Correlation visualization */}
            <div style={styles.correlationPanel}>
                <h3 style={styles.layerTitle}>Cross-Layer Correlations</h3>
                <div style={styles.correlationList}>
                    {correlations.slice(0, 8).map((c, i) => (
                        <div key={i} style={styles.correlationRow}>
                            <span style={{ color: '#4ecdc4' }}>{c.fromFOT}</span>
                            <span style={{ color: '#666' }}>→</span>
                            <span style={{ color: '#ffe66d' }}>{ARCHETYPAL_DOMAINS.find(d => d.id === c.toDomain)?.name}</span>
                            <span style={{ 
                                color: c.divergence > 0 ? '#00ff88' : c.divergence < 0 ? '#ff4444' : '#666',
                                marginLeft: 'auto'
                            }}>
                                {c.divergence > 0 ? '↑' : c.divergence < 0 ? '↓' : '→'} {(c.divergence * 100).toFixed(0)}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Barn Raising Opportunities */}
            {opportunities.length > 0 && (
                <div style={styles.opportunityPanel}>
                    <h3 style={styles.layerTitle}>🌾 Barn Raising Opportunities</h3>
                    {opportunities.map((opp, i) => (
                        <div key={i} style={{
                            ...styles.opportunityCard,
                            borderColor: opp.urgency === 'high' ? '#ff6b6b' : opp.urgency === 'medium' ? '#ffe66d' : '#4ecdc4'
                        }}>
                            <div style={{ fontWeight: 600 }}>{opp.domainName}</div>
                            <div style={{ fontSize: '12px', color: '#aaa' }}>{opp.recommendedAction}</div>
                            <div style={{ fontSize: '11px', color: '#666' }}>
                                Gap: {(opp.gap * 100).toFixed(0)}% | FOT readiness: {(opp.fotReadiness * 100).toFixed(0)}%
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Decline Warnings */}
            {warnings.length > 0 && (
                <div style={styles.warningPanel}>
                    <h3 style={styles.layerTitle}>⚠️ Potential Declines</h3>
                    {warnings.map((w, i) => (
                        <div key={i} style={styles.warningCard}>
                            <span style={{ color: '#ff6b6b' }}>{w.domainName}</span>: {w.warning}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

function getHealthColor(value: number): string {
    return value > 0.6 ? '#00ff88' : value > 0.3 ? '#ffe66d' : '#ff4444';
}

const styles: Record<string, React.CSSProperties> = {
    profilerContainer: {
        background: '#0a0a12',
        borderRadius: '16px',
        padding: '20px',
        color: '#e0e0e0'
    },
    profilerHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        borderBottom: '1px solid #2a2a3a',
        paddingBottom: '16px'
    },
    compositeScore: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    twoLayerDisplay: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '20px'
    },
    layerPanel: {
        background: '#12121a',
        borderRadius: '12px',
        padding: '16px'
    },
    layerTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#fff',
        marginBottom: '12px'
    },
    fotIndicators: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    indicatorRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '12px'
    },
    indicatorBar: {
        flex: 1,
        height: '6px',
        background: '#2a2a3a',
        borderRadius: '3px',
        overflow: 'hidden'
    },
    ttgmDisplay: {
        marginTop: '12px',
        paddingTop: '12px',
        borderTop: '1px solid #2a2a3a'
    },
    domainGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px'
    },
    domainCell: {
        padding: '8px',
        background: '#1a1a2e',
        borderRadius: '6px',
        border: '1px solid',
        textAlign: 'center'
    },
    correlationPanel: {
        background: '#12121a',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '20px'
    },
    correlationList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
    },
    correlationRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '12px'
    },
    opportunityPanel: {
        background: 'rgba(0, 255, 136, 0.05)',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '20px',
        border: '1px solid rgba(0, 255, 136, 0.2)'
    },
    opportunityCard: {
        padding: '12px',
        background: '#12121a',
        borderRadius: '8px',
        border: '1px solid',
        marginBottom: '8px'
    },
    warningPanel: {
        background: 'rgba(255, 68, 68, 0.05)',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid rgba(255, 68, 68, 0.2)'
    },
    warningCard: {
        fontSize: '12px',
        color: '#ff6b6b',
        padding: '8px 0',
        borderBottom: '1px solid #2a2a3a'
    }
};

export { ARCHETYPAL_DOMAINS, FOT_DOMAIN_CORRELATIONS, CorrelationEngine };