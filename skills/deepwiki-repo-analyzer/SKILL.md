# deepwiki-repo-analyzer

Analyzes software repositories by fetching documentation from DeepWiki and converting to markdown.

## Trigger Phrases

- "analyze this repo"
- "deepwiki"
- "fetch repo docs"
- "analyze github repo"
- "get repo documentation"
- "repo analysis"

## What It Does

1. Takes a GitHub or DeepWiki URL (or just `owner/repo`)
2. Converts GitHub URLs to DeepWiki format (swap `github.com` → `deepwiki.com`)
3. Uses `dw2md` to fetch and convert repository documentation
4. Saves output to `~/workspace-genesis/deepwiki_{repo_name}.md`
5. Returns the file path and a summary

## Requirements

- `dw2md` must be installed: `cargo binstall -y dw2md`
- `$HOME/.cargo/bin` in PATH

## Usage

### Direct URL:
```
analyze https://github.com/regentribes/genesis-zero-bot
```

### Owner/Repo format:
```
analyze regentribes/genesis-zero-bot
```

### DeepWiki format:
```
analyze https://deepwiki.com/regentribes/genesis-zero-bot
```

## Output

- Saves markdown to: `~/workspace-genesis/deepwiki_{owner}_{repo}.md`
- Returns: file path, line count, first 1000 chars preview

## Cloned Repos (Local)

Pre-cloned repos reside in `~/.openclaw/workspace-genesis/cloned/`:

### Space.js
- **Repo:** https://github.com/alienkitty/space.js
- **Location:** `cloned/space.js/`
- **Src:** panels, ui, graph, meter, tween, audio, loaders, math, utils
- **Examples:**
  - UI: progress, meter, panel, radial_graph, graph, fps, audio_*
  - 3D: three/3d_lights, three/3d_materials, three/3d_radial_graph
  - Other: cyberspace, mars, magnetic, test_*

### Alien.js (Three.js MVC)
- **Repo:** https://github.com/alienkitty/alien.js
- **Location:** `cloned/alien.js/`
- **Src:** three (materials, shaders, physics), ogl, oimophysics
- **Examples:**
  - Transitions: page, canvas, scene, scroll, camera
  - 3D Effects: Abstract Cube, Black Holes, Cyberspace, Fibonacci Sphere
  - Physics: Gravity Balls, Instancing, Picking
  - Shaders: Bloom, Blur, Fresnel, Hologram, Flowmap, Fluid

### Wiki Docs
- `cloned/space.js.wiki/` — Space.js wiki (Home, Tween)
- `cloned/alien.js.wiki/` — Alien.js wiki

## Capabilities Summary

### Space.js (UI + 3D)
- **Panel components:** Panel, PanelItem, ColorPicker, List, Slider, Toggle
- **Graph components:** Graph, RadialGraph, Meter
- **UI components:** UI (HUD), Progress, Details, FPS
- **Tween engine:** spring physics, easing functions
- **Audio:** WebAudio, BufferLoader, Audio streams
- **Three.js integration:** EnvironmentTextureLoader, material UI panels

### Alien.js (3D Framework)
- **Materials:** Wobble, Custom shaders
- **Transitions:** Page, Canvas, Scene, Scroll, Camera transitions
- **Physics:** OimoPhysics integration
- **OGL:** FXAAProgram and OGL shaders