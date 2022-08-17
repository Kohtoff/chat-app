import React from 'react';
import { contacts } from '../../data';
import ChatField from './ChatField';
import ChatTopBar from './ChatTopBar';
import MessageInput from '../MessageInput/MessageInput'

export default function ChatContent({ chatId }) {
  const chat = contacts.filter(contact => contact.id === chatId)[0];
  console.log(chat);
  return (
    <div className="chat-content">
      {chatId ? (
        <>
          <ChatTopBar chat={chat}/>
          <ChatField />
          <MessageInput />
        </>
      ) : (
        <h2 className="chat-content__select-chat">Select chat to start messaging</h2>
      )}
    </div>
  );
}
