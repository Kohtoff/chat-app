import React from 'react';
import PropTypes from 'prop-types'
import '../../../scss/divider.scss'

export default function DividerWithText({ children }) {
  return (
    <div className='divider'>
      <hr />
      {children}
      <hr />
    </div>
  );
}

DividerWithText.propTypes = {
  children: PropTypes.string,
}


