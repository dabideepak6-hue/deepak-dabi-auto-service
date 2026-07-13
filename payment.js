```javascript
// js/payment.js

import { db } from "./firebase.js";

import {
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

window.selectPayment = function(method){

    const rideId = localStorage.getItem("rideId");

    if(!rideId){
        alert("Ride not found");
        return;
    }

    if(method==="cash"){

        updateDoc(doc(db,"rides",rideId),{

            paymentMethod:"Cash",

            paymentStatus:"Pending"

        });

        alert("Cash payment selected.");

        location.href="ride.html";

    }

    else if(method==="online"){

        alert("Online Payment Gateway will open here.");

        // PhonePe / Razorpay / Paytm integration goes here

        updateDoc(doc(db,"rides",rideId),{

            paymentMethod:"Online",

            paymentStatus:"Initiated"

        });

    }

}

window.paymentSuccess = async function(){

    const rideId = localStorage.getItem("rideId");

    await updateDoc(doc(db,"rides",rideId),{

        paymentStatus:"Paid"

    });

    alert("Payment Successful");

    location.href="ride.html";

}

window.paymentFailed = async function(){

    const rideId = localStorage.getItem("rideId");

    await updateDoc(doc(db,"rides",rideId),{

        paymentStatus:"Failed"

    });

    alert("Payment Failed");

}
```
