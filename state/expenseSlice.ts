import {Expense} from "../types/interfaces";
import {createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface ExpenseState {
    Expenses: Expense[];
    RecentExpenses: Expense[];
}

const initialState: ExpenseState = {Expenses: [], RecentExpenses: []};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.Expenses.push(action.payload);
            console.log(state.Expenses);
        },
        deleteExpense: (state, action) => {
            console.log("delete payload", action.payload);
            state.Expenses.splice(state.Expenses.findIndex(expenses => expenses.id === action.payload), 1);
        },
        editExpense: (state, action) => {
            const id = action.payload.id;
            state.Expenses[id] = action.payload;
        },
    },
    selectors: {
        selectExpense: (state: ExpenseState) => state.Expenses,
    }
})

// export const expenses = expenseSlice.selectors;
const expenses = (state: RootState) => state.expense.Expenses
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