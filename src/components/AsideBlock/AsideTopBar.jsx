import React from 'react';
import UserBar from './UserBar';
import '../../scss/aside-top-bar.scss';
import SearchSvg from './SearchSvg';
import TextField from '../UI/TextField/TextField';
import LogoutSVG from './LogoutSVG';

export default function AsideTopBar() {
  return (
    <div className="aside-top-bar">
      <UserBar icon={<LogoutSVG />} />
      <TextField
        placeholder={'Search or start new chat'}
        mode={'search'}
        icon={<SearchSvg className="input__icon" />}
      />
    </div>
  );
}
