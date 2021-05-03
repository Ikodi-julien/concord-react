// == Import npm
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
// == Import

import './app.scss';

// == Composant

const App = ({text}) => {

  return (
  <div className="app">
    <Switch>

      <Route to='/login'>
        {/* Login */}
        
      </Route>
      <Route to='/signup'>
        {/* Signup */}
      </Route>
      <Route to='/home'>
        {/* Home */}
      </Route>
      <Route to='/channels'>
        {/* Channels */}
      </Route>
      <Route to='/profile'>
        {/* Profile */}
      </Route>
      <Route to='/discovery'>
        {/* Discovery */}
      </Route>
      <Route to='/error'>
        {/* Error */}
      </Route>
      <Route to='/'>
        {/* Accueil */}
        
      </Route>
      
    </Switch>
  </div>)
 
 
}
;

// == Export
export default App;
