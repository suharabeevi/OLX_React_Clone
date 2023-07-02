import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASzllpUJaYZ44nfG79oxiNGmO0TS-CMfY",
    authDomain: "olx--react.firebaseapp.com",
    projectId: "olx--react",
    storageBucket: "olx--react.appspot.com",
    messagingSenderId: "246593766089",
    appId: "1:246593766089:web:a2701dc496a700f60d8318",
    measurementId: "G-9YH5ENSSX3"
  };

  export default firebase.initializeApp(firebaseConfig)