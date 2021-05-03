import React from 'react';
import {Link} from 'react-router-dom';

const MyChannels = (props) => {
  
  const links = [
    {id: 1, slug: 'horror_movie', name:"Films d'horreur"},
    {id: 2, slug: 'cook', name:"Cuisine méditéranéenne"},
  ];
  
  return (
    <section className="mychannels">
      <h1 className="mychannels__title">Mes Channels</h1>
      {
        links.map(link => <Link key={link.id} to={`/channels/${link.slug}`}>{link.name}</Link>)
      }
    </section>
  )
}

export default MyChannels;
