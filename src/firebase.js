import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCF9qVqEZqpuHFrRg8ZhBsNwoReCDFtYzg",
  authDomain: "tinder-clone-49ac6.firebaseapp.com",
  databaseURL: "https://tinder-clone-49ac6.firebaseio.com",
  projectId: "tinder-clone-49ac6",
  storageBucket: "tinder-clone-49ac6.appspot.com",
  messagingSenderId: "126244478230",
  appId: "1:126244478230:web:a4ec876cd13ca68db70437",
  measurementId: "G-MGLW3KBDV9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
