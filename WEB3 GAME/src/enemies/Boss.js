import * as THREE from 'three';
import { AssetManager } from '../core/AssetManager.js';

/**
 * Boss — base class with attack pattern system, weakness, and phases
 */
export class Boss {
  constructor(scene, config) {
    this.scene = scene;
    this.id = config.id;
    this.name = config.name;
    this.type = config.type; // 'defense', 'speed', 'attack'
    this.caveId = config.caveId;

    // Stats
    this.maxHealth = config.maxHealth || 500;
    this.health = this.maxHealth;
    this.damage = config.damage || 15;
    this.moveSpeed = config.moveSpeed || 2;
    this.defense = config.defense || 0;

    // Weakness
    this.weakness = config.weakness; // sword type that's effective

    // Gear drop
    this.gearDrop = config.gearDrop; // { type, name, rarity, description, icon }

    // State
    this.isDead = false;
    this.isActive = false;
    this.state = 'idle'; // idle, chase, telegraph, attack, cooldown, vulnerable
    this.stateTimer = 0;

    // Position
    this.position = config.position.clone();
    this.spawnPosition = config.position.clone();
    this.facing = new THREE.Vector3(0, 0, 1);

    // Attack pattern system
    this.patterns = config.patterns || [];
    this.currentPattern = 0;
    this.patternCooldown = 0;

    // Combat
    this.attackHitbox = null;
    this.isVulnerable = false;
    this.vulnerableTimer = 0;
    this.vulnerableDuration = config.vulnerableDuration || 2.0;

    // telegraph
    this.telegraphDuration = config.telegraphDuration || 0.8;
    this.attackDuration = config.attackDuration || 0.5;
    this.cooldownDuration = config.cooldownDuration || 1.5;

    // Model
    this.model = AssetManager.createBossModel(this.type);
    this.model.position.copy(this.position);
    this.model.visible = false; // Hidden until activated
    this.scene.add(this.model);

    // Arena indicator (ground circle)
    this.arenaRadius = 15;
    this._attackAnimPhase = 0;
  }

  activate() {
    this.isActive = true;
    this.model.visible = true;
    this.state = 'chase';
    this.stateTimer = 2;
  }

  deactivate() {
    this.isActive = false;
    this.model.visible = false;
  }

  update(dt, playerPosition) {
    if (!this.isActive || this.isDead) return;

    this.stateTimer -= dt;
    if (this.patternCooldown > 0) this.patternCooldown -= dt;

    const distToPlayer = this.position.distanceTo(playerPosition);
    const dirToPlayer = playerPosition.clone().sub(this.position);
    dirToPlayer.y = 0;
    dirToPlayer.normalize();

    switch (this.state) {
      case 'chase':
        this._chase(dt, playerPosition, distToPlayer, dirToPlayer);
        break;
      case 'telegraph':
        this._telegraph(dt, playerPosition);
        break;
      case 'attack':
        this._performAttack(dt, playerPosition, dirToPlayer);
        break;
      case 'cooldown':
        this._cooldown(dt);
        break;
      case 'vulnerable':
        this._vulnerable(dt);
        break;
    }

    // Update model
    this.model.position.copy(this.position);

    // Pulse animation when telegraphing
    if (this.state === 'telegraph') {
      const pulse = 1 + Math.sin(performance.now() * 0.02) * 0.1;
      this.model.scale.set(pulse, pulse, pulse);
    } else if (this.state === 'vulnerable') {
      this.model.scale.set(0.9, 0.9, 0.9);
      // Flash
      this.model.visible = Math.floor(performance.now() / 200) % 3 !== 0;
    } else {
      this.model.scale.set(1, 1, 1);
      this.model.visible = true;
    }
  }

  _chase(dt, playerPosition, distToPlayer, dirToPlayer) {
    // Move toward player
    if (distToPlayer > 3) {
      this.position.addScaledVector(dirToPlayer, this.moveSpeed * dt);
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    }

    // Start attack when close or on timer
    if ((distToPlayer < 5 || this.stateTimer <= 0) && this.patternCooldown <= 0) {
      this.state = 'telegraph';
      this.stateTimer = this.telegraphDuration;
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    }
  }

  _telegraph(dt, playerPosition) {
    // Boss telegraphs attack — glowing, shaking
    this.model.position.x += (Math.random() - 0.5) * 0.1;
    this.model.position.z += (Math.random() - 0.5) * 0.1;

    if (this.stateTimer <= 0) {
      this.state = 'attack';
      this.stateTimer = this.attackDuration;
      this._attackAnimPhase = 0;
      this.facing.copy(playerPosition.clone().sub(this.position).normalize());
    }
  }

  _performAttack(dt, playerPosition, dirToPlayer) {
    this._attackAnimPhase += dt;

    // Attack hitbox is active during this phase
    const pattern = this.patterns[this.currentPattern % this.patterns.length];
    this.attackHitbox = this._getAttackHitbox(pattern);

    if (this.stateTimer <= 0) {
      this.attackHitbox = null;
      this.currentPattern = (this.currentPattern + 1) % this.patterns.length;

      // Every 3 attacks, become vulnerable
      if (this.currentPattern % 3 === 0) {
        this.state = 'vulnerable';
        this.stateTimer = this.vulnerableDuration;
        this.isVulnerable = true;
      } else {
        this.state = 'cooldown';
        this.stateTimer = this.cooldownDuration;
      }
    }
  }

  _cooldown(dt) {
    this.attackHitbox = null;
    if (this.stateTimer <= 0) {
      this.state = 'chase';
      this.stateTimer = 1 + Math.random() * 2;
      this.patternCooldown = 0.5;
    }
  }

  _vulnerable(dt) {
    this.attackHitbox = null;
    if (this.stateTimer <= 0) {
      this.isVulnerable = false;
      this.state = 'chase';
      this.stateTimer = 1.5;
    }
  }

  _getAttackHitbox(pattern) {
    // Different boss types have different attack shapes
    const center = this.position.clone().add(this.facing.clone().multiplyScalar(3));
    center.y = 1;
    return {
      center,
      radius: pattern?.radius || 4,
      damage: this.damage * (pattern?.damageMultiplier || 1)
    };
  }

  takeDamage(amount) {
    if (this.isDead) return;

    // Extra damage during vulnerable window
    const mult = this.isVulnerable ? 1.5 : 1.0;
    const finalDmg = Math.max(1, (amount - this.defense) * mult);
    this.health -= finalDmg;

    // Flash
    this.model.traverse(c => {
      if (c.isMesh && c.material) {
        const mat = c.material.clone();
        mat.emissive.setHex(0xffffff);
        mat.emissiveIntensity = 1.0;
        c.material = mat;
        setTimeout(() => {
          mat.emissive.setHex(0x000000);
          mat.emissiveIntensity = 0;
        }, 100);
      }
    });

    if (this.health <= 0) {
      this.health = 0;
      this.die();
    }

    return finalDmg;
  }

  die() {
    this.isDead = true;
    this.isActive = false;
    this.attackHitbox = null;
  }

  getHealthPercent() {
    return this.health / this.maxHealth;
  }

  destroy() {
    this.scene.remove(this.model);
  }
}

/**
 * Defense Boss — high defense, slow, heavy attacks
 */
export class DefenseBoss extends Boss {
  constructor(scene, position) {
    super(scene, {
      id: 'defense-boss',
      name: 'IRON GUARDIAN',
      type: 'defense',
      caveId: 1,
      maxHealth: 600,
      damage: 20,
      moveSpeed: 1.5,
      defense: 5,
      weakness: 'defense-breaker',
      position,
      vulnerableDuration: 2.5,
      telegraphDuration: 1.2,
      attackDuration: 0.6,
      cooldownDuration: 1.8,
      gearDrop: {
        type: 'armor',
        name: 'Defense Armor Plate',
        rarity: 'Epic',
        description: '+50% damage reduction',
        icon: '🛡️'
      },
      patterns: [
        { name: 'slam', radius: 5, damageMultiplier: 1.0 },
        { name: 'sweep', radius: 6, damageMultiplier: 0.8 },
        { name: 'ground-pound', radius: 8, damageMultiplier: 1.5 }
      ]
    });
  }
}

/**
 * Speed Boss — fast, quick combos, lower HP
 */
export class SpeedBoss extends Boss {
  constructor(scene, position) {
    super(scene, {
      id: 'speed-boss',
      name: 'SHADOW STRIKER',
      type: 'speed',
      caveId: 2,
      maxHealth: 400,
      damage: 12,
      moveSpeed: 5,
      defense: 0,
      weakness: 'speed-counter',
      position,
      vulnerableDuration: 1.5,
      telegraphDuration: 0.4,
      attackDuration: 0.3,
      cooldownDuration: 0.8,
      gearDrop: {
        type: 'boots',
        name: 'Shadow Stride Boots',
        rarity: 'Epic',
        description: '+40% movement speed, +50% dodge distance',
        icon: '👢'
      },
      patterns: [
        { name: 'dash-slash', radius: 4, damageMultiplier: 0.8 },
        { name: 'flurry', radius: 3, damageMultiplier: 0.5 },
        { name: 'dash-slash', radius: 4, damageMultiplier: 0.8 },
        { name: 'spinning-strike', radius: 5, damageMultiplier: 1.2 }
      ]
    });
  }

  _chase(dt, playerPosition, distToPlayer, dirToPlayer) {
    // Speed boss dashes toward player
    if (distToPlayer > 2) {
      this.position.addScaledVector(dirToPlayer, this.moveSpeed * dt);
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    }
    if ((distToPlayer < 4 || this.stateTimer <= 0) && this.patternCooldown <= 0) {
      this.state = 'telegraph';
      this.stateTimer = this.telegraphDuration;
    }
  }
}

/**
 * Attack Boss — high damage, powerful patterns
 */
export class AttackBoss extends Boss {
  constructor(scene, position) {
    super(scene, {
      id: 'attack-boss',
      name: 'DARK OVERLORD',
      type: 'attack',
      caveId: 3,
      maxHealth: 500,
      damage: 30,
      moveSpeed: 2.5,
      defense: 2,
      weakness: 'power-counter',
      position,
      vulnerableDuration: 2.0,
      telegraphDuration: 1.0,
      attackDuration: 0.5,
      cooldownDuration: 1.2,
      gearDrop: {
        type: 'legendary-sword',
        name: 'Legendary Darkfire Sword',
        rarity: 'Legendary',
        description: '+80% attack damage',
        icon: '⚔️'
      },
      patterns: [
        { name: 'heavy-strike', radius: 5, damageMultiplier: 1.5 },
        { name: 'ground-slam', radius: 7, damageMultiplier: 2.0 },
        { name: 'sweep', radius: 5, damageMultiplier: 1.0 }
      ]
    });
  }
}
