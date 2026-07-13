```javascript id="wq4o1f"
// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

// ============================
// Firebase Config
// Replace with your own values
// ============================

firebase.initializeApp({

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_PROJECT.appspot.com",

    messagingSenderId: "YOUR_SENDER_ID",

    appId: "YOUR_APP_ID"

});

// ============================
// Firebase Messaging
// ============================

const messaging = firebase.messaging();

// ============================
// Background Notifications
// ============================

messaging.onBackgroundMessage((payload) => {

    console.log("Background Message:", payload);

    const title =
        payload.notification?.title || "Deepak Ride";

    const options = {

        body:
            payload.notification?.body ||
            "You have a new notification.",

        icon: "/images/icon-192.png",

        badge: "/images/icon-192.png",

        data: payload.data || {},

        vibrate: [200, 100, 200],

        requireInteraction: true

    };

    self.registration.showNotification(title, options);

});

// ============================
// Notification Click
// ============================

self.addEventListener("notificationclick", (event) => {

    event.notification.close();

    const targetUrl = "/ride.html";

    event.waitUntil(

        clients.matchAll({
            type: "window",
            includeUncontrolled: true
        }).then((clientList) => {

            for (const client of clientList) {

                if (client.url.includes(targetUrl)) {
                    return client.focus();
                }

            }

            return clients.openWindow(targetUrl);

        })

    );

});
```
