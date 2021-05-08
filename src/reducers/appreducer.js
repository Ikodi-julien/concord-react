/* This reducer manage actions accessible from everywhere, such as nav and search behavior */

import {
  TOGGLE_NAV_SEARCH,
  TOGGLE_NAV_MENU,
  FETCH_NAV_DATA_SUCCESS,
  FETCH_NAV_DATA_ERROR,
  SEARCH_NAV_CHANGE,
  SET_NAV_SEARCH_RESULT,
  SET_LOGIN_MODAL,
  SET_SIGNUP_MODAL,
} from 'src/actions/appActions';

const appState = {
  appRoutes: [
    { slug: '/', name: 'Accueil' },
    { slug: '/login', name: 'Connexion' },
    { slug: '/signup', name: 'Créer un compte' },
    { slug: '/home', name: 'Home' },
    { slug: '/profile', name: 'Mes paramètres' },
    { slug: '/discovery', name: 'Découverte' },
    { slug: '/channels/1', name: 'Channel test' },
  ],
  tags: [
    { id: 'af', name: 'Films d\'horreur' },
    { id: 'ax', name: 'Cuisine' },
    { id: 'al', name: 'Mangas' },
    { id: 'dz', name: 'Jeux video' },
    { id: 'as', name: 'Sports d\'hiver' },
  ],
  channels: [
    {
      id: 56, title: 'un channel anglais', keywords: ['napoleon', 'british'], tags: ['Les poissons rouges'],
    },
    {
      id: 57, title: 'Baxter dury', keywords: ['rap', 'british', 'classe', 'voix'], tags: ['Le chocolat'],
    },
    {
      id: 58, title: 'Justice', keywords: ['techno', 'french', 'touch'], tags: ['Les poissons rouges', 'La littérature anglaise du 16ème siècle'],
    },
  ],
  isShowLoginButton: true,
  isShowLoginModal: false,
  isShowSignupModal: false,
  isShowSearch: true,
  isShowMenu: false,
  isSearchLoading: false,
  searchedValue: '',
  searchResult: {},
};

const reducer = (stateActuel = appState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAV_SEARCH:
      return {
        ...stateActuel,
        isShowSearch: !stateActuel.isShowSearch,
      };

    case TOGGLE_NAV_MENU:
      return {
        ...stateActuel,
        isShowMenu: !stateActuel.isShowMenu,
      };

    case FETCH_NAV_DATA_SUCCESS:
      return {
        ...stateActuel,
        tags: action.data.tags,
        // channels: action.data.channels,
      };

    case FETCH_NAV_DATA_ERROR:
      return {
        ...stateActuel,
        tags: [{ id: 'error', name: 'Oups, ça n\'a pas fonctionné...' }],
      };

    case SEARCH_NAV_CHANGE:
      return {
        ...stateActuel,
        searchedValue: action.value,
      };

    case SET_NAV_SEARCH_RESULT:
      console.log(action.list);

      return {
        ...stateActuel,
        searchResult: action.list,
      };

    case SET_LOGIN_MODAL:
      console.log(action.value);
      return {
        ...stateActuel,
        isShowLoginModal: action.value,
      };

    case SET_SIGNUP_MODAL:
      console.log(action.value);
      return {
        ...stateActuel,
        isShowSignupModal: action.value,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
