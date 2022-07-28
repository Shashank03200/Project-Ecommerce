import React from "react";
import Navbar from "../NavBar/Navbar";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="Layout__PageContainer">{children}</div>
    </div>
  );
};

export default Layout;
