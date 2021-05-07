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
import Navbar from 'src/components/Navbar/Navbar';

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
        <Navbar />
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
