// Real-time WebSocket Layer for Mythogen AME
// Live field updates, convergence firing, presence

import { io, Socket } from 'socket.io-client';
import { useEffect, useState, useCallback, useRef } from 'react';

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface WSEvent {
    type: string;
    payload: any;
    timestamp: number;
}

interface FieldUpdate {
    personId: string;
    ttgm: TTGMFieldData;
    indicators: FOTIndicator[];
    previousCoherence: number;
    newCoherence: number;
}

interface ConvergenceFired {
    convergenceId: string;
    fromPersonId: string;
    toPersonId: string;
    vector: 'YOD' | 'HE' | 'VAV' | 'HE+';
    overlapScore: number;
    action: string;
}

interface PresenceUpdate {
    personId: string;
    status: 'online' | 'away' | 'focus';
    lastActive: number;
    currentTopic?: string;
}

interface RealtimeLensOptions {
    url?: string;
    communityId: string;
    personId: string;
    onFieldUpdate?: (update: FieldUpdate) => void;
    onConvergenceFired?: (convergence: ConvergenceFired) => void;
    onPresenceUpdate?: (update: PresenceUpdate) => void;
    onSacredClown?: (trigger: { type: string; message: string }) => void;
}

// ═══════════════════════════════════════════════════════════
// HOOK: USE REALTIME LENS
// ═══════════════════════════════════════════════════════════

export function useRealtimeLens(options: RealtimeLensOptions) {
    const socketRef = useRef<Socket | null>(null);
    const [connected, setConnected] = useState(false);
    const [lastUpdate, setLastUpdate] = useState<number | null>(null);
    const [fieldUpdates, setFieldUpdates] = useState<FieldUpdate[]>([]);
    const [convergences, setConvergences] = useState<ConvergenceFired[]>([]);
    const [presence, setPresence] = useState<Map<string, PresenceUpdate>>(new Map());

    // Connect on mount
    useEffect(() => {
        const socket = io(options.url || 'http://localhost:3001', {
            transports: ['websocket'],
            auth: {
                communityId: options.communityId,
                personId: options.personId
            }
        });

        socketRef.current = socket;

        socket.on('connect', () => {
            setConnected(true);
            console.log('[Lens WS] Connected');
        });

        socket.on('disconnect', () => {
            setConnected(false);
            console.log('[Lens WS] Disconnected');
        });

        // Field update (TTGM changed)
        socket.on('field:update', (update: FieldUpdate) => {
            setLastUpdate(Date.now());
            setFieldUpdates(prev => [...prev.slice(-50), update]); // Keep last 50
            options.onFieldUpdate?.(update);
        });

        // Convergence fired (sacred duty activated)
        socket.on('convergence:fired', (convergence: ConvergenceFired) => {
            setConvergences(prev => [...prev, convergence]);
            options.onConvergenceFired?.(convergence);
        });

        // Presence update
        socket.on('presence:update', (update: PresenceUpdate) => {
            setPresence(prev => new Map(prev).set(update.personId, update));
            options.onPresenceUpdate?.(update);
        });

        // Sacred Clown triggered
        socket.on('sacred_clown:trigger', (trigger) => {
            options.onSacredClown?.(trigger);
        });

        // Initial state
        socket.emit('subscribe', {
            communityId: options.communityId,
            channels: ['field', 'convergence', 'presence']
        });

        return () => {
            socket.disconnect();
        };
    }, [options.url, options.communityId, options.personId]);

    // Send presence
    const updatePresence = useCallback((status: PresenceUpdate['status'], topic?: string) => {
        socketRef.current?.emit('presence:update', {
            personId: options.personId,
            status,
            currentTopic: topic,
            lastActive: Date.now()
        });
    }, [options.personId]);

    // Request field state
    const requestFieldState = useCallback((targetPersonId?: string) => {
        socketRef.current?.emit('field:request', {
            communityId: options.communityId,
            targetPersonId
        });
    }, [options.communityId]);

    return {
        connected,
        lastUpdate,
        fieldUpdates,
        convergences,
        presence,
        updatePresence,
        requestFieldState
    };
}

// ═══════════════════════════════════════════════════════════
// SERVER SIDE (Node.js / Socket.io)
// ═══════════════════════════════════════════════════════════

/*
import { Server } from 'socket.io';
import { Surreal } from 'surrealdb';

const io = new Server(3001, {
    cors: { origin: '*' }
});

const db = new Surreal();
await db.connect('mem://mythogen');
await db.use({ namespace: 'mythogen', database: 'ame' });

// Connected clients
const rooms = new Map<string, Set<string>>(); // communityId -> personIds

io.on('connection', (socket) => {
    const { communityId, personId } = socket.handshake.auth;
    
    // Join community room
    socket.join(`community:${communityId}`);
    
    if (!rooms.has(communityId)) rooms.set(communityId, new Set());
    rooms.get(communityId)!.add(personId);
    
    console.log(`[WS] ${personId} joined ${communityId}`);
    
    // Subscribe to channels
    socket.on('subscribe', ({ communityId, channels }) => {
        channels.forEach(ch => socket.join(`${ch}:${communityId}`));
    });
    
    // Presence updates
    socket.on('presence:update', async (data) => {
        io.to(`presence:${communityId}`).emit('presence:update', data);
    });
    
    // Field state request
    socket.on('field:request', async ({ communityId, targetPersonId }) => {
        const field = await getFieldState(targetPersonId);
        socket.emit('field:state', field);
    });
    
    socket.on('disconnect', () => {
        rooms.get(communityId)?.delete(personId);
        io.to(`presence:${communityId}`).emit('presence:update', {
            personId,
            status: 'away',
            lastActive: Date.now()
        });
    });
});

// ═══════════════════════════════════════════════════════════
// FIELD UPDATE EMITTER (called when FOT changes)
// ═══════════════════════════════════════════════════════════

async function onFOTChanged(
    communityId: string,
    personId: string,
    newTTGM: TTGMFieldData
) {
    const previousCoherence = await getPreviousCoherence(personId);
    const newCoherence = newTTGM.toroidalCoherence;
    
    // Emit field update
    io.to(`field:${communityId}`).emit('field:update', {
        personId,
        ttgm: newTTGM,
        previousCoherence,
        newCoherence,
        timestamp: Date.now()
    });
    
    // Check convergence
    const convergences = await findSacredConvergences(communityId, personId);
    for (const conv of convergences) {
        io.to(`convergence:${communityId}`).emit('convergence:fired', conv);
    }
    
    // Check Sacred Clown triggers
    if (newCoherence < 0.3 && previousCoherence >= 0.3) {
        io.to(`sacred_clown:${communityId}`).emit('sacred_clown:trigger', {
            type: 'coherence_collapse',
            message: `Field coherence dropped to ${newCoherence.toFixed(2)}`
        });
    }
}
*/

// ═══════════════════════════════════════════════════════════
// REACT COMPONENT: LIVE FIELD DISPLAY
// ═══════════════════════════════════════════════════════════

interface LiveFieldProps {
    communityId: string;
    personId: string;
}

export const LiveFieldDisplay: React.FC<LiveFieldProps> = ({
    communityId,
    personId
}) => {
    const {
        connected,
        lastUpdate,
        fieldUpdates,
        convergences,
        presence,
        updatePresence,
        requestFieldState
    } = useRealtimeLens({
        communityId,
        personId,
        onFieldUpdate: (update) => {
            console.log('Field updated:', update.personId, update.newCoherence);
        },
        onConvergenceFired: (conv) => {
            // Show notification
            showConvergenceNotification(conv);
        },
        onSacredClown: (trigger) => {
            showSacredClownAlert(trigger);
        }
    });

    const [notifications, setNotifications] = useState<Array<{
        id: number;
        type: 'convergence' | 'sacred_clown' | 'presence';
        message: string;
    }>>([]);

    // Auto-request field state on mount
    useEffect(() => {
        requestFieldState();
    }, [requestFieldState]);

    // Connection indicator
    const ConnectionDot = () => (
        <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: connected ? '#00ff88' : '#ff4444',
            display: 'inline-block',
            marginRight: '8px'
        }} />
    );

    // Last update timestamp
    const lastUpdateStr = lastUpdate 
        ? `${((Date.now() - lastUpdate) / 1000).toFixed(1)}s ago`
        : 'never';

    return (
        <div style={styles.liveContainer}>
            {/* Header with connection status */}
            <div style={styles.liveHeader}>
                <ConnectionDot />
                <span style={{ color: '#888', fontSize: '12px' }}>
                    {connected ? 'Live' : 'Disconnected'}
                </span>
                <span style={{ color: '#666', fontSize: '11px', marginLeft: 'auto' }}>
                    Last update: {lastUpdateStr}
                </span>
            </div>

            {/* Presence bar */}
            <div style={styles.presenceBar}>
                <span style={styles.presenceLabel}>Online:</span>
                {Array.from(presence.values()).map(p => (
                    <div key={p.personId} style={styles.presenceDot} title={p.personId}>
                        {p.status === 'online' ? '🟢' : p.status === 'focus' ? '🔴' : '🟡'}
                    </div>
                ))}
            </div>

            {/* Recent field updates */}
            {fieldUpdates.length > 0 && (
                <div style={styles.updatesList}>
                    <div style={styles.updateLabel}>Recent Changes</div>
                    {fieldUpdates.slice(-3).reverse().map((update, i) => (
                        <div key={i} style={styles.updateItem}>
                            <span style={{ color: '#4ecdc4' }}>{update.personId}</span>
                            <span style={{ color: '#888' }}>
                                {update.previousCoherence.toFixed(2)} → {update.newCoherence.toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Active convergences */}
            {convergences.length > 0 && (
                <div style={styles.convergenceBanner}>
                    🔗 {convergences.length} sacred duty(ies) active
                </div>
            )}

            {/* Notification toasts */}
            <div style={styles.notifications}>
                {notifications.map(n => (
                    <div key={n.id} style={{
                        ...styles.notification,
                        borderColor: n.type === 'sacred_clown' ? '#ff6b6b' : '#00ff88'
                    }}>
                        {n.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// NOTIFICATION HELPERS
// ═══════════════════════════════════════════════════════════

function showConvergenceNotification(conv: ConvergenceFired) {
    // Would integrate with toast system
    console.log(`🔗 Convergence: ${conv.fromPersonId} → ${conv.toPersonId} (${conv.vector})`);
}

function showSacredClownAlert(trigger: { type: string; message: string }) {
    console.log(`🤡 Sacred Clown: ${trigger.type} - ${trigger.message}`);
}

// ═══════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════

const styles: Record<string, React.CSSProperties> = {
    liveContainer: {
        background: '#12121a',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #2a2a3a'
    },
    liveHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
    },
    presenceBar: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '12px',
        padding: '8px',
        background: '#1a1a2e',
        borderRadius: '8px'
    },
    presenceLabel: {
        fontSize: '11px',
        color: '#666'
    },
    presenceDot: {
        fontSize: '12px'
    },
    updatesList: {
        marginBottom: '12px'
    },
    updateLabel: {
        fontSize: '11px',
        color: '#666',
        marginBottom: '8px',
        textTransform: 'uppercase'
    },
    updateItem: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        padding: '4px 0'
    },
    convergenceBanner: {
        padding: '8px 12px',
        background: 'rgba(0, 255, 136, 0.1)',
        border: '1px solid #00ff88',
        borderRadius: '8px',
        fontSize: '12px',
        color: '#00ff88',
        textAlign: 'center'
    },
    notifications: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 1000
    },
    notification: {
        padding: '12px 16px',
        background: '#1a1a2e',
        borderRadius: '8px',
        border: '1px solid',
        fontSize: '13px',
        color: '#e0e0e0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        animation: 'slideIn 0.3s ease'
    }
};

// ═══════════════════════════════════════════════════════════
// USAGE EXAMPLE
// ═══════════════════════════════════════════════════════════

/*
// In your App:
function App() {
    return (
        <div>
            <MythogenLens />
            <LiveFieldDisplay 
                communityId="regentribes"
                personId="user_123"
            />
        </div>
    );
}

// Or embed in sidebar:
function LensWithLive() {
    const [showLive, setShowLive] = useState(false);
    
    return (
        <div>
            <MythogenLens />
            {showLive && <LiveFieldDisplay 
                communityId="regentribes"
                personId="user_123"
            />}
            <button onClick={() => setShowLive(!showLive)}>
                {showLive ? 'Hide Live' : 'Show Live'}
            </button>
        </div>
    );
}
*/

export { useRealtimeLens, LiveFieldDisplay };