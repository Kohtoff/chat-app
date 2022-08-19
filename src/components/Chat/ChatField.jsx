import React from 'react';
import Message from '../Message/Message';
import '../../scss/chat.scss';
// import { useChat } from '../../hooks/useChat';

export default function ChatField({ data }) {
  const { messages, currentUser, contact } = data;
  // const chat = useChat()
  // const {msgList} = chat

  // console.log(msgList);


  return (
    <div className="chat-field">
      {messages.length > 0 ? (
        messages
          .map((msg) => (
            <Message
              data={{ message: msg, author: msg.isAuthor ? currentUser : contact }}
              key={`${msg.isAuthor ? currentUser[0].uid : contact.id}${msg.date.getTime()}`}
            />
          ))
          .reverse()
      ) : (
        <span>History of messaging is empty :(</span>
      )}
    </div>
  );
}
