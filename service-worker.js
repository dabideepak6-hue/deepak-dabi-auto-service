```javascript
// service-worker.js

const CACHE_NAME = "deepak-ride-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/login.html",
    "/customer.html",
    "/driver.html",
    "/booking.html",
    "/ride.html",
    "/admin.html",
    "/history.html",
    "/rating.html",
    "/wallet.html",

    "/css/style.css",
    "/css/login.css",
    "/css/customer.css",
    "/css/driver.css",
    "/css/booking.css",
    "/css/admin.css",

    "/js/app.js",
    "/js/auth.js",
    "/js/map.js",
    "/js/booking.js",
    "/js/driver.js",
    "/js/matching.js",
    "/js/notifications.js",
    "/js/payment.js",
    "/js/coupon.js",

    "/manifest.json",

    "/images/logo.png",
    "/images/icon-192.png",
    "/images/icon-512.png"
];

// Install
self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => cache.addAll(FILES_TO_CACHE))

    );

    self.skipWaiting();

});

// Activate
self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {

                        return caches.delete(key);

                    }

                })

            )

        )

    );

    self.clients.claim();

});

// Fetch
self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response || fetch(event.request);

        })

    );

});
```
