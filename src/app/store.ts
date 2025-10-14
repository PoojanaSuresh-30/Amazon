import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from '../features/Signup/signupSlice';
import authReducer from '../features/Signup/logincredentialsSlice';
import { loadState, saveState } from '../utils/localStorage';
import wishlistReducer from '../features/Signup/WishlistSlice';
import { loginReducer } from "./reducer";
import { CartReducer } from "./cartReducer";



const persistedState = loadState();

const rootReducer = combineReducers({
  signup: signupReducer,
  auth: authReducer,
  wishlist : wishlistReducer,
  login : loginReducer,
  cart : CartReducer,
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