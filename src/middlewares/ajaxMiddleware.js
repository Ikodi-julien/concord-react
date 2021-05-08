import axios from 'axios';
import { FETCH_URL } from 'src/vars';
import {
  FETCH_CHANNEL,
  fetchChannelError,
  fetchChannelSuccess,
} from '../actions/channelActions';
import {
  FETCH_NAV_DATA,
  fetchNavDataError,
  fetchNavDataSuccess,
} from '../actions/appActions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CHANNEL:
      console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}/v1/channel/1`,
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
      // console.log(action);
      // next(action);

      // axios({
      //   url: `${FETCH_URL}/navdata`,
      //   method: 'GET',
      // })
      //   .then((res) => {
      //     console.log('res.data :', res.data);
      //     store.dispatch(fetchNavDataSuccess(res.data));
      //   })
      //   .catch((error) => {
      //     console.log('catch error: ', error);
      //     store.dispatch(fetchNavDataError());
      //   });
      break;
    default:
      next(action);
  }
};
