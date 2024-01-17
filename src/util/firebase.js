// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVUkWkuRV-NRvaVztiE7bcJLxCZacpc0k",
  authDomain: "netflixclone-97f94.firebaseapp.com",
  projectId: "netflixclone-97f94",
  storageBucket: "netflixclone-97f94.appspot.com",
  messagingSenderId: "620926368172",
  appId: "1:620926368172:web:7b95407d3c3eade5676209",
  measurementId: "G-2HB8M8YY53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();