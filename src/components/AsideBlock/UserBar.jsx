import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';
import UserAvatarByDefault from './UserAvatarByDefault';
import '../../scss/user-bar.scss'

export default function UserBar() {
  const [{ reloadUserInfo: user }] = useAuthState(auth);

  return (
    <div className="user-bar">
      <div className="user-bar__avatar">
        {user.photoUrl ? <img src={user.photoUrl} alt="avatar" /> : <UserAvatarByDefault />}
      </div>
      <span className="user-bar__username">{user.displayName}</span>
    </div>
  );
}
