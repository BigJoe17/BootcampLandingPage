import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI75ZEzk30UPu9RsVwaeuQX0_mjXCOTxk",
  authDomain: "webdevbootcamp-f5306.firebaseapp.com",
  projectId: "webdevbootcamp-f5306",
  storageBucket: "webdevbootcamp-f5306.firebasestorage.app",
  messagingSenderId: "53212666276",
  appId: "1:53212666276:web:e6c4edbb841a0bdb8c4931"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);