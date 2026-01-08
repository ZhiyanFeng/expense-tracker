// AddExpenseScreen.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {Expense} from "../types/interfaces";
import {addExpense} from "../state/expenseSlice";
import {useDispatch} from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import {useNavigation} from "@react-navigation/native";


const AddExpenseScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleAdd = (data: Expense) => {
        console.log('Adding new user:', data);
        // API call to create
        dispatch(addExpense(data));
        navigation.goBack();

    };

    return (
        <ExpenseForm onSubmit={handleAdd} label={"Add new expense"}/>
    );
};

const styles = StyleSheet.create({

});

export default AddExpenseScreen;
