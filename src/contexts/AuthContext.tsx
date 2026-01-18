import firebase from '@react-native-firebase/app'; // <--- Import this
import auth, {FirebaseAuthTypes, onAuthStateChanged} from '@react-native-firebase/auth';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import User = FirebaseAuthTypes.User;

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

    useEffect(() => {
        // Subscriber to update state on login/logout or page refresh
        const unsubscribe = auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    const logout = () => auth().signOut();

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
