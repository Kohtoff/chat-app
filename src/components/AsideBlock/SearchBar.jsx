import React from 'react';
import '../../scss/search-bar.scss'
import SearchSvg from './SearchSvg';

export default function SearchBar() {
  return (
    <div className="search-input">
        <SearchSvg className="search-input__icon" />
        <input type="text" className="search-input__textfield" placeholder='Search or start new chat' />
    </div>
  )
}
