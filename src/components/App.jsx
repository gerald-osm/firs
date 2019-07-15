import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LandingPage from './LandingPage';
import RegisterCompany from "./auth/RegisterCompany";
import LoginUser from './auth/LoginUser';
import RequestPasswordChange from './auth/RequestPasswordChange';
import Dashboard from './dashboard/Dashboard';
import SubmitReturn from '../components/vatReturnComponents/SubmitReturn';
import PastSubmissions from '../components/vatReturnComponents/PastSubmissions'
import Liabilites from "../components/vatReturnComponents/Liabilities";
import Payment from '../components/vatReturnComponents/Payment'

import PaymentMethod from './payments/PaymentMethod';
import RecuringPayment from './payments/RecuringPayment';
import OtpPage from './auth/OtpPage';

/**
 * @class App
 */
class App extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const history = createBrowserHistory();
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LandingPage} />

            <Route exact path="/user-signup" component={RegisterCompany} />

            <Route exact path="/user-login" component={LoginUser} />
            <Route
              exact
              path="/change-password"
              component={RequestPasswordChange}
            />
            <Route exact path="/user-dashboard" component={Dashboard} />
            <Route exact path="/payment" component={PaymentMethod} />
            <Route
              exact
              path="/recuring-payment"
              component={RecuringPayment}
            />
            <Route exact path="/returns" component={SubmitReturn} />

            <Route
              exact
              path="/pastsubmissions"
              component={PastSubmissions}
            />

            <Route exact path="/liabilities" component={Liabilites} />
            <Route exact path="/payments" component={Payment} />

            <Route exact path="/send-otp" component={OtpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
