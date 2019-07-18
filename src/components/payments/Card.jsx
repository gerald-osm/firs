import React, { Component } from 'react';
import CardComponent from './CardComponent';
import UserDashBoardSideNavigation from "../dashboard/DashboardSideNav";


class Card extends Component {
   
    render() { 

        const card = (
<div>
    <CardComponent/>
    <UserDashBoardSideNavigation/>
</div>
        )
        return ( <div id="content">
            {card}
        </div> );
    }
}
 
export default  Card;