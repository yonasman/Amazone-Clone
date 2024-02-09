// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// for authuntication
import {getAuth} from "firebase/auth"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB2w4A6WfkA_xirWN1NTc6AQqRBCM6ysZ4",
  authDomain: "e-clone-3a65b.firebaseapp.com",
  projectId: "e-clone-3a65b",
  storageBucket: "e-clone-3a65b.appspot.com",
  messagingSenderId: "76661915",
  appId: "1:76661915:web:19be33972f99198f78323e",
  measurementId: "G-NRPLKS0Y4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = app.firestore()