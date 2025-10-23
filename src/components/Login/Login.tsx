import React from "react";
import { useState,useEffect} from "react";
import{ useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store.ts";
import sideImage from "../../assets/images/Side Image.svg";
import './Login.css';
import TextField from "@mui/material/TextField";
import {loginSuccess, loginFailure,login} from '../../features/Signup/logincredentialsSlice.ts';
import { useNavigate } from "react-router-dom";
import { loginRequest,LoginSuccess,LoginFailure } from "../../app/action.ts";





        const LoginPage : React.FC = () =>
        {
          const dispatch = useDispatch<AppDispatch>();
          const signupData = useSelector((state:RootState)=> state.auth.signupData);
           const [email,setEmail] = useState("");
              const [password,setPassword] = useState("");
              const navigate = useNavigate();
        

               useEffect(()=>{
                if(signupData)
                {
                  setEmail(signupData.email);
                  setPassword(signupData.password)
                }
                 console.log("Signup data from Redux:", signupData);
              },[signupData]);
  

              const loginclick = () =>
              {
             
                
                interface UserData 
                {
                  email : string;
                  password : string;
                }
                dispatch(loginRequest(email,password));
             
              
  const savedData = localStorage.getItem('userProfile');
  if (savedData) {
    const userData: UserData = JSON.parse(savedData);
    const emailInput = userData.email;
    const passwordInput = userData.password;    
                if(emailInput === email && passwordInput === password)

                {
                  interface logindata
                  {
                    email : string;
                    password : string;
                  }
                const Logindata : logindata =
                {
                  email  : email,
                  password : password,
                }
                 
                  
                  
                  
                             dispatch(loginSuccess({email, password: signupData?.password || 'User' }));

                                console.log('Login data :',{email,password});
                                dispatch(login());
                                dispatch(LoginSuccess(Logindata));
              alert('Logged In Successfully');
               navigate('/home');
               console.log('Successfully logged in!!');
                }
   
                else{
                  console.log('wrong email or password');
                  alert('Invalid Credentials')
                  
                   dispatch(loginFailure('Email or password missing'));
                   dispatch(LoginFailure('Invalid Credentials'));
                }
              
              
            }   
          } 


        return(
           <section className="login">
            <div className="loginbody">
        <div>
          <img src={sideImage} alt="Signup side" />
        </div>

        <div className="form">

            <h3>Log in to Exclusive</h3>
            <p>Enter your details below</p>
            <form>
              <TextField
                          id="email"
                          label="Email or Phone number"
                          variant="standard"
                          onChange={(e)=>setEmail(e.target.value)}
                          fullWidth
                        />
                        <br />
                         <TextField
                          id="password"
                          label="Password"
                          variant="standard"
                            onChange={(e)=>setPassword(e.target.value)}
                          fullWidth
                        />
                        <br />

                        <div className="loginbutton">
                            <button type="submit" onClick={loginclick}>Log In</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="">Forgot Password?</a>
                        </div>
            </form>

        </div>


        </div>
           </section>
        );
    
};


export default LoginPage;
