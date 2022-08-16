import React from 'react';
import MessageList from './MessageList';
import '../../scss/message-block.scss';

export default function MessageBlock() {
  return (
    <div className="msg-block">
      <h2 className="msg-block__title">Chats</h2>
      <MessageList />
    </div>
  );
}
