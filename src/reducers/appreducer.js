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
  SET_INPUT_VALUE,
  HIDE_ERRORS,
} from 'src/actions/appActions';
import {
  SUBMIT_SIGNUP_FORM,
  SUBMIT_LOGIN_FORM,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  DISCONNECT_USER_SUCCESS,
} from 'src/actions/loginsignupActions';

const appState = {
  appRoutes: [
    { slug: '/', name: 'Accueil' },
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
  isUserLoggued: false,
  isShowLoginModal: false,
  isShowSignupModal: false,
  isShowSearch: false,
  isShowMenu: false,
  isSearchLoading: false,
  searchedValue: '',
  searchResult: {},
  loginButtonIsLoading: false,
  loginEmail: 'ju@ju.fr',
  loginPassword: 'bob',
  signupButtonIsLoading: false,
  signupPseudo: 'ju',
  signupEmail: 'ju@ju.fr',
  firstSignupPassword: 'bob',
  secondSignupPassword: 'bob',
  signupErrorIsVisible: false,
  loginErrorIsVisible: false,
  errorMessage: '',
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
      console.log(action);
      return {
        ...stateActuel,
        tags: action.data.tags,
        // channels: action.data.channels,
      };

    case FETCH_NAV_DATA_ERROR:
      console.log(action);
      return {
        ...stateActuel,
        tags: [{ id: 'error', name: 'Oups, ça n\'a pas fonctionné...' }],
      };

    case SEARCH_NAV_CHANGE:
      console.log(action);
      return {
        ...stateActuel,
        searchedValue: action.value,
      };

    case SET_NAV_SEARCH_RESULT:
      console.log(action);

      return {
        ...stateActuel,
        searchResult: action.list,
      };

    case SET_LOGIN_MODAL:
      console.log(action);
      return {
        ...stateActuel,
        isShowLoginModal: action.value,
      };

    case SET_SIGNUP_MODAL:
      console.log(action);
      return {
        ...stateActuel,
        isShowSignupModal: action.value,
      };

    case SET_INPUT_VALUE:
      console.log(action);
      return {
        ...stateActuel,
        [action.objectInput.name]: action.objectInput.value,
      };

    case SUBMIT_SIGNUP_FORM:
      return {
        ...stateActuel,
        signupButtonIsLoading: true,
      };

    case SUBMIT_LOGIN_FORM:
      return {
        ...stateActuel,
        loginButtonIsLoading: true,
      };

    case SIGNUP_ERROR:
      return {
        ...stateActuel,
        errorMessage: action.value,
        signupErrorIsVisible: true,
        signupButtonIsLoading: false,
      };

    case SIGNUP_SUCCESS:
      console.log(action);

      return {
        ...stateActuel,
        signupButtonIsLoading: false,
        isShowSignupModal: false,
      };

    case LOGIN_ERROR:
      console.log(action);

      return {
        ...stateActuel,
        errorMessage: action.value,
        loginErrorIsVisible: true,
        loginButtonIsLoading: false,
      };

    case LOGIN_SUCCESS:
      console.log(action);

      return {
        ...stateActuel,
        isUserLoggued: true,
        isShowLoginModal: false,
        isShowSignupModal: false,
        errorMessage: '',
        loginEmail: '',
        loginPassword: '',
        signupPseudo: '',
        signupEmail: '',
        firstSignupPassword: '',
        secondSignupPassword: '',
        loginButtonIsLoading: false,
      };

    case DISCONNECT_USER_SUCCESS:
      return {
        ...appState,
      };

    case HIDE_ERRORS:
      return {
        ...stateActuel,
        signupErrorIsVisible: false,
        loginErrorIsVisible: false,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
