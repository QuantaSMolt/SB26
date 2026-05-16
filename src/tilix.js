/**
 * TiliX Grid System — EBOY isometric pixel art foundation
 * 
 * Specification: https://c6y.github.io/tilix-reference/
 * 
 * Key constraints:
 * - 2:1 pixel ratio (isometric projection)
 * - 7×7 Dual Px per cell
 * - Vertical lines ONLY on Right Pixels
 * - No mirroring (would put verticals on left pixels)
 */

// === TiliX Constants ===
const TILIX = {
  // Cell: 7×7 dual pixels = one TiliX cell
  CELL: 7,
  // Block: 4×4 cells
  BLOCK: 4 * 7, // 28px
  // Character grid height (EBOY standard)
  CHAR_H: 15,    // 15 cells tall
  // Projection angle (2:1 = ~26.57°)
  ISO_ANGLE: Math.atan(0.5), // ~26.565°
};

const ISO = {
  // 2:1 isometric projection ratios
  X_STEP: 2,
  Y_STEP: 1,
};

/**
 * Convert grid [x, y, z] to screen [sx, sy]
 * EBOY isometric: x+y axis is the ground plane, z is up
 */
function isoProject(gx, gy, gz = 0) {
  const sx = (gx - gy) * (TILIX.CELL * ISO.X_STEP / 2);
  const sy = (gx + gy) * (TILIX.CELL * ISO.Y_STEP / 2) - gz * TILIX.CELL;
  return { x: sx, y: sy };
}

/**
 * Draw a single isometric cube/rectangular block
 * at grid position (gx, gy, gz) with size (w, d, h) in grid units
 * 
 * @param {p5} p — p5 instance
 * @param {number} gx, gy, gz — grid position
 * @param {number} w, d, h — dimensions in grid units
 * @param {object} colors — { top, left, right }
 * @param {number} ox, oy — screen offset
 */
function drawIsoBlock(p, gx, gy, gz, w = 1, d = 1, h = 1, colors, ox = 0, oy = 0) {
  const cx = TILIX.CELL * ISO.X_STEP / 2;
  const cy = TILIX.CELL * ISO.Y_STEP / 2;
  const bh = TILIX.CELL; // block height unit

  // 8 corners of the block
  const corners = {
    // bottom face (ground) — 4 corners
    b0: isoProject(gx,     gy,     gz),
    b1: isoProject(gx + w, gy,     gz),
    b2: isoProject(gx + w, gy + d, gz),
    b3: isoProject(gx,     gy + d, gz),
    // top face — 4 corners (at gz + h)
    t0: isoProject(gx,     gy,     gz + h),
    t1: isoProject(gx + w, gy,     gz + h),
    t2: isoProject(gx + w, gy + d, gz + h),
    t3: isoProject(gx,     gy + d, gz + h),
  };

  const sx = ox + p.width / 2;
  const sy = oy + p.height / 2;

  // --- Top face (lightest) ---
  p.fill(colors.top);
  p.noStroke();
  p.beginShape();
  p.vertex(sx + corners.t0.x, sy + corners.t0.y);
  p.vertex(sx + corners.t1.x, sy + corners.t1.y);
  p.vertex(sx + corners.t2.x, sy + corners.t2.y);
  p.vertex(sx + corners.t3.x, sy + corners.t3.y);
  p.endShape(p.CLOSE);

  // --- Right face (medium — shadow side) ---
  p.fill(colors.right);
  p.noStroke();
  p.beginShape();
  p.vertex(sx + corners.b1.x, sy + corners.b1.y);
  p.vertex(sx + corners.t1.x, sy + corners.t1.y);
  p.vertex(sx + corners.t2.x, sy + corners.t2.y);
  p.vertex(sx + corners.b2.x, sy + corners.b2.y);
  p.endShape(p.CLOSE);

  // --- Left face (darkest — deep shadow) ---
  p.fill(colors.left);
  p.noStroke();
  p.beginShape();
  p.vertex(sx + corners.b0.x, sy + corners.b0.y);
  p.vertex(sx + corners.t0.x, sy + corners.t0.y);
  p.vertex(sx + corners.t3.x, sy + corners.t3.y);
  p.vertex(sx + corners.b3.x, sy + corners.b3.y);
  p.endShape(p.CLOSE);
}

/**
 * Draw an isometric pixel (single dual-pixel) at grid position
 * Used for fine detail on character surfaces
 */
function drawIsoPixel(p, gx, gy, gz, color, ox = 0, oy = 0) {
  const pos = isoProject(gx, gy, gz);
  const sx = ox + p.width / 2 + pos.x - TILIX.CELL;
  const sy = oy + p.height / 2 + pos.y - TILIX.CELL * 2;
  p.fill(color);
  p.noStroke();
  p.rect(sx, sy, TILIX.CELL, TILIX.CELL);
}

/**
 * Draw character's feet onto the ground plane
 * Returns the y-offset to use as the character's base
 */
function getCharacterBaseY(p, gz = 0) {
  return -gz * TILIX.CELL;
}

module.exports = { TILIX, ISO, isoProject, drawIsoBlock, drawIsoPixel, getCharacterBaseY };
