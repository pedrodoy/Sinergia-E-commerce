// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa0xLeYoxAmqhpC6OoSBl_54YoPRyOCA4",
  authDomain: "sinergia-ecom-eceb8.firebaseapp.com",
  projectId: "sinergia-ecom-eceb8",
  storageBucket: "sinergia-ecom-eceb8.firebasestorage.app",
  messagingSenderId: "586134267816",
  appId: "1:586134267816:web:05104a383458f1b9a71f9d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;