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

import './app.scss';

// == Composant

const App = ({text}) => {

  return (
  <div className="app">
    <Switch>

      <Route path='/login'>
        {/* Login */}
        <NavbarContainer />
        <h1>Il n'y a pas encore de composant 'Login'</h1>
      </Route>
      <Route path='/signup'>
        {/* Signup */}
        <NavbarContainer />
        <h1>Il n'y a pas encore de composant 'Signup'</h1>
        
      </Route>
      <Route path='/home'>
        {/* Home */}
        <NavbarContainer />
        <h1>Il n'y a pas encore de composant 'Home'</h1>
      </Route>
      <Route path='/channels/:id'>
        {/* Channels */}
        <ChannelContainer />
      </Route>
      <Route path='/profile'>
        {/* Profile */}
        <NavbarContainer />
        <h1>Il n'y a pas encore de composant 'Profile'</h1>
      </Route>
      <Route path='/discovery'>
        {/* Discovery */}
        <NavbarContainer />
        <h1>Il n'y a pas encore de composant 'Discovery'</h1>
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
      </Route>
      
      <Redirect to='/error' />
    </Switch>
    
  </div>)
 
 
}
;

// == Export
export default App;
