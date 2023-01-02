// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth"
import { getDoc, setDoc, doc, getFirestore} from "firebase/firestore"
import { useResolvedPath } from "react-router-dom";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqYABcdSdHeh2JDec_ZLSUi7QFuKzke4w",
  authDomain: "crown-db-921e6.firebaseapp.com",
  projectId: "crown-db-921e6",
  storageBucket: "crown-db-921e6.appspot.com",
  messagingSenderId: "374429513453",
  appId: "1:374429513453:web:d44ff814646c986c51fee4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGoogelPopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
const userDocRef = doc(db, 'users', userAuth.uid);
  
  console.log(userDocRef);

const userSnapshot = await getDoc(userDocRef);

if(!userSnapshot.exists()) {
  const {displayName, email} = userAuth;
  const createdAt = new Date()

  try {
await setDoc(userDocRef, {
  displayName,
  email,
  createdAt,
});
  }catch(error) {
console.log("error creating user", error.message)
  }
}
return userDocRef;
} 