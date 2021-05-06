import React from 'react';
import {Search, Select} from 'semantic-ui-react';
import {Link, NavLink} from 'react-router-dom';

import './navbar.scss';

const Navbar = ({
  tags,
  channels,
  isShowLoginButton,
  isShowSearch,
  toggleSearch,
  isShowMenu,
}) => {
  
  const tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
  
  return (
    <section className='nav' >
      <div className='nav__logo'>
        {/* ici le logo */}
      </div>
      
      {isShowLoginButton && (<Link to="/login" className="nav__loginButton">
        S'incrire / Se connecter
      </Link>)}
      
      {!isShowLoginButton && (<div className="nav__button__row">
      {/* La searchbar qui contient un champ de recherche sur channels et tags + un select pour les tags */}
      {isShowSearch && (
        <div className='nav__search__container'>
              <Search />
              <Select placeholder="Catégories" options={tagsOptions} />
            </div>
      )}
      
      {/* - Déjà la loupe qui fait apparaitre la searchbar au click */}
        <button className="nav__search__button" onClick={toggleSearch}>
          <i className="fas fa-search"></i>
        </button>
        
        <button className='nav__hamburger' >
        <i className="fas fa-bars"></i>
        </button>
      </div>)}
    </section>
  )
}

export default Navbar;
