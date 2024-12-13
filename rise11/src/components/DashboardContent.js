import React from "react";
import "./DashboardContent.css";

function DashboardContent() {
  return (
    <div className="dashboard-content">
      <div className="progress-bar">
        <div className="step completed">01 Preliminary</div>
        <div className="step completed">02 Your Details</div>
        <div className="step current">03 KYC</div>
        <div className="step">04 Parties</div>
        <div className="step">05 Claim</div>
        <div className="step">06 Review</div>
        <div className="step">07 Payment</div>
      </div>
      <div className="form-section">
        <h2>File your Claim</h2>
        <p>(Approx 5 Minutes)</p>
        <div className="form-group">
          <label>Contract Value</label>
          <input type="text" placeholder="10,00,00 USD" />
        </div>
        <div className="form-group">
          <label>Claim Value</label>
          <input type="text" placeholder="15,00,00 USD" />
        </div>
        <div className="form-group">
          <label>Place</label>
          <select>
            <option>Select the Place for Proceedings</option>
            <option>Place 1</option>
            <option>Place 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
