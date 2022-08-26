import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import StringButton from '../UI/StringButton/StringButton';
import FilledBtn from '../UI/FilledBtn/FilledBtn';
import Divider from '../UI/Divider/Divider';
import SocialNetworkBtn from '../UI/SocialNetworkBtn/SocialNetworkBtn';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';

export default function LoginForm() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [authData, setAuthData] = useState({ email: '', pass: '' });

  const handleOnSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(authData.email, authData.pass);
  };

  return (
    <>
      <form className="login-form">
        <Input
          value={authData.email}
          onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
          type="text"
          placeholder="email"
          className="login-form__field"
        />
        <Input
          value={authData.pass}
          onChange={(e) => setAuthData({ ...authData, pass: e.target.value })}
          type="password"
          placeholder="password"
          className="login-form__field"
        />
        <div className="login-form__btn-container">
          <StringButton>Forgot password?</StringButton>
          <FilledBtn onClick={(e) => handleOnSignIn(e)}>Sign in</FilledBtn>
        </div>
      </form>
      <Divider>or</Divider>
      <SocialNetworkBtn
        onClick={() =>
          signInWithFacebook('', {
            URL: 'https://reenbit-chat-2aea7.firebaseapp.com/__/auth/handler',
          })
        }
        variant={'facebook'}
      />
      <SocialNetworkBtn
        onClick={() => signInWithGoogle('', { prompt: 'select_account' })}
        variant={'gmail'}
      />
    </>
  );
}
