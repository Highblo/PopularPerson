import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-bjTQAVwaqfzx_L5IPWYdJTfK5hehUjk",
  authDomain: "popularperson.firebaseapp.com",
  projectId: "popularperson",
  storageBucket: "popularperson.appspot.com",
  messagingSenderId: "864665188492",
  appId: "1:864665188492:web:0305ceacd73bd37fff23a9",
  measurementId: "G-CDKPV65126"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);