import React from 'react';
import '../../../scss/badge.scss';

export default function Badge(props) {
  const { mode } = props;
  return <div className={`badge badge--${mode}`}></div>;
}

Badge.defaultProps = {
  mode: 'new-msg',
};
