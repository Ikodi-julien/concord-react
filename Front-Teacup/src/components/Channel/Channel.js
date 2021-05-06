import React, {useEffect} from 'react';
import MyChannels from './MyChannels/MyChannels';
import UsersInChannelList from './UsersInChannelList/UsersInChannelList';
import ChannelMessages from './ChannelMessages/ChannelMessages';
import ChannelForm from './ChannelForm/ChannelForm';
import Navbar from 'src/containers/NavbarContainer';
import Footer from 'src/components/Footer/Footer';
import BigLoader from 'src/components/BigLoader/BigLoader';
import Error from 'src/components/Error/Error';


import './channels.scss';

const Channel = ({
  channel, 
  user,
  setInputValue,
  fetchChannel,
  channelFormSubmit
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
      <Footer />
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
      <Footer />
    </section>
    )
  };
  
  return (
    <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <MyChannels myChannelLinks={user.myChannelLinks}/>
        <div className="channel__container">
          <ChannelMessages title={channel.title} messages={channel.messages}/>
          <ChannelForm setInputValue={setInputValue} inputValue={channel.inputForm} channelFormSubmit={channelFormSubmit}/>
        </div>
        <UsersInChannelList users={channel.users} />
      </div>
      <Footer />
    </section>
  )
}

export default Channel;
