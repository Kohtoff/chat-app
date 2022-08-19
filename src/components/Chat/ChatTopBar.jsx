import React from 'react'
import { useChat } from '../../hooks/useChat'
import ContactCard from '../ContactCard/ContactCard'

export default function ChatTopBar() {
  const {activeChat} = useChat()
  return (
    <div className='chat-top-bar'>
      <ContactCard data={activeChat} mode='shorted' />
    </div>
  )
}
