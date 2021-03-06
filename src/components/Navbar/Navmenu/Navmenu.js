import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {Button, Dropdown, Menu} from 'semantic-ui-react';
import './navmenu.scss';

const Navmenu = (
  {
    links, 
    disconnectUser, 
    toggleMyChannels, 
    isNavMenuOpen, 
    setNavMenuOpen, 
    windowSize,
    resetSearch,
  }
  ) => {

    // On récupère ici l'éventuel param id dans l'url,
    // S'il existe on est sur une page de channel et on affiche le bouton 'Mes channels' dans le menu,
  const {id} = useParams();

  // On gère le comportement du menu au click sur le bouton mes channels
  const handleMyChannelsClick = () => {
    toggleMyChannels();
    setNavMenuOpen(false);
  };
  
  return (
    <section className="nav__menu">
    
    <Menu attached='top'>
      <Dropdown 
        item 
        icon='bars' 
        simple
        direction={windowSize < 700 ? 'right' : 'left'}
        open={isNavMenuOpen}
        // onClick={toggleNavMenu}
        >
        <Dropdown.Menu>
        
        {
        links.map(link => (
          <Dropdown.Item key={link.name}>
            <NavLink 
              to={link.slug}  
              className="nav__menu__link" 
              onClick={() => resetSearch()}
              >{link.name}
            </NavLink>
          </Dropdown.Item>
          ))
        }
        
        {window.innerWidth < 700 && id && <Button 
        primary 
        content='Mes salons'
        onClick={ handleMyChannelsClick}
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
