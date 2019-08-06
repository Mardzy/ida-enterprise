import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";
import { connectRouter } from "connected-react-router/immutable";
import { createBrowserHistory } from "history";

import authReducer, { authTypes } from "./auth/index";
import asyncReducer from "./async/index";
import farmsReducer from "./farms/index";
import pagesReducer from "./pages/index";
import chartsReducer from "./charts/index";
import { INITIAL_STATE } from "./initial-state";

/**
 * Create a history instance.
 */
export const history = createBrowserHistory();

/**
 * Keys in the state which are protected.
 * @type {string[]}
 */
const protectedState = ["router"];

/**
 * Wipe the "dirty butt", aka. clean up after logging out.
 * @type {Reducer}
 * @memberOf module:Reducers
 * @param dirtyButtReducer
 * @return {function(*=, *=, ...[*])}
 */
const toiletPaperReducer = dirtyButtReducer => {
  return (state = INITIAL_STATE, action, ...rest) => {
    switch (action.type) {
      case authTypes.LOGOUT.FULFILLED:
        return state.filter((v, k) => protectedState.indexOf(k) > -1);
      default:
        console.log("default case");
    }

    return dirtyButtReducer(state, action, ...rest);
  }
};

/**
 * Combines all the imported reducers into application state.
 * @type {Reducer}
 * @memberOf module:Reducers
 */
export const rootReducer = toiletPaperReducer(combineReducers({
  auth: authReducer,
  async: asyncReducer,
  farms: farmsReducer,
  pages: pagesReducer,
  charts: chartsReducer,

  /* Router reducer */
  router: connectRouter(history),

  /* Redux-form reducer */
  form: formReducer
}));