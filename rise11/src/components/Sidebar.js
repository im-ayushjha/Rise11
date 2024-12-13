import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>Jur</h1>
      </div>
      <ul className="sidebar-menu">
        <li className="active">Dashboard</li>
        <li>My Cases</li>
        <li>Activities</li>
        <li>Calendar</li>
        <li>Files</li>
        <li>Open a Dispute</li>
      </ul>
      <div className="sidebar-footer">
        <p>Get Justice on every Claims</p>
      </div>
    </div>
  );
}

export default Sidebar;
