import * as THREE from 'three';
import { AssetManager } from '../core/AssetManager.js';
import { Inventory } from './Inventory.js';

/**
 * Player — movement, camera, combat, and gear
 */
export class Player {
  constructor(scene, inputManager) {
    this.scene = scene;
    this.input = inputManager;
    this.inventory = new Inventory();

    // Stats
    this.maxHealth = 100;
    this.health = 100;
    this.baseDamage = 8;
    this.moveSpeed = 8;
    this.isDead = false;
    this.isInvincible = false;
    this.invincibleTimer = 0;

    // Attack state
    this.isAttacking = false;
    this.attackTimer = 0;
    this.attackCooldown = 0;
    this.attackDuration = 0.3;
    this.attackCooldownTime = 0.5;
    this.attackRange = 4.5;
    this.hasHitThisSwing = false;

    // Fuga attack state
    this.fugaCooldown = 0;
    this.fugaCooldownTime = 3.0;
    this.isAimingFuga = false;
    this.fugaFired = false;

    // Dodge state
    this.isDodging = false;
    this.dodgeTimer = 0;
    this.dodgeDuration = 0.35;
    this.dodgeCooldown = 0;
    this.dodgeCooldownTime = 0.8;
    this.dodgeSpeed = 20;
    this.dodgeDirection = new THREE.Vector3();

    // Camera
    this.cameraYaw = 0;
    this.cameraPitch = 0.3;
    this.cameraDistance = 8;
    this.cameraSensitivity = 0.002;

    // Position
    this.position = new THREE.Vector3(0, 0, 0);
    this.velocity = new THREE.Vector3();
    this.facing = new THREE.Vector3(0, 0, -1);

    // 3D model
    this.model = AssetManager.createPlayerModel();
    this.scene.add(this.model);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300);

    // Respawn point
    this.respawnPoint = new THREE.Vector3(0, 0, 0);
    this.currentCaveId = null;

    // Animation bobbing
    this._bobPhase = 0;
  }

  getCamera() {
    return this.camera;
  }

  update(dt) {
    if (this.isDead) return;

    // Update timers
    if (this.attackCooldown > 0) this.attackCooldown -= dt;
    if (this.dodgeCooldown > 0) this.dodgeCooldown -= dt;
    if (this.fugaCooldown > 0) this.fugaCooldown -= dt;
    if (this.invincibleTimer > 0) {
      this.invincibleTimer -= dt;
      if (this.invincibleTimer <= 0) this.isInvincible = false;
    }

    // Passive regen: 1 HP/sec
    if (this.health < this.maxHealth) {
      this.health = Math.min(this.health + 1 * dt, this.maxHealth);
    }

    // Handle dodge
    if (this.isDodging) {
      this.dodgeTimer -= dt;
      const dodgeMult = this.inventory.getGearBonuses().dodgeMultiplier;
      this.position.addScaledVector(this.dodgeDirection, this.dodgeSpeed * dodgeMult * dt);
      if (this.dodgeTimer <= 0) {
        this.isDodging = false;
        this.isInvincible = false;
      }
      this._updateModelAndCamera(dt);
      return;
    }

    // Handle attack animation
    if (this.isAttacking) {
      this.attackTimer -= dt;
      // Swing animation — rotate weapon
      const weapon = this.model.getObjectByName('weapon');
      if (weapon) {
        const prog = 1 - (this.attackTimer / this.attackDuration);
        weapon.rotation.x = Math.sin(prog * Math.PI) * -1.5;
      }
      if (this.attackTimer <= 0) {
        this.isAttacking = false;
        if (weapon) weapon.rotation.x = 0;
      }
    }

    // Movement
    const bonuses = this.inventory.getGearBonuses();
    const speed = this.moveSpeed * bonuses.speedMultiplier;
    const forward = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw));
    const right = new THREE.Vector3(-forward.z, 0, forward.x);

    const moveDir = new THREE.Vector3();
    if (this.input.isKeyDown('KeyW')) moveDir.add(forward);
    if (this.input.isKeyDown('KeyS')) moveDir.sub(forward);
    if (this.input.isKeyDown('KeyA')) moveDir.sub(right);
    if (this.input.isKeyDown('KeyD')) moveDir.add(right);

    if (moveDir.lengthSq() > 0) {
      moveDir.normalize();
      this.position.addScaledVector(moveDir, speed * dt);
      this.facing.copy(moveDir);
      this._bobPhase += dt * 10;
    }

    // Dodge input
    if (this.input.isKeyDown('Space') && this.dodgeCooldown <= 0 && !this.isDodging) {
      this.isDodging = true;
      this.isInvincible = true;
      this.dodgeTimer = this.dodgeDuration;
      this.dodgeCooldown = this.dodgeCooldownTime;
      this.dodgeDirection.copy(moveDir.lengthSq() > 0 ? moveDir : this.facing).normalize();
    }

    // Attack input
    if (this.input.isMouseClicked() && this.attackCooldown <= 0 && !this.isAttacking && !this.isAimingFuga) {
      this.isAttacking = true;
      this.attackTimer = this.attackDuration;
      this.attackCooldown = this.attackCooldownTime;
      this.hasHitThisSwing = false;
    }

    // Fuga input
    const holdingJ = this.input.isKeyDown('KeyJ');
    if (holdingJ && this.fugaCooldown <= 0 && !this.isDodging && !this.isAttacking) {
      this.isAimingFuga = true;
    } else if (!holdingJ && this.isAimingFuga) {
      // Fire Fuga
      this.isAimingFuga = false;
      this.fugaFired = true;
      this.fugaCooldown = this.fugaCooldownTime;

      // Compute ray
      const origin = this.position.clone();
      origin.y += 1.5;
      const dir = new THREE.Vector3(
        -Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch),
        Math.sin(this.cameraPitch),
        -Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch)
      ).normalize();
      
      this.fugaRay = { origin, dir };
    }

    // Camera mouse
    const mouseDelta = this.input.getMouseDelta();
    this.cameraYaw -= mouseDelta.x * this.cameraSensitivity;
    this.cameraPitch += mouseDelta.y * this.cameraSensitivity;
    this.cameraPitch = Math.max(-0.5, Math.min(1.2, this.cameraPitch));

    this._updateModelAndCamera(dt);
  }

  _updateModelAndCamera(dt) {
    // Update model position & rotation
    this.model.position.copy(this.position);
    const bob = Math.sin(this._bobPhase) * 0.05;
    this.model.position.y += bob;

    // Face model toward facing direction
    if (this.facing.lengthSq() > 0) {
      const targetAngle = Math.atan2(this.facing.x, this.facing.z);
      this.model.rotation.y = targetAngle;
    }

    // Dodge visual — squash and lean
    if (this.isDodging) {
      this.model.scale.y = 0.6;
      this.model.scale.x = 1.3;
      this.model.scale.z = 1.3;
    } else {
      this.model.scale.set(1, 1, 1);
    }

    // Invincibility flicker
    if (this.isInvincible) {
      this.model.visible = Math.floor(performance.now() / 80) % 2 === 0;
    } else {
      this.model.visible = true;
    }

    // Third-person or first-person camera
    if (this.isAimingFuga) {
      const headPos = this.position.clone();
      headPos.y += 1.5; // eye level
      
      this.camera.position.copy(headPos);
      
      const lookDir = new THREE.Vector3(
        -Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch),
        Math.sin(this.cameraPitch),
        -Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch)
      );
      this.camera.lookAt(headPos.add(lookDir));
      
      // Face model where camera is looking
      this.facing.copy(lookDir).normalize();
      this.facing.y = 0; // keep upright
      if (this.facing.lengthSq() > 0) {
        this.model.rotation.y = Math.atan2(this.facing.x, this.facing.z);
      }
      this.model.visible = false; // Hide model in first-person
    } else {
      const offset = new THREE.Vector3(
        Math.sin(this.cameraYaw) * this.cameraDistance * Math.cos(this.cameraPitch),
        this.cameraDistance * Math.sin(this.cameraPitch) + 2,
        Math.cos(this.cameraYaw) * this.cameraDistance * Math.cos(this.cameraPitch)
      );
      this.camera.position.copy(this.position).add(offset);
      this.camera.lookAt(this.position.x, this.position.y + 1.2, this.position.z);
    }
  }

  /** Returns current attack damage accounting for sword weakness */
  getDamage(targetWeakness) {
    const bonuses = this.inventory.getGearBonuses();
    let dmg = this.baseDamage * bonuses.damageMultiplier;

    // Sword weakness check
    const activeSword = this.inventory.getActiveSword();
    if (targetWeakness && activeSword === targetWeakness) {
      return dmg; // Full damage with correct sword
    } else if (targetWeakness) {
      return dmg * 0.05; // Almost no damage without correct sword
    }
    return dmg; // Normal damage vs monsters
  }

  takeDamage(amount) {
    if (this.isDead || this.isInvincible) return false;

    const bonuses = this.inventory.getGearBonuses();
    const reduced = amount * (1 - bonuses.defense);
    this.health -= reduced;
    this.isInvincible = true;
    this.invincibleTimer = 0.5;

    if (this.health <= 0) {
      this.health = 0;
      this.die();
    }
    return true;
  }

  die() {
    this.isDead = true;
  }

  respawn() {
    this.isDead = false;
    this.health = this.maxHealth;
    this.position.copy(this.respawnPoint);
    this.isInvincible = true;
    this.invincibleTimer = 2.0;
    this.isAttacking = false;
    this.isDodging = false;
  }

  setRespawnPoint(pos, caveId) {
    this.respawnPoint.copy(pos);
    this.currentCaveId = caveId;
  }

  getAttackHitbox() {
    if (!this.isAttacking || this.hasHitThisSwing) return null;
    const center = this.position.clone().add(this.facing.clone().multiplyScalar(2.5));
    center.y += 0.8;
    return { center, radius: this.attackRange };
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }
}
