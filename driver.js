```javascript
// driver.js

import { db } from "./firebase.js";

import {
doc,
setDoc,
updateDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// =========================
// Driver Details
// =========================

const DRIVER_ID = "driver001";

const DRIVER_DATA = {

name: "Deepak Dabi",

phone: "9876543210",

vehicle: "RJ19 AB 1234",

vehicleType: "Auto",

online: false

};

// =========================
// Go Online
// =========================

window.goOnline = async function(){

DRIVER_DATA.online = true;

await setDoc(doc(db,"drivers",DRIVER_ID),{

...DRIVER_DATA,

updatedAt:serverTimestamp()

});

alert("Driver Online");

startTracking();

}

// =========================
// Go Offline
// =========================

window.goOffline = async function(){

await updateDoc(doc(db,"drivers",DRIVER_ID),{

online:false,

updatedAt:serverTimestamp()

});

alert("Driver Offline");

}

// =========================
// Live GPS Tracking
// =========================

function startTracking(){

if(!navigator.geolocation){

alert("GPS Not Supported");

return;

}

navigator.geolocation.watchPosition(

async(position)=>{

const lat=position.coords.latitude;

const lng=position.coords.longitude;

await updateDoc(doc(db,"drivers",DRIVER_ID),{

online:true,

latitude:lat,

longitude:lng,

updatedAt:serverTimestamp()

});

console.log("Location Updated");

},

(error)=>{

console.log(error);

},

{

enableHighAccuracy:true,

maximumAge:0,

timeout:10000

}

);

}

// =========================
// Driver Status
// =========================

window.getCurrentLocation=function(){

navigator.geolocation.getCurrentPosition((position)=>{

alert(

"Lat : "+position.coords.latitude+

"\nLng : "+position.coords.longitude

);

});

}
```
