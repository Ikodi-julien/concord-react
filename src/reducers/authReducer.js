/* Here there's only data and actions regarding login, for instance pseudo or favs are mentionned in 'userReducer' */

import { LOGIN_SUCCESS, LOGIN_ERROR } from 'src/actions/loginsignupActions';

const authState = {
  password: 'bob',
  email: 'jefume@despieds.fr',
  token: '3568dgfbh854dwqfb4wdfb',
};

const reducer = (stateActuel = authState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action);
      return {
        ...stateActuel,
      };

    case LOGIN_ERROR:
      console.log(action);
      return {
        ...stateActuel,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
