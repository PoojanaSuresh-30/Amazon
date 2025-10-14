
import type{ LoginAction, userData } from "./action";


interface LoginState
 {
    user : userData | null;
    isloading : boolean;
    error : string | null;
 }

 const initialState : LoginState = {
    user : null,
    isloading : false,
    error : null
 }

 export function loginReducer(state = initialState, action : LoginAction): LoginState
 {
    switch(action.type)
    {
        case 'LOGIN_REQUEST': return{...state, isloading : true }

        case 'LOGIN_SUCCESS' : return {...state, isloading : false, user : action.user}

        case 'LOGIN_FAILED'  : return {...state, isloading : false, error : action.error}

        default : return state;
    }
 }