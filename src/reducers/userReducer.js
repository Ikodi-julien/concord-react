/* email, password and token are mentionned in authReducer */
import {
  LOGIN_SUCCESS,
} from 'src/actions/loginsignupActions';

const userState = {
  id: 124,
  nickname: 'Bob',
  loggued: false,
  myChannelLinks: [
    { id: 1, slug: 'filmsdhorreur', name: "Films d'horreur" },
    { id: 2, slug: 'cuisine', name: 'Cuisine méditéranéenne' },
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
      return {
        ...stateActuel,
        id: action.user.id,
        nickname: action.user.nickname,
        loggued: true,
        myChannelLinks: [
          { id: 1, slug: 'filmsdhorreur', name: "Films d'horreur" },
          { id: 2, slug: 'cuisine', name: 'Cuisine méditéranéenne' },
        ],
        myTags: [
          { id: 1, name: 'Films' },
          { id: 2, name: 'Cuisine' },
          { id: 3, name: 'Karaté' },
        ],
      };

    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
