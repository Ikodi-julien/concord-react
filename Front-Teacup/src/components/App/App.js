// == Import npm
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
// == Import
import Channels from '../Channels/Channels';

import './app.scss';

// == Composant

const App = ({text}) => {

  return (
  <div className="app">
    <Switch>

      <Route path='/login'>
        {/* Login */}
        
      </Route>
      <Route path='/signup'>
        {/* Signup */}
      </Route>
      <Route path='/home'>
        {/* Home */}
      </Route>
      <Route path='/channels'>
        {/* Channels */}
        <Channels />
      </Route>
      <Route path='/profile'>
        {/* Profile */}
      </Route>
      <Route path='/discovery'>
        {/* Discovery */}
      </Route>
      <Route path='/error'>
        {/* Error */}
      </Route>
      <Route path='/'>
        {/* Accueil */}

      </Route>
      
    </Switch>
  </div>)
 
 
}
;

// == Export
export default App;
