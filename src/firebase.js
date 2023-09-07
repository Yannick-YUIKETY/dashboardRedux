// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' ;
import {getStorage} from 'firebase/storage' ;
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPclwRZFdRz0s1qc_5E5ErTuytqEuXkvQ",
  authDomain: "dashboard-e0b9a.firebaseapp.com",
  projectId: "dashboard-e0b9a",
  storageBucket: "dashboard-e0b9a.appspot.com",
  messagingSenderId: "484091291278",
  appId: "1:484091291278:web:178184ac86125fa27c4bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbFirestore = getFirestore(app) ;

export const storage = getStorage(app) ;

export const auth = getAuth(app) ;