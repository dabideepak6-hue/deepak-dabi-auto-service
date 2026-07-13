```javascript
// js/notifications.js

import { db } from "./firebase.js";

import {
collection,
query,
where,
onSnapshot,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// ==================================
// Listen for Driver Ride Requests
// ==================================

export function listenForRide(driverId){

const q=query(

collection(db,"rides"),

where("driverId","==",driverId),

where("status","==","Driver Assigned")

);

onSnapshot(q,(snapshot)=>{

snapshot.forEach((ride)=>{

const data=ride.data();

showRidePopup(ride.id,data);

});

});

}

// ==================================
// Popup
// ==================================

function showRidePopup(rideId,data){

let timer=30;

const ok=confirm(

`🚖 NEW RIDE

Pickup : ${data.pickup}

Drop : ${data.drop}

Fare : ₹${data.fare}

Accept Ride?`

);

if(ok){

acceptRide(rideId);

return;

}

const interval=setInterval(async()=>{

timer--;

console.log(timer);

if(timer<=0){

clearInterval(interval);

await updateDoc(doc(db,"rides",rideId),{

status:"Pending",

driverId:"",

driverName:"",

driverPhone:"",

vehicleNumber:""

});

}

},1000);

}

// ==================================
// Accept Ride
// ==================================

async function acceptRide(rideId){

await updateDoc(doc(db,"rides",rideId),{

status:"Accepted",

acceptedTime:new Date()

});

alert("Ride Accepted");

}

// ==================================
// Customer Ride Status
// ==================================

export function watchRide(rideId){

const ref=doc(db,"rides",rideId);

onSnapshot(ref,(snap)=>{

if(!snap.exists()) return;

const ride=snap.data();

const status=document.getElementById("status");

if(status){

status.innerHTML=ride.status;

}

if(ride.status==="Completed"){

alert("Ride Completed");

}

});

}
```
