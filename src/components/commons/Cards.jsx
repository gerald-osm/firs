import React from 'react';

const Cards = (props) => {
  const { children } = props;
  return (
    <div className="row">
      <div className="col-sm-12">
        <ul className="nav nav-pills justify-content-center tab_btn" role="tablist">
          {children}
        </ul>
      </div>

    </div>
  );
};

export default Cards;
