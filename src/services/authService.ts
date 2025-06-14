import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  fetchSignInMethodsForEmail,
  linkWithCredential,
} from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const loginWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (err: any) {
    // If the email already exists with another provider (e.g. password)
    if (err.code === 'auth/account-exists-with-different-credential') {
      const email = err.customData?.email;
      const pendingCred = GoogleAuthProvider.credentialFromError(err);

      if (!email || !pendingCred) throw err;

      const methods = await fetchSignInMethodsForEmail(auth, email);

      if (methods.includes('password')) {
        // Ask user to log in with email/password first
        const password = prompt('This email is already registered. Please enter your password to link Google sign-in:');

        if (!password) throw new Error('Password is required to link accounts.');

        const emailLogin = await signInWithEmailAndPassword(auth, email, password);

        // Link Google credential to the password account
        await linkWithCredential(emailLogin.user, pendingCred);

        return { user: emailLogin.user, providerId: 'google.com', operationType: 'link' } as UserCredential;
      }

      throw err;
    } else {
      throw err;
    }
  }
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
