/**
 * React component.
 * @typedef {Function} ReactComponent
 */

/**
 * Redux action.
 * @typedef {Function} Action
 * @returns {{type: string, payload: object}}
 */

/**
 * Redux reducer.
 * @typedef {Function} Reducer
 * @param {*} state
 * @param {Object} action
 * @returns {*} state
 */

/**
 * Redux-observable epic.
 * @typedef {Function} Epic
 * @param {Observable} action$
 */