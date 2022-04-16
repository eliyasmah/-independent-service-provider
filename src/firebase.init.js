// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXNnIrMpg6hdYbRlrqlYLv7VL2XrmcRxo",
  authDomain: "provides-services.firebaseapp.com",
  projectId: "provides-services",
  storageBucket: "provides-services.appspot.com",
  messagingSenderId: "266891384953",
  appId: "1:266891384953:web:dc494ffd6fc603b96c9ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;