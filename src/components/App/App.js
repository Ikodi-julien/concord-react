// == Import npm
import React from 'react';
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
import Footer from 'src/components/Footer/Footer';

import './app.scss';

// == Composant

const App = ({isUserLoggued}) => {
  
  return (
  <div className="app">
    <Switch>

      <Route path='/home'>
        {/* Home */}
        <NavbarContainer />
        {
          isUserLoggued ? (<h1>Tu es connecté mais il n'y a pas de composant à afficher pour l'instant...</h1>) : (<h1>Il faut te connecter</h1>)
        }
        
      </Route>
      <Route path='/channels/:id'>
        {/* Channels */}
        {isUserLoggued ? <ChannelContainer /> : (<h1>Il faut te connecter</h1>)}
      </Route>
      <Route path='/profile'>
        {/* Profile */}
        <NavbarContainer />
        {isUserLoggued ? (<h1>Tu es connecté mais il n'y a pas de composant à afficher pour l'instant...</h1>) : (<h1>Il faut te connecter</h1>)}
      </Route>
      <Route path='/discovery'>
        {/* Discovery */}
        <NavbarContainer />
        {isUserLoggued ? (<h1>Tu es connecté mais il n'y a pas de composant à afficher pour l'instant...</h1>) : (<h1>Il faut te connecter</h1>)}
      </Route>
      <Route path='/error'>
        {/* Error */}
        <NavbarContainer />
        <Error />
      </Route>
      <Route path='/' exact>
        {/* Accueil */}
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
