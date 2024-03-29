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
                  <small
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                  >
                    Create your VAT account
                  </small>
                </h3>

                <div
                  className="row"
                  style={{ fontSize: "25px", marginTop: "50px" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-7 col-offset-5 rounded p-4 pb-5 mx-auto form_container">
              <div className="row">
                <div className="col-sm-12 py-4">
                  <img
                    src={frsclogo}
                    alt=""
                    id="logoImage"
                    style={{ width: "20%", marginLeft: "40%" }}
                  />
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
                          placeholder="COMPANY"
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
                  <div className="col-sm-6  form_input_container">
                    <div className=" mb-4 custom_input_group">
                      <label htmlFor="Email" className="form_label">
                        {" "}
                        Email adress{" "}
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
                  <div className="col-sm-6  form_input_container">
                    <div className=" mb-4 custom_input_group">
                      <label htmlFor="Email" className="form_label">
                        {" "}
                        Phone Number{" "}
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

                  <div className="col-sm-6  form_input_container">
                    <div className=" mb-4 custom_input_group">
                      <label htmlFor="Email" className="form_label">
                        {" "}
                        Password{" "}
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
                  <div className="col-sm-6  form_input_container">
                    <div className=" mb-4 custom_input_group">
                      <label htmlFor="Email" className="form_label">
                        {" "}
                        Confirm Password{" "}
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
                </div>

                {/* FFHFHFHFHHF */}
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
                    {/* <div className="modal fade animated bounce" id="otp_confirm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header service_modal_header">
                              <div>
                                <h5 className="modal-title" id="exampleModalLabel">CONFIRMATION</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="row">
                                  <div className="col-sm-12 text-justify">
                                    <h6>
                                                A One Time Password (OTP) has been sent to your email address
                                                and your mobile number. Use the code to verify your registration.
                                    </h6>
                                  </div>
                                  <div className="col-sm-12">
                                    <form action="">

                                      <div className="form-group mt-4 otp_verify">
                                        <input type="text" className="form-control" id="" />
                                      </div>

                                    </form>
                                  </div>

                                </div>
                                <div className="row mt-3">
                                  <div className="col-sm-12">

                                    <button type="button" className="btn btn-danger">Confirm</button>

                                  </div>
                                </div>
                                <div className="row pt-4">
                                  <div className="col-sm-12 text-center otp_resend">
                                    <p>
                                      <small>
                                        <a href="#">
                                          {' '}
                                          <strong> Resend OTP </strong>
                                          {' '}
                                        </a>
                                      </small>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
