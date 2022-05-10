import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARQXU8EWAavl_uGn9i7fowjiQCjmdSEeY",
    authDomain: "linkedin-clone-yt-e39dd.firebaseapp.com",
    projectId: "linkedin-clone-yt-e39dd",
    storageBucket: "linkedin-clone-yt-e39dd.appspot.com",
    messagingSenderId: "737742175028",
    appId: "1:737742175028:web:3c88e2f155692d8fac8361",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  export default firebase;