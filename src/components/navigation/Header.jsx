import React, { Component } from 'react';
import UserNavigation from './UserNavigation';
import GuestNavigation from './GuestNavigation';

/**
 * @class Header
 */
class Header extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const {auth} = this.props;
    return (
      <div>
        {
          auth ? <UserNavigation /> : <GuestNavigation />
        }
      </div>
    );
  }
}

export default Header;
