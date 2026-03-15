/**
 * HUD — manages all HTML overlay UI elements
 */
export class HUD {
  constructor() {
    this.playerHealthBar = document.getElementById('player-health-bar');
    this.playerHealthText = document.getElementById('player-health-text');
    this.bossHud = document.getElementById('boss-hud');
    this.bossName = document.getElementById('boss-name');
    this.bossHealthBar = document.getElementById('boss-health-bar');
    this.swordIndicator = document.getElementById('sword-indicator');
    this.swordName = document.getElementById('sword-name');
    this.notificationContainer = document.getElementById('notification-container');
    this.gearSlots = document.getElementById('gear-slots');
    this.minimap = document.getElementById('minimap');
    this.minimapCtx = this.minimap ? this.minimap.getContext('2d') : null;
    this.hudEl = document.getElementById('hud');
  }

  show() {
    this.hudEl.classList.remove('hidden');
  }

  hide() {
    this.hudEl.classList.add('hidden');
  }

  updatePlayerHealth(current, max) {
    const pct = Math.max(0, current / max) * 100;
    this.playerHealthBar.style.width = pct + '%';
    this.playerHealthText.textContent = `${Math.round(current)} / ${max}`;

    // Color shift at low health
    if (pct < 30) {
      this.playerHealthBar.style.background = 'linear-gradient(90deg, #c0392b, #e74c3c)';
    } else if (pct < 60) {
      this.playerHealthBar.style.background = 'linear-gradient(90deg, #e67e22, #f39c12)';
    } else {
      this.playerHealthBar.style.background = 'linear-gradient(90deg, #e63946, #ff6b6b)';
    }
  }

  showBossHealth(name, healthPercent) {
    this.bossHud.classList.remove('hidden');
    this.bossName.textContent = name;
    this.bossHealthBar.style.width = (healthPercent * 100) + '%';
  }

  hideBossHealth() {
    this.bossHud.classList.add('hidden');
  }

  showSwordIndicator(name) {
    this.swordIndicator.classList.remove('hidden');
    this.swordName.textContent = '⚔ ' + name;
  }

  hideSwordIndicator() {
    this.swordIndicator.classList.add('hidden');
  }

  notify(message, type = 'default') {
    const el = document.createElement('div');
    el.className = `notification ${type}`;
    el.textContent = message;
    this.notificationContainer.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 3200);
  }

  updateGearSlots(inventory) {
    if (!this.gearSlots) return;
    const gearTypes = [
      { type: 'Chestplate', icon: '🛡️', label: 'Chestplate' },
      { type: 'Boots', icon: '👢', label: 'Boots' },
      { type: 'Sword', icon: '⚔️', label: 'Sword' }
    ];
    this.gearSlots.innerHTML = '';
    for (const g of gearTypes) {
      const slot = document.createElement('div');
      slot.className = 'gear-slot' + (inventory.hasGear(g.type) ? ' active' : '');
      slot.textContent = inventory.hasGear(g.type) ? g.icon : '·';
      slot.title = g.label;
      this.gearSlots.appendChild(slot);
    }
  }

  /**
   * Show floating damage number at screen position
   */
  showDamageNumber(screenX, screenY, damage, type = 'normal') {
    const el = document.createElement('div');
    el.className = 'damage-number' + (type === 'player' ? ' player-hit' : '') + (type === 'weak' ? ' weak' : '');
    el.textContent = type === 'weak' ? damage + ' (Weak!)' : damage;
    el.style.left = screenX + 'px';
    el.style.top = screenY + 'px';
    document.body.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1000);
  }

  /**
   * Draw minimap
   */
  updateMinimap(playerPos, caves, monsters) {
    if (!this.minimapCtx) return;
    const ctx = this.minimapCtx;
    const w = this.minimap.width;
    const h = this.minimap.height;
    const cx = w / 2;
    const cy = h / 2;
    const scale = 1.5;

    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.beginPath();
    ctx.arc(cx, cy, cx, 0, Math.PI * 2);
    ctx.fill();

    // Caves
    for (const cave of caves) {
      const dx = (cave.position.x - playerPos.x) * scale;
      const dz = (cave.position.z - playerPos.z) * scale;
      const mx = cx + dx;
      const my = cy + dz;
      if (mx > 0 && mx < w && my > 0 && my < h) {
        ctx.fillStyle = '#' + cave.color.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.arc(mx, my, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Living monsters (small dots)
    if (monsters) {
      for (const m of monsters) {
        if (m.isDead) continue;
        const dx = (m.position.x - playerPos.x) * scale;
        const dz = (m.position.z - playerPos.z) * scale;
        const mx = cx + dx;
        const my = cy + dz;
        if (mx > 4 && mx < w - 4 && my > 4 && my < h - 4) {
          ctx.fillStyle = '#e74c3c';
          ctx.beginPath();
          ctx.arc(mx, my, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Player (center)
    ctx.fillStyle = '#3498db';
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fill();

    // Border
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, cx - 1, 0, Math.PI * 2);
    ctx.stroke();
  }
}
