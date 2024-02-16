import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWm2hVH0oDFZaEewFWnJUnvXVsIowLCWM",
  authDomain: "docs-yt-8129a.firebaseapp.com",
  projectId: "docs-yt-8129a",
  storageBucket: "docs-yt-8129a.appspot.com",
  messagingSenderId: "206617708032",
  appId: "1:206617708032:web:8a801f826adf306badfae5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
