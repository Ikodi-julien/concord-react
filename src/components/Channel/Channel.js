import React, {useEffect} from 'react';
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
  
    // Ici on récupère l'id du channel dans l'url (/channels/:id)
    let {id} = useParams();
    // Ici on envoi la demande pour récupérer les infos de ce channel
    useEffect(() => {
      console.log('l\'utilisateur entre dans un channel');
      fetchChannel(id);
      
      return () => {
        console.log('l\'utilisateur quitte un channel');
        userLeaveChannel();
      };
    }, []);
  
  if (channel.isLoading) { // On affiche un loader tant que pas de réponse de l'API
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

export default Channel;
