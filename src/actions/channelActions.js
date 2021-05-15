export const FETCH_CHANNEL = 'FETCH_CHANNEL';
export const FETCH_CHANNEL_SUCCESS = 'FETCH_CHANNEL_SUCCESS';
export const FETCH_CHANNEL_ERROR = 'FETCH_CHANNEL_ERROR';

export const CHANNEL_CONNECT = 'CHANNEL_CONNECT';
export const SOCKET_JOIN_CONFIRM = 'SOCKET_JOIN_CONFIRM';
export const USER_LEAVE_CHANNEL = 'USER_LEAVE_CHANNEL';
export const USER_JOIN_CHANNEL = 'USER_JOIN_CHANNEL';
export const CHANNEL_INPUT_CHANGE = 'CHANNEL_INPUT_CHANGE';
export const CHANNEL_FORM_SUBMIT = 'CHANNEL_FORM_SUBMIT';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const TOGGLE_MY_CHANNELS = 'TOGGLE_MY_CHANNELS';
export const TOGGLE_USERS_IN_CHANNEL = 'TOGGLE_USERS_IN_CHANNEL';

export const fetchChannel = (channelId) => ({
  type: FETCH_CHANNEL,
  channelId,
});

export const fetchChannelSuccess = (channel) => ({
  type: FETCH_CHANNEL_SUCCESS,
  channel,
});

export const fetchChannelError = () => ({ type: FETCH_CHANNEL_ERROR });
export const channelFormSubmit = () => ({ type: CHANNEL_FORM_SUBMIT });
export const channelConnect = () => ({ type: CHANNEL_CONNECT });
export const userLeaveChannel = () => ({ type: USER_LEAVE_CHANNEL });
export const userJoinChannel = () => ({ type: USER_JOIN_CHANNEL });

export const setInputValue = (inputObject) => ({
  type: CHANNEL_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value,
});

export const messageReceived = (message) => ({
  type: MESSAGE_RECEIVED,
  message,
});

export const toggleMyChannels = (bool) => ({
  type: TOGGLE_MY_CHANNELS,
  value: bool,
});

export const toggleUsersInChannel = (bool) => ({
  type: TOGGLE_USERS_IN_CHANNEL,
  value: bool,
});

export const socketJoinConfirm = () => ({ type: SOCKET_JOIN_CONFIRM });
