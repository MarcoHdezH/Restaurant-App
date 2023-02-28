
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0JZV9Ad6bG-Lo59Do-7beYJ7QLgnKmek",
  authDomain: "restaurant-app-d53db.firebaseapp.com",
  projectId: "restaurant-app-d53db",
  storageBucket: "restaurant-app-d53db.appspot.com",
  messagingSenderId: "252460491967",
  appId: "1:252460491967:web:5142ce309b855d8095920a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };