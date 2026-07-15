const map=L.map('map').setView([26.2389,73.0243],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19,
attribution:'© OpenStreetMap'
}).addTo(map);

let marker=L.marker([26.2389,73.0243]).addTo(map);

marker.bindPopup("Deepak Dabi Maps");

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(pos){

const lat=pos.coords.latitude;

const lng=pos.coords.longitude;

map.setView([lat,lng],16);

marker.setLatLng([lat,lng]);

marker.bindPopup("📍 You are Here").openPopup();

});

}else{

alert("Location not supported");

}

}
