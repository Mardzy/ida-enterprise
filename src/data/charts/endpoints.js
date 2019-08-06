import _ from "lodash";

/**
 * Chart endpoints
 * @memberOf module:Constants
 * @type {{GeoMarkers: string, StatsTable: string, StatsLine: string, InsightsList: string}}
 */
const CHART_ENDPOINTS = {
  GeoMarkers: "http://iepartnerservice.azurewebsites.net/api/v1/geo/markers",
  StatsTable: "http://iepartnerservice.azurewebsites.net/api/v1/stats/table",
  StatsLine: "http://iepartnerservice.azurewebsites.net/api/v1/stats/line",
  InsightsList: "http://iepartnerservice.azurewebsites.net/api/v1/insights/list"
};

/**
 * Create a CapitalCased of the given arguments.
 * @param {[string]} parts
 * @return {string}
 */
const getEndpointKey = (...parts) => parts.map(_.capitalize).join("");

/**
 * Get chart endpoint for the given config.
 * @param config
 * @return {*}
 */
export const getChartEndpoint = config => CHART_ENDPOINTS[
  getEndpointKey(config.get("type"), config.get("view"))
];