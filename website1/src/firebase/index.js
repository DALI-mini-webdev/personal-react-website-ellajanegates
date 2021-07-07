import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyB4lAKpZ0hSRPX7Koo0w2ollEj1i5IdZbo",
    authDomain: "website1-3fdee.firebaseapp.com",
    projectId: "website1-3fdee",
    storageBucket: "website1-3fdee.appspot.com",
    messagingSenderId: "851629127035",
    appId: "1:851629127035:web:70828007d4a636cc1f39de",
    measurementId: "G-90TE64FT8K"
});

const db = firebase.firestore();

export default {
    firebase, db
}