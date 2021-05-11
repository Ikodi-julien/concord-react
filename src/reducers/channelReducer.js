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
  id: 5246,
  title: 'Le channel de test',
  messages: [
    // { id: 1, nickname: 'Bernard', content: 'Tu la connais celle des deux poissons rouge dans un bocal ?' },
    // { id: 2, nickname: 'Bianca', content: 'Non, raconte !' },
    // { id: 3, nickname: 'Belle', content: 'Moi je la connais' },
    // { id: 4, nickname: 'Sébastien', content: "Ouais, ben ils sont en train de tourner depuis un moment et puis d'un seul coup, y'en a un qui dit à l'autre \"J'arrive pas à croire qu'on est déjà jeudi\"" },
  ],
  users: [
    // {
    //   id: 1, nickname: 'Bernard', avatar: '(_;_)', isConnected: true,
    // },
    // {
    //   id: 2, nickname: 'Bianca', avatar: ';o)', isConnected: true,
    // },
    // {
    //   id: 3, nickname: 'Belle', avatar: ':-/', isConnected: false,
    // },
    // {
    //   id: 4, nickname: 'Sébastien', avatar: 'o.0', isConnected: false,
    // },

  ],
  inputForm: 'Je suis le contenu du formulaire',
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
        isLoading: true,
      };

    case FETCH_CHANNEL_SUCCESS:
      console.log(action);

      return {
        ...stateActuel,
        ...action.channel,
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
