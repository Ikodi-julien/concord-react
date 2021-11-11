import {
  appInfo,
  hideInfos,
  FETCH_NAV_DATA,
} from 'src/actions/appActions';
import {
  FETCH_MY_PROFILE,
  UPDATE_PROFILE,
  SUBMIT_DELETE_ACCOUNT,
} from 'src/actions/profileActions';
import {
  FETCH_CHANNEL,
  UPDATE_CHANNEL_USERS,
} from 'src/actions/channelActions';
import {
  FETCH_MY_CHANNELS,
  FETCH_MY_RECOS,
  DELETE_FROM_MY_CHANNELS,
  UPDATE_AVATAR,
  GET_USER_INFOS,
} from 'src/actions/userActions';
import {
  SUBMIT_LOGIN_FORM,
  SUBMIT_SIGNUP_FORM,
  DISCONNECT_USER,
  SUBMIT_FORGOT_PASS_FORM,
  SUBMIT_UPDATE_PASSWORD,
  disconnectUser,
  loginError,
  signupError,
  disconnectUserError,
  forgotPassInfo,
  updatePassInfo,
} from 'src/actions/authActions';

export default (error, store, actionType) => {
  const errorTimer = 2500;
  let errorMsg;

  console.warn('handleAPIError: ', actionType, error.toString());

  switch (actionType) {
    case FETCH_CHANNEL
    || FETCH_MY_CHANNELS
    || FETCH_MY_RECOS
    || FETCH_NAV_DATA
    || FETCH_MY_PROFILE
    || UPDATE_PROFILE
    || UPDATE_CHANNEL_USERS
    || DELETE_FROM_MY_CHANNELS
    || UPDATE_AVATAR
      :
      if (error.toString().includes('401')) { // Token expired
        store.dispatch(appInfo('Les informations d\'identification ne sont plus valables, vous allez être redirigé vers la page d\'accueil pour vous reconnecter'));

        setTimeout(() => {
          store.dispatch(hideInfos());
          store.dispatch(disconnectUser());
        }, errorTimer);
        break;
      }

      store.dispatch(appInfo(`Le serveur a renvoyé une erreur: ${error.toString()}`));

      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);

      break;

    case SUBMIT_LOGIN_FORM:

      if (error.toString().includes('401')) errorMsg = 'Désolé, on ne connait pas ces identifiants';
      if (error.toString().includes('412')) errorMsg = 'Il manque une information, email ? password ?';
      if (error.toString().includes('409')) errorMsg = "Informations d'identification invalides";
      if (errorMsg) {
        store.dispatch(loginError(errorMsg));
      }
      else {
        store.dispatch(loginError(error.toString()));
      }
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    case SUBMIT_SIGNUP_FORM:
      store.dispatch(signupError(error.response.data.message));
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    case DISCONNECT_USER:
      store.dispatch(disconnectUserError(error.toString()));
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    case GET_USER_INFOS:
      /* --- */
      break;

    case SUBMIT_FORGOT_PASS_FORM:
      store.dispatch(forgotPassInfo(error.toString()));
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    case SUBMIT_UPDATE_PASSWORD:
      if (error.toString().includes('409')) {
        errorMsg = 'Mot de passe incorrect';
      }
      if (errorMsg) {
        store.dispatch(loginError(errorMsg));
      }
      else {
        store.dispatch(loginError(error.toString()));
      }
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    case SUBMIT_DELETE_ACCOUNT:
      store.dispatch(disconnectUserError(error.toString()));
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    default:
      if (typeof error.response !== 'undefined') {
        store.dispatch(appInfo(error.response.data.message));
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
      }
  }
};
