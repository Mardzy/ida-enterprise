import { fromJS } from "immutable";
import _ from "lodash";

import types from "./types";

/**
 * Error key
 * @type {string}
 */
const ERROR = "error";

/**
 * Keys to look for in the back-end auth response.
 * @type {string[]}
 */
const AUTH_KEYS = ["access_token", "expires_in", ERROR];

/**
 * Map server messages to human readable strings.
 * @type {{invalid_grant: string}}
 */
const SERVER_ERRORS = {
  invalid_grant: "Incorrect username or password."
};

/**
 * Username keypath
 * @type {string[]}
 */
const USERNAME_KEYPATH = ["user", "username"];

/**
 * Initial state, maps AUTH_KEYS to an object.
 * @type {Immutable.Map<string, null>}
 */
const initialState = fromJS(
  Object.assign({
    user: {
      username: null
    }
  }, ...AUTH_KEYS.map(
    key => ({
      [_.camelCase(key)]: null
    })
  ))
);

/**
 * @type {Reducer}
 * @memberOf module:Reducers
 * @param state
 * @param action
 * @returns {Immutable.Map<string, *>}
 */
const auth = (state = initialState, action) => {
  let response;

  switch (action.type) {
    case types.LOGIN.PENDING:
      state = state.setIn(USERNAME_KEYPATH, action.payload.username);

      return state;

    case types.LOGIN.FULFILLED:
      response = action.payload;

      return state.withMutations(state => {
        // Pick the important data from the response, and set the values in the store.
        AUTH_KEYS.forEach(
          key => state.set(_.camelCase(key), response[key] || null)
        );
      });

    case types.LOGIN.REJECTED:
      response = action.payload.response;

      return state.withMutations(state => {
        // Set user email to null
        state = state.setIn(USERNAME_KEYPATH, null);

        // Add an error message.
        state.set(ERROR, SERVER_ERRORS[response[ERROR]]);
      });

    case types.REQUEST_USER.FULFILLED:
      return state.set("user", fromJS(action.payload));

    default:
      return state;
  }
};

export default auth;