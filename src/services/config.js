import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "kalani-7c3ea.firebaseapp.com",
    projectId: "kalani-7c3ea",
    storageBucket: "kalani-7c3ea.appspot.com",
    messagingSenderId: "895054730860",
    appId: "1:895054730860:web:0cdc93c97fd0bc6b25ea49"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 