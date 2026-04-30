# Brain Communication Specs: Direct Neural/Brain Systems

## 1. Current BCI Technology — Invasive vs Non-Invasive

| Type | Examples | Signal Quality | Safety | Best For |
|------|----------|----------------|--------|----------|
| **Invasive** | Neuralink N1, Synchron Stentrode, Paradromics Connexus | High (direct neural access) | Surgical risk | Medical trials, paralysis restoration |
| **Non-Invasive** | EEG, fNIRS, wearable MEG | Lower (signal attenuated through scalp) | No surgery | Research, gaming, basic control |

**2024–2025 milestones:**
- Neuralink PRIME trial (Jan 2024): quadriplegic patient controlled cursor + played games via thought
- Synchron iPad demo (Aug 2025): thought-based tablet control
- Paradromics Connexus: first human implant for ALS/stroke speech restoration

---

## 2. Technical Specs — Bandwidth, Latency, Resolution

### Information Transfer Rate (ITR)

| System | Bandwidth | Notes |
|--------|-----------|-------|
| EEG (non-invasive) | 4–50 bps | Up to 63 bps theoretical max for 40-class selection |
| Neuralink N1 | ~4.61 bps (initial) | Record for point-and-click cursor control |
| Paradromics Connexus | 200+ bps | SONIC benchmark; low latency for clinical use |
| Brown Wireless Device | 48 Mbps (raw) | 200 electrodes, wireless, 36hr battery |

### Latency
- **Non-invasive EEG**: 50–200ms (signal processing + classification)
- **Invasive intracortical**: <20ms (direct neural capture)
- **End-to-end B2B (EEG→internet→TMS)**: ~1–2 seconds typical

### Resolution
- **EEG**: ~10–20 mm spatial (limited by skull/scalp)
- **Intracortical**: ~1 mm or better (individual neuron access)
- **ECoG (subdural)**: ~1–5 mm (between EEG and intracortical)

---

## 3. Protocols — Neural Encoding & Signal Processing

### Encoding Pipeline
1. **Signal acquisition** — electrodes capture neural activity
2. **Preprocessing** — filtering (bandpass), artifact rejection (eye movement, muscle)
3. **Feature extraction** — spectral power (alpha, beta, gamma), event-related potentials (P300, SSVEP)
4. **Classification** — machine learning models (LDA, SVM, deep nets) map features to commands
5. **Translation** — decoded intent → digital output (cursor, text, robotic arm)

### Common Protocols
- **SSVEP** (steady-state visual evoked): external visual flicker, high ITR (~50 bps)
- **Motor imagery**: imagined movement (hand, foot), mu/rhythm modulation
- **P300**: oddball paradigm, slow but reliable for selection menus
- **fNIRS**: near-infrared spectroscopy, measures hemodynamic response

---

## 4. Methods — EEG, fMRI, ECoG, Neuralink, Stentrodes

| Method | Invasiveness | Spatial Res. | Temporal Res. | Channel Count |
|--------|--------------|--------------|--------------|---------------|
| **EEG** | Non-invasive | 10–20 mm | ~1 ms | 32–256 channels |
| **fMRI** | Non-invasive | 1–3 mm | ~1–2 sec | Whole-brain |
| **ECoG** | Invasive (subdural) | 1–5 mm | ~1 ms | 100–200 contacts |
| **Neuralink** | Invasive (intracortical) | <1 mm | <1 ms | 1,024 electrodes |
| **Stentrode** | Invasive (blood vessel) | ~5 mm | ~1 ms | Up to 128 |

### Neuralink N1
- 1,024 electrodes on ultra-thin threads
- Robotic surgical implantation
- Wireless data transmission
- First human patient: Jan 2024 (PRIME trial)

### Stentrode (Synchron)
- Inserted via jugular vein → motor cortex blood vessel
- No open-brain surgery required
- iPad control demo: Aug 2025

---

## 5. Information Density — Bits per Second, Channel Capacity

### Theoretical vs Practical
| Metric | Value |
|--------|-------|
| Human conscious output | ~10 bps |
| Speech | 40 bps |
| Sensory input (visual) | ~1 billion bps |
| Motor control needs (full arm) | ~465 bps |
| Practical BCI (EEG) | 4–50 bps |
| High-bandwidth implant | 200+ bps |
| Raw neural data (Brown device) | 48 Mbps |

### Channel Capacity
- **Single neuron**: ~100 bits/sec theoretical
- **1,024-electrode array (Neuralink)**: potentially tens of kbps raw
- **Decoded command rate**: limited by classification accuracy, typically 10–200 bps

---

## 6. Security — Neural Security Concerns

### Risks
- **Neural data interception**: wireless signals from implants could be intercepted
- **Brain hacking**: malicious code targeting BCI firmware
- **Thought privacy**: decoded neural signals may reveal private mental states
- **Signal spoofing**: injecting false signals into neural implants

### Protections (emerging)
- End-to-end encryption for neural data streams
- Biometric neural signatures for device authentication
- Faraday cage clothing for blocking external signals (extreme cases)
- Neural data rights frameworks (emerging legislation)

### Current Status
- No standardized neural security protocols yet
- FDA guidelines for medical BCI safety, not neural security
- Research ongoing on neural watermarking and authentication

---

## 7. Future Roadmap — Brain-to-Brain Communication

### What Exists Today
| Project | Year | Method | Result |
|---------|------|--------|--------|
| Rao et al. | 2013–14 | EEG → internet → TMS | Cooperative game, 43% success |
| India-France | 2014 | EEG → binary → TMS | Transmitted words "hola"/"ciao" |
| BrainNet | 2019 | Multi-EEG → TMS | 3-person Tetris collaboration |
| Human-rat | 2018 | Wireless BBI | Human guided rat through maze |

### Path to B2B Communication
1. **Short-term (2025–2030)**: Improved BCI decoding, more electrodes, better ML
2. **Mid-term (2030–2040)**: High-bandwidth implants enable rich motor/sensory feedback
3. **Long-term (2040+)**: Distributed neural networks, group consciousness experiments, fully bidirectional brain meshes

### Challenges
- **Encoding complexity**: Current systems only decode simple motor commands, not abstract thought
- **Safety**: Long-term implant stability, infection risk, biocompatibility
- **Ethics**: Consent, identity, cognitive liberty
- **No standard protocols**: Each B2B experiment is custom-built

### Vision
True brain-to-brain communication requires:
- High-channel-count bidirectional implants (read + write)
- Neural encoding standards for semantic content (not just motor commands)
- Low-latency, secure transmission infrastructure
- Consensus on neural ethics and privacy frameworks

---

## Summary

| Category | Current State | Near-Term (2025–30) | Long-Term (2040+) |
|----------|---------------|---------------------|-------------------|
| Bandwidth | 4–200 bps | 200–500 bps | 1,000+ bps |
| Invasiveness | Both | More invasive options | Bidirectional implants |
| B2B | Basic demos (motor only) | Richer multi-person | Full semantic transfer |
| Security | Ad hoc | Standards emerging | Built-in |

This field moves fast. Specs updated as of March 2025.
