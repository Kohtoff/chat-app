import React, { createContext, useState, useEffect, useMemo } from 'react';
import AsideTopBar from './AsideTopBar';
import '../../scss/aside-block.scss';
import ContactBlock from './ContactsBlock';
import { contacts } from '../../data';

export const ContactsListContext = createContext();
export const SearchContactContext = createContext();

export default function AsideBlock() {
  const contactsListByDefault = useMemo(() => contacts.filter(contact => contact.msgHistory.length > 0), []);
  const [searchValue, setSearchValue] = useState('');
  const [contactsList, setContactsList] = useState(contactsListByDefault);

  useEffect(() => {
    if (searchValue.length > 0) {
      setContactsList(
        contacts.filter((contact) =>
          contact.username.toLowerCase().includes(searchValue.toLocaleLowerCase()),
        ),
      );
    } else {
      setContactsList(contactsListByDefault);
    }
  }, [searchValue, contactsListByDefault]);

  return (
    <aside>
      <SearchContactContext.Provider value={setSearchValue}>
        <AsideTopBar />
      </SearchContactContext.Provider>
      <ContactsListContext.Provider value={contactsList}>
        <ContactBlock />
      </ContactsListContext.Provider>
    </aside>
  );
}
