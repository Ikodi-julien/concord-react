import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import MyChannelsContainer from 'src/containers/MyChannelsContainer';
import UsersInChannelListContainer from 'src/containers/UsersInChannelListContainer';
import ChannelMessages from './ChannelMessages/ChannelMessages';
import ChannelForm from './ChannelForm/ChannelForm';
import Navbar from 'src/containers/NavbarContainer';
import BigLoader from 'src/components/BigLoader/BigLoader';
import Error from 'src/components/Error/Error';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import Footer from 'src/components/Footer/Footer';

import './channels.scss';

const Channel = ({
  channel, 
  user,
  setInputValue,
  fetchChannel,
  channelFormSubmit,
  toggleUsersInChannel,
  userLeaveChannel,
  }) => {
  
    // get param 'id' in url (/channels/:id)
    let {id} = useParams();
    // When component Channel is mount, fetch channel's data from API
    useEffect(() => {
      fetchChannel(id);
      return () => {
        // this is done just before the component unmounts
        userLeaveChannel();
      };
    }, []);
  
  if (channel.isLoading) { // loader while waiting for API answer
    return (
      <section className='channels'>
      <StoreUrl />
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
        <MyChannelsContainer />
        <div className="channel__container">
          <div className='channel__container__options'>
          </div>
          <ChannelMessages 
            title={channel.title} 
            messages={channel.messages}
            nickname={user.nickname}
            toggleUsersInChannel={toggleUsersInChannel}
            />
          <ChannelForm setInputValue={setInputValue} inputValue={channel.inputForm} channelFormSubmit={channelFormSubmit}/>
          
        </div>
        <UsersInChannelListContainer />
      </div>
      <Footer />
    </section>
  )
}

Channel.propType = {
  channel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    messages: PropTypes.array,
    users: PropTypes.array,
    inputForm: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    showMychannels: PropTypes.bool.isRequired,
    showUsersInChannel: PropTypes.bool.isRequired,
    infoMessage: PropTypes.string,
    quillContent: PropTypes.string,
    reinitQuill: PropTypes.bool,
  }), 
  user: PropTypes.array,
  setInputValue: PropTypes.func.isRequired,
  fetchChannel: PropTypes.func.isRequired,
  channelFormSubmit: PropTypes.func.isRequired,
  toggleUsersInChannel: PropTypes.bool.isRequired,
  userLeaveChannel: PropTypes.func,
}

export default Channel;
