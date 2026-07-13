```javascript
// map.js

let map;
let pickupMarker;
let dropMarker;

window.addEventListener("load", () => {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        initMap,
        () => {
            alert("Location permission denied.");
        },
        {
            enableHighAccuracy: true
        }
    );

});

function initMap(position) {

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    map = L.map("map").setView([lat, lng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap"
    }).addTo(map);

    pickupMarker = L.marker([lat, lng], {
        draggable: true
    }).addTo(map);

    document.getElementById("pickup").value =
        lat.toFixed(6) + ", " + lng.toFixed(6);

    pickupMarker.on("dragend", updateDistance);

    map.on("click", function (e) {

        if (dropMarker) {
            map.removeLayer(dropMarker);
        }

        dropMarker = L.marker(e.latlng).addTo(map);

        document.getElementById("drop").value =
            e.latlng.lat.toFixed(6) + ", " +
            e.latlng.lng.toFixed(6);

        updateDistance();

    });

}

function updateDistance() {

    if (!pickupMarker || !dropMarker) return;

    const p1 = pickupMarker.getLatLng();
    const p2 = dropMarker.getLatLng();

    const km = (
        map.distance(p1, p2) / 1000
    ).toFixed(2);

    document.getElementById("distance").value = km;

    if (typeof calculateFare === "function") {
        calculateFare();
    }

}
```
