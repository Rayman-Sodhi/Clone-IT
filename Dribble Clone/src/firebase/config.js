import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAPdoD4oLc1sQXT7sw_nOn0CxRob4S8jQo",
    authDomain: "dribble-clone-b09d9.firebaseapp.com",
    databaseURL: "https://dribble-clone-b09d9.firebaseio.com",
    projectId: "dribble-clone-b09d9",
    storageBucket: "dribble-clone-b09d9.appspot.com",
    messagingSenderId: "737139342786",
    appId: "1:737139342786:web:fd69c33a9100d957b7ea5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const auth = firebase.auth();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timeStamp, auth};