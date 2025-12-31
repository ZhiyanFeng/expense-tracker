import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {IconButton} from "../components/IconButton";
import ExpenseEditScreen from "./ExpenseEditScreen";


const RecentExpenseScreen = ({ /* props */}) => {
    const navigation = useNavigation();

    const handleIconPress = () => {
        navigation.navigate('HomeTab',
            {
                screen: 'ExpenseEdit'
            }
        );
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
              <IconButton onPress={handleIconPress} size={24} name={'add'}></IconButton>
            ),
        });
    }, [navigation, handleIconPress]);

    return (
        <View style={styles.container}>
            <Text>RecentExpenseScreen Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RecentExpenseScreen;
