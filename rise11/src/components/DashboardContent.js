import React, { useState } from "react";
import "./DashboardContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  FaDollarSign,
  FaGlobe,
  FaLanguage,
  FaFilePdf,
  FaPlus,
  FaPlusCircle,
  FaUpload,
} from "react-icons/fa";

function DashboardContent() {
  const [statementFile, setStatementFile] = useState(null);
  const [contractFile, setContractFile] = useState(null);
  const [arbitrationFile, setArbitrationFile] = useState(null);
  const [additionalDocs, setAdditionalDocs] = useState([]);

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "statement") setStatementFile(file.name);
      else if (type === "contract") setContractFile(file.name);
      else if (type === "arbitration") setArbitrationFile(file.name);
      else setAdditionalDocs((prevDocs) => [...prevDocs, file.name]);
    }
  };

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
              04
            </span>{" "}
            Parties
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

      {/* ------------------------------------------------------------------------------*/}

      <div className="container">
        <h1>
          File your Claim. <span>(Approx 5 Minutes)</span>
        </h1>
        <div className="form-section">
          {/* Claim Value Section */}
          <div className="claim-value card">
            <h2>
              <FaDollarSign className="icon" /> Claim Value
            </h2>
            <div className="field">
              <label>Contract Value</label>
              <div className="input-group1">
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
            <h2>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{
                  backgroundColor: "#007bff", // Blue background
                  color: "white", // White icon color
                  fontSize: "18px", // Adjusted font size to match the image
                  padding: "1px", // Padding to make the circle look proportionate
                  borderRadius: "50%", // Round shape
                  display: "inline-block", // Keeps the element inline
                  marginRight: "5px",
                }}
              />{" "}
              Place
            </h2>
            <p style={{ backgroundColor: "#e6e1e1", padding: "5px" }}>
              Select the Place for proceedings
            </p>
            <p>
              Is the place for the proceedings the one mentioned in the
              agreement?
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
            <h2>
              <FaLanguage className="icon" /> Language
            </h2>
            <p style={{ backgroundColor: "#e6e1e1", padding: "5px" }}>
              Select the language for proceedings
            </p>
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
      </div>

      {/* ------------------------------------------------------------------ */}

      <div className="bottom">
        <div className="bottom-section-container">
          {/* Statement Section */}
          <div className="section statement-section">
            <div className="icon-header">
              <FaFilePdf className="section-icon" />
              <h3>Statement</h3>
            </div>
            <div className="upload-container">
              <div className="upload-box">
                <label className="upload-label1">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, "statement")}
                  />
                  {statementFile ? (
                    <p>{statementFile}</p>
                  ) : (
                    <>
                      <p>
                        Write your Statement Here{" "}
                        <span style={{ margin: 50, color: "black" }}>or</span>
                      </p>
                      <p>
                        <FaUpload className="upload-icon" /> Upload a PDF
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Agreement under Disputes Section */}
          <div className="section">
            <div className="icon-header">
              <FaFilePdf className="section-icon" />
              <h3>Agreement under Disputes</h3>
            </div>
            <div className="upload-container">
              <div className="upload-box">
                <label className="upload-label">
                  <FaUpload className="upload-icon" />
                  <p>{contractFile || "Upload the Contract"}</p>
                  <span>Max 2MB, PDF</span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, "contract")}
                  />
                </label>
              </div>
              <div className="upload-box">
                <label className="upload-label">
                  <FaUpload className="upload-icon" />
                  <p>{arbitrationFile || "Arbitration Agreement"}</p>
                  <span>Max 2MB, PDF</span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, "arbitration")}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Additional Documentation Section */}
          <div className="section">
            <div className="icon-header">
              <FaFilePdf className="section-icon" />
              <h3>Additional Documentation</h3>
            </div>
            <div className="upload-container">
              {additionalDocs.map((doc, index) => (
                <div key={index} className="uploaded-doc">
                  {doc}
                </div>
              ))}
              <div className="upload-box">
                <label className="upload-label">
                  <FaUpload className="upload-icon" />
                  <p>Upload the Contract</p>
                  <span>Max 2MB, PDF</span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, "additional")}
                  />
                </label>
              </div>
              <button className="add-more-btn">
                <FaPlusCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
