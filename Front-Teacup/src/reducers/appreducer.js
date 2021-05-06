/* This reducer manage actions accessible from everywhere, such as nav and search behavior */

import { TOGGLE_NAV_SEARCH } from 'src/actions/appActions';

const appState = {
  tags: [
    { id: 'af', name: 'Films d\'horreur' },
    { key: 'ax', name: 'Cuisine' },
    { key: 'al', name: 'Mangas' },
    { key: 'dz', name: 'Jeux video' },
    { key: 'as', name: 'Sports d\'hiver' },
  ],
  channels: [
    {},
  ],
  isShowLoginButton: false,
  isShowSearch: true,
  isShowMenu: false,
};

const reducer = (stateActuel = appState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAV_SEARCH:
      return {
        ...appState,
        isShowSearch: !stateActuel.isShowSearch,
      };
    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
