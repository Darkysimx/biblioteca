import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDobOV-3G2uE3JZOrYbOK1Oz_mGC5guNqo",
  authDomain: "bribotekaeletronika.firebaseapp.com",
  projectId: "bribotekaeletronika",
  storageBucket: "bribotekaeletronika.appspot.com",
  messagingSenderId: "359660901953",
  appId: "1:359660901953:web:d25ca6bf42b4ff733158c0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

