import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE='https://suhail-earthpulse-3d.onrender.com/';
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

const codeHtml='<!doctype html><html><head><meta charset="utf-8"><style>'+
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

const sleep=(page,ms)=>page.waitForTimeout(ms);
const timings=[];

async function finishClip(context,page,name,trim,duration){
  const video=page.video();
  await context.close();
  const temp=await video.path();
  const target=path.join(OUT_DIR,name+'.webm');
  await fs.rename(temp,target);
  timings.push({name,trim:Number(trim.toFixed(3)),duration});
  console.log('CLIP',name,'trim',trim.toFixed(3),'duration',duration);
}

async function waitReady(page,maxMs=13000){
  const started=Date.now();
  let ready=false;
  while(Date.now()-started<maxMs){
    ready=await page.evaluate(()=>window.__earthpulseStarted===true && document.getElementById('bootScreen')?.classList.contains('done')).catch(()=>false);
    if(ready) break;
    await sleep(page,500);
  }
  return ready;
}

async function domClick(page,selector){
  return page.evaluate((s)=>{
    const el=document.querySelector(s);
    if(!el) return false;
    el.click();
    return true;
  },selector).catch(()=>false);
}

async function recordLive(name,url,duration,prepare){
  const context=await browser.newContext(contextOptions);
  const page=await context.newPage();
  page.setDefaultTimeout(5000);
  const started=Date.now();
  await page.goto(url,{waitUntil:'domcontentloaded',timeout:60000});
  const ready=await waitReady(page);
  await sleep(page,650);
  if(prepare) await prepare(page);
  await sleep(page,550);
  const trim=Math.max(0,(Date.now()-started)/1000-0.18);
  await sleep(page,duration*1000);
  await finishClip(context,page,name,trim,duration);
  console.log('READY',name,ready);
}

// 1) Actual code intro.
{
  const context=await browser.newContext(contextOptions);
  const page=await context.newPage();
  await page.setContent(codeHtml,{waitUntil:'domcontentloaded'});
  await sleep(page,850);
  await page.evaluate(()=>document.querySelector('#code')?.scrollTo({top:260,behavior:'smooth'}));
  await sleep(page,1400);
  await page.evaluate(()=>document.querySelector('#code')?.scrollTo({top:650,behavior:'smooth'}));
  await sleep(page,1800);
  await finishClip(context,page,'code',0,4.05);
}

// 2) Earth hero and true 3D globe movement.
await recordLive('earth',BASE+'?mode=earth&promo=earth',4.4,async(page)=>{
  try{
    const box=await page.locator('#spaceCanvas').boundingBox();
    if(box){
      const x=box.x+box.width*.52,y=box.y+box.height*.52;
      await page.mouse.move(x,y);
      await page.mouse.down();
      await page.mouse.move(x-145,y-18,{steps:16});
      await page.mouse.up();
      await page.mouse.wheel(0,-340);
      await sleep(page,700);
    }
  }catch{}
});

// 3) Real NASA satellite view.
await recordLive('satellite',BASE+'?mode=earth&promo=satellite',4.4,async(page)=>{
  await domClick(page,'#satelliteButton');
  await sleep(page,2100);
  try{
    const map=await page.locator('#satelliteMap').boundingBox();
    if(map){
      const x=map.x+map.width*.56,y=map.y+map.height*.55;
      await page.mouse.move(x,y);await page.mouse.down();
      await page.mouse.move(x-105,y+32,{steps:14});await page.mouse.up();
      await sleep(page,500);
    }
  }catch{}
});

// 4) Solar System: Saturn then Moon.
await recordLive('system',BASE+'?mode=system&promo=system',4.8,async(page)=>{
  await sleep(page,900);
  await domClick(page,'[data-planet-id="saturn"]');
  await sleep(page,1450);
  setTimeout(()=>{},0);
  page.evaluate(()=>setTimeout(()=>document.querySelector('[data-planet-id="moon"]')?.click(),2200)).catch(()=>{});
});

// 5) Galaxy / star.
await recordLive('galaxy',BASE+'?mode=space&promo=galaxy',4.7,async(page)=>{
  await sleep(page,900);
  await domClick(page,'[data-galaxy-id="andromeda"]');
  await sleep(page,1000);
  page.evaluate(()=>setTimeout(()=>document.querySelector('[data-star-id="sirius"]')?.click(),2100)).catch(()=>{});
});

// 6) About and creator portrait.
await recordLive('about',BASE+'?mode=earth&promo=about',4.0,async(page)=>{
  await domClick(page,'#aboutButton');
  await sleep(page,900);
});

// 7) Final Earth with URL in a social-safe zone.
await recordLive('finale',BASE+'?mode=earth&promo=finale',3.7,async(page)=>{
  await page.evaluate(()=>{
    const tag=document.createElement('div');
    tag.textContent='suhail-earthpulse-3d.onrender.com';
    Object.assign(tag.style,{
      position:'fixed',left:'50%',bottom:'118px',transform:'translateX(-50%)',zIndex:'850',
      padding:'11px 18px',borderRadius:'999px',background:'rgba(3,8,20,.82)',
      border:'1px solid rgba(110,241,235,.30)',backdropFilter:'blur(12px)',
      color:'#dffcff',font:'700 14px system-ui',letterSpacing:'.04em',
      boxShadow:'0 12px 35px rgba(0,0,0,.3)'
    });
    document.body.appendChild(tag);
  }).catch(()=>{});
});

await fs.writeFile(path.join(OUT_DIR,'timings.json'),JSON.stringify(timings,null,2)+'\n');
await browser.close();
console.log('TIMINGS',JSON.stringify(timings));
