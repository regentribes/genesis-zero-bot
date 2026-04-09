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
let authorMeshes = [];
let labelSprites = [];
let sceneData = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let hoveredMesh = null;
let selectedMesh = null;
let labelThreshold = 120;

let lastCameraPosition = new THREE.Vector3();
let lastTime = performance.now();

async function loadScene() {
    const response = await fetch('/big_space_scene_v2.json');
    if (!response.ok) throw new Error('Failed to load scene data');
    return response.json();
}

function createLabel(text, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 320;
    canvas.height = 64;

    ctx.fillStyle = 'rgba(5, 5, 5, 0.88)';
    ctx.roundRect(0, 0, canvas.width, canvas.height, 6);
    ctx.fill();

    ctx.strokeStyle = '#' + parseInt(color).toString(16).padStart(6, '0');
    ctx.lineWidth = 2;
    ctx.roundRect(1, 1, canvas.width - 2, canvas.height - 2, 6);
    ctx.stroke();

    ctx.fillStyle = '#cccccc';
    ctx.font = '13px JetBrains Mono, Fira Code, monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    // Word wrap
    const words = text.split(' ');
    let line = '';
    let y = 8;
    const maxWidth = canvas.width - 16;
    for (const word of words) {
        const test = line + word + ' ';
        if (ctx.measureText(test).width > maxWidth && line !== '') {
            ctx.fillText(line.trim(), 8, y);
            line = word + ' ';
            y += 16;
            if (y > canvas.height - 20) { line += '...'; break; }
        } else {
            line = test;
        }
    }
    ctx.fillText(line.trim(), 8, y);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(50, 10, 1);
    return sprite;
}

function createAuthorLabel(name, color, count) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 48;

    ctx.fillStyle = 'rgba(5, 5, 5, 0.9)';
    ctx.roundRect(0, 0, canvas.width, canvas.height, 6);
    ctx.fill();

    ctx.strokeStyle = '#' + parseInt(color).toString(16).padStart(6, '0');
    ctx.lineWidth = 3;
    ctx.roundRect(1, 1, canvas.width - 2, canvas.height - 2, 6);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name.length > 18 ? name.substring(0, 16) + '…' : name, canvas.width / 2, canvas.height / 2 - 7);
    ctx.font = '11px JetBrains Mono, monospace';
    ctx.fillStyle = '#777777';
    ctx.fillText(`${count} msgs`, canvas.width / 2, canvas.height / 2 + 10);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(60, 12, 1);
    return sprite;
}

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100000);
    camera.position.set(0, 0, 500);

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
    controls.minDistance = 10;
    controls.maxDistance = 2000;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(200, 200, 100);
    scene.add(dirLight);

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
        console.error('Error:', err);
        document.getElementById('loading').textContent = 'Error: ' + err.message;
    });
}

function buildScene(data) {
    const messages = data.messages;
    const authors = data.authors;
    const clusters = data.clusters;
    const replyEdges = data.reply_edges;

    const sphereGeo = new THREE.SphereGeometry(0.5, 10, 10);

    // Build position lookup for edges
    const posById = new Map();

    // Author nodes (large, labeled spheres on X axis)
    authors.forEach(author => {
        const color = AUTHOR_COLORS[author.name] || 0xffffff;
        const mat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.4,
            metalness: 0.6,
            emissive: color,
            emissiveIntensity: 0.3,
        });
        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(1.0, 16, 16),
            mat
        );
        mesh.position.set(author.x, 0, 0);
        mesh.userData = { type: 'author', author, color };
        scene.add(mesh);
        authorMeshes.push(mesh);

        // Author label
        const label = createAuthorLabel(author.name, color, author.message_count);
        label.position.set(author.x, 15, 0);
        label.lookAt(camera.position);
        scene.add(label);
        labelSprites.push(label);

        posById['author_' + author.name] = mesh.position;
    });

    // Cluster nodes (subtle, themed by domain)
    clusters.forEach(cluster => {
        // Small indicator sphere for cluster theme
        const domainColor = hashColor(cluster.theme);
        const mat = new THREE.MeshStandardMaterial({
            color: domainColor,
            roughness: 0.8,
            metalness: 0.2,
            transparent: true,
            opacity: 0.4,
        });
        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 8, 8),
            mat
        );
        mesh.position.set(0, cluster.y, 0);
        mesh.userData = { type: 'cluster', cluster };
        mesh.visible = false;  // Hidden, just for reference
        scene.add(mesh);
    });

    // Messages (spheres on X=author, Y=cluster, Z=time)
    messages.forEach(msg => {
        const color = AUTHOR_COLORS[msg.author] || 0xffffff;
        const mat = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.7,
            metalness: 0.3,
            emissive: color,
            emissiveIntensity: msg.link_count > 0 ? 0.2 : 0.05,
        });

        const scale = 0.25 + Math.min(msg.link_count * 0.08, 0.8);
        const mesh = new THREE.Mesh(sphereGeo, mat);
        mesh.position.set(msg.author_x, msg.y, msg.z);
        mesh.scale.setScalar(scale);
        mesh.userData = { type: 'message', msg, color };

        scene.add(mesh);
        messageMeshes.push(mesh);
        posById[msg.msg_id] = mesh.position;
    });

    // Author-to-message edges (vertical lines from author to each message)
    const authorMsgEdges = new Map();  // author -> [msg_ids]
    messages.forEach(msg => {
        if (!authorMsgEdges[msg.author]) authorMsgEdges[msg.author] = [];
        authorMsgEdges[msg.author].push(msg);
    });
    authorMsgEdges.forEach((msgs, author) => {
        const authorPos = posById['author_' + author];
        const color = AUTHOR_COLORS[author] || 0xffffff;
        msgs.forEach(msg => {
            const msgPos = posById[msg.msg_id];
            if (authorPos && msgPos) {
                const lineMat = new THREE.LineBasicMaterial({
                    color: color, transparent: true, opacity: 0.06
                });
                const pts = [authorPos.clone(), msgPos.clone()];
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                scene.add(new THREE.Line(geo, lineMat));
            }
        });
    });

    // Reply edges (message to reply_to message)
    const maxReplies = Math.min(replyEdges.length, 800);
    for (let i = 0; i < maxReplies; i++) {
        const edge = replyEdges[i];
        const from = posById[edge.from_id];
        const to = posById[edge.to_id];
        if (from && to) {
            const color = AUTHOR_COLORS[edge.author] || 0xffffff;
            const lineMat = new THREE.LineBasicMaterial({
                color, transparent: true, opacity: 0.12
            });
            const geo = new THREE.BufferGeometry().setFromPoints([from, to]);
            scene.add(new THREE.Line(geo, lineMat));
        }
    }

    // Message labels (only nearby)
    messages.forEach(msg => {
        const color = AUTHOR_COLORS[msg.author] || 0xffffff;
        const text = msg.text || '';
        const labelText = text.substring(0, 60).replace(/\n/g, ' ').trim() + (text.length > 60 ? '…' : '');
        
        if (labelText && labelText.length > 3) {
            const sprite = createLabel(labelText, color);
            const msgPos = posById[msg.msg_id];
            sprite.position.copy(msgPos);
            sprite.position.y += 2;
            sprite.visible = false;
            sprite.userData = { msgId: msg.msg_id };
            scene.add(sprite);
            labelSprites.push(sprite);
        }
    });

    // Axis helpers
    addAxes();
}

function addAxes() {
    const numAuthors = sceneData.authors.length;
    const spread = numAuthors * 100;

    // X axis label (AUTHOR)
    const xLabel = makeAxisLabel('AUTHOR (X)', '#555555');
    xLabel.position.set(spread + 50, 0, 0);
    xLabel.scale.set(80, 15, 1);
    scene.add(xLabel);

    // Y axis label (THEME CLUSTER)
    const yLabel = makeAxisLabel('THEME CLUSTER (Y)', '#555555');
    yLabel.position.set(-spread - 50, 0, 0);
    yLabel.scale.set(80, 15, 1);
    scene.add(yLabel);

    // Z axis label (TIME)
    const zLabel = makeAxisLabel('TIME (Z)', '#555555');
    zLabel.position.set(0, -60, 300);
    zLabel.scale.set(60, 15, 1);
    scene.add(zLabel);

    // Time direction arrow
    const arrowDir = new THREE.ArrowHelper(
        new THREE.Vector3(0, 0, -1),  // Recent = closer (smaller Z)
        new THREE.Vector3(-spread, -50, 250),
        200, 0x333333, 15, 8
    );
    scene.add(arrowDir);

    const arrowLabel = makeAxisLabel('RECENT', '#444444');
    arrowLabel.position.set(-spread, -50, 100);
    arrowLabel.scale.set(40, 12, 1);
    scene.add(arrowLabel);

    const arrowLabel2 = makeAxisLabel('OLD', '#444444');
    arrowLabel2.position.set(-spread, -50, 450);
    arrowLabel2.scale.set(30, 12, 1);
    scene.add(arrowLabel2);
}

function makeAxisLabel(text, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256; canvas.height = 32;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.font = 'bold 16px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    return sprite;
}

function hashColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash);
    return (h & 0x00FFFFFF);
}

function updateLabels() {
    const camPos = camera.position;
    labelSprites.forEach(sprite => {
        if (sprite.userData.msgId) {
            // Message labels
            const dist = sprite.position.distanceTo(camPos);
            if (dist < labelThreshold) {
                sprite.visible = true;
                const scale = Math.max(0.4, 1.2 - dist / labelThreshold);
                sprite.scale.set(50 * scale, 10 * scale, 1);
            } else {
                sprite.visible = false;
            }
        }
        sprite.lookAt(camPos);
    });
}

function updateUI(data) {
    document.getElementById('topic-name').textContent = data.meta.name;
    document.getElementById('msg-count').textContent = data.meta.total_messages;
    document.getElementById('author-count').textContent = data.meta.total_authors;
    document.getElementById('link-count').textContent = data.links.length;

    const legend = document.getElementById('legend');
    legend.innerHTML = '';
    data.authors.forEach(a => {
        const c = AUTHOR_COLORS[a.name] || 0xffffff;
        const hex = '#' + c.toString(16).padStart(6, '0');
        legend.innerHTML += `<div class="legend-item">
            <span class="legend-dot" style="background:${hex}"></span>
            ${a.name} (${a.message_count})
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

    const allMeshes = [...messageMeshes, ...authorMeshes];
    const intersects = raycaster.intersectObjects(allMeshes);

    if (hoveredMesh && hoveredMesh !== selectedMesh) {
        const base = hoveredMesh.userData.msg?.link_count > 0 ? 0.2 : 0.05;
        hoveredMesh.material.emissiveIntensity = hoveredMesh.userData.type === 'author' ? 0.3 : base;
    }

    if (intersects.length > 0) {
        hoveredMesh = intersects[0].object;
        hoveredMesh.material.emissiveIntensity = 0.6;
        document.body.style.cursor = 'pointer';

        const info = document.getElementById('hover-info');
        const ud = hoveredMesh.userData;

        if (ud.type === 'author') {
            info.querySelector('.author-dot').style.background = '#' + ud.color.toString(16).padStart(6, '0');
            info.querySelector('.author-name').textContent = ud.author.name;
            info.querySelector('.date').textContent = `${ud.author.message_count} messages in topic`;
            info.querySelector('.text').textContent = `X=${ud.author.x.toFixed(0)}, Author node position`;
            info.querySelector('.links').textContent = '';
        } else {
            const msg = ud.msg;
            info.querySelector('.author-dot').style.background = '#' + ud.color.toString(16).padStart(6, '0');
            info.querySelector('.author-name').textContent = msg.author;
            info.querySelector('.date').textContent = `${msg.date} · cluster: ${msg.theme}`;
            info.querySelector('.text').textContent = msg.text.substring(0, 250);
            info.querySelector('.links').textContent = msg.link_count > 0 ? `🔗 ${msg.links.join(', ')}` : '';
        }
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
            const base = selectedMesh.userData.msg?.link_count > 0 ? 0.2 : 0.05;
            selectedMesh.material.emissiveIntensity = selectedMesh.userData.type === 'author' ? 0.3 : base;
        }
        selectedMesh = hoveredMesh;
        selectedMesh.material.emissiveIntensity = 1.0;
        controls.target.copy(selectedMesh.position);
        document.getElementById('hover-info').style.borderColor = 'rgba(0,255,136,0.5)';
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    updateLabels();
    renderer.render(scene, camera);
}

init();
