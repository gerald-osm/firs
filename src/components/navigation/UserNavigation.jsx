import React, { Component } from 'react';
import frsclogo from '../../template/utils/images/frsc-logo.png';

/**
 * @class UserNavigation
 */
class UserNavigation extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const userNavigation = (
      <div>
        {/* <nav className="navbar justify-content-between custom_nav_style_dashboard">
          <div className="page_logo">
            <a href="#" className="navbar-brand company_logo">
              <img src={frsclogo} alt="company logo" />
            </a>
          </div>

          <form action="">
            <div className="input-group home_search_input_dashboard animated bounce">
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Search for any billing services"
                name=""
                required
              />
              <div className="input-group-append">
                <button className="btn btn-light" type="submit">
                  <i className="fab fa-searchengin" />
                  Search
                </button>
              </div>
            </div>
          </form>

          <div className="nav_btns">
            <div className="row">
              <div className="col-sm-6">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-danger btn_user_dash_settings dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-user-cog" />
                    {"  "} Olalekan David
                  </button>
                  <div className="dropdown-menu animated bounceIn">
                    <a className="dropdown-item" href="#">
                      <i className="far fa-id-badge" />
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-envelope-open-text" />
                      Inbox
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-users-cog" />
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sign-out-alt" />
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav> */}

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
    return <div>{userNavigation}</div>;
  }
}

export default UserNavigation;
