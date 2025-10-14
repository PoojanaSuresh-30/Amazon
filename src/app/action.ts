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


//action creators

// export function loginRequest(input: loginData | null) : LoginAction{
//     return {type : "LOGIN_REQUEST", input};
// }

export function loginRequest(email : string, password : string) : LoginAction{
    return {type : "LOGIN_REQUEST",email,password };
}


export function LoginSuccess(user:userData) : LoginAction{
    return {type : "LOGIN_SUCCESS", user};
}

export function LoginFailure(error : string) : LoginAction{
    return {type  : "LOGIN_FAILED", error}
}