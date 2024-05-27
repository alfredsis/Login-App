// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxpgSi0Wi8_DjMMJw7SDT5xRQaHC-zMlw",
  authDomain: "notas-app-3ba12.firebaseapp.com",
  projectId: "notas-app-3ba12",
  storageBucket: "notas-app-3ba12.appspot.com",
  messagingSenderId: "339368837706",
  appId: "1:339368837706:web:1998f41b5fb7992a9e5cb3",
  measurementId: "G-LV1L89494S"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );