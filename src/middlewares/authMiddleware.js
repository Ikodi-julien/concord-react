import axios from 'axios';
import { FETCH_URL } from 'src/vars';
import {
  SUBMIT_LOGIN_FORM,
  loginSuccess,
  loginError,
} from 'src/actions/loginsignupActions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN_FORM:
      console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}/v1/login`,
        method: 'POST',
      })
        .then((res) => {
          console.log('res.data :', res.data);
          store.dispatch(loginSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(loginError());
        });
      break;

    default:
      next(action);
  }
};
