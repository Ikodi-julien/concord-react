import React from 'react';
import Navbar from '../Navbar/Navbar';
import MyChannels from './MyChannels/MyChannels';
import UsersInChannelList from './UsersInChannelList/UsersInChannelList';
import ChannelMessages from './ChannelMessages/ChannelMessages';
import ChannelForm from './ChannelForm/ChannelForm';

import './channels.scss';

const Channel = ({channel, setInputValue}) => {
  
  return (
    <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <MyChannels myChannelLinks={channel.myChannelLinks}/>
        <div className="channel__container">
          <ChannelMessages title={channel.title} messages={channel.messages}/>
          <ChannelForm setInputValue={setInputValue} inputValue={channel.inputForm}/>
        </div>
        <UsersInChannelList users={channel.users} />
      </div>
    </section>
  )
}

export default Channel;
