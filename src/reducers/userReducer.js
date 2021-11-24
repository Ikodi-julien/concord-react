/* eslint-disable no-case-declarations */
import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  DISCONNECT_USER_SUCCESS,
  DISCONNECT_USER_ERROR,
  UPDATE_AUTH_SUCCESS,
} from 'src/actions/authActions';
import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  SET_PROFILE_INPUT_VALUE,
  SET_TAGS_DROPDOWN_VALUE,
  SET_TAGS_DROPDOWN_IDS,
  TOGGLE_ACTIVE_BTN,
  FETCH_MY_PROFILE_SUCCESS,
  // UPDATE_ME_TAGS_SUCCESS,
} from 'src/actions/profileActions';
import {
  GET_USER_SUCCESS,
  FETCH_MY_CHANNELS_SUCCESS,
  FETCH_MY_RECOS_SUCCESS,
  SET_AVATAR,
} from 'src/actions/userActions';

import avatarDefault from 'src/assets/avatarDefault';

const userState = {
  id: -1,
  nickname: '',
  password: '',
  email: '',
  myChannelLinks: [],
  tags: [],
  noTagAlert: 0,
  channels: [],
  recommendedChannels: [],
  nicknameInput: '',
  emailInput: '',
  nicknameInputIsActive: false,
  emailInputIsActive: false,
  tagDropDownValue: [],
  tagDropDownIds: [],
  avatarFile: '',
  avatar: avatarDefault,
};

const reducer = (stateActuel = userState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log('userReducer', action);

      return {
        ...stateActuel,
        id: action.user.id,
        nickname: action.user.nickname,
        nicknameInput: action.user.nickname,
        password: '',
        email: action.user.email,
        emailInput: action.user.email,
      };

    case SIGNUP_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        password: action.password,
        email: action.email,
      };

    case DISCONNECT_USER_SUCCESS:
      return {
        ...userState,
      };

    case DISCONNECT_USER_ERROR:
      return {
        ...userState,
      };

    case SET_PROFILE_INPUT_VALUE:
      // console.log(action);
      return {
        ...stateActuel,
        ...action.value,
      };

    case UPDATE_PROFILE:
      // console.log(action);
      // TODO bouton loading en attente de UPDATE_PROFILE_SUCCESS
      return {
        ...stateActuel,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...stateActuel,
      };

    case UPDATE_AUTH_SUCCESS:
      return {
        ...stateActuel,
        ...action.data,
        nickname: action.data.nickname,
        email: action.data.email,
        nicknameInput: action.data.nickname,
        emailInput: action.data.email,
      };

    case FETCH_MY_PROFILE_SUCCESS:
      // console.log(action);

      return {
        ...stateActuel,
        avatar: action.data.avatar ? action.data.avatar : avatarDefault,
        tags: action.data.tags,
        tagDropDownValue: action.data.tags.map((tag) => tag.name),
        tagDropDownIds: action.data.tags.map((tag) => tag.id),
      };

    case SET_TAGS_DROPDOWN_VALUE:
      // console.log(action);
      return {
        ...stateActuel,
        tagDropDownValue: action.value,
      };

    case SET_TAGS_DROPDOWN_IDS:
      // console.log(action);
      return {
        ...stateActuel,
        tagDropDownIds: action.value,
      };

    case TOGGLE_ACTIVE_BTN:
      return {
        ...stateActuel,
        [action.value]: !stateActuel[action.value],
      };

    case FETCH_MY_CHANNELS_SUCCESS:
      // console.log(action);
      if (stateActuel.channels === action.value) {
        return {
          ...stateActuel,
        };
      }
      return {
        ...stateActuel,
        channels: action.value,
        myChannelLinks: action.value.map((channel) => ({
          ...channel,
          name: channel.title,
        })),
      };

    case FETCH_MY_RECOS_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        recommendedChannels: action.value,
        noTagAlert: action.value.length,
      };

    case GET_USER_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        ...action.value,
        nicknameInput: action.value.nickname,
        emailInput: action.value.email,
      };

    case SET_AVATAR:
      return {
        ...stateActuel,
        avatar: action.value,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
