import axios from 'axios';
import { FETCH_URL } from 'src/vars';
import {
  SUBMIT_LOGIN_FORM,
  loginSuccess,
  loginError,
  SUBMIT_SIGNUP_FORM,
  signupSuccess,
  signupError,
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

  switch (action.type) {
    case SUBMIT_LOGIN_FORM:
      console.log(action);
      next(action);

      axios.post(`${FETCH_URL}/v1/login`, {
        email: loginEmail,
        password: loginPassword,
      })
        .then((res) => {
          console.log('res.data :', res.data);
          store.dispatch(loginSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(loginError(error.toString()));

          setTimeout(() => {
            store.dispatch(hideErrors());
          }, 2000);
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
        }, 2000);
        return;
      }

      if (firstSignupPassword !== secondSignupPassword) {
        store.dispatch(signupError('Les mots de passe ne sont pas identiques'));
        setTimeout(() => {
          store.dispatch(hideErrors());
        }, 2000);
        return;
      }

      axios.post(`${FETCH_URL}/v1/signup`, {
        nickname: signupPseudo,
        email: signupEmail,
        password: firstSignupPassword,
      })
        .then((res) => {
          console.log('res.data :', res.data);
          store.dispatch(signupSuccess(res.data));
        })
        .catch((error) => {
        // console.error('catch error: ', error);
          store.dispatch(signupError(error.toString()));
          setTimeout(() => {
            store.dispatch(hideErrors());
          }, 2000);
        });
      break;

    default:
      next(action);
  }
};
