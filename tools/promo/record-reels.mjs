import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const LIVE_URL='https://suhail-earthpulse-3d.onrender.com/?promo=reels';
const OUT_DIR=path.resolve('promo/raw');
await fs.mkdir(OUT_DIR,{recursive:true});

const source=await fs.readFile('src/scene.js','utf8');
const lines=source.split(/\r?\n/);
const start=Math.max(0,lines.findIndex(line=>line.includes('export class EarthSpaceScene'))-8);
const codeLines=lines.slice(start,start+76);

const esc=(s)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const highlighted=codeLines.map((line,idx)=>{
  const n=start+idx+1;
  let safe=esc(line);
  safe=safe
    .replace(/\b(import|from|export|class|const|let|function|return|new|if|else|for|async|await|this)\b/g,'<span class="kw">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g,'<span class="str">$1</span>')
    .replace(/\b(THREE|OrbitControls|EarthSpaceScene|Scene|PerspectiveCamera|WebGLRenderer)\b/g,'<span class="type">$1</span>');
  return '<div class="line"><span class="ln">'+String(n).padStart(3,' ')+'</span><span class="src">'+safe+'</span></div>';
}).join('');

const html='<!doctype html><html><head><meta charset="utf-8"><style>'+
'*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;background:#02050d;color:#dce8ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;overflow:hidden}'+
'body{padding:62px 46px} .shell{height:100%;border:1px solid rgba(123,171,255,.22);border-radius:28px;background:linear-gradient(180deg,#07101f,#030710 62%,#02050d);box-shadow:0 30px 90px rgba(0,0,0,.5);overflow:hidden;position:relative}'+
'.top{height:112px;padding:24px 30px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;background:rgba(7,13,27,.94)}'+
'.title strong{font:700 25px system-ui;letter-spacing:.08em}.title small{display:block;margin-top:8px;color:#7f94ba;font:600 15px system-ui;letter-spacing:.12em}.pill{font:700 14px system-ui;color:#6ef1eb;border:1px solid rgba(110,241,235,.25);padding:10px 14px;border-radius:999px;background:rgba(110,241,235,.07)}'+
'.code{position:absolute;left:0;right:0;top:112px;bottom:0;padding:22px 0 60px;overflow:auto;scrollbar-width:none}.code::-webkit-scrollbar{display:none}.line{display:grid;grid-template-columns:74px 1fr;min-height:31px;align-items:start;padding:0 26px;font-size:16px;line-height:31px;white-space:pre}.ln{color:#415173;text-align:right;padding-right:22px;user-select:none}.src{color:#ccd8ee}.kw{color:#bc8cff}.str{color:#92e6a7}.type{color:#66d9ff}'+
'.foot{position:absolute;left:30px;right:30px;bottom:20px;height:42px;border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:end;justify-content:space-between;color:#627493;font:600 12px system-ui;letter-spacing:.12em;background:linear-gradient(180deg,rgba(2,5,13,0),#02050d 52%)}'+
'</style></head><body><div class="shell"><div class="top"><div class="title"><strong>EARTHPULSE 3D</strong><small>REAL PROJECT SOURCE · src/scene.js</small></div><div class="pill">SUHAIL LABS</div></div><div class="code" id="code">'+highlighted+'</div><div class="foot"><span>THREE.JS · REAL SOURCE CODE</span><span>suhail-earthpulse-3d</span></div></div></body></html>';

const browser=await chromium.launch({
  headless:true,
  args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist','--disable-dev-shm-usage']
});
const context=await browser.newContext({
  viewport:{width:800,height:1440},
  deviceScaleFactor:1,
  recordVideo:{dir:OUT_DIR,size:{width:800,height:1440}},
  colorScheme:'dark'
});
const page=await context.newPage();
page.setDefaultTimeout(15000);

const pause=(ms)=>page.waitForTimeout(ms);
async function safeClick(selector,wait=900){
  try{
    const loc=page.locator(selector).first();
    await loc.waitFor({state:'visible',timeout:9000});
    await loc.click({timeout:9000});
    await pause(wait);
    return true;
  }catch(e){
    console.log('skip click',selector,String(e).slice(0,180));
    return false;
  }
}

await page.setContent(html,{waitUntil:'domcontentloaded'});
await pause(1100);
await page.evaluate(()=>document.querySelector('#code')?.scrollTo({top:260,behavior:'smooth'}));
await pause(1500);
await page.evaluate(()=>document.querySelector('#code')?.scrollTo({top:630,behavior:'smooth'}));
await pause(1700);

console.log('Opening live EarthPulse...');
await page.goto(LIVE_URL,{waitUntil:'domcontentloaded',timeout:60000});
await page.waitForFunction(()=>window.__earthpulseStarted===true,{timeout:60000}).catch(()=>{});
await page.waitForFunction(()=>document.getElementById('bootScreen')?.classList.contains('done'),{timeout:30000}).catch(()=>{});
await pause(2600);

// Earth interaction — real canvas drag + zoom.
try{
  const box=await page.locator('#spaceCanvas').boundingBox();
  if(box){
    const x=box.x+box.width*0.5, y=box.y+box.height*0.52;
    await page.mouse.move(x,y);
    await page.mouse.down();
    await page.mouse.move(x-150,y-24,{steps:18});
    await page.mouse.up();
    await page.mouse.wheel(0,-460);
    await pause(2100);
  }
}catch(e){console.log('earth interaction skipped',String(e).slice(0,180));}

// NASA satellite mode.
if(await safeClick('#satelliteButton',1200)){
  await page.locator('#satelliteShell[aria-hidden="false"]').waitFor({state:'visible',timeout:12000}).catch(()=>{});
  await pause(1600);
  try{
    const map=await page.locator('#satelliteMap').boundingBox();
    if(map){
      const x=map.x+map.width*0.55,y=map.y+map.height*0.53;
      await page.mouse.move(x,y); await page.mouse.down();
      await page.mouse.move(x-105,y+40,{steps:14}); await page.mouse.up();
      await pause(1400);
    }
  }catch{}
  await safeClick('#satelliteClose',700);
}

// Solar System: Saturn then Moon.
if(await safeClick('.mode-btn[data-mode="system"]',1500)){
  await safeClick('[data-planet-id="saturn"]',2200);
  await safeClick('[data-planet-id="moon"]',1900);
}

// Galaxy / star.
if(await safeClick('.mode-btn[data-mode="space"]',1500)){
  await safeClick('[data-galaxy-id="andromeda"]',1900);
  await safeClick('[data-star-id="sirius"]',1800);
}

// About / creator.
if(await safeClick('#aboutButton',1700)){
  await pause(800);
  await safeClick('.modal-close[data-modal-close="aboutModal"]',500);
}

// Strong final Earth view.
await safeClick('.mode-btn[data-mode="earth"]',600);
try{
  await page.evaluate(()=>{
    const tag=document.createElement('div');
    tag.id='promo-url-tag';
    tag.textContent='suhail-earthpulse-3d.onrender.com';
    Object.assign(tag.style,{
      position:'fixed',left:'50%',bottom:'122px',transform:'translateX(-50%)',zIndex:'850',
      padding:'11px 18px',borderRadius:'999px',background:'rgba(3,8,20,.78)',
      border:'1px solid rgba(110,241,235,.28)',backdropFilter:'blur(12px)',
      color:'#dffcff',font:'700 14px system-ui',letterSpacing:'.04em',
      boxShadow:'0 12px 35px rgba(0,0,0,.3)'
    });
    document.body.appendChild(tag);
  });
}catch{}
await pause(2700);

const video=page.video();
await context.close();
await browser.close();
const saved=await video.path();
console.log('VIDEO_PATH='+saved);
