import React from 'react';
import ChatField from './ChatField';
import ChatTopBar from './ChatTopBar';
import MessageInput from '../MessageInput/MessageInput';

export default function ChatContent() {
  return (
    <div className="chat-content">
      <>
        <ChatTopBar />
        <ChatField />
        <MessageInput />
      </>
    </div>
  );
}
