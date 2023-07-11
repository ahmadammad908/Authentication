// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP1dbaTbRvY0lsEfUOZy2f1gzu_QSx7Gw",
  authDomain: "ammad-9fe7a.firebaseapp.com",
  projectId: "ammad-9fe7a",
  storageBucket: "ammad-9fe7a.appspot.com",
  messagingSenderId: "486540499852",
  appId: "1:486540499852:web:d449b998fe26753428d4a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
