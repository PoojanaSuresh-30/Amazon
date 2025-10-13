import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Authstate
{
    signupData:{name : string, email : string, password : string } | null;
    isAuthenticated : boolean;
    user : {email : string, password : string} | null;
    error : string | null;
}

const initialState  : Authstate =
{
signupData : null,
isAuthenticated : false,
user :  null,
error : null,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers :
    {
        setSignupData : (state : any, action : PayloadAction<{ name: string, email : string, password : string }>) =>
        {
            state.signupData = action.payload;
        },
        loginSuccess:(state : any, action : PayloadAction<{name?: string, email : string, password : string}>) =>
        {
           state.isAuthenticated = true;
           state.user = action.payload;
           state.error = null;
        },
        loginFailure:(state : any, action : PayloadAction<String>)=>
        {
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        login : (state) =>
        {
         state.isAuthenticated = true;
        },
         logout: (state) => {
      state.isAuthenticated = false;
     
    },
        clearAuthData:(state : any)=>
        {
            state.signupData = null;
            state.isAuthenticated = false;
            state.user= null;
            state.error = null;
        }
    },
});


export const { setSignupData, loginSuccess, loginFailure,logout, clearAuthData,login} = authSlice.actions;
export default authSlice.reducer;