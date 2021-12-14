import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use


  const firebaseConfig = {
    apiKey: "AIzaSyBXByY_sT__qp7_SPeK886_V2SD5t5l9qs",
    authDomain: "queens-coffee-restaurant-app.firebaseapp.com",
    projectId: "queens-coffee-restaurant-app",
    storageBucket: "queens-coffee-restaurant-app.appspot.com",
    messagingSenderId: "199716215446",
    appId: "1:199716215446:web:77b31ffe8e6a9fcec480b7"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);