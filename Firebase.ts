import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdaq1eOwB56y61w3p5LdNOCb9OZFADK7g",
  authDomain: "gaming-hub-103.firebaseapp.com",
  projectId: "gaming-hub-103",
  storageBucket: "gaming-hub-103.appspot.com",
  messagingSenderId: "224846890205",
  appId: "1:224846890205:web:45b816b5a0a5daa64bc734",
  measurementId: "G-35C1Y9SHXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle: any = ()=> signInWithRedirect(auth, provider);
// export const continueWithGoogle: any = () => signI

export const logoutGoogle = () => auth.signOut();