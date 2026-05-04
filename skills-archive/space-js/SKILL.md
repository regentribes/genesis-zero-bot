# Space.js + Alien.js Skill

Minimal monospace UI library for sci-fi HUDs + Three.js MVC framework.

## Repos

- **Space.js:** https://github.com/alienkitty/space.js
- **Alien.js:** https://github.com/alienkitty/alien.js
- **Live Demos:** https://space.js.org | https://alien.js.org

## Local Copies

Located in `~/.openclaw/workspace-genesis/cloned/`:
- `space.js/` — main library
- `space.js.wiki/` — docs
- `alien.js/` — Three.js MVC framework
- `alien.js.wiki/` — wiki docs

## Space.js Features

### Panel Components
```js
import { Panel, PanelItem } from '@alienkitty/space.js';

const panel = new Panel();
const item = new PanelItem({
    type: 'color' // or: spacer, divider, link, thumbnail, graph, meter, list, slider, toggle, content
});
panel.add(item);
panel.animateIn();
document.body.appendChild(panel.element);
```

### Graph & Meter
```js
import { Graph, RadialGraph, Meter } from '@alienkitty/space.js';

const graph = new Graph({ value: [...], precision: 2 });
const radial = new RadialGraph({ value: [...], precision: 2 });
const meter = new Meter({ value: Math.random(), precision: 2 });
```

### HUD UI
```js
import { UI } from '@alienkitty/space.js';

const ui = new UI({
    fps: true,
    header: true,
    footer: true,
    menu: true,
    details: true
});
```

### Tween Engine
```js
import { ticker, tween } from '@alienkitty/space.js';

ticker.start();
tween(data, { radius: 24, spring: 1.2, damping: 0.4 }, 1000, 'easeOutElastic');
```

### Web Audio
```js
import { WebAudio, BufferLoader } from '@alienkitty/space.js';

WebAudio.init({ sampleRate: 48000 });
const gong = WebAudio.get('gong');
gong.play();
```

## Alien.js Features

### MVC Patterns (extends Three.js)
```js
import { Group, Mesh, SphereGeometry, MeshBasicMaterial } from '../build/alien.three.js';

class MyDemo extends Group {
    async initMesh() {
        this.mesh = new Mesh(
            new SphereGeometry(1, 32, 32),
            new MeshBasicMaterial({ color: 0x50c878 })
        );
        this.add(this.mesh);
    }
    
    update(time) {
        this.mesh.rotation.y += 0.01;
    }
}
```

### Transitions
```js
// Page, Canvas, Scene, Scroll, Camera transitions
import { SceneTransition } from '@alienkitty/alien.js/three';
```

### Materials & Shaders
```js
// Wobble, Bloom, Blur, Fresnel, Hologram, Flowmap, Fluid
import { Wobble, HologramMaterial } from '@alienkitty/alien.js/three';
```

### Physics
```js
import { OimoPhysics } from '@alienkitty/alien.js/three/oimophysics';
```

## Examples

### Space.js (space.js.org/examples/)
- **UI:** logo, alienkitty, ui, components, progress, meter, panel, graph, radial_graph, fps
- **3D:** three/3d_lights, three/3d_materials, three/3d_radial_graph
- **Audio:** audio_gong, audio_stream, audio_rhythm

### Alien.js (alien.js.org/examples/)
- **Transitions:** page, canvas, scene, scroll, camera
- **3D:** ripple, cubemap, polyhedron, abstract cube, wobble
- **Physics:** gravity balls, instancing, picking
- **Shaders:** bloom, blur, fresnel, hologram, flowmap, fluid

## Integration: Single Canvas

Both libraries work together on one Three.js canvas:

```js
import * as THREE from 'three';
import { Group, ticker, UI, Details, Panel } from '@alienkitty/space.js';
import { Group as AlienGroup } from '@alienkitty/alien.js/three';

// Shared Three.js renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);

// Add space.js UI overlay
const ui = new UI({ fps: true, details: true });
document.body.appendChild(ui.element);

// Add alien.js 3D scene
const alienScene = new AlienGroup();
await alienScene.initMesh();
scene.add(alienScene);

// Shared animation loop
ticker.start();
ticker.add(() => {
    alienScene.update(Date.now() * 0.001);
    renderer.render(scene, camera);
});
```

Key: Space.js handles UI/HUD overlay, Alien.js handles 3D scene logic. Both feed into the same Three.js renderer.

## Trigger Phrases

- "space.js"
- "alien.js"
- "sci-fi UI"
- "3D HUD"
- "Three.js framework"
- "MVC for Three.js"