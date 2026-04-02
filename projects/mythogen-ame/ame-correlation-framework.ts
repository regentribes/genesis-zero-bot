// ═══════════════════════════════════════════════════════════════════════════════
// AME TWO-LAYER CORRELATION FRAMEWORK
// Layer 1: FOT (Field of Trust - soft dynamics) ↔ Layer 2: Archetypal Domains (hard dynamics)
// ═══════════════════════════════════════════════════════════════════════════════

import { 
    FOTSensingEngine, 
    FOTState, 
    FOTIndicator 
} from './sensing-engine';
import { 
    ARCHETYPAL_DOMAINS, 
    DomainTriad, 
    FOT_DOMAIN_CORRELATIONS,
    FOTDomainCorrelation 
} from './two-layer-correlation';

// ═══════════════════════════════════════════════════════════════════════════════
// CORE INTERFACES
// ═══════════════════════════════════════════════════════════════════════════════

interface AMEState {
    // Layer 1: FOT
    fot: FOTState;
    ttgm: TTGMFieldData;
    
    // Layer 2: Domains
    domains: Map<string, DomainState>;
    triads: Map<DomainTriad, TriadState>;
    
    // Cross-layer
    correlations: CorrelationResult[];
    compositeHealth: number;
    lastUpdated: number;
}

interface DomainState {
    id: string;
    name: string;
    triad: DomainTriad;
    healthScore: number;
    trajectory: 'growing' | 'stable' | 'declining';
    signals: DomainSignal[];
    participantCount: number;
    lastActivity: number;
}

interface TriadState {
    triad: DomainTriad;
    domains: string[];  // domain IDs
    aggregateHealth: number;  // MIN of all 3 (hologram)
    weakestDomain: string;
    strongestDomain: string;
}

interface CorrelationResult {
    fotIndicator: string;
    triad: DomainTriad;
    correlationStrength: number;
    expectedHealth: number;
    actualHealth: number;
    divergence: number;  // positive = thriving beyond expectation
    timestamp: number;
}

interface DomainSignal {
    type: 'participation' | 'resource' | 'project' | 'decision' | 'conflict' | 'celebration' | 'ritual' | 'commerce' | 'learning';
    intensity: number;
    participantId: string;
    timestamp: number;
    metadata?: Record<string, any>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CORRELATION ENGINE
// ═══════════════════════════════════════════════════════════════════════════════

class AMECorrelationEngine {
    private communityId: string;
    private correlationHistory: CorrelationResult[][] = [];
    
    constructor(communityId: string) {
        this.communityId = communityId;
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // MAIN: Calculate all cross-layer correlations
    // ─────────────────────────────────────────────────────────────────────────
    
    calculateCorrelations(fotState: FOTState, domainStates: Map<string, DomainState>): CorrelationResult[] {
        const results: CorrelationResult[] = [];
        const fotValues = new Map(fotState.indicators.map(i => [i.name, i.value]));
        
        // For each FOT indicator → triad correlation
        for (const corr of FOT_DOMAIN_CORRELATIONS) {
            const fotValue = fotValues.get(corr.fotIndicator) || 0.5;
            
            // For each triad affected by this FOT indicator
            for (const triad of corr.triadIds) {
                const triadState = this.getTriadState(triad, domainStates);
                
                // Expected health based on FOT
                const expectedHealth = fotValue * corr.correlationStrength;
                
                // Actual = triad's aggregate health
                const actualHealth = triadState.aggregateHealth;
                
                results.push({
                    fotIndicator: corr.fotIndicator,
                    triad,
                    correlationStrength: corr.correlationStrength,
                    expectedHealth,
                    actualHealth,
                    divergence: actualHealth - expectedHealth,
                    timestamp: Date.now()
                });
            }
        }
        
        this.correlationHistory.push(results);
        if (this.correlationHistory.length > 100) {
            this.correlationHistory.shift();
        }
        
        return results;
    }
    
    private getTriadState(triad: DomainTriad, domains: Map<string, DomainState>): TriadState {
        const domainIds = ARCHETYPAL_DOMAINS
            .filter(d => d.triad === triad)
            .map(d => d.id);
        
        const domainStates = domainIds
            .map(id => domains.get(id))
            .filter((d): d is DomainState => d !== undefined);
        
        const healths = domainStates.map(d => d.healthScore);
        const aggregateHealth = healths.length > 0 ? Math.min(...healths) : 0.5;
        
        // Find weakest and strongest
        const sorted = [...domainStates].sort((a, b) => a.healthScore - b.healthScore);
        const weakest = sorted[0]?.id || '';
        const strongest = sorted[sorted.length - 1]?.id || '';
        
        return {
            triad,
            domains: domainIds,
            aggregateHealth,
            weakestDomain: weakest,
            strongestDomain: strongest
        };
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // COMPOSITE HEALTH SCORE
    // ─────────────────────────────────────────────────────────────────────────
    
    calculateCompositeHealth(
        fotComposite: number,
        correlations: CorrelationResult[]
    ): number {
        // Weighted composite:
        // - FOT layer: 35%
        // - Domain triads: 35%
        // - Correlation alignment: 30% (how well predictions match reality)
        
        const fotWeight = 0.35;
        const domainWeight = 0.35;
        const correlationWeight = 0.30;
        
        // Correlation alignment: divergence should be close to 0 for health
        // Large divergence = FOT and domains are out of sync = unhealthy
        const divergences = correlations.map(c => Math.abs(c.divergence));
        const avgDivergence = divergences.length > 0 
            ? divergences.reduce((a, b) => a + b, 0) / divergences.length 
            : 0;
        const alignment = Math.max(0, 1 - avgDivergence);  // 1 = perfect alignment
        
        return (fotComposite * fotWeight) + (alignment * correlationWeight);
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // BARN RAISING OPPORTUNITIES
    // ─────────────────────────────────────────────────────────────────────────
    
    findBarnRaisingOpportunities(
        correlations: CorrelationResult[],
        domainStates: Map<string, DomainState>
    ): BarnRaisingOpportunity[] {
        const opportunities: BarnRaisingOpportunity[] = [];
        
        // Positive divergence: FOT predicts health, but domain is weak
        // = Community has capacity (FOT) but not applying to this domain
        const positiveDiv = correlations
            .filter(c => c.divergence > 0.15 && c.actualHealth < 0.5)
            .sort((a, b) => b.divergence - a.divergence);
        
        for (const corr of positiveDiv.slice(0, 5)) {
            const domain = domainStates.get(corr.triad);
            if (!domain) continue;
            
            // Get specific domain that needs work
            const triadDomains = ARCHETYPAL_DOMAINS.filter(d => d.triad === corr.triad);
            const weakestDomain = triadDomains.find(d => {
                const state = domainStates.get(d.id);
                return state && state.healthScore < corr.actualHealth;
            });
            
            opportunities.push({
                triad: corr.triad,
                domainId: weakestDomain?.id || '',
                domainName: weakestDomain?.name || corr.triad,
                fotIndicator: corr.fotIndicator,
                fotReadiness: corr.expectedHealth,
                currentHealth: corr.actualHealth,
                gap: corr.divergence,
                urgency: corr.divergence > 0.4 ? 'high' : corr.divergence > 0.25 ? 'medium' : 'low',
                action: this.generateAction(corr.fotIndicator, weakestDomain?.id || ''),
                mechanism: FOT_DOMAIN_CORRELATIONS.find(c => c.fotIndicator === corr.fotIndicator)?.mechanism || ''
            });
        }
        
        return opportunities;
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // DECLINE WARNINGS
    // ─────────────────────────────────────────────────────────────────────────
    
    findDeclineWarnings(
        correlations: CorrelationResult[],
        correlationHistory: CorrelationResult[][]
    ): DeclineWarning[] {
        const warnings: DeclineWarning[] = [];
        
        // Negative divergence: domain healthier than FOT predicts
        // = Domain might collapse when FOT catches up
        const negativeDiv = correlations.filter(c => c.divergence < -0.2);
        
        for (const corr of negativeDiv) {
            // Check if declining over time
            const recentDivs = this.getRecentDivergences(correlationHistory, corr.triad);
            const isDeclining = recentDivs.length >= 3 && 
                recentDivs[recentDivs.length - 1] < recentDivs[0] - 0.1;
            
            if (isDeclining) {
                warnings.push({
                    triad: corr.triad,
                    risk: Math.abs(corr.divergence),
                    warning: `Triad ${corr.triad} shows declining alignment`,
                    trend: 'declining',
                    recommendation: `Strengthen ${corr.fotIndicator} to sustain this triad`
                });
            }
        }
        
        return warnings;
    }
    
    private getRecentDivergences(history: CorrelationResult[][], triad: DomainTriad): number[] {
        return history
            .slice(-5)
            .flatMap(batch => batch.filter(c => c.triad === triad))
            .map(c => c.divergence);
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // TRIAD CROSS-TALK (inter-triad influence)
    // ─────────────────────────────────────────────────────────────────────────
    
    calculateTriadCrossTalk(domainStates: Map<string, DomainState>): TriadInfluence[] {
        const influences: TriadInfluence[] = [];
        
        const triads = Object.values(DomainTriad);
        
        for (let i = 0; i < triads.length; i++) {
            for (let j = i + 1; j < triads.length; j++) {
                const triadA = triads[i];
                const triadB = triads[j];
                
                const healthA = this.getTriadAggregate(triadA, domainStates);
                const healthB = this.getTriadAggregate(triadB, domainStates);
                
                // Cross-talk strength = how much one affects another
                // (simplified heuristic - in production would be learned)
                const influence = this.calculateInfluence(triadA, triadB, healthA, healthB);
                
                if (Math.abs(influence.strength) > 0.1) {
                    influences.push(influence);
                }
            }
        }
        
        return influences.sort((a, b) => Math.abs(b.strength) - Math.abs(a.strength));
    }
    
    private getTriadAggregate(triad: DomainTriad, domains: Map<string, DomainState>): number {
        const triadDomains = ARCHETYPAL_DOMAINS.filter(d => d.triad === triad);
        const healths = triadDomains
            .map(d => domains.get(d.id)?.healthScore)
            .filter((h): h is number => h !== undefined);
        
        return healths.length > 0 ? Math.min(...healths) : 0.5;
    }
    
    private calculateInfluence(
        fromTriad: DomainTriad, 
        toTriad: DomainTriad, 
        fromHealth: number,
        toHealth: number
    ): TriadInfluence {
        // Predefined influence map based on domain relationships
        const influenceMap: Record<string, number> = {
            'NUCLEIC_CENTER→NOURISHMENT': 0.3,   // Vision guides resource use
            'NUCLEIC_CENTER→DAILY_LIVING': 0.25, // Vision shapes habitat
            'NOURISHMENT→DAILY_LIVING': 0.4,     // Resources enable daily life
            'CULTURAL_ADVANCEMENT→FUNCTIONAL_CONGRUENCE': 0.35, // Learning enables tools
            'INTEGRATING_CONFLUENCES→NUCLEIC_CENTER': 0.2, // Wellness supports spirituality
            'TRAUMA_INTEGRATION→NUCLEIC_CENTER': -0.3, // Unresolved trauma blocks spirituality
            'INTER_RELATIONAL→CULTURAL_ADVANCEMENT': 0.3, // Communication enables learning
            'OMNIPRESENCE→NUCLEIC_CENTER': 0.25, // Consciousness informs meaning
        };
        
        const key = `${fromTriad}→${toTriad}`;
        const baseStrength = influenceMap[key] || 0.1;
        
        // Influence modulated by health difference
        const healthDelta = fromHealth - toHealth;
        const strength = baseStrength * (1 + healthDelta);
        
        return {
            fromTriad,
            toTriad,
            strength,
            direction: strength > 0 ? 'positive' : 'negative',
            mechanism: this.getInfluenceMechanism(fromTriad, toTriad)
        };
    }
    
    private getInfluenceMechanism(from: DomainTriad, to: DomainTriad): string {
        const mechanisms: Record<string, string> = {
            'NUCLEIC_CENTER→NOURISHMENT': 'Spiritual purpose guides resource stewardship',
            'NOURISHMENT→DAILY_LIVING': 'Resources enable habitat and mobility',
            'CULTURAL_ADVANCEMENT→FUNCTIONAL_CONGRUENCE': 'Learning enables tool development',
            'TRAUMA_INTEGRATION→NUCLEIC_CENTER': 'Unresolved trauma blocks spiritual practice',
            'INTER_RELATIONAL→CULTURAL_ADVANCEMENT': 'Communication enables education and commerce'
        };
        
        return mechanisms[`${from}→${to}`] || 'Dynamic interaction between triads';
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // ACTION GENERATION
    // ─────────────────────────────────────────────────────────────────────────
    
    private generateAction(fotIndicator: string, domainId: string): string {
        const actions: Record<string, Record<string, string>> = {
            'Psychological Safety': {
                'd1': 'Create sacred ceremony circles for spiritual safety',
                'd3': 'Host ritual arts gatherings where vulnerability is welcomed',
                'd13': 'Facilitate wellness circles for emotional safety',
                'd19': 'Address power dynamics through structured dialogue',
                'd20': 'Create safe conflict resolution practices'
            },
            'Trust': {
                'd7': 'Build shared habitat projects requiring collective trust',
                'd9': 'Organize neighborhood gatherings to strengthen local bonds',
                'd10': 'Launch learning circles with mutual commitment',
                'd11': 'Start commerce experiments based on trust exchange',
                'd12': 'Host governance workshops for transparent decision-making'
            },
            'Coherence': {
                'd16': 'Develop currency models with coherent value frameworks',
                'd17': 'Build tools that require coordinated effort',
                'd22': 'Establish communication systems with coherent protocols',
                'd26': 'Work on simplifying complex systems together'
            },
            'Attunement': {
                'd4': 'Go on nature walks together to attune to the land',
                'd6': 'Grow food together - attune to seasonal rhythms',
                'd13': 'Practice wellness together - listen to bodies collectively',
                'd14': 'Create spaces for diverse populations to be truly heard',
                'd15': 'Play together - attune through joy and laughter'
            },
            'Openness': {
                'd2': 'Start science inquiry circles - explore questions together',
                'd3': 'Create experimental art rituals - try new forms',
                'd18': 'Host emergence hackathons for rapid prototyping',
                'd25': 'Explore ecological and ideological perspectives openly',
                'd27': 'Practice consciousness exploration together'
            }
        };
        
        return actions[fotIndicator]?.[domainId] || `Strengthen ${fotIndicator} to support this domain`;
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
// OUTPUT STRUCTURES
// ═══════════════════════════════════════════════════════════════════════════════

interface BarnRaisingOpportunity {
    triad: DomainTriad;
    domainId: string;
    domainName: string;
    fotIndicator: string;
    fotReadiness: number;
    currentHealth: number;
    gap: number;
    urgency: 'high' | 'medium' | 'low';
    action: string;
    mechanism: string;
}

interface DeclineWarning {
    triad: DomainTriad;
    risk: number;
    warning: string;
    trend: 'stable' | 'declining' | 'improving';
    recommendation: string;
}

interface TriadInfluence {
    fromTriad: DomainTriad;
    toTriad: DomainTriad;
    strength: number;
    direction: 'positive' | 'negative';
    mechanism: string;
}

interface AMEProfilerReport {
    timestamp: number;
    compositeHealth: number;
    fotLayer: {
        composite: number;
        indicators: FOTIndicator[];
        ttgmSacredRatio: number;
    };
    domainLayer: {
        triads: TriadState[];
        weakestTriad: DomainTriad;
        strongestTriad: DomainTriad;
    };
    crossLayer: {
        correlations: CorrelationResult[];
        avgDivergence: number;
        alignment: number;
    };
    opportunities: BarnRaisingOpportunity[];
    warnings: DeclineWarning[];
    influences: TriadInfluence[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PROFILER CLASS
// ═══════════════════════════════════════════════════════════════════════════════

class AMEProfiler {
    private engine: AMECorrelationEngine;
    private domainStates: Map<string, DomainState> = new Map();
    private fotState: FOTState | null = null;
    
    constructor(communityId: string) {
        this.engine = new AMECorrelationEngine(communityId);
        
        // Initialize domain states
        for (const domain of ARCHETYPAL_DOMAINS) {
            this.domainStates.set(domain.id, {
                id: domain.id,
                name: domain.name,
                triad: domain.triad,
                healthScore: 0.5,
                trajectory: 'stable',
                signals: [],
                participantCount: 0,
                lastActivity: Date.now()
            });
        }
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // UPDATE METHODS
    // ─────────────────────────────────────────────────────────────────────────
    
    updateFOT(fotState: FOTState): void {
        this.fotState = fotState;
    }
    
    processDomainSignal(domainId: string, signal: DomainSignal): void {
        const domain = this.domainStates.get(domainId);
        if (!domain) return;
        
        domain.signals.push(signal);
        domain.lastActivity = Date.now();
        domain.participantCount = [...new Set(domain.signals.map(s => s.participantId))].length;
        
        // Recalculate health based on signals
        this.recalculateDomainHealth(domainId);
    }
    
    private recalculateDomainHealth(domainId: string): void {
        const domain = this.domainStates.get(domainId);
        if (!domain) return;
        
        // Weight signals by type
        const weights: Record<string, number> = {
            'ritual': 0.2,
            'participation': 0.15,
            'learning': 0.15,
            'commerce': 0.15,
            'decision': 0.15,
            'celebration': 0.1,
            'conflict': -0.1,
            'project': 0.1
        };
        
        let health = 0.3;  // Base
        
        for (const signal of domain.signals.slice(-50)) {  // Last 50 signals
            const weight = weights[signal.type] || 0.1;
            health += weight * signal.intensity * 0.1;
        }
        
        domain.healthScore = Math.max(0, Math.min(1, health));
        
        // Calculate trajectory from history
        const recent = domain.signals.slice(-10).map(s => s.intensity);
        const older = domain.signals.slice(-20, -10).map(s => s.intensity);
        
        if (recent.length > 0 && older.length > 0) {
            const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
            const olderAvg = older.reduce((a, b) => a + b, 0) / older.length;
            
            if (recentAvg > olderAvg * 1.2) domain.trajectory = 'growing';
            else if (recentAvg < olderAvg * 0.8) domain.trajectory = 'declining';
            else domain.trajectory = 'stable';
        }
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // GENERATE REPORT
    // ─────────────────────────────────────────────────────────────────────────
    
    generateReport(): AMEProfilerReport {
        if (!this.fotState) {
            throw new Error('FOT state not initialized');
        }
        
        // Calculate correlations
        const correlations = this.engine.calculateCorrelations(this.fotState, this.domainStates);
        
        // Calculate composite health
        const compositeHealth = this.engine.calculateCompositeHealth(
            this.fotState.composite,
            correlations
        );
        
        // Find opportunities and warnings
        const opportunities = this.engine.findBarnRaisingOpportunities(correlations, this.domainStates);
        const warnings = this.engine.findDeclineWarnings(correlations, this.engine['correlationHistory']);
        
        // Calculate cross-triad influences
        const influences = this.engine.calculateTriadCrossTalk(this.domainStates);
        
        // Get triad states
        const triads = Object.values(DomainTriad).map(triad => {
            const domainIds = ARCHETYPAL_DOMAINS.filter(d => d.triad === triad).map(d => d.id);
            const healths = domainIds.map(id => this.domainStates.get(id)?.healthScore || 0);
            
            return {
                triad,
                domains: domainIds,
                aggregateHealth: healths.length > 0 ? Math.min(...healths) : 0.5,
                weakestDomain: domainIds.reduce((weak, id) => {
                    const w = this.domainStates.get(weak)?.healthScore || 1;
                    const c = this.domainStates.get(id)?.healthScore || 1;
                    return c < w ? id : weak;
                }, domainIds[0] || ''),
                strongestDomain: domainIds.reduce((strong, id) => {
                    const s = this.domainStates.get(strong)?.healthScore || 0;
                    const c = this.domainStates.get(id)?.healthScore || 0;
                    return c > s ? id : strong;
                }, domainIds[0] || '')
            };
        });
        
        // Find weakest and strongest triads
        const sortedTriads = [...triads].sort((a, b) => a.aggregateHealth - b.aggregateHealth);
        const weakestTriad = sortedTriads[0]?.triad || DomainTriad.NUCLEIC_CENTER;
        const strongestTriad = sortedTriads[sortedTriads.length - 1]?.triad || DomainTriad.OMNIPRESENCE;
        
        // Calculate alignment
        const divergences = correlations.map(c => Math.abs(c.divergence));
        const avgDivergence = divergences.length > 0 ? divergences.reduce((a, b) => a + b, 0) / divergences.length : 0;
        const alignment = Math.max(0, 1 - avgDivergence);
        
        return {
            timestamp: Date.now(),
            compositeHealth,
            fotLayer: {
                composite: this.fotState.composite,
                indicators: this.fotState.indicators,
                ttgmSacredRatio: this.fotState.ttgm?.sacredRatio || 0.5
            },
            domainLayer: {
                triads,
                weakestTriad,
                strongestTriad
            },
            crossLayer: {
                correlations,
                avgDivergence,
                alignment
            },
            opportunities,
            warnings,
            influences
        };
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export {
    AMEProfiler,
    AMEProfilerReport,
    AMECorrelationEngine,
    DomainState,
    TriadState,
    CorrelationResult,
    BarnRaisingOpportunity,
    DeclineWarning,
    TriadInfluence,
    DomainSignal
};