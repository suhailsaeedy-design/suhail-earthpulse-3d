const CACHE = 'earthpulse-offline-v7';
const CORE = [
  './',
  './index.html',
  './styles.css',
  './app.bundle.js',
  './app.bundle.css',
  './favicon.svg',
  './manifest.webmanifest',
  './version.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './assets/images/suhail-saeedy-about-approved.jpeg',
  './public/earth-blue-marble.jpg',
  './public/textures/earth-day.jpg',
  './public/textures/earth-night.jpg',
  './public/textures/earth-clouds.jpg',
  './public/textures/mercury.jpg',
  './public/textures/venus.jpg',
  './public/textures/venus-surface.jpg',
  './public/textures/mars.jpg',
  './public/textures/jupiter.jpg',
  './public/textures/saturn.jpg',
  './public/textures/saturn-ring.png',
  './public/textures/uranus.jpg',
  './public/textures/neptune.jpg',
  './public/textures/sun.jpg',
  './public/textures/moon.jpg',
  './public/textures/milky-way.jpg',
  './public/textures/ATTRIBUTION.txt'
];

async function fillCache() {
  const cache = await caches.open(CACHE);
  await Promise.allSettled(CORE.map(async (path) => {
    const response = await fetch(new Request(path, { cache: 'reload' }));
    if (response.ok) await cache.put(path, response.clone());
  }));
}

self.addEventListener('install', (event) => {
  event.waitUntil(fillCache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith('earthpulse-') && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.endsWith('/version.json')) {
    event.respondWith(fetch(request, { cache: 'no-store' }).catch(() => caches.match(request, { ignoreSearch: true })));
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.ok) {
          caches.open(CACHE).then((cache) => cache.put(request, response.clone())).catch(() => {});
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request, { ignoreSearch: true });
        if (cached) return cached;
        if (request.mode === 'navigate') return caches.match('./index.html', { ignoreSearch: true });
        return Response.error();
      })
  );
});
