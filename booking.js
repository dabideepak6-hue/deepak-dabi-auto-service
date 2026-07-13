// booking.js

import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


// ======================
// Fare Calculation
// ======================

window.calculateFare = function () {

const distance =
parseFloat(document.getElementById("distance").value) || 0;

const rideType =
document.getElementById("ride").value;

let rate = 0;

switch (rideType) {

case "bike":
rate = 12;
break;

case "auto":
rate = 18;
break;

case "cab":
rate = 25;
break;

}

let fare = distance * rate;

if (fare < 50)
fare = 50;

document.getElementById("fare").innerHTML = fare;

}


// ======================
// Book Ride
// ======================

window.bookRide = async function () {

const pickup =
document.getElementById("pickup").value.trim();

const drop =
document.getElementById("drop").value.trim();

const rideType =
document.getElementById("ride").value;

const distance =
parseFloat(document.getElementById("distance").value);

const fare =
parseFloat(document.getElementById("fare").innerHTML);

if (!pickup || !drop) {

alert("Enter Pickup & Drop Location");

return;

}

try {

const docRef =
await addDoc(collection(db, "rides"), {

pickup,

drop,

rideType,

distance,

fare,

status: "Pending",

driverId: "",

customerId: "",

createdAt: serverTimestamp()

});

localStorage.setItem("rideId", docRef.id);

alert("Ride Booked Successfully");

window.location = "ride.html";

}

catch (error) {

console.error(error);

alert("Booking Failed");

}

}


// ======================
// Auto Fare Update
// ======================

document
.getElementById("distance")
.addEventListener("input", calculateFare);

document
.getElementById("ride")
.addEventListener("change", calculateFare);
