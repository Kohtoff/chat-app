import React from 'react';
import Divider from '../UI/Divider/Divider';
import '../../scss/msg-input.scss';
import TextField from '../UI/TextField/TextField';

export default function MessageInput() {
  return (
    <>
      <Divider />
      <div className="msg-input__container">
        <TextField placeholder={'Type your message'}/>
      </div>
    </>
  );
}
