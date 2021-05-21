import React, {useEffect} from 'react';
import {searchNameAndReturn} from 'src/selectors/search';
import {Search, Select} from 'semantic-ui-react';
import {Link, useHistory} from 'react-router-dom';

import SetSizeContainer from 'src/containers/SetSizeContainer';
import Navmenu from './Navmenu/Navmenu';
import LoginModal from './LoginModal/LoginModal';
import ErrorInfo from './ErrorInfo/ErrorInfo';

import './navbar.scss';

const Navbar = ({
  setWindowSize,
  windowSize,
  links,
  errorMessage,
  appErrorIsVisible,
  // FETCH DATA
  fetchData,
  fetchChannel,
  tags,
  channels,
  // BOOLEAN, TOGGLE, METHODS RELATED
  isUserLoggued,
  isShowLoginModal,
  isShowSignupModal,
  isShowSearch,
  isSearchLoading,
  isNavMenuOpen,
  toggleSearch,
  toggleNavMenu,
  toggleMyChannels,
  setNavMenuOpen,
  setLoginOpen,
  setSignupOpen,
  // SEARCH RELATED
  searchedValue,
  searchResult,
  searchChange,
  setSearchResult,
  tagSelectChange,
  // LOGIN OR SIGNUP RELATED
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
  disconnectUser,
}) => {
  // Fetch tags and channels on component did mount.
    if (isUserLoggued) useEffect(() => {fetchData()}, []);

  // This allows to redirect with a history.push('/someurl')
  let history = useHistory();
  // Options for select component
  const tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
  
  /* Search handling */
  const tagNames = tags.map(tag => tag.name);
  // console.log('tagNames', tagNames);
  
  const handleResultSelect = (evt, data) => {
    console.log('data.result.title', data.result.title);
    // TODO faire la différence entre salon et catégorie autrement
    for (const tagName of tagNames) {
      if (tagName === data.result.title) {
        history.push('/discovery');
        tagSelectChange(tagName);
        return
      }
    }

    // If a channel is clicked, displays the related channel page.
    history.push(`/channels/${data.result.id}`);
    // Need to dispatch action
    fetchChannel(data.result.id);
  };
  
  const handleSelectChange = (evt, {value}) => {
    console.log(value);
    // When a tag is selected, displays discovery page and according results.
    history.push('/discovery');
    tagSelectChange(value);
  };
  
  // This makes the filtered list of items to show in search input dropdown
  const handleSearchChange = (evt) => { 
    // On informe du changement dans l'input search
    searchChange(evt.target.value);
    // On tri la liste des tags correspondant
    const newNavTagList = searchNameAndReturn(evt.target.value, tags);
    // On fabrique la liste de tags utilisée par le composant search
    const searchTagResult = newNavTagList.map((tag) => ({ title: tag.name}));
    // On tri la liste des channels correspondant
    const renamedChannelList = channels.map(channel => (
      {
        ...channel,
        name: channel.title,
      }
    ));
    const newNavChannelList = searchNameAndReturn(evt.target.value, renamedChannelList);
    // On fabrique la liste de channels à afficher par le composant search
    const searchChannelResult = newNavChannelList.map((channel) => ({ 
      id: channel.id,
      title: channel.name
    }));
    // On fabrique l'objet représentant les résultats utilisés par le composant search.
    const results = {
      channels: {
        name: "Salons",
        results: searchChannelResult,
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
    <SetSizeContainer />
    <ErrorInfo errorMessage={errorMessage} isVisible={appErrorIsVisible} />
      <Link to={isUserLoggued ? '/home' : '/'} className='nav__logo' >
        {/* ici le logo */}
      </Link>
      
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
          <div className='nav__search'>
          <div 
            className={window.innerWidth < 700 ? 'nav__search__touchzone' : ''}
            onClick={toggleSearch}
          ></div>
          
            <div className='nav__search__container'>
              <div className="nav__search__container__search">
                <Search
                  category
                  loading={isSearchLoading}
                  onResultSelect={handleResultSelect}
                  onSearchChange={handleSearchChange}
                  results={searchResult}
                  value={searchedValue}
                />
              </div>
              
              <div className="nav__search__container__select">
                <Select 
                  placeholder="Catégories" 
                  options={tagsOptions}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
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
            toggleMyChannels={toggleMyChannels}
            toggleNavMenu={toggleNavMenu}
            isNavMenuOpen={isNavMenuOpen}
            setNavMenuOpen={setNavMenuOpen}
            setWindowSize={setWindowSize}
            windowSize={windowSize}
          />
          
        </div>
        )}

    </section>
  )
}

export default Navbar;
