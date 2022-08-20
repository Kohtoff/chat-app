import { createSlice } from '@reduxjs/toolkit';
import { contacts } from '../data';

const initialState = {
  activeChat: null,
  contacts: contacts,
  searchValue: '',
  filteredContacts: contacts
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveChat: (state, { payload }) => {
      state.activeChat = state.contacts.find((contact) => contact.id === payload.id);
    },

    filterContacts: (state, { payload }) => {
      if (payload.searchValue.length >= 0) {
        state.filteredContacts = state.contacts.filter((contact) =>
          contact.username.toLowerCase().includes(payload.searchValue.toLocaleLowerCase()),
        );
      } else {
        state.filteredContacts = state.contacts;
      }
    },

    toggleMsgRead: (state, { payload }) => {
      const targetChat = state.contacts.findIndex((contact) => contact.id === payload.chatId);
      state.contacts[targetChat] = { ...state.contacts[targetChat], isRead: true };
    },

    sendMsg: (state, { payload }) => {
      //must be pushed to state.contacts (maybee i can do it like with toggle msg read)
      const targetChat = state.contacts.findIndex((contact) => contact.id === state.activeChat.id);
      state.contacts[targetChat] = { ...state.contacts[targetChat], msgHistory: [...state.contacts[targetChat].msgHistory, payload]}
      state.filteredContacts = state.contacts;
    },
  },
});

const { reducer, actions } = chatSlice;

export default reducer;

export const { setActiveChat, filterContacts, toggleMsgRead, sendMsg } = actions;

export const selectChatSlice = (rootState) => rootState.chat;
