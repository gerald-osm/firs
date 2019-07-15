import React from 'react';

const CardContainer = (props) => {
  const {
    id, buttonName, content, dataTarget
  } = props;
  return (
    <div className="container tab-pane" id={id}>
      <div className="row">
        <div className="col-sm-3 col-offset-9 ml-auto text-right">
          <button
            type="button"
            className="btn btn-danger add_new_btn"
            data-toggle="modal" data-target={dataTarget}
          >
            {buttonName}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center no_pay_msg">
          <h5>
            {content}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
