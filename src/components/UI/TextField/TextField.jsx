import React, { useContext, useState } from 'react';
import '../../../scss/textfield.scss';
import { SearchContactContext } from '../../AsideBlock/AsideBlock';
import PropTypes from 'prop-types';
import axios from 'axios';
import SendSVG from './SendSVG';

export default function TextField({ placeholder, icon, handleOnSubmit, mode }) {
  const [value, setValue] = useState('');
  const searchContact = useContext(SearchContactContext);

  const handleOnInput = ({ target }) => {
    setValue(target.value);
    if (mode === 'search') {
      searchContact(target.value);
    }
  };

  const handleSubmit = (e) => {
    if (mode === 'msg' && (e.key === 'Enter' || e.type === 'click')) {
      handleOnSubmit({ text: value, date: new Date().toJSON(), isAuthor: true });
      setValue('');
      setTimeout(
        () =>
          axios
            .get('https://api.chucknorris.io/jokes/random')
            .then(({ data }) => ({ text: data.value, date: new Date().toJSON(), isAuthor: false }))
            .then((payload) => handleOnSubmit(payload)),
        10000,
      );
    }
  };

  return (
    <div className="input">
      {icon}
      <input
        type="text"
        value={value}
        onChange={(e) => handleOnInput(e)}
        onKeyDown={(e) => handleSubmit(e)}
        className="input__textfield"
        placeholder={placeholder}
      />
      {mode === 'msg' && (
        <button className="input__send-btn" onClick={(e) => handleSubmit(e)}>
          <SendSVG />
        </button>
      )}
    </div>
  );
}

TextField.propTypes = {
  mode: PropTypes.oneOf(['search', 'msg']),
};

TextField.defaultProps = {
  mode: 'msg',
};
