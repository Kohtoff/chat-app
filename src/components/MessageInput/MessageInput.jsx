import React from 'react';
import Divider from '../UI/Divider/Divider';
import '../../scss/msg-input.scss';
import SearchBar from '../AsideBlock/SearchBar';

export default function MessageInput() {
  return (
    <>
      <Divider />
      <div className="msg-input__container">
        <SearchBar />
      </div>
    </>
  );
}
