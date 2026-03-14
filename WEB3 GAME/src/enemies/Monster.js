import * as THREE from 'three';
import { AssetManager } from '../core/AssetManager.js';

/**
 * Monster — basic enemy with detect/chase/attack AI
 */
export class Monster {
  constructor(scene, position, caveId) {
    this.scene = scene;
    this.caveId = caveId;

    // Stats
    this.maxHealth = 30;
    this.health = 30;
    this.damage = 5;
    this.moveSpeed = 3.5;
    this.detectionRadius = 12;
    this.attackRadius = 1.8;
    this.attackCooldownTime = 1.2;
    this.attackCooldown = 0;

    // State
    this.state = 'idle'; // idle, chase, attack, dead
    this.isDead = false;
    this.deathTimer = 0;
    this.position = position.clone();
    this.spawnPosition = position.clone();

    // Loot
    this.dropsSword = false;
    this.swordType = null;
    this.droppedSword = null; // reference to dropped sword object

    // Model
    this.model = AssetManager.createMonsterModel();
    this.model.position.copy(this.position);
    this.scene.add(this.model);

    // Idle wander
    this._wanderTarget = null;
    this._wanderTimer = Math.random() * 3;

    // Attack animation
    this._attackAnim = 0;
  }

  update(dt, playerPosition) {
    if (this.isDead) {
      this.deathTimer += dt;
      // Shrink and sink
      const s = Math.max(0, 1 - this.deathTimer * 2);
      this.model.scale.set(s, s, s);
      this.model.position.y = -this.deathTimer * 0.5;
      if (this.deathTimer > 1.0) {
        this.model.visible = false;
      }
      return;
    }

    if (this.attackCooldown > 0) this.attackCooldown -= dt;

    const distToPlayer = this.position.distanceTo(playerPosition);

    // State transitions
    if (distToPlayer < this.attackRadius && this.attackCooldown <= 0) {
      this.state = 'attack';
    } else if (distToPlayer < this.detectionRadius) {
      this.state = 'chase';
    } else {
      this.state = 'idle';
    }

    // Behavior
    switch (this.state) {
      case 'idle':
        this._idle(dt);
        break;
      case 'chase':
        this._chase(dt, playerPosition);
        break;
      case 'attack':
        this._attack(dt, playerPosition);
        break;
    }

    // Update model
    this.model.position.copy(this.position);
    // Bobbing
    this.model.position.y += Math.sin(performance.now() * 0.003 + this.position.x) * 0.08;
  }

  _idle(dt) {
    this._wanderTimer -= dt;
    if (this._wanderTimer <= 0) {
      this._wanderTimer = 2 + Math.random() * 3;
      const angle = Math.random() * Math.PI * 2;
      const dist = 2 + Math.random() * 4;
      this._wanderTarget = this.spawnPosition.clone().add(
        new THREE.Vector3(Math.cos(angle) * dist, 0, Math.sin(angle) * dist)
      );
    }
    if (this._wanderTarget) {
      const dir = this._wanderTarget.clone().sub(this.position);
      dir.y = 0;
      if (dir.length() > 0.5) {
        dir.normalize();
        this.position.addScaledVector(dir, this.moveSpeed * 0.3 * dt);
        this.model.lookAt(this._wanderTarget.x, this.model.position.y, this._wanderTarget.z);
      }
    }
  }

  _chase(dt, playerPosition) {
    const dir = playerPosition.clone().sub(this.position);
    dir.y = 0;
    if (dir.length() > 0.5) {
      dir.normalize();
      this.position.addScaledVector(dir, this.moveSpeed * dt);
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    }
  }

  _attack(dt, playerPosition) {
    this.attackCooldown = this.attackCooldownTime;
    this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    // Attack animation pulse
    this._attackAnim = 1.0;
    this.state = 'chase';
  }

  takeDamage(amount) {
    if (this.isDead) return;
    this.health -= amount;
    // Flash red
    this.model.traverse(c => {
      if (c.isMesh) {
        c.material = c.material.clone();
        const origColor = c.material.color.getHex();
        c.material.emissive.setHex(0xff0000);
        c.material.emissiveIntensity = 0.8;
        setTimeout(() => {
          if (c.material) {
            c.material.emissive.setHex(0x000000);
            c.material.emissiveIntensity = 0;
          }
        }, 150);
      }
    });

    if (this.health <= 0) {
      this.health = 0;
      this.die();
    }
  }

  die() {
    this.isDead = true;
    this.state = 'dead';
    this.deathTimer = 0;
  }

  /** Check if monster attack hits player */
  isAttacking() {
    return this._attackAnim > 0;
  }

  consumeAttack() {
    const was = this._attackAnim > 0;
    this._attackAnim = 0;
    return was;
  }

  destroy() {
    this.scene.remove(this.model);
    if (this.droppedSword) {
      this.scene.remove(this.droppedSword);
    }
  }
}
