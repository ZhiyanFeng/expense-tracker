import React from 'react';
import {Slot} from "expo-router";
import {AuthProvider} from "../contexts/AuthContext";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {View} from "react-native";

const RootLayout = ({ /* props */}) => {
    return (
        <AuthProvider>
            <Provider store={store} >
                    <Slot />
            </Provider>
        </AuthProvider>
    );
};

export default RootLayout;

