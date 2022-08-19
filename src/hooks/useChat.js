import {useSelector} from 'react-redux'
import { selectChatSlice } from '../ducks/chat.duck'

export const useChat = () => useSelector(selectChatSlice)
