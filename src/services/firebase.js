// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkc2SaXAHVw42RdGAHxtfJwY7c7MXMDMc",
  authDomain: "loja-on-images.firebaseapp.com",
  projectId: "loja-on-images",
  storageBucket: "loja-on-images.appspot.com",
  messagingSenderId: "919875561294",
  appId: "1:919875561294:web:aa1e27eb1806e39bec601f",
  measurementId: "G-85W90FSWYV"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);