import _ from "lodash";
import { LEGEND_LOOKUPS } from "./constants";

/**
 * Derive the legend information from the chart data
 * @param {{}|function} lookup
 * @param data
 */
export const generateLegendFromData = (data, lookup) => {
  if (lookup) {
    /**
     * @param item
     * @return {Object}
     */
    const applyLookup = item => _.isFunction(lookup) ? lookup(item) :
      _.mapValues(lookup, value => data[value]);

    return _.forEach(data, applyLookup);
  }
};

/**
 * Resolve the appropriate legend lookup from a chart config
 * @param config
 * @return {null}
 */
export const getLegendLookupForConfig = config => {
  return _.get(LEGEND_LOOKUPS, [config.get("type"), config.get("view")]);
};