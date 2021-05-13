export const searchNameAndReturn = (string = '', object = { name: '' }) => {
  const filtered = object.filter((item) => item.name.toLowerCase().includes(string.toLowerCase()));
  return filtered;
};

export const searchTagsAndReturn = (string = '', object = {}) => {
  // On fait une recherche sur chaque objet
  const filtered = object.filter((channel) => (
    channel.tags.includes(string)
  ));

  return filtered;
};
