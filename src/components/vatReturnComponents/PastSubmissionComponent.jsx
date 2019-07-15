import React, { Component } from "react";
import FooterBar from "../commons/Footer";
import DashboardHeader from "../dashboard/Dashboardheader";

class PastSubmissionComponent extends Component {
  render() {
    // const PsC = (
    //   <div class="container text-center">
    //     <h4>Your VAT liabilities</h4>

    //     <p>Tax Period   Period Start Period End  View</p>
    //     <hr style={{width:'20%', justifyContent:'center'}}/>
    //   </div>
    // );


const PsC = (
  <div class="container" style={{ height: "75vh" }}>
    <h4 className="text-center">Your past VAT submissions</h4>
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-sm">Submission Date</div>
      <div className="col-sm">Period start</div>
      <div className="col-sm">Period end</div>
      <div className="col-sm">View</div>
    </div>
    <hr style={{ width: "100%", justifyContent: "center" }} />
  </div>
);
    return (
      <div id='content'>
        <DashboardHeader />
        {PsC}
      </div>
    );
  }
}

export default PastSubmissionComponent;
