// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXpRhGmHZqeBrKH1i5comNf7Tm48Qwob8",
  authDomain: "netflix-clone-21e9e.firebaseapp.com",
  projectId: "netflix-clone-21e9e",
  storageBucket: "netflix-clone-21e9e.appspot.com",
  messagingSenderId: "260834960364",
  appId: "1:260834960364:web:7a3f5d96ac0ede353696c9",
  measurementId: "G-08LZLPHLDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();