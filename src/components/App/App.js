// == Import npm
import React, {useEffect} from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// == Import
import ChannelContainer from '../../containers/ChannelContainer';
import Error from 'src/components/Error/Error';
import NavbarContainer from 'src/containers/NavbarContainer';
import Landing from 'src/components/Landing/Landing';
import DiscoveryContainer from 'src/containers/DiscoveryContainer';
import HomepageContainer from 'src/containers/HomepageContainer';
import EditorContainer from 'src/containers/EditorContainer';
import Footer from 'src/components/Footer/Footer';

import './app.scss';
// == Composant

const App = ({isUserLoggued, setWindowSize}) => {
  
  // Ici on ecoute l'évenement resize afin de gérer la prop 'windowSize' dans appReducer, cette prop est utilisée comme une condition pour l'affichage de certains éléments de menu ou boutons... la mise à jour du state au resize sur cette prop permet le rendu responsive.

  const updateSize = () => {
    setWindowSize(window.innerWidth)
  };
  
  useEffect(() => {

    setWindowSize(window.innerWidth);
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, []);

  return (
  <div className="app">
    <Switch>

      <Route path='/home'>
        {/* Home */}
        {
          isUserLoggued ? <HomepageContainer /> : <Redirect to='/' />
        }
      </Route>
      
      <Route path='/channels/:id'>
        {/* Channels */}
        {isUserLoggued ? <ChannelContainer /> : <Redirect to='/' />}
      </Route>
      
      <Route path='/profile'>
        {/* Profile */}
        <NavbarContainer />
        {isUserLoggued ? (<h1>Tu es connecté mais il n'y a pas de composant à afficher pour l'instant...</h1>) : <Redirect to='/' />}
      </Route>
      
      <Route path='/discovery'>
        {/* Discovery */}
        {isUserLoggued ? <DiscoveryContainer /> : <Redirect to='/' />}
      </Route>
      
      <Route path='/error'>
        {/* Error */}
        <NavbarContainer />
        <EditorContainer />
        {/* <Error /> */}
      </Route>
      
      <Route path='/' exact>
        {/* Accueil */}
        {isUserLoggued && <Redirect to='/home' />}
        <NavbarContainer />
          <Landing />
        <Footer />
      </Route>
      
      <Redirect to='/error' />
    </Switch>
    
  </div>)
}
;

// == Export
export default App;
