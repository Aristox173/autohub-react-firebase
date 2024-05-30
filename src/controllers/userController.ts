// userController.ts
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../controllers/firebase/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { User } from "../models/user";

export const registerUser = async (userData: User) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    await setDoc(doc(db, "user", userCredential.user.uid), {
      ...userData,
      timestamp: serverTimestamp(),
    });

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
