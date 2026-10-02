const VERSION_URL = './version.json';

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function platformName() {
  const ua=navigator.userAgent || '';
  const ios=/iPad|iPhone|iPod/.test(ua) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  if(ios) return 'ios';
  if(/Android/i.test(ua)) return 'android';
  return 'desktop';
}

export function setupPWA({ toast, onInstallInstructions, onOnlineChange, onInstalled } = {}) {
  let deferredPrompt=null;
  let reloading=false;
  let hadController=!!navigator.serviceWorker?.controller;

  const notifyInstallState=()=> {
    const installed=isStandalone();
    document.documentElement.classList.toggle('pwa-installed',installed);
    if(installed && onInstalled) onInstalled();
    return installed;
  };

  async function checkVersion({silent=true}={}) {
    if(!navigator.onLine) return false;
    try {
      const response=await fetch(`${VERSION_URL}?t=${Date.now()}`,{
        cache:'no-store',
        headers:{'Cache-Control':'no-cache'}
      });
      if(!response.ok) return false;
      const remote=await response.json();
      if(!remote?.version) return false;

      const key='earthpulse-running-version';
      const stored=localStorage.getItem(key);
      if(!stored) {
        localStorage.setItem(key,remote.version);
        return false;
      }
      if(stored!==remote.version) {
        localStorage.setItem(key,remote.version);
        if(!silent && toast) toast('A new EarthPulse update is ready. Updating now…');
        window.setTimeout(()=>location.reload(),250);
        return true;
      }
    } catch {}
    return false;
  }

  async function requestInstall() {
    if(notifyInstallState()) {
      if(toast) toast('EarthPulse 3D is already installed on this device.');
      return {status:'installed'};
    }

    if(deferredPrompt) {
      const prompt=deferredPrompt;
      deferredPrompt=null;
      try {
        await prompt.prompt();
        const choice=await prompt.userChoice;
        if(choice?.outcome==='accepted') {
          if(toast) toast('EarthPulse 3D is being added to your device.');
          return {status:'accepted'};
        }
      } catch {}
    }

    const platform=platformName();
    if(onInstallInstructions) onInstallInstructions(platform);
    return {status:'manual',platform};
  }

  window.addEventListener('beforeinstallprompt',(event)=>{
    event.preventDefault();
    deferredPrompt=event;
    document.documentElement.classList.add('pwa-install-ready');
  });

  window.addEventListener('appinstalled',()=>{
    deferredPrompt=null;
    document.documentElement.classList.remove('pwa-install-ready');
    notifyInstallState();
    if(toast) toast('EarthPulse 3D was installed successfully.');
  });

  const reportConnection=()=>{
    const online=navigator.onLine;
    document.documentElement.classList.toggle('is-offline',!online);
    if(onOnlineChange) onOnlineChange(online);
    return online;
  };

  window.addEventListener('offline',()=>{
    reportConnection();
    if(toast) toast('Offline mode: 3D Earth, System, Galaxy and About remain available.');
  });

  window.addEventListener('online',async()=>{
    reportConnection();
    if(toast) toast('Internet restored. Checking for EarthPulse updates…');
    try {
      const reg=await navigator.serviceWorker?.getRegistration('./');
      if(reg) await reg.update();
    } catch {}
    await checkVersion({silent:false});
  });

  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='visible' && navigator.onLine) {
      navigator.serviceWorker?.getRegistration('./').then(reg=>reg?.update()).catch(()=>{});
      checkVersion({silent:true});
    }
  });

  window.addEventListener('focus',()=>{
    if(navigator.onLine) checkVersion({silent:true});
  });

  if('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(hadController && !reloading) {
        reloading=true;
        location.reload();
      } else {
        hadController=true;
      }
    });

    window.addEventListener('load',async()=>{
      try {
        const registration=await navigator.serviceWorker.register('./sw.js',{
          scope:'./',
          updateViaCache:'none'
        });
        if(registration.waiting) registration.waiting.postMessage({type:'SKIP_WAITING'});
        registration.addEventListener('updatefound',()=>{
          const worker=registration.installing;
          if(!worker) return;
          worker.addEventListener('statechange',()=>{
            if(worker.state==='installed' && navigator.serviceWorker.controller) {
              worker.postMessage({type:'SKIP_WAITING'});
            }
          });
        });
        await registration.update().catch(()=>{});
      } catch(error) {
        console.warn('EarthPulse service worker registration failed:',error);
      }
      checkVersion({silent:true});
    });
  }

  reportConnection();
  notifyInstallState();
  window.setInterval(()=>checkVersion({silent:true}),30*60*1000);

  return {
    requestInstall,
    checkVersion,
    isInstalled:notifyInstallState,
    platform:platformName
  };
}
