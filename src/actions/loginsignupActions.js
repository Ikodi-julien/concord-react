export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const submitLoginForm = () => ({ type: SUBMIT_LOGIN_FORM });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginError = () => ({ type: LOGIN_ERROR });
