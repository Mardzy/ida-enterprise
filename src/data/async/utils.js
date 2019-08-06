import _ from "lodash";

import { ASYNC_TYPES } from "./constants";

/**
 * A function returning an empty object.
 * @type {function}
 * @return {{}}
 */
const createEmptyObject = () => ({});

/**
 * @type {{}}
 */
const ASYNC_TYPE_MAP = _.assign({}, ASYNC_TYPES, {
  [ASYNC_TYPES.PENDING]: "START"
});

/**
 * Create a type string with some metadata.
 * This way we need no extra boilerplate, still the reducer can read the extra info.
 * @param unique
 * @param from
 * @return {String}
 */
const createType = (from, unique = null) => {
  /**
   * We create a string object instead of a literal.
   * @type {String}
   */
  let type = new String(from);

  Object.defineProperty(type, "unique", {
    value: unique,
    writable: false
  });

  return type;
};

/**
 * Create async action types from a given namespace and title.
 * @param {string} ns
 * @param {string} title
 * @param {string} unique - a key which needs to be present in the action payload as a unique identifier for the reducer
 * @return {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}}
 */
const createAsyncTypes = (ns = "app", title, unique) => {
  if (!title) {
    throw new Error("All async action types need a title.");
  }

  return _.assign({
    meta: {
      name: `${ns}/${title}`,
      unique: unique
    },
  }, _.mapValues(ASYNC_TYPES, value => createType(`${ns}/${title}.${value}`, unique)));
};

/**
 * Create action creators from a 3-state async action.
 * @param {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}} typeObject
 * @param {function} createPendingPayload - function to create payload
 * @param {function} createFulfilledPayload - function to create payload
 * @param {function} createRejectedPayload - function to create payload
 * @return {{start: Action, fulfilled: Action, rejected: Action}}
 */
const createAsyncActions = (
  typeObject,
  createPendingPayload = createEmptyObject,
  createFulfilledPayload = createEmptyObject,
  createRejectedPayload = createEmptyObject
) => {
  /**
   * @type {Array}
   */
  const keys = _.keys(ASYNC_TYPES);

  /**
   * @type {{}}
   */
  const payloadCreators = {
    [ASYNC_TYPES.PENDING]: createPendingPayload,
    [ASYNC_TYPES.FULFILLED]: createFulfilledPayload,
    [ASYNC_TYPES.REJECTED]: createRejectedPayload,
  };

  return keys.reduce((result, current) => {
    result[_.lowerCase(ASYNC_TYPE_MAP[current])] = (...args) => ({
      type: typeObject[current],
      payload: payloadCreators[current](...args)
    });

    return result;
  }, {});
};

/**
 * Tell whether the given action is in a specific status.
 * @param state
 * @param {Object} action
 * @param {string} status
 * @return {boolean}
 */
const hasStatus = (state, action, status) => {
  /**
   * Wrong format, shorthand instead of expanded.
   */
  if (_.get(action, "meta.unique")) {
    let keys = _.keys(state.getIn(["async", action.meta.name]).toJS());
    let name = _.last(action.meta.name.split("/"));

    throw new Error(`You are trying to check the status of an async action type which may be responsible for 
    more than one key: ${keys}. Please use the { type: types.${name}, unique: "${_.first(keys)}" } format.`);
  }

  let { type, unique } = action;

  /**
   * Fallback for shorthand.
   */
  type = type || action;

  /**
   * @type {Array}
   */
  const path = _.concat(["async", type.meta.name], unique ? [unique] : []);

  return state.getIn(path) === _.lowerCase(status);
};

/**
 * Tell whether the given action is pending.
 * @param state
 * @param action
 * @return {boolean}
 */
const isPending = (state, action) => hasStatus(state, action, ASYNC_TYPES.PENDING);

/**
 * Tell whether the given action is fulfilled or rejected.
 * @param state
 * @param action
 * @return {boolean}
 */
const isNotPending = (state, action) => isFulfilled(state, action) || isRejected(state, action);

/**
 * Tell whether the given action is fulfilled.
 * @param state
 * @param action
 * @return {boolean}
 */
const isFulfilled = (state, action) => hasStatus(state, action, ASYNC_TYPES.FULFILLED);

/**
 * Tell whether the given action is rejected.
 * @param state
 * @param action
 * @return {boolean}
 */
const isRejected = (state, action) => hasStatus(state, action, ASYNC_TYPES.REJECTED);

/**
 * Tell whether any of the given action has been resolved.
 * @param state
 * @param actions
 * @returns {boolean}
 */
const anyResolved = (state, actions = []) => actions.length ?
  actions.reduce((result, currentAction) => result || isNotPending(state, currentAction), false) : true;

/**
 * Tell whether all of the given actions are resolved.
 * @param state
 * @param actions
 * @returns {boolean}
 */
const allResolved = (state, actions = []) => actions.length ?
    actions.reduce((result, currentAction) => result && isNotPending(state, currentAction), true) : true;

/**
 * Tell whether the given actions are resolved.
 * @param state
 * @param all
 * @param any
 * @return {boolean}
 */
const actionsResolved = (state, all = [], any = []) => allResolved(state, all) && anyResolved(state, any);

export {
  createAsyncTypes,
  createAsyncActions,
  isPending,
  isNotPending,
  isFulfilled,
  isRejected,
  actionsResolved
};