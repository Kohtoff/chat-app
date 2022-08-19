import { createSlice } from '@reduxjs/toolkit';
import { contacts } from '../data';

const initialState = {
  activeChat: null,
  contacts: contacts,
  searchValue: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveChat: (state, { payload }) => {
      state.activeChat = state.contacts.find((contact) => contact.id === payload.id);
    },

    filterContacts: (state, { payload }) => {
      if (payload.searchValue.length > 0) {
        state.contacts = initialState.contacts.filter((contact) =>
          contact.username.toLowerCase().includes(payload.searchValue.toLocaleLowerCase()),
        );
      } else {
        state.contacts = initialState.contacts;
      }
    },

    toggleMsgRead: (state, { payload }) => {
      const targetChat = state.contacts.findIndex((contact) => contact.id === payload.chatId);
      state.contacts[targetChat] = { ...state.contacts[targetChat], isRead: true };
    },

    sendMsg: (state, { payload }) => {
      state.activeChat.msgHistory.push({ ...payload });
    },
  },
});

const { reducer, actions } = chatSlice;

export default reducer;

export const { setActiveChat, filterContacts, toggleMsgRead, sendMsg } = actions;

export const selectChatSlice = (rootState) => rootState.chat;
