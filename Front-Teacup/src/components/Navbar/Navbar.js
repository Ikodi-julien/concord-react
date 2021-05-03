import React from 'react';
import {Search, Select} from 'semantic-ui-react';

import './navbar.scss';

const Navbar = (props) => {
  
  return (
    <section className='nav' >
      <div class='nav__logo'>
        ici le logo
      </div>
      
      <button className="nav__login">
        S'incrire / Se connecter
      </button>
      
      {/* La searchbar qui contient un champ de recherche sur channels et tags + un select pour les tags */}
      <div className='nav__search__container'>
        <Search />
        <Select />
      </div>
      
      {/* - Déjà la loupe qui fait apparaitre la searchbar au click */}
      <button className="nav__search__button">
        <i className="fas fa-search"></i>
      </button>
      
      <div className='nav__hamburger' >
      <i class="fas fa-bars"></i>
      </div>
    </section>
  )
}

export default Navbar;
