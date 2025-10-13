import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar(Account)";
import Footer from "./Footer";

const HomeLayout: React.FC = () => {
  return (
    <div>
      <Navbar2 />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
