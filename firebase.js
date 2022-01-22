// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGLFv80EpGq7NEt6i5sho0Dgi648xxpXc",
  authDomain: "twitter-clone-1167c.firebaseapp.com",
  projectId: "twitter-clone-1167c",
  storageBucket: "twitter-clone-1167c.appspot.com",
  messagingSenderId: "23111748461",
  appId: "1:23111748461:web:465268c0ff86bda1d66864",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
