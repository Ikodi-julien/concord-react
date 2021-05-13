export const searchNameAndReturn = (string = '', object = { name: '' }) => {
  const filtered = object.filter((item) => item.name.toLowerCase().includes(string.toLowerCase()));
  return filtered;
};

export const searchTagsAndReturn = (string = '', object = {}) => {
  // search over every tag.name in channel.tags
  const filtered = object.filter((channel) => {
    for (const tag of channel.tags) {
      if (tag.name.includes(string)) {
        return true;
      }
    }
  });

  return filtered;
};
