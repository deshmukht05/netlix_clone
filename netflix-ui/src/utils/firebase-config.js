import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjtuY_RFAox0c1wXve7GZDPkbHc51CMb4",
  authDomain: "react-netflix-clone-e685b.firebaseapp.com",
  projectId: "react-netflix-clone-e685b",
  storageBucket: "react-netflix-clone-e685b.appspot.com",
  messagingSenderId: "677399504995",
  appId: "1:677399504995:web:12531ce5dfd06d7dcc3056",
  measurementId: "G-BME97FQ9L3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);