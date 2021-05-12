import React from 'react';
import {Link} from 'react-router-dom';

const MyChannels = ({myChannelLinks, showMychannels, fetchChannel}) => {

  // On met à jour les infos du channel au click sur le lien.
  const handleClick = (channelId) => {
    fetchChannel(channelId);
  }
  
  return (
    <section className={showMychannels ? "mychannels --show" : "mychannels"}>
      <h1 className="mychannels__title">Mes Channels</h1>
      {
        myChannelLinks.map(link => <Link 
          key={link.id} 
          to={`/channels/${link.id}`}
          onClick={() => {handleClick(link.id)}}
          >{link.name}</Link>)
      }
    </section>
  )
}

export default MyChannels;
