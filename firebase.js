// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC2-0E8EEeHgzYnrZ2qEB2Io5B6gQaEIOc",
  authDomain: "ecommercestore-bade3.firebaseapp.com",
  projectId: "ecommercestore-bade3",
  storageBucket: "ecommercestore-bade3.appspot.com",
  messagingSenderId: "853127698680",
  appId: "1:853127698680:web:a90064baf2b7ddf6a2430d",
  measurementId: "G-J3LLZ8H9G0"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
