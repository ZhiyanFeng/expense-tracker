import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {collection, FirebaseFirestoreTypes, getDocs} from "@react-native-firebase/firestore";
import QuerySnapshot = FirebaseFirestoreTypes.QuerySnapshot;
import DocumentData = FirebaseFirestoreTypes.DocumentData;
import {db} from "../config/firebaseConfig";
import {User} from "../types/interfaces";

// Async Thunk for fetching users (Read)
export const fetchUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async (_, ThunkApi) => {
        try{
            const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'users'));
            const users: User[] = querySnapshot.docs.map((doc) => ({
                uid: doc.id,
                email: doc.data().email,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                photoUrl: ''
            }));
            return users;
        } catch(error: unknown){
            if (error instanceof Error) {
                return ThunkApi.rejectWithValue(error.message);
            }
            return ThunkApi.rejectWithValue('An unkonw error occurred');
        }

});

interface UserState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: unknown;
}

const initialState: UserState = {users: [], status: 'idle', error: null};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Create: Add a new user
        addUser: (state, action:{payload:User}) => {
            state.users.push(action.payload); // Action payload should be a new user object
        },
        // Update: Edit an existing user
        updateUser: (state, action) => {
            const { id, firstName, lastName, email } = action.payload;
            const existingUser = state.users.find(user => user.uid === id);
            if (existingUser) {
                existingUser.firstName = firstName;
                existingUser.lastName = lastName;
                existingUser.email = email;
            }
        },
        // Delete: Remove a user by ID
        deleteUser: (state, action) => {
            const userId = action.payload; // Action payload is the ID of the user to delete
            state.users = state.users.filter(user => user.uid !== userId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload; // Replace with fetched users
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
