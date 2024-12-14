import React from "react";
import logo from "../Photos/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <div className="logo-container">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
          {/* <div className="logo-circle"></div> */}
          <h1>Jur</h1>
          <div className="icon">
            <i className="fas fa-regular fa-bell"></i>
            <i class="fas fa-regular fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
