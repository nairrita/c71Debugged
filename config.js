import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBhiFLrZy-nSQAbfg_ekTlsk7kPwwyGkMk",
    authDomain: "wily-app-7940e.firebaseapp.com",
    databaseURL: "https://wily-app-7940e.firebaseio.com",
    projectId: "wily-app-7940e",
    storageBucket: "wily-app-7940e.appspot.com",
    messagingSenderId: "633333770639",
    appId: "1:633333770639:web:3be19d6ca72edc9184c3fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();