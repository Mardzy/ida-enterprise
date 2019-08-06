import { fromJS } from "immutable";
import { createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistState from "redux-localstorage";
import { routerMiddleware } from "connected-react-router/immutable";

import { INITIAL_STATE } from "./initial-state";
import { rootReducer, history } from "./reducer";
import { rootEpic } from "./epic";
// import { gaMiddleware } from "data/config/analytics";
import { serialize, deserialize, merge, slice } from "./config/persistent-store";

/**
 * Construct an epic middleware.
 * @type {EpicMiddleware<Action, any, any, Action>}
 */
const epicMiddleware = createEpicMiddleware();

/**
 * Middleware to apply in the store.
 * @type {*[]}
 */
const middleware = [
  // gaMiddleware,
  epicMiddleware,
  routerMiddleware(history)
];

/**
 * Configuration for keeping all the redux state in localstorage.
 * @type {{key: string, slicer: slice, serialize: serialize, deserialize: deserialize, merge: merge}}
 */
const persistStateConfig = {
  key: "partner-dashboard",
  slicer: slice,
  serialize, deserialize, merge
};

/**
 * Create a Redux store.
 * @param {Object} initialState
 * @return {Store<any>}
 */
const configureStore = (initialState = {}) => createStore(
  rootReducer,
  INITIAL_STATE.merge(fromJS(initialState)),
  composeWithDevTools({})(
    applyMiddleware(...middleware),
    persistState(["auth", "farms"], persistStateConfig)
  )
);

/**
 * Create a store with the reducers.
 */
const store = configureStore();

epicMiddleware.run(rootEpic);

export default store;
export { history, epicMiddleware, configureStore };