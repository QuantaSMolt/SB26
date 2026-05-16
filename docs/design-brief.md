# SolarPunks Design Brief
## Privacy Agent Generator — NFT Collection

---

## Project Name
**SolarPunks** — a living mythology within the Supercompute ecosystem.

---

## Core Vision

SolarPunks is an Afrofuturist + Solarpunk character collection built on the premise that **stories are humanity's most durable technology**. Characters inhabit a post-struggle world characterized by earned peace, cycles of nature, and the recognition that Carbon (humanity/nature) and Silicon (AI/technology) are partners, not adversaries.

**Core motto:** *"I shine. You shine. We shine."*

**Core principle:** The Merger — Carbon and Silicon are both assets of Earth. The Logo and Accumulation are the antagonists: structural thought-forms, not villains.

---

## Privacy Agents

Each character is a **Privacy Agent** — a person whose identity is fully visible. No masks, no helmets, no obscuring of the self. This is intentional. The world SolarPunks depicts is one where people show up as themselves.

**Trait:** Face is always visible. Head is always shown. The character is a person, not a persona.

---

## Visual Aesthetic

### Style Name
**Solar Isometric** — warm isometric pixel art as defined by EBOY's TiliX system, with BOZGO-quality linework and a hand-inked quality to character rendering.

### Aesthetic Pillars

1. **Isometric world** — EBOY TiliX 2:1 grid. Characters exist inside the world, not floating above it.
2. **Warm functional clothing** — Tactical jackets, utility jumpsuits. Every character looks dressed for their purpose.
3. **Community-forward** — Companion elements (robot dogs, AI drones, animals) are present in most characters.
4. **Retro-futurism, not dystopia** — Warm earth tones: ochre, terracotta, sage, warm white. Not neon. Not dark.
5. **Hand-inked linework** — BOZGO quality outlines. Characters have weight and edge.
6. **Purposeful tech** — Tools, scanners, utility belts. Tech that does a job.

### Color System
Each class has a defined primary/secondary/accent palette derived from warm Solarpunk tones. Full palette library in `assets/palettes/index.js`.

### Exclusions
- No helmets, no masks (Privacy Agents)
- No weapons as primary motif
- No dystopian aesthetic
- No realistic face proportions (EBOY oversized head)
- No gradient shading on characters
- No scarcity or poverty aesthetic

---

## Character System

### The 8 Classes

| Class | Motto | Focus | Primary Color |
|-------|-------|-------|---------------|
| Tech | Gizmo love | AI, cyber implants, tools | Deep Navy |
| Bio | Plant love | Plant harmony, living elements | Leaf Green |
| Wildlife | Animal love | Animal coexistence | Terra Orange |
| Musical | Revenga opus | Rhythm, expression | Vibrant Pink |
| Achievement | Achievements today | Books, badges | Amber Gold |
| Skulls | Skulls it is | Protection, guarding | Coral Red |
| Explorer | I can do it all | Full range exploration | Ocean Blue |
| Fiscal | Break the banks | Economic rebellion | Amber Gold |

### Jimmi Legendaries
Jimmi is the through-line character of the mythology. His arc spans babyhood to tombstone. He is "the one who held on for us and believed." Each Jimmi variant represents a life stage.

### Trait System
Characters support trait swapping:
- Skin tone (Privacy Agent — always visible)
- Clothing/variant within class
- Accessories (toggle on/off)
- Companion (toggle on/off)
- Pose variations

---

## Technical Stack

### Generative Engine
**p5.js** — code-first character generation. The algorithm is the brush. Output is deterministic per seed.

### Rendering
- EBOY TiliX grid: 7×7 Dual Px per cell, 2:1 isometric projection
- Character height: 15 cells (105px base at 1x scale)
- Head proportion: 33-40% of total height
- Top-left lighting (3D shading on isometric surfaces)
- 12-16 color limit per composition

### Output
- 512×512 PNG (PFP standard)
- Canvas → PNG → IPFS → NFT metadata
- Seed encoded in metadata for reproducibility

### Pipeline
```
p5.js Generator (seeded)
    ↓
512×512 Canvas PNG
    ↓
IPFS (metadata + image)
    ↓
Lens Chain (dynamic NFT minting)
```

---

## Jimmi Variants (Rarity)

| Variant | Rarity | Description |
|---------|--------|-------------|
| Baby Jimmi | Most Rare | Young, full of hope |
| Young Jimmi | Ultra Rare | Adult in a suit |
| Adult Jimmi | Rare | Rich in appearance |
| Ole Jimmi | Rare | Elderly, weathered, warm smile |
| Jimmi Tombstone | 1 of 1 | Legendary — "the light" |

---

## Design References

Visual reference library collected in `/tmp/ref_*.jpg` and `/tmp/last_*.jpg`.
Key aesthetic threads:
- EBOY isometric pixel art (TiliX grid system)
- BOZGO hand-inked cyberpunk anime linework
- Warm isometric environments (Japanese cityscapes, street scenes)
- Functional tactical clothing (tactical jackets, utility vests)
- Community street life (multi-figure scenes)

---

## Design References

Visual reference library: `assets/references/`
- EBOY isometric pixel art (TiliX system)
- BOZGO linework quality (hand-inked anime style)
- Warm isometric environments (Japanese architecture, street scenes)
- Functional tactical clothing (jackets, utility vests)
- Community/street life (crowds, squares)
- Retro-futurism (70s-90s warm palette, not neon)

---

## Platform Integration

- **NewsDesk** — lore publishing
- **TradeDesk** — economic modeling
- **AgentDesk/HERMES** — world-building database, content generation
- **Lens Chain** — dynamic NFT minting
- **p5.js** — generative art engine

---

*Version 0.1 — May 16, 2026*
