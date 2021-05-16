/* eslint-disable max-len */
/* This reducer manage actions accessible from everywhere, such as nav and search behavior */

import {
  TOGGLE_NAV_SEARCH,
  TOGGLE_NAV_MENU,
  FETCH_NAV_DATA_SUCCESS,
  FETCH_NAV_DATA_ERROR,
  SEARCH_CHANGE,
  TAG_SELECT_CHANGE,
  SET_NAV_SEARCH_RESULT,
  SET_LOGIN_MODAL,
  SET_SIGNUP_MODAL,
  SET_INPUT_VALUE,
  HIDE_ERRORS,
  SET_NAV_MENU_OPEN,
  SET_WINDOW_SIZE,
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
import {
  FETCH_CHANNEL,
} from 'src/actions/channelActions';

const appState = {
  // Possibly related to everywhere
  isUserLoggued: true,
  isNavMenuOpen: false,
  errorMessage: '',
  windowSize: 0,
  appRoutes: [
    // { slug: '/', name: 'Accueil' },
    { slug: '/home', name: 'Home' },
    { slug: '/profile', name: 'Mes paramètres' },
    { slug: '/discovery', name: 'Découverte' },
  ],
  tags: [],
  channels: [],
  // Related to login or signup
  isShowLoginModal: false,
  isShowSignupModal: false,
  loginButtonIsLoading: false,
  loginEmail: 'testeur@testmail.com',
  loginPassword: '7357',
  signupButtonIsLoading: false,
  signupPseudo: 'ju',
  signupEmail: 'testeur@testmail.com',
  firstSignupPassword: '7357',
  secondSignupPassword: '7357',
  signupErrorIsVisible: false,
  loginErrorIsVisible: false,
  // Related to search actions
  isShowSearch: false,
  isSearchLoading: false,
  navSearchValue: '',
  tagSelectValue: '',
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
        isNavMenuOpen: !stateActuel.isNavMenuOpen,
      };

    case SET_NAV_MENU_OPEN:
      return {
        ...stateActuel,
        isNavMenuOpen: action.value,
      };

    case FETCH_NAV_DATA_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        tags: action.tags,
        channels: action.channels,
      };

    case FETCH_NAV_DATA_ERROR:
      // console.log(action);
      return {
        ...stateActuel,
        tags: [{ id: 'error', name: 'Oups, ça n\'a pas fonctionné...' }],
      };

    case SEARCH_CHANGE:
      // console.log(action);
      return {
        ...stateActuel,
        searchedValue: action.value,
      };

    case TAG_SELECT_CHANGE:
      return {
        ...stateActuel,
        tagSelectValue: action.value,
      };

    case SET_NAV_SEARCH_RESULT:
      // console.log(action);
      return {
        ...stateActuel,
        searchResult: action.list,
      };

    case SET_LOGIN_MODAL:
      // console.log(action);
      return {
        ...stateActuel,
        isShowLoginModal: action.value,
      };

    case SET_SIGNUP_MODAL:
      // console.log(action);
      return {
        ...stateActuel,
        isShowSignupModal: action.value,
      };

    case SET_INPUT_VALUE:
      // console.log(action);
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
      // console.log(action);
      return {
        ...stateActuel,
        signupButtonIsLoading: false,
        isShowSignupModal: false,
      };

    case LOGIN_ERROR:
      // console.log(action);
      return {
        ...stateActuel,
        errorMessage: action.value,
        loginErrorIsVisible: true,
        loginButtonIsLoading: false,
      };

    case LOGIN_SUCCESS:
      // console.log(action);
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
        isUserLoggued: false,
        windowSize: stateActuel.windowSize,
      };

    case HIDE_ERRORS:
      return {
        ...stateActuel,
        signupErrorIsVisible: false,
        loginErrorIsVisible: false,
      };

    case SET_WINDOW_SIZE:
      return {
        ...stateActuel,
        windowSize: action.value,
      };

    case FETCH_CHANNEL:
      return {
        ...stateActuel,
        searchedValue: '',
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
