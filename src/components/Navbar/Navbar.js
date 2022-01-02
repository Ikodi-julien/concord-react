import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SetSizeContainer from "src/containers/SetSizeContainer";
import NavSearchContainer from "src/containers/NavSearchContainer";
import Navmenu from "./Navmenu/Navmenu";
// import LoginModalContainer from 'src/containers/LoginModalContainer';
import AppInfo from "src/components/AppInfo/AppInfo";
import { AUTH_URL } from "src/settings";

import "./navbar.scss";
import { Button } from "semantic-ui-react";

const Navbar = ({
  setWindowSize,
  windowSize,
  links,
  appInfo,
  appInfoIsVisible,
  fetchData,
  isUserLoggued,
  isShowSearch,
  isNavMenuOpen,
  toggleSearch,
  toggleNavMenu,
  toggleMyChannels,
  setNavMenuOpen,
  disconnectUser,
  resetSearch,
}) => {
  // Fetch tags and channels on component did mount.
  if (isUserLoggued) {
    useEffect(() => {
      fetchData();
    }, []);
  }

  return (
    <section className="nav">
      <SetSizeContainer />
      <AppInfo appInfo={appInfo} isVisible={appInfoIsVisible} />
      <Link to={isUserLoggued ? "/home" : "/"} className="nav__logo" />

      {/* {!isUserLoggued && ( <LoginModalContainer />)} */}
      {!isUserLoggued && (
        <a href={`${AUTH_URL}?app=concord`}>
          <Button content="S'inscrire / Se connecter" primary />
        </a>
      )}

      {isUserLoggued && (
        <div className="nav__button__row">
          {/* La searchbar qui contient un champ de recherche sur channels et tags + un select pour les tags */}
          {isShowSearch && <NavSearchContainer />}

          {/* La loupe qui fait apparaitre la searchbar au click */}
          <button className="nav__search__button" onClick={toggleSearch}>
            <i className="fas fa-search" />
          </button>

          <Navmenu
            links={links}
            disconnectUser={disconnectUser}
            toggleMyChannels={toggleMyChannels}
            toggleNavMenu={toggleNavMenu}
            isNavMenuOpen={isNavMenuOpen}
            setNavMenuOpen={setNavMenuOpen}
            setWindowSize={setWindowSize}
            windowSize={windowSize}
            resetSearch={resetSearch}
          />
        </div>
      )}
    </section>
  );
};

export default Navbar;
