import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsyC9ogNbHxNtVIzYde4y5jX4fvH-6H-g",
  authDomain: "kanji-no-yarikata.firebaseapp.com",
  projectId: "kanji-no-yarikata",
  storageBucket: "kanji-no-yarikata.firebasestorage.app",
  messagingSenderId: "748843722184",
  appId: "1:748843722184:web:cac64ae4cd193150a38cfd",
  measurementId: "G-64GNZM222C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);