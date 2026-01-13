import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

// Login function (call this from your component)
export const login = (email: string, pass: string) => signInWithEmailAndPassword(auth, email, pass);

// Logout function (call this from your component)
export const logout = () => signOut(auth);
