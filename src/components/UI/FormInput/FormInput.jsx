import React from 'react';
import '../../../scss/input.scss';
import PropTypes from 'prop-types';

export default function Input(props) {
  const {size, placeholder, ...rest} = props
  return (
    <div className={"input__container input__container--" + size}>
      <input {...rest} className='input' placeholder=' '/>
      <span className="input__floating-label">{placeholder}</span>
    </div>
  )
}

Input.propTypes = {
  size: PropTypes.oneOf(['sm', 'mid', 'large', 'xl', 'fullWidth'])
}

Input.defaultProps = {
  size: 'fullWidth',

}
