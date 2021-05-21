export const TOGGLE_NAV_SEARCH = 'Click on search button, displays search input';
export const TOGGLE_NAV_MENU = 'Show or hide nav menu';
export const FETCH_NAV_DATA = 'Fetch data to hydrate search and select in Navbar';
export const FETCH_NAV_DATA_SUCCESS = 'FETCH_NAV_DATA_SUCCESS';
export const FETCH_NAV_DATA_ERROR = 'FETCH_NAV_DATA_ERROR';
export const SEARCH_CHANGE = 'SEARCH_CHANGE';
export const TAG_SELECT_CHANGE = 'TAG_SELECT_CHANGE';
export const SET_NAV_SEARCH_RESULT = 'SET_NAV_SEARCH_RESULT';
export const SET_LOGIN_MODAL = 'SET_LOGIN_MODAL';
export const SET_SIGNUP_MODAL = 'SET_SIGNUP_MODAL';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const HIDE_ERRORS = 'HIDE_ERRORS';
export const SET_NAV_MENU_OPEN = 'SET_NAV_MENU_OPEN';
export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

export const SET_ISREFRESH = 'SET_ISREFRESH';
export const SET_FIRST_LOGIN = 'SET_FIRST_LOGIN';
export const APP_ERROR = 'APP_ERROR';
/*-------------------------------------------*/
export const toggleNavSearch = () => ({
  type: TOGGLE_NAV_SEARCH,
});
export const toggleNavMenu = () => ({
  type: TOGGLE_NAV_MENU,
});
export const fetchNavData = () => ({
  type: FETCH_NAV_DATA,
});
export const fetchNavDataSuccess = (data) => ({
  type: FETCH_NAV_DATA_SUCCESS,
  ...data,
});
export const fetchNavDataError = () => ({
  type: FETCH_NAV_DATA_ERROR,
});
export const searchChange = (value) => ({ type: SEARCH_CHANGE, value });
export const tagSelectChange = (value) => ({ type: TAG_SELECT_CHANGE, value });
export const setNavSearchResult = (list) => ({ type: SET_NAV_SEARCH_RESULT, list: list });
export const setLoginOpen = (bool) => ({ type: SET_LOGIN_MODAL, value: bool });
export const setSignupOpen = (bool) => ({ type: SET_SIGNUP_MODAL, value: bool });
export const setInputValue = (objectInput) => ({ type: SET_INPUT_VALUE, objectInput });
export const hideErrors = () => ({ type: HIDE_ERRORS });
export const setNavMenuOpen = (bool) => ({ type: SET_NAV_MENU_OPEN, value: bool });
export const setWindowSize = (windowSize) => ({ type: SET_WINDOW_SIZE, value: windowSize });

export const setIsRefresh = (bool) => ({ type: SET_ISREFRESH, value: bool });
export const appError = (msg) => ({ type: APP_ERROR, value: msg });
export const setFirstLogin = (bool) => ({ type: SET_FIRST_LOGIN, value: bool });
