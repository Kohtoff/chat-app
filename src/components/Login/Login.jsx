import React, { useEffect, useState } from 'react';
import '../../scss/login.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

export default function Login() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [mode, setMode] = useState('login');

  useEffect(() => {
    if (user && !(loading || error)) navigate('/chat', { replace: true });
  });

  return (
    <div className="login-container">
      <div className="login-form__topbar">
        <div
          onClick={() => setMode('login')}
          className={
            'login-form__mode-option ' +
            (mode !== 'login' ? 'login-form__mode-option--not-active' : '')
          }>
          <h2 className="login-form__title">Login</h2>
        </div>
        <div
          onClick={() => setMode('signup')}
          className={
            'login-form__mode-option ' +
            (mode !== 'signup' ? 'login-form__mode-option--not-active' : '')
          }>
          <h2 className="login-form__title">Sign Up</h2>
        </div>{' '}
      </div>
      <div className="login-form__content">{mode === 'login' ? <LoginForm /> : <SignupForm />}</div>
    </div>
  );
}
