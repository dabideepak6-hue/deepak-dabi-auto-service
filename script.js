/* =====================================
   Deepak Dabi Auto Service
   Premium Script
===================================== */

// ----------------------------
// Loading Screen
// ----------------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }

    }, 1500);

});

// ----------------------------
// Live Clock
// ----------------------------

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleString("en-IN", {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric",

        hour: "2-digit",

        minute: "2-digit",

        second: "2-digit"

    });

}

setInterval(updateClock, 1000);

updateClock();

// ----------------------------
// Dark Mode
// ----------------------------

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    if (themeBtn) themeBtn.innerHTML = "☀️";

}

if (themeBtn) {

    themeBtn.onclick = () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = "🌙";

        }

    };

}

// ----------------------------
// Live GPS
// ----------------------------

let gpsLink = "Location Not Available";

function getLocation() {

    if (!navigator.geolocation) {

        alert("GPS Supported नहीं है");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const lat = position.coords.latitude;

            const lng = position.coords.longitude;

            gpsLink =

                "https://www.google.com/maps?q=" +

                lat +

                "," +

                lng;

            alert("Live Location Captured");

        },

        () => {

            alert("Location Permission Denied");

        },

        {

            enableHighAccuracy: true

        }

    );

}

// ----------------------------
// Fare Calculator
// ----------------------------

function calculateFare() {

    const km = Number(document.getElementById("km").value);

    const rate = Number(document.getElementById("rate").value);

    const total = km * rate;

    document.getElementById("price").innerHTML =

        "Estimated Fare ₹ " + total;

}

// ----------------------------
// Google Route
// ----------------------------

function openRoute() {

    const from = document.getElementById("from").value;

    const to = document.getElementById("to").value;

    window.open(

        "https://www.google.com/maps/dir/" +

        encodeURIComponent(from) +

        "/" +

        encodeURIComponent(to)

    );

}

// ----------------------------
// UPI Payment
// ----------------------------

function payNow() {

    const amount =

        document.getElementById("amount").value;

    if (amount === "") {

        alert("Amount Enter करें");

        return;

    }

    const upi =

        "upi://pay?pa=9521393991@kotakbank" +

        "&pn=Deepak%20Dabi%20Auto%20Service" +

        "&tn=Auto%20Booking" +

        "&am=" +

        amount +

        "&cu=INR";

    window.location.href = upi;

}

// ----------------------------
// WhatsApp Booking
// ----------------------------

function bookNow() {

    const customerName =

        document.getElementById("name").value;

    const mobile =

        document.getElementById("mobile").value;

    const pickup =

        document.getElementById("pickup").value;

    const drop =

        document.getElementById("drop").value;

    const message =

        "🚖 Deepak Dabi Auto Booking\n\n" +

        "👤 Name : " + customerName + "\n" +

        "📞 Mobile : " + mobile + "\n" +

        "📍 Pickup : " + pickup + "\n" +

        "🏁 Drop : " + drop + "\n" +

        "📌 GPS : " + gpsLink;

    saveBooking(customerName, mobile, pickup, drop);

    window.open(

        "https://wa.me/919521393991?text=" +

        encodeURIComponent(message),

        "_blank"

    );

}

// ----------------------------
// Booking History
// ----------------------------

function saveBooking(name, mobile, pickup, drop) {

    let history =

        JSON.parse(localStorage.getItem("bookingHistory")) || [];

    history.push({

        name,

        mobile,

        pickup,

        drop,

        time: new Date().toLocaleString()

    });

    localStorage.setItem(

        "bookingHistory",

        JSON.stringify(history)

    );

}

function showHistory() {

    const history =

        JSON.parse(localStorage.getItem("bookingHistory")) || [];

    console.table(history);

}

// ----------------------------
// Rating
// ----------------------------

function rate(star) {

    localStorage.setItem("rating", star);

    alert("Thanks for Rating ⭐ " + star);

}

const oldRating =

    localStorage.getItem("rating");

if (oldRating) {

    console.log("Customer Rating :", oldRating);

}
