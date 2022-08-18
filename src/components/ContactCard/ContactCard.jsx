import React from 'react';
import { months } from '../../data';
import Divider from '../UI/Divider/Divider';
import Badge from '../UI/Badge/Badge';
import PropTypes from 'prop-types';
import UserAvatar from '../UserCard/UserAvatar';
import ConditionalWrapper from '../../utils/ConditionalWrapper';

export default function ContactCard({ data: user, handleOnClick, mode }) {
  const lastMessage = user.msgHistory[user.msgHistory.length - 1] || null;

  const msgDate = (function () {
    if (!lastMessage) return;
    return `${
      months[lastMessage.date.getMonth() - 1]
    } ${lastMessage.date.getDate()}, ${lastMessage.date.getFullYear()}`;
  })();
  
  const isEmptyHistory = user.msgHistory.length > 0;

  return (
    <ConditionalWrapper
      condition={mode !== 'shorted'}
      wrapper={(children) => (
        <li className="contact-item" onClick={() => handleOnClick(user.id)}>
          {children}
          <Divider />
        </li>
      )}>
      <div className="user-bar">
        <UserAvatar photo={user.avatar()} />
        <div className="user-bar__info">
          {mode !== 'shorted' ? (
            <>
              <div className="user-bar__top">
                <span className="user-bar__username">{user.username}</span>
                {isEmptyHistory && <span className="user-bar__date">{msgDate}</span>}
              </div>
              <div className="user-bar__msg">
                {isEmptyHistory ? (
                  <span>
                    {user.msgHistory[0].text}
                    {!lastMessage.isRead && <Badge mode={'new-msg'} />}
                  </span>
                ) : (
                  <span className="user-bar__empty-history">Empty history :(</span>
                )}
              </div>
            </>
          ) : (
            <span className="user-bar__username">{user.username}</span>
          )}
        </div>
      </div>
    </ConditionalWrapper>
  );
}

ContactCard.propTypes = {
  data: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(['default', 'shorted']),
};

ContactCard.defaultProps = {
  mode: 'default',
};
