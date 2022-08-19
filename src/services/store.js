import {configureStore} from '@reduxjs/toolkit'
import chatReducer from '../ducks/chat.duck'

export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
    devTools: true
})
