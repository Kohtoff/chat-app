import React, {useContext} from 'react';
import { months } from '../../data';
import Divider from '../UI/Divider/Divider';
import Badge from '../UI/Badge/Badge';
import PropTypes from 'prop-types';
import UserAvatar from '../UserCard/UserAvatar';
import ConditionalWrapper from '../../utils/ConditionalWrapper';
import { SelectChatContext } from '../Chat/Chat';


export default function ContactCard({ data: user, handleOnClick, mode }) {
  const selectChat = useContext(SelectChatContext);

  const lastMessage = user.msgHistory[user.msgHistory.length - 1] || null;

  const msgDate = (function () {
    if (!lastMessage) return;
    return `${
      months[lastMessage.date.getMonth() - 1]
    } ${lastMessage.date.getDate()}, ${lastMessage.date.getFullYear()}`;
  })();

  const handleOnSelect = (id) => {
    selectChat(id)
    user.msgHistory.map(msg => msg.isRead = true)
  }
  const isEmptyHistory = user.msgHistory.length > 0;

  return (
    <ConditionalWrapper
      condition={mode !== 'shorted'}
      wrapper={(children) => (
        <li className="contact-item" onClick={() => handleOnSelect(user.id)}>
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
                    {lastMessage.text}
                    {(!lastMessage.isRead && !lastMessage.isAuthor) && <Badge mode={'new-msg'} />}
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
