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
  SUBMIT_FORGOT_PASS_FORM,
  forgotPassInfo,
  SUBMIT_UPDATE_PASSWORD,
  updatePassInfo,
} from 'src/actions/authActions';
import {
  hideInfos,
  setFirstLogin,
} from 'src/actions/appActions';
import {
  GET_USER_INFOS,
  getUserSuccess,
} from 'src/actions/userActions';
import {
  SUBMIT_DELETE_ACCOUNT,
} from 'src/actions/profileActions';

export default (store) => (next) => (action) => {
  const {
    loginEmail,
    loginPassword,
    signupEmail,
    signupPseudo,
    firstSignupPassword,
    secondSignupPassword,
    forgotPasswordEmailInput,
    updatePassFormOld,
    updatePassFormNew1,
    updatePassFormNew2,
  } = store.getState().auth;

  const errorTimer = 2500;

  switch (action.type) {
    case SUBMIT_LOGIN_FORM:
      // console.log(action);
      next(action);

      axios.post(`${FETCH_URL}/v1/login`, {
        email: loginEmail.toLowerCase(),
        password: loginPassword,
      },
      {
        withCredentials: true,
      })
        .then((res) => {
          // console.log(res);
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
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case SUBMIT_SIGNUP_FORM:
      // console.log(action);
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
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      if (firstSignupPassword !== secondSignupPassword) {
        store.dispatch(signupError('Les mots de passe ne sont pas identiques'));
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      axios.post(`${FETCH_URL}/v1/signup`, {
        nickname: signupPseudo,
        email: signupEmail.toLowerCase(),
        password: firstSignupPassword,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(signupSuccess({
            password: store.getState().auth.firstSignupPassword,
            email: res.data.email,
          }));
          store.dispatch(setFirstLogin(true));
          // There you try to log right after a signup success
          setTimeout(() => {
            store.dispatch(submitLoginForm());
          }, 30);
        })
        .catch((error) => {
        // console.error('catch error: ', error);
          store.dispatch(signupError(error.toString()));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case DISCONNECT_USER:
      next(action);
      axios.post(`${FETCH_URL}/v1/logout`, {},
        { withCredentials: true })
        .then((res) => {
          store.dispatch(disconnectUserSuccess());
          // console.log('res.data :', res.data);
        })
        .catch((error) => {
        // console.error('catch error: ', error);
          store.dispatch(disconnectUserError(error.toString()));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case GET_USER_INFOS:
      // console.log(action);
      next(action);

      axios.get(`${FETCH_URL}/v1/me`,
        { withCredentials: true })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(getUserSuccess(res.data));
        })
        .catch((error) => {
          console.error('catch error: ', error);
        });

      break;

    case SUBMIT_FORGOT_PASS_FORM:
      // console.log(action);
      axios.post(`${FETCH_URL}/v1/forgot-pwd`,
        {
          email: forgotPasswordEmailInput,
        })
        .then((res) => {
          console.log(res.data);
          store.dispatch(forgotPassInfo('L\'email a bien été envoyé'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(forgotPassInfo('Aïe, ça n\'a pas fonctionné, désolé'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case SUBMIT_UPDATE_PASSWORD:
      console.log(action);
      next(action);
      // check for inputs consistency
      if (
        !updatePassFormOld
          || !updatePassFormNew1
          || !updatePassFormNew2
      ) {
        store.dispatch(updatePassInfo('Un ou plusieurs champs ne sont pas remplis'));
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      if (updatePassFormNew1 !== updatePassFormNew2) {
        store.dispatch(updatePassInfo('Les mots de passe ne sont pas identiques'));
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      axios.patch(`${FETCH_URL}/v1/me`, {
        password: updatePassFormOld,
        newPassword: updatePassFormNew1,
      }, {
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(updatePassInfo(res.data.message));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        })
        .catch((error) => {
          console.error('catch error: ', error);
          let msg = 'Quelque chose n\'a pas fonctionné, désolé';
          if (error.toString().includes('409')) {
            msg = 'The current password is incorrect';
          }
          store.dispatch(updatePassInfo(msg));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case SUBMIT_DELETE_ACCOUNT:
      axios.delete(`${FETCH_URL}/v1/me`, {
        withCredentials: true,
      })
        .then(() => {
          store.dispatch(disconnectUserSuccess());
        })
        .catch((error) => {
          // console.error('catch error: ', error);
          store.dispatch(disconnectUserError(error.toString()));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    default:
      next(action);
  }
};
