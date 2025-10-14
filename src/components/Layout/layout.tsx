import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar(Signup & Login)";
import Footer from "../Footer/Footer";

class Layout extends Component{
    render()
    {
        return(
           
 <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
        )
    }
}
  export default Layout;