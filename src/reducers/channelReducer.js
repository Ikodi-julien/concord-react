import {
  CHANNEL_INPUT_CHANGE,
  CHANNEL_FORM_SUBMIT,
  FETCH_CHANNEL,
  FETCH_CHANNEL_ERROR,
  FETCH_CHANNEL_SUCCESS,
  MESSAGE_RECEIVED,
  SOCKET_JOIN_CONFIRM,
  TOGGLE_MY_CHANNELS,
  TOGGLE_USERS_IN_CHANNEL,
  USER_LEAVE_CHANNEL,
  USER_JOIN_CHANNEL,
} from 'src/actions/channelActions.js';

const channelState = {
  id: -2,
  title: '',
  messages: [

  ],
  users: [],
  inputForm: '',
  isLoading: false,
  error: false,
  showMychannels: false,
  showUsersInChannel: false,
  infoMessage: '',
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
        messages: [{
          id: -1,
          nickname: 'TeaCup',
          content: `On parle de ${action.channel.title}... ou pas !`,
        }],
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
      // Add the received message to message list.
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

    case SOCKET_JOIN_CONFIRM:

      return {
        ...stateActuel,
        infoMessage: `Bienvenue sur le salon ${stateActuel.title}`,
      };

    case USER_LEAVE_CHANNEL:
      // Reinitialized state
      return {
        ...channelState,
      };

    case USER_JOIN_CHANNEL:
      console.log(action);
      // TODO afficher l'info sur le user qui join
      return {
        ...stateActuel,
        ...action.channel,
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
