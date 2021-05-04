export const CHANNEL_INPUT_CHANGE = "Changement dans l'input du form de la page Channel";
export const setInputValue = (inputObject) => ({
  type: CHANNEL_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value
})

export const FETCH_CHANNEL = 'Au chargement du composant Channel, cette action provoque une requête sur ce channel à l\'API';
export const FETCH_CHANNEL_SUCCESS = 'Les réponses à la requête d\'un channel semblent ok';
export const FETCH_CHANNEL_ERROR = 'FETCH_CHANNEL_ERROR';


export const fetchChannel = (channelId) => ({
  type: FETCH_CHANNEL,
  route: `channels/${channelId}`
})

export const fetchChannelSuccess = (channel) => ({
  type: FETCH_CHANNEL_SUCCESS,
  channel
})

export const fetchChannelError = () => ({
  type: FETCH_CHANNEL_ERROR,
})
