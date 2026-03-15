import * as THREE from 'three';

/**
 * AssetManager — procedural geometry factory for all game entities.
 * All models are built from basic Three.js geometry (no external files needed).
 */
export class AssetManager {

  /** Low-poly player model — capsule body with head */
  static createPlayerModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.CylinderGeometry(0.35, 0.4, 1.2, 8);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x3498db, roughness: 0.6, metalness: 0.2 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.6;
    group.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.28, 8, 8);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffc8a2, roughness: 0.7 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.45;
    group.add(head);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.05, 6, 6);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.1, 1.5, 0.25);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.1, 1.5, 0.25);
    group.add(leftEye, rightEye);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.1, 0.08, 0.7, 6);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x2980b9, roughness: 0.6 });
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.5, 0.7, 0);
    leftArm.rotation.z = 0.3;
    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.5, 0.7, 0);
    rightArm.rotation.z = -0.3;
    group.add(leftArm, rightArm);

    // Default sword (small)
    const swordGroup = AssetManager.createBasicSword(0x999999);
    swordGroup.position.set(0.6, 0.5, 0.2);
    swordGroup.rotation.z = -0.5;
    swordGroup.name = 'weapon';
    group.add(swordGroup);

    group.castShadow = true;
    group.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
    return group;
  }

  static createBasicSword(color) {
    const group = new THREE.Group();
    // Blade
    const bladeGeo = new THREE.BoxGeometry(0.06, 0.8, 0.04);
    const bladeMat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.8 });
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.4;
    group.add(blade);
    // Handle
    const handleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 6);
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.8 });
    const handle = new THREE.Mesh(handleGeo, handleMat);
    group.add(handle);
    // Guard
    const guardGeo = new THREE.BoxGeometry(0.2, 0.04, 0.06);
    const guardMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.4, metalness: 0.6 });
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.position.y = 0.08;
    group.add(guard);
    return group;
  }

  /** Sword models per cave type */
  static createSwordDrop(type) {
    const colors = {
      'defense-breaker': 0x00bcd4,
      'speed-counter': 0x4caf50,
      'power-counter': 0xff5722
    };
    const group = AssetManager.createBasicSword(colors[type] || 0xffffff);
    group.scale.set(1.5, 1.5, 1.5);

    // Glow ring
    const ringGeo = new THREE.TorusGeometry(0.5, 0.05, 8, 16);
    const ringMat = new THREE.MeshStandardMaterial({
      color: colors[type] || 0xffffff,
      emissive: colors[type] || 0xffffff,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.6
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.1;
    group.add(ring);

    return group;
  }

  /** Monster model — spiky red creature */
  static createMonsterModel() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.DodecahedronGeometry(0.5, 0);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.5 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.5;
    group.add(body);

    // Eyes — glowing
    const eyeGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 0.6 });
    const le = new THREE.Mesh(eyeGeo, eyeMat);
    le.position.set(-0.18, 0.6, 0.4);
    const re = new THREE.Mesh(eyeGeo, eyeMat);
    re.position.set(0.18, 0.6, 0.4);
    group.add(le, re);

    // Spikes
    const spikeGeo = new THREE.ConeGeometry(0.08, 0.3, 4);
    const spikeMat = new THREE.MeshStandardMaterial({ color: 0x922b21 });
    for (let i = 0; i < 5; i++) {
      const spike = new THREE.Mesh(spikeGeo, spikeMat);
      const angle = (i / 5) * Math.PI * 2;
      spike.position.set(Math.cos(angle) * 0.45, 0.9, Math.sin(angle) * 0.45);
      spike.rotation.x = Math.cos(angle) * 0.5;
      spike.rotation.z = Math.sin(angle) * 0.5;
      group.add(spike);
    }

    group.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
    return group;
  }

  static createDefenseBossModel() {
    const group = new THREE.Group();
    const bodyColor = 0x2c3e50; // Dark heavy metal
    
    // Core body (Minotaur/Heavy Armor)
    const mat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.7,
      metalness: 0.6,
      emissive: bodyColor,
      emissiveIntensity: 0.1
    });

    // Bulky Box Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.5, 1.5), mat);
    torso.position.y = 1.25;
    group.add(torso);

    // Heavy Shoulder Pads
    const shoulderMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d, metalness: 0.8, roughness: 0.4 });
    const lShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.8, 8, 8), shoulderMat);
    lShoulder.position.set(-1.2, 2.2, 0);
    const rShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.8, 8, 8), shoulderMat);
    rShoulder.position.set(1.2, 2.2, 0);
    group.add(lShoulder, rShoulder);

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.2), mat);
    head.position.y = 3.0;
    group.add(head);

    // Minotaur Horns
    const hornGeo = new THREE.ConeGeometry(0.2, 1.0, 4);
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7 });
    const lHorn = new THREE.Mesh(hornGeo, hornMat);
    lHorn.position.set(-0.6, 3.4, 0.2);
    lHorn.rotation.z = 0.5;
    lHorn.rotation.x = -0.3;
    const rHorn = new THREE.Mesh(hornGeo, hornMat);
    rHorn.position.set(0.6, 3.4, 0.2);
    rHorn.rotation.z = -0.5;
    rHorn.rotation.x = -0.3;
    group.add(lHorn, rHorn);

    // Red Glowing Eyes
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 2.0 });
    const lEye = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), eyeMat);
    lEye.position.set(-0.25, 3.2, 0.6);
    const rEye = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), eyeMat);
    rEye.position.set(0.25, 3.2, 0.6);
    group.add(lEye, rEye);
    
    group.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
    return group;
  }

  static createSpeedBossModel() {
    const group = new THREE.Group();
    const bodyColor = 0x27ae60; // Energetic green
    
    // Slender Body
    const mat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.3,
      metalness: 0.2,
      emissive: bodyColor,
      emissiveIntensity: 0.2
    });

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.2, 2.5, 8), mat);
    torso.position.y = 1.25;
    group.add(torso);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), mat);
    head.position.y = 2.75;
    group.add(head);

    // Wings (Flattened Cones)
    const wingGeo = new THREE.ConeGeometry(1.5, 4.0, 4);
    const wingMat = new THREE.MeshStandardMaterial({ 
      color: 0x2ecc71, 
      emissive: 0x2ecc71, 
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.7
    });

    const lWing = new THREE.Mesh(wingGeo, wingMat);
    lWing.scale.z = 0.1; // flatten
    lWing.position.set(-1.5, 1.5, -0.5);
    lWing.rotation.z = Math.PI / 4;
    lWing.rotation.y = -0.2;

    const rWing = new THREE.Mesh(wingGeo, wingMat);
    rWing.scale.z = 0.1; // flatten
    rWing.position.set(1.5, 1.5, -0.5);
    rWing.rotation.z = -Math.PI / 4;
    rWing.rotation.y = 0.2;

    group.add(lWing, rWing);

    // Multi-eyes
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 1.5 });
    for (let i = -1; i <= 1; i++) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), eyeMat);
      eye.position.set(i * 0.2, 2.8, 0.45);
      group.add(eye);
    }
    
    group.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
    return group;
  }

  static createAttackBossModel() {
    const group = new THREE.Group();
    const bodyColor = 0x8e44ad; // Purple/Red demon
    
    // Tall Muscular Body (Cone + Cylinder)
    const mat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.5,
      metalness: 0.5,
      emissive: 0x4a235a,
      emissiveIntensity: 0.4
    });

    const chest = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.6, 1.5, 8), mat);
    chest.position.y = 2.0;
    group.add(chest);

    const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 1.2, 8), mat);
    legs.position.y = 0.6;
    group.add(legs);

    // Head with Spikes
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), mat);
    head.position.y = 3.1;
    group.add(head);

    // Crown/Spikes
    const spikeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    for(let i=0; i<3; i++) {
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 4), spikeMat);
        spike.position.set((i-1)*0.3, 3.6, 0);
        group.add(spike);
    }

    // Glowing Eyes
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff3300, emissive: 0xff3300, emissiveIntensity: 2.0 });
    const lEye = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.1), eyeMat);
    lEye.position.set(-0.25, 3.1, 0.4);
    lEye.rotation.z = -0.2;
    const rEye = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.1), eyeMat);
    rEye.position.set(0.25, 3.1, 0.4);
    rEye.rotation.z = 0.2;
    group.add(lEye, rEye);

    // Giant Sword in hand
    const sword = AssetManager.createBasicSword(0xff0000); // Red sword
    sword.scale.set(4.0, 5.0, 4.0);
    sword.position.set(1.5, 1.5, 1.0);
    sword.rotation.x = Math.PI / 4;
    
    // Extra glow on boss sword
    const glowGeo = new THREE.BoxGeometry(0.4, 4.2, 0.2);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.y = 2.0;
    sword.add(glow);

    group.add(sword);

    group.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
    return group;
  }

  /** Gear drop models */
  static createGearModel(type) {
    const group = new THREE.Group();

    if (type === 'armor') {
      // Chest plate
      const plateGeo = new THREE.BoxGeometry(0.8, 0.9, 0.4);
      const plateMat = new THREE.MeshStandardMaterial({ color: 0x95a5a6, roughness: 0.3, metalness: 0.8 });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.y = 0.5;
      group.add(plate);
      // Shoulder pads
      const padGeo = new THREE.SphereGeometry(0.2, 8, 8);
      const lPad = new THREE.Mesh(padGeo, plateMat);
      lPad.position.set(-0.55, 0.8, 0);
      const rPad = new THREE.Mesh(padGeo, plateMat);
      rPad.position.set(0.55, 0.8, 0);
      group.add(lPad, rPad);
    } else if (type === 'boots') {
      // Boots
      const bootGeo = new THREE.BoxGeometry(0.3, 0.25, 0.5);
      const bootMat = new THREE.MeshStandardMaterial({
        color: 0x27ae60,
        emissive: 0x27ae60,
        emissiveIntensity: 0.3,
        roughness: 0.4,
        metalness: 0.5
      });
      const lBoot = new THREE.Mesh(bootGeo, bootMat);
      lBoot.position.set(-0.25, 0.12, 0);
      const rBoot = new THREE.Mesh(bootGeo, bootMat);
      rBoot.position.set(0.25, 0.12, 0);
      group.add(lBoot, rBoot);
    } else if (type === 'legendary-sword') {
      const sword = AssetManager.createBasicSword(0xff6b35);
      sword.scale.set(2.0, 2.0, 2.0);
      group.add(sword);
    }

    // Glow
    const glowGeo = new THREE.RingGeometry(0.6, 0.9, 16);
    const glowMat = new THREE.MeshStandardMaterial({
      color: 0xf7c948,
      emissive: 0xf7c948,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.02;
    group.add(glow);

    group.traverse(c => { if (c.isMesh) { c.castShadow = true; } });
    return group;
  }

  /** Cave entrance model */
  static createCaveModel(colorHex) {
    const group = new THREE.Group();

    // Cave mouth — arch
    const archShape = new THREE.Shape();
    archShape.moveTo(-3, 0);
    archShape.lineTo(-3, 3);
    archShape.quadraticCurveTo(-3, 5, 0, 5.5);
    archShape.quadraticCurveTo(3, 5, 3, 3);
    archShape.lineTo(3, 0);
    archShape.lineTo(-3, 0);

    const archGeo = new THREE.ExtrudeGeometry(archShape, { depth: 3, bevelEnabled: false });
    const archMat = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.9 });
    const arch = new THREE.Mesh(archGeo, archMat);
    arch.position.z = -1.5;
    group.add(arch);

    // Inner darkness
    const innerGeo = new THREE.PlaneGeometry(5, 5);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    inner.position.set(0, 2.5, -1.4);
    group.add(inner);

    // Color accent crystals
    const crystalGeo = new THREE.ConeGeometry(0.3, 1.2, 5);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      emissive: colorHex,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.8
    });
    for (let i = 0; i < 4; i++) {
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      const side = i < 2 ? -1 : 1;
      crystal.position.set(side * (2.8 + Math.random() * 0.5), 1 + Math.random() * 2, -0.5);
      crystal.rotation.z = side * (0.2 + Math.random() * 0.3);
      crystal.rotation.x = Math.random() * 0.3;
      group.add(crystal);
    }

    // Cave number marker (point light)
    const light = new THREE.PointLight(colorHex, 2, 10);
    light.position.set(0, 3, 0);
    group.add(light);

    group.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
    return group;
  }
}
