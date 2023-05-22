// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
}; */


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCox6HizhWkQLCrej5tzJ8JaYG36cKNs1c",
  authDomain: "netflix-clone-54fb0.firebaseapp.com",
  projectId: "netflix-clone-54fb0",
  storageBucket: "netflix-clone-54fb0.appspot.com",
  messagingSenderId: "112589421685",
  appId: "1:112589421685:web:470f462c38015f3da40c3c"
};

// Initialize Firebase 


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
