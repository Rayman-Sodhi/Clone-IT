import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyAmoYVi2rCFrFeJh4Vr9h1MMlOYgPt9VZI",
  authDomain: "github-c5c88.firebaseapp.com",
  databaseURL: "https://github-c5c88.firebaseio.com",
  projectId: "github-c5c88",
  storageBucket: "github-c5c88.appspot.com",
  messagingSenderId: "389956365199",
  appId: "1:389956365199:web:4bf736df934794516179fa",
  measurementId: "G-MNFMWVVQ26",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`amazonUsers/${userAuth.user.uid}`);
  const { displayName, email } = userAuth.user;


  const snapShot = await userRef.get();
  if (snapShot.exists) return;

  try {
    await userRef.set({
      displayName,
      email,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      ...additionalData,
    });
  } catch (err) {
    console.log("error creating user", err.message);
  }
  // return userRef;
};


