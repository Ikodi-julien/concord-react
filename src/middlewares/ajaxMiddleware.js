import axios from 'axios';
import { BASE_URL } from 'src/settings';
import handlAPIErrors from 'src/selectors/handleAPIError';
import {
  FETCH_MY_PROFILE,
  fetchMyProfileSuccess,
  UPDATE_PROFILE,
  updateProfileSuccess,
  UPDATE_ME_TAGS,
  updateTagsSuccess,
} from 'src/actions/profileActions';
import {
  FETCH_CHANNEL,
  fetchChannelSuccess,
  SOCKET_JOIN_CONFIRM,
  UPDATE_CHANNEL_USERS,
  updateChannelUsersSuccess,
} from 'src/actions/channelActions';
import {
  FETCH_MY_CHANNELS,
  fetchMyChannels,
  fetchMyChannelsSuccess,
  FETCH_MY_RECOS,
  fetchMyRecosSuccess,
  DELETE_FROM_MY_CHANNELS,
  UPDATE_AVATAR,
  DELETE_CONCORD_ACCOUNT,
} from 'src/actions/userActions';
import {
  FETCH_NAV_DATA,
  fetchNavDataError,
  fetchNavDataSuccess,
  appInfo,
  hideInfos,
} from 'src/actions/appActions';
import handleAPIError from '../selectors/handleAPIError';
import { disconnectUserSuccess } from '../actions/authActions';
import { fetchMyProfile } from '../actions/profileActions';

export default (store) => (next) => (action) => {
  const {
    tagDropDownIds, avatar,
  } = store.getState().user;
  const { id } = store.getState().channel;

  switch (action.type) {
    case FETCH_CHANNEL:
      // console.log(action);
      next(action);

      axios({
        url: `${BASE_URL}/channel/${action.channelId}`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchChannelSuccess(res.data));
        })
        .catch((error) => {
          handlAPIErrors(error, store, action.type);
        });
      break;

    case FETCH_MY_CHANNELS:
      // console.log(action);
      next(action);

      axios({
        url: `${BASE_URL}/me/channels`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchMyChannelsSuccess(res.data));
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case FETCH_MY_RECOS:
      // console.log(action);
      next(action);

      axios({
        url: `${BASE_URL}/me/recommended`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchMyRecosSuccess(res.data));
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case FETCH_NAV_DATA:
      // console.log(action);
      next(action);
      // Fetch tags then channels
      axios({
        url: `${BASE_URL}/tags/channels`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          const tags = res.data;
          axios({
            url: `${BASE_URL}/channels`,
            method: 'GET',
            withCredentials: true,
          }).then((response) => {
            const channels = response.data;
            store.dispatch(fetchNavDataSuccess({ tags, channels }));
          });
        })
        .catch((error) => {
          store.dispatch(fetchNavDataError());
          handleAPIError(error, store, action.type);
        });
      break;

    case FETCH_MY_PROFILE:
      next(action);
      // console.log(action);
      axios
        .get(`${BASE_URL}/me`, {
          withCredentials: true,
        })
        .then((res) => {
          store.dispatch(fetchMyProfileSuccess(res.data));
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case UPDATE_PROFILE:
      next(action);
      console.log(action);

      axios
        .put(
          `${BASE_URL}/me`,
          {},
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          // console.log(res.data);
          store.dispatch(updateProfileSuccess());
          store.dispatch(appInfo('profil mis à jour'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, 2000);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });

      break;

    case UPDATE_ME_TAGS:
      next(action);
      console.log(action);

      axios
        .put(
          `${BASE_URL}/me/tags`, {
            tags: tagDropDownIds,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          // console.log(res.data);
          store.dispatch(fetchMyProfile());
          store.dispatch(appInfo('profil mis à jour'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, 2000);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });

      break;

    case SOCKET_JOIN_CONFIRM:
      next(action);
      store.dispatch(fetchMyChannels());
      break;

    case UPDATE_CHANNEL_USERS:
      next(action);

      axios({
        url: `${BASE_URL}/channel/${id}`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(updateChannelUsersSuccess(res.data));
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    case DELETE_FROM_MY_CHANNELS:
      // console.log(action);
      axios
        .delete(`${BASE_URL}/me/channels/${action.value}`, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(fetchMyChannels());
        })
        .catch((err) => {
          handleAPIError(err, store, action.type);
        });
      break;

    case UPDATE_AVATAR:
      next(action);
      // console.log(action);

      axios
        .put(
          `${BASE_URL}/me/avatar`,
          {
            avatar,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          // console.log(res.data);
          store.dispatch(appInfo('avatar mis à jour'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, 2000);
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });

      break;

    case DELETE_CONCORD_ACCOUNT:
      axios
        .delete(`${BASE_URL}/me`, {
          withCredentials: true,
        })
        .then(() => {
          store.dispatch(disconnectUserSuccess());
        })
        .catch((error) => {
          handleAPIError(error, store, action.type);
        });
      break;

    default:
      next(action);
  }
};
