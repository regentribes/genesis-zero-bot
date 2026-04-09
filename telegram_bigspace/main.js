import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const AUTHOR_COLORS = {
    'Genesis': 0x00FF88,
    'Vitali': 0xFFD700,
    'Ian Tairea': 0xFF6B6B,
    'Airic Easm': 0x4ECDC4,
    'Oscar C ii 🔺': 0x9B59B6,
    'Philipp': 0x3498DB,
    'Jacob Foster': 0xE67E22,
    'Carl Welty': 0x1ABC9C,
    'Anabela Gonçalves': 0xE91E63,
    'Stefan': 0x00BCD4,
    'Justin Lofton': 0x8BC34A,
};

let scene, camera, renderer, controls;
let messageMeshes = [];
let lineGeometry;
let sceneData = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let hoveredMesh = null;
let selectedMesh = null;

// Camera state for velocity display
let lastCameraPosition = new THREE.Vector3();
let lastTime = performance.now();

async function loadScene() {
    const response = await fetch('/big_space_scene.json');
    if (!response.ok) throw new Error('Failed to load scene data');
    return response.json();
}

function init() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
    camera.position.set(50, 50, 100);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.PAN
    };

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 100, 50);
    scene.add(directionalLight);

    // Grid helper (subtle)
    const gridHelper = new THREE.GridHelper(2000, 50, 0x222222, 0x111111);
    gridHelper.position.y = -50;
    scene.add(gridHelper);

    // Event listeners
    window.addEventListener('resize', onWindowResize);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

    // Load data
    loadScene().then(data => {
        sceneData = data;
        buildScene(data);
        updateUI(data);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('ui').style.display = 'block';
        animate();
    }).catch(err => {
        console.error('Error loading scene:', err);
        document.getElementById('loading').textContent = 'Error: ' + err.message;
    });
}

function buildScene(data) {
    const messages = data.messages;
    const authors = data.authors;
    const replyChains = data.reply_chains;

    // Calculate time range for scaling
    const times = messages.map(m => m.unixtime);
    const timeMin = Math.min(...times);
    const timeMax = Math.max(...times);
    const timeRange = timeMax - timeMin || 1;

    // Create sphere geometry (reused for all messages)
    const sphereGeo = new THREE.SphereGeometry(0.5, 12, 12);

    // Create messages
    messages.forEach((msg, i) => {
        // Map time to X position (spread over 1000 units)
        const t = (msg.unixtime - timeMin) / timeRange;
        const x = (t - 0.5) * 1000;

        // Author-based Y position (group authors vertically)
        const authorIndex = authors.findIndex(a => a.name === msg.author);
        const y = (authorIndex - authors.length / 2) * 8;

        // Text length-based Z position
        const z = (msg.text_length % 100) - 50;

        // Color by author
        const color = AUTHOR_COLORS[msg.author] || 0xffffff;
        const material = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.7,
            metalness: 0.3,
            emissive: color,
            emissiveIntensity: msg.link_count > 0 ? 0.3 : 0.1,
        });

        // Scale based on link count
        const scale = 0.3 + Math.min(msg.link_count * 0.15, 1.5);

        const mesh = new THREE.Mesh(sphereGeo, material);
        mesh.position.set(x, y, z);
        mesh.scale.setScalar(scale);
        mesh.userData = { msg, author: msg.author };

        scene.add(mesh);
        messageMeshes.push(mesh);
    });

    // Create reply chain lines (limit for performance)
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.15 
    });

    // Build position lookup
    const posById = new Map();
    messageMeshes.forEach(m => posById.set(m.userData.msg.msg_id, m.position));

    const points = [];
    const maxLines = Math.min(replyChains.length, 1000);

    for (let i = 0; i < maxLines; i++) {
        const reply = replyChains[i];
        const from = posById.get(reply.from);
        const to = posById.get(reply.to);

        if (from && to) {
            // Color line by author
            const authorColor = new THREE.Color(AUTHOR_COLORS[reply.author] || 0xffffff);
            const lineMat = new THREE.LineBasicMaterial({
                color: authorColor,
                transparent: true,
                opacity: 0.1
            });

            const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
            const line = new THREE.Line(geometry, lineMat);
            scene.add(line);
        }
    }

    // Add axis labels
    addAxisLabels(timeMin, timeMax);
}

function addAxisLabels(timeMin, timeMax) {
    // This would need sprites or canvas textures for proper labels
    // For now we rely on the UI
}

function updateUI(data) {
    document.getElementById('topic-name').textContent = data.meta.name;
    document.getElementById('msg-count').textContent = data.messages.length;
    document.getElementById('author-count').textContent = data.authors.length;
    document.getElementById('link-count').textContent = data.links.length;

    // Build legend
    const legend = document.getElementById('legend');
    legend.innerHTML = '';
    data.authors.forEach(author => {
        const color = AUTHOR_COLORS[author.name] || 0xffffff;
        const hexColor = '#' + color.toString(16).padStart(6, '0');
        legend.innerHTML += `<div style="margin:3px 0">
            <span class="author" style="background:${hexColor};display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px"></span>
            ${author.name} (${author.message_count})
        </div>`;
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(messageMeshes);

    // Reset previous hover
    if (hoveredMesh && hoveredMesh !== selectedMesh) {
        hoveredMesh.material.emissiveIntensity = hoveredMesh.userData.msg.link_count > 0 ? 0.3 : 0.1;
    }

    if (intersects.length > 0) {
        hoveredMesh = intersects[0].object;
        hoveredMesh.material.emissiveIntensity = 0.6;

        // Update hover info panel
        const info = document.getElementById('hover-info');
        const msg = hoveredMesh.userData.msg;
        const color = AUTHOR_COLORS[msg.author] || 0xffffff;
        const hexColor = '#' + color.toString(16).padStart(6, '0');

        info.querySelector('.author-dot').style.background = hexColor;
        info.querySelector('.author-name').textContent = msg.author;
        info.querySelector('.date').textContent = msg.date;
        info.querySelector('.text').textContent = msg.text_preview.substring(0, 200) + (msg.text_preview.length > 200 ? '...' : '');
        info.querySelector('.links').textContent = msg.link_count > 0 ? `🔗 ${msg.link_count} link(s)` : '';

        info.style.display = 'block';
        document.body.style.cursor = 'pointer';
    } else {
        hoveredMesh = null;
        document.getElementById('hover-info').style.display = 'none';
        document.body.style.cursor = 'default';
    }
}

function onClick(event) {
    if (hoveredMesh) {
        // Select this message
        if (selectedMesh) {
            selectedMesh.material.emissiveIntensity = selectedMesh.userData.msg.link_count > 0 ? 0.3 : 0.1;
        }
        selectedMesh = hoveredMesh;
        selectedMesh.material.emissiveIntensity = 1.0;

        // Fly camera to it
        const target = selectedMesh.position.clone();
        controls.target.copy(target);

        // Update info panel to be persistent
        const info = document.getElementById('hover-info');
        info.style.borderColor = 'rgba(0,255,136,0.5)';
    }
}

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    // Calculate camera velocity
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    if (dt > 0) {
        const vel = camera.position.distanceTo(lastCameraPosition) / dt;
        // Could display velocity in UI if needed
    }
    lastCameraPosition.copy(camera.position);
    lastTime = now;

    renderer.render(scene, camera);
}

// Start
init();
