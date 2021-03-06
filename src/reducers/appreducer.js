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
  RESET_SEARCH,
} from 'src/actions/appActions';
import {
  SIGNUP_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  UPDATE_PASS_INFO,
} from 'src/actions/authActions';
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
  dbDate: 'none',
  isRefresh: false,
  // Related to search actions
  isShowSearch: false,
  isSearchLoading: false,
  navSearchValue: '',
  tagSelectValue: '',
  searchResult: {},
  googleConnectURL: '',
};

const reducer = (stateActuel = appState, action = {}) => {
  switch (action.type) {
    case APP_INFO:
      // console.log(action);
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
        dbDate: action.channels[0].date,
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

    case RESET_SEARCH:
      return {
        ...stateActuel,
        tagSelectValue: '',
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
