import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {Expense} from "../../../types/interfaces";
import {addExpense, editExpense} from "../../../state/expenseSlice";
import ExpenseForm from "../../../components/ExpenseForm";
import {StaticScreenProps, useNavigation, useRoute} from "@react-navigation/native";
import {ExpenseEditParams} from "../../../navigation/configs/staticApiConfig";
import {RootState} from "../../../state/store";
import {useLocalSearchParams} from "expo-router";



const EditExpense = ({route}: StaticScreenProps<ExpenseEditParams>   ) => {

    const dispatch = useDispatch();
    const { id } = useLocalSearchParams();
    const expenses = useSelector((state: RootState) => state.expense.expenses);
    const expense = expenses.find((expense) => expense.id === id);
    const navigation = useNavigation();

    const handleEdit = (expense: Expense) => {
        console.log('Edit new user:', expense);
        // API call to create
        dispatch(editExpense(expense));
        navigation.goBack();
    };

    return (
        <ExpenseForm onSubmit={handleEdit} label={"Add new expense"} initialValue={expense} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EditExpense;
