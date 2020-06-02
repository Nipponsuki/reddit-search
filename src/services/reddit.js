const search = async (searchTerm) => {
  const query = {
    method: 'GET',
  };
  const response = await fetch(
    `https://www.reddit.com/search.json?q=title:${searchTerm}&limit=10`,
    query
  );
  const json = await response.json();
  return json;
};

export { search };
