export const getPathFromAPiUrl = (url, path) => {
  let result;

  if (url && path) {
    const regex = /(people|starships|planets)(\/)(\d+)/;
    const id = url.match(regex)[3];

    if (id) {
      result = `/${path}/${id}`;
    }
  }

  return result;
};
