// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from "./privateKeys";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//firebase store initialize
const db = getFirestore(app)


export {db, auth}
