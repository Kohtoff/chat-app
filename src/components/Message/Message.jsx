import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import '../../scss/message.scss';

export default function Message(props) {
  const { author, message } = props;
  const timestamp = new Date(message.date);
  const date =
    timestamp.getFullYear() + '/' + (timestamp.getMonth() + 1) + '/' + timestamp.getDate();

  const time = timestamp.getHours() + ':' + timestamp.getMinutes();

  return (
    <div className={`msg msg--${message.isAuthor ? 'sended' : 'recieved'}`}>
      {!message.isAuthor && <UserAvatar photo={author.avatar} />}
      <div className={`msg__content`}>
        <div className={`msg__bubble msg__bubble--${message.isAuthor ? 'sended' : 'recieved'}`}>
          {message.text}
        </div>
        <span className="msg__date">{date + ', ' + time}</span>
      </div>
    </div>
  );
}
