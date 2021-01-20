import Firebase from 'firebase/app';
// Add the Firebase services that you want to use
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAU7iy5E0Bakpw_6sx9uN3KrJESZof0oMM",
    authDomain: "madgiraffestudiossite.firebaseapp.com",
    databaseURL: "https://madgiraffestudiossite.firebaseio.com",
    projectId: "madgiraffestudiossite",
    storageBucket: "madgiraffestudiossite.appspot.com",
    messagingSenderId: "881125434490",
    appId: "1:881125434490:web:2c391edd7aefae0dd3c7c3",
    measurementId: "G-PTDN1MF7GS"
  };
 Firebase.initializeApp(firebaseConfig);
  export default Firebase;