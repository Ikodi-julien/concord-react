/* eslint-disable no-case-declarations */
/* email, password and token are mentionned in authReducer */
import {
  LOGIN_SUCCESS,
} from 'src/actions/loginsignupActions';
// import fakeChannels from 'src/middlewares/fakeChannels';

const userState = {
  id: -1,
  nickname: '',
  myChannelLinks: [],
  tags: [],
  channels: [],
  recommendedChannels: [],
};

const reducer = (stateActuel = userState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log('userReducer', action);
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
        tags: action.user.tags,
        channels: action.user.channels,
        recommendedChannels: recoList,
        myChannelLinks,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
