import firebase from "firebase";


//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyB9d7DwuQmZ6GYfdWb9Y5gArQlxiZyx508",
    authDomain: "complaint-cc122.firebaseapp.com",
    projectId: "complaint-cc122",
    storageBucket: "complaint-cc122.appspot.com",
    messagingSenderId: "1040894607475",
    appId: "1:1040894607475:web:4844914feeecb503262a06"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


