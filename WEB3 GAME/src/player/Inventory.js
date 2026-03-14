/**
 * Inventory — tracks collected swords and gear
 */
export class Inventory {
  constructor() {
    // Swords: keyed by cave id
    this.swords = {}; // { 1: 'defense-breaker', 2: 'speed-counter', 3: 'power-counter' }
    // Gear: keyed by type
    this.gear = {}; // { armor: true, boots: true, 'legendary-sword': true }
    this.activeSword = null; // currently equipped special sword type
  }

  addSword(caveId, type) {
    this.swords[caveId] = type;
    this.activeSword = type;
  }

  hasSword(caveId) {
    return !!this.swords[caveId];
  }

  getSwordType(caveId) {
    return this.swords[caveId] || null;
  }

  setActiveSword(type) {
    this.activeSword = type;
  }

  getActiveSword() {
    return this.activeSword;
  }

  addGear(type) {
    this.gear[type] = true;
  }

  hasGear(type) {
    return !!this.gear[type];
  }

  /** Returns stat bonuses from equipped gear */
  getGearBonuses() {
    return {
      defense: this.gear['armor'] ? 0.5 : 0, // 50% damage reduction
      speedMultiplier: this.gear['boots'] ? 1.4 : 1.0,
      dodgeMultiplier: this.gear['boots'] ? 1.5 : 1.0,
      damageMultiplier: this.gear['legendary-sword'] ? 1.8 : 1.0
    };
  }

  getAllGear() {
    return Object.keys(this.gear);
  }

  getAllSwords() {
    return { ...this.swords };
  }
}
