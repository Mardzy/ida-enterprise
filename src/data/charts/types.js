import { createAsyncTypes } from "../async/utils";

/**
 * Farm namespace
 * @type {string}
 */
const ns = "app/charts";

/**
 * @memberOf module:Constants
 * @type {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}}
 */
const FETCH_CHART_DATA = createAsyncTypes(ns, "FETCH_CHART_DATA", "chartId");

export default {
  FETCH_CHART_DATA
}