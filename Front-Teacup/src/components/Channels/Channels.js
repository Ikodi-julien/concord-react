import React from 'react';
import Navbar from '../Navbar/Navbar';
import MyChannels from './MyChannels/MyChannels';
import UsersInChannelList from './UsersInChannelList/UsersInChannelList';

import './channels.scss';

const Channels = () => {
  
  return (
    <section className='channels'>
      <Navbar />
      <div class="channels__row">
        <MyChannels />
        <UsersInChannelList />
      </div>
    </section>
  )
}

export default Channels;
