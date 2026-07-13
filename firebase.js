// ============================================
// Firebase Configuration
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLNrZ-sPWzcC5Oc1rt994xZVRf5QKZZaM",
  authDomain: "deepak-dabi-auto-service.firebaseapp.com",
  projectId: "deepak-dabi-auto-service",
  storageBucket: "deepak-dabi-auto-service.firebasestorage.app",
  messagingSenderId: "539328120631",
  appId: "1:539328120631:web:e75786d94c24b04c8efcb2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

console.log("✅ Firebase Connected Successfully");
