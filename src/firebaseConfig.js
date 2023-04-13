import firebase from 'firebase/compat/app';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

  // Configure Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDCJjqsQXJx9bDkoupPOcDFSdzoh6QQv6Y",
    authDomain: "hz-mugs-and-coffee.firebaseapp.com",
    projectId: "hz-mugs-and-coffee",
    storageBucket: "hz-mugs-and-coffee.appspot.com",
    messagingSenderId: "768456164017",
    appId: "1:768456164017:web:1387a531715a1712089890"
      // ...
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = getAuth();
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
export const signin=async(email,pass)=>{
  return await signInWithEmailAndPassword(auth,email,pass);
}
export const signup=async(email,pass)=>{
  return await createUserWithEmailAndPassword(auth,email,pass);
}
export const logout=async()=>{
  return signOut(auth);
}
// Change profile 
const storage=getStorage();
export const upload = async (file,currentUser,setLoading) =>{
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  // setLoading(false);
}
export { auth,storage };