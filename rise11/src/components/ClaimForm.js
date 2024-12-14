import React from "react";
import "./ClaimForm.css";

const ClaimForm = () => {
  return (
    <div className="container">
      <h1>
        File your Claim. <span>(Approx 5 Minutes)</span>
      </h1>
      <div className="form-section">
        {/* Claim Value Section */}
        <div className="claim-value card">
          <h2>Claim Value</h2>
          <div className="field">
            <label>Contract Value</label>
            <div className="input-group">
              <input type="text" placeholder="10,00,00" />
              <span className="currency">USD</span>
            </div>
          </div>
          <div className="field">
            <label>Claim Value</label>
            <div className="input-group">
              <input type="text" placeholder="15,00,00" />
              <span className="currency">USD</span>
            </div>
            <p className="note">150% of Contract Value</p>
          </div>
        </div>

        {/* Place Section */}
        <div className="place card">
          <h2>Place</h2>
          <input type="text" placeholder="Select the Place for proceedings" />
          <p>
            Is the place for the proceedings the one mentioned in the agreement?
          </p>
          <div className="options">
            <label>
              <input type="radio" name="place" /> Yes
            </label>
            <label>
              <input type="radio" name="place" /> No
            </label>
          </div>
        </div>

        {/* Language Section */}
        <div className="language card">
          <h2>Language</h2>
          <input
            type="text"
            placeholder="Select the language for proceedings"
          />
          <p>
            Is the language for the proceedings the one mentioned in the
            agreement?
          </p>
          <div className="options">
            <label>
              <input type="radio" name="language" /> Yes
            </label>
            <label>
              <input type="radio" name="language" /> No
            </label>
          </div>
        </div>
      </div>

      <div className="upload-section">
        <div className="statement card">
          <h2>Statement</h2>
          <p>Write your Statement Here or Upload a PDF</p>
          <button className="upload-btn">Upload PDF</button>
        </div>
        <div className="agreement card">
          <h2>Agreement under Disputes</h2>
          <p>Upload the Contract (Max 2MB, PDF)</p>
          <button className="upload-btn">Upload Contract</button>
        </div>
        <div className="documentation card">
          <h2>Additional Documentation</h2>
          <p>Upload Additional Documents (Max 2MB, PDF)</p>
          <button className="upload-btn">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
