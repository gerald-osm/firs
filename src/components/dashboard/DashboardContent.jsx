import React, { Component } from "react";
import DashboardHeader from "./Dashboardheader";
import FooterBar from "../commons/Footer";

class DashboardContent extends Component {
  render() {
    const DashboardContent = (
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            {" "}
            <h4>Hello Akin</h4>
            <p>
              You'll be submitting making tax Digital Tax return in no time.
              Set-up takes about 10 minutes so let me get you to speed{" "}
            </p>
            <br />
            <p>
              {" "}
              <strong>Step 1: </strong>
              <span className="text-muted">
                Enroll in Making Tax Digital
              </span>{" "}
              <br />
              you'll need to <i>Enroll for making tax digital </i>and recieve
              the confirmation email before you are able to actually connect the
              software to HRMC(this takes 72 hours or more to arrive)
            </p>{" "}
            <br />
            <p>
              {" "}
              <strong>Step 2: </strong>
              <span className="text-muted">
                Connect your account to HRMC
              </span>{" "}
              <br />
              Once you've been accepted onto making Tax Digital,{" "}
              <a href="#">click here to connect your account to HRMC</a>
            </p>{" "}
            <br />
            <p>
              <strong>Step 3: </strong>
              <span className="text-muted">Submit a VAT return</span> <br />
              You are ready! Go to <a href="#">Submit a VAT return</a> , select
              the period you wish to file for, and file for return.
              <strong>Optional:</strong> Add additional companies. <br />
              if you have more than one VAT accounts with HRMC, you can file for
              each one individually. Go to <a href="#">Your companies</a> to add
              each company. Remember you'll need to enroll each one in making
              Tax Digital and authorise the software for each account
              individually. <br />
              if you need help getting started, pleased see our{" "}
              <a href="#">Tutorials section</a> , which has some video
              walkthrough on how to get set up or contact us directly by
              clicking <a href="#">Get Support</a>. <br />
              Enjoy! <br /> <br />
              Barnaby Dixon. <br />
              CREATOR.
            </p>{" "}
            <br />
          </div>
          <div class="col">
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
          </div>
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
