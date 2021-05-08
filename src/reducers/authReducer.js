/* Here there's only data and actions regarding login, for instance pseudo or favs are mentionned in 'userReducer' */

import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_UP_SUCCESS,
} from 'src/actions/loginsignupActions';
import { SIGNUP_SUCCESS } from '../actions/loginsignupActions';

const authState = {
  password: '',
  email: '',
  token: '',
};

const reducer = (stateActuel = authState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action);
      return {
        ...stateActuel,
      };

    case SIGNUP_SUCCESS:
      console.log(action);
      return {
        password: action.user.password,
        email: action.user.email,
        token: '',
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
