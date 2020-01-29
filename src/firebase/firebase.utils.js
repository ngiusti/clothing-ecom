import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYLcO9okGbOW1mEEPi1bgyxaeKod_8MuQ",
    authDomain: "clothing-db-2304f.firebaseapp.com",
    databaseURL: "https://clothing-db-2304f.firebaseio.com",
    projectId: "clothing-db-2304f",
    storageBucket: "clothing-db-2304f.appspot.com",
    messagingSenderId: "99813126351",
    appId: "1:99813126351:web:ed60ab41978ddaf06b47ba",
    measurementId: "G-674K9TJVEP"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;