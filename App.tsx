import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Navigation} from "./navigation/configs/staticApiConfig";

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light"/>
            <Navigation>

            </Navigation>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
