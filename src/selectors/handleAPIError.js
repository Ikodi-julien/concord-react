/* eslint-disable quotes */
import { appInfo, hideInfos, FETCH_NAV_DATA } from "src/actions/appActions";
import {
  FETCH_MY_PROFILE,
  UPDATE_PROFILE,
  SUBMIT_DELETE_AUTH_ACCOUNT,
} from "src/actions/profileActions";
import {
  FETCH_CHANNEL,
  UPDATE_CHANNEL_USERS,
} from "src/actions/channelActions";
import {
  FETCH_MY_CHANNELS,
  FETCH_MY_RECOS,
  DELETE_FROM_MY_CHANNELS,
  UPDATE_AVATAR,
  GET_USER_INFOS,
} from "src/actions/userActions";
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
} from "src/actions/authActions";

export default (error, store, actionType) => {
  const errorTimer = 2500;
  let errorMsg;

  console.warn("Error handled: ", actionType, error.toString());

  switch (actionType) {
    case FETCH_CHANNEL:
    case FETCH_MY_CHANNELS:
    case FETCH_MY_RECOS:
    case FETCH_NAV_DATA:
    case FETCH_MY_PROFILE:
    case UPDATE_PROFILE:
    case UPDATE_CHANNEL_USERS:
    case DELETE_FROM_MY_CHANNELS:
    case UPDATE_AVATAR:
      if (error.toString().includes("401")) {
        // Token expired
        store.dispatch(
          appInfo(
            "Les informations d'identification ne sont plus valables, vous allez être redirigé vers la page d'accueil pour vous reconnecter"
          )
        );

        setTimeout(() => {
          store.dispatch(hideInfos());
          store.dispatch(disconnectUser());
        }, errorTimer);
        break;
      }
      if (error.toString().includes("Cannot read properties of undefined ")) {
        // this is a first login after new create account, i need to do better, i know
        // TODO
        break;
      }

      store.dispatch(
        appInfo(`Le serveur a renvoyé une erreur: ${error.toString()}`)
      );

      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);

      break;

    case DISCONNECT_USER:
      store.dispatch(appInfo("Vous êtes déconnecté(e)"));
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
      if (error.toString().includes("409")) {
        errorMsg = "Mot de passe incorrect";
      }
      if (error.toString().includes("409")) {
        errorMsg = "Désolé, il faut vous reconnecter";
      }
      if (errorMsg) {
        store.dispatch(appInfo(errorMsg));
      } else {
        store.dispatch(appInfo(error.toString()));
      }
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    case SUBMIT_DELETE_AUTH_ACCOUNT:
      store.dispatch(disconnectUserError(error.toString()));
      setTimeout(() => {
        store.dispatch(hideInfos());
      }, errorTimer);
      break;

    default:
      if (typeof error.response !== "undefined") {
        store.dispatch(appInfo(error.response.data.message));
        setTimeout(() => {
          store.dispatch(hideInfos());
        }, errorTimer);
      }
  }
};
