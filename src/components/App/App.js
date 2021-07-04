// == Import npm
import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import setSocketInHtml from 'src/selectors/setSocketInHtml'
import PropTypes from 'prop-types';

// == Import
import ChannelContainer from '../../containers/ChannelContainer'
import NavbarContainer from 'src/containers/NavbarContainer'
import LandingContainer from 'src/containers/LandingContainer'
import DiscoveryContainer from 'src/containers/DiscoveryContainer'
import HomepageContainer from 'src/containers/HomepageContainer'
import ProfileContainer from 'src/containers/ProfileContainer'
import Footer from 'src/components/Footer/Footer'
import Error404 from 'src/components/Error404/Error404'

import './app.scss'
// == Composant

const App = ({ isUserLoggued, firstLogin }) => {
  useEffect(() => setSocketInHtml(), [])

  return (
    <div className="app">
      <Switch>
        <Route path="/home">
          {/* Home */}
          {isUserLoggued && firstLogin ? (
            <Redirect to="/profile" />
          ) : isUserLoggued ? (
            <HomepageContainer />
          ) : (
            <Redirect to="/" />
          )}
        </Route>

        <Route path="/channels/:id">
          {/* Channels */}
          {isUserLoggued ? <ChannelContainer /> : <Redirect to="/" />}
        </Route>

        <Route path="/profile">
          {/* Profile */}
          {isUserLoggued ? <ProfileContainer /> : <Redirect to="/" />}
        </Route>

        <Route path="/discovery">
          {/* Discovery */}
          {isUserLoggued ? <DiscoveryContainer /> : <Redirect to="/" />}
        </Route>

        <Route path="/error">
          {/* Error */}
          {isUserLoggued ? <Error404 /> : <Redirect to="/" />}
        </Route>

        <Route path="/" exact>
          {/* Accueil */}
          {isUserLoggued && <Redirect to="/discovery" />}
          <NavbarContainer />
          <LandingContainer />
          <Footer />
        </Route>

        <Redirect to="/error" />
      </Switch>
    </div>
  )
}

App.propTypes = {
  isUserLoggued: PropTypes.bool,
  firstLogin: PropTypes.bool,
}

// == Export
export default App
