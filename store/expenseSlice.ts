import {Expense} from "../types/interfaces";
import {createSlice} from "@reduxjs/toolkit";

interface ExpenseState {
    Expenses: Expense[];
}

const initialState: ExpenseState = {Expenses: []};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.Expenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.Expenses.splice(state.Expenses.indexOf(action.payload), 1);
        },
        editExpense: (state, action) => {
            const id = action.payload.id;
            state.Expenses[id] = action.payload;
        }
    }
})

export const {addExpense, editExpense, deleteExpense} = expenseSlice.actions;
export default expenseSlice.reducer;