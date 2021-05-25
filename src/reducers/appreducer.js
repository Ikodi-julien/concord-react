import {
  TOGGLE_NAV_SEARCH,
  TOGGLE_NAV_MENU,
  FETCH_NAV_DATA_SUCCESS,
  FETCH_NAV_DATA_ERROR,
  SEARCH_CHANGE,
  TAG_SELECT_CHANGE,
  SET_NAV_SEARCH_RESULT,
  HIDE_INFOS,
  SET_NAV_MENU_OPEN,
  SET_WINDOW_SIZE,
  SET_ISREFRESH,
  APP_INFO,
} from 'src/actions/appActions';
import {
  SIGNUP_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  DISCONNECT_USER_ERROR,
  FORGOT_PASS_INFO,
  UPDATE_PASS_INFO,
} from 'src/actions/authActions';
import {
  GET_USER_SUCCESS,
} from 'src/actions/userActions';
import {
  FETCH_CHANNEL,
} from 'src/actions/channelActions';

const appState = {
  // Possibly related to everywhere
  isNavMenuOpen: false,
  appInfo: '',
  appInfoIsVisible: false,
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
    case APP_INFO:
      return {
        ...stateActuel,
        appInfo: action.value,
        appInfoIsVisible: true,
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
        appInfo: action.value,
      };

    case LOGIN_ERROR:
      // console.log(action);
      return {
        ...stateActuel,
        appInfo: action.value,
      };

    case LOGIN_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        appInfo: '',
      };

    case DISCONNECT_USER_ERROR:
      return {
        ...appState,
        appInfo: 'Erreur lors du logout',
      };

    case FORGOT_PASS_INFO:
      // console.log(action);
      return {
        ...stateActuel,
        appInfo: action.value,
      };

    case UPDATE_PASS_INFO:
      // console.log(action);
      return {
        ...stateActuel,
        appInfo: action.value,
      };

    case HIDE_INFOS:
      return {
        ...stateActuel,
        appInfoIsVisible: false,
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

    case GET_USER_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        isRefresh: true,
      };

    case SET_ISREFRESH:
      // console.log('setisrefresh dans le reducer');
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
