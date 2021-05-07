import React from 'react';
import {Link} from 'react-router-dom';

const MyChannels = ({myChannelLinks}) => {

  
  return (
    <section className="mychannels">
      <h1 className="mychannels__title">Mes Channels</h1>
      {
        myChannelLinks.map(link => <Link key={link.id} to={`/channels/${link.slug}`}>{link.name}</Link>)
      }
    </section>
  )
}

export default MyChannels;
