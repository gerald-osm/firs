import React, { Component } from "react";
import UserDashBoardSideNavigation from "../dashboard/DashboardSideNav";
import PaymentComponent from "./PaymentComponent";

class Payments extends Component {
  render() {
    const Payment = (
      <div>
        <PaymentComponent />
        <UserDashBoardSideNavigation />
      </div>
    );
    return <div id="content">{Payment}</div>;
  }
}

export default Payments;
