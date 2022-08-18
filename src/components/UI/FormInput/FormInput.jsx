import React from 'react';
import '../../../scss/form-input.scss';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { size, placeholder, ...rest } = props;
  return (
    <div className={'form-input__container form-input__container--' + size}>
      <input {...rest} className="form-input" placeholder=" " />
      <span className="form-input__floating-label">{placeholder}</span>
    </div>
  );
}

Input.propTypes = {
  size: PropTypes.oneOf(['sm', 'mid', 'large', 'xl', 'fullWidth']),
};

Input.defaultProps = {
  size: 'fullWidth',
};
