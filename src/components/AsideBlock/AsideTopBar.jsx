import React from 'react';

import '../../scss/aside-top-bar.scss';
import SearchBar from './SearchBar';
import UserBar from './UserBar';

export default function AsideTopBar() {
  return (
    <div className="aside-top-bar">
      <UserBar />
      <SearchBar />
    </div>
  );
}
