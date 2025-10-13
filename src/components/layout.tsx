import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar(Signup & Login).tsx";
import Footer from "./Footer.tsx";

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