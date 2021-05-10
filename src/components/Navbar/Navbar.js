import React, {useEffect} from 'react';
import searchAndReturn from 'src/selectors/search';
import {Search, Select} from 'semantic-ui-react';
import Navmenu from './Navmenu/Navmenu';
import LoginModal from './LoginModal/LoginModal';
import './navbar.scss';

const Navbar = ({
  tags,
  channels,
  isUserLoggued,
  isShowLoginModal,
  isShowSignupModal,
  isShowSearch,
  isSearchLoading,
  isShowMenu,
  links,
  searchedValue,
  searchResult,
  toggleSearch,
  toggleMenu,
  setLoginOpen,
  setSignupOpen,
  fetchData,
  searchChange,
  setSearchResult,
  submitLoginForm,
  submitSignupForm,
  loginButtonIsLoading,
  inputLoginEmailValue,
  inputLoginPasswordValue,
  signupButtonIsLoading,
  inputSignupPseudoValue,
  inputSignupEmailValue,
  inputFirstSignupPasswordValue,
  inputSecondSignupPasswordValue,
  setInputValue,
  loginErrorIsVisible,
  signupErrorIsVisible,
  errorMessage,
  disconnectUser,
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
      
      {!isUserLoggued && (
        <LoginModal 
          loginOpen={isShowLoginModal} 
          signupOpen={isShowSignupModal}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          submitLoginForm={submitLoginForm}
          submitSignupForm={submitSignupForm}
          loginButtonIsLoading={loginButtonIsLoading}
          inputLoginEmailValue={inputLoginEmailValue}
          inputLoginPasswordValue={inputLoginPasswordValue}
          signupButtonIsLoading={signupButtonIsLoading}
          inputSignupPseudoValue={inputSignupPseudoValue}
          inputSignupEmailValue={inputSignupEmailValue}
          inputFirstSignupPasswordValue={inputFirstSignupPasswordValue}
          inputSecondSignupPasswordValue={inputSecondSignupPasswordValue}
          setInputValue={setInputValue}
          loginErrorIsVisible={loginErrorIsVisible}
          signupErrorIsVisible={signupErrorIsVisible}
          errorMessage={errorMessage}
          disconnectUser={disconnectUser}
          />)}
      
      {isUserLoggued && (
        <div className="nav__button__row">
            {/* La searchbar qui contient un champ de recherche sur channels et tags + un select pour les tags */}
            {isShowSearch && (
          <div className='nav__search__container'>
            <div class="nav__search__container__search">
              <Search
                category
                loading={isSearchLoading}
                onResultSelect={handleResultSelect}
                onSearchChange={handleSearchChange}
                results={searchResult}
                value={searchedValue}
              />
            </div>
            
            <div class="nav__search__container__select"><Select placeholder="Catégories" options={tagsOptions} /></div>
          </div>
        )}
        
        {/* La loupe qui fait apparaitre la searchbar au click */}
          <button className="nav__search__button" onClick={toggleSearch}>
            <i className="fas fa-search"></i>
          </button>
        {/* Le hamburger qui fait apparaitre le menu au click
          <button className='nav__hamburger' onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button> */}
      
        <Navmenu 
          links={links}
          disconnectUser={disconnectUser} 
        />
        </div>
        )}

    </section>
  )
}

export default Navbar;
