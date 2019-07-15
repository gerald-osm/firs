import React, { Component } from "react";
import Header from "./navigation/Header";
import FooterBar from "./commons/Footer";

/*
 * @class GuestNavigation
 */
class LandingPage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const LandingPage = (
      <div className="content" style={{ height: "70vh" }}>
        <div className="row" style={{ marginLeft: "20%" }}>
          <div className="col-9">
            <h1>Sign in to your VAT online Account</h1> <br />
            <br />
            <br />
            <br />
            <p>
              Sign in to your HM Revenue and Customs (HMRC) online account to
              submit your VAT Return. You can also view your VAT account and
              access other VAT online services.
            </p>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <Header />;
        {LandingPage}
        <FooterBar />;
      </div>
    );
  }
}

export default LandingPage;
