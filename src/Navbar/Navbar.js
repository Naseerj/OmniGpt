import React from "react";
import "./Navbar.css";
import logo from "../images/Group 13340.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="" />
        <div className="optiondiv">
          <h3>Contact us</h3>
          <h3>Blog</h3>
          <h3>Sign in</h3>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
