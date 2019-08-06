import types from "./types";
import { createAsyncActions } from "../async/utils";

/**
 * Actions created from types.FETCH_CHART_DATA
 * @type {{start: Action, fulfilled: Action, rejected: Action}}
 */
const fetchChartData = createAsyncActions(
  types.FETCH_CHART_DATA,
  (chartId, config) => ({
    chartId,
    config
  }),
  (chartId, response) => ({
    data: response,
    chartId
  })
);

export default {
  fetchChartData
};