import React, { Component } from "react";
import frsclogo from "../../template/utils/images/FIRS.png";

const DashboardHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar justify-content-between custom_nav_style">
      <a className="navbar-brand" href="#">
        <img
          src={frsclogo}
          style={{
            width: "100%"
          }}
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse mr-5"
        id="navbarNav"
        style={{ marginLeft: "80%" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <button
                style={{
                  fontFamily: "Verdana",
                  fontSize: "17px",
                  borderRadius: "20px"
                }}
                className="btn btn-bg btn-secondary"
              >
                Logout
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardHeader;
