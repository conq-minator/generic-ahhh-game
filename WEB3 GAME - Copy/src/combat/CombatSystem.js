/**
 * CombatSystem — resolves all player/enemy hit detection and damage
 */
export class CombatSystem {
  constructor() {
    this.damageNumbers = [];
  }

  /**
   * Check player attack vs enemies (monsters + boss)
   * Returns array of { target, damage }
   */
  resolvePlayerAttack(player, monsters, boss) {
    const hits = [];
    const hitbox = player.getAttackHitbox();
    if (!hitbox) return hits;

    // VS Monsters
    for (const monster of monsters) {
      if (monster.isDead) continue;
      const dist = hitbox.center.distanceTo(monster.position);
      if (dist < hitbox.radius + 0.5) {
        const dmg = player.getDamage(null); // No weakness for monsters
        monster.takeDamage(dmg);
        player.hasHitThisSwing = true;
        hits.push({
          target: monster,
          damage: Math.round(dmg),
          position: monster.position.clone(),
          isBoss: false
        });
      }
    }

    // VS Boss
    if (boss && boss.isActive && !boss.isDead) {
      const dist = hitbox.center.distanceTo(boss.position);
      if (dist < hitbox.radius + 1.5) {
        const rawDmg = player.getDamage(boss.weakness);
        const actualDmg = boss.takeDamage(rawDmg);
        player.hasHitThisSwing = true;
        const isWeak = rawDmg < player.baseDamage * 0.5;
        hits.push({
          target: boss,
          damage: Math.round(actualDmg),
          position: boss.position.clone(),
          isBoss: true,
          isWeakHit: isWeak
        });
      }
    }

    return hits;
  }

  /**
   * Check Fuga arrow hit vs all enemies at a specific 3D position
   */
  resolveFugaHit(arrowPos, monsters, boss) {
    // VS Monsters (radius ~1.5)
    for (const monster of monsters) {
      if (monster.isDead) continue;
      if (arrowPos.distanceTo(monster.position) < 2.0) {
        monster.takeDamage(100); // Fuga 100 true damage
        return {
          target: monster,
          damage: 100,
          position: monster.position.clone(),
          isBoss: false,
          isWeakHit: false
        };
      }
    }

    // VS Boss (radius ~3.5)
    if (boss && boss.isActive && !boss.isDead) {
      if (arrowPos.distanceTo(boss.position) < 4.0) {
        boss.takeDamage(100);
        return {
          target: boss,
          damage: 100,
          position: boss.position.clone(),
          isBoss: true,
          isWeakHit: false
        };
      }
    }

    return null;
  }

  /**
   * Check enemy attacks vs player
   * Returns array of { source, damage }
   */
  resolveEnemyAttacks(player, monsters, boss) {
    const hits = [];

    if (player.isDead || player.isInvincible) return hits;

    // Monster attacks
    for (const monster of monsters) {
      if (monster.isDead) continue;
      if (monster.consumeAttack()) {
        const dist = player.position.distanceTo(monster.position);
        if (dist < monster.attackRadius + 0.5) {
          const didHit = player.takeDamage(monster.damage);
          if (didHit) {
            hits.push({
              source: monster,
              damage: monster.damage,
              position: player.position.clone()
            });
          }
        }
      }
    }

    // Boss attacks
    if (boss && boss.isActive && !boss.isDead && boss.attackHitbox) {
      const dist = player.position.distanceTo(boss.attackHitbox.center);
      if (dist < boss.attackHitbox.radius) {
        const didHit = player.takeDamage(boss.attackHitbox.damage);
        if (didHit) {
          hits.push({
            source: boss,
            damage: boss.attackHitbox.damage,
            position: player.position.clone()
          });
        }
      }
    }

    return hits;
  }
}
