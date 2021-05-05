import axios from 'axios';
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
        url: 'http://localhost:5000/v1/channel/1',
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
