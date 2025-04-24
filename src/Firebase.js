// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHoGKcMZmWqk_NOblnBquPGl82jE-nbKc",
  authDomain: "portfolio-69ea3.firebaseapp.com",
  projectId: "portfolio-69ea3",
  storageBucket: "portfolio-69ea3.firebasestorage.app",
  messagingSenderId: "97423698755",
  appId: "1:97423698755:web:3bc5cf04810b29ca5f1df6",
  measurementId: "G-NBMQKEC0XF",
  databaseURL: "https://portfolio-69ea3-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);