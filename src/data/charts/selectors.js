import { createSelector } from "reselect";

import { generateLegendFromData, getLegendLookupForConfig } from "./legends/lookups";

/**
 * Chart config selector
 * @param state
 * @param props
 */
const chartConfigSelector = (state, props) => state.getIn(["charts", props.chartId.toString(), "config"]);

/**
 * Chart data selector
 * @param state
 * @param props
 */
const chartDataSelector = (state, props) => state.getIn(["charts", props.chartId.toString(), "data"]);

/**
 * Get chart legend information
 */
export const getChartLegend = createSelector(
  [chartConfigSelector, chartDataSelector],
  (config, data) => generateLegendFromData(data, getLegendLookupForConfig(config))
);