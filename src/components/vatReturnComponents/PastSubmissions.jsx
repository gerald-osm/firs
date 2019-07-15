import React, { Component } from 'react';
import PastSubmissionComponent from "./PastSubmissionComponent";
import UserDashBoardSideNavigation from "../dashboard/DashboardSideNav";
class PastSubmissions extends Component {
    render() { 
        const PastSubmission = (
            <div>
            <PastSubmissionComponent/>
            <UserDashBoardSideNavigation/>
            </div>
           
        )
        return <div>{PastSubmission}</div>;
    }
}
 
export default PastSubmissions;