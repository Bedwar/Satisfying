// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFwY-FyJ5SNp05knYadhvNnTNb5qinc6g",
  authDomain: "satisfyingyou-7b182.firebaseapp.com",
  projectId: "satisfyingyou-7b182",
  storageBucket: "satisfyingyou-7b182.appspot.com",
  messagingSenderId: "636940024509",
  appId: "1:636940024509:web:56d03cd4f24906cfe495d4",
  measurementId: "G-N2ESB1MSVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);