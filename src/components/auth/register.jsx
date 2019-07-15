import React, { Component } from "react";
import RegisterUser from "./RegisterIndividual";
import registerOptions from './registerOptions';

class Register extends Component {
  render() {
    const reg = (
      <div>
        <registerOptions />
        <RegisterUser />
      </div>
    );
    return <div id="content">{reg}</div>;
  }
}

export default Register;
