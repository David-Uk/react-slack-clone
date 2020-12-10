import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBZX5zIUF2xnJGBkC6pwugGXjQzvpFpgG4",
  authDomain: "react-slack-clone-d6046.firebaseapp.com",
  databaseURL: "https://react-slack-clone-d6046.firebaseio.com",
  projectId: "react-slack-clone-d6046",
  storageBucket: "react-slack-clone-d6046.appspot.com",
  messagingSenderId: "624133129400",
  appId: "1:624133129400:web:563f72653165af7265204d",
  measurementId: "G-EVGEJPLLE5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
