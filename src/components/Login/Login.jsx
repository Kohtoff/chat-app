import React, { useEffect } from 'react';
import '../../scss/login.scss';
import Divider from '../UI/Divider/Divider';
import FilledBtn from '../UI/FilledBtn/FilledBtn';
import Input from '../UI/FormInput/FormInput';
import SocialNetworkBtn from '../UI/SocialNetworkBtn/SocialNetworkBtn';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useAuthState,
} from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import StringButton from '../UI/StringButton/StringButton';

export default function Login() {
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {
    if (user && !(loading || error)) navigate('/chat', { replace: true });
  });

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="login-form__topbar">
          <h2 className="login-form__title">Login</h2>
        </div>
        <Input type="text" placeholder="username" className="login-form__field" />
        <Input type="password" placeholder="password" className="login-form__field" />
        <div className="login-form__btn-container">
          <StringButton>Forgot password?</StringButton>
          <FilledBtn>Sign in</FilledBtn>
        </div>
      </form>
      <Divider>or</Divider>
      <SocialNetworkBtn onClick={() => signInWithFacebook('', {URL: 'https://reenbit-chat-2aea7.firebaseapp.com/__/auth/handler'})} variant={'facebook'} />
      <SocialNetworkBtn
        onClick={() => signInWithGoogle('', { prompt: 'select_account' })}
        variant={'gmail'}
      />
    </div>
  );
}
