import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * @class UserDashBoardSideNavigation
 */
class UserDashBoardSideNavigation extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const UserDashBoardSideNavigation = (
      <nav id="sidebar" className="shadow">
        <div className="dashboard_header text_color_black">
          <h6>
            {" "}
              <Link to="/user-dashboard" style={{color:'white', fontSize:'30px', margin: 'auto', paddingLeft:'20px'}}>
                <i class="fas fa-tachometer-slowest" /> Dashboard{" "}
              </Link>
           
          </h6>
        </div>

        <ul
          className="list-unstyled components"
          style={{ textDecoration: "none" }}
        >
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i class="fas fa-file-invoice" id="iconss" />
              <span> VAT RETURNS </span>
            </a>

            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                {" "}
                {/* <a href="#">Submit a return</a>{" "} */}
                <Link
                  to="/returns"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Submit a return
                </Link>{" "}
              </li>

              <li>
                {" "}
                <Link
                  to="/pastsubmissions"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Past Submissions
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to="/liabilities"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Liabilities
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to="/payments"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Payments
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to="#"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  How To: Tutorials
                </Link>{" "}
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i
                style={{ color: "white" }}
                className="fas fa-coins"
                id="iconss"
              />
              <span style={{ color: "white" }}> YOUR ACCOUNT</span>
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                {" "}
                <Link
                  to="#"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Account Settings
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to="#"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Your Companies
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to="#"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Upgrade Today
                </Link>{" "}
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#pagSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i
                style={{ color: "white" }}
                class="fas fa-tty"
                id="iconss"
              />
              <span style={{ color: "white" }}> Support portal </span>
            </a>
            <ul className="collapse list-unstyled" id="pagSubmenu">
              <li>
                {" "}
                <Link
                  to="#"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact Support
                </Link>{" "}
              </li>
            </ul>
          </li>
        </ul>
        <div className="dashboard_header">
          {"  "}
          {"  "}
          <span />
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/" style={{ color: "white" }}>
              <i className="fas fa-home" id="iconss" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="#" style={{ color: "white" }}>
              <i className="fa fa-male" id="iconss" />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
    return <div>{UserDashBoardSideNavigation}</div>;
  }
}

export default UserDashBoardSideNavigation;
