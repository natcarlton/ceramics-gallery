// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAphzV1tHT4wM__zYnX1QiqUqreeI3DZIk",
    authDomain: "ceramics-gallery.firebaseapp.com",
    projectId: "ceramics-gallery",
    storageBucket: "ceramics-gallery.appspot.com",
    messagingSenderId: "168652917502",
    appId: "1:168652917502:web:b1ab3a27cb654bb843f3af",
    measurementId: "G-MF5GYW0DB4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);