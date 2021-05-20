export const FETCH_MY_CHANNELS = 'FETCH_MY_CHANNELS';
export const FETCH_MY_CHANNELS_SUCCESS = 'FETCH_MY_CHANNELS_SUCCESS';
export const FETCH_MY_CHANNELS_ERROR = 'FETCH_MY_CHANNELS_ERROR';

export const FETCH_MY_RECOS = 'FETCH_MY_RECOS';
export const FETCH_MY_RECOS_SUCCESS = 'FETCH_MY_RECOS_SUCCESS';
export const FETCH_MY_RECOS_ERROR = 'FETCH_MY_RECOS_ERROR';

export const fetchMyChannels = () => ({ type: FETCH_MY_CHANNELS });
export const fetchMyChannelsSuccess = (channels) => ({
  type: FETCH_MY_CHANNELS_SUCCESS,
  value: channels,
});
export const fetchMyChannelsError = () => ({ type: FETCH_MY_CHANNELS_ERROR });
export const fetchMyRecos = () => ({ type: FETCH_MY_RECOS });
export const fetchMyRecosSuccess = (channels) => ({
  type: FETCH_MY_RECOS_SUCCESS,
  value: channels,
});
export const fetchMyRecosError = () => ({ type: FETCH_MY_RECOS_ERROR });
