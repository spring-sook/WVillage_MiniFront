import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// 지숙's Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBtQu-n_Qm7w-gVOnKV5ulAHPYmHXnSBVk",
  authDomain: "study-react-84362.firebaseapp.com",
  projectId: "study-react-84362",
  storageBucket: "study-react-84362.firebasestorage.app",
  messagingSenderId: "164089901516",
  appId: "1:164089901516:web:391b3557eb6b7528fbad69",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
