import {Expense} from "../types/interfaces";
import {createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface ExpenseState {
    expenses: Expense[];
}

const initialState: ExpenseState = {expenses: []};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
            console.log(state.expenses);
        },
        deleteExpense: (state, action) => {
            console.log("delete payload", action.payload);
            state.expenses.splice(state.expenses.findIndex(expenses => expenses.id === action.payload), 1);
        },
        editExpense: (state, action) => {
            console.log("edit payload", action.payload);
            const id = action.payload.id;
            state.expenses = state.expenses.map(((expense,id) => action.payload.id? action.payload : expense));
        },
    },
    selectors: {
        selectExpense: (state: ExpenseState) => state.expenses,
    }
})

// export const expenses = expenseSlice.selectors;
const expenses = (state: RootState) => state.expense.expenses
export const selectResentExpense = createSelector([expenses], (expenses: Expense[]) => {
    const now = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(now.getDate() - 7);
    // expenses.reduce((expensesState)=>{
    return expenses.filter(expense =>
        sevenDaysAgo <= new Date(expense.date)
    )
})

export const {addExpense, editExpense, deleteExpense} = expenseSlice.actions;
export default expenseSlice.reducer;