import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq6AiXOTM-7B9mzRpG0KAhjbO5Pcr1wqE",
    authDomain: "project1-35ebe.firebaseapp.com",
    projectId: "project1-35ebe",
    storageBucket: "project1-35ebe.appspot.com",
    messagingSenderId: "209909789536",
    appId: "1:209909789536:web:8c7eb56e594622424f6405"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// 로그인 관련 코드
const auth = firebase.auth();

// 구글로 로그인 창이 바로 뜨게 하는 코드
const provider = new firebase.auth.GoogleAuthProvider()

// 데이터베이스와 관련된 코드
const db = firebase.firestore();

export { auth, provider };

export default db