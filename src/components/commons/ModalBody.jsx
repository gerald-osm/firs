import React from 'react';

const ModalBody = (props) => {
  const { children, modalBodyHeader } = props;
  return (
    <div className="modal-body px-5 pb-5 airtime_form">
      <div className="row py-4">
        <div className="col-sm-12 text-center main_color">
          <h5>
            { modalBodyHeader }
          </h5>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ModalBody;
