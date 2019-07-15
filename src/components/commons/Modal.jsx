import React from 'react';

const Modal = (props) => {
  const { children, id } = props;
  return (
    <div className="modal fade" id={id}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Modal;
