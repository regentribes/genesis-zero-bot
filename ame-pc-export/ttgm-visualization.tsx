// TTGM Visualization Component for Mythogen AME Lens
// React + Canvas/WebGL - Tetragrammaton Toroidal Field

import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface TTGMVectorData {
    name: 'YOD' | 'HE' | 'VAV' | 'HE+';
    strength: number; // 0-1
    color: string;
}

interface TTGMFieldData {
    vectors: TTGMVectorData[];
    torusRing: {
        opacity: number;
        flux: 'inward' | 'outward' | 'stable';
    };
    sacredRatio: number; // 0-1, closer to 1 = more balanced
    resonanceFrequency: number; // Hz
}

interface TTGMVisualizationProps {
    field: TTGMFieldData;
    size?: number;
    animate?: boolean;
    showLabels?: boolean;
    mode?: '2d' | '3d';
}

// ═══════════════════════════════════════════════════════════
// CONSTANTS (matching sacred-geometry.ts)
// ═══════════════════════════════════════════════════════════

const TTGM_COLORS = {
    YOD: '#FF6B35',   // Source - warm orange
    HE: '#4ECDC4',    // Recept - cool teal
    VAV: '#FFE66D',  // Flow - golden yellow
    HE_PLUS: '#95E1D3' // Return - soft mint
};

const VECTOR_LABELS = {
    YOD: { label: 'Source', subtitle: 'initiation' },
    HE: { label: 'Recept', subtitle: 'receiving' },
    VAV: { label: 'Flow', subtitle: 'action' },
    HE_PLUS: { label: 'Return', subtitle: 'integration' }
};

// ═══════════════════════════════════════════════════════════
// 2D CROSS VISUALIZATION (Primary)
// ═══════════════════════════════════════════════════════════

export const TTGM2D: React.FC<TTGMVisualizationProps> = ({
    field,
    size = 200,
    animate = true,
    showLabels = true,
    mode = '2d'
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const [time, setTime] = useState(0);

    // Animation loop
    useEffect(() => {
        if (!animate) return;
        
        const animateFrame = () => {
            setTime(t => t + 0.016 * field.resonanceFrequency * 10);
            animationRef.current = requestAnimationFrame(animateFrame);
        };
        
        animationRef.current = requestAnimationFrame(animateFrame);
        
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [animate, field.resonanceFrequency]);

    // Canvas rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const center = size / 2;
        const maxRadius = size * 0.35;
        
        // Clear
        ctx.clearRect(0, 0, size, size);
        
        // Pulse factor from resonance
        const pulse = animate ? 1 + Math.sin(time * 2) * 0.05 : 1;
        
        // Draw torus ring (background)
        ctx.beginPath();
        ctx.arc(center, center, maxRadius * 1.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100, 100, 120, ${field.torusRing.opacity * 0.3})`;
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Flux direction indicator
        if (field.torusRing.flux !== 'stable') {
            ctx.beginPath();
            const fluxDir = field.torusRing.flux === 'inward' ? 1 : -1;
            for (let i = 0; i < Math.PI * 2; i += 0.1) {
                const r = maxRadius * 1.2 + Math.sin(i * 3 + time) * 10 * fluxDir;
                const x = center + Math.cos(i) * r;
                const y = center + Math.sin(i) * r;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(150, 200, 255, ${field.torusRing.opacity * 0.5})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw 4 vectors (tetragrammaton cross)
        const vectorAngles = {
            YOD: -Math.PI / 2,      // Top
            HE: Math.PI,            // Left
            VAV: 0,                 // Right
            HE_PLUS: Math.PI / 2    // Bottom
        };
        
        const vectorOrder: Array<keyof typeof vectorAngles> = ['YOD', 'VAV', 'HE', 'HE_PLUS'];
        
        vectorOrder.forEach((vectorName) => {
            const vector = field.vectors.find(v => v.name === vectorName);
            if (!vector) return;
            
            const angle = vectorAngles[vectorName];
            const length = maxRadius * vector.strength * pulse;
            
            // Vector line
            ctx.beginPath();
            ctx.moveTo(center, center);
            ctx.lineTo(
                center + Math.cos(angle) * length,
                center + Math.sin(angle) * length
            );
            ctx.strokeStyle = vector.color;
            ctx.lineWidth = 6;
            ctx.lineCap = 'round';
            ctx.stroke();
            
            // Vector head (circle)
            ctx.beginPath();
            ctx.arc(
                center + Math.cos(angle) * length,
                center + Math.sin(angle) * length,
                8 * vector.strength + 2,
                0, Math.PI * 2
            );
            ctx.fillStyle = vector.color;
            ctx.fill();
            
            // Glow effect
            const gradient = ctx.createRadialGradient(
                center + Math.cos(angle) * length,
                center + Math.sin(angle) * length,
                0,
                center + Math.cos(angle) * length,
                center + Math.sin(angle) * length,
                20 * vector.strength
            );
            gradient.addColorStop(0, vector.color + '60');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(
                center + Math.cos(angle) * length - 20,
                center + Math.sin(angle) * length - 20,
                40, 40
            );
        });
        
        // Center point (the source)
        ctx.beginPath();
        ctx.arc(center, center, 12, 0, Math.PI * 2);
        const centerGradient = ctx.createRadialGradient(center, center, 0, center, center, 12);
        centerGradient.addColorStop(0, '#ffffff');
        centerGradient.addColorStop(0.5, '#aaaaaa');
        centerGradient.addColorStop(1, '#666666');
        ctx.fillStyle = centerGradient;
        ctx.fill();
        
        // Sacred ratio indicator (ring around center)
        ctx.beginPath();
        ctx.arc(center, center, 20, 0, Math.PI * 2 * field.sacredRatio);
        ctx.strokeStyle = field.sacredRatio > 0.7 ? '#00ff88' : 
                         field.sacredRatio > 0.4 ? '#ffaa00' : '#ff4444';
        ctx.lineWidth = 3;
        ctx.stroke();
        
    }, [field, size, time, animate]);
    
    // Labels (optional)
    const labels = showLabels ? (
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            pointerEvents: 'none'
        }}>
            {field.vectors.map((v) => {
                const angle = { YOD: -90, VAV: 0, HE: 180, 'HE+': 90 }[v.name];
                const rad = (angle * Math.PI) / 180;
                const labelRadius = size * 0.45;
                const x = size / 2 + Math.cos(rad) * labelRadius - 30;
                const y = size / 2 + Math.sin(rad) * labelRadius - 20;
                
                return (
                    <div key={v.name} style={{
                        position: 'absolute',
                        left: x, top: y,
                        textAlign: 'center',
                        color: v.color,
                        fontSize: '10px',
                        fontWeight: 600,
                        textShadow: '0 0 4px rgba(0,0,0,0.8)'
                    }}>
                        <div>{VECTOR_LABELS[v.name].label}</div>
                        <div style={{ fontSize: '8px', opacity: 0.7 }}>
                            {VECTOR_LABELS[v.name].subtitle}
                        </div>
                    </div>
                );
            })}
        </div>
    ) : null;
    
    return (
        <div style={{ position: 'relative', width: size, height: size }}>
            <canvas 
                ref={canvasRef} 
                width={size} 
                height={size}
                style={{ borderRadius: '50%' }}
            />
            {labels}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// COMPACT ICON VERSION (for lists)
// ═══════════════════════════════════════════════════════════

export const TTGMIcon: React.FC<{ field: TTGMFieldData; size?: number }> = ({
    field,
    size = 32
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const center = size / 2;
        const maxRadius = size * 0.4;
        
        ctx.clearRect(0, 0, size, size);
        
        // Simplified: just 4 dots with strength-based sizing
        const positions = [
            { name: 'YOD', x: center, y: size * 0.15 },
            { name: 'VAV', x: size * 0.85, y: center },
            { name: 'HE', x: size * 0.15, y: center },
            { name: 'HE+', x: center, y: size * 0.85 }
        ];
        
        positions.forEach(pos => {
            const vector = field.vectors.find(v => v.name === pos.name);
            const strength = vector?.strength || 0;
            const radius = 3 + strength * 6;
            
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = TTGM_COLORS[pos.name as keyof typeof TTGM_COLORS];
            ctx.fill();
        });
        
        // Center dot
        ctx.beginPath();
        ctx.arc(center, center, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
    }, [field, size]);
    
    return <canvas ref={canvasRef} width={size} height={size} />;
};

// ═══════════════════════════════════════════════════════════
// STATS DISPLAY COMPONENT
// ═══════════════════════════════════════════════════════════

export const TTGMStats: React.FC<{ field: TTGMFieldData }> = ({ field }) => {
    const coherenceColor = field.torusRing.opacity > 0.6 ? '#00ff88' :
                          field.torusRing.opacity > 0.3 ? '#ffaa00' : '#ff4444';
    
    const ratioColor = field.sacredRatio > 0.7 ? '#00ff88' :
                       field.sacredRatio > 0.4 ? '#ffaa00' : '#ff4444';
    
    const fluxIcons = {
        inward: '↙',
        outward: '↗',
        stable: '●'
    };
    
    return (
        <div style={{
            display: 'flex',
            gap: '16px',
            fontSize: '12px',
            color: '#aaa',
            marginTop: '8px'
        }}>
            <div>
                <span style={{ color: coherenceColor }}>●</span> Coherence: 
                {(field.torusRing.opacity * 100).toFixed(0)}%
            </div>
            <div>
                <span style={{ color: ratioColor }}>●</span> Sacred Ratio: 
                {(field.sacredRatio * 100).toFixed(0)}%
            </div>
            <div>
                Flux: {fluxIcons[field.torusRing.flux]}
            </div>
            <div>
                {(field.resonanceFrequency * 10).toFixed(1)}s cycle
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// LENS CARD EXAMPLE (Putting it together)
// ═══════════════════════════════════════════════════════════

export const PersonLensCard: React.FC<{
    person: { name: string; ttgm: TTGMFieldData; weakStates: string[] };
}> = ({ person }) => {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            border: '1px solid #333'
        }}>
            <TTGM2D field={person.ttgm} size={100} showLabels={false} />
            
            <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#fff' }}>
                    {person.name}
                </h3>
                <TTGMStats field={person.ttgm} />
                
                {person.weakStates.length > 0 && (
                    <div style={{ marginTop: '8px' }}>
                        <span style={{ color: '#ff6b6b', fontSize: '11px' }}>
                            Weak: {person.weakStates.join(', ')}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// EXAMPLE USAGE
// ═══════════════════════════════════════════════════════════

/*
const exampleField: TTGMFieldData = {
    vectors: [
        { name: 'YOD', strength: 0.8, color: TTGM_COLORS.YOD },
        { name: 'HE', strength: 0.6, color: TTGM_COLORS.HE },
        { name: 'VAV', strength: 0.9, color: TTGM_COLORS.VAV },
        { name: 'HE+', strength: 0.7, color: TTGM_COLORS.HE_PLUS }
    ],
    torusRing: {
        opacity: 0.7,
        flux: 'stable'
    },
    sacredRatio: 0.85,
    resonanceFrequency: 0.1
};

// In your component:
<TTGM2D field={exampleField} size={200} animate={true} showLabels={true} />
*/