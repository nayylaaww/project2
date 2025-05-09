// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ⬅️ Tambahan

const firebaseConfig = {
  apiKey: "AIzaSyATZ_Oj-0WBImrDoI4w2y_ok-J0VF5DUKE",
  authDomain: "algorithmics-universe.firebaseapp.com",
  projectId: "algorithmics-universe",
  storageBucket: "algorithmics-universe.firebasestorage.app",
  messagingSenderId: "982328538573",
  appId: "1:982328538573:web:d9c4f892a82540d1ef0084"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ⬅️ Ini penting buat akses Firestore
export default app;
