import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  CardHeader,
  Cards,
  Modal,
  ModalBody,
  UserAuthHeader,
  Form,
  CardContainer,
  Button
} from '../commons/index';

/**
 * @class PaymentMethod
 */
class PaymentMethod extends Component {
  state = {
    card: true
  }

  onCardClick = () => {
    this.setState({ card: true });
  }

  onBankAccountClick = () => {
    this.setState({ card: false });
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const { card } = this.state;
    const paymentMethod = (
      <div>
        <UserAuthHeader />
        <CardHeader cardHeader="Payment Method">
          <Cards>
            <li className="nav-item">
              <Link
                className="nav-link active" data-toggle="pill"
                href="#card_payment"
                onClick={this.onCardClick}
              >
                  Card
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="pill"
                href="#Bank_Account"
                onClick={this.onBankAccountClick}
              >
Bank Account
              </Link>
            </li>
          </Cards>
          {
            card ? (
              <div>
                <CardContainer
                  id="mobile"
                  buttonName="Add New"
                  content="You do not have any airtime recuring payment in your account."
                  dataTarget="#airtime_pay"
                />
                <Modal id="airtime_pay">
                  <ModalBody modalBodyHeader="Create a recurring airtime payment">
                    <Form>
                      <div className=" mb-4 custom_input_group">
                        <label htmlFor="Email" className="form_label"> Mobile Number </label>
                        <div className="input-group mb-2">
                          <input type="text" className="form-control" id="" placeholder="" name="" required />

                        </div>
                      </div>
                      <div className="mb-4 custom_input_group">
                        <label htmlFor="Password" className="form_label"> Select a network </label>
                        <div className="input-group mb-2 custom_input_group">
                          <input type="text" className="form-control" id="" placeholder="" name="" required />
                        </div>
                      </div>

                      <div className="mb-4 custom_input_group">
                        <label htmlFor="Password" className="form_label"> Describe this airtime payment </label>
                        <div className="input-group mb-2 custom_input_group">
                          <input type="text" className="form-control" id="" placeholder="" name="" required />

                        </div>
                      </div>

                      <div className="mb-4 custom_input_group">
                        <label htmlFor="Password" className="form_label"> Amount </label>
                        <div className="input-group mb-2 custom_input_group">
                          <input type="text" className="form-control" id="" placeholder="" name="" required />

                        </div>
                      </div>
                      <Button type="submit" className="btn btn-danger mt-4"> Continue </Button>

                    </Form>
                  </ModalBody>
                </Modal>
              </div>
            ) : (
              <CardContainer
                id="bills"
                buttonName="Add New"
                content="You do not have any Bills recurring payment
                        saved to your account."
              />
            )
          }
        </CardHeader>
      </div>
    );
    return (
      <div>
        { paymentMethod }
      </div>
    );
  }
}

export default PaymentMethod;
