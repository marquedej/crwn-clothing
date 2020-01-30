import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOcMhh9Q_KXVORTZmHy5n5VZFOmp7__us",
    authDomain: "crwn-db-e9234.firebaseapp.com",
    databaseURL: "https://crwn-db-e9234.firebaseio.com",
    projectId: "crwn-db-e9234",
    storageBucket: "crwn-db-e9234.appspot.com",
    messagingSenderId: "265960518845",
    appId: "1:265960518845:web:9b2bb010f0c3d261bbf3d4",
    measurementId: "G-LB4Z7B01QL"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
