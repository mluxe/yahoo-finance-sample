export function objectToQueryParams(obj) {
  let queryString = '';
  for (const key in obj) {
    if (key !== '' && key !== undefined && obj[key] !== undefined) {
      queryString += `${key}=${obj[key]}&`;
    }
  }
  return queryString;
}
