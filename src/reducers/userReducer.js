/* eslint-disable no-case-declarations */
/* email, password and token are mentionned in authReducer */
import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  DISCONNECT_USER_SUCCESS,
} from 'src/actions/loginsignupActions';
import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  SET_PROFILE_INPUT_VALUE,
  SET_TAGS_DROPDOWN_VALUE,
  SET_TAGS_DROPDOWN_IDS,
  TOGGLE_ACTIVE_BTN,
} from 'src/actions/profileActions';
import {
  GET_USER_SUCCESS,
  FETCH_MY_CHANNELS_SUCCESS,
  FETCH_MY_RECOS_SUCCESS,
} from 'src/actions/userActions';
// import fakeChannels from 'src/middlewares/fakeChannels';

const userState = {
  id: -1,
  nickname: '',
  password: '',
  email: '',
  myChannelLinks: [],
  tags: [],
  channels: [],
  recommendedChannels: [],
  nicknameInput: '',
  emailInput: '',
  nicknameInputIsActive: false,
  emailInputIsActive: false,
  tagDropDownValue: [],
  tagDropDownIds: [],
};

const reducer = (stateActuel = userState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('userReducer', action);
      const myChannelLinks = action.user.channels.map((channel) => ({
        ...channel,
        name: channel.title,
      }));

      const recoList = [];
      const { recommendedChannels } = action.user;
      Object.keys(recommendedChannels).forEach((key) => recoList.push(recommendedChannels[key]));

      return {
        ...stateActuel,
        id: action.user.id,
        nickname: action.user.nickname,
        password: action.user.password,
        email: action.user.email,
        myChannelLinks,
        tags: action.user.tags,
        channels: action.user.channels,
        recommendedChannels: recoList,
        nicknameInput: action.user.nickname,
        emailInput: action.user.email,
        tagDropDownValue: action.user.tags.map((tag) => tag.name),
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

    case SET_PROFILE_INPUT_VALUE:
      console.log(action);
      return {
        ...stateActuel,
        ...action.value,
      };

    case UPDATE_PROFILE:
      console.log(action);
      // TODO bouton loading en attente de UPDATE_PROFILE_SUCCESS
      return {
        ...stateActuel,
      };

    case UPDATE_PROFILE_SUCCESS:
      // console.log(action);
      return {
        ...stateActuel,
        nickname: action.data.nickname,
        email: action.data.email,
        tags: action.data.tags,
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
      console.log(action);
      return {
        ...stateActuel,
        recommendedChannels: action.value,
      };

    case GET_USER_SUCCESS:
      console.log(action);
      return {
        ...stateActuel,
        ...action.value,
        nicknameInput: action.value.nickname,
        emailInput: action.value.email,
        tagDropDownValue: action.value.tags.map((tag) => tag.name),
        tagDropDownIds: action.value.tags.map((tag) => tag.id),
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
