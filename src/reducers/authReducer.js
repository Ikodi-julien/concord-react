/* Here there's only data and actions regarding login, for instance pseudo or favs are mentionned in 'userReducer' */

import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  DISCONNECT_USER_SUCCESS,
} from 'src/actions/loginsignupActions';

const authState = {
  password: '',
  email: '',
  token: '',
};

const reducer = (stateActuel = authState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        password: action.user.password,
        email: action.user.email,
        token: '',
      };

    case SIGNUP_SUCCESS:
      // console.log(action);
      return {
        password: action.password,
        email: action.email,
        token: '',
      };

    case DISCONNECT_USER_SUCCESS:
      return {
        ...authState,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
