/**
 * TechClass — "Gizmo love"
 * 
 * Tech Class Privacy Agent:
 * - Athletic build
 * - HUD visor (but no helmet — visor sits on forehead)
 * - Utility jumpsuit with circuit details
 * - Cybernetic wrist device
 * - Tool belt
 * - Robot dog companion
 * 
 * Colors: Deep Navy / Solar Yellow / Lavender Purple
 */

const { BaseCharacter } = require('./BaseCharacter.js');

class TechClass extends BaseCharacter {
  constructor(p, options = {}) {
    options.className = 'Tech';
    super(p, 'Tech', options);
    this.hasCompanion = options.hasCompanion !== undefined ? options.hasCompanion : true;
    this.hasVisor = options.hasVisor !== undefined ? options.hasVisor : true;
    this.hasWristDevice = options.hasWristDevice !== undefined ? options.hasWristDevice : true;
    this.badgeStyle = options.badgeStyle || 'circuit';
  }

  _drawLegs(cx, cy, s) {
    const p = this.p;
    const T = TILIX.CELL * s;
    const c = this.classColors;

    // Left leg
    p.fill(c.outfit);
    p.noStroke();
    p.rect(cx - T * 0.7, cy - T * 4, T * 0.7, T * 4, 0);
    // Right leg
    p.fill(c.shadow);
    p.noStroke();
    p.rect(cx + T * 0.0, cy - T * 4, T * 0.7, T * 4, 0);

    // Boots (darker)
    p.fill(c.detail);
    p.rect(cx - T * 0.7, cy - T * 1, T * 0.7, T * 1, 0);
    p.fill(c.shadow);
    p.rect(cx + T * 0.0, cy - T * 1, T * 0.7, T * 1, 0);
  }

  _drawTorso(cx, cy, s) {
    const p = this.p;
    const T = TILIX.CELL * s;
    const c = this.classColors;

    // Jumpsuit torso
    p.fill(c.outfit);
    p.noStroke();
    p.rect(cx - T * 1.0, cy - T * 7.5, T * 2.0, T * 3.5, 0);

    // Solar yellow chest panel
    p.fill(c.secondary);
    p.rect(cx - T * 0.6, cy - T * 7.2, T * 1.2, T * 1.2, 0);

    // Circuit detail lines on chest panel
    p.stroke(c.primary);
    p.strokeWeight(1 * s);
    p.line(cx - T * 0.4, cy - T * 7.0, cx + T * 0.4, cy - T * 7.0);
    p.line(cx - T * 0.4, cy - T * 6.7, cx + T * 0.2, cy - T * 6.7);
    p.noStroke();

    // Utility belt
    p.fill(c.detail);
    p.rect(cx - T * 1.0, cy - T * 4.3, T * 2.0, T * 0.4, 0);

    // Belt buckles
    p.fill(c.secondary);
    p.rect(cx - T * 0.15, cy - T * 4.3, T * 0.3, T * 0.4, 0);
  }

  _drawHead(cx, cy, s) {
    const p = this.p;
    const T = TILIX.CELL * s;
    const skin = this.skinColor || p.color(24, 45, 82);

    // Head (oversized, EBOY proportion ~5/15 = 33%)
    p.fill(skin);
    p.noStroke();
    p.rect(cx - T * 0.8, cy - T * 10.0, T * 1.6, T * 2.5, 0);

    // Hair (dark)
    p.fill(this.classColors.shadow);
    p.rect(cx - T * 0.8, cy - T * 10.5, T * 1.6, T * 0.6, 0);

    // Eyes (warm, visible — Privacy Agent)
    p.fill(40, 60, 90);
    p.rect(cx - T * 0.5, cy - T * 9.5, T * 0.25, T * 0.2, 0);
    p.rect(cx + T * 0.25, cy - T * 9.5, T * 0.25, T * 0.2, 0);

    // Smile (warm, community-forward)
    p.noFill();
    p.stroke(40, 50, 85);
    p.strokeWeight(1 * s);
    p.arc(cx, cy - T * 9.0, T * 0.4, T * 0.2, 0, p.PI);
    p.noStroke();
  }

  _drawArms(cx, cy, s) {
    const p = this.p;
    const T = TILIX.CELL * s;
    const c = this.classColors;
    const skin = this.skinColor || p.color(24, 45, 82);

    // Left arm (front, lit side)
    p.fill(skin);
    p.noStroke();
    p.rect(cx - T * 1.7, cy - T * 7.5, T * 0.6, T * 2.5, 0);

    // Right arm (back, shadow side)
    p.fill(this._darkenColor(p, skin, 0.7));
    p.noStroke();
    p.rect(cx + T * 1.1, cy - T * 7.5, T * 0.6, T * 2.5, 0);

    // Hands
    p.fill(skin);
    p.rect(cx - T * 1.7, cy - T * 5.0, T * 0.6, T * 0.5, 0);
    p.fill(this._darkenColor(p, skin, 0.7));
    p.rect(cx + T * 1.1, cy - T * 5.0, T * 0.6, T * 0.5, 0);

    // Wrist device (left arm)
    if (this.hasWristDevice) {
      p.fill(c.secondary);
      p.rect(cx - T * 1.7, cy - T * 6.0, T * 0.6, T * 0.3, 0);
      p.fill(c.highlight);
      p.rect(cx - T * 1.6, cy - T * 6.0, T * 0.4, T * 0.15, 0);
    }
  }

  _drawClassAccessory(cx, cy, s) {
    const p = this.p;
    const T = TILIX.CELL * s;
    const c = this.classColors;

    // HUD visor on forehead (no helmet — sits on head)
    if (this.hasVisor) {
      // Visor band
      p.fill(c.accent);
      p.noStroke();
      p.rect(cx - T * 0.9, cy - T * 10.1, T * 1.8, T * 0.35, 0);
      // Visor glow
      p.fill(p.color(
        p.hue(c.accent),
        p.saturation(c.accent) * 0.8,
        p.brightness(c.accent) * 1.1
      ));
      p.rect(cx - T * 0.8, cy - T * 10.05, T * 1.6, T * 0.2, 0);
    }

    // Sorting tool on belt (Tech = utility)
    p.fill(c.detail);
    p.rect(cx + T * 0.6, cy - T * 4.2, T * 0.3, T * 0.8, 0);
    p.fill(c.secondary);
    p.rect(cx + T * 0.6, cy - T * 3.8, T * 0.3, T * 0.3, 0);
  }

  _drawCompanion(cx, cy, s) {
    // Robot dog companion — positioned at character's feet
    const p = this.p;
    const T = TILIX.CELL * s;
    const c = this.classColors;

    p.push();
    p.translate(cx + T * 2.5, cy - T * 0.5);

    // Body
    p.fill(c.primary);
    p.noStroke();
    p.rect(-T * 0.6, -T * 0.8, T * 1.2, T * 0.8, 0);

    // Head
    p.fill(c.outfit);
    p.rect(-T * 0.4, -T * 1.2, T * 0.8, T * 0.4, 0);

    // Eye (glowing)
    p.fill(c.secondary);
    p.rect(-T * 0.15, -T * 1.1, T * 0.3, T * 0.15, 0);

    // Legs
    p.fill(c.shadow);
    p.rect(-T * 0.5, -T * 0.1, T * 0.2, T * 0.4, 0);
    p.rect(T * 0.3, -T * 0.1, T * 0.2, T * 0.4, 0);

    // Antenna
    p.fill(c.secondary);
    p.rect(T * 0.05, -T * 1.6, T * 0.1, T * 0.4, 0);

    p.pop();
  }

  _darkenColor(p, col, factor) {
    p.push();
    p.colorMode(p.HSB, 360, 100, 100, 100);
    const h = p.hue(col);
    const s = p.saturation(col);
    const b = p.brightness(col) * factor;
    const result = p.color(h, s, b);
    p.pop();
    return result;
  }
}

module.exports = { TechClass };
