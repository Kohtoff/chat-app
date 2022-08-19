import React from 'react';
import Divider from '../UI/Divider/Divider';
import '../../scss/msg-input.scss';
import TextField from '../UI/TextField/TextField';

export default function MessageInput({msgHistory, handleOnSubmit}) {




  return (
    <>
      <Divider />
      <div className="msg-input__container">
        <TextField placeholder={'Type your message'} handleOnSubmit={(text) => handleOnSubmit(text)} />
      </div>
    </>
  );
}
