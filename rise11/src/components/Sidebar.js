import React from "react";
import logo from "../Photos/logo.jpg";
import image from "../Photos/Images.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <div className="logo-container">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />

          {/* <div className="logo-circle"></div> */}
          <h1>Jur</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <span>
              <i className="fas fa-tachometer-alt icon-blue"></i>
            </span>
            Dashboard
          </li>
          <li>
            <span>
              <i className="fas fa-briefcase icon-blue"></i>
            </span>
            My Cases
          </li>
          <li>
            <span>
              <i className="fas fa-chart-line icon-blue"></i>
            </span>
            Activities
          </li>
          <li>
            <span>
              <i className="fas fa-calendar icon-blue"></i>
            </span>
            Calendar
          </li>
          <li>
            <span>
              <i className="fas fa-folder icon-blue"></i>
            </span>
            Files
          </li>
          <li>
            <span>
              <i className="fas fa-gavel icon-blue"></i>
            </span>
            Open a Dispute
          </li>
        </ul>
      </nav>

      {/* Promo Section */}
      {/* <div className="sidebar-promo"> */}
      {/* <div className="promo-box"> */}
      {/* <p>Get Justice on every Claim</p> */}
      <img src={image} alt="Justice" className="img-change" />
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
