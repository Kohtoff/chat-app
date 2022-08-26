import React from 'react';
import Message from '../Message/Message';
import '../../scss/chat.scss';
import { useChat } from '../../hooks/useChat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';

export default function ChatField() {
  const [{ reloadUserInfo: user }] = useAuthState(auth);
  const { contacts, activeChat } = useChat();
  const currentChatIndex = activeChat
    ? contacts.findIndex((contact) => activeChat.id === contact.id)
    : null;
  const messages = contacts[currentChatIndex].msgHistory
    ? contacts[currentChatIndex].msgHistory
    : 0;

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
