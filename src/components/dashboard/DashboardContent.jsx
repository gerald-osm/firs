import React, { Component } from "react";
import DashboardHeader from "./Dashboardheader";
import FooterBar from "../commons/Footer";
import { Link } from "react-router-dom";

class DashboardContent extends Component {
  render() {
    const DashboardContent = (
      <div
        class="container-fluid"
        style={{ height: "70vh", marginLeft: "5%" }}
      >
        <div class="row">
          <div class="col-6" style={{ height: "70vh" }}>
            {" "}
          
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "20px",
                color: "black"
              }}
            >
              {" "}
              Hi Akin
            </p>
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "20px",
                color: "black"
              }}
            >
              Welcome to FIRS digital VAT return platform. What do you want
              to do today?
            </p>
            <br />
            <br />
            <Link
              style={{
                fontFamily: "calibri",
                fontSize: "17px"
              }}
              to="/returns"
            >
              Submit a Return
            </Link>
            <br />
            <br />
            <Link
              style={{
                fontFamily: "calibri",
                fontSize: "17px"
              }}
              to="/pastsubmissions"
            >
              Past Submissions
            </Link>
            <br />
            <br />
            <Link
              style={{
                fontFamily: "calibri",
                fontSize: "17px"
              }}
              to="/liabilities"
            >
              Check Liabilities
            </Link>
            <br />
            <br />
            <Link
              style={{
                fontFamily: "calibri",
                fontSize: "17px"
              }}
              to="/payments"
            >
              Pay FIRS
            </Link>
            <br />
            <br />
            <br />
            <br />
          </div>
          {/* <div class="col">
            <div className="col" style={{ marginLeft: "20px" }}>
              <h4>Let's get started</h4>
            </div>
            <div className="col">
              <button className="btn btn-lg">
                1. Enroll in making tax Digital
              </button>
            </div>
            <div className="col">
              <button className="btn btn-lg">
                2. Connect your account to HRMC
              </button>
            </div>
            <div className="col">
              <button className="btn btn-lg">
                3. Submit a VAT return with MTD
              </button>
            </div>
          </div> */}
        </div>
      </div>
    );

    return (
      <div id="content">
        <DashboardHeader />
        {DashboardContent}
        <FooterBar />
      </div>
    );
  }
}

export default DashboardContent;
