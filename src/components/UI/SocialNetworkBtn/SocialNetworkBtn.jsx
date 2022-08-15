import React from 'react';
import FacebookLogo from '../FacebookLogo/FacebookLogo';
import PropTypes from "prop-types";
import '../../../scss/social-network-btn.scss';
import GmailLogo from '../GmailLogo/GmailLogo';

export default function SocialNetworkBtn(props) {
  const {variant, onClick } = props;

  const handleOnClick = (e) => {
    e.preventDefault();
    onClick()
  }

  return (
    <button onClick={(e) => handleOnClick(e)} className={"social-network-btn social-network-btn--" + variant}>
      <div className="social-network-btn__svg-container">
        {variant === 'facebook' ? <FacebookLogo /> : <GmailLogo />}
        <span>Sign in with {variant}</span>
      </div>
    </button>
  );
}

SocialNetworkBtn.propTypes = {
  variant: PropTypes.oneOf(['facebook', 'gmail'])
}
