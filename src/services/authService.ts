import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const loginWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const registerWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async (): Promise<void> => {
  return await signOut(auth);
};
