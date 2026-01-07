import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {IconButton} from "../components/IconButton";
import {useSelector} from "react-redux";
import {selectResentExpense} from "../state/expenseSlice";
import {Expense} from "../types/interfaces";
import {SafeAreaView} from 'react-native-safe-area-context';
import FlatListComponent from "../components/FlatListComponent";


const RecentExpenseScreen = ({ /* props */}) => {
    const navigation = useNavigation();

    const handleIconPress = () => {
        navigation.navigate('HomeTab',
            {
                screen: 'ExpenseAdd'
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

    const recentExpenses = useSelector(selectResentExpense);

    return (
        <FlatListComponent data={recentExpenses} title={'Last 7 days'}></FlatListComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },



});

export default RecentExpenseScreen;
