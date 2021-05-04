import React, {useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import MyChannels from './MyChannels/MyChannels';
import UsersInChannelList from './UsersInChannelList/UsersInChannelList';
import ChannelMessages from './ChannelMessages/ChannelMessages';
import ChannelForm from './ChannelForm/ChannelForm';
import BigLoader from 'src/components/BigLoader/BigLoader';
import Error from 'src/components/Error/Error';


import './channels.scss';

const Channel = ({
  channel, 
  setInputValue,
  fetchChannel
  }) => {
  
  useEffect(() => {
    fetchChannel(channel.id)
  }, [])
  
  if (channel.isLoading) {
    return (
      <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <BigLoader />
      </div>
    </section>
    )
  };
  
  if (channel.error) {
    return (
      <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <Error />
      </div>
    </section>
    )
  };
  
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
