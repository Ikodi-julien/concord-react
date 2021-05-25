export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export const SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const DISCONNECT_USER_SUCCESS = 'DISCONNECT_USER_SUCCESS';
export const DISCONNECT_USER_ERROR = 'DISCONNECT_USER_ERROR';
export const SUBMIT_FORGOT_PASS_FORM = 'SUBMIT_FORGOT_PASS_FORM';
export const FORGOT_PASS_INFO = 'FORGOT_PASS_INFO';
export const SUBMIT_UPDATE_PASSWORD = 'SUBMIT_UPDATE_PASSWORD';
export const UPDATE_PASS_INFO = 'UPDATE_PASS_INFO';

export const submitLoginForm = () => (
  { type: SUBMIT_LOGIN_FORM }
);
export const submitSignupForm = () => (
  { type: SUBMIT_SIGNUP_FORM }
);
export const loginSuccess = (user) => (
  { type: LOGIN_SUCCESS, user }
);
export const loginError = (errorMessage) => (
  { type: LOGIN_ERROR, value: errorMessage }
);
export const signupSuccess = (user) => (
  { type: SIGNUP_SUCCESS, user }
);
export const signupError = (errorMessage) => (
  { type: SIGNUP_ERROR, value: errorMessage }
);
export const disconnectUser = () => (
  { type: DISCONNECT_USER }
);
export const disconnectUserSuccess = () => (
  { type: DISCONNECT_USER_SUCCESS }
);
export const disconnectUserError = (errorMessage) => (
  { type: DISCONNECT_USER_ERROR, value: errorMessage }
);
export const submitForgotPassForm = () => ({ type: SUBMIT_FORGOT_PASS_FORM });
export const forgotPassInfo = (msg) => ({ type: FORGOT_PASS_INFO, value: msg });
export const submitUpdatePassword = () => ({ type: SUBMIT_UPDATE_PASSWORD });
export const updatePassInfo = (msg) => ({ type: UPDATE_PASS_INFO, value: msg });