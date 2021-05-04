import React from 'react';
import Navbar from '../Navbar/Navbar';
import MyChannels from './MyChannels/MyChannels';
import UsersInChannelList from './UsersInChannelList/UsersInChannelList';
import ChannelMessages from './ChannelMessages/ChannelMessages';
import ChannelForm from './ChannelForm/ChannelForm';

import './channels.scss';

const Channels = () => {
  
  return (
    <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <MyChannels />
        <div className="channel__container">
          <ChannelMessages />
          <ChannelForm />
        </div>
        <UsersInChannelList />
      </div>
    </section>
  )
}

export default Channels;
