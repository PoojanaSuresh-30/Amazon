export interface loginData
{
    email : string;
    password : string;
}

export interface userData{
    email : string;
    password : string;
}

export type LoginAction =
| {type : 'LOGIN_REQUEST',email : loginData["email"],password : loginData["password"]}
| {type : 'LOGIN_SUCCESS', user : userData}
| {type : 'LOGIN_FAILED', error : string};


export function loginRequest(email : string, password : string) : LoginAction{
    return {type : "LOGIN_REQUEST",email,password };
}


export function LoginSuccess(user:userData) : LoginAction{
    return {type : "LOGIN_SUCCESS", user};
}

export function LoginFailure(error : string) : LoginAction{
    return {type  : "LOGIN_FAILED", error}
}