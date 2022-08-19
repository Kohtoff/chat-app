import React from 'react';
import { useChat } from '../../hooks/useChat';
import ContactCard from '../ContactCard/ContactCard';

export default function ContactList() {
  const { contacts } = useChat();


  // const sortedContactsByLastMessage = contacts.sort((contactA, contactB) => {
  //   const contactATime =
  //     contactA.msgHistory.length > 0
  //       ? new Date(contactA.msgHistory[contactA.msgHistory.length - 1].date).getTime()
  //       : null;

  //   const contactBTime =
  //     contactB.msgHistory.length > 0
  //       ? new Date(contactB.msgHistory[contactB.msgHistory.length - 1].date).getTime()
  //       : null;

  //   return contactBTime - contactATime;
  // });

  return (
    <ul className={contacts.length <= 0 ? 'empty' : ''}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactCard
            data={contact}
            key={contact.id}
          />
        ))
      ) : (
        <span className="empty-message">Contacts not found</span>
      )}
    </ul>
  );
}
