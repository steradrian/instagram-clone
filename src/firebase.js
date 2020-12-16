import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyA8SIeHJZaREDbj8MtlznJZ-k7uSK06RC4",
  authDomain: "instagram-clone-aba9c.firebaseapp.com",
  projectId: "instagram-clone-aba9c",
  storageBucket: "instagram-clone-aba9c.appspot.com",
  messagingSenderId: "553734508107",
  appId: "1:553734508107:web:cab796cacd3518f7edc7ce",
  measurementId: "G-6RFFY6VRCH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };