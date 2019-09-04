import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCDroXdXU9EUEHoBfa1P1o04ikShZ4gDUs",
  authDomain: "win-win-c2cf3.firebaseapp.com",
  databaseURL: "https://win-win-c2cf3.firebaseio.com",
  projectId: "win-win-c2cf3",
  storageBucket: "",
  messagingSenderId: "65890581581",
  appId: "1:65890581581:web:0c1cde952c9acc9d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
