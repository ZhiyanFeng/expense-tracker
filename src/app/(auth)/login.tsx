import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRouter} from "expo-router";
import {useAuth} from "../../contexts/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

   const { login } = useAuth();

    const handleLogin = () => {
        console.log('Logging in with:', { email, password });
        login(email, password);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.content}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('/signup')}>
                    <Text style={styles.footerText}>
                        Don't have an account? <Text style={styles.link}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, color: '#333' },
    subtitle: { fontSize: 18, color: '#666', marginBottom: 30 },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: '#007bff',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    footerText: { marginTop: 20, textAlign: 'center', color: '#666' },
    link: { color: '#007bff', fontWeight: 'bold' },
});

export default Login;