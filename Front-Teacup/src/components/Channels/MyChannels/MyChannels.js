import React from 'react';
import {Link} from 'react-router-dom';

const MyChannels = (props) => {
  
  const links = [
    {slug: 'horror_movie', name:"Films d'horreur"},
    {slug: 'cook', name:"Cuisine méditéranéenne"},
  ];
  
  return (
    <section className="mychannels">
      <h1 className="mychannels__title">Mes Channels</h1>
      {
        links.map(link => <Link to={`/channels/${link.slug}`}>{link.name}</Link>)
      }
    </section>
  )
}
