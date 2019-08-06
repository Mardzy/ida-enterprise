import types from "./types";
import { createAsyncActions } from "../async/utils";

/**
 * Create action creators from types.FETCH_CHART_LIST
 * @type {{start: Action, fulfilled: Action, rejected: Action}}
 */
const fetchChartList = createAsyncActions(
  types.FETCH_CHART_LIST,
  (customerId, pageId) => ({
    customerId,
    pageId
  }),
  (pageId, response) => ({
    layout: response,
    pageId
  })
);

export default {
  fetchChartList
};