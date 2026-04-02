// ═══════════════════════════════════════════════════════════════════════════════
// AME SYSTEM PHILOSOPHY & ARCHITECTURE
// Four Critical Aspects Embedded in Code
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// ASPECT 1: EMERGENT DESIGN - "The system isn't for us to decide where it goes"
// Communities that use it decide what it becomes - the grammar, not the script
// ═══════════════════════════════════════════════════════════════════════════════

interface AMEPhilosophy {
    // This system is a grammar, not a script
    // Different communities use different parts
    // They discover connections we never imagined
    
    // Core principle: design for emergence
    emergentDesign: {
        enabled: boolean;
        // Communities define their own metrics from base signals
        communityCustomMetrics: boolean;
        // Local interpretation of global patterns
        localPatternRecognition: boolean;
        // Allow new domains to emerge (not fixed to 27)
        dynamicDomains: boolean;
    };
    
    // Data belongs to community, not system
    dataSovereignty: {
        communityOwnsData: boolean;
        exportCapability: boolean;
        deletionOnRequest: boolean;
        transparentDataFlow: boolean;
    };
}

// ═══════════════════════════════════════════════════════════════════════════════
// ASPECT 2: RELATIONAL MIRROR - "Not telling, helping them see"
// The difference between a dashboard (watching) and a mirror (recognizing)
// ═══════════════════════════════════════════════════════════════════════════════

interface UIPhilosophy {
    // UI is a mirror, not a monitor
    mirrorPhilosophy: {
        // Language: "here's what we see" not "you must fix this"
        reflectiveLanguage: boolean;
        // No rankings, comparisons that create hierarchy
        noComparativeRanking: boolean;
        // Multiple views for multiple ways of seeing
        multiPerspectiveDefault: boolean;
        // Questions to prompt, not conclusions to deliver
        generativeQuestions: boolean;
    };
    
    // Self-awareness over external control
    selfAwareness: {
        // Show the pattern, not the prescription
        patternReveal: boolean;
        // Community decides what to do with insight
        noForcedActions: boolean;
        // Historical trends show trajectory, not judgment
        trajectoryAsInformation: boolean;
    };
}

// ═══════════════════════════════════════════════════════════════════════════════
// ASPECT 3: SELF-LIMITING ARCHITECTURE - "Systems that can turn off their own power"
// Communities can disable parts that become coercive
// Metrics visible and contestable - data belongs to community
// ═══════════════════════════════════════════════════════════════════════════════

interface SystemConstraints {
    // Parts can be disabled to prevent coercion
    toggles: {
        // Each layer can be independently enabled/disabled
        fotLayer: { enabled: boolean; lockable: boolean };
        domainLayer: { enabled: boolean; lockable: boolean };
        correlationEngine: { enabled: boolean; lockable: boolean };
        triadNetwork: { enabled: boolean; lockable: boolean };
        // Individual domains can be toggled
        individualDomains: { [domainId: string]: boolean };
    };
    
    // Metric visibility and contestability
    transparency: {
        allMetricsPublic: boolean;  // Community sees what's measured
        algorithmExplained: boolean; // How scores calculated is visible
        contestedMetricsAllowed: boolean; // Community can question/reject
    };
    
    // Anti-surveillance safeguards
    safeguards: {
        noExternalAccess: boolean;  // No outside data extraction
        aggregateOverIndividual: boolean; // Prefer group patterns over individual tracking
        consentRequired: boolean;  // Explicit opt-in for tracking
        purposeLimitation: boolean; // Data only used for stated purpose
    };
}

// ═══════════════════════════════════════════════════════════════════════════════
// ASPECT 4: MODULAR TOGGLE ARCHITECTURE - "Not monolithic, modular fabric"
// Communities choose which threads to pull
// All connection points preserved, layers can grow independently
// ═══════════════════════════════════════════════════════════════════════════════

interface AMEConfig {
    // System identity
    name: string;
    version: string;
    seedPatternDate: string;  // When the full design was seeded
    
    // Embedded philosophies
    philosophy: AMEPhilosophy;
    ui: UIPhilosophy;
    constraints: SystemConstraints;
    
    // Module registry - all available modules
    modules: {
        fot: ModuleConfig;
        domain: ModuleConfig;
        correlation: ModuleConfig;
        triad: ModuleConfig;
        sensing: ModuleConfig;
    };
    
    // Connection points preserved (interfaces between modules)
    connections: {
        fotToDomain: ConnectionPoint;
        domainToTriad: ConnectionPoint;
        crossLayerCorrelation: ConnectionPoint;
        [key: string]: ConnectionPoint;
    };
}

interface ModuleConfig {
    id: string;
    name: string;
    enabled: boolean;
    status: 'active' | 'developing' | 'planned' | 'disabled';
    dependencies: string[];  // What it connects to
    dataInputs: string[];      // What it needs
    dataOutputs: string[];     // What it produces
}

interface ConnectionPoint {
    from: string;
    to: string;
    protocol: 'direct' | 'event' | 'async';
    dataFormat: string;
    preserved: boolean;  // Always maintained, even if disabled
}

// ═══════════════════════════════════════════════════════════════════════════════
// DEFAULT CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════

const AME_DEFAULT_CONFIG: AMEConfig = {
    name: "Mythogen AME",
    version: "0.1.0-seed",
    seedPatternDate: "2026-04-01",
    
    philosophy: {
        emergentDesign: {
            enabled: true,
            communityCustomMetrics: true,
            localPatternRecognition: true,
            dynamicDomains: true
        },
        dataSovereignty: {
            communityOwnsData: true,
            exportCapability: true,
            deletionOnRequest: true,
            transparentDataFlow: true
        }
    },
    
    ui: {
        mirrorPhilosophy: {
            reflectiveLanguage: true,
            noComparativeRanking: true,
            multiPerspectiveDefault: true,
            generativeQuestions: true
        },
        selfAwareness: {
            patternReveal: true,
            noForcedActions: true,
            trajectoryAsInformation: true
        }
    },
    
    constraints: {
        toggles: {
            fotLayer: { enabled: true, lockable: false },
            domainLayer: { enabled: true, lockable: false },
            correlationEngine: { enabled: true, lockable: false },
            triadNetwork: { enabled: true, lockable: false },
            individualDomains: {}  // Populated from 27 domains
        },
        transparency: {
            allMetricsPublic: true,
            algorithmExplained: true,
            contestedMetricsAllowed: true
        },
        safeguards: {
            noExternalAccess: true,
            aggregateOverIndividual: true,
            consentRequired: true,
            purposeLimitation: true
        }
    },
    
    modules: {
        fot: {
            id: 'fot',
            name: 'Field of Trust',
            enabled: true,
            status: 'developing',
            dependencies: ['sensing'],
            dataInputs: ['behavioralSignals'],
            dataOutputs: ['fotIndicators', 'ttgmField', 'compositeHealth']
        },
        domain: {
            id: 'domain',
            name: 'Archetypal Domains',
            enabled: true,
            status: 'developing',
            dependencies: [],
            dataInputs: ['domainSignals'],
            dataOutputs: ['domainHealth', 'triadStates']
        },
        correlation: {
            id: 'correlation',
            name: 'Cross-Layer Correlation',
            enabled: true,
            status: 'developing',
            dependencies: ['fot', 'domain'],
            dataInputs: ['fotState', 'domainState'],
            dataOutputs: ['correlations', 'opportunities', 'warnings']
        },
        triad: {
            id: 'triad',
            name: 'Triad Network',
            enabled: true,
            status: 'developing',
            dependencies: ['domain'],
            dataInputs: ['domainStates'],
            dataOutputs: ['triadInfluences', 'crossTriadFlows']
        },
        sensing: {
            id: 'sensing',
            name: 'Sensing Engine',
            enabled: true,
            status: 'developing',
            dependencies: [],
            dataInputs: ['rawSignals'],
            dataOutputs: ['processedSignals']
        }
    },
    
    connections: {
        fotToDomain: {
            from: 'fot',
            to: 'domain',
            protocol: 'async',
            dataFormat: 'FOTState',
            preserved: true
        },
        domainToTriad: {
            from: 'domain',
            to: 'triad',
            protocol: 'direct',
            dataFormat: 'DomainState[]',
            preserved: true
        },
        crossLayerCorrelation: {
            from: 'correlation',
            to: 'correlation',
            protocol: 'event',
            dataFormat: 'CorrelationEvent',
            preserved: true
        },
        sensingToFOT: {
            from: 'sensing',
            to: 'fot',
            protocol: 'async',
            dataFormat: 'BehavioralSignal',
            preserved: true
        },
        sensingToDomain: {
            from: 'sensing',
            to: 'domain',
            protocol: 'async',
            dataFormat: 'DomainSignal',
            preserved: true
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// ADD TOGGLES FOR 27 DOMAINS
// ═══════════════════════════════════════════════════════════════════════════════

// Initialize domain toggles
for (let i = 1; i <= 27; i++) {
    AME_DEFAULT_CONFIG.constraints.toggles.individualDomains[`d${i}`] = true;
}

// ═══════════════════════════════════════════════════════════════════════════════
// ENGINE CLASS THAT RESPECTS PHILOSOPHY
// ═══════════════════════════════════════════════════════════════════════════════

class AMEEngine {
    private config: AMEConfig;
    private modules: Map<string, any> = new Map();
    
    constructor(config: AMEConfig = AME_DEFAULT_CONFIG) {
        this.config = config;
    }
    
    // Check if module is enabled (respects toggle philosophy)
    isModuleEnabled(moduleId: string): boolean {
        return this.config.modules[moduleId as keyof typeof this.config.modules]?.enabled ?? false;
    }
    
    // Get module status
    getModuleStatus(moduleId: string): string {
        return this.config.modules[moduleId as keyof typeof this.config.modules]?.status ?? 'unknown';
    }
    
    // Toggle module on/off
    toggleModule(moduleId: string, enabled: boolean): void {
        if (this.config.modules[moduleId as keyof typeof this.config.modules]) {
            this.config.modules[moduleId as keyof typeof this.config.modules].enabled = enabled;
        }
    }
    
    // Toggle individual domain
    toggleDomain(domainId: string, enabled: boolean): void {
        this.config.constraints.toggles.individualDomains[domainId] = enabled;
    }
    
    // Check data sovereignty - does community own data?
    isCommunityDataSovereign(): boolean {
        return this.config.philosophy.dataSovereignty.communityOwnsData;
    }
    
    // Check if metrics are public/transparent
    areMetricsTransparent(): boolean {
        return this.config.constraints.transparency.allMetricsPublic;
    }
    
    // Get active modules (for development/display)
    getActiveModules(): string[] {
        return Object.entries(this.config.modules)
            .filter(([_, m]) => m.enabled)
            .map(([id]) => id);
    }
    
    // Get connection point (preserved even if module disabled)
    getConnection(from: string, to: string): ConnectionPoint | undefined {
        const key = `${from}To${to.charAt(0).toUpperCase() + to.slice(1)}`;
        return this.config.connections[key];
    }
    
    // Get full config for inspection
    getConfig(): AMEConfig {
        return this.config;
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
// UI COMPONENT - RESPECTS MIRROR PHILOSOPHY
// ═══════════════════════════════════════════════════════════════════════════════

interface MirrorUIConfig {
    language: 'reflective' | 'prescriptive';
    showRankings: boolean;
    defaultView: 'summary' | 'detail' | 'explore';
    questionsEnabled: boolean;
}

const MIRROR_UI_CONFIG: MirrorUIConfig = {
    language: 'reflective',   // "Here's what we see" not "You must fix this"
    showRankings: false,       // No comparative rankings
    defaultView: 'summary',    // Overview first
    questionsEnabled: true      // Generative questions, not conclusions
};

export {
    AME_DEFAULT_CONFIG,
    AMEEngine,
    AMEConfig,
    AMEPhilosophy,
    UIPhilosophy,
    SystemConstraints,
    ModuleConfig,
    ConnectionPoint,
    MIRROR_UI_CONFIG
};