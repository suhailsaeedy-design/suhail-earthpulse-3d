import * as THREE from '../vendor/three.module.js';
import { OrbitControls } from '../vendor/addons/controls/OrbitControls.js';
import { EVENT_COLORS, FEATURED_STARS, PLANETS, MOON, GALAXIES } from './data.js';

const EARTH_RADIUS = 2.35;

function makeGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64,64,2,64,64,60);
  g.addColorStop(0,'rgba(255,255,255,1)');
  g.addColorStop(.12,'rgba(255,255,255,.95)');
  g.addColorStop(.35,'rgba(145,208,255,.42)');
  g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,128,128);
  return new THREE.CanvasTexture(canvas);
}

function makeEarthFallbackTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const grd = ctx.createLinearGradient(0,0,0,512);
  grd.addColorStop(0,'#15377d');
  grd.addColorStop(.55,'#0b2a67');
  grd.addColorStop(1,'#071838');
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,1024,512);
  ctx.globalAlpha = .92;
  ctx.fillStyle = '#3a7c57';
  for (let i=0;i<30;i++) {
    const x=Math.random()*1024,y=Math.random()*512,w=40+Math.random()*100,h=20+Math.random()*55;
    ctx.beginPath(); ctx.ellipse(x,y,w,h,Math.random()*Math.PI,0,Math.PI*2); ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
}

function sunCorePulse(group,t) {
  const glow=group?.children?.[1];
  if(!glow) return;
  const s=6.4 + Math.sin(t*1.7)*.28;
  glow.scale.setScalar(s);
  glow.material.opacity=.7 + Math.sin(t*1.3)*.08;
}

export class EarthSpaceScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.mode = 'earth';
    this.eventMeshes = [];
    this.starMeshes = new Map();
    this.planetNodes = new Map();
    this.planetMeshes = [];
    this.galaxyNodes = new Map();
    this.galaxyMeshes = [];
    this.solarPaused = false;
    this.pointerGesture = {down:false,x:0,y:0,moved:false};
    this.textureLoader = new THREE.TextureLoader();
    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.clock = new THREE.Clock();
    this.tween = null;
    this.glowTexture = makeGlowTexture();
    const memory = Number(navigator.deviceMemory || 8);
    const compact = innerWidth < 760;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.performanceTier = (compact || memory <= 4) ? 'balanced' : 'high';
    this.reducedMotion = reducedMotion;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x02050e, 0.012);
    this.camera = new THREE.PerspectiveCamera(42, innerWidth/innerHeight, 0.1, 400);
    this.camera.position.set(0.8, 0.35, 7.6);

    this.renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.performanceTier==='balanced' ? 1.35 : 1.8));
    this.renderer.setSize(innerWidth, innerHeight, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = .05;
    this.controls.enablePan = false;
    this.controls.minDistance = 3.3;
    this.controls.maxDistance = 50;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = this.reducedMotion ? 0 : .28;
    this.controls.rotateSpeed = .38;
    this.controls.zoomSpeed = .7;

    this.buildLights();
    this.buildStars();
    this.buildGalaxy();
    this.buildGalaxyDestinations();
    this.buildEarth();
    this.buildFeaturedStars();
    this.buildSolarSystem();
    this.bindEvents();
    this.animate();
  }

  buildLights() {
    this.scene.add(new THREE.AmbientLight(0x6e8ed0, .42));
    const sun = new THREE.DirectionalLight(0xffffff, 3.4);
    sun.position.set(-5, 3, 6);
    this.scene.add(sun);
    const rim = new THREE.PointLight(0x4fa4ff, 8, 28, 2);
    rim.position.set(6, -2, -5);
    this.scene.add(rim);
  }

  buildStars() {
    const count = this.performanceTier==='balanced' ? 1800 : 4800;
    const positions = new Float32Array(count*3);
    const colors = new Float32Array(count*3);
    const color = new THREE.Color();
    for (let i=0;i<count;i++) {
      const radius = 32 + Math.random()*150;
      const theta = Math.random()*Math.PI*2;
      const phi = Math.acos(2*Math.random()-1);
      positions[i*3] = radius*Math.sin(phi)*Math.cos(theta);
      positions[i*3+1] = radius*Math.cos(phi);
      positions[i*3+2] = radius*Math.sin(phi)*Math.sin(theta);
      const r = Math.random();
      color.set(r>.82 ? 0xa9caff : r>.62 ? 0xffe4c2 : 0xffffff);
      colors[i*3]=color.r; colors[i*3+1]=color.g; colors[i*3+2]=color.b;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
    geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
    const material = new THREE.PointsMaterial({size:.065,vertexColors:true,transparent:true,opacity:.92,sizeAttenuation:true,depthWrite:false,blending:THREE.AdditiveBlending});
    this.starField = new THREE.Points(geometry,material);
    this.scene.add(this.starField);
  }

  buildGalaxy() {
    const count = this.performanceTier==='balanced' ? 1500 : 4200;
    const positions = new Float32Array(count*3);
    const colors = new Float32Array(count*3);
    const c1 = new THREE.Color(0x5aa8ff);
    const c2 = new THREE.Color(0xb879ff);
    for (let i=0;i<count;i++) {
      const radius = 4 + Math.pow(Math.random(),.65)*34;
      const branch = i%4;
      const angle = branch*Math.PI/2 + radius*.34 + (Math.random()-.5)*.72;
      positions[i*3] = Math.cos(angle)*radius;
      positions[i*3+1] = (Math.random()-.5)*(1.1+radius*.06);
      positions[i*3+2] = Math.sin(angle)*radius;
      const c = c1.clone().lerp(c2, Math.random());
      colors[i*3]=c.r; colors[i*3+1]=c.g; colors[i*3+2]=c.b;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
    geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
    const material = new THREE.PointsMaterial({size:.065,vertexColors:true,transparent:true,opacity:.12,depthWrite:false,blending:THREE.AdditiveBlending});
    this.galaxy = new THREE.Points(geometry,material);
    this.galaxy.rotation.x = .24;
    this.scene.add(this.galaxy);
  }

  buildGalaxyDestinations() {
    this.galaxyDestinationGroup = new THREE.Group();
    this.galaxyDestinationGroup.visible = false;
    this.scene.add(this.galaxyDestinationGroup);

    GALAXIES.forEach((galaxy,index) => {
      const group = new THREE.Group();
      group.position.set(...galaxy.position);
      group.userData.galaxyId = galaxy.id;

      const count = this.performanceTier==='balanced' ? 500 : 1100;
      const positions = new Float32Array(count*3);
      const colors = new Float32Array(count*3);
      const base = new THREE.Color(galaxy.color);
      for(let i=0;i<count;i++) {
        const r = Math.pow(Math.random(),.58)*galaxy.scale;
        const branch = i%3;
        const angle = branch*(Math.PI*2/3) + r*.58 + (Math.random()-.5)*.72;
        positions[i*3] = Math.cos(angle)*r;
        positions[i*3+1] = (Math.random()-.5)*(galaxy.scale*.12 + r*.025);
        positions[i*3+2] = Math.sin(angle)*r;
        const cc=base.clone().lerp(new THREE.Color(0xffffff),Math.random()*.42);
        colors[i*3]=cc.r; colors[i*3+1]=cc.g; colors[i*3+2]=cc.b;
      }
      const geometry=new THREE.BufferGeometry();
      geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
      geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
      const cloud=new THREE.Points(geometry,new THREE.PointsMaterial({
        size:.07,vertexColors:true,transparent:true,opacity:.82,depthWrite:false,blending:THREE.AdditiveBlending
      }));
      cloud.userData.galaxyId=galaxy.id;
      group.add(cloud);

      const hit=new THREE.Mesh(
        new THREE.SphereGeometry(Math.max(1.2,galaxy.scale*.35),18,12),
        new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false})
      );
      hit.userData.galaxyId=galaxy.id;
      group.add(hit);
      this.galaxyMeshes.push(hit);

      this.galaxyDestinationGroup.add(group);
      this.galaxyNodes.set(galaxy.id,{group,data:galaxy});
    });
  }

  buildEarth() {
    this.earthGroup = new THREE.Group();
    this.scene.add(this.earthGroup);

    const geometry = new THREE.SphereGeometry(EARTH_RADIUS, 128, 96);
    const material = new THREE.MeshPhongMaterial({
      map: makeEarthFallbackTexture(),
      shininess: 12,
      specular: new THREE.Color(0x294b72),
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: .18
    });
    this.earth = new THREE.Mesh(geometry, material);
    this.earthGroup.add(this.earth);

    const maxAniso = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    this.textureLoader.load('./public/textures/earth-day.jpg', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = maxAniso;
      this.earth.material.map = texture;
      this.earth.material.needsUpdate = true;
    }, undefined, () => {
      this.textureLoader.load('./public/earth-blue-marble.jpg', (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = maxAniso;
        this.earth.material.map = texture;
        this.earth.material.needsUpdate = true;
      });
    });

    this.textureLoader.load('./public/textures/earth-night.jpg', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = maxAniso;
      this.earth.material.emissiveMap = texture;
      this.earth.material.emissive = new THREE.Color(0xffffff);
      this.earth.material.emissiveIntensity = .42;
      this.earth.material.needsUpdate = true;
    }, undefined, () => {});

    this.cloudLayer = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_RADIUS*1.012, 112, 80),
      new THREE.MeshPhongMaterial({
        color:0xffffff,
        transparent:true,
        opacity:.42,
        depthWrite:false,
        side:THREE.DoubleSide
      })
    );
    this.earthGroup.add(this.cloudLayer);
    this.textureLoader.load('./public/textures/earth-clouds.jpg', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = maxAniso;
      this.cloudLayer.material.map = texture;
      this.cloudLayer.material.alphaMap = texture;
      this.cloudLayer.material.needsUpdate = true;
    }, undefined, () => {
      this.cloudLayer.visible = false;
    });

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_RADIUS*1.045,112,80),
      new THREE.ShaderMaterial({
        transparent:true,
        side:THREE.BackSide,
        blending:THREE.AdditiveBlending,
        depthWrite:false,
        uniforms:{ glowColor:{value:new THREE.Color(0x4ba8ff)}, intensity:{value:1.0} },
        vertexShader:`varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
        fragmentShader:`varying vec3 vNormal; uniform vec3 glowColor; uniform float intensity; void main(){ float a=pow(0.68-dot(vNormal,vec3(0.0,0.0,1.0)),2.25)*intensity; gl_FragColor=vec4(glowColor,a*.62); }`
      })
    );
    this.atmosphere = atmosphere;
    this.earthGroup.add(atmosphere);

    this.markerGroup = new THREE.Group();
    this.earthGroup.add(this.markerGroup);
  }

  buildFeaturedStars() {
    this.featuredGroup = new THREE.Group();
    this.scene.add(this.featuredGroup);
    FEATURED_STARS.forEach((star) => {
      const group = new THREE.Group();
      group.position.set(...star.position);
      group.userData.starId = star.id;
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(star.size,48,32),
        new THREE.MeshBasicMaterial({color:star.threeColor})
      );
      core.userData.starId = star.id;
      group.add(core);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({map:this.glowTexture,color:star.threeColor,transparent:true,opacity:.72,depthWrite:false,blending:THREE.AdditiveBlending}));
      glow.scale.setScalar(star.size*5.2);
      glow.userData.starId = star.id;
      group.add(glow);
      const ring = new THREE.Mesh(new THREE.RingGeometry(star.size*1.35,star.size*1.48,64),new THREE.MeshBasicMaterial({color:star.threeColor,transparent:true,opacity:.16,side:THREE.DoubleSide,depthWrite:false}));
      ring.rotation.x = Math.PI/2.4;
      group.add(ring);
      group.visible = false;
      this.featuredGroup.add(group);
      this.starMeshes.set(star.id,group);
    });
  }

  buildSolarSystem() {
    this.solarGroup = new THREE.Group();
    this.solarGroup.visible = false;
    this.scene.add(this.solarGroup);

    const sunMaterial = new THREE.MeshBasicMaterial({color:0xffc85f});
    const sunCore = new THREE.Mesh(
      new THREE.SphereGeometry(.82, 72, 48),
      sunMaterial
    );
    this.solarGroup.add(sunCore);
    this.textureLoader.load('./public/textures/sun.jpg', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      sunMaterial.map=texture;
      sunMaterial.needsUpdate=true;
    }, undefined, () => {});

    const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map:this.glowTexture,
      color:0xffb84d,
      transparent:true,
      opacity:.78,
      depthWrite:false,
      blending:THREE.AdditiveBlending
    }));
    sunGlow.scale.setScalar(6.4);
    this.solarGroup.add(sunGlow);

    const solarLight = new THREE.PointLight(0xffddb0, 13, 48, 1.35);
    this.solarGroup.add(solarLight);

    PLANETS.forEach((planet,index) => {
      const orbitPoints=[];
      for(let i=0;i<180;i++) {
        const a=(i/180)*Math.PI*2;
        orbitPoints.push(new THREE.Vector3(Math.cos(a)*planet.orbit,0,Math.sin(a)*planet.orbit));
      }
      const orbitGeometry=new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitLine=new THREE.LineLoop(
        orbitGeometry,
        new THREE.LineBasicMaterial({color:0x7892bf,transparent:true,opacity:.10})
      );
      this.solarGroup.add(orbitLine);

      const pivot=new THREE.Group();
      pivot.rotation.y=index*.72+.35;
      pivot.userData.baseAngle=pivot.rotation.y;
      pivot.userData.speed=planet.speed;

      const group=new THREE.Group();
      group.position.set(planet.orbit,0,0);
      group.userData.planetId=planet.id;

      const planetMaterial=new THREE.MeshPhongMaterial({
        color:0xffffff,
        shininess:planet.id==='earth' ? 22 : 6,
        specular:new THREE.Color(planet.id==='earth' ? 0x426b91 : 0x222222),
        emissive:new THREE.Color(0x050505),
        emissiveIntensity:.05
      });
      const core=new THREE.Mesh(new THREE.SphereGeometry(planet.size,56,36),planetMaterial);
      core.userData.planetId=planet.id;
      group.add(core);
      this.planetMeshes.push(core);

      if(planet.texture) {
        this.textureLoader.load(planet.texture,(texture)=>{
          texture.colorSpace=THREE.SRGBColorSpace;
          texture.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());
          planetMaterial.map=texture;
          planetMaterial.needsUpdate=true;
        },undefined,()=>{ planetMaterial.color.set(planet.threeColor); });
      } else {
        planetMaterial.color.set(planet.threeColor);
      }

      if(planet.id==='earth') {
        if(planet.nightTexture) {
          this.textureLoader.load(planet.nightTexture,(texture)=>{
            texture.colorSpace=THREE.SRGBColorSpace;
            planetMaterial.emissiveMap=texture;
            planetMaterial.emissive=new THREE.Color(0xffffff);
            planetMaterial.emissiveIntensity=.28;
            planetMaterial.needsUpdate=true;
          },undefined,()=>{});
        }
        if(planet.cloudTexture) {
          const clouds=new THREE.Mesh(
            new THREE.SphereGeometry(planet.size*1.012,48,32),
            new THREE.MeshPhongMaterial({color:0xffffff,transparent:true,opacity:.38,depthWrite:false})
          );
          group.add(clouds);
          this.textureLoader.load(planet.cloudTexture,(texture)=>{
            texture.colorSpace=THREE.SRGBColorSpace;
            clouds.material.map=texture;
            clouds.material.alphaMap=texture;
            clouds.material.needsUpdate=true;
          },undefined,()=>{ clouds.visible=false; });
        }

        const moonOrbit=new THREE.Mesh(
          new THREE.RingGeometry(planet.size*2.5,planet.size*2.52,64),
          new THREE.MeshBasicMaterial({color:0x96a6c2,transparent:true,opacity:.16,side:THREE.DoubleSide,depthWrite:false})
        );
        moonOrbit.rotation.x=Math.PI/2;
        group.add(moonOrbit);

        const moonPivot=new THREE.Group();
        moonPivot.userData.baseAngle=1.2;
        moonPivot.userData.speed=.72;
        const moonGroup=new THREE.Group();
        moonGroup.position.set(planet.size*2.52,0,0);
        moonGroup.userData.planetId='moon';
        const moonMaterial=new THREE.MeshPhongMaterial({color:0xd6d7d9,shininess:2});
        const moonCore=new THREE.Mesh(new THREE.SphereGeometry(MOON.size,40,28),moonMaterial);
        moonCore.userData.planetId='moon';
        moonGroup.add(moonCore);
        this.planetMeshes.push(moonCore);
        this.textureLoader.load(MOON.texture,(texture)=>{
          texture.colorSpace=THREE.SRGBColorSpace;
          moonMaterial.map=texture;
          moonMaterial.needsUpdate=true;
        },undefined,()=>{});
        moonPivot.add(moonGroup);
        group.add(moonPivot);
        this.planetNodes.set('moon',{pivot:moonPivot,group:moonGroup,data:MOON});
      }

      const glow=new THREE.Sprite(new THREE.SpriteMaterial({
        map:this.glowTexture,
        color:planet.threeColor,
        transparent:true,
        opacity:.20,
        depthWrite:false,
        blending:THREE.AdditiveBlending
      }));
      glow.scale.setScalar(Math.max(.65,planet.size*2.8));
      group.add(glow);

      if(planet.rings) {
        const ringMaterial=new THREE.MeshBasicMaterial({
          color:0xffffff,
          transparent:true,
          opacity:.72,
          side:THREE.DoubleSide,
          depthWrite:false
        });
        const ring=new THREE.Mesh(new THREE.RingGeometry(planet.size*1.35,planet.size*2.2,96),ringMaterial);
        ring.rotation.x=Math.PI/2.28;
        group.add(ring);
        if(planet.ringTexture) {
          this.textureLoader.load(planet.ringTexture,(texture)=>{
            texture.colorSpace=THREE.SRGBColorSpace;
            ringMaterial.map=texture;
            ringMaterial.alphaMap=texture;
            ringMaterial.needsUpdate=true;
          },undefined,()=>{ ringMaterial.color.set(0xd8c7a3); });
        }
      }

      pivot.add(group);
      this.solarGroup.add(pivot);
      this.planetNodes.set(planet.id,{pivot,group,data:planet});
    });
  }

  bindEvents() {
    addEventListener('resize', () => this.resize(), {passive:true});
    this.canvas.addEventListener('pointerdown', (e) => {
      this.pointerGesture={down:true,x:e.clientX,y:e.clientY,moved:false};
    }, {passive:true});
    this.canvas.addEventListener('pointermove', (e) => {
      if(!this.pointerGesture.down) return;
      const dx=e.clientX-this.pointerGesture.x;
      const dy=e.clientY-this.pointerGesture.y;
      if(Math.hypot(dx,dy)>8) this.pointerGesture.moved=true;
    }, {passive:true});
    this.canvas.addEventListener('pointercancel', () => {
      this.pointerGesture.down=false;
      this.pointerGesture.moved=false;
    }, {passive:true});
    this.canvas.addEventListener('pointerup', (e) => {
      const moved=this.pointerGesture.moved;
      this.pointerGesture.down=false;
      this.pointerGesture.moved=false;
      if(!moved) this.onPointer(e);
    });
  }

  setEvents(events) {
    while(this.markerGroup.children.length) this.markerGroup.remove(this.markerGroup.children[0]);
    this.eventMeshes=[];
    events.slice(0,160).forEach((event,index) => {
      const color = EVENT_COLORS[event.type] || EVENT_COLORS.other;
      const pos = this.latLonToVector3(event.lat,event.lon,EARTH_RADIUS*1.018);
      const group = new THREE.Group();
      group.position.copy(pos);
      group.lookAt(pos.clone().multiplyScalar(2));
      group.userData.event = event;

      const size = event.type==='earthquake' ? .032 + Math.min(Math.max(event.magnitude || 1,1),7)*.007 : .055;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(size,14,10),new THREE.MeshBasicMaterial({color}));
      dot.userData.event=event;
      group.add(dot);

      const ring = new THREE.Mesh(new THREE.RingGeometry(size*1.8,size*2.15,28),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.5,side:THREE.DoubleSide,depthWrite:false}));
      ring.userData.event=event;
      ring.userData.phase=Math.random()*Math.PI*2;
      group.add(ring);

      if(index<55) {
        const glow = new THREE.Sprite(new THREE.SpriteMaterial({map:this.glowTexture,color,transparent:true,opacity:.4,depthWrite:false,blending:THREE.AdditiveBlending}));
        glow.scale.setScalar(size*7);
        glow.userData.event=event;
        group.add(glow);
      }
      this.markerGroup.add(group);
      this.eventMeshes.push(...group.children);
    });
  }

  setFilteredEventTypes(types) {
    this.markerGroup.children.forEach((g) => {
      const type=g.userData.event?.type || 'other';
      g.visible = !types || types.has(type);
    });
  }

  setMode(mode) {
    this.mode=mode;
    const space=mode==='space';
    const system=mode==='system';

    this.controls.autoRotate=!this.reducedMotion && !space && !system;
    this.controls.minDistance=space ? 1.3 : system ? 1.05 : 2.46;
    this.controls.maxDistance=space ? 90 : system ? 35 : 15;

    this.earthGroup.visible=!space && !system;
    this.solarGroup.visible=system;
    this.featuredGroup.children.forEach((x)=>x.visible=space);
    this.galaxyDestinationGroup.visible=space;

    this.galaxy.material.opacity=space ? .72 : system ? .28 : .12;
    this.starField.material.opacity=space || system ? 1 : .9;
    this.scene.fog.density=space ? .004 : system ? .006 : .012;

    if(system) {
      this.solarPaused=false;
      this.animateCamera(new THREE.Vector3(0,7.8,18.5),new THREE.Vector3(0,0,0),1300);
    } else if(space) {
      this.animateCamera(new THREE.Vector3(0,8,34),new THREE.Vector3(0,0,-5),1300);
    } else {
      this.animateCamera(new THREE.Vector3(.8,.35,7.6),new THREE.Vector3(0,0,0),1100);
    }
  }

  focusEvent(event) {
    if(!event) return;
    const local=this.latLonToVector3(event.lat,event.lon,1);
    const world=this.earthGroup.localToWorld(local).normalize();
    const distance=5.7;
    this.animateCamera(world.multiplyScalar(distance),new THREE.Vector3(0,0,0),950);
  }

  focusLocation(lat,lon,distance=5.6) {
    const local=this.latLonToVector3(lat,lon,1);
    const world=this.earthGroup.localToWorld(local).normalize();
    this.animateCamera(world.multiplyScalar(distance),new THREE.Vector3(0,0,0),1050);
  }

  focusStar(id) {
    const data=FEATURED_STARS.find(s=>s.id===id);
    const group=this.starMeshes.get(id);
    if(!data||!group) return;
    const target=group.position.clone();
    const outward=target.clone().normalize();
    const cameraPos=target.clone().add(outward.multiplyScalar(data.size*4.6+2.4));
    cameraPos.y += data.size*.55;
    this.animateCamera(cameraPos,target,1250);
  }

  focusGalaxy(id) {
    const node=this.galaxyNodes.get(id);
    if(!node) return;
    const target=node.group.position.clone();
    const outward=target.clone().normalize();
    const cameraPos=target.clone().add(outward.multiplyScalar(Math.max(7,node.data.scale*1.15)));
    cameraPos.y += node.data.scale*.15;
    this.animateCamera(cameraPos,target,1450);
  }

  focusPlanet(id) {
    const node=this.planetNodes.get(id);
    if(!node) return;
    this.solarPaused=true;
    const target=new THREE.Vector3();
    node.group.getWorldPosition(target);
    const fromSun=target.clone().normalize();
    const distance=Math.max(1.45,node.data.size*5.4+1.0);
    const cameraPos=target.clone().add(fromSun.multiplyScalar(distance));
    cameraPos.y += Math.max(.35,node.data.size*1.2);
    this.animateCamera(cameraPos,target,1200);
  }


  animateCamera(position,target,duration=1000) {
    this.tween={
      start:performance.now(), duration,
      fromPos:this.camera.position.clone(), toPos:position.clone(),
      fromTarget:this.controls.target.clone(), toTarget:target.clone()
    };
  }

  latLonToVector3(lat,lon,radius) {
    const phi=THREE.MathUtils.degToRad(lat);
    const theta=THREE.MathUtils.degToRad(lon);
    return new THREE.Vector3(
      -radius*Math.cos(phi)*Math.cos(theta),
      radius*Math.sin(phi),
      radius*Math.cos(phi)*Math.sin(theta)
    );
  }

  vector3ToLatLon(v) {
    const r=v.length();
    const lat=THREE.MathUtils.radToDeg(Math.asin(v.y/r));
    const lon=THREE.MathUtils.radToDeg(Math.atan2(v.z,-v.x));
    return {lat,lon};
  }

  onPointer(e) {
    const rect=this.canvas.getBoundingClientRect();
    this.pointer.x=((e.clientX-rect.left)/rect.width)*2-1;
    this.pointer.y=-((e.clientY-rect.top)/rect.height)*2+1;
    this.raycaster.setFromCamera(this.pointer,this.camera);

    if(this.mode==='system') {
      const hits=this.raycaster.intersectObjects(this.planetMeshes,false);
      const id=hits[0]?.object?.userData?.planetId;
      if(id) window.dispatchEvent(new CustomEvent('earthpulse:planet',{detail:{id}}));
      return;
    }

    if(this.mode==='space') {
      const galaxyHits=this.raycaster.intersectObjects(this.galaxyMeshes,false);
      const galaxyId=galaxyHits[0]?.object?.userData?.galaxyId;
      if(galaxyId) {
        window.dispatchEvent(new CustomEvent('earthpulse:galaxy',{detail:{id:galaxyId}}));
        return;
      }
      const stars=[];
      this.starMeshes.forEach(g=>stars.push(...g.children));
      const hits=this.raycaster.intersectObjects(stars,false);
      const id=hits[0]?.object?.userData?.starId;
      if(id) window.dispatchEvent(new CustomEvent('earthpulse:star',{detail:{id}}));
      return;
    }

    const markerHits=this.raycaster.intersectObjects(this.eventMeshes,false);
    if(markerHits.length) {
      const event=markerHits[0].object.userData.event;
      if(event) window.dispatchEvent(new CustomEvent('earthpulse:event',{detail:{event}}));
      return;
    }

    if(this.mode==='weather') {
      const earthHit=this.raycaster.intersectObject(this.earth,false)[0];
      if(earthHit) {
        const local=this.earth.worldToLocal(earthHit.point.clone());
        const {lat,lon}=this.vector3ToLatLon(local);
        window.dispatchEvent(new CustomEvent('earthpulse:location',{detail:{lat,lon}}));
      }
    }
  }

  setTheme(theme) {
    const light=theme==='light';
    this.renderer.toneMappingExposure=light ? 1.22 : 1.08;
    this.scene.fog.color.set(light ? 0xddeafb : 0x02050e);
    this.atmosphere.material.uniforms.glowColor.value.set(light ? 0x3b83d9 : 0x4ba8ff);
    this.earth.material.emissiveIntensity=light ? .12 : .42;
  }

  resize() {
    this.camera.aspect=innerWidth/innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.performanceTier==='balanced' ? 1.35 : 1.8));
    this.renderer.setSize(innerWidth,innerHeight,false);
  }

  animate() {
    requestAnimationFrame(()=>this.animate());
    const t=this.clock.getElapsedTime();
    this.controls.update();

    if(this.tween) {
      const p=Math.min(1,(performance.now()-this.tween.start)/this.tween.duration);
      const e=1-Math.pow(1-p,3);
      this.camera.position.lerpVectors(this.tween.fromPos,this.tween.toPos,e);
      this.controls.target.lerpVectors(this.tween.fromTarget,this.tween.toTarget,e);
      if(p>=1) this.tween=null;
    }

    // Rotate the planet and every geospatial layer together so live markers
    // remain attached to their real latitude/longitude on the globe.
    if(this.earthGroup.visible) this.earthGroup.rotation.y += .00028;
    if(this.cloudLayer?.visible) this.cloudLayer.rotation.y += .00009;
    this.starField.rotation.y += .000035;
    this.galaxy.rotation.y -= .00006;

    this.markerGroup.children.forEach((g,index)=>{
      const ring=g.children[1];
      if(!ring) return;
      const pulse=(Math.sin(t*2.2+(ring.userData.phase||index))*.5+.5);
      const s=1+pulse*.75;
      ring.scale.setScalar(s);
      ring.material.opacity=.12+(1-pulse)*.42;
    });

    if(this.mode==='system') {
      this.planetNodes.forEach(({pivot,group},id)=>{
        const node=this.planetNodes.get(id);
        if(!this.solarPaused) pivot.rotation.y=node.pivot.userData.baseAngle + t*node.pivot.userData.speed*.11;
        const core=group.children[0];
        if(core) core.rotation.y += .003;
      });
      sunCorePulse(this.solarGroup,t);
    }

    if(this.mode==='space') {
      this.galaxyDestinationGroup.children.forEach((g,index)=>{ g.rotation.y += .0003 + index*.00008; });
      this.featuredGroup.children.forEach((g,index)=>{
        const glow=g.children[1];
        const ring=g.children[2];
        const pulse=1+Math.sin(t*1.4+index)*.08;
        glow.scale.setScalar((FEATURED_STARS[index]?.size||.6)*5.2*pulse);
        ring.rotation.z += .0018+index*.0002;
      });
    }

    this.renderer.render(this.scene,this.camera);
  }
}
