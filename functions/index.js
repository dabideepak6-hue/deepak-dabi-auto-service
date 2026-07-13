```javascript
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

// Distance Formula
function distance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2-lat1) * Math.PI/180;
    const dLon = (lon2-lon1) * Math.PI/180;

    const a =
    Math.sin(dLat/2)*Math.sin(dLat/2)+
    Math.cos(lat1*Math.PI/180)*
    Math.cos(lat2*Math.PI/180)*
    Math.sin(dLon/2)*Math.sin(dLon/2);

    return R * (2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)));

}


// ===================================
// New Ride Created
// ===================================

exports.newRide = onDocumentCreated("rides/{rideId}", async (event)=>{

const ride = event.data.data();

const rideId = event.params.rideId;

const drivers = await db.collection("drivers")

.where("online","==",true)

.get();

let nearest=null;

let min=999999;

drivers.forEach(doc=>{

const d=doc.data();

const km=distance(

ride.pickupLat,

ride.pickupLng,

d.latitude,

d.longitude

);

if(km<min){

min=km;

nearest={

id:doc.id,

...d

};

}

});

if(!nearest){

console.log("No Driver");

return;

}


// Assign Ride

await db.collection("rides")

.doc(rideId)

.update({

driverId:nearest.id,

driverName:nearest.name,

driverPhone:nearest.phone,

status:"Driver Assigned"

});


// Push Notification

if(nearest.fcmToken){

await admin.messaging().send({

token:nearest.fcmToken,

notification:{

title:"🚖 New Ride",

body:

"Pickup : "+ride.pickup+

"\nFare : ₹"+ride.fare

},

data:{

rideId:rideId

}

});

}

console.log("Driver Assigned");

});
```
