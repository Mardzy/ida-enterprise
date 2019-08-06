import _ from "lodash";
import { fromJS, isKeyed } from "immutable";

/**
 * Filter values in an immutable dataset.
 * @param data
 * @param expectedValue
 * @return {*}
 */
export const filterValuesDeep = (data, expectedValue) => data.reduce((result, value, key) => {
  let reduced = result;

  if (_.lowerCase(value) === _.lowerCase(expectedValue)) {
    reduced = reduced.set(key, value);
  } else if (isKeyed(value)) {
    reduced = reduced.set(key, filterValuesDeep(value, expectedValue));
  }

  return reduced;
}, fromJS({}));

/**
 * Serialise data to be stored in local storage
 * @param data
 * @return {string}
 */
export const serialize = data => {
  /**
   * Clean up failed and pending requests from data
   * so they can be restarted after reload.
   */
  // const cleanData = data.set("async", filterValuesDeep(data.get("async"), ASYNC_TYPES.FULFILLED));

  return JSON.stringify(data.toJS());
};

/**
 * De-serialise local storage data
 * @param data
 * @return {any}
 */
export const deserialize = data => {
  return fromJS(JSON.parse(data));
};

/**
 * Merge local storage with initial state
 * @param initial
 * @param persisted
 * @return {*}
 */
export const merge = (initial, persisted) => initial.merge(persisted);

/**
 * Custom slicer function which deal with immutable state
 * @param paths
 * @return {function(*): *}
 */
export const slice = paths => state => state.filter((v, k) => paths.indexOf(k) > -1);