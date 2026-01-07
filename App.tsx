import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Navigation} from "./navigation/configs/staticApiConfig";
import {Provider} from "react-redux";
import {store} from "./state/store";

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light"/>
            <Provider store={store}>
                <Navigation>

                </Navigation>
            </Provider>
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
