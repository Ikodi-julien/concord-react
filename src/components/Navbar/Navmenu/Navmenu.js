import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {Divider, Button, Dropdown, Icon, Menu, Segment} from 'semantic-ui-react';
import './navmenu.scss';

const Navmenu = ({links, disconnectUser, toggleMyChannels}) => {
  
  const {id} = useParams();
  
  return (
    <section className="nav__menu">
    
    <Menu attached='top'>
      <Dropdown 
        item 
        icon='bars' 
        simple
        direction={window.innerWidth < 700 ? 'right' : 'left'}
        >
        <Dropdown.Menu>
        
        {
        links.map(link => (
          <Dropdown.Item key={link.name}>
            <NavLink 
              to={link.slug}  
              className="nav__menu__link" >{link.name}
            </NavLink>
          </Dropdown.Item>
          ))
        }
        
        {window.innerWidth < 700 && id && <Button 
        primary 
        content='Mes salons'
        onClick={toggleMyChannels}
        />}
        
        <Button 
        secondary 
        content='Se déconnecter'
        onClick={disconnectUser}
        />

        </Dropdown.Menu>
      </Dropdown>
    </Menu>

    </section>
  )
}

export default Navmenu;
