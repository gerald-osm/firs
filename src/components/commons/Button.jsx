import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    onClick,
    className,
    children,
    style
  } = props;
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className={className}
        style={style || null}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.shape({})
};

export default Button;
