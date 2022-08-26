import React from 'react';
import PropTypes from 'prop-types';

import '../../../scss/filled-btn.scss';

export default function FilledBtn(props) {
  const { children, mode, size } = props;

  return (
    <>
      <button className={'filled-btn filled-btn--' + mode + ' filled-btn--' + size} {...props}>
        {children}
      </button>
    </>
  );
}

FilledBtn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string]).isRequired,
  mode: PropTypes.oneOf(['positive', 'negative', 'warning']),
  size: PropTypes.oneOf(['sm', 'mid', 'large', 'xl', 'full-width']),
};

FilledBtn.defaultProps = {
  mode: 'positive',
  size: 'mid',
};
