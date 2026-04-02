// Mythogen AME Lens - Full UI Mockup
// The complete interface for Field of Trust visualization

import React, { useState, useMemo } from 'react';
import { TTGM2D, TTGMIcon, TTGMStats } from './ttgm-visualization';
import { TTGM3D, ConvergenceNetwork } from './ttgm-3d';

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

type ViewMode = 'individual' | 'collective' | 'convergence';
type SortBy = 'urgency' | 'affinity' | 'recency';
type FilterBy = 'all' | 'people' | 'topics' | 'issues';
type SocialRadius = 'local' | 'global' | 'specific';

interface Person {
    id: string;
    name: string;
    avatar?: string;
    ttgm: TTGMFieldData;
    weakStates: string[];
    lastActive: number;
    sacredDuty?: string; // Who they should reach out to
}

interface Topic {
    id: string;
    name: string;
    category: 'individual' | 'collective';
    emergenceScore: number;
    participantIds: string[];
    lastActivity: number;
}

interface ConvergencePoint {
    personId: string;
    withPersonId: string; // Who they're connected to
    vector: 'YOD' | 'HE' | 'VAV' | 'HE+';
    overlapScore: number;
    action: string;
}

interface LensState {
    viewMode: ViewMode;
    sortBy: SortBy;
    filterBy: FilterBy;
    socialRadius: SocialRadius;
    selectedPersonId: string | null;
    show3D: boolean;
    contentWeights: Record<string, number>;
}

// ═══════════════════════════════════════════════════════════
// MOCK DATA
// ═══════════════════════════════════════════════════════════

const mockPeople: Person[] = [
    {
        id: '1', name: 'Vic Desotelle',
        ttgm: { vectors: [
            { name: 'YOD', strength: 0.9, color: '#ff6b35' },
            { name: 'HE', strength: 0.7, color: '#4ecdc4' },
            { name: 'VAV', strength: 0.85, color: '#ffe66d' },
            { name: 'HE+', strength: 0.75, color: '#95e1d3' }
        ], torusRing: { opacity: 0.8, flux: 'stable' }, sacredRatio: 0.92, resonanceFrequency: 0.1 },
        weakStates: [],
        lastActive: Date.now() - 60000,
        sacredDuty: 'Support Oscar with YOD'
    },
    {
        id: '2', name: 'Oscar',
        ttgm: { vectors: [
            { name: 'YOD', strength: 0.35, color: '#ff6b35' },
            { name: 'HE', strength: 0.8, color: '#4ecdc4' },
            { name: 'VAV', strength: 0.7, color: '#ffe66d' },
            { name: 'HE+', strength: 0.65, color: '#95e1d3' }
        ], torusRing: { opacity: 0.4, flux: 'inward' }, sacredRatio: 0.55, resonanceFrequency: 0.1 },
        weakStates: ['YOD'],
        lastActive: Date.now() - 300000,
    },
    {
        id: '3', name: 'Sarah',
        ttgm: { vectors: [
            { name: 'YOD', strength: 0.7, color: '#ff6b35' },
            { name: 'HE', strength: 0.4, color: '#4ecdc4' },
            { name: 'VAV', strength: 0.6, color: '#ffe66d' },
            { name: 'HE+', strength: 0.8, color: '#95e1d3' }
        ], torusRing: { opacity: 0.45, flux: 'outward' }, sacredRatio: 0.6, resonanceFrequency: 0.1 },
        weakStates: ['HE'],
        lastActive: Date.now() - 600000,
    },
    {
        id: '4', name: 'Marcus',
        ttgm: { vectors: [
            { name: 'YOD', strength: 0.75, color: '#ff6b35' },
            { name: 'HE', strength: 0.85, color: '#4ecdc4' },
            { name: 'VAV', strength: 0.3, color: '#ffe66d' },
            { name: 'HE+', strength: 0.7, color: '#95e1d3' }
        ], torusRing: { opacity: 0.35, flux: 'inward' }, sacredRatio: 0.45, resonanceFrequency: 0.1 },
        weakStates: ['VAV'],
        lastActive: Date.now() - 120000,
    }
];

const mockTopics: Topic[] = [
    { id: 't1', name: 'Water Systems', category: 'collective', emergenceScore: 0.85, participantIds: ['1', '2', '4'], lastActivity: Date.now() - 60000 },
    { id: 't2', name: 'Community Governance', category: 'collective', emergenceScore: 0.72, participantIds: ['1', '3'], lastActivity: Date.now() - 300000 },
    { id: 't3', name: 'Solar Installation', category: 'collective', emergenceScore: 0.6, participantIds: ['2', '4'], lastActivity: Date.now() - 600000 },
];

const mockConvergences: ConvergencePoint[] = [
    { personId: '1', withPersonId: '2', vector: 'YOD', overlapScore: 0.92, action: 'Oscar needs source/initiation support' },
    { personId: '3', withPersonId: '1', vector: 'HE', overlapScore: 0.78, action: 'Sarah needs receptivity support' },
];

// ═══════════════════════════════════════════════════════════
// MAIN LENS COMPONENT
// ═══════════════════════════════════════════════════════════

export const MythogenLens: React.FC = () => {
    const [state, setState] = useState<LensState>({
        viewMode: 'convergence',
        sortBy: 'urgency',
        filterBy: 'all',
        socialRadius: 'global',
        selectedPersonId: null,
        show3D: false,
        contentWeights: { default: 1.0 }
    });

    // Sort people based on current sort
    const sortedPeople = useMemo(() => {
        const people = [...mockPeople];
        switch (state.sortBy) {
            case 'urgency':
                return people.sort((a, b) => b.weakStates.length - a.weakStates.length);
            case 'affinity':
                return people.sort((a, b) => b.ttgm.torusRing.opacity - a.ttgm.torusRing.opacity);
            case 'recency':
                return people.sort((a, b) => b.lastActive - a.lastActive);
            default:
                return people;
        }
    }, [state.sortBy]);

    // Get connections for convergence view
    const connections = useMemo(() => {
        return mockConvergences.map(c => ({
            from: c.personId,
            to: c.withPersonId,
            vector: c.vector,
            strength: c.overlapScore
        }));
    }, []);

    return (
        <div style={styles.container}>
            {/* SIDEBAR - Controls */}
            <div style={styles.sidebar}>
                <div style={styles.logo}>◇ LENS</div>
                
                {/* View Mode Tabs */}
                <div style={styles.tabs}>
                    {(['individual', 'collective', 'convergence'] as ViewMode).map(mode => (
                        <button
                            key={mode}
                            style={{
                                ...styles.tab,
                                ...(state.viewMode === mode ? styles.tabActive : {})
                            }}
                            onClick={() => setState(s => ({ ...s, viewMode: mode }))}
                        >
                            {mode.charAt(0).toUpperCase() + mode.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Sort & Filter */}
                <div style={styles.controlGroup}>
                    <label style={styles.label}>Sort by</label>
                    <select 
                        style={styles.select}
                        value={state.sortBy}
                        onChange={e => setState(s => ({ ...s, sortBy: e.target.value as SortBy }))}
                    >
                        <option value="urgency">Urgency (weak first)</option>
                        <option value="affinity">Affinity strength</option>
                        <option value="recency">Recency</option>
                    </select>
                </div>

                <div style={styles.controlGroup}>
                    <label style={styles.label}>Filter</label>
                    <select 
                        style={styles.select}
                        value={state.filterBy}
                        onChange={e => setState(s => ({ ...s, filterBy: e.target.value as FilterBy }))}
                    >
                        <option value="all">All</option>
                        <option value="people">People only</option>
                        <option value="topics">Topics only</option>
                        <option value="issues">Issues only</option>
                    </select>
                </div>

                <div style={styles.controlGroup}>
                    <label style={styles.label}>Social radius</label>
                    <select 
                        style={styles.select}
                        value={state.socialRadius}
                        onChange={e => setState(s => ({ ...s, socialRadius: e.target.value as SocialRadius }))}
                    >
                        <option value="local">Local</option>
                        <option value="global">Global</option>
                        <option value="specific">Specific targets</option>
                    </select>
                </div>

                {/* Stats Summary */}
                <div style={styles.stats}>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>{mockPeople.length}</span>
                        <span style={styles.statLabel}>People</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>{mockTopics.length}</span>
                        <span style={styles.statLabel}>Topics</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>{mockConvergences.length}</span>
                        <span style={styles.statLabel}>Active</span>
                    </div>
                </div>

                {/* Field Composite */}
                <div style={styles.fieldComposite}>
                    <div style={styles.fieldLabel}>Community FOT</div>
                    <div style={styles.fieldBar}>
                        <div style={{ ...styles.fieldBarFill, width: '62%' }} />
                    </div>
                    <div style={styles.fieldValue}>0.62 (hologram: min)</div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div style={styles.main}>
                {state.viewMode === 'individual' && (
                    <IndividualView 
                        people={sortedPeople} 
                        onSelect={id => setState(s => ({ ...s, selectedPersonId: id }))}
                        selectedId={state.selectedPersonId}
                    />
                )}

                {state.viewMode === 'collective' && (
                    <TopicsView topics={mockTopics} />
                )}

                {state.viewMode === 'convergence' && (
                    <ConvergenceView 
                        people={mockPeople}
                        connections={connections}
                        show3D={state.show3D}
                        onToggle3D={() => setState(s => ({ ...s, show3D: !s.show3D }))}
                    />
                )}
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// SUB-VIEWS
// ═══════════════════════════════════════════════════════════

const IndividualView: React.FC<{
    people: Person[];
    onSelect: (id: string) => void;
    selectedId: string | null;
}> = ({ people, onSelect, selectedId }) => {
    return (
        <div style={styles.grid}>
            {people.map(person => (
                <PersonCard 
                    key={person.id} 
                    person={person}
                    isSelected={selectedId === person.id}
                    onClick={() => onSelect(person.id)}
                />
            ))}
        </div>
    );
};

const PersonCard: React.FC<{
    person: Person;
    isSelected: boolean;
    onClick: () => void;
}> = ({ person, isSelected, onClick }) => {
    const hasWeak = person.weakStates.length > 0;
    
    return (
        <div 
            style={{
                ...styles.card,
                ...(isSelected ? styles.cardSelected : {}),
                ...(hasWeak ? styles.cardWarning : {})
            }}
            onClick={onClick}
        >
            <TTGMIcon field={person.ttgm} size={48} />
            <div style={styles.cardContent}>
                <div style={styles.cardName}>{person.name}</div>
                <TTGMStats field={person.ttgm} />
                {person.sacredDuty && (
                    <div style={styles.sacredDuty}>← {person.sacredDuty}</div>
                )}
            </div>
        </div>
    );
};

const TopicsView: React.FC<{ topics: Topic[] }> = ({ topics }) => {
    return (
        <div style={styles.topicsList}>
            <h3 style={styles.sectionTitle}>Emergent Topics</h3>
            {topics.map(topic => (
                <div key={topic.id} style={styles.topicCard}>
                    <div style={styles.topicName}>{topic.name}</div>
                    <div style={styles.topicMeta}>
                        <span>Score: {(topic.emergenceScore * 100).toFixed(0)}%</span>
                        <span>{topic.participantIds.length} participants</span>
                    </div>
                    <div style={styles.topicBar}>
                        <div style={{ 
                            ...styles.topicBarFill, 
                            width: `${topic.emergenceScore * 100}%` 
                        }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

const ConvergenceView: React.FC<{
    people: PersonNode[];
    connections: any[];
    show3D: boolean;
    onToggle3D: () => void;
}> = ({ people, connections, show3D, onToggle3D }) => {
    // Convert to nodes for 3D
    const nodes = people.map(p => ({
        id: p.id,
        name: p.name,
        ttgm: p.ttgm,
        position: { x: 0, y: 0, z: 0 }
    }));

    return (
        <div style={styles.convergenceContainer}>
            <div style={styles.convergenceHeader}>
                <h3 style={styles.sectionTitle}>Convergence Points</h3>
                <button style={styles.toggle3D} onClick={onToggle3D}>
                    {show3D ? '2D View' : '3D View'}
                </button>
            </div>
            
            {show3D ? (
                <div style={styles.convergence3D}>
                    <ConvergenceNetwork 
                        people={nodes as any} 
                        connections={connections} 
                        size={500}
                    />
                </div>
            ) : (
                <div style={styles.convergence2D}>
                    {mockConvergences.map((c, i) => {
                        const from = mockPeople.find(p => p.id === c.personId);
                        const to = mockPeople.find(p => p.id === c.withPersonId);
                        return (
                            <div key={i} style={styles.convergenceLine}>
                                <TTGMIcon field={from!.ttgm} size={40} />
                                <div style={styles.convergenceArrow}>━●━━</div>
                                <TTGMIcon field={to!.ttgm} size={40} />
                                <div style={styles.convergenceAction}>
                                    <strong>{c.vector}</strong>: {c.action}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════

const TTGMFieldData = require('./ttgm-visualization').TTGMFieldData;
const PersonNode = require('./ttgm-3d').PersonNode;

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        height: '100vh',
        background: '#0a0a12',
        color: '#e0e0e0',
        fontFamily: 'system-ui, sans-serif'
    },
    sidebar: {
        width: '240px',
        padding: '20px',
        background: '#12121a',
        borderRight: '1px solid #2a2a3a',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    logo: {
        fontSize: '18px',
        fontWeight: 700,
        letterSpacing: '4px',
        color: '#4ecdc4',
        marginBottom: '10px'
    },
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    tab: {
        padding: '10px 12px',
        background: 'transparent',
        border: 'none',
        borderRadius: '6px',
        color: '#888',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: '13px',
        transition: 'all 0.2s'
    },
    tabActive: {
        background: '#1a1a2e',
        color: '#4ecdc4'
    },
    controlGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
    },
    label: {
        fontSize: '11px',
        color: '#666',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    select: {
        padding: '8px 10px',
        background: '#1a1a2e',
        border: '1px solid #2a2a3a',
        borderRadius: '6px',
        color: '#e0e0e0',
        fontSize: '13px'
    },
    stats: {
        display: 'flex',
        gap: '12px',
        padding: '12px',
        background: '#1a1a2e',
        borderRadius: '8px',
        marginTop: 'auto'
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    statValue: {
        fontSize: '18px',
        fontWeight: 600,
        color: '#4ecdc4'
    },
    statLabel: {
        fontSize: '10px',
        color: '#666'
    },
    fieldComposite: {
        padding: '12px',
        background: '#1a1a2e',
        borderRadius: '8px'
    },
    fieldLabel: {
        fontSize: '11px',
        color: '#666',
        marginBottom: '8px'
    },
    fieldBar: {
        height: '8px',
        background: '#2a2a3a',
        borderRadius: '4px',
        overflow: 'hidden'
    },
    fieldBarFill: {
        height: '100%',
        background: 'linear-gradient(90deg, #4ecdc4, #95e1d3)',
        borderRadius: '4px'
    },
    fieldValue: {
        fontSize: '11px',
        color: '#888',
        marginTop: '6px',
        textAlign: 'right'
    },
    main: {
        flex: 1,
        padding: '20px',
        overflow: 'auto'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px'
    },
    card: {
        background: '#12121a',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        border: '1px solid #2a2a3a',
        cursor: 'pointer',
        transition: 'all 0.2s'
    },
    cardSelected: {
        borderColor: '#4ecdc4'
    },
    cardWarning: {
        borderColor: '#ff6b6b'
    },
    cardContent: {
        flex: 1
    },
    cardName: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#fff',
        marginBottom: '4px'
    },
    sacredDuty: {
        marginTop: '8px',
        fontSize: '11px',
        color: '#00ff88'
    },
    sectionTitle: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#fff',
        marginBottom: '16px'
    },
    topicsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },
    topicCard: {
        background: '#12121a',
        borderRadius: '10px',
        padding: '16px',
        border: '1px solid #2a2a3a'
    },
    topicName: {
        fontSize: '15px',
        fontWeight: 500,
        color: '#fff',
        marginBottom: '8px'
    },
    topicMeta: {
        display: 'flex',
        gap: '16px',
        fontSize: '12px',
        color: '#888',
        marginBottom: '8px'
    },
    topicBar: {
        height: '4px',
        background: '#2a2a3a',
        borderRadius: '2px',
        overflow: 'hidden'
    },
    topicBarFill: {
        height: '100%',
        background: '#ffe66d',
        borderRadius: '2px'
    },
    convergenceContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    convergenceHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toggle3D: {
        padding: '8px 16px',
        background: '#1a1a2e',
        border: '1px solid #4ecdc4',
        borderRadius: '6px',
        color: '#4ecdc4',
        cursor: 'pointer',
        fontSize: '13px'
    },
    convergence3D: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0a0a12',
        borderRadius: '16px',
        padding: '20px'
    },
    convergence2D: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    convergenceLine: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        background: '#12121a',
        borderRadius: '12px',
        border: '1px solid #2a2a3a'
    },
    convergenceArrow: {
        color: '#00ff88',
        fontSize: '20px',
        letterSpacing: '4px'
    },
    convergenceAction: {
        flex: 1,
        fontSize: '13px',
        color: '#aaa'
    }
};

// Export for use
export default MythogenLens;