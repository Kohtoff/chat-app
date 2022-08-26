// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCQLSSQedPk5ovd9X90KbhO9-qTU1YldW8',
  authDomain: 'reenbit-chat-2aea7.firebaseapp.com',
  projectId: 'reenbit-chat-2aea7',
  storageBucket: 'reenbit-chat-2aea7.appspot.com',
  messagingSenderId: '263171736784',
  appId: '1:263171736784:web:656eae7d9ed0baf17d8ad5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
