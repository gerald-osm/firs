import React from 'react';
import logo from '../../template/utils/icons/logo.png';
import { Button } from '../commons/index';

const OtpPage = () => (
  <section>
    <div className="container login_container">
      <div className="row">
        <div className=" col-sm-4 col-offset-8 rounded p-4 mx-auto text-center page_desc">
          <h3>
            <small>
               Forget Password
            </small>
          </h3>
        </div>
      </div>
      <div className="row ">
        <div className=" col-sm-4 col-offset-8 rounded p-4 mx-auto form_container">
          <div className="row">
            <div className="col-sm-12 py-4">
              <img src={logo} alt="" style={{ width: '40%', marginLeft: '30%', marginRight: '30%' }} />
            </div>
          </div>
          <div className="row py-5">
            <div className="col-sm-12  form_input_container text-center">
              <h6 className="pb-4">
                An OTP has been sent to your email address
              </h6>
              <Button
                type="submit"
                className="btn btn-danger mt-4"
              >
                   Back to log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OtpPage;
