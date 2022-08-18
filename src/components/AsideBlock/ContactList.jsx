import React, { useContext, useMemo } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import { SelectChatContext } from '../Chat/Chat';
import { ContactsListContext } from './AsideBlock';

export default function ContactList() {
  const SelectChat = useContext(SelectChatContext);
  const contacts = useContext(ContactsListContext)

  const sortedContactsByLastMessage = useMemo(() =>
    contacts.sort((contactA, contactB) => {
      const contactATime =
        contactA.msgHistory.length > 0
          ? contactA.msgHistory[contactA.msgHistory.length - 1].date.getTime()
          : 0;
      const contactBTime =
        contactB.msgHistory.length > 0
          ? contactB.msgHistory[contactB.msgHistory.length - 1].date.getTime()
          : 0;
      return contactBTime - contactATime;
    }), [contacts]
  );

  return (
    <ul className={contacts.length <= 0 ? 'empty' : '' }>
      {contacts.length > 0 ?

      sortedContactsByLastMessage.map((contact) => (
        <ContactCard handleOnClick={SelectChat} data={contact} key={contact.id} />
      )) : <span className='empty-message'>Contacts not found</span>}
    </ul>
  );
}
