import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG84qOKAMvRE-DTPKttsjvCu286_H6x6w",
  authDomain: "ecommerce-coderhousereac-8e98f.firebaseapp.com",
  projectId: "ecommerce-coderhousereac-8e98f",
  storageBucket: "ecommerce-coderhousereac-8e98f.appspot.com",
  messagingSenderId: "345161470088",
  appId: "1:345161470088:web:90ad7b31b9cd0dd36bcf3d",
  measurementId: "G-PPWWMX8ZTJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);

