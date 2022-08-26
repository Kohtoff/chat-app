import React, { useContext } from 'react';
import { useChat } from '../../hooks/useChat';
import ContactCard from '../ContactCard/ContactCard';
import ArraowOpenAside from './ArraowOpenAside';
import ArrowCloseAside from './ArrowCloseAside';
import { AsideVisabilityContext } from './Chat';
import { useDispatch } from 'react-redux';
import { resetActiveChat } from '../../ducks/chat.duck';

export default function ChatTopBar() {
  const { isShowAsideBlock, toggleShowAsideBlock, width } = useContext(AsideVisabilityContext);
  const { activeChat } = useChat();
  const dispatch = useDispatch();

  const handleToggleAsideBlock = () => {
    toggleShowAsideBlock(!isShowAsideBlock);
    if (width <= 768) {
      dispatch(resetActiveChat());
    }
  };
  return (
    <div className="chat-top-bar">
      {width < 1024 && (
        <button className="chat-top-bar__aside-toggler" onClick={() => handleToggleAsideBlock()}>
          {isShowAsideBlock ? <ArrowCloseAside /> : <ArraowOpenAside />}
        </button>
      )}
      <ContactCard data={activeChat} mode="shorted" />
    </div>
  );
}
