// AddExpenseScreen.tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import {Expense} from "../types/interfaces";
import {addExpense, postExpense} from "../state/expenseSlice";
import {useDispatch} from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import {useNavigation} from "@react-navigation/native";
import {AppDispatch} from "../state/store";
import {useAppDispatch} from "../hooks/hook";


const AddExpenseScreen = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const handleAdd = (data: Expense) => {
        console.log('Adding new user:', data);
        // API call to create
        dispatch(addExpense(data));
        dispatch(postExpense(data));
        navigation.goBack();
    };

    return (
        <ExpenseForm onSubmit={handleAdd} label={"Add new expense"}/>
    );
};

const styles = StyleSheet.create({

});

export default AddExpenseScreen;
