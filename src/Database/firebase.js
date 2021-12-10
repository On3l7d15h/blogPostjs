//importing
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBIKaxPWk6dDWba-68ZzSzBwa4sQ56J9iI",
    authDomain: "blog-reactjs-70049.firebaseapp.com",
    projectId: "blog-reactjs-70049",
    storageBucket: "blog-reactjs-70049.appspot.com",
    messagingSenderId: "758431932383",
    appId: "1:758431932383:web:306967d0c2f332e4996e6a"
});

//exports!!
export const auth = firebase.auth();
export const db = firebase.database();
export default firebaseConfig;