import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

import "firebase/storage"; // Import specific Firebase services if you need them

const firebaseConfig = {
  apiKey: "AIzaSyC_GknCorE0goHp-bDUqySS7-BmrjONXE8",

  authDomain: "ceylonvibes.firebaseapp.com",

  projectId: "ceylonvibes",

  storageBucket: "ceylonvibes.appspot.com",

  messagingSenderId: "804091201630",

  appId: "1:804091201630:web:234dbd999f20e197c78ccf",

  measurementId: "G-D9TL6Y3L0V"

};


firebase.initializeApp(firebaseConfig);

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
