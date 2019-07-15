import React, { Component } from 'react';
import UserDashBoardSideNavigation from "../dashboard/DashboardSideNav";
import LiabilitiesComponent from "./LiabilitiesComponent";

class Liabilities extends Component {
    render() { 
        const Liabilities = (
          <div>
            <LiabilitiesComponent />
            <UserDashBoardSideNavigation />
          </div>
        );
        return ( <div id="content">
            {Liabilities}
        </div> );
    }
}
 
export default Liabilities;