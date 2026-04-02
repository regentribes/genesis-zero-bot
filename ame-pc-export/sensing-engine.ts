// FOT Sensing Engine - AI-driven Field of Trust detection
// How we determine indicators from behavioral signals

import { useState, useCallback, useEffect, useRef } from 'react';

// ═══════════════════════════════════════════════════════════
// CORE CONCEPT: INDICATORS EMERGE FROM SIGNALS
// ═══════════════════════════════════════════════════════════

// We don't pre-define indicators - they emerge from signal patterns
// 500K+ possible indicators, dynamically sensed

interface BehavioralSignal {
    type: SignalType;
    source: 'chat' | 'action' | 'presence' | 'affinity' | 'content';
    data: any;
    timestamp: number;
    personId: string;
}

type SignalType = 
    | 'message_sent' 
    | 'message_received'
    | 'topic_joined'
    | 'topic_left'
    | 'affinity_witnessed'
    | 'value_expressed'
    | 'conflict_detected'
    | 'support_offered'
    | 'presence_changed'
    | 'silence_duration'
    | 'response_delay'
    | 'energy_shift'
    | 'language_pattern'
    | 'engagement_pattern';

// Signal weights for different indicators
// These are learned, not hardcoded - this is the starting heuristic
const SIGNAL_INDICATOR_WEIGHTS = {
    'Psychological Safety': {
        'message_sent': 0.15,      // Speaks up
        'conflict_detected': -0.3, // Conflicts reduce safety
        'support_offered': 0.2,   // Feels safe to offer
        'silence_duration': -0.1, // Long silence may indicate unsafe
        'presence_changed': 0.1    // Comfortable being present
    },
    'Trust': {
        'affinity_witnessed': 0.25, // Witnesses others
        'value_expressed': 0.2,     // Shares values
        'response_delay': -0.15,    // Delayed response = distrust
        'language_pattern': 0.1,    // Open language
        'topic_joined': 0.1         // Willing to engage
    },
    'Coherence': {
        'message_sent': 0.1,       // Quality of contribution
        'topic_joined': 0.15,      // Follows through
        'engagement_pattern': 0.2, // Consistent engagement
        'energy_shift': -0.2,      // Energy jumps = incoherent
        'presence_changed': 0.1    // Stable presence
    },
    'Attunement': {
        'message_received': 0.2,   // Responds to others
        'affinity_witnessed': 0.2, // Notices others
        'topic_joined': 0.1,        // Joins relevant topics
        'support_offered': 0.15,  // Responds to needs
        'language_pattern': 0.15   // Matches others' language
    },
    'Openness': {
        'topic_joined': 0.2,       // Explores new topics
        'value_expressed': 0.15,  // Shares novel values
        'conflict_detected': 0.1,  // Willing to engage difficulty
        'content': 0.2,          // Novel content
        'presence_changed': 0.1   // Present in new ways
    }
};

// ═══════════════════════════════════════════════════════════
// SENSING ENGINE
// ═══════════════════════════════════════════════════════════

interface FOTSensorConfig {
    communityId: string;
    smoothingWindow: number; // Number of signals to average over
    minSignalsForIndicator: number; // Minimum signals before indicator emerges
    llmEndpoint?: string; // For AI interpretation
}

class FOTSensingEngine {
    private config: FOTSensorConfig;
    private signalBuffer: Map<string, BehavioralSignal[]> = new Map();
    private indicatorScores: Map<string, Map<string, number>> = new Map();
    private lastEmit: Map<string, number> = new Map();
    private emitInterval = 30000; // Emit FOT state every 30s

    constructor(config: FOTSensorConfig) {
        this.config = config;
    }

    // Process incoming signal
    processSignal(signal: BehavioralSignal): void {
        const personId = signal.personId;
        
        // Add to buffer
        if (!this.signalBuffer.has(personId)) {
            this.signalBuffer.set(personId, []);
        }
        
        const buffer = this.signalBuffer.get(personId)!;
        buffer.push(signal);
        
        // Keep buffer manageable (last 100 signals per person)
        if (buffer.length > 100) {
            buffer.shift();
        }
        
        // Update indicator scores based on signal
        this.updateIndicatorScores(personId, signal);
        
        // Check if we should emit FOT state
        this.checkEmitState(personId);
    }

    private updateIndicatorScores(personId: string, signal: BehavioralSignal): void {
        if (!this.indicatorScores.has(personId)) {
            this.indicatorScores.set(personId, new Map());
        }
        
        const scores = this.indicatorScores.get(personId)!;
        
        // For each indicator, update score based on signal
        for (const [indicator, weights] of Object.entries(SIGNAL_INDICATOR_WEIGHTS)) {
            const weight = (weights as any)[signal.type] || 0;
            
            const currentScore = scores.get(indicator) || 0.5; // Start at 0.5
            const newScore = Math.max(0, Math.min(1, currentScore + weight));
            
            scores.set(indicator, newScore);
        }
    }

    private checkEmitState(personId: string): void {
        const now = Date.now();
        const lastEmitted = this.lastEmit.get(personId) || 0;
        
        if (now - lastEmitted > this.emitInterval) {
            this.emitFOTState(personId);
            this.lastEmit.set(personId, now);
        }
    }

    // Compute FOT state for a person
    computeFOTState(personId: string): FOTState | null {
        const scores = this.indicatorScores.get(personId);
        if (!scores) return null;

        const indicators: FOTIndicator[] = [];
        
        for (const [name, value] of scores) {
            // Calculate trajectory (trend)
            const trajectory = this.calculateTrajectory(personId, name);
            
            indicators.push({
                name,
                value,
                trajectory,
                lastSensed: Date.now()
            });
        }

        // Hologram principle: composite = MIN, not average
        const composite = Math.min(...indicators.map(i => i.value));

        return {
            indicators,
            composite,
            // Add TTGM computed from indicators
            ttgm: computeTTGM(indicators)
        };
    }

    private calculateTrajectory(personId: string, indicatorName: string): string {
        const buffer = this.signalBuffer.get(personId);
        if (!buffer || buffer.length < 10) return 'stable';

        // Look at recent signals vs older signals
        const recent = buffer.slice(-5);
        const older = buffer.slice(-10, -5);

        // Calculate average score change
        // Simplified - in production would track historical scores
        const recentSignals = recent.filter(s => 
            (SIGNAL_INDICATOR_WEIGHTS as any)[indicatorName]?.[s.type]
        ).length;
        const olderSignals = older.filter(s => 
            (SIGNAL_INDICATOR_WEIGHTS as any)[indicatorName]?.[s.type]
        ).length;

        if (recentSignals > olderSignals * 1.5) return 'strengthening';
        if (recentSignals < olderSignals * 0.5) return 'weakening';
        return 'stable';
    }

    private emitFOTState(personId: string): void {
        const state = this.computeFOTState(personId);
        if (state) {
            // In production: emit via WebSocket
            console.log(`[FOT] ${personId}:`, state.composite);
        }
    }

    // Get weak states for convergence
    getWeakStates(personId: string): string[] {
        const state = this.computeFOTState(personId);
        if (!state) return [];
        
        return state.indicators
            .filter(i => i.value < 0.5)
            .map(i => i.name);
    }
}

// ═══════════════════════════════════════════════════════════
// LLM-ENHANCED SENSING (optional - for deeper interpretation)
// ═══════════════════════════════════════════════════════════

interface LLMInterpretationRequest {
    recentSignals: BehavioralSignal[];
    currentIndicators: FOTIndicator[];
    context: {
        communityId: string;
        personId: string;
        recentTopics: string[];
    };
}

async function interpretWithLLM(
    request: LLMInterpretationRequest,
    endpoint: string
): Promise<FOTIndicator[]> {
    const prompt = `
You are a field-of-trust sensing system. Analyze the following signals to determine 
current FOT (Field of Trust) indicator states.

Person: ${request.context.personId}
Community: ${request.context.communityId}
Recent Topics: ${request.context.recentTopics.join(', ')}

Current indicators (from signal processing):
${request.currentIndicators.map(i => `- ${i.name}: ${i.value.toFixed(2)} (${i.trajectory})`).join('\n')}

Recent signals (last 10):
${request.recentSignals.map(s => `- [${s.type}] ${JSON.stringify(s.data)}`).join('\n')}

Based on patterns, respond with updated indicator values (0-1) and trajectories 
(strengthening/weakening/stable). Consider:
- Psychological Safety: Do they feel safe to speak up, express vulnerability?
- Trust: Do they extend trust to others, share authentically?
- Coherence: Are their actions aligned with values?
- Attunement: Do they notice and respond to others?
- Openness: Are they exploring, sharing novel perspectives?

Respond as JSON array:
[
  {"name": "Psychological Safety", "value": 0.7, "trajectory": "strengthening"},
  ...
]
`;

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    return JSON.parse(data.response);
}

// ═══════════════════════════════════════════════════════════
// REACT HOOK: USE FOT SENSING
// ═══════════════════════════════════════════════════════════

interface UseFOTSensingOptions {
    communityId: string;
    personId: string;
    enableLLM?: boolean;
    llmEndpoint?: string;
}

export function useFOTSensing(options: Options): {
    currentState: FOTState | null;
    weakStates: string[];
    emitSignal: (type: SignalType, data: any) => void;
    isSensing: boolean;
} {
    const engineRef = useRef<FOTSensingEngine | null>(null);
    const [currentState, setCurrentState] = useState<FOTState | null>(null);
    const [weakStates, setWeakStates] = useState<string[]>([]);

    // Initialize engine
    useEffect(() => {
        engineRef.current = new FOTSensingEngine({
            communityId: options.communityId,
            smoothingWindow: 20,
            minSignalsForIndicator: 5
        });
    }, [options.communityId]);

    // Emit a behavioral signal
    const emitSignal = useCallback((type: SignalType, data: any) => {
        const signal: BehavioralSignal = {
            type,
            source: determineSource(type),
            data,
            timestamp: Date.now(),
            personId: options.personId
        };

        engineRef.current?.processSignal(signal);
        
        // Update state
        const state = engineRef.current?.computeFOTState(options.personId);
        if (state) {
            setCurrentState(state);
            setWeakStates(state.indicators.filter(i => i.value < 0.5).map(i => i.name));
        }
    }, [options.personId]);

    return {
        currentState,
        weakStates,
        emitSignal,
        isSensing: engineRef.current !== null
    };
}

function determineSource(type: SignalType): BehavioralSignal['source'] {
    const sourceMap: Record<SignalType, BehavioralSignal['source']> = {
        'message_sent': 'chat',
        'message_received': 'chat',
        'topic_joined': 'action',
        'topic_left': 'action',
        'affinity_witnessed': 'affinity',
        'value_expressed': 'content',
        'conflict_detected': 'action',
        'support_offered': 'action',
        'presence_changed': 'presence',
        'silence_duration': 'presence',
        'response_delay': 'presence',
        'energy_shift': 'action',
        'language_pattern': 'content',
        'engagement_pattern': 'content'
    };
    return sourceMap[type] || 'action';
}

// ═══════════════════════════════════════════════════════════
// AUTO-SENSING HOOK (for community)
// ═══════════════════════════════════════════════════════════

export function useCommunitySensing(communityId: string) {
    const engineRef = useRef<FOTSensingEngine | null>(null);
    const [communityState, setCommunityState] = useState<Map<string, FOTState>>(new Map());
    const [activeConvergences, setActiveConvergences] = useState<ConvergencePoint[]>([]);

    useEffect(() => {
        engineRef.current = new FOTSensingEngine({
            communityId,
            smoothingWindow: 20,
            minSignalsForIndicator: 5
        });

        // Set up polling for convergence detection
        const interval = setInterval(() => {
            detectConvergences();
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [communityId]);

    const processSignal = useCallback((personId: string, type: SignalType, data: any) => {
        engineRef.current?.processSignal({
            type,
            source: determineSource(type),
            data,
            timestamp: Date.now(),
            personId
        });

        // Update community state
        const state = engineRef.current?.computeFOTState(personId);
        if (state) {
            setCommunityState(prev => new Map(prev).set(personId, state));
        }
    }, []);

    const detectConvergences = useCallback(() => {
        const convergences: ConvergencePoint[] = [];
        
        // For each person with weak states
        for (const [personId, state] of communityState) {
            const weak = state.indicators.filter(i => i.value < 0.5);
            
            if (weak.length > 0) {
                // Find someone with strong opposite
                for (const [otherId, otherState] of communityState) {
                    if (personId === otherId) continue;
                    
                    const strong = otherState.indicators.find(
                        i => i.value > 0.7 && weak.some(w => w.name === i.name)
                    );
                    
                    if (strong) {
                        convergences.push({
                            personId,
                            weakIndicators: weak.map(w => w.name),
                            emergentTopicId: 'auto-detected',
                            overlapScore: (1 - weak[0].value) * strong.value,
                            suggestedAction: `Connect with ${otherId} for ${strong.name} support`
                        });
                    }
                }
            }
        }
        
        setActiveConvergences(convergences);
    }, [communityState]);

    return {
        communityState,
        activeConvergences,
        processSignal,
        fieldComposite: calculateCommunityComposite(communityState)
    };
}

function calculateCommunityComposite(states: Map<string, FOTState>): number {
    const composites = Array.from(states.values()).map(s => s.composite);
    if (composites.length === 0) return 0;
    // Hologram at community level: minimum, not average
    return Math.min(...composites);
}

// ═══════════════════════════════════════════════════════════
// EXAMPLE: AUTOMATIC SIGNAL CAPTURE
// ═══════════════════════════════════════════════════════════

/*
// In your chat/message handler:
function onMessage(message: { senderId: string; text: string; replyTo?: string }) {
    const { processSignal } = useCommunitySensing('regentribes');
    
    // Emit message signal
    processSignal(message.senderId, 'message_sent', {
        text: message.text,
        length: message.text.length,
        hasQuestion: message.text.includes('?'),
        isReply: !!message.replyTo
    });
    
    if (message.replyTo) {
        processSignal(message.senderId, 'message_received', {
            replyingTo: message.replyTo
        });
    }
}

// When someone witnesses an affinity:
function onAffinityWitnessed(witnessId: string, targetId: string, topic: string) {
    const { processSignal } = useCommunitySensing('regentribes');
    processSignal(witnessId, 'affinity_witnessed', { targetId, topic });
}

// When someone offers support:
function onSupportOffered(helperId: string, recipientId: string, type: string) {
    const { processSignal } = useCommunitySensing('regentribes');
    processSignal(helperId, 'support_offered', { recipientId, type });
}
*/

// ═══════════════════════════════════════════════════════════
// SIGNAL EMITTER COMPONENT
// ═══════════════════════════════════════════════════════════

export const FOTSignalEmitter: React.FC<{
    communityId: string;
    personId: string;
    children: (emit: (type: SignalType, data: any) => void) => React.ReactNode;
}> = ({ communityId, personId, children }) => {
    const { emitSignal } = useFOTSensing({ communityId, personId });
    return <>{children(emitSignal)}</>;
};

// ═══════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════

const styles: Record<string, React.CSSProperties> = {
    sensorDashboard: {
        background: '#12121a',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #2a2a3a'
    },
    indicatorBar: {
        height: '8px',
        background: '#2a2a3a',
        borderRadius: '4px',
        overflow: 'hidden',
        marginTop: '4px'
    },
    indicatorFill: {
        height: '100%',
        borderRadius: '4px',
        transition: 'width 0.5s ease'
    },
    indicatorRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px'
    },
    indicatorLabel: {
        width: '140px',
        fontSize: '12px',
        color: '#aaa'
    },
    indicatorValue: {
        width: '40px',
        fontSize: '11px',
        color: '#666',
        textAlign: 'right'
    },
    trajectory: {
        fontSize: '10px',
        padding: '2px 6px',
        borderRadius: '4px'
    }
};

export { FOTSensingEngine, BehavioralSignal, SignalType };