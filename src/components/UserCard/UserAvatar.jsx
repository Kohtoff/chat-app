import React from 'react';
import UserAvatarByDefault from '../AsideBlock/UserAvatarByDefault';

export default function UserAvatar({photo}) {
  return (
    <div className="user-bar__avatar">
          {photo ? <img src={photo} alt="avatar" /> : <UserAvatarByDefault />}
        </div>
  )
}
