# SolarPunk 26 — Privacy Agent Generator

> *"I shine. You shine. We shine."*

Living mythology within the [Supercompute](https://supercompute.io) ecosystem. Afrofuturist + Solarpunk character collection built on the premise that **stories are humanity's most durable technology**.

---

## Quick Start

Open `index.html` in any browser — no server needed.

```
Controls:
  SPACE     → randomize seed
  S         → save PNG (512×512, IPFS ready)
  R         → regenerate

UI:
  Class     → 8 classes (Tech, Bio, Wildlife, Musical, Achievement, Skulls, Explorer, Fiscal)
  Traits    → HUD Visor, Companion, Wrist Device — toggle on/off
```

---

## The 8 Classes

| Class | Motto | Focus |
|-------|-------|-------|
| **Tech** | Gizmo love | AI, cyber implants, tools |
| **Bio** | Plant love | Plant harmony, living elements |
| **Wildlife** | Animal love | Animal coexistence |
| **Musical** | Revenga opus | Rhythm, expression |
| **Achievement** | Achievements today | Books, badges |
| **Skulls** | Skulls it is | Protection, guarding |
| **Explorer** | I can do it all | Full range exploration |
| **Fiscal** | Break the banks | Economic rebellion |

**Jimmi Legendaries** — Baby → Young → Adult → Ole → Tombstone (1/1)

---

## Privacy Agents

All SolarPunks characters are **Privacy Agents**: no masks, no helmets, face always visible. The world they inhabit is one where people show up as themselves.

---

## Visual System

**Style:** Solar Isometric — EBOY TiliX 2:1 grid + warm functional clothing + BOZGO-quality linework

**Rendering:**
- TiliX 7×7 Dual Pixel grid (EBOY system)
- 2:1 isometric projection
- 15-cell character height (head: 33-40%)
- Top-left lighting
- 12-16 color limit per composition

**Output:** 512×512 PNG — IPFS ready for NFT minting

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Generative engine | p5.js |
| Image generation (reference) | FAL AI (img2img) |
| NFT minting | Lens Chain |
| Storage | IPFS |
| Community | Supercompute / HERMES fleet |

---

## Project Structure

```
├── index.html              ← Generator UI (open in browser)
├── solarpunk26.html        ← Full standalone generator
├── README.md
├── docs/
│   └── design-brief.md     ← Full design specification
├── assets/
│   └── palettes/           ← 8 class color palettes (HSB)
└── src/
    ├── tilix.js            ← TiliX isometric grid system
    ├── sketch.js           ← Main p5.js sketch
    └── characters/
        ├── BaseCharacter.js ← Base character class
        └── TechClass.js    ← Tech class renderer
```

---

## Design References

Visual reference library: Pinterest board collection of ~37 images across:
- EBOY isometric pixel art (TiliX system)
- BOZGO hand-inked cyberpunk anime linework
- Warm isometric environments (Japanese architecture, street scenes)
- Functional tactical clothing
- Community/street life

---

*SolarPunks is part of the Supercompute ecosystem. Powered by HERMES.*