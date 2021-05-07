const searchAndReturn = (string, object) => object.filter((item) => item.name.includes(string));

export default searchAndReturn;
