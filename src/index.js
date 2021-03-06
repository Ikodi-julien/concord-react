// == Import : npm

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/store/store'

// == Import : local
import './styles/index.scss'
import 'semantic-ui-css/semantic.min.css'

// Composants
import AppContainer from 'src/containers/AppContainer'

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>
)
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root')
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target)
