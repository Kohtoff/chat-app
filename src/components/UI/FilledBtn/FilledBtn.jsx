import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../../scss/filled-btn.scss';

export default function FilledBtn(props) {
  const { children, mode, size, disabled } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <button
        disabled={disabled}
        className={'filled-btn filled-btn--' + mode + ' filled-btn--' + size}>
        {children}
      </button>
      {showTooltip && <span className="tooltip">Under Development</span>}
    </div>
  );
}

FilledBtn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string]).isRequired,
  mode: PropTypes.oneOf(['positive', 'negative', 'warning']),
  size: PropTypes.oneOf(['sm', 'mid', 'large', 'xl', 'fullWidth']),
};

FilledBtn.defaultProps = {
  mode: 'positive',
  size: 'mid',
};
