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
      <Route to='/'>
        {/* Accueil */}
      </Route>
      <Route to='/login'>
        {/* Login */}
      </Route>
      <Route to='/signup'>
        {/* Signup */}
      </Route>
      <Route to='/home'>
        {/* Home */}
      </Route>
    </Switch>
  </div>)
 
 
}
;

// == Export
export default App;
