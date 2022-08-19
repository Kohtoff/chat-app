import React from 'react';
import Message from '../Message/Message';
import '../../scss/chat.scss';

export default function ChatField(props) {
  const { messages, currentUser, chat } = props;

  // console.log("MESSAGES",messages);

  return (
    <div className="chat-field">
      {messages.length > 0 ? (
        messages
          .map((msg) => {
            console.log(msg);
            return (
              <Message
                key={`${currentUser.id}-${chat.id}-${msg.date}`}
                author={msg.isAuthor ? currentUser : chat}
                message={msg}
              />
            );
          })
          .reverse()
      ) : (
        <span>History of messaging is empty :(</span>
      )}
    </div>
  );
}
