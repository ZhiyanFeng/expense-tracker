import { configureStore, Tuple } from '@reduxjs/toolkit';
import  expenseReducer from "./expenseSlice";
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';

export const store = configureStore({
    reducer: {
        // Add your reducers here
       expense: expenseReducer,
    },
    devTools: false,
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devToolsEnhancer()),
});

// Infer the `RootState` and `AppDispatch` types from the state itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;