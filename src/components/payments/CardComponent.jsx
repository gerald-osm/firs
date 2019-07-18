import React, { Component } from "react";


class CardPayment extends Component {

    
  render() {
    const CardPayment = (
      <React.Fragment>
        <div
          className="container mt-5"
          style={{
            background: "#e9a3a3b3",
            width: "70%",
            height: "80%",
            marginLeft: "40px"
          }}
        >
          <div className="row">
            <div className="col-12 text-center">
              <p
                style={{
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  color: "black"
                }}
              >
                Pay with card
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 ">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name on Card"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-credit-card" />
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Card Number"
                  aria-label="Card Number"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-4">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  {/* <span class="input-group-text" id="basic-addon1">
                        Expiration
                      </span> */}
                </div>
                <div className="custom_input_group">
                  <select class="custom-select" style={{ width: "120px" }}>
                    <option selected>MM</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="1"> April</option>
                    <option value="2">May</option>
                    <option value="3">June</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div class="input-group mb-3">
                <div class="input-group-prepend" />
                <div className="custom_input_group">
                  <select class="custom-select" style={{ width: "120px" }}>
                    <option selected>Year</option>
                    <option value="1">2022</option>
                    <option value="2">2021</option>
                    <option value="3">2020</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="input-group mb-3">
                <div class="input-group-prepend" />
                <div className="custom_input_group">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="CVV"
                    name=""
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
          
            className="btn btn-block"
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              backgroundColor: "#6E2019",
              borderRadius: "5px",
              color: "white",
              fontSize: "20px",
              fontFamily: "verdana"
            }}
            onClick={() => {
              alert("Payment Successfull");
            }}
          >
            Confirm
          </button>
          {/* CLOSING DIV*/}
        </div>
      </React.Fragment>
    );
    return <div id="content">{CardPayment}</div>;
  }
}

export default CardPayment;
