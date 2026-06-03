import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAbgBeqIE16xrePnrA49_0m1n8UX8vb9RA",
  authDomain: "precision-afe53.firebaseapp.com",
  projectId: "precision-afe53",
  storageBucket: "precision-afe53.firebasestorage.app",
  messagingSenderId: "475873113051",
  appId: "1:475873113051:web:b9be77f770c06b0a9c6dfe",
  measurementId: "G-TK3R8J1MWN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export let analytics = null;
isSupported().then((supported) => {
  if (supported) analytics = getAnalytics(app);
});

export default app;
