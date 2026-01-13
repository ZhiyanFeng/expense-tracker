import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {
    getAuth,
    onAuthStateChanged,
    User,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {View} from "react-native";

// Define the shape of our auth state
interface AuthContextType {
    user: User | null;
    loading: boolean;
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
    const auth = getAuth();

    useEffect(() => {
        // Subscriber to update state on login/logout or page refresh
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, [auth]);

    const logout = () => signOut(auth);

    const value = {
        user,
        loading,
        logout,
        isAuthenticated: !!user,
    };

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
