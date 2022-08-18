import React, { useMemo } from 'react';
import { contacts } from '../../data';
import ChatField from './ChatField';
import ChatTopBar from './ChatTopBar';
import MessageInput from '../MessageInput/MessageInput'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';

export default function ChatContent({ chatId }) {
  const chat = useMemo(() => contacts.find(contact => contact.id === chatId), [chatId])
  const user = useAuthState(auth)
  return (
    <div className="chat-content">
      {chatId ? (
        <>
          <ChatTopBar chat={chat}/>
          <ChatField data={{currentUser: user, contact: chat, messages: chat.msgHistory}} />
          <MessageInput />
        </>
      ) : (
        <h2 className="chat-content__select-chat">Select chat to start messaging</h2>
      )}
    </div>
  );
}
