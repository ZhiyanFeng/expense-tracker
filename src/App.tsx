import {StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./state/store";
import MainComponent from "./MainComponent";
import {AuthProvider} from "./contexts/AuthContext";


export default function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <MainComponent />
            </AuthProvider>
        </Provider>
    )

}

const styles = StyleSheet.create({

});
