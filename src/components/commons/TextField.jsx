import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextField = ({
  field,
  value,
  error,
  type,
  onChange,
  onBlur,
  id,
  placeholder,
  style,
  className
}) => (
  <div className={classnames({ 'text-danger': error })}>
    <input
      style={style}
      type={type}
      name={field}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      id={id}
      className={className}
    />
    {error && <p className="text-danger">{error}</p>}
  </div>
);

TextField.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({})
};

export default TextField;
