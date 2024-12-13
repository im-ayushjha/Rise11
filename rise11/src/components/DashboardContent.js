import React from "react";
import "./DashboardContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

function DashboardContent() {
  return (
    <div className="dashboard-content">
      <div className="progress-bar">
        <div className="progress"></div>
        <div className="detail">
          <p>
            <span
              style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "2" }}
            >
              01
            </span>{" "}
            Preliminary
          </p>
          <div className="circle">
            <div className="step completed">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="detail">
          <p>
            <span
              style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "2" }}
            >
              02
            </span>{" "}
            Your Details
          </p>
          <div className="circle">
            <div className="step completed">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="detail">
          <p>
            <span
              style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "2" }}
            >
              03
            </span>{" "}
            KYC
          </p>
          <div className="circle">
            <div className="step current">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="detail">
          <p>
            <span
              style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "2" }}
            >
              04
            </span>{" "}
            Parties
          </p>
          <div className="circle">
            <div className="step">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="detail">
          <p>
            <span
              style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "2" }}
            >
              05
            </span>{" "}
            Claim
          </p>
          <div className="circle">
            <div className="step">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="detail">
          <p>
            <span
              style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "2" }}
            >
              06
            </span>{" "}
            Review
          </p>
          <div className="circle">
            <div className="step">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="detail">
          <p>
            <span
              style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "2" }}
            >
              07
            </span>{" "}
            Payment
          </p>
          <div className="circle">
            <div className="step">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
      </div>
      <div className="form-section">
        <h2>File your Claim</h2>
        <p>(Approx 5 Minutes)</p>
        <div className="form-row">
          <div className="form-group">
            <label>Contract Value</label>
            <input type="text" placeholder="10,00,00 USD" />
          </div>
          <div className="form-group">
            <label>Claim Value</label>
            <input type="text" placeholder="15,00,00 USD" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Place</label>
            <select>
              <option>Select the Place for Proceedings</option>
              <option>Place 1</option>
              <option>Place 2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Language</label>
            <select>
              <option>Select Language for Proceedings</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="upload-section">
            <label>Statement</label>
            <div className="upload-box">
              Write your statement or upload a PDF
            </div>
          </div>
          <div className="upload-section">
            <label>Agreement under Disputes</label>
            <div className="upload-box">Upload Agreement (Max 2MB, PDF)</div>
          </div>
          <div className="upload-section">
            <label>Additional Documentation</label>
            <div className="upload-box">Upload Files (Max 2MB, PDF)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
