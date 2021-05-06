/* This reducer manage actions accessible from everywhere, such as nav and search behavior */

import {
  TOGGLE_NAV_SEARCH,
  TOGGLE_NAV_MENU,
} from 'src/actions/appActions';

const appState = {
  appRoutes: [
    { slug: '/home', name: 'Home' },
    { slug: '/discovery', name: 'Découverte' },
  ],
  tags: [
    { key: 'af', name: 'Films d\'horreur' },
    { key: 'ax', name: 'Cuisine' },
    { key: 'al', name: 'Mangas' },
    { key: 'dz', name: 'Jeux video' },
    { key: 'as', name: 'Sports d\'hiver' },
  ],
  isShowLoginButton: false,
  isShowSearch: false,
  isShowMenu: false,
};

const reducer = (stateActuel = appState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAV_SEARCH:
      return {
        ...appState,
        isShowSearch: !stateActuel.isShowSearch,
      };

    case TOGGLE_NAV_MENU:
      return {
        ...appState,
        isShowMenu: !stateActuel.isShowMenu,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
