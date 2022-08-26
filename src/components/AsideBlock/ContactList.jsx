import React from 'react';
import { useChat } from '../../hooks/useChat';
import ContactCard from '../ContactCard/ContactCard';

export default function ContactList() {
  const { contacts, filteredContacts } = useChat();

  //spread contacts array to prevent  Cannot assign to read only property '0' of object '[object Array]'
  const sortedContactsByLastMessage = [...filteredContacts].sort((contactA, contactB) => {
    const contactATime =
      contactA.msgHistory.length > 0
        ? new Date(contactA.msgHistory[contactA.msgHistory.length - 1].date).getTime()
        : 0;

    const contactBTime =
      contactB.msgHistory.length > 0
        ? new Date(contactB.msgHistory[contactB.msgHistory.length - 1].date).getTime()
        : 0;

    return contactBTime - contactATime;
  });

  return (
    <ul className={contacts.length <= 0 ? 'empty' : ''}>
      {contacts.length > 0 ? (
        sortedContactsByLastMessage.map((contact) => (
          <ContactCard data={contact} key={contact.id} />
        ))
      ) : (
        <span className="empty-message">Contacts not found</span>
      )}
    </ul>
  );
}
