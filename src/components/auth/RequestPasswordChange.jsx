import React, { Component } from 'react';
import frsclogo from "../../template/utils/images/frsc-logo.png";
import { Button } from '../commons/index';

/**
 * @class RequestPasswordChange
 */
class RequestPasswordChange extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const requestPasswordChange = (
      <div>
        <section>
          <div className="container login_container">
            <div className="row">
              <div className=" col-sm-4 col-offset-8 rounded p-4 mx-auto text-center page_desc">
                <h3>
                  <small>Forget Password ?</small>
                </h3>
              </div>
            </div>

            <div className="row">
              <div className=" col-sm-4 col-offset-8 rounded p-4 mx-auto form_container">
                <div className="row">
                  <div className="col-sm-12 py-4">
                    <img src={frsclogo} alt="" id="logoImage" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12  form_input_container">
                    <form action="">
                      <div className=" mb-4 mt-3 custom_input_group">
                        <label htmlFor="Email" className="form_label">
                          {" "}
                          Email Address{" "}
                        </label>
                        <div className="input-group mb-2">
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder=""
                            name=""
                            required
                          />
                          <div className="input-group-append">
                            <button className="btn btn-light" type="submit">
                              <i className="fas fa-envelope-open-text" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="btn btn-danger mt-4">
                        Request Password Change
                      </Button>
                    </form>
                  </div>

                  <div className="col-sm-12 text-center my-4 account_setup">
                    <p>
                      <small>
                        Remember Your Password ?{" "}
                        <a href="/user-login">
                          {" "}
                          <strong> Login </strong>{" "}
                        </a>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className=" col-sm-4 col-offset-8 rounded p-4 mx-auto text-center account_setup">
                <p>
                  <small>
                    <a href="/"> Return Home </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{requestPasswordChange}</div>;
  }
}

export default RequestPasswordChange;
