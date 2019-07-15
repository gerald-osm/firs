import React from 'react';

const CardHeader = (props) => {
  const { children, cardHeader } = props;
  return (
    <section className="py-5">
      <div className="container Recurring_pay_div">
        <div className="row">
          <div className="col-sm-12">
            <h3>
              { cardHeader }
            </h3>
          </div>
        </div>
        <hr />
        { children }
      </div>
    </section>
  );
};

export default CardHeader;
