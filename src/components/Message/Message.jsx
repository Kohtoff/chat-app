import React from 'react';
import UserAvatar from '../UserCard/UserAvatar';
import '../../scss/message.scss';

export default function Message({ data }) {
  const { author, message } = data;
  const date =
    message.date.getFullYear() + '/' + (message.date.getMonth() + 1) + '/' + message.date.getDate();
  const time = message.date.getHours() + ':' + message.date.getMinutes();
  return (
      <div className={`msg msg--${message.isAuthor ? 'sended' : 'recieved'}`}>
        <UserAvatar photo={message.isAuthor ? author[0].photoURL : author.avatar()} />
        <div className={`msg__content`}>
          <div className={`msg__bubble msg__bubble--${message.isAuthor ? 'sended' : 'recieved'}`}>{message.text}</div>
          <span className="msg__date">{date + ', ' + time}</span>
        </div>
      </div>
  );
}
