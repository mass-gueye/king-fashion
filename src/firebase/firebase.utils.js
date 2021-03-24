import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9ZH1szVre_Z4QtY5ymrVjIfYNwCYLmRE",
    authDomain: "king-fashion.firebaseapp.com",
    projectId: "king-fashion",
    storageBucket: "king-fashion.appspot.com",
    messagingSenderId: "1048653555386",
    appId: "1:1048653555386:web:36bb03f1de576c6fce8483",
    measurementId: "G-HC2K7KE0KH"
};

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});


export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;