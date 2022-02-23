// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2oar-ZHjKGV4HnyCErOONY2zLRNRgwXg",
  authDomain: "react-auth-2f564.firebaseapp.com",
  projectId: "react-auth-2f564",
  storageBucket: "react-auth-2f564.appspot.com",
  messagingSenderId: "458782146702",
  appId: "1:458782146702:web:56899eea50251c5c4c09df",
  measurementId: "G-CYM0EC6RYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
