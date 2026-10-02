import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const LIVE_URL='https://suhail-earthpulse-3d.onrender.com/?promo=reels-v2';
const OUT_DIR=path.resolve('promo/raw');
await fs.rm(OUT_DIR,{recursive:true,force:true});
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
'body{padding:62px 46px}.shell{height:100%;border:1px solid rgba(123,171,255,.22);border-radius:28px;background:linear-gradient(180deg,#07101f,#030710 62%,#02050d);box-shadow:0 30px 90px rgba(0,0,0,.5);overflow:hidden;position:relative}'+
'.top{height:112px;padding:24px 30px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;background:rgba(7,13,27,.94)}'+
'.title strong{font:700 25px system-ui;letter-spacing:.08em}.title small{display:block;margin-top:8px;color:#7f94ba;font:600 15px system-ui;letter-spacing:.12em}.pill{font:700 14px system-ui;color:#6ef1eb;border:1px solid rgba(110,241,235,.25);padding:10px 14px;border-radius:999px;background:rgba(110,241,235,.07)}'+
'.code{position:absolute;left:0;right:0;top:112px;bottom:0;padding:22px 0 60px;overflow:auto;scrollbar-width:none}.code::-webkit-scrollbar{display:none}.line{display:grid;grid-template-columns:74px 1fr;min-height:31px;align-items:start;padding:0 26px;font-size:16px;line-height:31px;white-space:pre}.ln{color:#415173;text-align:right;padding-right:22px;user-select:none}.src{color:#ccd8ee}.kw{color:#bc8cff}.str{color:#92e6a7}.type{color:#66d9ff}'+
'.foot{position:absolute;left:30px;right:30px;bottom:20px;height:42px;border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:end;justify-content:space-between;color:#627493;font:600 12px system-ui;letter-spacing:.12em;background:linear-gradient(180deg,rgba(2,5,13,0),#02050d 52%)}'+
'</style></head><body><div class="shell"><div class="top"><div class="title"><strong>EARTHPULSE 3D</strong><small>REAL PROJECT SOURCE · src/scene.js</small></div><div class="pill">SUHAIL LABS</div></div><div class="code" id="code">'+highlighted+'</div><div class="foot"><span>THREE.JS · REAL SOURCE CODE</span><span>suhail-earthpulse-3d</span></div></div></body></html>';

const browser=await chromium.launch({
  headless:true,
  args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist','--disable-dev-shm-usage']
});
const contextOptions={
  viewport:{width:800,height:1440},
  deviceScaleFactor:1,
  recordVideo:{dir:OUT_DIR,size:{width:800,height:1440}},
  colorScheme:'dark'
};
const pause=(page,ms)=>page.waitForTimeout(ms);

// Clip 1: actual project source code, 4–5 seconds.
{
  const context=await browser.newContext(contextOptions);
  const page=await context.newPage();
  await page.setContent(html,{waitUntil:'domcontentloaded'});
  await pause(page,900);
  await page.evaluate(()=>document.querySelector('#code')?.scrollTo({top:260,behavior:'smooth'}));
  await pause(page,1450);
  await page.evaluate(()=>document.querySelector('#code')?.scrollTo({top:640,behavior:'smooth'}));
  await pause(page,1750);
  const video=page.video();
  await context.close();
  const temp=await video.path();
  await fs.rename(temp,path.join(OUT_DIR,'code.webm'));
}

// Clip 2: the real live website. We later trim the initial load segment.
{
  const context=await browser.newContext(contextOptions);
  const page=await context.newPage();
  page.setDefaultTimeout(5000);
  const startedAt=Date.now();
  console.log('Opening live EarthPulse...');
  await page.goto(LIVE_URL,{waitUntil:'domcontentloaded',timeout:60000});

  let ready=false;
  for(let i=0;i<16;i++){
    ready=await page.evaluate(()=>window.__earthpulseStarted===true && document.getElementById('bootScreen')?.classList.contains('done')).catch(()=>false);
    if(ready) break;
    await pause(page,700);
  }
  await pause(page,450);
  const trimSeconds=Math.max(0,(Date.now()-startedAt)/1000-0.35);
  await fs.writeFile(path.join(OUT_DIR,'site-trim.txt'),trimSeconds.toFixed(3)+'\n');
  console.log('SITE_TRIM='+trimSeconds.toFixed(3)+' ready='+ready);

  async function safeClick(selector,wait=700){
    try{
      const loc=page.locator(selector).first();
      if(!(await loc.isVisible().catch(()=>false))) return false;
      await loc.click({timeout:3000});
      await pause(page,wait);
      return true;
    }catch(e){
      console.log('skip click',selector,String(e).slice(0,160));
      return false;
    }
  }
  async function domClick(selector,wait=700){
    const clicked=await page.evaluate((s)=>{
      const el=document.querySelector(s);
      if(!el) return false;
      el.click();
      return true;
    },selector).catch(()=>false);
    if(clicked) await pause(page,wait);
    return clicked;
  }

  await pause(page,1900);

  // Real Earth canvas interaction.
  try{
    const box=await page.locator('#spaceCanvas').boundingBox();
    if(box){
      const x=box.x+box.width*0.5,y=box.y+box.height*0.51;
      await page.mouse.move(x,y);
      await page.mouse.down();
      await page.mouse.move(x-150,y-24,{steps:18});
      await page.mouse.up();
      await page.mouse.wheel(0,-420);
      await pause(page,1800);
    }
  }catch{}

  // Real NASA satellite interface.
  if(await safeClick('#satelliteButton',900)){
    await pause(page,1250);
    try{
      const map=await page.locator('#satelliteMap').boundingBox();
      if(map){
        const x=map.x+map.width*0.55,y=map.y+map.height*0.53;
        await page.mouse.move(x,y);await page.mouse.down();
        await page.mouse.move(x-100,y+35,{steps:14});await page.mouse.up();
        await pause(page,1200);
      }
    }catch{}
    await safeClick('#satelliteClose',500);
  }

  // Solar System — real Saturn and Moon controls.
  if(await safeClick('.mode-btn[data-mode="system"]',1200)){
    await domClick('[data-planet-id="saturn"]',1900);
    await domClick('[data-planet-id="moon"]',1700);
  }

  // Galaxy and featured star.
  if(await safeClick('.mode-btn[data-mode="space"]',1200)){
    await domClick('[data-galaxy-id="andromeda"]',1700);
    await domClick('[data-star-id="sirius"]',1600);
  }

  // Real About panel and creator portrait.
  if(await safeClick('#aboutButton',1500)){
    await pause(page,500);
    await safeClick('.modal-close[data-modal-close="aboutModal"]',350);
  }

  // End on strongest Earth view with the real URL displayed in a safe overlay.
  await safeClick('.mode-btn[data-mode="earth"]',450);
  await page.evaluate(()=>{
    const old=document.getElementById('promo-url-tag');
    if(old) old.remove();
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
  }).catch(()=>{});
  await pause(page,2400);

  const video=page.video();
  await context.close();
  const temp=await video.path();
  await fs.rename(temp,path.join(OUT_DIR,'site.webm'));
}

await browser.close();
console.log('CODE_VIDEO='+path.join(OUT_DIR,'code.webm'));
console.log('SITE_VIDEO='+path.join(OUT_DIR,'site.webm'));
