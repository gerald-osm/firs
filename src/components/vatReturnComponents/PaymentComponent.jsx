import React, { Component } from "react";
import FooterBar from "../commons/Footer";
import DashboardHeader from "../dashboard/Dashboardheader";

class PaymentComponent extends Component {
  render() {
 


const PsC = (
  <div class="container" style={{ height: "75vh" }}>
    <h4 className="text-center">Your VAT payment History</h4>
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-sm"></div>
      <div className="col-sm">Received</div>
      <div className="col-sm"></div>
      <div className="col-sm">Amount</div>
    </div>
    <hr style={{ width: "100%", justifyContent: "center" }} />
  </div>
);
    return (
      <div>
        <DashboardHeader />
        {PsC}
        <FooterBar />
      </div>
    );
  }
}

export default PaymentComponent;
