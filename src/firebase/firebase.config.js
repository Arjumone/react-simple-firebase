// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5mLOIOa_qjC_6YYa5XgnZ-edjxvTp2FE",
  authDomain: "react-simple-firebase-e1c41.firebaseapp.com",
  projectId: "react-simple-firebase-e1c41",
  storageBucket: "react-simple-firebase-e1c41.appspot.com",
  messagingSenderId: "226039923229",
  appId: "1:226039923229:web:046b4e60d13c359dbafcf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;