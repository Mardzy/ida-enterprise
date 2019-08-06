import { createAsyncTypes } from "../async/utils";

/**
 * Farm namespace
 * @type {string}
 */
const ns = "app/farms";

/**
 * @memberOf module:Constants
 * @type {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}}
 */
const FETCH_FARM_LIST = createAsyncTypes(ns, "FETCH_FARM_LIST");

export default {
  FETCH_FARM_LIST
}