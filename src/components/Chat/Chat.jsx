import React, { createContext, useEffect, useState } from 'react';
import AsideBlock from '../AsideBlock/AsideBlock';
import ChatContent from './ChatContent';
import '../../scss/chat.scss';
import { useChat } from '../../hooks/useChat';

// export const SelectChatContext = createContext();
export const AsideVisabilityContext = createContext();

export default function Chat() {
  const chat = useChat();
  const { activeChat } = chat;
  const [width, setWindowWidth] = useState(0);
  const [isShowAsideBlock, toggleShowAsideBlock] = useState(true);

  const isDesktop = width > 1024;
  const isLaptop = width <= 1024 && width > 768;
  const isTablet = width < 768;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <main className="chat">
      <AsideVisabilityContext.Provider value={{ isShowAsideBlock, toggleShowAsideBlock, width }}>
        {
          /*if dimension is for laptop and AsideBlock shown than render AsideBlock*/
          ((isLaptop && isShowAsideBlock) ||
            /*if dimension is for tablet and AsideBlock shown than render AsideBlock*/
            (isTablet && isShowAsideBlock) ||
            /*if dimension is for desktop than render AsideBlock */
            isDesktop) && <AsideBlock />
        }
        {
          /*if AsideBlock hidden and width of window is equal to tablet dimension then render ChatContent*/
          (!isShowAsideBlock && isTablet) ||
          /*if width of window is equal to desktop dimension then render ChatContent */
          isDesktop ||
          /*if width of window is equal to Laptop dimension then render ChatContent */
          isLaptop ? (
            //if user has an active chat than render ChatContent
            activeChat ? (
              <ChatContent activeChat={activeChat} />
              /*else if user hasn`t active chat and window width is equal to width of laptop window or
                desktop window than render message
                else do not render anyting*/
            ) : isLaptop || isDesktop ? (
              <div className="chat__empty-field">
                <h2 className="chat__select-chat">Select chat to start messaging</h2>
              </div>
            ) : undefined
          ) : null
        }
      </AsideVisabilityContext.Provider>
    </main>
  );
}
