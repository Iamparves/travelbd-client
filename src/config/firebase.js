// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtg47u8dqEYAKCSBGUpw8F4qz1WuTbHig",
  authDomain: "phr-travelbd.firebaseapp.com",
  projectId: "phr-travelbd",
  storageBucket: "phr-travelbd.appspot.com",
  messagingSenderId: "205150499744",
  appId: "1:205150499744:web:b874ebe0b13f4e753a2ac5",
  measurementId: "G-JP0YTWBXVK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);