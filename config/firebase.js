// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK0NUlmfmAEYAVHJJ-phqAn_6mmeJGAMw",
  authDomain: "movie-app-8b671.firebaseapp.com",
  projectId: "movie-app-8b671",
  storageBucket: "movie-app-8b671.appspot.com",
  messagingSenderId: "264167162830",
  appId: "1:264167162830:web:dcb9aa627f92b1f594219f",
  measurementId: "G-94DJKYSPBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
