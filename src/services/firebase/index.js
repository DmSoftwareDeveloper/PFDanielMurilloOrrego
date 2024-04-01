import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFYG5P15DDhjpF3nPXVFCVwrkzg9COFyg",
  authDomain: "e-commerce-32ef2.firebaseapp.com",
  projectId: "e-commerce-32ef2",
  storageBucket: "e-commerce-32ef2.appspot.com",
  messagingSenderId: "361522485053",
  appId: "1:361522485053:web:420d11afc6b93e4eca5754"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);