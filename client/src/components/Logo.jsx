import React from "react";
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <nav>
      <img src={logo} alt="Jobify" className="logo" />
    </nav>
  );
};

export default Logo;
