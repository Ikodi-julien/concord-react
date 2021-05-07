/* This reducer manage actions accessible from everywhere, such as nav and search behavior */

const appState = {
  tagsOptions: [
    { key: 'af', value: 'Films d\'horreur', text: 'Films d\'horreur' },
    { key: 'ax', value: 'Cuisine', text: 'Cuisine' },
    { key: 'al', value: 'Mangas', text: 'Mangas' },
    { key: 'dz', value: 'Jeux video', text: 'Jeux video' },
    { key: 'as', value: 'Sports d\'hiver', text: 'Sports d\'hiver' },
  ],
};

const reducer = (stateActuel = appState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...stateActuel,
      };
  }
};

export default reducer;
