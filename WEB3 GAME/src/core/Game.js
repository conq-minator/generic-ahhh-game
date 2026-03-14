import * as THREE from 'three';
import { InputManager } from './InputManager.js';
import { World } from '../world/World.js';
import { Player } from '../player/Player.js';
import { MonsterSpawner } from '../enemies/MonsterSpawner.js';
import { DefenseBoss, SpeedBoss, AttackBoss } from '../enemies/Boss.js';
import { CombatSystem } from '../combat/CombatSystem.js';
import { HUD } from '../ui/HUD.js';
import { LootPanel } from '../ui/LootPanel.js';
import { WalletManager } from '../web3/WalletManager.js';
import { NFTMinter } from '../web3/NFTMinter.js';

/**
 * Game — main orchestrator: scene, loop, state management
 */
export class Game {
  constructor() {
    // Renderer
    this.canvas = document.getElementById('game-canvas');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    // Scene
    this.scene = new THREE.Scene();

    // Input
    this.input = new InputManager(this.canvas);

    // World
    this.world = new World(this.scene);

    // Player
    this.player = new Player(this.scene, this.input);

    // Monster spawner
    this.monsterSpawner = new MonsterSpawner(this.scene);

    // Bosses
    this.bosses = {};
    this._setupBosses();

    // Arrows
    this.fugaArrows = [];

    // Spawn monsters for all caves
    const caves = this.world.getCaves();
    for (const cave of caves) {
      this.monsterSpawner.spawnForCave(cave);
    }

    // Combat
    this.combatSystem = new CombatSystem();

    // UI
    this.hud = new HUD();
    this.lootPanel = new LootPanel(
      (gear) => this._onMintNFT(gear),
      () => this._onContinuePlaying()
    );

    // Web3
    this.wallet = new WalletManager();
    this.nftMinter = new NFTMinter(this.wallet);

    // Game state
    this.state = 'menu'; // menu, playing, boss_fight, loot, dead
    this.activeBoss = null;
    this.isPaused = false;
    this.lastTime = 0;

    // Death screen
    this.deathScreen = document.getElementById('death-screen');
    this.respawnBtn = document.getElementById('respawn-btn');
    this.respawnBtn.addEventListener('click', () => this._onRespawn());

    // Start screen
    this.startScreen = document.getElementById('start-screen');
    this.startBtn = document.getElementById('start-btn');
    this.connectWalletBtn = document.getElementById('connect-wallet-btn');

    this.startBtn.addEventListener('click', () => this._startGame());
    this.connectWalletBtn.addEventListener('click', () => this._connectWallet());

    // Resize
    window.addEventListener('resize', () => this._onResize());

    // Re-lock pointer when clicking canvas (browsers require user gesture after ESC)
    this.canvas.addEventListener('click', () => {
      if ((this.state === 'playing' || this.state === 'boss_fight') && !this.input.isLocked) {
        this.input.requestPointerLock();
      }
    });

    // Start render loop (but don't tick game logic until playing)
    this._loop(0);
  }

  _setupBosses() {
    const caves = this.world.getCaves();
    for (const cave of caves) {
      let boss;
      if (cave.id === 1) {
        boss = new DefenseBoss(this.scene, cave.bossPosition);
      } else if (cave.id === 2) {
        boss = new SpeedBoss(this.scene, cave.bossPosition);
      } else {
        boss = new AttackBoss(this.scene, cave.bossPosition);
      }
      this.bosses[cave.id] = boss;
    }
  }

  _startGame() {
    this.state = 'playing';
    this.startScreen.classList.add('hidden');
    this.hud.show();
    this.input.requestPointerLock();
    this.hud.updateGearSlots(this.player.inventory);
  }

  async _connectWallet() {
    try {
      this.connectWalletBtn.textContent = '⏳ Connecting...';
      const account = await this.wallet.connect();
      this.connectWalletBtn.textContent = `🦊 ${this.wallet.getShortAddress()}`;
      
      // If HUD is visible (in game) show notification, else just alert
      if (this.state !== 'menu') {
        this.hud.notify(`Wallet connected: ${this.wallet.getShortAddress()}`, 'success');
      }
    } catch (err) {
      this.connectWalletBtn.textContent = '🦊 Connect Wallet';
      
      // HUD is hidden on start screen, so we must use an alert to show the error
      if (this.state === 'menu') {
        alert(err.message || 'Failed to connect wallet');
      } else {
        this.hud.notify(err.message || 'Failed to connect wallet', 'danger');
      }
    }
  }

  _loop(time) {
    requestAnimationFrame((t) => this._loop(t));

    const dt = Math.min((time - this.lastTime) / 1000, 0.1);
    this.lastTime = time;

    if (this.state === 'playing' || this.state === 'boss_fight') {
      this._update(dt);
    }

    // Render
    this.renderer.render(this.scene, this.player.getCamera());
  }

  _update(dt) {
    // Player
    this.player.update(dt);

    // Monsters
    this.monsterSpawner.update(dt, this.player.position);

    // Active boss
    if (this.activeBoss && this.activeBoss.isActive) {
      this.activeBoss.update(dt, this.player.position);
    }

    // Fuga Attack — Spawn new arrow
    if (this.player.fugaFired) {
      this.player.fugaFired = false;
      const ray = this.player.fugaRay;
      
      // Create arrow mesh (cyan cylinder)
      const geometry = new THREE.CylinderGeometry(0.05, 0.05, 1.0, 8);
      geometry.rotateX(Math.PI / 2); // Point forward along Z
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.copy(ray.origin);
      // Orient mesh to match ray direction
      const target = ray.origin.clone().add(ray.dir);
      mesh.lookAt(target);
      
      this.scene.add(mesh);
      
      this.fugaArrows.push({
        mesh: mesh,
        origin: ray.origin.clone(),
        position: ray.origin.clone(),
        dir: ray.dir.clone(),
        speed: 30, // units per second
        distanceTraveled: 0,
        maxDistance: 10
      });
    }

    // Move Fuga Arrows and check collisions
    const allMonsters = this.monsterSpawner.getAllMonsters();
    
    for (let i = this.fugaArrows.length - 1; i >= 0; i--) {
      const arrow = this.fugaArrows[i];
      const moveDist = arrow.speed * dt;
      arrow.position.addScaledVector(arrow.dir, moveDist);
      arrow.mesh.position.copy(arrow.position);
      arrow.distanceTraveled += moveDist;

      let hitTarget = false;

      // Check hit
      const hit = this.combatSystem.resolveFugaHit(arrow.position, allMonsters, this.activeBoss);
      if (hit) {
        hitTarget = true;
        const screenPos = this._worldToScreen(hit.position);
        if (screenPos) {
          this.hud.showDamageNumber(screenPos.x, screenPos.y, hit.damage, 'normal');
        }

        // Handle death
        if (hit.target.isDead) {
          if (hit.isBoss) {
            this._onBossDefeated(hit.target);
          } else {
            // Monster heal + drop
            this.player.health = Math.min(this.player.health + 5, this.player.maxHealth);
            this.hud.showDamageNumber(
              screenPos ? screenPos.x : window.innerWidth / 2,
              screenPos ? screenPos.y - 30 : window.innerHeight / 2,
              '+5 HP', 'heal'
            );
            const drop = this.monsterSpawner.handleMonsterDeath(hit.target);
            if (drop) {
              this.hud.notify(`⚔ A special sword dropped!`, 'info');
            }
          }
        }
      }

      // Remove arrow if it hit or reached max distance
      if (hitTarget || arrow.distanceTraveled >= arrow.maxDistance) {
        this.scene.remove(arrow.mesh);
        arrow.mesh.geometry.dispose();
        arrow.mesh.material.dispose();
        this.fugaArrows.splice(i, 1);
      }
    }

    // Combat: Player melee attacks
    const playerHits = this.combatSystem.resolvePlayerAttack(
      this.player, allMonsters, this.activeBoss
    );
    for (const hit of playerHits) {
      // Damage number
      const screenPos = this._worldToScreen(hit.position);
      if (screenPos) {
        const type = hit.isWeakHit ? 'weak' : 'normal';
        this.hud.showDamageNumber(screenPos.x, screenPos.y, hit.damage, type);
      }

      // Monster died — check for sword drop + heal player
      if (!hit.isBoss && hit.target.isDead) {
        // Heal 5 HP
        this.player.health = Math.min(this.player.health + 5, this.player.maxHealth);
        this.hud.showDamageNumber(
          screenPos ? screenPos.x : window.innerWidth / 2,
          screenPos ? screenPos.y - 30 : window.innerHeight / 2,
          '+5 HP', 'heal'
        );

        const drop = this.monsterSpawner.handleMonsterDeath(hit.target);
        if (drop) {
          this.hud.notify(`⚔ A special sword dropped!`, 'info');
        }
      }

      // Boss died — trigger loot
      if (hit.isBoss && hit.target.isDead) {
        this._onBossDefeated(hit.target);
      }
    }

    // Combat: Enemy attacks
    const enemyHits = this.combatSystem.resolveEnemyAttacks(
      this.player, allMonsters, this.activeBoss
    );
    for (const hit of enemyHits) {
      const screenPos = this._worldToScreen(hit.position);
      if (screenPos) {
        this.hud.showDamageNumber(screenPos.x, screenPos.y, Math.round(hit.damage), 'player');
      }
    }

    // Sword pickup
    const pickedSword = this.monsterSpawner.checkSwordPickup(this.player.position);
    if (pickedSword) {
      this.player.inventory.addSword(pickedSword.caveId, pickedSword.type);
      const swordNames = {
        'defense-breaker': 'Defense Breaker Sword',
        'speed-counter': 'Speed Counter Sword',
        'power-counter': 'Power Counter Sword'
      };
      const name = swordNames[pickedSword.type] || pickedSword.type;
      this.hud.notify(`⚔ Picked up: ${name}`, 'success');
      this.hud.showSwordIndicator(name);
    }

    // Check proximity to caves (boss activation)
    this._checkCaveProximity();

    // Player death
    if (this.player.isDead && this.state !== 'dead') {
      this.state = 'dead';
      this.deathScreen.classList.remove('hidden');
      if (this.activeBoss) {
        this.activeBoss.deactivate();
      }
    }

    // UI updates
    this.hud.updatePlayerHealth(this.player.health, this.player.maxHealth);
    if (this.activeBoss && this.activeBoss.isActive) {
      this.hud.showBossHealth(this.activeBoss.name, this.activeBoss.getHealthPercent());
    } else {
      this.hud.hideBossHealth();
    }

    // Minimap
    this.hud.updateMinimap(
      this.player.position,
      this.world.getCaves(),
      allMonsters
    );
  }

  _checkCaveProximity() {
    const caves = this.world.getCaves();
    for (const cave of caves) {
      const boss = this.bosses[cave.id];
      if (!boss || boss.isDead) continue;

      // Check if player is near boss position (inside cave)
      const distToBoss = this.player.position.distanceTo(cave.bossPosition);
      if (distToBoss < 15 && !boss.isActive) {
        // Set respawn point at cave entrance
        this.player.setRespawnPoint(cave.monsterZoneCenter, cave.id);

        // Activate boss
        boss.activate();
        this.activeBoss = boss;
        this.state = 'boss_fight';

        // Set active sword for this cave
        if (this.player.inventory.hasSword(cave.id)) {
          this.player.inventory.setActiveSword(this.player.inventory.getSwordType(cave.id));
          this.hud.notify(`${boss.name} awakens! Your sword glows with power!`, 'danger');
        } else {
          this.player.inventory.setActiveSword(null);
          this.hud.notify(`${boss.name} awakens! You need the right sword...`, 'danger');
        }
      }

      // Deactivate if player moves too far from boss
      if (boss.isActive && distToBoss > 40) {
        boss.deactivate();
        boss.health = boss.maxHealth; // Reset boss
        this.activeBoss = null;
        this.state = 'playing';
        this.hud.hideBossHealth();
      }
    }
  }

  _onBossDefeated(boss) {
    this.state = 'loot';
    this.activeBoss = null;
    this.hud.hideBossHealth();

    // Add gear to inventory
    const gear = boss.gearDrop;
    this.player.inventory.addGear(gear.type);
    this.hud.updateGearSlots(this.player.inventory);

    // Show loot panel
    this.lootPanel.show({
      ...gear,
      boss: boss.name
    });

    // Heal player
    this.player.health = this.player.maxHealth;

    this.hud.notify(`🏆 ${boss.name} defeated!`, 'success');
  }

  async _onMintNFT(gear) {
    this.lootPanel.setMintingState('minting');

    if (!this.wallet.isConnected) {
      try {
        await this.wallet.connect();
      } catch (err) {
        this.hud.notify('Connect wallet to mint NFT', 'danger');
        this.lootPanel.setMintingState('error');
        return;
      }
    }

    try {
      const result = await this.nftMinter.mint(gear);
      this.lootPanel.setMintingState('success');
      if (result.simulated) {
        this.hud.notify(`✨ NFT minted (simulated)! Token URI: ${result.tokenURI.slice(0, 30)}...`, 'success');
      } else {
        this.hud.notify(`✨ NFT minted! TX: ${result.txHash.slice(0, 20)}...`, 'success');
      }
    } catch (err) {
      console.error('Mint failed:', err);
      this.hud.notify('Minting failed: ' + (err.message || 'Unknown error'), 'danger');
      this.lootPanel.setMintingState('error');
    }
  }

  _onContinuePlaying() {
    this.state = 'playing';
    this.input.requestPointerLock();
  }

  _onRespawn() {
    this.deathScreen.classList.add('hidden');
    this.player.respawn();
    this.state = 'playing';

    // Reset active boss
    if (this.activeBoss) {
      this.activeBoss.deactivate();
      this.activeBoss.health = this.activeBoss.maxHealth;
      this.activeBoss = null;
    }

    this.input.requestPointerLock();
    this.hud.notify('You have been revived. Try again!', 'info');
  }

  _worldToScreen(worldPos) {
    const camera = this.player.getCamera();
    const vector = worldPos.clone();
    vector.y += 1.5;
    vector.project(camera);

    if (vector.z > 1) return null; // Behind camera

    const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-vector.y * 0.5 + 0.5) * window.innerWidth;

    // Add some randomness
    return {
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 20
    };
  }

  _onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.player.onResize();
  }
}
