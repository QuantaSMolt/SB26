/**
 * BaseCharacter — SolarPunks Privacy Agent
 * 
 * EBOY isometric proportions:
 * - Total height: 15 TiliX cells (15 * 7 = 105px at 1x scale)
 * - Head: 5-6 cells (33-40% of total)
 * - Torso: 4-5 cells
 * - Legs: 3-4 cells
 * - Arms: 3 cells
 * 
 * Privacy Agent = no helmet, no mask — face is always visible
 * 
 * Rendering uses 3D isometric projection with top-left lighting.
 * Face lit on top-left surface, shadow on right, deep shadow on left.
 */

const { TILIX, ISO, isoProject, drawIsoBlock } = require('../tilix.js');

class BaseCharacter {
  constructor(p, className, options = {}) {
    this.p = p;
    this.className = className;
    this.classColors = null; // set by subclass after palette creation

    // Character dimensions in TiliX cells
    this.scale = options.scale || 3; // pixel multiplier

    // Grid position (feet on the ground)
    this.gx = options.gx || 0;
    this.gy = options.gy || 0;

    // Facing direction: 0 = right, 1 = back-left, 2 = left, 3 = front-right
    this.facing = options.facing || 0;

    // Skin tone
    this.skinColor = options.skinColor || null;

    // Companion/partner element
    this.hasCompanion = options.hasCompanion !== undefined ? options.hasCompanion : true;

    // Pose: 'idle', 'standing', 'contemplative', 'action'
    this.pose = options.pose || 'standing';

    // Seeded randomness for this character
    this.rng = options.seed !== undefined ? options.seed : Math.floor(Math.random() * 99999);
  }

  /** Override in subclass to set class-specific colors */
  setPalette(paletteColors) {
    this.classColors = paletteColors;
  }

  /** Seeded random using character seed */
  rand(min, max) {
    this.rng = (this.rng * 16807) % 2147483647;
    const normalized = this.rng / 2147483647;
    return min + normalized * (max - min);
  }

  /** Draw the complete character at screen position (ox, oy) */
  draw(ox = 0, oy = 0) {
    const p = this.p;
    const s = this.scale;
    const T = TILIX.CELL * s; // scaled cell size

    const cx = p.width / 2 + ox;
    const cy = p.height / 2 + oy;

    // === Draw in order: back → front (painter's algorithm) ===
    // For 3/4 view facing right: draw legs, torso, head

    // Ground shadow
    this._drawShadow(cx, cy);

    // === LEGS ===
    this._drawLegs(cx, cy, s);

    // === TORSO ===
    this._drawTorso(cx, cy, s);

    // === HEAD ===
    this._drawHead(cx, cy, s);

    // === ARMS ===
    this._drawArms(cx, cy, s);

    // === CLASS ACCESSORIES ===
    this._drawClassAccessory(cx, cy, s);

    // === COMPANION ===
    if (this.hasCompanion) {
      this._drawCompanion(cx, cy, s);
    }
  }

  _drawShadow(cx, cy) {
    const p = this.p;
    const s = this.scale;
    p.push();
    p.translate(cx, cy);
    // Shadow: flat ellipse below character on ground
    p.noStroke();
    p.fill(0, 0, 0, 20);
    p.ellipse(0, 0, TILIX.CELL * s * 3, TILIX.CELL * s * 1.5);
    p.pop();
  }

  _drawLegs(cx, cy, s) {
    // Override in subclass
  }

  _drawTorso(cx, cy, s) {
    // Override in subclass
  }

  _drawHead(cx, cy, s) {
    // Override in subclass
  }

  _drawArms(cx, cy, s) {
    // Override in subclass
  }

  _drawClassAccessory(cx, cy, s) {
    // Override in subclass — class-specific gear
  }

  _drawCompanion(cx, cy, s) {
    // Override in subclass — robot dog, AI drone, etc.
  }

  /** Get current character as a PNG dataURL */
  toDataURL() {
    return this.p.canvas.toDataURL('image/png');
  }
}

module.exports = { BaseCharacter };
