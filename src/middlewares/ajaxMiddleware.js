import axios from 'axios';
import { FETCH_URL } from 'src/vars';
import {
  UPDATE_PROFILE,
  updateProfileSuccess,
} from 'src/actions/profileActions';
import {
  FETCH_CHANNEL,
  fetchChannelError,
  fetchChannelSuccess,
  SOCKET_JOIN_CONFIRM,
  UPDATE_CHANNEL_USERS,
  updateChannelUsersSuccess,
  updateChannelUsersError,
} from 'src/actions/channelActions';
import {
  FETCH_MY_CHANNELS,
  fetchMyChannels,
  fetchMyChannelsError,
  fetchMyChannelsSuccess,
  FETCH_MY_RECOS,
  fetchMyRecosError,
  fetchMyRecosSuccess,
} from 'src/actions/userActions';
import {
  FETCH_NAV_DATA,
  fetchNavDataError,
  fetchNavDataSuccess,
} from 'src/actions/appActions';
// import localFakeChannels from './fakeChannels';

export default (store) => (next) => (action) => {
  const { nicknameInput, emailInput, tagDropDownIds } = store.getState().user;
  const { id } = store.getState().channel;

  switch (action.type) {
    case FETCH_CHANNEL:
      // console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}/v1/channel/${action.channelId}`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchChannelSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(fetchChannelError());
        });
      break;

    case FETCH_MY_CHANNELS:
      // console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}/v1/me/channels`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchMyChannelsSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(fetchMyChannelsError());
        });
      break;

    case FETCH_MY_RECOS:
      // console.log(action);
      next(action);

      axios({
        url: `${FETCH_URL}/v1/me/recommended`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchMyRecosSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(fetchMyRecosError());
        });
      break;

    case FETCH_NAV_DATA:
      // console.log(action);
      next(action);

      // Fetch tags then channels
      axios({
        url: `${FETCH_URL}/v1/tags/channels`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          const tags = res.data;

          axios({
            url: `${FETCH_URL}/v1/channels`,
            method: 'GET',
            withCredentials: true,
          })
            .then((response) => {
              const channels = response.data;
              store.dispatch(fetchNavDataSuccess({ tags, channels }));
            });
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(fetchNavDataError());
        });
      break;

    case UPDATE_PROFILE:
      next(action);
      console.log(action);

      axios.put(`${FETCH_URL}/v1/me`, {
        email: emailInput,
        nickname: nicknameInput,
        tags: tagDropDownIds,
      }, {
        withCredentials: true,
      }).then((res) => {
        console.log(res.data);
        store.dispatch(updateProfileSuccess(res.data));
      }).catch((error) => console.log('error', error));

      break;

    case SOCKET_JOIN_CONFIRM:
      next(action);
      store.dispatch(fetchMyChannels());
      break;

    case UPDATE_CHANNEL_USERS:
      next(action);

      axios({
        url: `${FETCH_URL}/v1/channel/${id}`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(updateChannelUsersSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(updateChannelUsersError());
        });
      break;

    default:
      next(action);
  }
};
