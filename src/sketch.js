/**
 * SolarPunks — Privacy Agent Generator
 * 
 * A seeded, parameterized character renderer for Privacy Agent NFTs.
 * Outputs 512×512 PNG suitable for IPFS → NFT metadata.
 * 
 * Controls:
 * - Press SPACE to randomize seed
 * - Press S to save PNG
 * - Press R to regenerate
 */

p5.disableFriendlyErrors = true;

// === Configuration ===
const CONFIG = {
  seed: 42,
  canvas: 512,
  scale: 3,           // pixel scale multiplier
  className: 'Tech',   // current class
  showCompanion: true,
  showVisor: true,
  showWristDevice: true,
  facing: 0,           // 0=right, 2=left
  pose: 'standing',
};

// === Globals ===
let character;
let palettes;
let font;

function preload() {
  // Load palettes
  palettes = require('../assets/palettes/index.js');
}

function setup() {
  createCanvas(CONFIG.canvas, CONFIG.canvas);
  colorMode(HSB, 360, 100, 100, 100);
  randomSeed(CONFIG.seed);
  noiseSeed(CONFIG.seed);
  noLoop();

  // Create character
  rebuildCharacter();
}

function draw() {
  // Background — warm off-white, not pure white
  background(40, 15, 98);

  // Draw character centered
  if (character) {
    // Character at center-bottom third (EBOY composition)
    character.draw(0, 60);
  }

  // Draw class name badge
  drawBadge();
}

function rebuildCharacter() {
  const { getClassPalette, getRandomSkin } = palettes;
  const { TechClass } = require('./characters/TechClass.js');

  const p5Instance = {
    p: {
      color: (h, s, b) => color(h, s, b),
      random: (n) => random(n),
      width: width,
      height: height,
    }
  };

  // For now, create a plain JS object that p5 color function will be injected
  const charOpts = {
    seed: CONFIG.seed,
    scale: CONFIG.scale,
    hasCompanion: CONFIG.showCompanion,
    hasVisor: CONFIG.showVisor,
    hasWristDevice: CONFIG.showWristDevice,
    facing: CONFIG.facing,
    pose: CONFIG.pose,
    skinColor: null, // will be assigned by character
  };

  character = new TechClass({ color, random, width, height }, charOpts);
  const classPalette = getClassPalette({ color }, CONFIG.className);
  character.skinColor = getRandomSkin({ color, random });
  character.setPalette(classPalette);
}

function drawBadge() {
  push();
  textAlign(CENTER, BOTTOM);
  textSize(14);
  fill(40, 20, 50);
  textFont('monospace');
  text(`${CONFIG.className.toUpperCase()} — ${CONFIG.seed}`, width / 2, height - 10);
  pop();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas(`solarpunk_${CONFIG.className.toLowerCase()}_${CONFIG.seed}`, 'png');
  }
  if (key === ' ') {
    CONFIG.seed = floor(random(99999));
    randomSeed(CONFIG.seed);
    noiseSeed(CONFIG.seed);
    rebuildCharacter();
    redraw();
  }
  if (key === 'r' || key === 'R') {
    rebuildCharacter();
    redraw();
  }
}

// === Trait Controls (called by UI) ===
window.setClass = function(cls) {
  CONFIG.className = cls;
  rebuildCharacter();
  redraw();
};

window.randomize = function() {
  CONFIG.seed = floor(random(99999));
  randomSeed(CONFIG.seed);
  noiseSeed(CONFIG.seed);
  rebuildCharacter();
  redraw();
};

window.toggleCompanion = function() {
  CONFIG.showCompanion = !CONFIG.showCompanion;
  rebuildCharacter();
  redraw();
};

window.toggleVisor = function() {
  CONFIG.showVisor = !CONFIG.showVisor;
  rebuildCharacter();
  redraw();
};

window.savePNG = function() {
  saveCanvas(`solarpunk_${CONFIG.className.toLowerCase()}_${CONFIG.seed}`, 'png');
};

window.getDataURL = function() {
  return canvas.toDataURL('image/png');
};
