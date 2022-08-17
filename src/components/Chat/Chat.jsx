import React, { createContext, useState } from 'react';
import AsideBlock from '../AsideBlock/AsideBlock';
import ChatContent from './ChatContent';
import '../../scss/chat.scss';

export const SelectChatContext = createContext();

export default function Chat() {
  const [activeChat, setActiveChat] = useState(null);
  console.log(activeChat);
  return (
    <main className="chat">
      <SelectChatContext.Provider value={setActiveChat}>
        <AsideBlock />
      </SelectChatContext.Provider>
      <ChatContent chatId={activeChat} />
    </main>
  );
}
