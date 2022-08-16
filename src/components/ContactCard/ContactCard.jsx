import React from 'react';
import UserAvatarByDefault from '../AsideBlock/UserAvatarByDefault';

export default function ContactCard({ data: user }) {
  return (
    <div className="user-bar">
      <div className="user-bar__avatar">
        {user.avatar ? <img src={user.avatar()} alt="avatar" /> : <UserAvatarByDefault />}
      </div>
      <div className="user-bar__info">
        <span className="user-bar__username">{user.username}</span>
        <div className="user-bar__msg-info">
          <span className="user-bar__msg">{user.msgHistory[0].text}</span>
        </div>
      </div>
    </div>
  );
}
