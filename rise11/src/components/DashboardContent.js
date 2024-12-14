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
      </div>
    </div>
  );
}

export default DashboardContent;
