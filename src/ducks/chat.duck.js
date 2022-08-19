// import { createSlice } from '@reduxjs/toolkit';
// import { contacts } from '../data';

// const initialState = {
//   activeChat: null,
//   contacts: contacts,
//   msgHistory: [],
// };

// const chat = createSlice({
//   name: 'chat',
//   initialState,
//   reducers: {
//     selectChat: (state, payload) => {
//       //clear msg history
//       state.msgHistory = initialState.msgHistory;
//       //find the target chat
//       const targetChat = state.contacts.find((contact) => contact.id === payload.id);

//       state.activeChat = targetChat;
//       state.msgHistory = targetChat.msgHistory;
//     },
//     sendMsg: (state, payload) => {
//       s
//     }
//   },
// });
