import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgyR-jPQtsM7gTXcXz3-YARozQW_PQTCQ",
  authDomain: "crwn-db-727dc.firebaseapp.com",
  databaseURL: "https://crwn-db-727dc.firebaseio.com",
  projectId: "crwn-db-727dc",
  storageBucket: "crwn-db-727dc.appspot.com",
  messagingSenderId: "117351977030",
  appId: "1:117351977030:web:0f2202e62000d7fa6dba47"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select+account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;