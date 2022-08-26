import React from 'react';
import Input from '../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';
import Divider from '../UI/Divider/Divider';
import FilledBtn from '../UI/FilledBtn/FilledBtn';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const onSubmit = ({ email, password }) => {
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register('username')}
          type="text"
          placeholder="username"
          className="login-form__field"
        />
        <Input
          type="text"
          register={register('email', {
            required: 'Sorry, but we need your mail',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Email is not valid. Use this template: name@mail.com',
            },
          })}
          placeholder="email"
          className="login-form__field"
        />
        <span style={{ color: 'red' }}>{errors.email?.message}</span>

        <Input
          type="password"
          register={register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Oops! Password must contains at least 6 symbols' },
          })}
          placeholder="password"
          className="login-form__field"
        />
        <span style={{ color: 'red' }}>{errors.password?.message}</span>

        <Input
          type="password"
          register={register('repeatPassword', {
            required: 'Repeat your password. It will help you to avoid some mistype',
            validate: (value) => value === watch('password') || 'Passwords do not match',
          })}
          placeholder="repeat password"
          className="login-form__field"
        />
        <span style={{ color: 'red' }}>{errors.repeatPassword?.message}</span>

        <Divider />
        <div className="login-form__btn-container">
          <FilledBtn type="submit" size={'full-width'}>
            Sign up
          </FilledBtn>
        </div>
      </form>
    </>
  );
}
