import KPIGraph from "../../../ui/charts/graph/kpi";
import Markers from "../../../ui/charts/graph/map";
import LineGraph from "../../../ui/charts/graph/line";
import InsightsList from "../../../ui/charts/graph/insights";

/**
 * @memberOf module:Constants
 * @type {{geo: string, stats: string}}
 */
export const CHART_TYPES = {
  geo: {
    markers: Markers
  },
  insights: {
    list: InsightsList
  },
  stats: {
    table: KPIGraph,
    line: LineGraph
  }
};

/**
 * Resolve a graph component from the given chart config.
 * @param {Immutable.Map} chartConfig
 * @return {*}
 */
export const getGraphComponent = chartConfig => CHART_TYPES[chartConfig.get("type")][chartConfig.get("view")];