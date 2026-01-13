import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Navigation} from "./navigation/configs/staticApiConfig";
import {fetchAllExpenses} from "./state/expenseSlice";
import {useAppDispatch} from "./hooks/hook";


const MainComponent = ({ /* props */}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllExpenses());
    })


    return (
        <SafeAreaProvider>
            <StatusBar style="dark"/>
                <Navigation>
                </Navigation>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainComponent;
