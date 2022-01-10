/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEt12BXxIpQjuzrx1zB2Rpsf0TkCPwGC4",
    authDomain: "react-firebase-crud-2bbaa.firebaseapp.com",
    projectId: "react-firebase-crud-2bbaa",
    storageBucket: "react-firebase-crud-2bbaa.appspot.com",
    messagingSenderId: "772965182142",
    appId: "1:772965182142:web:80cbc5fe4f5d4536cf4cef",
    measurementId: "G-MKY3TJ1K1P"
  };

  // Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// connect filestore 
export const db = getFirestore(app);