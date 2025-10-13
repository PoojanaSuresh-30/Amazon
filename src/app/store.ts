import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from '../features/Signup/signupSlice';
import authReducer from '../features/Signup/logincredentialsSlice';
import { loadState, saveState } from '../utils/localStorage';



const persistedState = loadState();

const rootReducer = combineReducers({
  signup: signupReducer,
  auth: authReducer,
});
export const store = configureStore (
    {
        reducer:rootReducer,
         devTools: import.meta.env.MODE !== 'production',
         preloadedState: persistedState, // Load state from LocalStorage

    });
store.subscribe(() => {
  saveState(store.getState());
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;