import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vituoui.firebaseapp.com",
  projectId: "vituoui",
  storageBucket: "vituoui.firebasestorage.app",
  messagingSenderId: "972767002901",
  appId: "1:972767002901:web:3f86f5f1047bbc530ba91c"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider};