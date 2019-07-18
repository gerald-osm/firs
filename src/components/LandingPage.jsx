import React, { Component } from "react";
import Header from "./navigation/Header";
import FooterBar from "./commons/Footer";
import VatlLogo from "../template/utils/images/vat1.jpg";

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
      <div
        className="content"
        style={{
          height: "100vh",
          marginBottom: "120px",
          marginLeft: "5%",
          fontFamily: ""
        }}
      >
        <div className="row">
          <div class="col-8">
            <h1>Sign in to your VAT online Account</h1> <br />
            <br />
            <br />
            <br />{" "}
            <p>
              You'll be submitting your VAT return in no time. Set-up takes
              about 2 minutes so let us get you to speed{" "}
            </p>
            <br />
            <p>
              {" "}
              <strong>Step 1: </strong>
              <span className="text-muted">
                Enroll in Digital TAX return
              </span>{" "}
              <br />
              you'll need to <i>Enroll for digital VAT returns </i>and
              recieve the confirmation email before you are able to use the
              platform.
            </p>{" "}
            <br />
            <br />
            <p>
              <strong>Step 2: </strong>
              <span className="text-muted">Submit a VAT return</span> <br />
              You are ready! <a href="user-login">Login</a> with your TIN
              number and password,select the period you wish to file for,
              and file for return.
              <strong>Optional:</strong> Add additional companies. <br />
              if you have more than one VAT accounts with FIRS, you can file
              for each one individually. Go to{" "}
              <a href="#">Your companies</a> to add each company. Remember
              you'll need to enroll each one in Digital VAT return and
              authorise the platform for each account individually. <br />
              if you need help getting started, please see our{" "}
              <a href="#">Tutorials section</a> , which has some video
              walkthrough on how to get set up or contact us directly by
              clicking <a href="#">Get Support</a>. <br />
              Enjoy! <br /> <br />
              DIGITAL VAT RETURN PLATFORM <br />
              Babatunde Fowler. <br />
              Executive Chairman.
            </p>{" "}
            <br />
          </div>
          <div className="col-4">
            <img
              src={VatlLogo}
              style={{ width: "70%", marginTop: "40%" }}
              alt=""
            />
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
