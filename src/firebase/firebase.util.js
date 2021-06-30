import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyCDiVAXaXn9FyhX4rBXMnwQ6UzRFJtx7M0",
  authDomain: "alibaba-a93a9.firebaseapp.com",
  projectId: "alibaba-a93a9",
  storageBucket: "alibaba-a93a9.appspot.com",
  messagingSenderId: "47829298674",
  appId: "1:47829298674:web:4d80c641ed519f8afc0f6b",
  measurementId: "G-1XSVB4JG15",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const createUserProfileDocument = async (user, addional) => {
  if (!user) return;
  const userRef = fireStore.doc(`users/${user.uid}`); //* create reference of the user uid

  const snapShot = await userRef.get(); //* from referene check whether it exists in databade

  console.log(user.uid, addional, snapShot.exists, "firebase");
  // console.log(snapShot, "snapshot");
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        createdAt,
        email,
        ...addional,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_acccount" });

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
