// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtUC6MhNpLGGkgD70fqcAeaaKrhucUlh8",
    authDomain: "distancewind-e-learning.firebaseapp.com",
    projectId: "distancewind-e-learning",
    storageBucket: "distancewind-e-learning.appspot.com",
    messagingSenderId: "93357244937",
    appId: "1:93357244937:web:c6b41abdaf311ffc62eed8"
};
// process.env.

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;