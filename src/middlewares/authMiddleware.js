/* eslint-disable max-len */
import axios from 'axios';
import { API_URL } from 'src/settings';
import {
  SUBMIT_LOGIN_FORM,
  loginSuccess,
  SUBMIT_SIGNUP_FORM,
  signupSuccess,
  signupError,
  DISCONNECT_USER,
  disconnectUserSuccess,
  submitLoginForm,
  SUBMIT_FORGOT_PASS_FORM,
  forgotPassInfo,
  SUBMIT_UPDATE_PASSWORD,
  updatePassInfo,
  setDataFromGoogle,
  googleLogin,
  GOOGLE_LOGIN,
  LOGIN_SUCCESS,
} from 'src/actions/authActions';
import { hideInfos, setFirstLogin } from 'src/actions/appActions';
import { GET_USER_INFOS, getUserSuccess } from 'src/actions/userActions';
import { SUBMIT_DELETE_ACCOUNT } from 'src/actions/profileActions';
import handleAPIError from '../selectors/handleAPIError';
import { submitSignupForm } from '../actions/authActions';

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

      axios
        .post(
          `${API_URL}/v2/login`,
          {
            email: loginEmail.toLowerCase(),
            password: loginPassword,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          // console.log(res);
          store.dispatch(loginSuccess(res.data));
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
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
        store.dispatch(
          signupError('Un ou plusieurs champs ne sont pas remplis'),
        );
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        break;
      }

      if (firstSignupPassword !== secondSignupPassword) {
        store.dispatch(signupError('Les mots de passe ne sont pas identiques'));
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        break;
      }

      axios
        .post(`${API_URL}/v2/signup`, {
          nickname: signupPseudo,
          email: signupEmail.toLowerCase(),
          password: firstSignupPassword,
        })
        .then((res) => {
          // console.log('res.data :', res.data);
          // There try to login right after a signup success
          store.dispatch(
            signupSuccess({
              password: store.getState().auth.firstSignupPassword,
              email: res.data.email,
            }),
          );
          store.dispatch(setFirstLogin(true));
          setTimeout(() => {
            store.dispatch(submitLoginForm());
          }, 30);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case DISCONNECT_USER:
      next(action);
      axios
        .post(`${API_URL}/v2/logout`, {}, { withCredentials: true })
        .then((res) => {
          store.dispatch(disconnectUserSuccess());
          // console.log('res.data :', res.data);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case GET_USER_INFOS:
      // console.log(action);
      next(action);

      axios
        .get(`${API_URL}/v2/me`, { withCredentials: true })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(getUserSuccess(res.data));
        })
        .catch(async (error) => {
          handleAPIError(error, store, action.type);
          // Try googleConnect cookie
          try {
            const dataGoogle = document.cookie
              .split('; ').find((row) => row.startsWith('dataGoogle=')).split('=')[1];

            if (dataGoogle) {
              const decoded = atob(dataGoogle);
              setTimeout(() => {
                console.log('delete cookie');
                document.cookies.set({
                  domain: 'concord.ikodi.eu',
                  expirationDate: 1,
                  name: 'dataGoogle',
                  path: '/',
                  value: 'le néant !',
                });
              }, 2000);

              store.dispatch(setDataFromGoogle(JSON.parse(decoded)));
              store.dispatch(googleLogin());
            }
          }
          catch (err) {
            console.warn(err);
          }
        });
      break;

    case GOOGLE_LOGIN:
      next(action);

      axios
        .post(
          `${API_URL}/v2/login`,
          {
            email: loginEmail.toLowerCase(),
            password: loginPassword,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          // console.log(res);
          store.dispatch(loginSuccess(res.data));
        })
        .catch((error) => {
          store.dispatch(submitSignupForm());
        });
      break;

    case SUBMIT_FORGOT_PASS_FORM:
      // console.log(action);
      axios
        .post(`${API_URL}/v2/forgot-pwd`, {
          email: forgotPasswordEmailInput,
        })
        .then((res) => {
          console.log(res.data);
          store.dispatch(forgotPassInfo("L'email a bien été envoyé"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case SUBMIT_UPDATE_PASSWORD:
      // console.log(action);
      next(action);
      // check for inputs consistency
      if (!updatePassFormOld || !updatePassFormNew1 || !updatePassFormNew2) {
        store.dispatch(
          updatePassInfo('Un ou plusieurs champs ne sont pas remplis'),
        );
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      if (updatePassFormNew1 !== updatePassFormNew2) {
        store.dispatch(
          updatePassInfo('Les mots de passe ne sont pas identiques'),
        );
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      axios
        .patch(
          `${API_URL}/v2/me`,
          {
            password: updatePassFormOld,
            newPassword: updatePassFormNew1,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(updatePassInfo(res.data.message));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case SUBMIT_DELETE_ACCOUNT:
      axios
        .delete(`${API_URL}/v2/me`, {
          withCredentials: true,
        })
        .then(() => {
          store.dispatch(disconnectUserSuccess());
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    default:
      next(action);
  }
};
