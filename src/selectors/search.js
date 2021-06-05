export const searchNameAndReturn = (string = '', object = { name: '' }) => {
  const filtered = object.filter((item) => item.name.toLowerCase().includes(string.toLowerCase()));
  return filtered;
};

export const searchTitleAndReturn = (string = '', object = { title: '' }) => {
  const filtered = object.filter((item) => item.title.toLowerCase().includes(string.toLowerCase()));
  return filtered;
};

export const searchTagsAndReturn = (string = '', object = {}) => {
  // search over every tag.name in channel.tags
  const filtered = object.filter((channel) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const tag of channel.tags) {
      if (tag.name.includes(string)) {
        return true;
      }
    }
  });

  return filtered;
};

export const searchChangeHandler = (evt, options) => {
  // On informe du changement dans l'input search
  options.searchChange(evt.target.value);
  // On filtre les tags selon le contenu de l'input search
  const filteredTags = searchNameAndReturn(evt.target.value, options.tags);
  // On fabrique la liste de tags utilisée par le composant search
  const searchTagResult = filteredTags.map((tag) => ({ title: tag.name }));
  // On filtre les channels selon le contenu de l'input search
  const newNavChannelList = searchTitleAndReturn(evt.target.value, options.channels);
  // On fabrique la liste de channels à afficher par le composant search
  const searchChannelResult = newNavChannelList.map((channel) => (
    {
      id: channel.id,
      title: channel.title,
    }));
  // On fabrique l'objet représentant les résultats utilisés par le composant search.
  const results = {
    channels: {
      name: 'Salons',
      results: searchChannelResult,
    },
    tags: {
      name: 'Catégories',
      results: searchTagResult,
    },
  };
  // On met les valeurs dans le store
  options.setSearchResult(results);
};

export const makeSelectOptions = (tags) => {
  const tagsOptions = tags.map((tag) => ({ key: tag.id, value: tag.name, text: tag.name }));
  return [{ key: 'A', value: '', text: 'Toutes catégories' }, ...tagsOptions];
};
