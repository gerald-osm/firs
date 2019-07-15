import React, { Component } from 'react';
import UserDashBoardSideNavigation from "../dashboard/DashboardSideNav";

import SubmitReturnComponent from './SubmitReturnComponent';


class SubmitReturn extends Component {
    
    render() { 
const SubmitReturns = (
  <div>
    <SubmitReturnComponent />
    <UserDashBoardSideNavigation />
  </div>
);

        return ( <div>{SubmitReturns}</div>  );
    }
}
 
export default SubmitReturn;