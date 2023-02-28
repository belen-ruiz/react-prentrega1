import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBG84qOKAMvRE-DTPKttsjvCu286_H6x6w",
  authDomain: "ecommerce-coderhousereac-8e98f.firebaseapp.com",
  projectId: "ecommerce-coderhousereac-8e98f",
  storageBucket: "ecommerce-coderhousereac-8e98f.appspot.com",
  messagingSenderId: "345161470088",
  appId: "1:345161470088:web:90ad7b31b9cd0dd36bcf3d",
  measurementId: "G-PPWWMX8ZTJ"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

