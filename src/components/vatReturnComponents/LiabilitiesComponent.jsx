import React, { Component } from 'react';
import FooterBar from "../commons/Footer";
import DashboardHeader from "../dashboard/Dashboardheader";

class LiabilitiesComponent extends Component {
  render() {
     const PsC = (
       <div class="container" style={{ height: "75vh" }}>
         <h4 className="text-center">Your VAT liabilities</h4>
         <div className="row" style={{ marginTop: "20px" }}>
           <div className="col-sm">Tax Period</div>
           <div className="col-sm">Payment Due</div>
           <div className="col-sm">Type</div>
           <div className="col-sm">Amount</div>
           <div className="col-sm">Outstanding</div>
         </div>
         <hr style={{ width: "100%", justifyContent: "center" }} />
       </div>
     );

    return (
      <div>
        <DashboardHeader />
        {PsC}
        <FooterBar/>
      </div>
    );
  }
}
 
export default LiabilitiesComponent;