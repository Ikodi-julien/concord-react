import {
  TOGGLE_NAV_SEARCH,
  TOGGLE_NAV_MENU,
  FETCH_NAV_DATA_SUCCESS,
  FETCH_NAV_DATA_ERROR,
  SEARCH_CHANGE,
  TAG_SELECT_CHANGE,
  SET_NAV_SEARCH_RESULT,
  HIDE_ERRORS,
  SET_NAV_MENU_OPEN,
  SET_WINDOW_SIZE,
  SET_ISREFRESH,
  APP_ERROR,
  SET_ISLANDINGACTIVE,
} from 'src/actions/appActions';
import {
  SIGNUP_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  DISCONNECT_USER_ERROR,
} from 'src/actions/loginsignupActions';
import {
  GET_USER_SUCCESS,
} from 'src/actions/userActions';
import {
  FETCH_CHANNEL,
} from 'src/actions/channelActions';

const appState = {
  isLandingActive: false,
  // Possibly related to everywhere
  isNavMenuOpen: false,
  errorMessage: '',
  appErrorIsVisible: false,
  windowSize: 0,
  appRoutes: [
    { slug: '/home', name: 'Home' },
    { slug: '/profile', name: 'Mes paramètres' },
    { slug: '/discovery', name: 'Découverte' },
  ],
  tags: [],
  channels: [],
  isRefresh: false,
  // Related to search actions
  isShowSearch: false,
  isSearchLoading: false,
  navSearchValue: '',
  tagSelectValue: '',
  searchResult: {},
};

const reducer = (stateActuel = appState, action = {}) => {
  switch (action.type) {
    case APP_ERROR:
      return {
        ...stateActuel,
        errorMessage: action.value,
        appErrorIsVisible: true,
      };

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

    case SIGNUP_ERROR:
      return {
        ...stateActuel,
        errorMessage: action.value,
      };

    case LOGIN_ERROR:
      // console.log(action);
      return {
        ...stateActuel,
        errorMessage: action.value,
      };

    case LOGIN_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        errorMessage: '',
      };

    case DISCONNECT_USER_ERROR:
      return {
        ...appState,
        errorMessage: 'Erreur lors du logout',
      };

    case HIDE_ERRORS:
      return {
        ...stateActuel,
        appErrorIsVisible: false,
      };

    case SET_WINDOW_SIZE:
      return {
        ...stateActuel,
        windowSize: action.value,
      };

    case SET_ISLANDINGACTIVE:
      return {
        ...stateActuel,
        isLandingActive: action.value,
      };

    case FETCH_CHANNEL:
      return {
        ...stateActuel,
        searchedValue: '',
      };

    case GET_USER_SUCCESS:
      console.log(action);
      return {
        ...stateActuel,
        isRefresh: true,
      };

    case SET_ISREFRESH:
      console.log('setisrefresh dans le reducer');
      return {
        ...stateActuel,
        isRefresh: action.value,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
