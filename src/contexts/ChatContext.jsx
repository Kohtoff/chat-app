import React, {createContext, useState} from 'react'

export const SelectChatContext = createContext();

export default function ChatContext({children}) {
    const [activeChat, setActiveChat] = useState(null);

    return (
    <SelectChatContext.Provider value={{activeChat, setActiveChat}}>
      {children}
    </SelectChatContext.Provider>
  )
}
