/* eslint-disable max-len */
import {
  SET_LOGIN_MODAL,
  SET_SIGNUP_MODAL,
  SET_INPUT_VALUE,
  SET_FIRST_LOGIN,
  HIDE_ERRORS,
} from 'src/actions/appActions';
import {
  SUBMIT_SIGNUP_FORM,
  SUBMIT_LOGIN_FORM,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  DISCONNECT_USER_SUCCESS,
  DISCONNECT_USER_ERROR,
} from 'src/actions/loginsignupActions';
import {
  GET_USER_INFOS,
  GET_USER_SUCCESS,
} from 'src/actions/userActions';

const authState = {
  isUserLoggued: false,
  isShowLoginModal: false,
  isShowSignupModal: false,
  loginButtonIsLoading: false,
  loginEmail: '',
  loginPassword: '',
  signupButtonIsLoading: false,
  signupPseudo: '',
  signupEmail: '',
  firstSignupPassword: '',
  secondSignupPassword: '',
  signupErrorIsVisible: false,
  loginErrorIsVisible: false,
  firstLogin: false,
};

const reducer = (stateActuel = authState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_MODAL:
      // console.log(action);
      return {
        ...stateActuel,
        isShowLoginModal: action.value,
      };

    case SET_SIGNUP_MODAL:
      // console.log(action);
      return {
        ...stateActuel,
        isShowSignupModal: action.value,
      };

    case SET_INPUT_VALUE:
      // console.log(action);
      return {
        ...stateActuel,
        [action.objectInput.name]: action.objectInput.value,
      };

    case SUBMIT_SIGNUP_FORM:
      return {
        ...stateActuel,
        signupButtonIsLoading: true,
      };

    case SUBMIT_LOGIN_FORM:
      return {
        ...stateActuel,
        loginButtonIsLoading: true,
      };

    case SIGNUP_ERROR:
      return {
        ...stateActuel,
        signupErrorIsVisible: true,
        signupButtonIsLoading: false,
      };

    case SIGNUP_SUCCESS:
      console.log(action);
      return {
        ...stateActuel,
        signupButtonIsLoading: false,
        isShowSignupModal: false,
        loginEmail: action.user.email,
        loginPassword: action.user.password,
      };

    case LOGIN_ERROR:
      // console.log(action);
      return {
        ...stateActuel,
        loginErrorIsVisible: true,
        loginButtonIsLoading: false,
      };

    case LOGIN_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        isUserLoggued: true,
        isShowLoginModal: false,
        isShowSignupModal: false,
        loginEmail: '',
        loginPassword: '',
        signupPseudo: '',
        signupEmail: '',
        firstSignupPassword: '',
        secondSignupPassword: '',
        loginButtonIsLoading: false,
      };

    case DISCONNECT_USER_ERROR:
      return {
        ...authState,
        isUserLoggued: false,
      };

    case DISCONNECT_USER_SUCCESS:
      return {
        ...authState,
        isUserLoggued: false,
      };

    case SET_FIRST_LOGIN:
      return {
        ...stateActuel,
        firstLogin: action.value,
      };

    case GET_USER_INFOS:
      console.log(action);
      return {
        ...stateActuel,
      };

    case GET_USER_SUCCESS:
      console.log(action);
      return {
        ...stateActuel,
        isUserLoggued: true,
      };

    case HIDE_ERRORS:
      return {
        ...stateActuel,
        signupErrorIsVisible: false,
        loginErrorIsVisible: false,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
