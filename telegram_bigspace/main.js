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
let labelSprites = [];
let sceneData = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let hoveredMesh = null;
let selectedMesh = null;
let labelThreshold = 80; // Max distance to show label

// Camera state
let lastCameraPosition = new THREE.Vector3();
let lastTime = performance.now();

async function loadScene() {
    const response = await fetch('/big_space_scene.json');
    if (!response.ok) throw new Error('Failed to load scene data');
    return response.json();
}

function createLabel(text, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;

    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.roundRect(0, 0, canvas.width, canvas.height, 8);
    ctx.fill();

    // Border with author color
    ctx.strokeStyle = '#' + color.toString(16).padStart(6, '0');
    ctx.lineWidth = 2;
    ctx.roundRect(1, 1, canvas.width - 2, canvas.height - 2, 8);
    ctx.stroke();

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px JetBrains Mono, Fira Code, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Truncate if needed
    let displayText = text;
    while (ctx.measureText(displayText).width > 230 && displayText.length > 3) {
        displayText = displayText.slice(0, -4) + '...';
    }
    ctx.fillText(displayText, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: false,
        scale: new THREE.Vector3(40, 10, 1)
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    return sprite;
}

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
    camera.position.set(0, 0, 300);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.PAN
    };
    controls.minDistance = 5;
    controls.maxDistance = 2000;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(100, 100, 50);
    scene.add(directionalLight);

    window.addEventListener('resize', onWindowResize);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

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

    const times = messages.map(m => m.unixtime);
    const timeMin = Math.min(...times);
    const timeMax = Math.max(...times);
    const timeRange = timeMax - timeMin || 1;

    const sphereGeo = new THREE.SphereGeometry(0.5, 12, 12);

    // Build position lookup for reply lines
    const posById = new Map();

    // Create messages
    messages.forEach((msg) => {
        const t = (msg.unixtime - timeMin) / timeRange;
        const x = (t - 0.5) * 1000;

        const authorIndex = authors.findIndex(a => a.name === msg.author);
        const y = (authorIndex - authors.length / 2) * 8;

        const z = (msg.text_length % 100) - 50;

        const color = AUTHOR_COLORS[msg.author] || 0xffffff;
        const material = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.7,
            metalness: 0.3,
            emissive: color,
            emissiveIntensity: msg.link_count > 0 ? 0.2 : 0.05,
        });

        const scale = 0.3 + Math.min(msg.link_count * 0.12, 1.2);

        const mesh = new THREE.Mesh(sphereGeo, material);
        mesh.position.set(x, y, z);
        mesh.scale.setScalar(scale);
        mesh.userData = { msg, author: msg.author, color };

        scene.add(mesh);
        messageMeshes.push(mesh);
        posById.set(msg.msg_id, mesh.position);
    });

    // Reply chain lines
    const maxLines = Math.min(replyChains.length, 800);
    for (let i = 0; i < maxLines; i++) {
        const reply = replyChains[i];
        const from = posById.get(reply.from);
        const to = posById.get(reply.to);

        if (from && to) {
            const authorColor = AUTHOR_COLORS[reply.author] || 0xffffff;
            const lineMat = new THREE.LineBasicMaterial({
                color: authorColor,
                transparent: true,
                opacity: 0.08
            });
            const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
            const line = new THREE.Line(geometry, lineMat);
            scene.add(line);
        }
    }

    // Create label sprites (hidden by default, shown when close)
    messages.forEach((msg) => {
        const color = AUTHOR_COLORS[msg.author] || 0xffffff;
        // Show first ~100 chars of text as label
        const labelText = msg.text_preview.substring(0, 40).replace(/\n/g, ' ') + (msg.text_preview.length > 40 ? '...' : '');
        const sprite = createLabel(labelText, color);
        sprite.visible = false;
        sprite.userData = { msgId: msg.msg_id };
        scene.add(sprite);
        labelSprites.push(sprite);
    });

    // Position labels at message positions
    messageMeshes.forEach((mesh, i) => {
        labelSprites[i].position.copy(mesh.position);
        labelSprites[i].position.y += 3; // Offset above sphere
    });

    // Axis arrows
    addAxisHelpers(timeMin, timeMax, authors.length);
}

function addAxisHelpers(timeMin, timeMax, numAuthors) {
    // X axis (time) arrow
    const xArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(-550, -numAuthors * 4, -60),
        900, 0x444444, 20, 10
    );
    scene.add(xArrow);

    // X label
    const xLabel = createLabel2D('TIME (Feb → Apr)', '#666666');
    xLabel.position.set(400, -numAuthors * 4 - 20, -60);
    scene.add(xLabel);

    // Y axis (author) arrow
    const yArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(-570, -numAuthors * 4, -60),
        numAuthors * 8 + 20, 0x444444, 20, 10
    );
    scene.add(yArrow);

    // Y label
    const yLabel = createLabel2D('AUTHOR', '#666666');
    yLabel.position.set(-570, 0, -60);
    scene.add(yLabel);

    // Z axis arrow
    const zArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(-570, -numAuthors * 4, -100),
        80, 0x333333, 15, 8
    );
    scene.add(zArrow);
}

function createLabel2D(text, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 32;
    ctx.fillStyle = 'transparent';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.font = '16px JetBrains Mono, Fira Code, monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 0, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: false
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(80, 10, 1);
    return sprite;
}

function updateUI(data) {
    document.getElementById('topic-name').textContent = data.meta.name;
    document.getElementById('msg-count').textContent = data.messages.length;
    document.getElementById('author-count').textContent = data.authors.length;
    document.getElementById('link-count').textContent = data.links.length;

    const legend = document.getElementById('legend');
    legend.innerHTML = '';
    data.authors.forEach(author => {
        const color = AUTHOR_COLORS[author.name] || 0xffffff;
        const hexColor = '#' + color.toString(16).padStart(6, '0');
        legend.innerHTML += `<div style="margin:3px 0">
            <span style="background:${hexColor};display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px"></span>
            ${author.name} (${author.message_count})
        </div>`;
    });
}

function updateLabels() {
    const camPos = camera.position;

    labelSprites.forEach((sprite, i) => {
        const mesh = messageMeshes[i];
        const distance = mesh.position.distanceTo(camPos);

        if (distance < labelThreshold) {
            sprite.visible = true;
            // Scale label based on distance (closer = larger)
            const scale = Math.max(0.5, 1 - distance / labelThreshold);
            sprite.scale.set(40 * scale, 10 * scale, 1);
            // Always face camera
            sprite.lookAt(camPos);
        } else {
            sprite.visible = false;
        }
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

    if (hoveredMesh && hoveredMesh !== selectedMesh) {
        hoveredMesh.material.emissiveIntensity = hoveredMesh.userData.msg.link_count > 0 ? 0.2 : 0.05;
    }

    if (intersects.length > 0) {
        hoveredMesh = intersects[0].object;
        hoveredMesh.material.emissiveIntensity = 0.5;
        document.body.style.cursor = 'pointer';

        const info = document.getElementById('hover-info');
        const msg = hoveredMesh.userData.msg;
        const color = hoveredMesh.userData.color;
        const hexColor = '#' + color.toString(16).padStart(6, '0');

        info.querySelector('.author-dot').style.background = hexColor;
        info.querySelector('.author-name').textContent = msg.author;
        info.querySelector('.date').textContent = msg.date;
        info.querySelector('.text').textContent = msg.text_preview.substring(0, 200).replace(/\n/g, ' ') + (msg.text_preview.length > 200 ? '...' : '');
        info.querySelector('.links').textContent = msg.link_count > 0 ? `🔗 ${msg.link_count} link(s)` : '';
        info.style.display = 'block';
    } else {
        hoveredMesh = null;
        document.getElementById('hover-info').style.display = 'none';
        document.body.style.cursor = 'default';
    }
}

function onClick(event) {
    if (hoveredMesh) {
        if (selectedMesh) {
            selectedMesh.material.emissiveIntensity = selectedMesh.userData.msg.link_count > 0 ? 0.2 : 0.05;
        }
        selectedMesh = hoveredMesh;
        selectedMesh.material.emissiveIntensity = 1.0;

        const target = selectedMesh.position.clone();
        controls.target.copy(target);

        const info = document.getElementById('hover-info');
        info.style.borderColor = 'rgba(0,255,136,0.5)';
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    updateLabels();
    renderer.render(scene, camera);
}

init();
