import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrV3FJwZ1kYWEWypK4OMlXoShp4lg9qFc",
  authDomain: "jetblack-project.firebaseapp.com",
  projectId: "jetblack-project",
  storageBucket: "jetblack-project.appspot.com",
  messagingSenderId: "51022390996",
  appId: "1:51022390996:web:6636c1acc18bf09d08fd41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};