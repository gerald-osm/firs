import React, { Component } from "react";
import frsclogo from "../../template/utils/images/FIRS.png";
import { Link } from "react-router-dom";
import { Button } from "../commons";

/**
 * @class GuestNavigation
 */
class RegisterCompany extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const registerCompany = (
      <div>
        <section>
          <div className="container login_container">
            <div className="row">
              <div className=" col-sm-4 col-offset-8 rounded p-4 mx-auto text-center page_desc">
                <h3>
                  <small>Create your VAT account</small>
                </h3>

                <div
                  className="row"
                  style={{ fontSize: "25px", marginTop: "50px" }}
                >
                  <div className="col-lg-4">
                    <Link to="/individual">Individual</Link>
                  </div>
                  <div className="col-lg-4">
                    <Link to="/company">Company</Link>
                  </div>
                  <div
                    className="col-lg-4"
                    style={{
                      backgroundColor: "#a01b1f",
                      borderRadius: "10px",
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    <Link to="/forex">Forex</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-7 col-offset-5 rounded p-4 pb-5 mx-auto form_container">
              <div className="row">
                <div className="col-sm-12 py-4">
                  <img src={frsclogo} alt="" id="logoImage" />
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-sm-6  form_input_container">
                    <div className=" mb-4 custom_input_group">
                      <label htmlFor="Email" className="form_label">
                        {" "}
                      </label>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="FOREX"
                          name=""
                          required
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6  form_input_container">
                    <div className=" mb-4 custom_input_group">
                      <label htmlFor="Email" className="form_label">
                        {" "}
                        Enter your TIN{" "}
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
                      </div>
                    </div>
                  </div>

                  <div className="row" />
                </div>

                <div className="row">
                  <div className="col-sm-8 col-offset-4 mx-auto reg_btn">
                    <Link to="/user-dashboard">
                      <Button
                        type="submit"
                        className="btn btn-danger mt-4"
                        data-toggle="modal"
                        data-target="#otp_confirm"
                      >
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-12 text-center my-4 account_setup">
                  <p>
                    <small>
                      Already have an account?{" "}
                      <a href="/user-login">
                        {" "}
                        <strong> Login </strong>{" "}
                      </a>
                    </small>
                  </p>

                  <p>
                    <small>
                      <a href="/change-password"> Forgotten Password? </a>
                    </small>
                  </p>
                </div>
              </form>
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
        </section>
      </div>
    );
    return <div>{registerCompany}</div>;
  }
}

export default RegisterCompany;
