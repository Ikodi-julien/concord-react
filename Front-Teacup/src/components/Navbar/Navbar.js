import React, {useEffect} from 'react';
import searchAndReturn from 'src/selectors/search';
import {Search, Select} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Navmenu from './Navmenu/Navmenu';

import './navbar.scss';

const Navbar = ({
  tags,
  channels,
  isShowLoginButton,
  isShowSearch,
  isSearchLoading,
  isShowMenu,
  links,
  searchedValue,
  searchResult,
  toggleSearch,
  toggleMenu,
  fetchData,
  searchChange,
  setSearchResult,
}) => {
  
  useEffect(() => {fetchData()}, []);
  
  const tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
  
  /* Ici la gestion de la recherche */
  
  const handleResultSelect = () => {
    // Ici je voudrais rediriger soit vers le channel choisi, soit vers la page de résultat de recherche affichant les channels du tag sélectionné
  };
  
  const handleSearchChange = (evt) => { 
    // On informe du changement dans l'input search
    searchChange(evt.target.value);
    // On tri la liste des tags correspondant
    const newNavTagList = searchAndReturn(evt.target.value, tags);
    // On fabrique la liste de tags utilisée par le composant search
    const searchTagResult = newNavTagList.map((tag) => ({ title: tag.name}));
    // On fabrique l'objet représentant les résultats utilisés par le composant search.
    const results = {
      channels: {
        name: "Salons",
        results: [
            {
              "title": "Baxter dury",
            },
            {
              "title": "Justice",
            }
        ]
      },
      tags: {
        name: "Catégories",
        results: searchTagResult,
      }
    }
    
    setSearchResult(results);
  };

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
              
          <Search
            category
            loading={isSearchLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={handleSearchChange}
            results={searchResult}
            value={searchedValue}
          />
          
          <Select placeholder="Catégories" options={tagsOptions} />
        </div>
      )}
      
      {/* La loupe qui fait apparaitre la searchbar au click */}
        <button className="nav__search__button" onClick={toggleSearch}>
          <i className="fas fa-search"></i>
        </button>
      {/* Le hamburger qui fait apparaitre le menu au click */}
      <button className='nav__hamburger' onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
        </button>
      </div>)}
      
      {isShowMenu && <Navmenu links={links} />}
      
    </section>
  )
}

export default Navbar;
