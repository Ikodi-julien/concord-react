/* eslint-disable max-len */
import axios from 'axios';
import { FETCH_URL } from 'src/vars';
import {
  SUBMIT_LOGIN_FORM,
  loginSuccess,
  loginError,
  SUBMIT_SIGNUP_FORM,
  signupSuccess,
  signupError,
  DISCONNECT_USER,
  disconnectUserSuccess,
  disconnectUserError,
  submitLoginForm,
} from 'src/actions/loginsignupActions';
import {
  hideErrors,
} from 'src/actions/appActions';

export default (store) => (next) => (action) => {
  const {
    loginEmail,
    loginPassword,
    signupEmail,
    signupPseudo,
    firstSignupPassword,
    secondSignupPassword,
  } = store.getState().app;

  const {
    email,
    password,
  } = store.getState().user;

  const errorTimer = 2500;

  switch (action.type) {
    case SUBMIT_LOGIN_FORM:
      console.log(action);
      next(action);

      /* If login only => email and password are from the inputs in appReducer, after a signup success they are from userReducer */
      axios.post(`${FETCH_URL}/v1/login`, {
        email: email || loginEmail,
        password: password || loginPassword,
      },
      {
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          store.dispatch(loginSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          let errorMsg;
          if (error.toString().includes('401')) errorMsg = 'Désolé, on ne connait pas ces identifiants';
          if (error.toString().includes('412')) errorMsg = 'Il manque une information, email ? password ?';
          if (error.toString().includes('409')) errorMsg = 'Informations d\'identification invalides';
          if (errorMsg) {
            store.dispatch(loginError(errorMsg));
          }
          else {
            store.dispatch(loginError(error.toString()));
          }
          setTimeout(() => {
            store.dispatch(hideErrors());
          }, errorTimer);
        });
      break;

    case SUBMIT_SIGNUP_FORM:
      console.log(action);
      next(action);
      // check for inputs consistency
      if (
        !signupEmail
        || !signupPseudo
        || !firstSignupPassword
        || !secondSignupPassword
      ) {
        store.dispatch(signupError('Un ou plusieurs champs ne sont pas remplis'));
        setTimeout(() => {
          store.dispatch(hideErrors());
        }, errorTimer);
        return;
      }

      if (firstSignupPassword !== secondSignupPassword) {
        store.dispatch(signupError('Les mots de passe ne sont pas identiques'));
        setTimeout(() => {
          store.dispatch(hideErrors());
        }, errorTimer);
        return;
      }

      axios.post(`${FETCH_URL}/v1/signup`, {
        nickname: signupPseudo,
        email: signupEmail,
        password: firstSignupPassword,
      })
        .then((res) => {
          console.log('res.data :', res.data);
          store.dispatch(signupSuccess({
            password: store.getState().app.firstSignupPassword,
            email: res.data.email,
          }));
          // There you try to log right after a signup success
          setTimeout(() => {
            store.dispatch(submitLoginForm());
          }, 30);
        })
        .catch((error) => {
        // console.error('catch error: ', error);
          store.dispatch(signupError(error.toString()));
          setTimeout(() => {
            store.dispatch(hideErrors());
          }, errorTimer);
        });
      break;

    case DISCONNECT_USER:
      next(action);
      axios.post(`${FETCH_URL}/v1/logout`, {},
        { withCredentials: true })
        .then((res) => {
          store.dispatch(disconnectUserSuccess());
          console.log('res.data :', res.data);
        })
        .catch((error) => {
        // console.error('catch error: ', error);
          store.dispatch(disconnectUserError(error.toString()));
          setTimeout(() => {
            store.dispatch(hideErrors());
          }, errorTimer);
        });
      break;

    default:
      next(action);
  }
};
