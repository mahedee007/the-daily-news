// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2L5F8swHbKP8SBEXP4LUkaC6mDqJCSY",
  authDomain: "the-daily-news-cef37.firebaseapp.com",
  projectId: "the-daily-news-cef37",
  storageBucket: "the-daily-news-cef37.appspot.com",
  messagingSenderId: "793469425805",
  appId: "1:793469425805:web:0a43092459704794556ac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;