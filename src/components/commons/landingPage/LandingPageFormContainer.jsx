import React from 'react';

const LandingPageFormContainer = (props) => {
  const { children, formHeader, id, classname } = props;
  return (
    <div className={classname} id={id}>
      <div className="service_form_container_title text-center">
        <h4>
          { formHeader }
        </h4>
      </div>
      { children }
    </div>
  );
};

export default LandingPageFormContainer;
