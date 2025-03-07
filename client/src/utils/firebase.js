// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-b067f.firebaseapp.com",
  projectId: "taskmanager-b067f",
  storageBucket: "taskmanager-b067f.firebasestorage.app",
  messagingSenderId: "692924045879",
  appId: "1:692924045879:web:9450d2d46726c7db073db2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);