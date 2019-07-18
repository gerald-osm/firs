import React, { Component } from 'react';
import { Link } from "react-router-dom";
import frsclogo from "../../template/utils/images/FIRS.png";
import { Button } from '../commons/index';

/**
 * @class GuestNavigation
 */
class LoginUser extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const loginUser = (
      <div>
        <section>
          <div
            className="container login_container"
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
            }}
          >
            <div className="row">
              <div className=" col-sm-4 col-offset-8 rounded p-4 mx-auto text-center page_desc">
                <h3>
                  <small
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                  >
                    Login to your VAT account
                  </small>
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
                      <div className=" mb-4 custom_input_group">
                        <label htmlFor="Email" className="form_label">
                          {" "}
                          TIN-Number{" "}
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
                            <button
                              className="btn btn-light"
                              type="button"
                              disabled
                            >
                              <i className="fas fa-envelope-open-text" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="custom_input_group">
                        <label htmlFor="Password" className="form_label">
                          {" "}
                          Password{" "}
                        </label>
                        <div className="input-group mb-2 custom_input_group">
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder=""
                            name=""
                            required
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-light"
                              type="button"
                              disabled
                            >
                              <i className="fas fa-unlock-alt" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className=" mb-4 mt-4 custom_input_group">
                        <select class="custom-select">
                          <option selected>MSTO</option>
                          <option value="1">Victoria Island</option>
                          <option value="2">Lekki</option>
                          <option value="3">Ikeja</option>
                          <option value="1"> Maryland</option>
                          <option value="2">Ajah</option>
                          <option value="3">Isolo</option>
                        </select>
                      </div>

                      <Link to="/user-dashboard">
                        <Button
                          type="submit"
                          className="btn btn-danger mt-4"
                        >
                          Log In
                        </Button>
                      </Link>
                    </form>
                  </div>

                  <div className="col-sm-12 text-center my-4 account_setup">
                    <p>
                      <small>
                        Don't you have an account?{" "}
                        <a href="/user-signup">
                          {" "}
                          <strong> Register </strong>{" "}
                        </a>
                      </small>
                    </p>

                    <p>
                      <small>
                        <a href="/change-password"> Forgotten Password? </a>
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
    return <div>{loginUser}</div>;
  }
}

export default LoginUser;
