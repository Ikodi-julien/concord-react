export const FETCH_CHANNEL = 'FETCH_CHANNEL';
export const FETCH_CHANNEL_SUCCESS = 'FETCH_CHANNEL_SUCCESS';
export const FETCH_CHANNEL_ERROR = 'FETCH_CHANNEL_ERROR';

export const UPDATE_CHANNEL_USERS = 'UPDATE_CHANNEL_USERS';
export const UPDATE_CHANNEL_USERS_SUCCESS = 'UPDATE_CHANNEL_USERS_SUCCESS';
export const UPDATE_CHANNEL_USERS_ERROR = 'UPDATE_CHANNEL_USERS_ERROR';

export const CONNECT_TO_SOCKET = 'CONNECT_TO_SOCKET';
export const SOCKET_JOIN_CONFIRM = 'SOCKET_JOIN_CONFIRM';
export const USER_LEAVE_CHANNEL = 'USER_LEAVE_CHANNEL';
export const USER_JOIN_CHANNEL = 'USER_JOIN_CHANNEL';

export const UPDATE_MY_CHANNELS = 'UPDATE_MY_CHANNELS';

export const CHANNEL_INPUT_CHANGE = 'CHANNEL_INPUT_CHANGE';
export const CHANNEL_FORM_SUBMIT = 'CHANNEL_FORM_SUBMIT';
export const SET_QUILL_TEXT = 'SET_QUILL_TEXT';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const TOGGLE_MY_CHANNELS = 'TOGGLE_MY_CHANNELS';
export const TOGGLE_USERS_IN_CHANNEL = 'TOGGLE_USERS_IN_CHANNEL';

// This is mainly for ajaxMiddleware, to fetch channel datas,
export const fetchChannel = (channelId) => ({
  type: FETCH_CHANNEL,
  channelId,
});
//
export const fetchChannelSuccess = (channel) => ({
  type: FETCH_CHANNEL_SUCCESS,
  channel,
});

export const fetchChannelError = () => ({ type: FETCH_CHANNEL_ERROR });
// This is dispatched in socketMiddleware, only after a FETCH_CHANNEL_SUCCESS comes in.
export const connectToSocket = () => ({ type: CONNECT_TO_SOCKET });
//
export const channelFormSubmit = () => ({ type: CHANNEL_FORM_SUBMIT });
export const userLeaveChannel = () => ({ type: USER_LEAVE_CHANNEL });
export const userJoinChannel = (data) => ({ type: USER_JOIN_CHANNEL, value: data });

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

// dispatched in socketMiddleware after a fetch_channel_success
export const socketJoinConfirm = () => ({ type: SOCKET_JOIN_CONFIRM });
// dispatched in socketMiddleware after an user:leave or user:leave event
export const updateChannelUsers = () => ({ type: UPDATE_CHANNEL_USERS });
export const updateChannelUsersSuccess = (data) => ({ type: UPDATE_CHANNEL_USERS_SUCCESS, value: data });
export const updateChannelUsersError = () => ({ type: UPDATE_CHANNEL_USERS_ERROR });

export const setQuillContent = (text) => ({ type: SET_QUILL_TEXT, value: text });
