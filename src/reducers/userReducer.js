/* eslint-disable no-case-declarations */
/* email, password and token are mentionned in authReducer */
import {
  LOGIN_SUCCESS,
} from 'src/actions/loginsignupActions';

const userState = {
  id: 124,
  nickname: 'Bob',
  myChannelLinks: [
    { id: 1, name: "Films d'horreur" },
    { id: 2, name: 'Cuisine méditéranéenne' },
  ],
  myTags: [
    { id: 1, name: 'Films' },
    { id: 2, name: 'Cuisine' },
    { id: 3, name: 'Karaté' },
  ],
};

const reducer = (stateActuel = userState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('userReducer', action.user);
      const myChannelLinks = action.user.channels.map((channel) => ({
        ...channel,
        name: channel.title,
      }));
      return {
        ...stateActuel,
        id: action.user.id,
        nickname: action.user.nickname,
        myChannelLinks,
        myTags: action.user.tags,
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
