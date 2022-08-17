import React from 'react'
import ContactCard from '../ContactCard/ContactCard'

export default function ChatTopBar({chat}) {
  return (
    <div className='chat-top-bar'>
      <ContactCard data={chat} mode='shorted' />
    </div>
  )
}
