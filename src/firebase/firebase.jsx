// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmXI1SrPNurFvEGSHzRONzCbKY5-9N2SU",
  authDomain: "dragonnews-59772.firebaseapp.com",
  projectId: "dragonnews-59772",
  storageBucket: "dragonnews-59772.appspot.com",
  messagingSenderId: "609901186394",
  appId: "1:609901186394:web:97a4605e1b9b40612af763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;