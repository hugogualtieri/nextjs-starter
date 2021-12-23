import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

/*const firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};*/

const firebaseCredentials = {
  apiKey: "AIzaSyDuSs1VSBZM_DlM0yYd6GDar5zCU5TlqJY",
  authDomain: "nextjs-starter-14c23.firebaseapp.com",
  projectId: "nextjs-starter-14c23",
  storageBucket: "nextjs-starter-14c23.appspot.com",
  messagingSenderId: "489900451832",
  appId: "1:489900451832:web:59f97a1a198a164994d80d",
};

firebase.initializeApp(firebaseCredentials);

export default firebase;
