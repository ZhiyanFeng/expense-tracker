import firebase from '@react-native-firebase/app'; // <--- Import this
import auth, {FirebaseAuthTypes, onAuthStateChanged} from '@react-native-firebase/auth';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import User = FirebaseAuthTypes.User;
import {signInWithEmailAndPassword} from "firebase/auth";

// Define the shape of our (auth) state
interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string)=> void;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode; // Defines that children can be any valid React Node
}
export const AuthProvider = ({children} :AuthProviderProps) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Subscriber to update state on login/logout or page refresh
        const unsubscribe = auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setIsAuthenticated(true);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    /**
     * Signs in a user with email and password.
     * @param {string} email - The user's email address.
     * @param {string} password - The user's password.
     */
    const login = (email:string, password:string) => {
        auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in successfully
                const user = userCredential.user;
                console.log("User signed in:", user.email);
                // You can redirect the user or update the UI here
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Sign-in error:", errorCode, errorMessage);
                // Handle specific errors (e.g., wrong password, user not found)
            });
    };

    const logout = () => auth().signOut();

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated
    };

    console.log('value', value);
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};

// Custom hook for easy access
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
