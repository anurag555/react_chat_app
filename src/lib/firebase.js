import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCc-sjjZVVsNcGPsFjAAoCPF2XO_cTImRI",
  authDomain: "reactchat-886c9.firebaseapp.com",
  projectId: "reactchat-886c9",
  storageBucket: "reactchat-886c9.appspot.com",
  messagingSenderId: "833581646192",
  appId: "1:833581646192:web:d3bdbc1c23122697730fb5"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()
