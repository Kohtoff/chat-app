import React, { useContext } from 'react';
import { contacts } from '../../data';
import ContactCard from '../ContactCard/ContactCard';
import { SelectChatContext } from '../Chat/Chat';

export default function MessageList() {
  const SelectChat = useContext(SelectChatContext)
  console.log(SelectChat);
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactCard handleOnClick={SelectChat} data={contact} key={contact.id} />
      ))}
    </ul>
  );
}
