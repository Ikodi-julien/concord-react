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
import ProfileContainer from 'src/containers/ProfileContainer';
import Footer from 'src/components/Footer/Footer';

import './app.scss';
// == Composant

const App = ({isUserLoggued}) => (
  
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
        {isUserLoggued ?  <ProfileContainer /> : <Redirect to='/' />}
      </Route>
      
      <Route path='/discovery'>
        {/* Discovery */}
        {isUserLoggued ? <DiscoveryContainer /> : <Redirect to='/' />}
      </Route>
      
      <Route path='/error'>
        {/* Error */}
        <NavbarContainer />
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
    
  </div>
);

// == Export
export default App;
