const CACHE_NAME = 'dewanone-kh-premium-2026-v9.9.5.6.31.3.7-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png',
  '/favicon.png'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch - Cache first, then network, fallback to offline page for navigation
self.addEventListener('fetch', event => {
  // Skip Supabase API calls - always network
  if (event.request.url.includes('supabase.co') || event.request.url.includes('supabase')) {
    return;
  }
  // Skip CDN
  if (event.request.url.includes('cdn.tailwindcss.com') || event.request.url.includes('unpkg.com') || event.request.url.includes('cdn.jsdelivr.net')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(res => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, res.clone());
            return res;
          });
        });
      })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(res => {
        // Don't cache non-success or non-GET
        if (!res || res.status !== 200 || res.type !== 'basic') {
          return res;
        }
        // Cache HTML and assets
        const resToCache = res.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, resToCache);
        });
        return res;
      }).catch(() => {
        // Offline fallback for navigation
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});