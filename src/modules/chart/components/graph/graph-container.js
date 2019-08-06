import _ from "lodash";
import { connect } from "react-redux";
import { lifecycle, withProps } from "recompose";

import { chartTypes } from "../../../../data/charts";
import actions from "../../../../data/charts/actions";
import { isPending } from "../../../../data/async/utils";
import { getGraphComponent } from "../../../../modules/chart/utils";
import { getChartLegend } from "../../../../data/charts/selectors";
import { GRAPH_PALETTE } from "../../../../ui/style/colors";
import { ColorPalette } from "../../../../ui/charts/palette";

import Graph from "./graph";

/**
 * Use a global palette so the same label gets the same color.
 * @type {ColorPalette}
 */
const globalPalette = new ColorPalette(_.values(GRAPH_PALETTE));

/**
 * Derive additional props from passed props.
 */
const WithDerivedProps = withProps(ownProps => ({
  graphComponent: getGraphComponent(ownProps.chartConfig),
  palette: globalPalette
}))(Graph);

/**
 * Add lifecycle methods.
 */
const WithLifecycleMethods = lifecycle({
  componentDidMount () {
    this.props.fetchData(this.props.chartId, this.props.chartConfig)
  }
})(WithDerivedProps);

/**
 * Connect to Redux.
 */
const Connected = connect((state, ownProps) => {
  const chart = state.getIn(["charts", ownProps.chartId.toString()]);

  return {
    chartConfig: chart.get("config"),
    data: chart.get("data"),
    legend: getChartLegend(state, ownProps),
    loading: isPending(state, { type: chartTypes.FETCH_CHART_DATA, unique: ownProps.chartId })
  };
}, dispatch => ({
  fetchData: (chartId, chartConfig) => dispatch(actions.fetchChartData.start(chartId, chartConfig))
}))(WithLifecycleMethods);

export default Connected;