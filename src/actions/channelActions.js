export const FETCH_CHANNEL = 'Le composant Channel est chargé, requête à l\'API';
export const FETCH_CHANNEL_SUCCESS = 'L\'API a renvoyé les infos du channel';
export const FETCH_CHANNEL_ERROR = 'L\'API renvoie une erreur';

export const CHANNEL_CONNECT = "Le composant channel est chargé, on se connecte au socket";
export const CHANNEL_INPUT_CHANGE = "Changement dans l'input du form de la page Channel";
export const CHANNEL_FORM_SUBMIT = "L'utilisateur valide le formulaire dans son channel";

export const MESSAGE_RECEIVED = 'On reçoit un nouveau message';


export const fetchChannel = (channelId) => ({
  type: FETCH_CHANNEL,
  route: `channels/${channelId}`
})

export const fetchChannelSuccess = (channel) => ({
  type: FETCH_CHANNEL_SUCCESS,
  channel
})

export const fetchChannelError = () => ({ type: FETCH_CHANNEL_ERROR })
export const channelFormSubmit = () => ({ type: CHANNEL_FORM_SUBMIT })
export const channelConnect = () => ({ type: CHANNEL_CONNECT })

export const setInputValue = (inputObject) => ({
  type: CHANNEL_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value
})

export const messageReceived = (message) => ({
  type: MESSAGE_RECEIVED,
  message,
});
