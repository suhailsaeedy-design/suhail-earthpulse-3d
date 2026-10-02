import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EVENT_COLORS, FEATURED_STARS } from './data.js';

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

export class EarthSpaceScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.mode = 'earth';
    this.eventMeshes = [];
    this.starMeshes = new Map();
    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.clock = new THREE.Clock();
    this.tween = null;
    this.glowTexture = makeGlowTexture();

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x02050e, 0.012);
    this.camera = new THREE.PerspectiveCamera(42, innerWidth/innerHeight, 0.1, 400);
    this.camera.position.set(0.8, 0.35, 7.6);

    this.renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
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
    this.controls.autoRotateSpeed = .28;
    this.controls.rotateSpeed = .38;
    this.controls.zoomSpeed = .7;

    this.buildLights();
    this.buildStars();
    this.buildGalaxy();
    this.buildEarth();
    this.buildFeaturedStars();
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
    const count = innerWidth < 720 ? 2200 : 4800;
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
    const count = innerWidth < 720 ? 1800 : 4200;
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

  buildEarth() {
    this.earthGroup = new THREE.Group();
    this.scene.add(this.earthGroup);

    const geometry = new THREE.SphereGeometry(EARTH_RADIUS, 96, 64);
    const material = new THREE.MeshPhongMaterial({
      map: makeEarthFallbackTexture(),
      shininess: 18,
      specular: new THREE.Color(0x345b8f),
      emissive: new THREE.Color(0x020817),
      emissiveIntensity: .35
    });
    this.earth = new THREE.Mesh(geometry, material);
    this.earthGroup.add(this.earth);

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    loader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
      this.earth.material.map = texture;
      this.earth.material.needsUpdate = true;
    }, undefined, () => {});

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_RADIUS*1.045,96,64),
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

    const grid = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_RADIUS*1.007,64,48),
      new THREE.MeshBasicMaterial({color:0x8fc5ff,wireframe:true,transparent:true,opacity:.018,depthWrite:false})
    );
    grid.scale.y = 1.001;
    this.earthGroup.add(grid);

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

  bindEvents() {
    addEventListener('resize', () => this.resize(), {passive:true});
    this.canvas.addEventListener('pointerup', (e) => this.onPointer(e));
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
    this.controls.autoRotate=!space;
    this.controls.minDistance=space ? 1.3 : 3.3;
    this.controls.maxDistance=space ? 90 : 15;
    this.earthGroup.visible=!space;
    this.featuredGroup.children.forEach((x)=>x.visible=space);
    this.galaxy.material.opacity=space ? .72 : .12;
    this.starField.material.opacity=space ? 1 : .9;
    this.scene.fog.density=space ? .004 : .012;
    if(space) {
      this.animateCamera(new THREE.Vector3(0,8,34),new THREE.Vector3(0,0,-5),1300);
    } else {
      this.animateCamera(new THREE.Vector3(.8,.35,7.6),new THREE.Vector3(0,0,0),1100);
    }
  }

  focusEvent(event) {
    if(!event) return;
    const dir=this.latLonToVector3(event.lat,event.lon,1).normalize();
    const distance=5.7;
    this.animateCamera(dir.multiplyScalar(distance),new THREE.Vector3(0,0,0),950);
  }

  focusLocation(lat,lon,distance=5.6) {
    const dir=this.latLonToVector3(lat,lon,1).normalize();
    this.animateCamera(dir.multiplyScalar(distance),new THREE.Vector3(0,0,0),1050);
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

    if(this.mode==='space') {
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
    this.earth.material.emissiveIntensity=light ? .15 : .35;
  }

  resize() {
    this.camera.aspect=innerWidth/innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth<720 ? 1.5 : 1.8));
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

    if(this.earthGroup.visible) this.earth.rotation.y += .00028;
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

    if(this.mode==='space') {
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
