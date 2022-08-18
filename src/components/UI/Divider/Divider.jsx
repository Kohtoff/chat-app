import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/divider.scss';

export default function Divider({ children }) {
  return (
    <div className="divider">
      {children ? (
        <>
          <hr />
          {children}
          <hr />
        </>
      ) : (
        <hr />
      )}
    </div>
  );
}

Divider.propTypes = {
  children: PropTypes.string,
};
