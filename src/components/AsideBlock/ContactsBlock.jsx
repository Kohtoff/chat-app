import React from 'react';
import ContactList from './ContactList';
import '../../scss/contacts-block.scss';

export default function ContactsBlock() {
  return (
    <div className="contacts-block">
      <h2 className="contacts-block__title">Chats</h2>
      <ContactList />
    </div>
  );
}
