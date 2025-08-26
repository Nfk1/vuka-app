// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/start.css',
      '/script-start.js',
      '/icons/icon-192.png',
      '/icons/icon-512.png'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

