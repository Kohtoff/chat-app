import React, { createContext, useState, useEffect } from 'react';
import AsideTopBar from './AsideTopBar';
import '../../scss/aside-block.scss';
import ContactBlock from './ContactsBlock';
import { useChat } from '../../hooks/useChat';
import {useDispatch} from 'react-redux'
import {filterContacts} from '../../ducks/chat.duck'

export const ContactsListContext = createContext();
export const SearchContactContext = createContext();

export default function AsideBlock() {
  const {contacts} = useChat()
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(filterContacts({searchValue}))
  }, [searchValue, dispatch]);

  return (
    <aside>
      <SearchContactContext.Provider value={setSearchValue}>
        <AsideTopBar />
      </SearchContactContext.Provider>
      <ContactsListContext.Provider value={contacts}>
        <ContactBlock />
      </ContactsListContext.Provider>
    </aside>
  );
}
