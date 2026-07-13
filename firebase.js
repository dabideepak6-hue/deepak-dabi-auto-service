// Firebase SDK (v10+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


// ===========================
// YOUR FIREBASE CONFIG
// ===========================

const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_PROJECT.appspot.com",

    messagingSenderId: "123456789",

    appId: "YOUR_APP_ID"

};


// ===========================
// Initialize Firebase
// ===========================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// ===========================
// reCAPTCHA
// ===========================

window.recaptchaVerifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container",
    {
        size: "normal"
    }
);


// ===========================
// Send OTP
// ===========================

window.sendOTP = async function () {

    const phone = "+91" + document.getElementById("mobile").value;

    try {

        const result = await signInWithPhoneNumber(
            auth,
            phone,
            window.recaptchaVerifier
        );

        window.confirmationResult = result;

        alert("OTP Sent Successfully");

    } catch (e) {

        alert(e.message);

    }

};


// ===========================
// Verify OTP
// ===========================

window.verifyOTP = async function () {

    const otp = document.getElementById("otp").value;

    try {

        const result =
            await window.confirmationResult.confirm(otp);

        const user = result.user;

        const ref = doc(db, "users", user.uid);

        const snap = await getDoc(ref);

        if (!snap.exists()) {

            await setDoc(ref, {

                uid: user.uid,

                phone: user.phoneNumber,

                role: "customer",

                createdAt: serverTimestamp()

            });

        }

        location.href = "customer.html";

    }

    catch (e) {

        alert("Invalid OTP");

    }

}


// Export

export { auth, db };
