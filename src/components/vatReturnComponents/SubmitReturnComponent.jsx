import React, { Component } from "react";
import DashboardHeader from "../dashboard/Dashboardheader";
import Modal from "react-responsive-modal";

import {Link} from 'react-router-dom'
// import FooterBar from "../commons/Footer";

class SubmitReturn extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
        const { open } = this.state;

    const SubmitReturn = (
      <React.Fragment>
        <div
          className="container-fluid"
          style={{
            marginRight: "50px",
            height: "100vh"
          }}
        >
          <div
            className="text-center"
            style={{
              border: "1px solid",
              padding: "5px",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
            }}
          >
            VALUE ADDED TAX RETURN FORM
          </div>
          <form action="#">
            <table class="table table-bordered" style={{ border: "5px" }}>
              <thead />
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "16%",
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                  >
                    Return covers
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="M"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="M"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Y"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Y"
                    />
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                  >
                    Begin
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="D"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="D"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="M"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="M"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Y"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Y"
                    />
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                  >
                    Ending
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="D"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="D"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="M"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="M"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Y"
                    />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Y"
                    />
                  </td>
                </tr>
                {/* <tr>
                <td colspan="12">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Company name"
                  />
                </td>
                <td colspan="8">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="TIN"
                  />
                </td>
              </tr> */}
                {/* <tr>
                <td colspan="12">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Company physical address"
                  />
                </td>
                <td colspan="8">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Doc No"
                  />
                </td>
              </tr>
              <tr>
                <td colspan="12">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Postal Address (including postal code)"
                  />
                </td>
                <td colspan="8">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Tel. No"
                  />
                </td>
              </tr>
              <tr>
                <td colspan="12">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Email address"
                  />
                </td>
                <td colspan="8">
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Corporate Website"
                  />
                </td>
              </tr> */}
                <tr>
                  <td colspan="20" />
                </tr>
                <tr
                  style={{
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                  }}
                >
                  <td colspan="10" />
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="2"
                  >
                    Currency
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="2"
                  >
                    NAIRA
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="2"
                  >
                    USD
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="2"
                  >
                    GBP
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="2"
                  >
                    EURO
                  </td>
                </tr>
                <tr
                  style={{
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                  }}
                >
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    LINE #
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    A-SALES/INCOME
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="3"
                  >
                    Notes
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="5"
                  >
                    Amount
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    10
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Total Sales/Income Exclusive of VAT
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    15
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Less: Goods and Services Exempted included in Line 10
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    20
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Less: Zero rated Goods and Services included in Line 10
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    22
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Sales adjustments
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    25
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Sales/Income Subject to VAT
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                    colspan="1"
                  >
                    35
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                    colspan="11"
                  >
                    TOTAL OUTPUT TAX
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="1" />
                  <td
                    colspan="11"
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    B-PURCHASES EXPENSES
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    40
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Domestic Purchases used for sales other than Zero rated
                    and Exempted Goods and services
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    45
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Purchases not wholly used in making VATable Supplies
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    55
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    VAT suffered on VATable Domestic Supplies
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    60
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Domestic Purchases for Zero Rated Sales
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    65
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Purchases not wholly used in making VATable Supplies
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    75
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    VAT suffered on Zero-rated Supplies
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    85
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Purchased Imports
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    90
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Total Purchases Subject to VAT Incurred
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="1"
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    95
                  </td>
                  <td
                    colspan="11"
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    TOTAL OUTPUT TAX
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="1"
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    100
                  </td>
                  <td
                    colspan="11"
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    VAT Balance for Current Period
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    105
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Input Tax on VAT Withheld by MDAs & Oil and Gas
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    110
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Automatic VAT payment in Current Period
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    115
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Net VAT Balance for Current Period
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    120
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    VAT credit brought forward
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    130
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    VAT credit for the Current Period
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    135
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Total VAT credit
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    140
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    Relieved VAT credit
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="1"
                  >
                    145
                  </td>
                  <td
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                    }}
                    colspan="11"
                  >
                    VAT credit brought forward
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="1" style={{ fontWeight: "bold" }}>
                    150
                  </td>
                  <td
                    colspan="11"
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    VAT payable
                  </td>
                  <td colspan="3">
                    <input style={{ width: "100%" }} type="text" />
                  </td>
                  <td colspan="5">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="00.00"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="20" />
                </tr>
                <tr>
                  <td
                    className="text-center"
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontWeight: "bold"
                    }}
                    colspan="20"
                  >
                    Note: LATE FILING & PAYMENT SHALL BE PENALISED
                  </td>
                </tr>
                <tr>
                  <td colspan="20" />
                </tr>
                <tr>
                  <td colspan="20">
                    {" "}
                    <span style={{ fontWeight: "bold" }}>
                      DECLARATION:
                    </span>{" "}
                    <span
                      style={{
                        fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                      }}
                    >
                      I declare that the particulars in this return are
                      correct and complete in accordance with the provisions
                      of Value Added Tax CAP VI LFN, 2004 as amended.{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colspan="20" />
                </tr>
                {/* <tr>
                  <td colspan="9">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="FULLNAME"
                    />
                  </td>
                  <td colspan="1" />
                  <td colspan="9">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="DESIGNATION"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="20" />
                </tr>
                <tr>
                  <td colspan="9">SIGNATURE</td>
                  <td colspan="1" />
                  <td colspan="9">
                    <input
                      style={{ width: "100%" }}
                      type="date"
                      placeholder="DATE"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="20" />
                </tr>
                <tr>
                  <td className="text-center" colspan="20">
                    {" "}
                    <span style={{ fontWeight: "bold" }}>
                      FOR FIRS USE ONLY
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colspan="20" />
                </tr>
                <tr>
                  <td colspan="4">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="NAME"
                    />
                  </td>
                  <td colspan="4">
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="IR NO"
                    />
                  </td>
                  <td colspan="4">SIGNED:</td>
                  <td colspan="2" />
                  <td colspan="6">
                    <input style={{ width: "100%" }} type="DATE" />
                  </td>
                </tr> */}
                <tr>
                  <td colspan="20" />
                </tr>
                <tr>
                  <td colspan="20" className="text-center">
                    {" "}
                    <button onClick={this.onOpenModal} className= 'btn btn-secondary btn-block'>Submit</button>
                    {/* MODALS */}
                    <div>
                      <Modal open={open} onClose={this.onCloseModal} center>
                        <div
                          className="container"
                          style={{ padding: "60px" }}
                        >
                          <h2>
                            Pay by{" "}
                            <Link to="/card" style={{ color: "blue" }}>
                              Card{" "}
                            </Link>
                            or{" "}
                            <Link to="/account" style={{ color: "blue" }}>
                              Account
                            </Link>{" "}
                          </h2>
                        </div>
                      </Modal>
                    </div>
                    {/* MODALS */}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </React.Fragment>
    );
    return (
      <div id="content">
        <DashboardHeader />
        {SubmitReturn}
        {/* <FooterBar /> */}
      </div>
    );
  }
}

export default SubmitReturn;
