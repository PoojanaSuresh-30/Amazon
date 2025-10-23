import React,{useState} from "react";
import {setSignupData} from '../../features/Signup/logincredentialsSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import sideImage from "../../assets/images/Side Image.svg";
import GoogleIcon from "../../assets/images/Icon-Google.svg";
import "./Signup.css";



// import type { RootState, AppDispatch } from "../app/store.ts";
// import { updateField, resetForm } from "../features/Signup/signupSlice.ts";

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate =  useNavigate();
  const [name,setName] = useState("");
   const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;
  //   dispatch(updateField({ field: id as "name" | "email" | "password", value }));
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   dispatch(setSignupData({name, email, password}));
   if(email&&password)
   {
    navigate('/login');
    alert(`Welcome, ${name}!`);
   }
     else
     {
      alert("Please enter signup credentials!");
     }
  };


  const saveCredentials = () => {

      interface userData
              {
                name : string;
                email : string;
                password : string;
              }


        const nameInput = document.getElementById('name') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
     

      const nameValue = nameInput.value;
      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;

      const UserData : userData = 
      {
        name : nameValue,
        email : emailValue,
        password : passwordValue
      }

      if(email && password)
      {
        localStorage.setItem('userProfile',JSON.stringify(UserData))
        console.log('Email and Password stored in Local Storage');
      }
      else{
        console.log('please enter both email and password');
        
      }
  
    }
    

  return (
    <section className="signup">
      <div className="loginbody">
        <div>
          <img src={sideImage} alt="Signup side" />
        </div>

        <div className="form">
          <h3>Create an Account</h3>
          <p>Enter your details below</p>

          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <br />
            <TextField
              id="email"
              label="Email or Phone number"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <br />

            <button type="submit" className="account" onClick={saveCredentials}>
              Create Account
            </button>
            <br />

            <div className="google">
              <button type="button">
                <img src={GoogleIcon} alt="Google Icon" /> Sign up with Google
              </button>
            </div>

            <p className="login">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
