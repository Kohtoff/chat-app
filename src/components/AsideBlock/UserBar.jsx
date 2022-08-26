import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';
import UserAvatarByDefault from './UserAvatarByDefault';
import '../../scss/user-bar.scss';
import { signOut } from 'firebase/auth';

export default function UserBar({ icon }) {
  const [{ reloadUserInfo: user }] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="user-bar">
      <div className="user-bar__avatar">
        {user.photoUrl ? <img src={user.photoUrl} alt="avatar" /> : <UserAvatarByDefault />}
      </div>
      <span className="user-bar__username">{user.displayName || user.email}</span>
      {icon && (
        <button className="user-bar__logout-btn" onClick={logout}>
          {icon}
        </button>
      )}
    </div>
  );
}
