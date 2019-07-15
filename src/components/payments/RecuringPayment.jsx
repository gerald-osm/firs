import React, { Component } from 'react';
import {
  CardHeader,
  Cards,
  Modal,
  ModalBody,
  UserAuthHeader,
  Form,
  CardContainer
} from '../commons/index';

/**
 * @class PaymentMethod
 */
class RecuringPayment extends Component {
    state = {
      bills: false,
      transfer: false,
      mobile: true,
    }

    onBillClick = () => {
      this.setState({ bills: true, mobile: false, transfer: false });
    }

    onTransferClick = () => {
      this.setState({ transfer: true, bills: false, mobile: false });
    }

    onMoneyClick = () => {
      this.setState({ transfer: false, bills: false, mobile: true });
    }

    /**
   *
   * @returns {*} - render
   */
    render() {
      const { bills, transfer, mobile } = this.state;
      const recuringPayment = (
        <div>
          <UserAuthHeader />
          <CardHeader cardHeader="Recuring Payment">
            <Cards>
              <li className="nav-item">
                <a
                  className="nav-link active" data-toggle="pill"
                  href="#mobile"
                  onClick={this.onMoneyClick}
                >
                  Mobile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#bills"
                  onClick={this.onBillClick}
                >
                    Bills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#transfer"
                  onClick={this.onTransferClick}
                >
                    Transfer
                </a>
              </li>

            </Cards>
            {
                // eslint-disable-next-line no-nested-ternary
                mobile && !transfer && !bills
                  ? (
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
                            <button type="submit" className="btn btn-danger mt-4"> Continue </button>

                          </Form>
                        </ModalBody>
                      </Modal>
                    </div>
                  ) : bills && !transfer && !mobile
                    ? (
                      <CardContainer
                        id="bills"
                        buttonName="Add New"
                        content="You do not have any Bills recurring payment
                        saved to your account."
                      />
                    )
                    : (
                      <CardContainer
                        id="transfer"
                        buttonName="Add New"
                        content="You do not have any Transfer recurring payment
                        saved to your account"
                      />
                    )
            }
          </CardHeader>
        </div>
      );
      return <div>{recuringPayment}</div>;
    }
}

export default RecuringPayment;
