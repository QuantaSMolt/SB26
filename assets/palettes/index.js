/**
 * SolarPunks Color System
 * 
 * Each class has a primary, secondary, accent, and skin tone range.
 * Colors are defined in HSB for easy procedural variation.
 * 
 * Naming convention: class name + role
 * All values in HSB (p5.js default: h: 0-360, s: 0-100, b: 0-100)
 */

const PALETTES = {
  // === SHARED SKIN TONES ===
  // Range of skin tones for Privacy Agents (no masks/helmets)
  skin: {
    light:    { h: 28, s: 30, b: 95 },   // warm pale
    medium:   { h: 24, s: 45, b: 82 },   // warm tan
    dark:     { h: 18, s: 55, b: 45 },   // rich brown
    deep:     { h: 12, s: 60, b: 30 },   // deep brown
    warm:     { h: 35, s: 40, b: 88 },   // golden warm
    cool:     { h: 15, s: 35, b: 80 },   // neutral warm
  },

  // === 8 CLASS PALETTES ===
  Tech: {
    name: "Tech",
    motto: "Gizmo love",
    primary:   { h: 215, s: 70, b: 70 },  // deep navy #2B6CB0
    secondary: { h: 48,  s: 80, b: 96 },  // solar yellow #F6E05E
    accent:    { h: 270, s: 65, b: 92 },  // lavender purple #9F7AEA
    highlight: { h: 48,  s: 90, b: 100 }, // bright yellow
    shadow:    { h: 215, s: 50, b: 40 },  // dark navy
    outfit:    { h: 215, s: 65, b: 55 },  // tech blue-grey
    detail:    { h: 48,  s: 70, b: 85 },  // circuit yellow
  },

  Bio: {
    name: "Bio",
    motto: "Plant love",
    primary:   { h: 135, s: 60, b: 72 },  // leaf green #68D391
    secondary: { h: 172, s: 55, b: 67 },  // teal green #38B2AC
    accent:    { h: 140, s: 50, b: 88 },  // mint green #9AE6B4
    highlight: { h: 110, s: 70, b: 85 },  // bright leaf
    shadow:    { h: 135, s: 40, b: 40 },  // deep leaf
    outfit:    { h: 140, s: 45, b: 65 },  // sage green
    detail:    { h: 172, s: 60, b: 75 },  // teal vine
  },

  Wildlife: {
    name: "Wildlife",
    motto: "Animal love",
    primary:   { h: 28,  s: 78, b: 90 },  // terra orange #ED8936
    secondary: { h: 135, s: 60, b: 72 },  // leaf green #68D391
    accent:    { h: 205, s: 70, b: 88 },  // ocean blue #4299E1
    highlight: { h: 28,  s: 90, b: 100 }, // bright orange
    shadow:    { h: 28,  s: 60, b: 55 },  // dark terra
    outfit:    { h: 35,  s: 55, b: 70 },  // field tan
    detail:    { h: 135, s: 65, b: 75 },  // leaf green
  },

  Musical: {
    name: "Musical",
    motto: "Revenga opus",
    primary:   { h: 330, s: 72, b: 88 },  // vibrant pink #ED64A6
    secondary: { h: 48,  s: 80, b: 96 },  // solar yellow #F6E05E
    accent:    { h: 270, s: 65, b: 92 },  // lavender purple #9F7AEA
    highlight: { h: 330, s: 90, b: 100 }, // bright pink
    shadow:    { h: 330, s: 50, b: 55 },  // deep pink
    outfit:    { h: 300, s: 55, b: 70 },  // rose
    detail:    { h: 48,  s: 75, b: 90 },  // yellow note
  },

  Achievement: {
    name: "Achievement",
    motto: "Achievements today",
    primary:   { h: 42,  s: 78, b: 92 },  // amber gold #ECC94B
    secondary: { h: 215, s: 65, b: 68 },  // deep navy #2B6CB0
    accent:    { h: 172, s: 55, b: 67 },  // teal green #38B2AC
    highlight: { h: 42,  s: 90, b: 100 }, // bright gold
    shadow:    { h: 42,  s: 60, b: 55 },  // dark amber
    outfit:    { h: 48,  s: 50, b: 65 },  // warm cream
    detail:    { h: 42,  s: 80, b: 85 },  // gold badge
  },

  Skulls: {
    name: "Skulls",
    motto: "Skulls it is",
    primary:   { h: 0,   s: 72, b: 92 },  // coral red #F56565
    secondary: { h: 215, s: 65, b: 68 },  // deep navy #2B6CB0
    accent:    { h: 52,  s: 85, b: 98 },  // pale yellow #FAF089
    highlight: { h: 0,   s: 90, b: 100 }, // bright red
    shadow:    { h: 0,   s: 60, b: 50 },  // deep red
    outfit:    { h: 215, s: 45, b: 50 },  // dark navy
    detail:    { h: 52,  s: 60, b: 90 },  // pale yellow
  },

  Explorer: {
    name: "Explorer",
    motto: "I can do it all",
    primary:   { h: 205, s: 70, b: 88 },  // ocean blue #4299E1
    secondary: { h: 28,  s: 78, b: 90 },  // terra orange #ED8936
    accent:    { h: 172, s: 55, b: 67 },  // teal green #38B2AC
    highlight: { h: 205, s: 85, b: 100 }, // bright blue
    shadow:    { h: 205, s: 50, b: 50 },  // deep blue
    outfit:    { h: 210, s: 55, b: 60 },  // muted blue
    detail:    { h: 28,  s: 70, b: 80 },  // orange compass
  },

  Fiscal: {
    name: "Fiscal",
    motto: "Break the banks",
    primary:   { h: 42,  s: 78, b: 92 },  // amber gold #ECC94B
    secondary: { h: 215, s: 65, b: 68 },  // deep navy #2B6CB0
    accent:    { h: 48,  s: 80, b: 96 },  // solar yellow #F6E05E
    highlight: { h: 42,  s: 95, b: 100 }, // bright gold
    shadow:    { h: 42,  s: 55, b: 50 },  // dark gold
    outfit:    { h: 42,  s: 40, b: 60 },  // muted gold
    detail:    { h: 215, s: 60, b: 70 },  // navy coin
  },
};

/**
 * Get a p5 color from a palette entry with variation
 * @param {p5} p
 * @param {object} entry — { h, s, b }
 * @param {number} variation — ± hue shift, saturation scale, brightness scale
 */
function paletteColor(p, entry, variation = {}) {
  const h = (entry.h + (variation.hue || 0) + 360) % 360;
  const s = Math.min(100, Math.max(0, entry.s * (variation.sat || 1)));
  const b = Math.min(100, Math.max(0, entry.b * (variation.bri || 1)));
  return p.color(h, s, b);
}

/**
 * Return a class palette as p5 color objects
 */
function getClassPalette(p, className) {
  const pal = PALETTES[className];
  if (!pal) throw new Error(`Unknown class: ${className}`);
  return {
    primary:   paletteColor(p, pal.primary),
    secondary: paletteColor(p, pal.secondary),
    accent:    paletteColor(p, pal.accent),
    highlight: paletteColor(p, pal.highlight),
    shadow:    paletteColor(p, pal.shadow),
    outfit:    paletteColor(p, pal.outfit),
    detail:    paletteColor(p, pal.detail),
  };
}

/**
 * Get a random skin tone from the shared palette
 */
function getRandomSkin(p) {
  const skinKeys = Object.keys(PALETTES.skin);
  const key = skinKeys[Math.floor(p.random(skinKeys.length))];
  return paletteColor(p, PALETTES.skin[key]);
}

module.exports = { PALETTES, paletteColor, getClassPalette, getRandomSkin };
