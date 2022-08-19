import React, { useContext, useState } from 'react';
import '../../../scss/textfield.scss';
import { SearchContactContext } from '../../AsideBlock/AsideBlock';
import PropTypes from 'prop-types';

export default function TextField({ placeholder, icon, handleOnSubmit, mode }) {
  const [value, setValue] = useState('');
  const searchContact = useContext(SearchContactContext);

  const handleOnInput = ({ target }) => {
    console.log(mode);
    setValue(target.value);
    if (mode === 'search') {
      searchContact(target.value);
    }
  };

  const handleSubmit = (e) => {
    if(mode === 'msg' && e.key === 'Enter'){
      handleOnSubmit(value);
      setValue(' ')
    }
  }

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
    </div>
  );
}

TextField.propTypes = {
  mode: PropTypes.oneOf(['search', 'msg'])
}

TextField.defaultProps = {
  mode: 'msg',
};
