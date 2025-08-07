import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApOGmnD22kY0AxmSLAmbYUi0TbHT0rF_o",
  authDomain: "crud-with-api-c91f2.firebaseapp.com",
  projectId: "crud-with-api-c91f2",
  storageBucket: "crud-with-api-c91f2.firebasestorage.app",
  messagingSenderId: "901593865673",
  appId: "1:901593865673:web:930931d0b58569bab81c18",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
