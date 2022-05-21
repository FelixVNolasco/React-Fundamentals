// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCYccv4rqOR-DT0c0SkJdj1fTCq7lQtGto",
  authDomain: "admin-dashboard-bb387.firebaseapp.com",
  projectId: "admin-dashboard-bb387",
  storageBucket: "admin-dashboard-bb387.appspot.com",
  messagingSenderId: "168372181127",
  appId: "1:168372181127:web:2b49f58dc5b28d81c88022",
  measurementId: "G-PQBZMCP2KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
}