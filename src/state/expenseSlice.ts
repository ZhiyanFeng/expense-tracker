import {Expense} from "../types/interfaces";
import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {db} from '../config/firebaseConfig';
import {addDoc, collection, FirebaseFirestoreTypes, getDocs} from "@react-native-firebase/firestore";
import QuerySnapshot = FirebaseFirestoreTypes.QuerySnapshot;
import DocumentData = FirebaseFirestoreTypes.DocumentData;
import {Timestamp} from "@react-native-firebase/firestore";

interface ExpenseState {
    expenses: Expense[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export const fetchAllExpenses = createAsyncThunk(
    'expenses/fetchAllExpenses',
    async(_, {rejectWithValue})=>{
        try {
            const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'expenses'));
            const expenses: Expense[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })) as Expense[];

            return expenses;
        } catch (error:unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('An unkonw error occurred');
        }
    }
)

export const postExpense = createAsyncThunk(
    'expenses/createExpense',
    async (payload:Expense, thunkAPI)=>{
        try {
            const docRef = await addDoc(collection(db, 'expenses'), {
                ...payload,
                createAt: Timestamp.now(),
            });
            return docRef.id;
        }catch (error){
            return thunkAPI.rejectWithValue('Failed to post data');
        }
    }
)
const initialState: ExpenseState = {expenses: [], loading: 'idle'};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllExpenses.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.expenses = action.payload;
        })
            .addCase(fetchAllExpenses.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(fetchAllExpenses.rejected, (state, action) => {
                state.loading = 'failed';
            })
            .addCase(postExpense.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(postExpense.fulfilled, (state, action) => {
                state.loading = 'succeeded';
            })
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