import React from 'react';
import Divider from '../UI/Divider/Divider';
import '../../scss/msg-input.scss';
import TextField from '../UI/TextField/TextField';
import {useDispatch} from 'react-redux';
import { sendMsg } from '../../ducks/chat.duck';

export default function MessageInput({msgHistory, handleOnSubmit}) {

  const dispatch = useDispatch()


  return (
    <>
      <Divider />
      <div className="msg-input__container">
        <TextField placeholder={'Type your message'} handleOnSubmit={(msg) => dispatch(sendMsg(msg))} />
      </div>
    </>
  );
}
