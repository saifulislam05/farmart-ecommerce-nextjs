import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = app.auth()
const db = app.firestore()
const storage= firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export {auth,db,storage,timestamp}