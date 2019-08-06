import _ from "lodash";
import QueryString from "query-string";

/**
 * Build a URL with GET query string.
 * @param url
 * @param params
 * @return {string}
 */
export const buildURLWithQueryString = (url = "", params = {}) => {
  const parsed = QueryString.parseUrl(url);
  const query = _.assign(parsed.query, params);

  return `${parsed.url}?${QueryString.stringify(query)}`;
};