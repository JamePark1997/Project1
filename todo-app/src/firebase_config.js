import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Creating the firestore instance so i can access from other files to acesss DB

const firebaseConfig = {
  apiKey: "AIzaSyBv7xNrQ-HSnTX7W0oah3GIEQAfKssR7cw",
  authDomain: "todoapp-2115b.firebaseapp.com",
  projectId: "todoapp-2115b",
  storageBucket: "todoapp-2115b.appspot.com",
  messagingSenderId: "911228119419",
  appId: "1:911228119419:web:48847b14703000f2f775de",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
