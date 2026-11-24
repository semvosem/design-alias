// Офлайн-кеш: отдаём из кеша сразу, в фоне (если есть интернет) обновляем.
const CACHE = 'alias-v1';
const ASSETS = [
  './', './index.html', './words.js', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png',
  './icons/close.svg', './icons/refresh.svg', './icons/trash.svg', './icons/thumb-up.svg', './icons/thumb-down.svg', './icons/crown.svg',
  './fonts/inter-latin.woff2', './fonts/inter-cyrillic.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request)
      .then(r => { if (r.ok) cache.put(e.request, r.clone()); return r; })
      .catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    if (r) return r;
    if (e.request.mode === 'navigate') return cache.match('./index.html');
    return new Response('', { status: 504 });
  }));
});
