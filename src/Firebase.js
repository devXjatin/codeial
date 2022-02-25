// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyXlW6AocBSdDpiMvn4ugpvEzW_ezCDkE",
  authDomain: "react-chat-app-6d694.firebaseapp.com",
  databaseURL:"http://react-chat-app-6d694.firebaseio.com",
  projectId: "react-chat-app-6d694",
  storageBucket: "react-chat-app-6d694.appspot.com",
  messagingSenderId: "270190488979",
  appId: "1:270190488979:web:38fb31363e9b10919d8c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth,db, storage};