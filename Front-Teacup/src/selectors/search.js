const searchAndReturn = (string = '', object = { name: '' }) => {
  const filtered = object.filter((item) => item.name.toLowerCase().includes(string.toLowerCase()));
  return filtered;
};

export default searchAndReturn;
