import React from "react";
import { Logo } from "../../Assets/Image/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="img" />
      </div>
      <div className="link-container"></div>
    </nav>
  );
};

export default Navbar;
