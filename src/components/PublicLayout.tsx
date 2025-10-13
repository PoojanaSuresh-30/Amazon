import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar(Signup & Login)";
import Footer from "./Footer";

const PublicLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
