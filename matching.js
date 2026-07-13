```javascript
// js/matching.js

import { db } from "./firebase.js";

import {
collection,
getDocs,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


// Haversine Distance (KM)

function distance(lat1, lon1, lat2, lon2){

const R = 6371;

const dLat = (lat2-lat1) * Math.PI / 180;

const dLon = (lon2-lon1) * Math.PI / 180;

const a =

Math.sin(dLat/2)**2 +

Math.cos(lat1*Math.PI/180) *

Math.cos(lat2*Math.PI/180) *

Math.sin(dLon/2)**2;

const c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));

return R*c;

}


// Match Ride

export async function matchRide(

rideId,

pickupLat,

pickupLng

){

const snapshot = await getDocs(collection(db,"drivers"));

let nearest = null;

let minDistance = Number.MAX_VALUE;

snapshot.forEach((driver)=>{

const d = driver.data();

if(!d.online) return;

if(d.latitude==null || d.longitude==null) return;

const km = distance(

pickupLat,

pickupLng,

d.latitude,

d.longitude

);

if(km < minDistance){

minDistance = km;

nearest = {

id: driver.id,

...d

};

}

});

if(!nearest){

alert("No Driver Available");

return null;

}

await updateDoc(doc(db,"rides",rideId),{

status:"Driver Assigned",

driverId:nearest.id,

driverName:nearest.name,

driverPhone:nearest.phone,

vehicleNumber:nearest.vehicle,

driverLatitude:nearest.latitude,

driverLongitude:nearest.longitude

});

return nearest;

}
```
