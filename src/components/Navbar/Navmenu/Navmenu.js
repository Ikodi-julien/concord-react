import React from 'react';
import {NavLink} from 'react-router-dom';

const Navmenu = ({links}) => {
  
  
  return (
    <section className="nav__menu">
      {
        links.map(link => <NavLink key={link.name} to={link.slug}  className="nav__menu__link" >{link.name}</NavLink>)
      }
    </section>
  )
}

export default Navmenu;
