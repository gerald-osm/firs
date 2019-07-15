import React from 'react';

const ServiceCards = (props) => {
  const {
 children, serviceImg, serviceLabel, id, className, onClick
} = props;
  return (
    <div
      className={className}
      id={id}
      onClick={onClick}
      >
      <img src={serviceImg} alt="" />
      <h6>
        {serviceLabel}
      </h6>
    </div>
  );
};

export default ServiceCards;
