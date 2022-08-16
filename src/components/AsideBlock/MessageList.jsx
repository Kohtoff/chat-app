import React from 'react';
import { contacts } from '../../data';
import ContactCard from '../ContactCard/ContactCard';

export default function MessageList() {
  return <ul>
    {contacts.map((contact) => (<ContactCard data={contact} key={contact.id}/>))}
  </ul>;
}
