import { createAsyncTypes } from "../async/utils";

/**
 * Farm namespace
 * @type {string}
 */
const ns = "app/pages";

/**
 * @memberOf module:Constants
 * @type {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}}
 */
const FETCH_CHART_LIST = createAsyncTypes(ns, "FETCH_CHART_LIST", "pageId");

export default {
  FETCH_CHART_LIST
}