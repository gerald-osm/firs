import React from 'react';

const Form = (props) => {
  const { children, className1 } = props;
  return (
    <div className="row">
      <div className="col-sm-12 form_input_container_pays">
        <form>
          { children }
        </form>

      </div>
    </div>
  );
};

export default Form;
