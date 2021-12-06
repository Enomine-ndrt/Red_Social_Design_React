import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const app =  firebase.initializeApp({
    "projectId": "my-proyecto-d849d",
    "appId": "1:1087249911357:web:1761a8f374ccf642c1a454",
    "databaseURL": "https://my-proyecto-d849d-default-rtdb.firebaseio.com",
    "storageBucket": "my-proyecto-d849d.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDEqvfeN0q0NpjhF5cqvVX8ARJcmt4_Kbg",
    "authDomain": "my-proyecto-d849d.firebaseapp.com",
    "messagingSenderId": "1087249911357",
    "measurementId": "G-379JWYDE9M"
  });