// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJgdabrnqJJzGKwmsHHVOyYwC-57Z2YV0",
  authDomain: "prepwise-eaed8.firebaseapp.com",
  projectId: "prepwise-eaed8",
  storageBucket: "prepwise-eaed8.firebasestorage.app",
  messagingSenderId: "829408661480",
  appId: "1:829408661480:web:d7550c0f8f277a0d929e5d",
  measurementId: "G-MT6VVRBW8V"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);