import React, { Component } from "react";
import AccountComponent from "./AccountComponent";
import UserDashBoardSideNavigation from "../dashboard/DashboardSideNav";

class Account extends Component {
  render() {
    const Account = (
      <div>
        <AccountComponent />
        <UserDashBoardSideNavigation />
      </div>
    );
    return <div id="content">{Account}</div>;
  }
}

export default Account;
