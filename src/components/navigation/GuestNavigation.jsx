import React, { Component } from "react";
import frsclogo from "../../template/utils/images/FIRS.png";

/**
 * @class GuestNavigation
 */
class GuestNavigation extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const guestNavigation = (
      <div>
       

        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar justify-content-between custom_nav_style">
          <a className="navbar-brand" href="#">
            <img
              src={frsclogo}
              style={{
                width: "20%"
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
          <div className="collapse navbar-collapse mr-5" id="navbarNav" style={{marginLeft:"50%"}}>
            <ul className="navbar-nav">
             

              <li className="nav-item">
                <a className="nav-link" href="/user-login">
                  <button className="btn btn-bg btn-dark">Login</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user-signup">
                  <button className="btn btn-bg btn-secondary">signup</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
    return <div>{guestNavigation}</div>;
  }
}

export default GuestNavigation;
