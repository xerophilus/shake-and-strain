import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore'
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcadII2zGzwVDIOfEQRawkTxO0CqojJG0",
  authDomain: "shake-and-strain-template.firebaseapp.com",
  projectId: "shake-and-strain-template",
  storageBucket: "shake-and-strain-template.appspot.com",
  messagingSenderId: "665940819241",
  appId: "1:665940819241:web:9e64ee5f45224065804b38",
  measurementId: "G-1TFCJZFPYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const recipeRef = collection(db, 'recipes');