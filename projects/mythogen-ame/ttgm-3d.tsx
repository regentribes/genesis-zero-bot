// TTGM 3D Visualization + Convergence Network
// Three.js - Toroidal Field + Sacred Responsibility Lines

import React, { useRef, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TTGMFieldData, TTGMVectorData } from './ttgm-visualization';

// ═══════════════════════════════════════════════════════════
// 3D TORUS VISUALIZATION
// ═══════════════════════════════════════════════════════════

interface TTGM3DProps {
    field: TTGMFieldData;
    size?: number;
    autoRotate?: boolean;
    showVectors?: boolean;
    opacity?: number;
}

export const TTGM3D: React.FC<TTGM3DProps> = ({
    field,
    size = 400,
    autoRotate = true,
    showVectors = true,
    opacity = 0.8
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const frameRef = useRef<number>();
    
    useEffect(() => {
        if (!containerRef.current) return;
        
        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a12);
        sceneRef.current = scene;
        
        // Camera
        const camera = new THREE.PerspectiveCamera(60, size / size, 0.1, 1000);
        camera.position.set(0, 0, 5);
        
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(size, size);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        
        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        
        // Lights
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);
        
        // Torus (the field)
        const torusGeometry = new THREE.TorusGeometry(1.5, 0.15, 16, 100);
        const torusMaterial = new THREE.MeshPhongMaterial({
            color: 0x4a90d9,
            transparent: true,
            opacity: opacity * field.torusRing.opacity,
            wireframe: false,
            side: THREE.DoubleSide
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        scene.add(torus);
        
        // Inner torus (flux indicator)
        const innerTorusGeom = new THREE.TorusGeometry(1.2, 0.08, 16, 50);
        const fluxColor = field.torusRing.flux === 'inward' ? 0x00ffff :
                         field.torusRing.flux === 'outward' ? 0xff6600 : 0x666666;
        const innerTorusMat = new THREE.MeshPhongMaterial({
            color: fluxColor,
            transparent: true,
            opacity: 0.4
        });
        const innerTorus = new THREE.Mesh(innerTorusGeom, innerTorusMat);
        scene.add(innerTorus);
        
        // 4 Vectors as arrows/cylinders
        if (showVectors) {
            const vectorPositions = [
                { name: 'YOD', dir: new THREE.Vector3(0, 1, 0), color: 0xff6b35 },
                { name: 'VAV', dir: new THREE.Vector3(1, 0, 0), color: 0xffe66d },
                { name: 'HE', dir: new THREE.Vector3(-1, 0, 0), color: 0x4ecdc4 },
                { name: 'HE+', dir: new THREE.Vector3(0, -1, 0), color: 0x95e1d3 }
            ];
            
            vectorPositions.forEach(v => {
                const vector = field.vectors.find(f => f.name === v.name);
                const strength = vector?.strength || 0.5;
                
                // Shaft
                const shaftGeom = new THREE.CylinderGeometry(0.08, 0.08, strength * 1.2, 8);
                const shaftMat = new THREE.MeshPhongMaterial({ color: v.color });
                const shaft = new THREE.Mesh(shaftGeom, shaftMat);
                
                // Rotate to direction
                if (v.name === 'YOD') shaft.rotation.x = 0;
                else if (v.name === 'VAV') shaft.rotation.z = -Math.PI / 2;
                else if (v.name === 'HE') shaft.rotation.z = Math.PI / 2;
                else if (v.name === 'HE+') shaft.rotation.x = Math.PI;
                
                shaft.position.copy(v.dir.clone().multiplyScalar(0.8 + strength * 0.5));
                scene.add(shaft);
                
                // Head (sphere)
                const headGeom = new THREE.SphereGeometry(0.15 + strength * 0.1, 16, 16);
                const headMat = new THREE.MeshPhongMaterial({ 
                    color: v.color,
                    emissive: v.color,
                    emissiveIntensity: 0.3
                });
                const head = new THREE.Mesh(headGeom, headMat);
                head.position.copy(v.dir.clone().multiplyScalar(1.5 * strength + 0.5));
                scene.add(head);
            });
        }
        
        // Center core
        const coreGeom = new THREE.SphereGeometry(0.2, 16, 16);
        const coreMat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            emissive: 0xaaaaaa,
            emissiveIntensity: 0.5
        });
        const core = new THREE.Mesh(coreGeom, coreMat);
        scene.add(core);
        
        // Sacred ratio ring (around core)
        const ratioGeom = new THREE.RingGeometry(0.35, 0.4, 32);
        const ratioColor = field.sacredRatio > 0.7 ? 0x00ff88 :
                          field.sacredRatio > 0.4 ? 0xffaa00 : 0xff4444;
        const ratioMat = new THREE.MeshBasicMaterial({
            color: ratioColor,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: field.sacredRatio
        });
        const ratioRing = new THREE.Mesh(ratioGeom, ratioMat);
        ratioRing.rotation.x = Math.PI / 2;
        scene.add(ratioRing);
        
        // Animation loop
        let time = 0;
        const animate = () => {
            frameRef.current = requestAnimationFrame(animate);
            time += 0.016;
            
            // Rotate torus
            if (autoRotate) {
                torus.rotation.x = time * 0.2;
                torus.rotation.y = time * 0.1;
                innerTorus.rotation.x = -time * 0.3;
            }
            
            // Pulse based on resonance
            const pulse = 1 + Math.sin(time * field.resonanceFrequency * 10) * 0.1;
            core.scale.setScalar(pulse);
            
            controls.update();
            renderer.render(scene, camera);
        };
        
        animate();
        
        // Cleanup
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            renderer.dispose();
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [field, size, autoRotate, showVectors, opacity]);
    
    return (
        <div 
            ref={containerRef} 
            style={{ width: size, height: size, borderRadius: '50%' }}
        />
    );
};

// ═══════════════════════════════════════════════════════════
// CONVERGENCE NETWORK - Sacred Responsibility Lines
// ═══════════════════════════════════════════════════════════

interface PersonNode {
    id: string;
    name: string;
    ttgm: TTGMFieldData;
    position: { x: number; y: number; z: number };
}

interface SacredConnection {
    from: string;  // Has strong vector
    to: string;   // Has weak vector (needs support)
    vector: 'YOD' | 'HE' | 'VAV' | 'HE+';
    strength: number;  // How strong the duty
}

interface ConvergenceNetworkProps {
    people: PersonNode[];
    connections: SacredConnection[];
    size?: number;
}

export const ConvergenceNetwork: React.FC<ConvergenceNetworkProps> = ({
    people,
    connections,
    size = 600
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);
    
    // Layout: force-directed would be better, but simple circular for now
    const layout = useMemo(() => {
        const radius = 3;
        return people.map((p, i) => {
            const angle = (i / people.length) * Math.PI * 2;
            return {
                ...p,
                position: {
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    z: (Math.random() - 0.5) * 0.5
                }
            };
        });
    }, [people]);
    
    useEffect(() => {
        if (!containerRef.current) return;
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a12);
        
        const camera = new THREE.PerspectiveCamera(60, size / size, 0.1, 1000);
        camera.position.set(0, 0, 10);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(size, size);
        containerRef.current.appendChild(renderer.domElement);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        
        // Ambient light
        scene.add(new THREE.AmbientLight(0x404040, 0.6));
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        
        // Create person nodes
        const nodeMeshes: Map<string, THREE.Mesh> = new Map();
        
        layout.forEach(person => {
            const weakCount = person.ttgm.vectors.filter(v => v.strength < 0.5).length;
            const nodeSize = 0.3 + weakCount * 0.15;
            
            const geom = new THREE.SphereGeometry(nodeSize, 16, 16);
            const mat = new THREE.MeshPhongMaterial({
                color: weakCount > 0 ? 0xff6b6b : 0x4ecdc4,
                transparent: true,
                opacity: 0.9
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.position.set(person.position.x, person.position.y, person.position.z);
            mesh.userData = { personId: person.id };
            scene.add(mesh);
            nodeMeshes.set(person.id, mesh);
            
            // Label
            // (Text sprites would go here - simplified for now)
        });
        
        // Create sacred responsibility lines
        connections.forEach(conn => {
            const fromNode = layout.find(p => p.id === conn.from);
            const toNode = layout.find(p => p.id === conn.to);
            
            if (!fromNode || !toNode) return;
            
            const points = [
                new THREE.Vector3(fromNode.position.x, fromNode.position.y, fromNode.position.z),
                new THREE.Vector3(toNode.position.x, toNode.position.y, toNode.position.z)
            ];
            
            const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
            const lineMat = new THREE.LineBasicMaterial({
                color: 0x00ff88,
                transparent: true,
                opacity: conn.strength * 0.7
            });
            const line = new THREE.Line(lineGeom, lineMat);
            scene.add(line);
            
            // Arrow head
            const mid = new THREE.Vector3().lerpVectors(
                new THREE.Vector3(fromNode.position.x, fromNode.position.y, fromNode.position.z),
                new THREE.Vector3(toNode.position.x, toNode.position.y, toNode.position.z),
                0.7
            );
            
            const arrowGeom = new THREE.ConeGeometry(0.1, 0.3, 8);
            const arrowMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
            const arrow = new THREE.Mesh(arrowGeom, arrowMat);
            arrow.position.copy(mid);
            arrow.lookAt(new THREE.Vector3(toNode.position.x, toNode.position.y, toNode.position.z));
            arrow.rotateX(Math.PI / 2);
            scene.add(arrow);
        });
        
        // Animation
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.01;
            
            // Gentle rotation of entire network
            scene.rotation.y = time * 0.1;
            
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
        
        return () => {
            renderer.dispose();
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [layout, connections, size]);
    
    return (
        <div style={{ position: 'relative' }}>
            <div ref={containerRef} />
            <div style={{
                position: 'absolute',
                bottom: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#00ff88',
                fontSize: '11px'
            }}>
                Green lines = sacred responsibilities
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// EXAMPLE DATA FOR TESTING
// ═══════════════════════════════════════════════════════════

/*
const examplePeople: PersonNode[] = [
    {
        id: '1', name: 'Vic',
        ttgm: { vectors: [
            { name: 'YOD', strength: 0.9, color: '#ff6b35' },
            { name: 'HE', strength: 0.7, color: '#4ecdc4' },
            { name: 'VAV', strength: 0.8, color: '#ffe66d' },
            { name: 'HE+', strength: 0.6, color: '#95e1d3' }
        ], torusRing: { opacity: 0.7, flux: 'stable' }, sacredRatio: 0.85, resonanceFrequency: 0.1 },
        position: { x: 0, y: 0, z: 0 }
    },
    {
        id: '2', name: 'Oscar',
        ttgm: { vectors: [
            { name: 'YOD', strength: 0.4, color: '#ff6b35' },  // Weak!
            { name: 'HE', strength: 0.8, color: '#4ecdc4' },
            { name: 'VAV', strength: 0.7, color: '#ffe66d' },
            { name: 'HE+', strength: 0.6, color: '#95e1d3' }
        ], torusRing: { opacity: 0.4, flux: 'inward' }, sacredRatio: 0.55, resonanceFrequency: 0.1 },
        position: { x: 0, y: 0, z: 0 }
    }
];

const exampleConnections: SacredConnection[] = [
    { from: '1', to: '2', vector: 'YOD', strength: 0.9 }  // Vic's strong YOD → Oscar's weak YOD
];

// Usage:
<ConvergenceNetwork people={examplePeople} connections={exampleConnections} />
*/