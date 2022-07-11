import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7suRJ6aenjWl_jBjVMg5YNVx_9_VdZXQ",
    authDomain: "labchat-c7d37.firebaseapp.com",
    projectId: "labchat-c7d37",
    storageBucket: "labchat-c7d37.appspot.com",
    messagingSenderId: "309972736220",
    appId: "1:309972736220:web:8ba14ae2f6b15efdeafc19",
    measurementId: "G-VZZM86VYE4"
})

const db = firebase.firestore();
const Auth = firebase.auth();


export { db, Auth }