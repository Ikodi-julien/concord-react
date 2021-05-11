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
} from 'src/actions/loginsignupActions';
import {
  hideErrors,
} from 'src/actions/appActions';
import { submitLoginForm } from '../actions/loginsignupActions';

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
  } = store.getState().auth;

  const errorTimer = 2500;

  switch (action.type) {
    case SUBMIT_LOGIN_FORM:
      console.log(action);
      next(action);

      /* If login only => email and password are from the inputs in appReducer, after a signup success they are from authReducer */
      axios.post(`${FETCH_URL}/v1/login`, {
        email: email || loginEmail,
        password: password || loginPassword,
      })
        .then((res) => {
          const user = {
            ...res.data[0].user,
            recommendedChannels: {
              ...res.data[1].recommendedChannels,
            },
          };
          console.log('user destructuré :', { ...user });

          store.dispatch(loginSuccess({ ...user }));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          if (error.toString().includes('401')) {
            store.dispatch(loginError('Whalaa ! On ne connait pas ces identifiants...'));
            setTimeout(() => {
              store.dispatch(hideErrors());
            }, errorTimer);
            return;
          }
          store.dispatch(loginError(error.toString()));

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
          // There you try to log after a signup success
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
      // TODO /disconnect/:id in server

      store.dispatch(disconnectUserSuccess());
      break;

    default:
      next(action);
  }
};
