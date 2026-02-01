import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Redirect, Stack} from "expo-router";
import {useAuth} from "../../contexts/AuthContext";


const StackLayout = ({ /* props */}) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        // If already authenticated, redirect to the main app
        console.log('inside auth layout', isAuthenticated);
        return <Redirect href={"/expenses/(display)/"} />
    }

    return (
        <Stack />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StackLayout;
