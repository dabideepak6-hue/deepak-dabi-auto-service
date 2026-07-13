// =========================================
// Deepak Dabi Auto Service
// Premium Script v1.0
// =========================================

// ---------- Loader ----------
window.onload = function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1200);

    }

};

// ---------- Live Clock ----------

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleString();

}

setInterval(updateClock, 1000);

updateClock();


// ---------- Dark Mode ----------

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    if (localStorage.getItem("theme") == "light") {

        document.body.classList.add("light");

        themeBtn.innerHTML = "☀";

    }

    themeBtn.onclick = function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = "☀";

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = "🌙";

        }

    }

}


// ---------- GPS ----------

let gpsLink = "";

function getLocation() {

    if (!navigator.geolocation) {

        alert("GPS Not Supported");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        function (position) {

            let lat = position.coords.latitude;

            let lng = position.coords.longitude;

            gpsLink = "https://maps.google.com/?q=" + lat + "," + lng;

            let pickup = document.getElementById("pickup");

            if (pickup) {

                pickup.value = lat + "," + lng;

            }

            alert("Location Captured");

        },

        function () {

            alert("Permission Denied");

        }

    );

}



// ---------- Fare ----------

function calculateFare() {

    const km = Number(document.getElementById("km").value);

    let rate = 20;

    const vehicle = document.getElementById("vehicle");

    if (vehicle) {

        if (vehicle.value == "Mini Cab") rate = 30;

        if (vehicle.value == "SUV") rate = 45;

    }

    const total = km * rate;

    const price = document.getElementById("price");

    if (price) {

        price.innerHTML =

            "Estimated Fare ₹ " + total;

    }

}



// ---------- Google Route ----------

function openRoute() {

    let from = document.getElementById("pickup").value;

    let to = document.getElementById("drop").value;

    window.open(

        "https://www.google.com/maps/dir/" +

        encodeURIComponent(from) +

        "/" +

        encodeURIComponent(to)

    );

}



// ---------- Save Booking ----------

function saveBooking(data) {

    let history =

        JSON.parse(localStorage.getItem("bookings")) || [];

    history.push(data);

    localStorage.setItem(

        "bookings",

        JSON.stringify(history)

    );

}



// ---------- Booking ----------

function bookNow() {

    const customerName =

        document.getElementById("name").value.trim();

    const mobile =

        document.getElementById("mobile").value.trim();

    const pickup =

        document.getElementById("pickup").value.trim();

    const drop =

        document.getElementById("drop").value.trim();

    const vehicle =

        document.getElementById("vehicle").value;

    const payment =

        document.getElementById("payment").value;

    if (

        customerName == "" ||

        mobile == "" ||

        pickup == "" ||

        drop == ""

    ) {

        alert("Please Fill All Fields");

        return;

    }

    const booking = {

        customerName,

        mobile,

        pickup,

        drop,

        vehicle,

        payment,

        gps: gpsLink,

        date: new Date().toLocaleString()

    };

    saveBooking(booking);

    let message =

`🚖 Deepak Dabi Auto Booking

👤 Name : ${customerName}

📞 Mobile : ${mobile}

📍 Pickup : ${pickup}

🏁 Drop : ${drop}

🚖 Vehicle : ${vehicle}

💳 Payment : ${payment}

📌 GPS : ${gpsLink}`;

    window.open(

"https://wa.me/919521393991?text="+

encodeURIComponent(message),

"_blank"

    );

}



// ---------- Booking History ----------

function showHistory() {

    let history =

JSON.parse(localStorage.getItem("bookings")) || [];

    console.table(history);

}



// ---------- Rating ----------

function rate(star) {

    localStorage.setItem("rating", star);

    alert("Thanks For Rating ⭐ " + star);

}



// ---------- Payment ----------

function payNow() {

    let amount = prompt("Enter Amount");

    if (!amount) return;

    let upi =

"upi://pay?pa=9521393991@kotakbank&pn=Deepak%20Dabi&am="+amount+"&cu=INR";

    window.location.href = upi;

}



// ---------- Install PWA ----------

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e)=>{

e.preventDefault();

deferredPrompt=e;

let install=document.getElementById("installApp");

if(install){

install.style.display="inline-block";

install.onclick=()=>{

deferredPrompt.prompt();

};

}

});



// ---------- Online Offline ----------

window.addEventListener("online",()=>{

console.log("Online");

});

window.addEventListener("offline",()=>{

alert("Internet Disconnected");

});



// ---------- Smooth Scroll ----------

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
