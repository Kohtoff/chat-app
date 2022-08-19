import React, { createContext } from 'react';
import AsideBlock from '../AsideBlock/AsideBlock';
import ChatContent from './ChatContent';
import '../../scss/chat.scss';
import { useChat } from '../../hooks/useChat';

export const SelectChatContext = createContext();

export default function Chat() {
  const chat = useChat();
  const { activeChat, contacts } = chat;

  return (
    <main className="chat">
      <AsideBlock />
      {activeChat ? (
        <ChatContent chatId={activeChat} contacts={contacts} />
      ) : (
        <h2 className="chat-content__select-chat">Select chat to start messaging</h2>
      )}
    </main>
  );
}
