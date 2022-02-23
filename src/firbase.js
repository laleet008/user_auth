// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRFcEyAk2xC-3Iz8X7ezicQoDgkFmwTL0",
  authDomain: "phone-auth-e2158.firebaseapp.com",
  projectId: "phone-auth-e2158",
  storageBucket: "phone-auth-e2158.appspot.com",
  messagingSenderId: "139093588884",
  appId: "1:139093588884:web:7112233749f5be4289ad81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
