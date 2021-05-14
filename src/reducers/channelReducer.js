import {
  CHANNEL_INPUT_CHANGE,
  CHANNEL_FORM_SUBMIT,
  FETCH_CHANNEL,
  FETCH_CHANNEL_ERROR,
  FETCH_CHANNEL_SUCCESS,
  MESSAGE_RECEIVED,
  TOGGLE_MY_CHANNELS,
  TOGGLE_USERS_IN_CHANNEL,
} from 'src/actions/channelActions.js';

const channelState = {
  id: -1,
  title: '',
  messages: [],
  users: [],
  inputForm: '',
  isLoading: false,
  error: false,
  showMychannels: false,
  showUsersInChannel: false,
};

const reducer = (stateActuel = channelState, action = {}) => {
  switch (action.type) {
    case FETCH_CHANNEL:
      console.log(action);

      return {
        ...stateActuel,
        id: action.channelId,
        isLoading: true,
      };

    case FETCH_CHANNEL_SUCCESS:
      console.log(action);

      return {
        ...stateActuel,
        ...action.channel,
        messages: [],
        isLoading: false,
      };

    case FETCH_CHANNEL_ERROR:
      console.log(action);

      return {
        ...stateActuel,
        isLoading: false,
        error: true,
      };

    case CHANNEL_INPUT_CHANGE:
      console.log(action);

      return {
        ...stateActuel,
        [action.name]: action.value,
      };

    case CHANNEL_FORM_SUBMIT:
      console.log(action);

      return {
        ...stateActuel,
        inputForm: '',
      };

    case MESSAGE_RECEIVED:
      console.log(action);

      return {
        ...stateActuel,
        messages: [
          ...stateActuel.messages,
          {
            id: action.message.id,
            nickname: action.message.user.nickname,
            content: action.message.content,
          },
        ],
      };

    case TOGGLE_MY_CHANNELS:
      return {
        ...stateActuel,
        showMychannels: !stateActuel.showMychannels,
        showUsersInChannel: false,

      };

    case TOGGLE_USERS_IN_CHANNEL:
      return {
        ...stateActuel,
        showUsersInChannel: !stateActuel.showUsersInChannel,
        showMychannels: false,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
