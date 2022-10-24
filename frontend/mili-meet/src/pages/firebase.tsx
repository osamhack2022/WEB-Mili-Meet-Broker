import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpZjmaCyjQGJnuYIE5PeUK9SpmWzKpG-8",
  authDomain: "mili-meet.firebaseapp.com",
  databaseURL: "https://mili-meet-default-rtdb.firebaseio.com",
  projectId: "mili-meet",
  storageBucket: "mili-meet.appspot.com",
  messagingSenderId: "323599206721",
  appId: "1:323599206721:web:045e2d822eb69a4175b9c0",
  measurementId: "G-6JW0FGGXEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;