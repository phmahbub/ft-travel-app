// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEcuuGOl12ITmjBH_2eIN6zJWbY9X6nc",
  authDomain: "ft-travel-app.firebaseapp.com",
  projectId: "ft-travel-app",
  storageBucket: "ft-travel-app.appspot.com",
  messagingSenderId: "799229326845",
  appId: "1:799229326845:web:f3e9f397f4e5ce0fd79594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app