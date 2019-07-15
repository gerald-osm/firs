import React, { Component } from "react";
import UserMenuHeader from "../commons/UserAuthHeader";
import UserDashBoardSideNavigation from "./DashboardSideNav";
import DashboardContent from "./DashboardContent";
// import FooterBar from "../commons/Footer";

/**
 * @class Dashboard
 */
class Dashboard extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const dashboard = (
      <div>
        <UserMenuHeader />
        <DashboardContent />
        <UserDashBoardSideNavigation />
        {/* <FooterBar /> */}
      </div>
    );
    return <div>{dashboard}</div>;
  }
}

export default Dashboard;
