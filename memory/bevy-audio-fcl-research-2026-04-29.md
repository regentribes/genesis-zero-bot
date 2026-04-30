# Bevy Audio & FCL Research — 2026-04-29

## Sources Scraped

### Documentation Sites
- **bevy-cheatbook.github.io** — Unofficial Bevy cheat book (outdated, unmaintained since ~0.16)
- **taintedcoders.com** — Rails-style Bevy guides, up to date with Bevy 0.18

### GitHub Repos (Audio Plugins)

| Repo | Description | Bevy Version | License |
|------|-------------|--------------|---------|
| `janhohenheim/bevy_steam_audio` | Steam Audio spatial integration via audionimbus | 0.18 | MIT |
| `CorvusPrudens/bevy_seedling` | Firewheel audio engine integration, powerful DSP, fast | 0.18 | Apache/MIT |
| `NiklasEi/bevy_kira_audio` | Kira audio engine wrapper, tweening, channels | 0.18 | MIT |
| `Nub/bevy_soundscapes` | Layered looping tracks with per-track volume + room reverb | 0.18 | MIT/Apache |
| `BlackPhlox/bevy_midi` | MIDI input/output via midir, virtual piano examples | 0.18 | MIT/Apache |
| `csd4ni3l/soundboard` | Cross-platform soundboard in Rust+Bevy, FFmpeg youtube dl | Linux/Win | MIT |
| `Salzian/bevy_fmod` | FMOD engine integration, spatial audio, Doppler | 0.18 | FMOD attribution required |
| `Boddlnagg/midir` | Cross-platform realtime MIDI processing (standalone lib) | N/A | MIT |
| `sqrew/tunes` | Rust music composition/synthesis library, 100x realtime CPU | N/A | MIT |

## Key Findings

### Audio Plugin Landscape

1. **bevy_seedling** (Firewheel) = most powerful for custom DSP
   - Custom audio processors, effects chains, HRTF spatialization
   - LUFS loudness analysis, resampling, multi-format support
   - Performance-focused, actively developed

2. **bevy_kira_audio** = simplest for basic game audio
   - Tweening, easing, channel mixing, loop points
   - Replaces built-in bevy_audio (which is deprecated pattern)
   - Easy migration path

3. **bevy_soundscapes** = ambient/environmental audio
   - Layered soundscapes, room effect (reverb + lowpass)
   - Dungeon example with 10 tracks + egui controls
   - Good for regen community spaces/nature ambiences

4. **bevy_midi** + **midir** = hardware integration
   - MIDI controllers, Linnstrument support
   - Virtual piano examples (egui + 3D)
   - Direct hook for Ben's microtonal explorations (19-EDO)

5. **bevy_steam_audio** = spatial/VR audio
   - Occlusion, reflection, 3D scene baking
   - Via audionimbus bridge library

6. **bevy_fmod** = professional (proprietary, attribution required)
   - Full FMOD feature set
   - Not suitable for open-source community projects

### tunes Library (Standalone, Not Bevy-specific)
- 150+ preconfigured synths, 100+ drum sounds
- FM synthesis, granular, Karplus-Strong, additive
- 50+ algorithmic sequencers (Markov, L-systems, euclidean, etc.)
- MIDI import/export, live coding hot-reload
- GPU acceleration via wgpu
- **Strong candidate for algorithmic composition engine** backing FCL

### FCL-relevant Patterns

1. **ECS Audio Entities** — all plugins use Bevy's ECS to spawn audio as entities
   with position, spatial parameters, effects components

2. **Custom Processors** — bevy_seedling allows building custom DSP nodes
   This is where the Schrödinger Bridge metric could be implemented as an
   audio processor that modifies the signal path based on the multi-objective metric

3. **MIDI → Spatial Control** — bevy_midi maps controller input to entity parameters
   Direct path for LinnStrument → FCL formation control

4. **tunes library** has algorithmic composition primitives (Markov, L-systems)
   that could serve as the "simple transformations" leg of the Schrödinger Bridge metric

## Unique Solution Architecture (FCL context)

```
Formation (LinnStrument/MIDI) → bevy_midi (input)
                               → bevy_seedling (audio engine)
                               → tunes (algorithmic composition)
                               → Custom Schrödinger Bridge processor
                               → bevy_soundscapes (output/scapes)
                               → FCL spatial traversal visualization (Bevy 3D)
```

The unique angle: **treat the formation as an instrument + the composition
as the traversal, both controlled by the multi-objective metric from Ben's design.**

## Notes
- bevy-cheatbook is outdated — use taintedcoders.com + official Bevy docs
- bevy_seedling requires disabling bevy_audio feature
- All Rust-native (no C++ dependencies except FMOD which requires attribution)