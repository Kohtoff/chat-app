import React, { createContext } from 'react';
import AsideBlock from '../AsideBlock/AsideBlock';
import ChatContent from './ChatContent';
import '../../scss/chat.scss';
import { useChat } from '../../hooks/useChat';

export const SelectChatContext = createContext();

export default function Chat() {
  const chat = useChat();
  const { activeChat } = chat;

  return (
    <main className="chat">
      <AsideBlock />
      {activeChat ? (
        <ChatContent activeChat={activeChat} />
      ) : (
        <div className='chat__empty-field'>
          <h2 className="chat__select-chat">Select chat to start messaging</h2>
        </div>
      )}
    </main>
  );
}
