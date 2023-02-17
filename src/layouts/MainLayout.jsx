import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
