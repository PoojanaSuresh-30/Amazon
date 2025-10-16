import React from "react";
import{ useSelector } from "react-redux";
import type { RootState } from "../../app/store.ts";
import './Profile.css';
import { PiSmiley } from "react-icons/pi";
import Box from '@mui/material/Box';


const ProfilePage : React.FC = () =>
{
              const signupData = useSelector((state:RootState)=> state.auth.signupData);
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    ></Box>
    return(
        
       <section className="profile">

        <h4>Welcome {signupData?.name} !!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<PiSmiley className="welcome"/></h4>
        <div className="profileform">

            <form>
              <fieldset>
                <legend className="legend">Edit your profile</legend>
                <div className="formcredentials">
                <div>
               <label className="formlabel" htmlFor="First name ">First Name :</label>
                <br /><br />
                <input type="text" className="forminput" placeholder="enter your first name" />
                 <br /><br />
                <label htmlFor="Email" className="formlabel">Email :</label>
                <br /><br />
               <input type="email" className="forminput" placeholder="enter your email" />
                </div>

               <div >
                  <label htmlFor="last name" className="formlabel">Last name :</label>
               <input type="text"  className="forminput" placeholder="enter your last name" />
               <br /><br /><br />
                 <label htmlFor="Addres" className="formlabel">Address : </label>
               <input type="text" placeholder="Enter the Address" className="forminput"/>
               <br /><br /><br /><br />
               </div>
               </div>
             
             
               
               
              
               <div className="password">
                  <label htmlFor="Password changes" ><p>Password Changes </p></label>
               <br />
               <input type="password" placeholder="current password" className="forminput"/>
               <br /><br />
               <input type="password" className="forminput" placeholder="new password" />
               <br /><br />
               <input type="password" placeholder="confirm Password" className="forminput" />
               </div>
             
              </fieldset>

            </form>

        </div>
       </section>
    )
}

export default ProfilePage;