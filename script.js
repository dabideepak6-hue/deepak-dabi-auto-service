// script.js

window.CESIUM_BASE_URL =
"https://cesium.com/downloads/cesiumjs/releases/1.133/Build/Cesium/";

const viewer = new Cesium.Viewer("cesiumContainer", {
    animation: false,
    timeline: false,
    geocoder: false,
    homeButton: true,
    sceneModePicker: true,
    baseLayerPicker: true,
    navigationHelpButton: false,
    fullscreenButton: false
});

// Home Location (Jodhpur)
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(
        73.0243,
        26.2389,
        2500000
    )
});

// My Location
document.getElementById("locationBtn").onclick = function () {

    if (!navigator.geolocation) {
        alert("Location not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(function (pos) {

        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(lon, lat),
            point: {
                pixelSize: 12,
                color: Cesium.Color.RED
            },
            label: {
                text: "My Location",
                pixelOffset: new Cesium.Cartesian2(0, -25)
            }
        });

        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
                lon,
                lat,
                15000
            )
        });

    });

};

// Fullscreen
document.getElementById("fullscreenBtn").onclick = function () {

    if (!document.fullscreenElement)
        document.documentElement.requestFullscreen();
    else
        document.exitFullscreen();

};

// Earth Button
document.getElementById("earthBtn").onclick = function () {

    viewer.camera.flyHome(2);

};

// Search (Demo)
document.getElementById("searchBtn").onclick = function () {

    const q = document.getElementById("searchBox").value;

    if (!q) return;

    alert("Search: " + q + "\n\nPlace search requires a geocoding service.");

};
