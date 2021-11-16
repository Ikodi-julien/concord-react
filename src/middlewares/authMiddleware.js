/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import axios from 'axios';
import { AUTH_URL } from 'src/settings';
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
  setDataFromGoogle,
  googleLogin,
  GOOGLE_LOGIN,
  SUBMIT_UPDATE_AUTH_CREDENTIALS,
  updateAuthSuccess,
} from 'src/actions/authActions';
import { hideInfos, setFirstLogin, appInfo } from 'src/actions/appActions';
import { GET_USER_INFOS, getUserSuccess, deleteConcordAccount } from 'src/actions/userActions';
import {
  SUBMIT_DELETE_AUTH_ACCOUNT,
  fetchMyProfile,
} from 'src/actions/profileActions';
import handleAPIError from '../selectors/handleAPIError';
import { submitSignupForm } from '../actions/authActions';
import { updateProfile } from '../actions/profileActions';

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
    firstLogin,
    updateNickNameAndMailPassword,
    updateMailNew,
    updateNicknameNew,
  } = store.getState().auth;

  const { emailInput, nicknameInput } = store.getState().user;
  const errorTimer = 2500;

  switch (action.type) {
    case SUBMIT_LOGIN_FORM:
      // console.log(action);
      next(action);

      axios
        .post(
          `${AUTH_URL}/login`,
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
          // Set profile in concord DB
          if (firstLogin) {
            store.dispatch(setFirstLogin(false));
          }
          store.dispatch(fetchMyProfile());
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
        .post(`${AUTH_URL}/signup`, {
          nickname: signupPseudo,
          email: signupEmail.toLowerCase(),
          password: firstSignupPassword,
        })
        .then((res) => {
          // need to login
          store.dispatch(setFirstLogin(true));
          store.dispatch(signupSuccess({
            id: res.data.id,
            nickname: signupPseudo,
            email: signupEmail.toLowerCase(),
            password: firstSignupPassword,
          }));
          store.dispatch(submitLoginForm());
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case DISCONNECT_USER:
      next(action);
      axios
        .post(`${AUTH_URL}/logout`, {}, { withCredentials: true })
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
        .get(`${AUTH_URL}/me`, { withCredentials: true })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchMyProfile());
          store.dispatch(getUserSuccess(res.data));
        })
        .catch(async (error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case GOOGLE_LOGIN:
      next(action);

      axios
        .post(
          `${AUTH_URL}/login`,
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
        .post(`${AUTH_URL}/forgot-pwd`, {
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
          appInfo('Un ou plusieurs champs ne sont pas remplis'),
        );
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      if (updatePassFormNew1 !== updatePassFormNew2) {
        store.dispatch(
          appInfo('Les mots de passe ne sont pas identiques'),
        );
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
        return;
      }

      axios
        .put(
          `${AUTH_URL}/me/password`,
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
          store.dispatch(appInfo(res.data.message));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case SUBMIT_DELETE_AUTH_ACCOUNT:
      axios
        .delete(`${AUTH_URL}/me/credentials`, {
          withCredentials: true,
        })
        .then(() => {
          store.dispatch(deleteConcordAccount());
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case SUBMIT_UPDATE_AUTH_CREDENTIALS:
      next(action);
      console.log(action);

      axios
        .put(
          `${AUTH_URL}/me/credentials`,
          {
            email: updateMailNew,
            nickname: updateNicknameNew,
            password: updateNickNameAndMailPassword,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          console.log(res.data);
          store.dispatch(updateAuthSuccess({
            email: updateMailNew,
            nickname: updateNicknameNew,
          }));
          store.dispatch(updateProfile());
          store.dispatch(appInfo('profil mis à jour'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, 2000);
        })
        .catch((error) => {
          console.log('ici');
          handleAPIError(error, store, action.type);
        });
      break;

    default:
      next(action);
  }
};
