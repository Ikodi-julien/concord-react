import axios from 'axios';
import { FETCH_URL } from 'src/vars';
import {
  FETCH_CHANNEL,
  fetchChannelError,
  fetchChannelSuccess,
  UPDATE_CHANNEL,
  updateChannelSuccess,
  updateChannelError,
} from '../actions/channelActions';
import {
  FETCH_NAV_DATA,
  fetchNavDataError,
  fetchNavDataSuccess,
} from '../actions/appActions';
import localFakeChannels from './fakeChannels';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CHANNEL:
      console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}/v1/channel/${action.channelId}`,
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

    case FETCH_NAV_DATA:
      console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}/v1/tags`,
        method: 'GET',
      })
        .then((res) => {
          console.log('res.data :', res.data);
          store.dispatch(fetchNavDataSuccess({ tags: res.data, channels: localFakeChannels }));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(fetchNavDataError());
        });
      break;

    default:
      next(action);
  }
};
