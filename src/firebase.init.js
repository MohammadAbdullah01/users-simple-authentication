// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXC6fL9t_xZo7PxL8uw3OZfP3BSE0Y6p4",
    authDomain: "practise-router-firebase.firebaseapp.com",
    projectId: "practise-router-firebase",
    storageBucket: "practise-router-firebase.appspot.com",
    messagingSenderId: "146255384757",
    appId: "1:146255384757:web:72b3b8ee57593ee4972efc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;