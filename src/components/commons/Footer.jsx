import React from "react";
import { Link } from "react-router-dom";

/**
 * @class FooterBar
 */
const FooterBar = () => (
  <div>
    <footer>
      <div className="d-flex footer p-4 shadow">
        <div className="container">
          <div className="d-flex">
            <div className="col pl-0">
              <p className="text-muted alignLeft">2019 &copy; FIRS</p>
            </div>
            <div className="col pr-0">
              <p className="text-muted social_icon alignRight">
                follow us &nbsp;
                <Link to="#">
                  {" "}
                  <i className="fab fa-facebook-f" />{" "}
                </Link>
                <Link to="#">
                  {" "}
                  <i className="fab fa-twitter" />{" "}
                </Link>
                <Link to="#">
                  {" "}
                  <i className="fab fa-google-plus-g" />{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default FooterBar;
