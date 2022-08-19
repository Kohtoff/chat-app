import React, { createContext, useEffect, useState } from 'react';
import AsideBlock from '../AsideBlock/AsideBlock';
import ChatContent from './ChatContent';
import '../../scss/chat.scss';

export const SelectChatContext = createContext();

export default function Chat() {
  const [activeChat, setActiveChat] = useState(null);




  return (
    <main className="chat">
      <SelectChatContext.Provider value={setActiveChat}>
        <AsideBlock />
      </SelectChatContext.Provider>
      {activeChat ? (
        <ChatContent chatId={activeChat} />
      ) : (
        <h2 className="chat-content__select-chat">Select chat to start messaging</h2>
      )}
    </main>
  );
}
