const CACHE_NAME = "deepak-auto-v1";

const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/auto.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
