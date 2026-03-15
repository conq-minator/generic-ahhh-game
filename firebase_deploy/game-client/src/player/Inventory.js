/**
 * Inventory — tracks collected swords and gear
 */
export class Inventory {
  constructor() {
    // Swords: keyed by cave id
    this.swords = {}; // { 1: 'defense-breaker', 2: 'speed-counter', 3: 'power-counter' }
    // Gear: keyed by type. Stores metadata like { equipped: true, tokenId: 123 }
    this.gear = {}; 
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

  addGear(type, data = { equipped: true }) {
    this.gear[type] = data;
  }

  getGearData(type) {
    return this.gear[type] || null;
  }

  hasGear(type) {
    return !!this.gear[type] && this.gear[type].equipped;
  }

  /** Returns stat bonuses from equipped gear */
  getGearBonuses() {
    return {
      defense: this.hasGear('Chestplate') ? 0.5 : 0, // 50% damage reduction
      speedMultiplier: this.hasGear('Boots') ? 1.4 : 1.0,
      dodgeMultiplier: this.hasGear('Boots') ? 1.5 : 1.0,
      damageMultiplier: this.hasGear('Sword') ? 1.8 : 1.0
    };
  }

  save(account) {
    if (!account) return;
    const key = `bossRPG_equipment_${account}`;
    localStorage.setItem(key, JSON.stringify(this.gear));
  }

  load(account) {
    if (!account) return;
    const key = `bossRPG_equipment_${account}`;
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      if (saved) {
        this.gear = saved;
      }
    } catch (e) {
      console.error('Failed to load equipment', e);
    }
  }

  getAllGear() {
    return Object.keys(this.gear);
  }

  getAllSwords() {
    return { ...this.swords };
  }
}
