import React, { useMemo, useState } from 'react';
import { contacts } from '../../data';
import ChatField from './ChatField';
import ChatTopBar from './ChatTopBar';
import MessageInput from '../MessageInput/MessageInput';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';

export default function ChatContent({ chatId }) {
  const chat = useMemo(() => contacts.find((contact) => contact.id === chatId), [chatId]);
  const user = useAuthState(auth);

  const [msgList, setMsg] = useState([...chat.msgHistory])

  const handleSendMsg = (text) => {
    setMsg([...msgList, {
      text,
      isRead: false,
      date: new Date(),
      isAuthor: true,
    }])
  };

  return (
    <div className="chat-content">

        <>
          <ChatTopBar chat={chat} />
          <ChatField
            messages={msgList}
            data={{ currentUser: user, contact: chat, messages: msgList }}
          />
          <MessageInput
            msgHistory={msgList}
            handleOnSubmit={(text) => handleSendMsg(text)}
          />
        </>

    </div>
  );
}
