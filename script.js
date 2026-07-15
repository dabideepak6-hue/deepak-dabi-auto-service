window.CESIUM_BASE_URL = "https://cesium.com/downloads/cesiumjs/releases/1.133/Build/Cesium/";

const viewer = new Cesium.Viewer("cesiumContainer", {
    animation: false,
    timeline: false,
    geocoder: false,
    homeButton: true,
    sceneModePicker: true,
    navigationHelpButton: true,
    fullscreenButton: false,
    baseLayerPicker: true
});

// Initial view (Jodhpur)
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
        73.0243,
        26.2389,
        25000
    )
});

// Current Location
document.getElementById("locationBtn").onclick = function () {

    if (!navigator.geolocation) {
        alert("Geolocation not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function (position) {

        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(lon, lat),
            point: {
                pixelSize: 12
            },
            label: {
                text: "You are here",
                pixelOffset: new Cesium.Cartesian2(0, -25)
            }
        });

        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
                lon,
                lat,
                12000
            )
        });

    });

};

// Fullscreen
document.getElementById("fullscreenBtn").onclick = function () {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

};

// Earth button
document.getElementById("earthBtn").onclick = function () {

    viewer.camera.flyHome(2);

};

// Search (placeholder)
document.getElementById("searchBtn").onclick = function () {

    alert("Search feature will require a geocoding service such as Nominatim or another provider.");

};
