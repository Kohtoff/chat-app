import React, { useContext, useState } from 'react';
import '../../../scss/textfield.scss';
import { SearchContactContext } from '../../AsideBlock/AsideBlock';

export default function TextField({ placeholder, icon }) {
  const [value, setValue] = useState('');
  const searchContact = useContext(SearchContactContext)
  const handleOnInput = ({target}) => {
    setValue(target.value)
    searchContact(target.value)
  }



  return (
    <div className="input">
      {icon}
      <input
        type="text"
        value={value}
        onChange={(e) => handleOnInput(e)}
        className="input__textfield"
        placeholder={placeholder}
      />
    </div>
  );
}
