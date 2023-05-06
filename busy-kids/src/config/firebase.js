// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUqsbLt2rWsCyZbBOhdFQOYGkHKaqRQmU",
  authDomain: "bankaroo-6ae1b.firebaseapp.com",
  projectId: "bankaroo-6ae1b",
  storageBucket: "bankaroo-6ae1b.appspot.com",
  messagingSenderId: "107339980367",
  appId: "1:107339980367:web:e9adeff3ad63005b42143a",
  measurementId: "G-322M0F733B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

//
