export const TOGGLE_NAV_SEARCH = 'Click on search button, displays search input';
export const TOGGLE_NAV_MENU = 'Show or hide nav menu';
export const FETCH_NAV_DATA = 'Fetch data to hydrate search and select in Navbar';
export const FETCH_NAV_DATA_SUCCESS = 'FETCH_NAV_DATA_SUCCESS';
export const FETCH_NAV_DATA_ERROR = 'FETCH_NAV_DATA_ERROR';
export const SEARCH_NAV_CHANGE = 'SEARCH_NAV_CHANGE';
export const SET_NAV_SEARCH_RESULT = 'SET_NAV_SEARCH_RESULT';
export const SET_LOGIN_MODAL = 'SET_LOGIN_MODAL';
export const SET_SIGNUP_MODAL = 'SET_SIGNUP_MODAL';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const HIDE_ERRORS = 'HIDE_ERRORS';
export const SET_NAV_MENU_OPEN = 'SET_NAV_MENU_OPEN';

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
export const searchNavChange = (value) => ({ type: SEARCH_NAV_CHANGE, value });
export const setNavSearchResult = (list) => ({ type: SET_NAV_SEARCH_RESULT, list: list });
export const setLoginOpen = (bool) => ({ type: SET_LOGIN_MODAL, value: bool });
export const setSignupOpen = (bool) => ({ type: SET_SIGNUP_MODAL, value: bool });
export const setInputValue = (objectInput) => ({ type: SET_INPUT_VALUE, objectInput });
export const hideErrors = () => ({ type: HIDE_ERRORS });
export const setNavMenuOpen = (bool) => ({ type: SET_NAV_MENU_OPEN, value: bool });
