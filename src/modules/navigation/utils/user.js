/**
 * Possible username keys in user object.
 * @type {string[]}
 */
const MAY_BE_USERNAME_KEY = ["username", "userName"];

/**
 * Look up username based in the given user object.
 * @param user
 * @return {*}
 */
export const getUsername = user => MAY_BE_USERNAME_KEY.reduce((result, key) => result || user.get(key), null);

/**
 * Construct a display name for the user.
 * @return {string}
 */
export const getDisplayName = user => {
  /**
   * @type {string}
   */
  const firstName = user.get("givenName");

  /**
   * @type {string}
   */
  const lastName = user.get("surName");

  return [firstName, " ", lastName].join("").trim() || getUsername(user);
};