import React from 'react';
import {NavLink} from 'react-router-dom';
import {Divider, Button} from 'semantic-ui-react';
import './navmenu.scss';

const Navmenu = ({links, disconnectUser}) => {
  
  
  return (
    <section className="nav__menu">
      {
        links.map(link => <NavLink key={link.name} to={link.slug}  className="nav__menu__link" >{link.name}</NavLink>)
      }
      <Divider section />
      <Button 
        secondary 
        content='Se déconnecter'
        onClick={disconnectUser}
        />
    </section>
  )
}

export default Navmenu;
