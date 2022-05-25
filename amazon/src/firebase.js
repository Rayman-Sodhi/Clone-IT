// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';


// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBisyb1FxrmNaqdZlfCXr867oaiBqgCIYU",
  authDomain: "clone-16e61.firebaseapp.com",
  projectId: "clone-16e61",
  storageBucket: "clone-16e61.appspot.com",
  messagingSenderId: "203628089565",
  appId: "1:203628089565:web:f448fd706e6d4761eb4b34",
  measurementId: "G-VE3SCHKSDX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);



// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };