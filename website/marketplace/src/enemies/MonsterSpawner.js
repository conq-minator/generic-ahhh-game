import * as THREE from 'three';
import { Monster } from './Monster.js';
import { AssetManager } from '../core/AssetManager.js';

/**
 * MonsterSpawner — spawns ~20 monsters per cave zone, guarantees sword drop
 */
export class MonsterSpawner {
  constructor(scene) {
    this.scene = scene;
    this.monstersByCave = {}; // { caveId: [Monster] }
    this.droppedSwords = []; // { position, type, caveId, mesh, collected }
  }

  spawnForCave(cave) {
    const monsters = [];
    const count = 18 + Math.floor(Math.random() * 5); // 18-22

    const swordTypes = {
      1: 'defense-breaker',
      2: 'speed-counter',
      3: 'power-counter'
    };

    // Guaranteed sword dropper index
    const swordDropperIndex = Math.floor(Math.random() * count);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 3 + Math.random() * 8;
      const pos = cave.monsterZoneCenter.clone().add(
        new THREE.Vector3(Math.cos(angle) * dist, 0, Math.sin(angle) * dist)
      );

      const monster = new Monster(this.scene, pos, cave.id);

      // Assign sword drop
      if (i === swordDropperIndex) {
        monster.dropsSword = true;
        monster.swordType = swordTypes[cave.id];
      } else if (Math.random() < 0.08) {
        // Small chance for extra drops
        monster.dropsSword = true;
        monster.swordType = swordTypes[cave.id];
      }

      monsters.push(monster);
    }

    this.monstersByCave[cave.id] = monsters;
    return monsters;
  }

  update(dt, playerPosition) {
    for (const caveId in this.monstersByCave) {
      const monsters = this.monstersByCave[caveId];
      for (const monster of monsters) {
        monster.update(dt, playerPosition);
      }
    }

    // Animate dropped swords (float + spin)
    for (const sword of this.droppedSwords) {
      if (!sword.collected && sword.mesh) {
        sword.mesh.rotation.y += dt * 2;
        sword.mesh.position.y = sword.baseY + Math.sin(performance.now() * 0.003) * 0.3;
      }
    }
  }

  /** Called when a monster dies — checks for sword drop */
  handleMonsterDeath(monster) {
    if (monster.dropsSword && monster.swordType) {
      const swordMesh = AssetManager.createSwordDrop(monster.swordType);
      const dropPos = monster.position.clone();
      dropPos.y = 0.8;
      swordMesh.position.copy(dropPos);
      this.scene.add(swordMesh);

      const drop = {
        position: dropPos.clone(),
        baseY: 0.8,
        type: monster.swordType,
        caveId: monster.caveId,
        mesh: swordMesh,
        collected: false
      };
      this.droppedSwords.push(drop);
      monster.droppedSword = swordMesh;
      return drop;
    }
    return null;
  }

  /** Check if player is near any uncollected sword */
  checkSwordPickup(playerPosition, pickupRadius = 2.0) {
    for (const sword of this.droppedSwords) {
      if (!sword.collected) {
        const dist = playerPosition.distanceTo(sword.position);
        if (dist < pickupRadius) {
          sword.collected = true;
          if (sword.mesh) {
            this.scene.remove(sword.mesh);
          }
          return sword;
        }
      }
    }
    return null;
  }

  /** Get all living monsters */
  getAllMonsters() {
    const all = [];
    for (const caveId in this.monstersByCave) {
      all.push(...this.monstersByCave[caveId]);
    }
    return all;
  }

  /** Get monsters for a specific cave */
  getMonstersForCave(caveId) {
    return this.monstersByCave[caveId] || [];
  }

  /** Check if all monsters for a cave are dead */
  areCaveMonstersDead(caveId) {
    const monsters = this.monstersByCave[caveId];
    if (!monsters) return true;
    return monsters.every(m => m.isDead);
  }
}
