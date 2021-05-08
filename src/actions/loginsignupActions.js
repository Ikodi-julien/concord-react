export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export const SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const submitLoginForm = () => ({ type: SUBMIT_LOGIN_FORM });
export const submitSignupForm = () => ({ type: SUBMIT_SIGNUP_FORM });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginError = (errorMessage) => ({ type: LOGIN_ERROR, value: errorMessage });
export const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, user });
export const signupError = (errorMessage) => ({ type: SIGNUP_ERROR, value: errorMessage });
