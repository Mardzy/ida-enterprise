import types from "./types";
import { createAsyncActions } from "../async/utils";

/**
 * Login actions created from types.LOGIN
 * @type {{start: Action, fulfilled: Action, rejected: Action}}
 */
const login = createAsyncActions(
  types.LOGIN,
  (username, password) => ({
    username,
    password
  }),
  response => response,
  response => response
);


/**
 * Logout action
 * @type {Action}
 * @memberOf module:Actions
 * @return {{type: string}}
 */
const logout = () => ({
  type: types.LOGOUT.PENDING
});

/**
 * Actions created from types.REQUEST_USER
 * @type {{start: Action, fulfilled: Action, rejected: Action}}
 */
const requestUser = createAsyncActions(
  types.REQUEST_USER,
  username => ({
    email: username
  }),
  response => response,
  response => response
);

export default {
  login,
  logout,
  requestUser
};

