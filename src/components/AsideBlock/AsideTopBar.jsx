import React from 'react';
import UserBar from './UserBar';
import '../../scss/aside-top-bar.scss';
import SearchSvg from './SearchSvg';
import TextField from '../UI/TextField/TextField';

export default function AsideTopBar() {
  return (
    <div className="aside-top-bar">
      <UserBar />
      <TextField placeholder={'Search or start new chat'} mode={'search'} icon={<SearchSvg className="input__icon"/>}/>
    </div>
  );
}
