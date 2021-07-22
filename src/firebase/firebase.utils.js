import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUj90y3khbAXeCN_9XNn7MlxnpiWeoUg4",
  authDomain: "crwn-db-21128.firebaseapp.com",
  projectId: "crwn-db-21128",
  storageBucket: "crwn-db-21128.appspot.com",
  messagingSenderId: "295548717710",
  appId: "1:295548717710:web:6c5dcc0fb3905fea1d97df",
  measurementId: "G-MQR11YEX7B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
