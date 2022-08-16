import React from 'react'
import AsideTopBar from './AsideTopBar';
import '../../scss/aside-block.scss';
import MessageBlock from './MessageBlock';

export default function AsideBlock() {
  return (
    <aside>
      <AsideTopBar />
      <MessageBlock />
    </aside>
  )
}
