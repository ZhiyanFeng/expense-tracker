
import {AuthProvider} from "./contexts/AuthContext";
import {StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./state/store";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Navigation} from "./navigation/configs/staticApiConfig";
import React from "react";


export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar style="dark"/>
                <AuthProvider>
                    <Navigation>
                    </Navigation>
                </AuthProvider>
            </SafeAreaProvider>
        </Provider>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});