import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Navigation} from "./navigation/configs/staticApiConfig";
import {Provider, useDispatch} from "react-redux";
import {AppDispatch, store} from "./state/store";
import MainComponent from "./MainComponent";


export default function App() {
    return (
        <Provider store={store}>
            <MainComponent />
        </Provider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
