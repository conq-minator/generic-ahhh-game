import * as THREE from 'three';
import { AssetManager } from '../core/AssetManager.js';

/**
 * World — terrain, lighting, skybox, and cave placement
 */
export class World {
  constructor(scene) {
    this.scene = scene;
    this.caves = [];
    this._build();
  }

  _build() {
    // Fog
    this.scene.fog = new THREE.FogExp2(0x1a1a2e, 0.012);

    // Sky gradient
    const skyGeo = new THREE.SphereGeometry(200, 32, 32);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0x0a0a2e) },
        bottomColor: { value: new THREE.Color(0x1a1a3e) },
        offset: { value: 10 },
        exponent: { value: 0.6 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(200, 200, 40, 40);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x2d5a27,
      roughness: 0.95,
      metalness: 0.0
    });
    // Add slight height variation
    const posAttr = groundGeo.getAttribute('position');
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const noise = Math.sin(x * 0.3) * Math.cos(y * 0.3) * 0.4 +
                    Math.sin(x * 0.7 + 1.3) * Math.cos(y * 0.5 + 2.1) * 0.2;
      posAttr.setZ(i, noise);
    }
    groundGeo.computeVertexNormals();
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Central hub platform
    const hubGeo = new THREE.CylinderGeometry(5, 6, 0.5, 16);
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x4a4a5a, roughness: 0.7, metalness: 0.3 });
    const hub = new THREE.Mesh(hubGeo, hubMat);
    hub.position.y = 0.25;
    hub.receiveShadow = true;
    this.scene.add(hub);

    // Hub pillar / beacon
    const pillarGeo = new THREE.CylinderGeometry(0.3, 0.4, 3, 8);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0xf7c948, emissive: 0xf7c948, emissiveIntensity: 0.3 });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);
    pillar.position.y = 1.75;
    pillar.castShadow = true;
    this.scene.add(pillar);

    // Hub light
    const hubLight = new THREE.PointLight(0xf7c948, 3, 20);
    hubLight.position.set(0, 4, 0);
    this.scene.add(hubLight);

    // Ambient light
    const ambient = new THREE.AmbientLight(0x404060, 0.6);
    this.scene.add(ambient);

    // Directional light (sun)
    const sun = new THREE.DirectionalLight(0xfff4e6, 1.0);
    sun.position.set(30, 50, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 120;
    sun.shadow.camera.left = -60;
    sun.shadow.camera.right = 60;
    sun.shadow.camera.top = 60;
    sun.shadow.camera.bottom = -60;
    this.scene.add(sun);

    // Scatter rocks/trees for environment
    this._scatterProps();

    // Place 3 caves at equal angles
    this._placeCaves();
  }

  _scatterProps() {
    const rockGeo = new THREE.DodecahedronGeometry(0.5, 0);
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x5a5a5a, roughness: 0.9 });
    const treeGeo = new THREE.ConeGeometry(0.8, 2.5, 6);
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x1a5c1a, roughness: 0.8 });
    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.15, 1.0, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5d3a1a, roughness: 0.9 });

    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 15 + Math.random() * 60;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      if (Math.random() > 0.5) {
        // Rock
        const rock = new THREE.Mesh(rockGeo, rockMat);
        const s = 0.4 + Math.random() * 1.5;
        rock.scale.set(s, s * (0.5 + Math.random() * 0.5), s);
        rock.position.set(x, s * 0.2, z);
        rock.rotation.set(Math.random(), Math.random(), Math.random());
        rock.castShadow = true;
        rock.receiveShadow = true;
        this.scene.add(rock);
      } else {
        // Tree
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.set(x, 0.5, z);
        trunk.castShadow = true;
        this.scene.add(trunk);
        const leaves = new THREE.Mesh(treeGeo, treeMat);
        const s = 0.8 + Math.random() * 0.6;
        leaves.scale.set(s, s, s);
        leaves.position.set(x, 1.6 + s * 0.3, z);
        leaves.castShadow = true;
        this.scene.add(leaves);
      }
    }
  }

  _placeCaves() {
    const caveConfigs = [
      { id: 1, color: 0x00bcd4, angle: Math.PI / 2, dist: 40, label: 'Cave 1 — Defense' },
      { id: 2, color: 0x4caf50, angle: Math.PI / 2 + (2 * Math.PI / 3), dist: 40, label: 'Cave 2 — Speed' },
      { id: 3, color: 0xff5722, angle: Math.PI / 2 + (4 * Math.PI / 3), dist: 40, label: 'Cave 3 — Attack' }
    ];

    for (const cfg of caveConfigs) {
      const x = Math.cos(cfg.angle) * cfg.dist;
      const z = Math.sin(cfg.angle) * cfg.dist;

      const caveModel = AssetManager.createCaveModel(cfg.color);
      caveModel.position.set(x, 0, z);
      caveModel.lookAt(0, 0, 0); // Face center
      this.scene.add(caveModel);

      // Sign post
      const signGeo = new THREE.PlaneGeometry(3, 1);
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#222';
      ctx.fillRect(0, 0, 256, 64);
      ctx.fillStyle = '#' + cfg.color.toString(16).padStart(6, '0');
      ctx.font = 'bold 28px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(cfg.label, 128, 42);
      const signTex = new THREE.CanvasTexture(canvas);
      const signMat = new THREE.MeshBasicMaterial({ map: signTex, transparent: true });
      const sign = new THREE.Mesh(signGeo, signMat);
      // Position sign between hub and cave
      const sx = Math.cos(cfg.angle) * (cfg.dist - 10);
      const sz = Math.sin(cfg.angle) * (cfg.dist - 10);
      sign.position.set(sx, 3, sz);
      sign.lookAt(0, 3, 0);
      this.scene.add(sign);

      this.caves.push({
        id: cfg.id,
        position: new THREE.Vector3(x, 0, z),
        color: cfg.color,
        label: cfg.label,
        // Monster zone center is between hub and cave
        monsterZoneCenter: new THREE.Vector3(
          Math.cos(cfg.angle) * (cfg.dist - 12),
          0,
          Math.sin(cfg.angle) * (cfg.dist - 12)
        ),
        // Boss arena is inside cave
        bossPosition: new THREE.Vector3(
          Math.cos(cfg.angle) * (cfg.dist + 8),
          0,
          Math.sin(cfg.angle) * (cfg.dist + 8)
        ),
        angle: cfg.angle
      });
    }
  }

  getCaves() {
    return this.caves;
  }
}
