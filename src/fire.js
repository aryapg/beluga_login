import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Add Firestore

const firebaseConfig = {
  apiKey: "AIzaSyATeky5lmW1srWE_T8sQdCuVkroSileT2A",
  authDomain: "login-8cdf1.firebaseapp.com",
  projectId: "login-8cdf1",
  storageBucket: "login-8cdf1.firebasestorage.app",
  messagingSenderId: "708950949722",
  appId: "1:708950949722:web:3204a1a390771942d5fd63",
  measurementId: "G-4L5L2EBTC9"
};

initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Initialize Firestore

export { auth, db };  // Export Firestore
