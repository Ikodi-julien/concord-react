import axios from 'axios';
import { FETCH_URL } from 'src/vars';
import {
  FETCH_CHANNEL,
  fetchChannelError,
  fetchChannelSuccess,
} from '../actions/channelActions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CHANNEL:
      console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}`,
        method: 'GET',
      })
        .then((res) => {
          console.log('res.data :', res.data);
          store.dispatch(fetchChannelSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(fetchChannelError());
        });
      break;

    default:
      next(action);
  }
};
