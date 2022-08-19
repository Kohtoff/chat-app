import React, { useEffect, useState } from 'react';
import { contacts } from '../../data';
import ChatField from './ChatField';
import ChatTopBar from './ChatTopBar';
import MessageInput from '../MessageInput/MessageInput';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';

export default function ChatContent({ chatId }) {
  const [currentChat, setCurrentChat] = useState(contacts.find((contact) => contact.id === chatId));
  const [messages, setMessages] = useState([]);
  const user = useAuthState(auth)

  const handleSetMessages = (text) => {
    console.log('messages!!!',messages);
    setMessages([...messages, {
      text,
      date: new Date(),
      isRead: false,
      isAuthor: true
    }])
  }

  useEffect(() => {
    setCurrentChat(contacts.find((contact) => contact.id === chatId));
    setMessages(contacts.find((contact) => contact.id === chatId).msgHistory)
  }, [chatId]);


  return (
    <div className="chat-content">
      <>
        <ChatTopBar chat={currentChat} />
        <ChatField
          messages={messages}
          chat={currentChat}
          currentUser={user}
        />
        <MessageInput
          msgHistory={messages}
          handleOnSubmit={(text) => handleSetMessages(text)}
        />
      </>
    </div>
  );
}
