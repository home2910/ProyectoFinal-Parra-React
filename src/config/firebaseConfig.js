// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPz4gDQmRTq-D1atl8YTYSfEogu7rsNU8",
    authDomain: "proyecto-react-coder-934e6.firebaseapp.com",
    projectId: "proyecto-react-coder-934e6",
    storageBucket: "proyecto-react-coder-934e6.appspot.com",
    messagingSenderId: "750695249508",
    appId: "1:750695249508:web:257ad4d7f48105323f1171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);