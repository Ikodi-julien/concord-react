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

import './app.scss';

// == Composant

const App = ({text}) => {

  return (
  <div className="app">
    <Switch>

      <Route path='/login'>
        {/* Login */}
        <h1>Il n'y a pas encore de composant 'Login'</h1>
      </Route>
      <Route path='/signup'>
        {/* Signup */}
      </Route>
      <Route path='/home'>
        {/* Home */}
      </Route>
      <Route path='/channels/:id'>
        {/* Channels */}
        <ChannelContainer />
      </Route>
      <Route path='/profile'>
        {/* Profile */}
      </Route>
      <Route path='/discovery'>
        {/* Discovery */}
      </Route>
      <Route path='/error'>
        {/* Error */}
        <NavbarContainer />
        <Error />
      </Route>
      <Route path='/' exact>
        {/* Accueil */}

      </Route>
      
      <Redirect to='/error' />
    </Switch>
    
  </div>)
 
 
}
;

// == Export
export default App;
