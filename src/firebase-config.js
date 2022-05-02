// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// for data firebase

import { getFirestore } from "firebase/firestore";

// for authentication process

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBgKuc6KbWfrS7pc-PcwVEwR4eb7kupFj8",

  authDomain: "blogproject-ebe7a.firebaseapp.com",

  projectId: "blogproject-ebe7a",

  storageBucket: "blogproject-ebe7a.appspot.com",

  messagingSenderId: "848378957520",

  appId: "1:848378957520:web:adea81200dcb9f8c5d18d5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// auth

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// initialize the db

export const db = getFirestore(app);
