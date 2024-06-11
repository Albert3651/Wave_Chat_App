import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC5Tj3ZgaTO2I13acb06-ZlQtXQOqvk1A8",
  authDomain: "chatapp-tutorials.firebaseapp.com",
  projectId: "chatapp-tutorials",
  storageBucket: "chatapp-tutorials.appspot.com",
  messagingSenderId: "754612952727",
  appId: "1:754612952727:web:f74d24f74bb2587fe853d2"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
