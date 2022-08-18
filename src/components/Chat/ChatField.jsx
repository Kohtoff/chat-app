import React from 'react';
import Message from '../Message/Message';
import '../../scss/chat.scss';

export default function ChatField({ data }) {
  const { messages, currentUser, contact } = data;
  return (
    <div className="chat-field">
      {/* SHOULD TO FIND ANOTHER VALUE FOR KEY. DATE + TIME MAYBEE */}
      {messages.length > 0 ? (
        messages.reverse().map((msg, index) => (
          <Message
            data={{ message: msg, author: msg.isAuthor ? currentUser : contact }}
            key={index}
          />
        )).reverse()
      ) : (
        <span>History of messaging is empty :(</span>
      )}
    </div>
  );
}
