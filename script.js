// =============================
// Deepak Dabi Maps
// script.js
// =============================

// Jodhpur Default Location
const map = L.map("map").setView([26.2389, 73.0243], 13);

// OpenStreetMap Layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution: "&copy; OpenStreetMap Contributors"
}).addTo(map);

// Marker
let marker = L.marker([26.2389,73.0243]).addTo(map);

marker.bindPopup("🌍 Deepak Dabi Maps").openPopup();

// My Location
function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            function(position){

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                map.setView([lat,lng],17);

                marker.setLatLng([lat,lng]);

                marker.bindPopup("📍 You are Here").openPopup();

            },

            function(error){

                alert("Location Permission Denied");

            }

        );

    }else{

        alert("Geolocation not Supported");

    }

}

// Double Click Marker
map.on("dblclick",function(e){

    L.marker(e.latlng)

    .addTo(map)

    .bindPopup("Custom Marker")

    .openPopup();

});

// Click Coordinates
map.on("click",function(e){

console.log(

"Latitude : "+e.latlng.lat+

" Longitude : "+e.latlng.lng

);

});
