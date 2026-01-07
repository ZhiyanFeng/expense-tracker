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

    // const recentExpenses = useSelector(selectResentExpense);
    // ListRenderItem<T> helps type the { item } destructuring
    const recentExpenses = [{
        id: '1',
        name: "RecentExpense",
        price: '1',
        quantity: '1',
        date: new Date().toDateString(),
    }, {
        id: '2',
        name: "RecentExpense",
        price: '2',
        quantity: '2',
        date: new Date().toDateString(),
    }]


    return (
        <FlatListComponent data={recentExpenses }></FlatListComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },



});

export default RecentExpenseScreen;
