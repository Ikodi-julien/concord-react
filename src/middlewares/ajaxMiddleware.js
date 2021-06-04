import axios from 'axios';
import { API_URL } from 'src/settings';
import {
  FETCH_MY_PROFILE,
  fetchMyProfileSuccess,
  UPDATE_PROFILE,
  updateProfileSuccess,
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
} from 'src/actions/userActions';
import {
  FETCH_NAV_DATA,
  fetchNavDataError,
  fetchNavDataSuccess,
  setFirstLogin,
  appInfo,
  hideInfos,
} from 'src/actions/appActions';

export default (store) => (next) => (action) => {
  const { nicknameInput, emailInput, tagDropDownIds, avatar } = store.getState().user;
  const { id } = store.getState().channel;
  const errorTimer = 2000;

  switch (action.type) {
    case FETCH_CHANNEL:
      // console.log(action);
      next(action);

      axios({
        url: `${API_URL}/v1/channel/${action.channelId}`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchChannelSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(appInfo("Aïe l'API a renvoyé une erreur"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case FETCH_MY_CHANNELS:
      // console.log(action);
      next(action);

      axios({
        url: `${API_URL}/v1/me/channels`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchMyChannelsSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(appInfo('Aïe, un problème est survenu...'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case FETCH_MY_RECOS:
      // console.log(action);
      next(action);

      axios({
        url: `${API_URL}/v1/me/recommended`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(fetchMyRecosSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(appInfo('Aïe, un problème est survenu...'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case FETCH_NAV_DATA:
      // console.log(action);
      next(action);

      // Fetch tags then channels
      axios({
        url: `${API_URL}/v1/tags/channels`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          const tags = res.data;

          axios({
            url: `${API_URL}/v1/channels`,
            method: 'GET',
            withCredentials: true,
          }).then((response) => {
            const channels = response.data;
            store.dispatch(fetchNavDataSuccess({ tags, channels }));
          });
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(fetchNavDataError());
          store.dispatch(appInfo("Aïe l'API a renvoyé une erreur"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case FETCH_MY_PROFILE:
      next(action);
      console.log(action);

      axios
        .get(`${API_URL}/v1/me`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          store.dispatch(fetchMyProfileSuccess(res.data));

          store.dispatch(setFirstLogin(false));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(appInfo("Aïe, ça n'a pas fonctionné, désolé"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case UPDATE_PROFILE:
      next(action);
      console.log(action);

      axios
        .put(
          `${API_URL}/v1/me`,
          {
            email: emailInput,
            nickname: nicknameInput,
            tags: tagDropDownIds,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          console.log(res.data);
          store.dispatch(updateProfileSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(appInfo("Aïe, ça n'a pas fonctionné, désolé"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });

      break;

    case SOCKET_JOIN_CONFIRM:
      next(action);
      store.dispatch(fetchMyChannels());
      break;

    case UPDATE_CHANNEL_USERS:
      next(action);

      axios({
        url: `${API_URL}/v1/channel/${id}`,
        method: 'GET',
        withCredentials: true,
      })
        .then((res) => {
          // console.log('res.data :', res.data);
          store.dispatch(updateChannelUsersSuccess(res.data));
        })
        .catch((error) => {
          console.log('catch error: ', error);
          store.dispatch(appInfo("Aïe, ça n'a pas fonctionné, désolé"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case DELETE_FROM_MY_CHANNELS:
      // console.log(action);
      axios
        .delete(`${API_URL}/v1/me/channels/${action.value}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          store.dispatch(fetchMyChannels());
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(appInfo("Aïe, ça n'a pas fonctionné, désolé"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });
      break;

    case UPDATE_AVATAR:
      next(action);
      console.log(action);

      axios
        .put(
          `${API_URL}/v1/me/avatar`,
          {
            avatar,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          console.log(res.data);
          store.dispatch(appInfo('avatar mis à jour'));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(appInfo("Aïe, ça n'a pas fonctionné, désolé"));
          setTimeout(() => {
            store.dispatch(hideInfos());
          }, errorTimer);
        });

      break;

    default:
      next(action);
  }
};
