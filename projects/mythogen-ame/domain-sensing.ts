// ═══════════════════════════════════════════════════════════════════════════════
// DOMAIN LAYER SENSING ENGINE
// "Sensing variables" for the Archetypal Domains (Enfoldment 7)
// Based on full document reading - Section 7 + related enfoldments
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// SENSING VARIABLE CATEGORIES (14 types from document)
// ═══════════════════════════════════════════════════════════════════════════════

// 1. ENGAGEMENT / PARTICIPATION
interface EngagementSignals {
    // Quantitative
    activeMembers: number;           // Individuals actively engaged weekly
    attendanceRate: number;           // % attendance at domain events
    volunteerHours: number;          // Person-hours volunteered
    newMemberOnboardingRate: number; // New members joining per period
    memberRetention30Day: number;    // 30-day retention
    memberRetention90Day: number;   // 90-day retention
    eventFrequency: number;           // Events per month
    eventVariety: number;            // Diversity of event types
    
    // Sources: event calendars, RSVP logs, volunteer records, membership system
}

// 2. ACTIVITY / OUTPUT
interface ActivitySignals {
    projectsStarted: number;
    projectsCompleted: number;
    outputsProduced: number;          // Exhibitions, reports, meals, code, etc.
    iterationsFromIncubator: number; // Prototyping cycles
    
    // Sources: project management tools, output registries
}

// 3. AFFINITY MAPPING (AME) SIGNALS
interface AMEAffinitySignals {
    clusterDensity: number;          // How tightly connected around this domain
    clusterCentrality: number;       // Who are the key connectors
    affinityStrength: number;        // Average strength of ties
    newConnections: number;          // New links forming
    connectionsBreaking: number;     // Links dissolving
    
    // Sources: AME network graphs
}

// 4. SENTIMENT / QUALITATIVE
interface SentimentSignals {
    averageSentiment: number;        // -1 to 1 from discussions
    pulseSurveyScore: number;        // Quick pulse check results
    qualitativeThemes: string[];     // Key themes from qualitative data
    satisfactionScore: number;      // Self-reported satisfaction
    
    // Sources: surveys, sentiment analysis, discussion threads
}

// 5. REPAIR / INCIDENT
interface RepairSignals {
    conflictReports: number;        // Conflicts filed
    restorativeCirclesHeld: number; // Mediation sessions
    grievanceResolutionTime: number; // Days to resolve
    repairCompletionRate: number;   // % successfully repaired
    
    // Sources: incident trackers, restorative justice logs
}

// 6. HEALTH / VITALITY
interface HealthSignals {
    wellbeingIndex: number;          // Self-reported wellbeing (0-1)
    participantSatisfaction: number; // Domain-specific satisfaction
    energyLevel: number;             // Perceived energy/vitality
    momentumScore: number;           // Feeling of progress
    
    // Sources: surveys, pulse checks
}

// 7. DIVERSITY / REDUNDANCY
interface DiversitySignals {
    ageDiversity: number;            // Age range distribution
    skillDiversity: number;          // Skill set variety
    culturalDiversity: number;       // Cultural backgrounds represented
    contributorRedundancy: number;   // Number of people who can do each role
    perspectiveVariety: number;     // Viewpoint diversity
    
    // Sources: skills matrix, demographics
}

// 8. CROSS-DOMAIN COLLABORATION
interface CrossDomainSignals {
    collaborationsInitiated: number; // Projects started with other domains
    collaborationsActive: number;    // Ongoing cross-domain work
    collaborationDepth: number;     // How deep the integration is (shallow/intermediate/deep)
    referralRate: number;           // How often this domain refers to others
    
    // Sources: project logs, collaboration tracking
}

// 9. MATTER DENSITY / FORMALIZATION
interface MatterDensitySignals {
    sharedAssets: number;            // Physical assets owned/shared
    legalStructures: number;         // Formal entities formed
    policiesAdopted: number;         // Domain-specific policies
    sharedBudget: number;            // Budget under domain control
    formalizedRoles: number;         // Defined roles/positions
    
    // Sources: asset registry, legal records, policy tracker
}

// 10. GOVERNANCE / ALIGNMENT
interface GovernanceSignals {
    alignmentGatePassRate: number;   // % decisions passing consent
    alignmentScoreOverTime: number;  // Consent quality trend
    decisionLatency: number;         // Days from proposal to decision
    participationInDecisions: number;// % members participating
    policyComplianceRate: number;     // Adherence to domain policies
    
    // Sources: governance logs, alignment gate records
}

// 11. LEARNING / ADAPTATION (CLM)
interface LearningSignals {
    learningEvents: number;          // Trainings held
    apprenticeshipsActive: number;     // Active mentorship pairs
    knowledgeArtifacts: number;       // Guides, protocols created
    clmNodesActive: number;           // CLM centers operating
    newNodesForming: number;          // New centers emerging
    
    // Sources: CLM logs, training rosters, knowledge repos
}

// 12. ECONOMIC / RESOURCE FLOWS
interface EconomicSignals {
    resourceInflows: number;         // Funds/resources coming in
    resourceOutflows: number;        // Funds/resources going out
    localTransactions: number;       // Local exchange volume
    microEnterprises: number;         // Domain-related businesses
    equityDistribution: number;       // Resource distribution fairness
    resourceAutonomy: number;        // Self-sufficiency level
    
    // Sources: ledger, finance system, exchange records
}

// 13. ECOLOGICAL / MATERIAL
interface EcologicalSignals {
    foodYieldPerCapita: number;      // kg produced per person
    cropDiversityIndex: number;      // Variety of crops
    soilHealthScore: number;          // Soil quality indicator
    biodiversityCount: number;        // Species count on land
    waterUseEfficiency: number;       // Water per output
    carbonSequestration: number;     // Carbon captured
    wasteCircularity: number;        // % waste recycled/composted
    
    // Sources: farm logs, sensors, biodiversity surveys
}

// 14. TRUST / RELATIONAL DENSITY
interface TrustSignals {
    networkDensity: number;          // Average connections per person
    reciprocityRate: number;          // % exchanges reciprocated
    trustSurveyScore: number;         // Direct trust measure
    socialCapitalIndex: number;       // Composite social trust measure
    vulnerabilitySharing: number;     // Comfort sharing vulnerabilities
    
    // Sources: network graphs, transaction logs, surveys
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPLETE DOMAIN SENSING STATE
// ═══════════════════════════════════════════════════════════════════════════════

interface DomainSensingState {
    domainId: string;
    timestamp: number;
    
    // All 14 signal categories
    engagement: EngagementSignals;
    activity: ActivitySignals;
    affinity: AMEAffinitySignals;
    sentiment: SentimentSignals;
    repair: RepairSignals;
    health: HealthSignals;
    diversity: DiversitySignals;
    crossDomain: CrossDomainSignals;
    matterDensity: MatterDensitySignals;
    governance: GovernanceSignals;
    learning: LearningSignals;
    economic: EconomicSignals;
    ecological: EcologicalSignals;
    trust: TrustSignals;
    
    // Computed domain health (weighted combination)
    computedHealth: number;
    trajectory: 'growing' | 'stable' | 'declining';
    signalsCount: number;
}

// ═══════════════════════════════════════════════════════════════════════════════
// DEFAULT VALUES (baseline healthy state)
// ═══════════════════════════════════════════════════════════════════════════════

const DEFAULT_ENGAGEMENT: EngagementSignals = {
    activeMembers: 5,
    attendanceRate: 0.5,
    volunteerHours: 10,
    newMemberOnboardingRate: 0.5,
    memberRetention30Day: 0.7,
    memberRetention90Day: 0.5,
    eventFrequency: 2,
    eventVariety: 2
};

const DEFAULT_ACTIVITY: ActivitySignals = {
    projectsStarted: 1,
    projectsCompleted: 0.5,
    outputsProduced: 2,
    iterationsFromIncubator: 1
};

const DEFAULT_AFFINITY: AMEAffinitySignals = {
    clusterDensity: 0.3,
    clusterCentrality: 0.4,
    affinityStrength: 0.3,
    newConnections: 2,
    connectionsBreaking: 0
};

const DEFAULT_SENTIMENT: SentimentSignals = {
    averageSentiment: 0.3,
    pulseSurveyScore: 0.6,
    qualitativeThemes: [],
    satisfactionScore: 0.6
};

const DEFAULT_REPAIR: RepairSignals = {
    conflictReports: 0,
    restorativeCirclesHeld: 0,
    grievanceResolutionTime: 7,
    repairCompletionRate: 0.8
};

const DEFAULT_HEALTH: HealthSignals = {
    wellbeingIndex: 0.6,
    participantSatisfaction: 0.6,
    energyLevel: 0.5,
    momentumScore: 0.5
};

const DEFAULT_DIVERSITY: DiversitySignals = {
    ageDiversity: 0.3,
    skillDiversity: 0.3,
    culturalDiversity: 0.3,
    contributorRedundancy: 2,
    perspectiveVariety: 0.3
};

const DEFAULT_CROSS_DOMAIN: CrossDomainSignals = {
    collaborationsInitiated: 1,
    collaborationsActive: 0.5,
    collaborationDepth: 0.3,
    referralRate: 0.2
};

const DEFAULT_MATTER_DENSITY: MatterDensitySignals = {
    sharedAssets: 1,
    legalStructures: 0,
    policiesAdopted: 0,
    sharedBudget: 0,
    formalizedRoles: 1
};

const DEFAULT_GOVERNANCE: GovernanceSignals = {
    alignmentGatePassRate: 0.7,
    alignmentScoreOverTime: 0.6,
    decisionLatency: 14,
    participationInDecisions: 0.5,
    policyComplianceRate: 0.8
};

const DEFAULT_LEARNING: LearningSignals = {
    learningEvents: 1,
    apprenticeshipsActive: 0,
    knowledgeArtifacts: 0,
    clmNodesActive: 1,
    newNodesForming: 0
};

const DEFAULT_ECONOMIC: EconomicSignals = {
    resourceInflows: 100,
    resourceOutflows: 80,
    localTransactions: 5,
    microEnterprises: 0,
    equityDistribution: 0.7,
    resourceAutonomy: 0.3
};

const DEFAULT_ECOLOGICAL: EcologicalSignals = {
    foodYieldPerCapita: 0,
    cropDiversityIndex: 0,
    soilHealthScore: 0.5,
    biodiversityCount: 0,
    waterUseEfficiency: 0.5,
    carbonSequestration: 0,
    wasteCircularity: 0.3
};

const DEFAULT_TRUST: TrustSignals = {
    networkDensity: 0.3,
    reciprocityRate: 0.5,
    trustSurveyScore: 0.5,
    socialCapitalIndex: 0.5,
    vulnerabilitySharing: 0.3
};

// ═══════════════════════════════════════════════════════════════════════════════
// DOMAIN SENSING ENGINE CLASS
// ═══════════════════════════════════════════════════════════════════════════════

class DomainSensingEngine {
    private domainStates: Map<string, DomainSensingState> = new Map();
    
    constructor() {
        // Initialize all 27 domains with default states
        for (let i = 1; i <= 27; i++) {
            const domainId = `d${i}`;
            this.domainStates.set(domainId, this.createDefaultState(domainId));
        }
    }
    
    private createDefaultState(domainId: string): DomainSensingState {
        return {
            domainId,
            timestamp: Date.now(),
            engagement: { ...DEFAULT_ENGAGEMENT },
            activity: { ...DEFAULT_ACTIVITY },
            affinity: { ...DEFAULT_AFFINITY },
            sentiment: { ...DEFAULT_SENTIMENT },
            repair: { ...DEFAULT_REPAIR },
            health: { ...DEFAULT_HEALTH },
            diversity: { ...DEFAULT_DIVERSITY },
            crossDomain: { ...DEFAULT_CROSS_DOMAIN },
            matterDensity: { ...DEFAULT_MATTER_DENSITY },
            governance: { ...DEFAULT_GOVERNANCE },
            learning: { ...DEFAULT_LEARNING },
            economic: { ...DEFAULT_ECONOMIC },
            ecological: { ...DEFAULT_ECOLOGICAL },
            trust: { ...DEFAULT_TRUST },
            computedHealth: 0.5,
            trajectory: 'stable',
            signalsCount: 0
        };
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // PROCESS SIGNALS
    // ─────────────────────────────────────────────────────────────────────────
    
    // Generic signal processor
    processSignal(domainId: string, signal: DomainInputSignal): void {
        const state = this.domainStates.get(domainId);
        if (!state) return;
        
        state.signalsCount++;
        state.timestamp = Date.now();
        
        // Route signal to appropriate category
        switch (signal.category) {
            case 'engagement':
                this.processEngagementSignal(state, signal);
                break;
            case 'activity':
                this.processActivitySignal(state, signal);
                break;
            case 'affinity':
                this.processAffinitySignal(state, signal);
                break;
            case 'sentiment':
                this.processSentimentSignal(state, signal);
                break;
            case 'repair':
                this.processRepairSignal(state, signal);
                break;
            case 'health':
                this.processHealthSignal(state, signal);
                break;
            case 'diversity':
                this.processDiversitySignal(state, signal);
                break;
            case 'crossDomain':
                this.processCrossDomainSignal(state, signal);
                break;
            case 'matterDensity':
                this.processMatterDensitySignal(state, signal);
                break;
            case 'governance':
                this.processGovernanceSignal(state, signal);
                break;
            case 'learning':
                this.processLearningSignal(state, signal);
                break;
            case 'economic':
                this.processEconomicSignal(state, signal);
                break;
            case 'ecological':
                this.processEcologicalSignal(state, signal);
                break;
            case 'trust':
                this.processTrustSignal(state, signal);
                break;
        }
        
        // Recalculate domain health
        this.computeHealth(state);
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // SIGNAL PROCESSORS (one per category)
    // ─────────────────────────────────────────────────────────────────────────
    
    private processEngagementSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<EngagementSignals>;
        if (data.activeMembers !== undefined) state.engagement.activeMembers = data.activeMembers;
        if (data.attendanceRate !== undefined) state.engagement.attendanceRate = data.attendanceRate;
        if (data.volunteerHours !== undefined) state.engagement.volunteerHours += data.volunteerHours;
        if (data.eventFrequency !== undefined) state.engagement.eventFrequency = data.eventFrequency;
        if (data.newMemberOnboardingRate !== undefined) state.engagement.newMemberOnboardingRate = data.newMemberOnboardingRate;
    }
    
    private processActivitySignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<ActivitySignals>;
        if (data.projectsStarted !== undefined) state.activity.projectsStarted += data.projectsStarted;
        if (data.projectsCompleted !== undefined) state.activity.projectsCompleted += data.projectsCompleted;
        if (data.outputsProduced !== undefined) state.activity.outputsProduced += data.outputsProduced;
    }
    
    private processAffinitySignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<AMEAffinitySignals>;
        if (data.clusterDensity !== undefined) state.affinity.clusterDensity = data.clusterDensity;
        if (data.affinityStrength !== undefined) state.affinity.affinityStrength = data.affinityStrength;
        if (data.newConnections !== undefined) state.affinity.newConnections += data.newConnections;
    }
    
    private processSentimentSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<SentimentSignals>;
        // Running average for sentiment
        if (data.averageSentiment !== undefined) {
            state.sentiment.averageSentiment = (state.sentiment.averageSentiment * 0.7) + (data.averageSentiment * 0.3);
        }
        if (data.pulseSurveyScore !== undefined) {
            state.sentiment.pulseSurveyScore = (state.sentiment.pulseSurveyScore * 0.8) + (data.pulseSurveyScore * 0.2);
        }
    }
    
    private processRepairSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<RepairSignals>;
        if (data.conflictReports !== undefined) state.repair.conflictReports += data.conflictReports;
        if (data.restorativeCirclesHeld !== undefined) state.repair.restorativeCirclesHeld += data.restorativeCirclesHeld;
    }
    
    private processHealthSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<HealthSignals>;
        if (data.wellbeingIndex !== undefined) state.health.wellbeingIndex = data.wellbeingIndex;
        if (data.energyLevel !== undefined) state.health.energyLevel = data.energyLevel;
        if (data.momentumScore !== undefined) state.health.momentumScore = data.momentumScore;
    }
    
    private processDiversitySignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<DiversitySignals>;
        if (data.ageDiversity !== undefined) state.diversity.ageDiversity = data.ageDiversity;
        if (data.skillDiversity !== undefined) state.diversity.skillDiversity = data.skillDiversity;
        if (data.contributorRedundancy !== undefined) state.diversity.contributorRedundancy = data.contributorRedundancy;
    }
    
    private processCrossDomainSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<CrossDomainSignals>;
        if (data.collaborationsInitiated !== undefined) state.crossDomain.collaborationsInitiated += data.collaborationsInitiated;
        if (data.collaborationDepth !== undefined) state.crossDomain.collaborationDepth = data.collaborationDepth;
    }
    
    private processMatterDensitySignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<MatterDensitySignals>;
        if (data.sharedAssets !== undefined) state.matterDensity.sharedAssets += data.sharedAssets;
        if (data.legalStructures !== undefined) state.matterDensity.legalStructures += data.legalStructures;
        if (data.policiesAdopted !== undefined) state.matterDensity.policiesAdopted += data.policiesAdopted;
    }
    
    private processGovernanceSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<GovernanceSignals>;
        if (data.alignmentGatePassRate !== undefined) state.governance.alignmentGatePassRate = data.alignmentGatePassRate;
        if (data.decisionLatency !== undefined) state.governance.decisionLatency = data.decisionLatency;
    }
    
    private processLearningSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<LearningSignals>;
        if (data.learningEvents !== undefined) state.learning.learningEvents += data.learningEvents;
        if (data.apprenticeshipsActive !== undefined) state.learning.apprenticeshipsActive = data.apprenticeshipsActive;
        if (data.knowledgeArtifacts !== undefined) state.learning.knowledgeArtifacts += data.knowledgeArtifacts;
    }
    
    private processEconomicSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<EconomicSignals>;
        if (data.resourceInflows !== undefined) state.economic.resourceInflows += data.resourceInflows;
        if (data.localTransactions !== undefined) state.economic.localTransactions += data.localTransactions;
        if (data.resourceAutonomy !== undefined) state.economic.resourceAutonomy = data.resourceAutonomy;
    }
    
    private processEcologicalSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<EcologicalSignals>;
        if (data.foodYieldPerCapita !== undefined) state.ecological.foodYieldPerCapita = data.foodYieldPerCapita;
        if (data.cropDiversityIndex !== undefined) state.ecological.cropDiversityIndex = data.cropDiversityIndex;
        if (data.soilHealthScore !== undefined) state.ecological.soilHealthScore = data.soilHealthScore;
    }
    
    private processTrustSignal(state: DomainSensingState, signal: DomainInputSignal): void {
        const data = signal.data as Partial<TrustSignals>;
        if (data.networkDensity !== undefined) state.trust.networkDensity = data.networkDensity;
        if (data.trustSurveyScore !== undefined) state.trust.trustSurveyScore = data.trustSurveyScore;
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // HEALTH COMPUTATION
    // ─────────────────────────────────────────────────────────────────────────
    
    private computeHealth(state: DomainSensingState): void {
        // Weighted combination of all 14 categories
        // Based on document's "vitality" concept
        
        const weights: Record<string, number> = {
            engagement: 0.12,
            activity: 0.10,
            affinity: 0.08,
            sentiment: 0.08,
            repair: 0.06,
            health: 0.10,
            diversity: 0.06,
            crossDomain: 0.06,
            matterDensity: 0.06,
            governance: 0.08,
            learning: 0.06,
            economic: 0.06,
            ecological: 0.04,
            trust: 0.04
        };
        
        // Normalize each metric to 0-1 range
        const scores = {
            engagement: this.normalizeEngagement(state.engagement),
            activity: this.normalizeActivity(state.activity),
            affinity: this.normalizeAffinity(state.affinity),
            sentiment: this.normalizeSentiment(state.sentiment),
            repair: this.normalizeRepair(state.repair),
            health: this.normalizeHealth(state.health),
            diversity: this.normalizeDiversity(state.diversity),
            crossDomain: this.normalizeCrossDomain(state.crossDomain),
            matterDensity: this.normalizeMatterDensity(state.matterDensity),
            governance: this.normalizeGovernance(state.governance),
            learning: this.normalizeLearning(state.learning),
            economic: this.normalizeEconomic(state.economic),
            ecological: this.normalizeEcological(state.ecological),
            trust: this.normalizeTrust(state.trust)
        };
        
        // Calculate weighted health
        let health = 0;
        for (const [category, score] of Object.entries(scores)) {
            health += score * (weights[category] || 0);
        }
        
        state.computedHealth = Math.max(0, Math.min(1, health));
    }
    
    // Normalization functions (each metric scaled to 0-1)
    private normalizeEngagement(e: EngagementSignals): number {
        return (e.activeMembers / 20) * 0.3 + 
               (e.attendanceRate) * 0.3 + 
               (e.volunteerHours / 50) * 0.2 +
               (e.eventFrequency / 10) * 0.2;
    }
    
    private normalizeActivity(a: ActivitySignals): number {
        return Math.min(1, (a.projectsCompleted / 5) * 0.6 + (a.outputsProduced / 10) * 0.4);
    }
    
    private normalizeAffinity(a: AMEAffinitySignals): number {
        return a.clusterDensity * 0.4 + a.affinityStrength * 0.4 + (a.newConnections / 10) * 0.2;
    }
    
    private normalizeSentiment(s: SentimentSignals): number {
        return ((s.averageSentiment + 1) / 2) * 0.4 + s.pulseSurveyScore * 0.4 + s.satisfactionScore * 0.2;
    }
    
    private normalizeRepair(r: RepairSignals): number {
        return (1 - Math.min(1, r.conflictReports / 10)) * 0.4 + 
               (r.repairCompletionRate) * 0.6;
    }
    
    private normalizeHealth(h: HealthSignals): number {
        return h.wellbeingIndex * 0.4 + h.participantSatisfaction * 0.3 + 
               h.energyLevel * 0.15 + h.momentumScore * 0.15;
    }
    
    private normalizeDiversity(d: DiversitySignals): number {
        return d.ageDiversity * 0.2 + d.skillDiversity * 0.3 + 
               d.culturalDiversity * 0.2 + Math.min(1, d.contributorRedundancy / 5) * 0.3;
    }
    
    private normalizeCrossDomain(c: CrossDomainSignals): number {
        return Math.min(1, c.collaborationsActive / 5) * 0.4 + 
               c.collaborationDepth * 0.4 +
               c.referralRate * 0.2;
    }
    
    private normalizeMatterDensity(m: MatterDensitySignals): number {
        return Math.min(1, m.sharedAssets / 10) * 0.3 +
               Math.min(1, m.legalStructures / 3) * 0.2 +
               Math.min(1, m.policiesAdopted / 5) * 0.2 +
               Math.min(1, m.formalizedRoles / 10) * 0.3;
    }
    
    private normalizeGovernance(g: GovernanceSignals): number {
        return g.alignmentGatePassRate * 0.35 +
               g.alignmentScoreOverTime * 0.25 +
               (1 - Math.min(1, g.decisionLatency / 30)) * 0.2 +
               g.policyComplianceRate * 0.2;
    }
    
    private normalizeLearning(l: LearningSignals): number {
        return Math.min(1, l.learningEvents / 10) * 0.3 +
               Math.min(1, l.apprenticeshipsActive / 5) * 0.3 +
               Math.min(1, l.knowledgeArtifacts / 10) * 0.2 +
               Math.min(1, l.clmNodesActive / 3) * 0.2;
    }
    
    private normalizeEconomic(e: EconomicSignals): number {
        return (e.resourceInflows > 0 ? 1 : 0) * 0.2 +
               Math.min(1, e.localTransactions / 20) * 0.2 +
               e.equityDistribution * 0.3 +
               e.resourceAutonomy * 0.3;
    }
    
    private normalizeEcological(e: EcologicalSignals): number {
        return Math.min(1, e.foodYieldPerCapita / 100) * 0.2 +
               e.cropDiversityIndex * 0.15 +
               e.soilHealthScore * 0.25 +
               Math.min(1, e.biodiversityCount / 50) * 0.15 +
               e.wasteCircularity * 0.25;
    }
    
    private normalizeTrust(t: TrustSignals): number {
        return t.networkDensity * 0.25 +
               t.reciprocityRate * 0.25 +
               t.trustSurveyScore * 0.3 +
               t.vulnerabilitySharing * 0.2;
    }
    
    // ─────────────────────────────────────────────────────────────────────────
    // GET STATE
    // ─────────────────────────────────────────────────────────────────────────
    
    getDomainState(domainId: string): DomainSensingState | undefined {
        return this.domainStates.get(domainId);
    }
    
    getAllDomainStates(): DomainSensingState[] {
        return Array.from(this.domainStates.values());
    }
    
    getTriadAggregateHealth(triadDomains: string[]): number {
        const healths = triadDomains
            .map(id => this.domainStates.get(id)?.computedHealth)
            .filter((h): h is number => h !== undefined);
        
        // Hologram: minimum, not average
        return healths.length > 0 ? Math.min(...healths) : 0.5;
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
// INPUT SIGNAL TYPE
// ═══════════════════════════════════════════════════════════════════════════════

interface DomainInputSignal {
    category: 
        | 'engagement' 
        | 'activity' 
        | 'affinity' 
        | 'sentiment' 
        | 'repair'
        | 'health'
        | 'diversity'
        | 'crossDomain'
        | 'matterDensity'
        | 'governance'
        | 'learning'
        | 'economic'
        | 'ecological'
        | 'trust';
    domainId: string;
    data: any;
    timestamp?: number;
    participantId?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAMPLE: HOW TO SEND SIGNALS FOR EACH DOMAIN TYPE
// ═══════════════════════════════════════════════════════════════════════════════

/*
const domainSensing = new DomainSensingEngine();

// Spirituality domain - signals from ritual participation
domainSensing.processSignal('d1', {
    category: 'engagement',
    domainId: 'd1',
    data: { attendanceRate: 0.8, volunteerHours: 5 },
    participantId: 'user123'
});

domainSensing.processSignal('d1', {
    category: 'health',
    domainId: 'd1',
    data: { wellbeingIndex: 0.8 }
});

// Governance domain - signals from decision processes
domainSensing.processSignal('d12', {
    category: 'governance',
    domainId: 'd12',
    data: { alignmentGatePassRate: 0.85, decisionLatency: 5 }
});

// Food domain - signals from agricultural activity
domainSensing.processSignal('d6', {
    category: 'ecological',
    domainId: 'd6',
    data: { foodYieldPerCapita: 50, cropDiversityIndex: 0.7 }
});

// Get health for a triad (e.g., Nourishment: d4, d5, d6)
const triadHealth = domainSensing.getTriadAggregateHealth(['d4', 'd5', 'd6']);
*/

export {
    DomainSensingEngine,
    DomainSensingState,
    DomainInputSignal,
    EngagementSignals,
    ActivitySignals,
    AMEAffinitySignals,
    SentimentSignals,
    RepairSignals,
    HealthSignals,
    DiversitySignals,
    CrossDomainSignals,
    MatterDensitySignals,
    GovernanceSignals,
    LearningSignals,
    EconomicSignals,
    EcologicalSignals,
    TrustSignals
};