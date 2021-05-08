/* email, password and token are mentionned in authReducer */

const userState = {
  id: 124,
  nickname: 'Bob',
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

const reducer = (stateActuel = userState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
