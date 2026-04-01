# Alien.js + Mythogen AME Skill

## Overview
Alien.js is an MVC design pattern and render pipeline for Three.js, used to build the Mythogen AME visual demos.

**Live Demo Site:** https://regentribes.github.io/mythogen-demos/

## Repository
- **Mythogen Demos:** https://github.com/regentribes/mythogen-demos
- **Alien.js:** https://github.com/alienkitty/alien.js
- **Alien.js Live:** https://alien.js.org

## Usage Pattern

### Basic Structure
```javascript
import { Color, ColorManagement, Group, HemisphereLight, LinearSRGBColorSpace, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, SphereGeometry, WebGLRenderer, ticker } from '../build/alien.three.js';

class MyDemo extends Group {
    constructor() {
        super();
    }
    
    async initMesh() {
        // Create mesh
        const geo = new SphereGeometry(1, 32, 32);
        const mat = new MeshBasicMaterial({ color: 0x50c878 });
        this.mesh = new Mesh(geo, mat);
        this.add(this.mesh);
    }
    
    update(time) {
        this.mesh.rotation.y += 0.01;
    }
}

// Setup World
class WorldController {
    static renderer = new WebGLRenderer({ antialias: true });
    static camera = new PerspectiveCamera(50, 1, 0.1, 100);
    static camera.position.z = 20;
    static scene = new Scene();
    
    static async init() {
        ColorManagement.enabled = true;
        ColorManagement.outputColorSpace = LinearSRGBColorSpace;
        document.body.appendChild(this.renderer.domElement);
        await this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    static async resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

WorldController.scene.background = new Color(0x0a0a0f);
await WorldController.init();

const demo = new MyDemo();
WorldController.scene.add(demo);
await demo.initMesh();

ticker.add(() => {
    demo.update(Date.now() * 0.001);
    WorldController.renderer.render(WorldController.scene, WorldController.camera);
});
```

### Key Imports
- **Group, Scene, Mesh, Geometry, Material** - Three.js basics
- **Color, ColorManagement, LinearSRGBColorSpace** - Color management
- **ticker** - Animation loop
- **WebGLRenderer, PerspectiveCamera, OrthographicCamera** - Rendering
- **HemisphereLight, DirectionalLight** - Lighting

### HTML Structure
```html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono">
<link rel="stylesheet" href="../assets/css/style.css">

<script type="module">
    import { ... } from '../build/alien.three.js';
    // Your code
</script>
```

## Demo Categories

### AME Core Demos (6)
1. **Living Seed Pattern** - Four Distinctions visualization
2. **Field of Trust** - Hologram trust score
3. **V-Crystal Immune** - 6 archetypal positions
4. **Affinity Mapping** - Values constellation
5. **Concentrix Learning** - Polycentric co-centering
6. **Fractal Growth** - 100 pods of 5

### AME v2 Demos (6) - Using Alien.js
1. **Living Seed v2** - 3D orbital with alien.js
2. **Field of Trust v2** - 3D trust nodes
3. **V-Crystal v2** - 3D crystal system
4. **Affinity Mapping v2** - Dynamic constellation
5. **Concentrix v2** - Concentric vs Concentrix
6. **Fractal v2** - Animated fractal growth

### Alien.js Examples (87+)
- **Transitions:** Page, Canvas, Scene, Scroll, Camera
- **3D Effects:** Abstract Cube, Black Holes, Cyberspace, Fibonacci Sphere, Graph Tracking
- **Physics:** Gravity Balls, Instancing, Picking
- **Shaders:** Bloom, Blur, Fresnel, Hologram, Flowmap, Fluid, Reflection, SSS

## Common Patterns

### Creating a Node/Point
```javascript
const node = new Mesh(
    new SphereGeometry(0.5, 32, 32),
    new MeshBasicMaterial({ 
        color: 0x50c878,
        transparent: true,
        opacity: 0.8
    })
);
node.position.set(x, y, z);
this.add(node);
```

### Animation Loop
```javascript
ticker.add(() => {
    const time = Date.now() * 0.001;
    this.mesh.rotation.y += 0.01;
    this.mesh.scale.setScalar(Math.sin(time) * 0.1 + 1);
    WorldController.renderer.render(WorldController.scene, WorldController.camera);
});
```

### Click Interaction
```javascript
document.addEventListener('click', () => {
    this.active = !this.active;
    this.mesh.material.opacity = this.active ? 1 : 0.5;
});
```

## File Locations
- **Build:** `alien/build/alien.three.js` (4.7MB)
- **Examples:** `alien/examples/three/*.html`
- **Assets:** `alien/examples/assets/` (textures, geometry, gltf)
- **CSS:** `alien/examples/assets/css/style.css`
