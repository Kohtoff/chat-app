import React from 'react';
import Message from '../Message/Message';
import '../../scss/chat.scss';
import { useChat } from '../../hooks/useChat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';

export default function ChatField(props) {
  const [{ reloadUserInfo: user }] = useAuthState(auth);
  const {activeChat} = useChat();
  const messages = activeChat.msgHistory


  return (
    <div className="chat-field">
      {messages.length > 0 ? (
        messages
          .map((msg) => {
            return (
              <Message
                key={`${user.id}-${activeChat.id}-${msg.date}`}
                author={msg.isAuthor ? user : activeChat}
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
