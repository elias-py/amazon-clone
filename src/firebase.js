import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGJP85z5zgCss9xu3MLMAHyZFoN5LJP0A",
  authDomain: "clone-6bbf4.firebaseapp.com",
  databaseURL: "https://clone-6bbf4.firebaseio.com",
  projectId: "clone-6bbf4",
  storageBucket: "clone-6bbf4.appspot.com",
  messagingSenderId: "51729192162",
  appId: "1:51729192162:web:677fe741777afad6d53abb",
  measurementId: "G-N8LY2R720Y"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }