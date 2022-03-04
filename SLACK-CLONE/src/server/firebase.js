import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyAvHbSfPRXSzs_ln6yiTavygHrXp3-Ua4E",
    authDomain: "slack-clone-react-1a9c5.firebaseapp.com",
    projectId: "slack-clone-react-1a9c5",
    storageBucket: "slack-clone-react-1a9c5.appspot.com",
    messagingSenderId: "343195143139",
    appId: "1:343195143139:web:dbf2a594d8165beb626ed6",
    measurementId: "G-EQ3YCPCS28"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase