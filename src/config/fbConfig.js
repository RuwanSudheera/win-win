import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAVV1qlhr75M1cl-feDfwFdKvE7jXl_tOY",
  authDomain: "win-win-efa20.firebaseapp.com",
  databaseURL: "https://win-win-efa20.firebaseio.com",
  projectId: "win-win-efa20",
  storageBucket: "win-win-efa20.appspot.com",
  messagingSenderId: "347042838523",
  appId: "1:347042838523:web:b9d4d67fee1baddff7bd5e"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
